/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './styles.module.css';
import { AppContext } from '../../store/AppContext';

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
			const data = await axios.get(
				'https://api.devask.tech/notification/all',
				{
					headers,
				}
			);
			console.log(data, data);
			if (data) {
				setAllNotifications(data.data.notifications);
			}
		} catch (err) {
			setIsError(true);
		}
	};

	useEffect(() => {
		getAllNotifications();
	}, []);

	return (
		<main className={styles.main}>
			{!isError ? (
				<>
					<h1 className={styles.main_heading}>
						Notifications (
						{allNotifications.length === 0 ? 0 : allNotifications.length})
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

								if (type === 'Answer') {
									return (
										<Link
											to={`/question-page/${content_id}`}
											key={notification_id}
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
						{/* 
				<div className={styles.tagContent}>
					<h3>
						<img src="/dollar-circle.svg" alt="Token" />
						0.15 tokens added to your wallet
					</h3>
					<img src="/more-icon.svg" alt="More Icon" />
				</div>

				<div className={styles.newQuestions}>
					<h3>
						{' '}
						<img src="/tag.svg" alt="Tag Icon" />3 new questions on python
					</h3>
					<img src="/more-icon.svg" alt="More Icon" />
				</div>

				<div className={styles.correctAnswer}>
					<article>
						<img src="/profile.svg" alt="User Profile" />
						<h3>
							<span>CodeFreak</span> declared your answer correct
						</h3>
					</article>

					<img src="/more-icon.svg" alt="More Icon" />
				</div>

				<div className={styles.askQuestion}>
					<article>
						<img src="/profile.svg" alt="User Profile" />
						<h3>
							<span>CodedLibra</span> asked a question
						</h3>
					</article>

					<img src="/more-icon.svg" alt="More Icon" />
				</div> */}
					</section>
				</>
			) : (
				<h3>No data found</h3>
			)}
		</main>
	);
}

export default Notifications;
