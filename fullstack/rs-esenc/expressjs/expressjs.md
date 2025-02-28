# Express JS 


## Instalación 

Cree un directorio para almacenar su aplicación y conviértalo en su directorio de trabajo.

Express 4.x requiere Node.js 0.10 o superior.
Express 5.x requiere Node.js 18 o superior.

```
$ mkdir myapp
$ cd myapp

```

### npm init para crear un archivo package.json para su aplicación.

Solicita una serie de cosas, como el nombre y la versión de su aplicación.

Podemos apretar enter hasta punto de entrada (index.js).

Es común poner app.js

### instale Express en el directorio myapp y guárdelo en la lista de dependencias.

```
$ npm install express

```

### --no-save Para instalar Express temporalmente y no agregarlo a la lista de dependencias:

```
$ npm install express --no-save

```

De manera predeterminada, con la versión npm 5.0+, npm install agrega el módulo a la lista de dependencias en el archivo package.json; con versiones anteriores de npm, debe especificar la opción --save explícitamente. 

Luego, al ejecutar npm install en el directorio de la aplicación, se instalarán automáticamente los módulos en la lista de dependencias.


## Hello world 

La aplicación Express más sencilla que puedes crear.

Tiene un solo archivo, no lo que obtendrías si usaras el generador Express, que crea la estructura para una aplicación completa con numerosos archivos JavaScript, plantillas Jade y subdirectorios para varios propósitos.

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

Esta aplicación inicia un servidor y escucha conexiones en el puerto 3000. 

### La aplicación responde con “¡Hola mundo!” para las solicitudes a la URL raíz (/) o ruta. 

### Para cualquier otra ruta, responderá con un error 404 No encontrado.


## Ejecución local 

Primero crea un directorio llamado myapp, cámbiate a él y ejecuta npm init. 

Luego, instala express como una dependencia, según la guía de instalación.

En el directorio myapp, crea un archivo llamado app.js y copia el código del ejemplo anterior.


req (solicitud) y res (respuesta) son exactamente los mismos objetos que proporciona Node, por lo que puedes invocar req.pipe(), req.on('data', callback) y cualquier otra cosa que harías sin Express involucrado.

Ejecuta la aplicación con el siguiente comando:

```
$ node app.js

```

Luego, carga http://localhost:3000/ en un navegador para ver el resultado.


## Express generator 

Utilice la herramienta de generación de aplicaciones, express-generator, para crear rápidamente un esqueleto de aplicación.

Puede ejecutar el generador de aplicaciones con el comando npx (disponible en Node.js 8.2.0).

```
$ npx express-generator

```

```
Para versiones anteriores de Node, instale el generador de aplicaciones como un paquete npm global y luego ejecútelo:

$ npm install -g express-generator
$ express

```

Muestre las opciones del comando con la opción -h:

```
$ express -h

Uso: express [opciones] [dir]

Opciones:
//etc...

```

Por ejemplo, lo siguiente crea una aplicación Express llamada myapp. 

La aplicación se creará en una carpeta llamada myapp en el directorio de trabajo actual y el motor de visualización se configurará en Pug:

```
$ express --view=pug myapp

```

Luego, instale las dependencias:

```
$ cd myapp
$ npm install

```

En MacOS o Linux, ejecute la aplicación con este comando:

```
$ DEBUG=myapp:* npm start

```

En el símbolo del sistema de Windows, use este comando:

```
> set DEBUG=myapp:* & npm start

```

En Windows PowerShell, use este comando:

```
PS> $env:DEBUG='myapp:*'; npm start

```

Luego, cargue http://localhost:3000/ en su navegador para acceder a la aplicación.

La aplicación generada tiene la siguiente estructura de directorio:

La estructura de la aplicación creada por el generador es solo una de las muchas formas de estructurar las aplicaciones Express. 

Siéntase libre de usar esta estructura o modificarla para que se adapte mejor a sus necesidades.


## Routing 

Enrutamiento básico

### El enrutamiento se refiere a determinar cómo responde una aplicación a una solicitud de cliente a un punto final (end point) en particular, que es un URI (o ruta) y un método de solicitud HTTP específico (GET, POST, etc.).

