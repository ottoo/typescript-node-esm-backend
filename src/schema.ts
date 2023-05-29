import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';
import { GraphQLSchema } from 'graphql';
import { BookResolver } from './modules/book/book.resolver.js';
import path from 'path';
import { fileDirName } from './utils/file-dir-name.js';

const { __dirname } = fileDirName(import.meta);

export const schema: GraphQLSchema = await buildSchema({
  resolvers: [BookResolver],
  container: Container,
  emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
});
