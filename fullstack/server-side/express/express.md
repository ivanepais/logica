# Express.js

Express es un marco web popular y unopinionated, escrito en JavaScript y alojado en el entorno de ejecución de Node.js.

Los conceptos básicos de JavaScript son los mismos para el desarrollo del lado del servidor en Node.js.

Node.js ofrece API adicionales para admitir funciones que son útiles en entornos sin navegador (por ejemplo, para crear servidores HTTP y acceder al sistema de archivos), pero no admite API de JavaScript para trabajar con el navegador y DOM.


## Guía

1. Express/Node Intro:
	
“¿Qué es Node?” y "¿Qué es Express?"
	
Descripción general del framework Express
	
Características principales, componentes
	

2. Express development environment

Configurar y probar un entorno de desarrollo Node/Express en Windows, Linux (Ubuntu) y macOS.


3. Local Library website

Proporciona una descripción general del sitio web de ejemplo de "biblioteca local" en el que trabajaremos y evolucionaremos


4. Skeleton website

Luego puede completar con rutas, plantillas/vistas y bases de datos específicas del sitio.


5.  Database with Mongoose

Presenta brevemente las bases de datos para Node/Express. 

Cómo podemos usar Mongoose para proporcionar acceso a la base de datos para el sitio web LocalLibrary.

Muestra brevemente algunas de las principales formas en que puede acceder a los datos del modelo.


6. Routes and controllers

Configuraremos rutas (código de manejo de URL) con funciones de controlador "ficticias" para todos los puntos finales de recursos que eventualmente necesitaremos en el sitio web de LocalLibrary.
 
Al finalizar, tendremos una estructura modular para nuestro código de manejo de rutas, que podemos ampliar con funciones de controlador reales.

Comprenderemos muy bien cómo crear rutas modulares usando Express.


7. Displaying library data

Ahora estamos listos para agregar las páginas que muestran los libros y otros datos del sitio web de LocalLibrary.

Las páginas incluirán una página de inicio que muestra cuántos registros tenemos de cada tipo de modelo y páginas de lista y detalles para todos nuestros modelos.

Adquiriremos experiencia práctica en la obtención de registros de la base de datos y el uso de plantillas.


8. Working with forms

Mostraremos cómo trabajar con formularios HTML en Express, usando Pug y, en particular, cómo escribir formularios para crear, actualizar y eliminar documentos de la base de datos.


9. Deploying to production

Ahora que ha creado un increíble sitio web de LocalLibrary, querrá instalarlo en un servidor web público para que el personal y los miembros de la biblioteca puedan acceder a él a través de Internet.

Descripción general de cómo puede encontrar un host para implementar su sitio web y lo que debe hacer para que su sitio esté listo para la producción.



# Express/Node Intro

Node (o más formalmente Node.js) es un entorno de ejecución multiplataforma de código abierto que permite a los desarrolladores crear todo tipo de herramientas y aplicaciones del lado del servidor en JavaScript.

El tiempo de ejecución (runtime) está diseñado para su uso fuera del contexto de un navegador (es decir, ejecutándose directamente en una computadora o sistema operativo de servidor).

Como tal, el entorno omite las API de JavaScript específicas del navegador y agrega soporte para las API de sistemas operativos más tradicionales, incluidas HTTP y bibliotecas de sistemas de archivos.


Desde la perspectiva del desarrollo de servidores web, Node tiene una serie de beneficios:

Gran performance, Node fue diseñado para optimizar el rendimiento y la escalabilidad de las aplicaciones web y es una buena solución para muchos problemas comunes de desarrollo web (por ejemplo, aplicaciones web en tiempo real).

El código está escrito en "JavaScript antiguo", lo que significa que se dedica menos tiempo a lidiar con el "cambio de contexto" entre idiomas cuando se escribe código tanto del lado del cliente como del lado del servidor.

JavaScript es un lenguaje de programación relativamente nuevo y se beneficia de mejoras en el diseño del lenguaje en comparación con otros lenguajes de servidor web tradicionales (por ejemplo, Python, PHP, etc.).

Muchos otros lenguajes nuevos y populares se compilan/convierten a JavaScript para que también pueda usar TypeScript. CoffeeScript, ClojureScript, Scala, LiveScript, etc.

El administrador de paquetes de node (npm) proporciona acceso a cientos de miles de paquetes reutilizables.

También tiene la mejor resolución de dependencias de su clase y también se puede utilizar para automatizar la mayor parte de la cadena de herramientas de compilación.

Node.js es portátil.

Está disponible en Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS y NonStop OS.

Además, cuenta con el respaldo de muchos proveedores de alojamiento web, que a menudo proporcionan infraestructura y documentación específicas para alojar sitios Node.

Tiene un ecosistema de terceros y una comunidad de desarrolladores muy activo, con mucha gente dispuesta a ayudar.


Puede utilizar Node.js para crear un servidor web simple utilizando el paquete HTTP de Node.


## Hello Node.js

El siguiente ejemplo crea un servidor web que escucha cualquier tipo de solicitud/request HTTP en la URL http://127.0.0.1:8000/.

Cuando se recibe una solicitud, el script responderá con la cadena: "Hello World". Si ya instaló node, puede seguir estos pasos para probar el ejemplo:


Abra Terminal.

Cree la carpeta donde desea guardar el programa, por ejemplo, test-node y luego ingrésela ingresando el siguiente comando en su terminal:

```
cd test-node

```

Usando su editor de texto favorito, cree un archivo llamado hello.js y pegue el siguiente código en él:

```
// Load HTTP module
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

// Create HTTP server
const server = http.createServer(function (req, res) {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body "Hello World"
  res.end("Hello World\n");
});

// Prints a log once the server starts listening
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});

```

Guarde el archivo en la carpeta que creó anteriormente

Regrese a la terminal y escriba el siguiente comando:

```
node hello.js

```

Finalmente, navegue hasta http://localhost:8000 en su navegador web.

Deberías ver el texto "Hola mundo" en la parte superior izquierda de una página web que de otro modo estaría vacía.


## Web Frameworks

Node no admite directamente otras tareas comunes de desarrollo web

Si desea agregar un manejo específico para diferentes verbos HTTP (por ejemplo, GET, POST, DELETE, etc.), manejar por separado solicitudes en diferentes URL paths ("routes"), servir archivos estáticos o usar plantillas para crear dinámicamente la respuesta, Node No será de mucha utilidad por sí solo.

¡Tendrá que escribir el código usted mismo o puede evitar reinventar la rueda y utilizar un marco web!


## Intro a Express

Es el marco web Node.js más popular y es la biblioteca subyacente para otros marcos Node.js populares.

Proporciona mecanismos para:

Escribir controladores para solicitudes con diferentes verbos HTTP en diferentes rutas URL (rutas).

Integre con motores de renderizado de "vista" para generar respuestas insertando datos en plantillas.

Establezca configuraciones comunes de aplicaciones web, como el puerto que se usará para conectarse y la ubicación de las plantillas que se usan para representar la respuesta.

Agregue "middleware" de procesamiento de solicitudes adicional en cualquier punto dentro del proceso de manejo de solicitudes.
    

Si bien Express en sí es bastante minimalista, los desarrolladores han creado paquetes de middleware compatibles para abordar casi cualquier problema de desarrollo web. 

Hay bibliotecas para trabajar con cookies, sesiones, inicios de sesión de usuarios, parámetros de URL, datos POST, encabezados de seguridad y muchos más.

Puede encontrar una lista de paquetes de middleware mantenidos por el equipo de Express en Express Middleware (junto con una lista de algunos paquetes populares de terceros).


Nota: Esta flexibilidad es un arma de doble filo.

Existen paquetes de middleware para abordar casi cualquier problema o requisito, pero encontrar los paquetes adecuados a utilizar a veces puede ser un desafío.

Tampoco existe una "forma correcta" de estructurar una aplicación, y muchos ejemplos que puede encontrar en Internet no son óptimos o solo muestran una pequeña parte de lo que necesita hacer para desarrollar una aplicación web.


## Origen de Node y Express

Node se lanzó inicialmente, solo para Linux, en 2009.

El administrador de paquetes npm se lanzó en 2010 y se agregó soporte nativo de Windows en 2012.


Express se lanzó inicialmente en noviembre de 2010 y actualmente se encuentra en la versión principal 5 de la API.

Puede consultar el registro de cambios para obtener información sobre los cambios en la versión actual (changelog) y GitHub para obtener notas históricas de la versión más detalladas.


## Popularidad de Node y Express

La popularidad de un marco web es importante porque es un indicador de si se seguirá manteniendo y de qué recursos es probable que estén disponibles en términos de documentación, bibliotecas complementarias y soporte técnico.

No existe una medida definitiva y disponible de la popularidad de los marcos del lado del servidor (aunque se puede estimar la popularidad utilizando mecanismos como contar el número de proyectos de GitHub y preguntas de Stack Overflow para cada plataforma).

Una mejor pregunta es si Node y Express son "lo suficientemente populares" como para evitar los problemas de plataformas impopulares.

¿Siguen evolucionando? ¿Puedes obtener ayuda si la necesitas? ¿Existe alguna oportunidad para que consigas un trabajo remunerado si aprendes Express?


Según la cantidad de empresas de alto perfil que utilizan Express, la cantidad de personas que contribuyen al código base y la cantidad de personas que brindan soporte gratuito y de pago, entonces sí, ¡Express es un marco popular!


## Express es opinionated

Los marcos web a menudo se refieren a sí mismos como "obstinados" (opinionated) o "sin opiniones" (unopinionated).

Los marcos obstinados son aquellos que tienen opiniones sobre la "forma correcta" de manejar cualquier tarea en particular.

A menudo apoyan el desarrollo rápido en un dominio particular (resolviendo problemas de un tipo particular) porque la forma correcta de hacer cualquier cosa suele estar bien comprendida y bien documentada.

Sin embargo, pueden ser menos flexibles a la hora de resolver problemas fuera de su ámbito principal y tienden a ofrecer menos opciones sobre qué componentes y enfoques pueden utilizar.


Los marcos sin opinión, por el contrario, tienen muchas menos restricciones sobre la mejor manera de unir componentes para lograr un objetivo, o incluso sobre qué componentes deben usarse.

Facilitan a los desarrolladores el uso de las herramientas más adecuadas para completar una tarea en particular, aunque a costa de que usted mismo necesite encontrar esos componentes.


Express no tiene opiniones (unopinionated).  

Puede insertar casi cualquier middleware compatible que desee en la cadena de manejo de solicitudes, en casi cualquier orden que desee.

Puede estructurar la aplicación en uno o varios archivos y utilizar cualquier estructura de directorio.

¡A veces puede sentir que tiene demasiadas opciones!.


## Código de Express

En un sitio web tradicional basado en datos, una aplicación web espera solicitudes HTTP del navegador web (u otro cliente).

Cuando se recibe una solicitud, la aplicación determina qué acción se necesita en función del patrón de URL y posiblemente de la información asociada contenida en los datos POST o GET. 

Dependiendo de lo que se requiera, puede leer o escribir información de una base de datos o realizar otras tareas necesarias para satisfacer la solicitud.

Luego, la aplicación devolverá una respuesta al navegador web, a menudo creando dinámicamente una página HTML para que la muestre el navegador insertando los datos recuperados en marcadores de posición en una plantilla HTML.

Puede usar el middleware Express para agregar soporte para cookies, sesiones y usuarios, obtener parámetros POST/GET, etc.

Puede usar cualquier mecanismo de base de datos compatible con Node (Express no define ningún comportamiento relacionado con la base de datos).


Primero, consideremos el ejemplo estándar de Express Hello World

Nota: Si ya tiene Node y Express instalados (o si los instala como se muestra en el siguiente artículo), puede guardar este código en un archivo de texto llamado app.js y ejecutarlo en un símbolo del sistema bash llamando a:

```
node ./app.js

```


Ejecutando localmente:

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

IFFs, callbacks y Arrow funcions

Los parametros se ejecutan como objetos en el cuerpo de la funcion al momento qeu son escritas o llamadas. 

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

Podemos usar app.method()


### Importar y crear módulos 

Un módulo es una biblioteca/archivo JavaScript que puede importar a otro código utilizando la función require() de Node.

Express en sí es un módulo, al igual que las bibliotecas de bases de datos y middleware que utilizamos en nuestras aplicaciones Express.


El siguiente código muestra cómo importamos un módulo por nombre, utilizando el marco Express como ejemplo.

