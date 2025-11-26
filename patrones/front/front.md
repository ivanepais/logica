# React 

## JS

iter modernos

switch

arrow

async/await

Desestructuración

Spread/Rest operators

Template Literals

Módulos (import/export).


## Componentes funcionales

##### Acepta un único argumento llamado props (propiedades) 

Devuelve un elemento React que describe lo que debe aparecer en la pantalla

Es un elemento escrito en JSX


Definición: Con funciones normales o arrow

```
// Definición como una función flecha (la forma más común)
const Saludo = (props) => {
  return <h1>Hola, {props.nombre}!</h1>;
};

// Definición como una función estándar
function BotonContador(props) {
  return <button onClick={props.onClick}>Click aquí</button>;
}
```


##### Props: objeto como argumento

##### Datos que le envía el componente padre

##### inmutables (solo lectura)

```
const TarjetaUsuario = (props) => {
  // props es: { nombre: "Ana", edad: 30 }
  return (
    <div>
      <h2>{props.nombre}</h2>
      <p>Edad: {props.edad}</p>
    </div>
  );
};
// En el padre se usa: <TarjetaUsuario nombre="Ana" edad={30} />
```


JSX: 

Lo que la función devuelve es la representación de la interfaz de usuario

##### Extensión de sintaxis que permite escribir estructuras tipo HTML dentro de JavaScript.


Hooks: 

Funciones especiales

Permiten a los Componentes Funcionales "engancharse" a las características de React

Por ej, estado y el ciclo de vida

Los esenciales son: 

#### 1. useState (Para el Estado): Permite que el componente almacene y gestione datos internos.

#### 2. useEffect (Para Efectos Secundarios): Permite ejecutar código después de que el componente se haya renderizado

Ideal para llamadas a API o manipulación manual del DOM.


### Diseño de componentes funcionales

#### 1. Responsabilidad Única (SRP)

Cada componente debe hacer una sola cosa y hacerla bien.

##### Si tu componente maneja el estado, recupera datos, y también renderiza un formulario complejo, es una señal de que debe ser dividido.

1. Componente Contenedor (Container): Maneja la lógica (estado, llamadas a API).

2. Componente Presentacional (Dumb/Presentational): Solo se preocupa por la apariencia y recibe datos a través de props.


#### 2. Componibilidad y Reutilización

Diseña tus componentes para que sean agnósticos a su contexto de uso.

children: Permitir que los componentes envuelvan contenido arbitrario

Hace que componentes como Modal, Card o Layout sean extremadamente flexibles.

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


#### 3. Evitar el "Prop Drilling" con Context o Composición 

Prop Drilling ocurre cuando pasas una prop a través de varios componentes intermedios que no la necesitan

Solo para llegar a un componente más profundo.

##### Utiliza el Context API (useContext) para datos que son globales (ej. tema, usuario, idioma).

##### Usa la Composición de React (principio 2) para pasar el componente final como prop en lugar de los datos.


#### 4. Nombrar componentes y props

Componentes: Utiliza PascalCase (Ej: UserProfile, ShoppingCart).
Los nombres deben ser sustantivos y describir lo que son.

Hooks Personalizados: Utiliza camelCase y siempre deben comenzar con use
(Ej: useAuth, useFetchData).

Props Booleanas: Nómbralas con prefijos como is o has para mayor claridad
(Ej: isDisabled, isLoading).


#### 5. TypeScript

TypeScript es un estándar de la industria

Define las estructuras de las props y el estado claramente.

Beneficio: Previene errores de tipo en tiempo de compilación, y proporciona un excelente autocompletado y documentación para tus componentes.


#### 6. Destructuración de Props

En lugar de acceder a las propiedades con props.nombre

Destrúcturalas directamente en la firma de la función.

Hace el código más limpio y explícito sobre lo que el componente espera.

```
const Greeting = ({ name, age }) => {
  return <h1>Hola, {name}, tienes {age} años</h1>;
};
```


#### 7. Uso Correcto de Hooks

##### Reglas de Hooks: 

1. Solo llama a Hooks en la parte superior de tu componente funcional (no dentro de if, bucles o funciones anidadas).

2. Solo llama a Hooks desde componentes funcionales de React o desde otros Hooks personalizados.


##### useEffect para Efectos Secundarios:

##### especificar el array de dependencias (el segundo argumento []) correctamente para controlar cuándo se ejecuta el efecto.

##### Si tu efecto crea una suscripción o un temporizador, incluye una función de limpieza que se ejecute en el desmontaje.

```
// Limpieza en useEffect
useEffect(() => {
  const timer = setInterval(() => console.log('Tick'), 1000);
  
  // Función de limpieza
  return () => clearInterval(timer);
}, []); // Se ejecuta solo al montar y limpiar al desmontar
```


#### 8. Evitar Re-renderizados Innecesarios

##### React.memo: Envuelve tu componente funcional con React.memo para evitar que se re-renderice si sus props no han cambiado (útil para componentes presentacionales pesados).

##### useCallback y useMemo:

1. Utiliza useCallback para memorizar funciones que se pasan como props a componentes envueltos en React.memo.

2. Utiliza useMemo para memorizar cálculos costosos o grandes objetos/arrays.


#### 9. Renderizado Condicional Limpio

##### Evita anidar múltiples if/else dentro del return de tu componente

##### Usa operadores ternarios (? :) o el operador AND lógico (&&) para la representación condicional concisa.

```
// Ejemplo de AND lógico (si isLoading es true, muestra el loader)
return (
  <div>
    {isLoading && <Loader />}
    {!isLoading && <p>Datos cargados.</p>}
  </div>
);
```


### SRP en Componentes

##### Dividir un componente grande y con múltiples responsabilidades en componentes más pequeños y enfocados

#### Un Componente Contenedor (para la lógica) y un Componente Presentacional (para la UI/apariencia).


#### Problema con componente monolítico

Ej: componente llamado UserProfile que maneja tanto la lógica de datos como la presentación visual del perfil de un usuario.

```
// UserProfile.jsx (Componente con Múltiples Responsabilidades)
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. RESPONSABILIDAD: Recuperación de Datos (Lógica)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}`);
        setUser(response.data);
      } catch (err) {
        setError("Error al cargar los datos.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, [userId]);

  // 2. RESPONSABILIDAD: Lógica de Rendereado Condicional
  if (isLoading) {
    return <p>Cargando perfil...</p>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  // 3. RESPONSABILIDAD: Presentación de la UI (Apariencia)
  return (
    <div className="profile-card">
      <img src={user.avatarUrl} alt={`Avatar de ${user.name}`} className="avatar" />
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <div className="details">
        {user.bio ? <p>{user.bio}</p> : <p>Sin biografía.</p>}
      </div>
    </div>
  );
};

export default UserProfile;
```

Este componente hace tres cosas: gestionar el estado, llamar a la API y mostrar la UI.

##### Si queremos cambiar el diseño (CSS), o si queremos reutilizar la lógica de carga de datos en otro lugar, tenemos que modificar todo el archivo.


#### Componente SRP

##### Dividiremos esto en dos componentes siguiendo el patrón de Contenedor/Presentacional.

1. Componente Presentacional (UI/Apariencia)

##### Componente es "tonto" (dumb): Solo recibe los datos necesarios a través de props

##### Se enfoca únicamente en el diseño y la presentación

##### No tiene estado propio (useState) ni efectos secundarios (useEffect).

```
// UserDetails.jsx (Responsabilidad Única: Presentación)
// Recibe los datos ya listos como props
const UserDetails = ({ user }) => {
  return (
    <div className="profile-card">
      <img src={user.avatarUrl} alt={`Avatar de ${user.name}`} className="avatar" />
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <div className="details">
        {user.bio ? <p>{user.bio}</p> : <p>Sin biografía.</p>}
      </div>
    </div>
  );
};

export default UserDetails;
```


2. Componente Contenedor (Lógica/Datos)

Este componente es "inteligente" (smart). 

##### Maneja el estado, la lógica de la API, y el rendereado condicional (cargando, error, éxito). 

##### Luego, le pasa los datos listos al componente Presentacional.

```
// UserProfileContainer.jsx (Responsabilidad Única: Lógica y Estado)
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserDetails from './UserDetails'; // Importa el componente presentacional

const UserProfileContainer = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Lógica de recuperación de datos (Única Responsabilidad Lógica)
  useEffect(() => {
    const fetchUser = async () => {
      // ... (código de axios y try/catch, igual que antes) ...
      try {
        const response = await axios.get(`/api/users/${userId}`);
        setUser(response.data);
      } catch (err) {
        setError("Error al cargar los datos.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, [userId]);

  // Lógica de rendereado condicional
  if (isLoading) {
    return <p>Cargando perfil...</p>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }
  
  // Pasa los datos al componente Presentacional
  return <UserDetails user={user} />;
};

export default UserProfileContainer;
```


#### Beneficios

1. UserDetails (Presentacional)

SRP: Solo la apariencia (UI).

Reutilización: Muy alta. Se puede usar para mostrar datos de cualquier usuario, vengan de donde vengan.

Test: Se prueba fácilmente si la UI se ve correctamente con diferentes props de usuario.


2. UserProfileContainer (Contenedor)

Solo la lógica de datos y estado.

##### La lógica (useEffect) puede ser extraída a un Custom Hook

##### (Ej: useUser(userId)) y reutilizada en cualquier componente.

##### Se prueba fácilmente si los datos se recuperan y manejan el estado de carga/error correctamente.



### Extraer lógica de un componentes smart/contenedor con Custom Hook

#### La lógica de la llamada a la API y el manejo del estado (isLoading, error, user)

##### Se encapsulan y se vuelven portátiles.


#### Custom Hook: función js cuyo nombre comienza con use

##### Puede llamar a otros Hooks de React (como useState y useEffect).


1. Creando el Custom Hook

##### Vamos a crear un archivo llamado useUser.js que contendrá la lógica de obtención de datos. 

```
// useUser.js (Custom Hook: Responsabilidad Única: Gestión de Datos)
import { useState, useEffect } from 'react';
import axios from 'axios';

// El hook acepta el ID del recurso que necesita (userId)
const useUser = (userId) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Definimos la función de fetch dentro del efecto
    const fetchUser = async () => {
      setIsLoading(true);
      setError(null); // Limpiar errores anteriores

      try {
        const response = await axios.get(`/api/users/${userId}`);
        setUser(response.data);
      } catch (err) {
        setError(err.message || "Error al obtener los datos del usuario.");
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]); // Dependencia del hook: se re-ejecuta si el ID cambia

  // El hook retorna un objeto con el estado actual
  return { user, isLoading, error };
};

export default useUser;
```


2. Refactorizando el Componente Contenedor

#### El componente UserProfileContainer ahora se convierte en el consumidor de esta lógica.

##### Ya no tiene useState ni useEffect, volviéndose mucho más limpio y enfocado en el renderizado condicional

```
// UserProfileContainer.jsx (Refactorizado: Solo Consumo de Lógica y Renderizado Condicional)
import React from 'react';
import useUser from './useUser'; // Importa el Custom Hook
import UserDetails from './UserDetails'; // Importa el Presentacional

const UserProfileContainer = ({ userId }) => {
  // 1. Llama al Custom Hook para obtener la lógica y el estado
  const { user, isLoading, error } = useUser(userId);

  // 2. Renderizado Condicional
  if (isLoading) {
    return <p>Cargando perfil...</p>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }
  
  if (!user) {
    return <p>Usuario no encontrado.</p>;
  }

  // 3. Pasa los datos limpios al Componente Presentacional
  return <UserDetails user={user} />;
};

export default UserProfileContainer;
```


#### Beneficios del Custom Hook 

Máxima Reutilización:
##### La función useUser(userId) puede ser utilizada en cualquier otro componente (ej. UserEditForm, UserHeader) sin reescribir la lógica de la API.

Separación de Lógica (SRP):
##### El contenedor se encarga de cómo se presenta la información (if/else y JSX)
##### mientras que el hook se encarga de qué es la información (el flujo de datos).

Legibilidad:
El código del componente contenedor es mucho más fácil de leer, ya que la lógica de efectos secundarios está completamente abstraída.

Fácil de Probar:
##### La lógica de obtención de datos puede probarse de forma aislada, lo que simplifica enormemente las pruebas unitarias.


#### Con esta arquitectura, has implementado una separación de responsabilidades de tres niveles:

1. UserDetails: Solo apariencia (Presentacional).

2. UserProfileContainer: Solo flujo y renderizado condicional (Contenedor).

3. useUser: Solo lógica de datos (Custom Hook).



## Props

#### Mecanismo para pasar datos de un componente padre a un componente hijo.

Como argumentos que le pasas a una función de JavaScript

Las props son el objeto de argumentos que recibe el componente funcional


#### Flujo de Datos: Las props siempre fluyen de forma unidireccional (de arriba hacia abajo): del componente padre al componente hijo.

Contenido: Pueden contener cualquier tipo de dato de JavaScript: strings, números, booleanos, funciones, arrays u objetos.


### Uso de props

1. Definición (En el Padre)

Componente padre le pasa las propiedades al componente hijo como si fueran atributos HTML.

```
// Componente Padre
const App = () => {
  const nombreUsuario = "Alex";
  const edadUsuario = 28;

  // Se pasan 'nombre' y 'edad' como props al componente Hijo
  return (
    <Saludo nombre={nombreUsuario} edad={edadUsuario} />
  );
};
```


2. Recepción (En el Hijo)

Recibe todas las propiedades pasadas por el padre en un único objeto llamado props.

Se recomienda usar la desestructuración para acceder a ellas limpiamente.

```
// Componente Hijo (Saludo.jsx)
// Se desestructura el objeto props para acceder a 'nombre' y 'edad'
const Saludo = ({ nombre, edad }) => {
  return (
    <div>
      <h1>Hola, {nombre}!</h1>
      <p>Tienes {edad} años.</p>
    </div>
  );
};
```


### Reglas para los props

#### 1. Solo Lectura (Inmutables)

##### Un componente hijo NUNCA debe intentar modificar las props que recibió de su componente padre.

##### Si un componente necesita cambiar datos, debe manejar su propio Estado (useState).

##### Si necesita notificar al padre sobre un evento (como un clic de botón), debe invocar una función que fue pasada como prop por el padre.


#### 2. Patrón children

Prop especial

Se usa para pasar el contenido que se encuentra entre las etiquetas de apertura y cierre de un componente.

Crucial para el diseño de componentes reutilizables como tarjetas (Card), modals o layouts.


Componente hijo: Card

```
// 🟢 Componente Hijo (Card.jsx)
// El componente usa {children} para renderizar el contenido envuelto.
const Card = ({ titulo, children }) => {
  return (
    <div className="card">
      <h2>{titulo}</h2>
      <div className="card-body">
        {children} {/* Aquí se renderizará el texto o componentes internos */}
      </div>
    </div>
  );
};

```

Uso en el Padre

```
<Card titulo="Mi Perfil">
  <p>Este texto es la prop 'children'.</p> 
  <button>Ver detalles</button>
</Card>
```


### Props y TypeScript

Definición: Define los tipos de datos y la obligatoriedad de cada prop

Esto actúa como documentación y ayuda a atrapar errores temprano.

Con TypeScript (Recomendado): Usa interface o type para definir la forma exacta del objeto props.

```
interface BotonProps {
  texto: string;
  onClick: () => void;
  isDisabled?: boolean; // El signo '?' indica que es opcional
}

const Boton: React.FC<BotonProps> = ({ texto, onClick, isDisabled = false }) => {
  // ...
};
```

Con PropTypes: Si no usas TypeScript, usa la librería prop-types.


### Nomenclatura de props

Evita abreviaturas crípticas (ej. dts en lugar de datos).

####3 Booleans (Banderas): Utiliza prefijos como is- o has- (ej. isLoading, hasError, isDisabled).

##### Manejadores de Eventos (Funciones): Utiliza el prefijo on- (ej. onClick, onSubmit, onClose).

Esto aclara que la prop es una función que el componente hijo debe llamar.


### Default Props

Define valores por defecto para las props opcionales

Esto hace que el componente sea más resistente y reduce la necesidad de hacer verificaciones de undefined dentro del cuerpo del componente.

```
// Valor por defecto para 'variante'
const Etiqueta = ({ texto, variante = 'primaria' }) => {
  // Si no se pasa 'variante', será 'primaria'
  return <span className={`etiqueta etiqueta-${variante}`}>{texto}</span>;
};
```


### Solo props necesarias (Evitar Props Excesivas)

Evita pasar todo el objeto de estado del padre al hijo cuando el hijo solo necesita dos o tres propiedades.

Desestructura y pasa solo lo que el hijo necesita.

Si el objeto es grande, refactoriza para pasar la parte relevante del objeto.



## Estado (State): Uso del hook useState.

Uso en componentes funcionales para gestionar el Estado de un componente.

Permite que un componente "recuerde" información

Se re-renderice (actualice la interfaz) cuando esa información cambia.


El Estado es una fuente de datos que es privada y controlada por el componente

Son los datos que un componente necesita para funcionar o para mostrar su UI

Pueden cambiar con el tiempo (ej. un contador, el texto de un input, si un modal está abierto o cerrado).


useState se utiliza dentro de un componente funcional

siempre devuelve un par de valores en un array:

1. El valor del estado actual: El dato que queremos almacenar.

2. Una función de actualización (setter): La única forma de cambiar ese valor y decirle a React que debe re-renderizar el componente 


Se usa la desestructuración de arrays para nombrar estos dos valores de forma clara:

```
import React, { useState } from 'react';

const Contador = () => {
  // 1. Llama a useState() con el valor inicial (0)
  // 2. Devuelve [valor, función_para_actualizar_valor]
  const [conteo, setConteo] = useState(0); 

  const incrementar = () => {
    // Usa la función setter para cambiar el valor
    setConteo(conteo + 1);
  };

  return (
    <div>
      <p>Has hecho clic {conteo} veces</p>
      <button onClick={incrementar}>
        Haz clic
      </button>
    </div>
  );
};
```

Valor Inicial: El argumento que le pasas a useState (ej. 0 en el ejemplo) es solo el valor que se usará en la primera renderización.

Actualización: Cuando llamas a la función setter (setConteo), React hace dos cosas:

1. Actualiza el valor del estado (de 0 a 1, etc.).

2. Vuelve a renderizar todo el componente con el nuevo valor


#### Inmutabilidad: Cuando actualizas el estado, debes pasar un nuevo valor a la función setter

Nunca modifiques el valor directamente

Esto es especialmente importante para objetos y arrays


### Props vs useState 

useState (Estado):

Interno (Propio del componente).

Mutable (Puede cambiar usando la función setter).

No fluye, se mantiene dentro del componente.


Props: 

Externo (Recibido del componente padre).

Inmutable (De solo lectura).

Fluye unidireccionalmente (Padre → Hijo).


### Nomenclatura

El par de valores debe ser descriptivo. 

Si la variable es isOpen, su setter debe ser setIsOpen.


### Actualización Funcional (Para Operaciones Asíncronas)

#### Si el nuevo estado depende del valor anterior (como en un contador)

##### usa la forma funcional del setter para evitar problemas con la asincronía de las actualizaciones de estado de React.

```
// Uso de la función de actualización (Recomendado para contadores)
setConteo(prevConteo => prevConteo + 1);

// Podría fallar si hay múltiples actualizaciones rápidas
// setConteo(conteo + 1);
```


#### Actualización Funcional: pasar una función a la función setter de useState

En lugar de pasar directamente el nuevo valor del estado.


En lugar de:

```
setEstado(nuevoValor); // Actualización estándar
```

Hacer: 

```
setEstado(valorPrevio => {
  // Retorna el nuevo valor basado en el valorPrevio
  return valorPrevio + 1; 
}); // Actualización funcional (o "callback")
```


#### Problema del Estado Obsoleto

##### La razón es manejar la naturaleza asíncrona de las actualizaciones de estado en React

Cuando llamas a una función setter (ej. setContador(contador + 1)), React no actualiza inmediatamente el valor de contador.

En su lugar:

1. React Programa el cambio para la próxima re-renderización.

2. React a menudo agrupa (batches) múltiples actualizaciones de estado en una sola re-renderización para optimizar el rendimiento.


#### Riesgos sin actualización funcional

##### Si el usuario hace doble clic muy rápido, el componente intenta actualizar el estado dos veces antes de que ocurra la primera re-renderización:

```
const [contador, setContador] = useState(0);

const dobleClick = () => {
  // Primer llamado (Usa contador = 0)
  setContador(contador + 1); // Programado a 1

  // Segundo llamado (¡Sigue usando contador = 0, porque React aún no ha actualizado!)
  setContador(contador + 1); // Programado a 1
};

// Resultado final: El contador es 1 (Debería ser 2)
```

En este caso, la variable contador capturada dentro de la función dobleClick está obsoleta (o stale)

Ambos llamados a setContador ven el mismo valor inicial (0), por lo que terminan estableciendo el mismo valor final (1).


Solución: 

Resuelve este problema garantizando que la función setter siempre tenga acceso al valor de estado más reciente y pendiente de React.

```
const [contador, setContador] = useState(0);

const dobleClickSeguro = () => {
  // Primer llamado (prevContador = 0, retorna 1)
  setContador(prevContador => prevContador + 1); 

  // Segundo llamado (prevContador es el valor pendiente más reciente, que es 1, retorna 2)
  setContador(prevContador => prevContador + 1);
};

// Resultado final: El contador es 2 (Correcto)
```

Cuando usas la forma funcional, React toma la función que le pasaste y la invoca inmediatamente antes de la actualización

Pasando el valor actual y garantizado del estado como argumento.

##### La función prev, React garantiza que es el valor de estado más reciente o pendiente


Ej de la función setState dentro de otra función:

```
import React, { useState } from 'react';

const ContadorDobleClick = () => {
  const [conteo, setConteo] = useState(0);
	
  // Usa la función 'prev' que React garantiza que es el valor de estado más reciente o pendiente.
  const incrementarFuncional = () => {
    
    // Primera actualización: (prev = 0) => retorna 1
    setConteo(prevConteo => prevConteo + 1);

    // Segunda actualización: (prev = 1) => retorna 2
    setConteo(prevConteo => prevConteo + 1);
    console.log(`[Funcional] Se han programado dos incrementos consecutivos y correctos.`);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Contador Actual: **{conteo}**</h2>
      <p>
        **Objetivo:** Al presionar, el contador debería aumentar en **2**.
      </p>

      <hr />
  
    <h3>Prueba con Actualización Funcional</h3>
      <button 
        onClick={incrementarFuncional}
        style={{ backgroundColor: '#ccffcc', color: 'black', padding: '10px' }}
      >
        Incrementar x2 (Funcional)
      </button>
      <p style={{ color: 'green', fontWeight: 'bold' }}>
        Resultado después de 1 click: **{conteo === 2 ? '2 (¡Correcto!)' : 'Aún no presionado/Valor inicial'}**
      </p>
    </div>
  );	
}
```


#### Uso de la Actualización Funcional

##### Siempre que el nuevo estado dependa del estado anterior.

```
Contadores / Números	setContador(prev => prev + 1)	OBLIGATORIO

Booleanos	setAbierto(prev => !prev)	OBLIGATORIO

Objetos / Arrays	setLista(prev => [...prev, nuevoItem])	OBLIGATORIO

Valores independientes	setNombre('Alex')	No es necesario (el valor no depende del estado anterior)
```


### Inmutabilidad en Objetos y Arrays

Cuando el estado es un objeto o un array

#### Debes crear una copia del estado existente y luego aplicar los cambios

##### Si modificas el original directamente, React no detectará el cambio y no re-renderizará.

```
const [user, setUser] = useState({ name: 'Ana', age: 30 });

const cambiarNombre = (nuevoNombre) => {
  // Crear una copia y aplicar el cambio (Usando spread operator)
  setUser({ ...user, name: nuevoNombre }); 
};
```

Nunca debes modificar el objeto o array directamente

siempre debes crear una copia y modificar esa copia.


#### Actualizando un Objeto

##### Operador de Propagación (...) o spread operator para crear una copia del objeto de estado antes de modificar cualquier propiedad

```
import React, { useState } from 'react';

const FormularioUsuario = () => {
  // Estado inicial: un objeto con múltiples propiedades
  const [datosUsuario, setDatosUsuario] = useState({
    nombre: 'Ana',
    edad: 28,
    email: 'ana.d@ejemplo.com'
  });

  // ✅ Función de Actualización Correcta (Inmutable)
  const manejarCambio = (e) => {
    const { name, value } = e.target;

    // Utilizamos la forma funcional (prevDatos) para garantizar el estado más reciente.
    setDatosUsuario(prevDatos => {
      // 1. Copia todas las propiedades del objeto anterior (...prevDatos)
      // 2. Sobrescribe solo la propiedad que ha cambiado ([name]: value)
      return {
        ...prevDatos, 
        [name]: value // [name] usa el nombre del input (ej. 'nombre') como clave
      };
    });
  };

  return (
    <div>
      <h3>Datos de Perfil</h3>
      
      {/* Inputs que usan la misma función de cambio */}
      <input
        type="text"
        name="nombre"
        value={datosUsuario.nombre}
        onChange={manejarCambio}
        placeholder="Nombre"
      />
      <input
        type="number"
        name="edad"
        value={datosUsuario.edad}
        onChange={manejarCambio}
        placeholder="Edad"
      />

      <h4>Resultado (Estado Actual)</h4>
      <pre>
        {JSON.stringify(datosUsuario, null, 2)}
      </pre>
      
      {/* Advertencia: Esto causaría un error */}
      {/* const errorCambio = (e) => {
        datosUsuario.nombre = e.target.value; // ¡Mutación directa! React NO re-renderiza.
      }
      */}
    </div>
  );
};

// export default FormularioUsuario;
```


#### Actualizando un Array

Para los arrays, el principio es el mismo: nunca uses métodos que muten el array original (push, pop, splice, etc.)

Siempre crea un nuevo array que incluya los cambios.

```
import React, { useState } from 'react';

const ListaDeTareas = () => {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Comprar leche', completada: false },
    { id: 2, texto: 'Estudiar React', completada: true }
  ]);

  // 1. Agregar un nuevo elemento (Inmutable)
  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(),
      texto: texto,
      completada: false
    };

    // Crea un nuevo array con todos los elementos antiguos (...tareas)
    // y agrega la nueva tarea al final.
    setTareas(prevTareas => [...prevTareas, nuevaTarea]); 
  };

  // 2. Modificar un elemento existente (Inmutable)
  const toggleCompletada = (id) => {
    setTareas(prevTareas => 
      prevTareas.map(tarea => {
        // Si el ID coincide, devuelve un NUEVO objeto de tarea
        if (tarea.id === id) {
          // Crea una copia del objeto tarea y cambia solo 'completada'
          return { ...tarea, completada: !tarea.completada }; 
        }
        // Si el ID no coincide, devuelve el objeto original sin modificarlo
        return tarea; 
      })
    );
  };
  
  return (
    <div>
      <h3>Lista de Tareas ({tareas.length} pendientes)</h3>
      <button onClick={() => agregarTarea("Tarea " + (tareas.length + 1))}>
        + Agregar Tarea
      </button>
      
      <ul>
        {tareas.map(tarea => (
          <li 
            key={tarea.id}
            onClick={() => toggleCompletada(tarea.id)}
            style={{ 
              textDecoration: tarea.completada ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
          >
            {tarea.texto}
          </li>
        ))}
      </ul>
      
      {/* Advertencia: Esto causaría un error */}
      {/* const errorPush = (texto) => {
        tareas.push({ id: 3, texto: texto, completada: false }); // Mutación directa
        setTareas(tareas); // React no ve el cambio y no re-renderiza.
      }
      */}
    </div>
  );
};

// export default ListaDeTareas;
```


Rs: 

```
Objeto	Modificar propiedad	setObjeto(prev => ({ ...prev, claveNueva: valor }))

Array	Agregar elemento	setArray(prev => [...prev, nuevoElemento])

Array	Modificar elemento	setArray(prev => prev.map(item => (item.id === id ? {...item, cambio: valor} : item)))
```




## Ciclo de Vida y Side Effects:

### Montaje, actualización, desmontaje

Secuencia de fases por las que pasa un componente 

Desde que nace, se actualiza en la pantalla, hasta que muere y se retira del DOM.

En los Componentes Funcionales se gestiona principalmente a través del Hook useEffect.


### Manejar las tres fases con useEffect

1. Mounting

##### Cuando una instancia del componente se está creando e insertando por primera vez en el DOM (Document Object Model).

Acción	Descripción	Equivalente con useEffect

Renderizado Inicial: El componente se ejecuta por primera vez y devuelve el JSX.	N/A (Es la ejecución normal de la función).

#### Efectos Secundarios: Es el momento ideal para inicializar datos, como realizar la primera llamada a una API o configurar suscripciones.

Se utiliza useEffect con un array de dependencias vacío `[]`.

Esto le dice a React que ejecute el efecto solo una vez, después del primer render.

```
useEffect(() => {
  console.log('El componente se ha montado. Llamando a la API...');
  // Aquí se haría el fetch(data)
}, []); // Array de dependencias vacío
```


2. Fase de Actualización (Updating)

Esta fase ocurre cada vez que el estado interno (useState) 

o las propiedades (props) del componente cambian

Lo que resulta en un re-renderizado de la UI


Re-renderizado	La función del componente se ejecuta de nuevo para calcular el nuevo JSX.	N/A (Es la ejecución normal de la función).

#### Efectos con Dependencias: Ejecutar código en respuesta a un cambio específico en el estado o las props

##### Se utiliza useEffect especificando la variable o prop que debe monitorear en el array de dependencias.

```
// Se ejecuta cada vez que la prop 'userId' o el estado 'posts' cambian
useEffect(() => {
  console.log('El ID de usuario ha cambiado o los posts se han actualizado.');
  // Aquí se podría actualizar una suscripción o recalcular algo.
}, [userId, posts]); // Array de dependencias con variables
```


3. Fase de Desmontaje (Unmounting)

##### Esta fase ocurre justo antes de que el componente sea eliminado del DOM.

#### Limpieza: El momento ideal para deshacer cualquier trabajo hecho en la fase de montaje

limpiar temporizadores (clearInterval), cancelar suscripciones, o limpiar eventos.

##### La función que se retorna dentro de useEffect actúa como la función de limpieza.

React la ejecuta justo antes de desmontar el componente.

```
// Limpieza al desmontar
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Componente activo');
  }, 1000);

  // La función de retorno se ejecuta al desmontar.
  return () => {
    clearInterval(timer); // Limpieza
    console.log('El componente ha sido desmontado. Temporizador limpiado.');
  };
}, []);
```


useEffect es la clave para controlar el ciclo de vida en los componentes funcionales

usando el array de dependencias para indicar en qué fase del ciclo quieres que se ejecute tu código.



### Side Effects

##### Se refieren a cualquier acción que realiza un componente que afecta al mundo exterior de la función de renderizado.

#### Es crucial entender los Side Effects porque React está diseñado para ser declarativo

##### La función de tu componente debe limitarse a describir la interfaz de usuario basado en su estado y props.

Son un problema que React lo gestiona con useEffect


Un Side Effect es cualquier interacción que ocurre entre el componente de React y el mundo exterior a la función que lo renderiza

Si una acción no se limita a calcular la salida (el JSX) basándose en las entradas (props y state), es un efecto secundario.


#### Ej de Side Effects

##### Recuperación de Datos	Llamadas a una API REST (ej. fetch o axios).	Afecta a un servidor externo para obtener datos.

##### Manipulación del DOM	Cambiar directamente el título del documento (document.title).	Modifica un elemento global fuera del control de React.

##### Suscripciones	Conexión a un socket o a una fuente de datos externa.	Crea una conexión persistente que debe ser limpiada

##### Tiempo	Usar setTimeout o setInterval.	Introduce la gestión del tiempo y recursos del navegador.


#### Separación de Responsabilidades

React requiere que la función principal de tu componente (la que devuelve el JSX) sea "pura" (o lo más cercana a la pureza posible).


Una Función Pura es aquella que:

1. Siempre devuelve el mismo resultado dadas las mismas entradas (props y state).

2. No causa ningún efecto secundario visible fuera de su ámbito (es decir, no cambia variables globales, no hace llamadas a API, etc.).


Si realizas un Side Effect directamente en el cuerpo de tu componente:

1. Causa loops infinitos: Si llamas a una API y luego llamas a setState con el resultado, el setState provoca un re-renderizado, que llama de nuevo a la API, que llama de nuevo a setState, y así sucesivamente

2. Rendimiento: Las llamadas a API o la manipulación del DOM ocurrirían en cada re-renderizado del componente (incluso por cambios menores de estado), lo cual es ineficiente.


#### Solución useEffect: para que puedas declarar de forma controlada cuándo y cómo quieres que ocurran los Side Effects

##### Actúa como una "puerta" o "cápsula" donde se encapsula el código impuro, garantizando que:

##### 1. Se ejecute solo después del renderizado: El código dentro de useEffect no se ejecuta hasta que React ha terminado de actualizar el DOM.

##### 2. Se ejecute de forma condicional: A través del array de dependencias, puedes decirle a React que ejecute el efecto solo cuando ciertas variables cambien, evitando el re-renderizado constante


Estructura de un useEffect:

```
useEffect(() => {
  // 1. Código del Side Effect (Impuro)

  return () => {
    // 2. Función de Limpieza (Opcional, para Desmontaje)
  };
}, [dependencia1, dependencia2]); // 3. Array de Dependencias (Condicional)
```

##### Al usar useEffect, puedes mantener el cuerpo principal de tu componente puro (enfocado solo en devolver JSX) 

##### Mientras gestionas de forma segura las interacciones con el mundo exterior.



### useEffect

Manejar efectos secundarios (llamadas a API, suscripciones, manipulación manual del DOM).

Clave para gestionar los Efectos Secundarios (Side Effects) y simular las fases del Ciclo de Vida del componente.

#### Permite declarar que tu componente necesita hacer algo después del renderizado

##### Es el lugar donde resides el código "impuro" (los Side Effects).


#### Propósito 

##### El cuerpo principal de tu componente debe ser puro (solo calcula JSX).

useEffect te da una vía de escape para ejecutar código que:

1. Interactúa con el mundo exterior a React (APIs, DOM del navegador, suscripciones).

2. Debe ejecutarse en un momento controlado (después del montaje, después de ciertas actualizaciones, o antes del desmontaje).


#### Sintaxis:

##### useEffect acepta dos argumentos:

1. Una función de efecto: La función que contiene el código del efecto secundario.

2. Un array de dependencias (opcional): Un array de variables (props o state) que React debe observar para decidir cuándo re-ejecutar el efecto

```
useEffect(() => {
  // Código del Efecto (Ej: Llamada a la API, manipulación del DOM)

  return () => {
    // Función de Limpieza (Opcional)
  };
}, [dependencia1, dependencia2]); // Array de dependencias
```


#### Controlando la Ejecución con el Array de Dependencias

##### La clave para usar useEffect correctamente es el array de dependencias (el segundo argumento).

##### Controla en qué fase del ciclo de vida se ejecuta el efecto


1. Montaje Único (Array Vacío)

##### Si pasas un array vacío, React sabe que el efecto no depende de ninguna prop o estado. 

Cuándo se ejecuta: Solo se ejecuta una vez, después de la primera renderización (Montaje).

Usos Típicos: Llamadas iniciales a APIs, configuración de listeners de eventos globales, inicialización de librerías.

```
// Ejecutar una sola vez al montar el componente
useEffect(() => {
  console.log('Componente montado. Obteniendo datos iniciales...');
  // fetch('/api/data').then(...)
}, []); // Solo en la fase de Montaje
```


2. Actualización Condicional (Array con Variables)

Si pasas variables en el array, React ejecutará el efecto cada vez que una de esas variables cambie entre renderizados.

Cuándo se ejecuta: Después de la primera renderización y después de cualquier re-renderización donde el valor de las dependencias haya cambiado.

Usos Típicos: Cargar nuevos datos cuando un ID de usuario cambia, recalcular valores en respuesta a un cambio de prop específica.

```
// Se ejecuta cuando 'userId' (prop) o 'page' (state) cambian
useEffect(() => {
  console.log(`Cargando datos para el usuario ${userId} en la página ${page}`);
  // fetch(`/api/user/${userId}?page=${page}`)
}, [userId, page]); // Se ejecuta al montar y cuando userId O page cambian
```


3. Cada Renderizado (Sin Array)

##### Si omites el segundo argumento por completo, el efecto se ejecuta después de cada renderizado (montaje y todas las actualizaciones).

Cuándo se ejecuta: Después de cada re-renderización.

##### Usos Típicos: Es raro y generalmente lleva a problemas de rendimiento o loops infinitos.

Se debe evitar a menos que tengas un motivo muy específico.


#### Limpieza (Desmontaje)

##### Para los efectos que configuran recursos persistentes (como timers, listeners de eventos, o suscripciones), es vital limpiarlos cuando el componente deja de usarlos.

La función que retorna dentro de useEffect es la función de Limpieza (Cleanup).


Cuándo se ejecuta:

1. Justo antes de que el componente se desmonte (Fase de Desmontaje).

2. Justo antes de re-ejecutar el efecto si sus dependencias han cambiado.

```
useEffect(() => {
  // Configuración del Efecto (Ej. Suscripción)
  const subscription = chatApi.subscribe(handler);

  return () => {
    // Limpieza (Se ejecuta antes del desmontaje o antes de la próxima ejecución)
    subscription.unsubscribe();
    console.log('Suscripción limpiada.');
  };
}, [chatId]); // Si chatId cambia, se limpia la vieja suscripción y se crea la nueva.
```


#### Ej useEffect con tres funcionalidades

1. Montaje Único: Llamar a una API.

2. Actualización Condicional: Re-ejecutar un efecto basado en un cambio de estado.

3. Limpieza: Usar la función de retorno para limpiar recursos (setTimeout).


##### Componente de Carga de Datos y Notificación

Simula la carga de un comentario de un usuario (basado en un ID) y usa un efecto para mostrar una notificación temporizada.

```
import React, { useState, useEffect } from 'react';

