const express = require("express");
const router = express.Router();
const {register} = require("../controllers/userController.js");


//router "get the user"
// router.post("/login", login);
// router "post users"
router.post("/register", register);

 module.exports = router;