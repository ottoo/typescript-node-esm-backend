import { Field, ID, ObjectType } from 'type-graphql';
import { Author } from '../author/author.type.js';

@ObjectType()
export class Book {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  title!: string;

  @Field(() => [Author])
  authors!: Author[];
}
