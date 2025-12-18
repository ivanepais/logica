# Design


## Arq / DDD

### Obj / inf / db

1. purpose: personalization

2. data business in code / match code

3. data match with components / html (inside comp)

person:
name, surname, profession, pic, bio, links

proj:
yourPortfolio, aiState...

widget:
date
time
wheater


### Components

sections

main -> proj
	icons -> links
	
sideRight -> bio

sideLeft -> date, time, wheater


### ui/ux

```
				App
(widget)		(proj)			(person)
date			proj			bio
time				links		pic
wheater			 
```


Mediaqueries:
block -> mid -> full

1. block:
today (min font) o podría sacarlo
proj

o

today pic (min )
proj


2. mid: 
today pic (full size)
proj


3. full



## css

### theme

vars, function

backgroundColor

grid:
gridStyle
gridColor
grid...

person:
personFont
...


### Atom

css modules



## Org

No agrupar por tipo de archivo (components/, hooks/, utils/)
Agrupar por Módulo o Característica de Negocio/feature

```
src/
├── features/               # Agrupación por Característica (El Core de la app)
│   ├── UserProfile/        # Módulo: Perfil de Usuario
│       ├── components/     # Componentes de presentación específicos del módulo
│       │   ├── UserCard.tsx
│       │   └── EditForm.tsx
│       ├── hooks/          # Custom Hooks específicos del módulo
│       │   └── useUserProfile.ts 
│       ├── UserProfile.tsx # Componente Contenedor principal
│       └── index.ts        # Archivo para exportaciones (Barrel File)
├── shared/                 # Elementos reutilizables y transversales
│   ├── components/         # Componentes 'dumb' muy reutilizables (Botón, Modal, Layout)
│   ├── hooks/              # Custom Hooks genéricos (ej. useLocalStorage)
│   ├── utils/              # Funciones auxiliares (ej. formatCurrency)
│   └── types/              # Definiciones globales de tipos e interfaces
│
├── store/                  # Gestión de estado global (Redux, Zustand, etc.)
├── api/                    # Lógica de acceso a datos (fetch, axios)
├── pages/                  # Componentes/Rutas para el enrutador (si no usas Next.js)
├── styles/                 # Archivos de estilos globales (CSS, SCSS)
└── App.tsx                 # Componente principal de la aplicación
```

features/ (o modules/): Contiene los componentes Contenedor que encapsulan la lógica de una parte específica de la aplicación. Dentro de cada característica, agrupa los componentes y hooks que solo se usan allí.
shared/ (o common/): Contiene componentes, hooks o utilidades que se usan en múltiples características o módulos. Son los elementos verdaderamente reutilizables de la aplicación.
api/ (o services/): Contiene la implementación del Patrón Repository, aislando la lógica de acceso a datos (peticiones HTTP) de los componentes


CSS: 

```
src/
├── styles/          # Estilos globales y temas
│   ├── theme.css        # Variables CSS (colores, espaciado)
│   └── global.css       # Estilos base o resets
│
└── components/      # Biblioteca de Componentes Presentacionales
    ├── ui/          # Átomos y Moléculas (Componentes genéricos/reutilizables)
    │   ├── Button/
    │   │   ├── Button.jsx       # Componente (recibe onClick, variant)
    │   │   └── Button.module.css # Estilos con CSS Modules
    |	|
    ├── layouts/     # Plantillas y Estructuras de Alto Nivel (Organismos)
    │   ├── Header/
    │   │   └── Header.jsx       # Recibe props para el menú, logo, etc.
    │   │
    │   ├── Sidebar/
    │   │   └── Sidebar.jsx
    │   │
    │   └── Layout.jsx           # Combina Header, Sidebar y Footer (y usa <Outlet>)
    │
    └── domain/      # Componentes Presentacionales específicos del negocio
        └── ProductCard/
            ├── ProductCard.jsx  # Usa <Button> y <Card> de la capa 'ui'
            └── ProductCard.module.css         
```


Diseño de capas:

Ej 1:

```
/src
├── /api                 <-- 3. Capa de Gestión de Datos (API Clients)
│   └── productosService.js
│   └── authService.js
├── /hooks               <-- 2. Capa de Lógica (Custom Hooks)
│   └── useAuth.js
│   └── useFetch.js
├── /components
│   ├── /ui              <-- 1. Capa de UI (Componentes Atómicos/Tontos)
│   │   └── Boton.jsx
│   │   └── Input.jsx
│   └── /feature         <-- 2. Capa de Lógica (Componentes Contenedores)
│       └── /ListaProductos
│           ├── ListaProductos.jsx  (Contenedor: hace fetch, gestiona estado)
│           └── ProductoCard.jsx    (Presentacional: recibe props)
├── /pages               <-- 1. Capa de UI (Páginas/Rutas)
│   └── HomePage.jsx
│   └── ProfilePage.jsx
└── /store               <-- 2. Capa de Lógica (Estado Global)
    └── authSlice.js
```

Mantenimiento: Si cambias tu backend (ej. cambias de API REST a GraphQL), solo tienes que modificar la Capa de Gestión de Datos, sin tocar la lógica de la UI o de la aplicación

Ej 2:

```
/src
├── /api
│   └── index.js             // Configuración de la instancia de Axios/fetch
│   └── authService.js       // Funciones para llamadas a API de autenticación
│   └── productosService.js  // Funciones para llamadas a API de productos
│
├── /assets                  // Recursos estáticos (imágenes, fuentes, videos)
│
├── /components              // 1. CAPA DE INTERFAZ DE USUARIO (UI)
│   ├── /ui                  // Componentes Atómicos/Presentacionales (Tontos)
│   │   └── Boton.jsx        // <Boton onClick={...} color="primary" />
│   │   └── Input.jsx        // <Input type="text" label="Email" />
│   │   └── Card.jsx
│   │   └── Icono.jsx
│   │
│   └── /layouts             // Componentes que definen la estructura (ej. Cabecera, Pie de página)
│       └── MainLayout.jsx
│       └── Header.jsx
│
├── /features                // 2. CAPA DE LÓGICA Y ESTADO (Por Característica)
│   ├── /auth                // Módulo de Autenticación
│   │   └── components
│   │   │   └── LoginForm.jsx // Contenedor (maneja la lógica de envío)
│   │   └── hooks
│   │   │   └── useLogin.js   // Custom Hook para la lógica de login/fetch
│   │   └── pages
│   │       └── LoginPage.jsx // Página que usa el Contenedor
│   │
│   └── /productos           // Módulo de Productos
│       └── components
│       │   └── ListaProductos.jsx // Contenedor (hace fetch, filtra)
│       │   └── ProductoCard.jsx   // Presentacional (recibe producto por prop)
│       └── hooks
│           └── useProductos.js // Custom Hook de fetching y estado
│       └── pages
│           └── ProductsPage.jsx
│
├── /hooks                   // 2. CAPA DE LÓGICA (Custom Hooks Globales)
│   └── useLocalStorage.js   // Ej. Lógica reutilizable por toda la app
│   └── useToggle.js
│
├── /store                   // 2. CAPA DE LÓGICA (Estado Global - Redux/Context)
│   └── authSlice.js         // Reducer/Slice para el estado de autenticación
│   └── productsSlice.js
│   └── context              // Alternativa para Context API
│       └── AuthContext.js
│
├── /utils                   // Funciones de ayuda sin lógica de React
│   └── formatters.js        // Funciones de formato de fechas, monedas
│   └── validators.js        // Funciones de validación de datos
│
├── App.jsx                  // Punto de entrada principal (manejo de rutas y Providers)
└── main.jsx                 // Montaje de la aplicación (entry point)
``` 



## Comp

Components

sections:

main -> proj
	icons -> links
	
sideRight -> bio

sideLeft -> date, time, wheater


ui/ux:

```
				App
(widget)		(proj)			(person)
date			proj			bio
time				links		pic
wheater			 
```


### SRP

Dumb: (reciben data de smart) 
atom/present

Smart: (pasan data a dumb)
conten

hooks: ... 
log


### files

```
1. src/
		features
			profile
				components
				hooks
				profile.jsx/tsx
				
2. shared
		components
		hooks
		utils
		
3. store/globalState

4. api

5. pages

6. style

7. app.js
```



## Cod

1. srp 
principio de responsabilidad única, es decir, un componente idealmente solo debería hacer una cosa. 
Si termina creciendo, debe descomponerse en subcomponentes más pequeños.


2. modelo y componente
Esto se debe a que la interfaz de usuario y los modelos de datos suelen tener la misma arquitectura de información, es decir, la misma forma.
Separe su interfaz de usuario en componentes, donde cada componente coincida con una parte de su modelo de datos.


3. Versión estática y modelo
represente tu modelo de datos, deberás crear componentes que reutilicen otros componentes y pasen datos mediante props. 
Puede crear de "arriba hacia abajo":
comenzando por crear los componentes que se encuentran más arriba en la jerarquía
o de "abajo hacia arriba": 
trabajando desde los componentes que se encuentran más abajo (como ProductRow). 

En los ejemplos más simples
suele ser más fácil hacerlo de arriba hacia abajo. 

En proyectos más grandes
es más fácil hacerlo de abajo hacia arriba.

los componentes solo devolverán JSX. 


4. Interactividad/ui: estado
permitir que los usuarios cambien el modelo de datos subyacente. 
Usar DRY

Ej:
si está creando una lista de compras, puede almacenar los artículos como una matriz en el estado. 
Si también desea mostrar la cantidad de artículos en la lista, no almacene la cantidad de artículos como otro valor de estado; en su lugar, lea la longitud de su matriz.

Datos que son estado/deben cambiar con el tiempo
y los que no lo son:

1. ¿Permanece sin cambios con el tiempo? Si es así, no es estado.
2. ¿Se pasa desde un padre a través de propiedades? Si es así, no es estado.
3. ¿Puedes calcularlo en función del estado o las propiedades existentes en tu componente? 
Si es así, no es estado

Ej:

1. La lista original de productos
2. El texto de búsqueda que ingresó el usuario
3. El valor de la casilla de verificación
4. La lista filtrada de productos

La lista original de productos se pasa como propiedades, por lo que no es estado.
El texto de búsqueda parece ser estado ya que cambia con el tiempo y no se puede calcular a partir de nada.
El valor de la casilla de verificación parece ser estado ya que cambia con el tiempo y no se puede calcular a partir de nada.
La lista filtrada de productos no es estado porque se puede calcular tomando la lista original de productos y filtrándola según el texto de búsqueda y el valor de la casilla de verificación.


5. Ubicación del estado

Componente propietario del estado:

identificar qué componente es responsable de cambiar este estado o es el propietario del estado. 
flujo de datos unidireccional
pasa los datos a lo largo de la jerarquía de componentes

1. componente que renderiza algo en función de ese estado
2. Encuentra su componente principal común más cercano 
(un componente por encima de todos ellos en la jerarquía)
3. ubicación del estado:
colocar el estado en su componente principal o
colocar el estado en un componente por encima del principal o
si no se encuentra, crear un componente para que tenga ese estado
y agregarlo en la jerarquía por encima del componente principal


1. Identifique los componentes que usan el estado:
2. Encuentre su componente principal común: 
el primer componente principal que comparten ambos
3. Decida dónde se encuentra el estado:
si es en ese componente o crea uno nuevo

Ej: 

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


6. Flujo de datos inverso y eventos

Ej: si app se renderiza correctamente con propiedades
y estados que fluyen hacia abajo en la jerarquía

Pero necesitamos cambiar el estado de acuerdo con la interacción del usuario
Se necesita que los datos fluyan en sentido contrario  
Los componentes de las profundidades deben actualizar el estado del componente mayor
Quieres que cada vez que el usuario cambie las entradas, el estado se actualice para reflejar esos cambios. 

Ej: SearchBar actualice el estado de FilterableProductTable
debe pasar estas funciones a SearchBar: 

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



Data: 

person:
name, surname, profession, pic, bio, links

proj:
yourPortfolio, aiState...

widget:
date
time
wheater

```
				App
(widget)		(proj)			(person)
date			projects		bio
time				links		pic
wheater			 
```



## React y jsx


### Objetos y arrays

Visualizar datos: escapar hacia js

1. 

```
return (
<h1>
{user.name}
</h1>
);
```

2. 

```
return (
<img
className="avatar"
src={user.imageUrl}
/>
);
```

3. Complejas: concatenación de cadenas, objeto de objeto

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

4. Listas/array: con for, map(), etc

```
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
```

Con map():
transformar una matriz de productos 
en una matriz de elementos <li>

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

Key de arr:
<li> tiene un atributo key para cada elemento de la lista 
cadena o numero de identificación unica para cada hermano
la key debe provenir de tus datos
Ej: como un ID de base de datos
React usa tus claves para saber qué sucedió 
si luego insertas, eliminas o reordenas los elementos.

Ej: 

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

5. Eventos
Funciones de controlador de eventos (event handler) dentro de sus componentes

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

onClick={handleClick} no tiene paréntesis al final 
React llamará a su controlador de eventos cuando el usuario haga clic en el botón.


6. Estado

1. 

```
function MyButton() {
  const [count, setCount] = useState(0);
  // ...
```

Obtendrás dos cosas de useState: el estado actual (count) y la función que te permite actualizarlo (setCount). 

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

2. 
Renderizar el componente varias veces: 
Cada uno tendrá su contador

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

7. Hooks 
Puedes escribir tus propios Hooks combinando los existentes.
Los Hooks son más restrictivos que otras funciones. 
Solo puedes llamar Hooks en la parte superior de tus componentes (u otros Hooks). 
Si quieres usar useState en una condición o un bucle, extrae un nuevo componente y colócalo allí.


8. Compartir datos
Componentes que compartan datos y se actualicen siempre juntos.
Contrario a que cada uno se actualize por separado
Cambiando el estado y la función controladora de lugar: 
1. del componente hijo (button) al componente padre (contenedor del button)
2. le pasamos el resultado del estado a los hijos desde el padre
3. el componente hijo debe tener las props que va a recibir:
la variable estado y la funcion controlador 

Mover hacia arriba/upwards
al componente más cercano que los contenga a todos.

```
		MyApp
		count=1
		/   \
(count=1)	(count=1)
	|			|
MyButton	MyButton
```

Ej: 
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

La propiedad onClick de cada botón se estableció en la función handleClick dentro de MyApp, por lo que el código dentro de ella se ejecuta. 
El nuevo valor de count se pasa como una propiedad a cada botón, por lo que todos muestran el nuevo valor. 
Esto se llama "elevar el estado/“lifting state up”". Al subir el estado, lo has compartido entre componentes.


## Array de Objetos

manejar colecciones de datos estructurados
permite a React renderizar listas dinámicas y contenido repetitivo.

colección de ítems con atributos definidos
como una tabla de base de datos o una hoja de cálculo, pero en JavaScript.

1. Renderizado de Listas Dinámicas (principal)
renderizar cualquier lista de elementos repetitivos en la ui

Se usa map() dentro de jsx
##### Por cada objeto en el array, se crea un componente React o un elemento HTML.

Ej:
Una lista de productos en una tienda.
Una lista de comentarios en un blog.
Los ítems en una barra de navegación.
Una lista de tareas pendientes (todos).

```
const productos = [
  { id: 1, nombre: 'Laptop', precio: 1200, stock: 5 },
  { id: 2, nombre: 'Monitor', precio: 300, stock: 12 },
  { id: 3, nombre: 'Teclado', precio: 75, stock: 20 },
];

function ListaProductos() {
  return (
    <ul>
      {/* Usamos .map() para iterar sobre el array de objetos */}
      {productos.map(producto => (
        <li key={producto.id}> {/* Siempre usar la key única! */}
          <strong>{producto.nombre}</strong> - ${producto.precio} 
          ({producto.stock} en stock)
        </li>
      ))}
    </ul>
  );
}
```


2. Gestión del Estado de Componentes (State Management)

##### Los arrays de objetos se utilizan para almacenar datos que cambian con el tiempo, gestionados por el hook useState.

Uso: Cuando un usuario añade un nuevo ítem (p. ej., una nueva tarea),
se crea un nuevo objeto y se añade al array de estado, forzando a React a re-renderizar la lista.

