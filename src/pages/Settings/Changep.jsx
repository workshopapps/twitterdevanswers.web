 import React, { useState, useContext } from 'react';
 import PropTypes from 'prop-types';
 import axios from 'axios';
 import arrow from '../../assets/settings-images/arrow-left.png'
import styles from './styles.module.css';
 import { AppContext } from '../../store/AppContext';


 
 function Changep({setActive}) {
     const [password, setPassword] = useState(null);
  const initialValues = {
		oldPassword: '',
    newPassword: '',
    confirmPassword: ''
	}
     	const { state } = useContext(AppContext);

     const handleBack = () => {
   setActive('')
}

    

  const [data, setData] = useState(initialValues);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setData ({
          ...data, [name] : value
        })
    }
    const updatePassword = async () => {
		const details = {
			oldPassword: data.oldPassword,
    newPassword: data.newPassword,
    confirmPassword: data.confirmPassword
		};

		const headers = {
			Authorization: `Bearer ${state.token}`,
			'Content-Type': 'application/json',
		};

		try {
			await axios.put(
				'https://api.devask.hng.tech/auth/change-password',
				details,
				{
					headers,
				}
			);
       
               
           
		     
		} catch (err) {
            // err
		}
	}; 
     const [error, setError] = useState(false)

  const handleValidation = () => {
            if(data.newPassword !== data.confirmPassword) {
                 setError(true)
            } else {
              setPassword('password has been updated')
              setError(false)
            }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setData(initialValues);
        updatePassword();
        handleValidation();
    }

    return (
         <div className = {styles.youracc_mobile}>
         <div className = {styles.changepassword}>
         <div onKeyDown = {handleBack} onClick = {handleBack}   role = "button" tabIndex = {0}> <img src = {arrow} alt = ''/> </div>
         <h3>Change Password</h3>
         </div>

         <form>
         <div className = {styles.password_container}>
         <input 
         type = 'text' 
         placeholder = 'Current password'
         name = 'oldPassword'
         value = {data.oldPassword}
         onChange = {handleChange}
          />
         </div>

         <p className = {styles.pass}> forgot password? </p>

         <div className = {styles.password_container}>
         <input
         type = 'text' 
         placeholder = 'New password' 
         name = 'newPassword'
         value = {data.newPassword}
         onChange = {handleChange}
         />
         </div>

         <div className = {styles.password_container}>
         <input
          type = 'text' 
          placeholder = 'Confirm password' 
            name = 'confirmPassword'
         value = {data.confirmPassword}
         onChange = {handleChange}
         />
         </div>
         <div className = {styles.changepassword_container}>
         <button className = {styles.changepassword_button} onClick = {handleSubmit} type = 'button'>Save</button>
         </div>
         </form>
         {password === 'password has been updated' && <p className = {styles.green}>Password has been updated</p>}
         {error && <p className = {styles.red}>Password do not match</p>}
     </div> 
     )}

  Changep.propTypes = {
       setActive: PropTypes.func.isRequired
    }

export default Changep