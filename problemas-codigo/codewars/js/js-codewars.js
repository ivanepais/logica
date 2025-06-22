
console.log("Hola"); 

// Kata 1

/*
Are You Playing Banjo?

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings
*/

const playBonjo = strName => 
	strName[0] === "r" || strName[0] === "R"
	? strName + " plays banjo" 
	: strName + " does not play banjo"; 

/*
console.log(playBonjo("Ruben")); 
console.log(playBonjo("adam")); 
*/

function arePlayBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

/*
Si la r minus no es verdadera, entonces...

Se encarga de tener que verificar solo una "r" 
y al mismo tiempo devuelve el nombre en su formato original

Si era R, se convierte a minúsculas con .toLowerCase() 
y si ya era r no importa, no se cambia.

your code will error if name is falsy:

In the instructions of the problems. 
There was a sentence : "Names given are always valid strings."

*/


function playingBanjo(name) {
  if (name[0] == 'R' || name[0] == 'r') { 
    return name + " plays banjo";
  }
  return name + " does not play banjo";
}
/*
Cuando else no es necesario
*/

const banjo = name => {
	const plays = name.toLowerCase().startsWith('r')
		? 'plays'
		: 'does not play';
	return `${name} ${plays} banjo`;
};



// Kata 2 

/*
Timmy & Sarah think they are in love, but around where they live, 
they will only know once they pick a flower each. 
If one of the flowers has an even number of petals 
and the other has an odd number of petals it means 
they are in love.

Write a function that will take the number of petals 
of each flower and return true if they are in love and false
if they aren't.
 
*/

function love(petalsTim, petalsSar) {
	if (
	(petalsTim %2 === 0 && petalsSar %2 !== 0) ||
	(petalsTim %2 !== 0 && petalsSar %2 == 0)
	) 
	{
		return true; 
	}
	return false;
}; 

/*
console.log(love(2, 1));
console.log(love(2, 2));

*/

const loveTimSar = (petalsTim, petalsSar) => {
	return (petalsTim %2 === 0 && petalsSar %2 !== 0) ||
	(petalsTim %2 !== 0 && petalsSar %2 == 0)
	? true
	: false;  
};

/*
console.log(loveTimSar(2, 1));
console.log(loveTimSar(2, 2));

*/


/*
const loveTimSar = (petalsTim, petalsSar) => {
  return (petalsTim % 2 === 0 && petalsSar % 2 !== 0) ||
         (petalsTim % 2 !== 0 && petalsSar % 2 === 0)
    ? true
    : false;
};
*/


const lovTimSar = (petalsTim, petalsSar) => {
  return petalsTim % 2 !== petalsSar % 2;
};

/*
par tiene n % 2 === 0.
impar tiene n % 2 === 1 
=
uno par otro impar
*/



// Kata 3 

/*
Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example (Input => Output):

35231 => [1,3,2,5,3]
0     => [0]

*/


const toArr = numb => 
numb.toString().split("").map(e => Number(e)).reverse();

/*
console.log(toArr(35231)); 
console.log(toArr(0)); 

*/

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

function digit(n) {
  return Array.from(String(n), Number).reverse();
}

digitiz = n => [...String(n)].map(Number).reverse();


const digitze = n => Array.from(String(n), Number).reverse();



// Kata 4 

/*

Grasshopper - Summation

Write a program that finds the summation of every number 
from 1 to num (both inclusive). The number will always be
a positive integer greater than 0. Your function only needs
to return the result, what is shown between parentheses in 
the example below is how you reach that result and it's 
not part of it, see the sample tests.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

*/

summ = n => {
	return n === 1 
	? 1
	: n + summ(n-1);
};

console.log(summ(2)); 
console.log(summ(8));

/*
n === 1 ? 1
detiene la recursión
como los test son siempre positivos, no hay que validar más

n + summ(n - 1)
Suma el número actual n con el resultado de summ(n-1)
definición matemática directa de la suma de los primeros n enteros positivos.

*/

/*
summ(4) 
→ 4 + summ(3)
→ 4 + 3 + summ(2)
→ 4 + 3 + 2 + summ(1)
→ 4 + 3 + 2 + 1 = 10 

*/

var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
};



// Kata test Big O

/*
function elemSum10(arr) {
	let someSum10 = arr.some(myFunction);

	function myFunction(value, index, array) {
		return value + value === 10 ? true : false;
	}
	
	return someSum10; 		
}

console.log(elemSum10([45, 4, 9, 16, 25])); 
console.log(elemSum10([5, 5, 1, 2, 3])); 


const eSum10 = arr => {
	const func = (value, index, array) =>
		value + value === 10 ? true : false;
		
	return arr.some(func);
};

console.log(eSum10([45, 4, 9, 16, 25])); 
console.log(eSum10([5, 5, 1, 2, 3]));

*/

