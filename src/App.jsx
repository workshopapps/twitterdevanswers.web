import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import API from './pages/API';
// import Header from './pages/Header';
// import Footer from './pages/Footer';
import Login from './pages/AuthPage/Login';
import SignUp from './pages/AuthPage/SignUp';
// import Contact from './pages/Contact';
// import Dashboard from './pages/Dashboard';
// import Teams from './pages/Teams';
// import WalletPage from './pages/WalletPage';

// import CookiePolicy from './pages/CookiePolicy';
// import Career from './pages/Career';
// import Settings from './pages/Settings';
// import Blog from './pages/Blog';
// import Help from './pages/Help';
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import 404Page from './pages/404Page';
// import Users from './pages/Users';
// import FAQ from './pages/FAQ';
// import Pricing from './pages/Pricing';
// import About from './pages/About';
// import HowItWorks from './pages/HowItWorks';
// import Advertising from './pages/Advertising';
  import Tags from './pages/Tags';
// import Terms from './pages/Terms';
// import PostQuestion from './pages/PostQuestion';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="profile" element={<Profile />} />
				<Route path="notification-page" element={<Notifications />} />
        <Route path='tags-page' element={<Tags/>}/>

				<Route path="API" element={<API />} />
        <Route path='login' element={<Login/>}/>
				<Route path="sign-up" element={<SignUp />} />
				{/* 
      <Route path='contact' element={<Contact/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='teams-page' element={<Teams/>}/>
      <Route path='wallet' element={<WalletPage/>}/>
     
      <Route path='career' element={<Career/>}/>
      <Route path='settings' element={<Settings/>}/>
      <Route path='blog-page' element={<Blog/>}/>
      <Route path='help-center' element={<Help/>}/>
      <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='notification-page' element={<CookiePolicy/>}/>
      <Route path='users-page' element={<Users/>}/>
      <Route path='frequently-asked-questions' element={<FAQ/>}/>
      <Route path='pricing-page' element={<Pricing/>}/>
      <Route path='about-page' element={<About/>}/>
      <Route path='how-it-works' element={<HowItWorks/>}/>
      <Route path='advertising-page' element={<Advertising/>}/>
      <Route path='terms-of-use' element={<Terms/>}/>
      <Route path='post-question' element={<PostQuestion/>}/>
      <Route path='*' element={<404Page/>}/> */}
			</Routes>
			<Footer />
		</div>
	);
}

export default App;