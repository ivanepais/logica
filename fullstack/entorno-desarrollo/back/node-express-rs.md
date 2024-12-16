# Express

App que consume datos:

HTTP requests

action is needed based on the URL pattern

POST data or GET data

read or write information from a database or task required

methods to specify what function is called for a particular

HTTP verb (GET, POST, PUT, etc.)

URL pattern ("Route")

and methods to specify what template ("view") engine is used


## Ejecutando Express localmente:

Primero cree un directorio llamado myapp, nos cambiamos a él y ejecute npm init.

Luego, instale express como una dependencia, según la guía de instalación.

En el directorio myapp, cree un archivo llamado app.js y copie el código del ejemplo anterior.


req (request/solicitud) y res (response/respuesta) son exactamente los mismos objetos que proporciona Node

Por lo que puede invocar req.pipe(), req.on('data', callback) y cualquier otra cosa que haría sin Express involucrado.

Ejectuar la app con node app.js. 

Luego, cargue http://localhost:3000/ en un navegador para ver el resultado.


```
const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

```

Las dos primeras líneas require() (import) el módulo express y crear una aplicación Express.

Este objeto, que tradicionalmente se denomina aplicación, tiene métodos para enrutar solicitudes HTTP, configurar middleware, representar vistas HTML, registrar un motor de plantillas y modificar la configuración de la aplicación que controla cómo se comporta la aplicación (por ejemplo, el modo de entorno, si las definiciones de ruta distinguen entre mayúsculas y minúsculas, etc.)


La parte central del código (las tres líneas que comienzan con app.get) muestra una definición de ruta.

El método app.get() especifica una función de devolución de llamada que se invocará cada vez que haya una solicitud HTTP GET con una ruta ('/') relativa a la raíz del sitio.

La función de devolución de llamada toma una solicitud y un objeto de respuesta como argumentos y llama a send() en la respuesta para devolver la cadena "¡Hola mundo!"


El bloque final inicia el servidor en un puerto específico ('3000') e imprime un comentario de registro en la consola.

Con el servidor en ejecución, puede ir a localhost:3000 en su navegador para ver la respuesta de ejemplo devuelta.


## Helloworld Express mediante Arrow Functions

```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

```


## IFFs, callbacks y Arrow funcions

Los parametros se ejecutan como objetos en el cuerpo de la funcion al momento qeu son escritas o llamadas. 

Un objeto tiene propiedades y métodos definidas con javascript. 

Ej: 

Un módulo es una biblioteca/archivo JavaScript que puede importar a otro código utilizando la función require() de Node.

Express en sí es un módulo, al igual que las bibliotecas de bases de datos y middleware que utilizamos en nuestras aplicaciones Express.


El siguiente código muestra cómo importamos un módulo por nombre, utilizando el marco Express como ejemplo.

Primero invocamos la función require(), especificamos el nombre del módulo como una cadena ('express') y llamamos al objeto devuelto para crear una aplicación Express.

Luego podemos acceder a las propiedades y funciones del objeto de la aplicación.

```
const express = require("express");
const app = express();

```

Podemos usar app.method()


## Rutas

Relativas:

Relativa al directorio actual (./) o (dir1/di2/.ar)

Relativa al directorio padre (../)

Sin prefijo (directamente el nombre del archivo o carpeta):


Absolutas:

Desde la raíz (/) (sistema)

https://example.com/about.html (web)


Web: 

Rutas Absolutas:

Cuando enlazas a recursos externos (imágenes, estilos, scripts, o páginas en otros dominios).

Cuando quieres asegurarte de que el enlace funcione sin importar desde dónde se acceda.


Rutas Relativas:

Para recursos internos (dentro del mismo dominio).

Al estructurar sitios web con carpetas y subcarpetas, para mantener la portabilidad entre diferentes entornos (desarrollo, pruebas, producción).

   
Relativa al directorio actual (./):

Se usa para referenciar un recurso en el mismo directorio que la página actual.

Ejemplo:
<img src="./imagen.jpg" alt="Imagen actual">


Relativa al directorio padre (../):

Se usa para referenciar un recurso en el directorio padre de la página actual.

Ejemplo:
<a href="../index.html">Inicio</a>


Sin prefijo (directamente el nombre del archivo o carpeta):

Apunta a un recurso dentro del mismo directorio que la página actual.

Ejemplo:
<link rel="stylesheet" href="estilos.css">


Sistema:

Absoluta:

Siempre comienza desde el directorio raíz, que es / en sistemas Unix/Linux o una letra de unidad como C:\ en Windows.

Es fija, es decir, no importa en qué directorio estés, la ruta te llevará siempre al mismo lugar.

/home/usuario/documentos/archivo.txt
/etc/passwd


Relativas:

Describe la ubicación de un archivo o directorio en relación con el directorio actual. 

No comienza desde la raíz, sino desde donde te encuentras en el sistema de archivos.

Dependen del directorio actual.

Son más cortas y flexibles para moverse dentro de un proyecto o estructura de carpetas específica.

Pueden usar ./ (directorio actual) o ../ (directorio padre) para moverse entre niveles.


Ejemplos:

Si estás en /home/usuario/ y quieres acceder a archivo.txt en documentos:

```
cd documentos

nano ./documentos/archivo.txt

```    
    
Subir al directorio padre y entrar a otra carpeta:

```
cd ../otro_directorio

```


Ej:

/proyecto
  ├── carpeta1
  │     └── archivo1.txt
  └── carpeta2
        └── archivo2.txt
        
      
Si estás en carpeta1:

Absoluta a archivo2.txt:

```
/proyecto/carpeta2/archivo2.txt

```

Relativa a archivo2.txt desde carpeta1:

```
../carpeta2/archivo2.txt

```


# Crear nuestros propios modulos

También puedes crear tus propios módulos que se pueden importar de la misma forma.


Nota: Querrá crear sus propios módulos, porque esto le permite organizar su código en partes manejables; una aplicación monolítica de un solo archivo es difícil de entender y mantener.

El uso de módulos también le ayuda a administrar su espacio de nombres, porque solo las variables que exporta explícitamente se importan cuando usa un módulo.


Para que los objetos estén disponibles fuera de un módulo, solo necesita exponerlos como propiedades adicionales en el objeto de exportación.

Por ejemplo, el siguiente módulo square.js es un archivo que exporta los métodos área() y perímetro():

```
exports.area = function (width) {
  return width * width;
};
exports.perimeter = function (width) {
  return 4 * width;
};

```


Podemos importar este módulo usando require() y luego llamar a los métodos exportados como se muestra

```
const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension
console.log(`The area of a square with a width of 4 is ${square.area(4)}`);

```

Nota: También puede especificar una ruta absoluta al módulo (o un nombre, como hicimos inicialmente).


Si desea exportar un objeto completo en una asignación en lugar de crearlo una propiedad a la vez, asígnelo a module.exports como se muestra a continuación (también puede hacer esto para convertir la raíz del objeto de exportación en un constructor u otra función) :

```
module.exports = {
  area(width) {
    return width * width;
  },

  perimeter(width) {
    return 4 * width;
  },
};

```

Nota: Puede considerar las exportaciones como un acceso directo a module.exports dentro de un módulo determinado.

De hecho, las exportaciones son solo una variable que se inicializa con el valor de module.exports antes de que se evalúe el módulo.

Ese valor es una referencia a un objeto (objeto vacío en este caso).

Esto significa que las exportaciones contienen una referencia al mismo objeto al que hace referencia module.exports. 

También significa que al asignar otro valor a las exportaciones, ya no está vinculado a module.exports.


Consulte Módulos (documentos API de Node).


## Síncronia vs asíncronia

Una API síncrona es aquella en la que cada operación debe completarse antes de que pueda comenzar la siguiente.

```
console.log("First");
console.log("Second");

```


Una API asincrónica es aquella en la que la API iniciará una operación y regresará inmediatamente (antes de que se complete la operación).

Una vez que finaliza la operación, la API utilizará algún mecanismo para realizar operaciones adicionales.

Por ejemplo, el siguiente código imprimirá "Segundo, Primero" porque aunque el método setTimeout() se llama primero y regresa inmediatamente, la operación no se completa durante varios segundos.

```
setTimeout(function () {
  console.log("First");
}, 3000);
console.log("Second");

```

La forma más común es registrar una función de devolución de llamada cuando invoca la API asincrónica, que se devolverá cuando se complete la operación.

(Devolverá un objeto/resultado solo cuando se complete, mientras puede seguir el flujo de ejecución).

Este es el enfoque utilizado anteriormente.


### Crear manejadores de rutas

