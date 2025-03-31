# UI

React es una biblioteca de JavaScript para renderizar interfaces de usuario (IU). 

La IU se construye a partir de pequeñas unidades como botones, texto e imágenes. React permite combinarlas en componentes reutilizables y anidados. 


## Component

Las aplicaciones React se construyen a partir de elementos aislados de la interfaz de usuario (IU) llamados componentes. 

Un componente React es una función de JavaScript que se puede añadir marcado. 

Los componentes pueden ser tan pequeños como un botón o tan grandes como una página completa

Ej: componente de Galería que representa tres componentes de Perfil:

En App.js

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


## Importación y exportación de componentes

Puedes declarar varios componentes en un solo archivo, pero navegar por archivos grandes puede resultar complicado. 

Para solucionar esto, puedes exportar un componente a su propio archivo y luego importarlo desde otro:

En Gallery.js: importa otro componente y exportamos el actual. 

```
import Profile from './Profile.js';

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


En Profile.js: exportamos este componente para que otros lo puedan usar. 

```
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

```


## Marcado con jsx

Cada componente de React es una función de JavaScript que puede contener marcado que React renderiza en el navegador. 

Los componentes de React utilizan una extensión de sintaxis llamada JSX para representar dicho marcado. 

JSX se parece mucho a HTML, pero es un poco más estricto y puede mostrar información dinámica.


El HTML no funcionará si no tiene un <div></div> o un contenedor vacío <></>

```
export default function TodoList() {
  return (
    // This doesn't quite work!
    <h1>Hedy Lamarr's Todos</h1>
    <img
      src="https://i.imgur.com/yXOvdOSs.jpg"
      alt="Hedy Lamarr"
      class="photo"
    >
    <ul>
      <li>Invent new traffic lights
      <li>Rehearse a movie scene
      <li>Improve spectrum technology
    </ul>
  );
}

```

Funcionará si: 

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

o pasando todo nuestro HTML existente a un convertidor HTML a JSX

```
transform.tools/html-to-jsx

```


## JavaScript en JSX con llaves

JSX permite escribir marcado similar a HTML dentro de un archivo JavaScript, manteniendo la lógica de renderizado y el contenido en el mismo lugar. 

En ocasiones, es posible que desee añadir algo de lógica JavaScript o hacer referencia a una propiedad dinámica dentro de ese marcado. 

En este caso, puede usar llaves en su JSX para abrir una ventana a JavaScript: 

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


## Pasando props a un componente

Los componentes de React usan props para comunicarse entre sí. 

Cada componente padre puede pasar información a sus componentes hijos mediante props. 

Los props pueden parecer atributos HTML, pero puedes pasar cualquier valor de JavaScript a través de ellos, incluyendo objetos, arrays, funciones e incluso JSX.


### Representa un espacio para completar información cuando lo invoquemos desde un componente padre

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


## Renderizado condicional

Tus componentes suelen necesitar mostrar diferentes elementos según las condiciones. 

En React, puedes renderizar JSX condicionalmente usando sintaxis de JavaScript como sentencias if, && y operadores ?.

En este ejemplo, el operador && de JavaScript se utiliza para renderizar condicionalmente una marca de verificación:

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


## Representación de listas

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


## Componentes puros 

Una función pura: 

1. Se ocupa de sus propios asuntos. 

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


### Puedes hacer que este componente sea puro pasando una propiedad en lugar de modificar una variable preexistente:

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


## UI como árbol

React utiliza árboles para modelar las relaciones entre componentes y módulos.

Un árbol de renderizado de React es una representación de la relación padre-hijo entre los componentes.

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

Modelar la relación entre los módulos de JavaScript es otra forma útil de comprender la aplicación. 

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



# Un Componente 

## UI blocks 

En la web, HTML nos permite crear documentos estructurados y completos con su conjunto integrado de etiquetas como <h1> y <li>:

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

Este marcado representa este artículo <article>, su encabezado <h1> y una tabla de contenido (abreviada) como una lista ordenada <ol>. 

Este marcado, combinado con CSS para el estilo y JavaScript para la interactividad, se encuentra detrás de cada barra lateral, avatar, modal, menú desplegable: cada elemento de interfaz de usuario que ves en la web.


React te permite combinar tu marcado, CSS y JavaScript en "componentes" personalizados, elementos de interfaz de usuario reutilizables para tu aplicación. 

El código de la tabla de contenido que viste arriba podría convertirse en un componente <TableOfContents /> que podrías renderizar en cada página. 

Internamente, sigue utilizando las mismas etiquetas HTML como <article>, <h1>, etc.


Al igual que con las etiquetas HTML, puedes componer, ordenar y anidar componentes para diseñar páginas completas. 

Por ejemplo, la página de documentación que estás leyendo está compuesta por componentes de React:

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

A medida que tu proyecto crezca, notarás que muchos de tus diseños se pueden componer reutilizando componentes que ya escribiste, lo que acelera el desarrollo. 

¡Nuestra tabla de contenido anterior se puede agregar a cualquier pantalla con <TableOfContents />! 

Incluso puedes impulsar tu proyecto con los miles de componentes compartidos por la comunidad de código abierto de React, como Chakra UI y Material UI.


## Definir componente

Tradicionalmente, al crear páginas web, los desarrolladores marcaban su contenido y luego añadían interacción añadiendo algo de JavaScript.

Esto funcionaba de maravilla cuando la interacción era un lujo en la web. Ahora es algo habitual en muchos sitios y aplicaciones. 

React prioriza la interactividad, pero sigue utilizando la misma tecnología: un componente de React es una función de JavaScript a la que se le puede añadir marcado. 

Así es como se ve: 

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


## Construir componente 


### 1. Exportar el componente 

El prefijo predeterminado de exportación es una sintaxis estándar de JavaScript (no específica de React). 

Permite marcar la función principal en un archivo para poder importarla posteriormente desde otros archivos.


### 2. Definir la función 

Con la función Profile() { } se define una función de JavaScript llamada Profile.

Los componentes de React son funciones de JavaScript normales, pero sus nombres deben empezar con mayúscula; de lo contrario, no funcionarán.


### 3. Añadir marcado

El componente devuelve una etiqueta <img /> con atributos src y alt. 

#### <img /> se escribe como HTML, pero en realidad es JavaScript. 

Esta sintaxis se llama JSX y permite incrustar marcado dentro de JavaScript.

Las declaraciones de retorno se pueden escribir en una sola línea, como en este componente:

```
return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;

