import { useSelector, useDispatch } from 'react-redux';

// Hooks
import useTitle from '../../hooks/useTitle';

// Redux Selector
import {
	selectCartItems,
	selectCartTotal,
} from '../../store/cart/cartSelector';

// Redux Actions
import { deleteItemsFromCart } from '../../store/cart/cartSlice';

// Components
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import PaymentForm from '../../components/PaymentForm/PaymentForm';
import Button from '../../components/Button/Button';

// Styles
import './checkout.styles.scss';

const Checkout = () => {
	useTitle('Checkout - Clothing eCommerce');

	const dispatch = useDispatch();

	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);

	// Handlers
	const deleteItemsHandler = () => dispatch(deleteItemsFromCart(cartItems));

	return (
		<div className='checkout-container'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>

			{cartItems.length > 0 ? (
				cartItems.map((cartItem) => (
					<CheckoutItem key={cartItem.id} cartItem={cartItem} />
				))
			) : (
				<p className='cart-empty'>Cart is empty, why not browse?</p>
			)}

			{/* {cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))} */}
			<div className='checkout-footer'>
				<Button onClick={deleteItemsHandler}>Empty Cart</Button>
				<span className='total'>Total: £{cartTotal}</span>
			</div>

			<PaymentForm />
		</div>
	);
};

export default Checkout;
