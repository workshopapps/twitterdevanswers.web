
import React,{useState, useContext} from 'react';
import EditAccountCSS from './style.module.css';
import TestImage from '../../../../assets/settings-images/test-img.jfif';
import Experience from "./dataExperience"
import { AppContext } from '../../../../store/AppContext';
import { EDIT_USER } from '../../../../store/actionTypes';
import updateUser from './api';
// import Location from './Location';




function EditAcccount() {
	const {state, dispatch } = useContext(AppContext);
	const imageInput = React.createRef();
	const [user, setUser] = useState(state.user); 
	const changeHandler = (event) => {
		setUser((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};
	const onImageChange = (event) => {
		setUser({
		  ...user,
		  image: URL.createObjectURL(event.target.files[0]),
		});
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

	console.log(state)

	return (
		<div className={EditAccountCSS.editaccount}>
			<div className={EditAccountCSS.tabheading}>
				<h2>Edit Account</h2>
			</div>
			<div className={EditAccountCSS.userinfo}>
				<div className={EditAccountCSS.userprofile}>
					<div >
						 <img
							 className={EditAccountCSS.profileimg}
							 alt="profile "
							 src={user.image || TestImage}
									id="imageinput"
									type="image"
									placeholder="John "
									value={user.image}
									name="profilepicture"
									onChange={changeHandler}
							/>
							
							
							<button
							  type="button"
							  className={EditAccountCSS.photo}
							  onClick={() => imageInput.current.click()}
							>
							Edit Photo
							</button>

							<input
								ref={imageInput}
								id="imageinput"
								type="file"
								accept="image/*"
								onChange={onImageChange}
								style={{ display: "none" }}
							/>

							
					</div>
				
					
					
					
				</div>
				<div className="user-details-form">
					<form className={EditAccountCSS.form} onSubmit={onSubmit}>

					<h3 className={EditAccountCSS.head}> Primary Details</h3>
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
							Display name:
								<input
									required
									id="displaynameinput"
									className={EditAccountCSS.textinput}
									type="text"
									placeholder="Johndoe123"
									value={user.displayname}
									name="displayname"
									onChange={changeHandler}
								/>
							</label>

						
						
						<label htmlFor className={EditAccountCSS.label}>
								Bio:
								<textarea
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
					
						<h3 className={EditAccountCSS.head}>Work Information</h3>
						<div className={EditAccountCSS.container}> 

						<label htmlFor className={EditAccountCSS.label}>
								Company:
								<input
									required=""
									id="Companyinput"
									className={EditAccountCSS.textinput}
									type="text"
									placeholder="DevAsk LTD"
									value={user.company}
									name="company"
									onChange={changeHandler}
								/>
							</label>

							

							<label htmlFor className={EditAccountCSS.label}>
								Work Experience :
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
								 Stack :
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
								Role:
								<input
									required
									id="nameinput"
									className={EditAccountCSS.textinput}
									type="text"
									placeholder="Senior Dev"
									value={user.role}
									name="role"
									onChange={changeHandler}
								/>
							</label>

							
						</div>
						<h3 className={EditAccountCSS.head}>Contact Information</h3>
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
								Website:
								<input
									required
									id="websiteinput"
									className={EditAccountCSS.textinput}
									type="text"
									placeholder="www.website.com"
									value={user.website}
									name="website"
									onChange={changeHandler}
								/>
							</label>
						</div>
						
						<div className={EditAccountCSS.buttons}>
							<button id='save-el'  className={EditAccountCSS.savebtn}  type="submit">
								Save Changes
							</button>
							<button className={EditAccountCSS.discardbtn} onClick={onCancel} type="button">
								Cancel
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		
	);
}

export default EditAcccount;

