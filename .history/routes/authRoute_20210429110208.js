const express = require("express");
const router = express.Router();
const {register, login} = require("../controllers/userController.js");



//router "get the user"
router.get("/", login);
// router "post users"
router.post("/", register);

 module.exports = router;