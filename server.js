const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("./Index.html", (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Error loading Index.html");
      return;
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