Primero invocamos la función require(), especificamos el nombre del módulo como una cadena ('express') y llamamos al objeto devuelto para crear una aplicación Express.

Luego podemos acceder a las propiedades y funciones del objeto de la aplicación.

```
const express = require("express");
const app = express();

```

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


### API's asíncronas

El código JavaScript utiliza con frecuencia API asíncronas en lugar de síncronas para operaciones que pueden tardar algún tiempo en completarse.

Una API síncrona es aquella en la que cada operación debe completarse antes de que pueda comenzar la siguiente.

Por ejemplo, las siguientes funciones de registro (log) son sincrónicas e imprimirán el texto en la consola en orden (Primero, Segundo).

```
console.log("First");
console.log("Second");

```


Por el contrario, una API asincrónica es aquella en la que la API iniciará una operación y regresará inmediatamente (antes de que se complete la operación).

Una vez que finaliza la operación, la API utilizará algún mecanismo para realizar operaciones adicionales.

Por ejemplo, el siguiente código imprimirá "Segundo, Primero" porque aunque el método setTimeout() se llama primero y regresa inmediatamente, la operación no se completa durante varios segundos.

```
setTimeout(function () {
  console.log("First");
}, 3000);
console.log("Second");

```

El uso de API asincrónicas sin bloqueo es incluso más importante en Node que en el navegador porque Node es un entorno de ejecución controlado por eventos de un solo subproceso. 

"Subproceso único" significa que todas las solicitudes al servidor se ejecutan en el mismo subproceso (en lugar de generarse en procesos separados).

Este modelo es extremadamente eficiente en términos de velocidad y recursos del servidor, pero significa que si alguna de sus funciones llama a métodos sincrónicos que tardan mucho en completarse, bloquearán no solo la solicitud actual, sino todas las demás solicitudes que estén siendo manejadas por su aplicación web.


Hay varias formas para que una API asincrónica notifique a su aplicación que se ha completado.

La forma más común es registrar una función de devolución de llamada cuando invoca la API asincrónica, que se devolverá cuando se complete la operación.


La forma más común es registrar una función de devolución de llamada cuando invoca la API asincrónica, que se devolverá cuando se complete la operación.

(Devolverá un objeto/resultado solo cuando se complete, mientras puede seguir el flujo de ejecución).

Este es el enfoque utilizado anteriormente.


Nota: El uso de devoluciones de llamada puede ser bastante "confuso" si tiene una secuencia de operaciones asincrónicas dependientes que deben realizarse en orden porque esto da como resultado múltiples niveles de devoluciones de llamada anidadas.

Este problema se conoce comúnmente como "infierno de devolución de llamada".

