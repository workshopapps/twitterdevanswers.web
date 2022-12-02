import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './styles.module.css';
import Googleicon from '../../../assets/auth-images/google.svg';
import GithubIcon from '../../../assets/auth-images/github.svg';
import { AppContext } from '../../../store/AppContext';
import { LOADING, USER_SIGNED_UP } from '../../../store/actionTypes';
import AuthPage from '..';
import { formInputHandler, useModal, validate } from '../utils';
import AuthModal from '../AuthModal';

const signUpOptions = [
	{
		src: Googleicon,
		alt: 'Google icon',
		text: 'Sign in with Google',
	},
	{
		src: GithubIcon,
		alt: 'Github icon',
		text: 'Sign in with Github',
	},
];

const inputs = [
	{
		label: 'Username',
		id: 'username',
		type: 'text',
		placeholder: '@Maryjoe1',
		name: 'username',
	},
	{
		label: 'Email',
		id: 'email',
		type: 'text',
		placeholder: 'example@gmail.com',
		name: 'email',
	},
	{
		label: 'Password',
		id: 'password',
		type: 'password',
		placeholder: '*******',
		canBeHidden: true,
		name: 'password',
	},
	{
		label: 'Confirm Password',
		id: 'confirm-password',
		type: 'password',
		placeholder: '*******',
		canBeHidden: true,
		name: 'confirmPassword',
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
				{' '}
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
		confirmPassword: '',
	});

	// form errors
	const [errors, setErrors] = useState(null);
	const [serverResponse, setServerResponse] = useState('');

	const {
		dispatch,
		state: { loading },
	} = useContext(AppContext);
	const navigate = useNavigate();

	const { modal, showModal } = useModal();

	const handleSignUp = async (event) => {
		event.preventDefault();
		dispatch({
			type: LOADING,
			payload: true,
		});

		const formErrors = validate(input);

		if (!formErrors) {
			try {
				const { data } = await axios.post(
					'https://pacific-peak-54505.herokuapp.com/auth/signup',
					input
				);

				if (data.status_code && data.status_code === 400) {
					setServerResponse(
						data?.detail?.msg || 'server error, please try again later'
					);
					showModal();
					dispatch({
						type: LOADING,
						payload: false,
					});
					return;
				}

				setServerResponse(data?.Message);
				showModal();

				localStorage.setItem('user', JSON.stringify(data.data));
				localStorage.setItem('token', data.Token);

				dispatch({
					type: USER_SIGNED_UP,
					payload: data,
				});
				dispatch({
					type: LOADING,
					payload: false,
				});

				navigate('/');
				window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
			} catch (error) {
				setServerResponse(
					error?.response?.data?.detail ||
						'server error, please try again later'
				);
				showModal();
				dispatch({
					type: LOADING,
					payload: false,
				});
			}
		} else {
			setErrors(formErrors);
			dispatch({
				type: LOADING,
				payload: false,
			});
		}
	};

	return (
		<>
			{modal && <AuthModal text={serverResponse} />}

			<AuthPage
				pageTitle="Create an Account"
				authAltText="Or Sign up with"
				inputs={inputs}
				authOptions={signUpOptions}
				inputCheckbox={<InputCheckbox />}
				buttonLabel={loading ? 'please wait' : 'Sign up'}
				onChange={(event) => formInputHandler(event, setErrors, setInput)}
				onSubmit={handleSignUp}
				errors={errors}
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
		</>
	);
}

export default SignUp;
