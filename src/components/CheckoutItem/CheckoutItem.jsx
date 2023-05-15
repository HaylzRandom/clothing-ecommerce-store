import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

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

	console.log(cartItem);

	const dispatch = useDispatch();

	// Handlers
	const addItemHandler = () => dispatch(addItemToCart(cartItem));
	const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));
	const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));

	const content = (
		<>
			<div className='image-container'>
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='minus' onClick={removeItemHandler}>
					{/* &#10094; */}
					{/* &#45; */}
					<FontAwesomeIcon icon={faMinus} />
				</div>
				<span className='value'>{quantity}</span>
				<div className='plus' onClick={addItemHandler}>
					{/* &#10095; */}
					{/* &#43; */}
					<FontAwesomeIcon icon={faPlus} />
				</div>
			</span>
			<span className='price'>£{price}</span>
			<div className='remove-button' onClick={clearItemHandler}>
				{/* &#10005; */}
				<FontAwesomeIcon icon={faXmark} />
			</div>
		</>
	);

	return (
		<>
			<div className='checkout-item-container'>
				{cartItem ? content : <p>No items</p>}
			</div>
		</>
	);
};
export default CheckoutItem;
