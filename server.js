/*
add dependencies 
*/

const express = require("express");
const cors    = require("cors");
const bodyparser = require("body-parser");
const app = express();



/* 
use bodyparser and cors
*/

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// use cors
app.use(cors())