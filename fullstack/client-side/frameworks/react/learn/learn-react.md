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





