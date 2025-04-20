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
      <Nombre nombre="matias"  />
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


3. ¡CamelCase en casi todo!

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

Puedes usar un valor de JavaScript con { y }:

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

La próxima vez que veas {{ }} en JSX, recuerda que no es más que un objeto dentro de las llaves de JSX.

Problema:

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



# Renderizado Condicional

Tus componentes a menudo necesitarán mostrar diferentes elementos según las condiciones. 

En React, puedes renderizar JSX condicionalmente usando sintaxis JavaScript como sentencias if, && y operadores ?.

Aprenderás:

Cómo devolver diferentes JSX según una condición.
Cómo incluir o excluir condicionalmente un fragmento de JSX.
Atajos comunes de sintaxis condicional que encontrarás en las bases de código de React.


## Retorno condicional de JSX

Supongamos que tiene un componente PackingList que representa varios elementos, que pueden marcarse como empaquetados o no:

App.js

```
function Item({ name, isPacked }) {
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

Cuando llaman a Item retorna un elemento de lista. 

Esperá que le pasen valores para name que estará en li e isPacked. 


Observe que algunos componentes de elemento tienen la propiedad "isPacked" establecida en "true" en lugar de "false". 

Se desea agregar una marca de verificación (✅) a los elementos empaquetados si "isPacked" es "true".


Puede escribir esto como una sentencia if/else de la siguiente manera:

```
if (isPacked) {
  return <li className="item">{name} ✅</li>;
}
return <li className="item">{name}</li>;

```

(Si isPacked es verdaderó retorna li...
No hay un else, pero si no es verdaderó pasará el if y retornará solo el nombre.)


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

Intenta editar lo que se devuelve en ambos casos y observa cómo cambia el resultado.


Observa cómo creas lógica de ramificación con las sentencias if y return de JavaScript. 

En React, el flujo de control (como las condiciones) lo gestiona JavaScript.


## Retorno condicional de nada con null (no hagas nada)

En algunas situaciones, no querrás renderizar nada. 

Por ejemplo, supongamos que no quieres mostrar elementos empaquetados. 

Un componente debe devolver algo. 

En este caso, puedes devolver null:

```
if (isPacked) {
  return null;
}
return <li className="item">{name}</li>;

```

(Si está empaquetado (true), no hagas o retornes nada. 

En los demás casos retornará li con un valor de name)


Si isPacked es verdadero, el componente no devolverá nada (null). 

De lo contrario, devolverá JSX para renderizar.

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

En la práctica, no es común que un componente devuelva un valor nulo, ya que podría sorprender al desarrollador que intenta renderizarlo. 

Más a menudo, se incluye o excluye condicionalmente el componente en el JSX del componente principal. 


## Inclusión condicional de JSX

En el ejemplo anterior, controlaste qué árbol JSX (si lo hubiera) devolvería el componente. 

Quizás ya hayas notado cierta duplicación en la salida del renderizado:

```
<li className="item">{name} ✅</li>

```

Similar a: 

```
<li className="item">{name}</li>

```

### Ambas ramas condicionales devuelven <li className="item">...</li>:

```
if (isPacked) {
  return <li className="item">{name} ✅</li>;
}
return <li className="item">{name}</li>;

```

Si bien esta duplicación no es perjudicial, podría dificultar el mantenimiento de tu código. 

¿Qué sucede si quieres cambiar el nombre de la clase? 

¡Tendrías que hacerlo en dos partes del código! 

En tal caso, podrías incluir condicionalmente algo de JSX para que tu código sea más práctico.


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


## Operador lógico AND (&&)

Otro atajo común que encontrarás es el operador lógico AND (&&) de JavaScript. 

Dentro de los componentes de React, suele aparecer cuando se desea renderizar JSX cuando la condición es verdadera, o no renderizar nada en caso contrario. 

Con &&, se puede renderizar condicionalmente la marca de verificación solo si isPacked es verdadero:

```
return (
  <li className="item">
    {name} {isPacked && '✅'}
  </li>
);

```

### Esto se puede interpretar como: «Si está empaquetado, entonces (&&) se representa la marca de verificación; de lo contrario, no se representa nada».

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
 
Una expresión && de JavaScript devuelve el valor de su lado derecho (en nuestro caso, la marca de verificación) si el lado izquierdo (nuestra condición) es verdadero. 

### Pero si la condición es falsa, toda la expresión se convierte en falsa. 

React considera falso como un "vacío" en el árbol JSX, al igual que nulo o indefinido, y no renderiza nada en su lugar.


Error:

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


## Rs renderizado condicional 

Resumen

En React, la lógica de ramificación se controla con JavaScript.

Puedes devolver una expresión JSX condicionalmente con una sentencia if.

Puedes guardar condicionalmente un JSX en una variable y luego incluirlo dentro de otro JSX usando llaves.

En JSX, {cond ? <A /> : <B />} significa “si cond, renderiza <A />, de lo contrario, <B />”.

En JSX, {cond && <A />} significa “si cond, renderiza <A />, de lo contrario, nada”.

Los atajos son comunes, pero no es necesario usarlos si prefieres un if simple.


## Ejercicios

1. Mostrar un icono para elementos incompletos con ?:

Usar el operador condicional (cond ? a : b) para mostrar un ❌ si isPacked no es verdadero.

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

Solución: 

```
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked ? '✅' : '❌'}
    </li>
  );
}

```


2. Muestra la importancia del elemento con &&

En este ejemplo, cada elemento recibe una propiedad de importancia numérica. 

Usa el operador && para representar "(Importance: X)" en italics, pero solo para elementos con importancia distinta de cero. 

Tu lista de elementos debería quedar así:

Space suit (Importance: 9)
Helmet with a golden leaf
Photo of Tam (Importance: 6)

¡No olvides dejar un espacio entre las dos etiquetas! 

```
function Item({ name, importance }) {
  return (
    <li className="item">
      {name}
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

Solución

```
function Item({ name, importance }) {
  return (
    <li className="item">
      {name} {importance != 0  && (<i>importance = {importance}</i>)}
    </li>
  );
}

```


Solución: 

Debería funcionar: 

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


3. Refactorizar una serie de condiciones ?: a variables if y ?:

Este componente Drink utiliza una serie de condiciones ?: para mostrar información diferente según si la propiedad name es "té" o "café".

El problema es que la información sobre cada bebida se distribuye en varias condiciones. 

Refactorice este código para usar una sola sentencia if en lugar de tres condiciones ?:.

```
function Drink({ name }) {
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{name === 'tea' ? 'leaf' : 'bean'}</dd>
        <dt>Caffeine content</dt>
        <dd>{name === 'tea' ? '15–70 mg/cup' : '80–185 mg/cup'}</dd>
        <dt>Age</dt>
        <dd>{name === 'tea' ? '4,000+ years' : '1,000+ years'}</dd>
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

Una vez que hayas refactorizado el código para usarlo, ¿tienes más ideas sobre cómo simplificarlo?


Solución: 

Hay muchas maneras de hacerlo, pero aquí hay un punto de partida:

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



# Renderizar listas 

A menudo querrás mostrar varios componentes similares de una colección de datos. 

Puedes usar los métodos de matriz de JavaScript para manipular una matriz de datos. 

En esta página, usarás filter() y map() con React para filtrar y transformar tu matriz de datos en una matriz de componentes.

Aprenderás:

Cómo renderizar componentes de una matriz usando map() de JavaScript
Cómo renderizar solo componentes específicos usando filter() de JavaScript
Cuándo y por qué usar claves de React


## Representación de datos desde arrays

Supongamos que tiene una lista de contenido.

```
<ul>
  <li>Creola Katherine Johnson: matemática</li>
  <li>Mario José Molina-Pasquel Henríquez: químico</li>
  <li>Mohammad Abdus Salam: físico</li>
  <li>Percy Lavon Julian: químico</li>
  <li>Subrahmanyan Chandrasekhar: astrofísico</li>
</ul>

```

### La única diferencia entre esos elementos de lista es su contenido, sus datos. 

A menudo, necesitará mostrar varias instancias del mismo componente con diferentes datos al crear interfaces: desde listas de comentarios hasta galerías de imágenes de perfil. 

### En estos casos, puede almacenar esos datos en objetos y arrays de JavaScript y usar métodos como map() y filter() para representar listas de componentes a partir de ellos.


### Generar una lista de elementos a partir de una matriz:

1. Mueve los datos a una matriz:

```
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

```

2. Asigne los miembros de la clase personas a una nueva matriz de nodos JSX, listItems:

```
const listItems = people.map(person => <li>{person}</li>);

```

3. Devuelve los elementos de lista de tu componente envueltos en un <ul>:

```
return <ul>{listItems}</ul>;

```


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

### Observe que el sandbox anterior muestra un error de consola:

```
Advertencia: Cada elemento secundario de una lista debe tener una propiedad "key" única.

```

Aprenderá a corregir este error más adelante en esta página. 

Antes de continuar, añadamos estructura a sus datos.


## Filtrado de matrices de elementos

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

### Supongamos que busca una forma de mostrar solo las personas cuya profesión es 'químico'. 

### Puede usar el método filter() de JavaScript para devolver solo esas personas. 

### Este método toma un array de elementos, los pasa por una "prueba" (una función que devuelve verdadero o falso) y devuelve un nuevo array con solo los elementos que pasaron la prueba (devolvieron verdadero).


Solo necesita los elementos cuya profesión es 'químico'. 

La función "prueba" para esto se ve así: (persona) => persona.profesión === 'químico'. 

Aquí se explica cómo configurarlo:


1. Crea una nueva matriz de solo personas "químico", químicos, llamando a filter() en las personas filtrando por persona.profesión === 'químico':

```
const chemists = people.filter(person =>
  person.profession === 'chemist'
);

```

2. Ahora el mapa sobre los químicos:

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

3. Por último, devuelve los listItems de tu componente:

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

### Advertencia en Consola: funciona pero

```
Cada elemento secundario de una lista debe tener una propiedad "key" única.

Consulta el método de renderizado de `List`. Consulta https://react.dev/link/warning-keys para más información.

```

### Error

Error

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


### Tenemos dos funciones flechas con una sola sentencia pero con varios elementos. 


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


## En profundidad: Visualización de varios nodos DOM para cada elemento de la lista

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


## Dónde obtener tu clave

Diferentes fuentes de datos proporcionan diferentes fuentes de claves:

1. Datos de una base de datos: Si tus datos provienen de una base de datos, puedes usar las claves/ID de la base de datos, que son únicas por naturaleza.

2. Datos generados localmente: Si tus datos se generan y almacenan localmente (por ejemplo, notas en una aplicación para tomar notas), usa un contador incremental, crypto.randomUUID() o un paquete como uuid al crear elementos.


## Reglas de las claves

1. Las claves deben ser únicas entre los nodos hermanos. Sin embargo, se pueden usar las mismas claves para nodos JSX en diferentes matrices.

2. Las claves no deben cambiar, ya que esto anularía su propósito. No las genere durante el renderizado.


## ¿Por qué React necesita claves?

Imagina que los archivos de tu escritorio no tuvieran nombre. 

En su lugar, te referirías a ellos por su orden: el primer archivo, el segundo archivo, y así sucesivamente. 

Podrías acostumbrarte, pero al eliminar un archivo, se volvería confuso. 

El segundo archivo se convertiría en el primero, el tercero en el segundo, y así sucesivamente.


### Los nombres de archivo en una carpeta y las claves JSX en un array tienen una función similar. 

Nos permiten identificar de forma única un elemento entre sus hermanos. 

Una clave bien elegida proporciona más información que la posición dentro del array. 

### Incluso si la posición cambia debido a la reordenación, la clave permite a React identificar el elemento durante su ciclo de vida.


## Error

### Podrías tener la tentación de usar el índice de un elemento en el array como clave. 

### De hecho, eso es lo que React usará si no especificas ninguna clave. 

Sin embargo, el orden en que renderizas los elementos cambiará con el tiempo si se inserta, se elimina o se reordena el array. 

Usar el índice como clave suele provocar errores sutiles y confusos.


De igual forma, no generes claves sobre la marcha, por ejemplo, con key={Math.random()}. 

Esto provocará que las claves nunca coincidan entre renderizaciones, lo que provocará que todos tus componentes y el DOM se vuelvan a crear cada vez. 

Esto no solo es lento, sino que también perderá cualquier entrada del usuario dentro de los elementos de la lista. 

En su lugar, usa un ID estable basado en los datos.


### Ten en cuenta que tus componentes no recibirán key como propiedad. 

React solo la usa como una pista. 

### Si tu componente necesita un ID, debes pasarlo como una propiedad independiente: <Profile key={id} userId={id} />.


## Rs renderizado de listas

Aprendiste:

Cómo mover datos de componentes a estructuras de datos como arrays y objetos.
Cómo generar conjuntos de componentes similares con map() de JavaScript.
Cómo crear arrays de elementos filtrados con filter() de JavaScript.
Por qué y cómo establecer una clave en cada componente de una colección para que React pueda rastrearlos incluso si su posición o datos cambian.


## Ejercicios

1. Dividir una lista en dos

Este ejemplo muestra una lista de todas las personas.


Modifíquela para mostrar dos listas separadas, una tras otra: Químicos y Todos los demás. 

Como antes, puede determinar si una persona es químico comprobando si person.profession === 'chemist'.

 
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


Solución:

Químicos: 

## Lista de químicos

### 1. Creamos un array de químicos pasando filter a los datos de personas (people)

### Al param local person le asignamos/guardamos la propiedad profession de people.

### Usamos profession. 

```
const chemists = people.filter(person =>
  person.profession === 'chemist'
);

```

## 2. Mostrar lista de químicos

chemist.id ?

```
const chemistList = chemists.map(person =>
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

```

### 3. Retornar la lista de químicos:

```
return(
  <article>
    <h1>Scientists</h1>
    <ul>{chemistList}</ul>
  </article>
  
);

```


## lista de lo demás: 
 
```
const everyoneElse = people.filter(person =>
  person.profession !== 'chemist'
);

```

```
const everyone = everyoneElse.map(person =>
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

```

```
return(
  <article>
    <h1>Scientists</h1>
    <ul>{everyone}</ul>
  </article>
  
);

```


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



### Fragment en item func o component o en App

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

Teníamos:

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


2. Listas anidadas en un componente

¡Crea una lista de recetas a partir de este array! 

Para cada receta del array, muestra su nombre como <h2> y enumera sus ingredientes como <ul>.

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

Apps.js

```
import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
    </div>
  );
}

```


Solución: 

## recetas

### 1. Creamos un array de químicos pasando filter a los datos de personas (people)

### Al param local person le asignamos/guardamos la propiedad profession de people.

### Usamos profession. 

```
const recipe = recipes.filter(recipe =>
  recipe.id; 
);

```

## 2. Mostrar lista de recetas

```
const recipeList = recipe.map(recipe =>
  <div>
    <h1>Recipes</h1>
    <ul>
      <h1>{recipe.id}</h1>
      
      {recipeList}
    </ul>
  </div>
);

```

### 3. recetas:

```
return(
  <article>
    <h1>Recipes</h1>
    <ul>{recipeList}</ul>
  </article>
  
);

```


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


3. Extracción de un componente de lista

Este componente RecipeList contiene dos llamadas de mapa anidadas. 

Para simplificarlo, extraiga un componente Recipe que acepte las propiedades id, name e Ingredients. 

¿Dónde se coloca la clave externa y por qué?

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

Solución:

Puedes copiar y pegar el JSX del mapa externo en un nuevo componente Receta y devolverlo. 

Luego, puedes cambiar ```receit.name``` por ```name```, ```receit.id``` por ```id```, etc., y pasarlos como propiedades a la Receta:

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

### Aquí, <Recipe {...recipe} key={recipe.id} /> es un atajo de sintaxis que indica "pasar todas las propiedades del objeto receta como props al componente Receta". 

También se puede escribir cada prop explícitamente: <Recipe id={recipe.id} name={recipe.name} Ingredients={recipe.ingredients} key={recipe.id} />.


Ten en cuenta que la clave se especifica en el propio <Recipe>, no en el <div> raíz devuelto por Receta. 

Esto se debe a que esta clave se necesita directamente dentro del contexto del array circundante. 

Anteriormente, se tenía un array de <div>, por lo que cada uno necesitaba una clave, pero ahora se tiene un array de <Recipe>. 

En otras palabras, al extraer un componente, no olvides dejar la clave fuera del JSX que copias y pegas.


4. Lista con separador

Este ejemplo reproduce un famoso haiku de Tachibana Hokushi, con cada línea encerrada en una etiqueta <p>. 

Su tarea consiste en insertar un separador <hr /> entre cada párrafo. 

La estructura resultante debería verse así:

```
<article>
  <p>I write, erase, rewrite</p>
  <hr />
  <p>Erase again, and then</p>
  <hr />
  <p>A poppy blooms.</p>
</article>

```

Un haiku solo contiene tres líneas, pero tu solución debería funcionar con cualquier número de líneas. 

Ten en cuenta que los elementos <hr /> solo aparecen entre los elementos <p>, no al principio ni al final.


Apps.js

```
const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) =>
        <p key={index}>
          {line}
        </p>
      )}
    </article>
  );
}

