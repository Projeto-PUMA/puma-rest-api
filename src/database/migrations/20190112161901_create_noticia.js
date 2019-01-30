const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('noticia', (table) => {
    table
      .increments('id')
      .primary();
    table
      .string('url_thumbnail');
    table
      .string('url_chamada')
      .nullable();
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

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('noticia'),
]);
