const express = require("express");
const router = express.Router();

app.get('/', (req, res) => {
    
    router.send('Hello world !!');
});

module.exports = router;