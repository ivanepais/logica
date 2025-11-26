# ARQ

## Organización

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


### CSS: 

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

components/ui/ (Átomos/Moléculas)
Rol: Son los bloques de construcción más pequeños y genéricos. No tienen conocimiento de la lógica de negocio.
Responsabilidad: Deben ser reutilizables en cualquier parte de la aplicación.
Contenido: Un solo archivo de componente (.jsx) y su archivo de estilos (.module.css o .js si usas CSS-in-JS) deben estar juntos en una misma carpeta.

components/layouts/ (Organismos/Plantillas)
Rol: Definen la estructura principal de la interfaz de usuario.
Responsabilidad: Componen varios componentes de la capa ui/ para formar secciones completas (ej. el Header combina un Logo, un Button y la Nav).
Nota: En una aplicación con Rutas Anidadas, el Layout.jsx a menudo es el componente padre que contiene el <Outlet>.

components/domain/ (Presentacionales Específicos)
Rol: Componentes de presentación que son específicos de un dominio de negocio (ej. ProductCard, UserAvatar, CheckoutSummary).
Responsabilidad: Aunque son presentacionales, usan la terminología del negocio. Estos componentes componen los elementos básicos de la capa ui/.
Ejemplo: ProductCard.jsx usa el <Card> y el <Button> genéricos

styles/ (La Base Visual)
Rol: Contiene la Guía de Estilo de la aplicación.
Responsabilidad: Definir las variables CSS o tokens de diseño para asegurar que el color, la tipografía y el espaciado sean uniformes en todos los componentes de la biblioteca de UI.


components/ui/ o components/atoms/: Para componentes presentacionales genéricos y reutilizables (ej. Boton, Input, Icono).
components/layouts/ o components/templates/: Para estructuras de alto nivel (ej. Header, Sidebar, Footer).
pages/ o views/: Componentes contenedores que generalmente están conectados al router y manejan la lógica de la vista (ej. LoginPage, DashboardPage).





## SRP

Dividir componente que hace tres cosas: gestionar el estado, llamar a la API y mostrar la UI.
Si queremos cambiar el diseño (CSS), o si queremos reutilizar la lógica de carga de datos en otro lugar, tenemos que modificar todo el archivo.

### Componente monolítico:

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


### Componente SRP:

Creamos dos componentes siguiendo el patrón de Contenedor/Presentacional

1. ui component

Recibe datos

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


2. Contenedor

Maneja el estado, la lógica de la API, y el rendereado condicional (cargando, error, éxito). 

pasa los datos listos al componente Presentacional

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



### Componente descoplado al máximo:

Extraer lógica de un componente smart/contenedor con Custom Hook

La lógica de la llamada a la API y el manejo del estado (isLoading, error, user)
Se encapsulan y se vuelven portátiles.

Custom Hook: función js cuyo nombre comienza con use
Puede llamar a otros Hooks de React (como useState y useEffect).


1. Crear el custom hook 

useUser.js que contendrá la lógica de obtención de datos. 

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


2. Componente contenedor

UserProfileContainer consumidor de lógica

enfocado en el renderizado condicional, sin useState ni useEffect

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


3. Componente presentacional

```
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


# React

## Componentes

Componibilidad y Reutilización:
Componentes agnósticos a su contexto de uso
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

Evitar el "Prop Drilling" con Context o Composición
Context API (useContext) datos globales
Composición para pasar el componente final como prop en lugar de los datos.


Nombrar componentes y props:
Componentes: PascalCase, sustantivos y describir lo que son
Hooks Personalizados: Utiliza camelCase y siempre deben comenzar con use
(Ej: useAuth, useFetchData).
Props Booleanas: Nómbralas con prefijos como is o has para mayor claridad
(Ej: isDisabled, isLoading).

Destructuración de Props:
En lugar de props.name
```
const Greeting = ({ name, age }) => {
  return <h1>Hola, {name}, tienes {age} años</h1>;
};
```

Uso de hooks: 
1. Solo llama a Hooks en la parte superior de tu componente funcional (no dentro de if, bucles o funciones anidadas).
2. Solo llama a Hooks desde componentes funcionales de React o desde otros Hooks personalizados.

Renderizado Condicional Limpio:
```
// Ejemplo de AND lógico (si isLoading es true, muestra el loader)
return (
  <div>
    {isLoading && <Loader />}
    {!isLoading && <p>Datos cargados.</p>}
  </div>
);

