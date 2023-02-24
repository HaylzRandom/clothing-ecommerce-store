// Components
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from '../../components/SignInForm/SignInForm';

// Styles
import './authentication.styles.scss';

const Authentication = () => {
	return (
		<div className='authentication-container'>
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;
