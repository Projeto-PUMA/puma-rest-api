exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.alterTable('competencia', table => {
      table.text('descricao').alter();
    })
  ]);

exports.down = (knex, Promise) =>
  Promise.all([
    knex.schema.alterTable('competencia', table => {
      table.string('descricao').alter();
    })
  ]);
