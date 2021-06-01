import { Body, Controller, Post, Get, UseGuards, Query } from '@nestjs/common';

import { GetUser } from 'src/auth/session.decorators';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { BooksService } from './books.service';
import { Book } from './book.entity';
import { CreateBookDTO } from './dto/create-book.dto';
import { BookPagination, BookSearchParameters } from './book.interfaces';

@Controller('books')
class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createBook(
    @GetUser() user,
    @Body() body: CreateBookDTO,
  ): Promise<Book> {
    return this.booksService.create({ ...body, createdBy: user });
  }

  @Get()
  async getBooks(
    @Query() query: BookSearchParameters,
  ): Promise<BookPagination> {
    return this.booksService.getAll(query);
  }
}

export { BooksController };
