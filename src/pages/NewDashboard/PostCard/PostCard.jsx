/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { BsChatSquareDots, BsShare } from 'react-icons/bs';
import { ReactComponent as Heart } from '../heart.svg';
import avatar from '../../../assets/dashboard/user.png';
import styles from './postCard.module.css';
import useMessenger, { timeStamp } from '../utils';
import { AppContext } from '../../../store/AppContext';

function PostCard({
	post: {
		created_at: createdAt,
		question_id: questionId,
		total_like: likes,
		title,
		content,
		img,
		tag,
		payment_amount: paymentAmount,
		owner_id: ownerId,
	},
}) {
	const { handleNavigate, getUsers, getAnswers, likeUnlike, getLikes } =
		useMessenger();

	const [answers, setAnswers] = useState([]);
	const [askedBy, setAskedBy] = useState(null);
	const [liked, setLiked] = useState(null);

	const {
		state: {
			token,
			user: { user_id: loggedInUserId },
		},
	} = useContext(AppContext);

	// get user, get answers
	useEffect(() => {
		const fetchUser = async () => {
			const result = await getUsers();
			const user = result.find(({ user_id: userId }) => userId === ownerId);
			setAskedBy(user);
		};

		const fetchAnswers = async () => {
			const result = await getAnswers(questionId);
			setAnswers(result);
		};

		const fetchLikes = async () => {
			const { data } = await getLikes(questionId);
			const user = data?.find(
				({ user_id: userId }) => userId === loggedInUserId
			);
			setLiked(user);
		};

		fetchAnswers();
		fetchUser();
		fetchLikes();
	}, []);

	const handleLIke = (event) => {
		event.stopPropagation();

		if (liked) {
			likeUnlike(questionId, 'down');
		} else {
			likeUnlike(questionId, 'up');
		}
	};

	return (
		askedBy && (
			<div
				role="link"
				onKeyDown={() => {}}
				tabIndex={0}
				onClick={(event) =>
					handleNavigate(event, `/question-page/${questionId}`)
				}
				className={styles.card}
			>
				<div
					role="link"
					onKeyDown={() => {}}
					tabIndex={0}
					onClick={(event) =>
						handleNavigate(event, `/user-page/${askedBy?.username}`)
					}
				>
					<img
						className={styles.avatar}
						src={askedBy?.image_url?.trim() === '' ? avatar : askedBy.image_url}
						alt="user avatar"
					/>
				</div>
				<div className={styles.right}>
					<div className={styles.top}>
						<span
							className={styles.fullName}
							role="link"
							onKeyDown={() => {}}
							tabIndex={0}
							onClick={(event) =>
								handleNavigate(event, `/user-page/${askedBy?.username}`)
							}
						>{`${askedBy?.first_name} ${askedBy?.last_name}`}</span>
						<span
							role="link"
							onKeyDown={() => {}}
							tabIndex={0}
							onClick={(event) =>
								handleNavigate(event, `/user-page/${askedBy?.username}`)
							}
						>
							@{askedBy?.username}
						</span>{' '}
						<span>{timeStamp(createdAt)}</span>
					</div>
					<h3>{title}</h3>
					<p>{content}</p>
					{img && <img src={img} className={styles.img} alt="post" />}
					{tag.trim() === '' ? null : <span className={styles.tag}>{tag}</span>}
					<div className={styles.bottom}>
						{token && (
							<div className={styles.icons}>
								<div className={styles.replies}>
									<BsChatSquareDots className={styles.icon} />{' '}
									<span>{answers?.length}</span>
								</div>
								<div className={styles.likes}>
									{/* <IoHeart/> */}
									<Heart
										className={styles.icon}
										style={{ fill: liked ? '#492b7c' : '#fff' }}
										onClick={handleLIke}
									/>
									<span>{likes}</span>
								</div>
								<div>
									<BsShare className={styles.icon} />
								</div>
							</div>
						)}
						<div className={styles.token}>{paymentAmount}Tokens</div>
					</div>
				</div>{' '}
			</div>
		)
	);
}

export default PostCard;

PostCard.propTypes = {
	post: PropTypes.shape({
		created_at: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		img: PropTypes.string,
		tag: PropTypes.string.isRequired,
		total_like: PropTypes.number.isRequired,
		payment_amount: PropTypes.number.isRequired,
		owner_id: PropTypes.number.isRequired,
		question_id: PropTypes.number.isRequired,
	}).isRequired,
};

// PostCard.defaultProps = {
// 	img: '',
// };
