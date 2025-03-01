const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Auth Routes
router.post('/signup', authController.signUp);
router.post('/login', authController.login);
router.post('/check-user', authController.checkUser); // Add this route
router.get('/session', authController.getSession);
router.post('/logout', authController.logout);

module.exports = router;