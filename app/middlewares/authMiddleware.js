require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

module.exports = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(400).json({ message: 'No Token, Authorization denied !' });

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decode.userId);
        if (!req.user) return res.status(400).json({ message: 'User not found !' });
        next();
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}