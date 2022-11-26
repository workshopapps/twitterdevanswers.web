import React, { useContext } from 'react';
import WalletContext from '../../pages/WalletPage/WalletContext';
import styles from './History.module.css';
import HistorySkeleton from './HistorySkeleton';

function History() {
	const { loading, data } = useContext(WalletContext);

	return loading ? (
		<HistorySkeleton />
	) : (
		<section className={styles.history__container}>
			<div className={styles.grouping}>
				<div className={styles.date}>
					<p>Novemener 2022</p>
					{data.earnings.map((item) => (
						<div className={styles.history_group}>
							<div className={styles.history__group__container}>
								<p className={styles.history__group__text__2}>Earned</p>
								<p className={styles.history__group__text__1}>
									Youve successfully earned tokens for a correct reply
								</p>
								<p className={styles.history__group__text__3}>
									+ {item.ammount} tokens
								</p>
							</div>
							<p className={styles.history__group__text__2__alt}>
								Youve successfully earned tokens for a correct reply reply
							</p>
						</div>
					))}
				</div>
				<div className={styles.date}>
					{data.spent.map((item) => (
						<div className={styles.history_group}>
							<div className={styles.history__group__container}>
								<p className={styles.history__group__text__2}>Spent</p>
								<p className={styles.history__group__text__1}>
									Youve successfully earned tokens for a correct reply
								</p>
								<p className={styles.history__group__text__3}>
									+ {item.ammount}tokens
								</p>
							</div>
							<p className={styles.history__group__text__2__alt}>
								Youve successfully earned tokens for a correct reply reply
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default History;
