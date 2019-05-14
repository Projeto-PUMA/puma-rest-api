exports.seed = knex =>
  knex('competencia')
    .del()
    .then(() =>
      knex('competencia').insert([
        {
          competencia_categoria_id: 1,
          competencia_pai_id: null,
          nome: 'Comunicação',
          descricao: 'Habilidade de Comunicação'
        },
        {
          competencia_categoria_id: 1,
          competencia_pai_id: null,
          nome: 'Liderança',
          descricao: 'Habilidade de Comunicação'
        },
        {
          competencia_categoria_id: 1,
          competencia_pai_id: null,
          nome: 'Efetividade',
          descricao: 'Habilidade de Comunicação'
        },
        {
          competencia_categoria_id: 1,
          competencia_pai_id: null,
          nome: 'Profissionalismo',
          descricao: 'Habilidade de Comunicação'
        },
        {
          competencia_categoria_id: 1,
          competencia_pai_id: null,
          nome: 'Capacidade de Gerenciamento',
          descricao: 'Habilidade de Comunicação'
        },
        {
          competencia_categoria_id: 1,
          competencia_pai_id: null,
          nome: 'Habilidade Cognitiva',
          descricao: 'Habilidade de Comunicação'
        },
        {
          competencia_categoria_id: null,
          competencia_pai_id: 1,
          nome: 'Tempestividade das informações',
          descricao: ` - Presta, com diligência, os esclarecimentos que forem solicitados?\n
                       - Mantém a equipe/orientador informado sobre a situação de cada resultado, permitindo o acompanhmento das tarefas?\n
                       - Justifica com antecedência eventual falta ou atraso de reuniões?\n`
        },
        {
          competencia_categoria_id: null,
          competencia_pai_id: 1,
          nome: 'Meios de comunicação utilizados',
          descricao: ` - Utiliza os meios de comunicação e ferramentas disponíveis de modo a facilitar todo o processo com o menos índice de ruídos possível?\n
                       - Cumpre o plno de comunicação previsto no plano de gerencimaento do projeto?`
        },
        {
          competencia_categoria_id: null,
          competencia_pai_id: 1,
          nome: 'Comunicação Interpessoal',
          descricao: `- Sabe formular perguntas?\n
                      - Sabe escutar atenta e ativamente o outro, mas lembrando-se de que escutar é mais que ouvir?\n
                      - Demonstra respeito e aceitação?\n
                      - Tenta estabelecer empatia com o seu interloucutor?\n`
        },
        {
          competencia_categoria_id: null,
          competencia_pai_id: 1,
          nome: 'Linguagem abordada',
          descricao: `- Utiliza o vocabulário adequado para se comunicar com cada um dos stakeholders?\n
                      - Preocupa-se em transmitir a informação da melhor forma possível evitando ruídos?\n`
        }
      ])
    );
