import React from 'react';
// import Section1 from '../../components/Section1/index';
import styles from './index.module.css';
// import AskCards from './AskCards';
// import Reaction from '../../components/Reaction/Reaction';
import ProfileHeader from '../../components/ProfileHeader';
import UserActivities from '../../components/UserActivities';

function Profile() {
	return (
		<div className={styles.container}>
			<main className={styles.profile}>
				<ProfileHeader />
				<UserActivities />
				{/* <Reaction /> */}
				{/* <div className={styles.askcard}> */}
				{/* <AskCards /> */}
				{/* </div> */}
			</main>
			<aside className={styles.aside}>
				<section className={styles['relevant-topics']}>
					<h3 className={styles['heading-secondary']}>You might like</h3>

					<div className={styles.topics}>
						<div className={styles.topic}>Hello</div>
					</div>
				</section>
			</aside>
		</div>
	);
}

export default Profile;
