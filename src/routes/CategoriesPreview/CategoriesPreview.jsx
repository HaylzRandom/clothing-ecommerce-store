import { useSelector } from 'react-redux';

// Redux Selectors
import { selectCategoriesMap } from '../../store/categories/categoriesSelector';

// Styles
import './categoriesPreview.styles.scss';

// Components
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';

const CategoriesPreview = () => {
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
