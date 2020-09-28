const e = require("express");
const uniqid = require("uniqid");
const { writeToFile, readFile } = require("../../utils/file-operations.utils");

//Add product to file
const addproduct = async (req, res) => {
  try {
    const { name, price, amount } = req.body;
    const id = uniqid();
    const userObj = {
      id: id,
      name: name,
      price: price,
      amount: amount,
    };

    writeToFile(userObj);

    return res.status(200).json({
      status: true,
      data: userObj,
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
    const response = readFile();
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

   
    const response = readFile();
    if (response.length > 0) {
      response.forEach((element, i) => {
        if(element.id === id) {
          return res.status(200).json({
            status: true,
            data: response[i],
          }); 
        }
      });
    } else {
      return res.status(200).json({
        status: false,
        message: "record not found!",
      });
    }
  } catch (error) {
    return res.status(200).json({
      status: false,
      message: error.message,
    });
  }
};

// Update a product in DB by Finding it by id and then updating it
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const response = readFile();

    if (response.length > 0) {
      return res.status(200).json({
        status: true,
        message: "data updated",
        data: response,
      });
    } else {
      return res.status(200).json({
        status: false,
        message: "not updated",
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

    if (req.params.id == id) {
      return res.status(200).json({
        status: true,
        message: "product deleted!",
      });
    } else {
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
