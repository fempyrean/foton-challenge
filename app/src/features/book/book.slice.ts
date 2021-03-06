import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@redux/root-reducer';
import { BookStatus } from './book.enums';
import { BooksState, BookReject } from './book.interfaces';
import { loadInitialBooks, loadMoreBooks, addBook } from './book.thunk';

const initialState: BooksState = {
	status: BookStatus.IDLE,
	books: [],
	search: '',
};

export const bookSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		setSearch: (state, { payload }) => {
			return { ...state, search: payload };
		},
		unsetSearch: (state) => {
			return { ...state, search: '' };
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(loadInitialBooks.fulfilled, (state, { payload }) => {
				const { items, meta } = payload;

				return {
					...state,
					books: items,
					meta,
					status: BookStatus.SUCCESS,
				};
			})
			.addCase(loadInitialBooks.pending, (state) => {
				state.status = BookStatus.FETCHING;
			})
			.addCase(loadInitialBooks.rejected, (state, { payload }) => {
				const { message } = payload as BookReject;
				state.message = message;
				state.status = BookStatus.ERROR;
			})
			.addCase(loadMoreBooks.fulfilled, (state, { payload }) => {
				const { items, meta } = payload;
				const updatedBooks = state.books.concat(...items);

				return {
					...state,
					books: updatedBooks,
					meta,
					status: BookStatus.SUCCESS,
				};
			})
			.addCase(loadMoreBooks.pending, (state) => {
				state.status = BookStatus.FETCHING;
			})
			.addCase(addBook.fulfilled, (state, { payload }) => {
				const updatedBooks = [payload, ...state.books];

				return {
					...state,
					books: updatedBooks,
					status: BookStatus.SUCCESS,
				};
			})
			.addCase(addBook.pending, (state) => {
				state.status = BookStatus.FETCHING;
			})
			.addCase(addBook.rejected, (state, { payload }) => {
				const { message } = payload as BookReject;
				state.message = message;
				state.status = BookStatus.ERROR;
			}),
});

export const { setSearch, unsetSearch } = bookSlice.actions;

export const selectBooks = ({ books }: RootState) => books.books;

export default bookSlice.reducer;
