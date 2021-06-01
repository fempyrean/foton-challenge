import { createAsyncThunk } from '@reduxjs/toolkit';

import fetchBooks from '@services/book/fetchBooks';
import { FetchBooksParameters } from '@features/book/book.interfaces';

export const loadInitialBooks = createAsyncThunk(
	'books',
	async (search: string, thunkAPI) => {
		try {
			const { data } = await fetchBooks(search);
			return data;
		} catch (err) {
			return thunkAPI.rejectWithValue({
				message: 'Unknown error occurred. Please try again',
			});
		}
	},
);

export const loadMoreBooks = createAsyncThunk(
	'more-books',
	async ({ search, page }: FetchBooksParameters, thunkAPI) => {
		try {
			const { data } = await fetchBooks(search, page);
			return data;
		} catch (err) {
			return thunkAPI.rejectWithValue({
				message: 'Unknown error occurred. Please try again',
			});
		}
	},
);
