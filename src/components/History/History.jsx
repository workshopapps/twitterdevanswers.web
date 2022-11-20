import React from 'react';
import styles from './History.module.css';

function History() {
	return (
		<section className={styles.history__container}>
			<div className={styles.grouping}>
				<div className={styles.date}>
					<p>Novemener 2022</p>
					<div className={styles.history_group}>
						<div className={styles.history__group__container}>
							<p className={styles.history__group__text__2}>Earned</p>
							<p className={styles.history__group__text__1}>
								Youve successfully earned tokens for a correct reply
							</p>
							<p className={styles.history__group__text__3}>+5000 tokens</p>
						</div>
						<p className={styles.history__group__text__2__alt}>
							Youve successfully earned tokens for a correct reply reply
						</p>
					</div>
					<div className={styles.history_group}>
						<div className={styles.history__group__container}>
							<p className={styles.history__group__text__2}>Earned</p>
							<p className={styles.history__group__text__1}>
								Youve successfully earned tokens for a correct reply
							</p>
							<p className={styles.history__group__text__3}>+5000 tokens</p>
						</div>
						<p className={styles.history__group__text__2__alt}>
							Youve successfully earned tokens for a correct reply reply
						</p>
					</div>
				</div>
				<div className={styles.date}>
					<div className={styles.history_group}>
						<div className={styles.history__group__container}>
							<p className={styles.history__group__text__2}>Earned</p>
							<p className={styles.history__group__text__1}>
								Youve successfully earned tokens for a correct reply
							</p>
							<p className={styles.history__group__text__3}>+5000 tokens</p>
						</div>
						<p className={styles.history__group__text__2__alt}>
							Youve successfully earned tokens for a correct reply reply
						</p>
					</div>
					<div className={styles.history_group}>
						<div className={styles.history__group__container}>
							<p className={styles.history__group__text__2}>Earned</p>
							<p className={styles.history__group__text__1}>
								Youve successfully earned tokens for a correct reply
							</p>
							<p className={styles.history__group__text__3}>+5000 tokens</p>
						</div>
						<p className={styles.history__group__text__2__alt}>
							Youve successfully earned tokens for a correct reply reply
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default History;
