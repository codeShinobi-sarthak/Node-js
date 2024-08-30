const http = require("http");
const { url } = require("inspector");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("this is home page");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("this is about page");
  } else if (req.url === "/pricing") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("You get 50% off on out premium membership");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 not found");
  }
});

server.listen(port, hostname, () => {
  console.log(`server is listening at http://${hostname}:${port}`);
});