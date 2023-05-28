import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "../book/book.entity.js";

@Entity()
export class Author {
  @PrimaryGeneratedColumn("uuid")
  readonly id!: string;

  @Column()
  name!: string;

  @ManyToMany(() => Author, (author) => author.books)
  books!: Book[];
}
