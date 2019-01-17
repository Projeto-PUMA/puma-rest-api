const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('papel', (table) => {
    table
      .increments('id')
      .primary();
    table
      .string('nome')
      .unique()
      .notNullable();
    table
      .timestamps(true, true);
  })
    .then(() => knex.raw(onUpdateTrigger('papel'))),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('papel'),
]);
