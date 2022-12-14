/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StyleCSS from './styles.module.css';

function NotificationSettings() {
	const [changeSettings, setChangeSettings] = useState(StyleCSS.settings);
	const [mobileNotificationsettings, setMobileNotificationSettings] = useState(
		StyleCSS.editState
	);

	function handleclick() {
		if (changeSettings === StyleCSS.settings) {
			setChangeSettings(StyleCSS.settingshide);
		}
		setMobileNotificationSettings(StyleCSS.showNotificationMobileState);
	}

	return (
		<div className={StyleCSS.flexcontainer}>
			<div className={changeSettings}>
				<div className={StyleCSS.settings_page_list}>
					<div className={StyleCSS.settingstab}>
						<h1 className={StyleCSS.hero_text}>Settings</h1>
					</div>

					<div className={StyleCSS.searchinput}>
						<input
							className={StyleCSS.Reactsearchbar}
							type="search"
							placeholder="Search settings"
						/>
					</div>

					<div className="subtabs">
						<a href="settings" className={StyleCSS.notification__link}>
							<div className={StyleCSS.subtab}>
								<h2 className={StyleCSS.headingtwo}>Your Account</h2>

								<img src="/assets/privacySettingsIcon.svg" alt="icon" />
							</div>
						</a>

						<a href="settings" className={StyleCSS.notification__link}>
							<div className={StyleCSS.subtab}>
								<h2 className={StyleCSS.headingtwo}>Security</h2>
								<img src="/assets/privacySettingsIcon.svg" alt="icon" />
							</div>
						</a>
						<a href="settings" className={StyleCSS.notification__link}>
							<div className={StyleCSS.subtab}>
								<h2 className={StyleCSS.headingtwo}>Notification</h2>
								<img src="/assets/privacySettingsIcon.svg" alt="icon" />
							</div>
						</a>
						<button
							className={StyleCSS.accountbutton}
							type="button"
							onClick={handleclick}
						>
							<div className={StyleCSS.subtab} data-expanded="true">
								<h2 className={StyleCSS.headingtwo}>Privacy and Safety</h2>
								<img src="/assets/privacySettingsIcon.svg" alt="icon" />
							</div>
						</button>
					</div>
				</div>
			</div>

			<div className={mobileNotificationsettings}>
				<button type='submit' onClick={()=> window.location.reload()} className={StyleCSS.privacyMobileBack}>
					<div className={StyleCSS.privacyHeading}>
						<img src="/assets/privacySettingsLeft.svg" alt="icon" />
						<h2>Privacy and Safety</h2>
					</div>
				</button>

				<div className={StyleCSS.notificationsettings__option2}>
					<span>Manage your account’s security. </span>
				</div>
				<form>
					<div className={StyleCSS.notificationsettings__option__wrap}>
						<p>Your activity</p>
						<div>
							<h4>Users and Tagging</h4>
							<div className={StyleCSS.notificationsettings__option}>
								<span>
									Manage what information you want others to see on DevAsk
								</span>
								<img src="/assets/privacySettingsIcon.svg" alt="icon" />
							</div>
						</div>
						<div>
							<h4>Contents you see</h4>
							<div className={StyleCSS.notificationsettings__option}>
								<span>
									Choose the what kind of contents you want to see on DevAsk
									based on your preference and interests
								</span>
								<img src="/assets/privacySettingsIcon.svg" alt="icon" />
							</div>
						</div>
						<div className={StyleCSS.notificationsettings__option__wrap}>
							<p>Learn more about privacy on DevAsk</p>
							<div>
								<Link to="/privacy" className={StyleCSS.privacyLink}>
									<div className={StyleCSS.notificationsettings__option}>
										<span>Privacy Policy</span>
										<img src="/assets/privacySettingsUp.svg" alt="icon" />
									</div>
								</Link>
							</div>
							<div>
								<Link to="/contact" className={StyleCSS.privacyLink}>
									<div className={StyleCSS.notificationsettings__option}>
										<span>Contact us</span>
										<img src="/assets/privacySettingsUp.svg" alt="icon" />
									</div>
								</Link>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
export default NotificationSettings;
