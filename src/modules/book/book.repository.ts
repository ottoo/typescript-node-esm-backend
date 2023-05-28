import { Container, Service } from "typedi";
import { Book } from "./book.entity.js";
import { DataSource } from "typeorm";

@Service()
export class BookRepository {
  getAllBooks() {
    return Container.get(DataSource).getRepository(Book).find();
  }
}