// Función simulada para cargar datos de una API
const fetchComentario = async (id) => {
  // Simulación de latencia de red
  await new Promise(resolve => setTimeout(resolve, 500)); 
  return {
    id: id,
    texto: `Este es el comentario número ${id} del usuario ${id * 10}.`,
    usuario: `User_${id * 10}`
  };
};

const ComentarioDetalle = () => {
  const [comentarioId, setComentarioId] = useState(1);
  const [comentario, setComentario] = useState(null);
  const [notificacion, setNotificacion] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 1. EFECTO: Carga de Datos (Montaje y Actualización Condicional)
  useEffect(() => {
    setIsLoading(true);
    setComentario(null); // Limpiar el comentario anterior

    // Lógica para cargar el comentario basado en el ID actual
    fetchComentario(comentarioId)
      .then(data => {
        setComentario(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error al cargar:", error);
        setIsLoading(false);
      });
      
    // NO HAY FUNCIÓN DE LIMPIEZA AQUÍ, ya que fetch().then() no crea un recurso persistente.
  }, [comentarioId]); // 👈 Dependencia: Se re-ejecuta cuando 'comentarioId' cambia.

  // 2. EFECTO: Notificación Temporal (Con Limpieza)
  useEffect(() => {
    if (comentario) {
      const mensaje = `🔔 Comentario ${comentario.id} cargado con éxito.`;
      setNotificacion(mensaje);

      // Creamos un recurso (un temporizador)
      const timerId = setTimeout(() => {
        setNotificacion('');
        console.log('Notificación borrada.');
      }, 3000);

      // Función de Limpieza: Se ejecuta ANTES de re-ejecutar el efecto o al desmontar.
      return () => {
        clearTimeout(timerId); // 👈 Limpiamos el temporizador pendiente
        console.log('Limpiando temporizador anterior para evitar fugas de memoria.');
      };
    }
    // 👈 Dependencia: Se ejecuta cada vez que el estado 'comentario' cambia (es decir, cuando se carga uno nuevo).
  }, [comentario]); 

  return (
    <div style={{ padding: '20px', border: '1px solid #1e90ff', borderRadius: '10px' }}>
      <h2>Detalles del Comentario</h2>

      {/* Control para cambiar el estado que activa el primer useEffect */}
      <button 
        onClick={() => setComentarioId(prevId => prevId + 1)}
        disabled={isLoading}
      >
        Cargar Comentario {comentarioId + 1}
      </button>
      
      <hr />

      {/* Mostrar la notificación */}
      {notificacion && (
        <p style={{ backgroundColor: '#f0f8ff', padding: '10px', borderRadius: '5px' }}>
          {notificacion}
        </p>
      )}

      {/* Mostrar el estado de carga y los datos */}
      {isLoading ? (
        <p>Cargando datos...</p>
      ) : comentario ? (
        <div style={{ borderLeft: '3px solid #1e90ff', paddingLeft: '10px' }}>
          <h4>Comentario ID: {comentario.id}</h4>
          <p>"{comentario.texto}"</p>
          <p>Por: **{comentario.usuario}**</p>
        </div>
      ) : (
        <p>Presiona el botón para cargar el primer comentario.</p>
      )}
    </div>
  );
};

export default ComentarioDetalle
```


1. useEffect de Carga de Datos

```
// Se re-ejecuta cuando 'comentarioId' cambia
}, [comentarioId]);
```

Propósito: Es la puerta de entrada a un Side Effect asíncrono (la llamada a la API simulada).

Comportamiento al Montar: Se ejecuta inmediatamente después del primer render (con comentarioId = 1).

Comportamiento al Actualizar: Cuando el usuario hace clic y setComentarioId se llama, el valor de comentarioId cambia, lo que dispara la re-ejecución de este efecto para cargar el nuevo comentario.


2. useEffect de Notificación y Limpieza

```
// Se ejecuta cada vez que 'comentario' cambia
}, [comentario]);
```

Propósito: Gestionar un recurso temporizado (setTimeout) que debe ser limpiado.

Comportamiento de la Limpieza:

Cuando se carga un nuevo comentario (el valor de comentario cambia), React ejecuta primero la función de return (limpiando el timerId anterior) y luego ejecuta el cuerpo del efecto (creando un nuevo timer).

Si el componente se desmontara mientras el timer está corriendo, el return se ejecuta para evitar la fuga de memoria (memory leak).


### Prácticas para useEffect

##### El manejo de las dependencias y la limpieza son las áreas más importantes.


1. Gestionar las Dependencias

##### Regla de Oro: Siempre incluye en el array de dependencias todas las variables, props o funciones que se utilizan dentro del cuerpo del efecto y que son definidas fuera de él.

Si omites una dependencia, el efecto utilizará un valor obsoleto (el valor que tenía durante el render inicial), lo que puede causar errores lógicos y de sincronización.

##### Array Vacío ([]): Úsalo solo cuando el efecto deba ejecutarse estrictamente una sola vez al montar (ej. la llamada inicial a una API o configurar un listener global

##### Evita la Omisión Total: Omitir el array de dependencias (useEffect(() => {...})) hace que el efecto se ejecute en cada renderizado. Esto es ineficiente y rara vez es la intención.


2. Implementar Siempre la Limpieza (Cleanup)

##### Si tu efecto secundario configura algo que persiste fuera de su ámbito (un recurso)

##### Debes proporcionar una función de limpieza para deshacer esa configuración.

Temporizadores y Oyentes: Para setTimeout, setInterval, o listeners de eventos del navegador, la limpieza es obligatoria

Siempre usa clearTimeout, clearInterval, o removeEventListener en la función de retorno.

Suscripciones: Si te suscribes a un socket o una fuente de datos, asegúrate de desuscribirte en la función de limpieza para evitar fugas de memoria

Llamadas a la API: Si una llamada a la API es larga y el componente se desmonta, esta llamada puede causar un error de "can't perform a React state update on an unmounted component".

Usa AbortController para cancelar la solicitud en la limpieza.

```
// Limpieza de un temporizador
useEffect(() => {
  const timer = setTimeout(() => { /* ... */ }, 1000);
  return () => clearTimeout(timer); // 👈 Limpieza
}, []);
```


3. Utilizar Funciones de Memoria (Performance)

Cuando las dependencias de tu useEffect incluyen funciones u objetos definidos dentro del componente

React podría re-ejecutar el efecto en cada render

incluso si la lógica no ha cambiado, porque la función/objeto es técnicamente un nuevo valor (===) en cada renderizado.

##### useCallback para Funciones: Si necesitas usar una función handler (ej. fetchData) como dependencia de useEffect, envuélvela en useCallback para garantizar que solo cambie si sus propias dependencias internas lo hacen.

```
// Función memorizada (solo se recrea si el ID cambia)
const fetchData = useCallback(async () => {
  // lógica de fetch
}, [userId]); 

useEffect(() => {
  fetchData();
}, [fetchData]); // La dependencia es estable si userId no cambia
```

##### useMemo para Objetos/Arrays: Si estás usando un objeto o array complejo como dependencia, envuélvelo en useMemo para evitar que se recree en cada renderizado.


#### SRP

##### Divide los Efectos: Si tu componente tiene lógica de API, limpieza de suscripción y actualización del título del documento

Separa estas tareas en múltiples useEffects.


##### Un useEffect por Concepto: Cada useEffect debe manejar un único concepto o Side Effect lógico

con su propio array de dependencias y, si es necesario, su propia limpieza.

```
// Correcto: Un efecto para la lógica de datos
useEffect(() => {
  // Lógica de carga de datos
}, [userId]); 

// Correcto: Un efecto separado para un efecto visual global
useEffect(() => {
  document.title = `Perfil de ${userName}`;
}, [userName]);
```


#### Abstraer a Custom Hooks

Reutilización: Si encuentras que un patrón de useEffect se repite (ej. fetch + isLoading + error), extrae toda esa lógica a un Custom Hook (ej. useFetch(url)).

Legibilidad: Esto limpia drásticamente el componente, haciendo que la lógica del efecto sea reutilizable, más fácil de probar y el componente principal más fácil de leer.



### useEffect y llamada inicial y no inicial a una api

#### Llamada inicial (al montar) y las llamadas subsiguientes (al actualizar). 


1. Llamada Inicial a la API (Fase de Montaje)

El objetivo es cargar los datos una única vez cuando el componente aparece en la pantalla.

Para asegurar que la llamada a la API se ejecute solo una vez (al montar), debes pasar un array de dependencias vacío como segundo argumento de useEffect.

```
import React, { useState, useEffect } from 'react';

const DatosIniciales = () => {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);

  // El efecto se ejecuta solo una vez (al montar)
  useEffect(() => {
    // 1. Definir la función asíncrona dentro del efecto
    const obtenerDatos = async () => {
      try {
        const respuesta = await fetch('/api/datos/iniciales');
        const data = await respuesta.json();
        setDatos(data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      } finally {
        setCargando(false);
      }
    };

    obtenerDatos();
  }, []); // Array vacío: Solo al montar

  if (cargando) return <p>Cargando datos por primera vez...</p>;
  return <div>{JSON.stringify(datos)}</div>;
};
```

React comprueba el array de dependencias

##### Como está vacío, sabe que el efecto no depende de ninguna prop o estado del componente

##### Por lo tanto, lo ejecuta después del primer renderizado y lo ignora en todos los re-renderizados posteriores.


2. Llamada a la API al Actualizar (Llamadas Subsecuentes)

##### El objetivo es re-ejecutar la llamada a la API cada vez que una variable específica (como un ID de usuario, una página de paginación, o un término de búsqueda) cambia.

##### Para que la llamada se ejecute en la actualización, debes incluir la(s) variable(s) que activan la nueva búsqueda en el array de dependencias.

```
import React, { useState, useEffect } from 'react';

const PerfilUsuario = ({ userId }) => {
  const [perfil, setPerfil] = useState(null);
  const [cargando, setCargando] = useState(false);

  // El efecto se ejecuta al montar Y cada vez que 'userId' cambie
  useEffect(() => {
    if (!userId) return; // Evitar llamada si el ID no existe

    setCargando(true);
    setPerfil(null); // Limpiar el perfil anterior

    const obtenerPerfil = async () => {
      try {
        const respuesta = await fetch(`/api/usuarios/${userId}`);
        const data = await respuesta.json();
        setPerfil(data);
      } catch (error) {
        console.error(`Error al cargar perfil de ${userId}:`, error);
      } finally {
        setCargando(false);
      }
    };

    obtenerPerfil();
  }, [userId]); // Dependencia: Se re-ejecuta cuando esta prop cambia

  if (cargando) return <p>Cargando perfil...</p>;
  if (!perfil) return <p>Selecciona un usuario.</p>;
  
  return (
    <div>
      <h3>Perfil de {perfil.nombre}</h3>
      <p>Email: {perfil.email}</p>
    </div>
  );
};
```

##### React compara el valor de userId en el renderizado actual con el valor del renderizado anterior.

##### Si son diferentes, el efecto se considera "sucio" y se re-ejecuta, iniciando la nueva llamada a la API.


Prácticas y Consejos:

1. Limpieza de Llamadas a API (Cancelación)

##### Para evitar la "condición de carrera" (donde una respuesta antigua de la API llega después de una nueva, sobrescribiendo el estado incorrectamente)

y errores por intentar actualizar el estado después de que el componente se desmonta

##### Utiliza AbortController para cancelar la solicitud en la función de limpieza.

```
useEffect(() => {
  const controller = new AbortController();
  const signal = controller.signal;

  const fetchData = async () => {
    try {
      // Pasa la señal al fetch
      const respuesta = await fetch(`/api/data/${userId}`, { signal }); 
      // ... manejo de datos
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Fetch abortado.');
        return;
      }
      // ... manejo de otros errores
    }
  };
  fetchData();

  return () => {
    // Función de Limpieza: Cancela la solicitud pendiente
    controller.abort(); 
  };
}, [userId]);
```


2. Abstracción con Custom Hooks

La mejor práctica es extraer la lógica de useEffect y useState que gestiona la carga de datos a un Custom Hook (ej. useFetch).

Esto hace que la lógica de la API sea reutilizable y mantiene tus componentes de UI limpios y enfocados solo en renderizar.



### SRP en useEffect

##### Significa que cada useEffect debe ser responsable de gestionar un único y específico efecto secundario y sus correspondientes dependencias y limpieza.


#### Evitar un useEffect Monolítico

Un solo useEffect que maneja múltiples tareas rompe el SRP y genera varios problemas:


Dependencias Conflictivas:

##### Un efecto puede necesitar depender solo de userId, mientras que otro necesita depender de cartItems

Si están juntos, tienes que incluir ambos, lo que provoca re-ejecuciones innecesarias.


Lógica de Limpieza Confusa:

Si el efecto hace una llamada a la API y configura un timer, la función de limpieza debe manejar ambos.

Esto hace que el código sea denso y difícil de depurar.


Dificultad de Reutilización:

No puedes reutilizar fácilmente solo la lógica de "llamada a la API" o solo la lógica de "configuración del título del documento".


Fácil de Romper:

Si cambias una dependencia para una parte de la lógica, puedes afectar accidentalmente el comportamiento de otra parte de la lógica que comparte el mismo Hook.


#### Utiliza múltiples Hooks useEffect dentro del mismo componente, uno para cada concepto lógico distinto.

##### Ej: componente de perfil de usuario que debe hacer tres cosas: (1) Cargar datos, (2) Registrar el título de la página y (3) Configurar un temporizador para una alerta.

Código Incorrecto (Sin SRP)

```
// Código monolítico y confuso
useEffect(() => {
  // 1. Lógica de Datos (Depende de userId)
  if (userId) {
    fetchProfile(userId).then(setProfile);
  }
  
  // 2. Lógica Global (Depende de userName)
  document.title = `Perfil de ${profile?.userName || 'Cargando...'}`; 

  // 3. Lógica de Tiempo (No tiene dependencias)
  const timer = setTimeout(() => {
    console.log('Alerta mostrada');
  }, 5000);

  return () => { // La limpieza es compleja y mezcla responsabilidades
    clearTimeout(timer); 
  };
// Las dependencias son confusas y fuerzan re-ejecuciones innecesarias
}, [userId, profile]);
```


Correcto:

Dividimos el código en tres useEffects separados, cada uno con su propia responsabilidad y array de dependencias optimizado.

```
1. Efecto: Gestión de Datos
// Responsabilidad única: Cargar datos en función del ID
useEffect(() => {
  if (userId) {
    // Lógica de carga de API
    fetchProfile(userId).then(setProfile);
  }
}, [userId]); // Depende SOLAMENTE de userId

// ------------------------------------------------------------------

// 2. Efecto: Gestión de Recursos Globales
// Responsabilidad única: Modificar el DOM (título)
useEffect(() => {
  document.title = `Perfil de ${profile?.userName || 'Cargando...'}`;
}, [profile?.userName]); // Depende SOLAMENTE del nombre de usuario

// ------------------------------------------------------------------

// 3. Efecto: Gestión de Recursos Temporales con Limpieza
// Responsabilidad única: Configurar y limpiar el temporizador
useEffect(() => {
  const timer = setTimeout(() => {
    setAlertaVisible(true);
  }, 5000);

  return () => {
    clearTimeout(timer); // Limpieza específica para este efecto
  };
}, []); // No depende de nada (solo se monta/desmonta)
```


### useEffect y Custom Hook

Custom Hook llamado useDataFetcher para Carga de Datos

encapsulará la lógica de useState y useEffect (estado, carga, error, y la llamada a la API) y la hará reutilizable.


1. Custom Hook (useDataFetcher.js)

Esta función se encarga de toda la lógica de datos.

Acepta una URL como dependencia y retorna el estado completo.

```
import { useState, useEffect } from 'react';

// Esta función genérica gestiona la llamada a la API y el estado
const useDataFetcher = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Implementación de AbortController para limpieza (mejor práctica)
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url, { signal });
        
        // Manejar errores HTTP (ej. 404)
        if (!response.ok) {
          throw new Error(`Error ${response.status}: No se pudo cargar el recurso.`);
        }
        
        const json = await response.json();
        setData(json);
      } catch (err) {
        // Ignorar el error si fue por cancelación (abort)
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        // Solo establecer a falso si no fue abortado
        if (!signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    if (url) {
      fetchData();
    }
    
    // Función de Limpieza: Cancela la solicitud si la URL cambia o el componente se desmonta
    return () => {
      controller.abort(); 
    };

  }, [url]); // La lógica se re-ejecuta solo si la URL cambia

  // El Hook retorna el estado necesario
  return { data, isLoading, error };
};

export default useDataFetcher;
```


2. Componente de Uso (UserProfile.jsx)

Ahora, el componente de UI se convierte en un consumidor limpio de este hook. 

Solo se enfoca en el renderizado condicional y la presentación.

```
import React, { useState } from 'react';
import useDataFetcher from './useDataFetcher'; 

