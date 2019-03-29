const bcrypt = require('bcrypt');

async function genPass(pass) {
  return bcrypt.hash(pass, 12);
}


exports.seed = knex => (
  knex('usuario').del()
    .then(async () => (knex('usuario').insert([
      {
        nome: 'admin',
        email: 'admin@admin',
        senha: await genPass('admin'),
        cpf: 'admin',
        escolaridade: 'ens sup comp',
        endereco_id: 1,
        profissao_id: '0000-00',
        ativo: true,
      },
      {
        nome: 'usuario',
        email: 'usuario@usuario',
        senha: await genPass('usuario'),
        cpf: 'usuario',
        escolaridade: 'ens sup comp',
        endereco_id: 1,
        profissao_id: '0000-00',
        ativo: true,
      },
      {
        nome: 'aluno',
        email: 'aluno@aluno',
        senha: await genPass('aluno'),
        cpf: 'aluno',
        escolaridade: 'ens sup comp',
        endereco_id: 1,
        profissao_id: '0000-00',
        ativo: true,
      },
      {
        nome: 'monitor',
        email: 'monitor@monitor',
        senha: await genPass('monitor'),
        cpf: 'monitor',
        escolaridade: 'ens sup comp',
        endereco_id: 1,
        profissao_id: '0000-00',
        ativo: true,
      },
      {
        nome: 'professor',
        email: 'professor@professor',
        senha: await genPass('professor'),
        cpf: 'professor',
        escolaridade: 'ens sup comp',
        endereco_id: 1,
        profissao_id: '0000-00',
        ativo: true,
      },
      {
        nome: 'secretaria',
        email: 'secretaria@secretaria',
        senha: await genPass('secretaria'),
        cpf: 'secretaria',
        escolaridade: 'ens sup comp',
        endereco_id: 1,
        profissao_id: '0000-00',
        ativo: true,
      },
      {
        nome: 'coordenador',
        email: 'coordenador@coordenador',
        senha: await genPass('coordenador'),
        cpf: 'coordenador',
        escolaridade: 'ens sup comp',
        endereco_id: 1,
        profissao_id: '0000-00',
        ativo: true,
      }])))
);
