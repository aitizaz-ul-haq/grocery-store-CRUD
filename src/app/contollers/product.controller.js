const { product } = require("../modals/product.modal");
const fs = require('fs');

//Add product to DB
const addproduct = async (req, res) => {
  try {
    const { name, price, amount } = req.body;

    const response = await product.create({
      name: name,
      price: price,
      amount: amount,
    });

    fs.writeFile('mynewfile.json', JSON.stringify(response), function (err) {
      if (err) throw err;
      console.log('saved to file also');
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
    
    
    return res.status(200).json({
      status: true,
      length: response.length,
      data: response,
    });
    
  

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
      message: "id not found",
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
      message : 'data updated',
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
