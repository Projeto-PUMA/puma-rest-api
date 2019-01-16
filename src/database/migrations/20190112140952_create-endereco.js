const { onUpdateTrigger } = require('../knexfile');

exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('endereco', (table) => {
      table
        .increments('id')
        .primary();
      table
        .string('estado')
        .notNullable();
      table
        .string('cep')
        .notNullable();
      table
        .string('cidade')
        .notNullable();
      table
        .string('bairro')
        .notNullable();
      table
        .string('rua')
        .notNullable();
      table
        .string('numero')
        .notNullable();
      table
        .string('complemento')
      table
        .timestamps(true, true);
    })
      .then(() => knex.raw(onUpdateTrigger('endereco'))),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('endereco'),
  ]);
};
