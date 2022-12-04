import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import { AppContext } from '../../store/AppContext';
import Section1 from './section1.module.css';
import link from '../../assets/profile-images/link-2.png';
import locationIcon from '../../assets/profile-images/location.png';
import twitter from '../../assets/profile-images/twitter.png';
import github from '../../assets/profile-images/github.png';
import calendarIcon from '../../assets/profile-images/calendar.png';
import clockIcon from '../../assets/profile-images/clock.png';

function ProfileTopSection() {
	const navigate = useNavigate();

	const [info, setInfo] = useState({});
	const { state } = useContext(AppContext);
	const [isLoading, setIsLoading] = useState(false);

	const handleEdit = () => {
		navigate('/settings');
	};

	useEffect(() => {
		const fetchUser = async () => {
			try {
				setIsLoading(true);
				const data = await axios.get(
					`https://api.devask.hng.tech/users/${state.user.userName}`,
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
		// console.log(info)
	}, [isLoading]);
	console.log(state);

	return (
		<div className={Section1.profile__datawrapper}>
			<div className={Section1.profile__datatxt}>
				<div className={Section1.profile__imagewrapper}>
					<img
						src={info.image_url}
						// src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
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
							{/* {info.links[0]} */}
						</div>
						<div className={Section1.profile__socials}>
							<div className={Section1.profile__iconwrapper}>
								<img src={github} alt="" className={Section1.profile__icon} />
							</div>{' '}
							{/* {info.links[1]} */}
						</div>
						<div className={Section1.profile__socials}>
							<div className={Section1.profile__iconwrapper}>
								<img src={twitter} alt="" className={Section1.profile__icon} />
							</div>{' '}
							{/* {info.links[2]} */}
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
							<div className={Section1.profile__iconwrapper}>{}</div> Following
						</div>
						<div className={Section1.profile__socials}>
							<div className={Section1.profile__iconwrapper}>{}</div> Followers
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
					{info.user_id ? (
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

// {user: {…}, token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhb…M4OH0.CH_3wuaBPhajIqA7YTfBBiaXVYe7MnyXDA6j6Zk97mU', isAuth: false, loading: false}
// isAuth
// :
// false
// loading
// :
// false
// token
// :
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbWFyYXBlYWNlQGdtYWlsLmNvbSIsImV4cCI6MTY3MDE2NDM4OH0.CH_3wuaBPhajIqA7YTfBBiaXVYe7MnyXDA6j6Zk97mU"
// user
// :
// email
// :
// "amarapeace@gmail.com"
// userName
// :
// "Amarapeace"
// user_id
// :
// 17
// wallet
// :
// balance
// :
// 1000
// created_at
// :
// "2022-12-03T14:52:18.863251"
// deposits_made
// :
// 0
// id
// :
// "38725e21-64ad-494b-ad04-96e70fa31606"
// spendings
// :
// 0
// user_id
// :
// 17

// {
//   "success": true,
//   "data": {
//     "user_id": 17,
//     "username": "Amarapeace",
//     "first_name": " ",
//     "last_name": " ",
//     "email": "amarapeace@gmail.com",
//     "description": " ",
//     "phone_number": " ",
//     "work_experience": " ",
//     "position": " ",
//     "stack": " ",
//     "links": [
//       ""
//     ],
//     "role": null,
//     "image_url": " ",
//     "location": " ",
//     "is_admin": false,
//     "account_balance": 1000
//   }
// }
