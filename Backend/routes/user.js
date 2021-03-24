const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.create);

router.post('/login', userCtrl.findOne);

module.exports = router;