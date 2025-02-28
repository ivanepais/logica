# Vite 

Herramienta de compilación que tiene como objetivo proporcionar una experiencia de desarrollo más rápida y ágil para proyectos web modernos

Tiene dos partes: 

1. Un servidor de desarrollo que proporciona mejoras enriquecidas de funcionalidades sobre módulos ES nativos, por ejemplo Hot Module Replacement (HMR) extremadamente rápido. 

2. Un comando de compilación que empaqueta tu código con Rollup, preconfigurado para generar recursos estáticos altamente optimizados para producción.

```
$ npm create vite@latest

```

Puedes especificar directamente el nombre del proyecto y la plantilla que deseas usar a través de las opciones de línea de comandos adicionales


## create-vite

Vite requiere Node.js version 18+ o 20+ y algunas plantillas más.

Por ejemplo, para montar un proyecto de Vite + Vue, ejecuta:

```
# npm 7+, se requiere guión doble extra:
npm create vite@latest my-vue-app -- --template vue

```

vanilla	vanilla-ts

vue	vue-ts

react react-ts

etc. 


## index.html y raíz del proyecto

index.html es frontal y central en lugar de estar escondido dentro de public. Esto es intencional: durante el desarrollo, Vite es un servidor e index.html es el punto de entrada a tu aplicación.

trata a index.html como código fuente y como parte del grafo de módulos. Esto resuelve a <script type="module" src="..."> que hace referencia a tu código JavaScript. Incluso <script type="module"> inline y el CSS referenciado a través de <link href> también disfrutan de características específicas de Vite

Similar a los servidores http estáticos, Vite tiene el concepto de un "directorio raíz" desde el cual se sirven tus archivos. Lo verás referenciado como <root> en el resto de la documentación. Las URL absolutas en el código se resolverán utilizando la raíz del proyecto como base, por lo que puedes escribir código como si estuvieras trabajando con un servidor de archivos estático normal (¡excepto que es mucho más poderoso!).

Vite también admite aplicaciones de múltiples páginas con múltiples puntos de entrada .html.


## comandos

```
{
  "scripts": {
    "dev": "vite", // inicia el servidor de desarrollo, alias: `vite dev`, `vite serve`
    "build": "vite build", // compila para producción
    "preview": "vite preview" // vista previa local de compilación para producción
  }
}

```


# React 

```
npm create vite@latest my-react-app -- --template react

```

Con React fácilmente podemos: 

crear y anidar componentes
agregar marcado y estilos
mostrar datos
representar condiciones y listas
responder a eventos y actualizar la pantalla
compartir datos entre componentes


### Creación y anidación de componentes

Las aplicaciones React están formadas por componentes. 

#### Un componente es una parte de la interfaz de usuario (IU) que tiene su propia lógica y apariencia. Un componente puede ser tan pequeño como un botón o tan grande como una página entera.

Los componentes React son funciones de JavaScript que devuelven marcado:

```
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

```

Ahora que ha declarado MyButton, puede anidarlo en otro componente:

```
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

```

Ten en cuenta que <MyButton /> comienza con mayúscula. 

Así sabrás que es un componente de React. 

Los nombres de los componentes de React siempre deben comenzar con mayúscula, mientras que las etiquetas HTML deben estar en minúscula.

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

La palabras claves default export especifican el componente principal del archivo (main).

Si tiene mucho HTML para portar a JSX, puede utilizar un convertidor en línea.


## Marcado con jsx 

La sintaxis de marcado anterior se llama JSX. 

JSX es más estricto que HTML. 

Debes cerrar etiquetas como <br />. 

Tu componente tampoco puede devolver múltiples etiquetas JSX. 

Debes encapsularlas en un elemento principal compartido, como un <div>...</div> o un contenedor <>...</> vacío:


## Agregar estilo 

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


## Visualizar datos 

JSX le permite colocar marcado en JavaScript. 

Las llaves le permiten “escapar” hacia JavaScript para que pueda incrustar alguna variable de su código y mostrarla al usuario. 

Por ejemplo, esto mostrará user.name:

```
return (
<h1>
{user.name}
</h1>
);

```

#### También puede “escapar hacia JavaScript” desde los atributos de JSX, pero debe usar llaves en lugar de comillas. 

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


## Renderizado condicional 

En React, no existe una sintaxis especial para escribir condiciones. 

En su lugar, utilizará las mismas técnicas que utiliza al escribir código JavaScript normal. 

Por ejemplo, puede utilizar una declaración if para incluir condicionalmente JSX:

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

Todos estos enfoques también funcionan para especificar atributos de manera condicional. 

Si no está familiarizado con alguna de estas sintaxis de JavaScript, puede comenzar utilizando siempre if...else.


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


## Responder a eventos 

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


## Actualizar pantalla

A menudo, querrás que tu componente “recuerde” cierta información y la muestre. 

Por ejemplo, tal vez quieras contar la cantidad de veces que se hace clic en un botón. 

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


