import React from 'react';
import Button from '../components/Button';

export default {
	title: 'components/Button',
	component: Button,
};

function Template(args) {
	const { label } = args;
	return <Button label={label} />;
}

export const Login = Template.bind({});

Login.args = {
	label: 'Log in',
};

export const SignUp = Template.bind({});

SignUp.args = {
	label: 'Sign Up',
};