Regla: para actualizar un estado que es un array
siempre debes crear un nuevo array (inmutabilidad).

```
// Asumiendo que 'tareas' es el array de objetos en el estado
const [tareas, setTareas] = useState([
  { id: 1, texto: 'Comprar leche', completada: false }
]);

const handleAddTask = (nuevaTareaTexto) => {
  const nuevaTarea = {
    id: Date.now(), // ID único
    texto: nuevaTareaTexto,
    completada: false,
  };
  
  // Creamos un nuevo array con las tareas existentes + la nueva
  setTareas(prevTareas => [...prevTareas, nuevaTarea]); 
};
```


3. Propiedades de Componentes (Passing Props)

pasar un conjunto completo de datos de un componente padre a un componente hijo para que este lo renderice.

```
// Componente Padre
function App() {
  const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
  return <UserList data={users} />; // Pasar el array como una prop
}

// Componente Hijo
function UserList({ data }) {
  // El componente hijo mapea el array de objetos recibido
  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```


4. Definición de Configuración (Estática)

##### Los arrays de objetos se usan para definir la estructura estática de la UI
como menús, tablas o formularios, que luego se mapean.

Ej:

Definir las columnas de una tabla:
cada objeto especifica el encabezado, el campo de datos y el renderizador.

Definir los enlaces de un menú:
cada objeto tiene el label y la ruta (path).

```
const navLinks = [
  { label: 'Inicio', path: '/' },
  { label: 'Productos', path: '/products' },
  { label: 'Contacto', path: '/contact' },
];

function NavBar() {
  return (
    <nav>
      {navLinks.map(link => (
        <a key={link.label} href={link.path}>{link.label}</a>
      ))}
    </nav>
  );
}
```


Inmutabilidad: prop key

Al mapear un array de objetos para renderizar una lista
siempre debes proporcionar una prop key única al elemento raíz que se devuelve en el map

React usa la key para identificar qué elementos han cambiado, se han añadido o se han eliminado
Esto optimiza el proceso de re-renderizado y evita errores, especialmente al trabajar con entradas de formularios o animaciones.

Mejor key: Un ID único y estable (producto.id o uuid).

Peor key: El índice del array (index).
Solo úsalo si los ítems de la lista son completamente estáticos y nunca cambiarán de orden.


### Copia inmutable de un array con objetos

Operación fundamental y crítica con useState o reducers
garantiza que React detecte correctamente los cambios y se re-renderice solo cuando es necesario

Los arrays y objetos en JavaScript son tipos de referencia
Con una copia superficial solo copia la referencia de la memoria.

React y Detección de Cambios: React compara las referencias de memoria del estado anterior y del nuevo estado.

Mutación (Mala): Si modificas el array o el objeto directamente (ej: array.push(newItem)), la referencia de memoria sigue siendo la misma
React piensa que el estado no ha cambiado y no se re-renderiza la interfaz, causando bugs sutiles.


Inmutabilidad:
Si creas una copia nueva del array y del objeto modificado, la referencia de memoria es nueva
React detecta el cambio y realiza el re-renderizado.

Para array de objetos:
1. Copiar el Array Externo (el contenedor).
2. Copiar el Objeto Interno que va a ser modificado.

Operaciones Inmutables Comunes:
Añadir, Eliminar, Actualizar de forma inmutable

#### 1. Añadir un Nuevo Objeto (Add)
solo necesitas copiar el array externo, ya que el ítem que añades es un nuevo objeto por sí mismo.

Método: Operador de propagación (...)

```
const [items, setItems] = useState([{ id: 1, text: 'Old Item' }]);

const handleAddItem = (newItemText) => {
  const newItem = {
    id: Date.now(),
    text: newItemText
  };

  // Crea un NUEVO array con los items anteriores + el nuevo item
  setItems(prevItems => [...prevItems, newItem]);
};
```


#### 2. Eliminar un Objeto (Delete)
eliminar un ítem: crear un nuevo array que contenga solo aquellos ítems que deseas conservar.

Método: filter()

```
const handleRemoveItem = (itemIdToRemove) => {
  // Crea un NUEVO array que excluye el ítem con el ID coincidente
  const newItems = items.filter(item => item.id !== itemIdToRemove);

  setItems(newItems);
};
```


#### 3. Actualizar un Objeto Existente (Update) 
operación más compleja, requiere una doble copia inmutable:

1. Copiar el Array Externo (usando map).
2. Copiar el Objeto Interno que se está modificando.
3. map() + Operador de propagación (...)

```
const [items, setItems] = useState([
  { id: 1, text: 'Comprar leche', done: false },
  { id: 2, text: 'Pagar luz', done: false },
]);

const handleToggleDone = (itemIdToUpdate) => {
  // 1. Usar .map() para iterar y crear un NUEVO array
  const updatedItems = items.map(item => {
    
    // Si encontramos el ítem a actualizar:
    if (item.id === itemIdToUpdate) {
      // 2. Copiar el OBJETO y solo modificar la propiedad deseada
      return { 
        ...item, // Copia todas las propiedades del objeto original
        done: !item.done // Sobreescribe la propiedad 'done'
      };
    }
    
    // Si no es el ítem, lo devolvemos sin cambios (importante)
    return item; 
  });

  setItems(updatedItems);
};
```


#### 4. Insertar en una Posición Específica (Insert/Reorder)

Si necesitas insertar un ítem en una posición que no sea el final
puedes combinar el operador de propagación con slice().

Método: slice() + Operador de propagación (...)

```
const handleInsertAtIndex = (newItem, index) => {
  setItems(prevItems => [
    // 1. Elementos antes del índice
    ...prevItems.slice(0, index), 
    // 2. El nuevo ítem
    newItem,
    // 3. Elementos después del índice
    ...prevItems.slice(index) 
  ]);
};
```

Regla:
##### Para modificar un array/objeto, NO lo cambies directamente
##### crea una copia del contenedor inmediato (array) y luego aplica los cambios a ese nuevo contenedor
##### Si el cambio afecta un objeto dentro del array, también debes COPIAR ese objeto antes de modificarlo.



## Objetos con Arrays

Clave para la organización, categorización y procesamiento de datos en React.

##### Se utiliza cuando los datos se agrupan lógicamente bajo diferentes categorías o claves.

Objetos con propiedades que tienen un array

```
{clave1: [a, b], clave2: [c, d, e]}
```

agrupar ítems relacionados
acceso rápido y una iteración organizada por categoría.


1. Datos Categorizados o Agrupados
presentar contenido organizado en secciones o pestañas
cada clave del objeto es la categoría
el array es la lista de ítems dentro de esa categoría.

Menús/Navegación: 
`links: { 'principal': [...], 'legal': [...], 'social': [...] }`

Productos por Tipo:
`productos: { 'electrónica': [...], 'ropa': [...], 'libros': [...] }`

Permisos de Usuario: 
`permisos: { 'admin': ['crear', 'editar', 'eliminar'], 'lector': ['ver', 'descargar'] }`

Ej: menú por categoría

```
const menuData = {
  // Objeto con Arrays
  platosFuertes: [
    { id: 101, nombre: 'Salmón Grillado', precio: 25 },
    { id: 102, nombre: 'Pasta Alfredo', precio: 18 },
  ],
  postres: [
    { id: 201, nombre: 'Tiramisú', precio: 8 },
    { id: 202, nombre: 'Brownie', precio: 7 },
  ],
};

function MenuComponente() {
  return (
    <div>
      {/* 1. Iterar sobre las claves del Objeto (platosFuertes, postres) */}
      {Object.entries(menuData).map(([categoria, items]) => (
        <section key={categoria}>
          <h2>{categoria.toUpperCase()}</h2>
          <ul>
            {/* 2. Iterar sobre el Array de ítems para renderizar */}
            {items.map(item => (
              <li key={item.id}>{item.nombre} - ${item.precio}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
```


2. Datos de Forms con Múltiples Campos
gestionar el estado de un formulario complejo
donde varias claves (arrays) representan la misma categoría de información
ejemplo, una lista de tags, o múltiples opciones seleccionadas

Selección de Tags:
`formState: { tags: ['react', 'vite', 'css'], selectedUsers: ['user1', 'user2'] }`

Múltiples Archivos:
`uploadState: { archivosAdjuntos: [...], archivosCargados: [...] }`


3. Index y Búsqueda (Acceso Rápido)
El objeto con arrays es superior cuando necesitas acceder a un grupo completo de datos de forma muy rápida utilizando el nombre de la clave.

##### Ventaja: Si tu array tiene miles de ítems y solo quieres buscar los ítems de la categoría "libros"
accedes directamente a productos.libros en lugar de mapear y filtrar el array completo (O(1) vs O(N)).


4. Traducciones y Localización (i18n)
##### Los objetos con arrays son comunes para almacenar datos de traducción cuando se agrupan por pantalla o componente
y el array contiene las frases o variables para ese grupo.

Estructura:
```
{ home: ['welcome_msg', 'login_btn'], profile: ['user_info', 'edit_profile'] }
```


5. Gestión de Estado Centralizada (Reducers/Context)

Redux o Context API:
##### El store o estado global a menudo utiliza esta estructura para organizar las diferentes "entidades" de la aplicación.

Ej: store que separa los usuarios, los posts y los comentarios

```
const appStore = {
  usuarios: [/* array de objetos de usuario */],
  posts: [/* array de objetos de post */],
  comentarios: [/* array de objetos de comentario */],
  // ... más entidades
};
```

Inmutabilidad:
Cuando se trabaja con el estado de React (useState), es crucial mantener la inmutabilidad

Si necesitas modificar un array dentro de tu objeto:
1. Copia el Array: Crea un nuevo array.
2. Copia el Objeto: Crea un nuevo objeto que contenga la versión actualizada del array.

```
// Ejemplo: Añadir un nuevo plato fuerte sin mutar el estado original
const handleAddPlatoFuerte = (nuevoPlato) => {
  setMenuData(prevMenu => ({
    ...prevMenu, // Copia todas las otras claves del objeto (postres, etc.)
    platosFuertes: [...prevMenu.platosFuertes, nuevoPlato], // Crea un nuevo array para esta clave
  }));
};
```


### Copia inmutable de un objeto con arrays
debemos crear nuevas referencias de memoria para los contenedores que cambian.
Crear una nueva copia del objeto externo
Y una nueva copia del array interno que se modifica.

Ej: estado es un objeto que agrupa listas de tareas por prioridad

```
const initialTasks = {
  alta: [
    { id: 1, text: 'Llamar al cliente' }
  ],
  media: [
    { id: 2, text: 'Revisar emails' }
  ],
  baja: [
    { id: 3, text: 'Organizar escritorio' }
  ],
};
// const [tasksByPriority, setTasksByPriority] = useState(initialTasks);
```

1. Añadir un Ítem a un Array Específico
añadir una nueva tarea a la categoría alta
Operación: Copia del Objeto + Copia del Array (usando ...).

```
const handleAddTask = (priority, text) => {
  const newTask = { id: Date.now(), text };

  // 1. Crear un NUEVO objeto de estado
  setTasksByPriority(prevTasks => ({
    // Copia todas las otras categorías (media, baja)
    ...prevTasks, 
    
    // 2. Sobreescribe la clave de la categoría 'priority'
    [priority]: [
      // 3. Crea un NUEVO array de la categoría, añadiendo el nuevo ítem
      ...prevTasks[priority], 
      newTask 
    ]
  }));
};
```

2. Eliminar un Ítem de un Array Específico
eliminar una tarea por su id de la categoría baja
Operación: Copia del Objeto + Filtrado del Array (usando filter()).

```
const handleRemoveTask = (priority, taskIdToRemove) => {
  // 1. Filtrar el array de esa categoría para obtener un NUEVO array
  const newArrayForPriority = tasksByPriority[priority].filter(
    task => task.id !== taskIdToRemove
  );
  
  // 2. Crear un NUEVO objeto de estado
  setTasksByPriority(prevTasks => ({
    ...prevTasks, // Copia las categorías no modificadas
    [priority]: newArrayForPriority // Usamos el array recién filtrado
  }));
};

// Ejemplo de llamada: handleRemoveTask('baja', 3);
```


3. Actualizar un Ítem en un Array Específico
Ej: Queremos cambiar el texto de una tarea en la categoría media.
Operación: Copia del Objeto + Mapeo del Array (usando map()) + Copia del Objeto Interno (usando ...).

```
const handleUpdateTaskText = (priority, taskIdToUpdate, newText) => {
  
  // 1. Crear un NUEVO array mapeando
  const updatedArray = tasksByPriority[priority].map(task => {
    
    if (task.id === taskIdToUpdate) {
      // 2. Copiar el OBJETO INTERNO y actualizar el texto
      return { 
        ...task, 
        text: newText 
      };
    }
    
    return task; // Devolver los objetos no modificados
  });

  // 3. Crear un NUEVO objeto de estado
  setTasksByPriority(prevTasks => ({
    ...prevTasks, // Copia las otras categorías
    [priority]: updatedArray // Reemplaza la categoría modificada
  }));
};

// Ejemplo de llamada: handleUpdateTaskText('media', 2, 'Revisar emails URGENTE');
```


4. Mover un Ítem entre Arrays (Cambiar Categoría)
operación compuesta que requiere Eliminar de un array y Añadir a otro.
Operación: Doble Copia del Objeto + Doble Operación en Arrays.

```
const handleMoveTask = (taskId, oldPriority, newPriority) => {
  // 1. Encontrar el ítem a mover (requiere una copia para evitar mutación indirecta)
  const taskToMove = tasksByPriority[oldPriority].find(t => t.id === taskId);
  if (!taskToMove) return;

  setTasksByPriority(prevTasks => ({
    ...prevTasks,
    
    // 2. Copia inmutable: Eliminar de la antigua categoría
    [oldPriority]: prevTasks[oldPriority].filter(t => t.id !== taskId),
    
    // 3. Copia inmutable: Añadir a la nueva categoría
    [newPriority]: [...prevTasks[newPriority], taskToMove]
  }));
};

// Ejemplo de llamada: handleMoveTask(3, 'baja', 'media');
```

Cuando trabajas con un objeto que tiene claves variables (como priority), recuerda la sintaxis del operador de propagación con corchetes en JavaScript:

```
const newObject = {
  ...oldObject, // Copia todas las propiedades de oldObject
  [dynamicKey]: newValue // Usa el valor de la variable como nombre de propiedad
};
```


## Prácticas

1. Components y props

Children:

```
// El componente Card no se preocupa por el contenido interno
const Card = ({ children }) => (
  <div className="card-estilo">{children}</div>
);

// Uso: Puede contener lo que sea
<Card>
  <h3>Mi título</h3>
  <p>Mi contenido</p>
</Card>
```

Destructuración de Props:
```
const Greeting = ({ name, age }) => {
  return <h1>Hola, {name}, tienes {age} años</h1>;
};
```


2. useState

actualización funcional:
setConteo(prevConteo => prevConteo + 1);

Podría fallar si hay múltiples actualizaciones rápidas
setConteo(conteo + 1);


3. useEffect

Mounting: instancia del componente primera vez en el DOM
ideal para inicializar datos con useEffect
renderizado inicial

Updating:
ocurre cada vez que el estado interno (useState) 
o las propiedades (props) del componente cambian
re-renderizado

unmounting:
ocurre justo antes de que el componente sea eliminado del DOM
ideal para limpieza, deshacer las acciones de useEffect

Side Effects
Se refieren a cualquier acción que realiza un componente que afecta al mundo exterior de la función de renderizado.
Permite declarar que tu componente necesita hacer algo después del renderizado


4. Custom hook 

forma de abstraer lógica compleja que utiliza los Hooks internos de React
(useState, useEffect, useContext, useCallback, etc.)
presentar esa lógica de manera limpia y reusable a cualquier componente que lo necesite.

Resuelven el problema de compartir lógica de estado de una manera muy elegante:


1. Definición del Custom Hook (useContador.js)