## Hooks 

Las funciones que comienzan con use se denominan Hooks. 

useState es un Hook integrado proporcionado por React. 

Puedes encontrar otros Hooks integrados en la referencia de API. 

También puedes escribir tus propios Hooks combinando los existentes.

Los Hooks son más restrictivos que otras funciones. 

Solo puedes llamar Hooks en la parte superior de tus componentes (u otros Hooks). 

Si quieres usar useState en una condición o un bucle, extrae un nuevo componente y colócalo allí.


## Compartir datos entre componentes

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


## Tic-tac-toe

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


### Proyecto 

Tenemos archivos como App.js, index.js, styles.css una carpeta public.

### App.js 

```
export default function Square() {
  return <button className="square">X</button>;
}

``` 

El navegador debería mostrar un cuadrado con una x. 

El código en App.js crea un componente. 

En React, un componente es un fragmento de código reutilizable que representa una parte de una interfaz de usuario. 

Los componentes se utilizan para representar, administrar y actualizar los elementos de la interfaz de usuario en su aplicación. 

Veamos el componente línea por línea para ver qué está sucediendo:


La primera línea define una función llamada Square. 

La palabra clave export de JavaScript hace que esta función sea accesible fuera de este archivo. 

#### La palabra clave default indica a otros archivos que usan tu código que es la función principal de tu archivo.


La segunda línea devuelve un botón. 

#### La palabra clave de JavaScript return significa que lo que viene después se devuelve como un valor al llamador de la función. 

<button> es un elemento JSX. 

#### Un elemento JSX es una combinación de código JavaScript y etiquetas HTML que describe lo que desea mostrar. 

#### className="square" es una propiedad o prop de botón que le dice a CSS cómo darle estilo al botón. 

X es el texto que se muestra dentro del botón y </button> cierra el elemento JSX para indicar que cualquier contenido posterior no debe colocarse dentro del botón.


### styles.css 

Este archivo define los estilos para tu aplicación React. 

Los dos primeros selectores CSS (* y body) definen el estilo de grandes partes de tu aplicación, mientras que el selector .square define el estilo de cualquier componente donde la propiedad className esté establecida en square. 

En tu código, esto coincidiría con el botón de tu componente Square en el archivo App.js.


### index.js 

No editarás este archivo durante el tutorial, pero es el puente entre el componente que creaste en el archivo App.js y el navegador web.

```
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import App from './App';

```
Las líneas 1 a 5 reúnen todas las piezas necesarias:

React
La biblioteca de React para comunicarse con los navegadores web (React DOM)
Los estilos para sus componentes
El componente que creó en App.js.

El resto del archivo reúne todas las piezas e inyecta el producto final en index.html en la carpeta pública


### Construir el tablero 

En App.js: el componente para todo el tutorial 

Actualmente el tablero es solo un cuadrado, ¡pero necesitas nueve! Si intentas copiar y pegar tu cuadrado para hacer dos cuadrados como este:

```
export default function Square() {
return <button className="square">X</button><button className="square">X</button>;
} 

```

Obtendrás este error:

```
/src/App.js: Los elementos JSX adyacentes deben estar envueltos en una etiqueta envolvente. ¿Querías un fragmento JSX <>...</>?

```

Los componentes de React deben devolver un solo elemento JSX y no múltiples elementos JSX adyacentes como dos botones. 

Para solucionar esto, puedes usar Fragmentos (<> y </>) para encapsular varios elementos JSX adyacentes de esta manera:

```
export default function Square() {
  return (
    <>
      <button className="square">X</button>
      <button className="square">X</button>
    </>
  );
}

```

¡Genial! Ahora solo tienes que copiar y pegar unas cuantas veces para agregar nueve cuadrados y…


¡Oh, no! Los cuadrados están todos en una sola línea, no en una cuadrícula como la que necesitas para nuestro tablero. 

Para solucionar esto, tendrás que agrupar los cuadrados en filas con divs y agregar algunas clases CSS. 

Mientras lo haces, le darás un número a cada cuadrado para asegurarte de saber dónde se muestra cada uno.


En el archivo App.js, actualiza el componente Square para que se vea así:

```
export default function Square() {
  return (
    <>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}

```

El CSS definido en styles.css aplica estilos a los divs con el nombre de clase board-row. 

Ahora que ha agrupado sus componentes en filas con los divs con estilos, tiene su tablero de tres en raya:


Pero ahora tienes un problema. 

Tu componente llamado Square ya no es realmente un cuadrado. 

Vamos a solucionarlo cambiándole el nombre a Board:

```
export default function Board() {
//...
}

```

En este punto, tu código debería verse así:

```
export default function Board() {
  return (
    <>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
		//...
	
```


### Pasar datos a través de props

A continuación, querrás cambiar el valor de un cuadrado de vacío a "X" cuando el usuario haga clic en el cuadrado. 

