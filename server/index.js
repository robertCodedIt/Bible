const express = require('express');
const app = express();
const bodyParser = require("body-parser")
require('dotenv').config();
const mongoose = require('mongoose');

// connect database

mongoose.connect("mongodb://localhost:27017/testdb", {
  useNewUrlParser: "true",
})
mongoose.connection.on("error", err => {
  console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})




// set the port number
const port = process.env.PORT





// listen on the port number
app.listen(port,()=>{console.log( ` Listening for requests on port: ${port}`)})

