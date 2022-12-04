import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './styles.module.css';
import Editor from '../../components/Editor/Editor';
import AskCards from '../../components/AskCards/AskCards';

function Dashboard() {
	const [show, setShow] = useState(false);

	function showShareModal() {
		setShow(true);
	}

	function hideShareModal() {
		setShow(false);
	}

	const showShare = () => showShareModal();
	const hideShare = () => hideShareModal();

	return (
		<div className={styles.appContainer}>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Editor />
							<AskCards
								onClose={hideShare}
								show={show}
								hide={hideShare}
								showShare={showShare}
							/>
						</>
					}
				/>
			</Routes>
		</div>
	);
}

export default Dashboard;
