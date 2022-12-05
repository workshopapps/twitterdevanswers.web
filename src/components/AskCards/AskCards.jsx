import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './AskCards.module.css';
import options from '../../assets/dashboard-images/options.webp';
import message from '../../assets/dashboard-images/message.webp';
import heartBold from '../../assets/dashboard-images/heartBold.webp';
import share from '../../assets/dashboard-images/share.webp';
import dollarCircle from '../../assets/dashboard-images/dollarCircle.webp';

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

function AskCards() {
	const formatDate = (date) =>
		new Intl.DateTimeFormat(navigator.language, {
			day: '2-digit',
			month: 'long',
			hour: 'numeric',
			minute: 'numeric',
		}).format(new Date(date));

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
	
	const askCard = [...questions].reverse().map((question, i) => (
		<div className={styles.cardContainer} key={question.question_id}>
			<Link to={`/profile/${question.owner_id}`}>
				<img
					src="https://www.dropbox.com/s/bigbspbwyadigzj/Ellipse%201%20%281%29.svg?raw=1"
					alt=""
					className={styles.profilePicture}
				/>
			</Link>

			<div>
				<section className={styles.cardHeader}>
					<div className={styles.userInfo}>
						<Link
							to={`/profile/${question.owner_id}`}
							style={{ display: 'flex', textDecoration: 'none' }}
						>
							<h5 className={styles.askName}>
								{findUser(question.owner_id)?.username}
							</h5>
						</Link>

						<p className={styles.time}>{formatDate(question.created_at)}</p>
					</div>
					<img src={options} alt="" className={styles.options} />
				</section>

				<div>
					<h4 className={styles.title}>{question.title}</h4>
					<p className={styles.reply} style={{ lineHeight: '1.8' }}>
						{question.content}
					</p>
				</div>

				<section className={styles.cardFooter}>
					<div className={styles.icons}>
						<Link
							to={`/dashboard/questions/${question.question_id}`}
							style={{ textDecoration: 'none' }}
						>
							<span className={styles.viewReplies}>
								<img src={message} alt="" />
								{replies[0] && replies[0][i]}
							</span>
						</Link>
						<span className={styles.likes}>
							<img src={heartBold} alt="" /> {question.total_like}
						</span>
						<img src={share} alt="" className={styles.share} />
					</div>
					<span className={styles.reward}>
						<img src={dollarCircle} alt="" /> {question.payment_amount}token
					</span>
				</section>
			</div>
		</div>
	));

	return <div className={styles.cards}>{askCard}</div>;
}

export default AskCards;