```
import { useState, useCallback } from 'react';

// El nombre empieza con 'use'
const useContador = (initialValue = 0) => {
  const [contador, setContador] = useState(initialValue);

  // Usa useCallback para garantizar que la función es estable
  const incrementar = useCallback(() => {
    setContador(prevContador => prevContador + 1);
  }, []);

  const decrementar = useCallback(() => {
    setContador(prevContador => prevContador - 1);
  }, []);

  const reset = useCallback(() => {
    setContador(initialValue);
  }, [initialValue]); // Dependencia: initialValue

  // Devuelve el estado y las funciones que los componentes usarán
  return { contador, incrementar, decrementar, reset };
};

export default useContador;
```

2. Uso 
cualquier componente puede consumir esta lógica
manteniendo su propio estado de contador.

```
import useContador from './useContador';

function BotonesContador() {
  // Llama al hook como si fuera una función normal
  const { contador, incrementar, decrementar, reset } = useContador(10); // Estado inicial 10

  return (
    <div>
      <h3>Valor: {contador}</h3>
      <button onClick={incrementar}>+1</button>
      <button onClick={decrementar}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

Devuelve un Objeto o Arreglo Bien Definido
Decide si el Hook devolverá un arreglo o un objeto, y sé consistente

array: Similar a useState, fácil de desestructurar con cualquier nombre
El orden es importante: Si añades o cambias un valor, puedes romper el código de los consumidores.
Úsalo para casos muy simples o cuando hay un par estado/setter claro (ej: useContador).

objeto: No depende del orden, puedes desestructurar solo lo que necesitas (ej: { estado, isLoading }).
Requiere usar el mismo nombre en la desestructuración
Úsalo para devolver múltiples valores 
o para devolver funciones manejadoras (lo más común).

```
// Objeto (Recomendado para Hooks complejos)
return { estado, isLoading, setError, fetchData };

// Arreglo (Solo para casos simples)
return [contador, incrementar];
```

Acepta Argumentos y Configuración:
tu Hook verdaderamente reusable, debe ser configurable
Permite que los consumidores pasen valores iniciales, parámetros de API, o funciones de callback.

```
// Permite configurar la URL y las opciones de fetch
const useFetch = (url, options = {}) => { /* ... */ };

// Permite configurar el valor inicial del contador
const useContador = (initialValue = 0, step = 1) => { /* ... */ };
```

Estabilizar Funciones y Valores con useCallback y useMemo


5. useReducer
Alternativa a useState, para lógica compleja
cuando el estado de tu componente es un objeto complejo o un arreglo
cuando las actualizaciones de ese estado dependen de múltiples sub-valores
o implican lógica intrincada, basado en el patrón reducer

componentes: 
 
 1. Estado: valor que deseas manejar, similar al estado de useState. 
Suele ser un objeto o arreglo.

2. Acción: objeto simple que describe qué sucedió
tiene dos propiedades:

type: string que describe el tipo de cambio que debe ocurrir
(ej: 'INCREMENTAR', 'AÑADIR_TAREA', 'CERRAR_MODAL').
Es obligatorio.

payload: Opcional, Contiene los datos que son necesarios para realizar la actualización
(ej: el nuevo valor del input, el ID del ítem a eliminar).

3. Función Reductora (Reducer)
función pura que toma el estado actual actual y una acción y devuelve un nuevo estado.

(currentState,action)→newState

siempre debe ser inmutable: nunca debe modificar el currentState directamente
debe devolver un objeto o arreglo completamente nuevo.

Sintaxis: 
En lugar de devolver solo el estado y un setter
devuelve el estado y una función dispatch.

```
const [state, dispatch] = useReducer(reducer, initialState);
```

state: El valor actual del estado
dispatch: Una función para enviar una acción al Reducer.

reducer: La función que contiene la lógica para calcular el nuevo estado.
initialState: El valor inicial del estado

Ej: gestionar el estado de una lista de tareas:

1. Estado Inicial y la Función Reductora

```
// Estado inicial: un arreglo de objetos de tareas
const initialState = [];

// Función Reductora
function todoReducer(state, action) {
  switch (action.type) {
    case 'AÑADIR_TAREA':
      // Actualización inmutable: crea un nuevo arreglo
      return [
        ...state,
        {
          id: Date.now(),
          texto: action.payload, // El dato que necesitamos añadir
          completada: false,
        },
      ];
    case 'TOGGLE_TAREA':
      // Actualización inmutable: usa map para devolver un nuevo arreglo
      return state.map(tarea =>
        tarea.id === action.payload
          ? { ...tarea, completada: !tarea.completada }
          : tarea
      );
    case 'ELIMINAR_TAREA':
      // Actualización inmutable: usa filter para devolver un nuevo arreglo
      return state.filter(tarea => tarea.id !== action.payload);
    default:
      return state;
  }
}
```

2. Uso en el Componente

```
import React, { useReducer } from 'react';

function TodoList() {
  const [tareas, dispatch] = useReducer(todoReducer, initialState);
  
  const handleAñadir = (texto) => {
    // Envía una acción que el Reducer sabe cómo manejar
    dispatch({
      type: 'AÑADIR_TAREA',
      payload: texto, // El texto de la nueva tarea
    });
  };

  const handleToggle = (id) => {
    dispatch({
      type: 'TOGGLE_TAREA',
      payload: id, // El ID de la tarea a marcar/desmarcar
    });
  };

  return (
    <div>
      {/* ... Lógica de input para llamar a handleAñadir ... */}
      {tareas.map(tarea => (
        <div key={tarea.id}>
          <span 
            onClick={() => handleToggle(tarea.id)}
            style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}
          >
            {tarea.texto}
          </span>
          {/* ... Botón de eliminar, etc. ... */}
        </div>
      ))}
    </div>
  );
}
```


6. Eventos 

De mouse

de teclado

forms

focus

portapapeles

media

otros:
onScroll
onWheel
onDragStart
onDrop


7. Estado global y local

local:
estado que solo necesita un único componente o un pequeño grupo de componentes 
relacionados que pasan props entre sí. 
manejado principalmente con useState

global/compartido: 
estado al que acceden multiples componentes no relacionados entre si


1. Básico (local)
Para la mayoría de los componentes, la gestión se realiza directamente en el componente.
useState: Para estados simples (números, strings, booleanos).
useReducer: Para estados complejos que tienen lógica de actualización complicada (transiciones de estado).
Elevación de Estado (Lifting State Up): Cuando varios componentes hermanos necesitan acceder al mismo estado
se mueve el estado al ancestro común más cercano y se pasa hacia abajo mediante props.

2. Intermedio (global nativo)
evitar prop drilling (pasar props por multiples componentes que no lo necesitan para llegar al componentes que si lo necesitan) 
con las soluciones nativas de react
Context API: Proporciona un mecanismo para compartir datos globales (como el tema o el usuario) 
a través del árbol de componentes sin pasar props manualmente.
Context + useReducer: El patrón avanzado donde se usa useReducer para centralizar la lógica de actualización del estado 
y luego se usa la Context API para distribuir ese estado y la función dispatch a todos los componentes que lo necesiten.

3. Avanzado (librerias)
Estado de UI/Global Complejo	Redux / Redux Toolkit	Un store central inmutable con Acciones y Reducers puros
Es ideal para aplicaciones con lógica de negocio muy estricta y trazabilidad.
UI Minimalista	Zustand	Un gestor de estado basado en hooks que es ligero
requiere mucho menos código repetitivo (boilerplate) que Redux.
Atómico	Recoil / Jotai	Trata el estado como unidades discretas (átomos) a las que los componentes se suscriben directamente, optimizando el rendimiento. 
Estado del Servidor	TanStack Query (React Query) / SWR	Se enfoca en gestionar el caché, la revalidación en foco, y la desduplicación de solicitudes de API, resolviendo los problemas comunes de useEffect


8. Context API y useContext

Mecanismo para que componentes compartan datos o estado
Sin prop drilling (pasarlos por todo el componente)

Gestión de estado simple a mediano que necesita ser accesible globalmente o por muchos componentes.

Context API
Permite que un componente en la cima "provea" el valor, y cualquier componente hijo
sin importar cuán profundo esté, puede "consumir" lo directamente.

1. React.createContext (Creación objeto context)

```
// userContext.js
import React from 'react';

// El valor pasado aquí ('null' o { username: 'Invitado' }) es el valor por defecto
// y solo se usa si un componente consumidor no tiene un Provider encima.
const UserContext = React.createContext(null); 

export default UserContext;
```

2. Provider (La Fuente)
Cada objeto Context viene con un componente Provider (UserContext.Provider).
Este es el componente que envuelve a la parte del árbol de la aplicación que necesita acceso a los datos.

Acepta una prop llamada value, que contiene los datos reales que se van a compartir.
Cuando el valor de esta prop cambia, todos los componentes que consumen este Context se vuelven a renderizar.

```
import UserContext from './userContext';
import { useState } from 'react';

function App() {
  const [usuario, setUsuario] = useState({ id: 1, nombre: 'Alice' });

  return (
    // Todos los componentes dentro de este Provider tendrán acceso a 'usuario'
    <UserContext.Provider value={usuario}>
      <ComponenteSuperior />
    </UserContext.Provider>
  );
}
```


3. Consumer (Receptor)

Existen dos formas modernas de que un componente consuma el valor de Context: useContext (moderno), Consumer (clásico) 

1. useContext
forma más limpia y moderna de consumir el Context.

```
import React, { useContext } from 'react';
import UserContext from './userContext';

function ComponenteNieto() {
  // Engancha el Context y obtén el valor directamente
  const usuario = useContext(UserContext); 

  return <h2>Bienvenido, {usuario.nombre}</h2>;
}
```

2. Consumer Clásico 

sintaxis verbosa

```
// ...
function ComponenteNieto() {
  return (
    <UserContext.Consumer>
      {(usuario) => <h2>Bienvenido, {usuario.nombre} (Clásico)</h2>}
    </UserContext.Consumer>
  );
}
```


9.  BrowserRouter, Routes, Route

Router (El Contenedor)
Rutas (<Route>): url + componente
Enlaces (<Link>: para links (a) y <NavLink>: mejora link, aplica estilo )

URL Params
información variable
useParams dentro del componente para leer id

useNavigate: cambiar la ruta después de una acción

useLocation: Devuelve el objeto de ubicación actual (URL, hash, query strings).
Se usa para rastrear la ubicación actual o para pasar el estado entre rutas.

useSearchParams: Devuelve un objeto para leer y modificar los parámetros de consulta (query strings, ej. ?orden=asc).
Ideal para filtros, búsqueda y paginación.

Flujo:
1. El usuario está en /acerca y hace clic en un <Link to="/contacto">
2. El navegador no recarga la página.
3. El BrowserRouter detecta el cambio de URL a /contacto (paso 1).
4. El componente <Routes> encuentra la <Route path="/contacto"> que coincide (paso 2).
5. React Router desmonta el componente Acerca y monta el componente Contacto en el lugar del layout donde se definió <Routes> (paso 3).
6. La UI se actualiza sin interrupción.

Rutas anidadas:
renderizar componentes dentro de otros componentes definidos por rutas
layouts y navegaciones más complejas y estructuradas
permiten que partes de la UI se carguen o cambien mientras el componente padre (el layout) permanece visible.
reflejan la jerarquía de la interfaz de usuario

Si el contenido de la Ruta B siempre se muestra dentro del componente de la Ruta A
entonces la Ruta B debe estar anidada bajo la Ruta A.

<Route>(padre:layout principal)<Outlet><Route>(hijas)

<Outlet> actúa como un marcador de posición.
Le dice al router dónde debe renderizar los componentes de las rutas hijas o anidadas.

Ruta Índice (index): Una ruta anidada que utiliza la prop index (en lugar de path) se renderiza cuando la URL coincide exactamente con la ruta padre (ej. solo /dashboard).
Es el contenido por defecto del <Outlet>

Rutas Relativas: Observa que las rutas hijas (resumen, ajustes) no comienzan con una barra inclinada (/).
Esto las hace relativas a la ruta padre (/dashboard), simplificando el mantenimiento.


Diseño de rutas

1. Seguir Restful
2. guiones medios
3. evitar extensiones y mayus
4. Uso de Rutas de Índice (index)
Utiliza la propiedad index en una ruta anidada
Define el contenido por defecto que se muestra cuando la URL coincide exactamente con la ruta padre
5. usar useParams
6. evitar Query Strings para Identificación 
7. centralizar rutas protegidas
8. evitar logica en query strins
9. constants File para apps grandes

SRP en rutas: 
1. composición siguiendo dominio
2. lógica de proteccion


## CSS

### Flex

Distribuir y alinear ítems dentro de un contenedor
Especialmente cuando necesitas centrar elementos o crear barras de navegación.

1. Contenedor
define el contenedor padre con `display: flex`.
 
display: flex;
elemento como un contenedor flexible de bloque.

display: inline-flex;
elemento como un contenedor flexible de línea.

2. Ejes
Principal: Main Axis
Determinado por la propiedad flex-direction
dirección en la que se disponen los ítems

Cruzado: Cross Axis
eje perpendicular al Eje Principal

flex-direction
row (defecto), column, row-reverse, column-reverse
Define la dirección del Eje Principal.


3. Distribución del Contenido (Eje Principal)
distribuyen los ítems a lo largo del Eje

justify-content
Contenedor
flex-start, flex-end, center
Agrupa los ítems al inicio, al final o los centra.

space-between
Distribuye el espacio entre los ítems 
(sin espacio en los bordes).

space-around
Distribuye el espacio alrededor de los ítems.

space-evenly
Distribuye el espacio de manera uniforme (incluyendo los bordes).


4. Alineación de Contenido (Eje Cruzado)
controlan cómo se alinean los ítems a lo largo del Eje Cruzado (perpendicular al flex-direction).

align-items
Contenedor
flex-start, flex-end, center
Agrupa o centra los ítems verticalmente

stretch (defecto)
Estira los ítems para ocupar toda la altura del contenedor.


5. Propiedades de los Ítems (Flex Items)
se aplican a los elementos hijos directos del contenedor Flex y controlan su tamaño y orden.

order
Ítem
Cambia la posición visual del ítem.
Número entero (defecto: 0).

flex-grow
Define cuánto debe crecer el ítem para ocupar el espacio disponible.
Número (defecto: 0).

flex-shrink
Define cuánto debe encogerse el ítem si no hay suficiente espacio.
Número (defecto: 1).

flex-basis
Define el tamaño base inicial del ítem antes de crecer o encogerse.
auto o cualquier valor CSS de ancho (100px, 50%).

align-self
Sobrescribe el valor de align-items para un ítem específico.
flex-start, center, flex-end, etc.


Atajo flex
flex combina flex-grow, flex-shrink, y flex-basis en ese orden.

```
/* Un ítem que ocupa todo el espacio disponible */
.item {
  flex: 1 1 0; 
  /* flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
}
/* Un ítem que no crece ni encoge y tiene 200px de ancho base */
.logo {
  flex: 0 0 200px; 
}
```


6. Envoltura (flex-wrap)
aplica al Contenedor Flex
determina si los ítems deben ajustarse a una nueva línea cuando no caben en una sola.

flex-wrap
Contenedor
nowrap (defecto), wrap, wrap-reverse
Permite que los ítems salten a la siguiente línea si es necesario.

align-content
Contenedor
space-between, center, etc.
Se utiliza para alinear las líneas de contenido si hay varias líneas (flex-wrap: wrap).


### Grid

Organizar el contenido en filas (rows) y columnas (columns).

1. Contenedor:
Definir contenedor padre para los items con `display: grid`
Contenedor grid en linea: `display: inline-grid;`

2. Filas y columnas:
Props que se aplican al contendor

grid-template-columns:
Define las columnas de la grid.
ej: 1fr 1fr 1fr
Crea tres columnas de igual ancho 
(fr significa "unidad fraccional").
 
grid-template-rows:
Define las filas de la grid.
100px auto 50px
Crea tres filas con alturas específicas.

grid-template-areas
Define una estructura de rejilla visual nombrando las áreas
"header header" "sidebar main"


Unidad fr (Unidad Fraccional):
Permite distribuir el espacio disponible de manera proporcional.

```
.container {
  display: grid;
  /* Columna 1: 1 parte, Columna 2: 2 partes. Total de 3 partes. */
  grid-template-columns: 1fr 2fr; 
}
```

3. Gaps
prop de contenedor para espacios entre rows

column-gap:
Espacio horizontal entre columnas.

row-gap:
Espacio vertical entre filas.

gap:
Atajo para row-gap y column-gap (row-gap column-gap).

```
.container {
  /* Espacio de 10px entre filas y 20px entre columnas */
  gap: 10px 20px; 
}
```

4. Nombrar Áreas (grid-template-areas)
crear layouts semánticos

Definir el Layout: En el contenedor, se nombra visualmente el diseño
Asignar Nombres: En cada Item Grid, se asigna ese nombre usando grid-area.

```
.container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  
  /* 1. Definición Visual del Layout */
  grid-template-areas: 
    "header header" 
    "sidebar content"
    "footer footer";
}

