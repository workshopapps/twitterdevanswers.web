import UserProfileCard from '../../component/UserProfileCard';
import { users } from './users';
import styles from './userPage.module.css'
import SearchBox from '../../component/SearchBox';
import FilterBy from '../../component/FilterBy';
const UserPage = () => {
    return (
        <>
            <div className={styles.user_page_container} >
                <header className={styles.user_header_container}>
                    <p className={styles.user_page_heading}>
                        Connect with other Devask Users
                    </p>

                    <SearchBox/>
                </header>
                <main>
                    <div className={styles.user_grid_container}>
                        {
                            users.map((user, index) => {
                                return (<UserProfileCard key={index} user={user} />)
                            } )
                        }

                    </div>


                    <div className={styles.users_filter}>
                    
                        <div className={styles.filter_hidden}>
                            <FilterBy /> 

                        </div>

                                          

                        <section className={styles.more_search}>
                            <a href="#">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <a href="#">...</a>
                            <a href="#">200</a>
                            <button>Next</button>
                            
                        </section>
                    </div>
                </main>
            



            </div>
        </>
    );
}

 

export default UserPage;