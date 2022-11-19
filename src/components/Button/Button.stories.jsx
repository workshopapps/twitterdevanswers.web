import React from 'react';
import Button from '.';

const defaultArg = {
	component: Button,
	title: 'Button',
};

export default defaultArg;

function Template(args) {
	const { outline, component, children, type, href } = args;

	return (
		<Button outline={outline} component={component} type={type} href={href}>
			{children}
		</Button>
	);
}

export const Default = Template.bind({});
Default.args = {
	children: 'Button',
};

export const Link = Template.bind({});
Link.args = {
	component: 'a',
	children: 'Button',
	href: '#button',
};

export const Outlined = Template.bind({});
Outlined.args = {
	children: 'Button',
	outline: true,
};
