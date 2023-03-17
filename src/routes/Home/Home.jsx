// Components
import Directory from '../../components/Directory/Directory';

// Hooks
import useTitle from '../../hooks/useTitle';

const Home = () => {
	useTitle('Home - Clothing eCommerce');

	return <Directory />;
};

export default Home;
