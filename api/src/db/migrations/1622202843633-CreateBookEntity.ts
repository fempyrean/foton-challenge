import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBookEntity1622202843633 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'book',
        columns: [
          {
            name: 'id',
            type: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
            isPrimary: true,
          },
          {
            name: 'author',
            type: 'varchar',
            isNullable: false,
            isPrimary: true,
          },
          {
            name: 'description',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'cover',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'createdBy',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deletedAt',
            type: 'timestamp',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'FKOwnerId',
            referencedTableName: 'user',
            referencedColumnNames: ['id'],
            columnNames: ['createdBy'],
            onDelete: 'NO ACTION',
            onUpdate: 'NO ACTION',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('book');
  }
}
