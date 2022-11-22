import React, { useState } from 'react';
import styles from './Editor.module.css';
import profilePicture from '../../assets/profilePicture.webp';
import attach from '../../assets/attach.webp';
import quoteDown from '../../assets/quoteDown.webp';
import curlyBraces from '../../assets/curlyBraces.webp';
import image from '../../assets/image.webp';
import documentCode from '../../assets/documentCode.webp';

function Editor() {
	const [question, setQuestion] = useState({ text: '' });

	function handleQuestion(event) {
		setQuestion({
			...question,
			[event.target.name]: event.target.value,
		});
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
				<button type="button">Post Question</button>
			</div>
		</div>
	);
}

export default Editor;
