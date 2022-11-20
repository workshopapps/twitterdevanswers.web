/* eslint-disable import/extensions */
import React from 'react';
import Statuscard from '../CardData/StatsCard/stats';
import Communitycard from '../CardData/CommunityCard/community';
import CardHeader from '../CardHeader/index';
import messge from '../../assets/message.png';
import bookmark from '../../assets/bookmark.png';
import clipboard from '../../assets/clipboard-text.png';
import Section2 from './index.module.css';
import CardExtra from '../CardData/ExtraCard/Extracard';
import CardPost from '../CardData/PostCard/Postcard';

function ProfileCard() {
	return (
		<div className={Section2.profile__cardwrapper}>
			<div className={Section2.card}>
				<CardHeader header="stats" />
				<div className={Section2.stats__data}>
					<Statuscard
						first={{ value: 45, text: 'Questions' }}
						second={{ value: 1500, text: 'Answers' }}
					/>
					<Statuscard
						first={{ value: '33,800', text: 'Reached' }}
						second={{ value: 6500, text: 'Tokens Earned' }}
					/>
				</div>
			</div>
			<div className={`${Section2.card} ${Section2.posts__wrapper}`}>
				<CardHeader header="Top posts" />
				<CardPost />
			</div>
			<div className={Section2.card}>
				<CardHeader header="Communities" />
				<Communitycard />
			</div>
			<div className={Section2.card}>
				<div className={Section2.cardbtn__wrapper}>
					<CardExtra text="Topics" image={messge} />
					<CardExtra text="Bookmarks" image={bookmark} />
					<CardExtra text="Lists" image={clipboard} />
				</div>
			</div>
		</div>
	);
}

export default ProfileCard;
