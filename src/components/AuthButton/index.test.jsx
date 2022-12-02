import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthButton from '.';
import GoogleIcon from '../../assets/auth-images/google.svg';
import GithubIcon from '../../assets/auth-images/github.svg';
import MicrosoftIcon from '../../assets/auth-images/microsoft.svg';
// eslint-disable-next-line import/no-extraneous-dependencies
// import describe from 'jest';

// eslint-disable-next-line no-undef
describe('AuthButton Component', () => {
	// eslint-disable-next-line no-undef
	test('renders Google Auth button', () => {
		render(
			<AuthButton
				text="Sign up using Google"
				src={GoogleIcon}
				alt="Google Icon"
			/>
		);

		const buttonContent = screen.getByText('Sign up using Google');
		// eslint-disable-next-line no-undef
		expect(buttonContent).toBeInTheDocument();
	});

	// eslint-disable-next-line no-undef
	test('renders Github Auth button', () => {
		render(
			<AuthButton
				text="Sign up using Github"
				src={GithubIcon}
				alt="Github Icon"
			/>
		);

		const buttonContent = screen.getByText('Sign up using Github');
		// eslint-disable-next-line no-undef
		expect(buttonContent).toBeInTheDocument();
	});

	// eslint-disable-next-line no-undef
	test('renders Microsoft Auth button', () => {
		render(
			<AuthButton
				text="Sign up using Microsoft"
				src={MicrosoftIcon}
				alt="Microsoft Icon"
			/>
		);

		const buttonContent = screen.getByText('Sign up using Microsoft');
		// eslint-disable-next-line no-undef
		expect(buttonContent).toBeInTheDocument();
	});
});
