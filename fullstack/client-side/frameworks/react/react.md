# React 

Es una biblioteca gratuita y de código abierto para crear interfaces de usuario en JavaScript, lanzado por primera vez el 29 de mayo de 2013.

Tiene como objetivo hacer que la creación de interfaces de usuario basadas en componentes sea más "fluida/expresiva".

Lo mantiene Meta y una comunidad de desarrolladores individuales y empresas.


React se puede utilizar para desarrollar aplicaciones de una sola página, móviles o renderizadas en servidor con marcos como Next.js.

Debido a que React solo se preocupa por la interfaz de usuario y la representación de componentes en el DOM, las aplicaciones de React a menudo dependen de bibliotecas para el enrutamiento y otras funciones del lado del cliente.

Una ventaja clave de React es que solo representa aquellas partes de la página que han cambiado, evitando la repetición innecesaria de elementos DOM sin cambios.


Guía: 

	1. Intro a React:
		
		Descubriremos un poco de detalle sobre sus antecedentes y casos de uso.
		
		Configuraremos una cadena de herramientas básica de React en nuestra computadora local y crearemos y jugaremos con una aplicación de inicio simple.
		
	
	2. Todo list en React: 
		
		Una aplicación que permite a los usuarios agregar, editar y eliminar tareas en las que desean trabajar, y también marcar tareas como completadas sin eliminarlas.
		
		Implementación de la estructura y el estilo básicos de los componentes de la aplicación, listos para la definición e interactividad de los componentes individuales.
		
		
	3. Componentes: 
		
		Antes creamos una app monolítica. 
		
		Podemos dividir la app en componentes descriptivos y manejables.
		
		React no tiene reglas estrictas sobre lo que es y lo que no es un componente, mostraremos una forma sensata de dividir nuestra aplicación en componentes.
 
		
	4. Interactividad de React: Eventos y estado

		Con nuestro plan de componentes elaborado, ahora es el momento de comenzar a actualizar nuestra aplicación desde una interfaz de usuario completamente estática a una que realmente nos permita interactuar y cambiar cosas.
		
		
	5. Interactividad de React: edición, filtrado, renderizado condicional
		
		Agregaremos los toques finales a las principales áreas de funcionalidad en nuestra aplicación de lista de tareas pendientes.
	
		Esto incluye permitirle editar tareas existentes y filtrar la lista de tareas entre tareas todas, completadas e incompletas.
	
		Veremos la representación de la interfaz de usuario condicional a lo largo del camino.
	
		
	6. Accesibilidad en React:
		
		En el enfoque de React, puede mejorar la usabilidad y reducir la confusión tanto para los usuarios de solo teclado como para los de lectores de pantalla.

	
	7. Recursos externos para entender React: 
		
		Lista de recursos de React que puede utilizar para avanzar en su aprendizaje.
		
		
		
