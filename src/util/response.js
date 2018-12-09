HttpStatus = require('http-status');

const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
    data,
    statusCode,
});

const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => ({
    error: message,
    statusCode
});

module.exports = { defaultResponse, errorResponse }