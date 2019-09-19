// initialize dot env
require("dotenv").config();

//import dependency files
const express = require('express');
const axios = require('axios')
const moment = require('moment')
const bodyparser = require('body-parser')
const app = express();

//Set Port Number
const PORT = 3000;process.env.PORT || 3000

//Serving Static file to the browser
app.use(express.static(__dirname))

//Extract request data from stream
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

//Serve messages to the client4
const messages = []

app.get('/messages', (req, res) => {
     
     res.send(messages )
})


// Get messages from the client
app.post('/messages', (req, res) => {
     let message = req.body;
     if(message.name  && message.message){
          messages.push(message)
          res.sendStatus(200)
     }    

})

console.log(messages.length)
//Listen to server
app.listen(PORT, ()=>{
     console.log(`Server listen to port ${PORT}`)
})