# Intro a React 		
	
	React es una biblioteca para crear interfaces de usuario.
	
	React no es un frameworks, ni siquiera es exclusivo de la web.
	
	Se usa con otras bibliotecas para renderizar en ciertos entornos.
	
	Por ejemplo, React Native se puede utilizar para crear aplicaciones móviles.
	
	
	Para crear una web, los desarrolladores utilizan React junto con ReactDOM.
	
	React y ReactDOM a menudo se discuten en los mismos espacios que otros verdaderos frameworks de desarrollo web y se utilizan para resolver los mismos problemas.
	
	
	El objetivo principal de React es minimizar los errores que ocurren cuando los desarrolladores crean interfaces de usuario.
	
	Lo hace mediante el uso de componentes: fragmentos de código lógicos e independientes que describen una parte de la interfaz de usuario.
	
	Estos componentes se pueden componer juntos para crear una interfaz de usuario completa, y React abstrae gran parte del trabajo de renderizado, dejándote concentrarte en el diseño de la interfaz de usuario.
	
	
	Casos de uso: 
		
		A diferencia de los otros frameworks, React no aplica reglas estrictas sobre convenciones de código u organización de archivos.
		
		Esto permite a los equipos establecer convenciones que funcionen mejor para ellos y adoptar React de la forma que deseen.
		
		React puede manejar un solo botón, algunas partes de una interfaz o toda la interfaz de usuario de una aplicación.

		
		Si bien React se puede utilizar para pequeñas partes de una interfaz, no es tan fácil "insertar" en una aplicación como una biblioteca como jQuery, o incluso un framework como Vue.
		
		Es más accesible cuando creas toda tu aplicación con React.

		
		Además, muchos de los beneficios de la experiencia del desarrollador de una aplicación React, como escribir interfaces con JSX, requieren un proceso de compilación. 
		
		Agregar un compilador como Babel a un sitio web hace que el código se ejecute lentamente, por lo que los desarrolladores a menudo configuran dichas herramientas con un paso de compilación.
		
		Podría decirse que React requiere una gran cantidad de herramientas, pero se puede aprender.
		
		
		Se usará React para representar la interfaz de usuario completa de una aplicación con el soporte de Vite, una moderna herramienta de compilación de front-end.
		
	
	React usando JavaScript:
		
		React utiliza características de JavaScript moderno para muchos de sus patrones.
		
		Su mayor desviación de JavaScript viene con el uso de la sintaxis JSX.
		
		JSX amplía la sintaxis de JavaScript para que el código similar a HTML pueda coexistir con él.
		
		```jsx
		
		const heading = <h1>Mozilla Developer Network</h1>;

		```
		
		Esta constante heading se conoce como expresión JSX.
		
		React puede usarlo para representar esa etiqueta <h1> en nuestra aplicación.

		
		Supongamos que quisiéramos envolver nuestro encabezado en una etiqueta <header>, por razones semánticas.
		
		El enfoque JSX nos permite anidar nuestros elementos entre sí, tal como lo hacemos con HTML:
		
		```
		const header = (
		  <header>
			<h1>Mozilla Developer Network</h1>
		  </header>
		);

		```

		Los paréntesis en el fragmento anterior no son exclusivos de JSX y no tienen ningún efecto en su aplicación.
		
		Son una señal para usted (y su computadora) de que las múltiples líneas de código que contiene son parte de la misma expresión.
		
		También podrías escribir la expresión del encabezado así:
		
		```
		const header = <header>
		  <h1>Mozilla Developer Network</h1>
		</header>;

		```
		
		Sin embargo, esto parece un poco incómodo, porque la etiqueta <header> que inicia la expresión no tiene sangría en la misma posición que su etiqueta de cierre correspondiente.
		
		
		Por supuesto, su navegador no puede leer JSX sin ayuda. 
		
		Cuando se compila (usando una herramienta como Babel o Parcel), nuestra expresión de encabezado se vería así:
		
		```
		const header = React.createElement(
		  "header",
		  null,
		  React.createElement("h1", null, "Mozilla Developer Network"),
		);

		```
		
		Es posible omitir el paso de compilación y usar React.createElement() para escribir tu UI tú mismo.
		
		Sin embargo, al hacer esto, pierde el beneficio declarativo de JSX y su código se vuelve más difícil de leer.
		
		La compilación es un paso adicional en el proceso de desarrollo, pero muchos desarrolladores de la comunidad React piensan que la legibilidad de JSX vale la pena.
		
		Además, el desarrollo front-end moderno casi siempre implica un proceso de compilación de todos modos: debe reducir la sintaxis moderna para que sea compatible con navegadores más antiguos y es posible que desee minimizar su código para optimizar el rendimiento de carga.
		
		Herramientas populares como Babel ya vienen con soporte JSX listo para usar, por lo que no tiene que configurar la compilación usted mismo a menos que así lo desee.
		
		
		Debido a que JSX es una combinación de HTML y JavaScript, algunos desarrolladores lo encuentran intuitivo. 
		
		Otros dicen que su naturaleza mezclada lo hace confuso.
		
		Sin embargo, una vez que se sienta cómodo con él, le permitirá crear interfaces de usuario de forma más rápida e intuitiva, y permitirá que otros comprendan mejor su código base de un vistazo.


	Primera app React: 
		
		Hay muchas formas de crear una nueva aplicación React. 
		
		Usaremos Vite para crear una nueva aplicación a través de la línea de comando.


		Es posible agregar React a un proyecto existente copiando algunos elementos <script> en un archivo HTML, pero usar Vite le permitirá dedicar más tiempo a crear su aplicación y menos tiempo a preocuparse por la configuración.
		
		
	Requisitos: 
		
		Para poder utilizar Vite, es necesario tener instalado Node.js.
		
		A partir de Vite 5.0, se requiere al menos la versión 18 de Node o posterior, y es una buena idea ejecutar la última versión de soporte a largo plazo (LTS) cuando sea posible.
		
		Node incluye npm (el administrador de paquetes de Node).

		
		Para verificar su versión de Node:
		
		```
		node -v

		```

		Si Node está instalado, verá un número de versión. 
		
		Si no es así, verá un mensaje de error.
		
		Para instalar Node, siga las instrucciones en el sitio web de Node.js.
		
		
		Puede utilizar el administrador de paquetes Yarn como alternativa a npm, pero asumiremos que está utilizando npm en este conjunto de tutoriales.
		
		
		También tenga en cuenta que React y ReactDOM producen aplicaciones que solo funcionan en un conjunto de navegadores bastante modernos como Firefox, Microsoft Edge, Safari o Chrome.

	
	Inicializando app: 
		
		El administrador de paquetes npm viene con un comando de creación que le permite crear nuevos proyectos a partir de plantillas.
		
		Podemos usarlo para crear una nueva aplicación a partir de la plantilla React estándar de Vite.
		
		Asegúrese de ingresar al lugar donde desea que viva su aplicación en su máquina, luego ejecute lo siguiente en su terminal.
		
		```
		npm create vite@latest moz-todo-react -- --template react

		```
		
		Esto crea un directorio moz-todo-react usando la plantilla de reacción de Vite.
		
		-- es necesario para pasar argumentos a comandos npm como create, y el argumento --template react le dice a Vite que use su plantilla React.

		
		Su terminal habrá impreso algunos mensajes si este comando tuvo éxito.
		
		Debería ver un texto que le solicita que acceda a su nuevo directorio, instale las dependencias de la aplicación y ejecute la aplicación localmente.
		
		Comencemos con dos de esos comandos. Ejecute lo siguiente en su terminal:
		
		```
		cd moz-todo-react && npm install

		```
		
		Una vez que se completa el proceso, debemos iniciar un servidor de desarrollo local para ejecutar nuestra aplicación. 
		
		Aquí, agregaremos algunas opciones de línea de comando a la sugerencia predeterminada de Vite para abrir la aplicación en nuestro navegador tan pronto como se inicie el servidor y usar el puerto 3000.

		```
		npm run dev -- --open --port 3000

		```
		
		Una vez que se inicia el servidor, debería ver una nueva pestaña del navegador que contiene su aplicación React
		
	
	Estructura de la app:
		
		Vite nos brinda todo lo que necesitamos para desarrollar una aplicación React. 
		
		Su estructura de archivos inicial se ve así:
		
		```
		moz-todo-react
		├── README.md
		├── index.html
		├── node_modules
		├── package-lock.json
		├── package.json
		├── public
		│   └── vite.svg
		├── src
		│   ├── App.css
		│   ├── App.jsx
		│   ├── assets
		│   │   └── react.svg
		│   ├── index.css
		│   └── main.jsx
		└── vite.config.js

		```
		
		index.html:	
			
			Es el archivo de nivel superior más importante.
			
			Vite inyecta su código en este archivo para que su navegador pueda ejecutarlo.
			
			No necesitarás editar este archivo durante nuestro tutorial, pero debes cambiar el texto dentro del elemento <title> en este archivo para reflejar el título de tu aplicación.
			
			Los títulos de página precisos son importantes para la accesibilidad.

		
		directorio public:
			
			Contiene archivos estáticos que se enviarán directamente a su navegador sin ser procesados ​​por las herramientas de compilación de Vite. 
			
			En este momento, solo contiene el logotipo de Vite.


		directorio src:
			
			Es donde pasaremos la mayor parte de nuestro tiempo, ya que es donde reside el código fuente de nuestra aplicación.
			
			Notarás que algunos archivos JavaScript en este directorio terminan en la extensión .jsx.
			
			Esta extensión es necesaria para cualquier archivo que contenga JSX; le indica a Vite que convierta la sintaxis JSX en JavaScript que su navegador pueda entender.
			
			El directorio src/assets contiene el logotipo de React que vio en el navegador.
			
		
		package.json y package-lock.json:
			
			Contienen metadatos sobre nuestro proyecto.
			
			Estos archivos no son exclusivos de las aplicaciones React: Vite completó package.json para nosotros y npm creó package-lock.json para cuando instalamos las dependencias de la aplicación.
			
		
	Personalizando nuestro script de desarrollo:
		
		Antes de continuar, es posible que desee cambiar un poco su archivo package.json para no tener que pasar los indicadores --open y --port cada vez que ejecute npm run dev.
		
		En package.json buscamos el objeto scripts.
		
		Cambie la clave "dev" para que se vea así:
		
		```diff
		
		- "dev": "vite",
		+ "dev": "vite --open --port 3000",

		```
	
		Una vez implementado esto, su aplicación se abrirá en su navegador en http://localhost:3000 cada vez que ejecute npm run dev.
		
		No necesita el extra, aquí porque estamos pasando argumentos directamente a vite, en lugar de a un script npm predefinido.
		
		
	Primer componente de React: <App />
		
		En React, un componente es un módulo reutilizable que representa parte de nuestra aplicación general.
		
		Los componentes pueden ser grandes o pequeños, pero normalmente están claramente definidos: sirven a un propósito único y obvio.
		
		Abramos src/App.jsx, ya que nuestro navegador nos solicita que lo editemos.
		
		Este archivo contiene nuestro primer componente, <App />:
		
		```
		import { useState } from "react";
		import reactLogo from "./assets/react.svg";
		import viteLogo from "/vite.svg";
		import "./App.css";

		function App() {
		  const [count, setCount] = useState(0);

		  return (
			<>
			  <div>
				<a href="https://vite.dev" target="_blank">
				  <img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
				  <img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			  </div>
			  <h1>Vite + React</h1>
			  <div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
				  count is {count}
				</button>
				<p>
				  Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			  </div>
			  <p className="read-the-docs">
				Click on the Vite and React logos to learn more
			  </p>
			</>
		  );
		}

		export default App;

		```
		
		El archivo App.jsx consta de tres partes principales: algunas declaraciones de importación en la parte superior, la función App() en el medio y una declaración de exportación en la parte inferior.
		
		La mayoría de los componentes de React siguen este patrón.
		
		
	Declaraciones imports: 
		
		Las declaraciones de importación en la parte superior del archivo permiten que App.jsx use código que se ha definido en otro lugar.
		
		```
		import { useState } from "react";
		import reactLogo from "./assets/react.svg";
		import viteLogo from "/vite.svg";
		import "./App.css";

		```

		La primera declaración import, importa el hook useState de la biblioteca de React. 
		
		Los hooks son una forma de utilizar las funciones de React dentro de un componente.
		
		
		Después de eso, importamos reactLogo y viteLogo.
		
		Tenga en cuenta que sus rutas de importación comienzan con ./ y / respectivamente y que terminan con la extensión .svg al final.
		
		Esto nos dice que estas importaciones son locales y hacen referencia a nuestros propios archivos en lugar de paquetes npm.

		
		La declaración final importa el CSS relacionado con nuestro componente <App />.
		
		Tenga en cuenta que no hay ningún nombre de variable ni directiva from.
		
		Esto se llama side-effect import: no importa ningún valor al archivo JavaScript, pero le dice a Vite que agregue el archivo CSS al que se hace referencia a la salida del código final, para que pueda usarse en el navegador.
		
	
	Función App():
		
		Después de las importaciones, tenemos una función llamada App(), que define la estructura del componente de la aplicación.
		
		Mientras que la mayoría de la comunidad de JavaScript prefiere nombres en minúsculas lower camel como helloWorld.
		
		Los componentes de React usan nombres de variables en mayúsculas Pascal.
		
		Como HelloWorld, para dejar claro que un elemento JSX determinado es un componente de React y no una etiqueta HTML normal.
		
		Si cambiara el nombre de la función App() a app(), su navegador arrojaría un error.

		```
		function App() {
		  const [count, setCount] = useState(0);

		  return (
			<>
			  <div>
				<a href="https://vite.dev" target="_blank">
				  <img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
				  <img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			  </div>
			  <h1>Vite + React</h1>
			  <div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
				  count is {count}
				</button>
				<p>
				  Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			  </div>
			  <p className="read-the-docs">
				Click on the Vite and React logos to learn more
			  </p>
			</>
		  );
		}

		```
			
		La función App() devuelve una expresión JSX.
		
		Esta expresión define lo que su navegador finalmente representa en el DOM.

		Justo debajo de la palabra clave return hay una sintaxis especial: <>.
		
		Este es un fragment.
		
		Los componentes de React tienen que devolver un único elemento JSX, y los fragmentos nos permiten hacerlo sin representar <div> arbitrarios en el navegador.
		
		Verás fragmentos en muchas aplicaciones de React.
	
	
	Declaración export: 
	
		Hay una línea más de código después de la función App():
		
		```jsx 
		
		export default App;

		```
		
		Esta declaración de exportación hace que nuestra función App() esté disponible para otros módulos. 
				
		
	Mover a main: 
		
		Abramos src/main.jsx, porque ahí es donde se utiliza el componente <App />.
		
		Este archivo es el punto de entrada para nuestra aplicación e inicialmente se ve así
		
		```jsx
		
		import React from "react";
		import ReactDOM from "react-dom/client";
		import App from "./App.jsx";
		import "./index.css";

		ReactDOM.createRoot(document.getElementById("root")).render(
		  <React.StrictMode>
			<App />
		  </React.StrictMode>,
		);

		```
		
		Al igual que con App.jsx, el archivo comienza importando todos los módulos JS y otros activos que necesita para ejecutarse.
		
		
		Las dos primeras declaraciones importan las bibliotecas React y ReactDOM porque se hace referencia a ellas más adelante en el archivo.

		No escribimos una ruta o extensión al importar estas bibliotecas porque no son archivos locales.
		
		De hecho, aparecen como dependencias en nuestro archivo package.json. 
		
		¡Tenga cuidado con esta distinción a medida que avanza en esta lección!
		
		
		Luego importamos nuestra función App() y index.css, que contiene estilos globales que se aplican a toda nuestra aplicación.
		
		
		Luego llamamos a la función ReactDOM.createRoot(), que define el nodo raíz de nuestra aplicación.
		
		Esto toma como argumento el elemento DOM dentro del cual queremos que se represente nuestra aplicación React.
		
		En este caso, ese es el elemento DOM con un ID de root. 
		
		Finalmente, encadenamos el método render() a la llamada createRoot(), pasándole la expresión JSX que queremos renderizar dentro de nuestra raíz.
		
		Al escribir <App /> como esta expresión JSX, le decimos a React que llame a la función App() que representa el componente de la aplicación dentro del nodo raíz.


		<App /> se representa dentro de un componente especial <React.StrictMode>. 
		
		Este componente ayuda a los desarrolladores a detectar posibles problemas en su código.
		
		
		React APIs usadas:
					
			ReactDOM.createRoot()
			
			React.StrictMode

	
	Empezando: 
		
		Antes de comenzar a crear nuestra aplicación, eliminaremos parte del código repetitivo que nos proporcionó Vite.

		Primero, como experimento, cambie el elemento <h1> en App.jsx para que diga "¡Hola, mundo!" y luego guarde el archivo.
		
		Notarás que este cambio se representa inmediatamente en el servidor de desarrollo que se ejecuta en http://localhost:3000 en tu navegador.
		
		Tenga esto en cuenta mientras trabaja en su aplicación.

		
		¡No usaremos el resto del código! Reemplace el contenido de App.jsx con lo siguiente
		
		```
		import "./App.css";

		function App() {
		  return (
			<>
			  <header>
				<h1>Hello, World!</h1>
			  </header>
			</>
		  );
		}

		export default App;

		```

	Práctica con JSX:
		
		A continuación, usaremos nuestras habilidades de JavaScript para sentirnos un poco más cómodos escribiendo JSX y trabajando con datos en React.
		
		Agregar atributos a elementos JSX, cómo escribir comentarios, cómo representar contenido a partir de variables y otras expresiones, y cómo pasar datos a componentes con accesorios.
		
		
	Agregar atributos a elementos JSX:
		
		Los elementos JSX pueden tener atributos, al igual que los elementos HTML.
		
		Intente agregar un <button> debajo del elemento <h1> en su archivo App.jsx, así:
		
		```
		<button type="button">Click me!</button>

		```
		
		Cuando guardes tu archivo, verás un botón con las palabras ¡Haz clic en mí!.
		
		El botón no hace nada todavía, pero pronto aprenderemos cómo agregar interactividad a nuestra aplicación.

		
		Algunos atributos son diferentes a sus homólogos HTML.
		
		Por ejemplo, el atributo class en HTML se traduce en className en JSX. 
		
		Esto se debe a que clase es una palabra reservada en JavaScript y JSX es una extensión de JavaScript.
		
		Si quisieras agregar una clase principal a tu botón, lo escribirías así:

		```
		<button type="button" className="primary">
		  Click me!
		</button>

		```


	Expresiones JavaScript como contenido:
		
		A diferencia de HTML, JSX nos permite escribir variables y otras expresiones de JavaScript junto con el resto de nuestro contenido. 
		
		Declaremos una variable llamada suject justo encima de la función App():
		
		```
		const subject = "React";
		function App() {
		  // code omitted for brevity
		}

		```
	
		A continuación, reemplace la palabra "World" en el elemento <h1> con {subject}:
		
		```
		<h1>Hello, {subject}!</h1>

		```
		
		Guarde su archivo y verifique su navegador.
		
		Deberías ver "Hello React" renderizado. 
		
		
		Las llaves alrededor de subject son otra característica de la sintaxis de JSX.
		
		Las llaves le dicen a React que queremos leer el valor de la variable de asunto, en lugar de representar la cadena literal "subject".
	
		Puede poner cualquier expresión JavaScript válida entre llaves en JSX; React lo evaluará y presentará el resultado de la expresión como contenido final.
		
		
		A continuación se muestra una serie de ejemplos, con comentarios arriba que explican lo que representará cada expresión:
		
		```
		{/* Hello, React :)! */}
		<h1>Hello, {subject + ' :)'}!</h1>
		{/* Hello, REACT */}
		<h1>Hello, {subject.toUpperCase()}</h1>
		{/* Hello, 4! */}
		<h1>Hello, {2 + 2}!</h1>

		```
		
		¡Incluso los comentarios en JSX están escritos entre llaves! Esto se debe a que los comentarios también son técnicamente expresiones de JavaScript. 
		
		La "/*" sintaxis de comentario de bloque "*/" es necesaria para que su programa sepa dónde comienza y termina el comentario.
		
		
	Component props:
		
		Son un medio para pasar datos a un componente de React.
		
		Su sintaxis es idéntica a la de los atributos, de hecho: prop="valor".
		
		La diferencia es que mientras que los atributos se pasan a elementos simples, los props se pasan a componentes de React.
		
		
		En React, el flujo de datos es unidireccional: los props solo se pueden pasar de los componentes principales a los componentes secundarios.
 
			
		Abramos main.jsx y demos a nuestro componente <App /> su primer props.
		
		Agregue un prop subject a la llamada del componente <App />, con un valor Clarice.
		
		Cuando haya terminado, debería verse así:
		
		```
		<App subject="Clarice" />

		```
		
		
		De vuelta en App.jsx, revisemos la función App().
		
		Cambie la firma/signature de App() para que acepte props como parámetro y registre los pros en la consola para que pueda inspeccionarlos. 
		
		Elimine también el subject const; ya no lo necesitamos. 
		
		Su archivo App.jsx debería verse así:
		
		```
		function App(props) {
		  console.log(props);
		  return (
			// code omitted for brevity
		  );
		}

		```
		
		Guarde su archivo y verifique su navegador.
		
		Verás un fondo en blanco sin contenido.
		
		Esto se debe a que estamos intentando leer una variable de asunto que ya no está definida.
		
		Solucione este problema comentando la línea <h1>¡Hola {subject}!</h1>.

		Si su editor de código sabe cómo analizar JSX (¡la mayoría de los editores modernos lo saben!), puede usar su método abreviado de comentarios integrado: Ctrl + / (en Windows) o Cmd + / (en macOS) – para crear comentarios más rápidamente.
		
		
		Guarde el archivo con esa línea comentada.
		
		Esta vez, deberías ver el mensaje "¡Haz clic en mí!" botón renderizado por sí mismo.
		
		Si abre la consola de desarrollador de su navegador, verá un mensaje similar a este:
		
		```
		Object { subject: "Clarice" }
		
		```
		
		
		La propiedad del objeto subject corresponde a la propiedad subject que agregamos a nuestra llamada al componente <App />, y la cadena Clarice corresponde a su valor.
		
		Los props de los componentes en React siempre se recopilan en objetos de esta manera.


		Usemos este prop subject para corregir el error en nuestra aplicación.

		Descomente la línea <h1>¡Hola, {subject}!</h1> y cámbiela a <h1>¡Hola, {props.subject}!</h1>, luego elimine la instrucción console.log().
		
		Se debería ver así: 
		
		```
		function App(props) {
		  return (
			<>
			  <header>
				<h1>Hello, {props.subject}!</h1>
				<button type="button" className="primary">
				  Click me!
				</button>
			  </header>
			</>
		  );
		}

		```
		
		Cuando guardes, la aplicación ahora debería saludarte con "¡Hola, Clarice!".
		
		Si regresa a main.jsx, edita el valor de subject y guarda, su texto cambiará.


		Para practicar más, puede intentar agregar un elemento de saludo adicional a la llamada del componente <App /> dentro de main.jsx y usarlo junto con el elemento de asunto dentro de App.jsx.

	
	En React: 
		
		Los componentes pueden importar los módulos que necesiten y deben exportarse ellos mismos al final de sus archivos.

		Las funciones de los componentes se nombran con PascalCase.
		    
		Puede representar expresiones de JavaScript en JSX colocándolas entre llaves, como {so}.

		Algunos atributos JSX son diferentes de los atributos HTML para que no entren en conflicto con las palabras reservadas de JavaScript. 
			
			Por ejemplo, class en HTML es className en JSX.
			
		Props se escriben como atributos dentro de las llamadas de componentes y se pasan a los componentes.

		
		 
