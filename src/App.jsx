import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Notifications from './pages/Notifications';
// import './App.css';
import Login from './pages/AuthPage/Login';
import SignUp from './pages/AuthPage/SignUp';

function App() {
	return (
		<div className="App">
			<Notifications />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/sign-up" element={<SignUp />} />
			</Routes>
		</div>
	);
}

export default App;
