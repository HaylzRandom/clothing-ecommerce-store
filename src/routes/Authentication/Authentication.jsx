// Components
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from '../../components/SignInForm/SignInForm';

// Styles
import './authentication.styles.scss';

// Hooks
import useTitle from '../../hooks/useTitle';

const Authentication = () => {
	useTitle('Sign In/Up - Clothing eCommerce');

	return (
		<div className='authentication-container'>
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;
