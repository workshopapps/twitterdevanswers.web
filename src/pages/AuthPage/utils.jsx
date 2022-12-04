/* eslint-disable camelcase */
import { useState } from 'react';

export function isEmailValid(email) {
	const emailRegexp =
		// eslint-disable-next-line
		/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;
	return emailRegexp.test(email);
}

export const validateLogIn = (inputs) => {
	const formErrors = {};

	const { username, password } = inputs;

	if (username?.trim() === '')
		formErrors.username = `please enter your username or email`;

	if (password === '') formErrors.password = `please enter a password`;

	return Object.keys(formErrors).length === 0 ? null : formErrors;
};

export const validateSignUp = (inputs) => {
	const formErrors = {};

	const {
		username,
		email,
		password,
		confirmPassword,
		email_verification_code,
	} = inputs;

	if (username?.trim() === '')
		formErrors.username = `please enter your username`;

	if (email_verification_code?.trim() === '')
		formErrors.email_verification_code = `please input verification code`;

	if (!isEmailValid(email)) {
		formErrors.email = `please enter a valid email address`;
	}

	if (password === '') formErrors.password = `please enter a password`;

	if (confirmPassword && confirmPassword !== password)
		formErrors.confirmPassword = `passwords do not match`;

	return Object.keys(formErrors).length === 0 ? null : formErrors;
};

export const useModal = () => {
	const [modal, setModal] = useState(false);

	function showModal() {
		setModal(true);
		setTimeout(() => {
			setModal(false);
		}, 2000);
	}

	return { modal, showModal };
};

export const formInputHandler = (event, setErrors, setInput) => {
	const { value, name } = event.target;

	setErrors((prev) => ({ ...prev, [name]: '' }));

	setInput((prev) => ({
		...prev,
		[name]: value,
	}));
};
