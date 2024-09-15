React 

JavaScript library for building user interfaces.

 Is used to build single-page applications.

React allows us to create reusable UI components.

```
import React from "react";
import ReactDOM from "react-dom/client";

function Hello(props) {
  return <h1>Hello World!</h1>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Hello />);

/*
The examples in this tutorial are created using the
create-react-app.

Install the create-react-app,
and you will be able to run the same examples on your computer.

In this example we create a component called 'Hello'.
The component is rendered in a container called 'root'.
*/

```


React Environment: 

	```
	create-react-app

	```

	tool is an officially supported way to create React applications.

	Node.js is required to use create-react-app.

	Open your terminal in the directory you would like to create your application.

	```
	npx create-react-app my-react-app

	```

	Ensure npx always uses the latest version of create-react-app.


Run the React Application: 
	
	move to the my-react-app directory:

	```
	cd my-react-app

	```

	execute the React application my-react-app

	```
	npm start

	```

	A new browser window will pop up with your newly created React App! 

	If not, open your browser and type localhost:3000 in the address bar.



|| Intro

	React is a JavaScript library for building UI components.

	Creates a VIRTUAL DOM in memory.

	Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.

	React only changes what needs to be changed!

	React finds out what changes have been made, and changes only what needs to be changed. 	

	create-react-app includes built tools such as webpack, Babel, and ESLint




|| Start

	Need npm which is included with Node.js.

	Can write React code directly in HTML.

	But in order to use React in production, you need npm and Node.js installed.


	React Directly in HTML: 

		Start by including three scripts: 

			The first two let us write React code in our JavaScripts, and the third, Babel, allows us to write JSX syntax and ES6 in older browsers.

			1. <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>

			2. <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

			3. <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>


	```
	<!DOCTYPE html>
	<html>
	  <head>
	    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
	    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
	    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
	  </head>
	  <body>

	    <div id="mydiv"></div>

	    <script type="text/babel">
	      function Hello() {
	        return <h1>Hello World!</h1>;
	      }

	      const container = document.getElementById('mydiv');
	      const root = ReactDOM.createRoot(container);
	      root.render(<Hello />)
	    </script>

	  </body>
	</html>

	```

	But for production you will need to set up a React environment.


	React Environment: 

		With npx and Node.js installed. 

		Can create a React application. 

		```
		create-react-app

		```	

		ensure npx always uses the latest version of create-react-app.


		```
		npx create-react-app my-react-app

		```


	Run the React Application: 

		to move to the my-react-app directory:

		```
		cd my-react-app

		```		

		run the React application my-react-app:

		```
		npm start

		```


	Modify the React App: 

		Change the content

		in the my-react-app directory, and you will find a src folder. 

		Inside the src folder there is a file called App.js

		```
		/myReactApp/src/App.js

		```

		Replace all the content inside the <div className="App"> with a <h1> element.

		And save the file. 

		```
		import logo from './logo.svg';
		import './App.css';

		function App() {
		  return (
		    <div className="App">

		    	... all elem html

		    </div>

		  ); 

		}

		```


		Replace all the content inside the <div className="App"> with a <h1> element:

		```
		function App() {
		  return (
		    <div className="App">
		      <h1>Hello World!</h1>
		    </div>
		  );
		}

		export default App;

		```

		removed the imports we do not need (logo.svg and App.css).


		Stripping down the src folder to only contain one file: index.js.

		You should also remove any unnecessary lines of code inside the index.js

		index.js

		```
		import React from 'react';
		import ReactDOM from 'react-dom/client';

		const myFirstElement = <h1>Hello React!</h1>

		const root = ReactDOM.createRoot(document.getElementById('root'));
		root.render(myFirstElement);

		```		


	RS: 

		Create a component called 'Hello'.
	
		The component is rendered in a container called 'root'.



