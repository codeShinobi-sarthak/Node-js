const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema for the User
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    // Add any additional fields you need here
}, { timestamps: true });

// Create the model for the User
const User = mongoose.model("User", userSchema);

module.exports = User;
