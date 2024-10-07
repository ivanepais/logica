	
//JS

/* Orden de Ejecución
 * ----------------------------------------------
 */
	
<button type="button">Player 1: Chris</button>

button {
  font-family: "helvetica neue", helvetica, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 2px solid rgb(200 200 0 / 60%);
  background-color: rgb(0 217 217 / 60%);
  color: rgb(100 0 0 / 100%);
  box-shadow: 1px 1px 2px rgb(0 0 200 / 40%);
  border-radius: 10px;
  padding: 3px 10px;
  cursor: pointer;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}



/* Script/funcion anonima
 * Debería ver que cuando hace clic en el botón, se genera un nuevo párrafo y se coloca debajo.
 * ----------------------------------------------
 */

document.addEventListener("DOMContentLoaded", () => {
  function createParagraph() {
	const para = document.createElement("p");
	para.textContent = "You clicked the button!";
	document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll("button");

  for (const button of buttons) {
	button.addEventListener("click", createParagraph);
  }
});




/* Recorrer todos los botones 
 * ----------------------------------------------
 */
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}



/* Variables para almacenar datos
 * const vs let 
 * ----------------------------------------------
 */

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;


//A la primera variable, 'randomNumber', se le asigna un número aleatorio entre 1 y 100, calculado mediante un algoritmo matemático.

//Las primeras tres constantes están diseñadas para almacenar una referencia a los párrafos de resultados en nuestro HTML, y se usan para insertar valores en los párrafos más adelante en el código (observe cómo están dentro de un elemento <div>, que a su vez se usa para Seleccionar los tres más adelante para restablecerlos, cuando reiniciemos el juego).

<div class="resultParas">
  <p class="guesses"></p>
  <p class="lastResult"></p>
  <p class="lowOrHi"></p>
</div>


//Las siguientes dos constantes almacenan referencias a la entrada de texto del formulario y al botón de envío y se utilizan para controlar el envío de la suposición más adelante.


<label for="guessField">Enter a guess: </label>
<input type="number" id="guessField" class="guessField" />
<input type="submit" value="Submit guess" class="guessSubmit" />


//Nuestras dos últimas variables almacenan un recuento de conjeturas de 1 (utilizado para realizar un seguimiento de cuántas conjeturas ha tenido el jugador) y una referencia a un botón de reinicio que aún no existe (pero que existirá más adelante).


//Funciones

function checkGuess() {
  alert("I am a placeholder");
}

checkGuess();



/* Operadores
 * ----------------------------------------------
 */
 
 +, -, *, /
 
let number1 = 1;
number1 += 2;

Igualdad estricta: ===

5 === 2 + 4 // false
'Chris' === 'Bob' // false
5 === 2 + 3 // true
2 === '2' // false; number versus string
 
No igual/distinto: !==

5 !== 2 + 4 // true
'Chris' !== 'Bob' // true
5 !== 2 + 3 // false
2 !== '2' // true; number versus string

Menor que: <

6 < 10 // true
20 < 10 // false

Mayor que: >

6 > 10 // false
20 > 10 // true 



/* Cadenas
 * ----------------------------------------------
 */

const name = "Mahalia";

const greeting = `Hello ${name}`;


function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
	guesses.textContent = "Previous guesses:";
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
	lastResult.textContent = "Congratulations! You got it right!";
	lastResult.style.backgroundColor = "green";
	lowOrHi.textContent = "";
	setGameOver();
  } else if (guessCount === 10) {
	lastResult.textContent = "!!!GAME OVER!!!";
	lowOrHi.textContent = "";
	setGameOver();
  } else {
	lastResult.textContent = "Wrong!";
	lastResult.style.backgroundColor = "red";
	if (userGuess < randomNumber) {
	  lowOrHi.textContent = "Last guess was too low!";
	} else if (userGuess > randomNumber) {
	  lowOrHi.textContent = "Last guess was too high!";
	}
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}



/* Eventos
 * Toma dos valores de entrada (llamados argumentos)
 * El tipo de evento que estamos escuchando (en este caso, hacer clic) como una cadena
 * El código que queremos ejecutar cuando ocurra el evento (en este caso, 'checkGuess()' función). 
 * ----------------------------------------------
 */
 
guessSubmit.addEventListener("click", checkGuess);



/* Loops/Bucles
 * ----------------------------------------------
 */
const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);

const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";

//Este código crea una variable que contiene una lista de todos los párrafos dentro de <div class="resultParas"> usando el método 'querySelectorAll()', luego recorre cada uno de ellos, eliminando el contenido de texto de cada uno.
//Tenga en cuenta que aunque 'resetPara' es una constante, podemos cambiar sus propiedades internas como 'textContent'.



/* Objetos
 * ----------------------------------------------
 */

const guessField = document.querySelector(".guessField");

guessField.focus();

//Un método disponible para ingresar elementos es 'focus()', por lo que ahora podemos usar esta línea para enfocar la entrada de texto.

guessField.value = 2;
guesses.value;
guesses.textContent = "Where is my paragraph?";

guesses.style.backgroundColor = "yellow";
guesses.style.fontSize = "200%";
guesses.style.padding = "10px";
guesses.style.boxShadow = "3px 3px 6px black";



/* Varialbes
 * Contiene valor o referencia a ellos. 
 * ----------------------------------------------
 */

<button id="button_A">Press me</button>
<h3 id="heading_A"></h3>

const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
  headingA.textContent = `Welcome ${name}`;
};


let myName;
let myAge;

myName;
myAge;

scoobyDoo;


myName = "Chris";
myAge = 37;

myName;
myAge;

let myDog = "Rover";


myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

var myName;


var myName = "Chris";
var myName = "Bob";

let myName = "Chris";
let myName = "Bob";

let myName = "Chris";
myName = "Bob";

myName = "Bob";
myAge = 40;


let myAge = 17;
let dolphinGoodbye = "So long and thanks for all the fish";

let iAmAlive = true;
let test = 6 < 3;


let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40


let dog = { name: "Spot", breed: "Dalmatian" };
dog.name;


/* Tipado.Dinamico
 * ----------------------------------------------
 */

let myString = "Hello";

let myNumber = "500"; // oops, this is still a string
typeof myNumber;
myNumber = 500; // much better — now this is a number
typeof myNumber;



