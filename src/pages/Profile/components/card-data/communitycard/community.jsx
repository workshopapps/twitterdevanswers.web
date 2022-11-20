import React from 'react';
import i4g from '../../../assets/i4g.png';
import hng from '../../../assets/hng.png';
import devask from '../../../assets/devask.png';
import './community.css';

function CommunityCard() {
	return (
		<div className="community-card">
			<div className="community-card__wrapper">
				<div className="community__row">
					<div className="community-icon__wrapper">
						<img src={devask} alt="" className="community__icon" />
					</div>
					<div className="community-data">150k</div>
				</div>
				<div className="community__row">
					<div className="community-icon__wrapper">
						<img src={hng} alt="" className="community__icon" />
					</div>
					<div className="community-data">400k</div>
				</div>
				<div className="community__row">
					<div className="community-icon__wrapper">
						<img src={i4g} alt="" className="community__icon" />
					</div>
					<div className="community-data">4200k</div>
				</div>
			</div>
		</div>
	);
}

export default CommunityCard;
