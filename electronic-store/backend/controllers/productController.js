const Product = require('../models/productModel');

const addProduct = async (req, res) => {
    const { name, price, description } = req.body;

    if (!name || !price || !description) {
        return res.status(400).send('All fields are required');
    }

    try {
        const product = new Product({ name, price, description });
        await product.save();
        res.status(201).send('Product added successfully');
    } catch (error) {
        res.status(500).send('Server error');
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

module.exports = {
    addProduct,
    getProducts
};