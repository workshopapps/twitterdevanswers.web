// /* eslint-disable react/no-unused-prop-types */
// /* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */
import React, { memo, useEffect, useState } from 'react';
import axios from 'axios';
import { PropTypes } from 'prop-types';
import { FaEllipsisV } from 'react-icons/fa';
import avatar from '../../../assets/dashboard/user.png';
import styles from './replyCard.module.css';
import useMessenger, { timeStamp } from '../utils';
import AuthModal from '../../AuthPage/AuthModal';
import { useModal } from '../../AuthPage/utils';

function ReplyCard({
	reply: {
		owner_id: ownerId,
		content,
		created_at: createdAt,
		answer_id: answerId,
		is_answered: isAnswered,
	},
	poster: replyingTo,
	questionId,
}) {
	const [answeredBy, setAnsweredBy] = useState({});
	const [checked, setChecked] = useState(isAnswered);
	const [msg, setMsg] = useState('');
	const [loggedInUserCred, setLoggedInUserCred] = useState({});

	const { username } = JSON.parse(localStorage.getItem('user'));

	const { getUsers, handleNavigate, getUserbyUsername, selectCorrectAnswer } =
		useMessenger();
	const { modal, showModal } = useModal();

	let tokenValue = 0

	// get user
	useEffect(() => {
		const fetchUser = async () => {
			const result = await getUsers();
			const user = result.find(({ user_id: userId }) => userId === ownerId);
			setAnsweredBy(user);
		};

		const fetchUserByUserName = async () => {
			const result = await getUserbyUsername(username);
			setLoggedInUserCred(result);
		};

		fetchUserByUserName();
		fetchUser();
	}, []);

	    // Admin Transaction Pay
		const payAllTransaction = async (amount, id) => {
			try {
				const url = 'https://api.devask.hng.tech/admin/transactions/answer/pay';
				const data = { 
					amount,
					question_id: id,
					commission: 10 
				};
				const config = { 'content-type': 'application/json' };
				const response = await axios.post(url, data, config);
				console.log(response.data);
			} catch (error) {
				console.error(error);
			}
		}

	const handleCheck = async () => {
		if (isAnswered) {
			setMsg('satisfactory answer already selected');
			showModal();
			tokenValue = JSON.parse(localStorage.getItem('tokenValue'));
			payAllTransaction(tokenValue, questionId);
			localStorage.removeItem("tokenValue");
			return;
		}

		if (username === replyingTo || loggedInUserCred.is_admin) {
			try {
				const response = await selectCorrectAnswer(answerId, +questionId);
				setMsg(response.data.detail);
				setChecked(true);
				return;
			} catch (error) {
				throw new Error(error);
			}
		}
		setMsg('not authorized');
		showModal();
	};

	return Object.keys(answeredBy).length === 0 ? null : (
		<div className={styles.replyCard}>
			<div className="modal">{modal && <AuthModal text={msg} />}</div>

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
						<div className={`${styles.replyingTo} ${styles.replyingTo_lg}`}>
							Replying to @{replyingTo}
						</div>
					</div>
				</div>
				<div className={styles.topRight}>
					{answeredBy?.username === replyingTo ? null : (
						<div className={styles.checkbox}>
							<input
								type="checkbox"
								id="check"
								checked={checked}
								onChange={handleCheck}
							/>
						</div>
					)}
					<FaEllipsisV />
				</div>
			</div>
			<div className={styles.text}>
				<div className={`${styles.replyingTo} ${styles.replyingTo_sm}`}>
					Replying to @{replyingTo}
				</div>
				{content}
			</div>
		</div>
	);
}

export default memo(ReplyCard);
ReplyCard.propTypes = {
	reply: PropTypes.shape({
		owner_id: PropTypes.number.isRequired,
		answer_id: PropTypes.number.isRequired,
		content: PropTypes.string.isRequired,
		created_at: PropTypes.string.isRequired,
		is_answered: PropTypes.bool.isRequired,
	}).isRequired,
	poster: PropTypes.string,
	questionId: PropTypes.string.isRequired,
};

ReplyCard.defaultProps = {
	poster: '',
};
