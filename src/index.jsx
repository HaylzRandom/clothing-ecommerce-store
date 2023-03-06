import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import App from './App';

// Contexts
import { UserProvider } from './contexts/userContext';
import { CategoriesProvider } from './contexts/CategoriesContext';
import { CartProvider } from './contexts/cartContext';

// Styles
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<UserProvider>
				<CategoriesProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</CategoriesProvider>
			</UserProvider>
		</Router>
	</React.StrictMode>
);
