import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import likeicon from '../../assets/tag-images/Vector.png';
import commenticon from '../../assets/tag-images/message.png';
import clock from '../../assets/tag-images/clock.png';
import styles from './Tag.module.css';

export default function Tag({ Data, isGridView, users, replies, index }) {

const findUser = (id) => users.find((user) => user.user_id === id);
	
	const formatDate = (date) =>
	new Intl.DateTimeFormat(navigator.language, {
		day: '2-digit',
		month: 'long',
		hour: 'numeric',
		minute: 'numeric',
	}).format(new Date(date));

	const tagType = (
		<div>
			{isGridView ? (
				<div className={styles['tag-container']} key={Data.question_id}>


					<h2 className={styles['tag-title']}>{Data.title}</h2>
					<p className={styles['tag-content']}>{Data.content.slice(0, 200)}</p>

					<div className={`${styles['tag-details']}`}>
						<div className={`${styles.dev__flexitem} ${styles['tag-actions']}`}>
							<Link
								to={`/dashboard/questions/${Data.question_id}`}
								style={{ textDecoration: 'none' }}
							>
								<span className={styles.viewReplies}>
									<img src={commenticon} alt="" />
									{replies[0] && replies[0][index]}
								</span>
							</Link>
							<img src={likeicon} alt="" /> <span>{Data.total_like}</span>
						</div>

						{/*  */}
					</div>
					<div className={styles['profile-box1']}>
										<div className={styles['profile-nameimage']}>

						<Link to={`/profile/${Data.owner_id}`}>
							<img
								src="https://www.dropbox.com/s/bigbspbwyadigzj/Ellipse%201%20%281%29.svg?raw=1"
								alt=""
								className={styles.profilePicture}
							/>
						</Link>{' '}
						<h4 className={styles.user}>{findUser(Data.owner_id)?.username}</h4>
						</div>
						<div className={styles.dev__flexitem}>
							<img src={clock} alt="" />
							<span className={styles.date}>{formatDate(Data.created_at)}</span>
						</div>
					</div>
				</div>
			) : (
				<div className={styles['tag-list-container']} key={Data.question_id}>
					<div className={styles['profile-box']}>
						{/* <Link to={`/profile/${Data.owner_id}`}>
							<img
								src="https://www.dropbox.com/s/bigbspbwyadigzj/Ellipse%201%20%281%29.svg?raw=1"
								alt=""
								className={styles.profilePicture}
							/>
						</Link>{' '} */}
						<h4
							className={`${styles['user-name']} ${styles['user-name__alt']}`}
						>
							<h4 className={styles.user}>
								{findUser(Data.owner_id)?.username}
							</h4>
						</h4>
					</div>
					<div className="text-content">
						<h4
							className={`${styles['user-name']} ${styles['user-name__main']}`}
						>
							<h4 className={styles.user}>
								{findUser(Data.owner_id)?.username}
							</h4>
						</h4>
						<h2 className={styles['tag-title']}>{Data.title}</h2>
						<p className={styles['tag-content']}>
							{Data.content.slice(0, 120)}...
						</p>

						<div className={styles['tag-details']}>
							<div className={`${styles['tag-actions']}`}>
								<Link
									to={`/dashboard/questions/${Data.question_id}`}
									style={{ textDecoration: 'none' }}
								>
									<span className={styles.viewReplies}>
										<img src={commenticon} alt="" />
										{replies[0] && replies[0][index]}
									</span>
								</Link>
								<div>
									<span className={styles.likes}>
										<img src={likeicon} alt="" /> {Data.total_like}
									</span>
									{/* <img src={share} alt="" className={styles.share} /> */}
								</div>
							</div>

							<div className={styles.dev__flexitem}>
								<img src={clock} alt="" />
								<span className={styles.date}>
									{formatDate(Data.created_at)}
								</span>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);

	return <div className={`${styles.tag} ${!isGridView ? styles.list_tag : ''}`}>{tagType}</div>;
	
}

Tag.propTypes = {
	Data: PropTypes.shape({
		image: PropTypes.string,
		user: PropTypes.string,
		title: PropTypes.string,
		tweet: PropTypes.string,
		likes: PropTypes.string,
		comments: PropTypes.string,
		date: PropTypes.string,
		question_id: PropTypes.number,
		created_at: PropTypes.string,
		owner_id: PropTypes.number,
		total_like: PropTypes.number,
		content: PropTypes.string,
	}).isRequired,
	isGridView: PropTypes.bool.isRequired,
	users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	replies: PropTypes.number.isRequired,
	index: PropTypes.number.isRequired
};
