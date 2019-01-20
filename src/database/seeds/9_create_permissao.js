
exports.seed = knex => (
  // Deletes ALL existing entries
  knex('permissao').del()
    .then(() => (knex('permissao').insert([
      {
        recurso_id: 1,
        acao_id: 3,
        papel_id: 1,
      },
      {
        recurso_id: 1,
        acao_id: 5,
        papel_id: 1,
      },
      {
        recurso_id: 1,
        acao_id: 7,
        papel_id: 1,
      },
      {
        recurso_id: 2,
        acao_id: 1,
        papel_id: 1,
      },
      {
        recurso_id: 2,
        acao_id: 3,
        papel_id: 1,
      },
      {
        recurso_id: 2,
        acao_id: 5,
        papel_id: 1,
      },
      {
        recurso_id: 2,
        acao_id: 7,
        papel_id: 1,
      },
      {
        recurso_id: 3,
        acao_id: 1,
        papel_id: 1,
      },
      {
        recurso_id: 3,
        acao_id: 5,
        papel_id: 1,
      },
      {
        recurso_id: 3,
        acao_id: 7,
        papel_id: 1,
      },
      {
        recurso_id: 1,
        acao_id: 3,
        papel_id: 2,
      },
      {
        recurso_id: 1,
        acao_id: 6,
        papel_id: 2,
      },
      {
        recurso_id: 2,
        acao_id: 1,
        papel_id: 2,
      },
      {
        recurso_id: 2,
        acao_id: 3,
        papel_id: 2,
      },
      {
        recurso_id: 2,
        acao_id: 5,
        papel_id: 2,
      },
      {
        recurso_id: 2,
        acao_id: 7,
        papel_id: 2,
      },
      {
        recurso_id: 3,
        acao_id: 1,
        papel_id: 2,
      },
      {
        recurso_id: 3,
        acao_id: 6,
        papel_id: 2,
      },
      {
        recurso_id: 3,
        acao_id: 8,
        papel_id: 2,
      },
      {
        recurso_id: 1,
        acao_id: 3,
        papel_id: 3,
      },
      {
        recurso_id: 1,
        acao_id: 6,
        papel_id: 3,
      },
      {
        recurso_id: 1,
        acao_id: 8,
        papel_id: 3,
      },
      {
        recurso_id: 2,
        acao_id: 1,
        papel_id: 3,
      },
      {
        recurso_id: 2,
        acao_id: 3,
        papel_id: 3,
      },
      {
        recurso_id: 1,
        acao_id: 3,
        papel_id: 4,
      },
      {
        recurso_id: 1,
        acao_id: 6,
        papel_id: 4,
      },
      {
        recurso_id: 1,
        acao_id: 8,
        papel_id: 4,
      },
      {
        recurso_id: 2,
        acao_id: 1,
        papel_id: 4,
      },
      {
        recurso_id: 2,
        acao_id: 3,
        papel_id: 4,
      },
      {
        recurso_id: 1,
        acao_id: 3,
        papel_id: 5,
      },
      {
        recurso_id: 1,
        acao_id: 6,
        papel_id: 5,
      },
      {
        recurso_id: 1,
        acao_id: 8,
        papel_id: 5,
      },
      {
        recurso_id: 2,
        acao_id: 1,
        papel_id: 5,
      },
      {
        recurso_id: 2,
        acao_id: 3,
        papel_id: 5,
      },
      {
        recurso_id: 3,
        acao_id: 3,
        papel_id: 5,
      },
      {
        recurso_id: 1,
        acao_id: 3,
        papel_id: 6,
      },
      {
        recurso_id: 1,
        acao_id: 6,
        papel_id: 6,
      },
      {
        recurso_id: 1,
        acao_id: 8,
        papel_id: 6,
      },
      {
        recurso_id: 2,
        acao_id: 1,
        papel_id: 6,
      },
      {
        recurso_id: 2,
        acao_id: 3,
        papel_id: 6,
      },
      {
        recurso_id: 3,
        acao_id: 3,
        papel_id: 6,
      },
      {
        recurso_id: 1,
        acao_id: 3,
        papel_id: 7,
      },
      {
        recurso_id: 1,
        acao_id: 6,
        papel_id: 7,
      },
      {
        recurso_id: 1,
        acao_id: 8,
        papel_id: 7,
      },
      {
        recurso_id: 2,
        acao_id: 1,
        papel_id: 7,
      },
      {
        recurso_id: 2,
        acao_id: 4,
        papel_id: 7,
      },
    ])))
);
