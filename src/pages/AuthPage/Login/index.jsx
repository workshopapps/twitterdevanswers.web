import React, {useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import Googleicon from '../../../assets/google.svg';
import GithubIcon from '../../../assets/github.svg';
import Microsoficon from '../../../assets/microsoft.svg';
import AuthPage from '..';
import { AppContext } from '../../../store/AppContext';
import { USER_LOGGED_IN } from '../../../store/actionTypes';


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
				<input />
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
				type: USER_LOGGED_IN,
				payload: input,
			});

			navigate('/');
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		} catch (error) {
			throw new Error(error);
		}
	};

	return (
		<AuthPage
			inputs={inputs}
			authOptions={signInOptions}
			pageTitle="Welcome back!"
			authAltText="Or Log in with"
			inputCheckbox={<InputCheckbox />}
			buttonLabel="Login"
			onChange={changeHandler}
			onSubmit={handleLogIn}
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
