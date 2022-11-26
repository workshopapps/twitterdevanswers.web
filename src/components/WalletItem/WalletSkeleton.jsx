import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './WalletItem.module.css';

function WalletItemSkeleton() {
	return (
		<div className={styles.wallet_container_skeleton}>
			<Skeleton baseColor="#ffffff" height={220} />
		</div>
	);
}

export default WalletItemSkeleton;
