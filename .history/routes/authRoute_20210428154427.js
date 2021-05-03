const express = require("express");
const routers = express.Router();
const addUser = require("../controllers/userController.js");

// router.get('/', (req, res) => {
    
//     res.send('Hello world !!');
// });

routers.post("/addUser", addUser);

module.exports = routers;