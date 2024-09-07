require('dotenv').config();
const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
        console.log("Mongo DB Connected");

    } catch (e) {
        console.log("Database Connection Faild with " + e);
        process.exit(1);
    }
}

module.exports = connectDB;
