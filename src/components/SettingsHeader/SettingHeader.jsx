import React from 'react';
import SettingsHeaderCSS from './SettingsHeader.module.css';
import AvatarImage from '../../assets/settings-image/avatar.png';

function SettingHeader() {
	return (
		<div className={SettingsHeaderCSS.settingsnav}>
			<div className={SettingsHeaderCSS.searchinput}>
				<input
					className={SettingsHeaderCSS.Reactsearchbar}
					type="search"
					placeholder="Search for a settings"
				/>
			</div>
			<div className={SettingsHeaderCSS.profilewallet}>
				<div className={SettingsHeaderCSS.connectwallet}>
					<button type="button" id="connect-wallet">
						Connect Wallet
					</button>
				</div>
				<div className={SettingsHeaderCSS.profile}>
					<div className={SettingsHeaderCSS.NotificationsSvg}>
						<a href="notifications-page">
							<svg
								width="21"
								height="20"
								viewBox="0 0 21 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10.5167 2.42505C7.75841 2.42505 5.51674 4.66672 5.51674 7.42505V9.83338C5.51674 10.3417 5.30007 11.1167 5.04174 11.55L4.08341 13.1417C3.49174 14.125 3.90007 15.2167 4.98341 15.5834C8.57507 16.7834 12.4501 16.7834 16.0417 15.5834C17.0501 15.2501 17.4917 14.0584 16.9417 13.1417L15.9834 11.55C15.7334 11.1167 15.5167 10.3417 15.5167 9.83338V7.42505C15.5167 4.67505 13.2667 2.42505 10.5167 2.42505Z"
									stroke="#303030"
									strokeWidth="1.5"
									strokeMiterlimit="10"
									strokeLinecap="round"
								/>
								<path
									d="M12.0584 2.6667C11.8001 2.5917 11.5334 2.53337 11.2584 2.50003C10.4584 2.40003 9.69176 2.45837 8.9751 2.6667C9.21676 2.05003 9.81676 1.6167 10.5168 1.6167C11.2168 1.6167 11.8168 2.05003 12.0584 2.6667Z"
									stroke="#303030"
									strokeWidth="1.5"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M13.0166 15.8833C13.0166 17.2583 11.8916 18.3833 10.5166 18.3833C9.83327 18.3833 9.19993 18.1 8.74993 17.65C8.29993 17.2 8.0166 16.5666 8.0166 15.8833"
									stroke="#303030"
									strokeWidth="1.5"
									strokeMiterlimit="10"
								/>
							</svg>
						</a>
					</div>
					<div className={SettingsHeaderCSS.ProfilePictureTxt}>
						<div className={SettingsHeaderCSS.ProfileContainer}>
							<img
								className={SettingsHeaderCSS.Avatar}
								alt="avatar"
								src={AvatarImage}
							/>

							<div className={SettingsHeaderCSS.DotMarker}>
								<svg
									width="9"
									height="9"
									viewBox="0 0 9 9"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8.5 4.5C8.5 6.70914 6.70914 8.5 4.5 8.5C2.29086 8.5 0.5 6.70914 0.5 4.5C0.5 2.29086 2.29086 0.5 4.5 0.5C6.70914 0.5 8.5 2.29086 8.5 4.5Z"
										fill="#18B368"
									/>
								</svg>
							</div>
						</div>

						<a href="profile" className={SettingsHeaderCSS.profiletxt}>
							<h3>Kayle Nicole</h3>
							<span>online</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SettingHeader;
