import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import avatar from '../../../assets/dashboard/user.png';
import useMessenger from '../utils';
import styles from './user.module.css';

function User({ topUser: { followers, username, image_url: imgUrl } }) {
	const { handleNavigate } = useMessenger();

	return (
		<div className={styles.user}>
			<div className={styles.info}>
				<div
					role="link"
					onKeyDown={() => {}}
					tabIndex={0}
					onClick={(event) => handleNavigate(event, `/profile/${username}`)}
				>
					<img
						src={imgUrl?.trim() === '' ? avatar : imgUrl}
						alt="user avatar"
					/>
				</div>
				<div className={styles.text}>
					<p className={styles.username}>
						<Link to={`/profile/${username}`}>{username}</Link>
					</p>
					<p className={styles.followers}>
						{followers} follower{followers > 1 ? 's' : null}
					</p>
				</div>
			</div>
			<button type="button" className={styles.btn}>
				Follow
			</button>
		</div>
	);
}

export default User;

User.propTypes = {
	topUser: PropTypes.shape({
		username: PropTypes.string.isRequired,
		user_id: PropTypes.number.isRequired,
		followers: PropTypes.number.isRequired,
		image_url: PropTypes.string.isRequired,
	}).isRequired,
};
