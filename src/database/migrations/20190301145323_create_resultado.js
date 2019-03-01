const { onUpdateTrigger } = require("../knexfile");

exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema
      .createTable("resultado", table => {
        table.increments("id").primary();
        table.decimal("nota_final");
        table
          .integer("aluno_id")
          .references("aluno.id")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        table
          .integer("mencao_id")
          .references("mencao.id")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        table.timestamps(true, true);
      })
      .then(() => knex.raw(onUpdateTrigger("resultado")))
  ]);

exports.down = (knex, Promise) =>
  Promise.all([knex.schema.dropTable("resultado")]);
