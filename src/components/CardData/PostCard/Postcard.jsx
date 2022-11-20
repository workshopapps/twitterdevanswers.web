import React from 'react';
import Post from './postcard.module.css';
import posts from './posts.json';
import search from '../../../assets/search-normal.png';
import PostData from './Postdata';

function CardPost() {
	const data = posts;
	return (
		<div className={Post.cardpost}>
			<div className={Post.posttopnav}>
				<div className={Post.postnav}>
					<div className={`${Post.links} ${Post.linksactive}`}>All</div>
					<div className={`${Post.links} ${Post.linksnotactive}`}>
						Questions
					</div>
					<div className={`${Post.links} ${Post.linksnotactive}`}> Answers</div>
					<div className={`${Post.links} ${Post.linksnotactive}`}>Tags</div>
				</div>
				<div className={Post.search}>
					<div className={Post.search__iconwrapper}>
						<img src={search} alt="" className={Post.searchicon} />
					</div>
					<input type="text" className={Post.search__input} />
				</div>
			</div>
			<div className={Post.postdata__wrapper}>
				<PostData posts={data} />
			</div>
			<div className={Post.postbtn__wrapper}>
				<div className={`${Post.post__btndisable} ${Post.post__btn}`}>prev</div>
				<div className={`${Post.post__btnactive} ${Post.post__btn}`}>next</div>
			</div>
		</div>
	);
}

export default CardPost;
