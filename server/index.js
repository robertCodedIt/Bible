const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const { captureRejections } = require('events');
require('dotenv').config();
// don't forget to use cors()
const cors = require('cors')
app.use(cors())
const axios = require('axios');



// connect database
const mongoose = require('mongoose');
const e = require('express');
const connection = process.env.DATABASE_CONNECTION_STRING;
mongoose.connect(connection, {
  useNewUrlParser: "true",
})
mongoose.connection.on("error", err => {
  console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})


// some default API routes

const setHomeRoute = async ()=>{
// try catch error handling
let myData;
try{

  // make a call to the Bible API 
  await axios.get('https://bible-go-api.rkeplin.com/v1/books')
  .then(function (response) {
    // console.log(response.data)
    myData = response.data.map(el=>{return{id:el.id,name:el.name,testament:el.testament,genre:el.genre}})
    // now I want to save the books to the database model

    console.log(myData)
  })
  .catch(function (error) {
    console.log(error);
  });
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




// setHomeRoute()
// listen on the port number
app.listen(port,()=>{console.log( ` Listening for requests on port: ${port}`)})