Este problema se puede reducir mediante buenas prácticas de codificación (consulte http://callbackhell.com/), utilizando un módulo como async o refactorizando el código con funciones nativas de JavaScript como Promises y async/await.

Node ofrece la función utils.promisify para realizar la devolución de llamada → Conversión de promesa de forma ergonómica


Nota: Una convención común para Node y Express es utilizar devoluciones de llamada de error primero.

(error-first callbacks)

En esta convención, el primer valor de sus funciones de devolución de llamada es un valor de error, mientras que los argumentos posteriores contienen datos de éxito.

Hay una buena explicación de por qué este enfoque es útil en este blog: The Node.js Way - Understanding Error-First Callbacks (fredkschott.com).



### Crear manejadores de rutas

En nuestro ejemplo de Hello World Express, definimos una función de controlador de ruta (devolución de llamada) para solicitudes HTTP GET a la raíz del sitio ('/').

```
app.get("/", function (req, res) {
  res.send("Hello World!");
});

```

Tiene un parametro 1 (ruta), parametro 2, una funcion con parametros/objetos que usaremos dentro. 


La función de devolución de llamada toma una solicitud/request y un objeto de respuesta/response como argumentos.

En este caso, el método llama a send() en la respuesta para devolver la cadena "¡Hola mundo!"

Existen otros métodos de respuesta para finalizar el ciclo de solicitud/respuesta.

llamar a res.json() para enviar una respuesta JSON o res.sendFile() para enviar un archivo.


Nota: Puede utilizar cualquier nombre de argumento que desee en las funciones de devolución de llamada.

Tiene sentido nombrarlos de manera que puedas identificar el objeto con el que estás trabajando en el cuerpo de la devolución de llamada.


El objeto de aplicación Express también proporciona métodos para definir controladores de ruta para todos los demás verbos HTTP, que en su mayoría se usan exactamente de la misma manera:

checkout(), copy(), delete(), get(), head(), lock(), merge(), mkactivity(), mkcol(), move(), m-search(), notify(), options(), patch(), post(), purge(), put(), report(), search(), subscribe(), trace(), unlock(), unsubscribe().


Existe un método de enrutamiento especial, app.all(), que se llamará en respuesta a cualquier método HTTP.

Esto se utiliza para cargar funciones de middleware en una ruta particular para todos los métodos de solicitud.

El siguiente ejemplo (de la documentación de Express) muestra un controlador que se ejecutará para solicitudes a /secret independientemente del verbo HTTP utilizado (siempre que sea compatible con el módulo http).

```
app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});

```


Las rutas le permiten hacer coincidir patrones particulares de caracteres en una URL, extraer algunos valores de la URL y pasarlos como parámetros al controlador de ruta (como atributos del objeto de solicitud pasado como parámetro).


A menudo es útil agrupar controladores de ruta para una parte particular de un sitio y acceder a ellos usando un prefijo de ruta común (por ejemplo, un sitio con un Wiki puede tener todas las rutas relacionadas con el Wiki en un archivo y acceder a ellas con un prefijo de ruta /wiki/).

En Express esto se logra utilizando el objeto express.Router.

Por ejemplo, podemos crear nuestra ruta wiki en un módulo llamado wiki.js y luego exportar el objeto Router, como se muestra a continuación:

```
// wiki.js - Wiki route module

const express = require("express");
const router = express.Router();

// Home page route
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// About page route
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;

```

Nota: Agregar rutas al objeto Router es como agregar rutas al objeto aplicación (como se mostró anteriormente).


Para usar router en nuestro archivo de aplicación principal, require() the route module (wiki.js).

Luego llamaríamos a use() en la aplicación Express para agregar Router a la ruta de manejo del middleware.

Luego se podrá acceder a las dos rutas desde /wiki/ y /wiki/about/.

```
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki);

```


### Uso del middleware

El middleware se utiliza ampliamente en aplicaciones Express, para tareas que van desde servir archivos estáticos hasta el manejo de errores y comprimir respuestas HTTP.

Mientras que las funciones de ruta finalizan el ciclo de solicitud-respuesta HTTP al devolver alguna respuesta al cliente HTTP

las funciones de middleware generalmente realizan alguna operación en la solicitud o respuesta

luego llaman a la siguiente función en la "pila/stack", que podría ser más middleware o una ruta. 

El orden en el que se llama al middleware depende del desarrollador de la aplicación.


Nota:

El middleware puede realizar cualquier operación, ejecutar cualquier código, realizar cambios en el objeto de solicitud y respuesta, y también puede finalizar el ciclo de solicitud-respuesta.

Si no finaliza el ciclo, entonces debe llamar a next() para pasar el control a la siguiente función de middleware (o la solicitud quedará suspendida).


La mayoría de las aplicaciones utilizarán middleware de terceros para simplificar las tareas comunes de desarrollo web, como trabajar con cookies, sesiones, autenticación de usuarios, acceder a datos POST y JSON de solicitud, registro, etc.

Puede encontrar una lista de paquetes de middleware mantenidos por el equipo de Express. (que también incluye otros paquetes populares de terceros).

Otros paquetes Express están disponibles en el administrador de paquetes npm.


Para utilizar middleware de terceros, primero debe instalarlo en su aplicación mediante npm.

Por ejemplo, para instalar el middleware del registrador de solicitudes HTTP de Morgan, haría lo siguiente:

```
npm install morgan

```

Luego podrías llamar a use() en el objeto de la aplicación Express para agregar el middleware a la pila:

```
const express = require("express");
const logger = require("morgan");
const app = express();
app.use(logger("dev"));
// …

```

Nota:

Las funciones de middleware y enrutamiento se llaman en el orden en que se declaran. 

Para algunos middleware, el orden es importante (por ejemplo, si el middleware de sesión depende del middleware de cookies, primero se debe agregar el controlador de cookies).

Casi siempre se da el caso de que se llama al middleware antes de configurar rutas, o sus controladores de ruta no tendrán acceso a la funcionalidad agregada por su middleware.


Puede escribir sus propias funciones de middleware y es probable que tenga que hacerlo (aunque sólo sea para crear código de manejo de errores).

La única diferencia entre una función de middleware y una devolución de llamada de controlador de ruta es que las funciones de middleware tienen un tercer argumento a continuación, qué funciones de middleware se espera que llamen si no son las que completan el ciclo de solicitud (cuando se llama a la función de middleware, esta contiene el siguiente función que debe ser llamada).


Puede agregar una función de middleware a la cadena de procesamiento para todas las respuestas con app.use(), o para un verbo HTTP específico usando el método asociado: app.get(), app.post(), etc.

Las rutas se especifican en el de la misma manera en ambos casos, aunque la ruta es opcional cuando se llama a app.use().


El siguiente ejemplo muestra cómo puede agregar la función de middleware utilizando ambos enfoques y con/sin una ruta.

```
const express = require("express");
const app = express();

// An example middleware function
const a_middleware_function = function (req, res, next) {
  // Perform some operations
  next(); // Call next() so Express will call the next middleware function in the chain.
};

// Function added with use() for all routes and verbs
app.use(a_middleware_function);

// Function added with use() for a specific route
app.use("/some-route", a_middleware_function);

// A middleware function added for a specific HTTP verb and route
app.get("/", a_middleware_function);

app.listen(3000);

```

Nota:

Arriba declaramos la función de middleware por separado y luego la configuramos como devolución de llamada.

En nuestra función de controlador de ruta anterior declaramos la función de devolución de llamada cuando se usó.

En JavaScript, cualquier enfoque es válido.


La documentación de Express tiene mucha más documentación excelente sobre el uso y la escritura del middleware Express.


### Servir archivos estáticos

Puede utilizar el middleware express.static para servir archivos estáticos, incluidas sus imágenes, CSS y JavaScript (static() es la única función de middleware que en realidad forma parte de Express).

Por ejemplo, usaría la siguiente línea para servir imágenes, archivos CSS y archivos JavaScript desde un directorio llamado "público" en el mismo nivel donde llama a node:

```
app.use(express.static("public"));

```

Cualquier archivo en el directorio público se sirve agregando su nombre de archivo (relativo al directorio "público" base) a la URL base. Así por ejemplo:

```
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html

```


Puede llamar a static() varias veces para servir a varios directorios.

Si una función de middleware no puede encontrar un archivo, se pasará al middleware siguiente (el orden en que se llama al middleware se basa en su orden de declaración).

```
app.use(express.static("public"));
app.use(express.static("media"));

```

También puede crear un prefijo virtual para sus URL estáticas, en lugar de agregar los archivos a la URL base.

Por ejemplo, aquí especificamos una ruta de montaje para que los archivos se carguen con el prefijo "/media":

```
app.use("/media", express.static("public"));

```

Ahora, puede cargar los archivos que están en el directorio público desde el prefijo de ruta /media.

```
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3

```


### Manejo de errores

Los errores son manejados por una o más funciones especiales de middleware que tienen cuatro argumentos, en lugar de los tres habituales: (err, req, res, next).

```
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

```

Estos pueden devolver cualquier contenido requerido, pero deben llamarse después de todos los demás app.use() y enrutan las llamadas para que sean el último middleware en el proceso de manejo de solicitudes.


Express viene con un controlador de errores incorporado, que se encarga de cualquier error restante que pueda surgir en la aplicación.

Esta función de middleware de manejo de errores predeterminada se agrega al final de la pila de funciones de middleware.

Si pasa un error a next() y no lo maneja en un controlador de errores, será manejado por el controlador de errores integrado; el error se escribirá en el cliente con el seguimiento de la pila.


Nota:

El seguimiento de la pila no está incluido en el entorno de producción.

Para ejecutarlo en modo de producción, debe configurar la variable de entorno NODE_ENV en "producción".


Nota:

HTTP404 y otros códigos de estado de "error" no se tratan como errores.

Si desea manejarlos, puede agregar una función de middleware para hacerlo.

En express faq doc.


### Usar base de datos

Las aplicaciones Express pueden usar cualquier mecanismo de base de datos compatible con Node (Express en sí no define ningún comportamiento/requisito adicional específico para la administración de bases de datos).

Hay muchas opciones, incluidas PostgreSQL, MySQL, Redis, SQLite, MongoDB, etc.


Para poder usarlos, primero debe instalar el controlador de la base de datos usando npm.

Por ejemplo, para instalar el controlador para el popular NoSQL MongoDB, usaría el comando:

```
npm install mongodb

```

La base de datos en sí se puede instalar localmente o en un servidor en la nube.

En su código Express, necesita el controlador, conectarse a la base de datos y luego realizar operaciones de creación, lectura, actualización y eliminación (CRUD).

El siguiente ejemplo (de la documentación de Express) muestra cómo puede encontrar registros de "mamíferos" utilizando MongoDB.


Esto funciona con versiones anteriores de MongoDB versión ~ 2.2.33:

```
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/animals", (err, db) => {
  if (err) throw err;

  db.collection("mammals")
    .find()
    .toArray((err, result) => {
      if (err) throw err;

      console.log(result);
    });
});

```


Para MongoDB versión 3.0 y superiores:

```
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/animals", (err, client) => {
  if (err) throw err;

  const db = client.db("animals");
  db.collection("mammals")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      client.close();
    });
});

```


Otro enfoque popular es acceder a su base de datos indirectamente, a través de un Mapeador relacional de objetos ("ORM"). 

En este enfoque, usted define sus datos como "objetos" o "modelos" y el ORM los asigna al formato de la base de datos subyacente. 

Este enfoque tiene la ventaja de que, como desarrollador, puede seguir pensando en términos de objetos JavaScript en lugar de semántica de bases de datos, y de que existe un lugar obvio para realizar la validación y verificación de los datos entrantes. 

Doc en Database Integration express


### Renderizar datos 

Los motores de plantillas (también denominados "motores de visualización" en Express) le permiten especificar la estructura de un documento de salida en una plantilla, utilizando marcadores de posición para los datos que se completarán cuando se genere una página.

Las plantillas se utilizan a menudo para crear HTML, pero también pueden crear otros tipos de documentos.


Express admite varios motores de plantillas, en particular Pug (anteriormente "Jade"), Moustache y EJS.

Cada uno tiene sus propios puntos fuertes para abordar casos de uso particulares (las comparaciones relativas se pueden encontrar fácilmente mediante una búsqueda en Internet).

El generador de aplicaciones Express utiliza Jade como predeterminado, pero también admite varios otros.

```
const express = require("express");
const path = require("path");
const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");

```


La apariencia de la plantilla dependerá del motor que utilices.

Suponiendo que tiene un archivo de plantilla llamado "index.<template_extension>" que contiene marcadores de posición para variables de datos denominadas "título" y "mensaje", llamaría a Response.render() en una función de controlador de ruta para crear y enviar la respuesta HTML. :

```
app.get("/", function (req, res) {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});

```

Doc en templete engines en Express


### Estructura de archivos

Express no hace suposiciones en términos de estructura o qué componentes utiliza. 

Las rutas, vistas, archivos estáticos y otra lógica específica de la aplicación pueden residir en cualquier cantidad de archivos con cualquier estructura de directorios.

Si bien es perfectamente posible tener toda la aplicación Express en un solo archivo, normalmente tiene sentido dividir la aplicación en archivos según la función (por ejemplo, administración de cuentas, blogs, foros de discusión) y el dominio del problema arquitectónico (por ejemplo, modelo, vista o controlador, si resulta que estás utilizando una arquitectura MVC).


Ahora debería comprender los principales beneficios de Express y Node.

Cómo se verían las partes principales de una aplicación Express (rutas, middleware, manejo de errores y código de plantilla).

También debe comprender que, dado que Express es un marco sin opiniones, la forma en que reúne estas partes y las bibliotecas que utiliza dependen en gran medida de usted.

Express es deliberadamente un marco de aplicación web muy liviano, por lo que gran parte de sus beneficios y potencial provienen de bibliotecas y funciones de terceros.



# Entorno de Desarrollo

Configurar y probar un entorno de desarrollo Node/Express en Windows, Linux (Ubuntu) o macOS.

Node y Express hacen que sea muy fácil configurar su computadora para comenzar a desarrollar aplicaciones web.


El entorno de desarrollo Express incluye una instalación de Nodejs, el administrador de paquetes npm y (opcionalmente) Express Application Generator en su computadora local.

Node y el administrador de paquetes npm se instalan juntos desde paquetes binarios preparados, instaladores, administradores de paquetes del sistema operativo o desde el código fuente

Luego, npm instala Express como una dependencia de sus aplicaciones web Express individuales (junto con otras bibliotecas como motores de plantillas, controladores de bases de datos, middleware de autenticación, middleware para servir archivos estáticos, etc.).


npm también se puede utilizar para instalar (globalmente) Express Application Generator, una herramienta útil para crear aplicaciones web esqueleto Express que siguen el patrón MVC.

El generador de aplicaciones es opcional porque no necesita usar esta herramienta para crear aplicaciones que usen Express o construir aplicaciones Express que tengan el mismo diseño arquitectónico o dependencias.

Sin embargo, lo usaremos porque hace que comenzar sea mucho más fácil y promueve una estructura de aplicación modular.


Nota: 

A diferencia de otros marcos web, el entorno de desarrollo no incluye un servidor web de desarrollo independiente.

En Node/Express una aplicación web crea y ejecuta su propio servidor web

Existen otras herramientas periféricas que forman parte de un entorno de desarrollo típico, incluidos editores de texto o IDE para editar código y herramientas de administración de control de fuente como Git para administrar de forma segura diferentes versiones de su código.


### Ejecutando Node

Node se puede ejecutar en Windows, macOS, muchas versiones de Linux, Docker, etc.

Express se ejecuta en un entorno Node y, por lo tanto, puede ejecutarse en cualquier plataforma que ejecute Node.


### Version de Node/Express

Hay muchas versiones de Node: las versiones más recientes contienen correcciones de errores, compatibilidad con versiones más recientes de los estándares ECMAScript (JavaScript) y mejoras en las API de Node.

general, debe utilizar la versión LTS (compatible a largo plazo) más reciente, ya que será más estable que la versión "actual" y al mismo tiempo tendrá características relativamente recientes (y aún se mantiene activamente).

Debe utilizar la versión actual si necesita una función que no está presente en la versión LTS.


Para Express siempre debes usar la última versión.


### Bases de datos y otras dependencias 

Otras dependencias, como controladores de bases de datos, motores de plantillas, motores de autenticación, etc., son parte de la aplicación y se importan al entorno de la aplicación mediante el administrador de paquetes npm.


## Instalar Node 

Para utilizar Express, deberá instalar Nodejs y Node Package Manager (npm) en su sistema operativo.

Para facilitar esto, primero instalaremos un administrador de versiones de Node.

Luego lo usaremos para instalar las últimas versiones soportadas a largo plazo (LTS) de node y npm.


Nota: 

También puede instalar nodejs y npm con los instaladores proporcionados en https://nodejs.org

Puede instalar usando el administrador de paquetes del sistema operativo.

Recomendamos encarecidamente utilizar un administrador de versiones de nodo, ya que facilita la instalación, actualización y cambio entre cualquier versión particular de node y npm.


### Windows

Hay varios administradores de versiones de node para Windows.

Instale la última versión utilizando el instalador de su elección desde la página nvm-windows/releases

Después de instalar nvm-windows, abra un símbolo del sistema (o PowerShell) e ingrese el siguiente comando para descargar la versión LTS más reciente de nodejs y npm:

```
nvm install lts

```

La version v22.12.0 es lts 

Puede configurar esto como la versión actual para usar con el siguiente comando:

```
use nvm 22.12.0

```

Nota: 

Si recibe advertencias de "Acceso denegado", deberá ejecutar este comando en un mensaje con permisos de administración.

Utilice el comando nvm --help para conocer otras opciones de la línea de comandos, como enumerar todas las versiones de node disponibles y todas las versiones de NVM descargadas.


### Linux/Unix

Hay varios administradores de versiones de nodos para Ubuntu y macOS.

Ver nvm > Install & Update Script en github/nvm-sh para obtener instrucciones del terminal para instalar la última versión de nvm.


### Instalar y actualizar nvm

nvm es un administrador de versiones para node.js, diseñado para instalarse por usuario e invocarse por shell.

nvm funciona en cualquier shell compatible con POSIX (sh, dash, ksh, zsh, bash), en particular en estas plataformas: Unix, macOS y Windows WSL.


Instalar y actualizar script

Para instalar o actualizar nvm, debe ejecutar el script de instalación.

Para hacerlo, puede descargar y ejecutar el script manualmente o usar el siguiente comando cURL o Wget:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

```

o

```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

```

Al ejecutar cualquiera de los comandos anteriores, se descarga un script y lo ejecuta.

El script clona el repositorio nvm en ~/.nvm e intenta agregar las líneas fuente del fragmento siguiente al archivo de perfil correcto (~/.bash_profile, ~/.zshrc, ~/.profile o ~/.bashrc). 

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

```

Notas:

Si la variable de entorno $XDG_CONFIG_HOME está presente, colocará los archivos nvm allí.

Puede agregar --no-use al final del script anterior (...nvm.sh --no-use) para posponer el uso de nvm hasta que lo use manualmente.

Puede personalizar el origen, el directorio, el perfil y la versión de la instalación utilizando las variables NVM_SOURCE, NVM_DIR, PROFILE y NODE_VERSION.

Eg: curl ... | NVM_DIR="path/to/nvm".

Asegúrese de que NVM_DIR no contenga una barra diagonal.

El instalador puede usar git, curl o wget para descargar nvm, el que esté disponible.

Puede indicarle al instalador que no edite su configuración de shell (por ejemplo, si ya obtiene completaciones a través de un complemento zsh nvm) configurando PROFILE=/dev/null antes de ejecutar el script install.sh.
    
Aquí hay un ejemplo de comando de una línea para hacer eso:

PROFILE=/dev/null bash -c 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash'

    
### Solucionar problemas en linux

En Linux, después de ejecutar el script de instalación, si obtiene nvm: comando no encontrado o no ve comentarios de su terminal después de escribir el comando -v nvm

Simplemente cierre su terminal actual, abra una nueva terminal e intente verificar nuevamente.

Alternativamente, puede ejecutar los siguientes comandos para los diferentes shells en la línea de comandos:

bash: 

```
source ~/.bashrc

```

zsh: 

```
source ~/.zshrc

```

ksh: 

```
. ~/.profile

```

Esto debería captar el comando nvm.

    
### Verificar instalación de nvm

Para verificar que nvm se haya instalado, haga:

```
command -v nvm

```

Debería generar nvm si la instalación fue exitosa.

Tenga en cuenta que nvm no funcionará, ya que nvm es una función de shell de origen, no un binario ejecutable.


Nota:

En Linux, después de ejecutar el script de instalación, si obtiene nvm: comando no encontrado o no ve comentarios de su terminal después de escribir el comando -v nvm, simplemente cierre su terminal actual, abra una nueva terminal e intente verificar nuevamente.


### Uso de nvm

Para descargar, compilar e instalar la última versión de node, haga esto:

```
nvm install node # "node" is an alias for the latest version

```

Para instalar una versión específica de node:

```
nvm install 14.7.0 # or 16.3.0, 12.22.1, etc

```

Para establecer un alias:

```
nvm alias my_alias v14.4.0

```

Asegúrese de que su alias no contenga espacios ni barras.


La primera versión instalada se convierte en la predeterminada.

Los nuevos shells comenzarán con la versión predeterminada de node (por ejemplo, nvm alias default).


Puede enumerar las versiones disponibles usando:

```
nvm ls-remote:

```

Y luego, en cualquier shell nuevo, simplemente use la versión instalada:

```
nvm use node

```

O simplemente puedes ejecutarlo:

```
nvm run node --version

```

O puede ejecutar cualquier comando arbitrario en un subshell con la versión deseada del nodo:

```
nvm exec 4.2 node --version

```

También puede obtener la ruta al ejecutable donde se instaló:

```
nvm which 12.22

```


Después de instalar nvm, abra una terminal e ingrese el siguiente comando para descargar la versión LTS más reciente de nodejs y npm:

```
nvm install --lts

```

Al momento la versión LTS de nodejs es 22.12.0
 
El comando nvm list muestra el conjunto de versiones descargadas y la versión actual.

Puede configurar una versión particular como la versión actual con el siguiente comando (el mismo que para nvm-windows)

```
nvm use 22.12.0

```

Utilice el comando nvm --help para conocer otras opciones de la línea de comandos.

Suelen ser similares o iguales a los que ofrece nvm-windows.


### Testear la instalación de Node y npm

Una vez que haya configurado nvm para usar una versión de node particular, puede probar la instalación.

Una buena manera de hacer esto es usar el comando "versión" en su terminal/símbolo del sistema y verificar que se devuelva la cadena de versión esperada:

```
> node -v
v22.12.0

```

El administrador de paquetes npm de Nodejs también debería haberse instalado y se puede probar de la misma manera:

```
> npm -v
10.9.0

```


Como prueba un poco más interesante, creemos un servidor de "nodo puro" muy básico que imprima "Hola mundo" en el navegador cuando visite la URL correcta en su navegador:

1. Copie el siguiente texto en un archivo llamado hellonode.js.

Esto utiliza características puras de Node (nada de Express):

```
//Load HTTP module
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

```

El código importa el módulo "http" y lo usa para crear un servidor (createServer()) que escucha las solicitudes HTTP en el puerto 3000.

Luego, el script imprime un mensaje en la consola sobre qué URL del navegador puede usar para probar el servidor.

La función createServer() toma como argumento una función de devolución de llamada que se invocará cuando se reciba una solicitud HTTP.

Esto devuelve una respuesta con un código de estado HTTP de 200 ("OK") y el texto sin formato "Hello World".


2. Inicie el servidor navegando al mismo directorio que su archivo hellonode.js en su símbolo del sistema y llamando a node junto con el nombre del script, así:

```
node hellonode.js

``` 

Una vez que se inicie el servidor, verá la salida de la consola que indica la dirección IP en la que se está ejecutando el servidor:

```
Server running at http://127.0.0.1:3000/

```


3. Navegue hasta la URL http://127.0.0.1:3000.

Si todo funciona, el navegador debería mostrar la cadena


## Usando npm

Después del propio Node, npm es la herramienta más importante para trabajar con aplicaciones de Node.

npm se usa para recuperar cualquier paquete (bibliotecas de JavaScript) que una aplicación necesita para desarrollo, prueba y/o producción, y también se puede usar para ejecutar pruebas y herramientas utilizadas en el proceso de desarrollo.


Nota: 

Desde la perspectiva de Node, Express es solo otro paquete que necesita instalar usando npm y luego solicitarlo en su propio código.


Puede usar npm manualmente para recuperar por separado cada paquete necesario. 

Por lo general, administramos las dependencias utilizando un archivo de definición de texto sin formato llamado paquete.json.

Este archivo enumera todas las dependencias de un "paquete" de JavaScript específico, incluido el nombre del paquete, la versión, la descripción, el archivo inicial a ejecutar, las dependencias de producción, las dependencias de desarrollo, las versiones de Node con las que puede trabajar, etc.

El archivo package.json debe contiene todo lo que npm necesita para recuperar y ejecutar su aplicación (si estuviera escribiendo una biblioteca reutilizable, podría usar esta definición para cargar su paquete en el repositorio de npm y ponerlo a disposición de otros usuarios).


### Agregar dependencias

Usar npm para descargar un paquete, guardarlo en las dependencias del proyecto y luego solicitarlo en una aplicación Node.


Nota:

Mostramos las instrucciones para recuperar e instalar el paquete Express. Más adelante mostraremos cómo este paquete y otros ya están especificados para nosotros usando Express Application Generator.

Se proporciona porque es útil para comprender cómo funciona npm y qué crea el generador de aplicaciones.


1. Primero cree un directorio para su nueva aplicación y navegue hasta él:

```
mkdir myapp
cd myapp

```


2. Utilice el comando npm init para crear un archivo package.json para su aplicación.

Este comando le solicita una serie de cosas, incluido el nombre y la versión de su aplicación y el nombre del archivo de punto de entrada inicial (de forma predeterminada, es index.js).

Por ahora, simplemente acepte los valores predeterminados:

```
npm init

```

Si muestra el archivo package.json (cat package.json), verá los valores predeterminados que aceptó, terminando con la licencia.

```
{
  "name": "myapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

```


3. Ahora instale Express en el directorio myapp y guárdelo en la lista de dependencias de su archivo package.json: 

```
 npm install express

```

La sección de dependencias de su paquete.json ahora aparecerá al final del archivo package.json e incluirá Express.

```
{
  "name": "myapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}

```


4. Para usar la biblioteca Express, llame a la función require() en su archivo index.js para incluirla en su aplicación.

Cree este archivo ahora, en la raíz del directorio de la aplicación "myapp", y proporciónele el siguiente contenido:

```
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

``` 

Este código muestra una aplicación web Express mínima "HelloWorld".

Esto importa el módulo "express" usando require() y lo usa para crear un servidor (aplicación) que escucha las solicitudes HTTP en el puerto 3000 e imprime un mensaje en la consola explicando qué URL del navegador puede usar para probar el servidor.


Nota: 

Las comillas invertidas en (`¡Aplicación de ejemplo escuchando en el puerto ${port}!`) nos permiten interpolar el valor de $port en la cadena.


5. Puede iniciar el servidor llamando a node con el script en su símbolo del sistema:

```
node index.js

```

Verá el siguiente resultado de consola:

```
Example app listening on port 3000

```
 
 
6. Navegue hasta la URL http://localhost:3000/. 

Si todo funciona, el navegador debería mostrar la cadena "¡Hola mundo!".


### Development dependencies

Si una dependencia solo se usa durante el desarrollo, debe guardarla como una "dependencia de desarrollo" (para que los usuarios de su paquete no tengan que instalarlo en producción).

Por ejemplo, para utilizar la popular herramienta JavaScript Linting ESLint, llamarías a npm como se muestra:

```
npm install eslint --save-dev

```

Luego se agregará la siguiente entrada al paquete.json de su aplicación:

```
  "devDependencies": {
    "eslint": "^7.10.0"
  }

```

Los "Linters" son herramientas que realizan análisis estáticos en el software para reconocer e informar el cumplimiento o no cumplimiento de algún conjunto de mejores prácticas de codificación.


### Run tasks

Además de definir y recuperar dependencias, también puede definir scripts con nombre en sus archivos package.json y llamar a npm para ejecutarlos con el comando run-script

Este enfoque se usa comúnmente para automatizar la ejecución de pruebas y partes del desarrollo o crear una cadena de herramientas (por ejemplo, ejecutar herramientas para minimizar JavaScript, reducir imágenes, LINT/analizar su código, etc.).


Nota: 

Los ejecutores de tareas como Gulp y Grunt también se pueden utilizar para ejecutar pruebas y otras herramientas externas.


Por ejemplo, para definir un script para ejecutar la dependencia de desarrollo de eslint que especificamos en la sección anterior, podríamos agregar el siguiente bloque de script a nuestro archivo package.json (asumiendo que el origen de nuestra aplicación está en una carpeta /src/js):

```
"scripts": {
  // …
  "lint": "eslint src/js"
  // …
}

```

Para explicar un poco más, eslint src/js es un comando que podemos ingresar en nuestra terminal/línea de comando para ejecutar eslint en archivos JavaScript contenidos en el directorio src/js dentro del directorio de nuestra aplicación.

Incluir lo anterior dentro del archivo package.json de nuestra aplicación proporciona un acceso directo para este comando: lint.


Entonces podríamos ejecutar eslint usando npm llamando

```
npm run-script lint
# OR (using the alias)
npm run lint

```

Es posible que este ejemplo no parezca más corto que el comando original, pero puede incluir comandos mucho más grandes dentro de sus scripts npm, incluidas cadenas de múltiples comandos. 

Podría identificar un único script npm que ejecute todas las pruebas a la vez.


## Express App Generator

Genera un "esqueleto" de aplicación Express.

Instale el generador usando npm como se muestra:

```
npm install express-generator -g

```

Nota: 

Es posible que deba anteponer esta línea con sudo en Ubuntu o macOS.

El indicador -g instala la herramienta globalmente para que pueda llamarla desde cualquier lugar.


Para crear una aplicación Express llamada "helloworld" con la configuración predeterminada, navegue hasta donde desea crearla y ejecute la aplicación como se muestra:

```
express helloworld

```

Nota: 

A menos que esté utilizando una versión antigua de Nodejs (< 8.2.0), también puede omitir la instalación y ejecutar express-generator con npx

Esto tiene el mismo efecto que instalar y luego ejecutar express-generator pero no instala el paquete en su sistema

```
npx express-generator helloworld

```

También puede especificar la biblioteca de plantillas que se utilizará y otras configuraciones. 

Utilice el comando de ayuda para ver todas las opciones:

```
express --help

```

El generador creará la nueva aplicación Express en una subcarpeta de su ubicación actual y mostrará el progreso de la compilación en la consola.

Al finalizar, la herramienta mostrará los comandos que debe ingresar para instalar las dependencias del Node e iniciar la aplicación.


La nueva aplicación tendrá un archivo package.json en su directorio raíz.

Puede abrir esto para ver qué dependencias están instaladas, incluidas Express y la biblioteca de plantillas Jade:

```
{
  "name": "helloworld",
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
    "jade": "~1.11.0",
    "morgan": "~1.9.1"
  }
}

```


Instale todas las dependencias de la aplicación helloworld usando npm como se muestra:

```
cd helloworld
npm install

```

Luego ejecute la aplicación (los comandos son ligeramente diferentes para Windows y Linux/macOS), como se muestra a continuación:

```
# Run helloworld on Windows with Command Prompt
SET DEBUG=helloworld:* & npm start

# Run helloworld on Windows with PowerShell
SET DEBUG=helloworld:* | npm start

# Run helloworld on Linux/macOS
DEBUG=helloworld:* npm start

```

El comando DEBUG crea un registro útil, lo que da como resultado un resultado como el siguiente:

```
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\express-tests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms

```

Abra un navegador y navegue hasta http://localhost:3000/ para ver la página de bienvenida Express predeterminada.



# The Local Library web

Una descripción general del sitio web de ejemplo de "biblioteca local" en el que trabajaremos y evolucionaremos


Desarrollamos un sitio web que podría usarse para administrar el catálogo de una biblioteca local.

Deberíamos aprender y usar:

Utilice la herramienta Express Application Generator para crear un sitio web y una aplicación básicos.

Inicie y detenga el servidor web de Node.

Utilice una base de datos para almacenar los datos de su aplicación.

Cree rutas para solicitar información diferente y plantillas ("vistas") para representar los datos como HTML que se mostrarán en el navegador.

Trabajar con formularios

Implemente su aplicación en producción.


Con esto deberías saber lo suficiente para desarrollar aplicaciones Express simples por ti mismo.


## LocalLibrary website

LocalLibrary es el nombre del sitio web que crearemos y evolucionaremos

Como era de esperar, el propósito del sitio web es proporcionar un catálogo en línea para una pequeña biblioteca local, donde los usuarios pueden buscar libros disponibles y administrar sus cuentas.

Este ejemplo se ha elegido cuidadosamente porque puede escalarse para mostrar tantos o pocos detalles como necesitemos, y puede usarse para mostrar casi cualquier característica de Express.

Más importante aún, nos permite brindarle una ruta guiada a través de la funcionalidad que necesitará en cualquier sitio web:


1. Definiremos una biblioteca simple de navegación que los miembros de la biblioteca pueden usar para averiguar qué libros están disponibles.

 Esto nos permite explorar las operaciones que son comunes a casi todos los sitios web: leer y mostrar contenido de una base de datos.


2. A medida que avanzamos, el ejemplo de la biblioteca se amplía naturalmente para demostrar funciones más avanzadas del sitio web.

 Por ejemplo, podemos ampliar la biblioteca para permitir la creación de nuevos libros y usar esto para demostrar cómo usar formularios y admitir la autenticación de usuarios.


Aunque este es un ejemplo muy extensible, se llama LocalLibrary por una razón: esperamos mostrar la información mínima que lo ayudará a comenzar a utilizar Express rápidamente.

Como resultado, almacenaremos información sobre libros, copias de libros, autores y otra información clave.

Sin embargo, no almacenaremos información sobre otros artículos que una biblioteca pueda prestar, ni proporcionaremos la infraestructura necesaria para admitir múltiples sitios de biblioteca u otras funciones de "gran biblioteca".



# Esqueleto del sitio

Muestra cómo puede crear un proyecto de sitio web "esqueleto" que luego puede completar con rutas, plantillas/vistas y llamadas a bases de datos específicas del sitio.


## Descripción general 

Muestra cómo puede crear un sitio web "esqueleto" utilizando la herramienta Express Application Generator, que luego puede completar con rutas, vistas/plantillas y llamadas a bases de datos específicas del sitio.

En este caso, usaremos la herramienta para crear el marco para nuestro sitio web de biblioteca local, al que luego agregaremos todo el resto del código que necesita el sitio.

El proceso es extremadamente simple y solo requiere que invoque el generador en la línea de comando con un nuevo nombre de proyecto, especificando opcionalmente también el motor de plantillas del sitio y el generador de CSS.


Las siguientes secciones le muestran cómo llamar al generador de aplicaciones y brindan una pequeña explicación sobre las diferentes opciones de vista/CSS. 

También explicaremos cómo está estructurado el sitio web básico.

Al final, le mostraremos cómo puede ejecutar el sitio web para verificar que funciona.

Nota:

Express Application Generator no es el único generador de aplicaciones Express y el proyecto generado no es la única forma viable de estructurar sus archivos y directorios.

Sin embargo, el sitio generado tiene una estructura modular que es fácil de ampliar y comprender.

Para obtener información sobre una aplicación Express mínima, consulte el ejemplo Hola mundo (documentos Express).


El Generador de Aplicaciones Express declara la mayoría de las variables usando var.

Hemos cambiado la mayoría de estos a constantes (y algunos a let) en el tutorial, porque queremos demostrar la práctica moderna de JavaScript.


Este tutorial utiliza la versión de Express y otras dependencias definidas en el paquete.json creado por Express Application Generator.

Estas no son (necesariamente) la última versión y es posible que desee actualizarlas al implementar una aplicación real en producción.


## Usar app generator

Instalar el generador como parte de la configuración de un entorno de desarrollo de Node.

Instale la herramienta generadora en todo el sitio utilizando el administrador de paquetes npm, como se muestra:

```
npm install express-generator -g

```

El generador tiene varias opciones, que puede ver en la línea de comando usando el comando --help (o -h):


Puede especificar express para crear un proyecto dentro del directorio actual utilizando el motor de visualización Jade y CSS simple (si especifica un nombre de directorio, el proyecto se creará en una subcarpeta con ese nombre).

```
express

```

También puede elegir un motor de vista (plantilla) usando --view y/o un motor de generación de CSS usando --css.


Nota: 
Las otras opciones para elegir motores de plantillas (por ejemplo, --hogan, --ejs, --hbs, etc.) están en desuso. 

Utilice --view (o -v).


### View engine

Express Application Generator le permite configurar varios motores de visualización/plantillas populares, incluidos EJS, Hbs, Pug (Jade), Twig y Vash, aunque elige Jade de forma predeterminada si no especifica una opción de visualización. 

Express también puede admitir una gran cantidad de otros lenguajes de plantillas listos para usar.


Nota: 

Si desea utilizar un motor de plantillas que no es compatible con el generador, consulte Uso de motores de plantillas con Express (documentos Express) y la documentación de su motor de vista de destino.


En términos generales, debe seleccionar un motor de plantillas que ofrezca todas las funciones que necesita y le permita ser productivo antes; o en otras palabras, ¡de la misma manera que elige cualquier otro componente!

Algunas de las cosas a considerar al comparar motores de plantillas:


1. Tiempo para la productividad:

si su equipo ya tiene experiencia con un lenguaje de plantillas, es probable que sean productivos más rápido usando ese lenguaje.

De lo contrario, debería considerar la curva de aprendizaje relativa para los motores de plantillas candidatos.


2. Popularidad y actividad:

revise la popularidad del motor y si tiene una comunidad activa.

Es importante poder obtener asistencia cuando surjan problemas durante la vida útil del sitio web.


3. Estilo:

algunos motores de plantillas utilizan marcas específicas para indicar el contenido insertado dentro de HTML "normal", mientras que otros construyen el HTML utilizando una sintaxis diferente (por ejemplo, utilizando sangría y nombres de bloques).


4. Tiempo de rendimiento/renderizado


5. Funciones

debe considerar si los motores que analiza tienen las siguientes funciones disponibles:

Herencia de diseño:

le permite definir una plantilla base y luego "heredar" solo las partes que desea que sean diferentes para una página en particular.

Este suele ser un mejor enfoque que crear plantillas al incluir una cantidad de componentes necesarios o crear una plantilla desde cero cada vez.


Soporte de 'include':

Le permite crear plantillas incluyendo otras plantillas.


Sintaxis concisa de control de bucles y variables.


Capacidad para filtrar valores de variables a nivel de plantilla, como poner las variables en mayúsculas o formatear un valor de fecha.


Capacidad para generar formatos de salida distintos de HTML, como JSON o XML.


Soporte para operaciones asíncronas y streaming.


Funciones del lado del cliente:

Si se puede utilizar un motor de plantillas en el cliente, esto permite la posibilidad de realizar todo o la mayor parte del renderizado en el lado del cliente.


Nota: ¡Hay muchos recursos en Internet que le ayudarán a comparar las diferentes opciones!


Para este proyecto, usaremos el motor de plantillas Pug (este es el motor Jade recientemente renombrado), ya que es uno de los lenguajes de plantillas Express/JavaScript más populares y el generador lo admite desde el primer momento.


### CSS style engine

Express Application Generator le permite crear un proyecto configurado para utilizar los motores de hojas de estilo CSS más comunes: LESS, SASS, Stylus.


Nota: CSS tiene algunas limitaciones que dificultan determinadas tareas.

Los motores de hojas de estilo CSS le permiten utilizar una sintaxis más potente para definir su CSS y luego compilar la definición en CSS antiguo para que lo utilicen los navegadores.


Al igual que con los motores de plantillas, debes utilizar el motor de hojas de estilo que permitirá a tu equipo ser más productivo.

Para este proyecto, usaremos CSS básico (el predeterminado), ya que nuestros requisitos de CSS no son lo suficientemente complicados como para justificar el uso de cualquier otra cosa.


### Database

El código generado no utiliza ni incluye ninguna base de datos.

Las aplicaciones Express pueden usar cualquier mecanismo de base de datos compatible con Node (Express en sí no define ningún comportamiento/requisito adicional específico para la administración de bases de datos).

En express database integration podemos ver una guía.


## Crear proyecto

Para la aplicación de biblioteca local de muestra que vamos a crear, crearemos un proyecto llamado express-locallibrary-tutorial usando la biblioteca de plantillas Pug y sin motor CSS.

Primero, navegue hasta donde desea crear el proyecto y luego ejecute Express Application Generator en el símbolo del sistema como se muestra:

```
express express-locallibrary-tutorial --view=pug

```

El generador creará (y enumerará) los archivos del proyecto.

Al final del resultado, el generador proporciona instrucciones sobre cómo instalar las dependencias (como se enumeran en el archivo package.json) y cómo ejecutar la aplicación en diferentes sistemas operativos.


Nota: 

Los archivos creados por el generador definen todas las variables como var.

Abra todos los archivos generados y cambie las declaraciones var a const antes de continuar (el resto del tutorial asume que ya lo ha hecho).


## Ejecutar el esqueleto web

En este punto, tenemos un proyecto esqueleto completo.

En realidad, el sitio web todavía no hace mucho, pero vale la pena ejecutarlo para demostrar que funciona.


1. Primero, instale las dependencias (el comando de instalación buscará todos los paquetes de dependencia enumerados en el archivo package.json del proyecto).

```
cd express-locallibrary-tutorial
npm install

```


2. Ejecutar la aplicación.

En Windows CMD 

```
SET DEBUG=express-locallibrary-tutorial:* & npm start

```

En Windows PowerShell

```
ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start

```

En Linux/Unix

```
DEBUG=express-locallibrary-tutorial:* npm start

```


3. Luego cargue http://localhost:3000/ en su navegador para acceder a la aplicación.

Deberías ver una página de bienvenida personalizada por Express.

Ahora tiene una aplicación Express en funcionamiento a la que se puede acceder a través del puerto 3000.


Nota:

También puedes iniciar la aplicación simplemente usando el comando npm start.

```
npm start

```

Especificar la variable DEBUG como se muestra permite el registro/depuración de la consola.

Por ejemplo, cuando visite la página anterior verá un resultado de depuración como este:

```
SET DEBUG=express-locallibrary-tutorial:* & npm start

```

```
> express-locallibrary-tutorial@0.0.0 start D:\github\mdn\test\exprgen\express-locallibrary-tutorial
> node ./bin/www

  express-locallibrary-tutorial:server Listening on port 3000 +0ms
GET / 304 490.296 ms - -
GET /stylesheets/style.css 200 4.886 ms - 111

```


### Habilitar el reinicio del servidor al cambiar el archivo

Cualquier cambio que realice en su sitio web Express actualmente no será visible hasta que reinicie el servidor.

Rápidamente se vuelve muy irritante tener que detener y reiniciar el servidor cada vez que realiza un cambio, por lo que vale la pena tomarse el tiempo para automatizar el reinicio del servidor cuando sea necesario.


Una herramienta conveniente para este propósito es nodemon.

Por lo general, esto se instala globalmente (ya que es una "herramienta"), pero aquí lo instalaremos y usaremos localmente como una dependencia del desarrollador, de modo que cualquier desarrollador que trabaje con el proyecto lo obtenga automáticamente cuando instale la aplicación.

Utilice el siguiente comando en el directorio raíz del proyecto esqueleto

```
npm install --save-dev nodemon

```

Si aún elige instalar nodemon globalmente en su máquina, y no solo en el archivo package.json de su proyecto:

```
npm install -g nodemon

```

Si abre el archivo package.json de su proyecto, ahora verá una nueva sección con esta dependencia:

```
 "devDependencies": {
    "nodemon": "^3.1.3"
}

```

Debido a que la herramienta no está instalada globalmente, no podemos ejecutarla desde la línea de comando (a menos que la agreguemos a la ruta), pero podemos llamarla desde un script npm porque npm sabe todo sobre los paquetes instalados. 

Busque la sección de scripts de su paquete.json. 

Inicialmente, contendrá una línea que comienza con "start".

Actualízalo poniendo una coma al final de esa línea y agregando las líneas "devstart" y "serverstart":


En Linux y macOS, la sección de scripts tendrá este aspecto:

```
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  },

```


En Windows, el valor "serverstart" se vería así (si se usa el símbolo del sistema):

```
"serverstart": "SET DEBUG=express-locallibrary-tutorial:* & npm run devstart"

```

Ahora podemos iniciar el servidor casi exactamente de la misma forma que antes, pero usando el comando devstart.


Nota:

Ahora, si edita cualquier archivo en el proyecto, el servidor se reiniciará (o puede reiniciarlo escribiendo rs en el símbolo del sistema en cualquier momento).

Aún necesitarás recargar el navegador para actualizar la página.


Ahora tenemos que llamar a npm run <script-name> en lugar de simplemente a npm start, porque "start" es en realidad un comando npm que está asignado al script nombrado. 

Podríamos haber reemplazado el comando en el script de inicio, pero solo queremos usar nodemon durante el desarrollo, por lo que tiene sentido crear un nuevo comando de script.


El comando serverstart agregado a los scripts en el paquete.json anterior es un muy buen ejemplo.

Usar este enfoque significa que ya no tendrá que escribir un comando largo para iniciar el servidor.

Tenga en cuenta que el comando particular agregado al script solo funciona para macOS o Linux.



## Proyecto generado

Vemos los archivos del proyecto. 


### Estructura de directorio

El proyecto generado, ahora que ha instalado las dependencias, tiene la siguiente estructura de archivos (los archivos son los elementos que no tienen el prefijo "/").

El archivo package.json define las dependencias de la aplicación y otra información.

También define un script de inicio que llamará al punto de entrada de la aplicación, el archivo JavaScript /bin/www.

Esto configura parte del manejo de errores de la aplicación y luego carga app.js para hacer el resto del trabajo.

Las rutas de la aplicación se almacenan en módulos separados en el directorio rutas/. 

Las plantillas se almacenan en el directorio /views.

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


### Package json

El archivo package.json define las dependencias de la aplicación y otra información:

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


### Archivo www 

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

Por ahora no necesitas saber nada más sobre el código (todo lo que hay en este archivo es "repetitivo"), pero siéntete libre de revisarlo si estás interesado.


### app.js

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


### Routes

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


## Reto

Crea una nueva ruta en /routes/users.js que mostrará el texto "Eres tan genial" en la URL /users/cool/. 

Pruébelo ejecutando el servidor y visitando http://localhost:3000/users/cool/ en su navegador


Lo más importante es que también comprende cómo está estructurado el proyecto, por lo que tendrá una buena idea de dónde debemos realizar cambios para agregar rutas y vistas para nuestra biblioteca local.



# Base de datos: Moongose

Presenta brevemente las bases de datos y cómo usarlas con aplicaciones Node/Express. 

Luego continúa mostrando cómo podemos usar Mongoose para proporcionar acceso a la base de datos para el sitio web LocalLibrary.

Explica cómo se declaran los esquemas y modelos de objetos, los principales tipos de campos y la validación básica.

También muestra brevemente algunas de las principales formas en que puede acceder a los datos del modelo.


## Descripción 

El personal de la biblioteca utilizará el sitio web de la biblioteca local para almacenar información sobre libros y prestatarios, mientras que los miembros de la biblioteca lo utilizarán para explorar y buscar libros, averiguar si hay copias disponibles y luego reservarlas o pedirlas prestadas.

Para almacenar y recuperar información de manera eficiente, la almacenaremos en una base de datos.


Las aplicaciones Express pueden utilizar muchas bases de datos diferentes y existen varios enfoques que puede utilizar para realizar operaciones de creación, lectura, actualización y eliminación (CRUD).

Proporciona una breve descripción general de algunas de las opciones disponibles y luego muestra en detalle los mecanismos particulares seleccionados.


### Base de datos para usar


Las aplicaciones Express pueden usar cualquier base de datos compatible con Node (Express en sí no define ningún comportamiento/requisito adicional específico para la administración de bases de datos).

Existen muchas opciones populares, incluidas PostgreSQL, MySQL, Redis, SQLite y MongoDB.


Al elegir una base de datos, debe considerar aspectos como el tiempo de productividad/curva de aprendizaje, el rendimiento, la facilidad de replicación/copia de seguridad, el costo, el soporte de la comunidad, etc.

Si bien no existe una única base de datos "mejor", casi todas las soluciones populares debería ser más que aceptable para un sitio de tamaño pequeño a mediano como nuestra Biblioteca Local.


Ver más en Integración de bases de datos (Doc Express).


### Formas de interactuar con una base de datos

Hay dos enfoques comunes para interactuar con una base de datos:


1. Utilizar el lenguaje de consulta nativo de las bases de datos, como SQL.


2. Usando un mapeador relacional de objetos ("ORM").

Un ORM representa los datos del sitio web como objetos JavaScript, que luego se asignan a la base de datos subyacente. 

Algunos ORM están vinculados a una base de datos específica, mientras que otros proporcionan un backend independiente de la base de datos.


Se puede obtener el mejor rendimiento utilizando SQL o cualquier lenguaje de consulta compatible con la base de datos.

Los ODM suelen ser más lentos porque utilizan código de traducción para mapear objetos y el formato de la base de datos, lo que puede no utilizar las consultas de base de datos más eficientes (esto es particularmente cierto si el ODM admite diferentes backends de bases de datos y debe hacer mayores compromisos en términos de qué base de datos funciones son compatibles).


El beneficio de usar un ORM es que los programadores pueden seguir pensando en términos de objetos JavaScript en lugar de semántica de bases de datos; esto es particularmente cierto si necesita trabajar con diferentes bases de datos (ya sea en el mismo sitio web o en diferentes sitios web).

También proporcionan un lugar obvio para realizar la validación de datos.


Nota:

¡El uso de ODM/ORM a menudo resulta en menores costos de desarrollo y mantenimiento!
 
A menos que esté muy familiarizado con el lenguaje de consulta nativo o que el rendimiento sea primordial, debería considerar seriamente el uso de un ODM.


### Elegri ORM/ODM

Hay muchas soluciones ODM/ORM disponibles en el sitio del administrador de paquetes npm 

Consulte las etiquetas odm y orm para ver un subconjunto.


Algunas soluciones populares al momento:

Mongoose: 

es una herramienta de modelado de objetos de MongoDB diseñada para funcionar en un entorno asincrónico.


Waterline:

un ORM extraído del marco web Sails basado en Express. 

Proporciona una API uniforme para acceder a numerosas bases de datos diferentes, incluidas Redis, MySQL, LDAP, MongoDB y Postgres.


Bookshelf:

Presenta interfaces de devolución de llamadas tradicionales y basadas en promesas, que brindan soporte para transacciones, carga de relaciones ansiosas/anidadas, asociaciones polimórficas y soporte para relaciones uno a uno, uno a muchos y muchos a muchos. 

Funciona con PostgreSQL, MySQL y SQLite3.


Objection: 

hace que sea lo más fácil posible utilizar toda la potencia de SQL y el motor de base de datos subyacente (compatible con SQLite3, Postgres y MySQL).


Sequelize:

es un ORM basado en promesas para Node.js e io.js. 

Adminte los lenguajes PostgreSQL, MySQL, MariaDB, SQLite y MSSQL y presenta un sólido soporte de transacciones, relaciones, replicación de lectura y más.


Node ORM2:

es un administrador de relaciones de objetos para NodeJS.

Es compatible con MySQL, SQLite y Postgres, lo que ayuda a trabajar con la base de datos mediante un enfoque orientado a objetos.


GraphQL:

principalmente un lenguaje de consulta para restful APIs''

Es muy popular y tiene funciones disponibles para leer datos de bases de datos.


Como regla general, debes considerar tanto las características proporcionadas como la "actividad de la comunidad" (descargas, contribuciones, informes de errores, calidad de la documentación, etc.) al seleccionar una solución.

Al momento Mongoose es, con diferencia, el ODM más popular y es una opción razonable si utiliza MongoDB para su base de datos.


### Moongose and MongoDB para locallibrary

Usaremos Mongoose ODM para acceder a los datos de nuestra biblioteca.

Mongoose actúa como interfaz para MongoDB, una base de datos NoSQL de código abierto que utiliza un modelo de datos orientado a documentos.

Una "colección" de "documentos" en una base de datos MongoDB es análoga a una "tabla" de "filas" en una base de datos relacional.


Esta combinación de ODM y base de datos es extremadamente popular en la comunidad de Node, en parte porque el sistema de consulta y almacenamiento de documentos se parece mucho a JSON y, por lo tanto, resulta familiar para los desarrolladores de JavaScript.


Nota:

No es necesario que conozca MongoDB para utilizar Mongoose, aunque algunas partes de la documentación de Mongoose son más fáciles de usar y comprender si ya está familiarizado con MongoDB.


Se mostrará como definir y acceder al esquema y modelos de Mongoose para el ejemplo del sitio web LocalLibrary.


## Diseñando los modelos

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

También hemos decidido tener un modelo para el género para que se puedan crear valores de forma dinámica.

Hemos decidido no tener un modelo para BookInstance:status; codificaremos los valores aceptables porque no esperamos que cambien.

Dentro de cada uno de los cuadros, puede ver el nombre del modelo, los nombres y tipos de campos, y también los métodos y sus tipos de retorno.


El diagrama también muestra las relaciones entre los modelos, incluidas sus multiplicidades

Las multiplicidades son los números del diagrama que muestran los números (máximo y mínimo) de cada modelo que puede estar presente en la relación.

Por ejemplo, la línea de conexión entre los cuadros muestra que el Libro y el Género están relacionados. 

Los números cercanos al modelo de Libro muestran que un Género debe tener cero o más Libros (tantos como desee), mientras que los números en el otro extremo de la línea al lado del Género muestran que un libro puede tener cero o más Géneros asociados.


Nota:

Como se analiza en nuestro manual de Mongoose a continuación, a menudo es mejor tener el campo que define la relación entre los documentos/modelos en un solo modelo (aún puede encontrar la relación inversa buscando el (_)id asociado en el otro modelo).

A continuación, hemos elegido definir la relación entre Libro/Género y Libro/Autor en el esquema Libro, y la relación entre Libro/Instancia Libro en el esquema LibroInstancia.

Esta elección fue algo arbitraria: igualmente podríamos haber tenido el campo en el otro esquema.

```
Book
title: String
author: Author[1]
summary: String
ISBN: String
genre: Genre[0..*]

ulr: String


Book 1*... <-> 1 Author


Author
first_name: String
family_of_name: String
date_of_birth: Date
date_of_death: Date

name: String
lifespan: String
url: String


Book 0..* <-> 0..* Genre


BookInstance
book
imprint
status
due_back

url: String

```

Se proporciona una introducción básica que explica cómo se definen y utilizan los modelos.

Considera cómo construiremos cada uno de los modelos en el diagrama anterior.


### Las API de bases de datos son asincrónicas

Los métodos de la base de datos para crear, buscar, actualizar o eliminar registros/records son asincrónicos

Lo que esto significa es que los métodos regresan inmediatamente y el código para manejar el éxito o el fracaso del método se ejecuta más adelante, cuando se completa la operación.

Se puede ejecutar otro código mientras el servidor espera que se complete la operación de la base de datos, de modo que el servidor pueda seguir respondiendo a otras solicitudes.


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




Usaremos principalmente await para esperar a que se complete la promesa dentro de una función asíncrona, porque esto conduce a un código asincrónico más legible y comprensible.


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


Los métodos asincrónicos anteriores se ejecutan en secuencia.

Si los métodos no dependen entre sí, puede ejecutarlos en paralelo y finalizar toda la operación más rápidamente.

Esto se hace usando el método Promise.all(), que toma un iterable de promesas como entrada y devuelve una única Promesa.

Esta promesa devuelta se cumple cuando se cumplen todas las promesas de la entrada, con una matriz de valores de cumplimiento.

Rechaza cuando alguna de las promesas de la entrada rechaza, con este primer motivo de rechazo.


El siguiente código muestra cómo funciona esto.

Primero, tenemos dos funciones que devuelven promesas.

Esperamos que ambos se completen utilizando la promesa devuelta por Promise.all().

Una vez que ambos completan los retornos de espera y se completa la matriz de resultados, la función continúa con la siguiente espera y espera hasta que se resuelva la promesa devuelta por anotherFunctionThatReturnsPromise().

Llamaría a myFunction() en un bloque try...catch para detectar cualquier error.

```
async function myFunction {
  // ...
  const [resultFunction1, resultFunction2] = await Promise.all([
     functionThatReturnsPromise1(),
     functionThatReturnsPromise2()
  ]);
  // ...
  await anotherFunctionThatReturnsPromise(resultFunction1);
}

```

Las promesas con await/async permiten un control flexible y "comprensible" sobre la ejecución asincrónica


## Mongoose primer

Descripción general de cómo conectar Mongoose a una base de datos MongoDB, cómo definir un esquema y un modelo, y cómo realizar consultas básicas.


### Instalar Mongoose y MongoDB

Mongoose se instala en su proyecto (paquete.json) como cualquier otra dependencia: usando npm.

Para instalarlo, use el siguiente comando dentro de la carpeta de su proyecto:

```
npm install mongoose

```

La instalación de Mongoose agrega todas sus dependencias, incluido el controlador de la base de datos MongoDB, pero no instala MongoDB en sí.

Si desea instalar un servidor MongoDB, puede descargar instaladores para varios sistemas operativos e instalarlo localmente.

(mongodb.com/try/download/community)

También puede utilizar instancias de MongoDB basadas en la nube.


Nota:

Usaremos la base de datos basada en la nube MongoDB Atlas como un nivel gratuito de servicio para proporcionar la base de datos.

Esto es adecuado para el desarrollo y tiene sentido para el proyecto porque hace que la "instalación" del sistema operativo sea independiente (la base de datos como servicio también es un enfoque que puede utilizar para su base de datos de producción).


### Conectar a MongoDB

Mongoose requiere una conexión a una base de datos MongoDB.

Puede requerir() y conectarse a una base de datos alojada localmente con mongoose.connect() como se muestra a continuación (para el proyecto, en su lugar, nos conectaremos a una base de datos alojada en Internet).

```
// Import the mongoose module
const mongoose = require("mongoose");

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDB = "mongodb://127.0.0.1/my_database";

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

```

Nota:

Como se analizó en la sección Las API de bases de datos son asíncronas, aquí esperamos la promesa devuelta por el método connect() dentro de una función asíncrona.

Usamos el controlador de promesa catch() para manejar cualquier error al intentar conectarnos, pero también podríamos haber llamado a main() dentro de un bloque try...catch.


Puede obtener el objeto Conexión predeterminado con mongoose.connection.

Si necesita crear conexiones adicionales, puede usar mongoose.createConnection().

Esto toma la misma forma de URI de base de datos (con host, base de datos, puerto, opciones, etc.) que connect() y devuelve un objeto Connection).

