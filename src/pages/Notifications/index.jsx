/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Notifications.module.css';
import { AppContext } from '../../store/AppContext';
import Yml from '../NewDashboard/Yml/Yml';
import TopUsers from '../NewDashboard/TopUsers/TopUsers';

function Notifications() {
	const [activeTab, setActiveTab] = useState('all');
	const [isError, setIsError] = useState(false);

	const [allNotifications, setAllNotifications] = useState([]);

	const { state } = useContext(AppContext);

	const getAllNotifications = async () => {
		const headers = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${state.token}`,
		};
		try {
			const data = await axios.get('https://api.devask.tech/notification/all', {
				headers,
			});

			if (data) {
				setAllNotifications(data.data.notifications);
			}
		} catch (err) {
			setIsError(true);
		}
	};

	const markAsRead = async (notif_id, type) => {
		const headers = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${state.token}`,
		};
		try {
			const data = await axios.patch(
				`https://api.devask.tech/notification/read/${notif_id}/?type=${type.toLowerCase()}`,
				{
					headers,
				}
			);

			if (data) {
				console.log(data, 'data');
			}
		} catch (err) {
			console.error(err, 'err');
		}
	};

	useEffect(() => {
		getAllNotifications();
	}, []);

	return (
		<main className={styles.main}>
			<section className={styles.left}>
				{!isError ? (
					<>
						<h1 className={styles.main_heading}>
							Notifications (
							{allNotifications.length === 0
								? 0
								: allNotifications.filter((notif) => notif.unread).length}
							)
						</h1>

						<nav>
							<button
								type="button"
								className={`${styles.tab} ${
									activeTab === 'unread' ? styles.active_tab : ''
								}`}
								onClick={() => setActiveTab('all')}
							>
								Today
							</button>
						</nav>

						<section className={styles.notifications_list}>
							{allNotifications &&
								allNotifications.map((notification) => {
									const {
										content_id,
										notification_id,
										// owner_id,
										title,
										type,
										unread,
									} = notification;

									if (type === 'Answer' || type === 'Like') {
										return (
											<Link
												to={`/question-page/${content_id}`}
												key={notification_id}
												onClick={() => markAsRead(notification_id, type)}
											>
												<div
													className={styles.replyToQuestion}
													style={{ background: unread ? '#f6f0ff' : '#ffffff' }}
												>
													{/* <img src="/profile.svg" alt="User Profile" /> */}

													<article>
														<h3>
															<span>{title.split(' ').shift()}</span>{' '}
															{title.substring(title.indexOf(' ') + 1)}
														</h3>{' '}
													</article>

													<img src="/more-icon.svg" alt="More Icon" />
												</div>
											</Link>
										);
									}
									if (type === 'transaction') {
										return (
											<Link
												to={`/${content_id}`}
												key={notification_id}
												onClick={() => markAsRead(notification_id, type)}
											>
												<div
													className={styles.replyToQuestion}
													style={{ background: unread ? '#f6f0ff' : '#ffffff' }}
												>
													{/* <img src="/profile.svg" alt="User Profile" /> */}

													<article>
														<h3>
															<span>{title.split(' ').shift()}</span>{' '}
															{title.substring(title.indexOf(' ') + 1)}
														</h3>{' '}
													</article>

													<img src="/more-icon.svg" alt="More Icon" />
												</div>
											</Link>
										);
									}
								})}
						</section>
					</>
				) : (
					<h3>No data found</h3>
				)}
			</section>

			<aside>
				<TopUsers />
				<Yml />
			</aside>
		</main>
	);
}

export default Notifications;
