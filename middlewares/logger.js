const win = require('winston');

const logger = win.createLogger({
  transports: [
    new win.transports.Console({
      format: win.format.combine(
        win.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        win.format.json(),
      ),
    }),
  ],
});

exports.logs = (req, res, next) => {
  logger.log({
    level: 'info',
    serverTime: req.serverTime,
    method: req.method,
    url: req.originalUrl,
    body: req.body,
    query: req.query,
    headers: req.headers,
    dateValidation: req.dateValidation,
  });
  next();
};