```

Pero si su marcado no está todo en la misma línea que la palabra clave return, debe envolverlo entre un par de paréntesis:

```
return (
  <div>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  </div>
);

```

Sin paréntesis, cualquier código en las líneas posteriores a "return" será ignorado.


## Usar componente 

Una vez definido el componente Profile, puede anidarlo dentro de otros componentes. 

Por ejemplo, puede exportar un componente Gallery que utilice varios componentes Profile:

App.js:

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


## Lo que ve el navegador: HTML y JSX (JS + HTML)

Observe la diferencia de mayúsculas y minúsculas:

1. <section> está en minúsculas, por lo que React sabe que nos referimos a una etiqueta HTML.

2. <Profile/> empieza con P mayúscula, por lo que React sabe que queremos usar nuestro componente llamado Profile.

Y Profile contiene aún más HTML: <img />. 

En definitiva, esto es lo que ve el navegador:

```
<section>
  <h1>Amazing scientists</h1>
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
</section>

```


## Anidación y organización de componentes

Los componentes son funciones JavaScript estándar, por lo que puedes guardar varios componentes en el mismo archivo. 

Esto resulta práctico cuando los componentes son relativamente pequeños o están estrechamente relacionados entre sí. 

Si este archivo se satura, siempre puedes mover Profile a un archivo aparte. 

Aprenderás cómo hacerlo en breve en la página sobre importaciones.


Dado que los componentes Profile se renderizan dentro de Gallery, ¡incluso varias veces!, podemos decir que Gallery es un componente padre, que renderiza cada Profile como un componente hijo. 

Esto forma parte de la magia de React: puedes definir un componente una vez y luego usarlo en tantos lugares y tantas veces como quieras.


### Error 

Los componentes pueden renderizar otros componentes, pero nunca debes anidar sus definiciones.

```
export default function Gallery() {
  // Never define a component inside another component!
  function Profile() {
    // ...
  }
  // ...
}

```

#### El fragmento anterior es muy lento y causa errores. 

En su lugar, defina cada componente en el nivel superior:

```
export default function Gallery() {
  // ...
}

// Declare components at the top level
function Profile() {
  // ...
}

```

Cuando un componente secundario necesita algunos datos de un componente primario, páselo mediante propiedades en lugar de anidar definiciones.


## Componentes en profundida

Tu aplicación React comienza con un componente raíz. 

Normalmente, este se crea automáticamente al iniciar un nuevo proyecto. 

### Por ejemplo, si usas CodeSandbox o el framework Next.js, el componente raíz se define en pages/index.js. 

En estos ejemplos, has estado exportando componentes raíz.


La mayoría de las aplicaciones React usan componentes de principio a fin. 

Esto significa que no solo usarás componentes para elementos reutilizables como botones, sino también para elementos más grandes como barras laterales, listas y, en definitiva, páginas completas. 

Los componentes son una forma práctica de organizar el código de la interfaz de usuario y el marcado, incluso si algunos solo se usan una vez.


Los frameworks basados ​​en React van un paso más allá. 

En lugar de usar un archivo HTML vacío y dejar que React se encargue de la gestión de la página con JavaScript, también generan el HTML automáticamente a partir de tus componentes React. 

Esto permite que tu aplicación muestre contenido antes de que se cargue el código JavaScript.


Aun así, muchos sitios web solo usan React para añadir interactividad a páginas HTML existentes. 

Tienen muchos componentes raíz en lugar de uno solo para toda la página. Puedes usar tanto o tan poco React como necesites.


## Rs componentes

Permite crear componentes, elementos de interfaz de usuario reutilizables para tu aplicación.

En una aplicación React, cada elemento de la interfaz de usuario es un componente.

Los componentes de React son funciones JavaScript normales, excepto que:

1. Sus nombres siempre empiezan con mayúscula.

2. Devuelven marcado JSX.


## Desafios 

Dejar un punto y coma dentro de return (puede ser después de un elem html) puede causar error de token inesperado. 

Componentes (mayus) y etiquetas HTML (minus). Los componentes se escriben o definen y se llaman con mayus. 


### Componente propio, siguiendo un componente puro


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

```
// Write your component below!
function Nombre({ nombre }) {
  return (
    <p>{nombre}</p>
  );
}

