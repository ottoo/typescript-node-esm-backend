import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Author } from "../author/author.entity.js";

@Entity({ name: "books" })
export class Book {
  @PrimaryGeneratedColumn("uuid")
  readonly id!: string;

  @Column()
  title!: string;

  @ManyToMany(() => Book, (book) => book.authors)
  authors!: Author[];
}
