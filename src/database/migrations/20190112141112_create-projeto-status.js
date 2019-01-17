const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('projeto_status', (table) => {
    table
      .increments('id')
      .primary();
    table
      .string('status')
      .notNullable();
    table
      .timestamps(true, true);
  })
    .then(() => knex.raw(onUpdateTrigger('projeto_status'))),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('projeto_status'),
]);
