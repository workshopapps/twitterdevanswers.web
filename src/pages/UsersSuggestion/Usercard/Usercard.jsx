/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import avatar from '../../../assets/dashboard/user.png';
import styles from './usercard.module.css';

function Usercard({ user }) {
	return (
		<div className={styles.card}>
			<Link to={`/profile/`} className={styles.img}>
				<img
					src={user.image_url.trim() === '' ? avatar : user.image_url}
					alt="user avatar"
				/>
			</Link>
			<div className={styles.info}>
				<Link to={`/profile/`} className={styles.name}>
					{`${user.first_name} ${user.last_name}`}
				</Link>
				<Link to={`/profile/`} className={styles.username}>
					{user.username}
				</Link>
				<p className={styles.role}>Fullstack developer</p>
				<span className={styles.followers}>
					{user.followers} follower
					{user.followers > 1 || user.followers === 0 ? 's' : ''}
				</span>
			</div>
			<div className={styles.btn}>
				<div>
					<Button text="View Profile" bg="white" />
				</div>
				<div>
					<Button text="Follow" bg="purple" />
				</div>
			</div>
		</div>
	);
}

export default Usercard;

Usercard.propTypes = {
	user: PropTypes.shape({
		user_id: PropTypes.number,
		username: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		email: PropTypes.string,
		date_of_birth: PropTypes.string,
		gender: PropTypes.string,
		description: PropTypes.string,
		phone_number: PropTypes.string,
		work_experience: PropTypes.string,
		position: PropTypes.string,
		stack: PropTypes.string,
		links: PropTypes.arrayOf(PropTypes.string),
		role: PropTypes.string,
		image_url: PropTypes.string,
		location: PropTypes.string,
		is_admin: PropTypes.bool,
		account_balance: PropTypes.number,
		followers: PropTypes.number,
		following: PropTypes.number,
		date_joined: PropTypes.string,
	}).isRequired,
};

function Button({ text, bg }) {
	const classname = bg === 'white' ? 'white' : 'other';

	return (
		<button type="button" className={`${styles[classname]} ${styles.button} `}>
			{text}
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	bg: PropTypes.string.isRequired,
};