```



## Props

pasar datos de un componente padre a un componente hijo
objeto de argumentos
unidireccional (de arriba hacia abajo): del componente padre al componente hijo.
Contenido: Pueden contener cualquier tipo de dato de JavaScript: strings, números, booleanos, funciones, arrays u objetos.

Solo Lectura (Inmutables):
Un componente hijo NUNCA debe
Si un componente necesita cambiar datos: debe manejar su propio Estado (useState)

children:

hijo:

```
// Componente Hijo (Card.jsx)
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

padre:

```
<Card titulo="Mi Perfil">
  <p>Este texto es la prop 'children'.</p> 
  <button>Ver detalles</button>
</Card>
```

nomenclatura:
Booleans/Banderas prefijos como is- o has- (ej. isLoading, hasError, isDisabled). 
eventos: prefijo on- (ej. onClick, onSubmit, onClose).

##### valores por defectos: para las props opcionales
##### componente resistente reduce verificaciones de undefined dentro de él 

cantidad props:
Desestructura y pasa solo lo que el hijo necesita.
Si el objeto es grande, refactoriza para pasar la parte relevante del objeto.




## hooks

Uso de estado sin clases 

1. Primarios

useState:
Permite que el componente almacene y gestione datos internos
estado simple (numb, str, bool)
estado local persistente. par estado actual y func
Estado que solo necesita un único componente

useEffect:
Permite ejecutar código después de que el componente se haya renderizado
efectos secundarios
acciones que interactúan con el mundo exterior)
llamadas a la API, suscripciones, manipulación manual del DOM
Recuperación de Datos: fetch o axios
Suscripciones: Configurar listeners o timers (requiere función de limpieza en el retorno)
Sincronizar el estado con sistemas externos

useReducer:
Permite a un componente suscribirse a un Contexto de React
leer su valor
Acceso al estado global o configuraciones
tema, usuario autenticado, idioma
sin pasar props a través de múltiples niveles


2. Optimización y rendimiento

evitar recálculos innecesarios y re-renderizados de componentes.

useMemo: Memoriza el valor resultante de una función
Solo recalcula ese valor si las dependencias en el array cambian
Cálculos Costosos: trar grandes arrays o realizar cálculos intensivos que no deben ejecutarse en cada render
Propiedades de Objeto Estables: Asegurar que un objeto o array complejo
pasado a un componente hijo, React.memo mantenga la misma referencia de memoria

useCallback: 
Memoriza la definición de una función (callback).
Solo recrea la función si las dependencias en el array cambian.
Estabilidad de Funciones: Prevenir re-renderizados innecesarios de componentes hijos optimizados con React.memo
cuando se les pasa una función como prop
Usos como dependencias en otros useEffect o useMemo.

useReducer:
Alternativa a useState para el manejo de estado más complejo
o cuando la lógica de la transición del estado es complicada
(basado en el patrón Redux).
Estado Complejo: Manejo de formularios complejos con múltiples campos relacionados
o estados que tienen transiciones bien definidas
(ej. pending, success, error)
Reemplazar múltiples useState interdependientes


3. Referencia y Lógica Avanzada

Acceso directo a elementos del DOM o control sobre valores mutables.

useRef:
Devuelve un objeto de referencia mutable (.current)
que persiste durante todo el ciclo de vida del componente.
No causa re-renderizado cuando cambia.
Acceso al DOM: Referenciar directamente un elemento del DOM para manipularlo
(ej. enfocar un input, medir dimensiones)
Almacenar Valores Mutables: Guardar IDs de timers o valores que deben cambiar sin forzar un re-renderizado

useImperativeHandle:
Se usa junto con React.forwardRef
personalizar el valor que se expone a los componentes padres
cuando usan una ref sobre el componente hijo.
Exposición Selectiva: Exponer solo métodos específicos
(ej. submit(), reset())
de un componente complejo a su padre, ocultando el estado interno

useLayoutEffect:
Idéntico a useEffect, pero se dispara síncronamente
inmediatamente después de que React realiza todas las mutaciones del DOM.
Manipulación del DOM que Afecta el Layout: Realizar mediciones del DOM
(ej. obtener altura de un elemento)
o cambios de estilo antes de que el navegador pinte el resultado final
evitando flashing o parpadeo visual

useDebugValue:
Debugging: Ayudar a otros desarrolladores a inspeccionar el estado interno de un Hook personalizado
sin tocar el código fuente

