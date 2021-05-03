const express = require("express");
const router = express.Router();
const { addUser  } = require("../controllers/userController.js");

// router.get('/', (req, res) => {
    
//     res.send('Hello world !!');
// });

router.post("/addUser", addUser);

module.exports = router;