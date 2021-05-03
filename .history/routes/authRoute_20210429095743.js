const express = require("express");
const router = express.Router();
const {addUser} = require("../controllers/userController.js");

// router.get('/', (req, res) => {
    
//     res.send('Hello world !!');
// });
// post the client
router.post("/adduser", addUser);

 module.exports = router;