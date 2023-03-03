import { useContext } from 'react';

// Styles
import './cartDropdown.styles.scss';

// Components
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

// Contexts
import { CartContext } from '../../contexts/cartContext';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);

	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{cartItems.map((item) => (
					<CartItem key={item.id} cartItem={item} />
				))}
			</div>
			<Button>Go to Checkout</Button>
		</div>
	);
};

export default CartDropdown;
