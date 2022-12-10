/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { BsChatSquareDots, BsShare } from 'react-icons/bs';
import { ReactComponent as Heart } from '../heart.svg';
import styles from './postCard.module.css';

function PostCard({
	post: {
		imgUrl,
		fullName,
		username,
		timeStamp,
		title,
		text,
		img,
		tag,
		replies,
		likes,
		tokens,
	},
}) {
	return (
		<div className={styles.card}>
			<img className={styles.left} src={imgUrl} alt="user avatar" />
			<div className={styles.right}>
				<div className={styles.top}>
					<Link to="/users-page">{fullName}</Link> <span>@{username}</span>{' '}
					<span>{timeStamp}</span>
				</div>
				<h3>{title}</h3>
				<p>{text}</p>
				{img && <img src={img} className={styles.img} alt="post" />}
				{tag && <span className={styles.tag}>{tag}</span>}
				<div className={styles.bottom}>
					<div className={styles.left}>
						<div className={styles.replies}>
							<BsChatSquareDots className={styles.icon} />{' '}
							<span>{replies}</span>
						</div>
						<div className={styles.likes}>
							{/* <IoHeart/> */}
							<Heart className={styles.icon} style={{ fill: 'transparent' }} />
							<span>{likes}</span>
						</div>
						<div>
							<BsShare className={styles.icon} />
						</div>
					</div>
					{tokens && <div className={styles.right}>{tokens}Tokens</div>}
				</div>
			</div>{' '}
		</div>
	);
}

export default PostCard;

PostCard.propTypes = {
	post: PropTypes.shape({
		imgUrl: PropTypes.string.isRequired,
		fullName: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired,
		timeStamp: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
		tag: PropTypes.string.isRequired,
		replies: PropTypes.string.isRequired,
		likes: PropTypes.string.isRequired,
		tokens: PropTypes.string.isRequired,
	}).isRequired,
};