Con la forma en que has creado el tablero hasta ahora, deberás copiar y pegar el código que actualiza el cuadrado nueve veces (¡una vez por cada cuadrado que tengas)! En lugar de copiar y pegar, la arquitectura de componentes de React te permite crear un componente reutilizable para evitar código duplicado y desordenado.

Primero, vas a copiar la línea que define tu primer cuadrado (<button className="square">1</button>) de tu componente Board a un nuevo componente Cuadrado:

```
function Square() {
  return <button className="square">1</button>;
}

export default function Board() {
  // ...
}

```
 
Luego, actualizará el componente Board para representar ese componente Cuadrado usando la sintaxis JSX:

```
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

```

Observa que, a diferencia de los divs del navegador, tus propios componentes Board y Square deben comenzar con una letra mayúscula.

Echemos un vistazo:

¡Oh, no! Perdiste los cuadrados numerados que tenías antes. 

Ahora cada cuadrado dice "1". 

#### Para solucionar esto, usarás props para pasar el valor que debe tener cada cuadrado desde el componente padre (Board) a su hijo (Square).

Actualiza el componente Square para leer el valor prop que pasarás desde Board:

```
function Square({ value }) {
return <button className="square">1</button>;
}

```

function Square({ value }) indica que al componente Square se le puede pasar un prop llamado value.

Ups, esto no es lo que querías:

Querías mostrar la variable de JavaScript llamada value desde tu componente, no la palabra “value”. Para “escapar a JavaScript” desde JSX, necesitas llaves. Agrega llaves alrededor de value en JSX de la siguiente manera:

```
function Square({ value }) {
return <button className="square">{value}</button>;
}

```

Por ahora, deberías ver un tablero vacío:

Esto se debe a que el componente Board aún no ha pasado la propiedad value a cada componente Square que renderiza. 

Para solucionarlo, deberá agregar la propiedad value a cada componente Square renderizado por el componente Board:

```
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}

```

Ahora deberías ver una cuadrícula de números nuevamente:

Tu código actualizado debería verse así:

```
function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}

```


### Componente interactivo 

Rellenemos el componente Square con una X cuando hagas clic en él.

Declara una función llamada handleClick dentro del Square. 

Luego, agrega onClick a las propiedades del elemento JSX del botón que devuelve el Square:

```
function Square({ value }) {
  function handleClick() {
    console.log('clicked!');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

```

Si haces clic en un cuadrado ahora, deberías ver un registro que diga "¡clicé!" en la pestaña Consola 

Los registros de consola repetidos con el mismo mensaje no crearán más líneas en la consola. 

En cambio, verás un contador que aumenta junto a tu primer registro "¡clicé!".


Como siguiente paso, quieres que el componente Square “recuerde” que se hizo clic en él y lo rellene con una marca “X”. 

Para “recordar” cosas, los componentes usan el estado.


React proporciona una función especial llamada useState que puedes llamar desde tu componente para que “recuerde” cosas. 

Almacenemos el valor actual del Square en el estado y cambiémoslo cuando se haga clic en el Square.


Importa useState en la parte superior del archivo. 

Elimina la propiedad value del componente Square. 

En su lugar, agrega una nueva línea al comienzo del Square que llama a useState. 

Haz que devuelva una variable de estado llamada value:

```
import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    //...

```

value almacena el valor y setValue es una función que se puede usar para cambiar el valor. El valor null que se pasa a useState se usa como valor inicial para esta variable de estado, por lo que value comienza aquí igual a null.

Dado que el componente Square ya no acepta más propiedades, eliminará la propiedad value de los nueve componentes Square creados por el componente Board:

```
// ...
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

```

Ahora cambiará Square para que muestre una "X" cuando se haga clic en él. 

Reemplace el controlador de eventos console.log("clicked!"); con setValue('X');. 

Ahora su componente Square se verá así

```
function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

```

Al llamar a esta función set desde un controlador onClick, le estás indicando a React que vuelva a renderizar ese cuadrado cada vez que se haga clic en su botón <button>. 

Después de la actualización, el valor del cuadrado será 'X', por lo que verás la "X" en el tablero de juego. 

Haz clic en cualquier cuadrado y debería aparecer una "X":


Cada cuadrado tiene su propio estado: el valor almacenado en cada cuadrado es completamente independiente de los demás. 

Cuando llamas a una función de conjunto en un componente, React también actualiza automáticamente los componentes secundarios que se encuentran dentro.

Después de realizar los cambios anteriores, tu código se verá así:

```
import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

```


### React Dev Tools 

Permite verificar las propiedades y el estado de tus componentes de React.


### Completando el juego 

En este punto, tienes todos los componentes básicos para tu juego de tres en raya. 

Para tener un juego completo, ahora necesitas alternar la colocación de “X” y “O” en el tablero, y necesitas una forma de determinar un ganador.


#### Elevar estado 

Actualmente, cada componente de Cuadrado mantiene una parte del estado del juego. 

