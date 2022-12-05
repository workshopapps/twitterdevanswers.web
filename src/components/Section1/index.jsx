import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';




import PropTypes from 'prop-types';
import { AppContext } from '../../store/AppContext';
import Section1 from './section1.module.css';
import link from '../../assets/profile-images/link-2.png';
import locationIcon from '../../assets/profile-images/location.png';
import twitter from '../../assets/profile-images/twitter.png';
import github from '../../assets/profile-images/github.png';
import calendarIcon from '../../assets/profile-images/wallet.png';
import clockIcon from '../../assets/profile-images/clipboard-text.png';

function ProfileTopSection() {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const user = pathname.slice(9);
	const [info, setInfo] = useState({});
	const { state } = useContext(AppContext);
	const [isLoading, setIsLoading] = useState(false);
	const [followers, setFollowers] = useState();




	const handleEdit = () => {
		navigate('/settings');
	};
	useEffect(() => {
		const fetchUser = async () => {
			try {
				setIsLoading(true);
				const data = await axios.get(
					`https://api.devask.hng.tech/users/${user}`,
					{
						headers: {
							Authorization: `Bearer ${state.token}`,
							'Content-Type': 'application/json',
						},
					}
				);
				setInfo(data.data.data);
			} catch (err) {
				// console.error(err);
			}
		};
		fetchUser();
	}, [isLoading]);
	useEffect(() => {
		const fetchFollowers = async () => {
			try {
				setIsLoading(true);
				const res = await axios.get(
					`https://api.devask.hng.tech/following/followers/${state.user.userName}`,
					{
						headers: {
							Authorization: `Bearer ${state.token}`,
							'Content-Type': 'application/json',
						},
					}
				);
				setFollowers(res.followers.length);
			} catch (err) {
				// console.error(err);
			}
		};




		fetchFollowers();
		console.log(followers);
	}, [isLoading]);
	return (
		<div className={Section1.profile__datawrapper}>
			<div className={Section1.profile__datatxt}>
				<div className={Section1.profile__imagewrapper}>
					<img
						src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
						alt=""
						className={Section1.profile__image}
					/>
				</div>
			</div>
			<div className={Section1.profile__address}>
				<div className={Section1.profile__info}>
					<div className={Section1.profile__name}>{info.username}</div>
					<div className={Section1.profile__username}>@{info.username}</div>
					<div className={Section1.profile__status}>{info.stack}</div>
				</div>
				<div className={Section1.profile__addressinner}>
					<div className={Section1.profile__datelocation}>
						<div className={Section1.profile__datejoined}>
							<div className={Section1.profile__iconwrapper}>
								<img
									src={calendarIcon}
									alt=""
									className={Section1.profile__icon}
								/>
							</div>{' '}
							Joined {state.user.wallet.created_at.slice(0, 10)}
						</div>
						<div className={Section1.profile__location}>
							<div className={Section1.profile__iconwrapper}>
								<img
									src={locationIcon}
									alt=""
									className={Section1.profile__icon}
								/>
							</div>{' '}
							{info.location}
						</div>
					</div>
					<div className={Section1.profile__sociallinks}>
						<div className={Section1.profile__link}>
							<div className={Section1.profile__iconwrapper}>
								<img src={link} alt="" className={Section1.profile__icon} />
							</div>{' '}
							{info.links}
						</div>
						<div className={Section1.profile__socials}>
							<div className={Section1.profile__iconwrapper}>
								<img src={github} alt="" className={Section1.profile__icon} />
							</div>{' '}
							{info.links}
						</div>
						<div className={Section1.profile__socials}>
							<div className={Section1.profile__iconwrapper}>
								<img src={twitter} alt="" className={Section1.profile__icon} />
							</div>{' '}
							{info.links}
						</div>
						<div className={Section1.profile__socials}>
							<div className={Section1.profile__iconwrapper}>
								<img
									src={clockIcon}
									alt=""
									className={Section1.profile__icon}
								/>
							</div>{' '}
							Last seen {state.user.wallet.updated_at}
						</div>
					</div>
					<div className={Section1.profile__followingwallet}>
						<div className={Section1.profile__link}>
							<div className={Section1.profile__iconwrapper}>
								{info.following}
							</div>{' '}
							Following
						</div>
						<div className={Section1.profile__socials}>
							<div className={Section1.profile__iconwrapper}>
								{info.followers}
							</div>{' '}
							Followers
						</div>
						<div className={Section1.profile__socials}>
							<div className={Section1.profile__iconwrapper}>
								<img
									src={clockIcon}
									alt=""
									className={Section1.profile__icon}
								/>
							</div>{' '}
							{state.user.wallet.balance} Token
						</div>
					</div>
				</div>
			</div>
			<div className={Section1.profile__btns}>
				<div className={Section1.profile__btnwrapper}>
					{state.user.username === user ? (
						<button
							className={Section1.btn2}
							type="button"
							onClick={handleEdit}
						>
							Edit Profile
						</button>
					) : (
						<button className={Section1.btn2} type="button">
							Follow
						</button>
					)}
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