useInsertionEffect:
Se ejecuta síncronamente después de que el DOM haya sido modificado
pero antes de que se calculen los layouts.
Inyección de CSS-in-JS: Se utiliza principalmente en librerías de estilización
(como Styled Components o Emotion)
para inyectar estilos dinámicos antes de que los diseños del navegador los lean,
evitando problemas de rendimiento



## useState
Permite que un componente "recuerde" información
Se re-renderice (actualice la interfaz) cuando esa información cambia.
datos que un componente necesita para funcionar o para mostrar su UI

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

Nunca modificar el valor directamente, usar la función state

Props vs useState

useState (Estado):
Interno (Propio del componente).
Mutable (Puede cambiar usando la función setter).
No fluye, se mantiene dentro del componente.

Props: 
Externo (Recibido del componente padre).
Inmutable (De solo lectura).
Fluye unidireccionalmente (Padre → Hijo).

nomenclatura:
Si la variable es isOpen, su setter debe ser setIsOpen.

actualización funcional:
setConteo(prevConteo => prevConteo + 1);

Podría fallar si hay múltiples actualizaciones rápidas
setConteo(conteo + 1);

Estado Obsoleto:
1. React Programa el cambio para la próxima re-renderización.
2. React a menudo agrupa (batches) múltiples actualizaciones de estado en una sola re-renderización para optimizar el rendimiento.


### useState: multiples useState separados vs solo useState con objeto/arra

Múltiples useState:
##### Solo se renderiza cuando cambia esa variable de estado específica (más óptimo).
Código más legible para datos no relacionados.
Puede requerir muchas declaraciones useState.
##### Úsalo para variables de estado no relacionadas que cambian independientemente (e.g., count, isOpen, username).

Objeto:
Menos líneas de código (solo una llamada a useState).
##### componente se renderiza si cualquier propiedad del objeto cambia, incluso si otras propiedades no se usan.
##### Úsalo para datos relacionados (e.g., datos de un formulario: firstName, lastName, email).


## Ciclo de Vida y Side Effects: 
##### Montaje, actualización, desmontaje
Desde que nace, se actualiza en la pantalla, hasta que muere y se retira del DOM.
gestiona principalmente a través del Hook useEffect.

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


### Side Effects
##### Se refieren a cualquier acción que realiza un componente que afecta al mundo exterior de la función de renderizado.
se gestiona con useEffect
Un Side Effect es cualquier interacción que ocurre entre el componente de React y el mundo exterior a la función que lo renderiza
Si una acción no se limita a calcular la salida (el JSX) basándose en las entradas (props y state), es un efecto secundario.

ej: 
Recuperación de Datos	Llamadas a una API REST (ej. fetch o axios).	Afecta a un servidor externo para obtener datos.
Manipulación del DOM	Cambiar directamente el título del documento (document.title).	Modifica un elemento global fuera del control de React.
Suscripciones	Conexión a un socket o a una fuente de datos externa.	Crea una conexión persistente que debe ser limpiada
Tiempo	Usar setTimeout o setInterval.	Introduce la gestión del tiempo y recursos del navegador.

```
useEffect(() => {
  // 1. Código del Side Effect (Impuro)

  return () => {
    // 2. Función de Limpieza (Opcional, para Desmontaje)
  };
}, [dependencia1, dependencia2]); // 3. Array de Dependencias (Condicional)
```


## useEffect
Manejar efectos secundarios/side effects (llamadas a API, suscripciones, manipulación manual del DOM).
##### Permite declarar que tu componente necesita hacer algo después del renderizado
##### Es el lugar donde resides el código "impuro" (los Side Effects).

useEffect te da una vía de escape para ejecutar código que:
1. Interactúa con el mundo exterior a React (APIs, DOM del navegador, suscripciones).
2. Debe ejecutarse en un momento controlado (después del montaje, después de ciertas actualizaciones, o antes del desmontaje).


1. Montaje Único (Array Vacío)
React sabe que el efecto no depende de ninguna prop o estado
Solo se ejecuta una vez, después de la primera renderización (Montaje).
Usos Típicos: Llamadas iniciales a APIs, configuración de listeners de eventos globales, inicialización de librerías.

```
// Ejecutar una sola vez al montar el componente
useEffect(() => {
  console.log('Componente montado. Obteniendo datos iniciales...');
  // fetch('/api/data').then(...)
}, []); // Solo en la fase de Montaje
```

