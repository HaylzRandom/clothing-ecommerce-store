import { useSelector, useDispatch } from 'react-redux';

// Redux Selectors
import {
	selectIsCartOpen,
	selectCartCount,
} from '../../store/cart/cartSelector';

// Redux Actions
import { setIsCartOpen } from '../../store/cart/cartAction';

// Cart Icon
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

// Styles
import './cartIcon.styles.scss';

const CartIcon = () => {
	const dispatch = useDispatch();

	const isCartOpen = useSelector(selectIsCartOpen);
	const cartCount = useSelector(selectCartCount);

	// Handlers
	const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

	return (
		<div className='cart-icon-container' onClick={toggleIsCartOpen}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{cartCount}</span>
		</div>
	);
};
export default CartIcon;
