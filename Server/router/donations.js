const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { dataController } = require('../controllers');


router.put('/:fondationId', auth(), dataController.addDonation);

module.exports = router