2. Actualización Condicional (Array con Variables)
React ejecutará el efecto cada vez que una de esas variables cambie entre renderizados.
Se ejecuta después de la primera renderización y después de cualquier re-renderización donde el valor de las dependencias haya cambiado

Usos Típicos: Cargar nuevos datos cuando un ID de usuario cambia, recalcular valores en respuesta a un cambio de prop específica.

```
// Se ejecuta cuando 'userId' (prop) o 'page' (state) cambian
useEffect(() => {
  console.log(`Cargando datos para el usuario ${userId} en la página ${page}`);
  // fetch(`/api/user/${userId}?page=${page}`)
}, [userId, page]); // Se ejecuta al montar y cuando userId O page cambian
```

3. Cada Renderizado (Sin Array)
el efecto se ejecuta después de cada renderizado (montaje y todas las actualizaciones).
se ejecuta después de cada re-renderización.
Usos Típicos: Es raro y generalmente lleva a problemas de rendimiento o loops infinitos.
Se debe evitar a menos que tengas un motivo muy específico.


Limpieza (Desmontaje)
##### Para los efectos que configuran recursos persistentes (como timers, listeners de eventos, o suscripciones), es vital limpiarlos cuando el componente deja de usarlos.
La función que retorna dentro de useEffect es la función de Limpieza (Cleanup).
se ejecuta:
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

prácticas useEffect
Siempre incluye en el array de dependencias todas las variables, props o funciones que se utilizan dentro del cuerpo del efecto y que son definidas fuera de él.
Implementar Siempre la Limpieza (Cleanup)
##### Si tu efecto secundario configura algo que persiste fuera de su ámbito (un recurso)
##### Debes proporcionar una función de limpieza para deshacer esa configuración.
Temporizadores y Oyentes: Para setTimeout, setInterval, o listeners de eventos del navegador, la limpieza es obligatoria
Siempre usa clearTimeout, clearInterval, o removeEventListener en la función de retorno.
Suscripciones: Si te suscribes a un socket o una fuente de datos, asegúrate de desuscribirte en la función de limpieza para evitar fugas de memoria
Llamadas a la API: Si una llamada a la API es larga y el componente se desmonta, esta llamada puede causar un error de "can't perform a React state update on an unmounted component".
Usa AbortController para cancelar la solicitud en la limpieza.


### useEffect: Maneja la Cancelación de Solicitudes Asíncronas

Cuando un componente se desmonta mientras una promesa (como una solicitud fetch o axios) está pendiente
intentar actualizar el estado causará una advertencia de React (memory leak).
La función de limpieza debe cancelar la solicitud o usar un flag (bandera) como en el ejemplo anterior.

```
useEffect(() => {
  let isMounted = true; // Bandera
  
  fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      if (isMounted) { // Solo actualiza si el componente sigue montado
        // setDatos(data);
      }
    });
    
  return () => {
    isMounted = false; // Desactiva la bandera cuando se limpia/desmonta
  };
}, []);
```

### Evitar funciones como dependencias: use useCallback



## useReducer
Alternativa de React a useState para manejar la lógica de estado más compleja
cuando el estado de tu componente es un objeto complejo o un arreglo
cuando las actualizaciones de ese estado dependen de múltiples sub-valores
o implican lógica intrincada.


## Context API


## useContext



## useMemo


## useCallback


## React.memo


## Eventos



## Actualización funcional

```
setEstado(valorPrevio => {
  // Retorna el nuevo valor basado en el valorPrevio
  return valorPrevio + 1; 
}); // Actualización funcional (o "callback")
```


## inmut

destruct: 

```
Objeto	Modificar propiedad	setObjeto(prev => ({ ...prev, claveNueva: valor }))
Array	Agregar elemento	setArray(prev => [...prev, nuevoElemento])
Array	Modificar elemento	setArray(prev => prev.map(item => (item.id === id ? {...item, cambio: valor} : item)))
```


## Estado global y local

El estado es cualquier dato que, cuando cambia, debe provocar que la interfaz de usuario se actualice

local:
estado que solo necesita un único componente o un pequeño grupo de componentes 
relacionados que pasan props entre sí. 
manejado principalmente con useState

global/compartido: 
estado al que acceden multiples componentes no relacionados entre si


Niveles de gestión de estado:

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


Prácticas para el estado local:

