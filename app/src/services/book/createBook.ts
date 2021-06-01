import api from '@services/api';
import { AxiosResponse } from 'axios';
import { AddBookDTO, Book } from '@features/book/book.interfaces';

const createBook = async (
	bookData: AddBookDTO,
): Promise<AxiosResponse<Book>> => {
	return await api.post('/books', bookData);
};

export default createBook;
