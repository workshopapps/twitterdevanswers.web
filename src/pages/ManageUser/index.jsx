import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './ManageUser.module.css';

function ManageUser() {
	const navigate = useNavigate();

	const [isShow, setIsShow] = useState(false);
	const [isModalShow, setIsModalShow] = useState(false);

	const [user, setUser] = useState({});
	const [isError, setIsError] = useState(true);
	const [errorText, setErrorText] = useState('Error...');

	const session = JSON.parse(localStorage.getItem('session'));

	const { username } = useParams();
	const [view, setView] = useState({
		totalEarned: 0,
		currentBalance: 0,
		totalSpent: 0,
	});

	const viewUserWallet = async (id) => {
		const userId = id;
		try {
			const response = await axios.get(`https://api.devask.hng.tech/user/wallet/view/${userId}`);
			const { balance} = response.data;
			const totalSpent = response.data.total_spent;
			const totalEarned = response.data.total_earned;

			console.log('response', response)
			setView((prev) =>({
				...prev,
				currentBalance: balance,
				totalEarned,
				totalSpent,
			}))
			console.log('spent', totalSpent)
		} catch (e) {
			console.log('e', e)
		}
}

	useEffect(() => {
		const getUser = async () => {
			const headers = {
				Authorization: `Bearer ${session.user.access_token}`,
				'Content-Type': 'application/json',
			};

			try {
				const data = await axios.get(
					`https://api.devask.hng.tech/admin/user/${username}`,
					{
						headers,
					}
				);

				if (data) {
					setUser(data.data.data);
					viewUserWallet(data.data.data.user_id);
				
				}
			} catch (err) {
				setIsError(false);
				setErrorText('No data found');
			}
		};

		getUser();
	}, []);


	
	const handleDelete = async (userValue) => {
		const headers = {
			Authorization: `Bearer ${session.user.access_token}`,
			'Content-Type': 'application/json',
		};

		try {
			const data = await axios.delete(
				`https://api.devask.hng.tech/admin/user/${userValue}`,
				{
					headers,
				}
			);

			if (data) {
				setTimeout(() => {
					navigate('/admin-dashboard');
				}, 3000);
			}
		} catch (err) {
			setIsError(false);
		}
	};

	const handleRemoveAsAdmin = async (userValue) => {
		const headers = {
			Authorization: `Bearer ${session.user.access_token}`,
			'Content-Type': 'application/json',
		};

		try {
			const data = await axios.post(
				`https://api.devask.hng.tech/admin/remove/${userValue}`,
				{
					headers,
				}
			);

			if (data) {
				setTimeout(() => {
					navigate('/admin-dashboard');
				}, 3000);
			}
		} catch (err) {
			setIsError(false);
		}
	};

	const handleAssignAdmin = async (userValue) => {
		const headers = {
			Authorization: `Bearer ${session.user.access_token}`,
			'Content-Type': 'application/json',
		};

		try {
			const data = await axios.post(
				`https://api.devask.hng.tech/admin/add/${userValue}`,
				{
					headers,
				}
			);

			if (data) {
				setTimeout(() => {
					navigate('/admin-dashboard');
				}, 3000);
			}
		} catch (err) {
			setIsError(false);
		}
	};



	// useEffect(() => {
    //     const interval = setInterval(() => {
    //         viewUserWallet(user.user_id);
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, []);

	return (
		<section className={styles.container}>
			{isError ? (
				<>
					<div className={styles.urlPath}>
						<Link to="/admin-dashboard">Admin Dashboard</Link> /
						<Link to={`/manage-user/${username}`}> Manage User</Link>
					</div>

					<h1 className={styles.userName}>
						{user.first_name &&
							`${user.first_name
								.slice(0, 1)
								.toUpperCase()}${user.first_name.slice(1)} ${user.last_name
								.slice(0, 1)
								.toUpperCase()}${user.last_name.slice(1)}`}
					</h1>
					{/* <p>Last active on 16 March 2022 </p> */}

					<section className={styles.detailsWrapper}>
						<div className={styles.infoWrapper}>
							<h3 className={styles.accountHeading}>Account details</h3>
							<article className={styles.bioWrapper}>
								<img src="/manage-pic.svg" alt="Manage Pic" />

								{/* <div>
									<span>First name</span>
									<h4>
										{user.first_name &&
											`${user.first_name
												.slice(0, 1)
												.toUpperCase()}${user.first_name.slice(1)}`}
									</h4>
								</div> */}
{/* 
								<div>
									<span>Last name</span>
									<h4>
										{user.last_name &&
											`${user.last_name
												.slice(0, 1)
												.toUpperCase()}${user.last_name.slice(1)}`}
									</h4>
								</div> */}
								<div>
									<span>Username</span>
									<h4>{user.username}</h4>
								</div>

								<div>
									<span>Email address</span>
									<h4>{user.email}</h4>
								</div>

								{/* <div>
									<span>Date of Birth</span>
									<h4>{user.date_of_birth}</h4>
								</div> */}

								{/* <button type="button" className={styles.btn}>
									Suggest changes
								</button> */}
							</article>
						</div>

						<div className={styles.walletInfo}>
							<div className={styles.descriptionWrapper}>
								<div className={styles.activityWrapper}>
									<h3 className={styles.accountHeading}>Escrow Overview</h3>
									<button type="button" onClick={() => setIsShow(!isShow)}>
										<img src="/ri-more-line.svg" alt="More line" />
									</button>
								</div>

								<p className={styles.description}>
									Manage this user’s escrow wallet
								</p>
								{isShow && (
									<div className={styles.dropdown}>
										{user && user.is_admin ? (
											<button
												type="button"
												onClick={() => handleRemoveAsAdmin(user.username)}
											>
												Remove as admin
											</button>
										) : (
											<button
												type="button"
												onClick={() => {
													handleAssignAdmin(user.username);
												}}
											>
												Assign admin role
											</button>
										)}

										<button type="button">Edit User</button>
										<button
											type="button"
											onClick={() => setIsModalShow(!isModalShow)}
										>
											Delete User{' '}
										</button>
									</div>
								)}
							</div>

							<div className={styles.walletSpecs}>
								<article>
									<h4>Current balance</h4>

									<div>
										<h5>
											{view.currentBalance} <span>Tokens</span>
										</h5>
										<img src="/arrow-right.svg" alt="Right arrow" />
									</div>
								</article>

								<article>
									<h4>Total Commissioned</h4>

									<div>
										<h5>
											10%<span>All Transactions</span>
										</h5>
										<img src="/arrow-right.svg" alt="Right arrow" />
									</div>
								</article>

								<article>
									<h4>Total Spent</h4>

									<div>
										<h5>
											{view.totalSpent}<span>Tokens</span>
										</h5>
										<img src="/arrow-right.svg" alt="Right arrow" />
									</div>
								</article>

								<article>
									<h4>Total Earned</h4>

									<div>
										<h5>
											{view.totalEarned}<span>Tokens</span>
										</h5>
										<img src="/arrow-right.svg" alt="Right arrow" />
									</div>
								</article>
							</div>
						</div>
					</section>
				</>
			) : (
				<>
					<h3>{errorText}</h3>
					<div className={styles.buttonWrapper}>
						<button
							type="button"
							onClick={() => navigate(-1)}
							className={styles.styledButton}
						>
							Go back
						</button>
					</div>
				</>
			)}

			{isModalShow && (
				<section className={styles.overlay}>
					<div className={styles.modal}>
						<div className={styles.top}>
							<h5>Delete User</h5>
							<button
								type="button"
								onClick={() => setIsModalShow(!isModalShow)}
							>
								<img src="/cancel-icon.svg" alt="Cancel Icon" />
							</button>
						</div>

						<p className={styles.body}>
							Are you sure you want to delete user{' '}
							{user.first_name &&
								`${user.first_name
									.slice(0, 1)
									.toUpperCase()}${user.first_name.slice(1)}`}{' '}
							{user.last_name &&
								`${user.last_name
									.slice(0, 1)
									.toUpperCase()}${user.last_name.slice(1)}`}
						</p>

						<div className={styles.buttonWrapper}>
							<button
								type="button"
								onClick={() => setIsModalShow(!isModalShow)}
							>
								Cancel
							</button>
							<button type="button" onClick={() => handleDelete(user.username)}>
								Delete
							</button>
						</div>
					</div>
				</section>
			)}
		</section>
	);
}

export default ManageUser;
