# JS

# Visualizar JS (Output)

Puede "mostrar" datos de diferentes maneras:

1. Escribir en un elemento HTML, utilizando innerHTML o innerText.

2. Escribir en la salida HTML utilizando document.write().

3. Escribir en un cuadro de alerta, utilizando window.alert().

4. Escribiendo en la consola del navegador, utilizando console.log().


1. Propiedad innerHTML e innerText: 

innerHTML para cambiar el contenido HTML del elemento HTML:

```
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "<h2>Hello World</h2>";
</script>

```
Seleccionamos el elemento, usamos la propiedad innerHTML de los nodos del DOM. 

Creamos un elemento h2 para escribir.


Propiedad innerText:

```
<p id="demo"></p>

<script>
document.getElementById("demo").innerText = "Hello World";
</script>

```

innerHTML cuando desee cambiar un elemento HTML.

innerText cuando sólo desee cambiar el texto simple.


2. Método document.write() 

Para fines de prueba, es conveniente utilizar document.write():

```
<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
document.write(5 + 6);
</script>

```

Usarlo después de cargar un documento HTML eliminará todo el HTML existente:

```

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<button type="button" onclick="document.write(5 + 6)">Try it</button>

```

El método document.write() sólo debe usarse para pruebas.


3. window.alert()

Puede utilizar un cuadro de alerta para mostrar datos:

```
<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
window.alert(5 + 6);
</script>

```

Puedes omitir la palabra clave 'window'.

#### En JavaScript, el objeto window es el objeto de ámbito global. 

#### Las variables, propiedades y métodos pertenecen al objeto ventana por defecto. 

Esto también significa que especificar la palabra clave ventana es opcional.

```
<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
alert(5 + 6);
</script>

```


4. console.log() 

Para fines de depuración, puede llamar al método console.log() en el navegador para mostrar datos.

```
<script>
console.log(5 + 6);
</script>

```


Print: 

JavaScript no tiene ningún objeto de impresión ni métodos de impresión.

No se puede acceder a los dispositivos de salida desde JavaScript.

La única excepción es que puedes llamar al método window.print() en el navegador para imprimir el contenido de la ventana actual.

```
<button onclick="window.print()">Print this page</button>

```


## Instructions vs Statements 

Las instrucciones se denominan declaraciones. 

Una lista de instrucciones/declaraciones puede formar un programa. 

HTML lleva el JS para que el navegador ejecute los programas JS. 


## Tipos de declaraciones

Las declaraciones están compuestas por: 

Valores, operadores, expresiones, palabras clave y comentarios.

Etc. 


Ej: 

Esta declaración le indica al navegador que escriba "Hola Dolly." dentro de un elemento HTML con id="demo":

```
document.getElementById("demo").innerHTML = "Hello Dolly."; 

```


## Orden de ejecución

Las sentencias se ejecutan, una por una, en el mismo orden en que están escritas.

Semicolons/punto y coma separan las declaraciones


multiple statements:

```
a = 5; b = 6; c = a + b; 

```

No es obligatorio (el navegador las infiere) pero es recomendable.


Espacios en blanco: 

JS los ignora; pero se usan para que el código sea legible para humanos. 

Así como colocar espacio entre los operadores 

```
let person = "Hege";
let person="Hege"; 
let x = y + z;

```


Saltos y longitud de lineas/Length line and breaks. 

Se recomienda evitar líneas de código de más de 80 caracteres.

Si una declaración de JavaScript no cabe en una línea, el mejor lugar para dividirla es después de un operador:

```
document.getElementById("demo").innerHTML =
"Hello Dolly!"; 

```


Bloques de código: 

Las declaraciones se pueden agrupar en bloques de código, dentro de llaves {...}.

Con el fin de que se ejecuten juntas. 

Ej: 

En funciones funciones

```
 function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}

```


Sintaxis: 

Conjunto de reglas mediante las cuales se construyen los programas en JavaScript y en cualquier otro lenguaje. 


Valores: 

1. Fixed values: llamados literales

2. Variable values: llamados variables 


## Fixed/literals rules 

1. Los números se escriben con o sin decimales:

```
10.50

1001

```

2. Las cadenas son texto, escrito entre comillas dobles o simples:

```
"John Doe"

'John Doe' 

```


## Variables 

Se utilizan para almacenar valores de datos.

JavaScript utiliza las palabras clave var, let y const para declarar variables.

Se utiliza un signo igual para asignar valores a las variables.


1. Definición de una variable:

```
let x;

``` 

2. Asignación de una variable: 

```
x = 6; 

```


Operadores: 

Los operadores aritméticos calculan valores

```
 + - * /

(5 + 6) * 10

```

Los operadores de asignación asignan valores a variables

```
let x, y;
x = 5;
y = 6; 

```


## Expresiones

Combinación de valores, variables y operadores, que calcula un valor.

Su cálculo se llama evaluación. 

```
5 * 10 

```

Pueden contener diferentes tipos de datos: 

```
x * 10 

"John" + " " + "Doe" 

```


## Keywords

Definen las acciones del lenguaje

let le dice al navegador que debe crear variables. 

```
let x, y;

```


Comentarios: 

Son declaraciones/instrucciones que no son ejecutados. 

El navegador que ejecuta el código JS, los ignorará. 

```
//

/**/

```


## Identificadores

Nombres para las variables, funciones y palabras claves del lenguaje. 

Debe comenzar con: Una letra(AZ o az), signo $ o guión bajo. 

No se permite números como primer carácter de un identificador, para distinguirlos de los números.

Hay ciertas reglas o estándares para elegir un buen identificador. 


Case Sensitive: 

JS distinge las minús de las mayús, por lo tanto no son lo mismo. 

```
let lastname, lastName;
lastName = "Doe";
lastname = "Peterson"; 

```

LET o Let sería valido, no así let que es algo que usa el navegador. 


Formas de identificadores: 

Para unir los nombre de las variables. 


1. Hyphens: first-name, last-name, master-card, inter-city.

Los guiones no están permitidos en JavaScript. 

Están reservados para restas.

2. Underscore: first_name, last_name, master_card, inter_city.


3. Upper Camel Case (Pascal Case): FirstName, LastName, MasterCard, InterCity.

4. Lower Camel Case: Se tiende a utilizar en JS.

firstName, lastName, masterCard, interCity.


Caracteres: 

JS utiliza el conjunto de caracteres Unicode.

Unicode cubre (casi) todos los caracteres, signos de puntuación y símbolos del mundo.


# Variables

No declaradas: Cuando se les asigna un valor al momento de su creación. 

```
x = 5;
y = 6;
z = x + y; 

```

#### Se considera buena práctica declararlas antes de usarlas: para mantener su estado

las variables const no pueden cambiar de valor, una vez creadas

Las variables let pueden cambiar de valor en todo momento. 

```
const price1 = 5;
const price2 = 6;
let total = price1 + price2;

```


### const vs let 

const para valores que no deben cambiar y objetos (arr, etc) para que no cambien su tipo.

let solo si no se puede utilizar const. 

Declarar siempre las variables. 


Los identificadores deben ser únicos. 

Deben llevar un nombre descriptivo para el objeto que almacena. 

Reglas: 

1. Pueden contener letras, dígitos, guiones bajos y signos de dólar.
2. Deben comenzar con una letra.
3. Pueden comenzar con $ y _ .
4. Distinguen entre mayúsculas y minúsculas (y e Y son variables diferentes).
5. Las palabras reservadas no se pueden usar como nombres


Crear variable/declaración/instrucción:

```
let carName; 

```

Después de la declaración, la variable no tiene valor (técnicamente no está definida).

"undefined"

Para asignar un valor a la variable, utilice el signo igual


Asignación:

```
carName = "Volvo";

```

Uso: 

Ej: HTML + JS

```
<p id="demo"></p>

<script>
let carName = "Volvo";
document.getElementById("demo").innerHTML = carName;
</script> 

```


#### Es una buena práctica de programación declarar todas las variables al comienzo de un script.


Muchas variables en una sola linea/declaración:

Es una buena práctica de programación declarar todas las variables al comienzo de un script.

Comience la declaración con let y separe las variables con una coma:

```
let person = "John Doe", carName = "Volvo", price = 200; 

```


#### Una declaración puede abarcar varias líneas:

```
let person = "John Doe",
carName = "Volvo",
price = 200; 

```


## Value = undefined

