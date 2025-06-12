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

The Feast of Many Beasts

¡Todos los animales están de fiesta! 
Cada animal trae un plato. 
Solo hay una regla: el plato debe empezar y terminar con las mismas letras que el nombre del animal. 
Por ejemplo, la garza azul trae naan de ajo y el carbonero trae pastel de chocolate.

Escriba una función de fiesta que tome el nombre del animal y el plato como argumentos y devuelva verdadero o falso para indicar si a la bestia se le permite llevar el plato a la fiesta.

Supongamos que "bestia" y "plato" son siempre cadenas en minúsculas, y que cada una tiene al menos dos letras. 
"bestia" y "plato" pueden contener guiones y espacios, pero estos no aparecerán al principio ni al final de la cadena. 
No contendrán numerales.


Planteo: 

animal, plato

plato debe empezar y terminar con las mismas letras que el nombre del animal.

Ej: 

great blue heron is bringing garlic naan

the chickadee is bringing chocolate cake


crear func feast: animal name y dish params

returns true or false to indicate beast is allowed to bring the dish to the feast.


params: 

entrada siempre minus y al menos 2 chars in str

pueden tener guiones y espacios pero no al principio ni final

sin numerales 


cod: 

beast, dish
if beast (starts "_" or " ") and (beast ends "_" or " ") and beast ("#")
rtn false
if beast0 and beast(len-1) === dish0 and dish(len-1)
rtn true


methds str: 
for of "..."
content()
some() 
includes, endsWith, startsWith, match
search, substring


### Lógica booleana: sin if

##### Retornar por t o f la expresión

```
function feast(beast, dish) {
  const flett = beast[0];
  const lastlett = beast[beast.length - 1];
  return dish.startsWith(flett) && dish.endsWith(lastlett);
}

```

##### Retornar por t o f la igualdad del primer elemento y la igualdad del segundo 

```
function feast(beast, dish) {
	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

```


Eficiencia: 

Acceso lineal: e1 



# Kata 6

altERnaTIng cAsE <=> ALTerNAtiNG CaSe

Defina String.prototype.toAlternatingCase (o una función/método similar como to_alternating_case/toAlternatingCase/ToAlternatingCase en el idioma seleccionado; 
consulte la solución inicial para obtener más detalles) 
de forma que cada letra minúscula se convierta en mayúscula
y cada letra mayúscula en minúscula. Por ejemplo:

```
"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

```

Como de costumbre, su función/método debe ser puro, es decir, no debe mutar la cadena original.



Planteo: 

sin mutación

loop: 

if str(e) != str(e).lower 
-> rtn str.upper
 else str(e).lower


acceso: 
str(e) to set 


pura vs mut: 

pura: ir transformando el input con funciones

str -> some(cond), map(transf)

mut: imperativa 



# Str Prototype

## String.prototype

Objeto prototipo de todas las cadenas.

Contiene los métodos y propiedades que están disponibles para cualquier string, como:

```
obj | prop, meth
str.prop
str.meth
str.startsWith
str.length

```

Ej: str "texto"

```
"texto".toUpperCase();
"texto".includes("x");
"texto".charAt(2);

```

##### "texto" hereda de String.prototype.

Internamente algo como: "hola".toUpperCase():

1. Convierte el string literal "hola" en un objeto String.

(constructor -> instancia/objeto)

2. Busca el método toUpperCase() en String.prototype.

(uso de métodos definidos en objeto superior String)

3. Lo ejecuta y devuelve el resultado.

(newObj.met())


##### Prototipo: Es como un modelo base del que todas las cadenas obtienen sus funcionalidades.

Métodos definidos en String.prototype:

| Método           | Qué hace                                 |
| ---------------- | ---------------------------------------- |
| `.length`        | Devuelve la longitud del string          |
| `.toUpperCase()` | Convierte todo a mayúsculas              |
| `.toLowerCase()` | Convierte todo a minúsculas              |
| `.includes()`    | Verifica si contiene una subcadena       |
| `.startsWith()`  | Verifica si comienza con una subcadena   |
| `.endsWith()`    | Verifica si termina con una subcadena    |
| `.slice()`       | Extrae parte de la cadena                |
| `.replace()`     | Reemplaza parte de la cadena             |
| `.split()`       | Divide la cadena por separadores         |
| `.trim()`        | Elimina espacios al principio y al final |


## Extender String.prototype

Con cuidado se puede agregar propios métodos personalizados:

```
String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

console.log("hola".reverse()); // "aloh"

```


Peligros: 

1. Puede romper compatibilidad con librerías u otros scripts.

2. Puede sobrescribir métodos existentes si no se verifica antes.

3. Se recomienda no modificar prototipos de objetos nativos en producción.


