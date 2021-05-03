const express = require("express");
const router = express.Router();
const {register, login} = require("../controllers/userController.js");

// router.get('/', (req, res) => {
    
//     res.send('Hello world !!');
// });

//router "get the user"
router.get("/", login);
// router "post users"
router.post("/register", register);

 module.exports = router;