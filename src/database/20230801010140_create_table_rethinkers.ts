import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('rethinkers', function (table) {
    table.increments('rethinker_id').primary().notNullable();
    table.string('rethinker_profile_image');
    table.string('type_account').notNullable();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('area').notNullable();
    table.string('sub_area');
    table.string('project_1');
    table.string('project_2');
    table.string('project_3');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('rethinkers');
}