|| Upgrade React
	
	To install the latest version, from your project folder run the following from the terminal:

	```
	npm i react@latest react-dom@latest

	```
	
	new root API: 

		take advantage of React 18's concurrent features	

		```
		// Before
		import ReactDOM from 'react-dom';
		ReactDOM.render(<App />, document.getElementById('root'));

		// After
		import ReactDOM from 'react-dom/client';
		const root = ReactDOM.createRoot(document.getElementById('root'));
		root.render(<App />);

		```

		React 16.0 was released in September 2017

		While React 17.0 was released in August 2020. 

		React 18 was released on March 29, 2022. 



|| ES6

	ES6 stands for ECMAScript 6.	

	It was published in 2015, and is also known as ECMAScript 2015.

	New features like:

    	Classes
    	Arrow Functions
    	Variables (let, const, var)
    	Array Methods like .map()
    	Destructuring
    	Modules
    	Ternary Operator
    	Spread Operator


    Clases: 

    	```
    	class Car {
		  constructor(name) {
		    this.brand = name;
		  }
		  
		  present() {
		    return 'I have a ' + this.brand;
		  }
		}

		const mycar = new Car("Ford");
		mycar.present();

    	```

    	class name with upper, 'Car'

    	can create objects using the Car class

    	constructor called automatically when the object is initialized.

		can add your own methods    	

		call the method by referring to the object's method name


		Herencia: 

			```
			class Car {
			  constructor(name) {
			    this.brand = name;
			  }

			  present() {
			    return 'I have a ' + this.brand;
			  }
			}

			class Model extends Car {
			  constructor(name, mod) {
			    super(name);
			    this.model = mod;
			  }  
			  show() {
			      return this.present() + ', it is a ' + this.model
			  }
			}
			const mycar = new Model("Ford", "Mustang");
			mycar.show();

			```
			
			super() method refers to the parent class.

			calling the super() method in the constructor method, we call the parent's constructor method and get access to the parent's properties and methods

			Difference: 

				super(prop) does not define properties

				calling Model constructor, no Car


	Arrow Functions: 

		Write shorter function

		```
		hello = function() {
		  return "Hello World!";
		}

		hello = () => {
		  return "Hello World!";
		}

		```	

		function has only one statement, and the statement returns a value

		This works only if the function has only one statement.


		Arrow Function With Parameters:

			```
			hello = (val) => "Hello " + val;

			```

			if you have only one parameter, you can skip the parentheses as well:

			```
			hello = val => "Hello " + val;

			```


		this: 

			is also different in arrow functions compared to regular functions.

			with arrow functions there is no binding of this.

			In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

			With arrow functions, the this keyword always represents the object that defined the arrow function.


			regular function, this represents the object that called the function:

			```
			class Header {
			  constructor() {
			    this.color = "Red";
			  }

			//Regular function:
			  changeColor = function() {
			    document.getElementById("demo").innerHTML += this;
			  }
			}

			const myheader = new Header();

			//The window object calls the function:
			window.addEventListener("load", myheader.changeColor);

			//A button object calls the function:
			document.getElementById("btn").addEventListener("click", myheader.changeColor);

			```


			arrow function, this represents the Header object no matter who called the function:

			```
			class Header {
			  constructor() {
			    this.color = "Red";
			  }

			//Arrow function:
			  changeColor = () => {
			    document.getElementById("demo").innerHTML += this;
			  }
			}

			const myheader = new Header();


			//The window object calls the function:
			window.addEventListener("load", myheader.changeColor);

			//A button object calls the function:
			document.getElementById("btn").addEventListener("click", myheader.changeColor);

			```

			Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

			The first example uses a regular function, and the second example uses an arrow function.

			The result shows that the first example returns two different objects (window and button), and the second example returns the Header object twice.


		Sometimes the behavior of regular functions is what you want, if not, use arrow functions.


	Var, let, const: 

		Before ES6 there was only one way of defining your variables: with the var keyword.

		If you did not define them, they would be assigned to the global object. 

		Unless you were in strict mode, then you would get an error if your variables were undefined.

		with ES6, there are three ways of defining your variables: var, let, and const.

		```
		var x = 5.6;

		```

		var outside of a function, it belongs to the global scope

		var inside of a function, it belongs to that function.

		var inside of a block, i.e. a for loop, the variable is still available outside of that block.

		var has a function scope, not a block scope.


		```
		let x = 5.6;

		```

		let is the block scoped version of var, and is limited to the block (or expression) where it is defined.

		If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.

		let has a block scope.


		```
		const x = 5.6;

		```

		once it has been created, its value can never change.

		const has a block scope.

		not define a constant value. 

		It defines a constant reference to a value.

		can NOT:

    		Reassign a constant value
    		Reassign a constant array
    		Reassign a constant object

    	you CAN:
    		
    		Change the elements of constant array
    		Change the properties of constant object


    Arrays Methods: 

    	There are many JavaScript array methods.

		One of the most useful in React is the .map() array method.

		Run a function on each item in the array, returning a new array as the result.

		In React, map() can be used to generate lists

		```
		const myArray = ['apple', 'banana', 'orange'];

		const myList = myArray.map((item) => <p>{item}</p>)

		```
		apple

		banana

		orange


	Destructuring: 

		Makes it easy to extract only what is needed.

		
		old way of assigning array items to a variable:

		```
		const vehicles = ['mustang', 'f-150', 'expedition'];

		// old way
		const car = vehicles[0];
		const truck = vehicles[1];
		const suv = vehicles[2];

		```


		new way of assigning array items to a variable:

		```
		const vehicles = ['mustang', 'f-150', 'expedition'];

		const [car, truck, suv] = vehicles;

		```


		When destructuring arrays, the order that variables are declared is important.

		If we only want the car and suv we can simply leave out the truck but keep the comma:

		```
		const vehicles = ['mustang', 'f-150', 'expedition'];

		const [car,, suv] = vehicles;

		```


		comes in handy when a function returns an array:

		```
		function calculate(a, b) {
		  const add = a + b;
		  const subtract = a - b;
		  const multiply = a * b;
		  const divide = a / b;

		  return [add, subtract, multiply, divide];
		}

		const [add, subtract, multiply, divide] = calculate(4, 7);

		```


		Destructuring Objects:

			old way of using an object inside a function:

			```
			const vehicleOne = {
			  brand: 'Ford',
			  model: 'Mustang',
			  type: 'car',
			  year: 2021, 
			  color: 'red'
			}

			myVehicle(vehicleOne);

			// old way
			function myVehicle(vehicle) {
			  const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
			}

			```


			New way of using an object inside a function:

			With destructuring:

			```
			const vehicleOne = {
			  brand: 'Ford',
			  model: 'Mustang',
			  type: 'car',
			  year: 2021, 
			  color: 'red'
			}

			myVehicle(vehicleOne);

			function myVehicle({type, color, brand, model}) {
			  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
			}

			```

			the object properties do not have to be declared in a specific order.


			We can even destructure deeply nested objects by referencing the nested object then using a colon and curly braces to again destructure the items needed from the nested object:

			```
			const vehicleOne = {
			  brand: 'Ford',
			  model: 'Mustang',
			  type: 'car',
			  year: 2021, 
			  color: 'red',
			  registration: {
			    city: 'Houston',
			    state: 'Texas',
			    country: 'USA'
			  }
			}

			myVehicle(vehicleOne)

			function myVehicle({ model, registration: { state } }) {
			  const message = 'My ' + model + ' is registered in ' + state + '.';
			}

			```


	Spread operator (...): 

		quickly copy all or part of an existing array or object into another array or object.

		```
		const numbersOne = [1, 2, 3];
		const numbersTwo = [4, 5, 6];
		const numbersCombined = [...numbersOne, ...numbersTwo];

		```

		1,2,3,4,5,6 


		often used in combination with destructuring.

		Assign the first and second items from numbers to variables and put the rest in an array

		```
		const numbers = [1, 2, 3, 4, 5, 6];

		const [one, two, ...rest] = numbers;

		```

		1

		2

		3,4,5,6


		spread operator with objects:

		```
		const myVehicle = {
		  brand: 'Ford',
		  model: 'Mustang',
		  color: 'red'
		}

		const updateMyVehicle = {
		  type: 'car',
		  year: 2021, 
		  color: 'yellow'
		}

		const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}		
		```

		Object { brand: "Ford", model: "Mustang", color: "yellow", type: "car", year: 2021 }
