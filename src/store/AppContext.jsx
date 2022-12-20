import React, { createContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import appReducer from './appReducer';

export const AppContext = createContext(null);

function AppContextProvider({ children }) {
	const initialState = {
		user:
			JSON.parse(
				localStorage.getItem('user') && localStorage.getItem('user')
			) || {},
		userData:
			JSON.parse(
				localStorage.getItem('userData') && localStorage.getItem('userData')
			) || {},
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
