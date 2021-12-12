const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home')

// * GET  /
router.get('/', homeController.findRandom);
router.get('/user', homeController.findById);

module.exports = router;