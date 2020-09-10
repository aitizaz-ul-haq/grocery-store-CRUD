module.exports = app => {
    const { 
        addproduct,
        getproducts,
        getProductById,
        updateProduct,
        deleteProduct
    } = require('../controllers/product.controller');

    app.post('/product', addUser);
    app.get('/product', getUsers);
    app.get('/product/:id', getUserById);
    app.put('/product/:id', updateUser);
    app.delete('/product/:id', deleteUser);
}