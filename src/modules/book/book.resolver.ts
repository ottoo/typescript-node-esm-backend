// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.

import { Query, Resolver } from "type-graphql";
import { Book } from "./book.js";
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
