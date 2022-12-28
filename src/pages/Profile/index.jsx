import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import ProfileHeader from '../../components/ProfileHeader';
import UserActivities from '../../components/UserActivities';

const token = localStorage.getItem('token');
async function getTotalReplies(id) {
	const response = await axios.get(`https://api.devask.tech/answer/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data.length;
}
async function getUser() {
	const response = await axios.get(`https://api.devask.tech/users/`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data.data;
}
function Profile() {
	const [questions, setQuestions] = useState([]);
	const [replies, setReplies] = useState([]);
	const [users, setUsers] = useState([]);
	const findUser = (id) => users.find((user) => user.user_id === id);
	useEffect(() => {
		(async function getData() {
			const response = await axios.get(
				'https://api.devask.tech/questions/',
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			const fetchedQuestions = await response.data.data;

			setQuestions([...fetchedQuestions].reverse().slice(0, 5));

			setUsers(await getUser());
			const fetchedReplies = fetchedQuestions.map(async (fetchedQuestion) =>
				getTotalReplies(fetchedQuestion.question_id)
			);

			Promise.all([...fetchedReplies].reverse()).then((reply) =>
				setReplies((prevState) => [...prevState, reply])
			);
		})();
	}, []);

	return (
		<div className={styles.container}>
			<main className={styles.profile}>
				<ProfileHeader />
				<UserActivities />
			</main>
			<aside className={styles.aside}>
				<section className={styles['relevant-topics']}>
					{/* Topics suggestions */}
					<div className={`${styles.topics} ${styles['aside-container']}`}>
						<h3 className={styles['heading-secondary']}>You might like</h3>
						{questions.map((question, i) => (
							<div key={question.question_id} className={styles.topic}>
								<Link to={`/profile/${findUser(question.owner_id)?.username}`}>
									<img
										src={
											findUser(question.owner_id)?.image_url?.trim()
												? findUser(question.owner_id)?.image_url
												: 'https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png'
										}
										alt=""
										className={styles.profilePicture}
									/>
								</Link>

								<div className={styles.content}>
									<Link
										to={`/question-page/${question.question_id}`}
										style={{ textDecoration: 'none' }}
									>
										<h4>{question.content.slice(0, 40)}</h4>
									</Link>
									<p>
										{replies[0] && replies[0][i]}{' '}
										{replies[0] && replies[0][i] === 1 ? 'Reply' : 'Replies'}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* Accounts suggestions */}
					<div className={`${styles.users} ${styles['aside-container']}`}>
						<h3 className={styles['heading-secondary']}>You might follow</h3>
						{[...users].slice(0, 3).map((user) => (
							<div key={user.user_id} className={styles.user}>
								<Link to={`/profile/${user?.username}`}>
									<img
										src={
											user?.image_url?.trim()
												? user.image_url
												: 'https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png'
										}
										alt=""
										className={styles.profilePicture}
									/>
								</Link>
								<div className={styles.details}>
									<div>
										<h4>{user.username}</h4>
										<p>@{user.username}</p>
									</div>
									{/* <p>Follows you</p> */}
								</div>
								<button type="button">Follow</button>
							</div>
						))}

						<Link to="/users-page">See more</Link>
					</div>
				</section>
			</aside>
		</div>
	);
}

export default Profile;
