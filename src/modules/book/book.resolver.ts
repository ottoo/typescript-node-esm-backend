import { FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { Book } from './book.type.js';
import { Service } from 'typedi';
import { BookService } from './book.service.js';
import { Author } from '../author/author.type.js';
import { AuthorService } from '../author/author.service.js';

@Service()
@Resolver(Book)
export class BookResolver {
  constructor(private readonly bookService: BookService, private readonly authorService: AuthorService) {}

  @Query(() => [Book])
  async books() {
    return await this.bookService.getAllBooks();
  }

  @FieldResolver(() => [Author])
  async authors(@Root() book: Book) {
    return await this.authorService.getAuthorsByBookId(book.id);
  }
}
