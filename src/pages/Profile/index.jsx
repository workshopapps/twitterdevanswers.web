import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import ProfileHeader from '../../components/ProfileHeader';
import UserActivities from '../../components/UserActivities';

const token = localStorage.getItem('token');
async function getTotalReplies(id) {
	const response = await axios.get(`https://api.devask.hng.tech/answer/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data.length;
}
async function getUser() {
	const response = await axios.get(`https://api.devask.hng.tech/users/`, {
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
				'https://api.devask.hng.tech/questions/',
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
	// console.log(findUser(9));

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
									<h4>{question.content.slice(0, 40)}</h4>
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

						<div className={styles.user}>
							<img
								src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
								alt="user avatar"
							/>
							<div className={styles.details}>
								<div>
									<h4>adebami_dev</h4>
									<p>@adebami_dev</p>
								</div>
								<p>Follows you</p>
							</div>
							<button type="button">Follow</button>
						</div>
						<div className={styles.user}>
							<img
								src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
								alt="user avatar"
							/>
							<div className={styles.details}>
								<div>
									<h4>adebami_dev</h4>
									<p>@adebami_dev</p>
								</div>
								<p>Follows you</p>
							</div>
							<button type="button">Follow</button>
						</div>
						<div className={styles.user}>
							<img
								src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
								alt="user avatar"
							/>
							<div className={styles.details}>
								<div>
									<h4>adebami_dev</h4>
									<p>@adebami_dev</p>
								</div>
								<p>Follows you</p>
							</div>
							<button type="button">Follow</button>
						</div>

						<p>See more</p>
					</div>
				</section>
			</aside>
		</div>
	);
}

export default Profile;
