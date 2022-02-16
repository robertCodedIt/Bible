const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const { captureRejections } = require('events');
require('dotenv').config();
const Book = require('./models/Book')
// don't forget to use cors()
const cors = require('cors')
app.use(cors())
const axios = require('axios');



// connect database
const mongoose = require('mongoose');
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
try{app.get('/books',(req,res)=>{Book.find().then(result=>res.send(result))})}
catch(err){console.log(err)}
try{app.get('/search/:term',async(req,res)=>{
  
    await axios.get(`https://bible-go-api.rkeplin.com/v1/search?query=${req.params.term}`)
    .then((response)=>{
      let myList = []
      let myNum = Math.floor(Math.random() * response.data.items.length) + 1
      for(let i = myNum; i<response.data.items.length;i++){
        myList.push(response.data.items[i])
        break
      }
      res.send(myList)
    console.log(myList)})
    .catch(err=>console.log(err))
  
})}
catch(err){console.log(err)}

const setHomeRoute =  ()=>{
// try catch error handling

try{

    app.get('/:book/:chapter/:verse', async (req,response)=>{   
      await axios.get(`https://labs.bible.org/api/?passage=${req.params.book}+${req.params.chapter}:${req.params.verse}&type=json`).then((res)=>{response.send(res.data)}).catch(err=>console.log(err))
  
        
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

