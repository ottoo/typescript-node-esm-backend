import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableUnique,
} from "typeorm";

export class AuthorTableBookId1685322497833 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "author_book",
        columns: [
          {
            name: "author_id",
            type: "uuid",
            generationStrategy: "uuid",
          },
          {
            name: "book_id",
            type: "uuid",
            generationStrategy: "uuid",
          },
        ],
        foreignKeys: [
          {
            referencedColumnNames: ["id"],
            referencedTableName: "author",
            columnNames: ["author_id"],
          },
          {
            referencedColumnNames: ["id"],
            referencedTableName: "book",
            columnNames: ["book_id"],
          },
        ],
      })
    );

    await queryRunner.createUniqueConstraint(
      "author_book",
      new TableUnique({
        name: "author_book_unique",
        columnNames: ["author_id", "book_id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropUniqueConstraint("author_book", "author_book_unique");
    await queryRunner.dropTable("author_book");
  }
}
