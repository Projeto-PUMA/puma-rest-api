
exports.seed = knex => (
  knex('endereco').del()
    .then(() => (knex('endereco').insert([
      {
        estado: 'DF',
        cidade: 'Brasilia',
        bairro: 'Ceilandia Oeste',
        rua: 'Q6',
        numero: '74',
        complemento: 'Area Verde',
        endereco_categoria_id: 1,
        cep: '123123',
      },
    ])))
);
