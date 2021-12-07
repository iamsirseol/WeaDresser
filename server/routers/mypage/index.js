const express = require('express');
const router = express.Router();
const diaryRouter =require('./diary')
const usersRouter =require('./users')

// *  /mypage/diary
router.use('/diary', diaryRouter);

// *  /mypage/users
router.use('/users', usersRouter);

module.exports = router;