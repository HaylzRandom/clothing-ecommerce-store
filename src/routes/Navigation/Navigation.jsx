import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

// Contexts
import { UserContext } from '../../contexts/userContext';

// Utils
import { signOutUser } from '../../utils/firebase/firebase';

// Logo
import { ReactComponent as Logo } from '../../assets/crown.svg';

// Styles
import './navigation.styles.scss';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);

	// Handlers
	const signOutHandler = async () => {
		await signOutUser();
	};

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
					{currentUser ? (
						<span className='nav-link' onClick={signOutHandler}>
							SIGN OUT
						</span>
					) : (
						<Link className='nav-link' to='/auth'>
							SIGN IN
						</Link>
					)}
				</div>
			</nav>
			<Outlet />
		</>
	);
};

export default Navigation;
