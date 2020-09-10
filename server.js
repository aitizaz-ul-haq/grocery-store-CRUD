/*
  add dependencies 
*/

const express = require("express");
const cors    = require("cors");
const bodyParser = require("body-parser");
const app = express();





/* 
  add config files and enviroment files
*/

require("dotenv").config();
require(`./src/config/db.config`);






/* 
   use bodyparser and cors
*/

// use cors
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())





/* 
   import routes
*/

require(`./src/app/routes/product.route`)(app);




/*  
   add port to express server 
*/

const port = process.env.port || 5000;





/* 
   run express server
*/

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})