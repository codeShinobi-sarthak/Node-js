const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema); // Use the exact collection name
module.exports = Blog;
