const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
app.use(bodyParser.json());

// Use routes
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('Welcome to the Electronic Store API');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});