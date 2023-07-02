import { Service } from 'typedi';
import { BookRepository } from './book.repository.js';

@Service()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async getAllBooks() {
    return await this.bookRepository.getAllBooks();
  }
}