# Todo List 

Una prueba de concepto en React podría ser: una aplicación que permite a los usuarios agregar, editar y eliminar tareas en las que desean trabajar, y también marcar tareas como completadas sin eliminarlas.

Estructura básica y el estilo de la aplicación, lista para la definición e interactividad de componentes individuales.


## Historia de usuario: 

En el desarrollo de software, una historia de usuario es un objetivo procesable desde la perspectiva del usuario.

Definir historias de usuarios antes de comenzar nuestro trabajo nos ayudará a centrar nuestro trabajo.

Nuestra aplicación debe cumplir con las siguientes historias.


Como usuario, puedo:

leer una lista de tareas.

agregue una tarea usando el mouse o el teclado.

marque cualquier tarea como completada, usando el mouse o el teclado.
    
eliminar cualquier tarea, utilizando el ratón o el teclado.

editar cualquier tarea, usando el mouse o el teclado.

ver un subconjunto específico de tareas: todas las tareas, solo la tarea activa o solo las tareas completadas.


Abordaremos estas historias una por una.


## Limpieza previa al proyecto

Vite nos ha proporcionado un código que no usaremos en absoluto para nuestro proyecto.

Los siguientes comandos de terminal lo eliminarán para dar paso a nuestro nuevo proyecto.

¡Asegúrate de comenzar en el directorio raíz de la aplicación!

```
# Move into the src directory
cd src
# Delete the App.css file and the React logo provided by Vite
rm App.css assets/react.svg
# Empty the contents of App.jsx and index.css
echo -n > App.jsx && echo -n > index.css
# Move back up to the root of the project
cd ..

```

