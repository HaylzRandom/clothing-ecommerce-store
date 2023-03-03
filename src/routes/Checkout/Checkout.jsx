import { useContext } from 'react';

// Contexts
import { CartContext } from '../../contexts/cartContext';

// Components
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

// Styles
import './checkout.styles.scss';

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);

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
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<span className='total'>Total: £{cartTotal}</span>
		</div>
	);
};

export default Checkout;
