const Express = require('express');

const dateValidator = require('../middlewares/dateValidation');
const stopper = require('../middlewares/deleteStop');
const errorCatching = require('../middlewares/errorCatcher');
const logging = require('../middlewares/logger');
const parseJson = require('../middlewares/parser');
const randomResponse = require('../middlewares/random');

const router = Express.Router();

router.use(Express.json);
router.use(parseJson);
router.use(stopper.deleting);
router.use(dateValidator.date);
router.use(logging.logs);
router.use(randomResponse.randomized);
router.use(errorCatching.errors);

module.exports = router;