Ubicación de String.prototype en la cadena de prototipos: 

```
"hola".__proto__ === String.prototype; // true
String.prototype.__proto__ === Object.prototype; // true

```

Cada string tiene su prototipo en String.prototype, que a su vez hereda de Object.prototype.


Rs: 

1. String.prototype contiene todos los métodos que puedes usar en strings.

2. Gracias a él, puedes usar métodos como .includes(), .slice(), .replace(), etc.

3. Puedes agregar métodos personalizados, pero con precaución.

4. Es clave en el modelo de herencia prototípica de JavaScript


## Crear un str.proto 

Sintaxis:

```
String.prototype.nombreDelMetodo = function (/* parámetros */) {
  // `this` hace referencia al string sobre el que se llama
  return algo;
};

```


Ej: .reverse() 

```
String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

console.log("hola".reverse()); // "aloh"

```

this es "hola"

.split("") → ```["h", "o", "l", "a"]```

.reverse() → ```["a", "l", "o", "h"]```

.join("") → "aloh"


Ej: .isPalindrome()

Comprueba si un string es un palíndromo (si str se lee igual en sentido normal o inverso).

```
String.prototype.isPalindrome = function () {
  const clean = this.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
};

console.log("Anita lava la tina".isPalindrome()); // true
console.log("Hola mundo".isPalindrome());         // false

```


Prácticas:

1. Evita sobrescribir métodos existentes:

```
if (!String.prototype.reverse) {
  String.prototype.reverse = function () { /* ... */ };
}

```

2. Usa nombres únicos o poco probables para evitar conflictos.

3. No uses esto en librerías públicas o código compartido, salvo que lo encapsules o documentes bien.


Agregar propiedades:

```
Object.defineProperty(String.prototype, "firstChar", {
  get: function () {
    return this[0];
  }
});

console.log("hola".firstChar); // "h"

```

Método: String.prototype.miMetodo = function() {}

Getter: Object.defineProperty(..., { get: ... })

No romper compatibilidad global


## Explicación add methd y prop a prototype

1. Agregar Método a prototye

```
if (!String.prototype.reverse) {
  String.prototype.reverse = function () {
    // implementación
  };
}

```

Verifica si es distinto al que ya existe.

String.prototype es el objeto del cual todas las instancias de strings heredan

##### Si defines algo en String.prototype, lo agregas como método disponible para todas las cadenas de texto.

```
if (!String.prototype.reverse)

```

Esta línea verifica si ya existe un método llamado reverse en los strings.

! significa "no" → entonces: “si no existe reverse en los strings...”

Esta verificación evita sobrescribir métodos existentes, lo cual es buena práctica.


```
String.prototype.reverse = function () { ... }

```

##### Si no existe, aquí se está creando el método reverse para todas las strings.

##### Dentro de esa función puedes usar this, que representará la cadena específica que llama a .reverse().

```
if (!String.prototype.reverse) {
  String.prototype.reverse = function () {
    return this.split('').reverse().join('');
  };
}

console.log("hola".reverse()); // "aloh"

```

1. "hola" es un string → hereda de String.prototype.

2. .reverse() fue añadido por nosotros.

3. this dentro de la función es "hola".

4. Se divide en array: ['h', 'o', 'l', 'a']

5. Se revierte: ['a', 'l', 'o', 'h']

6. Se une: "aloh"


Peligros: 

##### Si se implementa en producción puede romper librerías de terceros si agregas métodos con nombres que ya existen o existirán.


Mejor alternativa: usar funciones puras:

```
const reverseString = str => 
  str.split('').reverse().join('');

```


2. Agregar propiedad a prototype: 

```
Object.defineProperty(String.prototype, "firstChar", {
  get: function () {
    return this[0];
  }
});

console.log("hola".firstChar); // "h"

```

##### Crea una propiedad computada de solo lectura llamada firstChar para todas las cadenas (String)

Devuelve el primer carácter de la cadena.


Código: 

```
Object.defineProperty(...)

```

Forma avanzada de definir o modificar propiedades de objetos, con opciones detalladas.

Sintaxis general:

```
Object.defineProperty(obj, propName, descriptor)

```

En el ej: 

1. obj: String.prototype

2. propName: "firstChar"

3. descriptor: ```{ get: function() { return this[0]; } }```


```
String.prototype

```

##### Es el objeto del cual heredan todas las strings. Al agregarle una propiedad, todas las cadenas tienen acceso a ella.


```
get: function () { return this[0]; }

```

Esta es una función getter. 

No es un método, sino una propiedad de acceso.

1. Se llama automáticamente cuando accedes a "hola".firstChar.

2. this dentro de esta función es la cadena sobre la que se accedió ("hola").

