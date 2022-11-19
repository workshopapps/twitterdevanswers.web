import styles from '../pages/userPage/userPage.module.css';


const UserProfileCard = ({ user }) => {
    const { img, userName, userStack, followers, userFavoriteLanguage } = user
    // console.log(user.userName)
    return (
        <>


            <div className={styles.user_profile_card}>

                <img src={img} alt="" className={styles.user_profile_image} />


                <section className={styles.user_info_container}>
                    <section>
                        <p className={styles.user_name}> {userName}</p>
                        <p className={styles.user_stack}>
                            {userStack}
                        </p>

                    </section>

                    <span className={styles.user_extra_info}>
                        <p className={styles.user_followers}>{followers}</p>

                        <p className={styles.user_favorite_language}>{userFavoriteLanguage}</p>
                    </span>

                </section>

            </div>
        </>
    );
}

export default UserProfileCard;