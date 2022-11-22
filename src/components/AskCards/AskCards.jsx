import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AskCards.module.css';
import askCardsData from './askCardsData';

function AskCards() {
	const askCard = askCardsData.map((askCardData) => (
		<div className={styles.cardContainer} key={askCardData.id}>
			<img
				src={askCardData.profilePicture}
				alt=""
				className={styles.profilePicture}
			/>
			<div>
				<section className={styles.cardHeader}>
					<div className={styles.userInfo}>
						<h5 className={styles.askName}>{askCardData.askName}</h5>
						<p className={styles.userName}>{askCardData.userName}</p>
						<p className={styles.time}>{askCardData.time}</p>
					</div>
					<img src={askCardData.options} alt="" className={styles.options} />
				</section>
				<h4>
					<Link to="/dashboard/QuestionPage" className={styles.question}>
						{askCardData.question}
					</Link>
				</h4>
				<h6 className={styles.reply}>{askCardData.reply}</h6>
				<p className={styles.tag}>{askCardData.tag}</p>
				<section className={styles.cardFooter}>
					<div className={styles.icons}>
						<span className={styles.viewReplies}>
							<img src={askCardData.viewReplies} alt="" /> 17
						</span>
						<span className={styles.likes}>
							<img src={askCardData.likes} alt="" /> 30
						</span>
						<img src={askCardData.share} alt="" className={styles.share} />
					</div>
					<span className={styles.reward}>
						<img src={askCardData.reward} alt="" /> 0.0025eth
					</span>
				</section>
			</div>
		</div>
	));

	return <div className={styles.cards}>{askCard}</div>;
}

export default AskCards;
