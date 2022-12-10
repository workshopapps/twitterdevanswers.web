import React from 'react';
import { Link } from 'react-router-dom';
import styles from './topUsers.module.css';
import User from '../User/User';

const data = [
	{
		username: 'MaskedFace',
		followers: '25k',
		imgUrl: './assets/userPageAssets/Ellipse0.png',
	},
	{
		username: 'CodedLibra',
		followers: '45k',
		imgUrl: './assets/userPageAssets/Ellipse0.png',
	},
	{
		username: 'CyberGenie',
		followers: '13k',
		imgUrl: './assets/userPageAssets/Ellipse0.png',
	},
];

function TopUsers() {
	return (
		<div className={styles.users}>
			<div className={styles.header}>
				<h3>Top Users to Follow</h3>{' '}
				<span>
					<Link to="/users-page">See more</Link>
				</span>
			</div>

			<div className={styles.list}>
				{data.map((user) => (
					<User userInfo={user} key={user.username} />
				))}
			</div>
		</div>
	);
}

export default TopUsers;
