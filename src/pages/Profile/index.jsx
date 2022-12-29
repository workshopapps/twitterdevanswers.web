import React from 'react';
import styles from './index.module.css';
import ProfileHeader from '../../components/ProfileHeader';
import UserActivities from '../../components/UserActivities';
import TopUsers from '../NewDashboard/TopUsers/TopUsers';
import Yml from '../NewDashboard/Yml/Yml';

function Profile() {
	return (
		<div className={styles.container}>
			<main className={styles.profile}>
				<ProfileHeader />
				<UserActivities />
			</main>
			<aside className={styles.aside}>
				<section className={styles.components}>
					<TopUsers />
					<Yml />
				</section>
			</aside>
		</div>
	);
}

export default Profile;
