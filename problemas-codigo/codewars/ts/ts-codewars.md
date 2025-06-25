# Install TS

Dependiendo de su uso: 

1. npm package: 

Nodejs requiere una versión npm. 

Es el paquete "typescript". 

Necesitará una copia de Node.js como entorno para ejecutar el paquete.

Luego, use un gestor de dependencias como npm, yarn o pnpm.

```
npm install typescript --save-dev

```

##### Todos los gestores de paquetes tiene lockfiles: Todos los desarrolladores podrán usar la misma versión. 

Compilador de TS: 

```
npx tsc

```


2. NuGet: 

MsBuild requiere un paquete NuGet. 


3. VS extension: 

Usado con MsBuild. 

Para los proyectos MsBuild como por ej, una app ASP.NET Core.

Con NuGet, instalar TS usando su administrador de paquetes a través de VS. 

right-clicking -> Nuget Package Manager Console (Tools > NuGet Package Manager > Package Manager Console).


Proyectos no NuGet: 

Usar extensión TypeScript (Extensiones > Administrar extensiones en Visual Studio).


## Instalación local: 

Instalación para cada proyecto. 

Ventaja de tener distintas versiones de TS en cada proyecto. 


## Otras herramientas que convierten archivos TypeScript a JavaScript:

Para agilizar el proceso o mantener la coherencia con tus herramientas de compilación.

##### Gestiona la conversión de archivos, pero no la verificación de tipos del compilador de TypeScript

Es probable que aún necesite mantener la dependencia de TypeScript mencionada anteriormente y que desee habilitar los módulos aislados (isolatedModules).


1. Babel: 

Transpilador de JavaScript, admite TS via plugin: @babel/plugin-transform-typescript.


2. swc: 

Transpilador rapido, escrito en Rust. 

Admite muchas de las características de Babel, incluido TypeScript.


3. Sucrase: 

Fork de Babel, enfocado en la velocidad de desarrollo. 

Compatible con TS de forma nativa. 


# Historia

## JS

JavaScript (también conocido como ECMAScript) comenzó como un lenguaje de scripting simple para navegadores

Se esperaba que se usara para fragmentos cortos de código incrustados en una página web; escribir más de unas pocas docenas de líneas de código habría sido bastante inusual

JS se popularizó y los desarrolladores web comenzaron a usarlo para crear experiencias interactivas.

Los desarrolladores de navegadores web respondieron a este aumento en el uso de JavaScript optimizando sus motores de ejecución (compilación dinámica) y ampliando sus posibilidades (añadiendo API), lo que a su vez impulsó su uso aún más


En los sitios web modernos, el navegador ejecuta con frecuencia aplicaciones que abarcan cientos de miles de líneas de código.

Este es el crecimiento gradual y prolongado de la web, que comenzó como una simple red de páginas estáticas y evolucionó hasta convertirse en una plataforma para aplicaciones avanzadas de todo tipo


JS se ha popularizado lo suficiente como para usarse fuera del contexto de los navegadores, como en la implementación de servidores JS con Node.js.

Su capacidad de ejecución en cualquier lugar lo convierte en una opción atractiva para el desarrollo multiplataforma.

Lo convierte en FullStack (JS en toda la pila de tecn).


Cada lenguaje tiene sus peculiaridades, rarezas y sorpresas, y el humilde comienzo de JavaScript le permite tener muchas de ellas.

1. Operador de igualdad no exacta (==):

Fuerza, coerciona sus operandos, lo que genera un comportamiento inesperado:

```
if ("" == 0) {
  // It is! But why??
}
if (1 < x < 3) {
  // True for *any* value of x!
}

```


2. Acceso a propiedades que no están presentes:

```
const obj = { width: 10, height: 15 };
// Why is this NaN? Spelling is hard!
const area = obj.width * obj.heigth;

```

##### La mayoría de los lenguajes de programación generarían un error al ocurrir este tipo de errores; algunos lo harían durante la compilación, antes de ejecutar el código. 

Al escribir programas pequeños, estas peculiaridades son molestas, pero manejables; al escribir aplicaciones con cientos o miles de líneas de código, estas constantes sorpresas suponen un grave problema.


## TS: verificador de tipos estáticos

##### Detectar errores en el código sin ejecutarlo se conoce como comprobación estática.

Determinar qué es un error y qué no, basándose en los tipos de valores con los que se opera, se conoce como comprobación estática de tipos.

TypeScript comprueba si hay errores en un programa antes de ejecutarlo, basándose en los tipos de valores, lo que lo convierte en un verificador de tipos estático.

El último ejemplo anterior presenta un error debido al tipo de obj. Este es el error que TypeScript encontró:

```
const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;

/*
err: 
Property 'heigth' does not exist on type '{ width: number; height: number; }'. Did you mean 'height'?
*/

```

## Superconjunto tipado de JavaScript

Relación entre TypeScript con JavaScript: 

1. Sintaxis: 

Al ser un superconjunto la sintaxis de JS es válida.

se refiere a cómo escribimos texto para formar un programa.

Este código tiene un error de sintaxis porque le falta un ):

```
let a = (4

// err:
')' expected.

```

##### TypeScript no considera ningún código JavaScript como un error debido a su sintaxis.

Significa que puedes tomar cualquier código JavaScript funcional y colocarlo en un archivo TypeScript sin preocuparte por cómo está escrito.


## Tipos

Ts es superconjunto tipado, lo que significa que añade reglas sobre cómo se pueden usar los diferentes tipos de valores.

El error anterior sobre obj.heigth no era un error de sintaxis, sino un error de uso incorrecto de algún tipo de valor (un tipo).

Este es un código JavaScript que puedes ejecutar en tu navegador y registrará un valor:

JS: 

```
console.log(4 / []);

```

Sintácticamente legal, registra Infinito. 

Sin embargo, TypeScript considera que dividir un número por un array es una operación sin sentido y generará un error:

Ts: 

```
console.log(4 / []);

// err:
The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.

```

El verificador de tipos de TypeScript está diseñado para permitir el paso de programas correctos, a la vez que detecta la mayor cantidad posible de errores comunes.

Se puede configurar el rigor con el que TypeScript verifica tu código.

##### Si transfiere código de un archivo JavaScript a un archivo TypeScript, podría encontrar errores de tipo según cómo esté escrito el código.

Estos pueden ser problemas legítimos con el código o una configuración demasiado conservadora de TypeScript.


## Comportamiento en tiempo de ejecución

TS preserva el comportamiento de JavaScript en tiempo de ejecución.

Por ejemplo, dividir entre cero en JavaScript produce un valor infinito en lugar de lanzar una excepción en tiempo de ejecución.

Por principio, TypeScript nunca modifica el comportamiento de JavaScript en tiempo de ejecución.

Esto significa que si mueves código de JavaScript a TypeScript, se garantiza que se ejecutará de la misma manera, incluso si TypeScript piensa que el código tiene errores de tipo.

Mantener el mismo comportamiento en tiempo de ejecución que JavaScript es una promesa fundamental de TypeScript porque significa que puede realizar fácilmente la transición entre los dos lenguajes sin preocuparse por diferencias sutiles que podrían hacer que su programa deje de funcionar


## Tipos erased (borrados)

##### Una vez que el compilador de TypeScript termina de revisar el código, borra los tipos para generar el código compilado.

Significa que, una vez compilado el código, el código JS simple resultante no contiene información de tipos.

Significa que TypeScript nunca modifica el comportamiento de tu programa en función de los tipos que infiere.

##### Aunque puedas ver errores de tipo durante la compilación, el sistema de tipos en sí no influye en el funcionamiento de tu programa al ejecutarse.

TypeScript no proporciona bibliotecas de ejecución adicionales. Tus programas usarán la misma biblioteca estándar (o bibliotecas externas) que los programas JavaScript, por lo que no es necesario aprender ningún framework específico de TypeScript.


## TS o JS

TypeScript comparte sintaxis y comportamiento en tiempo de ejecución con JavaScript, así que todo lo que aprendas sobre JavaScript te ayudará a aprender TypeScript al mismo tiempo.

Hay aproximadamente 20 veces más preguntas en StackOverflow etiquetadas con JavaScript que con TypeScript, pero todas las preguntas sobre JavaScript también aplican a TypeScript.

##### TypeScript es el entorno de ejecución de JavaScript con un verificador de tipos en tiempo de compilación.

La forma de ordenar una lista en TypeScript es la misma que en JavaScript.

Si encuentras un recurso que use TypeScript directamente, genial, pero no te limites a pensar que necesitas respuestas específicas de TypeScript para preguntas cotidianas sobre cómo realizar tareas en tiempo de ejecución.


## Claves 

### Scripting, Navegadores, motores de ejecución (compilación dinámica), APIs. 

### Rarezas de JS, Tipos, Ejecución TS y JS



# Intro TS

TS Ofrece todas las características de JavaScript y una capa adicional: su sistema de tipos.

JavaScript proporciona primitivas de lenguaje como cadenas y números, pero no verifica que se hayan asignado de forma consistente. TypeScript sí lo hace.

Puede detectar comportamientos inesperados en tu código, lo que reduce la probabilidad de errores.


## Sistema de tipos

### Tipos por inferencia

TypeScript conoce el lenguaje JavaScript y generará tipos automáticamente en muchos casos. Por ejemplo, al crear una variable y asignarle un valor específico, TypeScript usará el valor como su tipo.

```
let helloWorld = "Hello World";

// TS inference: let helloWorld: string

```

Al comprender el funcionamiento de JavaScript, TypeScript puede crear un sistema de tipos que acepta código JavaScript, pero que contiene tipos

##### Esto ofrece un sistema de tipos sin necesidad de añadir caracteres adicionales para que los tipos sean explícitos en el código.

Así es como TypeScript sabe que "helloWorld" es una cadena en el ejemplo anterior.


### Definición de tipos

En JavaScript se puede usar una amplia variedad de patrones de diseño.

Algunos dificultan la inferencia automática de tipos (por ejemplo, los patrones que utilizan programación dinámica).

##### Para cubrir estos casos, TypeScript admite una extensión del lenguaje JavaScript que permite indicar a TypeScript cuáles deben ser los tipos.

Ejemplo, para crear un objeto con un tipo inferido que incluye nombre: cadena e id: número, puede escribir:

```
const user = {
  name: "Hayes",
  id: 0,
};

```

##### Puede describir explícitamente la forma de este objeto mediante una declaración de interfaz:

```
interface User {
  name: string;
  id: number;
}

```

Luego puede declarar que un objeto JavaScript se ajusta a la forma de su nueva interfaz utilizando una sintaxis como: TypeName después de una declaración de variable

(new interface -> TypeName)

```
const user: User = {
  name: "Hayes",
  id: 0,
};

```

Si proporciona un objeto que no coincide con la interfaz que ha proporcionado, TypeScript le advertirá:

```
interface User {
  name: string;
  id: number;
}
 
const user: User = {
  username: "Hayes",  
// err:
Object literal may only specify known properties, and 'username' does not exist in type 'User'.
  id: 0,
};

```

##### Dado que JavaScript admite clases y programación orientada a objetos, TypeScript también lo hace. 

Puedes usar una declaración de interfaz con clases:

```
interface User {
  name: string;
  id: number;
}
 
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 
const user: User = new UserAccount("Murphy", 1);

```


##### Puede utilizar interfaces para anotar parámetros y devolver valores a funciones:

```
function deleteUser(user: User) {
  // ...
}
 
function getAdminUser(): User {
  //...
}

```

Ya existe un pequeño conjunto de tipos primitivos disponibles en JavaScript: boolean, bigint, null, number, string, symbol y undefined, que se pueden usar en una interfaz

TypeScript amplía esta lista con algunos más, como any (permite cualquier cosa), unknown (asegura que quien use este tipo declare cuál es), never (es imposible que este tipo ocurra) y void (una función que devuelve undefined o no tiene valor de retorno).


##### Verás que hay dos sintaxis para crear tipos: Interface y Type.

###### Debes usar "interface" como preferencia. 

###### Usa "type" cuando necesites características específicas


### Tipos de composición

Con TypeScript, puedes crear tipos complejos combinando tipos simples. 

Hay dos métodos populares para hacerlo: uniones y genéricos.

1. Unions:

Con una unión, se puede declarar que un tipo puede ser uno de varios. 

Por ejemplo, se puede describir un tipo booleano como verdadero o falso.

```
type MyBool = true | false;

```

Nota: Si pasa el cursor sobre MyBool (arriba), verá que se clasifica como booleano. 

Esta es una propiedad del Sistema de Tipos Estructurales.

Un caso de uso popular para los tipos de unión es describir el conjunto de literales de cadena o número que un valor puede tener:

```
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

```

Las uniones también permiten gestionar diferentes tipos.

Por ejemplo, podrías tener una función que acepte un array o una cadena:

```
function getLength(obj: string | string[]) {
  return obj.length;
}

```


Para conocer el tipo de una variable: x typeof:

```
string 	typeof s === "string"
number 	typeof n === "number"
boolean 	typeof b === "boolean"
undefined 	typeof undefined === "undefined"
function 	typeof f === "function"
array 	Array.isArray(a)

```

Ej, puedes hacer que una función retorne diferentes valores dependiendo de si le pasemos un string o un array:

```
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj]; //(parameter) obj: string
  }
  return obj;
}

```


### Genéricos 

Proporcionan variables a los tipos. 

Un ejemplo común es un array. 

##### Un array sin genéricos podría contener cualquier valor.

##### Un array con genéricos puede describir los valores que contiene.

```
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

```

Puede declarar sus propios tipos que utilicen genéricos:

