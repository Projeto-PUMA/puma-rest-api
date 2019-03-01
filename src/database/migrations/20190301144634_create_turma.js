const { onUpdateTrigger } = require("../knexfile");

exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema
      .createTable("turma", table => {
        table.increments("id").primary();
        table.string("nome");
        table.date("data_inicio");
        table.date("data_fim");
        table
          .integer("turma_status_id")
          .references("turma_status.id")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        table
          .integer("professor_id")
          .references("professor.id")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");

        table.timestamps(true, true);
      })
      .then(() => knex.raw(onUpdateTrigger("turma")))
  ]);

exports.down = (knex, Promise) => Promise.all([knex.schema.dropTable("turma")]);
