const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema
    .createTable('equipe', (table) => {
      table.increments('id').primary();
      table.string('nome');
      table
        .integer('projeto_id')
        .references('projeto.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('turma_id')
        .references('turma.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.timestamps(true, true);
    })
    .then(() => knex.raw(onUpdateTrigger('equipe'))),
]);

exports.down = (knex, Promise) => Promise.all([knex.schema.dropTable('equipe')]);
