/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Statuscard from '../StatsCard/stats';

import CardHeader from '../CardHeader/index';

import Section2 from './index.module.css';

import CardPost from '../PostCard/Postcard';

function ProfileCard({ user }) {
	const { questions_count, answers_count, tokens_count } = user;
	return (
		<div className={Section2.profile__cardwrapper}>
			<div className={Section2.card}>
				<CardHeader header="stats" />
				<div className={Section2.stats__data}>
					<Statuscard
						first={{ value: `${answers_count}`, text: 'Answers' }}
						second={{ value: `${tokens_count}`, text: 'Tokens Earned' }}
						third={{ value: `${questions_count}`, text: 'Questions' }}
					/>
				</div>
			</div>
			<div className={`${Section2.card} ${Section2.posts__wrapper}`}>
				<CardHeader header="Top posts" />
				<CardPost />
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
