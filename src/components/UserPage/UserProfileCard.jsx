import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../pages/UserPage/userPage.module.css';

function UserProfileCard({ user }) {
	const { img, userName, userStack, followers, userFavoriteLanguage } = user;

	return (
		<div className={styles.user_profile_card}>
			<img src={img} alt="" className={styles.user_profile_image} />

			<section className={styles.user_info_container}>
				<section>
					<p className={styles.user_name}> {userName}</p>
					<p className={styles.user_stack}>{userStack}</p>
				</section>

				<span className={styles.user_extra_info}>
					<p className={styles.user_followers}>{followers}</p>

					<p className={styles.user_favorite_language}>
						{userFavoriteLanguage}
					</p>
				</span>
			</section>
		</div>
	);
}
UserProfileCard.propTypes = {
	user: PropTypes.shape({
		img: PropTypes.string.isRequired,
		userName: PropTypes.string.isRequired,
		userStack: PropTypes.string.isRequired,
		followers: PropTypes.string.isRequired,
		userFavoriteLanguage: PropTypes.string.isRequired,
	}).isRequired,
};

export default UserProfileCard;
