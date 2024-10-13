	
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




/* Objetos
 * ----------------------------------------------
 */
 
//en otros lenguajes un objeto es una instancia
//de una clase que tiene propieadades/estad/var
//y metodos/funciones. 

//inicialización y definición

const person = {};


//En la console se ve algo como
[object Object]
Object { }
{ }


//Es un objeto vacío. 


//Pero puede tener propiedades y métodos. 


const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
	console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
	console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."



// Sintaxis de Objeto y Objeto Literal

const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};

/*
1. propiedades del objeto:
		
	Son elementos de datos: 
	
	Los dos primeros elementos son


2. Métodos del objeto 

	Las funciones: 
	
	permiten al objeto manipular esos datos. 
	

Cuando los miembros del objeto son funciones, hay una sintaxis más simple

En lugar de bio: función () 

Podemos escribir bio().

*/

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
	console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
	console.log(`Hi! I'm ${this.name[0]}.`);
  },
};


/*
Usaremos esta sintaxis más corta.

Un objeto como este se conoce como objeto literal

Literalmente, hemos escrito el contenido del objeto a medida que lo creamos

*/

		
//Esto es diferente en comparación 
//con los objetos instanciados


//Notación de puntos/dot notation

//acceso al objeto (namespace) y sus datos. 

person.age;
person.bio();

//despues del punto podemos acceder a: 
//elemento: 
//1. nombre de una propiedad simple
//2. Un elemento de una propiedad de matriz



//Objetos complejos: 

//Objeto como propiedades de objeto. 
 const person = {
	  name: {
		first: "Bob",
		last: "Smith",
	  },
	  age: 32,
	  bio() {
		console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
	  },
	  introduceSelf() {
		console.log(`Hi! I'm ${this.name.first}.`);
	  },
	
  };

//para acceder a estos debemos modificar algunas cosas: 
//De:
name[0];
name[1];	

//A 
name.first;
name.last;

person.name.first;
person.name.last;



//Notación de corchete, alternativa a los puntos

//para acceso a objetos complejos/con secuencias


//De: 
person.age;
person.name.first;

//A:
person["age"];
person["name"]["first"];

//se utiliza el nombre asociado con el valor 
//de cada miembro

//En lugar de usar un número de índice para
//seleccionar un elemento


//si el nombre de una propiedad de un objeto 
//se encuentra en una variable
//no se puede acceder con notación de puntos. 

const person = {
  name: ["Bob", "Smith"],
  age: 32,
};

function logProperty(propertyName) {
  console.log(person[propertyName]);
}

logProperty("name");
// ["Bob", "Smith"]
logProperty("age");
// 32



//Establecer miembros de objetos

//también puede establecer (actualizar) el valor de los miembros de objetos declarando el miembro que desea configurar
//usando notación de puntos o corchetes
person.age = 45;
person["name"]["last"] = "Cratchit";

//tambien crear propiedades y funciones: 
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};


//acceder a los nuevos miembros: 
person["eyes"];
person.farewell();
// "Bye everybody!"



//Establecer nombre de miembros:

//usando notación entre corchetes

/*
Digamos que queremos que los usuarios puedan almacenar tipos de valores personalizados
en los datos de sus personas
escribiendo el nombre del miembro y el valor en dos entradas de texto.
Podríamos obtener esos valores así:

*/

const myDataName = nameInput.value;
const myDataValue = nameValue.value;

//Luego podríamos agregar este nuevo nombre 
//de miembro y valor al objeto persona de 
//esta manera:
person[myDataName] = myDataValue;


//pide los inputs, los guarda
//después los asigna

//Ej:
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;


person.height;


/*
Agregar una propiedad a un objeto usando el método
anterior no es posible con la notación de puntos

que solo puede aceptar un nombre de miembro 
literal

no un valor de variable que apunte a un nombre
 
*/



//This
const person1 = {
  name: "Chris",
  introduceSelf() {
	console.log(`Hi! I'm ${this.name}.`);
  },
};

const person2 = {
  name: "Deepti",
  introduceSelf() {
	console.log(`Hi! I'm ${this.name}.`);
  },
};

//this se refiere al objeto en el que se llama el método
		
//Lo que permite que la misma definición de
//método funcione para múltiples objetos.

/*
No es muy útil cuando se escriben literales de objetos a mano
ya que usar el nombre del objeto
persona1 y persona2
conduce exactamente al mismo resultado


Pero será esencial cuando comencemos 
a usar constructores para crear más de un objeto
a partir de una única definición de objeto
 
*/


//Introducción a Constructores

//Usar objetos literales está bien 
//cuando sólo necesitas crear un objeto


//Podemos usar una funcion

function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
	console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

//El objeto tendrá dos miembros:
//un nombre de propiedad
//un método introducirSelf().

const salva = createPerson("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."



// o usando new
//llama a una funcion 	

/*		
constructor, puede:
		
crear un nuevo objeto

vincular this al nuevo objeto
para que pueda hacer referencia
a this en su código de constructor

ejecutar el código en el constructor

devolver el nuevo objeto

comienzan con mayus, por convencion

*/

function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
	console.log(`Hi! I'm ${this.name}.`);
  };
}

