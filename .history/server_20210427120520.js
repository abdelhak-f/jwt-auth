const express = require('express');
const morgan = require('morgan');
const router = require('./routes/authRoute');

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({
        extended: true
    }));

    app.use('/api'router); // Requests processing will be defined in the file router




const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server app listening on port  ${PORT}`);
});
