|| JSON

	
	Is a format for storing and transporting data.
	
	Used when data is sent from a server to a web page. 
	
	
	JSON is JavaScript Object Notation
	
	A lightweight data interchange format
	
	Is language independent
	
	"self-describing" and easy to understand
	
	
	Is derived from JavaScript object syntax
	
	But the JSON format is text only
	
	Can be written in any programming language. 
	
	
	eg: JSON syntax defines an employees object
	
	an array of 3 employee records (objects):
	
	```
	{
	"employees":[
	  {"firstName":"John", "lastName":"Doe"},
	  {"firstName":"Anna", "lastName":"Smith"},
	  {"firstName":"Peter", "lastName":"Jones"}
	]
	}
		
	```
	
	
	JSON Format Evaluates JavaScript Objects: 
	
		syntactically identical to the code for creating JavaScript objects.
		
		a JavaScript program can easily convert JSON data into native JavaScript objects
	
	
		Syntax Rules:
		
			Data is in name/value pairs
			
			Data is separated by commas
			
			Curly braces hold objects
			
			Square brackets hold arrays
		
			
			
|| JSON Data: Name and Value

	JSON data is written as name/value pairs, just like JavaScript object properties.
	
	consists of a field name (in double quotes), followed by a colon, followed by a value:

	```
	"firstName":"John"

	```
	
	JSON names require double quotes.
	
	JavaScript names do not.



|| JSON Objects
	
	Are written inside curly braces.
	
	can contain multiple name/value pairs:
	
	```
	 {"firstName":"John", "lastName":"Doe"}
	
	```

	
	
|| JSON Arrays

	Written inside square brackets
	
	Can contain objects
	
	```
	"employees":[
	  {"firstName":"John", "lastName":"Doe"},
	  {"firstName":"Anna", "lastName":"Smith"},
	  {"firstName":"Peter", "lastName":"Jones"}
	]

	```
	
	the object "employees" is an array. 
	
	It contains three objects.
	
	Each object is a record of a person
	
	with a first name and a last name
	


|| Converting a JSON Text to a JavaScript Object

	A common use of JSON is to read data from a web server
	
	and display the data in a web page.
	
	
	Can be demonstrated using a string as input.
	
	1. JavaScript string containing JSON syntax:
	
	```
	let text = '{ "employees" : [' +
	'{ "firstName":"John" , "lastName":"Doe" },' +
	'{ "firstName":"Anna" , "lastName":"Smith" },' +
	'{ "firstName":"Peter" , "lastName":"Jones" } ]}'; 
	
	```

	'{ "employees" : [' +
	
	'{ "firstName":"John" , "lastName":"Doe" },' +... 
	
	
	2. JSON.parse() to convert the string into a JavaScript object:

	```
	const obj = JSON.parse(text);
	
	```

	
	3. Use the new JavaScript object in your page: 
	
	```
	 <p id="demo"></p>

	<script>
	document.getElementById("demo").innerHTML =
	obj.employees[1].firstName + " " + obj.employees[1].lastName;
	</script> 
	
	```
	
	
	
|| JSON Example

	
	JSON string: 
	
	```
	'{"name":"John", "age":30, "car":null}'

	```
	
	defines an object with 3 properties:
	
		name, age, car. 
		
	Each property has a value.
	
	
	If parse the JSON string 
	
	with a JavaScript program
	
	can access the data as an object:
	
	```
	let personName = obj.name;
	 
	let personAge = obj.age; 
	
	```


	JavaScript built in function for JSON:
	
		JSON.parse():
			
			converting JSON strings into JavaScript objects
			
		JSON.stringify():
			
			converting an object into a JSON string
			
	
	Receive pure text from a server and use it as a JavaScript object.

	Send a JavaScript object to a server in pure text format.
	
	Work with data as JavaScript objects, with no complicated parsing and translations.


	Storing Data:
	
	the data has to be a certain format
	
	text is always one of the legal formats.

		
	JSON makes it possible to store
	
	JavaScript objects as text.



