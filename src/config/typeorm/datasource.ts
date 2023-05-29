import * as dotenv from "dotenv";
import { DataSourceOptions } from "typeorm";
import { Author } from "../../modules/author/author.entity.js";
import { Book } from "../../modules/book/book.entity.js";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

dotenv.config({ path: "./src/.env" });

export const dataSourceConfig: DataSourceOptions = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  entities: [Author, Book],
  logger: "advanced-console",
  logging: "all",
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
  migrations: ["src/database/migrations/*.ts"],
  namingStrategy: new SnakeNamingStrategy(),
};
