import React, { useEffect, useState } from 'react';
import notifications from './constants';
import styles from './styles.module.css';
import NotificationItem from '../../components/NotificationItem';

function Notifications() {
	const [activeTab, setActiveTab] = useState('all');
	const [notificationsToDisplay, setNotificationsToDisplay] =
		useState(notifications);

	// const [allNotifications, setAllNotifications] = useState([]);

	useEffect(() => {
		if (activeTab === 'all') {
			setNotificationsToDisplay(notifications);
		} else if (activeTab === 'unread') {
			setNotificationsToDisplay(notifications.filter((n) => n.unread));
		}

		const sse = new EventSource(
			'https://pacific-peak-54505.herokuapp.com/notification?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1LCJleHAiOjE2Njk4MTEzNTd9.WzEb7VTH87OxHfrKH0aC9eqwemkGwss7P4ELbTO4Pq0'
			// { withCredentials: true }
		);

		console.log(sse);

		function handleStream(e) {
			console.log(e);
			// setData(e.data);
		}

		sse.onmessage = (e) => {
			handleStream(e);
		};

		sse.onerror = () => {
			sse.close();
		};

		return () => {
			sse.close();
		};
	}, [activeTab]);

	return (
		<main className={styles.main}>
			<h1 className={styles.main_heading}>
				Notifications ({notifications.length})
			</h1>

			<nav>
				<button
					type="button"
					className={`${styles.tab} ${
						activeTab === 'all' ? styles.active_tab : ''
					}`}
					onClick={() => setActiveTab('all')}
				>
					All
				</button>
				<button
					type="button"
					className={`${styles.tab} ${
						activeTab === 'unread' ? styles.active_tab : ''
					}`}
					onClick={() => setActiveTab('unread')}
				>
					Unread
				</button>
			</nav>

			<section className={styles.notifications_list}>
				{notificationsToDisplay.length &&
					notificationsToDisplay?.map((notification) => {
						const { unread } = notification;
						return (
							<div
								key={notification.id}
								className={`${styles.notification_item} ${
									unread ? styles.unread : ''
								}`}
							>
								<div>
									<NotificationItem notification={notification || {}} />
								</div>
							</div>
						);
					})}
			</section>
		</main>
	);
}

export default Notifications;