3. ```this[0]``` devuelve el primer carácter de la cadena.


Ej: 

```
console.log("hola".firstChar); // "h"

```

"hola" hereda de String.prototype

Al acceder a .firstChar, se activa el getter

Retorna el primer carácter: "h"


Get:

1. Se usa como si fuera una propiedad, no una función:

"hola".firstChar en vez de "hola".firstChar()

2. Muy útil para crear propiedades computadas “de solo lectura”.


Peligros:

Modificar prototipos nativos (como String.prototype) no se recomienda en código de producción, porque:

1. Puede entrar en conflicto con bibliotecas que también usen esa propiedad.

2. Rompe la compatibilidad futura si el lenguaje añade una propiedad con el mismo nombre



# Array.prototype



# Getters y Setter en prototipos 

1. Prototipo:

Cada objeto en JS tiene un vínculo interno a otro objeto (su prototipo). 

Cuando lees o escribes una propiedad, el motor busca primero en el propio objeto y después, si no la encuentra, recorre la cadena de prototipos.


2. Accessor property:

Una entrada de la tabla de propiedades cuyo descriptor trae funciones get y/o set en lugar de un valor fijo 

Getter ⇒ se ejecuta cuando lees la propiedad.
Setter ⇒ se ejecuta cuando asignas la propiedad


3. Getter / Setter:

Se definen en el prototipo, de modo que todas las instancias heredan esa lógica. 

Al acceder/asignar la propiedad desde una instancia, se dispara la función con this apuntando a esa instancia.

```
// lectura                ─► dispara el getter
valor = obj.prop;

// asignación             ─► dispara el setter
obj.prop = nuevoValor;

```

El objeto “parece” tener un campo normal, pero en realidad estás llamando código que vive en su prototipo.


## Getters y setters existentes

| Prototipo                | Propiedad (accesor)                                        | Getter | Setter | Qué hace                                                                                      |
| ------------------------ | ---------------------------------------------------------- | ------ | ------ | ----------------------------------------------------------------------------------------------|
| Map.prototype            | `size`                                                     | ✔️     | —      | Devuelve cuántos pares `clave→valor` hay en el mapa.                                          |
| Set.prototype            | `size`                                                     | ✔️     | —      | Devuelve la cantidad de valores únicos en el set.                                             |
| RegExp.prototype         | `flags`, `global`, `ignoreCase`, `unicode`, `dotAll`, etc. | ✔️     | —      | Informan las banderas con que se creó la expresión regular.                                   |
| Object.prototype         | `__proto__` (legacy)                                       | ✔️     | ✔️     | Lee o cambia el prototipo de un objeto. ```(No usar en código moderno, está desaconsejado)``` |
| Error.prototype          | `stack` (host-dependent)                                   | ✔️     | ✔️     | Muestra o ajusta la traza de pila.                                                            |
| TypedArray.prototype     | `byteLength`, `length`                                     | ✔️     | —      | Tamaño de la vista sobre el buffer.                                                           |


Propiedades como length en arrays no se implementan con un getter del prototipo.

Son propiedades de datos especiales creadas en cada array por el motor. 

Aun así, leer / escribir arr.length parece un getter/setter porque dispara lógica interna que ajusta el contenido del array.


## Uso de métodos y props

1. Búsqueda de la propiedad

obj.prop

	El motor mira si prop existe directamente en obj.

	Si no la encuentra, sube a obj.__proto__ (su prototipo), y así sucesivamente


2. Si la entrada encontrada es un accessor

    Leer → se llama la función getter con this === obj.

    Escribir → se llama la función setter con this === obj y el valor asignado.


3. Si la entrada es un método (función-dato común)

    No ocurre nada especial hasta que la invocas: obj.metodo().

    La búsqueda es la misma, pero la propiedad contiene una función que tú ejecutas

Ej: 

Map.prototype.size

```
const m = new Map([["a", 1], ["b", 2]]);
console.log(m.size); // 2 ← getter en Map.prototype

m.set("c", 3);
console.log(m.size); // 3 ← el getter se vuelve a ejecutar

```

1. Lectura m.size → el motor sube a Map.prototype, encuentra un accessor con get size() { … } y ejecuta ese código, que mira la ranura interna de m y devuelve el recuento.

2. No hay setter: intentar m.size = 99 simplemente fracasa en strict mode (o no hace nada en no-strict).


getter + setter: Object.prototype.__proto__ (legacy):

```
const obj = {};
console.log(obj.__proto__ === Object.prototype); // getter

obj.__proto__ = null; // setter: cambia la cadena de prototipos

```


Rs: 

1. Getter / Setter = funciones que viven en el descriptor de la propiedad.

