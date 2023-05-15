import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';

// Components
import App from './App';

// Redux Store
import { store, persistor } from './store/store';

// Utils - Stripe
import { stripePromise } from './utils/stripe/stripe';

// Styles
import './index.scss';

// Disable console log messages in Production
if (process.env.NODE_ENV === 'production') {
	console.log = () => {};
	console.error = () => {};
	console.debug = () => {};
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router>
					<Elements stripe={stripePromise}>
						<App />
					</Elements>
				</Router>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
