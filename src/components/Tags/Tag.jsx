import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import likeicon from '../../assets/tag-images/Vector.png';
import commenticon from '../../assets/tag-images/message.png';
import clock from '../../assets/tag-images/clock.png';
import styles from './Tag.module.css';

const token = localStorage.getItem('token');

	async function getUser() {
		const response = await axios.get(`https://api.devask.hng.tech/users/`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data.data;
	}

	async function getTotalReplies(id) {
		const response = await axios.get(`https://api.devask.hng.tech/answer/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data.length;
	}

export default function Tag({ isGridView }) {
	const [questions, setQuestions] = useState([]);
	const [users, setUsers] = useState([]);
	const [replies, setReplies] = useState([]);
	const findUser = (id) => users.find((user) => user.user_id === id);
	useEffect(() => {
		(async function getData() {
			const response = await axios.get(
				'https://api.devask.hng.tech/questions/',
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			const fetchedQuestions = await response.data.data;

			setQuestions(fetchedQuestions);

			setUsers(await getUser());
			const fetchedReplies = fetchedQuestions.map(async (fetchedQuestion) =>
			getTotalReplies(fetchedQuestion.question_id)
		);

			Promise.all([...fetchedReplies].reverse()).then((reply) =>
				setReplies((prevState) => [...prevState, reply])
			);
		})();
	}, []);
	const formatDate = (date) =>
	new Intl.DateTimeFormat(navigator.language, {
		day: '2-digit',
		month: 'long',
		hour: 'numeric',
		minute: 'numeric',
	}).format(new Date(date));
	const tagType = [...questions].reverse().map((question, i) => (
	// return (
		<div>
			{isGridView ? (
			
				<div className={styles['tag-container']} key={question.question_id}>
					<div className={styles['profile-box']}>			
					<Link to={`/profile/${question.owner_id}`}>
						<img
							src="https://www.dropbox.com/s/bigbspbwyadigzj/Ellipse%201%20%281%29.svg?raw=1"
							alt=""
							className={styles.profilePicture}
						/>
					</Link>{' '}
						<h4 className={styles.user}>{findUser(question.owner_id)?.username}</h4>
					</div>

					<h2 className={styles['tag-title']}>{question.title}</h2>
					<p className={styles['tag-content']}>{question.content.slice(0, 200)}</p>

					<div className={`${styles['tag-details']}`}>
						<div className={`${styles.dev__flexitem} ${styles['tag-actions']}`}>
						<Link
							to={`/dashboard/questions/${question.question_id}`}
							style={{ textDecoration: 'none' }}
						>
							<span className={styles.viewReplies}>
								<img src={commenticon} alt="" />
								{replies[0] && replies[0][i]}
							</span>
						</Link>
							<img src={likeicon} alt="" /> <span>{question.total_like}</span>
						</div>

						<div className={styles.dev__flexitem}>
							<img src={clock} alt="" />
							<span className={styles.date}>{formatDate(question.created_at)}</span>
						</div>
					</div>
				</div> 
			) : (
				<div className={styles['tag-list-container']} key={question.question_id}>
					<div className={styles['profile-box']}>
					<Link to={`/profile/${question.owner_id}`}>
					<img
						src="https://www.dropbox.com/s/bigbspbwyadigzj/Ellipse%201%20%281%29.svg?raw=1"
						alt=""
						className={styles.profilePicture}
					/>
					</Link>{' '}
						<h4
							className={`${styles['user-name']} ${styles['user-name__alt']}`}
						>
							<h4 className={styles.user}>{findUser(question.owner_id)?.username}</h4>
						</h4>
					</div>
					<div className="text-content">
						<h4
							className={`${styles['user-name']} ${styles['user-name__main']}`}
						>
							<h4 className={styles.user}>{findUser(question.owner_id)?.username}</h4>
						</h4>
						<h2 className={styles['tag-title']}>{question.title}</h2>
						<p className={styles['tag-content']}>{question.content.slice(0, 120)}...</p>

						<div className={styles['tag-details']}>
							<div className={`${styles['tag-actions']}`}>
						<Link
							to={`/dashboard/questions/${question.question_id}`}
							style={{ textDecoration: 'none' }}
						>
							<span className={styles.viewReplies}>
								<img src={commenticon} alt="" />
								{replies[0] && replies[0][i]}
							</span>
						</Link>
						<div>
						<span className={styles.likes}>
							<img src={likeicon} alt="" /> {question.total_like}
						</span>
						{/* <img src={share} alt="" className={styles.share} /> */}
						</div>
							</div>

							<div className={styles.dev__flexitem}>
								<img src={clock} alt="" />
								<span className={styles.date}>{formatDate(question.created_at)}</span>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>))
	return <div className={`${styles.tag} ${!isGridView ? styles.list_tag : ''}`}>{tagType}</div>;
	
}

Tag.propTypes = {
	Data: PropTypes.shape({
		image: PropTypes.string,
		user: PropTypes.string,
		title: PropTypes.string,
		tweet: PropTypes.string,
		likes: PropTypes.string,
		comments: PropTypes.string,
		date: PropTypes.string,
	}).isRequired,
	isGridView: PropTypes.bool.isRequired,
};
