import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';

// Components
import Button from '../Button/Button';

// Redux Selectors
import { selectCartTotal } from '../../store/cart/cartSelector';
import { selectCurrentUser } from '../../store/user/userSelector';

// Redux Handlers
import { deleteItemsFromCart } from '../../store/cart/cartSlice';

// Styles
import './paymentForm.styles.scss';

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const dispatch = useDispatch();
	const navigate = useNavigate();

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
					email: currentUser ? currentUser.email : null,
				},
			},
		});

		// Enable Button
		setIsProcessingPayment(false);

		if (paymentResult.error) {
			toast.error(paymentResult.error.message);
		} else {
			dispatch(deleteItemsFromCart());
			navigate('/order-success');
		}
	};

	return (
		<div className='payment-form-container'>
			<div className='testing-information-container'>
				<h2>Test Payment Information:</h2>
				<ul>
					<li>
						<span>Card Number:</span> 4000 0082 6000 0000
					</li>
					<li>
						<span>Expiry Date:</span> 10/25
					</li>
					<li>
						<span>CVC:</span> 123
					</li>
					<li>
						<span>Postcode:</span> ABC 123
					</li>
				</ul>
			</div>

			<form className='form-container' onSubmit={paymentHandler}>
				<h2>Credit Card Payment: </h2>
				<CardElement />
				<Button buttonType='inverted' isLoading={isProcessingPayment}>
					Pay Now
				</Button>
			</form>
		</div>
	);
};

export default PaymentForm;
