const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('disciplina', (table) => {
    table
      .increments('id')
      .primary();
    table
      .string('nome');
    table
      .string('codigo_mw')
      .nullable();
    table
      .integer('psp_id')
      .references('psp.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table
      .timestamps(true, true);
  })
    .then(() => knex.raw(onUpdateTrigger('disciplina'))),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('disciplina'),
]);
