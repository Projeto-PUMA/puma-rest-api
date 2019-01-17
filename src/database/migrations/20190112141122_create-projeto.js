const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('projeto', (table) => {
    table
      .increments('id')
      .primary();
    table
      .string('titulo')
      .notNullable();
    table
      .text('problematica')
      .notNullable();
    table
      .text('objetivo')
      .notNullable();
    table
      .string('anexo')
      .notNullable();
    table
      .integer('projeto_status_id')
      .references('projeto_status.id')
      .defaultTo(1)
      .onDelete('SET NULL')
      .onUpdate('CASCADE');
    table
      .integer('usuario_id')
      .references('usuario.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table
      .integer('empresa_id')
      .references('empresa.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table
      .integer('psp_id')
      .references('psp.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table
      .timestamps(true, true);
  })
    .then(() => knex.raw(onUpdateTrigger('projeto'))),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('projeto'),
]);
