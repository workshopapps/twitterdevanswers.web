import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import avatar from '../../../assets/dashboard/user.png';
import styles from './answerInput.module.css';

function AnswerInput({ handleSubmitAnswer }) {
	const [answer, setAnswer] = useState({
		content: '',
	});

	const handleAnswer = (event) => {
		const { name, value } = event.target;
		setAnswer((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<form
			id="answer"
			className={styles.answer}
			onSubmit={(event) => {
				handleSubmitAnswer(event, answer);
				setAnswer({
					content: '',
				});
			}}
		>
			<div className={styles.input}>
				<div className={styles.avatar}>
					<img src={avatar} alt="user avatar" />
				</div>
				<textarea
					name="content"
					placeholder="Type your reply"
					cols={10}
					rows={5}
					value={answer.content}
					onChange={handleAnswer}
				/>
			</div>
			<div className={styles.btn}>
				<button id="answer" type="submit">
					Post reply
				</button>
			</div>
		</form>
	);
}

export default AnswerInput;

AnswerInput.propTypes = {
	handleSubmitAnswer: PropTypes.func.isRequired,
};
