import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import useMessenger from '../utils';
import styles from './ymlPost.module.css';
import avatar from '../../../assets/dashboard/user.png';

function YmlPosts({
	post: { title, owner_id: ownerId, question_id: questionId },
}) {
	const [askedby, setAskedby] = useState({});
	const [answers, setAnswers] = useState([]);

	const { getUsers, getAnswers, handleNavigate } = useMessenger();

	useEffect(() => {
		const fetchUser = async () => {
			const result = await getUsers();
			const user = result.find(({ user_id: userId }) => userId === ownerId);
			setAskedby(user);
		};
		const fetchAnswers = async () => {
			const result = await getAnswers(questionId);
			setAnswers(result);
		};

		fetchAnswers();

		fetchUser();
	}, []);

	// console.log(replies);
	// console.log(replies);
	// console.log(answers);

	return (
		<div
			className={styles.ymlPost}
			role="link"
			onKeyDown={() => {}}
			tabIndex={0}
			onClick={(event) => handleNavigate(event, `/question-page/${questionId}`)}
		>
			<div
			className={styles.img_box}
				role="link"
				onKeyDown={() => {}}
				tabIndex={0}
				onClick={(event) =>
					handleNavigate(event, `/question-page/${questionId}`)
				}
			>
				<img
					src={askedby?.image_url?.trim() === '' ? avatar : askedby.image_url}
					alt="user avatar"
				/>
			</div>
			<div className={styles.text}>
				<p className={styles.title}>
					<Link to="/post">{title}</Link>
				</p>
				<p className={styles.replies}>{answers.length} Replies</p>
			</div>
		</div>
	);
}

export default YmlPosts;

YmlPosts.propTypes = {
	post: PropTypes.shape({
		owner_id: PropTypes.number.isRequired,
		question_id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
	}).isRequired,
};
