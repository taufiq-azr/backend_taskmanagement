require('dotenv').config();
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        console.log(req.body.name);
        console.log(req.method + " " + req.path + " - " + req.ip);

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({ name, email, password: hashedPassword });
        res.set('Content-Type', 'application/json');
        res.status(200).json(user);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body.email || req.query.email);
        console.log(req.body.password || req.query.password);

        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid Credential" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login Succesfully with token : ' + token });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body, {
            new: true
        });
        res.status(200).json(updateUser);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'User Deleted Successfully! :)' });
    }
    catch (e) {
        res.status(400).json({ error: e.message });
    }
}
