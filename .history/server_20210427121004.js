const express = require('express');
const mongoose = require("mongoose");
const morgan = require('morgan');
const routers = require('./routes/authRoute');

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({
        extended: true
    }));

    app.use("/api", routers); // Requests processing will be defined in the file router




const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server app listening on port  ${PORT}`);
});
