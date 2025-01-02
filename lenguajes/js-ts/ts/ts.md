# TypeScript

Tipado: Evita errores en la comprensión del programa, al dejar claro que es cada cosa al obligarnos a usar tipos. 

Compilador y transpilador: TSC convierte código Ts en Js, no convierte su código en código maquina; pero puede convertir código moderno para que funcione en entornos más antiguos. 


## TypeScript y Node.js

Instalación local o como dependencia de un package.json: 

```
npm init 

```

Creará un proyecto Node.js. 

```
npm i --save-dev typescript 

```

Lo instalará en el directorio node_modules/.bin 

Podemos ver a tsc y tsserver. 


Podemos ejecutarlo de forma local: 

Para comprobar que funciona. 

```
node_modules/.bin/tsc

```

Para ejecutarlo de manera global tendriamos que intalarlo globalmente (no recomendado)

Es de la única manera que funcionaría tsc desde la terminal. 

```
tsc 

```


## Algunos Hola Mundo

Crear archivo hola.ts, con la extension para typescript. 

TypeScript es un superconjunto de JavaScript al agregarle funciones que JS no tiene. 

TS sigue siendo JS y puede ejecutar cualquier código JS valido. 

```
console.log("hola mundo");

```

Si no está configurado en mode strict no debería dar errores de tipo. 

Nos da interoperabilidad al poder agregar TS a un archivo JS. 


Compilar TS: 

Forma rapida: 

```
node_modules/.bin/tsc hola.ts

```

Nos generará un archivo hola.js para ejecutar en el navegador. 


Forma adecuada: 

Podemos usar un script en package.json

Y ejecutar ese script con npm run

En el objeto scripts, como clave es el nombre del script y como valor es la acción que queremos que haga. 

```
"build": "tsc hola.ts", 

```

Ahora podemos ejecutar npm run 

```
npm run build

```

Va compilarlo y crear el archivo JS.


## Incorporar tipos

Si queremos usar funciones nuevas de TypeScript o ecma/js, podemos usar el transpilador para hacerlo compatible con versiones viejas de ecmascript y funcionará sin problemas. 

```
function saludar(nombre) {
	return `hola, encantado de verte ${nombre}`; 
}

console.log(saludar("bob")); 

```

Compilarlo

```
npm run build

```

Ahora compilado podemos ejecutarlo con node llamando a JS:

```
node hola.js

```


### Erroes que en JavaScript pasa

En vez de pasarle el argumento lógico esperado, le pasamos un objeto.

```
function saludar(nombre) {
	return `hola, encantado de verte ${nombre}`; 
}

console.log(saludar({name: "bob"}); 

```

Podemos compilarlo y ejecutarlo

```
npm run build 

node hola.js

```

Compilará pero no va a ejecutarse, dará una advertencia. 


### Agregando tipos 

Podemos escribir una función que esperé una cadena como argumento. 

```
function saludar(nombre: string) {
	return `hola, encantado de verte ${nombre}`; 
}

console.log(saludar({name: "bob"}); 
 
```

La diferencia es que al compilarlo ya nos advierte que espera una cadena. 

TypeScript no se espera dar los errores en tiempo de ejecución. 


### Completar tipado para el objeto de retorno

```
function saludar(nombre: string):  string{
	return `hola, encantado de verte ${nombre}`; 
}

console.log(saludar("bob"); 

```


## Tipos de datos primitivos

Necesitamos variables const o let.


Booleanos: 

Lógicos; aceptan dos valores, verdadero o falso, encendido/apagado, activado/desactivado, si/no, etc.  

Son true y false. 

```
let logico: boolean = false; 

```


Numbers: 

Se usa para representar todo tipo de números, desde flotantes, enteros. 

```
let entero: number = 44; 
let decimal: numbre = 74.4; 

```

Podemos usar formas nuevas del tipo number.

Como el hexadecimal: base 16 simbolos

Debemos anteponer el 0 y x

```
let hexadecimal: number = 0x0123456789abcdef; 

```

Si es demasiado grande el cpu no lo puede tratar. 

```
let hexadecimal: number = 0xcbcbaa; 

```

Octales: base 8, simbolos comprendidos entre 0 y el 7. 

No es valido el 8 y el 9. 

```
let octal: numbre = 0700; 

```

Binario: base 2, simbolos 0 y 1 solamente. 

Debemos anteponer el 0 y la b

```
let binario: number = 0b01001011; 

```

Numeros extremadamente largos: 

TypeScript da soporte con un (_)

Es un separador de miles. 

No altera el resultado de la compilación/transpilación. 

```
let numero largo: number = 88_673_816_439_765

```
Salida: 88673816439765


Strings: 

Entre comillas podemos poner letras, números emojis. 

Seguirá tratandose de una cadena. 

Carácteres en rango Unicode

```
let cadena: string = "hola10:)"; 

```

Podemos escapar carácteres: 

Con (\) 

Podemos usar comillas dobles dentro de las comillas de la cadena. 

Con (\n)

Podemos hacer saltos de linea. 

Con (\r)

Podemos hacer retorno carry. 

```
let cadena: string = "lkasjdflkj\"lkas324djflk"; 

```


## Tipos de datos especificos de TypeScript

Algunos tipos exclusivos de TypeScript, tienen una nueva semántica que no está en JS. 

any: 

No deberiamos usarlos. 

O en un caso muy particular, cuando querramos excluir variables o atributos o argumento de funciones o cualquier cosa que sea tipable del sistema de tipo; ignorando al sistema de tipos de TS.

Una forma de silenciar el tipado de TS. 

```
let cualquierCosa: any = "Cadena"; 

cualquierCosa = 1234; 

cualquierCosa = true; 

```

A su vez, nos deja reasignarlo a cualquier dato. 

Otro caso de uso es cuando descargamos una libreria escrita en JavaScript y la usemos en TypeScript, así callaremos al compilador/transpilador. 


null: 

Representa la nada. 

lo único que le podemos asignar es el valor null. 

```
let nada: null = null; 

```

Tiene su uso cuando trabajemos con variables, identificadores, campos, argumentos de funciones que querramos que sean opcionales. 

Porque por defecto las variables anterior de cualquier tipo que declaramos no soportan null, 

```
cadena = null 

/*error*/

```

Asegura que esas variables solo tengan un valor correcto y no dos; el correcto y null. 

En código más complejo podríamos señalar que una variable pueda tener un valor o null, lo tenemos que decir explicitamente. 


undefined: 

Tipo de dato no definido. 

Su único valor posible es undefined. 

No podemos redefinirlo a priori: 

```
let indefinido: undefined = undefined; 

indefinido = 5 /*error*/

```

Como null, utilizaremos undefined en conjunto con otro. 

Una variable puede ser de tipo string o undefined para señalizar que puede haber o no y lo tenemos que hacer explicitamente. 


void: 

Es un tipo de datos que representa la nada. 

Lo usaremos un funciones para indicar que no devuelve nada. 

Aunque es algo que TS asume por defecto. 

Si declaramos una función y no le decimos el tipo de retorno, ts asume que es de tipo void. 

Sin un return, sería una subrutina, no devolvería nada. 

```
/*ts infiere o asume que es void*/
function saludar() {
	console.log("hola");
}

function saludarDos(): void {
	return "hola"; 
}

```

void normalmente no se usa en variables, es un tipo propio de funciones. 

Aunque podemos asignar undefined a una variable de tipo void.

```
let nada: void = undefined; 

```

No podemos asignar nuestra función void a una variable let de algun tipo de dato, porque void no está permitido en vars. 

Se puede asignar a una variable void: 

```
let saludo: void = saludar();

```


## Tipos de datos de Objetos o no primitivos o complejos

En los tipos primitivos, una variable se asocia a un dato, como number, string, boolean, etc. 

Con los tipos no primitivos, podemos asociar a una variable varios tipos de datos o valores de diferente clasificación. 

Tenemos variables no primitivas como objeto que nos permite representar estructuras de datos complejas, ricas. 

Y arrays que nos permiten representar multiples valores del mismo o de distinto tipo, como si fuese una lista o colección. 


arrays/vectores: 

Entre corchetes, representamos multiples valores separados por comas. 

Pero cuando tipamos un array, lo limitamos a un solo tipo de dato o valor para almacenar. 

Un array de cadena solo aceptará cadenas. 

```
[1, 2, 3, 4, 5]

let dias: string[] = ["lunes", "martes", "miercoles"]

```

Si escribimos un array con multiples tipos de datos sin tipar, TS va a marcar los tipos de datos que hay con el operador or (|). 

```
let arreglo = [1, null, true, "lunes", "martes", "miercoles"]
/*(string | number |string | boolean | null [])*/
```

Tambien podemos tiparo como any array: 

```
let arreglo: any[] = [1, null, true, "lunes", "martes", "miercoles"]

```


Podemos acceder a los array con su indice.

```
console.log(dias[0]); 

```


tuples: 

Se trata de un array más estricto.

Hay veces que se utilizan arrays como estructuras de datos para repartir multiples elementos. 

```
let db = [
	["bob", 12, "pizza"],
	["elena", 23, "salad"],
	["antonia", 19 "pasta"]
]

```

TypeScript facilita acceder a este tipo de patrones con una tupla. 

Una tupla es un array que en el tipo vamos a indicar cuantos elementos va a tener y de que tipo es cada elemento. 

Esto nos permite crear arrays con distintos tipos en cada elemento. 

No nos permitiría hacer push(). 

```
let db: [stirng, number, string, boolean] = [
	["bob", 12, "pizza", true],
	["elena", 23, "salad", false],
	["antonia", 19 "pasta" true]
]

```

El tipado indica una tupla de cuatro elementos. 


A partir de TS 4.0 podemos darle un nombre o alias como variable al tipo de dato para que sea más expresivo o significativo, al leer y comprender el código. 

```
let db: [nombre: string, edad: number, food: string, estado: boolean] = [
	["bob", 12, "pizza", true],
	["elena", 23, "salad", false],
	["antonia", 19 "pasta" true]
]
 
```


### Tipo de dato Objeto 

Es una estructura de dato compleja que nos permite almacenar mucha información. 

Como la cantidad que deseemos de propiedades, métodos y muchos más objetos. 

```
let persona = {
	nombre: 'bob Smith'
	edad: 30, 
	pais: 'eeuu'
	fecha_nac: new Date(1990, 5, 14)
}

```

Podemos ir pasando persona a otros objetos, funciones, etc; del código fuente. 

```
login(persona);

register(persona);

```

Podemos acceder a los sus propiedades y métodos. 

```
persona.nombre;
persona.edad = 31; 

```

Con TypeScript podemos tipar este objeto: 

Cada clave debe tener su tipo de valor esperado. 

La sintaxis necesita dos llaves, la primera para las claves y su tipo. 

La segunda para las claves y su valor. 

```
let persona: {
	nombre: string,
	edad: number, 
	pais: string,
	fecha_nac: Date
} = {
	nombre: 'bob Smith'
	edad: 30, 
	pais: 'eeuu'
	fecha_nac: new Date(1990, 5, 14)
}

```




También podemos anidar Objetos. 

```
let persona: {
	nombre: string,
	edad: number, 
	pais: string,
	fecha_nac: Date,
	laboral: {
		empresa: string,
		sector: string
	}
} = {
	nombre: 'bob Smith'
	edad: 30, 
	pais: 'eeuu',
	fecha_nac: new Date(1990, 5, 14), 
	laboral {
		empresa: xcorporation,
		sector: it
	}
}

```