Cada ruta puede tener una o más funciones de controlador, que se ejecutan cuando se coincide con la ruta.

La definición de ruta tiene la siguiente estructura:

```
app.METHOD(PATH, HANDLER)

```

Donde:

app es una instancia de express.
METHOD es un método de solicitud HTTP, en minúsculas.
PATH es una ruta en el servidor.
HANDLER es la función que se ejecuta cuando se coincide con la ruta.

Este tutorial supone que se crea una instancia de express denominada app y que el servidor está en ejecución. 

Si no está familiarizado con la creación de una aplicación y su inicio, consulte el ejemplo Hola mundo.


### Ejemplos routing 

Los siguientes ejemplos ilustran la definición de rutas simples.

1. Responde con ¡Hola mundo! en la página de inicio:

```
app.get('/', (req, res) => {
res.send('¡Hola mundo!')
})

```

#### get -> method; / -> path; -> (req, res) => {req. res.} -> func/handler; 


2. Responder a una solicitud POST en la ruta raíz (/), la página de inicio de la aplicación:

```
app.post('/', (req, res) => {
res.send('Obtuve una solicitud POST')
})

```

3. Responder a una solicitud PUT en la ruta /user:

```
app.put('/user', (req, res) => {
res.send('Obtuve una solicitud PUT en /user')
})

```

4. Responder a una solicitud DELETE en la ruta /user:

```
app.delete('/user', (req, res) => {
res.send('Obtuve una solicitud DELETE en /user')
})

```

Para obtener más detalles sobre el enrutamiento, consulte la guía de enrutamiento.


## Serving static files 

Entrega de archivos estáticos en Express

### Para entregar archivos estáticos como imágenes, archivos CSS y archivos JavaScript, utilice la función de middleware incorporada express.static en Express.

La firma de la función es:

```
express.static(root, [options])

```

### El argumento root especifica el directorio raíz desde el cual se entregarán los activos estáticos. 

Para obtener más información sobre el argumento options, consulte express.static.


Por ejemplo, utilice el siguiente código para servir imágenes, archivos CSS y archivos JavaScript en un directorio llamado public:

```
app.use(express.static('public'))

```

Ahora, puede cargar los archivos que están en el directorio public:

```
http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html

```

(pones a disposición esta carpeta y los subdirectorios)

### Express busca los archivos relativos al directorio estático, por lo que el nombre del directorio estático no forma parte de la URL.

(empieza en public/...)

Para utilizar varios directorios de activos estáticos, llame a la función de middleware express.static varias veces:

```
app.use(express.static('public'))
app.use(express.static('files'))

```

Express busca los archivos en el orden en el que usted configura los directorios estáticos con la función de middleware express.static.


nota

### Para obtener mejores resultados, utilice una caché de proxy inverso para mejorar el rendimiento del servicio de activos estáticos.


### Para crear un prefijo de ruta virtual (donde la ruta no existe realmente en el sistema de archivos) para los archivos que se sirven mediante la función express.static, especifique una ruta de montaje para el directorio estático, como se muestra a continuación:

```
app.use('/static', express.static('public'))

```

Ahora, puede cargar los archivos que están en el directorio público desde el prefijo de ruta /static.

```
http://localhost:3000/static/images/kitten.jpg
http://localhost:3000/static/css/style.css
http://localhost:3000/static/js/app.js
http://localhost:3000/static/images/bg.png
http://localhost:3000/static/hello.html

```

### Sin embargo, la ruta que proporcione a la función express.static es relativa al directorio desde donde inicia su proceso de nodejs. 

### Si ejecuta la aplicación express desde otro directorio, es más seguro utilizar la ruta absoluta del directorio que desea servir:

```
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

```

Para obtener más detalles sobre la función serve-static y sus opciones, consulte serve-static.


### Otras funcionalidades 

auth - Authentication with login and password
content-negotiation - HTTP content negotiation
cookie-sessions - Working with cookie-based sessions
cookies - Working with cookies
downloads - Transferring files to client
ejs - Working with Embedded JavaScript templating (ejs)
error-pages - Creating error pages
error - Working with error middleware
params - Working with route parameters
resource - Multiple HTTP operations on the same resource
route-map - Organizing routes using a map
route-middleware - Working with route middleware
route-separation - Organizing routes per each resource
search - Search API
session - User sessions


