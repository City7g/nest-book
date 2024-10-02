import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  getBooks(): string {
    return 'All books';
  }
}
