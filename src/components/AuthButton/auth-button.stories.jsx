import React from 'react';
import AuthButton from '.';
import GoogleIcon from '../../assets/auth-images/google.svg';
import GithubIcon from '../../assets/auth-images/github.svg';
import MicrosoftIcon from '../../assets/auth-images/microsoft.svg';

export default {
	title: 'components/AuthButton',
	component: AuthButton,
};

function Template(args) {
	const { text, src } = args;
	return <AuthButton text={text} src={src} />;
}

export const Google = Template.bind({});

Google.args = {
	text: 'Sign up with Google',
	src: GoogleIcon,
};

export const Github = Template.bind({});

Github.args = {
	text: 'Sign up with Github',
	src: GithubIcon,
};

export const Microsoft = Template.bind({});

Microsoft.args = {
	text: 'Sign up with Microsoft',
	src: MicrosoftIcon,
};
