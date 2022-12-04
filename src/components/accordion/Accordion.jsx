import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import arrowdown from '../../assets/profile-images/arrowdown1.png';

import './Accordion.css';

function Accordion(props) {
	const { label, children } = props;

	const [isOpen, setIsOpen] = useState(false);

	const [setHeight, setHeightActive] = useState('0px');


	const parentRef = useRef(null);

	const handleClick = () => {
		setIsOpen(!isOpen);
		setHeightActive(isOpen ? '0px' : `${parentRef.current.scrollHeight}px`);		
	};

	return (
		<div className="accordion__section">
			<button type="button" className="toggle" onClick={handleClick}>
				<p className = 'text_label' >{label}</p>
				<div className = 'arrowdown_container'>
				<img src={arrowdown} alt="arrowdown" className={isOpen && 'rotate'} />
				</div>
			</button>
			<div
				className="content-parent"
				ref={parentRef}
				style={{ height: `${setHeight}` }}
			> <hr className = 'horizon' />
				<div className="content">{children}</div>
			</div>
		</div>
	);
}

Accordion.propTypes = {
	label: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired,
};
export default Accordion;
