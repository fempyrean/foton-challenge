import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { BookRepository } from './book.repository';
@Module({
  imports: [TypeOrmModule.forFeature([BookRepository])],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService, TypeOrmModule],
})
export class BooksModule {}
