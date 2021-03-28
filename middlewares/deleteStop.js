const express = require('express');
const { ReasonPhrases } = require('http-status-codes');
const { StatusCodes } = require('http-status-codes');

const app = express();

app.use('/', (req, res, next) => {
  if (req.method === 'DELETE') {
    res.status(StatusCodes.METHOD_NOT_ALLOWED).send('');
  } else {
    next();
  }
});
