import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1662383815126 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "coffee"
        ADD "description" CHARACTER VARYING`, undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "coffee"
        DROP COLUMN "description"`, undefined);
  }

}