Podemos usar un objeto complejo usar APIs y recuperar información. 

Para pasar código JS a TS, podemos usar any o usar object. 


object: 

Representa un objeto, no acepta datos primitivos; solo objetos. 

```
let obj: object = 4; /*error*/

let obj: object = {}; 

let obj: object {
	nombre: 'bob Smith'
	edad: 30, 
	pais: 'eeuu'
	fecha_nac: new Date(1990, 5, 14)
}

```


## Funciones

Piezas de código independientes entre si, pequeñas y modulares para realizar tareas. 

Se utilizan para abstraer problemas complejos, separandolos en pequeñas piezas en funciones que realizan una sola tarea; finalizando el programa complejo al juntarlas.

La modularidad y independencia lograda hace que todo el programa se más facil de mantener. 


Entrada y salida de datos: 

Las funciones aceptan entradas del mundo exterior que son los argumentos. 

Le entregan una salida mediante un resultado. 

data > sum > data: entra datos, los implementa y salen datos. 

Los datos pueden ir pasando de una función a otra hasta obtener el resultado buscado. 

data > sum > data > multi > data...


Dentro de los parentesis están los identificadores de las variables que guardarán el valor pasado como argumento. 

Dentro del cuerpo está la implementación que hace la función al ser llamada. 

Con return podemos devolver el resultado y este puede ser guardado en una variable local para que pueda ser usado por otra función. 

```
function sumar (m, n) {
	let suma = m + n;
	console.log (`${m} + ${n} = ${suma}`);
	return suma;
}

sumar(3, 4); 

```

No podemos ejecutar un archivo ts con node porque está desarrollado sobre JS y no conoce los tipos. 

Debemos compilar el archivo ts.

Pero si el archivo no tiene tipos, si podemos ejecurlo. 


Si en la llamada pasamos true y false o true y "false", JavaScript arroja resultados extraños, pero no dice que son errores; a menos que crearamos test.

```
sumar (false, "true"); 

sumar (false, true); 

```

Con TS podemos evitar estos errores usando tipos: 

```
function sumar (m: number, n: number): number {
	let suma = m + n;
	console.log (`${m} + ${n} = ${suma}`);
	return suma;
}

sumar(3, 4); 

```

A traves de la compilación de TS podemos ver esos errores. 

```
npm build

tsc calculadora.ts

```

Al tipar el tipo de retorno podemos forzar al valor devuelvo 

Dado que devolvermos una variable local con return. 

Después nos puede avisar cuando guardamos esta función para pasarlas a otros objetos que no son del mismo tipo. 

```
let x: boolean = sumar(3, 4); 

```

### Elementos de primera clase

Al igual que en JS, en Ts las funciones son elementos de primera clase. 

Estructuras tan importantes que pueden ser manipuladas por cualquier otra variable como lo haría cualquier otro dato. 


A la variable restar se asignamos una función: 

```
let restar = function (m: number, n: number): number {
	let resta = m - n; 
	console.log (`${m} - ${n} = ${resta}`);
	return resta; 
}

restar(5, 4); 

```

TS infiere que es de tipo function: 

let restar = function (m: number, n: number) => number

Las declaraciones como (m: number, n: number) => number, las encontramos en funciones en las que pasamos como parametro un callback (otra función/función dentro de otra)

Las podemos ver en las funciones de eventos, asíncronas, etc. 


Una vez que especificamos los tipos de los parámetros, deja de ser necesario tipar el valor asignado/retorno. 

```
let multiplicar: (m number, n: number) => number
multiplicar = function(m, n) {
	return m * n; 
}

multiplicar (4, 3);

```


En la primera linea definimos la variable multiplicar. 

En la segunda linea de damos un valor con function y return. 

En la segunda linea ya no es obligatorio declarar los tipos de los parámetros. 


También lo podríamos hacer en forma de flecha. 

Nos ahorramos de escribir el return y el cuerpo de la función. 

```
let multiplicar: (m number, n: number) => number; 
multiplicar = (m, n) => m * n; 

console.log(multiplicar(4, 3)); 

```

Estas lineas se encuentran en muchas librerias que aceptan callbacks y en sus declaraciones de tipo especifican lo que esperan. 

Al usar los callbacks no tengamos que especificar los tipos. 


Creando un callback: 

Una función a la que le pasemos dos valores que queramos multiplicar y luego una función de callback que recibe parametro, el valor que da la multiplicación para que podamos imprimirlo por pantalla. 

```
// multiplicar(A, B, function(result) {
// console.log(A * B es result)	
// })

```

Vamos a incluir una declaración de función 'callback:()...' dentro de otra función.

Para hacer funciones que aceptan funciones como parámetro. 

```
let multiplicar: (a: number, b: number, callback: (r: number) => void) => void; 
multiplicar = (a, b, callback) => callback(a * b); 

multiplicar (4, 5, function(result) {
	console.log(`Resultado: ${resul}`); 
})

```

La primera linea definimos una función y sus parametros, que acepta otra función y sus parámetros y finalmente el retorno de la función principal. 

En la segunda linea definimos la operación de la función, invocando los parámetros y el resultado se lo pasamos al callback. 

Al usar la función podemos pasar los parámetros convencionales y una función completa con la operación deseada. 


## Clases 

Las clases son una especie de estructuras que tiene dos partes: 

Datos: como propiedades, tipo nombre, edad, profesión, etc. 

Operaciones: sirven para operar los datos, accediendo y modificandolos. 

```
Class Rectangulo {
	ancho, alto //datos
	Area() //operacion
	Perimetro()
}

```

Las ventajas de las clases es que los datos y operaciones/métodos estan en una estructura única. 

Herencia: para heredar datos y operaciones de una clase padre, tambien pueden ser sobreescritos, si es necesario; tener datos y métodos propios. Con herencia creamos jerarquías de clases. 


La orientación a objetos permite modelar el mundo real mediante jerarquía de clases. 


### Crear clases

Es una plantilla con datos y operaciones o métodos o funciones. 

```
class Rectangulo {
	
}

```

Cuando querramos asignarle valores a nuestras propiedades (datos), debemos instanciar la clase. 

Se trata de crear un objeto de clase. 

Declaramos una variable y le asignamos el identificador de la clase, pasandole valores.  

En este ejemplo, estaríamos declarando una variable de tipo rectángulo. 

Necesitamos la palabra 'new' para distingir entre una llamada a una función de una llamada a una clase. 

```
let r = new Rectangulo(); 

```

Al crear propiedades debemos declara algo que tenga sentido almacenar para la naturaleza, biologia composición del objeto o clase. 

Como ancho y alto para un rectángulo. 

Dentro de las clases no se necesitan let, const dado que solo hay datos y operaciones; no hace falto aclarar si es una variable o función. 

```
class Rectangulo {
	ancho: number; 
	alto; number; 
	
	area() {
		return this.ancho * this.alto; 
	}
}

let r = new Rectangulo()
r.alto
r.ancho

```

this sirve para hacer referencias a las propiedades y distingirlos de los parámetros del constructor. 

Hace referencia a la instancia en la que se está invocando el método (en el ej, area()).

```
let r1 = new Rectangulo(); 
r1.area(); 

```
Cuando llamamos a r1.area() y se invoque al método y la operación que hace. 

r1 toma el lugar de this

```
r1.ancho * r1.alto; 

```
Porque es la instancia en la cual se está ejecutando. 

```
let r2 = new Rectangulo(); 
r2.area()

```
Las instancias guardarán los valores concretos de las propiedades. 


Podemos seguir declarando funciones: 

```
class Rectangulo {
	ancho: number; 
	alto; number; 
	
	area() {
		return this.ancho * this.alto; 
	}
	
	perimetro() {
		return this.ancho * 2 * this.alto * 2; 
	}
}

```

### Método Constructor

Es la función que se invoca cuando hacemos new ClassX().

Permite iniciar los valores de nuestra clase al instanciarla. 

Todo lo que incorporemos al constructor se va a invocar cuando hagamos new. 

Si ponemos funciones, operaciones, valores a las propiedades. 

O le damos valores a las variables. 

```
class Rectangulo {
	ancho: number; 
	alto; number; 
	
	constructor() {
		console.log("constructor()"); 
		this.ancho = 5; 
		this.alto = 5; 
	}
	
	area() {
		return this.ancho * this.alto; 
	}
	
	perimetro() {
		return this.ancho * 2 * this.alto * 2; 
	}
}

```


### Parametros al constructor

Podemos pasarle valores a las propiedades de las clases apenas los instancias desde new ClassX(). 

```
class Rectangulo {
	ancho: number; 
	alto; number; 
	
	constructor(ancho: number, alto: number) {
		console.log("constructor()"); 
		this.ancho = ancho;  
		this.alto = alto; 
	}
	
	area() {
		console.log("area()"); 
		return this.ancho * this.alto; 
	}
	
	perimetro() {
		return this.ancho * 2 * this.alto * 2; 
	}
}

let r1 = new Rectangulo(10, 15); 
let r2 = new Rectangulo(4, 3);

console.log(r1.area()); 
console.log(r2.area());

```


## Modificadores de clases

Podemos esconder información para que no puedan ser modificadas desde fuera de la clase y no se rompa el código. 

Si tenemos una instancia de la clase, podríamos acceder a una propiedad pública y cambiar su valor. 

```
let r1 = new Rectangulo(10, 15); 
r1.alto = 4; 

```

Necesitamos el modificador private.



```
class Rectangulo {
	private ancho: number; 
	private alto; number; 
	
	constructor(ancho: number, alto: number) {
		console.log("constructor()"); 
		this.ancho = ancho;  
		this.alto = alto; 
	}
	
	area() {
		console.log("area()"); 
		return this.ancho * this.alto; 
	}
	
	perimetro() {
		return this.ancho * 2 * this.alto * 2; 
	}
}

```

Podemos usar private en funciones para que solo sean accesibles dentro de la clase. 

```
class Rectangulo {
	private ancho: number; 
	private alto; number; 
	
	constructor(ancho: number, alto: number) {
		console.log("constructor()"); 
		this.ancho = ancho;  
		this.alto = alto; 
	}
	
	private area() {
		console.log("area()"); 
		return this.ancho * this.alto; 
	}
	
	private perimetro() {
		return this.ancho * 2 * this.alto * 2; 
	}
}
```


## Modificador readonly

No permite que se le hagan cambios al valor desde afuera.

Una vez que le damos valor en el constructor ya no lo podemos modificar. 

```
class Rectangulo {
	ancho: number; 
	alto; number; 
	
	constructor(ancho: number, alto: number) {
		console.log("constructor()"); 
		this.ancho = ancho;  
		this.alto = alto; 
	}
	
	area() {
		console.log("area()"); 
		return this.ancho * this.alto; 
	}
	
	perimetro() {
		return this.ancho * 2 * this.alto * 2; 
	}
}

```

No podríamos redefinir como this.ancho = 10 en el constructor de la clase. 

Pero si podríamos definir al principio de la clase

```
readonly ancho: number = 10; 
readonly alto: number = 20; 

```

### private readonly

Logramos que las propiedades no puedan ser modificadas dentro de la clase. 


## Getters y Setters