```

Este es un caso raro en el que el índice como clave es aceptable porque las líneas de un poema nunca se reordenarán).

Necesitarás convertir el mapa en un bucle manual o utilizar un Fragmento.


Puede escribir un bucle manual, insertando <hr /> y <p>...</p> en la matriz de salida a medida que avanza.

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

Algunas funciones de JavaScript son puras. 

Las funciones puras solo realizan un cálculo y nada más. 

Al escribir tus componentes estrictamente como funciones puras, puedes evitar toda una serie de errores desconcertantes y comportamientos impredecibles a medida que tu base de código crece. 

Sin embargo, para obtener estos beneficios, debes seguir algunas reglas.


Aprenderás:

Qué es la pureza y cómo te ayuda a evitar errores

Cómo mantener los componentes puros manteniendo los cambios fuera de la fase de renderizado

Cómo usar el Modo Estricto para detectar errores en tus componentes


## Pureza: Componentes como fórmulas

En informática (y especialmente en el mundo de la programación funcional), una función pura es una función con las siguientes características:

1. Se ocupa de sus propios asuntos. 

### No modifica ningún objeto ni variable existente antes de ser llamada.

2. Mismas entradas, misma salida. 

### Dadas las mismas entradas, una función pura siempre debería devolver el mismo resultado.

 
Quizás ya conozcas un ejemplo de funciones puras: las fórmulas matemáticas.

Considera esta fórmula matemática: y = 2x.

Si x = 2, entonces y = 4. Siempre.

Si x = 3, entonces y = 6. Siempre.

Si x = 3, y no será a veces 9, -1 o 2,5, dependiendo de la hora del día o del estado del mercado de valores.

Si y = 2x y x = 3, y siempre será 6.

### Si convirtiéramos esto en una función de JavaScript, se vería así:

y = 2x

```
function double(number) {
  return 2 * number;
}

```
y = 2x
double(number) = 2 * number


En el ejemplo anterior, double es una función pura. 

Si se le pasa 3, devolverá 6. Siempre.


React está diseñado en torno a este concepto. 

### React asume que cada componente que escribes es una función pura. 

Esto significa que los componentes de React que escribes siempre deben devolver el mismo JSX con las mismas entradas:

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

### Al pasar drinkers={2} a la Receta, devolverá un JSX con 2 tazas de agua. Siempre.

### Si pasa drinkers={4}, devolverá un JSX con 4 tazas de agua. Siempre.

Igual que una fórmula matemática.


Puedes pensar en tus componentes como recetas: si las sigues y no añades nuevos ingredientes durante el proceso de cocción, obtendrás el mismo plato siempre. 

Ese "plato" es el JSX que el componente sirve a React para renderizar.


## Efectos secundarios: consecuencias (no) deseadas

El proceso de renderizado de React debe ser siempre puro. 

### Los componentes solo deben devolver su JSX y no modificar ningún objeto o variable existente antes del renderizado, ya que esto los volvería impuros.

### Aquí hay un componente que infringe esta regla.

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

### Este componente lee y escribe una variable de invitado declarada externamente. 

### Esto significa que llamarlo varias veces producirá un JSX diferente. 

### Actualiza la variable global en cada llamada. 

Además, si otros componentes leen "invitado", también producirán un JSX diferente, dependiendo de cuándo se renderizaron. 

Esto no es predecible.


### Volviendo a nuestra fórmula y = 2x, incluso si x = 2, no podemos confiar en que y = 4. 

### Nuestras pruebas podrían fallar, nuestros usuarios quedarían desconcertados, aviones caerían del cielo; puedes ver cómo esto generaría errores confusos.


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

### Ahora tu componente es puro, ya que el JSX que devuelve solo depende de la propiedad {guest}.


### En general, no deberías esperar que tus componentes se rendericen en un orden específico. 

No importa si llamas a y = 2x antes o después de y = 5x: ambas fórmulas se resolverán independientemente. 

### De igual manera, cada componente debe pensar por sí mismo y no intentar coordinarse ni depender de otros durante el renderizado. 

El renderizado es como un examen escolar: ¡cada componente debe calcular el JSX por sí mismo!


## En profundidad: Detectando cálculos impuros con el Modo Estricto

### Aunque quizás aún no los hayas usado todos, en React hay tres tipos de entradas que puedes leer durante la renderización: propiedades, estado y contexto. 

Siempre debes tratar estas entradas como de solo lectura.


Para cambiar algo en respuesta a la entrada del usuario, debes establecer el estado en lugar de escribir en una variable. 

Nunca debes modificar variables u objetos preexistentes mientras tu componente se renderiza.


### React ofrece un "Modo Estricto" en el que llama a la función de cada componente dos veces durante el desarrollo. 

### Al llamar a las funciones del componente dos veces, el Modo Estricto ayuda a detectar componentes que infringen estas reglas.


### Observa cómo el ejemplo original mostraba "Invitado n.° 2", "Invitado n.° 4" y "Invitado n.° 6" en lugar de "Invitado n.° 1", "Invitado n.° 2" y "Invitado n.° 3". 

### La función original era impura, por lo que al llamarla dos veces se interrumpía. 

### Sin embargo, la versión pura corregida funciona incluso si la función se llama dos veces cada vez. 

### Las funciones puras solo calculan, por lo que llamarlas dos veces no cambiará nada; al igual que llamar a double(2) dos veces no cambia el valor devuelto, y resolver y = 2x dos veces no cambia el valor de y.

Mismas entradas, mismas salidas. Siempre.


El modo estricto no tiene efecto en producción, por lo que no ralentizará la aplicación para los usuarios. 

Para activar el modo estricto, puedes encapsular tu componente raíz en <React.StrictMode>. 

Algunos frameworks lo hacen por defecto.


## Mutación local: El pequeño secreto de tu componente

En el ejemplo anterior, el problema residía en que el componente modificaba una variable preexistente durante el renderizado. 

Esto se suele llamar "mutación" para que suene un poco más intimidante. 

### Las funciones puras no mutan variables fuera de su ámbito ni objetos creados antes de la llamada; ¡eso las convierte en impuras!


### Sin embargo, es perfectamente posible modificar variables y objetos recién creados durante el renderizado. 

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


## Dónde se pueden generar efectos secundarios

Si bien la programación funcional se basa en gran medida en la pureza, en algún momento, algo tiene que cambiar. 

¡Ese es precisamente el propósito de la programación! 

### Estos cambios (actualizar la pantalla, iniciar una animación, cambiar los datos) se denominan efectos secundarios. 

### Son cosas que ocurren "inmediatamente", no durante el renderizado.


### En React, los efectos secundarios suelen pertenecer a los controladores de eventos. 

Los controladores de eventos son funciones que React ejecuta al realizar alguna acción, por ejemplo, al hacer clic en un botón. 

### Aunque los controladores de eventos se definen dentro del componente, ¡no se ejecutan durante el renderizado! 

Por lo tanto, no es necesario que sean puros.


### Si has agotado todas las demás opciones y no encuentras el controlador de eventos adecuado para tu efecto secundario, puedes adjuntarlo al JSX devuelto con una llamada a useEffect en el componente. 

Esto le indica a React que lo ejecute más tarde, después del renderizado, cuando los efectos secundarios estén permitidos. 

### Sin embargo, este enfoque debería ser tu último recurso.


### Siempre que sea posible, intenta expresar tu lógica únicamente con el renderizado. 

¡Te sorprenderá lo lejos que esto te puede llevar!


## En profundidad: ¿Por qué React se preocupa por la pureza?

Escribir funciones puras requiere práctica y disciplina. 

Pero también abre oportunidades maravillosas:

1. Tus componentes podrían ejecutarse en un entorno diferente, por ejemplo, ¡en el servidor! 

Dado que devuelven el mismo resultado para las mismas entradas, un componente puede atender muchas solicitudes de usuario.


2. Puedes mejorar el rendimiento omitiendo la renderización de componentes cuyas entradas no han cambiado. 

Esto es seguro porque las funciones puras siempre devuelven los mismos resultados, por lo que es seguro almacenarlas en caché.


3. Si algún dato cambia durante la renderización de un árbol de componentes profundo, React puede reiniciar la renderización sin perder tiempo en finalizar el renderizado obsoleto. 

La pureza permite detener el cálculo en cualquier momento.

Cada nueva funcionalidad de React que desarrollamos aprovecha la pureza. 

Desde la obtención de datos hasta las animaciones y el rendimiento, mantener los componentes puros libera el poder del paradigma de React.


## Rs componentes puros

Un componente debe ser puro, es decir:

	1. Se ocupa de sus propios asuntos. No debe modificar ningún objeto ni variable existente antes del renderizado.

	2. Mismas entradas, misma salida. Con las mismas entradas, un componente siempre debe devolver el mismo JSX.

### El renderizado puede ocurrir en cualquier momento, por lo que los componentes no deben depender de la secuencia de renderizado de los demás.

### No debe mutar ninguna de las entradas que sus componentes utilizan para el renderizado. Esto incluye propiedades, estado y contexto. Para actualizar la pantalla, "establezca" el estado en lugar de mutar objetos preexistentes.

### Procure expresar la lógica de su componente en el JSX que devuelve. Cuando necesite "cambiar cosas", generalmente querrá hacerlo en un controlador de eventos. Como último recurso, puede usar useEffect.

Escribir funciones puras requiere algo de práctica, pero libera el poder del paradigma de React.


## Ejercicios

1. Reparar un reloj roto

Este componente intenta configurar la clase CSS de <h1> como "noche" entre la medianoche y las seis de la mañana, y como "día" en el resto de los horarios. 

Sin embargo, no funciona. 

¿Puedes arreglar este componente?


Puedes comprobar si tu solución funciona cambiando temporalmente la zona horaria del ordenador. 

Cuando la hora actual esté entre la medianoche y las seis de la mañana, el reloj debería tener los colores invertidos.


La renderización es un cálculo; no debería intentar "hacer" cosas. 

¿Podrías expresar la misma idea de otra manera?


Clock.js:

```
export default function Clock({ time }) {
  let hours = time.getHours();
  if (hours >= 0 && hours <= 6) {
    document.getElementById('time').className = 'night';
  } else {
    document.getElementById('time').className = 'day';
  }
  return (
    <h1 id="time">
      {time.toLocaleTimeString()}
    </h1>
  );
}

```


Solución:

### Puedes arreglar este componente calculando el className e incluyéndolo en la salida de renderizado:

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


2. Corregir un perfil defectuoso

Dos componentes de perfil se muestran uno al lado del otro con datos diferentes. 

Pulsa "Contraer" en el primer perfil y luego "Expandir". 

Observarás que ambos perfiles ahora muestran a la misma persona. 

Esto es un error.

Encuentra la causa del error y corrígela.


Profile.js

```
import Panel from './Panel.js';
import { getImageUrl } from './utils.js';

let currentPerson;

export default function Profile({ person }) {
  currentPerson = person;
  return (
    <Panel>
      <Header />
      <Avatar />
    </Panel>
  )
}

function Header() {
  return <h1>{currentPerson.name}</h1>;
}

function Avatar() {
  return (
    <img
      className="avatar"
      src={getImageUrl(currentPerson)}
      alt={currentPerson.name}
      width={50}
      height={50}
    />
  );
}

```

 
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
  )
}

```

Solución: 

El código con errores está en Profile.js. 

¡Asegúrate de leerlo de principio a fin!


El problema radica en que el componente Perfil escribe en una variable preexistente llamada currentPerson, y los componentes Encabezado y Avatar leen de ella. 

Esto hace que los tres sean impuros y difíciles de predecir.

Para corregir el error, elimine la variable currentPerson. 

En su lugar, pase toda la información de Perfil a Encabezado y Avatar mediante propiedades. 

Deberá agregar una propiedad "persona" a ambos componentes y pasarla a todos los niveles.


Profile.js

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

### Recuerda que React no garantiza que las funciones de los componentes se ejecuten en un orden específico, por lo que no es posible comunicarse entre ellas mediante variables. 

### Toda comunicación debe realizarse mediante propiedades.


3. Soluciona una bandeja de historias defectuosa

El director ejecutivo de tu empresa te pide que añadas "historias" a tu aplicación de reloj online, y no puedes negarte. 

Creaste un componente StoryTray que acepta una lista de historias, seguida de un marcador de posición "Crear historia".


Implementaste el marcador de posición "Crear historia" insertando una historia falsa más al final de la matriz de historias que recibes como apoyo. 

Pero, por alguna razón, "Crear historia" aparece más de una vez. 

Soluciona el problema.


StoryTray.js

```
export default function StoryTray({ stories }) {
  stories.push({
    id: 'create',
    label: 'Create Story'
  });

  return (
    <ul>
      {stories.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}

```


Solución: 

### Observe cómo, cada vez que se actualiza el reloj, se añade "Crear historia" dos veces. 

### Esto indica que hay una mutación durante el renderizado: el modo estricto llama a los componentes dos veces para que estos problemas sean más evidentes.


La función StoryTray no es pura. 

### Al llamar a "push" en el array de historias recibido (¡una propiedad!), está mutando un objeto que se creó antes de que StoryTray comenzara a renderizar. 

Esto genera errores y dificulta su predicción.


La solución más sencilla es no modificar el array y renderizar "Crear historia" por separado.

StoryTray.js

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



# UI como Árbol


Tu aplicación React está tomando forma con muchos componentes anidados. 

¿Cómo gestiona React la estructura de componentes de tu aplicación?


React, y muchas otras bibliotecas de interfaz de usuario, modelan la interfaz de usuario como un árbol. 

Pensar en tu aplicación como un árbol es útil para comprender la relación entre los componentes. 

### Esta comprensión te ayudará a depurar conceptos futuros como el rendimiento y la gestión de estados.


Aprenderás:

Cómo React "ve" las estructuras de los componentes

Qué es un árbol de renderizado y para qué sirve

Qué es un árbol de dependencias de módulos y para qué sirve


## Tu interfaz de usuario como un árbol

Los árboles son un modelo de relación entre elementos, y la interfaz de usuario suele representarse mediante estructuras de árbol. 

Por ejemplo, los navegadores utilizan estructuras de árbol para modelar HTML (DOM) y CSS (CSSOM). 

