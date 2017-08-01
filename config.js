module.exports = {
  username: "root",
  password: "R@hulpatel033",
  database: "sequelize",
  host    : "localhost",
  server  : "mysql",
  port    : "3306"
}

// web output text
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Look at console output below.\n');
}).listen(3000);