```
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// Esta línea es un atajo para indicarle a TypeScript que hay una
// constante llamada `mochila`, y no preocuparse de donde viene.
declare const backpack: Backpack<string>;

// El objeto es una cadena, porque lo declaramos anteriormente como la parte variable de Backpack.
const object = backpack.get();

// Dado que la variable mochila es una cadena, no puedes pasar un número a la función add.
backpack.add(23);

// err: 
Argument of type 'number' is not assignable to parameter of type 'string'.

```


## Sistema de tipos estructurales

##### Uno de los principios fundamentales de TypeScript es que la comprobación de tipos se centra en la forma de los valores. 

Esto a veces se denomina "duck typing" o "tipado estructural".

En un sistema de tipos estructurales, si dos objetos tienen la misma forma, se consideran del mismo tipo.

```
interface Point {
  x: number;
  y: number;
}
 
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
 
// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

```

La variable point nunca se declara como de tipo Point. 

Sin embargo, TypeScript compara la forma de point con la de Point en la comprobación de tipos. 

Tienen la misma forma, por lo que el código pasa.

La coincidencia de forma solo requiere que coincida un subconjunto de los campos del objeto.

```
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"
 
const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"
 
const color = { hex: "#187ABF" };
logPoint(color);

//err: 
Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
  Type '{ hex: string; }' is missing the following properties from type 'Point': x, y

```

No hay diferencia entre cómo las clases y los objetos se ajustan a las formas:

```
class VirtualPoint {
  x: number;
  y: number;
 
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
 
const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"

```

Si el objeto o la clase tiene todas las propiedades requeridas, TypeScript dirá que coinciden, independientemente de los detalles de implementación.


## Claves

### Obj, interface, types, clases y genericos 



# Iniciar Proyecto

```
npm init -y

```

Bandera y: Valores por defecto. --yes a las opciones de configuración

Nombre del paquete
Versión
Descripción
Entrada del punto de entrada (archivo principal)
Palabras clave
Autor
Licencia


TypeScript como dependencia de desarrollo:

```
npm install typescript --save-dev

```

Instala el compilador tsc.


Inicializar archivo de configuración tsconfig.json:

```
npx tsc --init

```

Crea un archivo tsconfig.json donde podés ajustar opciones como el directorio de salida, compatibilidad con versiones de JS, paths, etc.


Estructura del proyecto:

Podés crear una carpeta src/ y colocar ahí tus archivos .ts:

```
/src
  └─ index.ts
/tsconfig.json

```


Compilar tsc

```
npx tsc

```

Generará los archivos .js en la carpeta configurada (por defecto, al lado de cada .ts o en dist/ si lo configurás).


tsconfig.json:

```
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src"]
}

```


Opción: ejecutar automáticamente al guardar

Podés agregar un script en package.json:

```
"scripts": {
  "build": "tsc",
  "watch": "tsc -w"
}

```

Después podemos agregar soporte para Node.js, React, Deno o Express.



# Nodejs, npm, npx y ts

Node.js: motor que ejecuta JavaScript fuera del navegador

Es un entorno de ejecución.

Permite correr archivos .js (y compilados .ts).

También provee el comando node para ejecutarlos

```
node app.js

```


npm: administrador de paquetes de Node.js

Instalado con Node.js, usado para instalar bibliotecas, como TypeScript:

```
npm install typescript --save-dev

```

Guarda dependencias en el archivo package.json.


npx: ejecutor rápido de paquetes

Viene con Node.js (desde npm v5.2).

Permite ejecutar paquetes sin instalarlos globalmente.

Ejemplo, ejecutar TypeScript sin instalarlo globalmente:

```
npx tsc --init

```

O para ejecutar un binario dentro de node_modules:

```
npx tsc

```


tsc (TypeScript Compiler): compilador de archivos .ts

No viene con Node.js.

Lo instalás con npm install typescript.

Usás tsc para compilar archivos .ts a .js:

```
npx tsc hello.ts

```

Rs: 

Node.js: ejecuta JS

npm: instala paquetes (ej: TypeScript)

npx: ejecuta paquetes (ej: tsc)

TypeScript: compila TS a JS (tsc)


Ej: 

```
npm install typescript --save-dev    # instala TS
npx tsc --init                       # crea tsconfig.json
npx tsc                             # compila el proyecto
node dist/index.js                  # ejecuta el JS compilado

```


# Inferencia vs anotación de tipos

Dependiendo del contexto, en general se recomienda un equilibrio inteligente entre inferencia y anotación

Usar inferencia cuando sea obvia y segura.

Anotar los tipos cuando ayuda a la claridad, seguridad o mantenimiento.


Inferencia: 

```
const age = 30; // TypeScript infiere: number

function sum(a: number, b: number) {
  return a + b; // TypeScript infiere que el resultado es number
}

```

Menos código.

Más legible.

Igual de seguro.


Anotación de tipos: 

Cuando la inferencia no es suficiente o clara

1. Funciones públicas o exportadas (API explícita):

```
function getUser(id: string): User {
  // ...
}

```

2. Variables que reciben valores dinámicos o condicionales:

```
let result: string | null = null;

```

3. Objetos complejos:

```
type Product = {
  name: string;
  price: number;
};

const book: Product = {
  name: "TS Handbook",
  price: 19.99
};

```

4. retorno de funciones si no es obvio:

```
function parseInput(input: string): string[] {
  return input.split(",");
}

```


Rs: 

| Contexto               | ¿Inferencia o anotación? |
| ---------------------- | ------------------------ |
| Constantes simples     | Inferencia             |
| Funciones internas     | Inferencia (parcial)   |
| Funciones públicas/API | Anotación explícita   |
| Objetos complejos      | Anotación explícita   |
| Tipos ambiguos         | Anotación explícita   |



# Objetos

Colección de pares clave/valor

En TypeScript podés tiparlo para definir qué propiedades debe tener, de qué tipo, y si son opcionales o no.

En Js: 

```
const user = {
  name: "Bob",
  age: 30
};

```


### En TS: definición, anotación de tipos y asignación de valores

```
const user: { name: string; age: number } = {
  name: "Bob",
  age: 30
};

```


## Tipado de "objetos" con type o interface (recomendado)

type:

Declaración con mayús

Al dar valores invocar al tipo. 

```
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Bob",
  age: 30
};

```


interface:

Como func, no tiene asignación; es un bloque de código

```
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Bob",
  age: 30
};

```

Ambos (type e interface) son equivalentes en muchos casos, pero interface es más flexible para herencia


## Propiedades opcionales

Podés hacer que una propiedad sea opcional con ?:

El compilador no da error cuando falte una propiedad/clave-valor.

```
type User = {
  name: string;
  age?: number;
};

const user: User = { name: "Bob" }; // válido

```


## Funciones que usan objetos

Define/espera un objeto como parám.

```
function greet(user: { name: string }) {
  console.log(`Hola, ${user.name}`);
}

```

### Función con tipo/type

```
type User = { name: string };
function greet(user: User) {
  console.log(`Hola, ${user.name}`);
}

```


## Objetos con propiedades dinámicas

### Si no sabés las claves exactas pero sí el tipo:

```
type ScoreMap = {
  [playerName: string]: number;
};

const scores: ScoreMap = {
  Alice: 10,
  Bob: 8
};

```


## Objetos anidados 

```
type Product = {
  name: string;
  price: number;
  dimensions: {
    width: number;
    height: number;
  };
};

const book: Product = {
  name: "Manual",
  price: 25,
  dimensions: {
    width: 15,
    height: 20
  }
};

```


## Prácticas

Usá type o interface para reutilizar estructuras.

Tipá las funciones que reciben objetos.

Evitá el uso de any (pierde toda la ventaja de TypeScript).

Usá propiedades opcionales (?) para mayor flexibilidad si es necesario


# Casos de uso de objetos 

Los objetos son uno de los pilares de la programación porque permiten organizar y modelar información compleja de forma estructurada.

Representa una entidad del mundo real o del dominio del programa. 

### Contiene estado (datos, propiedades) y comportamiento (métodos).


1. Modelar entidades del mundo real

Representar algo concreto con sus propiedades y comportamientos.

```
type Car = {
  brand: string;
  model: string;
  start(): void;
};

```

Usos: usuarios, autos, productos, libros, empleados, etc.


2. Agrupar datos relacionados

En lugar de tener múltiples variables sueltas, los objetos las agrupan con sentido lógico.

```
const coordinates = { x: 10, y: 20 };

```

Usos: puntos en un mapa, configuración, resultados agrupados, etc.


3. Pasar múltiples datos a funciones como un solo parámetro

Evita tener funciones con muchos argumentos sueltos

```
function createUser({ name, age }: { name: string; age: number }) {
  // ...
}

```

Facilita el orden, legibilidad y escalabilidad.


4. Representar configuraciones o parámetros

Objetos como inputs de configuraciones, muy común en librerías y frameworks 

```
const config = {
  debug: true,
  retries: 3,
  timeout: 5000
};

```

Usos: opciones de red, configuraciones de una app, estilos, etc.


5. Encapsular comportamiento (métodos)

Un objeto puede tener funciones internas que usan sus propios datos.

```
const counter = {
  value: 0,
  increment() {
    this.value++;
  }
};

```

### Ejemplo de encapsulación y responsabilidad.


6. Representar estructuras de datos más complejas

Como árboles, listas, nodos, etc.

```
type TreeNode = {
  value: number;
  left?: TreeNode;
  right?: TreeNode;
};

```

### Muy útil en algoritmos y estructuras de datos.


7. Herencia y reutilización de código (POO)

Crear jerarquías entre objetos (con interface, extends, implements).

```
interface Animal {
  name: string;
  move(): void;
}

interface Bird extends Animal {
  fly(): void;
}

```

### Permite reutilizar comportamientos, respetar principios como DRY.


8. Mapear respuestas de APIs o bases de datos

### Los datos que vienen en JSON suelen mapearse a objetos con tipos.

```
type User = {
  id: number;
  email: string;
  isActive: boolean;
};

```

### Hace más segura y estructurada la interacción con datos externos


9. Expresar patrones de diseño

Muchos patrones clásicos (como Singleton, Factory, Strategy, etc.) se basan en objetos.

```
const Logger = {
  log(message: string) {
    console.log(`[LOG]: ${message}`);
  }
};

```


Rs: 

| Propósito                 | Ejemplo                          |
| ------------------------- | -------------------------------- |
| Modelar entidades         | `User`, `Car`, `Product`         |
| Agrupar datos             | `config`, `position`, `settings` |
| Encapsular comportamiento | `counter.increment()`            |
| Mejorar la legibilidad    | `function draw(shape: Shape)`    |
| Facilitar la extensión    | `interface Animal → Dog, Cat...` |



# Types

Sirve para definir alias de tipos; es decir, crear nombres nuevos para describir formas de datos, uniones, tuplas, funciones y mucho más

A diferencia de interface, que está pensado sobre todo para tipar objetos y clases, type es más versátil y permite construir tipos complejos por combinación


1. Alias simples

Podés dar un nombre a un tipo primitivo o a un objeto:

```
type ID = string | number;

type Point = {
  x: number;
  y: number;
};

```

ID ahora es sinónimo de string | number.

Point es un objeto con x e y numéricos.


2. Uniones y literales

Una de las grandes potencias de type es definir uniones y tipos literales:

```
type Direction = "up" | "down" | "left" | "right";

function move(dir: Direction) {
  console.log(`Moviendo hacia ${dir}`);
}

move("up");    // OK
move("forward"); // Error: no es parte de Direction

```


3. Intersecciones (&)

Podés combinar tipos para formar uno que cumpla ambos:

```
type A = { foo: string };
type B = { bar: number };

type AandB = A & B;
// Equivalente a: { foo: string; bar: number }

```

Muy útil para mezclar propiedades de varios objetos.


4. Tuplas y arrays

```
type StringPair = [string, string];
type UserList = Array<{ id: ID; name: string }>;

```

Con alias queda más legible describir estructuras de datos compuestas.


5. 5. Tipar funciones

Podés describir la firma (parámetros y retorno) de funciones:

```
type Comparator<T> = (a: T, b: T) => number;

const numCmp: Comparator<number> = (a, b) => a - b;

```


6. Tipos condicionales y mapeados (avanzado)

TypeScript permite crear tipos basados en otros mediante condiciones y mapeos:

```
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type UserRO = ReadOnly<{ id: number; name: string }>;
// Equivale a { readonly id: number; readonly name: string; }

```


7. Diferencias clave con interface

| Característica             | `type`            | `interface`          |
| -------------------------- | ----------------- | -------------------- |
| Alias de uniones/literales | ✅                 | ❌                    |
| Tuplas                     | ✅                 | ❌                    |
| Intersecciones (`&`)       | ✅                 | ✅ (extends múltiple) |
| Declaración múltiple       | ❌ (produce error) | ✅ (merge automático) |
| Usos con genéricos         | ✅                 | ✅                    |


Aplicación de type: 

1. Si necesitás uniones de literales o tipos ("a" | "b", A | B).

2. Si querés crear alias para funciones, tuplas o estructuras complejas.

3. Si vas a usar tipos mapeados o condicionales avanzados.

4. Si no necesitás la fusión automática de declaraciones (merge) que ofrece interface.


Ej: 

```
type ApiResponse<T> = {
  status: number;
  payload: T;
  error?: string;
};

type User = { id: number; name: string };

async function fetchUser(): Promise<ApiResponse<User>> {
  const res = await fetch("/api/user");
  const data = await res.json();
  return {
    status: res.status,
    payload: data as User
  };
}

```

