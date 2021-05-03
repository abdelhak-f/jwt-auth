const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    
    res.send('Hello world !!');
});

router.post("/postclient", postClient);

module.exports = router;