// Este es el componente que usa la lógica
const UserProfile = () => {
  const [userId, setUserId] = useState(1);
  
  // 1. Consumo del Custom Hook: CERO LÓGICA DE API DENTRO DEL COMPONENTE
  const { 
    data: user, // Renombramos 'data' a 'user' para claridad
    isLoading, 
    error 
  } = useDataFetcher(`/api/users/${userId}`); // URL dinámica

  // 2. Lógica de UI y Renderizado Condicional
  if (isLoading) {
    return <p>Cargando perfil del Usuario {userId}...</p>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Error al cargar: {error}</div>;
  }

  if (!user) {
    return <p>Selecciona un usuario válido.</p>;
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #00bfff', borderRadius: '8px' }}>
      <h2>Perfil de {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Ciudad: {user.city}</p>
      
      <button onClick={() => setUserId(prevId => prevId + 1)} style={{ marginTop: '15px' }}>
        Ver Siguiente Usuario ({userId + 1})
      </button>
    </div>
  );
};

export default UserProfile;

// NOTA: Para este ejemplo, hemos asumido que el objeto 'user' tiene propiedades 'name', 'email' y 'city'.
```

##### useDataFetcher (Custom Hook)	Toda la lógica de estado de datos (isLoading, error, data), efectos secundarios (useEffect con fetch), y limpieza (AbortController).

(estados y efectos secundarios) componentes alto nivel (smart)


##### UserProfile (Componente)	Solo la presentación del markup (JSX), renderizado condicional, y manejo de la interacción del usuario (onClick que cambia el userId).

(Todo lo que tiene que ver con la ui/usuario/event) componentes bajo nivel (dumb)


##### Al separar la lógica de esta manera, si en el futuro decides cambiar de fetch a axios o cambiar la URL base, solo tienes que modificar el archivo useDataFetcher.js

##### El componente UserProfile seguirá funcionando sin cambios.



## Eventos y Formularios

### Eventos en React

##### Manejar las interacciones del usuario (clics, pulsaciones, cambios en forms)

##### Ejecuta código en respuesta a estos eventos/interacciones


Es una acción que ocurre dentro del sistema que puede ser notificada por el sistema

En React, el manejo de eventos tiene dos características principales:

1. Sintaxis camelCase: A diferencia del HTML nativo (que usa minúsculas, ej. onclick)
React utiliza la convención camelCase para nombrar los handlers de eventos (ej. onClick, onChange, onSubmit).

2. Pasar una Función: En lugar de pasar una cadena de texto (como en HTML con JavaScript en línea)
en React pasas directamente una función de JavaScript entre llaves ({ }).

```
// HTML Nativo
// <button onclick="alerta('Clic!')">Clic</button> 

// React (JSX)
const Boton = () => {
  const manejarClick = () => {
    console.log('¡Botón presionado!');
  };

  return (
    <button onClick={manejarClick}>
      Presioname
    </button>
  );
};
```


#### Eventos Sintéticos (Synthetic Events)

React no usa los eventos nativos del navegador directamente

##### En su lugar, envuelve los eventos del navegador en un sistema llamado Eventos Sintéticos (Synthetic Events).

Consistencia: Esto asegura que los eventos se comporten de manera idéntica en todos los navegadores
eliminando las inconsistencias que a menudo se encuentran en el manejo de eventos nativos (ej. diferencias en cómo Internet Explorer y Chrome manejan un evento e.preventDefault()).

Objeto e: Cuando se dispara un evento, React te pasa un objeto de evento sintético (e) a la función handler.
Este objeto es similar al objeto de evento nativo del navegador, con métodos y propiedades útiles como:

e.preventDefault(): Detiene la acción por defecto del navegador (esencial en formularios).

e.stopPropagation(): Detiene la propagación del evento a los elementos padres.

e.target: El elemento DOM que disparó el evento.

```
const Enlace = () => {
  const manejarClickEnlace = (e) => {
    // Previene que el navegador navegue a la URL por defecto
    e.preventDefault(); 
    console.log('Navegación bloqueada. ¡El evento sintético está funcionando!');
  };

  return (
    <a href="https://ejemplo.com" onClick={manejarClickEnlace}>
      Ir a Ejemplo
    </a>
  );
};
```


#### Pasar Argumentos a los Handlers

##### Pasar argumentos adicionales al handler de evento más allá del objeto de evento sintético

Para hacer esto, no puedes simplemente llamar a la función (ej. onClick={miFuncion(arg)} ), ya que esto la ejecutaría inmediatamente durante el render.

La forma correcta es utilizar una función arrow o una función anónima que envuelva la llamada a tu handler.

```
const ListaTareas = ({ idTarea, onEliminar }) => {
  return (
    // La función flecha (e) => ... se ejecuta en el clic.
    // Dentro, llamamos a onEliminar y pasamos 'idTarea'.
    <button onClick={(e) => onEliminar(idTarea, e)}> 
      Eliminar Tarea {idTarea}
    </button>
  );
};
```

##### Si tu handler no necesita ni el objeto de evento sintético (e) ni argumentos adicionales, puedes pasarlo directamente: onClick={miFuncion}.


#### Eventos Comunes en React

onClick: Clics en botones o cualquier elemento. 

onChange: Capturar el valor de input, textarea, o select cuando cambia. (Es clave para Formularios Controlados).

onSubmit: Enviar un formulario (generalmente requiere e.preventDefault()).

onFocus, onBlur: Eventos de enfoque y desenfoque.


#### Ej: onChange en un campo de entrada (input) y onClick

##### Los eventos se vinculan con el Estado (useState) para hacer que la interfaz sea dinámica.


Componente: Formulario de Registro Simple

Permite al usuario escribir su nombre y gestiona el envío de la información.

```
import React, { useState } from 'react';

const FormularioRegistro = () => {
  // 1. Estado para almacenar el valor del input y el estado de envío
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  // 2. Handler para el evento onChange (Captura de Entrada)
  const manejarCambioNombre = (e) => {
    // e.target.value es el valor actual que el usuario está escribiendo.
    setNombre(e.target.value);
    
    // Opcional: limpiar mensaje si el usuario empieza a escribir de nuevo
    setMensaje(''); 
  };

  // 3. Handler para el evento onSubmit (Envío de Formulario)
  const manejarEnvio = (e) => {
    // Previene la acción por defecto del formulario (recarga de página)
    e.preventDefault(); 

    if (nombre.trim() === '') {
      setMensaje('Por favor, ingresa tu nombre.');
    } else {
      // Aquí se haría la lógica de la API o la navegación
      setMensaje(`¡Registro exitoso! Nombre enviado: ${nombre}`);
    }
  };
  
  // 4. Handler para el evento onClick (Botón de Limpieza)
  const manejarClickLimpiar = () => {
      setNombre('');
      setMensaje('Datos limpiados.');
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #108a9f', borderRadius: '8px' }}>
      <h3>Registro de Usuario</h3>
      
      <form onSubmit={manejarEnvio}>
        <label>
          Nombre:
          {/* El input es 'CONTROLADO' porque su valor es el estado 'nombre' */}
          <input
            type="text"
            name="nombre"
            value={nombre} 
            onChange={manejarCambioNombre} // Evento onChange
            placeholder="Escribe tu nombre aquí"
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
        
        {/* El botón de tipo submit disparará el evento onSubmit del formulario */}
        <button type="submit" style={{ margin: '10px' }}>
          Enviar Registro
        </button>
      </form>

      {/* Botón de Limpieza */}
      <button 
        onClick={manejarClickLimpiar} // Evento onClick
        style={{ margin: '10px 0', backgroundColor: '#f0f0f0' }}
      >
        Limpiar
      </button>

      {/* Muestra el estado actual y el mensaje */}
      <hr />
      <p>Valor Actual del Input: **{nombre}**</p>
      <p style={{ fontWeight: 'bold' }}>{mensaje}</p>
    </div>
  );
};

export default FormularioRegistro;
```

1. Evento onChange (Formularios Controlados)

El patrón Formulario Controlado, el input no gestiona su propio valor; su valor está controlado por el estado de React (nombre).

Línea Clave: value={nombre}

Fuerza al input a mostrar siempre el valor que está en el estado.


Línea Clave: onChange={manejarCambioNombre}

Cuando el usuario escribe, se dispara el evento onChange.

El handler manejarCambioNombre lee el nuevo valor (e.target.value) y lo pasa a setNombre().

setNombre() actualiza el estado, provoca un re-renderizado, y el input muestra el nuevo valor gracias a value={nombre}.


2. Evento onSubmit

Se adjunta a la etiqueta <form>.

El handler recibe el objeto de Evento Sintético (e). 

La primera y crucial acción es llamar a e.preventDefault() para evitar el comportamiento predeterminado del navegador de enviar datos al servidor y recargar la página.


3. Evento onClick

Es el evento más simple, adjunto a la etiqueta <button>.

Simplemente ejecuta la función manejarClickLimpiar que, al llamar a setNombre(''), provoca un re-renderizado que borra el texto del input.




### Prácticas para Eventos

1. Nombra los Handlers Claramente

facilita la lectura y comprensión del código, especialmente para otros desarrolladores.

Convención: Utiliza la convención camelCase y el prefijo manejar o handle.

```
Formato: manejar[Tipo de Evento][Elemento] o manejar[Elemento][Tipo de Evento].
```

Elemento/Evento	manejarClickBoton o handleButtonSubmit
Evento/Nombre	manejarCambioNombre o handleNameChange


2. Arrow Solo Cuando Sea Necesario

Evita crear una función arrow anónima en línea dentro del JSX si no es estrictamente necesario

esto recrea la función en cada renderizado, lo que podría afectar sutilmente el rendimiento de la aplicación.

##### Cuando NO Necesitas la Arrow Function: Si la función handler solo necesita el objeto de evento sintético (e) o ningún argumento.

```
Recomendado: Pasa la función directamente
<button onClick={manejarClickBoton}>Guardar</button>
```


##### Cuando SÍ Necesitas la Arrow Function: Si necesitas pasar argumentos adicionales al handler o si quieres evitar la ejecución inmediata de la función.

```
// Necesario: Pasar el ID
<button onClick={() => manejarEliminar(item.id)}>Eliminar</button>
```


3. Utiliza la Delegación de Eventos (Propagación)

React implementa un sistema de Delegación de Eventos a través de los Eventos Sintéticos, es excelente para el rendimiento.

##### Evita la Propagación Excesiva: Si tu handler ha completado su tarea y quieres prevenir que los handlers de los elementos padres se disparen, usa e.stopPropagation().

Esto es común, por ejemplo, en un botón dentro de una tarjeta clickable.

```
const detenerPropagacion = (e) => {
  e.stopPropagation(); // El click no sube a la tarjeta padre
  console.log('Botón clickeado.');
};
// ...
<button onClick={detenerPropagacion}>Me gusta</button>
```


4. Estructura el Manejo de Formularios

Para formularios controlados, la clave es mantener los handlers de eventos limpios y enfocados en su tarea.

##### Separa Lógica de UI: Mantén la lógica de API o la validación compleja en un handler onSubmit, y la lógica simple de setState en el handler onChange.

##### Maneja Múltiples Inputs: Si tienes varios campos, puedes usar el atributo name y la desestructuración de objetos para usar un único handler onChange para múltiples inputs.

```
const [form, setForm] = useState({ email: '', password: '' });

const manejarCambioGlobal = (e) => {
  const { name, value } = e.target;
  setForm(prevForm => ({
    ...prevForm,
    [name]: value, // Usa el valor de 'name' del input como clave
  }));
};

// ... en el JSX:
<input name="email" onChange={manejarCambioGlobal} />
<input name="password" onChange={manejarCambioGlobal} />
```


5. Nunca Modifiques el Objeto de Evento Sintético

El objeto de Evento Sintético (e) se reutiliza por React para mejorar el rendimiento

Si intentas acceder a sus propiedades de forma asíncrona (ej. dentro de un setTimeout), es probable que el objeto ya haya sido vaciado.

##### Regla: Si necesitas acceder a las propiedades de e después de que el handler ha terminado de ejecutarse, debes guardarlas en una variable o llamar a e.persist() (aunque esto es menos común en versiones recientes de React).

```
const manejarClick = (e) => {
  const valorQueNecesito = e.target.value; // ✅ Guardar en variable sincrónicamente

  setTimeout(() => {
    // Error: e.target ya no existe aquí
    console.log(valorQueNecesito); // Usar la variable guardada
  }, 100);
};
```


### SRP en Eventos

##### Una función handler debe ser responsable únicamente de coordinar la respuesta inmediata a ese evento, delegando cualquier lógica compleja, de negocio o de datos a otras funciones.


#### Un handler que lo hace todo.

```
const handleFormSubmit = async (e) => {
  e.preventDefault();
  
  // 1. Validar la entrada (Lógica de Validación)
  if (name.length < 3) {
    setError('Nombre muy corto.');
    return;
  }

  // 2. Transformar/Preparar los datos (Lógica de Transformación)
  const userData = { ...formData, timestamp: Date.now() };

  // 3. Realizar la llamada a la API (Lógica de Datos)
  await axios.post('/api/register', userData);

  // 4. Actualizar la UI de éxito (Lógica de Presentación)
  setSuccess(true);
};
```

##### Esta función tiene múltiples razones para cambiar

##### si cambian las reglas de validación, si cambia el formato de la API, o si cambia la lógica de la UI de éxito.


Con SRP: 

##### Delegar la lógica a funciones separadas, haciendo que el handler del evento actúe como un coordinador o fachada.

```
// Módulo de Validación
const validarDatos = (data) => {
  if (data.name.length < 3) return { isValid: false, error: 'Nombre corto.' };
  return { isValid: true };
};

// Módulo de Servicio/API
const enviarDatos = async (userData) => {
  const response = await axios.post('/api/register', userData);
  return response.data;
};
```

```
// Componente con Handler Coordinado

const UserForm = () => {
  // ... state declarations

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Coordinación: Llama a la lógica de validación
    const validation = validarDatos(formData);
    if (!validation.isValid) {
      setError(validation.error);
      return;
    }
    setError(null);

    // 2. Coordinación: Llama a la lógica de envío
    try {
      await enviarDatos(formData);
      
      // 3. Coordinación: Actualiza la UI de éxito
      setSuccess(true);
    } catch (error) {
      setError('Error al enviar datos.');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {/* ... inputs y botones */}
    </form>
  );
};
```

#### Beneficios

##### Legibilidad: El handler handleFormSubmit es ahora una historia concisa del flujo de la aplicación (validar → enviar → mostrar éxito).

##### Testabilidad: Puedes probar las funciones validarDatos y enviarDatos de forma aislada sin tener que simular el DOM o el evento onSubmit.

##### Mantenimiento: Si cambias la URL de la API o la librería de fetch (axios a fetch), solo modificas la función enviarDatos. El handler handleFormSubmit no necesita tocarse.

##### Reutilización: Las funciones de lógica separada pueden ser reutilizadas fácilmente por otros componentes o Custom Hooks.


##### Es la clave para separar el "qué sucedió" (el evento) del "qué hacemos al respecto" (la lógica de la aplicación).



### Forms controlados y no controlados.

React ofrece dos enfoques principales para manejar los datos de entrada

##### La diferencia clave radica en quién maneja el estado de los datos del formulario (el componente de React o el DOM del navegador).


#### 1. Forms Controlados (Controlled Components)

##### Los datos del formulario (como el valor actual de un input) son manejados completamente por el estado de React (useState).

El componente de React es la "única fuente de verdad" para los datos de entrada.


Características y Flujo de Datos:

1. Estado: El valor del campo de formulario es almacenado en el estado del componente (useState).

2. Valor: El atributo value del elemento del formulario está vinculado al estado de React (value={nombre}).

3. Manejo de Cambios: Un handler de evento (onChange) es crucial. Cada vez que el usuario escribe, el evento dispara el handler, que actualiza el estado (setNombre(e.target.value)).

```
const [nombre, setNombre] = useState('');

const manejarCambio = (e) => {
  setNombre(e.target.value);
};

// Flujo: DOM -> onChange -> Estado -> value -> DOM
return (
  <input
    type="text"
    value={nombre} // 1. El valor siempre viene del estado
    onChange={manejarCambio} // 2. Cada cambio actualiza el estado
  />
);
```

Pros: 

Fácil de Validar: El estado siempre está sincronizado, lo que facilita la validación en tiempo real.

Manipulación Instantánea: Puedes modificar o formatear la entrada mientras el usuario escribe.


Cons: 

Requiere escribir más código (onChange y useState) para cada campo de entrada.

El rendimiento podría ser ligeramente inferior si hay muchos campos y cambios rápidos.


#### 2. Forms no controlados (Uncontrolled Components)

##### Los datos del formulario son gestionados por el DOM (Document Object Model) de la misma manera que en el HTML tradicional.

##### En lugar de usar el estado de React, utilizas una Referencia (Refs)

##### Para acceder al valor del campo solo cuando es necesario (ej. al enviar el formulario).


Características y Flujo de Datos:

1. DOM: El valor actual es mantenido internamente por el propio elemento DOM.

2. Referencias: Se utiliza el Hook useRef para crear una referencia que se adjunta al elemento de formulario (ej. <input ref={inputRef} />).

3. Acceso al Valor: El valor del campo se lee directamente del DOM (inputRef.current.value) solo al enviar el formulario

```
import React, { useRef } from 'react';

const MiForm = () => {
  const inputRef = useRef(null);

  const manejarEnvio = (e) => {
    e.preventDefault();
    // 1. El valor se lee directamente del DOM cuando se envía
    const valorActual = inputRef.current.value; 
    console.log('Valor enviado:', valorActual);
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input type="text" ref={inputRef} /> {/* 2. El ref se adjunta al elemento */}
      <button type="submit">Enviar</button>
    </form>
  );
};
```

Pros: 

Menos Código: No se necesita escribir handlers onChange o usar useState para cada campo.

Integración Simple: Ideal para integrar librerías de terceros o código HTML/JS heredado.


Cons: 

Dificultad de Validación: No puedes acceder al valor en tiempo real, lo que dificulta la validación instantánea o la manipulación

El DOM es la fuente de verdad, lo que rompe el paradigma de React.


Formulario Controlado:

Fuente de Verdad: Estado de React (useState)

Leer el Valor: Desde el estado (nombre) en cualquier momento

Herramienta Clave: useState y el evento onChange

Mejor para: Mayoría de los formularios, especialmente aquellos con validación o lógica compleja.


Formulario No Controlado:

Fuente de Verdad: DOM del Navegador

Leer el valor: Desde el DOM (ref.current.value) al enviar

Herramienta: useRef

Mejor para: Formularios muy simples, o cuando necesitas subir un archivo (donde el valor se maneja mejor de forma nativa).


##### En las aplicaciones modernas de React, se recomienda usar Formularios Controlados por defecto, ya que ofrecen una mejor depuración, consistencia y una forma más sencilla de manejar la lógica de la interfaz de usuario.



## Sistemas de Diseño y Componentes

### Diseño Atómico (Atomic Design): Entender la estructura y la jerarquía de los componentes (Átomos, Moléculas, Organismos, etc.).

Metodología para construir sistemas de diseño, popularizada por Brad Frost.

En el contexto de React, es una excelente guía para estructurar y organizar la jerarquía de tus componentes de front-end, maximizando la reutilización y la mantenibilidad.


##### Divide la interfaz de usuario en cinco niveles distintos, organizados de lo más pequeño e indivisible a lo más grande y complejo.


#### 1. Átomos (Atoms)

Bloques de construcción fundamentales de la interfaz

##### Indivisibles y representan la unidad mínima de la UI.

En React: Componentes funcionales simples que no contienen lógica de negocio o estado complejo

Son puramente presentacionales.

Ejemplos: Un botón (<Button>), una etiqueta de texto (<Label>), un campo de entrada (<Input>), un icono (<Icon>), o un color específico

##### Responsabilidad: Tienen una única etiqueta HTML y reciben la mayoría de su estilo a través de props.


#### 2. Moléculas (Molecules)

##### Son la combinación de varios Átomos que funcionan juntos como una unidad coherente y funcional

##### Adquieren una propiedad o lógica de propósito

En React: Componentes que combinan varios Átomos

##### Pueden contener algo de lógica de manejo de estado simple (ej. si un campo de búsqueda está enfocado).

Ejemplos: Un campo de búsqueda completo (un <Input> + un <Button> + un <Label>), una barra de navegación simple.

##### Responsabilidad: Agrupar Átomos para realizar una tarea específica.


#### 3. Organismos (Organisms)

Son grupos de Moléculas y/o Átomos

Forman una sección compleja y distintiva de la interfaz

Representan componentes de UI más grandes

##### En React: Componentes que ensamblan Moléculas para crear secciones más grandes

No deben contener lógica de API

##### Se enfocan en la coordinación de componentes hijos.

Ejemplos: La cabecera completa del sitio (<Header>), una tarjeta de producto compleja (<ProductCard>), una tabla de datos completa (<DataTable>).

##### Responsabilidad: Mostrar una sección del contenido o una funcionalidad del sistema.


#### 4. Plantillas (Templates)

Componentes que definen el esqueleto o layout de la página

##### Están compuestos por Organismos y definen la estructura del contenido, pero no el contenido final.

##### En React: Son principalmente layouts o "Wireframes" sin datos.

##### Reciben Organismos y deciden dónde se colocan en la página (ej. Header arriba, Sidebar a la izquierda, Footer abajo).

Ejemplos: LoginPageTemplate, DashboardLayout, ArticlePageTemplate.

##### Responsabilidad: Definir las relaciones entre los Organismos y el layout global.

##### Utilizan la prop children extensamente.


#### 5. Páginas (Pages)

Instancias específicas de las Plantillas

##### Se introduce el contenido real y la lógica de negocio o de recuperación de datos.

##### En React: Son los componentes de nivel superior que se conectan con el enrutamiento (ej. React Router).

Son los componentes Contenedor (Containers) definitivos.

##### Ejemplos: HomePage, UserProfilePage, ProductListingPage.

##### Responsabilidad: Pasar datos reales (obtenidos de APIs) a las Plantillas y a los Organismos, y gestionar la lógica de nivel de aplicación.


Beneficios:

1. Reutilización Clara: Es fácil ver qué componentes (Átomos y Moléculas) pueden ser reutilizados en diferentes contextos.

2. Mantenibilidad: Los cambios de estilo o funcionalidad pueden aislarse fácilmente en el nivel atómico o molecular, sin afectar a Organismos complejos.

3. Consistencia: Fomenta la creación de un sistema de diseño cohesionado, ya que todas las interfaces se construyen a partir del mismo conjunto base de Átomos.

4. Organización de Archivos: La estructura de la aplicación se mapea directamente a esta jerarquía, haciendo que los proyectos sean predecibles (ej. tener carpetas /src/components/atoms, /src/components/molecules, etc.).


### Sistemas de Diseño 

Ayudan a estructurar tu código y tus componentes de manera eficiente y escalable.

Se centran en la modularidad, la reutilización y la consistencia visual.


#### 1. BEM (Block, Element, Modifier)

BEM es una metodología de nomenclatura para CSS (aunque se aplica a la estructura de componentes)

Tiene como objetivo crear código CSS que sea modular, legible y muy explícito.


Bloque (Block): Una entidad independiente, con significado propio

Piensa en ellos como los componentes principales de React.

Ejemplo: card, header, button.


Elemento (Element): Una parte de un Bloque que no tiene sentido por sí misma. 

Se conecta al Bloque con dos guiones bajos (__).

Ejemplo: card__title, card__image, header__logo.


Modificador (Modifier): Una bandera o estado en un Bloque o Elemento que indica un cambio en su apariencia o comportamiento

Se conecta con dos guiones medios (--).

Ejemplo: button--primary, card--dark, button--disabled.


##### En React: Se utiliza para nombrar las clases en el JSX

##### Asegurando que los estilos sean locales al componente y no causen conflictos globales:

```
div className="card card--dark"> {/* Bloque y Modificador */}
  <h2 className="card__title">Título</h2> {/* Elemento */}
  <button className="button button--primary">Click</button> {/* Bloque y Modificador */}
</div>
```


#### 2. Componentes Basados en Patrones (Pattern-Based Components)

##### Concepto amplio, la idea es que la interfaz de usuario se construye a partir de un catálogo de patrones de interacción.

##### Concepto: Se enfoca en identificar y aislar las soluciones de diseño recurrentes (los "patrones") en lugar de solo los elementos visuales.

##### En React: Cada patrón de interfaz de usuario se implementa como un componente independiente y bien documentado

Las bibliotecas de componentes como MUI (Material UI) y Chakra UI se basan en este principio.

Ventaja: Fomenta la consistencia de la interacción más allá de la consistencia visual.

ejemplo, todos los formularios de búsqueda usan el mismo patrón de Molécula de Búsqueda, independientemente de si están en el header o en el footer.


#### 3. Design Tokens (Tokens de Diseño)

No son una metodología de estructuración de componentes

##### Sino una filosofía de gestión de estilos que es fundamental para cualquier Sistema de Diseño escalable.

##### Concepto: Son las variables que almacenan los valores de diseño básicos (colores, fuentes, espaciados, sombras, animaciones, etc.) utilizados en toda la aplicación.

##### Formato: Son nombres semánticos que representan la intención o el uso, no el valor literal.


Categoría	Nombre Semántico (Token)	Valor Literal

Color	color-brand-primary	#0070f3
Espaciado	spacing-md	1rem
Tipografía	font-size-h1	2.5rem


##### En React: Los componentes leen el valor de estos tokens a través de CSS Variables, Sass, o librerías de CSS-in-JS

##### Lo que permite cambiar el tema de toda la aplicación (ej. modo oscuro) actualizando solo un archivo central de tokens.


#### 4. Componentes Basados en Composición (Compound Components)

Patrón de diseño de React

##### Se enfoca en cómo los componentes interactúan entre sí internamente para lograr funcionalidad y flexibilidad, sin depender del estado global.

##### Concepto: Un componente padre (<Select>) expone subcomponentes (<Select.Option>)

Trabajan juntos implícitamente compartiendo un estado a través del Context API interno, ofreciendo al desarrollador una sintaxis limpia.

##### Ventaja: Ofrece una gran flexibilidad de markup al desarrollador, permitiendo que ordene los subcomponentes como quiera

Mientras mantiene la lógica interna del componente padre.

```
// Ejemplo de Composición (Componente Compound)
<Tabs value={activeTab} onChange={setActiveTab}>
  <Tabs.List>
    <Tabs.Trigger id="perfil">Perfil</Tabs.Trigger>
    <Tabs.Trigger id="ajustes">Ajustes</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Panel id="perfil">Contenido de Perfil...</Tabs.Panel>
</Tabs>
```


### Usos de Sistemas de Diseño

1. Atomic Design (Metodología de Estructuración)

##### Es el estándar de oro para estructurar la carpeta de componentes en un proyecto grande y modular, ya que obliga a pensar en la reutilización desde el nivel más bajo.

Ejemplo Famoso: Muchos sistemas de diseño corporativos (como el de IBM o Salesforce) usan una estructura similar a la jerarquía atómica.


2. BEM (Block, Element, Modifier) - (Metodología de Nomenclatura)

Nomenclatura estricta para CSS (y clases en HTML/JSX)

Bloque: Componente principal (ej., card).

Elemento: Parte del Bloque (ej., card__title).

Modificador: Variación del Bloque o Elemento (ej., card--dark).

Excelente para prevenir conflictos de CSS y para que los desarrolladores entiendan instantáneamente la relación entre los diferentes elementos de un componente

Es muy popular junto con Sass o módulos CSS.


3. Design Tokens (Gestión de Estilos)

Fuente de verdad para los valores de diseño (colores, tipografía, espaciado, sombras).

En lugar de usar el valor #FFFFFF en CSS directamente, se usa un token semántico como color-surface-light.

##### Fundamental para proyectos que requieren cambios de tema (ej., modo oscuro, marca blanca) y garantiza una consistencia perfecta en todo el stack.


4. Patrón de Contenedor/Presentacional (Separación de Lógica)

Los componentes se dividen en dos categorías basadas en el Principio de Responsabilidad Única (SRP):

Contenedor (Smart): Maneja la lógica, la recuperación de datos (API) y el estado.

Presentacional (Dumb): Solo se encarga de la apariencia (JSX/CSS) y recibe todos los datos y callbacks (funciones) a través de props.

Aunque ahora muchos lo resuelven con Custom Hooks (separando la lógica del estado en un hook

Dejando el componente como presentacional

El principio de separar la lógica de la presentación sigue siendo vital.


#### Combinación de Sistemas: Atomic + BEM + Tokens

Estructura de Componentes	Atomic Design	Organiza tus archivos en carpetas /atoms, /molecules, /organisms para una modularidad clara.

Nomenclatura de Clases	BEM	Asegura que las clases CSS dentro de tus componentes atómicos sean locales, legibles y no tengan efectos secundarios en otros componentes.

Gestión de Estilos	Design Tokens	Centraliza colores, fonts y espaciados para hacer que la aplicación sea fácilmente themable (cambio de tema) y coherente.



### Bibliotecas de Componentes: Uso de librerías como MUI (Material UI) o Chakra UI para acelerar el desarrollo.



## Diseño Responsivo en React

##### Asegurar que la interfaz de usuario se vea y funcione correctamente en cualquier tamaño de pantalla o dispositivo

Desde un móvil pequeño hasta un monitor de escritorio grande.

##### En React, esto se logra combinando las técnicas estándar de CSS con las capacidades dinámicas de JavaScript y los Hooks de React.


El diseño responsivo se basa en tres principios clave, a menudo llamados la "Trinidad Responsiva":

1. Flexible Grids

En lugar de usar unidades fijas (como px)

Se usan unidades relativas (como %, vw, fr o rem) para el ancho y el alto

Esto permite que el layout se estire o contraiga de manera fluida con el tamaño del viewport.


2. Imágenes Flexibles (Flexible Images)

Las imágenes y otros medios deben escalar dentro de sus contenedores sin desbordarse

Esto se logra típicamente con reglas CSS como max-width: 100% y height: auto;.


3. Media Queries (Consultas de Medios)

Son reglas CSS que aplican estilos específicos solo cuando se cumplen ciertas condiciones, como un rango de ancho de pantalla.


Implementación en React: 

### 1. CSS y Preprocesadores (El Estándar)

##### Esta es la forma más común y recomendada, ya que separa completamente la lógica de estilo del componente.

```
/* Ejemplo en un archivo CSS o módulo CSS */
.Card {
  width: 90%; /* flexible por defecto */
  margin: 10px;
}

/* 💻 Regla aplicada solo para pantallas grandes (desktop-first) */
@media (min-width: 1024px) {
  .Card {
    width: 300px; /* ancho fijo en desktop */
    float: left;
  }
}
```


### 2. CSS-in-JS (Librerías como Styled Components o Emotion)

Si utilizas librerías de CSS-in-JS, las media queries se escriben directamente dentro del código de tu componente estilizado, manteniendo los estilos encapsulados:

```
// Ejemplo con Styled Components
const StyledCard = styled.div`
  background: white;
  padding: 20px;
  
  // Estilos para móvil por defecto
  width: 100%;

  // Media Query dentro del componente (desktop)
  @media (min-width: 768px) {
    width: 45%;
    margin: 10px;
  }
`;
```


### 3. useState y useEffect (Lógica Responsiva)

##### A veces, no solo el estilo, sino la propia estructura o lógica del componente debe cambiar según el tamaño de la pantalla

Aquí es donde los Hooks de React son necesarios para rastrear el tamaño del viewport.


#### Hook Personalizado para Tamaño de Pantalla

La forma más limpia de hacerlo es creando un Custom Hook que te devuelva el tamaño actual del viewport:
 
 ```
 import { useState, useEffect } from 'react';

const useViewportWidth = () => {
  // Inicializa el estado con el ancho de la ventana
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Handler para actualizar el estado cuando se redimensiona
    const handleResize = () => setWidth(window.innerWidth);

    // Adjuntar el listener de evento al montar
    window.addEventListener('resize', handleResize);

    // Limpiar el listener al desmontar
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Array de dependencia vacío: solo al montar y desmontar

  return width;
};
```


#### Aplicación de Lógica Responsiva

Ahora puedes usar este Hook para decidir qué renderizar o qué lógica ejecutar dentro de tu componente.

```
const Navbar = () => {
  const width = useViewportWidth();
  const isMobile = width < 768; // Punto de corte lógico
  
  return (
    <nav>
      {/* Si es móvil, renderiza un componente de menú desplegable */}
      {isMobile ? (
        <MobileMenu />
      ) : (
        // Si no es móvil, renderiza el menú completo en línea
        <DesktopMenu />
      )}
    </nav>
  );
};
```

El Diseño Responsivo en React es una combinación de:

1. CSS/Media Queries: Para la mayoría de los cambios de diseño y estilo.

2. Unidades Flexibles: Para el escalado fluido.

3. Custom Hooks (useViewportWidth): Para la lógica de renderizado condicional cuando la estructura del DOM debe cambiar.


### Prácticas para diseño responsivo

1. Prioridad Móvil (Mobile-First)

Flujo de Estilos: Escribe el CSS de tu componente primero para las pantallas móviles (más pequeñas).

Media Queries: Luego, utiliza media queries para agregar estilos y layouts adicionales solo para las pantallas más grandes (tablets, desktop).

Ventaja: Garantiza que la experiencia básica sea rápida y funcional en el entorno más restrictivo, y simplifica tu CSS, ya que los estilos de escritorio solo son adiciones, no anulaciones complejas.

```
/* 📱 Mobile-First: Estos estilos aplican a todas las pantallas */
.contenedor {
  width: 100%;
  padding: 1rem;
  flex-direction: column; 
}

/* 💻 Luego, aplica estilos más grandes SOLAMENTE donde sea necesario */
@media (min-width: 768px) {
  .contenedor {
    padding: 2rem;
    flex-direction: row; /* Cambia a fila en escritorio */
  }
}
```


2. Unidades Flexibles y Relativas

Evita depender de unidades fijas (como px) para dimensiones o espaciados principales.

#### Tamaños y Espaciado: Utiliza rem para el espaciado (márgenes, padding) y tamaños de fuente, ya que se escalan con el tamaño de fuente raíz del usuario.

#### Anchos y Tamaños de Viewport: Utiliza %, vw (viewport width) o vh (viewport height) para los anchos, asegurando que los elementos se escalen fluidamente.

#### Diseño: Favorece Flexbox y CSS Grid sobre los floats para construir layouts flexibles y dinámicos que se adapten por sí mismos.


3. Abstraer la Lógica Responsiva con Custom Hooks

#### Lógica de renderizado (no solo el estilo) cambie según el tamaño de la pantalla, encapsula la funcionalidad en un Custom Hook.

##### Usa useViewportWidth (o similar): Crea un hook reutilizable que rastree el ancho y proporcione puntos de corte booleanos (ej. isMobile, isTablet). 

```
// En un archivo useViewport.js
const useViewport = () => {
  const width = useViewportWidth(); // (asumimos que este hook existe)
  return { isMobile: width < 768, isDesktop: width >= 1024 };
};

// En tu componente
const MiComponente = () => {
  const { isMobile } = useViewport();
  
  // La lógica de renderizado cambia:
  return isMobile ? <MenuDesplegable /> : <MenuCompleto />;
};
```

##### Aplica el SRP, manteniendo la lógica de tamaño de pantalla fuera de la lógica de presentación de la interfaz de usuario.


4. Imágenes y Medios

max-width: 100%;: Asegura que las imágenes no desborden sus contenedores.

Imágenes Condicionales: Utiliza useEffect o los media queries para cargar imágenes de menor resolución en dispositivos móviles

y de mayor resolución en desktop (<picture> tag o la propiedad srcset).


5. Consistencia con Librerías UI

Si utilizas una biblioteca de componentes (UI Library)

Sistemas de Grilla Incorporados: Librerías como Material UI o Ant Design vienen con sistemas de grilla y hooks responsivos incorporados que manejan la complejidad de las media queries por ti, asegurando la consistencia entre todos tus componentes

Por ejemplo, utilizando props responsivas: <Grid item xs={12} sm={6} md={4}>.





## Gestión de Estado Avanzada y Routing

##### Técnicas y herramientas utilizadas para manejar el estado que es compartido por muchos componentes

##### Que están anidados a múltiples niveles de profundidad en el árbol de componentes.

El objetivo principal es evitar el "prop drilling" (pasar props a través de múltiples componentes que no las usan directamente)

##### Centralizar el estado complejo para que sea predecible y fácil de mantener.


### Gestión de Estado Simple: usando useState y pasando props

##### Funciona bien para componentes aislados

Sin embargo, se vuelve insostenible rápidamente cuando:


#### 1. Estado Global/Compartido: Múltiples componentes en diferentes ramas del árbol necesitan acceder al mismo dato

(ej., el usuario autenticado, el tema actual, el estado del carrito de compras).


#### 2. Prop Drilling: Tienes que pasar una prop a través de 5 o 10 componentes intermedios (A → B → C → D → E) solo para que E pueda usarla.



### Gestión de Estado Avanzada

Se aborda principalmente con dos categorías de herramientas:

#### 1. Hooks Nativos (Context API y useReducer)

Solución de estado global incorporada en React, ideal para aplicaciones medianas o para datos que cambian con menos frecuencia.

##### A. React Context API: Mecanismo para hacer que datos específicos sean accesibles para cualquier componente en el árbol sin tener que pasarlos como props

##### Lo usas para crear un Proveedor (Provider) que envuelve la parte de la aplicación que necesita acceso al estado

##### y un Consumidor (a través de useContext) que lee el valor.


##### Ideal para: Temas de interfaz, usuario actual, configuración de idioma.


##### B. useReducer: Hook para gestionar el estado complejo que involucra múltiples subvalores o donde la siguiente acción depende de la anterior (lógica de estado compleja).

Funcionamiento: Similar a Redux

centraliza la lógica de actualización en una función reducer

toma el estado actual y una acción y devuelve un nuevo estado.

##### Ideal para: Carritos de compras, formularios con muchos pasos, stacks de navegación

##### Combinación Avanzada: El patrón más potente es combinar useReducer con la Context API para crear una solución de estado centralizado a medida sin librerías externas


#### 2. Librerías de Terceros

Proporcionan soluciones preconstruidas, optimizadas y con herramientas de desarrollo (DevTools) avanzadas para gestionar el estado en aplicaciones grandes y complejas.

##### Redux/Redux Toolkit: Almacén (Store) Inmutable Centralizado

El modelo más establecido

Utiliza un Store único, Actions explícitas y Reducers puros para cambiar el estado.

##### Es ideal para aplicaciones con lógica de negocio muy compleja y estricta trazabilidad de cambios.


##### Zustand: Almacén Ligero Basado en Hooks

Enfoque más moderno y minimalista

Más sencillo que Redux, ya que utiliza hooks sin necesidad de boilerplate (código repetitivo).

##### Es excelente para estado global simple y mediano.


##### Apollo/Relay (GraphQL): Gestión de Estado de Caché

##### Se enfocan menos en el estado local de la UI y más en gestionar y normalizar el estado del servidor (los datos de la API) en un caché centralizado.


#### La elección del sistema de gestión avanzada depende de la escala y la complejidad de tu aplicación, así como de la frecuencia y la naturaleza de los cambios de estado.


### Context API

Permite compartir datos entre componentes sin tener que pasar props manualmente a través de cada nivel del árbol de componentes.

##### Es la alternativa oficial a librerías de estado global de terceros para muchas aplicaciones de escala mediana.


Antes de Context API, si un componente anidado muy profundo necesitaba un dato (ej. el usuarioActual)

ese dato tenía que ser pasado como prop a través de todos los componentes intermedios

incluso si esos componentes intermedios no usaban el dato en absoluto.

hace el código tedioso y difícil de mantener.

##### Context API resuelve esto creando un "túnel" directo para el dato.


#### Componentes de Context API

1. El contexto (React.createContext)

Crea el contexto, Define el almacén de datos (el "túnel")

proporciona un valor por defecto 

que solo se utiliza si un componente intenta leer el contexto sin estar envuelto en un Proveedor

```
// userContext.js
import React from 'react';

// Crea el objeto Contexto con un valor inicial por defecto
const UserContext = React.createContext(null); 

export default UserContext;
```


2. El Proveedor (Provider)

##### Es un componente que envuelve la parte de tu aplicación que necesita acceder a los datos.

Es responsable de proporcionar el valor real que será consumido.

##### El value que se le pasa es el dato que el proveedor "hace público" a todos sus descendientes.

```
// UserProvider.jsx
import React, { useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({ name: 'Alex', role: 'Admin' });

  // 1. El Proveedor envuelve a los componentes hijos
  // 2. Proporciona el objeto {currentUser, setCurrentUser} a todos sus descendientes
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

// ... En App.jsx
function App() {
  return (
    <UserProvider>
      {/* Todos los componentes dentro de aquí pueden usar useContext(UserContext) */}
      <Header /> 
      <Content />
    </UserProvider>
  );
}
```


3. El Consumidor (useContext)

El Consumidor es el Hook que permite a cualquier componente descendiente del Proveedor acceder directamente al valor sin necesidad de props

```
// UserInfo.jsx (Un componente anidado profundamente)
import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserInfo = () => {
  // El Hook accede directamente al valor del Provider más cercano
  const { currentUser } = useContext(UserContext); 

  return (
    <div>
      <p>Hola, **{currentUser.name}**!</p>
      <p>Tu rol es: *{currentUser.role}*</p>
    </div>
  );
};
```


#### Prácticas para Context API

1. Evitar para Renderizados Frecuentes

La Context API provoca un re-renderizado de todos los componentes consumidores

cada vez que el valor del Provider cambia.

##### Es mejor usarla para datos que no cambian muy a menudo (ej. tema, usuario autenticado) en lugar de para el estado local que cambia constantemente.


2. Combinación con useReducer:

##### Para gestionar la lógica de estado compleja que cambia el contexto (ej. carritos de compra)

es una práctica avanzada combinar la Context API con el Hook useReducer.

Esto centraliza la lógica de actualización, de forma similar a Redux.


3. Múltiples Contextos: Es mejor crear múltiples contextos pequeños y específicos (ej., ThemeContext, AuthContext)

##### en lugar de un único contexto "monolítico" que gestione todo el estado de la aplicación

Esto minimiza los re-renderizados innecesarios.



### useContext

##### Herramienta para consumir los datos proporcionados por la Context API.

##### Permite "engancharte" (hook into) a los datos globales de un Contexto

##### Sin necesidad de envolver el componente en un Consumer o pasar props a través de varios niveles.


useContext toma un objeto Contexto (el que creaste con React.createContext()) y

devuelve el valor actual de ese Contexto, tal como lo establece el Provider más cercano en el árbol de componentes.

```
import React, { useContext } from 'react';
// Importamos el objeto Contexto que creamos
import { TemaContexto } from './TemaContexto'; 

const MiComponente = () => {
  // Llama al Hook con el objeto Contexto como único argumento
  const valorActualDelContexto = useContext(TemaContexto); 
  
  // Si el valor del Proveedor es un objeto ({tema, cambiarTema}), 
  // generalmente se desestructura:
  // const { tema, cambiarTema } = useContext(TemaContexto);
  
  // ... usa las variables 'tema' o 'cambiarTema'
};
```

##### Puedes usar useContext varias veces en el mismo componente para consumir múltiples Contextos (ej., useContext(TemaContexto) y useContext(UsuarioContexto)).


#### Para que useContext funcione, el componente que lo utiliza debe estar anidado dentro del Provider correspondiente.

1. Creación: Creas el Contexto con React.createContext(valorInicial).

2. Provisión: Envuelves la aplicación (o parte de ella) con el Context.Provider y le pasas el estado o valor que deseas compartir (<Context.Provider value={miValor}>).

3. Consumo: Dentro de cualquier componente anidado, llamas a useContext(Contexto) para obtener ese miValor.


Crear el Contexto:

```
// ThemeContext.js
import { createContext } from 'react';

// Valor por defecto (usado si no hay Provider)
export const ThemeContext = createContext('light');
```


Usar el Proveedor:

```
// App.jsx
import { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import BotonTema from './BotonTema'; 

const App = () => {
  const [tema, setTema] = useState('light'); // Estado real

  return (
    // El Provider proporciona el valor y la función para cambiarlo
    <ThemeContext.Provider value={{ tema, setTema }}> 
      <div className={`app app-${tema}`}>
        <BotonTema /> 
      </div>
    </ThemeContext.Provider>
  );
};
```

 
3. Consumir el Contexto con useContext

```
// BotonTema.jsx (Componente Consumidor)
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const BotonTema = () => {
  // Leemos directamente el objeto del Provider
  const { tema, setTema } = useContext(ThemeContext); 

  const cambiarTema = () => {
    setTema(tema === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={cambiarTema}>
      Tema Actual: {tema === 'light' ? 'Claro ☀️' : 'Oscuro 🌙'}
    </button>
  );
};
```
 
##### Con este flujo, BotonTema no necesita que le pasen el estado tema o setTema como props

##### simplemente los accede directamente usando useContext



### useReducer

Herramienta que se utiliza para gestionar el estado complejo en componentes funcionales.

##### A diferencia de useState, que es ideal para estados simples (números, strings, booleanos)

##### useReducer es mejor para estados que involucran múltiples subvalores o donde la siguiente acción depende de la anterior de forma compleja.

useReducer es conceptualmente muy similar al patrón que utiliza la librería Redux

##### Lo hace ideal para escalar el estado local o combinarlo con la Context API para estado global.


useReducer se basa en tres principios de la programación funcional:

1. Estado (State): El valor actual que deseas gestionar

2. Acción (Action): Un objeto que describe qué sucedió (ej. un clic, un dato cargado).

3. Reductor (Reducer): Una función pura que toma el estado actual y una acción, y devuelve el nuevo estado.


useReducer requiere dos argumentos y devuelve un array con dos elementos:

```
const [estadoActual, despachar] = useReducer(funciónReductora, estadoInicial);
```

#### funciónReductora: contiene toda la lógica de cómo cambiar el estado.

#### estadoInicial: El valor inicial del estado.

#### El valor del estado en el momento actual. (1er rtn)

#### despachar (dispatch): función que se utiliza para enviar una acción a la función reductora. (2do rtn)


El flujo de useReducer es unidireccional y sigue estos pasos:

#### 1. Definir la Función Reductora: Creas la función reducer(state, action) que utiliza una estructura switch para manejar diferentes tipos de acciones

#### 2. Definir el Estado Inicial: Especificas el valor inicial del estado.

#### 3. Llamar a useReducer: Inicializas el Hook en tu componente.

#### 4. Despachar Acciones: Cuando un evento ocurre (ej. un clic), llamas a la función despachar con un objeto de acción.

#### 5. Actualizar el Estado: La función reductora ejecuta la lógica correspondiente y retorna el nuevo estado, lo que provoca que React re-renderice el componente.


##### Ej: Contador avanzado

1. Función Reductora

Función pura, no debe hacer llamadas a la API ni modificar el estado directamente.

```
// 🟢 Función Reductora
const contadorReducer = (state, action) => {
  switch (action.type) {
    case 'incrementar':
      return { ...state, contador: state.contador + 1 };
    case 'decrementar':
      return { ...state, contador: state.contador - 1 };
    case 'reiniciar':
      return { ...state, contador: 0 };
    case 'establecer_paso': // Maneja una carga de datos
      return { ...state, paso: action.payload };
    default:
      return state;
  }
};
```


2 y 3: Inicializar y Usar en el Componente

```
import React, { useReducer } from 'react';

const ContadorComplejo = () => {
  // Estado inicial
  const initialState = { contador: 0, paso: 1 };
  
  // Inicialización del Hook
  const [state, dispatch] = useReducer(contadorReducer, initialState);
  
  return (
    <div>
      <h2>Contador: {state.contador}</h2>
      
      {/* 4. Despachar Acciones */}
      <button onClick={() => dispatch({ type: 'incrementar' })}>
        Incrementar (+{state.paso})
      </button>
      
      <button onClick={() => dispatch({ type: 'decrementar' })}>
        Decrementar (-{state.paso})
      </button>
      
      <button onClick={() => dispatch({ type: 'reiniciar' })}>
        Reiniciar
      </button>
      
      {/* Ejemplo de acción con 'payload' (carga de datos) */}
      <button onClick={() => dispatch({ type: 'establecer_paso', payload: 5 })}>
        Paso a 5
      </button>
    </div>
  );
};
```


#### Uso de useReducer

Es correcto cuando

##### 1. Lógica Compleja: Tienes lógica de transición de estado compleja donde el estado siguiente depende de muchos factores del estado anterior.

##### 2. Estado Anidado/Relacionado: El estado es un objeto o array complejo con múltiples valores que deben actualizarse en conjunto.

##### 3. Rendimiento: Quieres optimizar el rendimiento de la aplicación, ya que puedes pasar la función despachar hacia abajo en el árbol de componentes sin preocuparte por la memorización (a diferencia de pasar la función setState de useState).

##### 4. Estado Global: Estás combinando useReducer con la Context API para crear una solución de estado global robusta y escalable



### Context API vs useContext vs useReducer

#### Gestion de estado avanzado

Son complementarios. Describen diferentes partes de un mismo sistema de gestión de estado

También pueden ser herramientas para diferentes propósitos


#### 1. Context API (El Sistema/Mecanismo)

##### Función principal que permite compartir datos a través del árbol de componentes sin pasar props manualmente

Resuelve el problema del Prop

Rol	El sistema de estado global nativo de React.

Componentes Clave	`React.createContext(), el Provider y el Consumer (o useContext)`.

Usarlo	Para datos que son "globales" o que se comparten en muchos niveles (ej. temas, usuario autenticado, localización).

Nivel	Arquitectónico (cómo se estructura la aplicación para proveer el estado).


#### 2. useContext (El Consumidor/Lector)

##### se utiliza para leer o consumir el valor que ha sido proporcionado por el Context API.

Rol	El Hook que permite a los componentes acceder a los datos del Contexto.

Sintaxis	`const valor = useContext(MiContexto);`

Dependencia	Siempre requiere un objeto Contexto (MiContexto) creado previamente con React.createContext().

Nivel	Componente (cómo el componente lee el estado).


Relación: 

Context API es el marco; useContext es el gancho que usas para acceder a ese marco.

No se puede usar useContext sin que primero exista un Contexto creado.


#### 3. useReducer (El Gestor de Lógica)

##### Gestionar la lógica de actualización del estado, especialmente cuando es complejo

##### Es un mecanismo de actualización de estado, no un mecanismo de provisión.

Rol	Un gestor de estado avanzado que centraliza la lógica de actualización en una función pura (reducer).

Sintaxis	`const [estado, dispatch] = useReducer(reducer, estadoInicial);`

Usarlo	Para estado local complejo, o para crear la lógica de actualización que luego será compartida vía Context API

Nivel	Lógica de Estado (cómo se actualiza el estado).


#### Patrón Avanzado: Context API + useReducer

##### Trabajan juntos para formar una solución de estado global robusta (a menudo llamada el "Mini-Redux" de React).

1. Lógica	useReducer	Define la función reducer para gestionar todas las transiciones complejas de estado.

2. Contenedor	Componente Proveedor	Inicializa useReducer y obtiene el `[estado, dispatch]`.

3. Provisión	Context API (.Provider)	Utiliza el Context Provider para pasar el estado y el dispatch a toda la aplicación

4. Consumo	useContext	Permite a cualquier componente anidado leer el estado (para mostrarlo) o llamar a dispatch (para cambiarlo).

En este patrón, useReducer te da el control sobre la lógica de estado

Context API te da la distribución de ese control a toda la aplicación.



### Routing

Permite crear una aplicación de una sola página (Single Page Application o SPA) con múltiples vistas

A diferencia de las aplicaciones web tradicionales que recargan la página completa al cambiar de URL

##### el routing en React cambia el contenido que se muestra al usuario sin recargar la página.

Dado que React es una biblioteca para construir la interfaz de usuario y no incluye routing nativo

este se gestiona casi siempre a través de librerías de terceros, siendo React Router la solución estándar de la industria


##### React Router proporciona los componentes necesarios para mapear las URLs del navegador a los componentes de tu aplicación

manteniendo la UI sincronizada con la URL.


#### 1. El Router (El Contenedor)

##### Necesitas envolver tu aplicación (o la parte que utiliza routing) en un componente Router

El más común es BrowserRouter (utiliza la API de Historial de HTML5).


#### 2. Rutas (<Route>)

##### El componente <Route> define la asociación entre una ruta URL y el componente que debe renderizarse cuando esa ruta coincide.


#### 3. Enlaces (<Link> y <NavLink>)

##### Estos componentes reemplazan la etiqueta HTML <a>.

Al hacer clic en un <Link>, React Router intercepta el evento y cambia la URL sin provocar una recarga completa del navegador

actualizando solo el componente.


#### 1. Definición de Rutas

##### El routing a menudo se configura utilizando el componente <Routes> (que agrupa y gestiona las <Route>):

```
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> {/* 1. El Router */}
      <Routes> {/* 2. El Gestor de Rutas */}
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<PaginaInicio />} /> 
        
        {/* Ruta con un parámetro dinámico (ej. /usuarios/123) */}
        <Route path="/usuarios/:id" element={<PerfilUsuario />} /> 
        
        {/* Ruta anidada o "catch-all" para 404 */}
        <Route path="*" element={<PaginaNoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}
```


#### 2. Parámetros Dinámicos (URL Params)

Permiten que la URL contenga información variable (ej. el ID de un producto).

Definición: path="/productos/:productId"

##### Lectura: Dentro del componente Producto, usas el Hook useParams para leer el valor del productId.


#### 3. Navegación Programática

A veces necesitas cambiar la ruta después de una acción (ej. después de un envío exitoso de formulario).

```
import { useNavigate } from 'react-router-dom';

const ComponenteFormulario = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // ... lógica de envío de API
    // Redirecciona al usuario a la página de inicio después del éxito
    navigate('/'); 
  };
  // ...
};
```


#### SPA

1. El navegador carga el archivo HTML y el bundle de JavaScript.

2. BrowserRouter escucha los cambios en la URL.

3. Cuando haces clic en un <Link>, el navegador no hace una solicitud HTTP

en su lugar, la API de Historial de HTML5 cambia la URL

React Router intercepta este cambio.

4. El componente <Routes> revisa la nueva URL y encuentra la <Route> que coincide (ej. /usuarios/5).

5. Solo se desmonta el componente anterior y se monta el nuevo componente asociado a la ruta (ej. <PerfilUsuario />).



### React Router

##### React Router es esencialmente una colección de componentes que se renderizan condicionalmente basándose en la URL.


1. Enrutador (Router)

Componente que envuelve toda tu aplicación y hace posible el routing al escuchar los cambios en el historial del navegador.

<BrowserRouter>: El router más común. Utiliza la History API de HTML5 para mantener sincronizada la UI con la URL.

<HashRouter>: Utiliza el hash (#) de la URL (ej. midominio.com/#/acerca) y es útil para entornos donde el enrutamiento a nivel de servidor no es fácil de configurar


2. Definición de Rutas

Componentes que definen la estructura y las reglas de las URLs.

<Routes>: Un contenedor que agrupa todas las definiciones de ruta. 
Examina la URL y renderiza solo la primera <Route> que coincide.

<Route>: Mapea una ruta URL (path) a un componente React (element).

```
<Routes>
  {/* path="/" renderiza el componente PaginaInicio */}
  <Route path="/" element={<PaginaInicio />} /> 
  {/* path="/productos/:id" permite un parámetro dinámico */}
  <Route path="/productos/:id" element={<DetalleProducto />} /> 
</Routes>
```


3. Navegación (Enlaces)

Estos componentes te permiten navegar dentro de la SPA sin recargar la página.

<Link>: El reemplazo de React para la etiqueta <a>. 
Intercepta el clic y solo cambia la URL, permitiendo que el router actualice la UI internamente.

##### <NavLink>: Una versión mejorada de <Link> que puede aplicar estilos automáticamente cuando la ruta actual coincide (útil para resaltar el elemento del menú activo).


#### Hooks para Enrutamiento

React moderno utilizan hooks para acceder a la funcionalidad del router dentro de tus componentes.

useParams: Lee los parámetros dinámicos de la URL.
Necesario en un componente como DetalleProducto para saber qué ID de producto cargar (/productos/123).

useNavigate: Permite la navegación programática (redirección).
Útil después de un envío exitoso de formulario: Maps('/dashboard').

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



#### Configuración y uso de React Router DOM para la navegación.

Instalación e Inicialización:

instalar el paquete de react-router-dom usando npm o yarn:

```
npm install react-router-dom
# o
yarn add react-router-dom
```


Inicialización (Envolver la Aplicación):

Tu aplicación (o la parte que necesite enrutamiento) debe estar envuelta en un componente Router

Generalmente, se hace en el archivo principal (App.jsx o main.jsx).

El <BrowserRouter> utiliza la API de Historial del navegador y es el más común.

```
// main.jsx (o index.js)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Envolvemos la aplicación para habilitar el enrutamiento */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
```


Configuración de Rutas en App.jsx:

En el componente principal de tu aplicación, usarás <Routes> y <Route> para definir qué componente se renderiza para cada URL.

Estructura de Rutas:

```
// App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Header /> {/* El Header se mantiene siempre visible */}
      
      {/* Las Routes definen el área donde el contenido cambia */}
      <main>
        <Routes>
          {/* Ruta Raíz */}
          <Route path="/" element={<Home />} /> 
          
          {/* Ruta Estática */}
          <Route path="/acerca" element={<About />} /> 
          
          {/* Ruta Dinámica (con parámetro) */}
          <Route path="/perfil/:userId" element={<Profile />} /> 
          
          {/* Ruta "Catch-all" (manejo de 404) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
```


Uso en Componentes (Navegación):

Navegación con <Link> (Declarativa)

Para la navegación estándar (ej. en el Header), usa <Link>. 

Esto evita la recarga de página.

```
// components/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      {/* Navegación Estática */}
      <Link to="/">Inicio</Link> 
      <Link to="/acerca">Acerca de</Link>
      
      {/* Navegación a una ruta dinámica (ej. Usuario ID 1) */}
      <Link to="/perfil/1">Mi Perfil</Link> 
    </nav>
  </header>
);
```


Lectura de Parámetros con useParams:

En la ruta dinámica, usa el Hook useParams para acceder al valor del parámetro en la URL.

```
// pages/Profile.jsx
import { useParams } from 'react-router-dom';

