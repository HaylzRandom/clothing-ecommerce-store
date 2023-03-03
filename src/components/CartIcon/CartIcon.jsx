import { useContext } from 'react';

// Contexts
import { CartContext } from '../../contexts/dropdownContext';

// Cart Icon
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

// Styles
import './cartIcon.styles.scss';

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen } = useContext(CartContext);

	// Handlers
	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

	return (
		<div className='cart-icon-container' onClick={toggleIsCartOpen}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>10</span>
		</div>
	);
};
export default CartIcon;
