import { useContext } from 'react';

// Styles
import './productCard.styles.scss';

// Contexts
import { CartContext } from '../../contexts/cartContext';

// Components
import Button from '../Button/Button';

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;

	const { addItemToCart } = useContext(CartContext);

	// Handlers
	const addProductToCart = () => addItemToCart(product);

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
