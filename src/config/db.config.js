
/*  
     add mongoose to db configuration files  
 */
const mongoose = require('mongoose');

/* 
     add mongoose connection dependencies
*/

const uri = process.env.DB_URL;


const options = {
     useNewUrlParser : true,
     useUnifiedTopology : true
}

/*
     Create connection with mongodb using mongoose 
  */

  mongoose
  .connect(uri, options)
  .then(() => {
      console.log('db sucessfully connected');
  })
  .catch((err) => {
    console.log(err);
  });