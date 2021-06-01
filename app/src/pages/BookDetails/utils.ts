import { Book } from '@features/book/book.interfaces';

export interface HeaderProps {
	cover: string;
}

export interface RouteParams {
	book: Book;
}
