import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './styles.module.css';
import Editor from '../../components/Editor/Editor';
import AskCards from '../../components/AskCards/AskCards';
import Asks from '../../components/Asks/Asks';

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
				<Route path="/QuestionPage" element={<Asks />} />
			</Routes>
		</div>
	);
}

export default Dashboard;
