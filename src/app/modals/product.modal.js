/* 
    include mongoose to the modal
*/

  const mongoose = require('mongoose');


/* 
    create modal schema
*/  

  const productSchema = mongoose.Schema({
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


const product = mongoose.model('product', productSchema);


/* 
      export user modal
  */


  module.exports = {
      product
  }
