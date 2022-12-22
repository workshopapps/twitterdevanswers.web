import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './AdminSignUp.module.css';

function AdminSignUp() {
	const [userInfo, setUserInfo] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
		verificationCode: '',
	});

	const navigate = useNavigate();
	const [codeMessage, setCodeMessage] = useState('');
	const [isCodeSend, setIsCodeSend] = useState(false);
	const [isSent, setIsSent] = useState(false);
	const [signUpMessage, setSignUpMessage] = useState('');

	const handleChange = (event) => {
		const { name, value } = event.target;

		setUserInfo((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleCodeSend = async () => {
		const details = {
			email: userInfo.email,
		};
		try {
			const data = await axios.post(
				'https://api.devask.tech/auth/send_email_code',
				details
			);

			if (data) {
				setIsCodeSend(true);
				setCodeMessage('Code has been sent to your email address');

				setTimeout(() => {
					setIsSent(true);
				}, 4000);
			}
		} catch (err) {
			setCodeMessage('Code could not be sent');
		}
	};

	const handleCodeSubmit = (event) => {
		event.preventDefault();
		handleCodeSend();
	};

	const completeSignUp = async () => {
		const details = {
			username: userInfo.username,
			email: userInfo.email,
			password: userInfo.password,
			confirmPassword: userInfo.confirmPassword,
			email_verification_code: userInfo.verificationCode,
			is_admin: true,
		};
		try {
			const data = await axios.post(
				'https://api.devask.tech/auth/admin-signup',
				details
			);

			if (data) {
				setSignUpMessage(data.data.Message);
				setTimeout(() => {
					navigate('/admin-signin');
				}, 3000);
			}
		} catch (err) {
			setSignUpMessage('Account could not be created');
			console.error(err);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		completeSignUp();
	};
	return (
		<section className={styles.cardContainer}>
			<div className={styles.cardContent}>
				<img src="/logo.svg" alt="Logo" />

				<h1 className={styles.cardHeading}>Create your account</h1>

				{!isSent ? (
					<form onSubmit={handleCodeSubmit}>
						{isCodeSend && <p className={styles.codeMessage}>{codeMessage}</p>}
						<label htmlFor="email">
							Email
							<input
								id="email"
								name="email"
								type="email"
								placeholder="Email Address"
								value={userInfo.email}
								onChange={handleChange}
								required
							/>
						</label>

						<button type="submit">Send Verification Code</button>
					</form>
				) : (
					<form onSubmit={handleSubmit}>
						<p className={styles.signUpMessage}>{signUpMessage}</p>
						<label htmlFor="email">
							Email
							<input
								id="email"
								name="email"
								type="email"
								placeholder="Email Address"
								value={userInfo.email}
								onChange={handleChange}
								required
							/>
						</label>

						<label htmlFor="username">
							Username
							<input
								id="username"
								name="username"
								type="username"
								placeholder="Username"
								value={userInfo.username}
								onChange={handleChange}
								required
							/>
						</label>

						<label htmlFor="password">
							Password
							<input
								id="password"
								name="password"
								type="password"
								placeholder="**********"
								value={userInfo.password}
								onChange={handleChange}
								required
							/>
						</label>

						<label htmlFor="confirmPassword">
							Confirm Password
							<input
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								placeholder="**********"
								value={userInfo.confirmPassword}
								onChange={handleChange}
								required
							/>
						</label>

						<label htmlFor="verificationCode">
							Verification Code
							<input
								id="verificationCode"
								name="verificationCode"
								type="text"
								placeholder="Verification Code sent to email"
								value={userInfo.verificationCode}
								onChange={handleChange}
								required
							/>
						</label>
						<button type="submit">Sign Up</button>
					</form>
				)}

				<p className={styles.notice}>
					Already have a Devask Admin account.{' '}
					<Link to="/admin-login">Login</Link>
				</p>
			</div>
		</section>
	);
}

export default AdminSignUp;
