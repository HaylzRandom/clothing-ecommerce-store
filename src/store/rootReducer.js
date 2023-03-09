import { combineReducers } from 'redux';

// Reducers
import { userReducer } from './users/userReducer';
import { categoriesReducer } from './categories/categoryReducer';
import { cartReducer } from './cart/cartReducer';

export const rootReducer = combineReducers({
	user: userReducer,
	categories: categoriesReducer,
	cart: cartReducer,
});