Las plataformas móviles también utilizan árboles para representar la jerarquía de vistas.

```
Component A  React     A     React Dom       Page
Component B   ->     B   C      ->      tree of components
Component C

```

React crea un árbol de interfaz de usuario a partir de tus componentes. 

En este ejemplo, el árbol de interfaz de usuario se utiliza para renderizar el DOM.


Al igual que los navegadores y las plataformas móviles, React también utiliza estructuras de árbol para gestionar y modelar la relación entre los componentes de una aplicación React. 

Estos árboles son herramientas útiles para comprender cómo fluyen los datos a través de una aplicación React y cómo optimizar el renderizado y el tamaño de la aplicación.


## El Árbol de Renderizado

Una característica importante de los componentes es su capacidad para crear componentes a partir de otros componentes. 

Al anidar componentes, se crea el concepto de componentes padre e hijo, donde cada componente padre puede ser hijo de otro componente.


Al renderizar una aplicación React, podemos modelar esta relación en un árbol, conocido como árbol de renderizado.


Aquí se muestra una aplicación React que renderiza citas inspiradoras.


quotes.js

```
export default [
  "Don’t let yesterday take up too much of today.” — Will Rogers",
  "Ambition is putting a ladder against the sky.",
  "A joy that's shared is a joy made double.",
  ];

```

Copyright.js

```
export default function Copyright({year}) {
  return <p className='small'>©️ {year}</p>;
}

```

Mostrará un p con el valor de un año. 
InspirationGenerator.js

```
import * as React from 'react';
import quotes from './quotes';
import FancyText from './FancyText';

export default function InspirationGenerator({children}) {
  const [index, setIndex] = React.useState(0);
  const quote = quotes[index];
  const next = () => setIndex((index + 1) % quotes.length);

  return (
    <>
      <p>Your inspirational quote is:</p>
      <FancyText text={quote} />
      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  );
}

```

Aplicará la siguente lógica:

Toma children que hará de contenedor. 

Usa un estado con una variable de estado como index 

Y un función de estado como setIndex con un valor inical de 0 para index.

Crea una variable quote que contiene quotes y tiene como indice al valor de la variable de estado. 

Crea next como función que usa a setIndex.

El calculo/valor para setIndex es (index + 1) % quotes.length


En el return renderizará los elementos: 

p, el componente FancyText, un botón con la función next

Y el contenedor children.



FancyText.js

```
export default function FancyText({title, text}) {
  return title
    ? <h1 className='fancy title'>{text}</h1>
    : <h3 className='fancy cursive'>{text}</h3>
}

```

Toma como props a title y text

De acuerdo a su valor de verdad retorna h1 o h3 en caso de que sea falso. 


App.js

```
import FancyText from './FancyText';
import InspirationGenerator from './InspirationGenerator';
import Copyright from './Copyright';

export default function App() {
  return (
    <>
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
    </>
  );
}


```

App retorna dos componentes. Uno dentro de un contenedor


```
                      App
                       |
               renders   renders
                  |         |
 InspirationGenerator    FancyText
          |
  renders   renders
       /     \          
 FancyText  Copyright
 
```

React crea un árbol de renderizado, un árbol de interfaz de usuario, compuesto por los componentes renderizados.


A partir de la aplicación de ejemplo, podemos construir el árbol de renderizado anterior.


El árbol se compone de nodos, cada uno de los cuales representa un componente. 

App, FancyText y Copyright, por nombrar algunos, son nodos de nuestro árbol.


El nodo raíz de un árbol de renderizado de React es el componente raíz de la aplicación. 

En este caso, el componente raíz es App y es el primer componente que React renderiza. 

Cada flecha del árbol apunta de un componente principal a un componente secundario.


## En profundidad: ¿Dónde están las etiquetas HTML en el árbol de renderizado?

Observarás que en el árbol de renderizado anterior no se mencionan las etiquetas HTML que renderiza cada componente. 

Esto se debe a que el árbol de renderizado solo se compone de componentes de React.


React, como framework de interfaz de usuario (UI), es independiente de la plataforma. 

En react.dev, mostramos ejemplos que se renderizan en la web, que utiliza marcado HTML como primitivas de interfaz de usuario. 

Sin embargo, una aplicación de React podría renderizarse con la misma probabilidad en una plataforma móvil o de escritorio, que puede utilizar diferentes primitivas de interfaz de usuario, como UIView o FrameworkElement.


Estas primitivas de interfaz de usuario de la plataforma no forman parte de React. 

Los árboles de renderizado de React pueden proporcionar información a nuestra aplicación de React, independientemente de la plataforma en la que se renderice.


inspirations.js

```
export default [
  {type: 'quote', value: "Don’t let yesterday take up too much of today.” — Will Rogers"},
  {type: 'color', value: "#B73636"},
  {type: 'quote', value: "Ambition is putting a ladder against the sky."},
  {type: 'color', value: "#256266"},
  {type: 'quote', value: "A joy that's shared is a joy made double."},
  {type: 'color', value: "#F9F2B4"},
];

```

Define un array de objetos: 

Tiene como clave type tanto para color como para quote 

Y value para la frase y código de color.


InspirationGenerator 

```
import * as React from 'react';
import inspirations from './inspirations';
import FancyText from './FancyText';
import Color from './Color';

export default function InspirationGenerator({children}) {
  const [index, setIndex] = React.useState(0);
  const inspiration = inspirations[index];
  const next = () => setIndex((index + 1) % inspirations.length);

  return (
    <>
      <p>Your inspirational {inspiration.type} is:</p>
      {inspiration.type === 'quote'
      ? <FancyText text={inspiration.value} />
      : <Color value={inspiration.value} />}

      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  );
}

```

Ahora agrega lógica de renderización al return 

Si la propiedad ispiration.type === 'quote'

renderiza el componente FancyTexto con un valor de la prop text que lee inspiration.value

Si no renderiza el componente Color con la prop value en inspiration.value

Pasará un botón con un evento para activar la función next (quote)

Por último renderizará el contenedor children 


Color.js

```
export default function Color({value}) {
  return <div className="colorbox" style={{backgroundColor: value}} />
}

```

Color toma value 

Lo pasará como estilo de color de fondo al div que retorna. 


App.js

```
import FancyText from './FancyText';
import InspirationGenerator from './InspirationGenerator';
import Copyright from './Copyright';

export default function App() {
  return (
    <>
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
    </>
  );
}

```

InspirationGenerator es un contenedor para otros elementos


```
                      App
                       |
               renders   renders
                  |         |
 InspirationGenerator    FancyText
           |         \
  renders?   renders? renders
       /     \         \ 
 FancyText  Color     Copyright
 
```

Con el renderizado condicional, en diferentes renderizados, el árbol de renderizado puede renderizar diferentes componentes.


En este ejemplo, dependiendo del tipo de inspiration.type, podemos renderizar <FancyText> o <Color>. 

El árbol de renderizado puede ser diferente en cada pasada de renderizado.


Aunque los árboles de renderizado pueden variar entre pasadas, estos suelen ser útiles para identificar los componentes de nivel superior y los componentes hoja en una aplicación React. 

### Los componentes de nivel superior son los más cercanos al componente raíz, afectan el rendimiento de renderizado de todos los componentes subyacentes y suelen ser los más complejos. 

### Los componentes hoja se encuentran cerca de la base del árbol, no tienen componentes secundarios y suelen rerenderizarse con frecuencia.


### Identificar estas categorías de componentes es útil para comprender el flujo de datos y el rendimiento de la aplicación.


## El árbol de dependencias de módulos

Otra relación en una aplicación React que se puede modelar con un árbol son las dependencias de módulos. 

Al dividir los componentes y la lógica en archivos separados, creamos módulos JS donde podemos exportar componentes, funciones o constantes.


Cada nodo de un árbol de dependencias de módulos es un módulo y cada rama representa una declaración de importación en ese módulo.


Si tomamos la aplicación Inspirations anterior, podemos construir un árbol de dependencias de módulos, o árbol de dependencias para abreviar.


```
                      App
                       |
               imports   imports
                  |         |
 InspirationGenerator    FancyText
          |         \
  imports   imports  imports
       /     \         \ 
 FancyText  Color     Copyright
 
```

Árbol de dependencias de módulos para la aplicación Inspirations.


### El nodo raíz del árbol es el módulo raíz, también conocido como archivo de punto de entrada. 

Suele ser el módulo que contiene el componente raíz.


En comparación con el árbol de renderizado de la misma aplicación, existen estructuras similares, pero con algunas diferencias notables:

1. Los nodos que conforman el árbol representan módulos, no componentes.

2. Los módulos sin componentes, como inspirations.js, también se representan en este árbol. 

El árbol de renderizado solo encapsula componentes.

3. Copyright.js aparece dentro de App.js, pero en el árbol de renderizado, Copyright, el componente, aparece como un componente secundario de InspirationGenerator. 

Esto se debe a que InspirationGenerator acepta JSX como props secundarios, por lo que renderiza Copyright como un componente secundario, pero no importa el módulo.


### Los árboles de dependencias son útiles para determinar qué módulos son necesarios para ejecutar la aplicación React. 

Al crear una aplicación React para producción, suele haber un paso de compilación que incluye todo el JavaScript necesario para enviarlo al cliente. 

La herramienta responsable de esto se llama empaquetador, y los empaquetadores utilizan el árbol de dependencias para determinar qué módulos deben incluirse.


A medida que tu aplicación crece, el tamaño del paquete suele crecer también. 

Los paquetes de gran tamaño son costosos de descargar y ejecutar para el cliente. 

Además, pueden retrasar el diseño de la interfaz de usuario. 

Conocer el árbol de dependencias de tu aplicación puede ayudar a depurar estos problemas.


## Rs árbol de la ui

1. árbol renderizado -> nodos: Componentes

2. árbol dependencias -> nodos: Módulos


Los árboles son una forma común de representar la relación entre entidades. Se utilizan a menudo para modelar la interfaz de usuario (UI).

Los árboles de renderizado representan la relación anidada entre los componentes de React en un único renderizado.

Con el renderizado condicional, el árbol de renderizado puede cambiar en diferentes renderizados. Con diferentes valores de propiedad, los componentes pueden renderizar diferentes componentes secundarios.

Los árboles de renderizado ayudan a identificar los componentes de nivel superior y los componentes hoja. Los componentes de nivel superior afectan el rendimiento de renderizado de todos los componentes subyacentes, y los componentes hoja suelen renderizarse con frecuencia. Identificarlos es útil para comprender y depurar el rendimiento del renderizado.

Los árboles de dependencia representan las dependencias de los módulos en una aplicación React.

Las herramientas de compilación utilizan los árboles de dependencia para agrupar el código necesario para el lanzamiento de una aplicación.

Los árboles de dependencia son útiles para depurar paquetes de gran tamaño que ralentizan el tiempo de renderizado y ofrecen oportunidades para optimizar el código incluido.



# Interactividad en React

Algunos elementos en la pantalla se actualizan según la entrada del usuario. 

Por ejemplo, al hacer clic en una galería de imágenes, se cambia la imagen activa. 

### En React, los datos que cambian con el tiempo se denominan estado. 

Puedes añadir estado a cualquier componente y actualizarlo según sea necesario. 

### Se pueden escribir componentes que gestionan interacciones, actualizan su estado y muestran diferentes resultados a lo largo del tiempo.


1. Gestionar eventos iniciados por el usuario

2. Hacer que los componentes "recuerden" información con el estado

3. React actualiza la interfaz de usuario en dos fases

4. Por qué el estado no se actualiza inmediatamente después de modificarlo

5. Cola con múltiples actualizaciones de estado

6. Actualizar un objeto en estado

7. Actualizar un array en estado


## Respondiendo a eventos

React te permite añadir controladores de eventos a tu JSX. 

Los controladores de eventos son funciones propias que se activan en respuesta a interacciones del usuario, como hacer clic, pasar el cursor por encima, enfocar las entradas del formulario, etc.


Los componentes integrados como <button> solo admiten eventos integrados del navegador como onClick. 

Sin embargo, también puedes crear tus propios componentes y asignar a sus propiedades de controlador de eventos los nombres específicos de la aplicación que desees.


App.js

```
export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert('Playing!')}
      onUploadImage={() => alert('Uploading!')}
    />
  );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>
        Play Movie
      </Button>
      <Button onClick={onUploadImage}>
        Upload Image
      </Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

```

Toolbar y Button que admiten props desde otro componente, los usan en su propio return. 


## Estado: la memoria de un componente

### Los componentes a menudo necesitan cambiar lo que aparece en pantalla como resultado de una interacción. 

Al escribir en el formulario, se actualiza el campo de entrada; al hacer clic en "Siguiente" en un carrusel de imágenes, se cambia la imagen que se muestra; al hacer clic en "Comprar", se añade un producto al carrito de compras. 

### Los componentes necesitan recordar cosas: el valor de entrada actual, la imagen actual, el carrito de compras. 

### En React, este tipo de memoria específica del componente se denomina estado.


Puedes añadir estado a un componente con un Hook useState. 

### Los Hooks son funciones especiales que permiten a tus componentes usar las características de React (el estado es una de ellas). 

El Hook useState permite declarar una variable de estado. 

Toma el estado inicial y devuelve un par de valores: el estado actual y una función que establece el estado para actualizarlo.

```
const [index, setIndex] = useState(0);
const [showMore, setShowMore] = useState(false);

```

Así es como una galería de imágenes usa y actualiza el estado al hacer clic:

data.js

```
export const sculptureList = [{
  name: 'Homenaje a la Neurocirugía',
  artist: 'Marta Colvin Andrade',
  description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
  url: 'https://i.imgur.com/Mx7dA2Y.jpg',
  alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'
}, {
  name: 'Floralis Genérica',
  artist: 'Eduardo Catalano',
  description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
  url: 'https://i.imgur.com/ZF6s192m.jpg',
  alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
}, {
  name: 'Eternal Presence',
  artist: 'John Woodrow Wilson',
  description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
  url: 'https://i.imgur.com/aTtVpES.jpg',
  alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
}, {
  name: 'Moai',
  artist: 'Unknown Artist',
  description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
  url: 'https://i.imgur.com/RCwLEoQm.jpg',
  alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
}, {
  name: 'Blue Nana',
  artist: 'Niki de Saint Phalle',
  description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
  url: 'https://i.imgur.com/Sd1AgUOm.jpg',
  alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
}, {
  name: 'Ultimate Form',
  artist: 'Barbara Hepworth',
  description: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
  url: 'https://i.imgur.com/2heNQDcm.jpg',
  alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
}, {
  name: 'Cavaliere',
  artist: 'Lamidi Olonade Fakeye',
  description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
  url: 'https://i.imgur.com/wIdGuZwm.png',
  alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
}, {
  name: 'Big Bellies',
  artist: 'Alina Szapocznikow',
  description: "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
  url: 'https://i.imgur.com/AlHTAdDm.jpg',
  alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'
}, {
  name: 'Terracotta Army',
  artist: 'Unknown Artist',
  description: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',
  url: 'https://i.imgur.com/HMFmH6m.jpg',
  alt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.'
}, {
  name: 'Lunar Landscape',
  artist: 'Louise Nevelson',
  description: 'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',
  url: 'https://i.imgur.com/rN7hY6om.jpg',
  alt: 'A black matte sculpture where the individual elements are initially indistinguishable.'
}, {
  name: 'Aureole',
  artist: 'Ranjani Shettar',
  description: 'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
  url: 'https://i.imgur.com/okTpbHhm.jpg',
  alt: 'A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.'
}, {
  name: 'Hippos',
  artist: 'Taipei Zoo',
  description: 'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',
  url: 'https://i.imgur.com/6o5Vuyu.jpg',
  alt: 'A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.'
}];

```

