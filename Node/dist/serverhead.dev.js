"use strict";

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-type': 'text/plain'
  });
  res.write("printing in browser");
  console.log('request recived ' + req.url);
  res.end();
  console.log('this will be printed last');
}).listen(3001);
console.log('This will be printed first');
console.log('server running in port 3001');