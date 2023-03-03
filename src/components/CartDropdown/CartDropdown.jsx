// Styles
import './cartDropdown.styles.scss';

// Components
import Button from '../Button/Button';

const CartDropdown = () => {
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'></div>
			<Button>Go to Checkout</Button>
		</div>
	);
};

export default CartDropdown;
