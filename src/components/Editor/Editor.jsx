import React, { useState } from 'react';
import styles from './Editor.module.css';
import profilePicture from '../../assets/dashboard-images/profilePicture.webp';
import attach from '../../assets/dashboard-images/attach.webp';
import quoteDown from '../../assets/dashboard-images/quoteDown.webp';
import curlyBraces from '../../assets/dashboard-images/curlyBraces.webp';
import image from '../../assets/dashboard-images/image.webp';
import documentCode from '../../assets/dashboard-images/documentCode.webp';

const token = localStorage.getItem('token');

function Editor() {
	const [question, setQuestion] = useState('');

	function handleQuestion(event) {
		setQuestion(event.target.value);
	}

	function submitHandler() {
		if (question.trim() === '') return;
		async function postAnswer() {
			const response = await fetch(`https://api.devask.hng.tech/questions/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					accept: 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					title: '',
					content: question,
					expected_result: '',
					payment_amount: 0,
					answered: true,
					tag: 'string',
				}),
			});

			setQuestion('');
			window.location.reload(false);
			return response.data;
		}
		postAnswer();
	}

	return (
		<div className={styles.editorContainer}>
			<div className={styles.questionArea}>
				<img src={profilePicture} alt="" className={styles.profilePicture} />
				<textarea
					name="text"
					value={question}
					onChange={handleQuestion}
					placeholder="Start a discussion"
					className={styles.writeQuestion}
					rows={5}
				/>
			</div>
			<div className={styles.editorFooter}>
				<div>
					<img src={attach} alt="" className={styles.editorIcons} />
					<img src={quoteDown} alt="" className={styles.editorIcons} />
					<img src={curlyBraces} alt="" className={styles.editorIcons} />
					<img src={image} alt="" className={styles.editorIcons} />
					<img src={documentCode} alt="" className={styles.editorIcons} />
				</div>
				<button type="button" onClick={submitHandler}>
					Post
				</button>
			</div>
		</div>
	);
}

export default Editor;
