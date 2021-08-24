const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { CloudBillingClient } = require('@google-cloud/billing');
const { google } = require('googleapis');
const { GoogleAuth } = require('google-auth-library');
const { Webhook } = require('discord-webhook-node');

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
	const billingAlertIncrement = 0.01;
	const projectedCostsToFreakOutAbout = 10.0;
	const eurosPerHourToFreakOutAbout = 1.0;
	const killingProjectAmount = 20.0;
	let sendMessage = false;
	let messageString = '';

	if (billingInfoDoc.exists) {
		const previousBillingInfo = billingInfoDoc.data();

		if (spentSoFar - previousBillingInfo.lastReportedCost >= billingAlertIncrement) {
			sendMessage = true;
			messageString = `The current cost of WatchtimeTracker is at ${pubSubData.costAmount}€.`;
		} else if (isNewBillingCycle(pubSubData, previousBillingInfo)) {
			sendMessage = true;
			messageString = `It's a new billing cycle! Cost of WatchtimeTracker is ${spentSoFar}€.`;
		}

		const spendRate = calculateEurosPerHour(pubSubData, previousBillingInfo);
		if (spendRate > eurosPerHourToFreakOutAbout) {
			sendMessage = true;
			messageString += ` :warning: WatchtimeTracker currently costs about ${spendRate.toFixed(
				2
			)}€ per hour! :warning:`;
		} else {
			messageString += ` WatchtimeTracker currently costs about ${spendRate.toFixed(
				2
			)}€ per hour.`;
		}
	} else {
		sendMessage = true;
		messageString = 'Initializing billing alerts.';
	}

	const projectedCosts = calculateProjectedCosts(pubSubData);
	if (projectedCosts > projectedCostsToFreakOutAbout) {
		sendMessage = true;
		messageString += ` :warning: Projected costs are at about ${projectedCosts}€ this billing period! :warning: `;
	}
	messageString += ` Projected costs are at about ${projectedCosts}€ this billing period`;

	if (spentSoFar >= killingProjectAmount) {
		await disableBillingForReal();
		sendMessage = true;
		messageString += ` :warning: WARNING! BILLING DISBALED! :warning: THE PROJECT REACHED ${spentSoFar} :warning:`;
	}

	if (sendMessage) {
		await firestore.doc('/private/billing_info').set({
			lastReportedCost: spentSoFar,
			lastReportedBillingStart: new Date(pubSubData.costIntervalStart),
			lastReportedCostTime: new Date(),
		});
		discordHook.send(messageString);
	}
}

function isNewBillingCycle(pubSubData, previousBillingInfo) {
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
