/* eslint-disable react/prop-types */
import React from 'react';
import './extracard.css';
import PropTypes from 'prop-types';

function CardExtra({ image, text }) {
	return (
		<div className="card-extra">
			<div className="card-extra__btn">
				<div className="card-extra__icon-wrapper">
					<img src={image} alt="" className="card-extra__icon" />
				</div>
				<div className="card-extra__txt">{text}</div>
			</div>
		</div>
	);
}
CardExtra.propTypes = {
	image: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
export default CardExtra;
