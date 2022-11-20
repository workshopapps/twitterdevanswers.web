import React from 'react';
import './cardHeader.css';
import PropTypes from 'prop-types';

function CardHeader({ header }) {
	return <div className="card__header">{header}</div>;
}
CardHeader.propTypes = {
	header: PropTypes.string.isRequired,
};
export default CardHeader;
