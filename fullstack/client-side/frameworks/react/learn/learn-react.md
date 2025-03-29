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


### 1. 













# Un Componente 


