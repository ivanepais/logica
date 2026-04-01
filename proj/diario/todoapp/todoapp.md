# ToDo App

# Arq

## 1. Nucleo: Arquitectura de Capas

1. Capa de Dominio:
Definimos qué es una tarea y cómo cambia

sin saber que existe React
funciones puras y tipos de datos.

`Task Entity`:
`objeto` con id, text, isCompleted y createdAt.

`Business Rules`:
`Funciones` como toggleTask(task), filterTasks(tasks, criteria). Al ser puras, son robustas y no dependen del estado global

2. Capa de Estado: app logic
Usar un `Custom Hook` que encapsula un `useReducer`

Reducer:
acciones claras (ADD, DELETE, TOGGLE)
centraliza estas transiciones de estado
evitando bugs de estados inconsistentes

Persistence:
pequeño `adaptador` para `localStorage`

3. Capa de Presentación (UI):
Componentes atómicos

`Dumb`:
Reciben props y renderizan
TodoItem, TodoList

`Smart`:
Conectan el Custom Hook con la UI.


## 2. Estructura
organización basada en características (features) o módulos
más escalable que una basada en tipos de archivos

```
src/
├── core/                # Lógica pura (Domain)
│   ├── task.entity.ts
│   └── task.logic.ts    # Funciones puras de manipulación
├── hooks/               # Capa de Aplicación
│   └── useTasks.ts      # El "Controller" (Reducer + State)
├── components/          # UI (Presentación)
│   ├── TaskInput/
│   ├── TaskList/
│   └── TaskItem/
└── App.tsx              # Punto de entrada
```

## 3. Robustez
Principios de ingeniería

`Inmutabilidad estricta`:
Nada de hacer tasks.push().
Siempre proyecciones de estado nuevas para evitar efectos secundarios

`Normalización de datos`:
Si la app creciera
guardar las tareas en un objeto indexado por ID ({ [id]: task })
en lugar de un array facilita las actualizaciones directas

`Capa de Servicio Abstracta`:
si se va a usar una API en lugar de localStorage
se cambia el hook

## 4. Funcionalidades "Stress Test" de la Arq
##### Una arquitectura robusta se demuestra cuando añadir algo "difícil" resulta fácil

Undo/Redo: Gracias al uso de un Reducer, implementar un historial de cambios es trivial
Filtrado avanzado: (Pendientes, Completadas, Por fecha) sin ensuciar el componente de la lista.
Búsqueda en tiempo real: Un "selector" que derive el estado filtrado a partir del estado original.


# Contratos en TS

TypeScript herramienta de diseño
te obliga a definir el contrato de la app
antes de que los errores lleguen al navegador.

1. Contrato Dominio
La Capa de Dominio es el corazón/nucleo

Con JS, una tarea (task) es simplemente un objeto que "esperamos" que tenga ciertas propiedades

Con TS, el contrato es explícito:

```
// Esto es documentación viva que el compilador valida
interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
  createdAt: number;
}
```

Si se intenta acceder a task.description (que no existe)
el editor avisará, no explotará la app

2. Refactorización
Poder cambiar el código rápido sin romperlo

En JS: Si decides cambiar el nombre de la propiedad text a content
tienes que buscar y reemplazar en todo el proyecto
y no haber olvidado de un archivo

Ts: Cambias el nombre en la interfaz y el compilador te lista exactamente qué archivos y líneas de código rotos
permite iterar la arquitectura con seguridad

3. Autocompletado y Tooling
El LSP de TypeScript:

Sabes exactamente qué acciones recibe tu reducer.
props necesita un componente: sin tener que saltar de archivo en archivo para recordar
Reduce la carga cognitiva: no tienes que memorizar la estructura de los objetos, los dicta el ide

4. Clase con bugs
TypeScript detecta en tiempo de compilación
como pasar un string donde se esperaba un number
o tratar de leer una propiedad de un undefined

Delegar esa vigilancia a una herramienta automática es mucho más eficiente
que la mente humana o test unitarios excesivos para validar tipos

Ahorrar tiempo que pasarías haciendo console.log
para ver por qué un valor llega vacío a un componente


# Vite y Ts config

Utiliza ESM nativo para el desarrollo
Soporte para TypeScript de primera clase sin configuraciones pesadas

1. Config ts:
Vite genera una estructura de tsconfig dividida:
Separa las preocupaciones del entorno (node/vite)
de las de la aplicación (navegador)

`tsconfig.json`: en raíz
No suele contener reglas, sino que referencia a los otros dos.

`tsconfig.app.json`:
Configuración para el código que corre en el navegador
(React).

`tsconfig.node.json`:
Configuración para las herramientas que corren en Node
(como `vite.config.ts`).


Strict Mode:
En tsconfig.app.json, flags activadas:

```
{
  "compilerOptions": {
    "strict": true,                   // No permite 'any' implícitos ni nulos no controlados
    "noUnusedLocals": true,           // Limpieza: no deja variables muertas
    "noUnusedParameters": true,       // Limpieza: no deja parámetros de funciones sin usar
    "noFallthroughCasesInSwitch": true // Evita errores lógicos en reducers
  }
}
```

2. Optimización de vite.config.ts
Para la arquitectura de capas, es muy útil los `Aliases`
evita los tediosos import ../../../core/task.

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Permite usar '@' para referirse a la carpeta src
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

Para que el LSP (Neovim/Emacs/Gvim) no se queje
deberás añadir el alias en `tsconfig.app.json`
bajo `compilerOptions.paths`.

```
//...
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
    },

```

Generalmente ya incluidas:

```
npm install -D @types/node
```


4. Workflow:
Para herramientas de terminal

Servidor de desarrollo: `npm run dev`
Linter: Vite ya incluye ESLint configurado para TS
`npm run lint` periódicamente es clave para mantener la salud del código antes de un commit.

Node 24: Al estar en una versión tan reciente de Node, asegúrate de que tu package.json tenga "type": "module",



# Diseño de Entidades: lógica de negocio

React Compiler nos permite olvidarnos de optimizaciones manuales (como useMemo)

La entidad no es solo un "objeto con datos"
es la definición de la verdad en nuestra aplicación
Diseñarla bajo el Dominio, separando los datos de las operaciones.


## 1. Modelo de datos: Entidad Task

Una tarea necesita más que un simple string
Para que sea trazable y escalable, debe contener:

`id`: Un identificador único (UUID).
id: Un identificador único (UUID).

`content`: El texto de la tarea
en lugar de text o title para ser más semánticos
(es el contenido de la acción).

`isCompleted`: booleano que define el estado binario

`createdAt`: timestamp (UTC).
Fundamental para auditoría, ordenamiento y persistencia.

`updatedAt`: timestamp opcional
Útil si en el futuro permitimos edición de contenido.


## 2. Comportamiento del Dominio: Funciones Puras

Siguiendo Clean Architecture:
la lógica de "cómo cambia una tarea" no debe vivir en el componente de React ni en el Reducer
sino en `funciones puras asociadas a la entidad`.
Las hace 100% testeables en cualquier entorno


### Diseño de operaciones lógicas

1. `createTask(content: string)`:
`Fábrica` que valida que el contenido no sea una cadena vacía
genera el UUID y asigna el timestamp de creación.

2. `toggleStatus(task: Task)`:
Una función que recibe una tarea
devuelve una nueva instancia con el estado invertido
(Inmutabilidad).

3. `updateContent(task: Task, newContent: string)`:
Valida el nuevo contenido y actualiza el timestamp de modificación


## 3. Estados de la Entidad: Validaciones

Definir qué hace que una tarea sea válida
No permitiremos que existan tareas en un estado inconsistente:

Una tarea no puede tener un contenido de más de 255 caracteres
No puede ser creada sin un ID válido.
updatedAt nunca puede ser anterior al createdAt.


### Entidad y sus reglas de forma aislada

`Portabilidad`:
llevarte estas funciones a un backend en Node.js o a una CLI y funcionarían exactamente igual

`Pragmatismo`:
Si se cambia `isCompleted`:
por un sistema de estados más complejo (pending, doing, done)
solo modificas la lógica de la entidad en un solo lugar



# Acciones del Reducer

##### Definición del lenguaje con el que la interfaz de usuario se comunica con el estado de la aplicación

El Reducer no hace la lógica, lo hace hace el Dominio
Orquesta la lógica

Con Acciones Etiquetadas: `Acciones Etiquetadas`
Garantiza que el compilador sepa exactamente
qué datos (`payload`) requiere cada operación


## 1. Acciones

##### eventos que pueden ocurrir en el sistema, la acción es una intención de cambio

Acción | Payload (Datos) | Propósito

`ADD_TASK`:
`Payload/datos`: content: string
Crea una nueva tarea usando la factory del dominio.

`REMOVE_TASK`:
id: string
Elimina una tarea específica de la lista.

`TOGGLE_TASK`:
id: string
Invierte el estado isCompleted de una tarea.

`UPDATE_TASK`:
"id: string, content: string"
Modifica el texto de una tarea existente.

`CLEAR_COMPLETED`:
Ninguno
Limpia todas las tareas que ya están hechas.

`REORDER_TASKS`:
"startIndex: number, endIndex: number"
(Opcional) Para soportar Drag & Drop en el futuro.


## 2. Flujo de Verdad

##### Visualizar cómo viaja la información para mantener la robustez: El flujo debe ser unidireccional y predecible

1. Evento en UI: Usuario hace clic en el checkbox de una tarea

2. Dispatch: Se dispara la acción
```
{ type: 'TOGGLE_TASK', payload: 'abc-123' }.
```

3. Reducer: Busca la tarea en el estado actual

4. Llamada al Dominio: El reducer usa la función pura
`toggleStatus(task)` que diseñamos

5. Nuevo Estado:
El reducer devuelve un nuevo array con la tarea actualizada
React Compiler se encarga de que la re-renderización sea atómica y eficiente


## 3. Tipos, seguirdad y robustez

1. Tipado Exhaustivo:
Con Ts, el Reducer tendrá un bloque switch
Si definimos una acción nueva y olvidamos programarla en el switch
Ts nos dará un error antes de ejecutar la app

2. 
##### Inmutabilidad por Diseño: debe retornar un nuevo objeto de estado
El Reducer nunca debe hacer algo como `state.tasks[0].completed = true`.

`[...state, newTask]` para añadir.

`state.filter(...)` para eliminar.

`state.map(...)` para actualizar.

3. Persistencia
Al tener acciones claras, es muy fácil añadir un "Middleware"
(o un simple useEffect observando el estado)
que guarde automáticamente en localStorage cada vez que una acción exitosa modifique el estado

4. Pragmatismo: Estado "UI"
Debería el filtro (Ver todas, Ver pendientes, Ver completadas)
estar en este Reducer?

Si: Aunque el filtro no "cambia" las tareas
es parte del estado de la aplicación
Si el usuario refresca la página, querrá seguir viendo el filtro que seleccionó

`Acción adicional`:
`SET_FILTER` con un payload de tipo `'all' | 'pending' | 'completed'`.



# Custom Hook: Capa de Aplicación/Controller

##### Con el núcleo/corazón (entidad), cerebro/orquestador/controller, sigue la capa de aplicación que unirá al núcleo y al orquestador antes de los componentes

Manejará la persistencia con `localStorage`


## useTasks: actúa como "fachada" o API de la app, ocultando la complejidad del reducer y la persistencia

##### Entregando a los componentes solo lo que necesitan: datos listos para mostrar y funciones simples para actuar

Aplicamos una interfaz limpia

1. Responsabilidades del Hook
Para robustez, debe gestionar tres áreas sin mezclarlas:

`Estado y Reducer`:
Manejar la instancia del useReducer

`Persistencia (Side Effects)`:
Sincronizar el estado con localStorage

`Lógica Derivada (Selectores)`:
Calcular datos "al vuelo" (como el conteo de pendientes)
para que los componentes no tengan que hacer cálculos

2. "Contrato" de Salida:
##### Lo que el hook devuelve a la UI: debe ser un objeto plano y fácil de usar
##### No expondremos el dispatch directamente, expondremos métodos con nombres semánticos

### 1. Datos (state):

`tasks`: array de tareas ya filtrado según el filtro actual
`filter`: estado del filtro activo (all, pending, completed).
`stats`: objeto con metadatos útiles (total, pendingCount, completedCount)


### 2. Acciones (Methods):

`add(content: string)`: Envía la intención de crear.

`remove(id: string)`: Envía la intención de borrar.

`toggle(id: string)`: Envía la intención de cambiar estado.

`update(id: string, content: string)`: Envía la intención de editar.

`setFilter(filter: FilterType)`: Cambia la vista.

`clearCompleted()`: Limpia los hechos


## 3. Persistencia Pragmática: Efecto Espejo

Los datos no se pierdan al refrescar
el hook implementará una estrategia de hidratación automática

1. Lectura Inicial:
Al arrancar, el hook intentará leer de localStorage
Si hay datos válidos (JSON parseable)
los usará como estado inicial del reducer
Si no, usará un array vacío.

2. Escritura Automática:
Usaremos un useEffect que observe el estado del reducer
Cada vez que el estado cambie, se guardará en localStorage.

Robustez:
Implementación de un "Safe JSON Parse"
para evitar que la aplicación "crashee" 
si el usuario manipula manualmente el localStorage del navegador con un formato inválido.
 

## 4. Lógica Derivada por React Compiler

Tradicionalmente, dentro del hook usarías un useMemo para filtrar las tareas
Ej:

```
// Antes (Manual)
const filteredTasks = useMemo(() => {
  return tasks.filter(t => ...);
}, [tasks, filter]);
```

Con React Compiler:

```
const filteredTasks = tasks.filter(t => ...); // El compilador memoriza esto por ti.
```

Hace que nuestro hook sea mucho más limpio y fácil de leer
eliminando el ruido visual de las dependencias de hooks.


### Diseño

Si decidimos que las tareas se guardan en una base de datos en la nube (Firebase, Supabase, etc.), solo tocamos el Custom Hook
En los componentes (TaskItem, TaskInput), su interfaz (el contrato del hook) sigue siendo la misma.



# UI: Componentes

Tenemos:

Entidad (Lógica pura).
Reducer/Acciones (Orquestación).
Custom Hook (Capa de aplicación y persistencia).

Versión simplificada de Atomic Design:
componentes independientes, testeables y fáciles de mover

Dividiremos la UI:
Componentes de Presentación (Dumb) y de Orquestación (Smart).

1. Jerarquía:
De pequeño a grande: cada pieza tenga una sola responsabilidad

Átomo: indivisible

`IconButton`:
botón genérico que recibe un icono y un onClick
centraliza el comportamiento de todos los botones de acción (borrar, editar).

`Checkbox`:
controlador del estado `isCompleted`.

`Input`: Un campo de texto controlado con soporte para la tecla Enter.

`Badge`: Para mostrar los contadores de tareas
(ej. el número "5" en pendientes).


Moléculas: Unidades funcionales

`TaskItem`: Combina el `Checkbox`, el texto de la tarea y el botón de eliminar
Tip: Este componente no debe conocer el id de la tarea para realizar acciones
debe `recibir funciones callback` (ej. onToggle, onDelete).

`FilterOption`: Un grupo de botones que disparan el cambio de filtro


Organismos: Características completas

`TaskList`: Se encarga del bucle (map) de las tareas
Robustez: manejamos el `Empty State`
Si no hay tareas, este componente decide qué mostrar
(un mensaje de "Todo listo", por ejemplo).

`TaskHeader`: Contiene el título y las estadísticas globales
(`TaskStats`).


## 2. Orquestador: TodoPage/App

Único Componente Smart
Punto de unión donde la arquitectura de capas converge

1. lama al Custom Hook `useTasks()`.
2. `Inyecta los datos y las funciones a los Organismos`.
3. No tiene lógica de negocio, solo reparte juego.


## 3. Composición sobre Prop Drilling

En lugar de pasar 5 props hacia abajo
usaremos composición de componentes donde sea posible
mantiene los componentes intermedios limpios.


### 1. Manejo de Estados de UI (No de Negocio):

##### Diferencia entre el estado de la tarea (isCompleted), del estado de la UI (ej. isEditing).

`isEditing`: debe vivir localmente en `TaskItem`
El resto de la app no necesita saber si el usuario está escribiendo un cambio
solo necesita saber cuando el cambio se confirma.


### 2. Accesibilidad (A11y): Una app que todos pueden usar

##### etiquetas <label> para los inputs
##### botones tengan aria-label si solo contienen iconos
##### navegación por teclado (Tab, Enter, Escape para cancelar edición).


## 4. Estructura de Props: Contrato

Para `TaskItem`:

Contrato de TS:

```
interface TaskItemProps {
  task: Task;              // La entidad que diseñamos
  onToggle: () => void;    // Acción simple
  onDelete: () => void;    // Acción simple
  onUpdate: (content: string) => void;
}
```



# Estructura

Ciclo: Entidad → Reducer → Hook → UI.

```
src/
├── core/                # Capa de Dominio (La Verdad)
│   ├── task.entity.ts   # Definición del tipo/interfaz
│   └── task.logic.ts    # Funciones puras (create, toggle, etc.)
│
├── store/               # Gestión de Estado (El Cerebro)
│   ├── task.reducer.ts  # El reducer y sus tipos de acciones
│   └── task.actions.ts  # Creadores de acciones (opcional, para limpieza)
│
├── hooks/               # Capa de Aplicación (El Puente)
│   ├── useTasks.ts      # El "Orquestador" principal
│   └── useLocalStorage.ts # Hook de utilidad para persistencia
│
├── components/          # Capa de Presentación (La Cara)
│   ├── ui/              # Componentes genéricos/átomos (Button, Input)
│   ├── todo/            # Componentes específicos de la característica
│   │   ├── TaskItem.tsx
│   │   ├── TaskList.tsx
│   │   └── TaskHeader.tsx
│   └── layout/          # Contenedores estructurales
│
├── services/            # Infraestructura (La Memoria)
│   └── storage.ts       # Adaptador para localStorage
│
├── App.tsx              # Componente raíz (Smart Component)
└── main.tsx             # Punto de entrada de Vite
```


1. Core:
código agnóstico a la UI
Si decides cambiar de React a otro framework
se puede copiar y pegar sin cambios

2. store:
Separar el reducer de los hooks facilita el testing
testear las transiciones de estado
necesidad de montar componentes de React.

3. components/ui/ vs components/todo/:
Los de ui son componentes que podrías usar en cualquier otra app
(un botón es un botón).
Los de todo tienen "conocimiento" de lo que es una tarea.

4. services:
Centralizar el acceso al localStorage
permite añadir validaciones extras
(como el "Safe JSON Parse") en un solo lugar
manteniendo los hooks limpios.


Navegación: 
vite.config.ts y tu tsconfig.app.json reconozcan el alias @.

Permitirá importar:

```
import { Task } from '@/core/task.entity'
```

En lugar de `../../../core/task.entity`.



# Diagramas

Clean Architecture y el Diseño Atómico



## 1. Diagrama de Capas: Clean Architecture

##### Diagrama de "pertenencia": Explica dónde reside la lógica y quién conoce a quién

Propósito:
Visualizar la regla de dependencia
##### capas externas dependen de las internas, pero el núcleo es agnóstico

Muestra:
círculo central es el `Dominio` (Task Entity)
rodeado por el `Estado` (useReducer)
finalmente la UI (React)
`Servicios` (LocalStorage) en la capa más externa.


## 2. Diagrama de Flujo de Datos (Unidireccional / Reducer)

##### Explica el ciclo de vida de una acción del usuario

Propósito:
Mostrar que el estado es inmutable y predecible.

Muestra:

1. `Vista`: Usuario pulsa "Toggle".
2. `Acción`: Se despacha un objeto { type, payload }.
3. `Reducer`: Recibe el estado actual + la acción.
4. `Lógica de Dominio`: El reducer invoca la función pura de la entidad.
5. `Nuevo Estado`: El Store se actualiza y la UI reacciona


## 3. Árbol de Jerarquía de Componentes: Atomic Design, "mapa" de la interfaz

Propósito:
Identificar la responsabilidad de cada componente
evitar el prop drilling

Muestra:
Relación padre-hijo desde App hasta los Atoms
Ayuda a decidir dónde se inyecta el Custom Hook
Smart vs. Dumb


## 4. Diagrama de Transición de Estados: Máquina de Estados

La lógica de la tarea tiene un ciclo de vida

Propósito:
Definir los estados válidos de una entidad para evitar bugs lógicos.

Muestra:
Estados (Pendiente, Completada, Editando)
Los eventos que disparan la transición entre ellos (marcar, borrar, editar).



# Diagrama c4

Conjunto jerárquico de diagramas
Para visualizar y documentar la arquitectura de software en cuatro niveles de abstracción
(Contexto, Contenedores, Componentes y Código)

Simplifica la comunicación técnica y no técnica
al desglosar sistemas complejos en vistas manejables

1. Diagrama de Contexto (Nivel 1):
Muestra el sistema en el centro, sus usuarios (personas)
y cómo interactúa con otros sistemas externos.

2. Diagrama de Contenedores (Nivel 2):
Desglosa el sistema en contenedores
(aplicaciones web, bases de datos, microservicios, apps móviles) y muestra sus tecnologías y comunicación.

