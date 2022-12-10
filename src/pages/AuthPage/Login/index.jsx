import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../../../store/AppContext';
import { LOADING, USER_LOGGED_IN } from '../../../store/actionTypes';
import { formInputHandler, useModal, validateLogIn } from '../utils';
import styles from './styles.module.css';
import AuthModal from '../AuthModal';
import Input from '../Input';
import Button from '../../../components/AuthFormButton';

function Login() {
	const [input, setInput] = useState({
		password: '',
		username: '',
	});
	const [errors, setErrors] = useState(null);
	const [serverResponse, setServerResponse] = useState('');

	const {
		dispatch,
		state: { loading },
	} = useContext(AppContext);
	const navigate = useNavigate();

	const { modal, showModal } = useModal();

	const handleSubmit = async (event) => {
		event.preventDefault();

		dispatch({
			type: LOADING,
			payload: true,
		});

		const formErrors = validateLogIn(input);

		if (!formErrors) {
			const formData = new FormData();

			Object.keys(input).forEach((key) => {
				formData.append(key, input[key]);
			});

			try {
				const response = await axios.post(
					'https://api.devask.hng.tech/auth/signin',
					formData
				);

				localStorage.setItem('token', response.data.access_token);
				console.log('token', response.data.access_token)

				dispatch({
					type: USER_LOGGED_IN,
					payload: response.data,
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
			<form className={styles.login} onSubmit={handleSubmit}>
				<div className={styles.header}>
					<h3>Hello!</h3>
					<p>Log back into your account.</p>
				</div>
				<div className={styles.input}>
					<div>
						<Input
							id="username"
							label="Username"
							name="username"
							placeholder="Username"
							type="text"
							value={input.username}
							handleInputChange={(event) =>
								formInputHandler(event, setErrors, setInput)
							}
							error={errors && errors.username}
						/>
					</div>
					<div>
						<Input
							id="password"
							label="Password"
							name="password"
							placeholder="********"
							type="password"
							value={input.password}
							handleInputChange={(event) =>
								formInputHandler(event, setErrors, setInput)
							}
							error={errors && errors.password}
						/>
					</div>
				</div>
				<div className={styles.btn}>
					<Button label={loading ? 'please wait' : 'Log In'} />
				</div>
				<div className={styles.bottomText}>
					<p>
						Don&apos;t have an account?{' '}
						<Link className={styles.link} to="/sign-up">
							Sign Up
						</Link>
					</p>
					<p>Forgot Password?</p>
				</div>

				{/* <div>OR</div>

				<div>
					<AuthOptions />
				</div> */}
			</form>
		</>
	);
}

export default Login;
