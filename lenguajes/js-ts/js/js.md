#JS


# JS-DOM

	Se construye en base a seleccionar un elemento del HTML con el DOM y después modificarlo con JS. 
	
	```
	document.getElementById("myBtn").addEventListener("click", function())

	```
	
	```
	document.querySelector("[insert HTML reference])

	element.classList.add("[insert class name]")

	element.classList.remove("[insert class name]")

	element.addEventListener("click", () => { [function actions] })

	setTimeout(() => { [function actions] }, [insert delay in ms])

	setInterval(() => { [function actions] }, [insert delay in ms]) 


	const someElement = document.querySelector("#someElement")

	someElement.addEventListener("click", () => {
		setTimeout(() => {
			someElement.classList.add("animation")
		}, 2000);
		setTimeout(() => {
			someElement.classList.remove("animation")
		}, 4000)
	});
		
	```
	
	event listeners like onclick, onhover, onkeypress,onchange,etc 
	along with css transition and custom animation
	
	

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



# JavaScript


	Ejecución de Js:

		Orden de ejecución JS. 
		
		arriba a abajo:

			botón
			detector de eventos
			función
			
		```
		const button = document.querySelector("button");

		button.addEventListener("click", updateName);

		function updateName() {
		  const name = prompt("Enter a new name");
		  button.textContent = `Player 1: ${name}`;
		}

		/*
		Si cambiara el orden de las dos primeras líneas de código, ya no funcionaría; en su lugar, obtendría un error en la consola del desarrollador del navegador: Error de referencia no detectado: no se puede acceder al 'botón' antes de la inicialización. Esto significa que el objeto del botón aún no se ha inicializado, por lo que no podemos agregar un detector de eventos
		*/
		
		```
		
	
	Carga de JS: 
		
		Externo: 
		
			```
			<head>
				...

				<script src="script.js" defer></script>
			
			</head>
			
			```


	Estrategias de carga:
	
		Si está utilizando JavaScript para manipular elementos en la página (o más exactamente, el modelo de objetos de documento), su código no funcionará si JavaScript se carga y analiza antes que el HTML al que está intentando hacer algo.
		
		En los ejemplos de código anteriores, en los ejemplos internos y externos, JavaScript se carga y ejecuta en el encabezado del documento, antes de que se analice el cuerpo HTML. 

		Esto podría provocar un error, por lo que hemos utilizado algunas estructuras para solucionarlo.

		
	
		JS Interno: 

			Se puede ver esta estructura alrededor del código.

			```js

			document.addEventListener("DOMContentLoaded", () => {
			  // …
			});


			```

			Es un detector de eventos, que escucha el evento 'DOMContentLoaded' del navegador, lo que significa que el cuerpo HTML está completamente cargado y analizado. 

			El JavaScript dentro de este bloque no se ejecutará hasta que se active ese evento, por lo tanto se evita el error.


				JS Externo: 

			Utilizamos una característica de JavaScript más moderna para resolver el problema, el atributo defer, que le indica al navegador que continúe descargando el contenido HTML una vez que se haya alcanzado el elemento de etiqueta <script>.

			```js

			<script src="script.js" defer></script>

			```

			Tanto el script como el HTML se cargarán simultáneamente y el código funcionará.


			En el caso externo, no necesitábamos usar el evento 'DOMContentLoaded' porque el atributo defer resolvió el problema por nosotros. 

			No utilizamos la solución de aplazar para el ejemplo de JavaScript interno porque aplazar solo funciona para scripts externos.

			Una solución antigua a este problema solía ser colocar el elemento del script justo en la parte inferior del cuerpo (por ejemplo, justo antes de la etiqueta </body>), para que se cargara después de que se hubiera analizado todo el HTML. 

			El problema con esta solución es que la carga/análisis del script está completamente bloqueado hasta que se haya cargado el DOM HTML. 

			En sitios más grandes con mucho JavaScript, esto puede causar un problema importante de rendimiento y ralentizar su sitio.

			
	Atributos async y defer: 

		En realidad, hay dos funciones modernas que podemos utilizar para evitar el problema del script de bloqueo: asíncrono y diferido (que vimos anteriormente). 

		Veamos la diferencia entre estos dos.

		Los scripts cargados usando el atributo async: 

			Descargarán el script sin bloquear la página mientras se recupera el script. 

			Sin embargo, una vez que se completa la descarga, se ejecutará el script, lo que bloqueará la visualización de la página. 

			Esto significa que se impide que el resto del contenido de la página web se procese y se muestre al usuario hasta que el script termine de ejecutarse.

			No tiene garantía de que los scripts se ejecuten en un orden específico. 

			Es mejor utilizar async cuando los scripts de la página se ejecutan de forma independiente y no dependen de ningún otro script de la página.


		Los scripts cargados con el atributo defer: 

			Se cargarán en el orden en que aparecen en la página. 

			No se ejecutarán hasta que todo el contenido de la página se haya cargado, lo cual es útil si sus scripts dependen de que el DOM esté implementado (por ejemplo, modifican uno o más elementos en la página).
	
			Ejemplo async: 	

			```html

			<script async src="js/vendor/jquery.js"></script>

			<script async src="js/script2.js"></script>

			<script async src="js/script3.js"></script>

			```

			No puede confiar en el orden en que se cargarán los scripts. 

			jquery.js puede cargarse antes o después de script2.js y script3.js y, si este es el caso, cualquier función en esos scripts que dependa de jquery producirá un error porque jquery no se definirá en el momento en que se ejecute el script.

			async debe usarse cuando tiene un montón de scripts en segundo plano para cargar y solo desea implementarlos lo antes posible. 

			Por ejemplo, tal vez tengas que cargar algunos archivos de datos del juego, que serán necesarios cuando el juego realmente comience, pero por ahora solo quieres continuar mostrando la introducción del juego, los títulos y el lobby, sin que se bloqueen al cargar el script.


		Ejemplo defer:	


			```html

			<script defer src="js/vendor/jquery.js"></script>

			<script defer src="js/script2.js"></script>

			<script defer src="js/script3.js"></script>

			```

			Los scripts cargados usando el atributo defer se ejecutarán en el orden en que aparecen en la página y se ejecutarán tan pronto como se descarguen el script y el contenido.

			Podemos estar seguros de que jquery.js se cargará antes que script2.js y script3.js y que script2.js se cargará antes que script3.js. 

			No se ejecutarán hasta que todo el contenido de la página se haya cargado, lo cual es útil si sus scripts dependen de que el DOM esté implementado (por ejemplo, modifican uno o más elementos en la página).


		async y defer indican al navegador que descargue los scripts en un hilo separado, mientras se descarga el resto de la página (el DOM, etc.), por lo que la carga de la página no se bloquea durante el proceso de recuperación.
		
		Los scripts con un atributo async se ejecutarán tan pronto como se complete la descarga. 

		Esto bloquea la página y no garantiza ninguna orden de ejecución específica.


		Los scripts con un atributo defer se cargarán en el orden en que se encuentran y solo se ejecutarán una vez que todo haya terminado de cargarse.
		
		Si sus scripts deben ejecutarse inmediatamente y no tienen ninguna dependencia, utilice async.
		
		Si sus scripts necesitan esperar a ser analizados y dependen de otros scripts y/o del DOM implementado, cárguelos usando aplazar y coloque sus elementos <script> correspondientes en el orden en que desea que el navegador los ejecute.

		
		
	
	Juego js + html: 

		Divs para form y parrafos que están vinculados con constantes de JS. 

		Variables para valores interactivos, botones, funciones cambiantes, etc. 

		En los condicionales validamos los campos con funciones incorporadas para asegurarnos que ingrese el adecuado. 

		Tambien comparamos valores de varibles para activar los diferentes escenarios que planteamos en el condicional. 

		Para crear una coincidencia o match, usamos el operador de igualdad estricta. 

		Para hacer otras comparaciones usamos <, >, etc. 

		Necesitamos llamar a la función principal y para eso usamos un evento incorporado que toma como parametros un tipo de acción y una función, la asociamos a un botón. 

		Cuando el usuario pierde el juego no debería poder acceder a ciertas funciones o botones por lo que las deshabilitamos y cambiamos el aspecto gráfico del juego

		Además debemos establecer el reinicio del juego, creamos el boton de reset asociandole un evento y una función. 

		Creamos la funcion de reset, deshabilitando funciones, resetenado valores al valor original y cambiamos el aspecto del juego. 

		Bucles: recorre un array para guardar en una variable cada elemento de ese array. Seguido de eso puede imprimir los valores, operarlos o cualquier acción dentro de las llaves. 

		Objetos: son funciones relacionadas. 

		Focus en un campo para que el usuario pueda escribir directamente sin tener que mover el cursor hacia el campo.