1. useState:
Estado Simple y Plano
Evita anidar objetos o arrays complejos, complica lógica de actualización
estado es complejo: usar useReducer o dividirlo en multiples useState
user actualización funcional
estado inmutable:  spread (...); ...prevItems, item

2. useReducer
lógica de transición compleja
Cambia de useState a useReducer: cuando tengamos multiples actualizaciones relacionadas
o cuando la lógica para determinar el siguiente estado se vuelve compleja.
Razón: useReducer centraliza toda la lógica de estado en la función reducer (SRP), 
manteniendo el componente libre de esa complejidad
Práctica: Usa useReducer cuando una sola acción (ej. hacer clic en "Enviar Formulario") 
necesita actualizar múltiples piezas de estado (isLoading, error, datos).
Esto se maneja limpiamente con una sola llamada a dispatch.

3. Arquitectura
evitar prop drilling:
eleva el estado más arriba en el árbol (al ancestro común)
o muévelo a la Context API si es global
State Colocation:
Mantén el estado tan cerca del componente que lo utiliza como sea posible. 
Abstraer Lógica con Custom Hooks:
componente con mucha lógica de negocio o ciclo de vida
Extrae esa lógica y su estado asociado a un Custom Hook
evitar re-renderizado:
useCallback y useMemo estratégicamente
useCallback para memorizar funciones callbacks
useMemo para memorizar valores de cómputo intensivo o referencias de objetos/arrays.
React.memo:
Si un componente de presentación se re-renderiza innecesariamente a menudo, envuélvelo en React.memo
Esto hace que React omita el re-renderizado si sus props no han cambiado.


Prácticas para el estado global:
datos compartidos por muchos componentes, a menudo distantes en el árbol
evita el "prop drilling" con context api o librerias

1. SRP
Nunca uses un único store o Contexto monolítico para toda la aplicación.
Razón: Si tienes un solo GlobalContext, cualquier cambio en cualquier parte de la aplicación (ej. el tema cambia) forzará el re-renderizado de todos los componentes suscritos
incluso si solo necesitan el estado de autenticación.
Solución: Crea múltiples Contextos o múltiples slices de Redux/Zustand
cada uno con una responsabilidad única (ej., AuthContext, ThemeContext, CartContext).

2. Diferencia el Estado del Servidor
Separa el estado que proviene de APIs (datos de usuario, listas de productos) 
del estado de la interfaz de usuario (el tema, las preferencias del usuario).
Utiliza librerías dedicadas a la gestión del Estado del Servidor (como TanStack Query o SWR).
Estas herramientas manejan de forma automática el caching, la revalidación y la desduplicación, aliviando la carga del Contexto o Redux.

context api nativo 

3. Usa Contexto para Datos Estables
ContextAPI es más adecuada para datos que no cambian con alta frecuencia (ej. usuario autenticado, configuración de idioma, tema).

4. contexto + useReducer
gestión de estado global complejo
useReducer para lógica actualización centralizada
Context API (para la distribución)
Reducer maneja la complejidad de la lógica
mientras que el Contexto solo se encarga de la distribución.

5. Optimiza el Consumo con Custom Hooks
Práctica: No llames a useContext(MiContexto) directamente en muchos lugares
Crea un Custom Hook que lance un error si el Contexto no está disponible.
Ejemplo: const useAuth = () => useContext(AuthContext);

6. librerías: Redux Toolkit (Redux Thunks, immer), Zustand, Recoil

7. Escalar: cantidad de componentes en la app por ej
Pequeña/Mediana: Context API + useReducer
Mediana/Grande con Estado de UI Simple: Zustand o Recoil (más sencillos de implementar que Redux).
Grande con Lógica Crítica: Redux Toolkit (si necesitas estricta trazabilidad y un gran ecosistema de herramientas).

8. Acciones Específicas: dispatch
las acciones deben describir qué sucedió (el evento)
no cómo debe cambiar el estado (la mutación).

Mal		SET_IS_LOADING_TRUE
Bien	USER_LOGIN_REQUESTED
Bien	FETCH_PRODUCTS_FAILED




## Routing

BrowserRouter, Routes, Route

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


Rutas protegidas:


Composición de Rutas:
combinas, anidas y estructuras los componentes de tus rutas para construir la ui

layout (la estructura visual) y la navegación con definiciones declarativas
anidando componentes

1. Rutas para Layouts: Las rutas superiores (padres) se utilizan para renderizar componentes de layout estáticos (ej. Header, Footer, Sidebar).

