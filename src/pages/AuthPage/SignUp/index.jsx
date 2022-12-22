import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
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
import logo from '../../../assets/auth-images/logo.png';


function SignUp() {
	const [input, setInput] = useState({
		
		username: '',
		email: '',
		email_verification_code: '',
		password: '',
		confirmPassword: '',
	});
	const [isSent, setIsSent] = useState(false);
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
				const response = axios({
					method: 'post',
					url: 'https://api.devask.tech/auth/signup',
					data: input,
					headers: { 'Access-Control-Allow-Origin': '*' },
				});

				const { data } = await response;

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

				navigate('/dashboard');
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
				'https://api.devask.tech/auth/send_email_code',
				{ email: input.email }
			);
			setTimeout(() => {
				setIsSent(true);
			}, 1000);
			setServerResponse(data.msg);
		//	showModal();
		}
	};

	return (
		<>
			{modal && <AuthModal text={serverResponse} />}
	<div className={styles.formexternal}>
		<div className={styles.signup}>
		<div className={styles.header}>
			<img src={logo} alt="devask" />

			<h3>Hello!</h3>
			<p>Welcome to a whole new technical experience.</p>
		</div>

{!isSent ? (
	<form onSubmit={handleSubmit}>
		<div className={styles.input}>
		{/* {isCodeSend && <p className={styles.codeMessage}>{codeMessage}</p>} */}
		<label htmlFor="email">
			{/* Email */}
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
				required
				/>
		</label>
		<button
			className={styles.verificationBtn}
			type="button"
			onClick={handleVerification}
			>
			Send code
		</button>
		</div>
		{/* <button type="submit">Send Code</button> */}
	</form>
) : (
	<form onSubmit={handleSubmit}>
	 
	<div className={styles.formmargin1}>	
		<div className={styles.input}>

		{/* <p className={styles.signUpMessage}>{signUpMessage}</p> */}
		<label htmlFor="email">
			{/* Email Address */}
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
				required
				/>
		</label>

		<label htmlFor="username">
			{/* Username */}
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
				required
				/>
		</label>

		<label htmlFor="password">
		{/* //	Password */}
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
				required
				/>
		</label>

		<label htmlFor="confirmPassword">
		{/* //	Confirm Password */}
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
				required
				/>
		</label>

		<label htmlFor="verificationCode">
		{/* //	Verification Code */}
			
			<Input
				label="Verification code"
				id="email_verification_code"
				name="email_verification_code"
				type="text"
				placeholder="Verification Code sent to email"
				value={input.email_verification_code}
				handleInputChange={(event) =>
					formInputHandler(event, setErrors, setInput)
				}
				error={errors && errors.email_verification_code}
				required
			/>
		</label>
		</div>
		<br/>
		<div className={styles.btn}>
			<Button label={loading ? 'Creating account...' : 'Sign up'} />
		</div>
		<div className={styles.bottomText}>
			<p>
			Already have an account?{' '}
			<Link className={styles.link} to="/login">
				Log In
			</Link>
			</p>
		</div>
		{/* <button type="submit">Sign Up</button> */}
	</div>
	</form>
	
)}
	</div></div>
	</>
	);
}

export default SignUp;
