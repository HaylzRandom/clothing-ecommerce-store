import { configureStore } from '@reduxjs/toolkit';
// import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer, REGISTER, PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './rootReducer';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(
	Boolean
);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [REGISTER, PERSIST],
			},
		}).concat(middleWares),
});

export const persistor = persistStore(store);