/* Constantes.
 * Debes inicializarlos cuando los declares
 * Mo puede asignarles un nuevo valor después de haberlos inicializado.

 * Tenga en cuenta que, aunque una constante en JavaScript siempre debe nombrar el mismo valor
 * puede cambiar el contenido del valor que nombra. 
 * Esta no es una distinción útil para tipos simples como números o booleanos
 * Considere un objeto
 * Puede actualizar, agregar o eliminar propiedades de un objeto declarado usando const, porque aunque el contenido del objeto haya cambiado
 * La constante sigue apuntando al mismo objeto.
 * ----------------------------------------------
 */
 
const count;

let count = 1;
count = 2;

const count = 1;
count = 2;


const bird = { species: "Kestrel" };
console.log(bird.species); // "Kestrel"
bird.species = "Striated Caracara";
console.log(bird.species); // "Striated Caracara"


/* 	Cuándo usar const y cuándo usar let:

Si no puedes hacer tanto con const como con let, 
¿por qué preferirías usarlo en lugar de let?
De hecho, const es muy útil. 

Si usa const para nombrar un valor
le dice a cualquiera que mire su código que 
este nombre nunca se asignará a un valor diferente. 

Cada vez que vean este nombre, sabrán a qué se refiere.

Utilice const cuando pueda y let cuando sea necesario.
Esto significa que si puedes inicializar una variable
cuando la declaras y no necesitas reasignarla más tarde, 
conviértela en una constante.
 
*/



/* Numeros y operadores
 * ----------------------------------------------
 */

enteros, flotante, Binario, Octal, Hexadeciaml
 
const myInt = 5;
const myFloat = 6.667;
myInt;
myFloat;

typeof myInt;
typeof myFloat;


const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
 
let myNumber = "74";
myNumber += 3; 
typeof myNumber;
let myNumber = "74";
myNumber = Number(myNumber) + 3;

+, -, *, /, %, **

10 + 7;
9 * 8;
60 % 3;

const num1 = 10;
const num2 = 50;
9 * num1;
num1 ** 3;
num2 / num1;

5 + 10 * 3;
(num2 % 9) * num1;
num2 + num1 / 8 + 2;

(num2 + num1) / 8 + 2;
(num2 + num1) / (8 + 2);
(num2 + num1 / 8 ) + 2;
num2 + num1 / (8 + 2);
num2 + (num1 / 8 + 2);


guessCount++;
3++ //error

//El navegador primero devuelve el numero actual
// despues lo incrementa
let num1 = 4;
num1++;

num1;

let num2 = 6;
num2--;
num2;

//primero lo incrementa y despues devuelve el numero
++num1 y --num2


let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4

Asignación de adición: +=
x += 4;
x = x + 4;

x -= 3;
x = x - 3;

Asignación de multiplicación: *=
x *= 3;
x = x * 3;

Asignación de división: /=
x /= 5;
x = x / 5;


let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12


//resto: divide per devuelve el resto. 
x = 9; 
x%= 5; 
//return 4


//de izq a der
Igualdad Estricta: ===
5 === 2 + 4

Igualdad No Estricta: !==
5 !== 2 + 3

Menor que: <
10 < 6

Mas grande que: >
10 > 20

Menor o igual que: <=
3 <= 2

Mayor o igual que: >=
5 >= 4

Algunas personas usan == y != en sus pruebas de igualdad y no igualdad. 
Las versiones estrictas suelen dar lugar a menos errores, por lo que te recomendamos utilizarlas


//Ej
<button>Start machine</button>
<p>The machine is stopped.</p>

const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start machine") {
	btn.textContent = "Stop machine";
	txt.textContent = "The machine has started!";
  } else {
	btn.textContent = "Start machine";
	txt.textContent = "The machine is stopped.";
  }
}



/* Cadenas
 * ----------------------------------------------
 */

const string = "The revolution will not be televised.";
console.log(string);

const badString1 = This is a test;
const badString2 = 'This is a test;
const badString3 = This is a test';

const badString = string;
console.log(badString);


const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

const badQuotes = 'This is not allowed!";


const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"


//Ej: 
<button>Press me</button>	
<div id="greeting"></div>

const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);


//+ vs $
const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"

const greeting = "Hello";
const name = "Chris";
console.log(`${greeting}, ${name}`); // "Hello, Chris"


// Expresiones en $
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); 
// "I like the song Fight the Youth. I gave it a score of 90%."


//Separar cadena

//1. 

const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/

//2.

const newline = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline);


//Escape de caracter

const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);


//num and strings

const name = "Front ";
const number = 242;
console.log(name + number); // "Front 242"
//err 


const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
// string


/*
Por ejemplo, si un usuario ingresa un número en el campo de texto de un formulario, es una cadena. 

Sin embargo, si desea agregar este número a algo, necesitará que sea un número, por lo que podría pasarlo a través de Number() para manejar esto. 
  
 */



/* Metodos como cadenas
 * Cadenas como objetos
 * ----------------------------------------------
 */

const string = "This is my string";

//Se convierte en una instancia del objeto cadena

const browserType = "mozilla";
browserType.length;

browserType[0];
//caracter especifico

browserType[browserType.length - 1];
//ultimo char


//Subcadena: .includes
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}


//Comienza o termina 
const browserType = "mozilla";

if (browserType.startsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}


const browserType = "mozilla";

if (browserType.endsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}


//Posición de la subcadena indexOf() 
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20

console.log(tagline.indexOf("x")); // -1
//Si la cadena no contiene la subcadena, devuelve -1


const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
//Aquí le indicamos al método que busque la subcadena "desarrolladores" comenzando en el índice 21 (firstOccurrence + 1), y devuelve el índice 35.


//Extraer una subcadena
const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"

browserType.slice(2); // "zilla"


//Case
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());


//Actualizar: .replace
const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"

//Devuelve una nueva cadena 


//Si desea actualizar la variable browserType original, tendría que hacer algo como esto:
//También tenga en cuenta que ahora tenemos que declarar browserType usando let, no const, porque lo estamos reasignando.
//Tenga en cuenta que replace() en este formulario solo cambia la primera aparición de la subcadena.
let browserType = "mozilla";
browserType = browserType.replace("moz", "van");