En nuestro ejemplo de Hello World Express, definimos una función de controlador de ruta (devolución de llamada) para solicitudes HTTP GET a la raíz del sitio ('/').

```
app.get("/", function (req, res) {
  res.send("Hello World!");
});

```

Tiene un parametro 1 (ruta), parametro 2, una funcion con parametros/objetos que usaremos dentro. 


La función de devolución de llamada toma una request/req/solicitud y un objeto de response/respuesta/res como argumentos.



Nota: Puede utilizar cualquier nombre de argumento que desee en las funciones de devolución de llamada.

Tiene sentido nombrarlos de manera que puedas identificar el objeto con el que estás trabajando en el cuerpo de la devolución de llamada.


El objeto de aplicación Express también proporciona métodos para definir controladores de ruta para todos los demás verbos HTTP, que en su mayoría se usan exactamente de la misma manera:

o manejadores de rutas/route handlers, etc. 


## Node/Express paso a paso

para crear, HTTP requests, URL pattern POST/GET data, read or write information from a database or task required.

para usar HTTP verb (GET, POST, PUT, etc.), URL pattern ("Route"), metodos de template/("view").

Necesitamos de import/export, async, route handlers etc.


###



# Funciones

## Funciones integradas del navegador:

Cada vez que manipulamos una cadena de texto

```	
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string

```

Son funciones definidas en Browser API


## Metodos: 

Funciones de los objetos

Las funciones personalizadas están definidas en tu código. 

Tiene un nombre personalizado como: 

```
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}

```

Invocandola: 

```
draw();

```

```
function random(number) {
  return Math.floor(Math.random() * number);
}

//número entero aleatorio entre 0 y un número específico.
//No solo entre 0 y 1 como Math.random()

random(20);

```



## Parametros de la funciones

Opcionales: comportamiento por defecto. 

```
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

```

```
const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'

```

Si no especificamos el caracter separador. 

la coma se usa por default. 


## Crear función con parámetros predeterminados

```
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!

```


## Funcion anonima: sin nombre

```
function myFunction() {
  alert("hello");
}

```

```
(function () {
  alert("hello");
});

```


## Podemos definir funciones y pasarlas a otras

```
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);

```

O podemos asignar una función anonima

A otra función que espera una función. 

```
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});

```


## Funcion flecha

En lugar de escribir 'function'

Escribimos el parametro y una flecha. 

```
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});

```

Si solo toma un parametro podemos escribir

Sin parentesis su parametro

```
textBox.addEventListener("keydown", event => {
  console.log(`You pressed "${event.key}".`);
});

```

Es una declaración de retorno

Puede omitir las llaves y la palabra clave return y devolver implícitamente la expresión.

```
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]

//toma cada elemento de la matriz por turno
//lo pasa a la función indicada. 
//Luego toma el valor devuelto por esa función y lo agrega a una nueva matriz.

```

```
item => item * 2 

```
 
Equivale a la función flecha:

```
function doubleItem(item) {
  return item * 2;
}

``` 

Existen otras diferencias con las funciones normales y flechas. 

Como el caso de la palabra this. 

Ejemplos: Detección de teclas.

```
<input id="textBox" type="text" />
<div id="output"></div>

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});

```


## Scope, alcance de las funciones

//El nivel superior fuera de todas tus funciones se denomina ámbito global. 
//Los valores definidos en el ámbito global son accesibles desde cualquier parte del código
//Por seguridad, los scripts externos que llamas desde otro lugar podrían comenzar a alterar tu código y causar problemas porque están usando los mismos nombres de variable que otras partes del código, lo que causa conflictos. 
		
//Las dos funciones que desea llamar se denominan greeting(), pero solo puede acceder a la función greeting() del archivo first.js (la segunda se ignora). 	
//Además, se produce un error al intentar (en el archivo second.js) asignar un nuevo valor a la variable name, porque ya se declaró con const y, por lo tanto, no se puede reasignar

```
const x = 1;
	

function a() {
  const y = 2;
}

function b() {
  const z = 3;
}

```

```
function a() {
  const y = 2;
  output(y);
}

function b() {
  const z = 3;
  output(z);
}

```

```
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

```

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



## Valores de Retorno

Son los valores los valores que devuelve una función cuando se completa.

Esto permite que una función proporcione un resultado que pueda ser utilizado por otras partes del programa.


Sin retorno explícito:

Si no se usa return, las funciones devuelven un valor especial por defecto

En JavaScript, es undefined.



## Funciones hoisted

Se utiliza la palabra clave function. 

Estas funciones son hoisted, lo que significa que pueden ser llamadas antes de ser definidas en el código.

```
function suma(a, b) {
  return a + b;
}

```

Puede ser llamada antes de su definición en el código.

Se define en el ámbito global o de función.


## Funcion no hoisted: Expresión de función

La función se asigna a una variable. 

No es hoisted.

```
const resta = function (a, b) {
  return a - b;
};

```

No puede ser llamada antes de su declaración.

Útil para definir funciones de manera condicional.


## Arrow functions

Introducidas en ES6, tienen una sintaxis más concisa. 

No tienen su propio this ni arguments.

```
const multiplicar = (a, b) => a * b;

```

Si solo hay un retorno simple, no se necesita return ni llaves.

Si solo hay un parámetro, no se necesitan paréntesis:

```
const doble = x => x * 2;

```

No tienen un this propio; heredan el this del contexto de ejecución.


## Métodos abreviados (Short Method Syntax)

En objetos, se pueden definir métodos usando una sintaxis más concisa.

```
const objeto = {
  saludar() {
    console.log('Hola');
  }
};

```

Útil dentro de objetos o clases.

Sintaxis más corta que saludar: function() {}.


## Funciones generadoras (Generator Functions)

Se definen con function* y pueden pausar y reanudar su ejecución usando yield.

```
function* generador() {
  yield 1;
  yield 2;
  yield 3;
}

```

Útiles para trabajar con iteradores.

Permiten pausar y reanudar su ejecución


## Funciones asíncronas (Async Functions)

Se declaran con la palabra clave async y se utilizan con await para manejar promesas de forma más simple.

```
async function obtenerDatos() {
  const respuesta = await fetch('https://api.example.com/data');
  const datos = await respuesta.json();
  return datos;
}

```

Devuelven una promesa.

Hacen que el código asíncrono sea más legible.



## Funciones autoejecutadas (Immediately Invoked Function Expressions, IIFE)

Se definen y ejecutan inmediatamente.

```
(function () {
  console.log('Soy una función autoejecutada');
})();

```

Útil para crear un ámbito aislado.

No contaminan el ámbito global.



# Callbacks 

Es una función que se pasa como argumento a otra función y se invoca después de que la operación de esa función se ha completado

Los callbacks son una de las formas más comunes de manejar la asincronía en JavaScript.


Una función "A" recibe como parámetro una función "B". 

Cuando "A" termina su trabajo, llama a "B" para realizar una tarea adicional.

```
function saludar(nombre, callback) {
  console.log(`Hola, ${nombre}`);
  callback();
}

function despedirse() {
  console.log('Adiós!');
}

saludar('Juan', despedirse);

```

saludar es una función que toma un nombre y un callback.

Después de imprimir el saludo, llama al callback, que en este caso es despedirse.


El parámetro es descriptivo y después en la llamada pasamos el nombre del callback. 


## Uso de callbacks en operaciones asíncronas

Los callbacks son especialmente útiles en operaciones que no son instantáneas, como solicitudes de red o temporizadores.

Ejemplo con setTimeout:

```
function mostrarMensajeDespuesDe2Segundos(mensaje, callback) {
  setTimeout(() => {
    console.log(mensaje);
    callback();
  }, 2000);
}

mostrarMensajeDespuesDe2Segundos('Mensaje mostrado después de 2 segundos', () => {
  console.log('Callback ejecutado.');
});

```

En este caso tenemos una función principal que toma un callback para su llamada. 

Crearemos el callback en la llamada de la función principal. 


# Callback Hell

Cuando se anidan muchos callbacks, el código puede volverse difícil de leer y mantener, lo que se conoce como Callback Hell.

```
setTimeout(() => {
  console.log('Primero');
  setTimeout(() => {
    console.log('Segundo');
    setTimeout(() => {
      console.log('Tercero');
    }, 1000);
  }, 1000);
}, 1000);

```

Difícil de leer y depurar.

Mayor riesgo de errores.


Evitar el Callback Hell:

1. Promesas: 

Las promesas permiten manejar asincronía de una manera más estructurada.

```
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

esperar(1000)
  .then(() => {
    console.log('Primero');
    return esperar(1000);
  })
  .then(() => {
    console.log('Segundo');
    return esperar(1000);
  })
  .then(() => {
    console.log('Tercero');
  });

```


