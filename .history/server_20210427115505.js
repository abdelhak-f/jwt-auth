const express = require('express');
const router = express.Router();
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({
        extended: true
    }));






const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server app listening on port  ${PORT}`);
});
