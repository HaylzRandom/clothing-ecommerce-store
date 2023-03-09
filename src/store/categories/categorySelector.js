import { createSelector } from 'reselect';

// Categories Slice
const selectCategoryReducer = (state) => state.categories;

// Memoized Selector
export const selectCategories = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
	[selectCategories],
	(categories) =>
		categories.reduce((acc, category) => {
			const { title, items } = category;

			acc[title.toLowerCase()] = items;

			return acc;
		}, {})
);
