function up(knex) {
  return knex
    .schema

    .createTable('user', table => {
      table.increments('id').unsigned().primary();
      table.timestamp('createdAt').notNullable().defaultTo(knex.raw('now()'));
      table.timestamp('updatedAt');
      table.boolean('deleted').notNullable().defaultTo(false);

      table.string('name').notNullable();
    })
    ;
}

function down(knex) {
  return knex
    .schema
    .dropTable('user');
}

module.exports = {
  up,
  down,
};
