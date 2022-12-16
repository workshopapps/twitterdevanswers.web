import React from 'react';
import styles from './ResetPassword.module.css';
import ellipsetop from '../../assets/auth-images/Ellipsetop.svg';
import square from '../../assets/auth-images/square.svg';
import Rectangleright from '../../assets/auth-images/Rectangleright.svg';
import ellipseleft from '../../assets/auth-images/ellipseleft.svg';
import logo from '../../assets/auth-images/logo.svg';
import Input from '../AuthPage/Input';

function ResetPassword() {
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
				<section className={styles.sectionPassword}>
					<img src={logo} alt="logo" />
					<h2>Reset Password</h2>
					<div className={styles.ForgotPasswordInput}>
						<Input
							label="New Password"
							id="New_Password"
							name="New Password"
							placeholder="*******"
							type="password"
							// value=""
						/>
					</div>
                    <div className={styles.ForgotPasswordInput}>
						<Input
							label="Confirm New Password"
							id="Confirm_New_Password"
							name="Confirm New Password"
							placeholder="*******"
							type="password"
							// value=""
						/>
					</div>

                    <button type='submit'>RESET PASSWORD</button>
				</section>
			</main>
		</div>
	);
}

export default ResetPassword;
