
/*
var http = require('http'); 

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('Hello World!');
}).listen(8080); 
*/


var http = require('http');

//dt: data time 
var dt = require('./modules/mod1.js'); 

http.createServer(function(req, res) {
	
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write("The date and time are currently: " + dt.myDateTime());
	res.end();
	
}).listen(8080);

//in folder
//ps aux | grep node
//kill -9 pid


/*
var http = require('http');

//create a server object:
http.createServer(function(req, res) {

  //write a response to the client
  res.write('Hello World!'); 
  
  //end the response
  res.end(); 
  
  //the server object listens on port 8080 
}).listen(8080); 
*/

//err: no res.writeHead

/*
 * exit 
   ctrl+C key.
   process.exit() Function. 1 o 0
   process.exitCode variable.
   process.on() Function. 
  
 */
 
 


	
 
 
 
