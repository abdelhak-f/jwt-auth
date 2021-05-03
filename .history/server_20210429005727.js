require("dotenv").config({ path: "./config/.env" });
const express = require('express');
const mongoose = require("mongoose");
// const morgan = require('morgan');
 const routes = require('./routes/authRoute');

  
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({
        extended: true
    }));

    // connecter a la base de donnée
mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log(err.message);

  });

  

// Requests processing will be defined in the file router
 app.use("/", routes);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server app listening on port  ${PORT}`);
});
