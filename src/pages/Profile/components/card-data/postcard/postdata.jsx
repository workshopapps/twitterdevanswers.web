import React from 'react';
import PropTypes from 'prop-types';

function PostData({ posts }) {
	return (
		<div className="posts">
			{posts.map((a) => (
				<div key={a} className="data">
					{a.type === 'question' ? (
						<div className="type question">Q</div>
					) : (
						<div className="type answer">A</div>
					)}
					<div className="text__wrapper">
						<div className="text">{a.text}</div>
						<div className="date">{a.date}</div>
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
