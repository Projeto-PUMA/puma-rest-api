
exports.seed = knex => (
  // Deletes ALL existing entries
  knex('profissao').del()
    .then(() => (knex('profissao').insert([
      {
        "id": "0000-00",
        "termo": "Estudante"
      },
      {
        "id": "8485-05",
        "termo": "Abatedor"
      },
      {
        "id": "7663-05",
        "termo": "Acabador de embalagens (flexíveis e cartotécnicas)"
      },
      {
        "id": "7161-05",
        "termo": "Acabador de superfícies de concreto"
      },
      {
        "id": "8485-10",
        "termo": "Açougueiro"
      },
      {
        "id": "3762-05",
        "termo": "Acrobata"
      },
      {
        "id": "2521-05",
        "termo": "Administrador"
      },
      {
        "id": "2123-05",
        "termo": "Administrador de banco de dados"
      },
      {
        "id": "5101-10",
        "termo": "Administrador de edifícios"
      },
      {
        "id": "2525-05",
        "termo": "Administrador de fundos e carteiras de investimento"
      },
      {
        "id": "2123-10",
        "termo": "Administrador de redes"
      },
      {
        "id": "2123-15",
        "termo": "Administrador de sistemas operacionais"
      },
      {
        "id": "2123-20",
        "termo": "Administrador em segurança da informação"
      },
      {
        "id": "2410-05",
        "termo": "Advogado"
      },
      {
        "id": "2410-30",
        "termo": "Advogado (áreas especiais)"
      },
      {
        "id": "2410-15",
        "termo": "Advogado (direito civil)"
      },
      {
        "id": "2410-35",
        "termo": "Advogado (direito do trabalho)"
      },
      {
        "id": "2410-25",
        "termo": "Advogado (direito penal)"
      },
      {
        "id": "2410-20",
        "termo": "Advogado (direito público)"
      },
      {
        "id": "2412-05",
        "termo": "Advogado da união"
      },
      {
        "id": "2410-10",
        "termo": "Advogado de empresa"
      },
      {
        "id": "7213-05",
        "termo": "Afiador de cardas"
      },
      {
        "id": "7213-10",
        "termo": "Afiador de cutelaria"
      },
      {
        "id": "7213-15",
        "termo": "Afiador de ferramentas"
      },
      {
        "id": "7213-20",
        "termo": "Afiador de serras"
      },
      {
        "id": "7421-05",
        "termo": "Afinador de instrumentos musicais"
      },
      {
        "id": "3421-20",
        "termo": "Afretador"
      },
      {
        "id": "2531-40",
        "termo": "Agenciador de propaganda"
      },
      {
        "id": "5151-05",
        "termo": "Agente comunitário de saúde"
      },
      {
        "id": "5153-10",
        "termo": "Agente de ação social"
      },
      {
        "id": "5151-40",
        "termo": "Agente de combate às endemias"
      },
      {
        "id": "3522-05",
        "termo": "Agente de defesa ambiental"
      },
      {
        "id": "3524-05",
        "termo": "Agente de direitos autorais"
      },
      {
        "id": "3424-05",
        "termo": "Agente de estação (ferrovia e metrô)"
      },
      {
        "id": "2543-10",
        "termo": "Agente de higiene e segurança"
      },
      {
        "id": "3519-05",
        "termo": "Agente de inteligência"
      },
      {
        "id": "2151-05",
        "termo": "Agente de manobra e docagem"
      },
      {
        "id": "4110-50",
        "termo": "Agente de microcrédito"
      },
      {
        "id": "7831-05",
        "termo": "Agente de pátio"
      },
      {
        "id": "5172-05",
        "termo": "Agente de polícia federal"
      },
      {
        "id": "3425-50",
        "termo": "Agente de proteção de aviação civil"
      },
      {
        "id": "3513-15",
        "termo": "Agente de recrutamento e seleção"
      },
      {
        "id": "3522-10",
        "termo": "Agente de saúde pública"
      },
      {
        "id": "5173-10",
        "termo": "Agente de segurança"
      },
      {
        "id": "5173-15",
        "termo": "Agente de segurança penitenciária"
      },
      {
        "id": "5172-20",
        "termo": "Agente de trânsito"
      },
      {
        "id": "3541-20",
        "termo": "Agente de vendas de serviços"
      },
      {
        "id": "3548-15",
        "termo": "Agente de viagem"
      },
      {
        "id": "3523-15",
        "termo": "Agente fiscal metrológico"
      },
      {
        "id": "3523-20",
        "termo": "Agente fiscal têxtil"
      },
      {
        "id": "5165-05",
        "termo": "Agente funerário"
      },
      {
        "id": "5151-30",
        "termo": "Agente indígena de saneamento"
      },
      {
        "id": "5151-25",
        "termo": "Agente indígena de saúde"
      },
      {
        "id": "3519-10",
        "termo": "Agente técnico de inteligência"
      },
      {
        "id": "6326-15",
        "termo": "Ajudante de carvoaria"
      },
      {
        "id": "7631-25",
        "termo": "Ajudante de confecção"
      },
      {
        "id": "3422-05",
        "termo": "Ajudante de despachante aduaneiro"
      },
      {
        "id": "7832-25",
        "termo": "Ajudante de motorista"
      },
      {
        "id": "7411-05",
        "termo": "Ajustador de instrumentos de precisão"
      },
      {
        "id": "7250-05",
        "termo": "Ajustador ferramenteiro"
      },
      {
        "id": "7250-10",
        "termo": "Ajustador mecânico"
      },
      {
        "id": "7250-20",
        "termo": "Ajustador mecânico em bancada"
      },
      {
        "id": "7250-25",
        "termo": "Ajustador naval (reparo e construção)"
      },
      {
        "id": "8417-05",
        "termo": "Alambiqueiro"
      },
      {
        "id": "7630-05",
        "termo": "Alfaiate"
      },
      {
        "id": "7842-05",
        "termo": "Alimentador de linha de produção"
      },
      {
        "id": "9921-05",
        "termo": "Alinhador de pneus"
      },
      {
        "id": "4141-05",
        "termo": "Almoxarife"
      },
      {
        "id": "7614-05",
        "termo": "Alvejador (tecidos)"
      },
      {
        "id": "7111-05",
        "termo": "Amostrador de minérios"
      },
      {
        "id": "2525-10",
        "termo": "Analista de câmbio"
      },
      {
        "id": "2525-15",
        "termo": "Analista de cobrança (instituições financeiras)"
      },
      {
        "id": "2525-25",
        "termo": "Analista de crédito (instituições financeiras)"
      },
      {
        "id": "2525-30",
        "termo": "Analista de crédito rural"
      },
      {
        "id": "2124-05",
        "termo": "Analista de desenvolvimento de sistemas"
      },
      {
        "id": "3543-05",
        "termo": "Analista de exportação e importação"
      },
      {
        "id": "4131-05",
        "termo": "Analista de folha de pagamento"
      },
      {
        "id": "2612-15",
        "termo": "Analista de informações (pesquisador de informações de rede)"
      },
      {
        "id": "2525-35",
        "termo": "Analista de leasing"
      },
      {
        "id": "1423-30",
        "termo": "Analista de negócios"
      },
      {
        "id": "1423-35",
        "termo": "Analista de pesquisa de mercado"
      },
      {
        "id": "1115-10",
        "termo": "Analista de planejamento e orçamento - apo"
      },
      {
        "id": "2525-40",
        "termo": "Analista de produtos bancários"
      },
      {
        "id": "2524-05",
        "termo": "Analista de recursos humanos"
      },
      {
        "id": "2124-10",
        "termo": "Analista de redes e de comunicação de dados"
      },
      {
        "id": "3517-05",
        "termo": "Analista de seguros (técnico)"
      },
      {
        "id": "3517-10",
        "termo": "Analista de sinistros"
      },
      {
        "id": "2124-15",
        "termo": "Analista de sistemas de automação"
      },
      {
        "id": "2124-20",
        "termo": "Analista de suporte computacional"
      },
      {
        "id": "2525-45",
        "termo": "Analista financeiro (instituições financeiras)"
      },
      {
        "id": "2617-05",
        "termo": "Âncora de rádio e televisão"
      },
      {
        "id": "2511-05",
        "termo": "Antropólogo"
      },
      {
        "id": "6134-05",
        "termo": "Apicultor"
      },
      {
        "id": "7157-05",
        "termo": "Aplicador de asfalto impermeabilizante (coberturas)"
      },
      {
        "id": "7522-05",
        "termo": "Aplicador serigráfico em vidros"
      },
      {
        "id": "4142-05",
        "termo": "Apontador de mão-de-obra"
      },
      {
        "id": "4142-10",
        "termo": "Apontador de produção"
      },
      {
        "id": "3763-25",
        "termo": "Apresentador de circo"
      },
      {
        "id": "3763-05",
        "termo": "Apresentador de eventos"
      },
      {
        "id": "3763-10",
        "termo": "Apresentador de festas populares"
      },
      {
        "id": "3763-20",
        "termo": "Apresentador de programas de televisão"
      },
      {
        "id": "3772-10",
        "termo": "Árbitro de atletismo"
      },
      {
        "id": "3772-15",
        "termo": "Árbitro de basquete"
      },
      {
        "id": "3772-20",
        "termo": "Árbitro de futebol"
      },
      {
        "id": "3772-25",
        "termo": "Árbitro de futebol de salão"
      },
      {
        "id": "3772-30",
        "termo": "Árbitro de judô"
      },
      {
        "id": "3772-35",
        "termo": "Árbitro de karatê"
      },
      {
        "id": "3772-40",
        "termo": "Árbitro de poló aquático"
      },
      {
        "id": "3772-45",
        "termo": "Árbitro de vôlei"
      },
      {
        "id": "7153-05",
        "termo": "Armador de estrutura de concreto"
      },
      {
        "id": "7153-15",
        "termo": "Armador de estrutura de concreto armado"
      },
      {
        "id": "3250-10",
        "termo": "Aromista"
      },
      {
        "id": "2511-10",
        "termo": "Arqueólogo"
      },
      {
        "id": "2141-05",
        "termo": "Arquiteto de edificações"
      },
      {
        "id": "2141-10",
        "termo": "Arquiteto de interiores"
      },
      {
        "id": "2141-15",
        "termo": "Arquiteto de patrimônio"
      },
      {
        "id": "2141-20",
        "termo": "Arquiteto paisagista"
      },
      {
        "id": "2141-25",
        "termo": "Arquiteto urbanista"
      },
      {
        "id": "2613-05",
        "termo": "Arquivista"
      },
      {
        "id": "4151-05",
        "termo": "Arquivista de documentos"
      },
      {
        "id": "2611-05",
        "termo": "Arquivista pesquisador (jornalismo)"
      },
      {
        "id": "7633-05",
        "termo": "Arrematadeira"
      },
      {
        "id": "7911-05",
        "termo": "Artesão bordador"
      },
      {
        "id": "7911-10",
        "termo": "Artesão ceramista"
      },
      {
        "id": "7911-15",
        "termo": "Artesão com material reciclável"
      },
      {
        "id": "7911-20",
        "termo": "Artesão confeccionador de biojóias e ecojóias"
      },
      {
        "id": "7911-50",
        "termo": "Artesão crocheteiro"
      },
      {
        "id": "7911-25",
        "termo": "Artesão do couro"
      },
      {
        "id": "7911-30",
        "termo": "Artesão escultor"
      },
      {
        "id": "7521-05",
        "termo": "Artesão modelador (vidros)"
      },
      {
        "id": "7911-35",
        "termo": "Artesão moveleiro (exceto reciclado)"
      },
      {
        "id": "7911-60",
        "termo": "Artesão rendeiro"
      },
      {
        "id": "7911-40",
        "termo": "Artesão tecelão"
      },
      {
        "id": "7911-45",
        "termo": "Artesão trançador"
      },
      {
        "id": "7911-55",
        "termo": "Artesão tricoteiro"
      },
      {
        "id": "2263-10",
        "termo": "Arteterapeuta"
      },
      {
        "id": "7683-05",
        "termo": "Artífice do couro"
      },
      {
        "id": "3762-10",
        "termo": "Artista aéreo"
      },
      {
        "id": "3762-15",
        "termo": "Artista de circo (outros)"
      },
      {
        "id": "5141-05",
        "termo": "Ascensorista"
      },
      {
        "id": "7241-05",
        "termo": "Assentador de canalização (edificações)"
      },
      {
        "id": "4110-10",
        "termo": "Assistente administrativo"
      },
      {
        "id": "3517-15",
        "termo": "Assistente comercial de seguros"
      },
      {
        "id": "2628-05",
        "termo": "Assistente de coreografia"
      },
      {
        "id": "8181-05",
        "termo": "Assistente de laboratório industrial"
      },
      {
        "id": "3541-25",
        "termo": "Assistente de vendas"
      },
      {
        "id": "2516-05",
        "termo": "Assistente social"
      },
      {
        "id": "3517-20",
        "termo": "Assistente técnico de seguros"
      },
      {
        "id": "7165-05",
        "termo": "Assoalhador"
      },
      {
        "id": "5167-05",
        "termo": "Astrólogo"
      },
      {
        "id": "2133-05",
        "termo": "Astrônomo"
      },
      {
        "id": "4211-05",
        "termo": "Atendente comercial (agência postal)"
      },
      {
        "id": "4132-05",
        "termo": "Atendente de agência"
      },
      {
        "id": "5151-10",
        "termo": "Atendente de enfermagem"
      },
      {
        "id": "5211-30",
        "termo": "Atendente de farmácia - balconista"
      },
      {
        "id": "4110-15",
        "termo": "Atendente de judiciário"
      },
      {
        "id": "5134-35",
        "termo": "Atendente de lanchonete"
      },
      {
        "id": "5163-40",
        "termo": "Atendente de lavanderia"
      },
      {
        "id": "5211-40",
        "termo": "Atendente de lojas e mercados"
      },
      {
        "id": "3771-05",
        "termo": "Atleta profissional (outras modalidades)"
      },
      {
        "id": "3771-15",
        "termo": "Atleta profissional de golfe"
      },
      {
        "id": "3771-20",
        "termo": "Atleta profissional de luta"
      },
      {
        "id": "3771-25",
        "termo": "Atleta profissional de tênis"
      },
      {
        "id": "2625-05",
        "termo": "Ator"
      },
      {
        "id": "2111-05",
        "termo": "Atuário"
      },
      {
        "id": "2614-30",
        "termo": "Audiodescritor"
      },
      {
        "id": "2522-05",
        "termo": "Auditor (contadores e afins)"
      },
      {
        "id": "2542-05",
        "termo": "Auditor-fiscal da previdência social"
      },
      {
        "id": "2541-05",
        "termo": "Auditor-fiscal da receita federal"
      },
      {
        "id": "2543-05",
        "termo": "Auditor-fiscal do trabalho"
      },
      {
        "id": "2615-05",
        "termo": "Autor-roteirista"
      },
      {
        "id": "5152-05",
        "termo": "Auxiliar de banco de sangue"
      },
      {
        "id": "3711-05",
        "termo": "Auxiliar de biblioteca"
      },
      {
        "id": "4110-25",
        "termo": "Auxiliar de cartório"
      },
      {
        "id": "4131-10",
        "termo": "Auxiliar de contabilidade"
      },
      {
        "id": "7631-05",
        "termo": "Auxiliar de corte (preparação da confecção de roupas)"
      },
      {
        "id": "3311-10",
        "termo": "Auxiliar de desenvolvimento infantil"
      },
      {
        "id": "3222-30",
        "termo": "Auxiliar de enfermagem"
      },
      {
        "id": "3222-50",
        "termo": "Auxiliar de enfermagem da estratégia de saúde da família"
      },
      {
        "id": "3222-35",
        "termo": "Auxiliar de enfermagem do trabalho"
      },
      {
        "id": "4110-05",
        "termo": "Auxiliar de escritório"
      },
      {
        "id": "4110-35",
        "termo": "Auxiliar de estatística"
      },
      {
        "id": "5152-10",
        "termo": "Auxiliar de farmácia de manipulação"
      },
      {
        "id": "4131-15",
        "termo": "Auxiliar de faturamento"
      },
      {
        "id": "4110-20",
        "termo": "Auxiliar de judiciário"
      },
      {
        "id": "5152-15",
        "termo": "Auxiliar de laboratório de análises clínicas"
      },
      {
        "id": "8181-10",
        "termo": "Auxiliar de laboratório de análises físico-químicas"
      },
      {
        "id": "5152-20",
        "termo": "Auxiliar de laboratório de imunobiológicos"
      },
      {
        "id": "5163-45",
        "termo": "Auxiliar de lavanderia"
      },
      {
        "id": "5143-10",
        "termo": "Auxiliar de manutenção predial"
      },
      {
        "id": "7826-25",
        "termo": "Auxiliar de maquinista de trem"
      },
      {
        "id": "8421-20",
        "termo": "Auxiliar de processamento de fumo"
      },
      {
        "id": "5152-25",
        "termo": "Auxiliar de produção farmacêutica"
      },
      {
        "id": "3224-20",
        "termo": "Auxiliar de prótese dentária"
      },
      {
        "id": "7664-20",
        "termo": "Auxiliar de radiologia (revelação fotográfica)"
      },
      {
        "id": "3222-40",
        "termo": "Auxiliar de saúde (navegação marítima)"
      },
      {
        "id": "4110-40",
        "termo": "Auxiliar de seguros"
      },
      {
        "id": "4110-45",
        "termo": "Auxiliar de serviços de importação e exportação"
      },
      {
        "id": "3514-30",
        "termo": "Auxiliar de serviços jurídicos"
      },
      {
        "id": "5193-05",
        "termo": "Auxiliar de veterinário"
      },
      {
        "id": "3224-15",
        "termo": "Auxiliar em saúde bucal"
      },
      {
        "id": "3224-30",
        "termo": "Auxiliar em saúde bucal da estratégia de saúde da família"
      },
      {
        "id": "9922-25",
        "termo": "Auxiliar geral de conservação de vias permanentes (exceto trilhos)"
      },
      {
        "id": "5135-05",
        "termo": "Auxiliar nos serviços de alimentação"
      },
      {
        "id": "3251-05",
        "termo": "Auxiliar técnico em laboratório de farmácia"
      },
      {
        "id": "3544-15",
        "termo": "Avaliador de bens móveis"
      },
      {
        "id": "3544-10",
        "termo": "Avaliador de imóveis"
      },
      {
        "id": "3524-10",
        "termo": "Avaliador de produtos do meio de comunicação"
      },
      {
        "id": "2241-05",
        "termo": "Avaliador físico"
      },
      {
        "id": "6133-05",
        "termo": "Avicultor"
      },
      {
        "id": "2628-10",
        "termo": "Bailarino (exceto danças populares)"
      },
      {
        "id": "9921-10",
        "termo": "Balanceador"
      },
      {
        "id": "4141-15",
        "termo": "Balanceiro"
      },
      {
        "id": "8117-05",
        "termo": "Bamburista"
      },
      {
        "id": "5193-15",
        "termo": "Banhista de animais domésticos"
      },
      {
        "id": "5161-05",
        "termo": "Barbeiro"
      },
      {
        "id": "5134-40",
        "termo": "Barista"
      },
      {
        "id": "5134-20",
        "termo": "Barman"
      },
      {
        "id": "7511-05",
        "termo": "Bate-folha a máquina"
      },
      {
        "id": "2612-05",
        "termo": "Bibliotecário"
      },
      {
        "id": "5112-20",
        "termo": "Bilheteiro (estações de metrô; ferroviárias e assemelhadas)"
      },
      {
        "id": "4211-10",
        "termo": "Bilheteiro de transportes coletivos"
      },
      {
        "id": "4211-15",
        "termo": "Bilheteiro no serviço de diversões"
      },
      {
        "id": "2011-05",
        "termo": "Bioengenheiro"
      },
      {
        "id": "2211-05",
        "termo": "Biólogo"
      },
      {
        "id": "2212-05",
        "termo": "Biomédico"
      },
      {
        "id": "2011-10",
        "termo": "Biotecnologista"
      },
      {
        "id": "7832-30",
        "termo": "Bloqueiro (trabalhador portuário)"
      },
      {
        "id": "7311-65",
        "termo": "Bobinador eletricista; à mão"
      },
      {
        "id": "7311-70",
        "termo": "Bobinador eletricista; à máquina"
      },
      {
        "id": "7828-15",
        "termo": "Boiadeiro"
      },
      {
        "id": "5171-10",
        "termo": "Bombeiro civil"
      },
      {
        "id": "5171-05",
        "termo": "Bombeiro de aeródromo"
      },
      {
        "id": "7650-15",
        "termo": "Boneleiro"
      },
      {
        "id": "7682-05",
        "termo": "Bordador; a mão"
      },
      {
        "id": "7633-10",
        "termo": "Bordador; à máquina"
      },
      {
        "id": "9921-15",
        "termo": "Borracheiro"
      },
      {
        "id": "5161-10",
        "termo": "Cabeleireiro"
      },
      {
        "id": "7224-05",
        "termo": "Cableador"
      },
      {
        "id": "0312-05",
        "termo": "Cabo bombeiro militar"
      },
      {
        "id": "0212-05",
        "termo": "Cabo da polícia militar"
      },
      {
        "id": "1130-05",
        "termo": "Cacique"
      },
      {
        "id": "6126-05",
        "termo": "Cafeicultor"
      },
      {
        "id": "4132-10",
        "termo": "Caixa de banco"
      },
      {
        "id": "7166-05",
        "termo": "Calafetador"
      },
      {
        "id": "8117-10",
        "termo": "Calandrista de borracha"
      },
      {
        "id": "8321-05",
        "termo": "Calandrista de papel"
      },
      {
        "id": "7152-05",
        "termo": "Calceteiro"
      },
      {
        "id": "7244-05",
        "termo": "Caldeireiro (chapas de cobre)"
      },
      {
        "id": "7244-10",
        "termo": "Caldeireiro (chapas de ferro e aço)"
      },
      {
        "id": "5133-05",
        "termo": "Camareira de teatro"
      },
      {
        "id": "5133-10",
        "termo": "Camareira de televisão"
      },
      {
        "id": "5133-15",
        "termo": "Camareiro de hotel"
      },
      {
        "id": "5133-20",
        "termo": "Camareiro de embarcações"
      },
      {
        "id": "7825-05",
        "termo": "Caminhoneiro autônomo (rotas regionais e internacionais)"
      },
      {
        "id": "7111-10",
        "termo": "Canteiro"
      },
      {
        "id": "0302-05",
        "termo": "Capitão bombeiro militar"
      },
      {
        "id": "0202-05",
        "termo": "Capitão da polícia militar"
      },
      {
        "id": "2151-10",
        "termo": "Capitão de manobra da marinha mercante"
      },
      {
        "id": "6326-10",
        "termo": "Carbonizador"
      },
      {
        "id": "7155-05",
        "termo": "Carpinteiro"
      },
      {
        "id": "7155-15",
        "termo": "Carpinteiro (cenários)"
      },
      {
        "id": "7155-10",
        "termo": "Carpinteiro (esquadrias)"
      },
      {
        "id": "7155-20",
        "termo": "Carpinteiro (mineração)"
      },
      {
        "id": "7155-30",
        "termo": "Carpinteiro (telhados)"
      },
      {
        "id": "7772-05",
        "termo": "Carpinteiro de carretas"
      },
      {
        "id": "7772-10",
        "termo": "Carpinteiro de carrocerias"
      },
      {
        "id": "7155-35",
        "termo": "Carpinteiro de fôrmas para concreto"
      },
      {
        "id": "7155-25",
        "termo": "Carpinteiro de obras"
      },
      {
        "id": "7155-40",
        "termo": "Carpinteiro de obras civis de arte (pontes; túneis; barragens)"
      },
      {
        "id": "7771-05",
        "termo": "Carpinteiro naval (construção de pequenas embarcações)"
      },
      {
        "id": "7771-10",
        "termo": "Carpinteiro naval (embarcações)"
      },
      {
        "id": "7771-15",
        "termo": "Carpinteiro naval (estaleiros)"
      },
      {
        "id": "7832-05",
        "termo": "Carregador (aeronaves)"
      },
      {
        "id": "7832-10",
        "termo": "Carregador (armazém)"
      },
      {
        "id": "7832-15",
        "termo": "Carregador (veículos de transportes terrestres)"
      },
      {
        "id": "5199-05",
        "termo": "Cartazeiro"
      },
      {
        "id": "4152-05",
        "termo": "Carteiro"
      },
      {
        "id": "8332-05",
        "termo": "Cartonageiro; a mão (caixas de papelão)"
      },
      {
        "id": "8331-05",
        "termo": "Cartonageiro; a máquina"
      },
      {
        "id": "6326-05",
        "termo": "Carvoeiro"
      },
      {
        "id": "6220-05",
        "termo": "Caseiro (agricultura)"
      },
      {
        "id": "6230-25",
        "termo": "Casqueador de animais"
      },
      {
        "id": "6310-05",
        "termo": "Catador de caranguejos e siris"
      },
      {
        "id": "6310-10",
        "termo": "Catador de mariscos"
      },
      {
        "id": "8422-25",
        "termo": "Celofanista na fabricação de charutos"
      },
      {
        "id": "7231-05",
        "termo": "Cementador de metais"
      },
      {
        "id": "2623-05",
        "termo": "Cenógrafo carnavalesco e festas populares"
      },
      {
        "id": "2623-10",
        "termo": "Cenógrafo de cinema"
      },
      {
        "id": "2623-15",
        "termo": "Cenógrafo de eventos"
      },
      {
        "id": "2623-20",
        "termo": "Cenógrafo de teatro"
      },
      {
        "id": "3742-05",
        "termo": "Cenotécnico (cinema; vídeo; televisão; teatro e espetáculos)"
      },
      {
        "id": "7523-05",
        "termo": "Ceramista"
      },
      {
        "id": "7523-10",
        "termo": "Ceramista (torno de pedal e motor)"
      },
      {
        "id": "7523-15",
        "termo": "Ceramista (torno semi-automático)"
      },
      {
        "id": "7523-20",
        "termo": "Ceramista modelador"
      },
      {
        "id": "7523-25",
        "termo": "Ceramista moldador"
      },
      {
        "id": "7523-30",
        "termo": "Ceramista prensador"
      },
      {
        "id": "3548-25",
        "termo": "Cerimonialista"
      },
      {
        "id": "7682-10",
        "termo": "Cerzidor"
      },
      {
        "id": "7764-05",
        "termo": "Cesteiro"
      },
      {
        "id": "7244-15",
        "termo": "Chapeador"
      },
      {
        "id": "7244-30",
        "termo": "Chapeador de aeronaves"
      },
      {
        "id": "7244-20",
        "termo": "Chapeador de carrocerias metálicas (fabricação)"
      },
      {
        "id": "7244-25",
        "termo": "Chapeador naval"
      },
      {
        "id": "7681-25",
        "termo": "Chapeleiro (chapéus de palha)"
      },
      {
        "id": "7650-10",
        "termo": "Chapeleiro de senhoras"
      },
      {
        "id": "8422-30",
        "termo": "Charuteiro a mão"
      },
      {
        "id": "5231-15",
        "termo": "Chaveiro"
      },
      {
        "id": "5101-30",
        "termo": "Chefe de bar"
      },
      {
        "id": "8401-20",
        "termo": "Chefe de confeitaria"
      },
      {
        "id": "3511-10",
        "termo": "Chefe de contabilidade (técnico)"
      },
      {
        "id": "2711-05",
        "termo": "Chefe de cozinha"
      },
      {
        "id": "3426-05",
        "termo": "Chefe de estação portuária"
      },
      {
        "id": "5101-20",
        "termo": "Chefe de portaria de hotel"
      },
      {
        "id": "3423-05",
        "termo": "Chefe de serviço de transporte rodoviário (passageiros e cargas)"
      },
      {
        "id": "3532-35",
        "termo": "Chefe de serviços bancários"
      },
      {
        "id": "5136-05",
        "termo": "Churrasqueiro"
      },
      {
        "id": "5191-05",
        "termo": "Ciclista mensageiro"
      },
      {
        "id": "2511-15",
        "termo": "Cientista político"
      },
      {
        "id": "8311-05",
        "termo": "Cilindreiro na preparação de pasta para fabricação de papel"
      },
      {
        "id": "8131-05",
        "termo": "Cilindrista (petroquímica e afins)"
      },
      {
        "id": "3163-40",
        "termo": "Cimentador (poços de petróleo)"
      },
      {
        "id": "2232-04",
        "termo": "Cirurgião dentista - auditor"
      },
      {
        "id": "2232-80",
        "termo": "Cirurgião dentista - dentística"
      },
      {
        "id": "2232-84",
        "termo": "Cirurgião dentista - disfunção temporomandibular e dor orofacial"
      },
      {
        "id": "2232-12",
        "termo": "Cirurgião dentista - endodontista"
      },
      {
        "id": "2232-16",
        "termo": "Cirurgião dentista - epidemiologista"
      },
      {
        "id": "2232-20",
        "termo": "Cirurgião dentista - estomatologista"
      },
      {
        "id": "2232-24",
        "termo": "Cirurgião dentista - implantodontista"
      },
      {
        "id": "2232-28",
        "termo": "Cirurgião dentista - odontogeriatra"
      },
      {
        "id": "2232-76",
        "termo": "Cirurgião dentista - odontologia do trabalho"
      },
      {
        "id": "2232-32",
        "termo": "Cirurgião dentista - odontologista legal"
      },
      {
        "id": "2232-36",
        "termo": "Cirurgião dentista - odontopediatra"
      },
      {
        "id": "2232-40",
        "termo": "Cirurgião dentista - ortopedista e ortodontista"
      },
      {
        "id": "2232-44",
        "termo": "Cirurgião dentista - patologista bucal"
      },
      {
        "id": "2232-48",
        "termo": "Cirurgião dentista - periodontista"
      },
      {
        "id": "2232-52",
        "termo": "Cirurgião dentista - protesiólogo bucomaxilofacial"
      },
      {
        "id": "2232-56",
        "termo": "Cirurgião dentista - protesista"
      },
      {
        "id": "2232-60",
        "termo": "Cirurgião dentista - radiologista"
      },
      {
        "id": "2232-64",
        "termo": "Cirurgião dentista - reabilitador oral"
      },
      {
        "id": "2232-68",
        "termo": "Cirurgião dentista - traumatologista bucomaxilofacial"
      },
      {
        "id": "2232-72",
        "termo": "Cirurgião dentista de saúde coletiva"
      },
      {
        "id": "2232-93",
        "termo": "Cirurgião-dentista da estratégia de saúde da família"
      },
      {
        "id": "3242-15",
        "termo": "Citotécnico"
      },
      {
        "id": "8422-15",
        "termo": "Classificador de charutos"
      },
      {
        "id": "7622-10",
        "termo": "Classificador de couros"
      },
      {
        "id": "7611-05",
        "termo": "Classificador de fibras têxteis"
      },
      {
        "id": "8421-15",
        "termo": "Classificador de fumo"
      },
      {
        "id": "8484-25",
        "termo": "Classificador de grãos"
      },
      {
        "id": "7721-05",
        "termo": "Classificador de madeira"
      },
      {
        "id": "7621-05",
        "termo": "Classificador de peles"
      },
      {
        "id": "6321-05",
        "termo": "Classificador de toras"
      },
      {
        "id": "8233-05",
        "termo": "Classificador e empilhador de tijolos refratários"
      },
      {
        "id": "5112-15",
        "termo": "Cobrador de transportes coletivos (exceto trem)"
      },
      {
        "id": "4213-05",
        "termo": "Cobrador externo"
      },
      {
        "id": "4213-10",
        "termo": "Cobrador interno"
      },
      {
        "id": "4151-15",
        "termo": "Codificador de dados"
      },
      {
        "id": "7652-05",
        "termo": "Colchoeiro (confecção de colchões)"
      },
      {
        "id": "3712-05",
        "termo": "Colecionador de selos e moedas"
      },
      {
        "id": "5142-05",
        "termo": "Coletor de lixo domiciliar"
      },
      {
        "id": "5142-30",
        "termo": "Coletor de resíduos sólidos de serviços de saúde"
      },
      {
        "id": "3117-05",
        "termo": "Colorista de papel"
      },
      {
        "id": "2151-15",
        "termo": "Comandante da marinha mercante"
      },
      {
        "id": "2617-10",
        "termo": "Comentarista de rádio e televisão"
      },
      {
        "id": "1414-05",
        "termo": "Comerciante atacadista"
      },
      {
        "id": "1414-10",
        "termo": "Comerciante varejista"
      },
      {
        "id": "5111-10",
        "termo": "Comissário de trem"
      },
      {
        "id": "5111-05",
        "termo": "Comissário de vôo"
      },
      {
        "id": "4132-15",
        "termo": "Compensador de banco"
      },
      {
        "id": "2626-05",
        "termo": "Compositor"
      },
      {
        "id": "3542-05",
        "termo": "Comprador"
      },
      {
        "id": "4221-30",
        "termo": "Concierge"
      },
      {
        "id": "7823-20",
        "termo": "Condutor de ambulância"
      },
      {
        "id": "3413-10",
        "termo": "Condutor de máquinas"
      },
      {
        "id": "3413-20",
        "termo": "Condutor de máquinas (bombeador)"
      },
      {
        "id": "3413-25",
        "termo": "Condutor de máquinas (mecânico)"
      },
      {
        "id": "7811-05",
        "termo": "Condutor de processos robotizados de pintura"
      },
      {
        "id": "7811-10",
        "termo": "Condutor de processos robotizados de soldagem"
      },
      {
        "id": "5115-05",
        "termo": "Condutor de turismo de aventura"
      },
      {
        "id": "7828-20",
        "termo": "Condutor de veículos a pedais"
      },
      {
        "id": "7828-05",
        "termo": "Condutor de veículos de tração animal (ruas e estradas)"
      },
      {
        "id": "3413-05",
        "termo": "Condutor maquinista motorista fluvial"
      },
      {
        "id": "7421-10",
        "termo": "Confeccionador de acordeão"
      },
      {
        "id": "7650-05",
        "termo": "Confeccionador de artefatos de couro (exceto sapatos)"
      },
      {
        "id": "8331-10",
        "termo": "Confeccionador de bolsas; sacos e sacolas e papel; a máquina"
      },
      {
        "id": "7652-15",
        "termo": "Confeccionador de brinquedos de pano"
      },
      {
        "id": "7686-30",
        "termo": "Confeccionador de carimbos de borracha"
      },
      {
        "id": "7764-10",
        "termo": "Confeccionador de escovas; pincéis e produtos similares (a mão)"
      },
      {
        "id": "7764-15",
        "termo": "Confeccionador de escovas; pincéis e produtos similares (a máquina)"
      },
      {
        "id": "7421-15",
        "termo": "Confeccionador de instrumentos de corda"
      },
      {
        "id": "7421-20",
        "termo": "Confeccionador de instrumentos de percussão (pele; couro ou plástico)"
      },
      {
        "id": "7421-25",
        "termo": "Confeccionador de instrumentos de sopro (madeira)"
      },
      {
        "id": "7421-30",
        "termo": "Confeccionador de instrumentos de sopro (metal)"
      },
      {
        "id": "7764-20",
        "termo": "Confeccionador de móveis de vime; junco e bambu"
      },
      {
        "id": "7421-35",
        "termo": "Confeccionador de órgão"
      },
      {
        "id": "7421-40",
        "termo": "Confeccionador de piano"
      },
      {
        "id": "8117-15",
        "termo": "Confeccionador de pneumáticos"
      },
      {
        "id": "8331-15",
        "termo": "Confeccionador de sacos de celofane; a máquina"
      },
      {
        "id": "7652-25",
        "termo": "Confeccionador de velas náuticas; barracas e toldos"
      },
      {
        "id": "8117-25",
        "termo": "Confeccionador de velas por imersão"
      },
      {
        "id": "8117-35",
        "termo": "Confeccionador de velas por moldagem"
      },
      {
        "id": "8483-10",
        "termo": "Confeiteiro"
      },
      {
        "id": "4142-15",
        "termo": "Conferente de carga e descarga"
      },
      {
        "id": "4132-20",
        "termo": "Conferente de serviços bancários"
      },
      {
        "id": "5163-35",
        "termo": "Conferente-expedidor de roupas (lavanderias)"
      },
      {
        "id": "5153-20",
        "termo": "Conselheiro tutelar"
      },
      {
        "id": "9911-05",
        "termo": "Conservador de via permanente (trilhos)"
      },
      {
        "id": "2624-15",
        "termo": "Conservador-restaurador de bens culturais"
      },
      {
        "id": "3511-15",
        "termo": "Consultor contábil (técnico)"
      },
      {
        "id": "2410-40",
        "termo": "Consultor jurídico"
      },
      {
        "id": "2522-10",
        "termo": "Contador"
      },
      {
        "id": "4122-05",
        "termo": "Contínuo"
      },
      {
        "id": "3762-20",
        "termo": "Contorcionista"
      },
      {
        "id": "7601-05",
        "termo": "Contramestre de acabamento (indústria têxtil)"
      },
      {
        "id": "7601-10",
        "termo": "Contramestre de fiação (indústria têxtil)"
      },
      {
        "id": "7601-15",
        "termo": "Contramestre de malharia (indústria têxtil)"
      },
      {
        "id": "7601-20",
        "termo": "Contramestre de tecelagem (indústria têxtil)"
      },
      {
        "id": "3911-15",
        "termo": "Controlador de entrada e saída"
      },
      {
        "id": "5199-10",
        "termo": "Controlador de pragas"
      },
      {
        "id": "3421-15",
        "termo": "Controlador de serviços de máquinas e veículos"
      },
      {
        "id": "3425-05",
        "termo": "Controlador de tráfego aéreo"
      },
      {
        "id": "2151-20",
        "termo": "Coordenador de operações de combate à poluição no meio aquaviário"
      },
      {
        "id": "2394-05",
        "termo": "Coordenador pedagógico"
      },
      {
        "id": "5134-25",
        "termo": "Copeiro"
      },
      {
        "id": "5134-30",
        "termo": "Copeiro de hospital"
      },
      {
        "id": "7661-05",
        "termo": "Copiador de chapa"
      },
      {
        "id": "2628-15",
        "termo": "Coreógrafo"
      },
      {
        "id": "0301-05",
        "termo": "Coronel bombeiro militar"
      },
      {
        "id": "0201-05",
        "termo": "Coronel da polícia militar"
      },
      {
        "id": "3546-05",
        "termo": "Corretor de imóveis"
      },
      {
        "id": "3545-05",
        "termo": "Corretor de seguros"
      },
      {
        "id": "2533-05",
        "termo": "Corretor de valores; ativos financeiros; mercadorias e derivativos"
      },
      {
        "id": "7651-05",
        "termo": "Cortador de artefatos de couro (exceto roupas e calçados)"
      },
      {
        "id": "7683-10",
        "termo": "Cortador de calçados; a mão (exceto solas)"
      },
      {
        "id": "7641-05",
        "termo": "Cortador de calçados; a máquina (exceto solas e palmilhas)"
      },
      {
        "id": "8422-20",
        "termo": "Cortador de charutos"
      },
      {
        "id": "7731-05",
        "termo": "Cortador de laminados de madeira"
      },
      {
        "id": "7122-05",
        "termo": "Cortador de pedras"
      },
      {
        "id": "7631-10",
        "termo": "Cortador de roupas"
      },
      {
        "id": "7641-10",
        "termo": "Cortador de solas e palmilhas; a máquina"
      },
      {
        "id": "7651-10",
        "termo": "Cortador de tapeçaria"
      },
      {
        "id": "7522-10",
        "termo": "Cortador de vidro"
      },
      {
        "id": "7683-15",
        "termo": "Costurador de artefatos de couro; a mão (exceto roupas e calçados)"
      },
      {
        "id": "7653-10",
        "termo": "Costurador de artefatos de couro; a máquina (exceto roupas e calçados)"
      },
      {
        "id": "7642-05",
        "termo": "Costurador de calçados; a máquina"
      },
      {
        "id": "7630-10",
        "termo": "Costureira de peças sob encomenda"
      },
      {
        "id": "7630-15",
        "termo": "Costureira de reparação de roupas"
      },
      {
        "id": "7630-20",
        "termo": "Costureiro de roupa de couro e pele"
      },
      {
        "id": "7632-10",
        "termo": "Costureiro na confecção em série"
      },
      {
        "id": "7632-15",
        "termo": "Costureiro; a máquina na confecção em série"
      },
      {
        "id": "8414-08",
        "termo": "Cozinhador (conservação de alimentos)"
      },
      {
        "id": "8414-16",
        "termo": "Cozinhador de carnes"
      },
      {
        "id": "8414-20",
        "termo": "Cozinhador de frutas e legumes"
      },
      {
        "id": "8417-30",
        "termo": "Cozinhador de malte"
      },
      {
        "id": "8414-28",
        "termo": "Cozinhador de pescado"
      },
      {
        "id": "5132-25",
        "termo": "Cozinheiro de embarcações"
      },
      {
        "id": "5132-20",
        "termo": "Cozinheiro de hospital"
      },
      {
        "id": "5132-10",
        "termo": "Cozinheiro do serviço doméstico"
      },
      {
        "id": "5132-05",
        "termo": "Cozinheiro geral"
      },
      {
        "id": "5132-15",
        "termo": "Cozinheiro industrial"
      },
      {
        "id": "6130-10",
        "termo": "Criador de animais domésticos"
      },
      {
        "id": "6134-10",
        "termo": "Criador de animais produtores de veneno"
      },
      {
        "id": "6131-05",
        "termo": "Criador de asininos e muares"
      },
      {
        "id": "6131-10",
        "termo": "Criador de bovinos (corte)"
      },
      {
        "id": "6131-20",
        "termo": "Criador de bubalinos (corte)"
      },
      {
        "id": "6131-25",
        "termo": "Criador de bubalinos (leite)"
      },
      {
        "id": "6313-05",
        "termo": "Criador de camarões"
      },
      {
        "id": "6132-05",
        "termo": "Criador de caprinos"
      },
      {
        "id": "6131-30",
        "termo": "Criador de eqüínos"
      },
      {
        "id": "6313-10",
        "termo": "Criador de jacarés"
      },
      {
        "id": "6313-20",
        "termo": "Criador de ostras"
      },
      {
        "id": "6132-10",
        "termo": "Criador de ovinos"
      },
      {
        "id": "6313-25",
        "termo": "Criador de peixes"
      },
      {
        "id": "6313-30",
        "termo": "Criador de quelônios"
      },
      {
        "id": "6313-35",
        "termo": "Criador de rãs"
      },
      {
        "id": "6132-15",
        "termo": "Criador de suínos"
      },
      {
        "id": "6130-05",
        "termo": "Criador em pecuária polivalente"
      },
      {
        "id": "2615-10",
        "termo": "Crítico"
      },
      {
        "id": "7681-30",
        "termo": "Crocheteiro; a mão"
      },
      {
        "id": "3911-05",
        "termo": "Cronoanalista"
      },
      {
        "id": "3911-10",
        "termo": "Cronometrista"
      },
      {
        "id": "5162-10",
        "termo": "Cuidador de idosos"
      },
      {
        "id": "5162-20",
        "termo": "Cuidador em saúde"
      },
      {
        "id": "5134-15",
        "termo": "Cumim"
      },
      {
        "id": "6133-10",
        "termo": "Cunicultor"
      },
      {
        "id": "7622-05",
        "termo": "Curtidor (couros e peles)"
      },
      {
        "id": "3761-10",
        "termo": "Dançarino popular"
      },
      {
        "id": "3761-05",
        "termo": "Dançarino tradicional"
      },
      {
        "id": "7232-05",
        "termo": "Decapador"
      },
      {
        "id": "7524-05",
        "termo": "Decorador de cerâmica"
      },
      {
        "id": "3751-20",
        "termo": "Decorador de eventos"
      },
      {
        "id": "2629-05",
        "termo": "Decorador de interiores de nível superior"
      },
      {
        "id": "7524-10",
        "termo": "Decorador de vidro"
      },
      {
        "id": "7524-15",
        "termo": "Decorador de vidro à pincel"
      },
      {
        "id": "2424-05",
        "termo": "Defensor público"
      },
      {
        "id": "8481-05",
        "termo": "Defumador de carnes e pescados"
      },
      {
        "id": "8484-05",
        "termo": "Degustador de café"
      },
      {
        "id": "8484-10",
        "termo": "Degustador de chá"
      },
      {
        "id": "8422-35",
        "termo": "Degustador de charutos"
      },
      {
        "id": "8484-15",
        "termo": "Degustador de derivados de cacau"
      },
      {
        "id": "8484-20",
        "termo": "Degustador de vinhos ou licores"
      },
      {
        "id": "2423-05",
        "termo": "Delegado de polícia"
      },
      {
        "id": "7170-05",
        "termo": "Demolidor de edificações"
      },
      {
        "id": "5211-20",
        "termo": "Demonstrador de mercadorias"
      },
      {
        "id": "1111-15",
        "termo": "Deputado estadual e distrital"
      },
      {
        "id": "1111-10",
        "termo": "Deputado federal"
      },
      {
        "id": "7621-10",
        "termo": "Descarnador de couros e peles; à maquina"
      },
      {
        "id": "3180-10",
        "termo": "Desenhista copista"
      },
      {
        "id": "3180-15",
        "termo": "Desenhista detalhista"
      },
      {
        "id": "2624-20",
        "termo": "Desenhista industrial de produto (designer de produto)"
      },
      {
        "id": "2624-25",
        "termo": "Desenhista industrial de produto de moda (designer de moda)"
      },
      {
        "id": "2624-10",
        "termo": "Desenhista industrial gráfico (designer gráfico)"
      },
      {
        "id": "3185-05",
        "termo": "Desenhista projetista de arquitetura"
      },
      {
        "id": "3185-10",
        "termo": "Desenhista projetista de construção civil"
      },
      {
        "id": "3187-05",
        "termo": "Desenhista projetista de eletricidade"
      },
      {
        "id": "3186-05",
        "termo": "Desenhista projetista de máquinas"
      },
      {
        "id": "3187-10",
        "termo": "Desenhista projetista eletrônico"
      },
      {
        "id": "3186-10",
        "termo": "Desenhista projetista mecânico"
      },
      {
        "id": "3180-05",
        "termo": "Desenhista técnico"
      },
      {
        "id": "3184-05",
        "termo": "Desenhista técnico (artes gráficas)"
      },
      {
        "id": "3183-10",
        "termo": "Desenhista técnico (calefação; ventilação e refrigeração)"
      },
      {
        "id": "3181-10",
        "termo": "Desenhista técnico (cartografia)"
      },
      {
        "id": "3181-15",
        "termo": "Desenhista técnico (construção civil)"
      },
      {
        "id": "3183-05",
        "termo": "Desenhista técnico (eletricidade e eletrônica)"
      },
      {
        "id": "3184-10",
        "termo": "Desenhista técnico (ilustrações artísticas)"
      },
      {
        "id": "3184-15",
        "termo": "Desenhista técnico (ilustrações técnicas)"
      },
      {
        "id": "3184-20",
        "termo": "Desenhista técnico (indústria têxtil)"
      },
      {
        "id": "3181-20",
        "termo": "Desenhista técnico (instalações hidrossanitárias)"
      },
      {
        "id": "3184-25",
        "termo": "Desenhista técnico (mobiliário)"
      },
      {
        "id": "3182-10",
        "termo": "Desenhista técnico aeronáutico"
      },
      {
        "id": "3184-30",
        "termo": "Desenhista técnico de embalagens; maquetes e leiautes"
      },
      {
        "id": "3182-05",
        "termo": "Desenhista técnico mecânico"
      },
      {
        "id": "3182-15",
        "termo": "Desenhista técnico naval"
      },
      {
        "id": "8414-32",
        "termo": "Desidratador de alimentos"
      },
      {
        "id": "3751-05",
        "termo": "Designer de interiores"
      },
      {
        "id": "3751-10",
        "termo": "Designer de vitrines"
      },
      {
        "id": "2394-35",
        "termo": "Designer educacional"
      },
      {
        "id": "3163-35",
        "termo": "Desincrustador (poços de petróleo)"
      },
      {
        "id": "8485-15",
        "termo": "Desossador"
      },
      {
        "id": "3422-10",
        "termo": "Despachante aduaneiro"
      },
      {
        "id": "4231-10",
        "termo": "Despachante de trânsito"
      },
      {
        "id": "5112-10",
        "termo": "Despachante de transportes coletivos (exceto trem)"
      },
      {
        "id": "4231-05",
        "termo": "Despachante documentalista"
      },
      {
        "id": "3425-10",
        "termo": "Despachante operacional de vôo"
      },
      {
        "id": "8417-35",
        "termo": "Dessecador de malte"
      },
      {
        "id": "8114-05",
        "termo": "Destilador de madeira"
      },
      {
        "id": "8114-10",
        "termo": "Destilador de produtos químicos (exceto petróleo)"
      },
      {
        "id": "7111-15",
        "termo": "Destroçador de pedra"
      },
      {
        "id": "7111-20",
        "termo": "Detonador"
      },
      {
        "id": "2237-05",
        "termo": "Dietista"
      },
      {
        "id": "4121-10",
        "termo": "Digitador"
      },
      {
        "id": "1231-05",
        "termo": "Diretor administrativo"
      },
      {
        "id": "1231-10",
        "termo": "Diretor administrativo e financeiro"
      },
      {
        "id": "1233-05",
        "termo": "Diretor comercial"
      },
      {
        "id": "1225-05",
        "termo": "Diretor de produção e operações de alimentação"
      },
      {
        "id": "1225-10",
        "termo": "Diretor de produção e operações de hotel"
      },
      {
        "id": "1225-15",
        "termo": "Diretor de produção e operações de turismo"
      },
      {
        "id": "2623-30",
        "termo": "Diretor de arte"
      },
      {
        "id": "2531-25",
        "termo": "Diretor de arte (publicidade)"
      },
      {
        "id": "1227-20",
        "termo": "Diretor de câmbio e comércio exterior"
      },
      {
        "id": "2622-05",
        "termo": "Diretor de cinema"
      },
      {
        "id": "1227-25",
        "termo": "Diretor de compliance"
      },
      {
        "id": "2531-35",
        "termo": "Diretor de contas (publicidade)"
      },
      {
        "id": "1227-35",
        "termo": "Diretor de crédito imobiliário"
      },
      {
        "id": "1227-15",
        "termo": "Diretor de crédito rural"
      },
      {
        "id": "2531-30",
        "termo": "Diretor de criação"
      },
      {
        "id": "3721-05",
        "termo": "Diretor de fotografia"
      },
      {
        "id": "1313-10",
        "termo": "Diretor de instituição educacional pública"
      },
      {
        "id": "1227-40",
        "termo": "Diretor de leasing"
      },
      {
        "id": "1238-05",
        "termo": "Diretor de manutenção"
      },
      {
        "id": "1233-10",
        "termo": "Diretor de marketing"
      },
      {
        "id": "1227-45",
        "termo": "Diretor de mercado de capitais"
      },
      {
        "id": "2531-20",
        "termo": "Diretor de mídia (publicidade)"
      },
      {
        "id": "1224-05",
        "termo": "Diretor de operações comerciais (comércio atacadista e varejista)"
      },
      {
        "id": "1226-05",
        "termo": "Diretor de operações de correios"
      },
      {
        "id": "1223-05",
        "termo": "Diretor de operações de obras pública e civil"
      },
      {
        "id": "1226-10",
        "termo": "Diretor de operações de serviços de armazenamento"
      },
      {
        "id": "1226-15",
        "termo": "Diretor de operações de serviços de telecomunicações"
      },
      {
        "id": "1226-20",
        "termo": "Diretor de operações de serviços de transporte"
      },
      {
        "id": "1237-05",
        "termo": "Diretor de pesquisa e desenvolvimento (p&d)"
      },
      {
        "id": "1210-05",
        "termo": "Diretor de planejamento estratégico"
      },
      {
        "id": "1221-05",
        "termo": "Diretor de produção e operações em empresa agropecuária"
      },
      {
        "id": "1221-10",
        "termo": "Diretor de produção e operações em empresa aqüícola"
      },
      {
        "id": "1221-15",
        "termo": "Diretor de produção e operações em empresa florestal"
      },
      {
        "id": "1221-20",
        "termo": "Diretor de produção e operações em empresa pesqueira"
      },
      {
        "id": "1227-10",
        "termo": "Diretor de produtos bancários"
      },
      {
        "id": "2622-10",
        "termo": "Diretor de programas de rádio"
      },
      {
        "id": "2622-15",
        "termo": "Diretor de programas de televisão"
      },
      {
        "id": "1227-50",
        "termo": "Diretor de recuperação de créditos em operações de intermediação financeira"
      },
      {
        "id": "1232-05",
        "termo": "Diretor de recursos humanos"
      },
      {
        "id": "2611-15",
        "termo": "Diretor de redação"
      },
      {
        "id": "1232-10",
        "termo": "Diretor de relações de trabalho"
      },
      {
        "id": "1227-55",
        "termo": "Diretor de riscos de mercado"
      },
      {
        "id": "1311-05",
        "termo": "Diretor de serviços culturais"
      },
      {
        "id": "1312-05",
        "termo": "Diretor de serviços de saúde"
      },
      {
        "id": "1311-10",
        "termo": "Diretor de serviços sociais"
      },
      {
        "id": "1234-05",
        "termo": "Diretor de suprimentos"
      },
      {
        "id": "1234-10",
        "termo": "Diretor de suprimentos no serviço público"
      },
      {
        "id": "1231-15",
        "termo": "Diretor financeiro"
      },
      {
        "id": "1210-10",
        "termo": "Diretor geral de empresa e organizações (exceto de interesse público)"
      },
      {
        "id": "2622-20",
        "termo": "Diretor teatral"
      },
      {
        "id": "1141-05",
        "termo": "Dirigente de partido político"
      },
      {
        "id": "1114-10",
        "termo": "Dirigente do serviço público estadual e distrital"
      },
      {
        "id": "1114-05",
        "termo": "Dirigente do serviço público federal"
      },
      {
        "id": "1114-15",
        "termo": "Dirigente do serviço público municipal"
      },
      {
        "id": "1144-05",
        "termo": "Dirigente e administrador de organização da sociedade civil sem fins lucrativos"
      },
      {
        "id": "1143-05",
        "termo": "Dirigente e administrador de organização religiosa"
      },
      {
        "id": "1142-05",
        "termo": "Dirigentes de entidades de trabalhadores"
      },
      {
        "id": "1142-10",
        "termo": "Dirigentes de entidades patronais"
      },
      {
        "id": "3741-45",
        "termo": "Dj (disc jockey)"
      },
      {
        "id": "2612-10",
        "termo": "Documentalista"
      },
      {
        "id": "3762-25",
        "termo": "Domador de animais (circense)"
      },
      {
        "id": "3221-35",
        "termo": "Doula"
      },
      {
        "id": "8118-10",
        "termo": "Drageador (medicamentos)"
      },
      {
        "id": "2628-20",
        "termo": "Dramaturgo de dança"
      },
      {
        "id": "2512-05",
        "termo": "Economista"
      },
      {
        "id": "2512-10",
        "termo": "Economista agroindustrial"
      },
      {
        "id": "2512-30",
        "termo": "Economista ambiental"
      },
      {
        "id": "2512-25",
        "termo": "Economista do setor público"
      },
      {
        "id": "2516-10",
        "termo": "Economista doméstico"
      },
      {
        "id": "2512-15",
        "termo": "Economista financeiro"
      },
      {
        "id": "2512-20",
        "termo": "Economista industrial"
      },
      {
        "id": "2512-35",
        "termo": "Economista regional e urbano"
      },
      {
        "id": "2611-20",
        "termo": "Editor"
      },
      {
        "id": "2616-05",
        "termo": "Editor de jornal"
      },
      {
        "id": "2616-10",
        "termo": "Editor de livro"
      },
      {
        "id": "2616-15",
        "termo": "Editor de mídia eletrônica"
      },
      {
        "id": "2616-20",
        "termo": "Editor de revista"
      },
      {
        "id": "2616-25",
        "termo": "Editor de revista científica"
      },
      {
        "id": "7661-20",
        "termo": "Editor de texto e imagem"
      },
      {
        "id": "5153-05",
        "termo": "Educador social"
      },
      {
        "id": "3413-15",
        "termo": "Eletricista de bordo"
      },
      {
        "id": "7156-15",
        "termo": "Eletricista de instalações"
      },
      {
        "id": "9531-05",
        "termo": "Eletricista de instalações (aeronaves)"
      },
      {
        "id": "7156-05",
        "termo": "Eletricista de instalações (cenários)"
      },
      {
        "id": "7156-10",
        "termo": "Eletricista de instalações (edifícios)"
      },
      {
        "id": "7321-05",
        "termo": "Eletricista de manutenção de linhas elétricas; telefônicas e de comunicação de dados"
      },
      {
        "id": "9511-05",
        "termo": "Eletricista de manutenção eletroeletrônica"
      },
      {
        "id": "9541-05",
        "termo": "Eletromecânico de manutenção de elevadores"
      },
      {
        "id": "9541-10",
        "termo": "Eletromecânico de manutenção de escadas rolantes"
      },
      {
        "id": "9541-15",
        "termo": "Eletromecânico de manutenção de portas automáticas"
      },
      {
        "id": "3131-05",
        "termo": "Eletrotécnico"
      },
      {
        "id": "3131-10",
        "termo": "Eletrotécnico (produção de energia)"
      },
      {
        "id": "7841-05",
        "termo": "Embalador; a mão"
      },
      {
        "id": "7841-10",
        "termo": "Embalador; a máquina"
      },
      {
        "id": "3281-05",
        "termo": "Embalsamador"
      },
      {
        "id": "7321-10",
        "termo": "Emendador de cabos elétricos e telefônicos (aéreos e subterrâneos)"
      },
      {
        "id": "4211-20",
        "termo": "Emissor de passagens"
      },
      {
        "id": "5121-05",
        "termo": "Empregado doméstico nos serviços gerais"
      },
      {
        "id": "5121-10",
        "termo": "Empregado doméstico arrumador"
      },
      {
        "id": "5121-15",
        "termo": "Empregado doméstico faxineiro"
      },
      {
        "id": "5121-20",
        "termo": "Empregado doméstico diarista"
      },
      {
        "id": "7241-10",
        "termo": "Encanador"
      },
      {
        "id": "8214-05",
        "termo": "Encarregado de acabamento de chapas e metais (têmpera)"
      },
      {
        "id": "7603-05",
        "termo": "Encarregado de corte na confecção do vestuário"
      },
      {
        "id": "7603-10",
        "termo": "Encarregado de costura na confecção do vestuário"
      },
      {
        "id": "9502-05",
        "termo": "Encarregado de manutenção elétrica de veículos"
      },
      {
        "id": "9101-05",
        "termo": "Encarregado de manutenção mecânica de sistemas operacionais"
      },
      {
        "id": "2235-05",
        "termo": "Enfermeiro"
      },
      {
        "id": "2235-10",
        "termo": "Enfermeiro auditor"
      },
      {
        "id": "2235-65",
        "termo": "Enfermeiro da estratégia de saúde da família"
      },
      {
        "id": "2235-15",
        "termo": "Enfermeiro de bordo"
      },
      {
        "id": "2235-20",
        "termo": "Enfermeiro de centro cirúrgico"
      },
      {
        "id": "2235-25",
        "termo": "Enfermeiro de terapia intensiva"
      },
      {
        "id": "2235-30",
        "termo": "Enfermeiro do trabalho"
      },
      {
        "id": "2235-35",
        "termo": "Enfermeiro nefrologista"
      },
      {
        "id": "2235-40",
        "termo": "Enfermeiro neonatologista"
      },
      {
        "id": "2235-45",
        "termo": "Enfermeiro obstétrico"
      },
      {
        "id": "2235-55",
        "termo": "Enfermeiro puericultor e pediátrico"
      },
      {
        "id": "2235-60",
        "termo": "Enfermeiro sanitarista"
      },
      {
        "id": "7631-15",
        "termo": "Enfestador de roupas"
      },
      {
        "id": "7510-05",
        "termo": "Engastador (jóias)"
      },
      {
        "id": "2144-25",
        "termo": "Engenheiro aeronáutico"
      },
      {
        "id": "2221-05",
        "termo": "Engenheiro agrícola"
      },
      {
        "id": "2148-05",
        "termo": "Engenheiro agrimensor"
      },
      {
        "id": "2221-10",
        "termo": "Engenheiro agrônomo"
      },
      {
        "id": "2140-05",
        "termo": "Engenheiro ambiental"
      },
      {
        "id": "2148-10",
        "termo": "Engenheiro cartógrafo"
      },
      {
        "id": "2142-05",
        "termo": "Engenheiro civil"
      },
      {
        "id": "2142-10",
        "termo": "Engenheiro civil (aeroportos)"
      },
      {
        "id": "2142-15",
        "termo": "Engenheiro civil (edificações)"
      },
      {
        "id": "2142-20",
        "termo": "Engenheiro civil (estruturas metálicas)"
      },
      {
        "id": "2142-25",
        "termo": "Engenheiro civil (ferrovias e metrovias)"
      },
      {
        "id": "2142-30",
        "termo": "Engenheiro civil (geotécnia)"
      },
      {
        "id": "2142-40",
        "termo": "Engenheiro civil (hidráulica)"
      },
      {
        "id": "2142-35",
        "termo": "Engenheiro civil (hidrologia)"
      },
      {
        "id": "2142-45",
        "termo": "Engenheiro civil (pontes e viadutos)"
      },
      {
        "id": "2142-50",
        "termo": "Engenheiro civil (portos e vias navegáveis)"
      },
      {
        "id": "2142-55",
        "termo": "Engenheiro civil (rodovias)"
      },
      {
        "id": "2142-60",
        "termo": "Engenheiro civil (saneamento)"
      },
      {
        "id": "2142-70",
        "termo": "Engenheiro civil (transportes e trânsito)"
      },
      {
        "id": "2142-65",
        "termo": "Engenheiro civil (túneis)"
      },
      {
        "id": "2222-05",
        "termo": "Engenheiro de alimentos"
      },
      {
        "id": "2122-05",
        "termo": "Engenheiro de aplicativos em computação"
      },
      {
        "id": "2149-10",
        "termo": "Engenheiro de controle de qualidade"
      },
      {
        "id": "2021-10",
        "termo": "Engenheiro de controle e automação"
      },
      {
        "id": "2143-35",
        "termo": "Engenheiro de manutenção de telecomunicações"
      },
      {
        "id": "2146-05",
        "termo": "Engenheiro de materiais"
      },
      {
        "id": "2147-05",
        "termo": "Engenheiro de minas"
      },
      {
        "id": "2147-10",
        "termo": "Engenheiro de minas (beneficiamento)"
      },
      {
        "id": "2147-15",
        "termo": "Engenheiro de minas (lavra a céu aberto)"
      },
      {
        "id": "2147-20",
        "termo": "Engenheiro de minas (lavra subterrânea)"
      },
      {
        "id": "2147-30",
        "termo": "Engenheiro de minas (planejamento)"
      },
      {
        "id": "2147-35",
        "termo": "Engenheiro de minas (processo)"
      },
      {
        "id": "2147-40",
        "termo": "Engenheiro de minas (projeto)"
      },
      {
        "id": "2221-15",
        "termo": "Engenheiro de pesca"
      },
      {
        "id": "2149-05",
        "termo": "Engenheiro de produção"
      },
      {
        "id": "2143-50",
        "termo": "Engenheiro de redes de comunicação"
      },
      {
        "id": "2149-20",
        "termo": "Engenheiro de riscos"
      },
      {
        "id": "2149-15",
        "termo": "Engenheiro de segurança do trabalho"
      },
      {
        "id": "2143-40",
        "termo": "Engenheiro de telecomunicações"
      },
      {
        "id": "2149-25",
        "termo": "Engenheiro de tempos e movimentos"
      },
      {
        "id": "2143-05",
        "termo": "Engenheiro eletricista"
      },
      {
        "id": "2143-15",
        "termo": "Engenheiro eletricista de manutenção"
      },
      {
        "id": "2143-20",
        "termo": "Engenheiro eletricista de projetos"
      },
      {
        "id": "2143-10",
        "termo": "Engenheiro eletrônico"
      },
      {
        "id": "2143-25",
        "termo": "Engenheiro eletrônico de manutenção"
      },
      {
        "id": "2143-30",
        "termo": "Engenheiro eletrônico de projetos"
      },
      {
        "id": "2221-20",
        "termo": "Engenheiro florestal"
      },
      {
        "id": "2144-05",
        "termo": "Engenheiro mecânico"
      },
      {
        "id": "2144-15",
        "termo": "Engenheiro mecânico (energia nuclear)"
      },
      {
        "id": "2144-10",
        "termo": "Engenheiro mecânico automotivo"
      },
      {
        "id": "2144-20",
        "termo": "Engenheiro mecânico industrial"
      },
      {
        "id": "2021-05",
        "termo": "Engenheiro mecatrônico"
      },
      {
        "id": "2146-10",
        "termo": "Engenheiro metalurgista"
      },
      {
        "id": "2144-30",
        "termo": "Engenheiro naval"
      },
      {
        "id": "2143-45",
        "termo": "Engenheiro projetista de telecomunicações"
      },
      {
        "id": "2145-05",
        "termo": "Engenheiro químico"
      },
      {
        "id": "2145-10",
        "termo": "Engenheiro químico (indústria química)"
      },
      {
        "id": "2145-20",
        "termo": "Engenheiro químico (papel e celulose)"
      },
      {
        "id": "2145-25",
        "termo": "Engenheiro químico (petróleo e borracha)"
      },
      {
        "id": "2145-30",
        "termo": "Engenheiro químico (utilidades e meio ambiente)"
      },
      {
        "id": "2122-15",
        "termo": "Engenheiros de sistemas operacionais em computação"
      },
      {
        "id": "5199-15",
        "termo": "Engraxate"
      },
      {
        "id": "3250-05",
        "termo": "Enólogo"
      },
      {
        "id": "2628-25",
        "termo": "Ensaiador de dança"
      },
      {
        "id": "7751-05",
        "termo": "Entalhador de madeira"
      },
      {
        "id": "4152-15",
        "termo": "Entregador de publicações"
      },
      {
        "id": "4241-05",
        "termo": "Entrevistador censitário e de pesquisas amostrais"
      },
      {
        "id": "4241-10",
        "termo": "Entrevistador de pesquisa de opinião e mídia"
      },
      {
        "id": "4241-15",
        "termo": "Entrevistador de pesquisas de mercado"
      },
      {
        "id": "4241-20",
        "termo": "Entrevistador de preços"
      },
      {
        "id": "4241-30",
        "termo": "Entrevistador social"
      },
      {
        "id": "7622-15",
        "termo": "Enxugador de couros"
      },
      {
        "id": "3762-30",
        "termo": "Equilibrista"
      },
      {
        "id": "2263-15",
        "termo": "Equoterapeuta"
      },
      {
        "id": "8214-10",
        "termo": "Escarfador"
      },
      {
        "id": "3912-25",
        "termo": "Escolhedor de papel"
      },
      {
        "id": "7111-25",
        "termo": "Escorador de minas"
      },
      {
        "id": "3514-05",
        "termo": "Escrevente"
      },
      {
        "id": "2615-15",
        "termo": "Escritor de ficção"
      },
      {
        "id": "2615-20",
        "termo": "Escritor de não ficção"
      },
      {
        "id": "4241-25",
        "termo": "Escriturário em estatística"
      },
      {
        "id": "4132-25",
        "termo": "Escriturário de banco"
      },
      {
        "id": "3514-20",
        "termo": "Escrivão de polícia"
      },
      {
        "id": "3514-15",
        "termo": "Escrivão extra - judicial"
      },
      {
        "id": "3514-10",
        "termo": "Escrivão judicial"
      },
      {
        "id": "5168-05",
        "termo": "Esotérico"
      },
      {
        "id": "1115-05",
        "termo": "Especialista de políticas públicas e gestão governamental - eppgg"
      },
      {
        "id": "2012-10",
        "termo": "Especialista em calibrações metrológicas"
      },
      {
        "id": "1426-10",
        "termo": "Especialista em desenvolvimento de cigarros"
      },
      {
        "id": "2012-15",
        "termo": "Especialista em ensaios metrológicos"
      },
      {
        "id": "2012-20",
        "termo": "Especialista em instrumentação metrológica"
      },
      {
        "id": "2012-25",
        "termo": "Especialista em materiais de referência metrológica"
      },
      {
        "id": "2111-10",
        "termo": "Especialista em pesquisa operacional"
      },
      {
        "id": "7614-10",
        "termo": "Estampador de tecido"
      },
      {
        "id": "2112-05",
        "termo": "Estatístico"
      },
      {
        "id": "2112-10",
        "termo": "Estatístico (estatística aplicada)"
      },
      {
        "id": "2112-15",
        "termo": "Estatístico teórico"
      },
      {
        "id": "7764-25",
        "termo": "Esteireiro"
      },
      {
        "id": "3515-15",
        "termo": "Estenotipista"
      },
      {
        "id": "8414-40",
        "termo": "Esterilizador de alimentos"
      },
      {
        "id": "3221-30",
        "termo": "Esteticista"
      },
      {
        "id": "7623-05",
        "termo": "Estirador de couros e peles (acabamento)"
      },
      {
        "id": "7621-15",
        "termo": "Estirador de couros e peles (preparação)"
      },
      {
        "id": "7224-10",
        "termo": "Estirador de tubos de metal sem costura"
      },
      {
        "id": "7832-20",
        "termo": "Estivador"
      },
      {
        "id": "7652-30",
        "termo": "Estofador de aviões"
      },
      {
        "id": "7652-35",
        "termo": "Estofador de móveis"
      },
      {
        "id": "7321-15",
        "termo": "Examinador de cabos; linhas elétricas e telefônicas"
      },
      {
        "id": "8232-10",
        "termo": "Extrusor de fios ou fibras de vidro"
      },
      {
        "id": "2234-05",
        "termo": "Farmacêutico"
      },
      {
        "id": "2234-15",
        "termo": "Farmacêutico analista clínico"
      },
      {
        "id": "2234-20",
        "termo": "Farmacêutico de alimentos"
      },
      {
        "id": "2234-30",
        "termo": "Farmacêutico em saúde pública"
      },
      {
        "id": "2234-45",
        "termo": "Farmacêutico hospitalar e clínico"
      },
      {
        "id": "2234-35",
        "termo": "Farmacêutico industrial"
      },
      {
        "id": "2234-25",
        "termo": "Farmacêutico práticas integrativas e complementares"
      },
      {
        "id": "2234-40",
        "termo": "Farmacêutico toxicologista"
      },
      {
        "id": "5143-20",
        "termo": "Faxineiro"
      },
      {
        "id": "5242-05",
        "termo": "Feirante"
      },
      {
        "id": "8417-15",
        "termo": "Fermentador"
      },
      {
        "id": "6230-30",
        "termo": "Ferrador de animais"
      },
      {
        "id": "7211-05",
        "termo": "Ferramenteiro"
      },
      {
        "id": "7211-10",
        "termo": "Ferramenteiro de mandris; calibradores e outros dispositivos"
      },
      {
        "id": "2614-05",
        "termo": "Filólogo"
      },
      {
        "id": "2514-05",
        "termo": "Filósofo"
      },
      {
        "id": "8417-10",
        "termo": "Filtrador de cerveja"
      },
      {
        "id": "3744-10",
        "termo": "Finalizador de filmes"
      },
      {
        "id": "3744-15",
        "termo": "Finalizador de vídeo"
      },
      {
        "id": "2545-05",
        "termo": "Fiscal de atividades urbanas"
      },
      {
        "id": "3425-15",
        "termo": "Fiscal de aviação civil (fac)"
      },
      {
        "id": "5174-25",
        "termo": "Fiscal de loja"
      },
      {
        "id": "7102-25",
        "termo": "Fiscal de pátio de usina de concreto"
      },
      {
        "id": "5112-05",
        "termo": "Fiscal de transportes coletivos (exceto trem)"
      },
      {
        "id": "2544-05",
        "termo": "Fiscal de tributos estadual"
      },
      {
        "id": "2544-10",
        "termo": "Fiscal de tributos municipal"
      },
      {
        "id": "2131-05",
        "termo": "Físico"
      },
      {
        "id": "2131-10",
        "termo": "Físico (acústica)"
      },
      {
        "id": "2131-15",
        "termo": "Físico (atômica e molecular)"
      },
      {
        "id": "2131-20",
        "termo": "Físico (cosmologia)"
      },
      {
        "id": "2131-25",
        "termo": "Físico (estatística e matemática)"
      },
      {
        "id": "2131-30",
        "termo": "Físico (fluidos)"
      },
      {
        "id": "2131-35",
        "termo": "Físico (instrumentação)"
      },
      {
        "id": "2131-40",
        "termo": "Físico (matéria condensada)"
      },
      {
        "id": "2131-45",
        "termo": "Físico (materiais)"
      },
      {
        "id": "2131-50",
        "termo": "Físico (medicina)"
      },
      {
        "id": "2131-55",
        "termo": "Físico (nuclear e reatores)"
      },
      {
        "id": "2131-60",
        "termo": "Físico (óptica)"
      },
      {
        "id": "2131-65",
        "termo": "Físico (partículas e campos)"
      },
      {
        "id": "2131-70",
        "termo": "Físico (plasma)"
      },
      {
        "id": "2131-75",
        "termo": "Físico (térmica)"
      },
      {
        "id": "2236-60",
        "termo": "Fisioterapeuta do trabalho"
      },
      {
        "id": "2236-50",
        "termo": "Fisioterapeuta acupunturista"
      },
      {
        "id": "2236-55",
        "termo": "Fisioterapeuta esportivo"
      },
      {
        "id": "2236-05",
        "termo": "Fisioterapeuta geral"
      },
      {
        "id": "2236-40",
        "termo": "Fisioterapeuta osteopata"
      },
      {
        "id": "2236-45",
        "termo": "Fisioterapeuta quiropraxista"
      },
      {
        "id": "2236-25",
        "termo": "Fisioterapeuta respiratória"
      },
      {
        "id": "2236-35",
        "termo": "Fisioterapeuta traumato-ortopédica funcional"
      },
      {
        "id": "4151-20",
        "termo": "Fitotecário"
      },
      {
        "id": "8621-05",
        "termo": "Foguista (locomotivas a vapor)"
      },
      {
        "id": "7751-10",
        "termo": "Folheador de móveis de madeira"
      },
      {
        "id": "2238-15",
        "termo": "Fonoaudiólogo educacional"
      },
      {
        "id": "2238-20",
        "termo": "Fonoaudiólogo em audiologia"
      },
      {
        "id": "2238-25",
        "termo": "Fonoaudiólogo em disfagia"
      },
      {
        "id": "2238-30",
        "termo": "Fonoaudiólogo em linguagem"
      },
      {
        "id": "2238-35",
        "termo": "Fonoaudiólogo em motricidade orofacial"
      },
      {
        "id": "2238-40",
        "termo": "Fonoaudiólogo em saúde coletiva"
      },
      {
        "id": "2238-45",
        "termo": "Fonoaudiólogo em voz"
      },
      {
        "id": "2238-10",
        "termo": "Fonoaudiólogo geral"
      },
      {
        "id": "7221-05",
        "termo": "Forjador"
      },
      {
        "id": "7221-10",
        "termo": "Forjador a martelo"
      },
      {
        "id": "7221-15",
        "termo": "Forjador prensista"
      },
      {
        "id": "8233-15",
        "termo": "Forneiro (materiais de construção)"
      },
      {
        "id": "8221-05",
        "termo": "Forneiro de cubilô"
      },
      {
        "id": "8221-10",
        "termo": "Forneiro de forno-poço"
      },
      {
        "id": "8221-15",
        "termo": "Forneiro de fundição (forno de redução)"
      },
      {
        "id": "8221-20",
        "termo": "Forneiro de reaquecimento e tratamento térmico na metalurgia"
      },
      {
        "id": "8221-25",
        "termo": "Forneiro de revérbero"
      },
      {
        "id": "8212-05",
        "termo": "Forneiro e operador (alto-forno)"
      },
      {
        "id": "8212-10",
        "termo": "Forneiro e operador (conversor a oxigênio)"
      },
      {
        "id": "8212-15",
        "termo": "Forneiro e operador (forno elétrico)"
      },
      {
        "id": "8212-20",
        "termo": "Forneiro e operador (refino de metais não-ferrosos)"
      },
      {
        "id": "8212-25",
        "termo": "Forneiro e operador de forno de redução direta"
      },
      {
        "id": "8232-15",
        "termo": "Forneiro na fundição de vidro"
      },
      {
        "id": "8232-20",
        "termo": "Forneiro no recozimento de vidro"
      },
      {
        "id": "2618-05",
        "termo": "Fotógrafo"
      },
      {
        "id": "2618-10",
        "termo": "Fotógrafo publicitário"
      },
      {
        "id": "2618-15",
        "termo": "Fotógrafo retratista"
      },
      {
        "id": "7621-20",
        "termo": "Fuloneiro"
      },
      {
        "id": "7623-10",
        "termo": "Fuloneiro no acabamento de couros e peles"
      },
      {
        "id": "7511-10",
        "termo": "Fundidor (joalheria e ourivesaria)"
      },
      {
        "id": "7222-05",
        "termo": "Fundidor de metais"
      },
      {
        "id": "9913-05",
        "termo": "Funileiro de veículos (reparação)"
      },
      {
        "id": "7244-35",
        "termo": "Funileiro industrial"
      },
      {
        "id": "7232-15",
        "termo": "Galvanizador"
      },
      {
        "id": "5199-20",
        "termo": "Gandula"
      },
      {
        "id": "5141-10",
        "termo": "Garagista"
      },
      {
        "id": "5134-05",
        "termo": "Garçom"
      },
      {
        "id": "5134-10",
        "termo": "Garçom (serviços de vinhos)"
      },
      {
        "id": "7114-05",
        "termo": "Garimpeiro"
      },
      {
        "id": "6314-05",
        "termo": "Gelador industrial"
      },
      {
        "id": "6314-10",
        "termo": "Gelador profissional"
      },
      {
        "id": "2011-15",
        "termo": "Geneticista"
      },
      {
        "id": "2134-15",
        "termo": "Geofísico"
      },
      {
        "id": "2133-10",
        "termo": "Geofísico espacial"
      },
      {
        "id": "2513-05",
        "termo": "Geógrafo"
      },
      {
        "id": "2134-05",
        "termo": "Geólogo"
      },
      {
        "id": "2134-10",
        "termo": "Geólogo de engenharia"
      },
      {
        "id": "2134-20",
        "termo": "Geoquímico"
      },
      {
        "id": "1421-05",
        "termo": "Gerente administrativo"
      },
      {
        "id": "1423-05",
        "termo": "Gerente comercial"
      },
      {
        "id": "3425-20",
        "termo": "Gerente da administração de aeroportos"
      },
      {
        "id": "1417-10",
        "termo": "Gerente de agência"
      },
      {
        "id": "1424-15",
        "termo": "Gerente de almoxarifado"
      },
      {
        "id": "1415-15",
        "termo": "Gerente de bar"
      },
      {
        "id": "1417-15",
        "termo": "Gerente de câmbio e comércio exterior"
      },
      {
        "id": "2532-05",
        "termo": "Gerente de captação (fundos e investimentos institucionais)"
      },
      {
        "id": "2532-10",
        "termo": "Gerente de clientes especiais (private)"
      },
      {
        "id": "1424-05",
        "termo": "Gerente de compras"
      },
      {
        "id": "1423-10",
        "termo": "Gerente de comunicação"
      },
      {
        "id": "2532-15",
        "termo": "Gerente de contas - pessoa física e jurídica"
      },
      {
        "id": "1417-20",
        "termo": "Gerente de crédito e cobrança"
      },
      {
        "id": "1417-25",
        "termo": "Gerente de crédito imobiliário"
      },
      {
        "id": "1417-30",
        "termo": "Gerente de crédito rural"
      },
      {
        "id": "1422-10",
        "termo": "Gerente de departamento pessoal"
      },
      {
        "id": "1425-10",
        "termo": "Gerente de desenvolvimento de sistemas"
      },
      {
        "id": "3425-25",
        "termo": "Gerente de empresa aérea em aeroportos"
      },
      {
        "id": "2532-20",
        "termo": "Gerente de grandes contas (corporate)"
      },
      {
        "id": "1415-05",
        "termo": "Gerente de hotel"
      },
      {
        "id": "1313-15",
        "termo": "Gerente de instituição educacional da área privada"
      },
      {
        "id": "1416-15",
        "termo": "Gerente de logística (armazenagem e distribuição)"
      },
      {
        "id": "1414-15",
        "termo": "Gerente de loja e supermercado"
      },
      {
        "id": "1423-15",
        "termo": "Gerente de marketing"
      },
      {
        "id": "1416-10",
        "termo": "Gerente de operações de correios e telecomunicações"
      },
      {
        "id": "1414-20",
        "termo": "Gerente de operações de serviços de assistência técnica"
      },
      {
        "id": "1416-05",
        "termo": "Gerente de operações de transportes"
      },
      {
        "id": "1415-20",
        "termo": "Gerente de pensão"
      },
      {
        "id": "1426-05",
        "termo": "Gerente de pesquisa e desenvolvimento (p&d)"
      },
      {
        "id": "1425-15",
        "termo": "Gerente de produção de tecnologia da informação"
      },
      {
        "id": "1412-05",
        "termo": "Gerente de produção e operações"
      },
      {
        "id": "1411-05",
        "termo": "Gerente de produção e operações aqüícolas"
      },
      {
        "id": "1411-10",
        "termo": "Gerente de produção e operações florestais"
      },
      {
        "id": "1411-15",
        "termo": "Gerente de produção e operações agropecuárias"
      },
      {
        "id": "1413-05",
        "termo": "Gerente de produção e operações da construção civil e obras públicas"
      },
      {
        "id": "1411-20",
        "termo": "Gerente de produção e operações pesqueiras"
      },
      {
        "id": "1417-05",
        "termo": "Gerente de produtos bancários"
      },
      {
        "id": "1425-20",
        "termo": "Gerente de projetos de tecnologia da informação"
      },
      {
        "id": "1427-05",
        "termo": "Gerente de projetos e serviços de manutenção"
      },
      {
        "id": "1417-35",
        "termo": "Gerente de recuperação de crédito"
      },
      {
        "id": "1422-05",
        "termo": "Gerente de recursos humanos"
      },
      {
        "id": "1415-10",
        "termo": "Gerente de restaurante"
      },
      {
        "id": "1421-10",
        "termo": "Gerente de riscos"
      },
      {
        "id": "1425-25",
        "termo": "Gerente de segurança de tecnologia da informação"
      },
      {
        "id": "1311-15",
        "termo": "Gerente de serviços culturais"
      },
      {
        "id": "1312-10",
        "termo": "Gerente de serviços de saúde"
      },
      {
        "id": "1313-20",
        "termo": "Gerente de serviços educacionais da área pública"
      },
      {
        "id": "1311-20",
        "termo": "Gerente de serviços sociais"
      },
      {
        "id": "1425-30",
        "termo": "Gerente de suporte técnico de tecnologia da informação"
      },
      {
        "id": "1424-10",
        "termo": "Gerente de suprimentos"
      },
      {
        "id": "1415-25",
        "termo": "Gerente de turismo"
      },
      {
        "id": "1423-20",
        "termo": "Gerente de vendas"
      },
      {
        "id": "1421-15",
        "termo": "Gerente financeiro"
      },
      {
        "id": "1312-20",
        "termo": "Gerontólogo"
      },
      {
        "id": "7164-05",
        "termo": "Gesseiro"
      },
      {
        "id": "2526-05",
        "termo": "Gestor em segurança"
      },
      {
        "id": "1112-30",
        "termo": "Governador de estado"
      },
      {
        "id": "1112-35",
        "termo": "Governador do distrito federal"
      },
      {
        "id": "5131-15",
        "termo": "Governanta de hotelaria"
      },
      {
        "id": "7511-15",
        "termo": "Gravador (joalheria e ourivesaria)"
      },
      {
        "id": "7122-10",
        "termo": "Gravador de inscrições em pedra"
      },
      {
        "id": "7661-35",
        "termo": "Gravador de matriz calcográfica"
      },
      {
        "id": "7661-15",
        "termo": "Gravador de matriz para flexografia (clicherista)"
      },
      {
        "id": "7661-30",
        "termo": "Gravador de matriz para rotogravura (eletromecânico e químico)"
      },
      {
        "id": "7661-40",
        "termo": "Gravador de matriz serigráfica"
      },
      {
        "id": "7122-15",
        "termo": "Gravador de relevos em pedra"
      },
      {
        "id": "7522-15",
        "termo": "Gravador de vidro a água-forte"
      },
      {
        "id": "7522-20",
        "termo": "Gravador de vidro a esmeril"
      },
      {
        "id": "7522-25",
        "termo": "Gravador de vidro a jato de areia"
      },
      {
        "id": "7687-05",
        "termo": "Gravador; à mão (encadernação)"
      },
      {
        "id": "5173-35",
        "termo": "Guarda portuário"
      },
      {
        "id": "5172-15",
        "termo": "Guarda-civil municipal"
      },
      {
        "id": "5133-25",
        "termo": "Guarda-roupeira de cinema"
      },
      {
        "id": "5199-25",
        "termo": "Guardador de veículos"
      },
      {
        "id": "6320-05",
        "termo": "Guia florestal"
      },
      {
        "id": "7822-05",
        "termo": "Guincheiro (construção civil)"
      },
      {
        "id": "8414-44",
        "termo": "Hidrogenador de óleos e gorduras"
      },
      {
        "id": "2134-25",
        "termo": "Hidrogeólogo"
      },
      {
        "id": "2149-40",
        "termo": "Higienista ocupacional"
      },
      {
        "id": "6321-15",
        "termo": "Identificador florestal"
      },
      {
        "id": "3721-10",
        "termo": "Iluminador (televisão)"
      },
      {
        "id": "2151-25",
        "termo": "Imediato da marinha mercante"
      },
      {
        "id": "7721-10",
        "termo": "Impregnador de madeira"
      },
      {
        "id": "7662-05",
        "termo": "Impressor (serigrafia)"
      },
      {
        "id": "7663-10",
        "termo": "Impressor de corte e vinco"
      },
      {
        "id": "7662-15",
        "termo": "Impressor de ofsete (plano e rotativo)"
      },
      {
        "id": "7662-20",
        "termo": "Impressor de rotativa"
      },
      {
        "id": "7662-25",
        "termo": "Impressor de rotogravura"
      },
      {
        "id": "7662-30",
        "termo": "Impressor digital"
      },
      {
        "id": "7662-35",
        "termo": "Impressor flexográfico"
      },
      {
        "id": "7662-40",
        "termo": "Impressor letterset"
      },
      {
        "id": "7662-45",
        "termo": "Impressor tampográfico"
      },
      {
        "id": "6230-10",
        "termo": "Inseminador"
      },
      {
        "id": "3341-05",
        "termo": "Inspetor de alunos de escola privada"
      },
      {
        "id": "3341-10",
        "termo": "Inspetor de alunos de escola pública"
      },
      {
        "id": "3425-30",
        "termo": "Inspetor de aviação civil"
      },
      {
        "id": "7618-05",
        "termo": "Inspetor de estamparia (produção têxtil)"
      },
      {
        "id": "3517-25",
        "termo": "Inspetor de risco"
      },
      {
        "id": "3423-10",
        "termo": "Inspetor de serviços de transportes rodoviários (passageiros e cargas)"
      },
      {
        "id": "3517-30",
        "termo": "Inspetor de sinistros"
      },
      {
        "id": "3146-05",
        "termo": "Inspetor de soldagem"
      },
      {
        "id": "2151-30",
        "termo": "Inspetor de terminal"
      },
      {
        "id": "7102-15",
        "termo": "Inspetor de terraplenagem"
      },
      {
        "id": "9911-10",
        "termo": "Inspetor de via permanente (trilhos)"
      },
      {
        "id": "2151-35",
        "termo": "Inspetor naval"
      },
      {
        "id": "5231-05",
        "termo": "Instalador de cortinas e persianas; portas sanfonadas e boxe"
      },
      {
        "id": "7157-10",
        "termo": "Instalador de isolantes acústicos"
      },
      {
        "id": "7157-15",
        "termo": "Instalador de isolantes térmicos (refrigeração e climatização)"
      },
      {
        "id": "7157-20",
        "termo": "Instalador de isolantes térmicos de caldeira e tubulações"
      },
      {
        "id": "7157-25",
        "termo": "Instalador de material isolante; a mão (edificações)"
      },
      {
        "id": "7157-30",
        "termo": "Instalador de material isolante; a máquina (edificações)"
      },
      {
        "id": "5231-10",
        "termo": "Instalador de som e acessórios de veículos"
      },
      {
        "id": "7241-15",
        "termo": "Instalador de tubulações"
      },
      {
        "id": "7241-20",
        "termo": "Instalador de tubulações (aeronaves)"
      },
      {
        "id": "7241-25",
        "termo": "Instalador de tubulações (embarcações)"
      },
      {
        "id": "7241-30",
        "termo": "Instalador de tubulações de gás combustível (produção e distribuição)"
      },
      {
        "id": "7241-35",
        "termo": "Instalador de tubulações de vapor (produção e distribuição)"
      },
      {
        "id": "7321-25",
        "termo": "Instalador eletricista (tração de veículos)"
      },
      {
        "id": "7313-05",
        "termo": "Instalador-reparador de equipamentos de comutação em telefonia"
      },
      {
        "id": "7313-10",
        "termo": "Instalador-reparador de equipamentos de energia em telefonia"
      },
      {
        "id": "7313-15",
        "termo": "Instalador-reparador de equipamentos de transmissão em telefonia"
      },
      {
        "id": "7313-20",
        "termo": "Instalador-reparador de linhas e aparelhos de telecomunicações"
      },
      {
        "id": "7313-25",
        "termo": "Instalador-reparador de redes e cabos telefônicos"
      },
      {
        "id": "7321-30",
        "termo": "Instalador-reparador de redes telefônicas e de comunicação de dados"
      },
      {
        "id": "3222-25",
        "termo": "Instrumentador cirúrgico"
      },
      {
        "id": "2332-05",
        "termo": "Instrutor de aprendizagem e treinamento agropecuário"
      },
      {
        "id": "2332-15",
        "termo": "Instrutor de aprendizagem e treinamento comercial"
      },
      {
        "id": "2332-10",
        "termo": "Instrutor de aprendizagem e treinamento industrial"
      },
      {
        "id": "3331-05",
        "termo": "Instrutor de auto-escola"
      },
      {
        "id": "3331-10",
        "termo": "Instrutor de cursos livres"
      },
      {
        "id": "2153-15",
        "termo": "Instrutor de vôo"
      },
      {
        "id": "2614-10",
        "termo": "Intérprete"
      },
      {
        "id": "2614-25",
        "termo": "Intérprete de língua de sinais"
      },
      {
        "id": "3518-10",
        "termo": "Investigador de polícia"
      },
      {
        "id": "7510-10",
        "termo": "Joalheiro"
      },
      {
        "id": "7510-15",
        "termo": "Joalheiro (reparações)"
      },
      {
        "id": "3771-30",
        "termo": "Jóquei"
      },
      {
        "id": "5242-10",
        "termo": "Jornaleiro (em banca de jornal)"
      },
      {
        "id": "2611-25",
        "termo": "Jornalista"
      },
      {
        "id": "1113-40",
        "termo": "Juiz auditor estadual - justiça militar"
      },
      {
        "id": "1113-35",
        "termo": "Juiz auditor federal - justiça militar"
      },
      {
        "id": "1113-25",
        "termo": "Juiz de direito"
      },
      {
        "id": "1113-45",
        "termo": "Juiz do trabalho"
      },
      {
        "id": "1113-30",
        "termo": "Juiz federal"
      },
      {
        "id": "4151-25",
        "termo": "Kardexista"
      },
      {
        "id": "7664-05",
        "termo": "Laboratorista fotográfico"
      },
      {
        "id": "8414-48",
        "termo": "Lagareiro"
      },
      {
        "id": "7511-20",
        "termo": "Laminador de metais preciosos a mão"
      },
      {
        "id": "8117-45",
        "termo": "Laminador de plástico"
      },
      {
        "id": "7510-20",
        "termo": "Lapidador (jóias)"
      },
      {
        "id": "7522-30",
        "termo": "Lapidador de vidros e cristais"
      },
      {
        "id": "5163-05",
        "termo": "Lavadeiro; em geral"
      },
      {
        "id": "5163-15",
        "termo": "Lavador de artefatos de tapeçaria"
      },
      {
        "id": "5199-30",
        "termo": "Lavador de garrafas; vidros e outros utensílios"
      },
      {
        "id": "7611-10",
        "termo": "Lavador de lã"
      },
      {
        "id": "9921-20",
        "termo": "Lavador de peças"
      },
      {
        "id": "5164-05",
        "termo": "Lavador de roupas"
      },
      {
        "id": "5163-10",
        "termo": "Lavador de roupas a maquina"
      },
      {
        "id": "5199-35",
        "termo": "Lavador de veículos"
      },
      {
        "id": "3544-05",
        "termo": "Leiloeiro"
      },
      {
        "id": "5199-40",
        "termo": "Leiturista"
      },
      {
        "id": "1130-10",
        "termo": "Líder de comunidade caiçara"
      },
      {
        "id": "7321-35",
        "termo": "Ligador de linhas telefônicas"
      },
      {
        "id": "5163-20",
        "termo": "Limpador a seco; à máquina"
      },
      {
        "id": "5143-30",
        "termo": "Limpador de piscinas"
      },
      {
        "id": "5164-10",
        "termo": "Limpador de roupas a seco; à mão"
      },
      {
        "id": "5143-05",
        "termo": "Limpador de vidros"
      },
      {
        "id": "7222-10",
        "termo": "Lingotador"
      },
      {
        "id": "2614-15",
        "termo": "Lingüista"
      },
      {
        "id": "7686-10",
        "termo": "Linotipista"
      },
      {
        "id": "7623-15",
        "termo": "Lixador de couros e peles"
      },
      {
        "id": "4213-15",
        "termo": "Localizador (cobrador)"
      },
      {
        "id": "2617-15",
        "termo": "Locutor de rádio e televisão"
      },
      {
        "id": "2617-20",
        "termo": "Locutor publicitário de rádio e televisão"
      },
      {
        "id": "9191-15",
        "termo": "Lubrificador de embarcações"
      },
      {
        "id": "9191-10",
        "termo": "Lubrificador de veículos automotores (exceto embarcações)"
      },
      {
        "id": "9191-05",
        "termo": "Lubrificador industrial"
      },
      {
        "id": "2241-10",
        "termo": "Ludomotricista"
      },
      {
        "id": "7751-15",
        "termo": "Lustrador de peças de madeira"
      },
      {
        "id": "7165-20",
        "termo": "Lustrador de piso"
      },
      {
        "id": "9152-15",
        "termo": "Luthier (restauração de cordas arcadas)"
      },
      {
        "id": "7223-10",
        "termo": "Macheiro; a máquina"
      },
      {
        "id": "7223-05",
        "termo": "Macheiro; a mão"
      },
      {
        "id": "5162-15",
        "termo": "Mãe social"
      },
      {
        "id": "8485-20",
        "termo": "Magarefe"
      },
      {
        "id": "3762-35",
        "termo": "Mágico"
      },
      {
        "id": "5101-35",
        "termo": "Maître"
      },
      {
        "id": "0301-10",
        "termo": "Major bombeiro militar"
      },
      {
        "id": "0201-15",
        "termo": "Major da polícia militar"
      },
      {
        "id": "3762-40",
        "termo": "Malabarista"
      },
      {
        "id": "8417-25",
        "termo": "Malteiro (germinação)"
      },
      {
        "id": "5161-20",
        "termo": "Manicure"
      },
      {
        "id": "7831-10",
        "termo": "Manobrador"
      },
      {
        "id": "8482-15",
        "termo": "Manteigueiro na fabricação de laticínio"
      },
      {
        "id": "9513-10",
        "termo": "Mantenedor de sistemas eletroeletrônicos de segurança"
      },
      {
        "id": "7711-15",
        "termo": "Maquetista na marcenaria"
      },
      {
        "id": "5161-25",
        "termo": "Maquiador"
      },
      {
        "id": "5161-30",
        "termo": "Maquiador de caracterização"
      },
      {
        "id": "3742-10",
        "termo": "Maquinista de cinema e vídeo"
      },
      {
        "id": "8621-10",
        "termo": "Maquinista de embarcações"
      },
      {
        "id": "3742-15",
        "termo": "Maquinista de teatro e espetáculos"
      },
      {
        "id": "7826-10",
        "termo": "Maquinista de trem"
      },
      {
        "id": "7633-15",
        "termo": "Marcador de peças confeccionadas para bordar"
      },
      {
        "id": "8214-15",
        "termo": "Marcador de produtos (siderúrgico e metalúrgico)"
      },
      {
        "id": "7711-05",
        "termo": "Marceneiro"
      },
      {
        "id": "7751-20",
        "termo": "Marcheteiro"
      },
      {
        "id": "7827-30",
        "termo": "Marinheiro auxiliar de convés (marítimo e aquaviario)"
      },
      {
        "id": "7827-35",
        "termo": "Marinheiro auxiliar de máquinas (marítimo e aquaviário)"
      },
      {
        "id": "7827-05",
        "termo": "Marinheiro de convés (marítimo e fluviário)"
      },
      {
        "id": "7827-25",
        "termo": "Marinheiro de esporte e recreio"
      },
      {
        "id": "7827-10",
        "termo": "Marinheiro de máquinas"
      },
      {
        "id": "7165-25",
        "termo": "Marmorista (construção)"
      },
      {
        "id": "8483-15",
        "termo": "Masseiro (massas alimentícias)"
      },
      {
        "id": "3221-20",
        "termo": "Massoterapeuta"
      },
      {
        "id": "2111-15",
        "termo": "Matemático"
      },
      {
        "id": "2111-20",
        "termo": "Matemático aplicado"
      },
      {
        "id": "7623-20",
        "termo": "Matizador de couros e peles"
      },
      {
        "id": "9141-05",
        "termo": "Mecânico de manutenção de aeronaves; em geral"
      },
      {
        "id": "9131-05",
        "termo": "Mecânico de manutenção de aparelhos de levantamento"
      },
      {
        "id": "9193-05",
        "termo": "Mecânico de manutenção de aparelhos esportivos e de ginástica"
      },
      {
        "id": "9144-05",
        "termo": "Mecânico de manutenção de automóveis; motocicletas e veículos similares"
      },
      {
        "id": "9193-10",
        "termo": "Mecânico de manutenção de bicicletas e veículos similares"
      },
      {
        "id": "9111-10",
        "termo": "Mecânico de manutenção de bombas"
      },
      {
        "id": "9111-15",
        "termo": "Mecânico de manutenção de compressores de ar"
      },
      {
        "id": "9541-20",
        "termo": "Mecânico de manutenção de instalações mecânicas de edifícios"
      },
      {
        "id": "9131-15",
        "termo": "Mecânico de manutenção de máquinas agrícolas"
      },
      {
        "id": "9131-20",
        "termo": "Mecânico de manutenção de máquinas de construção e terraplenagem"
      },
      {
        "id": "9113-10",
        "termo": "Mecânico de manutenção de máquinas gráficas"
      },
      {
        "id": "9113-20",
        "termo": "Mecânico de manutenção de máquinas têxteis"
      },
      {
        "id": "9113-05",
        "termo": "Mecânico de manutenção de máquinas; em geral"
      },
      {
        "id": "9113-25",
        "termo": "Mecânico de manutenção de máquinas-ferramentas (usinagem de metais)"
      },
      {
        "id": "9144-15",
        "termo": "Mecânico de manutenção de motocicletas"
      },
      {
        "id": "9111-20",
        "termo": "Mecânico de manutenção de motores diesel (exceto de veículos automotores)"
      },
      {
        "id": "9142-05",
        "termo": "Mecânico de manutenção de motores e equipamentos navais"
      },
      {
        "id": "9111-25",
        "termo": "Mecânico de manutenção de redutores"
      },
      {
        "id": "9144-20",
        "termo": "Mecânico de manutenção de tratores"
      },
      {
        "id": "9111-30",
        "termo": "Mecânico de manutenção de turbinas (exceto de aeronaves)"
      },
      {
        "id": "9111-35",
        "termo": "Mecânico de manutenção de turbocompressores"
      },
      {
        "id": "9143-05",
        "termo": "Mecânico de manutenção de veículos ferroviários"
      },
      {
        "id": "9112-05",
        "termo": "Mecânico de manutenção e instalação de aparelhos de climatização e refrigeração"
      },
      {
        "id": "7257-05",
        "termo": "Mecânico de refrigeração"
      },
      {
        "id": "9144-25",
        "termo": "Mecânico de veículos automotores a diesel (exceto tratores)"
      },
      {
        "id": "3411-15",
        "termo": "Mecânico de vôo"
      },
      {
        "id": "7254-05",
        "termo": "Mecânico montador de motores de aeronaves"
      },
      {
        "id": "7254-10",
        "termo": "Mecânico montador de motores de embarcações"
      },
      {
        "id": "7254-15",
        "termo": "Mecânico montador de motores de explosão e diesel"
      },
      {
        "id": "7254-20",
        "termo": "Mecânico montador de turboalimentadores"
      },
      {
        "id": "2251-05",
        "termo": "Médico acupunturista"
      },
      {
        "id": "2251-10",
        "termo": "Médico alergista e imunologista"
      },
      {
        "id": "2251-48",
        "termo": "Médico anatomopatologista"
      },
      {
        "id": "2251-51",
        "termo": "Médico anestesiologista"
      },
      {
        "id": "2251-15",
        "termo": "Médico angiologista"
      },
      {
        "id": "2251-54",
        "termo": "Médico antroposófico"
      },
      {
        "id": "2252-90",
        "termo": "Médico cancerologista cirurgíco"
      },
      {
        "id": "2251-22",
        "termo": "Médico cancerologista pediátrico"
      },
      {
        "id": "2251-20",
        "termo": "Médico cardiologista"
      },
      {
        "id": "2252-10",
        "termo": "Médico cirurgião cardiovascular"
      },
      {
        "id": "2252-95",
        "termo": "Médico cirurgião da mão"
      },
      {
        "id": "2252-15",
        "termo": "Médico cirurgião de cabeça e pescoço"
      },
      {
        "id": "2252-20",
        "termo": "Médico cirurgião do aparelho digestivo"
      },
      {
        "id": "2252-25",
        "termo": "Médico cirurgião geral"
      },
      {
        "id": "2252-30",
        "termo": "Médico cirurgião pediátrico"
      },
      {
        "id": "2252-40",
        "termo": "Médico cirurgião torácico"
      },
      {
        "id": "2253-05",
        "termo": "Médico citopatologista"
      },
      {
        "id": "2251-25",
        "termo": "Médico clínico"
      },
      {
        "id": "2252-80",
        "termo": "Médico coloproctologista"
      },
      {
        "id": "2251-42",
        "termo": "Médico da estratégia de saúde da família"
      },
      {
        "id": "2251-30",
        "termo": "Médico de família e comunidade"
      },
      {
        "id": "2251-35",
        "termo": "Médico dermatologista"
      },
      {
        "id": "2251-40",
        "termo": "Médico do trabalho"
      },
      {
        "id": "2252-03",
        "termo": "Médico em cirurgia vascular"
      },
      {
        "id": "2253-10",
        "termo": "Médico em endoscopia"
      },
      {
        "id": "2251-45",
        "termo": "Médico em medicina de tráfego"
      },
      {
        "id": "2251-50",
        "termo": "Médico em medicina intensiva"
      },
      {
        "id": "2253-20",
        "termo": "Médico em radiologia e diagnóstico por imagem"
      },
      {
        "id": "2251-55",
        "termo": "Médico endocrinologista e metabologista"
      },
      {
        "id": "2251-60",
        "termo": "Médico fisiatra"
      },
      {
        "id": "2251-65",
        "termo": "Médico gastroenterologista"
      },
      {
        "id": "2251-70",
        "termo": "Médico generalista"
      },
      {
        "id": "2251-75",
        "termo": "Médico geneticista"
      },
      {
        "id": "2251-80",
        "termo": "Médico geriatra"
      },
      {
        "id": "2252-50",
        "termo": "Médico ginecologista e obstetra"
      },
      {
        "id": "2251-85",
        "termo": "Médico hematologista"
      },
      {
        "id": "2253-40",
        "termo": "Médico hemoterapeuta"
      },
      {
        "id": "2253-45",
        "termo": "Médico hiperbarista"
      },
      {
        "id": "2251-95",
        "termo": "Médico homeopata"
      },
      {
        "id": "2251-06",
        "termo": "Médico legista"
      },
      {
        "id": "2252-55",
        "termo": "Médico mastologista"
      },
      {
        "id": "2251-09",
        "termo": "Médico nefrologista"
      },
      {
        "id": "2252-60",
        "termo": "Médico neurocirurgião"
      },
      {
        "id": "2253-50",
        "termo": "Médico neurofisiologista clínico"
      },
      {
        "id": "2251-12",
        "termo": "Médico neurologista"
      },
      {
        "id": "2251-18",
        "termo": "Médico nutrologista"
      },
      {
        "id": "2252-65",
        "termo": "Médico oftalmologista"
      },
      {
        "id": "2251-21",
        "termo": "Médico oncologista clínico"
      },
      {
        "id": "2252-70",
        "termo": "Médico ortopedista e traumatologista"
      },
      {
        "id": "2252-75",
        "termo": "Médico otorrinolaringologista"
      },
      {
        "id": "2253-25",
        "termo": "Médico patologista"
      },
      {
        "id": "2251-24",
        "termo": "Médico pediatra"
      },
      {
        "id": "2251-27",
        "termo": "Médico pneumologista"
      },
      {
        "id": "2251-33",
        "termo": "Médico psiquiatra"
      },
      {
        "id": "2253-30",
        "termo": "Médico radioterapeuta"
      },
      {
        "id": "2251-36",
        "termo": "Médico reumatologista"
      },
      {
        "id": "2251-39",
        "termo": "Médico sanitarista"
      },
      {
        "id": "2252-85",
        "termo": "Médico urologista"
      },
      {
        "id": "2233-05",
        "termo": "Médico veterinário"
      },
      {
        "id": "1130-15",
        "termo": "Membro de liderança quilombola"
      },
      {
        "id": "1112-25",
        "termo": "Membro superior do poder executivo"
      },
      {
        "id": "7817-05",
        "termo": "Mergulhador profissional (raso e profundo)"
      },
      {
        "id": "7201-05",
        "termo": "Mestre (afiador de ferramentas)"
      },
      {
        "id": "7102-05",
        "termo": "Mestre (construção civil)"
      },
      {
        "id": "7202-10",
        "termo": "Mestre (indústria de automotores e material de transportes)"
      },
      {
        "id": "8102-05",
        "termo": "Mestre (indústria de borracha e plástico)"
      },
      {
        "id": "8301-05",
        "termo": "Mestre (indústria de celulose; papel e papelão)"
      },
      {
        "id": "7701-05",
        "termo": "Mestre (indústria de madeira e mobiliário)"
      },
      {
        "id": "7202-15",
        "termo": "Mestre (indústria de máquinas e outros equipamentos mecânicos)"
      },
      {
        "id": "8101-05",
        "termo": "Mestre (indústria petroquímica e carboquímica)"
      },
      {
        "id": "7601-25",
        "termo": "Mestre (indústria têxtil e de confecções)"
      },
      {
        "id": "7701-10",
        "termo": "Mestre carpinteiro"
      },
      {
        "id": "8201-10",
        "termo": "Mestre de aciaria"
      },
      {
        "id": "8201-15",
        "termo": "Mestre de alto-forno"
      },
      {
        "id": "3412-10",
        "termo": "Mestre de cabotagem"
      },
      {
        "id": "7201-10",
        "termo": "Mestre de caldeiraria"
      },
      {
        "id": "3763-30",
        "termo": "Mestre de cerimonias"
      },
      {
        "id": "7202-20",
        "termo": "Mestre de construção de fornos"
      },
      {
        "id": "7201-15",
        "termo": "Mestre de ferramentaria"
      },
      {
        "id": "7201-20",
        "termo": "Mestre de forjaria"
      },
      {
        "id": "8201-20",
        "termo": "Mestre de forno elétrico"
      },
      {
        "id": "7201-25",
        "termo": "Mestre de fundição"
      },
      {
        "id": "7201-30",
        "termo": "Mestre de galvanoplastia"
      },
      {
        "id": "8201-25",
        "termo": "Mestre de laminação"
      },
      {
        "id": "7102-10",
        "termo": "Mestre de linhas (ferrovias)"
      },
      {
        "id": "7201-35",
        "termo": "Mestre de pintura (tratamento de superfícies)"
      },
      {
        "id": "8103-05",
        "termo": "Mestre de produção farmacêutica"
      },
      {
        "id": "8101-10",
        "termo": "Mestre de produção química"
      },
      {
        "id": "8201-05",
        "termo": "Mestre de siderurgia"
      },
      {
        "id": "7201-40",
        "termo": "Mestre de soldagem"
      },
      {
        "id": "7201-45",
        "termo": "Mestre de trefilação de metais"
      },
      {
        "id": "7201-50",
        "termo": "Mestre de usinagem"
      },
      {
        "id": "3412-15",
        "termo": "Mestre fluvial"
      },
      {
        "id": "7201-55",
        "termo": "Mestre serralheiro"
      },
      {
        "id": "7232-25",
        "termo": "Metalizador (banho quente)"
      },
      {
        "id": "7232-20",
        "termo": "Metalizador a pistola"
      },
      {
        "id": "2133-15",
        "termo": "Meteorologista"
      },
      {
        "id": "3523-05",
        "termo": "Metrologista"
      },
      {
        "id": "3741-40",
        "termo": "Microfonista"
      },
      {
        "id": "7111-30",
        "termo": "Mineiro"
      },
      {
        "id": "6134-15",
        "termo": "Minhocultor"
      },
      {
        "id": "2631-05",
        "termo": "Ministro de culto religioso"
      },
      {
        "id": "1112-15",
        "termo": "Ministro de estado"
      },
      {
        "id": "1113-20",
        "termo": "Ministro do superior tribunal do trabalho"
      },
      {
        "id": "1113-15",
        "termo": "Ministro do superior tribunal militar"
      },
      {
        "id": "1113-10",
        "termo": "Ministro do superior tribunal de justiça"
      },
      {
        "id": "1113-05",
        "termo": "Ministro do supremo tribunal federal"
      },
      {
        "id": "2631-10",
        "termo": "Missionário"
      },
      {
        "id": "8416-05",
        "termo": "Misturador de café"
      },
      {
        "id": "8416-30",
        "termo": "Misturador de chá ou mate"
      },
      {
        "id": "7827-15",
        "termo": "Moço de convés (marítimo e fluviário)"
      },
      {
        "id": "7827-20",
        "termo": "Moço de máquinas (marítimo e fluviário)"
      },
      {
        "id": "7711-10",
        "termo": "Modelador de madeira"
      },
      {
        "id": "7211-15",
        "termo": "Modelador de metais (fundição)"
      },
      {
        "id": "3188-15",
        "termo": "Modelista de calçados"
      },
      {
        "id": "3188-10",
        "termo": "Modelista de roupas"
      },
      {
        "id": "3764-05",
        "termo": "Modelo artístico"
      },
      {
        "id": "3764-10",
        "termo": "Modelo de modas"
      },
      {
        "id": "3764-15",
        "termo": "Modelo publicitário"
      },
      {
        "id": "8416-15",
        "termo": "Moedor de café"
      },
      {
        "id": "8412-05",
        "termo": "Moedor de sal"
      },
      {
        "id": "7521-10",
        "termo": "Moldador (vidros)"
      },
      {
        "id": "8232-30",
        "termo": "Moldador de abrasivos na fabricação de cerâmica; vidro e porcelana"
      },
      {
        "id": "8117-50",
        "termo": "Moldador de borracha por compressão"
      },
      {
        "id": "7153-10",
        "termo": "Moldador de corpos de prova em usinas de concreto"
      },
      {
        "id": "8117-60",
        "termo": "Moldador de plástico por compressão"
      },
      {
        "id": "8117-70",
        "termo": "Moldador de plástico por injeção"
      },
      {
        "id": "7223-15",
        "termo": "Moldador; a mão"
      },
      {
        "id": "8111-05",
        "termo": "Moleiro (tratamentos químicos e afins)"
      },
      {
        "id": "8411-05",
        "termo": "Moleiro de cereais (exceto arroz)"
      },
      {
        "id": "8411-10",
        "termo": "Moleiro de especiarias"
      },
      {
        "id": "7121-05",
        "termo": "Moleiro de minérios"
      },
      {
        "id": "5153-15",
        "termo": "Monitor de dependente químico"
      },
      {
        "id": "9513-20",
        "termo": "Monitor de sistemas eletrônicos de segurança externo"
      },
      {
        "id": "9513-15",
        "termo": "Monitor de sistemas eletrônicos de segurança interno"
      },
      {
        "id": "4222-15",
        "termo": "Monitor de teleatendimento"
      },
      {
        "id": "3341-15",
        "termo": "Monitor de transporte escolar"
      },
      {
        "id": "7686-15",
        "termo": "Monotipista"
      },
      {
        "id": "7155-45",
        "termo": "Montador de andaimes (edificações)"
      },
      {
        "id": "7653-15",
        "termo": "Montador de artefatos de couro (exceto roupas e calçados)"
      },
      {
        "id": "9193-15",
        "termo": "Montador de bicicletas"
      },
      {
        "id": "7642-10",
        "termo": "Montador de calçados"
      },
      {
        "id": "7253-05",
        "termo": "Montador de equipamento de levantamento"
      },
      {
        "id": "7311-35",
        "termo": "Montador de equipamentos elétricos"
      },
      {
        "id": "7311-20",
        "termo": "Montador de equipamentos elétricos (aparelhos eletrodomésticos)"
      },
      {
        "id": "7311-25",
        "termo": "Montador de equipamentos elétricos (centrais elétricas)"
      },
      {
        "id": "7311-15",
        "termo": "Montador de equipamentos elétricos (instrumentos de medição)"
      },
      {
        "id": "7311-30",
        "termo": "Montador de equipamentos elétricos (motores e dínamos)"
      },
      {
        "id": "7311-50",
        "termo": "Montador de equipamentos eletrônicos"
      },
      {
        "id": "7311-05",
        "termo": "Montador de equipamentos eletrônicos (aparelhos médicos)"
      },
      {
        "id": "7311-10",
        "termo": "Montador de equipamentos eletrônicos (computadores e equipamentos auxiliares)"
      },
      {
        "id": "7311-40",
        "termo": "Montador de equipamentos eletrônicos (instalações de sinalização)"
      },
      {
        "id": "7311-45",
        "termo": "Montador de equipamentos eletrônicos (máquinas industriais)"
      },
      {
        "id": "7256-05",
        "termo": "Montador de estruturas de aeronaves"
      },
      {
        "id": "7242-05",
        "termo": "Montador de estruturas metálicas"
      },
      {
        "id": "7242-10",
        "termo": "Montador de estruturas metálicas de embarcações"
      },
      {
        "id": "3744-20",
        "termo": "Montador de filmes"
      },
      {
        "id": "7661-25",
        "termo": "Montador de fotolito (analógico e digital)"
      },
      {
        "id": "7411-10",
        "termo": "Montador de instrumentos de óptica"
      },
      {
        "id": "7411-15",
        "termo": "Montador de instrumentos de precisão"
      },
      {
        "id": "7252-05",
        "termo": "Montador de máquinas"
      },
      {
        "id": "7253-10",
        "termo": "Montador de máquinas agrícolas"
      },
      {
        "id": "7253-15",
        "termo": "Montador de máquinas de minas e pedreiras"
      },
      {
        "id": "7253-20",
        "termo": "Montador de máquinas de terraplenagem"
      },
      {
        "id": "7252-10",
        "termo": "Montador de máquinas gráficas"
      },
      {
        "id": "7252-15",
        "termo": "Montador de máquinas operatrizes para madeira"
      },
      {
        "id": "7252-20",
        "termo": "Montador de máquinas têxteis"
      },
      {
        "id": "7251-05",
        "termo": "Montador de máquinas; motores e acessórios (montagem em série)"
      },
      {
        "id": "7252-25",
        "termo": "Montador de máquinas-ferramentas (usinagem de metais)"
      },
      {
        "id": "7741-05",
        "termo": "Montador de móveis e artefatos de madeira"
      },
      {
        "id": "7256-10",
        "termo": "Montador de sistemas de combustível de aeronaves"
      },
      {
        "id": "7255-05",
        "termo": "Montador de veículos (linha de montagem)"
      },
      {
        "id": "9913-10",
        "termo": "Montador de veículos (reparação)"
      },
      {
        "id": "5131-10",
        "termo": "Mordomo de hotelaria"
      },
      {
        "id": "5131-05",
        "termo": "Mordomo de residência"
      },
      {
        "id": "7165-30",
        "termo": "Mosaísta"
      },
      {
        "id": "5191-10",
        "termo": "Motofretista"
      },
      {
        "id": "7825-10",
        "termo": "Motorista de caminhão (rotas regionais e internacionais)"
      },
      {
        "id": "7823-05",
        "termo": "Motorista de carro de passeio"
      },
      {
        "id": "7823-10",
        "termo": "Motorista de furgão ou veículo similar"
      },
      {
        "id": "7824-05",
        "termo": "Motorista de ônibus rodoviário"
      },
      {
        "id": "7824-10",
        "termo": "Motorista de ônibus urbano"
      },
      {
        "id": "7823-15",
        "termo": "Motorista de táxi"
      },
      {
        "id": "7824-15",
        "termo": "Motorista de trólebus"
      },
      {
        "id": "7825-15",
        "termo": "Motorista operacional de guincho"
      },
      {
        "id": "7826-20",
        "termo": "Motorneiro"
      },
      {
        "id": "5191-15",
        "termo": "Mototaxista"
      },
      {
        "id": "2613-10",
        "termo": "Museólogo"
      },
      {
        "id": "2626-10",
        "termo": "Músico arranjador"
      },
      {
        "id": "2627-05",
        "termo": "Músico intérprete cantor"
      },
      {
        "id": "2627-10",
        "termo": "Músico intérprete instrumentista"
      },
      {
        "id": "2626-15",
        "termo": "Músico regente"
      },
      {
        "id": "2626-20",
        "termo": "Musicólogo"
      },
      {
        "id": "2263-05",
        "termo": "Musicoterapeuta"
      },
      {
        "id": "2617-25",
        "termo": "Narrador em programas de rádio e televisão"
      },
      {
        "id": "2263-20",
        "termo": "Naturólogo"
      },
      {
        "id": "2515-45",
        "termo": "Neuropsicólogo"
      },
      {
        "id": "7231-10",
        "termo": "Normalizador de metais e de compósitos"
      },
      {
        "id": "2237-10",
        "termo": "Nutricionista"
      },
      {
        "id": "2134-40",
        "termo": "Oceanógrafo"
      },
      {
        "id": "0102-05",
        "termo": "Oficial da aeronáutica"
      },
      {
        "id": "0102-15",
        "termo": "Oficial da marinha"
      },
      {
        "id": "2429-05",
        "termo": "Oficial de inteligência"
      },
      {
        "id": "3514-25",
        "termo": "Oficial de justiça"
      },
      {
        "id": "2151-40",
        "termo": "Oficial de quarto de navegação da marinha mercante"
      },
      {
        "id": "2413-05",
        "termo": "Oficial de registro de contratos marítimos"
      },
      {
        "id": "0102-10",
        "termo": "Oficial do exército"
      },
      {
        "id": "2413-10",
        "termo": "Oficial do registro civil de pessoas jurídicas"
      },
      {
        "id": "2413-15",
        "termo": "Oficial do registro civil de pessoas naturais"
      },
      {
        "id": "2413-20",
        "termo": "Oficial do registro de distribuições"
      },
      {
        "id": "2413-25",
        "termo": "Oficial do registro de imóveis"
      },
      {
        "id": "2413-30",
        "termo": "Oficial do registro de títulos e documentos"
      },
      {
        "id": "0101-05",
        "termo": "Oficial general da aeronáutica"
      },
      {
        "id": "0101-15",
        "termo": "Oficial general da marinha"
      },
      {
        "id": "0101-10",
        "termo": "Oficial general do exército"
      },
      {
        "id": "2152-05",
        "termo": "Oficial superior de máquinas da marinha mercante"
      },
      {
        "id": "2429-10",
        "termo": "Oficial técnico de inteligência"
      },
      {
        "id": "8281-05",
        "termo": "Oleiro (fabricação de telhas)"
      },
      {
        "id": "8281-10",
        "termo": "Oleiro (fabricação de tijolos)"
      },
      {
        "id": "8621-60",
        "termo": "Operador de abastecimento de combustível de aeronave"
      },
      {
        "id": "7612-05",
        "termo": "Operador de abertura (fiação)"
      },
      {
        "id": "7663-15",
        "termo": "Operador de acabamento (indústria gráfica)"
      },
      {
        "id": "7222-15",
        "termo": "Operador de acabamento de peças fundidas"
      },
      {
        "id": "8212-30",
        "termo": "Operador de aciaria (basculamento de convertedor)"
      },
      {
        "id": "8212-35",
        "termo": "Operador de aciaria (dessulfuração de gusa)"
      },
      {
        "id": "8212-40",
        "termo": "Operador de aciaria (recebimento de gusa)"
      },
      {
        "id": "7121-10",
        "termo": "Operador de aparelho de flotação"
      },
      {
        "id": "7121-15",
        "termo": "Operador de aparelho de precipitação (minas de ouro ou prata)"
      },
      {
        "id": "8114-20",
        "termo": "Operador de aparelho de reação e conversão (produtos químicos; exceto petróleo)"
      },
      {
        "id": "8212-45",
        "termo": "Operador de área de corrida"
      },
      {
        "id": "3425-35",
        "termo": "Operador de atendimento aeroviário"
      },
      {
        "id": "8231-35",
        "termo": "Operador de atomizador"
      },
      {
        "id": "3731-05",
        "termo": "Operador de áudio de continuidade (rádio)"
      },
      {
        "id": "8232-35",
        "termo": "Operador de banho metálico de vidro por flutuação"
      },
      {
        "id": "7151-05",
        "termo": "Operador de bate-estacas"
      },
      {
        "id": "8621-15",
        "termo": "Operador de bateria de gás de hulha"
      },
      {
        "id": "7154-05",
        "termo": "Operador de betoneira"
      },
      {
        "id": "7612-10",
        "termo": "Operador de binadeira"
      },
      {
        "id": "7612-15",
        "termo": "Operador de bobinadeira"
      },
      {
        "id": "7154-10",
        "termo": "Operador de bomba de concreto"
      },
      {
        "id": "8311-10",
        "termo": "Operador de branqueador de pasta para fabricação de papel"
      },
      {
        "id": "8111-15",
        "termo": "Operador de britadeira (tratamentos químicos e afins)"
      },
      {
        "id": "8116-05",
        "termo": "Operador de britador de coque"
      },
      {
        "id": "7121-20",
        "termo": "Operador de britador de mandíbulas"
      },
      {
        "id": "8214-25",
        "termo": "Operador de cabine de laminação (fio-máquina)"
      },
      {
        "id": "8131-10",
        "termo": "Operador de calandra (química; petroquímica e afins)"
      },
      {
        "id": "7614-15",
        "termo": "Operador de calandras (tecidos)"
      },
      {
        "id": "8112-05",
        "termo": "Operador de calcinação (tratamento químico e afins)"
      },
      {
        "id": "8621-20",
        "termo": "Operador de caldeira"
      },
      {
        "id": "8414-56",
        "termo": "Operador de câmaras frias"
      },
      {
        "id": "3721-15",
        "termo": "Operador de câmera de televisão"
      },
      {
        "id": "7112-05",
        "termo": "Operador de caminhão (minas e pedreiras)"
      },
      {
        "id": "7612-20",
        "termo": "Operador de cardas"
      },
      {
        "id": "7112-10",
        "termo": "Operador de carregadeira"
      },
      {
        "id": "9922-15",
        "termo": "Operador de ceifadeira na conservação de vias permanentes"
      },
      {
        "id": "7154-15",
        "termo": "Operador de central de concreto"
      },
      {
        "id": "3731-10",
        "termo": "Operador de central de rádio"
      },
      {
        "id": "8611-05",
        "termo": "Operador de central hidrelétrica"
      },
      {
        "id": "8611-15",
        "termo": "Operador de central termoelétrica"
      },
      {
        "id": "8113-05",
        "termo": "Operador de centrifugadora (tratamentos químicos e afins)"
      },
      {
        "id": "8211-05",
        "termo": "Operador de centro de controle"
      },
      {
        "id": "3424-10",
        "termo": "Operador de centro de controle (ferrovia e metrô)"
      },
      {
        "id": "7214-05",
        "termo": "Operador de centro de usinagem com comando numérico"
      },
      {
        "id": "7614-20",
        "termo": "Operador de chamuscadeira de tecidos"
      },
      {
        "id": "4132-30",
        "termo": "Operador de cobrança bancária"
      },
      {
        "id": "6420-05",
        "termo": "Operador de colhedor florestal"
      },
      {
        "id": "6410-05",
        "termo": "Operador de colheitadeira"
      },
      {
        "id": "7151-10",
        "termo": "Operador de compactadora de solos"
      },
      {
        "id": "8621-30",
        "termo": "Operador de compressor de ar"
      },
      {
        "id": "3172-05",
        "termo": "Operador de computador (inclusive microcomputador)"
      },
      {
        "id": "8111-20",
        "termo": "Operador de concentração"
      },
      {
        "id": "7612-25",
        "termo": "Operador de conicaleira"
      },
      {
        "id": "8321-10",
        "termo": "Operador de cortadeira de papel"
      },
      {
        "id": "8413-05",
        "termo": "Operador de cristalização na refinação de açucar"
      },
      {
        "id": "7733-05",
        "termo": "Operador de desempenadeira na usinagem convencional de madeira"
      },
      {
        "id": "8212-50",
        "termo": "Operador de desgaseificação"
      },
      {
        "id": "8116-15",
        "termo": "Operador de destilação e subprodutos de coque"
      },
      {
        "id": "8311-15",
        "termo": "Operador de digestor de pasta para fabricação de papel"
      },
      {
        "id": "7822-10",
        "termo": "Operador de docagem"
      },
      {
        "id": "7822-20",
        "termo": "Operador de empilhadeira"
      },
      {
        "id": "8116-20",
        "termo": "Operador de enfornamento e desenfornamento de coque"
      },
      {
        "id": "7613-48",
        "termo": "Operador de engomadeira de urdume"
      },
      {
        "id": "7733-10",
        "termo": "Operador de entalhadeira (usinagem de madeira)"
      },
      {
        "id": "8114-25",
        "termo": "Operador de equipamento de destilação de álcool"
      },
      {
        "id": "7233-05",
        "termo": "Operador de equipamento de secagem de pintura"
      },
      {
        "id": "7223-25",
        "termo": "Operador de equipamentos de preparação de areia"
      },
      {
        "id": "8413-10",
        "termo": "Operador de equipamentos de refinação de açúcar (processo contínuo)"
      },
      {
        "id": "7151-15",
        "termo": "Operador de escavadeira"
      },
      {
        "id": "8214-30",
        "termo": "Operador de escória e sucata"
      },
      {
        "id": "7524-20",
        "termo": "Operador de esmaltadeira"
      },
      {
        "id": "7524-25",
        "termo": "Operador de espelhamento"
      },
      {
        "id": "7121-25",
        "termo": "Operador de espessador"
      },
      {
        "id": "7613-51",
        "termo": "Operador de espuladeira"
      },
      {
        "id": "8621-40",
        "termo": "Operador de estação de bombeamento"
      },
      {
        "id": "8622-05",
        "termo": "Operador de estação de captação; tratamento e distribuição de água"
      },
      {
        "id": "8623-05",
        "termo": "Operador de estação de tratamento de água e efluentes"
      },
      {
        "id": "8114-30",
        "termo": "Operador de evaporador na destilação"
      },
      {
        "id": "8116-25",
        "termo": "Operador de exaustor (coqueria)"
      },
      {
        "id": "8113-10",
        "termo": "Operador de exploração de petróleo"
      },
      {
        "id": "3731-15",
        "termo": "Operador de externa (rádio)"
      },
      {
        "id": "8416-20",
        "termo": "Operador de extração de café solúvel"
      },
      {
        "id": "8131-15",
        "termo": "Operador de extrusora (química; petroquímica e afins)"
      },
      {
        "id": "7612-30",
        "termo": "Operador de filatório"
      },
      {
        "id": "8113-15",
        "termo": "Operador de filtro de secagem (mineração)"
      },
      {
        "id": "8113-20",
        "termo": "Operador de filtro de tambor rotativo (tratamentos químicos e afins)"
      },
      {
        "id": "8113-25",
        "termo": "Operador de filtro-esteira (mineração)"
      },
      {
        "id": "8113-30",
        "termo": "Operador de filtro-prensa (tratamentos químicos e afins)"
      },
      {
        "id": "8113-35",
        "termo": "Operador de filtros de parafina (tratamentos químicos e afins)"
      },
      {
        "id": "8418-05",
        "termo": "Operador de forno (fabricação de pães; biscoitos e similares)"
      },
      {
        "id": "5166-05",
        "termo": "Operador de forno (serviços funerários)"
      },
      {
        "id": "7231-20",
        "termo": "Operador de forno de tratamento térmico de metais"
      },
      {
        "id": "7733-15",
        "termo": "Operador de fresadora (usinagem de madeira)"
      },
      {
        "id": "7214-10",
        "termo": "Operador de fresadora com comando numérico"
      },
      {
        "id": "3731-20",
        "termo": "Operador de gravação de rádio"
      },
      {
        "id": "7663-20",
        "termo": "Operador de guilhotina (corte de papel)"
      },
      {
        "id": "7821-10",
        "termo": "Operador de guindaste (fixo)"
      },
      {
        "id": "7821-15",
        "termo": "Operador de guindaste móvel"
      },
      {
        "id": "7614-25",
        "termo": "Operador de impermeabilizador de tecidos"
      },
      {
        "id": "6233-15",
        "termo": "Operador de incubadora"
      },
      {
        "id": "3912-15",
        "termo": "Operador de inspeção de qualidade"
      },
      {
        "id": "8625-15",
        "termo": "Operador de instalação de ar-condicionado"
      },
      {
        "id": "8625-05",
        "termo": "Operador de instalação de refrigeração"
      },
      {
        "id": "8214-35",
        "termo": "Operador de jato abrasivo"
      },
      {
        "id": "7121-30",
        "termo": "Operador de jig (minas)"
      },
      {
        "id": "7246-05",
        "termo": "Operador de laços de cabos de aço"
      },
      {
        "id": "7612-35",
        "termo": "Operador de laminadeira e reunideira"
      },
      {
        "id": "8213-05",
        "termo": "Operador de laminador"
      },
      {
        "id": "8213-15",
        "termo": "Operador de laminador de barras a quente"
      },
      {
        "id": "8213-20",
        "termo": "Operador de laminador de metais não-ferrosos"
      },
      {
        "id": "8213-25",
        "termo": "Operador de laminador de tubos"
      },
      {
        "id": "8311-20",
        "termo": "Operador de lavagem e depuração de pasta para fabricação de papel"
      },
      {
        "id": "7311-75",
        "termo": "Operador de linha de montagem (aparelhos elétricos)"
      },
      {
        "id": "7311-80",
        "termo": "Operador de linha de montagem (aparelhos eletrônicos)"
      },
      {
        "id": "7733-20",
        "termo": "Operador de lixadeira (usinagem de madeira)"
      },
      {
        "id": "7612-40",
        "termo": "Operador de maçaroqueira"
      },
      {
        "id": "8421-25",
        "termo": "Operador de máquina (fabricação de cigarros)"
      },
      {
        "id": "7734-05",
        "termo": "Operador de máquina bordatriz"
      },
      {
        "id": "7222-20",
        "termo": "Operador de máquina centrifugadora de fundição"
      },
      {
        "id": "4151-30",
        "termo": "Operador de máquina copiadora (exceto operador de gráfica rápida)"
      },
      {
        "id": "7112-15",
        "termo": "Operador de máquina cortadora (minas e pedreiras)"
      },
      {
        "id": "7151-20",
        "termo": "Operador de máquina de abrir valas"
      },
      {
        "id": "7613-54",
        "termo": "Operador de máquina de cordoalha"
      },
      {
        "id": "8331-20",
        "termo": "Operador de máquina de cortar e dobrar papelão"
      },
      {
        "id": "7734-10",
        "termo": "Operador de máquina de cortina d´água (produção de móveis)"
      },
      {
        "id": "7633-20",
        "termo": "Operador de máquina de costura de acabamento"
      },
      {
        "id": "7245-10",
        "termo": "Operador de máquina de dobrar chapas"
      },
      {
        "id": "7212-05",
        "termo": "Operador de máquina de eletroerosão"
      },
      {
        "id": "7841-20",
        "termo": "Operador de máquina de envasar líquidos"
      },
      {
        "id": "7841-15",
        "termo": "Operador de máquina de etiquetar"
      },
      {
        "id": "7112-20",
        "termo": "Operador de máquina de extração contínua (minas de carvão)"
      },
      {
        "id": "8118-15",
        "termo": "Operador de máquina de fabricação de cosméticos"
      },
      {
        "id": "8422-10",
        "termo": "Operador de máquina de fabricar charutos e cigarrilhas"
      },
      {
        "id": "8321-15",
        "termo": "Operador de máquina de fabricar papel (fase úmida)"
      },
      {
        "id": "8321-20",
        "termo": "Operador de máquina de fabricar papel (fase seca)"
      },
      {
        "id": "8321-25",
        "termo": "Operador de máquina de fabricar papel e papelão"
      },
      {
        "id": "7222-25",
        "termo": "Operador de máquina de fundir sob pressão"
      },
      {
        "id": "7614-30",
        "termo": "Operador de máquina de lavar fios e tecidos"
      },
      {
        "id": "7223-30",
        "termo": "Operador de máquina de moldar automatizada"
      },
      {
        "id": "8118-05",
        "termo": "Operador de máquina de produtos farmacêuticos"
      },
      {
        "id": "8311-25",
        "termo": "Operador de máquina de secar celulose"
      },
      {
        "id": "8211-10",
        "termo": "Operador de máquina de sinterizar"
      },
      {
        "id": "8232-40",
        "termo": "Operador de máquina de soprar vidro"
      },
      {
        "id": "7733-25",
        "termo": "Operador de máquina de usinagem madeira; em geral"
      },
      {
        "id": "7214-20",
        "termo": "Operador de máquina eletroerosão; à fio; com comando numérico"
      },
      {
        "id": "8232-45",
        "termo": "Operador de máquina extrusora de varetas e tubos de vidro"
      },
      {
        "id": "7732-05",
        "termo": "Operador de máquina intercaladora e placas (compensados)"
      },
      {
        "id": "8111-10",
        "termo": "Operador de máquina misturadeira (tratamentos químicos e afins)"
      },
      {
        "id": "7112-25",
        "termo": "Operador de máquina perfuradora (minas e pedreiras)"
      },
      {
        "id": "7112-30",
        "termo": "Operador de máquina perfuratriz"
      },
      {
        "id": "7232-30",
        "termo": "Operador de máquina recobridora de arame"
      },
      {
        "id": "7821-20",
        "termo": "Operador de máquina rodoferroviária"
      },
      {
        "id": "6410-10",
        "termo": "Operador de máquinas de beneficiamento de produtos agrícolas"
      },
      {
        "id": "7151-25",
        "termo": "Operador de máquinas de construção civil e mineração"
      },
      {
        "id": "8418-15",
        "termo": "Operador de máquinas de fabricação de chocolates e achocolatados"
      },
      {
        "id": "8418-10",
        "termo": "Operador de máquinas de fabricação de doces; salgados e massas alimentícias"
      },
      {
        "id": "7735-10",
        "termo": "Operador de máquinas de usinar madeira (cnc)"
      },
      {
        "id": "7623-25",
        "termo": "Operador de máquinas do acabamento de couros e peles"
      },
      {
        "id": "9911-15",
        "termo": "Operador de máquinas especiais em conservação de via permanente (trilhos)"
      },
      {
        "id": "8621-50",
        "termo": "Operador de máquinas fixas; em geral"
      },
      {
        "id": "6420-10",
        "termo": "Operador de máquinas florestais estáticas"
      },
      {
        "id": "7212-10",
        "termo": "Operador de máquinas operatrizes"
      },
      {
        "id": "7170-10",
        "termo": "Operador de martelete"
      },
      {
        "id": "4121-15",
        "termo": "Operador de mensagens de telecomunicações (correios)"
      },
      {
        "id": "8413-15",
        "termo": "Operador de moenda na fabricação de açúcar"
      },
      {
        "id": "7733-30",
        "termo": "Operador de molduradora (usinagem de madeira)"
      },
      {
        "id": "7821-25",
        "termo": "Operador de monta-cargas (construção civil)"
      },
      {
        "id": "8213-30",
        "termo": "Operador de montagem de cilindros e mancais"
      },
      {
        "id": "7151-30",
        "termo": "Operador de motoniveladora"
      },
      {
        "id": "7112-35",
        "termo": "Operador de motoniveladora (extração de minerais sólidos)"
      },
      {
        "id": "6321-20",
        "termo": "Operador de motosserra"
      },
      {
        "id": "2532-25",
        "termo": "Operador de negócios"
      },
      {
        "id": "7612-45",
        "termo": "Operador de open-end"
      },
      {
        "id": "7151-35",
        "termo": "Operador de pá carregadeira"
      },
      {
        "id": "8116-30",
        "termo": "Operador de painel de controle"
      },
      {
        "id": "8115-05",
        "termo": "Operador de painel de controle (refinação de petróleo)"
      },
      {
        "id": "7612-50",
        "termo": "Operador de passador (fiação)"
      },
      {
        "id": "7151-40",
        "termo": "Operador de pavimentadora (asfalto; concreto e materiais similares)"
      },
      {
        "id": "7121-35",
        "termo": "Operador de peneiras hidráulicas"
      },
      {
        "id": "7612-55",
        "termo": "Operador de penteadeira"
      },
      {
        "id": "7733-35",
        "termo": "Operador de plaina desengrossadeira"
      },
      {
        "id": "7821-30",
        "termo": "Operador de ponte rolante"
      },
      {
        "id": "7821-35",
        "termo": "Operador de pórtico rolante"
      },
      {
        "id": "7734-20",
        "termo": "Operador de prensa de alta freqüência na usinagem de madeira"
      },
      {
        "id": "8331-25",
        "termo": "Operador de prensa de embutir papelão"
      },
      {
        "id": "7841-25",
        "termo": "Operador de prensa de enfardamento"
      },
      {
        "id": "5192-15",
        "termo": "Operador de prensa de material reciclável"
      },
      {
        "id": "8232-50",
        "termo": "Operador de prensa de moldar vidro"
      },
      {
        "id": "8414-60",
        "termo": "Operador de preparação de grãos vegetais (óleos e gorduras)"
      },
      {
        "id": "8116-35",
        "termo": "Operador de preservação e controle térmico"
      },
      {
        "id": "8131-20",
        "termo": "Operador de processo (química; petroquímica e afins)"
      },
      {
        "id": "8411-15",
        "termo": "Operador de processo de moagem"
      },
      {
        "id": "7661-50",
        "termo": "Operador de processo de tratamento de imagem"
      },
      {
        "id": "8110-05",
        "termo": "Operador de processos químicos e petroquímicos"
      },
      {
        "id": "8131-25",
        "termo": "Operador de produção (química; petroquímica e afins)"
      },
      {
        "id": "3743-05",
        "termo": "Operador de projetor cinematográfico"
      },
      {
        "id": "8611-10",
        "termo": "Operador de quadro de distribuição de energia elétrica"
      },
      {
        "id": "4222-20",
        "termo": "Operador de rádio-chamada"
      },
      {
        "id": "7614-35",
        "termo": "Operador de rameuse"
      },
      {
        "id": "8116-40",
        "termo": "Operador de reator de coque de petróleo"
      },
      {
        "id": "8611-20",
        "termo": "Operador de reator nuclear"
      },
      {
        "id": "8321-35",
        "termo": "Operador de rebobinadeira na fabricação de papel e papelão"
      },
      {
        "id": "3722-05",
        "termo": "Operador de rede de teleprocessamento"
      },
      {
        "id": "8116-45",
        "termo": "Operador de refrigeração (coqueria)"
      },
      {
        "id": "8625-10",
        "termo": "Operador de refrigeração com amônia"
      },
      {
        "id": "7214-25",
        "termo": "Operador de retificadora com comando numérico"
      },
      {
        "id": "7612-60",
        "termo": "Operador de retorcedeira"
      },
      {
        "id": "7114-10",
        "termo": "Operador de salina (sal marinho)"
      },
      {
        "id": "7112-40",
        "termo": "Operador de schutthecar"
      },
      {
        "id": "7733-40",
        "termo": "Operador de serras (usinagem de madeira)"
      },
      {
        "id": "7731-10",
        "termo": "Operador de serras no desdobramento de madeira"
      },
      {
        "id": "8116-50",
        "termo": "Operador de sistema de reversão (coqueria)"
      },
      {
        "id": "7661-45",
        "termo": "Operador de sistemas de prova (analógico e digital)"
      },
      {
        "id": "7113-05",
        "termo": "Operador de sonda de percussão"
      },
      {
        "id": "7113-10",
        "termo": "Operador de sonda rotativa"
      },
      {
        "id": "8612-05",
        "termo": "Operador de subestação"
      },
      {
        "id": "7821-40",
        "termo": "Operador de talha elétrica"
      },
      {
        "id": "7826-30",
        "termo": "Operador de teleférico (passageiros)"
      },
      {
        "id": "4223-05",
        "termo": "Operador de telemarketing ativo"
      },
      {
        "id": "4223-10",
        "termo": "Operador de telemarketing ativo e receptivo"
      },
      {
        "id": "4223-15",
        "termo": "Operador de telemarketing receptivo"
      },
      {
        "id": "4223-20",
        "termo": "Operador de telemarketing técnico"
      },
      {
        "id": "7255-10",
        "termo": "Operador de time de montagem"
      },
      {
        "id": "7733-45",
        "termo": "Operador de torno automático (usinagem de madeira)"
      },
      {
        "id": "7214-30",
        "termo": "Operador de torno com comando numérico"
      },
      {
        "id": "8115-10",
        "termo": "Operador de transferência e estocagem - na refinação do petróleo"
      },
      {
        "id": "3731-25",
        "termo": "Operador de transmissor de rádio"
      },
      {
        "id": "3421-10",
        "termo": "Operador de transporte multimodal"
      },
      {
        "id": "8413-20",
        "termo": "Operador de tratamento de calda na refinação de açúcar"
      },
      {
        "id": "8112-15",
        "termo": "Operador de tratamento químico de materiais radioativos"
      },
      {
        "id": "7112-45",
        "termo": "Operador de trator (minas e pedreiras)"
      },
      {
        "id": "7151-45",
        "termo": "Operador de trator de lâmina"
      },
      {
        "id": "6420-15",
        "termo": "Operador de trator florestal"
      },
      {
        "id": "7826-05",
        "termo": "Operador de trem de metrô"
      },
      {
        "id": "4152-10",
        "termo": "Operador de triagem e transbordo"
      },
      {
        "id": "7733-50",
        "termo": "Operador de tupia (usinagem de madeira)"
      },
      {
        "id": "3548-10",
        "termo": "Operador de turismo"
      },
      {
        "id": "7613-57",
        "termo": "Operador de urdideira"
      },
      {
        "id": "7212-20",
        "termo": "Operador de usinagem convencional por abrasão"
      },
      {
        "id": "7222-30",
        "termo": "Operador de vazamento (lingotamento)"
      },
      {
        "id": "7813-05",
        "termo": "Operador de veículos subaquáticos controlados remotamente"
      },
      {
        "id": "7232-35",
        "termo": "Operador de zincagem (processo eletrolítico)"
      },
      {
        "id": "9541-25",
        "termo": "Operador eletromecânico"
      },
      {
        "id": "7610-05",
        "termo": "Operador polivalente da indústria têxtil"
      },
      {
        "id": "3743-10",
        "termo": "Operador-mantenedor de projetor cinematográfico"
      },
      {
        "id": "3548-20",
        "termo": "Organizador de evento"
      },
      {
        "id": "2394-10",
        "termo": "Orientador educacional"
      },
      {
        "id": "2239-10",
        "termo": "Ortoptista"
      },
      {
        "id": "2261-10",
        "termo": "Osteopata"
      },
      {
        "id": "7511-25",
        "termo": "Ourives"
      },
      {
        "id": "1423-40",
        "termo": "Ouvidor"
      },
      {
        "id": "7243-10",
        "termo": "Oxicortador a mão e a máquina"
      },
      {
        "id": "7232-40",
        "termo": "Oxidador"
      },
      {
        "id": "8483-05",
        "termo": "Padeiro"
      },
      {
        "id": "7686-20",
        "termo": "Paginador"
      },
      {
        "id": "7623-35",
        "termo": "Palecionador de couros e peles"
      },
      {
        "id": "2134-30",
        "termo": "Paleontólogo"
      },
      {
        "id": "3762-45",
        "termo": "Palhaço"
      },
      {
        "id": "3518-15",
        "termo": "Papiloscopista policial"
      },
      {
        "id": "5168-10",
        "termo": "Paranormal"
      },
      {
        "id": "5151-15",
        "termo": "Parteira leiga"
      },
      {
        "id": "7633-25",
        "termo": "Passadeira de peças confeccionadas"
      },
      {
        "id": "5163-25",
        "termo": "Passador de roupas em geral"
      },
      {
        "id": "5164-15",
        "termo": "Passador de roupas; à mão"
      },
      {
        "id": "7613-60",
        "termo": "Passamaneiro a máquina"
      },
      {
        "id": "8482-05",
        "termo": "Pasteurizador"
      },
      {
        "id": "7165-15",
        "termo": "Pastilheiro"
      },
      {
        "id": "3412-20",
        "termo": "Patrão de pesca de alto-mar"
      },
      {
        "id": "3412-25",
        "termo": "Patrão de pesca na navegação interior"
      },
      {
        "id": "2394-15",
        "termo": "Pedagogo"
      },
      {
        "id": "5161-40",
        "termo": "Pedicure"
      },
      {
        "id": "7152-10",
        "termo": "Pedreiro"
      },
      {
        "id": "7152-15",
        "termo": "Pedreiro (chaminés industriais)"
      },
      {
        "id": "7152-20",
        "termo": "Pedreiro (material refratário)"
      },
      {
        "id": "7152-25",
        "termo": "Pedreiro (mineração)"
      },
      {
        "id": "9922-20",
        "termo": "Pedreiro de conservação de vias permanentes (exceto trilhos)"
      },
      {
        "id": "7152-30",
        "termo": "Pedreiro de edificações"
      },
      {
        "id": "3250-15",
        "termo": "Perfumista"
      },
      {
        "id": "2235-70",
        "termo": "Perfusionista"
      },
      {
        "id": "2522-15",
        "termo": "Perito contábil"
      },
      {
        "id": "2041-05",
        "termo": "Perito criminal"
      },
      {
        "id": "6311-05",
        "termo": "Pescador artesanal de água doce"
      },
      {
        "id": "6310-15",
        "termo": "Pescador artesanal de lagostas"
      },
      {
        "id": "6310-20",
        "termo": "Pescador artesanal de peixes e camarões"
      },
      {
        "id": "6312-05",
        "termo": "Pescador industrial"
      },
      {
        "id": "6312-10",
        "termo": "Pescador profissional"
      },
      {
        "id": "2033-05",
        "termo": "Pesquisador de clínica médica"
      },
      {
        "id": "2032-05",
        "termo": "Pesquisador de engenharia civil"
      },
      {
        "id": "2032-10",
        "termo": "Pesquisador de engenharia e tecnologia (outras áreas da engenharia)"
      },
      {
        "id": "2032-15",
        "termo": "Pesquisador de engenharia elétrica e eletrônica"
      },
      {
        "id": "2032-20",
        "termo": "Pesquisador de engenharia mecânica"
      },
      {
        "id": "2032-25",
        "termo": "Pesquisador de engenharia metalúrgica; de minas e de materiais"
      },
      {
        "id": "2032-30",
        "termo": "Pesquisador de engenharia química"
      },
      {
        "id": "2033-10",
        "termo": "Pesquisador de medicina básica"
      },
      {
        "id": "2030-05",
        "termo": "Pesquisador em biologia ambiental"
      },
      {
        "id": "2030-10",
        "termo": "Pesquisador em biologia animal"
      },
      {
        "id": "2030-15",
        "termo": "Pesquisador em biologia de microorganismos e parasitas"
      },
      {
        "id": "2030-20",
        "termo": "Pesquisador em biologia humana"
      },
      {
        "id": "2030-25",
        "termo": "Pesquisador em biologia vegetal"
      },
      {
        "id": "2034-05",
        "termo": "Pesquisador em ciências agronômicas"
      },
      {
        "id": "2031-05",
        "termo": "Pesquisador em ciências da computação e informática"
      },
      {
        "id": "2035-15",
        "termo": "Pesquisador em ciências da educação"
      },
      {
        "id": "2034-10",
        "termo": "Pesquisador em ciências da pesca e aqüicultura"
      },
      {
        "id": "2031-10",
        "termo": "Pesquisador em ciências da terra e meio ambiente"
      },
      {
        "id": "2034-15",
        "termo": "Pesquisador em ciências da zootecnia"
      },
      {
        "id": "2034-20",
        "termo": "Pesquisador em ciências florestais"
      },
      {
        "id": "2035-05",
        "termo": "Pesquisador em ciências sociais e humanas"
      },
      {
        "id": "2035-10",
        "termo": "Pesquisador em economia"
      },
      {
        "id": "2031-15",
        "termo": "Pesquisador em física"
      },
      {
        "id": "2035-20",
        "termo": "Pesquisador em história"
      },
      {
        "id": "2031-20",
        "termo": "Pesquisador em matemática"
      },
      {
        "id": "2033-15",
        "termo": "Pesquisador em medicina veterinária"
      },
      {
        "id": "2012-05",
        "termo": "Pesquisador em metrologia"
      },
      {
        "id": "2035-25",
        "termo": "Pesquisador em psicologia"
      },
      {
        "id": "2031-25",
        "termo": "Pesquisador em química"
      },
      {
        "id": "2033-20",
        "termo": "Pesquisador em saúde coletiva"
      },
      {
        "id": "2134-35",
        "termo": "Petrógrafo"
      },
      {
        "id": "7613-66",
        "termo": "Picotador de cartões jacquard"
      },
      {
        "id": "3411-20",
        "termo": "Piloto agrícola"
      },
      {
        "id": "3411-05",
        "termo": "Piloto comercial (exceto linhas aéreas)"
      },
      {
        "id": "3411-10",
        "termo": "Piloto comercial de helicóptero (exceto linhas aéreas)"
      },
      {
        "id": "2153-05",
        "termo": "Piloto de aeronaves"
      },
      {
        "id": "3771-35",
        "termo": "Piloto de competição automobilística"
      },
      {
        "id": "2153-10",
        "termo": "Piloto de ensaios em vôo"
      },
      {
        "id": "3412-30",
        "termo": "Piloto fluvial"
      },
      {
        "id": "7233-10",
        "termo": "Pintor a pincel e rolo (exceto obras e estruturas metálicas)"
      },
      {
        "id": "7524-30",
        "termo": "Pintor de cerâmica; a pincel"
      },
      {
        "id": "7233-15",
        "termo": "Pintor de estruturas metálicas"
      },
      {
        "id": "7686-25",
        "termo": "Pintor de letreiros"
      },
      {
        "id": "7166-10",
        "termo": "Pintor de obras"
      },
      {
        "id": "7233-20",
        "termo": "Pintor de veículos (fabricação)"
      },
      {
        "id": "9913-15",
        "termo": "Pintor de veículos (reparação)"
      },
      {
        "id": "7233-25",
        "termo": "Pintor por imersão"
      },
      {
        "id": "7233-30",
        "termo": "Pintor; a pistola (exceto obras e estruturas metálicas)"
      },
      {
        "id": "5243-10",
        "termo": "Pipoqueiro ambulante"
      },
      {
        "id": "8121-05",
        "termo": "Pirotécnico"
      },
      {
        "id": "3911-20",
        "termo": "Planejista"
      },
      {
        "id": "7113-25",
        "termo": "Plataformista (petróleo)"
      },
      {
        "id": "7170-15",
        "termo": "Poceiro (edificações)"
      },
      {
        "id": "3221-10",
        "termo": "Podólogo"
      },
      {
        "id": "2615-25",
        "termo": "Poeta"
      },
      {
        "id": "5172-10",
        "termo": "Policial rodoviário federal"
      },
      {
        "id": "7213-25",
        "termo": "Polidor de metais"
      },
      {
        "id": "7122-20",
        "termo": "Polidor de pedras"
      },
      {
        "id": "5174-10",
        "termo": "Porteiro de edifícios"
      },
      {
        "id": "5174-15",
        "termo": "Porteiro de locais de diversão"
      },
      {
        "id": "0103-05",
        "termo": "Praça da aeronáutica"
      },
      {
        "id": "0103-15",
        "termo": "Praça da marinha"
      },
      {
        "id": "0103-10",
        "termo": "Praça do exército"
      },
      {
        "id": "2151-45",
        "termo": "Prático de portos da marinha mercante"
      },
      {
        "id": "1112-50",
        "termo": "Prefeito"
      },
      {
        "id": "7623-30",
        "termo": "Prensador de couros e peles"
      },
      {
        "id": "8414-64",
        "termo": "Prensador de frutas (exceto oleaginosas)"
      },
      {
        "id": "7732-10",
        "termo": "Prensista de aglomerados"
      },
      {
        "id": "7732-15",
        "termo": "Prensista de compensados"
      },
      {
        "id": "8231-30",
        "termo": "Preparador de aditivos"
      },
      {
        "id": "7732-20",
        "termo": "Preparador de aglomerantes"
      },
      {
        "id": "2241-15",
        "termo": "Preparador de atleta"
      },
      {
        "id": "8231-20",
        "termo": "Preparador de barbotina"
      },
      {
        "id": "7641-15",
        "termo": "Preparador de calçados"
      },
      {
        "id": "7623-40",
        "termo": "Preparador de couros curtidos"
      },
      {
        "id": "8231-25",
        "termo": "Preparador de esmaltes (cerâmica)"
      },
      {
        "id": "7242-20",
        "termo": "Preparador de estruturas metálicas"
      },
      {
        "id": "8422-05",
        "termo": "Preparador de fumo na fabricação de charutos"
      },
      {
        "id": "7212-25",
        "termo": "Preparador de máquinas-ferramenta"
      },
      {
        "id": "8231-05",
        "termo": "Preparador de massa (fabricação de abrasivos)"
      },
      {
        "id": "8231-10",
        "termo": "Preparador de massa (fabricação de vidro)"
      },
      {
        "id": "7663-25",
        "termo": "Preparador de matrizes de corte e vinco"
      },
      {
        "id": "8421-05",
        "termo": "Preparador de melado e essência de fumo"
      },
      {
        "id": "7222-35",
        "termo": "Preparador de panelas (lingotamento)"
      },
      {
        "id": "8414-68",
        "termo": "Preparador de rações"
      },
      {
        "id": "7641-20",
        "termo": "Preparador de solas e palmilhas"
      },
      {
        "id": "8214-45",
        "termo": "Preparador de sucata e aparas"
      },
      {
        "id": "3117-20",
        "termo": "Preparador de tintas (fábrica de tecidos)"
      },
      {
        "id": "2241-20",
        "termo": "Preparador físico"
      },
      {
        "id": "1112-05",
        "termo": "Presidente da república"
      },
      {
        "id": "2152-10",
        "termo": "Primeiro oficial de máquinas da marinha mercante"
      },
      {
        "id": "0203-05",
        "termo": "Primeiro tenente de polícia militar"
      },
      {
        "id": "8421-10",
        "termo": "Processador de fumo"
      },
      {
        "id": "2412-10",
        "termo": "Procurador autárquico"
      },
      {
        "id": "2424-10",
        "termo": "Procurador da assistência judiciária"
      },
      {
        "id": "2412-15",
        "termo": "Procurador da fazenda nacional"
      },
      {
        "id": "2422-05",
        "termo": "Procurador da república"
      },
      {
        "id": "2422-10",
        "termo": "Procurador de justiça"
      },
      {
        "id": "2422-15",
        "termo": "Procurador de justiça militar"
      },
      {
        "id": "2412-20",
        "termo": "Procurador do estado"
      },
      {
        "id": "2412-25",
        "termo": "Procurador do município"
      },
      {
        "id": "2422-20",
        "termo": "Procurador do trabalho"
      },
      {
        "id": "2412-30",
        "termo": "Procurador federal"
      },
      {
        "id": "2412-35",
        "termo": "Procurador fundacional"
      },
      {
        "id": "2422-25",
        "termo": "Procurador regional da república"
      },
      {
        "id": "2422-30",
        "termo": "Procurador regional do trabalho"
      },
      {
        "id": "6120-05",
        "termo": "Produtor agrícola polivalente"
      },
      {
        "id": "6110-05",
        "termo": "Produtor agropecuário; em geral"
      },
      {
        "id": "2621-10",
        "termo": "Produtor cinematográfico"
      },
      {
        "id": "2621-05",
        "termo": "Produtor cultural"
      },
      {
        "id": "6127-05",
        "termo": "Produtor da cultura de amendoim"
      },
      {
        "id": "6127-10",
        "termo": "Produtor da cultura de canola"
      },
      {
        "id": "6127-15",
        "termo": "Produtor da cultura de coco-da-baia"
      },
      {
        "id": "6127-20",
        "termo": "Produtor da cultura de dendê"
      },
      {
        "id": "6127-25",
        "termo": "Produtor da cultura de girassol"
      },
      {
        "id": "6127-30",
        "termo": "Produtor da cultura de linho"
      },
      {
        "id": "6127-35",
        "termo": "Produtor da cultura de mamona"
      },
      {
        "id": "6127-40",
        "termo": "Produtor da cultura de soja"
      },
      {
        "id": "6122-05",
        "termo": "Produtor de algodão"
      },
      {
        "id": "6121-05",
        "termo": "Produtor de arroz"
      },
      {
        "id": "6125-05",
        "termo": "Produtor de árvores frutíferas"
      },
      {
        "id": "6126-10",
        "termo": "Produtor de cacau"
      },
      {
        "id": "6121-15",
        "termo": "Produtor de cereais de inverno"
      },
      {
        "id": "6122-10",
        "termo": "Produtor de curauá"
      },
      {
        "id": "6126-15",
        "termo": "Produtor de erva-mate"
      },
      {
        "id": "6128-05",
        "termo": "Produtor de especiarias"
      },
      {
        "id": "6125-10",
        "termo": "Produtor de espécies frutíferas rasteiras"
      },
      {
        "id": "6125-15",
        "termo": "Produtor de espécies frutíferas trepadeiras"
      },
      {
        "id": "6124-05",
        "termo": "Produtor de flores de corte"
      },
      {
        "id": "6124-10",
        "termo": "Produtor de flores em vaso"
      },
      {
        "id": "6124-15",
        "termo": "Produtor de forrações"
      },
      {
        "id": "6126-20",
        "termo": "Produtor de fumo"
      },
      {
        "id": "6121-20",
        "termo": "Produtor de gramíneas forrageiras"
      },
      {
        "id": "6126-25",
        "termo": "Produtor de guaraná"
      },
      {
        "id": "6122-15",
        "termo": "Produtor de juta"
      },
      {
        "id": "6121-25",
        "termo": "Produtor de milho e sorgo"
      },
      {
        "id": "6128-10",
        "termo": "Produtor de plantas aromáticas e medicinais"
      },
      {
        "id": "6124-20",
        "termo": "Produtor de plantas ornamentais"
      },
      {
        "id": "2621-15",
        "termo": "Produtor de rádio"
      },
      {
        "id": "6122-20",
        "termo": "Produtor de rami"
      },
      {
        "id": "2621-20",
        "termo": "Produtor de teatro"
      },
      {
        "id": "2621-25",
        "termo": "Produtor de televisão"
      },
      {
        "id": "2611-30",
        "termo": "Produtor de texto"
      },
      {
        "id": "6123-20",
        "termo": "Produtor na olericultura de frutos e sementes"
      },
      {
        "id": "6123-05",
        "termo": "Produtor na olericultura de legumes"
      },
      {
        "id": "6123-10",
        "termo": "Produtor na olericultura de raízes; bulbos e tubérculos"
      },
      {
        "id": "6123-15",
        "termo": "Produtor na olericultura de talos; folhas e flores"
      },
      {
        "id": "6314-15",
        "termo": "Proeiro"
      },
      {
        "id": "2331-05",
        "termo": "Professor da área de meio ambiente"
      },
      {
        "id": "2348-10",
        "termo": "Professor de administração"
      },
      {
        "id": "2392-05",
        "termo": "Professor de alunos com deficiência auditiva e surdos"
      },
      {
        "id": "2392-15",
        "termo": "Professor de alunos com deficiência mental"
      },
      {
        "id": "2392-20",
        "termo": "Professor de alunos com deficiência múltipla"
      },
      {
        "id": "2392-25",
        "termo": "Professor de alunos com deficiência visual"
      },
      {
        "id": "2347-05",
        "termo": "Professor de antropologia do ensino superior"
      },
      {
        "id": "2343-05",
        "termo": "Professor de arquitetura"
      },
      {
        "id": "2347-10",
        "termo": "Professor de arquivologia do ensino superior"
      },
      {
        "id": "2349-05",
        "termo": "Professor de artes do espetáculo no ensino superior"
      },
      {
        "id": "2321-05",
        "termo": "Professor de artes no ensino médio"
      },
      {
        "id": "2349-10",
        "termo": "Professor de artes visuais no ensino superior (artes plásticas e multimídia)"
      },
      {
        "id": "2342-15",
        "termo": "Professor de astronomia (ensino superior)"
      },
      {
        "id": "2347-15",
        "termo": "Professor de biblioteconomia do ensino superior"
      },
      {
        "id": "2321-10",
        "termo": "Professor de biologia no ensino médio"
      },
      {
        "id": "2347-20",
        "termo": "Professor de ciência política do ensino superior"
      },
      {
        "id": "2344-05",
        "termo": "Professor de ciências biológicas do ensino superior"
      },
      {
        "id": "2341-20",
        "termo": "Professor de computação (no ensino superior)"
      },
      {
        "id": "2347-25",
        "termo": "Professor de comunicação social do ensino superior"
      },
      {
        "id": "2348-15",
        "termo": "Professor de contabilidade"
      },
      {
        "id": "2628-30",
        "termo": "Professor de dança"
      },
      {
        "id": "2331-10",
        "termo": "Professor de desenho técnico"
      },
      {
        "id": "2347-30",
        "termo": "Professor de direito do ensino superior"
      },
      {
        "id": "2321-15",
        "termo": "Professor de disciplinas pedagógicas no ensino médio"
      },
      {
        "id": "2348-05",
        "termo": "Professor de economia"
      },
      {
        "id": "2313-10",
        "termo": "Professor de educação artística do ensino fundamental"
      },
      {
        "id": "2313-15",
        "termo": "Professor de educação física do ensino fundamental"
      },
      {
        "id": "2321-20",
        "termo": "Professor de educação física no ensino médio"
      },
      {
        "id": "2344-10",
        "termo": "Professor de educação física no ensino superior"
      },
      {
        "id": "2344-15",
        "termo": "Professor de enfermagem do ensino superior"
      },
      {
        "id": "2343-10",
        "termo": "Professor de engenharia"
      },
      {
        "id": "2345-05",
        "termo": "Professor de ensino superior na área de didática"
      },
      {
        "id": "2345-10",
        "termo": "Professor de ensino superior na área de orientação educacional"
      },
      {
        "id": "2345-15",
        "termo": "Professor de ensino superior na área de pesquisa educacional"
      },
      {
        "id": "2345-20",
        "termo": "Professor de ensino superior na área de prática de ensino"
      },
      {
        "id": "2344-20",
        "termo": "Professor de farmácia e bioquímica"
      },
      {
        "id": "2346-76",
        "termo": "Professor de filologia e crítica textual"
      },
      {
        "id": "2347-35",
        "termo": "Professor de filosofia do ensino superior"
      },
      {
        "id": "2321-25",
        "termo": "Professor de filosofia no ensino médio"
      },
      {
        "id": "2342-05",
        "termo": "Professor de física (ensino superior)"
      },
      {
        "id": "2321-30",
        "termo": "Professor de física no ensino médio"
      },
      {
        "id": "2344-25",
        "termo": "Professor de fisioterapia"
      },
      {
        "id": "2344-30",
        "termo": "Professor de fonoaudiologia"
      },
      {
        "id": "2343-15",
        "termo": "Professor de geofísica"
      },
      {
        "id": "2313-20",
        "termo": "Professor de geografia do ensino fundamental"
      },
      {
        "id": "2347-40",
        "termo": "Professor de geografia do ensino superior"
      },
      {
        "id": "2321-35",
        "termo": "Professor de geografia no ensino médio"
      },
      {
        "id": "2343-20",
        "termo": "Professor de geologia"
      },
      {
        "id": "2313-25",
        "termo": "Professor de história do ensino fundamental"
      },
      {
        "id": "2321-40",
        "termo": "Professor de história no ensino médio"
      },
      {
        "id": "2347-50",
        "termo": "Professor de jornalismo"
      },
      {
        "id": "2346-04",
        "termo": "Professor de língua alemã"
      },
      {
        "id": "2321-45",
        "termo": "Professor de língua e literatura brasileira no ensino médio"
      },
      {
        "id": "2346-20",
        "termo": "Professor de língua espanhola"
      },
      {
        "id": "2313-30",
        "termo": "Professor de língua estrangeira moderna do ensino fundamental"
      },
      {
        "id": "2321-50",
        "termo": "Professor de língua estrangeira moderna no ensino médio"
      },
      {
        "id": "2346-12",
        "termo": "Professor de língua francesa"
      },
      {
        "id": "2346-16",
        "termo": "Professor de língua inglesa"
      },
      {
        "id": "2346-08",
        "termo": "Professor de língua italiana"
      },
      {
        "id": "2346-24",
        "termo": "Professor de língua portuguesa"
      },
      {
        "id": "2313-35",
        "termo": "Professor de língua portuguesa do ensino fundamental"
      },
      {
        "id": "2346-68",
        "termo": "Professor de línguas estrangeiras modernas"
      },
      {
        "id": "2346-36",
        "termo": "Professor de literatura alemã"
      },
      {
        "id": "2346-28",
        "termo": "Professor de literatura brasileira"
      },
      {
        "id": "2346-40",
        "termo": "Professor de literatura comparada"
      },
      {
        "id": "2346-60",
        "termo": "Professor de literatura de línguas estrangeiras modernas"
      },
      {
        "id": "2346-44",
        "termo": "Professor de literatura espanhola"
      },
      {
        "id": "2346-48",
        "termo": "Professor de literatura francesa"
      },
      {
        "id": "2346-52",
        "termo": "Professor de literatura inglesa"
      },
      {
        "id": "2346-56",
        "termo": "Professor de literatura italiana"
      },
      {
        "id": "2346-32",
        "termo": "Professor de literatura portuguesa"
      },
      {
        "id": "2341-05",
        "termo": "Professor de matemática aplicada (no ensino superior)"
      },
      {
        "id": "2313-40",
        "termo": "Professor de matemática do ensino fundamental"
      },
      {
        "id": "2321-55",
        "termo": "Professor de matemática no ensino médio"
      },
      {
        "id": "2341-10",
        "termo": "Professor de matemática pura (no ensino superior)"
      },
      {
        "id": "2344-35",
        "termo": "Professor de medicina"
      },
      {
        "id": "2344-40",
        "termo": "Professor de medicina veterinária"
      },
      {
        "id": "2347-55",
        "termo": "Professor de museologia do ensino superior"
      },
      {
        "id": "2349-15",
        "termo": "Professor de música no ensino superior"
      },
      {
        "id": "3311-05",
        "termo": "Professor de nível médio na educação infantil"
      },
      {
        "id": "3312-05",
        "termo": "Professor de nível médio no ensino fundamental"
      },
      {
        "id": "3313-05",
        "termo": "Professor de nível médio no ensino profissionalizante"
      },
      {
        "id": "2311-05",
        "termo": "Professor de nível superior na educação infantil (quatro a seis anos)"
      },
      {
        "id": "2311-10",
        "termo": "Professor de nível superior na educação infantil (zero a três anos)"
      },
      {
        "id": "2344-45",
        "termo": "Professor de nutrição"
      },
      {
        "id": "2344-50",
        "termo": "Professor de odontologia"
      },
      {
        "id": "2346-64",
        "termo": "Professor de outras línguas e literaturas"
      },
      {
        "id": "2341-25",
        "termo": "Professor de pesquisa operacional (no ensino superior)"
      },
      {
        "id": "2321-60",
        "termo": "Professor de psicologia no ensino médio"
      },
      {
        "id": "2342-10",
        "termo": "Professor de química (ensino superior)"
      },
      {
        "id": "2321-65",
        "termo": "Professor de química no ensino médio"
      },
      {
        "id": "2346-80",
        "termo": "Professor de semiótica"
      },
      {
        "id": "2347-65",
        "termo": "Professor de serviço social do ensino superior"
      },
      {
        "id": "2347-70",
        "termo": "Professor de sociologia do ensino superior"
      },
      {
        "id": "2321-70",
        "termo": "Professor de sociologia no ensino médio"
      },
      {
        "id": "2331-15",
        "termo": "Professor de técnicas agrícolas"
      },
      {
        "id": "2331-20",
        "termo": "Professor de técnicas comerciais e secretariais"
      },
      {
        "id": "2331-25",
        "termo": "Professor de técnicas de enfermagem"
      },
      {
        "id": "2394-20",
        "termo": "Professor de técnicas e recursos audiovisuais"
      },
      {
        "id": "2331-30",
        "termo": "Professor de técnicas industriais"
      },
      {
        "id": "2331-35",
        "termo": "Professor de tecnologia e cálculo técnico"
      },
      {
        "id": "2346-84",
        "termo": "Professor de teoria da literatura"
      },
      {
        "id": "2344-60",
        "termo": "Professor de zootecnia do ensino superior"
      },
      {
        "id": "2332-20",
        "termo": "Professor instrutor de ensino e aprendizagem agroflorestal"
      },
      {
        "id": "2332-25",
        "termo": "Professor instrutor de ensino e aprendizagem em serviços"
      },
      {
        "id": "3321-05",
        "termo": "Professor leigo no ensino fundamental"
      },
      {
        "id": "3322-05",
        "termo": "Professor prático no ensino profissionalizante"
      },
      {
        "id": "3331-15",
        "termo": "Professores de cursos livres"
      },
      {
        "id": "3771-40",
        "termo": "Profissional de atletismo"
      },
      {
        "id": "2525-50",
        "termo": "Profissional de relações com investidores"
      },
      {
        "id": "3171-05",
        "termo": "Programador de internet"
      },
      {
        "id": "3171-15",
        "termo": "Programador de máquinas - ferramenta com comando numérico"
      },
      {
        "id": "3171-20",
        "termo": "Programador de multimídia"
      },
      {
        "id": "3171-10",
        "termo": "Programador de sistemas de informação"
      },
      {
        "id": "7661-55",
        "termo": "Programador visual gráfico"
      },
      {
        "id": "3188-05",
        "termo": "Projetista de móveis"
      },
      {
        "id": "3741-35",
        "termo": "Projetista de sistemas de áudio"
      },
      {
        "id": "3741-20",
        "termo": "Projetista de som"
      },
      {
        "id": "2422-35",
        "termo": "Promotor de justiça"
      },
      {
        "id": "5211-15",
        "termo": "Promotor de vendas"
      },
      {
        "id": "3541-30",
        "termo": "Promotor de vendas especializado"
      },
      {
        "id": "3541-50",
        "termo": "Propagandista de produtos famacêuticos"
      },
      {
        "id": "3224-10",
        "termo": "Protético dentário"
      },
      {
        "id": "2515-50",
        "termo": "Psicanalista"
      },
      {
        "id": "2515-55",
        "termo": "Psicólogo acupunturista"
      },
      {
        "id": "2515-10",
        "termo": "Psicólogo clínico"
      },
      {
        "id": "2515-15",
        "termo": "Psicólogo do esporte"
      },
      {
        "id": "2515-40",
        "termo": "Psicólogo do trabalho"
      },
      {
        "id": "2515-35",
        "termo": "Psicólogo do trânsito"
      },
      {
        "id": "2515-05",
        "termo": "Psicólogo educacional"
      },
      {
        "id": "2515-20",
        "termo": "Psicólogo hospitalar"
      },
      {
        "id": "2515-25",
        "termo": "Psicólogo jurídico"
      },
      {
        "id": "2515-30",
        "termo": "Psicólogo social"
      },
      {
        "id": "2394-25",
        "termo": "Psicopedagogo"
      },
      {
        "id": "3771-45",
        "termo": "Pugilista"
      },
      {
        "id": "8482-10",
        "termo": "Queijeiro na fabricação de laticínio"
      },
      {
        "id": "2132-05",
        "termo": "Químico"
      },
      {
        "id": "2132-10",
        "termo": "Químico industrial"
      },
      {
        "id": "2261-05",
        "termo": "Quiropraxista"
      },
      {
        "id": "7621-25",
        "termo": "Rachador de couros e peles"
      },
      {
        "id": "3722-10",
        "termo": "Radiotelegrafista"
      },
      {
        "id": "6320-10",
        "termo": "Raizeiro"
      },
      {
        "id": "7622-20",
        "termo": "Rebaixador de couros"
      },
      {
        "id": "7242-15",
        "termo": "Rebitador a martelo pneumático"
      },
      {
        "id": "7242-30",
        "termo": "Rebitador; a mão"
      },
      {
        "id": "4212-05",
        "termo": "Recebedor de apostas (loteria)"
      },
      {
        "id": "4212-10",
        "termo": "Recebedor de apostas (turfe)"
      },
      {
        "id": "4221-25",
        "termo": "Recepcionista de banco"
      },
      {
        "id": "5199-45",
        "termo": "Recepcionista de casas de espetáculos"
      },
      {
        "id": "4221-10",
        "termo": "Recepcionista de consultório médico ou dentário"
      },
      {
        "id": "4221-20",
        "termo": "Recepcionista de hotel"
      },
      {
        "id": "4221-15",
        "termo": "Recepcionista de seguro saúde"
      },
      {
        "id": "4221-05",
        "termo": "Recepcionista; em geral"
      },
      {
        "id": "3714-10",
        "termo": "Recreador"
      },
      {
        "id": "3714-05",
        "termo": "Recreador de acantonamento"
      },
      {
        "id": "8213-35",
        "termo": "Recuperador de guias e cilindros"
      },
      {
        "id": "2531-10",
        "termo": "Redator de publicidade"
      },
      {
        "id": "2615-30",
        "termo": "Redator de textos técnicos"
      },
      {
        "id": "7681-20",
        "termo": "Redeiro"
      },
      {
        "id": "6314-20",
        "termo": "Redeiro (pesca)"
      },
      {
        "id": "8414-72",
        "termo": "Refinador de óleo e gordura"
      },
      {
        "id": "8412-10",
        "termo": "Refinador de sal"
      },
      {
        "id": "1423-25",
        "termo": "Relações públicas"
      },
      {
        "id": "7411-20",
        "termo": "Relojoeiro (fabricação)"
      },
      {
        "id": "7411-25",
        "termo": "Relojoeiro (reparação)"
      },
      {
        "id": "7313-30",
        "termo": "Reparador de aparelhos de telecomunicações em laboratório"
      },
      {
        "id": "9542-05",
        "termo": "Reparador de aparelhos eletrodomésticos (exceto imagem e som)"
      },
      {
        "id": "9543-05",
        "termo": "Reparador de equipamentos de escritório"
      },
      {
        "id": "9154-05",
        "termo": "Reparador de equipamentos fotográficos"
      },
      {
        "id": "9152-10",
        "termo": "Reparador de instrumentos musicais"
      },
      {
        "id": "9542-10",
        "termo": "Reparador de rádio; tv e som"
      },
      {
        "id": "2611-35",
        "termo": "Repórter (exclusive rádio e televisão)"
      },
      {
        "id": "2617-30",
        "termo": "Repórter de rádio e televisão"
      },
      {
        "id": "2618-20",
        "termo": "Repórter fotográfico"
      },
      {
        "id": "5211-25",
        "termo": "Repositor de mercadorias"
      },
      {
        "id": "3547-05",
        "termo": "Representante comercial autônomo"
      },
      {
        "id": "9152-05",
        "termo": "Restaurador de instrumentos musicais (exceto cordas arcadas)"
      },
      {
        "id": "8485-25",
        "termo": "Retalhador de carne"
      },
      {
        "id": "7664-15",
        "termo": "Revelador de filmes fotográficos; em cores"
      },
      {
        "id": "7664-10",
        "termo": "Revelador de filmes fotográficos; em preto e branco"
      },
      {
        "id": "7166-15",
        "termo": "Revestidor de interiores (papel; material plástico e emborrachados)"
      },
      {
        "id": "7161-10",
        "termo": "Revestidor de superfícies de concreto"
      },
      {
        "id": "7618-10",
        "termo": "Revisor de fios (produção têxtil)"
      },
      {
        "id": "7618-15",
        "termo": "Revisor de tecidos acabados"
      },
      {
        "id": "7618-20",
        "termo": "Revisor de tecidos crus"
      },
      {
        "id": "2611-40",
        "termo": "Revisor de texto"
      },
      {
        "id": "7242-25",
        "termo": "Riscador de estruturas metálicas"
      },
      {
        "id": "7631-20",
        "termo": "Riscador de roupas"
      },
      {
        "id": "5141-15",
        "termo": "Sacristão"
      },
      {
        "id": "8481-10",
        "termo": "Salgador de alimentos"
      },
      {
        "id": "8481-15",
        "termo": "Salsicheiro (fabricação de lingüiça; salsicha e produtos similares)"
      },
      {
        "id": "5171-15",
        "termo": "Salva-vidas"
      },
      {
        "id": "7683-20",
        "termo": "Sapateiro (calçados sob medida)"
      },
      {
        "id": "0311-10",
        "termo": "Sargento bombeiro militar"
      },
      {
        "id": "0211-10",
        "termo": "Sargento da policia militar"
      },
      {
        "id": "7721-15",
        "termo": "Secador de madeira"
      },
      {
        "id": "2523-15",
        "termo": "Secretária trilíngüe"
      },
      {
        "id": "2523-05",
        "termo": "Secretária(o) executiva(o)"
      },
      {
        "id": "2523-10",
        "termo": "Secretário bilíngüe"
      },
      {
        "id": "1112-20",
        "termo": "Secretário - executivo"
      },
      {
        "id": "0203-10",
        "termo": "Segundo tenente de polícia militar"
      },
      {
        "id": "5192-10",
        "termo": "Selecionador de material reciclável"
      },
      {
        "id": "7683-25",
        "termo": "Seleiro"
      },
      {
        "id": "1111-05",
        "termo": "Senador"
      },
      {
        "id": "5166-10",
        "termo": "Sepultador"
      },
      {
        "id": "6134-20",
        "termo": "Sericultor"
      },
      {
        "id": "6322-05",
        "termo": "Seringueiro"
      },
      {
        "id": "7731-15",
        "termo": "Serrador de bordas no desdobramento de madeira"
      },
      {
        "id": "7731-20",
        "termo": "Serrador de madeira"
      },
      {
        "id": "7731-25",
        "termo": "Serrador de madeira (serra circular múltipla)"
      },
      {
        "id": "7731-30",
        "termo": "Serrador de madeira (serra de fita múltipla)"
      },
      {
        "id": "7244-40",
        "termo": "Serralheiro"
      },
      {
        "id": "7170-20",
        "termo": "Servente de obras"
      },
      {
        "id": "6233-25",
        "termo": "Sexador"
      },
      {
        "id": "7821-45",
        "termo": "Sinaleiro (ponte-rolante)"
      },
      {
        "id": "5153-25",
        "termo": "Sócioeducador"
      },
      {
        "id": "2511-20",
        "termo": "Sociólogo"
      },
      {
        "id": "5151-35",
        "termo": "Socorrista (exceto médicos e enfermeiros)"
      },
      {
        "id": "0312-10",
        "termo": "Soldado bombeiro militar"
      },
      {
        "id": "0212-10",
        "termo": "Soldado da polícia militar"
      },
      {
        "id": "7243-15",
        "termo": "Soldador"
      },
      {
        "id": "7243-20",
        "termo": "Soldador a oxigás"
      },
      {
        "id": "9911-20",
        "termo": "Soldador aluminotérmico em conservação de trilhos"
      },
      {
        "id": "7243-25",
        "termo": "Soldador elétrico"
      },
      {
        "id": "7113-15",
        "termo": "Sondador (poços de petróleo e gás)"
      },
      {
        "id": "7113-20",
        "termo": "Sondador de poços (exceto de petróleo e gás)"
      },
      {
        "id": "8212-55",
        "termo": "Soprador de convertedor"
      },
      {
        "id": "2422-40",
        "termo": "Subprocurador de justiça militar"
      },
      {
        "id": "2422-45",
        "termo": "Subprocurador-geral da república"
      },
      {
        "id": "2422-50",
        "termo": "Subprocurador-geral do trabalho"
      },
      {
        "id": "0311-05",
        "termo": "Subtenente bombeiro militar"
      },
      {
        "id": "0211-05",
        "termo": "Subtenente da policia militar"
      },
      {
        "id": "2152-20",
        "termo": "Superintendente técnico no transporte aquaviário"
      },
      {
        "id": "7604-05",
        "termo": "Supervisor (indústria de calçados e artefatos de couro)"
      },
      {
        "id": "4101-05",
        "termo": "Supervisor administrativo"
      },
      {
        "id": "3425-40",
        "termo": "Supervisor da administração de aeroportos"
      },
      {
        "id": "6301-05",
        "termo": "Supervisor da aqüicultura"
      },
      {
        "id": "6301-10",
        "termo": "Supervisor da área florestal"
      },
      {
        "id": "7605-05",
        "termo": "Supervisor da confecção de artefatos de tecidos; couros e afins"
      },
      {
        "id": "8401-10",
        "termo": "Supervisor da indústria de bebidas"
      },
      {
        "id": "8401-15",
        "termo": "Supervisor da indústria de fumo"
      },
      {
        "id": "9102-05",
        "termo": "Supervisor da manutenção e reparação de veículos leves"
      },
      {
        "id": "9102-10",
        "termo": "Supervisor da manutenção e reparação de veículos pesados"
      },
      {
        "id": "7401-05",
        "termo": "Supervisor da mecânica de precisão"
      },
      {
        "id": "7606-05",
        "termo": "Supervisor das artes gráficas (indústria editorial e gráfica)"
      },
      {
        "id": "4102-05",
        "termo": "Supervisor de almoxarifado"
      },
      {
        "id": "5101-15",
        "termo": "Supervisor de andar"
      },
      {
        "id": "7101-05",
        "termo": "Supervisor de apoio operacional na mineração"
      },
      {
        "id": "5103-05",
        "termo": "Supervisor de bombeiros"
      },
      {
        "id": "4201-05",
        "termo": "Supervisor de caixas e bilheteiros (exceto caixa de banco)"
      },
      {
        "id": "4102-10",
        "termo": "Supervisor de câmbio"
      },
      {
        "id": "4201-10",
        "termo": "Supervisor de cobrança"
      },
      {
        "id": "4201-15",
        "termo": "Supervisor de coletadores de apostas e de jogos"
      },
      {
        "id": "3542-10",
        "termo": "Supervisor de compras"
      },
      {
        "id": "4102-15",
        "termo": "Supervisor de contas a pagar"
      },
      {
        "id": "7201-60",
        "termo": "Supervisor de controle de tratamento térmico"
      },
      {
        "id": "4102-20",
        "termo": "Supervisor de controle patrimonial"
      },
      {
        "id": "4102-25",
        "termo": "Supervisor de crédito e cobrança"
      },
      {
        "id": "7602-05",
        "termo": "Supervisor de curtimento"
      },
      {
        "id": "4121-20",
        "termo": "Supervisor de digitação e operação"
      },
      {
        "id": "7801-05",
        "termo": "Supervisor de embalagem e etiquetagem"
      },
      {
        "id": "3425-45",
        "termo": "Supervisor de empresa aérea em aeroportos"
      },
      {
        "id": "2394-30",
        "termo": "Supervisor de ensino"
      },
      {
        "id": "4201-20",
        "termo": "Supervisor de entrevistadores e recenseadores"
      },
      {
        "id": "6201-05",
        "termo": "Supervisor de exploração agrícola"
      },
      {
        "id": "6201-10",
        "termo": "Supervisor de exploração agropecuária"
      },
      {
        "id": "6201-15",
        "termo": "Supervisor de exploração pecuária"
      },
      {
        "id": "7101-10",
        "termo": "Supervisor de extração de sal"
      },
      {
        "id": "7401-10",
        "termo": "Supervisor de fabricação de instrumentos musicais"
      },
      {
        "id": "8202-10",
        "termo": "Supervisor de fabricação de produtos de vidro"
      },
      {
        "id": "7501-05",
        "termo": "Supervisor de joalheria"
      },
      {
        "id": "5102-05",
        "termo": "Supervisor de lavanderia"
      },
      {
        "id": "9101-10",
        "termo": "Supervisor de manutenção de aparelhos térmicos; de climatização e de refrigeração"
      },
      {
        "id": "9101-20",
        "termo": "Supervisor de manutenção de máquinas gráficas"
      },
      {
        "id": "9101-25",
        "termo": "Supervisor de manutenção de máquinas industriais têxteis"
      },
      {
        "id": "9101-30",
        "termo": "Supervisor de manutenção de máquinas operatrizes e de usinagem"
      },
      {
        "id": "9109-10",
        "termo": "Supervisor de manutenção de vias férreas"
      },
      {
        "id": "9501-05",
        "termo": "Supervisor de manutenção elétrica de alta tensão industrial"
      },
      {
        "id": "9503-05",
        "termo": "Supervisor de manutenção eletromecânica"
      },
      {
        "id": "9501-10",
        "termo": "Supervisor de manutenção eletromecânica industrial; comercial e predial"
      },
      {
        "id": "7301-05",
        "termo": "Supervisor de montagem e instalação eletroeletrônica"
      },
      {
        "id": "8601-15",
        "termo": "Supervisor de operação elétrica (geração; transmissão e distribuição de energia elétrica)"
      },
      {
        "id": "3426-10",
        "termo": "Supervisor de operações portuárias"
      },
      {
        "id": "4102-30",
        "termo": "Supervisor de orçamento"
      },
      {
        "id": "7101-15",
        "termo": "Supervisor de perfuração e desmonte"
      },
      {
        "id": "8401-05",
        "termo": "Supervisor de produção da indústria alimentícia"
      },
      {
        "id": "7101-20",
        "termo": "Supervisor de produção na mineração"
      },
      {
        "id": "4201-25",
        "termo": "Supervisor de recepcionistas"
      },
      {
        "id": "9109-05",
        "termo": "Supervisor de reparos linhas férreas"
      },
      {
        "id": "4201-30",
        "termo": "Supervisor de telefonistas"
      },
      {
        "id": "4201-35",
        "termo": "Supervisor de telemarketing e atendimento"
      },
      {
        "id": "4102-35",
        "termo": "Supervisor de tesouraria"
      },
      {
        "id": "7101-25",
        "termo": "Supervisor de transporte na mineração"
      },
      {
        "id": "5101-05",
        "termo": "Supervisor de transportes"
      },
      {
        "id": "7102-20",
        "termo": "Supervisor de usina de concreto"
      },
      {
        "id": "5201-10",
        "termo": "Supervisor de vendas comercial"
      },
      {
        "id": "5201-05",
        "termo": "Supervisor de vendas de serviços"
      },
      {
        "id": "5103-10",
        "termo": "Supervisor de vigilantes"
      },
      {
        "id": "3732-20",
        "termo": "Supervisor técnico operacional de sistemas de televisão e produtoras de vídeo"
      },
      {
        "id": "7522-35",
        "termo": "Surfassagista"
      },
      {
        "id": "5136-15",
        "termo": "Sushiman"
      },
      {
        "id": "2413-35",
        "termo": "Tabelião de notas"
      },
      {
        "id": "2413-40",
        "termo": "Tabelião de protestos"
      },
      {
        "id": "5111-15",
        "termo": "Taifeiro (exceto militares)"
      },
      {
        "id": "7711-20",
        "termo": "Tanoeiro"
      },
      {
        "id": "7652-40",
        "termo": "Tapeceiro de autos"
      },
      {
        "id": "7165-35",
        "termo": "Taqueiro"
      },
      {
        "id": "3515-10",
        "termo": "Taquígrafo"
      },
      {
        "id": "3281-10",
        "termo": "Taxidermista"
      },
      {
        "id": "7613-03",
        "termo": "Tecelão (redes)"
      },
      {
        "id": "7613-06",
        "termo": "Tecelão (rendas e bordados)"
      },
      {
        "id": "7613-09",
        "termo": "Tecelão (tear automático)"
      },
      {
        "id": "7613-12",
        "termo": "Tecelão (tear jacquard)"
      },
      {
        "id": "7681-05",
        "termo": "Tecelão (tear manual)"
      },
      {
        "id": "7613-15",
        "termo": "Tecelão (tear mecânico de maquineta)"
      },
      {
        "id": "7613-18",
        "termo": "Tecelão (tear mecânico de xadrez)"
      },
      {
        "id": "7613-21",
        "termo": "Tecelão (tear mecânico liso)"
      },
      {
        "id": "7613-30",
        "termo": "Tecelão de malhas (máquina circular)"
      },
      {
        "id": "7613-33",
        "termo": "Tecelão de malhas (máquina retilínea)"
      },
      {
        "id": "7613-27",
        "termo": "Tecelão de malhas; a máquina"
      },
      {
        "id": "7613-39",
        "termo": "Tecelão de meias (máquina circular)"
      },
      {
        "id": "7613-42",
        "termo": "Tecelão de meias (máquina retilínea)"
      },
      {
        "id": "7613-36",
        "termo": "Tecelão de meias; a máquina"
      },
      {
        "id": "7681-10",
        "termo": "Tecelão de tapetes; a mão"
      },
      {
        "id": "7613-45",
        "termo": "Tecelão de tapetes; a máquina"
      },
      {
        "id": "3211-05",
        "termo": "Técnico agrícola"
      },
      {
        "id": "3211-10",
        "termo": "Técnico agropecuário"
      },
      {
        "id": "2541-10",
        "termo": "Técnico da receita federal"
      },
      {
        "id": "3147-05",
        "termo": "Técnico de acabamento em siderurgia"
      },
      {
        "id": "3147-10",
        "termo": "Técnico de aciaria em siderurgia"
      },
      {
        "id": "3252-05",
        "termo": "Técnico de alimentos"
      },
      {
        "id": "3012-05",
        "termo": "Técnico de apoio à bioengenharia"
      },
      {
        "id": "3951-05",
        "termo": "Técnico de apoio em pesquisa e desenvolvimento (exceto agropecuário e florestal)"
      },
      {
        "id": "3951-10",
        "termo": "Técnico de apoio em pesquisa e desenvolvimento agropecuário florestal"
      },
      {
        "id": "3111-10",
        "termo": "Técnico de celulose e papel"
      },
      {
        "id": "3133-05",
        "termo": "Técnico de comunicação de dados"
      },
      {
        "id": "3511-05",
        "termo": "Técnico de contabilidade"
      },
      {
        "id": "3115-05",
        "termo": "Técnico de controle de meio ambiente"
      },
      {
        "id": "2241-25",
        "termo": "Técnico de desporto individual e coletivo (exceto futebol)"
      },
      {
        "id": "3222-05",
        "termo": "Técnico de enfermagem"
      },
      {
        "id": "3222-45",
        "termo": "Técnico de enfermagem da estratégia de saúde da família"
      },
      {
        "id": "3222-10",
        "termo": "Técnico de enfermagem de terapia intensiva"
      },
      {
        "id": "3222-15",
        "termo": "Técnico de enfermagem do trabalho"
      },
      {
        "id": "3222-20",
        "termo": "Técnico de enfermagem psiquiátrica"
      },
      {
        "id": "3122-05",
        "termo": "Técnico de estradas"
      },
      {
        "id": "3147-15",
        "termo": "Técnico de fundição em siderurgia"
      },
      {
        "id": "3912-10",
        "termo": "Técnico de garantia da qualidade"
      },
      {
        "id": "3226-05",
        "termo": "Técnico de imobilização ortopédica"
      },
      {
        "id": "2241-30",
        "termo": "Técnico de laboratório e fiscalização desportiva"
      },
      {
        "id": "3011-05",
        "termo": "Técnico de laboratório industrial"
      },
      {
        "id": "3147-20",
        "termo": "Técnico de laminação em siderurgia"
      },
      {
        "id": "3144-05",
        "termo": "Técnico de manutenção de sistemas e instrumentos"
      },
      {
        "id": "3131-20",
        "termo": "Técnico de manutenção elétrica"
      },
      {
        "id": "3131-25",
        "termo": "Técnico de manutenção elétrica de máquina"
      },
      {
        "id": "3132-05",
        "termo": "Técnico de manutenção eletrônica"
      },
      {
        "id": "3911-35",
        "termo": "Técnico de matéria-prima e material"
      },
      {
        "id": "3115-10",
        "termo": "Técnico de meteorologia"
      },
      {
        "id": "3163-05",
        "termo": "Técnico de mineração"
      },
      {
        "id": "3163-10",
        "termo": "Técnico de mineração (óleo e petróleo)"
      },
      {
        "id": "3121-05",
        "termo": "Técnico de obras civis"
      },
      {
        "id": "8131-30",
        "termo": "Técnico de operação (química; petroquímica e afins)"
      },
      {
        "id": "3532-05",
        "termo": "Técnico de operações e serviços bancários - câmbio"
      },
      {
        "id": "3532-10",
        "termo": "Técnico de operações e serviços bancários - crédito imobiliário"
      },
      {
        "id": "3532-15",
        "termo": "Técnico de operações e serviços bancários - crédito rural"
      },
      {
        "id": "3532-20",
        "termo": "Técnico de operações e serviços bancários - leasing"
      },
      {
        "id": "3532-25",
        "termo": "Técnico de operações e serviços bancários - renda fixa e variável"
      },
      {
        "id": "3225-05",
        "termo": "Técnico de ortopedia"
      },
      {
        "id": "3912-20",
        "termo": "Técnico de painel de controle"
      },
      {
        "id": "3911-25",
        "termo": "Técnico de planejamento de produção"
      },
      {
        "id": "3911-30",
        "termo": "Técnico de planejamento e programação da manutenção"
      },
      {
        "id": "3163-25",
        "termo": "Técnico de produção em refino de petróleo"
      },
      {
        "id": "3133-10",
        "termo": "Técnico de rede (telecomunicações)"
      },
      {
        "id": "3147-25",
        "termo": "Técnico de redução na siderurgia (primeira fusão)"
      },
      {
        "id": "3517-35",
        "termo": "Técnico de resseguros"
      },
      {
        "id": "3122-10",
        "termo": "Técnico de saneamento"
      },
      {
        "id": "3517-40",
        "termo": "Técnico de seguros"
      },
      {
        "id": "3133-15",
        "termo": "Técnico de telecomunicações (telefonia)"
      },
      {
        "id": "3133-20",
        "termo": "Técnico de transmissão (telecomunicações)"
      },
      {
        "id": "2544-15",
        "termo": "Técnico de tributos estadual"
      },
      {
        "id": "2544-20",
        "termo": "Técnico de tributos municipal"
      },
      {
        "id": "3541-35",
        "termo": "Técnico de vendas"
      },
      {
        "id": "3131-30",
        "termo": "Técnico eletricista"
      },
      {
        "id": "3132-15",
        "termo": "Técnico eletrônico"
      },
      {
        "id": "3221-05",
        "termo": "Técnico em acupuntura"
      },
      {
        "id": "3513-05",
        "termo": "Técnico em administração"
      },
      {
        "id": "3513-10",
        "termo": "Técnico em administração de comércio exterior"
      },
      {
        "id": "3123-05",
        "termo": "Técnico em agrimensura"
      },
      {
        "id": "3541-40",
        "termo": "Técnico em atendimento e vendas"
      },
      {
        "id": "3143-05",
        "termo": "Técnico em automobilística"
      },
      {
        "id": "3711-10",
        "termo": "Técnico em biblioteconomia"
      },
      {
        "id": "3253-05",
        "termo": "Técnico em biotecnologia"
      },
      {
        "id": "3201-05",
        "termo": "Técnico em bioterismo"
      },
      {
        "id": "3114-05",
        "termo": "Técnico em borracha"
      },
      {
        "id": "3146-10",
        "termo": "Técnico em caldeiraria"
      },
      {
        "id": "3134-05",
        "termo": "Técnico em calibração"
      },
      {
        "id": "3213-10",
        "termo": "Técnico em carcinicultura"
      },
      {
        "id": "3191-10",
        "termo": "Técnico em confecções do vestuário"
      },
      {
        "id": "3111-15",
        "termo": "Técnico em curtimento"
      },
      {
        "id": "3524-20",
        "termo": "Técnico em direitos autorais"
      },
      {
        "id": "3003-05",
        "termo": "Técnico em eletromecânica"
      },
      {
        "id": "3146-15",
        "termo": "Técnico em estruturas metálicas"
      },
      {
        "id": "3251-15",
        "termo": "Técnico em farmácia"
      },
      {
        "id": "3135-05",
        "termo": "Técnico em fotônica"
      },
      {
        "id": "3123-10",
        "termo": "Técnico em geodésia e cartografia"
      },
      {
        "id": "3161-05",
        "termo": "Técnico em geofísica"
      },
      {
        "id": "3161-10",
        "termo": "Técnico em geologia"
      },
      {
        "id": "3161-15",
        "termo": "Técnico em geoquímica"
      },
      {
        "id": "3161-20",
        "termo": "Técnico em geotecnia"
      },
      {
        "id": "3741-05",
        "termo": "Técnico em gravação de áudio"
      },
      {
        "id": "3242-20",
        "termo": "Técnico em hemoterapia"
      },
      {
        "id": "3123-15",
        "termo": "Técnico em hidrografia"
      },
      {
        "id": "3516-10",
        "termo": "Técnico em higiene ocupacional"
      },
      {
        "id": "3253-10",
        "termo": "Técnico em imunobiológicos"
      },
      {
        "id": "3741-10",
        "termo": "Técnico em instalação de equipamentos de áudio"
      },
      {
        "id": "3134-10",
        "termo": "Técnico em instrumentação"
      },
      {
        "id": "3251-10",
        "termo": "Técnico em laboratório de farmácia"
      },
      {
        "id": "3212-05",
        "termo": "Técnico em madeira"
      },
      {
        "id": "9151-15",
        "termo": "Técnico em manutenção de balanças"
      },
      {
        "id": "3132-20",
        "termo": "Técnico em manutenção de equipamentos de informática"
      },
      {
        "id": "9151-05",
        "termo": "Técnico em manutenção de instrumentos de medição e precisão"
      },
      {
        "id": "3144-10",
        "termo": "Técnico em manutenção de máquinas"
      },
      {
        "id": "3741-15",
        "termo": "Técnico em masterização de áudio"
      },
      {
        "id": "3113-05",
        "termo": "Técnico em materiais; produtos cerâmicos e vidros"
      },
      {
        "id": "3141-05",
        "termo": "Técnico em mecânica de precisão"
      },
      {
        "id": "3001-05",
        "termo": "Técnico em mecatrônica - automação da manufatura"
      },
      {
        "id": "3001-10",
        "termo": "Técnico em mecatrônica - robótica"
      },
      {
        "id": "3241-05",
        "termo": "Técnico em métodos eletrográficos em encefalografia"
      },
      {
        "id": "3241-10",
        "termo": "Técnico em métodos gráficos em cardiologia"
      },
      {
        "id": "3213-15",
        "termo": "Técnico em mitilicultura"
      },
      {
        "id": "3741-30",
        "termo": "Técnico em mixagem de áudio"
      },
      {
        "id": "3712-10",
        "termo": "Técnico em museologia"
      },
      {
        "id": "3252-10",
        "termo": "Técnico em nutrição e dietética"
      },
      {
        "id": "3732-10",
        "termo": "Técnico em operação de equipamento de exibição de televisão"
      },
      {
        "id": "3732-15",
        "termo": "Técnico em operação de equipamentos de transmissão/recepção de televisão"
      },
      {
        "id": "3223-05",
        "termo": "Técnico em óptica e optometria"
      },
      {
        "id": "3242-05",
        "termo": "Técnico em patologia clínica"
      },
      {
        "id": "3231-05",
        "termo": "Técnico em pecuária"
      },
      {
        "id": "3163-20",
        "termo": "Técnico em pesquisa mineral"
      },
      {
        "id": "3112-05",
        "termo": "Técnico em petroquímica"
      },
      {
        "id": "3213-05",
        "termo": "Técnico em piscicultura"
      },
      {
        "id": "3163-30",
        "termo": "Técnico em planejamento de lavra de minas"
      },
      {
        "id": "3114-10",
        "termo": "Técnico em plástico"
      },
      {
        "id": "3163-15",
        "termo": "Técnico em processamento mineral (exceto petróleo)"
      },
      {
        "id": "3713-05",
        "termo": "Técnico em programação visual"
      },
      {
        "id": "3221-15",
        "termo": "Técnico em quiropraxia"
      },
      {
        "id": "3241-15",
        "termo": "Técnico em radiologia e imagenologia"
      },
      {
        "id": "3213-20",
        "termo": "Técnico em ranicultura"
      },
      {
        "id": "3224-05",
        "termo": "Técnico em saúde bucal"
      },
      {
        "id": "3224-25",
        "termo": "Técnico em saúde bucal da estratégia de saúde da família"
      },
      {
        "id": "3515-05",
        "termo": "Técnico em secretariado"
      },
      {
        "id": "3516-05",
        "termo": "Técnico em segurança do trabalho"
      },
      {
        "id": "3146-20",
        "termo": "Técnico em soldagem"
      },
      {
        "id": "3741-25",
        "termo": "Técnico em sonorização"
      },
      {
        "id": "3115-20",
        "termo": "Técnico em tratamento de efluentes"
      },
      {
        "id": "3548-05",
        "termo": "Técnico em turismo"
      },
      {
        "id": "3212-10",
        "termo": "Técnico florestal"
      },
      {
        "id": "3713-10",
        "termo": "Técnico gráfico"
      },
      {
        "id": "3141-10",
        "termo": "Técnico mecânico"
      },
      {
        "id": "3143-10",
        "termo": "Técnico mecânico (aeronaves)"
      },
      {
        "id": "3141-15",
        "termo": "Técnico mecânico (calefação; ventilação e refrigeração)"
      },
      {
        "id": "3143-15",
        "termo": "Técnico mecânico (embarcações)"
      },
      {
        "id": "3141-20",
        "termo": "Técnico mecânico (máquinas)"
      },
      {
        "id": "3141-25",
        "termo": "Técnico mecânico (motores)"
      },
      {
        "id": "3142-05",
        "termo": "Técnico mecânico na fabricação de ferramentas"
      },
      {
        "id": "3142-10",
        "termo": "Técnico mecânico na manutenção de ferramentas"
      },
      {
        "id": "3912-30",
        "termo": "Técnico operacional de serviços de correios"
      },
      {
        "id": "3111-05",
        "termo": "Técnico químico"
      },
      {
        "id": "3011-15",
        "termo": "Técnico químico de petróleo"
      },
      {
        "id": "3116-05",
        "termo": "Técnico têxtil"
      },
      {
        "id": "3116-10",
        "termo": "Técnico têxtil (tratamentos químicos)"
      },
      {
        "id": "3116-15",
        "termo": "Técnico têxtil de fiação"
      },
      {
        "id": "3116-25",
        "termo": "Técnico têxtil de tecelagem"
      },
      {
        "id": "2222-15",
        "termo": "Tecnólogo em alimentos"
      },
      {
        "id": "2021-20",
        "termo": "Tecnólogo em automação industrial"
      },
      {
        "id": "2142-80",
        "termo": "Tecnólogo em construção civil"
      },
      {
        "id": "2143-60",
        "termo": "Tecnólogo em eletricidade"
      },
      {
        "id": "2143-65",
        "termo": "Tecnólogo em eletrônica"
      },
      {
        "id": "2144-35",
        "termo": "Tecnólogo em fabricação mecânica"
      },
      {
        "id": "1421-20",
        "termo": "Tecnólogo em gestão administrativo- financeira"
      },
      {
        "id": "1425-35",
        "termo": "Tecnólogo em gestão da tecnologia da informação"
      },
      {
        "id": "1312-15",
        "termo": "Tecnólogo em gestão hospitalar"
      },
      {
        "id": "3421-25",
        "termo": "Tecnólogo em logística de transporte"
      },
      {
        "id": "2021-15",
        "termo": "Tecnólogo em mecatrônica"
      },
      {
        "id": "2140-10",
        "termo": "Tecnólogo em meio ambiente"
      },
      {
        "id": "2146-15",
        "termo": "Tecnólogo em metalurgia"
      },
      {
        "id": "2147-45",
        "termo": "Tecnólogo em petróleo e gás"
      },
      {
        "id": "2132-15",
        "termo": "Tecnólogo em processos químicos"
      },
      {
        "id": "2621-35",
        "termo": "Tecnólogo em produção audiovisual"
      },
      {
        "id": "2621-30",
        "termo": "Tecnólogo em produção fonográfica"
      },
      {
        "id": "2149-30",
        "termo": "Tecnólogo em produção industrial"
      },
      {
        "id": "2145-35",
        "termo": "Tecnólogo em produção sulcroalcooleira"
      },
      {
        "id": "3241-20",
        "termo": "Tecnólogo em radiologia"
      },
      {
        "id": "2147-50",
        "termo": "Tecnólogo em rochas ornamentais"
      },
      {
        "id": "2149-35",
        "termo": "Tecnólogo em segurança do trabalho"
      },
      {
        "id": "1427-10",
        "termo": "Tecnólogo em sistemas biomédicos"
      },
      {
        "id": "3146-25",
        "termo": "Tecnólogo em soldagem"
      },
      {
        "id": "2143-70",
        "termo": "Tecnólogo em telecomunicações"
      },
      {
        "id": "3241-25",
        "termo": "Tecnólogo oftálmico"
      },
      {
        "id": "4222-05",
        "termo": "Telefonista"
      },
      {
        "id": "4222-10",
        "termo": "Teleoperador"
      },
      {
        "id": "7162-05",
        "termo": "Telhador (telhas de argila e materiais similares)"
      },
      {
        "id": "7162-10",
        "termo": "Telhador (telhas de cimento-amianto)"
      },
      {
        "id": "7162-15",
        "termo": "Telhador (telhas metálicas)"
      },
      {
        "id": "7162-20",
        "termo": "Telhador (telhas plásticas)"
      },
      {
        "id": "7231-25",
        "termo": "Temperador de metais e de compósitos"
      },
      {
        "id": "8232-55",
        "termo": "Temperador de vidro"
      },
      {
        "id": "0303-05",
        "termo": "Tenente do corpo de bombeiros militar"
      },
      {
        "id": "0301-15",
        "termo": "Tenente-coronel bombeiro militar"
      },
      {
        "id": "0201-10",
        "termo": "Tenente-coronel da polícia militar"
      },
      {
        "id": "2631-15",
        "termo": "Teólogo"
      },
      {
        "id": "3221-25",
        "termo": "Terapeuta holístico"
      },
      {
        "id": "2239-05",
        "termo": "Terapeuta ocupacional"
      },
      {
        "id": "3532-30",
        "termo": "Tesoureiro de banco"
      },
      {
        "id": "3117-25",
        "termo": "Tingidor de couros e peles"
      },
      {
        "id": "5163-30",
        "termo": "Tingidor de roupas"
      },
      {
        "id": "7686-05",
        "termo": "Tipógrafo"
      },
      {
        "id": "3762-50",
        "termo": "Titeriteiro"
      },
      {
        "id": "3123-20",
        "termo": "Topógrafo"
      },
      {
        "id": "7122-25",
        "termo": "Torneiro (lavra de pedra)"
      },
      {
        "id": "7733-55",
        "termo": "Torneiro na usinagem convencional de madeira"
      },
      {
        "id": "8416-25",
        "termo": "Torrador de cacau"
      },
      {
        "id": "8416-10",
        "termo": "Torrador de café"
      },
      {
        "id": "7113-30",
        "termo": "Torrista (petróleo)"
      },
      {
        "id": "5193-20",
        "termo": "Tosador de animais domésticos"
      },
      {
        "id": "6210-05",
        "termo": "Trabalhador agropecuário em geral"
      },
      {
        "id": "6233-05",
        "termo": "Trabalhador da avicultura de corte"
      },
      {
        "id": "6233-10",
        "termo": "Trabalhador da avicultura de postura"
      },
      {
        "id": "6232-05",
        "termo": "Trabalhador da caprinocultura"
      },
      {
        "id": "6222-05",
        "termo": "Trabalhador da cultura de algodão"
      },
      {
        "id": "6221-05",
        "termo": "Trabalhador da cultura de arroz"
      },
      {
        "id": "6226-05",
        "termo": "Trabalhador da cultura de cacau"
      },
      {
        "id": "6226-10",
        "termo": "Trabalhador da cultura de café"
      },
      {
        "id": "6221-10",
        "termo": "Trabalhador da cultura de cana-de-açúcar"
      },
      {
        "id": "6226-15",
        "termo": "Trabalhador da cultura de erva-mate"
      },
      {
        "id": "6228-05",
        "termo": "Trabalhador da cultura de especiarias"
      },
      {
        "id": "6226-20",
        "termo": "Trabalhador da cultura de fumo"
      },
      {
        "id": "6226-25",
        "termo": "Trabalhador da cultura de guaraná"
      },
      {
        "id": "6221-15",
        "termo": "Trabalhador da cultura de milho e sorgo"
      },
      {
        "id": "6228-10",
        "termo": "Trabalhador da cultura de plantas aromáticas e medicinais"
      },
      {
        "id": "6222-10",
        "termo": "Trabalhador da cultura de sisal"
      },
      {
        "id": "6221-20",
        "termo": "Trabalhador da cultura de trigo; aveia; cevada e triticale"
      },
      {
        "id": "6222-15",
        "termo": "Trabalhador da cultura do rami"
      },
      {
        "id": "6233-20",
        "termo": "Trabalhador da cunicultura"
      },
      {
        "id": "8233-20",
        "termo": "Trabalhador da elaboração de pré-fabricados (cimento amianto)"
      },
      {
        "id": "8233-25",
        "termo": "Trabalhador da elaboração de pré-fabricados (concreto armado)"
      },
      {
        "id": "6324-05",
        "termo": "Trabalhador da exploração de açaí"
      },
      {
        "id": "6323-05",
        "termo": "Trabalhador da exploração de andiroba"
      },
      {
        "id": "6323-10",
        "termo": "Trabalhador da exploração de babaçu"
      },
      {
        "id": "6323-15",
        "termo": "Trabalhador da exploração de bacaba"
      },
      {
        "id": "6323-20",
        "termo": "Trabalhador da exploração de buriti"
      },
      {
        "id": "6323-25",
        "termo": "Trabalhador da exploração de carnaúba"
      },
      {
        "id": "6324-10",
        "termo": "Trabalhador da exploração de castanha"
      },
      {
        "id": "6323-30",
        "termo": "Trabalhador da exploração de coco-da-praia"
      },
      {
        "id": "6323-35",
        "termo": "Trabalhador da exploração de copaíba"
      },
      {
        "id": "6322-10",
        "termo": "Trabalhador da exploração de espécies produtoras de gomas não elásticas"
      },
      {
        "id": "6325-15",
        "termo": "Trabalhador da exploração de madeiras tanantes"
      },
      {
        "id": "6323-40",
        "termo": "Trabalhador da exploração de malva (pãina)"
      },
      {
        "id": "6323-45",
        "termo": "Trabalhador da exploração de murumuru"
      },
      {
        "id": "6323-50",
        "termo": "Trabalhador da exploração de oiticica"
      },
      {
        "id": "6323-55",
        "termo": "Trabalhador da exploração de ouricuri"
      },
      {
        "id": "6323-60",
        "termo": "Trabalhador da exploração de pequi"
      },
      {
        "id": "6323-65",
        "termo": "Trabalhador da exploração de piaçava"
      },
      {
        "id": "6324-15",
        "termo": "Trabalhador da exploração de pinhão"
      },
      {
        "id": "6324-20",
        "termo": "Trabalhador da exploração de pupunha"
      },
      {
        "id": "6322-15",
        "termo": "Trabalhador da exploração de resinas"
      },
      {
        "id": "6323-70",
        "termo": "Trabalhador da exploração de tucum"
      },
      {
        "id": "6325-25",
        "termo": "Trabalhador da extração de substâncias aromáticas; medicinais e tóxicas; em geral"
      },
      {
        "id": "8121-10",
        "termo": "Trabalhador da fabricação de munição e explosivos"
      },
      {
        "id": "8233-30",
        "termo": "Trabalhador da fabricação de pedras artificiais"
      },
      {
        "id": "8111-25",
        "termo": "Trabalhador da fabricação de resinas e vernizes"
      },
      {
        "id": "5143-25",
        "termo": "Trabalhador da manutenção de edificações"
      },
      {
        "id": "6232-10",
        "termo": "Trabalhador da ovinocultura"
      },
      {
        "id": "6231-05",
        "termo": "Trabalhador da pecuária (asininos e muares)"
      },
      {
        "id": "6231-15",
        "termo": "Trabalhador da pecuária (bovinos leite)"
      },
      {
        "id": "6231-20",
        "termo": "Trabalhador da pecuária (bubalinos)"
      },
      {
        "id": "6231-25",
        "termo": "Trabalhador da pecuária (eqüinos)"
      },
      {
        "id": "6232-15",
        "termo": "Trabalhador da suinocultura"
      },
      {
        "id": "6321-25",
        "termo": "Trabalhador de extração florestal; em geral"
      },
      {
        "id": "8414-76",
        "termo": "Trabalhador de fabricação de margarina"
      },
      {
        "id": "8483-25",
        "termo": "Trabalhador de fabricação de sorvete"
      },
      {
        "id": "8111-30",
        "termo": "Trabalhador de fabricação de tintas"
      },
      {
        "id": "8417-20",
        "termo": "Trabalhador de fabricação de vinhos"
      },
      {
        "id": "6230-15",
        "termo": "Trabalhador de pecuária polivalente"
      },
      {
        "id": "8414-84",
        "termo": "Trabalhador de preparação de pescados (limpeza)"
      },
      {
        "id": "5142-25",
        "termo": "Trabalhador de serviços de limpeza e conservação de áreas públicas"
      },
      {
        "id": "8415-05",
        "termo": "Trabalhador de tratamento do leite e fabricação de laticínios e afins"
      },
      {
        "id": "7654-05",
        "termo": "Trabalhador do acabamento de artefatos de tecidos e couros"
      },
      {
        "id": "8486-05",
        "termo": "Trabalhador do beneficiamento de fumo"
      },
      {
        "id": "6234-05",
        "termo": "Trabalhador em criatórios de animais produtores de veneno"
      },
      {
        "id": "6234-10",
        "termo": "Trabalhador na apicultura"
      },
      {
        "id": "6227-05",
        "termo": "Trabalhador na cultura de amendoim"
      },
      {
        "id": "6227-10",
        "termo": "Trabalhador na cultura de canola"
      },
      {
        "id": "6227-15",
        "termo": "Trabalhador na cultura de coco-da-baía"
      },
      {
        "id": "6227-20",
        "termo": "Trabalhador na cultura de dendê"
      },
      {
        "id": "6227-25",
        "termo": "Trabalhador na cultura de mamona"
      },
      {
        "id": "6227-30",
        "termo": "Trabalhador na cultura de soja"
      },
      {
        "id": "6227-35",
        "termo": "Trabalhador na cultura do girassol"
      },
      {
        "id": "6227-40",
        "termo": "Trabalhador na cultura do linho"
      },
      {
        "id": "8232-65",
        "termo": "Trabalhador na fabricação de produtos abrasivos"
      },
      {
        "id": "6234-15",
        "termo": "Trabalhador na minhocultura"
      },
      {
        "id": "6223-05",
        "termo": "Trabalhador na olericultura (frutos e sementes)"
      },
      {
        "id": "6223-10",
        "termo": "Trabalhador na olericultura (legumes)"
      },
      {
        "id": "6223-15",
        "termo": "Trabalhador na olericultura (raízes; bulbos e tubérculos)"
      },
      {
        "id": "6223-20",
        "termo": "Trabalhador na olericultura (talos; folhas e flores)"
      },
      {
        "id": "6430-10",
        "termo": "Trabalhador na operação de sistema de irrigação por aspersão (pivô central)"
      },
      {
        "id": "6430-25",
        "termo": "Trabalhador na operação de sistemas de irrigação por superfície e drenagem"
      },
      {
        "id": "6220-15",
        "termo": "Trabalhador na produção de mudas e sementes"
      },
      {
        "id": "6234-20",
        "termo": "Trabalhador na sericicultura"
      },
      {
        "id": "6225-05",
        "termo": "Trabalhador no cultivo de árvores frutíferas"
      },
      {
        "id": "6225-10",
        "termo": "Trabalhador no cultivo de espécies frutíferas rasteiras"
      },
      {
        "id": "6224-05",
        "termo": "Trabalhador no cultivo de flores e folhagens de corte"
      },
      {
        "id": "6224-10",
        "termo": "Trabalhador no cultivo de flores em vaso"
      },
      {
        "id": "6224-15",
        "termo": "Trabalhador no cultivo de forrações"
      },
      {
        "id": "6224-20",
        "termo": "Trabalhador no cultivo de mudas"
      },
      {
        "id": "6224-25",
        "termo": "Trabalhador no cultivo de plantas ornamentais"
      },
      {
        "id": "6225-15",
        "termo": "Trabalhador no cultivo de trepadeiras frutíferas"
      },
      {
        "id": "7640-05",
        "termo": "Trabalhador polivalente da confecção de calçados"
      },
      {
        "id": "7620-05",
        "termo": "Trabalhador polivalente do curtimento de couros e peles"
      },
      {
        "id": "6220-20",
        "termo": "Trabalhador volante da agricultura"
      },
      {
        "id": "7122-30",
        "termo": "Traçador de pedras"
      },
      {
        "id": "2614-20",
        "termo": "Tradutor"
      },
      {
        "id": "7246-10",
        "termo": "Trançador de cabos de aço"
      },
      {
        "id": "7521-20",
        "termo": "Transformador de tubos de vidro"
      },
      {
        "id": "3762-55",
        "termo": "Trapezista"
      },
      {
        "id": "6230-20",
        "termo": "Tratador de animais"
      },
      {
        "id": "6410-15",
        "termo": "Tratorista agrícola"
      },
      {
        "id": "7511-30",
        "termo": "Trefilador (joalheria e ourivesaria)"
      },
      {
        "id": "8117-75",
        "termo": "Trefilador de borracha"
      },
      {
        "id": "7224-15",
        "termo": "Trefilador de metais; à máquina"
      },
      {
        "id": "2241-35",
        "termo": "Treinador profissional de futebol"
      },
      {
        "id": "7681-15",
        "termo": "Tricoteiro; à mão"
      },
      {
        "id": "7828-10",
        "termo": "Tropeiro"
      },
      {
        "id": "1225-20",
        "termo": "Turismólogo"
      },
      {
        "id": "2141-30",
        "termo": "Urbanista"
      },
      {
        "id": "7623-45",
        "termo": "Vaqueador de couros e peles"
      },
      {
        "id": "5142-15",
        "termo": "Varredor de rua"
      },
      {
        "id": "7764-30",
        "termo": "Vassoureiro"
      },
      {
        "id": "5242-15",
        "termo": "Vendedor permissionário"
      },
      {
        "id": "5243-05",
        "termo": "Vendedor ambulante"
      },
      {
        "id": "5211-10",
        "termo": "Vendedor de comércio varejista"
      },
      {
        "id": "5211-05",
        "termo": "Vendedor em comércio atacadista"
      },
      {
        "id": "5241-05",
        "termo": "Vendedor em domicílio"
      },
      {
        "id": "3541-45",
        "termo": "Vendedor pracista"
      },
      {
        "id": "1111-20",
        "termo": "Vereador"
      },
      {
        "id": "7170-25",
        "termo": "Vibradorista"
      },
      {
        "id": "1112-40",
        "termo": "Vice-governador de estado"
      },
      {
        "id": "1112-45",
        "termo": "Vice-governador do Distrito Federal"
      },
      {
        "id": "1112-55",
        "termo": "Vice-prefeito"
      },
      {
        "id": "1112-10",
        "termo": "Vice-presidente da República"
      },
      {
        "id": "7163-05",
        "termo": "Vidraceiro"
      },
      {
        "id": "7163-10",
        "termo": "Vidraceiro (edificações)"
      },
      {
        "id": "7163-15",
        "termo": "Vidraceiro (vitrais)"
      },
      {
        "id": "5174-20",
        "termo": "Vigia"
      },
      {
        "id": "5173-20",
        "termo": "Vigia florestal"
      },
      {
        "id": "5173-25",
        "termo": "Vigia portuário"
      },
      {
        "id": "5173-30",
        "termo": "Vigilante"
      },
      {
        "id": "8417-40",
        "termo": "Vinagreiro"
      },
      {
        "id": "5151-20",
        "termo": "Visitador sanitário"
      },
      {
        "id": "2151-50",
        "termo": "Vistoriador naval"
      },
      {
        "id": "3751-15",
        "termo": "Visual merchandiser"
      },
      {
        "id": "6320-15",
        "termo": "Viveirista florestal"
      },
      {
        "id": "8417-45",
        "termo": "Xaropeiro"
      },
      {
        "id": "5141-20",
        "termo": "Zelador de edifício"
      },
      {
        "id": "2233-10",
        "termo": "Zootecnista"
      }
    ])))
);
