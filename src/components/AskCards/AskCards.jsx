import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './AskCards.module.css';
import testQuestions from '../../utils/testQuestions.json';
import options from '../../assets/options.webp';
import message from '../../assets/message.webp';
import heartBold from '../../assets/heartBold.webp';
import share from '../../assets/share.webp';
import dollarCircle from '../../assets/dollarCircle.webp';
import Modal from '../Modal/Modal';

function AskCards({ onClose, show, hide, showShare }) {
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
						<Modal onClose={onClose} show={show} hide={hide} />
						<button type="button" onClick={showShare}>
							<img src={share} alt="" />
						</button>
					</div>
					<span className={styles.reward}>
						<img src={dollarCircle} alt="" /> 0.0025eth
					</span>
				</section>
			</div>
		</div>
	));

	return <div className={styles.cards}>{askCard}</div>;
}

AskCards.propTypes = {
	onClose: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	hide: PropTypes.func.isRequired,
	showShare: PropTypes.func.isRequired,
};

export default AskCards;
