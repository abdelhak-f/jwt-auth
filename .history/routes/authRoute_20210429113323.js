const express = require("express");
const router = express.Router();
const {register, login} = require("../controllers/userController.js");


//router "get the user"
router.post("/", login);
// router "post users"
router.post("/register", register);

 module.exports = router;