Para verificar si hay un ganador en un juego de tres en raya, el Tablero necesitaría saber de alguna manera el estado de cada uno de los 9 componentes de Cuadrado.


¿Cómo abordarías eso? Al principio, podrías suponer que el Tablero necesita “pedirle” a cada Cuadrado el estado de ese Cuadrado. 

Aunque este enfoque es técnicamente posible en React, lo desaconsejamos porque el código se vuelve difícil de entender, susceptible a errores y difícil de refactorizar. 

#### En cambio, el mejor enfoque es almacenar el estado del juego en el componente principal del Tablero en lugar de en cada Cuadrado. 

El componente del Tablero puede decirle a cada Cuadrado qué mostrar al pasar una propiedad, como lo hiciste cuando pasaste un número a cada Cuadrado.

#### Para recopilar datos de varios componentes secundarios o para que dos componentes secundarios se comuniquen entre sí, declara el estado compartido en su componente principal.

El componente principal puede pasar ese estado a los componentes secundarios a través de propiedades.

Esto mantiene a los componentes secundarios sincronizados entre sí y con su componente principal.

La transferencia de estado a un componente principal es común cuando se refactorizan los componentes de React


Edite el componente Board para que declare una variable de estado denominada squares que, por defecto, sea una matriz de 9 valores nulos correspondientes a los 9 cuadrados:

```
// ...
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    // ...
  );
}

```

Array(9).fill(null) crea una matriz con nueve elementos y establece cada uno de ellos como nulo.

La llamada useState() que la rodea declara una variable de estado de cuadrados que inicialmente se establece en esa matriz.

Cada entrada de la matriz corresponde al valor de un cuadrado. 

Cuando complete el tablero más adelante, la matriz de cuadrados se verá así:

```
['O', null, 'X', 'X', 'X', 'O', 'O', null, null]

```

Ahora, su componente Tablero debe pasar la propiedad de valor a cada cuadrado que renderiza

```
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}

```

Editará el componente Square para recibir la propiedad value del componente Board. 

Esto requerirá eliminar el seguimiento con estado del valor del componente Square y la propiedad onClick del botón:

```
function Square({value}) {
return <button className="square">{value}</button>;
}

```

En este punto, debería ver un tablero de tres en raya vacío

Y tu código debería verse así:

```
import { useState } from 'react';

function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}

```

Cada cuadrado recibirá ahora una propiedad de valor que será 'X', 'O' o nulo para los cuadrados vacíos.

A continuación, debe cambiar lo que sucede cuando se hace clic en un cuadrado. 

El componente Tablero ahora mantiene qué cuadrados están llenos.

Deberá crear una forma para que el cuadrado actualice el estado del tablero. 

Dado que el estado es privado para un componente que lo define, no puede actualizar el estado del tablero directamente desde el cuadrado.


En su lugar, pasará una función del componente Tablero al componente Cuadrado y hará que el Cuadrado llame a esa función cuando se haga clic en un cuadrado. 

Comenzará con la función que llamará el componente Cuadrado cuando se haga clic en él. 

Llamará a esa función onSquareClick

```
function Square({ value }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

```

A continuación, agregará la función onSquareClick a las propiedades del componente Square:

```
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

```

Ahora conectarás la propiedad onSquareClick a una función en el componente Board que llamarás handleClick.

Para conectar onSquareClick a handleClick, pasarás una función a la propiedad onSquareClick del primer componente Square:

```
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
        //...
  );
}

```

Por último, definirás la función handleClick dentro del componente Tablero para actualizar la matriz de cuadrados que contiene el estado de tu tablero:

```
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }

  return (
    // ...
  )
}

```

La función handleClick crea una copia de la matriz de cuadrados (nextSquares) con el método slice() Array de JavaScript. 

Luego, handleClick actualiza la matriz nextSquares para agregar X al primer cuadrado (índice [0]).


Al llamar a la función setSquares, React sabe que el estado del componente ha cambiado. 

Esto activará una nueva representación de los componentes que usan el estado de los cuadrados (Tablero), así como de sus componentes secundarios (los componentes cuadrados que conforman el tablero).


JavaScript admite closures, lo que significa que una función interna (p. ej., handleClick) tiene acceso a las variables y funciones definidas en una función externa (p. ej., Board). 

La función handleClick puede leer el estado de los cuadrados y llamar al método setSquares porque ambos están definidos dentro de la función Board.


Ahora puedes agregar X al tablero… pero solo al cuadrado superior izquierdo. 

Tu función handleClick está codificada para actualizar el índice del cuadrado superior izquierdo (0).

Actualicemos handleClick para que pueda actualizar cualquier cuadrado.

Agrega un argumento i a la función handleClick que tome el índice del cuadrado que se va a actualizar:

```
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    // ...
  )
}

```

A continuación, deberá pasar esa i a handleClick. 