export default function HolaMundo() {
  return (
    <>
      <h1>Hola Mundo!</h1>
      <Nombre nombre={"matias"}  />
    </>
  );
} 

```


### Props con llaves y no llaves

```
<Nombre nombre='matias' />

<Cup guest={1} />

<Item
  isPacked={true}
  name="Space suit"
/>

```


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


Funciona: 

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

Hola Mundo! 

Matias


### JavaScript en JSX con llaves

JSX permite escribir marcado similar a HTML dentro de un archivo JavaScript, manteniendo la lógica de renderizado y el contenido en el mismo lugar. 

En ocasiones, es posible que desee añadir algo de lógica JavaScript o hacer referencia a una propiedad dinámica dentro de ese marcado. 

En este caso, puede usar llaves en su JSX para abrir una ventana a JavaScript: 

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


### Mas ej con props

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


### Props con children 

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




# Importación y exportación de componentes

La magia de los componentes reside en su reutilización: puedes crear componentes compuestos por otros componentes. 

Pero a medida que anidas más componentes, suele ser conveniente dividirlos en archivos diferentes. 

Esto te permite mantener tus archivos fáciles de escanear y reutilizar componentes en más lugares.

Aprenderás:

Qué es un archivo de componente raíz
Cómo importar y exportar un componente
Cuándo usar importaciones y exportaciones predeterminadas y con nombre
Cómo importar y exportar varios componentes desde un archivo
Cómo dividir componentes en varios archivos


## El archivo del componente raíz.

En el primer componente, creaste un componente de perfil y un componente de galería que lo representa.

### App.js: 

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


Estos se encuentran actualmente en un archivo de componente raíz, llamado App.js en este ejemplo. 

Sin embargo, dependiendo de su configuración, su componente raíz podría estar en otro archivo. 

Si utiliza un framework con enrutamiento basado en archivos, como Next.js, su componente raíz será diferente para cada página.


## Exportar e importar un componente

¿Qué sucede si desea cambiar la pantalla de inicio en el futuro e incluir allí una lista de libros de ciencias? 

¿O colocar todos los perfiles en otro lugar? 

### Es recomendable mover Galería y Perfil fuera del archivo raíz del componente. 

Esto los hará más modulares y reutilizables en otros archivos. 


Puede mover un componente en tres pasos:

1. Cree un nuevo archivo JS para colocar los componentes.

2. Exporte su componente de función desde ese archivo (usando las exportaciones predeterminadas o con nombre).

3. Impórtelo al archivo donde usará el componente (usando la técnica correspondiente para importar exportaciones predeterminadas o con nombre).


Aquí, tanto Perfil como Galería se han movido de App.js a un nuevo archivo llamado Gallery.js. 

Ahora puede cambiar App.js para importar Galería desde Gallery.js:


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

Observe cómo este ejemplo ahora se divide en dos archivos de componentes:

1. Gallery.js:
Define el componente Profile, que solo se usa dentro del mismo archivo y no se exporta.
Exporta el componente Gallery como exportación predeterminada.

2. App.js:
Importa Gallery como importación predeterminada desde Gallery.js.
Exporta el componente App raíz como exportación predeterminada.


Puede encontrar archivos que no tengan la extensión .js, como en el siguiente ejemplo:

```
import Gallery from './Gallery';

```

Tanto './Gallery.js' como './Gallery' funcionan con React, aunque el primero se asemeja más al funcionamiento de los módulos ES nativos.


## Default vs named export 

Hay dos formas principales de exportar valores con JavaScript: exportaciones predeterminadas y exportaciones con nombre. 

Hasta ahora, nuestros ejemplos solo han usado exportaciones predeterminadas. 

Pero puedes usar una o ambas en el mismo archivo. 

Un archivo no puede tener más de una exportación predeterminada, pero puede tener tantas exportaciones con nombre como desees.


1. Ej: Component.js 

One default export: 

```
export default
function
Button() {
  //...
}

```


2. Component.js

Multiple named exports

```
export function 
slider() {
  //...
}

export function
checkbox() {
  //...
}

```


3. MixedComponents.js

named exports and one default export

```
export function 
Avatar() {
  //...
}

