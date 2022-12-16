import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { BsChatSquareDots, BsShare } from 'react-icons/bs';
import { ReactComponent as Heart } from '../heart.svg';
import avatar from '../../../assets/dashboard/user.png';
import styles from './postCard.module.css';
import useMessenger, { timeStamp } from '../utils';
import Modal from '../../../components/Modal/Modal';

function PostCard({
	post: {
		created_at: createdAt,
		question_id: questionId,
		// total_like: likes,
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
	const [liked, setLiked] = useState([]);
	const [alreadyLiked, setAlreadyLiked] = useState({});

	const cred = JSON.parse(localStorage.getItem('user'));
	const loggedInUserId = cred?.user_id;
	const token = localStorage.getItem('token');

	const [show, setShow] = useState(false);

	function showShareModal() {
		setShow(true);
	}

	function hideShareModal() {
		setShow(false);
	}

	const showShare = (event) => {
		event.stopPropagation();
		showShareModal();
	};
	const hideShare = () => hideShareModal();

	// get user, get answers
	useEffect(() => {
		const fetchUser = async () => {
			const result = await getUsers();
			const user = result.find(({ user_id: userId }) => userId === ownerId);
			setAskedBy(user);
		};

		const fetchLikes = async () => {
			const { data } = await getLikes(questionId);
			setLiked(data);
			const response = data?.find(
				({ user_id: userId }) => userId === loggedInUserId
			);
			setAlreadyLiked(response);
		};

		const fetchAnswers = async () => {
			const result = await getAnswers(questionId);
			setAnswers(result);
		};

		fetchAnswers();
		fetchUser();
		fetchLikes();
	}, []);

	const handleLIke = (event) => {
		event.stopPropagation();

		if (alreadyLiked?.like_type === 'up') {
			likeUnlike(questionId, 'down');

			const tempLiked = [...liked].filter(
				(object) => object.user_id !== loggedInUserId
			);

			setLiked(() => [
				...tempLiked,
				{ user_id: loggedInUserId, question_id: questionId, like_type: 'down' },
			]);
		} else if (alreadyLiked?.like_type === 'down') {
			likeUnlike(questionId, 'up');

			const tempLiked = [...liked].filter(
				(object) => object.user_id !== loggedInUserId
			);

			setLiked(() => [
				...tempLiked,
				{ user_id: loggedInUserId, question_id: questionId, like_type: 'up' },
			]);
		} else {
			likeUnlike(questionId, 'up');

			const tempLiked = [...liked].filter(
				(object) => object.user_id !== loggedInUserId
			);

			setLiked(() => [
				...tempLiked,
				{ user_id: loggedInUserId, question_id: questionId, like_type: 'up' },
			]);
		}
	};

	const numOfLikes = liked?.filter((item) => item.like_type === 'up');

	// console.log(alreadyLiked);

	// console.log(numOfLikes);

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
						handleNavigate(event, `/profile/${askedBy?.username}`)
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
								handleNavigate(event, `/profile/${askedBy?.username}`)
							}
						>{`${askedBy?.first_name} ${askedBy?.last_name}`}</span>
						<span
							role="link"
							onKeyDown={() => {}}
							tabIndex={0}
							onClick={(event) =>
								handleNavigate(event, `/profile/${askedBy?.username}`)
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
										className={`${styles.icon} ${styles.heart}`}
										onClick={handleLIke}
										style={{
											fill:
												alreadyLiked?.like_type === 'up'
													? '#4343DE'
													: 'transparent',
										}}
									/>
									<span>{numOfLikes?.length}</span>
								</div>
								<Modal onClose={hideShare} show={show} hide={hideShare} />
								<button
									type="button"
									onClick={showShare}
									className={styles.share}
								>
									<BsShare className={styles.icon} />
								</button>
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
