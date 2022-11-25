import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Notifications from './pages/Notifications';
import API from './pages/API';
import Login from './pages/AuthPage/Login';
import SignUp from './pages/AuthPage/SignUp';
import Tags from './pages/Tags';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import About from './pages/About/index';
import Pricing from './pages/Pricing';
import Advert from './pages/Advert/Advert';
import Blog from './pages/Blog';
import Career from './pages/Career';
import CookiePolicy from './pages/CookiePolicy';
import Dashboard from './pages/Dashboard';
import FAQ from './pages/FAQ/Index';
import Profile from './pages/Profile/index';
import Help from './pages/Help';
import HowItWorks from './pages/HowItWorks';
import PostQuestion from './pages/PostQuestion';
import Teams from './pages/Team/Team';
import TermsOfUse from './pages/TermsOfUse';
import WalletPage from './pages/Wallet';
import UserPage from './pages/UserPage/userPage';
import ErrorPage from './pages/ErrorPage/index';
import Settings from './pages/Settings';
import Contact from './pages/Contact/index';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				{/* <Route path="profile" element={<Profile />} /> */}
				<Route path="notification-page" element={<Notifications />} />
				<Route path="tags-page" element={<Tags />} />
				<Route path="advertising" element={<Advert />} />
				<Route path="blog-page" element={<Blog />} />
				<Route path="career" element={<Career />} />
				<Route path="cookie-policy" element={<CookiePolicy />} />
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="profile/:id" element={<Profile />} />
				<Route path="faq" element={<FAQ />} />
				<Route path="help-center" element={<Help />} />
				<Route path="teams-page" element={<Teams />} />
				<Route path="how-it-works" element={<HowItWorks />} />
				<Route path="terms-of-use" element={<TermsOfUse />} />
				<Route path="wallet" element={<WalletPage />} />
				<Route path="users-page" element={<UserPage />} />
				<Route path="post-questions" element={<PostQuestion />} />
				<Route path="API" element={<API />} />
				<Route path="pricing-page" element={<Pricing />} />
				<Route path="login" element={<Login />} />
				<Route path="sign-up" element={<SignUp />} />
				<Route path="about" element={<About />} />
				<Route path="*" element={<ErrorPage />} />
				<Route path="settings" element={<Settings />} />
				<Route path="contact" element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
