/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import Googleicon from '../../../assets/google.svg';
import GithubIcon from '../../../assets/github.svg';
import Microsoficon from '../../../assets/microsoft.svg';
import AuthPage from '..';

const signUpOptions = [
	{
		src: Googleicon,
		alt: 'Google icon',
		text: 'Sign up using Google',
	},
	{
		src: GithubIcon,
		alt: 'Github icon',
		text: 'Sign up using Github',
	},
	{
		src: Microsoficon,
		alt: 'Microsoft icon',
		text: 'Sign up using Microsoft',
	},
];

const inputs = [
	{
		label: 'Fullname',
		id: 'fullname',
		type: 'text',
		placeholder: 'Enter your full name',
	},
	{
		label: 'Username',
		id: 'username',
		type: 'text',
		placeholder: '@Maryjoe1',
	},
	{
		label: 'Email',
		id: 'email',
		type: 'email',
		placeholder: 'example@gmail.com',
	},
	{
		label: 'Password',
		id: 'password',
		type: 'password',
		placeholder: '*******',
		canBeHidden: true,
	},
	{
		label: 'Confirm Password',
		id: 'confirm-password',
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
				id="subscribe"
			/>
			<label
				className={styles['form-group__checkbox-label']}
				htmlFor="subscribe"
			>
				I want to receive updates, User Research invitations, Company
				announcements, Newsletters and Digest
			</label>
		</div>
	);
}

function SignUp() {
	return (
		<AuthPage
			pageTitle="Create an Account"
			authAltText="Or Sign up with"
			inputs={inputs}
			authOptions={signUpOptions}
			inputCheckbox={<InputCheckbox />}
			buttonLabel="Sign up"
		>
			<p className={styles['alt-auth']}>
				Already a member?{' '}
				<Link className={styles['alt-auth-link']} to="/login">
					Log In
				</Link>
			</p>

			<h3 className={styles['privacy-text']}>
				By signing in you agree to our{' '}
				<span className={styles['primary-text']}>Privacy Terms</span> and{' '}
				<span className={styles['primary-text']}>Conditions</span>
			</h3>
		</AuthPage>
	);
}

export default SignUp;
