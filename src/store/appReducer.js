export default function appReducer(state, { type, payload }) {
  switch (type) {
    case 'userLoggedIn': {
      return {
        ...state,
        user: payload,
        isAuth: true,
      };
    }

    case 'userLoggedOut': {
      return {
        ...state,
        user: {},
        isAuth: false,
      };
    }

    case 'loading': {
      return {
        ...state,
        loading: payload,
      };
    }

    default: {
      return state;
    }
  }
}