3. Diagrama de Componentes (Nivel 3):
Descompone un contenedor en sus componentes internos
describiendo su funcionalidad técnica.

4. Diagrama de Código (Nivel 4):
Muestra la implementación de los componentes
(clases, interfaces), generalmente en diagramas UML


## Audiencia del Diagrama

`Contexto`:
técnica/no técnica

`Contenedores`:
equipos de desarrollo/soporte

`Componentes`:
arquitectos/desarrolladores

`Código`:
desarrolladores

Se basa en la estructura estática, facilitando el entendimiento de cómo interactúan las partes
facilitar la comprensión de la arquitectura, manteniendo los diagramas simples y actualizados a través de herramientas de código
draw.io, Mermaid.js, Excalidraw


## Diseño c4

##### Documenta no solo qué hace la app, sino cómo se dividen las responsabilidades

1. N1: Contexto/Panorama General
##### Describe cómo interactúa el usuario y dónde se guardan los datos a nivel macro

```
graph TD
    User((Usuario))
    App[ToDo App]
    Storage[(Browser LocalStorage)]

    User -- "Gestiona tareas" --> App
    App -- "Persiste datos" --> Storage
```

`Usuario`: El actor principal que crea y organiza tareas.
`ToDo App`: Nuestro sistema (SPA en React).
`LocalStorage`: El sistema externo (API del navegador) donde los datos sobreviven al refresco

2. N2: Contenedores/Tecnología
##### Desglosamos la aplicación en sus piezas tecnológicas
Al ser una SPA, el contenedor principal es el propio navegador

```
graph LR
    subgraph "Navegador del Usuario"
        SPA[Single Page Application\nReact + TypeScript]
        DB[(LocalStorage API)]
    end

    User((Usuario)) -- "Interactúa vía HTTP/UI" --> SPA
    SPA -- "Lectura/Escritura JSON" --> DB
```

`SPA`: El paquete generado por Vite que contiene toda la lógica de la interfaz.
`LocalStorage API`: El mecanismo de persistencia local

3. N3: Componentes/Arquitectura Interna
Nivel más valioso para el desarrollador
##### Refleja la Arquitectura de Capas: vemos cómo fluye la información dentro del código

```
graph TB
    subgraph "ToDo App (React Components)"
        UI[Capa de Presentación\nReact Components]
        Hook[useTasks\nCustom Hook / Fachada]
        Store[State Store\nReducer]
        Domain[Capa de Dominio\nTask Logic]
        Service[Storage Service\nAdapter]
    end

    User((Usuario)) --> UI
    UI --> Hook
    Hook --> Store
    Hook --> Service
    Store --> Domain
    Service --> [(LocalStorage)]
```

1. Capa de Presentación:
Componentes atómicos y organismos que renderizan la interfaz

2. useTasks (Hook):
API interna que expone funciones y datos a la UI

3. State Store (Reducer):
Gestiona las transiciones de estado de forma inmutable

4. Capa de Dominio:
Funciones puras que contienen las reglas de negocio (validaciones, creación).

5. Storage Service:
Encargado de traducir nuestro estado a JSON para el navegador


4. N4: Código (Implementación):
Suele omitirse a favor de la estructura de archivos
Donde los diagramas de clases o de secuencia detallarían cómo TaskItem llama a toggleTask

Al tener este mapa mental (o en un archivo .md de tu repo)
cualquier cambio en el futuro —como pasar de LocalStorage a una API REST
queda claramente identificado en el Nivel 3 como un cambio en el Storage Service

##### Donde los diagramas de arquitectura se encuentran con la implementación real
Este nivel debe reflejar cómo se comunican las funciones de Dominio con el Estado

En lugar de un diagrama estático
Nivel 4 se representa mejor con un Diagrama de Secuencia
Detalla la interacción entre los archivos de nuestra estructura.

### Diagrama de Secuencia (Interacción de Código)
Describe qué sucede exactamente cuando un usuario hace clic en "Completar tarea".
La lógica nunca toca la UI directamente

```
sequenceDiagram
    participant UI as TaskItem (Component)
    participant Hook as useTasks (Custom Hook)
    participant Store as taskReducer (Reducer)
    participant Domain as task.logic (Pure Functions)
    participant Storage as storage.ts (Service)

    User->>UI: Clic en Checkbox
    UI->>Hook: toggle(taskId)
    Hook->>Store: dispatch({ type: 'TOGGLE_TASK', payload: taskId })
    
    Note over Store, Domain: Orquestación de Inmutabilidad
    Store->>Domain: toggleStatus(currentTask)
    Domain-->>Store: return updatedTask (New Instance)
    
    Store-->>Hook: return newState
    Hook->>Storage: saveTasks(newState)
    Storage->>Browser: setItem('tasks', JSON)
    Hook-->>UI: Re-render con nuevo estado
```

### Implementación del N4: Código

Esqueleto técnico de los dos archivos que definen este comportamiento
Lo que "vive" dentro de los bloques del diagrama anterior.

1. Dominio: `src/core/task.logic.ts`

```
// src/core/task.entity.ts
export interface Task {
  readonly id: string;
  readonly content: string;
  readonly isCompleted: boolean;
  readonly createdAt: number;
}

// src/core/task.logic.ts
import { Task } from './task.entity';

export const create = (content: string): Task => ({
  id: crypto.randomUUID(),
  content: content.trim(),
  isCompleted: false,
  createdAt: Date.now(),
});

export const toggleStatus = (task: Task): Task => ({
  ...task,
  isCompleted: !task.isCompleted,
});
```

2. Orquestador: `src/store/task.reducer.ts`
Encargado de aplicar la lógica al estado global de forma predecible

```
import { Task } from '../core/task.entity';
import * as TaskLogic from '../core/task.logic';

export type TaskAction = 
  | { type: 'ADD_TASK'; payload: string }
  | { type: 'TOGGLE_TASK'; payload: string };

export const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, TaskLogic.create(action.payload)];
      
    case 'TOGGLE_TASK':
      return state.map(task => 
        task.id === action.payload 
          ? TaskLogic.toggleStatus(task) 
          : task
      );
      
    default:
      return state;
  }
};
```

## Rs Arquitectura C4

Nivel 1 (Contexto):
Usuario <-> App <-> LocalStorage.

Nivel 2 (Contenedores):
La SPA en el navegador.

Nivel 3 (Componentes):
Separación en UI, Hooks, Store y Dominio.

Nivel 4 (Código):
Funciones puras e inmutabilidad (lo que acabamos de ver).

##### Si decides que el id no lo genera el cliente
sino el servidor, solo cambias task.logic.ts

Si se va a usar Redux en lugar de useReducer
solo cambias el Store, pero el Dominio y la UI permanecen intactos.



# Código

# 1. Dominio: núcleo

Reglas que definen qué es una tarea
y cómo puede cambiar, independientemente del framework/tecnologia

## 1. Capa dominio
Es elcentro, no sabe nada del mundo exterior
Solo sabe de "Tareas".

1. Entidad: Verdad Tipada
Con TS definimos un Contrato de Datos
Con `readonly` forzamos la inmutabilidad desde el diseño
##### Readonly: una vez que una tarea se crea sus propiedades no se pueden "mutar" directamente, debemos generar una nueva versión
evita errores sutiles donde el estado cambia en un lugar y la UI no se entera

2. Lógica Pura: Funciones de Negocio
###### Funciones Puras: En lugar de tener métodos dentro de una clase

Entrada: Datos viejos.
Salida: Datos nuevos.
Efecto: Cero (no modifican nada fuera de ellas).

###### Hace que la lógica sea determinista: para el mismo texto de entrada, siempre obtendrás el mismo objeto de tarea
Es la base de un código fácil de testear y de razonar


## 2. Implementación

Dividir esto en dos archivos dentro de src/core/.


### Contrato: la forma de los datos

src/core/task.entity.ts

```
/**
 * Representa la unidad mínima de información de nuestra app.
 * Usamos 'readonly' para asegurar que el estado solo cambie a través del Reducer.
 */
export interface Task {
  readonly id: string;
  readonly content: string;
  readonly isCompleted: boolean;
  readonly createdAt: number;
  readonly updatedAt?: number; // Opcional, para futuras ediciones
}

/**
 * Definimos los filtros posibles como un tipo de unión.
 * Esto evita errores de dedo como escribir 'complete' en lugar de 'completed'.
 */
export type TaskFilter = 'all' | 'pending' | 'completed';
```


### Lógica: definimos las reglas de manipulación

src/core/task.logic.ts

```
import { Task } from './task.entity';

/**
 * Fábrica de tareas. 
 * Valida reglas de negocio: no tareas vacías, no espacios extra.
 */
export const createTask = (content: string): Task => {
  const trimmedContent = content.trim();
  
  if (!trimmedContent) {
    throw new Error("El contenido de la tarea no puede estar vacío.");
  }

  return {
    id: crypto.randomUUID(), // Estándar moderno en navegadores y Node
    content: trimmedContent,
    isCompleted: false,
    createdAt: Date.now(),
  };
};

/**
 * Cambia el estado de completado.
 * Retorna una COPIA de la tarea con el valor invertido.
 */
export const toggleStatus = (task: Task): Task => ({
  ...task,
  isCompleted: !task.isCompleted,
  updatedAt: Date.now(),
});

/**
 * Actualiza el contenido de una tarea existente.
 */
export const updateContent = (task: Task, newContent: string): Task => {
  const trimmed = newContent.trim();
  
  if (!trimmed) return task; // Si está vacío, ignoramos el cambio

  return {
    ...task,
    content: trimmed,
    updatedAt: Date.now(),
  };
};
```

Robustez:

Validación en la fuente:
Si intentas crear una tarea vacía, la lógica de dominio lanza un error antes de que el estado de React se ensucie

Identificadores únicos:
Usamos crypto.randomUUID() en lugar de números incrementales
para evitar colisiones si algún día sincronizamos con una base de datos externa

Independencia:
Podrías ejecutar este código en un script de Node o en una prueba unitaria con Vitest
sin necesidad de levantar un navegador.



## Prueba Unitaria del Dominio

Al ser lógica pura, el testing aquí es rápido, determinista
y no requiere de un navegador ni de librerías pesadas de UI

### 1. Testing de Interfaz?

No se testean las interfaces de TypeScript
desaparecen durante la transpilación a JavaScript
no existen en tiempo de ejecución.

El "test" de la interfaz lo hace el propio compilador de TypeScript
mientras escribes el código

Si intentas devolver un objeto que no cumple con Task
el editor te avisará inmediatamente

### 2. Testing de cada función?

##### No se trata de alcanzar un "100% de cobertura", sino de asegurar que las reglas de negocio se cumplan
##### Debes testear cada función que transforme datos o tome decisiones (como createTask o toggleStatus).


### State-Based Testing: Para un dominio basado en funciones puras e inmutabilidad

La técnica más efectiva es el State-Based Testing (Pruebas basadas en estado).

##### A diferencia del Interaction-Based Testing (donde verificas si una función "llamó a otra"),

aquí solo te importa el resultado final

##### El patrón estándar es el AAA (Arrange, Act, Assert):

1. Arrange (Preparar):
Defines los datos de entrada
(ej. una tarea pendiente).

2. Act (Actuar):
Ejecutas la función de dominio
(ej. toggleStatus).

3. Assert (Afirmar):
Verificas que la salida es lo que esperas
(ej. que la tarea devuelta esté completada).


### Pruebas robustaz: que aporten valor real

1. Casos de Éxito (Happy Path):
La función hace lo que dice?
(Ej: Si paso "Limpiar"(?/crear), la tarea se crea con ese texto).

2. Casos de Borde (Edge Cases):
Qué pasa con textos con muchos espacios en blanco?
Se limpian correctamente con el .trim()?

3. Casos de Error (Negative Testing):
La función lanza la excepción correcta si el contenido es una cadena vacía?


### Testear Comportamiento, no Implementación

##### Error común: escribir tests que son un "espejo" del código

Si el test dice "verifica que se llamó a Date.now()
estás testeando la implementación

Si el test dice "verifica que la tarea tiene una fecha de creación válida",
estás testeando el comportamiento.


#### Piramide de pruebas:

```
				ui tests 
			api tests

		integration tests
	component tests

unit tests

```

ui tests y api tests: end to end 
Son lentos conmás integración

unit tests: son rapidos, más aislados

En la pirámide de pruebas, estos tests de dominio están en la base:
son los más numerosos, los más baratos de mantener y los más rápidos de ejecutar


### Diseño de un Test (Pseudocódigo)

Para nuestra función `toggleStatus`

`Entrada`: Una tarea con isCompleted: false.
`Acción`: Llamar a toggleStatus(tarea).
`Expectativa 1`: La nueva tarea tiene isCompleted: true.
`Expectativa 2`: La tarea original NO ha cambiado (prueba de inmutabilidad).
`Expectativa 3`: El updatedAt de la nueva tarea es mayor que el original


### Testing de funciones puras

Como nuestro dominio es puro (funciones que no dependen de React ni de efectos secundarios),
las pruebas son rápidas y elegantes.

#### 1. Testing de Comportamiento (AAA)

En el nivel de dominio, aplicamos el patrón AAA (Arrange, Act, Assert).
forma más pragmática de estructurar un test para que sea legible y fácil de mantener

Arrange (Organizar): Preparas el escenario. Defines los datos de entrada y el estado inicial.
Act (Actuar): Ejecutas la función que quieres probar.
Assert (Afirmar): Verificas que el resultado coincide con lo esperado.


Inmutabilidad:

##### Verificar que las funciones no "muten" los objetos originales
##### No solo verificamos que la tarea nueva sea correcta, sino que la tarea vieja siga intacta
Garantiza que React pueda detectar cambios de estado de forma eficiente


Edge Cases:

No solo testeamos el "camino feliz".

##### La robustez se encuentra en cómo manejamos los errores

Qué pasa si el texto solo tiene espacios?
Qué pasa si intentamos actualizar con un texto vacío?
Se genera un ID único realmente?


### Código de Testing

Vitest compatible con la configuración de Vite y con una API idéntica a Jest.

src/core/task.logic.test.ts:

```
import { describe, it, expect } from 'vitest';
import * as TaskLogic from './task.logic';
import { Task } from './task.entity';

describe('Task Logic (Domain)', () => {
  
  describe('createTask', () => {
    it('debería crear una tarea válida con contenido limpio', () => {
      // Arrange
      const content = '  Aprender Vitest  ';
      
      // Act
      const task = TaskLogic.createTask(content);

      // Assert
      expect(task.content).toBe('Aprender Vitest'); // Verifica el .trim()
      expect(task.isCompleted).toBe(false);
      expect(task.id).toBeDefined();
      expect(typeof task.createdAt).toBe('number');
    });

    it('debería lanzar un error si el contenido está vacío', () => {
      expect(() => TaskLogic.createTask('   ')).toThrow();
    });
  });

  describe('toggleStatus', () => {
    it('debería invertir el estado de completado e incluir updatedAt', () => {
      // Arrange
      const initialTask = TaskLogic.createTask('Test');
      
      // Act
      const updatedTask = TaskLogic.toggleStatus(initialTask);

      // Assert
      expect(updatedTask.isCompleted).toBe(true);
      expect(updatedTask.updatedAt).toBeDefined();
      // Prueba de Inmutabilidad:
      expect(initialTask.isCompleted).toBe(false); 
      expect(initialTask).not.toBe(updatedTask); // Son objetos diferentes en memoria
    });
  });

  describe('updateContent', () => {
    it('debería actualizar el contenido si es válido', () => {
      const task = TaskLogic.createTask('Viejo');
      const updated = TaskLogic.updateContent(task, 'Nuevo');
      
      expect(updated.content).toBe('Nuevo');
      expect(updated.updatedAt).toBeDefined();
    });

    it('no debería actualizar si el nuevo contenido es vacío', () => {
      const task = TaskLogic.createTask('Importante');
      const updated = TaskLogic.updateContent(task, '   ');
      
      expect(updated.content).toBe('Importante'); // Mantiene el original
      expect(updated).toBe(task); // Pragmático: devuelve la misma referencia si no hay cambio
    });
  });
});
```

1. Referencialmente íntegro:
En `updateContent`, si el cambio no es válido
devolvemos la misma referencia (return task).
Esto evita re-renders innecesarios en React.

2. Desacoplado:
Si decides cambiar Vitest por otro framework, el 95% del código del test sigue siendo lógica pura

3. Documentación Viva:
Cualquiera que lea estos tests entiende las reglas de negocio de tu ToDo app
sin tener que leer la implementación.


### Ejecutar pruebas/flujo

Watch Mode:
Ejecutas vitest en una terminal

Vitest detecta qué archivos cambiaste y solo corre los tests afectados

TDD:

#### Estándar: Red-Green-Refactor

Red: Escribes un test para una funcionalidad que aún no existe (falla).
Green: Escribes el código mínimo para que el test pase.
Refactor: Limpias el código sabiendo que el test te avisará si rompes algo.


#### Gatekeeper: Pre-commit Hooks

Nunca se permite que código que rompe los tests llegue al repositorio
herramientas como Husky y lint-staged

Cuando haces git commit, un script dispara automáticamente los tests relacionados con los archivos que estás subiendo
Resultado: Si un test falla, el commit se aborta
Tu historial de Git se mantiene "limpio" y funcional en todo momento.


#### Integración Continua (CI)

Aunque en tu máquina los tests pasen
el entorno de CI (GitHub Actions, GitLab CI, Jenkins) es el juez final.

1. código (Push/Pull Request).

2. servidor aislado descarga tu código, instala dependencias y corre toda la suite de pruebas y el linter

3. Si la CI falla, no se permite el Merge
Esto protege la rama principal (main) de errores humanos.


####  Reporte: Cobertura

Testear lo que importa

C8 / Vitest Coverage: Vitest tiene soporte nativo para generar reportes de cobertura

##### Dominio/Lógica: 90-100% de cobertura (es barato y crítico).
 
##### UI/Componentes: 60-70%, testear que el botón dispare la acción correcta es vital).
testear que un botón sea azul es perder el tiempo


Proceso:

Etapa | Herramienta | Escenario

Feedback Inmediato
vitest --watch
Mientras escribes código.

Prevención Local:
Husky + lint-staged
Al intentar hacer git commit.

Validación de Equipo
GitHub Actions
Al abrir un Pull Request.

Auditoría
Vitest Coverage
"Periódicamente para detectar "puntos ciegos".


#### Comandos testing

```
npm run test:ui # Abre una interfaz web hermosa de Vitest para inspeccionar tests
npm run coverage # Genera el reporte de qué líneas de código NO están cubiertas
```

```
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    
    "test": "vitest",                         // El estándar (Watch mode por defecto)
    "test:run": "vitest run",                 // Corre una vez y sale (Ideal para Husky/Git)
    "test:ui": "vitest --ui",                 // Interfaz web interactiva en el navegador
    "test:coverage": "vitest run --coverage", // Reporte de qué líneas faltan testear
    "test:related": "vitest related",         // Solo corre tests de archivos que cambiaste
    
    "preview": "vite preview"
  }
}
```

`npm test` (o npm t):
Vitest se queda "escuchando" cambios. Gracias al HMR (Hot Module Replacement)
si cambias una línea en task.logic.ts, el test se refresca en milisegundos

`npm run test:run`:
Este es el Gatekeeper
Se usa en los scripts de pre-commit
este termina el proceso con un código de salida (0 si todo bien, 1 si algo falla).
garantiza que no subas código roto.

`npm run test:ui`:
levanta un servidor local con ui
extremadamente útil cuando tienes muchos tests y quieres ver el árbol de fallos
filtrar por nombre o ver el grafo de dependencias de tus archivos

`npm run test:coverage`:
Utiliza v8 o istanbul para decirte:
"la función updateContent no tiene ningún test que pase por el if (!trimmed)".

La primera vez que lo corras, Vitest te pedirá instalar un paquete de soporte (@vitest/coverage-v8).
aceptar

En la Terminal: Puedes usar `npm test -- --help`
para ver filtros potentes
como correr solo los tests que contengan la palabra "Domain":
`npm test -- -t Domain`.


### Librerias de testing

Vitest y el motor de Cobertura:

Necesitaremos vitest para los tests y un "provider" para que el script de coverage

```
npm install -D vitest @vitest/coverage-v8
```

Utilidades de testing para UI

```
npm install -D jsdom @testing-library/react @testing-library/jest-dom
```

viteconfig.ts
```
import path from 'path'
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,           // Permite usar 'describe', 'it', 'expect' sin importarlos (opcional)
    environment: 'jsdom',    // Necesario para testear componentes de React después
    setupFiles: './src/test/setup.ts', // Donde configuraremos extensiones de jest-dom
  },
})
```


#### Implementación: Creando el archivo src/test/setup.ts

Para que tu configuración de vite.config.ts

```
// src/test/setup.ts
import '@testing-library/jest-dom/vitest'; // Extiende Vitest con matchers de DOM
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

/**
 * Limpieza automática después de cada test.
 * Esto evita que los componentes renderizados en un test 
 * se queden "colgados" en el DOM para el siguiente test.
 */
afterEach(() => {
  cleanup();
});
```