Las variables suelen declararse sin valor.

#### Puede ser algo que debe calcularse o algo que se proporcionará posteriormente, como la entrada del usuario.

Una variable declarada sin un valor tendrá el valor undefined.

```
let carName; 
 
```


### Redeclaración: var vs let y const

Con let y const no es posible, con var la redeclaración es posible y además la declaración y asignación previa no pierde valor; hasta que se le de nuevo valor. 

```
var carName = "Volvo";
var carName; 

```

```
let carName = "Volvo";
let carName; 

```


Números y cadenas: 

```
2 + 3 + "5" is: 55

let x = 2 + 3 + "5";

```


Dollar Sign $:

Lo trata como un caracter de identificador válido. 

```
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;

```

A menudo lo utilizan como un alias para la función principal en una biblioteca de JavaScript.

En jQuery, $("p"); significa "seleccionar todos los elementos p".


Underscore (_):

Trata el guión bajo como una letra, los identificadores que contienen _ son nombres de variables válidos:

```
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;

```

Es común usarlo como un alias para las variables "privadas (ocultas)".


## Let 

1. Tiene Block Scope

2. Las variables deben declararse antes de su uso

3. No se pueden redeclarar en el mismo ámbito


Block Scope:

No se puede acceder a las variables declaradas dentro de un bloque { } desde fuera del bloque:

```
{
  let x = 2;
}
// x can NOT be used here

```


Var: 

Tiene Global Scope

NO pueden tener alcance de bloque.

Se puede acceder a las variables declaradas con varinside un bloque { } desde fuera del bloque:

```
{
  var x = 2;
}
// x CAN be used here

```


Reclarar: 

let no se puede redeclarar: 

```
let x = "John Doe";

let x = 0; 

```

var si. 

```
var x = "John Doe";

var x = 0; 

```


### Problemas con var 

Al redeclarar una variable dentro de un bloque también se redeclarará la variable fuera del bloque:

```
var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2

```


let lo soluciona: 

Redeclarar una variable dentro de un bloque no redeclarará la variable fuera del bloque

```
 let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10 

```


### Redeclaración vs Reasignación

Scope; Redeclare; Reassing; Hoisted; Binds this

var: no, yes, yes, yes, yes

let: yes, no, yes, no, no

const yes, no, no, no no


Redeclaración: 

Se permite redeclarar una variable de JavaScript con var en cualquier parte de un programa:

```
var x = 2;
// Now x is 2

var x = 3;
// Now x is 3

```

let: 

Con let, NO se permite redeclarar una variable en el mismo bloque:

```
var x = 2;   // Allowed
let x = 3;   // Not allowed

{
let x = 2;   // Allowed
let x = 3;   // Not allowed
}

{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}

```

```
 let x = 2;   // Allowed

{
let x = 3;   // Allowed
}

{
let x = 4;    // Allowed
} 

```


### Hoisting

Con var se elevan a la parte superior y se pueden inicializar en cualquier momento.

Significado: Puedes utilizar la variable antes de que se declare:

```
carName = "Volvo";

var carName; 

```


Con let también se elevan a la parte superior del bloque, pero no se inicializan.

Significado: Usar una variable let antes de declararla dará como resultado un ReferenceError:

```
carName = "Saab";

let carName = "Volvo"; 

```


### Const

1. No puede ser redeclarado

2. No se puede reasignar

3. Tiene Block Scope


Reasignación: 

```
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error 

```

Asignación: 

Las constantes de JavaScript se les debe asignar un valor cuando se declaran:

```
const PI = 3.14159265359;
//valido 

```

```
const PI;
PI = 3.14159265359;
//invalido

```


### Uso de const

Cuando sabes que el valor no debe cambiarse.

Utilice const cuando declare:

1. Una nueva matriz

2. Un nuevo objeto

3. Una nueva función

4. Una nueva expresión regular


Objects y Arrays:

No define un valor constante. 

Define una referencia constante a un valor.

Por esto NO puedes:
Reasignar un valor constante
Reasignar una matriz constante
Reasignar un objeto constante

Pero PUEDES:
Cambiar los elementos de una matriz constante
Cambiar las propiedades del objeto constante

Ej: 

Cambio de elementos

```
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

```

Pero no se puede reasignar: 

```
const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR 

```

Arrays

Se pueden cambiar los elementos 

```
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

```

No se puede reasignar: 

```
const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR 

```


Objects: 

Se puede cambiar propiedades 

```
 // You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson"; 

```

No se puede reasignar: 

```
 const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR 

```


# Operadores 

Se utilizan para realizar diferentes tipos de cálculos matemáticos y lógicos.

Asignación, adición, multi, compar

```
= assigns values
+ adds values
* multiplies values
> compares values

```

Tipos de operadores: 

Arithmetic, Assignment, Comparison
String, Logical, Bitwise, Ternary, Type


1. Arithmetic:

```
+, -, *, ** (exponen), /
%(resto div), ++(increment), --(decrement)

```

2. Assignment

```
=, +=, -=, *=, /=
%=, **=

```


3. Comparison

```
== (igual)

=== (igual en valor y tipo)

!= (no igual)

!== (no igual: valor y tipo)

>, <, >=, <=, ?(ternario)

```


4. String

Todos los operadores de comparación anteriores también se pueden utilizar en cadenas:

```
let text1 = "A";
let text2 = "B";
let result = text1 < text2; 

```
true

Tenga en cuenta que las cadenas se comparan alfabéticamente:

```
let text1 = "20";
let text2 = "5";
let result = text1 < text2; 

```
true


Concatenación: 

```
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2; 

let text1 = "What a very ";
text1 += "nice day";

```


Strings y Numbers:

Sumar dos números devolverá la suma como un número como 5 + 5 = 10.

Agregar un número y una cadena devolverá la suma como una cadena concatenada como 5 + "5" = "55".

```
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;

```
10
55
Hello5

Si sumas un número y una cadena, ¡el resultado será una cadena!


5. Logical

```
&&, ||, ! (not)

```


6. Type

```
typeof //Devuelve el tipo de una variable

instanceof //Devuelve verdadero si un objeto es una instancia de un tipo de objeto

```


7. Bitwise

Los operadores de bits trabajan con números de 32 bits.

Cualquier operando numérico de la operación se convierte en un número de 32 bits. El resultado se convierte de nuevo en un número de JavaScript.

```
& 5&1(Ej), 0101 & 0001 (es lo mismo que anterior), 0001 (result),  1 (decimal)

5 | 1,  0101 | 0001, 0101,  5

(not) ~ 5,  ~0101, 1010, 10

5 ^ 1, 0101 ^ 0001, 0100, 4

<< 	left shift 	5 << 1 	0101 << 1 	1010 	 10

>> 	right shift 	5 >> 1 	0101 >> 1 	0010 	  2

>>> 	unsigned right shift 	5 >>> 1 	0101 >>> 1 	0010 	  2

```

Los ejemplos anteriores utilizan números sin signo de 4 bits. 

Sin embargo, JavaScript utiliza números con signo de 32 bits.

Debido a esto, en JavaScript, ~ 5 no devolverá 10. 

Devolverá -6.

~0000000000000000000000000000000101 devolverá 1111111111111111111111111111010


Operandos y operador: 

```
10 + 20;

```


### Operador %: 

La división de dos números enteros (+ y -) produce un cociente y un resto.

El resultado de una operación módulo es el resto de una división aritmética.


Operador (**):

(x**) y produces the same result as Math.pow(x,y):


Precedencia: 

Describe el orden en que se realizan las operaciones en una expresión aritmética.

Ej: 

La multiplicación (*) y la división (/) tienen mayor precedencia que la suma (+) y la resta (-).


```
let x = 100 + 50 * 3; 

```

Cuando muchas operaciones tienen la misma precedencia (como suma y resta o multiplicación y división), se calculan de izquierda a derecha:

```
let x = 100 + 50 - 3; 

```

La precedencia se puede cambiar utilizando paréntesis.

```
let x = (100 + 50) * 3; 

```


1. Operator Precedence Values:

Las expresiones entre paréntesis se calculan antes que el resto de la expresión.

Las funciones se ejecutan antes de que el resultado se utilice en el resto de la expresión.

Val, operator, descrip, exmpl

