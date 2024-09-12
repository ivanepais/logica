/*
DOM 

With HTML Document Object Model, Js can access and change all the elements of an HTML document. 

When a web page is loaded, the browser creates a Document Object Model of the page. 

The model is constructed as a tree of Objects

Document: 

	Root elem: <html> 

	Elem <head> and Elem <body> 

	Elem <title>


	For body: 

		Attribute and elements: href, a, h1

		And text of elements and attributes. 


JS can change content of HTML: 

	Elements

	Attributes 

	Style

	Add and Remove elem and attrib

	React and create events 


DOM is a W3C: 
	
	Has three parts:  

		Core DOM

		XML DOM

		HTML DOM

	
	Standard object model and programming interface for HTML

	Defines: 

		HTML elements as objects

		Properties of all HTML elements

		Methods to access all HTML elements

		Events for all HTML elements


	Is a standard for how to get, change, add, or delete HTML elements.



|| DOM Methods

	Actions you can perform on elements. 

	DOM properties are values of elements for set or change. 

	In DOM all elements are Object. 	

	DOM Programming Interface is the properties and methods of each object.
 
	A property is a value that you can get or set. 

	A method is an action you can do. 


	//changes the content, innerHTML
	//of elem p with id="demo"

	```
	<p id="demo"></p>

	document.getElementById("demo").innerHTML = "Hello World!";

	```

	getElementById Method: 

		most common way to access is using id of the elem


	innerHTML Property: 

		get or change the content of all elements HTML



|| DOM Document 

	The owner of all other objects. 

	Represent the web page. 

	Use the document object to access and manipulate HTML.


	Finding HTML Elements: 

		document.getElementById(id)

		document.getElementsByTagName(name)

		document.getElementsByClassName(name)


	Changing HTML Elements: 

		element.innerHTML =  new html content	

		element.attribute = new value

		element.style.property = new style

		element.setAttribute(attribute, value)


	Adding and Deleting Elements: 

		document.createElement(element)

		document.removeChild(element)

		document.appendChild(element)

		document.replaceChild(new, old)

		document.write(text)


	Adding Events Handlers: 

		document.getElementById(id).onclick = function(){code}



|| DOM Elements

	Find and access HTML elements

	1) finding elements: 

		to manipulate elements with JS

		by id: 

			```
			const element = document.getElementById("intro"); 

			```

			if element is found, method will return the element as an object (in element).			

			is not found, element will contain null.


		by tag name: 

			finds all <p> elements

			```
			const element = document.getElementsByTagName("p"); 

			```

		finds the element with id="main", and then finds all <p> elements inside "main":

		```
		const x = document.getElementById("main");
		
		const y = x.getElementsByTagName("p"); 

		```			


		by class name: 

			returns a list of all elements with class="intro".

			```
			const x = document.getElementsByClassName("intro"); 

			```


		by CSS selectors: 

			find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.

			returns a list of all <p> elements with class="intro".

			const x = document.querySelectorAll("p.intro"); 			


		by HTML object collections: 

			finds the form element with id="frm1", in the forms collection, and displays all element values:

			```
			const x = document.forms["frm1"];
			let text = "";
			for (let i = 0; i < x.length; i++) {
			  text += x.elements[i].value + "<br>";
			}
			document.getElementById("demo").innerHTML = text; 

			```

			HTML objects (and object collections) are also accessible:

    		document.anchors
    		document.body
    		document.documentElement
    		document.embeds
    		document.forms
    		document.head
    		document.images
    		document.links
    		document.scripts
    		document.title



|| HTML DOM Changing HTML

	Allows JavaScript to change the content of HTML elements.


	Changing HTML Content: 

		The easiest way to modify the content of an HTML element is by using the innerHTML property.

		Sintax: 

		```
		document.getElementById(id).innerHTML = new HTML

		```

		changes the content of a <p> element:

		```
		<p id="p1">Hello World!</p>

		<script>
		document.getElementById("p1").innerHTML = "New text!";
		</script>		

		```

		1. <p> element with id="p1"

		2. use the HTML DOM to get the element with id="p1"

		3. JavaScript changes the content (innerHTML) of that element to "New text!"


	Changing the Value of an Attribute:

		Sintax: 

		```
		document.getElementById(id).attribute = new value

		```

		changes the value of the src attribute of an <img> element: 

		```
		<img id="myImage" src="smiley.gif">

		<script>
		document.getElementById("myImage").src = "landscape.jpg";
		</script>

		```

		1. <img> element with id="myImage"

		2.  HTML DOM to get the element with id="myImage"

		3. JavaScript changes the src attribute of that element from "smiley.gif" to "landscape.jpg"


	Dynamic HTML content: 

		JavaScript can create dynamic HTML content:

		```
		script>
		document.getElementById("demo").innerHTML = "Date : " + Date(); </script>		

		```


	document.write(): 

		In JavaScript, document.write() can be used to write directly to the HTML output stream:

		```

		<p>Bla bla bla</p>

		<script>
		document.write(Date());
		</script>

		<p>Bla bla bla</p>

		```

		Never use document.write() after the document is loaded. 

		It will overwrite the document.



|| Forms Validations

	Can be done by JavaScript.

	If a form field (fname) is empty, this function alerts a message, and returns false, to prevent the form from being submitted:

	```
	 function validateForm() {
	  let x = document.forms["myForm"]["fname"].value;
	  if (x == "") {
	    alert("Name must be filled out");
	    return false;
	  }
	} 

	```


	The function can be called when the form is submitted:

	```
	<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
	Name: <input type="text" name="fname">
	<input type="submit" value="Submit">
	</form> 

	```


	Numeric Validation: 

		input a number between 1 and 10

		```
		<input id="numb">

		<button type="button" onclick="myFunction()">Submit</button>

		<script>
		function myFunction() {

		  // Get the value of the input field with id="numb"
		  let x = document.getElementById("numb").value;

		  // If x is Not a Number or less than one or greater than 10
		  let text;
		  if (isNaN(x) || x < 1 || x > 10) {
		    text = "Input not valid";
		  } else {
		    text = "Input OK";
		  }
		  document.getElementById("demo").innerHTML = text;
		}
		</script>

		```


	Automatic HTML Form Validation: 

		can be performed automatically by the browser:

		If a form field (fname) is empty, the required attribute prevents this form from being submitted

		```
		<form action="/action_page.php" method="post">
		  <input type="text" name="fname" required>
		  <input type="submit" value="Submit">
		</form>

		```


	Data Validation: 

		Process of ensuring that user input is clean, correct, and useful.

		Tasks are:

		    has the user filled in all required fields?

		    has the user entered a valid date?

		    has the user entered text in a numeric field?


		Purpose of data validation is to ensure correct user input.

		Validation can be defined by many different methods, and deployed in many different ways: 

			Server side validation is performed by a web server, after input has been sent to the server.

			Client side validation is performed by a web browser, before input is sent to a web server



|| HTML Restriction 

	HTML5 introduced a new HTML validation concept called constraint validation.

	Is based on:

    	Constraint validation HTML Input Attributes

    	Constraint validation CSS Pseudo Selectors
    	
    	Constraint validation DOM Properties and Methods


    HTML Input Attributes: 

    	disabled: 

    		Specifies that the input element should be disabled

    	max: 

    		maximum value of an input 

    	min: 

    		minimum value of an input 

    	pattern: 

			value pattern of an input     

		required: 

			the input field requires an element

		type: 
			type of an input element


	CSS Pseudo Selectors: 

		:disabled

			Selects input elements with the "disabled" attribute specified	

		:invalid 	

			Selects input elements with invalid values

		:optional

			Selects input elements with no "required" attribute specified			
		:required

			Selects input elements with the "required" attribute specified

		:valid

			Selects input elements with valid values



|| Changing CSS

	Allows JavaScript to change the style of HTML elements.
	

	Style: 

		Sintax: 

		```
		document.getElementById(id).style.property = new style

		```

		changes the style of a <p> element:

		```		
		<p id="p2">Hello World!</p>

		document.getElementById("p2").style.color = "blue";

		```


	Using Events: 

		allows you to execute code when an event occurs.

		Events are generated by the browser when "things happen" to HTML elements:

    		An element is clicked on

    		The page has loaded
    		
    		Input fields are changed


    	changes the style of the HTML element with id="id1", when the user clicks a button:

    	```
    	<h1 id="id1">My Heading 1</h1>

		<button type="button"
		onclick="document.getElementById('id1').style.color = 'red'">
		Click Me!</button>

    	```



|| HTML Animations

	
	1. Basic Web Page: 

		```
		<h1>My First JavaScript Animation</h1>

		<div id="animation">My animation will go here</div>

		```


	2. Animation Container: 

		All animations should be relative to a container element.

		```
		<div id ="container">
		  <div id ="animate">My animation will go here</div>
		</div> 

		```


	3. Style the Elements: 

		The container element should be created with style = "position: relative".

		The animation element should be created with style = "position: absolute".

		```
		#container {
		  width: 400px;
		  height: 400px;
		  position: relative;
		  background: yellow;
		}

		#animate {
		  width: 50px;
		  height: 50px;
		  position: absolute;
		  background: red;
		}

		```


	4. Animation Code: 

		JavaScript animations are done by programming gradual changes in an element's style.

		The changes are called by a timer. When the timer interval is small, the animation looks continuous.

		```
		id = setInterval(frame, 5);

		function frame() {
		  if (/* test for finished */) {
		    clearInterval(id);
		  } else {
		    /* code to change the element style */ 
		  }
		} 

		```

		```
		function myMove() {
		  let id = null;
		  const elem = document.getElementById("animate");
		  let pos = 0;
		  clearInterval(id);
		  id = setInterval(frame, 5);
		  function frame() {
		    if (pos == 350) {
		      clearInterval(id);
		    } else {
		      pos++;
		      elem.style.top = pos + 'px';
		      elem.style.left = pos + 'px';
		    }
		  }
		}

		```



|| DOM Events
	
	JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.

	To execute code when a user clicks on an element, add JavaScript code to an HTML event attribute:

	```
	onclick=JavaScript 

	```

	HTML events:

    	When a user clicks the mouse
    	When a web page has loaded
    	When an image has been loaded
    	When the mouse moves over an element
    	When an input field is changed
    	When an HTML form is submitted
    	When a user strokes a key


    The content of the <h1> element is changed when a user clicks on it:

    ```
    <h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>

    ```


    a function is called from the event handler:

    ```
     <h1 onclick="changeText(this)">Click on this text!</h1>

	<script>
	function changeText(id) {
	  id.innerHTML = "Ooops!";
	}
	</script>

    ```


    HTML Event Attributes:

		Assign events to HTML elements with event attributes.

		onclick=JavaScript 

		Assign an onclick event to a button element

		```
		<button onclick="displayDate()">Try it</button> 

		```

		a function named displayDate will be executed when the button is clicked.


	Assign Events Using the HTML DOM: 

		Assign events to HTML elements using JavaScript:

		Assign an onclick event to a button element

		```
		<script>
		document.getElementById("myBtn").onclick = displayDate;
		</script> 		

		```

		A function named displayDate is assigned to an HTML element with the id="myBtn".

		The function will be executed when the button is clicked.



|| Event Listeners

	addEventListener() method

	fires when a user clicks a button:

	```
	document.getElementById("myBtn").addEventListener("click", displayDate);

	```

	Attaches an event handler to the specified element. 


	The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.

	You can add many event handlers to one element.

	You can add many event handlers of the same type to one element, i.e two "click" events.

	You can add event listeners to any DOM object not only HTML elements. i.e the window objec	

	The addEventListener() method makes it easier to control how the event reacts to bubbling.

	When using the addEventListener() method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.

	You can easily remove an event listener by using the removeEventListener() method. 

	Sintax: 

	```
	element.addEventListener(event, function, useCapture);

	```

	The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)

	The second parameter is the function we want to call when the event occurs.

	The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.	

	Don't use the "on" prefix for the event; use "click" instead of "onclick".


	Alert "Hello World!" when the user clicks on an element:

	```
	element.addEventListener("click", function(){ alert("Hello World!"); }); 

	```	

	```
	<button id="myBtn">Try it</button>

	<script>
	document.getElementById("myBtn").addEventListener("click", function() {
	  alert("Hello World!");
	});
	</script>

	```


|| RS

	```
	document.getElementById("myBtn").addEventListener("click", function())

	```

	1. document.getElementById("myBtn"): 

		is method (DOM) and element "myBtn" (HTML)

	2. addEventListener("click", function())

		It is a property that needs an element HTML. 


	3. We search for the element and modify it



	Finding HTML Elements: 

		document.getElementById(id)

		document.getElementsByTagName(name)

		document.getElementsByClassName(name)


	Changing HTML Elements: 

		element.innerHTML =  new html content	

		element.attribute = new value

		element.style.property = new style

		element.setAttribute(attribute, value)


	Adding and Deleting Elements: 

		document.createElement(element)

		document.removeChild(element)

		document.appendChild(element)

		document.replaceChild(new, old)

		document.write(text)


	Adding Events Handlers: 

		document.getElementById(id).onclick = function(){code}


	HTML objects (and object collections) are also accessible:

		document.anchors
		document.body
		document.documentElement
		document.embeds
		document.forms
		document.head
		document.images
		document.links
		document.scripts
		document.title