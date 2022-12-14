import React ,{ useState, useEffect, useContext} from 'react';
import axios from 'axios';
import UserSuggest from '../../components/UserPage/UserSuggest';
import styles from './userPage.module.css';
import { AppContext } from '../../store/AppContext';

function userPage() {
    const [info, setInfo] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const { state } = useContext(AppContext);

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

    return (
    <div className={styles.userCard}>
        <h3>Connect with other Devask Users</h3>
        <section className={styles.userCardSet}>
            <UserSuggest/>
            {/* <h3>Connect with other Devask Users</h3>
            <section className={styles.userCardSet}>
                <div className={styles.cardList}>
                    <div className={styles.cardTag}>
                        <div className={styles.details}>
                            <div className={styles.cardIcon}>
                                <img src={user.image_url === " " ? 
                                    {useravatar} : user.image_url} 
                                    alt={user.username}
                                    className={styles.user_profile_image} />

                            </div>
                            <div className={styles.cardName}>
                                <h4>{user.firstName}{' '}{user.lastName}</h4>
                                <p>{user.username}</p>
                                    <h5>
                                        { user.stack === '' ? '' : user.stack }
                                    </h5>
                                <p className={styles.cardFollow}>{follow}followers</p>
                            </div>
                        </div>

                    <div className={styles.button}>
                        <button type='button' className={styles.profileBtn}>
                            View Profile
                        </button>
                        { follow === 0 ?
                        <button  type='button' className={styles.follow_button} onClick = {handleFollow}>Follow</button>
                    
                        : <button className={styles.followBtn} onClick={() => handleUnfollow(key)} type = 'button'>unfollow</button>
                        }
                    </div>
                </div>
            </div>
                <div className={styles.cardOptions}>
                    <div className={styles.cardBox}>
                        You might like
                    </div>
                </div>
            </section> */}
        <div className={styles.cardOptions}>
            <div className={styles.cardBox}>
                You might like
            
            </div>
            </div>
        </section>
    </div>
    )
}

export default userPage;