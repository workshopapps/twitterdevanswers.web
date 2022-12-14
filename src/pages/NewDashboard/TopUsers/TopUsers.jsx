import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './topUsers.module.css';
import User from '../User/User';
import useMessenger, { ArrayHighestToLowest } from '../utils';

function TopUsers() {
	const [selectedUsers, setSelectedUsers] = useState(null);
	const { getUsers } = useMessenger();

	useEffect(() => {
		const fetchUsers = async () => {
			const result = await getUsers();
			const sortedUsers = ArrayHighestToLowest(result, 'followers');
			const topUsers = sortedUsers.slice(0, 3);
			setSelectedUsers(topUsers);
		};

		fetchUsers();
	}, []);

	return (
		selectedUsers && (
			<div className={styles.users}>
				<div className={styles.header}>
					<h3>Top Users to Follow</h3>{' '}
					<span>
						<Link to="/users-page">See more</Link>
					</span>
				</div>

				<div className={styles.list}>
					{selectedUsers.map((topUser) => (
						<User topUser={topUser} key={topUser.user_id} />
					))}
				</div>
			</div>
		)
	);
}

export default TopUsers;