const eSum10 = arr =>
  arr.some((val, i) =>
    arr.slice(i + 1).find(other => val + other === 10)
  );



// Kata 5 

/*

The Feast of Many Beasts

All of the animals are having a feast! 
Each animal is bringing one dish. 
There is just one rule: the dish must start and end with the same letters as the animal's name. 
For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. 
beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. 
They will not contain numerals 

*/


function feast(beast, dish) {
  // input: str
  // output: boolean	
  const flett = beast[0];
  const lastlett = beast[beast.length - 1];
  return dish.startsWith(flett) && dish.endsWith(lastlett);
}

function feastBD(beast, dish) {
	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

let feastbd = (a, b) => a[0] + [...a].pop() == b[0] + [...b].pop()



// Kata 6

/*
 altERnaTIng cAsE <=> ALTerNAtiNG CaSe

Defina String.prototype.toAlternatingCase (o una función/método similar como to_alternating_case/toAlternatingCase/ToAlternatingCase en el idioma seleccionado; 
consulte la solución inicial para obtener más detalles) 
de forma que cada letra minúscula se convierta en mayúscula
y cada letra mayúscula en minúscula. Por ejemplo:

Como de costumbre, su función/método debe ser puro, es decir, no debe mutar la cadena original.

*/

/*
String.prototype.toAlternatingCase = function () {
  return [...this].map(e => 
                       e === e.toLowerCase() 
                       ?
                       e.toUpperCase() 
                       : 
                       e.toLowerCase()
                      ).join("");
}  

*/

// Kata 7

/*
Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?

*/

function greet() {
	// farming
	const h = () => "h";
	const e = () => "e"; 
	const ll = () => "ll"; 
	const o = () => "o"; 
	const w = () => "w"; 
	const r = () => "r"; 
	const l = () => "l"; 
	const d = () => "d";
	 
	return `${h()}${e()}${ll()}${o()} 
	${w()}${o()}${r()}${l()}${d()}`;
}

console.log(greet()); 

/*
const greet = () => {
	const h = e => ${e()}; 
	const e = ll => ${ll()}; 
	const ll = o => ${o()}; 
	const o = w => ${w()}; 
	const w = r => ${o()}${r()}; 
	const r = l => ${l()};
	const l = d => ${d()}; 
	const d = () => "d";
}
*/


/*
String.fromCharCode()
Convierte los códigos ASCII en caracteres:
*/

/*
function greet() {
  return String.fromCharCode(
    104, 101, 108, 108, 111, 32, // "hello "
    119, 111, 114, 108, 100      // "world"
  );
}

console.log(greet()); // "hello world"

//String.fromCharCode(104) → "h", 32 es el espacio " ".

*/


/*
arrays + .map()
Construye las letras en un array y las transforma:
*/

/*
function greet() {
  const codes = [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100];
  return codes.map(c => String.fromCharCode(c)).join('');
}

console.log(greet()); // "hello world"

*/


/*
Kata 8

Messi

Función de los goles de Messi

Messi es un futbolista con goles en tres ligas:

    LaLiga
    Copa del Rey
    Campeones

Completa la función para devolver su número total de goles en las tres ligas.

Nota: la entrada siempre será válida.

Por ejemplo:

5, 10, 2 --> 17

*/

const messiGoals = (l, c, ch) => l + c + ch;  

const goals = (...a) => a.reduce((s, v) => s + v, 0);

const Goals = (...goalsArray) => goalsArray.reduce((a, b) => a + b);



// Kata 9 

/*
Pow 2 

Complete the function that takes a non-negative integer n 
as input, and returns a list of all the powers of 2 with 
the exponent ranging from 0 to n ( inclusive ).

Eg. 

n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

*/

const powersOfTwo = n => {
  if (n < 0) return false;
  const result = [];
  for (let i = 0; i <= n; i++) {
    result.push(2 ** i);
  }
  return result;
};

console.log(powersOfTwo(5)); // [1, 2, 4, 8, 16, 32]


function powOfTwo(n){
  var result = [];
  for (var i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}


function powTwo(n) {
  return Array.from({length: n + 1}, (v, k) => 2 ** k);
}


function pwTwo(n) {
  return [...Array(n + 1)].map((_, i) => 2 ** i)
}

const pwOfTwo = n => [...Array(n + 1)].map((e, i) => Math.pow(2, i));


const pOfTwo = n =>
  [...Array(++n)].map((_, idx) => 2 ** idx);
  
 function powersTwo(n){
  return Array.from({length: n + 1}, (_,i) => 2 ** i);
}


// Kata 10

/*
This function should test if the factor is a factor of base.
Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.
2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder

For example 2 is not a factor of 7 because: 7 % 2 = 1
Note: base is a non-negative number, factor is a positive number

*/

const factor = (base, factor) => 
	base % factor === 0
	? true
	: false

function checkForFactor (base, factor) {
  return base % factor === 0;
}

/*
base % factor rtn numb
base % factor === 0 rtn t o f

*/



// kata 11 - Clock

/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
Example:

h = 0
m = 1
s = 1

result = 61000

Input constraints:

    0 <= h <= 23
    0 <= m <= 59
    0 <= s <= 59

Fundamentals
 
*/


function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}

const msPast = (h, m, s) => {
	if (h < 0 && m < 0 && s < 0) return false;
	if (h <= 23 && m <= 59 && s <= 59)
		return h*(3600000) + m*(60000) + s*(1000);
};

function mspast(h, m, s){
  var hours = h * 60 * 60 * 1000;
  var minutes = m * 60 * 1000;
  var seconds = s * 1000;
  
  return hours + minutes + seconds;
}


function pastms(h, m, s){
  const setTime = new Date().setHours(h, m, s);
  const midnight = new Date().setHours(0, 0, 0);
  
  return Math.round(setTime - midnight);
}


// Kata 12 

/*
Find Maximum and Minimum Values of a List
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.

Examples (Input -> Output)

* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5

Notes
You may consider that there will not be any empty arrays/vectors

*/

const min = arr => {
	if (arr.length === 0) return false;
	return Math.min.apply(null, arr);
}; 

const max = arr => {
	if (arr.length <= 0) return false;
	return Math.max.appy(null, arr);
}; 


const minArr = (list) => Math.min(...list);
const maxArr = (list) => Math.max(...list);


var minList = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var maxList = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}