​
		brand: "Ford"
		​
		color: "yellow"
		​
		model: "Mustang"
		​
		type: "car"
		​
		year: 2021


		The properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyVehicle. 

		The resulting color is now yellow.		

	Modules: 

		code into separate files		

		easier to maintain the code-base.

		import and export statements.


		Export: 

			export a function or variable from any file.

			create a file named person.js, and fill it with the things we want to export.

			two types of exports: Named and Default.


			Named Exports: 

				can create named exports two ways. 

				In-line individually, or all at once at the bottom.


			 	1. In-line individually:

				person.js

				```
				export const name = "Jesse"
				export const age = 40

				```


				2. all at once at the bottom

				person.js

				```
				const name = "Jesse"
				const age = 40

				export { name, age }

				```


			Default Exports:

				create another file, named message.js

				You can only have one default export in a file.

				```
				const message = () => {
				  const name = "Jesse";
				  const age = 40;
				  return name + ' is ' + age + 'years old.';
				};

				export default message;

				```


		Import: 

			can import modules into a file in two ways, based on if they are named exports or default exports.

			Named exports must be destructured using curly braces. 

			Default exports do not.


			Import named exports from the file person.js:

			```
			import { name, age } from "./person.js";

			```


			Import a default export from the file message.js:

			```
			import message from "./message.js";

			```


	Ternary Operator: 

		simplified conditional operator like if / else.

		Sintax: 

		```
		condition ? <expression if true> : <expression if false>

		```


		using if / else:

		Before

		```
		if (authenticated) {
		  renderApp();
		} else {
		  renderLogin();
		}

		```


		using a ternary operator:

		```
		authenticated ? renderApp() : renderLogin();

		```


