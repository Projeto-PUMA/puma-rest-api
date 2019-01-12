const { onUpdateTrigger } = require('../knexfile');

exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('noticia', (table) => {
      table
        .increments('id')
        .primary();
      table
        .string('titulo')
        .notNullable();
      table
        .string('subtitulo')
        .notNullable();
      table
        .text('texto')
        .notNullable();
      table
        .integer('usuario_id')
        .references('usuario.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .timestamps(true, true);
    })
      .then(() => knex.raw(onUpdateTrigger('noticia'))),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('noticia'),
  ]);
};