console.log(browserType); // "vanilla"


let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"



/* Arrays
 * ----------------------------------------------
 */

const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);

//Una matriz podemos almacenar varios tipos de datos: cadenas, números, objetos e incluso otras matrices. 
const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ["tree", 795, [0, 1, 2]];

const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length); // 5


//Acceso y modificación
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping[0]);
// returns "bread"

const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
shopping[0] = "tahini";
console.log(shopping);
// shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]

const random = ["tree", 795, [0, 1, 2]];
random[2][2];

const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1


//Agregar =/= Modificar
const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("Bradford", "Brighton");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]


//nueva matriz
const cities = ["Manchester", "Liverpool"];
const newLength = cities.push("Bristol");
console.log(cities); // [ "Manchester", "Liverpool", "Bristol" ]
console.log(newLength); // 3


//Agregar al inicio
const cities = ["Manchester", "Liverpool"];
cities.unshift("Edinburgh");
console.log(cities); // [ "Edinburgh", "Manchester", "Liverpool" ]


//Eliminar elementos
const cities = ["Manchester", "Liverpool"];
cities.pop();
console.log(cities); // [ "Manchester" ]


//El método pop() devuelve el elemento que se eliminó. Para guardar ese elemento en una nueva variable, puede hacer esto:
const cities = ["Manchester", "Liverpool"];
const removedCity = cities.pop();
console.log(removedCity); // "Liverpool"


//Para eliminar el primer elemento de una matriz, use shift():
const cities = ["Manchester", "Liverpool"];
cities.shift();
console.log(cities); // [ "Liverpool" ]


//Eliminar elemento con indice conocido con splice()
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]

//el primer argumento dice dónde comenzar a eliminar elementos y el segundo argumento dice cuántos elementos deben eliminarse. Entonces puedes eliminar más de un elemento:
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities); // [ "Manchester", "Carlisle" ]


//Acceso a cada elemento
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}


//Modificar elementos usando map(). 
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]

//Le damos una función a map(), y map() llama a la función una vez para cada elemento de la matriz, pasando el elemento. 
//Luego agrega el valor de retorno de cada llamada a función a una nueva matriz y finalmente devuelve la nueva matriz.


//Nueva matriz condicional con filter().
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]

//Le damos una función al método filter() y filter() llama a esta función para cada elemento de la matriz, pasando el elemento. 
//Si la función devuelve verdadero, entonces el elemento se agrega a una nueva matriz. 
//Finalmente devuelve la nueva matriz.


//Conversión entre cadenas y matrices

//split()
//A menudo se le presentarán algunos datos sin procesar contenidos en una cadena grande y larga, y es posible que desee separar los elementos útiles en una forma más útil y luego hacerles cosas, como mostrarlos en una tabla de datos.
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const cities = data.split(",");
cities;

cities.length;
cities[0]; // the first item in the array
cities[1]; // the second item in the array
cities[cities.length - 1]; // the last item in the array


//Cadena a partir de un array
const commaSeparated = cities.join(",");
commaSeparated;


//matriz en una cadena de otra forma
//toString()
//es posiblemente más simple que join() ya que no requiere un parámetro, pero es más limitante.
//Con join() puedes especificar diferentes separadores, mientras que toString() siempre usa una coma. (Intente ejecutar el Paso 4 con un carácter diferente a una coma).
const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
dogNames.toString(); // Rocket,Flash,Bella,Slugger



/* Condicionales
 * ----------------------------------------------
 */
  
if (condition) {
  /* code to run if condition is true */
} else {
  /* run some other code instead */
}


if (condition) {
  /* code to run if condition is true */
}

/* run some other code */

//el segundo bloque de código no está controlado por la declaración condicional, por lo que siempre se ejecuta, independientemente de si la condición devuelve verdadero o falso. 


if (condition) /* code to run if condition is true */
else /* run some other code instead */


//Ej:
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}


//Else...if

<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>

<p></p>


const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
	para.textContent =
	  "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
	para.textContent =
	  "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
	para.textContent =
	  "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
	para.textContent =
	  "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
	para.textContent = "";
  }
}

//1. Aquí tenemos un elemento HTML <select> que nos permite elegir diferentes condiciones climáticas y un párrafo simple.
//2. En JavaScript, almacenamos una referencia a los elementos <select> y <p> y agregamos un detector de eventos al elemento <select> para que cuando se cambie su valor, se ejecute la función setWeather().
//3. Cuando se ejecuta esta función, primero configuramos una variable llamada elección al valor actual seleccionado en el elemento <select>. 
//Luego usamos una declaración condicional para mostrar texto diferente dentro del párrafo dependiendo de cuál sea el valor de elección. 
//Observe cómo se prueban todas las condiciones en los bloques else if () { }, excepto la primera, que se prueba en un bloque if () { }.
//4. La última opción, dentro del bloque else { }, es básicamente una opción de "último recurso": el código que contiene se ejecutará si ninguna de las condiciones es verdadera. 
//En este caso, sirve para vaciar el texto del párrafo si no hay nada seleccionado, por ejemplo, si un usuario decide volver a seleccionar la opción de marcador de posición "--Hacer una elección--" que se muestra al principio.


// Booleanos en Condicionales
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}


let shoppingDone = false;
let childsAllowance;

// We don't need to explicitly specify 'shoppingDone === true'
if (shoppingDone) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}


//Anidando if else

if (choice === "sunny") {
  if (temperature < 86) {
	para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
	para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}


//and, or, not
//&& - Y; le permite encadenar dos o más expresiones para que todas ellas tengan que evaluarse individualmente como verdaderas para que la expresión completa devuelva verdadera.
//|| - O; le permite encadenar dos o más expresiones para que una o más de ellas tengan que evaluarse individualmente como verdadera para que toda la expresión devuelva verdadero.

if (choice === "sunny" && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}


if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}

if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}

//si la declaración OR devuelve verdadero, el operador NOT la negará para que la expresión general devuelva falso.

if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // run the code
}

//err
if (x === 5 || 7 || 10 || 20) {
  // run my code
}


if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}


// Switch
switch (expression) {
  case choice1:
	// run this code
	break;

  case choice2:
	// run this code instead
	break;

  // include as many cases as you like

  default:
	// actually, just run this code
	break;
}

 
// Ternario
 condition ? run this code : run this code instead