|| React Render HTML

	Render HTML in a web page.

	using a function called createRoot() and its method render().


	Function createRoot():

		takes one argument, an HTML element.
		
		define the HTML element where a React component should be displayed.
		
		
	Method render(): 
		
		then called to define the React component that should be rendered.

		render where?
		
		There is another folder in the root directory of your React project, named "public". 
		
		In this folder, there is an index.html file.

		notice a single <div> in the body of this file. This is where our React application will be rendered
	
		
	Display a paragraph inside an element with the id of "root":
	
	```
	const container = document.getElementById('root');
	const root = ReactDOM.createRoot(container);
	root.render(<p>Hello</p>);

	```
	
	The result is displayed in the <div id="root"> element:

	```
	<body>
		<div id="root"></div>
	</body>

	```

	the element id does not have to be called "root", but this is the standard convention.
	
	
	
	HTML Code: 
	
		uses JSX which allows you to write HTML tags inside the JavaScript code
	
		Create a variable that contains HTML code and display it in the "root" node

	```
	const myelement = (
	  <table>
		<tr>
		  <th>Name</th>
		</tr>
		<tr>
		  <td>John</td>
		</tr>
		<tr>
		  <td>Elsa</td>
		</tr>
	  </table>
	);

	const container = document.getElementById('root');
	const root = ReactDOM.createRoot(container);
	root.render(myelement);	
		
	```
	
	
	Root node: 
	
		is the HTML element where you want to display the result.

		It is like a container for content managed by React
	
	
		```
		<body>
		  <header id="sandy"></header>
		</body>
		
		const container = document.getElementById('sandy');
		const root = ReactDOM.createRoot(container);
		root.render(<p>Hallo</p>);
		
		```
		
		Result: 
		
		<header id="sandy">hallo</header>
		
	
	Rs React: 
	
		create a container and take an html element (root)

		create root to create root(createroot(root)) from html elem container

		show more elements with render(jsx/js/html)

		
		we create a component jsx, etc
		
		The component is rendered in a container called 'root'.
		
		
		folder in the root directory of your React project, named "public". 
		
		In this folder, there is an index.html file.
		
		
		
