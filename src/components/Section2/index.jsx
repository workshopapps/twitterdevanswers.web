/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Statuscard from '../StatsCard/stats';
import Communitycard from '../CommunityCard/community';
import CardHeader from '../CardHeader/index';
import messge from '../../assets/profile-images/message.png';
import bookmark from '../../assets/profile-images/bookmark.png';
import clipboard from '../../assets/profile-images/clipboard-text.png';
import Section2 from './index.module.css';
import CardExtra from '../ExtraCard/Extracard';
import CardPost from '../PostCard/Postcard';

function ProfileCard({ user }) {
	const { questions_count, answers_count, reached_count, tokens_count } = user;
	return (
		<div className={Section2.profile__cardwrapper}>
			<div className={Section2.card}>
				<CardHeader header="stats" />
				<div className={Section2.stats__data}>
					<Statuscard
						first={{ value: `${questions_count}`, text: 'Questions' }}
						second={{ value: `${answers_count}`, text: 'Answers' }}
					/>
					<Statuscard
						first={{ value: `${reached_count}`, text: 'Reached' }}
						second={{ value: `${tokens_count}`, text: 'Tokens Earned' }}
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

ProfileCard.propTypes = {
	user: PropTypes.shape({
		questions_count: PropTypes.number.isRequired,
		answers_count: PropTypes.number.isRequired,
		reached_count: PropTypes.number.isRequired,
		tokens_count: PropTypes.number.isRequired,
	}).isRequired,
};
