# Think app 

1. botones: bio (texto y resalt leng) y portf (lista texto y links)

2. widgets: reloj y stock.

3. wallpapers: cambia según hora, dia y noche; medio dia y tarde.  


# Todo 

1. botones: bio (texto y resalt leng) y portf (lista texto y links)

wrapper: -> box o main

botón -> <btn> form

bio: 
texto -> <p>
resalt -> <b>, etc

port: 
texto -> <p>


2. widgets: reloj y stocks.

func reloj

api widg syp, nasd y down jones o tipo finviz


3. wallpapers: cambia según hora, dia y noche; medio dia y tarde.  

func reloj o truco con los valores (fijos/global)


# How todo


# Diagrams

## Objetos

### ux: 

1. header

2. nav / panel / botts / list/links 

3. main / content 

4. footer


### Content en objetos 

1. header:
...

2. nav / panel / botts / list/links: 

widget: reloj/hora y stocks

3. main / content: 

bio y 

4. footer:


# How app-work


# How todo - steps 

1. HTML: 

Estructura semantica para objetos 

2. CSS: 

varios: normalize, particular para objetos (para hacerlo mantenible) o general

3. Js: 

func minimas, docmument (inputs y outputs), arrow func y return

ds y algoritm


# Code design 

1. imperativa 

Variables/inicializadores, bucles, bucles dobles, condicionales

métodos, excepciones 

2. func

Desde comportamiento minimo, retorno

3. oop

accesos, getters, setters 

4. kiss/yagni/...

5. solid  

6. composición sobre herencia 


# Arq

Monolit, microserv, events, tdd, etc


# Estructura 

# Estructura html-css-js:

/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── assets/
│   ├── images/
│   │   └── logo.png
│   └── fonts/
│       └── custom-font.woff
├── lib/
│   └── third-party-library.js
├── README.md
└── .gitignore


-add icons fold
-add media
-add apis
-add modules: funct, class
-add class
-jerarquia dominio-feature
-test: func, class


## Modulos

├── js/
│   └── app.js
	└── mod1-> name 
	└── mod2-> name


# Más para agregar
...

# Archivos nombre y objetos 

Mismo objeto/nombre en los archivos de código


# Paquetes, Dependencias de desarrollo y producción


# Ideas/Working/Soluciones 

## main content HTML, CSS y JS 

dos botones, el contenido aparece con el click

### Opciones js:
 
1. Una sola func para la lista de los proyect que aparece 
en el lugar de la bio html

2. dos func una para cada, una activa con un btn activo
la otra func esconde el btn 


#### plan js: 
##### caso más fácil 
la primera opcion js 


### opciones html:

1. main -> bio  (css class)
	box y box -> flex/grid
	btn y btn 

2. main -> bio (css class, etc)
	box -> box-bio
	box -> box-proyects
	btn -> btn-bio
	btn -> btn-proyects
	

visualización mejor/adecuada?

#### plan html: 
##### caso más fácil 
empezar por html block lay

## Objtivo/salida/exito/deseo:

dos botones con click que muestren su contenido. 


## Objetivo/estructura web

"task bar": reloj  
main: 
triple contenido: bio/proy, stocks y noticias

modulos: 
...


# Estudio

ninja js, elocuentjs


## Busqueda recursos

clocks for devs/widget
widget for devs 
widget news for devs
widget stock price for devs


# Practica Final 

## Arq y Dis

