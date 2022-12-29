import React, { useState } from 'react';
import axios from "axios";
import styles from './ResetPassword.module.css';
import ellipsetop from '../../assets/auth-images/Ellipsetop.svg';
import square from '../../assets/auth-images/square.svg';
import Rectangleright from '../../assets/auth-images/Rectangleright.svg';
import ellipseleft from '../../assets/auth-images/ellipseleft.svg';
import logo from '../../assets/auth-images/logo.svg';

function ResetPassword() {
    const [newPassword, setNewPassword] = useState("*******");
    const [confirmPassword, setConfirmPassword] = useState("*******");
    const [Response, setResponse] = useState("")

    const ChangePassword = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put("https://api.devask.tech/auth/forget-password", {
                "newPassword": newPassword,
                "confirmPassword": confirmPassword
            });
            if(data){
                setResponse(data.message);
            };
            
        } catch (error) {
            setResponse("Could not send request. Please try again!");
			console.log(error)
        }
    }
	
	return (
		<div className={styles.ResetPassword}>
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
				<form className={styles.sectionPassword} onSubmit={ChangePassword}>
					<img src={logo} alt="logo" />
					<h2>Reset Password</h2>
					<div className={styles.ForgotPasswordInput}>
					<h5>New Password</h5>
						<input
							name="New Password"
							type="password"
							required
							value={newPassword}
							onChange={(e) => setNewPassword(e.target.value)}
						/>
					</div>
                    <div className={styles.ForgotPasswordInput}>
					<h5>Confirm Password</h5>
						<input
							name="Confirm New Password"
							type="password"
							required
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}

						/>
					</div>

                    <button type='submit'>RESET PASSWORD</button>

					<p className={styles.Response}>{Response}</p>
				</form>
			</main>
		</div>
	);
}

export default ResetPassword;