// Kata 13 

/*
Correct the mistakes of the character recognition software

Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1

The test cases contain numbers only by mistake
*/

function correct(string)
{
    return string
    .replaceAll("5", "S")
    .replaceAll("0", "O")
    .replaceAll("1", "I");
}

/*
Aunque funciona es ineficiente porque recorre varias veces la cadena. 
*/

/*
console.log(correct('L0ND0N'));
console.log(correct('DUBL1N'));
console.log(correct('51NGAP0RE'));
console.log(correct('BUDAPE5T'));
console.log(correct('PAR15'));
*/

function corr(string) {
  return string.replace(/[501]/g, c => (
    { "5": "S", "0": "O", "1": "I" }[c]
  ));
}

/*
Eficiencia: 
1. Con regExp recorre el string en una sola pasada. 
2. /[501]/g ⇒ Busca cualquier carácter 5, 0 o 1 globalmente.
3.El segundo argumento de .replace() es una función que recibe el carácter coincidente (c) y devuelve su reemplazo del objeto mapa.

*/

const correctStr = string =>
  string.replace(/\d/g, val => `OI   S`[val]);



// Kata 14

/*
List Filtering

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
Example

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


*/

function filter_list(l) {
  return l.filter(e => typeof e === "number"); 
}

/*
console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]));
*/

// Kata 15 

/*

Complementary DNA

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

Example: (input --> output)
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

*/


function adn(string) {
  return string.replace(/[ATCG]/g, c => (
    { "A": "T", "C": "G", "T": "A", "G": "C" }[c]
  ));
}

//console.log(adn('ATTGC'));
//console.log(adn('GTAT'));


// Error: falta un complemento
/*
function adN(string) {
  return string.replace(/[ATCG]/g, c => (
    { "A": "T", "C": "G"}[c]
  ));
}
*/



// Kata 16 

/*
Rock Paper Scissors!

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"


*/

function rps(p1, p2) {
  // 1) Empate directo
  if (p1 === p2) return "Draw";

  // 2) Mapa de victorias: cada clave vence al valor
  const wins = { 
    r: "s",  // rock vence a scissors
    p: "r",  // paper vence a rock
    s: "p"   // scissors vence a paper
  };

  // 3) Si el valor de p2 coincide con lo que vence p1 → p1 gana
  return wins[p1] === p2 
    ? "Player 1 wins" 
    : "Player 2 wins";
}

// Tests
console.log(rps("r", "p")); // Player 2 wins
console.log(rps("r", "s")); // Player 1 wins
console.log(rps("r", "r")); // Draw

console.log(rps("p", "r")); // Player 1 wins
console.log(rps("p", "s")); // Player 2 wins
console.log(rps("p", "p")); // Draw

console.log(rps("s", "r")); // Player 2 wins
console.log(rps("s", "p")); // Player 1 wins
console.log(rps("s", "s")); // Draw

