const { StatusCodes } = require('http-status-codes');

function getRandomNum(max, min) {
  Math.floor(Math.random() * (max - min + 1) + min);
}
module.exports = (req, res, next) => {
  console.log('randomresponse...');
  if ((getRandomNum(100, 1) % 2) === 0) {
    return res.status(StatusCodes.OK).send('Hello World!');
  }

  throw new Error('Oops');
};
