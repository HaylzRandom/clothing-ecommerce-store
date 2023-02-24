import { useContext, useState } from 'react';

// Utils
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';

// Contexts
import { UserContext } from '../../contexts/userContext';

// Components
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

// Styles
import './signUpForm.styles.scss';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);

	const { displayName, email, password, confirmPassword } = formFields;

	const { setCurrentUser } = useContext(UserContext);

	const resetFormFields = () => setFormFields(defaultFormFields);

	// Handlers
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Check if passwords match
		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			setCurrentUser(user);

			await createUserDocumentFromAuth(user, { displayName });

			resetFormFields();
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Email already in use');
			} else {
				console.log('user creation error: ', error);
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
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Display Name'
					htmlFor='displayName'
					type='text'
					id='displayName'
					autoComplete='off'
					onChange={handleChange}
					name='displayName'
					value={displayName}
					required
				/>
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
				<FormInput
					label='Confirm Password'
					htmlFor='confirmPassword'
					type='password'
					id='confirmPassword'
					autoComplete='off'
					onChange={handleChange}
					name='confirmPassword'
					value={confirmPassword}
					required
				/>
				<Button type='submit'>Sign Up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
