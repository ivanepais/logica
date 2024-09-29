var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //Return the url part of the request object
  res.write(req.url);
  res.end();
}).listen(8080); 

//holds the part of the url that comes after the domain name

