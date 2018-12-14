const express = require('express');
const noticiaController = require('./controller')
const router = express.Router();
const authorize = require('../middleware/authorization');

router.get('/', async (req, res) => {
    const response = await noticiaController.getAll();
    res.status(response.statusCode);
    res.json(response);
});

router.get('/:id', async (req, res) => {
    const response = await noticiaController.getById(req.params.id);
    res.status(response.statusCode);
    res.json(response);
});

router.post('/', async (req, res) => {
    const response = await noticiaController.create(req.body);
    res.status(response.statusCode);
    res.json(response);
});

router.delete('/:id', async (req, res) => {
    const response = await noticiaController.delete(req.params.id);
    res.status(response.statusCode);
    res.json('oi');
});

router.patch('/:id', async (req, res) => {
    const response = await noticiaController.patch(req.params.id, req.body);
    res.status(response.statusCode);
    res.json(response);
});

module.exports = router;