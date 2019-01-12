const { onUpdateTrigger } = require('../knexfile');

exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('telefone', (table) => {
      table
        .increments('id')
        .primary();
      table
        .integer('usuario_id')
        .references('usuario.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .string('telefone')
        .notNullable();
      table
        .timestamps(true, true);
    })
      .then(() => knex.raw(onUpdateTrigger('telefone'))),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('telefone'),
  ]);
};
