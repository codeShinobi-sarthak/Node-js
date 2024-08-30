const express = require("express");
const connectDB = require("./db/dbConnect");
const blogRoutes = require("./routes/blogRoutes");
const path = require("path");

const app = express();
connectDB();

app.set("view engine", "ejs");

//* Middleware & static files - This should come first
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded data

//* Use the blogRoutes for routes starting with '/'
app.use("/", blogRoutes);

// * about page
app.get("/about", (req, res) => {
    res.render("about", { title: "About me" });
});

//* Redirect
app.get("/about-me", (req, res) => {
    res.redirect("about");
});

//! Handle 404 errors
app.use((req, res) => {
    res.render("404", { title: "404" });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