2. Rutas para Vistas: Las rutas anidadas (hijas) se utilizan para renderizar el contenido que cambia
el cual se inyecta en el layout padre a través del componente <Outlet>.

asegura que la jerarquía de tu URL
(/dashboard/ajustes)

refleje la jerarquía de componentes 
(<LayoutDashboard> contiene <Ajustes>).


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
Utilizas la composición de rutas para envolver rutas con lógica
El componente ProtectedRoute es un ejemplo perfecto de esto.
ProtectedRoute (el padre) compone la lógica de autenticación alrededor de todas sus rutas hijas, protegiéndolas.

```
// ProtectedRoute contiene la lógica para verificar la autenticación
<Route element={<ProtectedRoute />}>
    <Route path="/privado" element={<DatosSecretos />} />
    <Route path="/checkout" element={<Checkout />} />
</Route>
```


3. Composición de Componentes de Alto Nivel
Componer tu routing separándolo en diferentes componentes funcionales (SRP aplicado).
En lugar de tener una sola lista gigante de <Route> en App.jsx, puedes tener componentes que definan subconjuntos de rutas.

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

Prácticas:

1. Composición de Rutas

2. Separar las Rutas en Componentes: 
Separa las configuraciones de rutas por dominio o característica (ej., /admin, /usuarios, /checkout) en archivos o componentes funcionales separados.
Ej: componente <AdminRoutes /> que define solo las rutas de administración

3. Manejar el Catch-All (404)
Siempre incluye una ruta catch-all con path="*" (o path="*") como la última ruta en tu componente <Routes>.
Esto atrapa cualquier URL no reconocida y renderiza la pág

4. Componente ProtectedRoute
Nunca añadas la lógica de autenticación directamente en los componentes de las páginas
En su lugar, crea un componente ProtectedRoute que utilice un <Outlet>
y el Hook useNavigate (o <Navigate>) para redirigir a los usuarios no autenticados.

5. Usar useNavigate vs. <Link>
<Link>: Úsalo siempre para la navegación declarativa (clics en menús, botones de navegación).
useNavigate

6. Usar replace: true con useNavigate
Después de acciones críticas como Iniciar Sesión o Enviar Pago, usa la opción { replace: true } con useNavigate.
Esto asegura que la página anterior se reemplace en el historial
impidiendo que el usuario regrese a la página de formulario o inicio de sesión con el botón "Atrás".

7. useParams para Identificación
acceder a los valores necesarios para identificar un recurso (ej. /productos/:id).

8. Usar useSearchParams para Filtros y Paginación
Utiliza useSearchParams (en lugar de useLocation().search) para leer y modificar los parámetros de consulta 
(query strings, ej. ?page=1&filtro=activo).
está diseñado para gestionar esto de forma sencilla, permitiendo mantener los parámetros existentes mientras añades o eliminas otros.

9. Normalizar Parámetros
Los valores de useParams y useSearchParams son siempre cadenas de texto (strings).
Si esperas un número, un booleano o un array, debes convertir el valor explícitamente (ej., Number(userId) o un parser de array).

10. Usar Lazy Loading (Code Splitting)
Para reducir el tamaño inicial del bundle de JavaScript y mejorar el tiempo de carga
utiliza la división de código (Code Splitting) para cargar los componentes de las rutas solo cuando sean necesarios
Esto se hace con React.lazy y <Suspense>.


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




## Re renderizado

Causa: la mutación del estado
El re-renderizado se dispara cuando el estado (useState, useReducer, Redux store, etc.) o las props de un componente cambian.
La práctica fundamental es asegurar que los cambios de estado sean inmutables.

Principio de Inmutabilidad: Nunca modifiques el estado u objetos directamente (ej. state.user.name = 'Nuevo').
evita que React detecte el cambio correctamente (porque la referencia de memoria es la misma), lo que puede llevar a bugs o re-renderizados incorrectos.

Copiar el Estado: Siempre crea una nueva copia del objeto o array al actualizar el estado, incluso si solo cambias una propiedad.
Objetos: Usa el operador spread ({ ...prevState, nuevaPropiedad: valor }).
Arrays: Usa el operador spread `[...prevArray, nuevoElemento]` 
o métodos que devuelven un nuevo array (.map(), .filter()).

Memorización:
técnica de almacenar en caché el resultado de una función o componente
y solo recalcularlo si sus entradas (dependencias) han cambiado.