Con type hemos creado un molde genérico (ApiResponse) que podemos reutilizar con cualquier T.



# Casos de usos de type 

1. Alias de uniones de literales

Propósito: Restringir valores a un conjunto fijo de opciones.

Ventajas: Autocompletado, validación estática de valores permitidos.

```
type Direction = "up" | "down" | "left" | "right";
function move(dir: Direction) { /* … */ }

```


2. Intersección de tipos (&)

Propósito: Combinar múltiples tipos en uno solo que cumpla todos sus contratos.

Ventajas: Composición de propiedades, evita duplicación

```
type A = { foo: string };
type B = { bar: number };
type AB = A & B;  // { foo: string; bar: number }

```


3. Tuplas nombradas

Propósito: Dar nombre semántico a posiciones en una tupla.

Ventajas: Claridad al leer índices, autocompletado de posiciones

```
type Point3D = [x: number, y: number, z: number];
const p: Point3D = [0, 1, 2];

```


4. Alias de funciones (firmas)

Propósito: Definir un tipo reutilizable para la firma de funciones.

### Ventajas: DRY en la declaración de callbacks y librerías

```
type Comparator<T> = (a: T, b: T) => number;
const cmp: Comparator<string> = (a, b) => a.localeCompare(b);

```


5. Tipos genéricos reusable

Propósito: Crear moldes parametrizables para estructuras de datos.

Ventajas: Aplicable a múltiples tipos, mantiene coherencia.

```
type ApiResponse<T> = {
  status: number;
  data: T;
  error?: string;
};

```


6. Tipos mapeados

Propósito: Transformar propiedades de un tipo existente de forma programática.

Ventajas: Evita escribir manualmente versiones como Readonly, Partial, etc

```
type ReadOnly<T> = { readonly [K in keyof T]: T[K] };
type UserRO = ReadOnly<{ id: number; name: string }>;

```


7. Tipos condicionales

Propósito: Derivar un tipo nuevo según condiciones sobre otro tipo.

Ventajas: Lógica de tipos dinámica, validaciones complejas en tiempo de compilación.

```
type ElementType<T> = T extends Array<infer U> ? U : T;
type E1 = ElementType<string[]>;  // string
type E2 = ElementType<number>;    // number

```


8. Alias para colecciones complejas

Propósito: Nombrar estructuras de datos anidadas o con parámetros múltiple.

Ventajas: Legibilidad, capaz de documentar la forma de datos


```
type Matrix<T> = T[][];
type StringMatrix = Matrix<string>;

```


9. Tipos híbridos avanzados

Propósito: Crear formas de datos que combinen objetos, funciones y propiedades estáticas.

Ventajas: Tipado preciso de APIs que exponen callables con métodos

```
type Middleware = {
  (req: Request, res: Response): void;
  priority: number;
};

```


Rs: 

| Caso de uso          | Ejemplo de `type`                               |          |
| -------------------- | ----------------------------------------------- | -------- |
| Uniones literales    | \`type Dir = "up"                               | "down"\` |
| Intersecciones       | `type AB = A & B`                               |          |
| Tuplas nombradas     | `type P3 = [x: number, y: number, z: number]`   |          |
| Firmas de función    | `type Fn = (a: A)=>B`                           |          |
| Genéricos            | `type Resp<T> = { data: T }`                    |          |
| Mapeados             | `type RO<T> = { readonly [K in keyof T]: T[K]}` |          |
| Condicionales        | `type E<T> = T extends X?Y:Z`                   |          |
| Colecciones anidadas | `type Mat<T> = T[][]`                           |          |
| Tipos híbridos       | `type M = {():void; prio:number}`               |          |

Podés construir tipos muy expresivos y dinámicos, ideales para librerías, APIs genéricas y validaciones complejas en tiempo de compilación.



# Interface 

### Se usa para describir la forma de un objeto (su estructura), y se usa muchísimo para dar tipado fuerte, especialmente en código limpio, mantenible y orientado a objetos.

Define un contrato que dice qué propiedades y métodos debe tener un objeto.

### No genera código en tiempo de ejecución, es solo para verificación en tiempo de compilación.

```
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Bob",
  age: 30
};

```


Usos: 

1. Tipar objetos con estructuras reutilizables.

2. Describir parámetros y valores de retorno de funciones.

3. Organizar código complejo (POO, librerías, APIs, etc.).

4. Usar herencia de tipos (extends).

5. Contratos entre clases y funciones


Funcionalidades: 

1. Propiedades opcionales con ?

```
interface Product {
  name: string;
  price?: number;
}

``` 


2. Métodos

```
interface Logger {
  log(message: string): void;
}

```


3. Index signatures (claves dinámicas)

```
interface ScoreMap {
  [player: string]: number;
}

```


4. Extender interfaces

```
interface Animal {
  name: string;
}

interface Dog extends Animal {
  bark(): void;
}

```


5. Implementar interfaces en clases 

```
interface Shape {
  area(): number;
}

class Square implements Shape {
  constructor(public side: number) {}

  area(): number {
    return this.side * this.side;
  }
}

```


6. Combinar interfaces (declaración múltiple)

```
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const p: Person = {
  name: "Ana",
  age: 25
};

```

Esto no es posible con type.


Rs: 

| Característica                   | `interface`     | `type`                      |      |
| -------------------------------- | --------------- | --------------------------- | ---- |
| Extensible (extends)             | ✅ Sí            | ✅ También (`&`)             |      |
| Declaración múltiple             | ✅ Sí (merge)    | ❌ No                        |      |
| Unión de tipos (\`A              | B\`)            | ❌ No                        | ✅ Sí |
| Usos complejos (funciones, etc.) | 🤏 Más limitado | ✅ Más expresivo             |      |
| Recomendado para objetos/POO     | ✅ Sí            | ✅ También, pero menos claro |      |


## Aplicación de interface: 

1. Cuando estás definiendo la estructura de un objeto o clase.

2. Cuando vas a usar POO (Programación orientada a objetos).

3. Cuando querés aprovechar la declaración múltiple o extender interfaces.



# Casos de uso de interface 

1. Definir la “forma” de datos de dominio

Propósito: Modelar entidades clave de tu aplicación con un contrato claro.

Ventajas: Reutilización, documentación implícita, detección temprana de errores.

```
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

```

### Uso: Cualquier parte del código que manipule usuarios se apoya en esta interface para garantizar que siempre trabajamos con un objeto consistente.


2. Describir la API de funciones o callbacks

Propósito: Tipar funciones que se pasan como parámetros, especialmente callbacks.

Ventajas: Autocompletado y validación de parámetros/retornos

```
interface SortComparator<T> {
  (a: T, b: T): number;
}

function sortItems<T>(items: T[], cmp: SortComparator<T>) {
  return items.sort(cmp);
}

```

### Uso: Frameworks o librerías que aceptan funciones de usuario (event handlers, validaciones, ordenaciones…).


3. Contrato para clases (POO)

### Propósito: Forzar que una clase implemente un conjunto de métodos y propiedades.

### Ventajas: Polimorfismo, desacoplamiento e intercambio de implementaciones.

```
interface Repository<T> {
  findById(id: string): Promise<T | null>;
  save(entity: T): Promise<void>;
}

class UserRepo implements Repository<User> {
  findById(id: string) { /* … */ }
  save(u: User) { /* … */ }
}

```

### Uso: Abstracción de acceso a datos, servicios o cualquier capa que pueda tener múltiples implementaciones.


4. Index signatures y mapas dinámicos

Propósito: Tipar objetos cuyos nombres de propiedad no se conocen de antemano.

Ventajas: Flexibilidad sin perder chequeo de tipos

```
interface Settings {
  [featureName: string]: boolean;
}

const featureFlags: Settings = {
  darkMode: true,
  betaUI: false,
};

```

### Uso: Configuraciones, conteos o cualquier diccionario genérico.


5. Tipos híbridos (callable + propiedades)

Propósito: Describir valores que son a la vez funciones y objetos con propiedades.

Ventajas: Tipado preciso de patrones avanzados (p. ej. librerías que exportan funciones con métodos).

```
interface Middleware {
  (req: Request, res: Response): void;
  priority: number;
}

const auth: Middleware = (req, res) => { /*…*/ };
auth.priority = 1;

```

### Uso: Express.js, plugins de build tools, sistemas de hooks.


6. Extensión y mezcla de contratos

Propósito: Construir tipos complejos combinando varios contratos.

Ventajas: Mantenibilidad, evitar repetición, compatibilidad hacia atrás

```
interface Point { x: number; y: number; }
interface Colored { color: string; }

interface ColoredPoint extends Point, Colored {}

const cp: ColoredPoint = { x: 0, y: 0, color: "red" };

```

### Uso: En librerías gráficas, definiciones de estilos, jerarquías de dominio.


7. Augmentación de librerías (declaración múltiple)

Propósito: Añadir propiedades o sobrecargar tipos de módulos externos sin modificar su código fuente.

Ventajas: Extender tipos de terceros, integraciones más seguras 

```
// en un archivo .d.ts
declare module "express-serve-static-core" {
  interface Request {
    user?: User;
  }
}

```

Uso: Middleware que inyecta datos en el request de Express, augmentación de tipos de jQuery, etc.


8. Describir estructuras de datos genéricas

Propósito: Formular contratos para estructuras (árboles, grafos, listas enlazadas).

Ventajas: Claridad en algoritmos y estructuras personalizadas

```
interface TreeNode<T> {
  value: T;
  children?: TreeNode<T>[];
}

```

### Uso: Implementaciones de UI (árbol de componentes), procesamiento de datos jerárquicos, parsers.

Propósito: Estandarizar la forma de los mensajes en sistemas de colas o WebSockets.

Ventajas: Validación estática de payloads, autocompletado en handlers

```
interface Event<T> {
  type: string;
  payload: T;
}

type LoginEvent = Event<{ userId: string }>;

```

### Uso: Arquitecturas basadas en eventos, comunicación cliente‑servidor, microservicios.


Rs: 

1. Formalizar contratos entre módulos.

2. Extender y fusionar definiciones.

4. Describir patrones avanzados, desde callbacks hasta tipos híbridos.

5. Asegurar que tu código evoluciona de manera segura y mantenible



# Clases 

Son un mecanismo para crear objetos con estado (propiedades) y comportamiento (métodos), aprovechando los conceptos de la Programación Orientada a Objetos (POO).

TS añade tipos estáticos, lo que aporta seguridad en tiempo de compilación.

1. Sintaxis:

```
class Person {
  // Propiedades con tipo
  name: string;
  age: number;

  // Constructor para inicializar
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Método
  greet(): string {
    return `Hola, soy ${this.name} y tengo ${this.age} años.`;
  }
}

// Uso
const p = new Person("María", 28);
console.log(p.greet()); // Hola, soy María y tengo 28 años.

```


2. Modificadores de acceso

TS soporta public, private y protected para controlar visibilidad

```
class BankAccount {
  public owner: string;      // accesible desde fuera
  private balance: number;   // sólo dentro de la clase
  protected branch: string;  // dentro y en subclases

