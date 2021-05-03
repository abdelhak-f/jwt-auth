const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    
    res.send('Hello world !!');
});

router.post("/addUser", postClient);

module.exports = router;