/* 2. Asignación a los Items Grid */
.site-header {
  grid-area: header;
}
.site-sidebar {
  grid-area: sidebar;
}
.site-content {
  grid-area: content;
}
.site-footer {
  grid-area: footer;
}
```

5. Colocación de Ítems: Grid Items
props para items hijos
controlar dónde se colocan y cuánto espacio ocupan.
 
grid-column-start / grid-column-end:
línea de columna empieza/termina el ítem.
1 / span 2 / -1

grid-row-start / grid-row-end:
línea de fila empieza/termina el ítem.
2 / span 3

grid-column:
Atajo para start y end (start / end).
1 / span 3
Ocupa 3 columnas, empezando en la línea 1.

grid-row:
Atajo para start y end (start / end).
2 / 4
Empieza en la línea 2 y termina en la línea 4.


Span:
span N indica cuántas pistas (columnas o filas) debe ocupar el ítem.

```
.grid-item-big {
  /* Empieza en la línea de columna 1 y se extiende por 2 columnas */
  grid-column: 1 / span 2; 
  /* Empieza en la línea de fila 2 y se extiende por 3 filas */
  grid-row: 2 / span 3; 
}
```


###


### Atomic design


### CSS-in-JS (Styled Components / Emotion)

Diseño Basado en Props:
Los componentes presentacionales deben ser flexibles 
y cambiar su apariencia basándose en las props que reciben.

1. Props de Variante (Mejor Práctica)
Define un conjunto limitado y semántico de variantes de estilo que el consumidor puede elegir 
(ej. primary, secondary, outline).
El componente es fácil de usar y se adhiere a la guía de estilo de la aplicación.

```
// Boton.jsx
// El estilo de la clase se determina por la prop 'variant'
const Boton = ({ children, variant = 'default' }) => (
  <button className={`${styles.base} ${styles[variant]}`}>
    {children}
  </button>
);

// Uso:
<Boton variant="primary">Comprar</Boton>
```

2. Sobrescritura Controlada
Permite que el consumidor inyecte sus propias clases usando la prop className
para ajustes menores de layout (ej. margen o tamaño).
Acepta className y úsalo al final de la lista de clases para que el estilo del consumidor tenga prioridad.

```
// Boton.jsx
const Boton = ({ children, className }) => (
  <button className={`${styles.base} ${className}`}> 
    {children}
  </button>
);

// Uso: 
// El consumidor añade una clase de utilidad
<Boton className="mt-4">Finalizar</Boton>
```


Ej: 

```
// Boton.jsx
import styled from 'styled-components';

// Crea un componente que ya tiene estilos
const StyledButton = styled.button`
  background: ${props => props.$primary ? 'blue' : 'gray'};
  color: white;
  border-radius: 4px;
`;

const Boton = (props) => (
  <StyledButton {...props}>
    {props.children}
  </StyledButton>
);
```



#### Styled Components

npm install styled-components
yarn add styled-components


Creación del Componente Estilizado:
1. objeto styled importado
2. elemento HTML que quieres estilizar (div, button, p, etc.).
3. template literals para escribir el CSS.

```
// 1. Importar 'styled'
import styled from 'styled-components';

// 2. Crear un componente estilizado
const StyledButton = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

// 3. Usar el componente como cualquier otro
const MyComponent = () => (
  <StyledButton onClick={() => alert('¡Hiciste clic!')}>
    Haz Clic
  </StyledButton>
);
``` 

Estilos con props y lógica:

```
// Ejemplo: Cambiar el color basado en la prop 'primary'
const StyledButton = styled.button`
  /* Usa una función que recibe 'props' */
  background-color: ${(props) => (props.primary ? '#ff4d4f' : '#0070f3')};
  color: white;
  padding: 10px 20px;
  /* ...otros estilos */
`;

// Uso en React
<StyledButton>Botón Azul</StyledButton>
<StyledButton primary>Botón Rojo</StyledButton> // Pasa la prop 'primary=true'

```

Ej: 

1. Componente styled

```
// src/components/BotonPrimario.jsx
import styled from 'styled-components';

// 1. Crear un componente estilizado
const BotonPrimario = styled.button`
  /* CSS estándar aquí */
  background-color: #0070f3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 2. Exportar y usar como un componente de React normal
export default BotonPrimario;
```

2. Componente dinámico: props
Hacer que los estilos de un componente cambien basados en las props que recibe
Inyectar valores de JavaScript (como props)
Utilizas una función dentro de los template literals
Esta función recibe el objeto props del componente como argumento.

```
import styled from 'styled-components';

const BotonDinamico = styled.button`
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  /* Estilos dinámicos basados en la prop 'size' */
  padding: ${(props) => (props.size === 'large' ? '12px 24px' : '8px 16px')};
  font-size: ${(props) => (props.size === 'large' ? '18px' : '14px')};
`;

// Uso en un componente padre:
function MiComponente() {
  return (
    <>
      <BotonDinamico>Botón Pequeño (defecto)</BotonDinamico>
      <BotonDinamico size="large">Botón Grande</BotonDinamico>
    </>
  );
}
```


3. Herencia y reutilización
Reutilización de código CSS mediante la extensión o herencia de estilos.

1. Extender componente
nuevo componente basado en uno existente
añadiendo o sobrescribiendo estilos

```
// 1. Botón base (de ejemplo anterior)
const BotonBase = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

// 2. Extender el BotonBase para crear un botón de advertencia
const BotonAdvertencia = styled(BotonBase)`
  background-color: #ff4d4f; /* Nuevo color */
  color: white;
  border: 1px solid #ff4d4f;

  &:hover {
    background-color: #d9363e;
  }
`;

// Ahora BotonAdvertencia tiene todos los estilos de BotonBase + los nuevos.
```


2. Estilización de componentes existentes no html

componente de React (que no es un elemento HTML)
usamos styled() con el nombre del componente dentro.

```
// Si tienes un componente llamado <MiInput>
const MiInput = ({ type, placeholder }) => <input type={type} placeholder={placeholder} />;

// Lo puedes estilizar así:
const StyledInput = styled(MiInput)`
  border: 1px solid gray;
  padding: 8px;
  font-size: 14px;
  /* ... más estilos ... */
`;
```


4. Theming

consistencia de colores y espaciados en toda la aplicación, usas el ThemeProvider.

Crea un objeto JavaScript con tus tokens de diseño
Envuelve tu aplicación con el componente <ThemeProvider> y pásale el objeto tema.

Accede a los valores del tema dentro de tus estilos mediante props.theme.
Permite cambiar colores, fuentes o espaciados en toda la aplicación simplemente actualizando el objeto tema.

```
// 1. Botón base (de ejemplo anterior)
const BotonBase = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

// 2. Extender el BotonBase para crear un botón de advertencia
const BotonAdvertencia = styled(BotonBase)`
  background-color: #ff4d4f; /* Nuevo color */
  color: white;
  border: 1px solid #ff4d4f;

  &:hover {
    background-color: #d9363e;
  }
`;

// Ahora BotonAdvertencia tiene todos los estilos de BotonBase + los nuevos.
```
 

5. Reutilización de Estilos sin crear nuevo componente

1. Fragmentos de CSS Reutilizables (css Helper)
Conjunto de declaraciones CSS que quieres usar en varios componentes sin extenderlos directamente
utiliza la función css de Styled Components.
Define los estilos dentro de un template literal taggeado con
luego inclúyelo dentro de cualquier otro componente estilizado

```
import styled, { css } from 'styled-components';

// 1. Definir un fragmento de estilo reutilizable
const hoverEffect = css`
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  
  // 2. Aplicar el fragmento en el componente
  ${hoverEffect} 
`;
```


2. Usar attrs/atributos para Props Comunes
permite inyectar props por defecto o pre-calcular props complejas antes de que el componente sea renderizado o estilizado.
Evita la duplicación de código en el JSX y mantiene el DOM más limpio.

```
const InputConAtributos = styled.input.attrs(props => ({
  // Define un 'type' por defecto que no necesita pasarse por JSX
  type: 'text', 
  // Usa una prop dinámica para calcular el placeholder
  placeholder: props.small ? 'Buscar...' : 'Escriba su consulta aquí',
}))`
  padding: 10px;
  border: 1px solid gray;
  font-size: 16px;
`;

// Uso: <InputConAtributos small /> -> tendrá el placeholder 'Buscar...'
```


6. Estilos Globales y Clases Externas
A veces necesitas afectar elementos fuera del componente o inyectar CSS puro globalmente.

1. Estilos Globales con createGlobalStyle
Para resetear estilos del navegador, definir fuentes o aplicar estilos al body o html
debes usar el helper createGlobalStyle.
Se define una vez, se renderiza una vez, y el CSS se inyecta en todo el documento.

```
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Estilos globales que afectan a toda la página */
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.colors.background}; /* Acceso al tema */
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

// Uso en el componente App.jsx: <GlobalStyles />
```

2. Uso de Clases Globales y Librerías Externas
estilizar componentes de librerías externas que usan clases
(ej: un carrusel de React que usa la clase .slick-slider)
puedes usar el & con anidamiento o el selector global.

```
const MiCarruselEstilizado = styled.div`
  padding: 20px;

  /* Estiliza una clase global o de librería de terceros */
  .slick-slider {
    border: 1px solid #ccc;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  }
`;
```


7. Acceso al Tema desde Componentes de Función
acceder al tema dentro de los estilos (props.theme)
es común necesitar el objeto de tema dentro de la lógica de tu componente de función
(por ejemplo, para calcular un margen o pasar un color a una librería de gráficos).

Hook useTheme
Styled Components proporciona el hook useTheme para obtener el objeto de tema directamente en la lógica de JavaScript de tu componente.

```
import React from 'react';
import styled, { useTheme } from 'styled-components';

const IconoConColor = ({ isActive }) => {
  // 1. Acceder al tema
  const theme = useTheme(); 
  
  // 2. Usar la lógica de JS y los tokens del tema
  const color = isActive ? theme.colors.primary : theme.colors.text;

  return (
    <svg style={{ fill: color, width: '24px', height: '24px' }}>
      {/* ... SVG path ... */}
    </svg>
  );
};
```


8. Patrones de Tema Avanzado

1. Temas Anidados (Nested Themes)
anidar múltiples ThemeProviders
El componente hijo siempre utilizará el tema del ThemeProvider más cercano
Esto es útil para aplicar un tema diferente a una sección específica de la aplicación
ej: un modal o un widget incrustado.

```
// App.jsx
<ThemeProvider theme={mainTheme}>
  {/* Componentes usan mainTheme */}
  
  <ThemeProvider theme={widgetTheme}>
    {/* Componentes aquí usan widgetTheme */}
  </ThemeProvider>
  
  {/* Componentes usan mainTheme de nuevo */}
</ThemeProvider>
```


2. Funciones en el Tema

Para el soporte de modos claro/oscuro más complejos o cálculos de contraste, puedes definir una función dentro del objeto tema.

```
// theme.js
const lightTheme = {
  colors: {
    primary: '#0070f3',
    // Función para calcular el contraste automáticamente
    contraste: (color) => {
      return color === '#0070f3' ? 'white' : 'black'; 
    },
  },
};

// Uso en estilos:
const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.contraste(props.theme.colors.primary)}; 
`;
```


Prácticas:

1. Organización

Tema Global centralizado:
Define y centraliza todos los tokens de diseño (colores, tipografía, espaciado, breakpoints) en un único objeto theme.js
Utiliza el ThemeProvider para inyectar este objeto en el nivel más alto de tu aplicación.
Accede al tema en tus estilos mediante props.theme o el hook useTheme.

Archivos Dedicados: srp
Mantén los estilos y la lógica de presentación separados de la lógica de negocio.
Define los Styled Components en un archivo separado, a menudo llamado styles.js o Componente.styles.js, dentro de la carpeta del componente.
El archivo principal del componente (Componente.jsx) debe contener la lógica, el state y el renderizado, importando los estilos.

Nombrar Componentes Estilizados:
descriptivos y usa mayúsculas iniciales (PascalCase)
const ContenedorPrincipal = styled.div
const BotonPrimario = styled.button


2. Rendimiento y Extensibilidad

Evita Recálculos Innecesarios con .attrs():
método .attrs() para inyectar props que solo se usan para el estilo
o para calcular valores complejos fuera de la función de estilo CSS.
Úsalo para: Establecer type por defecto en un input o pre-calcular un valor de color basado en varias props.

```
// Ejemplo: Usar attrs para definir un atributo HTML y calcular un color
const Input = styled.input.attrs(props => ({
  type: 'text', // Atributo por defecto
  $color: props.hasError ? props.theme.colors.error : props.theme.colors.border, // Prop calculada
}))`
  border-color: ${(props) => props.$color};
  padding: 8px;
`;
```

Reutiliza Estilos con css Helper:
evitar la duplicación de código CSS entre componentes que no están relacionados jerárquicamente
Define bloques de estilos reutilizables como fragmentos y úsalos con interpolación.

```
import { css } from 'styled-components';

const transitionMixin = css`
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;

const Tarjeta = styled.div`
  ${transitionMixin} /* Incluye el fragmento aquí */
  background: white;
  border-radius: 8px;
`;
```

Evita crear Componentes Dinámicamente:
Nunca definas un Styled Component dentro de la función render de otro componente o hook (ej. dentro de un map).
Haría que React cree un nuevo componente en cada renderizado, destruyendo la caching y el rendimiento.
Define los Styled Components siempre fuera de los componentes de React.


3. Estilos Condicionales y Anti-Patrones

Usa Props para Estilos Condicionales:
Pasa props booleanas a tus Styled Components para aplicar estilos condicionales
en lugar de manejar la lógica de clases en el componente de React.

```
// En el componente estilizado
const Boton = styled.button`
  background-color: ${(props) => (props.primary ? props.theme.colors.primary : 'transparent')};
  color: ${(props) => (props.primary ? 'white' : props.theme.colors.primary)};
`;

// En el componente de React
<Boton primary>Guardar</Boton>
<Boton>Cancelar</Boton>
```

Prefija las Props Transitorias:
Si pasas una prop a un Styled Component solo con fines de estilo y no quieres que aparezca como atributo en el DOM final
prefiéjala con el símbolo del dólar ($).
Styled Components ignora automáticamente las props prefijadas con $ al pasarlas al elemento DOM subyacente.

```
// Usando la prop $isHighlighted solo para estilos
const Elemento = styled.div`
  border-color: ${(props) => (props.$isHighlighted ? 'red' : 'gray')};
`;

// Uso: La prop $isHighlighted NO aparece en el HTML final.
<Elemento $isHighlighted={true}>Contenido</Elemento>
```

Evita el Anidamiento Profundo:
Limita el anidamiento de selectores CSS (como & > ul > li) a un máximo de 2 o 3 niveles.
El anidamiento excesivo hace que los estilos sean difíciles de sobrescribir y leer.

Prefiere crear un nuevo Styled Component para los hijos en lugar de anidarlos.


4. Estilización de Componentes Externos
Cuando estilices componentes de librerías externas o componentes personalizados
usa la sintaxis styled(Componente) en lugar de selectores de clases complejos.

```
const StyledModal = styled(LibreriaModal)`
  background: white;
  border-radius: 8px;
`;

//err: .mi-wrapper .libreria-modal { /* Selectores de clase */ }
```



# APIs

Carpeta api: 
a veces nombrada services, data, o utils/api)
separar completamente la lógica de la comunicación con el backend (servidor) del resto de la interfaz de usuario (componentes, vistas).
Es el "Contrato" o "Agente de Comunicación" del front
 
