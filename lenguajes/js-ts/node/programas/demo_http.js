var http = require('http');

//create a server object:
http.createServer(function (req, res) {
	
  //add writeHead
  res.writeHead(200, {'Content-Type': 'text/html'});

  //write a response to the client
  res.write('Hello World!'); 
  
  //end the response
  res.end(); 
  
  //the server object listens on port 8080 
}).listen(8080); 
