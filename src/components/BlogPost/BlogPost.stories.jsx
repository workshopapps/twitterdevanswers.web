import React from 'react';
import image from '../../images/rectangle1.png';
import BlogPost from '.';

const defaultArg = {
	component: BlogPost,
	title: 'BlogPost',
};

export default defaultArg;

function Template(args) {
	const { link, image: _image, imageAlt, title, date } = args;

	return (
		<BlogPost
			link={link}
			image={_image}
			imageAlt={imageAlt}
			title={title}
			date={date}
		/>
	);
}

export const Default = Template.bind({});
Default.args = {
	image,
	imageAlt: '8 Best Programming Languages For Maths ',
	title: 'Blog Post',
	date: 'October 9, 2022',
	link: '#link',
};
