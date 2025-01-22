// Ctrl+shift+j 
3+4; 

/*
 imprimir una serie de caras de gato que se vean así: 
 =^.^=

shift+enter new line

*/

// Draw as many cats as you want!
let drawCats = function (howManyTimes) {
	//howManyTimes: number
	for (let i = 0; i < howManyTimes; i++) {
		console.log(i + " =^.^=");
	}
};
drawCats(10); // You can put any number here instead of 10.


/*
La programación se trata de manipular datos, pero
¿qué son los datos? Los datos son información que almacenamos en nuestros
programas informáticos. Por ejemplo, tu nombre es un dato, y también lo es tu edad. El color de tu pelo, cuántos
hermanos tienes, dónde vives, si eres
hombre o mujer: todas estas cosas son datos. En JavaScript, hay tres tipos básicos de datos: números,
cadenas y booleanos. Los números se utilizan para representar, bueno, ¡números! Por ejemplo, tu edad se puede representar como un número,
y también tu altura. 

*/


/*
Los números en JavaScript se ven así:
5;
Las cadenas se utilizan para representar texto. Tu nombre se puede representar como una cadena en JavaScript, al igual que tu dirección de correo electrónico.
Las cadenas se ven así:
"Hola, soy una cadena";
Los booleanos son valores que pueden ser verdaderos o falsos. Por ejemplo, un valor booleano sobre ti sería si usas anteojos.
Otro podría ser si te gusta el brócoli.
Un booleano se ve así:
true;
Hay diferentes maneras de trabajar con cada tipo de datos. Por
ejemplo, puedes multiplicar dos números, pero no puedes multiplicar
dos cadenas. Con una cadena, puedes preguntar por los primeros cinco caracteres.
Con booleanos, puedes verificar si dos valores son ambos
verdaderos. 

*/

/*
Operaciones y jeraquía o precedencia u orden

*/

/*
tipos de variables, identificadores y tipos de datos

Espacio en memoria para guardar información
Los datos guardados tienen direcciones de memoria, 
Una variable/identificador es un puntero a la dirección de memoria que tiene la información

let age = 12; //number type

*/

/*
Undefined y valor de retorno
Si no definimos un valor o no lo devolvermos, es undefined.

*/


/*
Incremento y decremento:

A menudo necesitarás aumentar o disminuir el
valor de una variable que contiene un número en 1. 

Cada vez que pasa algo, aumentamos una variable en uno, así crear un contador. 

*/

/*
Asignación y operación al mismo tiempo 

var balloons = 100;
balloons *= 2;
 
*/

/*
Cadenas y concatenación


Cuando usas + para unir dos cadenas, creas una nueva cadena con
la segunda cadena adjunta al final de la primera, de esta manera:

var greeting = "Hello";
var myName = "Nick";
greeting + myName;
"HelloNick"

Aquí, creamos dos variables (greeting y myName) y asignamos
a cada una un valor de cadena ("Hello" y "Nick", respectivamente). Cuando sumamos
estas dos variables, las cadenas se combinan para formar una
nueva cadena, "HelloNick" 

*/


/*
propiedad .length

Encontrar la longitud de una cadena
Agregar .length al final de una. 

*/


/*
Acceder a los carácteres por indice 

Usando corchetes ([])

var myName = "Nick";
myName[0];
"N"
myName[1];
"i"
myName[2];
"c"

*/


/*
Métdos: slice(), toUpperCase(), toLowerCase()

*/


/*
Convertir texto 
*/

let sillyString = "hELlo THERE, hOW ARE yOu doINg?"; //u
let lowerString = sillyString.toLowerCase(); //v
let firstCharacter = lowerString[0]; //w
let firstCharacterUpper = firstCharacter.toUpperCase(); //x
let restOfString = lowerString.slice(1); //y
firstCharacterUpper + restOfString; //z
"Hello there, how are you doing?"

/*
Repasemos esto línea por
línea. En u, creamos una nueva variable llamada sillyString y guardamos la cadena que queremos modificar en esa
variable. En v, obtenemos la versión en minúsculas de sillyString ("hola
cómo estás?") con
.toLowerCase() y la guardamos en una
nueva variable llamada lowerString.
En w, usamos [0] para obtener el primer
carácter de lowerString ("h") y lo
guardamos en firstCharacter (se usa 0
para capturar el primer carácter). Luego,
en x, creamos una versión en mayúsculas de firstCharacter ("H") y llamamos a esa firstCharacterUpper.
En y, usamos slice para obtener todos los
caracteres en lowerString, comenzando desde el segundo carácter ("hola
cómo estás?") y lo guardamos en restOfString. Finalmente,
en z, agregamos firstCharacterUpper ("H") a restOfString para obtener "Hola, ¿cómo estás?". 

*/

/*
Como los valores y las variables se pueden sustituir entre sí,
podríamos convertir las líneas v a z en una sola línea, de esta manera:

Sin embargo, puede resultar confuso seguir el código escrito de esta manera, por lo que es una buena idea utilizar variables para cada paso de una tarea complicada como esta, al menos hasta que te sientas más cómodo
leyendo este tipo de código complejo.
*/

let sillyString = "hELlo THERE, hOW ARE yOu doINg?";
sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase();
"Hello there, how are you doing?"

/*
Booleanos
true o false value

*/

/*
Operadores lógicos: &&, ||,y !.  

Así como puedes combinar números con operadores matemáticos
(+, -, *, /, etc.), puedes combinar valores booleanos con operadores
booleanos.

el resultado siempre será otro valor booleano (ya sea verdadero o falso).

Usa el operador && con dos valores booleanos para ver si ambos son verdaderos
  
*/

let hadShower = true;
let hasBackpack = false;
hadShower && hasBackpack;
false

/*
Tiene una tabla de verdad

El operador booleano || significa “o”. Se puede pronunciar “o”, o
incluso “o-o”, pero algunas personas lo llaman “tuberías”, porque los programadores
llaman al carácter | una tubería. 

Puede utilizar este operador con dos
valores booleanos para averiguar si alguno de ellos es verdadero.
*/
let hasApple = true;
let hasOrange = false;
hasApple || hasOrange;
true

/*
! simplemente significa “no”. Puedes llamarlo “no”, pero mucha gente lo llama
“bang”. (A veces, un signo de exclamación se llama bang). 

Úsalo para convertir falso en verdadero o verdadero en falso. 
Esto es útil para trabajar con valores que son opuestos.
*/
let isWeekend = true;
let needToShowerToday = !isWeekend;
needToShowerToday;
false


/*
Combinación de operadores lógicos

Por ejemplo, digamos que deberías ir a la escuela si no es fin de semana y
te has duchado y tienes una manzana o una naranja. Podríamos
verificar si todo esto es cierto con JavaScript, de esta manera:

*/
let isWeekend = false;
let hadShower = true;
let hasApple = false;
let hasOrange = true;
let shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
shouldGoToSchool;
true
/*
En este caso, no es fin de semana, te has duchado y
no tienes una manzana pero sí una naranja, por lo que deberías
ir a la escuela.
hasApple || hasOrange está entre paréntesis porque queremos asegurarnos de que JavaScript resuelva esa parte primero.
*/


/*
Comparar números con booleanos

Los valores booleanos se pueden utilizar para responder preguntas sobre números que tienen una respuesta simple de sí
o no / v o f. 

*/
let altura = 65;
let alturaRestriction = 60;
altura > alturaRestricción;
true

/*
Con altura > alturaRestricción
le pedimos a JavaScript que nos diga
si el primer valor es mayor que el segundo. 
*/

/*
Igualdad: === 

Para saber si dos números son exactamente iguales, utiliza el triple signo igual (===), que
significa “igual a”.

=== solo se utiliza para comparar dos valores para ver si son iguales, 
por lo que no importa qué valor esté en qué lado.

Suposiciones
*/

let mySecretNumber = 5;
let chicoGuess = 3;
mySecretNumber === chicoGuess;
false

let harpoGuess = 7;
mySecretNumber === harpoGuess;
false

let grouchoGuess = 5;
mySecretNumber === grouchoGuess;
true

/*
 
Doble igualdad: ==

Úselo para ver si dos valores son iguales, 
incluso si uno es una cadena y el otro es un número.
*/
let stringNumber = "5";
let actualNumber = 5;
stringNumber === actualNumber;
false

stringNumber == actualNumber;
true

/*
Cuando usas dobles iguales, 0 es igual
a falso, pero la cadena "falso" no lo es:
*/

0 == false;
true
"falso" == false;
false

/*
Esto se debe a que cuando JavaScript intenta comparar dos valores
con dobles iguales, primero intenta hacerlos del mismo tipo. En este
caso, convierte el booleano en un número. Si conviertes booleanos
en números, falso se convierte en 0 y verdadero en 1. 

Entonces, cuando escribes 0 == falso, ¡obtienes verdadero!
Debido a esta rareza, probablemente sea más seguro simplemente seguir con
=== por ahora.
*/


/*
undefined and null

Ambos se utilizan para significar “nada”, 
pero de formas ligeramente diferentes.

undefined es el valor que utiliza JavaScript cuando no tiene un
valor para algo. Por ejemplo, cuando creas una nueva variable,
si no estableces su valor en nada usando el operador =, su valor
se establecerá en undefined:

El valor null se utiliza normalmente cuando quieres decir deliberadamente
“Esto está vacío”.

No es muy común establecer algo en undefined; 
Si sientes la necesidad de establecer una variable en “nada”,
deberías usar null en su lugar.

null se usa solo cuando realmente quieres decir que algo no está ahí, 
lo que es muy útil ocasionalmente.

Por ejemplo, digamos que estás usando una variable para rastrear cuál es tu verdura favorita.
Si odias todas las verduras y no tienes una favorita, puedes establecer
la variable de verdura favorita en null.

Sin embargo, si no estuviera definida, 
alguien podría pensar que aún no has llegado a establecer un valor.
*/

/*
Tipos de datos básicos

números, cadenas y valores booleanos

Los números se usan para cuestiones matemáticas, 
las cadenas se usan para texto
los valores booleanos se usan para preguntas de sí o no. 
Los valores null e undefined están ahí para darnos una forma de hablar sobre cosas que no existen.

*/


/*
Arrays

crear y agrupar datos
 
Una matriz es una lista de valores
Entonces, en lugar de darle a tu amigo tres cadenas separadas, 
puedes solo usar la matriz única myTopThreeDinosaurs.
*/
let myTopThreeDinosaurs = ["T-Rex", "Velociraptor", "Stegosaurus"];

/*
Una lista con variables separadas es bastante difícil de usar
*/

/*
Para crear una matriz con valores, ingresa los valores, separados por comas, entre los corchetes. 
Podemos llamar elementos a los valores individuales de una matriz. 

En este ejemplo, nuestros elementos serán cadenas (los nombres de nuestros dinosaurios favoritos), así que los escribiremos entre comillas. 
Almacenaremos la matriz en una variable llamada dinosaurios
*/
let dinosaurs = ["T-Rex", "Velociraptor", "Stegosaurus", 
"Triceratops", "Brachiosaurus", "Pteranodon", "Apatosaurus", 
"Diplodocus", "Compsognathus"];

/*
Las listas largas pueden ser difíciles de leer en una línea, 
pero afortunadamente esa no es la única manera de formatear 
(o diseñar) una matriz. 

También puedes formatear una matriz con un corchete de apertura en una línea,
cada item en una linea nueva:
*/
let dinosaurs = [
"T-Rex",
"Velociraptor",
"Stegosaurus",
"Triceratops",
"Brachiosaurus",
"Pteranodon",
"Apatosaurus",
"Diplodocus",
"Compsognathus"
];

/*
Acceder a los items de un array
*/
dinosaurs[0];
"T-Rex"
dinosaurs[3];
"Triceratops"


/*
Modificar elementos en una matriz
*/
dinosaurs[0] = "Tyrannosaurus Rex";

/*
Modificar elementos a partir de una matriz vacía

También puede utilizar corchetes con índices para agregar nuevos elementos a una matriz.
*/
let dinosaurs = [];
dinosaurs[0] = "T-Rex";
dinosaurs[1] = "Velociraptor";
dinosaurs[2] = "Stegosaurus";
dinosaurs[3] = "Triceratops";
dinosaurs[4] = "Brachiosaurus";
dinosaurs[5] = "Pteranodon";
dinosaurs[6] = "Apatosaurus";
dinosaurs[7] = "Diplodocus";
dinosaurs[8] = "Compsognathus";
dinosaurs;
["T-Rex", "Velociraptor", "Stegosaurus", "Triceratops",
"Brachiosaurus", "Pteranodon", "Apatosaurus", "Diplodocus",
"Compsognathus"]

