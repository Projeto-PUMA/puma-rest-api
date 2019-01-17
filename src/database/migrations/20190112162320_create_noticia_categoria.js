const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('noticia_categoria', (table) => {
    table
      .increments('id')
      .primary();
    table
      .string('categoria')
      .notNullable();
    table
      .timestamps(true, true);
  })
    .then(() => knex.raw(onUpdateTrigger('noticia_categoria'))),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('noticia_categoria'),
]);
