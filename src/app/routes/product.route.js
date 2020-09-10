module.exports = app => {
    const { 
        addproduct,
        getproducts,
        getProductById,
        updateProduct,
        deleteProduct
    } = require('../controllers/product.controller');

    app.post('/product', addproduct);
    app.get('/product', getproducts);
    app.get('/product/:id', getProductById);
    app.put('/product/:id', updateProduct);
    app.delete('/product/:id', deleteProduct);
}