```
18 	( ) 	Expression Grouping 	(100 + 50) * 3
17 	. 	Member Of 	person.name
17 	[] 	Member Of 	person["name"]
17 	?. 	Optional Chaining ES2020 	x ?. y
17 	() 	Function Call 	myFunction()
17 	new 	New with Arguments 	new Date("June 5,2022")
16 	new 	New without Arguments 	new Date

```


2. Increment oper

Los incrementos de sufijo se ejecutan antes que los incrementos de prefijo

```
15 	++ 	Postfix Increment 	i++
15 	-- 	Postfix Decrement 	i--
14 	++ 	Prefix Increment 	++i
14 	-- 	Prefix Decrement 	--i

```


3. Not operators

```
14 	! 	Logical NOT 	!(x==y)
14 	~ 	Bitwise NOT 	~x

``` 

4. Unary Operators 

```
14 	+ 	Unary Plus 	+x
14 	- 	Unary Minus 	-x
14 	typeof 	Data Type 	typeof x
14 	void 	Evaluate Void 	void(0)
14 	delete 	Property Delete 	delete myCar.color

```


5. 

```
13 	** 	Exponentiation ES2016 	10 ** 2
12 	* 	Multiplication 	10 * 5
12 	/ 	Division 	10 / 5
12 	% 	Division Remainder 	10 % 5
11 	+ 	Addition 	10 + 5
11 	- 	Subtraction 	10 - 5
11 	+ 	Concatenation 	"John" + "Doe"

```


6. shift oper

```
10 	<< 	Shift Left 	x << 2
10 	>> 	Shift Right (signed) 	x >> 2
10 	>>> 	Shift Right (unsigned) 	x >>> 2

```


7. Relational

```
9 	in 	Property in Object 	"PI" in Math
9 	instanceof 	Instance of Object 	x instanceof Array

``` 


8. Comparison

```
9 	< 	Less than 	x < y 
9 	<= 	Less than or equal 	x <= y
9 	> 	Greater than 	x > y
9 	>= 	Greater than or equal 	x >= Array
8 	== 	Equal 	x == y
8 	=== 	Strict equal 	x === y
8 	!= 	Unequal 	x != y
8 	!== 	Strict unequal 	x !== y

```


9. Bitwise/bit a bit

```
7 	& 	Bitwise AND 	x & y
6 	^ 	Bitwise XOR 	x ^ y
5 	| 	Bitwise OR 	x | y

```


10. Logical

```
4 	&& 	Logical AND 	x && y
3 	|| 	Logical OR 	x || y
3 	?? 	Nullish Coalescing ES2020 	x ?? y

```


11. Ternary

```
2 	? : 	Condition 	? "yes" : "no"

```


12. 

```
2 	= 	Simple Assignment 	x = y
2 	: 	Colon Assignment (obj)	x: 5
2 	+= 	Addition Assignment 	x += y
2 	-= 	Subtraction Assignment 	x -= y
2 	*= 	Multiplication Assignment 	x *= y
2 	**= 	Exponentiation Assignment 	x **= y
2 	/= 	Division Assignment 	x /= y
2 	%= 	Remainder Assignment 	x %= y
2 	<<= 	Left Shift Assignment 	x <<= y
2 	>>= 	Right Shift Assignment 	x >>= y
2 	>>>= 	Unsigned Right Shift 	x >>>= y
2 	&= 	Bitwise AND Assignment 	x &= y
2 	|= 	Bitwise OR Assignment 	x |= y
2 	^= 	Bitwise XOR Assignment 	x ^= y
2 	&&= 	Logical AND Assignment 	x &&= y
2 	||= 	Logical OR Assignment 	x ||= y
2 	=> 	Arrow 	x => y
2 	yield 	Pause / Resume 	yield x
2 	yield* 	Delegate 	yield* x
2 	... 	Spread 	... x
1 	, 	Comma 	x , y

```


### Shift operators

El operador de asignación de desplazamiento izq y der.

Desplaza una variable a la izq y der

```
let x = -100;
x <<= 5; 

```
Value of x is: -3200

```
let x = -100;
x >>= 5; 

```
Value of x is: -4


#### Unsigned shift (left, right)

```
let x = -100;
x >>>= 5; 

```
Value of x is: 134217724



### Bitwise/bit a bit 

AND bit a bit

```
let x = 10;
x &= 5; 

```
Value of x is: 4


OR bit a bit

```
let x = 10;
x |= 5; 

```
Value of x is: 101


XOR bit a bit

```
let x = 10;
x ^= 5; 

```
Value of x is: 97


### Asignación lógica: &&=, ||=

&&=

Si el primer valor es verdadero, se asigna el segundo valor.

```
let x = 10;
x &&= 5; 

```

Value of x is: 5

&&= operator is an ES2020 feature.


||=

Si el primer valor es falso, se asigna el segundo valor.

```
let x = 10;
x ||= 5; 

```
Value of x is: 5


### Nullish coalescing ??=

El operador de asignación de coalescencia nula se utiliza entre dos valores.

Si el primer valor no está definido o es nulo, se asigna el segundo valor.

```
let x;
x ??= 5; 

```
5

The ??= operator is an ES2020 feature.



# Data Types

8 Datatypes:

1. String

2. Number

3. Bigint

4. Boolean

5. Undefined

6. Null

7. Symbol

8. Object


## Object datatype

El tipo de datos de objeto puede contener tanto objetos integrados como objetos definidos por el usuario:

Los tipos de objetos integrados pueden ser:


1. objects

2. arrays

3. dates

4. maps

5. sets

6. intarrays

7. floatarrays

8. promises

...


Ej: 

```
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25"); 

```

#### Una variable de JavaScript puede contener cualquier tipo de datos.


### Tipo de dato como concepto

Para poder operar con variables, es importante saber algo sobre el tipo.

Sin tipos de datos, una computadora no puede resolver esto de manera segura.

```
let x = 16 + "Volvo";

```

¿Tiene sentido añadir "Volvo" al dieciséis? ¿Producirá un error o un resultado?

JavaScript tratará el ejemplo anterior como:

```
let x = "16" + "Volvo";

```
"16Volvo"

```
let x = "Volvo" + 16; 

```
"Volvo16"


Al agregar un número y una cadena, JavaScript tratará el número como una cadena.


#### JavaScript evalúa las expresiones de izquierda a derecha. Diferentes secuencias pueden producir resultados distintos:

```
let x = 16 + 4 + "Volvo"; 

```
20Volvo 


```
let x = "Volvo" + 16 + 4; 

```
Volvo164 

#### En el primer ejemplo, JavaScript trata 16 y 4 como números, hasta que llega a "Volvo".

#### En el segundo ejemplo, dado que el primer operando es una cadena, todos los operandos se tratan como cadenas.


## Dynamics types

Significa que la misma variable se puede utilizar para contener diferentes tipos de datos:

```
let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String 

```


Strings: 

Una serie de carácteres

```
 // Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"'; 

```


Numbers: 

Todos los números de JavaScript se almacenan como números decimales (punto flotante).

Los números se pueden escribir con o sin decimales:

```
// With decimals:
let x1 = 34.00;

// Without decimals:
let x2 = 34; 

```


### Exponential Notation

Los números extra grandes o extra pequeños se pueden escribir con notación científica (exponencial):

```
let y = 123e5;    // 12300000
let z = 123e-5;   // 0.00123

```


La mayoría de los lenguajes de programación tienen muchos tipos de números:

Números enteros (enteros):
byte (8 bits), short (16 bits), int (32 bits), long (64 bits)

Números reales (punto flotante):
float (32 bits), doble (64 bits).

#### Los números de Javascript siempre son de un tipo: doble (64 bits floating point).


### BigInt (ES2020)

#### Todos los números de JavaScript se almacenan en un formato de punto flotante de 64 bits.

Es un tipo de dato que se puede utilizar para almacenar valores enteros que son demasiado grandes para ser representados por un número JavaScript normal.

```
let x = BigInt("123456789012345678901234567890"); 

```
123456789012345678901234567890

No puede tener decimales

Se pueden realizar operaciones matemáticas entre un tipo BigInt y un tipo Number.


Booleanos: 

Dos valores: true o false

```
let x = 5;
let y = 5;
let z = 6;
(x == y)       // Returns true
(x == z)       // Returns false 

```

Se utilizan a menudo en condicionales. 


Arrays: 

Se definen con corchetes, sus elementos están separados por comas. 

```
const cars = ["Saab", "Volvo", "BMW"]; 

```

Los indices se basan en 0, que apunta al primer elemento. 


