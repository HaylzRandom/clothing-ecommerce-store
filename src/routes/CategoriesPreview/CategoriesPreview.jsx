import { useContext } from 'react';

// Styles
import './categoriesPreview.styles.scss';

// Context
import { CategoriesContext } from '../../contexts/CategoriesContext';

// Components
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';

const CategoriesPreview = () => {
	const { categoriesMap } = useContext(CategoriesContext);

	return (
		<>
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];

				return (
					<CategoryPreview key={title} title={title} products={products} />
				);
			})}
		</>
	);
};

export default CategoriesPreview;