App.js

Usa scuptureList de data 

### El componente Gallery tiene dos variable de estado con valor inicial en 0 y false.

Define la constante hasNext que calculá que la variable de estado index sea menor a la longitud/cantidad de sculptureList -1.

### Define una función controladora que tiene una lógica de renderización/actualización 

Si hasNext es verdadero actualiza setIndex en index + 1 

Si es falso, vuelve a 0. 

Define otra funcion para invertir de valor de setShowMore

sculpture será el indice de acceso a los datos. 

Retornará un botón con la función handleNextClick

Titulos h2 y h3 que leen los valores del indice de acceso sculpture. 

### El botón con la función handleMoreClick tiene una lógica de renderización de cadena Hide y Show  

Antes de terminar aplica una lógica de renderización para verificar el valor de la variable de estado showMore

Al final renderiza img

```
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}

```


## Renderizar y confirmar

### Antes de que tus componentes se muestren en pantalla, React debe renderizarlos. 

Comprender los pasos de este proceso te ayudará a comprender cómo se ejecuta tu código y a explicar su comportamiento.


Imagina que tus componentes son cocineros en la cocina, preparando deliciosos platos con ingredientes. 

En este escenario, React es el camarero que recibe las peticiones de los clientes y les trae sus pedidos. 

Este proceso de solicitud y entrega de la interfaz de usuario consta de tres pasos:


1. Activar un renderizado (entregar el pedido del comensal a la cocina)

2. Renderizar el componente (preparar el pedido en la cocina)

3. Confirmar con el DOM (colocar el pedido en la mesa)


## Estado como una instantánea

### A diferencia de las variables regulares de JavaScript, el estado de React se comporta más como una instantánea. 

Al configurarlo, no se modifica la variable de estado existente, sino que se activa un nuevo renderizado. 


```
console.log(count);  // 0
setCount(count + 1); // Request a re-render with 1
console.log(count);  // Still 0!

```

Este comportamiento te ayuda a evitar errores sutiles. 

Aquí tienes una pequeña aplicación de chat. 

Intenta adivinar qué ocurre si pulsas "Enviar" primero y luego cambias el destinatario a Bob. 

¿Qué nombre aparecerá en la alerta cinco segundos después?


```
import { useState } from 'react';

export default function Form() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{' '}
        <select
          value={to}
          onChange={e => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

```

Form define to y message en "Alice" y "Hello".

La función handleSubmit previene el comportamiento por default 

Usa La función setTimeout y le pasa una función flecha (como callback para el primer parámetro) que 

La acción del callback será alertar a los usuarios con los valor de message y to. 

El segundo parámetro de setTimeout será 500

Retornará un form con la función handleSubmit


## Poniendo en cola una serie de actualizaciones de estado.

Este componente presenta errores: al hacer clic en "+3", la puntuación solo aumenta una vez.

App.js

```
import { useState } from 'react';

export default function Counter() {
  const [score, setScore] = useState(0);

  function increment() {
    setScore(score + 1);
  }

  return (
    <>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <h1>Score: {score}</h1>
    </>
  )
}

```

Define score como estado 

Con una función quiere aumentar su valor

En el return quiere representar un botón +1 con la función de incremento 

Otro botón con tres llamadas/ejecuciones a incremento

Y un h1 para representar score


El estado como instantánea explica por qué ocurre esto. 

### Al configurar el estado, se solicita una nueva renderización, pero no se modifica en el código que ya se está ejecutando. 

Por lo tanto, la puntuación sigue siendo 0 justo después de llamar a setScore(score + 1).

```
console.log(score);  // 0
setScore(score + 1); // setScore(0 + 1);
console.log(score);  // 0
setScore(score + 1); // setScore(0 + 1);
console.log(score);  // 0
setScore(score + 1); // setScore(0 + 1);
console.log(score);  // 0

```

Puedes solucionar esto pasando una función de actualización al configurar el estado. 

Observa cómo al reemplazar setScore(score + 1) por setScore(s => s + 1) se soluciona el botón "+3". 

Esto te permite poner en cola varias actualizaciones de estado.


```
import { useState } from 'react';

export default function Counter() {
  const [score, setScore] = useState(0);

  function increment() {
    setScore(s => s + 1);
  }

  return (
    <>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <h1>Score: {score}</h1>
    </>
  )
}

```

Usa una función flecha con un parámetro local para asignar el cambio. 


## Actualización de objetos en estado

El estado puede contener cualquier tipo de valor de JavaScript, incluyendo objetos. 

Sin embargo, no se deben modificar directamente los objetos ni los arrays que se mantienen en el estado de React. 

En su lugar, para actualizar un objeto y un array, se debe crear uno nuevo (o hacer una copia de uno existente) y luego actualizar el estado para usar esa copia.


Normalmente, se usa la sintaxis ... spread para copiar los objetos y arrays que se desean modificar. 

Por ejemplo, la actualización de un objeto anidado podría verse así:

```
import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
    <>
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img
        src={person.artwork.image}
        alt={person.artwork.title}
      />
    </>
  );
}

```

### La variable de estado person tiene como valor un objeto que tiene otro objeto dentro. 

En la función para manejar eventos, copia el objeto que quiere acceder con ... 

Lo hacer para el objeto ...person y para ...person.artwork


Si copiar objetos en el código se vuelve tedioso, puedes usar una biblioteca como Immer para reducir el código repetitivo:

package.json

```
{
  "dependencies": {
    "immer": "1.7.3",
    "react": "latest",
    "react-dom": "latest",
    "react-scripts": "latest",
    "use-immer": "0.5.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "devDependencies": {}
}

```

App.js

```
import { useImmer } from 'use-immer';

export default function Form() {
  const [person, updatePerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    updatePerson(draft => {
      draft.name = e.target.value;
    });
  }

  function handleTitleChange(e) {
    updatePerson(draft => {
      draft.artwork.title = e.target.value;
    });
  }

  function handleCityChange(e) {
    updatePerson(draft => {
      draft.artwork.city = e.target.value;
    });
  }

  function handleImageChange(e) {
    updatePerson(draft => {
      draft.artwork.image = e.target.value;
    });
  }

  return (
    <>
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img
        src={person.artwork.image}
        alt={person.artwork.title}
      />
    </>
  );
}

```


## Actualización de arrays en estado

Los arrays son otro tipo de objetos mutables de JavaScript que se pueden almacenar en estado y deben tratarse como de solo lectura. 

Al igual que con los objetos, para actualizar un array almacenado en estado, es necesario crear uno nuevo (o hacer una copia de uno existente) y luego configurar el estado para que use el nuevo array:

```
import { useState } from 'react';

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  const [list, setList] = useState(
    initialList
  );

  function handleToggle(artworkId, nextSeen) {
    setList(list.map(artwork => {
      if (artwork.id === artworkId) {
        return { ...artwork, seen: nextSeen };
      } else {
        return artwork;
      }
    }));
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={list}
        onToggle={handleToggle} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

```


Podemos usar Immer para reducir código repetitivo. 

App.js

```
import { useState } from 'react';
import { useImmer } from 'use-immer';

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  const [list, updateList] = useImmer(initialList);

  function handleToggle(artworkId, nextSeen) {
    updateList(draft => {
      const artwork = draft.find(a =>
        a.id === artworkId
      );
      artwork.seen = nextSeen;
    });
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={list}
        onToggle={handleToggle} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

```


# Respondiendo a Eventos

React te permite agregar controladores de eventos a tu JSX. 

Los controladores de eventos son funciones propias que se activan en respuesta a interacciones como hacer clic, pasar el cursor, enfocar las entradas del formulario, etc.


Aprenderás:

Diferentes maneras de escribir un controlador de eventos

Cómo pasar la lógica de manejo de eventos desde un componente padre

Cómo se propagan los eventos y cómo detenerlos


## Añadir controladores de eventos

Para añadir un controlador de eventos, primero se define una función y luego se pasa como propiedad a la etiqueta JSX correspondiente. 

Por ejemplo, aquí se muestra un botón que aún no realiza ninguna acción:

App.js

```
export default function Button() {
  return (
    <button>
      I don't do anything
    </button>
  );
}

```

Puedes hacer que muestre un mensaje cuando un usuario haga clic siguiendo estos tres pasos:

1. Declara una función llamada handleClick dentro de tu componente Button.

2. Implementa la lógica dentro de esa función (usa alert para mostrar el mensaje).

3. Agrega onClick={handleClick} al JSX de <button>.


```
export default function Button() {
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

Definiste la función handleClick y la pasaste como propiedad a <button>. 

handleClick es un controlador de eventos. 

Las funciones de los controladores de eventos:


1. Suelen definirse dentro de los componentes.
2. Tienen nombres que empiezan por "handle", seguido del nombre del evento.


Por convención, es común nombrar los controladores de eventos como "handle" seguido del nombre del evento. 

A menudo verás "onClick={handleClick}", "onMouseEnter={handleMouseEnter}", etc.


Como alternativa, puedes definir un controlador de eventos en línea en el JSX:

```
<button onClick={function handleClick() {
  alert('You clicked me!');
}}>

```

Para ser conciso, una arrow function 

```
<button onClick={() => {
  alert('You clicked me!');
}}>

```


### Error

Las funciones pasadas a los controladores de eventos deben pasarse, no llamarse. 

Por ejemplo:

1. passing a function (correct)

```
<button onClick={handleClick}>

```

2. calling a function (incorrect)

```
button onClick={handleClick()}>

```

La diferencia es sutil.

En el primer ejemplo, la función handleClick se pasa como un controlador de eventos onClick. 

Esto le indica a React que la recuerde y solo la llame cuando el usuario haga clic en el botón.


En el segundo ejemplo, el () al final de handleClick() ejecuta la función inmediatamente durante la renderización, sin necesidad de clics. 

Esto se debe a que el JavaScript dentro de JSX { y } se ejecuta inmediatamente.


Cuando escribes código en línea, el mismo problema se presenta de una manera diferente:

1. passing a function (correct)

```
<button onClick={() => alert('...')}>

```

2. calling a function (incorrect)

```
<button onClick={alert('...')}>

```

Pasar código en línea como este no se activará al hacer clic, se activa cada vez que se renderiza el componente:

```
// This alert fires when the component renders, not when clicked!
<button onClick={alert('You clicked me!')}>

```

Si desea definir su controlador de eventos en línea, inclúyalo en una función anónima como esta:

```
<button onClick={() => alert('You clicked me!')}>

```

En lugar de ejecutar el código interno con cada renderizado, esto crea una función que se llamará posteriormente.

En ambos casos, se pasa una función:

1. <button onClick={handleClick}> pasa la función handleClick.

2. <button onClick={() => alert('...')}> pasa la función () => alert('...').


## Lectura de props en manejadores de eventos

Dado que los manejadores de eventos se declaran dentro de un componente, tienen acceso a los props del componente. 

Aquí se muestra un botón que, al hacer clic, muestra una alerta con su prop de mensaje:

App.js

Se define AlertButton, tendrá props message y children para que todo este componente sea un contenedor para otros elementos. 

Retorna un botón con un controlador de eventos que se activa al hacer click. 

Su acción es leer el valor de la prop message en un alert. 

Abajo del botón se podrá renderizar elementos. 

{children} renderizará Play Movie y Upload Image

 

```
function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">
        Play Movie
      </AlertButton>
      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton>
    </div>
  );
}

```

### Las props permiten que estos dos botones muestren mensajes diferentes. Intenta cambiar los mensajes que se les envían.


## Pasando controladores de eventos como props

A menudo, querrá que el componente padre especifique el controlador de eventos de un componente hijo. 


### Considere los botones: dependiendo de dónde use un componente Button, podría querer ejecutar una función diferente; por ejemplo, una reproduce una película y otra sube una imagen.

Para ello, pase un prop que el componente recibe de su padre como controlador de eventos, de la siguiente manera:

#### Button será un botón contenedor <Componente> <Componente/>

Para que al llamarlo puedan pasarle elementos, jsx, contenido, etc. 

```
function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return (
    <Button onClick={handlePlayClick}>
      Play "{movieName}"
    </Button>
  );
}

function UploadButton() {
  return (
    <Button onClick={() => alert('Uploading!')}>
      Upload Image
    </Button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}

```

Button no tiene funciones 

Tiene props a onClick y children

Retorna un botón que tiene como onClick la prop onClick. 


Las funciones estarán separadas en componentes. 

PlayButton toma movieName, tiene una función handlePlayClick que lee esta prop en un alert. 

Retornará un botón con su función definida y leerá movieName

### PlayButton retorna el componente Button como un contenedor y además le da valor a su prop que será una función. 


### UploadButton también llama al componente Button como un contenedor para pasarle el valor de onClick en linea como una función ya que no tiene una propia definida.   

No tiene funcion 

Retorna un alert con un string. 


### ToolBar tiene su propio div, que contiene a los componentes y sus children

ToolBar llama al componente PlayButton para pasarle el valor de movieName

Y llama al componente UploadButton


Aquí, el componente Toolbar renderiza un PlayButton y un UploadButton:

1. PlayButton pasa handlePlayClick como la propiedad onClick al Button.
2. UploadButton pasa () => alert('Uploading!') como la propiedad onClick al Button.


Finalmente, el componente Button acepta una propiedad llamada onClick. 

Pasa dicha propiedad directamente al navegador integrado <button> con onClick={onClick}. 

Esto indica a React que llame a la función pasada al hacer clic.

#### Si se utiliza un sistema de diseño, es común que componentes como los botones contengan estilo, pero no especifiquen comportamiento. 

#### En cambio, componentes como PlayButton y UploadButton pasarán controladores de eventos.


## Nombrar las propiedades del controlador de eventos

Los componentes integrados como <button> y <div> solo admiten nombres de eventos del navegador como onClick. 

Sin embargo, al crear tus propios componentes, puedes nombrar las propiedades del controlador de eventos como prefieras.


Por convención, las propiedades del controlador de eventos deben empezar por on, seguido de una letra mayúscula.


Por ejemplo, la propiedad onClick del componente Button podría haberse llamado onSmash:

App.js

### En Button, el valor de onSmash será una función flecha definida en la llamada a Button. 

```
function Button({ onSmash, children }) {
  return (
    <button onClick={onSmash}>
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <Button onSmash={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onSmash={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}

```

En este ejemplo, <button onClick={onSmash}> muestra que el navegador <button> (en minúsculas) aún necesita una propiedad llamada onClick, pero el nombre de la propiedad que recibirá tu componente Button personalizado depende de ti.


### Si tu componente admite múltiples interacciones, puedes asignar nombres a las propiedades de los controladores de eventos para conceptos específicos de la aplicación. 

Por ejemplo, este componente Toolbar recibe los controladores de eventos onPlayMovie y onUploadImage:


App.js

### Button admite la prop onClick en el evento onClick. 

### Es llamado por dos componentes superiores: primero por Toolbar y después por App.

### Toolbar le pasa como valor de la prop de Button su propio valor de prop. 

### App llama a Toolbar para pasarle en la prop de Toolbar una función flecha. 

```
export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert('Playing!')}
      onUploadImage={() => alert('Uploading!')}
    />
  );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>
        Play Movie
      </Button>
      <Button onClick={onUploadImage}>
        Upload Image
      </Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

```

Observe cómo el componente App no ​​necesita saber qué hará Toolbar con onPlayMovie o onUploadImage. 

Este es un detalle de implementación de Toolbar. 

En este caso, Toolbar los pasa como controladores onClick a sus Botones, pero posteriormente también podría activarlos con un atajo de teclado. 

Nombrar las propiedades con el nombre de interacciones específicas de la aplicación, como onPlayMovie, le brinda la flexibilidad de cambiar su uso posterior.


Nota

Asegúrate de usar las etiquetas HTML adecuadas para tus controladores de eventos. 

Por ejemplo, para controlar los clics, usa <button onClick={handleClick}> en lugar de <div onClick={handleClick}>. 

Usar un <button> de un navegador real habilita comportamientos integrados del navegador, como la navegación con el teclado. 

Si no te gusta el estilo predeterminado del navegador para un botón y quieres que se parezca más a un enlace o a un elemento de la interfaz de usuario diferente, puedes lograrlo con CSS. 

Obtén más información sobre cómo escribir marcado accesible.


## Propagación de eventos

Los controladores de eventos también capturarán eventos de cualquier componente secundario que pueda tener. 

### Decimos que un evento se propaga a través del árbol: comienza donde ocurrió el evento y luego asciende.


Este <div> contiene dos botones. 

Tanto el <div> como cada botón tienen sus propios controladores onClick. 

¿Qué controladores crees que se activarán al hacer clic en un botón? 


App.js

```
export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <button onClick={() => alert('Playing!')}>
        Play Movie
      </button>
      <button onClick={() => alert('Uploading!')}>
        Upload Image
      </button>
    </div>
  );
}

```

### Si hace clic en cualquiera de los botones, su onClick se ejecutará primero, seguido del onClick del <div> padre. 

Por lo tanto, aparecerán dos mensajes. 

### Si hace clic en la barra de herramientas, solo se ejecutará el onClick del <div> padre.


Problema

### Todos los eventos se propagan en React excepto onScroll, que solo funciona en la etiqueta JSX a la que se adjunta.


## Detener la propagación

### Los controladores de eventos reciben un objeto de evento como único argumento. 

Por convención, se suele llamar e, que significa "evento". 

### Puede usar este objeto para leer información sobre el evento.


Ese objeto de evento también permite detener la propagación. 

### Si desea evitar que un evento llegue a los componentes padre, debe llamar a e.stopPropagation() como lo hace este componente Button:

App.js

Button toma onClick y children (para que sea contenedor de más jsx)

Retorna un botón con un evento de click que usa el parametro/objeto e para llamar a la función stopPropagation()

Después ejecuta a onClick()

```
function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <Button onClick={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}

```

Al hacer clic en un botón:

1. React llama al controlador onClick pasado a <button>.

2. Este controlador, definido en Button, realiza lo siguiente:
  
  Llama a e.stopPropagation(), lo que impide que el evento se propague más.
  
### Llama a la función onClick, que es una propiedad pasada desde el componente Toolbar.

3. Esta función, definida en el componente Toolbar, muestra la alerta del botón.

4. Dado que se detuvo la propagación, el controlador onClick del elemento padre <div> no se ejecuta.


Gracias a e.stopPropagation(), al hacer clic en los botones ahora solo se muestra una alerta (del botón) en lugar de dos (del botón y de la barra de herramientas principal, el div). 

Hacer clic en un botón no es lo mismo que hacer clic en la barra de herramientas circundante, por lo que detener la propagación tiene sentido en esta interfaz.


## En profundidad: Eventos de la fase de captura

### En casos excepcionales, podría ser necesario capturar todos los eventos de los elementos secundarios, incluso si detuvieron la propagación. 

Por ejemplo, quizás desee registrar cada clic en Analytics, independientemente de la lógica de propagación. 

Puede hacerlo añadiendo "Captura" al final del nombre del evento:

```
<div onClickCapture={() => { /* this runs first */ }}>
<button onClick={e => e.stopPropagation()} />
<button onClick={e => e.stopPropagation()} />
</div>

```
Cada evento se propaga en tres fases:

1. Se propaga hacia abajo, llamando a todos los controladores onClickCapture.

2. Ejecuta el controlador onClick del elemento en el que se hizo clic.

3. Se propaga hacia arriba, llamando a todos los controladores onClick.

Los eventos de captura son útiles para código como enrutadores o Analytics, pero probablemente no los use en el código de la aplicación. 


## Pasando controladores como alternativa a la propagación

Observe cómo este controlador de clic ejecuta una línea de código y luego llama a la propiedad "onClick" pasada por el padre: 

```
function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}

```

También podrías agregar más código a este controlador antes de llamar al controlador principal del evento onClick. 

Este patrón ofrece una alternativa a la propagación. 

Permite que el componente secundario gestione el evento, a la vez que permite que el componente principal especifique un comportamiento adicional. 

A diferencia de la propagación, no es automático. 

Sin embargo, la ventaja de este patrón es que permite seguir claramente toda la cadena de código que se ejecuta como resultado de un evento.


Si dependes de la propagación y te resulta difícil rastrear qué controladores se ejecutan y por qué, prueba este enfoque.


## Prevenir el comportamiento predeterminado

Algunos eventos del navegador tienen un comportamiento predeterminado asociado. 

Por ejemplo, un evento de envío <form>, que se produce al hacer clic en un botón dentro de él, recargará toda la página de forma predeterminada:

```
export default function Signup() {
  return (
    <form onSubmit={() => alert('Submitting!')}>
      <input />
      <button>Send</button>
    </form>
  );
}

```

Puede llamar a e.preventDefault() en el objeto de evento para evitar que esto suceda:

```
export default function Signup() {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      alert('Submitting!');
    }}>
      <input />
      <button>Send</button>
    </form>
  );
}

```

No confunda e.stopPropagation() y e.preventDefault(). Ambos son útiles, pero no están relacionados:

1. e.stopPropagation() impide que se activen los controladores de eventos asociados a las etiquetas anteriores.

2. e.preventDefault() impide el comportamiento predeterminado del navegador para los pocos eventos que lo tienen.


## ¿Pueden los controladores de eventos tener efectos secundarios?

¡Por supuesto! Los controladores de eventos son el mejor lugar para los efectos secundarios.


A diferencia de las funciones de renderizado, los controladores de eventos no necesitan ser puros, por lo que son ideales para modificar algo; por ejemplo, cambiar el valor de una entrada al escribir, o cambiar una lista al pulsar un botón. 

Sin embargo, para cambiar información, primero necesitas una forma de almacenarla. 

En React, esto se hace usando el estado, la memoria de un componente. 


## Rs eventos

Puedes gestionar eventos pasando una función como propiedad a un elemento como <button>.

Los controladores de eventos deben pasarse, no llamarse. onClick={handleClick}, no onClick={handleClick()}.

Puedes definir una función de controlador de eventos por separado o en línea.

Los controladores de eventos se definen dentro de un componente para que puedan acceder a las propiedades.

Puedes declarar un controlador de eventos en un componente principal y pasarlo como propiedad a un componente secundario.

Puedes definir tus propias propiedades de controlador de eventos con nombres específicos de la aplicación.

Los eventos se propagan hacia arriba. Llama a e.stopPropagation() en el primer argumento para evitarlo.

Los eventos pueden tener un comportamiento predeterminado no deseado en el navegador. Llama a e.preventDefault() para evitarlo.

Llamar explícitamente a una propiedad de controlador de eventos desde un controlador secundario es una buena alternativa a la propagación.


## Ejercicios 

1. Corregir un controlador de eventos

Al hacer clic en este botón, se supone que el fondo de la página cambia de blanco a negro. 

Sin embargo, no ocurre nada al hacer clic. 

Corrige el problema. 

(No te preocupes por la lógica de handleClick; esa parte funciona correctamente).

App.js

```
export default function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }

  return (
    <button onClick={handleClick()}>
      Toggle the lights
    </button>
  );
}

```

Solución

El problema es que <button onClick={handleClick()}> llama a la función handleClick durante la renderización, en lugar de pasarla. 

Eliminar la llamada () para que sea <button onClick={handleClick}> soluciona el problema:

```
export default function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }

  return (
    <button onClick={handleClick}>
      Toggle the lights
    </button>
  );
}

```


2. Conectar los eventos

Este componente ColorSwitch renderiza un botón. 

Su función es cambiar el color de la página. 

Conéctalo a la propiedad del controlador de eventos onChangeColor que recibe del componente principal para que al hacer clic en el botón se cambie el color.


Después de hacer esto, observa que al hacer clic en el botón también se incrementa el contador de clics de la página. 

Tu compañero que creó el componente principal insiste en que onChangeColor no incrementa ningún contador. 

¿Qué más podría estar sucediendo? 

Arréglalo para que al hacer clic en el botón solo se cambie el color y no se incremente el contador. 

ColorSwitch.js

```
export default function ColorSwitch({
  onChangeColor
}) {
  return (
    <button>
      Change color
    </button>
  );
}

```

Solución

Primero, necesitas agregar el controlador de eventos, como <button onClick={onChangeColor}>.


Sin embargo, esto introduce el problema del contador incremental. 

Si onChangeColor no lo hace, como insiste tu compañero, el problema radica en que este evento se propaga hacia arriba, y algún controlador superior lo hace. 

Para solucionar este problema, necesitas detener la propagación. 

Pero no olvides que aún debes llamar a onChangeColor.

```
export default function ColorSwitch({
  onChangeColor
}) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onChangeColor();
    }}>
      Change color
    </button>
  );
}

```



# Estado: La memoria de un componente

Los componentes suelen necesitar cambiar lo que aparece en pantalla como resultado de una interacción. 

Al escribir en el formulario, se actualiza el campo de entrada; al hacer clic en "Siguiente" en un carrusel de imágenes, se cambia la imagen que se muestra; al hacer clic en "Comprar", se añade un producto al carrito. 

### Los componentes necesitan recordar cosas: el valor de entrada actual, la imagen actual, el carrito de compras. 

En React, este tipo de memoria específica del componente se denomina estado.

Aprenderás:

Cómo agregar una variable de estado con el hook useState
Qué par de valores devuelve el gancho useState
Cómo agregar más de una variable de estado
Por qué el estado se denomina local


## Cuando una variable regular no es suficiente

Aquí tienes un componente que renderiza la imagen de una escultura. 

Al hacer clic en el botón "Siguiente", debería aparecer la siguiente escultura cambiando el índice a 1, luego a 2, y así sucesivamente. 

Sin embargo, esto no funcionará (¡puedes probarlo!).


data.js:

```
export const sculptureList = [{
  name: 'Homenaje a la Neurocirugía',
  artist: 'Marta Colvin Andrade',
  description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
  url: 'https://i.imgur.com/Mx7dA2Y.jpg',
  alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'  
}, {
  name: 'Floralis Genérica',
  artist: 'Eduardo Catalano',
  description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
  url: 'https://i.imgur.com/ZF6s192m.jpg',
  alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
}, {
  name: 'Eternal Presence',
  artist: 'John Woodrow Wilson',
  description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
  url: 'https://i.imgur.com/aTtVpES.jpg',
  alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
}, {
  name: 'Moai',
  artist: 'Unknown Artist',
  description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
  url: 'https://i.imgur.com/RCwLEoQm.jpg',
  alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
}, {
  name: 'Blue Nana',
  artist: 'Niki de Saint Phalle',
  description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
  url: 'https://i.imgur.com/Sd1AgUOm.jpg',
  alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
}, {
  name: 'Ultimate Form',
  artist: 'Barbara Hepworth',
  description: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
  url: 'https://i.imgur.com/2heNQDcm.jpg',
  alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
}, {
  name: 'Cavaliere',
  artist: 'Lamidi Olonade Fakeye',
  description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
  url: 'https://i.imgur.com/wIdGuZwm.png',
  alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
}, {
  name: 'Big Bellies',
  artist: 'Alina Szapocznikow',
  description: "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
  url: 'https://i.imgur.com/AlHTAdDm.jpg',
  alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'
}, {
  name: 'Terracotta Army',
  artist: 'Unknown Artist',
  description: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',
  url: 'https://i.imgur.com/HMFmH6m.jpg',
  alt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.'
}, {
  name: 'Lunar Landscape',
  artist: 'Louise Nevelson',
  description: 'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',
  url: 'https://i.imgur.com/rN7hY6om.jpg',
  alt: 'A black matte sculpture where the individual elements are initially indistinguishable.'
}, {
  name: 'Aureole',
  artist: 'Ranjani Shettar',
  description: 'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
  url: 'https://i.imgur.com/okTpbHhm.jpg',
  alt: 'A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.'
}, {
  name: 'Hippos',
  artist: 'Taipei Zoo',
  description: 'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',
  url: 'https://i.imgur.com/6o5Vuyu.jpg',
  alt: 'A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.'
}];

```


App.js

```
import { sculptureList } from './data.js';

export default function Gallery() {
  let index = 0;

  function handleClick() {
    index = index + 1;
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}

```

El controlador de eventos handleClick actualiza una variable local, index. 

Sin embargo, dos factores impiden que ese cambio sea visible:

1. Las variables locales no persisten entre renderizaciones. Cuando React renderiza este componente por segunda vez, lo hace desde cero; no considera los cambios en las variables locales.

2. Los cambios en las variables locales no activan las renderizaciones. React no se da cuenta de que necesita renderizar el componente de nuevo con los nuevos datos.


Para actualizar un componente con datos nuevos, se requieren dos pasos:

1. Conservar los datos entre renderizaciones.

2. Activar React para que renderice el componente con los datos nuevos (re-renderizado).


El gancho useState proporciona estas dos funciones:

1. Una variable de estado para conservar los datos entre renderizaciones.

2. Una función de establecimiento de estado para actualizar la variable y activar React para que renderice el componente de nuevo.


## Añadir una variable de estado

Para añadir una variable de estado, importe useState desde React al principio del archivo:

```
import { useState } from 'react';

```
Luego, reemplace esta línea:

```
let index = 0;

```

con

```
const [index, setIndex] = useState(0);

```

### index es una variable de estado y setIndex es la función setter.

La sintaxis ```[ ]``` se denomina desestructuración de arrays y permite leer valores de un array. 

El array devuelto por useState siempre tiene exactamente dos elementos.

Así es como funcionan juntos en handleClick:

```
function handleClick() {
setIndex(index + 1);
}

```

Ahora, al hacer clic en el botón "Siguiente", se cambia la escultura actual:


App.js

```
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}

```

### Código de state

Renderizará el primer elemento que concuerde con index=0

Carga el botón y los demás elementos que leen el objeto copiado sculptureList

({index + 1} of {sculptureList.length}) lee dos valorore


## Hook 

En React, useState, así como cualquier otra función que empiece por "use", se denomina Hook.


### Los Hooks son funciones especiales que solo están disponibles mientras React se renderiza. 

Permiten conectar con diferentes funciones de React.


State es solo una de esas funciones, pero conocerás los demás Hooks más adelante.


Dificultad

### Los Hooks (funciones que empiezan por "use") solo se pueden llamar en el nivel superior de los componentes o en sus propios Hooks. 

No se pueden llamar dentro de condiciones, bucles u otras funciones anidadas. 

Los Hooks son funciones, pero conviene considerarlos como declaraciones incondicionales sobre las necesidades del componente. 

Se "utilizan" las características de React en la parte superior del componente, de forma similar a como se "importan" los módulos en la parte superior del archivo.


## Anatomía de useState

### Al llamar a useState, le estás indicando a React que quieres que este componente recuerde algo:

```
const [index, setIndex] = useState(0);

```

### En este caso, quieres que React recuerde index.


Nota

La convención es nombrar este par como ```const [something, setSomething]```. 

Puedes nombrarlo como quieras, pero las convenciones facilitan la comprensión en diferentes proyectos.


### El único argumento de useState es el valor inicial de tu variable de estado.

En este ejemplo, el valor inicial del índice se establece en 0 con useState(0).


Cada vez que tu componente se renderiza, useState genera una matriz con dos valores:

1. La variable de estado (index) con el valor almacenado.

2. La función establecedora de estado (setIndex), que puede actualizar la variable de estado y hacer que React renderice el componente de nuevo.

Así es como funciona:

```
const [index, setIndex] = useState(0);

