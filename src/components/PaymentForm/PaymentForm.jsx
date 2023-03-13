import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Components
import Button from '../Button/Button';

// Redux Selectors
import { selectCartTotal } from '../../store/cart/cartSelector';
import { selectCurrentUser } from '../../store/user/userSelector';

// Styles
import './paymentForm.styles.scss';

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const amount = useSelector(selectCartTotal);
	const currentUser = useSelector(selectCurrentUser);

	const [isProcessingPayment, setIsProcessingPayment] = useState(false);

	// Payment Handler
	const paymentHandler = async (e) => {
		e.preventDefault();

		// If no instance of stripe or elements exist, do not continue
		if (!stripe || !elements) {
			return;
		}

		// Disable Button
		setIsProcessingPayment(true);

		const response = await fetch('/.netlify/functions/create-payment-intent', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				amount: amount * 100,
			}),
		}).then((res) => res.json());

		const clientSecret = response.paymentIntent.client_secret;

		// Create Payment
		const paymentResult = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: currentUser ? currentUser.displayName : 'Guest',
				},
			},
		});

		// Enable Button
		setIsProcessingPayment(false);

		if (paymentResult.error) {
			alert(paymentResult.error);
		} else {
			if (paymentResult.paymentIntent.status === 'succeeded') {
				alert('Payment Successful!');
			}
		}
	};

	return (
		<div className='payment-form-container'>
			<form className='form-container' onSubmit={paymentHandler}>
				<h2>Credit Card Payment: </h2>
				<CardElement />
				<Button
					className='payment-button'
					buttonType='inverted'
					isLoading={isProcessingPayment}>
					Pay Now
				</Button>
			</form>
		</div>
	);
};

export default PaymentForm;
