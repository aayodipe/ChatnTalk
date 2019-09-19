// initialize dot env
require("dotenv").config();

//import dependency files
const express = require('express');
const axios = require('axios')
const moment = require('moment')


const app = express();
//Set Port Number
const PORT = 3000;process.env.PORT || 3000
//Serving Static file to the browser
app.use(express.static(__dirname))
//Listen to server
app.listen(PORT, ()=>{
     console.log(`Server listen to port ${PORT}`)
})

