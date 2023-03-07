import { createContext, useState, useEffect } from 'react';

// Utils
import {
	addCollectionAndDocuments,
	getCategoriesAndDocuments,
} from '../utils/firebase/firebase';

// Data
import SHOP_DATA from '../data/shopData';

export const CategoriesContext = createContext({
	categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});

	// Add products to Firebase - testing
	/* useEffect(() => {
		addCollectionAndDocuments('categories', SHOP_DATA, 'title');
	}, []); */

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			/* console.log(categoryMap); */
			setCategoriesMap(categoryMap);
		};

		getCategoriesMap();
	}, []);

	const value = { categoriesMap };

	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