/*
Puedes agregar un elemento en cualquier índice que desees. Por
ejemplo, para agregar un dinosaurio nuevo (inventado) en el índice 33, puedes
escribir lo siguiente:
*/
dinosaurs[33] = "Philosoraptor";
dinosaurs;
["T-Rex", "Velociraptor", "Stegosaurus", "Triceratops",
"Brachiosaurus", "Pteranodon", "Apatosaurus", "Diplodocus",
"Compsognathus", undefined × 24 "Philosoraptor"]

/*
Distintos tipos de datos en una matriz
*/
let dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", 
"stegosaurus", 3627.5], 10];

dinosaursAndNumbers[2];
["triceratops", "stegosaurus", 3627.5]
dinosaursAndNumbers[2][0];
"triceratops"

/*

i[0]    i[1]                    i[2]                    i[3] 
[3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10];
                     i[2][0]        i[2][1]     i[2][2] 
*/


/*
Propiedades y métodos de arrays

Las propiedades y los métodos te ayudan a trabajar con matrices. 
Las propiedades generalmente te dicen algo sobre la matriz
los métodos normalmente hacen algo para cambiar la matriz o devolver una nueva matriz.

La propiedad length de una matriz te dice cuántos elementos hay en la matriz.
*/
let maniacs = ["Yakko", "Wakko", "Dot"];
maniacs[0];
"Yakko"
maniacs[1];
"Wakko"
maniacs[2];
"Dot"

maniacs.length;
3

/*
Ultimo elemento de la matriz

El último índice de una matriz es, 
el número de la longitud de la matriz menos 1, 
dado que empieza en 0. 

significa que hay una manera fácil de acceder al último elemento de una matriz, 
sin importar cuán larga sea:
usamos un poco de matemática: la longitud de la matriz menos 1,
dentro del corchete que representa los indices. 
*/
maniacs[maniacs.length - 1];
"Dot"

/*
Agregar un elemento a una matriz con un método: push()

se agregaron a la matriz, en el mismo orden en que los ingresamos

Cuando llamas al método push, suceden dos cosas. 
Primero, el elemento entre paréntesis se agrega a la matriz.
Segundo, se devuelve la nueva longitud de la matriz.
Es por eso que ves esos números impresos cada vez que llamas a push
*/
var animals = [];
animals.push("Cat");
1
animals.push("Dog");
2
animals.push("Llama");
3
animals;
["Cat", "Dog", "Llama"]

animals.length;
3


/*
Usar otro método para agregar un elemento al principio de la matriz: unshift()

obj.unshift(element)

Los valores antiguos se desplazan un índice cada vez. 
Por lo tanto, "Gato", que originalmente estaba en el
índice 0, ahora está en el índice 2

Como .push(), .unshift() devuelve la nueva longitud de la matriz cuando es llamado. 
*/
animals;
["Cat", "Dog", "Llama"]
animals[0];
"Cat"

animals.unshift("Monkey");
4
animals;
["Monkey", "Cat", "Dog", "Llama"]
animals.unshift("Polar Bear");
5

animals;
["Polar Bear", "Monkey", "Cat", "Dog", "Llama"]
animals[0];
"Polar Bear"
animals[2];
"Cat"

/*
Eliminar ultimo elemento: pop()

hace dos cosas: elimina el último elemento y devuelve
ese último elemento como un valor
*/
animals;
["Polar Bear", "Monkey", "Cat", "Dog", "Llama"]

let lastAnimal = animals.pop();
lastAnimal;
"Llama"

animals;
["Polar Bear", "Monkey", "Cat", "Dog"]
animals.pop();
"Dog"
animals;
["Polar Bear", "Monkey", "Cat"]

animals.unshift(lastAnimal);
4
animals;
["Llama", "Polar Bear", "Monkey", "Cat"]


/*
push() y pop() son un par útil porque a veces solo te importa el final de una matriz. 
Puedes insertar un nuevo elemento en la matriz
y luego extraerlo cuando estés listo para usarlo.
*/


/*
Remover último elemento: .shift()



shift() y unshift() son un par util para agregar y eliminar elementos
del principio de una matriz, tal como usarías push y pop para agregar y
eliminar elementos del final de una matriz.
*/

animals;
["Llama", "Polar Bear", "Monkey", "Cat"]

let firstAnimal = animals.shift();
firstAnimal;
"Llama"
animals;
["Polar Bear", "Monkey", "Cat"]


/*
Agregar array a otro array 

Para sumar dos matrices y crear una nueva matriz única, puedes
utilizar firstArray.concat(otherArray)

con los valores de firstArray añadidos delante de los de
otherArray.

los valores de la primera matriz al principio y los valores de la segunda matriz al final.

firstArray.concat(otherArray) devuelve una matriz
que contiene todos los elementos de firstArray y secondArray, ninguna
de las matrices originales se modifica. 
*/
let furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
let scalyAnimals = ["Boa Constrictor", "Godzilla"];
let furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
furryAndScalyAnimals;
["Alpaca", "Ring-tailed Lemur", "Yeti", "Boa Constrictor", "Godzilla"]
furryAnimals;
["Alpaca", "Ring-tailed Lemur", "Yeti"]
scalyAnimals;
["Boa Constrictor", "Godzilla"]

/*
Unir varias matrices
Puedes usar concat para unir más de dos matrices. Solo tienes que poner
las matrices adicionales dentro de los paréntesis, separadas por comas:

útil cuando tienes varias matrices que quieres
combinar en una sola. Por ejemplo, supongamos que tienes una lista de tus libros favoritos y tu amigo también tiene una lista de libros favoritos
Sería más fácil si tuvieras solo una lista de libros
*/
let furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
let scalyAnimals = ["Boa Constrictor", "Godzilla"];
let featheredAnimals = ["Macaw", "Dodo"];
let allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
allAnimals;
["Alpaca", "Ring-tailed Lemur", "Yeti", "Boa Constrictor", "Godzilla",
"Macaw", "Dodo"]


/*
Encontrar indice de una matriz

use .indexOf(element).

indexOf es como el reverso de usar corchetes para obtener
un valor en un índice particular; colors[2] es "azul"

Si el elemento cuya posición solicitas no está en la matriz,
JavaScript devuelve -1.
es la forma que tiene JavaScript de decir "Eso no existe aquí",
mientras sigue devolviendo un número.

Si el elemento aparece más de una vez en la matriz, el método indexOf
devolverá el primer índice de ese elemento en la matriz.
var insects = ["Bee", "Ant", "Bee", "Bee", "Ant"];
insects.indexOf("Bee");
0
*/
let colors = ["red", "green", "blue"];
colors.indexOf("blue");
2
colors.indexOf("green");
1

colors[2];
"blue"
colors.indexOf("blue");
2

colors.indexOf("purple");
-1

let insects = ["Bee", "Ant", "Bee", "Bee", "Ant"];
insects.indexOf("Bee");
0

/*
Convertir una matriz en una cadena 

.join() para unir todos los elementos de una matriz
en una sola cadena grande.

Cuando llamas al método join en una matriz, devuelve una cadena
que contiene todos los elementos, separados por comas. Pero, ¿qué pasa si no
quieres usar comas como separador?
Puedes usar .join(separator) para hacer
lo mismo, pero con tu propio
separador elegido entre cada valor.

Por ejemplo, podemos usar tres separadores diferentes: un guion con espacios
a cada lado, un asterisco y la palabra
sees con espacios a cada lado. Observa
que necesitas comillas alrededor del separador, porque el separador
es una cadena.

Esto es útil si tienes una matriz que quieres convertir en
una cadena. Digamos que tienes muchos segundos nombres y los tienes
almacenados en una matriz, junto con tu nombre y apellido. Es posible que se te pida que proporciones tu nombre completo como una cadena. Si usas join, con un
solo espacio como separador, unirás todos tus nombres en una sola cadena:
var myNames = ["Nicholas", "Andrew", "Maxwell", "Morgan"];
myNames.join(" ");
"Nicholas Andrew Maxwell Morgan"

Si no tuvieras join, tendrías que hacer algo como esto,
que sería realmente molesto de escribir:
myNames[0] + " " + myNames[1] + " " + myNames[2] + " " + myNames[3];
"Nicholas Andrew Maxwell Morgan"
Además, este código funcionaría solo si tuvieras exactamente dos segundos nombres. 

Si los valores de la matriz no son cadenas, JavaScript los convertirá en cadenas antes de unirlos:
var ages = [11, 14, 79];
ages.join(" ");
"11 14 79"
*/

let boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
boringAnimals.join();
"Monkey,Cat,Fish,Lizard"

let boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
boringAnimals.join(" - ");
"Monkey - Cat - Fish - Lizard"
boringAnimals.join("*")
"Monkey*Cat*Fish*Lizard"
boringAnimals.join(" sees ")
"Monkey sees Cat sees Fish sees Lizard"

let myNames = ["Nicholas", "Andrew", "Maxwell", "Morgan"];
myNames.join(" ");
"Nicholas Andrew Maxwell Morgan"

myNames[0] + " " + myNames[1] + " " + myNames[2] + " " + myNames[3];
"Nicholas Andrew Maxwell Morgan"

let ages = [11, 14, 79];
ages.join(" ");
"11 14 79"


/*
Programas que utilizan arrays

camino a casa:
Por suerte, tienes una idea inteligente para ayudarte con tu problema: en el camino a la casa de tu amiga, mantendrás una lista de todos los
puntos de referencia que veas. En el camino de regreso, recorrerás la lista en reversa
marcarás los elementos del final de la lista cada vez que pases por un punto de referencia para saber dónde ir a continuación.

Construir el array con .push()

Empezamos por
crear una matriz vacía. La matriz comienza vacía porque
no sabes qué puntos de referencia verás hasta que empieces
a caminar hacia la casa de tu amigo. 

Luego, para cada punto de referencia en el
camino a la casa de tu amigo, insertaremos una descripción de ese punto de referencia al final de la matriz. Luego, cuando sea hora de volver a casa,
extraeremos cada punto de referencia de la matriz.

Cosas útiles para hacer con matrices
Ahora conoces muchas formas diferentes de crear matrices y jugar
con ellas. Pero, ¿qué puedes hacer realmente con todas estas propiedades y métodos? En esta sección, escribiremos algunos programas breves que muestran algunas cosas útiles para hacer con matrices.
Encontrar el camino a casa
Imagínate esto: tu amiga ha venido a tu casa. Ahora
quiere mostrarte su casa. El único problema es que nunca has estado en su casa antes, y más tarde tendrás que encontrar el
camino de regreso a casa por tu cuenta.

Por suerte, tienes una idea inteligente para ayudarte con tu problema: en el camino a la casa de tu amiga, llevarás una lista de todos los
puntos de referencia que veas. En el camino de regreso, revisarás la lista en

reversa y marcarás los elementos del final de la lista cada vez que pases por un punto de referencia para saber a dónde ir a continuación.

Construyendo la matriz con push
Escribamos un código que haga exactamente eso. Empezamos por
crear una matriz vacía. La matriz comienza vacía porque
no sabes qué puntos de referencia verás hasta que empieces
a caminar hacia la casa de tu amigo. Luego, para cada punto de referencia en el
camino a la casa de tu amigo, insertaremos una descripción de ese punto de referencia al final de la matriz. Luego, cuando sea hora de volver a casa,
extraeremos cada punto de referencia de la matriz.

Aquí creamos una matriz vacía llamada puntos de referencia y luego usamos
push para almacenar todos los puntos de referencia que pases en el camino a la casa de tu amigo.
*/
let landmarks = [];
landmarks.push("My house");
landmarks.push("Front path");
landmarks.push("Flickering streetlamp");
landmarks.push("Leaky fire hydrant");
landmarks.push("Fire station");
landmarks.push("Cat rescue center");
landmarks.push("My old school");
landmarks.push("My friend's house");

/*
Ir en reversa con .pop()

Una vez que llegues a la casa de tu amigo, puedes inspeccionar tu matriz
de puntos de referencia. Efectivamente, el primer elemento es "Mi casa", seguido
de "Camino de entrada", y así sucesivamente hasta el final de la matriz, con el
último elemento "La casa de mi amigo". Cuando sea hora de volver a casa, todo lo que
necesitas hacer es quitar los elementos uno por uno, y sabrás a dónde ir a continuación.
*/
landmarks.pop();
"My friend's house"
landmarks.pop();
"My old school"
landmarks.pop();
"Cat rescue center"
landmarks.pop();
"Fire station"
landmarks.pop();
"Leaky fire hydrant"
landmarks.pop();
"Flickering streetlamp"
landmarks.pop();
"Front path"
landmarks.pop();
"My house"

