/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Extra from './extracard.module.css';

function CardExtra({ image, text }) {
	return (
		<div className={Extra.cardextra}>
			<div className={Extra.cardextra__btn}>
				<div className={Extra.cardextra__iconwrapper}>
					<img src={image} alt="" className={Extra.cardextra__icon} />
				</div>
				<div className={Extra.cardextra__txt}>{text}</div>
			</div>
		</div>
	);
}
CardExtra.propTypes = {
	image: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
export default CardExtra;
