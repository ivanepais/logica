react

moz-todo-react
├── README.md
├── index.html (renderización/vite inyect react/jsx)
├── node_modules
├── package-lock.json (bloque/lleva las depend)
├── package.json (dependencias)
├── public (archivos estáticos para el navegador/vite no los compila)
│   └── vite.svg
├── src (código fuente de la app/vite convert JSX en JS para el navegador)
│   ├── App.css
│   ├── App.jsx (jsx)
│   ├── assets (imports)
│   │   └── react.svg
│   ├── index.css
│   └── main.jsx (jsx)
└── vite.config.js


syntax/express jsx:

{}


components:

solo un proposito
ej, src/App.jsx (componente app en dir src)
también encontraremos el css de estos componentes

ej: component <App />

imports...

function App() {
  const [count, setCount] = useState(0);
  return (
  //code..
  )
}

export default...

se llama: <App />

App.jsx consta de tres partes principales:

1. Declaraciones de importación superior:
código que se ha definido en otro lugar
ej, import hooks: son una forma de utilizar las funciones de React dentro de un componente.
ej, import import './App.css' para el estilo del componente.
las rutas son ./ o /, según la estructura local. 

2. La función App() en el medio:
define la estructura del componente de la aplicación.
devuelve una expresión JSX.
define lo que su navegador finalmente representa en el DOM.
debajo de return hay una sintaxis especial: <>. 
Este es un fragment.
Los componentes de React tienen que devolver un único elemento JSX. 
Y los fragmentos nos permiten hacerlo sin representar <div> arbitrarios en el navegador.

3. una declaración de exportación inferior:
hace que nuestra función App() esté disponible para otros módulos. 


En src/main.jsx es donde se utiliza el componente  <App />:

Este archivo es el punto de entrada para nuestra aplicación e inicialmente se ve así

imports...

createRoot... render()

strictMode
<App />
strictMode

Comienza importando todos los módulos JS y otros activos que necesita para ejecutarse.
Como React y ReactDOM
no usamos rutas locales, aparecen como dependencias en nuestro archivo package.json. 
importamos nuestra función App() y index.css
función ReactDOM.createRoot() define el nodo raíz de nuestra aplicación.
toma como argumento el elemento DOM dentro del cual queremos que se represente nuestra aplicación React.
En este caso, ese es el elemento DOM con un ID de root
encadenamos el método render() a la llamada createRoot(), pasándole la expresión JSX que queremos renderizar dentro de nuestra raíz.
Al escribir <App /> como esta expresión JSX, le decimos a React que llame a la función App() que representa el componente de la aplicación dentro del nodo raíz.
<App /> se representa dentro de un componente especial <React.StrictMode>. 
Este componente ayuda a los desarrolladores a detectar posibles problemas en su código.


Usando React y JSX con JavaScript:

Agregar atributos a elementos JSX, cómo escribir comentarios, cómo representar contenido a partir de variables y otras expresiones, y cómo pasar datos a componentes con accesorios.

Los elementos JSX pueden tener atributos, al igual que los elementos HTML
Algunos atributos son diferentes a sus homólogos HTML
Debido a las palabras reservadas.

Expresiones JavaScript como contenido:
A diferencia de HTML, JSX nos permite escribir variables y otras expresiones de JavaScript junto con el resto de nuestro contenido. 
Declaremos una variable llamada suject justo encima de la función App():

const subject = "React";
function App() {
  // code omitted for brevity
}

<h1>Hello, {subject}!</h1>

Las llaves le dicen a React que queremos leer el valor de la variable de asunto, en lugar de representar la cadena literal "subject".
Puede poner cualquier expresión JavaScript válida entre llaves en JSX; React lo evaluará y presentará el resultado de la expresión como contenido final.

Mas expresiones JS validas: 

{/* Hello, React :)! */}
<h1>Hello, {subject + ' :)'}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4! */}
<h1>Hello, {2 + 2}!</h1>

