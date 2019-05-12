exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.alterTable('modelo_avaliacao', table => {
      table
        .integer('turma_id')
        .references('turma.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
  ]);

exports.down = (knex, Promise) =>
  Promise.all([
    knex.schema.alterTable('modelo_avaliacao', table => {
      table.dropColumn('turma_id');
    })
  ]);
