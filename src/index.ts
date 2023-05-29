import 'reflect-metadata';

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { schema } from './schema.js';
import { DataSource } from 'typeorm';
import { dataSource } from './config/typeorm/postgres.datasource.js';
import { Container } from 'typedi';

Container.set(DataSource, dataSource);

const server = new ApolloServer({
  schema,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
