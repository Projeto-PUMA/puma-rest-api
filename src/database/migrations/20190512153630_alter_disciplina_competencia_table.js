exports.up = (knex, Promise) => Promise.all([
  knex.schema.renameTable('disciplina_competencia', 'modelo_avaliacao'),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.renameTable('modelo_avaliacao', 'disciplina_competencia'),
]);
