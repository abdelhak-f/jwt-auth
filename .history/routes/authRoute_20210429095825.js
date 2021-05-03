const express = require("express");
const router = express.Router();
const {addUser} = require("../controllers/userController.js");

// router.get('/', (req, res) => {
    
//     res.send('Hello world !!');
// });
//router "get the "
router.get("/getclient", getClient);
// router "post users"
router.post("/adduser", addUser);

 module.exports = router;