Puede intentar configurar la propiedad onSquareClick de square para que sea handleClick(0) directamente en el JSX de esta manera, pero no funcionará.

```
<Square value={squares[0]} onSquareClick={handleClick(0)} />

```

Esta es la razón por la que esto no funciona.

La llamada a handleClick(0) será parte de la representación del componente de la placa.

Debido a que handleClick(0) altera el estado del componente de la placa al llamar a setSquares, todo el componente de la placa se volverá a representar. 

Pero esto ejecuta handleClick(0) nuevamente, lo que genera un bucle infinito:

```
Consola
Demasiadas repeticiones de representación. React limita la cantidad de representaciones para evitar un bucle infinito.

```

¿Por qué este problema no ocurrió antes?

Cuando estabas pasando onSquareClick={handleClick}, estabas pasando la función handleClick como una propiedad.

¡No la estabas llamando! Pero ahora estás llamando a esa función de inmediato (observa los paréntesis en handleClick(0)) y es por eso que se ejecuta demasiado pronto.

¡No quieres llamar a handleClick hasta que el usuario haga clic!


Puedes solucionar esto creando una función como handleFirstSquareClick que llame a handleClick(0), una función como handleSecondSquareClick que llame a handleClick(1), y así sucesivamente. 

Pasarías (en lugar de llamar) estas funciones como propiedades como onSquareClick={handleFirstSquareClick}. 

Esto resolvería el bucle infinito.
 
```
export default function Board() {
  // ...
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        // ...
  );
}

```
 
La nueva sintaxis () =>. 

Aquí, () => handleClick(0) es una función de flecha, que es una forma más corta de definir funciones.

Cuando se hace clic en el cuadrado, se ejecutará el código después de => “flecha”, llamando a handleClick(0).


Ahora debe actualizar los otros ocho cuadrados para llamar a handleClick desde las funciones de flecha que pasa. 

Asegúrese de que el argumento para cada llamada de handleClick corresponda al índice del cuadrado correcto:

```
export default function Board() {
  // ...
  return (
    <>
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
};

```

Ahora puedes volver a agregar X a cualquier cuadrado del tablero haciendo clic en ellos:

¡Pero esta vez toda la gestión del estado la maneja el componente Tablero!

Así es como debería verse tu código:

```
import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }

  return (
    <>
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

```

Ahora que el control de estado se encuentra en el componente Tablero, el componente Tablero principal pasa propiedades a los componentes Cuadrados secundarios para que se puedan mostrar correctamente. 

Al hacer clic en un Cuadrado, el componente Cuadrado secundario ahora solicita al componente Tablero principal que actualice el estado del tablero.

Cuando el estado del Tablero cambia, tanto el componente Tablero como todos los Cuadrados secundarios se vuelven a renderizar automáticamente.

Mantener el estado de todos los cuadrados en el componente Tablero le permitirá determinar el ganador en el futuro.


Recapitulemos lo que sucede cuando un usuario hace clic en el cuadrado superior izquierdo de su tablero para agregarle una X:

1. Al hacer clic en el cuadrado superior izquierdo, se ejecuta la función que el botón recibió como su propiedad onClick del cuadrado. 

El componente cuadrado recibió esa función como su propiedad onSquareClick del tablero. 

El componente tablero definió esa función directamente en el JSX. Llama a handleClick con un argumento de 0.

2. handleClick usa el argumento (0) para actualizar el primer elemento de la matriz de cuadrados de nulo a X.

3. El estado de los cuadrados del componente tablero se actualizó, por lo que el tablero y todos sus elementos secundarios se vuelven a renderizar. 

Esto hace que la propiedad de valor del componente cuadrado con índice 0 cambie de nulo a X.


Al final, el usuario ve que el cuadrado superior izquierdo cambió de estar vacío a tener una X después de hacer clic en él.


El atributo onClick del elemento DOM <button> tiene un significado especial para React porque es un componente integrado.

Para componentes personalizados como Square, el nombre depende de usted. 
 
Puede darle cualquier nombre a la propiedad onSquareClick de Square o a la función handleClick de Board y el código funcionaría de la misma manera.

#### En React, es convencional usar nombres onSomething para las propiedades que representan eventos y handleSomething para las definiciones de funciones que manejan esos eventos.


## Thinking in React

React puede cambiar tu forma de pensar sobre los diseños que miras y las aplicaciones que creas. 

Cuando creas una interfaz de usuario con React, primero la divides en partes llamadas componentes.

Luego, describirás los diferentes estados visuales de cada uno de tus componentes. 

Finalmente, conectarás tus componentes para que los datos fluyan a través de ellos. 

Te guiaremos a través del proceso de pensamiento para crear una tabla de datos de productos que se pueda buscar con React
 
 
### Empezemos con la Maqueta/Mockup 

Imagínese que ya tiene una API JSON y una maqueta de un diseñador.

La API JSON devuelve algunos datos que se parecen a esto:

```
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

```

