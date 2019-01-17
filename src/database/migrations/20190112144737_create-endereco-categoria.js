const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('endereco_categoria', (table) => {
    table
      .increments('id')
      .primary();
    table
      .string('categoria')
      .unique()
      .notNullable();
    table
      .timestamps(true, true);
  })
    .then(() => knex.raw(onUpdateTrigger('endereco_categoria'))),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('endereco_categoria'),
]);
