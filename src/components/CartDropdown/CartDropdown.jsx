import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import './cartDropdown.styles.scss';

// Components
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

// Contexts
import { CartContext } from '../../contexts/cartContext';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);

	const navigate = useNavigate();

	// Handlers
	const goToCheckout = () => {
		navigate('/checkout');
	};

	return (
		<div className='cart-dropdown-container'>
			{cartItems.length ? (
				<div className='cart-items'>
					{cartItems.map((item) => (
						<CartItem key={item.id} cartItem={item} />
					))}
				</div>
			) : (
				<span className='empty-message'>Your cart is empty!</span>
			)}

			<Button onClick={goToCheckout}>Go to Checkout</Button>
		</div>
	);
};

export default CartDropdown;