La maqueta se ve así:

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

Para implementar una interfaz de usuario en React, normalmente seguirás los mismos cinco pasos.


### 1: Divida la interfaz de usuario en una jerarquía de componentes

Comience dibujando cuadros alrededor de cada componente y subcomponente en la maqueta y asígneles un nombre. 

Si trabaja con un diseñador, es posible que ya haya nombrado estos componentes en su herramienta de diseño. ¡

Pregúntele!


Dependiendo de su experiencia, puede pensar en dividir un diseño en componentes de diferentes maneras:

1. Programación: use las mismas técnicas para decidir si debe crear una nueva función u objeto. 

Una de esas técnicas es el principio de responsabilidad única, es decir, un componente idealmente solo debería hacer una cosa. 

Si termina creciendo, debe descomponerse en subcomponentes más pequeños.


2. CSS: considere para qué crearía selectores de clase. 

(Sin embargo, los componentes son un poco menos granulares).


3. Diseño: considere cómo organizaría las capas del diseño.


#### Si su JSON está bien estructurado, a menudo encontrará que se corresponde naturalmente con la estructura de componentes de su interfaz de usuario. 
 
Esto se debe a que la interfaz de usuario y los modelos de datos suelen tener la misma arquitectura de información, es decir, la misma forma.

Separe su interfaz de usuario en componentes, donde cada componente coincida con una parte de su modelo de datos.


Hay cinco componentes en esta pantalla:

```
1. FiltrableProductTable (toda la app)

|search...|			 
o Only show products in stock 	2. SearchBar (busqueda y filtro)

Name 		Price 	3. ProductTable ( nombre, precio, frutas y lista)
	
	fruits			4. ProductCategoryRow (frutas)

Apple		  1		5. ProductRow (lista)
Dragonfruit   2
Passionfruit  3

	Vegetables 
	
Spinach 	  2
Pumpkin		  4
Peas 		  1
	
```
 
1. FilterableProductTable (gris) contiene toda la aplicación.
2. SearchBar (azul) recibe la entrada del usuario.
3. ProductTable (lavanda) muestra y filtra la lista según la entrada del usuario.
4. ProductCategoryRow (verde) muestra un encabezado para cada categoría.
5. ProductRow (amarillo) muestra una fila para cada producto.

Si observas ProductTable (lavanda), verás que el encabezado de la tabla (que contiene las etiquetas “Nombre” y “Precio”) no es un componente propio. 

Esto es una cuestión de preferencia y puedes optar por cualquiera de las dos opciones. 

En este ejemplo, es parte de ProductTable porque aparece dentro de la lista de ProductTable. 

Sin embargo, si este encabezado se vuelve complejo (por ejemplo, si agregas ordenación), puedes moverlo a su propio componente ProductTableHeader.


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

Ahora que tienes la jerarquía de componentes, es hora de implementar tu aplicación. 

El enfoque más sencillo es crear una versión que represente la interfaz de usuario de tu modelo de datos sin agregar ninguna interactividad... ¡todavía! 

A menudo es más fácil crear primero la versión estática y agregar la interactividad después. 

Crear una versión estática requiere mucho tipeo y nada de pensamiento, pero agregar interactividad requiere mucho pensamiento y no mucho tipeo.

#### Para crear una versión estática de tu aplicación que represente tu modelo de datos, deberás crear componentes que reutilicen otros componentes y pasen datos mediante props. 

Los props son una forma de pasar datos de padre a hijo. 

(Si está familiarizado con el concepto de estado, no lo utilice para crear esta versión estática. 

El estado está reservado únicamente para la interactividad, es decir, los datos que cambian con el tiempo. 

Dado que se trata de una versión estática de la aplicación, no lo necesita).

Puede crear de "arriba hacia abajo" comenzando por crear los componentes que se encuentran más arriba en la jerarquía (como FilterableProductTable) o de "abajo hacia arriba" trabajando desde los componentes que se encuentran más abajo (como ProductRow). 

En los ejemplos más simples, suele ser más fácil hacerlo de arriba hacia abajo. 

En proyectos más grandes, es más fácil hacerlo de abajo hacia arriba.

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

Después de crear los componentes, tendrás una biblioteca de componentes reutilizables que representan tu modelo de datos. 

Como se trata de una aplicación estática, los componentes solo devolverán JSX. 

El componente en la parte superior de la jerarquía (FilterableProductTable) tomará tu modelo de datos como propiedad. 

Esto se denomina flujo de datos unidireccional porque los datos fluyen hacia abajo desde el componente de nivel superior hasta los que se encuentran en la parte inferior del árbol.


Problema:
En este punto, no deberías estar usando ningún valor de estado. 

¡Eso es para el siguiente paso!


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

