import React, { useState, useEffect, useContext} from "react";
import axios from "axios";
import UserProfileCard from '../../components/UserPage/UserProfileCard';
import styles from './userPage.module.css';
import { AppContext } from '../../store/AppContext';

function UserPage() {
  
 const [profile, setProfile] = useState([]);
 const [filteredList, setFilteredList] = useState([]);
 const [searchQuery, setSearchQuery] = useState('');
 const { state } = useContext(AppContext);


  useEffect(() => {
    const getUsers = async () => {
      try {
         const res = await axios.get("https://api.devask.tech/users/?skip=0&limit=100", {
			 headers: {
				'Authorization': `Bearer ${state.token}`
			 }
		 })
             setProfile(res.data.data);
			 setFilteredList(res.data.data)
      } 
       
      catch (err) {
		  // display err message
      }
    }
    getUsers()
  }, [])
  
const handleSearch = (event) => {
    const query = event.target.value
    setSearchQuery(query)

    const searchList = profile.filter((item) => 
       item.username.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
	   item.stack.toLowerCase().indexOf(query.toLowerCase()) !== -1 || 
	   item.work_experience.toLowerCase().indexOf(query.toLowerCase()) !== -1
    )

    setFilteredList(searchList);
  }

    const onFilterChange=(event)=>{
    const query = event.target.value
    setSearchQuery(query)

    const searchList = profile.filter((item) => 
       item.stack.toLowerCase().indexOf(query.toLowerCase()) !== -1
    )
	setFilteredList(searchList);
  }


	return (


		<div className={styles.user_page_container}>
			<header className={styles.user_header_container}>
				<p className={styles.user_page_heading}>
					Connect with other Devask Users
				</p>
<div className={styles.search_container}>
			<div className={styles.searchbox_container}>
				
				<input
					className={styles.search_box}
					type="text"
					placeholder="Search for other great minds"
				    onChange = {handleSearch}
					value = {searchQuery}
				/>
				<section className={styles.search_languages}>
					<button type = 'button' value = 'django' onClick = {onFilterChange} >Django</button>
					<button type = 'button' value = 'python' onClick = {onFilterChange} >Python</button>
					<button type = 'button' value = 'react' onClick = {onFilterChange} >React</button>
					<button type = 'button' value = 'php' onClick = {onFilterChange} >PHP</button>
					<button type = 'button' value = 'panda' onClick = {onFilterChange} >Panda</button>
				</section>
				
				<select className={styles.select_lang} name="lang" id="lang" onChange = {onFilterChange} >
					<option value="python">Python</option>
					<option value="django">Django</option>
					<option value="php">PHP</option>
					<option value="react">React</option>
					<option value="panda">Panda</option>
				</select>
			</div>

		</div>
			</header>
			<main>
				<div className={styles.user_grid_container}>
					{ filteredList.length === 0 ? 'Check back for more Users suggestions...' : filteredList.map((user) => (
					<UserProfileCard key = {user.user_id} user = {user} />
					))   }
				</div>

				<div className={styles.users_filter}>
				
                 { filteredList.length !== 0 &&	<section className = {styles.more_search}>
						<a href="/">1</a>
						<a href="/">2</a>
						<a href="/">3</a>
						<a href="/">4</a>
						<a href="/">...</a>
						<a href="/">200</a>
						<button type="button">Next</button>
					</section> }
				</div>
			</main>
		</div>
	);
}

export default UserPage;
