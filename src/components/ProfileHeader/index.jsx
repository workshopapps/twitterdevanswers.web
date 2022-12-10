import React from 'react';
import styles from './styles.module.css';
import avatar from '../../assets/profile-images/avatar.png';
import calendarIcon from '../../assets/profile-images/calendar.png';

function ProfileHeader() {
	return (
		<header className={styles.header}>
			<img src={avatar} alt="user-avatar" className="user-img" />
			<div className={styles['header-textbox']}>
				<h2 className={styles.fullname}>Ayodele Emmanuel</h2>
				<p className={styles.username}>@ayemma_dev</p>
				<p className={styles.about}>End to end Web Developer</p>

				<div className={styles['header-misc']}>
					<p>
						<img src={calendarIcon} alt="" />
					</p>
				</div>
			</div>
		</header>
	);
}

export default ProfileHeader;
