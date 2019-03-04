const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema
    .createTable('competencia_categoria', (table) => {
      table.increments('id').primary();
      table.string('categoria');
      table.timestamps(true, true);
    })
    .then(() => knex.raw(onUpdateTrigger('competencia_categoria'))),
]);

exports.down = (knex, Promise) => Promise.all([knex.schema.dropTable('competencia_categoria')]);
