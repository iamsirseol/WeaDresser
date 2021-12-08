const express = require('express');
const router = express.Router();
const homeRouter = require('./home')
const ootdRouter = require('./ootd')
const recordRouter = require('./record')
const mypageRouter = require('./mypage')
const usersRouter = require('./users/users')
const oauthRouter = require('./users/oauth')

router.use('/', homeRouter); 
router.use('/ootd', ootdRouter); 
router.use('/record', recordRouter); 
router.use('/mypage', mypageRouter); 
router.use('/users', usersRouter); 
router.use('/oauth', oauthRouter); 

module.exports = router;