### 1. Componentes con React.memo
Envuelve un Componente Presentacional o dumb component con React.memo().
Le dice a React que omita el re-renderizado de este componente
si sus props no han cambiado desde el render anterior.

```
export default React.memo(MiComponentePresentacional);
```

### 2. Valores con useMemo
Memoriza el resultado de una función o un valor costoso
Solo ejecuta la función si las dependencias en el array cambian
Esto es crucial si el valor es pasado como prop a un componente memorizado con React.memo.

```
// El cálculo solo se ejecuta si 'data' o 'filter' cambian
const filteredData = useMemo(() => expensiveFiltering(data, filter), [data, filter]);
```

### 3. Funciones con useCallback
Memoriza la definición de una función callback.
Asegura que la función mantenga la misma referencia de memoria entre renders
vital cuando pasas callbacks a componentes hijos optimizados con React.memo.
```
// La función solo se recrea si 'itemId' cambia
const handleClick = useCallback((itemId) => {
  console.log(`Item ${itemId} clicked`);
}, [itemId]);
```

Estado y lógica

State Colocation:
estado tan cerca del componente que lo necesita como sea posible.
##### Si un estado solo es relevante para un componente en el fondo del árbol
##### definirlo en un ancestro muy alto (como el componente App) forzará el re-renderizado de todo el árbol intermedio cuando ese estado cambie.

Evitar Renderizar en Cadena:
Evita actualizar el estado en el cuerpo principal de un componente 
o en useEffect sin un array de dependencias vacío

Si necesitas actualizar el estado basándote en un cálculo, hazlo de forma perezosa en la inicialización de useState (useState(() => valorInicial))
o asegúrate de que esté correctamente dentro de un useEffect con dependencias controladas.

Reducción del Ámbito con Selectores:
(Redux/Zustand): Si usas un gestor de estado global, utiliza selectores (useSelector en Redux).
Los selectores extraen solo la porción de estado que el componente necesita.
El componente solo se re-renderizará si esa porción específica de datos cambia, no si cambia cualquier otra cosa en el store global.

Problema de rendimiento:
##### Profiler de React DevTools: grabar y analizar el ciclo de vida de los componentes
##### mostrará exactamente qué componentes se están re-renderizando y por qué (o cuánto tiempo les toma
Why-Did-You-Render (Librería): Una librería externa que te notifica automáticamente en la consola cada vez que un componente se re-renderiza innecesariamente
indicando qué prop o estado cambió para causarlo.



## CSS

Atomic Design, Composición de Componentes
Dumb y Smart Components (logica renderizado), custom hook

components/ui/ o components/atoms/
components/layouts/ o components/templates/
pages/ o views/

