import React, { createContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import appReducer from './appReducer';

export const AppContext = createContext(null);

function AppContextProvider({ children }) {
	const initialState = {
		user:
			typeof localStorage.getItem('user') === 'object'
				? JSON.parse(localStorage.getItem('user'))
				: {},
		userData:
			typeof localStorage.getItem('userData') === 'object'
				? JSON.parse(localStorage.getItem('userData'))
				: {},
		token: localStorage.getItem('token'),
		isAuth: false,
		loading: false,
	};

	const [state, dispatch] = useReducer(appReducer, initialState);
	const appContext = useMemo(() => ({ state, dispatch }), [state]);

	return (
		<AppContext.Provider value={appContext}>{children}</AppContext.Provider>
	);
}

export default AppContextProvider;

AppContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
