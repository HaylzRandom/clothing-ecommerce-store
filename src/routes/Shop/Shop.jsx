import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Utils
import {
	addCollectionAndDocuments,
	getCategoriesAndDocuments,
} from '../../utils/firebase/firebase';

// Redux Category Actions
import { setCategoriesMap } from '../../store/categories/categoryAction';

// Styles
import './shop.styles.scss';

// Routes
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import Category from '../Category/Category';

const Shop = () => {
	const dispatch = useDispatch();

	// Add products to Firebase - testing
	/* useEffect(() => {
		addCollectionAndDocuments('categories', SHOP_DATA, 'title');
	}, []); */

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			/* console.log(categoryMap); */
			dispatch(setCategoriesMap(categoryMap));
		};

		getCategoriesMap();
		// eslint-disable-next-line
	}, []);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
};
export default Shop;
