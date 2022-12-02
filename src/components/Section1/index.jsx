/* eslint-disable camelcase */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Section1 from './section1.module.css';
import backIcon from '../../assets/arrow-left.png';
import link from '../../assets/link-2.png';
import locationIcon from '../../assets/location.png';
import twitter from '../../assets/twitter.png';
import github from '../../assets/github.png';
import wallet from '../../assets/wallet.png';


function ProfileTopSection({ user }) {
	const {
		name,
		screen_name,
		location,
		description,
		url,
		profile_image_url_https,
	} = user;

	const navigate = useNavigate();
	return (
		<div className="profile__top-section">
			<div className={Section1.profile__banner}>
				<div className={Section1.back__icon}>
					<button
						className={Section1.backarrow}
						type="button"
						onClick={() => navigate(-1)}
					>
						<img src={backIcon} alt="Back icon" />
					</button>
				</div>
				<div className={Section1.profile__bannerimg} />
			</div>
			<div className={Section1.profile__datawrapper}>
				<div className={Section1.profile__userdata}>
					<div className={Section1.profile__datawrapper}>
						<div className={Section1.profile__imagewrapper}>
							<img
								src={`${profile_image_url_https}`}
								alt=""
								className={Section1.profile__image}
							/>
						</div>
					</div>
					<div className={Section1.profile__btns}>
						<div className={Section1.profile__btnwrapper}>
							<div className={Section1.btn1}>
								<img src={wallet} alt="" className={Section1.btn__img} />
							</div>
							<Link to="/settings" className={Section1.btn2} type="button">
								Edit Profile
							</Link>
						</div>
					</div>
				</div>
				<div className={Section1.profile__datatxt}>
					<div className={Section1.profile__name}>{name}</div>
					<div className={Section1.profile__username}>{screen_name}</div>
					<div className={Section1.profile__status}>{description}</div>
					<div className={Section1.profile__datejoined}>
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
						</div>
						<div className={Section1.profile__iconwrapper}>
							<img src={twitter} alt="" className={Section1.profile__icon} />
						</div>
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