/*
¿Notaste cómo el primer punto de referencia
que pusiste en la matriz fue también el último que
sacaste de ella? ¿Y el último punto de referencia que pusiste
en la matriz fue el primero que salió?
Puede que hayas pensado que siempre
querrías que el primer elemento que pusieras fuera el primero
que sacaras, pero puedes ver que a veces es útil volver a recorrer una matriz en reversa.
En realidad, es muy común utilizar un proceso como este en programas

Esta técnica se conoce como pila
se coloca encima (como si se empujara), y cada vez que come uno, se desprende de la parte superior (como si se desprendiera). Hacer estallar una pila es como retroceder en el tiempo: el último
elemento que se desprendió es el primero que se empujó.

En la jerga de la programación, esto también se llama LIFO (Last In, First Out).
La ​​alternativa a LIFO es FIFO (First In, First Out). Esto también se conoce como cola, porque actúa como una cola (o fila) de personas.
La primera persona que se une a la cola es la primera en ser atendida.
*/

/*
Tomador de decisiones:

Podemos usar matrices en JavaScript para crear un programa que tome decisiones por nosotros (como una bola mágica 8). Sin embargo, primero debemos averiguar cómo obtener números aleatorios

Uso de Math.random()
Podemos producir números aleatorios utilizando un método especial llamado
Math.random(), que devuelve un número aleatorio entre 0 y 1
cada vez que se lo llama. Aquí hay un ejemplo:
*/
Math.random();
0.8945409457664937
Math.random();
0.3697543195448816
Math.random();
0.48314980138093233

/*
Es importante tener en cuenta que Math.random() siempre devuelve un número menor que 1 y nunca devolverá 1.
Si desea un número mayor, simplemente multiplique el resultado de llamar a
Math.random(). Por ejemplo, si desea números entre 0 y 10, multiplicaría Math.random() por 10
*/
Math.random() * 10;
7.648027329705656
Math.random() * 10;
9.7565904534421861
Math.random() * 10;
0.21483442978933454

/*
Redondeo hacia abajo con Math.floor()

Sin embargo, no podemos usar estos números como índices de matriz, porque
los índices deben ser números enteros sin nada después del punto
decimal. Para solucionarlo, necesitamos otro método llamado Math.floor(). Este
toma un número y lo redondea hacia abajo al número entero que se encuentra debajo de él
(básicamente eliminando todo lo que se encuentra después del punto decimal).


Podemos combinar estas dos técnicas para crear un índice aleatorio. Todo lo que necesitamos hacer es multiplicar Math.random() por la longitud de la matriz y luego llamar a Math.floor() con ese valor. Por ejemplo,
si la longitud de la matriz fuera 4, haríamos esto:

Cada vez que llamas al código anterior, devuelve un número aleatorio de 0 a 3 (incluidos 0 y 3). Como Math.random() siempre
devuelve un valor menor que 1, Math.random() * 4 nunca devolverá 4 ni nada mayor que 4.
Ahora, si usamos ese número aleatorio como índice, podemos seleccionar
un elemento aleatorio de una matriz:

Aquí usamos Math.floor(Math.random() * 4); para elegir un número aleatorio
de 0 a 3. Una vez que ese número aleatorio se guarda en la
variable randomIndex, lo usamos como índice para solicitar una cadena de la matriz randomWords.
De hecho, podríamos acortar esto eliminando la variable randomIndex
por completo y simplemente decir:
*/
Math.floor(3.7463463);
3
Math.floor(9.9999);
9
Math.floor(0.793423451963426);
0

Math.floor(Math.random() * 4);
2 // could be 0, 1, 2, or 3

let randomWords = ["Explosion", "Cave", "Princess", "Pen"];
let randomIndex = Math.floor(Math.random() * 4);
randomWords[randomIndex];
"Cave"

randomWords[Math.floor(Math.random() * 4)];
"Princess"

/*
Completar tomador de decisiones

Ahora, creemos nuestra matriz de frases y podemos usar este código
para elegir una al azar. ¡Éste es nuestro tomador de decisiones! Estoy usando comentarios aquí para mostrar algunas preguntas que quizás quieras hacerle a tu
computadora.

Aquí creamos una matriz llamada frases que almacena diferentes
consejos. Ahora, cada vez que tengamos una pregunta, podemos pedir
un valor aleatorio de la matriz de frases, ¡y nos ayudará a tomar
una decisión!
Observa que debido a que nuestra matriz de decisiones tiene cinco elementos, multiplicamos
Math.random() por 5. Esto siempre devolverá una de cinco posiciones de índice: 0, 1, 2, 3 o 4.
*/
let phrases = [
"That sounds good",
"Yes, you should definitely do that",
"I'm not sure that's a great idea",
"Maybe not today?",
"Computer says no."
];
// Should I have another milkshake?
phrases[Math.floor(Math.random() * 5)];
"I'm not sure that's a great idea"
// Should I do my homework?
phrases[Math.floor(Math.random() * 5)];
"Maybe not today?"

/*
Random Insult Generator

Podemos extender el ejemplo del tomador de decisiones para crear un programa
que genere un insulto aleatorio cada vez que lo ejecutes.

Aquí tenemos tres matrices y en
las líneas 1, 2 y 3 usamos tres índices
para extraer una palabra aleatoria de cada matriz.
Luego, los combinamos todos en la variable
randomInsult para crear un insulto completo.
En 1 y 2 estamos multiplicando por 3 porque
randomAdjectives y randomBodyParts
ambos contienen tres elementos. Del mismo modo, estamos
multiplicando por 5 en 3 porque randomWords tiene cinco elementos. Observa que agregamos una cadena con un solo espacio
entre randomAdjective y randomWord. Intenta ejecutar este código unas cuantas veces: ¡deberías obtener un insulto aleatorio diferente cada vez!
*/
let randomBodyParts = ["Face", "Nose", "Hair"];
let randomAdjectives = ["Smelly", "Boring", "Stupid"];
let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
// Pick a random body part from the randomBodyParts array:
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// Pick a random adjective from the randomAdjectives array:
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
// Pick a random word from the randomWords array:
let randomWord = randomWords[Math.floor(Math.random() * 5)];
// Join all the random strings into a sentence:
let randomInsult = "Your " + randomBodyPart + " is like a " + 
randomAdjective + " " + randomWord + "!!!";
randomInsult;
"Your Nose is like a Stupid Marmot!!!"

/*
If you wanted to be really clever, you could replace line 3
with this:
*/
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

/*
Sabemos que siempre debemos multiplicar Math.random()
por la longitud de la matriz, por lo que usar randomWords.length significa
que no tenemos que cambiar nuestro código si la longitud de la matriz
cambia.
A continuación, se muestra otra forma de crear nuestro insulto aleatorio
*/
let randomInsult = ["Your", randomBodyPart, "is", "like", "a", randomAdjective, randomWord + "!!!"].join(" "); "Your Hair is like a Smelly Fly!!!"

/*
En este ejemplo, cada palabra de la oración es una cadena
separada en una matriz, que unimos con el carácter de espacio. Hay
solo un lugar donde no queremos un espacio, que es entre randomWord y "!!!". En este caso, usamos el operador + para unir
esas dos cadenas sin el espacio.
*/

/*
Rs matrices

Las matrices de JavaScript son una forma de almacenar una lista de
valores. Ahora sabes cómo crear y trabajar con matrices, y
tienes muchas formas de acceder a sus elementos.
Las matrices son una de las formas que te brinda JavaScript para reunir múltiples valores en un solo lugar
*/


/*
Objetos 

Son otra forma de almacenar múltiples valores como una única unidad. 
Los objetos usan claves de cadena para acceder a los elementos, 
en lugar de índices numéricos.

Las cadenas se denominan claves o
propiedades, y los elementos a los que apuntan se denominan
valores. En conjunto, estos datos se denominan pares
clave-valor.

Si bien las matrices se utilizan principalmente para
representar listas de varias cosas, 

los objetos se utilizan a menudo para representar cosas individuales
con múltiples características o atributos.

¿qué sucede si quisiéramos
almacenar diferentes datos sobre un animal? Como lo hicimos con la matriz.
*/

/*
Crear objeto

Podríamos almacenar mucha información sobre un solo animal creando un objeto JavaScript.

Las llaves y todo lo que está entre ellas se denominan literales de
objeto. Un literal de objeto es una forma de crear un objeto escribiendo
todo el objeto a la vez.


También hemos visto literales de matriz (por ejemplo, ["a", "b", "c"]), literales
de número (por ejemplo, 37), literales de cadena (por ejemplo, "moose") y literales
booleanos (verdadero y falso). Literal solo significa que todo el
valor se escribe de una vez, no se construye en varios pasos.

podría usar el literal de matriz [1, 2, 3]. O
podría crear una matriz vacía y luego usar el método push para agregar 1, 2 y 3 a la matriz. No siempre sabe al principio qué habrá en su matriz u objeto, por lo que no siempre puede usar literales
para construir matrices y objetos.

La clave, que siempre es una cadena
El valor, que puede ser de cualquier tipo

ten en cuenta que no necesitas una coma después del último par clave-valor. 
Como es el último par clave-valor, la llave de cierre viene 
a continuación, en lugar de una coma.
*/
let cat = {
  "legs": 3,
  "name": "Harmony",
  "color": "Tortoiseshell"
};

/*
Claves sin comillas

En nuestro primer objeto, ponemos cada clave entre comillas, pero no es necesario que las claves estén entre comillas; este también es un literal de objeto cat válido:

Si no pone comillas alrededor de las claves, las claves sin comillas deben seguir las mismas reglas que los nombres de variable: no se permiten espacios en una clave sin comillas, por ejemplo.
Si pone la clave entre comillas, se permiten espacios

Tenga en cuenta que, si bien una clave siempre es una cadena (con o sin comillas), el valor de esa clave puede ser cualquier tipo de valor o incluso
una variable que contenga un valor.
*/
let cat = {
  legs: 3,
  name: "Harmony",
  color: "Tortoiseshell"
};

let cat = {
  legs: 3,
  "full name": "Harmony Philomena Snuggly-Pants Morgan",
  color: "Tortoiseshell"
};

let cat = { legs: 3, name: "Harmony", color: "Tortoiseshell" };

/*
Acceso a los valores de un objeto 

usando corchetes, al igual que
con matrices. La única diferencia es que en lugar del índice (un
número), se usa la clave (una cadena).

Así como las comillas alrededor de las claves son opcionales cuando crea
un literal de objeto, las comillas también son opcionales cuando accede a claves en objetos

Sin embargo, si no va a usar comillas, el
código se ve un poco diferente:
cat.name;
"Harmony"
Este estilo se llama notación de punto.

Al igual que con las claves sin comillas en literales de objeto, esto funcionará solo si la clave
no contiene ningún carácter especial, como espacios

En lugar de buscar un valor escribiendo su clave, digamos que desea obtener una lista de todas las claves en un objeto. JavaScript te ofrece una
manera sencilla de hacerlo, usando Object.keys():

Object.keys(anyObject) devuelve una matriz que contiene todas las claves
de anyObject
*/
cat["name"];
"Harmony"

cat.name;
"Harmony"

