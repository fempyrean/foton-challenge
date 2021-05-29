import { EntityRepository, Repository } from 'typeorm';

import { Book } from './book.entity';

@EntityRepository(Book)
class BookRepository extends Repository<Book> {}

export { BookRepository };
