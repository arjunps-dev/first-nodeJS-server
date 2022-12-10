var http = require("http");

http
  .createServer(function (req, res) {
    res.write("Hello From HTTP Module");
    res.end();
  })
  .listen("8080");
