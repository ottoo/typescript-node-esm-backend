import { Container, Service } from 'typedi';
import { DataSource } from 'typeorm';
import { Author } from './author.entity.js';

@Service()
export class AuthorRepository {
  getAuthorsByBookId(bookId: string) {
    return Container.get(DataSource)
      .getRepository(Author)
      .createQueryBuilder('author')
      .leftJoinAndSelect('author.books', 'book')
      .where('book.id = :bookId', { bookId })
      .getMany();
  }
}
