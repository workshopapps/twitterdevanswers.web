/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Googleicon from '../../../assets/auth-images/google.svg';
import GithubIcon from '../../../assets/auth-images/github.svg';
import { AppContext } from '../../../store/AppContext';
import { LOADING, USER_SIGNED_UP } from '../../../store/actionTypes';
import {
	formInputHandler,
	isEmailValid,
	useModal,
	validateSignUp,
} from '../utils';
import AuthModal from '../AuthModal';
import Button from '../../../components/AuthFormButton';
import Input from '../Input';
import styles from './styles.module.css';

function SignUp() {
	const [input, setInput] = useState({
		username: '',
		email: '',
		email_verification_code: '',
		password: '',
		confirmPassword: '',
	});

	// form errors
	const [errors, setErrors] = useState({});
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

		const formErrors = validateSignUp(input);

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

	const handleVerification = async () => {
		if (!isEmailValid(input.email)) {
			setErrors((prev) => ({
				...prev,
				email: `please enter a valid email address`,
			}));
		} else {
			const { data } = await axios.post(
				'https://pacific-peak-54505.herokuapp.com/auth/send_email_code',
				{ email: input.email }
			);

			setServerResponse(data.msg);
			showModal();
		}
	};

	return (
		<>
			{modal && <AuthModal text={serverResponse} />}

			<form className={styles.signup} onSubmit={handleSubmit}>
				<div className={styles.header}>
					<h3>Hello!</h3>
					<p>Welcome to a whole new technical experience.</p>
				</div>
				<div className={styles.input}>
					<div>
						<Input
							id="email"
							label="Email Address"
							name="email"
							placeholder="janedoe@example.com"
							type="text"
							value={input.email}
							handleInputChange={(event) =>
								formInputHandler(event, setErrors, setInput)
							}
							error={errors && errors.email}
						/>
					</div>
					<div className={styles.verification}>
						<div className={styles.verificationInput}>
							<Input
								label="Verification code"
								id="email_verification_code"
								name="email_verification_code"
								placeholder=""
								type="text"
								value={input.email_verification_code}
								handleInputChange={(event) =>
									formInputHandler(event, setErrors, setInput)
								}
								error={errors && errors.email_verification_code}
							/>
						</div>
						<button
							className={styles.verificationBtn}
							type="button"
							onClick={handleVerification}
						>
							send code
						</button>
					</div>
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
					<div>
						<Input
							id="confirmPassword"
							label="Confirm Password"
							name="confirmPassword"
							placeholder="********"
							type="password"
							value={input.confirmPassword}
							handleInputChange={(event) =>
								formInputHandler(event, setErrors, setInput)
							}
							error={errors && errors.confirmPassword}
						/>
					</div>
				</div>
				<div className={styles.btn}>
					<Button label={loading ? 'please wait' : 'Create Account'} />
				</div>
				<div className={styles.bottomText}>
					<p>
						Already have an account?{' '}
						<Link className={styles.link} to="/login">
							Log In
						</Link>
					</p>
				</div>
			</form>
		</>
	);
}

export default SignUp;