2. Async/Await: 

Introducido en ES2017, hace que el código asíncrono se lea como código sincrónico. 

```
async function ejecutarTareas() {
  await esperar(1000);
  console.log('Primero');
  await esperar(1000);
  console.log('Segundo');
  await esperar(1000);
  console.log('Tercero');
}

ejecutarTareas();

```

esperar es un callback que tiene una función con un parámetro (ms)

retorna una promesa (resolve) que tiene un callback con un parametro (resolve) y una función setTimeout()

o de otra forma, esperar es un callback que tiene un callback anidado. 


## Cuándo usar callbacks

Aunque las promesas y async/await son preferidas hoy en día, los callbacks todavía son útiles en:

Bibliotecas o APIs más antiguas que no soportan promesas.

Situaciones en las que no es necesario manejar errores complejos.


# Tipos de callbacks

Pueden ser implementados de diversas formas, dependiendo de cómo y dónde se usen


1. Sincrónicos:

Se ejecutan inmediatamente durante la ejecución de la función principal.

Se utilizan en operaciones sincrónicas.

```
function procesarSincrono(num, callback) {
  const resultado = num * 2;
  callback(resultado);
}

procesarSincrono(5, (resultado) => {
  console.log(`Resultado sincrónico: ${resultado}`);
});

```

Se ejecutan de inmediato, en el mismo ciclo de evento.


2. Asíncronos

Se utilizan en operaciones asíncronas, como solicitudes HTTP, temporizadores o lectura de archivos.

El callback se ejecuta una vez que la operación se completa.

```
function ejecutarDespues(ms, callback) {
  setTimeout(() => {
    callback();
  }, ms);
}

ejecutarDespues(2000, () => {
  console.log('Esto se ejecutó después de 2 segundos');
});

```

No se ejecutan inmediatamente; esperan a que se complete la operación.


3. Callbacks con datos de retorno


En muchos casos, los callbacks reciben datos como parámetros cuando son llamados, lo que permite procesar resultados.

```
function obtenerUsuario(callback) {
  setTimeout(() => {
    const usuario = { id: 1, nombre: 'Juan' };
    callback(usuario);
  }, 1000);
}

obtenerUsuario((usuario) => {
  console.log(`Usuario recibido: ${usuario.nombre}`);
});

```


4. Callbacks con múltiples parámetros

Puede recibir múltiples valores, no solo uno.

```
function operacionMatematica(a, b, callback) {
  const suma = a + b;
  const resta = a - b;
  callback(suma, resta);
}

operacionMatematica(10, 5, (resultadoSuma, resultadoResta) => {
  console.log(`Suma: ${resultadoSuma}, Resta: ${resultadoResta}`);
});

```


5. Callbacks para manejo de errores

En muchas APIs, especialmente en las versiones más antiguas de Node.js, los callbacks reciben el error como primer argumento. Si no hay error, el valor es null o undefined.

```
function leerArchivoSimulado(ruta, callback) {
  setTimeout(() => {
    if (ruta !== 'archivo.txt') {
      callback(new Error('Archivo no encontrado'), null);
    } else {
      callback(null, 'Contenido del archivo');
    }
  }, 1000);
}

leerArchivoSimulado('archivo.txt', (error, contenido) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    console.log(`Contenido: ${contenido}`);
  }
});

```

Patrón común: callback(error, resultado)
 

6. Callbacks anidados

Cuando se requiere ejecutar tareas secuenciales, a veces los callbacks se anidan.

```
setTimeout(() => {
  console.log('Primero');
  setTimeout(() => {
    console.log('Segundo');
    setTimeout(() => {
      console.log('Tercero');
    }, 1000);
  }, 1000);
}, 1000);

```


7. Callbacks con funciones anónimas o definidas

Puede ser una función anónima o una función previamente definida.


Función anónima como callback:

```
[1, 2, 3].forEach((numero) => {
  console.log(numero);
});

```

Función definida como callback:

```
function imprimirNumero(numero) {
  console.log(numero);
}

[1, 2, 3].forEach(imprimirNumero);

```


8. Callbacks con eventos

Se utilizan ampliamente con eventos en JavaScript

```
document.getElementById('boton').addEventListener('click', () => {
  console.log('Botón clickeado');
});

```

Sincrónicos: Se ejecutan de inmediato.

Asíncronos: Esperan a que una operación termine.

Manejo de errores: Primer parámetro como error.

Eventos y temporizadores: Uso común en interacción con usuarios y demoras



# Clases 

Son una manera de crear objetos y manejar herencia.

Aunque JavaScript no es un lenguaje puramente orientado a objetos, las clases proporcionan una sintaxis más clara y estructurada para trabajar con objetos y herencia basada en prototipos.


## Definición de clases

Las clases en JavaScript se introdujeron en ES6 como una forma de simplificar la creación de objetos y manejar la herencia

```
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Método de la clase
  saludar() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Crear una instancia de la clase
const persona1 = new Persona('Juan', 30);
persona1.saludar(); // Output: Hola, me llamo Juan y tengo 30 años.

```

Se usa la palabra clave class para definir una clase.

El método constructor se ejecuta automáticamente cuando se crea una nueva instancia de la clase.

Los métodos definidos dentro de una clase son compartidos entre todas las instancias.


### Constructor

El método constructor es especial y se ejecuta cuando se crea una instancia.

```
class Animal {
  constructor(tipo) {
    this.tipo = tipo;
  }
}

const perro = new Animal('perro');
console.log(perro.tipo); // Output: perro

```


### Métodos de instancia

Son funciones asociadas a las instancias de la clase.

```
class Vehiculo {
  constructor(marca) {
    this.marca = marca;
  }

  mostrarMarca() {
    console.log(`Este vehículo es de marca ${this.marca}`);
  }
}

const auto = new Vehiculo('Toyota');
auto.mostrarMarca(); // Output: Este vehículo es de marca Toyota

```


### Métodos estáticos

Los métodos estáticos pertenecen a la clase, no a sus instancias. Se definen con la palabra clave static.

```
class Matematica {
  static sumar(a, b) {
    return a + b;
  }
}

console.log(Matematica.sumar(5, 3)); // Output: 8

```

No puedes llamar un método estático desde una instancia.



## Getters y Setters

Permiten definir métodos que se comportan como propiedades

```
class Circulo {
  constructor(radio) {
    this.radio = radio;
  }

  // Getter
  get diametro() {
    return this.radio * 2;
  }

  // Setter
  set cambiarRadio(nuevoRadio) {
    this.radio = nuevoRadio;
  }
}

const c = new Circulo(5);
console.log(c.diametro); // Output: 10
c.cambiarRadio = 10;
console.log(c.diametro); // Output: 20

```


## Herencia 

Las clases en JavaScript soportan herencia utilizando la palabra clave extends.

```
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre}`);
  }
}

class Estudiante extends Persona {
  constructor(nombre, grado) {
    super(nombre); // Llama al constructor de la clase padre
    this.grado = grado;
  }

  mostrarGrado() {
    console.log(`Estoy en el grado ${this.grado}`);
  }
}

const estudiante = new Estudiante('Ana', 10);
estudiante.saludar(); // Output: Hola, me llamo Ana
estudiante.mostrarGrado(); // Output: Estoy en el grado 10

```

extends indica que una clase hereda de otra.

super se utiliza para llamar al constructor o métodos de la clase padre.


### Clases como "azúcar sintáctico"

Internamente, las clases en JavaScript son una capa de abstracción sobre el sistema de prototipos, que era el método principal para trabajar con objetos antes de ES6.


Clase equivalente con prototipos:

```
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
};

const persona1 = new Persona('Juan', 30);
persona1.saludar();

```


### Privacidad en clases (Campos privados)

A partir de ES2022, puedes definir campos privados usando el prefijo #.

```
class Banco {
  #saldo; // Campo privado

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  mostrarSaldo() {
    console.log(`Tu saldo es: ${this.#saldo}`);
  }

  depositar(cantidad) {
    this.#saldo += cantidad;
  }
}

const cuenta = new Banco(100);
cuenta.mostrarSaldo(); // Output: Tu saldo es: 100
cuenta.depositar(50);
cuenta.mostrarSaldo(); // Output: Tu saldo es: 150

// Error si intentas acceder directamente:
// console.log(cuenta.#saldo); // SyntaxError