Podemos implementar atributos virtuales mediante getters y setters. 

Recupera/accede el valor de un atributo.

```
get area() {
	return this.ancho * this.alto;
}

r1.area()

```

Da valor de un atributo. 

```
set area() {
	
}

```

Ponemos (_nombre) para que no haya colisión de nombres entre propiedades y funciones set(). 

```
private _nombre: string;

get nombre() {
	console.log("obtengo el nombre");
	return this._nombre; 
}

set nombre(value: string) {
	console.log("seteo el nombre");
	this._nombre = value;
}
 
```


## Herencia

Con la palabra clave extends hacemos que una clase sea especializada de una clase padre o anterior en la jerarquía de clases. 

```
class Vehiculo {
	
}

class VehiculoTerrestre extends Vehiculo {
	
}

class VehiculoAereo  extends Vehiculo{
	
}

class VehiculoMaritimo extends Vehiculo {
	
}

```

Podemos modificar en las especialización de la clase padre como se va a comportar él. 

A traves de modificar ciertos comportamientos que esa clase tiene o agregando nuevos comportamientos a las clases especializadas hijas. 

```
class Vehiculo {
	console.log("El vehiculo está en movimiento");
}

let vehiculo = new Vehiculo(); 
vehiculo.moverse(); 

```
Se va a ejecutar esa función, que solo dice: 

"El vehiculo está en movimiento".


```
class VehiculoTerreste extends Vehiculo {
	
	moverse() {
		console.log("El vehículo terrestre está en movimiento");
		super.moverse(); 
	}
	 
}

```

La palabra super se usa para referirnos a la clase superior en la jerarquía. 

Si llamamos a super dentro de la instancia de VehiculoTerrestre vamos a acceder a Vehiculo. 

Nos permite acceder a sus propiedades y métodos. 

```
class VehiculoAereo extends Vehiculo {
	moverse() {
		console.log("El vehículo aéreo está volando"");
	}
	
}

```
Acá estamos sobreescribiendo el método moverse de la clase base, no llamandolo a él.


### Atributos y constructor en Herencia

```
class Vehiculo {
	console.log("El vehiculo está en movimiento");
}

constructor (fabricante: string){
	this.fabricante = fabricante;
}

moverse() {
	console.log("El vehículo ${this.fabricante} está en movimiento");
	super.moverse(); 
}

let vehiculo = new Vehiculo(); 
vehiculo.moverse(); 

```

Podemos imprimir o mostrar la propiedad mediante el método moverse(). 

Después podemos hacer que otra clase hijo herede el movimiento y la propiedad.

Para heredar esto cada clase debe tener su constructor para acceder a las propiedades. 

Pero si no lo hacemos, se hereda el constructor de la clase base.


### super a los constructores de las clases hijos

Para heredar propiedades de clase base usamos super en el constructor. 

Además tenermos que escribir esas propiedades más las nuevas propiedades del la clase. 

Llamará primero al constructor de la clase superior. 



```
class VehiculoTerreste extends Vehiculo {
		
	private tipo: string; 
	
	constructor(fabricante: string, tipo: string) {
		super(fabricante);
		this.tipo = tipo;
	}
	
	moverse() {
		console.log("El vehículo terrestre está en movimiento");
		super.moverse(); 
	} 
}

```


## Uso de abstract y protected

Facilitar el acceso a la información dentro de la jerarquía. 

```
fabricante: string;

reparar() {
	console.log('Leyendo el manual de instrucciones del ${fabricante}');
		
}
```

Podríamos hacer a fabricante private para que no se pueda modificar desde fuera/desde una instancia. 

```
private fabricante: string;

```

```
let vehiculo = new VehiculoTerrestre("yamaha", "moto"); 
vehiculo.fabricante = "hola" //error
vehiculo.reparar()

```

Pero como es privada no se puede acceder desde clases hijas, aunque tenga la herencia en el constructor de VehiculoTerrestre.


### Modificador protected 

La diferencia entre protected y private; protected no puede ser accedido desde fuera como private. 

Pero TS nos permite acceder a esa propiedad desde una clase que sea hija. 

```
protected fabricante: string; 

VehiculoTerrestre {
	constructor
	super
	
	reparar() {
	console.log('Leyendo el manual de instrucciones del ${fabricante}');

}

```

Con las funciones pasa lo mismo, con protected no podríamos llamarlas desde fuera pero si dentro de una clase hijo. 


```
Vehiculo {
	protected LlevarAlTaller {
		console.log('Vehículo llevado al taller'); 
	}
}

VehiculoAereo {
	reparar() {
		this.LlevarAlTaller(); 
	}
	
}

```


### Modificador Abstract

Para crear un sistema de clases robusto, podríamos tener la necesidad de instanciar clases de vehículo concretas, pero no instanciar un vehículo (clase base).

Podríamos hacer esto declarando con abstract la clase base. 

```
abstract class Vehiculo {
	protected fabricante: string; 
	
	constructor(fabricante: string) {
		this.fabricante = fabricante; 
	}
}

```

Todo funciona igual, con los modificadores, super para las clases hijas. 

Pero no podríamos instanciar la clase base. 

```
let vehiculo = new Vehiculo("Airbus"); //error

```

Si quisieramos instanciar un vehículo tendriamos que hacerlo con las clases hijas que tiene la palabra clave extends.

```
class VehiculoAereo extends Vehiculo {
	moverse() {
		console.log("Vehículo Aereo está volando");
	}
}

```

```
//por inferencia
let vehiculo = new VehiculoAereo("Airbus"); 

//por tipado
let vehiculo: VehiculoAereo = new VehiculoAereo("Airbus"); 

//por herencia de tipos/o clase no concreta
let vehiculo: vehiculo = new VehiculoAereo("Airbus"); 
vehiculo.reparar() //error

``` 

vehiculo.reparar() //error, da error porque la clase base no tiene este método. 

Pero nos da acceso a todo lo que tiene Vehiculo. 

Logramos encapsular cierta información acerca de las implementaciones concretas que estamos usando. 


### Patrones de Diseño

Permiten diseñar jerarquías de clases de tal maneara que la información que necesite el sistema sea la minima posible. 

Evita pasar datos que una clase o función no necesite. 


## Tipos Alias

Función que permite crear tipos propios con nombres propios, que corresponden a otros tipos existentes o subyacentes. 

Tomamos los tipos más simples o complejos para darle más expresividad o semántica. 

```
number;

[string, string];

{
	name: string,
	value: string
}

```

Usamos la palabra clave type seguido del nombre que le querramos dar al tipo y se lo asignamos a un tipo existente o subyacente. 

```
type Numero = number;

```
Con esto podemos usar Numero para declara variables, parámetros y retorno de funciones, etc. 

```
let n: Numero = 5; 

```

### Alias complejos 

Podemos crear un tipo que se corresponda con un objeto. 

```
type LoginCredentials = {
	username: string, 
	password: string
} 

```

Ahora podemos hacer funciones que acepten un objeto de tipo LoginCredentials. 

LoginCredentials es un tipo objeto. 

Ahora ese parámetro podrá usar propiedades y métodos. 

```
function login(data: LoginCredentials) {
	data.password;
	data.username;
}

```

Después podemos llamar a esta función y pasarle username y password. 

Cuando llamamos a login() no le podemos pasar un objeto si no tiene username y password. 

Como están especificados en el tipo objeto LoginCredentials. 

```
login({
	username: 'admin'; 
	password; 'admin'; 
})

```

Dentro de login() va la estructura de un objeto completo y sus valores. 

Nos dará un error si nos falta una propiedad/parámetro y también si agregamos una más que no está en el tipo objeto. 


Los tipos alias complejos nos permiten encapsular información. 

Podemos crear tipos complejos para ocultar la información, para hacerlo más facil de entender. 

Lo hace más mantenible tanto para la modificación, agregar o eliminar propiedades, métodos, etc. 

```
type LoginCredentials = {
	username: string, 
	password: string, 
	remenber?: boolean
}

```

No tendríamos que cambiar los parámetros de todas las funciones todo el tiempo.

Al solo pasar el tipo LoginCredentials, no tendríamos que cambiar esos parámetros uno a uno. 

```
function login(data: LoginCredentials) {
 //...	
}

```
 
Se encuentran mucho en APIs y módulos portados a TypeScript. 


## Tipos Literales 

Son una variedad de tipos, en lugar de utilizar un tipo que acepta un rango de tipos, como un boolen que acepta true y false. 

Aceptarán un único valor. 

El tipo de una variable tiene que ser su valor. 

```
let verdadero: true: = t rue; 

let cinco: 5 = 5; 

let cinco: 5 = 4; //error 

let hola: 'hola' = 'hola'; 

```

Aparecen sin darnos cuenta: 

En const y let un booleano true, TS lo infiere distinto: 

```
let permiso: boolean = true; //No va a inferir, será tipo boolean. 
const permiso = true; //infiere que es true, no boolean.  

```

Dado const no se puede reasignar, será el tipo de ese valor. 
 
De igual forma pasa con un literal de const. TS infiere literales.

```
const saludo = 'hola'; //infiere que es de tipo 'hola'
saludo = 'adios'; //error

```

Podemos utilizarlos y encontrarlos en interfaces de APIs que devuelven constantes. 

```
type LoginOperation = {
	op: 'login',
	username: string, 
	password: string
}

let l:loginOperation = {
	username: 'admin',
	password: 'admin',
	op: 'a' //error, debería ser 'login'
}

```

El campo op siempre valdrá login, no haría falta tiparlo como string. 

Será más expresivo si lo tipamos como string directamente. 


## Uniones de tipos 

Podemos crear tipos que realmente no existen, ni siquiera un tipo subyacente. 

Una variable, parámetro o tipo de retorno puede ser de varios tipos. 

Cualesquiera que le estemos indicando. 


Lo podemos usar para hacer funciones y especificar que el parámetro de usa función pueda ser de tipo string, boolean, etc. 

Siempre pudiendo especificar más de uno. 

Las uniones de tipos se realizan utilizando separador u or (|).

```
function convertir(valor: string | number) {
	//
}

convertir('cadena'); 
convertir(5); 
convertir(fales); //error

``` 

### Uniones y types personalizados

Las uniones se suelen utilizar con tipos definidos propios con type. 

Ej, tipo llamado A, con dos campos: 

```
type A = {
	uno: boolean;
	dos: boolean;
}

type B = {
	tres: boolean; 
}

let valor: A | B = {
		uno: true, dos: true 
}

let: A | B = {
	tres: false
}

```

En una función tenemos que tener en cuenta que dentro de la función, a priori TypeScript no sabe cuál es el tipo correcto 

Entonces, vamos a perder las operaciones y propiedades asociadas a estos objetos. 

Solo nos ofrece las operaciones que son comunes a ambos objetos. 

Limitando las operaciones. 

```
function convertir(valor: string | number) {
	value. //limitadas operaciones sola a ambos tipos
}

let x: number = 5; 
5.//todas las operaciones del objeto number. 

let y: string = 'a'; 
a.//todas las operaciones del objeto string. 

```

Si queremos poder utilizar todas las operaciones String o todas las operaciones Number. 

Tenemos que asegurarnos que el valor va a ser de un tipo o de otro. 

