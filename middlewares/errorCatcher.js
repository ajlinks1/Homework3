const { StatusCodes, ReasonPhrases } = require('http-status-codes');

module.exports = (req, res, next) => {
  console.log('errorCatcher...');
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('We are sorry, the error was:', ReasonPhrases.INTERNAL_SERVER_ERROR);
};
