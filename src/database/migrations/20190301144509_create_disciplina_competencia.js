const { onUpdateTrigger } = require("../knexfile");

exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema
      .createTable("disciplina_competencia", table => {
        table.increments("id").primary();
        table
          .integer("competencia_id")
          .references("competencia.id")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        table
          .integer("disciplina_id")
          .references("disciplina.id")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        table.string("nome");
        table.string("descricao");
        table.timestamps(true, true);
      })
      .then(() => knex.raw(onUpdateTrigger("disciplina_competencia")))
  ]);

exports.down = (knex, Promise) =>
  Promise.all([knex.schema.dropTable("disciplina_competencia")]);