```
function convertir(valor: string | number) {
	if (typeof(valor) === "string") {
		valor.//nos da acceso a todas las operaciones string
	} else if (typeof(valor) === "number") {
		valor.//acceso a todas las operaciones number
	} else {
		valor.//solo disponible never para código que no nunca se tiene que ejecutar. 
	}
}

//o 

function convertir(valor: string | number) {
	if (typeof(valor) === "string") {
		valor.//nos da acceso a todas las operaciones string
	} else {
		valor.//acceso a todas las operaciones number
	}

```


## Tipos literales y uniones para distingir tipos

### Uniones discriminantes

Hacemos unión de distintos tipos que representa objetos para poder diferenciar entre cada uno de estos tipos concretos que conforman la unión. 

Todos los tipos disponen de un campo que tienen un mismo nombre en todas, pero un valor diferente en cada uno de los subtipos. 

Usando ese valor podemos diferenciar si estamos en un subtipo 1 o subtipo 2. 

Lo podemos usar como guarda para poder diferenciar un tipo u otro. 

```
type OperacionSuma = {
	sumando1: number, 
	sumando2: number, 
	tipo: 'suma'
}

```

La operación suma se corresponde a un objeto en el cual pasamos parametros tipo number. 

Usa un campo especial llamado tipo para indicar una suma en el objeto. 

Por diseño podría ser un string, pero también un tipo literal para hacerlo más preciso y expresivo. 

Esto obliga a que esté el tipo y el valor suma, sino, por lógica y por estructura que no podríamos sumar. 


Podríamos tener la operación multiplicar

```
type OperacionMultiplicar = {
	operando1: number, 
	operando2: number, 
	tipo: 'multiplicar'
}
	
```

Con estos dos types, podriamos crear un tipo unión, operación que sea el resultado de una unión entre la operación suma y la operación multiplicar. 

```
type Operacion = OperacionSuma | OperacionMultiplicar; 

```
 
Con esta definición podemos crear una función que acepte una operación, al parametro le podemos pasar una operación suma o una operación de multiplicación.

```
function operar(o: Operacion) {
	 
}

``` 

Esto nos permite acceder a las operaciones comunes a cada objeto. 

Como lo estamos limitando a un literal, tiene que ser tipo multiplicar o suma. 

Ahora debemos diferenciar las operaciones entre una suma y multiplicar. 

Los podemos hacer chequeando lo que vale su tipo.  

```
function operar(o: Operacion) {
	if(o.tipo == 'suma') {
		
	}
}

```

Si se cumple el primer requisito, TS infiere que la operación (o) tiene que ser de suma. 

Sería la única manera de hacer que la propiedad tipo sea valida. 

Ahora podemos acceder a las propiedades sumando1 y sumando2 para realizar la operación suma. 

```
function operar(o: Operacion) {
	if(o.tipo == 'suma') {
		return o.sumando1 + .sumando2; 
		
	} else if (o.tipo == 'multiplicar') {
		return o.operando1 * o.operando2
	}
}

```


## Intersección de tipos

Son tipos compuestos de otros tipos. 

Mediante las intersecciones podemos declarar tipos que se corresponden a la vez de declarar multiples tipos proporcionandolos simultaneamente. 

Un objeto de tipo intersección sera a la vez de todos los tipos que lo conforman. 

Tendrá que tener multiples propiedades para satisfacer a todos los tipos que lo conforman en la intersección. 

```
type Coordenada = [x: number, y: number];

```
Abstraemos una coordenada para hacerlo más facil y mantenible. 

```
type Coordenada = [x: number, y: number];

type Posicionable = {
	posicion: Coordenada
}

let posicion: Posicionalbe {
	posicion: [5, 5]
}

```

Ahora podemos abstraer un vector para un movimiento. 

```
type Vector = [x: number, y: number];

type Movible = {
	velocidad: Vector,
	aceleracion: Vector
}

type MovibleYPosicionable = Posicionable & Movible; 

```
Nos obliga tener que proporcionar todas las propiedades especificadas en los dos tipos. 

```
let obj: MovibleYPosicionable = {
	aceleracion: [5, 5],
	posicion: [4, 4],
	velocidad: [1, 1,]
}

```


## Interfaces

Especificación o contrato que los que la apliquen tengan que cumplir las condiciones. 

Especie de tipo con un nombre en el cual vamos a declarar una serie de aspectos que luego queramos que objetos de ese mismo tipo tengan. 


Antes de los type alias, las interfaces ocupaban sus características. 

Ahora los type alias y las interfaces hacen cosas parecidas. 


Ej: interfaz que nos sirva para tipar un objeto. 

Nos podría devolver una función login() que tenga información de un nombre de usuario y su info asociada. 

```
function login() {
	return {
		username: 'admin', 
		created_at: new Date(), 
		superuser: true
	}
}

let data = login(); 

```

Guardamos la función en una variable y luego queremos pasar la variable con la función para hacer cosas. 

Como actualizar el usuario, confirmar acciones y cosas que necesiten pasar el objeto data. 


La inferencia de TS dice que el objeto data o la función login(), es de tipo objeto compuesto por las claves y valores. 

```
 let data: {
	 username: string; 
	 created_at: Date;
	 superuser: boolean; 
 }
 
```
Con type alias podríamos darle un nombre esta estructura. 


Con las interfaces podemos hacer algo equivalente. 

Creando una interfaz user data que sea una especificación que represente un tipo que que contenga datos de usuario. 

```
interface UserData {
	 username: string; 
	 created_at: Date;
	 superuser: boolean; 
}

```
Como especificación, cualquier objeto que quiera ser considerado UserData tiene que implementar los tres campos. 

Ahora podemos decir que login() es de tipo user data, dado que implementa todas sus propiedades y métodos (cuando haya). 

Y la variable data será de tipo UserData y no un objeto compuesto por muchas propiedades y métodos. 

```
interface UserData {
	 username: string; 
	 created_at: Date;
	 superuser: boolean; 
}

function login(): UserData {
	return {
		username: 'admin', 
		created_at: new Date(), 
		superuser: true
	}
}

let data = login(); 

```

Las interfaces exigen, cuando lo usamos en objetos simples que un objeto de tipo interfaz tenga más propiedades que las que fueron definidas en la interfaz. 

No puede agregar propiedades ni métodos por si mismo.

Como lo podríamos hacer con una subclase de una clase base. 


## Modificadores y funciones en interfaces

Además de propiedades, podemos incluir funciones con la carácterística que estará vacía para que el objeto que implemente la interface la personalize. 

```
interface UserData {
	 username: string; 
	 created_at: Date;
	 superuser: boolean; 
		
	 logout(): void; 
	 
	 //según la sintaxis elegida.  
	
	 rename: (username: string) => void; 
}
 
```

Ahora el objeto que implemente la interface tiene dar uso o lógica a esas funciones. 

```
function login(): UserData {
	return {
		username: 'admin', 
		created_at: new Date(), 
		superuser: true
		
		logout() {
			console.log('Adios');
		}
		
		rename(username: string) {
			//de momento no tenemos this, lo implementamos después. 
			console.log('TODO: Rename account'); 
		}
	}
}

```

Como las intefaces tiene los tipos definidos, podemos omitir en la implementación que sucede en otros objetos. 

Lo mismo con los tipos de retorno. 

```
rename(username) {
	console.log ('TODO: Rename account'); 
}
```


### Modificadores en interfaces

Podemos cambiar la manera en la que los atributos y métodos se comportan o cómo pueden ser manipulados.

Esto se hace para tener que usar las funciones setter y getter para impedir romper las propiedades. 

```
//sin modificadores 
let l = login();
l.username = 'foo'; 

//con modificadores y un setter
let l = login(); 
l.rename('foo'); 

```
 
Con readonly podemos impedir modificaciones directas a un atributo.

```
readonly username: string; 

console.log(l.username) #es válido en modo lectura. 

```

### readonly en un objeto complejo 

readonly no permite modificar todo el objeto complejo.

Pero si permite modificar uno a uno usus propiedades porque no llega profundo. 

```
interface UserData {
	//...
	readonly personal: {
		name: string; 
		email: string; 
	}
}

function login(): userData {
	return {
		//...		
		personal: {
			name: 'Adminencio', 
			email: 'foo@example.com'
		},
		
	}
}

let l = login();
console.log(l.username);

l.persona = { //error
	
}

l.personal.email = 'hola'; //válido

``` 


### Atributos opcionales en intefaces 

```
interface UserData {
	superuser: boolean | undefined; 
}
```

### atributo interrogación (opciona)

Para decirle que puede estár o no. 

```
superuser?: boolean; 

```

```
function login(): UserData {
	return {
		//superuser: true, podemos desactivarlo. 
	}
}

```

Con los atributos opcionales, podemos limitar su uso. 

TS protege el código al no permitir el uso de la propiedad/método opcional, porque puede que no esté definido. 

```
created_at?: Date; 

l.created_at //TS marca que puede ser date o undefined 
l.created_at.toISOSTring()

```

### Asegurarse de tener acceso a las propiedaes/metodos opcionales 

Si created_at valiese undefined no se podrá entrar en el if porque undefined en JS evalua a false. 

Comprobamos si algo está definido o no, solo con un if. 

```
if (l.created_at) { // evaluación true por defecto
	l.created_at.toISOString(); //Ts válida el tipo Date
}

``` 

Adentro de if, TS puede comprobarlo y es correcto su uso. 

Sin if, no se puede usar el atributo opcional. 


Opcionalmente podríamos preguntar por la propiedad: 

Sin estructura if. 

```
l.created_at?.; 
l.created_at?.toISOString(); 

```


La forma más insegura es usar exclamación para evitar que TS válide las cosas. 

```
l.created_at!.; 
l.created_at!.toISOString(); 

```


## Implementar interfaces

Podemos utilizar interfaces en clases para que implementen ciertos aspectos definidos en las interfaces. 

La clase puede ser encapsulada como distintos tipos a la vez depende de como lo queramos utilizar en el momento. 


Ej, definir una forma geométrica. 

Contará un diferentes aspectos. 

Como lados, area, perimetro, etc. 

```
interface Shape {
	readonly sides: number; 
	
	area(): number; 
	perimeter(): number; 
}

```

Podemos crear funciones que devuelven objetos podríamos hacer funciones que crear objetos completos como puede ser un triángulo. 

El objeto que devolverá será de tipo shape (tipo y retorno shape para una función).


Si creamos una clase para representar una forma geométrica. 

```
class Rectangulo {
	readonly width: number;
	readonly height: number;
	
	constructor(width: number, height: number) {
		this.width = width; 
		this.height = height; 
	}
}

```

Podemos hacerlo de forma más simpliciada. 

Escribimos los modificadores directamente en el constructor. 

Además podríamos quitar this.prop. 

Esto para versiones avanzadas de TS

```
class Rectangulo {

	constructor(readonly width: number, readonly height: number) {
	}
}

let l = new Rectangle(5, 4); 

```

Si tenemos una librería con la que podemos crear figuras geométricas. 

Con una funcion como process que acepta un objeto de tipo shape

```
function process(s: Shape) {
	//...
}

```

Si intentamos llamar a process con un rectangulo instanciando esta clase. 

```
process (new Rectangle(5, 5)); 

```
Rectangle no es una interfaz shape, es de tipo rectangle. 

Podemos hacer que Rectangle se pueda comportar como una interfaz Shape. 

```
class Rectangulo implements Shape {

	constructor(readonly width: number, readonly height: number) {
	}
}

```

