const express = require('express');
const router = express.Router();
const authorize = require('../middleware/authorization');
const noticia = require('./noticia');

router.get('/', async (req, res) => {
    const response = await noticia.query();
    res.json(response);
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const body = { titulo: 'projeto novo', subtitulo: 'projeto novo', texto: 'realmente novo', cpfUsuario: 'user' }

    const options = {
        relate: true // relate true eh para relacionar num n:m ja existente
    }

    const response = await noticia.query().insert(body, options);
    res.json(response);
});

module.exports = router;