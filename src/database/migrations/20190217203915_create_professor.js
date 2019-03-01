const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema
    .createTable('professor', (table) => {
      table.increments('id').primary();
      table
        .integer('disciplina_id')
        .references('disciplina.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('usuario_id')
        .references('usuario.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.timestamps(true, true);
    })
    .then(() => knex.raw(onUpdateTrigger('professor'))),
]);

exports.down = (knex, Promise) => Promise.all([knex.schema.dropTable('professor')]);
