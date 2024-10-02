import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async getBooks(): Promise<Book[]> {
    return await this.booksService.getBooks();
  }

  @Get(':id')
  async getBookById(@Param('id', ParseIntPipe) id: number): Promise<Book> {
    return await this.booksService.getBookById(id);
  }
}
