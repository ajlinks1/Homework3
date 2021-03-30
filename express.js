const Express = require('express');

const app = Express();

const router = require('./routes/router');

app.all('/', router);

app.listen(8080);
