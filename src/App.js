import React from 'react';
import UnderConstruction from 'react-under-construction';
import 'react-under-construction/build/css/index.css';
import './App.css';
import chart from './assets/chart.svg';
import cat from './assets/cat.svg';
import time from './assets/time.svg';
import tree from './assets/tree.svg';
import chrome from './assets/chrome.svg';
import firefox from './assets/firefox.svg';
import connection from './assets/connection.svg';

import { Router } from '@reach/router';
import TermsOfService from './Components/TermsOfService';
import PrivacyPolicy from './Components/PrivacyPolicy';

function App() {
	return (
		<Router style={{ height: '100%' }}>
			<UnderConstruction
				path="/"
				background={{
					image:
						'https://uhdwallpapers.org/uploads/converted/19/11/03/sun-rays-through-forest-trees-photography-2560x1440_788678-mm-90.jpg',
					textColor: '#fff',
					overlay: {
						color: '#000',
						opacity: '.5',
					},
				}}
				logo={{
					src: cat,
					alt: 'watch',
				}}
				title={{
					text: 'Lucas Keller',
				}}
				description={{
					text: 'This is just a placeholder :)',
				}}
				links={[
					// {
					//   url: "https://www.facebook.com/",
					//   image: "https://image.flaticon.com/icons/svg/220/220200.svg",
					// },
					{
						url: 'https://analytics.lucask.dev',
						image: chart,
					},
					{
						url: 'https://spanningtree.lucask.dev',
						image: connection,
					},
					{
						url: 'https://xd33m.github.io/',
						image: time,
					},
					{
						url: 'https://btree.lucask.dev/',
						image: tree,
					},
					{
						url:
							'https://chrome.google.com/webstore/detail/watchtime-tracker/boabmhiakmbbkgjcekpmbihapljoaioc',
						image: chrome,
					},
					{
						url:
							'https://addons.mozilla.org/en-US/firefox/addon/watchtime-tracker/',
						image: firefox,
					},
				]}
			/>
			<TermsOfService path="tos" />
			<PrivacyPolicy path="privacy" />
		</Router>
	);
}

export default App;
