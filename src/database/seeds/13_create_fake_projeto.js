
exports.seed = knex => (
    knex('projeto').del()
        .then(() => (knex('projeto').insert(
            {
                "titulo": "Titulo do projeto",
                "problematica": "problematica do projeto",
                "objetivo": "objetivo do projeto",
                "anexo": "asdsad",
                "usuario_id": 1,
                "psp_id": 21
            }
        )))
);
