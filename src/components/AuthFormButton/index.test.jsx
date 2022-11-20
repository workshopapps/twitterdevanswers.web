import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthFormButton from '.';
// eslint-disable-next-line import/no-extraneous-dependencies
// import describe from 'jest';

// eslint-disable-next-line no-undef
describe('AuthFormButton Component', () => {
	// eslint-disable-next-line no-undef
	test('renders Login button', () => {
		render(<AuthFormButton label="Login" />);

		const buttonContent = screen.getByText('Login');
		// eslint-disable-next-line no-undef
		expect(buttonContent).toBeInTheDocument();
	});

	// eslint-disable-next-line no-undef
	test('renders Sign up button', () => {
		render(<AuthFormButton label="Sign up" />);

		const buttonContent = screen.getByText('Sign up');
		// eslint-disable-next-line no-undef
		expect(buttonContent).toBeInTheDocument();
	});
});
