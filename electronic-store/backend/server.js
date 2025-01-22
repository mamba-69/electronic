const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://Mamba69:Mamba0655g@ceramic.svtmo.mongodb.net/?retryWrites=true&w=majority&appName=ceramic', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('✓ Connected to MongoDB');
}).catch((error) => {
    console.error('✗ MongoDB connection error:', error);
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Test route
app.get('/', (req, res) => {
    res.json({
        message: 'Electronic Store API is running',
        environment: 'development'
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`✓ Server running on port ${PORT}`);
    console.log('✓ API URL: http://localhost:' + PORT);
});