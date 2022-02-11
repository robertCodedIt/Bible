const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const { captureRejections } = require('events');
require('dotenv').config();
// const mongoose = require('mongoose');

// connect database

// mongoose.connect("mongodb://localhost:27017/testdb", {
//   useNewUrlParser: "true",
// })
// mongoose.connection.on("error", err => {
//   console.log("err", err)
// })
// mongoose.connection.on("connected", (err, res) => {
//   console.log("mongoose is connected")
// })


// some default API routes

const setHomeRoute = ()=>{
// try catch error handling

try{

     app.get('/',(req,res)=>{   
         
        res.send('hello world')
    })

}

catch(err){
console.log(err)

}
finally{

    console.log('done')
}
}


// set the port number
const port = process.env.PORT




setHomeRoute()
// listen on the port number
app.listen(port,()=>{console.log( ` Listening for requests on port: ${port}`)})

