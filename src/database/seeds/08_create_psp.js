
exports.seed = knex => (
  // Deletes ALL existing entries
  knex('psp').del()
    .then(() => (knex('psp').insert([
      {
        nome: 'PSP 1', psp_pai_id: null, descricao: 'Probabilidade e Estatística',
      },
      {
        nome: 'PSP 2', psp_pai_id: null, descricao: 'Sistemas de informação',
      },
      {
        nome: 'PSP 3', psp_pai_id: null, descricao: 'Livre',
      },
      {
        nome: 'PSP 4', psp_pai_id: null, descricao: 'Planejamento e controle da Produção',
      },
      {
        nome: 'PSP 5', psp_pai_id: null, descricao: 'Gestão da Qualidade',
      },
      {
        nome: 'PSP 6', psp_pai_id: null, descricao: 'Engenharia do Produto',
      },
      {
        nome: 'PSP 7', psp_pai_id: null, descricao: 'Gestão estratégica',
      },
      {
        nome: 'N/A', psp_pai_id: null, descricao: 'Não sei em qual categoria meu projeto se encaixa',
      },

    ]))
      .then(() => (knex('psp').insert([

        {
          nome: 'Análise de Banco de Dados', psp_pai_id: 1, descricao: 'Análise de Banco de Dados',
        },
        {
          nome: 'Criação de Questionários de Pesquisa', psp_pai_id: 1, descricao: 'Criação de Questionários de Pesquisa',
        },
        {
          nome: 'Outras', psp_pai_id: 1, descricao: 'Outras',
        },

        {
          nome: 'Projeto de Sistemas de Informação', psp_pai_id: 2, descricao: 'Projeto de Sistemas de Informação',
        },
        {
          nome: 'Outras', psp_pai_id: 2, descricao: 'Outras',
        },

        {
          nome: 'Outras', psp_pai_id: 3, descricao: 'Outras',
        },

        {
          nome: 'Previsão de Demanda', psp_pai_id: 4, descricao: 'Previsão de Demanda',
        },
        {
          nome: 'Gestão de Estoque', psp_pai_id: 4, descricao: 'Gestão de Estoque',
        },
        {

          nome: 'Criação de Ferramentas de Apoio ao Planejamento e Controle da Produção',
          psp_pai_id: 4,
          descricao: 'Criação de Ferramentas de Apoio ao Planejamento e Controle da Produção',
        },
        {
          nome: 'Outras', psp_pai_id: 4, descricao: 'Outras',
        },


        {
          nome: 'Mapeamento de Processos', psp_pai_id: 5, descricao: 'Mapeamento de Processos',
        },
        {
          nome: 'Melhoria Contínua de Processos', psp_pai_id: 5, descricao: 'Melhoria Contínua de Processos',
        },
        {
          nome: 'Cadeia de Valor', psp_pai_id: 5, descricao: 'Cadeia de Valor',
        },
        {
          nome: 'Outras', psp_pai_id: 5, descricao: 'Outras',
        },

        {

          nome: 'Elaboração de Projeto Conceitual de Produto',
          psp_pai_id: 6,
          descricao: 'Elaboração de Projeto Conceitual de Produto',
        },
        {
          nome: 'Outras', psp_pai_id: 6, descricao: 'Outras',
        },

        {
          nome: 'Definição de Objetivos Estratégicos', psp_pai_id: 6, descricao: 'Definição de Objetivos Estratégicos',
        },
        {
          nome: 'Viabilidade Econômica', psp_pai_id: 6, descricao: 'Viabilidade Econômica',
        },
        {
          nome: 'Desdobramento de Metas', psp_pai_id: 6, descricao: 'Desdobramento de Metas',
        },
        {
          nome: 'Outras', psp_pai_id: 6, descricao: 'Outras',
        },
      ]))))
);
