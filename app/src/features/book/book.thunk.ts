import { createAsyncThunk } from '@reduxjs/toolkit';

import fetchBooks from '@services/book/fetchBooks';
import createBook from '@services/book/createBook';
import {
	FetchBooksParameters,
	AddBookDTO,
} from '@features/book/book.interfaces';

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

export const addBook = createAsyncThunk(
	'add-book',
	async (bookData: AddBookDTO, thunkAPI) => {
		try {
			const { data } = await createBook(bookData);
			return data;
		} catch (err) {
			return thunkAPI.rejectWithValue({
				message: 'Unknown error occurred. Please try again',
			});
		}
	},
);