1. Lanzas npm run test:run.
2. Vitest lee vite.config.ts.
3. Vitest ejecuta src/test/setup.ts (Prepara el DOM y los matchers).
4. Vitest corre tus archivos .test.ts.



# 2. Reducer: Capa Store/estado 

##### El estado de la aplicación no se cambia "al azar" desde cualquier componente
El Reducer es el único lugar autorizado para transformar la lista de tareas

Reducer como un embudo (crea un canal) para filtrado:

`Entrada`:
estado actual (la lista de tareas) + una Acción (la intención del usuario).

`Salida`:
Un nuevo estado (una nueva lista).


`useReducer`:
Sobre useState

Lógica Centralizada:
Si quisieras añadir un log de auditoría o guardar en localStorage, solo tienes que mirar un archivo

Pragmatismo:
Evitas que la lógica de "cómo se añade una tarea" esté dispersa por toda la UI

Consistencia:
Al usar las funciones de Dominio dentro del Reducer
garantizamos que las reglas que testeamos se apliquen


## Código del reducer
src/store/task.reducer.ts

##### Uniremos los tipos de acciones y la lógica de transición
importamos la lógica testeada


### Contrato de Acciones

Primero definimos qué puede "pasar" en nuestra app

```
import { Task, TaskFilter } from '@/core/task.entity';
import * as TaskLogic from '@/core/task.logic';

// Definimos el estado global de esta característica
export interface TaskState {
  tasks: Task[];
  filter: TaskFilter;
}

// Discriminante de acciones: El compilador sabrá qué payload tiene cada una
export type TaskAction =
  | { type: 'ADD_TASK'; payload: string }
  | { type: 'TOGGLE_TASK'; payload: string }
  | { type: 'REMOVE_TASK'; payload: string }
  | { type: 'SET_FILTER'; payload: TaskFilter }
  | { type: 'CLEAR_COMPLETED' };
```

Definición del contrato:
En TypeScript, antes de escribir la lógica
definimos la "forma" de los datos y las "reglas" de comunicación.

Aplicando dos conceptos:
Single Source of Truth (Fuente única de verdad) y Discriminated Unions (Uniones discriminadas).

1. `interface TaskState`: La Fotografía del Estado

`tasks: Task[]`: Es el corazón de la app
array que contiene objetos que cumplen con la interfaz Task

`filter: TaskFilter`: guardas qué está viendo el usuario
(all, pending o completed).

Al agrupar el filtro y las tareas en un solo objeto TaskState
garantizas que cuando el estado cambie, ambos valores sean coherentes entre sí

Si quieres añadir un buscador:
añadirías `searchQuery: string` a esta interfaz

2. `type TaskAction`: Diccionario de Intenciones
la acción es un objeto
le dice al Reducer: "Quiero que pase X cosa con estos datos Y"

Discriminated Union:
propiedad type con un texto fijo (un literal).
permite que el compilador sea "inteligente":

Si el type es `'ADD_TASK'`:
TS sabe que debe existir un payload de tipo string (el texto de la tarea).

Si el type es `'SET_FILTER'`:
el payload solo puede ser uno de los tres valores válidos
de `TaskFilter`

type `'CLEAR_COMPLETED'`:

3. Autocompletado y Seguridad
sabe que no hay payload, por lo que si intentas acceder a él, te dará un error.

cuando escribas el `switch` dentro del reducer
el editor hará:

Autocompletado de casos:
Al escribir case ' dentro del switch
el editor te sugerirá exactamente las 5 acciones que definiste.

Validación de datos:
Si en el caso de REMOVE_TASK intentas tratar al payload como un número
"Error: el payload para REMOVE_TASK debe ser un string (el ID de la tarea)".

Protección contra el olvido:
Si añades una sexta acción al type TaskAction
pero olvidas programarla en el Reducer
puedes configurar TypeScript para que te dé un error de "Non-exhaustive switch"

##### TaskState es QUÉ hay en la memoria.
##### TaskAction es QUÉ PUEDE CAMBIAR y qué información se necesita para ese cambio
Como un juego de mesa: define el tablero (Estado) y los movimientos permitidos (Acciones).


### Función del reducer: motor de cambios de la app

Orquesta las llamadas al dominio

##### Si el Dominio eran las "reglas de la física" de tus tareas
##### el Reducer es el cerebro que decide cómo evoluciona la realidad de la app cuando el usuario interactúa con ella

```
export const initialState: TaskState = {
  tasks: [],
  filter: 'all',
};

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case 'ADD_TASK':
      // Usamos nuestra lógica de dominio testeada
      return {
        ...state,
        tasks: [...state.tasks, TaskLogic.createTask(action.payload)],
      };

    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload ? TaskLogic.toggleStatus(t) : t
        ),
      };

    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };

    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };

    case 'CLEAR_COMPLETED':
      return {
        ...state,
        tasks: state.tasks.filter((t) => !t.isCompleted),
      };

    default:
      return state;
  }
};
```

Inmutabilidad: Nunca hacemos state.tasks.push().
Siempre devolvemos objetos nuevos
vital para que el React Compiler sepa exactamente qué cambió y qué renderizar.

Seguridad de Tipos: Si intentas enviar una acción que no existe o un payload incorrecto
(ej. un número en lugar de un string en ADD_TASK)
TypeScript te dará un error antes de que intentes ejecutar la app

Testear: Al igual que el dominio, el Reducer es una función pura
Podríamos escribir tests para el Reducer sin necesidad de montar ningún componente de React

1. `initialState`: partida limpia
Definirlo como una constante exportable permite que sea fácil de resetear
(ejemplo, para un botón de "Cerrar sesión" o "Borrar todo")
facilita pruebas ya que sabes exactamente con qué datos empieza el sistema

2. `Reducer`: Una función pura e inmutable
el Reducer nunca modifica el estado anterior
siempre calcula uno nuevo
fundamental para que el React Compiler y el Virtual DOM funcionen de forma eficiente.

`ADD_TASK`: fábrica

```
tasks: [...state.tasks, TaskLogic.createTask(action.payload)]
```
Aquí usamos el operador spread (`...`):
para crear un nuevo array. No hacemos `.push()`.

Al llamar a `TaskLogic.createTask`:
delegamos la responsabilidad de crear un ID y validar el texto a la capa de Dominio que ya testeamos.
Resultado: El Reducer sigue siendo simple y el Dominio sigue siendo el jefe.

`TOGGLE_TASK`: Actualización

```
state.tasks.map((t) => t.id === action.payload ? TaskLogic.toggleStatus(t) : t)
```

map() herramienta perfecta para la inmutabilidad: recorre el array y genera uno nuevo
Si el ID coincide, aplicamos la lógica de toggleStatus
si no, devolvemos la tarea tal cual
garantiza que solo cambie la referencia de la tarea específica que fue tocada

`REMOVE_TASK y CLEAR_COMPLETED`: filtro
Usamos .filter(), que por definición devuelve un array nuevo omitiendo los elementos que no cumplen la condición
Es la forma más limpia y robusta de "borrar" en React

`SET_FILTER`: Cambio de Contexto

```
return { ...state, filter: action.payload };
```
preservamos todas las tareas (...state)
pero "pisamos" solo la propiedad filter.

3. `Caso default`: Red de Seguridad

```
default:
  return state;
```

Si por alguna razón se despacha una acción que el Reducer no reconoce
(un error de escritura o una acción de otra parte de la app)
el Reducer simplemente devuelve el estado actual sin cambios
Esto evita que la aplicación se rompa o que el estado se vuelva undefined.

Separación de Conceptos:
El Reducer no sabe cómo se crea una tarea
(eso lo sabe el Dominio), solo sabe cuándo añadirla al estado.

Previsibilidad:
Dado un mismo estado y una misma acción
el resultado será siempre idéntico
hace que debugear sea trivial.

Para el Compilador:
Al ser 100% inmutable, React Compiler puede optimizar las re-renderizaciones de tus componentes de forma atómica
sin usar useMemo o useCallback manualmente.


## Testing del Reducer

### Estrategia: Testing de Transición de Estados

Como es una función pura `(estado, acción) => nuevoEstado)`
no necesitas simular clics, ni renderizar componentes, ni usar jsdom
Solo necesitas pasarle datos y verificar la salida

Es la prueba más rápida y "limpia" que puedes escribir.

1. Transiciones Deterministas
En el Reducer no testeamos la lógica de negocio (lo hicimos en el dominio)
##### Testeamos la orquestación: asegurar que cuando llega la "intención" ADD_TASK, el Reducer sepa exactamente en qué parte del estado colocar el resultado

3 pilares del test:

`Estado Inicial`: Empieza la app como debería?
`Integración con el Dominio`: Llama el Reducer a las funciones del Dominio correctamente?
`Inmutabilidad`: Reducer devuelve un objeto nuevo o está modificando el anterior por error?

2. Implementación: código
archivo src/store/task.reducer.test.ts
usamos el `initialState` que exportamos en el código
"Facil de rastrear: facilita pruebas ya que sabes exactamente con qué datos empieza el sistema"

```
import { describe, it, expect } from 'vitest';
import { taskReducer, initialState, TaskState } from './task.reducer';

describe('Task Reducer', () => {

  it('debería retornar el estado inicial por defecto', () => {
    // Enviamos una acción inexistente (cast a any para bypass de TS)
    const result = taskReducer(initialState, { type: 'UNKNOWN' } as any);
    expect(result).toBe(initialState);
  });

  it('debería manejar ADD_TASK añadiendo una nueva tarea', () => {
    const action = { type: 'ADD_TASK' as const, payload: 'Nueva Tarea' };
    
    const newState = taskReducer(initialState, action);

    expect(newState.tasks).toHaveLength(1);
    expect(newState.tasks[0].content).toBe('Nueva Tarea');
    expect(newState.tasks[0].isCompleted).toBe(false);
  });

  it('debería manejar TOGGLE_TASK cambiando el estado de una tarea', () => {
    // Arrange: Creamos un estado con una tarea previa
    const stateWithTask: TaskState = {
      ...initialState,
      tasks: [{ id: '123', content: 'Test', isCompleted: false, createdAt: Date.now() }]
    };
    const action = { type: 'TOGGLE_TASK' as const, payload: '123' };

    // Act
    const newState = taskReducer(stateWithTask, action);

    // Assert
    expect(newState.tasks[0].isCompleted).toBe(true);
    // Verificamos inmutabilidad
    expect(newState).not.toBe(stateWithTask);
    expect(newState.tasks).not.toBe(stateWithTask.tasks);
  });

  it('debería manejar SET_FILTER actualizando el filtro actual', () => {
    const action = { type: 'SET_FILTER' as const, payload: 'completed' as const };
    
    const newState = taskReducer(initialState, action);

    expect(newState.filter).toBe('completed');
  });

  it('debería manejar CLEAR_COMPLETED eliminando solo las tareas hechas', () => {
    const stateWithMix: TaskState = {
      ...initialState,
      tasks: [
        { id: '1', content: 'Hecha', isCompleted: true, createdAt: 1 },
        { id: '2', content: 'Pendiente', isCompleted: false, createdAt: 2 },
      ]
    };

    const newState = taskReducer(stateWithMix, { type: 'CLEAR_COMPLETED' });

    expect(newState.tasks).toHaveLength(1);
    expect(newState.tasks[0].id).toBe('2');
  });
});
```

Aislamiento:
Si el componente visual de la lista de tareas falla, estos tests seguirán pasando
##### Esto te permite identificar inmediatamente si un bug está en la lógica de estado o en la UI

Documentación de Casos:
El test de CLEAR_COMPLETED explica visualmente qué debe pasar con un array mixto de tareas
Es más fácil de leer que el propio código del Reducer

Refactor:
Si decides que las tareas deben guardarse en un objeto (mapa) en lugar de un array, para rendimiento
solo cambias el Reducer y estos tests te dirán si la lógica sigue siendo correcta


Garantiza que el orquestador (Reducer) coordine correctamente a la lógica (el Dominio).

1. Caso por defecto (Seguridad):

```
it('debería retornar el estado inicial por defecto', () => { ... });
```

Envía una acción que el Reducer no conoce (UNKNOWN).

importante: Asegura que si algo sale mal en el flujo de acciones
el Reducer no "rompa" la app devolviendo undefined
Simplemente devuelve el estado tal como estaba.

Uso de `as any`:
TS nos impediría enviar una acción que no definimos en el TaskAction
forzamos el error para probar la resistencia del código

2. ADD_TASK (Integración):

```
it('debería manejar ADD_TASK añadiendo una nueva tarea', () => { ... });
```

Pasa un estado vacío y una acción con un texto
Verifica que ahora el array tenga longitud 1
y los datos básicos sean correctos.

detalle: no testeamos si el ID es un UUID válido aquí
lo hicimos en el test de Dominio
solo verificamos que la tarea llegó al array

3. TOGGLE_TASK e Inmutabilidad:
test más valioso de todo el archivo

```
it('debería manejar TOGGLE_TASK cambiando el estado de una tarea', () => { ... });
```

Arrange: Creamos un "estado de laboratorio"
con una tarea que ya tiene el ID '123'.

Assert de Inmutabilidad:
`expect(newState).not.toBe(stateWithTask)`:
Verifica que el objeto de estado es una nueva referencia en memoria

`expect(newState.tasks).not.toBe(stateWithTask.tasks)`:
Verifica que el array de tareas también es nuevo

Si estos tests fallan, significa que estás mutando el estado original
En React, si no cambias la referencia, la UI no se enterará de que debe renderizar de nuevo

4. SET_FILTER: Cambio de Contexto

```
it('debería manejar SET_FILTER actualizando el filtro actual', () => { ... });

```

Verifica que la propiedad filter del objeto de estado cambie de 'all' a 'completed'
vital para asegurar que los componentes de la UI
como los botones de filtro, realmente estén comunicando su intención al Store

5. CLEAR_COMPLETED: Lógica de Limpieza

```
it('debería manejar CLEAR_COMPLETED eliminando solo las tareas hechas', () => { ... });
```

Crea un estado con dos tareas:
una lista (isCompleted: true) y otra pendiente

Verificación: Asegura que tras la acción, el array resultante solo contenga la tarea pendiente
Es la prueba para el método .filter() que usamos en el Reducer


##### El test es un Contrato de Comportamiento: testeamos la verdad de los datos
Clave: Si decides cambiar la librería de UI
o incluso el framework (de React a Preact)
estos tests seguirán pasando y siendo válidos
la lógica de transiciones de estado no depende de la vista



# Array vs Objeto

Elección impacta directamente en el rendimiento y la simplicidad de tu código


## Array (Task[])

Lista ordenada: Sibuscas algo especifico tenes que ir de uno a uno
poder: Mantiene el orden de creación o prioridad de forma natural

debilidad: Para actualizar una tarea, el motor de JavaScript debe recorrer el array (O(n))
lento si tienes miles de elementos.


## Objeto o Mapa ({ [id: string]: Task })

diccionario o Hash Map
si buscas la llave "123", vas directo al casillero "123" sin mirar los demás

poder: El acceso es instantáneo (O(1))
No importa si tienes 10 o 10,000 tareas
encontrar una por ID tarda lo mismo

debilidad: no garantizan el orden
para renderizar la lista en React, tienes que convertir el objeto de nuevo a un array con Object.values().


## Elección

Array:

1. lista pequeña: menos de 500-1000 elementos
Un ToDo app suele entrar

2. Orden es primordial: ej, tareas ordenadas por fecha

3. Mantener el código simple y legible


Objeto:

1. Tienes cantidad masiva de datos

2. Realizas muchísimas actualizaciones frecuentes en elementos específicos por su ID.

3. Estas trabajando con una base de datos normalizada (estilo Redux Toolkit).


## Enfoque Normalización

En aplicaciones de gran escala se usa una mezcla de ambos llamada Normalización

```
interface NormalizedTasks {
  ids: string[];                // El Array mantiene el ORDEN
  entities: Record<string, Task>; // El Objeto permite ACCESO RÁPIDO
}
```

Te da lo mejor de los dos mundos:
mantienes el orden en ids
haces actualizaciones rápidas en entities.


## Pragmatismo

Una lista de tareas rara vez supera los 100 elementos
La diferencia de milisegundos entre O(n) y O(1) es imperceptible para el usuario

Simplicidad:
En React, renderizar tasks.map() es el estándar
hace que el código sea mucho más limpio

Filtros:
filtrar por "Completadas" o "Pendientes"
el array permite usar .filter() de forma muy directa


Regla: no optimizar prematuramente
Empieza con la estructura más simple que resuelva el problema de forma elegante.


# 3. Custom Hook: useTasks

Actúa como una Fachada (Facade):
##### Es el punto de entrada único que la interfaz de usuario (UI) usará para interactuar con la lógica.

1. Capa de Orquestación
Tenemos el reducer como motor, al dominio como las reglas
el hook será el tablero de mandos
##### Su misión es ocultar la complejidad de la gestión de estado y los efectos secundarios a los componentes visuales

## 1. Encapsulamiento de la "Intención"

En lugar de que un componente sepa que existe un dispatch
o una acción llamada ADD_TASK, simplemente llamará a una función llamada addTask().

Hace que tus componentes sean "tontos" y fáciles de mantener
solo se preocupan por renderizar.


## 2. Persistencia Silenciosa: Side Effects

Manejamos el ciclo de vida de los datos

Hidratación:
Al cargar la app, el hook busca si hay tareas guardadas en el localStorage

Sincronización:
Cada vez que el estado cambia
el hook se encarga de persistir esos cambios automáticamente


## 3. Estado Derivado

El hook no solo expone las tareas
puede calcular datos sobre la marcha (como el contador de pendientes)
sin necesidad de guardarlos en el estado
manteniendo la "fuente de verdad" limpia


## Código

##### Para que sea robusto, se crea un servicio de almacenamiento para no ensuciar el Hook con llamadas directas a la API del navegador

### Adaptador
src/services/storage.service.ts

```
import { Task } from '@/core/task.entity';

const STORAGE_KEY = 'v1_tasks_data';

export const storageService = {
  save: (tasks: Task[]): void => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  },

  load: (): Task[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error loading from localStorage', error);
      return [];
    }
  }
};
```

##### Su función es actuar como un "traductor" entre tu aplicación y el mundo exterior
en este caso, la API del navegador

Entre la app y localStorage necesitamos un adaptador para conectarlos
El Adapter Pattern se usa para que dos interfaces incompatibles trabajen juntas

La lógica de negocio trabaja con objetos de JavaScript
pero el navegador solo entiende strings (cadenas de texto).

Desacoplamiento:
Si decides dejar de usar localStorage y quieres guardar las tareas en una base de datos real (como Firebase o Supabase)
solo se tiene que cambiar este archivo

Responsabilidad Única:
El Hook se encarga de la lógica de React
##### Este servicio se encarga exclusivamente de la persistencia

1. Llave Versionada (STORAGE_KEY)

```
const STORAGE_KEY = 'v1_tasks_data';
```

Prefijo como v1_ es un rasgo senior
Si en el futuro cambias radicalmente la estructura de tus tareas
Ej, añades una propiedad obligatoria nueva
puedes subir a v2_.
evita que la aplicación intente cargar datos viejos incompatibles y "explote".

2. Método save: Serialización y Seguridad

`JSON.stringify`:
Convierte tu array de objetos en una cadena de texto plana
para que lo acepte

`try/catch`: 
localStorage puede fallar, si el usuario está en "Modo Incógnito" estricto 
o si el almacenamiento está lleno (QuotaExceededError).
Sin este bloque, la app se cerraría inesperadamente.

3. Método load: Deserialización y Resiliencia

```
const data = localStorage.getItem(STORAGE_KEY);
return data ? JSON.parse(data) : [];
```

JSON.parse: Toma el string y reconstruye los objetos originales.

Manejo de Nulos: Si es la primera vez que el usuario abre la app,
data será null
El operador ternario asegura que siempre devolvamos un array vacío [] en lugar de un error
manteniendo la consistencia de tipos.


Beneficios:

Testeabilidad: Podrías escribir un test para este servicio sin necesidad de React
Solo verificas que lo que guardas es lo que recuperas.

Centralización de Errores: se podría añadir un sistema de logs para errores de guardado
solo tienes que añadir una línea en los catch de este archivo

Limpieza: Mantiene el resto del código libre de "ruido" de APIs del navegador

En Linux, el localStorage de los navegadores suele guardarse en archivos SQLite dentro de tu carpeta de perfil
(ej. .config/google-chrome/Default/Local Storage)

Este adaptador es el encargado de que tú no tengas que preocuparte por nada de eso


### Hook
src/hooks/useTasks.ts

##### Unimos todo: usamos lazy initialization de useReducer para cargar el localStorage solo una vez al arrancar

