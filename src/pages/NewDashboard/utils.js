import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../../store/AppContext';

export const ArrayHighestToLowest = (array, sortBy) =>
	array.sort((a, b) => b[sortBy] - a[sortBy]);

export const timeStamp = (createdAt) => {
	const timePosted = new Date(createdAt);

	const seconds = Math.floor((new Date() - timePosted) / 1000);

	let interval = seconds / 31536000;

	if (interval > 1) {
		return `${Math.floor(interval)} y`;
	}
	interval = seconds / 2592000;
	if (interval > 1) {
		return `${Math.floor(interval)} mnt`;
	}
	interval = seconds / 86400;
	if (interval > 1) {
		return `${Math.floor(interval)} d`;
	}
	interval = seconds / 3600;
	if (interval > 1) {
		return `${Math.floor(interval)} h`;
	}
	interval = seconds / 60;
	if (interval > 1) {
		return `${Math.floor(interval)} m`;
	}
	return `${Math.floor(seconds)} s`;
};

function useMessenger() {
	const {
		state: { token },
	} = useContext(AppContext);

	const navigate = useNavigate();

	const handleNavigate = (event, url) => {
		event.stopPropagation();
		navigate(url);
	};

	const getUsers = async () => {
		try {
			const response = axios.get(`https://api.devask.hng.tech/users`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const {
				data: { data },
			} = await response;

			return data;
		} catch (error) {
			throw new Error(error);
		}
	};

	const getQuestions = async () => {
		try {
			const response = axios({
				method: 'get',
				url: 'https://api.devask.hng.tech/questions',
			});

			const {
				data: { data },
			} = await response;

			return data;
		} catch (error) {
			throw new Error(error);
		}
	};

	const getAnswers = async (id) => {
		try {
			const response = axios.get(`https://api.devask.hng.tech/answer/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const { data } = await response;

			return data;
		} catch (error) {
			throw new Error(error);
		}
	};

	const postAnswer = ({ content }, questionId) => {
		const data = { question_id: questionId, content };
		try {
			const response = axios({
				method: 'post',
				url: 'https://api.devask.hng.tech/answer',
				data,
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			return response;
		} catch (error) {
			throw new Error(error);
		}
	};

	const likeUnlike = (questionId, type) => {
		const data = { question_id: questionId, like_type: type };
		try {
			const response = axios({
				method: 'post',
				url: `https://api.devask.hng.tech/like`,
				data,
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			return response;
		} catch (error) {
			throw new Error(error);
		}
	};

	const getLikes = (questionId) => {
		try {
			const response = axios({
				method: 'get',
				url: `https://api.devask.hng.tech/like/${questionId}`,
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			return response;
		} catch (error) {
			throw new Error(error);
		}
	};

	return {
		handleNavigate,
		getUsers,
		getQuestions,
		getAnswers,
		postAnswer,
		likeUnlike,
		getLikes,
	};
}

export default useMessenger;