1. Centralización de la Lógica de Peticiones:
Contiene todas las funciones, módulos y clases encargadas de realizar las peticiones HTTP (GET, POST, PUT, DELETE, etc.)
a los endpoints del servidor o a servicios externos (como APIs de terceros: clima, noticias, etc.). 

En lugar de tener la llamada a fetch o axios dispersa en diez componentes diferentes
la llamas una sola vez desde una función definida en esta carpeta.


2. Abstracción y Aislamiento:
Aísla la complejidad de la comunicación de red de los componentes de la interfaz de usuario
Los componentes solo se preocupan por qué datos necesitan, y no por cómo se obtienen esos datos.

Sin la carpeta api:
El Componente UsuarioPerfil tiene que saber la URL exacta (/v1/users/123)
cómo manejar los errores HTTP, y qué headers enviar.

Con:
El Componente UsuarioPerfil solo llama a ApiUsuarios.obtenerPerfil(123)
La función en la carpeta api maneja la URL, los headers y los errores.


3. Manejo de Configuración y Autenticación:
Variables de Entorno: Definir la URL base del servidor (baseURL).
Tokens de Autenticación: Añadir el token JWT (Authorization: Bearer <token>) a todas las peticiones salientes.
Manejo de Errores Comunes: Implementar interceptors (si usas axios) para manejar errores 401 (No autorizado) o 500 (Error de servidor) de manera global.


Contenido:
De forma modular, separando las peticiones por dominio o recurso:

1. config.js o axios-instance.js:
Define la configuración base de la conexión:
URL del servidor, timeouts, y la configuración de la instancia de la librería HTTP (axios, fetch wrapper, etc.).

Es donde se configuran los interceptores para manejar tokens de seguridad.


2. Archivos de Recurso (Ejemplo: users.js, products.js, auth.js)
Cada archivo contiene un conjunto de funciones relacionadas con un recurso específico del servidor.

Ej:

users.js:
getUsers(), getUserById(id), updateUser(data), deleteUser(id)

products.js:
getAllProducts(), createProduct(data), searchProducts(query)

auth.js:
login(credentials), logout(), register(data), refreshToken()

auth.js:
login(credentials), logout(), register(data), refreshToken()


3. index.js (Exportador Principal)
importa todas las funciones de los archivos de recursos y las exporta como un único objeto, simplificando la importación en los componentes.

```
import { ApiAuth, ApiProducts } from '../../api';

// Uso simple, sin preocuparse por la URL o los headers
const user = await ApiAuth.login(username, password);
```

hora y fecha:

1. objeto Date
fecha y hora local

```
const fechaActual = new Date();
// Para mostrar la fecha y hora:
console.log(fechaActual.toString());
// Para obtener solo partes:
console.log(fechaActual.getFullYear());
console.log(fechaActual.getHours());
```


2. API Intl.DateTimeFormat:
Es la mejor opción nativa para formatear fechas y horas de forma internacionalizada
incluyendo el manejo de zonas horarias y formatos específicos de cada país.

```
let options = { timeZone: "America/New_York", hour: "2-digit", minute: "2-digit" };
let newYorkTime = new Intl.DateTimeFormat("en-US", options).format(new Date()); 
// Muestra la hora en la zona de Nueva York.
```


Terceros:

1. Day.js:	Alternativa ligera a Moment.js
analizar, validar, manipular y mostrar fechas y horas con una API sencilla.
tamaño reducido (solo 2kB) e inmutabilidad.

2. date-fns:
Proporciona más de 200 funciones para manipular fechas en un estilo modular.
Moderno y permite importar solo las funciones necesarias


APIs de Zona Horaria:
hora precisa de otra ubicación
Distinto de la hora local del usuario

1. Google Maps Time Zone API:
Devuelve la zona horaria y la diferencia horaria (UTC offset) para una latitud, longitud y marca de tiempo dadas

2. WorldTimeAPI:
Una API sencilla y gratuita que puede devolver la hora de una zona horaria concreta.


Clima:
proporciona los datos meteorológicos (temperatura, pronóstico, etc.)
a través de una solicitud HTTP

Planes gratuitos con un límite de llamadas diarias:

1. OpenWeatherMap:
datos de clima actual, pronósticos por hora y por día, e incluso datos de contaminación del aire.

2. Meteosource:
datos precisos y bibliotecas wrapper disponibles para un uso más fácil en diferentes lenguajes.

3. WeatherAPI.com:
Fácil de usar, con planes gratuitos limitados.

4. Open-Meteo:
API de código abierto con acceso gratuito para uso no comercial, sin necesidad de clave API.

5. AccuWeather/Dark Sky/Apple Weather:
Opciones de pago con datos de muy alta precisión.


Uso:

1. Obtener la ubicación:
usando la API de geolocalización del navegador, o pidiendo al usuario que ingrese una ciudad

2. Registrarse: para obtener una API Key.

3. solicitud HTTP: a la API de clima, incluyendo tu clave y la ubicación.

4. Procesar la respuesta: generalmente un JSON
extraer la temperatura, la descripción, etc.

5. Mostrar los datos en tu página web (actualizando el DOM).


noticias:

NewsAPI.org:
Freemium (Plan gratuito limitado)
Ofrece dos endpoints principales: Top Headlines (titulares principales) y Everything (todos los artículos), permitiendo filtrar fácilmente por palabra clave
(e.g., "Tecnología", "Inteligencia Artificial") y fuentes.

MediaStack:
Freemium (Plan gratuito limitado)
API simple y ligera.
Es conocida por su gran cobertura global (más de 7.500 fuentes)
por la capacidad de filtrar por categoría (lo que sería ideal para "Tecnología").

Newscatcher API:
Freemium (Plan gratuito limitado)
búsqueda profunda en archivos históricos y es excelente para monitoreo de medios
Permite una categorización precisa y búsqueda avanzada.

The New York Times Developer Network:
Freemium (Planes basados en productos)
Si buscas noticias de alta calidad, la API del NYT es una gran opción
Tienen varias APIs especializadas (Búsqueda de artículos, Historias principales, etc.).

GNews API:
Freemium (Plan gratuito generoso)
alternativa sencilla que permite obtener titulares y buscar artículos
Es fácil de implementar para proyectos rápidos.

HackerNews API (Firebase):
Gratuita
muy geek o de nicho (desarrollo, startups, código)
Devuelve historias de la comunidad de Hacker News.


Filtrado:
solicitud HTTP a un endpoint específico
pasando parámetros para refinar tu búsqueda.

1. Filtrado por Palabra Clave (q o keyword):
Pasas el tema como una palabra clave en tu solicitud.
ej: https://api.newsapi.com/v2/everything?q=Tecnología+AI+Gadgets&apiKey=TU_CLAVE
buscando artículos que contengan las palabras clave "Tecnología", "AI" o "Gadgets".

2. Filtrado por Categoría (category):
ofrecen categorías predefinidas
Parámetro: category
Valor: technology (o el valor que defina la API)
Ej: https://api.mediastack.com/v1/news?categories=technology&access_key=TU_CLAVE
devuelve los principales titulares que la API ya clasificó como "Tecnología".

3. Filtrado por Fuente (sources)
Si quieres mostrar noticias solo de fuentes de tecnología reconocidas (como TechCrunch, Wired, The Verge, etc.)
Parámetro: sources
Ej: https://api.newsapi.com/v2/top-headlines?sources=techcrunch,wired&apiKey=TU_CLAVE


Implementación:

1. Regístrate en la API
2. Obtén tu API Key (o access_key).
3. Escribe el código  para hacer una solicitud HTTP GET.
4. Define la URL de la API, incluyendo tu clave y el parámetro de búsqueda para el tema "Tecnología".
5. Procesa el JSON de respuesta.
6. Renderiza los datos (título, descripción, URL, imagen) en tu página web.


finanzas:
Ej: Stock Market APIs
Las APIs de cotizaciones suelen tener modelos de negocio más restrictivos debido al valor y la frecuencia de actualización de los datos

1. Alpha Vantage
plan gratuito muy generoso para uso no comercial y pruebas
Es la opción favorita para desarrolladores individuales o pequeños proyectos.

Cotizaciones en tiempo real y diferido.
Datos históricos (diarios, semanales, mensuales).
Datos fundamentales (ganancias, valoraciones).

Filtro por Sector:
permite obtener una lista de los tickers (símbolos de acción, ej. AAPL, MSFT)
luego hacer solicitudes individuales para sus cotizaciones.


2. Finnhub
Freemium con un plan gratuito robusto que incluye datos en tiempo real (limitado) y una amplia cobertura.

Cotizaciones en tiempo real y websockets
Datos históricos y datos fundamentales.
Noticias y análisis para acciones específicas.

Filtro por Sector (Tecnología): Finnhub es excelente para buscar tickers de empresas.
buscar empresas por sector o por palabras clave relevantes para la tecnología.


3. IEX Cloud (Legacy) o IEX Exchange (Datos de mercado):
Conocida por tener datos de alta calidad y un enfoque en transparencia
Ofrecen planes freemium con créditos limitados.

Datos de mercado en tiempo real.
Datos históricos, dividendos, etc.

Filtro por Sector:
buscar empresas por nombre o sector
facilita obtener los tickers específicos de las empresas tecnológicas.


4. Polygon.io
opción más avanzada, enfoque en datos de alta frecuencia y baja latencia
ideal para trading o plataformas profesionales
Ofrece un nivel gratuito básico

Datos de acciones, forex y criptomonedas, con API enfocada en velocidad.


Uso: 

Dado que las APIs financieras son muy precisas

1. Identificar los Tickers:
Ej: AAPL (Apple), MSFT (Microsoft), GOOGL (Alphabet/Google), NVDA (NVIDIA), ADBE (Adobe), etc.

Estrategia: 
Usa los endpoints de la API (como los de Alpha Vantage) para obtener una lista de empresas por sector
Alternativamente, puedes mantener una lista estática de los principales tickers tecnológicos.

2. Usar el Endpoint de Cotización:

Con el ticker, usas el endpoint de cotización para obtener la información más reciente.

Cotización en tiempo real:
.../quote?symbol=TICKER
 
Datos Históricos:
.../timeseries?symbol=TICKER&interval=daily

Ej: concepto

```
const ticker = 'AAPL'; // Símbolo de Apple (Tecnología)
const apiKey = 'TU_API_KEY'; // Reemplaza con tu clave de API

// Ejemplo conceptual de URL (depende de la API que uses)
const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        // La estructura del 'data' varía por API. 
        // Aquí se accede al precio de cotización (conceptual)
        const precio = data['Global Quote']['05. price'];
        console.log(`El precio actual de ${ticker} es: $${precio}`);
        // Renderizar este 'precio' en la página web
    })
    .catch(error => console.error('Error al obtener la cotización:', error));
```


### Contenido de la carpeta api
Frontend necesita interactuar con servicios backend (una api) para centralizar todas estas llamadas.

```
src/
└── api/
    ├── apiConfig.js         # ❶ CONFIGURACIÓN BASE (Axios, Fetch, etc.)
    │   └─ Define la URL base (baseURL) del backend, headers comunes (Content-Type, Authorization), e interceptores.
    │
    ├── authApi.js           # ❷ MÓDULO DE AUTENTICACIÓN
    │   └─ Funciones específicas para:
    │      - login(credentials)
    │      - register(userData)
    │      - refreshToken()
    │
    ├── productsApi.js       # ❷ MÓDULO DE PRODUCTOS
    │   └─ Funciones específicas para:
    │      - getProducts(params)
    │      - getProductById(id)
    │      - createProduct(data)
    │
    ├── userApi.js           # ❷ MÓDULO DE USUARIO
    │   └─ Funciones específicas para:
    │      - getUserProfile(id)
    │      - updateProfile(data)
    │
    └── index.js             # ❸ EXPORTACIÓN CENTRALIZADA (Opcional)
        └─ Exporta todas las funciones de los módulos anteriores para facilitar la importación en los componentes (e.g., import { login, getProducts } from '@/api';).
```

1. Config base: apiConfig.js
Se encarga de crear una instancia configurada del cliente HTTP que uses (como Axios o Fetch)
asegurando que todas las llamadas usen la misma URL base y manejen la autenticación de manera uniforme.

2. Módulos específicos (authApi.js, productsApi.js, etc.):
mejor práctica para la organización
En lugar de tener una sola lista gigante de funciones
se agrupan por la entidad del backend con la que interactúan
Cada módulo expone funciones de JavaScript que corresponden directamente a los endpoints de la API
Ej: función getProducts se mapea a un GET a /api/products

3. Exportación centralizada: index.js
capa de conveniencia
Permite que el resto de la aplicación importe funciones de la API desde un solo lugar
manteniendo el código de los componentes más limpio.


Archivos:
aislar toda la lógica de comunicación con el backend
permitiendo que el resto de la aplicación (componentes, store, etc.) llame a funciones simples
sin preocuparse por los detalles de la red (headers, URLs, manejo de errores).

1. Config base: apiClient.js o axiosInstance.js
Contiene la configuración base del cliente HTTP
Axios o el API nativa fetch).
Establece la URL base de la API, los tiempos de espera (timeouts), y los headers por defecto, como Content-Type: application/json.

2. interceptors.js (Opcional):
Funciones que se ejecutan antes o después de cada solicitud/respuesta
Se usa para inyectar automáticamente el token de autenticación (Bearer Token) en los headers de las solicitudes salientes
o para manejar errores 401 (No Autorizado) de manera global.


Módulos (Entidades):
contienen funciones específicas que se mapean directamente a los endpoints del backend.

1. authApi.js:
Maneja todas las solicitudes relacionadas con la Autenticación y la Autorización.
login(email, password): POST /auth/login
register(data): POST /auth/register

2. productsApi.js
Maneja la Entidad Producto.
getProducts(query): GET /products
getProductById(id): GET /products/:id
deleteProduct(id): DELETE /products/:id

3. userApi.js
Maneja la Entidad Usuario.
getUserProfile(): GET /users/me
updateUserProfile(data): PATCH /users/me

3. ordersApi.js
Maneja la Entidad Pedidos o Carritos.
placeOrder(cart): POST /orders
getOrderHistory(): GET /orders


Exportación: 

1. index.js:
Importa y re-exporta todas las funciones de los módulos anteriores.
Permite que otros archivos de la aplicación importen servicios de la API de manera limpia:
import { login, getProducts } from '@/api';





## Store


Gestionar el estado global de la app
lugar centralizado y predecible para almacenar la información (datos de la aplicación)
necesitan acceder múltiples componentes
independientemente de dónde se encuentren en el árbol de componentes.
store permite acceder a esta información de forma global, evitando prop drilling

El contenido varía según el patrón de gestión de estado
Como Context API de React o Redux

Encontrarás archivos relacionados con:

1. State:
Datos de la aplicación en sí (por ejemplo, la lista de productos, la información del usuario logueado, el estado de un dark mode, etc.).


2. Actions/mutations: 
Funciones o definiciones que describen cómo se puede cambiar el estado
##### Estos cambios son el único camino para actualizar los datos


3. Reducers/Getters/Selectors (Lógica):

Reducers (en Redux) o Mutations (en Vuex/Pinia):
La lógica pura que toma el estado actual y una acción para devolver un nuevo estado.

Getters/Selectors: Funciones que se utilizan para acceder a partes específicas del estado de forma eficiente.


4. Archivos de Configuración:
archivo principal que configura e inicializa el store para que la aplicación pueda usarlo.

Archivos:

1. index.js o store.js:
punto de entrada y configuración del store
inicializa el store global y se combinan todos los reducers de los diferentes módulos de la aplicación
provee al componente raíz de la aplicación.


2. Archivos de Módulos Específicos (Slices):
Cada "slice" o módulo se encarga de una porción del estado global
Ej: userSlice, productSlice).

Reducers (Lógica de Cambio de Estado):

userReducer.js o userSlice.js:
función reducer para el módulo de usuario
Esta función es la única que puede modificar el estado
Recibe el estado actual y una acción, y devuelve un nuevo estado (inmutablemente).

productReducer.js:
Contiene la lógica para gestionar el estado relacionado con los productos
(lista de productos, estado de carga, errores, etc.).


Actions (Tipos de Eventos):

