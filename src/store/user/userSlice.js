import { createSlice } from '@reduxjs/toolkit';

const USER_INITIAL_STATE = {
	currentUser: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState: USER_INITIAL_STATE,
	reducers: {
		setCurrentUser(state, action) {
			state.currentUser = action.payload;
		},
	},
});

// Actions
export const { setCurrentUser } = userSlice.actions;

// Reducer
export const userReducer = userSlice.reducer;