let dog = { name: "Pancake", age: 6, color: "white", bark: "Yip yap 
yip!" };
let cat = { name: "Harmony", age: 8, color: "tortoiseshell" };
Object.keys(dog);
["name", "age", "color", "bark"]
Object.keys(cat);
["name", "age", "color"] 


/*
Agregar valores a los objetos 

Un objeto vacío es como una matriz vacía, pero utiliza llaves,
{ }, en lugar de corchetes:
var object = {};
Puedes agregar elementos a un objeto de la misma manera que agregarías elementos a una matriz, pero utilizas cadenas en lugar de números:

el navegador muestra el contenido del objeto. Sin embargo, los distintos navegadores
pueden mostrar los objetos de manera diferente. Por ejemplo, Chrome (en el momento en que escribo esto) muestra el objeto cat de esta manera:
Mientras que Chrome imprime las claves en ese orden (patas, nombre,
color), otros navegadores pueden imprimirlas de manera diferente. 

Esto se debe a que JavaScript no almacena los objetos 
con sus claves en ningún orden particular.

Los arreglos obviamente tienen un cierto orden: el índice 0 es anterior al índice
1 y el índice 3 es posterior al índice 2.

¿El color debe ir antes o después de las patas?

No hay una respuesta "correcta" a esta pregunta, por lo que los objetos simplemente almacenan
claves sin asignarles ningún orden en particular y, como resultado,
diferentes navegadores imprimirán las claves en diferentes órdenes. Por esta
razón, nunca debe escribir un programa que dependa de que las claves de los objetos
estén en un orden preciso.
*/
let object = {};

let cat = {};
cat["legs"] = 3;
cat["name"] = "Harmony";
cat["color"] = "Tortoiseshell";
cat;
{ color: "Tortoiseshell", legs: 3, name: "Harmony" }

/*Chrome*/
Object {legs: 3,  name: "Harmony", color: "Tortoiseshell"}

/*
Agregar claves con notación de punto

Si solicitas una propiedad que JavaScript no conoce,
devuelve el valor especial undefined. undefined solo significa “¡No hay
nada aquí!”.

No definimos isBrown, por lo que dog.isBrown devuelve undefined
*/
let cat = {};
cat.legs = 3;
cat.name = "Harmony";
cat.color = "Tortoiseshell";

let dog = {
name: "Pancake",
legs: 4,
isAwesome: true
};
dog.isBrown;
undefined

/*
Combinar arrays y objetos

no hay nada que te impida
utilizar otra matriz u objeto como valor en una matriz u objeto.
Por ejemplo, una matriz de objetos de dinosaurio podría verse así:
var dinosaurs = [
{ name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
{ name: "Stegosaurus", period: "Late Jurassic" },
{ name: "Plateosaurus", period: "Triassic" }
];

Para obtener toda la información sobre el primer dinosaurio, puedes usar
la misma técnica que usamos antes, ingresando el índice entre corchetes:
dinosaurs[0];
{ name: "Tyrannosaurus Rex", period: "Late Cretaceous" }

Si solo quieres obtener el nombre del primer dinosaurio, puedes
agregar la clave del objeto entre corchetes después del índice de la matriz:
dinosaurs[0]["name"];
"Tyrannosaurus Rex"

O puedes usar la notación de puntos, de esta manera:
dinosaurs[1].period;
"Late Jurassic"

Puedes usar la notación de puntos solo con objetos, 
no con matrices.
*/

/*
Objeto complejo: objeto con matriz y matriz con objeto

matriz de
objetos amigos, donde cada objeto también contiene una matriz. Primero, crearemos los objetos y luego los colocaremos todos en una matriz.

Primero, creamos tres objetos y los guardamos en variables
llamadas anna, dave y kate. Cada objeto tiene tres claves: nombre, edad y luckyNumbers. Cada clave de nombre tiene un valor de cadena asignado,
cada clave de edad tiene un valor numérico único asignado y cada clave
de luckyNumbers tiene una matriz asignada que contiene algunos números diferentes.
*/
let anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
let dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40] };
let kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] };

/*
A continuación, crearemos una matriz de nuestros amigos:
*/
var friends = [anna, dave, kate];

/*
Ahora tenemos una matriz guardada en la variable friends con tres
elementos: anna, dave y kate (cada uno de los cuales hace referencia a objetos). Puedes
recuperar uno de estos objetos usando su índice en la matriz:
*/
friends[1];
{ name: "Dave", age: 5, luckyNumbers: Array[3] }

/*
Esto recupera el segundo objeto en la matriz, dave (en el índice 1).
Chrome imprime Array[3] para la matriz luckyNumbers, que es
solo su forma de decir: "Esta es una matriz de tres elementos".

 También podemos recuperar un valor dentro de un
objeto ingresando el índice del objeto entre corchetes seguido
por la clave que queremos:
*/
friends[2].name
"Kate"

/*
Este código solicita el elemento en el índice 2, que es la variable
llamada kate, y luego solicita la propiedad en ese objeto bajo la clave "name", que es "Kate". Incluso podríamos recuperar un valor de
una matriz que está dentro de uno de los objetos dentro de la matriz friends,
de la siguiente manera:
*/
friends[0].luckyNumbers[1];
4

/*
friends[0] es el elemento en el índice 0 de la matriz friends, que es el objeto anna.
friends[0].luckyNumbers es la matriz [2, 4, 8, 16] del objeto
llamado anna. Finalmente, friends[0].luckyNumbers[1] es el índice 1 de esa matriz, que es el valor numérico 4.
*/
			
		   friends[0]
				|
let friends = [anna, dave, kate];
				|					friends[0].luckyNumbers	
				|							|
{ name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };

4 -> friends[0].luckyNumbers[1]


/*
Explorando los objetos en la consola

Chrome te permitirá explorar los objetos que imprimas en la consola.
Así se muestra en su interprete.
*/
friends[1];
-> Object {name: "Dave", age: 5, luckyNumbers: Array[3]}

/*
Con el triángulo/flecha podemos expandir
Expansión de una matriz dentro del objeto
No te preocupes por esas propiedades __proto__, tienen que
relacionarse con el prototipo del objeto
*/
friends[1];
-> Object {name: "Dave", age: 5, luckyNumbers: Array[3]}
 age: 5
 -> luckyNumbers: Array[3]
 name: "Dave"
 -> __proto__: Object
/*

También podemos expandir el array de su interior 
*/
friends[1];
-> Object {name: "Dave", age: 5, luckyNumbers: Array[3]}
 age: 5
 -> luckyNumbers: Array[3]
   0: 3
   1: 9
   2: 40
   length: 3
 name: "Dave"
 -> __proto__: Object

/*
notarás que el intérprete muestra el valor
de la propiedad length de la matriz.

También puede ver la matriz de amigos completa y expandir cada elemento de la matriz, como se muestra en la Figura 4-6.
Tres objetos de la matriz de amigos, como se muestra en el intérprete de Chrome
*/
friends
-> Object1  -> Object2  -> Object3
	...			...			...


/*
Programas con Objetos

Llevar un registro del dinero que se debe

Le presta dinero a sus amigos
y quiere tener una forma de llevar un registro de cuánto dinero le debe cada uno de ellos.

En este caso, la cadena sería el nombre de su amigo y el valor sería la cantidad de dinero que le debe
*/
let owedMoney = {};
owedMoney["Jimmy"] = 5;
owedMoney["Anna"] = 7;
owedMoney["Jimmy"];
5
owedMoney["Jinen"];
undefined

/*
En 1, creamos un nuevo objeto vacío
llamado owedMoney. En 2,
asignamos el valor 5 a la clave "Jimmy".
Hacemos lo mismo en 3, asignando el valor 7 a la clave "Anna".
En 4, pedimos el valor asociado con la clave "Jimmy", que
es 5. Luego, en 5, pedimos el valor
asociado con la clave "Jinen",
que no está definido porque no lo
establecimos. 

Ahora imaginemos que Jimmy
toma prestado más dinero (digamos, $3).
Podemos actualizar nuestro objeto y agregar 3
a la cantidad que Jimmy debe con el operador más-igual
*/
owedMoney["Jimmy"] += 3;
owedMoney["Jimmy"];
8

/*
Esto es como decir owedMoney["Jimmy"] = owedMoney["Jimmy"] + 3.
También podemos observar el objeto completo para ver cuánto dinero nos debe cada
amigo:
*/
owedMoney;
{ Jimmy: 8, Anna: 7 }


/*
Almacenamiento de información sobre sus películas

Digamos que tiene una gran colección de películas en DVD y Blu-ray.

¿No sería fantástico tener la información sobre esas películas en
su computadora para poder encontrar información sobre cada película fácilmente?

Puede crear un objeto para almacenar información sobre sus películas,
donde cada clave es un título de película y cada valor es otro objeto
que contiene información sobre la película. ¡Los valores en los objetos pueden ser
objetos en sí mismos!
*/
let movies = {
"Finding Nemo": {
releaseDate: 2003,
duration: 100,
actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
format: "DVD"
},
"Star Wars: Episode VI - Return of the Jedi": {
releaseDate: 1983,
duration: 134,
actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
format: "DVD"
},
"Harry Potter and the Goblet of Fire": {
releaseDate: 2005,
duration: 157,
actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
format: "Blu-ray"
}
};

/*
Es posible que haya notado que utilicé comillas para los títulos de las películas (las claves en el objeto externo) pero no para las claves en los
objetos internos. Esto se debe a que los títulos de las películas necesitan tener
espacios; de lo contrario, tendría que
escribir cada título como
StarWarsEpisodeVIReturnOfTheJedi,
y eso es simplemente una tontería. No necesitaba
comillas para las claves en los objetos internos, así que las omití. Puede
hacer que el código se vea un poco más limpio
cuando no hay signos de puntuación innecesarios en él.

Ahora, cuando quieras información sobre una película, es fácil encontrarla:
*/
let findingNemo = movies["Finding Nemo"];
findingNemo.duration;
100
findingNemo.format;
"DVD"

/*
Aquí guardamos la información de la película Buscando a Nemo en
una variable llamada findingNemo. Luego podemos ver las propiedades de
este objeto (como duración y formato) para obtener información sobre la película.

También puedes agregar fácilmente nuevas películas a tu colección:
*/
let cars = {
releaseDate: 2006,
duration: 117,
actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
format: "Blu-ray"
};
movies["Cars"] = cars;

/*

Aquí creamos un nuevo objeto de información de la película sobre Cars.
Luego lo insertamos en el objeto de películas, bajo la clave "Cars".
Ahora que estás construyendo tu colección, es posible que quieras
encontrar una forma fácil de enumerar los nombres de todas tus películas. 

Ahí es donde entra en juego Object.keys:
*/
Object.keys(movies);
["Finding Nemo", "Star Wars: Episode VI - Return of the Jedi", 
"Harry Potter and the Goblet of Fire", "Cars"]


/*
Rs Objetos

Una diferencia importante es que usas
cadenas para acceder a los elementos de un objeto y usas números para
acceder a los elementos de un array. Por esta razón, los arrays están ordenados,
mientras que los objetos no.
*/


/*
HTML

HTML (HyperText Markup Language):
La palabra hipertexto se refiere al texto que está conectado por hipervínculos, los enlaces en una página web.
Un lenguaje de marcado se utiliza para anotar documentos de modo que no sean solo texto sin formato.
El marcado le dice al software (como un navegador web) cómo mostrar el texto y qué hacer con él.

Un editor de texto, un programa simple diseñado para escribir archivos de texto sin formato
Los documentos procesados ​​por procesadores de texto contienen texto formateado (con diferentes fuentes, colores de letra, tamaños de fuente, etc.)
Los procesadores de texto están diseñados para facilitar el cambio de formato del texto.
Los procesadores de texto suelen permitir también insertar imágenes y gráficos.

Los archivos de texto sin formato contienen solo texto, sin ninguna
información sobre la fuente, el color, el tamaño, etc.
No se puede poner una imagen en un archivo de texto a menos que la hagas a partir de texto
*/

/*
Tags/etiquetas y elementos 

Los documentos HTML están compuestos de elementos. Un elemento comienza
con una etiqueta de inicio y termina con una etiqueta de cierre.
*/

/*
Elemento p

El elemento p se utiliza para definir párrafos de texto separados. Cualquier
texto que coloque entre las etiquetas <p> se mostrará en un párrafo separado,
con algo de espacio arriba y abajo del párrafo. 
*/

/*
La etiqueta <!DOCTYPE html> es simplemente una declaración. 
Simplemente dice: “Este es un documento HTML”. 
A continuación viene la etiqueta de apertura <html> (la etiqueta de cierre </html> está al final). 

El elemento head contiene cierta información sobre su documento HTML, como el elemento title, que contiene el título del documento
El elemento title está contenido dentro del elemento head, que está contenido dentro del elemento html.
El elemento body contiene el contenido que se mostrará en el navegador. 
*/

/*
Jerarquía del documento HTML 

Los elementos HTML tienen una jerarquía u orden claros y pueden considerarse como una especie de árbol invertido.

Los elementos HTML tienen una jerarquía u orden claros y pueden considerarse como una especie de árbol invertido. Puede ver cómo se vería nuestro documento como un árbol en la Figura 5-7.

El elemento superior es el elemento html. 
Contiene los elementos head y body. 
El head contiene el elemento title y el body contiene los elementos h1 y p. 
El navegador interpreta su HTML según esta jerarquía. 
Veremos cómo cambiar la estructura del documento más adelante, en el Capítulo 9.

		<html>
		/	\
	<head> <body>
	 /		/   \
 <title>  <h1>  <p>	


Otra forma de visualizar la jerarquía HTML:
como un conjunto de cuadros anidados.
.............
| 	HTML	|
| ........  |
| | Head |  |
| | .....|  |  
| | title|	|
| | .....|	|
| ........  |
|      		|
| ......... |
| | body  | |
| | ..... | | 
| | h1    |	|
| | ..... | |
| |  p    | |
| |	..... |	|
| ......... |
.............
*/


/*
Añadir links y sus atributos 
*/

/*
Condicionales 
*/

/*
Bucles 

los condicionales permiten ejecutar un fragmento de código
una vez si una condición es verdadera. 

Los bucles, por otro lado, permiten
ejecutar un fragmento de código varias veces, 
dependiendo de si una condición sigue siendo verdadera.

Por ejemplo, mientras haya comida en tu plato,
deberías seguir comiendo; o,
mientras tengas suciedad en tu cara, debes seguir lavándote.

*/


