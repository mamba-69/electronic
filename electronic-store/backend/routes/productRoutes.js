const express = require('express');
const router = express.Router();
const { addProduct, getProducts } = require('../controllers/productController');

// Define route for adding a product
router.post('/add-product', addProduct);

// Define route for getting all products
router.get('/products', getProducts);

module.exports = router;