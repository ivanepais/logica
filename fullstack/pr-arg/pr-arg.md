# Front 

Parte visual, interactiva, no lógica y sin estado de una app

Sin una estetica atractiva no se lo podes vender a nadie.


Herramientas: 

html, css, taildwind; react, angular


# Back

Parte lógica, reglas negocios reales (func/convertidas a código) y con estado que guardará la información de la app. 

Primero nos ocupamos de que las cosas funcionen, esten probadas. 

Por último nos ocupamos de la parte visual.

Sin lógica funcional el proyecto no sirve para nada. 


Herramientas: 

db relacionales (tab) y no relacionales (obj):
sqlite, postgreSQL

docker: correr apps sin instalarlas; ej, correr muchos serv de mysql, proyectos distintos a través de docker

crear apis

solid

arq: vertical slicing, clean arquitecture (como hexagonal: escalar sistemas grandes)

cloud/producción/devOps: ci/cd (deploy), polity gates

Prod: vercel, aws, etc


# Let vs Const

Casi siempre es recomendable usar const. 

let solo cuando el valor será mutable/cambiable durante la ejecución del programa.



# Funciones 

## Nombre de funciones: infinitivo

Debe empezar con un verbo infinitivo. 

Ej: calcularSalarioAnual. 

Calcular es el verbo infinitivo, para que de vista nos demos cuenta que es una función y no un nombre de variable, constante, etc. 

Si le damos un nombre como salarioAnual puede parecer una variable. 

Más verbos infinitivos: mostrar, sumar, pedir, etc. 

Evitar usar abreviaciones, la potencia del hardware ya no es limitado. 

Además de que los editores tiene autocompletado.

Dado que lo que más vamos a hacer es leer código.


# Orden de ejecución de JS

Las funciones se ejecutan cuando son llamadas

```
console.log('primero');
console.log('segundo');

function cuartoTexto() {
	console.log('cuarto');
}

console.log('tercero');
```

### Debugger

Al hacer click a la izquierda de la linea pausamos la ejecución de un programa.

Veremos un signo play-stop para ejecutar o pausar la función

Otro signo para pasar a la siguiente linea/función.

Y dos signos más: una flecha para abajo y para arriba con un punto.

Se usan sobre la llamada a la función para ver que pasa dentro de ellas.
 

### Return

Si la función no tiene un valor de retorno devuelve 'undefined'.

Por más que tenga unas instrucciones.

```
function sumar(a,b) {
	a+b;
}

function sumar(a,b) {
	const resultado = a+b;
}

function sumar(a,b) {
	const resultado = a+b;
	return resultado;
}

function sumar(a,b) {
	return a+b;
}
```

Cuando tenemos que hacer muchos pasos para lograr un resultado final, guardamos ese resultado en una const.

Sería un retorno explícito.

Cuando tenemos que hacer algo simple podemos devolver el resultado junto al return.


### Usar el resultado del return

Si solo llamamos a la función, no estamos usando su resultado.

```
function sumar(a, b) {
	return a + b;
}

sumar(1,2); //3
```

Para usarlo lo podemos guardar o asignar a otra constante

```
function sumar(a, b) {
	return a+b;
}

const resultado = sumar(1, 2);
console.log(resultado);
```

o

```
console.log(sumar(1, 3))
```


```
function generarSaludoUsuario(nombre, edad){
	const saludoInicial = 'Hola';
	const saludoFinal = 'Bienvenido';
	const saludo = saludoInicial + ' ' + nombre + '. Tu edad es' + edad + '.'; 
	return saludo; 
}
```

O

```
function generarSaludoUsuario(nombre, edad){
	const saludoInicial = 'Hola';
	const saludoFinal = 'Bienvenido';
	return saludoInicial + ' ' + nombre + '. Tu edad es' + edad + '.';
}

console.log(generarSaludoUsuario('Bob', 30));
```


### Funciones dinámicas

Son funciones que se usan si harcodear los argumentos, como pasa en el ejemplo anterior. 

Pasaremos objetos que tengan valores. 

```
const nombre = 'Bob'; 
const edad = 30;

console.log(generarSaludoUsuario(nombre, edad));
```

Los parametros/variables locales de la funcion son distintos a los objetos

Ej:

```
function generarSaludoUsuario(nombre, edad){}

const nombre = 'Bob'; 
const edad = 30;

console.log(generarSaludoUsuario(nombre, edad));
```

nombre local -> tomará nombre ('Bob')
edad local -> edad (30)

Son usados para realizar transformaciones internas. 


También podría ser: 

```
function generarSaludoUsuario(a, b){}
```

Funcionaría igual. 


Si pasamos objetos como: 

```
nombre2 = 'Gary'; 
edad2 = 33

console.log(generarSaludoUsuario(nombre2, edad2));

```

Y valores harcodeados como: 

```
console.log(generarSaludoUsuario('Nombre 3', 23));
```

Salida: 

```
Hola Bob. Tu edad es 30. Bienvenido. 
Hola Gary. Tu edad es 33. Bienvenido. 
Hola Nombre 3. Tu edad es 23. Bienvenido. 
```

Dinámico: 

```
function generarSaludoUsuario(nombre, edad){}

const nombreUsuario = prompt('Cómo te llamas'); 
const edadUsuario = Number(prompt('Cuántos años tenes?'));
const saludoUsuario = generarSaludoUsuario(nombreUsuario, edadUsuario);
console.log(saludoUsuario); 
```

El programa ejecutará los prompt, guardará los valores introducidos por el usuario en las constantes. 

Usamos la función para generar un saludo en otra constante.

Al final, mostramos el saludo personalizado con otra constante. 



# if-else

Necesitamos que la condición se evalúe como booleano. 

1 true, 0 false

```
if (condicion) {
	// hacer algo cuando la condicion se cumple (true)	
} else {
	// hacer otra cosa cuando la condicion no se cumple (false)
}
```

Operador hardcodeado:

Sumar o restar?

```
const operador = '+'; 
const numero1 = 2; 
const numero2 = 1; 

if (operador === '+') {
	console.log(sumar(numero1, numero2)); 
} else {
	console.log(restar(numero1, numero2)); 
}
```

Cuando la condición es true cae en el primer console.log

Si el false, cae en el segundo console.log. 

Como harcodeamos que el operador es el string +, se ejecutará la suma. 


Podemos hacerlo dinámico: 

```
const operador = prompt('Introduce un operador matemático + o -'); 
const numero1 = 2; 
const numero2 = 1; 

if (operador === '+') {
	console.log(sumar(numero1, numero2)); 
} else {
	console.log(restar(numero1, numero2)); 
}
```


## if else if

```
if (condicion) {
	//codigo si se cumple la condicion
} else if (condicion) {
	//codigo si se cumple la segunda condicion
} else {
	//codigo si no se cumple ninguna de las dos condiciones anteriores
}
```


### Usar return dentro de los condicionales 

```
const numero = 10; 

if (numero > 1) {
	return 'El número es mayor a 1'; 
} else if (numero > 2) {
	return 'El número es mayor a 2'; 
} else {
	return 'El número no es ni mayor a 1 ni mayor a 2'
}
```

o 

Diseño: variable actualizada

```
const operador = prompt('Introduce un operador matemático +, -, *, /'); 
const numero1 = Number(prompt('Introduce el primer número')); 
const numero2 = Number(prompt('Introduce el segundo número')); 

let resultado;
if (operador === '+') {
	resultado = sumar(numero1, numero2); 
	return resultado;
} else if (operador === '-') {
	resultado = restar(numero1, numero2); 
	return resultado;
} else if (operador === '*') {
	resultado = multiplicar(numero1, numero2)
	return resultado;
} else if (operador === '/') {
	resultado = dividir(numero1, numero2)
	return resultado;
} else {
	return 'No introdujiste los valores correctos';
}

console.log(resultado);
```

O sin variable temporal

Pero si no se necesita el console.log tendríamos que cambiar el código en todos los lugares que aparece.

```
if (operador === '+') {
	return console.log(sumar(numero1, numero2));
} else if (operador === '-') {
	return console.log(restar(numero1, numero2));
} else if (operador === '*') {
	return console.log(multiplicar(numero1, numero2));
} else if (operador === '/') {
	return console.log(dividir(numero1, numero2));	 
} else {
	return 'No introdujiste los valores correctos';
}

```


# Booleano

true o false, puede ser el resultado de una comparación

O podemos asignarle a una varialble o constante true o false directamente

Un signo de exclamación (!) antes de un booleano nos da su valor opuesto 


## Nombrar booleanos

En español puede empezar con la palabra es

Ej, esVerdadero = true. 


En inglés podemo usar is o has

Ej, isTrue = true. 

Palabras que simulen un pregunta o expresión por si o no.


Usando el operador 'not':

```
console.log(!esVerdadero);
console.log(!isTrue);
```


## Comparar números 

```
const numero1 = Number(prompt('Ingresa un número'));
const esElNumero2 = numero1 === 2; 

// si no es el número 2, entonces...
if (!esElNumero2) {
	console.log('Elegiste un número que no es 2);
}
```


## En producción 

Se usa `if !` para saber si el usuario tiene permiso para hacer o no hacer tal cosa.

```
if (!userAccess) {
	alert('No tienes permiso para acceder a la funcionalidad');
}
```



# Navegador

Cada sitio web se carga primero como un archivo html.

HTML le da estructura a cada archivo.

Las etiquetas le dan un nombre, significado, función a cada elemento de la web.

No tiene lógica, no realiza cálculo, no tiene funcionalidades dinámicas, solo muestra elementos.

Los elementos de html tienen nombre de etiqueta, atributo y dentro va contenido, generalmente un texto descriptivo.



# Arrays

Lista ordenada (posición/indice) en la que podemos guardar múltiples elementos con distinto tipo.

Empiezan en la posición 0. 


## Array fijo vs dinámico

Fijo: al crear el array definimos la cantidad de elemento. 

Dinámico y flexible: en JS y otros lenguajes, podemos introducir cientos de elementos directamente. 


## Multiples tipos

Podemos guardar otros array y objetos. 


## Length: método de array

arr.length devuelve la cantidad de elementos.


## Array vs Vector

En JS un array tiene método como push y pop.

Es un objeto con múltiples métodos.

Pero no tiene métodos para sumar o hacer un producto escalar como tendría un vector. 


## Acceso y cambio

### Cambio =/= agregar elemento

```
const arr = ['x', 'a', 'b']; 
arr[0] = 'y';

err Reasign: arr = ['x', 'y', 'z']; 
 
```

### Siempre que la estructura sea mutable, si es const; podemos cambiar la estructura/valores de un objeto como arr, pero no podemos hacer una reasignación completa de los valores: reescribirlo.


## Agregar elemento al final: arr.push() 

```
const arr = ['x', 'a', 'b']; 
arr[0] = 'y';
arr.push('h') 

```



# Objeto

```
Console.log(//arg)
```

Console es un objeto

log es un método que puede tomar múltiples argumentos.


Un array es otro objeto, por eso podemos llamar al método push() con un punto:

```
arr.push('new elem')
```



# Bucles

Con una sola estructura podemos repetir acciones. 

Esto evita que tengamos que hacer esas acciones muchas veces.


## Componentes de un ciclo en un bucle

1. Un punto de partida

2. Una condición (punto final)

3. Un contador (paso/siguiente/adelante hasta el punto final)


Si alguno de estos elementos esta mal podemos entrar en el bucle infinito


## Tipos de bucles

### 1. while (mientras)

Repetirá una acción mientras la condición sea true

Ej: junto a sus componentes

1. El punto de partida es usado para que entre o no entre al bucle.

2. La condición sirve para ejecutar o no ejecutar una acción. 

3. El contador sirve para salir o no salir del bucle:

Por cada iteración además de hacer una acción, aumentamos o modificamos el punto de partida. 

```
// 1. punto de partida
let numero = 0 

while (numero < 10) {
	// 2. condición: numero < 10 (punto final)
	
	console.log(JS es increíble);
	
	numero = numero + 1; 
	// + 1 es un contador / tamaño del paso
}
```


## Bucle infito

Ej: si nos falta el contador para que el while pase de true a false y deje de repetir la acción; la repetirá hasta llenar la memoria y bloquear la computadora.

```
let numero = 0; 
while (numero < 10) {
	console.log(JS es increíble);
}
```


## Cantidad de iteraciones/ejecuciones del código

Para repetir algo 10 veces: la computadora va a ir de 0 a 9. 

Pero podríamos hacerlo cambiando la condición. 


Ej: Ir o mostrar de 0 a 10 

```
let numero = 0; 
while (numero < 10) {
	console.log(numero);
	numero = numero + 1
}
```

Imprimirá o mostrará en la consola 10 veces/valores/accioens: 

0
1
2
3
4
5
6
7
8
9 


### La clave esta en mostrar, interactuar con el índice


## Debuggear indice 

```
let numero = 0; 
while (numero < 10) {
	console.log(numero);
	numero = numero + 1
}
```

1. En la primera iteración número vale 0 (punto de partida). 

2. Entra al bucle (condición true). (Condición)

3. Ejecuta el código. (Acción que queremos repetir) 

4. Al llegar al contador, actualiza el punto de partida. 

5. Ahora número vale 1.

6. A partir de acá se repiten los pasos 2-4, hasta que el bucle sea falso. 

7. Al final número vale 10


## Ir de mayor a menor en un bucle

Ej: mostrar los numeros de 10 a 1

```
let numero = 10; 
while (numero >= 10) {
	console.log(numero);
	numero = numero - 1
}
```

## Operadores alternativos

```
numero += 1
numero -= 1

numero++
numero--
```

## Ajustar +- la condición del bucle


## Bucle for (para)

Declara un contador en la definición. 

Sintaxis: 

for (punto de partida; condición; contador/paso)

```
let i; 
for (i = 0; i <= 5; i++) {
	console.log('Hola!')
}
```

Imprimir cada 3er numero del 3 al 22

```
for (let i = 3; i <= 22; i += 3) {
	console.log(i); 
}
```

Out: 

3
6
9
12
15
18
21


## No optimización: usar operador resto %, prueba divisibilidad; chequea todos los valores

##### Si i es divisible por 3, el resto es 0; se mostrará cuál valor de i cumple con esa condición.

```
for (let i = 3; i <= 22; i++) {
	if (i % 3 === 0) {
		console.log(i); 
	}
}
``` 


### Sobreoptimización: perdida de tiempo y dinero sobreoptimizando algo que no se va a usar mucho


# Iterando a través de arrays

Vamos a usar o transformar u operar cada valor de una lista. 

Usamos un for para iterar la lista y obtener un valor transformado. 

```
const animales = ['gatos', 'perros', 'caballos']; 

for (let i = 0; i < animales.length; i++) {
	console.log(animales[i]); 
}
```

### i < animales.length si ponemos <= no accede a los indices, no existe ese valor: para 3 elementos (animales.length) los indices solo 0, 1 y 2. No llega al valor 3.  


### Nombrar listas: el nombre tiene que estar en plural



# Bucles y lógica

Bucles (while y for) junto con los condicionales (if-else)

## Ej: contamos de 10 a 0 (bucle) e imprimimos todos los números (fuerza bruta); cuando llegamos al medio (5 en este caso), imprimimos 'Estamos en el medio' (lógica)

```
for (let i = 10; i >= 0; i--) {
	if (i === 5) {
		console.log('Estamos en el medio');
	} else {
		console.log(i);
	}
}
```

## FizzBuzz

Cuenta del 1 al 50 e imprime los números: 

1. Si un número es múltiplo de 3, imprime 'Fizz'
2. Si un número es múltiplo de 5, imprime 'Buzz'
3. Si un número es múltiplo de 3 y 5, imprime 'FizzBuzz'
4. Para todo lo demás imprime el número mismo

Módulo: 

Se lee:

"Resto de dividir 10 por 3"
10 % 3 = 1 -> En 10 tenemos 3*3+1
16 % 4 = 0 -> En 16 tenemos 4*4
19 % 4 = 3 -> En 19 tenemos 4*4+3

Notación matemática: 

Múltiplo/divisor

```
a = b*c
16 = 4*4
```


## Módulo y comparación: primero divide, saca el resto y ese resto lo compará con 0, devolverá un booleano

Código: 

```
a % b = 0 
```

Ej:

Multiplo/divisor de 3
```
a = b*c
3 = 3*1

a % b = 0 
3 % 3 = 0
0 = 0
```


## Código FizzBuzz

```
for (let i = 1; i <= 50; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('FizzBuzz'); 
	} else if (i % 5 === 0) {
		console.log('Buzz'); 
	} else if (i % 3 === 0) {
		console.log('Fizz'); 
	} else {
		console.log(i);
	}
 }
```


## Error en el FizzBuzz: valor 15; como también es múltiplo de 3, va entrar en Fizz y el código vuelve al control

Cuando entra en un valor ya no entra a los demás. 

```
for (let i = 1; i <= 50; i++) {
	if (i % 3 === 0) {
		console.log('Fizz'); 
	} else if (i % 5 === 0) {
		console.log('Buzz'); 
	} else if (i % 3 === 0 && i % 5 === 0) {
		console.log('FizzBuzz'); 
	} else {
		console.log(i);
	}
 }
```

## Optimizaciones al FizzBuzz

1. Múltiplo de dos números: multiplicar esos múltiplos.

De: 

```
if (i % 3 === 0 && i % 5 === 0)

```

A: 

```
if (i % 15 === 0)
```

# Optimización del bucle: evitar if interno en cada paso

##### Es normal que un bucle for chequee la condición (suya) en cada iteración

##### Si podemos evitar el paso de chequear la condición del if interno que se encuentra en dentro del bucle. 

##### Necesitamos mover esa lógica especial y cambiar la lógica del bucle

1. Código separado para el caso especial

```
for (let i = 10; i >= 0; i--) {
	if (i !== 5) {
		console.log(i);
	}
}
console.log('Estamos en el medio');

```

Esto funciona porque sabés de antemano que 5 será parte del bucle, y podés simplemente sacarlo del flujo y manejarlo por separado.

Out:

```
10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
Estamos en el medio
```



2. Separar el bucle en tres partes

```
for (let i = 10; i > 5; i--) {
	console.log(i);
}

console.log('Estamos en el medio');

for (let i = 4; i >= 0; i--) {
	console.log(i);
}
```

No hay if dentro del bucle. 

El flujo es lineal, y cada cosa está en su lugar.


3. Tabla de acciones (más genérico):

Si en lugar de un único caso especial tuvieras múltiples, podrías usar un objeto con funciones por índice:

```
const actions = {
	5: () => console.log('Estamos en el medio'),
};

for (let i = 10; i >= 0; i--) {
	if (actions[i]) {
		actions[i]();
	} else {
		console.log(i);
	}
}
```

Esto sigue teniendo un if, pero centralizado y flexible.

En muchos casos, el motor de JS lo puede optimizar mejor que un if ===.


##### Usá if si tenés pocos casos especiales y te importa el rendimiento.

##### Usá tabla de acciones si tenés muchos casos distintos, o si querés separar la lógica de ejecución.


Ambas formas verifican si hay que hacer algo especial para i === 5, pero lo hacen de forma diferente:

1. 

if (i === 5) es una comparación directa.

`actions[i]` es una búsqueda en objeto, luego un chequeo de falsedad, y una llamada condicional.

2. 

La tabla de acciones es más lenta que un if simple en la mayoría de los motores JavaScript, por dos razones:

Hay una búsqueda en un objeto (actions[i]) que no está optimizada como una comparación directa.

Se crean y evalúan funciones anónimas en cada iteración (() => {}), aunque no se ejecuten


# Medio: matemáticas y programación

1. mat:

Mitad de un valor o una cantidad

1.1 Media aritmética:

promedio de un conjunto de números

sumando todos los números y dividiendo por la cantidad de números


1.2 Medio de un segmento:

punto que divide un segmento en dos partes iguales.


2. Programación:

2.1 Algoritmos de búsqueda:

medio de un arreglo o una lista es el elemento que se encuentra en la mitad del arreglo o lista.


2.2 geometría computacional:

el medio de un segmento se utiliza para calcular la posición de un objeto en un espacio bidimensional o tridimensional.


## Medio de una lista impar

JS: 

1.1 `arr.length / 2` para obtener el índice del elemento medio de un arreglo.

1.2 `(a + b) / 2` para calcular la media de dos números.


```
arr = [1, 2, 3, 4, 5];
```

```
1. arr.length / 2
5/2 = 2,5

2. (a + b) / 2:
(1+2+3+4+5) / 2 = 7,5 (indice que no existe)
```


## Medio de una list par

```
arr = [1, 2, 3, 4]
```

Siguiendo:

```
1. arr.length / 2
4/2 = 2

2. (a + b) / 2:
(1+2+3+4) / 2 = 5 (indice que no existe)
```


Posibilidades:

1. Devolver ambos medios

2. Devolver la media de los medios: calculando la media de estos dos (suma a+b/div cant-2-)

3. Devolver un rango: que incluya ambos elementos


## Código Devolver medio de lista con cantidad par e impar

```
function getMiddle(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  } else {
    return [arr[middleIndex]];
  }
}

const arrPar = [1, 2, 3, 4];
console.log(getMiddle(arrPar)); // Output: [2, 3]

const arrImpar = [1, 2, 3, 4, 5];
console.log(getMiddle(arrImpar)); // Output: [3]
```


## Código medio lista cantidad par

```
function getMiddle(arr) {
  const middleIndex = arr.length / 2;
  return [(arr[middleIndex - 1] + arr[middleIndex]) / 2];
}

const arr = [1, 2, 3, 4];
console.log(getMiddle(arr)); // Output: [2.5]

```

Devuelve un arr: `return[//]`

Devolver valor simple (entero/float): `return()`


Alternativa:

Devuelve un arreglo con los dos elementos que se encuentran en el medio de la lista.

```
function getMiddle(arr) {
  const middleIndex = arr.length / 2;
  return [arr[middleIndex - 1], arr[middleIndex]];
}

const arr = [1, 2, 3, 4];
console.log(getMiddle(arr)); // Output: [2, 3]
```


## Código medio de una lista con cantidad/long impar

```
function getMiddle(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  return arr[middleIndex];
}

const arr = [1, 2, 3, 4, 5];
console.log(getMiddle(arr)); // Output: 3
```

1. Calcula un medio/media/promedio: `arr.length / 2`

2. Redondear: `Math.floor` hacia abajo al entero más cercano.



# Redondeo

Aproximar un número a un valor entero o a un número de decimales específicos

1. Math.round(x): redondea el número x al entero más cercano

Si la parte decimal es menor que 0.5, se redondea hacia abajo

Si la parte decimal es mayor o igual que 0.5, se redondea hacia arriba.

2. Math.floor(x): redondear x hacia abajo al entero más cercano.

3. Math.ceil(x): redondea el número x hacia arriba al entero más cercano.

4. toFixed(n): redondea el número a n decimales.

```
Math.round(3.7): devuelve 4
Math.floor(3.7): devuelve 3
Math.ceil(3.7): devuelve 4
3.14159.toFixed(2): devuelve 3.14
```


# Divisibilidad 

Cuando un número puede ser dividido por otro número sin dejar resto.

1. entero `a` es divisible por otro número entero `b`:

si existe un número entero `c` tal que:

```
a = b * c
```

o

2. si a se puede expresar como un múltiplo de b:

se dice que a es divisible por b.

```
12 es divisible por 3 porque 12 = 3 × 4
15 es divisible por 5 porque 15 = 5 × 3
7 no es divisible por 3 porque no existe un número entero que multiplicado por 3 dé 7
```

Progr:

## 1. Verificar si un número es múltiplo de otro:

utilizar el operador de módulo (%)

```
a % b === 0 indica que a es divisible por b.

```

```
function esDivisible(a, b) {
  return a % b === 0;
}

console.log(esDivisible(12, 3)); // true
console.log(esDivisible(15, 5)); // true
console.log(esDivisible(7, 3)); // false

```

2. Encontrar los divisores de un número: 

se puede utilizar un bucle para encontrar todos los divisores de un número


3. Realizar operaciones aritméticas: 

la divisibilidad se utiliza en operaciones aritméticas como la división y el cálculo de porcentajes.  


## Cálculo: divisibilidad y no divisibilidad

```
a÷b=c con resto r
```

c es el cociente y r es el resto.

1. a es divisible por otro número b si y solo si el resto r es igual a 0

```
Si r = 0, entonces a es divisible por b.
Si r ≠ 0, entonces a no es divisible por b.
```

Ej: verificar si 17 es divisible por 5.

17 ÷ 5 = 3 con resto 2.

Como el resto es 2, 17 no es divisible por 5.


Con módulo o resto (%): 

```
a%b=0
```


# Múltiplo

Múltiplo de un número:

Resultado de multiplicar ese número por un número entero

si tenemos un número "a" y lo multiplicamos por un número entero "n", el resultado es un múltiplo de "a".

1. b es un múltiplo de un número a si existe un número entero n tal que:

```
b=a⋅n
```

6 es un múltiplo de 2 porque 6 = 2 × 3
12 es un múltiplo de 4 porque 12 = 4 × 3
15 es un múltiplo de 5 porque 15 = 5 × 3


Código número multiplo de otro:

```
function esMultiplo(a, b) {
  return a % b === 0;
}

console.log(esMultiplo(6, 2)); // true
console.log(esMultiplo(12, 4)); // true
console.log(esMultiplo(15, 5)); // true

```


# Paridad

Si se puede dividir por 2 sin dejar resto, de lo contrario es impar. 

1. a es par si existe un número entero n tal que 

```
a=2⋅n
```

2. a es impar si no existe un número entero n tal que:

```
a=2⋅n
```

o

```
a = 2⋅n+1
```

4 es un número par porque 4 = 2 × 2
3 es un número impar porque no existe un número entero que multiplicado por 2 dé 3


## Código par o impar

Utilizar el operador de módulo/resto (%)

```
a % 2 === 0
```

```
function esPar(a) {
  return a % 2 === 0;
}

console.log(esPar(4)); // true
console.log(esPar(3)); // false
```



# Manipular HTML y CSS con JS

El navegador renderizará los elementos HTML y los estilos de CSS.

HTML y CSS son lenguajes declarativos, no lógicos. 

JS tiene acceso al DOM que es una representación en código de los elementos que hay en la página.

Con este acceso podemos modificar el HTML y CSS. 


## SEO: primero cargar CSS y por último JS 

Valoran la velocidad de carga de una web.

Si cargamos último el css, las páginas se ven con el estilo por default de los navegadores, no es estetico y puede auyentar a los usuario.


1. CSS en la etiqueta head usando la etiqueta link. 

```
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="main.css">
</head>
```

meta es la información/descripción de la página 

charset="UTF-8" son los caracteres que el sitio va a decodificar. 

link 

rel

href

2. JS al final del body con la etiqueta script. 

```
<script src="main.js"></script>
```


## CSS: Especificidad de los estilos

El estilo se aplica en cascada


### Funcionamiento en cascada 

Cuando aplicamos selectores de más peso se sobreescriben los estilos

```
body {
	background-color: red;
}

p {
	color: white; 
}

p.importante {
	color: red; 
	background-color: white;
}

#super-importante {
	font-weight: bold;
}

#parrafo-5 {
	color: black;
	background-color: white;
}
```

##### Si tienen la misma especificidad, el último va a reemplazar al anterior.


### Debuggear CSS

En las herramientas del navegador, en layout vemos las reglas por default y las reglas que la fueron reemplazando. 

La primera es la que se aplica, la anterior es la que reemplazó.



# Manipular el DOM con JS

## Elementos de Acceso

DOM: 

Representación en JS del elemento HTML que está siendo utilizado. 

Esta disponible bajo una variable global llamada `document`.

Podemos obtener `nodos` especificos (elementos de página) con el método:  

`.querySelector`.


Ej: Obtener link de twitter desde la página con CSS

```
const nuestroTwitter = document.querySelector('.twitter');
```

1. Podemos guardar elementos de la página en variables.

2. Los elementos de la página son objetos.

3. Son un tipo de referencia, así como lo pueden ser los arrays. 

4. Gracias a esto, podemos cambiar los atributos y propiedades del elemento. 

5. Pero no cambiará la variable en si misma. 


Ej: obtener la etiqueta h1 de la página y guardala en una variable:

1. Tiene que llamarse nuestroTitulo

2. Usar console.log para ver lo obtenido.

```
const nuestroTitulo = document.querySelector('h1');
console.log(nuestroTitulo);
```

## Objeto/elemento document 

Hace referencia al documento HTML que contiene el archivo JS. 

Desde el cual vamos a manipular los elementos y los estilos.

Asi como el elemento u objeto console hace referencia a la consola del navegador. 


##### .querySelector: solo toma el primer elemento


## Obtener elementos similares: .querySelectorAll

Obtener todos los elementos que tengan el mismo selector. 

Podemos obtenerlos a todos y lo guardará en un NodeList que es parecido a un array. 

Podemos manipularlo como un array. 

Accediendo por indice, cambiando el valor, agregando un valor al final, etc. 

Acceder a los métodos que tiene NodeList como length.

Ej: Obtener todos los <li> de la página

```
const mediaLinks = document.querySelectorAll('li');
console.log(mediaLinks[0]);
console.log(mediaLinks[1]);
console.log(mediaLinks[2]);
console.log(mediaLinks.length);
```

Y por supuesto iterarlo para transformarlo. 

```
for (let i = 0; i < mediaLinks.length; i++) {
	console.log(i);
}
```

##### Cantidad de elementos vs indices: los indices van desde 0, pero los elementos se cuentan desde 1; si queremos procesarlos tenemos que restar 1. 


# Manipular propiedades de los elementos HTML: acceso a su contenido 

##### HTML y CSS son estáticos, no tienen funcionalidad. Si le sumamos JS podemos darle interactividad a la página y cambiar lo que el navegador renderizó o le mostro al usuario. 

JS: agrega dinamismo a las páginas web. 

Mediante el DOM logra acceder a cada elemento y poder modificarlo.

Ej, si queremos obtener solo el texto de un h1 y para todos los elementos.

La propiedad para esto es `.textContent`

```
console.log(nuestroTwitter.textContent);
```

Obtenemos el texto: "Twitter: @etc, @etc, @etc"


## Concatener métodos y propiedades

Ej, obtener el contenido del h1 y mostrarlo

```
const nuestroTitulo = document.querySelector('h1').textContent;
console.log(nuestroTitulo)
```


## APIs

Conjunto de objetos que tiene propiedades y métodos expuestos para su uso.


## Estructura del código JS

Ej: document.querySelector('h1').textContent; 

```
document: objeto
.querySelector('h1'): método y param
.textContent: propiedad
```



# Editar contenido de la página

No solo leer su valor, sino cambiarlo. 

Llamamos a la propiedad y le damos un nuevo vaor. 

```
const nuestroTwitter = document.querySelector('.twitter');
nuestroTwitter.textContent = '@abcd';
```

Cambiar el titulo de la página:

```
const nuestroTitulo = document.querySelector('h1');
nuestroTitulo.textContent = "ASDFJLKJ";
console.log(nuestroTitulo);
```


# Editando atributos

Cambiar y establacer atributos en nuestro elemento. 

```
const nuestroTwitter = document.querySelector('.twitter');
ourTwitter.id = "sorpresa"
```

## Estructura del código

Ej: document.querySelector('img').src = 'kittens.jpeg';


## Carga o ejecución de los recursos del HTML: assets

Primero se carga el texto del sitio. 

Después los recursos/rutas/contenido

Entre los que está el CSS y el contenido media (img, vid).

Todo en orden en el que aparece. 



# Editando estilo

Los elementos tiene una propiedad `.style`.

Podemos asignarle estilo a esta propiedad utilizando los mismos nombres de CSS. 

La diferencia está en que la barra media '-' se elimina y se une el nombre con camelCase.

```
const nuestroTwitter = documento.querySelector('.twitter');
nuestroTwitter.style.backgroundColor = 'red';
```



# Crear nuevos nodos (elementos)

El DOM se compone como un árbol jerárquico de elementos.

El objeto `document` nos permite maneras de crear nodos desde cero.

1. `document.createElement('div')`: 
nuevo elem llamado div

2. `document.createTextNode('foobar')`: 
nuevo texto que contiene 'foobar'

3. `existingNode.appendChild(newNode)`: 
agrega newNode al final de existingNode

```
const nodoPagina = document.querySelector('body');
const nuevoParrafo = document.createElement('p');
const textoParrafo = document.createTextNode('Yeeeeeha');
nuevoParrafo.appendChild(textoParrafo);
nodoPagina.appendChild(nuevoParrafo);
```

