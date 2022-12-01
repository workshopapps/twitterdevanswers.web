import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes() {
	const token = localStorage.getItem('token');

	return token ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