```
import { useReducer, useEffect, useMemo } from 'react';
import { taskReducer, initialState } from '@/store/task.reducer';
import { storageService } from '@/services/storage.service';
import { TaskFilter } from '@/core/task.entity';

export const useTasks = () => {
  // 1. Inicializamos el estado cargando desde el storage
  const [state, dispatch] = useReducer(taskReducer, initialState, (init) => {
    const savedTasks = storageService.load();
    return savedTasks.length > 0 ? { ...init, tasks: savedTasks } : init;
  });

  // 2. Sincronización automática: cada vez que tasks cambie, guardamos
  useEffect(() => {
    storageService.save(state.tasks);
  }, [state.tasks]);

  // 3. Estado derivado (Calculado eficientemente)
  const filteredTasks = useMemo(() => {
    switch (state.filter) {
      case 'pending': return state.tasks.filter(t => !t.isCompleted);
      case 'completed': return state.tasks.filter(t => t.isCompleted);
      default: return state.tasks;
    }
  }, [state.tasks, state.filter]);

  const stats = {
    total: state.tasks.length,
    pending: state.tasks.filter(t => !t.isCompleted).length,
    completed: state.tasks.filter(t => t.isCompleted).length
  };

  // 4. API pública del Hook (Acciones simplificadas)
  const add = (content: string) => dispatch({ type: 'ADD_TASK', payload: content });
  const toggle = (id: string) => dispatch({ type: 'TOGGLE_TASK', payload: id });
  const remove = (id: string) => dispatch({ type: 'REMOVE_TASK', payload: id });
  const setFilter = (filter: TaskFilter) => dispatch({ type: 'SET_FILTER', payload: filter });
  const clearCompleted = () => dispatch({ type: 'CLEAR_COMPLETED' });

  return {
    tasks: filteredTasks,
    filter: state.filter,
    stats,
    add,
    toggle,
    remove,
    setFilter,
    clearCompleted
  };
};
```

Eficiencia: El uso de useMemo para el filtrado asegura que no recalculemos la lista si no ha cambiado nada relevante

Seguridad: Si el JSON.parse del localStorage falla
porque un usuario editó manualmente los datos del navegador
nuestro storageService lo maneja con un try/catch devolviendo un array vacío, evitando que la app "explote".

Clean Code: Tus componentes de React ahora serán súper limpios
No verás un useEffect de 20 líneas en App.tsx
solo verás algo como `const { tasks, add } = useTasks()`.


##### El hook useTasks es la orquestación final: donde React toma el control de todo lo que hemos construido
Dominio, Reducer y Servicio, lo convierte en una herramienta fácil de usar para tus componentes.

1. Lazy Initialization:

```
const [state, dispatch] = useReducer(taskReducer, initialState, (init) => {
  const savedTasks = storageService.load();
  return savedTasks.length > 0 ? { ...init, tasks: savedTasks } : init;
});
```

El tercer argumento de useReducer es una `función de "init"`.
React la ejecuta solo una vez cuando el componente se monta por primera vez

robusto: Leer del localStorage es una operación "lenta" (comparada con la memoria RAM).
Al hacerlo aquí, evitamos que React intente leer del disco en cada renderizado
optimizando el rendimiento

Hidratación: Si hay datos guardados, "hidratamos" el estado inicial con ellos
si no, usamos el initialState vacío.

2. Persistencia (useEffect):

```
useEffect(() => {
  storageService.save(state.tasks);
}, [state.tasks]);
```

Concepto: Este efecto tiene una dependencia clara: state.tasks.

Sincronización: Cada vez que añades, borras o marcas una tarea como completada
el Reducer actualiza el estado y este efecto se dispara automáticamente para guardar la nueva lista

Resultado: El usuario puede cerrar la pestaña o reiniciar
sus tareas seguirán ahí la próxima vez.

3. Rendimiento y Estado Derivado (useMemo)

```
const filteredTasks = useMemo(() => {
  // ... switch con filtros
}, [state.tasks, state.filter]);
```

Concepto: : No queremos filtrar la lista en cada pequeño parpadeo de la interfaz
como cuando mueves el ratón o escribes en un input
useMemo: "Solo vuelve a calcular esta lista si las tareas cambiaron o si el usuario cambió el filtro

Stats: El objeto stats (total, pendientes, completadas) nos da información extra sin ensuciar el estado principal
Es información que se deduce de lo que ya tenemos

4. Fachada: Public API

```
const add = (content: string) => dispatch({ type: 'ADD_TASK', payload: content });
// ... etc
```

Ocultamiento de Complejidad:
El componente que use este hook no tiene ni idea de que existe un dispatch
ni de cómo se llama la acción en el Reducer
Solo ve una función limpia llamada add().

Mantenibilidad:
Si mañana decides cambiar useReducer por Zustand o Redux
solo cambias las tripas de este hook
Sin tener que cambiar los componentes de UI


Encapsulamiento: La UI solo conoce funciones (add, toggle), no la lógica interna.
Eficiencia: Uso correcto de useMemo y init para evitar lag en el renderizado
Resiliencia: Los datos sobreviven a recargas de página gracias al useEffect
Tipado: Todo está conectado con las interfaces de TypeScript que definimos al inicio.

En las stats, estamos haciendo .filter() tres veces en cada renderizado
Para una ToDo app pequeña no es problema
pero en una app con miles de registros, también envolveríamos esas stats en un useMemo


Rs lógica:

1. Entidades y Reglas (Dominio)
2. Gestión de Cambios (Reducer)
3. Persistencia (Storage Service)
4. Interfaz de Control (Custom Hook)



## Testing de hook y adaptador: 

Ambos se testean, el propósito y la técnica son distintos
Se separan los "tests de utilidad" de los "tests de integración

### 1. Mocking y Ciclo de Vida:

1. Adaptador (storage.service.ts):
Test de Integración con el Browser

El reto es que localStorage no existe en Node.js
Para testearlo dependemos de jsdom que configuramos

Usamos Mocks/Spies:
No nos importa si el disco duro de la máquina escribe el archivo
nos importa que nuestro código llame a `setItem` y `getItem` con los argumentos correctos

2. Custom Hook (useTasks.ts):
Test de Comportamiento de React

Un Hook no es una función normal
vive dentro del ciclo de vida de React (renders, efectos, memorización).

Técnica: Usamos `renderHook` de @testing-library/react
No testeamos el código línea a línea, testeamos que:

1. Al iniciar, cargue los datos (Hidratación).
2. Al cambiar el estado, guarde los datos (Persistencia).
3. Al filtrar, la lista se reduzca (Lógica de vista). 


### Código test del Adaptador

Archivo: src/services/storage.service.test.ts

"Vigilamos" al localStorage para asegurar que nuestro adaptador cumpla su contrato.

```
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { storageService } from './storage.service';
import { Task } from '@/core/task.entity';

describe('Storage Service', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks(); // Limpia los espías entre tests
  });

  it('should save tasks as a JSON string', () => {
    const mockTasks: Partial<Task>[] = [{ id: '1', content: 'Test' }];
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

    storageService.save(mockTasks as Task[]);

    expect(setItemSpy).toHaveBeenCalledWith(
      'v1_tasks_data',
      JSON.stringify(mockTasks)
    );
  });

  it('should return an empty array if localStorage is empty', () => {
    const tasks = storageService.load();
    expect(tasks).toEqual([]);
  });

  it('should handle corrupted JSON gracefully', () => {
    localStorage.setItem('v1_tasks_data', '{ corrupted [');
    const tasks = storageService.load();
    expect(tasks).toEqual([]); // El catch del servicio debería salvarnos
  });
});
```

Es el encargado de verificar que la comunicación con el navegador sea segura y predecible
Como el localStorage es una API externa (fuera de nuestro control total)
el test se enfoca en asegurar que nuestro "traductor" (el Adaptador)
no se rompa ante datos extraños.

1. beforeEach

```
beforeEach(() => {
  localStorage.clear();
  vi.clearAllMocks(); 
});
```

los tests deben ser atómicos e independientes

`localStorage.clear()`:
Si el Test A guarda una tarea, no queremos que el Test B la encuentre por accidente

`vi.clearAllMocks()`:
Como usamos "espías/spies" para vigilar cuántas veces se llama a una función
esto resetea el contador a cero para cada test.

2. Test Espía: `vi.spyOn`

```
it('should save tasks as a JSON string', () => {
  const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
  // ...
  expect(setItemSpy).toHaveBeenCalledWith('v1_tasks_data', JSON.stringify(mockTasks));
});
```

Técnica avanzada: Spying
No estamos reemplazando el localStorage
estamos poniendo una "cámara de seguridad" sobre él.

`Storage.prototype`:
Es el ADN de cómo funcionan todos los almacenamientos en el navegador

`toHaveBeenCalledWith`:
Verificamos dos cosas críticas:

Que se use la Key correcta (v1_tasks_data)
Que los datos se hayan `serializado` (convertido a string) correctamente
Si enviaras el objeto directo, el navegador guardaría el texto "[object Object]"
es un error clásico.

3. Test de Resiliencia: JSON Corrupto

```
it('should handle corrupted JSON gracefully', () => {
  localStorage.setItem('v1_tasks_data', '{ corrupted [');
  const tasks = storageService.load();
  expect(tasks).toEqual([]); 
});
```

test de robustez
##### Los usuarios (o extensiones del navegador maliciosas) pueden editar el localStorage manualmente

Escenario: Metemos basura `({ corrupted [) directamente en la llave`.

Expectativa: En lugar de que la aplicación de React se cuelgue con un error de pantalla blanca, el storageService
`storageService` debe detectar el error en su bloque catch
y devolver un array vacío de forma segura

4. Importancia en el entorno de desarrollo

No hay fugas de memoria: Al limpiar los mocks.
Compatibilidad: Estás simulando el comportamiento de un navegador real (jsdom) dentro de tu terminal


Test | Qué valida realmente

`Save`:
Que el Adaptador "aplane" los datos correctamente para el disco.

`Load (Empty)`:
El comportamiento de "Primer uso" de la aplicación.

`Load (Corrupted)`:
Que la aplicación sea a prueba de fallos externos.


### Código test del Custom hook

Archivo: src/hooks/useTasks.test.ts

Simular/mockear el storageService
Si el storage falla, el test del hook no se ve afectado

```
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useTasks } from './useTasks';
import { storageService } from '@/services/storage.service';

// Mockeamos el servicio de storage
vi.mock('@/services/storage.service', () => ({
  storageService: {
    load: vi.fn(() => []),
    save: vi.fn(),
  },
}));

describe('useTasks Hook', () => {
  it('should add a task and trigger storage save', () => {
    const { result } = renderHook(() => useTasks());

    // En React, los cambios de estado en tests deben ir envueltos en act()
    act(() => {
      result.current.add('Nueva tarea desde Hook');
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].content).toBe('Nueva tarea desde Hook');
    expect(storageService.save).toHaveBeenCalled();
  });

  it('should calculate stats correctly', () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.add('Tarea 1');
      result.current.add('Tarea 2');
    });

    expect(result.current.stats.total).toBe(2);
    expect(result.current.stats.pending).toBe(2);
  });
});
```

Aislamiento:
##### Si rompes el storage.service.ts, los tests del useTasks.ts seguirán pasando (porque usamos un mock).
Esto te dice exactamente dónde está el incendio.

Efecto:
##### El test del Hook verifica que el useEffect realmente se dispare
Es la única forma de asegurar que la "sincronización automática" funciona sin probarlo manualmente en el navegador.

`Uso de act()`: estándar de React
Garantiza que todas las actualizaciones de estado
y efectos se hayan procesado antes de que hagamos el `expect`