##### Los elementos creados y editados los tenemos que agregar a un nodo existente/visible; por eso primero seleccionamos al body. De lo contrario quedan en memoria 


## Alternativa a document.createTextNode:

Tomamos el nuevo parrafo creado que guardamos en una variable

Usamos la propiedad `.textContent`

```
const nuevoParrafo = document.createElement('p');
const textoParrafo = document.createTextNode('Yeeeeeha');

nuevoParrafo.textContent = 'Yeeeeeha';
```

## Ejercicio

Crear un nuevo nodo de imagen que contenga la imagen anterior y agregala al header.

Agregarle un estilo

```
const cabecera = document.querySelector('header');
const nuevaImg = document.createElement('img');
nuevaImg.src = 'logo.jpeg';
cabecera.appendChild(nuevaImg);
nuevaImg.style.borderRadius: 10em;
```


## Nombrar elementos 

Para diferenciarlos de otros objetos

```
const saludo = 'Bienvenido'; 
const elementoSaludo = document.querySelector('h1');
const nodoSaludo = document.querySelector('h1');
```

Usar un nombre simple para un elemento HTML o un nuevo nodo es poco representativo

```
const saludo = document.querySelector('h1');
```

O para no ser tan expresivo usamos el signo `$`:

```
const $saludo = document.querySelector('h1');
```

##### El signo $ se usa solo en elemento; no en propiedades como textContent

```
const $saludo = document.querySelector('h1').textContent;
```

Ahí sería mejor usar un nombre simple y expresivo

```
const saludo = document.querySelector('h1').textContent;
```

##### El signo $ también lo podríamos usar para una lista de elementos html (NodeList)

```
const mediaLinks = document.querySelector('li')
```


### Ejercicio corregido

```
const $img = document.querySelector('img');
$img.src = 'woman.jpg'
const $body = document.querySelector('body');
$body.appendChild($img);
```


# Eventos de los elementos (event listener)

Dar respuesta cuando un usuario hace click, aprete un botón, mande un form, etc. 

Ej: Trabajando con eventos

HTML: 

```
<form>
	<input type="text" name="nombre" id="name" placeholder="Ingresá tu nombre" /> 
	<input type="text" name="apellido" id="apellido" placeholder="Ingresá tu apellido" /> 
	<input type="name" name="edad" id="edad" min="0" max="150" placeholder="Ingresá tu edad" /> 
	
	<button id="saludar">Saludar</button>
</form>
```

form: recolecta datos del usuario para procesar. 

input: son los tipos de entrada

Pueden ser de tipo button, checkbox, date, email, file

number, moth, hidden, range, radio, search, text

El atributo name se muestra en el html 

##### Por default al apretar en un elemento button se envia. 

Hay que desactivar ese comportamiento


JS: 

##### El param e se refiere al evento que va a suceder/que va a activar el usuario.

Nosotros tenemos que escuchar/capturar ese evento. 

Queda en el param e. 

##### e tiene métodos y props

JS: 

```
const $form = document.querySelector('form');
$form.addEventListener('submit', function(e){
	e.preventDefault(); 
	return false; 
});
```


## Clave: Registrar los valores ingresados: cuando el usuario haga click en el botón

Puede ser una accion como saludo, calculo, etc. 

En ese momento tenemos que saber/leer/registrar que es lo que introdujo el usuario. 

```
const $saludar = document.querySelector('#saludar');
```

$ marca que guardamos un elemento html y no otra cosa. 


## Agregar addEventListener

Al elemento HTML que guardamos anteriormente y que apunta al botón de la acción: 

Le agregamos un método `.addEventListener()`

Va a tomar como primer parametro la acción que esperamos del usuario. 

Puede ser un click. 

El segundo elemento es la acción que vamos a devolver cuando se produzca ese click o acción del usuario.

```
const $saludar = document.querySelector('#saludar');
$saludar.addEventListener('click', function(){
	const edad = document.querySelector('#edad').value;
	console.log(edad); 
});
```

Esta prueba registra la edad que hay en su campo cuando el usuario hace click en el elemento saludar que es el que tiene el evento. 

Esa función la podemos escribir fuera y pasarla como nombre de param a addEventListener.

```
Function manejarClickSaludar() {
	const nombre = querySelector('#nombre').value; 
	const apellido = querySelector('#apellido').value;
	const edad = querySelector('#edad').value; 
	console.log(nombre, apellido, edad);
}

const $saludar = document.querySelector('#saludar');
$saludar.addEventListener('click', manejarClickSaludar);

```

##### Dentro de la función manejadora las constantes no tiene el signo $ porque son valores y no elementos.


## String interpolation

```
console.log(`Hola ${nombre} ${apellido}, tu edad es ${edad}`);
```


## Crear elementos en el manejador de eventos para ui/ux

```
Function manejarClickSaludar() {
	const nombre = querySelector('#nombre').value; 
	const apellido = querySelector('#apellido').value;
	const edad = querySelector('#edad').value; 
	const saludo = `Hola ${nombre} ${apellido}, tu edad es ${edad}`);
	
	const $saludo = documentCreateElement('p');
	$saludo.textContent = saludo;
	document.querySelector('body').appendChild($saludo);
}
```

##### Nombre del elemento creado en manejador: $ si creamos un elemento y además que el nombre exprese qué va a ser ese elemento


## Corrección del manejador de evento

Al hacer click va a repetir los datos ingresados. 

En el html hardcodeamos un parrafo vacío con su respectivo id, clase, etc. 

HTML: 

```
<form>
	<input type="text" name="nombre" id="name" placeholder="Ingresá tu nombre" /> 
	<input type="text" name="apellido" id="apellido" placeholder="Ingresá tu apellido" /> 
	<input type="name" name="edad" id="edad" min="0" max="150" placeholder="Ingresá tu edad" /> 
	<button id="saludar">Saludar</button>
	
	<p id="saludo">!-- --></>

</form>
```

Con `<!-- -->` marcamos que está vacío de forma intencional. 


JS: 

```
Function manejarClickSaludar() {
	const nombre = querySelector('#nombre').value; 
	const apellido = querySelector('#apellido').value;
	const edad = querySelector('#edad').value; 
	const saludo = `Hola ${nombre} ${apellido}, tu edad es ${edad}`);
	
	document.querySelector('#saludo').textContent = saludo;
	
}
```

### Ventaja de la corrección: cada vez que cambiamos los datos y apretamos en el botón va a reemplazar a los anteriores 


Rs: 

1. Evitamos que el form se envie (submit action)

2. Tomar el botón del form y agregarle un addEventListener como ref, sin ejecutarla escribiendo los parentesis ()

3. En la función manejadora vamos a tomar los valores de los input de entrada del form, con el objetivo de mostrar esos datos

4. Crear un elemento vacío para mostrar/introducir esos datos y se guarden ahí: Para evitar que se muestren repetidamente los datos ingresados al hacer muchos clicks


##### Dentro de la función manejadora podemos usar los objetos y funciones cuyas características nos sean convenientes según lo que necesite el objetivo, como arrays para listas, diccionarios para clave valor; etc. 


## Rs eventos: para dar respuesta a la interactividad del usuario


## Claves: 

1. Cuando registrar los datos

2. Crear la función aparte

3. Agregar esta función al event listener sin llamarla

4. Prevenir el comportamiento por default para todo el form y no para los botones solamente

Si agregamos más botones, se va a activar su comportamiento por defecto que es enviar datos. 

5. Los eventos si van en los botones particulares

En ese evento o momento en particular, tomamos los valores de los inputs

6. Crear el elemento vacío para mostrar los resultados. 


## Ejercicio promedio

Array de inputs, empezar con tres pero pueden ser cualqueir cantidad. 

Al no saber la cantidad de elementos (muchos, pocos) da la pauta de que necesitamos algo dinámico. 

No sabemos de antemano cuál va a ser la lista. 

No hardcodear `elem[0], elem[1],  elem[02]`, usar array.

Tomar tres números, cuando el usuario haga click en un botón calcular; mostrar el promedio


Condiciones: 

No hardcodear los inputs, dado que un promedio tiene muchas sumas y elementos.

Necesitamos dinámismo porque no sabemos la cantidad de inputs, información o datos. 

Necesitamos una estructura dinámica (sin limite) como un array. 


Código: 

Seguir las reglas para los nombres de los elementos, valores, etc. 

Nombres completos


## Solución ejercicio

1. lista de inputs dinamico, al seleccionar cantidad 3, que aparezcan 3 inputs

Esto es una función js que crea los inputs que sean 

O se puede hacer desde el html

2. tomar todos los valores de esa lista

3. funcion manejadora: lógica `sum(valuesOfArr)/arr.length`

4. elem vacío/resutlado, prevenir default, etc

dentro del form o del body


HTML:

Elementos del html:

form, inputs, buttons, p

```
<form>

<button></button>
</form>

<p></p> 
```


JS: 

Lógica: 

1. preventDefault()

2. tomar elem, tomar valores:

selector, selectorAll, .value; .values(?)

3. Crear elementos: 

4. editar texto: 

.textContent


### 1. Manejar inputs

1. en html necesito:
un input number (registrar cantidad de inputs)  
y botón para la acción (crear la cantidad de inputs)

en js (def func) 


### 2. Tomar los valores de todos esos inputs

Los inputs anteriores deben estar en un li (NodeList?)

1. Calculo: 

query.SelectorAll('li').values

sum(valuesOfArr)/arr.length

for para la suma ?


### App Promedio

#### 1. inputs dinámicos

1. Un input (o select) para que el usuario elija cuántos inputs quiere.

2. Contenedor vacío donde se generarán los inputs.

3. Script JS que escuche ese valor y cree los inputs dinámicamente.

HTML:

```
<form id="formulario">
  <label for="cantidad">Cantidad de números:</label>
  <input type="number" id="cantidad" min="1" />
  <button type="button" onclick="generarInputs()">Generar</button>

  <div id="inputs"></div>
</form>
```

JS:

```
function generarInputs() {
    const cantidad = parseInt(document.querySelector("#cantidad").value);
    const contenedor = document.querySelector("#inputs");

    contenedor.textContent = ""; // Limpiar si ya había inputs antes

    for (let i = 0; i < cantidad; i++) {
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = `Número ${i + 1}`;
      contenedor.appendChild(input);
      contenedor.appendChild(document.createElement("br"));
    }
  }

```


#### 2. Capturar el valor que les entre a esos inputs creados dinámicamente

```
function leerValores() {
    // Selecciona todos los input que están dentro de #inputs
    const inputs = document.querySelectorAll("#inputs input");
    // Crea un array con sus valores
    const valores = Array.from(inputs).map(el => el.value);
    console.log(valores);
    alert("Valores: " + valores.join(", "));
  }

```


#### 3. Calcular promedio de los valores

1. Convertir cada valor de texto a número (por ejemplo con Number() o el operador +).

2. Filtrar los que no sean numéricos (NaN).

3. Sumar el array de números.

4. Dividir por la cantidad de elementos válidos.

```
function calcularPromedio() {
// 1) Agarrar todos los inputs
const inputs = document.querySelectorAll("#inputs input");
// 2) Convertir y filtrar
const numeros = Array.from(inputs)
  .map(el => +el.value)          // convierto a número
  .filter(n => !isNaN(n));       // quito los NaN

if (numeros.length === 0) {
  alert("No ingresaste ningún número válido.");
  return;
}

// 3) Sumar
const suma = numeros.reduce((acc, n) => acc + n, 0);
// 4) Calcular promedio
const promedio = suma / numeros.length;

//alert(`Promedio: ${promedio}`);
console.log({numeros, suma, promedio});

//crear o mod elem (vacío) para mostr el valor 
//de la const promedio

```

Number() o +valor para convertir.
Filtrá con isNaN.
Calculá suma con reduce y después el promedio = suma / cantidad.
Mostrá el resultado con alert, console.log o inyectándolo en el DOM.



#### 4. Elemento vacío o nuevo para mostrar la constante promedio

```
//html
<p id="promedio">!-- --></>

//js
const promedio = suma / numeros.length;
document.querySelector('#promedio').textContent = promedio;

```



## RS ejercicio evento

1. preventDefault() a todo el form, evita que nuevos botones tengan comportamiento default de enviar datos

2. Tomar un botón, agregarle un evento

3. Escribir la función para ese botón y tomar los valores de las entradas

4. Dentro de la funció manejadora de eventos podemos usar distintas estructuras de datos

Componentes

1. HTML: 

Elementos del html:

form, inputs, buttons, p


2. JS: 

Lógica: 

1. preventDefault()

2. tomar elem, tomar valores:

selector, selectorAll, .value; .values(?)

3. Crear elementos: 

4. editar texto: 

.textContent


## App Promedio corregida

HTML: 

```
<form>
	<input type="number" placeholder="Ingresá un número"/>
	<input type="number" placeholder="Ingresá un número"/>
	<input type="number" placeholder="Ingresá un número"/>
	
	<button id="calcular">Calcular</button>
	
	<p>El promedio es <span id="resultado"><!-- --></span></p>
</form>
```

### Class vs Id

##### Los elementos que tiene id deben ser únicos como calcular o resultado (un solo cálculo y un solo resultado)

##### Los elementos que se repiten usan clases por que se pueden repetir

EJ: Id

##### 1. Distintos inputs que capturan distintas cosas a pesar de ser texto. Eso los hace únicos

```
<input type="text" name="nombre" id="name" placeholder="Ingresá tu nombre" /> 
<input type="text" name="apellido" id="apellido" placeholder="Ingresá tu apellido" /> 
<input type="name" name="edad" id="edad" min="0" max="150" placeholder="Ingresá tu edad" /> 
```

##### 2. Únicos id, únicos elementos

```
<button id="calcular">Calcular</button>
<p>El promedio es <span id="resultado"><!-- --></span></p>
```


##### 3. Clases: mismo botón, elem; misma clase. Uso de clases

HTML: 

```
<form>
	<input type="number" class="numero" placeholder="Ingresá un número"/>
	<input type="number" class="numero" placeholder="Ingresá un número"/>
	<input type="number" class="numero" placeholder="Ingresá un número"/>
	
	<button id="calcular">Calcular</button>
	
	<p>El promedio es <span id="resultado"><!-- --></span></p>
</form>
```


### Tomar elementos con clases 

JS: 

```
const $numeros = document.querySelectorAll(".numeros");
console.log($numeros); 
```

Nos devuelve un NodeList: 

```
[input.numero, input.numero, input.numero]
```
0: input.numero
1: input.numero
2: input.numero

Si en un futuro agregamos más inputs hardcodeados 

el array `$numeros` los va a capturar


## Crear algoritmo desde 0: hacer pequeñas cosas y probar que funcionan

Tomar una pequeña idea o pista y convertirlo en código

Ej: tomar los inputs y mostrarlos. 

Después tenemos que hacer el cálculo. 

Y para eso tomar los valores de los inputs. 

Y eso solo lo queremos cuando el usuario haga click


1. Agarrar el botón calcular

```
const $numeros = document.querySelectorAll(".numeros");
console.log($numeros); 

const $calcular = document.querySelector("#calcular");
```

##### Problemas con el nombre de los elementos: si le ponemos de nombre botón calcular y después cambian ese botón por otra cosa no es mantenible, entonces usamos $


2. Agregarle un evento

```
const $numeros = document.querySelectorAll(".numeros");
console.log($numeros); 

const $calcular = document.querySelector("#calcular");
$calcular.addEventListener('click', function() {
	console.log('se está ejecutando la función calcular');
});
```


3. Prevenimos que se envie el formulario al hacer click en calcular

Debemos tomar el elemento form para quitarle esa funcionalidad a todos sus nodos hijos botones.

##### Al form debemos pasarle el evento submit y el objeto evento con el metodo preventDefault()

```
const $form = documento.querySelector('form');
$form.addEventListener('submit', function(e){
	e.preventDefault(); 
});
```

### Uso del bucle for: tomar todos los valores de un mismo elem/arr/NodeList llamado $numeros con clase numeros

##### La propiedad value es un texto por más que el input sea number

```
const $numeros = document.querySelectorAll(".numeros");
console.log($numeros); 

const $calcular = document.querySelector("#calcular");
$calcular.addEventListener('click', function() {
	let suma = 0;
	for(i = 0; i < $numeros.length; i++) {
		suma += Number($numeros[i].value);
	}
	
	const promedio = suma/$numeros.length;
	
	document.querySelector('#resultado').textContent = promedio;
});
```

### Mostrar en pantalla el resultado de la función manejadora

Agarrar el elemento vacío reservado para eso

editar su contenido

```
const $resultado = querySelector('#resultado'); 
$resultado.textContent = promedio; 
```

o

```
document.querySelector('#resultado').textContent = promedio;
```

### Redondear resultado

Math.round(x): para abajo y arriba (según los decimales)

Math.floor(x): para abajo

Math.ceil(x): para arriba


# SRP: Principio de Separación de Resposabilidades

##### La función del ejercicio hace y sabe demasiadas cosas: busca elementos, los calcula y coloca el resultado en el html

Si necesitamos calcular dos promedios tendríamos que copiar y pegar la función

```
$calcular.addEventListener('click', function() {
	let suma = 0;
	for(i = 0; i < $numeros.length; i++) {
		suma += Number($numeros[i].value);
	}
	
	const promedio = suma/$numeros.length;
	
	document.querySelector('#resultado').textContent = promedio;
});
```

## Cambios SRP

```
const $numeros = document.querySelectorAll(".numeros");

const $calcular = document.querySelector("#calcular");
$calcular.addEventListener('click', function() {
	let suma = 0;
	for(i = 0; i < $numeros.length; i++) {
		suma += Number($numeros[i].value);
	}
	
	const promedio = suma/$numeros.length;
	
	document.querySelector('#resultado').textContent = promedio;
});

const $form = documento.querySelector('form');
$form.addEventListener('submit', function(e){
	e.preventDefault(); 
});
```

### 1. Que las funciones no dependan de objetos globales 

En el código tenemos un par de objetos globales. 

Las funciones los estaban usando

```
const $numeros = document.querySelectorAll(".numeros");

const $calcular = document.querySelector("#calcular");

const $form = documento.querySelector('form');
```

Esos objetos va a ir adentro de cada función que lo necesite. 

La función manejadora del calculo es la que interactua con el DOM y necesita de $numeros

```
$calcular.addEventListener('click', function() {
	const $numeros = document.querySelectorAll(".numeros");
	
	let suma = 0;
	for(i = 0; i < $numeros.length; i++) {
		suma += Number($numeros[i].value);
	}
	
	const promedio = suma/$numeros.length;
	
	document.querySelector('#resultado').textContent = promedio;
});
```


### 2. Crear la función que solo se dedique a hacer el cálculo independientemente de como esté compuesto el HTML para que pueda ser reutilizado en otro entorno

Estabamos metiendo cosas de un html en particular a la función de cálculo

#### Parametro de la funcion: dado que su nombre está en plural, nos dice que es una lista/array de numeros; entonces, esta función va a tomar un array

```
function calcularPromedio(numeros) {	
	let suma = 0;
	for(i = 0; i < numeros.length; i++) {
		suma += numeros[i];
	}	
	
	return suma/numeros.length;
}
```


### 3. Modificando función manejadora de eventos: Ya no va a calcular el promedio, va a llamar a la función promedio. Solo va a crear el array

##### Manejará código concreto, conoce el HTML que trata; si es un promedio; y el html se trata de notas, esa será su escencia. 

##### La función abstracta anterior no tiene nada que ver con lo que trata el html y calcular un promedio puede ser para cualqueir entidad que necesite un promedio en esa función se hablaba solo de números

En esta función si podemos espeficicar que objeto trata como:

`const notas = [];`

```
$calcular.addEventListener('click', function() {
	const $notas = document.querySelectorAll(".nota");
	
	let notas = [];
	for(i = 0; i < $notas.length; i++) {
		notas.push(Number($notas[i].value));
	}
	
	const promedio = calcularPromedio(notas);
	
	document.querySelector('#resultado').textContent = promedio;
});
```

En el HTML

```
<form>
	<input type="number" class="nota" placeholder="Ingresá una nota"/>
	<input type="number" class="nota" placeholder="Ingresá una nota"/>
	<input type="number" class="nota" placeholder="Ingresá una nota"/>
	
	<button id="calcular">Calcular</button>
	
	<p>El promedio es <span id="resultado"><!-- --></span></p>
</form>
```

##### La función calcular promedio ni siqueira sabía de la existencia del DOM, el manejador de eventos si interactua con los elementos y reconoce su identidad/nombre/esencia en sus constantes

##### Vemos que hay dos niveles de abstracción, la función promedio es el más profundo; la función manejadora centraliza el uso y saca los valores del DOM.

##### La función del promedio no sabe que son notas, si está interesada en saber como mostrar el resultado en el DOM, ni redondear ni nada.


### 4. Nuevo formulario para calcular promedio de asistencias

1. Tenemos que hacer un formulario para ello

2. Tenemos que prevenir el comportamiento por default del nuevo form 

3. Tenemos que hacer una función manejadora para las asistencias

3. Los dos formularios usarán la misma función promedio


# El objetivo de la programación es pensar como hacerlo mantenible

## Los algoritmos no tiene que conocer los elementos de html, los elementos de interfaz de Java; ni extraer información, datos, valores de ellos; solo es un mecanismo para calcular y devolver algo, un resultado, etc. 



# PromedioApp real (ui/ux): solo un campo que acepto numero y signo + 



# Ejercicio 2: promedio salario por grupo familiar

Objetivo: practicar el document.createElement

1. Preguntarle al usuario cuantos integrantes hay en el grupo familicar

2. Crear tantos inputs como usuarios haya  

3. Calcular el salario por grupo familiar

4. Agregar botón reset (window reload)

5. Agregar opción para borrar 1 integrante especifico

botón - al lado de cada integrante

Ej: 

1. familia? 5

2. debe crear 5 inputs

3. preguntar cuanto gana el integrante 1-5

4. calcular promedio y mostrarlo


## Solución

1. Preguntarle al usuario cuantos integrantes hay en el grupo familicar

html: 
label, input number, botón toma esa value (nombre crear)

Js: 
prompt (o solo html)


2. Crear tantos inputs como usuarios haya  

func manej al lado del boton 

contenedor vacío 

for al valor/cantidad, en cada iteracion se creará un input

Y lo añadirá al contendor


3. Calcular el salario (promedio) por grupo familiar

func para leer los valores y ponerlos en una estructura

Para pasarselos a la función


4. Agregar botón reset (window reload)