const Profile = () => {
  // Lee el valor dinámico de la URL, ej. si es /perfil/5, userId será "5"
  const { userId } = useParams(); 
  
  // Aquí se usaría el userId para una llamada a la API (ej. useFetch(`/api/users/${userId}`))
  
  return (
    <div>
      <h1>Página de Perfil</h1>
      <p>ID de usuario actual en la URL: **{userId}**</p>
    </div>
  );
};
```


Navegación Programática con useNavigate

Útil para redirecciones después de una acción (ej. inicio de sesión, envío de formulario).

```
// components/LoginButton.jsx
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate(); // 🎣 Inicializa el Hook

  const handleLogin = () => {
    // ... Lógica de autenticación exitosa
    
    // Redirecciona al usuario a la página de inicio
    navigate('/'); 
    // O navega hacia atrás en la historia del navegador: navigate(-1);
  };

  return (
    <button onClick={handleLogin}>Iniciar Sesión</button>
  );
};
```



#### Rutas anidadas y protegidas.

Nested Routes

##### Permite renderizar componentes dentro de otros componentes definidos por rutas

resulta en layouts y navegaciones más complejas y estructuradas.

En lugar de que cada ruta reemplace toda la vista, las rutas anidadas permiten que partes de la UI

##### Las rutas anidadas permiten que partes de la UI se carguen o cambien mientras el componente padre (el layout) permanece visible.


#### Las rutas anidadas reflejan la jerarquía de la interfaz de usuario

Si el contenido de la Ruta B siempre se muestra dentro del componente de la Ruta A

entonces la Ruta B debe estar anidada bajo la Ruta A.


#### 1. Elemento Padre (<Route>)

##### Defines una ruta padre que carga el layout principal (ej., el perfil de un usuario, que incluye un menú lateral que nunca cambia).


#### 2. Componente de Layout (<Outlet>)

##### Dentro del componente de layout (el componente padre), utilizas el componente <Outlet> de React Router.

<Outlet> actúa como un marcador de posición.
Le dice al router dónde debe renderizar los componentes de las rutas hijas o anidadas.


#### 3. La Ruta Hija (<Route>)

Defines las rutas hijas

##### Cuando la URL coincide con la combinación del padre y la hija, el componente de la hija se renderiza en el lugar del <Outlet> del padre


Ej: Configuración con Rutas Anidadas

##### layout de Dashboard (Escritorio) donde la barra lateral es estática y el contenido principal cambia.


1. Definir el Layout Padre (El Contenedor)

Creamos el componente que actuará como layout y donde pondremos el <Outlet>.

```
// LayoutDashboard.jsx
import { Outlet, Link } from 'react-router-dom';

const LayoutDashboard = () => (
  <div style={{ display: 'flex' }}>
    <aside style={{ width: '200px', padding: '15px', borderRight: '1px solid #ccc' }}>
      <h3>Menú del Dashboard</h3>
      <nav>
        {/* Rutas Hijas */}
        <Link to="resumen">Resumen</Link>
        <Link to="ajustes">Ajustes</Link>
      </nav>
    </aside>
    
    <main style={{ padding: '20px', flexGrow: 1 }}>
      <h2>Contenido Principal</h2>
      {/* El Outlet: Aquí se renderizan las rutas hijas */}
      <Outlet />
    </main>
  </div>
);
```


2. Configurar las Rutas en App.jsx

Las rutas hijas se definen dentro de la ruta padre.

```
// App.jsx
import { Routes, Route } from 'react-router-dom';
import LayoutDashboard from './LayoutDashboard';
import Resumen from './pages/Resumen';
import Ajustes from './pages/Ajustes';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* 1. RUTA PADRE: Renderiza el LayoutDashboard en /dashboard */}
      <Route path="/dashboard" element={<LayoutDashboard />}>
        
        {/* 2. RUTA HIJA: path="resumen" se convierte en /dashboard/resumen */}
        <Route path="resumen" element={<Resumen />} /> 
        
        {/* 3. RUTA HIJA: path="ajustes" se convierte en /dashboard/ajustes */}
        <Route path="ajustes" element={<Ajustes />} /> 
        
        {/* 4. RUTA ÍNDICE: Se renderiza por defecto en /dashboard */}
        <Route index element={<h2>¡Bienvenido al Dashboard!</h2>} /> 
      </Route>
      
    </Routes>
  );
}
```


#### Ruta Índice (index): Una ruta anidada que utiliza la prop index (en lugar de path) se renderiza cuando la URL coincide exactamente con la ruta padre (ej. solo /dashboard).
). Es el contenido por defecto del <Outlet>

#### Rutas Relativas: Observa que las rutas hijas (resumen, ajustes) no comienzan con una barra inclinada (/).
Esto las hace relativas a la ruta padre (/dashboard), simplificando el mantenimiento.


##### Las Rutas Anidadas son esenciales para construir interfaces de usuario que tienen múltiples niveles de navegación y layouts.


Protected Routes:

##### Patrón de routing que garantiza que ciertas páginas o secciones de tu aplicación solo sean accesibles para usuarios que cumplen con un criterio específico

Generalmente el de estar autenticados (haber iniciado sesión).

##### Fundamental para la seguridad y la experiencia del usuario en cualquier aplicación que maneje datos privados.


#### Se implementa creando un Componente de Envoltura o Wrapper

##### Intercepta la solicitud de navegación a una ruta y toma una decisión basada en la lógica de autenticación:

1. Si el usuario está autenticado: Renderiza el componente de la página solicitado (permite el acceso).

2. Si el usuario NO está autenticado: Lo redirige a una ruta pública (generalmente la página de inicio de sesión) o muestra un mensaje de "Acceso Denegado".


##### Con React Router, usamos el componente <Outlet> (de las rutas anidadas) y el Hook useNavigate (para la redirección).

1. Definir la Lógica de Autenticación

##### Necesitas tener un mecanismo global (a través de Context API o un Custom Hook) para saber si el usuario ha iniciado sesión.

```
// useAuth.js (Custom Hook de ejemplo)
import { useContext } from 'react';
import { AuthContext } from './AuthContext'; // Asumimos un Contexto de Autenticación

const useAuth = () => {
  const { user } = useContext(AuthContext);
  // Devuelve true si el objeto 'user' existe y tiene un token/ID
  return user != null; 
};
```


2. Crear el Componente de Envoltura (ProtectedRoute.jsx)

Actuará como el guardián de la ruta.

```
// ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from './useAuth'; // Importa la lógica de autenticación

const ProtectedRoute = ({ redirectPath = '/login' }) => {
  // 1. Verificar el estado de autenticación
  const isAuthenticated = useAuth(); 

  if (!isAuthenticated) {
    // 2. Si NO está autenticado, redirigir
    // El componente <Navigate> es la forma declarativa de redireccionar
    return <Navigate to={redirectPath} replace />; 
  }

  // 3. Si SÍ está autenticado, renderizar el contenido anidado
  // <Outlet> renderizará el componente hijo asociado a la ruta protegida
  return <Outlet />;
};

export default ProtectedRoute;
```


3. Configurar las Rutas en App.jsx

##### Las Rutas Protegidas se configuran como Rutas Anidadas de las que el ProtectedRoute es el componente padre.

```
// App.jsx
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      {/* 1. Rutas Públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<h1>Página Pública de Inicio</h1>} />

      {/* 2. RUTA PADRE PROTEGIDA */}
      {/* La URL no coincide con ProtectedRoute, solo el elemento sí */}
      <Route element={<ProtectedRoute />}>
        {/* Rutas Hijas Protegidas (se renderizan en el <Outlet> del ProtectedRoute) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        
        {/* Ejemplo: redirigir a una página diferente */}
        <Route path="/admin" element={<ProtectedRoute redirectPath="/unauthorized" />}>
           <Route index element={<h1>Contenido Solo para Administradores</h1>} />
        </Route>
      </Route>
      
      {/* ... otras rutas y el 404 */}
    </Routes>
  );
}
```

Alternativa: Pasar el Componente Directamente

##### En lugar de usar Rutas Anidadas y <Outlet>, algunos patrones más antiguos o simplificados pasan el componente a proteger como prop

Pero la configuración con Rutas Anidadas y <Outlet> es el método preferido en las versiones modernas de React Router, ya que es más limpio y se alinea mejor con la composición de rutas.



### useParams

##### Permite acceder a los parámetros dinámicos definidos en la URL de la ruta actual.

##### Forma en que un componente React lee los valores variables que se encuentran incrustados en la URL

como un ID de usuario o un slug de producto


#### Devuelve un objeto con pares clave-valor de los parámetros de la URL.

Clave: El nombre que le diste al parámetro en la definición de la ruta (ej. :userId).

Valor: El valor real que el usuario ha ingresado en esa posición de la URL (ej. 105


useParams requiere dos pasos:

1. Definición de la Ruta (en <Route>)

Debes indicar en tu configuración de rutas

Que una parte de la URL es un parámetro dinámico

Usando dos puntos (:) antes del nombre.

```
// App.jsx
<Routes>
  {/* El nombre del parámetro es 'userId' */}
  <Route path="/perfil/:userId" element={<Perfil />} /> 
  
  {/* Múltiples parámetros: 'categoria' y 'slug' */}
  <Route path="/tienda/:categoria/:slug" element={<DetalleProducto />} /> 
