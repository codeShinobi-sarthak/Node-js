// Note : this is the same code as that of './07_Express,js/express.js' 

const express = require("express");
const app = express();

app.set("view engine", "ejs");

//* middleware & static files means that the server will look for the files in the public folder
app.use(express.static("./public"));

//! these are middle wares
app.use((req, res, next) => {
    console.log("this is the first middleware");
    console.log("New request made:");
    console.log("Host: ", req.hostname);
    console.log("Path: ", req.path);
    console.log("Method: ", req.method);
    next();
});

app.use((req, res, next) => {
    console.log("This is the next middleware");
    next();
});

app.get("/", (req, res) => {
    const blogs = [
        {
            title: "First Post",
            content:
                "This is the content of the first post. It's a short introduction to the blog.",
        },
        {
            title: "Second Post",
            content:
                "Here's some more content for the second post. This one goes into more detail about the topic.",
        },
        {
            title: "Third Post",
            content:
                "Finally, this is the third post with even more detailed content, exploring a different aspect of the subject.",
        },
    ];

    res.render("index", { title: "Blog app", blogs });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About me" });
});

// redirect
app.get("/about-me", (req, res) => {
    res.redirect("about");
});

app.get("/new-post", (req, res) => {
    res.render("newPost", { title: "New Post" });
});

app.use((req, res) => {
    res.render("404", { title: "404" });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

/*
NOTE: app.use() applies middleware to your Express app, allowing functions to access req, res, and next objects. 

Common uses: 
1. Serve static files: app.use(express.static('public')); 
2. Log requests: app.use((req, res, next) => { console.log(req.method, req.url); next(); });
3. Parse JSON: app.use(express.json()); 
4. Handle CORS: app.use(cors()); 
5. Authentication: app.use('/protected', isAuthenticated). 

Middleware is sequential; use next() to chain. For errors, use (err, req, res, next).
*/
