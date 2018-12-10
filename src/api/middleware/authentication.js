const jwt = require('jsonwebtoken');
require('dotenv').config();
const { errorResponse } = require('../../util/response');

module.exports = (req, res, next) => {
    console.log(req.headers.authorization);
    if (req.headers.authorization) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JTWKEY);
            req.info = decoded;
            next();
        } catch (err) {
            const response = errorResponse('Bad Request');
            return res.status(response.statusCode).json(response);
        }
    }
    else {
        console.log('next');
        next();
    }
}