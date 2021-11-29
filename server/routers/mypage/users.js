const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/mypage/users')

// *  /mypage/users
router.get('/', usersController.findOne);
router.patch('/', usersController.update);
router.delete('/', usersController.delete);

module.exports = router;