const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema
    .createTable('aluno', (table) => {
      table.increments('id').primary();
      table.string('nome');
      table
        .integer('usuario')
        .references('usuario.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('equipe_id')
        .references('equipe.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.timestamps(true, true);
    })
    .then(() => knex.raw(onUpdateTrigger('aluno'))),
]);

exports.down = (knex, Promise) => Promise.all([knex.schema.dropTable('aluno')]);