```

class y constructor: Definen clases y su inicialización.

Métodos de instancia: Accesibles desde instancias.

Métodos estáticos: Pertenecen a la clase.

Getters y Setters: Proveen acceso controlado a propiedades.

Herencia (extends y super): Facilitan la reutilización de código.

Campos privados (#): Protegen datos sensibles.



# POO

Programación Orientada a Objetos (POO) en JavaScript es un paradigma de programación que se enfoca en organizar el código en torno a objetos

Estos objetos pueden contener propiedades (datos) y métodos (funciones que operan sobre los datos).

Aunque JavaScript no es un lenguaje puramente orientado a objetos, utiliza un sistema basado en prototipos para implementar POO.

Con la introducción de las clases en ES6, JavaScript ofrece una sintaxis más familiar para quienes vienen de lenguajes como Java o Python.


Conceptos clave de POO en JavaScript:

Clases y objetos

Encapsulamiento

Herencia

Polimorfismo

Abstracción


## Clases y objetos

En POO, las clases son plantillas para crear objetos. Un objeto es una instancia de una clase.

```
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre; // Propiedad
    this.edad = edad;     // Propiedad
  }

  // Método
  saludar() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Crear un objeto (instancia)
const persona1 = new Persona('Juan', 25);
persona1.saludar(); // Output: Hola, me llamo Juan y tengo 25 años.

```

Clase: Define propiedades y métodos.

Objeto: Instancia de la clase.



## Encapsulamiento

El encapsulamiento se refiere a ocultar detalles internos de un objeto y exponer solo lo necesario. 

En JavaScript, puedes lograrlo con propiedades públicas, privadas y métodos.


Propiedades públicas:

Son accesibles desde cualquier lugar.

```
class Animal {
  constructor(nombre) {
    this.nombre = nombre; // Propiedad pública
  }

  hacerSonido() {
    console.log(`${this.nombre} hace un sonido.`);
  }
}

const perro = new Animal('Perro');
perro.hacerSonido(); // Output: Perro hace un sonido.

```


Propiedades privadas (ES2022):

Se definen usando el prefijo #.

```
class Banco {
  #saldo; // Propiedad privada

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  mostrarSaldo() {
    console.log(`Saldo actual: ${this.#saldo}`);
  }
}

const cuenta = new Banco(1000);
cuenta.mostrarSaldo(); // Output: Saldo actual: 1000

// Error: cuenta.#saldo; // SyntaxError

```


## Herencia

Permite que una clase (hija) adquiera las propiedades y métodos de otra clase (padre).

```
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre}`);
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad, grado) {
    super(nombre, edad); // Llama al constructor de la clase padre
    this.grado = grado;
  }

  mostrarGrado() {
    console.log(`Estoy en el grado ${this.grado}`);
  }
}

const estudiante = new Estudiante('Ana', 20, '10°');
estudiante.saludar(); // Output: Hola, me llamo Ana
estudiante.mostrarGrado(); // Output: Estoy en el grado 10°

```


## Polimorfismo

El polimorfismo permite que métodos con el mismo nombre se comporten de manera diferente según el contexto.

Sobrescritura de métodos:

Una clase hija puede redefinir un método de la clase padre

```
class Animal {
  hacerSonido() {
    console.log('El animal hace un sonido.');
  }
}

class Perro extends Animal {
  hacerSonido() {
    console.log('El perro ladra.');
  }
}

const animal = new Animal();
const perro = new Perro();

animal.hacerSonido(); // Output: El animal hace un sonido.
perro.hacerSonido();  // Output: El perro ladra.

```


## Abstracción

Capacidad de definir estructuras y comportamientos sin especificar los detalles exactos. 

En JavaScript, puedes simular abstracción con clases base que definen métodos generales.


Ejemplo de clase abstracta simulada:

Aunque JavaScript no tiene soporte nativo para clases abstractas, puedes definir métodos que deben ser implementados por clases hijas:

```
class Figura {
  constructor(nombre) {
    this.nombre = nombre;
  }

  calcularArea() {
    throw new Error('El método calcularArea debe ser implementado');
  }
}

class Circulo extends Figura {
  constructor(radio) {
    super('Círculo');
    this.radio = radio;
  }

  calcularArea() {
    return Math.PI * this.radio * this.radio;
  }
}

const circulo = new Circulo(5);
console.log(circulo.calcularArea()); // Output: 78.53981633974483

```

Ventajas de POO:

Reutilización del código mediante herencia.


Modularidad: 

Puedes dividir el programa en objetos más pequeños y manejables.


Mantenimiento: 

El código es más fácil de mantener y escalar.


Flexibilidad: 

Los objetos pueden representar entidades del mundo real o estructuras complejas.


## RS POO

Clases y objetos: 

Estructuras fundamentales en POO.


Encapsulamiento: 

Controla la accesibilidad de datos y métodos.


Herencia: 

Permite reutilizar y extender código.


Polimorfismo: 

Métodos que se comportan de forma diferente según el contexto.


Abstracción: 

Facilita la definición de conceptos generales.


# this

En JavaScript es un concepto fundamental pero puede ser confuso al principio porque su valor depende del contexto en el que se utilice.


this es una referencia que apunta al objeto desde el cual se ejecuta una función.

Su valor cambia según el contexto donde se use.


## Usos de this 

Casos comunes donde se usa this


### En el contexto global (modo no estricto)

En un entorno global (fuera de cualquier función o clase), this hace referencia al objeto global.

En navegadores, el objeto global es window.
 
En Node.js, el objeto global es global.

```
console.log(this);  // En el navegador, Output: Window

```


### Dentro de un objeto (métodos)

Cuando this se utiliza dentro de un método de un objeto, se refiere al objeto que contiene el método.

```
const persona = {
    nombre: "Juan",
    saludar: function() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};

persona.saludar();  // Output: Hola, soy Juan

```


### this en una función normal

Modo no estricto: 

this se refiere al objeto global

```
function mostrarThis() {
    console.log(this);
}

mostrarThis();  // En el navegador, Output: Window

```


Modo estricto ('use strict'): 

this será undefined en funciones normales.

```
"use strict";

function mostrarThis() {
    console.log(this);
}

mostrarThis();  // Output: undefined

```


### En un constructor (función constructora o clase)

Cuando se usa this dentro de un constructor, se refiere a la nueva instancia del objeto creada.

```
function Persona(nombre) {
    this.nombre = nombre;
}

const persona1 = new Persona("Ana");
console.log(persona1.nombre);  // Output: Ana

```


O con clases

```
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

const persona2 = new Persona("Luis");
persona2.saludar();  // Output: Hola, soy Luis

```


### En funciones flecha

Las funciones flecha no tienen su propio valor de this.

En su lugar, heredan el valor de this del contexto en el que se definieron.

```
const objeto = {
    nombre: "María",
    saludar: function() {
        const arrowFunction = () => {
            console.log(`Hola, soy ${this.nombre}`);
        };
        arrowFunction();
    }
};

objeto.saludar();  // Output: Hola, soy María

```

En este caso, this dentro de la función flecha se refiere al this del método saludar, que es objeto.


### eventos del DOM

En un controlador de eventos, this hace referencia al elemento HTML que disparó el evento.

```
const boton = document.querySelector("button");

boton.addEventListener("click", function() {
    console.log(this);  // Output: <button>...</button>
});

```

Con funciones flecha, this heredará del contexto exterior, que podría no ser el elemento HTML:

```
boton.addEventListener("click", () => {
    console.log(this);  // En un navegador, Output: Window
});

```


### this en call, apply, y bind

Estos métodos permiten cambiar manualmente el valor de this.

call y apply

Ejecutan una función con un valor específico de this.

```
const persona = {
    nombre: "Carlos"
};

function saludar(saludo) {
    console.log(`${saludo}, soy ${this.nombre}`);
}

saludar.call(persona, "Hola");  // Output: Hola, soy Carlos
saludar.apply(persona, ["Hola"]);  // Output: Hola, soy Carlos

```


bind

Crea una nueva función con un valor de this predefinido.

```
const saludarCarlos = saludar.bind(persona);
saludarCarlos("Hola");  // Output: Hola, soy Carlos

```


### RS this 

Global: 

En el contexto global, this es el objeto global (window o global).


Objeto: 

En un método, this es el objeto que contiene el método.


Funciones normales: 

this es el objeto global en modo no estricto, undefined en modo estricto.


Constructores: 

this es la nueva instancia creada.


Funciones flecha: 

No tienen su propio this, heredan el del contexto donde se definieron.


Eventos: 

En un manejador de eventos, this es el elemento HTML que disparó el evento.


call, apply, bind: 

Permiten establecer manualmente el valor de this.



# RS Callbacks

callbacks tiene parametros y después una función

funcion que se activa después de la principal 

en el cuerpo se usan los obj/param con sus prop y metodos

obj.method()
obj.prop