```
import { useState } from 'react';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('fruit');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} />
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

function SearchBar({ filterText, inStockOnly }) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} 
        placeholder="Search..."/>
      <label>
        <input 
          type="checkbox" 
          checked={inStockOnly} />
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

Tenga en cuenta que la edición del formulario aún no funciona. 

Hay un error de consola en el sandbox anterior que explica por qué:

```
Consola
Proporcionó una propiedad `value` a un campo de formulario sin un controlador `onChange`. Esto generará un campo de solo lectura.

```

En el sandbox anterior, ProductTable y SearchBar leen las propiedades filterText e inStockOnly para generar la tabla, la entrada y la casilla de verificación. 

Por ejemplo, así es como SearchBar completa el valor de entrada:

```
function SearchBar({ filterText, inStockOnly }) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} 
        placeholder="Search..."/>

```

Sin embargo, todavía no has añadido ningún código para responder a las acciones del usuario, como escribir. 

Este será el paso final.


### 5: Agrega un flujo de datos inverso

Actualmente, tu aplicación se renderiza correctamente con propiedades y estados que fluyen hacia abajo en la jerarquía. 

Pero para cambiar el estado de acuerdo con la entrada del usuario, necesitarás admitir que los datos fluyan en sentido contrario: los componentes del formulario en las profundidades de la jerarquía deben actualizar el estado en FilterableProductTable.

React hace que este flujo de datos sea explícito, pero requiere un poco más de escritura que el enlace de datos bidireccional. Si intentas escribir o marcar la casilla en el ejemplo anterior, verás que React ignora tu entrada. 

Esto es intencional. 

Al escribir <input value={filterText} />, has establecido la propiedad de valor de la entrada para que siempre sea igual al estado filterText que se pasa desde FilterableProductTable. 

Dado que el estado filterText nunca se establece, la entrada nunca cambia.

Quieres que cada vez que el usuario cambie las entradas del formulario, el estado se actualice para reflejar esos cambios. 

El estado es propiedad de FilterableProductTable, por lo que solo puede llamar a setFilterText y setInStockOnly. 

Para permitir que SearchBar actualice el estado de FilterableProductTable, debe pasar estas funciones a SearchBar:

```
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

```

Dentro de SearchBar, agregará los controladores de eventos onChange y establecerá el estado principal a partir de ellos:

```
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
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}

```


Ahora la aplicación funciona 

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

# React TS




## tsx 

```
npm create vite@latest my-react-app -- --template react-ts

```



# Arquitectura React 

1. Componentes: 

2. props: 

3. state: 

4. hooks: 


## Diseño 

1. Datos (json api, etc/entrada) y maqueta (componentes/elementos app)

2. Jerarquía: 

3. props: 

4. state: Objetos y estructura para guardar y recorrer/mostrar/procesar datos/elementos 

5. eventos: respuesta a las acciones del usuario 
invertir el flujo de datos de abajo hacia arriba 


# Solucion problemas React y métodologia 

Componentes			|		1. entrada  
props						2. proceso
state						3. salida
hooks						4. estructura adecuada para almacenar datos
							5. minimizar el problema 
...							6. listar restricciones
							7. listar acciones 
Datos 						8. didividr problema
Jerarquía					9. resolber una parte
props						10. empezar por lo más fácil/restrictivo, sucesivamenete
state: 						11. obtener pistas de las pequeñas cosas que funcionan 
Objetos y estructura 
para guardar y recorrer
/mostrar/procesar 
datos/elementos 
eventos: 
respuesta a las acciones del usuario 


# Gpt 

## Componentes y anidación

Pieza reutilizable de código que representa una parte de la interfaz de usuario

Los componentes pueden ser funcionales o de clase, aunque en la mayoría de los casos hoy en día se usan los funcionales debido a su simplicidad y compatibilidad con los React Hooks.


1. Funcionales: 

Son funciones de JavaScript que retornan JSX (JavaScript XML), el lenguaje de plantilla de React

```
const Saludo = (props) => {
  return <h1>Hola, {props.nombre}!</h1>;
};

```

Función que devuelve JSX.

Recibe props como argumento

Puede usar hooks (como useState y useEffect).


2. Componentes de Clase

Son clases de JavaScript que extienden de React.Component.

```
import React, { Component } from 'react';

class Saludo extends Component {
  render() {
    return <h1>Hola, {this.props.nombre}!</h1>;
  }
}

```

Usa this.props para acceder a las propiedades.

Debe tener un método render().

Puede manejar su propio estado con this.state.


### Props y Estado en React:

1. Props (Propiedades): 

Son valores que un componente recibe de su padre. 

Son inmutables dentro del componente hijo.

2. State (Estado): 

Es información interna del componente que puede cambiar con el tiempo.


Estado en un Componente Funcional usando useState:

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


### Componentes Anidados y Jerarquía:

Los componentes pueden anidarse dentro de otros para formar estructuras más complejas.

Esto permite dividir una interfaz en pequeñas partes reutilizables y organizadas de manera jerárquica

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

Padre renderiza el título y dentro de él coloca <Hijo />, lo que significa que el componente Hijo se anidará dentro del Padre.


### Props a Componente: 

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

Padre le pasa una prop mensaje al Hijo, y este la muestra en pantalla.


### Anidación con Múltiples Componentes

Podemos tener una estructura más compleja con varios niveles de anidación

```
const Nieto = () => {
  return <p>¡Soy el Nieto!</p>;
};

