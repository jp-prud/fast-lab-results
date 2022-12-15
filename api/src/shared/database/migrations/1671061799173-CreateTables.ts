import { MigrationInterface, QueryRunner } from "typeorm";

export default class CreateTables1671061799173 implements MigrationInterface {
  name = "CreateTables1671061799173";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "drug" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(150) NOT NULL, "shortDescription" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_8eb84cd14223413df15ed639934" UNIQUE ("name"), CONSTRAINT "PK_84d53e7c3b5e562421850eb9723" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "recipe" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(150) NOT NULL, "shortDescription" character varying NOT NULL, "medicName" character varying(100) NOT NULL, "documentPath" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "consumerId" uuid, CONSTRAINT "UQ_52f467a1124f1861bdaf15d14ec" UNIQUE ("title"), CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "consumer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(150) NOT NULL, "email" character varying(150) NOT NULL, "phone" character varying NOT NULL, "age" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_aaa7964a10d8eda4e4b0ada46fc" UNIQUE ("name"), CONSTRAINT "UQ_0b2593f4601955e13f567d2aede" UNIQUE ("email"), CONSTRAINT "PK_85625b4d465d3aa0eb905127822" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "recipe_related_drugs_drug" ("recipeId" uuid NOT NULL, "drugId" uuid NOT NULL, CONSTRAINT "PK_942c2ae43b7ac5b56d99e0b685e" PRIMARY KEY ("recipeId", "drugId"))`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_d2811d8795100711d1f4e56dca" ON "recipe_related_drugs_drug" ("recipeId") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_256f4b0b245f18ff230debf624" ON "recipe_related_drugs_drug" ("drugId") `
    );
    await queryRunner.query(
      `ALTER TABLE "recipe" ADD CONSTRAINT "FK_f766e492e82ee46d8033866ff34" FOREIGN KEY ("consumerId") REFERENCES "consumer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "recipe_related_drugs_drug" ADD CONSTRAINT "FK_d2811d8795100711d1f4e56dcab" FOREIGN KEY ("recipeId") REFERENCES "recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "recipe_related_drugs_drug" ADD CONSTRAINT "FK_256f4b0b245f18ff230debf624e" FOREIGN KEY ("drugId") REFERENCES "drug"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "recipe_related_drugs_drug" DROP CONSTRAINT "FK_256f4b0b245f18ff230debf624e"`
    );
    await queryRunner.query(
      `ALTER TABLE "recipe_related_drugs_drug" DROP CONSTRAINT "FK_d2811d8795100711d1f4e56dcab"`
    );
    await queryRunner.query(
      `ALTER TABLE "recipe" DROP CONSTRAINT "FK_f766e492e82ee46d8033866ff34"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_256f4b0b245f18ff230debf624"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_d2811d8795100711d1f4e56dca"`
    );
    await queryRunner.query(`DROP TABLE "recipe_related_drugs_drug"`);
    await queryRunner.query(`DROP TABLE "consumer"`);
    await queryRunner.query(`DROP TABLE "recipe"`);
    await queryRunner.query(`DROP TABLE "drug"`);
  }
}
