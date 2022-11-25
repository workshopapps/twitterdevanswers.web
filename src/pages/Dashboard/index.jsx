import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './styles.module.css';
import Editor from '../../components/Editor/Editor';
import AskCards from '../../components/AskCards/AskCards';

function Dashboard() {
	return (
		<div className={styles.appContainer}>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Editor />
							<AskCards />
						</>
					}
				/>
			</Routes>
		</div>
	);
}

export default Dashboard;
