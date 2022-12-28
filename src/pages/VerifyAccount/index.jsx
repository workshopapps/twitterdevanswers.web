import React from 'react';
import { Link } from 'react-router-dom';
import styles from './VerifyAccount.module.css';
import ellipsetop from '../../assets/auth-images/Ellipsetop.svg';
import square from '../../assets/auth-images/square.svg';
import Rectangleright from '../../assets/auth-images/Rectangleright.svg';
import ellipseleft from '../../assets/auth-images/ellipseleft.svg';
import logo from '../../assets/auth-images/logo.svg';

function VerifyAccount() {
	return (
		<div className={styles.VerifyPassword}>
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
				<form className={styles.sectionPassword}>
					<img src={logo} alt="logo" />
					<h2>Verify your account</h2>
					<p>Please enter the verification code we sent to ja***oe@gmail.com</p>
					<div className={styles.VerifyPasswordInput}>
						<input name="verify password" required type="number" />
					</div>

					<p>
						Didn’t get the mail?<Link to="/sign-up"> Resend </Link>
					</p>

					<button type="submit">VERIFY & SIGN UP</button>
				</form>
			</main>
		</div>
	);
}

export default VerifyAccount;
