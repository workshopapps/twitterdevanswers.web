import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './styles.module.css';

function Dashboard() {
	return (
		<div className={styles.appContainer}>
			<Outlet />
		</div>
	);
}

export default Dashboard;