No testeamos una función simple, sino el comportamiento de React (renders y efectos
usando `renderHook`

El más sofisticado hasta ahora
Probar un Hook requiere simular el ciclo de vida de un componente sin renderizar realmente HTML
Garantiza que el "orquestador" funcione bajo presión

1. Aislamiento con Mocks: `vi.mock`

```
vi.mock('@/services/storage.service', () => ({
  storageService: {
    load: vi.fn(() => []),
    save: vi.fn(),
  },
}));
```

Concepto: 
En un test unitario, no queremos que el Hook use el localStorage real
Queremos usar un doble de riesgo

Si el `storage.service.ts` tiene un bug
no queremos que este test falle
Queremos que este test solo falle si el Hook se equivoca.

`vi.fn()`: Crea funciones "espía" vacías
registran cuándo y con qué argumentos fueron llamadas
pero no ejecutan lógica real.

2. Entorno de Ejecución: `renderHook`

```
const { result } = renderHook(() => useTasks());
```

##### Problema: Los Hooks no se pueden llamar fuera de un componente de React.
Si intentas hacer const data = useTasks(), React lanzará un error porque no hay un "contexto de renderizado

Solución: renderHook crea un componente invisible y diminuto solo para que el Hook pueda "vivir" dentro de él

`result.current`:
referencia al valor actual que devuelve el Hook
Como el estado de React cambia, result.current siempre apunta a la versión más reciente de tus tareas y funciones

2. Sincronización: `act()`

```
act(() => {
  result.current.add('Nueva tarea');
});
```

##### En React, las actualizaciones de estado son asíncronas por rendimiento
En un test, si no esperas a que React procese el cambio
el expect se ejecutará antes de que la tarea aparezca en la lista.

Función: act() le dice a la suite de pruebas:
voy a realizar una acción que provocará cambios de estado
espera a que todo el ciclo de renderizado y los useEffect terminen antes de seguir

Sin act(), recibirías el famoso aviso de consola: "Warning: An update to TestComponent inside a test was not wrapped in act(...)".

4. Verificando Efectos Secundarios

```
expect(storageService.save).toHaveBeenCalled();
```

Test de comportamiento, no solo de datos
No solo verificamos que la tarea esté en el array
`toHaveLength(1)`, sino que verificamos que el Hook haya cumplido su promesa de persistencia.

Gracias a que mockeamos el servicio al principio
podemos preguntarle al espía: "¿Te llamaron para guardar?".
Si el Hook olvidó el useEffect, este test fallará aunque la tarea esté en memoria.

5. Test de Lógica Derivada (stats)

```
expect(result.current.stats.total).toBe(2)
```

verificamos que la "inteligencia" del Hook
(el objeto stats) responda correctamente a los datos
fundamental porque la UI usará estos números para mostrar contadores al usuario.


#### Flujo

1. Carga: El Hook llama a storage.load()
(el mock devuelve []).

2. Acción: Llamas a add().

3. Estado: El Reducer genera una nueva tarea.

4. Efecto: El useEffect del Hook llama a `storage.save()` con la nueva lista.

5. Validación: El test confirma que la tarea existe y que el guardado se activó


Con los test tenemos:

Lógica de negocio blindada.
Estado inmutable y predecible.
Persistencia aislada.
Hook orquestador testeado

`npm run test:run`
confirmar que los 4 archivos de test
(Logic, Reducer, Storage y Hook) pasen


### "Grito" del bloque catch:

En el archivo storage.service.ts, escribimos esto:

```
try {
  // ... intenta parsear JSON corrupto
} catch (error) {
  console.error('Error loading from localStorage', error); // <--- ESTO ES LO QUE VES
  return [];
}
```

Al correr el test:
should handle corrupted JSON gracefully

Vitest hizo lo siguiente:

1. Metió basura en el localStorage.
2. Ejecutó tu función.
3. Tu función intentó leer la basura, falló, entró al catch y ejecutó el console.error.
4. Vitest capturó ese mensaje y lo mostró en la terminal para avisarte: "Oye, por cierto, alguien llamó a console.error aquí".


### Verificación de éxito en los Test

```
Test Files  4 passed (4)
Tests  15 passed (15)
```

Si el código se hubiera roto de verdad, el test habría fallado (rojo) y verías un mensaje de AssertionError
Como el test pasó, significa que el adaptador cumplió su promesa: capturó el error y devolvió un array vacío [] para que la app no explotara



# Diseño de UI/UX

## UX

La UX (User Experience) va primero, es el plano, vs la fachada que es la UI

1. UX vs UI
la UX sería el plano del arquitecto (dónde van las tuberías, cuántas habitaciones hay, cómo se circula de la cocina al comedor)
la UI sería el diseño de interiores (el color de las paredes, la textura del suelo, el tipo de lámparas).

UX: User Experience
Proceso analítico
Se encarga de la lógica del movimiento

Objetivo:
Que la aplicación sea útil, usable y eficiente

Responde:
Qué pasa cuando el usuario hace clic aquí?
Es fácil encontrar el botón de "Borrar"?
Cuántos pasos toma añadir una tarea?

Resultado: `Wireframes` (esquemas en blanco y negro),
flujos de usuario y arquitectura de información.

UI: User Interface
Proceso visual
Se encarga de la estética y la interactividad

Objetivo:
Que la aplicación sea atractiva y transmita la personalidad de la marca

Responde: 
Qué tipografía usamos?
Qué radio de borde tienen los botones?
Cómo es la transición de color cuando una tarea se completa?

Resutlado: `Mockups` de alta fidelidad, paleta de colores, iconos y animaciones

2. UX primero:

Evita el retrabajo:
Es mucho más fácil mover un cuadrado
en un dibujo de servilleta (`UX/Wireframe`)
que cambiar un componente complejo con sombras dinámicas y blur (UI)
porque te diste cuenta de que el botón no cabe

Prioriza la función:
Que el usuario entienda como funcionan las cosas.
Antes que enfocarse en como se ven las cosas.

Coherencia con el Dominio:
Nuestra lógica de `task.logic.ts`
ya definió gran parte de la UX (podemos crear, borrar, filtrar).
La UX solo le da una "cara" funcional a esa lógica.

3. Flujo de Diseño

##### Enfoque `Design System First`:
Puente perfecto entre UX y UI

`UX Concept`:
Definiremos qué elementos necesitamos en pantalla
(Input, Lista, Filtros, Stats).

`Design Tokens (UI)`:
Definiremos los átomos (colores, sombras, espaciados).

`Components (UI)`:
Construiremos las piezas usando un tipo de estilo/material


### Mapa de UX de ToDo App

##### Antes de la UI, visualicemos la jerarquía de información:

`Header`:
Título y contadores
Stats que ya calculamos en el Hook

`Input Area`:
lugar prominente para escribir
que se sienta como el "centro de acción".

`Filter Bar`:
Acceso rápido a All / Pending / Completed

`Task List`:
El cuerpo principal, donde cada item debe ser fácil de leer y marcar.

`Footer/Actions`:
Limpiar completadas


### 3 pilares 

1. User Flows:
El mapa anterior es estático, pero una app es movimiento 
El User Flow define el camino

Ej:

Si el usuario pulsa "Añadir"
el cursor se queda en el input o se limpia?

Si marca una tarea como "Completada"
se mueve inmediatamente al final de la lista o espera a que refresque?

Importancia:
##### Aquí es donde decides la fricción: Una buena UX reduce los clics necesarios para llegar al objetivo

2. Edge Cases y Estados de Vacío
Casi todos diseñamos para cuando la app está llena de tareas bonitas

`Empty State`:
Qué ve el usuario cuando no hay tareas?
Un texto aburrido o una ilustración motivadora que lo invite a crear su primera tarea?

`Error State`:
Si falla el localStorage (como probamos en los tests)
mo se lo decimos al usuario de forma amigable sin que parezca un error de sistema?

`Loading State`:
Aunque en local es casi instantáneo
cómo se siente la transición cuando la app "despierta"?

3. Accesibilidad (A11y)
La UX también es inclusión

Tienen los botones suficiente tamaño para pulsarlos con el pulgar en un móvil?
El contraste entre el texto y el fondo "cristal" es suficiente para alguien con fatiga visual?
Puede un lector de pantalla entender qué tarea está seleccionada?


### Herramientas para UX

Dependiendo de la fase y de tu flujo de trabajo

1. Herramientas de "Baja Fidelidad" (Lógica y Flujo):

Papel y Lápiz: Sigue siendo la herramienta más rápida para prototipar ideas sin distraerse con colores

Miro o Lucidchart: Ideales para dibujar los User Flows
y la arquitectura de la información mediante diagramas de cajas

Excalidraw: Una joya minimalista y open-source (web)
permite hacer wireframes con un estilo de "dibujo a mano" muy limpio.

2. Herramientas de "Alta Fidelidad" (UI y Prototipado)

Figma:
Estándar, Permite diseñar desde el wireframe hasta el prototipo animado final 

Penpot:
Alternativa Open Source, similar a Figma
pero con un enfoque más cercano al código (usan Flexbox y Grid reales en el diseño)
suele encantar a los desarrolladores


### Pragmátismo

Definir ahora los Estados de Interacción (UX)
Luego saltar a los Design Tokens (UI).

Ej: UX final

1. Estado Inicial: El input tiene el foco automático al cargar.

2. Feedback de Acción: Cuando añades una tarea, hay una micro-animación (UI)
pero la UX dicta que el input se limpie y mantenga el foco para la siguiente.

3. Filtros: El cambio entre filtros debe ser instantáneo y el contador de "Stats" debe actualizarse en tiempo real
Lo tenemos en el Hook



### Estandares o enfoques UX

Aplicar metodologías que aseguren que el producto sea escalable y lógico

##### Dictan cómo se debe construir la relación entre el usuario y la máquina

1. Atomic Design
Brad Frost
Las interfaces no son páginas, sino sistemas de componentes

Átomos: Etiquetas HTML básicas (botones, inputs, etiquetas).
Moléculas: Grupos de átomos (un input + un botón de "Añadir").
Organismos: Secciones complejas (la lista completa de tareas con sus filtros).
Plantillas y Páginas: El layout final donde viven los organismos.

2. User-Centered Design
Diseño Centrado en el Usuario
proceso iterativo donde el diseñador se enfoca en los usuarios
sus necesidades en cada fase del proceso de diseño

`Empatía`: Entender el contexto
el usuario usa la app bajo el sol, con prisa, o en su escritorio?

`Definición`:
problema real estamos resolviendo
reducir la carga cognitiva

`Iteración`:
Probar, fallar rápido y corregir antes de escribir una sola línea de CSS complejo

3. Mobile First
Que se vea bien en el teléfono.
Es un enfoque de priorización

Restricción de espacio:
Al tener poco espacio, te ves obligado a eliminar lo innecesario

Escalabilidad:
mucho más fácil expandir un diseño móvil a escritorio que intentar "encoger" una web compleja de escritorio a una pantalla de 6 pulgadas

4. Accessibility First (A11y por diseño)
En lugar de añadir accesibilidad al final, se diseña con ella desde el minuto cero

`Contraste`: Asegurar que los colores sean legibles

`Semántica`: Usar etiquetas HTML correctas para que los lectores de pantalla naveguen la lista de tareas sin problemas

`Interacción`: Que toda la app sea usable solo con el teclado
fundamental para usuarios avanzados o con discapacidades motoras

5. Content First
El contenido es el rey

Diseñar alrededor de datos reales

`Realismo`:
Qué pasa si una tarea tiene 200 caracteres?
Se corta el texto o se expande el contenedor?

`Propósito`:
Si la tarea es lo más importante
el diseño debe "desaparecer" para que el texto sea el protagonista


#### Ej Implementación UX

Híbrido de Alto Rendimiento

1. Content First: Diseñaremos pensando en tareas reales (cortas, largas, completadas

2. Atomic Design: Para que tus componentes de Styled Components sean piezas de LEGO perfectas

3. A11y First: Porque una herramienta de productividad debe ser rápida y accesible desde el teclado


Empty State:

En la fase de UX es fundamental
Es lo que ve el usuario cuando no hay tareas

#### Ej Empty State

Diseño minimalista con una ilustración sutil tipo "vidrio" y un mensaje motivador

"Nada pendiente por aquí. ¡Disfruta tu día!"
o un simple "Escribe tu primera tarea para empezar".


## UI

Es la construcción estética y sensorial
Donde transformamos la lógica pura en algo que el ojo humano pueda procesar con placer y eficiencia

##### Aplicamos leyes de percepción visual y sistemas de organización

1. 8pt Grid System

##### Estándar para el espaciado (margins, paddings) y el tamaño de los elementos

Regla:
Todos los valores deben ser múltiplos de 8 (8,16,24,32,40...).

Crea un ritmo visual matemático y consistente
Las pantallas modernas escalan mucho mejor los múltiplos de 8
evitando que los bordes se vean borrosos o "desalineados"
el famoso sub-pixel rendering

2. Visual Hierarchy

##### Guiar el ojo del usuario hacia lo más importante mediante el peso visual

`Contraste y Tamaño`:
Lo más importante
como título o la tarea actual
debe ser más grande o tener un peso de fuente mayor

`Escaneo en F y Z`:
Los humanos escaneamos interfaces siguiendo patrones específicos
Diseñamos la UI para que la información crítica
como botón de añadir, esté en los puntos calientes de esos patrones 

`Espacio en Blanco/Negative Space`:
El espacio "vacío" no es desperdicio
es una herramienta para agrupar elementos y dar "aire" a la interfaz
evitando la fatiga cognitiva

3. Design Tokens

##### Conecta el diseño con tu código CSS

Definimos tokens "declarativos" de intenciones
en lugar de descriptivos, ej. Color-Primary en lugar de color-blue

```
Color-Primary: #007AFF

Spacing-Medium: 16px

Radius-Large: 24px

Glass-Blur: 12px
```

Garantiza que si decides cambiar el tono de azul
lo haces en un solo lugar y toda la app se actualiza automáticamente

4. Look & Feel:

##### Paradigmas Estéticos

Preferencia por el estilo Liquid Glass y Material Design

`Glassmorphism`: cristal
Transparencia (Translucency): Fondo con opacidad baja.
Background Blur: Un desenfoque profundo del contenido que hay detrás.
Borde Sutil: Un borde fino (casi blanco) para simular el canto de un cristal y darle profundidad

`Neumorphism`: 
simula extrusiones y hundimientos en la superficie mediante sombras suaves

`Flat Design 2.0`:
Colores vibrantes, capas claras y sombras realistas pero sin texturas pesadas

5. Micro-interacciones y Feedback Visual

##### La UI no es solo una imagen estática; responde al usuario

`Hover States`:
Qué hace el botón cuando pasas el ratón por encima?
Sutil cambio de brillo

`Active States`:
Cómo se siente el "clic"?
Un ligero hundimiento o cambio de escala

`Transiciones`:
Cuando una tarea se completa, no debe desaparecer de golpe
debe haber una transición suave de color o una animación de tachado


### Ej implementación de UI

1. Layout: Usaremos la 8pt Grid para que todo esté perfectamente alineado

2. Jerarquía: Las estadísticas (stats) tendrán un peso visual sutil
mientras que la lista de tareas será la protagonista

3. Estilo: Aplicaremos un Look and Feel
en los contenedores principales para darle esa estética moderna



# Implementación UX/UI simple

## UX: Estructura Funcional

El objetivo es reducir la fricción cognitiva
El usuario debe saber qué hacer sin pensar

1. Mapa de Componentes: Jerarquía

`Header (Status Bar)`:
Un área sutil en la parte superior que muestra las stats
Total, Pendientes, Completadas
Esto da una sensación de progreso inmediato

`Input Principal`:
Barra de texto minimalista con el foco automático
Al presionar Enter, se dispara la acción de añadir

`Barra de Filtros`:
Tres botones claros (All, Pending, Completed).
El filtro activo debe tener un indicador visual fuerte

`Lista de Tareas`:
Cuerpo de la app
Item: Checkbox a la izquierda
texto en el centro
botón de eliminar (basura) a la derecha

`Footer de Acción`:
Botón para "Limpiar completadas"
Solo aparece si hay tareas hechas (ahorro de espacio).


### Flujos de Interacción:

`Añadir`:
Escribir -> Enter -> El input se limpia
-> La tarea aparece con una transición suave

`Completar`:
Clic en el check -> El texto se tacha y baja la opacidad
(Feedback visual de "hecho")

`Estado Vacío`:
Si no hay tareas, se muestra un mensaje centrado
"Tu lista está limpia. ¡Buen trabajo!".


## UI

Estética Visual
Ej: Liquid Glass sobre una base de Material Design.

### 1. Paleta de Colores (Tokens)

Ej esquema oscuro

Elemento | Token / Valor | Efecto

`Fondo Base`:
Deep Midnight (#0f172a),Gradiente sutil hacia púrpura oscuro.

`Contenedor Glass`:
Blanco con 0.1 opacidad
Backdrop-blur de 12px y borde de 1px blanco (0.2).

`Acento`:
(Primario)nElectric Blue (#3b82f6)
Para el checkbox y el filtro activo.

`Texto`:
Primario
Off-White (#f8fafc),Alta legibilidad.

`Texto Secundario`:
Slate Gray (#94a3b8)
Para tareas completadas o stats.


### 2. Reglas de Diseño Visual

`Radios de Borde`:
Esquinas redondeadas generosas (16px o 24px) para suavizar la estética "cristal".

`Espaciado (Grid de 8px)`:
Margen interno de los contenedores: 24px
Separación entre tareas: 8px.

`Tipografía`:
Fuente Sans-Serif moderna (tipo Inter o el sistema por defecto).
Peso 500 para legibilidad y 700 para títulos


### 3. Look & Feel

Imagina un cristal traslúcido flotando sobre un fondo oscuro profundo
Cuando el usuario pasa el ratón sobre una tarea (Hover)
el cristal brilla un poco más (opacidad 0.15).
Los elementos son ligeros, sin sombras pesadas, usando solo el desenfoque para dar profundidad

"Menos es más, pero lo poco que hay debe ser perfecto"



# Tokens de CSS: Código

OKLCH se basa en cómo percibimos la luz, lo que garantiza que tus gradientes y contrastes en ese efecto "Glass" sean perfectos

Usar em permitirá que si cambias el tamaño de fuente de una tarea
sus márgenes y bordes redondeados se ajusten proporcionalmente de forma automática

1. Paleta Atómica (OKLCH)

Definiremos los colores basándonos en tres ejes: L (Lightness/Claridad), C (Chroma/Intensidad) y H (Hue/Matiz).

Token | Valor OKLCH | Propósito

`--bg-main`:
oklch(15% 0.04 250)
Azul medianoche profundo (Base).

`--accent`:
oklch(65% 0.25 260)
"El "Electric Blue" para interactividad."

`--glass-bg`:
oklch(100% 0 0 / 10%)
El cristal (Blanco puro al 10% de opacidad).

`--text-max`:
oklch(98% 0.01 250)
Blanco roto para lectura principal.

`--text-dim`:
oklch(70% 0.02 250)
Gris pizarra para estados secundarios.


2. Glass-Material System

Usaremos rem para lo global (consistencia de sistema)
em para lo interno del componente (escalabilidad).

```
:root {
  /* --- Colors (OKLCH) --- */
  --bg-color: oklch(15% 0.04 250);
  --primary: oklch(65% 0.25 260);
  --primary-glow: oklch(65% 0.25 260 / 30%);
  
  --glass-surface: oklch(100% 0 0 / 8%);
  --glass-border: oklch(100% 0 0 / 15%);
  
  --text-main: oklch(98% 0.01 250);
  --text-muted: oklch(70% 0.02 250);

  /* --- Sizing (Relative to Font Size) --- */
  /* Usamos 1em como base de espaciado para que el componente "respire" */
  --space-unit: 1em; 
  --radius-main: 1.5em; /* Esquinas suaves que escalan */
}

/* El efecto Liquid Glass purista */
.glass-panel {
  background: var(--glass-surface);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-main);
  
  /* Usamos em para que el padding crezca si subes el font-size */
  padding: 1.5em; 
  box-shadow: 0 0.5em 2em oklch(0% 0 0 / 20%);
}
```

3. em en componentes
Si defines el botón de "Borrar" con padding: 0.5em 1em
y luego decides que en pantallas grandes la lista de tareas debe tener una fuente de 1.2rem
el botón se hará más grande proporcionalmente sin que tengas que ajustar sus márgenes manualmente

Es diseño elástico

oklch:
A diferencia de hsl, donde un azul al 50% de brillo se ve mucho más oscuro que un amarillo al 50%
en oklch el 50% de Lightness se ve igual de brillante para cualquier color
Esto es vital para mantener la accesibilidad en tu diseño Material

4. Variación de Diseño:  Wildcard

Diseño robusto, podríamos añadir un Glow Dinámico.
Cuando una tarea esté seleccionada
podemos usar el croma del color de acento para crear un halo de luz tras el cristal

```
.task-item:focus-within {
  outline: 2px solid var(--primary);
  box-shadow: 0 0 1.5em var(--primary-glow);
}
```


## Diseño alter

`oklch(L C H)`:

L (Lightness): Qué tan claro u oscuro es (0% a 100%).
C (Chroma): La intensidad del color (pureza).
H (Hue): El tono (0 a 360).

`rem`: Se basa en el tamaño de fuente raíz (habitualmente 16px).
Lo usaremos para el layout general y márgenes.

`em`:
Se basa en el tamaño de fuente del elemento padre.
Es perfecto para componentes que deben "escalar" proporcionalmente
Como el padding interno de un botón o el tamaño de un icono respecto al texto.


## Archivo css: src/styles/theme.ts

Fuente de la verdad

cómo usamos las variables para el efecto cristal

```
export const theme = {
  colors: {
    // Fondo profundo (Deep Midnight)
    background: 'oklch(18% 0.04 258)',
    
    // Superficie del cristal (Blanco traslúcido)
    glass: 'oklch(100% 0 0 / 8%)',
    glassBorder: 'oklch(100% 0 0 / 15%)',
    
    // Acentos (Electric Blue)
    primary: 'oklch(65% 0.22 255)',
    primaryHover: 'oklch(70% 0.22 255)',
    
    // Texto
    textPrimary: 'oklch(98% 0.01 255)',
    textSecondary: 'oklch(75% 0.05 255)',
    
    // Estados
    success: 'oklch(70% 0.18 145)',
    error: 'oklch(62% 0.22 25)',
  },
  
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
  },
  
  borderRadius: {
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
  },

  effects: {
    blur: '12px',
    shadow: '0 8px 32px 0 oklch(0% 0 0 / 30%)',
  }
};

export type ThemeType = typeof theme;
```


## Ej de uso en componentes

Componente Contenedor:

Para aplicar el Liquid Glass
crearemos un estilo global y un contenedor base

El uso de em para que el componente se adapte si cambiamos el tamaño de fuente localmente

```
import styled from 'styled-components';

export const GlassContainer = styled.div`
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(${({ theme }) => theme.effects.blur});
  -webkit-backdrop-filter: blur(${({ theme }) => theme.effects.blur});
  
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.effects.shadow};
  
  /* Padding usando rem para consistencia estructural */
  padding: ${({ theme }) => theme.spacing.lg}; 
  
  margin: 1rem auto;
  max-width: 40rem; // ~640px
`;

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  
  /* Usamos em para que el espacio entre tareas 
     escale si cambiamos el tamaño de letra */
  gap: 0.75em; 
  padding: 0.5em 1em;
  
  transition: background 0.2s ease-in-out;

  &:hover {
    background: oklch(100% 0 0 / 5%);
  }
`;
```

Accesibilidad de Color
Con oklch, si necesitas un color para un estado de error que tenga el mismo "brillo" que tu color primario
solo tienes que copiar los valores de L y C y cambiar el H (Hue).
Esto garantiza una armonía visual perfecta

Escalabilidad:
Al usar rem para el layout y em para los detalles internos
tu aplicación se verá bien incluso si el usuario cambia el tamaño de fuente de su navegador

Modernidad: 
usando las últimas especificaciones de CSS (Level 4 color)
código preparado para el futuro.


## Estilos globales

Cimientos de la interfaz. 
Eliminamos las inconsistencias entre navegadores
Preparamos el lienzo para que el efecto "cristal" brille

Al usar un fondo degradado con oklch, creamos una profundidad orgánica que hace que las capas traslúcidas de tu app se sientan tridimensionales

### Código de css: src/styles/GlobalStyles.ts

Usaremos createGlobalStyle de Styled Components para inyectar estas reglas en la raíz de la aplicación

```
import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  /* 1. Reset Básico y Box Sizing */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* 2. Configuración de la Raíz (Accesibilidad y Rem) */
  html {
    font-size: 100%; /* Habitualmente 16px */
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    
    /* Fondo Orgánico para resaltar el Glassmorphism */
    background-image: 
      radial-gradient(at 0% 0%, oklch(25% 0.08 260) 0px, transparent 50%),
      radial-gradient(at 100% 100%, oklch(20% 0.12 280) 0px, transparent 50%);
    
    min-height: 100vh;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    display: flex;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.xl};
  }

  /* 3. Tipografía y Escala */
  h1, h2, h3 {
    line-height: 1.1;
    font-weight: 700;
  }

  /* 4. Inputs y Botones (Reset de estilos de sistema) */
  input, button, textarea {
    font: inherit;
    color: inherit;
    background: transparent;
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
    transition: all 0.2s ease;
  }

  /* 5. Accesibilidad: Focus States */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;
  }

  /* Scrollbar Minimalista */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.glassBorder};
    border-radius: 10px;
  }
`;
```

Claves:

`Fondo Radial`:
No es un color plano

##### Al usar dos radial-gradient en las esquinas opuestas con tonos ligeramente diferentes de oklch, generamos una sutil variación de luz 
Esto es lo que permite que el backdrop-filter (blur) del cristal tenga algo que "difuminar"
creando esa estética de profundidad

Reset Semántico:

`min-height: 100vh`:
Asegura que el fondo cubra siempre toda la pantalla, incluso si la lista de tareas es corta

`-webkit-font-smoothing`:
En sistemas Linux y navegadores modernos, esto fuerza un renderizado de fuentes más nítido, ideal para el modo oscuro


Rem en el Body:

Al establecer el padding en xl (2rem)
garantizamos que la app nunca toque los bordes de la ventana del navegador


### Uso de globals styles

En tu archivo App.tsx (o main.tsx)

Envolver todo con el ThemeProvider:
colocar los GlobalStyles al principio

```
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* Tus componentes aquí */}
    </ThemeProvider>
  );
}
```


## Usos de px, rem (root) y em

px (Píxeles - Unidad Absoluta):
Uso: Bordes, sombras, imágenes de tamaño fijo o elementos pequeños que no deben escalarse.
Característica: Es una unidad física fija; no se ajusta si el usuario cambia el tamaño de fuente en el navegador.

rem (Root EM - Unidad Relativa):
Uso: Tamaño de fuente, márgenes, padding, ancho/alto. Es la mejor opción para diseño responsivo y accesibilidad.
Característica: Se basa en el tamaño de la fuente raíz (,usualmente). Si el usuario aumenta la fuente del navegador, todo el diseño en rem escala proporcionalmente.

em (EM - Unidad Relativa):
Uso: Relleno (padding), márgenes o tamaños de fuente que deben ser proporcionales a su contenedor directo.
Característica: Relativo al tamaño de fuente del elemento padre. Útil para componentes modulares, pero puede complicarse con anidamientos profundos (efecto compuesto)

Conversión (rem):

```
Valor en rem = tamaño deseado en px/16 px (base por defecto)

Ej: 24px/16px = 1.5rem
```



# Diseño de componentes de UI

##### Diseñar la jerarquía de componentes

Atomic Design
Smart vs. Dumb Components

Asegura que tus componentes visuales sean puramente estéticos (Dumb)
La lógica resida en puntos específicos (Smart).

## 1. Jerarquía Atómica: Árbol de Componentes

Estructura de carpetas y la responsabilidad de cada pieza

### Átomos: piezas indivisibles

##### Componentes básicos que no tienen lógica de negocio
solo estilos y props simples.

CheckBox:
círculo/cuadrado con su estado checked

IconButton:
botón circular para iconos
(ej, borrar)

Badge:
pequeño círculo con número para las estadísticas

Input:
campo de texto base con el estilo glass

Typography:
Componentes para Title, Text y Label


### Moléculas: Uniones simples

##### Combinan dos o más átomos para una función específica

`TaskInput`:
Combina el Input + un IconButton de "añadir".

`FilterTab`:
Grupo de botones que actúan como interruptores

`StatItem`:
Label junto a un Badge
ej: "Pendientes: 5"


### Organismos: Secciones de la App

##### Componentes complejos que ya manejan colecciones de datos 

`TaskItem`:
La fila completa de la tarea (Check + Texto + Borrar).

`TaskList`:
El contenedor que hace el .map() de las tareas.

`Header`:
La barra superior que contiene el título y las StatItems.

`FilterBar`:
El contenedor de todos los FilterTabs.


### Plantillas / Páginas: Layout

`MainLayout`:
GlassContainer que envuelve todo y define las rejillas (grids) de separación


## Enfoques Complementarios

Para que el Atomic Design no se vuelva un caos de carpetas
aplicaremos tres conceptos

### 1. Patrón de Composición

Por sobre la herencia

En lugar de crear un TaskItem rígido
diseñaremos componentes que acepten children

permite cambiar el orden de los elementos
mover el botón de borrar a la izquierda, por ejemplo
sin reescribir la lógica del componente


### 2. Slots: espacios reservados

Diseño del `MainLayout` con "huecos" específicos
permite que el componente de Layout se preocupe solo de las sombras y el blur
mientras que tú le "inyectas" el Header o la Lista desde fuera.


### 3. Unidirectional Data Flow: Flujo de datos hacia abajo

`Hook: useTasks`:
Vive en el componente de nivel superior
App.tsx o un TaskProvider

`Funciones (add, toggle)`:
Se pasan hacia abajo como props

`Eventos`:
Los átomos solo emiten eventos
como onClick, onChange
no saben qué hace la función
solo saben que deben avisar al padre


## 3. Estructura de los componentes

```
[ MainLayout (GlassContainer) ]
   |
   |-- [ Header (Organismo) ]
   |      |-- Title (Átomo)
   |      |-- [ StatGroup (Molécula) ] -> Usando Badge (Átomo)
   |
   |-- [ TaskInput (Molécula) ]
   |      |-- Input (Átomo) + AddButton (Átomo)
   |
   |-- [ FilterBar (Organismo) ]
   |      |-- FilterTab (Molécula) -> [ All, Pending, Completed ]
   |
   |-- [ TaskList (Organismo) ]
          |-- [ TaskItem (Organismo) ] x N
                 |-- CheckBox (Átomo)
                 |-- TaskText (Átomo)
                 |-- DeleteButton (Átomo)
```

Paralelismo:
Trabajar en los estilos del CheckBox (Átomo
sin haber terminado la TaskList

Mantenibilidad:
Si quieres cambiar el icono de "Borrar" en toda la app

Testeo:
Los átomos y moléculas son facilísimos de testear con Vitest
no dependen de ningún estado global, solo de sus props


## Dibujo de la app

1. Contenedor Principal

`MainLayout`:
Gran panel central redondeado que lo envuelve todo
será nuestro GlassContainer que aplicará el blur y el borde de cristal

2. Organismo: Header (Sección Superior)

`Header`: 
Contiene el Atom: Title con text TODO

Molecule: `StatGroup`
grupo de números a la derecha

Cada uno de esos números con su círculo es un Atom: `Badge`.

3. Molécula: TaskInput (Área Central-Superior):

Donde el usuario añade datos

une un Atom: Input (barra de texto)
con un Atom: IconButton (el botón con el "+").

Combinación de dos piezas indivisibles lo que crea la molécula

4. Organismo: FilterBar (Área Central):

sección completa gestiona los filtros
cómo se compone de múltiples `Molecule: FilterTab`
(All, Pending, Completed).

Nota cómo cada pestaña usa el átomo Typography para el texto

5. Organismo: TaskList (Área Inferior/Cuerpo):

Contenedor principal para las tareas
Se repiten los `Organism: TaskItem`
cada fila de tarea

Se detalla una tarea completa para mostrar cómo se compone de un `Atom: CheckBox` a la izquierda,
el `Atom: Typography.Text` en el centro
tachado en el ejemplo completado
y `el Atom: IconButton (basura)` a la derecha


# Componentes sin los estilos:

##### Usando TypeScript para definir los contratos (props) de cada átomo


## 1. Atomos

1. Typography (Texto y Títulos)
Un solo componente que puede transformarse en h1, p o span según la necesidad, manteniendo la semántica HTML

```
interface TypographyProps {
  variant?: 'title' | 'body' | 'label';
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'p' | 'span';
}

export const Typography = ({ variant = 'body', children, as = 'p' }: TypographyProps) => {
  const Component = as;
  return <Component className={`text-${variant}`}>{children}</Component>;
};
```

2. Input (Entrada de datos)
Campo de texto puro
sencillo para que sea el padre quien controle su estado.

```
interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, onChange, placeholder, onKeyDown }: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      aria-label={placeholder}
    />
  );
};
```

3. IconButton (Acciones rápidas)
Especial para los botones de "añadir" o "eliminar" que solo llevan un icono

```
interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  label: string; // Crucial para accesibilidad (screen readers)
  disabled?: boolean;
}

export const IconButton = ({ icon, onClick, label, disabled }: IconButtonProps) => {
  return (
    <button onClick={onClick} aria-label={label} disabled={disabled}>
      {icon}
    </button>
  );
};
```

4. Checkbox (Interruptor de tareas)
átomo que maneja el estado visual de "completado".

```
interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

export const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <div className="checkbox-wrapper" onClick={onChange}>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange} 
        tabIndex={-1} // Evitamos doble foco con el div
      />
      <span className="checkmark" />
    </div>
  );
};
```

5. Badge (Contador de estadísticas)
contenedor para mostrar números (como el conteo de tareas).

```
interface BadgeProps {
  count: number;
}

export const Badge = ({ count }: BadgeProps) => {
  return <span className="badge-count">{count}</span>;
};
```

Estructura

Semántica: etiquetas reales (input, button, span)
para que el navegador (y los lectores de pantalla) entiendan qué es cada cosa

Transparencia: Ninguno de estos componentes tiene useState
Son "Pure Components": solo reciben props y renderizan

Tipado fuerte:
Con las interfaces de TS, si intentas pasarle un número a un label o te olvidas del onClick
el editor te avisará antes de que rompas la app


Optimizado/Inteligente:

```
interface BadgeProps {
  count: number;
  overflowCount?: number;
}

export const Badge = ({ count, overflowCount = 99 }: BadgeProps) => {
  if (count <= 0) return null;

  const displayCount = count > overflowCount ? `${overflowCount}+` : count;

  return (
    <span className="badge-count" aria-label={`${count} notificaciones`}>
      {displayCount}
    </span>
  );
};
```

### Estructura y nombre de Atoms

##### arquitectura limpia (que facilite el testeo y el mantenimiento en tu entorno de desarrollo), 
la estructura de carpetas debe ser modular

Cada átomo vivirá en su propia carpeta dentro de src/components/atoms
permite que cada pieza sea un paquete independiente que contiene su estructura (JSX), sus estilos y sus pruebas

1. Estructura

```
src/
└── components/
    └── atoms/
        ├── Typography/
        │   ├── Typography.tsx
        │   └── index.ts
        ├── Input/
        │   ├── Input.tsx
        │   └── index.ts
        ├── IconButton/
        │   ├── IconButton.tsx
        │   └── index.ts
        ├── Checkbox/
        │   ├── Checkbox.tsx
        │   └── index.ts
        └── Badge/
            ├── Badge.tsx
            └── index.ts
```

2. Nombre y Ubicación Detallada

Componente | Archivo Principal | Responsabilidad

`Typography`:
atoms/Typography/Typography.tsx
"Controlar la jerarquía de textos (h1, p, span)."

`Input`:
atoms/Input/Input.tsx
El campo de entrada de texto estilizado.

`IconButton`:
atoms/IconButton/IconButton.tsx
Botones de acción basados exclusivamente en iconos.

`Checkbox`:
atoms/Checkbox/Checkbox.tsx
El indicador visual de tarea completada.

`Badge`:
atoms/Badge/Badge.tsx
El contenedor numérico para las estadísticas.


### Barrel file (index)

Dentro de cada carpeta de componente
incluir un archivo index.ts

Permite realizar importaciones mucho más limpias desde las Moléculas u Organismos

Ej: src/components/atoms/Typography/index.ts

```
export * from './Typography';
```

#### Importación sucia:

```
import { Typography } from '../../atoms/Typography/Typography';
```

#### Importación limpia:

```
import { Typography } from '@/components/atoms/Typography';
```

#### Aislamiento de Estilos

Cuando añadamos el código de Styled Components
en un archivo llamado Typography.styles.ts
dentro de la misma carpeta
si el componente crece, todo lo relacionado con él está en un solo lugar.

#### Tests

Si decides añadir tests unitarios para un átomo específico
por ejemplo, para verificar que el Input llama al onChange
el archivo Input.test.ts iría ahí mismo

#### Escalabilidad

Si en el futuro necesitas un átomo nuevo
como un Separator o un Spinner
creas una nueva carpeta bajo atoms/.


### Testing de atoms

##### La estrategia es el testing de contrato y comportamiento
Como no tienen lógica de negocio
##### Aplicamos una estrategia de Caja Negra 
usando Vitest y React Testing Library (RTL)

1. 3 pilares 

#### A. Renderizado Correcto (The "Smoke Test")

El componente aparece en el DOM sin explotar?
##### Es el test más básico pero vital para asegurar que las definiciones de TypeScript y las props por defecto funcionan


#### B. Pruebas de Propiedades (Props Contract)

Si al átomo Typography le paso variant="title"
renderiza un h1 o aplica la clase correcta?

Si al Input le paso un placeholder
¿es visible para el usuario?


#### C. Pruebas de Interacción (Events)

Aunque el átomo no sabe qué hace la función
debemos asegurar que dispara el evento

Si hago clic en el IconButton
¿se llamó a la función que recibió por props?


2. Herramientas y Configuración 
Usando el stack

Vitest: Como motor de ejecución (rápido y compatible con Vite).

React Testing Library: Para interactuar con los componentes como lo haría un humano
buscando textos, roles y etiquetas, no clases CSS internas

matchers de jest-dom: Para tener aserciones naturales como .toBeInTheDocument() o .toBeDisabled().


### Test de imput: Input.test.ts

Ubicación: `src/components/atoms/Input/Input.test.ts`

```
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Input } from './Input';

describe('Atom: Input', () => {
  it('should render with the correct placeholder', () => {
    render(<Input value="" onChange={() => {}} placeholder="Nueva tarea..." />);
    
    // Buscamos por el rol de accesibilidad que definimos en el JSX
    const inputElement = screen.getByPlaceholderText(/nueva tarea.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should call onChange when the user types', () => {
    const handleChange = vi.fn();
    render(<Input value="" onChange={handleChange} />);
    
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'Comprar pan' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should trigger onKeyDown when a key is pressed', () => {
    const handleKeyDown = vi.fn();
    render(<Input value="" onChange={() => {}} onKeyDown={handleKeyDown} />);
    
    const inputElement = screen.getByRole('textbox');
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
    
    expect(handleKeyDown).toHaveBeenCalled();
  });
});
```

#### Clean test

Resiliencia al cambio
Si decides que el Input ya no usa un input plano sino un contenteditable
el test seguirá pasando mientras el usuario pueda escribir en él.

Documentación viva:
El test le dice a cualquier otro desarrollador (o a tu "yo" del futuro)
"Este componente necesita un onChange y reacciona al teclado".

Accesibilidad por defecto:
Al usar `screen.getByRole` o `screen.getByPlaceholderText`
te obligas a que tus átomos sean accesibles
Si RTL no encuentra el componente, un lector de pantalla tampoco lo hará


#### Snapshot Testing: guardar una "foto" del código HTML generado

Es común en Atoms

Pros: Te avisa si el HTML cambia aunque sea un espacio

Contras: Son muy frágiles
Si cambias un div por un section por semántica, el test falla y te acostumbras a darle a "Update Snapshot" sin mirar

##### Úsalos con moderación solo para asegurar que la estructura del Checkbox, (que tiene varios elementos anidados; no cambie por accidente.


#### Comando ejecutar test

1. Comando directo: Desde la raíz de tu proyecto todoapp

```
npx vitest run src/components/atoms/Input/Input.test.ts
```

run: Indica a Vitest que ejecute los tests una sola vez y termine el proceso
ideal para CI/CD o una comprobación rápida

Ruta: Puedes pasarle la ruta exacta del archivo.

2. Modo "Watch" (Recomendado para desarrollo)

Editando el código y quieres que el test se refresque solo

```
npx vitest src/components/atoms/Input/Input.test.ts
```

Sin el comando run, Vitest entra en modo interactivo
Se quedará observando ese archivo específico y reaccionará cada vez que guardes cambios en el .tsx o en el .test.ts.

3. Filtrado por nombre (Pattern Matching)

No necesitas escribir toda la ruta si el nombre es único

```
npx vitest Input.test
```

buscará cualquier archivo que contenga "Input.test" en su nombre y lo ejecutará

4. Productividad

Los scripts añadidos en package.json podemos usar:

```
npm test -- src/components/atoms/Input/Input.test.ts
```

`--` es necesario para decirle a npm que los argumentos que siguen
son para el comando interno (Vitest), no para npm


### Vitest iconografía

color amarillo/dorado en la terminal
distinción visual sobre la jerarquía y el tiempo de ejecución.

1. Jerarquía de la Suite
Vitest utiliza colores para ayudarte a escanear los resultados rápidamente

Blanco/Gris: Es el nombre del archivo físico (Input.test.tsx).

Amarillo: Se usa para los bloques describe (el nombre de la suite, en tu caso Atom: Input).
Es una forma de decirte: "Aquí comienza un grupo de pruebas".

Verde: Es el resultado final de cada test individual (it o test).
El verde significa "Passed".


2. Alerta de Tiempo (performance)
los tests "lentos".

should render... tardó 119ms.

should call onChange... tardó 315ms.

Vitest tiene un umbral (threshold).
Cuando un test tarda más de lo esperado (usualmente >300ms en entornos locales
resalta el tiempo en amarillo para advertirte que ese test específico es un poco más pesado que el resto.

el primer renderizado de React en un entorno de test siempre tarda más porque tiene que cargar el DOM virtual (jsdom) en memoria
Por eso el segundo test (el de onChange) muestra ese tiempo más alto.


### Test Typography

Al ser polimórfico
el test debe asegurar que la semántica HTML cambie según nuestras órdenes sin romper el estilo

no solo verificaremos que el texto esté ahí
sino que el tag HTML sea el correcto

vital para el SEO y la accesibilidad (A11y).

```
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Typography } from './Typography';

describe('Atom: Typography', () => {
  it('should render as a paragraph by default', () => {
    render(<Typography>Texto de prueba</Typography>);
    
    const element = screen.getByText(/texto de prueba/i);
    
    // Verificamos que el tag sea un <p>
    expect(element.tagName).toBe('P');
    // Verificamos la clase por defecto
    expect(element).toHaveClass('text-body');
  });

  it('should render as an h1 when "as" prop is "h1"', () => {
    render(<Typography as="h1" variant="title">Título Principal</Typography>);
    
    const element = screen.getByText(/título principal/i);
    
    expect(element.tagName).toBe('H1');
    expect(element).toHaveClass('text-title');
  });

  it('should render with "label" variant class', () => {
    render(<Typography variant="label" as="span">Etiqueta</Typography>);
    
    const element = screen.getByText(/etiqueta/i);
    
    expect(element.tagName).toBe('SPAN');
    expect(element).toHaveClass('text-label');
  });

  it('should render children correctly', () => {
    render(
      <Typography>
        <strong>Texto negrita</strong>
      </Typography>
    );
    
    const boldElement = screen.getByText(/texto negrita/i);
    expect(boldElement.tagName).toBe('STRONG');
  });
});
```

Claves:

`tagName`:
En los tests anteriores buscábamos por `role`
Aquí, como el componente es puramente estructural, usamos element.tagName
Ten en cuenta que los navegadores (y JSDOM) devuelven el nombre del tag en MAYÚSCULAS
('P', 'H1', etc.), por eso el expect se escribe así.

Test de Regresión Visual (Clases):
##### Aunque aún no hemos escrito el CSS, el test ya está verificando que la lógica de className sea correcta:
className={text-${variant}}

Si por error alguien cambia esa línea a className={variant}, el test fallará, protegiendo la consistencia de tus estilos


Clean Architecture:
Al separar la etiqueta HTML (as) de la apariencia visual (variant), permites que tu app sea flexible.
Puedes tener un span que se vea como un title por razones estéticas, o un h2 que se vea como body por jerarquía de contenido, sin violar las reglas de accesibilidad



### Test IconButton

Componente crítico por una razón: la accesibilidad (A11y).
Como no tiene texto visible (solo un icono)
el navegador depende totalmente del aria-label para explicarle a un usuario con lector de pantalla qué hace ese botón

Nuestro test debe garantizar que esa "voz" del componente nunca desaparezca

1. Test 
atoms/IconButton/IconButton.test.tsx

```
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { IconButton } from './IconButton';

describe('Atom: IconButton', () => {
  it('should render the icon correctly', () => {
    // Usamos un componente simple como icono para la prueba
    const TestIcon = () => <span data-testid="test-icon">X</span>;
    render(<IconButton icon={<TestIcon />} onClick={() => {}} label="Cerrar" />);
    
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('should have the correct aria-label for screen readers', () => {
    const myLabel = 'Eliminar tarea';
    render(<IconButton icon="🗑️" onClick={() => {}} label={myLabel} />);
    
    // getByLabelText verifica que el aria-label exista y coincida
    const button = screen.getByLabelText(myLabel);
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', myLabel);
  });

  it('should call onClick when the button is pressed', () => {
    const handleClick = vi.fn();
    render(<IconButton icon="+" onClick={handleClick} label="Añadir" />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when the button is disabled', () => {
    const handleClick = vi.fn();
    render(
      <IconButton 
        icon="+" 
        onClick={handleClick} 
        label="Añadir" 
        disabled={true} 
      />
    );
    
    const button = screen.getByRole('button');
    
    // Verificamos el atributo HTML 'disabled'
    expect(button).toBeDisabled();
    
    // Intentamos hacer clic
    fireEvent.click(button);
    
    // La función no debería haber sido llamada
    expect(handleClick).not.toHaveBeenCalled();
  });
});
```

2. Claves

Test de Accesibilidad (A11y):
##### screen.getByLabelText es más importante que getByRole
Si olvidas pasar la prop label o el componente no la mapea correctamente al aria-label, este test fallará
Esto asegura que tu app sea inclusiva desde su átomo más pequeño

Estado `disabled`:
##### fundamental probar que la lógica de negocio no se dispare si el botón está bloqueado
blindamos el componente contra errores donde el botón parece deshabilitado pero sigue respondiendo a eventos

`data-testid`:
Lo usamos en el icono de prueba
técnica común cuando quieres verificar que un "hijo" (children/icon) se renderizó correctamente sin importar qué tipo de elemento
sea (un SVG, un emoji o un componente de Lucide/FontAwesome).



### Test de Checkbox

No es un simple elemento HTML, sino un componente compuesto
Al usar un div envoltorio para aplicar el estilo
el test debe asegurar que la accesibilidad y la lógica sigan funcionando como un checkbox real

Checkbox.test.tsx:

```
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Atom: Checkbox', () => {
  it('should render correctly with checked=false', () => {
    render(<Checkbox checked={false} onChange={() => {}} />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-checked', 'false');
  });

  it('should render correctly with checked=true', () => {
    render(<Checkbox checked={true} onChange={() => {}} />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-checked', 'true');
  });

  it('should call onChange when clicked', () => {
    const handleChange = vi.fn();
    render(<Checkbox checked={false} onChange={handleChange} />);
    
    const wrapper = screen.getByRole('checkbox');
    fireEvent.click(wrapper);
    
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
```

1. 'Caja Negra': `describe` e Importaciones

Usamos describe para agrupar las pruebas del átomo
Importamos vi de Vitest
herramienta para crear "espías" o funciones falsas (mocks).

2. Estado Inicial: `checked={false}` 

```
it('should render correctly with checked=false', () => {
  render(<Checkbox checked={false} onChange={() => {}} />);
  
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toHaveAttribute('aria-checked', 'false');
});
```

`getByRole('checkbox')`:
En lugar de buscar por una clase CSS, buscamos por el "rol" de accesibilidad
Como nuestro componente tiene role="checkbox", React Testing Library lo encuentra fácilmente

`aria-checked`:
estándar de ARIA
Verificamos que, aunque sea un div, le esté comunicando correctamente al sistema operativo (o al test) que no está marcado

3. Estado Activo: `checked={true}`

```
it('should render correctly with checked=true', () => {
  render(<Checkbox checked={true} onChange={() => {}} />);
  
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toHaveAttribute('aria-checked', 'true');
});
```

`validamos la reactividad`:
Si la prop checked cambia a true, el atributo de accesibilidad debe actualizarse
Esto garantiza que cuando el usuario complete una tarea
un lector de pantalla anuncie correctamente el cambio.

4. Test de Interacción: El "Espía" (`vi.fn`):

```
it('should call onChange when clicked', () => {
  const handleChange = vi.fn(); // Creamos el espía
  render(<Checkbox checked={false} onChange={handleChange} />);
  
  const wrapper = screen.getByRole('checkbox');
  fireEvent.click(wrapper); // Simulamos el click del usuario
  
  expect(handleChange).toHaveBeenCalledTimes(1);
});
```

`vi.fn()`:
Es una función vacía que registra cuántas veces fue llamada y con qué argumentos

`fireEvent.click(wrapper)`:
Simulamos la acción del usuario sobre el contenedor principal

`toHaveBeenCalledTimes(1)`:
prueba de fuego
Si el componente tiene un error en el onClick y no dispara la función
este test fallará, avisándote antes de que lo subas a producción


### Nuevo checkbox

Componente:

```
import React from 'react';

interface CheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

export const Checkbox = ({ checked, onChange, label }: CheckboxProps) => {
  return (
    <label className="checkbox-wrapper" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange}
        // El input es el que maneja el foco y el evento
      />
      <span className="checkmark" />
      {label && <span>{label}</span>}
    </label>
  );
};
```

Test:

```
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Atom: Checkbox', () => {
  it('should render with correct checked state', () => {
    render(<Checkbox checked={true} onChange={() => {}} label="Aceptar términos" />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
    expect(screen.getByText('Aceptar términos')).toBeInTheDocument();
  });

  it('should call onChange exactly once when clicked', () => {
    const handleChange = vi.fn();
    render(<Checkbox checked={false} onChange={handleChange} />);
    
    const checkbox = screen.getByRole('checkbox');
    
    // Al hacer click en un input type="checkbox", el navegador dispara el evento 'change'
    fireEvent.click(checkbox);
    
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should be accessible via its label', () => {
    render(<Checkbox checked={false} onChange={() => {}} label="Click aquí" />);
    
    // Esto verifica que el input está correctamente asociado al texto del label
    const checkbox = screen.getByLabelText('Click aquí');
    expect(checkbox).toBeInTheDocument();
  });
});
```


### Test Badge

Al ser "inteligente", necesitamos cubrir tres escenarios clave:
el estado vacío, el conteo normal y el desbordamiento (overflow).

```
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge } from './Badge';

describe('Atom: Badge', () => {
  it('should not render anything if count is 0', () => {
    const { container } = render(<Badge count={0} />);
    // Verificamos que el DOM esté vacío (null en el componente)
    expect(container.firstChild).toBeNull();
  });

  it('should not render anything if count is negative', () => {
    const { container } = render(<Badge count={-5} />);
    expect(container.firstChild).toBeNull();
  });

  it('should render the exact count if it is less than or equal to overflowCount', () => {
    render(<Badge count={50} />);
    const badge = screen.getByText('50');
    expect(badge).toBeInTheDocument();
    // Verificamos el aria-label para accesibilidad
    expect(badge).toHaveAttribute('aria-label', '50 notificaciones');
  });

  it('should render "99+" if count exceeds the default overflowCount (99)', () => {
    render(<Badge count={150} />);
    expect(screen.getByText('99+')).toBeInTheDocument();
    // Importante: el aria-label debe mantener el número real para lectores de pantalla
    const badge = screen.getByLabelText('150 notificaciones');
    expect(badge).toBeInTheDocument();
  });

  it('should respect a custom overflowCount prop', () => {
    render(<Badge count={15} overflowCount={10} />);
    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getByLabelText('15 notificaciones')).toBeInTheDocument();
  });
});
```

Limpieza del DOM:
Validamos que no se rendericen nodos innecesarios
(como un <span> vacío) si no hay notificaciones.

Experiencia de Usuario (UX):
Comprobamos que el límite visual (99+ o el personalizado) funcione correctamente
para no romper el diseño con números gigantes.

Accesibilidad (A11y):
Este es el punto más fuerte.
Aunque el ojo humano vea "99+", un usuario que use un lector de pantalla escuchará "150 notificaciones",
lo cual es la información verídica


## 2. Molecules

```
src/
└── components/
    ├── atoms/
    │   ├── Badge/
    │   │   ├── Badge.tsx
    │   │   └── Badge.test.tsx
    │   └── Checkbox/
    │       ├── Checkbox.tsx
    │       └── Checkbox.test.tsx
    ├── molecules/
    │   ├── FilterItem/
    │   │   ├── FilterItem.tsx
    │   │   └── FilterItem.test.tsx
    │   └── InputGroup/
    │       ├── InputGroup.tsx
    │       └── InputGroup.test.tsx
    ├── organisms/        # (Próximo nivel: Combinación de moléculas)
    ├── templates/        # (Esqueletos de página)
    └── pages/            # (Componentes con estado global/API)
```

FilterItem:
Es el nombre estándar para un elemento de lista interactivo que combina un selector (Checkbox)
una etiqueta de texto y un contador de resultados (Badge)

InputGroup:
Representa un campo de entrada enriquecido.
En este caso, agrupa el input con su label
y usa el Badge como un indicador dinámico (contador de caracteres restantes).


### 1. FilterItem

ideal para barras laterales de búsqueda o menús de categorías.

```
import { Checkbox } from '../atoms/Checkbox/Checkbox';
import { Badge } from '../atoms/Badge/Badge';

interface FilterItemProps {
  label: string;
  count: number;
  isSelected: boolean;
  onToggle: () => void;
}

export const FilterItem = ({ label, count, isSelected, onToggle }: FilterItemProps) => {
  return (
    <div className="filter-item">
      <Checkbox 
        checked={isSelected} 
        onChange={onToggle} 
        label={label} 
      />
      
      {/* El Badge solo se muestra si hay elementos y la opción está seleccionada */}
      {isSelected && count > 0 && (
        <Badge count={count} overflowCount={999} />
      )}
    </div>
  );
};
```


### 2. InputGroup

InputGroup.tsx

campo de entrada con una etiqueta y una validación visual simple
usando el Badge para indicar errores o advertencias si fuera necesario
aunque aquí lo usaremos como un contador de caracteres

```
import { Badge } from '../atoms/Badge/Badge';

interface InputGroupProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  placeholder?: string;
}

export const InputGroup = ({ 
  label, 
  value, 
  onChange, 
  maxLength = 100, 
  placeholder 
}: InputGroupProps) => {
  const remaining = maxLength - value.length;

  return (
    <div className="input-group">
      <div className="input-group-header">
        <label className="input-label">{label}</label>
        {value.length > 0 && (
          <Badge count={remaining} overflowCount={maxLength} />
        )}
      </div>
      
      <input
        type="text"
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        placeholder={placeholder}
        className="input-field"
      />
    </div>
  );
};
```

Composición:
##### Las moléculas no "saben" cómo funcionan los átomos internamente, solo les pasan las props necesarias.

Responsabilidad:
FilterItem ahora gestiona la lógica de visibilidad del Badge basándose en el estado del Checkbox



## Test de Molecules

La estrategia cambia el enfoque desde la unidad aislada (Átomo)
##### hacia la colaboración y el flujo de datos

ya no nos importa solo si un botón hace clic
##### sino cómo ese clic afecta al resto de los componentes que lo rodean

Conceptos:

### 1. Testeo de Integración: Communication Testing

A diferencia de los átomos, donde validamos una propiedad visual o funcional única
##### En la molécula validamos la interacción, el objetivo es asegurar que el "contrato" entre los átomos se cumple

##### Si el Átomo A emite un evento, el Átomo B debe reaccionar según la lógica de la molécula


### 2. Delegación y Prop Drilling

Se verifica que la molécula actúe como un pasarela correcta
##### Debes asegurar que las funciones (callbacks) y datos que recibe la molécula lleguen intactos a los átomos correspondientes sin transformaciones accidentales en el camino


### 3. Lógica de Estado Local y Condicional

##### Las moléculas suelen contener la primera capa de "lógica de negocio visual
Los test deben cubrir:

1. Renderizado condicional:
El Badge desaparece si el contador es cero?
Aparece el mensaje de error si el Input es inválido?

2. Transformación de datos:
Si la molécula recibe un array,
renderiza la cantidad correcta de átomos hijo?


### 4. Orquestación de Eventos

A nivel de molécula, testeamos el flujo completo de una acción
No solo disparamos el evento en el input
sino que verificamos que la respuesta de la molécula
Ej, el cambio de una clase CSS o la ejecución de una prop onToggle
sea la esperada tras la interacción de sus partes.


### 5. Accesibilidad de Contexto (A11y)

Mientras que en los átomos validamos etiquetas individuales
##### en las moléculas validamos la jerarquía

El label de un átomo está correctamente asociado al input de otro?
El orden del foco (tabindex) fluye de manera lógica a través de los componentes agrupados?


### 6. Mocking: Átomos reales o simulados?

Escuelas:

1. Socialable Tests:
Usas los átomos reales dentro de la molécula
Si el átomo cambia y rompe la molécula, el test falla
útil para detectar efectos colaterales

2. Solitary Tests:
Mockeas los átomos para probar solo la lógica de la molécula
útil si los átomos son muy complejos o pesados

##### En Atomic Design, lo más común es usar Socialable Tests (átomos reales)
ya que los átomos son lo suficientemente simples como para no penalizar el rendimiento del test


### Test FilterItem

Siguiendo 'Socialable Tests'
usando los átomos reales para asegurar que la integración sea perfecta

##### Enfocado en validar la comunicación entre componentes y la lógica condicional del Badge

FilterItem.test.tsx:

```
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { FilterItem } from './FilterItem';

describe('Molecule: FilterItem', () => {
  const defaultProps = {
    label: 'Categoría Test',
    count: 10,
    isSelected: false,
    onToggle: vi.fn(),
  };

  it('should render the label and checkbox correctly', () => {
    render(<FilterItem {...defaultProps} />);
    
    expect(screen.getByLabelText('Categoría Test')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('should NOT show the Badge when isSelected is false', () => {
    render(<FilterItem {...defaultProps} isSelected={false} />);
    
    // queryByText devuelve null si no lo encuentra (ideal para ausencias)
    expect(screen.queryByText('10')).not.toBeInTheDocument();
  });

  it('should show the Badge when isSelected is true and count > 0', () => {
    render(<FilterItem {...defaultProps} isSelected={true} />);
    
    const badge = screen.getByText('10');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('badge-count');
  });

  it('should NOT show the Badge if count is 0, even if isSelected is true', () => {
    render(<FilterItem {...defaultProps} isSelected={true} count={0} />);
    
    // El átomo Badge devuelve null si el count es 0, la molécula lo respeta
    const badge = screen.queryByRole('generic', { name: /0 notificaciones/i });
    expect(badge).not.toBeInTheDocument();
  });

  it('should call onToggle when the checkbox is clicked', () => {
    const onToggleMock = vi.fn();
    render(<FilterItem {...defaultProps} onToggle={onToggleMock} />);
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    expect(onToggleMock).toHaveBeenCalledTimes(1);
  });
});
```

Validación de Jerarquía:
Al buscar `screen.getByLabelText('Categoría Test')`
estamos confirmando que la molécula pasó correctamente la prop label al átomo Checkbox
y que este lo vinculó correctamente

Capa de lógica:
El test de `count={0}` asegura que la molécula cumple su promesa
"El Badge solo se muestra si hay elementos...".

Agnosticismo de Implementación:
No nos importa cómo el Checkbox dispara el evento
solo que la molécula reaccione llamando a `onToggle`.

Uso de `queryBy` en lugar de `getBy`:
##### Cuando quieras asegurar que algo no está en el DOM usa siempre queryBy
Si usas getBy, React Testing Library lanzará un error y detendrá el test antes de que puedas hacer el expect


### Test InputGroup

introduce una lógica de cálculo (remaining),
una dependencia de estado (el Badge depende de la longitud del string).

aplicando los conceptos de orquestación y validación de props

```
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { InputGroup } from './InputGroup';

describe('Molecule: InputGroup', () => {
  const defaultProps = {
    label: 'Nombre de usuario',
    value: '',
    onChange: vi.fn(),
    placeholder: 'Escribe tu nombre...',
    maxLength: 20,
  };

  it('should render the label and input correctly', () => {
    render(<InputGroup {...defaultProps} />);
    
    expect(screen.getByText('Nombre de usuario')).toBeInTheDocument();
    const input = screen.getByPlaceholderText('Escribe tu nombre...');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  it('should NOT show the Badge when value is empty', () => {
    render(<InputGroup {...defaultProps} value="" />);
    
    // El Badge no debe estar en el DOM si no hay texto
    expect(screen.queryByClass('badge-count')).not.toBeInTheDocument();
  });

  it('should show the Badge with correct remaining count when typing', () => {
    const value = 'Gemini'; // 6 caracteres
    const maxLength = 20;
    const expectedRemaining = 14;

    render(<InputGroup {...defaultProps} value={value} maxLength={maxLength} />);
    
    // Verificamos que el Badge muestre el cálculo correcto
    const badge = screen.getByText(expectedRemaining.toString());
    expect(badge).toBeInTheDocument();
    
    // Verificamos accesibilidad (A11y) heredada del átomo
    expect(badge).toHaveAttribute('aria-label', `${expectedRemaining} notificaciones`);
  });

  it('should call onChange when the user types', () => {
    const handleChange = vi.fn();
    render(<InputGroup {...defaultProps} onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Nuevo texto' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should hide the Badge when the limit is reached (remaining = 0)', () => {
    // Debido a que nuestro Átomo Badge retorna null si count <= 0
    render(<InputGroup {...defaultProps} value="12345678901234567890" maxLength={20} />);
    
    const badge = screen.queryByClass('badge-count');
    expect(badge).not.toBeInTheDocument();
  });
});
```

Cálculo Dinámico:
Validamos que la molécula esté haciendo bien la resta (maxLength - value.length) antes de pasarle el dato al Badge

Comportamiento de Borde:
El último test es crucial
Como definimos en el Átomo Badge que un contador de 0
no renderiza nada, aquí comprobamos que la molécula respeta ese comportamiento cuando el usuario llega al límite de caracteres

Pasarela de Props:
Verificamos que el placeholder y el maxLength se inyecten correctamente en el elemento input nativo

Si mañana decides cambiar la lógica para que el Badge cambie de color cuando queden menos de 5 caracteres
solo tendrías que tocar el CSS o añadir una prop de "warning"


# Organismos

##### Aquí ya no solo pasamos datos, sino que empezamos a orquestar cómo interactúan nuestras moléculas para formar una sección real de la interfaz

```
src/
└── components/
    ├── atoms/
    ├── molecules/
    └── organisms/
        └── FilterPanel/
            ├── FilterPanel.tsx
            └── FilterPanel.test.tsx
```


## 1. FilterPanel

Agrupará un InputGroup (para buscar) y una lista de FilterItem (para seleccionar categorías).

##### Este componente gestiona su propio estado interno para el filtrado visual, pero delega la lógica de selección al padre (típicamente una Página o un Template).

```
import { useState } from 'react';
import { FilterItem } from '../molecules/FilterItem/FilterItem';
import { InputGroup } from '../molecules/InputGroup/InputGroup';

interface Category {
  id: string;
  label: string;
  count: number;
}

interface FilterPanelProps {
  categories: Category[];
  selectedIds: string[];
  onToggleCategory: (id: string) => void;
  title?: string;
}

export const FilterPanel = ({ 
  categories, 
  selectedIds, 
  onToggleCategory, 
  title = "Filtros" 
}: FilterPanelProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Lógica interna del organismo: filtrar la lista que se muestra
  const filteredCategories = categories.filter((cat) =>
    cat.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside className="filter-panel">
      <div className="filter-panel-header">
        <h2>{title}</h2>
        <InputGroup
          label="Filtrar por nombre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar..."
          maxLength={20}
        />
      </div>

      <div className="filter-panel-content">
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredCategories.map((category) => (
            <li key={category.id} style={{ marginBottom: '8px' }}>
              <FilterItem
                label={category.label}
                count={category.count}
                isSelected={selectedIds.includes(category.id)}
                onToggle={() => onToggleCategory(category.id)}
              />
            </li>
          ))}
        </ul>

        {filteredCategories.length === 0 && (
          <p className="filter-empty-state">No hay coincidencias</p>
        )}
      </div>
    </aside>
  );
};
```



## Testing de Organismos

los tests ya no solo miran si se llamó a una función.
Ahora miramos si, por ejemplo, al escribir en la molécula A (Input)
la lista de moléculas B (Items) se reduce
Es pura orquestación

la estrategia de testing deja de ser simplemente "ver si esto funciona"
para convertirse en "ver si este sistema se comporta como un todo".

Para testear organismos, nos alejamos del detalle técnico y nos enfocamos en el comportamiento del usuario


Conceptos:

### 1. Orquestación de Flujos Completos

##### En un organismo, el test debe validar la "conversación" entre sus partes
Ej, si escribes en la molécula de búsqueda
se actualiza la lista de ítems?
No testeas el input ni el ítem por separado, sino el vínculo que los une


### 2. Gestión de Estados Complejos

Los organismos suelen manejar lógica interna
como filtrado, ordenamiento o validaciones de grupo

##### La estrategia aquí es verificar cómo el estado interno del organismo afecta el renderizado de sus moléculas hijas


### 3. Casos de Borde de Negocio: Empty & Error States

los organismos tienen "conciencia" de la información que manejan
a diferencia de las moléculas

1. Empty States:
¿Qué pasa si la lista está vacía?

2. Loading States:
¿Cómo se comporta el organismo mientras espera datos?

3. Error States:
¿Cómo reacciona el conjunto si una parte falla


### 4. Propagación de Eventos (Bubbling Up)

El organismo es el último eslabón antes de llegar a la lógica de la página
##### Debes asegurar que los eventos importantes (como "Aplicar filtros" o "Enviar formulario") se emitan correctamente hacia afuera con la data procesada y limpia


### 5. Semántica y Roles de Región

Como los organismos suelen representar secciones importantes de la interfaz
un header, una barra lateral, un pie de página
los tests deben validar que se usen los Landmarks de accesibilidad correctos
(<nav>, <aside>, <section>, role="search").


### 6. Contratos de Datos (Mocks de Estructura)

##### Aquí es vital testear con datos realistas: No uses solo un string; usa arrays de objetos que simulen lo que vendría de una API
El test debe garantizar que el organismo sabe "mapear" esa complejidad hacia las moléculas de forma segura

El test deja de ser "Unitario" y pasa a ser de "Integración de Componentes".
##### Buscamos confianza en que el sistema es robusto frente a cambios en los datos



### Test de FilterPanel

comprobaremos cómo el estado interno del organismo (el buscador)
altera dinámicamente la renderización de sus moléculas hijas

FilterPanel.test.tsx

```
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { FilterPanel } from './FilterPanel';

describe('Organism: FilterPanel', () => {
  const mockCategories = [
    { id: '1', label: 'React', count: 12 },
    { id: '2', label: 'TypeScript', count: 8 },
    { id: '3', label: 'Vitest', count: 5 },
  ];

  const defaultProps = {
    categories: mockCategories,
    selectedIds: ['1'], // React seleccionado por defecto
    onToggleCategory: vi.fn(),
    title: 'Mis Filtros'
  };

  it('should render the panel with title and all categories initially', () => {
    render(<FilterPanel {...defaultProps} />);
    
    expect(screen.getByText('Mis Filtros')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Vitest')).toBeInTheDocument();
  });

  it('should filter the list of categories when searching', () => {
    render(<FilterPanel {...defaultProps} />);
    
    const searchInput = screen.getByPlaceholderText('Buscar...');
    
    // El usuario busca "Type"
    fireEvent.change(searchInput, { target: { value: 'Type' } });

    // Debería mostrar TypeScript
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    
    // Debería haber ocultado React y Vitest
    expect(screen.queryByText('React')).not.toBeInTheDocument();
    expect(screen.queryByText('Vitest')).not.toBeInTheDocument();
  });

  it('should call onToggleCategory with correct ID when an item is clicked', () => {
    const onToggleMock = vi.fn();
    render(<FilterPanel {...defaultProps} onToggleCategory={onToggleMock} />);
    
    // Buscamos el checkbox de TypeScript (que no está seleccionado inicialmente)
    const checkbox = screen.getByLabelText('TypeScript');
    fireEvent.click(checkbox);
    
    expect(onToggleMock).toHaveBeenCalledWith('2');
  });

  it('should show the empty state message when no categories match the search', () => {
    render(<FilterPanel {...defaultProps} />);
    
    const searchInput = screen.getByPlaceholderText('Buscar...');
    fireEvent.change(searchInput, { target: { value: 'Rust' } });

    expect(screen.getByText('No hay coincidencias')).toBeInTheDocument();
    // No debería haber ningún item de filtro en el DOM
    expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
  });

  it('should be case insensitive when searching', () => {
    render(<FilterPanel {...defaultProps} />);
    
    const searchInput = screen.getByPlaceholderText('Buscar...');
    fireEvent.change(searchInput, { target: { value: 'react' } }); // Minúsculas

    expect(screen.getByText('React')).toBeInTheDocument();
  });
});
```

Validaciones:

1. Orquestación Input-Lista
El test de búsqueda es el más importante
Valida que la molécula `InputGroup` está comunicando correctamente el valor al estado del FilterPanel
y que este, a su vez, filtra el mapeo de `FilterItem`.

2. Manejo de IDs:
Al validar `toHaveBeenCalledWith('2')`
nos aseguramos de que el organismo no está confundiendo los datos
y que cada fila mantiene su identidad única

3. Estado Vacío (Empty State):
Es un comportamiento típico de organismo
No es responsabilidad de los átomos saber qué pasa si no hay datos
es el organismo el que decide mostrar el mensaje de "No hay coincidencias".

4. Socialable Testing:
Nota que usamos `getByLabelText`
Esto funciona porque FilterPanel renderiza FilterItem, que a su vez renderiza Checkbox, que tiene un label
Si el átomo Checkbox rompe su accesibilidad, el test del organismo también fallará


### Mejora FilterPanel

1. Componente

```
import { useState, useId } from 'react';
import { FilterItem } from '../molecules/FilterItem/FilterItem';
import { InputGroup } from '../molecules/InputGroup/InputGroup';

// ... (Interface Category y FilterPanelProps se mantienen igual)

export const FilterPanel = ({ 
  categories, 
  selectedIds, 
  onToggleCategory, 
  title = "Filtros" 
}: FilterPanelProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const titleId = useId(); // Genera un ID único para vincular el título con la lista

  const filteredCategories = categories.filter((cat) =>
    cat.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside className="filter-panel" aria-labelledby={titleId}>
      <div className="filter-panel-header">
        <h2 id={titleId}>{title}</h2>
        <InputGroup
          label="Filtrar por nombre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar..."
        />
      </div>

      <div className="filter-panel-content">
        <ul 
          aria-label="Lista de categorías" 
          style={{ listStyle: 'none', padding: 0 }}
        >
          {filteredCategories.map((category) => (
            <li key={category.id}>
              <FilterItem
                label={category.label}
                count={category.count}
                isSelected={selectedIds.includes(category.id)}
                onToggle={() => onToggleCategory(category.id)}
              />
            </li>
          ))}
        </ul>

        {filteredCategories.length === 0 && (
          <p role="status" className="filter-empty-state">
            No hay coincidencias para "{searchTerm}"
          </p>
        )}
      </div>
    </aside>
  );
};
```


2. Test

```
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { FilterPanel } from './FilterPanel';

describe('Organism: FilterPanel', () => {
  const mockCategories = [
    { id: '1', label: 'React', count: 12 },
  ];

  it('should find the Badge using its accessible label when selected', () => {
    render(
      <FilterPanel 
        categories={mockCategories} 
        selectedIds={['1']} // React seleccionado
        onToggleCategory={vi.fn()} 
      />
    );

    // En lugar de screen.getByText('12'), usamos el label del átomo Badge
    const badge = screen.getByLabelText(/12 notificaciones/i);
    expect(badge).toBeInTheDocument();
  });

  it('should not find any Badge when no categories are selected', () => {
    render(
      <FilterPanel 
        categories={mockCategories} 
        selectedIds={[]} // Nada seleccionado
        onToggleCategory={vi.fn()} 
      />
    );

    // queryByLabelText es perfecto aquí: si no lo encuentra, devuelve null sin fallar
    const badge = screen.queryByLabelText(/notificaciones/i);
    expect(badge).not.toBeInTheDocument();
  });

  it('should provide correct context for the empty state', () => {
    render(
      <FilterPanel 
        categories={mockCategories} 
        selectedIds={[]} 
        onToggleCategory={vi.fn()} 
      />
    );

    const input = screen.getByRole('textbox', { name: /filtrar por nombre/i });
    fireEvent.change(input, { target: { value: 'Vue' } });

    // Verificamos que el mensaje de "No hay coincidencias" tenga el rol status
    // Esto avisa a los lectores de pantalla que el contenido cambió
    const statusMessage = screen.getByRole('status');
    expect(statusMessage).toHaveTextContent(/no hay coincidencias/i);
  });
});
```

Robustez:
Si decides cambiar el diseño del Badge para que en lugar de un número muestre un icono de "check",
el test de accesibilidad te obligará a mantener un aria-label coherente, protegiendo la experiencia de usuarios con discapacidad

Uso de Roles:
Al usar getByRole('status') o getByRole('textbox'), te aseguras de que el HTML es semánticamente correcto
Si cambias el input por un div con onClick, el test fallará inmediatamente avisándote de que has roto la accesibilidad

Desacoplamiento:
El test ya no depende de si el CSS oculta el elemento con display: none
o si la clase se llama .active. Depende de la intención del componente.



# Templates

Define el esqueleto o la estructura de la página
Una aplicación suele tener varios templates
Ej: Dashboard, Login, Blog

Su función principal es definir dónde van los organismos
pero no qué información contienen
Es pura disposición espacial (layout) y jerarquía

`Data-Agnostic`:
En lugar de renderizar contenido directamente
recibe componentes como props
ej. sidebar, header, content

`Estado Global`:
No consume Context ni Redux
Solo organiza

```
src/
└── components/
    ├── atoms/
    ├── molecules/
    ├── organisms/
    └── templates/
        └── DashboardTemplate/
            ├── DashboardTemplate.tsx
            └── DashboardTemplate.test.tsx
```


## DashboardTemplate

Template clásico de panel de administración
marco donde encajaremos nuestro FilterPanel

```
import React from 'react';

interface DashboardTemplateProps {
  header: React.ReactNode;
  sidebar: React.ReactNode;
  children: React.ReactNode; // El contenido principal
  footer?: React.ReactNode;
}

export const DashboardTemplate = ({ 
  header, 
  sidebar, 
  children, 
  footer 
}: DashboardTemplateProps) => {
  return (
    <div className="template-dashboard">
      {/* Región del Header */}
      <header className="template-header">
        {header}
      </header>

      <div className="template-body" style={{ display: 'flex' }}>
        {/* Región Lateral */}
        <aside className="template-sidebar">
          {sidebar}
        </aside>

        {/* Región de Contenido Principal */}
        <main className="template-main-content">
          {children}
        </main>
      </div>

      {/* Región del Footer Opcional */}
      {footer && (
        <footer className="template-footer">
          {footer}
        </footer>
      )}
    </div>
  );
};
```

Puedes testear el diseño visual de tu aplicación con "placeholders", cajas vacías con colores; antes de que el backend esté listo
Si el diseño del Dashboard cambia, ej. sidebar pasa a la derecha
solo tocas el Template y todas tus páginas se actualizan automáticamente sin romper la lógica


## Testing de Templates

El test es de presencia y estructura

`Snapshot Testing`:
muy común aquí para asegurar que la estructura del DOM no cambie accidentalmente

`Validación de Slots`:
Verificamos que si pasamos un componente al prop header
este se renderice dentro de la etiqueta <header>.


### Testing de Dashboard

Se usa `Landmarks de ARIA` (roles semánticos).
Asegura que la estructura sea correcta tanto visualmente como para la accesibilidad

DashboardTemplate.test.tsx

```
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DashboardTemplate } from './DashboardTemplate';

describe('Template: DashboardTemplate', () => {
  const MockHeader = () => <div data-testid="header-mock">Header</div>;
  const MockSidebar = () => <div data-testid="sidebar-mock">Sidebar</div>;
  const MockContent = () => <div data-testid="content-mock">Main Content</div>;
  const MockFooter = () => <div data-testid="footer-mock">Footer</div>;

  it('should render header, sidebar and main content in their semantic regions', () => {
    render(
      <DashboardTemplate 
        header={<MockHeader />} 
        sidebar={<MockSidebar />}
      >
        <MockContent />
      </DashboardTemplate>
    );

    // Verificamos por ROLES semánticos (Landmarks)
    expect(screen.getByRole('banner')).toContainElement(screen.getByTestId('header-mock'));
    expect(screen.getByRole('complementary')).toContainElement(screen.getByTestId('sidebar-mock'));
    expect(screen.getByRole('main')).toContainElement(screen.getByTestId('content-mock'));
  });

  it('should not render a footer if the prop is not provided', () => {
    render(
      <DashboardTemplate header={<MockHeader />} sidebar={<MockSidebar />}>
        <MockContent />
      </DashboardTemplate>
    );

    // 'contentinfo' es el rol por defecto de la etiqueta <footer>
    expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument();
  });

  it('should render the footer when provided', () => {
    render(
      <DashboardTemplate 
        header={<MockHeader />} 
        sidebar={<MockSidebar />}
        footer={<MockFooter />}
      >
        <MockContent />
      </DashboardTemplate>
    );

    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    expect(footer).toContainElement(screen.getByTestId('footer-mock'));
  });

  it('should maintain the correct layout flow (Sidebar then Main)', () => {
    const { container } = render(
      <DashboardTemplate header={<MockHeader />} sidebar={<MockSidebar />}>
        <MockContent />
      </DashboardTemplate>
    );

    const bodyContainer = container.querySelector('.template-body');
    
    // Verificamos que el orden de los hijos en el DOM sea el esperado para el layout
    expect(bodyContainer?.firstElementChild).toHaveClass('template-sidebar');
    expect(bodyContainer?.lastElementChild).toHaveClass('template-main-content');
  });
});
```

`Validación de "Slots"`:
Usamos componentes "mock" (simulados) muy simples
para confirmar que el Template está inyectando las props en los lugares correctos del HTML

`Roles Semánticos`:
En lugar de buscar por clases CSS (que son volátiles)
buscamos por role="banner" (header),
role="main" y role="complementary" (aside).
Si mañana cambias el CSS pero mantienes el HTML semántico,
el test seguirá pasando

`Contrato Estructural`:
En el último test, aunque no haya CSS, la jerarquía de los elementos en el DOM sea la correcta
para que cuando apliques Flexbox o Grid, todo se posicione donde debe



# Pages

##### Son instancias/objetos especificos de los Templates

##### Tendrás varias páginas una por cada ruta de tu aplicación
HomePage, SettingsPage, ProductPage

##### La página es la encargada de: estado global, llamadas a la API e Inyectar los datos reales en los organismos y plantillas
estado global (o conectar con Redux/Context/Zustand).
llamadas a la API (Side effects).


## DashboardPage.tsx

Darle vida a todo lo que hemos construido
Usaremos el DashboardTemplate, nuestro organismo FilterPanel y simularemos una carga de datos

```
import { useState, useEffect } from 'react';
import { DashboardTemplate } from '../templates/DashboardTemplate/DashboardTemplate';
import { FilterPanel } from '../organisms/FilterPanel/FilterPanel';

// Simulamos tipos de datos de una API
interface Category {
  id: string;
  label: string;
  count: number;
}

export const DashboardPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 1. Efecto para cargar datos reales (Simulado)
  useEffect(() => {
    const fetchData = async () => {
      // Imagina que esto viene de tu Backend
      const data = [
        { id: '1', label: 'Frontend', count: 45 },
        { id: '2', label: 'Backend', count: 32 },
        { id: '3', label: 'DevOps', count: 12 },
      ];
      setCategories(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  // 2. Lógica de negocio (manejo de selección)
  const handleToggleCategory = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  // 3. Definimos los componentes para los "slots" del Template
  const header = (
    <nav className="page-nav">
      <h1>Mi Dashboard Pro</h1>
    </nav>
  );

  const sidebar = (
    <FilterPanel
      categories={categories}
      selectedIds={selectedIds}
      onToggleCategory={handleToggleCategory}
      title="Categorías de Cursos"
    />
  );

  if (isLoading) return <div>Cargando sistema...</div>;

  return (
    <DashboardTemplate header={header} sidebar={sidebar}>
      <section className="main-content-view">
        <h2>Resultados ({selectedIds.length} filtros activos)</h2>
        <p>Aquí se mostraría la lista de cursos filtrada...</p>
        
        {/* Aquí irían otros organismos como un ProductGrid */}
      </section>
    </DashboardTemplate>
  );
};
```

`Template ciego`:
DashboardTemplate solo sabe que tiene un "hueco" llamado sidebar

`Página es el cerebro`:
La DashboardPage sabe que dentro de ese "hueco" quiere poner un FilterPanel
sabe de dónde sacar la lista de categorías


## Test de Pages

Los tests cambian radicalmente
##### Ya no testeamos componentes aislados, sino Flujos de Usuario (E2E o Integración Pesada)

`Mocking de API`:
herramientas como MSW (Mock Service Worker) para simular la respuesta del servidor

`User Journeys`:
Si el usuario entra, espera a que cargue y hace clic en 'Frontend', aparece el badge de selección?

`Navegación`:
muestran los errores si la API falla?


### Testing de DashboardPage

Entramos en el terreno de los Tests de Integración Pesados
Aquí no nos importa si un botón es rojo o azul
sino si el "viaje del usuario" funciona
desde que abre la página (carga), recibe los datos (API) e interactúa con ellos

##### Al ser componentes con efectos secundarios (useEffect), la clave es la asincronía

#### Estrategia: Render, Wait & Act

1. Simulación de Carga:
Verificamos que aparezca el estado de loading

2. Espera Asíncrona:
Usamos waitFor o los métodos findBy...
para esperar a que la "API" responda y el DOM se actualice

3. Flujo Completo:
Comprobamos que al interactuar con un Organismo (FilterPanel)
la Página reaccione y actualice el resto de la interfaz.

DashboardPage.test.tsx

```
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { DashboardPage } from './DashboardPage';

describe('Page: DashboardPage', () => {
  
  it('should show a loading state initially', () => {
    render(<DashboardPage />);
    expect(screen.getByText(/cargando sistema/i)).toBeInTheDocument();
  });

  it('should render categories after fetching data', async () => {
    render(<DashboardPage />);

    // 'findBy' es asíncrono: espera hasta que el elemento aparezca (timeout por defecto 1s)
    const categoryItem = await screen.findByText('Frontend');
    
    expect(categoryItem).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
    expect(screen.queryByText(/cargando sistema/i)).not.toBeInTheDocument();
  });

  it('should update the results count when a category is selected', async () => {
    render(<DashboardPage />);

    // 1. Esperamos a que carguen los datos
    const checkbox = await screen.findByLabelText(/Frontend/i);
    
    // 2. Verificamos estado inicial del contador en la zona de contenido
    expect(screen.getByText(/Resultados \(0 filtros activos\)/i)).toBeInTheDocument();

    // 3. El usuario interactúa
    fireEvent.click(checkbox);

    // 4. La página debe haber reaccionado al evento del organismo
    expect(screen.getByText(/Resultados \(1 filtros activos\)/i)).toBeInTheDocument();
    
    // 5. El badge de la molécula también debería aparecer (Integración total)
    expect(screen.getByLabelText(/45 notificaciones/i)).toBeInTheDocument();
  });

  it('should filter categories correctly using the search input', async () => {
    render(<DashboardPage />);

    // Esperamos carga
    await screen.findByText('Frontend');

    const searchInput = screen.getByPlaceholderText('Buscar...');
    fireEvent.change(searchInput, { target: { value: 'DevOps' } });

    // Verificamos que la lógica de filtrado del Organismo dentro de la Página funcione
    expect(screen.getByText('DevOps')).toBeInTheDocument();
    expect(screen.queryByText('Frontend')).not.toBeInTheDocument();
  });
});
```

`findByRole / findByText`:
Los mejores en las páginas
Combinan un getBy con un waitFor
Si el componente está cargando datos, estos métodos esperarán a que el estado cambie antes de fallar

`Integración Vertical`:
En el test de "update results",
estamos validando que un clic en un Átomo (Checkbox),
que vive en una Molécula (FilterItem),
que está dentro de un Organismo (FilterPanel),
finalmente cambie un texto en la Página.

`Caja Negra`:
No estamos "espiando" el estado interno de React (useState).
Estamos mirando lo que el usuario ve:
"Si hago clic aquí, ¿cambia el número allá?".


#### Fetching Data

La función fetchData no estaría dentro del componente
sino en un servicio aparte

En ese caso, usaríamos vi.mock() para simular la respuesta del servidor sin hacer peticiones de red reales


Rs:

Átomos: Funcionalidad pura.
Moléculas: Combinación y comunicación.
Organismos: Orquestación y lógica de UI.
Templates: Estructura y accesibilidad.
Páginas: Datos, estado y realidad



# Diagrama app/layout

```
_______________________________________________________________________________
| [T] DASHBOARD TEMPLATE                                                      |
|_____________________________________________________________________________|
| [O] HEADER (Banner)                                                         |
|    "Mi Dashboard Pro"                                                       |
|_____________________________________________________________________________|
|                                     |                                       |
| [O] FILTER PANEL (Aside)            | [T] MAIN CONTENT (Children)           |
| __________________________________  |                                       |
| | [M] INPUT GROUP                |  |  "Resultados (1 filtros activos)"     |
| | Label: "Filtrar por nombre"    |  |                                       |
| | [input: "Buscar..."] [A] BADGE |  |  -----------------------------------  |
| |________________________________|  |  |                                 |  |
|                                     |  |     Aquí iría el contenido      |  |
| __________________________________  |  |     principal de la página      |  |
| | [M] FILTER ITEM (Lista)        |  |  |     (Ej: Grid de Cursos)        |  |
| | [A] Check [Text] [A] BADGE     |  |  |                                 |  |
| | [A] Check [Text] [A] BADGE     |  |  -----------------------------------  |
| | [A] Check [Text] [A] BADGE     |  |                                       |
|T] Template (DashboardTemplate): Define que el Header va arriba, el FilterPanel a la izquierda y los resultados a la derecha. No sabe qué hay dentro, solo reserva el espacio |________________________________|  |                                       |
|_____________________________________|_______________________________________|
```

`T` Template (DashboardTemplate):
Define que el Header va arriba, el FilterPanel a la izquierda y los resultados a la derecha.
No sabe qué hay dentro, solo reserva el espacio

`O` Organismo (FilterPanel):
dueño" de la lógica de búsqueda
Contiene las moléculas y decide cuándo mostrar el mensaje de "No hay coincidencias

`M` Moléculas (InputGroup / FilterItem):
Son las unidades funcionales.

InputGroup une el texto con el contador de caracteres.
FilterItem une el selector con el nombre y el número de resultados

`A` Átomos (Badge / Checkbox):
Las piezas indivisibles
El Badge se usa en dos moléculas distintas con propósitos diferentes
contador de caracteres y contador de resultados
demostrando el reuso


## Data flow

Flujo de datos:

`Arriba hacia abajo (Props)`:
La Página recibe los datos de la API →
se los pasa al Organismo →
este los mapea a las Moléculas →
que finalmente configuran los Átomos

`Abajo hacia arriba (Events):`
El usuario hace clic en el Átomo (Checkbox) →
la Molécula emite el cambio →
el Organismo lo comunica a la Página →
la Página actualiza el estado y todo el árbol se repinta



# Componentes con los estilos

## Config Styled Components en TS

1. Dependencias

```
npm install styled-components
npm install -D @types/styled-components
```

2. Definición del Tema

El Theme es la "fuente de verdad" en Atomic
los colores, espaciados y tipografías que usarán todos los componentes

Ej:

```
export const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    background: '#f8f9fa',
  }
}

export type ThemeType = typeof theme;
```

3. Declaración de Tipos para el tema

##### Para que TypeScript reconozca tu tema personalizado cuando uses props.theme: debes extender la interfaz original de la librería

Crear archivo: `src/styles/styled.d.ts`

```
import 'styled-components';
import { ThemeType } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
```

4. Estilos Globales y Provider

Debemos envolver la aplicación para que todos los componentes tengan acceso al tema y aplicar los estilos base (reset, fuentes, etc.).

Crear archivo: `src/styles/GlobalStyles.ts`

```
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, sans-serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }
`;
```

5. Configuración en main.tsx o App.tsx

##### inyectamos el ThemeProvider en el punto de entrada de la aplicación

```
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { DashboardPage } from './pages/DashboardPage';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DashboardPage />
    </ThemeProvider>
  );
};
```


## Estructura y nombre para styles

```
src/
└── styles/
    ├── theme.ts            # Fuente de verdad: colores, espaciado, fuentes.
    ├── GlobalStyles.ts     # CSS Reset, fuentes globales y scrollbars.
    ├── styled.d.ts         # Definición de tipos para TypeScript (Theme).
    ├── breakpoints.ts      # Media queries reutilizables (Mobile, Tablet, Desktop).
    └── mixins.ts           # Snippets de CSS reutilizables (Flex center, truncar texto).
```


`theme.ts`:
Centraliza los tokens de diseño.
colors: { primary: '#007' }

`GlobalStyles.ts`:
Estilos que afectan a toda la app.
"box-sizing: border-box, body { ... }"

`styled.d.ts`:
Vincula el theme con el motor de TS.
export interface DefaultTheme extends ThemeType

`breakpoints.ts`:
Define los puntos de corte responsivos.
up: (size) => @media (min-width: ${size})

`mixins.ts`:
Fragmentos de lógica CSS.
"flexCenter, glassmorphism, absoluteFull"


### Implementación de breakpoints.ts y mixins.ts

Para que sea 'DRY', es fundamental:

1. breakpoints.ts:
En lugar de escribir @media manualmente en cada componente
usas constantes:

```
const size = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};
```


2. mixins.ts:
Lógica visual compleja

```
import { css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const textTruncate = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
```


## Archivo breakpoints.ts

```
/**
 * Puntos de corte (breakpoints) estandarizados.
 * 1em = 16px (por defecto)
 */
export const breakpoints = {
  mobileS: '20em',    // 320px
  mobileM: '23.43em', // 375px
  mobileL: '26.56em', // 425px
  tablet: '48em',     // 768px
  laptop: '64em',     // 1024px
  laptopL: '90em',    // 1440px
  desktop: '160em',   // 2560px
};

/**
 * Helpers para usar en Styled Components.
 * Ejemplo: @media ${device.tablet} { ... }
 */
export const device = {
  mobileS: `(min-width: ${breakpoints.mobileS})`,
  mobileM: `(min-width: ${breakpoints.mobileM})`,
  mobileL: `(min-width: ${breakpoints.mobileL})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  laptop: `(min-width: ${breakpoints.laptop})`,
  laptopL: `(min-width: ${breakpoints.laptopL})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
};

// Helper opcional para "Mobile First" (max-width) si fuera necesario
export const deviceMax = {
  mobileL: `(max-width: ${breakpoints.mobileL})`,
  tablet: `(max-width: ${breakpoints.tablet})`,
};
```

Ej uso en componente:

```
// Ejemplo de uso en un componente
import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row; // Pasa a fila en tablets y superiores
  }
