
const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/db');
const taskRoute = require('./app/routes/taskRoute');
const userRoute = require('./app/routes/userRoute');
// const bodyParser = require('body-parser');

//connect to DB
connectDB();

// Middleware untuk parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Ini harus diaktifkan

//Routes
app.use('/api', userRoute);
app.use('/api', taskRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});