</Routes>
```


2. Lectura del Parámetro (en el Componente)

Dentro del componente que se renderiza para esa ruta

llamas a useParams para obtener los valores.

```
// 🟢 Perfil.jsx
import { useParams } from 'react-router-dom';

const Perfil = () => {
  // 🎣 Llama al Hook
  const params = useParams(); 
  
  // params será un objeto: { userId: '105' } si la URL es /perfil/105
  // const { userId } = params; // Desestructuración es más común

  // Desestructuración directa (más común)
  const { userId } = useParams();

  // Aquí se usaría 'userId' para una llamada a la API
  // fetch(`/api/users/${userId}`); 

  return (
    <div>
      <h1>Cargando Perfil...</h1>
      <p>ID extraído de la URL: **{userId}**</p>
    </div>
  );
};
```


Prácticas

##### Identificación Única: useParams es la herramienta principal para que un componente sepa qué recurso específico debe cargar (ej. qué artículo, qué usuario, qué factura).


##### Todos son Strings: El valor que devuelve useParams es siempre una cadena de texto (string).

Si necesitas usar el valor como un número (ej. para cálculos o comparaciones estrictas),

debes convertirlo explícitamente (Number(userId)).


##### Re-renderizado: Siempre que el valor del parámetro cambie en la URL (ej. el usuario navega de /perfil/101 a /perfil/102),

React Router provoca un re-renderizado del componente

Si el componente usa ese parámetro dentro de un useEffect

el efecto se disparará para cargar los nuevos datos

```
// Ejemplo de uso con useEffect
useEffect(() => {
  // Si userId cambia en la URL, este efecto se ejecuta
  fetchUserData(userId); 
}, [userId]); // ¡Es crucial incluir userId en las dependencias!
```



### useNavigate

##### Permite manejar la navegación programática o redirección dentro de tu Aplicación de Una Sola Página (SPA).

Forma en que el código, en respuesta a una acción del usuario

(como el envío de un formulario o un inicio de sesión exitoso)

##### Puede cambiar la URL sin depender de un componente declarativo como <Link>.


#### Devuelve una función que puedes usar para navegar. 

Rol: Reemplaza al Hook useHistory que se utilizaba en versiones anteriores de React Router

Funcionamiento: Cuando llamas a la función devuelta por useNavigate

React Router actualiza la URL en la barra de direcciones del navegadorReact Router actualiza la URL en la barra de direcciones del navegador

renderiza el componente asociado a esa nueva ruta.

```
import { useNavigate } from 'react-router-dom';

const Componente = () => {
  // 1. Inicializa el Hook y obtiene la función de navegación
  const navigate = useNavigate(); 
  
  const handleAccion = () => {
    // ... lógica de la acción (ej. API)
    
    // 2. Llama a la función para navegar a la ruta raíz
    navigate('/'); 
  };
  
  // ...
};
```


Usos

useNavigate acepta hasta dos argumentos

el destino de la ruta (obligatorio)

un objeto de opciones (opcional).


1. Navegación a una Nueva Ruta

Simplemente pasa la ruta como una cadena de texto.

```
// Redireccionar al dashboard
navigate('/dashboard'); 

// Redireccionar a una ruta dinámica con un ID
const userId = 456;
navigate(`/usuarios/${userId}/perfil`);
```


2. Navegación Basada en el Historial

Puedes usar números para navegar hacia adelante o hacia atrás en el historial del navegador

similar a los botones de retroceso o avance.

```
// Navegar un paso hacia atrás (similar al botón "Back" del navegador)
navigate(-1); 

// Navegar dos pasos hacia adelante
navigate(2);
```


3. Redirección y Reemplazo de Historial (Opción replace)

Cuando quieres que el usuario NO pueda usar el botón "Atrás" del navegador para volver a la página anterior

(típico después de un inicio de sesión o después de enviar un formulario)

usas la opción { replace: true }.

```
const handleLoginSuccess = () => {
  // Redirige al dashboard Y reemplaza la página de login en el historial.
  // Si el usuario presiona "Atrás", irá a la página ANTES del login, no al login.
  navigate('/dashboard', { replace: true }); 
};
```


4. Pasar Estado (State) a la Nueva Ruta

Puedes adjuntar un objeto de estado (state) que estará disponible en la ruta de destino a través del Hook useLocation.

Este estado no es visible en la URL y es útil para pasar mensajes o datos temporales.

```
// Navegar a la página de éxito y adjuntar un mensaje de estado
navigate('/pago/exito', { state: { message: 'Pago completado con éxito!' } });
```

Ej: Este componente redirige al usuario después de un proceso exitoso.

```
// PaymentComponent.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentComponent = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate(); // Inicializa el Hook

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulación de una llamada API de 2 segundos
    setTimeout(() => {
      setIsProcessing(false);
      
      // Si el pago fue exitoso:
      navigate('/order/success', { 
        replace: true, // No queremos que vuelvan a la página de pago
        state: { orderId: 'ORD-789', amount: 99.99 } // Pasamos datos temporales
      });
      
    }, 2000);
  };

  return (
    <button onClick={handlePayment} disabled={isProcessing}>
      {isProcessing ? 'Procesando...' : 'Pagar Ahora'}
    </button>
  );
};

export default PaymentComponent;
```



### useLocation

##### Permite acceder al objeto de ubicación actual (location object) en el historial del navegador.

##### Crucial cuando necesitas que tu componente sepa exactamente dónde se encuentra en la aplicación

##### y acceder a información específica de la URL que no son parámetros dinámicos.


#### Devuelve un objeto JavaScript con varias propiedades que describen la URL actual

Siempre que la URL cambia, el valor devuelto por useLocation se actualiza

Lo que provoca que el componente que lo usa se re-renderice.


Estructura del Objeto location:

Si la URL actual es 

```
https://misitio.com/productos?filtro=nuevo#seccion3
```

el objeto location se vería así:

```
Propiedad	Tipo	Valor del Ejemplo	Descripción
```

pathname	string	/productos	La ruta de la URL, incluyendo la barra inicial.

search	string	?filtro=nuevo	Los parámetros de consulta (query strings), comenzando con ?.

hash	string	#seccion3	El fragmento o ancla de la URL, comenzando con #.

state	object	{...}	Un objeto de estado opcional pasado durante la navegación programática con useNavigate.

key	string	abcde12345	Una clave única para la ubicación, útil para forzar re-renderizados o manejar listas

```
import { useLocation } from 'react-router-dom';

const ComponenteActual = () => {
  // 🎣 Llama al Hook
  const location = useLocation(); 
  
  console.log(location.pathname); // Imprime: /productos
  console.log(location.search);   // Imprime: ?filtro=nuevo
  
  // ...
};
```


Usos

1. Seguimiento de Analíticas o Logging

##### Usar el pathname para enviar datos a herramientas de analítica (como Google Analytics) cada vez que la ruta cambia.

```
useEffect(() => {
  // Reporta la nueva página a tu herramienta de analítica
  miAnalytics.trackPageView(location.pathname);
}, [location.pathname]); // El efecto se dispara solo cuando cambia la ruta
```


2. Acceso a Parámetros de Consulta (search)

A diferencia de useParams (que lee rutas dinámicas como /usuario/:id)

##### useLocation se usa para leer los query strings (ej. ?orden=precio).

##### Aunque puedes leer location.search directamente, la práctica recomendada es usar el Hook específico useSearchParams para parsear y manipular estos parámetros de forma más limpia.


3. Mantener el Estado de Navegación (state)

Si navegaste programáticamente usando useNavigate y le pasaste un objeto state, puedes recuperarlo con useLocation.

Ej: En un formulario, al fallar la validación, puedes redirigir al usuario a la página anterior

pero adjuntando el objeto state para mostrar un mensaje de error específico.

```
// En la página de destino (ej. SuccessPage.jsx)
import { useLocation } from 'react-router-dom';

const SuccessPage = () => {
  const location = useLocation();
  // El objeto state tiene el valor que se pasó desde useNavigate
  const { message, orderId } = location.state || {}; 

  return (
    <div>
      <h1>{message || "Operación Exitosa"}</h1>
      {orderId && <p>ID de la orden: {orderId}</p>}
    </div>
  );
};
```


### useSearchParams

##### Se usa para leer y modificar los parámetros de consulta (query strings) en la URL.

Los parámetros de consulta son las partes de la URL que vienen después del signo de interrogación (?)

```
https://midominio.com/productos?categoria=electronica&orden=precioAsc
```

Proporciona un par de valores, similar a useState:

1. searchParams (El Estado): Un objeto especial (una instancia de URLSearchParams)
contiene el estado actual de todos los parámetros de consulta.

2. setSearchParams (El Actualizador): Una función para actualizar, añadir o eliminar los parámetros de consulta de forma programática.

```
import { useSearchParams } from 'react-router-dom';

const [searchParams, setSearchParams] = useSearchParams();
```


Uso: Lectura de Parámetros

Para leer un parámetro, utilizas el método .get() del objeto searchParams

```
const MiComponente = () => {
  const [searchParams] = useSearchParams();
  
  // 1. Leer un parámetro específico
  const categoria = searchParams.get('categoria'); 
  const orden = searchParams.get('orden'); 
  
  // 2. Comprobar si un parámetro existe
  const tieneFiltro = searchParams.has('categoria');

  return (
    <div>
      <p>Categoría actual: **{categoria || 'Todas'}**</p>
      <p>Orden actual: **{orden || 'N/A'}**</p>
    </div>
  );
};
```

Nota: El valor devuelto por .get() es null si el parámetro no está presente en la URL.


Uso: Actualización y Navegación

##### El poder de useSearchParams reside en su capacidad para actualizar la URL de forma programática a través de setSearchParams


A. Actualización Simple

Para establecer o cambiar un parámetro,

pasas un objeto que representa el nuevo conjunto de parámetros a setSearchParams.

```
const handleCambioCategoria = (nuevaCategoria) => {
  // 1. Crea un nuevo objeto de URLSearchParams con los valores nuevos
  setSearchParams({ categoria: nuevaCategoria, pagina: 1 });
  
  // Resultado en la URL: ?categoria=libros&pagina=1
};
```


B. Mantener Parámetros Existentes (Forma Funcional)

##### Si llamas a setSearchParams con un nuevo objeto, eliminará todos los parámetros antiguos que no incluyas

Para mantener los existentes mientras añades o modificas uno, utiliza la forma de actualización funcional:

```
const handleCambioOrden = (nuevaOrden) => {
  // Usa el valor anterior (prevParams) para preservar otros filtros
  setSearchParams(prevParams => {
    // 1. Copia todos los parámetros existentes
    // 2. Sobrescribe o añade 'orden'
    prevParams.set('orden', nuevaOrden); 
    
    // 3. Regresa el nuevo conjunto de parámetros
    return prevParams; 
  });
  // Si la URL era ?categoria=electronica, el resultado será: 
  // ?categoria=electronica&orden=precioDesc
};
```


C. Eliminación de Parámetros

Para eliminar un parámetro, usa el método .delete() en el prevParams

```
const handleResetearCategoria = () => {
  setSearchParams(prevParams => {
    prevParams.delete('categoria'); // Elimina el parámetro 'categoria'
    return prevParams;
  });
  // Si la URL era ?categoria=libros&orden=asc, el resultado será:
  // ?orden=asc
};
```



### Composición de Rutas

##### Route Composition: cómo combinas, anidas y estructuras los componentes de tus rutas para construir la interfaz de usuario completa de tu aplicación.

filosofía de diseño que aprovecha la naturaleza composable de React.

##### implica que el layout (la estructura visual) y la navegación se definen declarativamente anidando componentes

En lugar de tener un archivo de configuración gigante que describe todas las rutas de la aplicación

##### compone la estructura de la UI a través de las rutas:

1. Rutas para Layouts: Las rutas superiores (padres) se utilizan para renderizar componentes de layout estáticos (ej. Header, Footer, Sidebar).

2. Rutas para Vistas: Las rutas anidadas (hijas) se utilizan para renderizar el contenido que cambia
el cual se inyecta en el layout padre a través del componente <Outlet>.
 
 
#### Principio: 

##### La composición de rutas asegura que la jerarquía de tu URL (/dashboard/ajustes)

##### refleje la jerarquía de componentes (<LayoutDashboard> contiene <Ajustes>).


Formas de Composición de Rutas

La composición de rutas se manifiesta de tres formas principales en React Router:


1. Rutas de Layout con <Outlet> (Composición de Vista)

Forma más común y eficiente

Una ruta padre renderiza un componente que define el layout general

y dentro de ese componente, el <Outlet> actúa como el punto de inyección para el contenido de las rutas hijas.

```
path="/dashboard" → Renderiza <LayoutDashboard> (contiene el sidebar estático).

path="perfil" → Renderiza <Perfil> dentro del <Outlet> de LayoutDashboard.
```

```
// El componente LayoutDashboard define la estructura visual estática.
<Route path="/dashboard" element={<LayoutDashboard />}>
    <Route path="perfil" element={<Perfil />} />
    <Route path="ajustes" element={<Ajustes />} />
</Route>
```


2. Rutas Wrapper y Componentes Protegidos (Composición de Lógica)

##### Utilizas la composición de rutas para envolver rutas con lógica

El componente ProtectedRoute es un ejemplo perfecto de esto.

ProtectedRoute (el padre) compone la lógica de autenticación alrededor de todas sus rutas hijas, protegiéndolas.

```
// ProtectedRoute contiene la lógica para verificar la autenticación
<Route element={<ProtectedRoute />}>
    <Route path="/privado" element={<DatosSecretos />} />
    <Route path="/checkout" element={<Checkout />} />
</Route>
```


C. Composición de Componentes de Alto Nivel

##### Componer tu routing separándolo en diferentes componentes funcionales (SRP aplicado).

##### En lugar de tener una sola lista gigante de <Route> en App.jsx, puedes tener componentes que definan subconjuntos de rutas.

```
// RutasAdministrativas.jsx
const RutasAdministrativas = () => (
    <Route path="admin" element={<LayoutAdmin />}>
        <Route path="usuarios" element={<GestionUsuarios />} />
        <Route path="logs" element={<VerLogs />} />
    </Route>
);

// App.jsx
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <RutasAdministrativas /> {/* Composición de Rutas */}
    </Routes>
  );
}
```

La Composición de Rutas es una aplicación directa del principio de Composición de React, haciendo que el routing sea escalable, legible y fácil de mantener.



### Prácticas para Routing 


#### 1. Estructuración y Organización

1. Priorizar la Composición de Rutas:

Utiliza las Rutas Anidadas y el componente <Outlet> para definir el layout (encabezado, barra lateral) en rutas superiores

y renderizar solo el contenido de las rutas hijas

Esto evita duplicar elementos de layout y refleja la jerarquía real de la UI y la URL.


2. Separar las Rutas en Componentes

Separa las configuraciones de rutas por dominio o característica (ej., /admin, /usuarios, /checkout) en archivos o componentes funcionales separados.

Ej: componente <AdminRoutes /> que define solo las rutas de administración


3. Manejar el Catch-All (404)

Siempre incluye una ruta catch-all con path="*" (o path="*") como la última ruta en tu componente <Routes>.

Esto atrapa cualquier URL no reconocida y renderiza la página "404 No Encontrado".


#### 2. Lógica de Navegación y Acceso

1. Crear un Componente ProtectedRoute

Nunca añadas la lógica de autenticación directamente en los componentes de las páginas

En su lugar, crea un componente ProtectedRoute que utilice un <Outlet>

y el Hook useNavigate (o <Navigate>) para redirigir a los usuarios no autenticados.


2. Usar useNavigate vs. <Link>

##### <Link>: Úsalo siempre para la navegación declarativa (clics en menús, botones de navegación).

##### useNavigate: Úsalo para la navegación programática que ocurre después de una acción (ej. inicio de sesión, envío exitoso de formulario, eliminación de un recurso).


3. Usar replace: true con useNavigate

##### Después de acciones críticas como Iniciar Sesión o Enviar Pago, usa la opción { replace: true } con useNavigate.

Esto asegura que la página anterior se reemplace en el historial

##### impidiendo que el usuario regrese a la página de formulario o inicio de sesión con el botón "Atrás".


#### 3. Manejo de Parámetros y Query Strings

1. Usar useParams para Identificación

Utiliza useParams para acceder a los valores necesarios para identificar un recurso (ej. /productos/:id).

Es la forma más limpia de cargar datos específicos.


2. Usar useSearchParams para Filtros y Paginación

##### Utiliza useSearchParams (en lugar de useLocation().search) para leer y modificar los parámetros de consulta 

(query strings, ej. ?page=1&filtro=activo).

está diseñado para gestionar esto de forma sencilla, permitiendo mantener los parámetros existentes mientras añades o eliminas otros.


3. Normalizar Parámetros

##### Los valores de useParams y useSearchParams son siempre cadenas de texto (strings).

##### Si esperas un número, un booleano o un array, debes convertir el valor explícitamente (ej., Number(userId) o un parser de array).


#### 4. Rendimiento

1. Usar Lazy Loading (Code Splitting)

Para reducir el tamaño inicial del bundle de JavaScript y mejorar el tiempo de carga

utiliza la división de código (Code Splitting) para cargar los componentes de las rutas solo cuando sean necesarios

##### Esto se hace con React.lazy y <Suspense>.

```
import React, { lazy, Suspense } from 'react';

// Carga perezosa de los componentes de las páginas
const PaginaAdministracion = lazy(() => import('./pages/Admin'));

<Routes>
  <Route 
    path="/admin" 
    element={
      // Muestra un fallback mientras se carga el componente
      <Suspense fallback={<div>Cargando...</div>}> 
        <PaginaAdministracion />
      </Suspense>
    } 
  />
</Routes>
```




### Diseño de rutas

Crucial para asegurar que la estructura de URLs de tu aplicación sea coherente, predecible y optimizada tanto para los usuarios como para los motores de búsqueda (SEO).


#### 1. Principios de Diseño de URLs

1. Ser Descriptivo y Semántico (RESTful)

##### Las URLs deben describir qué recurso están manejando

(ej. un usuario, un producto) y usar sustantivos en plural.


Objetivo	Ruta Recomendada	Ruta a Evitar

Listar recursos	/productos	/traerProductos

Ver un recurso	/productos/5	/producto-id/5

Crear un recurso	/usuarios/nuevo o POST a /usuarios	/crear-usuario


2. Usar Guiones Medios

Para separar palabras en las URLs.

Convención preferida para la legibilidad humana y de máquinas (SEO).

Nombre compuesto	/acerca-de-nosotros	/acerca_de_nosotros (guion bajo)


3. Evitar Extensiones y Mayúsculas

Mantén las URLs en minúsculas y no incluyas extensiones de archivo como .html o .php.

Formato	/perfil	/Perfil.html


#### 2. Estructura y Jerarquía (Rutas Anidadas)

1. Reflejar la Jerarquía de UI

La estructura de tu URL debe reflejar la relación jerárquica de tus componentes y layouts

##### Esto se maneja perfectamente con las Rutas Anidadas de React Router y el componente <Outlet>.

Padre: /dashboard → LayoutDashboard (Contiene Sidebar)

Hija: /dashboard/ajustes → Ajustes (Contenido dentro del Dashboard)

Nieta: /dashboard/ajustes/seguridad → AjustesSeguridad (Contenido dentro de Ajustes)


2. Uso de Rutas de Índice (index)

##### Utiliza la propiedad index en una ruta anidada

##### Define el contenido por defecto que se muestra cuando la URL coincide exactamente con la ruta padre

```
<Route path="/usuarios" element={<LayoutUsuarios />}>
  {/* Renderiza ListarUsuarios en /usuarios */}
  <Route index element={<ListarUsuarios />} /> 
  {/* Renderiza DetalleUsuario en /usuarios/5 */}
  <Route path=":id" element={<DetalleUsuario />} /> 
</Route>
```


#### 3. Manejo de Parámetros Dinámicos

1. Rutas de Identificación (useParams)

Usa los parámetros dinámicos (:nombre) para identificar un recurso específico. 

Siempre colócalos al final de la ruta.

productos/:slug

/usuarios/:userId


2. Evitar Query Strings para Identificación

Nunca uses parámetros de consulta (?) para identificar el recurso principal

úsalos solo para filtrar o ordenar.


Evitar: Identificación	/productos/camisa-azul	/productos?id=5

Filtro/Orden	/productos?orden=precioAsc	(Uso correcto)


3. Gestionar Rutas Opcionales

Si una parte de la ruta es opcional

aunque no se recomienda abusar de ello

puedes marcarla con un signo de interrogación al final del parámetro o slug

usuarios/:userId? (El userId es opcional, la ruta coincide con /usuarios/ o /usuarios/5)


#### 4. Seguridad y Mantenimiento

1. Centralizar Rutas Protegidas

##### Utiliza un solo componente ProtectedRoute como wrapper de las rutas que requieren autenticación.

Esto centraliza la lógica de seguridad y hace que sea fácil ver qué partes de la aplicación están restringidas


2. Evitar Lógica en Query Strings

##### No confíes en los parámetros de consulta (useSearchParams) para lógica de seguridad o funcionalidades críticas

##### Los query strings son fáciles de modificar por el usuario.


3. C. Uso de un constants File (Opcional pero Útil)

Para aplicaciones grandes, define todas las rutas principales en un archivo de constantes (ej. ROUTES.js).

Esto facilita la refactorización si una URL cambia

y evita errores tipográficos en los <Link> y las llamadas a Maps().

```
// ROUTES.js
export const HOME = '/';
export const DASHBOARD = '/dashboard';
export const USER_PROFILE = '/usuarios/:userId';

// ... en el código
<Link to={ROUTES.DASHBOARD}>Dashboard</Link>
```



### SRP en Rutas

##### Cada bloque de configuración de rutas debe tener una única razón para cambiar o una única área de enfoque de la aplicación.


1. SRP en la Configuración de Rutas (Composición)

Problema: Componente (App.jsx) con una lista monolítica de cincuenta o más rutas que manejan todas las funcionalidades de la aplicación (administración, checkout, usuarios, marketing, etc.).

Solución: Componentes de Rutas Compuestas

##### Divide la configuración de las rutas por su dominio de funcionalidad o su área de la interfaz de usuario en componentes separados

Si cambian las rutas de administración, solo modificas el componente RutasAdmin.jsx, sin tocar las rutas de marketing.

SRP en Composición

```
// RutasAdmin.jsx
const RutasAdmin = () => (
  // Responsabilidad: Solo el layout y las rutas de Administración.
  <Route path="admin" element={<LayoutAdmin />}>
    <Route path="usuarios" element={<GestionUsuarios />} />
    <Route path="logs" element={<VerLogs />} />
  </Route>
);

// App.jsx
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <RutasAdmin />         {/* Composición de Rutas */}
      <RutasCheckout />      {/* Composición de Rutas */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
```


2. SRP en la Lógica de Acceso (Protección)

##### Componente que maneja la lógica de acceso a una ruta también debe tener una única responsabilidad: proteger o filtrar la ruta.

Solución: Abstraer la Lógica de Acceso

##### componentes ProtectedRoute como la ruta padre para manejar una sola preocupación de acceso

##### delegando la visualización del contenido real a sus hijos (a través de <Outlet>).

Autenticación Básica	ProtectedRoute	Solo cambia si cambia la lógica para determinar si un usuario ha iniciado sesión.

Autorización (Roles)	RoleRoute	Solo cambia si cambian las reglas para acceder a un recurso basado en el rol del usuario (ej. solo Admin).

Redirección de Invitados	GuestOnlyRoute	Solo cambia si cambia la lógica para permitir que solo los usuarios no autenticados vean la ruta (ej. la página de inicio de sesión).


Ej: SRP con Protección

En lugar de crear un único componente gigante que gestione todos los roles y permisos, lo divides:

```
// Rutas para CUALQUIER usuario autenticado
<Route element={<ProtectedRoute />}> 
  <Route path="/dashboard" element={<Dashboard />} />
</Route>

// Rutas SOLO para usuarios con rol 'ADMIN'
<Route element={<RoleRoute allowedRoles={['ADMIN']} />}> 
  <Route path="/admin" element={<AdminPanel />} />
</Route>

```


Beneficios:

Legibilidad: Es inmediatamente obvio dónde buscar una ruta específica (ej. todas las rutas de checkout están en RutasCheckout.jsx).

Mantenibilidad: Si cambias la URL base para toda la sección de admin (ej. de /admin a /management), solo tienes que modificar la ruta padre en RutasAdmin.jsx.

Escalabilidad: Añadir una nueva funcionalidad (ej. un módulo de Reportes) solo requiere crear un nuevo componente RutasReportes.jsx y componerlo en el router principal, sin tocar la configuración existente.




### Recuperación de Datos

##### Componente obtiene datos de una fuente externa (generalmente una API REST o GraphQL) y los almacena en el estado para poder renderizarlos

##### En React este proceso se gestiona principalmente a través de efectos secundarios (useEffect) y librerías externas.


#### Con useEffect

Forma nativa y más básica de gestionar la recuperación de datos en componentes funcionales es usando los Hooks useState y useEffect

1. Estado Inicial: Se inicializa el estado del componente para los datos, el estado de carga (isLoading) y los errores (error).

2. Montaje: Se utiliza useEffect con un array de dependencias vacío para ejecutar la llamada a la API solo una vez, cuando el componente se monta por primera vez.

3. Función Asíncrona: La llamada a la API (fetch o axios) se realiza dentro de una función asíncrona definida dentro de useEffect.

4. Actualización: Al recibir la respuesta exitosa, se actualiza el estado (setData, setIsLoading(false)), lo que provoca un re-renderizado

```
import React, { useState, useEffect } from 'react';

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await fetch('/api/productos');
        const data = await res.json();
        setProductos(data);
      } catch (err) {
        console.error("Error al cargar:", err);
      } finally {
        setCargando(false);
      }
    };
    fetchProductos();
  }, []); // Solo se ejecuta al montar

  if (cargando) return <p>Cargando productos...</p>;
  return <ul>{/* ... renderizar productos */}</ul>;
};
```


#### Limpieza (Cleanup)

##### Dentro de useEffect (usando AbortController) para cancelar la solicitud de red si el componente se desmonta antes de que la solicitud finalice.

Esto previene fugas de memoria y errores.


#### Custom Hooks

##### La mejor práctica es extraer la lógica de useState y useEffect a un Custom Hook (ej., useFetch o useApiData).

Ventaja: Centraliza la lógica de gestión de carga, error y cancelación, haciendo que el componente de UI sea mucho más limpio (SRP aplicado).

Función: El Custom Hook es responsable de gestionar el ciclo de vida de la solicitud, dejando al componente de UI solo la tarea de renderizar el estado (data, isLoading, error).


#### Avanzado: Librerías de Gestión de Estado del Servidor

##### Para aplicaciones grandes y complejas donde el estado del servidor (los datos de la API) cambia constantemente, el uso de hooks puros puede volverse ineficiente.

Las librerías modernas se especializan en gestionar el Estado del Servidor (diferenciándolo del Estado de la UI).

Caché Automático	Almacenan en caché las respuestas de la API y las reutilizan para evitar peticiones redundantes.	TanStack Query (React Query), SWR

Revalidación en Foco	Reactivan automáticamente la solicitud cuando el usuario vuelve a enfocar la ventana del navegador, asegurando datos frescos.	TanStack Query, SWR

Gestión de Mutaciones	Ofrecen herramientas para actualizar la caché automáticamente después de operaciones POST, PUT o DELETE.	TanStack Query, SWR, Apollo Client

Desduplicación	Si varios componentes solicitan los mismos datos al mismo tiempo, solo se realiza una única solicitud de red.	TanStack Query, SWR


##### Para la mayoría de los proyectos modernos, se recomienda utilizar un Custom Hook simple para solicitudes básicas

#### Pero para cualquier aplicación con alta interactividad y dependencia de APIs, TanStack Query (React Query) es el estándar de la industria.


#### fetch o Axios para llamadas API REST/GraphQL.


Fetch: 

##### Es la base de cómo los componentes interactúan con los servicios de backend.

Es una función global del navegador (no necesita importación) que inicia una solicitud HTTP.

Su principal característica es que está basada en Promises, lo que permite manejar las operaciones asíncronas de manera limpia.


Estructura de fetch:

fetch toma la URL del recurso como argumento principal y devuelve una Promesa.

```
fetch(url)
  .then(respuesta => respuesta.json()) // 1. Maneja la promesa de la respuesta
  .then(datos => console.log(datos))  // 2. Maneja los datos parseados
  .catch(error => console.error('Hubo un problema:', error)); // 3. Maneja errores de red
```


Proceso de Doble then():

Es crucial entender que fetch tiene un proceso de dos pasos de Promesas:

1. Primer .then() (La Respuesta de Red): La primera Promesa se resuelve tan pronto como el servidor responde con los encabezados (headers) de la solicitud, incluso si la respuesta fue un error HTTP como 404 o 500

El objeto Response que se recibe en este paso es una envoltura de los datos.


2. Segundo .then() (Extracción del Cuerpo): Para acceder a los datos reales (el cuerpo, generalmente JSON o texto), debes llamar a un método como respuesta.json() o respuesta.text().

Este método también devuelve una Promesa, lo que obliga al segundo .then().


fetch en Componentes React (con async/await)

##### Casi siempre se envuelve dentro de un useEffect y se utiliza con la sintaxis async/await para simplificar la lectura de Promesas.

```
import React, { useState, useEffect } from 'react';