`;
```


### Archivo mixins.ts

```
import { css } from 'styled-components';

export const mixins = {
  // 1. El Efecto Estrella: Glassmorphism
  glass: css`
    background: ${({ theme }) => theme.colors.glass};
    backdrop-filter: blur(${({ theme }) => theme.effects.blur});
    -webkit-backdrop-filter: blur(${({ theme }) => theme.effects.blur});
    border: 1px solid ${({ theme }) => theme.colors.glassBorder};
    box-shadow: ${({ theme }) => theme.effects.shadow};
  `,

  // 2. Centrado Perfecto con Flexbox
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  // 3. Distribución Espacial para Items (Ej: Tareas del ToDo)
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  // 4. Truncar Texto (Para nombres de tareas muy largos)
  textTruncate: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,

  // 5. El "Glow" de Electric Blue (Ideal para botones o inputs activos)
  electricGlow: css`
    box-shadow: 0 0 15px 0 oklch(65% 0.22 255 / 40%);
    border-color: ${({ theme }) => theme.colors.primary};
  `,

  // 6. Scrollbar Invisible (Para contenedores que deben scrollear sin ruido visual)
  noScrollbar: css`
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;     /* Firefox */
    &::-webkit-scrollbar {
      display: none;           /* Chrome, Safari and Opera */
    }
  `,

  // 7. Animación Suave de Interactividad
  interactive: css`
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    &:active {
      transform: scale(0.98);
    }
  `
};
```

Ej uso:

```
// Ejemplo de uso en un componente estilizado
import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const TodoCard = styled.div`
  ${mixins.glass}       // Aplica el fondo traslúcido, borde y blur
  ${mixins.interactive} // Aplica la transición y el efecto de clic
  
  padding: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  max-width: 500px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;
```


## Tipo generico y props en styles

### Generico en Global


### Desestructuración múltiple

