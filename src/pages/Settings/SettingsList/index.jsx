/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import StyleCSS from './styles.module.css';
import EditAccount from '../components/EditAccount';

import TestImage from './test-img.jfif';

function Settings() {
	const [changeSettings, setChangeSettings] = useState(StyleCSS.settings);
	const [editState, setEditState] = useState(StyleCSS.editaccounthide);
	const [status, setStatus] = useState("");
	
	function handleclick() {
		if (changeSettings === StyleCSS.settings) {
			setChangeSettings(StyleCSS.settingshide);
			setEditState(StyleCSS.editaccount);
		}
	}

	return (
		<div className={StyleCSS.flexcontainer}>
			<div className={changeSettings}>
				<div className="settings-page-list">
					<div className={StyleCSS.settingstab}>
						<svg
							width="24"
							height="25"
							viewBox="0 0 24 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15.0001 20.42L8.48009 13.9C7.71009 13.13 7.71009 11.87 8.48009 11.1L15.0001 4.57996"
								stroke="#1D1DD8"
								strokeWidth="2"
								strokeMiterlimit="10"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>

						<h1 className="hero=text">Settings</h1>
					</div>

					<div className={StyleCSS.searchinput}>
						<input
							className={StyleCSS.Reactsearchbar}
							type="search"
							placeholder="Search settings"
						/>
					</div>

					<div className="subtabs">
						<div className={StyleCSS.accountbuttoncontainer}>
							<button
								className={StyleCSS.accountbutton}
								type="button"
								onClick={handleclick}
							>
								<div className={StyleCSS.subtab} data-expanded="true">
									<div className="account svg">
										<svg
											width="36"
											height="36"
											viewBox="0 0 36 36"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M18.2334 16.352C18.0875 16.3375 17.9125 16.3375 17.7521 16.352C14.2813 16.2354 11.525 13.3916 11.525 9.89163C11.525 6.31871 14.4125 3.41663 18 3.41663C21.5729 3.41663 24.475 6.31871 24.475 9.89163C24.4604 13.3916 21.7042 16.2354 18.2334 16.352Z"
												stroke="#1D1DD8"
												strokeWidth="3"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M10.9417 21.7334C7.41251 24.0959 7.41251 27.9459 10.9417 30.2938C14.9521 32.9771 21.5292 32.9771 25.5396 30.2938C29.0688 27.9313 29.0688 24.0813 25.5396 21.7334C21.5438 19.0646 14.9667 19.0646 10.9417 21.7334Z"
												stroke="#1D1DD8"
												strokeWidth="3"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
									<div className="text">
										<h2 className={StyleCSS.headingtwo}>Account</h2>
										<p className={StyleCSS.paragraph}>
											You can amange your account setting at any time. Update
											your account details,change your username
										</p>
									</div>
								</div>
							</button>
						</div>

						<div className={StyleCSS.subtab}>
							<div className="account svg">
								<svg
									width="36"
									height="36"
									viewBox="0 0 36 36"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M30.9937 16.7166C30.9937 23.8479 25.8167 30.5271 18.7437 32.4812C18.2625 32.6125 17.7375 32.6125 17.2562 32.4812C10.1833 30.5271 5.00623 23.8479 5.00623 16.7166V10.3145C5.00623 9.11871 5.91041 7.76246 7.03333 7.31038L15.1562 3.98542C16.9791 3.24167 19.0354 3.24167 20.8583 3.98542L28.9812 7.31038C30.0896 7.76246 31.0083 9.11871 31.0083 10.3145L30.9937 16.7166Z"
										stroke="#1D1DD8"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M18 18.7292C19.6109 18.7292 20.9167 17.4234 20.9167 15.8125C20.9167 14.2017 19.6109 12.8959 18 12.8959C16.3892 12.8959 15.0834 14.2017 15.0834 15.8125C15.0834 17.4234 16.3892 18.7292 18 18.7292Z"
										stroke="#1D1DD8"
										strokeWidth="2"
										strokeMiterlimit="10"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M18 18.7292V23.1042"
										stroke="#1D1DD8"
										strokeWidth="2"
										strokeMiterlimit="10"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<div className="text">
								<h2 className={StyleCSS.headingtwo}>Security</h2>
								<p className={StyleCSS.paragraph}>
									Make the most of your activities,the security feature protect
									you from malware and dangerous sites
								</p>
							</div>
						</div>
						<a href="notifications-page">
							<div className={StyleCSS.subtab}>
								<div className="account svg">
									<svg
										width="36"
										height="36"
										viewBox="0 0 36 36"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M18.0291 4.74377C13.202 4.74377 9.27911 8.66669 9.27911 13.4938V17.7084C9.27911 18.5979 8.89994 19.9542 8.44786 20.7125L6.77078 23.4979C5.73536 25.2188 6.44995 27.1292 8.34578 27.7709C14.6312 29.8709 21.4124 29.8709 27.6979 27.7709C29.4624 27.1875 30.2354 25.1021 29.2729 23.4979L27.5958 20.7125C27.1583 19.9542 26.7791 18.5979 26.7791 17.7084V13.4938C26.7791 8.68127 22.8416 4.74377 18.0291 4.74377Z"
											stroke="#1D1DD8"
											strokeWidth="2"
											strokeMiterlimit="10"
											strokeLinecap="round"
										/>
										<path
											d="M20.7271 5.16672C20.275 5.03547 19.8084 4.93339 19.3271 4.87506C17.9271 4.70006 16.5855 4.80214 15.3313 5.16672C15.7542 4.08756 16.8042 3.32922 18.0292 3.32922C19.2542 3.32922 20.3042 4.08756 20.7271 5.16672Z"
											stroke="#1D1DD8"
											strokeWidth="2"
											strokeMiterlimit="10"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M22.4042 28.2958C22.4042 30.702 20.4354 32.6708 18.0292 32.6708C16.8333 32.6708 15.725 32.1749 14.9375 31.3874C14.15 30.5999 13.6542 29.4916 13.6542 28.2958"
											stroke="#1D1DD8"
											strokeWidth="2"
											strokeMiterlimit="10"
										/>
									</svg>
								</div>
								<div className="text">
									<h2 className={StyleCSS.headingtwo}>Notification</h2>
									<p className={StyleCSS.paragraph}>
										notification are updates about your activity,You can go to
										your notification settings to change what you will be
										notified about and how you're notified
									</p>
								</div>
							</div>
						</a>

						<div className={StyleCSS.appearancesubtab}>
							<div className="account svg">
								<svg
									width="36"
									height="36"
									viewBox="0 0 36 36"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M29.4624 12.2979C29.4624 12.9104 29.4187 13.5084 29.3458 14.0771C28.675 13.7854 27.9458 13.625 27.1729 13.625C25.3937 13.625 23.8187 14.4854 22.8416 15.7979C21.85 14.4854 20.275 13.625 18.4958 13.625C15.5062 13.625 13.0854 16.0604 13.0854 19.0792C13.0854 22.9875 15.1562 25.9771 17.4604 28.0042C17.3875 28.0479 17.3146 28.0626 17.2416 28.0917C16.8041 28.2521 16.075 28.2521 15.6375 28.0917C11.8604 26.7938 3.41663 21.4271 3.41663 12.2979C3.41663 8.27294 6.65411 5.02087 10.6499 5.02087C13.027 5.02087 15.127 6.15836 16.4395 7.92294C17.7666 6.15836 19.8666 5.02087 22.2291 5.02087C26.225 5.02087 29.4624 8.27294 29.4624 12.2979Z"
										stroke="#1D1DD8"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M32.5832 19.0792C32.5832 25.9042 26.2687 29.9292 23.4395 30.8917C23.1041 31.0083 22.5645 31.0083 22.2291 30.8917C21.0186 30.4833 19.1666 29.5062 17.4603 28.0041C15.1562 25.9771 13.0853 22.9875 13.0853 19.0792C13.0853 16.0604 15.5061 13.625 18.4957 13.625C20.2749 13.625 21.8499 14.4854 22.8416 15.7979C23.8187 14.4854 25.3937 13.625 27.1728 13.625C27.9457 13.625 28.6749 13.7854 29.3457 14.0771C31.2562 14.9229 32.5832 16.8333 32.5832 19.0792Z"
										stroke="#1D1DD8"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<div className="text">
								<h2 className={StyleCSS.headingtwo}>Appearance</h2>
								<p className={StyleCSS.paragraph}>
									Choose your viewing options,select light to display light
									mode,select drak to display dark mode
								</p>
							</div>
						</div>
					</div>
				</div>
				<EditAccount />
			</div>
			<div className={editState}>
				<div className={StyleCSS.tabheading}>
					<a href="settings">
						<svg
							width="24"
							height="25"
							viewBox="0 0 24 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15.0001 20.42L8.48009 13.9C7.71009 13.13 7.71009 11.87 8.48009 11.1L15.0001 4.57996"
								stroke="#1D1DD8"
								strokeWidth="2"
								strokeMiterlimit="10"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</a>
					<h2 className={StyleCSS.headingtwo}>Edit Account</h2>
				</div>

				<div className={StyleCSS.userinfo}>
					<div className={StyleCSS.userprofile}>
						<img
							className={StyleCSS.profileimg}
							alt="profile "
							src={TestImage}
						/>
						<div className={StyleCSS.editsvg}>
							<svg
								width="17"
								height="18"
								viewBox="0 0 17 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12.25 1.91661C12.447 1.71963 12.6808 1.56337 12.9382 1.45676C13.1956 1.35016 13.4714 1.29529 13.75 1.29529C14.0286 1.29529 14.3044 1.35016 14.5618 1.45676C14.8192 1.56337 15.053 1.71963 15.25 1.91661C15.447 2.11359 15.6032 2.34744 15.7098 2.60481C15.8165 2.86218 15.8713 3.13803 15.8713 3.41661C15.8713 3.69518 15.8165 3.97103 15.7098 4.2284C15.6032 4.48577 15.447 4.71963 15.25 4.91661L5.125 15.0416L1 16.1666L2.125 12.0416L12.25 1.91661Z"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
					<div className="user-details-form">
						<form className={StyleCSS.mobileform}>
							<label className={StyleCSS.label}>
								Full name
								<input
									id="nameinput"
									className={StyleCSS.mobiletextinput}
									type="text"
									value="Ayoola Faisal"
								/>
							</label>

							<label className={StyleCSS.label}>
								Email address
								<input
									id="emailinput"
									className={StyleCSS.mobiletextinput}
									type="email"
									value="ayoolafaisal@gmail.com"
								/>
							</label>

							<label className={StyleCSS.label} htmlFor="phoneinput">
								Phone number
								<div className={StyleCSS.phonenumber}>
								<select value={status}  className={StyleCSS.flagimage}/>
									
									<input id='phoneinput' value="+234 8184017753" type='tel' className={StyleCSS.phoneinput}/>


								</div>
								
							</label>

						<label className={StyleCSS.label}>
							Location
							<select
								className={StyleCSS.mobileformcontrol}
								value={status}
								onChange={(e) => setStatus(e.target.value)}
							>
								<option value="" selected="selected">Select Country</option> 
								<option value="Afghanistan">Afghanistan</option> 
								<option value="Albania">Albania</option> 
								<option value="Algeria">Algeria</option> 
								<option value="American Samoa">American Samoa</option> 
								<option value="Andorra">Andorra</option> 
								<option value="Angola">Angola</option> 
								<option value="Anguilla">Anguilla</option> 
								<option value="Antarctica">Antarctica</option> 
								<option value="Antigua and Barbuda">Antigua and Barbuda</option> 
								<option value="Argentina">Argentina</option> 
								<option value="Armenia">Armenia</option> 
								<option value="Aruba">Aruba</option> 
								<option value="Australia">Australia</option> 
								<option value="Austria">Austria</option> 
								<option value="Azerbaijan">Azerbaijan</option> 
								<option value="Bahamas">Bahamas</option> 
								<option value="Bahrain">Bahrain</option> 
								<option value="Bangladesh">Bangladesh</option> 
								<option value="Barbados">Barbados</option> 
								<option value="Belarus">Belarus</option> 
								<option value="Belgium">Belgium</option> 
								<option value="Belize">Belize</option> 
								<option value="Benin">Benin</option> 
								<option value="Bermuda">Bermuda</option> 
								<option value="Bhutan">Bhutan</option> 
								<option value="Bolivia">Bolivia</option> 
								<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option> 
								<option value="Botswana">Botswana</option> 
								<option value="Bouvet Island">Bouvet Island</option> 
								<option value="Brazil">Brazil</option> 
								<option value="British Indian Ocean Territory">British Indian Ocean Territory</option> 
								<option value="Brunei Darussalam">Brunei Darussalam</option> 
								<option value="Bulgaria">Bulgaria</option> 
								<option value="Burkina Faso">Burkina Faso</option> 
								<option value="Burundi">Burundi</option> 
								<option value="Cambodia">Cambodia</option> 
								<option value="Cameroon">Cameroon</option> 
								<option value="Canada">Canada</option> 
								<option value="Cape Verde">Cape Verde</option> 
								<option value="Cayman Islands">Cayman Islands</option> 
								<option value="Central African Republic">Central African Republic</option> 
								<option value="Chad">Chad</option> 
								<option value="Chile">Chile</option> 
								<option value="China">China</option> 
								<option value="Christmas Island">Christmas Island</option> 
								<option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option> 
								<option value="Colombia">Colombia</option> 
								<option value="Comoros">Comoros</option> 
								<option value="Congo">Congo</option> 
								<option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option> 
								<option value="Cook Islands">Cook Islands</option> 
								<option value="Costa Rica">Costa Rica</option> 
								<option value="Cote D'ivoire">Cote D'ivoire</option> 
								<option value="Croatia">Croatia</option> 
								<option value="Cuba">Cuba</option> 
								<option value="Cyprus">Cyprus</option> 
								<option value="Czech Republic">Czech Republic</option> 
								<option value="Denmark">Denmark</option> 
								<option value="Djibouti">Djibouti</option> 
								<option value="Dominica">Dominica</option> 
								<option value="Dominican Republic">Dominican Republic</option> 
								<option value="Ecuador">Ecuador</option> 
								<option value="Egypt">Egypt</option> 
								<option value="El Salvador">El Salvador</option> 
								<option value="Equatorial Guinea">Equatorial Guinea</option> 
								<option value="Eritrea">Eritrea</option> 
								<option value="Estonia">Estonia</option> 
								<option value="Ethiopia">Ethiopia</option> 
								<option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option> 
								<option value="Faroe Islands">Faroe Islands</option> 
								<option value="Fiji">Fiji</option> 
								<option value="Finland">Finland</option> 
								<option value="France">France</option> 
								<option value="French Guiana">French Guiana</option> 
								<option value="French Polynesia">French Polynesia</option> 
								<option value="French Southern Territories">French Southern Territories</option> 
								<option value="Gabon">Gabon</option> 
								<option value="Gambia">Gambia</option> 
								<option value="Georgia">Georgia</option> 
								<option value="Germany">Germany</option> 
								<option value="Ghana">Ghana</option> 
								<option value="Gibraltar">Gibraltar</option> 
								<option value="Greece">Greece</option> 
								<option value="Greenland">Greenland</option> 
								<option value="Grenada">Grenada</option> 
								<option value="Guadeloupe">Guadeloupe</option> 
								<option value="Guam">Guam</option> 
								<option value="Guatemala">Guatemala</option> 
								<option value="Guinea">Guinea</option> 
								<option value="Guinea-bissau">Guinea-bissau</option> 
								<option value="Guyana">Guyana</option> 
								<option value="Haiti">Haiti</option> 
								<option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option> 
								<option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option> 
								<option value="Honduras">Honduras</option> 
								<option value="Hong Kong">Hong Kong</option> 
								<option value="Hungary">Hungary</option> 
								<option value="Iceland">Iceland</option> 
								<option value="India">India</option> 
								<option value="Indonesia">Indonesia</option> 
								<option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option> 
								<option value="Iraq">Iraq</option> 
								<option value="Ireland">Ireland</option> 
								<option value="Israel">Israel</option> 
								<option value="Italy">Italy</option> 
								<option value="Jamaica">Jamaica</option> 
								<option value="Japan">Japan</option> 
								<option value="Jordan">Jordan</option> 
								<option value="Kazakhstan">Kazakhstan</option> 
								<option value="Kenya">Kenya</option> 
								<option value="Kiribati">Kiribati</option> 
								<option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option> 
								<option value="Korea, Republic of">Korea, Republic of</option> 
								<option value="Kuwait">Kuwait</option> 
								<option value="Kyrgyzstan">Kyrgyzstan</option> 
								<option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option> 
								<option value="Latvia">Latvia</option> 
								<option value="Lebanon">Lebanon</option> 
								<option value="Lesotho">Lesotho</option> 
								<option value="Liberia">Liberia</option> 
								<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option> 
								<option value="Liechtenstein">Liechtenstein</option> 
								<option value="Lithuania">Lithuania</option> 
								<option value="Luxembourg">Luxembourg</option> 
								<option value="Macao">Macao</option> 
								<option value="North Macedonia">North Macedonia</option> 
								<option value="Madagascar">Madagascar</option> 
								<option value="Malawi">Malawi</option> 
								<option value="Malaysia">Malaysia</option> 
								<option value="Maldives">Maldives</option> 
								<option value="Mali">Mali</option> 
								<option value="Malta">Malta</option> 
								<option value="Marshall Islands">Marshall Islands</option> 
								<option value="Martinique">Martinique</option> 
								<option value="Mauritania">Mauritania</option> 
								<option value="Mauritius">Mauritius</option> 
								<option value="Mayotte">Mayotte</option> 
								<option value="Mexico">Mexico</option> 
								<option value="Micronesia, Federated States of">Micronesia, Federated States of</option> 
								<option value="Moldova, Republic of">Moldova, Republic of</option> 
								<option value="Monaco">Monaco</option> 
								<option value="Mongolia">Mongolia</option> 
								<option value="Montserrat">Montserrat</option> 
								<option value="Morocco">Morocco</option> 
								<option value="Mozambique">Mozambique</option> 
								<option value="Myanmar">Myanmar</option> 
								<option value="Namibia">Namibia</option> 
								<option value="Nauru">Nauru</option> 
								<option value="Nepal">Nepal</option> 
								<option value="Netherlands">Netherlands</option> 
								<option value="Netherlands Antilles">Netherlands Antilles</option> 
								<option value="New Caledonia">New Caledonia</option> 
								<option value="New Zealand">New Zealand</option> 
								<option value="Nicaragua">Nicaragua</option> 
								<option value="Niger">Niger</option> 
								<option value="Nigeria">Nigeria</option> 
								<option value="Niue">Niue</option> 
								<option value="Norfolk Island">Norfolk Island</option> 
								<option value="Northern Mariana Islands">Northern Mariana Islands</option> 
								<option value="Norway">Norway</option> 
								<option value="Oman">Oman</option> 
								<option value="Pakistan">Pakistan</option> 
								<option value="Palau">Palau</option> 
								<option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option> 
								<option value="Panama">Panama</option> 
								<option value="Papua New Guinea">Papua New Guinea</option> 
								<option value="Paraguay">Paraguay</option> 
								<option value="Peru">Peru</option> 
								<option value="Philippines">Philippines</option> 
								<option value="Pitcairn">Pitcairn</option> 
								<option value="Poland">Poland</option> 
								<option value="Portugal">Portugal</option> 
								<option value="Puerto Rico">Puerto Rico</option> 
								<option value="Qatar">Qatar</option> 
								<option value="Reunion">Reunion</option> 
								<option value="Romania">Romania</option> 
								<option value="Russian Federation">Russian Federation</option> 
								<option value="Rwanda">Rwanda</option> 
								<option value="Saint Helena">Saint Helena</option> 
								<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
								<option value="Saint Lucia">Saint Lucia</option> 
								<option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option> 
								<option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option> 
								<option value="Samoa">Samoa</option> 
								<option value="San Marino">San Marino</option> 
								<option value="Sao Tome and Principe">Sao Tome and Principe</option> 
								<option value="Saudi Arabia">Saudi Arabia</option> 
								<option value="Senegal">Senegal</option> 
								<option value="Serbia and Montenegro">Serbia and Montenegro</option> 
								<option value="Seychelles">Seychelles</option> 
								<option value="Sierra Leone">Sierra Leone</option> 
								<option value="Singapore">Singapore</option> 
								<option value="Slovakia">Slovakia</option> 
								<option value="Slovenia">Slovenia</option> 
								<option value="Solomon Islands">Solomon Islands</option> 
								<option value="Somalia">Somalia</option> 
								<option value="South Africa">South Africa</option> 
								<option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option> 
								<option value="Spain">Spain</option> 
								<option value="Sri Lanka">Sri Lanka</option> 
								<option value="Sudan">Sudan</option> 
								<option value="Suriname">Suriname</option> 
								<option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option> 
								<option value="Swaziland">Swaziland</option> 
								<option value="Sweden">Sweden</option> 
								<option value="Switzerland">Switzerland</option> 
								<option value="Syrian Arab Republic">Syrian Arab Republic</option> 
								<option value="Taiwan, Province of China">Taiwan, Province of China</option> 
								<option value="Tajikistan">Tajikistan</option> 
								<option value="Tanzania, United Republic of">Tanzania, United Republic of</option> 
								<option value="Thailand">Thailand</option> 
								<option value="Timor-leste">Timor-leste</option> 
								<option value="Togo">Togo</option> 
								<option value="Tokelau">Tokelau</option> 
								<option value="Tonga">Tonga</option> 
								<option value="Trinidad and Tobago">Trinidad and Tobago</option> 
								<option value="Tunisia">Tunisia</option> 
								<option value="Turkey">Turkey</option> 
								<option value="Turkmenistan">Turkmenistan</option> 
								<option value="Turks and Caicos Islands">Turks and Caicos Islands</option> 
								<option value="Tuvalu">Tuvalu</option> 
								<option value="Uganda">Uganda</option> 
								<option value="Ukraine">Ukraine</option> 
								<option value="United Arab Emirates">United Arab Emirates</option> 
								<option value="United Kingdom">United Kingdom</option> 
								<option value="United States">United States</option> 
								<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option> 
								<option value="Uruguay">Uruguay</option> 
								<option value="Uzbekistan">Uzbekistan</option> 
								<option value="Vanuatu">Vanuatu</option> 
								<option value="Venezuela">Venezuela</option> 
								<option value="Viet Nam">Viet Nam</option> 
								<option value="Virgin Islands, British">Virgin Islands, British</option> 
								<option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option> 
								<option value="Wallis and Futuna">Wallis and Futuna</option> 
								<option value="Western Sahara">Western Sahara</option> 
								<option value="Yemen">Yemen</option> 
								<option value="Zambia">Zambia</option> 
								<option value="Zimbabwe">Zimbabwe</option>
							</select>						
						</label>

							<div className={StyleCSS.buttons}>
								<button className={StyleCSS.mobilesavebtn} type="button">
									Save Changes
								</button>
								<button className={StyleCSS.mobilediscardbtn} type="button">
									Discard Changes
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Settings;
