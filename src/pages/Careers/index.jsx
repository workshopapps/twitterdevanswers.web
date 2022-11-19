import React from 'react';

import classes from './Careers.module.css';

import Hero from '../../components/CareersComp/Hero';
import Content from '../../components/CareersComp/Content';
import OpenPOS from '../../components/CareersComp/OpenPOS';

function Careers() {
	return (
		<div className={classes.Careers}>
			<Hero />
			

			{/* Selection section */}

			<div className={classes.selection}>
				<div className={classes.selectbox}>
					<select>
						<option hidden selected disabled>
							Choose Job Category
						</option>
						<option>Choose Job Category</option>
						<option>Choose Job Category</option>
					</select>
					<select>
						<option hidden selected disabled>
							Choose Location{' '}
						</option>
						<option>Choose Job Category</option>
						<option>Choose Job Category</option>
					</select>
					<button type="button">Search</button>
				</div>
				<p>
					We solve problems across all boarders of the globe, with our remote
					work culture. join us today!
				</p>
			</div>

			{/* Contents */}
			<Content />

			{/* open position */}

			<section>
				<OpenPOS />
			</section>
		</div>
	);
}

export default Careers;
