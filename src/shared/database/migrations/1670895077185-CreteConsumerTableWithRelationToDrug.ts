import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreteConsumerTableWithRelationToDrug1670895077185
  implements MigrationInterface
{
  name = 'CreteConsumerTableWithRelationToDrug1670895077185';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "consumer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(150) NOT NULL, "email" character varying(150) NOT NULL, "phone" character varying NOT NULL, "age" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_aaa7964a10d8eda4e4b0ada46fc" UNIQUE ("name"), CONSTRAINT "UQ_0b2593f4601955e13f567d2aede" UNIQUE ("email"), CONSTRAINT "PK_85625b4d465d3aa0eb905127822" PRIMARY KEY ("id"))',
    );
    await queryRunner.query('ALTER TABLE "recipe" ADD "consumerId" uuid');
    await queryRunner.query(
      'ALTER TABLE "recipe" ADD CONSTRAINT "FK_f766e492e82ee46d8033866ff34" FOREIGN KEY ("consumerId") REFERENCES "consumer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "recipe" DROP CONSTRAINT "FK_f766e492e82ee46d8033866ff34"',
    );
    await queryRunner.query('ALTER TABLE "recipe" DROP COLUMN "consumerId"');
    await queryRunner.query('DROP TABLE "consumer"');
  }
}
