Node.js

Is an open source server environment

Run JavaScript on the server


```
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);

```

Hello World! in localhost:8080



|| Features

	uses asynchronous programming
	
	eg. open a file on the server and return the content to the client.
	
	Sends the task to the computer's file system. 
    Ready to handle the next request.
    When the file system has opened and read the file, the server returns the content to the client.

	
	eliminates the waiting, and simply continues with the next request.
	
	runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.


	Can do: 
	
		generate dynamic page content
		
		create, open, read, write, delete, and close files on the server
		
		collect form data
		
		add, delete, modify data in your database


	File node.js: 
	
		files contain tasks that will be executed on certain events

		typical event is someone trying to access a port on the server
		 
		Node.js files must be initiated on the server before having any effect

	


|| Computer as a Server


	Write nodejs: 
	
	```
	var http = require('http');

	http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  res.end('Hello World!');
	}).listen(8080);

	```
	
	tells the computer to write "Hello World!"
	
	if anyone (e.g. a web browser) tries to access your computer on port 8080.

	
	Command line: 
	
	Navigate to the folder
	
	```
	node file.js
	
	```
	
	Now, your computer works as a server
	
	If anyone tries to access your computer on port 8080, they will get a "Hello World!" message in return!
	

	Browser: 
	
	```
	http://localhost:8080
	
	```
	
	
	
|| Modules

	Like JS libraries, is a set of functions


	Built-in Modules: 
		
		use without any further installation.
		
		To include a module, use the require() function 
		
		with the name of the module:
		
		```
		var http = require('http');
		
		```
		
		The app access to the HTTP module
		
		Now, the app can create server 

		```
		http.createServer(function (req, res) {
		  res.writeHead(200, {'Content-Type': 'text/html'});
		  res.end('Hello World!');
		}).listen(8080);
					
		```


	Create Own Modules: 
	
		Create and include in app. 
		
		module that returns a date and time object:
		
		```
		exports.myDateTime = function() {return Date();
	
		};	 
		
		```
		
		
	Include Own Module: 
		
		include and use the module in any of your Node.js files.
		
		```
		var http = require('http');
		var dt = require('./myfirstmodule');

		http.createServer(function (req, res) {
		  res.writeHead(200, {'Content-Type': 'text/html'});
		  res.write("The date and time are currently: " + dt.myDateTime());
		  res.end();
		}).listen(8080); 
		
		```
		
		use ./ to locate the module
		
		in the same folder
		
		
	
|| Built-in HTTP Module

	transfer data over the Hyper Text Transfer Protocol (HTTP).

	```	
	var http = require('http');
	
	```

	
	Node.js as a Web Server: 
	
		HTTP module can create an HTTP server
		
		that listens to server ports and gives a response back to the client.

		```
		createServer()
	
		```

		```
		 var http = require('http');

		//create a server object:
		http.createServer(function (req, res) {

		  //write a response to the client
		  res.write('Hello World!'); 
		  
		  //end the response
		  res.end(); 
		  
		  //the server object listens on port 8080 
		}).listen(8080); 
				
		```
		
		The function into the http.createServer() method
		
		executed when someone tries to access the computer on port 8080.


	HTTP Header: 
	
		If the response from the HTTP server 
		
		is supposed to be displayed as HTML
		
		you should include an HTTP header with the correct content type:
	
		```
		
		
		```

		first argument of the res.writeHead() method is the status code
		
		200 means that all is OK
		
		second argument is an object containing the response headers.
		

	Read the Query String: 
	
		The function passed into
		
		http.createServer()
		
		req arg
		
		represents the request from the client
		
		
		as an object (http.IncomingMessage object)
	
		This object has a property called "url" 
		
		holds the part of the url that comes after the domain name:


		demo_http_url.js
		
		```
		var http = require('http');
		http.createServer(function (req, res) {
		  res.writeHead(200, {'Content-Type': 'text/html'});
		  res.write(req.url);
		  res.end();
		}).listen(8080); 
		
		```
	
	Split the Query String: 
	
		built-in modules
		
		split into readable parts
		
		like URL module. 
		
		
		demo_querystring.js:
		
		```
		var http = require('http');
		var url = require('url');

		http.createServer(function (req, res) {
		  res.writeHead(200, {'Content-Type': 'text/html'});
		  var q = url.parse(req.url, true).query;
		  var txt = q.year + " " + q.month;
		  res.end(txt);
		}).listen(8080);
		
		```
		
		In url module
		
		If we modify the URL after local host

		it will return something regarding that URL
		 
		 
		