const salva = new Person("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = new Person("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."



// Objetos en todos lados

//Cuando usamos la notacion por puntos
//Puden ser una instancia de otros
//esto habilita a usar los métodos y propieadades
//de su clase padre

myString.split(",");

const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");


// A veces se requiere un constructor 
//como paso intermedio
const myNotification = new Notification("Hello!");



/* Prototipos
 * ----------------------------------------------
 */


//literal

//constructor: funcion y new 

//prototipo


//cadena prototipo 

const myObject = {
  city: "Madrid",
  greet() {
	console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Madrid


myObject.
//lista de todas las propiedades disponibles para este objeto
//además de las suyas, city y greet()

myObject.toString(); // "[object Object]"

//Cada objeto en JavaScript tiene una 
//propiedad incorporada, se llama prototipo
//El prototipo es en sí mismo un objeto

//por lo que tendrá su propio prototipo
//se llama una cadena de prototipos.
//La cadena termina cuando llegamos a un prototipo que tiene nulo como su propio prototipo

//La propiedad de un objeto que apunta a su 
//prototipo no se llama prototipo. 
//los navegadores utilizan __proto__.

//acceder al prototipo
//Object.getPrototypeOf(myObject); 


// Orden de acceso a las propiedades de un objeto

//1. busca en el objeto mismo
//2. si no, busca la propiedad en el prototipo.
//3. se busca el prototipo del prototipo
//4. hasta el final de la cadena
//5. si no la encuentra, devuelve undefined. 

myObject.toString():
//solo definimos city y greet(), no toString

/*

busca toString en myObject			
No puedo encontrarlo allí
así que busca en el objeto prototipo de myObject toString.

(Object.getPrototypeOf(myObject); // Object { })

lo encuentra allí y lo llama.

*/


//Object { }
//object called Object.prototype
//most basic prototype

/*
myObject				Object.prototype
city	-> __proto__ -> hasOwnProperty() -> __proto__ -> null
greet()					isPrototypeOf()
*/


//El prototipo de un objeto no siempre 
//es Object.prototype

//Puede haber otros en el medio. 


const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object { }
// null

/*
crea un objeto Date
recorre la cadena de prototipos y registra los prototipos.
muestra que el prototipo de myDate es un objeto Date.prototype
*/

/*
myDate -> __proto__ -> Date.prototype -> __proto__ -> Object.prototype -> __proto__ -> null
					   getMonth()			          hasOwnProperty()
					   getYear()				      isPrototypeOf()
*/

/*
cuando llamas a métodos familiares		
como myDate2.getTime(),
estás llamando a un método definido en Date.prototype.	
*/


// Shadowing Properties: 

//Si define una propiedad en un objeto
//cuando se define una propiedad con el mismo 
//nombre en el prototipo del objeto

const myDate = new Date(1995, 11, 17);

console.log(myDate.getTime()); // 819129600000

myDate.getTime = function () {
  console.log("something else!");
};

myDate.getTime(); // 'something else!'

/*
dada la descripción de la cadena del prototipo
Cuando llamamos a getTime(),  

El navegador primero busca en myDate una propiedad con ese nombre
y solo verifica el prototipo si myDate no lo define. 
Pero como lo definimos en nuestro objeto, lo usa primero.

agregamos getTime() a myDate, se llama a la versión en myDate.
  
*/


// Configurar Prototipo 


// Antes, repaso:

//1. Crear propieades y metodos
  
//Establecer miembros de objetos

//también puede establecer (actualizar) el valor de los miembros de objetos declarando el miembro que desea configurar
//usando notación de puntos o corchetes
person.age = 45;
person["name"]["last"] = "Cratchit";

//tambien crear propiedades y funciones: 
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};


//acceder a los nuevos miembros: 
person["eyes"];
person.farewell();
// "Bye everybody!"
  

//2. Uso de constructor: usando function y this
//para crear multiples objetos

//comienzan con mayus, por convencion

function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
	console.log(`Hi! I'm ${this.name}.`);
  };
}