Tenga en cuenta que createConnection() regresa inmediatamente; Si necesita esperar a que se establezca la conexión, puede llamarla con asPromise() para devolver una promesa (mongoose.createConnection(mongoDB).asPromise().


### Definir y crear modelos

Los modelos se definen mediante la interfaz Schema.

El esquema le permite definir los campos almacenados en cada documento junto con sus requisitos de validación y valores predeterminados.

Además, puede definir métodos auxiliares estáticos y de instancia para que sea más fácil trabajar con sus tipos de datos, y también propiedades virtuales que puede usar como cualquier otro campo, pero que en realidad no están almacenadas en la base de datos (analizados más abajo).


Luego, los esquemas se "compilan" en modelos utilizando el método mongoose.model().

Una vez que tenga un modelo, podrá usarlo para buscar, crear, actualizar y eliminar objetos del tipo determinado.


Nota: 

Cada modelo se asigna a una colección de documentos en la base de datos MongoDB.

Los documentos contendrán los campos/tipos de esquema definidos en el modelo de esquema.


### Definir Scheme

El siguiente fragmento de código muestra cómo se podría definir un esquema simple.

Primero require() mongoose luego usa el constructor Schema para crear una nueva instancia de esquema, definiendo los diversos campos dentro de ella en el parámetro de objeto del constructor.

```
// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

```

En el caso anterior sólo tenemos dos campos, una cadena y una fecha.

En las siguientes secciones, mostraremos algunos de los otros tipos de campos, validación y otros métodos.


## Crear modelo

Los modelos se crean a partir de esquemas utilizando el método mongoose.model():

```
// Define schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

// Compile model from schema
const SomeModel = mongoose.model("SomeModel", SomeModelSchema);

``` 

El primer argumento es el nombre singular de la colección que se creará para su modelo (Mongoose creará la colección de base de datos para el modelo SomeModel anterior), y el segundo argumento es el esquema que desea utilizar para crear el modelo.


Nota:

Una vez que haya definido sus clases de modelo, puede usarlas para crear, actualizar o eliminar registros y ejecutar consultas para obtener todos los registros o subconjuntos de registros particulares.

Lo haremos cuando usamos modelos y cuando creamos vistas.


### Tipos de Schema (fields/campos)

Un esquema puede tener una cantidad arbitraria de campos; cada uno representa un campo en los documentos almacenados en MongoDB.

A continuación se muestra un esquema de ejemplo que muestra muchos de los tipos de campos comunes y cómo se declaran.

```
const schema = new Schema({
  name: String,
  binary: Buffer,
  living: Boolean,
  updated: { type: Date, default: Date.now() },
  age: { type: Number, min: 18, max: 65, required: true },
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array: [],
  ofString: [String], // You can also have an array of each of the other types too.
  nested: { stuff: { type: String, lowercase: true, trim: true } },
});

```

La mayoría de los SchemaTypes (los descriptores después de "tipo:" o después de los nombres de campo) se explican por sí mismos.

Las excepciones son:

ObjectId:

Representa instancias específicas de un modelo en la base de datos.

Por ejemplo, un libro podría usar esto para representar su objeto de autor. 

En realidad, esto contendrá el ID único (_id) del objeto especificado. 

Podemos usar el método populate() para extraer la información asociada cuando sea necesario.


Mixed: 

Un tipo de esquema arbitrario


Array: 

```
[]

```

Un array/multiples/variedad de items, elementos. 

Puede realizar operaciones de matriz de JavaScript en estos modelos (empujar, hacer estallar, quitar desplazamiento, etc.).

Los ejemplos anteriores muestran una matriz de objetos sin un tipo específico y una matriz de objetos String, pero puede tener una matriz de cualquier tipo de objeto.


El código también muestra ambas formas de declarar un campo:


Nombre y tipo de campo como un par clave-valor (es decir, como se hace con los campos name, binary y living).


Nombre del campo seguido de un objeto que define el tipo y cualquier otra opción para el campo.

Las opciones incluyen cosas como:

valores predeterminados.

validadores integrados (por ejemplo, valores máximo/mínimo) y funciones de validación personalizadas.

Si el campo es obligatorio

Si los campos de cadena deben configurarse automáticamente en minúsculas, mayúsculas o recortados (por ejemplo, {tipo: cadena, minúscula: verdadero, recortar: verdadero})


Más en SchemaTypes en Mongoose Docs


### Validation

Mongoose proporciona validadores integrados y personalizados, y validadores sincrónicos y asincrónicos.

Le permite especificar tanto el rango aceptable de valores como el mensaje de error por falla de validación en todos los casos.


Los validadores integrados incluyen:


Los SchemaTypes tienen el validador required incorporado

Esto se utiliza para especificar si se debe proporcionar el campo para guardar un documento.


Numbers tienen min y max validators


Strings tienen:

enum: especifica el conjunto de valores permitidos para el campo

match: especifica una expresión regular con la que la cadena debe coincidir.

maxLength y minLength: para las cadenas.


El siguiente ejemplo (ligeramente modificado de los documentos de Mongoose) muestra cómo se pueden especificar algunos de los tipos de validadores y mensajes de error.

```
const breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, "Too few eggs"],
    max: 12,
    required: [true, "Why no eggs?"],
  },
  drink: {
    type: String,
    enum: ["Coffee", "Tea", "Water"],
  },
});

```

Ver más en Validation en Mongoose Docs.


### Virtual properties

Las propiedades virtuales son propiedades de documentos que puede obtener y configurar pero que no persisten en MongoDB.

Los captadores/getters son útiles para formatear o combinar campos, mientras que los definidores/setters son útiles para descomponer un valor único en múltiples valores para su almacenamiento.

El ejemplo de la documentación construye (y deconstruye) una propiedad virtual de nombre completo a partir de un campo de nombre y apellido, lo cual es más fácil y limpio que construir un nombre completo cada vez que se usa uno en una plantilla.


Nota:

Usaremos una propiedad virtual en la biblioteca para definir una URL única para cada registro de modelo usando una ruta y el valor (_id) del registro.


Más en Virtual en Mongoose Docs.


### Methods y query helpers 

Un esquema también puede tener métodos de instancia, métodos estáticos y ayudas de consulta. 

Los métodos de instancia y estáticos son similares, pero con la diferencia obvia de que un método de instancia está asociado con un registro particular y tiene acceso al objeto actual.

Los ayudantes de consulta le permiten ampliar la API del generador de consultas encadenables de mongoose (por ejemplo, permitiéndole agregar una consulta "byName" además de los métodos find(), findOne() y findById()).

(mongoose's chainable query builder API).


### Usando modelos

Una vez que haya creado un esquema, puede usarlo para crear modelos.

El modelo representa una colección de documentos en la base de datos que puede buscar, mientras que las instancias del modelo representan documentos individuales que puede guardar y recuperar.

Para ver más en Models (Mongoose docs).


Nota:

La creación, actualización, eliminación y consulta de registros son operaciones asincrónicas que devuelven una promesa.

Los siguientes ejemplos muestran solo el uso de los métodos relevantes y await (es decir, el código esencial para usar los métodos).

La función asíncrona circundante y el bloque try...catch para detectar errores se omiten para mayor claridad.

Vimos un repaso anteriormente. 


### Crear y modificar documentos

Para crear un registro, puede definir una instancia del modelo y luego llamar a save() en él.

Los siguientes ejemplos suponen que SomeModel es un modelo (con un único nombre de campo) que hemos creado a partir de nuestro esquema.

```
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();

```


También puede utilizar create() para definir la instancia del modelo al mismo tiempo que la guarda.

A continuación creamos solo una, pero puedes crear varias instancias pasando una serie de objetos.

```
await SomeModel.create({ name: "also_awesome" });

```


Cada modelo tiene una conexión asociada (esta será la conexión predeterminada cuando uses mongoose.model()).

Crea una nueva conexión y llama a .model() para crear los documentos en una base de datos diferente.


Puede acceder a los campos de este nuevo registro utilizando la sintaxis de puntos y cambiar los valores.

Debe llamar a save() o update() para almacenar los valores modificados en la base de datos.

```
// Access model field values using dot notation
console.log(awesome_instance.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();

```


### Buscando registros/records 

Puede buscar registros utilizando métodos de consulta, especificando las condiciones de la consulta como un documento JSON.

El siguiente fragmento de código muestra cómo se pueden encontrar todos los atletas en una base de datos que juegan tenis, devolviendo solo los campos para el nombre y la edad del atleta

Aquí solo especificamos un campo coincidente (deporte), pero puede agregar más criterios, especificar criterios de expresión regular o eliminar las condiciones por completo para devolver todos los atletas.

```
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();

```

Nota:

Es importante recordar que no encontrar ningún resultado no es un error de búsqueda, pero puede ser un caso fallido en el contexto de su aplicación.

Si su aplicación espera que una búsqueda encuentre un valor, puede verificar la cantidad de entradas devueltas en el resultado.


Las API de consulta, como find(), devuelven una variable de tipo Consulta.

Puede utilizar un objeto de consulta para crear una consulta en partes antes de ejecutarla con el método exec(). 

exec() ejecuta la consulta y devuelve una promesa de que puede esperar el resultado.

```
// find all athletes that play tennis
const query = Athlete.find({ sport: "Tennis" });

// selecting the 'name' and 'age' fields
query.select("name age");

// limit our results to 5 items
query.limit(5);

// sort by age
query.sort({ age: -1 });

// execute the query at a later time
query.exec();

```


Arriba hemos definido las condiciones de consulta en el método find().

También podemos hacer esto usando una función where(), y podemos encadenar todas las partes de nuestra consulta usando el operador de punto (.) en lugar de agregarlas por separado.

El siguiente fragmento de código es el mismo que nuestra consulta anterior, con una condición adicional para la edad.

```
Athlete.find()
  .where("sport")
  .equals("Tennis")
  .where("age")
  .gt(17)
  .lt(50) // Additional where query
  .limit(5)
  .sort({ age: -1 })
  .select("name age")
  .exec();

```

find():

obtiene todos los registros coincidentes, pero a menudo solo desea obtener una coincidencia.

Los siguientes métodos consultan un solo registro:


findById(): 

Encuentra el documento con la identificación especificada (cada documento tiene una identificación única).


findOne():

Busca un único documento que coincida con los criterios especificados.


findByIdAndDelete(), findByIdAndUpdate(), findOneAndRemove(), findOneAndUpdate():

Encuentra un solo documento por identificación o criterio y lo actualiza o lo elimina.

Estas son funciones útiles y convenientes para actualizar y eliminar registros.


Nota:

También existe un método countDocuments() que puede utilizar para obtener la cantidad de elementos que coinciden con las condiciones.

Esto es útil si desea realizar un recuento sin tener que buscar los registros


### Documentos relacionados: population 

Puede crear referencias de una instancia de documento/modelo a otra usando el campo de esquema ObjectId, o de un documento a muchos usando una matriz de ObjectIds.

El campo almacena la identificación del modelo relacionado. 

Si necesita el contenido real del documento asociado, puede utilizar el método populate() en una consulta para reemplazar la identificación con los datos reales.


Por ejemplo, el siguiente esquema define autores e historias.

Cada autor puede tener varias historias, que representamos como una matriz de ObjectId.

Cada cuento puede tener un solo autor.

La propiedad ref le dice al esquema qué modelo se puede asignar a este campo.

```
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
});

const storySchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "Author" },
  title: String,
});

const Story = mongoose.model("Story", storySchema);
const Author = mongoose.model("Author", authorSchema);

```

Podemos guardar nuestras referencias al documento relacionado asignando el valor (_id).

A continuación creamos un autor, luego una historia y asignamos la identificación del autor al campo de autor de nuestra historia.

```
const bob = new Author({ name: "Bob Smith" });

await bob.save();

// Bob now exists, so lets create a story
const story = new Story({
  title: "Bob goes sledding",
  author: bob._id, // assign the _id from our author Bob. This ID is created by default!
});

await story.save();

```

Nota:

Un gran beneficio de este estilo de programación es que no tenemos que complicar la ruta principal de nuestro código con la verificación de errores.

Si alguna de las operaciones save() falla, la promesa se rechazará y se generará un error.

Nuestro código de manejo de errores trata eso por separado (generalmente en un bloque catch()), por lo que la intención de nuestro código es muy clara.


Nuestro documento de historia ahora tiene un autor al que se hace referencia mediante el ID del documento de autor. 

Para obtener la información del autor en los resultados de la historia, utilizamos populate(), como se muestra a continuación.

```
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();

```


Nota:

Los lectores astutos habrán notado que agregamos un autor a nuestra historia, pero no hicimos nada para agregar nuestra historia a la matriz de historias de nuestro autor.

¿Cómo podemos entonces obtener todas las historias de un autor en particular?

Una forma sería agregar nuestra historia a la matriz de historias, pero esto daría como resultado que tengamos dos lugares donde se debe mantener la información relacionada con los autores y las historias.

Una mejor manera es obtener el (_id) de nuestro autor y luego usar find() para buscarlo en el campo de autor en todas las historias.

```
Story.find({ author: bob._id }).exec();

```

Para más detalles ver Population en Mongoose Docs.


### Un esquema/modelo por archivo

Si bien puede crear esquemas y modelos utilizando cualquier estructura de archivos que desee, recomendamos definir cada esquema de modelo en su propio módulo (archivo) y luego exportar el método para crear el modelo. 

Esto se muestra a continuación:

```
// File: ./models/some-model.js

// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

// Export function to create "SomeModel" model class
module.exports = mongoose.model("SomeModel", SomeModelSchema);

```


Luego podrá solicitar y utilizar el modelo inmediatamente en otros archivos.

A continuación mostramos cómo puede usarlo para obtener todas las instancias del modelo.

```
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();

```


## Configurando la base de datos MongoDB

Ahora que entendemos algo de lo que Mongoose puede hacer y cómo queremos diseñar nuestros modelos, es hora de comenzar a trabajar en el sitio web LocalLibrary.

Lo primero que queremos hacer es configurar una base de datos MongoDB que podamos usar para almacenar los datos de nuestra biblioteca.


Usaremos la base de datos sandbox alojada en la nube MongoDB Atlas

Este nivel de base de datos no se considera adecuado para sitios web de producción porque no tiene redundancia, pero es excelente para el desarrollo y la creación de prototipos.

Lo usamos aquí porque es gratuito y fácil de configurar, y porque MongoDB Atlas es una base de datos popular como proveedor de servicios que usted podría elegir razonablemente para su base de datos de producción (otras opciones son ScaleGrid y ObjectRocket)


Nota:

Si lo prefiere, puede configurar una base de datos MongoDB localmente descargando e instalando los archivos binarios apropiados para su sistema.

El resto de las instrucciones de este artículo serían similares, excepto por la URL de la base de datos que especificaría al conectarse.

En la fase deploy para producción, alojamos tanto la aplicación como la base de datos en Railway, pero también podríamos haber usado una base de datos en MongoDB Atlas.


Primero deberá crear una cuenta en MongoDB Atlas.

Después de iniciar sesión, serás llevado a la pantalla de inicio


1. Haga clic en el botón + Crear en la sección Descripción general

2. Esto abrirá la pantalla Implementar su clúster.

Haga clic en la plantilla de opción M0 FREE.

3. Desplácese hacia abajo en la página para ver las diferentes opciones que puede elegir.

Puede cambiar el nombre de su clúster en Nombre del clúster.

Lo mantendremos como Cluster0 para este tutorial.

Desmarque la casilla de verificación Precargar conjunto de datos de muestra, ya que importaremos nuestros propios datos de muestra más adelante.

Seleccione cualquier proveedor y región de las secciones Proveedor y Región.

Diferentes regiones ofrecen diferentes proveedores.

Las etiquetas son opcionales.

No los usaremos aquí.

Haga clic en el botón Crear implementación (la creación del clúster tardará algunos minutos).


4. Esto abrirá la sección Inicio rápido de seguridad.

Ingrese un nombre de usuario y contraseña para que su aplicación acceda a la base de datos (arriba hemos creado un nuevo inicio de sesión "cooluser").

Recuerde copiar y almacenar las credenciales de forma segura ya que las necesitaremos más adelante.

Haga clic en el botón Crear usuario.
 

Nota:

Es una buena práctica limitar las direcciones IP que pueden conectarse a su base de datos y otros recursos.

Aquí permitimos una conexión desde cualquier lugar porque no sabemos de dónde vendrá la solicitud después de la implementación.


Haga clic en el botón Finalizar y cerrar.


5. Esto abrirá una pantalla con un mensaje de felicitaciones por configuarar la base de datos y algunos accesos más. 


6. Volverá a la pantalla Descripción general.

Haga clic en la sección Base de datos en el menú Implementación a la izquierda.
 
Haga clic en el botón Examinar colecciones.


7. Esto abrirá la sección Colecciones

Haga clic en el botón Agregar mis propios datos.


8. Esto abrirá la pantalla Crear base de datos.

Ingrese el nombre de la nueva base de datos como (local_library).

Ingrese el nombre de la colección como Colección0.

Haga clic en el botón Crear para crear la base de datos.


9. Volverá a la pantalla de Colecciones con su base de datos creada.

Haga clic en la pestaña Descripción general para volver a la descripción general del clúster.


10. En la pantalla Descripción general de Cluster0, haga clic en el botón Conectar.


11. Esto abrirá la pantalla Conectar a Cluster0.

Seleccione el usuario de su base de datos.

Seleccione la categoría Controladores (drivers), luego el Controlador Node.js y la Versión como se muestra.

NO instale el controlador como se sugiere.

Haga clic en el icono Copiar para copiar la cadena de conexión.

Pega esto en tu editor de texto local.

Reemplace el marcador de posición <contraseña> en la cadena de conexión con la contraseña de su usuario.

Inserte el nombre de la base de datos "local_library" en la ruta antes de las opciones (...mongodb.net/local_library?retryWrites...)

Guarde el archivo que contiene esta cadena en un lugar seguro


Ahora ha creado la base de datos y tiene una URL (con nombre de usuario y contraseña) que puede usarse para acceder a ella.

Esto se verá así: (mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0)


## Instalar Mongoose

Abra un símbolo del sistema y navegue hasta el directorio donde creó el sitio web básico de su biblioteca local.

Ingrese el siguiente comando para instalar Mongoose (y sus dependencias) y agréguelo a su archivo package.json, a menos que ya lo haya hecho al leer Mongoose Primer anterior.

```
npm install mongoose

```


## Conectar Mongoose 

Abra /app.js (en la raíz de su proyecto) y copie el siguiente texto debajo de donde declara el objeto de aplicación Express (después de la línea const app = express();). 

Reemplace la cadena de URL de la base de datos ('insert_your_database_url_here') con la URL de ubicación que representa su propia base de datos (es decir, utilizando la información de MongoDB Atlas).

```
// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "insert_your_database_url_here";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

```

Como se analizó en el manual de Mongoose anterior, este código crea la conexión predeterminada a la base de datos e informa cualquier error a la consola.


Tenga en cuenta que no se recomienda codificar las credenciales de la base de datos en el código fuente como se muestra arriba.

Lo hacemos aquí porque muestra el código de conexión principal y porque durante el desarrollo no existe ningún riesgo significativo de que la filtración de estos detalles exponga o corrompa información confidencial

Le mostraremos cómo hacer esto de manera más segura cuando lo implemente en producción


## Definición del esquema de biblioteca local

Definiremos un módulo separado para cada modelo, como se discutió anteriormente.

Comience creando una carpeta para nuestros modelos en la raíz del proyecto (/modelos) y luego cree archivos separados para cada uno de los modelos.

```
/express-locallibrary-tutorial  // the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js

```


### Author model 

Copie el código del esquema de autor que se muestra a continuación y péguelo en su archivo ./models/author.js.

El esquema define un autor con tipos de esquema de cadena para el nombre y el apellido (obligatorio, con un máximo de 100 caracteres) y campos de fecha para las fechas de nacimiento y muerte.

```
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// Virtual for author's full name
AuthorSchema.virtual("name").get(function () {
  // To avoid errors in cases where an author does not have either a family name or first name
  // We want to make sure we handle the exception by returning an empty string for that case
  let fullname = "";
  if (this.first_name && this.family_name) {
    fullname = `${this.family_name}, ${this.first_name}`;
  }

  return fullname;
});

// Virtual for author's URL
AuthorSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/author/${this._id}`;
});

