import React from 'react';
import PropTypes from 'prop-types';
import Post from './postcard.module.css';

function PostData({ posts }) {
	const Count = 2;
	return (
		<div className={Post.posts}>
			{posts.map((a,b) => (
				
				<div key={`${a} ${Count+b}`} className={Post.data}>
					{a.type === 'question' ? (
						<div className={`${Post.type} ${Post.question}`}>Q</div>
					) : (
						<div className={`${Post.type} ${Post.answer}`}>A</div>
					)}
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
};
export default PostData;