const salva = new Person("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = new Person("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."


// Esto era para crear un objeto


// Ahora podemos crear algo anterior al objeto. 
// su prototipo 


//varias formas

//1. Object.create()

//2. Constructor


//1. Object.create():

/*
crea un nuevo objeto
y le permite especificar un objeto
que se utilizará como prototipo del nuevo objeto
*/
const personPrototype = {
  greet() {
	console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!

//antes creo un objeto literal
//carl es el objeto y personPrototype es el prototipo. 
//transformó ese objeto literal en prototipo de carl

//el prototipo proporciona su implementación.
//para el objeto carl



//2. Constructor:
/*
En JavaScript, todas las funciones tienen una 
propiedad denominada prototipo
Cuando llamas a una función como constructor, 
esta propiedad se establece como el prototipo 
del objeto recién construido
por convención, en la propiedad denominada __proto__

Entonces, si configuramos el prototipo de un constructor
podemos asegurarnos de que todos los objetos creados con ese constructor reciban ese prototipo.
*/

const personPrototype = {
  greet() {
	console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;

//creamos objeto literal
//constructor para crear multiples objetos
//asignamos el constructor como prototipo
//al literal prototipo


/*

un objeto personPrototype, que tiene un método 
greet()
		
una función constructora Person() que inicializa
el nombre de la persona a crear.

Luego colocamos los métodos definidos en 
personPrototype

en la propiedad prototipo de la función Person
usando Object.assign.

Después de este código, los objetos creados 
usando Person()

obtendrán Person.prototype como prototipo, 
que contiene automáticamente el método de bienvenida.

*/

//Después de este código, los objetos creados 
//usando Person()
		
//obtendrán Person.prototype como prototipo,
//que contiene automáticamente el método de bienvenida.

const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!

//Esto también explica por qué dijimos anteriormente 
//que el prototipo de myDate se llama Date.prototype:

//es la propiedad prototipo del constructor Date.


//Propiedades Propias

/*
objeto usando el constructor Persona
tienen dos propiedades:
 
 nombre:
	que se establece en el constructor
	por lo que aparece directamente en 
	los objetos Persona	
	* 
greet(), que se establece en el prototipo.

Es común ver este patrón, en el que los métodos 
se definen en el prototipo

pero las propiedades de los datos se definen 
en el constructor. 

Esto se debe a que los métodos suelen ser los
mismos para cada objeto que creamos,

mientras que a menudo queremos que cada objeto
tenga su propio valor para sus propiedades de datos

como aquí donde cada persona tiene un nombre 
diferente

*/


/*
Las propiedades que se definen directamente 
en el objeto

como el nombre aquí, se denominan propiedades
propias

puede comprobar si una propiedad es una propiedad
propia utilizando el método estático 
Object.hasOwn():

*/

const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false

//También puede utilizar el método no estático 
//Object.hasOwnProperty()

//recomendamos que utilice Object.hasOwn() si puede.
		

/*
Los prototipos permiten reutilizar código 
y combinar objetos.

soportan una versión de herencia


La herencia es una característica de los 
lenguajes de programación orientados a objetos

permite a los programadores expresar la idea 
de que algunos objetos en un sistema son versiones 
más especializadas de otros objetos.
 
*/


// Prototipos y Herencia
/*
si estamos modelando una escuela, podríamos tener profesores y estudiantes:
ambos son personas, por lo que tienen algunas características en común
por ejemplo, ambos tienen nombres
pero cada uno podría agregar características adicionales
por ejemplo, profesores tienen una materia que enseñan
o podrían implementar la misma característica de diferentes maneras. 

En un sistema POO podríamos decir que tanto los profesores como los estudiantes heredan de las personas.

Si los objetos Profesor y Estudiante pueden tener prototipos de Persona,
entonces pueden heredar las propiedades comunes
al tiempo que agregan y redefinen aquellas propiedades que deben diferir.
*/


//Las cadenas de objetos de prototipos permiten 
//que los objetos hereden características entre sí

//la propiedad del prototipo y cómo se puede usar
//para agregar métodos a los constructores



/* POO
 * ----------------------------------------------
 */

//objeto literal 
//constructor 
//prototipo


/*
Sus conceptos principales: clases e instancias, 
herencia y encapsulación

un estilo orientado a objetos es 
la basada en clases o "clásica".

En JS están los constructores 
y la cadena de prototipos que tienen sus diferencias

*/

/*

La programación orientada a objetos 	
Consiste en modelar un sistema como una colección de objetos
Donde cada objeto representa algún aspecto particular del sistema
Los objetos contienen funciones (o métodos) y datos.
Un objeto proporciona una interfaz pública
a otro código que quiere usarlo pero mantiene su propio estado interno privado
otras partes del sistema no tienen que preocuparse por lo que sucede dentro del objeto.
   
*/

class Professor
	properties
		name
		teaches
	methods
		grade(paper)
		introduceSelf()


/*
es una plantilla para crear objetos ese tipo
Cada profesor concreto que creamos 
se denomina instancia de la clase Profesor
El proceso de creación de una instancia
lo realiza una función especial 
llamada constructor.
*/

/*
Pasamos valores al constructor
para cualquier estado interno
que queramos inicializar en la nueva instancia.

el constructor se escribe como parte 
de la definición de la clase
normalmente tiene el mismo nombre 
que la clase misma.
*/

class Professor
	properties
		name
		teaches
	constructor
		Professor(name, teaches)
	methods
		grade(paper)
		introduceSelf()

/*
podemos inicializar name y teaches		
cuando creamos un nuevo profesor concreto.

Con un constructor 
podemos crear algunos profesores.
Los lenguajes suelen utilizar 'new'
para indicar que se está llamando a un constructor. 
*/

walsh = new Professor("Walsh", "Psychology");
lillian = new Professor("Lillian", "Poetry");

walsh.teaches; // 'Psychology'
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

lillian.teaches; // 'Poetry'
lillian.introduceSelf(); // 'My name is Professor Lillian and I will be your Poetry professor.'


/*
Sería útil si pudiéramos representar
estudiantes y profesores comparten algunas propiedades

o más exactamente, el hecho de que, en algún nivel, son el mismo tipo de cosas.
La herencia nos permite hacer esto.

tanto estudiantes como profesores son personas
las personas tienen nombres y quieren presentarse

Podemos modelar esto definiendo una nueva clase Persona
donde definimos todas las propiedades comunes de las personas

Profesor y Estudiante pueden derivar de Persona
agregando sus propiedades adicionales

*/

class Person
	properties
		name
	constructor
		Person(name)
	methods
		introduceSelf()

class Professor : extends Person
	properties
		teaches
	constructor
		Professor(name, teaches)
	methods
		grade(paper)
		introduceSelf()

class Student : extends Person
	properties
		year
	constructor
		Student(name, year)
	methods
		introduceSelf()

/*
Persona es la superclase o clase padre
tanto del Profesor como del Estudiante.
Profesor y Estudiante son subclases o clases secundarias de Persona.
*/

/*
introduceSelf() está definido en las tres clases.
las personas quieren presentarse
la forma en que lo hacen es diferente:
*/

walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

summers = new Student("Summers", 1);
summers.introduceSelf(); // 'My name is Summers and I'm in the first year.'


/*
Es posible que tengamos una implementación
predeterminada de introduceSelf()

para personas que no son estudiantes ni 
profesores:

Podemos usar o crear una instancia de Person
no de profesor ni estudiante
*/

pratt = new Person("Pratt");
pratt.introduceSelf(); // 'My name is Pratt.'

/*
Esta característica
cuando un método tiene el mismo nombre
pero una implementación diferente en diferentes clases
se llama polimorfismo
Cuando un método en una subclase reemplaza la implementación de la superclase
decimos que la subclase anula la versión de la superclase.
*/
		

/*

Encapsulación: 
		
Los objetos proporcionan una interfaz para otro código que quiere usarlos
pero mantienen su propio estado interno
El estado interno del objeto se mantiene privado
lo que significa que solo se puede acceder a él
mediante los métodos propios del objeto
no desde otros objetos
*/

/*
Mantener privado el estado interno de un objeto
y en general, hacer una división clara entre 
su interfaz pública 
y su estado interno privado
se denomina encapsulación.
*/

/* 
permite al programador cambiar la implementación 
interna de un objeto

sin tener que buscar y actualizar todo el código
que lo utiliza: 

crea una especie de firewall entre este objeto 
y el resto del sistema.

*/


/*
Ej, supongamos que a los estudiantes se les permite estudiar tiro con arco 
si están en el segundo año o más
Podríamos implementar esto simplemente exponiendo
la propiedad del año del estudiante
y otro código podría examinarla para decidir 
si el estudiante puede tomar el curso.
*/
if (student.year > 1) {
  // allow the student into the class
}

/*
El problema es que, si decidimos cambiar 
los criterios
para permitir que los estudiantes estudien
tiro con arco 
 
necesitaríamos actualizar todos los lugares 
de nuestro sistema que realizan esta prueba	
	
Sería mejor tener un método canStudyArchery() 
en objetos Student, que implemente la lógica 
en un solo lugar:
*/
class Student : extends Person
	properties
	   year
	constructor
	   Student(name, year)
	methods
	   introduceSelf()
	   canStudyArchery() { return this.year > 1 }

if (student.canStudyArchery()) {
  // allow the student into the class
}

/*
De esa manera, si queremos cambiar las reglas
sobre el estudio del tiro con arco

sólo tendremos que actualizar la clase Estudiante

y todo el código que la utilice seguirá 
funcionando. 
 
*/

/*
En muchos lenguajes de programación orientada 
a objetos, podemos evitar que otro código acceda
al estado interno de un objeto

marcando algunas propiedades como privadas.
Esto generará un error si el código externo al 
objeto intenta acceder a ellos:
*/

class Student : extends Person
	properties
	   private year
	constructor
		Student(name, year)
	methods
	   introduceSelf()
	   canStudyArchery() { return this.year > 1 }

student = new Student('Weber', 1)
student.year // error: 'year' is a private property of Student

/*
En lenguajes que no imponen un acceso como este
los programadores usan convenciones de nomenclatura
como comenzar el nombre con un guión bajo
para indicar que la propiedad debe considerarse privada
*/


// POO y JavaScript

/*
Los constructores en JavaScript nos proporcionan
algo así como una definición de clase

lo que nos permite definir la "forma" de un objeto,
incluidos los métodos que contiene, en un solo lugar

Pero aquí también se pueden utilizar prototipos. 
si un método se define en la propiedad prototipo 
de un constructor

entonces todos los objetos creados usando
ese constructor  obtienen ese método a través 
de su prototipo

y no necesitamos definirlo en el constructor.

la cadena de prototipos parece una forma natural
de implementar la herencia.

si podemos tener un objeto Estudiante cuyo 
prototipo sea Persona
		
entonces puede heredar el nombre y anular
introduceSelf().
 
*/


/*
en la programación orientada a objetos basada 
en clases
		
las clases y los objetos son dos construcciones
 separadas

y los objetos siempre se crean como instancias
de clases.

Además, existe una distinción entre la 
característica utilizada para definir una clase
la sintaxis de la clase misma

y la característica utilizada para crear una
instancia de un objeto
un constructor

En JavaScript, podemos crear objetos
sin ninguna definición de clase separada
ya sea usando una función o un objeto literal.

Esto puede hacer que trabajar con objetos sea mucho más liviano 
que en la programación
*/


/*
aunque una cadena prototipo parece una jerarquía
de herencia
		
y se comporta como ella en algunos aspectos, 
es diferente en otros. 

Cuando se crea una instancia de una subclase
se crea un único objeto que combina las 
propiedades definidas en la subclase con 
las propiedades definidas más arriba en la
jerarquía.

Con la creación de prototipos, cada nivel 
de la jerarquía está representado por un objeto
separado

y están vinculados entre sí mediante la propiedad
 __proto__.

El comportamiento de la cadena de prototipos 
se parece menos a una herencia y más a una 
delegación

La delegación es un patrón de programación 
en el que un objeto, cuando se le pide que 
realice una tarea

puede realizarla él mismo o pedirle a otro objeto (su delegado) que realice la tarea en su nombre.

En muchos sentidos, la delegación es una forma
más flexible de combinar objetos que la herencia

por un lado, es posible cambiar o reemplazar 
completamente el delegado en tiempo de ejecución


Se pueden utilizar constructores y prototipos

para implementar patrones de programación 
orientada a objetos basados ​​en clases en 
JavaScript

Pero usarlos directamente para implementar 
funciones como la herencia es complicado

por lo que JavaScript proporciona funciones 
adicionales

superpuestas al modelo prototipo, que se asignan
más directamente a los conceptos de programación
orientada a objetos basada en clases. 

*/



/* Clases JS
 * ----------------------------------------------
 */

// Clase-plantilla: props/mets
// Constructor-objetos
 
// Herencia-extends: objeto base/padre - subobjetos
// metodos base->metodos particulares
// Polomorfismo: sobrescribir metodos 

// Encapsulacion:
// uso interno de propiedades privadas
// metodos publicos que acceden a props privadas
// de lo contrario, codigo externo al objeto
// no puede invocar props priv

// Toda la logica este en un solo lugar/método
// es lo más importante. 
// sin romper ningún código que use la clase y sus metodos.



/*
Palabras claves: 
class 
constructor(props) y this 
extends y super(prop) 
metodos literal: sin function, solo nombre() y this
#, encapsulación
*/


class Person {
  name;

  constructor(name) {
	this.name = name;
  }

  introduceSelf() {
	console.log(`Hi! I'm ${this.name}`);
  }
}


const giles = new Person("Giles");

giles.introduceSelf(); // Hi! I'm Giles


// omintir constructores 
class Animal {
  sleep() {
	console.log("zzzzzzz");
  }
}

const spot = new Animal();

spot.sleep(); // 'zzzzzzz'


//Herencia 
class Professor extends Person {
  teaches;

  constructor(name, teaches) {
	super(name);
	this.teaches = teaches;
  }

  introduceSelf() {
	console.log(
	  `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
	);
  }

  grade(paper) {
	const grade = Math.floor(Math.random() * (5 - 1) + 1);
	console.log(grade);
  }
}


const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade("my paper"); // some random grade


// Encapsulación
class Student extends Person {
  #year;
  
  constructor(name, year) {
	super(name);
	this.#year = year;
  }

  introduceSelf() {
	console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }

  canStudyArchery() {
	return this.#year > 1;
  }
}


const summers = new Student("Summers", 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
summers.canStudyArchery(); // true

summers.#year; // SyntaxError


// Métodos Privados

class Example {
  somePublicMethod() {
	this.#somePrivateMethod();
  }

  #somePrivateMethod() {
	console.log("You called me?");
  }
}

const myExample = new Example();

myExample.somePublicMethod(); // 'You called me?'

myExample.#somePrivateMethod(); // SyntaxError



/* JSON
 * ----------------------------------------------
 */

//Objeto literal 

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
	console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
	console.log(`Hi! I'm ${this.name[0]}.`);
  },

}; 
 

// Objeto dentro de objeto
//cambia acceso
 const person = {
  name: {
	first: "Bob",
	last: "Smith",
  },
  age: 32,
  bio() {
	console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
  },
  introduceSelf() {
	console.log(`Hi! I'm ${this.name.first}.`);
  },
	
 };


//Establecer miembros de objetos

//también puede establecer (actualizar) el valor de los miembros de objetos declarando el miembro que desea configurar
//usando notación de puntos o corchetes
person.age = 45;
person["name"]["last"] = "Cratchit";

//tambien crear propiedades y funciones: 
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};


//acceder a los nuevos miembros: 
person["eyes"];
person.farewell();
// "Bye everybody!"


//Uso de constructor: usando function y this
//para crear multiples objetos

//comienzan con mayus, por convencion

function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
	console.log(`Hi! I'm ${this.name}.`);
  };
}

const salva = new Person("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = new Person("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."


// Crer prototipo 

// Ahora podemos crear algo anterior al objeto. 
// su prototipo 

//1. Object.create():

/*
crea un nuevo objeto
y le permite especificar un objeto
que se utilizará como prototipo del nuevo objeto
*/
const personPrototype = {
  greet() {
	console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!


//2. Constructor:
/*
En JavaScript, todas las funciones tienen una 
propiedad denominada prototipo
Cuando llamas a una función como constructor, 
esta propiedad se establece como el prototipo 
del objeto recién construido
por convención, en la propiedad denominada __proto__

Entonces, si configuramos el prototipo de un constructor
podemos asegurarnos de que todos los objetos creados con ese constructor reciban ese prototipo.
*/

const personPrototype = {
  greet() {
	console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;


const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!


// Propieadad del prototipo 
const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false

//También puede utilizar el método no estático 
//Object.hasOwnProperty()

//recomendamos que utilice Object.hasOwn() si puede.
		

// JSON 



// Request-Fetch (solicitudes/recuperación)

/*
hacemos la solicitud de red usando (network request)

usando la función fetch() (recuperación)

y esto devuelve un objeto Response (objeto de respuesta)

*/

//async function para usar fetch
//await antes de llamar a una función async

//request
//fetch
//response objetct

//clase Request
//fetch funct

async function populate() {
  const requestURL =
	"https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}


//Funcion async populate()
//guarda una url en requestURL
//crea un objeto/instancia de Request
//pasandole una url a su constructor
 
//guardamos una respuesta de fetch en response
//pasandole a su consturctor 
//el objeto request/url
//guardamos los superheroes con el .json() 
//el archivo será la respuesta/fetch
//que tenía el objeto request/url 

//tenemos dos llamadas a funciones
//toman el json.  
//para llenar los elementos de html


// Llenar el HTML 

// Header 

function populateHeader(obj) {
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.squadName;
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
  header.appendChild(myPara);
}

/*
funcion completar header, toma obj
guarda el elem html header
creamos el elem html h1
modifica contendio h1: 
será el parámetro llamando a squadName (json)
agregamos h1 al header

creamos un elem p
modifica con el contenido del json, llamandoló.
agregamos el p al header

*/

function populateHeroes(obj) {
  const section = document.querySelector("section");
  const heroes = obj.members;

  for (const hero of heroes) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = "Superpowers:";

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

/*
la funcion populateHeroes toma un obj
para completar las tarjetas de información. 
 
section será el elem html section 
heroes será el obj.members 

//Con un bucle recorreremos cada objeto 
de la matriz members del obj json. 
//para para cada uno, haremos algo:

recorremos en hero, los elementos que guardamos
en heroes que son todos los elem del obj.members

en cada iteracion/por cada heroe: 
creamos articulo html 
un h2, 3 p, y una lista no ordenada

// con el obj json que guardamos en heroes
// modificamos los elem creados: 

h2 será gual a hero.name 
p1 será hero.sercretIdentity del  
p2 sera la edad 
p3 será una cadena a completar 

// Al terminar de recorrer todo el contenido hero
// del obj, cada objeto, uno a uno, haremos algo. 

// recorremos otro como son los poderes

en superPowers guardamos hero.powers
recorremos superPowers con power

por cada elem, crearémos: 

un li, modificamos su contenido, será power
incluimos listItem en myList 

después incluimos h2, p1, p2, p3 y myList
en myArticle 

al final incluimos myArticle en section  
 
*/


// Llamar a la funcion principal  			

populate();


// Convertir entre Objetos y Texto 

/*
El ejemplo anterior fue simple en términos de acceso al objeto JavaScript
convertimos la respuesta de la red directamente en un objeto JavaScript 
usando Response.json().

A veces no lo tenemos
recibimos una cadena JSON sin formato
y necesitamos convertirla en un objeto nosotros mismos.
Y cuando queremos enviar un objeto JavaScript
a través de la red
debemos convertirlo a JSON
(una cadena)
antes de enviarlo.

estos dos problemas son tan comunes
hay un objeto JSON integrado
disponible en los navegadores
contiene los dos métodos siguientes:
		
/*	
	
1. parse():	
acepta una cadena JSON como parámetro
devuelve el objeto JavaScript correspondiente

2. stringify():
acepta un objeto como parámetro
devuelve la cadena JSON equivalente

En un ej: 
heroes-finished-json-parse.html
hace exactamente lo mismo que el anterior 

Pero cambia: 
1. fetch/recuperacion de response 
	como texto en lugar de JSON
	llamando al método text()
	de response 
	
2. usamos parse():
para convertir el texto en un objeto JavaScript.
*/
			

async function populate() {

  const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroesText = await response.text();

  const superHeroes = JSON.parse(superHeroesText);
  populateHeader(superHeroes);
  populateHeroes(superHeroes);

}
	
			
//stringify() funciona al revés. 

//ingresar las siguientes líneas en la consola:


let myObj = { name: "Chris", age: 38 };
myObj;

let myString = JSON.stringify(myObj);
myString;


//devuelve el objeto en string 

'{"name":"Chris","age":38}' 

/*				
estamos creando un objeto JavaScript
luego comprobamos lo que contiene,
luego lo convertimos en una cadena JSON 
usando stringify()
guardamos el valor de retorno en una nueva variable
luego lo comprobamos nuevamente.
*/



/* Intro a JavaScript asincrónico
 * ----------------------------------------------
 */

// Long sync function

// Async:

// Event Handlers  

// Callbacks-Callback hell



/* Promise 
 * ----------------------------------------------
 */

// base de la programación asincrónica
// es un objeto devuelto por una función asincrónica
// representa el estado actual de la operación
// En el momento en que se devuelve la promesa
// a la persona que llama, la operación a menudo no finaliza
// pero el objeto de promesa proporciona métodos
// para manejar el eventual éxito o fracaso de la operación.

// Con una API basada en promesas
// la función asincrónica inicia la operación
// y devuelve un objeto Promise
// Luego puede adjuntar controladores 
// a este objeto de promesa
// estos controladores se ejecutarán
// cuando la operación haya tenido éxito
// o haya fallado.


// cuando se usa callbacks para implementar 
// funciones asincrónicas, no existe async-await


// Request-Fetch (solicitudes/recuperación)

// hacemos la solicitud de red usando (network request)
// usando la función fetch() (recuperación)
// y esto devuelve un objeto Response (objeto de respuesta)

// async function para usar fetch
// await antes de llamar a una función async

// request
// fetch
// response objetct

// clase Request
// fetch funct

// async 
// Event Handlers  


// fetch() API:

// Solicitud/request HTTP a un servidor remoto
// enviando un mensaje de solicitud/request message 
// y el servidor nos envia una Respuesta/response 
// enviaremos una solicitud para objetener un JSON 


const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");

//guardamos en un objeto a fetch
//la mostramos 
//nuestro objeto llama a then (después responde)
//tiene un parametro que imprimirá una propiedad 
//imprimimos cadena 


/*
llamar a la API fetch()
asignar el valor de retorno
a la variable fetchPromise
			
después, registrando la variable fetchPromise
Esto debería generar algo como
Promise { <state>: "pending" }
nos indica que tenemos un objeto Promise
y que tiene un estado 
cuyo valor es "pending".
El estado "pendiente" 
significa que la operación fetch (recuperación)
aún continúa

pasando una función de controlador
controlador al método then() de Promise
Cuando (y si)
la operación fetch tiene éxito
la promesa llamará a nuestro controlador
y pasará un objeto Response
que contiene la respuesta del servidor

registrando un mensaje
de que hemos iniciado la request/solicitud 
			 
*/


// fetchPromise = fetch(url):  
// es una promesa 

// fetchPromise.then:
// controlador a una promesa

// ((response) => { 
//  console.log(`Received response: ${response.status}`);
// });

/*
pasando una función de controlador
controlador al método then() de Promise
Cuando (y si)
la operación fetch tiene éxito
la promesa llamará a nuestro controlador

y pasará un objeto Response
que contiene la respuesta del servidor

registrando un mensaje
de que hemos iniciado la request/solicitud 

*/

// y para manipular todos estos datos 
// creamos funciones que toman un objeto 
// lo obtenido con fetch 
// con otros objetos que manipulan dom 

//Encadenando promesas 

// promesa: var dónde guardamos fetch())
// controlador: then o lo que tenga una func 
// llamada: response como param o response.func())
// nueva promesa: para llamada a response
// controlador then dentro del original 
// se pasará a la nueva promesa 
// devuelta por response.json 

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data[0].name);
  });
});

/*
como antes
agregamos un controlador then()
a la promesa devuelta por fetch().
Pero esta vez nuestro controlador llama a 
response.json()
y luego pasa un nuevo controlador then()
a la promesa devuelta por response.json().
*/


// reescribir promise anidad
// evitar hell. 
// dado que la anidación de promise devuelve 
// usanod el controlador then, devuelve una promesa

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });


// En:
//.then((response) => response.json())
// .then((data) => {console.log(data[0].name);}); 

// (response) => response.json()
// (data) => {console.log(data[0].name)

// Es devolver la promesa por json() o lo que sea 
// y usar otra func async then()
// y acceder con data


// Verificar que el servidor acepto la request 

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => {
	if (!response.ok) {
	  throw new Error(`HTTP error: ${response.status}`);
	}
	return response.json();
  })
  .then((data) => {
	console.log(data[0].name);
  });
  

// Manejo de errores

/*
los objetos Promise		
proporcionan un método catch().

parecido a then():
lo llamas y le pasas una función de controlador

mientras que el controlador pasado a then()
se llama cuando la operación asincrónica
tiene éxito, el controlador pasado a catch()
se llama cuando la operación asincrónica falla. 
*/
		  
/*
Si agrega catch()		
al final de una cadena de promesa
se llamará cuando falle
cualquiera de las llamadas a funciones asincrónicas
y tener un solo lugar para manejar todos los errores.
*/

/*
Agregamos un controlador de errores usando catch() 
también modificamos la URL para que la solicitud falle.
*/

const fetchPromise = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });


