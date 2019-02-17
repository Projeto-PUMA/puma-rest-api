
exports.up = (knex, Promise) => Promise.all([
  knex.schema.alterTable('projeto', (table) => {
    table.integer('psp_id').notNullable().alter();
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.alterTable('projeto', (table) => {
    table.integer('psp_id').alter();
  }),
]);