export default function
FriendsList() {
  //...
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


## Exportación e importación de varios componentes desde el mismo archivo

¿Qué sucede si desea mostrar un solo perfil en lugar de una galería? 

También puede exportar el componente Perfil. 

Sin embargo, Gallery.js ya tiene una exportación predeterminada y no puede tener dos. 

Puede crear un nuevo archivo con una exportación predeterminada o agregar una exportación con nombre para Perfil. 

Un archivo solo puede tener una exportación predeterminada, pero puede tener varias exportaciones con nombre.


Para reducir la posible confusión entre las exportaciones predeterminadas y las con nombre, algunos equipos optan por usar solo un estilo (predeterminado o con nombre) o evitan mezclarlos en un mismo archivo.


Primero, exporta Profile desde Gallery.js usando una exportación con nombre (sin la palabra clave default):

```
export function Profile() {
// ...
}

```

Luego, importa Profile desde Gallery.js a App.js usando una importación con nombre (entre llaves):

```
import { Profile } from './Gallery.js';

```

Finalmente, renderiza <Profile /> desde el componente App:

```
export default function App() {
  
  return <Profile />;

}

```


Ahora Gallery.js contiene dos exportaciones: una exportación predeterminada de Gallery y una exportación con nombre de Profile. 

App.js las importa ambas. 

Prueba a editar <Profile /> por <Gallery /> y viceversa en este ejemplo:

App.js: 

```
import Gallery from './Gallery.js';
import { Profile } from './Gallery.js';

export default function App() {
  return (
    <Profile />
  );
}

```

Gallery.js:

```
export function Profile() {
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

Ahora usa una combinación de exportaciones predeterminadas y con nombre:

Gallery.js:
1. Exporta el componente Perfil como una exportación con nombre llamada Perfil.
2. Exporta el componente Galería como una exportación predeterminada.

```
export function Profile() {}

export default function Gallery() {}

```

App.js:
1. Importa Perfil como una importación con nombre llamada Perfil desde Gallery.js.
2. Importa Galería como una importación predeterminada desde Gallery.js.
3. Exporta el componente raíz de la aplicación como una exportación predeterminada.

```
import { Profile } from './Gallery.js';

import Gallery from './Gallery.js';

export default function App() {}

```


## Rs import e export 

Qué es un archivo de componente raíz
Cómo importar y exportar un componente
Cuándo y cómo usar las importaciones y exportaciones predeterminadas y con nombre
Cómo exportar varios componentes desde el mismo archivo


## Ejercicios

Dividir aún más los componentes

Actualmente, Gallery.js exporta tanto Profile como Gallery, lo cual resulta un poco confuso.

Mueva el componente Profile a su propio Profile.js y luego modifique el componente App para que renderice <Profile /> y <Gallery /> uno tras otro.

Puede usar una exportación predeterminada o con nombre para Profile, pero asegúrese de usar la sintaxis de importación correspondiente tanto en App.js como en Gallery.js. 


Profile.js:

```
export default function Profile() {}

```

App.js: 

```
import Profile from './Profile.js';
import Gallery from './Gallery.js'; 

export default function App() { 
  
  return (
    <div>
      <Profile />
      <Gallery />
    </div>
  
  ); 
}

```



# Escritura de marcado con JSX

JSX es una extensión de sintaxis para JavaScript que permite escribir marcado similar a HTML dentro de un archivo JavaScript. 

Aunque existen otras formas de escribir componentes, la mayoría de los desarrolladores de React prefieren la concisión de JSX, y la mayoría de las bases de código lo utilizan.


Aprenderás:

Por qué React combina el marcado con la lógica de renderizado

En qué se diferencia JSX de HTML

Cómo mostrar información con JSX


## JSX: Incorporando marcado en JavaScript

La web se ha basado en HTML, CSS y JavaScript. 

Durante muchos años, los desarrolladores web mantuvieron el contenido en HTML, el diseño en CSS y la lógica en JavaScript, ¡a menudo en archivos separados! 

El contenido se marcaba dentro de HTML, mientras que la lógica de la página residía por separado en JavaScript:

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

Pero a medida que la web se volvió más interactiva, la lógica determinaba cada vez más el contenido. 

¡JavaScript estaba a cargo del HTML! Por eso, en React, la lógica de renderizado y el marcado conviven en el mismo lugar: los componentes.

Sidebar.js component 

```
Sidebar() {
  if (isLoggedIn()) {
	<p>Welcome</p>
  }else{
	<Form />  
  }	
}

```

Form.js component 

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

Mantener la lógica de renderizado y el marcado de un botón juntos garantiza que estén sincronizados en cada edición. 

Por el contrario, los detalles no relacionados, como el marcado del botón y el de la barra lateral, se aíslan, lo que permite modificarlos individualmente con mayor seguridad.

Cada componente de React es una función de JavaScript que puede contener marcado que React renderiza en el navegador. 

Los componentes de React utilizan una extensión de sintaxis llamada JSX para representar dicho marcado. 

JSX se parece mucho a HTML, pero es un poco más estricto y puede mostrar información dinámica. 

La mejor manera de entender esto es convertir el marcado HTML a JSX.


Nota:

JSX y React son dos cosas distintas. 

Suelen usarse juntas, pero se pueden usar independientemente. 

JSX es una extensión de sintaxis, mientras que React es una biblioteca de JavaScript.


## HTML a JSX 

Si tenemos un HTML válido 

```
<h1>Hedy Lamarr's Todos</h1>
<img 
  src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Hedy Lamarr" 
  class="photo"
>
<ul>
    <li>Invent new traffic lights
    <li>Rehearse a movie scene
    <li>Improve the spectrum technology
</ul>

```

Si lo copiamos y pegamos en una app o componente de React, no funcionará.

App.js

```
export default function TodoList() {
  return (
    // This doesn't quite work!
    <h1>Hedy Lamarr's Todos</h1>
    <img 
      src="https://i.imgur.com/yXOvdOSs.jpg" 
      alt="Hedy Lamarr" 
      class="photo"
    >
    <ul>
      <li>Invent new traffic lights
      <li>Rehearse a movie scene
      <li>Improve the spectrum technology
    </ul>
  );
}

```

### Error 

/src/App.js: Los elementos JSX adyacentes deben estar encerrados en una etiqueta. 
¿Querías un fragmento JSX <>...</>?
(5:4)

Esto se debe a que JSX es más estricto y tiene más reglas que HTML. 

Si lees los mensajes de error anteriores, te guiarán para corregir el marcado, o puedes seguir la guía a continuación.


Nota:

La mayoría de las veces, los mensajes de error en pantalla de React te ayudarán a encontrar el problema. 

¡Consúltalos si tienes problemas!


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

### Si no desea agregar un <div> adicional a su marcado, puede escribir <> y </> en su lugar:

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

### Los Fragmentos permiten agrupar elementos sin dejar rastro en el árbol HTML del navegador.


## JSX en profundidad

¿Por qué es necesario encapsular varias etiquetas JSX?

### JSX se parece a HTML, pero en realidad se transforma en objetos JavaScript simples. 

No se pueden devolver dos objetos de una función sin encapsularlos en un array. 

Esto explica por qué tampoco se pueden devolver dos etiquetas JSX sin encapsularlas en otra etiqueta o en un Fragmento.


2. 2. Cerrar todas las etiquetas

### JSX requiere que las etiquetas se cierren explícitamente: las etiquetas autocerrables como <img> deben convertirse en <img />, y las etiquetas envolventes como <li>oranges deben escribirse como <li>oranges</li>.

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


3. 3. ¡CamelCase en casi todo!

### JSX se convierte en JavaScript y los atributos escritos en JSX se convierten en claves de objetos JavaScript. 

En tus propios componentes, a menudo querrás leer esos atributos en variables. 

Sin embargo, JavaScript tiene limitaciones en los nombres de las variables. 

Por ejemplo, sus nombres no pueden contener guiones ni ser palabras reservadas, como class.


Por eso, en React, muchos atributos HTML y SVG se escriben en camelCase. 

Por ejemplo, en lugar de stroke-width, se usa strokeWidth. 

Dado que class es una palabra reservada, en React se escribe className, cuyo nombre se corresponde con la propiedad DOM correspondiente:

React.js 

```
<img 
  src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Hedy Lamarr" 
  className="photo"
/>

```

Puedes encontrar todos estos atributos en la lista de DOM component props. 

Si te equivocas con alguno, no te preocupes: React mostrará un mensaje con una posible corrección en la consola del navegador.

Problema:

Por razones históricas, los atributos aria-* y data-* se escriben como en HTML, con guiones.


## JSX Converter

¡Convertir todos estos atributos en el marcado existente puede ser tedioso! 

Recomendamos usar un conversor para traducir tu HTML y SVG a JSX. 

Los conversores son muy útiles en la práctica, pero aun así conviene comprender qué sucede para que puedas escribir JSX con comodidad.

Este es el resultado final:

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
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}

```


## Rs JSX

Los componentes de React agrupan la lógica de renderizado con el marcado porque están relacionados.

JSX es similar a HTML, con algunas diferencias.

Puedes usar un conversor si lo necesitas.

Los mensajes de error suelen indicarte cómo corregir tu marcado.


## Ejercicios

1. Convertir HTML en JSX 

### Error 

br is a void element tag and must neither have children nor use dangerouslySetInnerHTML.

```
export default function Bio() {
  return (
    <div className="intro">
      <h1>Welcome to my website!</h1>
      <p className="summary">
        You can find my thoughts here.
        <br>
        <b>And <i>pictures</i> of scientists!</b>
        </br>
      </p>
    </div>
  );
}

```

Solución: 

```
export default function Bio() {
  return (
    <div>
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br /><br />
        <b>And <i>pictures</i></b> of scientists!
      </p>
    </div>
  );
}

```


# JavaScript en JSX con llaves

JSX permite escribir marcado similar a HTML dentro de un archivo JavaScript, manteniendo la lógica de renderizado y el contenido en el mismo lugar. 

En ocasiones, es posible que desee añadir algo de lógica JavaScript o referenciar una propiedad dinámica dentro de ese marcado. 

En este caso, puede usar llaves en su JSX para abrir una ventana a JavaScript.

Aprenderá:

Cómo pasar cadenas entre comillas
Cómo referenciar una variable JavaScript dentro de JSX con llaves
Cómo llamar a una función JavaScript dentro de JSX con llaves
Cómo usar un objeto JavaScript dentro de JSX con llaves


## Pasar cadenas entre comillas

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

Aquí, "https://i.imgur.com/7vQD0fPs.jpg" y "Gregorio Y. Zara" se pasan como cadenas.

Pero ¿qué pasa si quieres especificar dinámicamente el texto de origen (src) o alternativo (alt)? 

Puedes usar un valor de JavaScript reemplazando "and" por { y }:

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

Observa la diferencia entre className="avatar", que especifica un nombre de clase CSS "avatar" que redondea la imagen, y src={avatar}, que lee el valor de la variable de JavaScript llamada avatar. 

Esto se debe a que las llaves te permiten trabajar con JavaScript directamente en tu marcado.


## Uso de llaves: Una ventana al mundo de JavaScript

JSX es una forma especial de escribir JavaScript. 

Esto significa que es posible usar JavaScript dentro de él, con llaves { }. 

El siguiente ejemplo primero declara el nombre del científico, ```name```, y luego lo incrusta con llaves dentro de ```<h1>```:

```
export default function TodoList() {
  const name = 'Gregorio Y. Zara';
  return (
    <h1>{name}'s To Do List</h1>
  );
}

``` 

Intenta cambiar el valor del nombre de "Gregorio Y. Zara" a "Hedy Lamarr". 

¿Ves cómo cambia el título de la lista?


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

Creamos una instancia/objeto de una fecha. 

Una función para formatear un fecha recibirá una. 

Cuando la recibe empieza a transformar para formatearla. 

Creamos un objeto interna interno y al final usamos un método que recibe una fecha. 


## Dónde usar llaves

Solo se pueden usar llaves de dos maneras en JSX:

1. Como texto directamente dentro de una etiqueta JSX: 

<h1>Lista de tareas de {name}</h1> funciona, pero <{tag}>Lista de tareas de Gregorio Y. Zara</{tag}> no.

2. Como atributos inmediatamente después del signo =: 

src={avatar} leerá la variable avatar, pero src="{avatar}" pasará la cadena "{avatar}".


## Uso de "dobles llaves": CSS y otros objetos en JSX

Además de cadenas, números y otras expresiones JavaScript, también se pueden pasar objetos en JSX. 

### Los objetos también se representan con llaves, como: 

```
{ name: "Hedy Lamarr", inventos: 5 }

```

### Por lo tanto, para pasar un objeto JS en JSX, se debe encerrar el objeto entre otras llaves: 

```
person={{ name: "Hedy Lamarr", inventos: 5 }}

```

Esto se puede observar con estilos CSS en línea en JSX. 

React no requiere el uso de estilos en línea (las clases CSS funcionan bien en la mayoría de los casos). 

Pero cuando se necesita un estilo en línea, se pasa un objeto al atributo style:

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

Intenta cambiar los valores de backgroundColor y color.


Puedes ver claramente el objeto JavaScript entre llaves al escribirlo así:

```
<ul style={
  {
    backgroundColor: 'black',
    color: 'pink'
  }
}>

```

La próxima vez que veas {{ and }} en JSX, recuerda que no es más que un objeto dentro de las llaves de JSX.
Problema


Las propiedades de estilo en línea se escriben en mayúsculas y minúsculas. 

Por ejemplo: 

HTML: 

```
<ul style="background-color: black">

```

Se escribiría en un componente:

```
<ul style={{ backgroundColor: 'black' }}> 

```


## Más objetos en llaves {}

Puedes mover varias expresiones a un solo objeto y referenciarlas en tu JSX entre llaves:

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

En este ejemplo, el objeto JavaScript de persona contiene una cadena de nombre y un objeto de tema:

```
<div style={person.theme}>
  <h1>{person.name}'s Todos</h1>

```

JSX es muy minimalista como lenguaje de plantillas porque permite organizar datos y lógica usando JavaScript.


## Rs JS en JSX

Ahora ya lo sabes casi todo sobre JSX:

Los atributos JSX entre comillas se pasan como cadenas.

Las llaves te permiten incorporar lógica y variables de JavaScript a tu marcado.

Funcionan dentro de la etiqueta JSX "content" o inmediatamente después de "=" en los atributos.

{{ }} no es una sintaxis especial: es un objeto JavaScript entre llaves JSX.


## Ejercicios 

1. Corregir el error

Este código falla con un error que indica que los objetos no son válidos como elemento secundario de React.

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
      <h1>{person}'s Todos</h1>
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

### Error

Los objetos no son válidos como hijos de React (se encontró: objeto con claves {nombre, tema}). 

Si querías renderizar una colección de hijos, usa un array.


#### Errores

```

<h1>{person}'s Todos</h1>

```

person es un objeto completo. 

```
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

```

Sería person.name: 

```

```


En alt podría haber usado la clave name del objeto.
{person.name}

```
alt="Gregorio Y. Zara"

```

#### Si invocamos solo a {name} sería intentar llamar o leer a una variable


#### Solución

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

Solución:

Esto ocurre porque este ejemplo renderiza un objeto en el marcado en lugar de una cadena: <h1>{person}'s Todos</h1> intenta renderizar el objeto persona completo. 

Incluir objetos sin procesar como contenido de texto genera un error porque React no sabe cómo se deben mostrar.

Para solucionarlo, reemplaza <h1>{person}'s Todos</h1> por <h1>{person.name}'s Todos</h1>:

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


2. Extraer información en un objeto

Extraer la URL de la imagen en el objeto persona. 

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


### Solución: 

```
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }, 
  url: 'https://i.imgur.com/7vQD0fPs.jpg'
};

```

```
src={person.url}

```

Solución: 

Mueva la URL de la imagen a una propiedad llamada person.imageUrl y léala desde la etiqueta <img> usando las llaves:

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


3. Escribe una expresión entre llaves JSX.

En el objeto a continuación, la URL completa de la imagen se divide en cuatro partes: 

URL base, ID de imagen, Tamaño de imagen y extensión de archivo.


Queremos que la URL de la imagen combine estos atributos: 

URL base (siempre 'https://i.imgur.com/'), ID de imagen ('7vQD0fP'), Tamaño de imagen ('s') y extensión de archivo (siempre '.jpg'). 

Sin embargo, hay un error en la forma en que la etiqueta <img> especifica su origen.

¿Puedes solucionarlo?

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
        src="{baseUrl}{person.imageId}{person.imageSize}.jpg"
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

Para comprobar si la solución funcionó, prueba a cambiar el valor de imageSize a 'b'. 

La imagen debería cambiar de tamaño después de la edición.


Solución:
```
src={baseUrl}+{person.imageId}+{person.imageSize}.jpg

```
o

```
src=`${baseUrl}+${person.imageId}+${person.imageSize}.jpg`

```


Solución: 

Puede escribirse como src={baseUrl + person.imageId + person.imageSize + '.jpg'}.

1. { abre la expresión de JavaScript.

2. baseUrl + person.imageId + person.imageSize + '.jpg' genera la URL correcta.

3. } cierra la expresión de JavaScript.

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


#### También puedes mover esta expresión a una función separada como getImageUrl a continuación:

utils.js:

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

#### En una función jsx toma un objeto y retorna una cadena url más las propiedades de este objeto. 


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

#### ¡Las variables y funciones pueden ayudarte a mantener el marcado simple!.



# Props

Los componentes de React usan props para comunicarse entre sí. 

Cada componente padre puede pasar información a sus componentes hijos mediante props. 

Los props pueden parecer atributos HTML, pero puedes pasar cualquier valor de JavaScript a través de ellos, incluyendo objetos, arrays y funciones.

Aprenderás:

Cómo pasar props a un componente
Cómo leer props de un componente
Cómo especificar valores predeterminados para props
Cómo pasar código JSX a un componente
Cómo cambian los props con el tiempo


## Props conocidos

Las propiedades son la información que se pasa a una etiqueta JSX. 

Por ejemplo, className, src, alt, width y height son algunas de las propiedades que se pueden pasar a un <img>:

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

### Las propiedades que puedes pasar a una etiqueta <img> están predefinidas (ReactDOM cumple con el estándar HTML). 

Pero puedes pasar cualquier propiedad a tus propios componentes, como <Avatar>, para personalizarlos.


## Props a un componente 

En este código, el componente Perfil no pasa ninguna propiedad a su componente secundario, Avatar:

```
export default function Profile() {
  return (
    <Avatar />
  );
}

```


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

Intenta ajustar los valores.

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


Piensa en las propiedades como "perillas" que puedes ajustar. 

Cumplen la misma función que los argumentos para las funciones; de hecho, ¡son el único argumento de tu componente! 

Las funciones de los componentes de React aceptan un solo argumento: un objeto de propiedades.

```
function Avatar(props) {
  let person = props.person;
  let size = props.size;
  // ...
}

```

Normalmente no se necesita el objeto props completo, por lo que se desestructura en props individuales.


Problema:

No olvides el par de llaves { y } dentro de ( y ) al declarar props:

```
function Avatar({ person, size }) {
  // ...
}

```

Esta sintaxis se denomina "desestructuración" y equivale a leer las propiedades de un parámetro de función:

```
función Avatar(props) {
  let persona = props.persona;
  let tamaño = props.tamaño;
  // ...
}

```


## Valor predeterminado para una prop

Cuando no se especifica ningún valor, puede hacerlo mediante la desestructuración colocando "=" y el valor predeterminado justo después del parámetro:

```
function Avatar({ person, size = 100 }) {
  // ...
}

```

Ahora, si <Avatar person={...} /> se renderiza sin la propiedad size, el tamaño se establecerá en 100.


El valor predeterminado solo se usa si falta la propiedad size o si se pasa size={undefined}. 

Sin embargo, si se pasa size={null} o size={0}, el valor predeterminado no se usará.


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

El código repetitivo no tiene nada de malo; puede ser más legible. 

Pero a veces se valora la concisión. 

### Algunos componentes reenvían todas sus propiedades a sus componentes secundarios, como este perfil con Avatar. 

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


## Pasando JSX como children

Es común anidar las etiquetas integradas del navegador:

```
<div>
  <img />
</div>

```

A veces querrás anidar tus propios componentes de la misma manera:

```
<Card>
  <Avatar />
</Card>

```

Al anidar contenido dentro de una etiqueta JSX, el componente principal recibirá dicho contenido en una propiedad llamada "hijos". 

Por ejemplo, el componente "Card" a continuación recibirá una propiedad "hijos" establecida en <Avatar /> y la representará en un div contenedor:

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

Intenta reemplazar el <Avatar> dentro de <Card> con texto para ver cómo el componente Card puede encapsular cualquier contenido anidado. 

No necesita saber qué se está renderizando en su interior. 

Verás este patrón flexible en muchos lugares.


Puedes imaginar un componente con una propiedad "hijos" como si tuviera un "vacío" que sus componentes principales pueden rellenar con JSX arbitrario. 

A menudo usarás la propiedad "hijos" para encapsuladores visuales: paneles, cuadrículas, etc.

```
<Text />
<Avatar />

<Card>    //{children} es un espacio para js
  <Text />
  <Avatar />
<Card/>

```

### Card se transforma en un contenedor como div o <></>


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


Sin embargo, las propiedades son inmutables (un término informático que significa "inmutable"). 

Cuando un componente necesita cambiar sus propiedades (por ejemplo, en respuesta a una interacción del usuario o a nuevos datos), deberá "pedirle" a su componente padre que le pase propiedades diferentes: ¡un nuevo objeto! 

Sus propiedades antiguas se descartarán y, finalmente, el motor de JavaScript recuperará la memoria ocupada por ellas.


No intente "cambiar propiedades". 

Cuando necesite responder a la entrada del usuario (como cambiar el color seleccionado), deberá "establecer el estado", lo cual puede aprender en Estado: La memoria de un componente.


## Rs props

Resumen

1. Para pasar props, añádelas al JSX, igual que con los atributos HTML.

2. Para leer props, usa la sintaxis de desestructuración de la función Avatar({ person, size }).

3. Puedes especificar un valor predeterminado como size = 100, que se usa para props faltantes o indefinidos.

4. Puedes reenviar todos los props con la sintaxis de propagación JSX <Avatar {...props} />, ¡pero no la uses en exceso!

5. Los JSX anidados como <Card><Avatar /></Card> aparecerán como props secundarios del componente Card.

6. Los props son instantáneas de solo lectura en el tiempo: cada renderizado recibe una nueva versión de los props.

7. No puedes cambiar los props. Cuando necesites interactividad, deberás establecer el estado.


## Ejercicios

1. Extraer un componente

Este componente Galería contiene un marcado muy similar para dos perfiles. 

Extraiga un componente Perfil para reducir la duplicación. 

Deberá elegir qué propiedades pasarle.

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

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b> 
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b> 
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}

