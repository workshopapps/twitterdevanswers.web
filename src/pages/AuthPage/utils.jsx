import { useState } from 'react';

function isEmailValid(email) {
	const emailRegexp =
		// eslint-disable-next-line
		/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;
	return emailRegexp.test(email);
}

export const validate = (inputs) => {
	const formErrors = {};

	const { username, email, password, confirmPassword } = inputs;

	if (username?.trim() === '')
		formErrors.username = `please enter your username`;

	if (email && !isEmailValid(email)) {
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
