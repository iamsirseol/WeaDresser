const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/users/users");

// *  GET users/email
router.get("/email", usersController.checkEmail);

// *  GET users/send-email
router.get("/email/:email", usersController.sendEmail);

// *  POST users/signin
router.post("/signin", usersController.signin);

// *  POST users/signup
router.post("/signup", usersController.signup);

// *  POST users/signout
router.post("/signout", usersController.signout);

module.exports = router;