Todo aparezca con JS interactivo 
html y css (?

Modulos: 
reflejen los obj 
reloj, widgets, botones

diseño: 
ej: html base y funciones que interactuan con esos elem

content after, before

event a elem html

modulos js header, main, etc
con func reflej objet

dos páginas: home y actualidad

modulos: home y act


## Cambios

Circulo de los iconos más anchos

sacarle las sombras a todos los elementos y hacer un border 5/10px, em, etc. 

over color a los bio buttons

centrar texto articulo

fuent button

reemplazar texto de botones por un icono: persona/cabeza/cara, maletin

cargar tres css: normalize, normal flow y responsive 


## Reemplazar un elemento html por otro con js dom

Tenemos un elemento de párrafo con un saludo

```
<p id="node1" class="text-blue">Hello, world!</p>

```

Ahora digamos que queremos hacer una copia, cambiar el ID, cambiar la clase y cambiar el texto.

```
// Get the original
var elem = document.querySelector('#node1');

// Make a copy
var copy = elem.cloneNode(true);

// Change all the things
copy.id = 'node2';
copy.className = 'text-purple';
copy.textContent = 'Hi, universe!';

```

Ahora imaginemos que queremos reemplazar el elemento original con la nueva copia.


### replaceChild() method

Llama al método replaceChild() en el parentNode del elemento de destino. Luego, pasa el nuevo elemento y el que se va a reemplazar como argumentos.

```
// Replace the original with the copy
elem.parentNode.replaceChild(copy, elem);

```

El método replaceChild() funciona en todos los navegadores modernos y también en IE9.


### replaceWith() method

El método replaceWith() utiliza una sintaxis más simple.

```
// Replace the original with the copy
elem.replaceWith(copy);

```

Llámalo en el elemento original y pasa la copia como argumento. Y eso es todo.


Necesitamos ejecutar el método replaceWith() tomando el elemento anterior como referencia y pasando un nuevo elemento como referencia. Podemos crear un nuevo elemento en formato de cadena.

```
oldElement.replaceWith(newElement);

```

En el ejemplo siguiente, tenemos un elemento div en el HTML que contiene el id 'oldElement'. 

Llamamos a la función replaceElement() al hacer clic en el botón. 

En la función replaceElement(), utilizamos el método createElement() para crear un nuevo elemento 'h2'. 

Además, utilizamos la propiedad textContent para agregar el contenido a los elementos HTML recién creados. 

Después de eso, utilizamos el método replaceWith() para reemplazar el oldElement por un newElement.

En el resultado, los usuarios pueden hacer clic en el botón y ver los cambios en la página web.

```
<html>
<body>
   <h3> Using the <i> replaceWith() method </i> to replace the HTML elements in JavaScript </h3>
   <div id = "oldElement"> This div is the old element. </div>
   <button onclick = "replaceElement()"> Replace Element </button>
   <script>
      function replaceElement() {
         var newElement = document.createElement('h2');
         newElement.textContent = 'This element is the new element.';
         var oldElement = document.getElementById('oldElement');
         oldElement.replaceWith(newElement);
     }
   </script>
</html>

```


## script async y defer 

en head o al final del body 

<script src="index.js"></script>
<script src="script.js"></script>

Cuando no hay ningún atributo (defer o async) en la etiqueta de script como este:

entonces todos los scripts se descargan y ejecutan uno tras otro simultáneamente.

Por lo tanto, bloqueará el análisis del documento hasta que se descarguen y ejecuten todos los scripts y, por lo tanto, llevará algún tiempo cargar la página por completo.


Por lo tanto, es una práctica común agregar todos los scripts antes del final de la etiqueta body para que el navegador genere primero el DOM y luego se ejecuten todos los scripts de esta manera:

```
<body>
 .
 .
 .
<script src="index.js"></script>
<script src="script.js"></script>
</body>

```

Cuando agregamos el atributo defer a la etiqueta de script, el navegador descargará todos los scripts incluidos en la página, pero no los ejecutará hasta que se cree el DOM.

De modo que podemos colocar todos los scripts en la etiqueta de encabezado con el atributo defer y es una opción alternativa en lugar de colocar todos los scripts antes del final de la etiqueta de cuerpo.

Los scripts con defer agregado se ejecutarán en orden.


El atributo async funciona de la misma manera que el comportamiento predeterminado de la etiqueta de script cuando no se especifica ningún atributo defer o async, como se muestra a continuación:

```
<script src="index.js"></script>

```

Esto significa que detendrá el análisis del documento hasta que se hayan descargado y ejecutado todos los scripts.

Pero la diferencia entre async y defer es que los scripts async no se ejecutarán en orden, por lo que si tenemos 4 scripts incluidos, cualquier script se ejecutará en cualquier momento, pero ese no es el caso con defer.

Entonces, cuando los scripts no dependen entre sí, debemos usar el atributo async.

Saber cuándo usar defer y async es importante porque, incluso si no lo has usado, es una pregunta famosa en una entrevista.


Se pueden agregar atributos async o defer a la etiqueta de script según el requisito

Al agregar el atributo defer se asegurará de que todos los scripts se descarguen, pero no se ejecutarán hasta que el DOM esté listo

Se prefiere agregar el atributo async cuando los scripts incluidos en la página no dependen entre sí


### async: 

Cuándo se ejecuta: Tan pronto como está disponible 

Orden de ejecución: Sin ningún orden particular 

Cuándo se usa: Si el orden de ejecución no importa


### defer: 

Después de que el resto de la página haya terminado de cargarse

En el orden en que aparecen en el HTML 

Si el orden de ejecución es importante 


Tanto async como defer indican al navegador que descargue los scripts en un hilo separado, mientras el resto de la página (el DOM, etc.) se descarga, por lo que la carga de la página no se bloquea durante el proceso de obtención.

Los scripts con el atributo async se ejecutarán tan pronto como se complete la descarga. Esto bloquea la página y no garantiza un orden de ejecución específico.

Los scripts con el atributo defer se cargarán en el orden en que están en la página y solo se ejecutarán cuando todo haya terminado de cargarse.

Si tus scripts deben ejecutarse de inmediato y no tienen dependencias, usa async.

Si tus scripts necesitan esperar a que se analice el contenido y dependen de otros scripts y/o de que el DOM esté en su lugar, cárgalos usando defer y pon los elementos <script> correspondientes en el orden en que deseas que el navegador los ejecute.

```
<script async src="js/script2.js"></script>

<script defer src="js/script2.js"></script>

```


## Crear elementos con js dom 

HTML Elements (Nodes)

```
 <div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);
</script> 

```

Este código crea un nuevo elemento <p>

Para agregar texto al elemento <p>, primero debe crear un nodo de texto. Este código crea un nodo de texto:

Luego debe agregar el nodo de texto al elemento <p>:

Por último, debe agregar el nuevo elemento a un elemento existente.

Busca un elemento existente:

Agrega el nuevo elemento al elemento existente:


## Nuevo elemento con insertBefore()

El método appendChild() del ejemplo anterior agregó el nuevo elemento como último elemento secundario del elemento principal.

Si no desea que esto suceda, puede utilizar el método insertBefore():

```
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
const child = document.getElementById("p1");
element.insertBefore(para, child);
</script>

```


## Remover elemento html 

Cómo eliminar elementos HTML existentes

Para eliminar un elemento HTML, utilice el método remove():

El método remove() no funciona en navegadores más antiguos. Vea el ejemplo a continuación para saber cómo utilizar removeChild() en su lugar.

```
<div>
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const elmnt = document.getElementById("p1"); elmnt.remove();
</script>

```

El documento HTML contiene un elemento <div> con dos nodos secundarios (dos elementos <p>):

```
<div>
<p id="p1">Este es un párrafo.</p>
<p id="p2">Este es otro párrafo.</p>
</div>

```

Busque el elemento que desea eliminar:

```
const elmnt = document.getElementById("p1");

```

Luego ejecute el método remove() en ese elemento:

```
elmnt.remove();

```


## Efectos al cambiar o eliminar elem 

que pasa con el anterior boton, cuando quiera volver

o creo dos funciones

o tener las dos funciones y una activada por defecto (ideal). 

arreglar event desde html, atributo 

buscar paginación 

darle un alto fijo a la caja o cuando cambia con el evento 


## Modifcar css con js dom 

### Estilo en línea CSS vs. Clases CSS

diferencia entre estilos en línea y clases.

Puede cambiar el estilo de los elementos del DOM de dos maneras. 

Puede cambiar el estilo en línea del elemento o puede cambiar la clase del elemento.

```
<button id="mainBtn" style="color: red;">Lorem Ipsum</button>

```

La aplicación de un estilo con una clase se ve así:

```
.red {
color: red;
}
```

```
<button class="red" id="mainBtn">Lorem Ipsum</button>

```

Los estilos en línea tienen una precedencia mayor que los estilos de clase. 

Esto significa que si tiene un estilo de clase y un estilo en línea que intentan cambiar la misma propiedad, el estilo en línea ganará:

Este botón será azul, porque el estilo en línea tiene una precedencia mayor que el estilo de clase.


#### Cambiar el estilo en línea de los elementos DOM

La forma más sencilla de cambiar el estilo de un elemento es cambiar el estilo en línea del elemento. Puede hacerlo con la propiedad .style del elemento. Esta propiedad es un objeto que contiene todos los estilos del elemento. Puede cambiar cualquiera de los estilos modificando la propiedad del objeto style. Por ejemplo:

```
let btn = document.getElementById("mainBtn");
btn.style.color = "red";

```
Esto cambiará el color del botón a rojo. También puedes cambiar varios estilos a la vez:

```
let btn = document.getElementById("mainBtn");
btn.style.color = "red";
btn.style.backgroundColor = "blue";

```

Esto cambiará el color del botón a rojo y el color de fondo a azul.

Nota: Cualquier propiedad CSS está disponible como propiedad del objeto de estilo. Si la propiedad tiene un guion, como background-color, se escribe en mayúsculas y minúsculas en JavaScript: backgroundColor.

Por ejemplo:

background-color

backgroundColor


Cuando cambias el estilo en línea de un elemento modificando la propiedad .style, estás cambiando el estilo de ese elemento directamente. Este es el estilo que se aplica al elemento en el HTML. Si abres las herramientas para desarrolladores en tu navegador e inspeccionas el elemento, verás el estilo en línea que has aplicado.

Ten en cuenta que los estilos en línea son mejores para unos pocos cambios o para cambios que no necesitas reutilizar ampliamente en la página. Si necesitas cambiar muchos estilos a la vez, puede ser más fácil cambiar la clase del elemento en lugar de cambiar el estilo en línea de cada elemento.


#### Cambiar la clase de los elementos DOM

Otra forma de cambiar el estilo de un elemento es cambiar la clase del elemento. 

Si necesita cambiar muchos estilos a la vez, puede ser más fácil cambiar la clase del elemento en lugar de cambiar el estilo en línea de cada elemento.

También le permite tener estilos complejos definidos en la clase CSS, que luego puede aplicar a un elemento con una sola operación.


La mejor forma de cambiar la clase de un elemento es usar la propiedad .classList del elemento. 

Esta propiedad es un objeto que tiene un montón de métodos para manipular la clase del elemento.


Cuando cambia la clase de un elemento usando un método .classList, está cambiando la clase de ese elemento directamente. 

Esta es la clase que se aplica al elemento en el HTML. 

Si abre las herramientas para desarrolladores en su navegador e inspecciona el elemento, verá los cambios aplicados allí.


La propiedad .classList en sí es un objeto DOMTokenList. 

Un objeto similar a una matriz que contiene todas las clases del elemento. 

Por ejemplo, si un botón tiene las clases rojo y grande, la propiedad .classList se verá así

```
let btn = document.getElementById("mainBtn");
btn.classList; // DOMTokenList ["red", "big", value: "red big"]

```

Como puede ver, DOMTokenList tiene las clases red y big como elementos de cadena de una estructura similar a una matriz, a las que se pueden hacer referencias con notación de corchetes. 

También tiene una propiedad de valor que contiene todas las clases como una cadena, esta es la cadena subyacente que se encuentra en el HTML real.

Estos son los métodos que cubrirá:

.add()
Agrega una clase a un elemento. 
No hace nada si la clase ya existe.

```
btn.classList.add("red");

```

.remove()
Elimina una clase de un elemento. 
No hace nada si la clase no existe.

```
btn.classList.remove("red");

```

.toggle()
Activa y desactiva una clase de un elemento. 
También puede tomar un segundo argumento booleano para forzar la adición (verdadero) o la eliminación (falso).

```
btn.classList.toggle("red");
btn.classList.toggle("red", true);

```

.replace()
Reemplaza una clase existente por otra clase.

```
btn.classList.replace("red", "blue");

```

.contains()
Comprueba si un elemento tiene una determinada clase y devuelve verdadero o falso.

```
btn.classList.contains("red");

```

Ejemplo: 

En todos los ejemplos que siguen, comenzarás con un botón que tiene el siguiente código HTML:

```
<button id="mainBtn" class="red big">Lorem Ipsum</button>

```
Uso del método .add() de la propiedad .classList

Para agregar una clase a un elemento, puedes usar el método .add() de la propiedad .classList. Por ejemplo:

```
let btn = document.getElementById("mainBtn");
btn.classList.add("rounded");

```
Esto agregará la clase rounded al botón. Si la clase rounded ya está en el botón, esto no hará nada.

Esto dará como resultado este código HTML:

```
<button id="mainBtn" class="red big">Lorem Ipsum</button>
<!-- Se convierte en -->
<button id="mainBtn" class="red big rounded">Lorem Ipsum</button>

```


#### La propiedad .className

También puede cambiar la clase de un elemento modificando la propiedad .className del elemento. 

Esta propiedad es una cadena que contiene todas las clases del elemento.

No se recomienda este método porque es más propenso a errores que usar la propiedad .classList. 

Sin embargo, vale la pena conocerlo porque puede verlo en el código de otras personas, ya que era la única forma de cambiar la clase de un elemento en navegadores más antiguos.

Por ejemplo:

```
let btn = document.getElementById("mainBtn");
btn.className = "rounded";

```

Esto cambiará la clase del botón a redondeada. 

Tenga en cuenta que esto sobrescribirá cualquier clase existente en el elemento.


Esto dará como resultado este código HTML:

```
<button id="mainBtn" class="red big">Lorem Ipsum</button>
<!-- Se convierte en -->
<button id="mainBtn" class="rounded">Lorem Ipsum</button>

```

Por lo tanto, si desea agregar una clase, deberá incluir todas las clases en la cadena:

```
let btn = document.getElementById("mainBtn");
btn.className = "red big rounded";
// o
btn.className += " rounded";

```
Esto cambiará la clase del botón a red big rounded.

```
<button id="mainBtn" class="red big">Lorem Ipsum</button>
<!-- Se convierte en -->
<button id="mainBtn" class="red big rounded">Lorem Ipsum</button>

```

Por lo tanto, puede administrar clases con la propiedad .className, pero eso significa que debe administrar todas las operaciones como operaciones de cadena. 

La propiedad .classList abstrae todo ese manejo de cadenas y proporciona una interfaz mucho más clara para administrar clases.


#### Otras formas de cambiar el css

##### Uso de JavaScript para activar una transición CSS

##### Adición de reglas de estilo

##### Cambio de variables CSS


#### RS CSS DOM

Diferenciado entre estilos en línea y clases. Los estilos en línea se escriben directamente en el HTML y tienen prioridad sobre los estilos de clase CSS.

Comprendió cómo modificar el estilo en línea de los elementos DOM mediante la propiedad .style, perfecta para ajustar propiedades de estilo individuales.

Ha visto que camelCase se utiliza en JavaScript para las propiedades CSS que normalmente contienen guiones (por ejemplo, backgroundColor en lugar de background-color).

Se ha familiarizado con la propiedad .classList y sus métodos, como .add(), .remove() y .toggle(), que son excelentes herramientas para trabajar con varias clases.

También ha comprendido por qué no se recomienda cambiar directamente la propiedad .className en comparación con .classList debido al posible manejo incorrecto de las clases existentes.

Aprendí a usar JavaScript para activar transiciones CSS y agregar efectos visuales dinámicos a los elementos de tu página.
 

## Usar JS para cambiar el estilo de una clase existente 



## boton, atributos y eventos 

El elemento HTML <button> es un elemento interactivo que el usuario activa con un mouse, teclado, dedo, comando de voz u otra tecnología de asistencia. Una vez activado, realiza una acción, como enviar un formulario o abrir un cuadro de diálogo.

```
<button class="favorite styled" type="button">Add to favorites</button>

```

```
.styled {
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: rgba(220, 0, 0, 1);
  background-image: linear-gradient(
    to top left,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 30%,
    rgba(0, 0, 0, 0)
  );
  box-shadow:
    inset 2px 2px 3px rgba(255, 255, 255, 0.6),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);
}

.styled:hover {
  background-color: rgba(255, 0, 0, 1);
}

.styled:active {
  box-shadow:
    inset -2px -2px 3px rgba(255, 255, 255, 0.6),
    inset 2px 2px 3px rgba(0, 0, 0, 0.6);
}

```


### Atributos de button 

focus: 


form: 


disabled: 


name: 
El nombre del botón, enviado como un par con el valor del botón como parte de los datos del formulario, cuando ese botón se usa para enviar el formulario.


type:
El comportamiento predeterminado del botón. 
Los valores posibles son:

1. submit:
el botón envía los datos del formulario al servidor. 
Este es el valor predeterminado si el atributo no se especifica para los botones asociados con un <form> o si el atributo es un valor vacío o no válido.

2. reset:
el botón restablece todos los controles a sus valores iniciales, como <input type="reset">. 
(Este comportamiento tiende a molestar a los usuarios).

3. button:
el botón no tiene un comportamiento predeterminado y no hace nada cuando se lo presiona de manera predeterminada. 
Puede tener scripts del lado del cliente que escuchen los eventos del elemento, que se activan cuando ocurren los eventos.

value:
Define el valor asociado con el nombre del botón cuando se envía con los datos del formulario. 
Este valor se pasa al servidor en parámetros cuando se envía el formulario utilizando este botón.


### detalles de button 

Un botón de envío con el atributo formaction establecido, pero sin un formulario asociado, no hace nada. 

Debe establecer un propietario de formulario, ya sea envolviéndolo en un <form> o estableciendo el atributo form en el id del formulario.


Los elementos <button> son mucho más fáciles de diseñar que los elementos <input>. 

Puede agregar contenido HTML interno (piense en <i>, <br> o incluso <img>) y usar pseudoelementos ::after y ::before para una representación compleja.


Si sus botones no son para enviar datos de formulario a un servidor, asegúrese de establecer su atributo type en button. 

De lo contrario, intentarán enviar datos de formulario y cargar la respuesta (inexistente), posiblemente destruyendo el estado actual del documento.

Si bien <button type="button"> no tiene un comportamiento predeterminado, los controladores de eventos pueden programarse para activar comportamientos. 

Un botón activado puede realizar acciones programables mediante JavaScript, como eliminar un elemento de una lista.


De forma predeterminada, los agentes de usuario diseñan los botones como display: flow-root, lo que establece un nuevo contexto de formato de bloque y centra los elementos secundarios del botón tanto horizontal como verticalmente, siempre que no se desborden. 

Si el botón se define como un contenedor flexible o de cuadrícula, los elementos secundarios se comportarán como elementos flexibles o de cuadrícula. 

Un botón configurado como display: inline tendrá el estilo como si el valor se hubiera configurado como display: inline-block


### Botones de icono:

Los botones que solo muestran un icono no tienen un nombre accesible. Los nombres accesibles proporcionan información a la que pueden acceder las tecnologías de asistencia, como los lectores de pantalla, cuando analizan el documento y generan un árbol de accesibilidad. 

Las tecnologías de asistencia utilizan el árbol de accesibilidad para navegar y manipular el contenido de la página.

Para darle un nombre accesible a un botón de icono, coloque texto en el elemento <button> que describa de forma concisa la funcionalidad del botón.


```
<button name="favorite">
  <svg fill="#000000" viewBox="0 0 42 42">

```

Si desea ocultar visualmente el texto del botón, una forma accesible de hacerlo es utilizar una combinación de propiedades CSS para eliminarlo visualmente de la pantalla, pero mantenerlo analizable por las tecnologías de asistencia.

Sin embargo, vale la pena señalar que dejar visible el texto del botón puede ayudar a las personas que pueden no estar familiarizadas con el significado del icono o no entender el propósito del botón. 

Esto es especialmente importante para las personas que no son tecnológicamente sofisticadas o que pueden tener diferentes interpretaciones culturales del icono que utiliza el botón.


### Tamaño y proximidad

Tamaño

Los elementos interactivos, como los botones, deben tener un área lo suficientemente grande como para que sea fácil activarlos. Esto ayuda a una variedad de personas, incluidas las personas con problemas de control motor y las personas que utilizan formas de entrada no precisas, como un lápiz óptico o los dedos. Se recomienda un tamaño interactivo mínimo de 44 × 44 píxeles CSS

Proximidad

Grandes cantidades de contenido interactivo, incluidos los botones, colocados muy cerca visualmente entre sí deben tener un espacio que los separe. Este espaciado es beneficioso para las personas que experimentan problemas de control motor, que pueden activar accidentalmente el contenido interactivo incorrecto.

El espaciado se puede crear utilizando propiedades CSS como el margen.


### Estilos de botón

Es mejor no anular el anillo de enfoque predeterminado para los elementos que tienen foco. Si se anulan los estilos de botón, es importante asegurarse de que el estado de enfoque tenga suficiente contraste para que las personas con problemas de visión puedan percibirlo y las personas con diferencias cognitivas lo entiendan.

La pseudoclase :focus-visible se puede utilizar para aplicar estilos a un elemento que tiene :focus solo cuando la heurística del agente de usuario determina que el foco debe estar resaltado, como cuando un <button> recibe el foco del teclado. Consulte :focus vs :focus-visible para obtener más información.

La relación de contraste de color se determina comparando la luminosidad del texto del botón y los valores de color de fondo con el fondo sobre el que se coloca el botón. Para cumplir con las Pautas de Accesibilidad al Contenido Web (WCAG) actuales, se requiere una relación de 4,5:1 para el contenido de texto y de 3:1 para el texto grande. (El texto grande se define como 18,66 píxeles y en negrita o más grande, o 24 píxeles o más grande).


### Hacer clic y enfocar

El hecho de que al hacer clic en un botón de tipo <button> o <input> se enfoque (de manera predeterminada) varía según el navegador y el sistema operativo. 

La mayoría de los navegadores enfocan el botón en el que se hace clic, pero Safari no lo hace por diseño.

```
<button name="button">Press me</button>

```


### Dar eventos a un botón 

#### Events

Nota: Esta función está disponible en Web Workers.

La interfaz Event representa un evento que tiene lugar en un EventTarget.

Un evento puede ser activado por la acción del usuario, por ejemplo, al hacer clic en el botón del mouse o tocar el teclado, o puede ser generado por API para representar el progreso de una tarea asincrónica. 

También puede activarse programáticamente, por ejemplo, al llamar al método HTMLElement.click() de un elemento, o al definir el evento y luego enviarlo a un objetivo específico mediante EventTarget.dispatchEvent().

Existen muchos tipos de eventos, algunos de los cuales utilizan otras interfaces basadas en la interfaz principal Event. 

El evento en sí contiene las propiedades y los métodos que son comunes a todos los eventos.


Muchos elementos DOM pueden configurarse para aceptar (o "escuchar") estos eventos y ejecutar código en respuesta a su procesamiento (o "manejo"). 

Los controladores de eventos suelen estar conectados (o "adjuntos") a varios elementos HTML (como <button>, <div>, <span>, etc.) mediante EventTarget.addEventListener(), y esto generalmente reemplaza el uso de los antiguos atributos de controlador de eventos HTML. 

Además, cuando se agregan correctamente, dichos controladores también se pueden desconectar si es necesario mediante removeEventListener().

Nota: Un elemento puede tener varios controladores de este tipo, incluso para el mismo evento exacto, en particular si módulos de código independientes y separados los adjuntan, cada uno para sus propios fines independientes. 

(Por ejemplo, una página web con un módulo de publicidad y un módulo de estadísticas que monitorean la visualización de videos)


Cuando hay muchos elementos anidados, cada uno con su propio controlador, el procesamiento de eventos puede volverse muy complicado, especialmente cuando un elemento padre recibe el mismo evento que sus elementos hijos porque "espacialmente" se superponen, por lo que el evento técnicamente ocurre en ambos, y el orden de procesamiento de dichos eventos depende de la configuración de propagación de eventos de cada controlador activado.

CloseEvent
InputEvent
KeyboardEvent
MediaStreamEvent Deprecated
MessageEvent
MouseEvent
GamepadEvent


### Event Target 

Nota: Esta función está disponible en Web Workers.

La interfaz EventTarget se implementa mediante objetos que pueden recibir eventos y pueden tener oyentes para ellos. En otras palabras, cualquier objetivo de eventos implementa los tres métodos asociados con esta interfaz.

Element y sus elementos secundarios, así como Document y Window, son los objetivos de eventos más comunes, pero otros objetos también pueden ser objetivos de eventos. Por ejemplo, IDBRequest, AudioNode y AudioContext también son objetivos de eventos.

Muchos objetivos de eventos (incluidos elementos, documentos y ventanas) también admiten la configuración de controladores de eventos a través de propiedades y atributos onevent


### addEventListener 

Nota: Esta función está disponible en Web Workers.

El método addEventListener() de la interfaz EventTarget configura una función que se llamará cada vez que se envíe el evento especificado al destino.

Los destinos comunes son Element, o sus elementos secundarios, Document y Window, pero el destino puede ser cualquier objeto que admita eventos (como IDBRequest).

Nota: El método addEventListener() es la forma recomendada de registrar un detector de eventos. Los beneficios son los siguientes:

Permite agregar más de un controlador para un evento. Esto es particularmente útil para bibliotecas, módulos de JavaScript o cualquier otro tipo de código que necesite funcionar bien con otras bibliotecas o extensiones.
A diferencia del uso de una propiedad onXYZ, le brinda un control más preciso de la fase en la que se activa el detector (captura frente a propagación).
Funciona en cualquier destino de evento, no solo en elementos HTML o SVG.


El método addEventListener() funciona añadiendo una función, o un objeto que implementa una función handleEvent(), a la lista de escuchas de eventos para el tipo de evento especificado en el EventTarget en el que se llama. Si la función u objeto ya está en la lista de escuchas de eventos para este objetivo, la función u objeto no se añade una segunda vez.

Nota: Si una función anónima particular está en la lista de escuchas de eventos registradas para un objetivo determinado y luego, más adelante en el código, se proporciona una función anónima idéntica en una llamada addEventListener, la segunda función también se añadirá a la lista de escuchas de eventos para ese objetivo.

De hecho, las funciones anónimas no son idénticas incluso si se definen utilizando el mismo código fuente inmutable llamado repetidamente, incluso si es en un bucle.

Definir repetidamente la misma función sin nombre en tales casos puede ser problemático. (Consulte Problemas de memoria a continuación).

Si se agrega un detector de eventos a un EventTarget desde dentro de otro detector (es decir, durante el procesamiento del evento), ese evento no activará el nuevo detector. Sin embargo, el nuevo detector puede activarse durante una etapa posterior del flujo de eventos, como durante la fase de propagación


```
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)

```

type

Una cadena que distingue entre mayúsculas y minúsculas que representa el tipo de evento que se va a escuchar.

listener

El objeto que recibe una notificación (un objeto que implementa la interfaz Event) cuando se produce un evento del tipo especificado. Debe ser nulo, un objeto con un método handleEvent() o una función de JavaScript. Consulte La devolución de llamada del oyente de eventos para obtener detalles sobre la devolución de llamada en sí.

opciones Opcional

Un objeto que especifica características sobre el oyente de eventos. Las opciones disponibles son


### Notas de uso

La devolución de llamada (callback) del detector de eventos (event listener)

El detector de eventos se puede especificar como una función de devolución de llamada o como un objeto cuyo método handleEvent() actúa como función de devolución de llamada.

La función de devolución de llamada en sí tiene los mismos parámetros y valor de retorno que el método handleEvent(); es decir, la devolución de llamada acepta un único parámetro: un objeto basado en Event que describe el evento que ha ocurrido y no devuelve nada.

Por ejemplo, una devolución de llamada del controlador de eventos que se puede utilizar para controlar tanto fullscreenchange como fullscreenerror podría tener este aspecto

```
function handleEvent(event) {
  if (event.type === "fullscreenchange") {
    /* handle a full screen toggle */
  } else {
    /* handle a full screen toggle error */
  }
}

```


### El valor de "this" dentro del controlador

A menudo es deseable hacer referencia al elemento en el que se activó el controlador de eventos, como cuando se utiliza un controlador genérico para un conjunto de elementos similares.

Al adjuntar una función de controlador a un elemento mediante addEventListener(), el valor de this dentro del controlador será una referencia al elemento. Será el mismo que el valor de la propiedad currentTarget del argumento de evento que se pasa al controlador

```
my_element.addEventListener("click", function (e) {
  console.log(this.className); // logs the className of my_element
  console.log(e.currentTarget === this); // logs `true`
});

```

Como recordatorio, las funciones de flecha no tienen su propio contexto this.

```
my_element.addEventListener("click", (e) => {
  console.log(this.className); // WARNING: `this` is not `my_element`
  console.log(e.currentTarget === this); // logs `false`
});

```

Si se especifica un controlador de eventos (por ejemplo, onclick) en un elemento en el código fuente HTML, el código JavaScript en el valor del atributo se envuelve efectivamente en una función de controlador que vincula el valor de this de una manera coherente con addEventListener(); una ocurrencia de this dentro del código representa una referencia al elemento.

```
<table id="my_table" onclick="console.log(this.id);">
  <!-- `this` refers to the table; logs 'my_table' -->
  …
</table>

```

Tenga en cuenta que el valor de this dentro de una función, llamada por el código en el valor del atributo, se comporta según las reglas estándar. Esto se muestra en el siguiente ejemplo:

```
<script>
  function logID() {
    console.log(this.id);
  }
</script>
<table id="my_table" onclick="logID();">
  <!-- when called, `this` will refer to the global object -->
  …
</table>

```

El valor de this dentro de logID() es una referencia al objeto global Window (o undefined en el caso del modo estricto).


#### Listener: nulo, un objeto con un método handleEvent() o una función de JavaScript.


### Ejemplos addEventListener


1. Detector (listener) simple

Demuestra cómo usar addEventListener() para observar los clics del mouse en un elemento.

```
<table id="outside">
  <tr>
    <td id="t1">one</td>
  </tr>
  <tr>
    <td id="t2">two</td>
  </tr>
</table>

```

```
// Function to change the content of t2
function modifyText() {
  const t2 = document.getElementById("t2");
  const isNodeThree = t2.firstChild.nodeValue === "three";
  t2.firstChild.nodeValue = isNodeThree ? "two" : "three";
}

// Add event listener to table
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);

```

En este código, modifyText() es un detector de eventos de clic registrados mediante addEventListener(). 

Un clic en cualquier parte de la tabla se transmite al controlador y ejecuta modifyText().


#### Cancelar listener 

Agregar un detector que se pueda interrumpir

Este ejemplo demuestra cómo agregar un addEventListener() que se pueda interrumpir con un AbortSignal.

```
<table id="outside">
  <tr>
    <td id="t1">one</td>
  </tr>
  <tr>
    <td id="t2">two</td>
  </tr>
</table>

```

```
// Add an abortable event listener to table
const controller = new AbortController();
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, { signal: controller.signal });

// Function to change the content of t2
function modifyText() {
  const t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue === "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
    controller.abort(); // remove listener after value reaches "three"
  }
}

```

En el ejemplo anterior, modificamos el código del ejemplo anterior de modo que, después de que el contenido de la segunda fila cambie a "tres", llamamos a abort() desde el AbortController que pasamos a la llamada addEventListener(). Esto hace que el valor permanezca como "tres" para siempre porque ya no tenemos ningún código que escuche un evento de clic.


#### Usando función anónima

Para pasar parámetros al detector de eventos.

```
// Function to change the content of t2
function modifyText(new_text) {
  const t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
}

// Function to add event listener to table
const el = document.getElementById("outside");
el.addEventListener(
  "click",
  function () {
    modifyText("four");
  },
  false,
);

```

Observe que el detector es una función anónima que encapsula código que, a su vez, puede enviar parámetros a la función modifyText(), que es responsable de responder al evento.



#### Event listener con función flecha

#### No usamos atributos desde el html 

```
<table id="outside">
  <tr>
    <td id="t1">one</td>
  </tr>
  <tr>
    <td id="t2">two</td>
  </tr>
</table>

```

```
// Function to change the content of t2
function modifyText(new_text) {
  const t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
}

// Add event listener to table with an arrow function
const el = document.getElementById("outside");
el.addEventListener(
  "click",
  () => {
    modifyText("four");
  },
  false,
);

```

Tenga en cuenta que, si bien las funciones anónimas y las de flecha son similares, tienen diferentes enlaces this. Si bien las funciones anónimas (y todas las funciones tradicionales de JavaScript) crean sus propios enlaces this, las funciones de flecha heredan el enlace this de la función que las contiene.

Eso significa que las variables y constantes disponibles para la función que las contiene también están disponibles para el controlador de eventos cuando se utiliza una función de flecha.

#### click event

#### (event) mism evnt (?)

#### Propiedades de click 


### Reaccion a eventos 

Se puede ejecutar un código JavaScript cuando se produce un evento, como cuando un usuario hace clic en un elemento HTML.

Para ejecutar código cuando un usuario hace clic en un elemento, agregue código JavaScript a un atributo de evento HTML:

```
onclick=JavaScript

```
Ejemplos de eventos HTML:


Cuando un usuario hace clic con el mouse
Cuando se carga una página web
Cuando se carga una imagen
Cuando el mouse se mueve sobre un elemento
Cuando se modifica un campo de entrada
Cuando se envía un formulario HTML
Cuando un usuario presiona una tecla



En este ejemplo, el contenido del elemento <h1> cambia cuando un usuario hace clic en él:

```
<h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>

```

En este ejemplo, se llama a una función desde el controlador de eventos:

```
 <h1 onclick="changeText(this)">Click on this text!</h1>

<script>
function changeText(id) {
  id.innerHTML = "Ooops!";
}
</script>

```


### Atributos de eventos HTML

Para asignar eventos a elementos HTML, puede utilizar atributos de eventos

Asignar un evento onclick a un elemento de botón:

```
<button onclick="displayDate()">Pruébelo</button>

```

En el ejemplo anterior, se ejecutará una función denominada displayDate cuando se haga clic en el botón.


### Asignar eventos mediante el DOM HTML

El DOM HTML le permite asignar eventos a elementos HTML mediante JavaScript:

Asignar un evento onclick a un elemento de botón:

```
<script>
document.getElementById("myBtn").onclick = displayDate;
</script>

```

En el ejemplo anterior, una función denominada displayDate se asigna a un elemento HTML con el id="myBtn".

La función se ejecutará cuando se haga clic en el botón.


### HTML DOM 

HTML Documents, Elements, Attributes, Collection, NodeList

DOMTokenList, Styles 


### HTML DOM Events

click, play, pause, keyup, keydown, etc. 

HTML Event Objects, Event Properties, Event Methods


Los eventos DOM permiten que JavaScript agregue detectores de eventos o controladores de eventos a elementos HTML.

Para obtener un tutorial sobre eventos, lea nuestro Tutorial de eventos de JavaScript.
Ejemplos

En HTML, onclick es el detector de eventos, myFunction es el controlador de eventos:

```
<button onclick="myFunction()">Click me</button>

```

En JavaScript, click es el evento, myFunction es el controlador de eventos:

```
button.addEventListener("click", myFunction);

```


Los eventos DOM permiten que JavaScript agregue detectores de eventos o controladores de eventos a elementos HTML.

Ejemplos:

En HTML, onclick es el detector de eventos, myFunction es el controlador de eventos:

```
<button onclick="myFunction()">Haz clic en mí</button>

```

En JavaScript, click es el evento, myFunction es el controlador de eventos:

```
button.addEventListener("click", myFunction);

```

#### event listener (detector) -> event (evento) -> event handler (controlador)



### JS HTML DOM Events 

Los eventos HTML son "cosas" que les suceden a los elementos HTML.

Cuando se utiliza JavaScript en páginas HTML, JavaScript puede "reaccionar" ante estos eventos.

Eventos HTML

Un evento HTML puede ser algo que hace el navegador o algo que hace un usuario.

A continuación, se muestran algunos ejemplos de eventos HTML:

Se terminó de cargar una página web HTML

Se modificó un campo de entrada HTML

Se hizo clic en un botón HTML

A menudo, cuando suceden eventos, es posible que desee hacer algo.

JavaScript le permite ejecutar código cuando se detectan eventos.

HTML permite agregar atributos de controlador de eventos, con código JavaScript, a los elementos HTML.

Con comillas simples:

```
<element event='some JavaScript'>

```
Con comillas dobles:

```
<element event="some JavaScript">

```

En el siguiente ejemplo, se agrega un atributo onclick (con
código) a un elemento <button>:

```
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>

```



### JS Event Listener 

addEventListener() method

Ej: Cuando el usuario hace click al elemento html, ocurre un evento 

```
document.getElementById("myBtn").addEventListener("click", displayDate); 

```

El método addEventListener() adjunta un controlador de eventos al elemento especificado.

El método addEventListener() adjunta un controlador de eventos a un elemento sin sobrescribir los controladores de eventos existentes.

Puede agregar muchos controladores de eventos a un elemento.

Puede agregar muchos controladores de eventos del mismo tipo a un elemento, es decir, dos eventos de "clic".

Puede agregar detectores de eventos a cualquier objeto DOM, no solo a elementos HTML, es decir, al objeto de ventana.

El método addEventListener() facilita el control de cómo reacciona el evento al burbujeo.

Al usar el método addEventListener(), el JavaScript se separa del marcado HTML, para una mejor legibilidad y le permite agregar detectores de eventos incluso cuando no controla el marcado HTML.

Puede eliminar fácilmente un detector de eventos usando el método removeEventListener().


Syntax: 

element.addEventListener(event, function, useCapture);

El primer parámetro es el tipo de evento (como "click" o "mousedown" o cualquier otro evento DOM HTML).

El segundo parámetro es la función que queremos llamar cuando se produce el evento.

El tercer parámetro es un valor booleano que especifica si se debe utilizar la propagación de eventos o la captura de eventos. Este parámetro es opcional.

Ten en cuenta que no se debe utilizar el prefijo "on" para el evento; utilice "click" en lugar de "onclick".

```
element.addEventListener("click", function(){ alert("Hello World!"); }); 

```

También puedes hacer referencia a una función externa "con nombre":

```
 element.addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
} 

```

Podemos agregar muchos eventos a un elemento: 

```
element.addEventListener("mouseover", myFunction);
element.addEventListener("click", mySecondFunction);
element.addEventListener("mouseout", myThirdFunction); 

```


### Opcional: Propagación o captura 

¿Propagación de eventos o captura de eventos?

Existen dos formas de propagación de eventos en el DOM HTML: propagación y captura.

La propagación de eventos es una forma de definir el orden de los elementos cuando se produce un evento. Si tiene un elemento <p> dentro de un elemento <div> y el usuario hace clic en el elemento <p>, ¿el evento "clic" de qué elemento se debe procesar primero?

En la propagación, el evento del elemento más interno se procesa primero y luego el externo: el evento de clic del elemento <p> se procesa primero y luego el evento de clic del elemento <div>.

En la captura, el evento del elemento más externo se procesa primero y luego el interno: el evento de clic del elemento <div> se procesará primero y luego el evento de clic del elemento <p>.

Con el método addEventListener() puede especificar el tipo de propagación utilizando el parámetro "useCapture":
addEventListener(event, function, useCapture);

El valor predeterminado es falso, que utilizará la propagación de burbujeo; cuando el valor se establece en verdadero, el evento utiliza la propagación de captura.

Ejemplo

```
document.getElementById("myP").addEventListener("click", myFunction, true);

document.getElementById("myDiv").addEventListener("click", myFunction, true);

```

### removeEventListener()

El método removeEventListener() elimina los controladores de eventos que se han adjuntado con el método addEventListener():

```
element.removeEventListener("mousemove", myFunction); 

```


## Código js html dom 

### Botón, evento y texto 

```
<button type="button">Player 1: Chris</button>

const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

```


### Nuevo parrafo par todos los botones: DOMContentLoaded 

```
document.addEventListener("DOMContentLoaded", () => {
  function createParagraph() {
	const para = document.createElement("p");
	para.textContent = "You clicked the button!";
	document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll("button");

  for (const button of buttons) {
	button.addEventListener("click", createParagraph);
  }
});

```

```
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}

```


### loops a los elementos html

```
const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);

```

```
const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";

```

Este código crea una variable que contiene una lista de todos los párrafos dentro de <div class="resultParas"> usando el método 'querySelectorAll()', luego recorre cada uno de ellos, eliminando el contenido de texto de cada uno.
Tenga en cuenta que aunque 'resetPara' es una constante, podemos cambiar sus propiedades internas como 'textContent'.



### Evento onClick (html) y función flecha (js)

```
<button id="button_A">Press me</button>
<h3 id="heading_A"></h3>

const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
  headingA.textContent = `Welcome ${name}`;
};

```


### Botón, evento, condiciones para cambios en el elem

```
<button>Start machine</button>
<p>The machine is stopped.</p>

const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start machine") {
	btn.textContent = "Stop machine";
	txt.textContent = "The machine has started!";
  } else {
	btn.textContent = "Start machine";
	txt.textContent = "The machine is stopped.";
  }
}

```


### Cadenas y eventos 

```
<button>Press me</button>	
<div id="greeting"></div>

const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);

```


### Cadenas y JS

```
const string = "This is my string";

//Se convierte en una instancia del objeto cadena

const browserType = "mozilla";
browserType.length;

browserType[0];
//caracter especifico

browserType[browserType.length - 1];
//ultimo char


//Subcadena: .includes
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

```

### array y js 

```
//Acceso a cada elemento
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}

```

```
//Modificar elementos usando map(). 
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]

```

```
//Nueva matriz condicional con filter().
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]

```


### Condicionales y evento change

```
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
	para.textContent =
	  "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
	para.textContent =
	  "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
	para.textContent =
	  "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
	para.textContent =
	  "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
	para.textContent = "";
  }
}

```

1. Aquí tenemos un elemento HTML <select> que nos permite elegir diferentes condiciones climáticas y un párrafo simple.
2. En JavaScript, almacenamos una referencia a los elementos <select> y <p> y agregamos un detector de eventos al elemento <select> para que cuando se cambie su valor, se ejecute la función setWeather().
3. Cuando se ejecuta esta función, primero configuramos una variable llamada elección al valor actual seleccionado en el elemento <select>. 
Luego usamos una declaración condicional para mostrar texto diferente dentro del párrafo dependiendo de cuál sea el valor de elección. 
Observe cómo se prueban todas las condiciones en los bloques else if () { }, excepto la primera, que se prueba en un bloque if () { }.
4. La última opción, dentro del bloque else { }, es básicamente una opción de "último recurso": el código que contiene se ejecutará si ninguna de las condiciones es verdadera. 
En este caso, sirve para vaciar el texto del párrafo si no hay nada seleccionado, por ejemplo, si un usuario decide volver a seleccionar la opción de marcador de posición "--Hacer una elección--" que se muestra al principio.


### Condiciones y elementos html 

```
if (choice === "sunny") {
  if (temperature < 86) {
	para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
	para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}

```

```
if (choice === "sunny" && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}

```


### ternario 

```
// Ternario
 condition ? run this code : run this code instead

const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
// Es toda una expresion

```


### Evento change

```
<label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
</select>

<h1>This is my website</h1>


const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener("change", () =>
  select.value === "black"
	? update("black", "white")
	: update("white", "black"),
);

```

Aquí tenemos un elemento <select> para elegir un tema (blanco o negro), además de un h1 simple para mostrar el título de un sitio web. 
También tenemos una función llamada update(), que toma dos colores como parámetros (entradas). 
El color de fondo del sitio web se establece en el primer color proporcionado y el color del texto se establece en el segundo color proporcionado.
Finalmente, también tenemos un detector de eventos onchange que sirve para ejecutar una función que contiene un operador ternario.
Comienza con una condición de prueba: select.value === 'negro'. Si esto devuelve verdadero, ejecutamos la función update() con parámetros de blanco y negro, lo que significa que terminamos con un color de fondo negro y un color de texto blanco. 
Si devuelve falso, ejecutamos la función update() con parámetros de blanco y negro, lo que significa que los colores del sitio están invertidos.
Nota: También puede encontrar este ejemplo en GitHub (véalo ejecutándose en vivo allí también).


### Bucles 

```
//Bucle estándar: Bucle for =/= for of 
for (initializer; condition; final-expression) {
  // code to run
}


const results = document.querySelector("#results");

function calculate() {
  for (let i = 1; i < 10; i++) {
	const newResult = `${i} x ${i} = ${i * i}`;
	results.textContent += `${newResult}\n`;
  }
  results.textContent += "\nFinished!\n\n";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));


// for of 
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}

// for 

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

//ofrece más posibilidades de introducir errores en su código. Por ejemplo:
//1. podrías comenzar i en 1, olvidando que el primer índice de la matriz es cero, no 1.
//2. puede detenerse en i <= cats.length, olvidando que el último índice de la matriz tiene una longitud de -1.
//Por motivos como este, normalmente es mejor utilizar for...of si puedes.


//A veces todavía necesitas usar un bucle for para iterar a través de una matriz. 
//Por ejemplo, en el código siguiente queremos registrar un mensaje que enumere nuestros gatos.

const cats = ["Pete", "Biggles", "Jasmine"];
let myFavoriteCats = "My cats are called ";

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); 
// "My cats are called Pete, Biggles, Jasmine, "

//La oración final no está muy bien formada:
//My cats are called Pete, Biggles, Jasmine,

//Preferiríamos que manejara al último gato de manera diferente, así:
//My cats are called Pete, Biggles, and Jasmine.


//Pero para hacer esto necesitamos saber cuándo estamos en la iteración final del bucle, y para hacerlo podemos usar un bucle for y examinar el valor de i:
	
const cats = ["Pete", "Biggles", "Jasmine"];
let myFavoriteCats = "My cats are called ";

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
	// We are at the end of the array
	myFavoriteCats += `and ${cats[i]}.`;
  } else {
	myFavoriteCats += `${cats[i]}, `;
  }
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

```


### Break

```
// Break

<label for="search">Search by contact name: </label>
<input id="search" type="text" />
<button>Search</button>

<p></p>

const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const searchName = input.value.toLowerCase();
  input.value = "";
  input.focus();
  para.textContent = "";
  for (const contact of contacts) {
	const splitContact = contact.split(":");
	if (splitContact[0].toLowerCase() === searchName) {
	  para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
	  break;
	}
  }
  if (para.textContent === "") {
	para.textContent = "Contact not found.";
  }
});


//1. En primer lugar, tenemos algunas definiciones de variables:

	//tenemos una serie de información de contacto, y cada elemento es una cadena que contiene un nombre y un número de teléfono separados por dos puntos.

//2. A continuación, adjuntamos un detector de eventos al botón (btn) para que cuando se presione se ejecute algún código para realizar la búsqueda y devolver los resultados.

//3. Almacenamos el valor ingresado en la entrada de texto en una variable llamada 'searchName', antes de vaciar la entrada de texto y enfocarla nuevamente, lista para la siguiente búsqueda. 

//Tenga en cuenta que también ejecutamos el método toLowerCase() en la cadena, por lo que las búsquedas no distinguirán entre mayúsculas y minúsculas.

//4. Ahora pasemos a la parte interesante, el bucle for...of:

	//1. Dentro del bucle, primero dividimos el contacto actual en el carácter de dos puntos y almacenamos los dos valores resultantes en una matriz llamada 'splitContact'.

	//2. Luego usamos una declaración condicional para probar si splitContact[0] (el nombre del contacto, nuevamente en minúsculas con toLowerCase()) es igual al nombre de búsqueda ingresado. 

	//Si es así, ingresamos una cadena en el párrafo para informar cuál es el número del contacto y usamos break para finalizar el ciclo.

//5. Después del ciclo, verificamos si configuramos un contacto y, en caso contrario, configuramos el texto del párrafo en "Contacto no encontrado".

```


### Continue 

```
// Continue

<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>

const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  para.textContent = "Output: ";
  const num = input.value;
  input.value = "";
  input.focus();
  for (let i = 1; i <= num; i++) {
	let sqRoot = Math.sqrt(i);
	if (Math.floor(sqRoot) !== sqRoot) {
	  continue;
	}
	para.textContent += `${i} `;
  }
});


//1. En este caso, la entrada debe ser un número (num). 

//El bucle for recibe un contador que comienza en 1 (ya que en este caso no estamos interesados ​​en 0), una condición de salida que dice que el bucle se detendrá cuando el contador sea mayor que el número de entrada y un iterador que suma 1 al contador cada vez.

//2. Dentro del ciclo, encontramos la raíz cuadrada de cada número usando Math.sqrt(i), luego verificamos si la raíz cuadrada es un número entero probando si es igual a sí mismo cuando se ha redondeado hacia abajo al entero más cercano. 

//(Esto es lo que Math.floor() hace con el número que se pasa).

//3. Si la raíz cuadrada y la raíz cuadrada redondeada hacia abajo no son iguales (!==), significa que la raíz cuadrada no es un número entero, por lo que no nos interesa. 

//En tal caso, usamos la instrucción continue para pasar a la siguiente iteración del ciclo sin registrar el número en ninguna parte.

//4. Si la raíz cuadrada es un número entero, saltamos el bloque if por completo, por lo que la instrucción continuar no se ejecuta; en su lugar, concatenamos el valor i actual más un espacio al final del contenido del párrafo

```


### Funciones y ambitos 

linea 1600-1700


### Funciones propias, js y html dom 

```
//Función que reemplaza a alert()

<button>Display message box</button>


const btn = document.querySelector('button');
btn.addEventListener('click', () => displayMessage('Brian: Hi there, how are you today?', 'chat'));

function displayMessage(msgText,msgType) {
	const html = document.querySelector('html');

	const panel = document.createElement('div');
	panel.setAttribute('class','msgBox');
	html.appendChild(panel);

	const msg = document.createElement('p');
	msg.textContent = msgText;
	panel.appendChild(msg);

	const closeBtn = document.createElement('button');
	closeBtn.textContent = 'x';
	panel.appendChild(closeBtn);

	closeBtn.onclick = function() {
		panel.parentNode.removeChild(panel);
	
	}

	if(msgType === 'warning') {
	  msg.style.backgroundImage = 'url(icons/warning.png)';
	  panel.style.backgroundColor = 'red';
	} else if(msgType === 'chat') {
	  msg.style.backgroundImage = 'url(icons/chat.png)';
	  panel.style.backgroundColor = 'aqua';
	} else {
	  msg.style.paddingLeft = '20px';
	}
}

```


### Retorno, funciones y DOM 

```
//EJ: 

<input class="numberInput" type="text">
<p></p>


const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}

input.addEventListener("change", () => {
  const num = parseFloat(input.value);
  if (isNaN(num)) {
    para.textContent = "You need to enter a number!";
  } else {
    para.textContent = `${num} squared is ${squared(num)}. `;
    para.textContent += `${num} cubed is ${cubed(num)}. `;
    para.textContent += `${num} factorial is ${factorial(num)}. `;
  }
});

// Imprimir información sobre el número ingresado en la entrada de texto agregando el siguiente controlador de eventos debajo de las funciones existentes:
// desenfoca y analiza/valida entrada de datos
// guarda e imprime valor.

```


## Eventos 

### Diferentes formas de eventos 

```
<button>Change color</button>

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

//acá una función usa otra como random

```


```
 una función independiente del event listener
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", changeBackground);


// remover listener del elemento
btn.removeEventListener("click", changeBackground);

```


```
//AbortSignal to addEventListener() 
//and then later calling abort() on the controller owning the AbortSignal

const controller = new AbortController();

btn.addEventListener("click",
  () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal } // pass an AbortSignal to this handler
);


//pasar una AbortSignal a este controlador
//elimina cualquiera o todos los controladores de eventos asociados con este controlador

controller.abort(); // removes any/all event handlers associated with this controller


//activamos el evento y después lo podemos eliminar.
//mejorá la eficiencia en programas grandes. 

```


```
// Multiple eventos en un solo elemento
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);


//Se recomienda usar siempre addEventListener
//Sobretodo para apps grandes

```


```

// Otras formas de controlar eventos. 

//Event handler properties

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.onclick = () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
};

//onclick sin .addEventListener en el elemento. 

```


```
//Otra forma para usar la propiedad onclick
//le pasamos la funcion al elemento y propiedad
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;

```


```

//Otra forma para usar la propiedad onclick
//le pasamos la funcion al elemento y propiedad
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;


// Multiples eventos con addEventListener 
element.addEventListener("click", function1);
element.addEventListener("click", function2);


//Con la propiedad no se puede. 
//cualquier intento posterior de establecer la propiedad sobrescribirá los anteriores:
element.onclick = function1;
element.onclick = function2;

```


#### Peor práctica para eventos 

```
//inline event handlers
//La peor práctica para eventos. 

<button onclick="bgChange()">Press me</button>

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

```


```
//Función en el atributo: 
<button onclick="bgChange()">Press me</button>

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}


//Evento directamente en el atributo. 
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>

//Puede parecer fácil usar un atributo de controlador de eventos si está haciendo algo realmente rápido, pero rápidamente se vuelven inmanejables e ineficientes.
//mezclar HTML y JavaScript, ya que resulta difícil de leer. Mantener su JavaScript separado es una buena práctica 

```


#### Seleccionar todos los elementos html con un loop 

```

//Con JavaScript, puedes agregar fácilmente una función de controlador de eventos 
//a todos los botones de la página sin importar cuántos haya

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}

//muchas configuraciones de servidor comunes 
//no permitirán JavaScript en línea, como medida de seguridad.
//están desactualizados y es mala práctica. 

```



## Event Objects:

(e)

```
//Event Objects:

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);


//A veces, dentro de una función de controlador de eventos
//Verá un parámetro especificado con un nombre
//como evento, evt o e.
		
//Estamos incluyendo un objeto de evento, e, en la función
//En la función configurando un estilo de color de fondo 
//en e.target, que es el botón en sí.
		
//La propiedad de destino del objeto de evento 
//es siempre una referencia al elemento en el que ocurrió el evento. 

//Puede usar cualquier nombre que desee para el objeto de evento
//solo necesita elegir un nombre que luego pueda 
//usar para hacer referencia a él dentro de la función del controlador de eventos
//e/evt/event porque son breves y fáciles de recordar.

```

```
//Propiedades extra de los objetos de evento: 
//La mayoría de los objetos de evento tienen un conjunto estándar de propiedades y métodos disponibles
//function bgChange(e){}

//La idea es que sean relevante para el objeto
//ej, el evento keydown se activa cuando el usuario presiona una tecla.

//Su objeto de evento es un KeyboardEvent

<input id="textBox" type="text" />
<div id="output"></div>

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});

```


#### La clave de Event Object

const btn = document.querySelector("button");

function bgChange(e) {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);

Cuando asignamos a btn, bgChange que usa e.target 


### Event bubbling 

```
<button>Change color</button>

const btn = document.querySelector('button');

function random(number) {
return Math.floor(Math.random() * (number+1));
}

btn.addEventListener('click', () => {
const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
document.body.style.backgroundColor = rndCol;
});

```


### HTML DOM JS collection 

```
const myCollection = document.getElementsByTagName("p"); 

myCollection[1] 
 
 
const myCollection = document.getElementsByTagName("p");
for (let i = 0; i < myCollection.length; i++) {
  myCollection[i].style.color = "red";
} 

```

An HTMLCollection is NOT an array!

An HTMLCollection may look like an array, but it is not.

You can loop through the list and refer to the elements with a number (just like an array).

However, you cannot use array methods like valueOf(), pop(), push(), or join() on an HTMLCollection.


### Ejemplos w3 



## gpt 

### events en vanilla js 

```
document.getElementById("miBoton").addEventListener("click", function() {
    alert("¡Hiciste clic en el botón!");
});

```


click: Cuando un usuario hace clic en un elemento

mouseover: Cuando el mouse pasa sobre un elemento

mouseout: Cuando el mouse sale de un elemento

keydown: Cuando el usuario presiona una tecla

keyup: Cuando el usuario suelta una tecla

submit: Cuando se envía un formulario

```
document.getElementById("miDiv").addEventListener("mouseover", function() {
    console.log("¡El mouse entró en el div!");
});

```

### Eliminar un Event Listener:

La función debe estar definida aparte

```
function mostrarMensaje() {
    alert("¡Hiciste clic!");
}

const boton = document.getElementById("miBoton");

// Agregar evento
boton.addEventListener("click", mostrarMensaje);

// Quitar evento después de 5 segundos
setTimeout(() => {
    boton.removeEventListener("click", mostrarMensaje);
}, 5000);

```


### Event Delegation (Delegación de Eventos)

Si tienes muchos elementos dinámicos, en lugar de añadir eventos a cada uno, usa el evento en un elemento padre

```
document.getElementById("lista").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        alert("Clic en: " + event.target.textContent);
    }
});

```

Se usa un solo click en el ul, en vez de agregar eventos a cada li.

event.target indica qué elemento fue clickeado.



### Buenas practicas para eventos en vanilla js 

1. Usa addEventListener en lugar de atributos HTML

Es mala práctica usar: 

```
<button onclick="miFuncion()">Haz clic</button>

```

Se recomienda: 

```
document.getElementById("miBoton").addEventListener("click", miFuncion);

```


2. funciones separadas en lugar de funciones anónimas

Mala pŕactica: 

```
document.getElementById("miBoton").addEventListener("click", function() {
    alert("Hola");
});

```

Se recomienda: por reutilización

```
function mostrarMensaje() {
    alert("Hola");
}

document.getElementById("miBoton").addEventListener("click", mostrarMensaje);

```


3. Usa event.target para manejar múltiples elementos (Event Delegation)

Mala práctica (agregar eventos individualmente en cada elemento)

```
document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("click", () => {
        alert("Elemento clickeado");
    });
});

``` 

Buena práctica (evento en el contenedor padre - Delegación de eventos)

```
document.getElementById("lista").addEventListener("click", function(event) {
    if (event.target.classList.contains("item")) {
        alert("Clic en: " + event.target.textContent);
    }
});

```

Más eficiente cuando hay muchos elementos dinámicos.


4. Remueve eventos cuando ya no sean necesarios

Mala práctica (dejar eventos activos innecesariamente)

```
document.getElementById("miBoton").addEventListener("click", function() {
    console.log("Clic detectado");
});

```

Buena práctica (remover eventos cuando ya no se necesitan)

```
function manejarClick() {
    console.log("Clic detectado");
    miBoton.removeEventListener("click", manejarClick); // Remueve después del primer clic
}

const miBoton = document.getElementById("miBoton");
miBoton.addEventListener("click", manejarClick);

```

Evita acumulación de eventos innecesarios y posibles fugas de memoria.


5. Usa once: true si el evento solo debe ejecutarse una vez

```
document.getElementById("miBoton").addEventListener("click", () => {
    console.log("Se ejecuta solo una vez");
}, { once: true });

```

Evita tener que remover el evento manualmente.


6. Usa preventDefault() cuando sea necesario

Si un evento tiene un comportamiento predeterminado (ej. envío de formulario o enlace), usa preventDefault() para evitarlo

```
document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío automático
    console.log("Formulario validado correctamente");
});

```

Permite controlar la lógica antes de ejecutar una acción automática


7. Usa passive: true en eventos de scroll y touch

Si manejas eventos como scroll o touchstart, usa { passive: true } para mejorar el rendimiento en dispositivos móviles.

```
document.addEventListener("scroll", function() {
    console.log("Desplazando...");
}, { passive: true });

```

Mejora la fluidez del scroll al evitar bloqueos en el hilo principal.


8. Evita usar innerHTML dentro de eventos

Mala práctica (puede generar problemas de seguridad y rendimiento) 

```
document.getElementById("miBoton").addEventListener("click", () => {
    document.getElementById("contenedor").innerHTML = "<p>Nuevo contenido</p>";
});

```

Buena práctica (usa textContent o appendChild)

```
document.getElementById("miBoton").addEventListener("click", () => {
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Nuevo contenido";
    document.getElementById("contenedor").appendChild(nuevoParrafo);
});

```

innerHTML puede permitir ataques XSS si se usa con datos no confiables.


9. Usa event.stopPropagation() si quieres evitar burbujeo

Si tienes eventos anidados, usa stopPropagation() para evitar que el evento suba a los padres

```
document.getElementById("hijo").addEventListener("click", function(event) {
    event.stopPropagation();
    alert("Clic en el hijo, pero no en el padre");
});

document.getElementById("padre").addEventListener("click", function() {
    alert("Clic en el padre");
});

```

```
document.getElementById("hijo").addEventListener("click", function(event) {
    event.stopPropagation();
    alert("Clic en el hijo, pero no en el padre");
});

document.getElementById("padre").addEventListener("click", function() {
    alert("Clic en el padre");
});

```

### Permanencia con vanilla js 

1. Almacenar en LocalStorage o SessionStorage

2. Guardar en una Base de Datos (IndexedDB o Backend)


3. Mantener elementos dinámicos en el DOM sin recargar la página 

Si solo necesitas que los elementos permanezcan mientras la página está abierta, pero sin recargar, simplemente añádelos dinámicamente con JavaScript

```
document.getElementById("miBoton").addEventListener("click", function () {
    const input = document.getElementById("miInput");
    const lista = document.getElementById("miLista");

    if (input.value.trim()) {
        const li = document.createElement("li");
        li.textContent = input.value;
        lista.appendChild(li);
        input.value = "";
    }
});

```

Los elementos permanecen en el DOM, pero se perderán si recargas la página.


Si solo quieres que se mantengan mientras la página está abierta:

Simplemente agrégalos al DOM con JavaScript.



elementos permanentes

cambios permanentes

que las funciones cuando aplican cambios, o agregan nuevos elementos se queden 


1. Crear y agregar un párrafo a un contenedor

Crea un elemento <p>, le asigna un texto y lo añade a un contenedor existente en la página. 

El nuevo párrafo permanecerá en el DOM hasta que se elimine manualmente o se recargue la página.

```
function crearParrafo() {
  // Crear el elemento <p>
  const parrafo = document.createElement("p");
  // Asignar el contenido de texto
  parrafo.textContent = "Este es un nuevo párrafo agregado al DOM.";
  // Seleccionar el contenedor donde se agregará el párrafo
  const contenedor = document.getElementById("contenedor");
  // Agregar el párrafo al contenedor
  contenedor.appendChild(parrafo);
}

```

asegúrate de tener un contenedor en tu HTML, por ejemplo:

```
<div id="contenedor"></div>

```


2. Cambiar el estilo de un elemento

Esta función modifica el estilo de un elemento existente (por ejemplo, cambiando el color de fondo) y ese cambio se mantendrá mientras no se vuelva a modificar

```
function cambiarColor() {
  // Seleccionar el elemento por su ID
  const elemento = document.getElementById("miElemento");
  // Cambiar el color de fondo
  elemento.style.backgroundColor = "lightblue";
}

```

En el HTML: 

```
<div id="miElemento">Este elemento cambiará de color</div>

```


3. Crear un botón dinámicamente y agregarle un evento

Crea un botón, le asigna un texto y un evento de clic que muestra una alerta. 

El botón se añade al final del <body> y permanecerá en la página hasta que se elimine o se recargue.

```
function agregarBoton() {
  // Crear el elemento <button>
  const boton = document.createElement("button");
  // Asignar el texto al botón
  boton.textContent = "Botón dinámico";
  // Agregar un evento para el clic
  boton.addEventListener("click", function() {
    alert("¡Has hecho clic en el botón dinámico!");
  });
  // Agregar el botón al final del <body>
  document.body.appendChild(boton);
}

```

### Event target, object 

1. Event Object (event o evt)

Cuando ocurre un evento (como un clic, una pulsación de tecla o un cambio en un input), el navegador genera un objeto de evento que contiene información sobre ese evento específico

```
document.addEventListener("click", function(event) {
    console.log(event); // Muestra toda la información del evento
});

```

Este objeto event tiene varias propiedades y métodos útiles, como:

event.type: el tipo de evento (por ejemplo, "click", "keydown").

event.clientX, event.clientY: coordenadas del puntero en la pantalla.

event.target: el elemento en el que ocurrió el evento


2. Event Target (event.target)

event.target es una propiedad del event object que nos dice cuál fue el elemento específico que disparó el evento

```
document.addEventListener("click", function(event) {
    console.log("Elemento clickeado:", event.target);
});

```

Si haces click en el botón: 

```
document.addEventListener("click", function(event) {
    console.log("Elemento clickeado:", event.target);
});

```

El event.target será:

```
// Si haces clic en el botón, esto se imprimirá en la consola:
<button id="myButton">Haz clic</button>

```


Esto es útil para manejar eventos de manera dinámica. 

Por ejemplo, en un contenedor con varios botones:

```
document.getElementById("container").addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        console.log("Botón presionado:", event.target.textContent);
    }
});

```


### Diferencia entre this y event.target

Cuando usas addEventListener, this dentro del manejador de eventos hace referencia al elemento al que se adjuntó el evento, mientras que event.target es el elemento en el que realmente ocurrió el evento

```
const div = document.querySelector("#myDiv");

div.addEventListener("click", function(event) {
    console.log("this:", this);         // El <div id="myDiv">
    console.log("event.target:", event.target); // El elemento específico que recibió el clic
});

```

Si dentro de #myDiv hay un <p>Texto</p>, y haces clic en el párrafo:

this será #myDiv.
event.target será el <p>.


event: el objeto del evento que contiene información sobre la interacción.

event.target: el elemento donde realmente ocurrió el evento.

this en un event listener es el elemento al que se adjuntó el evento





4. Agregar varios elementos y persistir cambios en la sesión

Si deseas que los elementos creados se mantengan incluso al recargar la página, puedes combinar la creación de elementos con el almacenamiento en localStorage. 

Para guardar una lista de ítems

```
// Al cargar la página, se cargan los ítems guardados en localStorage
document.addEventListener("DOMContentLoaded", function () {
  const lista = document.getElementById("lista");
  const itemsGuardados = JSON.parse(localStorage.getItem("items")) || [];

  itemsGuardados.forEach(texto => {
    const li = document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);
  });
});

// Función para agregar un nuevo ítem a la lista y guardarlo
function agregarItem() {
  const input = document.getElementById("miInput");
  const texto = input.value.trim();
  if (texto) {
    // Crear el elemento <li>
    const li = document.createElement("li");
    li.textContent = texto;
    // Agregar el elemento a la lista
    document.getElementById("lista").appendChild(li);
    
    // Guardar el nuevo ítem en localStorage
    let itemsGuardados = JSON.parse(localStorage.getItem("items")) || [];
    itemsGuardados.push(texto);
    localStorage.setItem("items", JSON.stringify(itemsGuardados));
    
    // Limpiar el campo de entrada
    input.value = "";
  }
}

```

En el HTML: 

```
<input type="text" id="miInput" placeholder="Escribe un ítem">
<button onclick="agregarItem()">Agregar</button>
<ul id="lista"></ul>

```
 


## Páginación con vanilla js 



## Objeto que guarda los carteles 

next, prev button 

document.addEventListener

dom content load


# React 

## Diseño 

Interfaz de usuario dividida en componentes 

Luego tendremos que tener diferentes estados visuales de cada uno de tus componentes

conectarás tus componentes para que los datos fluyan a través de ellos


## Maqueta/Mockup: 

Necesitamos los datos API y un maqueta de diseño ui

como: 

```
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

```

```
|search...|
o Only show products in stoc, 

Name 		Price 
	
	fruits

Apple		  1
Dragonfruit   2
Passionfruit  3

	Vegetables 
	
Spinach 	  2
Pumpkin		  4
Peas 		  1
	
```

### Para implementar una interfaz de usuario en React, normalmente seguirás los mismos cinco pasos.


## 1. Divida la interfaz de usuario en una jerarquía de componentes

Comience dibujando cuadros alrededor de cada componente y subcomponente en la maqueta y asígneles un nombre. 


### dividir un diseño en componentes de diferentes maneras:

1. Programación: use las mismas técnicas para decidir si debe crear una nueva función u objeto. 
Una de esas técnicas es el principio de responsabilidad única, es decir, un componente idealmente solo debería hacer una cosa. 
Si termina creciendo, debe descomponerse en subcomponentes más pequeños.

2. CSS: considere para qué crearía selectores de clase. 
(Sin embargo, los componentes son un poco menos granulares).

3. Diseño: considere cómo organizaría las capas del diseño.


#### Si su JSON está bien estructurado, a menudo encontrará que se corresponde naturalmente con la estructura de componentes de su interfaz de usuario. 
 
Esto se debe a que la interfaz de usuario y los modelos de datos suelen tener la misma arquitectura de información, es decir, la misma forma.


## 2: Crea una versión estática en React

Ahora que tienes la jerarquía de componentes, es hora de implementar tu aplicación. 

El enfoque más sencillo es crear una versión que represente la interfaz de usuario de tu modelo de datos sin agregar ninguna interactividad... ¡todavía! 


(Si está familiarizado con el concepto de estado, no lo utilice para crear esta versión estática. 

El estado está reservado únicamente para la interactividad, es decir, los datos que cambian con el tiempo. 

Dado que se trata de una versión estática de la aplicación, no lo necesita).

Puede crear de "arriba hacia abajo" comenzando por crear los componentes que se encuentran más arriba en la jerarquía (como FilterableProductTable) o de "abajo hacia arriba" trabajando desde los componentes que se encuentran más abajo (como ProductRow). 

En los ejemplos más simples, suele ser más fácil hacerlo de arriba hacia abajo. 

En proyectos más grandes, es más fácil hacerlo de abajo hacia arriba.


### Los componentes/func deben tener sus props, variables, metodos objetos datos, estructuras, retornar html 

Después de crear los componentes, tendrás una biblioteca de componentes reutilizables que representan tu modelo de datos. 

Como se trata de una aplicación estática, los componentes solo devolverán JSX. 

El componente en la parte superior de la jerarquía (FilterableProductTable) tomará tu modelo de datos como propiedad. 

Esto se denomina flujo de datos unidireccional porque los datos fluyen hacia abajo desde el componente de nivel superior hasta los que se encuentran en la parte inferior del árbol.


### 3: Encuentra la representación mínima pero completa del estado de la interfaz de usuario

Para que la interfaz de usuario sea interactiva, debe permitir que los usuarios cambien el modelo de datos subyacente. 

Para ello, utilizará el estado.

Piense en el estado como el conjunto mínimo de datos cambiantes que su aplicación necesita recordar. 

El principio más importante para estructurar el estado es mantenerlo DRY (no repetirse). 

Determine la representación mínima absoluta del estado que necesita su aplicación y calcule todo lo demás a pedido. 

Por ejemplo, si está creando una lista de compras, puede almacenar los artículos como una matriz en el estado. 

Si también desea mostrar la cantidad de artículos en la lista, no almacene la cantidad de artículos como otro valor de estado; en su lugar, lea la longitud de su matriz.

Ahora piense en todos los datos de esta aplicación de ejemplo:

1. La lista original de productos
2. El texto de búsqueda que ingresó el usuario
3. El valor de la casilla de verificación
4. La lista filtrada de productos


### ¿Cuáles de estos son estados? Identifica los que no lo son:

1. ¿Permanece sin cambios con el tiempo? Si es así, no es estado.
2. ¿Se pasa desde un padre a través de propiedades? Si es así, no es estado.
3. ¿Puedes calcularlo en función del estado o las propiedades existentes en tu componente? Si es así, ¡definitivamente no es estado!

Lo que queda es probablemente estado.

Repasémoslos uno por uno nuevamente:

La lista original de productos se pasa como propiedades, por lo que no es estado.
El texto de búsqueda parece ser estado ya que cambia con el tiempo y no se puede calcular a partir de nada.
El valor de la casilla de verificación parece ser estado ya que cambia con el tiempo y no se puede calcular a partir de nada.
La lista filtrada de productos no es estado porque se puede calcular tomando la lista original de productos y filtrándola según el texto de búsqueda y el valor de la casilla de verificación.

¡Esto significa que solo el texto de búsqueda y el valor de la casilla de verificación son estado! ¡Bien hecho!


### 4: Identifica dónde debería estar tu estado

Después de identificar los datos de estado mínimos de tu aplicación, debes identificar qué componente es responsable de cambiar este estado o es el propietario del estado. 

Recuerda: React utiliza un flujo de datos unidireccional, que pasa los datos a lo largo de la jerarquía de componentes, desde el componente principal al secundario. 

Es posible que no esté claro de inmediato qué componente debería ser el propietario de qué estado. 

Esto puede ser un desafío si eres nuevo en este concepto, pero puedes averiguarlo siguiendo estos pasos.

Para cada parte del estado de tu aplicación:

1. Identifica cada componente que renderiza algo en función de ese estado.
2. Encuentra su componente principal común más cercano (un componente por encima de todos ellos en la jerarquía).
3. Decide dónde debería estar el estado:
	1. A menudo, puedes colocar el estado directamente en su componente principal común.
	2. También puedes colocar el estado en algún componente por encima de su componente principal común.
	3. Si no puede encontrar un componente donde tenga sentido poseer el estado, cree un nuevo componente únicamente para contener el estado y agréguelo en algún lugar de la jerarquía por encima del componente principal común.


En el paso anterior, encontró dos partes del estado en esta aplicación: el texto de entrada de búsqueda y el valor de la casilla de verificación. 

En este ejemplo, siempre aparecen juntos, por lo que tiene sentido colocarlos en el mismo lugar.

Ahora, analicemos nuestra estrategia para ellos:

1. Identifique los componentes que usan el estado:

	ProductTable debe filtrar la lista de productos en función de ese estado (texto de búsqueda y valor de la casilla de verificación).

	SearchBar debe mostrar ese estado (texto de búsqueda y valor de la casilla de verificación).

2. Encuentre su componente principal común: el primer componente principal que comparten ambos componentes es FilterableProductTable.

3. Decida dónde se encuentra el estado: mantendremos el texto de filtro y los valores del estado marcado en FilterableProductTable.


### ### 5: Agrega un flujo de datos inverso

Actualmente, tu aplicación se renderiza correctamente con propiedades y estados que fluyen hacia abajo en la jerarquía. 

Pero para cambiar el estado de acuerdo con la entrada del usuario, necesitarás admitir que los datos fluyan en sentido contrario: los componentes del formulario en las profundidades de la jerarquía deben actualizar el estado en FilterableProductTable.

React hace que este flujo de datos sea explícito, pero requiere un poco más de escritura que el enlace de datos bidireccional. Si intentas escribir o marcar la casilla en el ejemplo anterior, verás que React ignora tu entrada. 

Esto es intencional. 

Al escribir <input value={filterText} />, has establecido la propiedad de valor de la entrada para que siempre sea igual al estado filterText que se pasa desde FilterableProductTable. 

Dado que el estado filterText nunca se establece, la entrada nunca cambia.

Quieres que cada vez que el usuario cambie las entradas del formulario, el estado se actualice para reflejar esos cambios. 

El estado es propiedad de FilterableProductTable, por lo que solo puede llamar a setFilterText y setInStockOnly. 

Para permitir que SearchBar actualice el estado de FilterableProductTable, debe pasar estas funciones a SearchBar:





# Práctica diseño react 

Componentes: 
dar nombres, crear jerarquía, componentes y subcomponentes  

## Vista/ruta 1

1. img 
mypic

2. contenedor: dos botones/iconos con acciones y contenido 
especialidad como titulo-> como un h1/texto normal  
bio-btn y proj-btn
contenido bio y contenido proj

3. iconos con acciones 

### ui vista/ruta 1 

```
app 		 	1

  mypic 	 	2

  main 		 	3
    txt-dev  	4
	bio-btn	 	5
	  bio-cont  6
	proj-btn 	7
	  proj-cont 8
  icons 	 	9

```

clases css: mypic, main, txt-dev, bio-btn, proj-btn, icons
bio-cont, proj-cont

que hacer con el html: header, main, footers, divs, article, etc. 


## Ruta 2 

1. reloj
2. clima 
3. stock
4. news 

## avanzado 

func: cambiar acentos y fondo según hora


## 2. version estatica de la app 

func que representa el componente: sus props, var, met, obj estruct datos, control (log)
y el html que devuelve

funciones que devuelven jsx: 

app 		 	1

  mypic 	 	2

  main 		 	3
    txt-dev  	4
	bio-btn	 	5
	  bio-cont  6
	proj-btn 	7
	  proj-cont 8
  icons

empezamos de abajo hacia arriba (ultimo: app tomará los datos)

### props {...}:
Son valores que un componente recibe de su padre. 
Son inmutables dentro del componente hijo.
Lo que significa que un componente hijo no puede modificar las props que recibe, solo puede usarlas.


### componentes: 

```
const Saludo = ({props}) => {
  return <h1>Hola, {props}!</h1>;
};

```

Si el Padre necesita pasar información al Hijo, puede hacerlo mediante props

```
const Hijo = ({ mensaje }) => {
  return <p>{mensaje}</p>;
};

const Padre = () => {
  return (
    <div>
      <h1>Componente Padre</h1>
      <Hijo mensaje="Hola desde el Padre!" />
    </div>
  );
};

```

```
const Saludo = (props) => {
  return <h1>Hola, {props.nombre}!</h1>;
};

const App = () => {
  return <Saludo nombre="Juan" />;
};

```

Destructuración de Props

Para hacer el código más limpio, puedes desestructurar las props directamente en los parámetros de la función:

```
const Saludo = ({ nombre }) => {
  return <h1>Hola, {nombre}!</h1>;
};

```

Pasar varias props a un componente.

```
const Usuario = ({ nombre, edad }) => {
  return (
    <p>
      Nombre: {nombre}, Edad: {edad}
    </p>
  );
};

const App = () => {
  return <Usuario nombre="Ana" edad={25} />;
};

```

Props con Valores por Defecto

Puedes definir valores por defecto para las props usando defaultProps

```
const Saludo = ({ nombre = "Invitado" }) => {
  return <h1>Hola, {nombre}!</h1>;
};

```

Si el componente Saludo no recibe una prop nombre, mostrará "Hola, Invitado!".


También puedes usar defaultProps (menos común en componentes funcionales):

```
Saludo.defaultProps = {
  nombre: "Invitado"
};

```

Props con children

Permite que un componente envuelva otros elementos dentro de él.

```
const Contenedor = ({ children }) => {
  return <div className="contenedor">{children}</div>;
};

const App = () => {
  return (
    <Contenedor>
	  <h2>Título dentro del contenedor</h2>
      <p>Este es un mensaje dentro del contenedor.</p>
    </Contenedor>
  );
};

```

Contenedor es un div que tiene elementos (h2, p) que no sabe qué elementos tendrá dentro, simplemente los renderiza con {children}.

Contenedor renderiza todo lo que se encuentre entre sus etiquetas gracias a {children}.

App pasa un h2 y un p como contenido del contenedor.



### Practica componentes portfolio

app 		 	 	1

  mypic 	 	 	2

  main 		 	 	3
    txt-dev  	 	4
	bio-btn	 	 	5
	  bio-content   6
	proj-btn 	 	7
	  proj-content 	8
  icons				9
  
  
empezamos de abajo hacia arriba definiendo componentes
Se van a integrar a app que es el componente final 
este le pasará props a todos los demás. 
Al menos en la versión estatica. 

1. icons(){}

2. proj-btn(){}
	3. proj-content(){}

4. bio-btn(){} 	
	  5.bio-content(){}

6. txt-dev(){}

7. main(){}

8. app(){}


Arq: 

1. en una página/componente.

2. separados por componentes y despues anidarlos a app. 

los componentes con subcomponentes irían juntos 


#### Crear componentes para app: están formados por props, var, func, estruct control, bucles, met, obj y jsx que renderiza html y elem de los objetos del componente

los componentes y las funciones internas pueden ser definidas con arrow func

#### export e import react 

import

1. Importación combinada (export default + export nombrado)

Si un archivo tiene una exportación por defecto y exportaciones nombradas, puedes importar ambas así:

```
// math.ts
export const PI = 3.14;
export default function multiplicar(a: number, b: number) {
  return a * b;
}

```

```
import multiplicar, { PI } from "./math";

console.log(multiplicar(2, 3)); // 6
console.log(PI); // 3.14

```

2. React con multiples componentes 

archivo: components/Button.tsx

```
export function PrimaryButton() {
  return <button style={{ backgroundColor: "blue", color: "white" }}>Primario</button>;
}

export function SecondaryButton() {
  return <button style={{ backgroundColor: "gray", color: "white" }}>Secundario</button>;
}

```

importarlos en otro archivo (App.tsx)

```
import { PrimaryButton, SecondaryButton } from "./components/Button";

function App() {
  return (
    <div>
      <PrimaryButton />
      <SecondaryButton />
    </div>
  );
}

```

Importación de Archivos CSS

Puedes importar archivos CSS en tus componentes usando

```
import "./styles.css";

```

Importación Dinámica (import())

Permite cargar módulos de manera asíncrona (útil para lazy loading en React).

React.lazy

```
const LazyComponent = React.lazy(() => import("./LazyComponent"));

function App() {
  return (
    <React.Suspense fallback={<div>Cargando...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}

```


export

exportar un componente o función de dos maneras:

1. Exportación nombrada (export):

Permite exportar múltiples elementos de un mismo archivo. Al importarlos, debes usar llaves {}.

```
// utils.ts
export const suma = (a: number, b: number) => a + b;
export const resta = (a: number, b: number) => a - b;

```

```
import { suma, resta } from "./utils";

console.log(suma(2, 3)); // 5
console.log(resta(5, 2)); // 3

```

Nota: Si intentas importar suma sin llaves, obtendrás un error.


2. Exportación por defecto (export default):

Cada archivo puede tener una sola exportación por defecto. 

()

No requiere llaves {} al importarlo.

```
// UserProfile.tsx
export default function UserProfile() {
  return <h1>Perfil de Usuario</h1>;
}

```

```
import UserProfile from "./UserProfile"; // No necesita llaves

function App() {
  return <UserProfile />;
}

```

Nota: Puedes cambiar el nombre al importar:

```
import MiPerfil from "./UserProfile"; // Funciona aunque el componente se llame UserProfile

```






### Agregar estilo 

En React, especificas una clase CSS con className. 
Funciona de la misma manera que el atributo de clase HTML:

```
<img className="avatar" />

```

Luego escribes las reglas CSS para ella en un archivo CSS separado:

```
.avatar {
border-radius: 50%;
}

```

React no prescribe cómo agregar archivos CSS. 
En el caso más simple, agregarás una etiqueta <link> a tu HTML. 
Si usas una herramienta de compilación o un marco, consulta su documentación para aprender a agregar un archivo CSS a tu proyecto.


### “escapar hacia JavaScript” desde los atributos de JSX, pero debe usar llaves en lugar de comillas. 

Por ejemplo, className="avatar" pasa la cadena "avatar" como la clase CSS, pero src={user.imageUrl} lee el valor de la variable user.imageUrl de JavaScript y luego pasa ese valor como el atributo src:

```
return (
<img
className="avatar"
src={user.imageUrl}
/>
);

```

También puede colocar expresiones más complejas dentro de las llaves de JSX, por ejemplo, la concatenación de cadenas:

```
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

```

style={{}} no es una sintaxis especial, sino un objeto {} normal dentro de las llaves JSX style={ }. 

Puedes usar el atributo style cuando tus estilos dependen de variables de JavaScript.


### Renderizado condicional 

```
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);

```

Si prefieres un código más compacto, puedes usar conditional ? operator. 

A diferencia de if, funciona dentro de JSX:

```
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>

```

Cuando no necesite la rama else, también puede utilizar una sintaxis lógica && más corta:

```
<div>
{isLoggedIn && <AdminPanel />}
</div>

```


## Renderizar listas

Dependerá de las funciones de JavaScript, como el bucle for y la función map() de matriz, para representar listas de componentes.

Por ejemplo, supongamos que tiene una matriz de productos

```
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

```

Dentro de su componente, utilice la función map() para transformar una matriz de productos en una matriz de elementos <li>:

```
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);

```

Observa cómo <li> tiene un atributo key.
Para cada elemento de una lista, debes pasar una cadena o un número que identifique de forma única ese elemento entre sus hermanos
Por lo general, una clave debe provenir de tus datos, como un ID de base de datos. 
React usa tus claves para saber qué sucedió si luego insertas, eliminas o reordenas los elementos.

```
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

```

## 3. estado minimo y completo

Para que la interfaz de usuario sea interactiva, debe permitir que los usuarios cambien el modelo de datos subyacente. 
Para ello, utilizará el estado.
El principio más importante para estructurar el estado es mantenerlo DRY (no repetirse). 
Determine la representación mínima absoluta del estado que necesita su aplicación y calcule todo lo demás a pedido. 

use state, etc con su var y met y valor inicial 

estructura de datos para almacenar los elementos. 
Usar las propieades y funciones de las estructuras para acceder a valores/elementos, etc. 

Ahora piense en todos los datos de esta aplicación de ejemplo:
cadenas, numeros, booleanos, etc. 
Pensar cual de estos son estados. 

ej: 
1. La lista original de productos
2. El texto de búsqueda que ingresó el usuario
3. El valor de la casilla de verificación
4. La lista filtrada de productos

¿Cuáles de estos son estados? Identifica los que no lo son:

1. ¿Permanece sin cambios con el tiempo? Si es así, no es estado.
2. ¿Se pasa desde un padre a través de propiedades? Si es así, no es estado.
3. ¿Puedes calcularlo en función del estado o las propiedades existentes en tu componente? Si es así, ¡definitivamente no es estado!

La lista original de productos se pasa como propiedades, por lo que no es estado.
El texto de búsqueda parece ser estado ya que cambia con el tiempo y no se puede calcular a partir de nada.
El valor de la casilla de verificación parece ser estado ya que cambia con el tiempo y no se puede calcular a partir de nada.
La lista filtrada de productos no es estado porque se puede calcular tomando la lista original de productos y filtrándola según el texto de búsqueda y el valor de la casilla de verificación.

¡Esto significa que solo el texto de búsqueda y el valor de la casilla de verificación son estado! ¡Bien hecho!

 

### estado: Es información interna del componente que puede cambiar con el tiempo.

Es un objeto que almacena datos internos de un componente y puede cambiar con el tiempo.

#### A diferencia de props, que son inmutables y vienen de un componente padre, el estado es mutable y lo maneja el propio componente

1. useState en componente funcional 

En componentes funcionales, el estado se maneja con el hook useState.

```
import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0); // Estado inicial: 0

  return (
    <div>
      <p>Valor del contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};

export default Contador;

```

useState(0) inicializa el estado con 0.

contador almacena el valor actual del estado.

setContador es la función que actualiza el estado.

Cuando se hace clic en el botón, setContador incrementa el valor del estado.


Estado con Objetos

El estado puede almacenar objetos en lugar de valores simples

```
const Usuario = () => {
  const [usuario, setUsuario] = useState({ nombre: "Juan", edad: 25 });

  const cambiarNombre = () => {
    setUsuario({ ...usuario, nombre: "Carlos" }); // Se mantiene la edad
  };

  return (
    <div>
      <p>Nombre: {usuario.nombre}</p>
      <p>Edad: {usuario.edad}</p>
      <button onClick={cambiarNombre}>Cambiar Nombre</button>
    </div>
  );
};

```

usuario es un objeto { nombre, edad }.

setUsuario({ ...usuario, nombre: "Carlos" }) usa spread operator (...usuario) para evitar perder la edad al actualizar el nombre


Estado con Arrays

Puedes manejar arreglos en el estado

```
const ListaTareas = () => {
  const [tareas, setTareas] = useState(["Estudiar", "Comprar"]);

  const agregarTarea = () => {
    setTareas([...tareas, "Nueva Tarea"]); // Agregar al final
  };

  return (
    <div>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
      <button onClick={agregarTarea}>Agregar Tarea</button>
    </div>
  );
};

```

tareas almacena una lista de strings.

setTareas([...tareas, "Nueva Tarea"]) crea un nuevo array con la tarea agregada.

Se usa map para renderizar las tareas dinámicamente.


### state vs props

state: 

lo define: El propio componente
cambio: Sí
actualización: useState o this.setState

props:

El componente padre
No
No se puede cambiar directamente



## 4. ubicación del estado 

en los componentes hijo o padre

### anidación

```
const Hijo = () => {
  return <p>¡Soy el componente Hijo!</p>;
};

const Padre = () => {
  return (
    <div>
      <h1>Componente Padre</h1>
      <Hijo />
    </div>
  );
};

```


### Interactividad/eventos 

Puede responder a eventos declarando funciones de controlador de eventos (event handler) dentro de sus componentes

```
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

```

 onClick={handleClick} no tiene paréntesis al final! 
 No llame a la función del controlador de eventos: solo necesita pasarla.  
 React llamará a su controlador de eventos cuando el usuario haga clic en el botón.



## 5. invertir el flujo de datos 
 
pasar el estado al componente padre


### hooks

Las funciones que comienzan con use se denominan Hooks. 

Hay integrados por React y personalizados. 

Los Hooks son más restrictivos que otras funciones. 

Solo puedes llamar Hooks en la parte superior de tus componentes (u otros Hooks). 

Si quieres usar useState en una condición o un bucle, extrae un nuevo componente y colócalo allí.


### compartir datos 

Si renderizas un hook el mismo componente varias veces, cada uno tendrá su propio estado. 
Observe cómo cada botón “recuerda” su propio estado de conteo y no afecta a los demás botones.

En el ejemplo anterior, cada MyButton tenía su propio recuento independiente y, cuando se hacía clic en cada botón, solo cambiaba el recuento del botón en el que se hacía clic: 

		MyApp
		/   \
MyButton	MyButton
(count=0)	(count=0)

Inicialmente, el estado de conteo de cada MyButton es 0

		MyApp
		/   \
MyButton	MyButton
(count=1)	(count=0)

El primer MyButton actualiza su conteo a 1

Sin embargo, a menudo necesitarás componentes que compartan datos y se actualicen siempre juntos.
Para que ambos componentes MyButton muestren el mismo recuento y se actualicen juntos, necesitas mover el estado de los botones individuales "hacia arriba/upwards" al componente más cercano que los contenga a todos.

En este ejemplo, es MyApp:

		MyApp
		count=0
		/   \
(count=0)	(count=0)
	|			|
MyButton	MyButton

Inicialmente, el estado de conteo de MyApp es 0 y se transmite a ambos hijos.
Al hacer clic, MyApp actualiza su estado de conteo a 1 y lo pasa a ambos hijos.

		MyApp
		count=1
		/   \
(count=1)	(count=1)
	|			|
MyButton	MyButton


Ahora, cuando haga clic en cualquiera de los botones, el recuento en MyApp cambiará, lo que cambiará ambos recuentos en MyButton. 
Aquí se muestra cómo puede expresar esto en código.
Primero, mueva el estado de MyButton a MyApp:

```
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  // ... we're moving code from here ...
}

```

Luego, pasa el estado desde MyApp a cada MyButton, junto con el controlador de clic compartido. 
Puedes pasar información a MyButton usando las llaves JSX, tal como lo hiciste anteriormente con las etiquetas integradas como <img>:

```
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

```

La información que pasas de esta manera se llama props. 

### Ahora el componente MyApp contiene el estado de conteo y el controlador de eventos handleClick, y pasa ambos como props a cada uno de los botones.

### Por último, cambia MyButton para que lea los props que has pasado desde su componente principal:

```
function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

```

Cuando haces clic en el botón, se activa el controlador onClick. 
La propiedad onClick de cada botón se estableció en la función handleClick dentro de MyApp, por lo que el código dentro de ella se ejecuta. 
Ese código llama a setCount(count + 1), lo que incrementa la variable de estado count. 


El nuevo valor de count se pasa como una propiedad a cada botón, por lo que todos muestran el nuevo valor. 
Esto se llama "elevar el estado/“lifting state up”". Al subir el estado, lo has compartido entre componentes.

```
import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

```


### Buenas prácticas componentes 

1. Dividir en Componentes Pequeños y Reutilizables

Evita crear componentes monolíticos. En su lugar, divídelos en partes más pequeñas y reutilizables.

```
// Componente muy grande con demasiadas responsabilidades
function UserProfile({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <img src={user.avatar} alt="Avatar" />
      <p>Email: {user.email}</p>
      <button>Seguir</button>
    </div>
  );
}

// Dividido en componentes reutilizables
function UserAvatar({ src }) {
  return <img src={src} alt="Avatar" />;
}

function UserProfile({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <UserAvatar src={user.avatar} />
      <UserDetails email={user.email} />
      <FollowButton />
    </div>
  );
}

```

2. Usar Props de Manera Clara y Tipadas

Si usas TypeScript, define interfaces para los props.

Ejemplo con TypeScript:

```
interface UserProfileProps {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return <h1>{user.name}</h1>;
};

```

3. Evitar Prop Drilling, Usar Context o Redux

Si necesitas pasar datos a muchos componentes anidados, usa Context API o Redux en lugar de props anidadas.

Ejemplo con Context API:

```
const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const user = { name: "John Doe", email: "john@example.com" };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

const UserProfile = () => {
  const user = useContext(UserContext);
  return <h1>{user.name}</h1>;
};

```


4. Usar useEffect de Forma Correcta

Evita efectos innecesarios y usa dependencias correctamente.

Ejemplo incorrecto:

```
useEffect(() => {
  fetchUserData();
}, []); // ⚠️ Falta la dependencia, podría usar datos obsoletos

```

Ejemplo correcto:

```
useEffect(() => {
  fetchUserData();
}, [userId]); // Se ejecuta solo cuando userId cambia

```


5. Evitar Re-renderizados Innecesarios

Usa React.memo para componentes puros y useCallback / useMemo para optimizar funciones y valores.

Ejemplo:

```
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});

```

6. Usar CSS Modules o Styled Components en Lugar de Clases Globales

Evita estilos globales para prevenir conflictos.

Ejemplo con CSS Modules:

```
import styles from "./UserProfile.module.css";

function UserProfile() {
  return <h1 className={styles.title}>Perfil de Usuario</h1>;
}

```

Ejemplo con Styled Components:

```
const Title = styled.h1`
  color: blue;
  font-size: 20px;
`;

function UserProfile() {
  return <Title>Perfil de Usuario</Title>;
}

```


7. Implementar Manejo de Errores con Error Boundaries

Para evitar que un error en un componente rompa toda la aplicación.

Ejemplo de un Error Boundary:

```
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return <h1>Algo salió mal.</h1>;
    return this.props.children;
  }
}

```


8. Escribir Pruebas Unitarias para Componentes

Usa Jest y Testing Library para pruebas unitarias.

Ejemplo de prueba con Testing Library:

```
import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";

test("Muestra el nombre del usuario", () => {
  render(<UserProfile user={{ name: "John Doe" }} />);
  expect(screen.getByText("John Doe")).toBeInTheDocument();
});

```
