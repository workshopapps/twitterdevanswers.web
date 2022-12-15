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
import logo from '../../../assets/auth-images/logo.png';
import topleftcircle from '../../../assets/auth-images/topleftcircle.png';
import midleftcircle from '../../../assets/auth-images/midleftcircle.png';
import toprightblock from '../../../assets/auth-images/toprightblock.png';
import toprightslant from '../../../assets/auth-images/toprightslant.png';

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
				localStorage.setItem('user', JSON.stringify(response.data));
				// console.log('token', response.data.access_token);

				dispatch({
					type: USER_LOGGED_IN,
					payload: response.data,
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

	return (
		<>
			{modal && <AuthModal text={serverResponse} />}
			<div className={styles.formexternal}>
				<form className={styles.signin} onSubmit={handleSubmit}>
						<img src={topleftcircle} alt="" className={styles.topleft}/>
						<img src={midleftcircle} alt="" className={styles.midleft}/>
						<img src={toprightblock} alt="" className={styles.topblock}/>
						<img src={toprightslant} alt="" className={styles.topslant}/>
						 <div className={styles.formmargin1}>
	
				<div className={styles.header}>
					<img src={logo} alt="devask" />
					<h3>Hello Again!</h3>
					<p>Welcome back, please put in your details</p>
				</div>
				<div className={styles.input}>
					<div>
						<Input
							id="username"
							label="E-mail/Username"
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
					{" "}
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
					<div className={` ${styles['form-group__checkbox']}`}>
						<label className={styles['form-group__checkbox-label']} 
								htmlFor='keep-logged-in'>
						<input
							type="checkbox"
							className={styles.input__checkbox}
							id="keep-logged-in"
						/>
						Remember me
						{/* <span
							className={styles['form-group__checkbox-label']}
						>
							Remember me
						</span> */}
						</label>
							
						<Link className={styles['form-group__checkbox-label']} to="/sign-up">
							{/* Forgot Password? */}
						</Link>

					</div>
				</div>
				<div className={styles.btn}>
					<Button label={loading ? 'please wait' : 'LOGIN'} />
				</div>
				<div className={styles.bottomText}>
					<p>
						Don&apos;t have an account?{' '}
						<Link className={styles.link} to="/sign-up">
							Sign Up
						</Link>
					</p>
				</div>
				</div>
			</form>
		</div>

			{/* <form className={styles.login} onSubmit={handleSubmit}>
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

				<div>OR</div>

				<div>
					<AuthOptions />
				</div> 
			</form> */}
		</>
	);
}

export default Login;