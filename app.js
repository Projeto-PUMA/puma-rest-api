const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const Knex = require('knex');
const knexConfig = require('./knexfile');
const { Model } = require('objection');
const usuario = require('./src/api/usuario/routes');
const authentication = require('./src/api/auth/routes');
const authenticate = require('./src/api/middleware/authentication');

const app = express();

const knex = Knex(knexConfig.development);

Model.knex(knex);
app.use(authenticate);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/usuario', usuario);
app.use('/api/v1/auth', authentication);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    eror: req.app.get('env') === 'development' ? err : {}
  });

});

module.exports = app;
