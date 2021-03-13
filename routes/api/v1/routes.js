const express = require('express');

const router = express.Router();

const apiV1ForecastController = require('../../../controllers/api/v1/forecastController');

router.get('/forecast', apiV1ForecastController.index);

module.exports = router;
