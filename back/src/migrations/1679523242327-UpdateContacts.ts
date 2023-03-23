import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateContacts1679523242327 implements MigrationInterface {
    name = 'UpdateContacts1679523242327'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isFavorite"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "isFavorite" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "isFavorite"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "isFavorite" boolean NOT NULL DEFAULT false`);
    }

}
