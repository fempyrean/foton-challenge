import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';

import { GetUser } from 'src/auth/session.decorators';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { BooksService } from './books.service';
import { Book } from './book.entity';
import { CreateBookDTO } from './dto/create-book.dto';

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
  async getBooks(): Promise<Book[]> {
    return this.booksService.getAll();
  }
}

export { BooksController };
