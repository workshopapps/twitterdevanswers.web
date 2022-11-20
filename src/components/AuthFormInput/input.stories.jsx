import React from 'react';
import Input from '.';

export default {
	title: 'components/Input',
	component: Input,
};

function Template(args) {
	const { label, id, type, placeholder, canBeHidden } = args;
	return (
		<Input
			label={label}
			id={id}
			type={type}
			placeholder={placeholder}
			canBeHidden={canBeHidden}
		/>
	);
}

export const Fullname = Template.bind({});

Fullname.args = {
	label: 'Fullname',
	id: 'fullname',
	type: 'text',
	placeholder: 'John Doe',
};

export const Email = Template.bind({});

Email.args = {
	label: 'Email',
	id: 'email',
	type: 'email',
	placeholder: 'test@email.com',
};

export const Password = Template.bind({});

Password.args = {
	label: 'Password',
	id: 'password',
	type: 'password',
	placeholder: '********',
	canBeHidden: true,
};