const MiComponente = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Definición de la función asíncrona dentro de useEffect
    const obtenerDatos = async () => {
      try {
        const respuesta = await fetch('/api/datos');
        
        // 🚨 Manejo de Errores HTTP: Debes verificar la propiedad 'ok'
        if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        const datosJSON = await respuesta.json();
        setData(datosJSON);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    };
    
    obtenerDatos();
  }, []); // Se ejecuta solo al montar

  return <div>{data ? JSON.stringify(data) : 'Cargando...'}</div>;
};
```


fetch vs. Otras Librerías (Axios):

Muchos proyectos optan por librerías como Axios debido a ciertas ventajas de comodidad:

JSON Auto	Requiere el paso response.json() separado.	Convierte automáticamente el cuerpo de la respuesta a JSON.

Manejo de Errores	No rechaza la Promesa en errores HTTP (ej. 404); debe ser manejado manualmente con if (!res.ok).	Rechaza automáticamente la Promesa para cualquier código de estado fuera del rango 2xx.

Transformación	Requiere el uso de URLSearchParams para query strings.	Maneja automáticamente la serialización de query strings

Browser Support	Es nativo, pero requiere polyfills para navegadores muy antiguos (raro hoy en día).	Es independiente del entorno del navegador (funciona bien en Node.js, etc.).


#### fetch vs async y await

##### fetch es la función que realiza la solicitud de red

##### async/await es la sintaxis moderna de JavaScript para trabajar con Promesas de forma más legible.

1. Fase 1 (Promesa Resuelta): Devuelve el objeto Response al recibir los encabezados.

2. Fase 2 (Cuerpo de Datos): Debes llamar a un método como response.json() o response.text(), el cual devuelve una segunda Promesa con los datos reales.


Estilo Tradicional (.then().catch())

Antes de async/await, el código con fetch se veía así:

```
fetch('/api/data')
  .then(response => {
    // 🚨 Manejo manual de errores HTTP
    if (!response.ok) { 
      throw new Error('Error al cargar datos');
    }
    return response.json(); // Segunda promesa
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error); // Captura errores de red y los lanzados manualmente
  });
```


async / await:

proporcionan una forma más limpia y sincrónica de escribir código asíncrono basado en Promesas.

##### async: Define una función como asíncrona. Una función async siempre devuelve implícitamente una Promesa.

##### await: Solo puede usarse dentro de una función async. Pausa la ejecución del código hasta que la Promesa a su derecha se resuelva

luego extrae el valor resuelto de esa Promesa.


facilita la lectura y el manejo de errores con try...catch.

```
const obtenerDatos = async () => { // 👈 async
  try {
    // 1. Espera la respuesta de la solicitud de red
    const respuesta = await fetch('/api/data'); // await

    // Manejo de errores sigue siendo manual (peculiaridad de fetch)
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    // 2. Espera a parsear el cuerpo de la respuesta a JSON
    const datosJSON = await respuesta.json(); // await
    
    return datosJSON;
    
  } catch (error) {
    // Captura cualquier error, tanto de red como los lanzados por throw
    console.error('Fallo la operación:', error);
  }
};
```


#### Prácticas para Fetch

Requiere manejo manual de errores y limpieza de efectos.


##### Manejar Errores HTTP Explícitamente

La principal trampa de fetch es que solo rechaza la Promesa ante un fallo de red (ej. sin conexión).

No rechaza la Promesa si el servidor devuelve un código de error HTTP (como 404 Not Found o 500 Internal Server Error).

Práctica: Siempre debes verificar la propiedad response.ok después del primer await y lanzar un error manualmente si es falso.

```

const response = await fetch(url);

// Buena Práctica: Verificar 'ok' y lanzar error manualmente
if (!response.ok) {
  // Puedes incluir el estado y el mensaje en el error
  throw new Error(`Error ${response.status}: ${response.statusText}`);
}
```

#### Encapsular la Lógica en un Custom Hook

Nunca dejes la lógica de useState, useEffect y fetch dentro de un componente de presentación (SRP).

Hace que tu componente sea difícil de probar y reutilizar.

Práctica: Abstrae toda la lógica de fetch (estado de carga, error y la llamada asíncrona) en un Custom Hook reutilizable (ej., useDataFetcher).

Ventaja: Tu componente de UI solo necesita consumir el estado: const { data, isLoading, error } = useDataFetcher('/api/data');.


##### Limpieza (Cleanup) con AbortController

Si un usuario abandona un componente (desmontaje) mientras una solicitud fetch está en curso

la solicitud seguirá resolviéndose y tratará de actualizar el estado de un componente inexistente, lo que puede causar advertencias y fallos (fuga de memoria).

Usa AbortController dentro de tu useEffect para cancelar la solicitud cuando el componente se desmonte.

```
useEffect(() => {
  const controller = new AbortController(); // Crea el controlador
  const signal = controller.signal;
  
  const fetchData = async () => {
    try {
      // Pasa la señal al fetch
      const response = await fetch(url, { signal }); 
      // ...
    } catch (err) {
      // Ignora el error si es por cancelación (AbortError)
      if (err.name === 'AbortError') return; 
      // ... manejar otros errores
    }
  };
  fetchData();

  // Función de Limpieza: Cancela la solicitud al desmontar
  return () => {
    controller.abort(); 
  };
}, [url]);
```


##### Peticiones POST y Opciones

##### Para peticiones que modifican datos (POST, PUT, DELETE), debes configurar explícitamente el método, los encabezados y el cuerpo.

##### Siempre especifica el encabezado Content-Type: application/json para decirle al servidor cómo interpretar el cuerpo de la solicitud, y usa JSON.stringify() para el cuerpo.
 
```
fetch('/api/usuarios', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}` // Incluir autenticación
  },
  // Convierte el objeto JavaScript a JSON para el cuerpo de la solicitud
  body: JSON.stringify({ nombre: 'Nuevo Usuario' }) 
});
```


##### Lógica de Estado Local vs. Estado del Servidor

##### Para la gestión de caché, revalidación en foco, y desduplicación de solicitudes (problemas complejos que fetch no resuelve)

Considera utilizar una librería de Gestión de Estado del Servidor como TanStack Query (React Query) o SWR.

Estas librerías abstraen el useEffect y fetch, manejando automáticamente muchas de las buenas prácticas de rendimiento y ciclo de vida por ti.


#### Axios 

Axios es una librería de JavaScript basada en Promises que se utiliza para realizar solicitudes HTTP (GET, POST, PUT, DELETE, etc.) desde el navegador o Node.js.

Axios es una de las alternativas más populares y a menudo preferida a la función nativa fetch por su simplicidad, mejor manejo de errores y características adicionales.


Manejo de Errores	Rechaza la Promesa automáticamente en errores HTTP (ej. 404, 500).

Transformación JSON	Convierte automáticamente el cuerpo de la respuesta a JSON.

Configuración	Fácil de configurar opciones globales (como encabezados/headers de autenticación).

Cancelación	Cancelación de solicitudes integrada (similar a AbortController).

Sintaxis	Requiere solo una línea .then() para acceder a los datos.


##### El código resulta más limpio debido a su gestión automática de JSON y errores.

```
npm install axios
# o
yarn add axios
```

GET

En un componente React, Axios se utiliza casi siempre dentro de un useEffect con la sintaxis async/await.

```
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PerfilUsuario = ({ userId }) => {
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // 1. Llamada a la API (Axios simplifica la sintaxis GET)
        const response = await axios.get(`/api/users/${userId}`); 
        
        // 2. Los datos reales están en response.data y YA son JSON
        setUsuario(response.data); 
      } catch (err) {
        // 3. Axios atrapa el error (incluyendo 404 o 500)
        setError(err.message); 
      }
    };
    fetchUser();
  }, [userId]); 

  // ... Renderizado basado en el estado (usuario, error)
};
```


##### Solicitudes POST y Configuración

Axios facilita el envío de datos, ya que no tienes que usar JSON.stringify() ni configurar manualmente el encabezado Content-Type: application/json; lo hace por ti.

```
const crearUsuario = async (data) => {
  try {
    const res = await axios.post('/api/usuarios', data); // Axios convierte 'data' a JSON
    console.log('Usuario creado:', res.data);
  } catch (error) {
    console.error('Fallo la creación:', error.response.data); // Acceso directo al error del servidor
  }
};
```


##### Prácticas Avanzadas: Instancias e Interceptores

##### Para aplicaciones medianas a grandes, se recomienda crear una instancia personalizada de Axios y usar interceptores:

1. Instancia: Define una configuración base (URL base, encabezados comunes) una sola vez.

```
// api.js
const api = axios.create({
  baseURL: 'https://miapi.com/v1',
  timeout: 5000,
  headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
});
export default api;
```

2. Interceptores: Son funciones que se ejecutan antes de que la solicitud sea enviada o antes de que la respuesta llegue al código

Son perfectos para:

Adjuntar tokens: Añadir el token de autenticación a cada solicitud.

Manejar Errores Globalmente: Redirigir al usuario a la página de inicio de sesión si se recibe un error 401 (No autorizado).


El uso de Axios en React generalmente se abstrae aún más en un Custom Hook (como useAxios)

o se integra con librerías de gestión de estado del servidor (como TanStack Query) para manejar la caché de manera eficiente.



#### State Management para manejo de datos de servidor (ej. React Query / TanStack Query o SWR).

##### Conjunto de prácticas y herramientas que se utilizan para controlar y coordinar los datos (el "estado") que cambian a lo largo del tiempo en una aplicación.

##### Dado que el estado es lo que impulsa la interfaz de usuario (UI)

una gestión efectiva es crucial para la escalabilidad, el mantenimiento y la previsibilidad de cualquier aplicación React.


##### El estado es cualquier dato que, cuando cambia, debe provocar que la interfaz de usuario se actualice

Hay dos tipos principales de estado: 


##### 1. Estado Local: Es el estado que solo necesita un único componente o un pequeño grupo de componentes relacionados que pasan props entre sí. 

Se maneja principalmente con el Hook useState.


##### 2. Estado Global o Compartido: Es el estado al que acceden múltiples componentes que no están directamente relacionados en el árbol de componentes

(ej. el usuario autenticado, el tema, el carrito de compras). 

Este es el foco principal de los Sistemas de Gestión de Estado.


##### Niveles de Gestión de Estado

La forma en que manejas el estado depende de la escala y la complejidad de la aplicación.


1. Nivel Básico (Estado Local)

Para la mayoría de los componentes, la gestión se realiza directamente en el componente.

##### useState: Para estados simples (números, strings, booleanos).

##### useReducer: Para estados complejos que tienen lógica de actualización complicada (transiciones de estado).

##### Elevación de Estado (Lifting State Up): Cuando varios componentes hermanos necesitan acceder al mismo estado, se mueve el estado al ancestro común más cercano y se pasa hacia abajo mediante props.


2. Nivel Intermedio (Estado Global Nativo)

Cuando el prop drilling (pasar props por muchos niveles innecesariamente) se convierte en un problema, se utiliza la solución nativa de React.

##### Context API: Proporciona un mecanismo para compartir datos globales (como el tema o el usuario) a través del árbol de componentes sin pasar props manualmente.

##### Context + useReducer: El patrón avanzado donde se usa useReducer para centralizar la lógica de actualización del estado y luego se usa la Context API para distribuir ese estado y la función dispatch a todos los componentes que lo necesiten.


3. Nivel Avanzado (Librerías de Terceros)

Para aplicaciones a gran escala con estado altamente interconectado y complejo, las librerías de terceros ofrecen más herramientas, optimizaciones y convenciones estrictas.


##### Estado de UI/Global Complejo	Redux / Redux Toolkit	Un store central inmutable con Acciones y Reducers puros
Es ideal para aplicaciones con lógica de negocio muy estricta y trazabilidad.

##### Estado de UI Minimalista	Zustand	Un gestor de estado basado en hooks que es ligero
requiere mucho menos código repetitivo (boilerplate) que Redux.

##### Estado Atómico	Recoil / Jotai	Trata el estado como unidades discretas (átomos) a las que los componentes se suscriben directamente, optimizando el rendimiento. 

##### Estado del Servidor	TanStack Query (React Query) / SWR	Se enfoca en gestionar el caché, la revalidación en foco, y la desduplicación de solicitudes de API, resolviendo los problemas comunes de useEffect




### TanStack Query (React Query) / SWR

TanStack Query (antes React Query) y SWR son librerías modernas de React diseñadas para la Gestión de Estado del Servidor (Server State Management).

##### Estas librerías han revolucionado la forma en que las aplicaciones React interactúan con las APIs

##### Resuelven los problemas más comunes y tediosos asociados con la recuperación de datos usando useEffect.

##### Tradicionalmente, en React, la recuperación de datos se hace con useEffect, manejando manualmente cuatro estados: loading, data, error y el cache (si es que existe). Esto se vuelve complejo rápidamente.


Estas librerías entienden que el Estado del Servidor (datos de la API) es diferente del Estado de la UI (un contador, un modal abierto).

El estado del servidor es:

1. Asíncrono: Tarda tiempo en obtenerse.

2. Volátil: Puede ser actualizado por otras personas o sistemas.

3. Caché: Debe guardarse temporalmente para mejorar el rendimiento.

TanStack Query y SWR abstraen la lógica de useEffect y fetch para gestionar el estado del servidor de manera automática


El corazón de ambas librerías es la gestión inteligente del caché y la sincronización automática con el servidor.

1. Caché Automático: Almacenan las respuestas de la API

Si un componente solicita los mismos datos poco después

la librería devuelve la versión en caché instantáneamente, lo que hace que la UI se sienta más rápida.


2. Revalidación en Foco (Refetch on Focus): Si el usuario cambia de pestaña y regresa (o la aplicación vuelve a enfocar)

la librería automáticamente realiza una solicitud en segundo plano para asegurar que los datos estén frescos.


3. Reintento Automático (Retry): Si una solicitud falla debido a un error temporal de red, la librería intenta automáticamente la solicitud varias veces


4. Desduplicación: Si múltiples componentes solicitan los mismos datos al mismo tiempo, solo se realiza una única solicitud de red real.


5. Gestión de Mutaciones: Proporcionan hooks específicos (useMutation) para operaciones POST, PUT y DELETE, facilitando la actualización optimista de la UI y la invalidación del caché después de un cambio.


##### Patrón TanStack Query

1. Inicialización

Envuelves tu aplicación en un QueryClientProvider.


2. Recuperación de Datos con useQuery

En lugar de useEffect, usas el Hook useQuery.



Clave de Consulta (queryKey)

La queryKey (ej. `['productos']`) es un identificador único que la librería utiliza para el caché.

Si dos componentes llaman a useQuery con la misma clave, compartirán la misma caché y el mismo estado.


##### SWR (Stale-While-Revalidate)

Sigue el mismo patrón, pero su API es más minimalista y se basa en una estrategia HTTP popular.

Patrón SWR: Devuelve datos obsoletos (stale) del caché inmediatamente, luego revalida (revalidate) la solicitud en segundo plano y, finalmente, muestra los datos frescos si han cambiado.

```

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchProductos = async () => {
  const { data } = await axios.get('/api/productos');
  return data;
};

const Productos = () => {
  // 🎣 useQuery recibe una clave única y una función asíncrona (fetcher)
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['productos'], 
    queryFn: fetchProductos 
  });

  if (isLoading) return <div>Cargando...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return <ul>
    {/* ... renderizar data */}
  </ul>;
};


import useSWR from 'swr';

const fetcher = url => axios.get(url).then(res => res.data);

const Usuarios = () => {
  const { data, error, isLoading } = useSWR('/api/usuarios', fetcher);
  
  if (error) return <div>Error.</div>;
  if (isLoading) return <div>Cargando...</div>;
  
  return <ul>
    {/* ... */}
  </ul>;
};

```

Ambas librerías son excelentes y eligen resolver la complejidad de la gestión de datos, permitiéndote enfocarte en la UI y la lógica de negocio.


#### TanStack Query vs SWR

##### Ambas librerías implementan el patrón "Stale-While-Revalidate" (SWR), pero lo hacen con arquitecturas y APIs ligeramente distintas.

TQ: 

Arquitectura: 

Opinionated" (Más Prescriptiva): Se enfoca en un concepto central llamado QueryClient y claves de consulta (queryKey) para un control granular del caché.

Control del Caché:	Alto Control. El QueryClient permite manipular manualmente el caché, invalidar consultas específicas y configurar tiempos de vida (TTL) muy precisos.

Debugging / Devtools: Excelente. Viene con DevTools muy completos que permiten ver el estado del caché, los tiempos de vida, y las peticiones fallidas.

Mutaciones (POST/PUT): Robusto. Ofrece useMutation con un manejo sofisticado de rollbacks optimistas y gestión del caché post-mutación


SWR

Arq: Minimalista y Ligera. Se enfoca en su hook principal useSWR y requiere menos boilerplate

Cache: Más Automático. El control manual es menos granular; confía más en la estrategia SWR (Stale-While-Revalidate).

debugg: Adecuado. Ofrece DevTools, pero históricamente menos rico que TanStack Query.

Mutaciones: Funcional. Proporciona useSWRMutation pero con una API a menudo considerada menos compleja.


TanStack Query (Recomendado para la Mayoría):

Escala: Aplicaciones medianas a grandes con lógica de negocio compleja.

Ventaja: Ofrece un control sin igual sobre el caché y unas DevTools que ahorran una enorme cantidad de tiempo en la depuración. Su API para mutaciones es muy completa.


SWR:

Escala: Proyectos pequeños o prototipos que buscan la implementación más rápida con el menor boilerplate posible.

Ventaja: Es más ligero y su implementación es casi instantánea. Si solo necesitas hacer peticiones GET y confiar en la estrategia SWR por defecto, es una opción fantástica.

	

### Prácticas para el estado local 

El estado local se refiere a los datos que solo necesita un único componente o un grupo muy pequeño de componentes relacionados, manejados principalmente con los Hooks useState y useReducer.


#### 1. Principios de useState

1. Mantener el Estado Simple y Plano

Práctica: Evita anidar objetos o arrays complejos con muchos niveles dentro de un solo useState. 
Esto complica la lógica de actualización.

Alternativa: Si tu estado es complejo (más de dos o tres propiedades relacionadas)
considera usar useReducer o dividirlo en múltiples llamadas a useState.
    
```
// Mal: Estado anidado difícil de actualizar inmutablemente
const [usuario, setUsuario] = useState({ nombre: 'A', direccion: { calle: 'X', ciudad: 'Y' } });

// Bien: Estado simple para propiedades relacionadas
const [nombre, setNombre] = useState('A');
const [ciudad, setCiudad] = useState('Y');
```


2. Usar la Forma Funcional para Actualizaciones

Práctica: Cuando el nuevo valor del estado depende del valor anterior, usa la forma de actualización funcional de setState (ej. setCount(prevCount => prevCount + 1)).

Razón: Esto garantiza que estás trabajando con el valor más actualizado del estado, especialmente dentro de funciones asíncronas o actualizaciones en lote.


3. Gestionar el Estado de Forma Inmutable

Práctica: Nunca modifiques el estado directamente (ej. state.propiedad = nuevoValor). Siempre crea una copia del estado y luego actualiza esa copia.

Implementación: Usa el operador spread (...) para actualizar objetos o arrays.

```
// Mal (Mutación directa)
const handleAddItem = (item) => {
  items.push(item); // ¡Mutación!
  setItems(items); 
};

// Bien (Actualización inmutable)
const handleAddItem = (item) => {
  setItems(prevItems => [...prevItems, item]); // Se crea un nuevo array
};
```


#### 2. Uso de useReducer

1. Lógica de Transición Compleja

Práctica: Cambia de useState a useReducer cuando tienes múltiples actualizaciones de estado relacionadas o cuando la lógica para determinar el siguiente estado se vuelve compleja.

Razón: useReducer centraliza toda la lógica de estado en la función reducer (SRP), manteniendo el componente libre de esa complejidad


2. Múltiples Actualizaciones Relacionadas

Práctica: Usa useReducer cuando una sola acción (ej. hacer clic en "Enviar Formulario") necesita actualizar múltiples piezas de estado (isLoading, error, datos).
Esto se maneja limpiamente con una sola llamada a dispatch.


#### 3. Arquitectura

1. Evitar el "Prop Drilling"

##### Práctica: Si el estado local necesita ser pasado a través de tres o más componentes intermedios que no lo usan
eleva el estado más arriba en el árbol (al ancestro común) o muévelo a la Context API si es global
    
Regla de Oro: Si un componente recibe una prop y solo la pasa a un hijo, probablemente estás haciendo prop drilling.


2. Colocación de Estado (State Colocation)

Práctica: Mantén el estado tan cerca del componente que lo utiliza como sea posible. 

Razón: Si un estado solo es relevante para un componente muy anidado, inicializarlo en la raíz de la aplicación hace que se re-rendericen innecesariamente muchos componentes. Moverlo hacia abajo limita el alcance del re-renderizado.


3. Abstraer Lógica con Custom Hooks

Práctica: Si un componente funcional tiene mucha lógica de negocio o de ciclo de vida (ej. timers, event listeners o lógica de formulario)
Extrae esa lógica y su estado asociado a un Custom Hook (ej. useFormInput, useToggle).

Ventaja: Esto aplica el SRP, dejando al componente de UI puramente presentacional.


#### 4. Evitar Re-renderizados Innecesarios

1. Usar useCallback y useMemo Estratégicamente

Práctica: Utiliza useCallback para memorizar funciones callbacks y useMemo para memorizar valores de cómputo intensivo o referencias de objetos/arrays.

##### Advertencia: Solo haz esto si has identificado un cuello de botella de rendimiento real. El uso excesivo puede empeorar el rendimiento


2. Usar React.memo

##### Práctica: Si un componente de presentación se re-renderiza innecesariamente a menudo, envuélvelo en React.memo
Esto hace que React omita el re-renderizado si sus props no han cambiado.

```
// El componente no se re-renderizará a menos que cambien sus props
export default React.memo(MiComponentePresentacional);
```



### Prácticas para el estado global

##### Se refiere a los datos compartidos por muchos componentes, a menudo distantes en el árbol. 

Ayuda a evitar el "prop drilling" y asegura que tu aplicación sea predecible y performante.

Se pueden usar soluciones nativas (Context API) como librerías externas:


#### 1. Principios de Diseño y Estructura

1. Divide y Vencerás (SRP)

Práctica: Nunca uses un único store o Contexto monolítico para toda la aplicación.

Razón: Si tienes un solo GlobalContext, cualquier cambio en cualquier parte de la aplicación (ej. el tema cambia) forzará el re-renderizado de todos los componentes suscritos
incluso si solo necesitan el estado de autenticación.

Solución: Crea múltiples Contextos o múltiples slices de Redux/Zustand
cada uno con una responsabilidad única (ej., AuthContext, ThemeContext, CartContext).


2. Diferencia el Estado del Servidor

##### Práctica: Separa el estado que proviene de APIs (datos de usuario, listas de productos) 
del estado de la interfaz de usuario (el tema, las preferencias del usuario).

Solución: Utiliza librerías dedicadas a la gestión del Estado del Servidor (como TanStack Query o SWR).
Estas herramientas manejan de forma automática el caching, la revalidación y la desduplicación, aliviando la carga del Contexto o Redux.


#### 2. Uso Eficiente de Context API (Nativo)

1. Usa Contexto para Datos Estables

##### Práctica: La Context API es más adecuada para datos que no cambian con alta frecuencia (ej. usuario autenticado, configuración de idioma, tema).

Razón: Como se mencionó, Context API re-renderiza a todos los consumidores cuando el valor del Provider cambia
Úsala para datos que rara vez cambian.


2. Combina Contexto y useReducer

##### Práctica: Para la gestión de estado global que es complejo (ej. un carrito de compras)

##### utiliza la combinación useReducer (para la lógica de actualización centralizada

##### + Context API (para la distribución).

Esto aplica el SRP; el Reducer maneja la complejidad de la lógica, mientras que el Contexto solo se encarga de la distribución.


3. Optimiza el Consumo con Custom Hooks

Práctica: No llames a useContext(MiContexto) directamente en muchos lugares
Crea un Custom Hook que lance un error si el Contexto no está disponible.

Ejemplo: const useAuth = () => useContext(AuthContext);


#### 3. Uso de Librerías (Redux, Zustand, Recoil)

1. Redux Toolkit (No Redux Puro)

Práctica: Si eliges Redux, utiliza Redux Toolkit (RTK).

Razón: RTK elimina el código repetitivo (boilerplate) excesivo de Redux puro, simplifica la configuración y viene con herramientas integradas como Redux Thunks y el manejo de immer, lo que hace que el código sea inmutable de forma sencilla.


2. Herramienta Adecuada a la Escala

##### Práctica: No adoptes Redux o TanStack Query para una aplicación de 10 componentes.

##### Guía: Pequeña/Mediana: Context API + useReducer

##### Mediana/Grande con Estado de UI Simple: Zustand o Recoil (más sencillos de implementar que Redux).

##### Grande con Lógica Crítica: Redux Toolkit (si necesitas estricta trazabilidad y un gran ecosistema de herramientas).


3. Mantén las Acciones Específicas (Redux/useReducer)

##### Práctica: Cuando uses dispatch (en Redux o useReducer), las acciones deben describir qué sucedió (el evento), no cómo debe cambiar el estado (la mutación).

Mal		SET_IS_LOADING_TRUE
Bien	USER_LOGIN_REQUESTED
Bien	FETCH_PRODUCTS_FAILED



### Caching en React

##### Práctica de almacenar temporalmente los datos recuperados de una API (Estado del Servidor) o los resultados de cálculos complejos

Para que no necesiten ser solicitados de nuevo o recalculados en el futuro cercano.

El objetivo principal es mejorar drásticamente el rendimiento y la experiencia del usuario al evitar peticiones de red innecesarias y reducir los tiempos de carga.


#### Tipos de Caching

1. Caching de Datos (Estado del Servidor)

Es el tipo más importante y complejo.

Se aplica a los datos que provienen de APIs externas (ej. la lista de productos, los detalles del usuario).

##### Problema: Gestionar cuándo un dato en caché es obsoleto (stale) y necesita ser actualizado (revalidado).

Herramientas Clave: TanStack Query (React Query) o SWR.


2. Caching de Resultados/Valores (Memorización)

Se aplica a los resultados de funciones o valores que son costosos de calcular, dentro del propio componente React.

##### Problema: Evitar el recálculo innecesario durante los re-renderizados del componente.

Herramientas Clave: useMemo y useCallback.


#### Caching de Datos con Librerías Especializadas (Recomendado)

Las librerías de Gestión de Estado del Servidor son la forma estándar y más efectiva de manejar el caching de datos de la API.


1. El Modelo Stale-While-Revalidate (SWR)

Este es el modelo adoptado por TanStack Query y SWR, y es la clave del caching moderno en React:

Stale (Obsoleto): Cuando un componente solicita datos, la librería devuelve inmediatamente la versión en caché (aunque sea obsoleta) para que la UI no muestre un estado de carga.

Revalidate (Revalidar): En segundo plano, la librería realiza una nueva solicitud a la API.

Fresh (Fresco): Si los datos de la API han cambiado, la caché se actualiza y la UI se renderiza con la nueva información. Si no cambiaron, la UI no se toca.


2. Funcionalidades de Caching

Tiempo de vida del Cache (TTL)	Define cuánto tiempo un dato permanece en el caché (ej., 5 minutos).	Evita que se recargue un recurso si se navega rápidamente entre páginas

Tiempo de vida del Stale (StaleTime)	Define cuándo un dato debe considerarse "obsoleto" y por lo tanto, es candidato a ser revalidado.	Controla el comportamiento de revalidación.

Desduplicación	Si 10 componentes solicitan el mismo dato, la librería solo realiza una solicitud de red.	Reduce significativamente la carga del servidor

Revalidación en Foco	Reactiva automáticamente la solicitud cuando el usuario vuelve a enfocar la pestaña del navegador.	Asegura que los datos sean frescos cuando el usuario regresa a la aplicación


#### Caching de Resultados con Hooks de Memorización

El caching de memorización en React se utiliza para optimizar el rendimiento dentro de un componente

evitando recálculos costosos o la creación de nuevas referencias de funciones/objetos en cada re-renderizado.


1. useMemo (Memorizar Valores)

Propósito: Almacena en caché el resultado de una función para que solo se vuelva a ejecutar si una de sus dependencias ha cambiado.

Uso: Ideal para filtros, cálculos complejos o para garantizar que un objeto que se pasa como prop a un componente React.memo mantenga la misma referencia de memoria.

```
// El cálculo costoso solo se ejecuta si 'lista' o 'filtro' cambian
const productosFiltrados = useMemo(() => {
  return lista.filter(p => p.categoria === filtro);
}, [lista, filtro]);
```


2. useCallback (Memorizar Funciones)

Propósito: Almacena en caché la definición de una función callback, garantizando que la referencia de la función sea la misma entre re-renderizados.

Uso: Fundamental cuando se pasa una función como prop a un componente hijo envuelto en React.memo. 

Si no se usa useCallback, el componente hijo se re-renderizaría innecesariamente, ya que la función se recrea en cada render del padre.

```
// La función solo se recrea si 'userId' cambia
const handleLogout = useCallback(() => {
  api.logout(userId);
}, [userId]);
```


##### El caching eficiente en React se logra combinando estratégicamente la gestión de datos del servidor (TanStack Query/SWR) con la memorización de la UI (useMemo/useCallback).



### Lógica de negocio en React 

##### Reglas, procesos y algoritmos que definen cómo se gestionan y manipulan los datos para resolver problemas del mundo real específicos de tu aplicaci

(ej. calcular descuentos, validar un formulario de pago, determinar si un usuario tiene permiso para acceder a una característica, o enviar una orden de compra).

Separar esta lógica de negocio de los componentes de la interfaz de usuario (UI).


#### 1. Principio fundamental: SRP

##### Los componentes de React deben centrarse en la presentación (cómo se ve la UI)

##### Mientras que la lógica de negocio y la gestión de datos deben residir en capas separadas.


##### Componentes Puros de Presentación (Dumb Components)

Responsabilidad: Renderizar la UI

Contienen: HTML/JSX, estilos, manejo de eventos básicos.

Reciben: Datos y funciones de callback a través de props.


##### Capa de Lógica (Smart Components/Hooks)

Responsabilidad: Gestionar el estado, llamar a APIs, aplicar reglas de negocio, y decidir qué se renderiza.

Contienen: Custom Hooks, useEffect, useState, y funciones de dispatch (Redux/Context).


#### 2. Herramientas para la Abstracción de Lógica

