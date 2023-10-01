import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUserTable1696138537264 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name:'users',
                columns:[
                    {
                        name:'id',
                        type:'int',
                        isPrimary:true,
                        generationStrategy:'increment'
                    },
                    {
                        name:'name',
                        type:'varchar',
                        length:'100',
                        isNullable:false
                    },
                    {
                        name:'email',
                        type:'varchar',
                        length:'100',
                        isNullable:false
                    },
                    {
                        name:'password',
                        type:'varchar',
                        length:'256',
                        isNullable:false
                    }
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('users')
    }

}
