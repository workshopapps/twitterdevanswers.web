export default function appReducer(state, { type, payload }) {
	switch (type) {
		case 'USER_LOGGED_IN': {
			return {
				...state,
				user: payload.data,
				token: payload.access_token,
				isAuth: true,
			};
		}

		case 'USER_LOGGED_OUT': {
			return {
				...state,
				user: {},
				isAuth: false,
			};
		}

		case 'USER_SIGNED_UP': {
			return {
				...state,
				user: payload.data,
				token: payload.Token,
				isAuth: true,
			};
		}

		case 'LOADING': {
			return {
				...state,
				loading: payload,
			};
		}
		case 'EDIT_USER': {
			return {
				...state,
				user: payload,
				
			};
		}

		default: {
			return state;
		}
	}
}
