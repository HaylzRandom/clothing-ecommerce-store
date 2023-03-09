import { useDispatch } from 'react-redux';

// Styles
import './productCard.styles.scss';

// Redux Actions
import { addItemToCart } from '../../store/cart/cartSlice';

// Components
import Button from '../Button/Button';

const ProductCard = ({ product }) => {
	const dispatch = useDispatch();

	const { name, price, imageUrl } = product;

	// Handlers
	const addProductToCart = () => dispatch(addItemToCart(product));

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
