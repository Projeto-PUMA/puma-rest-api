const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('recurso', (table) => {
    table
      .increments('id')
      .primary();
    table
      .string('nome');
    table
      .timestamps(true, true);
  })
    .then(() => knex.raw(onUpdateTrigger('recurso'))),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('recurso'),
]);
