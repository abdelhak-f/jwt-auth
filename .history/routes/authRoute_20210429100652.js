const express = require("express");
const router = express.Router();
const {addUser, getUser} = require("../controllers/userController.js");

// router.get('/', (req, res) => {
    
//     res.send('Hello world !!');
// });

//router "get the user"
router.get("/getusers", getUser);
// router "post users"
router.post("/adduser", addUser);

 module.exports = router;