##### Extraer la lógica en React utilizando Custom Hooks y Módulos de Servicios/Utilidades.


1. Custom Hooks (use...)

Herramienta más poderosa para la lógica de negocio

##### Acoplada al ciclo de vida de un componente o que depende del estado de React


Recuperación de Datos:

useFetchUser(userId)

Encapsula fetch o axios, maneja isLoading y error.


Formularios/Validación:

useForm(initialState, validationSchema)

Maneja el estado de los inputs, la lógica de validación, y el handleSubmit.


Lógica Temporal:

useTimer(seconds)

Encapsula setInterval y el estado del tiempo restante.


##### Permiten reutilizar la lógica de estado y efectos secundarios entre múltiples componentes sin duplicación de código.


2. Módulos de Servicios o Utilidades

##### Utiliza archivos .js o .ts simples (sin código de React) para la lógica que no depende del ciclo de vida de React (ni de useState, useEffect, etc.).

utils.js: Funciones puras (ej. formatCurrency(amount), calculateDiscount(price, rate)).

services.js: Encapsula las llamadas a la API (ej. api.createOrder(data), api.updateUser(id, data)).

```
// utilities/calculadora.js
export const calcularIVA = (monto) => {
  return monto * 0.21; // Lógica de negocio
};
```


#### 3. Gestión de Lógica Centralizada

##### Para la lógica de negocio que afecta a la aplicación global, se requiere centralización a través de un sistema de gestión de estado avanzado.


1. Redux/Zustand (Acciones y Reducers)

Lógica en Reducers: Si usas Redux o useReducer, la lógica de negocio debe residir en el reducer (cómo el estado cambia) o en las acciones (Thunks).

Ejemplo: La lógica de "añadir al carrito" (verificar stock, calcular el subtotal) se define en el reducer del carrito.


2. Selectores

Práctica: En lugar de calcular datos derivados directamente en el componente, utiliza Selectores (en Redux o Zustand).

Ejemplo: En lugar de calcular el total del carrito en el componente, un selector (selectCartTotal) maneja esa lógica y solo se recalcula cuando los elementos del carrito cambian.


#### Adicionales

Validación de Datos: Centraliza toda la validación (formularios, datos de entrada) usando librerías como Yup o Zod o con un Custom Hook (useForm).

Inmutabilidad: La lógica de negocio que manipula el estado (local o global) siempre debe hacerlo de forma inmutable
Esto es crucial para que React detecte los cambios correctamente y evita bugs.

Pruebas Unitarias: Al aislar tu lógica de negocio en Custom Hooks y módulos puros, puedes escribir pruebas unitarias fácilmente (sin necesidad de renderizar componentes) para verificar que tus reglas de negocio funcionen correctamente.



### Diseño de UI 

##### Se centra puramente en la Composición de Componentes, la Presentación, la Estilización y el Mantenimiento de la interfaz.

Crear componentes que sean reutilizables, visualmente consistentes y desacoplados de cualquier gestión de estado o API.


#### 1. Arquitectura de Componentes: Atomic Design

Aplicar un sistema modular, siendo el Diseño Atómico (Atomic Design) el más popular


1. Componentes Presentacionales (Dumb Components)

Rol: Son componentes puros que solo se preocupan por cómo se ven.

##### Responsabilidad Única: Reciben datos y funciones de callback exclusivamente a través de props.
No tienen estado local (excepto tal vez para gestionar la UI, como si un tooltip está abierto) y no hacen llamadas a la API.

Ejemplo: Un componente Boton, Tarjeta, Modal.


2. Componentes Contenedores (Smart Components)

Rol: Son responsables de la lógica y el estado (ya sean datos de useState, Redux o TanStack Query).

##### Responsabilidad: "Alimentan" a los componentes presentacionales con los datos que necesitan

Ejemplo: ContenedorProductos, PerfilUsuarioPage.


3. Estructura de Carpetas

##### Organiza la estructura de tus componentes para reflejar esta separación:

components/ui/ o components/atoms/: Para componentes presentacionales genéricos y reutilizables (ej. Boton, Input, Icono).

components/layouts/ o components/templates/: Para estructuras de alto nivel (ej. Header, Sidebar, Footer).

pages/ o views/: Componentes contenedores que generalmente están conectados al router y manejan la lógica de la vista (ej. LoginPage, DashboardPage).


#### 2. Estilización y Consistencia

1. Estilización Modular

Utiliza enfoques que aseguren que los estilos de un componente no afecten a otros (aislamiento):

CSS Modules: Crea un archivo CSS/SCSS dedicado (ej. Boton.module.css).
). Los nombres de las clases se hash automáticamente para el alcance local.

CSS-in-JS (Ej. Styled Components): Permite escribir CSS dentro de archivos JavaScript.
Excelente para pasar props que modifican los estilos (ej. <Button $variant="primary" />).


2. Props de Estilo

Práctica: Permite que los componentes presentacionales sean flexibles aceptando className o style como props (si es necesario) para sobrescribir el estilo desde el componente padre.

Ventaja: Permite pequeños ajustes de diseño sin tener que modificar el archivo original del componente.


3. Crear un Tema (Theming)

Práctica: Define un conjunto de colores, tipografías y espaciados de forma centralizada (ej. theme.js).

##### Implementación: Utiliza la Context API o herramientas de tu librería de estilos para pasar este tema a todos los componentes
garantizando la consistencia visual (ej. todos los botones primary tienen el mismo color, fuente y radio).


#### 3. Optimización y Mantenimiento de la UI

1. Memorización de Componentes Puros

Práctica: Envuelve los componentes presentacionales que no cambian a menudo en React.memo

##### Razón: Si un componente presentacional recibe las mismas props entre re-renderizados del padre
React.memo evita que se re-renderice innecesariamente, mejorando el rendimiento.


2. Prop Types o TypeScript

Práctica: Define las props que espera tu componente de forma explícita

TypeScript: Ofrece seguridad de tipo en tiempo de compilación.

Prop Types: Ofrece validación de tipo en tiempo de ejecución.

Ambos mejoran la documentación de los componentes, facilitando su uso por otros desarrolladores.


3. Definición de Valores por Defecto

##### Práctica: Utiliza defaultProps (o valores por defecto en la desestructuración de props) para definir el comportamiento estándar del componente.

```
// Buen diseño de UI
const Boton = ({ children, onClick, disabled = false }) => (
  <button disabled={disabled} onClick={onClick}>
    {children}
  </button>
);
```


#### Lógica de UI

##### Reglas y decisiones que determinan qué se muestra, cuándo se muestra y cómo se optimiza la visualización de la interfaz de usuario

Esta lógica debe estar desacoplada de la lógica de negocio y de los datos de la API.


#### 1. Composición y Renderizado

La lógica de UI se define principalmente por cómo compones tus componentes y cómo decides mostrarlos.


1. Renderizado Condicional Explícito

Práctica: Evita el abuso de los operadores ternarios anidados
Para condiciones complejas o múltiples, usa la estructura if / else o la sentencia switch fuera del return de JSX.

Razón: Mejora la legibilidad del JSX.

```
// Mal: JSX saturado de lógica
return (
  {isLoading ? (
    <Spinner />
  ) : error ? (
    <ErrorMessage message={error} />
  ) : (
    <ItemList items={data} />
  )}
);

// Bien: Lógica de renderizado separada
if (isLoading) return <Spinner />;
if (error) return <ErrorMessage message={error} />;
return <ItemList items={data} />;
```


2. Encapsular la Lógica de Renderizado en Funciones

Práctica: Si tienes una subsección de la UI que se renderiza condicionalmente o que tiene una lógica compleja 
(ej. renderizar el estado de un pedido), crea una función auxiliar dentro del componente que devuelva el JSX.

```
const renderEstadoPedido = (estado) => {
  switch (estado) {
    case 'PENDIENTE': return <Tag variant="warning">Pendiente</Tag>;
    case 'ENVIADO': return <Tag variant="info">Enviado</Tag>;
    default: return <Tag variant="success">Completado</Tag>;
  }
};
// ...
return <div>{renderEstadoPedido(pedido.status)}</div>;
```


3. Uso de Early Returns

Práctica: Utiliza la sentencia return tan pronto como se cumpla una condición crítica
(ej. el componente está cargando, hay un error, o no hay datos).

Razón: Mantiene el código plano y evita anidamientos profundos, ya que la lógica principal de renderizado solo se ejecuta cuando todas las condiciones iniciales están satisfechas.


#### 2. Optimización del Renderizado (Rendimiento)

La lógica de renderizado debe ser eficiente para evitar re-renderizados innecesarios, que es la causa principal de los problemas de rendimiento en React.


1. Memorización de Componentes Puros

##### Práctica: Envuelve los componentes presentacionales (aquellos que solo reciben props y no tienen estado ni efectos secundarios complejos) en React.memo.

Condición: Solo se re-renderizarán si sus props cambian.
Esto es vital para listas grandes o componentes complejos.


2. Uso Estratégico de useMemo y useCallback

Práctica: Utiliza useMemo para memorizar valores y useCallback para memorizar funciones.

Propósito: Evitar que se creen nuevas referencias en cada render, lo cual rompería la optimización de React.memo en los componentes hijos.

```
// useMemo para memorizar un objeto complejo (evita re-renderizado del hijo)
const estilos = useMemo(() => ({ color: theme.color, fontSize: '16px' }), [theme.color]);

// useCallback para memorizar una función (evita re-renderizado del hijo)
const handleClick = useCallback(() => { /* ... */ }, [dependency]);
```


3. Listas con Claves Únicas (key)

Práctica: Cuando renderices una lista de elementos (.map()), usa una clave (key) que sea estable y única dentro de la lista (idealmente un id de la API).

Razón: Permite que React identifique qué elementos han cambiado, se han añadido o eliminado de manera eficiente, optimizando la manipulación del DOM.
Nunca uses el índice del array (i) como clave si la lista puede cambiar de orden.


#### 3. Separación de Lógica (SRP)

1. Componente de Estado de Carga

Práctica: Crea un componente presentacional dedicado (ej. <Loading /> o <Spinner />) y un componente de error (<ErrorMessage />).

Razón: La lógica que decide si mostrar el contenido, el spinner o el error es lógica de renderizado
debe estar separada de la lógica de negocio y presentación del contenido principal.


2. Lógica de Presentación en Custom Hooks

##### Práctica: Si tienes una lógica de UI reutilizable (ej. lógica de paginación, alternar un modal),
extráela a un Custom Hook (ej. usePagination, useToggle).

##### Razón: Deja el componente principal limpio y fácil de leer, y permite la reutilización de esa lógica

```
// Custom Hook para lógica de UI
const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue(prev => !prev), []);
  return [value, toggle];
};

// Componente de UI limpio
const MiModal = () => {
  const [isOpen, toggleOpen] = useToggle(false); // Lógica de UI abstraída
  // ...
};
```


### CSS

#### 1. Estilización Modular (Aislamiento Total)

Asegurar que los estilos de un componente no afecten a otros (cero fugas de estilos).

1. CSS Modules

Uso: El enfoque más simple y nativo para lograr el aislamiento
Creas un archivo CSS/SCSS con la extensión .module.css (ej. Boton.module.css).

Mecanismo: El build system (como Webpack o Vite) renombra automáticamente las clases, añadiendo un hash único al final (ej. Boton_primario__3aBcD).
Esto garantiza que la clase primario definida en tu Boton no afecte a una clase primario definida en Tarjeta.

Práctica: Importa el objeto de estilos y accede a las clases como propiedades.

```
// Boton.jsx
import styles from './Boton.module.css';

const Boton = ({ children }) => (
  <button className={styles.primario}>
    {children}
  </button>
);
```


2. CSS-in-JS (Styled Components / Emotion) 

Uso: Estiliza los componentes directamente en JavaScript, creando componentes de React con estilos adjuntos

Mecanismo: Las librerías generan clases únicas en tiempo de ejecución o de compilación, aislando los estilos a nivel de componente

Práctica: Útil para cuando necesitas que los estilos cambien dinámicamente según las props.

```
// 🟢 Boton.jsx
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


#### Diseño Basado en Props

##### Los componentes presentacionales deben ser flexibles y cambiar su apariencia basándose en las props que reciben.


1. Props de Variante (La Mejor Práctica)

Práctica: Define un conjunto limitado y semántico de variantes de estilo que el consumidor puede elegir 
(ej. primary, secondary, outline).
    
Ventaja: El componente es fácil de usar y se adhiere a la guía de estilo de la aplicación.

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


2. Permitir Sobrescritura Controlada

Práctica: Permite que el consumidor inyecte sus propias clases usando la prop className para ajustes menores de layout (ej. margen o tamaño).

Razón: Acepta className y úsalo al final de la lista de clases para que el estilo del consumidor tenga prioridad.

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


#### 3. Estilos Globales y Temas

##### Los estilos que son consistentes en toda la aplicación (tipografía, colores, espaciado) deben centralizarse y no definirse dentro de cada componente presentacional.

1. Variables CSS

Práctica: Define colores, fuentes y espaciados clave usando Variables CSS (o tokens de diseño).

Ventaja: Permite que la estilización sea dinámica y simplifica el cambio de tema de toda la aplicación.

```
/* variables.css (o theme.css) */
:root {
  --color-primary: #007bff;
  --spacing-md: 1rem;
}

/* Boton.module.css */
.primario {
  background-color: var(--color-primary);
  padding: var(--spacing-md);
}
```


2. El Componente ThemeProvider

Práctica: Si utilizas CSS-in-JS, define tu tema (ej. modo oscuro/claro) en un Contexto
expón un componente ThemeProvider que inyecte los valores a todos los componentes presentacionales.

Razón: Los estilos serán coherentes y reaccionarán a los cambios globales de tema.


#### 4. Rendimiento y Mantenimiento

Evitar Estilos Inline: Usa estilos inline (style={{ color: 'red' }}) solo para valores que son verdaderamente dinámicos (ej. animación, posición de un componente). 
Evítalos para estilos estáticos, ya que son difíciles de sobrescribir, no permiten pseudo-clases y no aprovechan el caching de las hojas de estilo.

Especificidad Baja: Cuando escribas CSS modular, intenta mantener la especificidad baja
Usa nombres de clases simples o anidamiento de componentes, en lugar de selectores complejos (div > p > a).

Clases Condicionales: Usa plantillas literales para aplicar clases condicionalmente basadas en el estado de la UI
(ej. disabled, active, open).

```
const MiInput = ({ isValid }) => (
  <input className={`${styles.input} ${isValid ? '' : styles.error}`} />
);
```


### Componente Presentacional

##### Ej: TarjetaProducto, solo se preocupa por cómo se ve y qué hace cuando se le pide (mediante una función callback),

Sin tener conocimiento de la lógica de negocio ni del estado global.

##### Recibe todos sus datos y funciones de acción a través de sus props

##### No tiene estado local complejo ni efectos secundarios


1. Código del Componente (TarjetaProducto.jsx)

```
// 🟢 TarjetaProducto.jsx

import React from 'react';
import PropTypes from 'prop-types';
import styles from './TarjetaProducto.module.css'; // Usando CSS Modules para aislamiento

/**
 * Componente presentacional que muestra los detalles de un producto.
 * Es totalmente controlado por sus props.
 */
const TarjetaProducto = ({ nombre, precio, stock, imagenUrl, onAgregarAlCarrito }) => {
  // Lógica de UI/Renderizado (qué mostrar basado en el stock)
  const isAvailable = stock > 0;
  
  return (
    <div className={styles.tarjeta}>
      <img src={imagenUrl} alt={nombre} className={styles.imagen} />
      
      <div className={styles.cuerpo}>
        <h3 className={styles.nombre}>{nombre}</h3>
        <p className={styles.precio}>${precio.toFixed(2)}</p>
        
        {/* Renderizado condicional basado en el estado de la UI */}
        <p className={isAvailable ? styles.stock : styles.sinStock}>
          {isAvailable ? `En stock: ${stock}` : 'Agotado'}
        </p>
        
        <button
          className={styles.boton}
          onClick={onAgregarAlCarrito} // Función callback recibida por props
          disabled={!isAvailable} // Lógica de UI: deshabilitar si no hay stock
        >
          {isAvailable ? 'Añadir al Carrito' : 'Sin Stock'}
        </button>
      </div>
    </div>
  );
};

// 💡 Buena Práctica: Definición explícita de props
TarjetaProducto.propTypes = {
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  imagenUrl: PropTypes.string,
  onAgregarAlCarrito: PropTypes.func.isRequired,
};

TarjetaProducto.defaultProps = {
  imagenUrl: '/placeholder.jpg',
};

export default TarjetaProducto;
```


2. Estilos Asociados (TarjetaProducto.module.css)

```
/* TarjetaProducto.module.css */

.tarjeta {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    max-width: 300px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.imagen {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 10px;
}

.precio {
    font-size: 1.25rem;
    color: #007bff;
    font-weight: bold;
}

.stock {
    color: green;
    font-size: 0.85rem;
}

.sinStock {
    color: red;
    font-size: 0.85rem;
    font-weight: bold;
}

.boton {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
    width: 100%;
}

.boton:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
}
```

#### Características del componente presentacional

##### 1. Datos por Props: No tiene estado propio (useState o useReducer) ni llama a APIs (useEffect).

Recibe nombre, precio, stock, etc., listos para usar.


##### 2. Acciones por Callbacks: La función onAgregarAlCarrito es un callback.

No sabe cómo se implementa esa lógica (si usa Redux, Context, o una llamada a la API); solo sabe cuándo debe ejecutarla.


##### 3. Lógica de UI Pura: Solo contiene lógica que afecta al renderizado visual (ej. isAvailable, deshabilitar el botón, cambiar el color del texto).


##### 4. Aislamiento de Estilos: Utiliza CSS Modules (TarjetaProducto.module.css) para asegurar que sus estilos están completamente aislados y no afectarán a otros componentes


Un Componente Contenedor sería el encargado de obtener los datos del producto (mediante useFetch o TanStack Query)

y de pasar la función real de "agregar al carrito" (que contiene la lógica de negocio) a este componente.



### Componente Lógico

Componente Contenedor o Smart Component

##### Su objetivo es gestionar el estado, la lógica de negocio y la recuperación de datos

##### Luego pasar esos datos a su contraparte, el Componente Presentacional (como el TarjetaProducto que vimos antes), delegándole la responsabilidad de cómo se ve.

##### Usaremos un Custom Hook para la lógica de datos, que es la práctica moderna recomendada.


Lógica de Datos en un Custom Hook

Custom Hook para encapsular la lógica de recuperación de datos (simulando una llamada a una API).

1. Custom Hook para encapsular la lógica de recuperación de datos (simulando una llamada a una API).

```
// 🟢 hooks/useProducto.js
import { useState, useEffect } from 'react';
import axios from 'axios'; // Usaremos Axios para simular la API

// Custom Hook para gestionar el estado del producto
const useProducto = (id) => {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  
  // Lógica de negocio: Simulación de llamada a la API
  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const res = await axios.get(`/api/productos/${id}`); // Llama a la API
        setProducto(res.data);
      } catch (err) {
        setError("No se pudo cargar el producto.");
      } finally {
        setCargando(false);
      }
    };
    fetchProducto();
  }, [id]); // Dependencia del ID
  
  // Lógica de Negocio: Simulación de la función de agregar al carrito
  const agregarAlCarrito = (idProducto) => {
      // Esta es la LÓGICA DE NEGOCIO real: 
      // Aquí se llamaría a Redux, Context o a otra API para añadir el ítem.
      console.log(`[LÓGICA DE NEGOCIO] Producto ID ${idProducto} añadido al carrito.`);
      // ... Llama a la API /carrito/add
      // ... Muestra una notificación Toast
  };

  // Devuelve el estado y las funciones de acción
  return { producto, cargando, error, agregarAl carrito };
};

export default useProducto;
```


2. Componente Lógico/Contenedor

##### Componente usa el Custom Hook y decide qué mostrar (lógica de renderizado) y qué datos pasar.

Componente Lógico (ContenedorProducto.jsx)

```
// 🟢 ContenedorProducto.jsx (Componente Lógico/Contenedor)

import React from 'react';
// Asumimos que el componente presentacional (TarjetaProducto) existe
import TarjetaProducto from '../components/presentacionales/TarjetaProducto'; 
import useProducto from '../hooks/useProducto';
import { useParams } from 'react-router-dom'; // Asumimos React Router

const ContenedorProducto = () => {
  // 1. Lógica de UI: Leer el ID del router
  const { id } = useParams(); 
  
  // 2. Lógica de Datos y Negocio: Usar el Custom Hook
  const { 
    producto, 
    cargando, 
    error, 
    agregarAlCarrito 
  } = useProducto(id); 

  // 3. Lógica de Renderizado (UI Logic)
  if (cargando) {
    return <h1>Cargando detalles del producto...</h1>;
  }

  if (error) {
    return <h1 style={{ color: 'red' }}>{error}</h1>;
  }

  if (!producto) {
      return <h1>Producto no encontrado.</h1>;
  }
  
  // 4. Delegación: Pasar los datos y las funciones de acción al presentacional
  return (
    <TarjetaProducto
      nombre={producto.nombre}
      precio={producto.precio}
      stock={producto.stock}
      imagenUrl={producto.imagen}
      
      // Se pasa la función de LÓGICA DE NEGOCIO como callback
      onAgregarAlCarrito={() => agregarAlCarrito(producto.id)} 
    />
  );
};

export default ContenedorProducto;
```


#### Características del componente lógico

1. Lógica de Datos Centralizada: Utiliza useProducto para gestionar cargando, error y el objeto producto.

2. Lógica de Renderizado Condicional: Contiene las sentencias if (cargando) y if (error), decidiendo qué estado de la UI mostrar.

3. Lógica de Negocio: Define la función agregarAlCarrito (aunque simulada), que representa una acción crítica del negocio.

El TarjetaProducto presentacional no tiene conocimiento de estas dependencias.



### Organización Común de Componente Lógico

separamos los componentes Lógicos (Contenedores) de los Presentacionales

extraemos la lógica de negocio a Custom Hooks.


#### Estructura Modular

##### organizar el código por tipo de artefacto (hooks, components, pages)

##### luego por funcionalidad o dominio (auth, products, checkout).

```
src/
├── api/             # Lógica de SERVICIOS (Llamadas Axios/Fetch)
│   ├── auth.js
│   └── products.js
│
├── hooks/           # Lógica de NEGOCIO y Estado (Custom Hooks)
│   ├── useAuth.js         
│   ├── useForm.js         # Lógica reutilizable de formularios
│   └── useProducts.js     # Lógica de fetching/mutación de productos
│
├── components/
│   ├── ui/          # Componentes PRESENTACIONALES genéricos (Dumb)
│   │   ├── Button/
│   │   ├── Card/
│   │   └── Spinner/
│   │
│   ├── domain/      # Componentes PRESENTACIONALES específicos al dominio
│   │   └── ProductCard/ # Usa 'Button', no conoce la lógica de agregar al carrito
│   │
│   └── smart/       # Componentes LÓGICOS (Contenedores/Smart)
│       └── ProductContainer/ 
│           ├── ProductContainer.jsx  # Usa useProducts.js, pasa datos a ProductCard
│           └── index.js
│
└── pages/           # Componentes de RUTA (Containers/Smart)
    ├── Auth/
    │   ├── LoginPage.jsx        # Llama a useForm y useAuth para manejar el login
    │   └── RegisterPage.jsx
    │
    ├── Products/
    │   ├── ProductsPage.jsx     # Un Contenedor simple que lista ProductContainer
    │   └── ProductDetailPage.jsx
    │
    └── App.jsx
```


1. hooks/ (Inteligencia)

Responsabilidad: Contiene la lógica central de la aplicación.

Conexión: Consume los servicios de api/.

Devuelve: El estado (data, isLoading, error) y las funciones de acción (addProduct, login).


2. components/smart/ y pages/ (La Decisión)

Responsabilidad: Son los Componentes Lógicos/Contenedores.

Páginas: Conectadas al router (/productos). Tienen la responsabilidad de organizar la vista.

Smart Components: Contenedores que se reutilizan en varias páginas (ej. un UserWidget que se muestra en varias páginas).


Conexión:

Llama al hooks/ (ej. useProducts).

Implementa la Lógica de Renderizado (if (isLoading)).

Pasa los datos y las funciones de acción a los Componentes Presentacionales de components/ui/ o components/domain/.


3. components/ui/ y components/domain/ (La Presentación)

Responsabilidad: Son los Componentes Presentacionales. Solo reciben props y renderizan JSX.

Conexión: Solo reciben los datos ya procesados (ej. el nombre, precio ya formateados) y los callbacks (ej. onAddToCart). No conocen los hooks ni las apis. 


Asegura un alto grado de cohesión (los elementos relacionados están juntos) y bajo acoplamiento (los cambios en la API no afectan a la UI, solo a los hooks).


### Organización de Componente Presentacional

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
    │   │
    │   ├── Input/
    │   │   ├── Input.jsx
    │   │   └── Input.module.css
    │   │
    │   ├── Icon/
    │   │   └── Icon.jsx         # Solo recibe name y size
    │   │
    │   ├── Card/
    │   │   └── Card.jsx
    │   │
    │   └── Spinner/
    │       └── Spinner.jsx      # Componente de carga
    │
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

1. components/ui/ (Átomos/Moléculas)

Rol: Son los bloques de construcción más pequeños y genéricos. No tienen conocimiento de la lógica de negocio.

Responsabilidad: Deben ser reutilizables en cualquier parte de la aplicación.

Contenido: Un solo archivo de componente (.jsx) y su archivo de estilos (.module.css o .js si usas CSS-in-JS) deben estar juntos en una misma carpeta.


2. components/layouts/ (Organismos/Plantillas)

Rol: Definen la estructura principal de la interfaz de usuario.

Responsabilidad: Componen varios componentes de la capa ui/ para formar secciones completas (ej. el Header combina un Logo, un Button y la Nav).

Nota: En una aplicación con Rutas Anidadas, el Layout.jsx a menudo es el componente padre que contiene el <Outlet>.


3. components/domain/ (Presentacionales Específicos)

Rol: Componentes de presentación que son específicos de un dominio de negocio (ej. ProductCard, UserAvatar, CheckoutSummary).

Responsabilidad: Aunque son presentacionales, usan la terminología del negocio. Estos componentes componen los elementos básicos de la capa ui/.

Ejemplo: ProductCard.jsx usa el <Card> y el <Button> genéricos


4. styles/ (La Base Visual)

Rol: Contiene la Guía de Estilo de la aplicación.

Responsabilidad: Definir las variables CSS o tokens de diseño para asegurar que el color, la tipografía y el espaciado sean uniformes en todos los componentes de la biblioteca de UI.



### CSS Modules

##### Resuelve el problema principal del CSS tradicional: el alcance global de los selectores.

##### Archivo CSS o SCSS en el que todos los nombres de clases y animaciones están aislados localmente por defecto


En el CSS estándar, si defines una clase .button en un archivo y defines otra clase .button en otro archivo diferente, ambas clases colisionarán globalmente, y la última cargada sobrescribirá a la anterior.

CSS Modules resuelve esto al garantizar que cada nombre de clase sea único a nivel global.


El flujo de CSS Modules ocurre durante el proceso de build de tu aplicación (generalmente manejado por herramientas como Webpack o Vite):

1. Definición Local: Creas tu archivo CSS con una convención de nomenclatura específica 
(ej. `[NombreComponente].module.css`).

2. Generación de Hash: El sistema de build toma el nombre de tu clase (ej. primario)
lo transforma en una cadena única y globalmente segura (ej. Button_primario__3jK9x).

3. Objeto JavaScript: Cuando importas el archivo CSS en tu componente, no obtienes la hoja de estilos
sino un objeto JavaScript donde las claves son tus nombres locales de clase y los valores son los nombres únicos generados


Componente React

1. Creación del Archivo de Estilos

Nombra tu archivo usando la convención .module.css (o .module.scss).

```
/* Button.module.css */

.base {
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
}

.primary {
    background-color: #007bff;
    color: white;
    border: none;
}
```


2. Importación y Aplicación en JSX

Importas los estilos como si fueran un objeto JavaScript y usas la sintaxis de plantillas literales para combinar clases.

```
// Button.jsx
import React from 'react';
// Importa los estilos como un objeto 'styles'
import styles from './Button.module.css'; 

const Button = ({ children, variant = 'primary', className }) => {
  // 1. Accede a las clases usando la notación de objeto (styles.base, styles.primary)
  // 2. Combina las clases modulares con las props externas (className)
  return (
    <button className={`${styles.base} ${styles[variant]} ${className || ''}`}>
      {children}
    </button>
  );
};

export default Button;
```


3. Resultado en el DOM

##### Si inspeccionas el elemento, verás el nombre de clase único generado, garantizando que no habrá colisiones con otros componentes.

```
<button class="Button_base__aE1pC Button_primary__zY2wD ...">
  Comprar
