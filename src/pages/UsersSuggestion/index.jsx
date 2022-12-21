import React, { useEffect, useState } from 'react';
import useMessenger from '../NewDashboard/utils';
import Usercard from './Usercard/Usercard';
import CardSkeleton from './Skeleton/CardSkeleton';
import styles from './styles.module.css';
import Tags from '../NewDashboard/Tags/Tags';
import Yml from '../NewDashboard/Yml/Yml';

function UsersSuggestion() {
	const [users, setUsers] = useState([]);
	const [loadingUsers, setLoadingUsers] = useState(false);
	const { getUsers } = useMessenger();

	useEffect(() => {
		const fetchUsers = async () => {
			setLoadingUsers(true);
			const response = await getUsers();
			setUsers(response);
			setLoadingUsers(false);
		};

		fetchUsers();
	}, []);

	const incrementFollowersLocally = (id) => {
		const tempUsers = [...users];
		const userIndex = tempUsers.findIndex((user) => user.user_id === id);
		tempUsers[userIndex].followers += 1;
		setUsers(tempUsers);
	};

	const decrementFollowersLocally = (id) => {
		const tempUsers = [...users];
		const userIndex = tempUsers.findIndex((user) => user.user_id === id);
		tempUsers[userIndex].followers -= 1;
		setUsers(tempUsers);
	};

	return (
		<section className={styles.suggestions}>
			<div className={styles.heading}>
				<h2>Connect with other DevAsk users</h2>
			</div>
			<div className={`${styles.container} lpContainer`}>
				<div className={styles.usersContainer}>
					<div className={styles.users}>
						{loadingUsers && <CardSkeleton cards={8} />}
						{users.map((user) => (
							<Usercard
								user={user}
								key={user.user_id}
								incrementFollowersLocally={incrementFollowersLocally}
								decrementFollowersLocally={decrementFollowersLocally}
							/>
						))}
					</div>
				</div>
				<aside className={styles.aside}>
					<div className={styles.components}>
						<Yml />
						<Tags />
					</div>
				</aside>
			</div>
		</section>
	);
}

export default UsersSuggestion;
