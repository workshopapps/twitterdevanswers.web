
import React,
		{useState,
		 useContext
		} from 'react';
import EditAccountCSS from './style.module.css';
import TestImage from '../../../../assets/settings-images/test-img.jfif';
import Experience from "./dataExperience"
import { AppContext } from '../../../../store/AppContext';
import { EDIT_USER } from '../../../../store/actionTypes';
import updateUser from './api';
import Location from './Location';




function EditAcccount() {
	const {state, dispatch} = useContext(AppContext);
	const [user, setUser] = useState(state.user); 
	const changeHandler = (event) => {
		setUser((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};
  
	const onSubmit=async (event)=>{	
		event.preventDefault();
		try {
			localStorage.setItem('user', JSON.stringify(user));
		const updatedUser= await	updateUser(user.user_id, user)
			dispatch({
				type: EDIT_USER,
				payload: updatedUser,
			});

			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		} catch (error) {
			throw new Error(error);
		}


	}
	const onCancel=()=>{	
		alert("Your changes have been discarded!")			
	}


	return (
		<div className={EditAccountCSS.editaccount}>
			<div className={EditAccountCSS.tabheading}>
				<h2>Edit Account</h2>
			</div>
			<div className={EditAccountCSS.userinfo}>
				<div className={EditAccountCSS.userprofile}>
				
					<img
						className={EditAccountCSS.profileimg}
						alt="profile "
						src={TestImage}
								id="imageinput"
								type="image"
								placeholder="John "
								value={user.image}
								name="profilepicture"
								onChange={changeHandler}
						/>
					
					<div className={EditAccountCSS.editsvg}>
						<svg
							width="17"
							height="18"
							viewBox="0 0 17 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12.25 1.91661C12.447 1.71963 12.6808 1.56337 12.9382 1.45676C13.1956 1.35016 13.4714 1.29529 13.75 1.29529C14.0286 1.29529 14.3044 1.35016 14.5618 1.45676C14.8192 1.56337 15.053 1.71963 15.25 1.91661C15.447 2.11359 15.6032 2.34744 15.7098 2.60481C15.8165 2.86218 15.8713 3.13803 15.8713 3.41661C15.8713 3.69518 15.8165 3.97103 15.7098 4.2284C15.6032 4.48577 15.447 4.71963 15.25 4.91661L5.125 15.0416L1 16.1666L2.125 12.0416L12.25 1.91661Z"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>
				<div className="user-details-form">
					<form className={EditAccountCSS.form} onSubmit={onSubmit}>

						<div className={EditAccountCSS.container}>
							<label htmlFor className={EditAccountCSS.label}>
								First name:
								<input
									required
									id="nameinput"
									className={EditAccountCSS.textinput}
									type="text"
									placeholder="John "
									value={user.firstName}
									name="firstName"
									onChange={changeHandler}
								/>
							</label>
							<label htmlFor className={EditAccountCSS.label}>
								Last name:
								<input
									required
									id="nameinput"
									className={EditAccountCSS.textinput}
									type="text"
									placeholder=" Doe"
									value={user.lastName}
									name="lastName"
									onChange={changeHandler}
								/>
								</label>	
						</div>
						<div className={EditAccountCSS.container}>
						
						<label htmlFor className={EditAccountCSS.label} >
								User name:
								<input
									required
									id="usernameinput"
									className={EditAccountCSS.textinput}
									type="text"
									placeholder="Johndoe123"
									value={user.userName}
									name="userName"
									onChange={changeHandler}
								/>
							</label>

						<label htmlFor="locale" className={EditAccountCSS.label}>
                                Location
                                <select
								className={EditAccountCSS.textinput}
								value={user.location}
                                > 
								<Location />
								 </select>						
						</label>
						
						</div>
						<div className={EditAccountCSS.container}>
							<label htmlFor className={EditAccountCSS.label}>
								Phone Number:
								<input
									required
									id="nameinput"
									className={EditAccountCSS.textinput}
									type="text"
									placeholder="07012345678 "
									maxLength="11"
									value={user.phoneNumber}
									name="Phonenumber"
									onChange={changeHandler}
								/>
							</label>
							<label htmlFor className={EditAccountCSS.label}>
								Bio:
								<input
									required
									id="bioinput"
									className={EditAccountCSS.textinput}
									type="text"
									placeholder="Cool developer, ready to collaborate..."
									value={user.description}
									name="bio"
									onChange={changeHandler}
								/>
								</label>	
						</div>
					

						<div className={EditAccountCSS.container}> 

							<label htmlFor className={EditAccountCSS.label}>
								Preffered Stack :
								<input
									className={EditAccountCSS.textinput}
									required
									value={user.stack}
									placeholder="Javascript, React js, Golang Developer"
									name="stack"
									onChange={changeHandler}
								/>						
							</label>

							<label htmlFor className={EditAccountCSS.label}>
								Experience Level :
								<select
									className={EditAccountCSS.textinput}
									required
									value={user.workExperience}
									name="experience"
									onChange={changeHandler}
								>
									<Experience />
									
								</select>						
							</label>

						</div>
						<div className={EditAccountCSS.container}>
							<label htmlFor className={EditAccountCSS.label}>
								Current work position/company:
								<input
									required=""
									id="emailinput"
									className={EditAccountCSS.textinputfull}
									type="text"
									placeholder="Senior Developer/DevAsk"
									value={user.position}
									name="company"
									onChange={changeHandler}
								/>
							</label>
						</div>

						<div className={EditAccountCSS.container}>
							<label htmlFor className={EditAccountCSS.label}>
								Github:
								<input
									required
									id="nameinput"
									className={EditAccountCSS.textinput}
									type="text"
									placeholder="https://github.com/johndoe"
									value={user.github}
									name="github"
									onChange={changeHandler}
								/>
							</label>

							<label htmlFor className={EditAccountCSS.label}>
								Twitter:
								<input
									required
									id="twitterinput"
									className={EditAccountCSS.textinput}
									type="text"
									placeholder="https://twitter.com/Johndoe"
									value={user.twitter}
									name="twitter"
									onChange={changeHandler}
								/>
							</label>
						</div>

						<div className={EditAccountCSS.container}>

							<label htmlFor className={EditAccountCSS.label}>
								Email address:
								<input
									required="@"
									id="emailinput"
									className={EditAccountCSS.textinput}
									type="email"
									placeholder="Johndoe@email.com"
									value={user.email}
									name="email"
									onChange={changeHandler}
								/>
						</label>

							<label htmlFor className={EditAccountCSS.label}>
								linkedin:
								<input
									required
									id="usernameinput"
									className={EditAccountCSS.textinput}
									type="text"
									placeholder="www.linkedin.com/in/John-doe-30a7fw153"
									value={user.linkedin}
									name="linkedin"
									onChange={changeHandler}
								/>
							</label>
						</div>
						
						<div className={EditAccountCSS.buttons}>
							<button id='save-el'  className={EditAccountCSS.savebtn}  type="submit">
								Save Changes
							</button>
							<button className={EditAccountCSS.discardbtn} onClick={onCancel} type="button">
								Discard Changes
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		
	);
}

export default EditAcccount;

