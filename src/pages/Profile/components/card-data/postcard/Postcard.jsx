import React from 'react';
import './postcard.css';
import posts from './posts.json';
import search from '../../../assets/search-normal.png';
import PostData from './postdata';

function CardPost() {
	const data = posts;
	return (
		<div className="card-post">
			<div className="post-topnav">
				<div className="post-nav">
					<div className="links links--active">All</div>
					<div className="links links--notactive">Questions</div>
					<div className="links links--notactive"> Answers</div>
					<div className="links links--notactive">Tags</div>
				</div>
				<div className="search">
					<div className="search__icon-wrapper">
						<img src={search} alt="" className="search-icon" />
					</div>
					<input type="text" className="search__input" />
				</div>
			</div>
			<div className="post-data__wrapper">
				<PostData posts={data} />
			</div>
			<div className="post-btn__wrapper">
				<div className="post__btn--disable post__btn">prev</div>
				<div className="post__btn--active post__btn">next</div>
			</div>
		</div>
	);
}

export default CardPost;
