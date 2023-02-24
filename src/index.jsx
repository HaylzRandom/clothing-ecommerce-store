import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import App from './App';

// Contexts
import { UserProvider } from './contexts/userContext';

// Styles
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<UserProvider>
				<App />
			</UserProvider>
		</Router>
	</React.StrictMode>
);
