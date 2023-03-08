// User Actions Types
import USER_ACTION_TYPES from './userTypes';

export const USER_INITIAL_STATE = {
	currentUser: null,
};

// Reducer
export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				...state,
				currentUser: payload,
			};
		default:
			return state;
	}
};