Si detuvo su servidor para realizar las tareas de terminal mencionadas anteriormente, deberá iniciarlo nuevamente usando npm run dev.


## Código inical del proyecto

Como punto de partida para este proyecto, proporcionaremos dos cosas: una función App() para reemplazar la que acaba de eliminar y algo de CSS para diseñar su aplicación.


### JSX 

En App.jsx

```
function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked />
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;

```
	
	
Ahora abra index.html y cambie el texto del elemento <title> a TodoMatic.

De esta manera, coincidirá con el <h1> en la parte superior de nuestra aplicación.

```
<title>TodoMatic</title>

```

Actualizar el navegador. 


Primero, considere el JSX que tenemos y cómo se corresponde con nuestras historias de usuario:

Tenemos un elemento <form>, con un <input type="text"> para escribir una nueva tarea y un botón para enviar el formulario.

Disponemos de una serie de botones que nos servirán para filtrar nuestras tareas.

Tenemos un encabezado que nos dice cuántas tareas quedan.

Tenemos nuestras 3 tareas, ordenadas en una lista desordenada

Cada tarea es un elemento de lista (<li>) y tiene botones para editarla y eliminarla y una casilla de verificación para marcarla como realizada.


El formulario nos permitirá realizar tareas; los botones nos dejarán filtrarlos; el encabezado y la lista son nuestra forma de leerlos.

La interfaz de usuario para editar una tarea está notoriamente ausente por ahora. 

Lo escribiremos más tarde.


### Accesibilidad

Es posible que observe marcados inusuales aquí.

```
<button type="button" className="btn toggle-btn" aria-pressed="true">
  <span className="visually-hidden">Show </span>
  <span>all</span>
  <span className="visually-hidden"> tasks</span>
</button>

```

aria-pressed le dice a la tecnología de asistencia (como lectores de pantalla) que el botón puede estar en uno de dos estados: pressed o unpressed

Piense en estos como análogos de on off.

Establecer un valor de "true" significa que el botón se presiona de forma predeterminada.
		

La clase visually-hidden aún no tiene ningún efecto porque no hemos incluido ningún CSS.

Sin embargo, una vez que hayamos implementado nuestros estilos, cualquier elemento con esta clase quedará oculto para los usuarios videntes y seguirá estando disponible para los usuarios de tecnología de asistencia; esto se debe a que los usuarios videntes no necesitan estas palabras; están ahí para brindar más información sobre lo que hace el botón para los usuarios de tecnología de asistencia que no tienen el contexto visual adicional para ayudarlos.


Más abajo, puedes encontrar nuestro elemento <ul>:

```
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  …
</ul>

```

El atributo role ayuda a la tecnología de asistencia a explicar qué tipo de elemento representa una etiqueta.

Un <ul> se trata como una lista de forma desordenada/predeterminada, pero los estilos que estamos a punto de agregar interrumpirán esa funcionalidad.

Esta función restaurará el significado de "lista" al elemento <ul>.

Si desea obtener más información sobre por qué esto es necesario, puede consultar el artículo de Scott O'Hara, "Fixing Lists".


El atributo aria-labelledby le dice a las tecnologías de asistencia que estamos tratando el encabezado de nuestra lista como la etiqueta que describe el propósito de la lista que se encuentra debajo.

Hacer esta asociación le da a la lista un contexto más informativo, lo que podría ayudar a los usuarios de tecnología de asistencia a comprender mejor el propósito de la lista.


Finalmente, las etiquetas y entradas de los elementos de nuestra lista tienen algunos atributos exclusivos de JSX:

```
<input id="todo-0" type="checkbox" defaultChecked />
<label className="todo-label" htmlFor="todo-0">
  Eat
</label>

```

defaultChecked en la etiqueta <input /> le dice a React que marque esta casilla inicialmente.

Si usáramos checked, como lo haríamos en HTML normal, React registraría algunas advertencias en la consola de nuestro navegador relacionadas con el manejo de eventos en la casilla de verificación, que queremos evitar.

Lo cubriremos más adelante, cuando comencemos a usar eventos.


htmlFor corresponde al atributo for utilizado en HTML.

No podemos usar for como atributo en JSX porque for es una palabra reservada, por lo que React usa htmlFor en su lugar.


### Atributos booleanos en JSX
	

defaultChecked de la sección anterior es un atributo booleano, un atributo cuyo valor es verdadero o falso.

Como en HTML, un atributo booleano es verdadero si está presente y falso si está ausente; la asignación en el lado derecho de la expresión es opcional.

Puede establecer explícitamente su valor pasándolo entre llaves, por ejemplo, defaultChecked={true} o defaultChecked={false}.


Debido a que JSX es JavaScript, hay un problema a tener en cuenta con los atributos booleanos: escribir defaultChecked="false" establecerá un valor de cadena de "falso" en lugar de un valor booleano.

Las cadenas no vacías son verdaderas (truthy), por lo que React considerará que defaultChecked es verdadero y marcará la casilla de verificación de forma predeterminada.

Esto no es lo que queremos, por lo que debemos evitarlo.


Si lo desea, puede practicar la escritura de atributos booleanos con otro atributo que haya visto antes, oculto/hidden, lo que evita que los elementos se representen en la página.

Intente agregar hidden al elemento <h1> en App.jsx para ver qué sucede, luego intente establecer explícitamente su valor en {false}.

Tenga en cuenta, nuevamente, que escribir hidden="false" da como resultado un valor verdadero, por lo que <h1> se ocultará.

No olvides eliminar este código cuando hayas terminado.


El atributo aria-pressed utilizado en nuestro fragmento de código anterior tiene un valor de "verdadero" porque aria-pressed no es un atributo booleano verdadero en la forma en que lo es.


### Aplicando estilo

CSS code into src/index.css:

```
/* Resets */
*,
*::before,
*::after {
  box-sizing: border-box;
}
*:focus-visible {
  outline: 3px dashed #228bec;
  outline-offset: 0;
}
html {
  font: 62.5% / 1.15 sans-serif;
}
h1,
h2 {
  margin-bottom: 0;
}
ul {
  list-style: none;
  padding: 0;
}
button {
  -moz-osx-font-smoothing: inherit;
  -webkit-font-smoothing: inherit;
  appearance: none;
  background: transparent;
  border: none;
  color: inherit;
  font: inherit;
  line-height: normal;
  margin: 0;
  overflow: visible;
  padding: 0;
  width: auto;
}
button::-moz-focus-inner {
  border: 0;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  overflow: visible;
}
input[type="text"] {
  border-radius: 0;
}
body {
  background-color: #f5f5f5;
  color: #4d4d4d;
  font:
    1.6rem/1.25 Arial,
    sans-serif;
  margin: 0 auto;
  max-width: 68rem;
  width: 100%;
}
@media screen and (min-width: 620px) {
  body {
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
/* End resets */
/* Global styles */
.form-group > input[type="text"] {
  display: inline-block;
  margin-top: 0.4rem;
}
.btn {
  border: 0.2rem solid #4d4d4d;
  cursor: pointer;
  padding: 0.8rem 1rem 0.7rem;
  text-transform: capitalize;
}
.btn.toggle-btn {
  border-color: #d3d3d3;
  border-width: 1px;
}
.btn.toggle-btn[aria-pressed="true"] {
  border-color: #4d4d4d;
  text-decoration: underline;
}
.btn__danger {
  background-color: #ca3c3c;
  border-color: #bd2130;
  color: #fff;
}
.btn__filter {
  border-color: lightgrey;
}
.btn__primary {
  background-color: #000;
  color: #fff;
}
.btn-group {
  display: flex;
  justify-content: space-between;
}
.btn-group > * {
  flex: 1 1 49%;
}
.btn-group > * + * {
  margin-left: 0.8rem;
}
.label-wrapper {
  flex: 0 0 100%;
  margin: 0;
  text-align: center;
}
.visually-hidden {
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute !important;
  white-space: nowrap;
  width: 1px;
}
[class*="stack"] > * {
  margin-bottom: 0;
  margin-top: 0;
}
.stack-small > * + * {
  margin-top: 1.25rem;
}
.stack-large > * + * {
  margin-top: 2.5rem;
}
@media screen and (min-width: 550px) {
  .stack-small > * + * {
    margin-top: 1.4rem;
  }
  .stack-large > * + * {
    margin-top: 2.8rem;
  }
}
.stack-exception {
  margin-top: 1.2rem;
}
/* End global styles */
/* General app styles */
.todoapp {
  background: #fff;
  box-shadow:
    0 2px 4px 0 rgb(0 0 0 / 20%),
    0 2.5rem 5rem 0 rgb(0 0 0 / 10%);
  margin: 2rem 0 4rem 0;
  padding: 1rem;
  position: relative;
}
@media screen and (min-width: 550px) {
  .todoapp {
    padding: 4rem;
  }
}
.todoapp > * {
  margin-left: auto;
  margin-right: auto;
  max-width: 50rem;
}
.todoapp > form {
  max-width: 100%;
}
.todoapp > h1 {
  display: block;
  margin: 0;
  margin-bottom: 1rem;
  max-width: 100%;
  text-align: center;
}
.label__lg {
  line-height: 1.01567;
  font-weight: 300;
  margin-bottom: 1rem;
  padding: 0.8rem;
  text-align: center;
}
.input__lg {
  border: 2px solid #000;
  padding: 2rem;
}
.input__lg:focus-visible {
  border-color: #4d4d4d;
  box-shadow: inset 0 0 0 2px;
}
[class*="__lg"] {
  display: inline-block;
  font-size: 1.9rem;
  width: 100%;
}
[class*="__lg"]:not(:last-child) {
  margin-bottom: 1rem;
}
@media screen and (min-width: 620px) {
  [class*="__lg"] {
    font-size: 2.4rem;
  }
}
/* End general app styles */
/* Todo item styles */
.todo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.todo > * {
  flex: 0 0 100%;
}
.todo-text {
  border: 2px solid #565656;
  min-height: 4.4rem;
  padding: 0.4rem 0.8rem;
  width: 100%;
}
.todo-text:focus-visible {
  box-shadow: inset 0 0 0 2px;
}
/* End todo item styles */
/* Checkbox styles */
.c-cb {
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  clear: left;
  display: block;
  font-family: Arial, sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.25;
  min-height: 44px;
  padding-left: 40px;
  position: relative;
}
.c-cb > label::before,
.c-cb > input[type="checkbox"] {
  box-sizing: border-box;
  height: 44px;
  left: -2px;
  top: -2px;
  width: 44px;
}
.c-cb > input[type="checkbox"] {
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  margin: 0;
  opacity: 0;
  position: absolute;
  z-index: 1;
}
.c-cb > label {
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin-bottom: 0;
  padding: 8px 15px 5px;
  touch-action: manipulation;
}
.c-cb > label::before {
  background: transparent;
  border: 2px solid currentcolor;
  content: "";
  position: absolute;
}
.c-cb > input[type="checkbox"]:focus-visible + label::before {
  border-width: 4px;
  outline: 3px dashed #228bec;
}
.c-cb > label::after {
  background: transparent;
  border: solid;
  border-width: 0 0 5px 5px;
  border-top-color: transparent;
  box-sizing: content-box;
  content: "";
  height: 7px;
  left: 9px;
  opacity: 0;
  position: absolute;
  top: 11px;
  transform: rotate(-45deg);
  width: 18px;
}
.c-cb > input[type="checkbox"]:checked + label::after {
  opacity: 1;
}
/* End checkbox styles */

```

