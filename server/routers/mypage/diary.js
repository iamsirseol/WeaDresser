const express = require('express');
const router = express.Router();
const { upload } = require('../../multer/upload');
const diaryController = require('../../controllers/mypage/diary')

// *  mypage/diary
router.get('/', diaryController.findOne)  
router.get('/:createdAt', diaryController.findOnebyDate) 
router.patch('/', upload.single('image'), diaryController.update)  
router.delete('/', diaryController.delete)  

module.exports = router;