botón vacío (?, la anterior función creao un campo y un boton

funcion manej set todos los valores


5. Agregar opción para borrar 1 integrante especifico

botón que agrego la función generadora de inputs 

func manejadora pop a un elem, apunta a ese indice


## Código

Provisoriamente:

js:

```
const cantidadIntegrantes = Number(prompt('Cuántos integrantes hay?'))
```

html:
```
<div id="Integrantes">
	<!-- --><
/div>
```

Creamos un div para poner los elementos que vayamos creando


Crear inputs de tipo number para el salario: 

Tantas veces como valor del prompt que ponga el usuario

```
for(let i=0; i<cantidadIntegrantes; i++) {
	console.log('Creando inputs de integrantes:', i);
}
```

Testeamos la estructura


Creamos el input

```
for(let i=0; i<cantidadIntegrantes; i++) {
	console.log('Creando inputs de integrantes:', i);
	
	const $input = createElement('input');
	$input.type = "number";
	$input.min = 0;
}
```

### Pensar en la performance 

Ahora necesitamos poner ese input en el div vacío de integrantes 

```
for(let i=0; i<cantidadIntegrantes; i++) {
	console.log('Creando inputs de integrantes:', i);
	
	const $input = createElement('input');
	$input.type = "number";
	$input.min = 0;
	
	document.querySelector('#integrantes').appendChild($input);
}
```

Si ponemos la última instrucción en el for, va a ir y venir del DOM

Por fuera del form vamos a tomar ese div

```
const $integrantes = document.querySelector('#integrantes');

for(let i=0; i<cantidadIntegrantes; i++) {
	console.log('Creando inputs de integrantes:', i);
	
	const $input = createElement('input');
	$input.type = "number";
	$input.min = 0;
	
	$integrantes.appendChild($input);
}
```


## UI/UX

Al for: de la función generadora

1. 

Podríamos agregar un br

```
const $br = document.createElement('br');
$integrantes.appendChild($br);
```

2. Vamos a tener que agregarle un label

```
const $label = document.querySelector('label');
$label.textContent = "Salario del integrange: " + (i + 1) + " ";

$integrantes.appendChild($label);

```

## Comportamiento de label y checkbox: focus

Al hacer click a estos elementos que se ponga el cursor en esos campos


### Propiedad label .for

Su valor tiene que coincidir con el ide del input

```
label for="cheese"
input id="cheese"
```

### Propiedad label .htmlFor

Para los inputs creados por la función generadora

Estos deben tener un id

Definimos por fuera un id (solo es un str) + i

```
const $integrantes = document.querySelector('#integrantes');

for(let i=0; i<cantidadIntegrantes; i++) {
	console.log('Creando inputs de integrantes:', i);
	
	const idIntegrante = "integrante-" + (i+1);
	
	const $label = document.querySelector('label');
	$label.textContent = "Salario del integrange: " + (i + 1) + " ";
	$label.htmlFor = "integrante-" + i;
	
	const $input = createElement('input');
	$input.id = idIntegrante;
	$input.type = "number";
	$input.min = 0;
	
	$integrantes.appendChild($input);
}
```

En el debbuger/html

```
label for="integrante-1"
input id="integrante-1"
```

## Calcular promedio

En el html necesitamos un boton para calcular

```
<button id="calcular"></button>
```

js:

```
const $calcular = document.querySelector('#calcular')
$calcular.addEventListener(...)
```
o

```
document.querySelector('#calcular').addEventListener('click', function(){
	console.log('calcular promedio')
});
```


### Uso de clases para agarrar todos los inputs/elementos

##### No podemos agarrarlos por su id, dado que hicimos que cambia con htmlFor según el nro input/integrante para procesarlo con for y se pose automaticamente el cursor en el campo. No sabemos la cantidad de id que va a haber. 

Necesitamos refactorizar la función generadora de inputs y crearles un class

```
const cantidadIntegrantes = Number(prompt('Cuantos integrantes hay en tu grupo familiar?'));

const $integrantes = document.querySelector('#integrantes');

for(let i=0; i<cantidadIntegrantes; i++) {
	console.log('Creando inputs de integrantes:', i);
	
	const idIntegrante = 'integrante-' + (i+1);
	
	const $label = document.querySelector('label');
	$label.textContent = 'Salario del integrange: ' + (i + 1) + " ";
	$label.htmlFor = 'integrante-' + i;
	
	const $input = createElement('input');
	$input.id = idIntegrante;
	$input.className = 'integrante''
	$input.type = 'number';
	$input.min = 0;
	
	const $br = document.createElement('');
	
	$integrantes.appendChild($input);
	$integrantes.appendChild($label);
	$integrantes.appendChild($br);
}

document.querySelector('#calcular').addEventListener('click', function(){
	console.log('calcular promedio');
});
```

Con la instrucción:

```
document.querySelectorAll('.integrante');
```

Podemos agarrarlos todos a la vez

Out:

```
NodeList(5) [input#integrante-1.integrante, ...]
```
input#integrante-1.integrante: se refiere al elemento, id y clase


### Código que toma todos los valores

#### 1. Debemos guardarlos en una const con nombre plural que signifique una lista, el selectorAll tiene como valor NodeList
#### 2. Crear array interno
#### 3. pushaerlos al array interno: Acceder dentro del for al indice de los valores que vienen del html
#### 4. acceder a los valores de los elementos html con la propiedad .value
#### 5. Recordar que value es texto, convertirlos a Number

```
document.querySelector('#calcular').addEventListener('click', function() {
	console.log('calcular promedio');
	
	const $salarios = document.querySelectorAll('.integrante');
	
	const salarios = [];
	for(let i=0; i<$salarios.length; i++) {
		salarios.push(Number($salarios[i].value);
	}
});
```


## Crear función promedio abstracta: no sabe de entornos, tecnología; solo de entidades

### Error param función abstracta

```
function calcularPromedio(salarios){}
```

Es mejor 

```
function calcularPromedio(numeros){}
```

numeros hacer referencia a pluralidad/valores/lista/arr

```
function calcularPromedio(numeros) {
	let acumulador = 0;
	for(let i = 0; i < numeros.length; i++) {
		acumulador += numeros[i];
	}
	return acumulador / numeros.length;
}
```


## Crear elemento html para mostrar resutlado

```
//html
<p>el promedio de salarios en tu grupo familiar es <span id="promedio"><!-- --><span><p>
//js global
const $promedio = document.querySelector('#promedio');
//addEventListener
$promedio.textContent = promedio; 

```


## Performance

En vez de llamar al promedio en cada iteración del form. 

Lo ponemos global y en el for editamos su contenido

```
const $integrantes = document.querySelector('#integrantes');
const $promedio = document.querySelector('#promedio');
```

Hay cosas que inevitablemente las tenemos que hacer cada vez. 


## Esconder elementos

Al parrafo del resultado le damos un id contenedor-resultado

```
<p id="contenedor-resultado">el promedio de salarios en tu grupo familiar es <span id="promedio"><!-- --><span><p>

```

Para esconder este parrafo y solo aparecerá cuando el usuario haga click en calcular

en js:

```
const $contenedoResultado = document.querySelector('#contenedor-resultado');
$contenedoResultado.style.display = 'none';
```

##### La lineas del elemento y de display none la ponemos arriba de todo

Veremos que ya no aparece el parrafo de resultado hasta que calculen el promedio

##### Ahora en el listener tenemos que cambiar a display: 'block' para mostrar el parrafo de resultado cuando hagan click en calcular 

```
addEvenListener...
	$contenedorResultado.style.display = 'block';
```


## Elemento html para preguntar el numero de integrantes

### Un nuevo form, tendrá un id para prevenir el envio

Html:

```
<form id="form-integrantes">
	<label for="cantidad-integrantes">Ingresá el número de integrantes</label>
	<input type="number" id="cantidad-integrantes" min="0" max="150">
	<button>Siguiente</button>
</form>
```


JS:

# Ahora los inputs se van a crear con el botón siguiente

```
document.querySelector('#form-integrantes').addEventListener('submit', function(e) {
	e.preventDefault();
});
```

Pasamos todo el form que teníamos suelto a este a


## Encontrar Bug: pensar/ver dónde tenemos el error, qué elementos estamos tomando, qué valores se están guardando

Hacer un breakpoint en el manejador de evento que llama a la función abstracta

##### Probar la función en la consola


## Selector más especifico

1. Vamos a seleccionar todos los elementos con clase integrante

```
document.querySelectorAll('integrante');
```

2. Vamos a seleccionar todos los inputs con clase integrante 

```
document.querySelectorAll('input.integrante');
```


## Agregar un botón para resetear

En el último form: form-integrantes

```
<input type="reset" value="limpiar">
```

También podríamos cambiar el botón siguiente por: 

```
<input type="submit" value="siguiente">
```

Quedando: 

```
<input type="submit" value="siguiente">
<input type="reset" value="limpiar">
```

el input limpiar vuelve los valores que habia en el campo a 0. 

Lo hace el tipo reset todo esto sin cambiar el código de lógica


## Borrar elemento especifico: el evento debe estar dentro de otro contexto para reconocerlo

En el evento del nuevo formulario form-integrantes

Que ahora tiene el for que crea todos los elementos dinámicos que necesitaba la página

Creamos:

```
const $removerIntegrante = document.createElement('button');
$removerIntegrante.textContent = 'Remover';

$integrantes.appendChild($removerIntegrante); 
```

Nos creará otro botón al lado de los inputs

Para que tenga funcionalidad debemos crear un evento

```
const $removerIntegrante = document.createElement('button');
$removerIntegrante.textContent = 'Remover';
$removerIntegrante.addEventListener('click', function() {
	console.log('borrando integrante...', $input);
});

$integrantes.appendChild($removerIntegrante); 
```

### Linkear eventos con nuevos elementos creados dinámicamente

Por contexto sabrá que $input son los elementos de este scope.

### También tenemos que borrar los elementos que acompañaban a ese elemento input

Como el label y el br y el nodo agregado ($removerIntegrante)

### Lo ideal sería que cada elemento creado dinámicamente este dentro de un div para tener que solo borrar ese div

### Usando la función .remove(): con cada elemento que acompaña

```
const $removerIntegrante = document.createElement('button');
$removerIntegrante.textContent = 'Remover';
$removerIntegrante.addEventListener('click', function() {
	console.log('borrando integrante...', $input);
	$label.remove();
	$input.remove();
	$removerIntegrante.remove()
	$br.remove();
});
```

### Se borra si mismo, el último nodo agregado

### No usamos indices ni nada y sigue funcionando porque cada vez que pasamos valores a la función calcular promedio en el evento que maneja los valores de html; al clickear, la primera instrucción captura los elementos con la clase .integrente


## Recargar elemento: 

html:

Agregamos otro botón

```
<button id="recargar">Empezar de nuevo</button>
```

Js:

Creamos su eventListener

```
document.querySelector('#recargar').addEventListener('click', function() {
	window.location.reload();
});
```

## Código final

HTML:

```
<form id="formulario-integrantes""
	<label for="cantidad-integrantes">Ingresá el número de integrantes</label>
	<input type="number" id="cantidad-integrantes" min="0" max="50">
	<input type="submit" value="siguiente">
	<input type="reset" value="limpiar">
</form>

<div id="integrantes">
	<!-- -->
</div>

<button id="calcular">Calcular promedio</button>
<button id="recargar">Empezar de nuevo</button>
<p id="contenedor-resultado">el promedio de salarios en tu grupo familiar es <span id="promedio"><!-- --><span><p>
```


JS: 

```
const $contenedorResultado = document.querySelector('#contenedor-resultado');
$contenedoResultado.style.display = 'none';

const $integrantes = document.querySelector('#integrantes');
const $promedio = document.querySelector('#promedio');

document.querySelector('#formulario-integrantes').addEventListener('submit', function(e) {
	e.preventDefault();
	
	const cantidadIntegrantes = Number(document.querySelector('#cantidad-integrantes').value);

	for(let i=0; i<cantidadIntegrantes; i++) {
		console.log('Creando inputs de integrantes:', i);
	
		const idIntegrante = 'integrante-' + (i+1);
	
		const $label = document.querySelector('label');
		$label.textContent = 'Salario del integrange: ' + (i + 1) + " ";
		$label.htmlFor = 'integrante-' + i;
	
		const $input = createElement('input');
		$input.id = idIntegrante;
		$input.className = 'integrante';
		$input.type = 'number';
		$input.min = 0;
		
		const $removerIntegrante = document.createElement('button');
		$removerIntegrante.textContent = 'Remover';
		$removerIntegrante.addEventListener('click', function() {
			console.log('borrando integrante...', $input);
			$label.remove();
			$input.remove();
			$removerIntegrante.remove()
			$br.remove();
		});
	
		const $br = document.createElement('');
	
		$integrantes.appendChild($input);
		$integrantes.appendChild($label);
		$integrantes.appendChild($removerIntegrante);
		$integrantes.appendChild($br);
	}
	
});


document.querySelector('#calcular').addEventListener('click', function() {
	console.log('calcular promedio');
	
	const $salarios = document.querySelectorAll('.integrante');
	
	const salarios = [];
	for(let i=0; i<$salarios.length; i++) {
		salarios.push(Number($salarios[i].value);
	}
	
	const promedio = calcularPromedio(salarios);
	$promedio.textContent = promedio; 
	$contenedorResultado.style.display = 'block';
});


function calcularPromedio(numeros) {
	let acumulador = 0;
	for(let i = 0; i < numeros.length; i++) {
		acumulador += numeros[i];
	}
	return acumulador / numeros.length;
}

document.querySelector('#recargar').addEventListener('click', function() {
	window.location.reload();
});
```



# Practicas código JS

## Id para elemento que solo aparece una vez

## Clase para tomar varios elementos y crear un arr


## Acceder y calcular NodeList:

### 1. Debemos guardarlos en una const con nombre plural que signifique una lista, el selectorAll tiene como valor NodeList
### 2. Crear array interno
### 3. pushaerlos al array interno: Acceder dentro del for al indice de los valores que vienen del html
### 4. acceder a los valores de los elementos html con la propiedad .value
### 5. Recordar que value es texto, convertirlos a Number


## Separación responsabilidades/código:

### 1. archivo funciones puras
### 2. archivo controladores de eventos - generadores de elementos/ui
### 3. archivo controladores de eventos - recolectores de valores/datos de los elementos
### 4. globales, esconder elem ui, elem vacío



# Git-GitHub

## Sistema de Control de Version

Nos permite guardar los cambios que funciónan. 

Volver al código que estabamos escribiendo. 

Volver a una versión anterior del código. 

En deployment pasamos el código a un servidor de staging, después a uno testing y después a uno de producción. 

En producción es el código que aparece en la rama main de github. 

Es la versión que funciona, que está publicada/deployment y fue testeada, por lo que es segura. 


### Adobe Dreamviewer y Filezilla

Tenía cuatro ventanas: la vista previa del sitio en desarrollo, el código, los archivos y una ventana para conectarse a servidores; para guardar/publicar/subir ese proyecto al servidor remoto desde tu máquina local.

El protocolo antiguo FTP permite conectarse a un servidor, pasar/subir archivos. 

Reemplazado por SFTP. Para navegar usamos HTTP y HTTPS para transferir datos de forma segura. 

SFTP y HTTPS están cifrados para que la conexión y transmisión de datos sea segura. 

Se sincroniza la pc/cliente con los archivos locales con la pc/servidor.

Para que las dos máquinas tengan los mismos archivos e información.

Se hacian copias de los archivos locales como file.v1, v2, etc; y se subía. 


Filezilla: servidor o cliente. 

Con el cliente nos conectamos al servidor ftp. 

A este servidor se le configura una carpeta raíz. 

Con el cliente nos conectabamos a esta carpeta. 

Desde el cliente, muestra la raíz. 

En la raíz se encuentra el servidor HTTP web escuchando en el puerto correcto para servir el sitio web. 

Al modificar el archivo y estar sincronizado, la página cambiaba.

Esto podía cambiar el sitio en producción y tirar la página. 


###  VCS (Version Control System)

Como es muy conflictivo mantener compias de un archivo local en muchas versiones.

Se empezó a usar VCS como Subversión (SVN: un VCS centralizado), TortoiseSVN.

Permiten crear distintas ramas. 

En un directorio local definiamos un directorio para guardar un repositorio para hacer el control de versiones. 

Al tener un servidor de SVN hosteado: (Modelo: Un servidor - Muchos clientes. Conectados), esta característica da la centralización. 

Si este servidor deja de función, queda bloqueada la posibilidad de actualizar/bajar/subir los archivos del servidor a las computadoras locales conectadas. 

Al hacer click derecho en una carpeta con archivos locales desarrollados, el programa daba la opción de sincronizar los archivos. 

Bajar cambios, subir cambios hacia el servidor. 

Daba la opción de revertir cambios, limpiar directorio/archivos no trackeados.

Tenía la opción de separar lo que funciona en ramas y tagear esa rama. 

También introdujo los diff (diferencias) en las lineas de código, lo que se borraba o agregaba; estaba marcado todo lo que se cambiaba de una versión/rama/archivo a otra.

Desde main se brancheaba (copia de código) para desarrollar cosas nuevas sin afectar a lo que esta publicado o funcionando que estaba testeado y era seguro. 


En las empresas había un equipo de integración que recibia las ramas de distintos usuarios para evaluar y fusionar los cambios al código principal del cual estaba basado esa rama. 

Cuando los desarrolladores hacían un cambio en la misma linea de código se comunicaban para decidir que hacer y cuál era la versión final de esa linea. 

Era un avance muy notorio contra lo que era crear copias de tu repo local con muchas versiones y subirla al servidor. 

Pero en proyectos muy grandes que pesaban gigas, hacer un branch tardaba horas. 


## Git

El branch se hace rapidamente. 

En vez de borrar el directorio y crearlo de cero, cálcula las diferencias y hace las modificaciones en disco de las diferencias. 

Por ej, si tenemos 1000 archivos, al crear un branch nuevo; no hace nada, porque no modificamos ningún archivo. 

Si borramos 10 archivos en el nuevo branch y si volvemos al anterior, vuelve a crear los 10 archivos que borró. 

Si volvemos al nuevo branch, vuelve a borrar los 10 archivos no estaban. 

Trabaja solo con las diferencias. 

Otras de las ventajas claves es que el historial de cambios (y motivos) es descentralizado.

Cada máquina tiene una copia historica del repositorio.  

Hay muchos servidores/repositorios remotos de git como github, gitlab o bibucket. 

O hostear nuestro propio servidor remoto de git. 

Incluso si borramos este, el historial de cambios está en todas las máquinas locales de los desarrolladores


# Comandos Git

## git init: repo local

Crea o convierte un repo normal a uno de git para poder restrear los archivos/cambios y hacer todas las funcionalidades de git. 


### repo remoto: servidor web

Necesitamos tener un usuario y crear una repo vacío, sin licencia ni readme para no pisar el repo existente local. 

Ahora los dos repos están trackeados por git. 


## Carpeta oculta: .git

Tiene HEAD, config, description, hooks, info, objects y refs. 

En hooks podemos configurar acciones que se activan cuando interactuamos con las funcionalidad de git.
 

## git status 

Muestra los archivos que fueron modificados/cambiados

Describe una seríe de cosas:

1. Muestra rama actual

2. Muestra los commits

3. Muestra los archivos trackeados/no trackeados o modificados/no modificados

4. Estos se pueden agregar con git add nombreArchivo


## git diff 

Muestra las diferencias de los archivos trackeados

Incluso las diferencias que no tiene commit


## git add

Agregar archivos a git para que lleve un registro de ellos


## git commit

Despues de git add podemos usar git commit

Como concepto significa una nueva versión del programa


### Cuándo usar git commit

1. Cambios atómicos, mensaje atómico

Tiene como objetivo poder revertir (git revert) esos cambios

Ej, agregar una clase: cambio clase; cambiar color: cambio color


2. git commit -m

El comentario tiene que ser en imperativo

Siguiendo la practica: "if merged, this commit will..." / "Se se mergea este commit, entonces..."

Ej, add initial structure / agrega estructura inicial
 

Usar git commit (solo/sin bandera/opción):

abrirá un editor de texto (cli) con git status que especifica:

Ej, rama, cambios por comitear, en qué archivo


Se compone: 

1. Titulo corto/mensaje imperativo

2. Abajo podemos agregar un parrafo para explicar por qué estamos cambiando. 
 
Ej: Agrega estructura inicial 

Para iniciar un proyecto que se basará en...

En el editor de texto cli, guardamos con :wq (write/save and quit)

Tiene distintos modos, el de escritura/edit se entra con i. 

Con escape entramos al modo de comandos. 


Al final registra el comit: 

1. dirección/rama, id del commit 

2. archivos cambiados y número de lineas afectadas

3. Muestra los nodos de cada archivo que afecta al commit


## git log

Muestra un registro de commit:

1. Hash del commit

2. HEAD -> xBranch

3. Autor y fecha

4. Mensaje atómico imperativo

5. Motivo del cambio


## Push a github

Los commits son locales, no afectan al repo remoto.

Podemos incluirlos al repo remoto mediante una serie de pasos: 

1. Enlazar/bindear/linkear repo remoto con repo local: 

### git remote add:

Trackea el repo remoto


git remote add origin: 

Es el nombre del repo remoto (para repo local)


git remote add origin https://...

Dirección dónde esta el repo/carpeta en el servidor remoto


2. git branch:

### git branch 


git branch -M main:

Con la opción -m o -M, la rama anterior se renombrará a la rama nueva. 
Si la rama anterior tenía un registro de referencia correspondiente, se renombra para que coincida con la rama nueva y se crea una entrada de registro de referencia para recordar el cambio de nombre de la rama. 
Si la rama nueva existe, se debe usar -M para forzar el cambio de nombre.


3. git push

### git push 

Mandar nuestra rama al repo remoto. 

Nos muestra un mensaje para decirnos a dónde mandar nuestra rama. 

Nuestra rama local se llama main, pero acá le podemos cambiar el nombre que figure en el repo remoto. 

Entonces, a origin le llamamos main `git push -u origin main`:

##### Se traduce como "en origin" (rama repo remoto) nuestra rama se llamará tambien main".

##### Trackear nuestra rama en repo remoto (lo inverso de git remote add origin)
 
-u
--set-upstream

Para cada rama actualizada o enviada correctamente, añada una referencia de seguimiento, utilizada por `git-pull[1]` sin argumentos y otros comandos. 

Para más información, consulte branch.<name>.merge en `git-config[1]`.


Al recargar el repo remoto nos muestra los archivos. 

Ahora cualquiera que tenga acceso al repo remoto puede bajar estos archivos


## Rs sinc local y remoto:

`git remote add origin`: localmente el repo remoto se llamara origin

`git push` o `git push -u origin main` o `git push --set-upstream`:  

Remotamente nuestra rama se llamará main


## Actualizar repo

### git clone https:...

Copia el repo remoto en tu carpeta actual


### git log

Con los últimos cuatro números del commit chequeamos en que commit estamos desarrollando


### Evitar conflictos al editar un mismo archivo

### git checkout -b feature/x ... hotfix/y ... fix/z ... bug/xy

1. Cambia de rama y crea una al mismo tiempo 

Cremos la rama feature/README

`git checkout -b feature/readme`

Nos cambiará a esta rama


2. Cheackear estado del repo: 

`git status`

Para mirar qué cambios hicimos 
 

3. Agregar los nuevos cambios: 

Archivo individual o todos:

`git add README.md` o  `git add .`


4. Verificar cambios:

`git status`


5. git commit -m "add readme"


## git branch

Nos muestra las ramas que tenemos en el repo local y nos marca o posiciona en la rama que estamos

1. Si volvemos a main: 

`git checkout main`

Los archivos de la rama alternativa no están.  

##### Esto sería las distintas versiones o estados del proyecto


2. Si verificamos los commits en la rama main:

`git log`

Veremos menos commits o el último que hicimos a esa rama


3. Si nos pasamos a la rama feature/readme

`git log`

Tenemos los dos commits locales, el de main y el de feature/readme

El orden de commits es desde el más reciente. 


### Checkout a cualquier commit

Tenemos que copiar el id del commit

```
git checkout 007dd3fd....
```

Vemos como estaba el proyecto en ese instante


Si hacemos git log en este commit nos muestra el `head`. 

No aparecerá el commit superior o último. 


`git checkout HEAD`: 


#### Volver a la rama 

`git checkout feature/readme`


### git push

Traer los cambios del servidor de git 

Puede ser propio, de github o gitlab o bitbucket 

`git push origin feature/readme`

1. origin: es el nombre de la rama remota que le dimos localmente 

2. feature/readme: nombre remoto de nuestra rama alternativa feature/readme


Ahora en github aparecerán las dos ramas: main y feature/readme


### git merge

Habiendo subido la rama alternativa al repo

Nos queda fusionar esa rama alternativa con la rama main

Estando en nuestra rama alternativo:

`git merge feature/readme`

Solo se fusiona localmente


### git pull

Nos dirá las nuevas ramas que tenemos/archivos


Al no pushear la fusión, otro desarrollador que se mire con git log los commits

Verá que en main solo hay un commit 


## Code review: pull requests, aparecen cuando fusionamos localmente nuestra rama alternativa con la rama principal local y pusheamos la rama main (ahora unificada)

Antes de fusionar las ramas remotas, hay que revisar los push para poder ponerlo en main. 

Es una función exclusiva de GitHub y de otros servidores. 


### interfaz de github

En la vista principal del repo aparecen los push


1. Botón compare and pull request 

O ir a la barra  y clickear Pull requests

En esta sección tenemos otro botón: new pull request


2. Fusionar ramas: se muestra como compare changes, clickendo en los botones anteriores

Se divide en dos botones 

A dónde van a ir los cambios y desde dónde vienen esos cambios
```
Rama main <- Rama x
``` 

"rama x se quiere fusionar con rama main"

Cuando en el segundo botón seleccionamos la rama a fusionar 


### Conflicto: 

Si se mergearon más cosas a main antes de que acepten las nuestras y las hayan pisado. 

Nos aparecerá un conflicto que tenemos que resolver. 


La interfaz Comparing changes nos describie: 

1. commits

2. archivos

3. contribuidores/desarrolladores

Muestra los archivos nuevos y los modificados. 

En cada uno aparecen las lineas agregadas y las borradas si las hay. 

Después de que el desarrollador chequea todo 

Le toca crear el pull request 


3. Botón create pull request

En la nueva interfaz: 

1. Agregar un titulo al pull request: 

Siguiendo las directivas para el titulo del commit


2. Agregar una descrición 

### Directivas nuevas para la descrición del pull request en GH

Describir el motivo del cambio, sus características, sus ventajas

Agregar una imagen de como se ve el sitio/proyecto con el cambio


3. Al finalizar la creación del pull request: 

Se mostrarán todos los pr en la pestaña pull request

Podemos ver el nuestro con su titulo, descripción, imagen de como se ve el sitio o proyecto con nuestros cambios. 

Al costado podemos ver a las personas encargadas de revisar esos pull request. 

Podemos contactarlos 

Hay varias opciones a configurar para clasificar el pull request

##### En definitiva es la pantalla de discusión de un pull request 


### Cuando no hay conflictos, podemos mergear

En este botón hay un par de opciones de git 

Como: 

1. create a merge commit

2. squash and merge

3. rebase and merge

Al final podemos agregar más comentarios a la discusión 


### files changes: interfaz importante en la discusión del pull request

##### Los developers encargados de los pr pueden corregir el código linea por linea y agregar comentarios en las mismas. 

##### Acá debemos cambiar lo que nos dicen, de lo contrario no se aceptará nuestro el pr

Nos sugieren cambios, los devs encargados pueden agregarlo como comentario 

O revisar el código desde esta interfaz. 

Desde dónde hacen todos los comentarios y aprueban o denegan el pr

##### Este es el lugar donde las discusiones y los comentarios de los devs encargados deben ser minuciosos, detallados, exhaustivo, meticuloso.

##### Los devs encargados y los desarrolladores del pr deben dar motivos con fundamento; y a su vez preguntarles, etc. 


### Botón finish review

En esta interfaz se puede comentar, aprobar o pedir cambios (request changes)

Al finalizar la revisión, recien se podrá ver la discusión sobre el pr. 


### Cambiar código desde pr disc: files changes

Volver a files changes. 

En la linea del código:

1. agregar coments y motivos o sugerencias

2. Al hacer algunas de estas acciones, se genera un commit nuevo. 


### Commits vs Pr de GitHub: en misma pestaña pull request

Entre commits muestra la diferencia de como fue cambiando el código

Y en Pr/file changes muestra la diferencia entre branches


### Merge pull request 

Al final de la discusión, 

1. La opción merge pr: 

Crea un commit más que describe los cambios en el titulo. 

Se puede agregar un mensaje más descriptivo. 


### Borrar branch dónde estaba el pr

Después de merge podemos borrarla.


# GitHub desktop 

Botón add: 

Opciones 

1. Clone repo

2. New repo

3. add existing repo 


En el botón history están todos los commits, con los archivos agregados y la vista diff. 

En los botones superiores podemos cambiar de rama 

Hacer un fetch para traer los últimos cambios que estan en el repo remoto

Cuando hacemos cambios, los detecta al instante y muestra el diff. 

Podemos crear branches, si creamos una rama y detecta cambios sin comitear en la anterior nos avisa que podemos llevarlos a la nueva rama. 

En el botón changes que esta en la parte inferior podemos agregar el mensaje de commit y abajo una descripción más extensa. 

En la parte central de la interfaz tenemos una serie de acciones. 

Cuando creamos una nueva rama y hacemos cambios, nos aparecerá que podemos pushear esos cambios al repo remoto. 

Se hace con el botón public branch. 

Después aparecerá el botón de pull request con un par de opciones como revertir el pr. 

En la parte de pull request, en files changes puede aparecer una marca roja en el diff se debe a la diferencia en como windows y unix trabaja los saltos de linea. 

Después de esto en nuestro main nos pondrá que podemos traer cambios con fetch origin. 

Al final hacemos el pull. 



## git fetch y git pull



## git merge y gir rebase merge 



# Scope/Ámbitos/Variables/Hoisting

Ej: 

```
const x = 1; 
function saludar() {
	const x = 1; 
}
```

1. La constante x dentro de la función existe y deja de existir al ejecutarse y terminar esa función.

Solo se puede acceder a x dentro de la función. 

2. La constante x fuera es global, existe durante todo el programa. 

Se puede acceder desde cuálquier bloque de código


## Params

Ej: 

```
const x = 1; 
function saludar(x) {
	const x = 1; 
}
```

El param x es una variable local como la constante x dentro de la función. 

Es el objeto/variable/nombre que guarda/toma como referencia la función para manipular los valores que vienen desde fuera. 

Es la entidad que va a entender nuestra función. 

La entrada que tenga la función se va a redefinir como x = 1. 


## Block level scope

##### Dentro de un bloque de código solo funcionarán las variables definidas en él. 

No reconoce lo que está afuera. 

1. 
```
function saludar() {
	const x = 1; 
	console.log(x);
}

saludar();
```

La consola va a mostrar x 


2. 
Si tenemos otra constante x afuera: 

```
function saludar() {
	const x = 1; 
	console.log(x);
}

const x = 2;
saludar();
```



### Block level variables

3. 
Si tenemos un if: 

Se cumple la condición para x local

##### Pero la constante puede ser reasignada por tratarse de otro bloque que no reconoce la definición constante del bloque de la función. 

```
function saludar() {
	const x = 1; 
	console.log(x);
	
	if (x === 1) {
		const x = 2; 
		console.log(x);
	}
}

const x = 2;
saludar();
```

##### Evalúa lo de afuera pero no reconoce las definiciones de afuera en su bloque. 


4. 
Si imprimimos x fuera del if, pero dentro de function nos dará el valor que tiene en el bloque de function: 

Si imprimimos x fuera de function nos dará el valor del bloque global
```
function saludar() {
	const x = 1; 
	console.log(x);
	
	if (x === 1) {
		const x = 2; 
		console.log(x);
	}
	console.log(x);
}

const x = 2;
saludar();
console.log(x)
```

### Debugger Scope

1. 

Primero se ejecuta lo global, si es que no se llama a una función.

Despues llamamos a la función saludar(); 

Hace todos sus cálculos. 

Vuelve a ejecutar console.log(x)

```
//1 local representa el bloque de código, func(), if; etc
local:
-> this: windows
	x: 1

//2 script representa todo el programa
script:
	x: 2

//3 es el objeto Window
Global
```

Cuando se ejecuta el script/ambiente global aparece x = 2

No acceda al ambiente local. 


2. 
Cuando se ejecuta el if aparece el ambiente block

```
//0 aparece cuando se ejecuta el if
block.
x = 2

//1 local representa el bloque de código, func(), if; etc
local:
-> this: windows
	x: 1

//2 script representa todo el programa
script:
	x: 2

//3 es el objeto Window
Global
```


3. 
Termina la ejecución del if

##### Cuando terminan la ejecución de los bloques desaparecen del scope 

```
//1 local representa el bloque de código, func(), if; etc
local:
-> this: windows
	x: 1

//2 script representa todo el programa
script:
	x: 2

//3 es el objeto Window
Global
```

Al terminar la función pasa lo mismo

```
//2 script representa todo el programa
script:
	x: 2

//3 es el objeto Window
Global
```


## Hoisting: problema con var, Al ejecutar el programa las definiciones con var se eleven hacia afuera de los bloques. 

##### Si definimos con var dentro de un bloque y este bloque termina, var seguirá existiendo. No podemos hacer chequeos de valores temporales/en bloque.

##### El scope para var está compartido, si tenemos un contador local, afectará a ese var; siempre se que ejecute. 

```
function saludar() { 
	
	if (true) {
		var x = 1;
	}

	console.log(x);
}

saludar();
console.log(x);
```

La consola retorna 1


### Debugger y var

##### const y let fuera de su bloque no existen

##### Los bloques internos de otros bloques si pueden acceder y evaluar let y const


### Hoisting: ejecutar una función y después definirla

JS analiza las definiciones antes de ejecutarse y las mueve hacia arriba del programa.

Funciona:

```
saludar();
function saludar() {
	console.lgo('hola');
}
```


### Hoisting y var

##### Las var se definen pero no se inicializan, JS internamente separa la inicialización (hoisting/la eleva) y después la inicializa

1. JS por dentro:

```
var x; 
console.log(x); 
x = 1; 
console.log(x);
```


2. Código real:

La primera linea da undefined

La segunda linea la inicializa

La tercera da 1, muestra el valor 

La cuarta muestra el str hola

```
console.log(x);
var x = 1;
console.log(x);

saludar();
function saludar() {
	console.log('hola');
}
```

Output:

undefinied
1
hola


### Con let y const los compartamientos de var se solucionan

### Las funciones siguen hoisteando/izandose 


# Eventos

1. 

Ej: 

HTML:

```
<form>
	<input type="text"/>
	<button>Submit</button>
</form>
```

Por defecto se va a actualizar la página. 


2. 

Si metemos al form en un div

```
<div>
	<form>
		<input type="text" name="nombre"/>
		<button>Submit</button>
	</form>
</div>
```

Una vez que se mandan los datos, realmente se envian. 

Si escribimos en el campo y eviamos ese valor

##### La nueva url muestra o nos pasa los valores del form enviado


3. 

##### Cuando el form necesita otros botones/acciones/eventos que no deben enviar datos, debemos cancelar este comportamiento en todo el form

```
const $form = document.querySelector('form');
$form.addEventListener('submit', function(e) {
	e.preventDefault();
});
```


4. 

##### Las funciones en JS son tratadas como First Class Citizen, podemos manipularlas de diferentes formas

1. Podemos pasarlas como params (lo que hace addEventListener)

2. Podemos redefinirlas bajo otra variable

3. Llamarlas


### 1. Asignar funciones a variables
Ej:

```
function saludar(){} // crear una func normal
const saludar2 = function(){}; // función anonima asignada a otra var
saludar2(); // ejecuta var
const saludar3 = function unaFunción(){}; declarar un función con nombre y asignarla a otra var
unaFuncion();
saludar3();
/// las dos van a ejecutar la misma
```



### 2. Pasar Funciones como params/o a otra función

.addEventListener(p1, p2) toma dos params.

Uno es un evento y otro es una función para ejecutar. 

```
const $form = document.querySelector('form');
$form.addEventListener('submit', function(e) {
	e.preventDefault();
});
```

##### La función interna ejecuta otra función interna que serán ejecutadar por la función externa que será ejecutada cuando se haga click

Ej: Params: texto y func


### Parametro de una función, será una función anonima:

1. saludar(nombre, determinarGenero){} es una función normal: 

Tiene como param nombre(generalmente str)

y determinarGenero será una función anonima creada cuando la llamaremos.  

##### Los param son identidades para transformar los datos recibidos pero pueden ser cualquier cosa

```
function saludar(nombre, determinarGenero) {
	const genero = determinarGenero(nombre); 
	let bienvenida = 'Bienvenido'; 
	if (genero === 'femenino') {
		bienvenida = 'Bienvenida';
	}
	
	const saludo = `Hola, ${nombre}. ${bienvenida}.`;
	
	return saludo;
}

//función anon que toma el nombre como param
const saludo = saludar('Bob', function(nombre) {
	const ultimaLetra = nombre[nombre.length - 1];
	if (ultimaLetra === 'o') {
		return 'masculino';
	} else {
		return 'femenino';
	}
});

alert(saludo);
```

##### A su vez al callback el pasamos el param nombre

2. Al llamar a la función normal le pasamos como valores un texto y una función anomima que se ejecutará al instante. 

Out: 'Hola bob, Bienvenido'; 


### Este tipo de funciones que toman otra se usan para darle la posibilidad al desarrollador a que haga su implementación, mecanismo. 

##### Los desarrolladores de los navegadores nos dan estos bloques de construcción porque no pueden saber que mecanismos vamos a necesitar. 

##### En un momento puntual nos dan la posibilidad de que se ejecute nuestra funcion

##### Cuando pase esto, le pasará un evento a nuestra función

##### a addEventListener en el callback es e o event

##### El param del callback está definido en el contrato de addEventListener por sus desarrolladores

##### No es algo que nosotros podemos hardcodear

##### Pero si va a ser el valor del primer param

##### Es el nombre interno que se le dio al param que si podemos hardcodear

##### Internamente los desarrolladores no saben cuál va a pasarse por eso tampoco nosotros podemos hardcodearla

En nuestra función son las siguientes lineas: 

1. Definición del una función con callback

```
function saludar(nombre, determinarGenero) {
	const genero = determinarGenero(nombre); 
}
```
y 

2. Uso:
 
```
const saludo = saludar('Bono', function(nombre) {} 
```


Ej: Definición de addEventListener()

```
function addEventListener(nombreEvento, callback) {
	// cuando pase el evento especifico
	// ejecutar la funcion de callback
	callback(event); //evento obtenido de forma interna en addEventListener
	if (event.isPreventDefault() { // evento asume prop interna que nos permite saber si preventDefault se ejecutó
		return; 
	} else {
		pasarEvent(event); // al siguiente que este escuchando
	}
}
```

Uso de addEventListener:
```
const $form = document.querySelector('form');
$form.addEventListener('submit', function(event) {
	event.preventDefault();
});
```


### RS callback: 

Parte 1: 

##### La var callback va a guardar la función anonima que le pasemos

```
function saludar(nombre, determinarGenero) {
	const genero = determinarGenero(nombre); 
}

const saludo = saludar('Bono', function(nombre) {} 

determinarGenero = function (nombre) {}
```


Parte 2: Transformación interna/arquitectura/funcionalidad

1. Definición del la función que toma el callback

Acá llama a la función con su param

Transforma ese valor y devuelve otra cosa


2. Uso

pase de params, valor e función que implementa el genero

de acuerdo a ese valor. 

Se evaluará en la definición. 

Una función es un saludo y transforma acuerdo a como sea el genero

La otra función es para definir el genero de acuerdo a un param



## Event Bubbling

##### Al hacer click en el botón submit, el evento se lo hace al form y div hasta el body

HTML:

```
<div>
	<form>
		<input type="text" name="nombre"/>
		<button>Submit</button>
	</form>
</div>	
```


JS: 

```
const $form = document.querySelector('form');

$form.addEventListener('submit', function(event) {
	console.log(event); //test
	event.preventDefault();
});

document.querySelector('button').addEventListener('click', function(event) {
	console.log(event); //test
});
```

Out:

Consola reporta eventos:

en el form: SubmitEvent 

en el button: PointerEvent


### Consideraciones: Propiedades de los eventos

1. El form al tener preventDefault deja de burbujear el evento click de su botón. 

marca que preventDefault: true;

2. El button no tiene preventDefault por eso burbujea hasta el form

marca preventDefault: false;


## Propagación:

### preventDefault() previene el comportamiendo predeterminado del navegador, no el bubbling en si; previene el submit de todos los botones por ej.

Al hacer click al botón, ese evento se propaga al form, se propaga al div, hasta el form. 


### Ver evento en la consola: lo identificamos con un str normal y después pasamos el objeto event. 

```
const $form = document.querySelector('form');

$form.addEventListener('submit', function(event) {
	event.preventDefault();
	console.log('form submit', event); //test
});

$form.addEventListener('click', function(event) {
	console.log('form', event); //test
});

document.querySelector('button').addEventListener('click', function(event) {
	console.log('button', event); //test
});

document.querySelector('div').addEventListener('click', function(event) {
	console.log('div', event); //test
});
```

Out:

Consola: 

button:
PointerEvent

form:
PointerEvent

div:
PointerEvent

form submit:
SubmitEvent


## Función event.stopPropagation()

```
const $form = document.querySelector('form');

$form.addEventListener('submit', function(event) {
	event.preventDefault();
	console.log('form submit', event); //test
});

$form.addEventListener('click', function(event) {
	console.log('form', event); //test
});

document.querySelector('button').addEventListener('click', function(event) {
	console.log('button', event); //test
	event.stopPropagation();
});

document.querySelector('div').addEventListener('click', function(event) {
	console.log('div', event); //test
});
```

Out: 

Consola: 

button:
PointerEvent

form submit:
SubmitEvent

##### La consola muestra que se evita la propagación y que se clickea el submit del form


### Rs preventDefault y stopPropagation

preventDefault: previente el comportamiento por defecto según la naturaleza del elemento

stopPropagation: previente la propagación del elemento hijo a los elementos padres.


## Objeto e/event



# 12. Creación de forms y validaciones

## Acciones de un form

El protocolo HTTP tiene un rol muy importante


### Formularios: motivos de su uso y cambios con la ia

Estruturar la info que vamos a recolectar para poder procesarla/analizarla. 

Un form no da lugar a la interpretación. 

Con la ia, un asistente puede hacernos preguntas y él mismo procesa. 


En el pasado teniamos las tarjetas perforadas: 

Tenían unos pines arriba y abajo, cada vez que se tocaban generaban corriente. 

Al poner una tarjeta perforada en ciertos campos, ej:

En las filas y columnas de las tarjetas:

x es un valor fijo
o es un agujero

```
[
  [x, x, o]
  [o, x, x]
  [x, x, x]
]
```

Si le asignabamos valor a las x, al o ser un agujero; x superior y x inferior se tocaban; pasa a ser 1. 

Y cuando teniams x x x el columna era un 0. 

Entonces, una tarjeta que en la fila 1 tenia: 

```
[Número de integrantes en la vivienda]
```

El número podría ser desde 1 a 3 por las columnas ?)