Guarde y vuelva a mirar su navegador, y su aplicación ahora debería tener un estilo razonable.

¡Ahora nuestra aplicación de lista de tareas pendientes se parece un poco más a una aplicación real!

El problema es: en realidad no hace nada, no es interactiva. 



# Componentes 

Hasta ahora la app es monolítica.

Debemos dividirla en componentes descriptivos y manejables.

React no tiene reglas estrictas sobre lo que es y lo que no es un componente.

Mostraremos una forma sensata de dividir nuestra aplicación en componentes.


## Primer componente

Definir un componente puede parecer complicado hasta que tengas algo de práctica, pero lo esencial es:

Si representa una "parte" obvia de su aplicación, probablemente sea un componente
    
Si se reutiliza con frecuencia, probablemente sea un componente.


Ese segundo punto es especialmente valioso.

crear un componente a partir de elementos comunes de la interfaz de usuario le permite cambiar su código en un solo lugar y ver esos cambios en todos los lugares donde se usa ese componente.

Tampoco es necesario dividir todo en componentes de inmediato.

Tomemos el segundo punto como inspiración y hagamos un componente a partir de la pieza más reutilizada y más importante de la interfaz de usuario:

Un elemento de la lista de tareas pendientes.


## Componente <Todo />

Antes de que podamos crear un componente, debemos crear un nuevo archivo para él.

De hecho, deberíamos crear un directorio solo para nuestros componentes. 

¡Asegúrate de estar en la raíz de tu aplicación antes de ejecutar estos comandos!

```
# create a `components` directory
mkdir src/components
# within `components`, create a file called `Todo.jsx`
touch src/components/Todo.jsx

```

¡No olvide reiniciar su servidor de desarrollo si lo detuvo para ejecutar los comandos anteriores!


Agreguemos una función Todo() en Todo.jsx.

Aquí, definimos una función y la exportamos:

```
function Todo() {}

export default Todo;

```


Esto está bien hasta ahora, ¡pero nuestro componente debería devolver algo útil! 

Vuelva a src/App.jsx, copie el primer <li> desde dentro de la lista desordenada y péguelo en Todo.jsx para que se lea así:

```
function Todo() {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked />
        <label className="todo-label" htmlFor="todo-0">
          Eat
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">Eat</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">Eat</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;

```

Ahora tenemos algo que podemos usar. 


En App.jsx, agregue la siguiente línea en la parte superior del archivo para importar Todo:

```
import Todo from "./components/Todo";

```

Con este componente importado, puede reemplazar todos los elementos <li> en App.jsx con llamadas al componente <Todo />.

Tu <ul> debería leerse así:

```
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  <Todo />
  <Todo />
  <Todo />
</ul>

```

Cuando regreses a tu aplicación, notarás algo desafortunado: ¡tu lista ahora repite la primera tarea tres veces!

A continuación veremos cómo podemos hacer que diferentes llamadas a componentes generen contenido único.


## Crear un único componente <Todo />

Los componentes son poderosos porque nos permiten reutilizar partes de nuestra interfaz de usuario y hacer referencia a un lugar para la fuente de esa interfaz de usuario.

El problema es que normalmente no queremos reutilizar todos los componentes.

Queremos reutilizar la mayoría de las piezas y cambiar piezas pequeñas. 

Aquí es donde entran los props.


### nombre

Para realizar un seguimiento de los nombres de las tareas que queremos completar, debemos asegurarnos de que cada componente <Todo /> represente un nombre único.

En App.jsx, asigne a cada <Todo /> un nombre de propiedad.

```
<Todo name="Eat" />
<Todo name="Sleep" />
<Todo name="Repeat" />

```

Cuando su navegador se actualice, verá... exactamente lo mismo que antes.

Le dimos algunos props a nuestro <Todo />, pero aún no los estamos usando.

Volvamos a Todo.jsx y solucionemos eso.


Primero modifique la definición de su función Todo() para que tome props como parámetro. 

Puede hacer console.log() en props si desea comprobar que el componente los recibe correctamente.


Una vez que esté seguro de que su componente está obteniendo sus props, puede reemplazar cada aparición de Eat con su nombre de prop leyendo props.name.

Recuerde: props.name es una expresión JSX, por lo que deberá encerrarla entre llaves.


Juntando todo eso, tu función Todo() debería leerse así:

```
function Todo(props) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked={true} />
        <label className="todo-label" htmlFor="todo-0">
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;

```

Ahora su navegador debería mostrar tres tareas únicas.

Sin embargo, persiste otro problema: todos siguen marcados de forma predeterminada.


### Nuevo prop

En nuestra lista estática original, solo se marcó Comer.

Una vez más, queremos reutilizar la mayor parte de la interfaz de usuario que constituye un componente <Todo />, pero cambiar una cosa.

¡Es un buen trabajo para otro prop!

Dale a tu primera llamada <Todo /> un valor booleano de completado y deja los otros dos como están.

```
<Todo name="Eat" completed />
<Todo name="Sleep" />
<Todo name="Repeat" />

```

Como antes, debemos volver a Todo.jsx para utilizar estos props.

Cambie el atributo defaultChecked en <input /> para que su valor sea igual al accesorio completado.

Una vez que haya terminado, el elemento <input /> del componente Todo se leerá así:

```
<input id="todo-0" type="checkbox" defaultChecked={props.completed} />

```

Si cambia la propiedad completa de cada componente <Todo />, su navegador marcará o desmarcará las casillas de verificación representadas equivalentes en consecuencia.


### Prop id

Todavía tenemos otro problema: nuestro componente <Todo /> le da a cada tarea un atributo de identificación de todo-0.

Esto es malo por un par de razones:

Los atributos de identificación deben ser únicos (se utilizan como identificadores únicos para fragmentos de documentos, por CSS, JavaScript, etc.).

Cuando los identificadores no son únicos, la funcionalidad de los elementos de la etiqueta puede fallar.


El segundo problema está afectando a nuestra aplicación en este momento.

Si hace clic en la palabra "Dormir" al lado de la segunda casilla de verificación, notará que se alterna la casilla de verificación "Comer" en lugar de la casilla de verificación "Dormir". 

Esto se debe a que el elemento <label> de cada casilla de verificación tiene un atributo htmlFor de todo-0.

Las <label>s solo reconocen el primer elemento con un atributo de identificación determinado, lo que causa el problema que ves al hacer clic en las otras etiquetas.


Teníamos atributos de identificación únicos antes de crear el componente <Todo />.

Volvamos a traerlos, siguiendo el formato de todo-i, donde i aumenta en uno cada vez.

Actualice las instancias del componente Todo dentro de App.jsx para agregar props de identificación, de la siguiente manera:

```
<Todo name="Eat" id="todo-0" completed />
<Todo name="Sleep" id="todo-1" />
<Todo name="Repeat" id="todo-2" />

```

La propiedad completada es la última aquí porque es un valor booleano sin asignación.

Esto es puramente una convención estilística.

El orden de los props no importa porque los props son objetos de JavaScript y los objetos de JavaScript no están ordenados.


Ahora regrese a Todo.jsx y utilice la propiedad id.

Necesita reemplazar el valor del atributo id del elemento <input />, así como el valor del atributo htmlFor de su <label>:

```
<div className="c-cb">
  <input id={props.id} type="checkbox" defaultChecked={props.completed} />
  <label className="todo-label" htmlFor={props.id}>
    {props.name}
  </label>
</div>

```

Con estas correcciones implementadas, hacer clic en las etiquetas al lado de cada casilla de verificación hará lo que esperamos.

