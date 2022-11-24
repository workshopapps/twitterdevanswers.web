import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AppContext } from './store/AppContext';

function ProtectedRoutes() {
	const {
		state: { isAuth },
	} = useContext(AppContext);
	const data = localStorage.getItem('user');
	const user = JSON.parse(data);

	return user || isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
