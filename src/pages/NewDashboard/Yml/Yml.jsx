/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styles from './yml.module.css';
import YmlPost from '../YmlPost/YmlPost';
import useMessenger from '../utils';

function Yml() {
	const [questions, setQuestions] = useState([]);

	const { getQuestions } = useMessenger();

	function getMultipleRandom(arr, num) {
		const shuffled = [...arr].sort(() => 0.5 - Math.random());

		return shuffled.slice(0, num);
	}

	useEffect(() => {
		// fetch all questions
		const fetchQuestions = async () => {
			const result = await getQuestions();
			const pyml = getMultipleRandom(result, 5);
			setQuestions(pyml);
		};

		fetchQuestions();
	}, []);


	return (
		<div className={styles.yml}>
			<h3 className={styles.header}>You might like</h3>
			<div className={styles.posts}>
				{questions.map((post) => (
					<YmlPost post={post} key={post.question_id} />
				))}
			</div>
		</div>
	);
}

export default Yml;
