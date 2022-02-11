const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const { captureRejections } = require('events');
require('dotenv').config();
// don't forget to use cors()
const cors = require('cors')
app.use(cors())



// connect database
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://gold:SARIVIA9@cluster0.eplls.mongodb.net/bibleDataBase?retryWrites=true&w=majority", {
  useNewUrlParser: "true",
})
mongoose.connection.on("error", err => {
  console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})


// some default API routes

const setHomeRoute = ()=>{
// try catch error handling

try{
// home route
     app.get('/',(req,res)=>{   

        res.send('Respond With a Resource')
        console.log('success')
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