```
[
  [x, x, o]
  [o, x, x]
  [x, x, x]
]
```

```
Número de integrantes en la vivienda
Edad del integrante 1: 0
```

Al tener esta forma estructurada de procesar info ya no hacía falta copiarla a mano. 

Cuando se tocaban, daba a la respuesta de las preguntas. 

Para la pregunta 1: lo que se definia en el tercer input

Para la 2: o que se definía en el segundo input

3: no tiene respuesta `[x, x, x]`


Ej: Form calculo de salario

### Todo el form estará en la etiqueta form

### Después ponemos un label: describe el dato que queremos recolectar

### Sigue el input: campo para que el usuario complete; hay multiples tipos que están predefinidos, desde text y número hasta archivo. Por lógica tiene que coincidir con le que pedimos en el label

HTML:

```
<form>
	<label for="nombre">Nombre</label>
	<input type="text" id="nomber">
</form>
```

### Atributo for: Al hacerle click al nombre del campo, posiciona al usuario en él. Tiene que tener el mismo valor de atributo que el id del campo al que hace referencia


### Elemento select (drop down): tiene opciones para restringir posibilidades

Ej: form de transferencia dinero

```
<label for="cuenta-desde">Desde que cuenta</label>
<select id="cuenta-desde">
	<option>Cuenta A</option>
	<option>Cuenta B</option>
	<option>Cuenta C</option>
</select>
```

Una opción más usada es usar la propiedad value

### Atributo value de option: identificadores cuando el usuario seleccione una opción

```
<label for="cuenta-desde">Desde que cuenta</label>
<select id="cuenta-desde">
	<option value="87654321">Cuenta A</option>
	<option>Cuenta B</option>
	<option>Cuenta C</option>
</select>
```

JS: 

```
document.querySelector('#cuenta-desde').value
87654321
```

Nos devuelve el value de la opción seleccionada

Si no hay value, nos devuelve el texto que hay en option

Ej: Si está seleccionada la opción B (no tiene atributo value)

```
document.querySelector('#cuenta-desde').value
Cuenta B
```

Entonces: 

### Hacer transferencia: Casos de validación 

#### Ej: no podes transferir a una misma cuenta, no podemos transferir si no tenemos fondos suficientes

HTML: 

```
<label for="cuenta-desde">Desde que cuenta</label>
<select id="cuenta-desde">
	<option value="1">Cuenta A</option>
	<option value="2">Cuenta B</option>
	<option value="3">Cuenta C</option>
</select>

<label for="cuenta-hacia">Hacia que cuenta</label>
<select id="cuenta-hacia">
	<option value="1">Cuenta A</option>
	<option value="2">Cuenta B</option>
	<option value="3">Cuenta C</option>
</select>

<label for="monto">Monto</label>
<input type="number" id="mont">

<input type="submit" value="Transferir">
```

### Elemento input submit es para su accion y atributo value es para el nombre

Deberíamos saber los fondos disponibles de cada cuenta. 


Desde el backend: 

Las opciones que vemos en el front, vienen desde el backend y la info viene desde una base de datos


## Vamos a simular el backend

Al cargar la página vamos a popular la cuenta desde, la cuenta hacia 

Vamos a mostrar cuanto saldo/fondo/dinero tiene la cuenta desde


Simular traer info del backend: 

Con js si queremos ejecutar código cuando se carga la página

### Evento DOMContentloaded: una vez que el navegador termina de leer el html, va a ejecutar su código interno

```
document.addEventListener('DOMContentloaded', function() {
	console.log('el doc cargó') //test
});
```

## Simular el estado de las distintas cuentas y su monto

#### En otro archivo como cuentas.js: simula otro contexto. En el html podemos cargar varios archivos

```
<script type="text/javascript" src="cuenta.js"><script>
<script type="text/javascript" src="index.js"><script>
```

Declarar un array para las cuentas, tendra un objeto

```
const cuentas = [{}];

```

## Simular llamada a una API: 

## Fundamentos de Objetos

`x = {propiedad: valor};`
`y = {metodo(){
		return 'hello';
	}
};`

1. Acceso a prop:

x.propiedad -> devuelve valor

2. Acceso a met: 

x.metodo(); -> devuelve 'hello'


En un array definimos un objeto como nombre
 
Los objetos representarán una cuenta

```
const cuentas = [{
	id: 1,
	nombre: 'Cuenta A',
	saldo: 100
}, {
	id: 2,
	nombre: 'Cuenta B',
	saldo: 200
}, {
	id: 3,
	nombre: 'Cuenta C',
	saldo: 300
}];
```


## Llevar los objetos al backend

index.js

```
document.addEventListener('DOMContentLoaded', function() {
	
	for(let i = 0; i < cuentas.length; i++) {
		console.log(cuentas[i]); //test iteración de cuentas
	}
})
```

Por cada cuenta crear una estructra option para insertar en cada elemento select (2 en total)

```
document.addEventListener('DOMContentLoaded', function() {
	
	for(let i = 0; i < cuentas.length; i++) {
		console.log(cuentas[i]); //test iteración de cuentas
		
		const cuenta = cuentas[i]
		
		const $cuentaDesde = document.createElement('option');
		$cuentaDesde.setAttribute('id', cuenta.id);
		$cuentaDesde.textContent = `${cuenta.nombre} ($${cuenta.saldo})`;
	}
})
```

Out: 

Elemento

```
<option id="1">Cuenta A (100)</option>
```

## Desestructurar objetos

Podemos declarar varias variables (id, nombre, saldo) para un mismo valor `cuentas[i]`

```
const {id, nombre, saldo} = cuentas[i];
```

es igual a: 

```
const id = cuentas[i].id;
const id = cuentas[i].nombre;
const id = cuentas[i].saldo;
```


## Insertar elementos

Tomar el elemento select una sola vez. 

Si lo tomamos dentro del for, lo estamos llamado en todas las iteraciones

##### $cuentasDesde =/= $cuentaDesde

```
document.addEventListener('DOMContentLoaded', function() {
	
	const $cuentasDesde = document.querySelector('#cuenta-desde');
	
	for(let i = 0; i < cuentas.length; i++) {
		console.log(cuentas[i]); //test iteración de cuentas
		
		const cuenta = cuentas[i]
		
		const $cuentaDesde = document.createElement('option');
		$cuentaDesde.setAttribute('id', cuenta.id);
		$cuentaDesde.textContent = `${cuenta.nombre} ($${cuenta.saldo})`;
	
		#cuentasDesde.appendChild($cuentaDesde);
	}
})
```

Ahora desde el front las podemos seleccionar


Para las cuentas hacia debemos sacar el monto dado que es otra cuenta que no es nuestra

```
document.addEventListener('DOMContentLoaded', function() {
	
	const $cuentasDesde = document.querySelector('#cuenta-desde');
	const $cuentasHacia = document.querySelector('#cuenta-hacia');

	for(let i = 0; i < cuentas.length; i++) {
		console.log(cuentas[i]); //test iteración de cuentas
		
		const cuenta = cuentas[i]
		
		const $cuentaDesde = document.createElement('option');
		$cuentaDesde.setAttribute('id', cuenta.id);
		$cuentaDesde.textContent = `${cuenta.nombre} ($${cuenta.saldo})`;
					
		const $cuentaHacia = document.createElement('option');
		$cuentaHacia.setAttribute('id', cuenta.id);
		$cuentaHacia.textContent = cuenta.nombre}
		
		#cuentasDesde.appendChild($cuentaDesde);
		#cuentasHacia.appendChild($cuentaHacia);
	}
});
```


##### Punto de control: En la arquitectura de la app tenemos html dinamico, la db y la función generadora de elementos dinamico

##### Nos falta la función manejadora de valores que toma los valores del front (submit) y esos valores se los pasa a la función o algoritmo abstracta/pura

##### Junto a todas sus validaciones nombradas anteriormente


## Refactorizar evento generador de elementos: lo tenía document, el evento era DOMContentLoader

Al add event listener le pasamos una función ya no lo vamos a escribir ahí mismo

Después agregamos un preventDefault al form

##### event.preventDefault() y stopPropagation() siempre van al principio para poder ver si hay errores en el código que se ejecuta antes de que envie los datos

##### Opcion Preverve Log en debugger para que guarde los errores antes de mandar los datos

```
document.addEventListener('DOMContentLoaded', function() {
	mostrarCuentas();
)};

document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault();
});

function mostrarCuentas() {
	const $cuentasDesde = document.querySelector('#cuenta-desde');
	const $cuentasHacia = document.querySelector('#cuenta-hacia');

	for(let i = 0; i < cuentas.length; i++) {
		console.log(cuentas[i]); //test iteración de cuentas
		
		const cuenta = cuentas[i]
		
		const $cuentaDesde = document.createElement('option');
		$cuentaDesde.setAttribute('id', cuenta.id);
		$cuentaDesde.textContent = `${cuenta.nombre} ($${cuenta.saldo})`;
					
		const $cuentaHacia = document.createElement('option');
		$cuentaHacia.setAttribute('id', cuenta.id);
		$cuentaHacia.textContent = cuenta.nombre}
		
		#cuentasDesde.appendChild($cuentaDesde);
		#cuentasHacia.appendChild($cuentaHacia);
	}
}
```


## Validaciones: desde el submit del form

Como en los objetos tenemos un id, tendremos que buscar cada elemento, recorriendo el arr, tomar el id 

Ej: 

1. Tenemos que ver de qué cuenta a qué cuenta (ID)

El HTML nos va a proveer unicamente el id. 

Entonces, de que id a que id


2. Encontrar la cuenta Desde, con el id que nos pasaron

Tiene el select


3. Verificar que el monto disponible es mayor igual al monto solicitado

Si es así aceptar la transferencia

Si no, mostrar un error 

```
const cuentas = [{
	id: 143589,
	nombre: 'Cuenta A',
	saldo: 100
}, {
	id: 298763,
	nombre: 'Cuenta B',
	saldo: 200
}, {
	id: 314145,
	nombre: 'Cuenta C',
	saldo: 300
}];
```


JS: 

```
document.querySelector('form').addEventListener('submit', function(event) {
	
	event.preventDefault();
});

```

1. Cuanta que eligio el usuario

tomar el value desde html

el value de cuenta-desde y el value de cuenta-hacia

```
document.querySelector('form').addEventListener('submit', function(event) {
	
	event.preventDefault();
});

```


### Error: Nos falta setear el atributo value (este tiene que ser el id de la cuenta) y el id de los elementos dinámicos no pueden ser solo números

```
function mostrarCuentas() {
	const $cuentasDesde = document.querySelector('#cuenta-desde');
	const $cuentasHacia = document.querySelector('#cuenta-hacia');

	for(let i = 0; i < cuentas.length; i++) {
		console.log(cuentas[i]); //test iteración de cuentas
		
		const cuenta = cuentas[i]
		
		const $cuentaDesde = document.createElement('option');
		$cuentaDesde.setAttribute('id', 'cuenta-' + cuenta.id);
		$cuentaDesde.setAttribute('value', cuenta.id);
		$cuentaDesde.textContent = `${cuenta.nombre} ($${cuenta.saldo})`;
					
		const $cuentaHacia = document.createElement('option');
		$cuentaHacia.setAttribute('id', 'cuenta-' + cuenta.id);
		$cuentaHacia.setAttribute('value', cuenta.id);
		$cuentaHacia.textContent = cuenta.nombre}
		
		#cuentasDesde.appendChild($cuentaDesde);
		#cuentasHacia.appendChild($cuentaHacia);
	}
}
```

##### Los atributos de los elementos html no pueden ser solo numeros, tienen que empezar con una letra

##### El value será el id de nuestra db

.value toma el valor del elemento sobre el que el usuario del form está interactuando

```
document.querySelector('form').addEventListener('submit', function(event) {
	
	document.querySelector('#cuenta-desde').value; //test
	document.querySelector('#cuenta-hacia').value; //test
	
	const cuentaDesdeId = document.querySelector('#cuenta-desde').value;
	const cuentaHaciaId = document.querySelector('#cuenta-hacia').value;
	
	console.log(cuentaDesdeId, cuentaHaciaId); // test
	
	event.preventDefault();
});

```


2. Función: encontrar en base al id de la cuenta qué cuenta es

```
function encontrarCuentaPorId(id) {
	for(let i = 0; i < cuentas.length; i++) {
		if (cuentas[i].id === id) {
			return cuentas[i];
		}
	}
}
```

```
document.querySelector('form').addEventListener('submit', function(event) {
	
	document.querySelector('#cuenta-desde').value; //test
	document.querySelector('#cuenta-hacia').value; //test
	
	const cuentaDesdeId = document.querySelector('#cuenta-desde').value;
	const cuentaHaciaId = document.querySelector('#cuenta-hacia').value;
	
	console.log(cuentaDesdeId, cuentaHaciaId); // test
	
	console.log(encontrarCuentaPorId(cuentaDesdeId));
	console.log(encontrarCuentaPorId(cuentaHaciaId));

	
	event.preventDefault();
});

```

## Debugg error

### Breackpoint a la llamada de la funcion 

### Revisar el apartado scope, los valores

### Botón entrar (v) =/= (->, es saltear)

Entramos al for

##### cuentas[i].id === id: cuentas[i].id es un number; id es un str

Tenemos que convertir el value del html

```
function encontrarCuentaPorId(id) {
	for(let i = 0; i < cuentas.length; i++) {
		if (cuentas[i].id.toString() === id) {
			return cuentas[i];
		}
	}
}
```


3. Monto disponible

```
document.querySelector('form').addEventListener('submit', function(event) {
	
	document.querySelector('#cuenta-desde').value; //test
	document.querySelector('#cuenta-hacia').value; //test
	
	const cuentaDesdeId = document.querySelector('#cuenta-desde').value;
	const cuentaHaciaId = document.querySelector('#cuenta-hacia').value;
	
	console.log(cuentaDesdeId, cuentaHaciaId); // test
	
	console.log(encontrarCuentaPorId(cuentaDesdeId));
	console.log(encontrarCuentaPorId(cuentaHaciaId));
		
	const cuentaDesde = encontrarCuentaPorId(cuentaDesdeId);
	const cuentaHasta = encontrarCuentaPorId(cuentaHaciaId);
	
	const montoSolicitado = Number(document.querySelector('#monot').value); 

	if (cuentaDesde.saldo >= montoSolicitado) {
		console.log('La transferencia se puede hacer');
	} else {
		console.log('La transferencia NO se puede hacer, saldo insuficiente');
	}
	
	
	event.preventDefault();
});

```

encontrarCuentaPorId(cuentaDesdeId) nos devuelve un objeto entero y nosotros preguntamos por sos props


4. Evitar transferir entre las mismas cuentas

##### Evitar comparar por igual a los objetos

```
if (cuentaDesde === cuentaHacia) {}
```

Es mejor chequear prop


```
document.querySelector('form').addEventListener('submit', function(event) {
	
	event.preventDefault();
	
	document.querySelector('#cuenta-desde').value; //test
	document.querySelector('#cuenta-hacia').value; //test
	
	const cuentaDesdeId = document.querySelector('#cuenta-desde').value;
	const cuentaHaciaId = document.querySelector('#cuenta-hacia').value;
	
	console.log(cuentaDesdeId, cuentaHaciaId); // test
	
	console.log(encontrarCuentaPorId(cuentaDesdeId));
	console.log(encontrarCuentaPorId(cuentaHaciaId));
		
	const cuentaDesde = encontrarCuentaPorId(cuentaDesdeId);
	const cuentaHasta = encontrarCuentaPorId(cuentaHaciaId);
	
	const montoSolicitado = Number(document.querySelector('#monot').value); 
	
	if (cuentaDesde.id === cuentaHacia.id) {
		console.log('No se puede transferir entre mismas cuentas');
		return false;
	}
	
	if (cuentaDesde.saldo >= montoSolicitado) {
		console.log('La transferencia se puede hacer');
	} else {
		console.log('La transferencia NO se puede hacer, saldo insuficiente');
	}
	
});
```

##### return false termina el programa/cálculo


5. Si el monto es 0, la transferencia no se puede hacer

```
document.querySelector('form').addEventListener('submit', function(event) {
	
	event.preventDefault();
	
	document.querySelector('#cuenta-desde').value; //test
	document.querySelector('#cuenta-hacia').value; //test
	
	const cuentaDesdeId = document.querySelector('#cuenta-desde').value;
	const cuentaHaciaId = document.querySelector('#cuenta-hacia').value;
	
	console.log(cuentaDesdeId, cuentaHaciaId); // test
	
	console.log(encontrarCuentaPorId(cuentaDesdeId));
	console.log(encontrarCuentaPorId(cuentaHaciaId));
		
	const cuentaDesde = encontrarCuentaPorId(cuentaDesdeId);
	const cuentaHasta = encontrarCuentaPorId(cuentaHaciaId);
	
	const montoSolicitado = Number(document.querySelector('#monot').value); 
	
	if (cuentaDesde.id === cuentaHacia.id) {
		console.log('No se puede transferir entre mismas cuentas');
		return false;
	}
	
	if (montoSolicitado <= 0) {
		console.log('Ingrese un monto mayor a 0');
		return false;
	}
	
	if (cuentaDesde.saldo >= montoSolicitado) {
		console.log('La transferencia se puede hacer');
	} else {
		console.log('La transferencia NO se puede hacer, saldo insuficiente');
	}
	
});
```


## Código final: app tranferencia

HTML: 

```
<label for="cuenta-desde">Desde que cuenta</label>
<select id="cuenta-desde">
	<!--
	<option value="1">Cuenta A</option>
	<option value="2">Cuenta B</option>
	<option value="3">Cuenta C</option>
	 -->
</select>

<label for="cuenta-hacia">Hacia que cuenta</label>
<select id="cuenta-hacia">
	<!--
	<option value="1">Cuenta A</option>
	<option value="2">Cuenta B</option>
	<option value="3">Cuenta C</option>
	 -->
</select>

<label for="monto">Monto</label>
<input type="number" id="mont">

<input type="submit" value="Transferir">
```

JS: 

### index.js

```
document.addEventListener('DOMContentLoaded', function() {
	mostrarCuentas();
}); 

document.querySelector('form').addEventListener('submit', function(event) {
	
	event.preventDefault();
	
	document.querySelector('#cuenta-desde').value; //test
	document.querySelector('#cuenta-hacia').value; //test
	
	const cuentaDesdeId = document.querySelector('#cuenta-desde').value;
	const cuentaHaciaId = document.querySelector('#cuenta-hacia').value;
	
	console.log(cuentaDesdeId, cuentaHaciaId); // test
	
	console.log(encontrarCuentaPorId(cuentaDesdeId));
	console.log(encontrarCuentaPorId(cuentaHaciaId));
		
	const cuentaDesde = encontrarCuentaPorId(cuentaDesdeId);
	const cuentaHasta = encontrarCuentaPorId(cuentaHaciaId);
	
	const montoSolicitado = Number(document.querySelector('#monot').value); 
	
	if (cuentaDesde.id === cuentaHacia.id) {
		console.log('No se puede transferir entre mismas cuentas');
		return false;
	}
	
	if (montoSolicitado <= 0) {
		console.log('Ingrese un monto mayor a 0');
		return false;
	}
	
	if (cuentaDesde.saldo >= montoSolicitado) {
		console.log('La transferencia se puede hacer');
	} else {
		console.log('La transferencia NO se puede hacer, saldo insuficiente');
	}
	
});


function mostrarCuentas() {
	const $cuentasDesde = document.querySelector('#cuenta-desde');
	const $cuentasHacia = document.querySelector('#cuenta-hacia');

	for(let i = 0; i < cuentas.length; i++) {
		console.log(cuentas[i]); //test iteración de cuentas
		
		const cuenta = cuentas[i]
		
		const $cuentaDesde = document.createElement('option');
		$cuentaDesde.setAttribute('id', 'cuenta-' + cuenta.id);
		$cuentaDesde.setAttribute('value', cuenta.id);
		$cuentaDesde.textContent = `${cuenta.nombre} ($${cuenta.saldo})`;
					
		const $cuentaHacia = document.createElement('option');
		$cuentaHacia.setAttribute('id', 'cuenta-' + cuenta.id);
		$cuentaHacia.setAttribute('value', cuenta.id);
		$cuentaHacia.textContent = cuenta.nombre
		
		#cuentasDesde.appendChild($cuentaDesde);
		#cuentasHacia.appendChild($cuentaHacia);
	}
}

function encontrarCuentaPorId(id) {
	for(let i = 0; i < cuentas.length; i++) {
		if (cuentas[i].id.toString() === id) {
			return cuentas[i];
		}
	}
}
```


### cuentas.js

```
const cuentas = [{
	id: 1,
	nombre: 'Cuenta A',
	saldo: 100
}, {
	id: 2,
	nombre: 'Cuenta B',
	saldo: 200
}, {
	id: 3,
	nombre: 'Cuenta C',
	saldo: 300
}];
```


### Estructura de la app

#### 1. Funciones puras: encontrarCuentaPorId(id)

Recorre la db, aplica lógica necesaria y devuelve datos claves de ella. 

Estos datos que devuelve serán usados por las funciones generadoras de elementos y capturadora de datos

Será llamada desde el evento del form que toma los valores introducidos por el usuario y llama a las funciones puras y funciones generadoras de elementos


#### 2. Funcion generadora de elementos: mostrarCuentas

Recorre la db (cuentas.js) para crear elementos 

Trae la db al front y carga los elementos en el document apenas el navegador lo lee. 


#### 3. Función de evento form/capturadora de datos: document.querySelector('form').addEventListener('submit', function() {})

Toma los valores de los elementos dinámicos y se los pasa a las funciones puras 

En su interior guarda valores en una const que llama a los elementos y les saca el valor con la prop.value

Validará los valores que introduce el usuario


#### 4. Base de datos: cuentas.js

Es un array de objetos que será recorrido, analizado por las funciones puras y generadoras



# 13. Expresiones regulares, Pruebas unitarias, Tailwind

## Regexp

HTML: cambios y nuevos campos

Campo descripción: tendrá ayuda de regexp

```
<label for="cuenta-desde">Desde que cuenta</label>
<select id="cuenta-desde">
	<!--
	<option value="1">Cuenta A</option>
	<option value="2">Cuenta B</option>
	<option value="3">Cuenta C</option>
	 -->
</select>

<label for="cuenta-hacia">Hacia que cuenta</label>
<select id="cuenta-hacia">
	<!--
	<option value="1">Cuenta A</option>
	<option value="2">Cuenta B</option>
	<option value="3">Cuenta C</option>
	 -->
</select>

<label for="monto">Monto</label>
<input type="number" id="monto">

<label for="descripcion">Descripción</label>
<input type="text" id="descripcion">

<input type="submit" value="Transferir">

<script type="text/javascript" src="cuentas.js"></script
<script type="text/javascript" src="index.js"></script
```

##### El evento DOMContentLoaded (para traer la db) funciona porque primero se carga la db y cuando se carga index.js se carga este evento


JS: 

##### Sacar los coments: en producción no van, los comments mienten; al cambiar la implementación más adelante, se debería cambiar el comment

Si leemos el código nos va a decir lo que hace

##### En producción solo son utiles cuando el código no se puede escribir de forma expresiva por que necesita que sea super eficiente


index.js

```
document.addEventListener('DOMContentLoaded', function() {
	mostrarCuentas();
}); 

document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault();

	// ver de qué cuenta (de qué ID a qué ID)
	const cuentaDesdeId = document.querySelector('#cuenta-desde').value;
	const cuentaHaciaId = document.querySelector('#cuenta-hacia').value;
			
	// encontrar la cuenta DESDE con el ID que me pasaron (el que tiene el <select>)
	const cuentaDesde = encontrarCuentaPorId(cuentaDesdeId);
	const cuentaHasta = encontrarCuentaPorId(cuentaHaciaId);
	
	const montoSolicitado = Number(document.querySelector('#monot').value); 
	
	// verificar que no se transfiera entre mismas cuentas
	if (cuentaDesde.id === cuentaHacia.id) {
		console.log('No se puede transferir entre mismas cuentas');
		return false;
	}
	
	// verificar que el monto sea mayor o igual a 0
	if (montoSolicitado <= 0) {
		console.log('Ingrese un monto mayor a 0');
		return false;
	}
	
	// verificar que el saldo disponible es mayor o igual al monto solicitado
	if (cuentaDesde.saldo >= montoSolicitado) {
		console.log('La transferencia se puede hacer');
	} else {
		console.log('La transferencia NO se puede hacer, saldo insuficiente');
	}	
});

function mostrarCuentas() {
	const $cuentasDesde = document.querySelector('#cuenta-desde');
	const $cuentasHacia = document.querySelector('#cuenta-hacia');

	for(let i = 0; i < cuentas.length; i++) {		
		const cuenta = cuentas[i]
		
		const $cuentaDesde = document.createElement('option');
		$cuentaDesde.setAttribute('id', 'cuenta-' + cuenta.id);
		$cuentaDesde.setAttribute('value', cuenta.id);
		$cuentaDesde.textContent = `${cuenta.nombre} ($${cuenta.saldo})`;
					
		const $cuentaHacia = document.createElement('option');
		$cuentaHacia.setAttribute('id', 'cuenta-' + cuenta.id);
		$cuentaHacia.setAttribute('value', cuenta.id);
		$cuentaHacia.textContent = cuenta.nombre
		
		#cuentasDesde.appendChild($cuentaDesde);
		#cuentasHacia.appendChild($cuentaHacia);
	}
}

function encontrarCuentaPorId(id) {
	for(let i = 0; i < cuentas.length; i++) {
		if (cuentas[i].id.toString() === id) {
			return cuentas[i];
		}
	}
}
```


cuentas.js

```
const cuentas = [{
	id: 1,
	nombre: 'Cuenta A',
	saldo: 100
}, {
	id: 2,
	nombre: 'Cuenta B',
	saldo: 200
}, {
	id: 3,
	nombre: 'Cuenta C',
	saldo: 300
}];
```

### En el campo descripción de una transferencia el usuario puede poner texto

No queremos que se introduzcan caracteres especiales como puntos, comas, exclamación. 

Lo único que queremos aceptar es mayus, minus y numeros.

##### Hasta ahora las validaciones las hicimos con lógica en JS cuando se trata de valores

##### Cuando las validaciones son sobre el texto lo mejor es usar expresiones regulares 


### Carácteres en regexp

1. `/./` -> Cualquier carácter

2. `/*/` -> Cualquier cantidad de veces, 0 o más

```
/.*/.test('');
```
true

Ej: testear string

```
/.*/.test('asdgbaj'!#loiuy)
```
retorna true


3. `/+/` -> 1 o más cantidad de veces:  ientras no sea vacío va a dar true

```
/.+/.test('asdajbb')
```
retorna true

```
/.+/.test('')
```
false


4. `^/ /` -> empieza con una letra

5. `/[a-z]/` -> Solo letras de la a-z (true), con num (false)

Combinación: 

letras de a-z, una o más veces (+)
```
/^[a-z]+/.test('asdfflkjh')
```
true

```
/^[a-z]+/.test('asdff234lkjh')
```
false


6. `/$/`-> terminar con una letra

Ej: empezar y terminar con una letra

```
/^[a-z]+$/.test('asdfflkjh')
```
true

##### Se lee: "Desde el principio (^) tiene que haber uno o más (+) letras (a-z)"


7. -> Cosas en el medio: `.*`

pero al final tiene que terminar si o si con una letra 

```
/^[a-z]+.*[a-z]+$/.test('a2111234a');
```
true

### Leer expresión regular 

"Empieza con una letra de la a a la z, uno o más, después puede venir cualquier caracter o incluso ninguno y despues tiene que venir letras uno o mas (uno+)"


### Tratar mayús y minús:

Hasta ahora las mayus devuelven false

La primera forma es:

8. `[a-zA-Z]`

```
/^[a-zA-Z]+.+[a-zA-Z]+$.test('Asdf322435dsfN');
```
true

```
/^[a-zA-Z]+.+[a-z]+$/i.test('');
```

La segunda forma de aceptar mayus y minus es:

9. -> banderas o modificadores `/i/` -> in case sensitive

No importa si es mayús o minús, el texto funcionará igual. 


```
/^[a-z]+.+[a-z]+$/i.test('a2111234a');
```


10. `[0-9]`-> Aceptar números y letras, sin caracteres

Lo que no queremos son caracteres raros
Ej: 

##### "Empezar con al menos un número o letra, después puede venir cualqueir cosa y cualquier cantidad de veces; después permitir cualquier numero y letra y que termine con ellos"

Si ponemos caracteres raros al principio y al final dará false; en el medio los caracteres raros darán true

```
/^[0-9a-z]+.*[0-9a-z]+$/i.test('@@!$@$!32568765as123'')
```
false

Si la letra está al principio y al final daría true

```
/^[0-9a-z]+.*[0-9a-z]+$/i.test('a@@!$@$!32dfga'')

```

### .match(): devuelve las caracteres que matchearon

`'str'.match(/regexp/)`

Ej.

Matchear todas las letras de la a-z

```
'perro'.match(/[a-z]/+)
```
##### Out: devuelve cuantas matchearon

`['perro', index: 0, input: 'perro', groups: undefined]`


Si devolvemos el indice 0

```
'perro'.match(/[a-z]+/)[0];
```
'perro'


##### Ej: Matchear solo que empieze con p, siga con e, etc

Empezar con p y tener más de 1, después seguir con e y tener más de 1

Seguir con una r y tener más de 1 y al final matchear una o y puede tener más de 1. 

En código: 

```
'perro'.match(/[p]+[e]+[r]+[o]+/)[0];
```


### Uso de parentesis en .match()

Ej: 'mi perro'

Matchear cualquier palabra, más de 1; 

```
'mi perro'.match(/([a-z]+) ([a-z]+)/);
```

##### Los parentesis agrupan caract: indican grupo: ej, el primero es cualquier letra de la a-z uno más; después cualquier letra que sea de la a-z ponela en el otro grupo

##### Al tener dos grupos, en la posición 0, matchea toda la frase completa 'mi perro'

##### Después mapea cada grupo a una posición de array de respuesta

Out:

```
(3) ['mi perro', 'mi', 'perro', index: 0, index: 'miperro', groups: undefined]
```

La primer palabra que es 'mi' y la segunda que es 'perro' 

esta repersentado por `([a-z]+) ([a-z]+)`

### Se los denomina grupos de regexp: los podemos usar cuando necesitamos extraer ciertas operaciones/info del string

Ej: Si sabemos que vamos a recibir:

dueño/persona -> mi -> posición 1
objeto -> perro -> posición 2
color -> verde -> psoción 3

Se traduce en el formato: 

`([a-z]+) ([a-z]+) ([a-z]+)`

### De esta forma podemos extraer estos valores: La posición 0 es el str completo por eso la salida de la expresion da como resultado (4) obj en el arr:


## Herramientas regexp para testear 

regex101

Introducis la expresión regular, intruducis el input de test

Al costado hay dos campos: 

1. el primero explica la regex que introduciste

este también explica las variables g/global y m/multi line

2. el segundo la información del match


## Crear regex para el campo 'Descripción'

En el addEventlistener de transferir 

Tomamos el valor del elemento del campo de descripción 

Le agregaremos una regex, creamos una. 

```
const descripcion = document.querySelector('#descripcion').value;
const regexDescripcion = /[a-z0-9 ]+/i;
```

Soportara mayus y minus (i), de la a-z, 0-9 
soportará espacio y que todo eso sea mas de 1

### Limite de caracteres en regex -> {x,y}

##### Se combina con ^ (empieza) y $ (termina)

Ej: entre 2 y 3

```
const regexDescripcion = /^[a-z0-9 ]{2,3}+$/i;
```

