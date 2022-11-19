import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './styles.css';

function Button(props) {
	const { outline, component, children, type, href } = props;
	const className = classNames('button', { 'button--outline': outline });

	if (component === 'a') {
		return (
			<a className={className} href={href}>
				{children}
			</a>
		);
	}

	return (
		<button
			type={type === 'button' ? 'button' : 'submit'}
			className={className}
		>
			{children}
		</button>
	);
}

Button.defaultProps = {
	outline: false,
	component: null,
	href: '#href',
	type: 'button',
	children: null,
};

Button.propTypes = {
	outline: PropTypes.bool,
	component: PropTypes.oneOf(['a', 'button']),
	href: PropTypes.string,
	type: PropTypes.string,
	children: PropTypes.oneOf([
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.string),
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
	]),
};

export default Button;
