import React, { useState } from 'react';
import styles from './Editor.module.css';
import profilePicture from '../../assets/dashboard-images/profilePicture.webp';
import attach from '../../assets/dashboard-images/attach.webp';
import quoteDown from '../../assets/dashboard-images/quoteDown.webp';
import curlyBraces from '../../assets/dashboard-images/curlyBraces.webp';
import image from '../../assets/dashboard-images/image.webp';
import documentCode from '../../assets/dashboard-images/documentCode.webp';

function Editor() {
	const [question, setQuestion] = useState('');

	function handleQuestion(event) {
		setQuestion(event.target.value);
		
	}

	function submitHandler() {
		async function postAnswer() {
			const response = await fetch(
				`https://pacific-peak-54505.herokuapp.com/questions/`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						accept: 'application/json',
						Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiYXlvYmF5b0BnbWFpbC5jb20iLCJleHAiOjE2NzAxMjMwMjF9.BEysvyjtWGl_rrIHHPgbPb7BStTGb5lKlLj3YR1LZnU`,
					},
					body: JSON.stringify({
						title: '',
						content: question,
						expected_result: '',
						payment_amount: 0,
						answered: true,
						tag: 'string',
					}),
				}
			);

	
			setQuestion('');
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
					value={question.text}
					onChange={handleQuestion}
					placeholder="Write a question"
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
					Post Question
				</button>
			</div>
		</div>
	);
}

export default Editor;
