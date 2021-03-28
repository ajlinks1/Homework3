const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(function(req, res, next){
  req = bodyParser.json(req);
  next();
})
