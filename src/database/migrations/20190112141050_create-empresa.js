const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('empresa', (table) => {
    table
      .increments('id')
      .primary();
    table
      .string('cnpj')
      .notNullable();
    table
      .string('nome_fantasia')
      .notNullable();
    table
      .string('nome')
      .notNullable();
    table
      .integer('endereco_id')
      .references('endereco.id')
      .onUpdate('CASCADE')
      .onDelete('SET NULL');

    table
      .timestamps(true, true);
  })
    .then(() => knex.raw(onUpdateTrigger('empresa'))),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('empresa'),
]);