Objects:

Se definen entre llaves. 

Las propiedades se definen con un par nombre:valor

Separadas por comas. 

```
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

```

El objeto (persona) en el ejemplo anterior tiene 4 propiedades: firstName, lastName, age y eyeColor.


typeof:

Devolverá el tipo de una variable o expresión de JavaScript

```
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string" 

typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number" 

```


Undefined: 

Una variable sin valor tiene un valor 'undefined'.

Su tipo de dato también es 'undefined'.

```
let car;    // Value is undefined, type is undefined 

```

Cualquier variable se puede vaciar estableciendo el valor como indefinido. 

El tipo también será indefinido.

```
car = undefined;    // Value is undefined, type is undefined

```


### Empty Values

Un valor vacío no tiene nada que ver con indefinido.

Una cadena vacía tiene un valor legal y un tipo.

```
let car = "";    // The value is "", the typeof is "string" 

```


# Funciones 

Bloque de código diseñado para realizar una tarea particular.

Se ejecuta cuando "algo" la invoca (la llama).

```
// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  return p1 * p2;
}

let result = myFunction(4, 3);

//result store 12

```

Los parámetros de la función se enumeran dentro de los paréntesis () en la definición de la función.

Los argumentos de una función son los valores que recibe la función cuando se invoca.

Dentro de la función, los argumentos (los parámetros) se comportan como variables locales.


El código dentro de la función se ejecutará cuando "algo" invoque (llame) la función:

1. Cuando ocurre un evento (cuando un usuario hace clic en un botón)

2. Cuando se invoca (llama) desde el código JavaScript

3. Automáticamente (autoinvocado)


## Return 

Cuando JavaScript llega a una declaración de retorno, la función dejará de ejecutarse.

Si la función se invocó desde una declaración, JavaScript "regresará" para ejecutar el código después de la declaración que la invocó.

Las funciones suelen calcular un valor de retorno. 

Este valor se devuelve al emisor/caller:

Ej: 

Calcular el producto de dos números y devolver el resultado.

```
// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}

```


## Ventajas: 

1. Con funciones puedes reutilizar código

2. Puedes escribir código que pueda usarse muchas veces.

3. Puedes utilizar el mismo código con diferentes argumentos para producir resultados diferentes.


Operador (): 

Invoca (llama) la función:

Ej: 

Convertir Fahrenheit a Celsius:

```
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77); 

```

Acceder a una función con parámetros incorrectos puede devolver una respuesta incorrecta:

```
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius(); 

```

Acceder a una función sin () devuelve la función y no el resultado de la función:

```
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius();

```

#### toCelsius se refiere al objeto de función y toCelsius() se refiere al resultado de la función.


Funciones utilizadas como valores de variables:

Las funciones se pueden utilizar de la misma manera que las variables, en todo tipo de fórmulas, asignaciones y cálculos.


En lugar de utilizar una variable para almacenar el valor de retorno de una función:

```
let x = toCelsius(77);

let text = "The temperature is " + x + " Celsius"; 

```


#### Puedes utilizar la función directamente, como valor variable:

```
let text = "The temperature is " + toCelsius(77) + " Celsius"; 

```


### Variables locales

Las variables declaradas dentro de una función de JavaScript se vuelven LOCALES para la función.

Sólo se puede acceder a las variables locales desde dentro de la función.

```
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName 

```

Dado que las variables locales solo se reconocen dentro de sus funciones, las variables con el mismo nombre se pueden usar en diferentes funciones.

#### Las variables locales se crean cuando se inicia una función y se eliminan cuando la función se completa.



# Objects


## Propiedades 

## Métodos

## Display

## Constructores


# Eventos


# Strings

## Métodos

## Busqueda

## Plantillas


# Numbers

## BigInt

## Métodos 

## Propiedades 



# Arrays

## Search

## Sort

## Iteración

## Const


# Dates

## Formats

## Métodos Get 

## Métodos Set 


# Math


# Random


# Booleanos 


# Comparaciones


# If else

# Switch

# Loops

## Loop for

## Loop for in 

## Loop for of

## Loop while


# Break


# Iterables


# Sets

## Métodos 


# Maps

## Métodos

# typeof 

# toString

# Conversión de tipos 

# Destructuring

# Bitwise

# RegExp

# Precedence 

# Errors

# Scope

# Hoisting

# Strict Mode

# This

# Función arrow 

# Clases

# Modulos

# JSON

# Debugg

# Style Guide

# Prácticas

# Mistakes

# Performance

# Palabras reservadas 


# Async


# HTML DOM


# Browser BOM


# Web APIs



# Kata 1

Are You Playing Banjo

Crea una función que responda a la pregunta "¿Estás tocando el banjo?".
Si tu nombre comienza con la letra "R" o "r" minúscula, ¡estás tocando el banjo!

La función toma un nombre como único argumento y devuelve una de las siguientes cadenas:

nombre + "toca el banjo" 
nombre + "no toca el banjo"

Los nombres dados son siempre cadenas válidas


Planteo: 

arrow, ternary, str methods

inp: 
name(str)

cálc: 
startLett = name0
cond = if startLett === "r" || "R" -> "...""

altern: ternary
playBonjo = name0 === "r" || "R" ? "..." : "..."

