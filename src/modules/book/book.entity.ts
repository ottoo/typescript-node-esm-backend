import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from '../author/author.entity.js';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  readonly id!: string;

  @Column()
  title!: string;

  @ManyToMany(() => Author, (author) => author.books)
  @JoinTable({ name: 'author_book' })
  authors!: Author[];
}
