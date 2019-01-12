const { onUpdateTrigger } = require('../knexfile');

exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('psp', (table) => {
      table
        .increments('id')
        .primary();
      table
        .integer('psp_pai_id')
        .references('psp.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .string('nome')
        .notNullable();
      table
        .string('descricao')
        .notNullable();
      table
        .timestamps(true, true);
    })
      .then(() => knex.raw(onUpdateTrigger('psp'))),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('psp'),
  ]);
};
