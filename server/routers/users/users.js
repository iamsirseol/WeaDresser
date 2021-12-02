const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/users/users')

// *  POST users/check-email
router.post('/check-email', usersController.checkEmail);

// *  GET users/send-email
router.get('/send-email', usersController.sendEmail);

// *  POST users/signin
router.post('/signin', usersController.signin);

// *  POST users/signup
router.post('/signup', usersController.signup);

// *  POST users/signout
router.post('/signout', usersController.signout);

module.exports = router;
