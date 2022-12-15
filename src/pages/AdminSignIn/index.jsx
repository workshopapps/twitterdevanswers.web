import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './AdminSignIn.module.css';
import { AppContext } from '../../store/AppContext';

function AdminSignIn() {
	const [userInfo, setUserInfo] = useState({
		username: '',
		password: '',
	});
	const [message, setMessage] = useState('');

	const { state } = useContext(AppContext);

	const [session, setSession] = useState({ ...state });
	const navigate = useNavigate();

	useEffect(() => {
		localStorage.setItem('session', JSON.stringify(session));
	}, [session]);

	const handleChange = (event) => {
		const { name, value } = event.target;

		setUserInfo((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const completeSignIn = async () => {
		const formData = new FormData();
		formData.append('username', userInfo.username);
		formData.append('password', userInfo.password);

		try {
			const data = await axios.post(
				'https://api.devask.hng.tech/auth/signin',
				formData
			);

			if (data) {
				setSession((prevState) => ({
					...prevState,
					user: data.data,
				}));
				setMessage('Signing in...');

				setTimeout(() => {
					navigate('/admin-dashboard');
				}, 3000);
			}
		} catch (error) {
			setMessage('Enter correct credentials');
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		completeSignIn();
	};

	return (
		<section className={styles.cardContainer}>
			<div className={styles.cardContent}>
				<img src="/logo.svg" alt="Logo" />

				<h1 className={styles.cardHeading}>Hello Again!</h1>

				<h2>Welcome back, please put in your details</h2>

				<form onSubmit={handleSubmit}>
					<p className={styles.message}>{message}</p>
					<label htmlFor="username">
						Email Address
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

					<button type="submit">Login</button>
				</form>

				<p className={styles.notice}>
					{' Need to create an Admin account on Devask?'}
					<br />
					<Link to="/admin-signup">Sign Up</Link>
				</p>
			</div>
		</section>
	);
}

export default AdminSignIn;
