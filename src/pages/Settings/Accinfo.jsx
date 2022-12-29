import React, { useState, useEffect, useContext} from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios'
import arrow from '../../assets/settings-images/arrow-left.png'
import styles from './styles.module.css';
import { AppContext } from '../../store/AppContext';

function Accinfo({setActive}) {
      const token = localStorage.getItem('token');
      const [user, setUser] = useState([])
      const { state } = useContext(AppContext);
 		const navigate = useNavigate();
//   const activeStyle = ({ isActive }) =>
// 		isActive ? styles.isActive : undefined;   
const logout = () => {
	localStorage.clear();
	navigate('/login');
};

	useEffect(() => {
		const getUsers = async () => {
         const headers =  {
					Authorization: `Bearer ${token}`,
				 }
		  try {
			 const res = await axios.get(`https://api.devask.tech/users/get/${state.user.username}`, 
           {
					 headers
				 }
				
			 )
				setUser(res.data.data)
		  } 
		  catch (err) {
			  // display err message
		  }
		}
		getUsers()
	  }, [])

const handleBack = () => {
   setActive('')
}

    return (
			<div>
				<div className={styles.changepassword}>
					<div
						onKeyDown={handleBack}
						onClick={handleBack}
						role="button"
						tabIndex={0}
					>
						{' '}
						<img src={arrow} alt="" />{' '}
					</div>
					<h3>Account information</h3>
				</div>
				<p className={styles.username}>@{user.username}</p>
				<div className={styles.accinfo_div}>
					<p className={styles.p_main}>Username</p>
					<p className={styles.p_sub}>{user.username}</p>
				</div>
				<div className={styles.accinfo_div}>
					<p className={styles.p_main}>Phone Number</p>
					<p className={styles.p_sub}>{user.phone_number}</p>
				</div>
				<div className={styles.accinfo_div}>
					<p className={styles.p_main}>Email Address</p>
					<p className={styles.p_sub}>{user.email}</p>
				</div>
				<div className={styles.accinfo_div}>
					<p className={styles.p_main}>Country</p>
					<p className={styles.p_sub}>Nigeria</p>
					<p className={styles.p_sub}>
						Select the country you live in. Learn more
					</p>
				</div>
				{/* <div className={styles.accinfo_div}>
					<p className={styles.p_main}>Automation</p>
					<p className={styles.p_sub}>Manage your automated account.</p>
				</div> */}
				<div className={styles.logout}>
					<NavLink
						to="/login"
						// title="Logout"
						// style={linkStyle}
						// className={activeStyle}
						onClick={logout}
					>
						<div className={styles.link}>
							<p className={styles.logout}>Log out</p>
						</div>
					</NavLink>
				</div>
			</div>
		);
  
}
  Accinfo.propTypes = {
       setActive: PropTypes.func.isRequired
    }

export default Accinfo;