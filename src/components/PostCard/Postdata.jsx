/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import Post from './postcard.module.css';

function PostData({ posts, initCount, finalCount }) {
	const Count = 2;
	return (
		<div className={Post.posts}>
			{posts.slice(initCount, finalCount).map((a, b) => (
				<div key={`${a} ${Count + b}`} className={Post.data}>
					{a.type === 'question' ? (
						<div className={`${Post.type} ${Post.question}`}>Q</div>
					) : a.type === 'answer' ? (
						<div className={`${Post.type} ${Post.answer}`}>A</div>
					) : a.type === 'tags' ? (
						<div className={`${Post.type} ${Post.answer}`}>T</div>
					) : null}
					<div className={Post.text__wrapper}>
						<div className={Post.text}>{a.text}</div>
						<div className={Post.date}>{a.date}</div>
					</div>
				</div>
			))}
		</div>
	);
}
PostData.propTypes = {
	posts: PropTypes.instanceOf(Array).isRequired,
	initCount: PropTypes.number.isRequired,
	finalCount: PropTypes.number.isRequired,
};
export default PostData;