Las instancias pueden ser Rectangle y cuando necesiten pueden implementar la interfaz Shape. 

Las instancias de Rectangle pueden implementar multiples interfaces. 

```
class Rectangulo implements Shape, CanvasGradient  {
	constructor(readonly width: number, readonly height: number) {
	}
}

```

Podemos implementar las operaciones de Shape

```
class Rectangulo implements Shape {
	
	sides: number = 4;  
	
	constructor(readonly width: number, readonly height: number) {
	}
		
	area(): number {
		return this.width * this.height; 
	}
	
	perimeter(): number {
		return 2 * this.width * 2 * this.height; 
	}
}

let r = new Rectangle(5, 5);
process(r);

```

Ahora podemos pasar una instancia de rectangulo a la función process que acepta el tipo shape.


La función process solo conoce las propiedades del tipo shape. 

En cambio la instancia de rectangle conoce las dos. 

```
function process(s: Shape) {
	console.log({area: s.area()}); 
}

```


## Herencia de interfaces

Proceso de especialización en las clases. 

```
interface Vehicle {
	fabricante: string; 
	
}

```

Para la especialización vamos a crear nuevas interfaces

```
interface VehiculoTerrestre {
	
}

interface VehiculoMaritimo {
	
}

``` 

Jerarquicamente forman algún tipo de relación, terrestre y maritimo es una especie de vehiculo

Ahora necesitamos que los vehiculos especiales tengan propiedades adicionales. 

Agregamos nuevas propiedades y métodos a ellas. 

Y necesitamos que los especiales hereden las propiedades de la interface base. 

Esto los hacemos con la palabra extends 

```
interface Vehicle {
	readonly fabricante: string; 
	arrancarMotor(): void; 
	repostar(): void; 
	deternerMotor(): void; 
}

interface VehiculoTerrestre extends Vehiculo {
	conducir(): void; 
}

interface VehiculoMaritimo extends Vehiculo {
	sonarSirena(): void; 
	encenderChimenea(): void; 
	detenerChimenea(): vodi; 
}

``` 

Creamos la clase que implemente las clases especializadas, no así la clase base; dado que las especializadas tiene sus propiedades. 

Es como llenar la plantilla. 

```
class OpelCorsa implements VehiculoTerrestre {
	
	fabricante: string = "Opel"; 
	
	conducir(): void {
		console.log("Está en marcha"); 
	}
	
	//...
}

```


### Abstracciones con Interfaces y Clases

Con las interfaces podemos esconder información y crear abstracciones.

Podemos tener operaciones, funciones que acepten objetos que son de tipo especializados como terrestre y maritimo. 

Esto logra encapsular la información, no importa el tipo. 


### La clase tendrá sus propias propieadades y métodos, ademas de las de las interfaces especializadas. 

```
class OpelCorsa implements VehiculoTerrestre {
	
	fabricante: string = "Opel"; 
	
	conducir(): void {
		console.log("Está en marcha"); 
	}
	
	//...
	
	abrirMaletero(): void {
		
	}
}

```

Si hacemos una función que acepte un tipo de interfaz especializada

Tenemos acceso las operaciones de vehiculo y vehiculo terrestre. 

```
function procesar(v: VehiculoTerrestre) {
	v.arrancarMotor(); 
}

```

Ahora podemos llamar a la función y pasarle una instancia de la clase que a su vez implementa las interfaces. 

Asi tendremos una función con las propiedades de la clases y las interfaces. 

procesar(new OpelCorsa()); 


### Emular interfaces y clases con Types Alias

Tan solo quitando la interfaz base, si dejamos todo lo demás funciona. 

Y dejando las otras interfaces intactas. 

```
type Vehiculo = {
	readonly fabricante: string; 
	arrancarMotor(): void; 
	repostar(): void; 
	deternerMotor(): void; 
}
```


### También podemos hacer type alias especializados

Extenderán el type alias base usando el operador &

Con esto un vehículo terrestre tiene las operaciones que declaradas en vehiculo y en terrestre. 

```
type VehiculoTerrestre = Vehiculo & {
	conducir(): void; 
}

```


## Interfaces con indices 

Son indices de acceso que tiene las interfaces. 

Los tipos de objetos indizables en JS son los arrays y los objects. 

Para acceder a la posición de los elementos. 

```
let vector: number [] = []; 
vector[0]; 

let object: Account = {
	displayName: 'foo', 
	prDisplayName: 'foo', 
	id: '1'
}


object.displayName; 
object['displayName']; 

let x = object['displayName']; 

```

En TS podemos hacer interfaces que declaren que quién la implemente debería hacer uso de los indices para poder hacer uso de cierta información. 

Dentro de la interfaz declaramos una operación que sea acceso por indice. 

Lo hacemos escribiendo un atributo especial corchete y metemos el parametro como clave y definimos el tipo. 

```
interface Indizable {
	[index: number]: boolean; 
}

let l: indizable = {}; 
l[4]

let k = l[4];

```

Sirve para dar soporte a indices. 

Nos podría interezar que los objetos devueltos van a ser de un tipo concreto. 

Como nos devolvió un boolena, le podríamos haber dicho string. 


Además que podríamos haber accedido por string. 

```
interface Indizable {
	[index: string]: string; 
}

let l: indizable = {}; 

let k = l["4"];

```


## Funciones y typos híbridos

Las interfaces las podemos usar para declarar tipos que representen funciones.


Vimos que podemos hacer un type que acepte parámetros y que devuelva un tipo concreto. 

```
type Comparator = {a: string, b: string} => number;
	
```

También lo podemos hacer con interfaces:

Que se comporte igual al type alias anterior.  

Debemos poner el tipo función 

```
interface Comparator {
	(first: string, second: string): number;
}

```

Ahora Comparator será invocable. 


Podemos crear una función sort() que acepte un parámetro de tipo definido en la función. 

```
function sort(c: Comparator) {
	c.("first", "second"); //tiene props y met de funciones
}

```


### Interfaz con función permiten el tipo hibrido

el objeto c. tiene atributos. 

El tipo hibrido consiste en un objeto que se puede llamar y que tambien tiene atributos. 


Comparator es una función pero también puede tener atributos.

Declara algo llamable como los parámetros pero también puede tener atributos como algorithm y safe. 

```
interface Comparator {
	(first: string, second: string): number;
	algorithm: string; 
	safe: boolean; 
}

function sort(c: Comparator) {
	c.("first", "second"); //tiene props y met de funciones
	console.log(`Ordenando con el criterio ${c.algorithm}: ${out}`);
}

```

Los types pueden funcionar de esta manera también. 

Con los parámetros hacemos un llamado y le agregamos atributos. 

```
type Comparator = {
	(a: string, b: string): number;
	algorithm: string; 
}

```


## Diferencias entre interface y type

Hoy los types nos permiten hacer casi todo lo que las interfaces pueden.

Tienen mucho en común pero hay diferencias. 


### Código para interfaces

```
interface X {
	a: string; 
}

```

```
interface X {
	b: string; 
}
```

```
interface X {
	c.string; 
}

```

```
function use(x: X) {
	x.a + x.b + x.c; 
}

```

Al usar de tipo X, nos permite usar las propiedades separadas de X. 

Representa una extensión de interfaz declarandola con el mismo nomber pero agregando distintas propiedades. 


Favorece el principio de programación: Abrierto-Cerrado. 

Los módulos deben ser fáciles de extender, sin cambiar su código. 

Abierto para su extensión, cerrado para su modificación. 


Podemos crear interfaces a partir de otra existente con el mismo nombre 

El sistema de tipos juntará esas definiciones. 


### Objeto window en JS

En el caso de que estemos usando TS para portar un proyecto JS. 

Con el paso de los años, fue acumulando variables globales. 


En JS, existe un objeto en todo momento presente en los navegadores. 

El objeto window. 

Representa la ventana. Tiene un montón de propiedades para las ventanas.  


Su carácteristica es que es dónde se acoplan las variables declaradas como globales. 

Si declaramos una var foo, existirá un objeto window.foo que tenga su valor. 

```
var foo = 5;  

window.foo; 
//5

```

Cuando declaramos variables globales en JS, no existen, el motor las introduce en el objeto window. 

Como cuando nosotros creamos las nuestras. 


Si quisieramos usar nuestras variables globales en TS tipandolas. 

Debemos declararlas. 

En TS tenemos una interfaz Window que representa el objeto window. 

```
function use(w: Window) {
	w.
}

```

Podríamos tener una variable global llamada accountID. 

Si quisiesemos tiparla, no podríamos usar el objeto w.accountID. 

```
function use(w: Window) {
	w.accountID; 
}

```

Si la invocamos por su nombre, TS no sabe dónde está. 

```
function use(w: Window) {
	accountID; 
}

```

Window en TS no incorpora las variables globales de JS. 

Para declarar una global en el objeto Window para poder utilizar la variable. 

Podríamos crear una interfaz Window, introduciendo la variable accountID de JS. 

En TS lo Hacemos como propiedad objeto. 

```
interface Window {
	accountID: number; 
}

```

Ahora podemos llamar a accountID. 

```
function use(w: Window) {
	w.accountID; 
}

```
Ahora podemos usar la variable global. 

Esto es el beneficio cuando TS fusiona las interfaces que se llaman igual. 



## Casteos con as

Transformar variables de un tipo a otro. 

A veces necesitamos casteos para acceder a las propiedades de distintos tipos. 

```
interface Geometria {
	lados: number; 
	
	pintar(): void; 
}

interface Triangulo extends Geometria {
	base: number; 
	altura: number; 
	
}

interface Cuadrado extends Geometria {
	lado: number; 
	
}

function procesar(g: Geometria) {
	if(g.lados == 4) {
		//g.lado no se puede
		//debemos castearlo
		
		let cuadrado = g as Cuadrado; 
		cuadrado.lado; 
		
	} else if(g.lado == 3) {
		let triangulo = g as Triangulo; 
		triangulo.base; 
		triangulo.altura; 
	}
}

```

### Sintaxis alternativa para casteos: no usarla

Se logra poniendo <tipoACastear> seguido de la variable a castear.  

```
function procesar(g: Geometria) {
	if(g.lados == 4) {
		//g.lado no se puede
		//debemos castearlo
		
		let cuadrado = (<Cuadrado> g); 
		cuadrado.lado; 
		
	} else if(g.lado == 3) {
		let triangulo = g as Triangulo; 
		triangulo.base; 
		triangulo.altura; 
	}
}

```

Este código no va a funcionar con los demás. 

Tiene limitaciones, no es compatible con TS JSX/TSX. 

TS no tiene forma de saber cuando usas este casteo o JSX. 


## Comprobar tipos: instanceof y guardas

Hay dos maneras de hacer checks de tipos. 

Podemos usar instanceof en JS para saber el tipo de un objeto. 

```
color1 = new String("verde"); 
color1 instanceof String; // devuelve true

```

```
elDia = new Date(1995, 12, 17); 
if (elDia instanceof Date) {
	//... Al ser true se ejecutarán las instrucciones
}

```

Pero instanceof no funciona con interfaces

En JS las insterfaces no existen, si vemos la compilación de TS a JS no están. 


```
class Coche {
	fabricante: string = "honda"; 
}

let c: Coche = new Coche(); 
console.log(c intanceof Coche); 

```

Con una interface 