```

1. Tu componente se renderiza por primera vez. 

Como pasaste 0 a useState como valor inicial para index, devolverá ```[0, setIndex]```. 

React recuerda que 0 es el último valor de estado.


2. Actualizas el estado. 

Cuando un usuario hace clic en el botón, se llama a setIndex(index + 1). 

index es 0, por lo que es setIndex(1). 

Esto le indica a React que recuerde que index ahora es 1 y activa otro renderizado.


3. Segundo renderizado de tu componente. 

React sigue viendo useState(0), pero como recuerda que estableciste index en 1, devuelve ```[1, setIndex]```.


4. ¡Y así sucesivamente!


## Asignar múltiples variables de estado a un componente

Puede tener tantas variables de estado de todos los tipos que desee en un componente. 

Este componente tiene dos variables de estado: un índice numérico y un booleano ```showMore```, que se activa al hacer clic en "Mostrar detalles":


App.js 

```
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}

```

### Es recomendable tener varias variables de estado si sus estados no están relacionados, como index y showMore en este ejemplo. 

### Sin embargo, si suele modificar dos variables de estado a la vez, podría ser más fácil combinarlas en una sola. 

### Por ejemplo, si tiene un formulario con muchos campos, es más conveniente tener una sola variable de estado que contenga un objeto que una variable de estado por campo.

Consulte "Elegir la estructura de estado" para obtener más consejos.


## En profundidad: ¿Cómo sabe React qué estado devolver?

Quizás hayas notado que la llamada a useState no recibe información sobre la variable de estado a la que se refiere. 

No se pasa ningún "identificador" a useState, así que ¿cómo sabe cuál de las variables de estado devolver? 

¿Depende de algún truco, como analizar las funciones? La respuesta es no.


En cambio, para permitir su sintaxis concisa, los Hooks se basan en un orden de llamada estable en cada renderizado del mismo componente. 

Esto funciona bien en la práctica porque si sigues la regla anterior ("solo llama a los Hooks en el nivel superior"), siempre se llamarán en el mismo orden. 

Además, un plugin de linter detecta la mayoría de los errores.


Internamente, React almacena un array de pares de estados para cada componente. 

También mantiene el índice del par actual, que se establece en 0 antes del renderizado. 

Cada vez que llamas a useState, React te proporciona el siguiente par de estados e incrementa el índice. 

Puedes leer más sobre este mecanismo en React Hooks: No es magia, solo arrays.


Este ejemplo no usa React pero te da una idea de cómo funciona useState internamente

index.js 

```
let componentHooks = [];
let currentHookIndex = 0;

// How useState works inside React (simplified).
function useState(initialState) {
  let pair = componentHooks[currentHookIndex];
  if (pair) {
    // This is not the first render,
    // so the state pair already exists.
    // Return it and prepare for next Hook call.
    currentHookIndex++;
    return pair;
  }

  // This is the first time we're rendering,
  // so create a state pair and store it.
  pair = [initialState, setState];

  function setState(nextState) {
    // When the user requests a state change,
    // put the new value into the pair.
    pair[0] = nextState;
    updateDOM();
  }

  // Store the pair for future renders
  // and prepare for the next Hook call.
  componentHooks[currentHookIndex] = pair;
  currentHookIndex++;
  return pair;
}

function Gallery() {
  // Each useState() call will get the next pair.
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  // This example doesn't use React, so
  // return an output object instead of JSX.
  return {
    onNextClick: handleNextClick,
    onMoreClick: handleMoreClick,
    header: `${sculpture.name} by ${sculpture.artist}`,
    counter: `${index + 1} of ${sculptureList.length}`,
    more: `${showMore ? 'Hide' : 'Show'} details`,
    description: showMore ? sculpture.description : null,
    imageSrc: sculpture.url,
    imageAlt: sculpture.alt
  };
}

function updateDOM() {
  // Reset the current Hook index
  // before rendering the component.
  currentHookIndex = 0;
  let output = Gallery();

  // Update the DOM to match the output.
  // This is the part React does for you.
  nextButton.onclick = output.onNextClick;
  header.textContent = output.header;
  moreButton.onclick = output.onMoreClick;
  moreButton.textContent = output.more;
  image.src = output.imageSrc;
  image.alt = output.imageAlt;
  if (output.description !== null) {
    description.textContent = output.description;
    description.style.display = '';
  } else {
    description.style.display = 'none';
  }
}

let nextButton = document.getElementById('nextButton');
let header = document.getElementById('header');
let moreButton = document.getElementById('moreButton');
let description = document.getElementById('description');
let image = document.getElementById('image');
let sculptureList = [{
  name: 'Homenaje a la Neurocirugía',
  artist: 'Marta Colvin Andrade',
  description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
  url: 'https://i.imgur.com/Mx7dA2Y.jpg',
  alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'  
}, {
  name: 'Floralis Genérica',
  artist: 'Eduardo Catalano',
  description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
  url: 'https://i.imgur.com/ZF6s192m.jpg',
  alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
}, {
  name: 'Eternal Presence',
  artist: 'John Woodrow Wilson',
  description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
  url: 'https://i.imgur.com/aTtVpES.jpg',
  alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
}, {
  name: 'Moai',
  artist: 'Unknown Artist',
  description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
  url: 'https://i.imgur.com/RCwLEoQm.jpg',
  alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
}, {
  name: 'Blue Nana',
  artist: 'Niki de Saint Phalle',
  description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
  url: 'https://i.imgur.com/Sd1AgUOm.jpg',
  alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
}, {
  name: 'Ultimate Form',
  artist: 'Barbara Hepworth',
  description: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
  url: 'https://i.imgur.com/2heNQDcm.jpg',
  alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
}, {
  name: 'Cavaliere',
  artist: 'Lamidi Olonade Fakeye',
  description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
  url: 'https://i.imgur.com/wIdGuZwm.png',
  alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
}, {
  name: 'Big Bellies',
  artist: 'Alina Szapocznikow',
  description: "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
  url: 'https://i.imgur.com/AlHTAdDm.jpg',
  alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'
}, {
  name: 'Terracotta Army',
  artist: 'Unknown Artist',
  description: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',
  url: 'https://i.imgur.com/HMFmH6m.jpg',
  alt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.'
}, {
  name: 'Lunar Landscape',
  artist: 'Louise Nevelson',
  description: 'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',
  url: 'https://i.imgur.com/rN7hY6om.jpg',
  alt: 'A black matte sculpture where the individual elements are initially indistinguishable.'
}, {
  name: 'Aureole',
  artist: 'Ranjani Shettar',
  description: 'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
  url: 'https://i.imgur.com/okTpbHhm.jpg',
  alt: 'A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.'
}, {
  name: 'Hippos',
  artist: 'Taipei Zoo',
  description: 'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',
  url: 'https://i.imgur.com/6o5Vuyu.jpg',
  alt: 'A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.'
}];

// Make UI match the initial state.
updateDOM();

```


html

```
<button id="nextButton">
  Next
</button>
<h3 id="header"></h3>
<button id="moreButton"></button>
<p id="description"></p>
<img id="image">

<style>
* { box-sizing: border-box; }
body { font-family: sans-serif; margin: 20px; padding: 0; }
button { display: block; margin-bottom: 10px; }
</style>

```

No es necesario que lo comprendas para usar React, pero puede que te resulte un modelo mental útil.


## El estado es aislado y privado.

### El estado es local para una instancia del componente en pantalla. 

### En otras palabras, si renderizas el mismo componente dos veces, cada copia tendrá un estado completamente aislado. 

### Cambiar uno no afectará al otro.


En este ejemplo, el componente Galería anterior se renderiza dos veces sin cambios en su lógica. 

Intenta hacer clic en los botones dentro de cada galería. 

Observa que su estado es independiente.

Gallery.js

```
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <section>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </section>
  );
}

```


App.js

```
import Gallery from './Gallery.js';

export default function Page() {
  return (
    <div className="Page">
      <Gallery />
      <Gallery />
    </div>
  );
}

```

Esto es lo que diferencia el estado de las variables regulares que podrías declarar al principio de tu módulo. 

El estado no está vinculado a una llamada de función específica ni a una ubicación en el código, sino que es local en la pantalla. 

Renderizaste dos componentes <Gallery />, por lo que su estado se almacena por separado.


Observa también que el componente Page no sabe nada sobre el estado de Gallery, ni siquiera si lo tiene. 

A diferencia de las propiedades, el estado es completamente privado para el componente que lo declara. 

El componente padre no puede modificarlo. 

Esto te permite añadir o eliminar el estado de cualquier componente sin afectar al resto.


### ¿Qué sucedería si quisieras que ambas galerías mantuvieran sus estados sincronizados? 

### La forma correcta de hacerlo en React es eliminar el estado de los componentes secundarios y añadirlo a su componente principal compartido más cercano. 

Las siguientes páginas se centrarán en organizar el estado de un solo componente, pero volveremos a este tema en "Compartir el estado entre componentes".


## Rs estado 

### Usa una variable de estado cuando un componente necesite recordar información entre renderizaciones.

Las variables de estado se declaran llamando al hook useState.

Los hooks son funciones especiales que empiezan por "use". Permiten conectarse a funciones de React como el estado.

Los hooks pueden recordar las importaciones: deben llamarse incondicionalmente. Llamar a los hook, incluyendo useState, solo es válido en el nivel superior de un componente u otro hook.

El hook useState devuelve un par de valores: el estado actual y la función para actualizarlo.

Puedes tener más de una variable de estado. Internamente, React las compara por orden.

El estado es privado para el componente. Si lo renderizas en dos lugares, cada copia obtiene su propio estado.


## Ejercicios 

1. Completa la galería

Al pulsar "Siguiente" en la última escultura, el código se bloquea. 

Corrige la lógica para evitar el bloqueo. 

Puedes hacerlo añadiendo lógica adicional al controlador de eventos o desactivando el botón cuando la acción no sea posible.


Después de corregir el bloqueo, añade un botón "Anterior" que muestre la escultura anterior. 

No debería bloquearse en la primera escultura.


App.js

```
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}

```

Solución

Esto añade una condición de protección dentro de ambos controladores de eventos y desactiva los botones cuando es necesario:

```
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button
        onClick={handlePrevClick}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        onClick={handleNextClick}
        disabled={!hasNext}
      >
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}

```

Observe cómo se usan hasPrev y hasNext tanto para el JSX devuelto como dentro de los controladores de eventos. 

Este práctico patrón funciona porque las funciones de los controladores de eventos cierran cualquier variable declarada durante la renderización.


2. Corregir entradas de formulario bloqueadas

Al escribir en los campos de entrada, no aparece nada. 

Es como si los valores de entrada estuvieran bloqueados con cadenas vacías. 

El valor del primer <input> está configurado para coincidir siempre con la variable firstName, y el valor del segundo <input> está configurado para coincidir siempre con la variable lastName. 

Esto es correcto. 

Ambas entradas tienen controladores de eventos onChange, que intentan actualizar las variables según la última entrada del usuario (e.target.value). 

Sin embargo, las variables no parecen recordar sus valores entre renderizaciones. 

Para solucionar esto, utilice variables de estado.

```
export default function Form() {
  let firstName = '';
  let lastName = '';

  function handleFirstNameChange(e) {
    firstName = e.target.value;
  }

  function handleLastNameChange(e) {
    lastName = e.target.value;
  }

  function handleReset() {
    firstName = '';
    lastName = '';
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}

``` 

Solución

Primero, importa useState desde React. 

Luego, reemplaza firstName y lastName con las variables de estado declaradas al llamar a useState. 

Finalmente, reemplaza cada asignación firstName = ... con setFirstName(...) y haz lo mismo con lastName. 

No olvides actualizar handleReset para que el botón de reinicio funcione.

```
import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName('');
    setLastName('');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}

```


3. Solucionar un fallo

Aquí tienes un pequeño formulario que debería permitir al usuario dejar comentarios. 

Al enviarlos, debería mostrar un mensaje de agradecimiento. 

Sin embargo, falla con el mensaje de error "Se han renderizado menos hooks de lo esperado". 

¿Puedes identificar el error y solucionarlo?

```
import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    // eslint-disable-next-line
    const [message, setMessage] = useState('');
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
      }}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}

```

Pista:

¿Existen límites sobre dónde se pueden llamar los Hooks? 

¿Este componente infringe alguna regla? 

Comprueba si hay comentarios que deshabiliten las comprobaciones del linter; aquí es donde suelen esconderse los errores.


Solución:

Los hook solo se pueden llamar en el nivel superior de la función del componente. 

En este caso, la primera definición de isSent sigue esta regla, pero la definición del mensaje está anidada en una condición.


Para solucionar el problema, sáquela de la condición:

```
import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');

  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
      }}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}

```

Intenta mover la segunda llamada a useState después de la condición if y observa cómo esto la vuelve a romper.


Si tu linter está configurado para React, deberías ver un error de linting al cometer un error como este. 

Si no ves ningún error al probar el código defectuoso localmente, debes configurar el linting para tu proyecto.


4. Eliminar estado innecesario

Al hacer clic en el botón, este ejemplo debería solicitar el nombre del usuario y mostrar una alerta de bienvenida. 

Intentaste usar el estado para conservar el nombre, pero por alguna razón, la primera vez muestra "¡Hola, !" y luego "¡Hola, [nombre]!" con la entrada anterior.


Para corregir este código, elimina la variable de estado innecesaria. 

(Más adelante explicaremos por qué no funcionó).


¿Puedes explicar por qué esta variable de estado era innecesaria? 


Solución:

A continuación se presenta una versión corregida que utiliza una variable de nombre regular declarada en la función que la requiere:

```
export default function FeedbackForm() {
  function handleClick() {
    const name = prompt('What is your name?');
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}

```



# Renderizado y confirmación

Antes de que tus componentes se muestren en pantalla, React debe renderizarlos. 

Comprender los pasos de este proceso te ayudará a comprender cómo se ejecuta tu código y a explicar su comportamiento.


Aprenderás:

Qué significa renderizar en React

Cuándo y por qué React renderiza un componente

Los pasos para mostrar un componente en pantalla

Por qué el renderizado no siempre produce una actualización del DOM


Imagina que tus componentes son cocineros en la cocina, preparando deliciosos platos con ingredientes. En este escenario, React es el camarero que recibe las peticiones de los clientes y les trae sus pedidos. Este proceso de solicitud y entrega de la interfaz de usuario consta de tres pasos:

1. Activar un renderizado (entregar el pedido del cliente a la cocina)

2. Renderizar el componente (preparar el pedido en la cocina)

3. Confirmar con el DOM (colocar el pedido en la mesa)

Trigger

```
Component kitchen <- React order 
  Button Card         a Card 

```

Render

```
Card -> Client 
    Card 

```

Commit 

```
React -> Client 
     Card 

```


## Paso 1: Activar un renderizado

Hay dos razones para que un componente se renderice:

1. Es el renderizado inicial del componente.

2. El estado del componente (o de uno de sus antecesores) se ha actualizado.


### Renderizado inicial

#### Al iniciar la aplicación, es necesario activar el renderizado inicial. 

Los frameworks y los entornos de pruebas a veces ocultan este código, pero se realiza llamando a createRoot con el nodo DOM de destino y luego llamando a su método de renderizado con el componente:


Image.js

```
export default function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}

```

index.js

```
import Image from './Image.js';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'))
root.render(<Image />);

