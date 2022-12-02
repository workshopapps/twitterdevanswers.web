import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Googleicon from '../../../assets/auth-images/google.svg';
import GithubIcon from '../../../assets/auth-images/github.svg';
import AuthPage from '..';
import { AppContext } from '../../../store/AppContext';
import { USER_LOGGED_IN } from '../../../store/actionTypes';
import { validate } from '../utils';
import styles from './styles.module.css';
import AuthModal from '../AuthModal';

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
];

const inputs = [
	{
		label: 'Username/Email',
		id: 'email',
		type: 'text',
		placeholder: 'name/test@gmail.com',
		name: 'email',
	},
	{
		label: 'Password',
		id: 'password',
		type: 'password',
		placeholder: '*******',
		name: 'password',
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
				{' '}
				Keep me logged in
			</label>
		</div>
	);
}

function Login() {
	const [input, setInput] = useState({
		password: '',
		email: '',
	});
	const [errors, setErrors] = useState(null);
	const [serverResponse, setServerResponse] = useState('');
	const [modal, setModal] = useState(false);

	const { dispatch } = useContext(AppContext);
	const navigate = useNavigate();

	const showModal = () => {
		setModal(true);
		setTimeout(() => {
			setModal(false);
		}, 3000);
	};

	const changeHandler = (event) => {
		const { value, name } = event.target;

		if (errors) setErrors((prev) => ({ ...prev, [name]: '' }));

		setInput((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleLogIn = async (event) => {
		event.preventDefault();

		const formErrors = validate(input);

		if (!formErrors) {
			input.username = input.email;
			delete input.email;

			const formData = new FormData();

			Object.keys(input).forEach((key) => {
				formData.append(key, input[key]);
			});

			try {
				const response = await axios.post(
					'https://pacific-peak-54505.herokuapp.com/auth/signin',
					formData
				);

				localStorage.setItem('token', response.data.access_token);

				dispatch({
					type: USER_LOGGED_IN,
					payload: response.data,
				});

				navigate('/');
				window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
			} catch (error) {
				setServerResponse(
					error?.response?.data?.detail ||
						'server error, please try again later'
				);
				showModal();
				input.email = input.username;
				delete input.username;
			}
		} else {
			setErrors(formErrors);
		}
	};

	return (
		<>
			{modal && <AuthModal text={serverResponse} />}
			<AuthPage
				inputs={inputs}
				authOptions={signInOptions}
				pageTitle="Welcome back!"
				authAltText="Or Log in with"
				inputCheckbox={<InputCheckbox />}
				buttonLabel="Login"
				onChange={changeHandler}
				onSubmit={handleLogIn}
				errors={errors}
			>
				<p className={styles['alt-auth']}>
					Don&apos;t have an account?{' '}
					<Link className={styles['alt-auth-link']} to="/sign-up">
						Sign Up
					</Link>
				</p>
			</AuthPage>
		</>
	);
}

export default Login;
