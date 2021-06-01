import { Book } from './book.entity';
import { IPaginationMeta } from 'nestjs-typeorm-paginate';

export interface BookPagination {
  items: Book[];
  meta: IPaginationMeta;
}

export interface BookSearchParameters {
  search: string;
  page: number;
  limit: number;
}
