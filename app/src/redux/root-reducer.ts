import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '@features/auth/auth.slice';
import bookReducer from '@features/book/book.slice';

export const rootReducer = combineReducers({
	auth: authReducer,
	books: bookReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