|| JSX

	Is JavaScript XML.

	Write HTML in React.
	
	JSX makes it easier to write and add HTML in React.


	Write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.

	JSX converts HTML tags into react elements.

	Not required to use JSX, but JSX makes it easier to write React applications.

	
	JSX:

	```
	const myElement = <h1>I Love JSX!</h1>;

	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(myElement);

	```
	
	
	no JSX: 
	
	```
	const myElement = React.createElement('h1', {}, 'I do not use JSX!');

	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(myElement);

	```
	
	JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.

	
	Expressions in JSX: 
		
		can write expressions inside curly braces { }.
		
		can be a React variable, or property, or any other valid JavaScript expression. 
		 
		JSX will execute the expression and return the result

		```
		const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
		
		```
		
	
	Large Block of HTML: 
	
		Write HTML on multiple lines, put the HTML inside parentheses:
	
		Create a list with three list items:
		
		```
		const myElement = (
		  <ul>
			<li>Apples</li>
			<li>Bananas</li>
			<li>Cherries</li>
		  </ul>
		);

		```


	One Top Level Element: 
		
		HTML code must be wrapped in ONE top level element.
	
		to write two paragraphs,  put them inside a parent element, like a div element.
		
		
		Wrap two paragraphs inside one DIV
	
		```
		const myElement = (
		  <div>
			<p>I am a paragraph.</p>
			<p>I am a paragraph too.</p>
		  </div>
		);

		```
		
		JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.
		
		Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.

		A fragment looks like an empty HTML tag: <></>.
	
		```
		const myElement = (
		  <>
			<p>I am a paragraph.</p>
			<p>I am a paragraph too.</p>
		  </>
		);
	
		```
	
			
	Elements Must be Closed: 

		JSX follows XML rules, and therefore HTML elements must be properly closed.
		
		Close empty elements with />
		
		```
		const myElement = <input type="text" />;
		
		```
		
		throw an error if the HTML is not properly closed.
		
		
	Attribute class = className (in jsx): 
	
		class keyword is a reserved word in JavaScript
		
		When JSX is rendered, it translates className attributes into class attributes.

		```
		const myElement = <h1 className="myclass">Hello World</h1>;
		
		```
		
	Conditions - if statements:

		React supports if statements, but not inside JSX.

		
		Write "Hello" if x is less than 10, otherwise "Goodbye":
		
		1. if's outside of jsx
		
		```
		const x = 5;
		let text = "Goodbye";
		if (x < 10) {
		  text = "Hello";
		}

		const myElement = <h1>{text}</h1>;

		```
		
		or 
		
		
		2. ternary expression instead:
		
		```
		const x = 5;

		const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;
		
		```
		
		to embed a JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces, {}.

		
		
		
	RS jsx: 
		
		1. jsx html element: 
			
		one element write without parentheses
			
		```
		const myElement = <h1>I Love JSX!</h1>;
			
		```
		
		2. html element and expresion: 
		
		```
		const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

		```
			
		3. jsx block of multiple html elements: 
		
		need parentheses
			
		```
		const myElement = (
			<ul>
				<li>Apples</li>
				<li>Bananas</li>
				<li>Cherries</li>
			</ul>
		);

		```
		
		4. jsx top level: 
		
		```
		const myElement = (
		  <div>
			<p>I am a paragraph.</p>
			<p>I am a paragraph too.</p>
		  </div>
		);
		
		```
		
		5. Alternatively, fragment: 
		
		```
		const myElement = (
		  <>
			<p>I am a paragraph.</p>
			<p>I am a paragraph too.</p>
		  </>
		);

		```
		
		6. Attribute class = className (in jsx): 
	
			class keyword is a reserved word in JavaScript

		```
		const myElement = <h1 className="myclass">Hello World</h1>;

		```
		
		
		7. Conditions - if statements:
		
		
		1. if's outside of jsx
		
		```
		const x = 5;
		let text = "Goodbye";
		if (x < 10) {
		  text = "Hello";
		}

		const myElement = <h1>{text}</h1>;

		```
		
		or 
		
		
		2. ternary expression instead:
		
		```
		const x = 5;

		const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;
		
		```


		jsx code, root and render: 
	
			container (root element html/jsx)
			root (root funct(elem html))
			render (jsx)
		
			show component jsx
		
			in file index.jsx
			
			
		function component: 
		
			jsx (js can write html)
			
			using with hooks	
			
		```
		function Car() {
		  return <h2>Hi, I am a Car!</h2>;
		}
				
		```
		
		class component (legacy): 	
		
		```
		class Car extends React.Component {
		  render() {
			return <h2>Hi, I am a Car!</h2>;
		  }
		}
		
		```	


		Props:
		
			take css in line html(?)
		
			function Car(props)
				return {props.color}
			root.render(<Car color="red"/>);
			
		
		Component in component: 
		
			Component() return (<> < OtherComponent /> </>);

			
			

