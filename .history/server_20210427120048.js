const express = require('express');
const router = require('./routes/authRoute');

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({
        extended: true
    }));

    // app.use(router); // Requests processing will be defined in the file router

    app.get('/', (req, res) => {
    
        res.send('Hello world !!');
    });


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server app listening on port  ${PORT}`);
});
