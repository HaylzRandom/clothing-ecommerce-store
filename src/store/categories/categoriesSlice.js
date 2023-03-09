import { createSlice } from '@reduxjs/toolkit';

const CATEGORIES_INITIAL_STATE = {
	categories: [],
};

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState: CATEGORIES_INITIAL_STATE,
	reducers: {
		setCategories(state, action) {
			state.categories = action.payload;
		},
	},
});

// Actions
export const { setCategories } = categoriesSlice.actions;

// Reducer
export const categoriesReducer = categoriesSlice.reducer;
