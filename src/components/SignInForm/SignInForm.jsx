import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Utils
import {
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase';

// Components
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

// Styles
import './signInForm.styles.scss';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const navigate = useNavigate();

	const [formFields, setFormFields] = useState(defaultFormFields);

	const { email, password } = formFields;

	const resetFormFields = () => setFormFields(defaultFormFields);

	// Login with Google
	const signInWithGoogle = async () => {
		try {
			await signInWithGooglePopup();
			// Redirect after login to homepage
			navigate('/');
		} catch (error) {
			switch (error.code) {
				case 'auth/popup-closed-by-user':
					return;
				default:
					console.log(error);
			}
		}
	};

	// Handlers
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await signInAuthUserWithEmailAndPassword(email, password);

			resetFormFields();
			navigate('/');
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('Incorrect Credentials');
					resetFormFields();
					break;
				case 'auth/user-not-found':
					alert('Incorrect Credentials');
					resetFormFields();
					break;
				case 'auth/popup-closed-by-user':
					return;
				default:
					console.log(error);
			}
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormFields({
			...formFields,
			[name]: value,
		});
	};

	return (
		<div className='sign-up-container'>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email Address'
					htmlFor='email'
					type='email'
					id='email'
					autoComplete='off'
					onChange={handleChange}
					name='email'
					value={email}
					required
				/>
				<FormInput
					label='Password'
					htmlFor='password'
					type='password'
					id='password'
					autoComplete='off'
					onChange={handleChange}
					name='password'
					value={password}
					required
				/>
				<div className='buttons-container'>
					<Button type='submit'>Sign In</Button>
					<Button buttonType='google' type='button' onClick={signInWithGoogle}>
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
