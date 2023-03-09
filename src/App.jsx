import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

// Utils
import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
} from './utils/firebase/firebase';

// Redux Actions
import { setCurrentUser } from './store/user/userSlice';

// Routes
import Navigation from './routes/Navigation/Navigation';
import Home from './routes/Home/Home';
import Shop from './routes/Shop/Shop';
import Authentication from './routes/Authentication/Authentication';
import Checkout from './routes/Checkout/Checkout';

const App = () => {
	const dispatch = useDispatch();

	// Will set the current user if logged in or null if not
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}

			const pickedUser =
				user && (({ accessToken, email }) => ({ accessToken, email }))(user);

			console.log(setCurrentUser(pickedUser));
			dispatch(setCurrentUser(pickedUser));
		});

		return unsubscribe;

		// eslint-disable-next-line
	}, []);

	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop/*' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
				<Route path='checkout' element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
