import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './styles.module.css';
import Editor from '../../components/Editor/Editor';
import AskCards from '../../components/AskCards/AskCards';
import Asks from '../../components/Asks/Asks';

function App() {
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
				<Route path="/questionPage" element={<Asks />} />
			</Routes>
		</div>
	);
}

export default App;