/*
Bucle for

facilitan la escritura de bucles que crean una variable, repiten
hasta que una condición sea verdadera y actualizan la variable al final de
cada vuelta del bucle.

Al configurar un bucle for, se crea
una variable, se especifica la condición y se indica cómo debe cambiar la variable
después de cada ciclo, todo antes de llegar al cuerpo del bucle.
*/

for (let sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
console.log("I have counted " + sheepCounted + " sheep!");
}
console.log("Zzzzzzzzzzz");

/*
La configuración (var sheepCounted = 0) se ejecuta antes de que comience el bucle.
Generalmente se usa para crear una variable para rastrear la cantidad de veces
que se ha ejecutado el bucle. Aquí creamos la variable sheepCounted con un valor
inicial de 0.

La condición (sheepCounted < 10) se verifica antes de cada ejecución
del cuerpo del bucle. Si la condición es verdadera, se ejecuta el cuerpo;
si es falsa, el bucle se detiene. En este caso, el bucle se detendrá una vez que
sheepCounted ya no sea menor que 10.

El incremento (sheepCounted++) se ejecuta después de cada ejecución
del cuerpo del bucle. Generalmente se utiliza para actualizar la variable del bucle.
Aquí, lo usamos para agregar 1 a sheepCounted cada vez que se ejecuta el bucle.
*/

for (setup; condition; increment) {
console.log("Do something");
}

/*
setup/config: 
Este código se ejecuta antes de que comience el bucle
Esto se usa para crear una variable para rastrear 
la cantidad de veces que se ha ejecutado el bucle

condition:
Algo que es verdadero o falso
Esto evita el bucle infinito cuando no sea verdadero. 
Y se usa para ejecutar el código interno del bucle

code in loop:
Algún código que se ejecuta mientras la condición sea verdadera

increment:
Algo que se ejecuta después de cada repetición del cuerpo del bucle
Generalmente se utiliza para actualizar la variable del bucle.
*/

/*
Los bucles for se utilizan a menudo para hacer algo una cantidad determinada de veces.
Por ejemplo, este programa dirá ¡Hola! tres veces:
*/
let timesToSayHello = 3;
for (let i = 0; i < timesToSayHello; i++) {
console.log("Hello!");
}
Hello!
Hello!
Hello!

/*
Si fuéramos el intérprete de JavaScript que ejecuta este código, primero
crearíamos una variable llamada timesToSayHello y la estableceríamos en 3. Cuando llegamos al bucle for, ejecutamos la configuración, que crea una
variable i y la establece en 0. A continuación, verificamos la condición. Como
i es igual a 0 y timesToSayHello es 3, la condición es verdadera, por lo que
ingresamos al cuerpo del bucle, que simplemente muestra la cadena "Hola!". Luego,
ejecutamos el incremento, que aumenta i a 1.
Ahora verificamos la condición nuevamente. Sigue siendo verdadera, por lo que ejecutamos
el cuerpo y volvemos a incrementar. Esto sucede repetidamente hasta que i es
igual a 3. En este punto, la condición es falsa (3 no es menor que 3),
por lo que salimos del bucle.
*/

/*

*/


/*
Bucles while

El tipo de bucle más simple es un bucle while. Un bucle while
ejecuta su cuerpo repetidamente hasta que una condición particular deja de ser verdadera. Al
escribir un bucle while, estás diciendo: "Sigue haciendo esto mientras esta
condición sea verdadera. Detente cuando la condición se vuelva falsa"

Este ciclo continúa hasta que la condición sea falsa.

Contar ovejas con un bucle while
Digamos que tienes problemas para dormir y quieres contar ovejas.
*/
while (condition) {
console.log("Do something");
i++;

let sheepCounted = 0;
while (sheepCounted < 10) {
console.log("I have counted " + sheepCounted + " sheep!");
sheepCounted++;
}
console.log("Zzzzzzzzzzz");

/*
Evitar bucles infinitos

Ten esto en cuenta cuando uses bucles: si la condición que
estableciste nunca se vuelve falsa, tu bucle se repetirá para siempre (o al menos
hasta que salgas de tu navegador). 
*/


/*
Usar loops en arrays y strings

Uso de bucles for con matrices y cadenas
Un uso muy común de los bucles for es hacer algo con cada
elemento de una matriz o cada carácter de una cadena. 

Por ejemplo, a continuación se muestra un bucle for
imprime los animales de un zoológico:
*/

let animals = ["León", "Flamenco", "Oso polar", "Boa constrictor"];
for (let i = 0; i < animals.length; i++) {
console.log("Este zoológico contiene un " + animals[i] + ".");
}

/*
En este bucle, i comienza en 0 y va hasta uno menos que
animals.length, que en este caso es 3. 
Los números 0, 1, 2 y 3 son los índices de los animales en la matriz animals. 
Esto significa que cada vez que se completa el bucle, i es un índice diferente,
y animals[i] es otro animal de la matriz animals. 

Cuando i es 0, animals[i] es "León". 
Cuando i es 1, animals[i] es "Flamingo", y así sucesivamente.

Al ejecutar esto, se obtendría el siguiente resultado:
Este zoológico contiene un león.
Este zoológico contiene un flamenco.
Este zoológico contiene un oso polar.
Este zoológico contiene una boa constrictor.

Como vio en el Capítulo 2, puede acceder a caracteres individuales
en una cadena de la misma manera que puede acceder a elementos individuales en
una matriz, utilizando corchetes. 

El siguiente ejemplo utiliza un bucle for
para imprimir los caracteres de un nombre:
*/

let name = "Nick";
for (let i = 0; i < name.length; i++) {
console.log("Mi nombre contiene la letra " + name[i] + ".");
}

/*
Esto generaría el siguiente resultado:
Mi nombre contiene la letra N.
Mi nombre contiene la letra i.
Mi nombre contiene la letra c.
Mi nombre contiene la letra k.
*/

/*
Otro uso del bucle for

No siempre tienes que empezar la variable de bucle
en 0 e incrementarla en 1. Por ejemplo, aquí hay una forma de
imprimir todas las potencias de 2 por debajo del número 10 000:
*/

for (let x = 2; x < 10000; x = x * 2) {
console.log(x);
}

/*
Establecemos x en 2 e incrementamos el valor de x usando x = x * 2;,
lo que duplicará el valor de x cada vez que se ejecute el bucle. 
El resultado crece muy rápidamente, como puedes ver:

2
4
8
16
32
64
128
256
512
1024
2048
4096
8192

¡Y voilá! Este bucle for corto imprime todas las potencias de 2 por debajo de 10000
*/

/*
Rs condicionales y bucles

Los condicionales se usan para ejecutar código solo cuando 
una determinada condición es verdadera. 

Los bucles se usan para ejecutar código varias veces y para seguir
ejecutándolo mientras una determinada condición sea verdadera. 

Puedes usar condicionales para asegurarte de que se ejecute el código correcto en el
momento correcto, y puedes usar bucles para mantener tu programa ejecutándose
tanto como sea necesario. 

Tener la capacidad de hacer estas dos cosas
abre un mundo completamente nuevo de posibilidades de programación.
*/


/*
Hangman game 

En este capítulo, crearemos un juego del ahorcado. Aprenderemos
a usar diálogos para que el juego sea interactivo
y recibiremos comentarios de alguien que esté jugando.
El ahorcado es un juego de adivinar palabras. 

Un jugador elige una palabra secreta y el otro jugador intenta
adivinarla.

Por ejemplo, si la palabra fuera PROFESOR, el primer jugador
escribiría:

_ _ _ _ _ _ _

El jugador que adivina intenta adivinar las letras de la palabra.
Cada vez que adivina una letra correctamente, el primer jugador llena los espacios en blanco para cada aparición de esa letra. Por ejemplo, si el jugador que adivina adivinó la letra E, el primer jugador llenaría las E
en la palabra PROFESOR de la siguiente manera:

_ e _ _ _ e _

Cuando el jugador que adivina adivina una letra que no está en la
palabra, pierde un punto y el primer jugador dibuja parte de un monigote por cada intento incorrecto. 

Si el primer jugador completa el monigote antes de que el jugador que lo adivina
adivine la palabra, el jugador que adivina pierde.

En nuestra versión del Ahorcado, el programa JavaScript elegirá la palabra y el jugador humano
adivinará las letras. 

No dibujaremos el monigote, porque aún no hemos aprendido
a dibujar en JavaScript (aprenderemos a hacerlo en el
Capítulo 13).
*/


/*
Diseño de código

Antes de empezar a escribir el
programa, pensemos en
su estructura. 

Para hangman game:

1. Elegir una palabra al azar.
2. Aceptar la suposición del jugador.
3. Salir del juego si el jugador lo desea.
4. Verificar que la suposición del jugador sea una letra válida.
5. Llevar un registro de las letras que el jugador ha adivinado.
6. Mostrar al jugador su progreso.
7. Terminar cuando el jugador haya adivinado la palabra.


Aparte de la primera y la última tarea (elegir una palabra para que el
jugador adivine y terminar el juego), todos estos pasos deben
ocurrir varias veces, y no sabemos cuántas veces (depende de lo bien que adivine el jugador).

Cuando necesitas hacer lo mismo
varias veces, sabes que necesitarás un bucle.

Pero esta simple lista de tareas realmente no nos da ninguna idea de qué debe suceder y cuándo. Para tener una mejor idea de la estructura
del código, podemos usar pseudocódigo.

*/

/*
Pseudocódigo

Es una herramienta útil que los programadores suelen usar para diseñar
programas. 
Es una forma de describir cómo funcionará un
programa que parece una mezcla entre inglés escrito y código

El pseudocódigo tiene bucles y condicionales, pero aparte de eso, todo es simplemente inglés simple. 

*/
Pick a random word

While the word has not been guessed {
  Show the player their current progress
  Get a guess from the player
  
  If the player wants to quit the game {
    Quit the game
  }
  Else If the guess is not a single letter {
    Tell the player to pick a single letter
  }
  Else {
    If the guess is in the word {
      Update the player's progress with the guess
    }
  }
}
Congratulate the player on guessing the word

/*
Nos da una idea de cómo se estructurará nuestro programa, antes de que realmente escribamos el código y tengamos que lidiar con los detalles desordenados, como cómo vamos a elegir una palabra al azar.
*/


/*
Seguimiento del estado de una variable o palabra del juego

En el pseudocódigo anterior, una de las primeras líneas dice: “Muestra
al jugador su progreso actual”. En el juego del ahorcado, esto
significa completar las letras que el jugador ha adivinado correctamente
y mostrar qué letras de la palabra secreta siguen en blanco. 

¿Cómo lo haremos? Podemos hacer un seguimiento del progreso del jugador de una manera similar a cómo funciona el ahorcado tradicional:
manteniendo una colección de espacios en blanco y completándolos a medida que el
jugador adivina las letras correctas.

En nuestro juego, haremos esto usando una matriz de espacios en blanco para cada
letra de la palabra. La llamaremos matriz de respuestas y la llenaremos
con las suposiciones correctas del jugador a medida que las haga. Representaremos
cada espacio en blanco con la cadena "_"

La matriz de respuestas comenzará como un grupo de estas entradas vacías en
número igual a las letras de la palabra secreta. Por
ejemplo, si la palabra secreta es fish, la matriz se vería así:
["_", "_", "_", "_"]

Si el jugador adivinó correctamente la letra i, cambiaríamos el segundo espacio en blanco por una i:
["_", "i", "_", "_"]
Una vez que el jugador adivine todas las letras correctas, la matriz completa se vería así:
["f", "i", "s", "h"]

También usaremos una variable para llevar un registro de la cantidad de
letras restantes que el jugador tiene que adivinar. Por cada ocurrencia
de una letra adivinada correctamente, esta variable disminuirá en 1.
Una vez que llega a 0, sabemos que el jugador ha ganado.
*/

/*
Diseño del bucle del juego/programa

El juego principal se desarrolla dentro de un bucle while (en nuestro pseudocódigo, este bucle comienza con la línea “While the word has not
be guessed”). En este bucle mostramos el estado actual de la palabra
que se está adivinando (comenzando con todos los espacios en blanco);

le pedimos al jugador que adivine (y nos aseguramos de que sea una suposición válida de una sola letra); 
y actualizamos la matriz de respuestas con la letra elegida, si esa letra aparece
en la palabra.


Casi todos los juegos de computadora se construyen en torno a un bucle de algún tipo, a menudo con la misma estructura básica que el bucle en nuestro
juego del ahorcado. Un bucle de juego generalmente hace lo siguiente:

1. Toma la entrada del jugador
2. Actualiza el estado del juego
3. Muestra el estado actual del juego al jugador

Incluso los juegos que cambian constantemente siguen este
mismo tipo de bucle, solo que lo hacen muy rápido. En el caso de nuestro
juego del ahorcado, el programa toma una suposición del jugador,
actualiza la matriz de respuestas si la suposición es correcta y muestra
el nuevo estado de la matriz de respuestas. 

Una vez que el jugador adivina todas las letras de la palabra, mostramos la
palabra completa y un mensaje de felicitación diciéndole que
ganó.
*/


/*
Programar el juego/programa
 
Ahora que conocemos la estructura general de nuestro juego, podemos empezar
a repasar cómo se verá el código.


Elección de una palabra aleatoria:

Lo primero que tenemos que hacer es elegir una palabra aleatoria. 
Así es como se verá:
*/
let words = [
"javascript",
"monkey",
"amazing",
"pancake"
];

let word = words[Math.floor(Math.random() * words.length)];

/*
Comenzamos nuestro juego en 1 creando una matriz de palabras
(javascript, monkey, amazing y pancake) para usar como
fuente de nuestra palabra secreta, y guardamos la matriz en la variable words. Las palabras deben estar todas en minúscula

En 2 usamos Math.random y Math.floor para elegir una palabra aleatoria de la matriz,
como hicimos con el generador de insultos aleatorios en el Capítulo 3.
*/

/*
Creación de la matriz de respuestas

A continuación, creamos una matriz vacía llamada answerArray y la llenamos con
guiones bajos (_) para que coincida con la cantidad de letras de la palabra.
*/
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
let remainingLetters = word.length;

/*
El bucle for en 1 crea una variable de bucle i que comienza en 0
y llega hasta (pero no incluye) word.length. 
Cada vez que recorremos el bucle, agregamos un nuevo elemento a answerArray, en answerArray[i].

Cuando el bucle termina, answerArray tendrá la misma longitud que word.
Por ejemplo, si word es "monkey" (que tiene seis letras), answerArray
será ["_", "_", "_", "_", "_", "_"] (seis guiones bajos)

Por último, creamos la variable remainLetters y la establecemos en
la longitud de la palabra secreta. Usaremos esta variable para llevar un registro
de cuántas letras quedan por adivinar. Cada vez que el jugador
adivina una letra correcta, este valor se reducirá
en 1 por cada instancia de esa letra en la palabra.
*/

/*
Bucle del juego

El esqueleto del bucle del juego se ve así:

while (remainingLetters > 0) {
// Game code goes here
// Show the player their progress
// Take input from the player
// Update answerArray and remainingLetters for every correct guess
}


Usamos un bucle while, que
seguirá funcionando mientras
remainingLetters > 0 siga siendo verdadero

El cuerpo del bucle tendrá que
actualizar remainters por cada
conjetura correcta que haga el jugador. Una vez que
el jugador haya adivinado todas las letras,
remainingLetters será 0 y el bucle
terminará.
*/

/*
Cuerpo del bucle del juego

Mostrar el progreso del jugador:

Lo primero que debemos hacer dentro del bucle del juego es mostrarle al
jugador su progreso actual:
*/

alert(answerArray.join(" "));

/*
Para ello, unimos los elementos de answerArray en una cadena,
usando el carácter de espacio como separador y luego usamos alert
para mostrar esa cadena al jugador. 

Por ejemplo, digamos que la palabra
es mono y el jugador ha adivinado m, o y e hasta ahora. La matriz de
respuestas se vería así ["m", "o", "_", "_", "e", "_"],
y answerArray.join(" ") sería "m o _ _ e _". El cuadro de diálogo de alerta
luego se vería
*/

/*
Manejo de la entrada del jugador

Ahora tenemos que obtener una suposición del jugador y asegurarnos de que sea un
único carácter.
*/
let guess = prompt("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {
  break;
} else if (guess.length !== 1) {
  alert("Please enter a single letter.");
} else {
 // Update the game state with the guess
}

/*

En 1, prompt toma una suposición del jugador y la guarda en la
variable guess. Una de cuatro cosas sucederá en este punto.

Primero, si el jugador hace clic en el botón Cancelar, guess será
null. Verificamos esta condición en 2 con if (guess === null). Si
esta condición es verdadera, usamos break para salir del bucle.

Puedes usar la palabra clave break en cualquier bucle para detenerlo inmediatamente, sin importar en qué parte del bucle se encuentre el programa o si la condición while
es verdadera en ese momento.


La segunda y tercera posibilidades son que el jugador
no ingrese nada o demasiadas letras. Si no ingresa nada pero hace clic en
Aceptar, guess será la cadena vacía "".

En este caso, guess.length
será 0. Si ingresa más de una letra, guess.length
será mayor que 1.
En 3, usamos else if (guess.length !== 1) para verificar estas
condiciones, asegurándonos de que guess sea exactamente una letra

Si no lo es, mostramos una alerta que dice: "Ingrese una sola letra".
La cuarta posibilidad es que el jugador ingrese una suposición válida de
una letra.

La cuarta posibilidad es que el jugador ingrese una suposición válida de
una letra. Luego tenemos que actualizar el estado del juego con su suposición
usando la declaración else en 4, lo que haremos en la siguiente sección.
*/

/*
Actualización del estado del juego

Una vez que el jugador ha ingresado una suposición válida, debemos actualizar el answerArray del
juego de acuerdo con la suposición. Para ello, agregamos el
siguiente código a la declaración else
*/

for (let j = 0; j < word.length; j++) {
  if (word[j] === guess) {
    answerArray[j] = guess;
    remainingLetters--;
  }
}

/*
En 1, creamos un bucle for con una nueva variable de bucle llamada j,
que va desde 0 hasta word.length. (Usamos j como variable
en este bucle porque ya usamos i en el bucle for anterior).

Usamos este bucle para recorrer cada letra de la palabra. Por ejemplo, digamos que la palabra es pancake. La primera vez que pasamos por este bucle, cuando j es 0,
word[j] será "p". La próxima vez, word[j] será "a", luego "n", "c",
"a", "k" y, finalmente, "e"

En 2, usamos if (word[j] === guess) para verificar si la letra actual que estamos viendo coincide con la suposición del jugador. Si es así,
usamos answerArray[j] = guess para actualizar la matriz de respuestas con la suposición actual.

Para cada letra en la palabra que coincida con guess,
actualizamos la matriz de respuestas en el punto correspondiente. Esto
funciona porque la variable de bucle j se puede usar como índice para
answerArray, así como se puede usar como índice para word, como se puede
ver en la Figura

Index (j) 	0	1	2	3	4	5	6

word		"p	a	n	c	a	k	e"

answerArray ["_", "_", "_", "_", "_", "_", "_"]


Por ejemplo, imagina que recién comenzamos a jugar y
llegamos al bucle for en 1. Digamos que word es "pancake", guess es "a",
y answerArray actualmente se ve así:
["_", "_", "_", "_", "_", "_", "_", "_"]

La primera vez que pasamos por el bucle for en 1, j es 0, por lo que word[j]
es "p". Nuestra suposición es "a", por lo que omitimos la declaración if en 2 (porque
"p" === "a" es falso). La segunda vez, j es 1, por lo que word[j]
es "a". 

Esto es igual a guess, por lo que ingresamos la parte if de la declaración. La línea answerArray[j] = guess; establece el elemento en el índice
1 (el segundo elemento) de answerArray para guess, por lo que answerArray ahora
se ve así:
["_", "a", "_", "_", "_", "_", "_"]


Las siguientes dos vueltas al bucle, word[j] es "n" y luego
"c", que no coinciden con guess. Sin embargo, cuando j llega a 4, word[j]
es "a" nuevamente. Actualizamos answerArray nuevamente, esta vez estableciendo el
elemento en el índice 4 (el quinto elemento) para guess. Ahora answerArray
se ve así:
["_", "a", "_", "_", "a", "_", "_"]

Las letras restantes no coinciden con "a", por lo que no sucede nada las
últimas dos vueltas al bucle. Al final de este bucle, answerArray
se actualizará con todas las ocurrencias de guess en word

Por cada suposición correcta, además de actualizar answerArray,
también necesitamos disminuir remainingLetters en 1. Hacemos esto en 3
usando remainingLetters--;.

Cada vez que guess coincide con una letra en word,
remainingLetters disminuye en 1. Una vez que el jugador ha adivinado todas las
letras correctamente, remainingLetters será 0.

Finalización del juego
Como ya hemos visto, la condición principal del bucle del juego es
remainingLetters > 0, por lo que mientras todavía haya letras para
adivinar, el bucle seguirá en bucle. Una vez que remainters
llega a 0, abandonamos el bucle. Terminamos con el siguiente código:

La primera línea usa alert para mostrar la matriz de respuestas una última vez. La segunda
línea usa alert nuevamente para felicitar al jugador ganador.
*/

/*
Finalización del juego

Como ya hemos visto, la condición principal del bucle del juego es
remainingLetters > 0, por lo que mientras queden letras por
adivinar, el bucle seguirá funcionando. Una vez que remainters
llega a 0, abandonamos el bucle. Terminamos con el siguiente código:
*/
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);

