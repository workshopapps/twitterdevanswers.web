/* eslint-disable react/button-has-type */
import React from 'react';
import Section1 from './section1.module.css';
import avatar from '../../assets/avatar.png';
import backIcon from '../../assets/arrow-left.png';
import link from '../../assets/link-2.png';
import location from '../../assets/location.png';
import twitter from '../../assets/twitter.png';
import github from '../../assets/github.png';
import wallet from '../../assets/wallet.png';

function ProfileTopSection() {
	return (
		<div className="profile__top-section">
			<div className={Section1.profile__banner}>
				<div className={Section1.back__icon}>
					<img src={backIcon} alt="" className={Section1.backarrow} />
				</div>
				<div className={Section1.profile__bannerimg} />
			</div>
			<div className={Section1.profile__datawrapper}>
				<div className={Section1.profile__userdata}>
					<div className={Section1.profile__datawrapper}>
						<div className={Section1.profile__imagewrapper}>
							<img src={avatar} alt="" className={Section1.profile__image} />
						</div>
					</div>
					<div className={Section1.profile__btns}>
						<div className={Section1.profile__btnwrapper}>
							<div className={Section1.btn1}>
								<img src={wallet} alt="" className={Section1.btn__img} />
							</div>
							<button className={Section1.btn2}>Edit Profile</button>
						</div>
					</div>
				</div>
				<div className={Section1.profile__datatxt}>
					<div className={Section1.profile__name}>Ann Brown</div>
					<div className={Section1.profile__username}>@annbrown-dev</div>
					<div className={Section1.profile__status}>
						Software developer|Dog mum|Coding is life
					</div>
					<div className={Section1.profile__datejoined}>
						Joined spetember 2019
					</div>
					<div className={Section1.profile__location}>
						<div className={Section1.profile__iconwrapper}>
							<img src={location} alt="" className={Section1.profile__icon} />
						</div>{' '}
						los angeles carlifonia
					</div>
					<div className={Section1.profile__link}>
						<div className={Section1.profile__iconwrapper}>
							<img src={link} alt="" className={Section1.profile__icon} />
						</div>{' '}
						be.net/annbrown
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
