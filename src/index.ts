import 'reflect-metadata';

import { ApolloServer, ApolloServerPlugin, BaseContext } from '@apollo/server';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import { startStandaloneServer } from '@apollo/server/standalone';
import { schema } from './schema.js';
import { DataSource } from 'typeorm';
import { dataSource } from './config/typeorm/postgres.datasource.js';
import { Container } from 'typedi';

/**
 * Set the data source in the container for sharing it with the repositories. This is a workaround for the lack of
 * support for DI in TypeORM since they deprected the useContainer method for some reason.
 * https://github.com/typeorm/typeorm/issues/9096
 */
Container.set(DataSource, dataSource);

const addPlugins = () => {
  const plugins: ApolloServerPlugin<BaseContext>[] = [];

  if (process.env.NODE_ENV === 'production') {
    plugins.push(ApolloServerPluginLandingPageDisabled());
  }
  return plugins;
};

const server = new ApolloServer({
  schema,
  plugins: addPlugins(),
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