## Preguntas frecuentes

### ¿Cómo debo estructurar mi aplicación?

No hay una respuesta definitiva a esta pregunta. 

La respuesta depende de la escala de su aplicación y del equipo involucrado. 

Para ser lo más flexible posible, Express no hace suposiciones en términos de estructura.

Las rutas y otra lógica específica de la aplicación pueden vivir en tantos archivos como desee, en cualquier estructura de directorio que prefiera. 

Vea los siguientes ejemplos para inspirarse:

1. Listados de rutas
2. Mapa de rutas
3. Controladores de estilo MVC

Además, existen extensiones de terceros para Express, que simplifican algunos de estos patrones:

Resourceful routing


### ¿Cómo defino los modelos?

Express no tiene noción de base de datos. 

Este concepto se deja en manos de módulos Node de terceros, lo que le permite interactuar con casi cualquier base de datos.

Consulte LoopBack para obtener un marco basado en Express que se centra en los modelos.


### ¿Cómo puedo autenticar usuarios?

La autenticación es otra área en la que Express no se aventura. 

Puede utilizar cualquier esquema de autenticación que desee. 

Para un esquema simple de nombre de usuario/contraseña, consulte este ejemplo.


### ¿Qué motores de plantillas admite Express?

#### Express admite cualquier motor de plantillas que cumpla con la firma (ruta, variables locales, devolución de llamada). 

Para normalizar las interfaces y el almacenamiento en caché del motor de plantillas, consulte el proyecto consolidate.js para obtener asistencia. 

Es posible que los motores de plantillas no incluidos en la lista aún admitan la firma Express.

Para obtener más información, consulte Uso de motores de plantillas con Express.


### ¿Cómo manejo las respuestas 404?

En Express, las respuestas 404 no son el resultado de un error, por lo que el middleware del controlador de errores no las capturará. 

Este comportamiento se debe a que una respuesta 404 simplemente indica la ausencia de trabajo adicional por hacer; en otras palabras, Express ha ejecutado todas las funciones y rutas del middleware y ha descubierto que ninguna de ellas respondió. 

Todo lo que necesita hacer es agregar una función de middleware en la parte inferior de la pila (debajo de todas las demás funciones) para manejar una respuesta 404:

```
app.use((req, res, next) => {
res.status(404).send("Sorry can't find that!")
})

```

Agregue rutas dinámicamente en tiempo de ejecución en una instancia de express.Router() para que las rutas no sean reemplazadas por una función de middleware.


### ¿Cómo configuro un controlador de errores?

#### Defina el middleware de manejo de errores de la misma manera que cualquier otro middleware, excepto que con cuatro argumentos en lugar de tres; específicamente con la firma (err, req, res, next):

```
app.use((err, req, res, next) => {
console.error(err.stack)
res.status(500).send('Something broken!')
})

```

Para obtener más información, consulte Manejo de errores.


### ¿Cómo represento HTML simple?

¡No es necesario! No es necesario "renderizar" HTML con la función res.render(). 

#### Si tiene un archivo específico, utilice la función res.sendFile(). 

#### Si está entregando muchos recursos desde un directorio, utilice la función de middleware express.static().


### ¿Qué versión de Node.js requiere Express?

Express 4.x requiere Node.js 0.10 o superior.
Express 5.x requiere Node.js 18 o superior



# Arquitectura Express 

1. routing

2. end point

3. url/path 

4. method

5. handler functions

6. serving files (static, dinamic) -> middleware -> rutas, folders y archivos
...

7. auth

8. cookie-sessions y cookies

9. route params

10. error

11. search  

12. sessions
... etc 

13. app design: Listados de ruta, Mapa de rutas, Controladores de estilo MVC

14. Model/datos/db

15. auth

16. templates 

17. http respose code 

18. errors 

19. http render: no es necesario en cierto escenario 


# Routing 


# Middleware
