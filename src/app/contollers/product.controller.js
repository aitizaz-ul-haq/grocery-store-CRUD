const { Product } = require("../models/product.model");


//Add user to DB
const addproduct = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const response = await User.create({
      name: name,
      email: email,
      password: password,
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



// Get all users Stored in DB
const getproducts = async (req, res) => {
  try {
    const response = await User.find();

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




//Get a User from DB by ID 
const getProductById = async (req, res) => {
  try {
    const id = req.params.id;

    const response = await User.find({
      _id: id,
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



// Update a user in DB by Finding it by id and then updating it 
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const updateObj = req.body;

    await User.update({ _id: id }, { $set: updateObj });

    const response = await User.find({ _id: id });

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



/* 
  Remove a user from DB
*/
const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    await User.deleteOne({
      _id: id,
    });

    return res.status(200).json({
      status: true,
      message: "record deleted!",
    });
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
        deleteProduct
};
