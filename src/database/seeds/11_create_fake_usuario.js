const bcrypt = require('bcrypt');

async function genPass(pass) {
  return bcrypt.hash(pass, 12);
}

exports.seed = knex =>
  knex('usuario')
    .del()
    .then(async () =>
      knex('usuario').insert([
        {
          nome: 'admin',
          email: 'admin@admin',
          senha: await genPass('admin'),
          cpf: 'admin',
          escolaridade: 'ens sup comp',
          endereco_id: 1,
          profissao_id: '0000-00',
          ativo: true
        },
        {
          nome: 'usuario',
          email: 'usuario@usuario',
          senha: await genPass('usuario'),
          cpf: 'usuario',
          escolaridade: 'ens sup comp',
          endereco_id: 1,
          profissao_id: '0000-00',
          ativo: true
        },
        {
          nome: 'coordenador',
          email: 'coordenador@coordenador',
          senha: await genPass('coordenador'),
          cpf: 'coordenador',
          escolaridade: 'ens sup comp',
          endereco_id: 1,
          profissao_id: '0000-00',
          ativo: true
        },
        {
          nome: 'professor',
          email: 'professor@professor',
          senha: await genPass('professor'),
          cpf: 'professor',
          escolaridade: 'ens sup comp',
          endereco_id: 1,
          profissao_id: '0000-00',
          ativo: true
        },
        {
          nome: 'aluno1',
          email: 'aluno1@aluno1',
          senha: await genPass('aluno1'),
          cpf: 'aluno1',
          escolaridade: 'ens sup comp',
          endereco_id: 1,
          profissao_id: '0000-00',
          ativo: true
        },
        {
          nome: 'aluno2',
          email: 'aluno2@aluno2',
          senha: await genPass('aluno2'),
          cpf: 'aluno2',
          escolaridade: 'ens sup comp',
          endereco_id: 1,
          profissao_id: '0000-00',
          ativo: true
        },
        {
          nome: 'aluno3',
          email: 'aluno3@aluno3',
          senha: await genPass('aluno3'),
          cpf: 'aluno3',
          escolaridade: 'ens sup comp',
          endereco_id: 1,
          profissao_id: '0000-00',
          ativo: true
        },
        {
          nome: 'aluno4',
          email: 'aluno4@aluno4',
          senha: await genPass('aluno4'),
          cpf: 'aluno4',
          escolaridade: 'ens sup comp',
          endereco_id: 1,
          profissao_id: '0000-00',
          ativo: true
        }
      ])
    );
