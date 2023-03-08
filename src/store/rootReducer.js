import { combineReducers } from 'redux';

// Reducers
import { userReducer } from './users/userReducer';
import { categoriesReducer } from './categories/categoryReducer';

export const rootReducer = combineReducers({
	user: userReducer,
	categories: categoriesReducer,
});