¡Incluso los comentarios en JSX están escritos entre llaves! Esto se debe a que los comentarios también son técnicamente expresiones de JavaScript. 


props:

Propieades de un componente 
Son un medio para pasar datos a un componente de React.
Su sintaxis es idéntica a la de los atributos
prop="valor".
los props se pasan a componentes de React.
En React, el flujo de datos es unidireccional
los props solo se pueden pasar de los componentes principales 
a los componentes secundarios.

Abramos main.jsx y demos a nuestro componente <App /> 
su primer props.
ej, prop subject a la llamada del componente <App />
con un valor Clarice.

<App subject="Clarice" />

Antes teniamos como valor de subject a la cadena 'React'

De vuelta en App.jsx, revisemos la función App():
Cambie la firma/signature de App() para que acepte props
como parámetro y registre los pros en la consola para que pueda inspeccionarlos. 
Elimine también el subject const; ya no lo necesitamos. 

Su archivo App.jsx debería verse así:

function App(props) {
  console.log(props);
  return (
	// code omitted for brevity
  );
}

Guarde su archivo y verifique su navegador.
Verás un fondo en blanco sin contenido.
Esto se debe a que estamos intentando leer una variable subject que ya no está definida.
Solucione este problema comentando la línea <h1>¡Hola {subject}!</h1>.
Si su editor de código sabe cómo analizar JSX (¡la mayoría de los editores modernos lo saben!)
puede usar su método abreviado de comentarios integrado: Ctrl + / (en Windows) o Cmd + / (en macOS) – para crear comentarios más rápidamente.

Guarde el archivo con esa línea comentada.
Esta vez, deberías ver el mensaje "¡Haz clic en mí!" botón renderizado por sí mismo.
Si abre la consola de desarrollador de su navegador, verá un mensaje similar a este:

Object { subject: "Clarice" }

La propiedad del objeto subject corresponde a la propiedad subject 
que agregamos a nuestra llamada al componente <App />, 
y la cadena Clarice corresponde a su valor.

Los props de los componentes en React siempre se recopilan en objetos de esta manera.
Usemos este prop subject para corregir el error en nuestra aplicación.
Descomente la línea <h1>¡Hola, {subject}!</h1> 
y cámbiela a <h1>¡Hola, {props.subject}!</h1>, 
luego elimine la instrucción console.log().

Se debería ver así: 

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

Cuando guardes, la aplicación ahora debería saludarte con "¡Hola, Clarice!".

Si regresa a main.jsx, edita el valor de subject y guarda, su texto cambiará.

Para practicar más, puede intentar agregar un elemento de saludo adicional a la llamada del componente <App /> dentro de main.jsx y usarlo junto con el elemento de asunto dentro de App.jsx.



--- comienzo de todo list

Requisitos como usuario:


Estructura de la app en el componente <App />:
Sin componentes ni interacción.
Agregarle CSS 



--- Componentes

Conceptos para dividir la app componenetes

Definir un componente puede parecer complicado hasta que tengas algo de práctica, pero lo esencial es:

Si representa una "parte" obvia de su aplicación, probablemente sea un componente.
Si se reutiliza con frecuencia, probablemente sea un componente.

Ese segundo punto es especialmente valioso.
crear un componente a partir de elementos comunes de la interfaz de usuario le permite cambiar su código en un solo lugar y ver esos cambios en todos los lugares donde se usa ese componente.
Tampoco es necesario dividir todo en componentes de inmediato.
Tomemos el segundo punto como inspiración y hagamos un componente a partir de la pieza más reutilizada y más importante de la interfaz de usuario:
Un elemento de la lista de tareas pendientes.

Tomando como referencia el esqueleto del componente <App /> 
Dividimos esta estructura en componentes.


Uson intensivo de props: 
Se usan cuando necesitamos valores en toda la app o comp
{props.valuex}


Iteración:



--- Interactidad 1


--- Interactividad 2


state:
