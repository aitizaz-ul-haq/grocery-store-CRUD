const { product } = require("../modals/product.modal");

//Add product to DB
const addproduct = async (req, res) => {
  try {
    const { name, price, amount } = req.body;

    const response = await product.create({
      name: name,
      price: price,
      amount: amount,
    });

    return res.status(200).json({
      status: true,
      data: response,
    });
  } catch (error) {
    return res.status(200).json({
      status: false,
      error: error.message,
    });
  }
};

// Get all product Stored in DB
const getproducts = async (req, res) => {
  try {
    const response = await product.find();
    
    if(response.json > 0){
    return res.status(200).json({
      status: true,
      length: response.length,
      data: response,
    });
    
  }
  else {
      return res.json({
        status : false,
        message: 'no products found'
      })
  }

  } catch (error) {
    return res.status(200).json({
      status: false,
      error: error.message,
    });
  }
};

//Get a product from DB by ID
const getProductById = async (req, res) => {
  try {
    const id = req.params.id;

    const response = await product.find({
      _id: id,
    });

    if (response.length > 0) {
      return res.status(200).json({
        status: true,
        data: response,
      });
    } else {
      return res.status(200).json({
        status: false,
        message: 'record not found!',
      });
    }
  } catch (error) {
    return res.status(200).json({
      status: false,
      error: error.message,
    });
  }
};

// Update a product in DB by Finding it by id and then updating it
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const updateObj = req.body;

    await product.update({ _id: id }, { $set: updateObj });

    const response = await product.find({ _id: id });

    if (response.length > 0 ) {
    return res.status(200).json({
      status: true,
      data: response,
    });
  }
    else {
      return res.status(200).json({
        status: false,
        message: 'not updated',
      });
    }

  } catch (error) {
    return res.status(200).json({
      status: false,
      error: error.message,
    });
  }
};

/* 
  Remove a product from DB
*/
const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    await product.deleteOne({
      _id: id,
    });

    if( req.params.id == id ) {

      return res.status(200).json({
        status: true,
        message: "product deleted!",
      });
    }

    else {
      return res.status(200).json({
        status: true,
        message: "record not found",
      });
    }
        
    
  } catch (error) {
    return res.status(200).json({
      status: false,
      error: error.message,
    });
  }
};

module.exports = {
  addproduct,
  getproducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