// Export model
module.exports = mongoose.model("Author", AuthorSchema);

```

También hemos declarado un virtual para AuthorSchema llamado "url" que devuelve la URL absoluta requerida para obtener una instancia particular del modelo; usaremos la propiedad en nuestras plantillas siempre que necesitemos obtener un enlace a un autor en particular.


Note:

Declarar nuestras URL como virtuales en el esquema es una buena idea porque entonces la URL de un elemento solo necesita cambiarse en un lugar.

En este punto, un enlace que use esta URL no funcionaría, porque no tenemos ninguna ruta que maneje el código para instancias de modelos individuales. 

Los configuramos posteriormente.


### Book model

Copie el código del esquema del libro que se muestra a continuación y péguelo en su archivo ./models/book.js.

La mayor parte de esto es similar al modelo de autor: hemos declarado un esquema con varios campos de cadena y un virtual para obtener la URL de registros de libros específicos, y hemos exportado el modelo.

```
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});

// Virtual for book's URL
BookSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/book/${this._id}`;
});

// Export model
module.exports = mongoose.model("Book", BookSchema);

```

La principal diferencia aquí es que hemos creado dos referencias a otros modelos:

autor es una referencia a un único objeto de modelo de Autor y es obligatorio.

género es una referencia a una matriz de objetos del modelo Género.