|| JSON Syntax

	name/value pairs
	
	separated by commas
	
	Curly braces hold objects
	
	Square brackets hold arrays


	Name and value: 
		
		key/value pairs
		
		```
		"name":"John" 
	
		```
	
		JSON names require double quotes.

	
	Evaluates to JavaScript Objects:
	
		In JSON, keys must be strings
		
		written with double quotes
	
		```json
	
		{"name":"John"} 
	
		```	
	
		In JavaScript, keys can be strings
		
		or numbers, or identifier names:
		
		```js
	
		{name:"John"} 
	
		```
		
		

	JSON Values: 
	
		must be
	
		string, number, object, array, boolean, null


		In JSON, string values must be written
		
		with double quotes:
	
		```
		{"name":"John"} 
	
		```
	
	
	JS Values: 
	
		expressions of: 
	
		string, number, object, array, boolean, null

		function, date, undefined
	

		In JavaScript, you can write
		
		string values with double or 
		 
		single quotes
		
		```
		{name:'John'} 
		
		```


	JS Objects:
	
		```
		person = {name:"John", age:31, city:"New York"}; 

		```
	
	
		access a JavaScript object:
		
		```
		 // returns John
		person.name; 
		
		```
		
		or
		
		```
		 // returns John
		person["name"]; 
		
		```
		
		
		can be modified:
		
		```
		person.name = "Gilbert"; 
		 
		```

		or
		
		```
		person["name"] = "Gilbert"; 
		
		```


	JavaScript Arrays as JSON:
		
		JavaScript objects can be written as JSON		
		
		JavaScript arrays can also be written as JSON.


	JSON Files:
	
			file type for JSON file is ".json"
	
			MIME type for JSON text is "application/json"



|| JSON vs XML

	JSOn and XML can be used to receive data from a web server.
	
	
	Examples both define an employees object
	
	with an array of 3 employees:
	
	
	json: 
	
	```
	{"employees":[
	  { "firstName":"John", "lastName":"Doe" },
	  { "firstName":"Anna", "lastName":"Smith" },
	  { "firstName":"Peter", "lastName":"Jones" }
	]}
	
	```
	
	
	xml: 
	
	```
	 <employees>
	 
	  <employee>
		<firstName>John</firstName> <lastName>Doe</lastName>
	  </employee>
	  
	  <employee>
		<firstName>Anna</firstName> <lastName>Smith</lastName>
	  </employee>
	  
	  <employee>
		<firstName>Peter</firstName> <lastName>Jones</lastName>
	  </employee>
	</employees>
	
	```
	

	JSON and XML are "self describing" (human readable)
	
	are hierarchical (values within values)
	
	can be parsed and used by lots of programming languages
	
	can be fetched with an XMLHttpRequest 
	
	
	The biggest difference is:

		XML has to be parsed with an XML parser.
		
		JSON can be parsed by a standard JavaScript function. 


	JSON is Better Than XML:
	
		XML is much more difficult to parse than JSON.
		
		JSON is parsed into a ready-to-use JavaScript object


		For AJAX applications, JSON is faster and easier than XML:		
		
		Using XML:
			
			Fetch an XML document
			
			Use the XML DOM to loop through the document
			
			Extract values and store in variables
			
			
		Using JSON:
		
			Fetch a JSON string
			
			JSON.Parse the JSON string
			


|| JSON Data Types

	cannot be:
		
		function, date, undefined


	must be:
	
		string, number, objects (json objects)
	
		array, boolean, null
		
		
		in name: 
			
			keys must be strings
		
			written with double quotes


		in value: 
			
			string, number, object, array, boolean, null


			In JSON, string values must be written

			with double quotes
						
		
		
	JSON Strings:
	
		written in double quotes
	
		```
		{"name":"John"} 
		
		```

	JSON Numbers:
	
		must be an integer or a floating point
	
		```			
		{"age":30} 
		
		```


	JSON Objects:
	
		json objects
		
		```
		{
		"employee":{"name":"John", "age":30, "city":"New York"}
		} 
		
		```
		
		Objects as values in JSON must follow the JSON syntax.

		

	JSON Arrays:
	
		```
		{
		"employees":["John", "Anna", "Peter"]
		} 
		
		```

	
	JSON Booleans:
	
		true/false
		
		```	
		{"sale":true} 
		 
		```
	
		
	JSON null:
	
		```
		{"middlename":null} 
		
		```
	
		
		
|| JSON Parse

	A common use of JSON is to exchange data
	
	to/from a web server.

	
	When receiving data from a web server
	
	the data is always a string.
	
	
	Parse the data with JSON.parse()
	
	and the data becomes a JavaScript object.

	
	Eg. parsing JSON:

		Imagine we received this text from a web server:
		
		string:
		
		```		
		'{"name":"John", "age":30, "city":"New York"}'

		```
	
		Use JSON.parse() to convert text 
		
		into a JavaScript object:
		
		```		
		const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

		```		
		
		sure the text is in JSON format
		
		or else you will get a syntax error.
	
	
		Use the JavaScript object in your page:
	
		```	
		 <p id="demo"></p>

		<script>
		document.getElementById("demo").innerHTML = obj.name;
		</script> 
		
		```


	Array as JSON:

		JSON.parse() on a JSON derived from an array
		
		the method will return a JavaScript array
		
		instead of a JavaScript object.
	
		```
		const text = '["Ford", "BMW", "Audi", "Fiat"]';
		const myArr = JSON.parse(text);
		
		```
