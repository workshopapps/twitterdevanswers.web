import React, {useState, useEffect, useContext} from 'react';
 import PropTypes from 'prop-types';
 import axios from 'axios'
import arrow from '../../assets/settings-images/arrow-left.png';
import styles from './styles.module.css';
import { AppContext } from '../../store/AppContext';


function Deactivate({setActive}) {
const token = localStorage.getItem('token');
      const [user, setUser] = useState([])
      const { state } = useContext(AppContext);

    const handleBack = () => {
   setActive('')
    }


	useEffect(() => {
		const getUsers = async () => {
         const headers =  {
					Authorization: `Bearer ${token}`
				 }
		  try {
			 const res = await axios.get(`https://api.devask.tech/users/get/${state.user.userName}`, 
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
    return (
     <div className = {styles.deactivate_container}>
        <div className = {styles.changepassword}>
         <div onKeyDown = {handleBack} onClick = {handleBack}   role = "button" tabIndex = {0}> <img src = {arrow} alt = ''/> </div>
         <h3>Deactivate account</h3>
         </div>

         <div className = {styles.deactivate_pic}>
         <img className = {styles.ruth} src = {user.image_url === " " ? 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' : user.image_url} alt = ''/>
         <div> 
         <h3>{user.firstname} {user.lastname}</h3>
         <p>@{user.username}</p>
         </div>
         </div>

         <div className = {styles.accinfo_div}>
         <p className = {styles.p_main}>This will deactivate your account</p>
         <p>You’re about to start the process of deactivating your DevAsk account. Your 
           display name, @username, and public profile will no longer be viewable. </p>
         </div>
         
         <div className = {styles.accinfo_div}>
         <p className = {styles.p_main}>What else you should know</p>
         <p>You can restore your DevAsk account if it was accidentally or wrongfully deactivated for up to 30 days after deactivation.</p>
         </div>
         
         <div className = {styles.accinfo_div}>
         <p>If you just want to change your @usernme, you don’t need to deactivate your account - edit it in your settings.</p>
         </div>
         
         <div className = {styles.accinfo_div}>
         <p>To use your current @username or email address with a different DevAsk account, change them before you deactivate this account.</p>
         </div>
         
         <p className = {styles.deactivate}>Deactivate</p>
    </div>
    )

}
  Deactivate.propTypes = {
       setActive: PropTypes.func.isRequired
    }

export default Deactivate;