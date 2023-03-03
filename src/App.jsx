import { Routes, Route } from 'react-router-dom';

// Routes
import Navigation from './routes/Navigation/Navigation';
import Home from './routes/Home/Home';
import Shop from './routes/Shop/Shop';
import Authentication from './routes/Authentication/Authentication';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
			</Route>
		</Routes>
	);
};

export default App;
