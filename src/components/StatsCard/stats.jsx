/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Stat from './statscard.module.css';

function Statuscard({ first, second, third }) {
	return (
		<div className={Stat.stats__txtwrapper}>
			<div className={Stat.statsrow}>
				<div className={Stat.statscol}>
					<div className={Stat.stats__value}>{first.value}</div>
					<div className={Stat.stat__txt}>{first.text}</div>
				</div>
				<div className={Stat.statscol}>
					<div className={Stat.stats__value}>{second.value}</div>
					<div className={Stat.stat__txt}>{second.text}</div>
				</div>
				<div className={Stat.statscol}>
					<div className={Stat.stats__value}>{third.value}</div>
					<div className={Stat.stat__txt}>{third.text}</div>
				</div>
			</div>
		</div>
	);
}
Statuscard.protoTypes = {
	first: PropTypes.instanceOf(Object),
	second: PropTypes.instanceOf(Object),
};
export default Statuscard;
