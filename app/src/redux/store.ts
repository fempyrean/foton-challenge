import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { rootReducer, RootState } from './root-reducer';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import { PersistPartial } from 'redux-persist/lib/persistReducer';

const persistConfig = {
	key: 'foton-challenge',
	storage: AsyncStorage,
	whitelist: ['auth'],
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

const store = configureStore<RootState & PersistPartial, any>({
	reducer: persistedReducer,
	middleware: [thunk],
});

export const persistor = persistStore(store);

export default store;

// Infer the 'RootState' and 'AppDispatch' types from the store itself
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