```
interface Coche {
	fabricante: string; 
}

let c: Coche {
	fabricante: "honda"; 
}
console.log(c intanceof Coche); //error

```

Ni siquiera con una clase extendida

```
class CocheConcreto implements Coche {
	fabricante: 'honda'; 
}
console.log(c intanceof CocheConcreto);

```


Para interfaces usamos las guardas del tipo is.

Forma avanzada en TS para asegurar si un objeto es de un tipo o no. 

Son funciones booleanas, aceptan un parámetro. 

Debemos poner el nombre de la interfaz que queremos comprobar, como Cuadrado. 

```
function esUnCuadrado(x: any): x is Cuadrado {
	
}

```
Si devuelve true, quien la llame hará un casteo automático del tipo que le corresponda al tipo Cuadrado. 

Comprobando si es Cuadrado. 

```
function esUnCuadrado(x: any): x is Cuadrado {
	return x.lados && x.lados == 4 && x.pintar && x.lado
}

```

```
function procesar(g: Geometria) {
	if (esUnCuadrado(g)) {
		g.//será de tipo Cuadrado
	}
}

```

```
function esUnaGeometria(x: any): x is Geometria {
	return x.lados && x.pintar; 
}

function esUnCuadrado(x: any): x is Cuadrado {
	return esUnaGeometria(x) && (x as any).lado; 
}

function esUnTriangulo(x: any): x is Triangulo {
	return esUnaGeometria(x) && (x as any).base  && (x as any).altura; 
}

function procesar(g: Geometria) {
	if (esUnCuadrado(g)) {
		g.//será de tipo Cuadrado
	} else if(esUnTriangulo(g)) {
		g.//
	}
}

```

Son un forma de hacer casteos en tiempo de ejecución de forma flexible. 


## enum

Es un tipo que a veces nos puede ayudar a limitar el posible rango de valores que puede tener determinada variable. 

```
interface CitaMedica {
	dia: string; 
}

let c: CitaMedica = {
	dia: 'hola'; 
}

```
No tenemos limitaciones lógicas para el string de la interfaz. 


Podríamos hacer una disyunción de tipos literales

```
interface CitaMedica {
	dia: 'lunes' | 'martes' | 'miercoles' | 'viernes' | 'sabado' | 'domingo'; 
}

let c: CitaMedica = {
	dia: 'hola'; //ahora si el compilador dará error
}

```

Debe tener algunos de los valores definidos como tipo literal.


Si trabamos en algo más complejo como un frontend que recibe datos de una API que codifica los dias de la semana con números entre el 0 y 6 o 1 y 7. 

No podemos hacer literales númericos. 

Podríamos hacer un código con if... dia igual a, etc. 

O hacemos funciones que conviertan los literales en números. 


Una solución intermedia es fabricar constantes. 

```
const LUNES = 1; 
const MARTES = 2; 
const MIERCOLES = 3; 
const JUEVES = 4; 
const VIERNES = 5; 
const SABADO = 6; 
const DOMINGO = 7; 

if dia == LUNES {
	//conver number to string
}

```

En Ts también podríamos hacer: 

```
type DiaSem = LUNES | MARTES | MIERCOLES | JUEVES; 

```

TS nos proporciona otra alternativa como los tipos enumerados

Son valores dentro de un tipo común único y propio que forma parte del lenguaje. 

Tiene la palabra reservada enum. 

Tiene un parecido a class e interface. 

Le pasamos el nombre del tipo y los valores.

```
enum DiaSemana {
	Lumes, 
	Martes, 
	Miercoles, 
	Jueves, 
	Viernes, 
	Sabado, 
	Domingo, 
}

```

Ahora usamos la interfaz 

```
interface CitaMedica {
	dia: DiaSemana; 
}

let c: CitaMedica = {
	dia: 2; 
}
 
let c: CitaMedica = {
	dia: DiaSemana.Lunes; 
}

```

Cuando declaramos nuestra cita debemos especificar el valor. 

Como número o como propiedad. 


## Enumerados avanzados 

Las propiedades de los enum tiene valores internos, como una serie de indices consecutivos. 

Empiezan desde 0 y según el orden de propiedad


Si quisiesemos que una propiedad que aparece antes que otra tenga un valor superior o distinto, no consecutivo: 

Lo hacemos con el signo igual. 

Los siguientes números o indices de las propiedades van a empezar a contar a partir de ese. 

Si no definimos otros. 

Reseteamos su ubicación desde el lugar asignado. 

Por algún motivo dos propiedades pueden tener el mismo número con las consecuencias que implica. 

```
enum DiaSemana {
	Lunes = 401,  
	Martes = 501,
	Miercoles = 601,
	Jueves = 701,
	Viernes = 801,
	Sabado = 901,
	Domingo = 1001,
}

```

Leemos el código por semantica no por ese valor asignado: 

```
let c: CitaMedica = {
	dia: DiaSemana.Lunes
}

```

Como enum usa su propie espacio de nombre, podríamos tener otro enum con otro nombre y las mismas propiedades. 

```
enum dias2 {
	Lunes = 302
}

```


### Problemas por asociar números

Como enum es un objeto accedemos fácilmente por punto: 

```
let c: CitaMedica = {
	dia: DiaSemana.Lunes
}

```

Si imprimimos su valor: 

```
console.log(c)

//imprime objeto: {"dia": 401} 

```

Ts soporta otra manera de declarar enumerados. 

En vez de asignarle números, podemos asignarles string. 

```
enum DiaSemana {
	Lunes = "lunes",  
	Martes = "martes"; 
	Miercoles = "miercoles", 
	Jueves = "jueves",
	Viernes = "viernes",
	Sabado = "sabado",
	Domingo = "domingo",
}

```

Ts solo sabe poner números y sumarle +1 a otro. 

No puede sumar strings. 

Te obligará a darle valores a todos con string o numeros. 

Todo número o string o de los dos.  

Lo que viene a continuación de un literal tiene que tener valor. 

string literal lunes seguido de martes, miercoles. 

```
enum DiaSemana {
	Lunes,  
	Martes,
	Miercoles = "lunes", 
	Jueves = "martes",
	Viernes = "miercoles",
	Sabado = 6, 
	Domingo =, 
}

```

En otros lenguajes exigen que los valores asignados sean constantes. 

En TS podemos darle valores computados. 


## Enumerados con valores computados

Implementar enum para declarar el funcionamiento de un sistema de permisos. 

Permisos para crear, subir contenido, etc; los roles pueden tener permisos. 

```
enum Permisos {
	EscribirMensajes = 1, 
	Reaccionar, 
	EnviarEnlaces, 
	ConectarACanalesDeVoz,
}

```

Nos asignará números desde 0, salvo que al primero le pongamos un 1. 

Demostraramos permiso con 1 y no con 0. 


Si quisiesemos hacer que cada permiso fuese un bit separado de un número. 

Para poder hacer máscara de bits. 

Podríamos multiplicar cada número por dos. 

```
enum Permisos {
	EscribirMensajes = 1, 
	Reaccionar = 2, 
	EnviarEnlaces = 4, 
	ConectarACanalesDeVoz = 8, 
}

```

Si tenemos un número de permisos 6 podríamos reccionar (2) y enviar mensajes (4). 

Es una manera de gestionar muchas cosas en poco espacio. 


Pero es mejor hacerlo automaticamente. 

Con los tipos computados podemos hacerlo. 

Multiplicar por 2 el anterior: 

Ej, reaccionar es el doble de su permiso anterior. 

```
enum Permisos {
	EscribirMensajes = 1, 
	Reaccionar = EscribirMensajes * 2, 
	EnviarEnlaces = Reaccionar * 2, 
	ConectarACanalesDeVoz = EnviarEnlaces * 2,
}

```

Podríamos declara una constante inicial: 

```
const INICIAL = 8; 

enum Permisos {
	EscribirMensajes = INICIAL, 
	Reaccionar = EscribirMensajes * 2, 
	EnviarEnlaces = Reaccionar * 2, 
	ConectarACanalesDeVoz = EnviarEnlaces * 2,
}

```

Podríamos llamar a pequeñas funciones constroladas: 


```
function random() {
	return 9; 
}

enum Permisos {
	EscribirMensajes = random(), 
	Reaccionar = EscribirMensajes * 2, 
	EnviarEnlaces = Reaccionar * 2, 
	ConectarACanalesDeVoz = EnviarEnlaces * 2,
}

```

Hasta cierto punto es válido. 

Si random devuelve un valor random de verdad no tendría lógica. 


## Genéricos

Es una manera de poner parámetros en definiciones de tipos. 

Parecido a declarar parámetros en una función. 

```
function multiplicar (uno: number, dos: number) {
	return uno * dos; 
}

```

Con los parámetros influenciamos lo que hace la función cuando desde afuera se les introducen argumentos. 

El resultado de la función depende del valor de los argumentos. 

```
multiplicar(5, 5); 
multiplicar(1, 2); 

```

Si la función es más compleja y acepta objetos y operaciones complejas como parámetros, como puede ser que dependiendo del valor de un parámetro, hacemos una llamada de red a otro sistema de datos. 


Con los genéricos influenciamos desde fuera el resultado según valores. 

Utilizaremos definiciones de tipos. 


Definimos un tipo y dejamos un espacio para variables como parámetros/argumentos, de manera que más tarde podamos influenciar nuestra definición de tipo a partir de esta instrucción realizada después de la definición primaria. 

Ej: si tenemos una interfaz que tiene propiedades de algún tipo.

```
interface x {
	type: string, 
	message: string, 
}

```

Por algún motivo podemos recibir como valor de message un booleano. 

Una API que responde con los siguientes valores de estas propiedades: 

```
{
	type: 'success', 
	response: {
		object: 5
	}
}

```

Y a veces responde un booleano: 

```
{
	type: 'error',
	response: true //false, null
}

```

Si quisiesemos tipar esta API las tendríamos que hacer varias veces con diferentes tipos. 

Como interface success sus tipos y props; e interface error de sus tipos y props. 


Podríamos reutilizar la interfaz definida si desde afuera le avisamos o le definimos que puede recibir valores de distintos tipos. 

Desde fuera recibirá el tipo, para no definirlo orinalmente. 

Utilizaremos los simboles <> después del nombre de nuestra interfaz. 

Entre los simbolos vamos a poner una variable/parámetro para que pueda recibir un argumento.  

Muchos lenguajes tipados lo definen como <T> (type) pero no es del todo expresivo. 

Después en las propiedades (que pueden recibir varios tipos) vamos a decir que son de tipo T o de la variable que hayamos creado. 

```
interface Respuesta <T> {
	type: string, 
	success: boolean, 
	message: T, 
}
 
```

Cuando apliquemos la interfaz tenemos que decir Respuesta es una respuesta y el valor de la T. 

De manera que desde afuera influenciamos que es la Respuesta. 

Una respuesta puede ser de Strings, booleans, object

No podemos tener algo de tipo Respuesta como lo haríamos normalmente: 

```
let payload: Respuesta = { //error: nos falta el tipo de T. 
	type: 'post', 
	success: true, 
}

```

No podríamos decir el valor de message de tipo T. 


### Debemos decir el tipo de generíco en la llamada y en la propiedad. 

```
let payload: Respuesta <string> = { 
	type: 'post', 
	success: true,  //nos falta message que tendrá que ser de tipo strring. 
}

```

