const express = require('express');
const router = express.Router();
const homeRouter = require('./home')
const ootdRouter = require('./ootd')
const diaryRouter = require('./diary')
const mypageRouter = require('./mypage')
const usersRouter = require('./users/users')
const oauthRouter = require('./users/oauth')

router.use('/', homeRouter); 
router.use('/ootd', ootdRouter); 
router.use('/diary', diaryRouter); 
router.use('/mypage', mypageRouter); 
router.use('/users', usersRouter); 
router.use('/oauth', oauthRouter); 

module.exports = router;