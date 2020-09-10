/*
add dependencies 
*/

const express = require("express");
const cors    = require("cors");
const bodyParser = require("body-parser");
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

/* 
  add config files and enviroment files

*/
require(`./src/config/db.config`);

/*  
    add port to express server 
 */

const port = process.env.port || 3000

/* 
   run express server
*/

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})