Props de Estilo:
en ui components aceptando className o style como props (si es necesario
para sobrescribir el estilo desde el componente padre
ajustes de diseño sin tener que modificar el archivo original del componente.

Theming
conjunto de colores, tipografías y espaciados de forma centralizada (ej. theme.js).
Context API o librerias de ui
consistencia visual (ej. todos los botones primary tienen el mismo color, fuente y radio).

Memorización de Componentes Puros:
ui componenents que no cambian a menudo en React.memo
Si un componente presentacional recibe las mismas props entre re-renderizados del padre
React.memo evita que se re-renderice innecesariamente, mejorando el rendimiento.

Valores por Defecto/default props
const Boton = ({ children, onClick, disabled = false })

CSS Modules:
file.module.css

El build system (como Webpack o Vite) renombra automáticamente las clases, 
añadiendo un hash único al final (ej. Boton_primario__3aBcD).
Esto garantiza que la clase primario definida en tu Boton no afecte a una clase primario definida en Tarjeta.

##### Importa el objeto de estilos y accede a las clases como propiedades.

```
// Boton.jsx
import styles from './Boton.module.css';

const Boton = ({ children }) => (
  <button className={styles.primario}>
    {children}
  </button>
);
```


CSS-in-JS (Styled Components / Emotion):
Estiliza los componentes directamente en JavaScript, creando componentes de React con estilos adjuntos
Las librerías generan clases únicas en tiempo de ejecución o de compilación, aislando los estilos a nivel de componente
Útil para cuando necesitas que los estilos cambien dinámicamente según las props.

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


Diseño Basado en Props:
Los componentes presentacionales deben ser flexibles 
y cambiar su apariencia basándose en las props que reciben.

1. Props de Variante (La Mejor Práctica)
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
##### Acepta className y úsalo al final de la lista de clases para que el estilo del consumidor tenga prioridad.

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


Estilos Globales y Temas:

Consistencia tipografía, colores, fuente y espaciado

Variables CSS o tokens de diseño:

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

Componente ThemeProvider:
Si utilizas CSS-in-JS, define tu tema (ej. modo oscuro/claro) en un Contexto
expón un componente ThemeProvider que inyecte los valores a todos los componentes presentacionales.
Los estilos serán coherentes y reaccionarán a los cambios globales de tema.

Evitar Estilos Inline: Usa estilos inline (style={{ color: 'red' }}) solo para valores que son verdaderamente dinámicos (ej. animación, posición de un componente). 
Evítalos para estilos estáticos, ya que son difíciles de sobrescribir, no permiten pseudo-clases y no aprovechan el caching de las hojas de estilo.

Especificidad Baja: Cuando escribas CSS modular, intenta mantener la especificidad baja
Usa nombres de clases simples o anidamiento de componentes, en lugar de selectores complejos (div > p > a).

##### Clases Condicionales: Usa plantillas literales para aplicar clases condicionalmente basadas en el estado de la UI
(ej. disabled, active, open).

```
const MiInput = ({ isValid }) => (
  <input className={`${styles.input} ${isValid ? '' : styles.error}`} />
);
```


Componente presentacional

1. 

```
// TarjetaProducto.jsx

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

// Buena Práctica: Definición explícita de props
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


Componente Lógico:

1. Custom Hook

```
// hooks/useProducto.js
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

2. Componente Lógico/Contenedor:  

##### usa el Custom Hook y decide qué mostrar (lógica de renderizado

```
// ContenedorProducto.jsx (Componente Lógico/Contenedor)

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


Aplicación de css modules:

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
##### Importas los estilos como si fueran un objeto JavaScript
##### usas la sintaxis de plantillas literales para combinar clases.
 
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
Si inspeccionas el elemento, verás el nombre de clase único generado, garantizando que no habrá colisiones con otros componentes.

```
<button class="Button_base__aE1pC Button_primary__zY2wD ...">
  Comprar
</button>
```







## Lógica de ui

qué se muestra, cuándo se muestra y cómo se optimiza la visualización de la ui

Renderizado Condicional Explícito:

```
// Lógica de renderizado separada
if (isLoading) return <Spinner />;
if (error) return <ErrorMessage message={error} />;
return <ItemList items={data} />;

```

Lógica de Renderizado en Funciones: subsecciones
subsección de la UI que se renderiza condicionalmente o que tiene una lógica compleja
crea una función auxiliar dentro del componente que devuelva el JSX (iu component)

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

Early Returns:
return tan pronto como se cumpla una condición crítica
(ej. el componente está cargando, hay un error, o no hay datos).
la lógica principal de renderizado solo se ejecuta cuando todas las condiciones iniciales están satisfechas.

Memorización de Componentes Puros: React.memo
Envuelve los componentes presentacionales (aquellos que solo reciben props y no tienen estado ni efectos secundarios complejos) en React.memo.
Condición: Solo se re-renderizarán si sus props cambian.
Esto es vital para listas grandes o componentes complejos.

useMemo y useCallback:
useMemo para memorizar valores
useCallback para memorizar funciones
##### Propósito: Evitar que se creen nuevas referencias en cada render, lo cual rompería la optimización de React.memo en los componentes hijos.

Listas con key
Cuando renderices una lista de elementos (.map())
usa una clave (key) que sea estable y única dentro de la lista 
(idealmente un id de la API).
Permite que React identifique qué elementos han cambiado, añadido o eliminado
##### Nunca uses el índice del array (i) como clave si la lista puede cambiar de orden.

Componente de Estado de Carga:
Práctica: Crea un componente presentacional dedicado (ej. <Loading /> o <Spinner />) y un componente de error (<ErrorMessage />).
Razón: La lógica que decide si mostrar el contenido, el spinner o el error es lógica de renderizado
debe estar separada de la lógica de negocio y presentación del contenido principal.

Lógica de Presentación en Custom Hooks:
Práctica: Si tienes una lógica de UI reutilizable (ej. lógica de paginación, alternar un modal),
extráela a un Custom Hook (ej. usePagination, useToggle).
Razón: Deja el componente principal limpio y fácil de leer, y permite la reutilización de esa lógica

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


## Diseño responsivo
