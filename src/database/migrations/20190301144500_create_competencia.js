const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema
    .createTable('competencia', (table) => {
      table.increments('id').primary();
      table
        .integer('competencia_categoria_id')
        .references('competencia_categoria.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('competencia_pai_id')
        .references('competencia.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.string('nome');
      table.string('descricao');
      table.timestamps(true, true);
    })
    .then(() => knex.raw(onUpdateTrigger('competencia'))),
]);

exports.down = (knex, Promise) => Promise.all([knex.schema.dropTable('competencia')]);
