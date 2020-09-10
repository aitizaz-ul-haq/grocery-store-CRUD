/* 
    include mongoose to the modal
*/

  const mongoose = require('mongoose');


/* 
    create modal schema
*/  

  const userSchema = mongoose.Schema({
            name : {
                type : String,
                required : true,
            },

            price : {
                type : Number,
                required : true,
                trim : true,

            },

            amount : {
                type : Number,
                required: true,
            }
},{
           versionKey : false,
           timestamps : true

});

/* 
    creat user modal
*/


const user = mongoose.model('user', userSchema);


/* 
      export user modal
  */


  module.exports = {
      user
  }
