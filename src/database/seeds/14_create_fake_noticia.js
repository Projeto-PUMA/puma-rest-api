
exports.seed = knex => (
  knex('noticia').del()
    .then(() => (knex('noticia').insert([
      {
        "url_thumbnail": "https:\/\/i.imgur.com\/vq40Qov.jpg",
        "titulo": "Titulo da noticia",
        "subtitulo": "subtitulo da noticia",
        "texto": "Texto da noticia",
        "usuario_id": 1,
        "noticia_categoria_id": 2
      },
      {
        "url_thumbnail": "https:\/\/i.imgur.com\/vq40Qov.jpg",
        "titulo": "Titulo da noticia",
        "subtitulo": "subtitulo da noticia",
        "texto": "Texto da noticia",
        "usuario_id": 1,
        "noticia_categoria_id": 3
      },
      {
        "url_thumbnail": "https:\/\/i.imgur.com\/vq40Qov.jpg",
        "titulo": "Titulo da noticia",
        "subtitulo": "subtitulo da noticia",
        "texto": "Texto da noticia",
        "usuario_id": 1,
        "noticia_categoria_id": 3
      },
      {
        "url_thumbnail": "https:\/\/www.infoescola.com\/wp-content\/uploads\/2008\/05\/puma-36285292.jpg",
        "titulo": "Titulo da noticia",
        "subtitulo": "",
        "texto": "<p>Texto da noticia<\/p>\n",
        "usuario_id": 1,
        "noticia_categoria_id": 1
      },
      {
        "url_thumbnail": "https:\/\/www.infoescola.com\/wp-content\/uploads\/2008\/05\/puma-714955930.jpg",
        "titulo": "Titulo da noticia",
        "subtitulo": "",
        "texto": "<p>Texto da noticia<\/p>\n",
        "usuario_id": 1,
        "noticia_categoria_id": 1
      },
      {
        "url_thumbnail": "http:\/\/www.osmais.com\/wallpapers\/201408\/linda-flor-no-cepo-wallpaper.jpg",
        "titulo": "Titulo da noticia",
        "subtitulo": "",
        "texto": "<p>Texto da noticia<\/p>\n",
        "usuario_id": 1,
        "noticia_categoria_id": 2
      },
      {
        "url_thumbnail": "https:\/\/www.infoescola.com\/wp-content\/uploads\/2008\/05\/puma-36285292.jpg",
        "titulo": "os menino é de verdade",
        "subtitulo": "",
        "texto": "<p>so ando com maloqueiro<\/p>\n",
        "usuario_id": 1,
        "noticia_categoria_id": 1
      },
      {
        "url_thumbnail": "https:\/\/i.imgur.com\/YzVVX4t.jpg",
        "titulo": "asjdaskdjk",
        "subtitulo": "",
        "texto": "<p>asdasd<\/p>\n",
        "usuario_id": 1,
        "noticia_categoria_id": 1
      },
      {
        "url_thumbnail": "https:\/\/farm5.staticflickr.com\/4803\/33052315638_b818859abe_z.jpg",
        "titulo": "“Estou preparado para a porrada”, diz Wagner Moura sobre o filme “Marighella”",
        "subtitulo": "",
        "texto": "<p style=\"text-align:start;\"><span style=\"color: rgb(64,64,64);font-size: 1.1rem;font-family: Merriweather, \"Times New Roman;\">\"'Cuidado que o Marighella é valente', alertou um agente da repressão antes de umas das muitas tentativas de captura do líder revolucionário durante a ditadura militar\". A passagem da biografia de<\/span> <a href=\"https:\/\/www.brasildefato.com.br\/2016\/11\/04\/47-anos-da-morte-de-marighella-o-legado-do-principal-opositor-da-ditadura-militar\/\" target=\"_self\"><span style=\"color: rgb(195,59,83);font-size: inherit;font-family: inherit;\">Carlos Marighella<\/span><\/a><span style=\"color: rgb(64,64,64);font-size: 1.1rem;font-family: Merriweather, \"Times New Roman;\">, escrita por Mário Magalhães, retrata uma das principais facetas do protagonista do filme dirigido por Wagner Moura, que estreia na 69ª edição do Festival de Berlim, na Alemanha, entre os dias 7 e 17 de fevereiro.<\/span><\/p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(64,64,64);font-size: 1.1rem;font-family: Merriweather, \"Times New Roman;\">Essa é a primeira vez que Wagner Moura, mais conhecido por seu papel como Capitão Nascimento no filme “Tropa de Elite”, trabalha como diretor. De cara, ele assumiu como desafio reconstruir parte da trajetória de Marighella: poeta, militante comunista desde a juventude, deputado federal e fundador do maior grupo armado de oposição à ditadura, a Ação Libertadora Nacional (ALN).<\/span><\/p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(64,64,64);font-size: 1.1rem;font-family: Merriweather, \"Times New Roman;\">O filme, que vai do drama à ação, conta justamente sobre o período mais conturbado e radical da vida do baiano como guerrilheiro. “A minha escolha por esse recorte também atende a vontade de que o filme seja popular, que muita gente veja, sobretudo as pessoas pelas quais Marighella lutava, o que é uma questão quando você pensa que o cinema é um divertimento elitizado no Brasil”, explica, em entrevista exclusiva ao<\/span> <span style=\"color: rgb(64,64,64);font-size: 1.1rem;font-family: Merriweather, \"Times New Roman;\"><strong>Brasil de Fato<\/strong>.<\/span><\/p>\n",
        "usuario_id": 1,
        "noticia_categoria_id": 2
      },
      {
        "url_thumbnail": "https:\/\/i.imgur.com\/EmQ1Uw8.jpg",
        "titulo": "aajskaasjkajks",
        "subtitulo": "",
        "texto": "<p>asdasdasdasd<\/p>\n",
        "usuario_id": 1,
        "noticia_categoria_id": 2
      },
      {
        "url_thumbnail": "http:\/\/www.kisax.com\/images\/Nelly-Furtado\/Nelly-Furtado-17.JPG",
        "titulo": "tchau pra falsidade",
        "subtitulo": "",
        "texto": "<p>nelly furtado sou seu fã<\/p>\n",
        "usuario_id": 1,
        "noticia_categoria_id": 1
      },
      {
        "url_thumbnail": "https:\/\/i.imgur.com\/B4EWGEY.jpg",
        "titulo": "asdjhbadh",
        "subtitulo": "",
        "texto": "<p>asdasdd<\/p>\n",
        "usuario_id": 1,
        "noticia_categoria_id": 2
      },
      {
        "url_thumbnail": "http:\/\/www.kisax.com\/images\/Nelly-Furtado\/Nelly-Furtado-17.JPG",
        "titulo": "Titulo da noticia",
        "subtitulo": "",
        "texto": "<p>nelly linda<\/p>\n",
        "usuario_id": 1,
        "noticia_categoria_id": 1
      },
      {
        "url_thumbnail": "https:\/\/s2.glbimg.com\/837c_FiCwfsLH3EzP3Jfpt-SPzw=\/0x0:4896x3264\/1600x0\/smart\/filters:strip_icc()\/i.s3.glbimg.com\/v1\/AUTH_59edd422c0c84a879bd37670ae4f538a\/internal_photos\/bs\/2018\/F\/p\/VEzFlxSduav8qFuD9HQg\/alex-knight-199368-unsplash.jpg",
        "titulo": "Veja as expectativas de economistas sobre o novo governo 1 mês após a posse",
        "subtitulo": "",
        "texto": "<p>E assim começa a era dos robôs<\/p>\n",
        "usuario_id": 1,
        "noticia_categoria_id": 1
      },
      {
        "url_thumbnail": "https:\/\/s2.glbimg.com\/gYdt3Aq2RsVMaXOTt0qMy_8-8js=\/0x0:1280x960\/1600x0\/smart\/filters:strip_icc()\/i.s3.glbimg.com\/v1\/AUTH_59edd422c0c84a879bd37670ae4f538a\/internal_photos\/bs\/2019\/Q\/I\/BoJesqTAuJgjQUE99ZZQ\/dentro4-003-.jpg",
        "titulo": "Fotos mostram como era área administrativa da Vale destruída após barragem se romper em Brumadinho",
        "subtitulo": "",
        "texto": "<p>Fotos da vale, vale nada<\/p>\n",
        "usuario_id": 1,
        "noticia_categoria_id": 3
      }
    ])))
);


