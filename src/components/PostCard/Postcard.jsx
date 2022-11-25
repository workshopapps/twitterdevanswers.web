import React, { useState, useEffect } from 'react';
import Post from './postcard.module.css';
import posts from './posts.json';
import search from '../../assets/search-normal.png';
import PostData from './Postdata';

function CardPost() {
	const [data, setData] = useState(posts);
	const [searchValue, setSearchValue] = useState('');
	const [initCount, setInitCount] = useState(0);
	const [finalCount, setFinalCount] = useState(5);

	const handleFilter = (tagName) => {
		if (tagName === 'all') {
			setData(posts);
			setInitCount(0);
			setFinalCount(5);
		} else {
			setInitCount(0);
			setFinalCount(5);
			setData(posts.filter((datum) => datum.type === tagName));
		}
	};

	const handleChange = (event) => {
		setSearchValue(event.target.value);
		setData(posts.filter((datum) => datum.text.includes(searchValue)));
	};

	const handlePrevCount = () => {
		if (initCount >= 5) {
			setInitCount((prevCount) => prevCount - 5);
			setFinalCount((prevCount) => prevCount - 5);
		}
	};

	const handleNextCount = () => {
		if (finalCount < data.length) {
			setInitCount((prevCount) => prevCount + 5);
			setFinalCount((prevCount) => prevCount + 5);
		}
	};

	useEffect(() => {
		if (searchValue === '') {
			setData(posts);
		}
	}, [searchValue]);

	return (
		<div className={Post.cardpost}>
			<div className={Post.posttopnav}>
				<div className={Post.postnav}>
					<button
						className={`${Post.links} ${Post.linksactive}`}
						type="button"
						onClick={() => handleFilter('all')}
					>
						All
					</button>
					<button
						className={`${Post.links} ${Post.linksnotactive}`}
						type="button"
						onClick={() => handleFilter('question')}
					>
						Questions
					</button>
					<button
						className={`${Post.links} ${Post.linksnotactive}`}
						type="button"
						onClick={() => handleFilter('answer')}
					>
						{' '}
						Answers
					</button>
					<button
						className={`${Post.links} ${Post.linksnotactive}`}
						type="button"
						onClick={() => handleFilter('tags')}
					>
						Tags
					</button>
				</div>
				<div className={Post.search}>
					<div className={Post.search__iconwrapper}>
						<img src={search} alt="Search icon" className={Post.searchicon} />
					</div>
					<input
						type="text"
						className={Post.search__input}
						value={searchValue}
						onChange={handleChange}
						name="searchValue"
					/>
				</div>
			</div>
			<div className={Post.postdata__wrapper}>
				{data.length !== 0 || searchValue === '' ? (
					<PostData
						posts={data}
						initCount={initCount}
						finalCount={finalCount}
					/>
				) : (
					<h2 style={{ padding: '1em' }}>No results found</h2>
				)}
			</div>
			<div className={Post.postbtn__wrapper}>
				<button
					className={`${Post.post__btndisable} ${Post.post__btn}`}
					type="button"
					onClick={handlePrevCount}
				>
					prev
				</button>
				<button
					className={`${Post.post__btnactive} ${Post.post__btn}`}
					type="button"
					onClick={handleNextCount}
				>
					next
				</button>
			</div>
		</div>
	);
}

export default CardPost;
