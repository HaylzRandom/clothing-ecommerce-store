import { createSlice } from '@reduxjs/toolkit';

// Helper Functions

// Add Single Item to Cart
const addCartItem = (cartItems, productToAdd) => {
	// Find if cartItems contains productToAdd
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);
	// If found, increment quantity
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	// Return new array with modified cartItems/new cart item
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// Reduce Number of Item from Cart
const removeCartItem = (cartItems, cartItemToRemove) => {
	// Find cart item to remove
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);

	// Check if quantity is equal to 1, remove from cart
	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	// Return cartitems with matching cart item with reduced quantity
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

// Remove Item from Cart
const clearCartItem = (cartItems, cartItemToClear) => {
	return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

// Delete All Items from Cart
const deleteCartItems = (cartItems) => {
	return (cartItems = []);
};

const CART_INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState: CART_INITIAL_STATE,
	reducers: {
		addItemToCart(state, action) {
			state.cartItems = addCartItem(state.cartItems, action.payload);
		},
		removeItemFromCart(state, action) {
			state.cartItems = removeCartItem(state.cartItems, action.payload);
		},
		clearItemFromCart(state, action) {
			state.cartItems = clearCartItem(state.cartItems, action.payload);
		},
		deleteItemsFromCart(state, action) {
			state.cartItems = deleteCartItems(state.cartItems, action.payload);
		},
		setIsCartOpen(state, action) {
			state.isCartOpen = action.payload;
		},
	},
});

// Actions
export const {
	setIsCartOpen,
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart,
	deleteItemsFromCart,
} = cartSlice.actions;

// Reducer
export const cartReducer = cartSlice.reducer;
