import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { SUPPORT_EMAIL } from './WatchtimeAndroid';

const text = { marginTop: '0cm', marginBottom: '10.0pt', fontSize: '15px' };
const heading = { marginTop: '10.0pt', marginBottom: '4.0pt', fontSize: '17px', color: '#4F81BD' };

/** How to delete a Watchtime Tracker account and its data (linked from Google Play's data-safety section). */
const DeleteAccount = () => {
	useEffect(() => {
		document.title = 'Delete your Watchtime Tracker account';
	}, []);
	return (
		<Container maxWidth="md" style={{ height: '100vh', overflow: 'auto' }}>
			<h1 style={{ textAlign: 'center' }}>Delete your Watchtime Tracker account</h1>
			<p style={text}>
				This page explains how to delete Your account for Watchtime Tracker (the Android app and the browser
				extension, by Lucas Keller) and all data stored with it.
			</p>
			<h2 style={heading}>What is deleted</h2>
			<p style={text}>
				Your account, Your e-mail address and all watch time stored with the account, from all devices: the
				Android app and the browser extension. Nothing is kept.
			</p>
			<h2 style={heading}>In the Android app</h2>
			<p style={text}>
				Open Settings, tap &quot;Delete account and data&quot;, confirm, and sign in once more when asked. The
				account and its data are deleted at once.
			</p>
			<h2 style={heading}>In the browser extension</h2>
			<p style={text}>Open the extension, then Settings, &quot;Delete all my data&quot;, and confirm.</p>
			<h2 style={heading}>If You cannot sign in any more</h2>
			<p style={text}>
				Send an e-mail to <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> from the address of Your
				account, with the subject &quot;Delete my Watchtime Tracker account&quot;. Your account and all its
				data are deleted within 7 days, and You get a confirmation.
			</p>
			<h2 style={heading}>Without an account</h2>
			<p style={text}>
				All data stays on Your device. Uninstalling the app or removing the extension deletes it.
			</p>
		</Container>
	);
};

export default DeleteAccount;
