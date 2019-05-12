exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.alterTable('monitor', table => {
      table
        .integer('turma_id')
        .references('turma.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
  ]);

exports.down = (knex, Promise) =>
  Promise.all([
    knex.schema.alterTable('monitor', table => {
      table.dropColumn('turma_id');
    })
  ]);
