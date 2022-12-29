import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import styles from './AskCards.module.css';
import options from '../../assets/dashboard-images/options.webp';
import message from '../../assets/dashboard-images/message.webp';
import heartBold from '../../assets/dashboard-images/heartBold.webp';
import share from '../../assets/dashboard-images/share.webp';
import dollarCircle from '../../assets/dashboard-images/dollarCircle.webp';

const token = localStorage.getItem('token');
async function getUser() {
	const response = await axios.get(`https://api.devask.tech/users/`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data.data;
}
function AskCards() {
	const { pathname } = useLocation();
	const thisuser = pathname.slice(9);
	const formatDate = (date) =>
		new Intl.DateTimeFormat(navigator.language, {
			day: '2-digit',
			month: 'long',
		}).format(new Date(date));
	const [questions, setQuestions] = useState([]);
	const [users, setUsers] = useState([]);
	const findUser = (id) => users.find((user) => user.user_id === id);
	useEffect(() => {
		(async function getData() {
			const userIdResponse = await axios.get(
				`https://api.devask.tech/users/${thisuser}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			const userIdData = await userIdResponse.data.data.user_id;
			const response = await axios.get(
				`https://api.devask.tech/questions/${userIdData}/user`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			const fetchedQuestions = await response.data.data;
			setQuestions(fetchedQuestions);
			setUsers(await getUser());
		})();
	}, []);
	const askCard = questions.reverse().map((question) => (
		<div className={styles.cardContainer} key={question.question_id}>
			<Link to={`/profile/${question.owner_id}`}>
				<img
					src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
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
				<Link
					to={`/dashboard/questions/${question.question_id}`}
					style={{ textDecoration: 'none' }}
				>
					<h4 className={styles.title}>{question.title}</h4>
					<p className={styles.reply} style={{ lineHeight: '1.8' }}>
						{question.content}
					</p>
				</Link>
				<section className={styles.cardFooter}>
					<div className={styles.icons}>
						<span className={styles.viewReplies}>
							<img src={message} alt="" />
							{'17 '}
						</span>
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
