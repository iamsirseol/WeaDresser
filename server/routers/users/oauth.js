const express = require('express');
const router = express.Router();
const oauthController = require('../../controllers/users/oauth')

// *  POST oauth/google
router.post('/google', oauthController.google);

// *  POST users/signout
router.post('/kakao', oauthController.kakao);

module.exports = router;