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


### Orden de los subcomponente en el componente principal 

Como figura en el layout 

app va en index.html(punto de entrada)
los componentes/subcomp van en app

public:
src: carpeta para componentes, hooks personalizados, serv, etc 
test: 
archivos config


### Arq portfolio

modulos: home, 

app 		 	 	1

  mypic 	 	 	2

  main 		 	 	3
    txt-dev  	 	4
	bio-btn	 	 	5
	  bio-content   6
	proj-btn 	 	7
	  proj-content 	8
  icons				9


1. icons(){}

2. proj-btn(){}
	3. proj-content(){}

4. bio-btn(){} 	
	  5.bio-content(){}

6. txt-dev(){}

7. main(){}

8. app(){}


main: 

main 		 	 	3
    txt-dev  	 	4
	bio-btn	 	 	5
	  bio-content   6
	proj-btn 	 	7
	  proj-content 	8


Ej: 

```
FilterableProductTable
	SearchBar
	ProductTable
		ProductCategoryRow
		ProductRow
```


```
function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

```


FilterableProductTable
	SearchBar
	ProductTable
		ProductCategoryRow
		ProductRow
		
		
1. ProductCategoryRow
{ category }
retorna celda; tr, th

2. ProductRow
{ product }
var name condicional 


3. ProductTable
{ products }
row, foreach
push

anida:

push:
<ProductCategoryRow
  category={product.category}
  key={product.category} />

push:
<ProductRow
product={product}
key={product.name} />


4. SearchBar
retorna form 

5. FilterableProductTable
{ products }

anida: 
<SearchBar />
<ProductTable products={products} />

6. datos


7. app


#### arq main 

comp separados: 

main 		 	 	3
    txt-dev  	 	4
	bio-btn	 	 	5
	  bio-content   6
	proj-btn 	 	7
	  proj-content 	8


pic()
main() -> content (article)
dev() -> title (p)
bio() -> btn func/event (div - flex - icon)
bio-content() -> param -> actv default
proj() -> btn func/event (div - flex - icon)
proj-content -> links (display block)

main render/return: txt-dev, bio-btn, proj-btn
bio: bio-content
proj: proj-content

logica bio y proj:
props/estruct/content
func

bio-btn:
si activ no click(?)

proj-btn:

obj: props clave valor, func, otras estruct
obj.prop
obj.func()

bio-btn.prop/func
proj-btn.prop/func 

param
links

en var txt que almacene txt param


### Diseño, display y orden de componentes React 

1. flex: 

div flex
  se mostraran flex colum horiz
div


2. flex y bloque:

div flex

div

div 
  
div


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



### Arq portf props

main() -> content (article)
dev() -> title (p)
bio() -> btn func/event (div - flex - icon)
bio-content() -> param -> actv default
proj() -> btn func/event (div - flex - icon)
proj-content -> links (display block)

main render/return: txt-dev, bio-btn, proj-btn
bio: bio-content
proj: proj-content


```
<Main />
<Bio />
<Biotxt />
<Links />
<Icons type="button" />

```


### Arq minima y completa portfolio 

Se necesita props y estado 

Arq abajo hacia arriba: 

#### props (datos de componente padre a hijo):

##### Escribimos el prop en el componente hijo y para pasar datos renderizamos el componente hijo en el padre

Escribimos el nombre del componente hijo en el padre, la prop y su valor. 


#### estado (datos cambiantes que su aplicación necesita recordar): 

Aplicar DRY (no repetirse)

Guardar/representar datos en estructuras de datos. 

Ej: Por ejemplo, si está creando una lista de compras, puede almacenar los artículos como una matriz en el estado. 

Si también desea mostrar la cantidad de artículos en la lista, no almacene la cantidad de artículos como otro valor de estado; en su lugar, lea la longitud de su matriz.


##### Piense en todos los datos de la app

1. La lista original de productos
2. El texto de búsqueda que ingresó el usuario
3. El valor de la casilla de verificación
4. La lista filtrada de productos


##### ¿Cuáles de estos son estados? Identifica los que no lo son:

1. ¿Permanece sin cambios con el tiempo? Si es así, no es estado.
2. ¿Se pasa desde un padre a través de propiedades? Si es así, no es estado.
3. ¿Puedes calcularlo en función del estado o las propiedades existentes en tu componente? Si es así, ¡definitivamente no es estado!

La lista original de productos se pasa como propiedades, por lo que no es estado.
El texto de búsqueda parece ser estado ya que cambia con el tiempo y no se puede calcular a partir de nada.
El valor de la casilla de verificación parece ser estado ya que cambia con el tiempo y no se puede calcular a partir de nada.
La lista filtrada de productos no es estado porque se puede calcular tomando la lista original de productos y filtrándola según el texto de búsqueda y el valor de la casilla de verificación.


pic() -> img
main() -> content (article)
  dev() -> title (p)
  bio() -> btn func/event (div - flex - icon)
    bio-content() -> param -> actv default
  proj() -> btn func/event (div - flex - icon)
    proj-content -> links (display block)

main render/return: txt-dev, bio-btn, proj-btn
bio: bio-content
proj: proj-content


datos: 

estado: 

func con distinto contenido 
bio-content
proj-content



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


### Ubicación del estado en port 

identificar qué componente es responsable de cambiar este estado o es el propietario del estado. 

Para cada parte del estado de tu aplicación:

1. Identifica cada componente que renderiza algo en función de ese estado.
2. Encuentra su componente principal común más cercano (un componente por encima de todos ellos en la jerarquía).
3. Decide dónde debería estar el estado:
	1. A menudo, puedes colocar el estado directamente en su componente principal común.
	2. También puedes colocar el estado en algún componente por encima de su componente principal común.
	3. Si no puede encontrar un componente donde tenga sentido poseer el estado, cree un nuevo componente únicamente para contener el estado y agréguelo en algún lugar de la jerarquía por encima del componente principal común.

pic() -> img
main() -> content (article)
  dev() -> title (p)
  bio() -> btn func/event (div - flex - icon)
    bio-content() -> param -> actv default
  proj() -> btn func/event (div - flex - icon)
    proj-content -> links (display block)

main render/return: txt-dev, bio-btn, proj-btn
bio: bio-content
proj: proj-content


datos: 

estado: 

func con distinto contenido 
bio-content
proj-content



En el ejemplo, siempre aparecen juntos, por lo que tiene sentido colocarlos en el mismo lugar.

Ahora, analicemos nuestra estrategia para ellos:

1. Identifique los componentes que usan el estado:

	ProductTable debe filtrar la lista de productos en función de ese estado (texto de búsqueda y valor de la casilla de verificación).

	SearchBar debe mostrar ese estado (texto de búsqueda y valor de la casilla de verificación).

2. Encuentre su componente principal común: el primer componente principal que comparten ambos componentes es FilterableProductTable.

3. Decida dónde se encuentra el estado: mantendremos el texto de filtro y los valores del estado marcado en FilterableProductTable.


```
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

```

Luego, pase filterText y inStockOnly a ProductTable y SearchBar como propiedades:

```
<div>
  <SearchBar 
    filterText={filterText} 
    inStockOnly={inStockOnly} />
  <ProductTable 
    products={products}
    filterText={filterText}
    inStockOnly={inStockOnly} />
</div>

```

Puedes empezar a ver cómo se comportará tu aplicación. 

Edita el valor inicial de filterText de useState('') ​​a useState('fruit') en el código de sandbox que aparece a continuación. 

Verás tanto el texto de entrada de búsqueda como la actualización de la tabla:



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


## error-boundaries 


# Apps Ej: 

## Product table

```
import { useState } from 'react';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText} 
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable 
        products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)} />
      <label>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

```


### arq product table 

De: 

```
FilterableProductTable
	SearchBar
	ProductTable
		ProductCategoryRow
		ProductRow
```

A: 

1. FilterableProductTable({ products })
retorna: 

<SearchBar 
  filterText={filterText}  
  inStockOnly={inStockOnly} 
  onFilterTextChange={setFilterText} 
  onInStockOnlyChange={setInStockOnly} />

<ProductTable 
  products={products} 
  filterText={filterText}
  inStockOnly={inStockOnly} />

2. ProductCategoryRow({ category })
tr>
  <th colSpan="2">
	{category}
  </th>
</tr>

3. ProductRow({ product })

4. ProductTable({ products, filterText, inStockOnly })

rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );

rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
 

5.  searchBar

filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange


6. datos 


7. app()
return <FilterableProductTable products={PRODUCTS} />;



## tic tac toe

```
import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

```

### arq tic tac toe

1. Square({ value, onSquareClick })  
<button className="square" onClick={onSquareClick}>
  {value}
</button>

2. Board({ xIsNext, squares, onPlay })
return grilla

3. function Game()
props 
functions 

4. calculateWinner(squares)


## CSS y Componentes

importar app.css en los comp secundarios 
para que hereden 

o al estar anidados heredan directamente


## Nav estruc arch

### Ruta Absoluta
Linux/macOS: /home/usuario/Documentos/reporte.pdf
Windows: C:\Usuarios\usuario\Documentos\reporte.pdf

Siempre comienza desde la raíz (/ en Linux/macOS, una unidad como C:\ en Windows).
Funciona desde cualquier ubicación

### Ruta Relativa
Es una ruta que depende de la ubicación actual (el directorio en el que estás).

Ejemplo:
Si estás en /home/usuario/ y quieres acceder a reporte.pdf en Documentos/, puedes usar:

Linux/macOS: cd Documentos/reporte.pdf
Windows: cd Documentos\reporte.pdf

Más corta y flexible.
Depende de la ubicación actual.


### Caracteres rutas relativas: 

.   El directorio actual. Ejemplo: ./script.sh (ejecuta un script en la carpeta actual).
..  El directorio padre (uno arriba).

    Ejemplo: cd .. (sube un nivel).
    Ejemplo: cd ../Proyectos (sube un nivel y entra en Proyectos).

~ 	Tu carpeta de usuario.

    Linux/macOS: cd ~/Descargas (entra a Descargas del usuario).
    Windows (PowerShell): cd $HOME\Descargas (hace lo mismo).



# Desactivar recarga en btn

1. en onClick

```
onClick={(e) => { this.callAPI('api'); e.preventDefault() }}

```


2. type button

¿Está dentro de un formulario? Si es así, se convierte en un botón de envío.

```
import React from "react";

function Button({ type, style = "default", className, children, onClick }) {

  return (
    <button type={type} onClick={onClick} className={["btn btn-lg", `btn-${style}`, 
    className].join(" ")}>
    {children}
    </button>
  );
}

export default Button;

```

Intenta pasarle el tipo de botón:

```
<Button type="button">Reload</Button>

```


3. Con Class de React: 

```
class SomeComponent extends React.Component {
   constructor(props) {
     super(props)
     this.onClick = this.onClick.bind(this);
   }
   onClick(e) {
   e.preventDefault();
   // Do something
   }
   render() {
     return (
        <button onClick={this.onClick}>Button Text</button>
   }

}

```


4. onClick en componente 

```

function Button({ type = "default", className, children, onClick }) {

  return (
    <button type="button" onClick={onClick} className={["btn btn-lg", `btn-${type}`, 
    className].join(" ")}>
    {children}
    </button>
  );
}

export default Button;



<Button
    onClick={(e) => {e.preventDefault();this.callAPI('api');}}
    type="success"
    className="input-lg">
    Search
</Button>

```


## RS  prevent reload: 

