exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.alterTable('usuario', table => {
      table.string('matricula');
    })
  ]);

exports.down = (knex, Promise) =>
  Promise.all([
    knex.schema.alterTable('usuario', table => {
      table.dropColumn('matricula');
    })
  ]);
