
exports.seed = knex => (
  // Deletes ALL existing entries
  knex('permissao').del()
    .then(() => (knex('permissao').insert([
      // ADMIN
      // usuario
      { papel_id: 1, acao_id: 1, recurso_id: 1 }, // create any
      { papel_id: 1, acao_id: 3, recurso_id: 1 }, // read any
      { papel_id: 1, acao_id: 5, recurso_id: 1 }, // update:any
      { papel_id: 1, acao_id: 7, recurso_id: 1 }, // delete:any
      // projeto
      { papel_id: 1, acao_id: 1, recurso_id: 2 }, // create any
      { papel_id: 1, acao_id: 3, recurso_id: 2 }, // read any
      { papel_id: 1, acao_id: 5, recurso_id: 2 }, // update:any
      { papel_id: 1, acao_id: 7, recurso_id: 2 }, // delete:any
      // noticia
      { papel_id: 1, acao_id: 1, recurso_id: 3 }, // create any
      { papel_id: 1, acao_id: 3, recurso_id: 3 }, // read any
      { papel_id: 1, acao_id: 5, recurso_id: 3 }, // update:any
      { papel_id: 1, acao_id: 7, recurso_id: 3 }, // delete:any

      // COORDENADOR
      // usuario
      { papel_id: 2, acao_id: 3, recurso_id: 1 }, // read any
      { papel_id: 2, acao_id: 6, recurso_id: 1 }, // update own
      { papel_id: 2, acao_id: 7, recurso_id: 1 }, // delete any
      // projeto
      { papel_id: 2, acao_id: 1, recurso_id: 2 }, // create any
      { papel_id: 2, acao_id: 3, recurso_id: 2 }, // read any
      { papel_id: 2, acao_id: 5, recurso_id: 2 }, // update any
      { papel_id: 2, acao_id: 7, recurso_id: 2 }, // delete any
      // noticia
      { papel_id: 2, acao_id: 1, recurso_id: 3 }, // create any
      { papel_id: 2, acao_id: 3, recurso_id: 3 }, // read any
      { papel_id: 2, acao_id: 6, recurso_id: 3 }, // update own
      { papel_id: 2, acao_id: 8, recurso_id: 3 }, // delete own

      // PROFESSOR
      // usuario
      { papel_id: 3, acao_id: 3, recurso_id: 1 }, // read any
      { papel_id: 3, acao_id: 6, recurso_id: 1 }, // update own
      { papel_id: 3, acao_id: 8, recurso_id: 1 }, // delete own
      // projeto
      { papel_id: 3, acao_id: 1, recurso_id: 2 }, // create any
      { papel_id: 3, acao_id: 3, recurso_id: 2 }, // read any
      // noticia
      { papel_id: 3, acao_id: 3, recurso_id: 3 }, // read any

      // ALUNO
      // usuario
      { papel_id: 4, acao_id: 3, recurso_id: 1 }, // read any
      { papel_id: 4, acao_id: 6, recurso_id: 1 }, // update own
      { papel_id: 4, acao_id: 8, recurso_id: 1 }, // delete own
      // projeto
      { papel_id: 4, acao_id: 1, recurso_id: 2 }, // create any
      { papel_id: 4, acao_id: 3, recurso_id: 2 }, // read any
      // noticia
      { papel_id: 4, acao_id: 3, recurso_id: 3 }, // read any

      // MONITOR
      // usuario
      { papel_id: 5, acao_id: 3, recurso_id: 1 }, // read any
      { papel_id: 5, acao_id: 6, recurso_id: 1 }, // update own
      { papel_id: 5, acao_id: 8, recurso_id: 1 }, // delete own
      // projeto
      { papel_id: 5, acao_id: 1, recurso_id: 2 }, // create any
      { papel_id: 5, acao_id: 3, recurso_id: 2 }, // read any
      // noticia
      { papel_id: 5, acao_id: 3, recurso_id: 3 }, // read any

      // SECRETARIA
      // usuario
      { papel_id: 6, acao_id: 3, recurso_id: 1 }, // read any
      { papel_id: 6, acao_id: 6, recurso_id: 1 }, // update own
      { papel_id: 6, acao_id: 8, recurso_id: 1 }, // delete own
      // projeto
      { papel_id: 6, acao_id: 1, recurso_id: 2 }, // create any
      { papel_id: 6, acao_id: 3, recurso_id: 2 }, // read any
      // noticia
      { papel_id: 6, acao_id: 3, recurso_id: 3 }, // read any

      // USUARIO
      // usuario
      { papel_id: 7, acao_id: 3, recurso_id: 1 }, // read any
      { papel_id: 7, acao_id: 7, recurso_id: 1 }, // update own
      { papel_id: 7, acao_id: 8, recurso_id: 1 }, // delete own
      // projeto
      { papel_id: 7, acao_id: 1, recurso_id: 2 }, // create any
      { papel_id: 7, acao_id: 3, recurso_id: 2 }, // read any
      // noticia
      { papel_id: 7, acao_id: 3, recurso_id: 3 }, // read any
    ])))
);