Marcar y desmarcar las casillas de verificación al lado de esas etiquetas.


## Evitar repetir código: Iteración

Estamos haciendo un buen uso de React hasta ahora, ¡pero podríamos hacerlo mejor! Nuestro código es repetitivo.

Las tres líneas que representan nuestro componente <Todo /> son casi idénticas, con una sola diferencia: el valor de cada prop.


Podemos limpiar nuestro código con una de las capacidades principales de JavaScript: la iteración.

Para utilizar la iteración, primero debemos repensar nuestras tareas.


## Tareas como datos

Actualmente, cada una de nuestras tareas contiene tres datos: su nombre, si ha sido verificada y su identificación única.

Estos datos se traducen muy bien en un objeto.

Como tenemos más de una tarea, una serie de objetos funcionaría bien para representar estos datos.


En src/main.jsx, declara una nueva constante debajo de la importación final, pero encima de ReactDOM.createRoot():

```
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

```

Nota: Si su editor de texto tiene un complemento ESLint, es posible que vea una advertencia en esta constante de DATOS.

Esta advertencia proviene de la configuración de ESLint proporcionada por la plantilla de Vite que utilizamos y no se aplica a este código.

Puede suprimir la advertencia de forma segura agregando // eslint-disable-next-line a la línea encima de DATA const.


A continuación, pasaremos DATA a <App /> como prop, llamado tasks.

Actualice la llamada del componente <App /> dentro de src/main.jsx para que se lea así:

```
<App tasks={DATA} />

```

La matriz DATA ahora está disponible dentro del componente de la aplicación como props.tasks.

Puede console.log() comprobarlo, si lo desea.

Nota: Los nombres de las constantes ALL_CAPS no tienen un significado especial en JavaScript; son una convención que les dice a otros desarrolladores "estos datos nunca cambiarán después de definirse aquí".


## Renderizar Iteración

Para representar nuestra matriz de objetos, tenemos que convertir cada objeto en un componente <Todo />.

JavaScript nos proporciona un método de matriz para transformar elementos en otra cosa: Array.prototype.map().


Dentro de App.jsx, cree una nueva constante encima de la declaración de retorno de la función App() llamada taskList.

Comencemos transformando cada tarea en la matriz props.tasks en su nombre.

El ?. El operador nos permite realizar un encadenamiento opcional para verificar si props.tasks no está definido o es nulo antes de intentar crear una nueva matriz de nombres de tareas.

```
const taskList = props.tasks?.map((task) => task.name);

```

Intentemos reemplazar todos los hijos de <ul> con taskList:

```
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  {taskList}
</ul>

```

Esto nos ayuda a mostrar todos los componentes nuevamente, pero tenemos más trabajo por hacer.

El navegador actualmente muestra el nombre de cada tarea como texto sin formato.

Nos falta nuestra estructura HTML: ¡el <li> y sus casillas de verificación y botones!


Para solucionar este problema, necesitamos devolver un componente <Todo /> desde nuestra función map(); recuerde que JSX es JavaScript, por lo que podemos usarlo junto con cualquier otra sintaxis de JavaScript más familiar.

Probemos lo siguiente en lugar de lo que ya tenemos:

```
const taskList = props.tasks?.map((task) => <Todo />);

```


Mire nuevamente su aplicación; Ahora nuestras tareas se parecen más a lo que solían ser, pero les faltan los nombres de las tareas mismas.

Recuerde que cada tarea que asignamos contiene la identificación, el nombre y las propiedades completadas que queremos pasar a nuestro componente <Todo />.

Si juntamos ese conocimiento, obtenemos un código como este:

```
const taskList = props.tasks?.map((task) => (
  <Todo id={task.id} name={task.name} completed={task.completed} />
));

```

Ahora la aplicación tiene el mismo aspecto que antes y nuestro código es menos repetitivo.


## Claves únicas

Ahora que React está renderizando nuestras tareas a partir de una matriz, tiene que realizar un seguimiento de cuál es cuál para poder renderizarlas correctamente.

React intenta hacer sus propias conjeturas para realizar un seguimiento de las cosas, pero podemos ayudarlo pasando un prop key a nuestros componentes <Todo />. 

La key es un prop especial administrado por React; no puedes usar la palabra clave para ningún otro prop.


Debido a que las claves deben ser únicas, reutilizaremos la identificación de cada objeto de tarea como clave.

Actualice su constante taskList así

```
const taskList = props.tasks?.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
  />
));

```

Siempre debes pasar una clave única a cualquier cosa que renderices con iteración.

Nada obvio cambiará en su navegador, pero si no usa claves únicas, React registrará advertencias en su consola y su aplicación puede comportarse de manera extraña.


## Componentizando la app

Ahora que hemos resuelto nuestro componente más importante, podemos convertir el resto de nuestra aplicación en componentes. 

Recordando que los componentes son piezas obvias de la interfaz de usuario, piezas de la interfaz de usuario reutilizadas o ambas, podemos crear dos componentes más.

<Form />

<FilterButton />


Como sabemos que necesitamos ambos, podemos agrupar parte del trabajo de creación de archivos en un comando de terminal.

Teniendo cuidado de estar en el directorio raíz de su aplicación:

```
touch src/components/{Form,FilterButton}.jsx

```


### <Form />

Abra components/Form.jsx y haga lo siguiente:

Declare una función Form() y expórtela al final del archivo.

Copie las etiquetas <form> y todo lo que hay entre ellas desde App.jsx y péguelas dentro de la declaración de devolución de Form().


Form.jsx debería leerse así:

```
function Form() {
  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;

```


### <FilterButton />

Haga lo mismo que hizo para crear Form.jsx dentro de FilterButton.jsx, pero llame al componente FilterButton() y copie el HTML para el primer botón dentro de <div className="filters btn-group stack-exception"> de App.jsx en la declaración de devolución.

El archivo debería leerse así:

```
function FilterButton() {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed="true">
      <span className="visually-hidden">Show </span>
      <span>all </span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;

```

Nota: Puede notar que aquí estamos cometiendo el mismo error que cometimos por primera vez con el componente <Todo />, en el sentido de que cada botón será el mismo.

Lo arreglaremos más tarde. 


## Importando todos los componentes

Hagamos uso de nuestros nuevos componentes.

Agregue algunas declaraciones de importación más en la parte superior de App.jsx y haga referencia a los componentes que acabamos de crear. 

Luego, actualice la declaración de retorno de App() para que represente nuestros componentes.


Cuando haya terminado, App.jsx se leerá así:

```
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {
  const taskList = props.tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;

```

Con esto implementado, su aplicación React debería funcionar básicamente igual que antes, pero usando sus nuevos y brillantes componentes.



# Interactivadad: Eventos y Estado

Con nuestro plan de componentes elaborado, ahora es el momento de comenzar a actualizar nuestra aplicación desde una interfaz de usuario completamente estática a una que realmente nos permita interactuar y cambiar cosas.


## Manejo de eventos

Si hasta ahora solo ha escrito JavaScript básico, es posible que esté acostumbrado a tener un archivo JavaScript separado en el que consulte algunos nodos DOM y les adjunte listeners.

Por ejemplo, un archivo HTML podría tener un botón como este

```
<button type="button">Say hi!</button>

```

Y un archivo JavaScript podría tener un código como este:

```
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("hi!");
});

```

En JSX, el código que describe la interfaz de usuario se encuentra junto a nuestros detectores de eventos:

```
<button type="button" onClick={() => alert("hi!")}>
  Say hi!
</button>

```

En este ejemplo, agregamos un atributo onClick al elemento <button>.

El valor de ese atributo es una función que desencadena una alerta simple.

Esto puede parecer contrario a los consejos de mejores prácticas sobre no escribir detectores de eventos en HTML, pero recuerde: JSX no es HTML.


El atributo onClick tiene un significado especial aquí: le dice a React que ejecute una función determinada cuando el usuario hace clic en el botón.

Hay un par de cosas más a tener en cuenta.

La naturaleza camel de onClick es importante: JSX no reconocerá onclick (nuevamente, ya se usa en JavaScript para un propósito específico, que está relacionado pero es diferente: propiedades estándar del controlador onclick).

Todos los eventos del navegador siguen este formato en JSX: on, seguido del nombre del evento.


Apliquemos esto a nuestra aplicación, comenzando con el componente Form.jsx.


### Manejo del envío de formularios

