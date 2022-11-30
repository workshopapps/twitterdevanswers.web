import { React, useState } from 'react';
import Tag from '../../components/Tags/Tag';
import Data from '../../components/Tags/Data';
import Pagination, { tagsPerPage } from '../../components/Tags/Pagination';
import Button from '../../components/Tags/Button/Button';
import BUTTON_TYPES from '../../components/Tags/Button/Data';

import styles from './tags.module.css';

const defaultPage = {
	start: 0,
	end: tagsPerPage,
	currentPage: 1,
};

export default function Tags() {
	const [grid, setGrid] = useState(true);
	const [page, setPage] = useState(defaultPage);

	const nextPageHandler = () => {
		setPage((prevVal) => ({
			start: prevVal.start + tagsPerPage,
			end: prevVal.end + tagsPerPage,
			currentPage: prevVal.currentPage + 1,
		}));
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	};

	const prevPageHandler = () => {
		setPage((prevVal) => ({
			start: prevVal.start - tagsPerPage,
			end: prevVal.end - tagsPerPage,
			currentPage: prevVal.currentPage - 1,
		}));
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	};

	const handleClick = () => {
		setGrid((prevVal) => !prevVal);
	};

	const [tags, setTags] = useState(Data);

	const setActiveBtn = (event) => {
		const btns = document.querySelectorAll('.btn');
		btns.forEach((btn) => btn.classList.remove('active'));
		event.target.classList.add('active');
	};

	const filterTagsHandler = (event) => {
		setActiveBtn(event);
		const filter = event.target.textContent.toLowerCase();
		let filteredTags;

		if (filter === 'view all') {
			filteredTags = Data.filter((tag) => tag.tag !== filter);
			setTags(filteredTags);
			return setPage(defaultPage);
		}

		filteredTags = Data.filter((tag) => tag.tag === filter);
		setTags(filteredTags);
		return setPage(defaultPage);
	};

	return (
		<section className={styles['tags-section']}>
			<div className={styles['tags-container']}>
				<header className={styles['tags-header']}>
					<h1 className={styles['header-title']}>Tags</h1>

					<div className={styles['tags-header__btn-container']}>
						<Button type={BUTTON_TYPES.SECONDARY} btnText="Popular" />
						<button
							className={styles.button}
							type="button"
							onClick={handleClick}
						>
							{grid ? 'Grid' : 'List'}
						</button>
					</div>
				</header>

				<nav className={styles['tags-nav']}>
					<Button
						type={BUTTON_TYPES.SECONDARY}
						onClick={filterTagsHandler}
						btnText="Java"
					/>
					<span className={styles.hidden_8}>
						<Button
							type={BUTTON_TYPES.PRIMARY}
							onClick={filterTagsHandler}
							btnText="Python"
						/>
					</span>
					<span className={styles.hidden_7}>
						<Button
							type={BUTTON_TYPES.PRIMARY}
							onClick={filterTagsHandler}
							btnText="Android"
						/>
					</span>
					<span className={styles.hidden_6}>
						<Button
							type={BUTTON_TYPES.PRIMARY}
							onClick={filterTagsHandler}
							btnText="Php"
						/>
					</span>
					<span className={styles.hidden_5}>
						<Button
							type={BUTTON_TYPES.PRIMARY}
							onClick={filterTagsHandler}
							btnText="C++"
						/>
					</span>
					<span className={styles.hidden_4}>
						<Button
							type={BUTTON_TYPES.PRIMARY}
							onClick={filterTagsHandler}
							btnText="Ajax"
						/>
					</span>
					<span className={styles.hidden_3}>
						<Button
							type={BUTTON_TYPES.PRIMARY}
							onClick={filterTagsHandler}
							btnText="MySQL"
						/>
					</span>
					<span className={styles.hidden_3}>
						<Button
							type={BUTTON_TYPES.PRIMARY}
							onClick={filterTagsHandler}
							btnText="Node.js"
						/>
					</span>
					<span className={styles.hidden_2}>
						<Button
							type={BUTTON_TYPES.PRIMARY}
							onClick={filterTagsHandler}
							btnText="C#"
						/>
					</span>
					<span className={styles.hidden_2}>
						<Button
							type={BUTTON_TYPES.PRIMARY}
							onClick={filterTagsHandler}
							btnText="React.js"
						/>
					</span>
					<span className={styles.hidden_1}>
						<Button
							type={BUTTON_TYPES.PRIMARY}
							onClick={filterTagsHandler}
							btnText="Swift"
						/>
					</span>
					<span className={styles.hidden_1}>
						<Button
							type={BUTTON_TYPES.PRIMARY}
							onClick={filterTagsHandler}
							btnText="Linux"
						/>
					</span>
					<span className={styles.hidden_1}>
						<Button
							type={BUTTON_TYPES.PRIMARY}
							onClick={filterTagsHandler}
							btnText="R"
						/>
					</span>
					<Button
						type={BUTTON_TYPES.PRIMARY}
						onClick={filterTagsHandler}
						btnText="View all"
					/>
				</nav>

				<div>
					<div className={grid ? styles.grid : styles.list}>
						{tags.slice(page.start, page.end).map((item) => (
							<Tag key={item.id} isGridView={grid} Data={item} />
						))}
					</div>
				</div>
				{tags.length > tagsPerPage && (
					<Pagination
						currentPage={page.currentPage}
						next={nextPageHandler}
						prev={prevPageHandler}
						data={tags}
					/>
				)}
			</div>
		</section>
	);
}
