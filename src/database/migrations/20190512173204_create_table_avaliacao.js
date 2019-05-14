const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema
    .createTable('avaliacao', (table) => {
      table.increments('id').primary();
      table.date('data_inicio');
      table.date('data_fim');

      table
        .integer('modelo_avaliacao_id')
        .references('modelo_avaliacao.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      table.boolean('avaliativa');

      table.timestamps(true, true);
    })
    .then(() => knex.raw(onUpdateTrigger('avaliacao'))),
]);

exports.down = (knex, Promise) => Promise.all([knex.schema.dropTable('avaliacao')]);
