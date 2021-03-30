const { StatusCodes } = require('http-status-codes');

function getRandomNum(max, min) {
  Math.floor(Math.random() * (max - min + 1) + min);
}
exports.randomized = (req, res, next) => {
  if ((getRandomNum(100, 1) % 2) === 0) {
    res.status(StatusCodes.OK).send('Hello World!');
  } else {
    res.send('Oops');
  }
  next();
};
