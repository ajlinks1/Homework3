const express = require('express');

const app = express();

const dateValidator = require('./middleware/dateValidation');
const stopper = require('./middleware/deleteStop');
const errorCatching = require('./middleware/errorCatcher');
const logging = require('./middleware/logger');
const parseJson = require('./middleware/parser');
const randomResponse = require('./middleware/random');

app.use('/', parseJson);
app.use('/', stopper);
app.use('/', dateValidator);
app.use('/', logging);
app.use('/', randomResponse);
app.use('/', errorCatching);

app.listen(8080);
