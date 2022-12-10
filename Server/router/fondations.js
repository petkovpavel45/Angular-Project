const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { dataController } = require('../controllers');

// middleware that is specific to this router

router.get('/', dataController.getAllItems);
router.post('/', auth(), dataController.createFondation);

router.get('/:fondationId', dataController.getFondation);
router.put('/:fondationId', auth(), dataController.updateFondation);
router.delete('/:fondationId', auth(), dataController.deleteFondation);


module.exports = router