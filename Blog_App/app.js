const Blog = require("./models/blogModel");
const User = require("./models/userModel");
const express = require("express");
const connectDB = require("./db/dbConnect");

const app = express();
connectDB();

app.set("view engine", "ejs");

//* Middleware & static files
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded data

//* home page
app.get("/", (req, res) => {
    Blog.find({})
        .then((result) => {
            res.render("index", { title: "Blog app", blogs: result });
        })
        .catch((err) => {
            console.error("Error fetching blogs:", err);
            res.render("404", { title: "Error" });
        });
});

// * about page
app.get("/about", (req, res) => {
    res.render("about", { title: "About me" });
});

//* Redirect
app.get("/about-me", (req, res) => {
    res.redirect("about");
});

//* Render form to create a new blog post
app.get("/new-blog", (req, res) => {
    res.render("newBlog", { title: "New Blog" });
});

//* Handle form submission to create a new blog post
app.post("/new-blog", (req, res) => {
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

//! Handle 404 errors
app.use((req, res) => {
    res.render("404", { title: "404" });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
