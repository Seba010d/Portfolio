const http = require("http");
const fs = require("fs");
const path = require("path");

const routes = {
  "/": "./Index.html",
  "/about": "./About.html",
  "/projects": "./Projects.html",
  "/contact": "./Contact.html",
};

const server = http.createServer((req, res) => {
  let filePath = routes[req.url] || "." + req.url;

  const extension = path.extname(filePath);

  const contentTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
  };

  const contentType = contentTypes[extension] || "text/plain";

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("File not found");
      return;
    }

    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
