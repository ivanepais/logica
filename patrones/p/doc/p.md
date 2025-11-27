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

