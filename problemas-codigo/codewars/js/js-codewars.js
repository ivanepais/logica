
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
