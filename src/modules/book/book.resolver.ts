import { Query, Resolver } from "type-graphql";
import { Book } from "./book.type.js";
import { Service } from "typedi";
import { BookService } from "./book.service.js";

@Service()
@Resolver(Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => [Book])
  async books() {
    return await this.bookService.getBooks();
  }
}
