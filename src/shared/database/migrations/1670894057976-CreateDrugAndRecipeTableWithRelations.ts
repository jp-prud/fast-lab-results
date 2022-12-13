import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDrugAndRecipeTableWithRelations1670894057976 implements MigrationInterface {
    name = 'CreateDrugAndRecipeTableWithRelations1670894057976'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "drug" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(150) NOT NULL, "shortDescription" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_8eb84cd14223413df15ed639934" UNIQUE ("name"), CONSTRAINT "PK_84d53e7c3b5e562421850eb9723" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "recipe" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(150) NOT NULL, "shortDescription" character varying NOT NULL, "medicName" character varying(100) NOT NULL, "documentPath" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "relatedDrugsId" uuid, CONSTRAINT "UQ_52f467a1124f1861bdaf15d14ec" UNIQUE ("title"), CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "recipe" ADD CONSTRAINT "FK_6615e5d1a9019626b6ef13a8b86" FOREIGN KEY ("relatedDrugsId") REFERENCES "drug"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipe" DROP CONSTRAINT "FK_6615e5d1a9019626b6ef13a8b86"`);
        await queryRunner.query(`DROP TABLE "recipe"`);
        await queryRunner.query(`DROP TABLE "drug"`);
    }

}
