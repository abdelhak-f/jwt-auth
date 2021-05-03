const express = require("express");
const router = express.Router();
const adduser = require("../controllers/userController.js");

// routers.get('/', (req, res) => {
    
//     res.send('Hello world !!');
// });

router.post("/adduser", addser);

 module.exports = router;