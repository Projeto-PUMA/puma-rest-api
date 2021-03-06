const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('profissao', (table) => {
    table
      .string('id')
      .primary();
    table
      .string('termo')
      .notNullable();
    table
      .timestamps(true, true);
  })
    .then(() => knex.raw(onUpdateTrigger('profissao'))),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('profissao'),
]);
