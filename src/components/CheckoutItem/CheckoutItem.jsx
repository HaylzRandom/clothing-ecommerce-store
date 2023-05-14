import { useDispatch } from 'react-redux';

// Redux Actions
import {
	clearItemFromCart,
	addItemToCart,
	removeItemFromCart,
} from '../../store/cart/cartSlice';

// Styles
import './checkoutItem.styles.scss';

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	const dispatch = useDispatch();

	// Handlers
	const addItemHandler = () => dispatch(addItemToCart(cartItem));
	const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));
	const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));

	return (
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow minus' onClick={removeItemHandler}>
					{/* &#10094; */}
					&#45;
				</div>
				<span className='value'>{quantity}</span>
				<div className='arrow plus' onClick={addItemHandler}>
					{/* &#10095; */}
					&#43;
				</div>
			</span>
			<span className='price'>£{price}</span>
			<div className='remove-button' onClick={clearItemHandler}>
				&#10005;
			</div>
		</div>
	);
};
export default CheckoutItem;