# Características de JS

	Variables: 

		Declarar const o let: 

			depende del contendio, ej: 

			let myName;
			myName = "Chris";
			let myAge = 42;

			`let` es ideal para ambas declaraciones.

			`const` no es realmente apropiado, ya que dichos valores pueden cambiar y no funcionará en primera instancia. 

			`var` no está bien.


# Variables 

	Matemática1: 

		Comprobar resultado o número par: 

			usar operador %(resto)
			y además el número 2. 

			0 = par
			1 = impar

			let num1 = 2
			let esPar = num1%2


		typeof var1;
		

		.toFixed();
			
			let numFixed = bigNum.toFixed(2);


	Buenas Prácticas1: 

		Nombrar variables: 

			Debemos pensar que es lo que mejor representa lo que contiene en la parte derecha. 

			ej: si es un número

				let var1 = 10 // no es lo mejor

				let num1 = 10 // el contenido está mejor representado por el noombre elegido. 

				o

				let number1 = 10 // mucho mejor


	  		// Con variables: 

  		//Ideales para almacenar la información que necesita el programa
		
		```
  		/*
  		const buttonA = document.querySelector("#button_A");
		const headingA = document.querySelector("#heading_A");

		buttonA.onclick = () => {
		  const name = prompt("What is your name?");
		  alert(`Hello ${name}, nice to see you!`);
		  headingA.textContent = `Welcome ${name}`;
		};
		*/
		
		```


		// Sin variables
		
		```

		const buttonB = document.querySelector("#button_B");
		const headingB = document.querySelector("#heading_B");

		buttonB.onclick = () => {
		  alert(`Hello ${prompt("What is your name?")}, nice to see you!`);
		  headingB.textContent = `Welcome ${prompt("What is your name?")}`;
		};
		
		```
		
		
	Matemáticas y Operadores: 	
	
	Operadores: 
	
		Aritméticos:

			+ - * / % **

		precedencia: 

			1.  *, /
			2. +, - 

			Se cambia con (). 

		
		Incremento y decremento:
			
			Ideal: 
				++num1 --num2

				Incrementa y después devuelve el nuevo valor. 


			Alternativo: 	
				num1++ num2--
				
				devuelve el valor actual y luego lo incrementa.

		Asignación: 

			+=

				x += 4;
				x = x + 4;

			-=
				
				x -= 3;
				x = x - 3;

			*=
				
				x *= 3;
				x = x * 3;

			/=
				x /= 5;
				x = x / 5;


		Comparación: 
			
			===
				5 === 2 + 4

			!==

				5 !== 2 + 3

			<
				10 < 6
			
			>
				10 > 20

			<=	

				3 <= 2

			>=
				5 >= 4
	Comprobar resultado o número par: 

		usar operador %(resto)
		y además el número 2. 

		0 = par
		1 = impar

		let num1 = 2
		let esPar = num1%2


	Tareas: 

	1. Resultado final 48 y par: 

		const number1 = 4;
		const number2 = 8;
		const number3 = 12;
		const number4 = 8;

		const additionResult = number1 + number2;
		const subtractionResult = number3 - number4;

		finalResult = additionResult * subtractionResult;

		evenOddResult = finalResult % 2;
	

	2. Precedencia, toFixed y conversión: 

		let result = (7 + 13) / (9 + 7);
		
		let result2 = 100 / (2 * 6);

		result *= result2;

		const finalResult = result.toFixed(2);

		const finalNumber = Number(finalResult);


	3. Comparaciónes booleanas: 

		const weightComparison = eleWeight < mouseWeight;

		const heightComparison = ostrichHeight > duckHeight;

		const pwdMatch = pwd1 === pwd2;



