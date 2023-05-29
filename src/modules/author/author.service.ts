import { Service } from 'typedi';
import { AuthorRepository } from './author.repository.js';

@Service()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  async getAuthorsByBookId(bookId: string) {
    return await this.authorRepository.getAuthorsByBookId(bookId);
  }
}
