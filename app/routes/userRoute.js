const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// router.post('/signup', UserController.createUser);
router.post('/signup', (req, res, next) => {
    console.log("Signup route hit");
    next();
}, UserController.createUser);

router.post('/login', (req, res, next) => {
    console.log("Login route hit");
    next();
}, UserController.loginUser);

//user update non
//user delete non

module.exports = router;