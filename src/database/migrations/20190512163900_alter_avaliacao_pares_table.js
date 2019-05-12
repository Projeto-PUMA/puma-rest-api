exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.alterTable('avaliacao_pares', table => {
      table.dropColumns('data_inicio', 'data_fim', 'professor_id');
    })
  ]);

exports.down = (knex, Promise) =>
  Promise.all([
    knex.schema.alterTable('avaliacao_pares', table => {
      table.date('data_inicio');
      table.date('data_fim');

      table
        .integer('professor_id')
        .references('professor.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
  ]);