|| React Components

	are like functions that return HTML elements.
	
	are independent and reusable bits of code.
	
	They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
	
	
	two types: 
	
		Class components 
		
		Function components
	
	
	Focus on function components. 
	
	Class components belong to old versions of react
	
	
	now function components along with Hooks
	
	which were added in React 16.8.
	
	
	Create component: 
	
		Start with upper 
		
		
		1. Class component: 
		
		must include the extends React.Component statement.  
		
		creates an inheritance to React.Component
		
		gives access React.Component's functions.
		
		requires a render() method, this method returns HTML
		
		
		Class component called Car
		
		```
		class Car extends React.Component {
		  render() {
			return <h2>Hi, I am a Car!</h2>;
		  }
		}
		
		```
		
		
		2. Function component:
		
		returns HTML
		
		written using much less code, are easier to understand
		
		Function component called Car		
		
		```
		function Car() {
		  return <h2>Hi, I am a Car!</h2>;
		}
				
		```
	
	
	Rendering component: 
		
		The component car return <h2> elem
		
		use this component in your app
		
		use similar syntax as normal HTML
		
		<Car />
		
		shows Car in root 
		
		```
		const root = ReactDOM.createRoot(document.getElementById('root'));
		root.render(<Car />);
	
		```
	
	
	Props: 
		
		are like function arguments
		
		into the component as attributes
		
		
		Use an attribute to pass a color to the Car component, and use it in the render() function:
		
		
	Component in component: 
		
		refer to components inside other components
		
		
		Car component inside the Garage component
		
		Sintax:
			
			Component() return (<> < OtherComponent /> </>);
		
		```
		function Car() {
		  return <h2>I am a Car!</h2>;
		}

		function Garage() {
		  return (
			<>
			  <h1>Who lives in my Garage?</h1>
			  <Car />
			</>
		  );
		}

		const root = ReactDOM.createRoot(document.getElementById('root'));
		root.render(<Garage />);
		
		```
		
		
	Components in files: 
	
		React is all about re-using code. 
		
		Is recommended to split your components into separate files.
	
		create a new file with a .js 
		
		put the code inside it:
		
		filename must start with an uppercase character
	
		like component 
		
		
		new file, we named it "Car.js":
		
		```
		function Car() {
		  return <h2>Hi, I am a Car!</h2>;
		}

		export default Car;
				
		```

		to use, import the file in your app
		
		
		import the "Car.js"
		
		```
		import React from 'react';
		import ReactDOM from 'react-dom/client';
		import Car from './Car.js';

		const root = ReactDOM.createRoot(document.getElementById('root'));
		root.render(<Car />);
		
		```
		

		
	






