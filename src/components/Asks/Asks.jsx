import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Asks.module.css';
import arrowLeft from '../../assets/arrowLeft.webp';
import prosper from '../../assets/prosper.webp';
import message from '../../assets/message.webp';
import heart from '../../assets/heart.webp';
import share from '../../assets/share.webp';
import options from '../../assets/options.webp';
import user from '../../assets/user.webp';
import questionPageData from './questionPageData';

function Asks() {
	const [reply, setReply] = useState({ text: '' });

	function handleReply(event) {
		setReply({
			...reply,
			[event.target.name]: event.target.value,
		});
	}

	const answers = questionPageData.map((answer) => (
		<div className={styles.cardContainer} key={answer.id}>
			<section className={styles.cardHeader}>
				<div>
					<img
						src={answer.profilePicture}
						alt=""
						className={styles.profilePicture}
					/>
					<div>
						<div className={styles.userInfo}>
							<h5 className={styles.askName}>{answer.askName}</h5>
							<p className={styles.userName}>{answer.userName}</p>
							<p className={styles.time}>{answer.time}</p>
						</div>
						<p className={styles.replying}>{answer.replying}</p>
					</div>
				</div>
				<img src={answer.options} alt="" className={styles.optionsReply} />
			</section>
			<h6 className={styles.reply}>{answer.reply}</h6>
			<section className={styles.cardFooter}>
				<div className={styles.replyPageIcons}>
					<img src={answer.viewReplies} alt="" />
					<img src={answer.likes} alt="" />
					<img src={answer.correct} alt="" />
					<img src={answer.share} alt="" className={styles.share} />
				</div>
			</section>
		</div>
	));

	return (
		<div className={styles.ask}>
			<Link to="/" className={styles.back}>
				<img src={arrowLeft} alt="" />
				<p>Go back</p>
			</Link>
			<section className={styles.header}>
				<div className={styles.aboutUser}>
					<img src={prosper} alt="" />
					<div>
						<h4 className={styles.askName}>Prosperoo</h4>
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
				<h4 className={styles.title}>
					{' '}
					Loop through csv files in folder and perform spatial intersect.
				</h4>
				<p className={styles.description}>
					Though I have seen similar questions here about looping through and
					performing operations on csv files within a directory, the code I have
					written for my particular case is not working. I have ~100 csv files
					in a directory, which are spatial datasets (all have identical columns
					including lat/lon coordinates and other data, but different number of
					rows). I am trying to clip each of them using a bounding box. Here is
					what I have so far:
				</p>
				<p className={styles.snippet}>
					Though I have seen similar questions here about looping through and
					performing operations on csv files within a directory, the code I have
					written for my particular case is not working. I have ~100 csv files
					in a directory, which are spatial datasets (all have identical columns
					including lat/lon coordinates and other data, but different number of
					rows). I am trying to clip each of them using a bounding box. Here is
					what I have so far: Thanks anyone out there who can see my mistake!
				</p>
				<p className={styles.description}>
					Thanks anyone out there who can see my mistake!
				</p>
			</section>
			<div className={styles.tagEdit}>
				<p className={styles.tag}>Python</p>
				<p className={styles.editMobile}>Edit</p>
			</div>
			<section className={styles.stats}>
				<p>
					<strong>15</strong> Replies
				</p>
				<p>
					<strong>30</strong> Likes
				</p>
			</section>
			<section className={styles.icons}>
				<img src={message} alt="" />
				<img src={heart} alt="" />
				<img src={share} alt="" />
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

export default Asks;
