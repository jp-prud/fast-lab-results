import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateRelationConsumerWithRecipe1670978573079 implements MigrationInterface {
    name = 'CreateRelationConsumerWithRecipe1670978573079'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipe" ADD "consumerId" uuid`);
        await queryRunner.query(`ALTER TABLE "recipe" ADD CONSTRAINT "FK_f766e492e82ee46d8033866ff34" FOREIGN KEY ("consumerId") REFERENCES "consumer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipe" DROP CONSTRAINT "FK_f766e492e82ee46d8033866ff34"`);
        await queryRunner.query(`ALTER TABLE "recipe" DROP COLUMN "consumerId"`);
    }

}
