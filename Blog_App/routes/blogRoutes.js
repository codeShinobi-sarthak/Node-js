const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel");

//* home page
router.get("/", (req, res) => {
    Blog.find({})
        .then((result) => {
            res.render("index", { title: "Blog app", blogs: result });
        })
        .catch((err) => {
            console.error("Error fetching blogs:", err);
            res.render("404", { title: "Error" });
        });
});

//* Render form to create a new blog post
router.get("/new-blog", (req, res) => {
    res.render("newBlog", { title: "New Blog" });
});

//* Handle form submission to create a new blog post
router.post("/new-blog", (req, res) => {
    const blog = new Blog({
        title: req.body.title,
        content: req.body.content,
    });

    blog.save()
        .then((result) => {
            res.redirect("/");
        })
        .catch((err) => {
            console.error("Error saving blog:", err);
            res.render("404", { title: "Error" });
        });
});

// goint to a single blog post
router.get("/blogs/:id", (req, res) => {
    const id = req.params.id;

    Blog.findById(id)
        .then((result) => {
            res.render("blog", { title: "Blog", blog: result });
        })
        .catch((err) => {
            console.error("Error fetching blog:", err);
            res.render("404", { title: "Error" });
        });
});

// deleating a blog post
router.delete("/blogs/:id", (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: "/" });
        })
        .catch((err) => {
            console.error("Error deleting blog:", err);
            res.render("404", { title: "Error" });
        });
});

module.exports = router;
