/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import Googleicon from '../../../assets/google.svg';
import GithubIcon from '../../../assets/github.svg';
import Microsoficon from '../../../assets/microsoft.svg';
import AuthPage from '..';

const signInOptions = [
	{
		src: Googleicon,
		alt: 'Google icon',
		text: 'Log in with Google',
	},
	{
		src: GithubIcon,
		alt: 'Github icon',
		text: 'Log in with Github',
	},
	{
		src: Microsoficon,
		alt: 'Microsoft icon',
		text: 'Log in with Microsoft',
	},
];

const inputs = [
	{
		label: 'Username/Email',
		id: 'email',
		type: 'email',
		placeholder: 'name/test@gmail.com',
	},
	{
		label: 'Password',
		id: 'password',
		type: 'password',
		placeholder: '*******',
		canBeHidden: true,
	},
];

function InputCheckbox() {
	return (
		<div className={` ${styles['form-group__checkbox']}`}>
			<input
				type="checkbox"
				className={styles.input__checkbox}
				id="keep-logged-in"
			/>
			<label
				htmlFor="keep-logged-in"
				className={styles['form-group__checkbox-label']}
			>
				Keep me logged in
			</label>
		</div>
	);
}

function Login() {
	return (
		<AuthPage
			inputs={inputs}
			authOptions={signInOptions}
			pageTitle="Welcome back!"
			authAltText="Or Log in with"
			inputCheckbox={<InputCheckbox />}
			buttonLabel="Login"
		>
			<p className={styles['alt-auth']}>
				Don&apos;t have an account?{' '}
				<Link className={styles['alt-auth-link']} to="/sign-up">
					Sign Up
				</Link>
			</p>
		</AuthPage>
	);
}

export default Login;
