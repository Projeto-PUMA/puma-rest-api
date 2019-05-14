exports.up = (knex, Promise) => Promise.all([
  knex.schema.alterTable('aluno', (table) => {
    table.dropColumn('nome');
    table.renameColumn('usuario', 'usuario_id');
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.alterTable('aluno', (table) => {
    table.string('nome');
    table.renameColumn('usuario_id', 'usuario');
  }),
]);