```

Solución: 

Componer:

```
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b> 
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section>

```

Profile.js 

```
import { getImageUrl } from './utils.js';

export default function Profile( ) {
	
  return(
    
    <div>
      <Avatar 
        person={
          {name: "Marie Curie",
          imageId: "szV5sdG", 
          profession: "physicist and chemist",  
          awards: 4,
          Prize: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)", 
          discovered: "polonium (chemical element)"}
        }
        size={100}
      />  
      //...
    </div>
 
  );

}

```

Avatar.js

```
import { getImageUrl } from './utils.js';


export default Avatar( {name, size, profession, awards, prize, discovered} ) {
  
  return(
  
    <section> 
      <h2>{name}</h1>
      <img
        className="avatar"
        src={getImageUrl('szV5sdG')} //cambiar utils
        alt={name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: {profession}</b> 
        </li>
        <li>
          <b>Awards: {awars} </b> 
          {prize}
        </li>
        <li>
          <b>Discovered: {discovered}</b>
        </li>
      </ul>      
    </section>
  ); 
}

```


o:

Avatar.js

```
import { getImageUrl } from './utils.js';

export default Avatar( {person, size} ) {
  
  return(
  
    <section> 
      <h2>{person.name}</h1>
      <img
        className="avatar"
        src={getImageUrl(person)} 
        alt={person.name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: {person.profession}</b> 
        </li>
        <li>
          <b>Awards: {person.awars} </b> 
        </li>
        <li>
          <b>Discovered: {person.discovered}</b>
        </li>
      </ul>      
    </section>
  ); 
}

```


Solución:

Pista: 

Empieza extrayendo el marcado de uno de los científicos. Luego, encuentra las piezas que no coinciden con el segundo ejemplo y configúralas mediante propiedades.


En esta solución, el componente Perfil acepta varias propiedades: imageId (una cadena), name (una cadena), profession (una cadena), awards (una matriz de cadenas), discovery (una cadena) y imageSize (un número).

Tenga en cuenta que la propiedad imageSize tiene un valor predeterminado, por lo que no se pasa al componente.


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

Aunque la sintaxis parece ligeramente diferente porque estás describiendo propiedades de un objeto JavaScript en lugar de una colección de atributos JSX, estos ejemplos son en su mayoría equivalentes y puedes elegir cualquiera de los enfoques.


2. Ajustar el tamaño de la imagen según una propiedad

En este ejemplo, Avatar recibe una propiedad numérica de tamaño que determina el ancho y la altura de <img>. 

La propiedad de tamaño se establece en 40 en este ejemplo. 

Sin embargo, si abre la imagen en una nueva pestaña, notará que la imagen es más grande (160 píxeles). 

El tamaño real de la imagen se determina según el tamaño de miniatura solicitado.


Cambie el componente Avatar para solicitar el tamaño de imagen más cercano según la propiedad de tamaño. 

Específicamente, si el tamaño es menor de 90, pase 's' (pequeño) en lugar de 'b' (grande) a la función getImageUrl. 

Verifique que los cambios funcionen renderizando avatares con diferentes valores de la propiedad de tamaño y abriendo las imágenes en una nueva pestaña.

Utils.js

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

App.js:

```
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

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


Solución:

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

Las propiedades le permiten encapsular una lógica como esta dentro del componente Avatar (y cambiarla más tarde si es necesario) para que todos puedan usar el componente <Avatar> sin pensar en cómo se solicitan y redimensionan las imágenes.


3. Pasando JSX en una propiedad children

Extraiga un componente "Card" del marcado a continuación y use la propiedad children para pasarle diferentes JSX:

App.js

```
export default function Profile() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h1>Photo</h1>
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h1>About</h1>
          <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
        </div>
      </div>
    </div>
  );
}

```


```
function Card ( {children} ) { 

  return(){
    <div className="card">
      {children} 
	</div>  
  };
	
}

```


Solución: 

Cualquier JSX que coloque dentro de la etiqueta de un componente se pasará como propiedad children de ese componente.

Usar el componente Tarjeta en ambos lugares:

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





