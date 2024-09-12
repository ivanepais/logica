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





    	


