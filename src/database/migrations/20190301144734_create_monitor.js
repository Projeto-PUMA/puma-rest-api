const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema
    .createTable('monitor', (table) => {
      table.increments('id').primary();
      table
        .integer('usuario_id')
        .references('usuario.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('professor_id')
        .references('professor.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      table.timestamps(true, true);
    })
    .then(() => knex.raw(onUpdateTrigger('monitor'))),
]);

exports.down = (knex, Promise) => Promise.all([knex.schema.dropTable('monitor')]);
