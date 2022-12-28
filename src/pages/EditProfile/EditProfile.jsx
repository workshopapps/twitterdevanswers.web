/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { PropTypes } from 'prop-types';
import { AppContext } from '../../store/AppContext';
import avatar from '../../assets/dashboard/user.png';
import styles from './editProfile.module.css';
import useMessenger from '../NewDashboard/utils';

function EditProfile() {
	const {
		state: { userData },
	} = useContext(AppContext);

	const [image, setImage] = useState(null);
	const [loading, setLoading] = useState(false);
	const [profileInfo, setProfileInfo] = useState(userData);
	const [links, setLinks] = useState({
		website_url: '',
		twitter_url: '',
		facebook_url: '',
	});

	console.log(userData);

	// const [formInput, setFormInput] = useState({
	// 	username: '',
	// 	first_name: '',
	// 	last_name: '',
	// 	email: '',
	// 	gender: '',
	// 	phone_number: '',
	// 	date_of_birth: '',
	// 	state_or_region: '',
	// 	city: '',
	// 	country: '',
	// 	bio: '',
	// 	organisation: '',
	// 	work_experience: '',
	// 	stack: '',
	// 	position: '',
	// 	// links: ['', '', ''],
	// 	role: '',
	// 	image_url: '',
	// 	website_url: '',
	// 	twitter_url: '',
	// 	facebook_url: '',
	// });

	const { updateProfile } = useMessenger();

	const handleImageUpload = () => {
		const input = document.createElement('input');
		input.type = 'file';
		input.accept = 'image/*';
		input.click();

		input.onchange = (event) => {
			const file = event.target.files[0];
			const reader = new FileReader();

			reader.onload = (e) => {
				setImage(e.target.result);
			};

			reader.readAsDataURL(file);
		};
	};

	const handleRemoveImage = () => {
		setImage(null);
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setProfileInfo((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleLinkInput = (event) => {
		const { name, value } = event.target;
		setLinks((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSave = () => {
		setLoading(true);
		const data = { ...profileInfo, image_url: image };
		console.log(data);
		updateProfile(userData.username, data);
	};

	const handleCancel = () => {};

	return (
		<div className={styles.page}>
			<div className={`${styles.editProfile} lpContainer`}>
				<div className={styles.aside}>
					<div className={styles.profile}>
						<h2 className={styles.heading}>Edit Profile</h2>
						<div className={styles.info}>
							<div className={styles.avatar}>
								<img
									className={styles.avatar}
									src={
										userData?.image_url?.trim() === ''
											? avatar
											: userData.image_url
									}
									alt="user avatar"
								/>
							</div>
							<div>
								<h3>{`${userData.first_name} ${userData.last_name}`}</h3>
								<p className={styles.username}>@{userData.username}</p>
								<span>{userData.role}</span>
							</div>
							<div className={styles.stats}>
								<div className={styles.stat}>
									<span>{userData.following}</span>
									<span>Following</span>
								</div>
								<div className={styles.stat}>
									<span>{userData.followers}</span>
									<span>Followers</span>
								</div>
								<div className={styles.stat}>
									<span>2.5k</span>
									<span>Tokens</span>
								</div>
							</div>
						</div>
						<button
							type="button"
							className={styles.btn}
							onClick={handleImageUpload}
						>
							UPLOAD NEW AVATAR
						</button>

						{image && (
							<div className={`${styles.avatar} ${styles.selectedImage}`}>
								<IoCloseCircleOutline
									className={styles.closeIcon}
									onClick={handleRemoveImage}
								/>
								<img src={image} alt="Selected avatar" />
							</div>
						)}

						<div className={styles.bio}>
							<h3>Bio</h3>
							<p>{userData.bio}</p>
						</div>
					</div>
				</div>
				<div className={styles.form}>
					<form onSubmit={handleSave}>
						<div className={styles.primaryDeets}>
							<h4>Primary details</h4>
							<Input
								label="First Name"
								type="text"
								name="first_name"
								placeholder="First Name"
								onChange={handleInputChange}
								value={profileInfo.first_name}
							/>
							<Input
								label="Last Name"
								type="text"
								name="last_name"
								placeholder="Last Name"
								onChange={handleInputChange}
								value={profileInfo.last_name}
							/>
							<Input
								label="Username"
								type="text"
								name="username"
								placeholder="Username"
								onChange={handleInputChange}
								value={profileInfo.username}
							/>
							<Input
								label="Email"
								type="Text"
								name="email"
								placeholder="Email"
								onChange={handleInputChange}
								value={profileInfo.email}
							/>
						</div>
						<div className={styles.address}>
							<h4>Address</h4>
							<Input
								label="Country"
								type="text"
								name="country"
								placeholder="Country"
								onChange={handleInputChange}
								value={profileInfo.country}
							/>
							<Input
								label="State/Region"
								type="text"
								name="state_or_region"
								placeholder="State"
								onChange={handleInputChange}
								value={profileInfo.state_or_region}
							/>
							<Input
								label="City"
								type="text"
								name="city"
								placeholder="City"
								onChange={handleInputChange}
								value={profileInfo.city}
							/>
						</div>
						<div className={styles.aboutMe}>
							<h4>About Me</h4>

							<div>
								<label htmlFor="bio">
									Bio
									<textarea
										id="bio"
										name="bio"
										value={profileInfo.bio}
										onChange={handleInputChange}
										placeholder="End to end Web Developer specialised in front-end Architecture passionate about pure Css animated 3D stuff and Art. I like tools  for building WebApps like Chrome."
									/>
								</label>
							</div>
						</div>
						<div className={styles.workInfo}>
							<h4>Work Information</h4>
							<Input
								label="Organisation"
								type="text"
								name="organisation"
								placeholder="Organisation"
								onChange={handleInputChange}
								value={profileInfo.organisation}
							/>
							<Input
								label="Role"
								type="text"
								name="role"
								placeholder="Role"
								onChange={handleInputChange}
								value={profileInfo.role}
							/>
							<Input
								label="Work Experience"
								type="text"
								name="work_experience"
								placeholder="Work Experience"
								onChange={handleInputChange}
								value={profileInfo.work_experience}
							/>
							<Input
								label="Stack"
								type="text"
								name="stack"
								placeholder="Stack"
								onChange={handleInputChange}
								value={profileInfo.stack}
							/>
						</div>
						<div className={styles.links}>
							<h4>External Links</h4>
							<Input
								label="Website Url"
								type="text"
								name="website_url"
								placeholder="Paste your link here"
								onChange={handleLinkInput}
								value={links.website_url}
							/>
							<Input
								label="Twitter Url"
								type="text"
								name="twitter_url"
								placeholder="Paste your link here"
								onChange={handleLinkInput}
								value={links.twitter_url}
							/>
							<Input
								label="Facebook Url"
								type="text"
								name="facebook_url"
								placeholder="Paste your link here"
								onChange={handleLinkInput}
								value={links.facebook_url}
							/>
						</div>
						<div className={styles.btns}>
							<button type="button" className={styles.btn} onClick={handleSave}>
								SAVE CHANGES{' '}
							</button>
							<button
								type="button"
								className={styles.btn}
								onClick={handleCancel}
							>
								CANCEL
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default EditProfile;

function Input({ label, name, onChange, value, type, placeholder, className }) {
	return (
		<div className={className}>
			<label htmlFor={name}>
				<div className={styles.label}>{label}</div>
			</label>
			<input
				className={styles.input}
				name={name}
				id={name}
				type={type}
				onChange={onChange}
				value={value}
				placeholder={placeholder}
			/>
		</div>
	);
}

Input.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	className: PropTypes.string,
	placeholder: PropTypes.string.isRequired,
};

Input.defaultProps = {
	className: '',
};
