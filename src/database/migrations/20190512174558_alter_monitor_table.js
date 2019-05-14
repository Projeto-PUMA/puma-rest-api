exports.up = (knex, Promise) => Promise.all([
  knex.schema.alterTable('monitor', (table) => {
    table.dropColumn('professor_id');
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.alterTable('monitor', (table) => {
    table
      .integer('professor_id')
      .references('professor.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  }),
]);