```
<input id="textBox" type="text" />
<div id="output"></div>

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});


```
Las vemos con funciones flechas en una sola expresion:
solo un parametro, la flecha y la acción es un return.


Una función que se pasa como argumento a otra función y se invoca después de que la operación de esa función se ha completado

Los callbacks son una de las formas más comunes de manejar la asincronía en JavaScript.


Una función "A" recibe como parámetro una función "B". 

Cuando "A" termina su trabajo, llama a "B" para realizar una tarea adicional.

```
function saludar(nombre, callback) {
  console.log(`Hola, ${nombre}`);
  callback();
}

function despedirse() {
  console.log('Adiós!');
}

saludar('Juan', despedirse);

```

La función pasada al callback está definida en otro lado.

Es personalizada o es un método de un objeto importado de un biblioteca, etc. 


saludar es una función que toma un nombre y un callback.

Después de imprimir el saludo, llama al callback, que en este caso es despedirse.


El parámetro es descriptivo y después en la llamada pasamos el nombre del callback. 

Ej: 

```
function mostrarMensajeDespuesDe2Segundos(mensaje, callback) {
  setTimeout(() => {
    console.log(mensaje);
    callback();
  }, 2000);
}

mostrarMensajeDespuesDe2Segundos('Mensaje mostrado después de 2 segundos', () => {
  console.log('Callback ejecutado.');
});

```

En este caso tenemos una función principal que toma un callback para su llamada. 

Crearemos el callback en la llamada de la función principal. 


En la función principal definimos lo que hace está función con su parametro.

Después podemos la llamada a la función secundaria con el argumento de esta. 

En la llamada a la función principal, podemos definir lo que hace la función interior con el parametro de esta.

Ej:

```
function procesarSincrono(num, callback) {
  const resultado = num * 2;
  callback(resultado);
}

procesarSincrono(5, (resultado) => {
  console.log(`Resultado sincrónico: ${resultado}`);
});

```


# npm init 


## Configurar la aplicación como un paquete npm:

En primer lugar, cree un nuevo directorio para almacenar nuestra aplicación experimental, en algún lugar sensato que pueda encontrar nuevamente.

Lo llamaremos npm-experiment, pero puedes llamarlo como quieras

```
mkdir npm-experiment
cd npm-experiment

```

A continuación, inicialicemos nuestra aplicación como un paquete npm, lo que crea un archivo de configuración, paquete.json, que nos permite guardar los detalles de nuestra configuración en caso de que queramos recrear este entorno más adelante, o incluso publicar el paquete en el registro npm ( aunque no es relevante para nuestro artículo, porque estamos desarrollando una aplicación, no una biblioteca reutilizable).

Escriba el siguiente comando, asegurándose de estar dentro del directorio npm-experiment:

```
npm init

```

Ahora se le harán algunas preguntas; npm luego creará un archivo package.json predeterminado basado en las respuestas.

Tenga en cuenta que ninguno de estos es relevante para nuestros propósitos porque solo se usan si publica su paquete en un registro y otros quieren instalarlo e importarlo.

name:
	
	un nombre para identificar la aplicación.
	
	Simplemente presione Retorno para el nombre por defecto.
	
version:
	
	el número de versión inicial de la aplicación. 
	
	Nuevamente, simplemente presione Retorno para aceptar el valor predeterminado 1.0.0.

description:
	
	una descripción rápida del propósito de la aplicación.
	
	Lo omitiremos aquí, pero también puedes ingresar lo que quieras. 
	
	Presione Retorno.

entry point:
	
	este será el archivo JavaScript que se ejecutará cuando otros importen su paquete.
	
	No nos sirve de nada, así que simplemente presione Retorno.

test command, git repository, and keywords:
	
	presione Retorno para dejar cada uno de estos en blanco por ahora.

author:
	
	El autor del proyecto.
	
	Escriba su propio nombre y presione Retorno.
	
license:
	
	la licencia para publicar el paquete.
	
	Presione Retorno para aceptar el valor predeterminado por ahora
	
	
Presione Retorno una vez más para aceptar esta configuración.


Vaya a su directorio npm-experiment y ahora debería encontrar que tiene un archivo package.json.

Ábrelo y debería verse así:

```
{
  "name": "npm-experiment",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
	"test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Your name",
  "license": "ISC"
}

```

Agregaremos dos líneas más a package.json:

"type": "module"
	
	lo que hace que Node interprete todos los archivos .js como ES modules en lugar de los antiguos módulos CommonJS. 
	
	En general, es un buen hábito adquirirlo.
	
"private": true

	lo que evita que publique accidentalmente su paquete en el registro npm.


Agregue estas líneas justo debajo del "name":

```
"name": "npm-experiment",
"type": "module",
"private": true,

```

Este es el archivo de configuración que define su paquete.


## Instalar Vite: 

Primero instalaremos Vite, la herramienta de creación de nuestro sitio web.

Es responsable de agrupar nuestros archivos HTML, CSS y JavaScript en un paquete optimizado para el navegador.

```
npm install --save-dev vite

```

Una vez que haya hecho todas las cosas, eche otro vistazo a su archivo package.json.
	
Verás que npm ha agregado un nuevo campo, devDependencies:

```
"devDependencies": {
  "vite": "^5.2.13"
}

```

Esto es parte de la magia de npm: si en el futuro mueve su código base a otra ubicación, en otra máquina, puede recrear la misma configuración ejecutando el comando npm install, y npm examinará las dependencias y las instalará por usted.


Una desventaja es que Vite solo está disponible dentro de nuestra aplicación npm-experiment; no podrá ejecutarlo en un directorio diferente.

Pero las ventajas superan a las desventajas.


Tenga en cuenta que elegimos instalar vite como una dependencia de desarrollo.

Esta diferencia rara vez importa para una aplicación, pero para una biblioteca, significa que cuando otros instalen su paquete, no instalarán Vite implícitamente.

Por lo general, para las aplicaciones, cualquier paquete importado en el código fuente es una dependencia real, mientras que cualquier paquete utilizado para el desarrollo (generalmente como herramientas de línea de comandos) es una dependencia de desarrollo.

Instale dependencias reales eliminando el indicador --save-dev.


También encontrará una serie de archivos nuevos creados:

node_modules:
	
	los archivos de dependencia necesarios para ejecutar Vite.
	
	npm los ha descargado todos por usted.

package-lock.json:
	
	este es un archivo de bloqueo que almacena la información exacta necesaria para reproducir el directorio node_modules.
	
	Esto garantiza que mientras el archivo de bloqueo no se modifique, el directorio node_modules será el mismo en diferentes máquinas.


No necesita preocuparse por estos archivos, ya que npm los administra.

Debes agregar node_modules a tu archivo .gitignore si estás usando Git, pero generalmente debes conservar package-lock.json, porque, como se mencionó, se usa para sincronizar el estado de node_modules en diferentes máquinas.


## Configurando la app: 

En Vite, el archivo index.html está al frente y al centro.

Define el punto de partida de su aplicación y Vite lo usará para encontrar otros archivos necesarios para crear su aplicación. 

Cree un archivo index.html en su directorio npm-experiment y proporciónele el siguiente contenido:

```
<!doctype html>
<html lang="en-US">
  <head>
	<meta charset="UTF-8" />
	<title>My test page</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
	<div id="root"></div>
	<script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

Tenga en cuenta que los elementos <script> crean una dependencia en un archivo llamado src/main.jsx, que declara el punto de entrada de la lógica JavaScript para la aplicación.

Cree la carpeta src y cree main.jsx en esta carpeta, pero déjelo en blanco por ahora.


El atributo type="module" es importante.

Le indica al navegador que trate el script como un módulo ES, lo que nos permite utilizar la sintaxis de importación y exportación en nuestro código JavaScript.

La extensión del archivo es .jsx, porque le agregaremos la sintaxis de React JSX.

Los navegadores no entienden JSX, pero Vite lo transformará a JavaScript normal para nosotros, ¡como si los navegadores sí lo hicieran!


Usando Vite: 

Ahora ejecutaremos nuestra herramienta Vite recién instalada.

En tu terminal, ejecuta el siguiente comando:

```
npx vite

```

Deberías ver algo como esto impreso en tu terminal:

```
VITE v5.2.13  ready in 326 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Ahora estamos listos para beneficiarnos del ecosistema completo de paquetes de JavaScript.

Para empezar, ahora hay un servidor web local ejecutándose en http://localhost:5173. 

No verás nada por ahora, pero lo bueno es que cuando hagas cambios en tu aplicación, Vite la reconstruirá y actualizará el servidor automáticamente para que puedas ver instantáneamente el efecto que tuvo tu actualización.

