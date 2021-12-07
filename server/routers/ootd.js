const express = require('express');
const router = express.Router();
const ootdController = require('../controllers/ootd')

// * GET  /ootd
router.get('/', ootdController.findTopLike);

// * Post  /ootd
router.post('/like', ootdController.addLike);

module.exports = router;