Ej: por lo menos 3

```
const regexDescripcion = /^[a-z0-9 ]{3,}+$/i;
```


### Errores regex

Debemos hacer que empieze (^) y termine con una letra ($)

Evita los caracteeres especiales

```
const descripcion = document.querySelector('#descripcion').value;
const regexDescripcion = /^[a-z0-9 ]{3,}$/i;
```

##### "Empieza (^) con letras y números ([a-z0-9 ]) que tienen que ser al menos 3 ({3,}) y con eso tiene que terminar"
 
En el medio no le damos oportunidad para que pongan caracteres especiales


### Arreglar segundo error: Probar value (ToF) en test de regex

```
const descripcion = document.querySelector('#descripcion').value;
const regexDescripcion = /^[a-z0-9 ]{3,}$/i;
if (regexDescripcion.test(descripcion)) {
	console.log('La descripción solo debe contener solo letras y números y al menos 3 carácteres');
}
```


### Agregar return false al submit transferir y mover regex arriba de saldo disponible

La transferencia solo se puede hacer si la descripción es correcta

##### Probar ! (distinto/ si no es) true, hacer tal cos

"Es verdad que no es true?"

index.js

```
document.addEventListener('DOMContentLoaded', function() {
	mostrarCuentas();
}); 

document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault();

	const cuentaDesdeId = document.querySelector('#cuenta-desde').value;
	const cuentaHaciaId = document.querySelector('#cuenta-hacia').value;
			
	const cuentaDesde = encontrarCuentaPorId(cuentaDesdeId);
	const cuentaHasta = encontrarCuentaPorId(cuentaHaciaId);
	
	const montoSolicitado = Number(document.querySelector('#monot').value); 
	
	if (cuentaDesde.id === cuentaHacia.id) {
		console.log('No se puede transferir entre mismas cuentas');
		return false;
	}
	
	if (montoSolicitado <= 0) {
		console.log('Ingrese un monto mayor a 0');
		return false;
	}
		
	const descripcion = document.querySelector('#descripcion').value;
	const regexDescripcion = /^[a-z0-9 ]{3,}$/i;
	if (!regexDescripcion.test(descripcion.trim())) {
		console.log('La descripción solo debe contener solo letras y números y al menos 3 carácteres');
		return false;
	}
	
	if (cuentaDesde.saldo >= montoSolicitado) {
		console.log('La transferencia se puede hacer');
	} else {
		console.log('La transferencia NO se puede hacer, saldo insuficiente');
		return false;
	}	
});
```

##### El problema: al tener espacios validos, si ponemos 3 espacios va a aceptar la transferencia

Hay un método que se llama .trim() borra espacios al inicio y al binal

.trimEnd, .trimStart

##### Por lógica el mensaje de la transferencia (si se puede hacer o no) debe estar después de aceptar la descripción 

Ej:
 
```
La descripción debe contener solo letras y número y al menos 3 carácteres
La transferencia no se puede hacer, saldo insuficiente
```

```
La tranferencia se puede hacer
```


## Mostrar mensajes de error en los form

Mover los errores de la consola (test)

Podemos hacer un listado de errores 

O mejor marcar el campo del error


1. Agregar div errores vacío

En vez de poner el error en el console.log vamos pasando los errores

HTML

```
<label for="cuenta-desde">Desde que cuenta</label>
<select id="cuenta-desde">
	<!--
	<option value="1">Cuenta A</option>
	<option value="2">Cuenta B</option>
	<option value="3">Cuenta C</option>
	 -->
</select>

<label for="cuenta-hacia">Hacia que cuenta</label>
<select id="cuenta-hacia">
	<!--
	<option value="1">Cuenta A</option>
	<option value="2">Cuenta B</option>
	<option value="3">Cuenta C</option>
	 -->
</select>

<label for="monto">Monto</label>
<input type="number" id="monto">

<label for="descripcion">Descripción</label>
<input type="text" id="descripcion">

<input type="submit" value="Transferir">

<div id="errores">
	<!-- -->
</div>

<script type="text/javascript" src="cuentas.js"></script
<script type="text/javascript" src="index.js"></script
```


En submit, antes de las validaciones definimos el elemento

```
const $errores = document.querySelector('#errores');
```

Y en vez de crear un elemento error (como un p, editar con .textContent) y hacer appendChild del elem err al div errores

### .innerHTML: define un elemento html y su contenido

Directamente en el definimos el contenido del div errores con .innerHTML

```
const $errores = document.querySelector('#errores');

document.querySelector('form').addEventListener('submit', function(event) {
	//...
	
	if (cuentaDesde.id === cuentaHacia.id) {
		$errores.innerHTML += '<p>No se puede transferir entre mismas cuentas</p>';
		return false;
	}
```

Así con todas las validaciones que tenían el error en consola


##### Optimizar msj err con innerHTML: al cambiar los valores, no muestra el msj

Como nos muestra de a un error por vez, podemos setear el inner en vacío cuando no da error

```
const $errores = document.querySelector('#errores');

document.querySelector('form').addEventListener('submit', function(event) {
	//...
	
	if (cuentaDesde.id === cuentaHacia.id) {
		$errores.innerHTML = '<p>No se puede transferir entre mismas cuentas</p>';
		return false;
	} else {
		$errores.innerHTML = ''; 
	}
```

Lo mismo con todos los mensajes en consola 


### Evitar repetir código: Abstraer el código en una función y eliminamos la referencia global al div $errores, hacemos referencia localmente, cada vez que se llama a esa función  

2. Funciones puras: fuera de evento submit transmitir

La primera será para el error

La segunda será para limpiarlo

1. 

El param determina qué error es
 
```
function mostrarError(error) {
	const $errores = document.querySelector('#errores');
	$errores.innerHTML = `<p>${error}<p>`;
	
}
```
 

2. 

Cada vez que evaluamos el submit del form o no

Llamamos a limpiar errores 

```
function limpiarErrores(error) {
	const $errores = document.querySelector('#errores');
	$errores.innerHTML = '';
}
```


1. limpiarErrores()

Código para el uso función pura limpiar: 

```
document.querySelector('form').addEventListener('submit', function(event) {
	//...
limpiarErrores();
```

Se activa en cada submit/click de tranferencia 

limpia el div


2.  mostrarError('errorX')

Código para el uso de la función pura mostrarError:

En dónde estaba la referencia para editar el div errore con .innerHTML

```
document.querySelector('form').addEventListener('submit', function(event) {
	//...
	
	if (cuentaDesde.id === cuentaHacia.id) {
		mostrarError('No se puede transferir entre mismas cuentas');
		return false;
```


## Referencia al error en el elemento que ocurrio

Empezamos creando elementos de error

Colocados debajo de cada campo

HTML

```
label
select
<p class="error" id="cuenta-desde-error""><!-- --><p>

label
select
<p class="error" id="cuenta-hacia-error""><!-- --><p>

label for monto
input id monto 
<p class="error" id="monto-error""><!-- --><p>

label for descripcion
input id descripcion 
<p class="error" id="descripcion-error""><!-- --><p>

```


### Modificar la función pura limpiarErrores()

Va a tener que limpiar cada campo de error 

Tomando a class

```
function limpiarErrores(error) {
	const $errores = document.querySelector('#errores');
	$errores.innerHTML = '';
}
```

A 

```
function limpiarErrores(error) {
	const $errores = document.querySelectorAll('.error')
	for (let i = 0; i < $errores.length; i++ ) {
		$errores[i].textContent = '';
	}
}
```


### Modificar mostrarError()

Solo tomaba un param que tenía un str

Eso está bien pero nos falta como param en qué elemento tenemos que mostrar el error

```
function mostrarError($elementoError, error) {
	$elementoError.textContent = error
}
```

Al usuarlo tenemos que decirle en dónde mostrar este texto de error

```
document.querySelector('form').addEventListener('submit', function(event) {
	//...
	
	if (cuentaDesde.id === cuentaHacia.id) {
		mostrarError(document.querySelector('#cuenta-desde-error'), 'No se puede transferir entre mismas cuentas');
		return false;
```


### Darle estilo 

referenciando a la clase html error en CSS

CSS: 

```
.error {
	color: red;
}
```


Refeactorizando para mostrar error en ambos campos:

Va a saltar el error mismo error (str) en ambos campos

```
document.querySelector('form').addEventListener('submit', function(event) {
	//...
	
	if (cuentaDesde.id === cuentaHacia.id) {
		const errorMismaCuenta = 'No se puede transferir entre mismas cuentas';
		mostrarError(document.querySelector('#cuenta-desde-error'), errorMismaCuenta);
		return false;
```


##### Refactorizar return y monto solicitado 

Eliminar return de cada validación y ponerlo al final

Refactorizar cuentaDesde.saldo >= montoSolicitado

```
//...

if (cuentaDesde.saldo >= montoSolicitado && montoSolicitado > 0) {
	alert('Transferencia realizada!');
} else {
	mostrarError(document.querySelector('#errores'), 'La transferencia no se puede hacer. Saldo insuficiente o  el monto debe ser mayor o igual a 0');
}

//...
return 
```

##### Ventaja: al submitear muestra todos los errores cometidos si es que lo hubo


## Refactorización con bandera y segregación de errores

Dado que hay varias cosas que pueden fallar

```
if (montoSolicitado <= 0) {
	mostrarError(document.querySelector('#errores'), 'La transferencia no se puede hacer. El monto debe ser mayor o igual a 0');
}

if (cuentaDesde.saldo < montoSolicitado) {
	mostrarError(document.querySelector('#errores'), 'La transferencia no se puede hacer. Saldo insuficiente');

}
```


### Manejar transferencia exitosa: uso de bandera, es let -> modificable

Solo cuando no haya ningun error

Dentro de event submit, fuera de validaciones 

```
let puedeTransferir = true; 

```

```
document.querySelector('form').addEventListener('submit', function(event) {
	//...
	puedeTransferir = false;
	if (cuentaDesde.id === cuentaHacia.id) {
		const errorMismaCuenta = 'No se puede transferir entre mismas cuentas';
		mostrarError(document.querySelector('#cuenta-desde-error'), errorMismaCuenta);
		return false;
```

En cada validación `puedeTransferir = false;`


Después:

Si es true:

```
if (puedeTransferir) {
	alert('Transferencia realizada con éxito');
}
```


### Manejo de bandera y return false en evento

Si tenemos

```
if (puedeTransferir) {
	alert('Transferencia realizada con éxito');
}

if (puedeTransferir) {
	return true;
} else {
	return false;
}

// eliminando return false del evento 
```


Va a ser lo mismo que: 

```
if (puedeTransferir) {
	alert('Transferencia realizada con éxito');
}

return puedeTransferir;

```

Por que es true



# Objetos

Cumple un rol muy importante en el paradigma OOP

Con objetos intentamos modelar el mundo alrededor de un contexto de una forma que le sea util a nuestro programa


## Objeto

Son paraes clave-valor (key-value pair).

Podemos ponerle propiedades y valores. 

```
const miObjeto = {
	a: 1
};

console.log(miObjeto);
```

Info en la consola

```
{a: 1} -> objeto

a: 1 -> prop y value

[|protype|]: object -> data type
```


### Las propiedades se separan con coma si hay una siguiente:

```
const miObjeto = {
	a: 1, 
	b: 2
};

console.log(miObjeto);
```


### Acceso a las propiedades

Se llaman mienbros, pueden ser props (vars) o métodos (func)

1. Notación de puntos: 

```
miObjeto.a
```
Out: 1

```
miObjeto.b
```
Out: 2


2. Por Clave (indice ?): 

Debemos escribir el nombre de la clave en el corchete

```
miObjeto['a'] // 1

miObjeto['a'] === miObjeto.a // true
```


### Existen dos formas porque a veces necesitamos poner como clave expresiones como string

1. 

```
const miObjeto = {
	a: 1, 
	b: 2, 
	'a-b': 3
};

console.log(miObjeto);
```

La consola reconoce que hay una clave a-b


2. 

Ahora si queremos acceder al valor de esa clave con la notación por punto: 

```
miObjeto.a-b;
```

Nos da error b no definido, como definimos una propiedad a, va a intentar restar -b


3. 

Si intentamos: 

```
miObjeto['a-b']
```

Out: 3


### Los valores de las propiedades de los objetos pueden ser de distintas estructuras

Ej: str 

```
const persona = {
	nombre: 'Bob', 
	edad: 30
}; 

console.log(persona);
```

Out: {nombre: 'Bob', edad: 30}

```
persona.nombre // Bob
persona.edad // 30
```


### Modificar los valores del objeto

##### No podemos reasignar 

```
persona = '1';
```


Pero si modificar un valor interno: 

```
persona.nombre = 'May'; 
```

```
console.log(persona); 
```

Out: {nombre: 'May', edad: 30}


### Distintas estructuras para las propiedades: función

```
const persona = {
	nombre: 'Bob', 
	edad: 30,
	saludar: function(aQuien) {
		alert(`Hola ${aQuien}. Me llamo ${this.nombre} y tengo ${this.edad}`);
	}
}; 

console.log(persona);
```

Ej: 

```
persona.saludar('May')
```
Out: 'Hola May...'



### Contexto de this: referencia la instancia actual del objeto 

Ej: no hace falta codear `persona.nombre` o `thispersona.nombre`

Se refiere al contexto actual


En el objeto persona `this` será `persona.`

`this.nombre` -> persona.nombre

`this.edad` -> persona.edad 


En una instancia de persona

```
const p1 = Persona
```

this será p1

```
p1.nombre
p1.edad
```



### Declaración rapida de función en un objeto

```
const persona = {
	nombre: 'Bob', 
	edad: 30,
	saludar: function(aQuien) {
		alert(`Hola ${aQuien}. Me llamo ${this.nombre} y tengo ${this.edad}`);
	},
	despedir(aQuien) {
		alert(`Chau ${aQuien}. Nos vemos luego.`);
	}
}; 

console.log(persona);
```


### Objetos anidados

```
const persona = {
	nombre: 'Bob', 
	edad: 30,
	saludar: function(aQuien) {
		alert(`Hola ${aQuien}. Me llamo ${this.nombre} y tengo ${this.edad}`);
	},
	despedir(aQuien) {
		alert(`Chau ${aQuien}. Nos vemos luego.`);
	},
	trabajo: }
		titulo: 'programador', 
		empresa: 'pepito srl'
}; 

console.log(persona.trabajo)
```

##### Accede ya no al objeto persona, sino al objeto persona.trabajo

Out: {titulo: 'programador', empresa: 'pepito srl'}


### Acceso a las propiedades del objeto anidado

```
console.log(persona.trabajo.empresa);
```

Out: 'pepito srl'


### Fundamento: funciones que devuelven un objeto

```
function crearPersona(nombre, apellido) {
	return {
		nombre: nombre,
		apellido: apellido
	}
}
```

JS nos permite escribir solo el param/clave

```
function crearPersona(nombre, apellido) {
	return {
		nombre,
		apellido
	}
}
```

Uso: 

```
const personaNueva = crearPersona('Pepe', 'Perez'); 
console.log(personaNueva);
```

