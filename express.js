const express = require('express');

const app = express();

const dateValidator = require('./middlewares/dateValidation');
const stopper = require('./middlewares/deleteStop');
const errorCatching = require('./middlewares/errorCatcher');
const logging = require('./middlewares/logger');
const parseJson = require('./middlewares/parser');
const randomResponse = require('./middlewares/random');

app.use('/', parseJson);
app.use('/', stopper);
app.use('/', dateValidator);
app.use('/', logging);
app.use('/', randomResponse);
app.use('/', errorCatching);

app.listen(8080);
