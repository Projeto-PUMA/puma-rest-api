# Plataforma Unificada de Metodologia Ativa

## Endpoints
Os endpoints estão divididos por funcionalidade.

## Base URL

A URL para qualquer requisição possui a url base **api**: `localhost:300/api/{resource}`

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

### `/noticia/*`
São os endpoints relacionados ao CRUD de notícia.

#### `POST /noticia`

| Parametro            | Tipo    | Descricao                                                | Obrigatorio? |
| -------------------- | ------- | -------------------------------------------------------- | ------------ |
| titulo               | string  | Titulo da notícia                                        | sim          |
| subtitulo            | string  | Subtitulo da notícia                                     | sim          |
| texto                | string  | Texto da notícia                                         | sim          |
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

- Retorno: `HTTP Status 200` e o usuario encontrado.

#### `PATCH /noticia/:id`

| Parametro            | Tipo    | Descricao                                                | Obrigatorio? |
| -------------------- | ------- | -------------------------------------------------------- | ------------ |
| id                   | integer | Identificador da notícia                                 | sim          |
| titulo               | string  | Titulo da notícia                                        | nao*         |
| subtitulo            | string  | Subtitulo da notícia                                     | nao*         |
| texto                | string  | Texto da notícia                                         | nao*         |
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

#### `POST /login`

| Parametro | Tipo   | Descricao        | Obrigatorio? |
| --------- | ------ | ---------------- | ------------ |
| cpf       | string | Email do usuário | sim          |
| senha     | string | Senha do usuário | sim          |

- Exemplo de JSON: 
  
        {
            "email": "email@email",
            "sennha": "pwd",
        }


Retorno: `HTTP Status 200`.

#### `GET /confirmacaoUsuario/:token`

| Parametro | Tipo   | Descricao                                | Obrigatorio? |
| --------- | ------ | ---------------------------------------- | ------------ |
| token     | string | Token na url enviada no email do usuário | sim          |

Retorno: `HTTP Status 200`.