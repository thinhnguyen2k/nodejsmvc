const express = require('express')
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
require('dotenv').config();

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

viewEngine(app);
 

let port = process.env.PORT || 6969;
app.listen(port, ()=>{
    console.log("Backend Nodejs is running on the port " +port)
})