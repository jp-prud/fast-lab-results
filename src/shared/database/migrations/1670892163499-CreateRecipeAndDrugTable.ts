import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateRecipeAndDrugTable1670892163499
  implements MigrationInterface
{
  name = 'CreateRecipeAndDrugTable1670892163499';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "recipes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(150) NOT NULL, "shortDescription" character varying NOT NULL, "medicName" character varying(100) NOT NULL, "documentPath" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_aebbaa1cd38e2e5996d58477535" UNIQUE ("title"), CONSTRAINT "PK_8f09680a51bf3669c1598a21682" PRIMARY KEY ("id"))',
    );
    await queryRunner.query(
      'CREATE TABLE "drugs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(150) NOT NULL, "shortDescription" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_68ee1c951216ab60f778d0dbed7" UNIQUE ("name"), CONSTRAINT "PK_a3788abdeb2ec977862b17351ad" PRIMARY KEY ("id"))',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "drugs"');
    await queryRunner.query('DROP TABLE "recipes"');
  }
}
