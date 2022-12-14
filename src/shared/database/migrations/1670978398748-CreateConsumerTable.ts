import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateConsumerTable1670978398748 implements MigrationInterface {
    name = 'CreateConsumerTable1670978398748'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "consumer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(150) NOT NULL, "email" character varying(150) NOT NULL, "phone" character varying NOT NULL, "age" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_aaa7964a10d8eda4e4b0ada46fc" UNIQUE ("name"), CONSTRAINT "UQ_0b2593f4601955e13f567d2aede" UNIQUE ("email"), CONSTRAINT "PK_85625b4d465d3aa0eb905127822" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "consumer"`);
    }

}
