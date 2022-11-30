/* eslint-disable camelcase */
import React from 'react';
// import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Section1 from './section1.module.css';
import link from '../../assets/profile-images/link-2.png';
import locationIcon from '../../assets/profile-images/location.png';
import twitter from '../../assets/profile-images/twitter.png';
import github from '../../assets/profile-images/github.png';
import profilepic from '../../assets/profile-images/framepics.png';
import calendarIcon from '../../assets/profile-images/calendar.png';

function ProfileTopSection({ user }) {
	const {
		name,
		screen_name,
		location,
		description,
		url,
		// profile_image_url_https,
	} = user;

	// const navigate = useNavigate();
	return (
		<div className={Section1.profile__datawrapper}>
			<div className={Section1.profile__datatxt}>
				<div className={Section1.profile__imagewrapper}>
					<img
						// src={`${profile_image_url_https}`}
						src={profilepic}
						alt=""
						className={Section1.profile__image}
					/>
				</div>
				<div className={Section1.profile__info}>
					<div className={Section1.profile__name}>{name}</div>
					<div className={Section1.profile__username}>@{screen_name}</div>
					<div className={Section1.profile__status}>{description}</div>
				</div>
				<div className={Section1.profile__address}>
					<div className={Section1.profile__datejoined}>
						<div className={Section1.profile__iconwrapper}>
							<img
								src={calendarIcon}
								alt=""
								className={Section1.profile__icon}
							/>
						</div>{' '}
						Joined spetember 2019
					</div>
					<div className={Section1.profile__location}>
						<div className={Section1.profile__iconwrapper}>
							<img
								src={locationIcon}
								alt=""
								className={Section1.profile__icon}
							/>
						</div>{' '}
						{location}
					</div>
					<div className={Section1.profile__link}>
						<div className={Section1.profile__iconwrapper}>
							<img src={link} alt="" className={Section1.profile__icon} />
						</div>{' '}
						{url}
					</div>
					<div className={Section1.profile__socials}>
						<div className={Section1.profile__iconwrapper}>
							<img src={github} alt="" className={Section1.profile__icon} />
						</div>{' '}
						ayemma
					</div>
					<div className={Section1.profile__socials}>
						<div className={Section1.profile__iconwrapper}>
							<img src={twitter} alt="" className={Section1.profile__icon} />
						</div>{' '}
						ayemma
					</div>
				</div>
				<div className={Section1.profile__btns}>
					<div className={Section1.profile__btnwrapper}>
						<button className={Section1.btn2} type="button">
							Edit Profile
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileTopSection;

ProfileTopSection.propTypes = {
	user: PropTypes.shape({
		name: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		screen_name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		profile_image_url_https: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
	}).isRequired,
};
