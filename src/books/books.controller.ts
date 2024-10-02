import { Controller, Get, HttpException } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async getBooks(): Promise<Book[]> {
    try {
      return await this.booksService.getBooks();
    } catch (error) {
      console.error('Database error:', error);
      throw new HttpException({ error: 'Server error' }, 500);
    }
  }
}