// Terminología en promesas 

// pending/pendiente
// fulfilled/completado 
// rejected/rechazado 

// alternativo: settled para fulfilled o rejected


// succeeded" or "failed:

// settled o locked in: 
// estado cuando se resuelve una promesa 
 
/*
pending: 
la promesa se ha creado
la función asincrónica -> fetch/then((response))
a la que está asociada
no ha tenido éxito o no ha fallado todavía.
Este es el estado en el que se encuentra
su promesa cuando se devuelve
de una llamada a fetch()
y la request aún se está realizando.

fulfilled:
la función asincrónica ha tenido éxito.
Cuando se cumple una promesa
se llama a su controlador then().

rejected:
la función asincrónica ha fallado.
Cuando se rechaza una promesa
se llama a su controlador catch().  
*/

/*
"tuvo éxito" o "falló"			
depende de la API en cuestión
fetch() rechaza la promesa devuelta
si (entre otras razones)
un error de red impidió
que se enviara la solicitud
pero cumple la promesa		
si el servidor envió response
incluso si la respuesta fue un error como 
404 No encontrado. 
*/


// Cadena de multiples promesas 

/*
es lo que necesita cuando su operación 
consta de varias funciones asincrónicas 
*/

// promise.all():

/*
A veces es necesario que se cumplan 
todas las promesas
pero no dependen unas de otras
En un caso como ese,
es mucho más eficiente 
comenzar con todos juntos y 
luego recibir una notificación 
cuando se hayan cumplido.
El método Promise.all()
es lo que necesita aquí. 
Toma una serie de promesas
y devuelve una única promesa.
*/