Aún no hemos declarado este objeto


### BookInstance model

Finalmente, copie el código del esquema de BookInstance que se muestra a continuación y péguelo en su archivo ./models/bookinstance.js.

BookInstance representa una copia específica de un libro que alguien puede tomar prestada e incluye información sobre si la copia está disponible, en qué fecha se espera que regrese y detalles de "impresión" (o versión).

```
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true }, // reference to the associated book
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  due_back: { type: Date, default: Date.now },
});

// Virtual for bookinstance's URL
BookInstanceSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/bookinstance/${this._id}`;
});

// Export model
module.exports = mongoose.model("BookInstance", BookInstanceSchema);

```

Las cosas nuevas que mostramos aquí son las opciones de campo:

enum:

Esto nos permite establecer los valores permitidos de una cadena.

En este caso, lo usamos para especificar el estado de disponibilidad de nuestros libros (usar una enumeración significa que podemos evitar errores ortográficos y valores arbitrarios para nuestro estado).


default:

Usamos default para establecer el estado predeterminado para las instancias de libros recién creadas en "Mantenimiento" y la fecha de vencimiento predeterminada hasta ahora (¡tenga en cuenta cómo puede llamar a la función Fecha al configurar la fecha!).


Todo lo demás debería resultarle familiar gracias a nuestro esquema anterior.


### Reto: modelo de genero

Abra su archivo ./models/genre.js y cree un esquema para almacenar géneros (la categoría del libro, por ejemplo, si es ficción o no ficción, romance o historia militar, etc.).

La definición será muy similar a los otros modelos:

El modelo debe tener un String SchemaType llamado nombre para describir el género.

Este nombre debe ser obligatorio y tener entre 3 y 100 caracteres.

Declare una URL virtual para el género, denominada url.

Exportar el modelo.


### Test: Crear elementos

Ahora tenemos todos los modelos para el sitio configurados


Para probar los modelos (y crear algunos libros de ejemplo y otros elementos que podemos usar en nuestros próximos artículos), ahora ejecutaremos un script independiente para crear elementos de cada tipo:


1. Descargue (o cree) el archivo populatedb.js dentro de su directorio express-locallibrary-tutorial (en el mismo nivel que package.json).

Nota:

El código en populatedb.js puede ser útil para aprender JavaScript, pero no es necesario comprenderlo para este tutorial.


2. Ejecute el script usando node en su símbolo del sistema, pasando la URL de su base de datos MongoDB (la misma con la que reemplazó el marcador de posición insert_your_database_url_here, dentro de app.js anteriormente):

```
node populatedb <your MongoDB url>

```

Nota:

En Windows, debe incluir la URL de la base de datos entre dobles (").

En otros sistemas operativos, es posible que necesite comillas simples (').


3. El script debería ejecutarse hasta su finalización, mostrando los elementos a medida que los crea en la terminal.

Nota:

Vaya a su base de datos en MongoDB Atlas (en la pestaña Colecciones).

Ahora debería poder profundizar en colecciones individuales de libros, autores, géneros e instancias de libros, y consultar documentos individuales.