Puede detener el servidor de desarrollo en cualquier momento con Ctrl + C e iniciarlo nuevamente con el mismo comando.

Si decide seguir ejecutándolo, puede abrir una nueva ventana de terminal para ejecutar otros comandos.


# Express app generator

## Estructura de directorio

El proyecto generado, ahora que ha instalado las dependencias, tiene la siguiente estructura de archivos (los archivos son los elementos que no tienen el prefijo "/").

El archivo package.json define las dependencias de la aplicación y otra información.

También define un script de inicio que llamará al punto de entrada de la aplicación, el archivo JavaScript /bin/www.

Esto configura parte del manejo de errores de la aplicación y luego carga app.js para hacer el resto del trabajo.

Las rutas de la aplicación se almacenan en módulos separados en el directorio rutas/. 

```
express-locallibrary-tutorial
    app.js
    /bin
        www
    package.json
    package-lock.json
    /node_modules
        [about 6700 subdirectories and files]
    /public
        /images
        /javascripts
        /stylesheets
            style.css
    /routes
        index.js
        users.js
    /views
        error.pug
        index.pug
        layout.pug

```


## package.json 

Define las dependencias de la aplicación y otra información

```
{
  "name": "express-locallibrary-tutorial",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "morgan": "~1.9.1",
    "pug": "2.0.0-beta11"
  },
  "devDependencies": {
    "nodemon": "^3.1.3"
  }
}

```

La sección de scripts primero define un script de "inicio", que es lo que invocamos cuando llamamos a npm start para iniciar el servidor (este script fue agregado por Express Application Generator).

En la definición del script, puede ver que esto realmente inicia el archivo JavaScript ./bin/www con node.


Ya modificamos esta sección en Habilitar el reinicio del servidor al cambiar el archivo agregando los scripts devstart y serverstart.

Estos se pueden usar para iniciar el mismo archivo ./bin/www con nodemon en lugar de node (esta versión de los scripts es para Linux y macOS, como se mencionó anteriormente).

```
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  },

```

Las dependencias incluyen el paquete express y el paquete para nuestro motor de visualización seleccionado (pug).

Además, contamos con los siguientes paquetes que son útiles en muchas aplicaciones web:


analizador de cookies:

se utiliza para analizar el encabezado de la cookie y completar las cookies solicitadas (esencialmente proporciona un método conveniente para acceder a la información de las cookies).


debug:

una pequeña utilidad de depuración de nodos modelada a partir de la técnica de depuración del núcleo del nodo.


morgan:

Un middleware de registro de solicitudes HTTP para node.


http-errors:

cree errores HTTP cuando sea necesario (para manejo rápido de errores).


Las versiones predeterminadas del proyecto generado están un poco desactualizadas. 

Reemplace la sección de dependencias de su archivo package.json con el siguiente texto, que especifica las últimas versiones de estas bibliotecas al momento

```
  "dependencies": {
    "cookie-parser": "^1.4.6",
    "debug": "^4.3.5",
    "express": "^4.19.2",
    "http-errors": "~2.0.0",
    "morgan": "^1.10.0",
    "pug": "3.0.3"
  },

```

Luego actualice sus dependencias instaladas usando el comando:

```
npm install

```

Nota: 

Es una buena idea actualizar periódicamente a las últimas versiones compatibles de sus bibliotecas de dependencia; esto incluso puede hacerse de forma automática o semiautomática como parte de una configuración de integración continua.

Por lo general, las actualizaciones de la biblioteca a la versión menor y de parche siguen siendo compatibles.

Hemos antepuesto ^ a cada versión arriba para que podamos actualizar automáticamente a la última versión minor.patch ejecutando:

```
npm update --save

```

Las versiones principales cambian la compatibilidad.

Para esas actualizaciones necesitaremos actualizar manualmente el paquete.json y el código que usa la biblioteca, y volver a probar exhaustivamente el proyecto.


## Entry point: www file

El archivo /bin/www es el punto de entrada de la aplicación

Lo primero que hace esto es require() el punto de entrada "real" de la aplicación (app.js, en la raíz del proyecto) que configura y devuelve el objeto de aplicación express().

require() es la forma CommonJS de importar código JavaScript, JSON y otros archivos al archivo actual.

Aquí especificamos el módulo app.js usando una ruta relativa y omitimos la extensión de archivo opcional (.js).

```
#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require("../app");

```

Nota:

Node.js 14 y versiones posteriores admiten declaraciones de importación de ES6 para importar módulos JavaScript (ECMAScript).

Para usar esta función, debe agregar "type": "module" a su archivo Express package.json, todos los módulos en su aplicación deben usar import en lugar de require(), y para importaciones relativas debe incluir la extensión del archivo. . (para más información consulte la documentación de Node).

Si bien existen ventajas al utilizar la importación, este tutorial utiliza require() para coincidir con la documentación de Express.


El resto del código en este archivo configura un servidor HTTP de node con la aplicación configurada en un puerto específico (definido en una variable de entorno o 3000 si la variable no está definida) y comienza a escuchar e informar errores y conexiones del servidor.


## app.js

Este archivo crea un objeto de aplicación rápida (llamado aplicación, por convención), configura la aplicación con varias configuraciones y middleware y luego exporta la aplicación desde el módulo.

El siguiente código muestra solo las partes del archivo que crean y exportan el objeto de la aplicación:

```
const express = require("express");
const app = express();
// …
module.exports = app;

```

De vuelta en el archivo de punto de entrada www anterior, es este objeto module.exports el que se proporciona a la persona que llama cuando se importa este archivo.


Analicemos el archivo app.js en detalle.

Primero, importamos algunas bibliotecas de Node.js útiles al archivo usando require(), incluidos http-errors, express, morgan y cookie-parser que descargamos previamente para nuestra aplicación usando npm; y ruta, que es una biblioteca central de Nodo para analizar rutas de archivos y directorios.

```
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

```

módulos() de nuestro directorio de rutas. Estos módulos/archivos contienen código para manejar conjuntos particulares de "rutas" relacionadas (rutas URL).

Luego requerimos módulos() de nuestro directorio de rutas. Estos módulos/archivos contienen código para manejar conjuntos particulares de "rutas" relacionadas (rutas URL). Cuando ampliamos la aplicación esqueleto, por ejemplo para enumerar todos los libros de la biblioteca, agregaremos un nuevo archivo para tratar las rutas relacionadas con los libros.

```
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

```

Nota:

En este punto, acabamos de importar el módulo; En realidad, todavía no hemos utilizado sus rutas (esto sucede un poco más abajo en el archivo).


A continuación, creamos el objeto de la aplicación usando nuestro módulo express importado y luego lo usamos para configurar el motor de vista (plantilla). 

Hay dos partes para configurar el motor.

Primero, configuramos el valor "vistas" para especificar la carpeta donde se almacenarán las plantillas (en este caso la subcarpeta /vistas).

Luego configuramos el valor de "motor de vista" para especificar la biblioteca de plantillas (en este caso "pug").

```
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

```

El siguiente conjunto de funciones llama a app.use() para agregar las bibliotecas de middleware que importamos anteriormente a la cadena de manejo de solicitudes.

Por ejemplo, express.json() y express.urlencoded() son necesarios para completar req.body con los campos del formulario.

Después de estas bibliotecas, también usamos el middleware express.static, que hace que Express sirva todos los archivos estáticos en el directorio /public en la raíz del proyecto.

```
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

```

Ahora que todo el resto del middleware está configurado, agregamos nuestro código de manejo de rutas (previamente importado) a la cadena de manejo de solicitudes.

El código importado definirá rutas particulares para las diferentes partes del sitio:

```
app.use("/", indexRouter);
app.use("/users", usersRouter);

```


Nota:

Las rutas especificadas anteriormente ("/" y "/usuarios") se tratan como un prefijo de las rutas definidas en los archivos importados. 

Entonces, por ejemplo, si el módulo de usuarios importados define una ruta para /profile, accederá a esa ruta en /users/profile. 

Hablaremos más sobre rutas en un artículo posterior.


El último middleware del archivo agrega métodos de controlador para errores y respuestas HTTP 404.

```
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

```

El objeto de aplicación Express (aplicación) ahora está completamente configurado.

El último paso es agregarlo a las exportaciones del módulo (esto es lo que permite que se importe mediante /bin/www).

```
module.exports = app;

```


## Routes

El archivo de ruta /routes/users.js se muestra a continuación (los archivos de ruta comparten una estructura similar, por lo que no es necesario mostrar también index.js).

Primero, carga el módulo express y lo usa para obtener un objeto express.Router

