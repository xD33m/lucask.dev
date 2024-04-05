import React, { Component } from 'react';
import { Container, Grid } from '@mui/material';

class PrivacyPolicy extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		document.title = 'Privacy Policy';
	}

	render() {
		return (
			<>
				<Container maxWidth="md" style={{ height: '100vh', overflow: 'auto' }}>
					<Grid>
						<h1 style={{ textAlign: 'center' }}>Privacy Policy</h1>
					</Grid>
					<Grid container>
						<div>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								This Privacy Policy describes Our policies and procedures
								on the collection, use and disclosure of Your information
								when You use the Service and tells You about Your privacy
								rights and how the law protects You.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								We use Your Personal data to provide and improve the
								Service. By using the Service, You agree to the collection
								and use of information in accordance with this Privacy
								Policy.
							</p>
							<div
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',

									border: 'none',
									borderBottom: 'solid #4F81BD 1.0pt',
									padding: '0cm 0cm 4.0pt 0cm',
								}}
							>
								<p
									style={{
										marginTop: '0cm',
										marginRight: '0cm',
										marginBottom: '15.0pt',
										marginLeft: '0cm',
										border: 'none',
										padding: '0cm',
										fontSize: '35px',

										color: '#17365D',
									}}
								>
									Interpretation and Definitions
								</p>
							</div>
							<h2
								style={{
									marginTop: '10.0pt',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '0cm',

									fontSize: '17px',

									color: '#4F81BD',
								}}
							>
								Interpretation
							</h2>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								The words of which the initial letter is capitalized have
								meanings defined under the following conditions. The
								following definitions shall have the same meaning
								regardless of whether they appear in singular or in
								plural.
							</p>
							<h2
								style={{
									marginTop: '10.0pt',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '0cm',

									fontSize: '17px',

									color: '#4F81BD',
								}}
							>
								Definitions
							</h2>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								For the purposes of this Privacy Policy:
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>Account</strong> means a unique account created
								for You to access our Service or parts of our Service.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>Company</strong> (referred to as either "the
								Company", "We", "Us" or "Our" in this Agreement) refers to
								Watchtime Tracker.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								For the purpose of the GDPR, the Company is the Data
								Controller.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>Cookies</strong> are small files that are placed
								on Your computer, mobile device or any other device by a
								website, containing the details of Your browsing history
								on that website among its many uses.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>Country</strong> refers to: Baden-Württemberg,
								Germany
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>Data Controller</strong>, for the purposes of the
								GDPR (General Data Protection Regulation), refers to the
								Company as the legal person which alone or jointly with
								others determines the purposes and means of the processing
								of Personal Data.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>Device</strong> means any device that can access
								the Service such as a computer, a cellphone or a digital
								tablet.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>Personal Data</strong> is any information that
								relates to an identified or identifiable individual.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								For the purposes for GDPR, Personal Data means any
								information relating to You such as a name, an
								identification number, location data, online identifier or
								to one or more factors specific to the physical,
								physiological, genetic, mental, economic, cultural or
								social identity.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>Service</strong> refers to the Browser-Extension.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>Service Provider</strong> means any natural or
								legal person who processes the data on behalf of the
								Company. It refers to third-party companies or individuals
								employed by the Company to facilitate the Service, to
								provide the Service on behalf of the Company, to perform
								services related to the Service or to assist the Company
								in analyzing how the Service is used. For the purpose of
								the GDPR, Service Providers are considered Data
								Processors.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>Third-party Social Media Service</strong> refers
								to any website or any social network website through which
								a User can log in or create an account to use the Service.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>Usage Data</strong> refers to data collected
								automatically, either generated by the use of the Service
								or from the Service infrastructure itself (for example,
								the duration of a page visit).
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>Website</strong> refers to Watchtime
								Tracker-Browser-Extension, accessible from{' '}
								<a href="https://chrome.google.com/webstore/detail/watchtime-tracker/boabmhiakmbbkgjcekpmbihapljoaioc">
									<span
										style={{
											color: 'windowtext',
											textDecoration: 'none',
										}}
									>
										https://chrome.google.com/webstore/detail/watchtime-tracker/boabmhiakmbbkgjcekpmbihapljoaioc
									</span>
								</a>{' '}
								or
								https://addons.mozilla.org/en-US/firefox/addon/watchtime-tracker/
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>You</strong> means the individual accessing or
								using the Service, or the company, or other legal entity
								on behalf of which such individual is accessing or using
								the Service, as applicable.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								Under GDPR (General Data Protection Regulation), You can
								be referred to as the Data Subject or as the User as you
								are the individual using the Service.
							</p>
							<div
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',

									border: 'none',
									borderBottom: 'solid #4F81BD 1.0pt',
									padding: '0cm 0cm 4.0pt 0cm',
								}}
							>
								<p
									style={{
										marginTop: '0cm',
										marginRight: '0cm',
										marginBottom: '15.0pt',
										marginLeft: '0cm',
										border: 'none',
										padding: '0cm',
										fontSize: '35px',

										color: '#17365D',
									}}
								>
									Collecting and Using Your Personal Data
								</p>
							</div>
							<h2
								style={{
									marginTop: '10.0pt',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '0cm',

									fontSize: '17px',

									color: '#4F81BD',
								}}
							>
								Types of Data Collected
							</h2>
							<h3
								style={{
									marginTop: '10.0pt',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '0cm',

									fontSize: '15px',

									color: '#4F81BD',
								}}
							>
								Personal Data
							</h3>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								While using Our Service, We may ask You to provide Us with
								certain personally identifiable information that can be
								used to contact or identify You. Personally identifiable
								information may include, but is not limited to:
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								Email address
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								Usage Data
							</p>
							<h3
								style={{
									marginTop: '10.0pt',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '0cm',

									fontSize: '15px',

									color: '#4F81BD',
								}}
							>
								Usage Data
							</h3>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								Usage Data is collected automatically when using the
								Service.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								Usage Data may include information such as Your Device's
								Internet Protocol address (e.g. IP address), browser type,
								browser version, the pages of our Service that You visit,
								the time and date of Your visit, the time spent on those
								pages, unique device identifiers and other diagnostic
								data.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								When You access the Service by or through a mobile device,
								We may collect certain information automatically,
								including, but not limited to, the type of mobile device
								You use, Your mobile device unique ID, the IP address of
								Your mobile device, Your mobile operating system, the type
								of mobile Internet browser You use, unique device
								identifiers and other diagnostic data.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								We may also collect information that Your browser sends
								whenever You visit our Service or when You access the
								Service by or through a mobile device.
							</p>
							<h3
								style={{
									marginTop: '10.0pt',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '0cm',

									fontSize: '15px',

									color: '#4F81BD',
								}}
							>
								Tracking Technologies and Cookies
							</h3>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								We use Cookies and similar tracking technologies to track
								the activity on Our Service and store certain information.
								Tracking technologies used are beacons, tags, and scripts
								to collect and track information and to improve and
								analyze Our Service. The technologies We use may include:
							</p>
							<ul style={{ listStyleType: 'disc' }}>
								<li>
									<strong>Cookies or Browser Cookies.</strong> A cookie
									is a small file placed on Your Device. You can
									instruct Your browser to refuse all Cookies or to
									indicate when a Cookie is being sent. However, if You
									do not accept Cookies, You may not be able to use some
									parts of our Service. Unless you have adjusted Your
									browser setting so that it will refuse Cookies, our
									Service may use Cookies.
								</li>
								<li>
									<strong>Flash Cookies.</strong> Certain features of
									our Service may use local stored objects (or Flash
									Cookies) to collect and store information about Your
									preferences or Your activity on our Service. Flash
									Cookies are not managed by the same browser settings
									as those used for Browser Cookies. For more
									information on how You can delete Flash Cookies,
									please read "Where can I change the settings for
									disabling, or deleting local shared objects?"
									available at{' '}
									<a href="https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_">
										<span
											style={{
												color: 'windowtext',
												textDecoration: 'none',
											}}
										>
											https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_
										</span>
									</a>
								</li>
								<li>
									<strong>Web Beacons.</strong> Certain sections of our
									Service and our emails may contain small electronic
									files known as web beacons (also referred to as clear
									gifs, pixel tags, and single-pixel gifs) that permit
									the Company, for example, to count users who have
									visited those pages or opened an email and for other
									related website/browser-extension statistics (for
									example, recording the popularity of a certain section
									and verifying system and server integrity).
								</li>
							</ul>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								Cookies can be "Persistent" or "Session" Cookies.
								Persistent Cookies remain on Your personal computer or
								mobile device when You go offline, while Session Cookies
								are deleted as soon as You close Your web browser. You can
								learn more about cookies here:{' '}
								<a href="https://www.termsfeed.com/blog/cookies/">
									<span
										style={{
											color: 'windowtext',
											textDecoration: 'none',
										}}
									>
										All About Cookies by TermsFeed
									</span>
								</a>
								.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								We use both Session and Persistent Cookies for the
								purposes set out below:
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>Necessary / Essential Cookies</strong>
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								Type: Session Cookies
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								Administered by: Us
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								Purpose: These Cookies are essential to provide You with
								services available through the browser-extension and to
								enable You to use some of its features. They help to
								authenticate users and prevent fraudulent use of user
								accounts. Without these Cookies, the services that You
								have asked for cannot be provided, and We only use these
								Cookies to provide You with those services.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>
									Cookies Policy / Notice Acceptance Cookies
								</strong>
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								Type: Persistent Cookies
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								Administered by: Us
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								Purpose: These Cookies identify if users have accepted the
								use of cookies on the Website/browser-extension.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>Functionality Cookies</strong>
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								Type: Persistent Cookies
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								Administered by: Us
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								Purpose: These Cookies allow us to remember choices You
								make when You use the Website/Browser-Extension, such as
								remembering your login details or language preference. The
								purpose of these Cookies is to provide You with a more
								personal experience and to avoid You having to re-enter
								your preferences every time You use the
								Website/Browser-Extension.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>Tracking and Performance Cookies</strong>
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								Type: Persistent Cookies
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								Administered by: Third-Parties
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								Purpose: These Cookies are used to track information about
								traffic to the Website /Browser-Extension and how users
								use the Website/Browser-Extension. The information
								gathered via these Cookies may directly or indirectly
								identify you as an individual visitor. This is because the
								information collected is typically linked to a
								pseudonymous identifier associated with the device you use
								to access the Website/Browser-Extension. We may also use
								these Cookies to test new pages, features or new
								functionality of the Website/Browser-Extension to see how
								our users react to them.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								For more information about the cookies we use and your
								choices regarding cookies, please visit our Cookies Policy
								or the Cookies section of our Privacy Policy.
							</p>
							<h2
								style={{
									marginTop: '10.0pt',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '0cm',

									fontSize: '17px',

									color: '#4F81BD',
								}}
							>
								Use of Your Personal Data
							</h2>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								The Company may use Personal Data for the following
								purposes:
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>To provide and maintain our Service</strong>,
								including to monitor the usage of our Service.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>To manage Your Account:</strong> to manage Your
								registration as a user of the Service. The Personal Data
								You provide can give You access to different
								functionalities of the Service that are available to You
								as a registered user.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>For the performance of a contract:</strong> the
								development, compliance and undertaking of the purchase
								contract for the products, items or services You have
								purchased or of any other contract with Us through the
								Service.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>To contact You:</strong> To contact You by email,
								telephone calls, SMS, or other equivalent forms of
								electronic communication, such as a mobile application's
								push notifications regarding updates or informative
								communications related to the functionalities, products or
								contracted services, including the security updates, when
								necessary or reasonable for their implementation.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>To provide You</strong> with news, special offers
								and general information about other goods, services and
								events which we offer that are similar to those that you
								have already purchased or enquired about unless You have
								opted not to receive such information.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>To manage Your requests:</strong> To attend and
								manage Your requests to Us.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>For business transfers:</strong> We may use Your
								information to evaluate or conduct a merger, divestiture,
								restructuring, reorganization, dissolution, or other sale
								or transfer of some or all of Our assets, whether as a
								going concern or as part of bankruptcy, liquidation, or
								similar proceeding, in which Personal Data held by Us
								about our Service users is among the assets transferred.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>For other purposes</strong>: We may use Your
								information for other purposes, such as data analysis,
								identifying usage trends, determining the effectiveness of
								our promotional campaigns and to evaluate and improve our
								Service, products, services, marketing and your
								experience.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								We may share Your personal information in the following
								situations:
							</p>
							<ul style={{ listStyleType: 'disc' }}>
								<li>
									<strong>With Service Providers:</strong> We may share
									Your personal information with Service Providers to
									monitor and analyze the use of our Service, to contact
									You.
								</li>
								<li>
									<strong>For business transfers:</strong> We may share
									or transfer Your personal information in connection
									with, or during negotiations of, any merger, sale of
									Company assets, financing, or acquisition of all or a
									portion of Our business to another company.
								</li>
								<li>
									<strong>With Affiliates:</strong> We may share Your
									information with Our affiliates, in which case we will
									require those affiliates to honor this Privacy Policy.
									Affiliates include Our parent company and any other
									subsidiaries, joint venture partners or other
									companies that We control or that are under common
									control with Us.
								</li>
								<li>
									<strong>With business partners:</strong> We may share
									Your information with Our business partners to offer
									You certain products, services or promotions.
								</li>
								<li>
									<strong>With other users:</strong> when You share
									personal information or otherwise interact in the
									public areas with other users, such information may be
									viewed by all users and may be publicly distributed
									outside. If You interact with other users or register
									through a Third-Party Social Media Service, Your
									contacts on the Third-Party Social Media Service may
									see Your name, profile, pictures and description of
									Your activity. Similarly, other users will be able to
									view descriptions of Your activity, communicate with
									You and view Your profile.
								</li>
								<li>
									<strong>With Your consent</strong>: We may disclose
									Your personal information for any other purpose with
									Your consent.
								</li>
							</ul>
							<h2
								style={{
									marginTop: '10.0pt',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '0cm',

									fontSize: '17px',

									color: '#4F81BD',
								}}
							>
								Retention of Your Personal Data
							</h2>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								The Company will retain Your Personal Data only for as
								long as is necessary for the purposes set out in this
								Privacy Policy. We will retain and use Your Personal Data
								to the extent necessary to comply with our legal
								obligations (for example, if we are required to retain
								your data to comply with applicable laws), resolve
								disputes, and enforce our legal agreements and policies.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								The Company will also retain Usage Data for internal
								analysis purposes. Usage Data is generally retained for a
								shorter period of time, except when this data is used to
								strengthen the security or to improve the functionality of
								Our Service, or We are legally obligated to retain this
								data for longer time periods.
							</p>
							<h2
								style={{
									marginTop: '10.0pt',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '0cm',

									fontSize: '17px',

									color: '#4F81BD',
								}}
							>
								Transfer of Your Personal Data
							</h2>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								Your information, including Personal Data, is processed at
								the Company's operating offices and in any other places
								where the parties involved in the processing are located.
								It means that this information may be transferred to — and
								maintained on — computers located outside of Your state,
								province, country or other governmental jurisdiction where
								the data protection laws may differ than those from Your
								jurisdiction.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								Your consent to this Privacy Policy followed by Your
								submission of such information represents Your agreement
								to that transfer.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								The Company will take all steps reasonably necessary to
								ensure that Your data is treated securely and in
								accordance with this Privacy Policy and no transfer of
								Your Personal Data will take place to an organization or a
								country unless there are adequate controls in place
								including the security of Your data and other personal
								information.
							</p>
							<h2
								style={{
									marginTop: '10.0pt',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '0cm',

									fontSize: '17px',

									color: '#4F81BD',
								}}
							>
								Disclosure of Your Personal Data
							</h2>
							<h3
								style={{
									marginTop: '10.0pt',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '0cm',

									fontSize: '15px',

									color: '#4F81BD',
								}}
							>
								Business Transactions
							</h3>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								If the Company is involved in a merger, acquisition or
								asset sale, Your Personal Data may be transferred. We will
								provide notice before Your Personal Data is transferred
								and becomes subject to a different Privacy Policy.
							</p>
							<h3
								style={{
									marginTop: '10.0pt',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '0cm',

									fontSize: '15px',

									color: '#4F81BD',
								}}
							>
								Law enforcement
							</h3>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								Under certain circumstances, the Company may be required
								to disclose Your Personal Data if required to do so by law
								or in response to valid requests by public authorities
								(e.g. a court or a government agency).
							</p>
							<h3
								style={{
									marginTop: '10.0pt',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '0cm',

									fontSize: '15px',

									color: '#4F81BD',
								}}
							>
								Other legal requirements
							</h3>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								The Company may disclose Your Personal Data in the good
								faith belief that such action is necessary to:
							</p>
							<ul style={{ listStyleType: 'disc' }}>
								<li>Comply with a legal obligation</li>
								<li>
									Protect and defend the rights or property of the
									Company
								</li>
								<li>
									Prevent or investigate possible wrongdoing in
									connection with the Service
								</li>
								<li>
									Protect the personal safety of Users of the Service or
									the public
								</li>
								<li>Protect against legal liability</li>
							</ul>
							<h2
								style={{
									marginTop: '10.0pt',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '0cm',

									fontSize: '17px',

									color: '#4F81BD',
								}}
							>
								Security of Your Personal Data
							</h2>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								The security of Your Personal Data is important to Us, but
								remember that no method of transmission over the Internet,
								or method of electronic storage is 100% secure. While We
								strive to use commercially acceptable means to protect
								Your Personal Data, We cannot guarantee its absolute
								security.
							</p>
							<div
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',

									border: 'none',
									borderBottom: 'solid #4F81BD 1.0pt',
									padding: '0cm 0cm 4.0pt 0cm',
								}}
							>
								<p
									style={{
										marginTop: '0cm',
										marginRight: '0cm',
										marginBottom: '15.0pt',
										marginLeft: '0cm',
										border: 'none',
										padding: '0cm',
										fontSize: '35px',

										color: '#17365D',
									}}
								>
									Detailed Information on the Processing of Your
									Personal Data
								</p>
							</div>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								The Service Providers We use may have access to Your
								Personal Data. These third-party vendors collect, store,
								use, process and transfer information about Your activity
								on Our Service in accordance with their Privacy Policies.
							</p>
							<h2
								style={{
									marginTop: '10.0pt',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '0cm',

									fontSize: '17px',

									color: '#4F81BD',
								}}
							>
								Analytics
							</h2>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								We may use third-party Service providers to monitor and
								analyze the use of our Service.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>Google Analytics</strong>
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								Google Analytics is a web analytics service offered by
								Google that tracks and reports website/browser-extension
								traffic. Google uses the data collected to track and
								monitor the use of our Service. This data is shared with
								other Google services. Google may use the collected data
								to contextualize and personalize the ads of its own
								advertising network.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								You can opt-out of having made your activity on the
								Service available to Google Analytics by installing the
								Google Analytics opt-out browser add-on. The add-on
								prevents the Google Analytics JavaScript (ga.js,
								analytics.js and dc.js) from sharing information with
								Google Analytics about visits activity.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								For more information on the privacy practices of Google,
								please visit the Google Privacy &amp; Terms web page:{' '}
								<a href="https://policies.google.com/privacy">
									<span
										style={{
											color: 'windowtext',
											textDecoration: 'none',
										}}
									>
										https://policies.google.com/privacy
									</span>
								</a>
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								<strong>Firebase</strong>
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								Firebase is an analytics service provided by Google Inc.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								You may opt-out of certain Firebase features through your
								mobile device settings, such as your device advertising
								settings or by following the instructions provided by
								Google in their Privacy Policy:{' '}
								<a href="https://policies.google.com/privacy">
									<span
										style={{
											color: 'windowtext',
											textDecoration: 'none',
										}}
									>
										https://policies.google.com/privacy
									</span>
								</a>
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								We also encourage you to review the Google's policy for
								safeguarding your data:{' '}
								<a href="https://support.google.com/analytics/answer/6004245">
									<span
										style={{
											color: 'windowtext',
											textDecoration: 'none',
										}}
									>
										https://support.google.com/analytics/answer/6004245
									</span>
								</a>
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '36.0pt',

									fontSize: '15px',
								}}
							>
								For more information on what type of information Firebase
								collects, please visit the How Google uses data when you
								use our partners' sites or apps webpage:{' '}
								<a href="https://policies.google.com/technologies/partner-sites">
									<span
										style={{
											color: 'windowtext',
											textDecoration: 'none',
										}}
									>
										https://policies.google.com/technologies/partner-sites
									</span>
								</a>
							</p>
							<div
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',

									border: 'none',
									borderBottom: 'solid #4F81BD 1.0pt',
									padding: '0cm 0cm 4.0pt 0cm',
								}}
							>
								<p
									style={{
										marginTop: '0cm',
										marginRight: '0cm',
										marginBottom: '15.0pt',
										marginLeft: '0cm',
										border: 'none',
										padding: '0cm',
										fontSize: '35px',

										color: '#17365D',
									}}
								>
									GDPR Privacy
								</p>
							</div>
							<h2
								style={{
									marginTop: '10.0pt',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '0cm',

									fontSize: '17px',

									color: '#4F81BD',
								}}
							>
								Legal Basis for Processing Personal Data under GDPR
							</h2>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								We may process Personal Data under the following
								conditions:
							</p>
							<ul style={{ listStyleType: 'disc' }}>
								<li>
									<strong>Consent:</strong> You have given Your consent
									for processing Personal Data for one or more specific
									purposes.
								</li>
								<li>
									<strong>Performance of a contract:</strong> Provision
									of Personal Data is necessary for the performance of
									an agreement with You and/or for any pre-contractual
									obligations thereof.
								</li>
								<li>
									<strong>Legal obligations:</strong> Processing
									Personal Data is necessary for compliance with a legal
									obligation to which the Company is subject.
								</li>
								<li>
									<strong>Vital interests:</strong> Processing Personal
									Data is necessary in order to protect Your vital
									interests or of another natural person.
								</li>
								<li>
									<strong>Public interests:</strong> Processing Personal
									Data is related to a task that is carried out in the
									public interest or in the exercise of official
									authority vested in the Company.
								</li>
								<li>
									<strong>Legitimate interests:</strong> Processing
									Personal Data is necessary for the purposes of the
									legitimate interests pursued by the Company.
								</li>
							</ul>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								In any case, the Company will gladly help to clarify the
								specific legal basis that applies to the processing, and
								in particular whether the provision of Personal Data is a
								statutory or contractual requirement, or a requirement
								necessary to enter into a contract.
							</p>
							<h2
								style={{
									marginTop: '10.0pt',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '0cm',

									fontSize: '17px',

									color: '#4F81BD',
								}}
							>
								Your Rights under the GDPR
							</h2>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								The Company undertakes to respect the confidentiality of
								Your Personal Data and to guarantee You can exercise Your
								rights.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								You have the right under this Privacy Policy, and by law
								if You are within the EU, to:
							</p>
							<ul style={{ listStyleType: 'disc' }}>
								<li>
									<strong>Request access to Your Personal Data.</strong>{' '}
									The right to access, update or delete the information
									We have on You. Whenever made possible, you can
									access, update or request deletion of Your Personal
									Data directly within Your account settings section. If
									you are unable to perform these actions yourself,
									please contact Us to assist You. This also enables You
									to receive a copy of the Personal Data We hold about
									You.
								</li>
								<li>
									<strong>
										Request correction of the Personal Data that We
										hold about You.
									</strong>{' '}
									You have the right to to have any incomplete or
									inaccurate information We hold about You corrected.
								</li>
								<li>
									<strong>
										Object to processing of Your Personal Data.
									</strong>{' '}
									This right exists where We are relying on a legitimate
									interest as the legal basis for Our processing and
									there is something about Your particular situation,
									which makes You want to object to our processing of
									Your Personal Data on this ground. You also have the
									right to object where We are processing Your Personal
									Data for direct marketing purposes.
								</li>
								<li>
									<strong>
										Request erasure of Your Personal Data.
									</strong>{' '}
									You have the right to ask Us to delete or remove
									Personal Data when there is no good reason for Us to
									continue processing it.
								</li>
								<li>
									<strong>
										Request the transfer of Your Personal Data.
									</strong>{' '}
									We will provide to You, or to a third-party You have
									chosen, Your Personal Data in a structured, commonly
									used, machine-readable format. Please note that this
									right only applies to automated information which You
									initially provided consent for Us to use or where We
									used the information to perform a contract with You.
								</li>
								<li>
									<strong>Withdraw Your consent.</strong> You have the
									right to withdraw Your consent on using your Personal
									Data. If You withdraw Your consent, We may not be able
									to provide You with access to certain specific
									functionalities of the Service.
								</li>
							</ul>
							<h2
								style={{
									marginTop: '10.0pt',
									marginRight: '0cm',
									marginBottom: '0cm',
									marginLeft: '0cm',

									fontSize: '17px',

									color: '#4F81BD',
								}}
							>
								Exercising of Your GDPR Data Protection Rights
							</h2>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								You may exercise Your rights of access, rectification,
								cancellation and opposition by contacting Us. Please note
								that we may ask You to verify Your identity before
								responding to such requests. If You make a request, We
								will try our best to respond to You as soon as possible.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								You have the right to complain to a Data Protection
								Authority about Our collection and use of Your Personal
								Data. For more information, if You are in the European
								Economic Area (EEA), please contact Your local data
								protection authority in the EEA.
							</p>
							<div
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',

									border: 'none',
									borderBottom: 'solid #4F81BD 1.0pt',
									padding: '0cm 0cm 4.0pt 0cm',
								}}
							>
								<p
									style={{
										marginTop: '0cm',
										marginRight: '0cm',
										marginBottom: '15.0pt',
										marginLeft: '0cm',
										border: 'none',
										padding: '0cm',
										fontSize: '35px',

										color: '#17365D',
									}}
								>
									Links to Other Websites
								</p>
							</div>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								Our Service may contain links to other websites that are
								not operated by Us. If You click on a third party link,
								You will be directed to that third party's site. We
								strongly advise You to review the Privacy Policy of every
								site You visit.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								We have no control over and assume no responsibility for
								the content, privacy policies or practices of any third
								party sites or services.
							</p>
							<div
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',

									border: 'none',
									borderBottom: 'solid #4F81BD 1.0pt',
									padding: '0cm 0cm 4.0pt 0cm',
								}}
							>
								<p
									style={{
										marginTop: '0cm',
										marginRight: '0cm',
										marginBottom: '15.0pt',
										marginLeft: '0cm',
										border: 'none',
										padding: '0cm',
										fontSize: '35px',

										color: '#17365D',
									}}
								>
									Changes to this Privacy Policy
								</p>
							</div>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								We may update Our Privacy Policy from time to time. We
								will notify You of any changes by posting the new Privacy
								Policy on this page.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								We will let You know via email and/or a prominent notice
								on Our Service, prior to the change becoming effective and
								update the "Last updated" date at the top of this Privacy
								Policy.
							</p>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								You are advised to review this Privacy Policy periodically
								for any changes. Changes to this Privacy Policy are
								effective when they are posted on this page.
							</p>
							<div
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',

									border: 'none',
									borderBottom: 'solid #4F81BD 1.0pt',
									padding: '0cm 0cm 4.0pt 0cm',
								}}
							>
								<p
									style={{
										marginTop: '0cm',
										marginRight: '0cm',
										marginBottom: '15.0pt',
										marginLeft: '0cm',
										border: 'none',
										padding: '0cm',
										fontSize: '35px',

										color: '#17365D',
									}}
								>
									Contact Us
								</p>
							</div>
							<p
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								If you have any questions about this Privacy Policy, You
								can contact us:
							</p>
							<div
								style={{
									marginTop: '0cm',
									marginRight: '0cm',
									marginBottom: '10.0pt',
									marginLeft: '0cm',

									fontSize: '15px',
								}}
							>
								<ul
									style={{ marginBottom: '0cm', listStyleType: 'disc' }}
								>
									<li
										style={{
											marginTop: '0cm',
											marginRight: '0cm',
											marginBottom: '10.0pt',
											marginLeft: '0cm',

											fontSize: '15px',
										}}
									>
										By email: lucaskeller98@gmail.com
									</li>
								</ul>
							</div>
						</div>
					</Grid>
				</Container>
			</>
		);
	}
}

export default PrivacyPolicy;
