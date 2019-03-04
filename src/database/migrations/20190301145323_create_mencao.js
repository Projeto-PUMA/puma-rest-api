const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema
    .createTable('mencao', (table) => {
      table.increments('id').primary();
      table.string('mencao', 2);
      table.timestamps(true, true);
    })
    .then(() => knex.raw(onUpdateTrigger('mencao'))),
]);

exports.down = (knex, Promise) => Promise.all([knex.schema.dropTable('mencao')]);