const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
// Es toda una expresion

 
<label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
</select>

<h1>This is my website</h1>


const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener("change", () =>
  select.value === "black"
	? update("black", "white")
	: update("white", "black"),
);

//Aquí tenemos un elemento <select> para elegir un tema (blanco o negro), además de un h1 simple para mostrar el título de un sitio web. 
//También tenemos una función llamada update(), que toma dos colores como parámetros (entradas). 
//El color de fondo del sitio web se establece en el primer color proporcionado y el color del texto se establece en el segundo color proporcionado.
//Finalmente, también tenemos un detector de eventos onchange que sirve para ejecutar una función que contiene un operador ternario.
//Comienza con una condición de prueba: select.value === 'negro'. Si esto devuelve verdadero, ejecutamos la función update() con parámetros de blanco y negro, lo que significa que terminamos con un color de fondo negro y un color de texto blanco. 
//Si devuelve falso, ejecutamos la función update() con parámetros de blanco y negro, lo que significa que los colores del sitio están invertidos.
//Nota: También puede encontrar este ejemplo en GitHub (véalo ejecutándose en vivo allí también).



/* Bucles
 * ----------------------------------------------
 */

//dibujar 100 círculos aleatorios en un elemento <canvas> (presione el botón Actualizar para ejecutar el ejemplo una y otra vez para ver diferentes conjuntos aleatorios)

const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
});

function random(number) {
  return Math.floor(Math.random() * number);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
	ctx.beginPath();
	ctx.fillStyle = "rgb(255 0 0 / 50%)";
	ctx.arc(
	  random(canvas.width),
	  random(canvas.height),
	  random(50),
	  0,
	  2 * Math.PI,
	);
	ctx.fill();
  }
}

btn.addEventListener("click", draw);


//Recorrer Colección

//for of 
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
//1. Dados los gatos de la colección, obtén el primer artículo de la colección.
//2. Asígnelo a la variable cat y luego ejecute el código entre llaves {}.
//3. Obtenga el siguiente artículo y repita (2) hasta llegar al final de la colección.


//Map and filter
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const upperCats = cats.map(toUpper);
console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

[ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]


function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const filtered = cats.filter(lCat);
console.log(filtered);
// [ "Leopard", "Lion" ]

[ "Leopard", "Lion" ]


const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]


//Bucle estándar: Bucle for =/= for of 
for (initializer; condition; final-expression) {
  // code to run
}


const results = document.querySelector("#results");

function calculate() {
  for (let i = 1; i < 10; i++) {
	const newResult = `${i} x ${i} = ${i * i}`;
	results.textContent += `${newResult}\n`;
  }
  results.textContent += "\nFinished!\n\n";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));


// for of 
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}

// for 

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

//ofrece más posibilidades de introducir errores en su código. Por ejemplo:
//1. podrías comenzar i en 1, olvidando que el primer índice de la matriz es cero, no 1.
//2. puede detenerse en i <= cats.length, olvidando que el último índice de la matriz tiene una longitud de -1.
//Por motivos como este, normalmente es mejor utilizar for...of si puedes.


//A veces todavía necesitas usar un bucle for para iterar a través de una matriz. 
//Por ejemplo, en el código siguiente queremos registrar un mensaje que enumere nuestros gatos.

const cats = ["Pete", "Biggles", "Jasmine"];
let myFavoriteCats = "My cats are called ";

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); 
// "My cats are called Pete, Biggles, Jasmine, "

//La oración final no está muy bien formada:
//My cats are called Pete, Biggles, Jasmine,

//Preferiríamos que manejara al último gato de manera diferente, así:
//My cats are called Pete, Biggles, and Jasmine.


//Pero para hacer esto necesitamos saber cuándo estamos en la iteración final del bucle, y para hacerlo podemos usar un bucle for y examinar el valor de i:
	
const cats = ["Pete", "Biggles", "Jasmine"];
let myFavoriteCats = "My cats are called ";

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
	// We are at the end of the array
	myFavoriteCats += `and ${cats[i]}.`;
  } else {
	myFavoriteCats += `${cats[i]}, `;
  }
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."


// Break

<label for="search">Search by contact name: </label>
<input id="search" type="text" />
<button>Search</button>

<p></p>

const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const searchName = input.value.toLowerCase();
  input.value = "";
  input.focus();
  para.textContent = "";
  for (const contact of contacts) {
	const splitContact = contact.split(":");
	if (splitContact[0].toLowerCase() === searchName) {
	  para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
	  break;
	}
  }
  if (para.textContent === "") {
	para.textContent = "Contact not found.";
  }
});


//1. En primer lugar, tenemos algunas definiciones de variables:

	//tenemos una serie de información de contacto, y cada elemento es una cadena que contiene un nombre y un número de teléfono separados por dos puntos.

//2. A continuación, adjuntamos un detector de eventos al botón (btn) para que cuando se presione se ejecute algún código para realizar la búsqueda y devolver los resultados.

//3. Almacenamos el valor ingresado en la entrada de texto en una variable llamada 'searchName', antes de vaciar la entrada de texto y enfocarla nuevamente, lista para la siguiente búsqueda. 

//Tenga en cuenta que también ejecutamos el método toLowerCase() en la cadena, por lo que las búsquedas no distinguirán entre mayúsculas y minúsculas.

//4. Ahora pasemos a la parte interesante, el bucle for...of:

	//1. Dentro del bucle, primero dividimos el contacto actual en el carácter de dos puntos y almacenamos los dos valores resultantes en una matriz llamada 'splitContact'.

	//2. Luego usamos una declaración condicional para probar si splitContact[0] (el nombre del contacto, nuevamente en minúsculas con toLowerCase()) es igual al nombre de búsqueda ingresado. 

	//Si es así, ingresamos una cadena en el párrafo para informar cuál es el número del contacto y usamos break para finalizar el ciclo.

//5. Después del ciclo, verificamos si configuramos un contacto y, en caso contrario, configuramos el texto del párrafo en "Contacto no encontrado".


// Continue

<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>

