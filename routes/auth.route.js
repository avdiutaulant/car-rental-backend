const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/register', authController.registerUser);

router.post('/login', authController.loginUser);

router.get('/my-profile', auth, authController.getUserProfile);

module.exports = router;
