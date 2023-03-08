import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// Components
import App from './App';

// Contexts
import { CategoriesProvider } from './contexts/CategoriesContext';
import { CartProvider } from './contexts/cartContext';

// Redux Store
import { store } from './store/store';

// Styles
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<CategoriesProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</CategoriesProvider>
			</Router>
		</Provider>
	</React.StrictMode>
);
