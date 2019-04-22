<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Plataforma Unificada de Metodologia Ativa](#plataforma-unificada-de-metodologia-ativa)
  - [Base URL](#base-url)
  - [Endpoints](#endpoints)
    - [`/usuario/*`](#usuario)
      - [`POST /usuario`](#post-usuario)
      - [`GET /usuario:id`](#get-usuarioid)
      - [`GET /usuario`](#get-usuario)
      - [`PATCH /usuario/:id`](#patch-usuarioid)
      - [`DELETE /usuario/:id`](#delete-usuarioid)
    - [`/profissao/*`](#profissao)
      - [`GET /profissao`](#get-profissao)
    - [`/auth/*`](#auth)
      - [`POST /auth/login`](#post-authlogin)
      - [`GET /auth/tokenConfirmacao/:token`](#get-authtokenconfirmacaotoken)
      - [`POST /auth/tokenConfirmacao/`](#post-authtokenconfirmacao)
    - [`/noticia/*`](#noticia)
      - [`POST /noticia`](#post-noticia)
      - [`GET /noticia/`](#get-noticia)
      - [`GET /noticia/:id`](#get-noticiaid)
      - [`PATCH /noticia/:id`](#patch-noticiaid)
      - [`DELETE /noticia/:id`](#delete-noticiaid)
    - [`/projeto/*`](#projeto)
      - [`POST /projeto`](#post-projeto)
      - [`GET /projeto/`](#get-projeto)
      - [`GET /projeto/:id`](#get-projetoid)
      - [`PATCH /projeto/:id`](#patch-projetoid)
      - [`DELETE /projeto/:id`](#delete-projetoid)
    - [`/psp/*`](#psp)
      - [`POST /psp`](#post-psp)
      - [`GET /psp/`](#get-psp)
      - [`GET /psp/:id`](#get-pspid)
      - [`PATCH /psp/:id`](#patch-pspid)
      - [`DELETE /psp/:id`](#delete-pspid)
    - [`/competencia/*`](#competencia)
      - [`POST /competencia`](#post-competencia)
      - [`GET /competencia/`](#get-competencia)
      - [`GET /competencia/:id`](#get-competenciaid)
      - [`PATCH /competencia/:id`](#patch-competenciaid)
      - [`DELETE /competencia/:id`](#delete-competenciaid)
  - [Lista de Identificadores](#lista-de-identificadores)
    - [Papeis](#papeis)
    - [Categoria de Notícias](#categoria-de-not%C3%ADcias)
    - [Categoria dos Endereços](#categoria-dos-endere%C3%A7os)
    - [Categoria das Competências](#categoria-das-compet%C3%AAncias)
    - [Status dos Projetos](#status-dos-projetos)
    - [PSP](#psp)
    - [Papéis, Ações e Recursos](#pap%C3%A9is-a%C3%A7%C3%B5es-e-recursos)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Plataforma Unificada de Metodologia Ativa


## Base URL

A URL para qualquer requisição possui a url base **api**: `localhost:300/api/{resource}`
## Endpoints
Os endpoints estão divididos por funcionalidade.

### `/usuario/*`
São os endpoints relacionados ao CRUD do usuário.

#### `POST /usuario`

| Parametro             | Tipo    | Descricao                                            | Obrigatorio? |
| --------------------- | ------- | ---------------------------------------------------- | ------------ |
| nome                  | string  | Nome do usuário                                      | sim          |
| email                 | string  | Email do usuário                                     | sim          |
| senha                 | string  | Senha do usuário                                     | sim          |
| cpf                   | string  | CPF do usuário                                       | sim          |
| escolaridade          | string  | escolaridade do usuário                              | sim          |
| estado                | string  | UF do usuário                                        | sim          |
| cidade                | string  | Cidade do usuário                                    | sim          |
| bairro                | string  | Bairro do usuário                                    | sim          |
| rua                   | string  | Rua do usuário                                       | sim          |
| numero                | string  | Numero da residencia do usuário                      | sim          |
| complemento           | string  | Complemento do end. do usuário                       | sim          |
| endereco_categoria_id | integer | Residencial (id=1), Comercial(id=2)                  | sim          |
| profissao_id          | string  | Codigo da Classificação Brasileira de Ocupações 2016 | sim          |
| telefone              | string  | Telefone do usuário                                  | sim          |


- Exemplo de JSON:

      { 
        "nome": "Nome do Usuario",
        "email": "email@email.com",
        "senha": "senha",
        "cpf": "123123123",
        "escolaridade": "Ens. Superior Completo",
        "endereco": {
            "estado": "DF",
            "cidade": "Brasilia",
            "bairro": "Ceilandia",
            "rua": "Quadra 20",
            "numero": "74",
            "complemento": "Area Verde",
            "endereco_categoria_id": 1
        },
        "profissao_id": "2410-05",
        "telefone": {
        	"telefone": "61987566252"
        }
      }

- Retorno: `HTTP Status 201` e o body criado.

#### `GET /usuario:id`

| Parametro | Tipo    | Descricao     | Obrigatorio? |
| --------- | ------- | ------------- | ------------ |
| id        | integer | id do usuário | sim          |

- Retorno: `HTTP Status 200` e o usuario encontrado.

#### `GET /usuario`

- Retorno: `HTTP Status 200` e **todos** os usuários encontrados.

#### `PATCH /usuario/:id`

| Parametro             | Tipo    | Descricao                                            | Obrigatorio? |
| --------------------- | ------- | ---------------------------------------------------- | ------------ |
| id                    | integer | ID do usuário                                        | sim          |
| nome                  | string  | Nome do usuário                                      | nao*         |
| email                 | string  | Email do usuário                                     | nao*         |
| senha                 | string  | Senha do usuário                                     | nao*         |
| cpf                   | string  | CPF do usuário                                       | nao*         |
| escolaridade          | string  | escolaridade do usuário                              | nao*         |
| estado                | string  | UF do usuário                                        | nao*         |
| cidade                | string  | Cidade do usuário                                    | nao*         |
| bairro                | string  | Bairro do usuário                                    | nao*         |
| rua                   | string  | Rua do usuário                                       | nao*         |
| numero                | string  | Numero da residencia do usuário                      | nao*         |
| complemento           | string  | Complemento do end. do usuário                       | nao*         |
| endereco_categoria_id | integer | Residencial (id=1), Comercial(id=2)                  | nao*         |
| profissao_id          | string  | Codigo da Classificação Brasileira de Ocupações 2016 | nao*         |
| telefone              | string  | Telefone do usuário                                  | nao*         |
| papeis                | array de inteiros  | papeis do usuário                         | nao*         |

*ao menos um parâmetro é obrigatório

- Exemplo de JSON: 
 
        {
            "senha": "novaSenha",
        }


- Retorno: `HTTP Status 200` e os campos atualizados.

#### `DELETE /usuario/:id`

| Parametro | Tipo    | Descricao     | Obrigatorio? |
| --------- | ------- | ------------- | ------------ |
| id        | integer | id do usuário | sim          |

Retorno: `HTTP Status 200`.

### `/profissao/*`
É o endpoint relacionado à leitura das profissões cadastradas.

#### `GET /profissao`

Retorno: `HTTP Status 200` e a lista de profissões cadastradas.

### `/auth/*`

#### `POST /auth/login`

| Parametro | Tipo   | Descricao        | Obrigatorio? |
| --------- | ------ | ---------------- | ------------ |
| cpf       | string | cpf do usuário   | sim          |
| senha     | string | Senha do usuário | sim          |

- Exemplo de JSON: 
  
        {
            "cpf": "12312321",
            "senha": "pwd",
        }

Retorno: `HTTP Status 200` e o token JWT.

#### `GET /auth/tokenConfirmacao/:token`

Serve para confirmar o cadastro do usuário no PUMA. Quando o usuário se cadastra, é enviado um link para o e-mail dele. Ao acessar o link e validar o token, o usuário tem seu acesso liberado no sistema.

| Parametro | Tipo   | Descricao                                | Obrigatorio? |
| --------- | ------ | ---------------------------------------- | ------------ |
| token     | string | Token na url enviada no email do usuário | sim          |

Retorno: `HTTP Status 200`.

#### `POST /auth/tokenConfirmacao/`

Serve para reenviar o token de confirmação 

| Parametro | Tipo   | Descricao        | Obrigatorio? |
| --------- | ------ | ---------------- | ------------ |
| email     | string | Email do usuário | sim          |

- Exemplo de JSON: 
  
        {
            "email":"email@email.com"
        }
Retorno: `HTTP Status 200` e o email reenviado ao email solicitante.


### `/noticia/*`
São os endpoints relacionados ao CRUD de notícia.

#### `POST /noticia`

| Parametro            | Tipo    | Descricao                                                | Obrigatorio? |
| -------------------- | ------- | -------------------------------------------------------- | ------------ |
| titulo               | string  | Titulo da notícia                                        | sim          |
| subtitulo            | string  | Subtitulo da notícia                                     | sim          |
| texto                | string  | Texto da notícia                                         | sim          |
| url_thumbnail        | string  | Url da imagem do card da noticia na home                 | sim          |
| usuario_id           | integer | ID do usuario autor da notícia                           | sim          |
| noticia_categoria_id | integer | Destaque (id=1), Normal (id=2), Melhores Projetos (id=3) | sim          |

- Exemplo de JSON: 
  
        {
            "titulo": "Titulo da Noticia",
            "subtitulo": "Subtitulo da Noticia",
            "texto": "Texto da Noticia",
            "usuario_id": 26,
            "noticia_categoria_id": 1
        }


#### `GET /noticia/`

| Parametro          | Tipo    | Descricao                      | Obrigatorio? |
| ------------------ | ------- | ------------------------------ | ------------ |
| limit              | integer | Limite de notícias encontradas | nao          |
| idNoticiaCategoria | integer | ID da categoria da notícia     | nao          |

Exemplo de url com parâmetros:

`localhost:3000/api/noticia/?limit=3&idNoticiaCategoria=3`


- Retorno: `HTTP Status 200` e **todas** as noticias encontradas.

#### `GET /noticia/:id`

| Parametro | Tipo    | Descricao     | Obrigatorio? |
| --------- | ------- | ------------- | ------------ |
| id        | integer | id da notícia | sim          |

- Retorno: `HTTP Status 200` e a noticia encontrado.

#### `PATCH /noticia/:id`

| Parametro            | Tipo    | Descricao                                                | Obrigatorio? |
| -------------------- | ------- | -------------------------------------------------------- | ------------ |
| id                   | integer | Identificador da notícia                                 | sim          |
| titulo               | string  | Titulo da notícia                                        | nao*         |
| subtitulo            | string  | Subtitulo da notícia                                     | nao*         |
| texto                | string  | Texto da notícia                                         | nao*         |
| url_thumbnail        | string  | Url da imagem do card da noticia na home                 | nao*         |
| usuario_id           | integer | ID do usuario autor da notícia                           | nao*         |
| noticia_categoria_id | integer | Destaque (id=1), Normal (id=2), Melhores Projetos (id=3) | nao*         |

*ao menos um é obrigatório

- Exemplo de JSON: 
  
        {
            "titulo": "Alteracao do Titulo da Noticia",
        }

#### `DELETE /noticia/:id`

| Parametro | Tipo    | Descricao     | Obrigatorio? |
| --------- | ------- | ------------- | ------------ |
| id        | integer | ID da noticia | sim          |

Retorno: `HTTP Status 200`.

### `/projeto/*`
São os endpoints relacionados ao CRUD de notícia.

#### `POST /projeto`

Parâmetros-base e PF:

| Parametro    | Tipo    | Descricao                                | Obrigatorio? |
| ------------ | ------- | ---------------------------------------- | ------------ |
| usuario_id   | integer | ID do usuário autor do projeto           | sim          |
| titulo       | string  | Titulo do projeto                        | sim          |
| problematica | text    | Problemática do projeto                  | sim          |
| objetivo     | text    | Objetivo do projeto                      | sim          |
| psp_id       | integer | ID do PSP (ver lista de identificadores) | sim          |
| anexo        | string  | URL do anexo do projeto                  | nao          |

Parâmetros adicionais para PJ:

| Parametro             | Tipo   | Descricao                                      | Obrigatorio? |
| --------------------- | ------ | ---------------------------------------------- | ------------ |
| cnpj                  | string | CNPJ da empresa                                | sim          |
| nome_fantasia         | string | Nome fantasia da empresa                       | sim          |
| nome                  | string | Nome da empresa                                | sim          |
| estado                | string | Estado do endereço da empresa                  | sim          |
| cidade                | string | Cidade do endereço da empresa                  | sim          |
| bairro                | string | Bairro do endereço da empresa                  | sim          |
| rua                   | string | Rua do endereço da empresa                     | sim          |
| numero                | string | Numero do endereço da empresa                  | sim          |
| complemento           | string | Complemento do endereço da empresa             | não          |
| endereco_categoria_id | string | Categoria do endereço da empresa (2=Comercial) | sim          |

- Exemplo de JSON: 
  - PF

        {   
            "usuario_id": 1
            "titulo": "Titulo do Projeto",
            "problematica": "Problemática do Projeto",
            "objetivo": "Objetivo do Projeto",
            "psp_id": 18,
            "empresa_id": 1
        }
  - PJ
   
        {   
            "usuario_id": 1
            "titulo": "Titulo do Projeto",
            "problematica": "Problemática do Projeto",
            "objetivo": "Objetivo do Projeto",
            "psp_id": 26,
            "empresa": {
                "cnpj": "289730187",
                "nome_fantasia": "Maricota Egenheiros Associados"
                "nome": "Maricota Eng Joao"
                "endereco": {
                    "estado": "GO"
                    "cidade": "Goiânia"
                    "bairro": "Alagados"
                    "rua": "Rua 10"
                    "numero": "123"
                    "complemento": null
                    "endereco_categoria_id":
                }
            }
        }

#### `GET /projeto/`

| Parametro         | Tipo    | Descricao                      | Obrigatorio? |
| ----------------- | ------- | ------------------------------ | ------------ |
| limit             | integer | Limite de projetos encontradas | nao          |
| projeto_status_id | integer | ID do status do projeto        | nao          |

Exemplo de url com parâmetros:

`localhost:3000/api/projeto/?limit=3&projeto_status_id=3`


- Retorno: `HTTP Status 200` e **todas** os projetos encontradas.

#### `GET /projeto/:id`

| Parametro | Tipo    | Descricao     | Obrigatorio? |
| --------- | ------- | ------------- | ------------ |
| id        | integer | id da notícia | sim          |

- Retorno: `HTTP Status 200` e o projeto encontrado.

#### `PATCH /projeto/:id`

| Parametro         | Tipo    | Descricao                      | Obrigatorio? |
| ----------------- | ------- | ------------------------------ | ------------ |
| id                | integer | Identificador do projeto       | sim          |
| titulo            | string  | Titulo do projeto              | nao*         |
| problematica      | text    | Problematica do projeto        | nao*         |
| objetivo          | text    | Objetivo do projeto            | nao*         |
| anexo             | string  | URL do anexo do projeto        | nao*         |
| usuario_id        | integer | ID do usuario autor do projeto | nao*         |
| psp_id            | integer | ID do PSP do projeto           | nao*         |
| projeto_status_id | integer | ID do status do projeto        | nao*         |

*ao menos um é obrigatório

- Exemplo de JSON: 
  
        {
            "titulo": "Alteracao do Titulo do Projeto",
        }

#### `DELETE /projeto/:id`

| Parametro | Tipo    | Descricao     | Obrigatorio? |
| --------- | ------- | ------------- | ------------ |
| id        | integer | ID do projeto | sim          |

Retorno: `HTTP Status 200`.

### `/psp/*`
São os endpoints relacionados ao CRUD de psp.

#### `POST /psp`

Cria um novo PSP ou um PSP filho (subcategoria).

| Parametro    | Tipo    | Descricao                                | Obrigatorio? |
| ------------ | ------- | ---------------------------------------- | ------------ |
|nome|string| nome do psp| sim|
|descricao|string| descrição do psp| sim|
|psp_pai_id|integer|id do PSP pai. Caso seja enviado, esse psp será entendido como um PSP subcategoria| não

Exemplo: 

```
{        
    "descricao": "Outras",
    "psp_pai_id": 3,
    "nome": "Outras",
}
```

#### `GET /psp/`

- Retorno: `HTTP Status 200` e **todos** os psp encontradas.

#### `GET /psp/:id`

| Parametro | Tipo    | Descricao     | Obrigatorio? |
| --------- | ------- | ------------- | ------------ |
| id        | integer | id do psp | sim          |

- Retorno: `HTTP Status 200` e o psp encontrado.

#### `PATCH /psp/:id`

Edita um PSP ou um PSP filho (subcategoria).

| Parametro    | Tipo    | Descricao                                | Obrigatorio? |
| ------------ | ------- | ---------------------------------------- | ------------ |
|nome|string| nome do psp| não*|
|descricao|string| descrição do psp| não*|
|psp_pai_id|integer|id do PSP pai. Caso seja enviado, esse psp será entendido como um PSP subcategoria| não*

Exemplo: 

```
{        
    "descricao": "Outras",

}
```
* Pelo menos um é obrigatório.

#### `DELETE /psp/:id`

| Parametro | Tipo    | Descricao     | Obrigatorio? |
| --------- | ------- | ------------- | ------------ |
| id        | integer | ID do psp | sim          |

Retorno: `HTTP Status 200`.

### `/competencia/*`
São os endpoints relacionados ao CRUD de competência.

#### `POST /competencia`

Cria uma competência ou uma competência filha.

| Parametro    | Tipo    | Descricao                                | Obrigatorio? |
| ------------ | ------- | ---------------------------------------- | ------------ |
|competencia_categoria_id | integer | categoria da competência: 1 - tecnica 2 - transversal|sim, caso a competência for do tipo pai
|competencia_pai_id | integer | identificador da competência pai | não
|nome | string | nome da competência | sim|
|descricao | string | descricão da competência | sim

Exemplo:

```
{
    "competencia_categoria_id": 1,
    "competencia_pai_id": null,
    "nome": "Competencia 1",
    "descricao": "Lorem ipsum",
}
```

#### `GET /competencia/`

- Retorno: `HTTP Status 200` e **todos** as competências encontradas.

#### `GET /competencia/:id`

| Parametro | Tipo    | Descricao     | Obrigatorio? |
| --------- | ------- | ------------- | ------------ |
| id        | integer | id da competência | sim          |

- Retorno: `HTTP Status 200` e a competência encontrada.

#### `PATCH /competencia/:id`

Edita uma competência ou uma competência filha.

| Parametro    | Tipo    | Descricao                                | Obrigatorio? |
| ------------ | ------- | ---------------------------------------- | ------------ |
|competencia_categoria_id | integer | categoria da competencia: 1 - tecnica 2 - transversal|não*
|competencia_pai_id | integer | identificador da categoria pai | não*
|nome | string | nome da categoria | não*|
|descricao | string | descricão da categoria | não*

Exemplo: 

```
{        
    "nome": "Competencia 5",
    "descricao": "update da descricao"

}
```
* Pelo menos um é obrigatório.

#### `DELETE /competencia/:id`

| Parametro | Tipo    | Descricao     | Obrigatorio? |
| --------- | ------- | ------------- | ------------ |
| id        | integer | ID do psp | sim          |

Retorno: `HTTP Status 200`.

## Lista de Identificadores

### Papeis

| id  | papel       |
| --- | ----------- |
| 1   | ADMIN       |
| 2   | COORDENADOR |
| 3   | PROFESSOR   |
| 4   | ALUNO       |
| 5   | MONITOR     |
| 6   | SECRETARIA  |
| 7   | USUARIO     |

### Categoria de Notícias

| id  | categoria         |
| --- | ----------------- |
| 1   | Melhores Projetos |
| 2   | Destaque          |
| 3   | Normal            |

### Categoria dos Endereços

| id  | categoria   |
| --- | ----------- |
| 1   | Residencial |
| 2   | Comercial   |

### Categoria das Competências

| id  | categoria   |
| --- | ----------- |
| 1   | Técnica |
| 2   | Transversal   |


### Status dos Projetos

| id  | status     |
| --- | ---------- |
| 1   | Em análise |
| 2   | Aceito     |
| 3   | Rejeitado  |

### PSP

Ao cadastrar um novo projeto, não é necessário enviar o id do psp_pai, basta enviar o identificador do PSP filho relacionado a uma grande área de um dos PSP. Exemplo: se quiser enviar um projeto "PSP 1 - Análise de dados", basta enviar o psp_id = 9. 

| id  | psp_pai | nome                                                                   | descricao                                                              |
| --- | ------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 1   |         | PSP 1                                                                  | Probabilidade e Estatística                                            |
| 2   |         | PSP 2                                                                  | Sistemas de informação                                                 |
| 3   |         | PSP 3                                                                  | Livre                                                                  |
| 4   |         | PSP 4                                                                  | Planejamento e controle da Produção                                    |
| 5   |         | PSP 5                                                                  | Gestão da Qualidade                                                    |
| 6   |         | PSP 6                                                                  | Engenharia do Produto                                                  |
| 7   |         | PSP 7                                                                  | Gestão estratégica                                                     |
| 8   |         | N/A                                                                    | Não sei em qual categoria meu projeto se encaixa                       |
| 9   | 1       | Análise de Banco de Dados                                              | Análise de Banco de Dados                                              |
| 10  | 1       | Criação de Questionários de Pesquisa                                   | Criação de Questionários de Pesquisa                                   |
| 11  | 1       | Outras                                                                 | Outras                                                                 |
| 12  | 2       | Projeto de Sistemas de Informação                                      | Projeto de Sistemas de Informação                                      |
| 13  | 2       | Outras                                                                 | Outras                                                                 |
| 14  | 3       | Outras                                                                 | Outras                                                                 |
| 15  | 4       | Previsão de Demanda                                                    | Previsão de Demanda                                                    |
| 16  | 4       | Gestão de Estoque                                                      | Gestão de Estoque                                                      |
| 17  | 4       | Criação de Ferramentas de Apoio ao Planejamento e Controle da Produção | Criação de Ferramentas de Apoio ao Planejamento e Controle da Produção |
| 18  | 4       | Outras                                                                 | Outras                                                                 |
| 19  | 5       | Mapeamento de Processos                                                | Mapeamento de Processos                                                |
| 20  | 5       | Melhoria Contínua de Processos                                         | Melhoria Contínua de Processos                                         |
| 21  | 5       | Cadeia de Valor                                                        | Cadeia de Valor                                                        |
| 22  | 5       | Outras                                                                 | Outras                                                                 |
| 23  | 6       | Elaboração de Projeto Conceitual de Produto                            | Elaboração de Projeto Conceitual de Produto                            |
| 24  | 6       | Outras                                                                 | Outras                                                                 |
| 25  | 6       | Definição de Objetivos Estratégicos                                    | Definição de Objetivos Estratégicos                                    |
| 26  | 6       | Viabilidade Econômica                                                  | Viabilidade Econômica                                                  |
| 27  | 6       | Desdobramento de Metas                                                 | Desdobramento de Metas                                                 |
| 28  | 6       | Outras                                                                 | Outras                                                                 |

### Papéis, Ações e Recursos

(acao):any = pode executar a ação em qualquer registro.

(acao):own = pode executar a ação em registros que ele seja dono/responsável. 

| papel       | ação       | recurso |
| ----------- | ---------- | ------- |
| ADMIN       | read:any   | usuario |
| ADMIN       | update:any | usuario |
| ADMIN       | delete:any | usuario |
| ADMIN       | create:any | projeto |
| ADMIN       | read:any   | projeto |
| ADMIN       | update:any | projeto |
| ADMIN       | delete:any | projeto |
| ADMIN       | create:any | noticia |
| ADMIN       | update:any | noticia |
| ADMIN       | delete:any | noticia |
| COORDENADOR | read:any   | usuario |
| COORDENADOR | update:own | usuario |
| COORDENADOR | create:any | projeto |
| COORDENADOR | read:any   | projeto |
| COORDENADOR | update:any | projeto |
| COORDENADOR | delete:any | projeto |
| COORDENADOR | create:any | noticia |
| COORDENADOR | update:own | noticia |
| COORDENADOR | delete:own | noticia |
| PROFESSOR   | read:any   | usuario |
| PROFESSOR   | update:own | usuario |
| PROFESSOR   | delete:own | usuario |
| PROFESSOR   | create:any | projeto |
| PROFESSOR   | read:any   | projeto |
| ALUNO       | read:any   | usuario |
| ALUNO       | update:own | usuario |
| ALUNO       | delete:own | usuario |
| ALUNO       | create:any | projeto |
| ALUNO       | read:any   | projeto |
| MONITOR     | read:any   | usuario |
| MONITOR     | update:own | usuario |
| MONITOR     | delete:own | usuario |
| MONITOR     | create:any | projeto |
| MONITOR     | read:any   | projeto |
| MONITOR     | read:any   | noticia |
| SECRETARIA  | read:any   | usuario |
| SECRETARIA  | update:own | usuario |
| SECRETARIA  | delete:own | usuario |
| SECRETARIA  | create:any | projeto |
| SECRETARIA  | read:any   | projeto |
| SECRETARIA  | read:any   | noticia |
| USUARIO     | read:any   | usuario |
| USUARIO     | update:own | usuario |
| USUARIO     | delete:own | usuario |
| USUARIO     | create:any | projeto |
| USUARIO     | read:own   | projeto |
