# Example Apollo Server project

This is a simple example of how to use Apollo Server 4 with TypeGraphQL and TypeORM, it also uses TypeDI for dependency injection. Database migrations are also set up in the `src/database/migrations` folder.

The repo has a few examples of GraphQL resolvers and how to use entities, services and repositories to fetch data from a database.

## Getting started

To get started, clone this repository and run `pnpm install` to install the dependencies.

## Database

This project uses a PostgreSQL database. You can use Docker to run a PostgreSQL database locally.

```
docker-compose up -d
```

## Migrations

To run the migrations, run `pnpm run migration:run`. This will run all the migrations in the `src/database/migrations` folder.

To create a new migration, run `pnpm run migration:create ./src/database/migrations/<name>`. This will create a new migration in the `src/database/migrations` folder.

To revert the last migration, run `pnpm run migration:revert`. This will revert the last migration.

## Running the server

To run the server, run `pnpm start`. This will start the server on port 4000.

## Packages

The most important packages used here are:

**[apollo-server](https://www.npmjs.com/package/apollo-server)**

The core Apollo Server package

**[type-graphql](https://www.npmjs.com/package/type-graphql)**

A library that makes it easy to create GraphQL schemas and resolvers with TypeScript.

**[typeorm](https://www.npmjs.com/package/typeorm)**

An ORM that can be used with TypeScript.

**[type-di](https://www.npmjs.com/package/type-di)**

A dependency injection library for TypeScript.

## TODO

- Add GraphQL dataloader example
- Add authentication example
- Add authorization example
