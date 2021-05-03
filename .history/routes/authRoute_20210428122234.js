const express = require("express");
const router = express.Router();
const { addUser  } = require("../controllers/Client.controller");

// router.get('/', (req, res) => {
    
//     res.send('Hello world !!');
// });

router.post("/addUser", addUser);

module.exports = router;