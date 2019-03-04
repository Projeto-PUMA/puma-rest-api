const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema
    .createTable('turma_status', (table) => {
      table.increments('id').primary();
      table.string('status');
      table.timestamps(true, true);
    })
    .then(() => knex.raw(onUpdateTrigger('turma_status'))),
]);

exports.down = (knex, Promise) => Promise.all([knex.schema.dropTable('turma_status')]);