const Hijo = () => {
  return (
    <div>
      <h2>Componente Hijo</h2>
      <Nieto />
    </div>
  );
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

Nieto está anidado dentro de Hijo, y Hijo dentro de Padre.


### Uso de children para Componentes Más Flexibles

A veces queremos que un componente pueda recibir otros componentes dentro de él de forma más flexible.

Esto se hace con props.children.

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



## Visualizar, renderizar escapar datos con sintaxis llave 

La sintaxis de llaves ({}) dentro del JSX te permite insertar y evaluar expresiones JavaScript directamente en el marcado.


1. Inserción de Variables y Expresiones: 

Al colocar una variable o cualquier expresión JavaScript entre llaves, React la evalúa y renderiza su resultado en el DOM.

```
const nombre = 'María';
return <h1>Hola, {nombre}!</h1>;

```

2. Uso de Expresiones Complejas: 

Puedes ejecutar operaciones matemáticas, llamar a funciones o incluso usar expresiones ternarias directamente en el JSX.

```
const suma = 10 + 5;
return <p>La suma es: {suma}</p>;

```


## Props 

Son la forma en que se pasan datos de un componente padre a un componente hijo.

Son inmutables, lo que significa que un componente hijo no puede modificar las props que recibe, solo puede usarlas.

```
const Saludo = (props) => {
  return <h1>Hola, {props.nombre}!</h1>;
};

const App = () => {
  return <Saludo nombre="Juan" />;
};

```

App es el componente padre y pasa "Juan" como valor de la prop nombre al componente Saludo.

Saludo recibe props y accede a props.nombre.


### Destructuración de Props

Para hacer el código más limpio, puedes desestructurar las props directamente en los parámetros de la función:

```
const Saludo = ({ nombre }) => {
  return <h1>Hola, {nombre}!</h1>;
};

```

Hace que el código sea más fácil de leer y mantener.


### Múltiples Props

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

Usuario recibe nombre y edad como props y los muestra en un párrafo.



### Props con Valores por Defecto

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


### Props con children

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

### Props en Componentes de Clase

Si usas componentes de clase, las props se acceden con this.props:

```
class Saludo extends React.Component {
  render() {
    return <h1>Hola, {this.props.nombre}!</h1>;
  }
}

```


## State 

Es un objeto que almacena datos internos de un componente y puede cambiar con el tiempo.

A diferencia de props, que son inmutables y vienen de un componente padre, el estado es mutable y lo maneja el propio componente


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


2. this.state: Estado en Componentes de Clase

En componentes de clase, el estado se maneja con this.state

Se actualiza con this.setState.

```
import React, { Component } from "react";

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 }; // Estado inicial
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <p>Valor del contador: {this.state.contador}</p>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}

export default Contador;

```

this.state almacena el estado inicial.

this.setState({ contador: this.state.contador + 1 }) actualiza el estado.

Cuando el estado cambia, React vuelve a renderizar el componente


3. Estado con Objetos

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


4. Estado con Arrays

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


5. Diferencia entre state y props

state: 

lo define: El propio componente

cambio: Sí

actualización: useState o this.setState


props:

El componente padre

No

No se puede cambiar directamente



## Hooks

Son funciones especiales que permiten usar características como estado y ciclo de vida en componentes funcionales, sin necesidad de clases.

Se introdujeron en React 16.8 y hacen que el código sea más simple y reutilizable.


Antes de los hooks, solo los componentes de clase podían manejar estado y ciclo de vida.

Ahora, los componentes funcionales pueden hacer lo mismo gracias a los hooks.


### SIN hooks (Componente de Clase):

```
class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}

```


### CON hooks (Componente Funcional):

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


### Principales Hooks 

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


Los hooks simplifican el código en React eliminando la necesidad de clases.

Con ellos, los componentes funcionales pueden manejar estado, efectos y contexto.

Hay hooks básicos (useState, useEffect) y avanzados (useReducer, useRef).

Puedes crear custom hooks para organizar mejor tu código.


## Eventos 

Funcionan de manera similar a los eventos en JavaScript, pero con algunas diferencias clave

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


### Eventos en Componentes de Clase

Si usas componentes de clase, los eventos se manejan con this.

```
import React, { Component } from "react";

class Boton extends Component {
  handleClick = () => {
    alert("Botón clickeado!");
  };

  render() {
    return <button onClick={this.handleClick}>Haz clic</button>;
  }
}

export default Boton;

```

En componentes de clase, la función debe estar ligada (this.handleClick) para acceder correctamente al contexto


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


## Custom Hooks 

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