2. En prototipos: las heredan todas las instancias; parecen campos normales desde fuera.

3. Existen muchos getters nativos (size en Map/Set, flags en RegExp…). Los setters nativos son menos comunes y casi siempre para casos especiales (__proto__, stack en Error).

4. Al leer / escribir una propiedad, el motor decide si invoca código (accessor) o entrega un valor almacenado (dato


# Funcion pura vs Función no pura/con mutación

Es clave para escribir código más predecible y fácil de testear.

Sirve para programación funcional y JavaScript. 


## Definición de función pura: 

1. Siempre devuelve el mismo resultado con los mismos argumentos.

2. No tiene efectos secundarios (no modifica nada fuera de su ámbito).


Ej: 

```
const sumar = (a, b) => a + b;

sumar(2, 3); // siempre devuelve 5

```

## Características de las funciones puras y no puras

### Puras: 

##### 1. No modifica variables externas:

No cambia valores fuera de su propio ámbito. 

No toca variables globales, objetos externos ni modifica argumentos por referencia.


Impuro (modifica una variable externa):

```
let contador = 0;
function incrementar() {
  contador++; // ❌ modifica una variable externa
}

```

Puro:

```
function incrementar(contador) {
  return contador + 1; // solo usa su input
}

```


##### 2. No cambia el estado de nada:

1. No modifica ningún dato fuera de sí misma

2. No muta variables externas.

3. No cambia objetos, arrays ni estructuras pasadas como referencia.

4. No altera el sistema (nada de escribir archivos, cambiar el DOM, etc.).


Impuro (cambia el estado):

```
let usuario = { nombre: "Ana" };

function renombrar(nuevoNombre) {
  usuario.nombre = nuevoNombre; // cambia el estado externo
}

```

puro:

```
function renombrar(usuario, nuevoNombre) {
  return { ...usuario, nombre: nuevoNombre }; // ✅ no muta el original
}

```

Nunca tiene efectos colaterales en el estado del sistema o del programa.


##### 3. No accede a nada fuera de su input:

Solo puede usar los datos que se le pasan explícitamente como argumentos

No debe depender de:

1. Variables globales

2. Fecha y hora

3. Estado del navegador o del sistema

4. Bases de datos, APIs, almacenamiento local, etc.


Impuro (depende del entorno):

```
function obtenerEdad() {
  return new Date().getFullYear() - 1990; // accede al reloj del sistema
}

```

Puro: 

```
function obtenerEdad(actual, nacimiento) {
  return actual - nacimiento; // solo usa sus argumentos
}

```

Es autosuficiente: todo lo que necesita debe estar en sus parámetros.


##### 4. Siempre da el mismo resultado con el mismo input

Determinismo: si le pasas los mismos argumentos, siempre obtendrás el mismo resultado

Impuro: 

```
function aleatorioHasta(n) {
  return Math.floor(Math.random() * n); // cambia cada vez
}

```

Puro: 

```
function doble(x) {
  return x * 2; // siempre da el mismo resultado
}

```

##### 5. Fácil de testear:

Es muy fácil de probar automáticamente:

1. No depende del entorno.

2. No requiere mocks ni preparación compleja.

3. Se puede usar en aislamiento

Testing: 

```
function sumar(a, b) {
  return a + b; // ✅ pura
}

// Test automático
console.assert(sumar(2, 3) === 5);
console.assert(sumar(2, 3) === 5); // siempre igual

```

Ventajas: 

1. Predecibles → mismo input → mismo output.

2. Testeables → no necesitas simular estados o entornos.

3. Reutilizables → no dependen de contextos externos.

4. Seguras → no rompen nada al usarse


## Función impura

Puede devolver resultados distintos con los mismos argumentos.

Tiene efectos secundarios, como:

1. Modificar variables globales.

2. Leer o escribir en archivos o bases de datos.

3. Modificar el DOM.

4. Usar console.log, Math.random, Date.now, etc.


Ej:

```
let total = 0;

const sumarYGuardar = (a, b) => {
  total = a + b;
  return total;
};

```

Modifica la variable externa total.

No es predecible si total es usado en otras partes


Ej: 

```
const obtenerHora = () => new Date().toLocaleTimeString();

```

Cada vez que la llamas, devuelve un valor diferente → impura.


## Efectos secundarios

En muchas aplicaciones necesitas funciones impuras (para leer datos, modificar el DOM, etc.).

##### Lo importante es aislar esos efectos para que no contaminen el resto de la lógica.


Ej: 

```
// Función pura
const formatearSaludo = nombre => `Hola, ${nombre}`;

// Función impura que usa la pura
const saludar = nombre => {
  const mensaje = formatearSaludo(nombre);
  console.log(mensaje); // efecto secundario
};

```

##### Su comportamiento puede afectar el estado global del programa.


Prácticas: 

##### 1. Usa funciones puras para procesar datos.

##### 2. Usa funciones impuras para comunicarte con el mundo exterior (UI, logs, red, etc.).

##### 3. Siempre que puedas, separa la lógica pura de los efectos secundarios


## Métodos de str puros js 

Los strings son inmutables: no se pueden modificar directamente.

Todos los métodos que "parecen" transformar un string en realidad devuelven uno nuevo.

Ninguno de ellos modifica el string original


Los strings en JS son inmutables por diseño, así que no existen métodos que muten un string existente. 

##### Sí ocurre con arrays (por ejemplo, .push() o .sort()).



## Métodos de cadena puros 

1. Los strings son inmutables: no se pueden modificar directamente.

2. Todos los métodos que "parecen" transformar un string en realidad devuelven uno nuevo.

3. Ninguno de ellos modifica el string original


| Método                      | Qué hace                              | Retorna nuevo string |
| --------------------------- | ------------------------------------- | -------------------- |
| `.slice(start, end)`        | Extrae parte del string               | ✅ Sí                 |
| `.substring(start, end)`    | Similar a `.slice()`                  | ✅ Sí                 |
| `.substr(start, length)`    | Obsoleto pero no muta                 | ✅ Sí                 |
| `.toLowerCase()`            | Convierte a minúsculas                | ✅ Sí                 |
| `.toUpperCase()`            | Convierte a mayúsculas                | ✅ Sí                 |
| `.trim()`                   | Elimina espacios laterales            | ✅ Sí                 |
| `.replace()`                | Reemplaza parte del string            | ✅ Sí                 |
| `.replaceAll()`             | Reemplaza todas las ocurrencias       | ✅ Sí                 |
| `.split()`                  | Divide el string y devuelve un array  | ✅ Sí (array nuevo)   |
| `.concat()`                 | Concatena con otro string             | ✅ Sí                 |
| `.repeat(n)`                | Repite el string `n` veces            | ✅ Sí                 |
| `.padStart()` / `.padEnd()` | Añade caracteres al principio o final | ✅ Sí                 |
| `.normalize()`              | Normaliza caracteres Unicode          | ✅ Sí                 |


```
const original = "  Hola Mundo  ";

const sinEspacios = original.trim();       // "Hola Mundo"
const enMayusculas = original.toUpperCase(); // "  HOLA MUNDO  "

console.log(original); // "  Hola Mundo  " → el original no cambia

```

Rs:

1. Todos los métodos nativos de strings en JavaScript son puros.

2. Usar métodos de strings es seguro: nunca cambian el valor original.


## Métodos de array puros

Los métodos de array pueden afectar o no al estado de un array. 

##### Como los array son objetos mutables, un array original puede cambiar con un método que afecte al original y no crea uno nuevo. 


Métodos de array puros:

Devuelven una copia nueva o un resultado sin modificar el array original:

| Método                                           | Qué hace                                   | Retorna              |
| ------------------------------------------------ | ------------------------------------------ | -------------------- |
| `.slice()`                                       | Corta una porción                          | Nuevo array          |
| `.concat()`                                      | Une arrays                                 | Nuevo array          |
| `.map()`                                         | Transforma elementos                       | Nuevo array          |
| `.filter()`                                      | Filtra elementos según condición           | Nuevo array          |
| `.reduce()` / `.reduceRight()`                   | Reduce a un solo valor                     | Resultado (no array) |
| `.find()` / `.findIndex()` / `.findLast()`       | Busca elementos                            | Valor o índice       |
| `.every()` / `.some()`                           | Verifican condiciones                      | Booleano             |
| `.includes()`                                    | Chequea si existe un valor                 | Booleano             |
| `.indexOf()` / `.lastIndexOf()`                  | Posición de un valor                       | Índice numérico      |
| `.join()`                                        | Une elementos en un string                 | String               |
| `.flat()` / `.flatMap()`                         | Aplana arrays                              | Nuevo array          |
| `.at()`                                          | Accede a posición (soporta negativos)      | Valor                |
| `.toReversed()` / `.toSorted()` / `.toSpliced()` | (ES2023+) Versión pura de métodos mutables | Nuevo array          |


Impuros: 

Modifican directamente el array, cambiando su contenido:

| Método          | Qué hace                             | Efecto   |
| --------------- | ------------------------------------ | -------- |
| `.push()`       | Agrega al final                      | Mutación |
| `.pop()`        | Elimina del final                    | Mutación |
| `.shift()`      | Elimina del inicio                   | Mutación |
| `.unshift()`    | Agrega al inicio                     | Mutación |
| `.reverse()`    | Invierte el array                    | Mutación |
| `.sort()`       | Ordena elementos                     | Mutación |
| `.splice()`     | Añade o quita elementos              | Mutación |
| `.fill()`       | Rellena con un valor                 | Mutación |
| `.copyWithin()` | Copia parte del array sobre sí mismo | Mutación |


Ej: 

```
const arr = [1, 2, 3];

// Puro
const nuevo = arr.slice(0, 2); // [1, 2]
console.log(arr); // [1, 2, 3]

// Impuro
arr.push(4);
console.log(arr); // [1, 2, 3, 4] ← fue modificado

```

Métodos puros → ideales para programación funcional, testing, predictibilidad.

Métodos impuros → útiles pero deben usarse con cuidado si trabajas con datos compartidos o inmutabilidad (por ejemplo, en React o Redux)



## Index y posición en array JS

Son terminos intercambiables pero hay técnicamente hay una pequeña diferencia de contexto. 

| Término      | Qué representa                                                                                     | Base | Ejemplo                                    |
| ------------ | -------------------------------------------------------------------------------------------------- | ---- | ------------------------------------------ |
| Índice       | La posición numérica en un array o string, empezando desde 0.                                      | 0    | `array[0]` es el primer elemento           |
| Posición     | Término más general o natural, a veces se refiere a la ubicación "humana" (empezando desde 1).     | 1    | "El primer carácter está en la posición 1" |


Todos los métodos que hablan de "posición" realmente devuelven un índice.

Ej.: .indexOf(), .findIndex() → retornan el índice (basado en 0), aunque el nombre diga "posición" en algunas documentaciones informales.

```
const letras = ['a', 'b', 'c', 'd'];

console.log(letras.indexOf('c')); // 2 ← índice
console.log(letras[2]);           // "c" ← acceso por índice

```

"La letra 'c' está en la tercera posición"
Pero el índice es 2.


| Método           | Uso                                | Devuelve        |
| ---------------- | ---------------------------------- | --------------- |
| `.indexOf(val)`  | Busca valor exacto                 | Índice (número) |
| `.findIndex(fn)` | Busca por condición (callback)     | Índice (número) |


Rs: 

"índice" → término técnico.

"posición" → término informal o natural (a veces confunde con base 1).


```
const nums = [4, 7, 9, 10];

console.log(nums.indexOf(9)); // 2
console.log(nums.findIndex(n => n > 8)); // 2 (el 9 cumple)

```


# Helpers

Opciones con condicional:

```
const str = "banana";
const resultado = str.startsWith("a") || str.startsWith("b");
console.log(resultado); // true
 
```


Corrección con helpers: 

1. 

```
const str = "banana";
const letras = ["a", "b"];

const empiezaCon = letras.some(l => str.startsWith(l));
console.log(empiezaCon); // true

```

```
const str = "banana";
const letras = ["x", "y", "a"];

const contiene = letras.some(l => str.includes(l));
console.log(contiene); // true (porque "a" está en "banana")

```

2. 

```
const startsWithOneOf = (str, prefixes) => {
  return prefixes.some(prefix => str.startsWith(prefix));
};

```

uso: 

```
console.log(startsWithOneOf("banana", ["a", "b", "c"])); // true (porque empieza con "b")
console.log(startsWithOneOf("mango", ["a", "b", "c"]));  // false
console.log(startsWithOneOf("apple", ["ap", "or"]));     // true

```


```
const includesOneOf = (str, substrings) => {
  return substrings.some(sub => str.includes(sub));
};

// Ejemplos
console.log(includesOneOf("banana", ["x", "n", "z"])); // true
console.log(includesOneOf("kiwi", ["a", "b"]));        // false

```


# Planteo 

kiss, dry, yagni, solid 
función pura (no mutación de estado)
efectos secuandario(uso de funcion pura)
eficiencia, estructuras. 
retornar expresión mat, log, etc. 

lógica:
1. ¿Qué pasa si...? -> (usa if)
2. ¿Qué hago para cada...? -> (usa for)
3. ¿Hasta cuándo sigo...? -> (usa while)
4. ¿Qué pasa si algo falla...? -> (usa try)
5. ¿Cómo manejo estructuras externas...? -> (usa with)
6. ¿Cómo encapsulo esta lógica...? -> (usa funciones)



# Manipulación de strings

1. métodos inmutables

Los strings en JavaScript son inmutables. 

Por lo tanto, todos los métodos como .slice(), .replace(), .toUpperCase(), etc., devuelven una nueva cadena.

```
const name = "carlos";
const capitalized = name.charAt(0).toUpperCase() + name.slice(1); // "Carlos"

```

Siempre guarda el resultado en una nueva variable.


2. Evita concatenación con + en bucles 

Concatenar con + en bucles genera muchas copias intermedias → ineficiente.

```
// Malo: O(n²)
let result = "";
for (let i = 0; i < 1000; i++) {
  result += "x";
}

// Mejor:
let result = new Array(1001).join("x"); // 1000 veces "x"
// o
result = "x".repeat(1000);

```


3. Prefiere template literals (\${...}``) en vez de concatenación

```
// Menos legible
const msg = "Hola " + name + ", tienes " + age + " años.";

// Mejor
const msg = `Hola ${name}, tienes ${age} años.`;

```


4. Normaliza espacios, mayúsculas y tildes si necesitas comparar

Para evitar errores por diferencias de formato

```
// Comparación sin distinción de mayúsculas
str1.toLowerCase() === str2.toLowerCase();

// Eliminar tildes y acentos
const normalize = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

```


5. Usa expresiones regulares con precaución

Son potentes, pero pueden volverse difíciles de mantener. Siempre comenta si es una expresión compleja.

```
// Con comentario claro
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Chequea formato básico de email

``` 


6. Evita métodos obsoletos o inconsistentes

Evita substr() y substring() si puedes usar .slice().

Usa .startsWith(), .endsWith() y .includes() para claridad y compatibilidad moderna


7. Escapa adecuadamente al construir HTML / URLs

Usa encodeURIComponent() para parámetros de URL.

Para HTML, si estás construyendo con strings (no recomendado), escapa caracteres especiales (<, >, ", ', &) para prevenir XSS.
    
    
    
8. Divide y une cadenas con .split() y .join()

Útil para invertir palabras, remover espacios, etc.

```
const reversed = "hola mundo".split(" ").reverse().join(" "); // "mundo hola"

```


9. Valida tipo antes de manipular

Asegúrate de estar trabajando con strings reales.

```
function safeTrim(val) {
  return typeof val === "string" ? val.trim() : "";
}

```    


10. Evita hardcodear separadores o formatos

Crea funciones reutilizables para formateo:

```
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

```


11. Nuevas funciones 

.padStart() / .padEnd() → para alinear texto.

.replaceAll() (ES2021) → reemplazos múltiples.

Intl para formateo de fechas, monedas, listas.


# Manipulación de arrays

1. Usar métodos declarativos (funcionales) siempre que puedas

Métodos como .map(), .filter(), .reduce(), .some(), .every() son inmutables, más expresivos y encadenables.

```
// Dado un array de edades, filtra mayores de edad y obtén el doble
const edades = [12, 19, 25, 16];
const mayoresDobles = edades.filter(e => e >= 18).map(e => e * 2);

```


2. Evitar mutación si no es necesario

Muchos métodos mutan el array (.push(), .pop(), .shift(), .splice(), .sort()), así que ten cuidado si necesitas mantener el original. 

```
// Mutación
const arr = [1, 2, 3];
arr.sort(); // cambia el orden en el original

// Copia antes de mutar si lo necesitas
const sorted = [...arr].sort();

```


3. Alternativas a los bucles clásicos

```
// Menos expresivo
for (let i = 0; i < arr.length; i++) { ... }

// Más legible
arr.forEach(item => { ... });

```

##### Si el rendimiento es crítico (e.g. arrays muy grandes), los bucles clásicos pueden ser más rápidos.


4. Accede de forma segura

Antes de acceder a un índice, verifica su existencia

```
if (arr.length > 0) {
  const first = arr[0];
}

```

O usa ?. si es posible:

```
const first = arr?.[0];

```


5. Usar .reduce() para transformar arrays completos 

Ideal para acumulaciones, agrupaciones o transformaciones avanzadas:

```
// Sumar elementos
const total = arr.reduce((acc, val) => acc + val, 0);

// Agrupar por propiedad
const groupBy = (arr, prop) =>
  arr.reduce((acc, item) => {
    const key = item[prop];
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {});

```


6. Evita usar .map() si no usas el resultado

```
// Incorrecto
arr.map(x => console.log(x)); // Usar forEach

// Correcto
arr.forEach(x => console.log(x));

```


7. Para búsquedas, usa .find(), .some(), .every()

```
const users = [{ id: 1 }, { id: 2 }];

users.find(u => u.id === 2);   // {id: 2}
users.some(u => u.id === 3);   // false
users.every(u => u.id > 0);    // true

```


8. Cuidado con .indexOf() vs .includes()

.indexOf() devuelve el índice o -1.

.includes() devuelve true o false.
    
```
arr.includes(5);      // más legible
arr.indexOf(5) !== -1 // menos directo

```    


9. Para limpiar arrays: .filter(Boolean)

Elimina falsy (false, null, 0, "", undefined, NaN):

```
const cleaned = [0, 1, "", "hola", false].filter(Boolean); // [1, "hola"]

```


10. Evita usar .splice() sin necesidad

.splice() muta el array; si necesitas quitar elementos sin mutar, usa .slice() o .filter().

```
// Extraer sin mutar
const copy = arr.slice(0, 3);

// Remover un elemento por índice sin mutar
const removed = arr.filter((_, i) => i !== indexToRemove);

```


11. spread operator

```
// Eliminar duplicados
const unique = [...new Set(arr)];

// Aplanar arrays
const flat = nestedArray.flat(Infinity); // o .flatMap()

// Revertir sin mutar
const reversed = [...arr].reverse();

```


## forEach vs map 



# Desestructuración

Permite extraer valores de arrays u objetos y asignarlos a variables de forma concisa.


2. Desestructuración de Arrays

#### La posición importa:

```
const numeros = [10, 20, 30];

// Extrae los primeros dos valores
const [a, b] = numeros;
console.log(a); // 10
console.log(b); // 20

```

Valores omitidos:

```
const [x, , z] = [1, 2, 3];
console.log(x); // 1
console.log(z); // 3

```

Valores por defecto:

```
const [p, q = 42] = [5];
console.log(q); // 42

```


2. Desestructuración de Objetos

#### El nombre importa, la posición no

```
const persona = { nombre: "Ana", edad: 28 };

const { nombre, edad } = persona;
console.log(nombre); // "Ana"
console.log(edad);   // 28

``` 

Renombrar variables:

```
const { nombre: n, edad: e } = persona;
console.log(n); // "Ana"

```

Valores por defecto:

```
const { ciudad = "Desconocida" } = persona;
console.log(ciudad); // "Desconocida"

```


3. Desestructuración en funciones (parámetros)

Objetos:

```
function saludar({ nombre, edad }) {
  console.log(`Hola, ${nombre}. Tienes ${edad} años.`);
}

saludar({ nombre: "Luis", edad: 30 });

```


Arrays:

```
function mostrar([x, y]) {
  console.log(x, y);
}

mostrar([100, 200]); // 100 200

```


4. Desestructuración anidada

```
const usuario = {
  nombre: "María",
  direccion: {
    ciudad: "Lima",
    pais: "Perú"
  }
};

const {
  direccion: { ciudad, pais }
} = usuario;

console.log(ciudad); // "Lima"

```


5. Usos comunes

Intercambio de variables: 

```
let a = 1, b = 2;
[a, b] = [b, a];

```

Extraer valores de response (por ejemplo en APIs):

```
const response = { status: 200, data: [1, 2, 3] };
const { status, data } = response;

```

Aportes: 

Código más limpio y legible.

Reducción de repetición de nombres.

Ideal para trabajar con estructuras complejas (como respuestas de API o props en React).



# Operador spread (...)

"Expande" los elementos de un array, objeto o iterable donde se esperan cero o más elementos o propiedades.

Permite copiar, combinar o expandir los valores de un iterable (como arrays, objetos o incluso strings) en un nuevo contexto.


1. Arrays:

Copiar un array

```
const a = [1, 2, 3];
const copia = [...a];  // [1, 2, 3]

```

Combinar arrays:

```
const a = [1, 2];
const b = [3, 4];
const combinado = [...a, ...b];  // [1, 2, 3, 4]

```

Usar en funciones:

```
const numeros = [1, 2, 3];
console.log(Math.max(...numeros)); // 3

```


2. Spread en objetos

Copiar un objeto

```
const persona = { nombre: "Ana", edad: 30 };
const copia = { ...persona };  // copia exacta

```

Combinar objetos: 

```
const a = { x: 1 };
const b = { y: 2 };
const combinado = { ...a, ...b }; // { x: 1, y: 2 }

```

Si hay claves duplicadas, el último gana:

```
const a = { x: 1 };
const b = { x: 9, y: 2 };
const resultado = { ...a, ...b }; // { x: 9, y: 2 }

```


3. Spread en strings

Un string es un iterable, así que también puede "expandirse":

```
const palabra = "Hola";
const letras = [...palabra];  // ['H', 'o', 'l', 'a']

```


Diferencias con rest (...)

#### ... se llama spread cuando expande.

#### Se llama rest cuando recoge varios valores en una sola variable.

```
// Spread: expansión
const arr = [1, 2, 3];
const nuevo = [...arr, 4];  // [1, 2, 3, 4]

// Rest: recolección
const [a, ...resto] = [10, 20, 30];  
// a = 10, resto = [20, 30]

```


Aportes: 

Hace que el código sea más limpio y conciso.

Evita mutaciones.

Facilita operaciones comunes como copiar, fusionar y pasar datos.



