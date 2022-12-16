import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import styles from './ForgotPassword.module.css';
import ellipsetop from '../../assets/auth-images/Ellipsetop.svg';
import square from '../../assets/auth-images/square.svg';
import Rectangleright from '../../assets/auth-images/Rectangleright.svg';
import ellipseleft from '../../assets/auth-images/ellipseleft.svg';
import logo from '../../assets/auth-images/logo.svg';

function ForgotPassword() {
	const [email, setEmail] = useState("email");
	const [response, setResponse] = useState("");
 
	const RequestLink = async (e) => {
	 e.preventDefault();
	 try {
		 const { data } = await axios.post("https://api.devask.hng.tech/auth/forget-password", {
			 "email": email
		 });
		 if(data){
			 setResponse(data.message);
		 };
		 
	 } catch (error) {
		 setResponse("Could not send request. Please try again!");
	 }
 }


	return (
		<div className={styles.ForgotPassword}>
			<main className={styles.passwordMain}>
				<img className={styles.ellipsetop} src={ellipsetop} alt="ellipsetop" />
				<img className={styles.square} src={square} alt="square" />
				<img
					className={styles.Rectangleright}
					src={Rectangleright}
					alt="Rectangleright"
				/>
				<img
					className={styles.ellipseleft}
					src={ellipseleft}
					alt="ellipseleft"
				/>
				<form className={styles.sectionPassword} onSubmit={RequestLink}>
					<img src={logo} alt="logo" />
					<h2>Forgot Password</h2>
					<p>
						Enter the email address associated with your account and we’ll send
						you a link to reset your password.
					</p>
					<div className={styles.ForgotPasswordInput}>
						<h5>Email Address</h5>
						<input
							name="Email Address"
							required
							type="text"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

                    <button type='submit'>SUBMIT</button>
                    <p>Don’t have a DevAsk account? <Link to="/sign-up"> Sign Up</Link></p>
					<p className={styles.Response}>{response}</p>
				</form>
			</main>
		</div>
	);
}

export default ForgotPassword;
