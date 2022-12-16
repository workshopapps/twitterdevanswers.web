import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { FaEllipsisV } from 'react-icons/fa';
import avatar from '../../../assets/dashboard/user.png';
import styles from './replyCard.module.css';
import useMessenger, { timeStamp } from '../utils';

function ReplyCard({
	reply: { owner_id: ownerId, content, created_at: createdAt },
	poster: replyingTo,
}) {
	const [answeredBy, setAnsweredBy] = useState({});

	const { getUsers, handleNavigate } = useMessenger();

	// get user
	useEffect(() => {
		const fetchUser = async () => {
			const result = await getUsers();
			const user = result.find(({ user_id: userId }) => userId === ownerId);
			setAnsweredBy(user);
		};

		fetchUser();
	}, []);

	return Object.keys(answeredBy).length === 0 ? null : (
		<div className={styles.replyCard}>
			<div className={styles.infos}>
				<div className={styles.data}>
					<div
						className={styles.img}
						role="link"
						onKeyDown={() => {}}
						tabIndex={0}
						onClick={(event) =>
							handleNavigate(event, `/profile/${answeredBy?.username}`)
						}
					>
						<img
							src={
								answeredBy?.image_url?.trim() === ''
									? avatar
									: answeredBy?.image_url
							}
							alt="user avatar"
						/>{' '}
					</div>
					<div className={styles.info}>
						<div className={styles.names}>
							<span
								className={styles.name}
								role="link"
								onKeyDown={() => {}}
								tabIndex={0}
								onClick={(event) =>
									handleNavigate(event, `/profile/${answeredBy?.username}`)
								}
							>{`${answeredBy?.first_name} ${answeredBy?.last_name}`}</span>
							<span
								className={`${styles.grayText} ${styles.username}`}
								role="link"
								onKeyDown={() => {}}
								tabIndex={0}
								onClick={(event) =>
									handleNavigate(event, `/profile/${answeredBy?.username}`)
								}
							>
								@{answeredBy?.username}
							</span>
							<span className={styles.grayText}>.</span>
							<span className={`${styles.grayText} ${styles.timeStamp}`}>
								{timeStamp(createdAt)}
							</span>
						</div>
						<div className={styles.replyingTo}>Replying to @{replyingTo}</div>
					</div>
				</div>
				<div className={styles.topRight}>
					{answeredBy?.user_id === ownerId ? null : (
						<div className={styles.checkbox}>
							<input type="checkbox" id="check" />
						</div>
					)}
					<FaEllipsisV />
				</div>
			</div>
			<div className={styles.text}>{content}</div>
		</div>
	);
}

export default ReplyCard;
ReplyCard.propTypes = {
	reply: PropTypes.shape({
		owner_id: PropTypes.number.isRequired,
		content: PropTypes.string.isRequired,
		created_at: PropTypes.string.isRequired,
	}).isRequired,
	poster: PropTypes.string,
};

ReplyCard.defaultProps = {
	poster: '',
};