userActions.js o types.js:
Define y exporta las acciones (objetos JavaScript) que son enviadas (dispatched) al store.
Cada acción tiene un campo type (por ejemplo, user/LOGIN_SUCCESS, products/FETCH_REQUESTED) que el reducer utiliza para determinar cómo actualizar el estado

productActions.js:
Funciones para crear acciones relacionadas con productos
(e.g., addProduct(productData), fetchProducts()).


Selectors (Acceso a Datos):

userSelectors.js:
Contiene funciones (selectors) para extraer partes específicas del estado de manera eficiente
Por ejemplo, selectUserName(state) o selectIsLoggedIn(state).
Esto ayuda a que los componentes solo se suscriban a los datos que realmente necesitan.


El flujo general del store es unidireccional y estricto, lo que garantiza la previsibilidad del estado:

1. Un componente llama a una Acción (ej: el usuario presiona "Iniciar Sesión").
2. La Acción se envía (dispatched) al store.
3. El store pasa la Acción al Reducer correspondiente.
4. El Reducer calcula un Nuevo Estado basado en el estado anterior y la Acción.
5. El store actualiza el Estado Global.
6. Los componentes suscritos a ese estado se actualizan automáticamente.

```
src/
└── store/
    ├── index.js             # ❶ CONFIGURACIÓN GLOBAL (Punto de entrada)
    │   └─ Combina todos los reducers/módulos y crea el Store final.
    │
    ├── modules/             # (Opcional) Carpeta para dividir la lógica
    │   │
    │   ├── user/            # Módulo/Slice: Gestión de la cuenta de usuario
    │   │   ├── userReducer.js   # Lógica que define cómo cambia el estado de 'user'.
    │   │   ├── userActions.js   # Definición de acciones (LOGIN_SUCCESS, LOGOUT, etc.).
    │   │   └── userSelectors.js # Funciones para leer datos del estado (getUserName, isLoggedIn).
    │   │
    │   └── products/        # Módulo/Slice: Gestión de datos de productos
    │       ├── productsReducer.js  # Lógica para cambiar la lista de productos o el estado de carga.
    │       ├── productsActions.js  # Acciones para el fetching, añadir o eliminar productos.
    │       └── productsSelectors.js# Funciones para obtener la lista de productos filtrada.
    │
    └── middleware/          # ❷ LOGICA ASÍNCRONA (Si es necesario)
        └── thunks.js        # Archivos para manejar efectos secundarios (ej: llamadas a API).
```

1. Config global: index.js
importa la lógica de todos los módulos (userReducer, productsReducer, etc.) y se unen en un único root reducer que alimenta al store principal.

2. Módulos (user, products): Cada carpeta representa una porción aislada del estado global
toda la lógica necesaria para gestionarla. 
Esto hace que el código sea más escalable y fácil de mantener.
 
3. LOGICA ASÍNCRONA (middleware):
En sistemas como Redux, la lógica que interactúa con el mundo exterior
(como obtener datos de un servidor) se maneja a menudo fuera de los reducers puros
utilizando herramientas como Thunks o Sagas.



## Feature

A menudo llamada pages, views, o modules
Su objetivo es agrupar todo lo necesario para construir una funcionalidad completa de la aplicación
desde la interfaz de usuario hasta la lógica específica de la característica.

```
src/
└── features/
    │
    ├── auth/                  # ❶ MÓDULO: Autenticación (Login, Registro, Recuperación)
    │   ├── components/        # Componentes reutilizables específicos de esta feature
    │   │   ├── LoginForm.jsx      # Formulario de inicio de sesión
    │   │   └── RegisterForm.jsx   # Formulario de registro
    │   │
    │   ├── pages/             # Vista principal que usa los componentes
    │   │   ├── LoginPage.jsx      # Página que orquesta el LoginForm
    │   │   └── RegisterPage.jsx   # Página que orquesta el RegisterForm
    │   │
    │   └── hooks/             # Lógica personalizada (custom hooks) específica
    │       └── useAuth.js         # Hook para manejar el estado de sesión y llamadas a la API
    │
    ├── shoppingCart/          # ❶ MÓDULO: Carrito de Compras
    │   ├── components/
    │   │   ├── CartItem.jsx       # Componente individual de un producto en el carrito
    │   │   └── CartSummary.jsx    # Resumen de totales
    │   │
    │   ├── pages/
    │   │   └── CartPage.jsx       # Página donde se visualiza el carrito completo
    │   │
    │   └── utils/
    │       └── cartCalculations.js  # Lógica para calcular subtotales, impuestos, descuentos.
    │
    └── index.js               # ❷ EXPORTACIÓN CENTRALIZADA (Para el router)
        └─ Exporta las páginas principales de las features para que el sistema de ruteo pueda importarlas fácilmente.
```

1. Modulo de caracteristica: auth, shoppingCart
Cada carpeta de nivel superior es una característica completa
Contiene todos los archivos necesarios (componentes, páginas, lógica) para que esa característica funcione de manera independiente.

2. components/:
componentes de ui específicos y no reutilizables fuera de este módulo
Por ejemplo, un LoginForm no se usará fuera del módulo auth.

3. pages/ o views/:
componentes que representan las vistas completas a las que se accede a través del router
Estos componentes suelen orquestar y combinar los componentes más pequeños.

4. hooks/ o utils/:
Almacena la lógica específica de la característica que se puede abstraer
como llamadas a la API, validaciones, o cálculos

##### Agrupa todos los elementos necesarios (UI, lógica, vistas) para que esa parte específica de la aplicación funcione.

Ej: módulo de Autenticación (auth).

auth/:
Carpeta Principal del Módulo.
Contiene todo lo relacionado con el inicio de sesión, registro y gestión de la sesión del usuario.
Encapsula una funcionalidad completa de la aplicación.

auth/pages/:
Contiene los componentes que sirven como Vistas completas para las rutas
Son el punto de entrada para el router.
Organización de Vistas: Define qué se muestra en rutas como /login o /register.

LoginPage.jsx:
Componente de página que utiliza el LoginForm.
Suele manejar el estado de carga/error y orquestar la llamada a la lógica de login.
Vista principal de inicio de sesión.

RegisterPage.jsx:
Componente de página que utiliza el RegisterForm
Vista principal de registro.

auth/components/:
Contiene los componentes de interfaz de usuario específicos que solo se usan dentro de esta característica
Reutilización Interna: Componentes pequeños y reutilizables dentro del módulo, pero que no tienen sentido fuera de él.

LoginForm.jsx:
El componente que renderiza el formulario con campos de email y contraseña.
Maneja el estado local del formulario y la validación de entrada

SocialLoginButtons.jsx:
Componente para botones de inicio de sesión con redes sociales (Google, Facebook, etc.).
Aísla la UI y la lógica de inicio de sesión de terceros

auth/hooks/:
Contiene la lógica reutilizable que no es un componente de UI (Custom Hooks)
Abstracción de Lógica: Separa la lógica compleja (llamadas a la API, gestión del estado de la sesión) de los componentes de UI.

useAuth.js:
Hook personalizado que maneja el estado de la sesión
(isLoggedIn, user), realiza la llamada a la authApi y gestiona el token.
El punto central donde los componentes interactúan para autenticarse.

auth/utils/:
Funciones de utilidad auxiliares específicas de la característica
Funciones de Ayuda: Lógica pura que no necesita estado
(ej: funciones de formateo, o validaciones complejas de la contraseña).

authValidation.js:
Funciones para validar el formato de email, complejidad de contraseña, etc
Asegura que la entrada del usuario cumpla con los requisitos


Relación con otras Carpetas:
El useAuth.js de esta feature llama a las funciones definidas en la carpeta api/authApi.js.
El auth/pages puede interactuar con el store (si existe) para guardar el estado global del usuario después de un login exitoso.    


## Pages

o views, especialmente en frameworks basados en enrutamiento
Next.js, Nuxt.js, React/Vue que usan React Router o Vue Router.

Proporciona los puntos de entrada de la aplicación que están directamente mapeados a las rutas (URLs) de tu sitio web.

1. Mapeo de Rutas: Cada archivo dentro de pages (o una subcarpeta con un index.js/vue)
se convierte en una vista completa y corresponde a una URL específica.

2. Orquestación: Estas "páginas" actúan como componentes contenedores o smart components
Su responsabilidad no es la presentación de elementos pequeños, sino la organización y combinación de los componentes más pequeños y reutilizables (components/)
y la lógica de negocio (features/ o store/).

3. La lógica de la página es mínima. 
Su principal trabajo es decidir qué se muestra y qué datos necesita
delegando el cómo a otras carpetas.


Pages suele reflejar la estructura de URLs de la aplicación.

1. Archivos de Nivel Raíz
manejan las rutas más simples, como la página de inicio o las páginas de contacto.

Home.jsx o index.jsx:
Ej: /
página de inicio o landing page
Orquesta los componentes principales de la aplicación.

About.jsx:
/about
La página "Acerca de Nosotros".

Contact.jsx:
/contact
Formulario de contacto y detalles.

404.jsx o NotFound.jsx:
(Cualquier ruta no válida)
La página que se muestra cuando el usuario navega a una URL que no existe.


2. Subcarpetas para Rutas Complejas o Modulares

organizar rutas que pertenecen a la misma funcionalidad, se utilizan subcarpetas.

users/index.jsx:
/users
La página principal que lista todos los usuarios.

users/(id).jsx:
/users/123
Ruta Dinámica
Muestra los detalles de un usuario específico, extrayendo el id de la URL.

admin/index.jsx:
/admin
El dashboard principal del área de administración.

admin/products/index.jsx:
/admin/products
La lista de productos dentro del área de administración.


Un componente en la carpeta pages:

1. Obtener Datos: Llama a los hooks o selectors del store para obtener los datos necesarios 
(ej. la lista de productos).

2. Manejar Parámetros: Lee parámetros de la URL 
(ej. el id o los parámetros de consulta).

3. Renderizar Componentes: Pasa los datos a los componentes de presentación (UI)
reutilizables que viven en la carpeta components o features.

```
src/
└── pages/
    ├── index.jsx           # ❶ RUTA RAÍZ: Mapea a la URL: /
    │   └─ Página de inicio (Home/Landing Page).
    │
    ├── About.jsx           # ❷ RUTA ESTÁTICA: Mapea a la URL: /about
    │   └─ Contenido estático sobre la compañía.
    │
    ├── Contact.jsx         # ❷ RUTA ESTÁTICA: Mapea a la URL: /contact
    │   └─ Formulario de contacto.
    │
    ├── 404.jsx             # ❸ RUTA DE ERROR: Se usa cuando la ruta no existe.
    │   └─ Página "No Encontrado".
    │
    ├── products/           # ❹ RUTA MODULAR: Agrupa las rutas relacionadas con productos.
    │   ├── index.jsx           # Mapea a la URL: /products
    │   │   └─ Vista que muestra el listado completo de productos.
    │   │
    │   └── [id].jsx            # Mapea a la URL: /products/:id (ej. /products/456)
    │       └─ Vista dinámica que muestra los detalles de un producto.
    │
    └── dashboard/          # ❹ RUTA MODULAR: Agrupa las rutas del área privada.
        ├── index.jsx           # Mapea a la URL: /dashboard
        │   └─ Vista principal (Dashboard/Resumen).
        │
        └── settings.jsx        # Mapea a la URL: /dashboard/settings
            └─ Vista para configurar las preferencias del usuario.
``` 



## Style

### Global

Establecer reglas CSS que afectan a toda la aplicación sin posibilidad de ser modificadas.
Reset CSS/Normalize: Reglas para estandarizar la apariencia entre navegadores
Estilos para el <body> y el <html>.
Definiciones de fuentes no variables (ej. importar una fuente).
Absoluto, Estructural. Estilos de bajo nivel que definen la base.
Ej: body { margin: 0; padding: 0; }


Contienen CSS que es crucial para la estabilidad y el look and feel básico de la aplicación, y que no suele variar por temas o configuraciones de usuario.

reset.css o normalize.css:
Elimina las diferencias de estilo por defecto que imponen los navegadores
(ej. márgenes por defecto en títulos y listas).
Garantiza que la aplicación se vea igual en Chrome, Firefox, Safari, etc.

base.css:
Estilos aplicados directamente a las etiquetas HTML básicas, como html, body, a (enlaces) o img.
Establece el color de fondo general, la fuente base y el comportamiento global de elementos interactivos.

typography.css:
Importación de fuentes externas (como Google Fonts) y la configuración inicial para <p> y <li>
Define la tipografía que estará disponible para toda la aplicación.


Con Styled Components:
Proporciona la función especial createGlobalStyle

Ej: src/styles/global/GlobalStyles.js

Contiene:

1. Reset/Normalize: Incluye las reglas para estandarizar el CSS entre navegadores
2. Estilos Base: Establece estilos para selectores generales (html, body, a, p, etc.).

```
// src/styles/global/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* 1. Normalize/Reset CSS (o reglas propias) */
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }

  /* 2. Estilos Base del Body (usando variables del tema si está disponible) */
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.base}; /* Acceso al tema */
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    /* ... otros estilos globales ... */
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
```

##### Este componente <GlobalStyles /> se renderiza una sola vez en la raíz del árbol de componentes de la aplicación (típicamente en App.js).
Cuando se renderiza, los estilos definidos se inyectan en el DOM a nivel global, sin interferir con el CSS modular de los Styled Components.


### Theme

Definir las variables y el diseño que pueden cambiar fácilmente
(ej. cambiar de modo claro a modo oscuro).
Variables CSS: Colores, tamaños de fuente, espaciados (spacing), sombras
Tipografía: Definición de la jerarquía de encabezados (h1, h2, etc.).
Mixins/Funciones: Lógica de preprocesador (Sass/Less) para la aplicación.
Variable, Paramétrico
Estilos de alto nivel que definen la apariencia final.
Ej: --color-primary: #007bff;


Definen el aspecto y la sensación de la aplicación utilizando variables (CSS, Sass, Less, o JSS).:
Permite cambiar drásticamente la apariencia con solo modificar unas pocas variables

colors.css o variables.scss:
Definición de las paletas de color, asignadas a variables semánticas
(ej. $primary-color, $error-color).
Permite implementar un tema oscuro cambiando solo los valores de estas variables
(ej. $background-color de blanco a negro).

spacing.css:
Define el sistema de espaciado basado en una escala
(ej. spacing-xs, spacing-lg).
Asegura la consistencia en los márgenes y paddings de todos los componentes

typography.theme.css:
Estilos para elementos de texto más específicos que sí varían por tema, como la familia de fuentes para headings y el tamaño de la fuente base.
Define cómo deben verse los títulos y textos en el tema actual.


Con Styled Components
Tiene un proveedor de contexto de tema llamado ThemeProvider

Ej: src/styles/theme/defaultTheme.js
Este archivo (o varios, si manejas temas oscuro/claro) contiene todas las variables de diseño.

```
// src/styles/theme/defaultTheme.js
export const defaultTheme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    text: '#333333',
    background: '#ffffff',
  },
  fonts: {
    base: 'Arial, sans-serif',
    heading: 'Georgia, serif',
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
  },
  breakpoints: {
      // ... para responsive design
  }
};
```

1. El objeto defaultTheme se pasa al componente <ThemeProvider>.

2. El <ThemeProvider> se envuelve en la aplicación (junto con <GlobalStyles />).

```
// App.js (o Root.js)
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/defaultTheme';
import { GlobalStyles } from './styles/global/GlobalStyles';
import Router from './router';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles /> {/* Se inyecta el reset y el base CSS */}
      <Router />
    </ThemeProvider>
  );
}
```

Flujo de Styled Components:

1. Reset/Global:
createGlobalStyle
Aplicar el CSS base y normalize al <body> y al <html>, impactando a toda la aplicación de manera uniforme

2. Theme:
ThemeProvider
Proporcionar variables de diseño (colores, espaciado) a todos los Styled Components a través del objeto props.theme.

3. Componentes:
styled.div / styled.button
Utilizar las variables del tema para crear estilos modulares que solo impactan al componente en cuestión.



### GlobalStyles

Permite escribir CSS que afecta a toda la aplicación
herramienta para incluir estilos no modulares
como el Reset CSS, la configuración del <body>, o las animaciones de nivel superior.

