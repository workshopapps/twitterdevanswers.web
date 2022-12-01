/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './AskCards.module.css';
import testQuestions from '../../utils/testQuestions.json';
import options from '../../assets/dashboard-images/options.webp';
import message from '../../assets/dashboard-images/message.webp';
import heartBold from '../../assets/dashboard-images/heartBold.webp';
import share from '../../assets/dashboard-images/share.webp';
import dollarCircle from '../../assets/dashboard-images/dollarCircle.webp';

async function getUser(userId) {
	const response = await axios.get(
		`https://pacific-peak-54505.herokuapp.com/users/${userId}`,
		{
			headers: {
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0QHRlc3QuY29tIiwiZXhwIjoxNjY5OTA4MDI0fQ.X5jhPcD0Ir3TbZ0vBuEcuFn3cA03arB6oH4TB90Syto',
			},
		}
	);
	return response.data.data;
}

function AskCards() {
	const formatDate = (date) =>
		new Intl.DateTimeFormat(navigator.language, {
			day: '2-digit',
			month: 'long',
		}).format(new Date(date));

	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		(async function getData() {
			const response = await axios.get(
				'https://pacific-peak-54505.herokuapp.com/questions/',
				{
					headers: {
						Authorization:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0QHRlc3QuY29tIiwiZXhwIjoxNjY5OTA4MDI0fQ.X5jhPcD0Ir3TbZ0vBuEcuFn3cA03arB6oH4TB90Syto',
					},
				}
			);

			const fetchedQuestions = await response.data.data;

			setQuestions(fetchedQuestions);
		})();
	}, []);

	const askCard =
		questions.length > 0
			? questions.map((question, i) => (
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
											{question.user?.first_name} {question.user?.last_name}
											{question.user}
										</h5>
										<p className={styles.userName}>{question.user?.username}</p>
									</Link>

									<p className={styles.time}>
										{formatDate(question.created_at)}
									</p>
								</div>
								<img src={options} alt="" className={styles.options} />
							</section>

							<Link
								to={`/dashboard/questions/${question.question_id}`}
								style={{ textDecoration: 'none' }}
							>
								<h4 className={styles.title}>{question.content}</h4>
								{/* <p className={styles.reply} style={{ lineHeight: '1.8' }}>
						{question.detail}
					</p> */}
							</Link>

							<div className={styles.tagWrapper}>
								{testQuestions[i].tags.map((tag) => (
									<Link
										to="/tags-page"
										style={{ textDecoration: 'none', display: 'flex' }}
									>
										<p className={styles.tag} key={tag}>
											{tag}
										</p>
									</Link>
								))}
							</div>

							<section className={styles.cardFooter}>
								<div className={styles.icons}>
									<span className={styles.viewReplies}>
										<img src={message} alt="" /> 17
									</span>
									<span className={styles.likes}>
										<img src={heartBold} alt="" /> 30
									</span>
									<img src={share} alt="" className={styles.share} />
								</div>
								<span className={styles.reward}>
									<img src={dollarCircle} alt="" /> 0.0025eth
								</span>
							</section>
						</div>
					</div>
			  ))
			: 'loading';

	return <div className={styles.cards}>{askCard}</div>;
}

export default AskCards;
