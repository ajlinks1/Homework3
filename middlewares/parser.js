const bodyParser = require('body-parser');

module.exports = (req, res, next) => {
  req.body = bodyParser.json();
  next();
};
