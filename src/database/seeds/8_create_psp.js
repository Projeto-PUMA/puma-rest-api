
exports.seed = knex => (
  // Deletes ALL existing entries
  knex('psp').del()
    .then(() => (knex('psp').insert([
      {
        id: 1, nome: 'PSP 1', psp_pai_id: null, descricao: 'Probabilidade e Estatística',
      },
      {
        id: 2, nome: 'PSP 2', psp_pai_id: null, descricao: 'Sistemas de informação',
      },
      {
        id: 3, nome: 'PSP 3', psp_pai_id: null, descricao: 'Livre',
      },
      {
        id: 4, nome: 'PSP 4', psp_pai_id: null, descricao: 'Planejamento e controle da Produção',
      },
      {
        id: 5, nome: 'PSP 5', psp_pai_id: null, descricao: 'Gestão da Qualidade',
      },
      {
        id: 6, nome: 'PSP 6', psp_pai_id: null, descricao: 'Engenharia do Produto',
      },
      {
        id: 7, nome: 'PSP 7', psp_pai_id: null, descricao: 'Gestão estratégica',
      },
      {
        id: 8, nome: 'N/A', psp_pai_id: null, descricao: 'Não sei em qual categoria meu projeto se encaixa',
      },

      {
        id: 9, nome: 'Análise de Banco de Dados', psp_pai_id: 1, descricao: 'Análise de Banco de Dados',
      },
      {
        id: 10, nome: 'Criação de Questionários de Pesquisa', psp_pai_id: 1, descricao: 'Criação de Questionários de Pesquisa',
      },
      {
        id: 11, nome: 'Outras', psp_pai_id: 1, descricao: 'Outras',
      },

      {
        id: 12, nome: 'Projeto de Sistemas de Informação', psp_pai_id: 2, descricao: 'Projeto de Sistemas de Informação',
      },
      {
        id: 13, nome: 'Outras', psp_pai_id: 2, descricao: 'Outras',
      },

      {
        id: 14, nome: 'Outras', psp_pai_id: 3, descricao: 'Outras',
      },

      {
        id: 15, nome: 'Previsão de Demanda', psp_pai_id: 4, descricao: 'Previsão de Demanda',
      },
      {
        id: 16, nome: 'Gestão de Estoque', psp_pai_id: 4, descricao: 'Gestão de Estoque',
      },
      {
        id: 17,
        nome: 'Criação de Ferramentas de Apoio ao Planejamento e Controle da Produção',
        psp_pai_id: 4,
        descricao: 'Criação de Ferramentas de Apoio ao Planejamento e Controle da Produção',
      },
      {
        id: 18, nome: 'Outras', psp_pai_id: 4, descricao: 'Outras',
      },


      {
        id: 19, nome: 'Mapeamento de Processos', psp_pai_id: 5, descricao: 'Mapeamento de Processos',
      },
      {
        id: 20, nome: 'Melhoria Contínua de Processos', psp_pai_id: 5, descricao: 'Melhoria Contínua de Processos',
      },
      {
        id: 21, nome: 'Cadeia de Valor', psp_pai_id: 5, descricao: 'Cadeia de Valor',
      },
      {
        id: 22, nome: 'Outras', psp_pai_id: 5, descricao: 'Outras',
      },

      {
        id: 23,
        nome: 'Elaboração de Projeto Conceitual de Produto',
        psp_pai_id: 6,
        descricao: 'Elaboração de Projeto Conceitual de Produto',
      },
      {
        id: 24, nome: 'Outras', psp_pai_id: 6, descricao: 'Outras',
      },

      {
        id: 25, nome: 'Definição de Objetivos Estratégicos', psp_pai_id: 6, descricao: 'Definição de Objetivos Estratégicos',
      },
      {
        id: 26, nome: 'Viabilidade Econômica', psp_pai_id: 6, descricao: 'Viabilidade Econômica',
      },
      {
        id: 27, nome: 'Desdobramento de Metas', psp_pai_id: 6, descricao: 'Desdobramento de Metas',
      },
      {
        id: 28, nome: 'Outras', psp_pai_id: 6, descricao: 'Outras',
      },
    ])))
);
