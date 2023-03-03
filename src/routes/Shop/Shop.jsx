import { useContext } from 'react';

// Styles
import './shop.styles.scss';

// Context
import { ProductsContext } from '../../contexts/productsContext';

// Components
import ProductCard from '../../components/ProductCard/ProductCard';

const Shop = () => {
	const { products } = useContext(ProductsContext);

	return (
		<div className='products-container'>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};
export default Shop;
