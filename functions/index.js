const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { CloudBillingClient } = require('@google-cloud/billing');
const { google } = require('googleapis');
const { GoogleAuth } = require('google-auth-library');
const { Webhook, MessageBuilder } = require('discord-webhook-node');
// const fetch = require('node-fetch');

const firestore = admin.initializeApp().firestore();
const billing = new CloudBillingClient();

const PROJECT_ID = process.env.GCLOUD_PROJECT;
const PROJECT_NAME = `projects/${PROJECT_ID}`;

const discordHook = new Webhook(functions.config().discord.webhook_url);

function setCredentialsForBiling() {
	const client = new GoogleAuth({
		scopes: [
			'https://www.googleapis.com/auth/cloud-billing',
			'https://www.googleapis.com/auth/cloud-platform',
		],
	});

	google.auth = client;
}

async function disableBillingForReal() {
	setCredentialsForBiling();
	if (PROJECT_NAME) {
		const [res] = await billing.getProjectBillingInfo({ name: PROJECT_NAME });
		const billingInfo = res;
		if (billingInfo.billingEnabled) {
			await billing.updateProjectBillingInfo({
				name: PROJECT_NAME,
				resource: { billingAccountName: '' }, // disable billing
			});
		}
	}
}

exports.receiveBillingNotice = functions.pubsub.topic('billing').onPublish((message) => {
	try {
		const data = message.json;
		handlePubSub(data);
	} catch (e) {
		console.error(`Parsing exception in receiveBillingNotice cloud function ${e}`);
	}
	return null;
});

async function handlePubSub(pubSubData) {
	const billingInfoDoc = await firestore.doc('/private/billing_info').get();
	const spentSoFar = pubSubData.costAmount;

	const billingAlertIncrement = 0.1;
	const projectedCostsToFreakOutAbout = 10.0;
	const eurosPerHourToFreakOutAbout = 1.0;
	const killingProjectAmount = 20.0;

	let sendMessage = false;
	let messageString = '';

	let isEmergency = false;
	let killingProject = false;

	let spendRate = null;

	if (billingInfoDoc.exists) {
		const previousBillingInfo = billingInfoDoc.data();

		if (
			spentSoFar - previousBillingInfo.lastReportedCost >=
			billingAlertIncrement
		) {
			sendMessage = true;
			messageString = `⚡: ${(
				Math.round(pubSubData.costAmount * 100) / 100
			).toFixed(2)}€ currently`;
		} else if (checkNewBillingCycle(pubSubData, previousBillingInfo)) {
			sendMessage = true;
			messageString = `✅ New Billing Cycle! \n\n ⚡: ${(
				Math.round(pubSubData.costAmount * 100) / 100
			).toFixed(2)}€ currently.`;
		}

		spendRate = calculateEurosPerHour(pubSubData, previousBillingInfo);
		if (spendRate > eurosPerHourToFreakOutAbout) {
			sendMessage = true;
			isEmergency = true;
			messageString += ` \n\n 🕑: ${spendRate.toFixed(2)}€/hour! ⚠`;
		} else {
			messageString += ` \n\n 🕑: ${spendRate.toFixed(3)}€/hour`;
		}
	} else {
		sendMessage = true;
		messageString = 'Initializing billing alerts.';
	}

	const projectedCosts = calculateProjectedCosts(pubSubData);
	if (projectedCosts > projectedCostsToFreakOutAbout) {
		sendMessage = true;
		isEmergency = true;
		messageString += ` \n\n 🏁: ${projectedCosts}€ this month! ⚠`;
	}
	messageString += ` \n\n 🏁: ${projectedCosts}€ this month`;

	if (spentSoFar >= killingProjectAmount) {
		await disableBillingForReal();
		sendMessage = true;
		isEmergency = true;
		killingProject = true;
		messageString += ` \n\n ⚠ WARNING! BILLING DISBALED! ⚠ THE PROJECT REACHED ${spentSoFar}€ ⚠`;
	}

	if (sendMessage) {
		await firestore.doc('/private/billing_info').set({
			lastReportedCost: spentSoFar,
			lastReportedBillingStart: new Date(pubSubData.costIntervalStart),
			lastReportedCostTime: new Date(),
		});
		const discordEmbed = getDiscordEmbed(messageString, isEmergency);
		discordHook.send(discordEmbed);
		// if (isEmergency) {
		// 	await sendNotificationToPhone(
		// 		spentSoFar,
		// 		spendRate,
		// 		killingProject
		// 	);
		// }
	}
}