  constructor(owner: string, initial: number, branch: string) {
    this.owner = owner;
    this.balance = initial;
    this.branch = branch;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  private logBalance(): void {
    console.log(`Saldo: ${this.balance}`);
  }
}

const acct = new BankAccount("Juan", 1000, "Centro");
// acct.balance   // Error: 'balance' es private
acct.deposit(200); // OK

``` 


3. Propiedades y parámetros abreviados

TS permite declarar y asignar propiedades directo en el constructor

```
class Point {
  constructor(public x: number, public y: number) {}
}

const pt = new Point(5, 10);
console.log(pt.x, pt.y); // 5, 10

```


4. Herencia

Una clase puede extender otra, heredando propiedades y métodos

```
class Animal {
  constructor(public name: string) {}
  move(distance: number) {
    console.log(`${this.name} se movió ${distance}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("¡Guau!");
  }
}

const dog = new Dog("Rex");
dog.bark();           // ¡Guau!
dog.move(20);         // Rex se movió 20m.

```


5. Métodos y propiedades estáticos

Con static defines miembros accesibles sin instanciar

```
class MathUtil {
  static PI = 3.1416;
  static circleArea(r: number) {
    return MathUtil.PI * r * r;
  }
}

console.log(MathUtil.circleArea(5)); // ~78.54

``` 


6. Clases abstractas

Las clases marcadas abstract no pueden instanciarse y suelen usarse como plantillas

```
abstract class Shape {
  constructor(public name: string) {}
  abstract area(): number; // método sin implementación
  describe() {
    console.log(`Forma: ${this.name}`);
  }
}

class Rectangle extends Shape {
  constructor(width: number, height: number) {
    super("Rectángulo");
    this.width = width;
    this.height = height;
  }
  width: number;
  height: number;

  area(): number {
    return this.width * this.height;
  }
}

const rect = new Rectangle(4, 5);
rect.describe();            // Forma: Rectángulo
console.log(rect.area());   // 20

```


7. Implementar interfaces

Una clase puede garantizar que cumple un contrato con implements

```
interface Serializable {
  toJSON(): string;
}

class User implements Serializable {
  constructor(public id: number, public name: string) {}
  toJSON() {
    return JSON.stringify({ id: this.id, name: this.name });
  }
}

```


8. Clases genéricas

Así como funciones genéricas, las clases también pueden parametrizarse en tipos

```
class Box<T> {
  constructor(public value: T) {}
  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box<number>(123);
const strBox = new Box<string>("Hola");

```


Prácticas

1. Usá modificadores para encapsular datos (private/protected).

2. Preferí propiedades abreviadas en el constructor cuando sea sencillo.

3. Diseñá jerarquías solo si realmente necesitas herencia; usa composición cuando puedas.

4. Aprovechá interfaces y clases abstractas para definir contratos claros

5. Documentá tus clases y métodos con comentarios JSDoc si son parte de una API pública



# Casos de usos en clases 

1. Modelar entidades del dominio (Domain Entities)

Propósito: Representar objetos reales o del negocio con estado y comportamiento.

Ventaja: Centraliza la lógica asociada a esa entidad, mejora la mantenibilidad

```
class User {
  constructor(
    public id: number,
    public name: string,
    private active: boolean = true
  ) {}

  deactivate() {
    this.active = false;
  }

  isActive(): boolean {
    return this.active;
  }
}

```


2. Encapsular lógica y datos (Encapsulation)

Propósito: Ocultar detalles internos y exponer una API limpia.

Ventaja: Protege el estado interno, evita usos indebidos

```
class Counter {
  private count = 0;

  increment(): void {
    this.count++;
  }

  get value(): number {
    return this.count;
  }
}

```


3. Herencia y especialización (Inheritance)

Propósito: Reutilizar y extender funcionalidad base en clases derivadas.

Ventaja: Promueve el DRY, facilita crear jerarquías «is‑a»

```
class Animal {
  constructor(public name: string) {}
  move() { console.log(`${this.name} se mueve`); }
}

class Bird extends Animal {
  fly() { console.log(`${this.name} vuela`); }
}

```


4. Polimorfismo (Polymorphism)

Propósito: Tratar objetos de distintas clases de forma uniforme a través de un tipo base o interfaz.

Ventaja: Desacopla código cliente de las implementaciones concretas
 
```
abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  constructor(public r: number) { super(); }
  area() { return Math.PI * this.r ** 2; }
}

class Square extends Shape {
  constructor(public s: number) { super(); }
  area() { return this.s ** 2; }
}

function printArea(shape: Shape) {
  console.log(shape.area());
}

```


5. Clases abstractas (Abstract Classes)

Propósito: Definir un contrato parcial con implementación compartida y métodos abstractos.

Ventaja: Fija la estructura y reduce duplicación en subclases

```
abstract class Repository<T> {
  abstract findById(id: string): T | null;
  save(entity: T): void {
    // código genérico de guardado
  }
}

```


6. Singletons

Propósito: Asegurar una única instancia compartida en toda la aplicación.

Ventaja: Control de recursos globales (logging, configuración, conexiones)

```
class Config {
  private static instance: Config;
  private constructor(public settings: Record<string, any>) {}
  static getInstance() {
    return this.instance || (this.instance = new Config({}));
  }
}

```


7. Fábricas (Factory Pattern)

Propósito: Desacoplar la creación de instancias de su uso, pudiendo variar la implementación.

Ventaja: Centraliza lógica de construcción, facilita sustituir clases

```
interface Logger { log(msg: string): void; }

class ConsoleLogger implements Logger {
  log(msg: string) { console.log(msg); }
}

class LoggerFactory {
  static create(): Logger {
    // podría usar configuración para cambiar la clase
    return new ConsoleLogger();
  }
}

```


8. Inyección de dependencias (Dependency Injection)

Propósito: Facilitar el testeo y el desacoplamiento pasando dependencias externas.

Ventaja: Mejora modularidad y promueve implementación de contratos (interfaces)

```
class EmailService {
  constructor(private smtpClient: SmtpClient) {}
  send(to: string, body: string) { /*…*/ }
}

```


9. Data Transfer Objects (DTOs)

Propósito: Estructurar y validar datos que viajan entre capas o servicios.

Ventaja: Claridad, validación temprana y documentación de la forma de datos

```
class CreateUserDTO {
  constructor(
    public name: string,
    public email: string
  ) {}
}

```


10. Decoradores y metaprogramación

Propósito: Extender o modificar comportamiento de clases y métodos de forma declarativa.

Ventaja: Aspect‑oriented programming, logging, validaciones automáticas

```
function Log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function(...args: any[]) {
    console.log(`Llamando ${key}`, args);
    return original.apply(this, args);
  };
}

class Service {
  @Log
  doWork(x: number) { /*…*/ }
}

```



# Genéricos

Permiten escribir código reutilizable y flexible, sin perder la seguridad de tipos.

Básicamente, un genérico es un “tipo parametrizado”: defines una función, interfaz o clase que opera sobre un tipo desconocido hasta el momento de su uso.

1. Ventajas: 

### Reutilización: Una sola función puede trabajar con string, number, User, Product, etc., sin repetir código.

### Seguridad: Mantienes el tipado estático y evitas usar any.

### Flexibilidad: El usuario decide el tipo concreto al invocar o instanciar.


2. Sintaxis en funciones: 

### La función será de tipo genérico, su argumento y su retorno deben ser el mismo tipo, ej <T>. 

### Antes de invocarla pasandole argumentos/valores, obj definimos el tipo para cada operación. 

```
function identity<T>(arg: T): T {
  return arg;
}

// Uso:
const str = identity<string>("hola");    // str: string
const num = identity<number>(123);       // num: number

// TS puede inferir el tipo:
const inferred = identity("mundo");      // inferred: string

```


3. Múltiples parámetros de tipo

```
function pair<A, B>(first: A, second: B): [A, B] {
  return [first, second];
}

const p = pair<number, string>(5, "cinco"); // p: [number, string]

```


4. Genéricos en interfaces y type alias

```
interface Box<T> {
  value: T;
}

type Response<T> = {
  status: number;
  data: T;
};

// Uso:
const boxNum: Box<number> = { value: 42 };
const resp: Response<User> = { status: 200, data: { id: 1, name: "Ana" } };

```


5. Genéricos en clases

```
class Stack<T> {
  private items: T[] = [];
  
  push(item: T) { this.items.push(item); }
  pop(): T | undefined { return this.items.pop(); }
}

const numberStack = new Stack<number>();
numberStack.push(10);

```


6. Restricciones (extends)

A veces quieres limitar el tipo genérico a un conjunto que cumpla una condición

```
interface HasLength { length: number; }

function logLength<T extends HasLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength([1, 2, 3]);      // OK, los arrays tienen .length
logLength("texto");        // OK
// logLength(123);         // Error: number no tiene .length

```


7. Valores por defecto para parámetros de tipo

```
function makeTuple<T = string, U = number>(a: T, b: U): [T, U] {
  return [a, b];
}

const t = makeTuple("hola", 100);  // infiere <string, number>
const t2 = makeTuple<boolean, boolean>(true, false);

```


8. Genéricos y utilidades de TS

TS incluye muchos tipos genéricos para transformar otros tipos:

Partial<T>: todas las propiedades de T pasan a ser opcionales.

Readonly<T>: todas las propiedades de T pasan a ser de solo lectura.

Pick<T, K>: crea un tipo con solo las propiedades K de T.

Record<K, T>: mapea las claves K a un tipo T
    
```
interface User { id: number; name: string; age: number; }

type UserPreview = Pick<User, "id" | "name">;
// Equivalent a: { id: number; name: string; }

type ReadonlyUser = Readonly<User>;
// { readonly id: number; readonly name: string; readonly age: number; }

```    


9. Uso avanzado: genéricos condicionales

```
type ElementType<T> = T extends Array<infer U> ? U : T;

type E1 = ElementType<string[]>;  // string
type E2 = ElementType<number>;    // number

```

infer te deja “extraer” el tipo interno de un array, promesa, etc.


RS:

1. Declará <T> (u otra letra) al definir: función, interfaz, clase o alias.

2. Usa T dentro para referirte al tipo genérico.

3. Puedes restringirlo con extends.

4. Puedes dar valores por defecto.

5. TS provee utilidades genéricas (Partial, Pick, …) para transformar tipos

Tiene la versatilidad de lo dinámico y la seguridad del tipado estático.


# Casos de uso de genéricos

1. Funciones genéricas reutilizables

Propósito: Escribir una sola función que opere sobre distintos tipos sin duplicar lógica.

Ventaja: DRY y seguridad de tipos

```
function identity<T>(value: T): T {
  return value;
}

const s = identity<string>("hola");  // string
const n = identity<number>(123);     // number

```


2. Colecciones tipadas

Propósito: Crear estructuras de datos (arrays, pilas, colas) que recuerden su tipo interno.

Ventaja: Evita conversiones manuales y errores en tiempo de ejecución.

```
class Stack<T> {
  private items: T[] = [];
  push(item: T) { this.items.push(item); }
  pop(): T | undefined { return this.items.pop(); }
}

const numStack = new Stack<number>();
numStack.push(10);

```


3. Interfaces y type alias genéricos

Propósito: Definir contratos de objetos o respuestas que se adapten al tipo de dato.

Ventaja: Un mismo molde sirve para múltiples entidades

```
interface ApiResponse<T> {
  status: number;
  payload: T;
  error?: string;
}

type Nullable<T> = T | null;

```


4. Restricciones de tipo (extends)

Propósito: Limitar el rango de tipos válidos para el parámetro genérico.

Ventaja: Asegura que el tipo tenga ciertas propiedades o métodos

```
interface HasId { id: string; }

function fetchById<T extends HasId>(item: T): void {
  console.log(item.id);
}

```


5. Parámetros de tipo por defecto

Propósito: Dar un tipo estándar si el usuario no especifica uno.

Ventaja: Simplifica invocaciones comunes

```
function makePair<T = string, U = number>(a: T, b: U): [T, U] {
  return [a, b];
}

const p = makePair("x", 42);  // infiere <string, number>

```


6. Utilidades mapeadas y condicionales

Propósito: Transformar tipos existentes de manera programática.

Ventaja: Generar nuevos tipos sin escribirlos manualmente

```
type ReadOnly<T> = { readonly [K in keyof T]: T[K] };
type ElementType<T> = T extends (infer U)[] ? U : T;

```


7. Composición de tipos genéricos

Propósito: Combinar varios genéricos para crear APIs complejas y flexibles.

Ventaja: Alto nivel de abstracción y reutilización

```
type Result<T, E = Error> = { ok: true; value: T } | { ok: false; error: E };

```


8. DSL y configuraciones parametrizables

Propósito: Definir mini‑lenguajes internos donde el tipo guía la validación.

Ventaja: Autocompletado y chequeo estructural de reglas

```
type QueryBuilder<F> = {
  select(fields: (keyof F)[]): QueryBuilder<F>;
  where(cond: Partial<Record<keyof F, any>>): QueryBuilder<F>;
  build(): string;
};

```


9. Metaprogramación y extractores (infer)

Propósito: Extraer información de tipos complejos (arrays, promesas, funciones).

Ventaja: Permite razonar sobre tipos anidados en tiempo de compilación

```
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

```


Rs:

Reutilización: mismas funciones/estructuras para cualquier tipo.

Seguridad: evita any y chequea consistencia en compilación.

Flexibilidad: el desarrollador elige el tipo al usar el genérico.

### Metaprogramación: TS puede “pensar” sobre tus tipos y derivar nuevos



# Diferencias entre objetos, types, interface, clases y genéricos

| Concepto      | ¿Qué define?                                               | Creación de código          | Extensión / Composición                       | Fusiones (declaración múltiple) | Uso típico                                          |                                                         |
| ------------- | ---------------------------------------------------------- | --------------------------- | --------------------------------------------- | ------------------------------- | --------------------------------------------------- | ------------------------------------------------------- |
| **Objeto**    | Instancia literal con pares clave‑valor                    | Sí (en tiempo de ejecución) | Composición manual (spread, assign)           | No                              | Agrupar datos, pasar parámetros, estado mutable     |                                                         |
| **type**      | Alias de un tipo: uniones, tuplas, funciones…              | No (solo en compilación)    | Intersecciones (`&`), uniones (\`             | \`)                             | No (error si redeclarás)                            | Uniones literales, tuplas, tipos mapeados/condicionales |
| **interface** | Contrato estructural de objetos y clases                   | No                          | Extiende con `extends`, merge auto.           | Sí (merge automático)           | Modelar forma de objetos, contratos de APIs y POO   |                                                         |
| **class**     | Plantilla para instancias con estado y métodos             | Sí                          | Herencia (`extends`), mezcla con `implements` | No                              | POO: encapsulación, herencia, singletons, patrones  |                                                         |
| **genéricos** | Parámetros de tipo que aplicás a funciones, clases o alias | No (solo en compilación)    | Se combinan con `type`, `interface`, `class`  | N/A                             | Reutilización segura: colecciones, APIs, utilidades |                                                         |


1. Objeto vs class / interface / type:

Un objeto es un valor en tiempo de ejecución, literal o creado por una clase.

interface y type solo existen en compilación para verificación estática, no generan código JS.

Una clase sí emite código (constructor, prototipo, métodos) y puede instanciarse


2. type vs interface:

Ambos definen la forma de un tipo, pero:

type permite uniones, intersecciones, tuplas, alias de firma de función, mapeados y condicionales.

interface permite declaración y fusión múltiple, y es más natural para modelar jerarquías con extends / implements.

Si necesitás un union literal o mapped type, usás type. Si necesitás merge de declaraciones o heredar contratos, usás interface


3. interface + class:

Una clase puede implements una interface, garantizando que cumple su contrato.

La interface define solo la estructura (firma), la clase agrega implementación y estado mutable.


4. Genéricos sobre type / interface / class

Los genéricos (<T>) se aplican a funciones, alias (type Foo<T> = …), interfaces (interface Box<T> { … }) y clases (class Stack<T> { … }).

Permiten escribir código parametrizado, reutilizable y con seguridad de tipo sin sacrificar flexibilidad



# Aplicación de objetos, types, interface, clases y genéricos

Objeto literal: datos puntuales, paso de parámetros, configuraciones.

type: cuando necesitás un alias versátil (uniones, tuplas, condicionales, mapped types).

interface: para describir la estructura de objetos o clases, especialmente si pensás en extender o fusionar definiciones.

class: cuando quieras lógica con estado interno, métodos, herencia, patrones de POO (Singleton, Factory, etc.).

genéricos: en cualquiera de los anteriores, cuando tu definición debe adaptarse al tipo concreto que el usuario provea


1. Objetos literales

Al pasar datos concretos a una función o a un componente.

Para configuraciones pequeñas (p. ej. opciones de llamada, estilos).

Cuando necesitas un valor puntual que no requiere reutilización ni validaciones extra.

Por qué: son simples, inmediatos y no generan código adicional ni tipados complejos

```
const settings = { debug: true, retries: 3 };
init(settings);

```


2. type (alias de tipos)

Para uniones literales o tuplas: cuando quieres restringir a “este o aquel” valor.

Para intersecciones (&) y mapped/conditional types: al transformar o combinar tipos programáticamente.

Para aliases de firma de función y tipos complejos (DSL, ADT).

Por qué: ofrece la máxima flexibilidad de composición en tiempo de compilación

```
type Direction = "up" | "down" | "left" | "right";
type ReadOnly<T> = { readonly [K in keyof T]: T[K] };

```


3. interface

Para modelar la forma de objetos que vas a compartir o extender.

Cuando quieras fusionar declaraciones en distintos módulos (augmentación).

Para definir contratos (APIs, callbacks, servicios) que luego implementarán clases u otros objetos.

Por qué: es semánticamente clara para estructuras de objetos y permite extends/implements y merge automático

```
interface User {
  id: string;
  name: string;
  isActive?: boolean;
}

```


4. Class

Cuando necesites estado interno mutable y métodos estrechamente ligados.

Para POO: herencia (extends), polimorfismo, clases abstractas, singletons.

Si quieres usar decoradores, inyección de dependencias o patrones como Factory/Repository.

Por qué: genera código ejecutable (constructor + prototipo) y te da todo el arsenal de la POO

```
class Cart {
  private items: Product[] = [];
  add(p: Product) { this.items.push(p); }
  total() { return this.items.reduce((sum, p) => sum + p.price, 0); }
}

```


5. Genéricos

Siempre que escribas funciones, interfaces, type alias o clases cuyos tipos deban adaptarse al contexto.

Para colecciones tipadas (pilas, colas, mapas) y APIs de respuesta (ApiResponse<T>).

Cuando quieras imponer restricciones (T extends …) o usar infer en tipos condicionales.

Por qué: maximizan la reutilización sin perder la precisión del tipado

```
function wrap<T>(value: T): { value: T } { return { value }; }

interface Repository<T> {
  findById(id: string): Promise<T | null>;
}

```


Rs:

| Necesidad                                  | Usa…                  |
| ------------------------------------------ | --------------------- |
| Un dato puntual/config simple              | **Objeto literal**    |
| Alias de uniones, tuplas o mapeos          | **`type`**            |
| Contrato de forma de objeto extensible     | **`interface`**       |
| Lógica con estado, herencia y POO          | **`class`**           |
| Cualquier constructo que deba ser genérico | **Genéricos** (`<T>`) |



# Combinación types, interface, clases y genéricos


### interface para contratos y firmas.

### type para alias, uniones, mapeados y intersecciones.

### class para lógica con estado, métodos y POO.

### Genéricos para mantener todo parametrizable y reutilizable


# Clases abstractas

1. No puede instanciarse directamente (no puedes hacer new AbstractClass()).

2. Puede contener implementación (métodos con cuerpo) y métodos o propiedades abstractas (solo firma, sin cuerpo).

3. Obliga a sus subclases a implementar los miembros marcados como abstract.

```
abstract class Animal {
  constructor(public name: string) {}

  // Método con implementación común
  move(distance: number) {
    console.log(`${this.name} se movió ${distance}m.`);
  }

  // Método abstracto: solo firma, sin cuerpo
  abstract makeSound(): void;
}

// Error: no se puede instanciar directamente
// const a = new Animal("Genérico");

class Dog extends Animal {
  makeSound() {
    console.log("¡Guau!");
  }
}

const dog = new Dog("Rex");
dog.move(10);      // Rex se movió 10m.
dog.makeSound();   // ¡Guau!

```


Objetivo: 

1. Compartir lógica común:

La clase abstracta puede implementar métodos o propiedades que serán reutilizados por todas las subclases (p.ej. validaciones, cálculos, utilidades internas).


2. Forzar un contrato parcial:

Al declarar métodos/properties abstract, obligas a que cada subclase provea su propia versión, garantizando consistencia en la API.


3. Definir jerarquías claras:

Son útiles cuando tienes un tipo base con comportamiento común y múltiples variantes concretas


Prácticas: 

1. Usá clases abstractas cuando tengas:

Lógica compartida entre subtipos.

Estado o helper methods que todos deberían heredar.


2. Usa interface si solo necesitas definir un contrato sin implementación.


3. Mantén los métodos abstractos claros y pocos: que definan la esencia de lo que debe hacer cada subclase



# Clases abstractas vs interface 
 
| Característica               | Clase abstracta      | Interface              |
| ---------------------------- | -------------------- | ---------------------- |
| Puede tener implementación   | ✔️ Sí                | ❌ No (solo firmas)     |
| Puede definir estado interno | ✔️ Sí (propiedades)  | ❌ No                   |
| Permite herencia múltiple    | ❌ Solo una `extends` | ✔️ Múltiples `extends` |
| Se genera código JS          | ✔️ Sí                | ❌ No                   |


1. implementación

abstracta:

Puede incluir métodos con código (cuerpos de función) y propiedades con valores o inicializadores. 

Esto te permite compartir lógica común directamente en la clase base.

```
abstract class Animal {
  eat() {                   // método con implementación
    console.log("Comiendo");
  }
  abstract makeSound(): void; 
}

```


Interface:

Solo declara la firma (nombre, parámetros y tipo de retorno) de métodos o propiedades. 

No puede contener cuerpos de métodos ni inicializadores de propiedades

```
interface SoundMaker {
  makeSound(): void;   // solo la firma, sin cuerpo
}

```


2. Estado interno

abstracta:

Permite declarar propiedades privadas o protegidas, y asignarles valores iniciales, lo que modela un estado interno que las subclases heredan y pueden usar o modificar

```
abstract class Counter {
  protected count = 0;     // estado interno
  increment() { this.count++; }
}

```


Interface:

No hay implementación ni almacenamiento de estado. 

Solo describe qué propiedades debería tener el objeto final, pero no guarda datos.

```
interface HasCount {
  count: number;     // describe que existe, pero no lo crea
}

```


3. Herencia múltiple

abstracta:

Solo puedes extender (heredar de) una única clase abstracta o concreta. 

TypeScript no permite class A extends B, C.

```
abstract class A {}
abstract class B {}
// class C extends A, B {} // ❌ error

```


Interface:

Puedes extends múltiples interfaces en una sola declaración, mezclando contratos de forma muy flexible

```
interface A { a(): void; }
interface B { b(): void; }
interface C extends A, B { }  // hereda ambas firmas

```


4. Genera código JavaScript

abstracta:

Sí. Al compilar TS a JS, la clase abstracta genera la función constructora y el prototipo correspondiente. 

El abstract desaparece, pero el esqueleto de la clase existe en el output


Interface:

No. Las interfaces son puramente constructos de tiempo de compilación para el chequeo de tipos. 

No producen ninguna función o variable en el JavaScript resultante


## Aplicación

Clases abstractas aportan implementación compartida, estado interno, y se traducen a código JS, pero su herencia es única.

Interfaces ofrecen contratos ligeros, extensibles (múltiples extends), sin generar nada en JS ni mantener estado.

En función de si necesitas compartir implementación y estado

O solo definir un contrato (forma) sin código


interface:

Solo contrato: Cuando solo quieres describir la forma de un objeto—qué propiedades y métodos debe exponer—sin aportar ninguna lógica ni estado.

Herencia múltiple: Si necesitas que un tipo herede de varios contratos, puedes hacer

```
interface A { foo(): void }
interface B { bar(): void }
interface C extends A, B {}

```

Augmentación/merge: En librerías o módulos grandes, puedes “abrir” la misma interface en distintos archivos y TypeScript las une automáticamente.

Ligereza: Como no genera código JS, es ideal para definir esquemas de datos (DTOs, shapes de props, firmas de callbacks).


clase abstracta:

Implementación compartida: Cuando varias subclases van a reutilizar o extender métodos ya implementados (helpers, validaciones, lógica común).

Estado interno: Si necesitas propiedades con valores por defecto, contadores, cachés, o cualquier dato compartido que viva en la base.

Patrones POO: Para definir jerarquías de tipo con constructores o middleware donde quieres forzar cierta inicialización en super().

Código generado: Cuando quieres que en el JS final exista realmente esa clase (p. ej. para usar instanceof o decorar métodos).


Rs: 

| Característica         | interface               | clase abstracta                                                |
| ---------------------- | ----------------------- | -------------------------------------------------------------- |
| **¿Código generado?**  | ❌ no                    | ✔️ sí                                                          |
| **Compartir lógica?**  | ❌ no                    | ✔️ sí                                                          |
| **Estado interno?**    | ❌ no                    | ✔️ sí                                                          |
| **Herencia múltiple?** | ✔️ sí                   | ❌ no                                                           |
| **Merge automático?**  | ✔️ sí                   | ❌ no                                                           |
| **Uso típico**         | DTOs, shapes, contratos | Bases de jerarquía POO, repositorios, servicios con init común |


## Ej

1. definir la forma de un objeto de configuración (sin lógica):

```
interface Config { host: string; port?: number }

```


2. servicio base que lleve un log interno y un método común:

```
abstract class BaseService { protected log: Logger; … }

```



# Merging interfaces

Declaración múltiple o merging, que permite “abrir” la misma interfaz en distintos lugares del código y que el compilador las combine automáticamente en un único contrato

Es útil para: 

1. Extender tipos de librerías externas (augmentación de módulos).

2. Dividir grandes interfaces en varios archivos por cuestión de organización.

3. Añadir propiedades a una misma interfaz desde distintos contextos (por ejemplo, en plugins).


Si declarás dos veces en distintos archivos:

```
// archivo user.ts
interface User {
  id: string;
  name: string;
}

// archivo user.extra.ts
interface User {
  email: string;
  isActive: boolean;
}

```


TS une ambas declaraciones como si hubieras escrito:

```
interface User {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
}

```

Ahora cualquier objeto User debe tener las cuatro propiedades.


Ejemplo:

una librería que define:

```
// en node_modules/mylib/index.d.ts
export interface Request {
  path: string;
  method: string;
}

```

Y en tu proyecto querés agregar un campo user al Request sin tocar el código de la librería:

```
// src/types/express-augment.d.ts
import "mylib";

declare module "mylib" {
  interface Request {
    user?: { id: string; roles: string[] };
  }
}

```

Aquí re-abres el módulo "mylib".

Añadís user a la interfaz Request.

TS compila y, en todo tu código, Request incluirá path, method y user.


Usos: 

1. Cuando defines tu propio framework y querés que terceros añadan sus campos (plugins, middlewares).

2. Al trabajar con librerías JS sin tipos completos: podés completar o corregir sus definiciones.

3. Para organizar grandes contratos de datos en varios archivos (p. ej. un User con secciones de perfil, permisos, preferencias…).



# Objeto dinámico: index signatures

Estructuras cuyos nombres de propiedad no están todos predefinidos, sino que pueden surgir en tiempo de ejecución, pero siempre cumpliendo un mismo “contrato” de tipo.

Esto se logra con las llamadas index signatures


Una index signature:

"Tener un objeto cuyas claves (propiedades) serán de este tipo, y todos sus valores serán de este otro tipo.”

```
type ScoreMap = {
  [key: string]: number;
};

```

`[key: string]`: “cualquier propiedad con nombre de tipo string”

`: number`: “su valor siempre será un number”


```
// 1. Defino el tipo de objeto dinámico
type ScoreMap = {
  [playerName: string]: number;
};

// 2. Creo una variable que cumple ese contrato
const scores: ScoreMap = {
  Alice: 10,
  Bob:   8,
  // Puedo agregar más dinámicamente:
  Charlie: 15
};

// 3. Uso dinámico
function addScore(map: ScoreMap, player: string, pts: number) {
  // Si ya existe, sumo; si no, inicializo
  map[player] = (map[player] || 0) + pts;
}

addScore(scores, "Dave", 12);
console.log(scores.Dave); // 12

```

1. TypeScript valida que todas las propiedades de scores sean números.

2. Puedes acceder con scores `["Alice"] o scores.Alice` indistintamente.

3. Al hacer `map[player] = …,` aunque player venga de una cadena variable, TS sabe que el valor resultante debe ser number


Variantes:

1. Solo claves específicas

Si además quieres algunas propiedades fijas y otras dinámicas

```
type Config = {
  mode: "dark" | "light";      // propia
  [setting: string]: boolean | string; // dinámicas
};

```


2. Usar Record

TypeScript incluye un alias genérico para lo mismo:

```
type ScoreMap = Record<string, number>;

```

Que es exactamente equivalente a la index signature anterior.


Ventajas: 

Flexibilidad: no necesitas anticipar todas las claves.

Seguridad: TypeScript sigue comprobando que todos los valores tengan el tipo correcto.

Autocompletado: si has asignado previamente algunas claves, el editor te sugerirá esas propiedades



# Index signature/firma de índice 

"Este objeto puede tener cualquier propiedad cuyo nombre sea un string, y todos sus valores serán number.”

1. Index 

Acceso a las propiedades de un objeto de dos formas:

```
obj.propName     // acceso por nombre literal
obj["propName"]  // acceso dinámico usando un índice (string)

```

La segunda forma `obj["algo"]` es la que habilita nombres de propiedad no conocidos de antemano


2. Sintaxis

Con type o interface:

```
type MiMapa = {
  [clave: string]: number;
};

```

```
interface MiMapa {
  [clave: string]: number;
}

```

`[clave: string]`

El primer clave es un nombre local que tú eliges (puede ser key, prop, k, etc.).
    
Después de los dos puntos, indicas de qué tipo serán esas claves — normalmente string (o number).
    
`: number`

Especifica que todos los valores guardados en esas propiedades serán number


Permite: 

```
const scores: MiMapa = {
  Alice: 10,
  Bob:   8,
};

scores["Charlie"] = 15;    // OK, "Charlie" es un string
scores.Dave       = 12;    // OK, es equivalente

```


Prohíbe:

```
scores.Eve = "muchos";  // Error: el valor debe ser number
scores[123] = 5;        // Error si la firma es [clave: string]: number

```


4. Claves string vs number

`[clave: string]: V`
Cubre todas las propiedades con nombres de tipo string.

`[clave: number]: V`
Permite índices numéricos (en tiempo de compilación TS verifica que uses obj[0], obj[1], etc.).
Útil, por ejemplo, para tipar arrays o mapas basados en índices.

```
type Vector = {
  [i: number]: number;
};

const vec: Vector = [10, 20, 30];
console.log(vec[1]); // 20

```


5. Propiedades fijas

Podés combinar propiedades con nombre conocido y una firma de índice para lo dinámico:

```
type Config = {
  mode: "dark" | "light";      // propiedad fija
  [setting: string]: boolean;  // otras claves dinámicas con valores booleanos
};

const cfg: Config = {
  mode: "dark",
  debug: true,
  verbose: false
};

```

TS sabe que mode es "dark"|"light", y que cualquier otra propiedad (como debug o verbose) debe ser boolean.


6. Alias genérico con Record

TypeScript trae un tipo genérico incorporado que hace exactamente lo mismo

```
type MiMapa = Record<string, number>;

```

Record<K, V> es equivalente a:

```
type MiMapa = {
  [key in K]: V;
};

```


Rs: 

La index signature `[clave: TipoClave]: TipoValor` tipa objetos con propiedades dinámicas.

TipoClave suele ser string (o number), y TipoValor el tipo de dato aceptado para todos esos valores.

Se puede mezclar con propiedades fijas para combinar datos estáticos y dinámicos.

Su versión genérica es Record<Clave, Valor>.



# Desestructuración

Sintaxis que permite extraer datos de objetos o arrays de forma clara y compacta.

### "Asignación de valores a otro var/obj"

Objetos: 

```
const usuario = {
  id: 1,
  nombre: "Bob",
  edad: 30
};

// Extraer propiedades en variables:
const { nombre, edad } = usuario;

console.log(nombre); // "Bob"
console.log(edad);   // 30

```

##### { nombre, edad } crea variables con el mismo nombre que las propiedades.

Esto evita escribir usuario.nombre, usuario.edad, etc.


tipado explícito

```
const usuario: { id: number; nombre: string; edad: number } = {
  id: 1,
  nombre: "Bob",
  edad: 30
};

const { nombre, edad }: { nombre: string; edad: number } = usuario;

```

Aunque TypeScript infiera el tipo, podés ser explícito si lo necesitás.


Renombrar variables:

```
const { nombre: userName } = usuario;
console.log(userName); // "Iván"

```


Valores por defecto:

```
const { edad, ciudad = "Desconocida" } = usuario;

```


arrays:

```
const coordenadas = [10, 20];

// Extraigo por posición
const [x, y] = coordenadas;

console.log(x); // 10
console.log(y); // 20

```


Saltar elementos:

```
const valores = [1, 2, 3];
const [, segundo] = valores; // me salto el primero

```


En funciones (parámetros):

```
function saludar({ nombre }: { nombre: string }) {
  console.log(`Hola, ${nombre}`);
}

saludar({ nombre: "Bob" });

```


Desestructuración + Tipos:

En funciones o declaraciones, podés combinar tipos explícitos con desestructuración:

```
type Usuario = { id: number; nombre: string };

function imprimir({ id, nombre }: Usuario) {
  console.log(`${id}: ${nombre}`);
}

```


Desestructurar con genéricos:

Si estás usando genéricos, también podés desestructurar con tipos parametrizados:

```
function mostrar<T extends { label: string }>({ label }: T) {
  console.log(label);
}

```


Ventajas: 

Más legibilidad y concisión.

Evita repetir obj.prop muchas veces.

Funciona bien con TypeScript: el tipado se conserva.

Permite usar valores por defecto, renombrar variables y validar estructura de forma limpia


Te permite acceder a propiedades o elementos de forma más legible.

Se usa comúnmente en funciones, argumentos, ciclos, y asignaciones.



# Estructuras en tiempo de compilación y ejecución

Compile-time y run-time son dos "fases" principales de cualquier lenguaje.


En TS: 

Cuando ejecutás tsc, npx tsc, o tu herramienta de build (Webpack, esbuild, etc.) transpila .ts → .js.

1. Chequeo de tipos: TypeScript valida que tus anotaciones, inferencias y reglas de tipado (interface, type, genéricos, index signatures…) se cumplan.

2. Eliminación de código TS: Todas las declaraciones de tipos (interface, type, parámetros genéricos, anotaciones: : string, abstract, etc.) se descartan porque JavaScript no entiende tipos.

3. Transformación de sintaxis: Algunas características de ESNext (modernas) pueden down-transpilearse para compatibilidad (p.ej. convertir class a funciones prototípicas si apuntas a ES5).


Cualquier lógica de tu programa (condicionales, bucles, llamadas a funciones) no se ejecuta. Solo se analiza y se transforma en código JS limpio de tipos

Ej: 

```
interface User { id: string; name: string }
function greet(u: User) {
  console.log(`Hola ${u.name}`);
}

```

Tras compilar (tsc → JS) tendrás algo como:

```
function greet(u) {
  console.log("Hola " + u.name);
}

```

Observá que la interface desaparece y los : User o : string se eliminan


Tiempo de ejecución:

Cuando corrés, en Node o en el navegador, el archivo .js que generaste

El motor de JS (V8, SpiderMonkey, Chakra…) interpreta o JIT-compila tu código JS.

Se crean variables, se ejecutan funciones, se resuelven condicionales, se hacen llamadas a APIs (fetch, fs…), se realizan cálculos, etc.

¡Aquí sí existe “estado” y “efectos” (I/O, DOM, logs)!


El tipado de TypeScript: 

El motor JS ignora cualquier noción de tipos estáticos; sólo ve funciones, objetos, números, cadenas, etc

```
// Suponiendo que este JS es el resultado de compilar TS:
function greet(u) {
  console.log("Hola " + u.name);
}

// --------- run-time ----------
const usuario = { id: "u1", name: "María", age: 28 };
greet(usuario);  // Hola María

```

En ejecución, JavaScript no valida que usuario cumpla User. Si falta name, el undefined saldrá en consola, pero no lanzará un error de tipos.


## Proposito

1. Ergonomía y seguridad: En compile-time TypeScript te evita errores comunes (pasar un número donde esperás un string, olvidar propiedades, mezclar tipos…) antes de que llegues a run-time.

2. Performance y tamaño: Todo el “peso” del sistema de tipos desaparece antes de distribuir tu código; en run-time solo corre JS puro.

3. Debugging: Los errores de tipado son detectados y reportados en el editor o consola de build, no en la consola del navegador


Rs: 

| Fase            | ¿Qué hace?                                       | Tiempo               |
| --------------- | ------------------------------------------------ | -------------------- |
| **Compilación** | Chequea tipos, transforma TS → JS, elimina tipos | Previo al despliegue |
| **Ejecución**   | Corre lógica, crea estado, hace I/O, DOM, etc.   | En Node / Navegador  |



Algunas construcciones existen solo en tiempo de compilación (compile-time) para ayudar al tipado, mientras que otras se convierten en código JavaScript y se ejecutan en tiempo de ejecución (run-time).

Estas estructuras no generan código JavaScript; sirven únicamente para la verificación estática de tipos y desaparecen tras la compilación:

1. interface
­­- Define contratos de forma, herencia y fusiones automáticas.
­­- No aparece en el JS resultante.

2. type / alias de tipo
­­- Uniones (A \| B), intersecciones (A & B), tuplas, mapped y conditional types.
­­- No produce ningún artefacto en el JS.

3. Parámetros genéricos (<T>)
­­- En funciones, interfaces, clases o type aliases, permiten tipar de forma parametrizada.
­­- Se eliminan y solo dejan el código “desgenérico” en JS.

4. Index signatures
­­- Ej. [key: string]: number en un tipo, restringe propiedades dinámicas.
­­- No tiene ninguna contraparte en tiempo de ejecución.

5. Utility types y operadores de tipo
­­- Partial<T>, Pick<T,K>, keyof, infer, etc.
­­- Solo influyen en el sistema de tipos; no llegan al bundle.

I6. mports/export type-only
­­- import type { Foo } from "./mod";
­­- Se usan solo para tipado y se eliminan del JS.


Tiempo de ejecución (run-time)

Estas construcciones sí se traducen a JavaScript y participan en la lógica al ejecutarse:

1. Objetos literales y literales de array
­­- { a: 1, b: 2 }, [1,2,3] crean valores reales.

2. Funciones y declaraciones function / expresiones flecha
­­- Toda la lógica interna (cálculos, flujos, llamadas a APIs) se ejecuta.

3. Clases (class), instancias y herencia
­­- El motor JS crea constructores y prototipos.
­­- Métodos, static, extends, super() existen en el bundle.

4. Variables y constantes (let, const, var)
­­- Reservan espacio en memoria y asignan valores en tiempo de ejecución.

5. Condicionales, bucles, operadores aritméticos/lógicos
­­- if, for, while, +, &&, etc., funcionan en ejecución.

6. Enums (no-const)
­­- Se emiten como un objeto JS bidireccional para valores y claves.

7. Decoradores
­­- Si están habilitados, se transforman en llamadas de función sobre clases o propiedades



# Uso de extends e implements

```
interface User {
  id: string;
  name: string;
}

function greet(u: User) {
  console.log(`Hola ${u.name}`);
}

```

1. extends y implements se usan dentro de una declaración de clase para heredar de otra clase o para obligar a que una clase cumpla un contrato de interface

2. greet es simplemente una función, y User es un tipo (una interfaz) que le estamos pasando como anotación al parámetro.


```
function greet(u: User) { … }

```  

1. El argumento que me pases debe encajar con la forma de User”

Debe ser un objeto que tenga al menos las propiedades id: string y name: string.

Puede tener más propiedades (es un tipo abierto), pero no puede faltar ninguna de esas dos, ni cambiarlas de tipo.


2. Habilita autocompletado y chequeo de tipos

Dentro de greet, TS sabe que u.name es un string, y te dará error si intentas acceder a u.age (que no existe en User).

Ej: 

```
greet({ id: "u1", name: "Ana" });      // ✅ OK
greet({ id: "u2", name: "Luis", age: 30 }); // ✅ OK (extra props permitidas)
greet({ id: "u3" });                   // ❌ Error: falta `name`
greet({ name: "Eva" });                // ❌ Error: falta `id`

```

Anotar u: User obliga a que quien llame a greet le pase un objeto que cumpla ese contrato de propiedades, dándote seguridad y autocompletado en tiempo de compilación.


1. Extends 

Herencia de clases:

Cuando una clase A extends de otra clase B, A hereda propiedades, métodos y constructores de B, pudiendo añadir o sobrescribir lógica propia:

```
class Animal {
  constructor(public name: string) {}
  move(dist: number) {
    console.log(`${this.name} se movió ${dist}m.`);
  }
}

class Dog extends Animal {
  // Hereda name y move()
  bark() {
    console.log("¡Guau!");
  }
}

const d = new Dog("Rex");
d.bark();        // ¡Guau!
d.move(10);      // Rex se movió 10m.

```

Dog tiene automáticamente el comportamiento de Animal.

Si Dog define su propio método move, sobrescribe el de la clase base:

```
class Dog extends Animal {
  move(dist: number) {
    console.log(`El perro corre ${dist}m.`);
  }
}

```


Extender interfaces

Una interface también puede extends otra(s), combinando sus propiedades y métodos en un único contrato

```
interface A { a: number; }
interface B { b: string; }

interface C extends A, B {
  c: boolean;
}

// Equivalente a:
// interface C { a: number; b: string; c: boolean; }

```

Permite herencia múltiple de contratos en interfaces.

Útil para descomponer tipos y luego reunirlos.


Genéricos con extends

Al usar genéricos, extends restringe el rango de tipos válidos

```
interface HasId { id: string; }

function fetchById<T extends HasId>(obj: T): T {
  console.log(obj.id);
  return obj;
}

fetchById({ id: "u1", name: "Ana" }); // OK  
// fetchById({ name: "Luis" });       // Error: le falta id

```

Aquí <T extends HasId> obliga a que T tenga al menos la propiedad id: string.


2. Implements 

Se usa dentro de una clase para declarar que esa clase cumple el contrato de una o varias interfaces:

```
interface Serializable {
  serialize(): string;
}

interface Identifiable {
  id: string;
}

class User implements Serializable, Identifiable {
  constructor(public id: string, public name: string) {}
  serialize() {
    return JSON.stringify({ id: this.id, name: this.name });
  }
}

```

Obliga al compilador a verificar que User incluya todas las propiedades y métodos definidos en Serializable e Identifiable.

Si olvidas alguno, TS marcará error


Rs: 

| Palabra clave | Contexto              | Efecto                                                         |
| ------------- | --------------------- | -------------------------------------------------------------- |
| `extends`     | Clase ← Clase         | Hereda implementación (propiedades/métodos/prototipo).         |
| `extends`     | Interface ← Interface | Fusiona contratos, permite herencia múltiple de tipos.         |
| `extends`     | Genéricos `<T>`       | Restringe T a subtipos que cumplan cierto contrato.            |
| `implements`  | Clase → Interface(s)  | Fuerza a la clase a cumplir el contrato de la(s) interface(s). |


extends en clases: cuando varias clases comparten lógica común y quieres reutilizar código mediante herencia.

extends en interfaces: para componer tipos complejos a partir de otros más pequeños.

extends en genéricos: cuando necesitas que un tipo parámetro satisfaga ciertas propiedades/métodos.

implements: cuando una clase debe garantizar que provee la forma (firma) de uno o más contratos (interfaces), sin heredar su implementación


| Característica            | `extends`                                                                 | `implements`                                                   |
| ------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **¿A qué se aplica?**     | Solo a **clases** (y a **interfaces** entre sí)                           | Solo a **clases**                                              |
| **Hereda implementación** | ✔️ La subclase copia métodos, propiedades y constructor de la clase base. | ❌ No hereda nada, solo “firma” que cumple un contrato.         |
| **Herencia múltiple**     | ❌ Una clase solo puede `extends` de una única clase.                      | ✔️ Una clase puede `implements` de muchas interfaces.          |
| **Genera código JS**      | ✔️ Produce código (constructor, prototipo).                               | ❌ No produce nada extra en JS; es verificación estática.       |
| **Uso en interfaces**     | ✔️ `interface A extends B, C` combina contratos                           | —                                                              |
| **Propósito**             | Reutilizar y especializar comportamiento.                                 | Garantizar que la clase incluya ciertas propiedades y métodos. |



# TS Node, Nodemon y debug

ts-node es un intérprete de TypeScript que puede ejecutar código TypeScript directamente sin necesidad de compilarlo previamente

```
npm install ts-node --save-dev

npx ts-node archivo.ts.

```

script: 

```
"scripts": {
  "dev": "ts-node archivo.ts"
}

```


nodemon

permite ver los cambios en tu código sin tener que reiniciar manualmente el servidor

```
nodemon index.js

nodemon --exec ts-node archivo.ts

```

reinicie automáticamente el servidor cuando detecte cambios en el código

script en package.json: 

```
"scripts": {
  "dev": "nodemon index.js"
}

```


debug: 

```
node --inspect index.ts

node --inspect-brk  index.ts

```

--inspect habilita la depuración y permite que el depurador se conecte al proceso de Node.js.

-brk habilita la depuración y detiene el proceso de Node.js en el primer punto de interrupción.


Conectar el depurador: Una vez que hayas habilitado la depuración, debes conectar un depurador a la sesión de depuración. Puedes utilizar un depurador como Chrome DevTools, Visual Studio Code o Node.js Inspector para conectar a la sesión de depuración.

Depurar el código: Una vez que hayas conectado el depurador, puedes depurar el código utilizando las herramientas de depuración proporcionadas por el depurador. Puedes establecer puntos de interrupción, inspeccionar variables, ejecutar código y más.


herramientas debug: 

Chrome DevTools

Visual Studio Code

Node.js Inspector


debugger: Es una función que se utiliza para detener el proceso de Node.js en un punto de interrupción.

Punto de interrupción: Es un punto en el código donde el proceso de Node.js se detiene y permite que el depurador inspeccione las variables y el estado del programa.

Establecer un punto de interrupción: Puedes establecer un punto de interrupción en el código utilizando la función debugger o utilizando la herramienta de depuración para establecer un punto de interrupción en una línea específica del código.


Firefox:

about:debugging

"Conectar a un proceso de depuración" en la sección "Depuración remota".

URL localhost:9229 (o el puerto que hayas especificado con --inspect) y "Conectar".

terminal, ejecuta node --inspect archivo.ts o js.

La herramienta de depuración de Firefox se conectará al proceso de Node.js y podrás depurar tu código


Puntos de interrupción: Puedes establecer puntos de interrupción en tu código para detener la ejecución y inspeccionar las variables.

Inspección de variables: Puedes inspeccionar las variables y expresiones en tu código para ver sus valores.

Ejecución de código: Puedes ejecutar código en la consola de depuración para probar expresiones y funciones.

Depuración de errores: Puedes depurar errores y excepciones en tu código para identificar y solucionar problemas


# Scripts de npm: npm run

```
npm run scriptA

```



# Planteo

1. Diseño estruc program:

kiss, dry, yagni, solid
composición sobre herencia, encapsulación, abstraccion 
interfaces y clases 


2. Diseño soluc: 

diagram, pscode, met algoritm
control, datos... 




# Ejercicios de Objetos 

## Básico

### 1. Registro de Usuarios

Objetivo:

Crear una función que reciba un objeto de tipo User 
y devuelva una cadena con la información formateada del usuario.

1. Define el tipo User

Debe tener las siguientes propiedades:

id: string
name: string
age: number
email (opcional): string
    

2. Implementá la función

```
function describeUser(user: User): string {
  // Tu código aquí
}

```

La función debe devolver una cadena como:

"Usuario: Ana (ID: u123), Edad: 25, Email: ana@email.com"

O si no tiene email: "Usuario: Ana (ID: u123), Edad: 25"


3. Probá la función:

```
const usuario1 = {
  id: "u123",
  name: "Ana",
  age: 25,
  email: "ana@email.com"
};

const usuario2 = {
  id: "u124",
  name: "Luis",
  age: 30
};

console.log(describeUser(usuario1));
console.log(describeUser(usuario2));

```


Tips:

Usá una interface para definir User.

Aprovechá el operador ? para propiedades opcionales.

Asegurate que TypeScript te avise si te faltan propiedades o las escribís mal.

(Si definís bien los tipos (interface o type), TypeScript te avisa automáticamente cuando algo no encaja.
Eso te evita errores silenciosos que en JavaScript podrían pasar desapercibidos hasta el tiempo de ejecución.)


Planteo: 

methods:

acceso: 
.propName o `["propName"]` 

o expression: `let age = person[x]`

```
const person = {
  firstName: "John",
  lastName : "Doe",
  age      :  50
};

let x = "firstname";
let y = "age";
person[x] + " is " + person[y] + " years old."; 

``` 
out: John is 50 years old.


keys y values() func

```
return `${Object.keys(user)}, ${Object.values(user)}`;

```

loop: 

```
let text = "";
for (let x in person) {
  text += person[x] + " "; // al elem guard le agrega espacio
};

```

toString()
entries()
user.join(" "):


```
function describeUser(user: User): string {
  let base = `Usuario: ${user.name} (ID: ${user.id}), Edad: ${user.age}`;
  
  // Solo agregamos el email si está definido
  if (user.email) {
    base += `, Email: ${user.email}`;
  }

  return base;
}

```


# entries(), map() y join() 

```
function describeUser(user: User): string {
  return Object.entries(user)
    .map(([k, v]) => `${k}: ${v}`)
    .join(", ");
}

```


1. function describeUser(user: User): string {//...}

describeUser es una función que recibe un parámetro user de tipo User.

Devuelve un string.


2. Object.entries(user)

```
Object.entries(user)

```

Toma el objeto user y lo convierte en un array de pares 
`[clave, valor]`.

Si user = { id: "u1", name: "Ana", age: 25 }, entonces

```
Object.entries(user) 
// → [["id", "u1"], ["name", "Ana"], ["age", 25]]

```


3. Desestructuración: asignar valores de un obj a vars

```
.map(([k, v]) => \${k}: ${v}`)`

```

Recorre cada par `[k, v]` del array.

Desestructura: k queda con el nombre de la propiedad, v con su valor

Para cada par, retorna una cadena formateada "clave: valor".

Con nuestro ejemplo, el resultado de map sería:

```
["id: u1", "name: Ana", "age: 25"]

```


4. .join(", ")

Toma el array de cadenas y las concatena en una sola, separadas por ", ".

Así obtenemos:

```
"id: u1, name: Ana, age: 25"

```


5. Devolución del resultado

Ese string concatenado es el valor que la función retorna.

En return Object.entries(...)…; estamos devolviendo directamente el resultado de toda la cadena de operaciones.



# Sobre archivo, tipos, interfaces, parámetros, funciones puras y buenas prácticas

Correcciones: 

1. Definir las interfaces en un archivo separado para tipos. 

2. Inmutabilidad de tipos con readonly para las propiedades de las interfaces. 

3. Orden de un objeto


# Orden de un objeto: Entero, no entero y symbol 

### Los objetos tiene un orden, entries() puede desordenar el objeto literal escrito en el archivo. 



# 2. Carrito de Compras

Modelar un Carrito que contenga varios Productos, calcular el total y generar un resumen 

1. Definir las interfaces

Product con:

	id: string

	name: string

	price: number

CartItem con:

	product: Product

	quantity: number

Cart con un arreglo de CartItem:

	items: `CartItem[]`


2. Implementar funciones puras

addToCart(cart: Cart, item: CartItem): Cart

	Devuelve un nuevo Cart con item agregado al final de cart.items.

calculateTotal(cart: Cart): number

	Suma price * quantity de cada CartItem y devuelve el total.

cartSummary(cart: Cart): string

	Devuelve una cadena con líneas separadas por \n, cada una en formato:

```
2× Café – $5.00   // quantity × name – $price
1× Té – $3.50
Total: $13.50

```


3. Probar tu implementación
 
```
const coffee: Product = { id: "p1", name: "Café", price: 5.0 };
const tea:     Product = { id: "p2", name: "Té",   price: 3.5 };

let cart: Cart = { items: [] };

cart = addToCart(cart, { product: coffee, quantity: 2 });
cart = addToCart(cart, { product: tea,     quantity: 1 });

console.log(calculateTotal(cart));  // 13.5
console.log(cartSummary(cart));

``` 
 

Pistas:

1. Usa inmutabilidad: no mutar el arreglo original, sino crear uno nuevo ([...cart.items, item]).

2. Aprovecha desestructuración para extraer price, name, quantity y facilitar el formateo.

3. Formatea los precios con toFixed(2) para mostrar siempre dos decimales.


Planteo: 

1. interfaces

1) interfaz simple
2) interfaz que toma otra Product 
3) interfaz que toma un array

2. funciones puras

1) addToCart(cart: Cart, item: CartItem): Cart
Devuelve un nuevo Cart con item agregado al final de cart.items.

cart.push(item); // muta le array
return `[...cart].push(item)` // copy arr

errores:
Type number is no assignable to Cart
Type Cart must have a `'[Symbol.iterator]()'` method that returns and iterator


2) calculateTotal(cart: Cart): number
Suma price * quantity de cada CartItem y devuelve el total.

cart es un item que toma el array CartItem 
que tiene product (que tiene Product) y quantity

sumar todos los items del arr


3) cartSummary(cart: Cart): string
Devuelve una cadena con líneas separadas por \n, cada una en formato:

```
2× Café – $5.00   // quantity × name – $price
1× Té – $3.50
Total: $13.50

```

imprimir cada item del arr:

`${cart.items.quantity}x ${cart.items.name} - ${cart.items.} \n Total: ${calculateTotal()}` 


## Correcciones: 

1. 

```
function addToCart(cart: Cart, item: CartItem): Cart {
  return {
    // clonamos cualquier otra propiedad de Cart (hoy solo items)
    ...cart,
    // items es un nuevo array con los viejos + el nuevo ítem
    items: [...cart.items, item]
  };
}
```


2. 

```
function calculateTotal(cart: Cart): number {
  return cart.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
}

```


3. 

```
function cartSummary1(cart: Cart): string {
  const lines = cart.items.map(item =>
    `${item.quantity}× ${item.product.name} – $${item.product.price.toFixed(2)}`
  );
  lines.push(`Total: $${calculateTotal(cart).toFixed(2)}`);
  return lines.join("\n");
}

```



# 3. Address Book

Crear un pequeño módulo que permita gestionar contactos: añadir, buscar y eliminar.

1. Definir las interfaces

Contact con las propiedades:

	id: string (único)

	name: string

	email: string

	phone?: string (opcional)


AddressBook con un arreglo de contactos:

	`contacts: Contact[]`


2. Implementar funciones puras

`addContact(book: AddressBook, contact: Contact): AddressBook`
	Devuelve un nuevo AddressBook con el contact al final, sin duplicar el id.

`findContactByName(book: AddressBook, name: string): Contact[]`
	Devuelve un array de todos los contactos cuyo name contenga (o coincida) la búsqueda (case-insensitive).

`removeContact(book: AddressBook, id: string): AddressBook`
	Devuelve un nuevo AddressBook sin el contacto que tenga ese id. 



3. Probar implementación

```
const book: AddressBook = { contacts: [] };

const alice = { id: "c1", name: "Alice", email: "alice@example.com" };
const bob   = { id: "c2", name: "Bob",   email: "bob@example.com", phone: "555-1234" };

let ab = addContact(book, alice);
ab = addContact(ab, bob);

console.log(findContactByName(ab, "ali")); // debería incluir a Alice
console.log(findContactByName(ab, "bo"));  // debería incluir a Bob

ab = removeContact(ab, "c1");
console.log(ab.contacts.map(c => c.name)); // ["Bob"]

```

Consejos

1. Inmutabilidad: Usa spread (...) o métodos como filter para no mutar el array original.

2. Búsqueda case-insensitive: Convierte ambos strings a minúsculas (.toLowerCase()).

3. Control de IDs duplicados: Antes de añadir, puedes verificar con .some() que no exista ya ese id.

4. Tipado estricto: Define claramente las interfaces y anota los tipos de retorno.


Planteo: 

Funciones: 

1) 
`addContact(book: AddressBook, contact: Contact): AddressBook`
	Devuelve un nuevo AddressBook con el contact al final, sin duplicar el id.

Acceso:
obj.id; .name etc. 
obj2.contacts // print arr(?)
obj2.contacts.for let x of contacts //print all elem de cont
obj2.contacts.map(e, func) // copy and transform all elem

return new book(AddrB) con contact(Cont):
book(+contact)

```
function addContact(book: AddressBook, contact: Contact): AddressBook {
	return {
		...book,
		contacts: [...book.contacts, contacts]
	}; 
}

```


2) 
`findContactByName(book: AddressBook, name: string): Contact[]`
	Devuelve un array de todos los contactos cuyo name contenga (o coincida) la búsqueda (case-insensitive).


### Correcciones 

```
// 1. Definición de tipos

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export interface AddressBook {
  contacts: Contact[];
}

// 2. Función para añadir un contacto

/**
 * Añade un nuevo Contact al AddressBook.
 * - Si ya existe un Contact con el mismo id, devuelve el AddressBook sin cambios.
 */
export function addContact(
  book: AddressBook,
  contact: Contact
): AddressBook {
  // Evitar duplicados por id
  if (book.contacts.some(c => c.id === contact.id)) {
    return book;
  }
  return {
    ...book,
    contacts: [...book.contacts, contact],
  };
}

// 3. Función para buscar contactos por nombre (case-insensitive)

/**
 * Devuelve todos los Contact cuyo name incluye la búsqueda.
 */
export function findContactByName(
  book: AddressBook,
  nameQuery: string
): Contact[] {
  const lower = nameQuery.toLowerCase();
  return book.contacts.filter(c =>
    c.name.toLowerCase().includes(lower)
  );
}

// 4. Función para eliminar un contacto por id

/**
 * Elimina el Contact con el id indicado.
 */
export function removeContact(
  book: AddressBook,
  id: string
): AddressBook {
  return {
    ...book,
    contacts: book.contacts.filter(c => c.id !== id),
  };
}

// 5. Ejemplo de uso

let book: AddressBook = { contacts: [] };

const alice: Contact = {
  id: "c1",
  name: "Alice Wonderland",
  email: "alice@example.com",
};

const bob: Contact = {
  id: "c2",
  name: "Bob Builder",
  email: "bob@example.com",
  phone: "555-1234",
};

book = addContact(book, alice);
book = addContact(book, bob);

// Buscar
console.log(findContactByName(book, "ali")); // → [ alice ]
console.log(findContactByName(book, "BO"));  // → [ bob ]

// Eliminar
book = removeContact(book, "c1");
console.log(book.contacts.map(c => c.name)); // → ["Bob Builder"]

```


## Intermedio

## Avanzado


# Ejercicios de Types

## Básico

## Intermedio

## Avanzado 


# Ejercicios de Interface 

## Básico

## Intermedio

## Avanzado 


# Ejercicios de Clases

## Básico

## Intermedio

## Avanzado 


# Ejercicios de Genéricos

## Básico

## Intermedio

## Avanzado 



# Acceso a objetos: anidados, con arrays, etc 

De dos maneras: 

1. Acceso directo por índice

Si sabés exactamente la posición que quieres

```
const cart: Cart = /* … */;

// Primer ítem del carrito
const firstItem = cart.items[0];

// Acceder al nombre del producto
const name1 = firstItem.product.name;

// Acceder al precio
const price1 = firstItem.product.price;

// Cantidad
const qty1 = firstItem.quantity;

```

Guardo el primer item, después accedio a product y a name.

Guarda el precio que está en el objeto product. 

Y guarda la cantidad que está en el array items. 


2. Recorrer el array con bucles o métodos de array

for…of:

```
for (const item of cart.items) {
  console.log(`${item.quantity}× ${item.product.name} — $${item.product.price}`);
}

```

forEach:

```
cart.items.forEach(item => {
  console.log(item.product.name, item.quantity, item.product.price);
});

```

.map / .filter / .reduce.

```
// Obtener solo los nombres de los productos
const names = cart.items.map(item => item.product.name);

// Filtrar ítems con cantidad > 1
const multiples = cart.items.filter(item => item.quantity > 1);

// Calcular un array de subtotales
const subtotals = cart.items.map(item => item.product.price * item.quantity);

```


3. Desestructuración para “acortar” el acceso

Dentro de un bucle:

```
for (const { product, quantity } of cart.items) {
  const { name, price } = product;
  console.log(quantity, name, price);
}

```

O directamente en la definción de la función: 

```
cart.items.forEach(({ product: { name, price }, quantity }) => {
  console.log(`${quantity}× ${name} — $${price}`);
});

```


4. Acceder al “último” elemento sin índice fijo

```
const lastItem = cart.items[cart.items.length - 1];
console.log(lastItem.product.name);

```


# Arrow functions

Aprovecha el tipado estático para anotar parámetros, retornos y hasta genéricos

### Inferencia de tipos en la definición (const o let name: tipe): toma el tipo de return.

1. Sintaxis: 

Para dos parametros necesita parentesis, flecha y return.

```
// Función tradicional
function suma(a: number, b: number): number {
  return a + b;
}

// Arrow function equivalente
const sumaF = (a: number, b: number): number => {
  return a + b;
};

```

Paréntesis con parámetros (a: number, b: number)

Flecha =>

Cuerpo de función entre { … }

Tipo de retorno después de los paréntesis: : number


2. Retorno implícito

Si el cuerpo es una sola expresión, podés omitir {} y el return:

```
const mult = (x: number, y: number): number => x * y;

```

TypeScript infiere el retorno de la expresión.


3. Parámetro único sin paréntesis

Cuando sólo hay un parámetro, podés omitir los paréntesis (aunque con tipado a veces los necesitas):

```
// Con inferencia de tipo (evitando conflictos)
const doble = (x: number): number => x * 2;

// Si TS ya infiere el tipo, podrías escribir:
const dobleInf = x => x * 2; // pero pierdes la seguridad de tipos explícitos

```


### Si no tipamos la definición, ni los params ni el retorno perdemos la seguridad de tipos. 

### Solo conviene dejar la inferencia a la definición. Tipar los params y el retorno.


4. Parámetros opcionales y por defecto 

```
const saludar = (nombre: string, saludo: string = "Hola"): string =>
  `${saludo}, ${nombre}!`;

// Uso:
// saludar("Ana")       → "Hola, Ana!"
// saludar("Ana", "Ey") → "Ey, Ana!"

```


5. Tipar el retorno con void o Promise

```
const log = (msg: string): void => {
  console.log(msg);
};

const fetchData = async (url: string): Promise<string> => {
  const res = await fetch(url);
  return res.text();
};

```


6. Genéricos en arrow functions

```
const identity = <T>(value: T): T => value;

const num = identity<number>(123);   // num: number
const str = identity<string>("hi");  // str: string

```

Nota: La sintaxis genérica <T> debe ir antes de los paréntesis.


7. this léxico

A diferencia de las funciones tradicionales, las arrow functions no tienen su propio this, sino que lo heredan del contexto donde fueron definidas:

```
class Contador {
  count = 0;
  // arrow function -> `this` apunta siempre a la instancia
  inc = () => {
    this.count++;
  };
}

const c = new Contador();
setTimeout(c.inc, 1000);     // sigue apuntando a c.count

```

Si hubieras usado un método tradicional, this dentro de inc podría ser undefined en callback.


8. Buenas prácticas

Usá arrow functions para callbacks, métodos “inline” y cuando necesites un this léxico.

Anotá siempre los tipos de parámetros y retorno para aprovechar al máximo TS.

Evita funciones flecha demasiado largas; si crecen, mejor transforma en función nombrada
    
```
// 1. Callback típico
[1, 2, 3].map((n: number): number => n * n);

// 2. Genérico
const wrap = <T>(v: T): { value: T } => ({ value: v });

// 3. `this` léxico en clase
class Timer {
  seconds = 0;
  start() {
    setInterval(() => this.seconds++, 1000);
  }
}

```



# Codewars 

# Kata 1. str to numb

Necesitamos una función que pueda transformar una cadena en un número. ¿Qué maneras conoces de lograrlo?

Nota: No te preocupes, todas las entradas serán cadenas y cada cadena es una representación perfectamente válida de un número entero.


rtn Number(str);
rtn +"str";
rtn +str;  

```
export const stringToNumber = (str: string): number =>
  +str; 

```

Test 

```
import { assert } from "chai";

describe("stringToNumber", function() {
  it("should work for the examples", function() {
    assert.strictEqual(stringToNumber("1234"),1234);
    assert.strictEqual(stringToNumber("605"), 605);
    assert.strictEqual(stringToNumber("1405"),1405);
    assert.strictEqual(stringToNumber("-7"),  -7);
  });
});

```


# Kata 2. Count by X

Crea una función con dos argumentos que devolverá una matriz de los primeros n múltiplos de x.

Supongamos que tanto el número dado como el número de veces a contar serán números positivos mayores que 0.

Devuelve los resultados como una matriz o lista (dependiendo del lenguaje).

Ej:

```
x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
x = 2, n = 5 --> [2,4,6,8,10]

```

rtn arr n múltiplos de x

numb * int = mult
x * n = arr

recur: 
n-1

base: 
1 

```
rtn [].map((x, n) => x * n)
// map toma arr exist, opera esos elem: usa e para guard

```

algo como 

```
rtn [...Array(n - 1)].map((_, i) => 2 ** i)

```


Sol: 

1. 
```
export const countBy = (x: number, n: number): number[] => Array.from({length: n}, (_, i) => x * (i + 1))

```

2. 

```
export function countBy(x: number, n: number): number[] {
  return Array(n).fill(x).map((e,i) => e+e*i);
}
```

3. 

```
export function countBy(x: number, n: number): number[] {
  const numbers: number[] = []
  for (let i = 1; i <= n; i++) {
    numbers.push(i * x)
  }
  return numbers
}

```

Test: 

```
import { assert } from "chai";
import { countBy } from "./solution";

describe("Fixed tests", function() {
  it("countBy(1, 10)", () => assert.deepEqual(countBy(1, 10), [1,2,3,4,5,6,7,8,9,10]));
  it("countBy(2, 5)", () => assert.deepEqual(countBy(2, 5), [2,4,6,8,10]));
  it("countBy(3, 7)", () => assert.deepEqual(countBy(3, 7), [3,6,9,12,15,18,21]));
  it("countBy(50, 5)", () => assert.deepEqual(countBy(50, 5), [50,100,150,200,250]));
  it("countBy(100, 6)", () => assert.deepEqual(countBy(100, 6), [100,200,300,400,500,600]));
});

describe("Random tests", function() {
  const sol = (x: number, n: number): number[] => Array.from({ length: n }, (_, i) => (i + 1) * x);
  for (let i = 0; i < 100; i++) {
    const x = Math.floor(Math.random() * 100) + 1;
    const n = Math.floor(Math.random() * 20) + 1;
    it(`countBy(${x}, ${n})`, () => assert.deepEqual(countBy(x, n), sol(x, n)));
  }
});

```



# Array de longitud 

Def: 

```
// Firma de la función
function multiples(x: number, n: number): number[]

```

Ej: 

```
multiples(2, 5);  // → [2, 4, 6, 8, 10]
multiples(3, 3);  // → [3, 6, 9]

```

Cod: 

Devuelve un arr de numb

```
function multiples(x: number, n: number): number[] {
  return Array.from({ length: n }, (_, i) => x * (i + 1));
}

```

1. Array.from({ length: n }) crea un array con n elementos.

2. callback `( _, i ) => x * (i + 1 )` ignora el valor (es undefined) y usa solo el índice i para generar los múltiplos.

3. Usamos i + 1 porque los múltiplos arrancan en 1, no en 0.

| Concepto         | Ejemplo                       |
| ---------------- | ----------------------------- |
| `Array.from`     | Crear arrays de longitud fija |
| `map` implícito  | Transformar cada posición     |
| `_` (unused var) | Ignorar argumento innecesario |
| Cierre (`i+1`)   | Evitar empezar desde 0        |


### .map() solo funciona sobre arrays ya existentes → por eso usás Array.from() o new Array(n).fill(0)


# For clásico: array, operación elem, push result

```
function multiples(x: number, n: number): number[] {
  const result: number[] = [];
  for (let i = 1; i <= n; i++) {
    result.push(x * i);
  }
  return result;
}

```


# Kata 3. School Paperwork

Tus compañeros te pidieron que les copiaras un trabajo. Sabes que hay n compañeros y que el trabajo tiene m páginas.

Tu tarea es calcular cuántas páginas en blanco necesitas. Si n < 0 o m < 0, devuelve 0.

Ej: 
n= 5, m=5: 25
n=-5, m=5:  0

