const express = require('express');
const authController = require('./controller')
const router = express.Router();

router.post('/', async (req, res) => {
    const response = await authController.auth(req.body);
    res.status(response.statusCode);
    res.json(response);
});

module.exports = router;