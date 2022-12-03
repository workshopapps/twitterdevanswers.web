import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from './AskCards.module.css';
import { AppContext } from '../../store/AppContext';

import testQuestions from '../../utils/testQuestions.json';
import options from '../../assets/dashboard-images/options.webp';
import message from '../../assets/dashboard-images/message.webp';
import heartBold from '../../assets/dashboard-images/heartBold.webp';
import share from '../../assets/dashboard-images/share.webp';
import dollarCircle from '../../assets/dashboard-images/dollarCircle.webp';

function AskCards() {

	const {
		state: { user: userInformation },
	} = useContext(AppContext);
	console.log(userInformation);
	const askCard = testQuestions.map((question) => (
		<div className={styles.cardContainer} key={question.id}>
			<Link to={`/profile/${question.id}`}>
				<img
					src={`${question.user.profile_image_url_https}`}
					alt=""
					className={styles.profilePicture}
				/>
			</Link>

			<div>
				<section className={styles.cardHeader}>
					<div className={styles.userInfo}>
						<Link
							to={`/profile/${question.id}`}
							style={{ display: 'flex', textDecoration: 'none' }}
						>
							<h5 className={styles.askName}>{question.user.name}</h5>
							<p className={styles.userName}>{question.user.screen_name}</p>
						</Link>

						<p className={styles.time}>36 secs</p>
					</div>
					<img src={options} alt="" className={styles.options} />
				</section>

				<Link
					to={`/dashboard/questions/${question.id}`}
					style={{ textDecoration: 'none' }}
				>
					<h4 className={styles.title}> {question.title}</h4>
					<p className={styles.reply} style={{ lineHeight: '1.8' }}>
						{question.detail}
					</p>
				</Link>

				<div className={styles.tagWrapper}>
					{question.tags.map((tag) => (
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
						<img src={dollarCircle} alt="" /> {userInformation?.wallet.balance}
						eth
					</span>
				</section>
			</div>
		</div>
	));

	return <div className={styles.cards}>{askCard}</div>;
}

export default AskCards;
