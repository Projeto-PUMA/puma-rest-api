const jwt = require('jsonwebtoken');
require('dotenv').config();
const { errorResponse } = require('../../util/response');

module.exports = (req, res, next) => {
    if (req.headers.authorization) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JTWKEY);
            req.info = decoded;
            console.log(req.info);
            next();
        } catch (err) {
            const response = errorResponse('Bad Request');
            return res.status(response.statusCode).json(response);
        }
    }
    else {
        const response = errorResponse('Bad Request');
        return res.status(response.statusCode).json(response);
    }
}
