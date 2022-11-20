import React from 'react';
import i4g from '../../../assets/i4g.png';
import hng from '../../../assets/hng.png';
import devask from '../../../assets/devask.png';
import Community from './community.module.css';

function CommunityCard() {
	return (
		<div className={Community.communitycard}>
			<div className={Community.communitycard__wrapper}>
				<div className={Community.community__row}>
					<div className={Community.communityicon__wrapper}>
						<img src={devask} alt="" className={Community.community__icon} />
					</div>
					<div className={Community.communitydata}>150k</div>
				</div>
				<div className={Community.community__row}>
					<div className={Community.communityicon__wrapper}>
						<img src={hng} alt="" className={Community.community__icon} />
					</div>
					<div className={Community.communitydata}>400k</div>
				</div>
				<div className={Community.community__row}>
					<div className={Community.communityicon__wrapper}>
						<img src={i4g} alt="" className={Community.community__icon} />
					</div>
					<div className={Community.communitydata}>4200k</div>
				</div>
			</div>
		</div>
	);
}

export default CommunityCard;
