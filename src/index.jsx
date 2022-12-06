import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import './index.css';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppContextProvider from './store/AppContext';


process.env.NODE_ENV === "production" && Sentry.init({
  dsn: "https://ece3bc8c25c04063b0206f32f71903d2@o4504279440097280.ingest.sentry.io/4504279444094976",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AppContextProvider>
				<HashRouter>
					<App />
				</HashRouter>
		</AppContextProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
