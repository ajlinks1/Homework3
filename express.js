const Express = require('express');

const app = Express();
const parser = require('./middlewares/parser');
const dateValidator = require('./middlewares/dateValidation');
const stopper = require('./middlewares/deleteStop');
const errorCatching = require('./middlewares/errorCatcher');
const logging = require('./middlewares/logger');
const randomResponse = require('./middlewares/random');

app.use('/', parser);
app.use('/', stopper);
app.use('/', dateValidator);
app.use('/', logging);
app.use('/', randomResponse);
app.use('/', errorCatching);

app.listen(8080, () => { console.log('listening....'); });
