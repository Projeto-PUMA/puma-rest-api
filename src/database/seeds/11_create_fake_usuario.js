
exports.seed = knex => (
    knex('usuario').del()
        .then(() => (knex('usuario').insert([
            {
                id: 1,
                nome: "admin",
                email: "admin@admin",
                senha: "admin",
                cpf: "admin",
                escolaridade: "ens sup comp",
                endereco_id: 1,
                profissao_id: "0000-00",
                ativo: true
            },
            {
                id: 2,
                nome: "usuario",
                email: "usuario@usuario",
                senha: "usuario",
                cpf: "usuario",
                escolaridade: "ens sup comp",
                endereco_id: 1,
                profissao_id: "0000-00",
                ativo: true
            },
            {
                id: 3,
                nome: "coordenador",
                email: "coordenador@coordenador",
                senha: "coordenador",
                cpf: "coordenador",
                escolaridade: "ens sup comp",
                endereco_id: 1,
                profissao_id: "0000-00",
                ativo: true
            }])))
);
