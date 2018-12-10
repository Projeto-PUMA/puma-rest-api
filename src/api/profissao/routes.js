const express = require('express');
const router = express.Router();
const authorize = require('../middleware/authorization');
const profissao = require('./profissao');

router.get('/', async (req, res) => {
    const response = await profissao.query();
    res.json(response);
});

module.exports = router;