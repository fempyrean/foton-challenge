import api from '@services/api';
import { AxiosResponse } from 'axios';
import { BookResponse } from '@features/book/book.interfaces';

const fetchBooks = async (
	search: string,
	page = 1,
): Promise<AxiosResponse<BookResponse>> => {
	return await api.get('/books', { params: { search, page } });
};

export default fetchBooks;
