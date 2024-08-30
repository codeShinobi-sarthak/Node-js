// db.js
const mongoose = require("mongoose");
require("dotenv").config();

const pass = process.env.mongodbPass;

// Replace with your MongoDB connection string
const uri = `mongodb+srv://codeshinobisarthak:${pass}@blog-cluster.k57kf.mongodb.net/?retryWrites=true&w=majority&appName=blog-cluster`;

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
