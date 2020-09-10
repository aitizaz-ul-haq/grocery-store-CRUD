const { Product } = require("../modals/product.modal");


//Add product to DB
const addproduct = async (req, res) => {
  try {
    const { name, price, amount } = req.body;

    const response = await Product.create({
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
    const response = await Product.find();

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

    const response = await Product.find({
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



// Update a product in DB by Finding it by id and then updating it 
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const updateObj = req.body;

    await Product.update({ _id: id }, { $set: updateObj });

    const response = await Product.find({ _id: id });

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
  Remove a product from DB
*/
const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    await Product.deleteOne({
      _id: id,
    });

    return res.status(200).json({
      status: true,
      message: "product deleted!",
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
