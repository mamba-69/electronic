const express = require('express');
const router = express.Router();
const { getUser, updateUser } = require('../controllers/userController');

// Define route for getting user details
router.get('/:id', getUser);

// Define route for updating user details
router.put('/:id', updateUser);

module.exports = router;