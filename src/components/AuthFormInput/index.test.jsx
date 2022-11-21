import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthFormInput from '.';

// eslint-disable-next-line no-undef
describe('AuthFormInput Component', () => {
	// eslint-disable-next-line no-undef
	test('renders Email input field', () => {
		render(
			<AuthFormInput
				id="email"
				label="Email"
				type="email"
				placeholder="example@gmail.com"
			/>
		);

		const inputLabel = screen.getByText('Email');
		// eslint-disable-next-line no-undef
		expect(inputLabel).toBeInTheDocument();
	});

	// eslint-disable-next-line no-undef
	test('renders Fullname input field', () => {
		render(
			<AuthFormInput
				id="fullname"
				label="Fullname"
				type="text"
				placeholder="Enter your full name"
			/>
		);

		const inputLabel = screen.getByText('Fullname');
		// eslint-disable-next-line no-undef
		expect(inputLabel).toBeInTheDocument();
	});

	// eslint-disable-next-line no-undef
	test('renders Username input field', () => {
		render(
			<AuthFormInput
				id="username"
				label="Username"
				type="text"
				placeholder="@Maryjoe1"
			/>
		);

		const inputLabel = screen.getByText('Username');
		// eslint-disable-next-line no-undef
		expect(inputLabel).toBeInTheDocument();
	});

	// eslint-disable-next-line no-undef
	test('renders Password input field', () => {
		render(
			<AuthFormInput
				id="password"
				label="Password"
				type="password"
				placeholder="*******"
			/>
		);

		const inputLabel = screen.getByText('Password');
		// eslint-disable-next-line no-undef
		expect(inputLabel).toBeInTheDocument();
	});
});
