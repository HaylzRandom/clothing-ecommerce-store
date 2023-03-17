import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Hooks
import useTitle from '../../hooks/useTitle';

// Styles
import './category.styles.scss';

// Redux Selectors
import { selectCategoriesMap } from '../../store/categories/categoriesSelector';

// Components
import ProductCard from '../../components/ProductCard/ProductCard';

const Category = () => {
	const { category } = useParams();

	console.log(category);

	useTitle(
		`${category[0].toUpperCase() + category.substring(1)} - Clothing eCommerce`
	);

	const categoriesMap = useSelector(selectCategoriesMap);

	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<>
			<h2 className='title'>{category}</h2>
			<div className='category-container'>
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</>
	);
};

export default Category;
