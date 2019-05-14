exports.up = (knex, Promise) => Promise.all([
  knex.schema.alterTable('disciplina_competencia', (table) => {
    table.dropColumns('nome', 'descricao');
    table.decimal('peso').notNullable();
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.alterTable('disciplina_competencia', (table) => {
    table.dropColumn('peso');
    table.string('nome');
    table.string('descricao');
  }),
]);