/*
La primera línea usa alert para mostrar la matriz de
respuestas una última vez. La segunda
línea usa alert nuevamente para felicitar al jugador
ganador.
*/

/*
Código del juego

Ahora hemos visto todo el código del juego,
y solo necesitamos juntarlo. Lo que
sigue es la lista completa de nuestro juego del Ahorcado. He agregado comentarios a lo largo del código para que sea más fácil ver lo que sucede en cada punto.

Es bastante más largo que
cualquiera de los códigos que hemos escrito hasta ahora, pero
escribirlo te ayudará a familiarizarte más con la escritura de JavaScript

Crea un
nuevo archivo HTML llamado hangman.html y
escribe lo siguiente en él:
*/

<!DOCTYPE html>
<html>
<head>
<title>Hangman!</title>
</head>

<body>
<h1>Hangman!</h1>
<script>
// Create an array of words
let words = [
"javascript",
"monkey",
"amazing",
"pancake"
];
// Pick a random word
let word = words[Math.floor(Math.random() * words.length)];
// Set up the answer array
let answerArray = [];
for (let i = 0; i < word.length; i++) {
answerArray[i] = "_";
}
let remainingLetters = word.length;
// The game loop
while (remainingLetters > 0) {
// Show the player their progress
alert(answerArray.join(" "));
// Get a guess from the player
let guess = prompt("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {
// Exit the game loop
break;
} else if (guess.length !== 1) {
alert("Please enter a single letter.");
} else {
// Update the game state with the guess
for (let j = 0; j < word.length; j++) {
if (word[j] === guess) {
answerArray[j] = guess;
remainingLetters--;
}
}
}
// The end of the game loop
}
// Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
</script>
</body>
</html>

/*
Si el juego no se ejecuta, asegúrate de haber escrito todo correctamente. Si cometes un error, la consola de JavaScript
puede ayudarte a encontrarlo. Por ejemplo, si escribes mal el nombre de una variable,
verás algo como Figure
*/
uncaght: ReferenceError: remainLetter is notdefined 	hangman.html:30

/*

Si haces clic en hangman.html:30,
verás la línea exacta donde está el error. En este caso, nos
muestra que escribimos mal remainingLetters como remainderLetter
al comienzo del bucle while.
Intenta jugar el juego unas cuantas veces.

¿Funciona como esperabas? ¿Puedes
imaginar el código que escribiste ejecutándose en segundo plano mientras lo juegas?
*/

/*
Los bucles y los condicionales son esenciales para crear
juegos o cualquier otro programa informático interactivo. 

Sin estas estructuras de control, un programa simplemente comienza y termina.

Después usaremos funciones para empaquetar el código de modo que puedas
ejecutarlo desde diferentes partes de tus programas.
*/

/*
Retos
A continuación, se incluyen algunos desafíos para desarrollar y mejorar el
juego del ahorcado que creaste en este capítulo.

#1: Más palabras
Agrega tus propias palabras a la matriz de palabras. Recuerda ingresar
palabras en minúsculas.

#2: Letras mayúsculas
Si un jugador adivina una letra mayúscula, no coincidirá con una letra minúscula
en la palabra secreta. Para abordar este problema potencial, convierte la suposición del jugador a minúsculas. (Sugerencia: puedes usar
el método toLowerCase para convertir una cadena a minúsculas).

#3: Limitar las suposiciones
Nuestro juego del ahorcado le da al jugador suposiciones ilimitadas. Añade
una variable para llevar un registro del número de intentos y finalizar el juego
si el jugador se queda sin intentos. (Sugerencia: comprueba esta variable en
el mismo bucle while que comprueba si las letras restantes son > 0.
Como hicimos en el Capítulo 2, puedes usar && para comprobar si dos
condiciones booleanas son verdaderas).

#4: Corregir un error
Hay un error en el juego: si sigues adivinando la misma
letra correcta, las letras restantes seguirán disminuyendo. ¿Puedes
corregirlo? (Sugerencia: puedes añadir otra condición para comprobar
si un valor en answerArray sigue siendo un guión bajo. Si no es un guión bajo, entonces esa letra ya debe haberse adivinado).
Enviar comentarios
 
*/


