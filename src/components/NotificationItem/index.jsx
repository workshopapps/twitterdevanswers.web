import React from 'react';
import PropTypes from 'prop-types';
import getNotificationBody from './logic';

import HorizontalMoreIcon from '../../assets/notification-images/more-icon.svg';
import styles from './styles.module.css';

function NotificationItem({ notification }) {
	const { question, unread, from } = notification;
	const username = from?.username || question?.from?.username;
	const displayName = from?.displayName || question?.from?.displayName;
	const avatar = from?.avatar || question?.from?.avatar;

	const typeText = getNotificationBody(notification);

	return (
		<div className={styles.from_section}>
			{avatar ? (
				<img src={avatar} alt="User's avatar" className={styles.avatar} />
			) : null}
			<div>
				{displayName && username ? (
					<p className={styles.name}>
						<b>{displayName}</b>&nbsp;
						<span
							style={{
								color: `${unread ? '#1818B4' : '#989898'}`,
								fontWeight: 400,
							}}
						>
							@{username}
						</span>
					</p>
				) : null}
				{typeText}
				<div>
					{question ? (
						<div className={styles.question_section}>
							<h2>
								{question?.title?.length > 180
									? `${question.title.substring(0, 180)}...}`
									: question?.title}
							</h2>
							<p>
								{question?.body?.length > 180
									? `${question.body.substring(0, 180)}...`
									: question?.body}
							</p>
						</div>
					) : null}
					<p
						className={styles.timestamp}
						style={{
							color: `${unread ? '#1818B4' : '#989898'}`,
							fontWeight: 400,
						}}
					>
						{unread ? '36 secs' : '1 hr ago'}
					</p>
				</div>
			</div>
			<img
				src={HorizontalMoreIcon}
				alt="Horizontal more icon"
				className={styles.more_icon}
			/>
		</div>
	);
}

const From = PropTypes.shape({
	displayName: PropTypes.string,
	username: PropTypes.string,
	avatar: PropTypes.string,
});

const Notification = PropTypes.shape({
	id: PropTypes.number,
	type:
		'reply' ||
		'like' ||
		'wallet-add' ||
		'wallet-remove' ||
		'for-you' ||
		'marked-as-correct' ||
		'for-you',
	unread: PropTypes.bool,
	from: PropTypes.instanceOf(From),
	question: PropTypes.shape({
		id: PropTypes.number,
		from: PropTypes.instanceOf(From),
		title: PropTypes.string,
		body: PropTypes.string,
	}),
});
NotificationItem.propTypes = {
	notification: PropTypes.shape(Notification),
};
NotificationItem.defaultProps = {
	notification: {},
};

export default NotificationItem;
