const { StatusCodes, ReasonPhrases } = require('http-status-codes');

exports.errors = (req, res, next) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('We are sorry, the error was:', ReasonPhrases.INTERNAL_SERVER_ERROR);
};
