import React from 'react';

/** The public support address for Watchtime Tracker (privacy questions and deletion requests). */
export const SUPPORT_EMAIL = 'lucaskeller98@mail.com';

const sectionTitle = {
	marginTop: '0cm',
	marginBottom: '15.0pt',
	border: 'none',
	borderBottom: 'solid #4F81BD 1.0pt',
	padding: '0cm 0cm 4.0pt 0cm',
	fontSize: '35px',
	color: '#17365D',
};
const heading = { marginTop: '10.0pt', marginBottom: '0cm', fontSize: '17px', color: '#4F81BD' };
const text = { marginTop: '0cm', marginBottom: '10.0pt', fontSize: '15px' };

/** The privacy section of the Watchtime Tracker Android app, shown inside the privacy policy. */
export const WatchtimeAndroidPrivacy = () => (
	<div id="android">
		<p style={sectionTitle}>Watchtime Tracker for Android</p>
		<p style={text}>
			This section describes the Watchtime Tracker app for Android. Where it differs from the rest of this
			policy, this section applies to the app.
		</p>
		<h2 style={heading}>What the app reads</h2>
		<p style={text}>
			With the notification access You grant, the app reads which video or stream the YouTube and Twitch apps
			are playing: title, channel, whether it is playing or paused, and its length. It reads this only from
			the media controls of those apps. It never reads the content of Your notifications and looks at no
			other app.
		</p>
		<p style={text}>
			If You install an optional add-on for a modified YouTube app, that add-on tells the app when a Short
			starts and stops playing, with the Short&apos;s id. Nothing else is received from it.
		</p>
		<h2 style={heading}>What stays on Your phone</h2>
		<p style={text}>
			The app stores Your watch time per day and per channel, and a short log of what played and of tracking
			errors, on Your phone. Without an account none of it leaves the phone. The phone&apos;s backup to Your
			Google account is turned off for this data.
		</p>
		<h2 style={heading}>With an account</h2>
		<p style={text}>
			If You sign in (with Google or an e-mail address), the app stores Your e-mail address and Your watch
			time per day and per channel in Google Firebase, in the same account as the Watchtime Tracker browser
			extension, so You can see all Your watch time in one place. Titles of what You watched are not
			uploaded. The data is transferred encrypted.
		</p>
		<h2 style={heading}>Problem reports (optional, off by default)</h2>
		<p style={text}>
			If You turn on &quot;Report tracking problems&quot; in the app&apos;s settings, the app sends once a day
			counts of tracking errors to Google Analytics: the app version, the Android version, the tracked app
			and its version, the kind of error and how often it happened. It never sends what You watched, Your
			account, or any identifier of Your phone; every report uses a new random id. &quot;Send
			diagnostics&quot; shares the tracking-error log only with whoever You choose in Your phone&apos;s share
			menu.
		</p>
		<h2 style={heading}>Deleting Your data</h2>
		<p style={text}>
			In the app: Settings, &quot;Delete account and data&quot;. This deletes Your account and its watch time
			on all devices, including the browser extension. Without an account, uninstalling the app deletes all
			its data. See also <a href="/delete-account">lucask.dev/delete-account</a>.
		</p>
		<p style={text}>Questions: {SUPPORT_EMAIL}</p>
	</div>
);