# Cadenas

	concatenar: 
		
		const greeting = "Hello";
		const name = "Chris";
		console.log(greeting + ", " + name); // "Hello, Chris"


		console.log(`${greeting}, ${name}`); // "Hello, Chris"
		

	conversión a number o string: 
	

	formatear simbolos: 
		
		const bigmouth = 'I\'ve got no right to take my place…';
		console.log(bigmouth);


	concatenación en contexto: 

		const button = document.querySelector("button");

		function greet() {
		  const name = prompt("What is your name?");
		  const greeting = document.querySelector("#greeting");
		  greeting.textContent = `Hello ${name}, nice to see you!`;
		}

		button.addEventListener("click", greet);


	Longitud/tamaño/:

		.length;

	Indices: 
		
		[0];

	1. Recuperar el ultimo elemento de cualquier cadena: 

		Hay que hacer un cálculo lógico: 

		```
		const browserType = "mozilla";
		browserType.length;

		browserType[browserType.length - 1];

		```

		La longitud de la cadena "mozilla" es 7, pero como el recuento comienza en 0, la posición del último carácter es 6; usar longitud-1 nos da el último carácter.


	2. Subcadenas y condicional: 

		1. includes(subCadena):
			true or false

		2. startsWith(sub):
			comienza con subcadena
			condicional, devuelve 

		3. endsWith(ena)
			termina con subcadena

		4. indexOf(subcadenaBuscada, indiceComienzoBusqueda-opcional-) 
			
			devuelve indice, cuenta espacios vacios

			si no está presente la subcadena devuelve -1.

		5. slice(indexInicioCorte, indexFinCorte):
			le pasamos indices para que corte y devuelva una palabra.

			el segundo indice no se incluye

			caracteres restantes: 
			le pasamos un solo indice desde donde empieza a cortar, lo incluye

		6. toUpperCase y toLowerCase():

		7. replace(subcadenaReemplazada, subcadenaReemplazo):

			reemplaza una subcadena con otra. 

			como muchos métodos de cadena, no cambia la cadena a la que se llamó, sino que devuelve una nueva cadena; por ese hay que guardarla en otra variable. 

			Si la queremos guardar en el mismo lugar, contenedor o variable;
			declarar usando let, no const, porque lo estamos reasignando.

		8. replaceAll()
			
			cambiar toda la cadena


	3. Incrustar operación con literales: 

		const song = "Fight the Youth";
		const score = 9;
		const highestScore = 10;
		const output = `I like the song ${song}. I gave it a score of ${
		  (score / highestScore) * 100
		}%.`;
		console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."


	4. Operación indexOf(): 

		Encontrar las posteriores subcadenas, después de que fue encontrada la primera:
		
		```
		const firstOccurrence = tagline.indexOf("developers");
		const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

		console.log(firstOccurrence); // 20
		console.log(secondOccurrence); // 35
		
		```
		la siguiente palabra la encontramos en el indice si le pasamos la primera subcadena y el indice de la 1°subcadena + 1 (posición)


	5. filtrar cadena: 

		condicional if debe recorrer array

		operamos la variable donde se guardan los valores de cada iteración/repetición y no el nombre del array. 

		metodo de cadena a utilizar
			includes('Christmas');

		Filtrar Christmas:

			Happy Birthday!
			Merry Christmas my love
			A happy Christmas to all the family
			You're all I want for Christmas
			Get well soon

		const list = document.querySelector('.output ul');
		list.innerHTML = '';
		const greetings = [
		  'Happy Birthday!',
		  'Merry Christmas my love',
		  'A happy Christmas to all the family',
		  'You\'re all I want for Christmas',
		  'Get well soon',
		];

		for (const greeting of greetings) {
		  // Your conditional test needs to go inside the parentheses
		  // in the line below, replacing what's currently there
		  if (greeting.includes('Christmas')) {
			const listItem = document.createElement('li');
			listItem.textContent = greeting;
			list.appendChild(listItem);
		  }
		}


	6. conversión de cadena, manipulación de subcadenas: 

		los parámetros de los métodos de cadena no tienen que ser literales de cadena; también pueden ser variables, o incluso variables con un método invocado en ellas.

		for (const city of cities) {
		  // write your code just below here
		  const lower = city.toLowerCase();


		Cambiar:			

			lonDon
			ManCHESTer
			BiRmiNGHAM
			liVERpoOL
		
		por: 				

			London
			Manchester
			Birmingham
			Liverpool

		```
		const list = document.querySelector('.output ul');
		list.innerHTML = '';
		const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

		for (const city of cities) {
		  // write your code just below here
		  const lower = city.toLowerCase();
		  const firstLetter = lower.slice(0,1);
		  const capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
		  const result = capitalized;
		  const listItem = document.createElement('li');
		  listItem.textContent = result;
		  list.appendChild(listItem);
		}

		```
	

	7. Extraer caracteres y reconstruir cadena: 
	
		const list = document.querySelector('.output ul');
		list.innerHTML = '';
		const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
		  'GNF576746573fhdg4737dh4;Greenfield',
		  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
		  'SYB4f65hf75f736463;Stalybridge',
		  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

		for (const station of stations) {
		  // write your code just below here

		  const code = station.slice(0,3);
		  const semiColon = station.indexOf(';');
		  const name = station.slice(semiColon + 1);
		  const result = `${code}: ${name}`;

		  const listItem = document.createElement('li');
		  listItem.textContent = result;
		  list.appendChild(listItem);
		}



	
	Practicas: 	
		
		Qué devuelve el método: 
			
			indice, valor, objeto, cantidad, etc. 

		Console.log para debug


	Tareas: 
	
	1. citas: 

	// Add your code here

	const quoteStart = 'Don\'t judge each day by the harvest you reap ';

	const quoteEnd = 'but by the seeds that the plant';

	const finalQuote = `${quoteStart} ${quoteEnd}`; 

	// Don't edit the code below here!

	section.innerHTML = ' ';
	const para1 = document.createElement('p');
	para1.textContent = finalQuote;

	section.appendChild(para1);


	2. 

		const quoteStart = "Don't judge each day by the harvest you reap ";
		const quoteEnd = "but by the seeds that you plant.";

		const finalQuote = `${quoteStart}${quoteEnd}`;


	3. 

		const quote = "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
		const substring = "green eggs and ham";

		const quoteLength = quote.length;

		const index = quote.indexOf(substring);

		const revisedQuote = quote.slice(0, index + substring.length + 1);
	

	4. 
		const quote = "I dO nOT lIke gREen eGgS anD HAM";

		let fixedQuote = quote.toLowerCase();
		const firstLetter = fixedQuote.slice(0, 1);
		fixedQuote = fixedQuote.replace(firstLetter, firstLetter.toUpperCase());

		fixedQuote = fixedQuote.replace("green eggs and ham", "pickled onions");

		const finalQuote = `${fixedQuote}.`;

	
	5. 
		const theorem = "Pythagorean theorem";

		const a = 5;
		const b = 8;

		const myString = `Using ${theorem}, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${Math.sqrt(
		  a ** 2 + b ** 2
		)}.`;

	

	Template literals: 

		Las comillas invertidas

		(``) tienen propiedades: 

		1. incrustan Js
		
			```
			const name = "Chris";
			const greeting = `Hello, ${name}`;
			
			```

		2. declarar multiples líneas en nueva línea:
			
			```
			const newline = `One day you finally knew
			what you had to do, and began,`;
			console.log(newline);

			/*
			One day you finally knew
			what you had to do, and began,
			*/
			
			```


	Formas de concatenación


	Código JS: 

		Función y evento: 

			La función de JS modifica los elementos html y el Evento en un elemento de html activa la función 


	Métodos de Cadena: 

	1. Recuperar el ultimo elemento de cualquier cadena: 

		Hay que hacer un cálculo lógico: 

		```
		const browserType = "mozilla";
		browserType.length;

		browserType[browserType.length - 1];

		```

		La longitud de la cadena "mozilla" es 7, pero como el recuento comienza en 0, la posición del último carácter es 6; usar longitud-1 nos da el último carácter.


	2. Subcadenas y condicional: 

		1. includes()

		2. startsWith()

		3. endsWith()

		4. indexOf(cadenaBuscada, indiceComienzoBusqueda) 

		5. slice()

		6. toUpperCase y toLowerCase()

		7. replace():

		Cambiar cadena:

			Si la queremos guardar en el mismo lugar, contenedor o variable;
			declarar browserType usando let, no const, porque lo estamos reasignando.

		8. replaceAll()



# Arrays

	Es una lista de objetos almacenados en una variable.

	Podemos acceder a sus elementos individualmente, recorrer los elementos para hacer una misma operacion/aplicar código a todos los elementos. 

		conjunto de elementos -> proposito -> matriz -> operación 

	Sin arrays tendríamos que operar a todos por separado. 

	Podemos almacenar varios tipos de datos: cadenas, números, objetos e incluso otras matrices

	mezclar tipos de datos en una sola matriz. 
	
	```
	const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];

	const sequence = [1, 1, 2, 3, 5, 8, 13];
	
	const random = ["tree", 795, [0, 1, 2]];

	```

	1. Longitud: 

		shopping.length // 5 elementos


	2. Acceso: 

		shopping.[0] // bread


	3. Modificación: 

		shopping[0] = "tahini";


	4. matriz multidimensional: 

		matriz dentro de otra. 

		1. Acceso: 
			
			dos conjuntos de corchetes 
		
		const random = ["tree", 795, [0, 1, 2]];
		random[2][2]; //2

		Se situa en el tercer elemento (subarray) -indice 2- y entra en el tercer subelemento (comienza desde 0). 
		
		random[3]['0']
		TypeError: random[3] is undefined


	5. indexOf(elemento):

		devolverá el índice
		

	6. push(elemento);
		
		se agrega al final


	7. push en variable: 

		con let o const quedan con los elementos hasta ese punto

		Si después actualizamos el array, no cambian estas variables. 

		const newLength = cities.push("Bristol");

		[ "Manchester", "Liverpool", "Cardiff", "London", "Newcastle", "Bristol" ]

		cities.push("Fulham"); //7

		console.log(cities);
		Array(7) [ "Manchester", "Liverpool", "Cardiff", "London", "Newcastle", "Bristol", "fulham" ]				
		console.log(newLength);//6
		
		let newLengthDos = cities.push("Burnley");//8

		cities.push("Nottingham");//9

		console.log(newLengthDos);//8


	8. unshift(elemento): 

		agregar al principio


	9. pop():

		no toma argum
		eliminar ultimmo elemento


	10. shift():
	
		eliminar el primer elemento


	11. slice(indiceComienzo, numElemEliminar):

	indexInicioCorte, indexFinCorte

		eliminar uno o más elementos

		Usando indexOf("elemento")//devuelve su indice y condicional if
		
		1.indice comienzo de corte (indice elemento)

		2. cantidad elementos a eliminar (condicional de acá en adelante)

		const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
		const index = cities.indexOf("Liverpool");
		if (index !== -1) {
		  cities.splice(index, 1);
		}
		console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]
		
		//empieza a cortar en 1 y frena en 1 (no incluye)

		const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
		const index = cities.indexOf("Liverpool");
		if (index !== -1) {
		  cities.splice(index, 2);
		}
		console.log(cities); // [ "Manchester", "Carlisle" ]
		
		//empieza a cortar en 1 y frena en 2 (no incluye)


	12 for... of: 

		acceder a todos los elementos. 

		const birds = ["Parrot", "Falcon", "Owl"];

		for (const bird of birds) {
		  console.log(bird);
		}


	13. map(): 

		modificar elementos
		
		function double(number) {
		  return number * 2;
		}
		const numbers = [5, 2, 7, 6];
		const doubled = numbers.map(double);
		console.log(doubled); // [ 10, 4, 14, 12 ]


	14. filter(): 
		
		crear coincidencia

		crear una nueva matriz que contenga solo los elementos de la matriz original que coincidan con alguna prueba.

		```
		function isLong(city) {
		  return city.length > 8;
		}
		const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
		const longer = cities.filter(isLong);
		console.log(longer); // [ "Liverpool", "Edinburgh" ]

		```

		definimos un función llamada isLong que toma un parametro city cuando se la llama, retornará los valores de parametros que sean mayores a 8. 

		Al igual que map(), le damos una función al método filter() y filter() llama a esta función para cada elemento de la matriz, pasando el elemento. 
		
		Si la función devuelve verdadero, entonces el elemento se agrega a una nueva matriz. 

		Finalmente devuelve la nueva matriz.


	15. split():

		datos sin procesar contenidos en una cadena grande

		1. único parámetro: 

			el carácter en el que desea separar la cadena.

			devuelve: 

				las subcadenas entre el separador como elementos de una matriz. 

			usa el caracter para crear una matriz
		
		const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

		const cities = data.split(",");
		cities;

		1 .divide a data en las comas

		2 recuperar longitud:
			
			con length: ->


	16. longitud y recuperar elementos: 

		operacion en length:

		cities.length;
		cities[0]; // the first item in the array
		cities[1]; // the second item in the array
		cities[cities.length - 1]; // the last item in the array
			
			3. ir en sentido contrario: join() ->

	17. join(): 
		
		Reconstruir cadena a partir de array

		usa el caracter para deshacer la matriz

		podemos especificar diferentes separadores/caract

		const commaSeparated = cities.join(",");
		commaSeparated;

		"Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"


	18. toString(): 

		parecido a join pero más limitante

		Con join() puedes especificar diferentes separadores, mientras que toString() siempre usa una coma. 

		reconstruir cadena a partir de array
			
		const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
		dogNames.toString(); // Rocket,Flash,Bella,Slugger


	reto 1: precios 	

		Underpants — $6.99
		Socks — $5.99
		T-shirt — $14.99
		Trousers — $31.99
		Shoes — $23.99

		Total: $83.95


		const list = document.querySelector('.output ul');
		const totalBox = document.querySelector('.output p');
		let total = 0;
		list.innerHTML = '';
		totalBox.textContent = '';

		const products = [
		  'Underpants:6.99',
		  'Socks:5.99',
		  'T-shirt:14.99',
		  'Trousers:31.99',
		  'Shoes:23.99',
		];

		for (const product of products) {
		  const subArray = product.split(':');
		  const name = subArray[0];
		  const price = Number(subArray[1]);
		  total += price;
		  const itemText = `${name} — $${price}`;

		  const listItem = document.createElement('li');
		  listItem.textContent = itemText;
		  list.appendChild(listItem);
		}

		totalBox.textContent = `Total: $${total.toFixed(2)}`;


	reto 2: registro de los elementos 

		push, pop
		
		cuando se ingresan términos en el cuadro de búsqueda, los 5 términos de búsqueda anteriores principales se muestran en la lista. 

		Cuando el número de términos supera 5, el último término comienza a eliminarse cada vez que se agrega un nuevo término en la parte superior, por lo que siempre se muestran los 5 términos anteriores.
	
	const list = document.querySelector('.output ul');
	const searchInput = document.querySelector('.output input');
	const searchBtn = document.querySelector('.output button');

	list.innerHTML = '';

	const myHistory = [];
	const MAX_HISTORY = 5;

	searchBtn.onclick = () => {
	  // we will only allow a term to be entered if the search input isn't empty
	  if (searchInput.value !== '') {
		myHistory.unshift(searchInput.value);

		// empty the list so that we don't display duplicate entries
		// the display is regenerated every time a search term is entered.
		list.innerHTML = '';

		// loop through the array, and display all the search terms in the list
		for (const itemText of myHistory) {
		  const listItem = document.createElement('li');
		  listItem.textContent = itemText;
		  list.appendChild(listItem);
		}

		// If the array length is 5 or more, remove the oldest search term
		if (myHistory.length >= MAX_HISTORY) {
		  myHistory.pop();
		}

		// empty the search input and focus it, ready for the next term to be entered
		searchInput.value = '';
		searchInput.focus();
	  }
	}



	tareas: 
	
	1. 

		let myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";

		let myArray = myString.split("+");

		let arrayLength = myArray.length;

		let lastItem = myArray[arrayLength - 1];

	2. 

		let myArray = ["cats", "dogs", "chickens"];

		myArray[0] = "horses";
		myArray[1] = "pigs";

		myArray.unshift("crocodiles");
	
	3. 
		Elimina el último elemento de la matriz.

		Agregue dos nombres nuevos al final de la matriz.

		Repase cada elemento de la matriz y agregue su número de índice después del nombre entre paréntesis, por ejemplo, Ryu (0)


		sacando el último elemento de la matriz usando myArray.pop().

		dos nombres nuevos al final de la matriz usando myArray.push()
		
		usar .forEach() o alguno para repasar cada elemento de la matriz y agregar su número de índice. después del nombre entre paréntesis.

		Tenga en cuenta que cuando utiliza forEach está realizando operaciones en una copia de los elementos de la matriz, no en los elementos de la matriz en sí, por lo que no puede cambiarlos directamente; debe crear el nuevo elemento de la matriz y copiarlo nuevamente.

		Finalmente, debe unir los elementos de la matriz en una cadena usando myArray.join(' - ') y almacenar el resultado en myString.

		let myArray = [
		  "Ryu",
		  "Ken",
		  "Chun-Li",
		  "Cammy",
		  "Guile",
		  "Sakura",
		  "Sagat",
		  "Juri",
		];

		myArray.pop();

		myArray.push("Zangief");
		myArray.push("Ibuki");

		myArray.forEach(function (element, index) {
		  let newElement = `${element} (${index})`;
		  myArray[index] = newElement;
		});

		let myString = myArray.join(" - ");


	4. 
		Busque el índice del elemento "Águilas" y utilícelo para eliminar el elemento "Águilas".

		Crea una nueva matriz a partir de ésta, llamada eBirds, que contenga sólo aves de la matriz original cuyos nombres comiencen con la letra "E". 

		Tenga en cuenta que comienza con () es una excelente manera de verificar si una cadena comienza con un carácter determinado.


		Deberías empezar por encontrar el índice de "Eagles", usando Birds.indexOf().

		A continuación, utilice el índice con bird.splice() para eliminar el elemento "Águilas".

		Finalmente, puedes usar bird.filter() para obtener una matriz que contenga solo pájaros que comiencen con "E".

		La función pasada a filter() puede usar bird.startsWith() para probar si el pájaro comienza con "E".

		const eaglesIndex = birds.indexOf("Eagles");
		birds.splice(eaglesIndex, 1);

		function startsWithE(bird) {
		  return bird.startsWith("E");
		}
		const eBirds = birds.filter(startsWithE);




# Bloques de Código




# Condicionales 




# Bucles 




# Funciones







