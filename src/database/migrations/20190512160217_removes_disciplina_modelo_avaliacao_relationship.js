exports.up = (knex, Promise) => Promise.all([
  knex.schema.alterTable('modelo_avaliacao', (table) => {
    table.dropColumn('disciplina_id');
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.alterTable('modelo_avaliacao', (table) => {
    table
      .integer('disciplina_id')
      .references('disciplina.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  }),
]);