1. type prop, value button en Compon
2. onClick={(e) => {e.preventDefault();...code 
  en Comp renderiz
3. en Onclick de return elem
  onClick={(e) => { this.callAPI('api'); e.preventDefault() }}



# Mostrar contenido con un click



# Ocultar y mostrar contenido


1. 

Necesitas tener el contenido original en el ternario para que se oculte al activar o desactivar la visualización. 

También cambié "setShow" para que "mostrar" sea falso en lugar del valor anterior, ya que no importa, ya que el botón no se puede activar o desactivar, ya que una vez que haces clic en él, no se puede volver a activar o desactivar el contenido original.

```
import React, { useState } from 'react'

function Body() {    
    const [show, setShow] = useState(true);

    return (
        <div className='container'>
            {show ? (
               <div className="start-container">
                  <h2>Click Start To View The Application</h2>
                  <button onClick={() => setShow(false)} className='btn'>Start!</button>         
               </div>
            ) : (
               <form action="GET">
                  <input type="text" />
                  <button className='btn'>Submit</button>
               </form>
            )
        </div>
  )
}

export default Body

```


2. 

No necesita ocultar el estado y puede alternar la visibilidad solo con mostrar el estado. 

Pruebe esto:

```
 { show ? <form action="GET">
  <input type="text" />
  <button className='btn'>Submit</button>
    </form> : null
 }

```


3. 

```

import React, { useState } from 'react';

function Body() {
const [show, setShow] = useState(false);

return (
    <>
        <div className="container">
            {/* URL Link Input */}
            <div>
                {show ? (
                    <form action="GET">
                        <input type="text" />
                        <button className="btn">Submit</button>
                    </form>
                ) : (
                    <div className="start-container">
                        <h2>Click Start To View The Application</h2>
                        <button onClick={() => setShow(!show)} className="btn">
                            Start!
                        </button>
                    </div>
                )}
            </div>
        </div>
    </>
);
}

export default Body;

```


4. 

Podrías usar un estado de inicio de la aplicación y luego renderizar tu componente de manera condicional:

```
const { useState } = React

function Body() {
  const [appStarted, setAppStarted] = useState(false)

  return (
    <div className="container">
      {appStarted ? (
        <div>
          <h2>Hidden Content</h2>
        </div>
      ) : (
        <div className="start-container">
          <h2>Click Start To View The Application</h2>
          <button onClick={ () => setAppStarted(true) } className='btn'>Start!</button>
        </div>
      )}
    </div>
  )
}


ReactDOM.render(<Body />, document.getElementById("root"))

```


# Reemplazar un contenido por otro

1. create dynamic regex

```
const word = "something";
const sentence = "This is something";

let first = "\\b",
  second = "\\b";

const regex = new RegExp(first + word + second, "g");

const newSent = sentence.replace(regex, "Inder");
console.log(newSent);

```


2. literal de plantilla/template literal

replace espera una expresión regular o una cadena (coincidencia exacta, no una cadena que parezca una expresión regular). Necesitará crear una expresión regular a partir de un literal de plantilla:

```
const oldText = "the sly brown fox is sly"
const dynamic_word = "sly"
const newText = oldText.replaceAll(
  new RegExp(`\\b${dynamic_word}\\b`, 'g'),
  `<span class='dynamic-word'>${dynamic_word}</span>`
);

console.log(newText)

```

El indicador de salto de palabra \b debe estar escapado en el literal de plantilla.
Debe usar el indicador g o solo reemplazará la primera ocurrencia.


3. 

```
const dynamic_word = word.word?.[0].text;
      const first = '\\b';
      const second = '\\b';
      const regex = new RegExp(first + dynamic_word + second, 'g');
      const newText = text.replace(regex, `<span class="dynamic-word">${dynamic_word}</span>`);

```


# Llamar a otro componente con un Evento/click





# Eventos/acciones 

onClick 

```
const Boton = () => {
  const handleClick = () => {
    alert("¡Botón clickeado!");
  };

  return <button onClick={handleClick}>Haz clic</button>;
};

```

Se define la función handleClick.

Se asocia a la propiedad onClick del botón.

Cuando el usuario hace clic, se ejecuta la función


### Pasar Parámetros

Pasar un valor a la función del evento, puedes hacerlo con una arrow function.

```
const Boton = () => {
  const handleClick = (mensaje) => {
    alert(mensaje);
  };

  return <button onClick={() => handleClick("Hola desde React!")}>Haz clic</button>;
};

```

handleClick recibe "Hola desde React!" cuando el botón es presionado.


# Interactividad portfolio 

1. funcs, click y contenido
2. logica visible por defecto, ocultar/mostrar 



# RS React 

Mostrar código js 

1. anidación

```
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

```


2. jsx, escapar js, llaves 

encapsular varios elementos en div o conten vacío <></>

```
return (
<h1>
{user.name}
</h1>
);

return (
<img
className="avatar" //cadena como valor
src={user.imageUrl} //lee y toma valor de la variable user.imageUrl
/>
);

```

Objetos: 

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


3. Renderizado condicional 

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

A diferencia de if, funciona dentro de JSX (las llaves {}):

```
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>

```

Cuando no necesite la rama else está la sintaxis más corta && 

```
<div>
{isLoggedIn && <AdminPanel />}
</div>

```


4. Eventos 

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


5. Estado 

componente “recuerde” cierta información y la muestre

Para ello, agrega un estado a tu componente.

Primero, importa useState desde React:

```
import { useState } from 'react';

```

Ahora puedes declarar una variable de estado dentro de tu componente:

```
function MyButton() {
  const [count, setCount] = useState(0);
  // ...

```

Obtendrás dos cosas de useState: el estado actual (count) y la función que te permite actualizarlo (setCount). 

Puedes darles cualquier nombre, pero la convención es escribir ([algo, setSomething]).


La primera vez que se muestra el botón, count será 0 porque pasaste 0 a useState(). 

Cuando quieras cambiar el estado, llama a setCount() y pásale el nuevo valor. Al hacer clic en este botón, se incrementará el contador:

```
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

```

React volverá a llamar a la función de tu componente. 

Esta vez, el conteo será 1. Luego será 2. Y así sucesivamente.

Si renderizas el mismo componente varias veces, cada uno tendrá su propio estado. 

Haz clic en cada botón por separado:

```
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

```

Observe cómo cada botón “recuerda” su propio estado de conteo y no afecta a los demás botones.

Cada uno se actualiza por su cuenta o cuando el usuario haga algo para actualizarlo. 


6. Hooks 

Las funciones que comienzan con use se denominan Hooks. 

También puedes escribir tus propios Hooks combinando los existentes.

Los Hooks son más restrictivos que otras funciones. 

Solo puedes llamar Hooks en la parte superior de tus componentes (u otros Hooks). 

Si quieres usar useState en una condición o un bucle, extrae un nuevo componente y colócalo allí.


Compartir datos entre componentes

a menudo necesitarás componentes que compartan datos y se actualicen siempre juntos.

Para que ambos componentes MyButton muestren el mismo recuento y se actualicen juntos, necesitas mover el estado de los botones individuales "hacia arriba/upwards" al componente más cercano que los contenga a todos.

Ahora, cuando haga clic en cualquiera de los botones, el recuento en MyApp cambiará, lo que cambiará ambos recuentos en MyButton. 


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

Ahora el componente MyApp contiene el estado de conteo y el controlador de eventos handleClick, y pasa ambos como props a cada uno de los botones.

Por último, cambia MyButton para que lea los props que has pasado desde su componente principal:

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


7. Sintaxis abreviada: 

arrow funct, return sin (), eventos en component renderiz 

```
const Saludo = (props) => {
  return <h1>Hola, {props.nombre}!</h1>;
};

```


```
import { useState } from 'react';

const Contador = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

```


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

A veces queremos que un componente pueda recibir otros componentes dentro de él de forma más flexible.

```
const Contenedor = ({ children }) => {
  return <div className="contenedor">{children}</div>;
};

const App = () => {
  return (
    <Contenedor>
      <h2>Este es un título dentro del contenedor</h2>
      <p>Y este es un párrafo.</p>
    </Contenedor>
  );
};

```

Contenedor actúa como un "envoltorio" y puede recibir cualquier contenido.


```
const Saludo = ({ nombre }) => {
  return <h1>Hola, {nombre}!</h1>;
};

```



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


```
const Saludo = ({ nombre = "Invitado" }) => {
  return <h1>Hola, {nombre}!</h1>;
};

```

```
Saludo.defaultProps = {
  nombre: "Invitado"
};

```

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


state: 

lo define: El propio componente

cambio: Sí

actualización: useState o this.setState


props:

El componente padre

No

No se puede cambiar directamente



8. Tipos de hooks 

Son funciones especiales que permiten usar características como estado y ciclo de vida en componentes funcionales, sin necesidad de clases.

Antes de los hooks, solo los componentes de clase podían manejar estado y ciclo de vida.


1. useState: maneja el estado 

```
const [contador, setContador] = useState(0);

```

2. useEffect: maneja efectos secundarios (fetch, timers, eventos)

```
useEffect(() => {
  console.log("El componente se montó o el contador cambió.");
}, [contador]);

```

```
import { useState, useEffect } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("El contador cambió:", contador);
  }, [contador]); // Se ejecuta cuando cambia `contador`

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};

```

useEffect se ejecuta después del render y puede hacer cosas como:

Llamadas a APIs (fetch).
Suscribirse/desuscribirse a eventos.
Actualizar el DOM.


3. useContext: compartir estado global sin prop drilling

```
const TemaContext = React.createContext();
const valor = useContext(TemaContext);

```

```
import { createContext, useContext } from "react";

const TemaContext = createContext("claro");

const Hijo = () => {
  const tema = useContext(TemaContext);
  return <p>El tema actual es: {tema}</p>;
};

const App = () => {
  return (
    <TemaContext.Provider value="oscuro">
      <Hijo />
    </TemaContext.Provider>
  );
};

```

useContext evita tener que pasar props manualmente por varios niveles.


4. useReducer: alternativa a useState para estados complejos

```
const [state, dispatch] = useReducer(reducer, initialState);

```

```
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementar":
      return { contador: state.contador + 1 };
    case "decrementar":
      return { contador: state.contador - 1 };
    default:
      return state;
  }
};

const Contador = () => {
  const [state, dispatch] = useReducer(reducer, { contador: 0 });

  return (
    <div>
      <p>Contador: {state.contador}</p>
      <button onClick={() => dispatch({ type: "incrementar" })}>+</button>
      <button onClick={() => dispatch({ type: "decrementar" })}>-</button>
    </div>
  );
};

```

useReducer es útil para gestionar lógica más compleja que useState.


5. useRef: referencias a elementos del DOM

```
const inputRef = useRef(null);

```

```
import { useRef } from "react";

const EnfocarInput = () => {
  const inputRef = useRef(null);

  const enfocar = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={enfocar}>Enfocar</button>
    </div>
  );
};

```

useRef se usa para:

Acceder a elementos del DOM sin useState.
Mantener valores sin provocar re-render


#### Utilidad de los hooks 

useState: Manejar estado en componentes funcionales
 
useEffect: Efectos secundarios (fetch, eventos, timers

useContext: Compartir estado global sin props

useReducer: Alternativa a useState para lógica compleja

useRef: Referencias a elementos del DOM

Custom Hooks: Reutilizar lógica en varios componentes



9. Tipos de eventos 

1. Se manejan mediante camelCase (ejemplo: onClick en lugar de onclick).

2. Se pasan como funciones dentro de JSX (ejemplo: {handleClick} en lugar de "handleClick()").

3. Se usa event.preventDefault() en lugar de return false para prevenir comportamientos por defecto.


### Manejo de eventos 

onClick 

```
const Boton = () => {
  const handleClick = () => {
    alert("¡Botón clickeado!");
  };

  return <button onClick={handleClick}>Haz clic</button>;
};

```

Se define la función handleClick.

Se asocia a la propiedad onClick del botón.

Cuando el usuario hace clic, se ejecuta la función


### Pasar Parámetros

Pasar un valor a la función del evento, puedes hacerlo con una arrow function.

```
const Boton = () => {
  const handleClick = (mensaje) => {
    alert(mensaje);
  };

  return <button onClick={() => handleClick("Hola desde React!")}>Haz clic</button>;
};

```

handleClick recibe "Hola desde React!" cuando el botón es presionado.


### event 

Se pasa un objeto de evento (event) automáticamente.

event.target:

```
const Input = () => {
  const handleChange = (event) => {
    console.log("Valor:", event.target.value);
  };

  return <input type="text" onChange={handleChange} />;
};

```

Cada vez que el usuario escribe, se imprime el valor en la consola.


### Prevenir Comportamiento por Defecto (preventDefault)

Ej: evitar que un form recargue la página 

```
const Formulario = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Formulario enviado");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Enviar</button>
    </form>
  );
};

```


### Eventos con useState

Contador con onClick y useState

```
import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};

```


### Eventos Compuestos (onMouseEnter, onKeyDown, etc.)

onClick: Cuando se hace clic en un elemento

onChange: Cuando cambia el valor de un input

onMouseEnter: Cuando el mouse entra en un elemento

onMouseLeave: Cuando el mouse sale de un elemento

onKeyDown: Cuando se presiona una tecla

onSubmit: Cuando se envía un formulario


Ej: onMouseEnter y onMouseLeave

```
const HoverBox = () => {
  const handleMouseEnter = () => console.log("Mouse encima");
  const handleMouseLeave = () => console.log("Mouse fuera");

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ padding: 20, background: "lightblue" }}>
      Pasa el mouse sobre mí
    </div>
  );
};

```

Cada vez que el mouse entra o sale del área azul, se imprime un mensaje en la consola.


### Eventos en Listas

Lista con map y onClick

```
const Lista = () => {
  const elementos = ["Elemento 1", "Elemento 2", "Elemento 3"];

  const handleClick = (item) => {
    alert("Seleccionaste: " + item);
  };

  return (
    <ul>
      {elementos.map((item, index) => (
        <li key={index} onClick={() => handleClick(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

```

Al hacer clic en un ítem de la lista, se muestra una alerta con su nombre.


### Evento Sintético de React

React usa su propio SyntheticEvent, que es una capa sobre los eventos nativos de JavaScript.

Ej con event.persist()

```
const Boton = () => {
  const handleClick = (event) => {
    event.persist(); // Permite acceder al evento fuera del callback
    setTimeout(() => {
      console.log("Clic en:", event.type);
    }, 1000);
  };

  return <button onClick={handleClick}>Haz clic</button>;
};

```

event.persist() es útil cuando usas eventos dentro de funciones asincrónicas.


Eventos en React son similares a los de JavaScript, pero usan camelCase y pasan funciones.
Puedes pasar parámetros a eventos con arrow functions.
Usa event.preventDefault() para evitar comportamientos predeterminados.
Hay eventos para mouse, teclado, formularios, etc.
React usa un SyntheticEvent para optimizar el rendimiento.


10. ## Custom Hooks 

Son funciones de JavaScript que utilizan los hooks de React (useState, useEffect, etc.) para encapsular y reutilizar lógica de estado o efectos secundarios en múltiples componentes.

Son ideales para: 

Evitar código duplicado.

Mantener los componentes más limpios.

Mejorar la reutilización y organización del código.


Es una función que:

Comienza con use (ejemplo: useContador).

Puede usar otros hooks (useState, useEffect, etc.).

Devuelve un valor (estado, función, etc.).

```
import { useState } from "react";

const useContador = (valorInicial = 0) => {
  const [contador, setContador] = useState(valorInicial);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return { contador, incrementar, decrementar };
};

export default useContador;

```


### Uso del Custom Hook en un Componente

```
import React from "react";
import useContador from "./useContador";

const Contador = () => {
  const { contador, incrementar, decrementar } = useContador(5);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
    </div>
  );
};

export default Contador;

```

### Custom Hook con useEffect (Fetch de API)

useFetch para hacer peticiones a una API

```
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;

```

Uso en un Componente

```
import React from "react";
import useFetch from "./useFetch";

const ListaUsuarios = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((usuario) => (
        <li key={usuario.id}>{usuario.name}</li>
      ))}
    </ul>
  );
};

export default ListaUsuarios;

```

useFetch encapsula la lógica de fetch.

Puede ser reutilizado en cualquier componente.


### useRef (Manejo de Input):

useInput para manejar inputs de forma más limpia

```
import { useState } from "react";

const useInput = (valorInicial) => {
  const [valor, setValor] = useState(valorInicial);

  const onChange = (e) => setValor(e.target.value);

  return { valor, onChange };
};

export default useInput;

```

Uso en un componente:

```
import React from "react";
import useInput from "./useInput";

const Formulario = () => {
  const nombre = useInput("");
  const email = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nombre: ${nombre.valor}, Email: ${email.valor}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre" {...nombre} />
      <input type="email" placeholder="Email" {...email} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;

```

Evita escribir useState para cada input.

Se pueden manejar múltiples inputs con el mismo hook.


### Custom Hook con useContext (Tema Global)

```
import { createContext, useContext, useState } from "react";

const TemaContext = createContext();

export const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState("claro");

  const alternarTema = () => setTema(tema === "claro" ? "oscuro" : "claro");

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
};

export const useTema = () => useContext(TemaContext);

```

Uso en un Componente

```
import React from "react";
import { TemaProvider, useTema } from "./useTema";

const BotonTema = () => {
  const { tema, alternarTema } = useTema();

  return (
    <button onClick={alternarTema} style={{ background: tema === "oscuro" ? "black" : "white", color: tema === "oscuro" ? "white" : "black" }}>
      Cambiar a {tema === "oscuro" ? "claro" : "oscuro"}
    </button>
  );
};

const App = () => (
  <TemaProvider>
    <BotonTema />
  </TemaProvider>
);

export default App;

```

useTema permite acceder al tema desde cualquier componente.

TemaProvider maneja el estado de manera global.


useContador: Manejar contadores de forma reutilizable

useFetch: Hacer peticiones a APIs de forma limpia

useInput: Manejar inputs sin escribir useState cada vez

useTema: Gestionar temas (modo oscuro/claro) de forma global


## RS: Arq React 

### 1: Divida la interfaz de usuario en una jerarquía de componentes
 
1. FilterableProductTable (gris) contiene toda la aplicación.
2. SearchBar (azul) recibe la entrada del usuario.
3. ProductTable (lavanda) muestra y filtra la lista según la entrada del usuario.
4. ProductCategoryRow (verde) muestra un encabezado para cada categoría.
5. ProductRow (amarillo) muestra una fila para cada producto.



Ahora que ha identificado los componentes en la maqueta, organícelos en una jerarquía.

Los componentes que aparecen dentro de otro componente en la maqueta deben aparecer como elementos secundarios en la jerarquía:

```
FilterableProductTable
	SearchBar
	ProductTable
		ProductCategoryRow
		ProductRow
```


### 2: Crea una versión estática en React

El enfoque más sencillo es crear una versión que represente la interfaz de usuario de tu modelo de datos sin agregar ninguna interactividad... ¡todavía! 

#### Para crear una versión estática de tu aplicación que represente tu modelo de datos, deberás crear componentes que reutilicen otros componentes y pasen datos mediante props. 

Los props son una forma de pasar datos de padre a hijo. 

#### Puede crear de "arriba hacia abajo" comenzando por crear los componentes que se encuentran más arriba en la jerarquía (como FilterableProductTable) o de "abajo hacia arriba" trabajando desde los componentes que se encuentran más abajo (como ProductRow). 

En los ejemplos más simples, suele ser más fácil hacerlo de arriba hacia abajo. 

En proyectos más grandes, es más fácil hacerlo de abajo hacia arriba.

Después de crear los componentes, tendrás una biblioteca de componentes reutilizables que representan tu modelo de datos. 

Como se trata de una aplicación estática, los componentes solo devolverán JSX. 

#### El componente en la parte superior de la jerarquía (FilterableProductTable) tomará tu modelo de datos como propiedad. 

#### Esto se denomina flujo de datos unidireccional porque los datos fluyen hacia abajo desde el componente de nivel superior hasta los que se encuentran en la parte inferior del árbol.


### 3: Encuentra la representación mínima pero completa del estado de la interfaz de usuario

Para que la interfaz de usuario sea interactiva, debe permitir que los usuarios cambien el modelo de datos subyacente. 

Para ello, utilizará el estado.

#### Piense en el estado como el conjunto mínimo de datos cambiantes que su aplicación necesita recordar. 

El principio más importante para estructurar el estado es mantenerlo DRY (no repetirse). 


Por ejemplo, si está creando una lista de compras, puede almacenar los artículos como una matriz en el estado. 

Si también desea mostrar la cantidad de artículos en la lista, no almacene la cantidad de artículos como otro valor de estado; en su lugar, lea la longitud de su matriz.

Ahora piense en todos los datos de esta aplicación de ejemplo:

1. La lista original de productos
2. El texto de búsqueda que ingresó el usuario
3. El valor de la casilla de verificación
4. La lista filtrada de productos

 
¿Cuáles de estos son estados? Identifica los que no lo son:

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


```
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

```

Luego, pase filterText y inStockOnly a ProductTable y SearchBar como propiedades:

```
<div>
  <SearchBar 
    filterText={filterText} 
    inStockOnly={inStockOnly} />
  <ProductTable 
    products={products}
    filterText={filterText}
    inStockOnly={inStockOnly} />
</div>

```

Puedes empezar a ver cómo se comportará tu aplicación. 

Edita el valor inicial de filterText de useState('') ​​a useState('fruit') en el código de sandbox que aparece a continuación. 

Verás tanto el texto de entrada de búsqueda como la actualización de la tabla:



# Renderizar componente 


## Componente dentro de otro 

### Directa

```
const Child = () => {
  return <p>Soy un componente hijo</p>;
};

const Parent = () => {
  return (
    <div>
      <h1>Componente Padre</h1>
      <Child />
    </div>
  );
};

```


### props para Renderizado Dinámico

componente como prop y renderizarlo dentro del padre

```
const Child = () => <p>Hola desde el hijo</p>;

const Parent = ({ Component }) => {
  return (
    <div>
      <h1>Componente Padre</h1>
      <Component />
    </div>
  );
};

// Uso
<Parent Component={Child} />;

```

Child se pasa como una prop (Component) y se renderiza en Parent.


### children para Composición

```
const Parent = ({ children }) => {
  return (
    <div>
      <h1>Componente Padre</h1>
      {children}
    </div>
  );
};

// Uso
<Parent>
  <p>Este es un hijo dentro del Parent</p>
  <button>Botón hijo</button>
</Parent>

```


### Renderización Condicional

renderizar un componente hijo dependiendo de una condición.

```
const Child = () => <p>Componente Hijo Renderizado</p>;

const Parent = ({ showChild }) => {
  return (
    <div>
      <h1>Componente Padre</h1>
      {showChild && <Child />}
    </div>
  );
};

// Uso
<Parent showChild={true} />;

```

Si showChild es true, se renderiza <Child />.


### mediante Funciones como Prop

función como prop y ejecutarla dentro del padre.

```
const Parent = ({ renderChild }) => {
  return (
    <div>
      <h1>Componente Padre</h1>
      {renderChild()}
    </div>
  );
};

// Uso
<Parent renderChild={() => <p>Renderizado desde función</p>} />;

```

control más flexible sobre qué se renderiza dentro del componente padre.


### Context API para Renderizado Global

```
const MyContext = React.createContext();

const Child = () => {
  const value = React.useContext(MyContext);
  return <p>Valor desde el contexto: {value}</p>;
};

const Parent = () => {
  return (
    <MyContext.Provider value="Hola desde el Context">
      <Child />
    </MyContext.Provider>
  );
};

```

Child accede al valor de MyContext sin necesidad de que Parent lo pase explícitamente como prop.


## Con click 

### Mostrar/Ocultar un Componente al Hacer Clic

Usamos el hook useState para manejar si el componente hijo debe mostrarse o no

```
import { useState } from "react";

const Child = () => {
  return <p>Soy el Componente Hijo</p>;
};

const Parent = () => {
  const [showChild, setShowChild] = useState(false);

  return (
    <div>
      <h1>Componente Padre</h1>
      <button onClick={() => setShowChild(!showChild)}>
        {showChild ? "Ocultar" : "Mostrar"} Hijo
      </button>
      {showChild && <Child />}
    </div>
  );
};

export default Parent;

```

useState(false) inicia el estado showChild como false (el hijo no se muestra).

Al hacer clic en el botón, setShowChild(!showChild) cambia el estado.

Si showChild es true, se renderiza <Child />; si es false, no se muestra


### Múltiples Clics: Renderizar Diferentes Componentes

cambiar el componente mostrado al hacer clic en diferentes botones.

```
import { useState } from "react";

const ChildOne = () => <p>Componente Hijo 1</p>;
const ChildTwo = () => <p>Componente Hijo 2</p>;

const Parent = () => {
  const [selectedChild, setSelectedChild] = useState(null);

  return (
    <div>
      <h1>Componente Padre</h1>
      <button onClick={() => setSelectedChild("one")}>Mostrar Hijo 1</button>
      <button onClick={() => setSelectedChild("two")}>Mostrar Hijo 2</button>
      <button onClick={() => setSelectedChild(null)}>Ocultar</button>

      {selectedChild === "one" && <ChildOne />}
      {selectedChild === "two" && <ChildTwo />}
    </div>
  );
};

export default Parent;

```

useState(null) inicia el estado selectedChild sin ningún componente seleccionado.

Al hacer clic en un botón, setSelectedChild("one") o setSelectedChild("two") cambia el estado.

Dependiendo del valor de selectedChild, se renderiza <ChildOne /> o <ChildTwo />.


### Modal al Hacer Clic

renderizar un componente tipo modal al hacer clic en un botón:

```
import { useState } from "react";

const Modal = ({ onClose }) => {
  return (
    <div style={{ background: "rgba(0,0,0,0.5)", padding: "20px", position: "fixed", top: 0, left: 0, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ background: "white", padding: "20px", borderRadius: "5px" }}>
        <p>Este es un Modal</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

const Parent = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h1>Componente Padre</h1>
      <button onClick={() => setShowModal(true)}>Abrir Modal</button>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Parent;

```



## Renderizar componentes mediante eventos 

renderizar componentes en respuesta a eventos como clicks, cambios de input, eventos del teclado, etc. 

Usando el estado (useState) y los manejadores de eventos (onClick, onChange, onMouseOver, etc.), puedes mostrar u ocultar componentes dinámicamente.


### click

```
import { useState } from "react";

const Child = () => <p>Soy el componente hijo</p>;

const Parent = () => {
  const [showChild, setShowChild] = useState(false);

  return (
    <div>
      <h1>Componente Padre</h1>
      <button onClick={() => setShowChild(!showChild)}>
        {showChild ? "Ocultar" : "Mostrar"} Hijo
      </button>
      {showChild && <Child />}
    </div>
  );
};

export default Parent;

```

Se usa useState(false) para controlar la visibilidad del hijo.

Al hacer clic en el botón, el estado cambia y el componente se muestra o se oculta


### Respuesta a un Input (onChange)

mostrar un componente cuando el usuario escribe cierto valor en un input.

```
import { useState } from "react";

const Message = () => <p>¡Hola, bienvenido!</p>;

const Parent = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1>Componente Padre</h1>
      <input
        type="text"
        placeholder="Escribe 'React'"
        onChange={(e) => setInputValue(e.target.value)}
      />
      {inputValue.toLowerCase() === "react" && <Message />}
    </div>
  );
};

export default Parent;

```

Cuando el usuario escribe "React", el componente Message se renderiza.


### Evento del Teclado (onKeyDown)

mostrar un componente cuando el usuario presiona una tecla específica.

```
import { useState } from "react";

const Child = () => <p>Tecla presionada: Enter</p>;

const Parent = () => {
  const [showChild, setShowChild] = useState(false);

  return (
    <div>
      <h1>Presiona Enter para mostrar el componente</h1>
      <input
        type="text"
        placeholder="Escribe aquí..."
        onKeyDown={(e) => {
          if (e.key === "Enter") setShowChild(true);
        }}
      />
      {showChild && <Child />}
    </div>
  );
};

export default Parent;

```

Si el usuario presiona Enter dentro del input, se muestra el componente Child.


### onMouseOver (Pasar el Mouse)

mostrar un componente cuando el usuario pasa el mouse sobre un elemento.

```
import { useState } from "react";

const Tooltip = () => <p style={{ color: "blue" }}>Este es un tooltip</p>;

const Parent = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div>
      <h1>Componente Padre</h1>
      <button
        onMouseOver={() => setShowTooltip(true)}
        onMouseOut={() => setShowTooltip(false)}
      >
        Pasa el mouse aquí
      </button>
      {showTooltip && <Tooltip />}
    </div>
  );
};

export default Parent;

```

Al pasar el mouse sobre el botón (onMouseOver), se muestra el tooltip.

Cuando se quita el mouse (onMouseOut), el tooltip desaparece.


### Doble Click (onDoubleClick)

Mostrar componente cuando el usuario haga doble click

```
import { useState } from "react";

const Message = () => <p>Hiciste doble clic</p>;

const Parent = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <h1>Haz doble clic en el cuadro</h1>
      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "lightgray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer"
        }}
        onDoubleClick={() => setShowMessage(!showMessage)}
      >
        Doble clic aquí
      </div>
      {showMessage && <Message />}
    </div>
  );
};

export default Parent;

```



# Vista

 w ## Cambiar la vista completa de una página en React


# Ruta

## Cambiar la vista con un ruta 




# UX

## Botones 

transition:

bordes: 

border 0 y border-bottom-color: solid y sacar radius

hover

active


### button active react

el mismo click que lo mantine activado/renderizado
aplique la propiedad active y aplique css


#### setActive(e.)

al hacer click que renderize componente 
y guarde pseudoclase de css :active 
con borde y color



# Rs conceptos Diseño, arq comp, etc

estado propio
estado compartido 

var estad actual y setState: 
su valor inicial va a ser lo que le pasemos a setState.
setState define su valor.  
Después con el evento llamamos a setState y dentro a la variable de estado para modificarla. 
Al final renderizamos al variable de estado actualizada

Estado individual y compartido: 

individual: el estado y la funcion controladora a en el mismo componente
Cada componente renderizado en el padre tendrá su propio valor. 

compartido: el estado y la función controladora va en el padre
al hijo le pasamos props: onClick y la variable estado 
en el padre renderizamos los componentes 
en el hijo le damos valor a las props
Cada componente renderizado en el padre tendra el valor mismo valor
el valor que guarda en su variable estado. 


Props 
Si el Padre necesita pasar información al Hijo, puede hacerlo mediante props
Son inmutables, lo que significa que un componente hijo no puede modificar las props que recibe, solo puede usarlas.

El componente hijo toma un prop como parámetro 
lo llamamos/invocamos/escribimos dentro de su retorno. 
Renderizamos el componente hijo dentro del padre
invocamos a la prop y le pasamos un valor/contenido. 


prop children

la llamamos children, creamos un div dentro de este componente
Para renderizar varios elementos más. 
llamamos a children dentro de este contenedor. 
Renderizamos el contenedor en un componente padre 
No usamos como contenedor <div></div o <></> 
Pasamos a usar <Contenedor>...elementos...</contenedor> 

Ej: App puede pasar un h2 y un p como contenido del contenedor.


Estado vs props


Es un objeto que almacena datos internos de un componente y puede cambiar con el tiempo.
A diferencia de props, que son inmutables y vienen de un componente padre, el estado es mutable y lo maneja el propio componente



Objetos y arrays en state:


Hooks

useEffect: maneja efectos secundarios (fetch, timers, eventos)
useEffect se ejecuta después del render y puede hacer cosas como:

Llamadas a APIs (fetch).
Suscribirse/desuscribirse a eventos.
Actualizar el DOM.

useContext: compartir estado global sin prop drilling
useContext evita tener que pasar props manualmente por varios niveles.

useReducer: alternativa a useState para estados complejos
useReducer es útil para gestionar lógica más compleja que useState.


useRef: referencias a elementos del DOM
se usa para:
Acceder a elementos del DOM sin useState.
Mantener valores sin provocar re-render

Custom Hooks: Reutilizar lógica en varios componentes



Eventos

Se manejan mediante camelCase (ejemplo: onClick en lugar de onclick).
Se pasan como funciones dentro de JSX (ejemplo: {handleClick} en lugar de "handleClick()").
Se usa event.preventDefault() en lugar de return false para prevenir comportamientos por defecto.

Pueden recibir parámetros y el objeto event con sus props y metodos
event.preventDefault()

Eventos Compuestos (onMouseEnter, onKeyDown, etc.)

onClick: Cuando se hace clic en un elemento

onChange: Cuando cambia el valor de un input

onMouseEnter: Cuando el mouse entra en un elemento

onMouseLeave: Cuando el mouse sale de un elemento

onKeyDown: Cuando se presiona una tecla

onSubmit: Cuando se envía un formulario


Eventos con listas (key e item) y eventos sinteticos


props, eventos y estado: 

variable de estado, funcion para cambiar variable estado o darle un valor 
en un controlador de evento llamamos a la func y la variable para actualizar su valor. 

renderizado condicional: 
Con un if evaluamos el valor actual de la variable de estdo
Si tiene un valor hacemos una cosa y si tiene un valor distinto hacemos otra.
O directamente chequeamos el valor que tiene y devolvemos una cosa. 


diseño arq: 

maqueta: componentes en jerarquia 

version estatica: props información que tienen que recibir los componentes
No puede cambiar 

estado: información o contenido que tienen que almacenar.
Puede cambiar. 

ubicación: 

Inversion de estado: compartir datos almacenados. 

1. interfaz de usuario en una jerarquía de componentes: 

Componente o funcion; una responsabilidad

Programación: use las mismas técnicas para decidir si debe crear una nueva función u objeto. 
Una de esas técnicas es el principio de responsabilidad única, es decir, un componente idealmente solo debería hacer una cosa. 
Si termina creciendo, debe descomponerse en subcomponentes más pequeños.

CSS: considere para qué crearía selectores de clase. 
(Sin embargo, los componentes son un poco menos granulares).

Diseño: considere cómo organizaría las capas del diseño.

(app, pic, main (bio, links), icons)


2. versión estática
crear una versión estática que represente tu modelo de datos
interfaz de usuario de tu modelo de datos pasen datos mediante props.
componentes que reutilicen otros componentes 
(app y main reutilizan componentes)

props son una forma de pasar datos de padre a hijo
esta familiarizado con el concepto de estado/state. 
El estado es para la interactividad, los datos que cambian con el tiempo

Puede crear de "arriba hacia abajo" comenzando por crear los componentes que se encuentran más arriba en la jerarquía 
o de "abajo hacia arriba" trabajando desde los componentes que se encuentran más abajo. 
En los ejemplos más simples, suele ser más fácil hacerlo de arriba hacia abajo. 
En proyectos más grandes, es más fácil hacerlo de abajo hacia arriba.

Después de crear los componentes, tendrás una biblioteca de componentes reutilizables que representan tu modelo de datos. 
Como se trata de una aplicación estática, los componentes solo devolverán JSX. 

El componente en la parte superior de la jerarquía (FilterableProductTable) tomará tu modelo de datos como propiedad. 
(la api products)
Esto se denomina flujo de datos unidireccional porque los datos fluyen hacia abajo desde el componente de nivel superior hasta los que se encuentran en la parte inferior del árbol.

(App, Pic, Main (bio (Biotxt y Links), Icons)
icons(prop: onClick)
links(prop: onClick)
bio (prop: onClick)


3. Encuentra la representación mínima pero completa del estado de la interfaz de usuario

Para que la interfaz de usuario sea interactiva, debe permitir que los usuarios cambien el modelo de datos subyacente. 
Para ello, utilizará el estado.
conjunto mínimo de datos cambiantes que su aplicación necesita recordar. 
mantenerlo DRY (no repetirse).

Determine la representación mínima absoluta del estado que necesita su aplicación y calcule todo lo demás a pedido. 
Las estructuras para almacenar los datos. 
Piense en todos los datos que la app necesita
Los elementos de la app. 

Clasificar cuales no son estado. 
1. ¿Permanece sin cambios con el tiempo? Si es así, no es estado.
2. ¿Se pasa desde un padre a través de propiedades? Si es así, no es estado.
3. ¿Puedes calcularlo en función del estado o las propiedades existentes en tu componente? Si es así, ¡definitivamente no es estado!

Si es prop no es estado; debe ser cambiante. 

(App, Pic, Main (bio (Biotxt y Links)), Icons):
Icons(prop: onClick)
Links(prop: onClick)
Bio (prop: onClick)
  biotxt y links (eventos)
  selectedContent y active (estados)


4. Identifica dónde debería estar tu estado 

identificar qué componente es responsable de cambiar este estado o es el propietario del estado. 

React utiliza un flujo de datos unidireccional, que pasa los datos a lo largo de la jerarquía de componentes, desde el componente principal al secundario. 

Para cada parte del estado de tu aplicación:

1. Identifica cada componente que renderiza algo en función de ese estado.
2. Encuentra su componente principal común más cercano (un componente por encima de todos ellos en la jerarquía).
3. Decide dónde debería estar el estado:
	1. A menudo, puedes colocar el estado directamente en su componente principal común.
	2. También puedes colocar el estado en algún componente por encima de su componente principal común.
	3. Si no puede encontrar un componente donde tenga sentido poseer el estado, cree un nuevo componente únicamente para contener el estado y agréguelo en algún lugar de la jerarquía por encima del componente principal común.
	
Una vez encontrado los estados en esta aplicación:

En este ejemplo, siempre aparecen juntos, por lo que tiene sentido colocarlos en el mismo lugar.
nuestra estrategia para ellos:

Ej:
1. Identifique los componentes que usan el estado:

	ProductTable debe filtrar la lista de productos en función de ese estado (texto de búsqueda y valor de la casilla de verificación).

	SearchBar debe mostrar ese estado (texto de búsqueda y valor de la casilla de verificación).

2. Encuentre su componente principal común: el primer componente principal que comparten ambos componentes es FilterableProductTable.

3. Decida dónde se encuentra el estado: mantendremos el texto de filtro y los valores del estado marcado en FilterableProductTable.


Luego, pase filterText y inStockOnly a ProductTable y SearchBar como propiedades:

Son las variables de estado actual pasadas como prop. 

```
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

<div>
  <SearchBar 
    filterText={filterText} 
    inStockOnly={inStockOnly} />
  <ProductTable 
    products={products}
    filterText={filterText}
    inStockOnly={inStockOnly} />
</div>

```


(App, Pic, Main (bio (Biotxt y Links)), Icons):
Icons(prop: onClick)
Links(prop: onClick)
Bio (prop: onClick) -> tiene los elementos que necesitan eventos y estados cambiantes. 
  biotxt y links (eventos)
  selectedContent y active (estados)  


5. Agrega un flujo de datos inverso

Actualmente, tu aplicación se renderiza correctamente con propiedades y estados que fluyen hacia abajo en la jerarquía. 
Pero para cambiar el estado de acuerdo con la entrada del usuario, necesitarás admitir que los datos fluyan en sentido contrario: 
los componentes del formulario en las profundidades de la jerarquía deben actualizar el estado en FilterableProductTable.
React hace que este flujo de datos sea explícito, pero requiere un poco más de escritura que el enlace de datos bidireccional. 

Si intentas escribir o marcar la casilla en el ejemplo anterior, verás que React ignora tu entrada. 
Dado que el estado filterText nunca se establece, la entrada nunca cambia.
Quieres que cada vez que el usuario cambie las entradas del formulario, el estado se actualice para reflejar esos cambios. 


 
# Ejemplos de cada evento: click, onChange...




# Ejemplos de cada hook: useState, ...




# Estilo dinamico con react 

1. 
Ej: 

```
function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;
    
    return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
```

Tomará product del modelo como prop.
name es un condicional que guardará cuando verifique que el producto esté en stock. 
Si no lo está, aplica un estilo al elemento span. 
span contiene product.name del modelo de datos. 

renderizará name y product.price


2. 




# Renderización condicional directa 

Sin var == valorA; var == valorB
(aunque puede ser que los necesite para guardar contenido/dats)
No usan la variable estado. 
Directamente setState() con valorA o valorB
Sin props 


```
const { useState } = React

function Body() {
  const [appStarted, setAppStarted] = useState(false)

  return (
    <div className="container">
      {appStarted ? (
        <div>
          <h2>Hidden Content</h2>
        </div>
      ) : (
        <div className="start-container">
          <h2>Click Start To View The Application</h2>
          <button onClick={ () => setAppStarted(true) } className='btn'>Start!</button>
        </div>
      )}
    </div>
  )
}


ReactDOM.render(<Body />, document.getElementById("root"))

```



# React Docs


## Props


## Events


## Hooks


## Lifecycle



# Entendimiento Log, Vista React 

Log: prop, vars, estado, func, etc; estruct, etc. 

return() -> representa la vista
tambien se puede aplicar código con {}

Va a leer todo lo que este en un estado "activo" -> {}()
no todo el código. 

Antes del evento solo funciona estado, la log del estado y los element
El evento es lo ultimo de todo o como lo haga el usuario. 


```
function Bio() {
  
  const styleActive = () => {
    
    const activeBtn = document.querySelector(".bp-btn"); 
    //activeBtn.classList.add("active");
    
    activeBtn.style.borderBottomColor = "aqua";
    activeBtn.style.borderBottomStyle = "solid";

  }

  const [selectedContent, setSelectedContent] = useState("btxt");
  const [active, setActive] = useState(true); 


  const biotxt = (e) => {
    e.preventDefault(); 
    setSelectedContent("btxt");
    //styleActive();  
    setActive(true); 
  };
  
  const links = (e) => {
    e.preventDefault();
    setSelectedContent("blinks");
    //styleActive(); 
    setActive(true);
  };

  return (

    
    <div className="bio-container">

      <div className="bio-proj">
        <button name="button" onClick={biotxt} className="bp-btn"><img src={bio} alt="bio icon"></img></button>     
        <button name="button" onClick={links} className="bp-btn"><img src={proyects} alt="projects icon"></img></button>
      </div>

      {selectedContent === "btxt" && <Biotxt />}
      {selectedContent === "blinks" && <Links onClick={(e) => {e.preventDefault()}} />}
      {active ? styleActive() : null}

    </div>

  );  
}
export default Bio;

```


# Elementos sincronizados: elem, event, estado 

Para que funcione btn activ y estilo activ

la solucion es compartir el estado. 


## Diseño compartir estado

(App, Pic, Main (bio (Biotxt y Links)), Icons):
Icons(prop: onClick)
Links(prop: onClick)
Bio (prop: onClick) -> tiene los elementos que necesitan eventos y estados cambiantes. 
  biotxt y links (eventos)
  selectedContent y active (estados)  

bio tiene el estado, los eventos
y los btn que activan los eventos 
Estos van a renderizar los componentes Biotxt y Links


# Renderizar un componente a la vez

1. Con useState

```
import { useState } from "react";

const ComponentA = () => <div>Componente A</div>;
const ComponentB = () => <div>Componente B</div>;
const ComponentC = () => <div>Componente C</div>;

const App = () => {
  const [activeComponent, setActiveComponent] = useState("A");

  return (
    <div>
      <button onClick={() => setActiveComponent("A")}>Mostrar A</button>
      <button onClick={() => setActiveComponent("B")}>Mostrar B</button>
      <button onClick={() => setActiveComponent("C")}>Mostrar C</button>

      {activeComponent === "A" && <ComponentA />}
      {activeComponent === "B" && <ComponentB />}
      {activeComponent === "C" && <ComponentC />}
    </div>
  );
};

export default App;

```


2. Objeto de componentes

muchos componentes, puedes mapearlos en un objeto 

para evitar múltiples comparaciones:

```
const components = {
  A: () => <div>Componente A</div>,
  B: () => <div>Componente B</div>,
  C: () => <div>Componente C</div>,
};

const App = () => {
  const [activeComponent, setActiveComponent] = useState("A");

  const ActiveComponent = components[activeComponent];

  return (
    <div>
      <button onClick={() => setActiveComponent("A")}>A</button>
      <button onClick={() => setActiveComponent("B")}>B</button>
      <button onClick={() => setActiveComponent("C")}>C</button>
      <ActiveComponent />
    </div>
  );
};

export default App;

```


3. React Router (Para cambiar componentes con rutas)

Si los componentes representan vistas diferentes en una app, usar react-router-dom

```
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const ComponentA = () => <div>Componente A</div>;
const ComponentB = () => <div>Componente B</div>;
const ComponentC = () => <div>Componente C</div>;

const App = () => (
  <Router>
    <nav>
      <Link to="/a">A</Link>
      <Link to="/b">B</Link>
      <Link to="/c">C</Link>
    </nav>

    <Routes>
      <Route path="/a" element={<ComponentA />} />
      <Route path="/b" element={<ComponentB />} />
      <Route path="/c" element={<ComponentC />} />
    </Routes>
  </Router>
);

export default App;

```

Si los componentes son secciones que cambian dentro de la misma vista → Usa useState.

Si tienes muchos componentes y quieres mantenerlo más limpio → Usa un objeto de componentes.

Si los componentes representan páginas o vistas separadas → Usa react-router-dom



# Btns con estilo al hacer click 

1. useState para manejar el botón activo

```
import { useState } from "react";

const App = () => {
  const [activeButton, setActiveButton] = useState("A");

  return (
    <div>
      {["A", "B", "C"].map((btn) => (
        <button
          key={btn}
          onClick={() => setActiveButton(btn)}
          style={{
            padding: "10px 20px",
            margin: "5px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: activeButton === btn ? "#4CAF50" : "#ddd",
            color: activeButton === btn ? "white" : "black",
          }}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default App;

```


2. styles.module.css

```
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ddd;
  color: black;
  transition: all 0.3s;
}

.active {
  background-color: #4CAF50;
  color: white;
}

```

```
import { useState } from "react";
import styles from "./styles.module.css";

const App = () => {
  const [activeButton, setActiveButton] = useState("A");

  return (
    <div>
      {["A", "B", "C"].map((btn) => (
        <button
          key={btn}
          onClick={() => setActiveButton(btn)}
          className={`${styles.button} ${activeButton === btn ? styles.active : ""}`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default App;

```



# btns con varias clases 

1. Concatenar Clases Manualmente

```
import { useState } from "react";

const App = () => {
  const [activeButton, setActiveButton] = useState("A");

  return (
    <div>
      {["A", "B", "C"].map((btn) => (
        <button
          key={btn}
          onClick={() => setActiveButton(btn)}
          className={`px-4 py-2 rounded-md transition-all ${
            activeButton === btn ? "bg-green-500 text-white" : "bg-gray-300 text-black"
          }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default App;

```


2. Usando clsx o classnames (Mejor Legibilidad)

escribir clases de forma más limpia, puedes usar clsx o classnames

```
npm install clsx   # O bien
npm install classnames

```


con clsx

```
import { useState } from "react";
import clsx from "clsx";

const App = () => {
  const [activeButton, setActiveButton] = useState("A");

  return (
    <div>
      {["A", "B", "C"].map((btn) => (
        <button
          key={btn}
          onClick={() => setActiveButton(btn)}
          className={clsx(
            "px-4 py-2 rounded-md transition-all",
            activeButton === btn ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
          )}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default App;

```


con classnames

```
import { useState } from "react";
import classNames from "classnames";

const App = () => {
  const [activeButton, setActiveButton] = useState("A");

  return (
    <div>
      {["A", "B", "C"].map((btn) => (
        <button
          key={btn}
          onClick={() => setActiveButton(btn)}
          className={classNames("px-4 py-2 rounded-md transition-all", {
            "bg-green-500 text-white": activeButton === btn,
            "bg-gray-300 text-black": activeButton !== btn,
          })}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default App;

```


3. Usando un Objeto de Estilos

definir un objeto de estilos y asignarlo dinámicamente

```
import { useState } from "react";

const buttonStyles = {
  base: "px-4 py-2 rounded-md transition-all",
  active: "bg-purple-500 text-white",
  inactive: "bg-gray-300 text-black",
};

const App = () => {
  const [activeButton, setActiveButton] = useState("A");

  return (
    <div>
      {["A", "B", "C"].map((btn) => (
        <button
          key={btn}
          onClick={() => setActiveButton(btn)}
          className={`${buttonStyles.base} ${
            activeButton === btn ? buttonStyles.active : buttonStyles.inactive
          }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default App;

```


# useState

Manejar el estado en componentes funcionales

Cuando llamas a useState dentro de un componente, retorna un array con dos elementos

1. El valor actual del estado.

2. Una función para actualizar ese estado

```
const [estado, setEstado] = useState(valorInicial);

```

estado: es la variable que contiene el valor actual.

setEstado: es la función que se usa para actualizar el estado.

valorInicial: es el valor con el que se inicia el estado (puede ser un número, cadena, objeto, array, etc.).


Cada actualización de estado provoca que el componente se vuelva a renderizar, mostrando el nuevo valor

1. Re-renderizado: 

Cada vez que actualizas el estado con setEstado, React vuelve a renderizar el componente, reflejando los cambios en la interfaz.


2. Inmutabilidad: 

Aunque actualizas el estado, no debes mutar el valor original directamente. 

Usa la función setEstado para garantizar la inmutabilidad, lo cual es esencial para que React detecte los cambios.


3. Funciones como actualización: 

Si el nuevo estado depende del estado anterior, es recomendable usar una función en setEstado para asegurarte de que usas el valor más reciente:

```
setContador(prevContador => prevContador + 1);

```

Múltiples estados: Puedes usar varios hooks useState para manejar diferentes piezas de estado en el mismo componente.


## useState Avanzado 

Manejar objetos o arrays

```
import React, { useState } from 'react';

const Usuario = () => {
  const [user, setUser] = useState({ nombre: 'Juan', edad: 25 });

  const actualizarEdad = () => {
    // Siempre se recomienda mantener la inmutabilidad usando el spread operator
    setUser(prevUser => ({ ...prevUser, edad: prevUser.edad + 1 }));
  };

  return (
    <div>
      <h2>{user.nombre}</h2>
      <p>Edad: {user.edad}</p>
      <button onClick={actualizarEdad}>Cumplir años</button>
    </div>
  );
};

export default Usuario;

```

Se usa un objeto para representar un usuario, y se actualiza una de sus propiedades sin modificar las demás



# useEffect 

Permite realizar efectos secundarios en componentes funcionales

Obtener datos (fetch)

Suscribirse a eventos

Manipulación directa del DOM

Configuración y limpieza de recursos (timers, listeners, etc.)


Cada vez que un componente se renderiza, useEffect se ejecuta después del renderizado

Puedes controlar cuándo se ejecuta pasando un array de dependencias


1. Sin array de dependencias:

Se ejecuta después de cada renderizado

```
useEffect(() => {
  // Se ejecuta en cada renderizado
  console.log("Renderizado o actualización");
});

```

2. Array de dependencias vacío ```([])```:

Se ejecuta solo una vez, similar a componentDidMount

```
useEffect(() => {
  // Se ejecuta solo al montar el componente
  console.log("Componente montado");
}, []);

```


3. Dependencias específicas:

Se ejecuta cuando alguna de las dependencias cambia

```
useEffect(() => {
  // Se ejecuta cuando 'count' cambia
  console.log(`El contador cambió a ${count}`);
}, [count]);

```

## Uso de useEffect 

Actualizar el título del documento cada vez que cambie un contador:

```
import React, { useState, useEffect } from "react";

const ContadorConEfecto = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `Has clickeado ${count} veces`;
  }, [count]); // Se ejecuta cada vez que 'count' cambia

  return (
    <div>
      <p>Has clickeado {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default ContadorConEfecto;

```


## Limpieza de Efectos

Algunos efectos requieren una limpieza para evitar fugas de memoria o comportamientos no deseados

Por ejemplo, cuando se crea un timer o se suscribe a un evento, se recomienda limpiar en la función de retorno del efecto:

```
import React, { useState, useEffect } from "react";

const Reloj = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Función de limpieza: se ejecuta antes de desmontar el componente
    return () => clearInterval(timer);
  }, []); // Se ejecuta solo una vez al montar

  return <div>{time.toLocaleTimeString()}</div>;
};

export default Reloj;

```


## Claves useEffect 

useEffect es esencial para manejar operaciones asíncronas y efectos secundarios en componentes funcionales de React

Con el manejo correcto de las dependencias y la limpieza, puedes asegurarte de que tu componente se comporte de forma predecible y eficiente



# Practicas para React 

# Practicas para Componentes

# Practicas para CSS 


# Practicas para useState 


# Practicas para useEffect


# Renderizado condicional


# Remove event click React 


# Importar padre en componentes hijos



# JSX, JS con llaves, Renderización condicional, encapsulación de lógica y componentes puros


1. Aplicar JSX depende de un div o un contenedor vacío. 

```
export default function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </>
  );
}

```


2. Se puede aplicar JS con llaves en cualquier parte del documento que guarde espacio para JS con las llaves. 

```
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

```


3. Props

Los componentes de React usan props para comunicarse entre sí. 

Cada componente padre puede pasar información a sus componentes hijos mediante props. 

Los props pueden parecer atributos HTML, pero puedes pasar cualquier valor de JavaScript a través de ellos, incluyendo objetos, arrays, funciones e incluso JSX.

Representa un espacio para completar información cuando lo invoquemos desde un componente padre

```
import { getImageUrl } from './utils.js'

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

```

## A los componentes hijos les pasas props en la definición, en sus atributos de html le pasas esta prop. A llamarlos desde el componente padre, la prop toma el lugar del atributo del componente hijo. 


4. Las condiciones y la lógica 

Tus componentes suelen necesitar mostrar diferentes elementos según las condiciones. 

```
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✅'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}

```

## Organización de la lógica: ubicada en el return de un componente hijo, que suele tener props que espera código js, etc; este devolverá un resultado, objeto, componente o lo que sea; cuando desde el padre llamen a este componente, le pasen sus props con valores. 

Otro Ej: 

### fuera del return, guarda los componentes un una variable.  

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

en return: 
 
```
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>

```

y


```
<div>
{isLoggedIn && <AdminPanel />}
</div>

```

 
5. Listas

A menudo querrás mostrar varios componentes similares de una colección de datos. 

Puedes usar las funciones filter() y map() de JavaScript con React para filtrar y transformar tu array de datos en un array de componentes.

Para cada elemento del array, deberás especificar una clave. 

Normalmente, usarás un ID de la base de datos como clave. 

Las claves permiten a React registrar la posición de cada elemento en la lista, incluso si esta cambia.

```
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

```

## Lógica de listas: tomamos un objeto con otros, guardaremos el resultado unitario un una variable, usamos un metodo para tomar cada uno; lo guardamos un una variable temporal o interna que puede ser un parametro para manipular el objeto. El resultado/la variable principal lo mostraremos en el return padre/hijo. 


6. Componentes puros

. Se ocupa de sus propios asuntos. 

No modifica ningún objeto ni variable existente antes de ser llamada.

2. Mismas entradas, misma salida. 

Con las mismas entradas, una función pura siempre debería devolver el mismo resultado.

Al escribir estrictamente sus componentes como funciones puras, puede evitar toda una serie de errores desconcertantes y comportamientos impredecibles a medida que crece su código.


### Ej componente impuro: 

```
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}

```


## Puedes hacer que este componente sea puro pasando una propiedad en lugar de modificar una variable preexistente:

```
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}

```

## Dividimos la variable/propiedad que ibamos a manipular en un componente hijo que recibe una prop, desde el padre le pasamos el valor "dinamico". 


7. Árboles en React

React utiliza árboles para modelar las relaciones entre componentes y módulos.


## 1. Un árbol de renderizado de React es una representación de la relación padre-hijo entre los componentes.

```
		Root Component -> top level component
         /         \     (renders)
     ComponA     ComponC           
       /             \   (renders)
    ComponB       ComponD
       (leaf component)
       
```

Los componentes cerca de la parte superior del árbol, cerca del componente raíz, se consideran componentes de nivel superior. 

Los componentes sin componentes secundarios se denominan componentes hoja. 

Esta categorización de componentes es útil para comprender el flujo de datos y el rendimiento de renderizado.


## 2. Modelar la relación entre los módulos de JavaScript es otra forma útil de comprender la aplicación. 

Lo llamamos árbol de dependencias de módulos (module dependency tree).

```
		RootModule.js
		/     |     \      (imports)
   ModA.js ModB.js ModC.js 
                     \      (imports)
                    ModD.js 
```

Las herramientas de compilación suelen utilizar un árbol de dependencias para agrupar todo el código JavaScript relevante para que el cliente lo descargue y renderice. 

Un paquete grande perjudica la experiencia del usuario en aplicaciones React. 

Comprender el árbol de dependencias del módulo es útil para depurar estos problemas.


8. UI blocks

Al igual que con las etiquetas HTML, puedes componer, ordenar y anidar componentes para diseñar páginas completas. 

React te permite combinar tu marcado, CSS y JavaScript en "componentes" personalizados, elementos de interfaz de usuario reutilizables para tu aplicación. 

```
<PageLayout>
  <NavigationHeader>
    <SearchBar />
    <Link to="/docs">Docs</Link>
  </NavigationHeader>
  <Sidebar />
  <PageContent>
    <TableOfContents />
    <DocumentationText />
  </PageContent>
</PageLayout>

```


# Construcción de un componente



# Marcado y javascript en jsx 

Cuando creamos código js en variables, obj, etc tenemos que invocarlos con {}.



# Uso de lógica en props

## 1. Pasar propiedades al componente hijo

Primero, pasa algunas propiedades a Avatar. 

Por ejemplo, pasemos dos propiedades: person (un objeto) y size (un número):

```
export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}

```

Ahora puedes leer estas propiedades dentro del componente Avatar.


## 2. Leer props dentro del componente hijo

Puedes leer estas propiedades indicando sus nombres (persona y tamaño) separados por comas dentro de ({ y }) justo después de la función Avatar. 

Esto te permite usarlas dentro del código de Avatar, como lo harías con una variable.

```
function Avatar({ person, size }) {
  // person and size are available here
}

```

### Agrega lógica a Avatar que use las propiedades persona y tamaño para renderizar, y listo.

Ahora puedes configurar Avatar para que se renderice de muchas maneras diferentes con diferentes propiedades.

Utils.js:

```
export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

```

App.js:

```
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}

```

Las propiedades te permiten considerar los componentes padre e hijo de forma independiente. 

Por ejemplo, puedes cambiar las propiedades de persona o tamaño dentro del Perfil sin tener que pensar en cómo las usa el Avatar. 

De igual forma, puedes cambiar cómo el Avatar usa estas propiedades sin mirar el Perfil.


# Formas de props

1. Como atributo

```
export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}

```

```
function Avatar({ person, size }) {
  // person and size are available here
}

```


2. Como valor/javascript que reemplaza los atributos 

Utils.js:

```
export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

```

App.js:

```
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}

```


## Propagación de props

A veces, el paso de props se vuelve muy repetitivo:

```
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

```

```
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}

```


## Pasando JSX como children

```
<Text />
<Avatar />

<Card>    //{children} es un espacio para js
  <Text />
  <Avatar />
<Card/>

```

### Card se transforma en un contenedor como div o <></>

Avatar.js: 

```
import { getImageUrl } from './utils.js';

export default function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
  );
}

```

App.js: 

```
import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}

```


## Cómo cambian las propiedades con el tiempo

El componente Reloj (abajo) recibe dos propiedades de su componente principal: color y hora. 

(El código del componente principal se omite porque usa el estado, que no analizaremos por ahora).

Intenta cambiar el color en el cuadro de selección (abajo).

```
export default function Clock({ color, time }) {
  return (
    <h1 style={{ color: color }}>
      {time}
    </h1>
  );
}

```

(Cuando lo llamemos: <Clock color={yellow} time={date(24hs)} />

Renderizará un h1 de color yellow y el valor de time)


Este ejemplo ilustra que un componente puede recibir diferentes propiedades a lo largo del tiempo. 

¡Las propiedades no siempre son estáticas! 

En este caso, la propiedad de tiempo cambia cada segundo y la propiedad de color cambia al seleccionar otro color. 

Las propiedades reflejan los datos de un componente en cualquier momento, no solo al principio.


# Lógica renderización

En el componente que tiene las props

El componente que las usa, les da valor y después de eso sucede a o b. 

```
function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, 'b')}
      alt={person.name}
      width={size >= 90 ? b : s}
      height={size >= 90 ? b : s}
    />
  );
}

```

```
export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}

```

### Componente hijo con props -> plantilla, Componente padre -> escribe la plantilla


## La lógica se ubicará antes del return del subcomponente que espera valores de props.

```
import { getImageUrl } from './utils.js';

const ratio = window.devicePixelRatio;

function Avatar({ person, size }) {
  let thumbnailSize = 's';
  if (size * ratio > 90) {
    thumbnailSize = 'b';
  }
  return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <>
      <Avatar
        size={40}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
      <Avatar
        size={70}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
      <Avatar
        size={120}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
    </>
  );
}

```

El componente avatar esperá un objeto y size. 

Define una variable thumbnailSize como cadena. 

### Antes de devolver algo, chequea el valor size*ratio>90 que si es verdadero cambia el valor de thumbnailSize

### Antes de devolver algo aplicamos la lógica de renderizado según los valores de las props. 


## Operador condicional (ternario) (? :)

JavaScript tiene una sintaxis compacta para escribir una expresión condicional: el operador condicional u «operador ternario».

En lugar de esto:

```
if (isPacked) {
  return <li className="item">{name} ✅</li>;
}
return <li className="item">{name}</li>;

```

Podemos escribir esto: 

```
return (
  <li className="item">
    {isPacked ? name + ' ✅' : name}
  </li>
);

```

Puedes leerlo como “si isPacked es verdadero, entonces (?) renderizar name + ' ✅', de lo contrario (:) renderizar name”.



## Ternario en JSX en profundidad

¿Son estos dos ejemplos totalmente equivalentes?

Si tienes experiencia en programación orientada a objetos, podrías asumir que los dos ejemplos anteriores son sutilmente diferentes, ya que uno de ellos puede crear dos "instancias" distintas de <li>. 

Sin embargo, los elementos JSX no son "instancias" porque no contienen ningún estado interno ni son nodos DOM reales. 

Son descripciones ligeras, como planos. 

Por lo tanto, estos dos ejemplos son, de hecho, completamente equivalentes. 

El apartado "Preservar y restablecer el estado" explica en detalle cómo funciona esto.


Ahora, supongamos que desea encapsular el texto del elemento completado en otra etiqueta HTML, como <del> para eliminarlo. 

### Puede agregar más saltos de línea y paréntesis para facilitar la anidación de más JSX en cada caso:

```
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + ' ✅'}
        </del>
      ) : (
        name
      )}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

```

Este estilo funciona bien para condiciones simples, pero úselo con moderación. 

### Si sus componentes se complican con demasiado marcado condicional anidado, considere extraer componentes secundarios para optimizarlo. 

En React, el marcado forma parte de su código, por lo que puede usar herramientas como variables y funciones para optimizar expresiones complejas.



# Lógica componente hijo y componente padre

Hijo: props y return. 

Padre: valor para props hijo y en return va los componentes hijos. 

Como se escriben con funciones usamos el ambiente local. 

1. Antes del return para aplicar lógica

2. En el return del componente hijo vamos devolviendo
las props y los elementos con lógica condicional. 
De acuerdo a los valores que le pasará después el 
componente padre. 


## Ej lógica







# RS React Docs

## Componente

HTML: 

```
<article>
  <h1>My First Component</h1>
  <ol>
    <li>Components: UI Building Blocks</li>
    <li>Defining a Component</li>
    <li>Using a Component</li>
  </ol>
</article>

```

React:  

```
<PageLayout>
  <NavigationHeader>
    <SearchBar />
    <Link to="/docs">Docs</Link>
  </NavigationHeader>
  <Sidebar />
  <PageContent>
    <TableOfContents />
    <DocumentationText />
  </PageContent>
</PageLayout>

```

```
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}

```

```
return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;

```

```
return (
  <div>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  </div>
);

```

### Componente App.js:

```
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

```

### Lo que renderiza el navegador 

```
<section>
  <h1>Amazing scientists</h1>
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
</section>

``` 


### Ejercicios Componente

```
function Nombre({ nombre }) {
  return (
    <p>{nombre}</p>
  );
}

export default function HolaMundo() {
  return (
    <>
      <h1>Hola Mundo!</h1>
      <Nombre nombre='Matias' />
    </>
  );
} 

```


## Importación y exportación

App.js 

```
import Gallery from './Gallery.js';

export default function App() {
  return (
    <Gallery />
  );
}

```

Gallery.js

```
function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

```

### La forma en que exportas tu componente determina cómo debes importarlo. 

Recibirás un error si intentas importar una exportación predeterminada de la misma manera que una con nombre. 

Esta tabla puede ayudarte a realizar un seguimiento:

1. Default: 

export default function Button() {}

import Button from './Button.js'

2. Named 

export function Button() {}

import { Button } from './Button.js';


Al escribir una importación predeterminada, puedes poner cualquier nombre después de la importación. 

Por ejemplo, podrías escribir "import Banana from './Button.js'" y seguirías obteniendo la misma exportación predeterminada. 

En cambio, con las importaciones con nombre, el nombre debe coincidir en ambos lados. 

¡Por eso se llaman importaciones con nombre!


### Se suelen usar exportaciones predeterminadas si el archivo exporta solo un componente y exportaciones con nombre si exporta varios componentes y valores. 

Independientemente del estilo de codificación que prefieras, asigna siempre nombres significativos a las funciones de tus componentes y a los archivos que las contienen. 

No se recomiendan los componentes sin nombre, como export default () => {}, porque dificultan la depuración.


# Escritura de marcado con JSX

HTML: 

```
<div>
  <p></p>
  <form>
  </form>
</div>

```

JS: 

```
isLoggedIn() {...}
onClick() {...}
onSubmit() {...}

```

React: 

```
Sidebar() {
  if (isLoggedIn()) {
	<p>Welcome</p>
  }else{
	<Form />  
  }	
}

```

Para que el navegador pueda renderizar Sidebar, el usuario debe estar logeado. 

Eso lo logramos con lógica condicional. 

Si no esta logeado devolvemos el componente Form.

Form.js component: 

```
Form() {
  onClick() {...}
  onSubmit() {...}
  <form onSubmit>
    <input onClick />
    <input onClick />
  </form>
}

```


## Reglas de JSX 

1. Devolver un único elemento raíz

Para devolver varios elementos de un componente, enciéndalos con una sola etiqueta principal.

Por ejemplo, puede usar un <div>:

```
<div>
  <h1>Hedy Lamarr's Todos</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
  >
  <ul>
    ...
  </ul>
</div>

```

Si no desea agregar un <div> adicional a su marcado, puede escribir <> y </> en su lugar:

```
<>
  <h1>Hedy Lamarr's Todos</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
  >
  <ul>
    ...
  </ul>
</>

```

Esta etiqueta vacía se llama Fragmento. 

Los Fragmentos permiten agrupar elementos sin dejar rastro en el árbol HTML del navegador.


2. Cerrar todas las etiquetas

JSX requiere que las etiquetas se cierren explícitamente: las etiquetas autocerrables como <img> deben convertirse en <img />, y las etiquetas envolventes como <li>oranges deben escribirse como <li>oranges</li>.

Así se ven cerradas las imágenes y los elementos de lista de Hedy Lamarr:

```
<>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
   />
  <ul>
    <li>Invent new traffic lights</li>
    <li>Rehearse a movie scene</li>
    <li>Improve the spectrum technology</li>
  </ul>
</>

```


3. ¡CamelCase en casi todo!

JSX se convierte en JavaScript y los atributos escritos en JSX se convierten en claves de objetos JavaScript. 

En tus propios componentes, a menudo querrás leer esos atributos en variables. 

Sin embargo, JavaScript tiene limitaciones en los nombres de las variables. 

Por ejemplo, sus nombres no pueden contener guiones ni ser palabras reservadas, como class.



## JavaScript en JSX con llaves


### Pasar cadenas entre comillas

Para pasar un atributo de cadena a JSX, se coloca entre comillas simples o dobles:

App.js

```
export default function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}

```


Usando llaves:

```
export default function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}

```


Ventana a JS: 

Cualquier expresión de JavaScript funcionará entre llaves, incluidas las llamadas a funciones como formatDate():

```
const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function TodoList() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}

```

En el return pasamos una función que toma un parámetro.


### Dónde usar llaves

Solo se pueden usar llaves de dos maneras en JSX:

1. Como texto directamente dentro de una etiqueta JSX: 

<h1>Lista de tareas de {name}</h1> funciona, pero <{tag}>Lista de tareas de Gregorio Y. Zara</{tag}> no.

2. Como atributos inmediatamente después del signo =: 

src={avatar} leerá la variable avatar, pero src="{avatar}" pasará la cadena "{avatar}".


### Doble llaves

Objeto en Js: 

```
{ name: "Hedy Lamarr", inventos: 5 }

```

Objeto en React 

```
person={{ name: "Hedy Lamarr", inventos: 5 }}

```

JS-CSS-HTML en linea:

```
export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}

```

Puedes ver claramente el objeto JavaScript entre llaves al escribirlo así:

```
<ul style={
  {
    backgroundColor: 'black',
    color: 'pink'
  }
}>

```

CSS:

HTML: 

```
<ul style="background-color: black">

```

Se escribiría en un componente:

```
<ul style={{ backgroundColor: 'black' }}> 

```


### Objetos en llaves

#### Puedes mover varias expresiones a un solo objeto y referenciarlas en tu JSX entre llaves:

```
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

```

Este Componente retorna varios elementos con valores JS.


#### Habíamos creado en un objeto (tema) dentro de otro objeto (persona)

```
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

```


En este ejemplo, el objeto JavaScript de persona contiene una cadena de nombre y un objeto de tema:

```
<div style={person.theme}>
  <h1>{person.name}'s Todos</h1>

```

#### Accede a un objeto dentro de otro

person.theme tiene dos propiedades: backgroundColor y color 


#### Ejercicios JSX

1. 

```
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

```

Tenemos un objeto person con mucha información. 

Lo usamos en el componente para completar el HTML. 


2. 

```
const person = {
  name: 'Gregorio Y. Zara',
  imageUrl: "https://i.imgur.com/7vQD0fPs.jpg",
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={person.imageUrl}
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

```

Le aplicamos al div todo el objeto {person.theme}.

Al objeto le agregamos una nueva propiedad: imageUrl: "https://i.imgur.com/7vQD0fPs.jpg"


3. 

```
const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={baseUrl + person.imageId + person.imageSize + '.jpg'}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

```

Descomponemos la url para el perfil en varias propiedaes. 

Una global como baseUrl = 'https://i.imgur.com/'

Y después imageId y imageSize para cada persona. 

Formamos la url encadenando el valor de las propiedades. 

Dado que son string lo hacemos con el operador +. 

La variable global más el objeto y las propiedades.

src={baseUrl + person.imageId + person.imageSize + '.jpg'}



Tambien: 

utils.js

```
export function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    person.imageSize +
    '.jpg'
  );
}

```

App.js:

```
import { getImageUrl } from './utils.js'

const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

```

### Componente que solo retorna JS

Definimos una funcion getImageUrl(person)

Toma un objeto y analiza o lee sus propiedades 

Y las concatena. 

```
  return (
    'https://i.imgur.com/' +
    person.imageId +
    person.imageSize +
    '.jpg'
  );
  
```


## Props: 

Comunicación entre componentes: 

Cada componente padre puede pasar información a sus componentes hijos mediante props. 


### Props conocidas: Atributos + {}

#### Las propiedades son la información que se pasa a una etiqueta JSX. 

```
function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

export default function Profile() {
  return (
    <Avatar />
  );
}

```


### Props personalizadas: props + jsx


```
export default function Profile() {
  return (
    <Avatar />
  );
}

```

Definimos un componente padre que renderiza otro. 


```
export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}

```

Le pasamos js a las props del componente hijo. 

```
function Avatar({ person, size }) {
  // person and size are available here
}

```

Defimos las props del componente hijo. 


### Props y componentes lógicos


Utils.js:

```
export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

```

La función/componetne toma un objeto, un valor en caracter predeterminado cuando no se le asigna uno

Manipula con js los parámetros dentro del return. 


App.js:

### Componente con props más complejo: Atributos, props y js

Toma dos props y lee sus propiedaes para pasarselas a atributos conocidos. 

#### Cuando renderizen o llamen a Avatar y le den valor a los props: 

Los valores de las props se aplicarán en los atributos.

```
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}

```

Al llamar a Avatar desde Profile y darle valor a las props: 

Retornará los elementos HTML que tenía con los valores asignados aquí. 


#### Valor predeterminado para una prop

Cuando no se especifica ningún valor, puede hacerlo mediante la desestructuración colocando "=" y el valor predeterminado justo después del parámetro:

```
function Avatar({ person, size = 100 }) {
  // ...
}

```

Ahora, si <Avatar person={...} /> se renderiza sin la propiedad size, el tamaño se establecerá en 100.


El valor predeterminado solo se usa si falta la propiedad size o si se pasa size={undefined}. 

Sin embargo, si se pasa size={null} o size={0}, el valor predeterminado no se usará.


### Propagación de props

A veces, el paso de props se vuelve muy repetitivo:

```
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

```

El código repetitivo no tiene nada de malo; puede ser más legible. 

Pero a veces se valora la concisión. 

#### Algunos componentes reenvían todas sus propiedades a sus componentes secundarios, como este perfil con Avatar. 

Dado que no usan ninguna de sus propiedades directamente, puede ser conveniente usar una sintaxis de propagación más concisa:

```
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}

```

Esto reenvía todas las propiedades del perfil al avatar sin listar sus nombres.


Use la sintaxis de propagación con moderación. 

Si la usa en todos los demás componentes, algo falla. 

A menudo, indica que debe dividir sus componentes y pasar los componentes secundarios como JSX. 


### JSX como Children

```
<Text />
<Avatar />

<Card>    //{children} es un espacio para js
  <Text />
  <Avatar />
<Card/>

```

Ej:

Avatar.js: 

```
import { getImageUrl } from './utils.js';

export default function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
  );
}

```

#### El componente Card retornará un div para contener jsx (html+js)

#### Será como un contenedor raíz como <div></div> o <></>.

#### Con el objetivo de hacerlo expresivo, semántico. 

App.js: 

```
import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}

```


### Cambios en props: Componentes más complejos, cambio en los valores en las props. 

Cómo cambian las propiedades con el tiempo

El componente Reloj (abajo) recibe dos propiedades de su componente principal: color y hora. 

(El código del componente principal se omite porque usa el estado, que no analizaremos por ahora).

Intenta cambiar el color en el cuadro de selección (abajo).

```
export default function Clock({ color, time }) {
  return (
    <h1 style={{ color: color }}>
      {time}
    </h1>
  );
}

``` 

Al pasarle un valor de color (prop) cuando renderizamos clock: 

Se asignará a style a la propiedad color (css) a un h1. 

El contenido de H1 será el valor del prop time.


Este ejemplo ilustra que un componente puede recibir diferentes propiedades a lo largo del tiempo. 

¡Las propiedades no siempre son estáticas! 

En este caso, la propiedad de tiempo cambia cada segundo y la propiedad de color cambia al seleccionar otro color. 

Las propiedades reflejan los datos de un componente en cualquier momento, no solo al principio.


Sin embargo, las propiedades son inmutables (no puede cambiar). 

#### Cuando un componente necesita cambiar sus propiedades (por ejemplo, en respuesta a una interacción del usuario o a nuevos datos), deberá "pedirle" a su componente padre que le pase propiedades diferentes: ¡un nuevo objeto! 

Sus propiedades antiguas se descartarán y, finalmente, el motor de JavaScript recuperará la memoria ocupada por ellas.


No intente "cambiar propiedades". 

#### Cuando necesite responder a la entrada del usuario (como cambiar el color seleccionado), deberá "establecer el estado", lo cual puede aprender en Estado: La memoria de un componente.


### Ejercicios props

1. 

utils.js:

```
export function getImageUrl(imageId, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}

```

App.js

Profile tiene un conjunto de props.

Al llamarlo le darán un valor.

Lo renderizarán en algún lugar del HTML.

### Los valores de las props se leen en los elementos HTML que devuelven.

Profile usa un método para incluir/unir un caracter {awards.join(', ')}

```
import { getImageUrl } from './utils.js';

function Profile({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 70
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li><b>Profession:</b> {profession}</li>
        <li>
          <b>Awards: {awards.length} </b>
          ({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
      />
      <Profile
        imageId='YfeOqp2'
        name='Katsuko Saruhashi'
        profession='geochemist'
        discovery="a method for measuring carbon dioxide in seawater"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
      />
    </div>
  );
}

```

Usa un array para un conjunto de strings/cadenas y un método para unirlos. 


Ten en cuenta que no necesitas una propiedad ```awardCount``` independiente si ```awards``` es un array. 

Entonces puedes usar ```awards.length``` para contar el número de premios. Recuerda que las propiedades pueden tomar cualquier valor, ¡incluso los arrays!


Otra solución, más similar a los ejemplos anteriores de esta página, es agrupar toda la información sobre una persona en un solo objeto y pasar ese objeto como una propiedad:

utils.js

```
export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

```

App.js

```
import { getImageUrl } from './utils.js';

function Profile({ person, imageSize = 70 }) {
  const imageSrc = getImageUrl(person)

  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={imageSrc}
        alt={person.name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession:</b> {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length} </b>
          ({person.awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovery}
        </li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile person={{
        imageId: 'szV5sdG',
        name: 'Maria Skłodowska-Curie',
        profession: 'physicist and chemist',
        discovery: 'polonium (chemical element)',
        awards: [
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ],
      }} />
      <Profile person={{
        imageId: 'YfeOqp2',
        name: 'Katsuko Saruhashi',
        profession: 'geochemist',
        discovery: 'a method for measuring carbon dioxide in seawater',
        awards: [
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ],
      }} />
    </div>
  );
}

```


2. 

Solución: 

utils.js

```
export function getImageUrl(person, size) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

```

App.js 

```
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  let thumbnailSize = 's';
  if (size > 90) {
    thumbnailSize = 'b';
  }
  return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <>
      <Avatar
        size={40}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
      <Avatar
        size={120}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
    </>
  );
}

```

También puedes mostrar una imagen más nítida para pantallas de alto DPI teniendo en cuenta window.devicePixelRatio:

```
import { getImageUrl } from './utils.js';

const ratio = window.devicePixelRatio;

function Avatar({ person, size }) {
  let thumbnailSize = 's';
  if (size * ratio > 90) {
    thumbnailSize = 'b';
  }
  return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <>
      <Avatar
        size={40}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
      <Avatar
        size={70}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
      <Avatar
        size={120}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
    </>
  );
}

```


3. 

App.js

```
function Card({ children }) {
  return (
    <div className="card">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Card>
        <h1>Photo</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={100}
          height={100}
        />
      </Card>
      <Card>
        <h1>About</h1>
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Card>
    </div>
  );
}

```


## Renderizado condicional

### Retorno condicional de JSX

### Si la propiedad isPacked es verdadera, este código devuelve un árbol JSX diferente. 

Con este cambio, algunos elementos tienen una marca de verificación al final:

App.js 

```
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✅</li>;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

```

Observa cómo creas lógica de ramificación con las sentencias if y return de JavaScript. 

En React, el flujo de control (como las condiciones) lo gestiona JavaScript.


### Retorno condicional de nada con null (no hagas nada)

Un componente debe devolver algo. 

```
function Item({ name, isPacked }) {
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

```

### Evitar repetición, uso de ternario (? :)

Ambas ramas condicionales devuelven <li className="item">...</li>:

```
if (isPacked) {
  return <li className="item">{name} ✅</li>;
}
return <li className="item">{name}</li>;

```

#### Si return devuelve el mismo elemento: 

Podemos escribir: 

```
return (
  <li className="item">
    {isPacked ? name + ' ✅' : name}
  </li>
);

```

“si isPacked es verdadero, entonces (?) renderizar name + ' ✅', de lo contrario (:) renderizar name”.


### Puede agregar más saltos de línea y paréntesis para facilitar la anidación de más JSX en cada caso:

```
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + ' ✅'}
        </del>
      ) : (
        name
      )}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

```

Este estilo funciona bien para condiciones simples, pero úselo con moderación. 

#### Si sus componentes se complican con demasiado marcado condicional anidado, considere extraer componentes secundarios para optimizarlo. 

En React, el marcado forma parte de su código, por lo que puede usar herramientas como variables y funciones para optimizar expresiones complejas.


#### Condicional en return: uso de llaves, parentesis, componentes y llaves anidadas (js)

```
  {isPacked ? (
	<del>
	  {name + ' ✅'}
	</del>
  ) : (
	name
  )} 

```

#### Si es verdadero va a devolver todo lo que está dentro del parentesis, que incluye el componente y JS; de lo contrario solo la prop name. 


### Operador lógico AND (&&)

Esto se puede interpretar como: «Si está empaquetado, entonces (&&) se representa la marca de verificación; de lo contrario, no se representa nada».

```
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✅'}
    </li>
  );
}

```

 expresión && de JavaScript devuelve el valor de su lado derecho (en nuestro caso, la marca de verificación) si el lado izquierdo (nuestra condición) es verdadero. 

### Pero si la condición es falsa, toda la expresión se convierte en falsa. 

React considera falso como un "vacío" en el árbol JSX, al igual que nulo o indefinido, y no renderiza nada en su lugar.


### Error:

No coloque números en el lado izquierdo de &&.

Para probar la condición, JavaScript convierte el lado izquierdo en un booleano automáticamente. 

Sin embargo, si el lado izquierdo es 0, toda la expresión obtiene ese valor (0) y React renderizará 0 en lugar de nada.


### Por ejemplo, un error común es escribir código como messageCount 

```
&& <p>New messages</p>. 

```

### Es fácil asumir que no renderiza nada cuando messageCount es 0, ¡pero en realidad renderiza el propio 0!


Para solucionarlo, convierta el lado izquierdo en un booleano: 

```
messageCount > 0 && <p>New messages</p>.

```


## Asignación condicional de JSX a una variable

Si los atajos dificultan la escritura de código simple, intenta usar una sentencia if y una variable. 

Puedes reasignar las variables definidas con let. 

### Empieza por proporcionar el contenido predeterminado que quieres mostrar: el nombre:

```
let itemContent = name;

```

Utilice una declaración if para reasignar una expresión JSX a itemContent si isPacked es verdadero:

```
if (isPacked) {
  itemContent = name + " ✅";
}

```

Las llaves abren la ventana de JavaScript. 

Incruste la variable entre llaves en el árbol JSX devuelto, anidando la expresión previamente calculada dentro de JSX:

```
<li className="item">
  {itemContent}
</li>

```

Este estilo es el más detallado, pero también el más flexible. 

```
function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + " ✅";
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

```

Al igual que antes, esto funciona no solo para texto, sino también para JSX arbitrario:

```
function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = (
      <del>
        {name + " ✅"}
      </del>
    );
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

```

Si no estás familiarizado con JavaScript, esta variedad de estilos puede resultar abrumadora al principio. 

Sin embargo, aprenderlos te ayudará a leer y escribir cualquier código JavaScript, ¡no solo componentes de React! 

Elige el que prefieras para empezar y consulta esta referencia si olvidas cómo funcionan los demás.

 
En React, la lógica de ramificación se controla con JavaScript.

Puedes devolver una expresión JSX condicionalmente con una sentencia if.

Puedes guardar condicionalmente un JSX en una variable y luego incluirlo dentro de otro JSX usando llaves.

En JSX, {cond ? <A /> : <B />} significa “si cond, renderiza <A />, de lo contrario, <B />”.

En JSX, {cond && <A />} significa “si cond, renderiza <A />, de lo contrario, nada”.

Los atajos son comunes, pero no es necesario usarlos si prefieres un if simple.


### Ejercicios renderizado condicional 

1. 

```
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked ? '✅' : '❌'}
    </li>
  );
}

```

#### En return devolvemos un prop y ternario que evalúa una prop y devolverá distinto contenido.


2. 

Item va a retornar un solo elemento li. 

Dentro de este va a retornar prop {name}

Después un ternario que evalúa la otra prop {importance}

Si es mayor que 0, una cadena vacia

Y el ultimo ternario devolverá el elemento i.

Tiene como contenido una cadena (el parentesis y lo demás) y un prop (importance)

```
function Item({ name, importance }) {
  return (
    <li className="item">
      {name}
      {importance > 0 && ' '}
      {importance > 0 &&
        <i>(Importance: {importance})</i>
      }
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          importance={9} 
          name="Space suit" 
        />
        <Item 
          importance={0} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          importance={6} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

```

Tenga en cuenta que debe escribir "importancia > 0 && ..." en lugar de "importancia && ..." para que, si la importancia es 0, no se muestre "0" como resultado.


En esta solución, se utilizan dos condiciones independientes para insertar un espacio entre el nombre y la etiqueta de importancia. 

Como alternativa, puede usar un fragmento con un espacio inicial: "importancia > 0 && <> <i>...</i></>" o añadir un espacio inmediatamente dentro de "<i>": "importancia > 0 && <i> ...</i>".


3. 

Hay muchas maneras de hacerlo, pero aquí hay un punto de partida:

Definimos tres variables y un if else antes del return. 

De acuerdo a la prop name, se asignarán valores a las variables locales.

```
function Drink({ name }) {
  let part, caffeine, age;
  if (name === 'tea') {
    part = 'leaf';
    caffeine = '15–70 mg/cup';
    age = '4,000+ years';
  } else if (name === 'coffee') {
    part = 'bean';
    caffeine = '80–185 mg/cup';
    age = '1,000+ years';
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}

```

Definimos let part, caffeine, age;

Si name es tea o coffe: las variables toman su valor correspondiente

Estas variables se renderizarán en las listas. 



## Renderizar listas en React

### Arrays

```
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

```

```
const listItems = people.map(person => <li>{person}</li>);

```

```
return <ul>{listItems}</ul>;

```

Cada iteración/map/match devolverá un elemento li

#### Cuando los tenga todos, los podrá mostrar en listItems

```
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function List() {
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  return <ul>{listItems}</ul>;
}

```

#### Observe que el sandbox anterior muestra un error de consola:

```
Advertencia: Cada elemento secundario de una lista debe tener una propiedad "key" única.

```


### Filtrado de matrices de elementos

Estos datos se pueden estructurar aún más.

```
const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

```

```
const chemists = people.filter(person =>
  person.profession === 'chemist'
);

```

```
const listItems = chemists.map(person =>
  <li>
     <img
       src={getImageUrl(person)}
       alt={person.name}
     />
     <p>
       <b>{person.name}:</b>
       {' ' + person.profession + ' '}
       known for {person.accomplishment}
     </p>
  </li>
);

```

#### Por cada elemento mapeado devolverá un li con img, p y b que leen/toman el valor de los datos/propiedades del objeto. 

```
return <ul>{listItems}</ul>;

``` 


utils.js:

```
export function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}

```


data.js:

```
export const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];

```


App.js

```
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person =>
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}

```

#### Advertencia en consola

```
Cada elemento secundario de una lista debe tener una propiedad "key" única.

Consulta el método de renderizado de `List`. Consulta https://react.dev/link/warning-keys para más información.

```


#### Error 

#### Las funciones flecha devuelven implícitamente la expresión justo después de =>, por lo que no se necesitaba una sentencia return:

```
const listItems = chemists.map(person =>
<li>...</li> // ¡Retorno implícito!
);

```

#### Sin embargo, debe escribir return explícitamente si su => va seguido de una llave {.

```
const listItems = chemists.map(person => { // Llave
return <li>...</li>;
});

```

Se dice que las funciones flecha que contienen => { tienen un "cuerpo de bloque". 

Permiten escribir más de una línea de código, pero debe escribir una sentencia return. 

Si la olvida, no se devuelve nada.


#### Tenemos dos funciones flechas con una sola sentencia pero con varios elementos. 


## Mantener los elementos de la lista ordenados con clave

### Observe que todos los entornos de pruebas anteriores muestran un error en la consola:

```
Warning: Each child in a list should have a unique “key” prop.

```

Debe asignar una clave a cada elemento de la matriz: una cadena o un número que lo identifique de forma única entre los demás elementos de la matriz:

```
<li key={person.id}>...</li>

```

Nota:

Los elementos JSX directamente dentro de una llamada map() siempre necesitan claves.


Las claves indican a React a qué elemento del array corresponde cada componente, para que pueda compararlos posteriormente. 

Esto es importante si los elementos del array pueden moverse (por ejemplo, debido a la ordenación), insertarse o eliminarse. 

Una clave bien elegida ayuda a React a inferir qué ha sucedido exactamente y a realizar las actualizaciones correctas en el árbol DOM.


En lugar de generar claves sobre la marcha, debería incluirlas en sus datos:

data.js

```
export const people = [{
  id: 0, // Used in JSX as a key
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1, // Used in JSX as a key
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2, // Used in JSX as a key
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3, // Used in JSX as a key
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4, // Used in JSX as a key
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];

```

App.js

```
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}

```


#### las variables y funciones nos ayudan a mantener limpio el código. En este caso el return es solo la variable listItems

#### <li key={person.id}> en la función leerá la key de la db/datos locales.


### Dónde obtener tu clave

Diferentes fuentes de datos proporcionan diferentes fuentes de claves:

1. Datos de una base de datos: Si tus datos provienen de una base de datos, puedes usar las claves/ID de la base de datos, que son únicas por naturaleza.

2. Datos generados localmente: Si tus datos se generan y almacenan localmente (por ejemplo, notas en una aplicación para tomar notas), usa un contador incremental, crypto.randomUUID() o un paquete como uuid al crear elementos.


### Reglas de las claves

1. Las claves deben ser únicas entre los nodos hermanos. Sin embargo, se pueden usar las mismas claves para nodos JSX en diferentes matrices.

2. Las claves no deben cambiar, ya que esto anularía su propósito. No las genere durante el renderizado.


### ¿Por qué React necesita claves?

Imagina que los archivos de tu escritorio no tuvieran nombre. 

En su lugar, te referirías a ellos por su orden: el primer archivo, el segundo archivo, y así sucesivamente. 

Podrías acostumbrarte, pero al eliminar un archivo, se volvería confuso. 

El segundo archivo se convertiría en el primero, el tercero en el segundo, y así sucesivamente.


#### Los nombres de archivo en una carpeta y las claves JSX en un array tienen una función similar. 

Nos permiten identificar de forma única un elemento entre sus hermanos. 

Una clave bien elegida proporciona más información que la posición dentro del array. 

#### Incluso si la posición cambia debido a la reordenación, la clave permite a React identificar el elemento durante su ciclo de vida.


#### Error

#### Podrías tener la tentación de usar el índice de un elemento en el array como clave. 

#### De hecho, eso es lo que React usará si no especificas ninguna clave. 

Sin embargo, el orden en que renderizas los elementos cambiará con el tiempo si se inserta, se elimina o se reordena el array. 

Usar el índice como clave suele provocar errores sutiles y confusos.


De igual forma, no generes claves sobre la marcha, por ejemplo, con key={Math.random()}. 

Esto provocará que las claves nunca coincidan entre renderizaciones, lo que provocará que todos tus componentes y el DOM se vuelvan a crear cada vez. 

Esto no solo es lento, sino que también perderá cualquier entrada del usuario dentro de los elementos de la lista. 

En su lugar, usa un ID estable basado en los datos.


#### Ten en cuenta que tus componentes no recibirán key como propiedad. 

React solo la usa como una pista. 

#### Si tu componente necesita un ID, debes pasarlo como una propiedad independiente: <Profile key={id} userId={id} />.

### En profundidad: Visualización de varios nodos DOM para cada elemento de la lista

¿Qué se hace cuando cada elemento necesita representar no uno, sino varios nodos del DOM?


La sintaxis corta de fragmentos <>...</> no permite pasar una clave, por lo que se deben agrupar en un solo <div> o usar la sintaxis de fragmentos <Fragment>, un poco más larga y explícita:

```
import { Fragment } from 'react';

// ...

const listItems = people.map(person =>
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
);

```

Los fragmentos desaparecen del DOM, por lo que esto producirá una lista plana de <h1>, <p>, <h1>, <p>, etc.


### Ejercicios renderizar listas 

1. 

Datos: 

data.js

```
export const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];

```

#### El objeto se compone de todo un array con objetos, cada uno con su clave-valor.


Solución

Podrías usar filter() dos veces, creando dos matrices separadas y luego mapearlas sobre ambas:

```
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const everyoneElse = people.filter(person =>
    person.profession !== 'chemist'
  );
  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemists</h2>
      <ul>
        {chemists.map(person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
      <h2>Everyone Else</h2>
      <ul>
        {everyoneElse.map(person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
    </article>
  );
}

```

De acuerdo a los datos los filtra por dos tipos. 

En variables chemists y everyoneElse

#### Primero los filtra (antes de return y los guarda en variable)

#### Después los mapea en return para devolver cada dato correspondiente. 


2. 

data.js

```
export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

```

#### El objeto se compone de todo un array con objetos, cada uno con su clave-valor.

#### El valor de una clave es un array de strigs. 


Solución: 

Esto requerirá anidar dos llamadas de mapa diferentes.

```
import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

```

#### Mapea el objeto de datos dos veces para mostrar las propiedades el array en el return. 

#### Usa dos claves distintas para rastrear las posiciones y mantener el orden de renderizado en cada elemento li: key={recipe.id} y key={ingredient}


3. 

Solución:

Puedes copiar y pegar el JSX del mapa externo en un nuevo componente Receta y devolverlo. 

Luego, puedes cambiar ```receit.name``` por ```name```, ```receit.id``` por ```id```, etc., y pasarlos como propiedades a la Receta:


#### Creamos un nuevo componente Recipe con props, mapea sus propiedades para mostrarlas en el return

```
import { recipes } from './data.js';

function Recipe({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient =>
          <li key={ingredient}>
            {ingredient}
          </li>
        )}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <Recipe {...recipe} key={recipe.id} />
      )}
    </div>
  );
}

```

#### El componente RecipeList retorna en su h1 las propiedades del componente Recipe (las recibe con ... y las ordena con una key) 

### Aquí, <Recipe {...recipe} key={recipe.id} /> es un atajo de sintaxis que indica "pasar todas las propiedades del objeto receta como props al componente Receta". 

También se puede escribir cada prop explícitamente: <Recipe id={recipe.id} name={recipe.name} Ingredients={recipe.ingredients} key={recipe.id} />.


Ten en cuenta que la clave se especifica en el propio <Recipe>, no en el <div> raíz devuelto por Receta. 

Esto se debe a que esta clave se necesita directamente dentro del contexto del array circundante. 

Anteriormente, se tenía un array de <div>, por lo que cada uno necesitaba una clave, pero ahora se tiene un array de <Recipe>. 

En otras palabras, al extraer un componente, no olvides dejar la clave fuera del JSX que copias y pegas.


4. 

Puede escribir un bucle manual, insertando <hr /> y <p>...</p> en la matriz de salida a medida que avanza.

#### Creamos una constante global poem que es un objeto que tiene una propiedad con un array como valor. 

#### La funcion Poem define un array vacío output

#### Después accede al objeto poem (poem.lines.forEach((line, i) => {})

#### ForEach toma una función

#### Leerá la propiedad que tiene un array por cada elemento le asigna una variable local y un indice

#### Incluirá la variable y el indice en el array vacio en cada iteración/elemento. 

#### Incluye en un elemento hr con el indice y un string como key

#### Mostrará la variable line

#### Al final elimina cada hr y en el return muestra el array como un poema. 

```
const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  let output = [];

  // Fill the output array
  poem.lines.forEach((line, i) => {
    output.push(
      <hr key={i + '-separator'} />
    );
    output.push(
      <p key={i + '-text'}>
        {line}
      </p>
    );
  });
  // Remove the first <hr />
  output.shift();

  return (
    <article>
      {output}
    </article>
  );
}

```



## Componentes puros 

Las funciones puras solo realizan un cálculo y nada más. 

1. Se ocupa de sus propios asuntos. 

### No modifica ningún objeto ni variable existente antes de ser llamada.

### Solo actuán en el ámbito local, solo tratan los objetos, no los cambian


2. Mismas entradas, misma salida. 

### Dadas las mismas entradas, una función pura siempre debería devolver el mismo resultado.

```
function double(number) {
  return 2 * number;
}

```

### React asume que cada componente que escribes es una función pura. 

#### Esto significa que los componentes de React que escribes siempre deben devolver el mismo JSX con las mismas entradas:


App.js

```
function Recipe({ drinkers }) {
  return (
    <ol>    
      <li>Boil {drinkers} cups of water.</li>
      <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

export default function App() {
  return (
    <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
    </section>
  );
}

```

#### Al pasar drinkers={2} a la Receta, devolverá un JSX con 2 tazas de agua. Siempre.

#### Si pasa drinkers={4}, devolverá un JSX con 4 tazas de agua. Siempre.

Igual que una fórmula matemática.


### Efectos secundarios: consecuencias (no) deseadas

El proceso de renderizado de React debe ser siempre puro. 

#### Los componentes solo deben devolver su JSX y no modificar ningún objeto o variable existente antes del renderizado, ya que esto los volvería impuros.

```
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}

```

#### Este componente lee y escribe una variable de invitado declarada externamente. 

#### Esto significa que llamarlo varias veces producirá un JSX diferente. 

#### Actualiza la variable global en cada llamada. 

Además, si otros componentes leen "invitado", también producirán un JSX diferente, dependiendo de cuándo se renderizaron. 

Esto no es predecible.


### Puedes arreglar este componente pasando guest como propiedad en su lugar:

```
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}

```

#### Ahora tu componente es puro, ya que el JSX que devuelve solo depende de la propiedad {guest}.


### En general, no deberías esperar que tus componentes se rendericen en un orden específico. 

No importa si llamas a y = 2x antes o después de y = 5x: ambas fórmulas se resolverán independientemente. 

### De igual manera, cada componente debe pensar por sí mismo y no intentar coordinarse ni depender de otros durante el renderizado. 

El renderizado es como un examen escolar: ¡cada componente debe calcular el JSX por sí mismo!


### React ofrece un "Modo Estricto" en el que llama a la función de cada componente dos veces durante el desarrollo. 

### Al llamar a las funciones del componente dos veces, el Modo Estricto ayuda a detectar componentes que infringen estas reglas.


#### Observa cómo el ejemplo original mostraba "Invitado n.° 2", "Invitado n.° 4" y "Invitado n.° 6" en lugar de "Invitado n.° 1", "Invitado n.° 2" y "Invitado n.° 3". 

#### La función original era impura, por lo que al llamarla dos veces se interrumpía. 

#### Sin embargo, la versión pura corregida funciona incluso si la función se llama dos veces cada vez. 

#### Las funciones puras solo calculan, por lo que llamarlas dos veces no cambiará nada; al igual que llamar a double(2) dos veces no cambia el valor devuelto, y resolver y = 2x dos veces no cambia el valor de y.

Mismas entradas, mismas salidas. Siempre.


El modo estricto no tiene efecto en producción, por lo que no ralentizará la aplicación para los usuarios. 

Para activar el modo estricto, puedes encapsular tu componente raíz en <React.StrictMode>. 

Algunos frameworks lo hacen por defecto.


### Mutación local: El pequeño secreto de tu componente

En el ejemplo anterior, el problema residía en que el componente modificaba una variable preexistente durante el renderizado. 

Esto se suele llamar "mutación" para que suene un poco más intimidante. 

#### Las funciones puras no mutan variables fuera de su ámbito ni objetos creados antes de la llamada; ¡eso las convierte en impuras!


#### Sin embargo, es perfectamente posible modificar variables y objetos recién creados durante el renderizado. 

En este ejemplo, se crea un array ```[]```, se le asigna una variable cups y luego se le insertan una docena de cups:

```
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaGathering() {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}

``` 

#### (definimos cup, toma guest, retorna h2 + el valor de guest)

#### (definimos TeaGathering, una variable local que es un array, creamos un bucle para manipular el array local, en cada iteración va a usar .push() que le pasa por parámetro el componente hijo con el valor de su prop guest y un atributo key) al final retorna la variable local actualizada.


### Cuando usamos recursos de otros archivos lo traemos al ámbito local.


### Dónde se pueden generar efectos secundarios

Si bien la programación funcional se basa en gran medida en la pureza, en algún momento, algo tiene que cambiar. 

¡Ese es precisamente el propósito de la programación! 

#### Estos cambios (actualizar la pantalla, iniciar una animación, cambiar los datos) se denominan efectos secundarios. 

#### Son cosas que ocurren "inmediatamente", no durante el renderizado.


#### En React, los efectos secundarios suelen pertenecer a los controladores de eventos. 

Los controladores de eventos son funciones que React ejecuta al realizar alguna acción, por ejemplo, al hacer clic en un botón. 

#### Aunque los controladores de eventos se definen dentro del componente, ¡no se ejecutan durante el renderizado! 

Por lo tanto, no es necesario que sean puros.


### No ejecutamos estas funciones, las ejecuta el usuario. 


#### Si has agotado todas las demás opciones y no encuentras el controlador de eventos adecuado para tu efecto secundario, puedes adjuntarlo al JSX devuelto con una llamada a useEffect en el componente. 

Esto le indica a React que lo ejecute más tarde, después del renderizado, cuando los efectos secundarios estén permitidos. 

#### Sin embargo, este enfoque debería ser tu último recurso.


### Siempre que sea posible, intenta expresar tu lógica únicamente con el renderizado. 


### Ventajas componentes puros

1. Tus componentes podrían ejecutarse en un entorno diferente, por ejemplo, ¡en el servidor! 

Dado que devuelven el mismo resultado para las mismas entradas, un componente puede atender muchas solicitudes de usuario.


2. Puedes mejorar el rendimiento omitiendo la renderización de componentes cuyas entradas no han cambiado. 

Esto es seguro porque las funciones puras siempre devuelven los mismos resultados, por lo que es seguro almacenarlas en caché.


3. Si algún dato cambia durante la renderización de un árbol de componentes profundo, React puede reiniciar la renderización sin perder tiempo en finalizar el renderizado obsoleto. 

La pureza permite detener el cálculo en cualquier momento.

Cada nueva funcionalidad de React que desarrollamos aprovecha la pureza. 

Desde la obtención de datos hasta las animaciones y el rendimiento, mantener los componentes puros libera el poder del paradigma de React.






# Actualizar Bio: Objetivo

Mi objetivo es llegar hasta las entrañas de las tecnólogias para dar soluciones de alta calidad a la industria. 



# Propagación en React 

No definimos props en avatar, si que se las pasarmos

Dado las formas de usar props

0. props: 

Avatar({ person, size, title })
Profile : Avatar person={{}} size={50} title="Primero"
 
Pero se puede complejizar cuando creamos el componente hijo
Cuando queramos leer el valor de las props: 

Ej: 

1. 

```
Avatar ({ person, size, title })
return:

src={person.url}

height={size}

size={50}

size={size}

```

2. 

```
<Avatar person={{a}} size={b} title="c" />

```

## No mesclar atributos (cuando definimos hijo) con valores dados a props (cuando llamamos a hijo)

1. Props conocidas: Atributos + {}

```
function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

export default function Profile() {
  return (
    <Avatar />
  );
}

```

2. Props personalizadas: props + jsx

```
export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}

```

```
function Avatar({ person, size }) {
  // person and size are available here
}

```


3. Componente con props más complejo: Atributos, props y js 

```
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}

```



4. Props: Cambio de valores a lo largo del tiempo 

```
export default function Clock({ color, time }) {
  return (
    <h1 style={{ color: color }}>
      {time}
    </h1>
  );
}

``` 


Propagación:

```
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

```

```
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}

```


# RS React Props

1. Define un elemento hijo con props para que le pasen info/datos.

2. En su return lee o va a mostrar en los elementos html, los valores que le pasará un componente padre 

3. Un componente superior lo llama y le pasa valores. 

```
import { getImageUrl } from './utils.js';

function Profile({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 70
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li><b>Profession:</b> {profession}</li>
        <li>
          <b>Awards: {awards.length} </b>
          ({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
      />
      <Profile
        imageId='YfeOqp2'
        name='Katsuko Saruhashi'
        profession='geochemist'
        discovery="a method for measuring carbon dioxide in seawater"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
      />
    </div>
  );
}

```


Otra forma: 

App.js

```
import { getImageUrl } from './utils.js';

function Profile({ person, imageSize = 70 }) {
  const imageSrc = getImageUrl(person)

  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={imageSrc}
        alt={person.name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession:</b> {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length} </b>
          ({person.awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovery}
        </li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile person={{
        imageId: 'szV5sdG',
        name: 'Maria Skłodowska-Curie',
        profession: 'physicist and chemist',
        discovery: 'polonium (chemical element)',
        awards: [
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ],
      }} />
      <Profile person={{
        imageId: 'YfeOqp2',
        name: 'Katsuko Saruhashi',
        profession: 'geochemist',
        discovery: 'a method for measuring carbon dioxide in seawater',
        awards: [
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ],
      }} />
    </div>
  );
}

```


## Props y renderizado condicional

### Primero va a leer las variables, valores y según las condiciones va a retornar un elemento HTML u otro. 

```
function Item({ name, isPacked }) {
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

```


### Nos encontraremos con varios return. La lógica puede estar antes del return o en los elementos que devuelve el return (se ve cuando usamos el operador ternario dentro de llaves {})

### Evitar repetición, uso de ternario (? :)

Ambas ramas condicionales devuelven <li className="item">...</li>:

```
if (isPacked) {
  return <li className="item">{name} ✅</li>;
}
return <li className="item">{name}</li>;

```

#### Si return devuelve el mismo elemento: 

Podemos escribir: 

```
return (
  <li className="item">
    {isPacked ? name + ' ✅' : name}
  </li>
);

```

“si isPacked es verdadero, entonces (?) renderizar name + ' ✅', de lo contrario (:) renderizar name”.


### Puede agregar más saltos de línea y paréntesis para facilitar la anidación de más JSX en cada caso:

```
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + ' ✅'}
        </del>
      ) : (
        name
      )}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

```

Este estilo funciona bien para condiciones simples, pero úselo con moderación. 

### Si sus componentes se complican con demasiado marcado condicional anidado, considere extraer componentes secundarios para optimizarlo. 

En React, el marcado forma parte de su código, por lo que puede usar herramientas como variables y funciones para optimizar expresiones complejas.


#### Condicional en return: uso de llaves, parentesis, componentes y llaves anidadas (js)

```
  {isPacked ? (
	<del>
	  {name + ' ✅'}
	</del>
  ) : (
	name
  )} 

```

#### Si es verdadero va a devolver todo lo que está dentro del parentesis, que incluye el componente y JS; de lo contrario solo la prop name. 


### Operador lógico AND (&&)

Esto se puede interpretar como: «Si está empaquetado, entonces (&&) se representa la marca de verificación; de lo contrario, no se representa nada».

```
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✅'}
    </li>
  );
}

```

 expresión && de JavaScript devuelve el valor de su lado derecho (en nuestro caso, la marca de verificación) si el lado izquierdo (nuestra condición) es verdadero. 

### Pero si la condición es falsa, toda la expresión se convierte en falsa. 

React considera falso como un "vacío" en el árbol JSX, al igual que nulo o indefinido, y no renderiza nada en su lugar.


### Error:

No coloque números en el lado izquierdo de &&.

Para probar la condición, JavaScript convierte el lado izquierdo en un booleano automáticamente. 

Sin embargo, si el lado izquierdo es 0, toda la expresión obtiene ese valor (0) y React renderizará 0 en lugar de nada.


### Por ejemplo, un error común es escribir código como messageCount 

```
&& <p>New messages</p>. 

```

### Es fácil asumir que no renderiza nada cuando messageCount es 0, ¡pero en realidad renderiza el propio 0!


Para solucionarlo, convierta el lado izquierdo en un booleano: 

```
messageCount > 0 && <p>New messages</p>.

```

## Asignación condicional de JSX a una variable

### Si los atajos dificultan la escritura de código simple, intenta usar una sentencia if y una variable. 

Puedes reasignar las variables definidas con let. 

### Empieza por proporcionar el contenido predeterminado que quieres mostrar: el nombre:

```
let itemContent = name;

```

Utilice una declaración if para reasignar una expresión JSX a itemContent si isPacked es verdadero:

```
if (isPacked) {
  itemContent = name + " ✅";
}

```

Las llaves abren la ventana de JavaScript. 

Incruste la variable entre llaves en el árbol JSX devuelto, anidando la expresión previamente calculada dentro de JSX:

```
<li className="item">
  {itemContent}
</li>

```

Este estilo es el más detallado, pero también el más flexible. 

```
function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + " ✅";
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

```

Al igual que antes, esto funciona no solo para texto, sino también para JSX arbitrario:

```
function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = (
      <del>
        {name + " ✅"}
      </del>
    );
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

```

Si no estás familiarizado con JavaScript, esta variedad de estilos puede resultar abrumadora al principio. 

Sin embargo, aprenderlos te ayudará a leer y escribir cualquier código JavaScript, ¡no solo componentes de React! 

Elige el que prefieras para empezar y consulta esta referencia si olvidas cómo funcionan los demás.


### Mas ejemplos condicionales





### Rs sintaxis para usar condicionales

1. if completo fuera de return (ambito local de func/compon) 


2. ternario en return: entre los elementos nos encontraremos repentinamente con ternario, componentes y js entre parentesis y llaves:

En JSX, {cond ? <A /> : <B />} significa “si cond, renderiza <A />, de lo contrario, <B />”.

En JSX, {cond && <A />} significa “si cond, renderiza <A />, de lo contrario, nada”.

{?( ( {} ) : ( {} ) )}
     (T)      (F)       


3. Uso de variables

```
let itemContent = name;

```

Utilice una declaración if para reasignar una expresión JSX a itemContent si isPacked es verdadero:

```
if (isPacked) {
  itemContent = name + " ✅";
}

```

Las llaves abren la ventana de JavaScript. 

Incruste la variable entre llaves en el árbol JSX devuelto, anidando la expresión previamente calculada dentro de JSX:

```
<li className="item">
  {itemContent}
</li>

```


# Rs props y renderizado concional 

1. Definir un componente hijo con props

2. Manipular estas prop para leerlas y renderizarlas en el return

3. Dar valor a las props del componente hijo cuando lo usamos en otro componente superior. 

4. Para los condicionales: evaluarán el valor de las props pasadas al componente hijo. 

Podemos usar if else fuera del return

Ternario dentro del return para devolver props, contenido js de acuerdo al condicional, componentes, js; usando parentesis y llaves.


# Renderizado de listas 

## Uso de map

## Uso de filter 

## Uso de atributo key

## Fragment o div para usar key


### Ejemplos

1. 

Datos: 

data.js

```
export const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];

```

#### El objeto se compone de todo un array con objetos, cada uno con su clave-valor.



Solución

Podrías usar filter() dos veces, creando dos matrices separadas y luego mapearlas sobre ambas:

```
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const everyoneElse = people.filter(person =>
    person.profession !== 'chemist'
  );
  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemists</h2>
      <ul>
        {chemists.map(person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
      <h2>Everyone Else</h2>
      <ul>
        {everyoneElse.map(person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
    </article>
  );
}

```

De acuerdo a los datos los filtra por dos tipos. 

En variables chemists y everyoneElse

#### Primero los filtra (antes de return y los guarda en variable)

#### Después los mapea en return para devolver cada dato correspondiente. 


2. 

data.js

```
export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

```

#### El objeto se compone de todo un array con objetos, cada uno con su clave-valor.

#### El valor de una clave es un array de strigs. 


Solución: 

Esto requerirá anidar dos llamadas de mapa diferentes.

```
import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

```

#### Mapea el objeto de datos dos veces para mostrar las propiedades el array en el return. 

#### Usa dos claves distintas para rastrear las posiciones y mantener el orden de renderizado en cada elemento li: key={recipe.id} y key={ingredient}


3. 

Solución:

Puedes copiar y pegar el JSX del mapa externo en un nuevo componente Receta y devolverlo. 

Luego, puedes cambiar ```receit.name``` por ```name```, ```receit.id``` por ```id```, etc., y pasarlos como propiedades a la Receta:


#### Creamos un nuevo componente Recipe con props, mapea sus propiedades para mostrarlas en el return

```
import { recipes } from './data.js';

function Recipe({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient =>
          <li key={ingredient}>
            {ingredient}
          </li>
        )}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <Recipe {...recipe} key={recipe.id} />
      )}
    </div>
  );
}

```

#### El componente RecipeList retorna en su h1 las propiedades del componente Recipe (las recibe con ... y las ordena con una key) 

### Aquí, <Recipe {...recipe} key={recipe.id} /> es un atajo de sintaxis que indica "pasar todas las propiedades del objeto receta como props al componente Receta". 

También se puede escribir cada prop explícitamente: <Recipe id={recipe.id} name={recipe.name} Ingredients={recipe.ingredients} key={recipe.id} />.


Ten en cuenta que la clave se especifica en el propio <Recipe>, no en el <div> raíz devuelto por Receta. 

Esto se debe a que esta clave se necesita directamente dentro del contexto del array circundante. 

Anteriormente, se tenía un array de <div>, por lo que cada uno necesitaba una clave, pero ahora se tiene un array de <Recipe>. 

En otras palabras, al extraer un componente, no olvides dejar la clave fuera del JSX que copias y pegas.


4. 

Puede escribir un bucle manual, insertando <hr /> y <p>...</p> en la matriz de salida a medida que avanza.

#### Creamos una constante global poem que es un objeto que tiene una propiedad con un array como valor. 

#### La funcion Poem define un array vacío output

#### Después accede al objeto poem (poem.lines.forEach((line, i) => {})

#### ForEach toma una función

#### Leerá la propiedad que tiene un array por cada elemento le asigna una variable local y un indice

#### Incluirá la variable y el indice en el array vacio en cada iteración/elemento. 

#### Incluye en un elemento hr con el indice y un string como key

#### Mostrará la variable line

#### Al final elimina cada hr y en el return muestra el array como un poema. 

```
const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  let output = [];

  // Fill the output array
  poem.lines.forEach((line, i) => {
    output.push(
      <hr key={i + '-separator'} />
    );
    output.push(
      <p key={i + '-text'}>
        {line}
      </p>
    );
  });
  // Remove the first <hr />
  output.shift();

  return (
    <article>
      {output}
    </article>
  );
}

```


# Componentes puros 

```
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaGathering() {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}

``` 

#### (definimos cup, toma guest, retorna h2 + el valor de guest)

#### (definimos TeaGathering, una variable local que es un array, creamos un bucle para manipular el array local, en cada iteración va a usar .push() que le pasa por parámetro el componente hijo con el valor de su prop guest y un atributo key) al final retorna la variable local actualizada.


1. 

Puedes arreglar este componente calculando el className e incluyéndolo en la salida de renderizado:


Define hours usando el objeto time y su método getHours()

Define className

Con un if, dado el valor de hours, va a definir el valor de className

En return le pasamos el valor de la variable local className al atributo React className

Retornará un h1 con el objeto time.toLocaleTimeString()


```
export default function Clock({ time }) {
  let hours = time.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = 'night';
  } else {
    className = 'day';
  }
  return (
    <h1 className={className}>
      {time.toLocaleTimeString()}
    </h1>
  );
}

```

En este ejemplo, el efecto secundario (modificar el DOM) no fue necesario. Solo se necesitaba devolver JSX.


2. 

El problema radica en que el componente Perfil escribe en una variable preexistente llamada currentPerson, y los componentes Encabezado y Avatar leen de ella. 

Esto hace que los tres sean impuros y difíciles de predecir.

Para corregir el error, elimine la variable currentPerson. 

En su lugar, pase toda la información de Perfil a Encabezado y Avatar mediante propiedades. 

Deberá agregar una propiedad "persona" a ambos componentes y pasarla a todos los niveles.


Profile.js


Profile toma un objeto person para que le asigne propiedades y valores cuando lo invoquen 

Profile usa Panel y dentro llama a header y le pasa el objeto person

```
import Panel from './Panel.js';
import { getImageUrl } from './utils.js';

export default function Profile({ person }) {
  return (
    <Panel>
      <Header person={person} />
      <Avatar person={person} />
    </Panel>
  )
}

function Header({ person }) {
  return <h1>{person.name}</h1>;
}

function Avatar({ person }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}

```

Header toma el objeto person para retornar su propiedad y valor person.name

Avatar toma person para mostrar, la url y el nombre para el elemento img que renderiza

 
App.js

```
import Profile from './Profile.js';

export default function App() {
  return (
    <>
      <Profile person={{
        imageId: 'lrWQx8l',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
      <Profile person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
    </>
  );
}

```

App renderiza Profile con valores para el objeto person; Profile contiene Header y Avatar, todos toman como objeto person. 


### Recuerda que React no garantiza que las funciones de los componentes se ejecuten en un orden específico, por lo que no es posible comunicarse entre ellas mediante variables. 

### Toda comunicación debe realizarse mediante propiedades.


3. 

La solución más sencilla es no modificar el array y renderizar "Crear historia" por separado.


StoryTray.js

StoryTray toma stories, los mapea y por cada una le asignará una key y mostrará una etiqueta  

```
export default function StoryTray({ stories }) {
  return (
    <ul>
      {stories.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
      <li>Create Story</li>
    </ul>
  );
}

```

Como alternativa, puede crear una nueva matriz (copiando la existente) antes de insertar un elemento en ella:

StoryTray toma stories

guarda en una variable storiesToDisplay stories.slice

el método push recibe un objeto js con id y lable

En return mapea storiesToDisplay, por cada storie devuelve li con una key usando las propiedades del objeto. 

Dentro de li mostrará el valor de {story.label}

```
export default function StoryTray({ stories }) {
  // Copy the array!
  let storiesToDisplay = stories.slice();

  // Does not affect the original array:
  storiesToDisplay.push({
    id: 'create',
    label: 'Create Story'
  });

  return (
    <ul>
      {storiesToDisplay.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}

```

### Esto mantiene la mutación local y la función de renderizado pura. 

Sin embargo, debe tener cuidado: por ejemplo, si intenta modificar alguno de los elementos existentes del array, también deberá clonarlos.


### Es útil recordar qué operaciones en los arrays los mutan y cuáles no. 

Por ejemplo, insertar, extraer, invertir y ordenar mutarán el array original, pero cortar, filtrar y mapear crearán uno nuevo.



#


