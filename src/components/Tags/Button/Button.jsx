import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import BUTTON_TYPES from './Data';

function Button(props) {
	const { type, btnText, onClick } = props;

	const getButtonClass = () => {
		switch (type) {
			case BUTTON_TYPES.PRIMARY:
				return 'primaryBtn button';

			case BUTTON_TYPES.SECONDARY:
				return 'secondaryBtn';
			default:
				return 'tetiartBtn';
		}
	};

	return (
		<button
			type="button"
			onClick={onClick}
			className={`${getButtonClass()} btn`}
		>
			{btnText}
		</button>
	);
}

export default Button;

Button.propTypes = {
	type: PropTypes.string.isRequired,
	btnText: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	onClick: undefined,
};
