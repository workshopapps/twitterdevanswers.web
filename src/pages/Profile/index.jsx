import React from 'react';
// import Section1 from '../../components/Section1/index';
import styles from './index.module.css';
// import AskCards from './AskCards';
// import Reaction from '../../components/Reaction/Reaction';
import ProfileHeader from '../../components/ProfileHeader';

function Profile() {
	return (
		<div className={styles.container}>
			<main className={styles.profile}>
				<ProfileHeader />
				{/* <Reaction /> */}
				{/* <div className={styles.askcard}><AskCards /></div> */}
			</main>
			<aside className={styles.aside}>hello</aside>
		</div>
	);
}

export default Profile;
