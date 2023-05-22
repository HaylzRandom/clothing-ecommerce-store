import { useState } from 'react';

// Components
import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/Button';

// Hooks
import useTitle from '../../hooks/useTitle';

// Styles
import './profile.styles.scss';

const defaultFormFields = {
	displayName: 'HaylzRandom',
	email: 'hayley.mcc@gmail.com',
	firstName: 'Hayley',
	lastName: 'McCafferty',
	billAddress: '89 Hop Garden Road',
	billAddress2: 'Hook',
	billPostcode: 'RG27 9ST',
};

const Profile = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);

	const {
		displayName,
		firstName,
		lastName,
		email,
		billAddress,
		billAddress2,
		billPostcode,
	} = formFields;

	useTitle(`Clothing eCommerce - Profile for ${firstName} ${lastName}`);

	// Handlers
	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormFields({
			...formFields,
			[name]: value,
		});
	};

	return (
		<div className='profile-container'>
			<h1>
				Profile for {firstName} {lastName}
			</h1>
			<form className='profile-form' action=''>
				<FormInput
					label='Display Name'
					htmlFor='displayName'
					autoComplete='off'
					type='text'
					id='displayName'
					name='displayName'
					value={displayName}
					onChange={handleChange}
				/>
				<FormInput
					label='First Name'
					htmlFor='firstName'
					autoComplete='off'
					type='text'
					id='firstName'
					name='firstName'
					value={firstName}
					onChange={handleChange}
					required
				/>
				<FormInput
					label='Last Name'
					htmlFor='lastName'
					autoComplete='off'
					type='text'
					id='lastName'
					name='lastName'
					value={lastName}
					onChange={handleChange}
					required
				/>
				<FormInput
					label='Email Address'
					htmlFor='email'
					type='email'
					id='email'
					autoComplete='off'
					name='email'
					value={email}
					onChange={handleChange}
				/>
				<FormInput
					label='Billing Address - Street'
					htmlFor='billAddress'
					type='text'
					id='billAddress'
					autoComplete='off'
					name='billAddress'
					value={billAddress}
					onChange={handleChange}
				/>
				<FormInput
					label='Billing Address - Town'
					htmlFor='billAddress2'
					type='text'
					id='billAddress2'
					autoComplete='off'
					name='billAddress2'
					value={billAddress2}
					onChange={handleChange}
				/>
				<FormInput
					label='Billing Address - Postcode'
					htmlFor='billPostcode'
					type='text'
					id='billPostcode'
					autoComplete='off'
					name='billPostcode'
					value={billPostcode}
					onChange={handleChange}
				/>
				<Button>Save Details</Button>
			</form>
		</div>
	);
};
export default Profile;