```

¡Prueba comentar la llamada root.render() y verás cómo el componente desaparece!


### Se vuelve a renderizar al actualizar el estado.

Una vez renderizado el componente, puedes activar renderizaciones posteriores actualizando su estado con la función "set". 

#### Actualizar el estado del componente pone automáticamente en cola una renderización. 

(Imagínate a un cliente de un restaurante pidiendo té, postre y otras cosas después de su primer pedido, según su nivel de hambre o sed).


State update

```
React <- Client
  new Card/component

```

...triggers...

```
Components <- React
  Card     new Card

```


...render!

```
Components  React 

 Card   ->  Card

```


## Paso 2: React renderiza tus componentes

Tras activar un renderizado, React llama a tus componentes para determinar qué mostrar en pantalla. 

"Renderizar" significa que React llama a tus componentes.


1. En el renderizado inicial, React llamará al componente raíz.

2. Para los renderizados posteriores, React llamará al componente de función cuya actualización de estado activó el renderizado.


Este proceso es recursivo: si el componente actualizado devuelve otro componente, React lo renderizará a continuación; si ese componente también devuelve algo, lo renderizará a continuación, y así sucesivamente. 

El proceso continuará hasta que no haya más componentes anidados y React sepa exactamente qué debe mostrarse en pantalla.


En el siguiente ejemplo, React llamará a Gallery() e Image() varias veces:

Gallery.js

```
export default function Gallery() {
  return (
    <section>
      <h1>Inspiring Sculptures</h1>
      <Image />
      <Image />
      <Image />
    </section>
  );
}

function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}

```

index.js

```
import Gallery from './Gallery.js';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'))
root.render(<Gallery />);

```

1. Durante el renderizado inicial, React creará los nodos DOM para las etiquetas <section>, <h1> y tres <img>.

2. Durante un re-renderizado, React calculará cuáles de sus propiedades, si las hay, han cambiado desde el renderizado anterior. No hará nada con esa información hasta el siguiente paso, la fase de confirmación.


Problema

El renderizado siempre debe ser un cálculo puro:

1. Mismas entradas, misma salida. 

Con las mismas entradas, un componente siempre debe devolver el mismo JSX. 

(¡Cuando alguien pide una ensalada con tomates, no debería recibir una ensalada con cebollas!).


2. Se ocupa de sus propios asuntos. 

No debe cambiar ningún objeto ni variable existente antes del renderizado. 

(Un pedido no debe cambiar el pedido de nadie más).

De lo contrario, puede encontrar errores confusos y un comportamiento impredecible a medida que su código base aumenta en complejidad. 

Al desarrollar en "Modo estricto", React llama a la función de cada componente dos veces, lo que puede ayudar a detectar errores causados ​​por funciones impuras.


## En profundidad: Optimización del rendimiento

### El comportamiento predeterminado de renderizar todos los componentes anidados dentro del componente actualizado no es óptimo para el rendimiento si este se encuentra en una posición muy alta en el árbol. 

Si experimenta un problema de rendimiento, existen varias soluciones opcionales que se describen en la sección "Rendimiento". 

¡No optimice prematuramente!


## Paso 3: React confirma los cambios en el DOM

### Tras renderizar (llamar) los componentes, React modificará el DOM.

1. Para el renderizado inicial, React usará la API del DOM appendChild() para mostrar en pantalla todos los nodos del DOM creados.

2. Para los re-renderizados, React aplicará las operaciones mínimas necesarias (calculadas durante el renderizado) para que el DOM coincida con la última salida del renderizado.


React solo modifica los nodos del DOM si hay una diferencia entre los renderizados. 

Por ejemplo, aquí hay un componente que se re-renderiza con diferentes propiedades pasadas desde su componente padre cada segundo. 

Observa cómo puedes añadir texto en el <input>, actualizando su valor, pero el texto no desaparece cuando el componente se re-renderiza:

Clock.js

```
export default function Clock({ time }) {
  return (
    <>
      <h1>{time}</h1>
      <input />
    </>
  );
}

```

Esto funciona porque, durante este último paso, React solo actualiza el contenido de <h1> con la nueva hora. 

Observa que <input> aparece en el JSX en el mismo lugar que la última vez, por lo que React no modifica ni el valor de <input>.


## Epílogo: Pintado del navegador

Una vez finalizado el renderizado y actualizado el DOM por React, el navegador volverá a pintar la pantalla. 

Aunque este proceso se conoce como "renderizado del navegador", lo llamaremos "pintado" para evitar confusiones en la documentación.

```
Component client  Browser
  Card              Card

```


## Rs Renderizado

Resumen

Cualquier actualización de pantalla en una aplicación React se realiza en tres pasos:

Activación (Trigger)
Renderizado (Render)
Confirmación/cambio (Commit)

Puedes usar el modo estricto para detectar errores en tus componentes.

React no modifica el DOM si el resultado del renderizado es el mismo que la última vez.


# Estado como una instantánea

Las variables de estado pueden parecer variables JavaScript normales, en las que se puede leer y escribir. 

### Sin embargo, el estado se comporta más como una instantánea. 

### Configurarlo no cambia la variable de estado existente, sino que activa un nuevo renderizado.


Aprenderás:

Cómo configurar el estado activa los nuevos renderizados

Cuándo y cómo se actualiza el estado

Por qué el estado no se actualiza inmediatamente después de configurarlo

Cómo los controladores de eventos acceden a una "instantánea" del estado 


## Configurar el estado activa el renderizado.

### Podrías pensar que tu interfaz de usuario cambia directamente en respuesta a un evento del usuario, como un clic. 

### En React, funciona de forma ligeramente diferente a este modelo mental. 

En la página anterior, viste que configurar el estado solicita un nuevo renderizado a React. 

Esto significa que, para que una interfaz reaccione al evento, es necesario actualizar el estado.


En este ejemplo, al pulsar "Enviar", setIsSent(true) indica a React que vuelva a renderizar la interfaz de usuario:

App.js 

```
import { useState } from 'react';

export default function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('Hi!');
  if (isSent) {
    return <h1>Your message is on its way!</h1>
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setIsSent(true);
      sendMessage(message);
    }}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

function sendMessage(message) {
  // ...
}

```

Esto es lo que sucede al hacer clic en el botón:

1. Se ejecuta el controlador de eventos onSubmit.

2. setIsSent(true) establece isSent en true y pone en cola un nuevo renderizado.

3. React vuelve a renderizar el componente según el nuevo valor de isSent.


Analicemos con más detalle la relación entre el estado y el renderizado.


## Renderizar toma una instantánea en el tiempo

### "Renderizar" significa que React llama a tu componente, que es una función. 

### El JSX que devuelves de esa función es como una instantánea de la interfaz de usuario en el tiempo. 

### Sus propiedades, controladores de eventos y variables locales se calcularon utilizando su estado en el momento del renderizado.


A diferencia de una fotografía o un fotograma de una película, la instantánea de la interfaz de usuario que devuelves es interactiva. 

Incluye lógica, como controladores de eventos, que especifican qué sucede en respuesta a las entradas. 

React actualiza la pantalla para que coincida con esta instantánea y conecta los controladores de eventos. 

Como resultado, al pulsar un botón se activará el controlador de clic desde tu JSX.


Cuando React vuelve a renderizar un componente:

1. React vuelve a llamar a tu función.

2. Tu función devuelve una nueva instantánea JSX.

3. React actualiza la pantalla para que coincida con la instantánea que devolvió tu función.


Ejecución de funciones

```
React 

  Form()
  
```

Cálculo de instantanea 

```
Sent!
  <jsx>

```

Actualización del árbol del DOM

```
React           React DOM
  Snapshot        <>
     <>         <>  <>
              <> <>  
```

### Como memoria de un componente, el estado no es como una variable normal que desaparece tras el retorno de la función. 

### El estado reside en React, como si estuviera en un estante, fuera de la función. 

### Cuando React llama a tu componente, te proporciona una instantánea del estado de ese renderizado. 

### Tu componente devuelve una instantánea de la interfaz de usuario con un nuevo conjunto de propiedades y controladores de eventos en su JSX, todo calculado con los valores de estado de ese renderizado.


1. Indicas a React que actualice el estado.

2. React actualiza el valor del estado.

3. React pasa una instantánea del valor del estado al componente.


Aquí tienes un pequeño experimento para mostrarte cómo funciona. 

### En este ejemplo, podrías esperar que al hacer clic en el botón "+3" el contador se triplique, ya que llama a setNumber(number + 1) tres veces.

Mira lo que ocurre al hacer clic en el botón "+3":

App.js

```
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}

```

### El botón +3 modifica de una vez la variable de estado number. 

¡Ten en cuenta que el número solo se incrementa una vez por clic!


### Establecer el estado solo lo cambia para el siguiente renderizado. 

### Durante el primer renderizado, el número era 0. 

Por eso, en el controlador onClick de ese renderizado, el valor de número sigue siendo 0 incluso después de llamar a setNumber(number + 1):

```const [number, setNumber] = useState(0);```


Esto es lo que el controlador de clic de este botón le indica a React que haga:

1. setNumber(number + 1): number es 0, por lo que setNumber(0 + 1).
React se prepara para cambiar number a 1 en el siguiente renderizado.

2. setNumber(number + 1): number es 0, por lo que setNumber(0 + 1).
React se prepara para cambiar number a 1 en el siguiente renderizado.

3. setNumber(number + 1): number es 0, por lo que setNumber(0 + 1).
React se prepara para cambiar number a 1 en el siguiente renderizado.

### Aunque se haya llamado a setNumber(number + 1) tres veces, en el controlador de eventos de este renderizado number siempre es 0, por lo que se ha establecido el estado en 1 tres veces. 

### Por eso, una vez finalizado el controlador de eventos, React vuelve a renderizar el componente con number igual a 1 en lugar de 3.


#### Representación inicial como constante o recta valor inicial y valor final en extremos; repetición y actualización de estos valores

También puedes visualizar esto sustituyendo mentalmente las variables de estado por sus valores en el código. 

Dado que la variable de estado numérica es 0 para esta representación, su controlador de eventos se ve así:

```
<button onClick={() => {
  setNumber(0 + 1);
  setNumber(0 + 1);
  setNumber(0 + 1);
}}>+3</button>

```

#### Para el siguiente render, el número es 1, por lo que el controlador de clic de ese render se ve así:

```
<button onClick={() => {
  setNumber(1 + 1);
  setNumber(1 + 1);
  setNumber(1 + 1);
}}>+3</button>

```

Es por esto que al hacer clic en el botón nuevamente el contador se establecerá en 2, luego en 3 en el siguiente clic, y así sucesivamente.


## Estado a lo largo del tiempo

Intenta adivinar qué alertará al hacer clic en este botón:

```
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        alert(number);
      }}>+5</button>
    </>
  )
}

```

```
h1 -> 0

btn -> 0+5 = 5 (valor final)

alert -> 0 (valor inicial constantes)

repetición:

h1 -> 5

btn -> 5+5 = 10 

alert -> 0

h1 -> 10 

```

Si usas el método de sustitución anterior, puedes suponer que la alerta muestra "0":

setNumber(0 + 5);
alert(0);

#### En el código alert funciona antes que actualice la vista/variable estado


#### ¿Pero qué sucede si le asignas un temporizador a la alerta para que solo se active después de que el componente se vuelva a renderizar? 

¿Mostraría "0" o "5"? ¡Adivina!


App.js 

```
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setTimeout(() => {
          alert(number);
        }, 3000);
      }}>+5</button>
    </>
  )
}

```


#### Si usa el método de sustitución, podrá ver la instantánea del estado transferido a la alerta.

setNumber(0 + 5);
setTimeout(() => {
  alert(0);
}, 3000);


#### El estado almacenado en React puede haber cambiado para cuando se ejecuta la alerta, pero se programó utilizando una instantánea del estado en el momento en que el usuario interactuó con ella.

#### El valor de una variable de estado nunca cambia durante un renderizado, incluso si el código de su controlador de eventos es asíncrono. 

#### Dentro del onClick de ese renderizado, el valor de number sigue siendo 0 incluso después de llamar a setNumber(number + 5). 

#### Su valor se fijó cuando React tomó la instantánea de la interfaz de usuario al llamar a tu componente.

Aquí tienes un ejemplo de cómo esto reduce la probabilidad de errores de sincronización en tus controladores de eventos. 

A continuación, se muestra un formulario que envía un mensaje con un retraso de cinco segundos. 

Imagina este escenario:

1. Presionas el botón "Enviar", enviando "Hola" a Alice.

2. Antes de que finalice el retraso de cinco segundos, cambias el valor del campo "Para" a "Bob".


¿Qué esperas que muestre la alerta? ¿Mostraría "Saludaste a Alice"? ¿O mostraría "Saludaste a Bob"? Adivina con base en lo que sabes y luego inténtalo:

#### Renderizado inicial -> valor inicial variable estado -> instantanea 

#### Saludaste a Alice, el valor de la instantanea es el renderizado inicial/anterior al de la interfaz o re-renderizado

App.js

```
import { useState } from 'react';

export default function Form() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{' '}
        <select
          value={to}
          onChange={e => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

```

React mantiene los valores de estado fijos dentro de los controladores de eventos de un renderizado. 

No tienes que preocuparte por si el estado ha cambiado mientras el código se ejecuta.


Pero ¿qué ocurre si quieres leer el estado más reciente antes de un rerenderizado? 

Te conviene usar una función de actualización de estado, que se explica en la página siguiente.


## Rs re-renderizado

Establecer el estado solicita un nuevo renderizado.

React almacena el estado fuera del componente, como si estuviera en un estante.

Al llamar a useState, React proporciona una instantánea del estado de ese renderizado.

Las variables y los controladores de eventos no sobreviven a los re-renderizados. Cada renderizado tiene sus propios controladores de eventos.

Cada renderizado (y sus funciones) siempre verá la instantánea del estado que React le asignó.

Puedes sustituir el estado en los controladores de eventos, de forma similar a como piensas en el JSX renderizado.

Los controladores de eventos creados anteriormente conservan los valores de estado del renderizado en el que se crearon.


## Ejercicios

1. Implementar un semáforo

Aquí se muestra un componente de semáforo de cruce de peatones que se activa al presionar el botón:


Añade una alerta al controlador de clics. 

Cuando la luz esté verde y diga "Camina", al hacer clic en el botón debería aparecer "Próxima parada". 

Cuando la luz esté roja y diga "Detener", al hacer clic en el botón debería aparecer "Próxima parada".


¿Importa si se activa la alerta antes o después de la llamada a setWalk?

```
import { useState } from 'react';

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
  }

  return (
    <>
      <button onClick={handleClick}>
        Change to {walk ? 'Stop' : 'Walk'}
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}

```


Solución: 

```
import { useState } from 'react';

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    alert(walk ? 'Stop is next' : 'Walk is next');
  }

  return (
    <>
      <button onClick={handleClick}>
        Change to {walk ? 'Stop' : 'Walk'}
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}

```

No importa si se coloca antes o después de la llamada a setWalk. 

El valor de walk en ese render es fijo. 

Llamar a setWalk solo lo cambiará para el siguiente render, pero no afectará al controlador de eventos del render anterior.


Esta línea puede parecer contraintuitiva al principio:

```
alert(walk ? 'Stop is next' : 'Walk is next');

```

Pero tiene sentido si se lee como: "Si el semáforo muestra 'Walk now', el mensaje debería decir 'Stop is next'". 

La variable walk dentro del controlador de eventos coincide con el valor de walk en ese render y no cambia.


Puede verificar que esto sea correcto aplicando el método de sustitución. 

Cuando walk es verdadero, se obtiene:

```
<button onClick={() => {
  setWalk(false);
  alert('Stop is next');
}}>
  Change to Stop
</button>
<h1 style={{color: 'darkgreen'}}>
  Walk
</h1>

