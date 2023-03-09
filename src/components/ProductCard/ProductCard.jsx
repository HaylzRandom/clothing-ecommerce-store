import { useDispatch, useSelector } from 'react-redux';

// Styles
import './productCard.styles.scss';

// Redux Selectors
import { selectCartItems } from '../../store/cart/cartSelector';

// Redux Actions
import { addItemToCart } from '../../store/cart/cartAction';

// Components
import Button from '../Button/Button';

const ProductCard = ({ product }) => {
	const dispatch = useDispatch();

	const cartItems = useSelector(selectCartItems);

	const { name, price, imageUrl } = product;

	// Handlers
	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

	return (
		<div className='product-card-container'>
			<img src={imageUrl} alt={`${name}`} />
			<div className='footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<Button buttonType='inverted' onClick={addProductToCart}>
				Add to cart
			</Button>
		</div>
	);
};

export default ProductCard;