const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  para.textContent = "Output: ";
  const num = input.value;
  input.value = "";
  input.focus();
  for (let i = 1; i <= num; i++) {
	let sqRoot = Math.sqrt(i);
	if (Math.floor(sqRoot) !== sqRoot) {
	  continue;
	}
	para.textContent += `${i} `;
  }
});


//1. En este caso, la entrada debe ser un número (num). 

//El bucle for recibe un contador que comienza en 1 (ya que en este caso no estamos interesados ​​en 0), una condición de salida que dice que el bucle se detendrá cuando el contador sea mayor que el número de entrada y un iterador que suma 1 al contador cada vez.

//2. Dentro del ciclo, encontramos la raíz cuadrada de cada número usando Math.sqrt(i), luego verificamos si la raíz cuadrada es un número entero probando si es igual a sí mismo cuando se ha redondeado hacia abajo al entero más cercano. 

//(Esto es lo que Math.floor() hace con el número que se pasa).

//3. Si la raíz cuadrada y la raíz cuadrada redondeada hacia abajo no son iguales (!==), significa que la raíz cuadrada no es un número entero, por lo que no nos interesa. 

//En tal caso, usamos la instrucción continue para pasar a la siguiente iteración del ciclo sin registrar el número en ninguna parte.

//4. Si la raíz cuadrada es un número entero, saltamos el bloque if por completo, por lo que la instrucción continuar no se ejecuta; en su lugar, concatenamos el valor i actual más un espacio al final del contenido del párrafo


//While y do While

initializer
while (condition) {
  // code to run

  final-expression
}


