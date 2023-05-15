import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

// React Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Utils
import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
} from './utils/firebase/firebase';

// Redux Actions
import { setCurrentUser } from './store/user/userSlice';

// Components
import Spinner from './components/Spinner/Spinner';

// Routes with Lazy Components
const Navigation = lazy(() => import('./routes/Navigation/Navigation'));
const Home = lazy(() => import('./routes/Home/Home'));
const Shop = lazy(() => import('./routes/Shop/Shop'));
const Authentication = lazy(() =>
	import('./routes/Authentication/Authentication')
);
const Checkout = lazy(() => import('./routes/Checkout/Checkout'));

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

			dispatch(setCurrentUser(pickedUser));
		});

		return unsubscribe;

		// eslint-disable-next-line
	}, []);

	return (
		<Suspense fallback={<Spinner />}>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='shop/*' element={<Shop />} />
					<Route path='auth' element={<Authentication />} />
					<Route path='checkout' element={<Checkout />} />
				</Route>
			</Routes>
			<ToastContainer />
		</Suspense>
	);
};

export default App;
