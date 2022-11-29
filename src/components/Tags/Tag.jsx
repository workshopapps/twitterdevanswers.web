import React from 'react';
import PropTypes from 'prop-types';
import likeicon from '../../assets/Vector.png';
import commenticon from '../../assets/message.png';
import clock from '../../assets/clock.png';

import styles from './Tag.module.css';

export default function Tag({ Data, isGridView }) {
	const { image, user, title, tweet, likes, comments, date } = Data;

	return (
		<div className={`${styles.tag} ${!isGridView ? styles.list_tag : ''}`}>
			{isGridView ? (
				<div className={styles['tag-container']}>
					<div className={styles['profile-box']}>
						<img src={image} alt="profile-img" className={styles['user-img']} />{' '}
						<h4 className={styles.user}>{user}</h4>
					</div>

					<h2 className={styles['tag-title']}>{title}</h2>
					<p className={styles['tag-content']}>{tweet.slice(0, 200)}</p>

					<div className={`${styles['tag-details']}`}>
						<div className={`${styles.dev__flexitem} ${styles['tag-actions']}`}>
							<img src={commenticon} alt="" /> <span>{comments}</span>
							<img src={likeicon} alt="" /> <span>{likes}</span>
						</div>

						<div className={styles.dev__flexitem}>
							<img src={clock} alt="" />
							<span className={styles.date}>{date}</span>
						</div>
					</div>
				</div>
			) : (
				<div className={styles['tag-list-container']}>
					<div className={styles['profile-box']}>
						<img className={styles['user-img']} src={image} alt="profile-img" />
						<h4
							className={`${styles['user-name']} ${styles['user-name__alt']}`}
						>
							{user}
						</h4>
					</div>
					<div className="text-content">
						<h4
							className={`${styles['user-name']} ${styles['user-name__main']}`}
						>
							{user}
						</h4>
						<h2 className={styles['tag-title']}>{title}</h2>
						<p className={styles['tag-content']}>{tweet.slice(0, 120)}...</p>

						<div className={styles['tag-details']}>
							<div className={`${styles['tag-actions']}`}>
								<div>
									<img src={commenticon} alt="icons" /> <span>{comments}</span>
								</div>
								<div>
									<img src={likeicon} alt="icons" /> <span>{likes}</span>
								</div>
							</div>

							<div className={styles.dev__flexitem}>
								<img src={clock} alt="" />
								<span className={styles.date}>{date}</span>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
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
	}).isRequired,
	isGridView: PropTypes.bool.isRequired,
};
