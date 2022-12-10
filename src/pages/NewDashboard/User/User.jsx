import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './user.module.css';

function User({ userInfo: { username, followers, imgUrl } }) {
	return (
		<div className={styles.user}>
			<div className={styles.info}>
				<img src={imgUrl} alt="user avatar" />
				<div className={styles.text}>
					<p className={styles.username}>
						<Link to="/user">{username}</Link>
					</p>
					<p className={styles.followers}>{followers} followers</p>
				</div>
			</div>
			<div className={styles.btn}>Follow</div>
		</div>
	);
}

export default User;

User.propTypes = {
	userInfo: PropTypes.shape({
		username: PropTypes.string.isRequired,
		followers: PropTypes.string.isRequired,
		imgUrl: PropTypes.string.isRequired,
	}).isRequired,
};