Styled Components, por defecto, usa un enfoque modular (CSS-in-JS)
los estilos de un componente solo afectan a ese componente.

Hay estilos que deben afectar a toda la página:

Reset/Normalize:
Eliminar los estilos por defecto del navegador (margin, padding, font-size) para que la aplicación se vea igual en todos los navegadores.

Estilos del <body>/<html>:
Definir el color de fondo principal, la fuente base de toda la aplicación, y el tamaño de la caja de modelo (box-sizing).

Clases de Utilidad Global:
Definir clases que se usarán en HTML normal (aunque esto es menos común en React/Styled Components).


1. Crear GlobalStyles:
archivo para definir tus estilos globales

Por ejemplo, src/styles/GlobalStyles.js.

```
// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* 1. Reset Básico y Box-Sizing */
  *,
  *::before,
  *::after {
    box-sizing: border-box; /* Fundamental para el layout */
    margin: 0;
    padding: 0;
  }

  /* 2. Estilos para el Body/HTML */
  html {
    font-size: 100%; /* Tamaño base del font */
    line-height: 1.5;
  }

  body {
    background: #f4f4f4;
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }
`;
```


Aplicar los Estilos Globales:
El componente <GlobalStyles /> solo inyecta los estilos cuando es renderizado
##### Debe colocarse en el componente de más alto nivel de tu aplicación para que se apliquen a todo.

```
// src/App.js o src/Root.js
import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router'; // Tu sistema de ruteo

function App() {
  return (
    <>
      {/* ¡Importante! Se renderiza una sola vez en el nivel superior */}
      <GlobalStyles />
      
      {/* El resto de la aplicación */}
      <Router />
    </>
  );
}
```


2. Integración con theme

##### utilizar las variables del tema (definidas con <ThemeProvider>) dentro de tus estilos globales
##### Permite que los estilos base (como el color de fondo y el color del texto) cambien automáticamente si cambias el tema (ej. de modo claro a modo oscuro).

Definir y Envolver con ThemeProvider:
Asegúrate de que toda la aplicación está envuelta en un <ThemeProvider> con un objeto theme.

Acceder al Tema en GlobalStyles:
Cuando usas createGlobalStyle, la función recibe el objeto props que incluye el objeto theme.
Puedes acceder a él usando interpolación de funciones:

```
// src/styles/GlobalStyles.js (Versión Avanzada con Tema)
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* ... (Reset CSS Básico) ... */

  body {
    /* Aquí se accede al tema: */
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.base};
  }

  /* Estilo para los enlaces (etiqueta <a>) */
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`;
```


3. Advertencias

Evita el uso excesivo: Los estilos globales son un "escape hatch".
La mayoría de tus estilos deben estar modulares (dentro de Styled Components) para evitar conflictos.

Renderizar solo una vez: No renderices <GlobalStyles /> en componentes anidados
ya que esto puede causar que los estilos se inyecten múltiples veces, degradando el rendimiento
Siempre rindiéndelo en el componente raíz.


### ThemeProvider

Gestión de temas y variables
Es un componente esencial que utiliza el Context API
##### Inyecta un objeto JavaScript (tu tema) en todos los componentes estilizados que se encuentran debajo de él en el árbol de componentes.

Su objetivo es la personalización dinámica de los estilos de tu aplicación
Temas Claros/Oscuros: Cambiar la paleta de colores de toda la aplicación instantáneamente.
Consistencia de Diseño: Aplicar valores consistentes para el espaciado, tamaños de fuente y breakpoints de responsive design.
Mantenimiento: Si necesitas cambiar un color principal, lo cambias en un solo lugar (el objeto de tema), y se actualiza en cientos de componentes.


1. Creando e Implementando un Tema

Definir el tema y envolver la aplicación.

Definir el Objeto del Tema:
Crea un objeto JavaScript que contenga todas tus variables de diseño
(colores, fuentes, espaciado, etc.).

Crea un archivo llamado, por ejemplo, src/styles/theme/defaultTheme.js.

```
// src/styles/theme/defaultTheme.js
export const defaultTheme = {
  // Colores (variables semánticas)
  colors: {
    primary: '#007bff',       // Azul de la marca
    secondary: '#6c757d',     // Gris secundario
    text: '#333333',          // Color de texto oscuro
    background: '#ffffff',    // Fondo de página
    error: '#dc3545',         // Color de errores
  },
  // Tipografía
  fonts: {
    base: 'Helvetica, Arial, sans-serif',
    heading: 'Georgia, serif',
    sizeMd: '1rem',
  },
  // Espaciado (basado en una escala consistente)
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
  },
};
```

Envolver la Aplicación con ThemeProvider:
Importa el ThemeProvider de Styled Components
tu objeto de tema en el componente de nivel más alto (App.js o Root.js).

```
// src/App.js (donde se configura la aplicación)
import React from 'react';
import { ThemeProvider } from 'styled-components'; // 1. Importar el componente
import { defaultTheme } from './styles/theme/defaultTheme'; // 2. Importar el objeto de tema
import { GlobalStyles } from './styles/GlobalStyles'; // (Opcional, pero recomendado)

function App() {
  return (
    // 3. Envolver la aplicación y pasar el objeto como prop 'theme'
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles /> {/* Asegúrate de que los estilos globales usan el tema */}
      
      {/* Todo lo que esté aquí dentro tiene acceso al tema */}
      <Router /> 
    </ThemeProvider>
  );
}
```


2. Accediendo al Tema en los Componentes

Una vez que la aplicación está envuelta, puedes acceder a las variables del tema de dos formas principales:

1. Dentro de un Styled Component (Método Preferido)
El objeto theme se pasa automáticamente a las props de tu componente estilizado.

```
// src/components/Button.js
import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.sizeMd};

  &:hover {
    opacity: 0.9;
  }
`;
```


2. Dentro de un Componente Normal de React (Usando useTheme)
Si necesitas acceder a las variables del tema dentro de un componente funcional (que no está estilizado) o dentro de un custom hook, usas el hook useTheme de Styled Components.

```
// src/hooks/useColorPalette.js
import { useTheme } from 'styled-components';

export const useColorPalette = () => {
  const theme = useTheme(); // 1. Hook para obtener el objeto de tema

  // 2. Puedes usar las variables del tema en tu lógica
  const getPrimaryColor = () => theme.colors.primary;
  const getBackgroundColor = () => theme.colors.background;

  return { getPrimaryColor, getBackgroundColor };
};
```


3. Modo Claro/Oscuro

Una de las aplicaciones más poderosas del ThemeProvider es el cambio de temas.

En lugar de definir un solo defaultTheme, defines dos: lightTheme y darkTheme
Luego, mantienes un estado en tu componente App que rastrea el tema actual y pasa el objeto de tema seleccionado al ThemeProvider.

```
// Pseudo-código para el cambio de tema en App.js
function App() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme); // O darkTheme

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}> {/* Se inyecta el tema actual */}
      {/* ... el resto de la app ... */}
    </ThemeProvider>
  );
}
```

Al cambiar el estado currentTheme, todos los componentes que usan theme.colors.background se actualizarán automáticamente, cambiando toda la aplicación.




# Testing Components

1. React Testing Library (RTL): 

Testea el comportamiento (lo que el usuario ve)
No testea implementación (estado interno o los nombres de las funciones)

Entorno de ejecución: 
Diferencia entre Node.js (donde corren los tests) 
y el DOM simulado (JSDOM).


2. Vitest:

Test Runner: Ejecuta los test
provee las funciones describe, it, expect.

RTL: 
renderizar componentes y buscar elementos en el DOM.

Happy DOM / JSDOM:
Simulan un navegador en tu terminal.


3. Consultas y Matchers:

Corazón de RTL: Seleccionar elementos

Tipos de Queries:
getBy...: Para elementos que deben estar ahí (falla si no se encuentran).
queryBy...: Para elementos que no deberían estar ahí (devuelve null).
findBy...: Elementos asíncronos (devuelven una promesa).

Prioridad de Selección:
preferir getByRole o getByText antes que test-id.

Jest-DOM Matchers:
usar .toBeInTheDocument(), .toHaveStyle(), .toBeDisabled().


4. Interacciones del Usuario:

Un componente no es estático. Debes simular que alguien lo usa.

user-event vs fireEvent:
user-event es superior: simula eventos reales como keydown y mousedown
fireEvent ignora eventos como keydown y mousedown

Simulación de inputs:
Escribir en formularios
marcar checkboxes
seleccionar opciones de un dropdown

Clicks y Focus:
Validar que los botones disparen acciones y que el foco se mueva correctamente.


5. Asincronía y Mocking de APIs

Testear algo que depende de un servidor

Mock Service Worker (MSW):
No interceptas la función de fetch, interceptas la red.

Manejo de estados de carga:
Testear que aparezca un "Loading..."
y luego desaparezca al llegar los datos.

Mocking de módulos:
simular librerías externas: react-router o framer-motion
usando vi.mock().


6. Avanzado

Testing de Custom Hooks:
Usar @testing-library/react-hooks para testear lógica pura.

Wrappers y Context:
testear componentes que necesitan un ThemeProvider, Redux Provider o un BrowserRouter
para no romper el test.

Snapshot Testing: 
uso (casi nunca), "arma de doble filo"


7. Calidad y Cobertura

Code Coverage: 
leer los reportes de cobertura para encontrar "puntos ciegos" en tu lógica.

TDD (Test Driven Development:
Escribir el test antes que el componente.

Continuous Integration (CI):
configurar GitHub Actions para que tus tests se ejecuten automáticamente en cada Pull Request.

El testing es el mejor termómetro para saber si tu código está bien diseñado (Clean Code).



# Clean Code

Mantenible, escalable y fácil de testear

1. SRP

Un componente debería hacer una sola cosa

Componentes de Presentación: Se encargan solo de cómo se ve algo (UI).
Componentes Contenedores/Lógicos: Se encargan de cómo funciona algo (datos).


2. Naming

El código debe leerse como una historia
Evita nombres genéricos como data o info.

Booleanos: Siempre deben empezar con un prefijo como is, has, should o can.

```
// Mal: active, open
// Bien: isActive, isOpen, hasToken
```

Handlers de Eventos: 
Prefijo handle para la función y on para la prop.

```
const handleClick = () => { ... }
<Button onClick={handleClick} />
```


3. Extraer Lógica en Custom Hooks

No llenar el componente de useEffect y funciones de cálculo.
Si la lógica no es de renderizado sácala a un Custom Hook
Limpia el componente y permite que la lógica sea reutilizable y testeable por separado.

```
// Mal: Lógica mezclada con UI
function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => { fetch('/api/users').then(...) }, []);
  return <ul>{users.map(u => <li>{u.name}</li>)}</ul>;
}

// Bien: Lógica extraída
function UserList() {
  const { users, isLoading } = useGetUsers(); // Lógica oculta y limpia
  if (isLoading) return <Spinner />;
  return <List data={users} />;
}
```


4. JSX Limpio y Legible

Fácil de escanear visualmente

Evita el "Infierno de Ternarios": Si tienes ternarios anidados, crea sub-componentes o variables de ayuda.
Retorno Temprano (Early Return): Maneja errores o estados de carga al principio para evitar envolver todo el componente en un else.
Desestructuración de Props: No uses props.user.name en todo el archivo. Desestructura al inicio.


5. Inmutabilidad y evitar Prop Drilling

No mutes el estado: Usa siempre las funciones de actualización o librerías como Immer si el estado es muy complejo.
Composición de Componentes: Antes de saltar a Context API o Redux para pasar datos a través de 5 niveles, intenta usar composición (pasar componentes como children).


6. Organización de Archivos

Features o módulos, no solo por tipo de archivo
index.js en cada carpeta para exportaciones limpias.


Reglas: 

KISS: Si un componente es complejo de explicar, divídelo
DRY: No repitas lógica; usa Hooks o Utilidades.
Evita Comentarios: Si necesitas explicar qué hace una función, cámbiale el nombre por uno mejor.
Props Predecibles: No pases objetos gigantes si solo necesitas un ID.


## index.js: exportaciones limpias

Centralizar exportaciones: Patrón Barrel (Barril).

Su objetivo es "empaquetar" varios módulos de una carpeta para que puedan ser importados desde un único punto de entrada
simplificando las rutas y mejorando la legibilidad.

1. Problema: Importaciones "Ruidosas"

Ej, carpeta de componentes como:

```
src/components/
├── Button/
│   └── Button.jsx
├── Input/
│   └── Input.jsx
└── Card/
    └── Card.jsx
```

Sin un archivo index.js:
Al usar estos componentes en una página, tus importaciones se verían así:

```
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Card } from '../../components/Card/Card';
```

Genera rutas redundantes (/Button/Button) y hace que el bloque de importaciones crezca demasiado rápido.


2. Solución: El archivo index.js (Barrel)

Creamos un archivo index.js dentro de la carpeta src/components/ que actúe como una "puerta de salida":

src/components/index.js:

```
export { Button } from './Button/Button';
export { Input } from './Input/Input';
export { Card } from './Card/Card';
```

si usas exportaciones por defecto en tus componentes:

```
export { default as Button } from './Button/Button';
export { default as Input } from './Input/Input';
export { default as Card } from './Card/Card';
```


3. Resultado: Importaciones Limpias

Ahora, en cualquier parte de tu aplicación, puedes importar todo lo que necesites en una sola línea, apuntando solo a la carpeta:

```
// Más limmpio y fácil de mantener
import { Button, Input, Card } from '@/components';
```

Cuando apuntas a una carpeta (ej: @/components) las herramientas como Webpack o Vite buscan automáticamente un archivo llamado index dentro de ella.


4. Ventajas

Encapsulamiento:	
La estructura interna de la carpeta components queda oculta. 
Si mañana cambias el nombre del archivo Button.jsx a PrimaryButton.jsx, solo actualizas el index.js y el resto de la app no se entera.

Escalabilidad:
Facilita la creación de librerías internas
Puedes mover carpetas enteras y solo actualizar una línea de importación.

Legibilidad:
Menos líneas de código en la parte superior de tus archivos, lo que ayuda a enfocarse en la lógica del componente.

Refactorización:
Si decides dividir un componente en piezas más pequeñas, puedes mantener la interfaz de exportación intacta en el index.js.


5. Peligros: 

1. Circular Dependencies: 
Si dos carpetas tienen index.js que se importan entre sí
puedes crear un bucle infinito que rompa la aplicación

2. Tree Shaking:
En aplicaciones extremadamente grandes, si el index.js es gigante y no está bien configurado, el navegador podría terminar cargando componentes que no estás usando
(aunque los empaquetadores modernos como Vite/Rollup ya manejan esto muy bien).



# Composición de Componentes: Children

En lugar de herencia (como en la programación orientada a objetos)
React utiliza la composición para crear componentes complejos a partir de componentes más simples.

Uso de la prop reservada children:
Ej: componente Card, tiene un estilo (bordes, sombras), pero no sabe qué habrá dentro
Puede haber un texto, una imagen o un formulario.

En lugar de crear un CardWithText, CardWithImage, etc., creas un Card genérico que acepte "hijos" (children).

```
// 1. Definimos el componente contenedor
function Card({ children, title }) {
  return (
    <div className="card-container">
      <h3>{title}</h3>
      <div className="card-content">
        {children} {/* Aquí se renderizará lo que pongamos dentro */}
      </div>
    </div>
  );
}

// 2. Lo usamos pasando contenido dentro de las etiquetas
function App() {
  return (
    <Card title="Perfil de Usuario">
      <img src="avatar.jpg" alt="User" />
      <p>Nombre: Juan Pérez</p>
      <button>Seguir</button>
    </Card>
  );
}
```

Ventajas: Componentes más genéricos y reutilizables
Evita el "Prop Drilling"
Componentes más genéricos y reutilizables, no está acoplado a un contenido específico; que puedes reutilizar en cualquier parte del proyecto. 

Responsabilidad Única:
El componente contenedor se encarga de la estructura y el estilo externo
mientras que el contenido se encarga de su propia lógica y UI interna


4. Patrón Avanzado: Layouts

Estructurar páginas completas

```
// Layout.jsx
function MainLayout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <aside className="sidebar">Menú Lateral</aside>
      <main className="content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

