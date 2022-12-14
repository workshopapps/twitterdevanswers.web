import React, { useEffect, useState } from 'react';
import notifications from './constants';
import styles from './styles.module.css';
import NotificationItem from '../../components/NotificationItem';

function Notifications() {
	const [activeTab, setActiveTab] = useState('all');
	const [notificationsToDisplay, setNotificationsToDisplay] =
		useState(notifications);

	useEffect(() => {
		if (activeTab === 'all') {
			setNotificationsToDisplay(notifications);
		} else if (activeTab === 'unread') {
			setNotificationsToDisplay(notifications.filter((n) => n.unread));
		}
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
						activeTab === 'unread' ? styles.active_tab : ''
					}`}
					onClick={() => setActiveTab('all')}
				>
					Today
				</button> 
			</nav>

			<section className={styles.notifications_list}>
				{notificationsToDisplay.length &&
					notificationsToDisplay?.map((notification) => 
						
						
							<div
								key={notification.id}
								className={`${styles.notification_item}
								}`}
							>
								<div>
									<NotificationItem notification={notification || {}} />
								</div>
							</div>
						
					)}
			</section>
		</main>
	);
}

export default Notifications;
