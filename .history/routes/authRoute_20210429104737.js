const express = require("express");
const router = express.Router();
const {addUser, getUser} = require("../controllers/userController.js");

// router.get('/', (req, res) => {
    
//     res.send('Hello world !!');
// });

//router "get the user"
router.get("/login", getUser);
// router "post users"
router.post("/register", );

 module.exports = router;