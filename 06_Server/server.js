//* In the below code, we have created a simple HTTP server using the  http  module. We have used the  createServer()  method to create a server and passed a callback function that takes two arguments  req  and  res . The  req  object represents the request from the client and the  res  object represents the response that we send back to the client.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    // console.log(req);

    //? setting headers
    res.setHeader("content-type", "text");

    // res.write("<head><link ref='stylesheet' href='style.css'></head>"); //? this add link to the head of the html page
    // res.write("request made and writen on the page"); //? write() method is used to send a response to the client
    // res.end();

    // reading and then sending the html file

    let path = "./";
    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        // ? redirecting the user to the about page
        //* When the server receives a request for /about-me then,
        //* Set Header for Redirection: The res.setHeader("Location", "/about") line sets the Location header in the HTTP response. This header indicates the URL to which the client should be redirected. In this case, it redirects the client to /about.
        case "/about-me":
            res.setHeader("Location", "/about");
            res.statusCode = 301; //? 301 status code is used for redirection
            res.end();
            break;
        default:
            path += "404.html";
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(3000, "localhost", () => {
    console.log("Server is running on http://localhost:3000");
});

//NOTE:  Well this is fine but annoying to write the html file name again and again so there is a better way to do this which will be discussed in the next section.