Luego especifica una ruta en ese objeto y, por último, exporta el enrutador desde el módulo (esto es lo que permite importar el archivo a app.js).

```
const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;

```

La ruta define una devolución de llamada que se invocará cada vez que se detecte una solicitud HTTP GET con el patrón correcto.

El patrón coincidente es la ruta especificada cuando se importa el módulo ("/usuarios") más lo que esté definido en este archivo ("/").

En otras palabras, esta ruta se utilizará cuando se reciba una URL de /usuarios/.


Nota:

Pruebe esto ejecutando el servidor con nodo y visitando la URL en su navegador: http://localhost:3000/users/.

Deberías ver un mensaje: "responder con un recurso".


Una cosa de interés anterior es que la función de devolución de llamada tiene el tercer argumento a continuación y, por lo tanto, es una función de middleware en lugar de una simple devolución de llamada de ruta.

Si bien el código no utiliza actualmente el siguiente argumento, puede resultar útil en el futuro si desea agregar varios controladores de ruta a la ruta de ruta '/'.


### Views (templates)

Las vistas (plantillas) se almacenan en el directorio /views (como se especifica en app.js) y reciben la extensión de archivo .pug.

El método Response.render() se utiliza para representar una plantilla específica junto con los valores de las variables nombradas pasadas en un objeto y luego enviar el resultado como respuesta.

En el siguiente código de /routes/index.js puede ver cómo esa ruta genera una respuesta utilizando la plantilla "índice" pasando la variable de plantilla "título".

```
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

```

La plantilla correspondiente para la ruta anterior se proporciona a continuación (index.pug).

Hablaremos más sobre la sintaxis más adelante.

Todo lo que necesitas saber por ahora es que la variable de título (con valor 'Express') se inserta donde se especifica en la plantilla.

```
extends layout

block content
  h1= title
  p Welcome to #{title}

```


# RS App Express 

Estructura de express: 

app.js, bin (punto entrada), json, modulos, publicos (js, css, assets)

Carpeta rutas y views. 


app.js: 

Configura la app. 

Importa modulos/middlew/bibliotescas

Configura objetos para rutas, importando los archivos

Ahora usamos el objeto app con el método set para vistas y pug (motor renderizado)

Después el objeto app usa los middlew importardo

Después el objeto app llama a use para determinar el nombre de los objetos de ruta que llamaron a los archivos de ruta. 

Al final el objeto app manejará los errores: 

Tomará el error, lo manejará y lo renderizará. 

En la ultima linea exportamos la app. 


En los archivos de rutas:

Importamos express para crear objetos

Creamos el objeto ruta llamando a router

Usamos este objeto con los métodos get, post, etc. 

al final exportamos el objeto router. 


En los archivos templates: 

Acá usamos el objeto router para manejar los métodos get, post, etc. 

Usamos res.render() para renderizar los valores relacionados con pug (motor renderización)


En el archivo pug encontramos objetos html y la data/valores que queremos renderizar. 


# Base de datos

El personal de la biblioteca utilizará el sitio web de la biblioteca local para almacenar información sobre libros y prestatarios, mientras que los miembros de la biblioteca lo utilizarán para explorar y buscar libros, averiguar si hay copias disponibles y luego reservarlas o pedirlas prestadas.

Para almacenar y recuperar información de manera eficiente, la almacenaremos en una base de datos.


## Moongose y MongoDB



## Diseñar base de datos 


Antes de lanzarse y comenzar a codificar los modelos, vale la pena tomarse unos minutos para pensar qué datos necesitamos almacenar y las relaciones entre los diferentes objetos.

Sabemos que necesitamos almacenar información sobre libros (título, resumen, autor, género, ISBN) y que es posible que tengamos varias copias disponibles (con identificaciones únicas a nivel mundial, estados de disponibilidad, etc.). 

Es posible que necesitemos almacenar más información sobre el autor que solo su nombre, y puede que haya varios autores con nombres iguales o similares.

Queremos poder ordenar la información según el título del libro, el autor, el género y la categoría.


Al diseñar sus modelos, tiene sentido tener modelos separados para cada "objeto" (un grupo de información relacionada).

En este caso, algunos candidatos obvios para estos modelos son los libros, las instancias de libros y los autores.


También es posible que desee utilizar modelos para representar las opciones de la lista de selección (por ejemplo, como una lista desplegable de opciones), en lugar de codificar las opciones en el sitio web mismo; esto se recomienda cuando no se conocen todas las opciones desde el principio. o puede cambiar.

Un buen ejemplo es un género (por ejemplo, fantasía, ciencia ficción, etc.).


Una vez que hayamos decidido nuestros modelos y campos, debemos pensar en las relaciones entre ellos.


Teniendo esto en cuenta, el siguiente diagrama de asociación UML muestra los modelos que definiremos en este caso (como cuadros).

Como se analizó anteriormente, hemos creado modelos para el libro (los detalles genéricos del libro), la instancia del libro (el estado de copias físicas específicas del libro disponibles en el sistema) y el autor.



### Las API de bases de datos son asincrónicas

Los métodos de la base de datos para crear, buscar, actualizar o eliminar registros/records son asincrónicos

Lo que esto significa es que los métodos regresan inmediatamente y el código para manejar el éxito o el fracaso del método se ejecuta más adelante, cuando se completa la operación.

Se puede ejecutar otro código mientras el servidor espera que se complete la operación de la base de datos, de modo que el servidor pueda seguir respondiendo a otras solicitudes.


### Promises y async/await

JavaScript tiene varios mecanismos para admitir el comportamiento asincrónico.

JavaScript dependía en gran medida de pasar funciones de devolución de llamada a métodos asincrónicos para manejar los casos de éxito y error.

En JavaScript moderno, las devoluciones de llamada han sido reemplazadas en gran medida por Promesas.

Las promesas son objetos que son devueltos (inmediatamente) por un método asincrónico que representa su estado futuro.

Cuando se completa la operación, el objeto de promesa se "resuelve/settled" y resuelve un objeto que representa el resultado de la operación o un error.

Hay dos formas principales en las que puede utilizar las promesas para ejecutar código cuando se cumple una promesa:

1. Promises

```
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");

```

```
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

```

```
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

```


2. async/await

```
async function myFunction() {
  // This is an async function
}

```

```
async function fetchProducts() {
  try {
    // after this line, our function will wait for the `fetch()` call to be settled
    // the `fetch()` call will either return a Response or throw an error
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // after this line, our function will wait for the `response.json()` call to be settled
    // the `response.json()` call will either return the parsed JSON object or throw an error
    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

fetchProducts();

```


La forma en que funciona este enfoque es que se utiliza la palabra clave async function para marcar una función como asíncrona y luego, dentro de esa función, se aplica await a cualquier método que devuelva una promesa.

Cuando se ejecuta la función asincrónica, su operación se pausa en el primer método de espera hasta que se cumpla la promesa.

Desde la perspectiva del código circundante, la función asincrónica regresa y el código posterior puede ejecutarse.

Más tarde, cuando la promesa se cumple, el método de espera dentro de la función asincrónica regresa con el resultado o se genera un error si la promesa fue rechazada.

Luego, el código de la función asincrónica se ejecuta hasta que se encuentre otra espera, momento en el cual se pausará nuevamente, o hasta que se haya ejecutado todo el código de la función.


Puedes ver cómo funciona esto en el siguiente ejemplo.

myFunction() es una función asincrónica que se llama dentro de un bloque try...catch.

Cuando se ejecuta myFunction(), la ejecución del código se pausa en métodoThatReturnsPromise() hasta que se resuelve la promesa, momento en el cual el código continúa con aFunctionThatReturnsPromise() y espera nuevamente.

El código en el bloque catch se ejecuta si se produce un error en la función asincrónica, y esto sucederá si se rechaza la promesa devuelta por cualquiera de los métodos.

```
async function myFunction {
  // ...
  await someObject.methodThatReturnsPromise();
  // ...
  await aFunctionThatReturnsPromise();
  // ...
}

try {
  // ...
  myFunction();
  // ...
} catch (e) {
 // error handling code
}

```

Definición de la func y llamada posterior dentro de try/catch.


### Promise All


### Promise Any



## Modelos


### save()

### create()


# Manejo de Errores

Permite capturar, diagnosticar y resolver problemas que puedan surgir durante la ejecución de un programa, como excepciones o errores inesperados

JavaScript utiliza el bloque try...catch para manejar excepciones.

Este enfoque permite capturar errores y evitar que el programa se detenga abruptamente.


## Bloque try...catch

```
try {
    // Código que puede generar un error
} catch (error) {
    // Código para manejar el error
} finally {
    // (Opcional) Código que se ejecuta siempre, con o sin error
}

```