```

Entonces, al hacer clic en “Cambiar a parada”, se pone en cola una renderización con la caminata establecida en falso y se alerta “La parada es la siguiente”.



# Puesta en cola de una serie de actualizaciones de estado

### Configurar una variable de estado pondrá en cola otro renderizado. 

### Sin embargo, a veces es necesario realizar varias operaciones con el valor antes de poner en cola el siguiente renderizado. 

### Para ello, es útil comprender cómo React procesa las actualizaciones de estado por lotes.


Aprenderás:

Qué es el procesamiento por lotes y cómo React lo utiliza para procesar múltiples actualizaciones de estado.

Cómo aplicar varias actualizaciones consecutivas a la misma variable de estado.


## Actualizaciones de estado de lotes en React

Es de esperar que al hacer clic en el botón "+3" el contador se incremente tres veces, ya que llama a setNumber(number + 1) tres veces:

Apps.js

```
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}

```
 
En realidad: 

inicial final 
number +  1

0         1
0         1
0         1


### Sin embargo, como puede recordar de la sección anterior, los valores de estado de cada render son fijos, por lo que el valor del número dentro del controlador de eventos del primer render siempre es 0, sin importar cuántas veces llame a setNumber(1):

```
setNumber(0 + 1);
setNumber(0 + 1);
setNumber(0 + 1);

```

Pero hay otro factor en juego. 

### React espera a que se ejecute todo el código de los controladores de eventos antes de procesar las actualizaciones de estado. 

Por eso, la nueva representación solo ocurre después de todas estas llamadas a setNumber().


Esto podría recordarte a un camarero tomando nota en un restaurante. 

¡Un camarero no corre a la cocina al oír tu primer plato! En cambio, te permite terminar tu pedido, modificarlo e incluso tomar nota de los pedidos de otras personas en la mesa.

```
client:
setColor('orange')
setColor('pink')
setColor('blue')

react: 
setColor('blue')

```

### Esto permite actualizar múltiples variables de estado, incluso desde varios componentes, sin generar demasiados re-renderizados. 

### Sin embargo, esto también significa que la interfaz de usuario no se actualizará hasta que se complete el controlador de eventos y cualquier código que contenga. 

### Este comportamiento, también conocido como procesamiento por lotes, acelera considerablemente el funcionamiento de la aplicación React. 

Además, evita los confusos renderizados "a medio terminar" en los que solo se han actualizado algunas variables.


### React no procesa por lotes múltiples eventos intencionales como clics; cada clic se procesa por separado. 

Tenga la seguridad de que React solo procesa por lotes cuando es generalmente seguro hacerlo. 

Esto garantiza que, por ejemplo, si el primer clic en un botón deshabilita un formulario, el segundo no lo vuelva a enviar.


## Actualizar el mismo estado varias veces antes del siguiente renderizado

Es un caso poco común, pero si desea actualizar la misma variable de estado varias veces antes del siguiente renderizado, en lugar de pasar el siguiente valor de estado como setNumber(number + 1), puede pasar una función que calcule el siguiente estado basándose en el anterior en la cola, como setNumber(n => n + 1). Es una forma de indicarle a React que "haga algo con el valor del estado" en lugar de simplemente reemplazarlo.


Intente incrementar el contador ahora.

App.js

```
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
    </>
  )
}

```

Aquí, n => n + 1 se denomina función de actualización. 

Al pasarla a un establecedor de estados:

1. React pone esta función en cola para que se procese después de que se haya ejecutado todo el resto del código en el controlador de eventos.

2. Durante el siguiente renderizado, React revisa la cola y proporciona el estado actualizado final.

```
setNumber(n => n + 1);
setNumber(n => n + 1);
setNumber(n => n + 1);

```

Así funciona React con estas líneas de código al ejecutar el controlador de eventos:

1. setNumber(n => n + 1): n => n + 1 es una función. 

React la añade a una cola.

2. setNumber(n => n + 1): n => n + 1 es una función. 

React la añade a una cola.

3. setNumber(n => n + 1): n => n + 1 es una función. 

React la añade a una cola.


Al llamar a useState durante el siguiente renderizado, React revisa la cola. 

El estado numérico anterior era 0, por lo que React lo pasa a la primera función de actualización como argumento n. 

### Luego, React toma el valor de retorno de la función de actualización anterior y lo pasa a la siguiente función de actualización como n, y así sucesivamente:


queued update 	n 	returns 

n => n + 1 		0 	0 + 1 = 1

n => n + 1 		1 	1 + 1 = 1

n => n + 1 		2 	2 + 1 = 1


#### (La función guardará el return implicito de la función flecha)

#### (a su vez, setNumber -acepta un param- le da valor a la variable de estado number)

#### (Redefinis la lógica)


React almacena 3 como resultado final y lo devuelve desde useState.

Por eso, al hacer clic en "+3" en el ejemplo anterior, el valor se incrementa correctamente en 3.


## ¿Qué ocurre si actualizas el estado después de reemplazarlo?

¿Qué ocurre con este controlador de eventos? 

¿Cuál crees que será el número en el siguiente renderizado?

```
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
}}>

```


#### Definición y manipulación de estado en un controlador 

Ej:

inicial final 
number +  1

```
0         1
0         1
0         1

```

```
setNumber(0 + 1);
setNumber(0 + 1);
setNumber(0 + 1);

```


queued update 	n 	returns 

setNumber(param)
setNumber(0)
setNumber(n => n + 1 ):

```
n => n + 1 	 	0 	0 + 1 = 1

```

Para el controlador:

```
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
}}>

```

useState(0); 
setNumber(0 + 5);
setNumber(5 => 5 + 1);


#### Valor total de la manipulación es 6. Si volvemos a activar el evento queda 6 en 6. 

Esto es lo que este controlador de eventos le indica a React:

1. setNumber(number + 5): number es 0, por lo que setNumber(0 + 5). React añade "replace with 5" a su cola.

2. setNumber(n => n + 1): n => n + 1 es una función de actualización. React añade esta función a su cola.


Durante el siguiente renderizado, React revisa la cola de estado:

queued update  		n 	 	 	returns
									
”replace with 5” 	0 (unused) 		5

n => n + 1 							5 + 1 = 6


#### Reemplaza el valor (number + 5, es solo una suma) y agrega una función (n => n + 1, arrow y fn return con valor) a la cola

React almacena 6 como resultado final y lo devuelve desde useState.


Nota

#### Quizás hayas notado que setState(5) funciona como setState(n => 5), pero n no se utiliza.

number = 5 (?) 

y n => n + 5 (X)

dado que anteriormente: 

queued update 	n 	 	 returns
n => n + 1 	 	5		5 + 1 = 6


```
  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(5);
        setNumber(n => n + 1);
      }}>Increase the number</button>
    </>
  )

```

retorna solo 6. 


#### Y setNumber(5); setNumber(number => number + 1);

```
  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(5);
        setNumber(number => number + 1);
      }}>Increase the number</button>
    </>
  )
  
 ```


## ¿Qué ocurre si reemplazas el estado después de actualizarlo?

Probemos con otro ejemplo. 

¿Cuál crees que será el número en el siguiente renderizado?

```
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
  setNumber(42);
}}>

``` 

#### Expresión, función y cola en setNumber 

#### Expresión 

useState(0)

```
setNumber(number + 1);
setNumber(number + 1);
setNumber(number + 1);

```

Resultado 

```
setNumber(0 + 1);
setNumber(0 + 1);
setNumber(0 + 1);

```


#### función 

useState(0)

```
setNumber(n => n + 1);
setNumber(n => n + 1);
setNumber(n => n + 1);

```


#### cola 

queued update 	n 	returns 

n => n + 1 		0 	0 + 1 = 1

n => n + 1 		1 	1 + 1 = 1

n => n + 1 		2 	2 + 1 = 1


Para: 

```const [number, setNumber] = useState(0);```

```
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
  setNumber(42);
}}>

``` 

setNumber(0 + 5); //5 
setNumber(n => 5 + 1); //6
setNumber(42); // 6 + 42


```
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
}}>

```

setNumber(0 + 5); //5 
setNumber(n => 5 + 1); //6


#### setNumber puede aceptar un variable estado o no

setNumber(number)
setNumber(0)
setNumber(42)
setNumber(number+1) // variable estado y number (expresion)
setNumber(n => n + 1)


#### Expresión de reemplazo 

Así funciona React con estas líneas de código al ejecutar este controlador de eventos:

1. setNumber(number + 5): number es 0, por lo que setNumber(0 + 5). React añade "replace with 5" a su cola.

2. setNumber(n => n + 1): n => n + 1 es una función de actualización. React añade esta función a su cola.

3. setNumber(42): React añade "replace with 42" a su cola.


Durante el siguiente renderizado, React revisa la cola de estado:

queued update		n			returns

”replace with 5”	0 (unused)	5

n => n + 1			5			5 + 1 = 6

”replace with 42”	6 (unused)	42


Luego, React almacena 42 como resultado final y lo devuelve desde useState.

En resumen, así es como se puede entender lo que se pasa al establecedor de estado setNumber:

1. Una función de actualización (p. ej., n => n + 1) se añade a la cola.

2. Cualquier otro valor (p. ej., el número 5) añade "reemplazar con 5" a la cola, ignorando lo que ya está en cola.

Una vez completado el controlador de eventos, React activará un nuevo renderizado. 

Durante este proceso, React procesará la cola. 

### Las funciones de actualización se ejecutan durante el renderizado, por lo que deben ser puras y solo devolver el resultado (usar props). 

### No intentes establecer el estado desde dentro ni ejecutar otros efectos secundarios.

En modo estricto, React ejecutará cada función de actualización dos veces (pero descartará el segundo resultado) para ayudarte a encontrar errores.


## Convenciones de nomenclatura

### Es común nombrar el argumento de la función de actualización con las primeras letras de la variable de estado correspondiente:

```
setEnabled(e => !e);
setLastName(ln => ln.reverse());
setFriendCount(fc => fc * 2);

```

### Si prefiere un código más detallado, otra convención común es repetir el nombre completo de la variable de estado, como setEnabled(enabled => !enabled), o usar un prefijo como setEnabled(prevEnabled => !prevEnabled).


## Rs actualización de estado 

Establecer el estado no cambia la variable en el renderizado existente, sino que solicita un nuevo renderizado.

React procesa las actualizaciones de estado una vez que los controladores de eventos terminan de ejecutarse. Esto se denomina procesamiento por lotes.

Para actualizar un estado varias veces en un mismo evento, puedes usar la función de actualización setNumber(n => n + 1).


## Ejercicios 

1. Corregir un contador de solicitudes

Estás trabajando en una aplicación de mercado de arte que permite al usuario realizar varios pedidos de una obra de arte a la vez.

Cada vez que el usuario pulsa el botón "Comprar", el contador de "Pendientes" debería aumentar en uno. 
 
Después de tres segundos, el contador de "Pendientes" debería disminuir y el de "Completados" debería aumentar.


Sin embargo, el contador de "Pendientes" no funciona correctamente. 

Al pulsar "Comprar", disminuye a -1 (¡lo cual no debería ser posible!). 

Y si pulsas dos veces el botón rápido, ambos contadores parecen comportarse de forma impredecible.


¿Por qué ocurre esto? Corrige ambos contadores.

App.js 

```
import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(pending + 1);
    await delay(3000);
    setPending(pending - 1);
    setCompleted(completed + 1);
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy     
      </button>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

```


Solución: 

Dentro del controlador de eventos handleClick, los valores de pendiente y completado corresponden a los que tenían al momento del clic. 

En el primer renderizado, pendiente era 0, por lo que setPending(pending - 1) se convierte en setPending(-1), lo cual es incorrecto.

### Dado que se desea incrementar o decrementar los contadores, en lugar de establecerlos en un valor concreto determinado durante el clic, se pueden pasar las funciones de actualización:

App.js

```
import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(p => p + 1);
    await delay(3000);
    setPending(p => p - 1);
    setCompleted(c => c + 1);
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy     
      </button>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

```


2. Implementa la cola de estados tú mismo

En este desafío, reimplementarás una pequeña parte de React desde cero. 

No es tan difícil como parece.


Explora la vista previa del entorno de pruebas.

Observa que muestra cuatro casos de prueba. 

Corresponden a los ejemplos que viste anteriormente en esta página. 

Tu tarea es implementar la función getFinalState para que devuelva el resultado correcto en cada uno de esos casos.

Si la implementas correctamente, las cuatro pruebas deberían ser exitosas.


Recibirás dos argumentos: baseState es el estado inicial (por ejemplo, 0) y la cola es un array que contiene una combinación de números (por ejemplo, 5) y funciones de actualización (por ejemplo, n => n + 1) en el orden en que se agregaron.

Tu tarea es devolver el estado final, tal como se muestra en las tablas de esta página.


processQueue.js

```
export function getFinalState(baseState, queue) {
  let finalState = baseState;

  // TODO: do something with the queue...

  return finalState;
}

```


App.js

```
import { getFinalState } from './processQueue.js';

function increment(n) {
  return n + 1;
}
increment.toString = () => 'n => n+1';

export default function App() {
  return (
    <>
      <TestCase
        baseState={0}
        queue={[1, 1, 1]}
        expected={1}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[
          increment,
          increment,
          increment
        ]}
        expected={3}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[
          5,
          increment,
        ]}
        expected={6}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[
          5,
          increment,
          42,
        ]}
        expected={42}
      />
    </>
  );
}

function TestCase({
  baseState,
  queue,
  expected
}) {
  const actual = getFinalState(baseState, queue);
  return (
    <>
      <p>Base state: <b>{baseState}</b></p>
      <p>Queue: <b>[{queue.join(', ')}]</b></p>
      <p>Expected result: <b>{expected}</b></p>
      <p style={{
        color: actual === expected ?
          'green' :
          'red'
      }}>
        Your result: <b>{actual}</b>
        {' '}
        ({actual === expected ?
          'correct' :
          'wrong'
        })
      </p>
    </>
  );
}

```


Pista: 

Se puede empezar con: 

```
export function getFinalState(baseState, queue) {
  let finalState = baseState;

  for (let update of queue) {
    if (typeof update === 'function') {
      // TODO: apply the updater function
    } else {
      // TODO: replace the state
    }
  }

  return finalState;
}

```

Este es el algoritmo exacto descrito en esta página que React utiliza para calcular el estado final:

processQueue.js

```
export function getFinalState(baseState, queue) {
  let finalState = baseState;

  for (let update of queue) {
    if (typeof update === 'function') {
      // Apply the updater function.
      finalState = update(finalState);
    } else {
      // Replace the next state.
      finalState = update;
    }
  }

  return finalState;
}

```


App.js 

```
import { getFinalState } from './processQueue.js';

function increment(n) {
  return n + 1;
}
increment.toString = () => 'n => n+1';

export default function App() {
  return (
    <>
      <TestCase
        baseState={0}
        queue={[1, 1, 1]}
        expected={1}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[
          increment,
          increment,
          increment
        ]}
        expected={3}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[
          5,
          increment,
        ]}
        expected={6}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[
          5,
          increment,
          42,
        ]}
        expected={42}
      />
    </>
  );
}

function TestCase({
  baseState,
  queue,
  expected
}) {
  const actual = getFinalState(baseState, queue);
  return (
    <>
      <p>Base state: <b>{baseState}</b></p>
      <p>Queue: <b>[{queue.join(', ')}]</b></p>
      <p>Expected result: <b>{expected}</b></p>
      <p style={{
        color: actual === expected ?
          'green' :
          'red'
      }}>
        Your result: <b>{actual}</b>
        {' '}
        ({actual === expected ?
          'correct' :
          'wrong'
        })
      </p>
    </>
  );
}

```



# Objetos en el estado 






