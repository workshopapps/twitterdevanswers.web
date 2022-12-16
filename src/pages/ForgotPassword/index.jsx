import React from 'react';
import styles from './ForgotPassword.module.css';
import ellipsetop from '../../assets/auth-images/Ellipsetop.svg';
import square from '../../assets/auth-images/square.svg';
import Rectangleright from '../../assets/auth-images/Rectangleright.svg';
import ellipseleft from '../../assets/auth-images/ellipseleft.svg';
import logo from '../../assets/auth-images/logo.svg';
import Input from '../AuthPage/Input';

function ForgotPassword() {
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
				<section className={styles.sectionPassword}>
					<img src={logo} alt="logo" />
					<h2>Forgot Password</h2>
					<p>
						Enter the email address associated with your account and we’ll send
						you a link to reset your password.
					</p>
					<div className={styles.ForgotPasswordInput}>
						<Input
							label="Email Address"
							id="Email_Address"
							name="Email Address"
							placeholder="Email"
							type="text"
						/>
					</div>

                    <button type='submit'>SUBMIT</button>
                    <p>Don’t have a DevAsk account? <span> Sign Up</span></p>
				</section>
			</main>
		</div>
	);
}

export default ForgotPassword;
