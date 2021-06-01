import { BadRequestException, Injectable } from '@nestjs/common';
import { paginate } from 'nestjs-typeorm-paginate';

import { Book } from './book.entity';
import { BookRepository } from './book.repository';
import { CreateBookDTO } from './dto/create-book.dto';
import { BookPagination, BookSearchParameters } from './book.interfaces';

@Injectable()
export class BooksService {
  constructor(private readonly bookRepository: BookRepository) {}

  async create(data: CreateBookDTO): Promise<Book> {
    const { name, author } = data;

    const existingBook = await this.bookRepository
      .createQueryBuilder('book')
      .where('(book.name = :name AND book.author = :author)', { name, author })
      .getOne();
    if (existingBook)
      throw new BadRequestException(
        'There already is a book with this name registered for this author',
      );

    const book = this.bookRepository.create(data);
    await this.bookRepository.save(book);

    return book;
  }

  async getAll({
    search,
    page = 1,
    limit = 12,
  }: BookSearchParameters): Promise<BookPagination> {
    const bookQuery = await this.bookRepository
      .createQueryBuilder('book')
      .where('book.name LIKE (:name)', { name: `%${search}%` })
      .orWhere('book.author LIKE (:author)', { author: `%${search}%` });

    const results = await paginate<Book>(bookQuery, { page, limit });

    return results;
  }
}
