import { React, useState } from 'react';
import Devask from '../../components/Tags/Devask';
import Devask2 from '../../components/Tags/Devask2';

import Data from '../../components/Tags/Data';
import Data2 from '../../components/Tags/Data2';

import Pagination from '../../components/Tags/Pagination';
import Button from '../../components/Tags/Button/Button';
import BUTTON_TYPES from '../../components/Tags/Button/Data';

import styles from './tags.module.css';

export default function Tags() {
	const [show, setShow] = useState(false);
	const [grid, setGrid] = useState(true);
	const handleClick = () => {
		setShow(!show);
		setGrid(!grid);
	};

	return (
		<div className={styles.container}>
			<div className={styles.container1}>
				<h1>Tags</h1>

				<div className={styles.container3}>
					<Button type={BUTTON_TYPES.SECONDARY} btnText="Popular" />
					<button className={styles.button} type="button" onClick={handleClick}>
						{grid ? 'Grid' : 'List'}
					</button>
				</div>
			</div>

			<div className={styles.button__field}>
				<Button type={BUTTON_TYPES.SECONDARY} btnText="Java" />
				<Button type={BUTTON_TYPES.PRIMARY} btnText="Python" />
				<Button type={BUTTON_TYPES.PRIMARY} btnText="Android" />
				<div className={styles.hid}>
					<Button type={BUTTON_TYPES.PRIMARY} btnText="Php" />
					<Button type={BUTTON_TYPES.PRIMARY} btnText="C++" />
					<Button type={BUTTON_TYPES.PRIMARY} btnText="ajax" />
					<Button type={BUTTON_TYPES.PRIMARY} btnText="mySQL" />
					<Button type={BUTTON_TYPES.PRIMARY} btnText="Node.js" />
					<Button type={BUTTON_TYPES.PRIMARY} btnText="C#" />
					<Button type={BUTTON_TYPES.PRIMARY} btnText="React.js" />
					<Button type={BUTTON_TYPES.PRIMARY} btnText="Swift" />
					<Button type={BUTTON_TYPES.PRIMARY} btnText="Linux" />
					<Button type={BUTTON_TYPES.PRIMARY} btnText="r" />
				</div>
				<Button type={BUTTON_TYPES.PRIMARY} btnText="View all" />
			</div>

			<div>
				<div className={styles.grid}>
					{!show && Data.map((item) => <Devask key={item.id} Data={item} />)}
				</div>

				<div>
					{show && Data2.map((item) => <Devask2 key={item.id} Data2={item} />)}
				</div>
			</div>
			<Pagination />
		</div>
	);
}
