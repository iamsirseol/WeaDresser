const express = require('express');
const router = express.Router();
const recordController = require('../controllers/record')

// * Post  /record
router.post('/', recordController.create);

module.exports = router;