const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/api/user/signup', userCtrl.create);

router.post('/api/user/login', userCtrl.findOne);

module.exports = router;