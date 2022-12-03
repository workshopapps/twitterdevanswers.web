import React from 'react';
import PropTypes from 'prop-types';
import styles from './WalletItem.module.css';
import balanceFrame from "../../assets/wallet-images/balanceFrame.svg"
import arrowwhite from "../../assets/wallet-images/arrowwhite.svg"
import rightarrowwhite from "../../assets/wallet-images/rightarrowwhite.svg"

function WalletItem({ label, ammount, frame, compare, css}) {
	return (
		<div className={`${styles.wallet_container} ${styles[css]}`}>

			<div className={styles.balance}>
				{ frame ? <img src={balanceFrame} alt="balanceFrame" /> : ""}
				<div>
					<h3>{label}</h3>
					<div className={styles.compare}>
						<img src={arrowwhite} alt="arrowwhite" />
						<span>{compare}</span>
					</div>
				</div>

			</div>
			<hr />
			<div className={styles.token}>
				<div className={styles.tok}>
				<h1>{ammount}</h1> 
				<span>Tokens</span>
				</div>
				<img src={rightarrowwhite} alt="rightarrowwhite" />
			</div>




			{/* <p className={styles.wallet_label_text}>{label}</p>

			<div className={styles.ammount_tokens}>
				<p className={styles.wallet_ammount_text}>{ammount}</p>

				<span className={styles.wallet_token}>Tokens</span>
			</div> */}
		</div>
	);
}
WalletItem.defaultProps = {
	label: ' Current Balance',
	ammount: 10000,
	frame:false,
	compare: "15% compared to last month",
	css:"css",
	// image1: "image"
};

WalletItem.propTypes = {
	label: PropTypes.string,
	ammount: PropTypes.number,
	frame: PropTypes.string,
	compare: PropTypes.string,
	css: PropTypes.string,
	// image1: PropTypes.string,
};

export default WalletItem;
