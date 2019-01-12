const { onUpdateTrigger } = require('../knexfile');

exports.up = function (knex, Promise) {
  return Promise.all([
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
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('profissao'),
  ]);
};