function checkNewBillingCycle(pubSubData, previousBillingInfo) {
	const startOfCurrentCyle = new Date(pubSubData.costIntervalStart);
	const lastBillingCycleStartDate =
		previousBillingInfo.lastReportedBillingStart.toDate();
	if (startOfCurrentCyle.getTime() === lastBillingCycleStartDate.getTime()) {
		return false;
	} else {
		return true;
	}
}

function calculateProjectedCosts(pubSubData) {
	const billingCycleStart = new Date(pubSubData.costIntervalStart).getTime();
	const today = new Date();
	const todayInMills = today.getTime();
	const lastMillisecondOfCycle =
		new Date(today.getFullYear(), today.getMonth() + 1, 1).getTime() - 1;
	const pctThere =
		Math.round(
			((todayInMills - billingCycleStart) /
				(lastMillisecondOfCycle - billingCycleStart)) *
				100
		) / 100;

	const projectedCosts = Math.round((pubSubData.costAmount / pctThere) * 100) / 100;
	return projectedCosts;
}

function calculateEurosPerHour(pubSubData, previousBillingInfo) {
	const lastReportedCost = previousBillingInfo.lastReportedCost;
	const spentSoFar = pubSubData.costAmount;
	const deltaSpent = spentSoFar - lastReportedCost;

	const lastReportedCostTime = previousBillingInfo.lastReportedCostTime.toDate();
	const today = new Date();
	const deltaTimeInSeconds = (today.getTime() - lastReportedCostTime.getTime()) / 1000;
	const deltaTimeHours = deltaTimeInSeconds / 3600;

	const eurosPerHour = deltaSpent / deltaTimeHours;
	return eurosPerHour;
}

exports.fakePubSub = functions.https.onRequest((request, response) => {
	const isEmulated = process.env.FUNCTIONS_EMULATOR;
	if (!isEmulated) {
		response.send("Looks like you're calling this in production");
		return;
	}

	const rawMessage = request.body.fakePubSub;
	try {
		const data = JSON.parse(rawMessage);
		if (data !== undefined) {
			handlePubSub(data);
		} else {
			console.error('could not convert json');
		}
	} catch (error) {
		console.error(`Got an error! ${error}`);
	}
	response.send('All done! Check logs');
});

// exports.frageAnTim = functions.https.onRequest((request, response) => {
// 	response.send('Heute Apex? :)');
// });

function getDiscordEmbed(messageString, isEmergency) {
	let discordEmbed;

	if (!isEmergency) {
		discordEmbed = new MessageBuilder()
			.setAuthor(
				'Billing Update',
				'https://img.icons8.com/color/452/firebase.png',
				'https://console.firebase.google.com/u/0/project/websitecounter-256911/usage'
			)
			.setColor('#008000')
			.setDescription(messageString)
			// .setImage('https://cdn.discordapp.com/embed/avatars/0.png')
			.setFooter('Looking good 😀')
			.setTimestamp();
	} else {
		discordEmbed = new MessageBuilder()
			.setAuthor(
				'Billing Update',
				'https://img.icons8.com/color/452/firebase.png',
				'https://console.firebase.google.com/u/0/project/websitecounter-256911/usage'
			)
			.setColor('#FF0000')
			.setThumbnail(
				'https://images.emojiterra.com/google/android-10/512px/26a0.png'
			)
			.setDescription(messageString)
			.setFooter('Something is wrong 😕')
			.setTimestamp();
	}
	return discordEmbed;
}

// async function postData(url = '', data = {}) {
// 	const response = await fetch(url, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify(data),
// 	});
// 	return response.json();
// }

// async function sendNotificationToPhone(spentSoFar, spendRate, killingProject) {
// 	let msg = '';
// 	if (killingProject) msg += 'WATCHTIME TRACKER DISABLED!';
// 	if (spendRate !== null)
// 		msg += `Unusual costs! Currently ${spendRate.toFixed(2)}€/hour.`;

// 	msg += `Spent so far: ${spentSoFar.toFixed(2)}€.`;

// 	const gotifyUrl = functions.config().gotify.url;
// 	const gotifyToken = functions.config().gotify.token;

// 	const res = postData(`${gotifyUrl}message?token=${gotifyToken}`, {
// 		title: 'WatchtimeTracker Alert',
// 		message: msg,
// 		priority: 5,
// 	});
// 	return res;
// }
