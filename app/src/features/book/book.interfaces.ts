import { BookStatus } from './book.enums';

export interface Meta {
	totalItems: number;
	itemCount: number;
	itemsPerPage: number;
	totalPages: number;
	currentPage: number;
}

export interface Book {
	id: string;
	name: string;
	author: string;
	description: string;
	cover: string;
	createdAt?: string;
	updatedAt?: string;
	deletedAt?: string | null;
}

export interface BooksState {
	status: BookStatus;
	books: Book[];
	search: '';
	meta?: Meta;
	message?: string;
}

export interface BookReject {
	message: string;
}

export interface BookResponse {
	items: Book[];
	meta: Meta;
}

export interface FetchBooksParameters {
	page: number;
	search: string;
}
