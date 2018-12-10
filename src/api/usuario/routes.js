const express = require('express');
const usuarioController = require('./controller')
const router = express.Router();
const authorize = require('../middleware/authorization');

router.get('/', authorize('ADMIN'), async (req, res) => {
    const response = await usuarioController.getAll();

    res.status(response.statusCode);
    res.json(response);
});

router.get('/:cpf', async (req, res) => {
    const response = await usuarioController.getByCpfWithPapel(req.params.cpf);

    res.status(response.statusCode);
    res.json(response);
});

router.post('/', async (req, res) => {
    const response = await usuarioController.create(req.body);

    res.status(response.statusCode);
    res.json(response);
});

router.delete('/:cpf', async (req, res) => {
    const response = await usuarioController.delete(req.params.cpf);

    res.status(response.statusCode);
    res.json(response);
});

router.patch('/:cpf', async (req, res) => {
    const response = await usuarioController.patch(req.params.cpf, req.body);

    res.status(response.statusCode);
    res.json(response);
});

module.exports = router;