const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
	myFavoriteCats += `and ${cats[i]}.`;
  } else {
	myFavoriteCats += `${cats[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."


initializer
do {
  // code to run

  final-expression
} while (condition)

const cats = ["Pete", "Biggles", "Jasmine"];
let myFavoriteCats = "My cats are called ";

let i = 0;
do {
  if (i === cats.length - 1) {
	myFavoriteCats += `and ${cats[i]}.`;
  } else {
	myFavoriteCats += `${cats[i]}, `;
  }

  i++;
} while (i < cats.length);

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."


/*
Elección de Bucle: 

Si está iterando a través de una matriz o algún otro objeto que lo admita y no necesita acceso a la posición del índice de cada elemento, entonces for...of es la mejor opción. 

Es más fácil de leer y hay menos posibilidades de equivocarse.

Para otros usos, los bucles for, while y do... while son en gran medida intercambiables. 

Todos se pueden utilizar para resolver los mismos problemas, y cuál utilice dependerá en gran medida de sus preferencias personales: 

	cuál le resultará más fácil de recordar o más intuitivo.

Recomendamos, al menos para empezar, ya que probablemente sea el más fácil para recordar todo:

	el inicializador, la condición y la expresión final deben ir claramente entre paréntesis, por lo que es fácil ver dónde están y verificar. que no te los estás perdiendo.

*/


//for...of:

for (const item of array) {
  // code to run
}


//for:

for (initializer; condition; final-expression) {
  // code to run
}


//while:

initializer
while (condition) {
  // code to run

  final-expression
}


//do...while:

initializer
do {
  // code to run

  final-expression
} while (condition)



/* Funciones
 * ----------------------------------------------
 */
 
//Funciones integradas del navegador

//Cada vez que manipulamos una cadena de texto
	
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string
	
//I am a sauge 
	
	
//O cada vez que manipulamos una matriz:
	

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string

	
// I love chocolate frogs
	

O para generar un número random

const myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number

//0.6861136003867523

// Son funciones definidas en Browser API. 

//Metodos: funciones de los objetos

//Las funciones personalizadas están definidas en tu código. 

//Tiene un nombre personalizado como: 

function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}

//Invocandola: 
draw();

function random(number) {
  return Math.floor(Math.random() * number);
}

//número entero aleatorio entre 0 y un número específico.
//No solo entre 0 y 1 como Math.random()

random(20);

//declarar, usar, definir como en C(?



//Parametros de la funciones

//Opcionales: comportamiento por defecto. 

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'

//Si no especificamos el caracter separador. 
//la coma se usa por default. 


//Crear función con parámetros predeterminados
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!


// Funcion anonima: sin nombre

function myFunction() {
  alert("hello");
}


(function () {
  alert("hello");
});


//Podemos definir funciones y pasarlas a otras

function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);


// O podemos asignar una función anonima
// A otra función que espera una función. 

textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});



// Funcion flecha

//En lugar de escribir 'function'
//Escribimos el parametro y un flecha. 

textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});


// Si solo toma un parametro podemos escribir
// Sin parentesis su parametro
textBox.addEventListener("keydown", event => {
  console.log(`You pressed "${event.key}".`);
});


//Es una declaración de retorno
//Puede omitir las llaves y la palabra clave return y devolver implícitamente la expresión.

const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]

//toma cada elemento de la matriz por turno
//lo pasa a la función indicada. 
//Luego toma el valor devuelto por esa función y lo agrega a una nueva matriz.


item => item * 2 
 
// Equivale a la función flecha:

function doubleItem(item) {
  return item * 2;
}
 

//Existen otras diferencias con las funciones normales y flechas. 
//Como el caso de la palabra this. 



//Ejemplos: Detección de teclas.

<input id="textBox" type="text" />
<div id="output"></div>

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});


// Scope, alcance de las funciones

//El nivel superior fuera de todas tus funciones se denomina ámbito global. 
//Los valores definidos en el ámbito global son accesibles desde cualquier parte del código
//Por seguridad, los scripts externos que llamas desde otro lugar podrían comenzar a alterar tu código y causar problemas porque están usando los mismos nombres de variable que otras partes del código, lo que causa conflictos. 
		
//Las dos funciones que desea llamar se denominan greeting(), pero solo puede acceder a la función greeting() del archivo first.js (la segunda se ignora). 	
//Además, se produce un error al intentar (en el archivo second.js) asignar un nuevo valor a la variable name, porque ya se declaró con const y, por lo tanto, no se puede reasignar

const x = 1;
	
/*
function a() {
  const y = 2;
}

function b() {
  const z = 3;
}
*/

/*
function a() {
  const y = 2;
  output(y);
}

function b() {
  const z = 3;
  output(z);
}

*/

function a() {
  const y = 2;
  output(x);
}

function b() {
  const z = 3;
  output(x);
}

function output(value) {
  const para = document.createElement('p');
  document.body.appendChild(para);
  para.textContent = `Value: ${value}`;
}



//en consola le pasamos 
output(x);
//devuelve en la página, el valor de x 
//Value: 1

//En consola pasamos: 
output(y);
output(z);
//reference error and y, z not defined

//y, z está dentro de las funciones
//bloqueadas para uso externo de output(). 
//cuando se llama desde el alcance global. 


//Llamada desde otra función: 
//editando a() y b()

function a() {
  const y = 2;
  output(y);
}

function b() {
  const z = 3;
  output(z);
}

//intente llamar a las funciones a() y b() desde la consola de JavaScript:
a();
b();

Value: 2
Value: 3

//Se imprime en la página o browser viewport 

//Funciona porque output() se llama desde otras funciones. 
//En el mismo ambito qu ese definen las variables
//output() está disponible desde cualquier lugar
//del ámbito global


// Si cambiamos 
function a() {
  const y = 2;
  output(x);
}

function b() {
  const z = 3;
  output(x);
}


//y llamamos en consola
a();
b();

//devuelve el valor de la constante x 
//definido en ambito global
//aunque no están en el mismo alcance
//no son globales las llamadas a output()


//Si modificamos
function a() {
  const y = 2;
  output(z);
}

function b() {
  const z = 3;
  output(y);
}


//y llamamos
a();
b();

//ReferenceError: variable name is not defined

/*
 las llamadas de output() y las variables 
 que están intentando imprimir no están en 
 los mismos alcances de función.
 
 las variables son efectivamente invisibles 
 para esas llamadas a funciones 
  
 */


/*
 Las mismas reglas de alcance no se aplican 
 *al bucle (por ejemplo, for() { }) 
 * y a los bloques condicionales (por ejemplo, 
 * if () { }): se ven muy similares, 
 * ¡pero no son lo mismo! 
*/




/* Funciones Propias
 * ----------------------------------------------
 */
 
//Función que reemplaza a alert()

<button>Display message box</button>


const btn = document.querySelector('button');
btn.addEventListener('click', () => displayMessage('Brian: Hi there, how are you today?', 'chat'));

function displayMessage(msgText,msgType) {
	const html = document.querySelector('html');

	const panel = document.createElement('div');
	panel.setAttribute('class','msgBox');
	html.appendChild(panel);

	const msg = document.createElement('p');
	msg.textContent = msgText;
	panel.appendChild(msg);

	const closeBtn = document.createElement('button');
	closeBtn.textContent = 'x';
	panel.appendChild(closeBtn);

	closeBtn.onclick = function() {
		panel.parentNode.removeChild(panel);
	
	}

	if(msgType === 'warning') {
	  msg.style.backgroundImage = 'url(icons/warning.png)';
	  panel.style.backgroundColor = 'red';
	} else if(msgType === 'chat') {
	  msg.style.backgroundImage = 'url(icons/chat.png)';
	  panel.style.backgroundColor = 'aqua';
	} else {
	  msg.style.paddingLeft = '20px';
	}
}



/* Valores de Retorno
 * ----------------------------------------------
 */
 
//Son los valores los valores que devuelve una función cuando se completa.

const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made

//El resultado de este valor de retorno se guarda en la variable newString.


//Para devolver un valor de una función personalizada

function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}

//Devolvemos el resultado del cálculo Math.floor(Math.random() * number) cada vez que se llama a la función. 

//Que habiamos definido como: 
function random(number) {
  return Math.floor(Math.random() * number);
}

//o de otra forma

function random(number) {
  const result = Math.floor(Math.random() * number);
  return result;
}

//Este valor de retorno aparece en el punto en que se llamó a la función y el código continúa

ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);

//Sin la función aleatoria, los valores de retorno son: 

ctx.arc(500, 200, 35, 0, 2 * Math.PI);

//Las llamadas a funciones en la línea se ejecutan primero y sus valores de retorno se sustituyen por las llamadas a funciones, antes de ejecutar la línea misma.


//EJ: 

<input class="numberInput" type="text">
<p></p>


const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}

input.addEventListener("change", () => {
  const num = parseFloat(input.value);
  if (isNaN(num)) {
    para.textContent = "You need to enter a number!";
  } else {
    para.textContent = `${num} squared is ${squared(num)}. `;
    para.textContent += `${num} cubed is ${cubed(num)}. `;
    para.textContent += `${num} factorial is ${factorial(num)}. `;
  }
});

// Imprimir información sobre el número ingresado en la entrada de texto agregando el siguiente controlador de eventos debajo de las funciones existentes:
// desenfoca y analiza/valida entrada de datos
// guarda e imprime valor.

//23 squared is 529. 23 cubed is 12167. 23 factorial is 2.585201673888498e+22.
//2134 squared is 4553956. 2134 cubed is 9718142104. 2134 factorial is Infinity. 
//lajsdflk You need to enter a number!



/* Eventos
 * ----------------------------------------------
 */

//event handler/listener 
//elemento/con un evento y una función que se activa
//cuando se activa ese evento

<button>Change color</button>

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

//acá una función usa otra como random


//o una función independiente del event listener
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", changeBackground);


// remover listener del elemento
btn.removeEventListener("click", changeBackground);


//AbortSignal to addEventListener() 
//and then later calling abort() on the controller owning the AbortSignal

const controller = new AbortController();

btn.addEventListener("click",
  () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal } // pass an AbortSignal to this handler
);


//pasar una AbortSignal a este controlador
//elimina cualquiera o todos los controladores de eventos asociados con este controlador

controller.abort(); // removes any/all event handlers associated with this controller


//activamos el evento y después lo podemos eliminar.
//mejorá la eficiencia en programas grandes. 



// Multiple eventos en un solo elemento
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);


//Se recomienda usar siempre addEventListener
//Sobretodo para apps grandes


// Otras formas de controlar eventos. 

//Event handler properties

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.onclick = () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
};

//onclick sin .addEventListener en el elemento. 


//Otra forma para usar la propiedad onclick
//le pasamos la funcion al elemento y propiedad
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;


// Multiples eventos con addEventListener 
element.addEventListener("click", function1);
element.addEventListener("click", function2);


//Con la propiedad no se puede. 
//cualquier intento posterior de establecer la propiedad sobrescribirá los anteriores:
element.onclick = function1;
element.onclick = function2



//inline event handlers
//La peor práctica para eventos. 

<button onclick="bgChange()">Press me</button>

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}



//Función en el atributo: 
<button onclick="bgChange()">Press me</button>

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}


//Evento directamente en el atributo. 
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>

//Puede parecer fácil usar un atributo de controlador de eventos si está haciendo algo realmente rápido, pero rápidamente se vuelven inmanejables e ineficientes.
//mezclar HTML y JavaScript, ya que resulta difícil de leer. Mantener su JavaScript separado es una buena práctica 


//Con JavaScript, puedes agregar fácilmente una función de controlador de eventos 
//a todos los botones de la página sin importar cuántos haya

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}

//muchas configuraciones de servidor comunes 
//no permitirán JavaScript en línea, como medida de seguridad.
//están desactualizados y es mala práctica. 


//Event Objects:

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);


//A veces, dentro de una función de controlador de eventos
//Verá un parámetro especificado con un nombre
//como evento, evt o e.
		
//Estamos incluyendo un objeto de evento, e, en la función
//En la función configurando un estilo de color de fondo 
//en e.target, que es el botón en sí.
		
//La propiedad de destino del objeto de evento 
//es siempre una referencia al elemento en el que ocurrió el evento. 

//Puede usar cualquier nombre que desee para el objeto de evento
//solo necesita elegir un nombre que luego pueda 
//usar para hacer referencia a él dentro de la función del controlador de eventos
//e/evt/event porque son breves y fáciles de recordar.


//Propiedades extra de los objetos de evento: 
//La mayoría de los objetos de evento tienen un conjunto estándar de propiedades y métodos disponibles
//function bgChange(e){}

//La idea es que sean relevante para el objeto
//ej, el evento keydown se activa cuando el usuario presiona una tecla.

//Su objeto de evento es un KeyboardEvent

<input id="textBox" type="text" />
<div id="output"></div>

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});



//Prevenir comportamiento por defecto en eventos
<form>
  <div>
	<label for="fname">First name: </label>
	<input id="fname" type="text" />
  </div>
  <div>
	<label for="lname">Last name: </label>
	<input id="lname" type="text" />
  </div>
  <div>
	<input id="submit" type="submit" />
  </div>
</form>
<p></p>
		
const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
	e.preventDefault();
	para.textContent = "You need to fill in both names!";
  }
});


//todavía es una validación de formulario bastante débil 
//no impediría que el usuario valide el formulario
//con espacios o números ingresados ​​en los campos
//si introducimos números se enviará el formulario

//En otros entornos y lenguajes de programación
//los eventos difieren un poco. 



// Event Bubbling: 


/*

<button>Change color</button>

const btn = document.querySelector('button');

function random(number) {
return Math.floor(Math.random() * (number+1));
}

btn.addEventListener('click', () => {
const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
document.body.style.backgroundColor = rndCol;
});


// Rs: events
//elemento html
referencia al elem con js+dom

//la clave es btn.addEventListener('click', func)
definimos, modificamos y usamos valores


//objetos de eventos 
//como parámetro en las funciones que se usan
//en el evento, usado por el elemento html. 
//objeto de evento, e en el parametro
  
 
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);


la clave está en e.objetoxyz
que es el botón en sí
La propiedad de destino del objeto de evento 
es siempre una referencia al elemento en el 
que ocurrió el evento. 


//propiedades extra de los objetos de eventos:

//Su objeto de evento es un KeyboardEvent

<input id="textBox" type="text" />
<div id="output"></div>

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});


la clave: 

opera e, este hace referencia  
a lo que haga el usuario ()?
 
 
output.textContent = `You pressed "${event.key}".`;

${event.key}
se va a reemplazar por la tecla que presionamos. 

otro ej, 
output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;

${e.currentTarget.tagName}
va a imprimir...


Remover manejador de eventos: 
dos formas: 

1. btn.removeEventListener("click", changeBackground);

2. 
btn.addEventListener(
  "click",
  () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal },
); // se pasa una AbortSignal a este manejador

controller.abort(); // remueve cualquier manejador de evento asociado con este controlador.


Objetos de eventos: 
dentro de la función manejadora de eventos verás 
un parámetro

event, evt, or e. es un objeto de evento. 
es pasado automáticamente a los manejadores 
de eventos

para proporcionar información y características
extra 

function bgChange(e) {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);


e.target.style.backgroundColor = rndCol;
guarda un valor que será mostrado por console.

estamos incluyendo un objeto evento e en la función
cambiando el estilo de color de fondo 
sobre e.target que es el botón como tal

o sea, e.target (reemplaza a btn) (?

La propiedad target del objeto evento (e)
siempre es una referencia al elemento sobre 
el cual ocurrió el evento

estamos estableciendo el color de fondo aleatorio
en el botón

//delegación de Eventos
donde usamos event.target (info o propieds al eve u obj)


Propiedades extra en los objetos evento:
* 
La mayoría de objetos eventos tienen un conjunto 
estándar de propiedades y métodos disponibles 
en el objeto evento

Los encontramos en la referencia Event (mdn)

objetos evento agregan propiedades extra 
que son relevantes ra un tipo de evento en particular

el evento keydown se lanza cuando el 
usuario presiona una tecla

Su objeto evento es un KeyboardEvent

es un objeto Event especializado con una 
propiedad key

<input id="textBox" type="text" />
<div id="output"></div>

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener(
  "keydown",
  (event) => (output.textContent = `Presionaste "${event.key}".`),
);



//otro ej de objeto de evento 
en un elemento padre 

<div id="container">
  <button>¡Haz clic en mi!</button>
</div>
<pre id="output"></pre>


const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `Hiciste clic en un elemento ${e.currentTarget.tagName}\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);