Ahora nos falta pasar message. 

```
let payload: Respuesta <string> = { 
	type: 'post', 
	success: true, 
	message: 'hola'
}

```


### Aplicar otro interfaz de distinto tipo genérico

```
let payload2: Respuesta <boolean> = { 
	type: 'error', 
	success: false, 
	message: true
}

```


### Genéricos en la definición de interfaces, clases, type aliases, funciones.


## Genéricos y buenas prácticas

Podemos declarar más de un genérico a la vez en un type, función, clase o interface. 

Como los argumentos de la función, los separamos por comas y con diferentes nombres en la definición. 

Estaremos obligado al usar o aplicar los genéricos a definir un tipo y pasarle un valor correspondiente con ese tipo a todas las propiedades genéricas. 

### El orden de declaración de los tipos genericos importa a la hora de aplicarlos, tenemos que recordar o buscar la definición.

Por eso es ponemos T, U; en el abecedario, t después u. 

```
interface Respuesta <T, U> {
	type: string, 
	success: boolean, 
	message: T,
	whatever?: U 
}

let payload: Respuesta <string, number> = { 
	type: 'post', 
	success: true, 
	message: 'hola',
	whatever: 
}	

let payload2: Respuesta <boolean, object> = { 
	type: 'error', 
	success: false, 
	message: true,
	
}

```
 
### En TS se puede nombrar a los genéricos. 

Como declaramos Mensaje y Extra como tipos. 

Es más expresivo al aplicar <string> y <number> u <object>. 

```
interface Respuesta <Mensaje, Extra> {
	type: string, 
	success: boolean, 
	message: Mensaje,
	whatever?: Extra
}

let payload: Respuesta <string, number> = { 
	type: 'post', 
	success: true, 
	message: 'hola',
	whatever: 
}	

let payload2: Respuesta <boolean, object> = { 
	type: 'error', 
	success: false, 
	message: true,
	
}

```

Los genéricos se utilizan en librerias como React o Redux, se declaran componentes como los de react a los que le tenemos que decir de que tipo es ese componente. 

En React las props se usan con genéricos. 

No es expresivo llamar a un objeto prop T. 

En Redux los sistemas de acciones no es conveniente llamarlos por letras. 

El diseño de las APIs deben ser comprensibles para el que las usa las entienda los nombres descriptivos. 


## Genéricos con funciones 

Podemos hacer que el parámetro que acepta una función cuando es llamada desde fuera, luego los declaremos posteriormente para hacerlo más genérico. 


Si tuvieramos que hacer una API, para una publicación; esta puede tener distintos tipos: 

```
type Nota = { type: 'note', mensaje: string }
type NotaColorida = Nota & { type: 'color', color: string }
type Foto = { type: 'photo', url: string }
type Videos = Foto & { type: 'video', 'duracion: number } 

// Tiene un endpoint 
//HTTP POST /upload

```
En upload le pasamos el tipo de publicación. 

```
type Nota = { type: 'note', mensaje: string }
type NotaColorida = Nota & { type: 'color', color: string }
type Foto = { type: 'photo', url: string }
type Videos = Foto & { type: 'video', 'duracion: number } 

// Tiene un endpoint 
//HTTP POST /upload

```

O en un sistema más inteligente/simple sabe a partir de lo que mandamos, ej, si tiene color es Nota & {color: string}, etc. 

Necesitamos una función que nos deje publicar un objeto a la API. 

Podemos tener distintos enfoques. 

Con un tipo nuevo: 

```
type Nota = { mensaje: string }
type NotaColorida = Nota & { color: string }
type Foto = { url: string }
type Videos = Foto & { duracion: number } 

type Publicacion = Nota | NotaColorida | Foto | Video

// Tiene un endpoint 
//HTTP POST /upload
function subir(p: Publicacion) {
	
}
 
```

Tenemos que verificar los tipos, si es nota o nota colorida, etc. 


Otra forma es si vamos a hacer un post, aceptamos un any: 

Pero si le pasamos un objeto equivocado, la API lo rechazará. 

```
function subir(p: any) {
	
}

```

Tenemos que restringir los tipos. 

Entonces, usamos un tipo publicación 

Esta función puede ser como una identidad. 

La propia función devuelve lo que ha subido. 

Al subir (p: Publicacion), devuelve :Publicacion

```
type Publicacion = Nota | NotaColorida | Foto | Video

//HTTP POST /upload
function subir(p: Publicacion): Publicacion {
	return undefined //error: TS no interpreta lo que vamos a devolver
}

```

Otra forma es parámetrizar la función subir()

De tipo Publicacion de manera que subimos Publicacion y devuelve Publicacion

```
function subir<Publicacion>(p: Publicacion): Publicacion {
	return p
}

```

A partir de ahora cuando le pasemos una variable de tipo p. 

Nos va a devolver un objeto del mismo tipo (Publicacion).


### Aplicar genericos a la funcion

Parámetrizamos la función 

Especificando el parámetro genérico

```
let x = subir <Nota>({ mensaje: 'hola mundo' }); 

```

Nos devuelve un objeto de tipo nota porque estaba en el genérico. 

Por inferencia de tipos, x será de tipo Nota. 


También podemos dejar a la inferencia de tipos: 

```
let x = subir ({ mensaje: 'hola mundo' })

```

O 

```
let post: Nota = { mensaje: 'hola mundo' }
let x = subir(post)

```

No decimos el genérico a subir(), dejamos que la inferencia entre a (post). 

Si le pasamos un parámetro de tipo Nota, será que Publicacion que es el genérico que representa el tipo de publicación será de tipo Nota. 

subir() se entiende que está subiendo una nota por lo que devuelve una nota. 


Con el resto de situaciones podemos tener multiples genéricos declarados todos juntos. 

Agregamos genérico Extra y su parámetro e? opcional 

```
type Nota = { mensaje: string }
type NotaColorida = Nota & { color: string }
type Foto = { url: string }
type Videos = Foto & { duracion: number } 

function subir<Publicacion, Extra, >(p: Publicacion, e?'): Publicacion {
	return p
}

let post: Nota = { mensaje: 'hola mundo' }
let x = subir(post)

```

Como queremos restringir los posibles valores 

Se presenta un problema y es que en el fondo, le podemos pasar cualquier cosa. 

```
let x = subir(5) //Devolverá un number, la API no lo aceptará

```


## Restricciones para genéricos 

Limitar los tipos que se pueden especificar en un genérico. 

Podemos restringir el valor que le podemos asignar al génerico Publicacion. 

Para que sean de tipos concreto o jerarquías concretas. 

```
function subir<Publicacion, Extra, >(p: Publicacion, e?'): Publicacion {
	return p
}

let post: Nota = { mensaje: 'hola mundo' }
let x = subir(5)

```

Si en vez de types, trabajamos con interface. 

Si la publicación tiene que ser de algunos de los tipos concretos: 

```
interface Nota {
	mensaje: string 		
}

interface NotaColorida extends Nota {
	color: string
}

interface Foto {
	url: string
}

interface Video extends Foto {
	duracion: number
}

``` 

Podemos relacionarlas entre si. 

Creando una interfaz común como post. 

Todas las demás tipos de publicaciones son de tipo post, con extends. 

```
interface Post {
	id: number
}

interface Nota extends post{
	mensaje: string 		
}

interface NotaColorida extends Nota {
	color: string
}

interface Foto extends Post{
	url: string
}

interface Video extends Foto {
	duracion: number
}

``` 

Lo siguiente es definir que la función subir() en su genérico Publicacion debe extender a Post 

```
function subir<
	Publicacion extends, 
	Extra, 

>(
	p: Publicacion, 
	e?: Extra
): Publicacion {
	return p
}

```

La primera linea de subir ordena que Publicación tiene una restricción debe extender a Post. 

Podemos pasar como p algo de un tipo cualquiera que lo especificamos cuando llamemos a la función. 

Pero ese tipo tiene que extender a Post. 

```
let x = subir(5); //error

```

Dado que Post tiene una propiedad.

```
let post: Nota = {id: 0, mensaje: 'hola mundo'}
let x = subir(post);

```

id, mensaje y post es virtual. 

```
let y = 5
y.toString

```

Si post tuviese un método como:

El tipo number sería válido

Dado que number es válido en Post. 

```
interface Post {
	toString: () => string, 
}

let x = subir(5) //válido

```

Respecto a las restricciones 

Como p va a ser de tipo Publicacion que a la vez es de tipo Post. 

```
interface Post {
	id: number
}

function subir<
	Publicacion extends, 
	Extra, 

>(
	p: Publicacion, 
	e?: Extra
): Publicacion {
	return p
}

```

Publicación se va a comportar como si fuera de tipo Post. 

En Publicacion vamos a poder acceder a los campos en común que son los campos que tienen la estructura superior. 

```
): Publicacion {
	p.
	return p
}

```

Sin Publicacion extends Post no podríamos acceder a p porque no sabría lo que la p. 

Significa que en muchas ocaciones si queremos utilizar la variable que estamos generalizando (p) de cualquier modo. 

Vamos a tener que especificar a qué extiende, podemos ver sus propiedades en común y podemos utilizarlos. 


Si especificamos algo como de tipo Nota, vamos a poder ver más campos.  


## Utility Types 

Genericos que proporcionados por TS para usar. 

Como forman parte del lenguaje no tenemos que importarlos. 

Los utility están implementados sobre los genéricos.


### Partial <Type> 

Es un tipo que sirve para crear subsets, interfaces parciales. 

Cuando le pasemos un tipo nos va a devolver una version minimalista de ese tipo en la cual todos los campos son opcionales (llevan ?)

Puede silenciar al compildor. 


Tenemos parámetros todo y fieldsToUpdate

```
interface Todo {
	title: string; 
	description: string; 
}

function updateTodo (todo: Todo, fieldsToUpdate: Partial<Todo>) {
	return { ...todo, ...fieldsToUpdate }; 
}

const todo1 = {
	title: "organize desk", 
	description: "clear cluster", 
}; 

const todo2 = updateTodo(todo1, {
	description: "throw out trash", 
}); 

```

Si declaramos t de tipo Todo, omitiendo la descrición nos va a dar error: 

```
let t: Todo = {
	title: 'Hola' //error
}

```

Pero si lo declaramos de tipo Partial será válido

```
let t: Partial<Todo> = {
	title: 'Hola'
}

```


### Readonly<Type>

Crea una copia de solo lectura. 


### NonNullable<Type> 

Quita el null y el undefined de type. 

Forzamos a quién este trabajando con la función para que no pase null y undefined, debe pasarse algún valor.


## Exportar módulos, archivos y paquetes 

Importar y exportar módulos Ecmascript.


En un solo archivo como app.ts se podría crear al servidor, estructuras de datos, funciones con la lógica de negocio. 

El archivo se volvería muy grande, poco mantenible o extensible.


En general al hacer aplicaciones, ya sea pequeñas, medianas o grandes; el código se divide en varios archivos pequeños de código que luego se combinan. 

Las pequeñas piezas de código se llamarán módulos dónde tenemos un conjunto de funciones y tipos relacionados entre si que hacen una única cosa. 

Los módulos se combinarán para crear programas más grandesy hacerlos reusables para otra app, así no tendríamos que crear todo el código de nuevo. 


Hay un estándar llamado ESmodules (EcmaScript Modules) introducido en ES6 (2015) para JS.

