const express = require("express");
const routers = express.Router();
const addUser = require("../controllers/userController.js");

routers.get('/', (req, res) => {
    
    res.send('Hello world !!');
});

//  routers.post("/addUser", addUser);

 module.exports = routers;