/*
Funciones

Es una forma de agrupar código para que pueda
reutilizarse. Las funciones nos permiten ejecutar el mismo fragmento de
código desde varios lugares de un programa sin tener que copiar y pegar el código repetidamente.

Al ocultar fragmentos largos de código en una función y darle
un nombre fácil de entender, podrá planificar mejor su código porque puede concentrarse en organizar sus funciones en lugar de en todos los pequeños detalles de código que las componen.

Dividir su código en fragmentos más pequeños y manejables le permite ver el panorama general y
pensar en cómo se estructuran sus programas a un nivel superior.

Encontrará que las funciones son realmente útiles cuando necesite realizar un cálculo o una acción repetidamente a lo largo de un programa
*/
function () {
console.log("Do something");
}

/*
Este código crea una nueva función y la guarda en la variable
*/
let ourFirstFunction = function () {
console.log("Hello world!");
};

/*
Para ejecutar el código dentro de una función (el
cuerpo de la función), necesitamos llamar a la función. Para llamar a una función, ingresa su
nombre seguido de un par de paréntesis de apertura y
cierre
*/
ourFirstFunction();
Hello world!

/*
si llama a esta función en su navegador, notará que
hay una tercera línea, con una pequeña flecha que apunta hacia la izquierda, como se muestra en la
Figura 8-2. Este es el valor de retorno de la función.
*/
<- undefinded

/*

Un valor de retorno es el valor que genera una función, que luego puede
utilizarse en otra parte de su código.

En este caso, el valor de retorno no está definido porque no le dijimos a la función que devolviera ningún valor en particular en el cuerpo de la función. 
Todo lo que hicimos fue pedirle que
imprimiera un mensaje en la consola, que no es lo mismo que devolver
un valor. 

Una función siempre devuelve undefined a menos que haya algo en el cuerpo de la función que le indique que devuelva un valor diferente.

En la consola de Chrome y en los listados de código a lo largo de este
libro, los valores de retorno siempre están codificados por colores según el tipo de datos,
mientras que el texto impreso con console.log siempre es negro.
*/

/*
Pasar argumentos a las funciones 

Probablemente querrás que tus funciones sean más flexibles que eso. Los argumentos de función nos permiten pasar valores a una función para
cambiar el comportamiento de la función cuando se la llama.

Los argumentos
siempre van entre los paréntesis de la función, tanto cuando creas la función como cuando la llamas.
*/
let sayHelloTo = function (name) {
console.log("Hello " + name + "!");
};

/*
Cuando se llama a la función, registra la cadena
"Hola " + nombre + "!", reemplazando nombre con cualquier valor que pases a la función como argumento.
*/
function ( argument ) {
console.log("My argument was: " + argument);
}

/*
Para llamar a una función que toma un argumento, coloca el valor
que deseas usar para el argumento entre los paréntesis que siguen al nombre de la función.
*/

sayHelloTo("Nick");
Hello Nick!

/*
Un motivo para pasar un argumento a una función podría ser decirle
cuántas veces debe hacer algo.

Por ejemplo, la función drawCats
imprime caras de gato (como esta: =^.^=) en
la consola. Le indicamos a la función
cuántos gatos debe imprimir usando el
argumento howManyTimes
*/
let drawCats = function (howManyTimes) {
for (let i = 0; i < howManyTimes; i++) {
console.log(i + " =^.^=");
}
};

/*

El cuerpo de la función es un bucle for que se repite tantas veces
como le indica el argumento howManyTimes (ya que la variable i comienza
en 0 y se repite hasta que aumenta a howManyTimes menos 1).

Cada vez que se pasa por el bucle, la función registra la cadena i + " =^.^=".
Esto es lo que sucede cuando llamamos a esta función con el argumento 5 para howManyTimes:
*/
drawCats(5);
0 =^.^=
1 =^.^=
2 =^.^=
3 =^.^=
4 =^.^=

/*
Puede pasar más de un valor a una función utilizando varios argumentos. Para agregar otro argumento, ingrese los argumentos
entre los paréntesis después de la palabra clave function, separándolos
por comas.
*/
function (argumento1, argumento2) {
console.log("Mi primer argumento fue: " + argumento1);
console.log("Mi segundo argumento fue: " + argumento2);
}

/*
La siguiente función, printMultipleTimes, es como drawCats
excepto que tiene un segundo argumento llamado whatToDraw.
*/
let printMultipleTimes = function (howManyTimes, whatToDraw) {
for (let i = 0; i < howManyTimes; i++) {
console.log(i + " " + whatToDraw);
}
};

/*
La función printMultipleTimes imprime
la cadena que ingresaste para whatToDraw tantas
veces como especifiques con el argumento
howManyTimes.

El segundo argumento le indica a la
función qué imprimir y el primer argumento le indica cuántas
veces debe imprimirlo.

Al llamar a una función con múltiples
argumentos, inserta los valores que deseas usar entre los paréntesis que siguen al
nombre de la función, separados por comas.
*/
printMultipleTimes(5, "=^.^=");
0 =^.^=
1 =^.^=
2 =^.^=
3 =^.^=
4 =^.^=

/*
Para que printMultipleTimes imprima una cara feliz cuatro veces, puedes
hacer esto:
*/
printMultipleTimes(4, "^_^");
0 ^_^
1 ^_^
2 ^_^
3 ^_^

/*
Para dibujar el carácter (>_<) dos veces, podría escribir:
*/
printMultipleTimes(2, "(>_<)");

0 (>_<)
1 (>_<)

/*
Retornar valores desde funciones

Las funciones que hemos visto hasta ahora han impreso texto en la consola
utilizando console.log.

Es una forma sencilla y útil de hacer que JavaScript muestre valores, pero cuando registramos un valor en la consola,
no podemos utilizar ese valor más adelante en el programa. 

¿Qué sucede si
quieres que tu función muestre ese valor para que puedas seguir usándolo en otras partes de tu código?

La salida de una función se llama valor de retorno.
Cuando llamas a una función que devuelve un valor, puedes
utilizar ese valor en el resto de tu código
(podrías guardar un valor de retorno en una variable, pasarlo a otra función o simplemente combinarlo con otro código).

Por ejemplo, la siguiente línea de código
agrega 5 al valor de retorno de la llamada a
Math.floor(1.2345):
*/
5 + Math.floor(1.2345);
6

/*

Math.floor es una función que devuelve el número que le pasas,
redondeado hacia abajo al número entero más cercano. 

Cuando veas una llamada a una función como Math.floor(1.2345), 
imagina reemplazarla con el valor de retorno de esa llamada 
a la función, que es el número 1.

Creemos una función que devuelva un valor. La función double
toma el argumento number y devuelve el resultado de number * 2.
el valor devuelto por esta función es el doble del número
suministrado como argumento.
*/

let double = function (number) {
return number * 2;
};

/*
Para devolver un valor de una función, usa la palabra clave return,
seguida del valor que quieres devolver.

En 1, usamos la palabra clave return
para devolver el valor number * 2 de la función double.
Ahora podemos llamar a nuestra función double para duplicar números:
*/

double(3);
6

/*

Aquí, el valor de retorno (6) se muestra en la segunda línea. Aunque
las funciones pueden aceptar múltiples argumentos, pueden devolver
solo un valor.

Si no le indica a la función que devuelva nada,
devolverá un valor indefinido.
*/

/*
Uso de llamadas de función como valores

Cuando se llama a una función desde un fragmento de código más grande, el valor de retorno de la función se usa dondequiera que se haya
colocado la llamada de función. 

Por ejemplo, usemos nuestra función double para determinar el
resultado de duplicar dos números y luego sumar los resultados:
*/
double(5) + double(6);
22

/*
En este ejemplo, llamamos a la función double dos veces y sumamos los
dos valores de retorno.

Puede pensar en la llamada double(5) como el valor
10 y la llamada double(6) como el valor 12.

También puede pasar una llamada de función a otra función como argumento, y la llamada de función se sustituirá por su valor de retorno.

En este próximo ejemplo, llamamos double, pasando el resultado de
llamar double con 3 como argumento. Reemplazamos double(3) por 6
para que double(double(3)) se simplifique a double(6), que luego se simplifique a 12.
*/
double(double(3));
12

/*
Así es como JavaScript calcula esto:

double( double(3) );

Primero se cálcula la funcion interna con el valor interno

double( 3 * 2 )

double(6)

Cálcula la función externa con su valor interno


6 * 2

12

*/


/*
Programación oriendada a objetos

Usamos los métodos Math.random y Math.floor para
elegir palabras aleatorias de matrices y generar insultos aleatorios. En

esta sección, recrearemos nuestro generador de insultos y lo simplificaremos mediante la
creación de funciones


Una función para elegir una palabra aleatoria:

A continuación, se muestra el código que usamos en el Capítulo 3 para elegir una palabra aleatoria
de una matriz:
*/

randomWords[Math.floor(Math.random() * randomWords.length)];

/*
Si convertimos este código en una función, podemos reutilizarlo para elegir una
palabra aleatoria de una matriz sin tener que ingresar el mismo código
cada vez. 

Por ejemplo, así es como podríamos definir una función pickRandomWord.
*/
let pickRandomWord = function (words) {
return words[Math.floor(Math.random() * words.length)];
};

/*
Todo lo que estamos haciendo aquí es envolver el código anterior en una función. 
Ahora, podemos crear esta matriz randomWords...
*/
let randomWords = ["Planet", "Worm", "Flower", "Computer"];

/*
y elegir una palabra aleatoria de esta matriz usando la función pickRandomWord
de esta manera:
*/
pickRandomWord(randomWords);
"Flower"

/*
Podemos usar esta misma función en cualquier matriz. Por ejemplo,
así es como elegiríamos un nombre aleatorio de una matriz de
nombres:
*/
pickRandomWord(["Charlie", "Raj", "Nicole", "Kate", "Sandy"]);
"Raj"


/*
Random insult generator 

Ahora intentemos recrear nuestro generador de insultos aleatorios, utilizando nuestra
función que elige palabras aleatorias.
*/
let randomBodyParts = ["Face", "Nose", "Hair"];
let randomAdjectives = ["Smelly", "Boring", "Stupid"];
let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
// Pick a random body part from the randomBodyParts array:
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// Pick a random adjective from the randomAdjectives array:
let// Pick a random word from the randomWords array:
lwt randomWord = randomWords[Math.floor(Math.random() * 5)];
// Join all the random strings into a sentence:
let randomString = "Your " + randomBodyPart + " is like a " + 
randomAdjective + " " + randomWord + "!!!";
randomString;
"Your Nose is like a Stupid Marmot!!!"

/*
Observe que terminamos repitiendo words[Math.floor(Math.random()
* length)] varias veces en este código. Con nuestra función pickRandomWord
podríamos reescribir el programa de esta manera:
*/

let randomBodyParts = ["Face", "Nose", "Hair"];
let randomAdjectives = ["Smelly", "Boring", "Stupid"];
let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
// Join all the random strings into a sentence:
let randomString = "Your " + pickRandomWord(randomBodyParts) + 
" is like a " + pickRandomWord(randomAdjectives) + 
" " + pickRandomWord(randomWords) + "!!!";
randomString;
"Your Nose is like a Smelly Marmot!!!"

/*
Aquí hay dos cambios. Primero,
usamos la función pickRandomWord cuando
necesitamos una palabra aleatoria de una matriz, en lugar
de usar words[Math.floor(Math.random() *
length)] cada vez.

Además, en lugar de guardar cada palabra aleatoria en una variable antes
de agregarla a la cadena final, estamos sumando los valores de retorno de las llamadas de función directamente para formar la cadena

Una llamada a una función puede ser
tratada como el valor que la función devuelve.

Entonces, realmente, todo lo que estamos
haciendo aquí es sumar cadenas. Como puede ver, esta versión
del programa es mucho más fácil de leer y también fue más fácil de escribir, ya que reutilizamos parte del código al usar una función.
*/

