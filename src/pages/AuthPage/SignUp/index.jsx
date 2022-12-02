/* eslint-disable no-unused-vars */
import React, {useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import Googleicon from '../../../assets/google.svg';
import GithubIcon from '../../../assets/github.svg';
import Microsoficon from '../../../assets/microsoft.svg';
import { AppContext } from '../../../store/AppContext';
import { USER_SIGNED_UP } from '../../../store/actionTypes';
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
		label: 'Username',
		id: 'username',
		type: 'text',
		placeholder: '@Maryjoe1',
		name: 'username'
	},
	{
		label: 'Email',
		id: 'email',
		type: 'email',
		placeholder: 'example@gmail.com',
		name: 'email'
	},
	{
		label: 'Password',
		id: 'password',
		type: 'password',
		placeholder: '*******',
		canBeHidden: true,
		name: 'password'
	},
	{
		label: 'Confirm Password',
		id: 'confirm-password',
		type: 'password',
		placeholder: '*******',
		canBeHidden: true,
		name: 'confirm_password'
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
			 > <input/>
				I want to receive updates, User Research invitations, Company
				announcements, Newsletters and Digest
			</label>
		</div>
	);
}

function SignUp() {
	const [input, setInput] = useState({
		username: '',
		email: '',
		password: '',
		confirm_password: '',
	});

	const { dispatch } = useContext(AppContext);
	const navigate = useNavigate();

	const changeHandler = (event) => {
		setInput((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	const handleLogIn = async (event) => {
		event.preventDefault();
		try {
			localStorage.setItem('user', JSON.stringify(input));

			dispatch({
				type: USER_SIGNED_UP,
				payload: input,
			});

			navigate('/');
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
			console.log(input)
		} catch (error) {
			throw new Error(error);
		}
	};

	return (
		<AuthPage
			pageTitle="Create an Account"
			authAltText="Or Sign up with"
			inputs={inputs}
			authOptions={signUpOptions}
			inputCheckbox={<InputCheckbox />}
			buttonLabel="Sign up"
			onChange={changeHandler}
			onSubmit={handleLogIn}
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
