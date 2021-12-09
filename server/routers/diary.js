const express = require('express');
const router = express.Router();
const recordController = require('../controllers/diary')

// * Post  /record
router.post('/', recordController.create);

module.exports = router;