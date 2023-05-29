import { Service } from 'typedi';
import { BookRepository } from './book.repository.js';

@Service()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async getBooks() {
    return await this.bookRepository.getAllBooks();
  }
}
