import { Outlet, Link } from 'react-router-dom';

// Logo
import { ReactComponent as Logo } from '../../assets/crown.svg';

// Styles
import './navigation.styles.scss';

const Navigation = () => {
	return (
		<>
			<nav className='navigation'>
				<Link className='logo-container' to='/'>
					<Logo className='logo' />
				</Link>

				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>
				</div>
			</nav>
			<Outlet />
		</>
	);
};

export default Navigation;
