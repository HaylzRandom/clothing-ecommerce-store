// Utils
import { createAction } from '../../utils/reducer/reducer';

// Action Types
import CATEGORIES_ACTION_TYPES from './categoryTypes';

export const setCategories = (categoriesArray) =>
	createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
