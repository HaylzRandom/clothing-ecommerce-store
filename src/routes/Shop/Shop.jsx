import { useContext } from 'react';

// Styles
import './shop.styles.scss';

// Context
import { CategoriesContext } from '../../contexts/CategoriesContext';

// Components
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';

const Shop = () => {
	const { categoriesMap } = useContext(CategoriesContext);

	return (
		<div className='shop-container'>
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];

				return (
					<CategoryPreview key={title} title={title} products={products} />
				);
			})}
		</div>
	);
};
export default Shop;
