const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controllers');
router.get('/login', userController.get_login);

module.exports = router;