const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });


// Response

// Exito y response: 
// estan relacionados
// fetch()), then(), response/accion/func/ 


Promise.all().
//exito cuando se cumplen todas
//si falla una, falla todas 

Promise.any()
//falla cuando fallan todas
//se necestia que 1 se cumpla

//necesitan de un array 



// Async y Await 

/*
evita la necesidad de 
crear cadenas de promesas explícitas
y le permite escribir código
que parece código sincrónico

facilitan la creación de una operación
a partir de una serie de llamadas 
a funciones asincrónicas consecutivas		 
*/

async function fetchProducts() {
  try {
	// después de esta línea, nuestra función esperará a que se resuelva la llamada `fetch()`
	// la llamada `fetch()` devolverá una respuesta o lanzará un error
	const response = await fetch(
	  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
	);
	if (!response.ok) {
	  throw new Error(`HTTP error: ${response.status}`);
	}
	// después de esta línea, nuestra función esperará a que se resuelva la llamada `response.json()`
	// la llamada `response.json()` devolverá el objeto JSON analizado o arrojará un error
	const data = await response.json();
	console.log(data[0].name);
  } catch (error) {
	console.error(`Could not get products: ${error}`);
  }
}

fetchProducts();



// Manejo de errores 

// devolver promesa, devolver objeto respuesta 


