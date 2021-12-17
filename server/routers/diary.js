const express = require('express');
const router = express.Router();
const recordController = require('../controllers/diary')
const { upload } = require('../multer/upload');

// * Post  /record
router.post('/', upload.single('image'), recordController.create);

module.exports = router;