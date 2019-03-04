const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema
    .createTable('avaliacao', (table) => {
      table.increments('id').primary();
      table.decimal('nota');
      table.date('data_inicio');
      table.date('data_fim');
      table
        .integer('aluno_id')
        .references('aluno.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('aluno_avaliador_id')
        .references('aluno.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('professor_id')
        .references('professor.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.timestamps(true, true);
    })
    .then(() => knex.raw(onUpdateTrigger('avaliacao'))),
]);

exports.down = (knex, Promise) => Promise.all([knex.schema.dropTable('avaliacao')]);
