import React from 'react';
import PropTypes from 'prop-types';
import Header from './cardHeader.module.css';

function CardHeader({ header }) {
	return <div className={Header.card__header}> {header}</div>;
}
CardHeader.propTypes = {
	header: PropTypes.string.isRequired,
};
export default CardHeader;
