import React from 'react';
import { PropTypes } from 'prop-types';
import { FaEllipsisV } from 'react-icons/fa';
import { BsChatSquareDots, BsShare } from 'react-icons/bs';
import { ReactComponent as Heart } from '../heart.svg';
import styles from './replyCard.module.css';

function ReplyCard({
	reply: { fullName, username, text, imgUrl, replyingTo, timeStamp },
}) {
	return (
		<div className={styles.replyCard}>
			<div className={styles.infos}>
				<div className={styles.data}>
					<div className={styles.img}>
						<img src={imgUrl} alt="user avatar" />
					</div>
					<div className={styles.info}>
						<div className={styles.names}>
							<span>{fullName}</span>
							<span className={styles.grayText}>@{username}</span>
							<span className={styles.grayText}>.</span>
							<span className={styles.grayText}>{timeStamp}</span>
						</div>
						<div className={styles.replyingTo}>Replying to @{replyingTo}</div>
					</div>
				</div>
				<div>
					<FaEllipsisV />
				</div>
			</div>
			<div className={styles.text}>{text}</div>
			<div className={styles.icons}>
				<div className={styles.reply}>
					<BsChatSquareDots className={styles.icon} />
				</div>
				<div className={styles.likes}>
					{/* <IoHeart/> */}
					<Heart className={styles.icon} style={{ fill: 'transparent' }} />
				</div>
				<div className={styles.checkbox}>
					<input type="checkbox" id="check" />
				</div>
				<div>
					<BsShare className={styles.icon} />
				</div>
			</div>
		</div>
	);
}

export default ReplyCard;
ReplyCard.propTypes = {
	reply: PropTypes.shape({
		imgUrl: PropTypes.string.isRequired,
		fullName: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired,
		timeStamp: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		replyingTo: PropTypes.string.isRequired,
	}).isRequired,
};