// HomePage.jsx
function HomePage() {
  return (
    <MainLayout>
      <h1>Bienvenido a la App</h1>
      <p>Este contenido vive dentro del MainLayout.</p>
    </MainLayout>
  );
```


Props vs Children: 

Props: Úsalas cuando quieras pasar datos (strings, números, objetos) o configuraciones.

Children: Úsalas cuando quieras pasar elementos visuales o componentes complejos que el contenedor simplemente debe mostrar


Patrón 'Slots':

A veces children no es suficiente porque necesitas colocar contenido en diferentes lugares
(ej: una cabecera y un pie de página)

Puedes pasar componentes como props normales:

```
function Modal({ header, content, footer }) {
  return (
    <div className="modal">
      <div className="modal-header">{header}</div>
      <div className="modal-body">{content}</div>
      <div className="modal-footer">{footer}</div>
    </div>
  );
}

// Uso:
<Modal 
  header={<h1>Título</h1>}
  content={<p>Este es el cuerpo</p>}
  footer={<button>Cerrar</button>}
/>
```



# Dumb Components

Su única responsabilidad es cómo se ven las cosas
delegando el cómo funcionan a otros niveles de la aplicación.

No tiene lógica de negocio ni conocimiento del estado global o de las APIs
Simplemente recibe datos y funciones a través de props y los renderiza.

No tienen efectos secundarios: No usan useEffect para llamar a una API.
No conocen el Store: No usan useSelector (Redux) o useContext directamente para lógica de negocio.


Son altamente reutilizables: Al no depender de un contexto específico, puedes usarlos en cualquier parte del proyecto.
Fáciles de testear: Solo necesitas pasarle props y verificar que el HTML sea correcto.

Ej: Dumb y Smart

1. Dumb Component (UserCard.jsx): No sabe de dónde vienen los datos

```
// Solo UI. Reutilizable en cualquier parte.
export function UserCard({ name, onEdit, isLoading }) {
  if (isLoading) return <p>Cargando...</p>;

  return (
    <div className="card">
      <h1>{name}</h1>
      <button onClick={onEdit}>Editar</button>
    </div>
  );
}
```

2. Smart Component o Hook (useUser.js): Maneja la lógica

```
// Se encarga de la data.
function UserProfileContainer({ id }) {
  const { user, loading } = useFetchUser(id); // Lógica externa

  const handleEdit = () => {
    console.log("Lógica compleja de edición aquí");
  };

  return (
    <UserCard 
      name={user?.name} 
      isLoading={loading} 
      onEdit={handleEdit} 
    />
  );
}
```


Prácticas:
Empieza creando el componente como Dumb.
Solo cuando necesites conectarlo a una fuente de datos
o una lógica muy compleja, envuélvelo en un componente "Smart" o un Custom Hook.

Botones, Inputs, Modales.
Listas de elementos (la fila de una tabla).
Tarjetas de información (Cards).
Layouts y estructuras de rejilla.


Testing y Storybook:

Testing Library: Al ser puros, los tests son simples
"Si le paso el nombre 'Ana', ¿aparece 'Ana' en la pantalla?".

Storybook: Puedes visualizar todos los estados de tu componente (cargando, error, éxito) simplemente pasando diferentes props
sin necesidad de tener un servidor o una API funcionando.

Un componente solo debe saber lo mínimo necesario para hacer su trabajo:
Si un botón solo necesita cambiar de color al hacer clic
No debería saber nada sobre el id del usuario que lo está presionando.



# Cod


## Arq

Data: 

person:
name, surname, profession, pic, bio, proj/links 

proj:
yourPortfolio, aiState...

widget:
date
time
wheater

person has projects

```
				App
(widget)		(proj)			(person)
date			ProjectsInfo	bio
time				links		pic
wheater			 	SocialMedia
```



```
 src/
1.		features
			profile
				components
					profile.jsx
				hooks
				profile.js
			widget
				components
				widget.js				
2. shared
		components
			btn
			main 
			section
			aside
			article
			footer
			time
			img
			link
			embed
			pic
			source
		hooks
		utils
		
		
3. store/globalState

4. api

5. pages

6. style
		theme
		global
7. app.js
``` 


dumb, smart, hook:
hook -> rtn obj/estados
smrt -> rtn dumb le pasa obj/custom hook
dumb -> rtn elemHtml/presen usando info smrt


comp components: 
app: (div)
wid (art) , proj (main), pers (aside)

pers: 
pic/img
bio(p)

proj:
p/a/links
icons/a/links

wid:
art:
date, time, wheater

dumb: children (span, p, li, h1..., a)



# Vitest y RTL

Test Runner: Ejecuta los test
provee las funciones describe, it, expect.

RTL: 
renderizar componentes y buscar elementos en el DOM.

Happy DOM / JSDOM:
Simulan un navegador en tu terminal.


1. Consultas y Matchers:

Corazón de RTL: Seleccionar elementos

Tipos de Queries:
getBy...: Para elementos que deben estar ahí (falla si no se encuentran).
queryBy...: Para elementos que no deberían estar ahí (devuelve null).
findBy...: Elementos asíncronos (devuelven una promesa).

Prioridad de Selección:
preferir getByRole o getByText antes que test-id.

Jest-DOM Matchers:
usar .toBeInTheDocument(), .toHaveStyle(), .toBeDisabled().


2. Interacciones del Usuario:

Un componente no es estático. Debes simular que alguien lo usa.

user-event vs fireEvent:
user-event es superior: simula eventos reales como keydown y mousedown
fireEvent ignora eventos como keydown y mousedown

Simulación de inputs:
Escribir en formularios
marcar checkboxes
seleccionar opciones de un dropdown

Clicks y Focus:
Validar que los botones disparen acciones y que el foco se mueva correctamente.



## Config RTL y Vitest

1. Dependencias: componentes
Vitest (el motor), RTL (la utilidad de testing) y un simulador de navegador (JSDOM).

```
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

vitest: El corredor de tests (reemplaza a Jest).
@testing-library/react: Herramientas para renderizar componentes.
jsdom: Simula un navegador en Node.js.
@testing-library/jest-dom: Añade "matchers" personalizados como .toBeInTheDocument().


2. Config Vite
Uso de vitest y el entorno de pruebas deba ser navegador simulado

vite.config.js (o .ts):

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,           // Permite usar 'describe', 'it', 'expect' sin importarlos
    environment: 'jsdom',    // Simula el DOM del navegador
    setupFiles: './src/setupTests.js', // Archivo de configuración inicial
  },
})
```


3. Setup (setupTests.js)
Crea el archivo src/setupTests.js.
se ejecutará antes de cada test para extender las capacidades de Vitest con las de RTL.

```
import '@testing-library/jest-dom';
```


4. Test

Dumb Component como: src/components/Greeting.jsx

```
export function Greeting({ name }) {
  return (
    <div>
      <h1>Hola, {name}!</h1>
      <button>Click aquí</button>
    </div>
  );
}
```

Creamos el test: src/components/Greeting.test.jsx

```
import { render, screen } from '@testing-library/react';
import { Greeting } from './Greeting';

describe('Greeting Component', () => {
  it('debe renderizar el nombre correctamente', () => {
    // 1. Renderizar el componente
    render(<Greeting name="Gemini" />);

    // 2. Buscar el elemento (usando Roles para accesibilidad)
    const title = screen.getByRole('heading', { name: /hola, gemini!/i });

    // 3. Aserción (lo que esperamos que pase)
    expect(title).toBeInTheDocument();
  });

  it('debe contener un botón', () => {
    render(<Greeting name="Gemini" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
```


5. Clean Testing: Queries y Prioridades

Una parte vital de RTL es saber cómo buscar los elementos
RTL te obliga a pensar como un usuario.

Jerarquía de búsqueda recomendada:

1. getByRole: (Preferida) Busca por función de accesibilidad (button, heading, link).

2. getByText: Busca por el contenido visual.

3. getByLabelText: Ideal para formularios (inputs).

4. getByTestId: (Último recurso) Solo si no hay forma de encontrarlo por accesibilidad. 


6. Ejecutar los Tests

Añadir script a package.json

```
"scripts": {
  "test": "vitest",
  "test:ui": "vitest --ui",
  "coverage": "vitest run --coverage"
}
```

npm test: Ejecuta los tests en modo "watch" (se actualizan al guardar).
npm run test:ui: Abre una interfaz gráfica en el navegador para ver tus tests.


Prácticas:

Evita testear estilos: No te obsesiones con si el botón es rojo. Testea que el botón exista y que haga algo al clicar.
Un test, una razón: No metas 50 aserciones en un solo it. Divide tus tests para que, si uno falla, sepas exactamente por qué.
Usa screen.debug(): Si no encuentras un elemento, escribe screen.debug() en tu test. Imprimirá el HTML actual en tu consola para que veas qué está pasando.



## Un test, una razón

Divide tus tests para que, si uno falla, sepas exactamente por qué.
No metas 50 aserciones en un solo it

##### Cada caso de prueba (it o test) debe enfocarse en verificar un solo comportamiento o una sola pieza de lógica.

Si un test falla, deberías saber exactamente qué se rompió solo con leer el nombre del test
sin necesidad de entrar a depurar el código de la prueba


1. Problema: Test Monolítico

Un solo test que verifica todo el flujo de un componente.

##### Mal test (Muchas razones para fallar): Si este test falla, ¿es porque el botón no funciona, porque el input no escribe o porque el mensaje no aparece?

```
// MAL: Si este test falla, ¿es porque el botón no funciona, 
// porque el input no escribe o porque el mensaje no aparece?
it('debe funcionar el formulario de contacto', async () => {
  render(<ContactForm />);
  
  const input = screen.getByLabelText(/nombre/i);
  const button = screen.getByRole('button');

  await userEvent.type(input, 'Juan');
  await userEvent.click(button);

  expect(input.value).toBe('Juan');
  expect(button).toBeDisabled();
  expect(screen.getByText(/gracias por tu mensaje/i)).toBeInTheDocument();
});
```


2. Solución: Granularidad

Dividimos el comportamiento en pruebas pequeñas
Si el sistema de "deshabilitar botón" se rompe, solo fallará ese test
mientras que el de "escribir en el input" seguirá pasando.

```
describe('ContactForm', () => {
  it('debe permitir escribir en el campo de nombre', async () => {
    render(<ContactForm />);
    const input = screen.getByLabelText(/nombre/i);
    await userEvent.type(input, 'Juan');
    expect(input.value).toBe('Juan');
  });

  it('debe deshabilitar el botón de envío tras hacer clic', async () => {
    render(<ContactForm />);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(button).toBeDisabled();
  });

  it('debe mostrar un mensaje de éxito al enviar', async () => {
    render(<ContactForm />);
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/gracias por tu mensaje/i)).toBeInTheDocument();
  });
});
```


Ventajas: 

1. Documentación Viva
Los nombres de tus tests se convierten en la especificación técnica de tu componente.
Al leer el reporte de Vitest, ves una lista de lo que tu componente debe hacer.

2. Depuración Instantánea
Si en tu consola ves: `X debe deshabilitar el botón de envío`
Sabes que el problema está específicamente en el atributo disabled del botón
no en la lógica del envío o en el renderizado del formulario.

3. Facilidad de Mantenimiento
Si decides que el botón ya no debe deshabilitarse, solo borras o modificas ese test específico sin miedo a romper las otras verificaciones del formulario


##### Esto no significa que solo puedas tener un expect por test
##### Puedes tener varios si todos sirven para verificar la misma razón
Ej: para verificar que un usuario se desloguea, puedes esperar que el token se borre Y que se redirija a la página de inicio
Ambas cosas son parte de la "razón" del logout.



## Aserciones

##### Son el veredicto del test: Afirmas que algo debe ser de cierta manera
Si la aserción se cumple, el test pasa
si no, el test falla y te explica por qué.

En React (Vitest/Jest), las aserciones siempre empiezan con la función expect().

1. Elementos de una Aserción

Se divide en tres partes:

1. el valor que recibes

2. el "matcher" (el comparador)

3. el valor esperado.

```
expect(resultado).toBe(esperado);
//      ^           ^        ^
//    Valor       Matcher   Valor 
//    Actual                Esperado
```


2. Matchers Generales (Vitest / Jest)

Se usan para lógica pura, funciones y tipos de datos básicos.

.toBe():
primitivos (strings, números) o misma referencia.
expect(1+1).toBe(2)

.toEqual():
Para comparar objetos o arrays (compara el contenido).
expect({a:1}).toEqual({a:1})

.toBeTruthy():
Verifica que el valor sea "verdadero" (en sentido JS).
expect(user).toBeTruthy()

.toBeFalsy():
Verifica que el valor sea "falso" (null, undefined, 0, false).
expect(error).toBeFalsy()

.toContain():
Verifica si un array o string contiene un elemento.
expect(list).toContain('React')

.toHaveLength():
Verifica el tamaño de un array o string.
expect(arr).toHaveLength(3)


3. Matchers de DOM (jest-dom)

##### Cuando testeas componentes con RTL, los matchers generales se quedan cortos
##### Necesitas los de @testing-library/jest-dom, que entienden el HTML.

Más usados:

1. expect(el).toBeInTheDocument():
El más importante.
Verifica que el elemento realmente exista en el DOM.

2. expect(el).toBeVisible():
Verifica que el elemento no solo exista, sino que el usuario pueda verlo
(que no tenga display: none o opacity: 0).

3. expect(el).toBeDisabled():
Ideal para formularios
Verifica si un botón o input tiene el atributo disabled.

4. expect(el).toHaveValue('...'):
Verifica el contenido de un input o textarea.

5. expect(el).toHaveClass('active'):
Verifica si un elemento tiene una clase CSS específica.


4. Aserciones Negativas (.not)

##### Asegurar que algo no suceda: simplemente agregas .not antes del matcher.

Ej:

```
// Verifica que un mensaje de error NO esté en la pantalla
const errorMessage = screen.queryByText(/error/i);
expect(errorMessage).not.toBeInTheDocument();

// Verifica que el botón NO esté deshabilitado
expect(button).not.toBeDisabled();
```


5. Prácticas

1. Prefiere matchers específicos

##### Evita usar .toBe(true) para todo: Es mejor usar matchers que den mensajes de error claros.

```
// Mal
expect(button.disabled).toBe(true);

// Bien
expect(button).toBeDisabled();
```

##### Ventaja: los mensajes de error
Si falla, el segundo te dirá: "Expected element to be disabled but it was not", mientras que el primero solo dirá "Expected true but got false".


2. Múltiple expect con sentido

"un test, una razón", puedes tener varios expect si validan el mismo concepto.

```
it('debe limpiar el formulario tras enviar', async () => {
  render(<CommentForm />);
  const input = screen.getByRole('textbox');
  
  await userEvent.type(input, 'Gran post');
  await userEvent.click(screen.getByRole('button'));

  // Ambas aserciones validan el concepto de "limpieza"
  expect(input).toHaveValue('');
  expect(input).toHaveFocus();
});
```


3. Aserciones Asíncronas

Si estás esperando que algo aparezca tras una llamada a la API, usa findBy y await:

```
const successMessage = await screen.findByText(/enviado con éxito/i);
expect(successMessage).toBeInTheDocument();
```



# Elementos 


## href, link, a

Tienen que ver con conectar archivos o páginas

<a>: enlace interactivo
crea hipervínculos
Es lo que el usuario ve y en lo que hace clic para ir a otra parte.
Navegar entre páginas web, secciones de la misma página o descargar archivos.

```
<a href="https://www.google.com">Ir a Google</a>
```

href: dirección
atributo (prop)/Hypertext Reference
destino: Le dice al navegador a qué dirección exacta debe ir.
Se usa dentro de las etiquetas <a> y <link>.
Sin el href, un enlace no sabría a dónde llevarte.


<link>: conexión interna
no es clicable para el usuario
Se coloca casi siempre dentro del <head> de tu código HTML.
relación entre el documento actual y un recurso externo.
Vincular hojas de estilo (CSS)
añadir el icono de la pestaña (favicon)
fuentes de Google.

```
<link rel="stylesheet" href="estilos.css">
```