altern
cond = name0 === "r" || "R" o usar comparador (?
playBonjo = cond
rtn playBonjo

out: 
playBonjo t o f 


## Arrow: 

```
let myFunction = (a, b) => a * b; 
hello = () => "Hello World!"; 
hello = (val) => "Hello " + val; 

```

## Ternary: 

```
condition ? <expression if true> : <expression if false>

if (authenticated) {
  renderApp();
} else {
  renderLogin();
}

// if authent is true, return renderApp; else, login

authenticated ? renderApp() : renderLogin();

```


## Formatear string: 

1. Uso de comillas invertidas (literales de plantilla)

Uno de los métodos más sencillos para crear una cadena en JavaScript es usar literales de plantilla (también conocido como interpolación de cadenas). 
En lugar de encerrar la cadena entre comillas simples (') o dobles ("), se utilizan comillas invertidas (`).

Las variables se pueden incrustar directamente en la cadena envolviéndolas entre ${}.
Durante la ejecución, JavaScript evalúa e inserta automáticamente el valor de la variable, lo que hace que el código sea más legible y dinámico.

```
const name = "Amit";
const age = 99;
const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);

```

${expression}: interpola variables o expresiones directamente en la cadena.
Las comillas invertidas permiten cadenas de varias líneas y una mejor legibilidad


2. Interpolación de cadenas (con expresiones)

Los literales de plantilla en JavaScript permiten incrustar no solo variables simples, sino también expresiones dentro de los marcadores ${}. 
Esto hace que el formato de cadenas sea más flexible y eficaz, ya que permite incluir directamente cálculos o llamadas a funciones dentro de la cadena.

```
const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result);

```


## Breack line of long code 

Con \


## Refactorización

### Comparación debe ser explicita 

siempre retorna true porque "R" (una cadena no vacía) es un valor truthy en JavaScript. Entonces el operador || se evalúa así:

```
strName[0] === "r" || "R"

Si strName[0] === "r" es true, se usa ese true.

Si strName[0] === "r" es false, entonces se evalúa "R", que también es true.

```
Por eso, la condición siempre es verdadera, y el primer caso del ternario siempre se ejecuta

Corrección: 

```
const playBanjo = strName =>
  strName[0] === "r" || strName[0] === "R"
    ? strName + " plays banjo"
    : strName + " does not play banjo";

```


Alternativa (más limpia con .toLowerCase()):

```
const playBanjo = strName =>
  strName[0].toLowerCase() === "r"
    ? strName + " plays banjo"
    : strName + " does not play banjo";

```


Expresividad: 

Usar vars para las cadenas de respuesta

```
playBonjo = strName => 
strName[0] === "r" || strName[0] === "R" 
? strName + " plays banjo" 
: strName + " does not play banjo"; 

console.log(playBonjo("Ruben")); 

```

Si elegimos expresividad: usar vars para las cadenas de respuesta



# kata 2 

Opposites Attract

Timmy y Sarah creen estar enamorados, pero en la zona donde viven, 
solo lo sabrán cuando cada uno recoja una flor. 
Si una flor tiene un número par de pétalos y 
la otra un número impar, significa que están enamorados.

Escribe una función que tome el número de pétalos de cada flor 
y devuelva verdadero si están enamorados y falso si no lo están.


Planteo 

arrow, numPetals, ternary numPetals %2 == 0 ? true : false



# Kata 3

Dado un número aleatorio no negativo, debes devolver 
los dígitos de este número dentro de una matriz 
en orden inverso.

Ejemplo (Entrada => Salida):

```
35231 => [1,3,2,5,3]
0 => [0]

```


Plateo: 

numb > 0 

numb to arr: numb to str -> str to arr 

arr inver

```
const toArr = numb => numb.toString().split("").map(e => Number(e)).reverse();

```


## forEach vs map

forEach() devuelve undefined, mientras que el método map() devuelve un nuevo array con los resultados de aplicar la función proporcionada a cada elemento.


## Sintaxis Arrow 

```
const nombreFuncion = (param1, param2, ...) => {
  // cuerpo de la función
  return resultado;
};

```

1. Sin param: 

```
const saludar = () => {
  console.log("¡Hola!");
};

saludar(); // ¡Hola!

```

2. Un solo parámetro (sin paréntesis):

un parámetro y una sola expresión

Puedes omitir paréntesis y return.

```
const cuadrado = x => x * x;

console.log(cuadrado(4)); // 16

```

3. Múltiples parámetros:

```
const sumar = (a, b) => a + b;

console.log(sumar(2, 3)); // 5

```

4. Con varias líneas de código (usa {} y return):

```
const resta = (a, b) => {
  console.log("Restando...");
  return a - b;
};

console.log(resta(10, 3)); // 7

```

5. En métodos como .map(), .filter():

```
const nums = [1, 2, 3, 4];
const dobles = nums.map(n => n * 2);

console.log(dobles); // [2, 4, 6, 8]

```

1. No tienen su propio this, lo cual es útil en métodos de clase o callbacks.

2. No pueden ser usadas como constructores (no se puede usar new con ellas).

3. No tienen arguments, super, ni new.target.



# Kata 4

Suma

Escriba un programa que calcule la suma de todos los números 
del 1 al num (ambos inclusive). El número siempre será un
entero positivo mayor que 0. Su función solo necesita 
devolver el resultado. Lo que se muestra entre paréntesis
en el ejemplo a continuación es cómo obtenerlo y no forma
parte del mismo; consulte las pruebas de ejemplo.

Por ejemplo (Entrada -> Salida):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)


Planteo:

recursiv:

base:
condición que detiene la recursión

func sum(n)
if n === 1
rtn 1

recur:
llamada más simple, después del caso base. 

func sum(n)
if n === 1
rtn 1
else:
rtn n+sum(n-1)


div y con:
subproblemas más pequeños, recurs y comb result


## Recursividad

```
summ = n =>
return n === 1 
? 1
: n + summ(n-1);

console.log(summ(2)); 
console.log(summ(8));

```

Caso Base: 

```
n === 1 ? 1

```
Detiene la recursión

Como los test son siempre positivos, no hay que validar más


Recursividad: 

```
n + summ(n - 1)

```

#### Suma el número actual n con el resultado de summ(n-1)

#### Definición matemática directa de la suma de los primeros n enteros positivos.


### Cálculos

```
summ(4) 
→ 4 + summ(3)
→ 4 + 3 + summ(2)
→ 4 + 3 + 2 + summ(1)
→ 4 + 3 + 2 + 1 = 10

```


### Validación para numeros negativos

```
const summ = n => {
  if (n < 1) return 0; // o throw new Error("El número debe ser positivo")
  return n === 1 ? 1 : n + summ(n - 1);
};

```


### Alternativa no recursiva, más eficiente

#### Si el número puede ser muy grande, la recursión podría agotar la pila. Puedes usar la fórmula matemática:

```
const summ = n => (n * (n + 1)) / 2;

```

#### Tiene complejidad O(1) en lugar de O(n) y evita problemas de stack overflow para entradas grandes.

Es mejor evitar recursión profunda en JavaScript, ya que puede lanzar un error de “Maximum call stack size exceeded”.


### Fórmula: 

Expresión: (n * (n + 1)) / 2

proviene de la fórmula de la suma de los primeros n números naturales:

```
1 + 2 + 3 + ... + n = (n × (n + 1)) / 2

```

1. n+1
2. n*(r de n+1)
3. /2


#### Carl Gauss: 

notó que si sumas el primer y último número, el segundo y el penúltimo, y así sucesivamente, todos los pares suman lo mismo.

```
1 + 100 = 101  
2 + 99 = 101  
3 + 98 = 101  

```

#### Hay n / 2 pares, y cada uno suma n + 1.

```
(n / 2) * (n + 1) = (n * (n + 1)) / 2

```


### Complejidad O(1) vs O(n)

1. Complejidad temporal: O(1)

Solo realiza una multiplicación, una suma y una división.

No importa cuán grande sea n, siempre toma el mismo tiempo


2. Complejidad espacial: O(1)

#### No usa memoria extra ni pila de llamadas (como la versión recursiva). 


#### Test 

```
summ(4)
// (4 * (4 + 1)) / 2 = (4 * 5) / 2 = 20 / 2 = 10

```


## Recursivad Rangos

Función recursiva que sume todos los números desde 1 hasta n, incluso si n es negativo

Ej: 

summ(3) → 1 + 2 + 3 = 6

summ(-3) → 1 + 0 + (-1) + (-2) + (-3) = -5


Lógica: 

1. Si n > 1, seguimos restando 1 hasta llegar a 1.

2. Si n < 1, seguimos sumando 1 hasta llegar a 1.

3. Caso base: cuando n === 1, retornamos 1.


Prev: 

```
const summ = n => {
  if (n === 1) return 1;
  return n > 1 
    ? n + summ(n - 1)
    : n + summ(n + 1);
};

```

Test: 

```
summ(-3)
// -3 + summ(-2)
// -3 + (-2 + summ(-1))
// -3 + (-2 + (-1 + summ(0)))
// Pero no tenemos caso base para 0 aún

```

Atrapada si n === 0. 

Debemos agregar un caso base adicional.


Final: 

```
const summ = n => {
  if (n === 1) return 1;
  if (n === 0) return 0;
  return n > 1 
    ? n + summ(n - 1)
    : n + summ(n + 1);
};

```

Test: 

```
summ(-3)
// -3 + summ(-2)
// -3 + (-2 + summ(-1))
// -3 + (-2 + (-1 + summ(0)))
// summ(0) = 0 → total: -3 + -2 + -1 + 0 = -6

```

Rs: 

Casos base:	
n === 1 y n === 0

Ramas recursivas:	
n + summ(n - 1) si n > 1
n + summ(n + 1) si n < 1

Seguridad contra bucles:
Agregado caso base n === 0

Eficiencia:	
No ideal (O(n), riesgo de stack overflow)


Eficiente: Sin recursividad

```
const summ = n => {
  let total = 0;
  if (n >= 1) {
    for (let i = 1; i <= n; i++) total += i;
  } else {
    for (let i = 1; i >= n; i--) total += i;
  }
  return total;
};

```


## Fórmula Rangos 

Suma de un rango

#### Para sumar todos los enteros desde a hasta b (inclusive), puedes usar:

```
sum = ((b - a + 1) * (a + b)) / 2

```

Extensión directa de la fórmula de Gauss:

Suma de n términos consecutivos =
n * (primer + último) / 2

1. Primer número = a

2. Último número = b

3. Total de términos = b - a + 1


summ(1, 5)

```
(5 - 1 + 1) * (1 + 5) / 2
= 5 * 6 / 2 = 15

```

summ(-3, 1)

```
(1 - (-3) + 1) * (-3 + 1) / 2
= (5) * (-2) / 2 = -5

```

-3 + -2 + -1 + 0 + 1 = -5


JS: 

```
const sumRange = (a, b) => ((b - a + 1) * (a + b)) / 2;

```

Acepta a menor o mayor que b.


Para un solo número: 

```
const summ = n => n >= 1
  ? (n * (n + 1)) / 2
  : ((1 - n + 1) * (n + 1)) / 2;

```

suma desde n hasta 1, por ejemplo:
summ(-3) → -3 + -2 + -1 + 0 + 1 = -5



# Evaluar complejidad

1. Para medir tiempo real: usa Benchmark.js, console.time, jsbench.

2. Para entender la complejidad: analiza loops, recursión y operaciones clave.

3. Para detectar cuellos de botella: usa herramientas de profiling


## Clasificación de la complejidad de un algoritmo

#### Se clasifica para describir cómo crecen sus requerimientos de tiempo (tiempo de ejecución) y espacio (memoria) en relación con el tamaño de la entrada n.

Se hace con la notación Big O (O(...)), que describe el peor caso (aunque también existen Ω para el mejor caso y Θ para el caso promedio).


Por orden de eficiencia: 

1. O(1): Constante; Acceso directo a un elemento, fórmula cerrada

2. O(log n): Logarítmica; Búsqueda binaria

3. O(n): Lineal; Recorrer un array 

4. O(n log n): Linealítmica; Merge Sort, Quick Sort (promedio)

5. O(n²): Cuadrática; Doble bucle anidado

6. O(n³): Cúbica; Triple bucle (matrices, por ejemplo)

7. O(2ⁿ): Exponencial; Algoritmos de backtracking, fuerza bruta

8. O(n!): Factorial; Permutaciones completas (ej: traveling salesman)


Medición Big O: 

#### Tiempo (Time Complexity): Cuántas operaciones hace el algoritmo según el tamaño de entrada n

#### Espacio (Space Complexity): Cuánta memoria adicional necesita el algoritmo para ejecutarse.

Ej: 

O(1) – Constante:

```
function getFirst(arr) {
  return arr[0];
}

``` 

O(n) – Lineal:

```
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

```

O(n²) – Cuadrática:

```
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // algo
  }
}

```

O(log n) – Logarítmica

```
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

```


Rs: 

Busca evitar O(n²) o peor en datos grandes.

Siempre intenta usar la estructura de datos más eficiente (ej. Set para búsquedas O(1)).

Usa recursión con cuidado: puede aumentar el espacio a O(n) si no hay tail-call optimization


## Evaluar algoritmo propio

Implica: 

1. Análisis teórico (ver cómo crece el algoritmo con n)

2. Evaluación empírica (medir tiempo/memoria al ejecutarlo)


#### 1. Análisis teórico: Revisar la estructura del algoritmo. 

##### Estructuras, impacto y eficiencia

1. Bucles simples (for, while): O(n) (eficiencia 1)

2. Bucles anidados (for dentro de for): O(n²), O(n³) (efic 5 y 6)

3. Llamadas recursivas: Depende del árbol de recursión (O(n)) (efic 3)

4. Operaciones por elemento (reduce, map, etc.): O(n) (efic 3)

5. Operaciones por elemento (reduce, map, etc.): O(n) (ef 3)

6. Búsquedas/binary search (O(log n))

```
function sumUpTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
}
// => O(n) porque el bucle recorre desde 1 hasta n

```


#### 2. Evaluación empírica (experimental): 

##### Medir cuánto tiempo toma el algoritmo con diferentes tamaños de entrada.

Ej: JS console.time

```
console.time('sumTest');
sumUpTo(1000000);
console.timeEnd('sumTest');

```

###### Hazlo con distintos tamaños (n = 10, 100, 1000, 10000, ...) y observa cómo crece el tiempo


#### Graficar tiempos: 

Por ej, recolectar los tiempos en un array y graficarlos en un entorno como Jupyter Notebook o usar herramientas como:

JSBench (https://jsbench.me)

Performance API en navegador (performance.now())


#### Comparar comportamiento

Entrada n, O(1): e1,  O(log n): e2,  O(n): e3,  O(n log n): e5,  O(n²): e6

1. 10  rápido	rápido	rápido	rápido	rápido

2. 1,000 igual	rápido	lento	más lento	muy lento

3. 100,000 igual	rápido	notable	pesado	inusable


#### Evaluar 

1. Tiempo de ejecución: ¿crece lineal, cuadrática, logarítmicamente?

2. Uso de memoria: ¿almacenas estructuras proporcionales a n?

3. Recursión: ¿cuántos niveles profundiza? ¿Se repiten subproblemas? (pista de si necesitas memoización)


Ej: Algoritmo con recursión 

```
const factorial = n => n === 1 ? 1 : n * factorial(n - 1);

```

Cada llamada reduce n en 1 ⇒ profundidad de recursión = n

⇒ Complejidad temporal: O(n) (e3)

⇒ Complejidad espacial (por pila de llamadas): O(n) (e3)


## Qué instrucciones de código castigan la complejidad

Algunas instrucciones o patrones de código pueden castigar fuertemente la complejidad de un algoritmo, especialmente en problemas con grandes entradas o restricciones de tiempo.

#### Instrucciones más costosas y por qué afectan negativamente la eficiencia:

1. Bucles anidados innecesarios → O(n²), O(n³)

```
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // Costoso: se ejecuta n * n veces
  }
}

```

Esto escala muy mal. 

Evítalo si puedes usar estructuras como Map, Set, o recorrer solo una vez.


2. Operaciones dentro de bucles que no son O(1)

```
for (let i = 0; i < n; i++) {
  arr.includes(x); // O(n) dentro de O(n) → O(n²)
}

```

Puede disparar el tiempo al cuadrado.

Solución: convierte arr en un Set para búsquedas O(1).


3. Recursión sin control ni memoización

```
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2); // O(2ⁿ)
}

``` 

Esto explota rápidamente. 

fib(40) puede tardar varios segundos.

Solución: usar memoización o una versión iterativa.


4. Repetición innecesaria de operaciones costosas

```
for (let i = 0; i < n; i++) {
  expensiveFunction(i); // donde la función es O(n)
}

```

Si expensiveFunction() tiene complejidad lineal o peor, estás repitiendo algo costoso muchas veces.

Precalcula lo que se repite si es posible.


5. Inserciones o borrados en el medio de arrays grandes

```
arr.splice(i, 0, val); // inserción al medio ⇒ O(n)
arr.shift();           // remover primer elemento ⇒ O(n)

```

Los elementos se reordenan en memoria.

Usa Queue basada en listas enlazadas o Deque (doble cola) para eficiencia.


6. Repetidas concatenaciones de strings grandes

```
let s = "";
for (let i = 0; i < n; i++) {
  s += "x"; // Cada vez crea una copia nueva del string ⇒ O(n²)
}

```

Usa un array temporal y luego .join('') al final.


7. Falta de uso de estructuras eficientes

Usar Array.includes(x) en lugar de Set.has(x)

Usar Object para conteos en lugar de Map

No usar heap/priority queue cuando se necesita ordenar frecuentemente


Rs: 

1. Evita bucles dentro de bucles con operaciones lineales o peores

2. No repitas cálculos que puedas guardar: Usa variables auxiliares

3. Aprovecha estructuras de datos eficientes: Set, Map, Heap, Deque, etc.

4. Cuidado con operaciones en strings grandes: Son inmutables, concatenar cuesta 

5. Analiza la recursión: ¿Está creciendo de forma exponencial? Usa memoización si es así


## Herramientas para evaluar la complejidad de un algoritmo. 

1. Benchmark.js

Una de las bibliotecas más populares para medir rendimiento con precisión.

https://github.com/bestiejs/benchmark.js

```
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

suite
  .add('Algoritmo 1', () => {
    // tu algoritmo aquí
  })
  .add('Algoritmo 2', () => {
    // otra versión
  })
  .on('cycle', e => console.log(String(e.target)))
  .on('complete', function () {
    console.log('Más rápido: ' + this.filter('fastest').map('name'));
  })
  .run();

```


2. jsPerf / JSBench

Sitios web para comparar funciones directamente en el navegador.

Medición directa del tiempo de ejecución con datos visuales.

https://jsbench.me

https://jsperf.com (menos activo)


3. Console Time

Herramienta simple integrada en el navegador o Node.js.

```
console.time("test");
miFuncion();
console.timeEnd("test");

```

Ideal para pruebas rápidas.


Visualización y análisis algorítmico: 

1. Big-O Calculator

Herramienta online que analiza código en varios lenguajes y estima la complejidad teórica.

https://www.bigocheatsheet.com (referencia)
https://www.cs.usfca.edu/~galles/visualization/Algorithms.html (animaciones)


Bibliotecas para estructuras eficientes:

Ayudan a evitar penalizaciones algorítmicas:

collections: Set, Map, Heap, Deque eficientes.

lodash: Métodos optimizados para trabajar con colecciones.

tinyqueue: Priority queue / heap en JS.


Lenguajes: 

Python	timeit, cProfile	Medición precisa, profiling

C++ / C	Valgrind, gprof	Memoria y tiempo de ejecución

Java	VisualVM	Profiling visual

Multilenguaje	Codility, LeetCode, HackerRank	Simulan la ejecución real con validación de tiempo y memoria


Medir tiempo/complejidad: 

1. Para medir tiempo real: usa Benchmark.js, console.time, jsbench.

2. Para entender la complejidad: analiza loops, recursión y operaciones clave.

3. Para detectar cuellos de botella: usa herramientas de profiling.


## Prácticas para reducir la complejidad

1. Evita bucles anidados si es posible

Los bucles anidados son la causa más común de complejidad O(n²) o peor.

```
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i] === arr[j]) { ... }
  }
}

```


Usa un Set:

```
const seen = new Set();
for (const val of arr) {
  if (seen.has(val)) { ... }
  seen.add(val);
}

```

Eficiencia: De O(n²) a O(n)


2. Evita operaciones costosas dentro de bucles

Como .includes(), .indexOf(), .splice() en arrays grandes.

```
for (let i = 0; i < n; i++) {
  if (arr.includes(x)) { ... } // O(n) dentro de O(n)
}

```

Mejor: 

```
const s = new Set(arr);
if (s.has(x)) { ... } // O(1)

```


3. Usa estructuras de datos adecuadas

Set para búsquedas O(1)

Map para conteo o acceso por clave

Deque (doble cola) si necesitas insertar/quitar por ambos extremos

Heap (priority queue) para obtener mínimos/máximos eficientes


4. Precalcula (Memoiza) si repites subcálculos

Especialmente en recursión o búsquedas

Sin memoización (Fibonacci):

```
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

```

Con memoización:

```
const memo = {};
function fib(n) {
  if (n in memo) return memo[n];
  return memo[n] = n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

```


5. Aplica fórmulas matemáticas si existen

Evitan bucles completamente (O(1)).

Ej: suma de 1 a n

```
const sum = n => (n * (n + 1)) / 2;

```


6. Divide y vencerás (Divide & Conquer)

Cuando puedes dividir el problema en partes más pequeñas (ej. quicksort, mergesort), pasas de O(n²) a O(n log n).


7. Evita crear estructuras nuevas innecesarias

No copies arrays innecesariamente o uses .filter, .map en bucles si no es necesario.


8. Usa algoritmos estándar eficientes

Búsqueda binaria → O(log n) en listas ordenadas

Sliding window → O(n) en muchos problemas de subarreglos

Two pointers → para comparar o recorrer desde ambos extremos


9. No siempre es necesario ordenar

Ordenar cuesta O(n log n).

Evítalo si solo necesitas encontrar el máximo, mínimo o un elemento específico


10. Prueba con casos grandes

Haz pruebas con n = 10⁵, n = 10⁶ para detectar cuellos de botella


## Patrón para escribir algoritmos

¿Hay bucles anidados? Intenta eliminarlos.

¿Qué operaciones se repiten? Memorízalas.

¿La estructura de datos ayuda o castiga?

¿Hay alguna propiedad matemática que puedas usar?

¿Puedes resolver el problema parcialmente y combinar resultados? (divide & vencerás)


## Ejercicio y análisis de algoritmo 

Problema: 

Dado un array de enteros, devolver true si hay dos números que suman 10.


### Planteo

in arr -> t if sum(e(sub1) y e(sub2)) === 10 

mat: 
mult y div de 10;
tomar mul1/2 or div1/2
sum mul1/2 or div1/2

methds: 
Array flat() -> submatriz de mult, div...
map
filter (new arr, elem testing)
reduce (func, elem, one value)
some (true if elems pass test)
every (e pass test)

```
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value + value === 10 ? true : false;
} 

```

### Corrección del algoritmo 

Errores: 

some() para verificar si un solo valor sumado consigo mismo 
(value + value) da 10.

si hay un número 5 en el array (porque 5 + 5 === 10).

No estás comparando pares distintos de elementos.

No usas índices distintos ni combinas elementos entre sí.

Sin const o let las func flechas son globales. 


Test 

```
console.log(eSum10([5, 5, 1]));    // true (5+5)
console.log(eSum10([4, 6, 3, 7])); // false (debería ser true: 4+6)

```

No detecta 4+6 porque no compara entre elementos diferentes.

Lógica limitada: Usa bucles o Set para combinaciones



Alternativas: 

1. Bruta: doble for 

```
const eSum10 = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 10) return true;
    }
  }
  return false;
};

```

i es el elem 1 y j es el 2.

Siempre tomará el siguiente de i. 

En ese momento suma y compara los elementos de esas posiciones. 


```
const eSum10 = arr =>
  arr.some((val, i) =>
    arr.slice(i + 1).find(other => val + other === 10)
  );

```

Tiempo: O(n²) (comparaciones entre pares).


2. Con Set: 

```
const eSum10 = arr => {
  const seen = new Set();
  for (const num of arr) {
    if (seen.has(10 - num)) return true;
    seen.add(num);
  }
  return false;
};

```

Crea un conjunto de valores únicos. 

Recorre el arr de entra a la func. 

Cada elem se guarda en num. 

Para cada elem va a consultar si el set creado tiene como valor el resultado de (10 - num) para retornar verdadero. 

Agrega num. 

Cuando no pase todo esto, retornará falso. 

Busca si existe el complemento (10 - num) antes de agregar el actual.


Eficiencia: 

Tiempo: O(n). e3

Espacio: O(n). e3



### Paso a paso 

1. Set vacío:

```
const seen = new Set();

```

Para guardar todos los números que ya hemos visto mientras recorremos el array

Set permite búsquedas rápidas en O(1) tiempo promedio.


2. Recorrer arr:

```
for (const num of arr) {
  ...
}

```

Iteramos cada número num del array uno por uno.


3. Complemento de num:

```
if (seen.has(10 - num)) return true;

```

Para que num + otro = 10, el otro número debe ser 10 - num.

Entonces, verificamos si ya hemos visto ese complemento en la iteración anterior.

(guardamos p1 y después p2)


Si num es 7, entonces 10 - 7 = 3.

Si ya vimos un 3 antes (está en seen), entonces 3 + 7 = 10, ¡y listo!


Si sí está, retornamos true de inmediato porque ya encontramos un par válido.


4. Si no lo encontramos, lo guardamos:

```
seen.add(num);

```

Guardamos el num actual en el Set para futuras comparaciones.


5. Si terminamos el bucle sin encontrar nada:

```
return false;

```


### Test paso a paso 

```
arr = [2, 4, 6, 8]

```

| Paso | num | Complemento (10 - num) | `seen.has(...)` | Resultado       |
| ---- | --- | ---------------------- | --------------- | --------------- |
| 1    | 2   | 8                      | ❌               | `seen → {2}`    |
| 2    | 4   | 6                      | ❌               | `seen → {2, 4}` |
| 3    | 6   | 4                      | ✅               | return `true` ✅ |

Encontró que 6 + 4 = 10.


Eficiencia: 

##### Tiempo: O(n) → se recorre el array una vez, y Set.has() es constante.

##### Espacio: O(n) → en el peor caso, se almacenan todos los elementos.



3. .some() + .find():

```
const eSum10 = arr =>
  arr.some((val, i) =>
    arr.slice(i + 1).find(other => val + other === 10)
  );

```

.some((val, i) => ...): recorre cada elemento val con su índice i.

.find(...): busca si hay algún other que sumado con val dé 10.

Si lo encuentra, .some() devuelve true


Test: 

```
console.log(eSum10([1, 2, 3, 7]));      // true  (3 + 7)
console.log(eSum10([4, 5, 6]));         // false
console.log(eSum10([2, 8, 10, 0]));     // true  (2 + 8)
console.log(eSum10([5, 5]));            // true  (5 + 5)
console.log(eSum10([10]));              // false (solo un número)

```


Eficiencia: 

Tiempo: O(n²) en el peor caso (anidación implícita de .some() y .find()).

Espacio: O(1) si no contamos la sublistas temporales (que no son profundas).


4. .some() + .includes()

```
const eSum10 = arr =>
  arr.some((val, i) =>
    arr.slice(i + 1).includes(10 - val)
  );

```

usamos .includes() para buscar el complemento.



# Algoritmos optimizados

## 1. String

```
let s = "";
for (let i = 0; i < n; i++) {
  s += "x"; // Cada vez crea una copia nueva del string ⇒ O(n²)
}

```

##### Tiene una complejidad de tiempo O(n²) porque las cadenas en JavaScript son inmutables

##### Cada vez que haces s += "x", se crea un nuevo string copiando el anterior más el nuevo carácter.


Optimización, (O(n)) usando array y .join(): 

```
let s = new Array(n).fill("x").join("");

```

1. Array(n) crea un array con n posiciones vacías.

2. .fill("x") las llena con "x".

3. .join("") las concatena en una sola cadena

4. Internamente, .join está optimizado para evitar múltiples copias intermedias.


Con push (si no puedes usar .fill()):

```
let temp = [];
for (let i = 0; i < n; i++) {
  temp.push("x");
}
let s = temp.join("");

```

### Comparación de rendimiento 

Versión, Tiempo y Especificación

s += "x"  O(n²)	 Se vuelve lento con n > 10⁴

Array(n).fill("x")  O(n)  Eficiente, directo y legible

push + join  O(n)  Alternativa si .fill no disponible


## 2. Fibonacci

```
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2); // O(2ⁿ)
}

```


Con memoización (recursiva optimizada):

```
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  return memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
};

```

Reduce la complejidad a O(n).

Guarda resultados previos en el objeto memo.


Versión iterativa (más eficiente en uso de memoria):

```
const fib = n => {
  if (n <= 1) return n;

  let prev = 0, curr = 1;
  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
};

```

Tiempo: O(n)

Espacio: O(1) (constantes auxiliares, no crece con n)

Ideal para valores grandes de n como n = 10⁶


Comparación: 

Recursiva pura	O(2ⁿ)	O(n)	Muy lenta, solo para ejemplos chicos

Recursiva con memo	O(n)	O(n)	Clara y útil, pero usa más memoria

Iterativa	O(n)	O(1)	La más eficiente en general


## Explicación de Código 

1. Fibonacci iterativa: 

```
const fib = n => {
  if (n <= 1) return n;

  let prev = 0, curr = 1;
  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
};

```

Objetivo: 

Calcula el n-ésimo (repetición/posición indeterm) número de la secuencia. 

Dónde: 

```
fib(0) = 0  
fib(1) = 1  
fib(2) = 1  
fib(3) = 2  
fib(4) = 3  
fib(5) = 5  
fib(6) = 8  
...etc

```


Caso base: 

```
const fib = n => {
  if (n <= 1) return n;

```

Si n es 0 o 1, retorna directamente n.

Evita el bucle para los primeros dos términos, que ya conocemos

```
let prev = 0, curr = 1;

```


Inicializa dos variables:

prev: guarda el término anterior (fib(n - 2))

curr: guarda el actual (fib(n - 1))


Inicialmente representan:

fib(0) = 0

fib(1) = 1

```
for (let i = 2; i <= n; i++) {
[prev, curr] = [curr, prev + curr];
}

```

Bucle desde i = 2 hasta n

En cada iteración:

Suma prev + curr → este es el siguiente número de Fibonacci.

Avanza las variables: prev toma el valor de curr, curr toma el nuevo valor calculado
    

Para n = 5:

| i | prev | curr | Acción           |
| - | ---- | ---- | ---------------- |
| 2 | 0    | 1    | curr = 0 + 1 → 1 |
| 3 | 1    | 1    | curr = 1 + 1 → 2 |
| 4 | 1    | 2    | curr = 1 + 2 → 3 |
| 5 | 2    | 3    | curr = 2 + 3 → 5 |

    
```
  return curr;
};

```

Devuelve el valor final de curr, que es fib(n).


Complejidad: 

| Métrica | Valor | Por qué                                       |
| ------- | ----- | --------------------------------------------- |
| Tiempo  | O(n)  | Recorre de 2 a `n` una sola vez               |
| Espacio | O(1)  | Solo usa 2 variables, sin arrays ni recursión |


Muy eficiente incluso para valores grandes (fib(10⁶))

Sin uso de stack → no hay desbordamiento

Código conciso y limpio



# Sintaxis JS: estructuras 

1. Bloque independiente/solitario (scoping block):

Crea ámbito/scope local. 

```
{
  const x = 10;
  console.log(x);
};

```

El ; es opcional, pero puede agregarse si se quiere consistencia o para separar sentencias claramente.


2. IIFE con bloque (no muy común, pero válido):

En una IIFE típica se usa paréntesis, pero técnicamente puedes hacer:

```
{
  let result = (() => {
    const x = 2;
    const y = 3;
    return x + y;
  })();

  console.log(result);
};

```

Aquí { ... }; agrupa un bloque que se ejecuta inmediatamente, útil para encapsular variables.


3. Después de un bloque condicional o loop:

A veces se ve un ; después de un if, for, etc., aunque normalmente se omite.

```
if (true) {
  console.log("hola");
};

```

Este ; no es obligatorio ni útil aquí, pero el código sigue siendo válido.


4. Objeto literal ≠ bloque:

Importante: Un objeto literal no es lo mismo que un bloque {}. Por ejemplo:

```
{ key: "value" }; // Esto se interpreta como un bloque con una etiqueta "key", no como un objeto

```

Si realmente quieres que se trate como un objeto, debes envolverlo en paréntesis:

```
({ key: "value" }); // ✅ Esto sí es un objeto

```

 5. Dentro de estructuras de control:

A veces verás bloques como este dentro de un switch, try, while, etc.:

```
while (cond) {
  // código
};

```

Nuevamente, el ; final es innecesario, pero no causa error.


6. Función:

```
function saludar() {
  console.log("Hola");
}

```

Esto es una declaración, no una expresión.

Se eleva (hoisting), y el ; es innecesario.


7. Expresión de función:

```
const saludar = function() {
  console.log("Hola");
}; // punto y coma

```

La función se asigna a una variable, por eso lleva ;.

El ; termina la instrucción de asignación, no la función en sí.


8. Arrow:

```
const saludar = () => {
  console.log("Hola");
}; // punto y coma

```

Es una expresión asignada a una variable.

El punto y coma cierra la asignación, no la función


9. Funciones en objetos (métodos):

```
const obj = {
  hablar() {
    console.log("Hola");
  }
}; // El punto y coma cierra el objeto, no el método

```

El método en sí no lleva ;.

El objeto (si es una instrucción) sí lo lleva si está en contexto de asignación.


10. Funciones como argumentos o callbacks:

```
[1, 2, 3].forEach(function(n) {
  console.log(n);
}); // El punto y coma cierra toda la instrucción

```

Aquí la función es argumento de otra función.

El ; es para cerrar la expresión general, no la función interna.


# Función pura (no mutaciones) y imperativo vs funcional

1. Sin mutaciones ni efectos laterales:

#### 1. No modificamos estructuras externas.

#### 2. No usamos Set ni bucles for con variables mutables.

#### 3. Usamos recursión o combinaciones de .some() y .includes().

```
const eSum10 = arr =>
  arr.some((x, i) =>
    arr.slice(i + 1).includes(10 - x)
  );

```

Pura: no modifica el array original.

Determinista: mismo input, mismo output.

Sin estado externo.


Comparación de eficiencia: 

| Enfoque               | Código base                            | Complejidad | Mutaciones     | Legibilidad | Velocidad  |
| --------------------- | -------------------------------------- | ----------- | -------------- | ----------- | ---------- |
| Imperativo eficiente  | `Set` y `for-of`                       | `O(n)`      | Sí (usa `Set`) | Alta        | ⚡⚡⚡ Rápido |
| Declarativo funcional | `.some()` + `.includes()`              | `O(n²)`     | No             | Alta        | ⚡ Lento    |
| Declarativo recursivo | recursión con búsqueda de complementos | `O(n²)`     | No             | Media       | ⚡ Lento    |


2. Con Set (más rápido):

```
const eSum10 = arr => {
  const seen = new Set();
  for (const num of arr) {
    if (seen.has(10 - num)) return true;
    seen.add(num);
  }
  return false;
};

```


Bench: 

En arrays pequeños (como ```[5, 1, 4]```) todas las versiones son rápidas.

En arrays grandes (por ejemplo, de 100,000 elementos):

1. La versión con Set será mucho más rápida.

2. Las versiones con .some() y .includes() serán lentas, porque .includes() hace una búsqueda lineal cada vez (O(n²) en total).



# kata 5 
