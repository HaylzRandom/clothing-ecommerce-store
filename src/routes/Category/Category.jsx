import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Styles
import './category.styles.scss';

// Contexts
import { CategoriesContext } from '../../contexts/CategoriesContext';

// Components
import ProductCard from '../../components/ProductCard/ProductCard';

const Category = () => {
	const { category } = useParams();

	const { categoriesMap } = useContext(CategoriesContext);

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
