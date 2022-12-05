import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './Editor.module.css';
import profilePicture from '../../assets/dashboard-images/profilePicture.webp';

const token = localStorage.getItem('token');

function Editor() {
	const [question, setQuestion] = useState({ text: '' });

	const handleQuestion = (value) => {
		setQuestion((prev) => ({ ...prev, text: value }));
	};

	function submitHandler() {
		if (question.text.trim() === '') return;
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
					content: question.text,
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

				<ReactQuill
					className={styles.writeQuestion}
					placeholder="Start a discussion"
					theme="snow"
					defaultValue=""
					modules={Editor.modules}
					formats={Editor.formats}
					onChange={handleQuestion}
					value={question.text}
				/>
			</div>
			<div className={styles.editorFooter}>
				<button type="button" onClick={submitHandler}>
					Post
				</button>
			</div>
		</div>
	);
}

Editor.modules = {
	syntax: true,
	toolbar: [
		[
			{ size: [] },
			'bold',
			'italic',
			'underline',
			'strike',
			'blockquote',
			'link',
		],
		[{ 'code-block': true }],
	],
};
Editor.formats = [
	'size',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'link',
	'code-block',
];

export default Editor;