//otro ej de bubbling

<body>
  <div id="container">
    <button>¡Haz clic en mi!</button>
  </div>
  <pre id="output"></pre>
</body>

const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `Hiciste clic en un elemento ${e.currentTarget.tagName}\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);

Hiciste clic en un elemento BUTTON
Hiciste clic en un elemento DIV
Hiciste clic en un elemento BODY


el clic en el botón se lanza primero
seguido del clic en el padre (el elemento <div>)
por último, se lanza en el padre del elemento <div> (el elemento <body>).


Este comportamiento puede ser útil a la par 
de causar problemas inesperados
veremos los problemas que causa y econtraremos 
una solución  
 
 
bubbling:
Hace posible la delegación de eventos. 
En esta técnica, cuando queremos que cierto código
se ejecute cuando el usuario interacciona con 
cualquiera de un gran número de elementos 
descendientes
 
1°establecemos el detector de eventos en el padre
dejamos que los eventos burbujeen hasta el padre,
en vez de establecer el detector de eventos 
individualmente en cada descendiente. 

nuestro primer ejemplo 
establecemos el color de toda la página
cuando el usuario hace clic en un botón

Imagina que en su lugar, la página está dividida
en 16 secciones y queremos establecer 
un color de fondo aleatorio en cada sección
cuando el usuario hace clic en una sección

*/

<div id="container">
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  .....
</div>

.tile {
  height: 100px;
  width: 25%;
  float: left;
}


/*
desde JavaScript podemos agregar un manejador
del evento clic para cada sección 
  
Pero una solución más sencilla y más eficiente 
sería agregar un solo detector de eventos

usando burbujeo de eventos para
asegurarnos de que el manejador se ejecuta 
cuando el usuario hace clic en una sección


*/

function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return rndCol;
}

const container = document.querySelector("#container");

container.addEventListener(
  "click",
  (event) => (event.target.style.backgroundColor = bgChange()),
);


/*
estamos usando event.target
para obtener el elemento objetivo del evento
es decir, el elemento más interno

//nos deja clickear cada elemento y se activará
un color random.


Si queremos acceder al elemento que manejó 
el evento (en este caso, el contenedor)
podemos usar event.currentTarget.

//clicleamos en el contenedor y automaticamente
él activa un color random para sus elementos hijos.

ej:

<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>

const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);

Todo esto tiene un orden de activación: 
desde el elemento más interno (primero) 
hasta el externo (ultimo)

BUTTON
DIV
BODY
  
*/



// Event Bubbling: 

<div id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>


const output = document.querySelector("#output");

function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");

container.addEventListener("click", handleClick);


//Nosotros agregamos un evento al contenedor. 
//pero en el html apretamos el boton, no el contenedor. 



//Bubbling Ej:

<body>
  <div id="container">
	<button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>

const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);


//agregamos controladores de eventos de clic al botón
//(el <div>) y al elemento <body> que contiene ambos:

/*

Todo esto tiene un orden de activación: 
desde el elemento más interno (primero) 
hasta el externo (ultimo)

BUTTON
DIV
BODY 
  
*/



//Ej video

<button>Display video</button>

<div class="hidden">
  <video>
    <source
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
      type="video/webm" />
    <p>
      Your browser doesn't support HTML video. Here is a
      <a href="rabbit320.mp4">link to the video</a> instead.
    </p>
  </video>
</div>


const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", () => video.play());
box.addEventListener("click", () => box.classList.add("hidden"));

//Tiene tres eventos de click

//<button>: muestra el <div> que contiene el <video>
//<video>: que comienza a reproducir el video
//<div>: que oculta el vídeo


//problema de propagación:

//Al hacer clic en el botón se muestra el cuadro y el vídeo que contiene.
//Pero luego, cuando haces clic en el video, el video comienza a reproducirse
//¡pero el cuadro vuelve a estar oculto!
//El vídeo está dentro del <div> (es parte de él),
/7Por lo que al hacer clic en el vídeo se ejecutan ambos controladores de eventos



//Evitar propagación:

//Un contenedor que tiene un evento
//se propaga hacia su elemento interno 
//que también puede tener su propio evento. 

//Entonces, cuando hacemos click/activamos el
//evento correspondiente al elemento interno
//se activa tambien el evento externo/contenedo/padre

//usamos stopPropagation() para evitar este 
//comportamiento en el elemento hijo. 

//esto evita que se active el evento padre 
//cuando queremos activar el evento del elem hijo. 

const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));

video.addEventListener("click", (event) => {
  event.stopPropagation();
  video.play();
});

box.addEventListener("click", () => box.classList.add("hidden"));



//Event capture

//Una forma alternativa de propagación de eventos
//Invierte el orden de la propagación de eventos. 

<body>
  <div id="container">
	<button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>

const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick, { capture: true });
container.addEventListener("click", handleClick, { capture: true });
button.addEventListener("click", handleClick);

//Event bubbling tiene más sentido que event capture




//Event delegation:

//configuramos el detector de eventos en su elemento principal
//y hacemos que los eventos que suceden en ellos
//se transmitan a su elemento principal en lugar de tener que hacerlo.


//Pero una opción mucho más simple y eficiente es configurar el controlador de eventos de clic
		
//En el padre y confiar en la propagación de eventos para garantizar que el controlador se ejecute cuando el usuario haga clic en un mosaico:


div id="container">
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  ....
  
<div class="tile"></div>


.tile {
  height: 100px;
  width: 25%;
  float: left;
}


function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  return rndCol;
}

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  event.target.style.backgroundColor = bgChange();
});

// usamos event.target para obtener el elemento que fue el objetivo del evento
//(es decir, el elemento más interno)

//Si quisiéramos acceder al elemento que maneja este evento
//(en este caso el contenedor)
//podríamos usar event.currentTarget.

//En el ej anterior teniamos varios addEventListener
//para cada elemento que necesitaba el click. 


//target and currentTarget

<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>

const output = document.querySelector("#output");
function handleClick(e) {
  const logTarget = `Target: ${e.target.tagName}`;
  const logCurrentTarget = `Current target: ${e.currentTarget.tagName}`;
  output.textContent += `${logTarget}, ${logCurrentTarget}\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);

/*
Cuando hacemos clic en el botón
el objetivo es el elemento del botón cada vez
ya sea que el controlador de eventos esté adjunto al botón mismo, al <div> o al <body>. 

Sin embargo, currentTarget identifica el elemento
cuyo controlador de eventos estamos ejecutando actualmente
	
	Target: BUTTON, Current target: BUTTON
	Target: PRE, Current target: BODY
	Target: BODY, Current target: BODY

La propiedad target se usa comúnmente en la delegación de eventos
 
*/


