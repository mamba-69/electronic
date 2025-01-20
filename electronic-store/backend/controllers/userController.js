const User = require('../models/userModel');

const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { email, mobile } = req.body;

    try {
        const user = await User.findByIdAndUpdate(id, { email, mobile }, { new: true });
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

module.exports = {
    getUser,
    updateUser
};