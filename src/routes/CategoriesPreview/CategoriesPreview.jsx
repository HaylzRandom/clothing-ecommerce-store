import { useSelector } from 'react-redux';

// Hooks
import useTitle from '../../hooks/useTitle';

// Redux Selectors
import { selectCategoriesMap } from '../../store/categories/categoriesSelector';

// Styles
import './categoriesPreview.styles.scss';

// Components
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';

const CategoriesPreview = () => {
	useTitle('Shop - Clothing eCommerce');

	const categoriesMap = useSelector(selectCategoriesMap);

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
