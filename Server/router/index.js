const router = require('express').Router();
const users = require('./users');
const donations = require('./donations');
const fondations = require('./fondations');
const { authController } = require('../controllers');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.use('/users', users);
router.use('/fondations', fondations);
router.use('/donations', donations)

module.exports = router;
