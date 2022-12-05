import { React, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../pages/UserPage/userPage.module.css';

function UserProfileCard({ user }) {
    const [follow, setFollow] = useState(false)
    const followHandler = () => {
		setFollow(!follow);
	}

	return (
		<div className={styles.user_profile_card}>
			<img src={user.image_url === " " ? 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' : user.image_url} alt="" className={styles.user_profile_image} />

			<section className={styles.user_info_container}>
				<section>
					<p className={styles.user_name}> {user.username}</p>
					<p className={styles.user_stack}>{user.work_experience}</p>
				</section>

				<span className={styles.user_extra_info}>
					<p className={styles.user_followers}>followers</p>

					<p className={styles.user_favorite_language}>
						{user.stack}
					</p>
				</span>	
				<div className = {styles.user_follow_info}>
				<button className = {styles.follow_button} onClick = {followHandler} type = 'button'>{follow ? 'unfollow' : 'follow'}</button>
				<p className = {styles.follow_text}>{follow ? 'following' : ''}</p>
				</div>			
			</section>			
		</div>
	);
}
UserProfileCard.propTypes = {
	user:
	    PropTypes.shape({
		image_url: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired,
		work_experience: PropTypes.string.isRequired,
		stack: PropTypes.string.isRequired,
	}).isRequired,
};

export default UserProfileCard;
