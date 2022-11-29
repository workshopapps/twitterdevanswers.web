import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import arrowdown from '../../assets/profile-images/arrowdown1.png';

import './Accordion.css';

function Accordion(props) {
	const { label, children } = props;

	const [isOpen, setIsOpen] = useState(false);

	const [setHeight, setHeightActive] = useState('0px');

	const [setRotate, setRotateActive] = useState('arrowUp');

	const parentRef = useRef(null);

	const handleClick = () => {
		setIsOpen(!isOpen);
		setHeightActive(!isOpen ? '0px' : `${parentRef.current.scrollHeight}px`);
		setRotateActive(setIsOpen === isOpen ? 'arrowUp' : 'arrowUp rotate');
	};

	return (
		<div className="accordion__section">
			<button type="button" className="toggle" onClick={handleClick}>
				{label}
				<img src={arrowdown} alt="arrowdown" className={`${setRotate}`} />
			</button>
			<div
				className="content-parent"
				ref={parentRef}
				style={{ height: `${setHeight}` }}
			>
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