</button>
```


Ventajas:

Aislamiento Automático (SRP): Es la forma más fácil de garantizar que los estilos de un componente solo afecten a ese componente.

No Fugas de Estilos: No tienes que preocuparte por la especificidad o por nombrar clases largas con el patrón BEM para evitar colisiones.

Familiaridad: Sigue siendo CSS estándar, por lo que no hay una curva de aprendizaje empinada como con algunas librerías CSS-in-JS.

##### Composición de Clases: Permite importar y reutilizar selectores entre diferentes archivos de módulos CSS.



## Desarrollo Profesional y Optimización

### Testing: Testing (Jest) para probar componentes y lógica; Pruebas de Integración

##### Desarrollado y mantenido por Meta (la misma compañía detrás de React).

Jest se utiliza para probar la lógica y la funcionalidad de tu código de React

asegurando que se comporta como esperas antes de que se despliegue a producción.


#### 1. Jest

Jest es una solución de testing completa (zero configuration para muchos proyectos) que incluye:

1. Runner: El motor que ejecuta las pruebas.

2. Assertion Library: Funciones para afirmar que un valor es el esperado (ej. expect(resultado).toBe(5)).

3. Mocking Library: Herramientas para simular funciones, módulos o APIs externas.

4. Reporting: Generación de informes de cobertura de código.


#### Tipos de Pruebas

##### Unitarias (Unit Tests): La más común. Prueba la unidad más pequeña de lógica de forma aislada (ej. una función, un custom hook, un reducer).

##### Pruebas de Integración (Integration Tests): Prueba cómo interactúan varias unidades juntas (ej. un componente que usa un custom hook y llama a un servicio).


#### Sintaxis y Conceptos Clave

utiliza un conjunto de funciones globales para estructurar y realizar afirmaciones en tus pruebas.

1. Estructura de las Pruebas

Función	Propósito	Ejemplo

describe()	Agrupa un conjunto de pruebas relacionadas.	describe('Lógica de Contador', () => { ... })

test() o it()	Define una prueba individual (un escenario).	test('debe incrementar el contador', () => { ... })


2. Funciones de Configuración (Setup/Teardown)

Función	Cuándo se Ejecuta	Propósito

beforeEach()	Antes de cada prueba dentro de un describe.	Reiniciar datos o componentes para aislar pruebas.

afterAll()	Después de que todas las pruebas en el describe hayan terminado.	Limpiar recursos globales (ej. cerrar una conexión a DB simulada).


3. Afirmaciones (Matchers)

La función expect(value) crea una afirmación, y los matchers comprueban el valor:

Matcher	Descripción	Ejemplo

.toBe(value)	Verifica la igualdad estricta (primitivos).	expect(2 + 2).toBe(4)

.toEqual(object)	Verifica la igualdad de valor (objetos y arrays).	`expect(array1).toEqual([1, 2, 3])`

.toHaveBeenCalled()	Verifica si una función simulada fue llamada.	expect(mockFn).toHaveBeenCalled()

.toBeInTheDocument()	(Con React Testing Library) Verifica si un elemento existe en el DOM virtual.	expect(titulo).toBeInTheDocument()


#### 3. Mocking (Simulación)

##### En las pruebas unitarias, a menudo necesitamos reemplazar las dependencias reales (APIs, librerías externas) por versiones simuladas para asegurar que solo probamos la unidad en cuestión.

jest.fn(): Crea una función simulada que registra cuándo es llamada, con qué argumentos y qué valores devuelve.

```
// Ejemplo de Mock
const miMock = jest.fn();
miMock('argumento');

expect(miMock).toHaveBeenCalledTimes(1);
expect(miMock).toHaveBeenCalledWith('argumento');
```


#### 4. Jest en React (Combinación con RTL)

Aunque Jest es el runner, no sabe cómo renderizar componentes de React y simular eventos del usuario

Por eso, se combina casi siempre con React Testing Library (RTL).

RTL: Se encarga de renderizar los componentes en un DOM virtual y proporciona métodos para interactuar con la UI de la misma manera que lo haría un usuario (ej. fireEvent.click(boton)).

Jest: Se encarga de ejecutar la prueba y proporcionar los matchers para hacer las afirmaciones.

Juntos, Jest y RTL permiten escribir pruebas de componentes que son robustas y se centran en el comportamiento visible por el usuario, no en detalles internos de implementación.


### Uso de Assertions, Mockings, Unit Tests, Integration Tests


1. Assertions (Afirmaciones)

sentencias que verifican si un valor real coincide con un valor esperado
##### Se expresan con expect() seguido de un matcher (ej. .toBe(), .toEqual()).

Uso: Siempre
parte central de cualquier prueba
##### se comprueba el comportamiento correcto de la unidad de código
##### si devolvió el valor correcto, si se renderizó el elemento esperado, etc.).


2. Mocking (Simulación)

##### Es el acto de reemplazar una dependencia real
(una función, un módulo, una llamada a la API)
con una versión controlada, o "simulada"
usando funciones como jest.fn().

##### Uso: En Pruebas Unitarias, aislar el código que estás probando
##### asegurando que las pruebas solo fallen si la unidad de código tiene un error
y no debido a fallos o cambios en sus dependencias externas.


3. Unit Tests (Pruebas Unitarias)

##### Pruebas que verifican la unidad de lógica más pequeña de forma aislada
##### (ej. una función pura, un custom hook, un componente presentacional).

Uso: Para la mayor parte del código.
Son las pruebas más rápidas, más numerosas y las que ofrecen la mayor cobertura de código
asegurando la fiabilidad de las funciones internas y la lógica pura


4. Integration Tests (Pruebas de Integración)

##### Pruebas que verifican cómo interactúan dos o más unidades de código juntas
##### (ej. un componente que llama a un custom hook que, a su vez, llama a una API simulada).

##### Uso: Para validar flujos clave
##### verificar la conexión entre diferentes partes del sistema, como un formulario que recoge datos y luego los envía correctamente a una función de negocio,
asegurando que los módulos se integran sin problemas.


#### Prácticas 

1. Assertions

##### definen lo que constituye un resultado "correcto".

Ser Específico y Semántico: Usa matchers precisos
Evita toBeTruthy() o toBeDefined() cuando puedas usar algo más específico como toBe(5), toEqual({ id: 1 }),
o en React Testing Library: toBeInTheDocument().

Limitar una Afirmación por Prueba (Idealmente): Aunque no siempre es posible, intenta que cada prueba se centre en verificar una sola cosa
Si una prueba falla, sabrás inmediatamente qué comportamiento se rompió.

Usar Queries Centradas en el Usuario (RTL): Cuando pruebes componentes de React
usa matchers que imiten la forma en que el usuario percibe la aplicación (
(ej. getByRole, getByText), en lugar de los detalles internos de la implementación.


2. Mocking

##### La simulación es clave para el aislamiento de las pruebas unitarias.

##### Simular Solo las Dependencias Externas: Solo simula lo que está fuera de la unidad que estás probando
(APIs, librerías de terceros, módulos del sistema)
No simules la lógica que deseas probar.

##### Restablecer los Mocks: Usa beforeEach o afterEach para llamar a jest.clearAllMocks() o jest.restoreAllMocks().
Esto asegura que los contadores de llamadas y los valores simulados no se "filtren" a la siguiente prueba.

##### Simular Implementaciones: Usa mockImplementation() o mockResolvedValue()
para controlar el resultado de una función simulada. Esto permite simular escenarios de éxito
(devolviendo datos) y escenarios de fallo (lanzando un error).


3. Unit Tests (Pruebas Unitarias)

son la capa base de tu estrategia de testing: rápidas, baratas de escribir y fáciles de mantener

Probar la Unidad de Lógica más Pequeña: Prueba las funciones puras, los custom hooks (aislando las dependencias)
los reducers de Redux o la lógica pura de negocio de forma aislada.

Enfocarse en la Entrada/Salida: Dado un conjunto de entradas, 
¿la unidad de código produce la salida esperada?

Usar RTL para Componentes: Cuando pruebes componentes presentacionales, usa RTL para verificar que el componente renderiza las props de entrada correctamente, pero no incluyas llamadas a APIs o lógica de estado compleja.


4. Integration Tests

##### Las pruebas de integración validan que las diferentes partes de tu sistema se conecten correctamente.

##### Probar Flujos de Trabajo Críticos: Concéntrate en escenarios clave para el negocio 
(ej. "Un usuario puede iniciar sesión", "Un usuario puede añadir un producto al carrito y completar la compra").

##### Combinar Unidades: Deja que las unidades de código interactúen 
(ej. renderizar un componente que utiliza un custom hook que, a su vez, usa un servicio de API simulado).

##### Usar Pruebas E2E para el Sistema Completo: Si necesitas verificar que toda la pila (cliente, servidor real, base de datos) funciona en conjunto
Utiliza herramientas End-to-End (E2E) como Cypress o Playwright
##### ya que las pruebas de integración de Jest/RTL aún se ejecutan en un entorno simulado de navegador y API.



### Uso de describe(), test() o it(), beforeEach(), afterAll()

1. describe()

##### Agrupa una serie de pruebas relacionadas bajo un nombre
Crea un bloque lógico de pruebas.

Úsala para organizar tus pruebas
##### Agrupa pruebas para un mismo componente, hook, o función de negocio.
Esto hace que los resultados de las pruebas sean más legibles


2. test()

##### Define una prueba individual y específica (un "caso de prueba").
Es un alias de it().

##### Siempre. Úsala para definir cada escenario que deseas verificar
(ej. "debe retornar un error si la entrada es nula").


3. it()

##### Alias de test(). Históricamente se usaba para construir frases más naturales
(ej. it('should return true')).

##### Intercambiable con test(). Elige uno y mantén la consistencia en tu proyecto
La comunidad suele preferir test() por ser más conciso, o it() por la legibilidad


4. beforeEach()

##### Se ejecuta antes de cada prueba individual (test/it)
dentro del bloque describe actual.

##### Úsala para configurar o reiniciar el estado de forma aislada.
Por ejemplo, si necesitas renderizar un componente con las mismas props
o limpiar un mock antes de cada escenario.


5. afterAll()

##### Se ejecuta una sola vez después de que todas las pruebas (test/it) en el bloque describe hayan finalizado.

##### Úsala para limpiar recursos costosos o globales.
Por ejemplo, para cerrar una conexión simulada a la base de datos
o restablecer un mock de un módulo que afectó a todo el archivo de pruebas.


#### Prácticas

1. describe() (Agrupación de Pruebas)

Agrupar por Unidad de Lógica (SRP): Un solo archivo de prueba debe contener un único describe()
que se enfoque en una única unidad de código (ej. useAuthHook.test.js tiene describe('useAuthHook'))

Nombres Descriptivos y Declarativos: El nombre del describe debe ser un sustantivo claro sobre lo que se está probando
ej. describe('Componente FormularioPago')).

Anidamiento Moderado: Puedes anidar describe() para agrupar escenarios dentro de la unidad principal
(ej. describe('cuando el usuario es administrador'))
pero evita más de dos niveles de anidamiento profundo.


2. test() / it() (Casos de Prueba)

Enfoque Único: Cada test() debe verificar un solo comportamiento o escenario.
Si falla, debes saber exactamente qué se rompió.

Nombres Orientados a la Acción: El nombre debe ser una oración completa que describa el resultado esperado
(ej. test('debe redirigir al login si el token es inválido')

Evitar Lógica dentro del test(): El cuerpo del test() debe ser mayormente la acción
(render, click, llamadaAFunción) y la afirmación (expect)
Mueve la configuración compleja a beforeEach.


3. beforeEach() (Configuración)

Aislar Pruebas: Úsalo para garantizar que cada prueba comience desde un estado inicial limpio.
Esto es fundamental para el aislamiento
(ej. limpiar el DOM, restablecer mocks de funciones o variables locales).

Evitar Repetición: Mueve la configuración común (como el render de un componente
o la inicialización de variables que todas las pruebas usan) de cada test() al beforeEach.

Usar Mocks de Estado: Si estás probando un custom hook o un componente que depende de un context o store
usa beforeEach para simular el estado inicial o el setup del proveedor necesario.


4. afterAll() (Limpieza Global)

Limpieza de Recursos Costosos: Úsalo exclusivamente para tareas de limpieza que son costosas o que se aplican a todo el archivo de pruebas
(ej. cerrar una conexión de prueba con la base de datos simulada o detener un servidor mock).

##### No para Limpieza de Estado Simple: No lo uses para restablecer variables o mocks entre pruebas
##### Ese es el trabajo de afterEach o beforeEach.

Asegurar la Terminación: Es crucial para liberar recursos y evitar que el runner de Jest se quede colgado después de la ejecución



### Uso de .toBe(value), .toEqual(object), .toHaveBeenCalled(), .toBeInTheDocument()

##### Matchers (Afirmaciones) más comunes y esenciales de Jest y React Testing Library (RTL).

1. .toBe(value)

##### Verifica la igualdad estricta de valor y tipo
(como === en JavaScript).
##### Se usa principalmente para valores primitivos (números, strings, booleanos).

##### Úsalo para afirmar que un resultado es un valor simple e inmutable.
##### También verifica si dos variables apuntan al mismo objeto en memoria
##### (aunque para objetos, generalmente prefieres .toEqual()).


2. .toEqual(object)

##### Verifica la igualdad recursiva profunda.
Compara los valores de todas las propiedades de dos objetos o arrays.

##### Úsalo para afirmar que dos objetos o arrays tienen el mismo contenido
incluso si son instancias diferentes en memoria.
##### Es esencial para comparar estados complejos o datos devueltos por funciones.


3. .toHaveBeenCalled()

##### Verifica que una función simulada (mock) ha sido ejecutada al menos una vez
Se combina con jest.fn().

##### Úsalo para afirmar que una acción (ej. hacer clic en un botón, enviar un formulario) desencadenó la llamada a una función callback o de servicio específica
##### Puedes complementarlo con .toHaveBeenCalledWith(...) para verificar los argumentos.


4. .toBeInTheDocument()

##### (De RTL) Verifica que un elemento existe en el DOM virtual y está disponible para el usuario.

##### Úsalo para afirmar que un componente se renderizó con éxito
Es el estándar para la prueba de renderizado de componentes en React
ya que se centra en lo que el usuario puede ver.


#### Prácticas

1. .toBe(value) (Igualdad Estricta)

##### Usar solo para Primitivos: Limita el uso de .toBe() a tipos de datos primitivos donde la identidad y el valor son importantes
(string, number, boolean).

##### Evitar con Objetos/Arrays: No lo uses para comparar objetos o arrays, ya que verifica la referencia de memoria
En su lugar, usa .toEqual() para comparar contenido.

##### Comparación Simple: Es ideal para afirmaciones rápidas como verificar códigos de estado (expect(res.status).toBe(200)).


2. .toEqual(object) (Igualdad de Contenido)

Estándar para Estructuras de Datos: Úsalo siempre para comparar el contenido de objetos, arrays,
o estructuras de datos complejas devueltas por funciones.

##### Inmutabilidad Implícita: Al usar .toEqual(), estás afirmando que la función devolvió una nueva estructura de datos con el contenido esperado
##### lo cual refuerza el principio de inmutabilidad en el testing de estados y reducers.

##### Ser Preciso: Si el objeto esperado es grande, puedes usar matchers anidados como expect.objectContaining({...})
##### para centrarte solo en las propiedades relevantes.


3. .toHaveBeenCalled() (Verificación de Llamadas)

##### Verificar la Acción, no el Resultado: Úsalo para confirmar que la interacción del usuario
o la lógica de la prueba desencadenó la ejecución de una función
(un callback, un handler, o un mock de servicio).

##### Complementar con Argumentos: Casi siempre debe ir acompañado de .toHaveBeenCalledTimes(N)
o toHaveBeenCalledWith(...) para verificar no solo si se llamó
sino cuántas veces y con qué argumentos correctos.

Asegurar Mocks Limpios: Usa beforeEach con jest.clearAllMocks() para reiniciar el contador de llamadas antes de cada prueba y evitar falsos positivos.


4. .toBeInTheDocument() (Renderizado de Componentes)

Estándar de RTL: Es el matcher clave de React Testing Library (RTL) para afirmar que un elemento se renderizó con éxito y es accesible.

##### Enfoque en el Usuario: Úsalo con queries centradas en el usuario (ej. screen.getByRole('button', { name: /enviar/i }))
para asegurarte de que lo que se muestra es lo que un usuario esperaría ver y poder interactuar.

##### Evitar Existencia: Úsalo para afirmar que algo existe, y usa .not.toBeInTheDocument()
##### para afirmar que un elemento (como un spinner de carga o un mensaje de error) ha desaparecido del DOM.



### Vite

##### Es una herramienta de build (build tool) moderna y un servidor de desarrollo (dev server)

Es completamente agnóstico al framework (funciona de maravilla con React, Vue, Svelte, etc.).

La característica definitoria de Vite es cómo aprovecha los módulos nativos de ES (ES Modules) en el navegador para lograr una experiencia de desarrollo casi instantánea.


Servidor de Desarrollo Ultrarrápido

Vite rompe con el enfoque tradicional de los bundlers (como Webpack o Parcel) en el desarrollo:

No Bundling Inicial: Vite no bundlea todo el código fuente al inicio. 
En su lugar, sirve los archivos directamente a través de ES Modules nativos del navegador.
El navegador se encarga de solicitar solo el código que necesita, cuando lo necesita.

Actualizaciones Rápidas (HMR): Utiliza la Sustitución de Módulos en Caliente (Hot Module Replacement - HMR) basada en ES Modules, que es increíblemente rápida
Cuando guardas un archivo, Vite solo invalida y reemplaza ese módulo en el navegador, sin recargar toda la página ni reconstruir el bundle completo.


Bundling Optimizado para Producción

Rollup: Para la construcción final de producción, Vite utiliza Rollup, que es conocido por generar bundles finales muy eficientes y con soporte para tree-shaking (eliminación de código muerto).

Tree-Shaking Eficiente: Al usar Rollup, Vite asegura que solo el código que realmente se utiliza termine en el bundle final, reduciendo el tamaño del archivo para el despliegue.


Experiencia del Desarrollador (DX)

Configuración Mínima (Zero-Config para muchos proyectos): Para proyectos estándar de React o Vue, Vite funciona prácticamente sin necesidad de un archivo de configuración complejo (a diferencia de Webpack).

Tipos de Archivos Nativos: Vite maneja archivos comunes (como .ts, .jsx, .vue) sin transformaciones complejas intermedias en desarrollo, lo que simplifica la pila.

Assets de Primera Clase: La importación de imágenes, JSON, y otros assets funciona directamente con declaraciones estándar de ES Module (import logo from './logo.svg'), sin necesidad de loaders complejos.

Soporte Nivelado de Frameworks: Aunque Vite se hizo famoso con Vue, tiene templates de inicio y soporte robusto para React, Preact, Svelte, y Vanilla JS.


Agnosticismo y Flexibilidad

TypeScript Integrado: Vite soporta TypeScript de forma nativa. Simplemente sirve los archivos .ts al navegador y confía en que el navegador los maneje. El checking de tipos ocurre por separado (no bloqueando el HMR).
    
Soporte a Testing: Vite es agnóstico a la herramienta de testing
Si bien puedes usar Jest, es mucho más común usar Vitest, un framework de testing compatible con Jest que fue diseñado para integrarse perfectamente con el Dev Server de Vite.

Configuración Basada en Archivos: La configuración se realiza a través de vite.config.js (o .ts)
utilizando un archivo simple que exporta una función, haciendo que la configuración sea legible y programática





### Jest vs Vitest

Núcleo de Ejecución	JSDOM y Node.js Worker Threads. Utiliza su propio sistema de módulos basado en require().	Motor de Vite. Utiliza el Dev Server de Vite y los módulos nativos de ES (ESM).

Rendimiento	Más lento en frío. Requiere una configuración más compleja para manejar módulos y es más lento en proyectos grandes debido a su arquitectura de hilos.	Ultra rápido. Al usar el mismo motor de Vite, las dependencias se procesan una sola vez y se aprovecha el caching de ESM.

HMR/Modo Watch	Funciona, pero puede ser más lento al reconstruir módulos.	Integración Nativa. El modo watch es extremadamente rápido y similar al HMR de Vite.

Configuración	Requiere su propio archivo jest.config.js y, a menudo, plugins (como jest-environment-jsdom).	Zero-Config con Vite. Lee la configuración directamente del archivo vite.config.js, lo que simplifica la pila.


#### Sintaxis y Ecosistema

En términos de código, Vitest fue diseñado para ser compatible con Jest.

##### Sintaxis de Prueba: Ambos usan exactamente la misma API: 
describe(), test(), expect(), .toBe(), .toEqual(), etc.

##### Mocks: Ambos utilizan la misma API de simulación 
(jest.fn(), jest.mock(), etc.).

Ecosistema RTL: Ambos funcionan perfectamente con React Testing Library (RTL) para probar componentes de React
Solo necesitas instalar los paquetes de RTL y el entorno JSDOM (si no estás ya en un navegador).

DevTools: Ambos ofrecen una excelente experiencia de línea de comandos e integración con IDEs.


Vitest	Proyectos nuevos o basados en Vite. Si estás usando Vite para el build, Vitest es la elección moderna, ya que es más rápido, más ligero y requiere menos configuración.

Jest	Proyectos heredados o basados en Webpack/CRA. Si ya tienes una gran base de código usando Jest o si necesitas características muy específicas del ecosistema de Jest que Vitest aún no soporta (aunque esto es cada vez menos común).



### Test Unitarios



### Test de Integración 


### Testing Componente UI


### Testing Componente lógico




### Rendimiento y Optimización

#### React.memo, useCallback y useMemo para evitar renders innecesarios.

#### Lazy Loading (carga perezosa)

#### Code Splitting con React.lazy y Suspense.


### TS




## Deploy

### Buildear la aplicación y desplegarla

##### Tomar el código fuente de tu aplicación y hacerlo accesible a los usuarios en un entorno de producción

#### Build

##### Transformar el código fuente de desarrollo en una versión optimizada y lista para producción que los navegadores modernos puedan entender y ejecutar de manera eficiente.

1. Herramientas

Bundler (Empaquetador) como Webpack o Vite


2. Transpilación: El código moderno (como JSX o TypeScript) se convierte a código JavaScript compatible con la mayoría de los navegadores (generalmente ES5)

Esta tarea la realiza Babel.


3. Bundling (Empaquetado): El código se agrupa en un pequeño número de archivos JavaScript (llamados bundles).

Esto reduce la cantidad de solicitudes HTTP que el navegador debe realizar para cargar la aplicación


4. Minificación y Compresión: Se eliminan los espacios en blanco, los saltos de línea y los comentarios del código

Las variables y funciones se acortan a nombres de una sola letra.

Esto reduce significativamente el tamaño final de los archivos.


5. Tree-Shaking: El bundler elimina cualquier código que haya sido importado pero nunca utilizado (código muerto o dead code).


6. Generación de Assets: Los archivos estáticos (CSS, imágenes) se procesan y optimizan.


7. Resultado: Se genera una carpeta (típicamente llamada build o dist), que contiene archivos optimizados de HTML, CSS y JavaScript.

Comando Típico: En un proyecto React estándar, ejecutas npm run build o yarn build.


#### Deploy 

##### Publicar el contenido de la carpeta de build en un servidor web o servicio de hosting para que sea accesible a través de Internet.

1. SPA

Las aplicaciones React son generalmente SPAs (Single Page Applications).

Significa que solo hay un único archivo index.html que es el punto de entrada

El servidor siempre debe devolver este archivo, independientemente de la ruta que el usuario solicite (ej. /productos o /acerca).


2. Plataformas de Deploy

Vercel	Hosting de Edge	Ideal para SPAs, configuración automática, integración con Git.

Netlify	Hosting Estático	Despliegue continuo, funciones sin servidor, CDN global.

AWS Amplify / S3	Cloud	Gran escalabilidad, control total del backend.

Firebase Hosting	Hosting de Google	Rápido, buena integración si usas otros servicios de Firebase.


3. Despliegue Continuo (CI/CD)

##### Cada vez que haces push a la rama de producción de tu repositorio Git (ej. main o master), la plataforma de hosting automáticamente

1. Analizá el código

2. Ejecuta el comando npm run build

3. Despliega la nueva carpeta de build

##### Automatiza el proceso y garantiza que el código que ves en producción siempre refleje la última versión de tu código fuente.


#### Prácticas

##### Variables de Entorno: Asegúrate de que tu bundler reemplace automáticamente las variables de entorno de desarrollo (process.env.NODE_ENV === 'development') por las de producción
Esto suele activar optimizaciones dentro de librerías como React.

##### Minificación y Tree-Shaking: Confirma que tu bundler (Vite o Webpack) está configurado para: Minificar el código (reducir el tamaño), Realizar Tree-Shaking (eliminar código no utilizado, crucial para reducir el tamaño del bundle).

##### Inspección del Bundle: Usa herramientas como Webpack Bundle Analyzer (o sus equivalentes en Vite) para identificar y eliminar librerías grandes o innecesarias de tu bundle final.

##### Optimización de Carga (Code Splitting): Utiliza la carga diferida (lazy loading) para dividir tu aplicación en fragmentos más pequeños.
Implementación: Envuelve la importación de componentes o páginas en React.lazy() y utiliza el componente <Suspense fallback={...}> para mostrar un spinner de carga mientras se descarga el fragmento de código

```
// Carga diferida de la página de Productos
const ProductsPage = React.lazy(() => import('./pages/ProductsPage'));

// Uso en el router
<Route path="products" element={<React.Suspense fallback={<div>Cargando...</div>}><ProductsPage /></React.Suspense>} />
```

##### Configuración del Servidor (SPA): configurar el servidor para que maneje el routing del lado del cliente:

Regla de Fallback: El servidor web debe configurarse para que, para cualquier ruta que no corresponda a un archivo estático existente (ej. /assets/logo.png), devuelva siempre el archivo principal index.html de tu carpeta de build.

Permite que React Router (o similar) tome el control y determine qué componente de la aplicación debe renderizar en la ruta actual.


##### Despliegue Continuo (CI/CD)

Integración con Git: Conecta tu repositorio de código (GitHub/GitLab) a tu plataforma de hosting (Vercel, Netlify, Amplify).

Disparador Automático: Configura el sistema para que se ejecute automáticamente cada vez que se haga un push a la rama principal (main o master).


##### El flujo de trabajo debe incluir:

1. Tests: Ejecutar pruebas unitarias y de integración (npm run test). Si fallan, el deploy se detiene.

2. Build: Ejecutar el comando de construcción (npm run build).

3. Deploy: Desplegar el contenido de la carpeta de build en el servidor.


#### Carpeta de Producción

La carpeta final (dist o build) contiene todo lo necesario para la producción:

1. index.html: El único punto de entrada.

2. assets/ o static/: Los bundles de JavaScript minificados (app.js, chunk-vendors.js, etc.) y archivos CSS.

3. Mapas de Fuente (Source Maps): Archivos .map que ayudan a la depuración en producción al mapear el código minificado de vuelta al código fuente original 
(debes asegurarte de que no se sirvan a usuarios normales por razones de seguridad, solo a herramientas de monitoreo como Sentry).


## Herramientas, software y librerías para diseñar app en React

API Client (Opcional)	Axios	Cliente HTTP basado en Promises. Se prefiere sobre fetch por su mejor manejo de errores HTTP (rechaza la promesa en 4xx/5xx) e interceptores.

Estado Global de la UI	Zustand / Recoil	Recomendado para la mayoría. Gestores de estado ligeros, minimalistas y basados en hooks que son más simples de configurar que Redux.

Utilidades de Componentes	React Testing Library (RTL)	Estándar de la industria. Herramienta para probar componentes simulando las interacciones del usuario. Se combina con Jest/Vitest.

Manejo de API Mocks	MSW (Mock Service Worker)	Simula las llamadas a la API en el nivel de red. Te permite interceptar las solicitudes HTTP durante las pruebas y el desarrollo para devolver respuestas simuladas.



### Diseño de app: Comienzo y pasos siguientes

Proceso estructurado que va más allá de escribir código.

##### Implica definir el problema, planificar la solución y construir la interfaz.


#### 1. Inicio y Definición (El "¿Por Qué?")

El objetivo es comprender el problema y la solución antes de tocar el código.


1. Definición del Problema y Usuarios

Identificar el Problema (El "Por Qué"): ¿Qué necesidad o dolor resuelve tu aplicación? Sé específico.

Público Objetivo (El "Para Quién"): ¿Quién usará la aplicación? Define Personas de Usuario (ej. "Estudiante universitario", "Gerente de proyecto", "Usuario técnico").
Entender a tus usuarios guiará el diseño de la UI/UX.


2. Alcance y Funcionalidades Clave

Funcionalidades Mínimas Viables (MVP): Define el conjunto más pequeño de características esenciales que la aplicación debe tener para ser útil. 
Concéntrate en la funcionalidad principal.
    
Historia de Usuario: Define el flujo de la aplicación desde la perspectiva del usuario
(ej. "Como Estudiante, quiero poder registrar mis notas para calcular mi promedio").



#### Diseño y Planificación (El "¿Qué?")

Crear un mapa visual y técnico de la aplicación.

1. Wireframing (Estructura)

##### Bocetos de Baja Fidelidad: Crea bocetos rápidos (a mano o con herramientas simples como Balsamiq o Miro)
Muestren la estructura y la disposición de los elementos en cada pantalla.
Solo concentrate en el jerarquía, no en los colores, fuentes, etc.
Ejemplo: Dónde va el menú, dónde va el formulario, dónde se muestra la lista.

##### Flujo de Usuario: Dibuja el camino que sigue el usuario para completar una tarea clave 
(ej. Pantalla de Login → Dashboard → Crear Nuevo Elemento).


2. Mockups y Prototipado (Apariencia)

Diseño de Alta Fidelidad: Utiliza herramientas profesionales (Figma, Sketch) para crear la apariencia real de la aplicación 
(colores, tipografía, iconos, espaciado).

Guía de Estilo / Tokens de Diseño: Define tu paleta de colores (primario, secundario, éxito, error) y las escalas de espaciado y tipografía. 
Esto formará la base de tu biblioteca de UI.


3. Diseño de la Base de Datos

##### Modelado de Datos: Define las tablas (o colecciones) y las relaciones necesarias para el MVP
(ej. Tabla Usuarios, Tabla Productos, Tabla Pedidos).

##### Diseño de la API: Planifica los endpoints que necesitará el frontend (ej. GET /api/productos, POST /api/pedidos).


#### 3. Construcción y Estructura (El "¿Cómo?")

##### Esta fase se centra en configurar el entorno de desarrollo y la arquitectura del código.

1. Inicialización del Proyecto

Creación del Proyecto: Utiliza Vite para inicializar rápidamente el proyecto con React + TypeScript.

Configuración de Estilos: Instala y configura tu solución de estilización (Tailwind CSS, CSS Modules o Styled Components


2. Arquitectura de Componentes

##### Separación Lógico vs. Presentacional (Smart/Dumb): Implementa la estructura de carpetas que separa la lógica de negocio y el estado (Contenedores/Hooks) de la presentación visual (UI/Componentes Presentacionales).

##### Configuración de Rutas: Define el Layout principal y el sistema de rutas usando react-router-dom.


3. Gestión de Estado y Datos

Configuración de TanStack Query: Instala y configura una librería de gestión de estado del servidor para manejar el fetching de datos.

Configuración de Pruebas: Instala y configura Vitest y React Testing Library para empezar a escribir pruebas unitarias desde el principio.


#### 4. Iteración y Despliegue

##### Desarrollo Iterativo: Construye las funcionalidades del MVP en pequeños ciclos, comenzando por el backend (API) y luego el frontend (UI).

Integración Continua: Configura tu repositorio Git con Vercel/Netlify para automatizar el Build y Deploy con cada push a la rama principal

Refactorización y Testing: Escribe pruebas para cada funcionalidad crítica antes de considerarla terminada. Esto asegurará la mantenibilidad a largo plazo.



