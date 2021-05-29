import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/** Modules */
import { UsersModule } from 'src/users/users.module';
import { BooksModule } from 'src/books/books.module';

/** Entities */
import { AuthModule } from './auth/auth.module';
import { User } from 'src/users/user.entity';
import { Book } from 'src/books/book.entity';

const entities = [User, Book];

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'src/db/db.sqlite',
      migrations: ['dist/db/migrations/*.js'],
      entities: entities,
      synchronize: false,
      autoLoadEntities: true,
    }),
    AuthModule,
    UsersModule,
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
