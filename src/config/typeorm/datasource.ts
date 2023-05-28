import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import { Author } from "../../modules/author/author.entity.js";
import { Book } from "../../modules/book/book.entity.js";

dotenv.config({ path: "./src/.env" });

export const postgresDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  entities: [Author, Book],
  logger: "advanced-console",
  logging: "all",
  ssl:
    process.env.NODE_ENV === "development"
      ? false
      : { rejectUnauthorized: false },
  migrations: ["src/database/migrations/*.ts"],
});

export const dataSource = await postgresDataSource.initialize();
