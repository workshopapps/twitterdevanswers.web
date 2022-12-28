import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import useravatar from '../../assets/user-images/useravatar.svg';
import styles from '../../pages/UserPage/userPage.module.css';
import { AppContext } from '../../store/AppContext';

function UserSuggest() {
    const [info, setInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [followers, setFollowers] = useState();
    const {
		state
    } = useContext(AppContext);
    
    const key = info.user_id
    const token = localStorage.getItem('token');
  

	useEffect(() => {
		const fetchUser = async () => {
			try {
				setIsLoading(true);
				const data = await axios.get(
					`https://api.devask.tech/users/`,
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
        const getFollow = async (userId) => {
        try {
            const res = await axios.get(`https://api.devask.tech/following/followers/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${state.token}`
                }
            })
                setFollowers(res.data.followers.length) 
                
        } 
        
        catch (err) {
            // display err message
        }
        }
        getFollow(key)
    }, [])

    
    const handleFollow = async () => {
        const details = {
                target_user: key
            };
        const headers = {
                Authorization: `Bearer ${token}` ,
                'Content-Type': 'application/json' 
            }
                    

                try {
            const res=  await axios.post("https://api.devask.tech/following/follow/", 
                details,
                {
                    headers,
                }
            )		
            console.log(res.data)
            if(res.data.success === true) {
                setFollowers(followers + 1)
            }

        } 
        
        catch (err) {
            // display err message
        }
    }

    const handleUnfollow = async  (userId) => {
            
        const headers = {
                Authorization: `Bearer ${token}` ,
                'Content-Type': 'application/json' 
            }
                    

            try {
        const res =  await axios.delete(`https://api.devask.tech/following/unfollow/${userId}`, 
                {
                    headers,
                }
            )		
            console.log(res.data)	
            if(res.data.success === true) {
                setFollowers(followers - 1)
            }

        } 
        
        catch (err) {
            // display err message
        }
    } 
return (

        <div className={styles.cardList}>
            <div className={styles.cardTag}>
                <div className={styles.details}>
                    <div className={styles.cardIcon}>
                        <img src={info.image_url === " " ? 
                            {useravatar} : info.image_url} 
                            alt={info.username}
                            className={styles.user_profile_image} />

                    </div>
                    <div className={styles.cardName}>
                        <h4>{info.first_name}{' '}{info.last_name}</h4>
                        <p>{info.username}</p>
                            <h5>
                                { info.stack === '' ? '' : info.stack }
                            </h5>
                        <p className={styles.cardFollow}>{followers}followers</p>
                    </div>
                </div>

            <div className={styles.button}>
                <button type='button' className={styles.profileBtn}>
                    View Profile
                </button>
                { followers === 0 ?
                <button type='button' className={styles.followBtn} onClick = {handleFollow}>Follow</button>
            
                : <button className={styles.followBtn} onClick={() => handleUnfollow(key)} type = 'button'>Unfollow</button>
                }
            </div>
        </div>
    </div>

)
}

UserSuggest.propTypes = {
	user:
	    PropTypes.shape({
		image_url: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
		first_name: PropTypes.string.isRequired,
		work_experience: PropTypes.string.isRequired,
		stack: PropTypes.string.isRequired,
		user_id : PropTypes.number.isRequired
	}).isRequired,
};

export default UserSuggest;