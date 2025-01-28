const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    const serveFile = (filePath, contentType) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.write("Internal Server Error");
                res.end();
            } else {
                res.writeHead(200, { "Content-Type": contentType });
                res.write(data);
                res.end();
            }
        });
    };

    const filePath = (fileName) => path.join(__dirname, "pages", fileName);

    if (req.url === "/" || req.url === "/home") {
        serveFile(filePath("home.html"), "text/html");
    } 
    else if (req.url === "/about") {
        serveFile(filePath("about.html"), "text/html");
    } 
    else if (req.url === "/contact") {
        serveFile(filePath("contact.html"), "text/html");
    } 
    else if (req.url === "/services") {
        serveFile(filePath("services.html"), "text/html");
    } 
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        serveFile(filePath("404.html"), "text/html");
    }
});

server.listen(3000, () => {
    console.log("Listening on port 3000");
});

