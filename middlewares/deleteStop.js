const { StatusCodes, ReasonPhrases } = require('http-status-codes');

exports.deleting = ('/', (req, res, next) => {
  if (req.method === 'DELETE') {
    res.status(StatusCodes.METHOD_NOT_ALLOWED).send(ReasonPhrases.METHOD_NOT_ALLOWED);
  } else {
    next();
  }
});
