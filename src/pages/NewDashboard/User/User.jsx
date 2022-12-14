import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import avatar from '../../../assets/dashboard/user.png';
import styles from './user.module.css';

function User({ topUser: { followers, username, image_url: imgUrl } }) {
	return (
		<div className={styles.user}>
			<div className={styles.info}>
				<img src={imgUrl?.trim() === '' ? avatar : imgUrl} alt="user avatar" />
				<div className={styles.text}>
					<p className={styles.username}>
						<Link to={`/users-page/${username}`}>{username}</Link>
					</p>
					<p className={styles.followers}>
						{followers} follower{followers > 1 ? 's' : null}
					</p>
				</div>
			</div>
			<div className={styles.btn}>Follow</div>
		</div>
	);
}

export default User;

User.propTypes = {
	topUser: PropTypes.shape({
		username: PropTypes.string.isRequired,
		followers: PropTypes.number.isRequired,
		image_url: PropTypes.string.isRequired,
	}).isRequired,
};
