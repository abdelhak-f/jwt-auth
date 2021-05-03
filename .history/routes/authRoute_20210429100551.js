const express = require("express");
const router = express.Router();
const {addUser, getUsers} = require("../controllers/userController.js");


//router "get the user"
router.get("/getusers", getUsers);
// router "post users"
router.post("/adduser", addUser);

 module.exports = router;