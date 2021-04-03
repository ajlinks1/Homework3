// const { StatusCodes, ReasonPhrases } = require('http-status-codes');

module.exports = (req, res, next) => {
  let datesV = req.headers['date-validation'] || req.query['date-validation'];

  console.log('date validation middleware', datesV);
  datesV = parseInt(datesV, 10);
  if (!datesV || Number.isNaN(datesV)) {
    console.log('oops', datesV, 'is not a number', typeof datesV, Number.isNaN(datesV));
    return res.status(401).end();
  }

  if (req.headers['date-validation'] && req.query['date-validation'] && req.headers['date-validation'] !== req.query['date-validation']) {
    console.log('both dates are defined, but not the same');
    return res.status(401).end();
  }

  const serverTime = Date.now() / 1000;

  const FIVEMINS = 60 * 5;
  const timeDiff = Math.abs(datesV - serverTime);
  if (timeDiff > FIVEMINS) {
    console.log('CANCELLING REQUEST', timeDiff);
    return res.status(401).end();
  }
  console.log(timeDiff, '- continuing request');

  req.dateValidation = timeDiff;

  next();
};
