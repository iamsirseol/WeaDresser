const express = require('express');
const router = express.Router();
const diaryController = require('../../controllers/mypage/diary')

// *  mypage/diary
router.get('/', diaryController.findOne)  
router.get('/:createdAt', diaryController.findOnebyDate) 
router.patch('/', diaryController.update)  
router.delete('/', diaryController.delete)  

module.exports = router;
