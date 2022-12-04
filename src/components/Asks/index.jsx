import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Asks.module.css';
import arrowLeft from '../../assets/arrowLeft.webp';
import message from '../../assets/message.webp';
import heart from '../../assets/heart.webp';
import share from '../../assets/share.webp';
import options from '../../assets/options.webp';
import user from '../../assets/user.webp';
import mugiwara from '../../assets/mugiwara.webp';
import testQuestions from '../../utils/testQuestions.json';
import Modal from '../Modal/Modal';

function Asks({ onClose, show, hide, showShare }) {
	const paramValues = useParams();
	const [reply, setReply] = useState({ text: '' });

	function handleReply(event) {
		setReply({
			...reply,
			[event.target.name]: event.target.value,
		});
	}

	const selectQuestion = testQuestions.find(
		(question) => question.id_str === paramValues.id
	);

	const answers = testQuestions
		.find((question) => paramValues.id === question.id_str)
		.comments.map((comment) => (
			<div className={styles.cardContainer} key={comment.id}>
				<section className={styles.cardHeader}>
					<div>
						<img src={mugiwara} alt="" className={styles.profilePicture} />\
						<div>
							<div className={styles.userInfo}>
								<h5 className={styles.askName}>
									{comment.name.slice(0, 1).toUpperCase()}0{' '}
									{comment.name.slice(1, 30)}
								</h5>
								<p className={styles.userName}>{comment.email}</p>
								<p className={styles.time}>1hr</p>
							</div>
							<p className={styles.replying}>
								replying to {selectQuestion.user.name}
							</p>
						</div>
					</div>
					{/* <img src={answer.options} alt="" className={styles.optionsReply} /> */}
				</section>
				<h6 className={styles.reply}>{comment.body}</h6>
				<section className={styles.cardFooter}>
					{/* <div className={styles.replyPageIcons}>
					<img src={answer.viewReplies} alt="" />
					<img src={answer.likes} alt="" />
					<img src={answer.correct} alt="" />
					<img src={answer.share} alt="" className={styles.share} />
				</div> */}
				</section>
			</div>
		));

	return (
		<div className={styles.ask}>
			<Link to="/dashboard" className={styles.back}>
				<img src={arrowLeft} alt="" />
				<p>Go back</p>
			</Link>
			<section className={styles.header}>
				<div className={styles.aboutUser}>
					<img
						src={`${selectQuestion.user.profile_image_url_https}`}
						alt="Profile Avatar"
					/>
					<div>
						<h4 className={styles.askName}>{selectQuestion.user.name}</h4>
						<div className={styles.timeDate}>
							<p>11:03</p>
							<p>10 Nov 22</p>
						</div>
					</div>
				</div>
				<p className={styles.edit}>Edit</p>
				<img src={options} alt="" className={styles.options} />
			</section>
			<section className={styles.question}>
				<h4 className={styles.title}> {selectQuestion.title}</h4>
				<p className={styles.description}>{selectQuestion.detail}</p>
				<p className={styles.snippet}>{selectQuestion.description}</p>
				<p className={styles.description}>
					Thanks anyone out there who can see my mistake!
				</p>
			</section>
			<div className={styles.tagEdit}>
				<div className={styles.tagWrapper}>
					{selectQuestion.tags.map((tag) => (
						<Link
							to="/tags-page"
							style={{ textDecoration: 'none', display: 'flex', width: '100%' }}
							key={tag}
						>
							<p className={styles.tag}>{tag}</p>
						</Link>
					))}
				</div>

				<p className={styles.editMobile}>Edit</p>
			</div>
			<section className={styles.stats}>
				<p>
					<strong>15</strong> Replies
				</p>
				<p>
					<strong>{selectQuestion.likes_count}</strong> Likes
				</p>
			</section>
			<section className={styles.icons}>
				<img src={message} alt="" />
				<img src={heart} alt="" />
				<Modal onClose={onClose} show={show} hide={hide} />
				<button type="button" onClick={showShare}>
					<img src={share} alt="" />
				</button>
			</section>
			<section className={styles.typeReply}>
				<img src={user} alt="" />
				<textarea
					name="text"
					value={reply.text}
					onChange={handleReply}
					placeholder="Type your reply"
					className={styles.writeReply}
					rows={2}
				/>
				<button type="button">Post Reply</button>
			</section>
			<div className={styles.answers}>{answers}</div>
		</div>
	);
}

Asks.propTypes = {
	onClose: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	hide: PropTypes.func.isRequired,
	showShare: PropTypes.func.isRequired,
};

export default Asks;