//por lo que no puede hacer algo como:

async function fetchProducts() {
  try {
	const response = await fetch(
	  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
	);
	if (!response.ok) {
	  throw new Error(`HTTP error: ${response.status}`);
	}
	const data = await response.json();
	return data;
  } catch (error) {
	console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
console.log(promise[0].name); // "promise" is a Promise object, so this will not work


// Debería hacer algo como: 

async function fetchProducts() {
  const response = await fetch(
	"https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  if (!response.ok) {
	throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

const promise = fetchProducts();
promise
  .then((data) => {
	console.log(data[0].name);
  })
  .catch((error) => {
	console.error(`Could not get products: ${error}`);
  });



//que no puedes hacer esto en un script normal:
//await fuera de async function 

try {
  // using await outside an async function is only allowed in a module
  const response = await fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  console.log(data[0].name);
} catch (error) {
  console.error(`Could not get products: ${error}`);
  throw error;
}



// Hay como dos practicas principales
// promise con catch 
// async y await con catch 
// despues promise.all y promise.any 


// Componentes para Completar una Promesa:

// fetch 
// then()
// (response)
// (otra prop/obj/accion)
// registrar respuesta: ok (200), failed (404)
// catch 


// fetch y objeto response 


// lo más importante async y await 
// están dentro de una función 
// no solo fetch y los objetos en variables globales 



/* Implementar promise-based API
 * ----------------------------------------------
 */