/*
Convertir el generador de insultos aleatorios
en una función

Podemos llevar nuestro generador de insultos aleatorios un paso más allá al
crear una función más grande que produzca insultos aleatorios. Echemos un vistazo:
*/
generateRandomInsult = function () {
let randomBodyParts = ["Face", "Nose", "Hair"];
let randomAdjectives = ["Smelly", "Boring", "Stupid"];
let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
// Join all the random strings into a sentence:
let randomString = "Your " + pickRandomWord(randomBodyParts) + 
" is like a " + pickRandomWord(randomAdjectives) + 
" " + pickRandomWord(randomWords) + "!!!";
return randomString;

};
generateRandomInsult();
"Your Face is like a Smelly Stick!!!"
generateRandomInsult();
"Your Hair is like a Boring Stick!!!"
generateRandomInsult();
"Your Face is like a Stupid Fly!!!"

/*
Nuestra nueva función generateRandomInsult es solo el código de
antes colocado dentro de una función sin argumentos. La única adición está en u, donde tenemos la función que devuelve randomString al
final.

Puedes ver algunas ejecuciones de muestra de la función anterior, y
devuelve una nueva cadena de insultos cada vez.

Tener el código en una función significa que podemos seguir llamando a esa función para obtener un insulto aleatorio, en lugar de tener que copiar y
pegar el mismo código cada vez que queremos un nuevo insulto.
*/

/*
Abandonar una función antes de tiempo con return

Tan pronto como el intérprete de JavaScript alcanza el retorno en una función, abandona la función, incluso si queda más código en el
cuerpo de la función.

Una forma común de usar return es abandonar una función antes de tiempo
si alguno de los argumentos de la función no es válido; es decir, si no son el tipo de argumentos
que la función necesita para ejecutarse
correctamente.

Por ejemplo, la siguiente función devuelve una cadena
que le indica el quinto carácter de su
nombre. 

Si el nombre que se pasa a la función tiene menos de
cinco caracteres, la función usa return para abandonar la función inmediatamente.

Esto significa que la
declaración return al final, que le indica la quinta letra de su nombre,
nunca se ejecuta.

*/
let fifthLetter = function (name) {
if (name.length < 5) {
return;
}
return "The fifth letter of your name is " + name[4] + ".";
};

/*
En u verificamos si la longitud del nombre de entrada es
menor a cinco. Si es así, usamos return en v para salir de la función antes de tiempo.
Intentemos llamar a esta función.
*/
fifthLetter("Nicholas");
"The fifth letter of your name is o."

/*
El nombre Nicholas tiene más de cinco caracteres, por lo que
fifthLetter completa y devuelve la quinta letra del nombre

El nombre Nicholas tiene más de cinco caracteres, por lo que
fifthLetter completa y devuelve la quinta letra del nombr 

Nicholas, que es la letra o. Intentemos llamarla nuevamente con un nombre más corto:
*/
fifthLetter("Nick");
undefined

/*
Cuando llamamos a fifthLetter con el nombre Nick, la función
sabe que el nombre no es lo suficientemente largo, por lo que sale antes de tiempo con la
primera declaración de retorno en v. 

Debido a que no hay ningún valor especificado
después del retorno en v, la función devuelve undefined
*/


/*
Podemos usar varias palabras clave return
dentro de diferentes declaraciones if en el cuerpo de una función para que una función
devuelva un valor diferente según la entrada. 

Por ejemplo, digamos que estás
escribiendo un juego que otorga medallas a los jugadores
según su puntaje.

Un puntaje de 3 o menos es una medalla de bronce, los puntajes
entre 3 y 7 son de plata y cualquier valor por encima de 7 es de oro. 

Puedes usar una
función como medalForScore para evaluar un puntaje y devolver el tipo correcto de
medalla, como se muestra aquí:
*/
let medalForScore = function (score) {
if (score < 3) {

return "Bronze";
}
if (score < 7) {
return "Silver";
}

return "Gold";

};

/*
En u devolvemos "Bronce" y salimos de la función si el puntaje es
menor a 3. Si llegamos a v, sabemos que el puntaje debe ser al menos 3,
porque si fuera menor a 3, ya habríamos regresado
(es decir, habríamos salido de la función cuando alcanzamos la palabra clave
return en la primera prueba)

Finalmente, si llegamos a w, sabemos
que el puntaje debe ser al menos 7, por lo que no queda nada por verificar y
podemos simplemente devolver "Oro".

Aunque estamos verificando múltiples condiciones, no necesitamos
usar declaraciones if...else encadenadas. Usamos declaraciones if...else para
asegurarnos de que solo se ejecute una de las opciones

Aunque estamos verificando múltiples condiciones, no necesitamos
usar declaraciones if...else encadenadas. Usamos declaraciones if...else para
asegurarnos de que solo se ejecute una de las opciones
*/

/*
Abreviatura para crear funciones

Existe una forma larga y una forma abreviada de escribir
funciones. Estoy usando la forma abreviada porque muestra
más claramente cómo se almacena una función como variable.

Estoy usando la forma abreviada porque muestra
más claramente cómo se almacena una función como variable. 

Aún así, debes
saber cómo se ve la forma abreviada porque muchos
códigos JavaScript la usan. Una vez que te acostumbres a cómo funcionan las funciones, es posible que también quieras usar la versión abreviada.
*/
let double = function (number) {
return number * 2;
};

/*
La versión abreviada: 
*/
function double(number) {
return number * 2;
}

/*

Como puedes ver, en la versión abreviada, creamos explícitamente
un nombre de variable y asignamos la función a la variable, por lo que double aparece antes de la palabra clave function.

Por el contrario, la palabra clave function aparece primero en la versión abreviada, seguida del nombre de la función. En esta
versión, JavaScript crea la variable double detrás de escena.

En términos técnicos, la versión abreviada se conoce como
expresión de función. La versión abreviada se conoce como
declaración de función.
*/

/*
Las funciones nos permiten reutilizar bloques de código. Pueden hacer diferentes cosas según los argumentos que se les pasan y pueden devolver
valores a la ubicación en el código donde se llamó a la función. 

Las funciones también permiten darle a un fragmento de
código un nombre significativo. Por ejemplo, el nombre de la función
pickRandomWord deja en claro que la función tiene algo que ver
con elegir una palabra al azar.
*/


/*
Programación orientada a objetos

Se analizaron los objetos de JavaScript: colecciones
de claves emparejadas con valores.

Veremos maneras de crear y usar objetos a medida que exploramos la programación orientada a objetos.

La programación orientada a objetos
es una forma de diseñar y escribir programas de manera que todas
las partes importantes del programa estén representadas por objetos.

Por ejemplo, al crear un juego de carreras, podría utilizar técnicas de programación orientada a objetos para representar cada automóvil como un objeto y luego crear múltiples objetos de automóvil que
compartan las mismas propiedades y funcionalidades.

Aprendiste que los objetos están compuestos de propiedades,
que son simplemente pares de claves y valores.

Por ejemplo, en el siguiente código, el objeto dog representa un perro con las propiedades name,
legs y isAwesome:
*/
let dog = {
name: "Pancake",
legs: 4,
isAwesome: true
};

/*
Una vez que creamos un objeto, podemos acceder a sus propiedades usando la notación de
punto
*/
dog.name;
"Pancake"

/*
También podemos usar la notación de puntos para agregar propiedades a un objeto JavaScript, de esta manera:
*/
dog.age = 6;

/*
Esto agrega un nuevo par clave-valor (age: 6) al objeto, como puedes ver a continuación:

Podemos llamar al objeto dog
*/
dog;
Object {name: "Pancake", legs: 4, isAwesome: true, age: 6}


/*
Agregar métodos a objetos

Creamos varias propiedades con distintos tipos de valores guardados en ellas: una cadena ("Pancake"), números
(4 y 6) y un valor booleano (true)

Puedes guardar una función como una propiedad dentro de un objeto
Cuando guardas una función como una propiedad en un objeto, esa
propiedad se llama método. 

De hecho, ya hemos utilizado varios
métodos integrados de JavaScript, como el método join en matrices y el
método toUpperCase en cadenas.

Una forma de agregar un método a un objeto es con la notación de puntos. 
Por ejemplo, podríamos agregar un método llamado bark al objeto dog de esta manera:
*/
dog.bark = function () { //1

console.log("Woof woof! My name is " + this.name + "!"); //2
};
dog.bark(); //3
Woof woof! My name is Pancake!

/*
En 1, agregamos una propiedad al objeto perro llamada ladrido y le asignamos
una función.

En 2, dentro de esta nueva función, usamos console.log
para registrar ¡Guau, guau! ¡Mi nombre es Panqueque!. 

Observe que la función usa
this.name, que recupera el valor guardado en la propiedad name del objeto. Veamos más de cerca cómo funciona la palabra clave this.
*/

/*
Uso de this

Puede utilizar la palabra clave this dentro de un método para hacer referencia al objeto
en el que se está llamando actualmente al método.

Por ejemplo, cuando
llama al método bark en el objeto dog, this hace referencia al objeto dog, 
por lo que this.name hace referencia a dog.name.

La palabra clave this hace que los métodos sean
más versátiles, lo que le permite agregar el mismo método
a varios objetos y hacer que acceda a las propiedades de cualquier objeto
en el que se esté llamando actualmente.
*/

/*
Compartir método entre varios objetos

Creemos una nueva función llamada speak que podamos usar como método en varios objetos que representan diferentes animales
Cuando se llama a speak en un objeto, usará el nombre del objeto (this.name)
y el sonido que hace el animal (this.sound) para registrar un mensaje.
*/
let speak = function () {
console.log(this.sound + "! My name is " + this.name + "!");
};

/*
Ahora, vamos a crear otro objeto para poder agregarle la función hablar como
método:
*/
let cat = {
sound: "Miaow",
name: "Mittens",
speak: speak //1
};

/*
nuevo objeto llamado cat, con propiedades sound, name y speak.
Establecemos la propiedad speak en la linea 1 y le asignamos
la función speak que creamos anteriormente. 

Ahora cat.speak es un método
al que podemos llamar ingresando cat.speak()

Como usamos la palabra clave this
en el método, cuando lo llamamos en on cat, accederá a las propiedades 
del objeto cat. Veamos eso ahora:
*/
cat.speak();
Miaow! My name is Mittens!

/*
Cuando llamamos al método cat.speak, recupera dos propiedades del objeto cat:
this.sound (que es "Miaow") y this.name (que es "Mittens").

También podemos usar la misma función de hablar como método en otros
objetos:
*/
let pig = {
sound: "Oink",
name: "Charlie",
speak: speak
};
let horse = {
sound: "Neigh",
name: "Marie",
speak: speak
};
pig.speak();
Oink! My name is Charlie!

horse.speak();
Neigh! My name is Marie!

/*
Nuevamente, cada vez que esto aparece dentro de un método, se refiere al
objeto en el que se llama al método. 

En otras palabras, cuando llamas a
horse.speak(), esto se referirá a horse, y cuando llamas a pig.speak(),
esto se referirá a pig.

Para compartir métodos entre múltiples
objetos, puedes simplemente agregarlos a cada
objeto, como acabamos de hacer con speak

Pero si
tienes muchos métodos u objetos, agregar los
mismos métodos a cada objeto individualmente
puede volverse molesto y también puede hacer que tu código sea más desordenado. 

Solo imagina si
necesitas un zoológico completo con 100 objetos animales y quieres que cada uno comparta un conjunto
de 10 métodos y propiedades.

Los constructores de objetos de JavaScript ofrecen una
mejor manera de compartir métodos y propiedades entre objetos, como veremos a continuación.
*/


/*
Creación de objetos con constructores

Un constructor de JavaScript es una función que crea objetos y
les otorga un conjunto de propiedades y métodos integrados. 

Piense en él como
una máquina especializada para crear objetos, algo así como una fábrica
que puede producir toneladas de copias del mismo elemento.

Una vez que haya configurado un constructor, puede usarlo 
para crear tantos objetos iguales como desee.

Para probarlo, crearemos los inicios de un juego de
carreras, utilizando un constructor de autos para crear una flota de autos con propiedades y métodos básicos similares para la dirección y la aceleración.
*/

/*
Anatomía del constructor

Cada vez que llama a un constructor, crea un objeto y le otorga al nuevo objeto
propiedades integradas. 

Para llamar a una función normal, ingrese
el nombre de la función seguido de un par de paréntesis. 

Para llamar a un constructor, ingrese la palabra clave new (que le indica a JavaScript que desea usar su función como constructor), seguida del nombre del constructor y los paréntesis
*/

let car = new Car(100, 200)

/*
El nuevo objeto se guarda en esta variable.
El nombre del constructor
Argumentos que se pasan al constructor

Comienzan los nombres de los constructores con una letra mayúscula, por lo que es fácil ver a simple vista que son diferentes de otras funciones.
es fácil ver a simple vista que son diferentes de otras funciones.
*/