En TS depende de la version JS a compilar, las cosas pueden cambiar. 


Ej, en un archivo llamado almacen.ts tenemos un tipo llamado producto: 

```
type Producto = {
	sku: string, //id.
	nombre: string, 
	precio: number, 
	urlFoto: string
}

```

Tenemos el tipo almacen para representarlo. 

Es un tipo será un tipo indizado. 

Dónde a partir de un sku da información como el stock actual, entrega, etc. 

```
type Almacen = {
	[sku: string]: {
		stock: number, 
		ultimaEntrega: Date, 
	}
}

```

También podríamos tener funciones de apoyo para la suma total de todos los precios de la lista de productos. 

Con un bucle for recorremos cada producto, suma los precios y devuelve el precio total de todos los productos proporcionados por parámetro. 

```
function sumarTotal(productos: Producto[]) {
	let precio = 0; 
	for (let producto of productos) {
		precio += producto.precio
	}
	return precio
}

```

Creamos otro archivo .ts para gestionar las facturas. 

Para esto se necesita saber la lista de productos comprados por el cliente. 

El pedido es una lista de productos (array)

```
function procesarPedido(p: Producto[])
	console.log("procesando..."); 
	
```

Si intentamos ejecutar objetos definidos en otros archivos, el compilador o interprete dará un error. 

Tenemos que decirle dónde están esos objetos ajenos al archivo presente. 

Podemos copiar y pegar el objeto que sería ineficiente, por mantenimiento, extensibilidad, etc. 

Si modificamos el objeto en el otro archivo, queda desactualizado, tendríamos que modificarlo en todas partes; además de que estaríamos duplicando código. 


### Marcar código reusable como exportable

Debemos anteponer la palabra reservada export antes de su definición

```
export type Producto = {
	sku: string, //id.
	nombre: string, 
	precio: number, 
	urlFoto: string
}

```

El código no exportable es de uso local, solo en el propio archivo. 

El código no exportable se puede usar para las funciones de apoyo que no tienen porque ser públicas. 

Se puede dar el caso que estemos usando una función no exportable. 

Pero la estructura dónde se la usa sea exportable. 

```
function computarStock(a: Almacen) {
	
}

export function sumarTotal(productos: Producto[]) {
	computarStock({}); 
	let precio = 0; 
	for (let producto of productos) {
		precio += producto.precio
	}
	return precio
}

```


## Importar módulos 

Con import completamos el módulo cuando usamos objetos definidos en otras partes. 

El objeto debe tener su contraparte export. 

import tiene varias partes {} dentro va el objeto a exportar. 

from "./" para indicarle la ruta dónde está ubicado el objeto. 

```
import { Producto } from "./almacen"

function procesarPedido(p: Producto[])
	p[0]. //acceso a sus propiedades. 
	console.log("procesando..."); 
}

```

Cuando modifiquemos el objeto importado no hará falta actualizarlo en ninguna parte. 

Con la sintaxis de {} solo importamos lo que nos interesa de una biblioteca o módulo, no todo el módulo completo que aumentaría el tamaño de la app. 

Copia y pega los objetos que necesitamos. 


## Export default e import *

Son casos particulares. 

Cuando queremos importar un único elemento. 

Una práctica común puede ser declarar una clase o tipo por archivo. 

De tal manera creamos archivos para cada clase o tipo. 

Ej, producto.ts se exportará el tipo producto. 

```
export type Producto = {
	sku: string, 
	nombre: string, 
	descripcion: string, 
	precio: number, 
	urlFoto: string, 
}

```

Otro archivo para el tipo almacen, lo mismo podría ser para una calculadora de impuestos. 

Para usarlos deberíamos hacer: 

```
import { Producto } from './producto'
import { Almacen } from './almacen'
//...

```

Para este caso estamos exportando un solo objeto. 

Para este caso tenemos una palabra reservada, default.

No da un export único/principal. 

Si tenemos un archivo con un objeto export default: 

Este archivo solo va a importar IVA.

```
export default function IVA(precio: number) {
	return precio * 1.21; 
}
``` 

Cuando importemos impuestos.ts vamos a importar esta única función. 

Podemos importar un archivo completo. 

Si hacemos { objeto1, objeto2 } solo importamos piezas de un archivo. 


En un archivo facturas.ts importamos un solo objeto.

Tenemos que usar un indicador para el objeto/archivo a importar. 

```
import { Producto } from './producto'
import IVA from './impuestos'

console.log(`El IVA es ${IVA}(10.99)`); 

```

Así importamos la función IVA que es la que lleva el default. 


### Combinar export default con export 

Dentro del archivo impuestos.ts que tiene el objeto export default

Podemos seguir exportando más cosas. 

impuestos.ts

```
export default function IVA(precio: number) {
	return precio * 1.21; 
}

export type Precio = number; 

export type Impuesto = number;
 
```

factura.ts

Podemos agregar corchetes para exportar objetos con export solo.

```
import { Producto } from './producto'
import IVA, { Impuesto, Precio } from './impuestos'

console.log(`El IVA es ${IVA}(10.99)`); 

```


### * Importar todos los objetos export normal

Importa un objeto llamado impuestos que contiene todos los objetos exporbles. 

Se define con * as -nombre-
```
import * as impuestos from './impuestos'

impuestos.IVA

```
Esto no importa tipos para evitar problemas tipo impuestos.typeX


## tsconfig

Al dividir la app en varios directorios y archivos, debemos unirlos para crear una app. 

Para compilar llamamos a tsc: 

```
node_modules/.bin/tsc factura.ts/servidor.ts

```

Tendríamos que decirle que en la carpeta app o src que compile todo los archivos. 

Lo logramos mediante el archivo tsconfig.json


Es un archivo para influenciar a TS para tratar los archivos de cierta forma. 

Desde la configuración de compilación, la compatibilidad para versiones antiguas de EcmaScript, para usar modo stricto, permitir/prohibir tipos nullables, permitir jsx, etc. 


### Crear archivo tsconfig.son

```
node_modules/.bin/tsc --init 

```

Encontramos opciones como target: es5 para transpilar TS a JS (2015).

Para correr la app en un entorno Node.js que ejecuta esas caráctisticas. 

O usar es2018 más moderno si el entorno Node.js tiene soporte para esa version. 

O module: commonjs para que use amd o umd o esmodule en vez de require. 

O habilitar jsx para un proyecto react. 

O outdir: "./" que es un directorio para los archivos js compilados. 

Suele tener dist como nombre "outdir": "./dist". 


### Compilar todos los archivos ts

Con un tsconfig.json podemos llamar a tsc (sin argumentos) para que compile todos los archivos. 

Para ejecutar tsc sin errores tiene que estar en un directorio con tsconfig.json.

```
node_modules/.bin/tsc

```


### Instalar módulos NPM

Podemos utilizar el gestor paquetes npm para usar código que han echo otras personas. 

Si necesitamos un servidor web de node podemos usar express, así no tener que crear el socket tcp. 

```
import { } from 'is-what'

```

### Librerias utilies

Para trabajar con fechas: moment, date-fns 

```
let d = new Date()

```

Para hacer cálculos con estas fechas, convertirlas a horas, minutos, segundos, etc. 

Importamos las funciones necesarias. 

```
import { tokenToDate } from 'datetoken'

let date = tokenToDate("thu 24 jun")

```


## Arrobatypes y dts

### Fallos al importar funciones

Cuando importamos la funcion de datatoken, importamos un archivo que se importa de un archivo especial .d.ts

.d quiere decir archivo de definiciones. 

```
import isOdd from 'is-odd'

//error: could not find a declaration file for module 'is-odd' 

```

Cuando importamos módulos de NPM es importante que los módulos esten hechos en TS. 

O bien esten hechos en JS, tenga un archivo de equivalencia que es el d.ts que sirve para decirle a TS que las funciones son JS pero tiene definidos tipos en en archivo .ts.

Usan la palabra clave declare en el archivo .d.ts

Es bueno que los módulos de NPM tengan archivos d.ts. 


En el caso del módulo is-odd solo tiene el archivo .js. 

No podemos usarlo como a los anteriores que tiene d.ts para los tipos del archivo JS. 


TS no interpreta objetos no tipados. 

Para solucionar el problema tenemos dos sistemas. 

1. Experimental: 

En tsconfig.json tenemos que activar la opción "allowJs": "true", 

Intenta analizar (parse) o leer el código fuente JS para incluirlo en los archivos de compilación. 

Podemos intentar descargar el archivo d.ts de un repo definited types descargando un paquete que se tiene que llamar @types/nombre del paquete sin d.ts

En NPM

```
 @types/is-odd
 
```

```
npm install --save @types/is-odd

```

O más recomendado usar --save-dev

```
npm install --save-dev @types/is-odd

```

Descargará el d.ts de is-odd y el error desaparece. 


### Crear archivo d.ts para distribuir el código JS transpilado por TS 

En tsconfig.json activamos la opcion "declaration": "true"

Generará el archivo d.ts. 


## Proyecto completo

Ej: API Rest en Express.js, con un servidor HTTP que reciba la solicitud devuelva un .json usando TS. 

```
mk dir api
cd api

```

```
npm init 

```

En la opción entry point podríamos: 

```
(index.js) dist/index.js

```


Instalar TS:

Como TS es un transpilador/compilador, esto sería una dependencia de desarrollo y no código que se usa en producción.

```
npm i --save-dev typescript

```

### openfootball

La API estará basada en los resultados descargados de openfootball/football.json

Los .json son es.1.clubs.json del año correspondiente y el segundo es es.1.json uno contiene los partidos y el otro los resultdos. 

Los abrimos como raw y copiamos la url o enlace. 

Despues hacemos curl -O: 

```
curl -O https://raw.git...

```

La API soportará get http nombre equipos y que devuelva el resultado y la fecha. 

El segundo archivo tiene nombres en identificador: Bar -> Barcelona 

La url va a aceptar este identificador.


La api con los json tiene que traducir/tomar el nombre id de cada equipo a el nombre completo (segundo archivo).

Luego tiene que buscar en el primer archivo (solo tiene nombres completos) buscaremos la fecha que han jugado y sacar los resultados.


### Crear tsconfig.json para el proyecto 

```
node_modules/.bin/tsc --init

```

Activamos "rootDir": "./", y le damos como valor "./src"

Activamos "outDir": "./", y le damos como valor "./dist"

strict se mantine true al no usar eslint.


### script en package.json

```
"scripts": {
	"build": "tsc"
}

```

### Creamos directorio src

Creamos index.js

Importamos de la carpeta data, el clubs.json


### script start

"start": "node dist/index.js"


### instalar rimraf

rm de unix multiplataforma


### Instalar Express 

### Funcionamiento de express

Asociamos los verbos a una ruta. 

Cuando terminamos hacemos app.listen para poner la app en mode servidor/funcionamiento.

Escuchando solicitudes/peticiones/request que le lleguen del navegador, microservicios o clientes http desarrollados, etc. 


### Creando estructura archivos para servers

Se crea una función constructura para no repetir 'app.'.

Creamos un endpoint app. 


### Crear DB 

Debemos crear tipos para los .json.


### Inyectar resultados en el servidor 


### Manejar errores en la DB

Si algo sale mal al sacar los resultados de los equipos  

En un try (código/funcion) catch (envio de error 400)
