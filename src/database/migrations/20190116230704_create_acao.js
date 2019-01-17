const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('acao', (table) => {
    table
      .increments('id')
      .primary();
    table
      .string('nome');
    table
      .timestamps(true, true);
  })
    .then(() => knex.raw(onUpdateTrigger('acao'))),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('acao'),
]);