En la parte superior de la función del componente Form() (es decir, justo debajo de la función Form() {línea), cree una función llamada handleSubmit().

Esta función debería evitar el comportamiento predeterminado del evento de envío.

Después de eso, debería activar una alerta(), que puede decir lo que quieras. 

Debería terminar pareciéndose a esto:

```
function handleSubmit(event) {
  event.preventDefault();
  alert("Hello, world!");
}

```

Para usar esta función, agregue un atributo onSubmit al elemento <form> y establezca su valor en la función handleSubmit:

```
<form onSubmit={handleSubmit}>

```

Ahora, si regresa a su navegador y hace clic en el botón "Agregar", su navegador le mostrará un cuadro de diálogo de alerta con las palabras "¡Hola mundo!". - o lo que sea que elijas escribir allí.


## Callbacks props

En las aplicaciones React, la interactividad rara vez se limita a un solo componente: los eventos que suceden en un componente afectarán a otras partes de la aplicación.

Cuando empecemos a darnos el poder de realizar nuevas tareas, las cosas que sucedan en el componente <Form /> afectarán la lista representada en <App />.


Queremos que nuestra función handleSubmit() nos ayude en última instancia a crear una nueva tarea, por lo que necesitamos una forma de pasar información de <Form /> a <App />. 

No podemos pasar datos de un elemento hijo a un padre de la misma manera que pasamos datos de un padre a un hijo usando props estándar.

En su lugar, podemos escribir una función en <App /> que esperará algunos datos de nuestro formulario como entrada y luego pasar esa función a <Form /> como prop.

Esta función como prop se llama callback de prop. 

Una vez que tengamos nuestro callback prop podemos llamarlo dentro de <Form /> para enviar los datos correctos a <App />.


### Manejando envío de formulario vía callback

Dentro de la función App() en App.jsx, cree una función llamada addTask() que tenga un único parámetro nombre:

```
function addTask(name) {
  alert(name);
}

```

A continuación, pase addTask() a <Form /> como prop.

El prop puede tener el nombre que quieras, pero elige un nombre que entenderás más adelante.

Algo como addTask funciona porque coincide con el nombre de la función y con lo que hará la función.

La llamada al componente <Form /> debe actualizarse de la siguiente manera:

```
<Form addTask={addTask} />

```

Para usar este prop, debemos cambiar la firma/signature de la función Form() en Form.jsx para que acepte props como parámetro:

```
function Form(props) {
  // ...
}

```

¡Finalmente, podemos usar este prop dentro de la función handleSubmit() en su componente <Form />! Actualízalo de la siguiente manera:

```
function handleSubmit(event) {
  event.preventDefault();
  props.addTask("Say hello!");
}

```

Al hacer clic en el botón "Add" en su navegador se demostrará que la función callback addTask() funciona, ¡pero sería bueno si pudiéramos recibir la alerta para mostrarnos lo que estamos escribiendo en nuestro campo de entrada!


### Notas sobre las convenciones de nomenclatura

Pasamos la función addTask() al componente <Form /> como el prop addTask para que la relación entre la función addTask() y el prop addTask permanezca lo más clara posible.

Podríamos haber pasado addTask() a <Form /> con cualquier otro nombre, como este

```
- <Form addTask={addTask} />
+ <Form onSubmit={addTask} />

```

Esto haría que la función addTask() estuviera disponible para el componente <Form /> como prop onSubmit.

Ese prop podría usarse en Form.jsx de esta manera:

```
function handleSubmit(event) {
  event.preventDefault();
- props.addTask("Say hello!");
+ props.onSubmit("Say hello!");
}

```

Aquí, el prefijo on nos dice que la propiedad es una función callback.

Submit es es nuestra pista de que un evento de envío activará esta función.


Si bien los props de callback a menudo coinciden con los nombres de controladores de eventos familiares, como onSubmit o onClick, se les puede nombrar casi cualquier cosa que ayude a aclarar su significado.

Un componente hipotético <Menú /> podría incluir una función callback que se ejecuta cuando se abre el menú, así como una función callback separada que se ejecuta cuando se cierra. 

```
<Menu onOpen={() => console.log("Hi!")} onClose={() => console.log("Bye!")} />

```

Esta convención de nomenclatura on* es muy común en el ecosistema de React, así que téngala en cuenta mientras continúa aprendiendo.

En aras de la claridad, nos quedaremos con addTask y nombres de props similares durante el resto de este tutorial.


## Datos persistentes y cambiantes con el estado.

Hasta ahora, hemos usado props para pasar datos a través de nuestros componentes y esto nos ha funcionado muy bien.

Sin embargo, ahora que nos ocupamos de la interactividad, necesitamos la capacidad de crear nuevos datos, conservarlos y actualizarlos más tarde.

Los props no son la herramienta adecuada para este trabajo porque son inmutables: un componente no puede cambiar ni crear sus propios pŕops.


Aquí es donde entra en juego state. 

Si pensamos en los props como una forma de comunicación entre componentes, podemos pensar en el estado como una forma de darles "memoria" a los componentes: información que pueden conservar y actualizar según sea necesario.


React proporciona una función especial para introducir estado a un componente, acertadamente llamada useState().


Nota: useState() es parte de una categoría especial de funciones llamadas jooks. 


Para usar useState(), necesitamos importarlo desde el módulo React.

Agregue la siguiente línea en la parte superior de su archivo Form.jsx, encima de la definición de la función Form():

```
import { useState } from "react";

```

useState() toma un único argumento que determina el valor inicial del estado.

Este argumento puede ser una cadena, un número, una matriz, un objeto o cualquier otro tipo de datos de JavaScript.

useState() devuelve una matriz que contiene dos elementos.

El primer elemento es el valor actual del estado; el segundo elemento es una función que se puede utilizar para actualizar el estado.


Creemos un estado name.

Escriba lo siguiente encima de su función handleSubmit(), dentro de Form():

```
const [name, setName] = useState("Learn React");

```

En esta línea de código suceden varias cosas:

Estamos definiendo una constante de nombre con el valor "Learn React".

Estamos definiendo una función cuyo trabajo es modificar el nombre, llamada setName().

useState() devuelve estas dos cosas en una matriz, por lo que estamos usando la desestructuración de matrices para capturarlas a ambas en variables separadas.


### Leer estado

Puede ver el estado name en acción de inmediato.

Agregue un atributo de value a la entrada del formulario y establezca su valor en name.

Su navegador mostrará "Learn React" dentro de la entrada.

```
<input
  type="text"
  id="new-todo-input"
  className="input input__lg"
  name="text"
  autoComplete="off"
  value={name}
/>

```

Cambie "Learn React" a una cadena vacía una vez que haya terminado; esto es lo que queremos para nuestro estado inicial:

```
const [name, setName] = useState("");

```


### Leer entrada de usuario

Antes de que podamos cambiar el valor de name, debemos capturar la entrada del usuario a medida que escribe. 

Para ello, podemos escuchar el evento onChange.

Escribamos una función handleChange() y escuchémosla en el elemento <input />.

```
// near the top of the `Form` component
function handleChange() {
  console.log("Typing!");
}

...

// Down in the return statement
<input
  type="text"
  id="new-todo-input"
  className="input input__lg"
  name="text"
  autoComplete="off"
  value={name}
  onChange={handleChange}
/>;

```

Actualmente, el valor de nuestra entrada no cambiará cuando intente ingresar texto en ella, pero su navegador registrará la palabra "¡Escribiendo!" a la consola de JavaScript, para que sepamos que nuestro detector de eventos está adjunto a la entrada.

Para leer las pulsaciones de teclas del usuario, debemos acceder a la propiedad de valor de la entrada. 

Podemos hacer esto leyendo el objeto de evento que recibe handleChange() cuando se llama.

El evento, a su vez, tiene una propiedad target, que representa el elemento que activó el evento de cambio. 

Ese es nuestro input. 

Entonces, event.target.value es el texto dentro de la entrada.

Podemos hacer console.log() este valor para verlo en la consola de su navegador.

Intente actualizar la función handleChange() de la siguiente manera y escriba la entrada para ver el resultado en su consola:

```
function handleChange(event) {
  console.log(event.target.value);
}

```


### Actualizando estado

El registro no es suficiente: ¡de hecho queremos almacenar lo que el usuario escribe y representarlo en la entrada!

Cambie su llamada console.log() a setName(), como se muestra a continuación.

```
function handleChange(event) {
  setName(event.target.value);
}

```

Ahora, cuando escriba la entrada, las pulsaciones de teclas completarán la entrada, como era de esperar.


Tenemos un paso más: necesitamos cambiar nuestra función handleSubmit() para que llame a props.addTask con name como argumento.

Con nuestro prop callback, servirá para enviar la tarea de regreso al componente de la aplicación, para que podamos agregarla a nuestra lista de tareas en una fecha posterior.

Como buena práctica, debes borrar la entrada después de enviar el formulario, por lo que llamaremos a setName() nuevamente con una cadena vacía para hacerlo:

```
function handleSubmit(event) {
  event.preventDefault();
  props.addTask(name);
  setName("");
}

```

Por último, puede escribir algo en el campo de entrada de su navegador y hacer clic en Add; todo lo que haya escrito aparecerá en un cuadro de diálogo de alerta.


Su archivo Form.jsx ahora debería leerse así:

```
import { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;

```

Nota: Notará que puede enviar tareas vacías simplemente presionando el botón Agregar sin ingresar el nombre de la tarea.

Como sugerencia, probablemente necesites agregar algún tipo de verificación en la función handleSubmit()


## Agregando task

Ahora que hemos practicado con eventos, callbacks props, estamos listos para escribir funciones que permitirán al usuario agregar una nueva tarea desde su navegador.


### Tasks como estado

Necesitamos importar useState a App.jsx para poder almacenar nuestras tareas en estado.

Agregue lo siguiente a la parte superior de su archivo App.jsx:

```
import { useState } from "react";

```

Queremos pasar props.tasks al hook useState(); esto preservará su estado inicial. 

Agregue lo siguiente justo en la parte superior de la definición de la función App():

```
const [tasks, setTasks] = useState(props.tasks);

```

Ahora, podemos cambiar nuestro taskList mapping para que sea el resultado de mapping tasks en lugar de props.tasks.

Su declaración constante de taskList ahora debería verse así:

```
const taskList = tasks?.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
  />
));

```


### Agregando task

Ahora tenemos un hook setTasks que podemos usar en nuestra función addTask() para actualizar nuestra lista de tareas.

Sin embargo, hay un problema: no podemos simplemente pasar el argumento name de addTask() a setTasks, porque tasks es una matriz de objetos y nombre es una cadena.

Si intentáramos hacer esto, la matriz sería reemplazada por la cadena.


En primer lugar, debemos ponerle name a un objeto que tenga la misma estructura que nuestras tareas existentes.

Dentro de la función addTask(), crearemos un objeto newTask para agregarlo a la matriz.


Luego necesitamos crear una nueva matriz con esta nueva tarea agregada y luego actualizar el estado de los datos de las tareas a este nuevo estado.

Para hacer esto, podemos usar la sintaxis extendida para copiar la matriz existente y agregar nuestro objeto al final.

Luego pasamos esta matriz a setTasks() para actualizar el estado.


En conjunto, su función addTask() debería leerse así:

```
function addTask(name) {
  const newTask = { id: "id", name, completed: false };
  setTasks([...tasks, newTask]);
}

```

¡Ahora puedes usar el navegador para agregar una tarea a nuestros datos!

Escriba cualquier cosa en el formulario y haga clic en "Agregar" (o presione la tecla Intro) y verá su nueva tarea pendiente aparecer en la interfaz de usuario.


Sin embargo, tenemos otro problema: nuestra función addTask() le da a cada tarea la misma identificación.

Esto es malo para la accesibilidad y hace imposible que React distinga tareas futuras con el accesorio clave.

De hecho, React le dará una advertencia en su consola DevTools: "Advertencia: Encontré dos child con la misma clave..."


Necesitamos arreglar esto.

Crear identificadores únicos es un problema difícil, uno para el cual la comunidad JavaScript ha escrito algunas bibliotecas útiles.

Usaremos nanoid porque es pequeño y funciona.


Asegúrese de estar en el directorio raíz de su aplicación y ejecute el siguiente comando de terminal

```
npm install nanoid

```

Si estás usando yarn, necesitarás lo siguiente: yarn add nanoide.


Ahora podemos usar nanoid para crear identificaciones únicas para nuestras nuevas tareas.

En primer lugar, impórtelo incluyendo la siguiente línea en la parte superior de App.jsx:

```
import { nanoid } from "nanoid";

```

Ahora actualicemos addTask() para que cada ID de tarea se convierta en un prefijo todo más una cadena única generada por nanoid. 

Actualice su declaración constante newTask a esto:

```
const newTask = { id: `todo-${nanoid()}`, name, completed: false };

```

Guarde todo y vuelva a probar su aplicación; ahora puede agregar tareas sin recibir esa advertencia sobre ID duplicados.


## Counting tasks

Ahora que podemos agregar nuevas tareas, es posible que notes un problema: nuestro encabezado dice "Quedan 3 tareas", ¡sin importar cuántas tareas tengamos! 

Podemos solucionar este problema contando la longitud de taskList y cambiando el texto de nuestro encabezado en consecuencia.


Agregue esto dentro de su definición de App(), antes de la declaración de devolución:

```
const headingText = `${taskList.length} tasks remaining`;

```

Esto es casi correcto, excepto que si nuestra lista alguna vez contiene una sola tarea, el encabezado seguirá usando la palabra "tareas".

También podemos convertir esto en una variable. 


Actualice el código que acaba de agregar de la siguiente manera:

```
const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
const headingText = `${taskList.length} ${tasksNoun} remaining`;


```


Ahora puede reemplazar el contenido de texto del encabezado de la lista con la variable headerText.

Actualiza tu <h2> así:

```
<h2 id="list-heading">{headingText}</h2>

```

Guarde el archivo, vuelva a su navegador e intente agregar algunas tareas: el recuento ahora debería actualizarse como se esperaba.


## Completando task

Es posible que notes que, cuando haces clic en una casilla de verificación, se marca y desmarca adecuadamente. 

Como característica de HTML, el navegador sabe cómo recordar qué casillas de verificación están marcadas o desmarcadas sin nuestra ayuda.

Sin embargo, esta característica oculta un problema: alternar una casilla de verificación no cambia el estado en nuestra aplicación React.

Esto significa que el navegador y nuestra aplicación ahora no están sincronizados. 

Tenemos que escribir nuestro propio código para volver a sincronizar el navegador con nuestra aplicación.


### Bug

Antes de solucionar el problema, observemos cómo sucede.

Comenzaremos escribiendo una función toggleTaskCompleted() en nuestro componente App(). 

Esta función tendrá un parámetro de identificación, pero no lo usaremos todavía.

Por ahora, registraremos la primera tarea en la matriz en la consola; inspeccionaremos qué sucede cuando la marcamos o desmarcamos en nuestro navegador:


Agregue esto justo encima de su declaración constante de taskList

```
function toggleTaskCompleted(id) {
  console.log(tasks[0]);
}

```

A continuación, agregaremos toggleTaskCompleted a los props de cada componente <Todo /> representado dentro de nuestra lista de tareas; actualízalo así:

```
const taskList = tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
  />
));

```

A continuación, vaya a su componente Todo.jsx y agregue un controlador onChange a su elemento <input />, que debería usar una función anónima para llamar a props.toggleTaskCompleted() con un parámetro de props.id.

El <input /> ahora debería verse así:

```
<input
  id={props.id}
  type="checkbox"
  defaultChecked={props.completed}
  onChange={() => props.toggleTaskCompleted(props.id)}
/>

```

Guarde todo y regrese a su navegador y observe que nuestra primera tarea, Comer, está marcada.

Abra su consola JavaScript, luego haga clic en la casilla de verificación junto a Comer.

Se desmarca, como esperábamos.

Sin embargo, su consola JavaScript registrará algo como esto:

```
Object { id: "task-0", name: "Eat", completed: true }

```

La casilla de verificación se desmarca en el navegador, pero nuestra consola nos dice que Eat aún está completo.

¡Lo arreglaremos a continuación!


### Sincronizar el navegador con nuestros datos

Revisemos nuestra función toggleTaskCompleted() en App.jsx. 

Queremos que cambie la propiedad completada solo de la tarea que se activó y deje todas las demás en paz.

Para hacer esto, map() sobre la lista de tareas y simplemente cambiaremos la que completamos.

Actualice su función toggleTaskCompleted() a lo siguiente:

```
function toggleTaskCompleted(id) {
  const updatedTasks = tasks.map((task) => {
    // if this task has the same ID as the edited task
    if (id === task.id) {
      // use object spread to make a new object
      // whose `completed` prop has been inverted
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  setTasks(updatedTasks);
}

```

Aquí, definimos una constante de tareas actualizadas que se asigna a la matriz de tareas original.

Si la propiedad id de la tarea coincide con la id proporcionada a la función, usamos la sintaxis de distribución de objetos para crear un nuevo objeto y alternamos la propiedad completada de ese objeto antes de devolverlo.

Si no coincide, devolvemos el objeto original.


Luego llamamos a setTasks() con esta nueva matriz para actualizar nuestro estado.


## Eliminar tasks

Eliminar una tarea seguirá un patrón similar a alternar su estado completado:

Necesitamos definir una función para actualizar nuestro estado, luego pasar esa función a <Todo /> como prop y llamarla cuando ocurra el evento correcto.


### delateTask callback

Aquí comenzaremos escribiendo una función deleteTask() en el componente de su aplicación.

Al igual que toggleTaskCompleted(), esta función tomará un parámetro de identificación y, para empezar, registraremos esa identificación en la consola.

Agregue lo siguiente a continuación toggleTaskCompleted():

```
function deleteTask(id) {
  console.log(id);
}

```

A continuación, agregue otro prop callback de llamada a nuestra matriz de componentes <Todo />:

```
const taskList = tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
  />
));

```

En Todo.jsx, queremos llamar a props.deleteTask() cuando se presiona el botón "Eliminar".

deleteTask() necesita saber el ID de la tarea que la llamó, para poder eliminar la tarea correcta del estado


Actualice el botón "Eliminar" dentro de Todo.jsx, así:

```
<button
  type="button"
  className="btn btn__danger"
  onClick={() => props.deleteTask(props.id)}>
  Delete <span className="visually-hidden">{props.name}</span>
</button>

```

Ahora, cuando haces clic en cualquiera de los botones "Eliminar" de la aplicación, la consola de tu navegador debería registrar el ID de la tarea relacionada.

En este punto, su archivo Todo.jsx debería verse así:

```
function Todo(props) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}>
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;

```


## Eliminar tareas del estado y la interfaz de usuario

Ahora que sabemos que deleteTask() se invoca correctamente, podemos llamar a nuestro gancho setTasks() en deleteTask() para eliminar esa tarea del estado de la aplicación, así como visualmente en la interfaz de usuario de la aplicación.

Dado que setTasks() espera una matriz como argumento, debemos proporcionarle una nueva matriz que copie las tareas existentes, excluyendo la tarea cuyo ID coincida con el que se pasó a deleteTask().


Esta es una oportunidad perfecta para utilizar Array.prototype.filter()

Podemos probar cada tarea y excluir una tarea de la nueva matriz si su ID de propiedad coincide con el argumento de ID pasado a deleteTask().


Actualice la función deleteTask() dentro de su archivo App.jsx de la siguiente manera:

```
function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
}

```

Pruebe su aplicación nuevamente.

¡Ahora deberías poder eliminar una tarea de tu aplicación!


En este punto, su archivo App.jsx debería verse así:

```
import { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {
  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  const [tasks, setTasks] = useState(props.tasks);
  const taskList = tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;

```

# Resumen

Brindamos información detallada sobre cómo React maneja los eventos y el estado, y le brindamos la funcionalidad implementada para agregar tareas, eliminar tareas y alternar tareas a medida que se completan.