Out: {nombre: 'Pepe', apellido: Perez'}


Podemos tener un método:

```
function crearPersona(nombre, apellido) {
	return {
		nombre,
		apellido,
		saludar(aQuien) {
			alert(`Hola ${aQuien}!`);
		}
	}
}

const personaNueva = crearPersona('Pepe', 'Perez'); 
console.log(personaNueva);
``` 

Podemos hacer uso de ese método

```
personaNueva.saludar('Carlos');
```

Out: alert 'Hola Carlos!'


### Usar función que retorna un objeto sin instanciar

```
crearPersona('a', 'b').saludar('Juan');
```

Para JS crearPersona es un objeto y a ese objeto que devolvío le pedimos usar la o su función saludar

Si saludar devolviese otro objeto podemos seguir usando el punto para acceder a props. 


### Rs objetos

Se compone por miembros, tiene props que son como variables para contener una unidad de información 

Y tiene métodos que son funciones. 

Una propiedad puede definir otro objeto

Y una propiedad puede definir una función que devuelve un objeto


### Propiedades computadas

Al crear un objeto podemos necesitar:

##### Declarar una propiedad de forma dinámica: asignandole una var (nombrePropiedad). 

El corchete reemplaza el valor de esta var

```
const nombrePropiedad = 'apellido';

{[nombrePropiedad]: 'Franz'};

const objeto = {[nombrePropiedad]: 'Franz'}; 

objeto.apellido // out: 'Franz' 
```

Si llamamos a 'objeto':

```
objeto;
```

Out: {apellido: 'Franz'}

Objeto fue creado con una propiedad computada/key dinámica


### Crear props en función que retorna un obj

```
function crearPersona(nombre, apellido) {
	return {
		nombre,
		apellido,
		saludar(aQuien) {
			alert(`Hola ${aQuien}!`);
		}
	}
}

const personaNueva = crearPersona('Pepe', 'Perez'); 
console.log(personaNueva);

personaNueva.edad = 37;
```

Out: {nombre: 'Pepe', apellido: 'Perez', edad: 37, saludar: f}

```
personaNueva.edad // 37
```



## Usando una función para crear objetos

```
function crearPersona(nombre, apellido) {
	return {
		nombre,
		apellido,
		saludar(aQuien) {
			alert(`Hola ${aQuien}!`);
		}
	}
}

const personaNueva = crearPersona('Pepe', 'Perez'); 
console.log(personaNueva);

personaNueva.edad = 37;
```

personaNueva tiene: 

{nombre: 'Pepe', apellido: 'Perez', edad: 37, saludar: f}

Si quisiesemos saber su edad: 

```
const edad = personaNueva.edad;
```

Si quisiesemos saber su nombre: 

```
const nombre = personaNueva.nombre;
```


Alternativa: 

### Desestructuración de objetos

```
const { nombre, edad } = personaNueva;
console.log(nombre, edad);
```

Las vars nombre y edad se bindea a las props del mismo nombre


### Pasar objetos por referencia y pasar objetos por valores: Valores por copia vs valores por referencia


#### 1. Cuando pasamos un objeto como param lo estamos pasando por referencia

##### Por referencia: un programa se ejecuta en cierto rango de memoria, cada var creada se guarda un una nueva posición de memoria

La función toma un objeto persona

Tiene que tener la propiedad edad, la podemos modificar

```
function cumplirAnios(persona) {
	persona.edad++; 
}

console.log(personaNueva.edad); // 37
```

Out: 37


Si usamos la funcion que toma el objeto y modifica su estado edad

```
function cumplirAnios(persona) {
	persona.edad++; 
}

console.log(personaNueva.edad); // 37
cumplirAnios(personaNueva); // Uso func
console.log(personaNueva.edad) // 38
```


Nueva posición de memoria: 

```
const nuevaEdad = 37; 
```

La clave es que cuando pasamos un objeto a una función se pasa por referencia 

Le estamos ordenando al pc que tome la referencia de este objeto, que se fije los valores de su posición de memoria. 

##### Al modificar su edad por referencia, no estamos haciendo una copia; estamos pisando su valor en esa posición de memoria

Ni siquiera pusimos un return, realmente modificamos el valor del objeto.


#### 2. Pasar objetos por valor: una copia local no modifica el objeto/valor inicial que viene desde fuera

Los number, string 


```
function sumarUno(valor) {
	valor++; 
}

const nuevaEdad = 37; 

console.log(sumarUno(nuevaEdad)); // 37
```
 
##### Si la función retornará o mostrar un console de valor. Si veríamos 38, solo funciona localmente. 

```
function sumarUno(valor) {
	valor = valor + 1; 
	console.log(valor);
}
```


### Métodos de objetos 

1. Object.keys(obj)

```
Object.keys(personaNueva);
```

Retorna un array con las claves 

```
['nombre', 'apellido', 'saludar', 'edad']
```


2. Object.values(obj)

```
['Pepe', 'Perez', f, 38]
```


## Rs funciones que retornan objetos

1. funcion que retorna obj

2. funcion que toma un objeto y modifica el estado de ese objeto

3. Valor por referencia: modifica permanentemente el valor en la posición de memoria

4. Valor por copia: modifica localmente el valor



# Clases

Al tomar decisiones de diseño, con las clases definimos nuestra comprensión del problema a resolver 

Esto define la arquitectura y diseño del software.

Las decisiones que se toman en las clases son dificiles de cambiar después. 

Por esto es que se modelan clases correctamente desde el principio. 

El diseño de sistemas se aprende con la práctica, es importante que nos expongamos y expongan a esta. 


Las clases trantan de modelar lo que entendemos el campo o dominio del problema. 

## Clases vs Objetos 

Al crear una clase podemos instanciarla, extenderla y mantenerla facilmente

En un objeto no podríamos instanciarlo a menos que usaramos una función que retorne un objeto

Cuando no podemos instanciar un objeto, deberíamos repetir toda su estructura para crear otro objetos distinto

Se vuelve poco mantenible y escalable

```
class Persona {
	//...
}

const persona = {
	nombre: 'Pepe',
	apellido: 'Perez'
};

const persona2 = {
	nombre: 'Pep',
	apellido: 'Peres'
};
```

Crear clase: 

Una clase es como una plantilla/plano/blueprint

Detalla sobre un tipo de objeto que vamos a crear después

```
class Jugador {
	
}
```

Cada vez que quisieramos crear un jugador nuevo

Podemos instanciar la clase Jugador 

Lo hacemos con la palabra `new ClassX`

```
class Jugador {
	
}

const messi = new Jugador(); 
const neymar = new Jugador(); 
```


## Crear props y funcionalidades en una clase

Vamos a crear un tipo especial de funcion 

Llamado constructor() que se ejecuta cuando creamos una instancia con new

Toma params locales

Sus argumentos/valores que le pasarán se asignarán a sus props

Todas las instancias van a tener estas props

Se setean todas las variables principales, necesarias para que la clase funcione

```
class Jugador {
	constructor(nombre, apellido) {
		this.nombre = nombre; 
		this.apellido = apellido;
	}
}

const messi = new Jugador(); 
const neymar = new Jugador(); 
```

También podemos crear props hardcodeados o esenciales

Sin que el usuario de la clase tenga inferencia


```
class Jugador {
	constructor(nombre, apellido) {
		this.nombre = nombre; 
		this.apellido = apellido;
		this.profesion = 'Futbolista';
	}
}

const messi = new Jugador('Lionel', 'Messi'); 
const neymar = new Jugador('Junior', 'Neymar'); 

console.log(messi, neymar);
```

Out: 

Jugador {nombre: 'Lionel', apellido: 'Messi'}
Jugador {nombre: 'Junior', apellido: 'Neymar'}

##### Una diferencia clave: nos dice que es de tipo Jugador


Podemos tener muchos tipos de datos

```
class Jugador {
	constructor(nombre, apellido) {
		this.nombre = nombre; 
		this.apellido = apellido;
		this.profesion = 'Futbolista';
	}
}

class DirectorTecnico {
	constructor(nombre, apellido) {
		this.nombre = nombre; 
		this.apellido = apellido;
	}
}

const messi = new Jugador('Lionel', 'Messi'); 
const neymar = new Jugador('Junior', 'Neymar'); 
const scaloni = new DirectorTecnico('Lionel', 'Scaloni');

console.log(messi, neymar, scaloni);
```

Jugador {nombre: 'Lionel', apellido: 'Messi'}
Jugador {nombre: 'Junior', apellido: 'Neymar'}
DirectorTecnico {nombre: 'Lionel', apellido: 'Scaloni'}


##### Importancia: a futuro podemos componer o integrar las clases

Con la clase equipo 

```
class Jugador {
	constructor(nombre, apellido) {
		this.nombre = nombre; 
		this.apellido = apellido;
	}
}

class DirectorTecnico {
	constructor(nombre, apellido) {
		this.nombre = nombre; 
		this.apellido = apellido;
		this.profesion = 'Director Técnico';
	}
}

class Equipo {
	constructor(jugadores, dt) {
		this.jugadores = jugadores; //nom plural -> arr
		this.dt = dt;
	}
}

const messi = new Jugador('Lionel', 'Messi'); 
const neymar = new Jugador('Junior', 'Neymar'); 
const scaloni = new DirectorTecnico('Lionel', 'Scaloni');
const goatFC = new Equipo ([messi, neymar], scaloni);


console.log(messi, neymar, scaloni, goatFC);
```
Jugador {nombre: 'Lionel', apellido: 'Messi'}
Jugador {nombre: 'Junior', apellido: 'Neymar'}
DirectorTecnico {nombre: 'Lionel', apellido: 'Scaloni'}
Equipo {jugadores: array(2), dt: DirectorTecnico}

goatFC es de clase Equipo, tiene dos jugadores (arr de clase jugador) y dt (de clase DirectorTecnico)


## Uso de instanceof: tipo/clase es el objeto

Si chequeamos: 

```
messi instanceof Jugador
```
true


### Uso de instanceof en clase Equipo: Manejo de errores/lógica de negocio

##### Un objeto de tipo jugador no puede ser dt

```
class Jugador {
	constructor(nombre, apellido) {
		this.nombre = nombre; 
		this.apellido = apellido;
	}
}

class DirectorTecnico {
	constructor(nombre, apellido) {
		this.nombre = nombre; 
		this.apellido = apellido;
		this.profesion = 'Director Técnico';
	}
}

class Equipo {
	constructor(jugadores, dt) {
		this.jugadores = jugadores; //nom plural -> arr
		
		const esDt = dt instanceof DirectorTecnico;
		if (!esDt) {
			throw new Error('El argumento dt no es de clase DirectorTecnico');
		}
		this.dt = dt;
	}
}

const messi = new Jugador('Lionel', 'Messi'); 
const neymar = new Jugador('Junior', 'Neymar'); 
const scaloni = new DirectorTecnico('Lionel', 'Scaloni');
const goatFC = new Equipo ([messi, neymar], scaloni);


console.log(messi, neymar, scaloni, goatFC);
```


## Uso de this 

```
class Jugador {
	constructor(nombre, apellido) {
		this.nombre = nombre; 
		this.apellido = apellido;
		this.goles = 0;
	}
}

class Equipo {
	constructor(jugadores, dt) {
		this.jugadores = jugadores; //nom plural -> arr
		
		const esDt = dt instanceof DirectorTecnico;
		if (!esDt) {
			throw new Error('El argumento dt no es de clase DirectorTecnico');
		}
		this.dt = dt;
		this.goles = 0;
	}
	
	hacerGol(jugador) {
		const esJugador = jugador instanceof Jugador;
		
		if (!esJugador) {
			throw new Error('Solo los jugadores pueden hacer goles');
		}
		jugador.goles++;
		this.goles++;
	}
}

const messi = new Jugador('Lionel', 'Messi'); 
const neymar = new Jugador('Junior', 'Neymar'); 
const scaloni = new DirectorTecnico('Lionel', 'Scaloni');
const goatFC = new Equipo ([messi, neymar], scaloni);

console.log(messi, neymar, scaloni, goatFC);
console.log(messi.goles); // 0
goatFC.hacerGol(messi);
console.log(messi.goles); // 1


const messi2 = new Jugador('Lionel', 'Messi'); 
const neymar2 = new Jugador('Junior', 'Neymar'); 
const goatFC2 = new Equipo ([messi2, neymar2], scaloni);

goatFC.hacerGol(messi2);

```

##### El mismo código se ejecuta para distintos objetos y en distintos momentos

Creamos otro equipo con otros jugadores

##### Si no hay un control/logica de negocio que impida que un jugador de otro equipo haga goles para el nuestro no cuente

##### Tambien podemos llevar el contador de goles en contra 

##### Toda la lógica de negocio quedaría en un solo lugar y no desparramada por la base de código


## Debuggear clases

Ponemos el breakpoint en la intancia que crea un jugador

Y cuando ese jugador hace un con el equipo

```
const messi = new Jugador('Lionel', 'Messi'); 

goatFC.hacerGol(messi);
```

Sobre el jugador, tocando flecha hacia abajo 

entramos a ver como se crea 

Nos lleva a la clase Jugador


### this y clase superior

El código es compartido por todos los jugadores de todos los clubes

El this entra para distingir la instancia de este objeto en particular, no se refiere a la clase

En este caso será messi


Con la fecha siguiente pasamos las instrucciones que crean al jugador en la clase Jugador

El finalizar la creación de este jugador 

Pasamos a crear a neymar

Antes de que se cree podemos averiguar en consola

Quién es this


En el código de Equipo hay algo como: 

```
class Equipo() {
	constructor(goles){
		this.goles = goles;
	}
	
	hacerGol(jugador) {
		jugador.goles++; // jugador
		this.goles++;	// this se refiere al objeto Equipo
	}
}
```



# Simón Dice 

##### Antes de escribir código, entender el problema que se quiere resolver

## Mecanismo del Simón Dice

La máquina empieza mostrando un color, el usuario toca el color

Después la máquina agrega un color más y el usuario tiene que repetir la secuencia. 

Así en loop, hasta que el usuario no pueda repetir la secuencia.


Planteamos 4 colores y a medida que interactuamos, se generan las secuencias de la máquina. 

El usuario se tiene que acordar y repetirla.


## Planteo/lógica del Simón Dice

Empezamos pensando en que son dos secuencias: maquina y usuario

Es un array, una lista de valores que representa la secuencia. 

JS: 

```
const secuenciaMaquina = [];
const secuenciaUsuario = [];

```

HTML: 

En la ui, le tenemos que decir a la máquina que empieze a jugar

ui para los colores: otros botones, para un rojo, azul, etc

```
<button id="comenzar">Comenzar</button>

<button>Rojo</button>
<button>Azul</button>
<button>Amarillo</button>
<button>Verde</button>
```

Cuando hacemos click a comenzar la máquina debería elegir una secuencia 

Debería elegir un color aleatorio

JS: 

```
const secuenciaMaquina = [];
const secuenciaUsuario = [];

document.querySelector('comenzar').addEventListener('click', function(){
	// La máquina debería elegir un color aleatorio
});
```

Entonces pensamos que sería mejor una función para elegir un color de forma aleatoria

Necesitamos una lista de colores para que están función interactue y elija

##### Cuando sabemos los valores de un objeto previamente, ponemos su nombre en mayus

##### Tambien indica que no deberíamos cambiar estos valores

```
const COLORES = ['rojo', 'amarillo', 'azul', 'verde'];

const secuenciaMaquina = [];
const secuenciaUsuario = [];

document.querySelector('comenzar').addEventListener('click', function(){
	// La máquina debería elegir un color aleatorio
});

function elegirColorAleatorio(colores) {
	Math.random() * colores.length;
}
```

##### param de la funcion en plural -> toma una lista

### Math.random() genera un valor aleatorio del 0 al 1, por lo se lo multiplica por la longitud/cantidad de elementos del objeto con el que interactua/opera

Ej: mat.random = 0.1; colores.length = 4 -> 0.1*4 = 0.4

### Redondeo floor (abajo): al resultado de esa multiplicación 

Quedaría 0.4 -> 0

```
const COLORES = ['rojo', 'amarillo', 'azul', 'verde'];

const secuenciaMaquina = [];
const secuenciaUsuario = [];

document.querySelector('comenzar').addEventListener('click', function(){
	// La máquina debería elegir un color aleatorio
});

function elegirColorAleatorio(colores) {
	Math.floor(Math.random() * colores.length);
}
```

Si random es 0.2 * 4

floor daría 1

### Buscamos simular un indice random: con este indice accedemos a una valor/posición de la lista que nos viene

##### usamos floor (abajo) y random (0 y 1) porque los indices empiezan en 0 y nos sirve que sea el minimo posible en el cálculo

```
const COLORES = ['rojo', 'amarillo', 'azul', 'verde'];

const secuenciaMaquina = [];
const secuenciaUsuario = [];

document.querySelector('comenzar').addEventListener('click', function(){
	// La máquina debería elegir un color aleatorio
});

function elegirColorAleatorio(colores) {
	const indiceAleatorio = Math.floor(Math.random() * colores.length);
	return colores[indiceAleatorio];
}
```

##### Antes de avanzar testeamos estos pequeños cálculos en la consola.

```
const colores = ['r', 'a', 'a'];

Math.random(); 

Math.random() * colores.length; 

Math.floor(Math.random() * colores.length);
```


### Función pura en la función de evento principal 

```
const COLORES = ['rojo', 'amarillo', 'azul', 'verde'];

const secuenciaMaquina = [];
const secuenciaUsuario = [];

document.querySelector('comenzar').addEventListener('click', function(){
	// La máquina debería elegir un color aleatorio
	const color = elegirColorAleatorio(COLORES); 
	secuenciaMaquina.push(color); 
	console.log('maquina', color);
});
```


### Color del usuario: tiene que matchear con el color que eligio la máquina

El usuario toca los botones, se hace una comparación de secuencia

Si el usuario se equivoca en el medio de la secuencia tiene que salir (false)


Mecanismo/loop: 

La máquina elige un color, el usuario debería elegir lo mismo

En la siguiente ronda, la maquina elige otro color y el usuario ese mismo
 
 
Mismo comportamiento en los botones: 

Chequear que el valor del botón al dar click es el mismo que el que la máquina eligio


#### Refactorizar botones

Hay varias formas 

1. 

HTML

Introducimos una clase para los botones 

```
<button id="comenzar">Comenzar</button>

<button class="color">Rojo</button>
<button class="color">Azul</button>
<button class="color">Amarillo</button>
<button class="color">Verde</button>
```

JS: 

Abajo de evento principal

Tomamos todos los colores 

```
const $colores = document.querySelector('.color'); 
for (let i = 0; i < $colores.length; i++) {
	const $color = colores[i];
	console.log($color);
	$color.addEventListener('click', function() {
		console.log(this.textContent.toLowerCase());
	});
}
```


2. 

En html hay un atributo data

Podemos describir su valor para usarlo

Ej: data-algo="valueX"

HTML

```
<button id="comenzar">Comenzar</button>

<button class="color" data-color="rojo">Rojo</button>
<button class="color" data-color="azul">Azul</button>
<button class="color" data-color="amarillo">Amarillo</button>
<button class="color" data-color="verde">Verde</button>
```


##### Se accede con la propiedad elem.dataset.-algo

JS

```
const $colores = document.querySelector('.color'); 
for (let i = 0; i < $colores.length; i++) {
	const $color = colores[i];
	console.log($color);
	$color.addEventListener('click', function() {
		console.log(this.dataset.color);
	});
}
```


### Elementos desacoplados: debemos actualizar la lista de color si queremos agregar uno más para el juego

Ej:

```
<button class="color" data-color="rojo">Rojo</button>
<button class="color" data-color="azul">Azul</button>
//...
```

con: 

```
const COLORES = ['rojo', 'amarillo', 'azul', 'verde'];
//...
```

##### Lo ideal sería que tomemos `COLORES`

Y crear los botones anteriores en base a `COLORES`

Para que nos quede acoplado/bindeado


Mecanismo: 

Si queremos agregar colores, lo hacemos en el arr `COLORES`

Al hacer esto ser generarán los nuevos colores en el HTML

Más adelante lo podemos hacer


### Matchear color máquina-usuario: chequeamos las dos secuencias

##### Chequear igualdad a cada paso

HTML:

```
<button id="comenzar">Comenzar</button>

<button class="color" data-color="rojo">Rojo</button>
<button class="color" data-color="azul">Azul</button>
<button class="color" data-color="amarillo">Amarillo</button>
<button class="color" data-color="verde">Verde</button>
```


JS: 

```
const COLORES = ['rojo', 'amarillo', 'azul', 'verde'];

const secuenciaMaquina = [];
const secuenciaUsuario = [];

document.querySelector('comenzar').addEventListener('click', function(){
	// La máquina debería elegir un color aleatorio
	const color = elegirColorAleatorio(COLORES); 
	secuenciaMaquina.push(color); 
	console.log('maquina', color);
});

const $colores = document.querySelector('.color'); 

for (let i = 0; i < $colores.length; i++) {
	const $color = colores[i];
	console.log($color);
	
	$color.addEventListener('click', function() {
		const color = this.dataset.color
		secuenciaUsuario.push($color);
		
		if (color !== secuenciaMaquina[secuenciaUsuario.length -1];) {
			console.log('perdiste!');
		}

	});
}

function elegirColorAleatorio(colores) {
	const indiceAleatorio = Math.floor(Math.random() * colores.length);
	return colores[indiceAleatorio];
}
```


### Máquina vuelve a jugar: Se necesita comparar lo que hizo el usuario

##### Y para que la máquina juege, tome un color aleatorio y lo agregue a la secuencia

```
const $colores = document.querySelector('.color'); 

for (let i = 0; i < $colores.length; i++) {
	const $color = $colores[i];
	console.log($color);
	
	$color.addEventListener('click', function() {
		const color = this.dataset.color
		console.log('usuario', color);
		secuenciaUsuario.push(color);
		
		if (color !== secuenciaMaquina[secuenciaUsuario.length -1];) {
			console.log('perdiste!');
		}
		
		if (secuenciaUsuario.length === secuenciaMaquina.length) {
			console.log('turno maquina');
		}

	});
}
```


#### Refectorizar elección de color aleatoria

```
document.querySelector('#comenzar').addEventListener('click', function() {
	const color = elegirColorAleatorio(COLORES);
	secuenciaMaquina.push(color);
	console.log('maquina', color)
});
```

Lo guardamos en una función, en el evento llamamos a esta funcion 

```
document.querySelector('#comenzar').addEventListener('click', function() {
	manejarSeleccionMaquina();
});

function manejarSeleccionMaquina() {
	const color = elegirColorAleatorio(COLORES);
	secuenciaMaquina.push(color);
	console.log('maquina', color)
}
```

#### Al presionar el botón comenzar (evento principal): llama automaticamente a la función manejarSecuenciMaquina

Ej: 

En la consola:

```
maquina rojo
```

Vemos el arr secuenciaMaquina

```
maquina rojo
secuenciaMaquina
	['rojo']
```

Si vemos la secuenciaUsuario

```
maquina rojo
secuenciaMaquina
	['rojo']
secuenciaUsuario
	[]
```


### El usuario puede comenzar a jugar apretando uno de los botones: tienen el evento click

Se ve código:

Agregaremos la llamada a la maquina

```
const $colores = document.querySelector('.color'); 

for (let i = 0; i < $colores.length; i++) {
	const $color = $colores[i];
	
	$color.addEventListener('click', function() {
		const color = this.dataset.color
		console.log('usuario', color);
		secuenciaUsuario.push(color);
		
		if (color !== secuenciaMaquina[secuenciaUsuario.length -1];) {
			console.log('perdiste!');
		}
		
		if (secuenciaUsuario.length === secuenciaMaquina.length) {
			manejarSeleccionMaquina();
		}

	});
}
```

##### Funcionamiento: toma los botones con clase color, crea un NodeList, los recorre

##### Guarda el elemento en cada paso, a este elemento en ese paso le agregamos un click

##### Tomamos su valor y lo agregamos a la secuencia del usuario

##### Si en este paso el color tomado es distinto al que hay en este mismo paso en la secuencia de la maquina, termina el juego

##### Cuando las secuencias coinciden, seguimos jugando y llamamos a la función que maneja el turno/secuencia de eleccion de color de la máquina


### Error: no resetear la secuencia del usuario

De lo contrario se pushea los valores, no se podrá hacer coincidir con el nuevo valor aleatorio

```
	if (secuenciaUsuario.length === secuenciaMaquina.length) {
		secuenciaUsuario = [];
		manejarSeleccionMaquina();
	}

```

Cuando la secuencia introducida es igual a la secuencia de la máquina 

Después reiniciar secuenciUsuario

Después pasarle el control a la máquina


### Error reasignar array constante: debemos usar  un metodo o la convertimos en let

```
const secuenciaMaquina = [];
let secuenciaUsuario = []; 
```

```
if (secuenciaUsuario.length === secuenciaMaquina.length) {
	secuenciaUsuario = [];
	manejarSeleccionMaquina();
}
```

##### Con esto la funcionalidad básica del juego está, faltan controles, validaciones especiales


## Evitar agregar secuenciasMaquina y usuario después de perder

Después de perder, la máquina y usuario pueden seguir acumulando colores

##### Después de perder, vaciamos su array

Para vaciar el arr de máquina cambiamos const por let

##### Y devolvemos el control al botón comenzar con return

```
let secuenciaMaquina = [];
let secuenciaUsuario = []; 
```

```
if (color !== secuenciaMaquina[secuenciaUsuario.length -1];) {
	secuenciaMaquina = [];
	secuenciaUsuario = []; 
	console.log('perdiste!');
	return; 
}
```


## Refactorizar funciones del bucle principal for


### Manejar selección, secuencia usuario y modificar las llamadas

##### El usuario tiene que pasarle el color a esta función para que puede agregarla a la secuencia array y que se evalúe

##### Movemos las verificaciones del bucle. El for se ocupará a esta larga funcion 

##### El bucle le pasará el control al usuario y activa la funcion

##### El usuario le pasará el control a la máquina

##### Comenzar activa la selección de la máquina

```
for (let i = 0; i < $colores.length; i++) {
	const $color = $colores[i];
	
	$color.addEventListener('click', function() {
		const color = this.dataset.color;
		manejarSeleccionUsuario(color); 
	}
}

function manejarSeleccionUsuario(color) {
	console.log('usuario', color);
	secuenciaUsuario.push(color);
	
	if (color !== secuenciaMaquina[secuenciaUsuario.length -1];) {
		secuenciaMaquina = [];
		secuenciaUsuario = []; 
		console.log('perdiste!');
		return; 
	}
	
	if (secuenciaUsuario.length === secuenciaMaquina.length) {
		secuenciaUsuario = [];
		manejarSeleccionMaquina();
	}		

}
```


## Código de lógica final 

HTML:

```
<button id="comenzar">Comenzar</button>

<button class="color" data-color="rojo">Rojo</button>
<button class="color" data-color="azul">Azul</button>
<button class="color" data-color="amarillo">Amarillo</button>
<button class="color" data-color="verde">Verde</button>
```

JS: 

```
const COLORES = ['rojo', 'amarillo', 'azul', 'verde'];

let secuenciaMaquina = [];
let secuenciaUsuario = []; 

document.querySelector('#comenzar').addEventListener('click', function() {
	manejarSeleccionMaquina();
});

const $colores = document.querySelectorAll('.color'); 

for (let i = 0; i < $colores.length; i++) {
	const $color = $colores[i];
	
	$color.addEventListener('click', function() {
		const color = this.dataset.color;
		manejarSeleccionUsuario(color); 
	}
}

function manejarSeleccionMaquina() {
	const color = elegirColorAleatorio(COLORES);
	secuenciaMaquina.push(color);
	console.log('maquina', color)
}

function manejarSeleccionUsuario(color) {
	console.log('usuario', color);
	secuenciaUsuario.push(color);
	
	if (color !== secuenciaMaquina[secuenciaUsuario.length -1];) {
		secuenciaMaquina = [];
		secuenciaUsuario = []; 
		console.log('perdiste!');
		return; 
	}
	
	if (secuenciaUsuario.length === secuenciaMaquina.length) {
		secuenciaUsuario = [];
		manejarSeleccionMaquina();
	}		

}

function elegirColorAleatorio(colores) {
	const indiceAleatorio = Math.floor(Math.random() * colores.length);
	return colores[indiceAleatorio];
}
```


## Frontend

Necesitaríamos unos cuadros de colores para ver qué secuencia está eligiendo la máquina y poder replicarla

Lo ideal sería que se iluminen a cada paso

##### Al pasar el control a usuario, necesitará delay (en cada paso y/o al final ?) para memorizar la secuencia. 


### Cambio de botones: div

Convertiremos cada botón en un div

Seguiremos manteniendo la clase en el bóton dado que nos permite mantener el NodeList

```
<button id="comenzar">Comenzar</button>

<div class="color" data-color="rojo">Rojo</div>
<div class="color" data-color="azul">Azul</div>
<div class="color" data-color="amarillo">Amarillo</div>
<div class="color" data-color="verde">Verde</div>
```

##### Dado que cuando nosotros traemos a la lógica a los elementos HTML, al nombrarlos no lo atamos al elemento en si; si no a lo que representa

##### Le pusimos colores, no le pusimos botones; así lo podemos refactorizar sin cambiar código

```
const $colores = document.querySelectorAll('.color')
```

##### Lo mismo sucede con el atributo data-algo

```
<button id="comenzar">Comenzar</button>

<div class="color" data-color="rojo"><!-- --></div>
<div class="color" data-color="azul"><!-- --></div>
<div class="color" data-color="amarillo"><!-- --></div>
<div class="color" data-color="verde"><!-- --></div>
```


### Agregando estilos a los div

HTML:

```
<head>
	<title>Simón Dice</title>
	<style></style>
</head>
```

CSS: 

```
.color {
	width: 100px;
	height: 100px; 
}
```


#### Agregando clase color al div para definir estilos especificos

HTML: 

```
<button id="comenzar">Comenzar</button>

<div class="color rojo" data-color="rojo"><!-- --></div>
<div class="color amarillo" data-color="amarillo"><!-- --></div>
<div class="color azul" data-color="azul"><!-- --></div>
<div class="color verde" data-color="verde"><!-- --></div>

```

CSS: 

```
.color {
	width: 100px;
	height: 100px;
	opacity: 0.5;
}

.rojo {
	background-color: red; 
}

.amarillo {
	background-color: yellow; 
}

.azul {
	background-color: blue; 
}

.verde {
	background-color: green; 
}
```


### Hacer brillar a los divs

Con opacity, al inicio los hace transparentes

Y cuando la máquina y el usuario los controla, lo quitamos

```
.color {
	width: 100px;
	height: 100px;
	opacity: 0.5;
}
```


### Debugg CSS

Con click derecho sobre el elemento a referenciar 

activar la opción "Almacenar como variable global"

"Store as global variable" o algo similar 

Nos almacena una variable global para llamarla: 

Console: 

```
document.querySelector('.rojo');
	div class="color rojo" data-color="rojo">...</div>

temp1
	div class="color rojo" data-color="rojo">...</div>
```

Sobre la consola podemos manipular el elemento: 

Podemos hacer temp1.style.opacity

```
document.querySelector('.rojo');
	div class="color rojo" data-color="rojo">...</div>

temp1
	div class="color rojo" data-color="rojo">...</div>

temp1.style.opacity = 1;

```

El color volverá a la normalidad


Otra opción: 

### Transition: marcamos que propiedad queremos transicionar

Ej: 

```
transition: margin-right: 2s;
```

El CSS queda: 

Para empezar todos los colores tendrán estos valores

```
.color {
	width: 100px;
	height: 100px;
	opacity: 0.5;
	transition: opacity 1s;
}
```


### Cambio en la lógica: para ver/registrar su efecto 

En: 

Agregamos:

document.querySelector('.' + color)  //clase + el color introducido/seleccionado/ que le viene o se bindea etc, etc, etc,

```
function manejarSeleccionMaquina() {
	const color = elegirColorAleatorio(COLORES);
	secuenciaMaquina.push(color);
	console.log (document.querySelector('.' + color));
	console.log('maquina', color);
}
```

Con esa linea la consola registra el html que elige la máquina

Al apretar el botón comenzar

En Console: 

```
Simón dice:

div class="azul"...

maquina azul
```


#### Agregar funcion para resaltar cuadro

Movemos el selector de la clase y modificamos su propiedad opacity accediendo a style desde JS

En menejarSeleccionMaquina llamamos a esta nueva func
```
function manejarSeleccionMaquina() {
	const color = elegirColorAleatorio(COLORES);
	secuenciaMaquina.push(color);
	resaltarCuadro(color);
	console.log('maquina', color);
}

function resaltarCuadro(color){
	document.querySelector('.' + color).style.opacity = 1;

}
```


### Apagar brillo: tomamos la nueva función y le aplicamos el valor inicial elegido para la opacidad

```
function manejarSeleccionMaquina() {
	const color = elegirColorAleatorio(COLORES);
	secuenciaMaquina.push(color);
	resaltarCuadro(color);
	console.log('maquina', color);
}

function resaltarCuadro(color){
	document.querySelector('.' + color).style.opacity = 1;
	document.querySelector('.' + color).style.opacity = 0.5;
}
```


### Corregir error en apagar brillo: setTimeOut()

La transición se activa mientras el valor siga siendo el mismo

setTimeOut() espera un tiempo antes de ejecutar una función


Primero setear opacidad en 1

después vamos a esperar 0.5 segundos

que es lo mismo que tarda la transición 

```
.color {
	width: 100px;
	height: 100px; 
	opacity: 0.5; 
	transition: opacity 0.5s;
}
```

Para volver a setear la opacidad a 0.5 que es su valor inicial

```

function resaltarCuadro(color){
	const DELAY_IN_MS = 500;
	document.querySelector('.' + color).style.opacity = 1;
	
	setTimeOut(function() {
		document.querySelector('.' + color).style.opacity = 0.5;
	}, DELAY_IN_MS);
}
```


### Corregir secuenciaMaquina: la máquina deberia repetir la secuencia antes de comenzar la siquiente ronda cuando el usuario responde adecuadamente

Introducimos un for para su array de colores

Por cada color introducido, resaltar el cuadro

```
function manejarSeleccionMaquina() {
	const color = elegirColorAleatorio(COLORES);
	secuenciaMaquina.push(color);
	
	for(let i = 0; i < secuenciaMaquina.length; i++) {
		resaltarCuadro(secuenciaMaquina[i]);
	}
}
```


### Corregir for secuanciaMaquina: evitar con setTimeOut la elección al mismo tiempo de los colores

##### El delay va a ser la suma de la primera y segunda  transición

##### A su vez lo multiplicaremos por el indice/posición del for actual

```
function manejarSeleccionMaquina() {
	const DELAY_IN_MS = 1000;

	const color = elegirColorAleatorio(COLORES);
	secuenciaMaquina.push(color);
	
	for(let i = 0; i < secuenciaMaquina.length; i++) {
		setTimeOut(function(){
			resaltarCuadro(secuenciaMaquina[i]);

		}, DELAY_IN_MS * i);
	}
}
```


##### Hasta acá la lógica de los bucles funcionan bien


### Código front y lógica básica: 

HTML: 

```
<button id="comenzar">Comenzar</button>

<div class="color rojo" data-color="rojo"><!-- --></div>
<div class="color amarillo" data-color="amarillo"><!-- --></div>
<div class="color azul" data-color="azul"><!-- --></div>
<div class="color verde" data-color="verde"><!-- --></div>

```

CSS: 

```
.color {
	width: 100px;
	height: 100px;
	opacity: 0.5;
	transition: opacity 0.5s;
}

.rojo {
	background-color: red; 
}

.amarillo {
	background-color: yellow; 
}

.azul {
	background-color: blue; 
}

.verde {
	background-color: green; 
}
```


JS: 

```
const COLORES = ['rojo', 'amarillo', 'azul', 'verde'];

let secuenciaMaquina = [];
let secuenciaUsuario = []; 

document.querySelector('#comenzar').addEventListener('click', function() {
	manejarSeleccionMaquina();
});

const $colores = document.querySelectorAll('.color'); 

for (let i = 0; i < $colores.length; i++) {
	const $color = $colores[i];
	
	$color.addEventListener('click', function() {
		const color = this.dataset.color;
		manejarSeleccionUsuario(color); 
	}
}

function manejarSeleccionMaquina() {
	const DELAY_IN_MS = 1000;

	const color = elegirColorAleatorio(COLORES);
	secuenciaMaquina.push(color);
	
	for(let i = 0; i < secuenciaMaquina.length; i++) {
		setTimeOut(function(){
			resaltarCuadro(secuenciaMaquina[i]);

		}, DELAY_IN_MS * i);
	}
}

function manejarSeleccionUsuario(color) {
	console.log('usuario', color);
	secuenciaUsuario.push(color);
	
	if (color !== secuenciaMaquina[secuenciaUsuario.length -1];) {
		secuenciaMaquina = [];
		secuenciaUsuario = []; 
		console.log('perdiste!');
		return; 
	}
	
	if (secuenciaUsuario.length === secuenciaMaquina.length) {
		secuenciaUsuario = [];
		manejarSeleccionMaquina();
	}		

}

function resaltarCuadro(color){
	const DELAY_IN_MS = 500;
	document.querySelector('.' + color).style.opacity = 1;
	
	setTimeOut(function() {
		document.querySelector('.' + color).style.opacity = 0.5;
	}, DELAY_IN_MS);
}

function elegirColorAleatorio(colores) {
	const indiceAleatorio = Math.floor(Math.random() * colores.length);
	return colores[indiceAleatorio];
}
```


### Error: intromisión del usuario cuando juega la máquina

Debemos bloquear el click del usuario cuando la máquina esta haciendo su secuencia


#### Antes agregamos que nos resalte los cuadros que clickea el usuario

```
function manejarSeleccionUsuario(color) {
	console.log('usuario', color);
	secuenciaUsuario.push(color);
	resaltarCuadro(color);
	
	//if...
	
	//if...
```


#### Y antes también agregar un delay cuando la máquina empieza a introducir su secuencia

Dado que cuando el usuario termina, la máquina empieza inmediatamente; no es del todo satisfactoria esa experiencia, es perjudicial

En el delay del for, modificamos i

Hacemos (i + 1) para que al menos nos espere un segundo

```
function manejarSeleccionMaquina() {
	const DELAY_IN_MS = 1000;

	const color = elegirColorAleatorio(COLORES);
	secuenciaMaquina.push(color);
	
	for(let i = 0; i < secuenciaMaquina.length; i++) {
		setTimeOut(function(){
			resaltarCuadro(secuenciaMaquina[i]);

		}, DELAY_IN_MS * (i+1);
	}
}
```


#### Corregir intromisión del usuario

Pensamos que si la máquina todavía está jugando, desactivar los click del usuario

1. Cuando empieza a jugar la máquina, bloqueamos el input del usuario

2. Cuando la máquina termina, activarlos

```
function manejarSeleccionMaquina() {
	const DELAY_IN_MS = 1000;

	const color = elegirColorAleatorio(COLORES);
	secuenciaMaquina.push(color);
	
	for(let i = 0; i < secuenciaMaquina.length; i++) {
		setTimeOut(function(){
			resaltarCuadro(secuenciaMaquina[i]);

		}, DELAY_IN_MS * (i+1);
	}
}
```

Tenemos que remover el event listener de los divs

```
const $colores = document.querySelectorAll('.color'); 

for (let i = 0; i < $colores.length; i++) {
	const $color = $colores[i];
	
	$color.addEventListener('click', function() {
		const color = this.dataset.color;
		manejarSeleccionUsuario(color); 
	}
}
```

Hay dos formas: 

1. EventTarget: removeAddEventListener()

Ej: 

```
element.addEventListener('mouseover', handleMouseOver, true);

element.removeEventListener('mouseover', handleMouseOver, false);

element.addEventListener('mouseover', handleMouseOver, true);

```

Requiere descomponer y mover las funciones para paserle la referncia al removeAddEventListener y agregar true o false


2. Reemplazar el addEventListener click por `onclick`

Evita que cambiemos el código en este caso

```
element.onclick = function() {
	//...
}
```

JS: 

```
const $colores = document.querySelectorAll('.color'); 

for (let i = 0; i < $colores.length; i++) {
	const $color = $colores[i];
	
	$color.onclick = function() {
		const color = this.dataset.color;
		manejarSeleccionUsuario(color); 
	}
}
```

Encerramos este código dos funciones: 

##### 1. Bloquear usuario: La función de click está vacía, no tiene funcionalidad

```
function bloquearUsuario() {
	const $colores = document.querySelectorAll('.color'); 

	for (let i = 0; i < $colores.length; i++) {
		const $color = $colores[i];
		
		$color.onclick = function() {}
	}
}
```


##### 2. Desbloquear usuario: Habilita el click para el elemento

```
function desbloquearUsuario() {
	const $colores = document.querySelectorAll('.color'); 

	for (let i = 0; i < $colores.length; i++) {
		const $color = $colores[i];
		
		$color.onclick = function() {
			const color = this.dataset.color;
			manejarSeleccionUsuario(color); 
		}
	}
}
```

##### 3. Llamada a las funciones bloqueo y desbloqueo de usuario

En la función manejarSeleccionMaquina

1. Al principio del código, cuando empieza la máquina bloqueamos al usuario

2. Al final del código, desbloqueamos al usuario

```
function manejarSeleccionMaquina() {
	const DELAY_IN_MS = 1000;
	bloquearUsuario();
	
	const color = elegirColorAleatorio(COLORES);
	secuenciaMaquina.push(color);
	
	for(let i = 0; i < secuenciaMaquina.length; i++) {
		setTimeOut(function(){
			resaltarCuadro(secuenciaMaquina[i]);

		}, DELAY_IN_MS * (i+1);
	}
	
	desbloquearUsuario();
	console.log('maquina', color);
}
```


### Corrección al desbloquear al usuario: en el medio de la secuencia podemos hacerle click dado que tiene un setTimeOut; el setTimeOut va en paralelo; el desbloquear usuario se ejecuta inmediatamente después

##### Por eso el desbloquear usuario necesita un setTimeOut()

Si hay 10 elementos, queremos que se desbloque al usuario en 10s

Es lo que va a tardar en ejecutar el bucle

Necesitamos ejecutar su delay por la cantidad de elementos en el array de secuenciaMaquina

```
function manejarSeleccionMaquina() {
	const DELAY_IN_MS = 1000;
	bloquearUsuario();
	
	const color = elegirColorAleatorio(COLORES);
	secuenciaMaquina.push(color);
	
	for(let i = 0; i < secuenciaMaquina.length; i++) {
		setTimeOut(function(){
			resaltarCuadro(secuenciaMaquina[i]);

		}, DELAY_IN_MS * (i+1));
	}
	
	setTimeOut(function() {
		desbloquearUsuario();
	}, DELAY_IN_MS * secuenciaMaquina.length);

	console.log('maquina', color);
}
```


## Agregar estado del juego y contador de rondas

HTML

Dado que ronda (p) no va a cambiar

Agregamos el id al span que tiene un valor que si va a cambiar

```
<p id="estado">Tocá comenzar para inicial el juego</p>
<p>Ronda<span id="ronda">0</span></p>

<button id="comenzar">Comenzar</button>

<div class="color rojo" data-color="rojo"><!-- --></div>
<div class="color amarillo" data-color="amarillo"><!-- --></div>
<div class="color azul" data-color="azul"><!-- --></div>
<div class="color verde" data-color="verde"><!-- --></div>
```

JS: 

```
const $ronda = document.querySelector('#ronda'); 
const $estado = document.querySelector('#estado'); 
```

##### Cuando juega la máquina incrementamos ronda

Llamamos a la función incrementarRonda

```
const $ronda = document.querySelector('#ronda'); 
let ronda = 0;
const $estado = document.querySelector('#estado'); 
```

```
function manejarSeleccionMaquina() {
	//Delay
	//bloquearUsuario
	incrementarRonda();
}
```

Incrementar ronda

```
function incrementarRonda() {
	$ronda.textContent = ++ronda;
}
```


## Cambiar estado (turno máquina y turno jugador), al perder reiniciar el conteo de la ronda

Modificamos una parte del código de manejarSeleccionUsuario

```
if (color !== secuenciaMaquina[secuenciaUsuario.length -1];) {
	secuenciaMaquina = [];
	secuenciaUsuario = []; 
	console.log('perdiste!');
	return; 
}

```

Lo refactorizamos en una función 

```
if (color !== secuenciaMaquina[secuenciaUsuario.length -1];) {
	reiniciar();
	return; 
	
```

```
function reiniciarRonda() {
	ronda = 0;
	$ronda.textContent = ronda;
}

function reiniciar() {
	secuenciaMaquina = [];
	secuenciaUsuario = []; 
	reiniciarRonda(); 
}
```


Actualizar estado: 

```
function actualizarEstad(estado) {
	$estado.textContent = estado; 
}
```

Modificar HTML: 

```
<p id="estado"><!-- --></p>
```

Al comienzo del juego/programa

```
const $estado = document.querySelector('#estado')

bloquearUsuario();
actualizarEstado('Tocá "Comenzar" para iniciar el juego');
```


Modificar reiniciar: 

```
function reiniciarRonda() {
	ronda = 0;
	$ronda.textContent = ronda;
}

function actualizarEstad(estado) {
	$estado.textContent = estado; 
}

function reiniciar() {
	console.log('perdiste!');
	actualizarEstad('Tocá "Comenzar" para iniciar el juego')
	secuenciaMaquina = [];
	secuenciaUsuario = []; 
	reiniciarRonda(); 
}
```


Refactorización de reiniciar: le damos todo el manejo del estado inicial del juego

Al inicio del código llamamos a reinciar()

```
const COLORES
 
let secuenciaUsuario
let secuenciaMaquina

const $ronda = doc
let ronda = 0; 
const $estado = doc

reiniciar();

document.querySelector('#comenzar');
	manejarSeleccionMaquina();

function desbloquearUsuario() {}

function bloquearUsuario() {}

function manejarSeleccionMaquina() {}

function resaltarCuadro() {}

function manejarSeleccionUsuario() {}

```

```


function reiniciar() {
	console.log('perdiste!');
	bloquearUsuario();
	actualizarEstado('Tocá "Comenzar" para iniciar el juego')
	secuenciaMaquina = [];
	secuenciaUsuario = []; 
	reiniciarRonda(); 
}
```


Actualizar estado en la función manejarSeleccionMaquina()

```
function manejarSeleccionMaquina() {
	const DELAY_IN_MS
	actualizarEStado('Turno de la máquina...')
	bloquearUsuario();
	incrementarRonda();
}
```


Actualizar estado para turno del usuario, cuando termine la secuencia de la máquina en setTimeOut()

```
function manejarSeleccionMaquina() {
	const DELAY_IN_MS
	actualizarEStado('Turno de la máquina...')
	bloquearUsuario();
	incrementarRonda();
}

//...

setTimeOut(function(){
	desbloquearUsuario();
	actualizarEstado('Turno del jugador...');
}, DELAY_IN_MS);
```


### Actualiza estado cuando el usuario pierde

Modificamos la funcion reiniciar

y modificamos validación if en  manejarSecuenciaUsuario

```
function reiniciar(usuarioPerdio = false) {
	bloquearUsuario();
	if (usuarioPerdio) {
		actualizarEstado('Perdiste! Tocá "Comenzar" para reiniciar el juego')
	} else {
		actualizarEstado('Tocá "Comenzar" para iniciar el juego')
	}
	secuenciaMaquina = [];
	secuenciaUsuario = []; 
	reiniciarRonda(); 
}
```

```
function manejarSecuenciaUsuario(color) {
	secuenciaUsuario.push(color);
	resaltarCuadro(color);
	
	if(color !== secuenciaMaquina[secuenciaUsuario.length - 1]) {
		reiniciar(true)
		return;
	}
}
```

## Código frontend final

HTML: 

```
<p id="estado"><!-- --></p>
<p>Ronda<span id="ronda">0</span></p>
<button id="comenzar">Comenzar</button>

<div class="color rojo" data-color="rojo"><!-- --></div>
<div class="color amarillo" data-color="amarillo"><!-- --></div>
<div class="color azul" data-color="azul"><!-- --></div>
<div class="color verde" data-color="verde"><!-- --></div>
```

JS: 

```
const COLORES = ['rojo', 'amarillo', 'azul', 'verde'];

let secuenciaMaquina = [];
let secuenciaUsuario = []; 

const $ronda = document.querySelector('#ronda');
let ronda = 0; 
const $estado = document.querySelector('#estado');

reiniciar();

document.querySelector('#comenzar').addEventListener('click', function(){
		manejarSeleccionMaquina();
});


function desbloquearUsuario() {
	const $colores = document.querySelectorAll('.color');
	for (let i = 0; i < $colores.length; i++) {
		const $color = $colores[i];
		$color.onclick = function() {
			const color = this.dataset.color;
			manejarSeleccionUsuario(color);
		}
	}	
}

function bloquearUsuario() {
	const $colores = document.querySelectorAll('.color');
		for (let i = 0; i < $colores.length; i++) {
		const $color = $colores[i];
		$color.onclick = function() {}
	}	
}

function manejarSeleccionMaquina() {
	const DELAY_IN_MS = 1000; 
	actualizarEstado('Turno de la máquina...');
	bloquearUsuario();
	incrementarRonda();
	
	const color = elegirColorAleatorio(COLORES);
	secuenciaMaquina.push(color);
	
	for (let i = 0; i < secuenciaMaquina.length; i++) {
		setTimeout(function() {
			resaltarCuadro(secuenciaMaquina[i]);
		}, DELAY_IN_MS * (i+1));
	}
	
	setTimeout(function() {
		desbloquearUsuario();
		actualizarEstado('Turno del jugador...');
	}, DELAY_IN_MS * secuenciaMaquina.length);
}

function resaltarCuadro(color) {
	const DELAY_IN_MS = 500;
	
	document.querySelector('.' + color).style.opacity = 1;
	
	setTimeout(functio() {
		document.querySelector('.' + color).style.opacity = 0.5;
	}, DELAY_IN_MS);
}

function manejarSeleccionUsuario(color) {
	secuenciaUsuario.push(color);
	resaltarCuadro(color);
	
	if (color !== secuenciaMaquina[secuenciaUsuario.length - 1]) {
		reiniciar(true);
		return;
	}
	
	if (secuenciaUsuario.length === secuenciaMaquina.length) {
		secuenciaUsuario = [];
		manejarSeleccionMaquina();
	}
}

function elegirColorAleatorio(colores) {
	const indiceAleatorio = Math.floor(Math.random() * colores.length);
	return colores(indiceAleatorio);
}

function reiniciarRonda() {
	ronda = 0;
	$ronda.textContent = ronda;
}

function actualizarRonda(estado) {
	$estado.textContent = estado;
}

function reiniciar(usuarioPerdio = false) {
	bloquearUsuario();
	if (usuarioPerdio) {
		actualizarEstado('Perdiste! Tocá "Comenzar" para reiniciar el juego')
	} else {
		actualizarEstado('Tocá "Comenzar" para iniciar el juego')
	}
	secuenciaMaquina = [];
	secuenciaUsuario = []; 
	reiniciarRonda(); 
}

```



# Tailwind CSS, package.json, npm (node package manager) instalar librerias, utilidades

## Tailwind

Usa clases unitarias para aplicar estilo a los elementos


## Compartir código base/source code

### npm

Registro de paquetes

```
npm install packageX
```

packageX tiene que estar registrado en `NPM Register`

Registra la información del paquete y lo hace disponible para que se puede instalar y usar el código con npm 


npm resuelve el problema para compartir código reutilizable, agiliza el desarrollo de software para no tener que escribir código desde 0. 

Antes un código o algoritmo que resolvia un problema estaba contenido en una carpeta local llamada vendor que creaba el desarrollador de la funcionalidad. 

Esta carpeta de se iba pasando localmente entre desarrolladores y se subía a la web. 

Desventajas: si la funcion debe actualizarse porque tenia algun bug o agregaba una funcionalidad, el creador o los demás desarrolladores tenían que reescribir el archivo, pasárselo o subirlo a la web. 

Introducir una nueva versión, el código de la librería cambia y puede romper el código que está usando esa funcionalidad. 


### Antes de usar npm: instalar node js

### npm init: en la carpeta raíz o principal del proyecto

```
npm init
```

Primero nos hace escribir un archivo llamado `package.json`

#### archivo .json: Lista las dependencias de proyecto en tiempo de desarrollo y ejecución

Describe el nombre del paquete. 

nombre, version, descripción, entry point

comando para testing, repo git, keywords

author, license


Ej: 

package.json

```
{
	"name":"simon-dice",
	"version": "1.0.0", 
	"description": "Un juego de simon dice", 
	"main": "index.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"author": "",
	"license": "ISC"
}
```

### Campos importantes de json: main, scripts

main: archivo principal 

scripts test: cómo se testea 


##### El archivo .json podría describir un libreria abierta que sería publicada en NPM Register

Puede representar un problema de seguridad: se recomienda instalar paquetes reconocidos como seguros, confiables, etc

En los que se sabe el autor y el contenido


### Script test

En el directorio dónde está el json: 

```
npm run nombreScript
```

Como: 

```
npm run test
```
Salida: 

Error: no test specified


Va a ejecutar el mensaje que tiene este comando en json

```
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},
```


### Instalar un server 

Hasta ahora estamos abriendo el archivo en el navegador para depurar el programa

Para empezar a usar un servidor http para servir los archivos de desarrollo y tengamos más funcionalidades a la hora del desarrollo

##### El protocolo file:///home no soporta funcionalidad avanzadas como lo haría HTTP con llamadas a las apis por razones de seguridad

```
npm i -g http-server
```

i: install shortcut

-g: instalación global


Uso de http-server: 

En la raíz

```
http-server .
```

. significa carpeta altual: para ejecutarse 

Nos provee un local host para nuestra maquina

Y otro para compartir a través de la misma red ethernet o wifi

Para que otra persona o disposibivo acceda a nuestra app en desarrollo

En la consola, mientras tengamos el server abierto; nos muestra los request/pedidos que vamos o el navegador va haciendo


## npm install: package-lock.json

Instalar nuestro package.json

En la raíz

```
npm install
```

Revisa el `package.json` para verificar sus dependencias  

Genera `package-lock.json` guarda las versiones especificas de las dependencias de este proyecto

Además crear una carpeta `node_modules` para guardar todas las dependencias en un solo lugar

##### node_modules es la clave sobre como función el mundo moderno de la programación: los paquetes que instalas dependen de otros para funcionar, esto se puede ver en cada package.json de cada libreria/utilidad/dependencia se llaman devDependencies

 
### Instalar localmente tailwind css: sin usar -g

```
npm install tailwind @tailwindcss/cli
```

En package.json nos agrego una nueva key "dependencies"

```
"dependencies": {
	"@tailwindcss/cli": "^4.1.8",
	"tailwindcss": "^4.1.8"
}
```

En package-lock.json: 

```
"name": simon-dice", 
"version": "1.0.0", 
"lockfileVersion": 3,
"requires": true, 
"packages": {
	"": {
		"name": "simon-dice", 
		"version": "1.0.0",
		...
	},
	"node_modules/@ampproject/remapping"
}
```

"node_modules/@ampproject/remapping"
"node_modules/@issacs/fs-minipass"

Son más paquetes como tailwindcss

Estan en `registry.npm`


##### npm termina creando graph o map de dependencias que marca las dependencias de cada una y todas a la vez

##### Además de depender de otras librerias, dependen de ciertas versiones especificas 

##### Cuando dos paquetes/librerias dependen de una misma libreria, npm aplica la resolución de dependencias: toma la minima version del paqueta para los dos

##### Las versiones de la resolución de dependencia se encuentra en package-lock.json


## Archivos se deben restrear o subir a git/github

### Ej: la carpeta node_modules nunca la tenemos que incluir: no hace falta compartirlo con npm install lo obtenemos


### archivo .gitignore

Tipos de archivos o carpetas que queremos ignorar

Proyecto: 

carpeta raíz simon-dice

```
node_modules
.gitignore
index.html
main.js
package-lock.json
package.json
```

#### Ej: ignorar capeta node_modules

En .gitignore

```
node_modules/
```

#### Chequear gitignore con git status

untracked files:

```
.gitignore
package-lock.json
package.json
```

##### Si borramos la linea node_modules/ del .gitignore vuelve aparecer en untracked files del git status

```
.gitignore
node_modules/
package-lock.json
package.json
```

##### Podemos borrar la carpeta node_modules y volverla a instalar con el comando npm install


## Instalaciones de dependencias locales

### npm devDependencies

#### Instalar http-server como una dependencia de desarrollo: solo la utilizaremos cuando desarrollamos, pero no cuando pongamos un funcionamiento nuestra app

```
npm i --save-dev http-server
```

### deployDependencies

#### tailwindcss si es una dependencia que usará constantemente nuestra app en producción, en nuestro código fuente escribimos/utilizamos taildwind

```
npm i tailwind @tailwindcss/cli
```


## Agregar scrips al package.json: npm run

### start: para lanzar del servidor de desarrollo que tiene la app

```
"scripts": {
	"start": "http-server .",
	"test": "echo..."
},
```

"http-server ." para la carpeta actual

```
npm run start
```

Abre el server con las dos direcciones y puertos: local y compartido


## Tailwind CSS

### Instalación: se puede usar en distintos entornos como Vite, PostCSS, Tailwind CLI, etc

#### Tailwind CLI

```
npm i tailwind @tailwindcss/cli
```

Importar clases de tailwind: 

Escribir en nuestro archivo principal 

```
@import "tailwindcss"; 
```

Ejecutar npx con input y output

#### watch: al modificar el input, reescribe el output, nos muestra por la terminal lo que estamos compilando

```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

Uso de CSS:

```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```


### Crear main.css

o index.css en la raíz

```
@import "tailwindcss";
```

### Correr tailwind en la terminal 

```
npx @tailwindcss/cli -i ./input.css -o ./output.css --watch
```

##### En la raíz nos crea output.css que contiene todas las reglas base de tailwind, podemos agregar más reglas en nuestro index.css (que es nuestro input)

Ej: 

Si teníamos una regla como

```
.color {
	width: 100px;
	height: 100px; 
	opacity: 0.5;
	transition: opacity 0.5s;
}

.rojo {
	background-color: red;
}

.amarillo {
	background-color: yellow;
}

.azul {
	background-color: blue;
}

.verde {
	background-color: green;
}
```

#### linkear en html nuestro archivo output.css

```
<head>
	<link href="./output.css" rel="stylesheet">
</head>
```


### Reset CSS y funcionamiento de los navegadores

Las reglas que vienen en el output.css son formas de dar un estilo uniforme para todos los navegadores

Dado que el navegador tiene un motor que interpreta el código html, css, js y lo muestra en la ventana

Cada equipo de desarrollo de los navegadores interpretaron de distinta forma ciertas reglas de css 

Entonces hay cosas que se ven de forma distinta en los navegadores

##### Es una practica común resetear/sobreescribir esos estilos o comportamientos conflictivos


## Código de Tailwind 

### Las librerias tienen una guia de estilo de codificación: estas formas estan pensadas para evitar conflictos 

Es como los desarrolladores creen que debe usarse la librería 

CSS sin tailwind se base en modificar la caja de los elementos HTML. 

##### La filosofia de tailwind es que el código estilo sea expresivo: que el código refleje lo que se vea en la ventana del navegador

Usando `utility clases`

```
<div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <img class="size-12 shrink-0" src="/img/logo.svg" alt="Logo de ChitChat" />
  <div>
    <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
    <p class="text-gray-500 dark:text-gray-400">¡Tienes un mensaje nuevo!</p>
  </div>
</div>
```

Dimensiones: 

sm: small
lg: large
xl: extra large


## Sección layout/diseño en tailwind: poner los elementos uno al lado de otro (fila)

Necesitamos un div que englobe a los div de colores

HTML: 

```
<p id="estado"><!-- --></p>
<p>Ronda<span id="ronda">0</span></p>
<button id="comenzar">Comenzar</button>

<div class="columns-2">
	<div class="color rojo" data-color="rojo"><!-- --></div>
	<div class="color amarillo" data-color="amarillo"><!-- --></div>
	<div class="color azul" data-color="azul"><!-- --></div>
	<div class="color verde" data-color="verde"><!-- --></div>
</div>
```

### Llenar el espacio

```
<p id="estado"><!-- --></p>
<p>Ronda<span id="ronda">0</span></p>
<button id="comenzar">Comenzar</button>

<div class="columns-2 gap-0">
	<div class="color rojo" data-color="rojo">&nbsp;</div>
	<div class="color amarillo" data-color="amarillo">&nbsp;</div>
	<div class="color azul" data-color="azul">&nbsp;</div>
	<div class="color verde" data-color="verde">&nbsp;</div>
</div>
```

`&nbsp;` non breaking space

en index.css

```
.color {
	height: 300px;
}
```


### Estilo a los botones con Tailwind: en la seleccion components -> ui blocks -> live preview

##### Inspeccionar los botones del sitio y copiar las clases

```
<div class="pb-2">
	<p id="estado"><!-- --></p>
	<p>Ronda<span id="ronda">0</span></p>
	<button id="comenzar" class="rounded-sm">Comenzar</button>
</div>
```

pb padding 


### Estilo al body: margin (espacio hacia afuera) y padding (espacio hacia adentro)

```
<body class="p-8 m-8">
	<div class="pb-2">
		<p id="estado"><!-- --></p>
		<p>Ronda<span id="ronda">0</span></p>
		<button id="comenzar" class="rounded-sm">Comenzar</button>
	</div>

	<div class="columns-2 gap-0">
		<div class="color rojo" data-color="rojo">&nbsp;</div>
		<div class="color amarillo" data-color="amarillo">&nbsp;</div>
		<div class="color azul" data-color="azul">&nbsp;</div>
		<div class="color verde" data-color="verde">&nbsp;</div>
	</div>
</body>
```

### Separar los controles con otro div

```
<p id="estado"><!-- --></p>
<p>Ronda<span id="ronda">0</span></p>
<button id="comenzar" class="rounded-sm">Comenzar</button>
```


## Script css en package.json 

```
"scripts": {
	"css": "npx @tailwindcss/css -i ./index.css -o ./output.css --watch",
	"start": "http-server .",
	"test": "echo"
}
```


### npx, ejecuta los paquetes: si no tenemos el paquete, lo descarga y lo ejecuta 



# Memotest, animaciones, testing

## Mecanismo

Tiene n cantidad de cartas

Tenemos que encontrar el par

Si son iguales, salen del juego 

Si son distintas, quedan


Layout

```
					Memotest
					
pares encontrados	Turnos		Reiniciar

carta 1 	carta 2 	carta 3 	carta 4

//...

```


## Código del memotest: Html tailwind css y js

HTML 

```
<body bg-gradient-to-r from-purple class="flex justify-center items-center">
	<div>
		<h1>Memotest</h1>
		
		<div class="flex justify-between items-center ab-6">
			<div>
				Pares encontrados <span id="pares-encontrados">0</span>
			</div>
			<div class="text-xl">
				Turnos <span id="turnos"></span>
			</div>
			<button id="reiniciar">
				Reiniciar
			</button>
		</div>
		
		<div id="tablero" class="grid grid-cols-4 gap-4"></div>
	</div>
</body>
```


CSS: 

##### En CSS tenemos las clases de tailwind y las que agregamos como desarrolladores a nuestro main css

### cdn: content delivery network

Sirve el contenido desde el cache local del navegador, cachea urls

Como en los navegadores, recuerdan/guarda el contenido de la url y la sirve desde la memoria, sin descargarla de nuevo

Si hay 100 sitios que usan `src="https://cdn.tailwindcss.com"`

Si esta guardado en el cache ni siquiera va a esta dirección a buscar la dependencia

Si esta dirección deja de estar en servicio, nuestra app se queda sin estilo. 

Deberíamos tener un backup

```
.carta {
	transition: transform 0.2s;
	position: relative; 
}

.carta.girada {
	transform: rotateY(180deg);
}

.carta.girada carta-interna {
	backface-visibility: visible;
}

.carta-interna {
	width: 100%; 
	height: 100%;
	position: absolute;
	backface-visibility: hidden;
	display: flex;
	align-items: center;
	justify-content: center; 
	border-radius: 8px;
}

.frente-carta {
	background-color: light-blue;
	color: white;
	transform: rotateY(0deg);
}

.dorso-carta {
	background-color: light-pink;
	color: white;
	transform: rotateY(180deg);
}
```


JS: 

```
const $tablero = document.querySelector('#tablero');
const $reiniciar = document.querySelector('#reiniciar');
const $paresEncontrados = document.querySelector('.paresEncontrados');
const $turnos = document.querySelector('#turnos');

//emojis
const emojis = [apple, pear, banana, orange]; 
let cartas = []; //guardará cartas/elm html creadas
let $cartasVisisbles = []; //guardará las cartas volteadas
let paresEncontrados = []; //guardará los match
let turnos = 0; //contador
let esTableroBloqueado = flase; 

function inicializar() {
	items = [...emojis, ...emojis];
	mezclar(items);
	$tablero.innerHTML = '';
	$cartasVisibles = [];
	paresEncontrados = 0;
	turnos = 0;
	lockboard = false; 
	actualizarEstado(); 
	crearCartas(items);
}

function mezclar(items) {
	for (let i = items.length -1; i > 0; i--) {
		const j = Math.floor(Math.rondom() * (i + 1));
		let temp = items[i];
		items[i] = items[j];
		items[j] = temp;
		
	}
	
}

function crearCartas(cartas) {
	cartas.forEach((emoji, index) => {
		const $carta = document.createElement('div');
		$carta.classList.add(
			'carta',
			'shadow-md',
			'aspect-square',
			'cursor-pointer',
			'text-3xl',
			'font-bold'
		);
		$carta.dataset.index = index;
		$carta.dataset.emoji = emoji;
		
		const $cartaInterna = document.createElement('div');
		$cartaInterna.classList.add('carta-interna');
		
		const $frenteCarta = document.createElement('div');
		$frenteCarta.classList.add('frente-carta', 'carta-interna');
		$frenteCarta.textContent = '?';
		
		const $dorsoCarta = document.createElement('div');
		$dorsoCarta.classList.add('dorso-carta', 'carta-interna');
		$dorsoCarta.textContent = emoji;
		
		$cartaInterna.appendChild($frenteCarta);
		$cartaInterna.appendChild($dorsoCarta);
		$carta.appendChild($cartaInterna);
		
		$carta.addEventListener('click', () => mostrarCarta($carta));
		$tablero.appendChild($carta);
	});
}

function mostrarCarta($carta){
	if (esTableroBloqueado) {
		return false;
	}
	
	if ($carta === $cartasVisibles[0]) {
		return;
	}
	
	$carta.classList.add('girada');
	$cartasVisibles.push($carta);
	
	if ($cartasVisibles.length === 2) {
		turnos++;
		actualizarEstado();
		esTableroBloqueado = true;
		const [cartaUno, cartaDos] = $cartasVisibles;
		if (verificarPar(cartaUno.dataset.emoji, cartaDos.dataset.emoji)) {
			deshabilitarCartas($cartasVisibles);
			paresEncontrados++;
		} else {
			ocultarCartas($cartasVisibles);
		}
	}
}

function verificarPar(primerItem, segundoItem) {
	return primerItem == segundItem;
}

function deshabilitarCartas($cartas) {
	$cartas.forEach($carta => {
		$carta.removeEventListener('click', () => mostrarCarta(card));
	});
	
	actualizarEstado();
	reiniciarTablero();
	
	if (paresEncontrados === emojis.length) {
		setTimeout(() => alert('Ganaste!'), 500);
	}
}

function ocultarCartas($cartas) {
	setTimeout(() => {
		$cartas.forEach($carta => $carta.classList.remove('girada'));
		reiniciarTablero();
	}, 1000);
}

function reiniciarTablero() {
	$cartasVisibles = []; 
	esTableroBloqueado = false;
}

function actualizarEstado() {
	$paresEncontrados.textContent = paresEncontrados; 
	$turnos.textContent = turnos;
}

$reiniciar.addEventListener('click', inicializar);

inicializar();
```


## spread operator ... (copiar/reemplazar)

`items = [...emojis, ...emojis];`

Necesitamos pares

Ej: 

Si tenemos

```
const a = [1, 2];
const b = [...a]; // copiar a
```

Si solo ponemos: 

```
const b = [a];
```

Nos crea un array anidado

solo queremos los valores

Se complica el acceso. 

Deberiamos hacer algo como:

```
b[0][0];
```

Se transforma en "b todos los valores que hay dentro de a"

b nos queda como un array simple


### Duplicación de los valores de un array con spread operator: las posiciones/index/items se duplican

```
b = [...a, ...a];
```

Crea un array que tiene todos los items de a y otra vez todos los items de a

```
0: 1
1: 2
2: 1
3: 2
```

Por más que parezca que tiene dos posiciones por la forma de su código:

Dado que solo hay una coma

```
b = [...a, ...a]
```

En realidad toma todas posiciones que tiene a y a y las guarda/suma/acumula


## inicializar() y mezclar(items): se usa para reiniciar las posiciones dónde aparecen los elementos, evitando la repetición de las posiciones/juego

Cada vez que se carge la página o el juego, esos items tienen que estar mezclados

mezclar() se base en el algoritmo de fisher-yates

recorre los items desde la posición más alta

i como contador y j elige una posición random 

reemplaza los elementos de las posiciones i, j

Introducimos la variable temporal dado que no podemos hacer: 

```
items[i] = items[j];
items[j] = items[i]; // dado que i sería j
```

temp guarda el valor de i: 

```
let temp = items[i];
items[i] = items[j];
items[j] = temp;
```

o más eficiente: 

Definimos los valores en una sola declaración

```
[items[i], items[j]] = [[items[j], items[i]]
```

Crea un array con dos valores

Tiene dos items en j y dos items en i

Si tenemos dos emojis: j va a ser un valor entre 0 y 1

items en i va a ser un valor entre 0 y 1

Crea un array con algunos de esos emojis 


### Desestructurar array 

```
[items[i], items[j]] = [items[j], items[i]]
```

Decimos que abc es igual a array de 1, 2, 3: 

Se asignan uno a uno 

```
[a, b, c] = [1, 2, 3]
```

a -> 1
b -> 2
c -> 3

Entonces: 

`[items[i], items[j]] = [items[j], items[i]]`

El valor de `items[j]` se lo agrega a `items[i]`

`items[i]` se lo asigna a `items[j]`


Como necesitamos un par, asignamos a esas posiciones los valores que estaban en los elementos de la izquierda

Ej: Si tenemos a

```
a = ['hola', 'mundo'];
```

Desestructuramos el array a: 

```
[a[0], a[1]] = ['hello', 'world'];
```

El array a fue modificado: 

```
0: hello
1: world
```


## Refactorizar código: Siguiendo los principios SOLID, tenemos varias funciones que hacen muchas cosas además de su funcionalidad principal


## Testing: 

Como introducción: 

En una carpeta test

Archivos: test.js, test.html e index.js


En la principal:

index.html

package.json


En test.html, bindearlo a test.js

```
<body>
	<script src="index.js"></script>
	<script src="test.js"></script>
</body>
```

Si en el index.js tenemos una función que calcula el salario anual: 

```
function calcularSalarioAnual(salarioMensual) {
	return salarioMensual * 12;
}
```

En nuestro test.js

Podemos escribir una función que testee calcularSalarioAnual()

```
function probarCalcularSalarioAnualConExito() {
	
}
```


### Pirámide de testing

```			(manual test)
		End to End Test
	Integration Test
Unit Test
```

#### Unit Test: testean funcionalidades, clases aisladas que no tiene interdependencia

#### Integration Test: si tenemos una api y queremos testear cuando llega una request/solicitud y que funcione dado que va pasando por distintas capas de la app

#### End to End Test: prueba full stack (backend y frontend) simulando ser el usuario, interactuando con todos los elementos de la app

Si hay elementos que el usuario no puede ver ni interactuar, el test falla.

#### manual test: testear cada elemento, funcionalidad manualmente; existen test plan y requerimientos de calidad que hay que seguir. 


### Testear casos positivos

#### assertions condiciones: con los assert debemos especificar el resultado esperado, como segundo argumento podemos especificar un mensaje. 

##### Los argumentos son una evaluación condicional y un mensaje cuando falla el test

##### Un buen mensaje debe describir lo que esperaba y lo que se obtuvo cuando dio el fallo

```
function probarCalcularSalarioAnualConExito() {
	const salarioMensual 100;
	const salarioAnual = calcularSalarioAnual(100);
	
	console.assert(salarioAnual === 1200, 'La condicion fallo, esperaba 1200, pero dio', salarioAnual);
}
```

#### El salario no puede dar negativo, hacemos una prueba para eso; si nos da un numero negativo, debemos corregir la función

test.js: 

```
function probarCalcularSalarioAnualConExito() {
	const salarioMensual = 100;
	const salarioAnual = calcularSalarioAnual(salarioMensual);
	
	console.assert(salarioAnual === 1200, 'La condicion fallo, esperaba 1200, pero dio', salarioAnual);
}

probarCalcularSalarioAnualConExito();

function probarCalcularSalarioAnualConNegativosDebeDarCero() {
	const salarioMensual = -100;
	const salarioAnual = calcularSalarioAnual(salarioMensual);
	
	console.assert(salarioAnual === 0, 'La condicion fallo, esperaba 0, pero dio', salarioAnual);
}

probarCalcularSalarioAnualConNegativosDebeDarCero();
```

index.js: 

```
function calcularSalarioAnual(salarioMensual) {
	if (salarioMensual <= 0) {
		return 0;
	}
	return salarioMensual * 12;
}
```


### TDD (Test Diven Development): desarrollar en base a pruebas para hacer robusta la lógica de negocio

Mediante los fallos vamos arreglando las funcionalidades


## This en arrow functions: toma el contexto del padre



# DevOps y SDLC

### DevOps: Conjunto de practicas que tiene como objetivo hacer más rápido el ciclo de vida del desarrollo de software y proporcionar una entrega continua de alta calidad. 

### SDLC (Software Development Lifecycle): Es un proceso que afecta al ciclo de vide del desarrollo de software para entregar aplicaciones a tiempo, dentro del presupuesto y según las necesidades del cliente. 


## DevOps: De FTP a hoy

## Reliability

## Scalability

## Security


Software Engineering: 

Mejores prácticas para un equipo de ingenieria de software


SDLC: Software Development Life Cycle

##### Tiene como componentes del ciclo: 

##### Reliability: La fiabilidad ayuda a reducir errores y garantizar un rendimiento constante

##### Scalability: La escalabilidad afronta el crecimiento de manera eficaz

##### Security: La seguridad ayuda a proteger los datos de su empresa y de sus clientes

```
			1. Define el ámbito
						
5. Mantenimiento y observación		2. Arquitectura y Diseño
						
						
4. integración y testing			3. Desarrollo
```


1. Define el ámbito

Analiza los requerimientos de los usuarios/cliente
Entender que es lo que quieren
Convertirlo en algo tangible 
Alinear los requisitos y obtener un resultado


2. Arquitectura y Diseño

Diseño de la solución en si
A partir de que alineamos los requerimientos y sabemos cuál es la solución que deseamos dar: pensar la arquitectura de esta solución
Se definen los servicios, los modulos y la estructura de la base de datos


3. Desarrollo

Implementación de la arquitectura y diseño en código
El programa ya estará dividido en tickets que los desarrolladores van tomando y realizando


4. Integración y testing

Se hace en paralelo con desarrollo del código
Nos da luz a los problemas que pueda tener el código


5. Mantenimiento y observación

Después de poner el software en producción/funcionamiento
Debemos asegurarnos de que siga funcionando 24/7
Debemos llegar un logging/registro de eventos por los que pasa el sistema
Debemos tener alertas cuando el software deja de funcionar.
Debemos notar los errores antes que los usuarios y arreglarlos


Volvemos a 1: 

Una vez que terminamos con el mantenimiento pueden surgir otros requerimientos de los usuarios/clientes

Realizamos los cambios en la arquitectura, desarrollo, pruebas y mantenimiento.


### SDLC: Waterfall/Agile

#### Waterfall: forma más intuitiva de llevar a cabo un proyecto. Estimás todo al principio, obtenés un presupuesto y lo haces

Pero tiene menos probabilidades de salir bien que aigle (49% vs 64% de agile).


#### Agile: hace un delivery de valor en pequeños incrementos, dándote la oportunidad de ver progreso y hacer cambios de forma frecuente. 

agilemanifesto.org


En Waterfall/cascada primero terminamos un paso y luego pasamos al siguiente.

Planificación, realización y prueba de funcionamiento. 

##### 1. Problema: el valor del proyecto viene al final, hasta que no este 100% terminado no lo podemos entregar al usuario/cliente para usarlo

##### 2. Tiene una medida que es el salto de fe (leap of faith): conforme pasa el tiempo no vemos el funcionamiento del software hasta el final

##### 3. Curva de riesgo: a medida que avanza el proyecto, el último dia, cuando debemos poner en funcionamiento el proyecto el riesgo alcanza un valor muy alto: Si no funciona debemos volver a iterar sobre el ciclo del software o puede que el cliente rechaze el producto completamente

##### 4. Esto da a una serie de conflictos con el cliente/usuario sobre los requerimientos y funcionamientos, interpretaciones sobre lo que se debia hacer, discusiones económicas, etc. 


##### En Agile no se trata de la rapidez/tiempo, se trata de poder maniobrar a tiempo ante los cambios, poder adaptarse a ellos de forma eficiente sin demasiados conflictos 

Esto no significa que vamos a terminar más rapido un proyecto

##### 1. Curva de riesgo: empieza alta, pero a medida que vamos cumpliendo con los objetivos/requerimientos, el riesgo va bajando dado que vamos a ir entregando iteraciones del proyecto al cliente

##### 2. En las iteraciones del producto, el cliente nos va a dar feedback sobre el funcionamiento de cada version. El riesgo de terminarlo es nulo porque se desarrolla y se llega al final solo con la aprobación del cliente

##### 3. Los errores son baratos: el desarrollo y la versión del producto se hace en pocas semanas. Si el cliente rechaza totalmente la nueva iteración, solo se pierde esas semanas 

##### 4. En cada versión el software es completo y funcional (no se rompe). Abarcará algunas funcionalidades necesarias.

##### 5. El contrato no se renegocia, si surge un necesidad en el medio, se desarrolla en unas semanas. El dinero está cubierto. 
 
 
#### Agile Manifesto

1. Individuos e interacciones por encima de procesos y herramientas

2. Software funcional por encima de documentación exhaustiva

3. Colaboración con el cliente por encima de negociación de contratos

4. Respuesta al cambio por encima de seguimiento de un plan

5. Es decir, si bien los elementos de la derecha tienen valor, valoramos más los de la izquierda.


## FTP a hoy

Deployment/Producción, poner en funcionamiento el sistema

Se usaba un FTP (File Transfer Protocol) que transfiere archivos a servidores remotos.

Ej: Filezilla servidor/cliente ftp 

El servidor de ftp depende de un usuario y password que funciona/escucha en un puerto particular

Al conectarnos podemos subir archivos al servidor

Por lo general, en el servidor hay un servidor web que escucha en el puerto 80, rastreando todos los archivos en la carpeta `http://www.`

Al poner los archivos ahí, podemos entrar al sitio `http://www.webX.com`, apuntará a la dirección de ip del servidor web

Al servidor web le llega una request/solicitud/petición de recurso a webX y por default sirve el archivo index.html

Por lo general, los servidores estan configurados para servir los archivos index por default

Como desarrollador si queríamos modificar index.html, se tiene que bajar del servidor, se modifica y se vuelve a subir


En un IDE como Dreamviewer teníamos cuatro ventanas: una para desarrollar/escribir código, otra para vista previa, otra para los recursos/assets/archivos y otra ventana para configurar/conectar el servidor ftp para subir y bajar archivos al sitio web

Además no habia repo online, se copiaba y pegaba los archivos manualmente o se usaba SVN

Conectabamos el sitio con todos sus recursos al servidor ftp. 


### Deploy con ftp

Se editaba el archivo local, se guardaba y se subía al servidor ftp. 

No habia, commits, push, etc. 

Cuando el servidor ftp corria el archivo, interpretaba el código.


### Flujo avanzado con un servidor ftp

O un flujo de trabajo más depurada: como el servidor ftp es una carpeta en un servidor remoto, a esta carpeta se la puede renombrar y ponerle versiones

Lo que estaba en el root/raíz del proyecto era la versión actual 

Lo demás era renombrado como v1, v2, v3, etc. 

Cuando se quería revertir el proyecto por bugs o porque se rompian funcionalidades

Se copiaba la carpeta de la última versión que reemplazaba a la carpeta raíz

Este flujo más avanzado podía tener varios servidor con un balanceador de carga (comparte los recursos entre varios máquinas)

Evitaba que al borrar los archivos no se tenga que volver a subir todo manualmente al servidor ftp

Los commits/cambios de los archivos se subían a un servidor SVN

Se bajaba el comprimido del proyecto y un encargado lo descomprimia y lo subía al servidor ftp

Generalmente era un equipo de deploy o lo hacía la persona que desarrollaba el sitio por su cuenta. 


## Deploy en la actualidad: ci/cd pipelines

### continuous integration y continuous deployment

### Con herramientas como vercel, netlify que usan el código fuente desde github/similares para deployment, nos sirve una url funcionando


### Mejores Práctias

#### Reliability/Fiabilidad

1. Testing automatizado: A medida que tu sistema crece, testear de forma manual no es escalable

O fiable, te podes olvidar. 

Precisas un testeo automatizado y repetible. 

Ej: Mas funcionalidades, complejidad, casos de uso

Ej: Además de testear las nuevas funcionalidad, hay que testear no estas no hayan roto las otras existentes

Ej: Todos los casos de uso lo debería hacer un sistema/máquina


2. Despliegue e infraestructura automatizada: poder desplegar (deploy) códiog e ingra a ambientes separados de test y producción que sean repetibles.

"Trata a tus servidores como ganado, no como mascotas"

Ej: Cuando un servidor deja de funcionar, el proyecto en funcionamiento pasa a otro servidor

Ej: Si se tienen servidores de testing y les pasa algo y dejan de funcionar, al no usar infraestructura como código (código que define la infraestructura) se depende de acordarse o de la documentación cada una de las configuraciones de esos servidores que dejaron de funcionar para que funcionen igual a los que se rompieron

Ej: En un servidor cloud (AWS, Azure, G cloud) se puede replicar una app dentro de una misma región, al querer usar otra región del planeta, se tiene que recrear la misma infraestructura para la nueva región (configurar propiedades una por una) pueden surgir errores en la configuración, son errores deficiles de debuggear, hay que volver a revisar los settings

##### Al definir los settings/infra como código podemos replicar la infraestructura para cualquier región


3. Observabilidad: Una vez que el software está en producción, debemos tener Logging, Monitoreo y Alertas

Para saber de los errores antes que los clientes

Ej: Tenemos que registrar errores y eventos que suceden, incluso para testear la falta de eventos

Ej: Al loggear ordenes de compra cada vez que sucedia una, el logg describía la orden con número, nombre y demás detalles

Eso se sumaba a un monitor y alerta para ver que si no había una orden de compra en una hora, el sistema tiraba un alerta para avisar que algo estaba mal

##### Es raro que no haya una compra un una empresa grande que factura millones

El monitoreo chequeaba a menos frecuencia, un minuto, cinco minutos; registraba las compras de la última hora, manda una alerta

Las alertas tiene distintas instancias: en la primera podría mandarse a un canal de slack o email a los desarrolladores

Los desarrolladores estaban en llamada, el sistema llama a un jefe; si no atendía llamaba a otro y otros para que arreglen el problema


##### Rs Reliability: Asegurarse de que los sistemas funcionen de forma consistente y sin errores


#### Automated Testing

1. Pruebas manuales: forma por default de testear cambios


2. E2E test: end to end, testear la app como si fueses un humano de forma automática


3. Integration test y Unit test: testear reglas de negocio de forma independiente (no interconectadas)

Son los cimientos

Como prácticas de código limpio, dividimos lo que es el dominio de una app de la parte periferica

En una api tenemos una entidad que existe más allá de la propia api

Debemos recolectar los datos de esta entidad 

La lógica de una funcionalidad puede estar aislada de dónde traemos los datos a la app

La lógica de negocio/funcionalidad no depende de la UI, tampoco depende de la base de datos, ni de una api

No depende de nada todo esto debe estar testeado con unit test al cien por ciento

las pruebas unitarias son pruebas de cobertura al 100% para la parte del dominio

Al salir de la parte del dominio  


Clean Architecture

```
(web, dispositivos, db, external interfaces, UI(Controladores, Gateways, Presenters (Casos de uso (Entidades))))
```

1. Las entidades reflejan las `Enterprice Business Rules`

##### Lógica de negocio, comportamiento de las entidades

##### Las entidades se testean con pruebas unitarias, el resto de las capas se testea con pruebas de integración


2. Los casos de uso son `Application Business Rules`

##### Funcionalidades que debe abarcar el sistema


3. Los controladores, gateways y presenters son `Interface adapters`

##### Funciones que reciben información de objetos, eventualmente se las pasará a la entidad


4. Los devices, web, db, external interfaces, ui son `Frameworks and drivers`


Flujo de control: 

```
Presenter  ->  Use case (output port)<>
	|			|
	flow   <-  Use case (interactor)
	|			|
Controller ->  Use case (input port)<>			
		
```


### Pruebas de integración: Se testea como se integran varios componentes juntos

Ej: en una api, si tenemos un controlador (recibe info para pasarsela a la entidad)
 
Por ejemplo en `pokeapi`

Request/solicitud/pedido de:

```
https://pokeapi.co/api/v2/pokemon/ditto
```

Mostrará toda la info de ditto:

Como:

```
abilities: [] 2 items
	0: {} 3 keys
		ability: {} 2 keys
			name: "limber"
			url: "https://pokeapi.co/api/v2/ability/7/"
			is_hidden: false
	1: {} 3 keys
		ability: {} 2 keys
			name: "imposter"
			url: "https://pokeapi.co/api/v2/ability/158/"
			is_hidden: true
		
```

Nos muestra los ataques y más

En la prueba de integración: 

Cuando nos llegue un request al controlador (el que resuelve las peticiones web)

Queremos probar que devuelva un pokemon

Testeamos los datos de entrada y salida

Cómo se van a buscar esos datos no importa

La busqueda de datos se resuelve cuando hacemos el setup de las pruebas

Cuando tenemos una DB, en general no se quiere testear los métodos de la db, como select, insert (eso está probado, lo hacen los desarrolladores de la db)

En la db se prueba si los comandos que enviamos son los adecuados o no

Si la forma de traer los datos que estamos utilizando son los adecuados

Ej: en la prueba de integración, consultamos cuantos pokemones hay (si los estamos guardando en una db)

Si hay 0, después simulamos una petición para crear un pokemon con ciertos datos

Testeamos que la respuesta a esa solicitud sea el pokemon nuevo y su id, al ser el primer creado (habia 0)

Ahora a volver a simular/testear al consulta de cuantos pokemon hay

Debería decir 1 

##### En esta fase nos damos cuenta de que no nos importa como se están creando los pokemones, ni como se buscan, ni si hay una db; nos importa la respuesta a la solicitud de crear podemon y mostrar la cantidad

Lo unico que queremos es testear que la info que nos mandan en una input

Revisar que nuestro sistema de el output esperado/correcto


#### DB: setup

Ej: mysql

Hay dos formas de testear el acceso a la db sin realmente testearlo

Usarla sin testear si está funcionando o no

Al hacer el setup de los test: 

1. Usar ORM (Object Relational Mappper,): en vez de ejecutar queries/consultas de sql, directamente ejecutamos instrucciones expresivas como 'find_one_by_id'

Podemos configurar el ORM cuando hacemos el setup de las pruebas

En vez de usar mysql (necesita servidor), usemos sqlite

sqlite puede correr en memoria, al correr los test; creamos la db en memoria

Al terminar los test esto se borra

##### Esto hace que las pruebas sean repetibles

Si fuera una db real, al crear el primer pokemon; a menos que nos acordemos de borrarlo

Los siguientes test van a estar inconclusos/inestables

##### La clave de los test es que tengan un estado predeterminado/conocido: la db arranca vacía, al ejecutar el query nos debería dar 0

##### Al hacer el setup de la db para los test, usamos sqlite porque se va a crear todo de cero, dando como resultado en estado conocido/predeterminado


Puede pasar que al usar ORM y abstraernos de usar sql 

##### Podemos perder performance, dado que el ORM funciona para que podamos usar cualquier tipo de db pero hay veces que necesitamos hacer el query puro dado que es más optimo en uso de memoria que usar el ORM


SQL tiene varíos dialectos como lenguajes como mysql/postgresql/microsoftsql, etc

##### EJ: las queries para hacer determinada cosa puede cambiar, no funcionarán entre un motor de DB y otro distinto

##### Al usar uno de estos estamos atados, entonces, en el setup de los test no podríamos correr sqlite: los queries no van a funcionar


##### En este caso: queremos tener lo mejor de los dos mundos, una db que se cree de 0 cada vez: usando docker

Al crear el setup de las pruebas, primero levantamos el comando del test, levantamos una instancia de docker con una db que corra en memoria (sqlite), nos conectamos a esa db de prueba, le cargamos lo que necesitamos, hacemos todas las pruebas, al terninar cerramos la instancia de docker

La proxima vez que hagamos otra prueba fuerte, levantamos la instancia de docker 


##### Cuando tenemos ci/cd pipelines (github actions) podemos correr las pruebas cada vez que haya un pr para ver si pasa las pruebas y se combina con el código de producción o no. 


### E2E

cipress, playright para cargar páginas y le decimos interactue con ella de forma automatizada

Hará click a los botones, forms, submit, cambios en la url, etc. 

Simula al ser humano, si hay un elemento ui que no deja interactuar con la web, va a fallar la prueba E2E
 
 
La diferencia E2E y las pruebas unitarias es que en las unitarias se intenta que las pruebas sean completamente aisladas, que corran de forma separada

Las unitarias se ejecutan muy rapidos, las de integracion corren a mediana velocidad y las pruebas E2E se ejecutan muy lentamente

Dado que las pruebas estan interconectadas entre si, va de un botón a completar un form y a enviarlo, etc

Es un test enorme que contiene todas las cosas que queremos testear


### Automated Infrastructure: infraestructura automática

1. Proceso de un solo clic para entregar la nueva versión de su software a sus clientes: CI/CD (Integración Continua/Implementación Continua)

2. Asegúrese de que el proceso de envío de nuevo código incluya comprobaciones para evitar la filtración de errores a sus clientes.

3. Entorno independiente (replicable): servidores como ganado, prescindibles.


Si hay demasiados pasos para poner en producción software tarde o temprano tendremos problemas

Si esto se hace de forma manual, en algún momento la persona/equipo que lo hace se va a equivocar

Por eso es indispensable CI/CD:

Flujo hacia deploy: 

Ej en github actions:

```
Code -> is code quality ok? -> Does it complile? -> Are test passing -> Deploy to test
```

1. Cada vez que hay un codigo nuevo, chequeamos que sea bueno de calidad

Podemos chequear la calidad del código con herramientas como `SonarCube` (open source platform)

Tienen analizadores estáticos dado que no corren el código fuente solo lo analizan. 

Podemos configurar las variables de los analisis, que nos dejen comentarios en el repo en la nube de git

Con esto se ahorra presupuesto en personal (tech lead) que revisa el código


2. Chequea que compile, hay que arreglar los errores


3. Despues de compilar, tiene que pasar los test

Primero se corren los más baratos (unit test) 

Después los de integración y al final E2E

Cuando alguno de estos da error ni siquiere llega a correr los demás


4. Si pasan todas las capas de test, lo deployamos a test

Este es el flujo de CI/CD


### Error pushear los pr directamente a Main

##### Esto puede deberse a problemas con replicar el ambiente de test

Acá es dónde tener infra automatizada con CI/CD ayuda

Las herramientas como: 

Pulumi, terraform, aws cloud development kit


##### Pulumi es la más pulidad de todas, escribis en lenguajes conocidos como python, ts, js, etc

Creas un nuevo bucket de s3

Si corremos pulumi app, nos muestra que lo creamos

Listamos con código los componentes que queremos crear

Al ejecutar pulumi app, compara lo nuevo y lo que tenemos en producción en aws, azure, digital ocean, oracle, etc

Tenemos que chequear la diferencia, chequeamos si está ok lo creará


### Flujo con Pulumi

#### Simple

Con pulumi app creamos la infra 

pulumi está organizado por stacks: 

1. Producción

2. Staging


switch entre los stacks, corremos pulumi app para que nos cree exactamente la misma app en otro stack

Nos permite crear la misma infra en producción y test 

Solamente con ejecutar pulumi app dos veces y cambiando de stack

##### El dia que queremos combiar la config, lo hacemos, corremos pulumi app en el stack de staging y luego en el de producción

Nos da la diff, updatea y si nos parece correcto, lo cambia. 


Terminal: 

Cuando corremos:

```
$ pulumi app
```

Tiene outputs 

como el nombre bucket creado

cual es la url del bucket 

Eso lo podemos definir en el código

Le pedimos que lo agrege como un output

#### Pulumi y Github Actions: podemos crear todo un CI/CD Pipeline que corra `$ pulumi app`, hará el update, una vez hecho, muestra el output en pulumi, vemos la url; podemos testearla que ande. Cuando mergeamos a main, hacemos lo mismo pero en la infra/bucket de producción


Lo otro que podemos hacer es no solamente podemos tener ambientes de prueba y producción

#### Podemos tener blue green deployment

Hay varias formas de implementarlo pero esencialmente

Si usamos azure con sus slots

En app services podemos tener el slot de producción, staging

Podemos tener un slot green y un slot blue

Directamente podemos tener dos aplicaciones distintas

La app blue, y la green 

Le podemos poner un load balance (compartir recursos en varias máquinas)

Elige dónde mandar el trafico y acá aparecen varias formas de configurarlo

Por geolocalización, mandar el trafico al que está más cerca

O mandarlo a uno y después a otro. 

Y más formas de hacer el load balancing


Otra de las cosas que nos permite hacer es modificar el peso de dónde mandamos el trafico

Llevarlo 100% al blue o al green o 50 y 50


Si queremos lanzar una versión nueva a producción

Y revisar si funciona antes de que les llegue al cliente

En el CI/CD pipeline en la configuración dónde hacemos el release 

Decimos que tenemos dos sistemas que construimos blue y green

Dos apps que hacen exactamente lo mismo

Decimos que mandamos todo el trafico a green o blue (a uno solo)

Y aprovechamos el otro para deployar código nuevo

Así tenemos en el sitio: 

El usuario entra, cae en el load balancing

Va a elegir si lo manda al blue o al green

Podemos entrar directamente a alguno de estos dos

Podemos apuntar a cada uno de los servidores

##### Si sabemos que siempre vamos a deployar las versiones nuevas a blue, entramos a blue.sitiox.com; nos fijamos en producción, ejecutamos las cosas criticas, que todo funcione y continuamos con el proceso de deployment 

##### En el medio podemos poner un manual check: ej, una orden para deployar en blue y que espere media hora hasta que alguien revise y aprete el botón continuar; si nadie lo hace volver hacia atras; al código viejo y dejar el trafico 50 y 50

##### Cuando sale todo bien, al continuar lo que hace es mandar el 100% del trafico que antes apuntaba al código viejo, lo apuntamos al código nuevo; deployamos en green que era el código viejo, ahora ambas tiene el código nuevo y el último paso podemos volver a tener 50 y 50

##### Son estrategias para hacer release de código sin que se rompa el código que funciona

##### Es una inversión que vale la pena y queda siempre


```			(Manual Test)
		E2E Test(UI test)
	Integration Test
Unit Test
```


## Observability

1. Una vez que estás en producción (o en test), querés saber cómo están operando tus sistemas. 

Para esto se usa Logging, Monitoring y Alerting. 

2. Es importante encontrar errores antes que tus clientes. 

Cada cloud provider tiene sus propias herramientas, y hay algunas que son agnósticas (DataDog, Sentry, NewRelic)
  

Estas herramientas nos proveen de datos, gráficos de usos, monitoreo de visitas

Se usan para agrandar o disminuir los servidores

Podemos proyectar la medida de ellos, según algún evento

Escaladas en potencias (vertical) o en cantidad (horizontal)

##### Estos sistemas nos permiten ver qué es lo que esta pasando con los usuarios, la web y sacar conclusiones de ello


Para encontrar los errores tendremos un panel que rastrea los errores, con nombre, motivo, hora

La cantidad de usuarios afectados por esos errores

Estos errores son un reflejo de lo que sucede en el código fuente 

SyntaxError, TypeError, ReferenceError, Error, N+1 API Call, etc



## Escalabilidad: Manejar la demanda de forma eficiente

1. Cloud: Cómo escalar, horizontal y vertical

2. Optimización de uso de base de datos 

	1. Separar en base de datos transaccional y analítica
	
	2. Caching: Guardar información que no cambie frecuentemente en medios de almacenamiento más rapido


##### Cuando la app empieza a crecer en usuario tiene que crecer en infraestructura

Nuestro sistemas necesitan más recursos

### Cuando queremos escalar en cloud

##### 1. Vertical: Máquinas más grandes

##### 2. Horizontal:  Más maquinas


Ej al tener dos app (blue y green) y un load balancer

sería escalar de forma vertical 

Por lo general en los sistemas empieza a fallar la db

Hay algunas formas de manejarlo

1. Separar un debe en transaccional y analítica (tienen funciones distintas)

2. Caching: Es la parte de queues/colas para operaciones asíncronas

Entramos en sistemas distribuidos que son complejos y solo para casos/servicios muy especificos/ empresas muy grandes


### Cloud

1. Proveedores en la nube (cloud providers) hacen que sea facíl agregar recursos a medida que los precisás

No se compra hard, es un servicio PAYG (Pay as you go)

Pagás lo que usas


2. IssS, PaaS 

	1. Infrastructure as a Service: manejas el sistema entero pero no el hard)
	2. Platform as a Service: Deployás tu software, el proveedor se encarga de los backups, parches de seguridad, etc. 
	3. Software as a Service: aplicaciones listas para ser usadas por el usuario final, completamente manejadas por el proveedor (ej, Algolia para búsquedas)
	

Los proveedores en la nube como AWS, Azure, G gloud, Oracle, etc

Hacen que se fácil agregar recursos a medida que los necesitas

Al contrario de comprar un hardware/servidor de 5000usd 

Si no te va bien lo tenes que vender y si te va bien tenes que comprar otro más

Gastos en la conexión de internet, centro de datos, ubicación, etc


Los proveedores en la nueve tiene estas máquinas super costosas 

Te dejan usar una máquina virtual (parte del poder del servidor)

##### A partir de un plan básico, cuando se necesita más máquina; configuras el cliente para eso, pagas y el servidor es más grande

##### También podemos configurar más máquinas virtuales y tecnológica como un load balancer

Pagás a medida que los necesitas


### Tipos de cloud provider

IaaS, PaaS, SaaS

#### IaaS: es la compra de una máquina virtual, no el manejo de hard; esta en un data center que provee backups, mantenimiento, seguridad cosas de las que no tenemos que preocuparnos (las pagamos con el servicio)

##### Te toca encargarte del sistema operativo, su seguridad, el software que instalas


#### PaaS: ej, en AWS está AppRunner, Netlify, Vercel se usan para deployar; le pasas el gitHub/repo/proyecto/docker, etc 

##### Este proveedor se encarga del backup, los parches de seguridad, no sabes cuál es el sistema operativo que corren, las aplicaciones que usan

##### Solo te proveen una url para tu proyecto


### Cloud: Horizontal vs Vertical 

#### Vertical: Máquinas más grandes. Pagas el 100% lo uses o no. 

#### Horizontal: Más máquinas. Setup más complejo pero permite tener costos más (solo agregás más máquinas si la capacidad de CPU es 80% o más y reducila cuando llega al 60% o menos). Precisa un load balancer

##### Por esto es más importante escribir código que no esté atado a una única instancia, para poder escalar (no escribe el disco duro ni depender de sesiones existentes en memoria)


#### Compra del plan: ej, 8 cpu, 16 gb de memoria; cuando en este plan el cpu este al 80% podemos aumentar otra máquina o si está al 60 eliminar este plan extra

##### Permite lidiar con la demanda que va creciendo de a poco da tiempo a escalar, pero si por algún motivo tenemos llegan 800 mil request de un segundo a otro no hay nada que pueda escalar tan rapido. Hay que poner un limite o un script que acepte solicitudes más grandes, más chicas

Podes comprar en servicio de un CPU más grande con más memoria, etc


### Vertical: 

Compra del hard fisico. Pagás 100% lo uses o no


### Saas: usamos un software como usuario final, ej Algolia para busqueas, debemos cargarle todos los recursos que se puedan buscar, un motor de busqueda que lo usamos como si fuera una API


### Cloud IaaS, escalabilidad horizontal y Pulumi: servidores en diferentes partes del mundo

Al tener un cloud y pulumi no tenemos que crear un servidor de cero
 
Con Pulumi replicamos los servidores

Lo mismo con los ámbientes de prueba para los desarrolladores dado que no trabajan 24/7, configurar los dias y horarios que trabajan

Si hay cientos de desarrolladores, los ambientes serán decenas

Si haríamos todo esto local/horizontal tendriamos que tener personal y gastar energia para algunas de estas operaciones de mantenimiento



### Optimizar la DB: dado que lo primero que puede fallar es la db

1. Problema: 

"Sistema lento", o los analistas no pueden obtener los reportes "pesados" en las horas laborales o tardan demasiado - cuando ocurren estos reportes, los usuarios finales "sufren" la lentitud del sistema


2. Se puede arreglar con: Optimizando índices y revisando queries (simple)


3. Se puede arreglas con: Caching y Queues (colas)

##### Microservicios/Sistemas distribuidos: Puede ser complicado de implemetar, la única forma de escalar millones de clientes


4. Se puede arreglas: Separando las bases de datos transaccionales y análiticas 


#### Sucede cuando la función análitica está compitiendo con la función operacional

Soluciones: 

1. Revisando indices para ver que sean los adecuados

##### Ej: Podemos hacer en cada columna a la que accedamos de forma frecuente le ppodemos poner un indice para que sea más fácil encontrarlo. Así no tenemos que revisar toda la DB para encontrar lo que buscamos

Podemos tener un indice por tipo de negocio: ej, numero de tel por restaurant, supermercado, etc

##### Al hacer esta organización ocupa espacio, tiempo al ingresar un registro nuevo para ubicarlo dónde corresponde al indice. Hace que sea rapido para leer pero para escribir es lento


2. Caching - Queues: complicado de escalar, pero es la única si tenemos millones de clientes


3. Separando db en transaccional y análitica


### Caching - Queues

1. Buen candidato: información que no se escribe/updatea de forma frecuente pero se lee mucho

2. Ejemplos: Caching de archivos (imágenes y documentos), información de productos, resultados de búsqueda
 
```
Cache
|
App <-> DB
```

#### Flujo Cache - App - DB

Primero verificamos que tenga la información que queremos transmitir

Si no la tiene, la buscamos a la base de datos y despues la guardamos en el cache para que ya la tenga y no tenga que volver a la db


#### Candidatos para caching: información que se repite 

Dar de alta un producto, lo podríamos hacer cada semana; una vez por mes o maximo una vez por día. 

Durante el dia ese producto lo consultaron cientos de veces le damos cientos de veces la misma información

Como está en el cache no fuimos cientos de veces a la db

Este tipo de información que se repite podemos guardarla en el cache


Herramientas como Redis que es una base de datos en memoria 

Es un key:value store, en un producto; un key puede ser el ID o el SKU o un elemento que ayuda a identificar el producto

Y el valor puede ser un objeto json con toda la info que se necesita para mostrarlo en el frontend


Tambien podemos hacer caching de assets como archivos, documentos, imagenes

Resultados de busqueda; cosas que no tienen nada que ver con la info en DB

Para los assets se usa un CDN (Content Delivery Network)


#### Queues (colas): ej RabbitMQ (Broker)

Es un sistema/servidor de colas

```
				Producer
				
Exchange 	Direct     Topic 		Fanout
			|            |				|
		 (binding key)  (Routing pattern)
Bindings                 |              |
		 (pdf process)   |              |
			|	 (eu.de.)/\ (us.#)     /|\
Queues 		q1 		q2 		q3 		q4  q5 q6
	
				Consumer
```

#### Fanout: pregunta de entrevista

Ej: Cuando compramos un producto, hay un par de cosas que tienen que pasar 

##### Facturar el pago, pagar, mandar un email de confirmación, shipping, mandar la orden shipping al warehouse, descontar stock, informe al sistema de finanzas, mandar info a google analitics para trackear que se hizo la orden

##### Esto demuestra que al menos hay como 5 cosas para hacer, si lo hacemos en el momento del checkout, lo unico que se hace de forma asincrona es el pago/cobro

##### Lo demás puede esperar, no hacemos todas las llamadas a las apis porque el cliente esperaría mucho para terminar de procesar el pago, se perdería la venta

##### Queremos que este proceso critico termine rapido, lo demas se trata por separado


#### Hacemos un sistema de cola en el que tenemos un message queue

Ponemos un mensaje, tenemos el producer (sistema que hace el checkout), el producer pone un mensaje que dice que la orden ha creado y su id

Podemos hacer que esto vaya a un queue en particular

Ej: Flujo 1: exchange direct -> binding key, fileX process -> queue 1

O podemos hacer routing key: Flujo 2: exchange Topic -> binding routing pattern eu.de.etc -> queue 1

En el flujo dos las ordenes tiene su ruta: las canceladas va a la cola 2, las aceptadas/creadas a la 3 (en el gráfico)

Acá se empieza a acumular los mensajes


##### En fanout: flujo 3: exchange Fanout -> queue 4, 5 6

Al crearse la orden, entonces, puede que cada sistema tenga su propia cola

Ya no haría falta producir cientos de mensajes, una para cada sistema

Tenemos el mensaje de que se creo la orden

Todas las colas interesadas en ese mensaje lo recibian

Del otro lado tenemos al Consumer, podemos tener cientos en paralelo

Se van consumiendo todos los mensajes y van procesando la orden

En el sistema de stock procesaba las ordenes, descontaba 

Al sobrevender, el sistema de stock le manda al sistema de vista de producto que ya no había stock y este lo mostraba en la web

##### Esto forma parte de sistemas distribuidos: complejos pero es la única forma de llegar a millones de clientes

Al contrario de un sistema monolitico en los que tenemos muchas cosas, funciona o no funciona

El distribuido si deja de funcionar un sistema se comunica con el otro que si sigue


### Analytical vs Transactional DBs

1. Opción: Implementar una read-only replica (Simple)

2. Opción: Implementar ELT (Extract, Transform, Load)

Es complejo, requiere data engineering y poner la data en Snowflake u otra DWH similar

```
				ELT

Data Sources 										Transform
  Email CRM	 -> Extract -> Load -> data warehouse
  Backend DB
```

Al tener problemas con la DB podemos separar la DB en transaccional y analitica

Una forma es implementar una `read-only replica`

Tomamos una DBl, creamos una replica read-only

No se podrá escribir, a medida que se va escribiendo en la DB principal

Se va replicando en la DB de read-only 

Los analistas usarán la read-only replica 

Los clientes operacionales usarán la master/main

Es una forma simple de solucionar los problemas de la DB

Tiene su limite cuando escala demasiado el sistema


Cuando tenemos millones de clientes necesitamos una `Data Platform`

Se necesita ingenieria de datos dónde tenemos un `data warehouse`

Esto tendrá todos los `Data sources` se cargan esos datos

Los datos se cargan mediante `script`, podemos usar herramientas como 'Apache Airflow'

El data warehouse puede ser una herramienta com 'Snowflake'

O 'ClickHouse' que es open source


##### Con esto podemos crear vista que tiene toda la info que necesitan los analistas, ya no necesitarán hacer queries/consultas gigantes que tardan mucho en correr; directamente hacen una consulta como select from sales/ventas para obtener las ventas de la última semana, dias, mes, etc


## Security: Proteger los datos de los clientes y de la empresa

1. Entender la postura de seguridad: Lo más seguro es no tener datos

2. Es un "arms race". Para implementar todas las herramientas de seguridad que existen hoy. Se pueden gastar millones

3. E incluso así... 

El 74% de los "data Breaches" necesitaron de un elemento humano, como por ejemplo caer ante un `phising`

El 95% de los errores de ciberseguridad son debido a errores humanos
 
 
##### Lo más seguro es no tener datos, pero una empresa necesita datos de consumidores para funcionar, entonces, hay que resguardarlos

##### Tampoco se guardan datos porque si, si se guardan datos porque si, al menos se guardan datos de identificado, analiticos; no quién los hizo que esa persona no puede ser trackeada

##### Según los paises las multas por perder documentos de identidad de los clientes pueden resultar en millones de dolares o nada

##### Al implementar la mejor tecnología (miles de dolares), los hackers la revierten; después sale otra herramienta costosa para evitar lo anterior y así el ciclo

##### Las herramientas más potentes pueden costar 3-5 millones usd al año (20000 - 30000 usd al mes) dependiendo del volumnen de clientes, esto es el costo de lo mejor

##### Se trata de adecuar a lo que precisamos, al no guardar datos sensibles

##### Ej: una herramiento com `Sentinel One` para protener cada endpoint sale 1000 usd, si recien empezas tal vez no necesitas ese nivel de seguridad

##### Tal vez a las empresas les interesa más tu perfil de usuario para publicidad o algún producto que tus datos personales (?)

##### Se trata de entender hasta dónde y siempre es una cuestion de riesgo/tolerancia tal escenario

##### Aunque se gasten millones por año, dos datos se filtran por errores humanos en el 70% de los casos

##### Es más efectivo apelar al error humano por parte de los hackers

##### Si RH no está entrenado, enfocado en la seguridad, que tiene que cuidar a los clientes, etc


### Cosas y herramientas que deberías usar ya mismo como usuario informatico

##### 1. Usar un password manager (Bitwarden), nunca un txt plano
 
##### 2. Usar MFA/2FA cuando sea posible (aunque tengan nuestro usuario y contraseña de mail, nos va a llegar un código al telefono para autenticar)

##### 3. Para trabajar como proveedores (como AWS), creá una admin account (como admin@, info@midominio) que no sea de uso diario (sería el dueño de todo), en el día a día usar la cuenta personal  (así tenés que loguearte de forma conciente). Si acceden a nuestra cuenta personal, si no tienen la cuenta de admin, no pueden complicarlos con la factura/biling, seguridad, etc

##### 4. Curso básico de phising y ciberseguridad (Ni siquiera contestar ni abrir mail dado que lo tienen trackeado si sabrán que existimos)

##### 5. Como deb, familiarizate con `https://owasp.org/Top10/` (top de prácticas maliciosas para estar al tanto). Si estamos haciendo una app que tiene distintos roles (Logeado y user premium, etc) o incluso una app que tiene un solo rol (loggeado y no loggeado). Broken Access Control significa que el usuario se logeo y redirecciono al usuario a una página la que le permite su rol; pero si el usuario malicioso sabe cuál es la otra página (en vez de usuario/1; pone usuario/2 al no tener un control interno implementado a nivel de API del backend) para evitar que el usuario logeado use un recurso que no le corresponde. Si el único chequeo que haces es si está logeado o no, mostras información de otros usuario. 

##### Es un error de código en el sistema, el usuario malicioso se logea y puede acceder a los ID de otros usuario

##### Se recomienda un ID interno y un ID externo, Id externo es un GUID/UUID. En vez de tener `misitio.com/user/1`, tenemos `misitio.com/user/09876234-24ae-6548-a6542b046382. Así el usuario malicioso no puede ir a /user/1 a /user/2, /user/3 etc. No tendría nada para modificar


## Memo: tiene como finalidad proponer herramientas o cambios en el desarrollo de código

### Sumario Ejecutivo: 

##### Con datos planteamos el problema y ofrecemos una solución, cómo implementarlo, tiempo y costo económico

Ej: Se ha notado 30 errores de cara al cliente porque hicimos los pr directo a main 

Para resolverlo podríamos implementar Pulumi, tardaríamos dos semanas en hacerlo, la cantidad de errores bajaría a 90% 

Dar explicación de lo que es la herramienta, cómo lo harías, costo, etc. 


### Pulumi es pago, pero es gratis si lo hostear usando su código libre

En esta versión libre no dispone de concurrencia, dado que no se cambian muchas partes de la app a la vez


### Herramientas para Frontend y Backend

DataDog (muy cara, pero el mejor), NewRelic, Sentry (más simple de implementar y más económico)

AWS y Azure tiene sus erramientas


### Usar el que puedan económicamente, lo recomendable es no quedarse sin alguna de estas herramientas, dado que cuando algo falla no sabrán porqué



# Rs Arquitectura app JS

## Separación responsabilidades/código:

### 1. archivo funciones puras
### 2. archivo controladores de eventos - generadores de elementos/ui
### 3. archivo controladores de eventos - recolectores de valores/datos de los elementos
### 4. globales, esconder elem ui, elem vacío
### 5. esconder elementos con .style.display = "none"; y después mostralos con .style.display = "block"
### 6. func remover elems (junto con sus atribut, sus otros botn, todo lo que se haya creado con él) y recargar pag (evento a window.location.reload())
### 7. attrib for para focus


## Funciones/eventos:

### 1. Funciones puras: encontrarCuentaPorId(id)

Recorre la db, aplica lógica necesaria y devuelve datos claves de ella. 

Estos datos que devuelve serán usados por las funciones generadoras de elementos y capturadora de datos

Será llamada desde el evento del form que toma los valores introducidos por el usuario y llama a las funciones puras y funciones generadoras de elementos


### 2. Funcion generadora de elementos: mostrarCuentas

Recorre la db (cuentas.js) para crear elementos 

Trae la db al front y carga los elementos en el document apenas el navegador lo lee. 


### 3. Función de evento form/capturadora de datos: document.querySelector('form').addEventListener('submit', function() {})

Toma los valores de los elementos dinámicos y se los pasa a las funciones puras 

En su interior guarda valores en una const que llama a los elementos y les saca el valor con la prop.value

Validará los valores que introduce el usuario


### 4. Base de datos: cuentas.js

Es un array de objetos que será recorrido, analizado por las funciones puras y generadoras


### 5. validaciones de numeros y texto: de num con lógica de valores y para texto se usa regExp


## Objetos


## Clases 



# React



# Backend


