const { rmSync } = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    console.log(req);
    res.writeHead(200);
    res.write("error 404");
    res.end();
  })
  .listen(3000);

console.log("escuchando el puerto", 300);
