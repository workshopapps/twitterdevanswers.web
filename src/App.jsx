import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as Sentry from '@sentry/react';
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
import FAQ from './pages/FAQ/Index';
import Profile from './pages/Profile/index';
import Notifications from './pages/Notifications';
import API from './pages/API';
import Login from './pages/AuthPage/Login';
import SignUp from './pages/AuthPage/SignUp';
import Tags from './pages/Tags';
import SuccessSign from './pages/SuccessSign/index';
import ForgotPassword from './pages/ForgotPassword/index';
import ResetPassword from './pages/ResetPassword/index';
import Help from './pages/Help';
import HowItWorks from './pages/HowItWorks';
import PostQuestion from './pages/PostQuestion';
import NewDashboard from './pages/NewDashboard/NewDashboard';
import QuestionPage from './pages/NewDashboard/QuestionPage';
import Teams from './pages/Team/Team';
import TermsOfUse from './pages/TermsOfUse';
import WalletPage from './pages/WalletPage/WalletPage';
import ErrorPage from './pages/ErrorPage/index';
import Settings from './pages/Settings';
import Security from './pages/Security/Security';
import Contact from './pages/Contact/index';
import ProtectedRoutes from './ProtectedRoutes';
import InternalHeader from './components/InternalHeader/InternalHeader';
import Privacy from './pages/Privacy/Privacy';
import SubmitBlog from './pages/SubmitBlog';
import NotificationSettings from './pages/NotificationSettings/index';
import { AppContext } from './store/AppContext';
import PrivacyandSafetySettings from './pages/PrivacyAndSafetySettings/Index';
import BlogPageReview from './pages/BlogPageReview';
import UserBlogReview from './pages/UserBlogReview';
import AdminDashboard from './pages/AdminDashboard';
import ManageUser from './pages/ManageUser';
import AdminSignUp from './pages/AdminSignUp';
import AdminSignIn from './pages/AdminSignIn';
import AdminBlogPage from './pages/AdminBlogPage';
import UsersSuggestion from './pages/UsersSuggestion';
import EditAcccount from './pages/EditAccount/index';

function App() {
	const {
		state: { isAuth },
	} = useContext(AppContext);
	const token = localStorage.getItem('token');

	return (
		<div className="App">
			<div className="container">
				{token || isAuth ? <InternalHeader /> : <Header />}
				<Routes>
					<Route>
						<Route path="/" element={<LandingPage />} />
						<Route path="cookie-policy" element={<CookiePolicy />} />
						<Route path="advertising" element={<Advert />} />
						<Route path="blog-page" element={<Blog />} />
						<Route path="faq" element={<FAQ />} />
						<Route path="help-center" element={<Help />} />
						<Route path="terms-of-use" element={<TermsOfUse />} />
						<Route path="pricing-page" element={<Pricing />} />
						<Route path="career" element={<Career />} />
						<Route path="how-it-works" element={<HowItWorks />} />
						<Route path="API" element={<API />} />
						<Route path="about" element={<About />} />
						<Route path="login" element={<Login />} />
						<Route path="privacy" element={<Privacy />} />
						<Route path="sign-up" element={<SignUp />} />
						<Route path="sucess-sign" element={<SuccessSign />} />
						<Route path="forgot-password" element={<ForgotPassword />} />
						<Route path="forgot-password/:token" element={<ResetPassword />} />

						<Route element={<ProtectedRoutes />}>
							<Route path="/dashboard" element={<NewDashboard />} />
							<Route path="/question-page/:id" element={<QuestionPage />} />
							<Route path="profile/:username" element={<Profile />} />
							<Route path="notifications-page" element={<Notifications />} />
							<Route path="tags-page" element={<Tags />} />
							<Route path="teams-page" element={<Teams />} />
							<Route path="wallet" element={<WalletPage />} />
							<Route path="users-suggestion" element={<UsersSuggestion />} />
							<Route path="post-questions" element={<PostQuestion />} />
							<Route path="settings" element={<Settings />} />
							<Route path="security-settings" element={<Security />} />
							<Route path="contact" element={<Contact />} />
							<Route path="submit-blog" element={<SubmitBlog />} />
							<Route path="/blog-submit-review" element={<BlogPageReview />} />
							<Route path="/blog-submit-review/:id" element={<UserBlogReview />} />
							<Route path="notification-settings" element={<NotificationSettings />} />
							<Route path="/privacyandsafety-settings" element={<PrivacyandSafetySettings />}/>
							<Route path="manage-user/:username" element={<ManageUser />} />
							<Route path="admin-dashboard" element={<AdminDashboard />} />
							<Route path="admin-signup" element={<AdminSignUp />} />
							<Route path="admin-login" element={<AdminSignIn />} />
							<Route path="/admin-blog-page" element={<AdminBlogPage />} />
							<Route path="edit-profile" element={<EditAcccount />} />
						</Route>
					</Route>

					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</div>
			{token || isAuth ? <Footer /> : <Footer />}
		</div>
	);
}

export default Sentry.withProfiler(App);
