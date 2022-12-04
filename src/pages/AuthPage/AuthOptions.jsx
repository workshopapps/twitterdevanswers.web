import React from 'react';
import { ReactComponent as GoogleIcon } from '../../assets/auth-images/google.svg';
import { ReactComponent as GithubIcon } from '../../assets/auth-images/github.svg';
import { ReactComponent as MicrosoftIcon } from '../../assets/auth-images/microsoft.svg';
import styles from './styles.module.css';

function AuthOptions() {
	return (
		<div className={styles.authOptions}>
			<div>
				<GoogleIcon /> Sign up using Google
			</div>
			<div>
				<GithubIcon /> Sign up using Github
			</div>
			<div>
				<MicrosoftIcon /> Sign up using Microsoft
			</div>
		</div>
	);
}

export default AuthOptions;