try:

Contiene el código que puede generar un error.

Si no ocurre ningún error, el bloque catch se omite.
    
(código, función, método, etc) 


catch:

Captura cualquier error que ocurra en el bloque try.

Recibe un objeto de error con información sobre lo que salió mal
    

Ejemplo:

```
try {
    let resultado = 10 / 0; // No genera error en JS, pero es un caso extraño
    console.log("Resultado:", resultado);
    throw new Error("Un error personalizado"); // Lanzar un error manualmente
} catch (error) {
    console.error("Se produjo un error:", error.message);
} finally {
    console.log("Este bloque siempre se ejecuta.");
}

```

Salida:

```
Resultado: Infinity
Se produjo un error: Un error personalizado
Este bloque siempre se ejecuta.

```


## throw

Puedes usar throw para generar errores personalizados. 

Los errores pueden ser de cualquier tipo de datos, aunque lo más común es usar instancias de Error.


Ej:

```
function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
    }
    return a / b;
}

try {
    console.log(dividir(10, 0));
} catch (error) {
    console.error("Error:", error.message); // Output: Error: No se puede dividir entre cero
}

```


## Clases de error

JavaScript incluye varias clases de error integradas:


Error:

Clase base para todos los errores en JavaScript.


SyntaxError:

Error de sintaxis en el código.


ReferenceError:

Ocurre cuando se accede a una variable inexistente.


TypeError:

Error relacionado con el tipo de datos.


RangeError:

Error cuando un valor está fuera de rango permitido.


EvalError:

Relacionado con el uso de eval() (raro).


URIError:

Ocurre con funciones URI mal usadas.


Ejemplo: ReferenceError

```
try {
    console.log(noDefinida); // Variable no definida
} catch (error) {
    console.error("Se produjo un error:", error.name); // Output: ReferenceError
}

```


## Errores especificos

Puedes manejar diferentes tipos de errores utilizando condiciones dentro del bloque catch.

```
try {
    let x = null;
    console.log(x.name); // Esto genera un TypeError
} catch (error) {
    if (error instanceof TypeError) {
        console.error("Error de tipo:", error.message);
    } else {
        console.error("Otro tipo de error:", error.message);
    }
}

```


## Propieades del objeto error

El objeto de error capturado en el bloque catch tiene varias propiedades útiles:

name:

El nombre del tipo de error (e.g., "TypeError").


message:

Mensaje descriptivo del error.


stack:

Detalles sobre dónde ocurrió el error (pila).

```
try {
    throw new Error("Este es un error personalizado");
} catch (error) {
    console.log("Nombre:", error.name);       // Output: Error
    console.log("Mensaje:", error.message);  // Output: Este es un error personalizado
    console.log("Pila:", error.stack);       // Output: Detalles de la pila de ejecución
}

```


## Manejo de errores asíncronos

En operaciones asíncronas, como promesas o async/await, los errores se manejan de manera ligeramente diferente.


Con promesas:

Usa .catch() para capturar errores en una cadena de promesas

```
new Promise((resolve, reject) => {
    reject("Error en la promesa");
})
    .then(result => console.log(result))
    .catch(error => console.error("Error capturado:", error));

```


Con async/await:

Usa un bloque try...catch para manejar errores en funciones asíncronas.

```
async function fetchData() {
    try {
        let response = await fetch("https://api.invalido.com/data");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error al obtener datos:", error.message);
    }
}

fetchData();

```


# Buenas prácticas para el manejo de errores

1. Usa mensajes descriptivos en throw: 

Facilita la depuración.


2. Evita capturar errores que no puedas manejar: 

Solo maneja lo necesario.


3. Utiliza finally para limpiar recursos: 

Ejemplo: cerrar conexiones a bases de datos.


4. Valida entradas de usuario: 

Reduce errores predecibles.


5. No abuses de try...catch: 

Resérvalo para casos excepcionales, no para lógica regular.


6. Logea errores: 

Usa herramientas como console.error o servicios externos para rastrear errores en producción


## Uso de try... catch en código suceptible a fallos

Usa try...catch en torno a código susceptible de fallar, como llamadas a API o acceso a datos externos

```
try {
    let data = JSON.parse('{"nombre": "Juan"}'); // JSON válido
    console.log(data.nombre);
} catch (error) {
    console.error("Error al analizar JSON:", error.message);
}

```


## Usa mensajes descriptivos al lanzar errores

Al lanzar errores con throw, proporciona mensajes claros y descriptivos que expliquen qué ocurrió y por qué.

```
function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero.");
    }
    return a / b;
}

try {
    dividir(10, 0);
} catch (error) {
    console.error(error.message); // Output: No se puede dividir entre cero.
}

```


## Valida entradas y prevé errores comunes

Realiza validaciones tempranas para evitar errores que puedan surgir más adelante. 

Esto se llama programación defensiva.

```
function obtenerElemento(array, indice) {
    if (!Array.isArray(array)) {
        throw new TypeError("El primer argumento debe ser un arreglo.");
    }
    if (indice < 0 || indice >= array.length) {
        throw new RangeError("Índice fuera de los límites del arreglo.");
    }
    return array[indice];
}

```


## Usa finally para limpiar recursos

El bloque finally es ideal para realizar tareas que deben ejecutarse sin importar si ocurrió un error o no, como cerrar conexiones, liberar memoria o archivos 

```
try {
    let recurso = abrirRecurso(); // Supongamos que esta función abre un archivo
    // Operaciones con el recurso
} catch (error) {
    console.error("Error durante la operación:", error.message);
} finally {
    cerrarRecurso(); // Asegúrate de liberar el recurso
}

```


## Distingue entre diferentes tipos de errores

Maneja errores específicos según su tipo usando instanceof. Esto te permite responder de manera apropiada a distintos tipos de problemas

```
try {
    let resultado = JSON.parse("{malformado}"); // JSON inválido
} catch (error) {
    if (error instanceof SyntaxError) {
        console.error("Error de sintaxis:", error.message);
    } else {
        console.error("Otro tipo de error:", error.message);
    }
}

```


## Maneja errores asíncronos correctamente

Para promesas, usa .catch() para capturar errores. 

Si usas async/await, combina try...catch con validaciones


promesas:

```
fetch("https://api.invalido.com")
    .then(response => response.json())
    .catch(error => console.error("Error al realizar la solicitud:", error.message));

```


async/await:

```
async function obtenerDatos() {
    try {
        let response = await fetch("https://api.invalido.com");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error al obtener datos:", error.message);
    }
}

obtenerDatos();

```


## Evita silenciar errores

Nunca uses un bloque catch vacío o que no haga nada con el error capturado.


mal:

```
try {
    let data = JSON.parse("{malformado}");
} catch (error) {
    // Error silenciado
}

```


Bien:

```
try {
    let data = JSON.parse("{malformado}");
} catch (error) {
    console.error("Error al analizar JSON:", error.message);
}

```


## Registra y rastrea errores

En aplicaciones complejas, utiliza herramientas para registrar y rastrear errores en producción, como:

Sentry

LogRocket

New Relic


Ayuda a diagnosticar problemas rápidamente.



## Proporciona retroalimentación al usuario

Cuando ocurre un error en la interfaz, informa al usuario de manera amigable en lugar de mostrar mensajes técnicos.

```
try {
    let data = await fetch("https://api.invalido.com");
} catch (error) {
    mostrarMensaje("Ocurrió un problema al cargar los datos. Intenta de nuevo más tarde.");
}

```


## Evita abusar de los errores como flujo de control

No uses errores para manejar la lógica regular de tu programa, ya que esto puede hacer que el código sea difícil de leer y mantener

mal:

```
try {
    if (!condicion) {
        throw new Error("Condición inválida");
    }
    // Código normal
} catch (error) {
    // Manejo normal
}

```


bien:

```
if (!condicion) {
    console.error("Condición inválida");
} else {
    // Código normal
}

```


## Usa clases personalizadas para errores

Crea tus propias clases de error para categorizar y manejar errores de manera más específica.

```
class ValidacionError extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ValidacionError";
    }
}

try {
    throw new ValidacionError("El campo nombre es obligatorio.");
} catch (error) {
    if (error instanceof ValidacionError) {
        console.error("Error de validación:", error.message);
    } else {
        console.error("Otro error:", error.message);
    }
}

```

Valida entradas antes de procesarlas.

Usa try...catch solo donde sea necesario.

Proporciona mensajes claros en los errores.

Distingue entre tipos de errores.

Maneja errores asíncronos adecuadamente.

Registra errores en producción para facilitar el diagnóstico.

No silencies errores ni los uses para el flujo de control
