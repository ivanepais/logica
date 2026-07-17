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

El Reducer no hace la lógica, lo hace el Dominio
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

1. Llama al Custom Hook `useTasks()`.
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


### !!! Rs lógica:

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



# Atoms css

## Typography.tsx css

##### Aprovechar la prop polimórfica as, usar Transient Props (tienen un $ delante) para que React no se queje de pasar atributos no estándar al DOM

1. Typography.styles.ts

##### lógica visual basada en el theme y los variants.

```
import styled, { css } from 'styled-components';
import { mixins } from '../../../styles/mixins';

export type TypographyVariant = 'title' | 'body' | 'label';

interface StyledProps {
  $variant: TypographyVariant;
}

const variantStyles = {
  title: css`
    font-size: ${({ theme }) => theme.spacing.lg}; /* 24px aprox */
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textPrimary};
    letter-spacing: -0.02em;
  `,
  body: css`
    font-size: ${({ theme }) => theme.spacing.md}; /* 16px */
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.6;
  `,
  label: css`
    font-size: 0.875rem; /* 14px */
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  `,
};

export const StyledTypography = styled.p<StyledProps>`
  /* Aplicamos el estilo según la variante */
  ${({ $variant }) => variantStyles[$variant]}

  /* Ejemplo: Si queremos que el texto nunca rompa el layout */
  ${mixins.textTruncate}
`;
```


2. Componente: Typography.tsx

```
import { StyledTypography, TypographyVariant } from './Typography.styles';

interface TypographyProps {
  variant?: TypographyVariant;
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'label';
}

export const Typography = ({ 
  variant = 'body', 
  children, 
  as = 'p' 
}: TypographyProps) => {
  return (
    <StyledTypography as={as} $variant={variant}>
      {children}
    </StyledTypography>
  );
};
```

Transient Props ($variant):
Al usar el signo $, le decimos a Styled Components: "Usa esta prop para el CSS, pero no la renderices en el HTML final".
Así evitamos que en el navegador veas un <p variant="title">, lo cual es inválido

Polimorfismo Real:
La prop as que pasas a Typography se delega directamente a StyledTypography
Si pasas as="h1", se renderizará un <h1> pero con los estilos que tú hayas definido para la variante

Mantenibilidad:
Si decides que el label debe ser un poco más brillante, lo cambias en el objeto variantStyles y se actualiza en todo el ToDo

Integración de Mixins:
He incluido el mixin textTruncate que creamos antes
Esto es vital en una ToDo App para que, si el usuario escribe una tarea de 300 palabras, no rompa el diseño del componente


### Detalle en el CSS
en Typography.styles.ts estamos usando theme.spacing.lg para el tamaño de la fuente
Lo ideal sería añadir una sección typography en tu theme.ts (con fontSize, fontWeight, etc.). Pero por ahora, usar los tokens de spacing o valores en rem es un gran comienzo

#### Corrección

```
font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
```


## Nuevo theme

```
export const theme = {
  colors: {
    background: 'oklch(18% 0.04 258)',
    glass: 'oklch(100% 0 0 / 8%)',
    glassBorder: 'oklch(100% 0 0 / 15%)',
    primary: 'oklch(65% 0.22 255)',
    primaryHover: 'oklch(70% 0.22 255)',
    textPrimary: 'oklch(98% 0.01 255)',
    textSecondary: 'oklch(75% 0.05 255)',
    success: 'oklch(70% 0.18 145)',
    error: 'oklch(62% 0.22 25)',
    white: 'oklch(100% 0 0)',
  },

  // Tokens específicos de tipografía
  typography: {
    fontFamily: "'Inter', -apple-system, sans-serif",
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      md: '1rem',       // 16px
      lg: '1.5rem',     // 24px
      xl: '2.25rem',    // 36px
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeight: {
      tight: 1.1,
      normal: 1.5,
      relaxed: 1.6,
    }
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },

  borderRadius: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    full: '9999px', // Para Badges y botones redondos
  },

  effects: {
    blur: '12px',
    shadow: '0 8px 32px 0 oklch(0% 0 0 / 30%)',
  },

  // Gestión de capas (Z-Index)
  zIndex: {
    base: 1,
    dropdown: 10,
    sticky: 20,
    modal: 100,
  },

  // Animaciones consistentes
  transitions: {
    default: '0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    fast: '0.1s ease-in-out',
  }
};

export type ThemeType = typeof theme;
```


## Nuevo GlobalStyles

```
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* 1. Reset e Higiene CSS */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 100%;
    scroll-behavior: smooth;
  }

  body {
    /* Usamos los nuevos tokens de tipografía */
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    
    /* Gradientes orgánicos basados en el tono Deep Midnight (258-280) */
    background-image: 
      radial-gradient(at 0% 0%, oklch(25% 0.08 260 / 30%) 0px, transparent 50%),
      radial-gradient(at 100% 100%, oklch(20% 0.12 280 / 20%) 0px, transparent 50%);
    
    min-height: 100vh;
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    display: flex;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.xl};
    overflow-x: hidden;
  }

  /* 2. Títulos Coherentes */
  h1, h2, h3, h4 {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  }

  /* 3. Inputs y Botones Globales */
  input, button, textarea {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background: transparent;
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
    /* Usamos la transición centralizada */
    transition: ${({ theme }) => theme.transitions.default};
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* 4. Estados de Foco (Accesibilidad) */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;
  }

  /* 5. Scrollbar con estilo Glassmorphism */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.glassBorder};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    border: 2px solid ${({ theme }) => theme.colors.background};
    
    &:hover {
      background: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  /* Selección de texto con el color primario */
  ::selection {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }
`;
```


## Testing con styled components

1. No testear la librería, sino el Contrato Visual
##### Testeamos que nuestro componente reaccione correctamente a las props.

Antes: Buscábamos .text-title.
Ahora: Verificamos que si pasamos variant="title", el elemento tenga el font-size y font-weight que definimos en el theme.

2. Evitar los selectores de Clase
Styled Components genera clases aleatorias (como .sc-bdnyZg), buscar por clase en un test es imposible

##### regla: Se busca por Rol de Accesibilidad (screen.getByRole('heading')) o por Texto (screen.getByText()).

##### validación: Se usa el matcher .toHaveStyle() para comprobar que el CSS final sea el correcto.

3. Snapshot Testing (Con moderación)

Los Styled Components se prestan mucho a los Snapshots
Un snapshot guarda una "foto" del código HTML y CSS generado.

Ventaja: Si cambias un color en el mixin de glass, el test te avisará:
"Oye, el CSS del Badge ha cambiado, ¿esto es intencional?".

Riesgo: Pueden volverse ruidosos si cambias cosas pequeñas constantemente

Qué testeamos| Cómo lo hacemos

`Renderizado Base`
"Comprobar que el tag HTML sea el correcto (as=""h1"" → <h1>)."

`Consumo del Tema`
Verificar que los colores OKLCH se apliquen (ej: color: oklch(...)).

`Lógica de Props`
"Si isActive={true}
¿tiene el borde Electric Blue?"

`Mixins`
¿Tiene aplicado el backdrop-filter cuando usamos el mixin glass?



# Implementación

1. De "Dummy" a "Smart":

Debemos sustituir las paginas que tiene datos simulados/locales
Para usar 'useTasks'

2. Conexión Dominio-Categorías:

Con FilterPanel: conectar las Categorías con las Tareas

task.logic.ts, deberías tener una función:
f(tasks,selectedCategories)→filteredTasks

El paso es asegurar que cuando el usuario marca
"Frontend" en el FilterPanel,
el useTasks use esa lógica de dominio
para filtrar la lista que se muestra en el main-content.

3. Persistencia Real (Sync con Storage)

storage.service.ts no debe ser llamado por los componentes.
El paso es integrarlo en el Ciclo de Vida del estado:

Efecto de Carga: Al iniciar el hook, lee del localStorage e inicializa el reducer.

Middleware/Effect: Cada vez que el estado cambie (una tarea se complete o se cree)
el hook debe invocar al servicio para guardar la "foto" actual del estado.
Esto garantiza que si el usuario refresca la página, nada se pierda

4. Storybook (Design System)
Atomic Design, Styled Components y Tests
documentar esto:

Storybook te permitiría ver tus átomos (Badge, Checkbox) y moléculas en aislamiento, probando sus diferentes estados
(glass, normal, disabled) sin necesidad de correr toda la app. Es el "manual de identidad" de tu código.

5. Gestión de Errores y Estados Límite (Edge Cases)

Ahora que la arquitectura es sólida, hay que prepararla para la realidad:

Capa de Servicios: ¿Qué pasa si el localStorage está lleno?
El storage.service debería manejar ese error

UI: Implementar un componente de Error Boundary
o estados de "Lista Vacía" más elaborados
 (Empty States) cuando el filtrado no arroja resultados.

```
graph TD
    A[DashboardPage] -->|Usa| B(useTasks Hook)
    B -->|Despacha| C(Task Reducer)
    C -->|Aplica| D(Domain Logic)
    B -->|Persiste| E(Storage Service)
    A -->|Inyecta Datos| F[FilterPanel]
    A -->|Inyecta Datos| G[TodoList]
```



# Fix UI: Conectar el hook con los componentes

## Ej organismo que conecta con el hook de acciones

1. TodoHeader:

```
import { TodoInput } from '../../molecules/TodoInput/TodoInput';
import { useTasks } from '@/hooks/useTasks';

export const TodoHeader = () => {
  const { add } = useTasks(); // Aquí extraemos la lógica

  return (
    <header>
      <h1>Mis Tareas</h1>
      {/* Aquí inyectamos la acción del hook en el prop de la molécula */}
      <TodoInput onAdd={(text) => add(text)} />
    </header>
  );
};
```

2. FilterPanel:

```
// Ejemplo de cómo se vería el pegamento en un nivel superior
const { stats, filter, setFilter } = useTasks();

return (
  <FilterPanel>
    <FilterItem 
      label="Pendientes" 
      count={stats.pending} 
      isSelected={filter === 'pending'} 
      onToggle={() => setFilter('pending')} 
    />
    <FilterItem 
      label="Completadas" 
      count={stats.completed} 
      isSelected={filter === 'completed'} 
      onToggle={() => setFilter('completed')} 
    />
  </FilterPanel>
);
```


## Ej Template que conecta con el hook de acciones

TodoPage.tsx

```
export const TodoPage = () => {
  // AQUÍ es donde vive el hook, el "único punto de verdad"
  const { tasks, toggle, remove } = useTasks();

  return (
    <MainLayout>
      <TodoHeader /> {/* Este organismo ya lo analizamos */}
      <TodoList 
        todos={tasks} 
        onToggleTodo={toggle} 
        onDeleteTodo={remove} 
      />
    </MainLayout>
  );
};
```


## Ej pagina que conecta con el hook de acciones

1.

```
export const TodoPage = () => {
  const { tasks, add, toggle, remove } = useTasks();

  return (
    <TodoTemplate 
      header={<TodoHeader />} 
      inputSlot={<TodoInput onAdd={add} />}
      listSlot={
        <TodoList 
          todos={tasks} 
          onToggleTodo={toggle} 
          onDeleteTodo={remove} 
        />
      }
    />
  );
};
```

2. Dash

```
export const AppDashboard = () => {
  const { stats, filter, setFilter, tasks, add, toggle, remove } = useTasks();

  return (
    <DashboardTemplate
      header={<GlobalHeader />}
      sidebar={
        <FilterPanel 
          categories={mapStatsToCategories(stats)} 
          selectedIds={[filter]}
          onToggleCategory={setFilter}
        />
      }
    >
      {/* El contenido principal es otro template */}
      <TodoTemplate 
        header={<Typography variant="h1">Mis Tareas</Typography>}
        inputSlot={<TodoInput onAdd={add} />}
        listSlot={<TodoList todos={tasks} onToggleTodo={toggle} onDeleteTodo={remove} />}
      />
    </DashboardTemplate>
  );
};
```



# Conectar los componentes con la entidad

## Caso TodoList: importamos la entidad, le pasamos el array

Deja de usar sus props local

El cambio:

```
import type { Task } from '@/core/task.entity';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Task[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}
```


Componete Completo:

```
import { TodoItem } from '../../molecules/TodoItem/TodoItem';
import { Typography } from '../../atoms/Typography/Typography';
import { ListWrapper, StyledList, EmptyState } from './TodoList.styles';
import type { Task } from '@/core/task.entity';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Task[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export const TodoList = ({ 
  todos, 
  onToggleTodo, 
  onDeleteTodo 
}: TodoListProps) => {
  const hasTodos = todos.length > 0;

  return (
    <ListWrapper>
      {!hasTodos ? (
        <EmptyState>
          <span style={{ fontSize: '3rem' }}>📝</span>
          <Typography variant="h3" color="textSecondary">
            No hay tareas pendientes
          </Typography>
          <Typography variant="body" color="textSecondary">
            ¡Añade algo para empezar el día!
          </Typography>
        </EmptyState>
      ) : (
        <StyledList>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.content}
              completed={todo.isCompleted}
              onToggle={() => onToggleTodo(todo.id)}
              onDelete={() => onDeleteTodo(todo.id)}
            />
          ))}
        </StyledList>
      )}
    </ListWrapper>
  );
};
```


# TodoList: Patrón adaptador

Su propósito en la vida es recibir una lista de objetos de negocio (Task[])
transformarlos en elementos visuales (TodoItem).

`import type { Task } from '@/core/task.entity'; es`
Al usar el tipo real, TypeScript te obligó a ver que la propiedad se llama content y no text.

## Patrón mapping: Mapeo de Propiedades

`text={todo.content}.`
##### adaptando el lenguaje del Núcleo (content) al lenguaje de la UI (text).

```
        <StyledList>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.content}
              completed={todo.isCompleted}
              onToggle={() => onToggleTodo(todo.id)}
              onDelete={() => onDeleteTodo(todo.id)}
            />
          ))}
        </StyledList>
```


## Eliminar interfaz local

```
// Este "Todo" ya no se usa en ningún lado
interface Todo {
  id: string;
  text: string;
  completed: boolean;
}
```

##### Como ya usas Task en TodoListProps
##### Errores que pueden surgir: tarde o temprano alguien la pisará y pensará que debe usar text de nuevo


### Lógica Interna vs. Arquitectura en la Lista

Detalle de implementación como:
`const hasTodos = todos.length > 0;`
especialmente pensando en la fluidez del sistema

No es lógica de arquitectura:
Al Reducer no le importa si la lista está vacía para mostrar un emoji de una libreta (📝).

#### Lógica de UI: Es un Empty State.
Al manejar esto dentro del organismo, mantienes tu TodoPage limpia
La página solo dice: "Aquí tienes las tareas", y el TodoList decide si se ve una lista elegante o un mensaje motivador


## Dispatch espera

Componente sea 100% a prueba de errores:

1. Strict Typing: Ya lo tienes.
Al definir `todos: Task[]`, si mañana cambias el nombre de una propiedad
en task.entity.ts, este archivo se pondrá rojo inmediatamente

2. Identidad de Callbacks: 
##### Contrato claro: pasas (id: string) => void. coincide perfectamente con lo que el dispatch del reducer espera.


## Punto Critico en el códigos

##### En el todos.map, usas key={todo.id}, Al usar un UUID real generado por crypto.randomUUID() en tu task.logic.ts, aseguras de que React no se confunda al reordenar o filtrar tareas
##### algo que suele causar bugs visuales extraños si se usa el índice del array.




# TodoTemplate

# DashboardTemplate


# TodoPage: orquestación

##### El único componente que tiene permiso para "ensuciarse las manos" con todo
##### Conoce el Hook de negocio, conoce los Templates y conoce los Organismos

Cierra el círculo de tu Clean Architecture:

## 1. Mapeo: lo más importante

```
const categories = useMemo(() => [
  { id: 'all', label: 'Todas', count: stats.total },
  // ...
], [stats]);
```

No se adivina. 
FilterPanel no tiene ni idea de qué es stats.total
En la Página, actúas como traductor

Si mañana la API cambia total por countAll
solo cambias esta línea y nada de la UI se rompe.

## 2. Composición de Templates 

##### Template dentro de otro: DashboardTemplate (Estructura global) > TodoTemplate (Estructura de la app).

Permite que tu aplicación sea modular
Si mañana quieres añadir una página de "Estadísticas",
usarías el mismo DashboardTemplate
pero con un StatsTemplate dentro


## Detalle: El Cast as any

En `onToggleCategory={(id) => setFilter(id as any)}`,
usas `as any` porque el FilterPanel dice que:
id es un string, pero setFilter espera un TaskFilter

Para que sea 100% Type-Safe:
cambiar la interfaz en el organismo FilterPanel
(como comentamos antes)
o hacer un type-guard, pero para la velocidad de desarrollo que llevas
ese as any es un "pecado menor" aceptable siempre que sepas por qué está ahí.



# Pautas contratos/orquestadores en componentes ui complejos



# Pautas para lógica de ui



# Pautas par lógica de Arquitectura



# Debugg de archivo ts

Archivos individuales

1. tsx o ts-node
En lugar de compilar a JS y luego ejecutar con Node
puedes usar ejecutores directos. tsx es actualmente el más rápido y ligero
Instalación: npm install -D tsx

Ejecución:
`npx tsx src/core/task.logic.ts`

Ej: Puedes añadir un `console.log(createTask("Prueba"))` al final de tu archivo de lógica y ejecutarlo para ver si el UUID y las fechas se generan bien.


2. Unit Teseting

Ej:

```
// task.logic.test.ts
import { createTask } from './task.logic';
import { describe, it, expect } from 'vitest';

describe('Logic: createTask', () => {
  it('should create a task with a valid ID', () => {
    const task = createTask('Debuggear');
    expect(task.id).toBeDefined();
  });
});
```

Ejecutas solo ese test con:
`npx vitest task.logic.test.ts`.


3. Launch Config

VS Code (o similar), puedes crear un archivo
.vscode/launch.json

para darle al F5 y que se detenga en tus puntos de interrupción (breakpoints) en un solo archivo


Herramientas:

`Source Maps`:
Vinculación TS-JS
Permite que el navegador te muestre el error en el archivo .ts original,
no en el JS compilado.

`Vitest / Jest`:
Tests Unitarios
Aísla la lógica de la UI.
Si el test pasa, el bug está en el componente, no en la lógica."

`React DevTools`:
Inspección de Estado,
Para ver cómo cambian las tasks en el hook useTasks en tiempo real.

`debug (npm package)`:
Logging Selectivo
"En lugar de console.log, usas namespaces.
Puedes encender/apagar logs de ""base de datos""
o "UI" con una variable de entorno."


Prácticas:

`debugger`:
En lugar de llenar el código de logs
escribe la palabra debugger donde sospeches que está el fallo
El navegador (o el IDE) detendrá la ejecución ahí y podrás inspeccionar todas las variables

`Source Maps activados`:
Asegúrate de que en tu `tsconfig.json` tengas
`"sourceMap": true`

`Depuración de Tipos`:
A veces el bug es de lógica de tipos
Usa `Type Guards` como `if (typeof value === 'string')`
TypeScript atrapará errores antes de que el código corra

`Error Boundaries (React)`:
Envuelve tus organismos en un `ErrorBoundary`
Si un TodoItem rompe la app
el componente capturará el error
te dirá exactamente qué falló sin que la pantalla se quede en blanco.

`Log Inteligente`:
console.log, objetos literales para saber qué estás viendo:

```
// Mal: console.log(task); // ¿Qué tarea es esta?
// Bien: console.log({ taskAtCreation: task }); // Muestra el nombre de la variable
```



# Cambio FilterPanel: posibilidades de expansion en su campo de busqueda de categorias

Organismo escalable:
hoy es un simple filtro, mañana es un sistema de etiquetas o carpetas

Expansión:

1. Buscador Condicional
Para que no estorbe cuando solo tienes 3 categorías, lo primero es hacerlo opcional
Esto limpia la UI pero mantiene la funcionalidad lista para cuando la necesites

```
interface FilterPanelProps {
  categories: Category[];
  selectedIds: string[];
  onToggleCategory: (id: string) => void;
  title?: string;
  showSearch?: boolean; // 👈 Propiedad nueva
}

// En el JSX:
{showSearch && categories.length > 5 && (
  <InputGroup ... />
)}
```

2. Expansión a "Proyectos" o "Etiquetas" (Tags)
Si decides que el usuario pueda crear sus propias categorías (ej: "Trabajo", "Personal", "Gimnasio", "Proyecto React"),

el FilterPanel se convierte en un gestor de etiquetas.

Búsqueda Rápida: Si el usuario tiene 20 etiquetas, el buscador interno cobra sentido total
Gestión: Podrías añadir un pequeño botón de + al lado del título "Categorías" para crear nuevas sobre la marcha

3. Agrupamiento y Jerarquías (Faceted Search)
Puedes expandir el contrato de Category para admitir grupos
Imagina que quieres filtrar por Prioridad y por Proyecto al mismo tiempo:

```
interface Category {
  id: string;
  label: string;
  count: number;
  group?: 'status' | 'project' | 'priority'; // 👈 Categorización por grupos
}
```


4. Selección Múltiple y "Modo Operador"
Actualmente filtras de uno en uno.
Una expansión lógica sería permitir al usuario seleccionar varias categorías
categorías (ej: "Ver Pendientes" Y "Ver Trabajo").

Como ya usas selectedIds (en plural), tu arquitectura ya está preparada para esto
Solo tendrías que cambiar la lógica del useTasks para que el filtro sea un array en lugar de un string único.

5. Acciones Rápidas en el Panel
A medida que el panel crezca, podrías añadir "Quick Actions"
que aparezcan al pasar el ratón (hover) sobre un FilterItem:

Un icono de lápiz para renombrar la categoría.
Un icono de tacho para eliminar una etiqueta creada por el usuario.


### De "Simple Filtro" a "Navegador de Datos"
Al separar el buscador de tareas, que busca en el contenido
del buscador de categorías (que busca en los metadatos),
has creado un sistema de Búsqueda Facetada.

En herramientas como Jira o Notion, el sidebar es exactamente esto
un FilterPanel supervitaminado que permite navegar por estructuras de datos complejas sin perderse.


## Código Original

```tsx
import { useState, useId } from 'react';
import { FilterItem } from '../../molecules/FilterItem/FilterItem';
import { InputGroup } from '../../molecules/InputGroup/InputGroup';
import { 
  PanelContainer, 
  PanelHeader, 
  PanelContent, 
  CategoryList, 
  EmptyState 
} from './FilterPanel.styles';

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
  const titleId = useId();

  const filteredCategories = categories.filter((cat) =>
    cat.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PanelContainer aria-labelledby={titleId}>
      <PanelHeader>
        <h2 id={titleId}>{title}</h2>
        <InputGroup
          label="Filtrar por nombre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar categorías..."
          maxLength={30}
        />
      </PanelHeader>

      <PanelContent>
        <CategoryList aria-label="Lista de categorías">
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
        </CategoryList>

        {filteredCategories.length === 0 && (
          <EmptyState role="status">
            No hay coincidencias para "{searchTerm}"
          </EmptyState>
        )}
      </PanelContent>
    </PanelContainer>
  );
};
```



# Search Bar

Código:

```
import { Input } from '../../atoms/Input/Input';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
`;

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <SearchContainer>
      <Input
        placeholder="🔍 Buscar tarea por nombre..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
      />
    </SearchContainer>
  );
}; 
```

Su mayor virtud es su ignorancia
No conoce las tareas, no conoce el filtro y no sabe qué es un reducer.

1. Molécula "Presentacional" Pura:
Al mantenerla aislada de la lógica de filtrado
has conseguido que el componente sea 100% predecible.

No importa el `Task`:
##### Solo le interesa un string y una función para avisar que ese string cambió.

Separación de responsabilidades:
La SearchBar se encarga de la captura del interés del usuario

mientras que el hook `useTasks` se encarga de la ejecución (el filtrado real mediante el useMemo)


2. Flujo de Datos y "State Lifting"
Elevación de Estado

la SearchBar es un excelente ejemplo de cómo el estado fluye hacia arriba.

1. Input: El usuario escribe "fix".
2. Evento: La SearchBar ejecuta onChange("fix").
3. Hook (useTasks): El estado searchQuery se actualiza.
4. Cálculo: El useMemo dentro del hook detecta el cambio
filtra el array de tasks y devuelve solo las coincidencias.
5. Render: La lista se actualiza mágicamente


##### 3. Implementación interna: mejor así que pasarle el evento completo
usado `onChange={(e) => onChange(e.target.value)}`.
al extraer el value dentro de la molécula, blindas a los componentes superiores

Si mañana decides que la búsqueda se activa con un botón o que el input viene de una librería externa
como Material UI o Radix, solo cambias la SearchBar

##### El contrato del padre (onChange: (value: string) => void) se mantiene intacto.

#### 4. Debounce (opcional)
las búsquedas en tiempo real pueden ser estresantes si el array de datos es enorme
Como tu lógica de filtrado está en un useMemo dentro del hook, React solo trabajará cuando sea estrictamente necesario

##### Si en algún momento notas que la escritura va "lenta", podrías aplicar un Debounce (un retraso de 300ms) antes de actualizar el estado


### Moleculas

Has construido un set de herramientas atómicas muy sólido:

##### Agnósticas: No dependen del negocio.
##### Consistentes: Todas siguen el mismo patrón de comunicación.
##### Testeables: Puedes probar cada una por separado sin montar todo el sistema de tareas
    

Flujo de Datos Final (Data Flow)
1. Acción: El usuario escribe "fix" en la SearchBar.
2. Subida: Se ejecuta setSearchQuery en useTasks.
3. Proceso: El useMemo del hook filtra el array de tasks original.
4. Bajada: La página recibe la nueva lista filtrada y se la pasa a TodoList.
5. Render: El TodoList mapea las tareas a TodoItem y las vemos en pantalla



# Modificación del hook useTasks

##### Para buscar una tarea específica por su nombre ("fix app"), necesitamos un Filtro de Contenido

El hook debe ser el dueño del estado de búsqueda para que la lista filtrada se actualice automáticamente


## Opción 1: busqueda de categoria y texto

```
// Dentro de useTasks.ts
import { useState, useMemo } from 'react';

export const useTasks = () => {
  // ... estados anteriores ...
  const [searchQuery, setSearchQuery] = useState(''); // Nuevo estado

  const filteredTasks = useMemo(() => {
    // 1. Primero filtramos por categoría (all, pending, completed)
    let result = state.tasks;
    if (state.filter === 'pending') result = result.filter(t => !t.isCompleted);
    if (state.filter === 'completed') result = result.filter(t => t.isCompleted);

    // 2. Luego filtramos por el texto de búsqueda
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(t => t.content.toLowerCase().includes(query));
    }

    return result;
  }, [state.tasks, state.filter, searchQuery]);

  return {
    // ... acciones anteriores ...
    searchQuery,
    setSearchQuery,
    tasks: filteredTasks
  };
};
```

### Componente SearchBar

Reutilizaremos tu átomo de Input para crear un componente de búsqueda con un icono.

```
import { Input } from '../../atoms/Input/Input';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
`;

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <SearchContainer>
      <Input
        placeholder="🔍 Buscar tarea por nombre..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
      />
    </SearchContainer>
  );
};
```


### Integración TodoPage.tsx

Lo ideal para una buena UX es ponerlo justo encima de la lista o en el encabezado del contenido principal
separándolo de las categorías del Sidebar.

```
// En TodoPage.tsx
export const TodoPage = () => {
  const { 
    tasks, searchQuery, setSearchQuery, // ... resto del hook
  } = useTasks();

  return (
    <DashboardTemplate
      header={<Typography variant="h2" color="white">Liquid Task</Typography>}
      sidebar={/* ... tu FilterPanel de categorías ... */}
    >
      <TodoTemplate
        header={
          <>
            <Typography variant="h1">
              {filter === 'all' ? 'Mis Tareas' : '...'}
            </Typography>
            {/* ✅ Insertamos la búsqueda aquí */}
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </>
        }
        inputSlot={<TodoInput onAdd={add} />}
        listSlot={<TodoList todos={tasks} onToggleTodo={toggle} onDeleteTodo={remove} />}
      />
    </DashboardTemplate>
  );
};
```

Separación de Preocupaciones
Sidebar maneja el "Estado Global" de la lista (qué tipo de tareas ves),
mientras que el SearchBar maneja la "Refinación" (qué tarea específica buscas).

Rendimiento: Al usar useMemo en el hook, el filtrado solo se recalcula cuando escribes o cambias de categoría

UX Clara: El usuario entiende que el Sidebar son "carpetas"
el input central es para "buscar dentro de la carpeta".


debug: Si al implementar esto sigues viendo "No hay coincidencias", recuerda limpiar el localStorage una última vez
Es posible que tengas tareas viejas con la propiedad text en lugar de content que están rompiendo el .includes().


## Opción 2: Reemplazo de componentes

Si los botones de categorías ya cumplen su función
Mover el SearchBar al Sidebar
usas el lateral para "buscar y navegar" y el centro para "gestionar".

1. useTasks.ts
hook exponga el estado de búsqueda y que filteredTasks use ese valor.

```
// En useTasks.ts
export const useTasks = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // ... resto del estado ...

  const filteredTasks = useMemo(() => {
    let result = state.tasks;
    
    // Filtro por Categoría
    if (state.filter === 'pending') result = result.filter(t => !t.isCompleted);
    if (state.filter === 'completed') result = result.filter(t => t.isCompleted);

    // Filtro por Nombre (SearchBar)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(t => t.content.toLowerCase().includes(q));
    }
    return result;
  }, [state.tasks, state.filter, searchQuery]);

  return {
    // ...
    searchQuery,
    setSearchQuery,
    tasks: filteredTasks,
    // ...
  };
};
```


2. Modificar el Sidebar en TodoPage.tsx

Modificar el Sidebar en TodoPage.tsx
Quitaremos la lógica de búsqueda interna del FilterPanel (si la tenía)
pondremos nuestro nuevo SearchBar arriba.

```
export const TodoPage = () => {
  const { 
    tasks, filter, setFilter, stats, clearCompleted,
    searchQuery, setSearchQuery // Traemos el nuevo estado
  } = useTasks();

  const categories = useMemo(() => [
    { id: 'all', label: 'Todas', count: stats.total },
    { id: 'pending', label: 'Pendientes', count: stats.pending },
    { id: 'completed', label: 'Completadas', count: stats.completed },
  ], [stats]);

  return (
    <DashboardTemplate
      header={<Typography variant="h2" color="white">Liquid Task</Typography>}
      sidebar={
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '1rem' }}>
          
          {/* ✅ REEMPLAZO: El SearchBar ahora vive aquí */}
          <SearchBar 
            value={searchQuery} 
            onChange={setSearchQuery} 
          />

          {/* Los botones de categorías (ahora sin buscador interno) */}
          <FilterPanel 
            title="Vistas"
            categories={categories}
            selectedIds={[filter]}
            onToggleCategory={(id) => setFilter(id as any)}
          />
          
          {stats.completed > 0 && (
            <Button variant="secondary" onClick={clearCompleted}>
              Limpiar completadas
            </Button>
          )}
        </div>
      }
    >
      <TodoTemplate
        header={
          <Typography variant="h1">
            {filter === 'all' ? 'Mis Tareas' : filter === 'pending' ? 'Pendientes' : 'Completadas'}
          </Typography>
        }
        inputSlot={<TodoInput onAdd={add} />}
        listSlot={<TodoList todos={tasks} onToggleTodo={toggle} onDeleteTodo={remove} />}
      />
    </DashboardTemplate>
  );
};
```

3. Ajuste en SearchBar.tsx
Para que visualmente encaje en el sidebar, asegúrate de que el componente no sea demasiado alto
que el icono de lupa esté bien alineado

`Contexto: Ahora`, cuando el usuario escribe "fix"
la lista central de tareas se actualiza en tiempo real.

`Consistencia`: El Sidebar se convierte en tu "Centro de Control".
Filtras el qué (categoría) y el cuál (nombre) desde el mismo lugar.

`Codigo`: El componente FilterPanel ahora solo se encarga de renderizar la lista de categorías
cumpliendo con el principio de responsabilidad única.



## Opción 3: agregar busqueda (general) y mantener filtrado general




# Arq ante cambios

`task.logic.ts` (El Dominio):
Contiene las reglas puras (cómo se crea una tarea, cómo se valida).
No sabe nada de React ni de estados.

`task.reducer.ts` (El Orquestador de Estado):
##### Es el unico que se 'ensucia' con la lógica para transformar el estado
##### importa TaskLogic porque necesita ejecutar createTask o toggleStatus

`useTasks.ts` (fachada/hook):
Su único trabajo es exponer una API limpia a los componentes
Solo necesita saber qué acciones existen (dispatch),
no cómo se ejecutan internamente.


## Contrato: los tipos

`useTasks` Mecesita el Contrato (los tipos) `task.entity.ts` para que ts ayude
el hook debe saber que lo que devuelve es un `Task[]`
y que el filtro es un TaskFilter
Pero no necesita saber cómo se fabrica una tarea


## Análisis de Dependencias: Flujo de "Conocimiento"

### Visualiza tu app en capas: Las capas externas pueden conocer a las internas, pero no al revés

##### 1. Capa de Entidad (task.entity.ts): Todos la conocen
Ella no conoce a nadie.

##### 2. Capa de Lógica (task.logic.ts): Conoce a la Entidad. Es "funcional" y pura.

##### 3. Capa de Almacenamiento/Estado (reducer, storage): Conocen la Lógica y la Entidad

##### 4. Capa de Interfaz (useTasks, componentes): Solo deberían conocer la Entidad (para los tipos) y el Hook


### Contratos de propiedad estrictos

TodoList estaba usando su propia implementación interna
##### Se soluciona con Contratos de Propiedades Estrictos: Para que tus componentes de UI hablen el mismo idioma que tu lógica


#### Analisis de componentes

##### 1. Atoms (Button, Checkbox): Genéricos
##### No deben saber qué es una Task. Reciben checked, onClick, label."

##### 2. Molecules (TodoItem): Adaptadores.
##### Aquí es donde traduces: text={task.content}.

##### 3. Organisms (TodoList): Consumidores de Entidad.
##### Deben pedir explícitamente tasks: Task[].

Ej: TodoList.tsx
en lugar de definir una interfaz Todo local
exporta la interfaz del componente usando el tipo real

```
// TodoList.tsx
import type { Task } from '@/core/task.entity';

interface TodoListProps {
  todos: Task[]; // Si intentas pasar algo que no sea una Task real, TS chillará.
  onToggleTodo: (id: string) => void;
  // ...
}
```

### Rendimiento: calculos de re renderizado

En tu useTasks.ts, calcula stats en cada renderizado

```
const stats = {
  total: state.tasks.length,
  pending: state.tasks.filter(t => !t.isCompleted).length,
  completed: state.tasks.filter(t => t.isCompleted).length
};
```

cada vez que escribes en el SearchBar
esto recorre el array de tareas 2 veces adicionales


#### Solución: usar useMemo

Que solo dependa de `state.tasks`.

```
const stats = useMemo(() => ({
  total: state.tasks.length,
  pending: state.tasks.filter(t => !t.isCompleted).length,
  completed: state.tasks.filter(t => t.isCompleted).length
}), [state.tasks]);
```


# Lógica de Negocio (task.logic) vs Lógica de UI (comportamiento visual)

Logica de UI:
Implementaciones internas que no esté en la arquitectura


## 1. FilterItem: Agnóstico al Dominio

##### No sabe qué es una Task: Solo sabe que recibe un label y un count.

##### Reutilizable: podrías usar este mismo componente para filtrar "Categorías de productos" o "Emails" y funcionaría igual.

##### Cumple con la 'Identidad': La "identidad" de tu arquitectura la aporta el Organismo o la Página que inyecta los datos.

##### Cuanto más abajo estés en el Atomic Design (Átomos y Moléculas), menos deben saber de tu entity.ts.

##### Deben ser "tontos" y recibir tipos primitivos (string, number, boolean).


### Lógica de UI vs. Lógica de Negocio:

A veces un componente necesita lógica que no pertenece a task.logic.ts.

Imagina que quieres que el `Badge` haga una pequeña animación cuando el count aumente
Esa lógica de "cómo animar" no tiene nada que ver con tu arquitectura de tareas
##### vive dentro de la molécula o en un hook local de UI (ej. useSpring).

#### Lógica de Negocio (Arquitectura): relacionada al dominio/negocio

##### Saber si una tarea está completada o no. Eso nunca debe decidirlo el componente, debe venir procesado desde el reducer o el logic.ts.

Ej: Flujo de conocimiento

Nivel | Conoce Task o TaskFilter? | Responsabilidad

`Átomos (Badge, Checkbox)`:
NO
Solo estilos y funcionalidad base.

`Moléculas (FilterItem)`:
NO
Combinar átomos
Recibe label
 no task.status.

##### `Organismos (FilterPanel)`: OPCIONAL. Aquí puedes empezar a mapear.
##### Puede recibir un array de categories ya formateado.

`Página (TodoPage)`:
SÍ
Es el "pegamento".
Conecta el useTasks (Arquitectura) con los componentes (UI)."


### Mapeo de Page y FilterItem

```
// En la página (El traductor)
const categories = useMemo(() => [
  { id: 'all', label: 'Todas', count: stats.total }, // Mapeamos 'total' a 'count'
  { id: 'pending', label: 'Pendientes', count: stats.pending },
], [stats]);

// ... en el render ...
<FilterPanel>
  {categories.map(cat => (
    <FilterItem 
       key={cat.id} 
       label={cat.label} 
       count={cat.count} // FilterItem recibe un número, no sabe de dónde viene
    />
  ))}
</FilterPanel>
```

##### El hecho de que use isSelected en lugar de algo como isTaskFilterSelected es lo que permite que tu UI sea flexible


### Implementación interna (lógica UI) que podría fallar

Quizás una validación visual
si el count es 0, podrías querer que el FilterItem se vea más opaco
Eso es Lógica de UI y podrías ponerlo directamente en los estilos de la molécula:

```
// FilterItem.styles.ts
export const FilterContainer = styled.div<{ $disabled?: boolean }>`
  opacity: ${props => props.$disabled ? 0.5 : 1};
  cursor: pointer;
  // ...
`;
```


## 2. InputGroup

```
import { useId } from 'react';
import { Badge } from '../../atoms/Badge/Badge';

import { 
  GroupContainer, 
  GroupHeader, 
  StyledLabel, 
  StyledInput 
} from './InputGroup.styles';

interface InputGroupProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  placeholder?: string;
  disabled?: boolean;
}

export const InputGroup = ({ 
  label, 
  value, 
  onChange, 
  maxLength = 100, 
  placeholder,
  disabled = false
}: InputGroupProps) => {
  const inputId = useId();
  const remaining = maxLength - value.length;

  return (
    <GroupContainer>
      <GroupHeader>
        <StyledLabel htmlFor={inputId}>
          {label}
        </StyledLabel>
        {/* Mostramos el contador solo si el usuario ha empezado a escribir */}
        {value.length > 0 && (
          <Badge 
            count={remaining} 
            overflowCount={maxLength} 
          />
        )}
      </GroupHeader>
      
      <StyledInput
        id={inputId}
        type="text"
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        placeholder={placeholder}
        disabled={disabled}
      />
    </GroupContainer>
  );
}; 
```

##### Si hubiese conocido useTask o Task, se crea acoplamiento

InputGroup es una molécula de propósito general

Como parte del SearchBar (para filtrar).
Como parte del TodoInput (para crear tareas).

Si InputGroup importara useTasks, ¿cómo sabría si debe llamar a setSearchQuery o a add?
Tendrías que llenar el componente de ifs y se volvería un caos.


Lógica de UI vs. Lógica de Negocio
`const remaining = maxLength - value.length;`

Lógica de UI pura
##### A la arquitectura le importa cuántos caracteres quedan? No
Al reducer solo le importa el texto final

##### ¿Al usuario le importa? Sí, para no pasarse del límite.

mantener esta lógica dentro de la molécula, la arquitectura queda limpia
el componente es inteligente por sí mismo sin saber nada de "tareas".


#### Arquitectura:

##### Entidad/Lógica: Define que una tarea tiene un content
##### useTasks: Gestiona el estado de ese content.
##### Página/Organismo: Hace de puente. Toma el value del hook y se lo pasa a InputGroup.
##### Simplemente renderiza y avisa cuando hay un cambio.


##### useId: asegurar que el label y el input están vinculados correctamente mediante un ID único generado por React es una práctica de accesibilidad (A11y) impecable



## TodoInput: portal de entrada de datos a tu sistema

##### donde el mundo exterior (el teclado del usuario) se encuentra con tu arquitectura.

##### No debería conocer la arquitectura. si le permites importar createTask o useTasks, rompes el patrón de Componentes Presentacionales.


"Borrador" (Draft State)

##### TodoInput gestiona su propio useState, Este estado no es parte de tu arquitectura de tareas, es un estado efímero de la interfaz.
##### A tu reducer no le importa si el usuario escribió "Comprar pa", borró, y luego escribió "Comprar pan".
##### Solo le importa el resultado final cuando se pulsa "Añadir".

Al mantener el taskText aquí, evitas renderizados innecesarios en toda la aplicación mientras el usuario escribe


### Validación de UI vs. Validación de Negocio

Tienes un taskText.trim() en la molécula para deshabilitar el botón:
`disabled={!taskText.trim()}`

Y tienes un trimmedContent en tu task.logic.ts.
#### Redundancia necesaria

##### Validación de UI (TodoInput): Su objetivo es la Experiencia de Usuario (UX).
Evita que el usuario haga clic en un botón que no hará nada.

##### Validación de Dominio (task.logic.ts): Su objetivo es la Integridad de los Datos
Asegura que, sin importar desde dónde se cree una tarea (un formulario, una carga masiva, una API), nunca entre basura al sistema.


Acoplamiento: Identidad Task

Si TodoInput conociera la entidad Task, podrías tener la tentación de hacer esto:

```
// ❌ MALA PRÁCTICA (Acoplamiento)
const newTask = createTask(taskText); 
onAdd(newTask);
```

TodoInput ahora depende de cómo se construye una tarea
Si mañana decides que las tareas necesitan una "categoría" obligatoria al crearse, tendrías que romper esta molécula.

##### Como lo tienes ahora (pasando solo el string): La molécula es invencible
##### dice: "Oye, quien sea que me esté escuchando, aquí tienes este texto que el usuario envió".


Uso de `e.preventDefault()`:
los refrescos de página accidentales por un submit no controlado son especialmente molestos porque obligan a recargar todo el bundle de JS y el estado de memoria


#### Regla de oro para Insumos de Datos: El componente recolecta, el Hook procesa, la Lógica valida.



## TodoItem

```
import { Checkbox } from '../../atoms/Checkbox/Checkbox';
import { Typography } from '../../atoms/Typography/Typography';
import { IconButton } from '../../atoms/IconButton/IconButton';

import { 
  ItemContainer, 
  ContentWrapper, 
  TextContainer 
} from './TodoItem.styles';

interface TodoItemProps {
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

export const TodoItem = ({ 
  text, 
  completed, 
  onToggle, 
  onDelete 
}: TodoItemProps) => {

  return (
    <ItemContainer $isCompleted={completed}>
      <ContentWrapper>
        <Checkbox 
          checked={completed} 
          onChange={onToggle} 
          aria-label={completed ? "Marcar como pendiente" : "Marcar como completada"}
        />

        <TextContainer $isCompleted={completed}>
          <Typography 
            variant="body" 
            color={completed ? 'textSecondary' : 'textPrimary'}
          >
            {text}
          </Typography>
        </TextContainer>
      </ContentWrapper>

      <IconButton 
        icon="🗑️" // Aquí luego pondremos un SVG real
        label="Eliminar tarea"
        onClick={onDelete}
      />
    </ItemContainer>
  );
};

```


##### Aunque es la representación visual de una tarea, no debe conocer la entidad Task.

##### Si miramos sus props, descompuesto la entidad en tipos primitivos (text, completed).

1. Principio de Segregación de Interfaces (ISP)
Si le pasaras el objeto task completo como prop, estarías obligando a TodoItem a depender de propiedades que no usa (como id, createdAt o updatedAt). Al
Al pedir solo lo que necesita para pintar, el componente es más ligero y fácil de testear.


2. Error de input

##### Si el componente dependiera de Task, cualquier cambio en el nombre de la propiedad en el Core rompería la UI.

Al usar un mapeo intermedio (en el Organismo o Página), TodoItem se vuelve inmune
Si mañana content pasa a llamarse description, solo cambias una línea en el padre, y este componente ni se entera.


3. "Lógica Interna" vs "Lógica de Arquitectura"
Lógica de UI que no pertenece a tu task.logic.ts:

Color dinámico: Decidir que el color sea textSecondary si está completada es una decisión puramente estética

Aria-labels: El texto del lector de pantalla cambia según el estado. Esto es accesibilidad, no reglas de negocio


4. la Prop text vs children
Actualmente pasas el contenido como una prop text
pero si en el futuro quisieras que las tareas permitieran negritas, enlaces o iconos inline, podrías cambiarlo a children: React.ReactNode.

Al ser una molécula que se repite muchas veces en una lista, es vital que sea así de simple
Si este componente tuviera lógica pesada o importara hooks globales, cada vez que marcaras una tarea como completada
el motor de renderizado de React tendría que procesar mucha más información de la necesaria, afectando la latencia de la interfaz.


### Diseño de TodoItem:

Recibe: Datos primitivos y callbacks.
Gestiona: Nada (es stateless).
Emite: Eventos hacia arriba (onToggle, onDelete).


## SearchBar

```
import { Input } from '../../atoms/Input/Input';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
`;

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {

  return (
    <SearchContainer>
      <Input
        placeholder="🔍 Buscar tarea por nombre..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
      />
    </SearchContainer>
  );
}; 
```

Virtud es su ignorancia.
No conoce las tareas, no conoce el filtro y no sabe qué es un reducer

1. Presentacional Pura
Al mantenerla aislada de la lógica de filtrado, has conseguido que el componente sea 100% predecible

##### No importa el Task: Solo le interesa un string y una función para avisar que ese string cambió.

##### Separación de responsabilidades: La SearchBar se encarga de la captura del interés del usuario

##### mientras que el hook useTasks se encarga de la ejecución (el filtrado real mediante el useMemo).


2. Flujo de Datos y "State Lifting" (Elevación de Estado)
ejemplo de cómo el estado fluye hacia arriba.

Input: El usuario escribe "fix".
Evento: La SearchBar ejecuta onChange("fix").
Hook (useTasks): El estado searchQuery se actualiza.
Cálculo: El useMemo dentro del hook detecta el cambio, filtra el array de tasks y devuelve solo las coincidencias.
Render: La lista se actualiza mágicamente


3. Implementación interna vs. Arquitectura
Usando onChange={(e) => onChange(e.target.value)}.

##### Mejor así que pasarle el evento completo
Porque al extraer el value dentro de la molécula, blindas a los componentes superiores
Si mañana decides que la búsqueda se activa con un botón o que el input viene de una librería externa
(como Material UI o Radix), solo cambias la SearchBar
El contrato del padre (onChange: (value: string) => void) se mantiene intacto.



## FilterPanel

```
import { useState, useId } from 'react';
import { FilterItem } from '../../molecules/FilterItem/FilterItem';
import { InputGroup } from '../../molecules/InputGroup/InputGroup';

import { 

  PanelContainer, 
  PanelHeader, 
  PanelContent, 
  CategoryList, 
  EmptyState 
} from './FilterPanel.styles';

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
  const titleId = useId();

  const filteredCategories = categories.filter((cat) =>
    cat.label.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <PanelContainer aria-labelledby={titleId}>
      <PanelHeader>
        <h2 id={titleId}>{title}</h2>
        <InputGroup
          label="Filtrar por nombre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar categorías..."
          maxLength={30}
        />
      </PanelHeader>

      <PanelContent>
        <CategoryList aria-label="Lista de categorías">
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
        </CategoryList>

        {filteredCategories.length === 0 && (
        
          <EmptyState role="status">
            No hay coincidencias para "{searchTerm}"
          </EmptyState>
        )}
      </PanelContent>
    </PanelContainer>
  );
}; 
```

##### Donde la Arquitectura de Dominio y la Estructura de la UI se encuetran


1. Responsabilidades
búsqueda interna de categorías

Lógica de UI: El searchTerm que vive aquí adentro solo sirve para filtrar visualmente si ves el botón de "Pendientes" o el de "Completadas".

El Error de Concepto: Cuando intentabas buscar una tarea (ej. "fix app"), lo hacías en este input
##### Pero como "fix app" no es el nombre de una categoría, el filteredCategories quedaba vacío y te lanzaba el EmptyState.


2. Conocer arquitectura:

##### No directamente. Sin embargo, como es un Organismo, ya empieza a definir un contrato de datos más complejo que una molécula

Ej:

```
interface Category {
  id: string; // Aquí inyectamos el TaskFilter ('all' | 'pending' | 'completed')
  label: string;
  count: number;
}
```

#### Mapeo de Tipos: En la TodoPage, tú conviertes el tipo TaskFilter en este id de string
##### El FilterPanel no sabe que ese ID disparará un cambio en el reducer
##### solo sabe que cuando haces clic, debe avisar al padre.


#### Orquestación de moleculas

Molécula 1: InputGroup (para el buscador interno).
Molécula 2: FilterItem (repetido en una lista)

##### Necesita implementación interna fuera de la arquitectura? SÍ. El searchTerm y el filteredCategories son lógica puramente interna del panel
##### La arquitectura (tu useTasks) no tiene por qué saber si el usuario está filtrando visualmente los botones del sidebar. Eso es Estado de UI Local


#### Decisión

Si decidimos que el buscador de tareas real debe ir en el sidebar pero fuera de este panel
(para que no filtre las categorías sino las tareas)
este componente ahora tiene dos caminos

1. Simplificación: Si solo vas a tener 3 categorías fijas ("Todas", "Pendientes", "Completadas"), el buscador interno (InputGroup) sobra
No necesitas filtrar una lista de solo 3 elementos.

2. Escalabilidad: Si en el futuro permites al usuario crear "Categorías" o "Proyectos" (como carpetas),
Escalabilidad: Si en el futuro permites al usuario crear "Categorías" o "Proyectos" (como carpetas),


#### Blindaje de Tipos

Para evitar que nos pase lo de text vs content,
##### lo ideal en los Organismos es usar tipos compartidos pero desacoplados

para que el id de la categoría sea seguro, podrías hacer:

```
import type { TaskFilter } from '@/core/task.entity';

interface Category {
  id: TaskFilter; // ✅ Ahora es imposible pasarle un ID que el reducer no entienda
  label: string;
  count: number;
}
```



## TodoList

```
import { TodoItem } from '../../molecules/TodoItem/TodoItem';
import { Typography } from '../../atoms/Typography/Typography';
import { ListWrapper, StyledList, EmptyState } from './TodoList.styles';
import type { Task } from '@/core/task.entity';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Task[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export const TodoList = ({ 
  todos, 
  onToggleTodo, 
  onDeleteTodo 

}: TodoListProps) => {

  const hasTodos = todos.length > 0;

  return (
    <ListWrapper>
      {!hasTodos ? (
        <EmptyState>
          <span style={{ fontSize: '3rem' }}>📝</span>
          <Typography variant="h3" color="textSecondary">
            No hay tareas pendientes
          </Typography>
          <Typography variant="body" color="textSecondary">
            ¡Añade algo para empezar el día!
          </Typography>
        </EmptyState>
      ) : (
        <StyledList>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.content}
              completed={todo.isCompleted}
              onToggle={() => onToggleTodo(todo.id)}
              onDelete={() => onDeleteTodo(todo.id)}
            />
          ))}
        </StyledList>
      )}
    </ListWrapper>
  );
}; 
```


##### Actúa como traductor/adaptador de la arquitectura 

1. Adaptador
TodoList SÍ debe conocer la entidad Task
##### Su propósito es recibir una lista de objetos de negocio (Task[])
##### y transformarlos en elementos visuales (TodoItem).

Importar la Entidad: import type { Task } from '@/core/task.entity'; es
Al usar el tipo real, TypeScript te obligó a ver que la propiedad se llama content y no text.

##### Mapeo de Propiedades: `text={todo.content}.`. Estás adaptando el lenguaje del Núcleo (content) al lenguaje de la UI (text).


##### Eliminar interface local para tareas: Como ya usas Task en TodoListProps

```
// Este "Todo" ya no se usa en ningún lado
interface Todo {
  id: string;
  text: string;
  completed: boolean;
}
```

tarde o temprano alguien la pisará y pensará que debe usar text de nuevo.


### Lógica Interna vs. Arquitectura en la Lista

`const hasTodos = todos.length > 0;`

No es lógica de arquitectura:
Al Reducer no le importa si la lista está vacía para mostrar un emoji de una libreta

Es lógica de UI: Es un Empty State.

##### La página solo dice: "Aquí tienes las tareas", y el TodoList decide si se ve una lista elegante o un mensaje motivador.


#### Componente robusto

Strict Typing: Ya lo tienes. Al definir todos: Task[]
si mañana cambias el nombre de una propiedad en task.entity.ts
este archivo se pondrá rojo inmediatamente.

Identidad de Callbacks: Fíjate que pasas (id: string) => void.
Esto coincide perfectamente con lo que el dispatch del reducer espera
hay contratos claros.

En el todos.map, usas key={todo.id}. Esto es crítico
Al usar un UUID real generado por crypto.randomUUID() en tu task.logic.ts
te aseguras de que React no se confunda al reordenar o filtrar tareas, algo que suele causar bugs visuales extraños si se usa el índice del array



## TodoTemplate: esqueleto de tu aplicación

##### Definen el contexto espacial sin casarse con los datos

1. Patrón de Slots (Huecos)

##### Slot Pattern: En lugar de importar TodoInput o TodoList directamente, dejas "huecos" (header, inputSlot, listSlot).

Ventaja Arquitectónica: El Template no tiene dependencias
No importa si listSlot recibe una lista de tareas, un cargando (spinner) o un mensaje de error
El Template solo se preocupa de que "el área de la lista"

Agnosticismo Total: Este componente no conoce Task, no conoce useTasks
y no sabe qué es un Reducer. Es 100% visual y estructural.


2. Responsabilidad Única (Layout vs. Contenido)

Layout Sectioning: Las sub-secciones (HeaderSection, InputSection, ListSection)
permiten que cada parte de la interfaz tenga su propio comportamiento de scroll
o espaciado sin afectar a las demás.

Flexibilidad: Si mañana quieres cambiar el diseño y poner el input debajo de la lista
solo mueves una línea en este archivo. No tienes que tocar ninguna lógica de negocio


3. Rendimiento
React puede renderizar esta estructura de forma extremadamente barata
Solo se vuelve a pintar si las "piezas" que le pasas (los slots) cambian, pero el contenedor en sí es estático y ligero.


4. Conocimiento de Arquitectura
La única excepción sería si el layout dependiera de un estado global
Ej. PageWrapper necesitara cambiar de color según un tema oscuro/claro

Pero incluso entonces, lo ideal es que reciba esa información por props o mediante un ThemeProvider de Styled Components
manteniendo el componente libre de lógica de tareas


#### ReactNode
Usar React.ReactNode para los slots es la forma más flexible de tipar en TypeScript
Permite pasar strings, componentes, arrays o incluso null si decides ocultar una sección dinámicamente



## TodoPage

```
import { useMemo } from 'react';
import { useTasks } from '../../../hooks/useTasks';
import { DashboardTemplate } from '../../templates/DashboardTemplate/DashboardTemplate';
import { TodoTemplate } from '../../templates/TodoTemplate/TodoTemplate';
import { FilterPanel } from '../../organisms/FilterPanel/FilterPanel';
import { TodoList } from '../../organisms/TodoList/TodoList';
import { TodoInput } from '../../molecules/TodoInput/TodoInput';
import { Typography } from '../../atoms/Typography/Typography';
import { Button } from '../../atoms/Button/Button'; // Asumiendo que tienes este átomo

export const TodoPage = () => {

const {
tasks, add, toggle, remove,
filter, setFilter, stats, clearCompleted
} = useTasks();

// 1. Mapeamos las stats al formato que espera el FilterPanel
const categories = useMemo(() => [
{ id: 'all', label: 'Todas', count: stats.total },
{ id: 'pending', label: 'Pendientes', count: stats.pending },
{ id: 'completed', label: 'Completadas', count: stats.completed },
], [stats]);

return (
<DashboardTemplate
header={
<Typography variant="h2" color="white">Liquid Task</Typography>
}
sidebar={
<div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
<FilterPanel
categories={categories}
selectedIds={[filter]}
onToggleCategory={(id) => setFilter(id as any)}
title="Categorías"
/>

{/* Bonus: Limpiar completadas al final del sidebar */}
{stats.completed > 0 && (
<Button
variant="secondary"
onClick={clearCompleted}
style={{ margin: '20px' }}
>
Borrar completadas ({stats.completed})

</Button>
)}
</div>
}
>
{/* El contenido principal usa el TodoTemplate para el layout interno */}
<TodoTemplate
header={
<div style={{ marginBottom: '1rem' }}>
<Typography variant="h1">
{filter === 'all' ? 'Mis Tareas' : filter === 'pending' ? 'Pendientes' : 'Completadas'}
</Typography>
<Typography variant="body" color="textSecondary">
Tienes {stats.pending} asuntos por resolver hoy.
</Typography>
</div>
}
inputSlot={
<TodoInput onAdd={add} />
}
listSlot={
<TodoList
todos={tasks}
onToggleTodo={toggle}
onDeleteTodo={remove}
/>
}
/>
</DashboardTemplate>
);
}; 
```

##### Orquestador: único componente que tiene permiso para ensuciarse, conoce el Hook de negocio, conoce los Templates y conoce los Organismos

1. Mapeo:

```
const categories = useMemo(() => [
  { id: 'all', label: 'Todas', count: stats.total },
  // ...
], [stats]);
```

FilterPanel no tiene ni idea de qué es stats.total, la página actúa como traductor.
Si mañana la API cambia total por countAll, solo cambias esta línea y nada de la UI se rompe


2. Composición de Templates
Template dentro de otro:
DashboardTemplate (Estructura global) > TodoTemplate (Estructura de la app).

Si mañana quieres añadir una página de "Estadísticas", usarías el mismo DashboardTemplate pero con un StatsTemplate dentro


### SearchBar
filtre las tareas por nombre, integrarlo

FilterPanel tiene un buscador interno que filtra categorías
pero nosotros queremos filtrar tareas

```
export const TodoPage = () => {
  const { 
    tasks, add, toggle, remove, 
    filter, setFilter, stats, clearCompleted,
    searchQuery, setSearchQuery // 👈 1. Traemos el estado de búsqueda
  } = useTasks();

  // ... (categories memo) ...

  return (
    <DashboardTemplate
      sidebar={
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
          {/* 👈 2. Insertamos la SearchBar aquí, arriba de los filtros */}
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          
          <FilterPanel 
            categories={categories}
            selectedIds={[filter]}
            onToggleCategory={(id) => setFilter(id as any)}
            title="Vistas"
          />
          {/* ... */}
        </div>
      }
    >
      <TodoTemplate
        // ... (header, inputSlot, listSlot) ...
      />
    </DashboardTemplate>
  );
};
```

Flujo:

1. Acción: El usuario escribe "fix" en la SearchBar.
2. Subida: Se ejecuta setSearchQuery en useTasks.
3. Proceso: El useMemo del hook filtra el array de tasks original.
4. Bajada: La página recibe la nueva lista filtrada y se la pasa a TodoList.
5. Render: El TodoList mapea las tareas a TodoItem y las vemos en pantalla.


#### Cast as any
`onToggleCategory={(id) => setFilter(id as any)},`
FilterPanel dice que id es un string
pero setFilter espera un TaskFilter

100% Type-Safe:
cambiar la interfaz en el FilterPanel


# Refactor

## Diseño

FilterPanel

```

Tareas

filtrar por tareas

buscar tareas...


Categorías:

todas
pendientes
completadas

```


## Busqueda sin Search Bar

1. Limpiar FilterPanel
quitarle la lógica interna de búsqueda al FilterPanel para que sea un componente "tonto" (presentacional
##### que el input que tiene ahora controle el estado global de búsqueda de tareas.

```
// src/components/organisms/FilterPanel/FilterPanel.tsx

import { useId } from 'react';
import { FilterItem } from '../../molecules/FilterItem/FilterItem';
import { InputGroup } from '../../molecules/InputGroup/InputGroup';
import { 
  PanelContainer, 
  PanelHeader, 
  PanelContent, 
  CategoryList 
} from './FilterPanel.styles';

interface Category {
  id: string;
  label: string;
  count: number;
}

interface FilterPanelProps {
  categories: Category[];
  selectedIds: string[];
  onToggleCategory: (id: string) => void;
  // --- NUEVAS PROPS PARA CONTROLAR LA BÚSQUEDA DE TAREAS ---
  searchQuery: string;
  onSearchChange: (value: string) => void;
  title?: string;
}

export const FilterPanel = ({ 
  categories, 
  selectedIds, 
  onToggleCategory,
  searchQuery,
  onSearchChange,
  title = "Categorías" 
}: FilterPanelProps) => {
  const titleId = useId();

  return (
    <PanelContainer aria-labelledby={titleId}>
      <PanelHeader>
        {/* Siguiendo tu nueva estructura visual */}
        <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Tareas</h2>
        
        <InputGroup
          label="Filtrar por tareas" // Tu nuevo label
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="buscar tareas..." // Tu nuevo placeholder
        />
      </PanelHeader>

      <PanelContent>
        <h3 id={titleId} style={{ fontSize: '1rem', margin: '1.5rem 0 0.5rem' }}>
          {title}:
        </h3>
        <CategoryList aria-label="Lista de categorías">
          {categories.map((category) => (
            <li key={category.id}>
              <FilterItem
                label={category.label}
                count={category.count}
                isSelected={selectedIds.includes(category.id)}
                onToggle={() => onToggleCategory(category.id)}
              />
            </li>
          ))}
        </CategoryList>
      </PanelContent>
    </PanelContainer>
  );
};
```

2. Conectar la búsqueda en TodoPage
conectar este nuevo contrato del FilterPanel con tu hook useTasks
Asegúrate de que tu hook useTasks ya devuelva searchQuery y setSearchQuery.

```
// src/components/pages/TodoPage/TodoPage.tsx (Fragmento)

export const TodoPage = () => {
  const { 
    tasks, 
    filter, 
    setFilter, 
    stats, 
    searchQuery,    // 👈 Traemos el estado de búsqueda del hook
    setSearchQuery, // 👈 Y su función para actualizarlo
    // ... resto de métodos
  } = useTasks();

  // ... memo de categorías ...

  return (
    <DashboardTemplate
      // ... header ...
      sidebar={
        <FilterPanel 
          categories={categories}
          selectedIds={[filter]}
          onToggleCategory={(id) => setFilter(id as any)}
          // --- CONEXIÓN DE LA BÚSQUEDA ---
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      }
    >
      {/* TodoTemplate con su TodoList que ya recibe 'tasks' filtradas */}
    </DashboardTemplate>
  );
};
```

Sincronización:
Ahora, cuando escribes en el input del sidebar,
##### estás actualizando el searchQuery que vive en tu Hook Global

##### Filtrado Real: Tu hook useTasks detectará que searchQuery cambió
y filtrará el array de tareas automáticamente

Adiós al "No hay coincidencias": Como ya no filtramos las categorías en el sidebar, los botones "Todas", "Pendientes" y "Completadas" nunca desaparecerán mientras buscas una tarea


### Modificación en useTasks

procesa tanto el filtro de estado (Pendientes/Completadas) como la búsqueda por texto

```
import { useReducer, useMemo, useCallback } from 'react';
import { taskReducer, initialTaskState } from '../context/taskReducer'; // Asumiendo tu ruta
import { TaskFilter } from '@/core/task.entity';

export const useTasks = () => {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  // --- ACCIONES ---
  const add = (content: string) => dispatch({ type: 'ADD_TASK', payload: content });
  const toggle = (id: string) => dispatch({ type: 'TOGGLE_TASK', payload: id });
  const remove = (id: string) => dispatch({ type: 'REMOVE_TASK', payload: id });
  const clearCompleted = () => dispatch({ type: 'CLEAR_COMPLETED' });
  
  const setFilter = (filter: TaskFilter) => 
    dispatch({ type: 'SET_FILTER', payload: filter });

  const setSearchQuery = (query: string) => 
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });

  // --- LÓGICA DE FILTRADO (El corazón del buscador) ---
  const filteredTasks = useMemo(() => {
    return state.tasks.filter((task) => {
      // 1. Filtro por Estado (Todas / Pendientes / Completadas)
      const matchesFilter = 
        state.filter === 'all' || 
        (state.filter === 'pending' && !task.isCompleted) || 
        (state.filter === 'completed' && task.isCompleted);

      // 2. Filtro por Texto (Buscador)
      // Usamos .toLowerCase() para que la búsqueda no sea sensible a mayúsculas
      const matchesSearch = task.content
        .toLowerCase()
        .includes(state.searchQuery.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [state.tasks, state.filter, state.searchQuery]);

  // --- ESTADÍSTICAS (Para los contadores del FilterPanel) ---
  const stats = useMemo(() => ({
    total: state.tasks.length,
    pending: state.tasks.filter(t => !t.isCompleted).length,
    completed: state.tasks.filter(t => t.isCompleted).length,
  }), [state.tasks]);

  return {
    // Datos
    tasks: filteredTasks, // Enviamos las tareas ya filtradas
    filter: state.filter,
    searchQuery: state.searchQuery,
    stats,
    
    // Métodos
    add,
    toggle,
    remove,
    setFilter,
    setSearchQuery,
    clearCompleted
  };
};
```

Filtrado Combinado:
Si seleccionas la categoría "Pendientes" y escribas "fix",
el sistema buscará solo dentro de las pendientes
Es un comportamiento de aplicación profesional

useMemo: Solo recalculamos la lista si cambian las tareas, el filtro o la búsqueda
Esto evita trabajo extra al procesador en cada renderizado de la página.

content: usando task.content


### Reducer
Asegúrate de que tu taskReducer tenga los casos para SET_FILTER y SET_SEARCH_QUERY que actualicen sus respectivos campos en el estado
actualizar tanto la definición del estado como los casos de acción
añadir searchQuery al estado global, permites que cualquier cambio en el input del sidebar se propague de forma predecible por toda la aplicación

```
import { Task, TaskFilter } from '@/core/task.entity';
import { createTask } from '@/core/task.logic';

// 1. Extendemos la interfaz del estado
export interface TaskState {
  tasks: Task[];
  filter: TaskFilter;
  searchQuery: string; // 👈 El nuevo miembro del estado
}

// 2. Definimos el nuevo tipo de acción
export type TaskAction =
  | { type: 'ADD_TASK'; payload: string }
  | { type: 'TOGGLE_TASK'; payload: string }
  | { type: 'REMOVE_TASK'; payload: string }
  | { type: 'SET_FILTER'; payload: TaskFilter }
  | { type: 'SET_SEARCH_QUERY'; payload: string } // 👈 Acción para la búsqueda
  | { type: 'CLEAR_COMPLETED' };

export const initialTaskState: TaskState = {
  tasks: [],
  filter: 'all',
  searchQuery: '', // 👈 Valor inicial vacío
};

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, createTask(action.payload)],
      };

    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isCompleted: !task.isCompleted }
            : task
        ),
      };

    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };

    // 3. Implementamos la lógica de actualización de búsqueda
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload,
      };

    case 'CLEAR_COMPLETED':
      return {
        ...state,
        tasks: state.tasks.filter((task) => !task.isCompleted),
      };

    default:
      return state;
  }
};
```


### TodoPage

Asegúrate de que tu página esté pasando las nuevas propiedades al FilterPanel
Como ahora el estado de búsqueda vive en el Hook (y por extensión en el Reducer),
el FilterPanel ya no es dueño de su propio searchTerm, sino que es un mero transmisor

```
// En TodoPage.tsx
const { 
  tasks, 
  filter, 
  setFilter, 
  stats, 
  searchQuery,    // 👈 Asegúrate de extraer esto del hook
  setSearchQuery  // 👈 Y esto también
} = useTasks();

// ...

<FilterPanel 
  categories={categories}
  selectedIds={[filter]}
  onToggleCategory={(id) => setFilter(id as any)}
  searchQuery={searchQuery}     // 👈 Conexión de bajada
  onSearchChange={setSearchQuery} // 👈 Conexión de subida
/>
```


¿Qué pasa cuando la búsqueda no devuelve nada?

Actualmente, tu TodoList muestra el mensaje "No hay tareas pendientes".
Pero si el usuario buscó "comprar pan" y no aparece nada, el mensaje correcto debería ser
"No se encontraron tareas que coincidan con tu búsqueda".

#### mejorar tu organismo TodoList así:

```
// En TodoList.tsx
export const TodoList = ({ todos, onToggleTodo, onDeleteTodo, isSearching }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <EmptyState>
        <Typography variant="h3">
          {isSearching ? "🔍 Sin resultados" : "📝 Todo listo"}
        </Typography>
        <Typography variant="body">
          {isSearching 
            ? "Intenta con otras palabras clave" 
            : "¡Añade algo para empezar el día!"}
        </Typography>
      </EmptyState>
    );
  }
  // ... resto del map
}
```


### Rendimiento
Como estás filtrando en cada pulsación de tecla
el cpu agradecerá que el filtrado sea "Case Insensitive" (ignorar mayúsculas) y que use useMemo.

##### hook useTasks, asegúrate de que el useMemo del filtrado tenga a state.searchQuery, en su array de dependencias
Si no está ahí, la lista no se actualizará cuando el usuario escriba.

```
// En useTasks.ts (Verifica esto)
const filteredTasks = useMemo(() => {
  // ... lógica de filtrado ...
}, [state.tasks, state.filter, state.searchQuery]); // 👈 ¡Crítico!
```



# Componente SearchTask

Sin InputGroup

```
import React from 'react';
import { SearchContainer, StyledInput, SearchIcon } from './SearchTask.styles';

interface SearchTaskProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchTask = ({ 
  value, 
  onChange, 
  placeholder = "buscar tareas..." 
}: SearchTaskProps) => {
  return (
    <SearchContainer>
      {/* Un pequeño detalle visual: icono de lupa tipo Glassmorphism */}
      <SearchIcon aria-hidden="true">🔍</SearchIcon>
      <StyledInput
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={40}
      />
    </SearchContainer>
  );
};
```

Estilo:

```
import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 0.5rem;
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 12px;
  font-size: 0.9rem;
  opacity: 0.6;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 12px 10px 35px;
  background: rgba(255, 255, 255, 0.05); // Efecto cristal
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fff;
  font-size: 0.9rem;
  outline: none;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.08);
    border-color: #3b82f6; // Un azul sutil para el foco
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`;
```

Integración con FilterPanel
Limpiamos para que use esta nueva molécula y refleje la estructura visual

```
// Fragmento del FilterPanel.tsx actualizado
export const FilterPanel = ({ 
  categories, 
  selectedIds, 
  onToggleCategory,
  searchQuery,
  onSearchChange
}: FilterPanelProps) => {
  return (
    <PanelContainer>
      <PanelHeader>
        {/* Tu nueva estructura visual */}
        <Typography variant="h3" style={{ marginBottom: '4px' }}>Tareas</Typography>
        <Typography variant="caption" color="textSecondary">filtrar por tareas</Typography>
        
        <SearchTask 
          value={searchQuery} 
          onChange={onSearchChange} 
        />
      </PanelHeader>

      <PanelContent>
        <Typography variant="h4" style={{ margin: '1.5rem 0 0.8rem' }}>
          Categorías:
        </Typography>
        <CategoryList>
          {categories.map((cat) => (
            <FilterItem 
              key={cat.id}
              label={cat.label}
              count={cat.count}
              isSelected={selectedIds.includes(cat.id)}
              onToggle={() => onToggleCategory(cat.id)}
            />
          ))}
        </CategoryList>
      </PanelContent>
    </PanelContainer>
  );
};
```

### Funcionamiento de SearchTask

Captura (El Evento)
Cuando escribes la letra "f" en el StyledInput, ocurre lo siguiente

```
// Dentro de SearchTask.tsx
onChange={(e) => onChange(e.target.value)}
```
captura el evento del navegador (e.target.value), pero no lo guarda en un useState local
Simplemente "grita" ese valor hacia arriba a través de la prop onChange


El FilterPanel escucha ese grito y lo pasa a la página:

```
// Dentro de FilterPanel.tsx
<SearchTask 
  value={searchQuery} // Aquí recibe el valor actual para mostrarlo
  onChange={onSearchChange} // Aquí pasa la función que viene de la página
/>
```

Reducer y el Hook

La Acción: Se ejecuta setSearchQuery("f").
El Estado: El Reducer actualiza el campo searchQuery en el estado global.
El Filtrado Real: El hook tiene este bloque de código (que es el que realmente "captura" las coincidencias):

```
// En useTasks.ts
const filteredTasks = useMemo(() => {
  return state.tasks.filter((task) => {
    // Aquí es donde se "cruza" lo que escribiste con tus tareas
    return task.content.toLowerCase().includes(state.searchQuery.toLowerCase());
  });
}, [state.tasks, state.searchQuery]); // 👈 Se ejecuta CADA VEZ que escribes
```

Resultado UI:

Como el hook useTasks devuelve tasks: filteredTasks, la TodoPage recibe ahora una lista más corta (solo las que tienen una "f").
Esa lista corta se le pasa al TodoList y ¡listo!, las tareas que no coinciden desaparecen de la pantalla

sincronización de datos:

Subida: El input le dice al Reducer: "El usuario quiere buscar 'fix'".
Proceso: El Reducer guarda "fix".
Bajada: El Hook mira todas las tareas, saca las que dicen "fix" y se las entrega a la lista para que las dibuje


### Cambios en arquitectura

task.entity.ts
##### La entidad Task no cambia porque una tarea no sabe que está siendo buscada; ella solo existe

task.logic.ts
##### La lógica de dominio se encarga de cómo se crea una tarea o cómo se valida
##### El filtrado por texto es una operación de la interfaz, no una regla de negocio del objeto "Tarea". 

#### task.reducer.ts (Cambio de Estado)
##### donde añadimos la propiedad searchQuery, define que la búsqueda ahora es parte del "Estado Global" de la aplicación.

```
// src/context/taskReducer.ts

import { Task, TaskFilter } from '@/core/task.entity';
import { createTask } from '@/core/task.logic';

export interface TaskState {
  tasks: Task[];
  filter: TaskFilter;
  searchQuery: string; // 👈 Nueva propiedad
}

export type TaskAction =
  | { type: 'ADD_TASK'; payload: string }
  | { type: 'TOGGLE_TASK'; payload: string }
  | { type: 'REMOVE_TASK'; payload: string }
  | { type: 'SET_FILTER'; payload: TaskFilter }
  | { type: 'SET_SEARCH_QUERY'; payload: string } // 👈 Nueva acción
  | { type: 'CLEAR_COMPLETED' };

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    
    case 'SET_FILTER':
      return { ...state, filter: action.payload };

    // ... (resto de casos ADD_TASK, TOGGLE_TASK, etc. se mantienen igual)
    default:
      return state;
  }
};
```

#### useTasks.ts (El Motor de Búsqueda)
donde "cruzamos" las tareas reales con el texto que el usuario escribe. 

```
// src/hooks/useTasks.ts

import { useReducer, useMemo } from 'react';
import { taskReducer, initialTaskState } from '../context/taskReducer';

export const useTasks = () => {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  // Funciones de despacho (Dispatchers)
  const setSearchQuery = (query: string) => 
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
    
  const setFilter = (filter: any) => 
    dispatch({ type: 'SET_FILTER', payload: filter });

  // --- EL CEREBRO DEL FILTRADO ---
  const filteredTasks = useMemo(() => {
    return state.tasks.filter((task) => {
      // Primero: ¿Cumple con el filtro de categoría (Todas/Pendientes...)?
      const matchesFilter = 
        state.filter === 'all' || 
        (state.filter === 'pending' && !task.isCompleted) || 
        (state.filter === 'completed' && task.isCompleted);

      // Segundo: ¿Cumple con lo que el usuario escribió en el buscador?
      const matchesSearch = task.content
        .toLowerCase()
        .includes(state.searchQuery.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [state.tasks, state.filter, state.searchQuery]); // 👈 Dependencias críticas

  return {
    tasks: filteredTasks, // La UI solo recibe las tareas que pasaron los filtros
    searchQuery: state.searchQuery,
    filter: state.filter,
    setSearchQuery,
    setFilter,
    // ... add, toggle, remove
  };
};
```

### Actualizar FilterPanel

```
// src/components/organisms/FilterPanel/FilterPanel.tsx

import { useId } from 'react';
import { FilterItem } from '../../molecules/FilterItem/FilterItem';
import { SearchTask } from '../../molecules/SearchTask/SearchTask'; // 👈 Importamos la nueva molécula
import { Typography } from '../../atoms/Typography/Typography';
import { 
  PanelContainer, 
  PanelHeader, 
  PanelContent, 
  CategoryList 
} from './FilterPanel.styles';

interface Category {
  id: string;
  label: string;
  count: number;
}

interface FilterPanelProps {
  categories: Category[];
  selectedIds: string[];
  onToggleCategory: (id: string) => void;
  searchQuery: string;      // 👈 Prop de bajada
  onSearchChange: (v: string) => void; // 👈 Prop de subida
}

export const FilterPanel = ({ 
  categories, 
  selectedIds, 
  onToggleCategory,
  searchQuery,
  onSearchChange
}: FilterPanelProps) => {
  const titleId = useId();

  return (
    <PanelContainer aria-labelledby={titleId}>
      <PanelHeader>
        {/* Sección de Tareas según tu nuevo esquema */}
        <Typography variant="h2" style={{ fontSize: '1.2rem', marginBottom: '4px' }}>
          Tareas
        </Typography>
        <Typography variant="caption" color="textSecondary" style={{ marginBottom: '8px', display: 'block' }}>
          filtrar por tareas
        </Typography>
        
        {/* Nuestra nueva molécula limpia */}
        <SearchTask 
          value={searchQuery} 
          onChange={onSearchChange} 
          placeholder="buscar tareas..."
        />
      </PanelHeader>

      <PanelContent>
        {/* Sección de Categorías */}
        <Typography id={titleId} variant="h3" style={{ fontSize: '1rem', margin: '1.5rem 0 0.8rem' }}>
          Categorías:
        </Typography>
        
        <CategoryList aria-label="Lista de filtros de estado">
          {categories.map((category) => (
            <li key={category.id}>
              <FilterItem
                label={category.label}
                count={category.count}
                isSelected={selectedIds.includes(category.id)}
                onToggle={() => onToggleCategory(category.id)}
              />
            </li>
          ))}
        </CategoryList>
      </PanelContent>
    </PanelContainer>
  );
};
```


#### Actualización TodoPage.tsx
mediador. Extrae el estado del Hook y se lo entrega al Organismo.

```
// src/components/pages/TodoPage/TodoPage.tsx

import { useMemo } from 'react';
import { useTasks } from '../../../hooks/useTasks';
import { DashboardTemplate } from '../../templates/DashboardTemplate/DashboardTemplate';
import { TodoTemplate } from '../../templates/TodoTemplate/TodoTemplate';
import { FilterPanel } from '../../organisms/FilterPanel/FilterPanel';
import { TodoList } from '../../organisms/TodoList/TodoList';
import { TodoInput } from '../../molecules/TodoInput/TodoInput';
import { Typography } from '../../atoms/Typography/Typography';

export const TodoPage = () => {
  // 1. Extraemos todo lo necesario del hook
  const { 
    tasks, add, toggle, remove, 
    filter, setFilter, stats, 
    searchQuery, setSearchQuery // 👈 Los nuevos inquilinos
  } = useTasks();

  // 2. Mapeamos stats para el FilterPanel
  const categories = useMemo(() => [
    { id: 'all', label: 'Todas', count: stats.total },
    { id: 'pending', label: 'Pendientes', count: stats.pending },
    { id: 'completed', label: 'Completadas', count: stats.completed },
  ], [stats]);

  return (
    <DashboardTemplate
      header={<Typography variant="h2" color="white">Liquid Task</Typography>}
      sidebar={
        <FilterPanel 
          categories={categories}
          selectedIds={[filter]}
          onToggleCategory={(id) => setFilter(id as any)}
          // 3. Conectamos la búsqueda aquí
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      }
    >
      <TodoTemplate
        header={
          <div style={{ marginBottom: '1rem' }}>
            <Typography variant="h1">
              {filter === 'all' ? 'Mis Tareas' : filter === 'pending' ? 'Pendientes' : 'Completadas'}
            </Typography>
            {/* Si hay búsqueda activa, podemos dar feedback visual aquí también */}
            <Typography variant="body" color="textSecondary">
              {searchQuery 
                ? `Buscando "${searchQuery}"...` 
                : `Tienes ${stats.pending} asuntos por resolver hoy.`}
            </Typography>
          </div>
        }
        inputSlot={<TodoInput onAdd={add} />}
        listSlot={
          <TodoList 
            todos={tasks} // Estas tareas ya vienen filtradas por el hook
            onToggleTodo={toggle} 
            onDeleteTodo={remove} 
          />
        }
      />
    </DashboardTemplate>
  );
};
```


# TaskPanel

Estado Centralizado:
El componente no sacará la información de "sí mismo",
sino de un Estado Central (que en tu caso reside en el taskReducer).

`tasks`: El array con todos los objetos de tareas (cada una con su id, content e isCompleted).

`searchQuery`: El texto que el usuario está escribiendo.

`filter`: El estado del botón seleccionado (all, pending, completed).


Buscador:
no necesita conocer las tareas
Su única responsabilidad es capturar lo que el usuario escribe.

Proceso: Cuando escribes "comprar", el componente simplemente envía ese texto al useTasks.

Captura: El "rastreo" ocurre en el Hook
El Hook toma la lista completa de tareas del Reducer
y crea una nueva lista filtrada en tiempo real.

Resultado: El buscador no "capta" las tareas
el sistema "esconde" las tareas que no coinciden con lo que el buscador dice.


Botones de filtro:
muestren el número correcto y filtren bien, necesitan dos tipos de datos que el Hook debe procesar

1. Cálculo de Estadísticas (Derivación de datos)
El Hook recorre el array de tareas original y cuenta cuántas tienen isCompleted: true y cuántas false
Estos números se le pasan al componente como Props (propiedades).

2. Filtro de Estado
Cuando pulsas "Pendientes", el componente le avisa al Hook
El Hook entonces filtra la lista basándose en la propiedad isCompleted de cada tarea.


Contrato: información que necesita
Para que el componente sea independiente y limpio, recibirá la información a través de una Interfaz (Props) muy clara
No irá a buscar la información a la base de datos ni al almacenamiento; esperará a que el useTasks se la entregue "masticada


Flujo:

1. Entrada: El usuario interactúa con el buscador o los botones.
2. Acción: El componente emite un evento (onSearchChange o onFilterChange).
3. Proceso: El Hook/Reducer actualiza el estado global.
4. Cálculo: El Hook recalcula qué tareas mostrar y qué números poner en los botones (usando useMemo para no sobrecargar tu procesador).
5. Salida: El componente recibe las nuevas props y se repinta con la información actualizada


Organismo: 
su trabajo es orquestar esas dos funciones independientes (Búsqueda y Filtrado) en una sola interfaz coherente.
no tiene lógica interna pesada, solo recibe datos y emite eventos.

TaskPanel.tsx

```
import { useId } from 'react';
import { FilterItem } from '../../molecules/FilterItem/FilterItem';
import { SearchTask } from '../../molecules/SearchTask/SearchTask';
import { Typography } from '../../atoms/Typography/Typography';
import { 
  PanelContainer, 
  PanelSection, 
  CategoryList 
} from './TaskPanel.styles';

// Definimos el contrato de datos del componente
interface Category {
  id: string;
  label: string;
  count: number;
}

interface TaskPanelProps {
  // Props para el Buscador
  searchQuery: string;
  onSearchChange: (value: string) => void;
  
  // Props para los Filtros
  categories: Category[];
  activeFilterId: string;
  onFilterChange: (id: string) => void;
  
  // Personalización
  title?: string;
}

export const TaskPanel = ({
  searchQuery,
  onSearchChange,
  categories,
  activeFilterId,
  onFilterChange,
  title = "Categorías"
}: TaskPanelProps) => {
  const categoriesTitleId = useId();

  return (
    <PanelContainer>
      {/* SECCIÓN 1: BÚSQUEDA (Independiente) */}
      <PanelSection>
        <Typography variant="h2" style={{ fontSize: '1.2rem', marginBottom: '4px' }}>
          Tareas
        </Typography>
        <Typography variant="caption" color="textSecondary" style={{ display: 'block', marginBottom: '12px' }}>
          filtrar por tareas
        </Typography>
        
        <SearchTask 
          value={searchQuery} 
          onChange={onSearchChange} 
          placeholder="buscar tareas..."
        />
      </PanelSection>

      {/* SECCIÓN 2: FILTRADO POR ESTADO */}
      <PanelSection>
        <Typography 
          id={categoriesTitleId} 
          variant="h3" 
          style={{ fontSize: '1rem', marginTop: '1rem', marginBottom: '12px' }}
        >
          {title}:
        </Typography>

        <CategoryList aria-labelledby={categoriesTitleId}>
          {categories.map((category) => (
            <li key={category.id}>
              <FilterItem
                label={category.label}
                count={category.count}
                isSelected={activeFilterId === category.id}
                onToggle={() => onFilterChange(category.id)}
              />
            </li>
          ))}
        </CategoryList>
      </PanelSection>
    </PanelContainer>
  );
};
```


### SearchTask

```
import React from 'react';
import { SearchContainer, StyledInput, SearchIcon } from './SearchTask.styles';

interface SearchTaskProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchTask = ({ 
  value, 
  onChange, 
  placeholder = "buscar tareas..." 
}: SearchTaskProps) => {
  return (
    <SearchContainer>
      {/* Icono decorativo de lupa */}
      <SearchIcon aria-hidden="true">🔍</SearchIcon>
      <StyledInput
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={40}
      />
    </SearchContainer>
  );
};
```

Estilo

```

import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 12px;
  font-size: 0.9rem;
  opacity: 0.5;
  pointer-events: none; // Para que no interfiera al hacer click en el input
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 12px 10px 36px; // Espacio extra a la izquierda para el icono
  
  /* Estilo Liquid Glass */
  background: rgba(255, 255, 255, 0.05); 
  backdrop-filter: blur(4px); // Efecto de desenfoque detrás del cristal
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  
  color: #ffffff;
  font-size: 0.9rem;
  outline: none;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
  }
`;
```

Estado Externo: El componente no guarda lo que escribes. Recibe el texto a través de la prop value.

El Evento (Subida): Cuando pulsas una tecla, el input dispara onChange. Este componente captura el evento del navegador y "extrae" solo el texto (e.target.value), pasándoselo a la función que recibió por props.

La Reacción (Bajada): El texto viaja hasta tu Reducer, se guarda allí, y React vuelve a renderizar el TaskPanel con el nuevo valor. Este nuevo valor vuelve a entrar por la prop value, haciendo que el input muestre la letra que acabas de escribir


### Cambios

1. task.entity.ts y task.logic.ts (SIN CAMBIOS)
##### una "Tarea" (entidad) no cambia su esencia solo porque la estemos buscando
##### Las reglas de negocio (lógica) siguen siendo las mismas: crear, validar o completar
##### El filtrado es una preocupación de la Capa de Aplicación, no del núcleo

2. task.reducer.ts (Cambio en el Estado)
Necesitamos que el estado global "recuerde" qué es lo que el usuario está escribiendo
Añadimos searchQuery al estado y una acción para actualizarlo.

```
// src/context/taskReducer.ts

export interface TaskState {
  tasks: Task[];
  filter: TaskFilter;
  searchQuery: string; // 👈 Agregamos esto
}

export type TaskAction =
  | { type: 'ADD_TASK'; payload: string }
  | { type: 'TOGGLE_TASK'; payload: string }
  | { type: 'REMOVE_TASK'; payload: string }
  | { type: 'SET_FILTER'; payload: TaskFilter }
  | { type: 'SET_SEARCH_QUERY'; payload: string } // 👈 Nueva acción
  | { type: 'CLEAR_COMPLETED' };

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    
    case 'SET_FILTER':
      return { ...state, filter: action.payload };

    // ... resto de casos iguales
    default:
      return state;
  }
};
```

3. useTasks.ts (El motor de procesamiento)
donde ocurre la magia
El hook se encarga de cruzar los datos
usamos useMemo para que el filtrado solo ocurra cuando realmente sea necesario

```
// src/hooks/useTasks.ts

import { useReducer, useMemo } from 'react';
import { taskReducer, initialTaskState } from '../context/taskReducer';

export const useTasks = () => {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  // Acciones para que TaskPanel las use
  const setSearchQuery = (query: string) => 
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
    
  const setFilter = (filter: any) => 
    dispatch({ type: 'SET_FILTER', payload: filter });

  // FILTRADO COMBINADO: El corazón del sistema
  const filteredTasks = useMemo(() => {
    return state.tasks.filter((task) => {
      // 1. ¿Coincide con la categoría (Pendiente/Completada)?
      const matchesFilter = 
        state.filter === 'all' || 
        (state.filter === 'pending' && !task.isCompleted) || 
        (state.filter === 'completed' && task.isCompleted);

      // 2. ¿Coincide con el texto buscado?
      const matchesSearch = task.content
        .toLowerCase()
        .includes(state.searchQuery.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [state.tasks, state.filter, state.searchQuery]); // 👈 Si algo de esto cambia, se recalcula

  // Estadísticas para los botones de categorías
  const stats = useMemo(() => ({
    total: state.tasks.length,
    pending: state.tasks.filter(t => !t.isCompleted).length,
    completed: state.tasks.filter(t => t.isCompleted).length,
  }), [state.tasks]);

  return {
    tasks: filteredTasks, // La UI recibe la lista final "limpia"
    searchQuery: state.searchQuery,
    filter: state.filter,
    stats,
    setSearchQuery,
    setFilter,
    // ... add, toggle, remove
  };
};
```


### TaskPanel y SearchTask sin consumir arq

mantener el "Core" de tu aplicación intacto
o cuando estás trabajando en una arquitectura donde no tienes permiso para tocar el Reducer

La clave está en manejar la búsqueda y el filtrado como "Estado de Interfaz"
exclusivamente dentro de la página (TodoPage).

#### Interceptador
En lugar de que el Hook te dé las tareas ya filtradas
el Hook te dará la lista completa (sin procesar),
tú harás el filtrado "al vuelo" dentro de la TodoPage antes de pasárselas al TodoList

TodoPage:

```
import { useState, useMemo } from 'react'; // Usamos useState local
import { useTasks } from '../../../hooks/useTasks';
// ... importaciones de componentes (TaskPanel, TodoList, etc.)

export const TodoPage = () => {
  // 1. El Hook se queda igual (Arquitectura intacta)
  // Solo extraemos lo que ya tiene: tasks, add, toggle, remove...
  const { tasks, add, toggle, remove } = useTasks();

  // 2. Creamos estado LOCAL para la UI
  // Esto no toca el Reducer, vive solo mientras la página está abierta
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'pending' | 'completed'>('all');

  // 3. El "Filtro al vuelo" (Lógica local)
  // Aquí es donde sucede la magia sin tocar el core
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      // Filtro de categoría
      const matchesFilter = 
        activeFilter === 'all' || 
        (activeFilter === 'pending' && !task.isCompleted) || 
        (activeFilter === 'completed' && task.isCompleted);

      // Filtro de búsqueda
      const matchesSearch = task.content
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [tasks, activeFilter, searchQuery]); // Recalcula si cambia el estado local o las tareas del hook

  // 4. Calculamos stats locales para los botones
  const categories = useMemo(() => [
    { id: 'all', label: 'Todas', count: tasks.length },
    { id: 'pending', label: 'Pendientes', count: tasks.filter(t => !t.isCompleted).length },
    { id: 'completed', label: 'Completadas', count: tasks.filter(t => t.isCompleted).length },
  ], [tasks]);

  return (
    <DashboardTemplate
      sidebar={
        <TaskPanel 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery} // Actualiza el useState local
          categories={categories}
          activeFilterId={activeFilter}
          onFilterChange={(id) => setActiveFilter(id as any)} // Actualiza el useState local
        />
      }
    >
      <TodoTemplate
        inputSlot={<TodoInput onAdd={add} />}
        listSlot={
          <TodoList 
            todos={filteredTasks} // Le pasamos la lista "interceptada" y filtrada aquí mismo
            onToggleTodo={toggle} 
            onDeleteTodo={remove} 
          />
        }
      />
    </DashboardTemplate>
  );
};
```

Cero cambios en el Core: No tocas task.reducer.ts, ni useTasks.ts, ni las entidades. Tu arquitectura original permanece pura
Velocidad de Desarrollo: Implementas la funcionalidad en un solo archivo (TodoPage).
Independencia: Si usaras la lista de tareas en otra página diferente, esa página vería todas las tareas sin filtrar, porque el filtro solo existe en TodoPage

##### Desventaja: Persistencia: Si el usuario escribe algo en el buscador, navega a otra página y vuelve, la búsqueda se habrá borrado (porque el useState local se reinicia).
Si estuviera en el Reducer, podrías mantenerla.

Reutilización: Si quisieras tener este mismo buscador en otra pantalla, tendrías que copiar y pegar la lógica del useMemo.


# División de componentes: buscador y filtrado

Dividir TaskPanel en dos Organismos independientes
permite una flexibilidad total
podrías poner el buscador en el header y los filtros en el sidebar sin que el código se rompa


1. TaskSearch
se encarga exclusivamente de la entrada de texto y su contexto visual

```
// src/components/organisms/TaskSearch/TaskSearch.tsx
import { SearchTask } from '../../molecules/SearchTask/SearchTask';
import { Typography } from '../../atoms/Typography/Typography';
import { SearchSectionContainer } from './TaskSearch.styles';

interface TaskSearchProps {
  value: string;
  onChange: (value: string) => void;
  title?: string;
  subtitle?: string;
}

export const TaskSearch = ({ 
  value, 
  onChange, 
  title = "Tareas", 
  subtitle = "filtrar por tareas" 
}: TaskSearchProps) => {
  return (
    <SearchSectionContainer>
      <Typography variant="h2" style={{ fontSize: '1.2rem', marginBottom: '4px' }}>
        {title}
      </Typography>
      <Typography variant="caption" color="textSecondary" style={{ display: 'block', marginBottom: '12px' }}>
        {subtitle}
      </Typography>
      
      <SearchTask 
        value={value} 
        onChange={onChange} 
        placeholder="buscar tareas..."
      />
    </SearchSectionContainer>
  );
};
```


2. CategoryFilter
se encarga de la navegación por estados (Todas, Pendientes, Completadas).

```
// src/components/organisms/CategoryFilter/CategoryFilter.tsx
import { useId } from 'react';
import { FilterItem } from '../../molecules/FilterItem/FilterItem';
import { Typography } from '../../atoms/Typography/Typography';
import { FilterSectionContainer, CategoryList } from './CategoryFilter.styles';

interface Category {
  id: string;
  label: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  activeFilterId: string;
  onFilterChange: (id: string) => void;
  title?: string;
}

export const CategoryFilter = ({
  categories,
  activeFilterId,
  onFilterChange,
  title = "Categorías"
}: CategoryFilterProps) => {
  const titleId = useId();

  return (
    <FilterSectionContainer>
      <Typography 
        id={titleId} 
        variant="h3" 
        style={{ fontSize: '1rem', marginBottom: '12px' }}
      >
        {title}:
      </Typography>

      <CategoryList aria-labelledby={titleId}>
        {categories.map((category) => (
          <li key={category.id}>
            <FilterItem
              label={category.label}
              count={category.count}
              isSelected={activeFilterId === category.id}
              onToggle={() => onFilterChange(category.id)}
            />
          </li>
        ))}
      </CategoryList>
    </FilterSectionContainer>
  );
};
```

Independencia de Props: TaskSearch no necesita saber nada de categorías o contadores. Solo necesita un string y una función
Escalabilidad: Si mañana decides añadir un filtro por "Prioridad" o "Fecha", solo tienes que crear un nuevo organismo o duplicar CategoryFilter sin tocar el código del buscador

Composición en la Página: Ahora en tu TodoPage o en tu DashboardTemplate, puedes decidir exactamente dónde va cada pieza:

Ej:

```
// Ejemplo de uso en el sidebar
<aside>
  <TaskSearch value={searchQuery} onChange={setSearchQuery} />
  <div style={{ height: '2rem' }} /> {/* Espaciador sutil */}
  <CategoryFilter 
    categories={categories} 
    activeFilterId={filter} 
    onFilterChange={setFilter} 
  />
</aside>
```

React puede optimizar mejor los re-renderizados.
Si el usuario escribe en el buscador, solo se re-renderiza el árbol de TaskSearch, dejando a CategoryFilter tranquilo y ahorrando ciclos de CPU.


## Unión de componentes

TaskSidebar.tsx

```
// src/components/organisms/TaskSidebar/TaskSidebar.tsx
import { TaskSearch } from '../TaskSearch/TaskSearch';
import { CategoryFilter } from '../CategoryFilter/CategoryFilter';
import { SidebarContainer, SectionSpacer } from './TaskSidebar.styles';

// Definimos el contrato de datos: es la suma de las necesidades de sus hijos
interface Category {
  id: string;
  label: string;
  count: number;
}

interface TaskSidebarProps {
  // Props para el buscador (TaskSearch)
  searchQuery: string;
  onSearchChange: (value: string) => void;
  
  // Props para los filtros (CategoryFilter)
  categories: Category[];
  activeFilterId: string;
  onFilterChange: (id: string) => void;
}

export const TaskSidebar = ({
  searchQuery,
  onSearchChange,
  categories,
  activeFilterId,
  onFilterChange
}: TaskSidebarProps) => {
  return (
    <SidebarContainer>
      {/* Primer bloque independiente: Búsqueda */}
      <TaskSearch 
        value={searchQuery} 
        onChange={onSearchChange} 
      />

      {/* Espaciador visual para mantener la jerarquía de Liquid Glass */}
      <SectionSpacer />

      {/* Segundo bloque independiente: Categorías */}
      <CategoryFilter 
        categories={categories}
        activeFilterId={activeFilterId}
        onFilterChange={onFilterChange}
      />
    </SidebarContainer>
  );
};
```

Desacoplamiento total: Si mañana decides que el buscador debe ir en la barra superior (Header) y las categorías deben quedarse en el lateral, solo tienes que desmontar este TaskSidebar y usar los componentes por separado
No tienes que reescribir la lógica.

Prop Drilling controlado: Este componente solo pasa las props un nivel hacia abajo
Es el máximo permitido antes de que el código se vuelva difícil de mantener

Simplicidad visual: Al usar un SectionSpacer o simplemente márgenes en su archivo de estilos
mantienes ese aire minimalista y ordenado que requiere tu configuración


## Flujo de Datos

##### 1. La Página (TodoPage) le pasa todo a TaskSidebar.

##### 2. TaskSidebar reparte: el texto a la izquierda (TaskSearch) y los filtros a la derecha (CategoryFilter).



## Molécula y Organismo: buscador

1. SearchTask (Molécula)
componente técnico
Su única preocupación es ser un input que se vea bien y funcione correctamente

Un campo de texto con un icono de lupa y estilos de cristal (Glassmorphism).

Responsabilidad: Manejar el foco, los estilos del input y capturar las teclas.

##### Es genérico. Podrías usar este mismo componente para buscar amigos, buscar configuraciones o buscar archivos. No sabe nada de "Tareas".


2. TaskSearch (Organismo)
componente de negocio
Su preocupación es darle sentido a ese input dentro de tu aplicación de tareas

Una sección que agrupa un título ("Tareas"), un subtítulo descriptivo ("filtrar por tareas") y el buscador (SearchTask).

##### Responsabilidad: Definir la estructura visual de la zona de búsqueda y el espaciado.

##### Contexto: Es específico. Está diseñado para el panel lateral de tu app de tareas


### Relación contenedor a contenido:

```
// TaskSearch (jefe)
export const TaskSearch = ({ value, onChange }) => (
  <Container>
    <Typography variant="h2">Tareas</Typography> {/* Contexto */}
    <Typography variant="caption">filtrar...</Typography> {/* Contexto */}
    
    <SearchTask value={value} onChange={onChange} /> {/* Herramienta */}
  </Container>
);

```

##### Si mañana decides que el buscador ya no debe tener el título "Tareas" arriba, solo cambias el Organismo (TaskSearch).

No tienes que tocar la Molécula (SearchTask), que sigue siendo un input perfecto y limpio.

##### SearchTask es el binario (el programa) y TaskSearch es el archivo de configuración que dice cómo y dónde se muestra.



# Buscador genérico vs especifico

Buscador Genérico (Global): portal
Se usa cuando el usuario no sabe exactamente dónde está lo que busca
Es "ruidoso" por naturaleza porque busca en todo el ecosistema (tareas, notas, archivos, etiquetas).
Es para un Dashboard o una pantalla de inicio.

Específico (Contextual): Es una lupa
Se usa cuando el usuario ya entró en una "habitación" (ej. el panel de tareas)
y solo quiere encontrar algo dentro de ese cajón
Es "silencioso" y rápido

Si la acción principal de la pantalla es la gestión
(ej. "limpiar mis tareas de hoy")
usa uno específico

Si la acción es la exploración
(ej. "quiero ver qué tengo pendiente en toda la app")
usa uno genérico.


Encapsulamiento de Contexto:
Principio de Menor Sorpresa

Si estoy en el panel de "Tareas Completadas" y el buscador me devuelve resultados de "Tareas Pendientes" o de "Notas de Configuración"
el buscador me está "mintiendo" o rompiendo mi contexto actual.

El buscador específico respeta las fronteras que el usuario ya decidió cruzar.

##### Un buscador genérico no se transforma en uno específico; se especializa mediante una envoltura (wrapper).

##### El ADN es el mismo: Ambos comparten la tecnología de "entrada de texto" y "procesamiento de coincidencia"

La máscara cambia: El buscador genérico es un ente solitario
El buscador específico "hereda" los filtros de la pantalla donde vive.

Ej: Imagina que tienes un motor de búsqueda
En el modo genérico, el motor busca en toda la base de datos
En el modo específico, el motor recibe un parámetro invisible: "solo busca en lo que el usuario está viendo ahora".


"Scope" (Alcance):
Un buscador genérico suele estar en la parte superior (Header), indicando que manda sobre toda la página.

Un buscador específico suele estar dentro de un panel o sección (como nuestro TaskPanel)
indicando que su poder se limita a ese cuadro de cristal



## SearchTask, TaskSearch e Inputs

"podría usarse para buscar: amigos, buscar configuraciones o buscar archivos. No sabe nada de 'Tareas'." 

Cambio de identidad:
pequeño refactor para convertirlo en un componente puramente técnico

1. SearchTask a SearchInput:
quitarle la etiqueta de "tareas" al nombre y al valor por defecto

```
// Lo renombramos a SearchInput (Molecula genérica)
export const SearchInput = ({ 
  value, 
  onChange, 
  placeholder = "buscar..." // Un valor por defecto neutral
}: SearchTaskProps) => {
  return (
    <SearchContainer>
      <SearchIcon aria-hidden="true">🔍</SearchIcon>
      <StyledInput
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder} // El contexto lo da quien lo usa
        maxLength={40}
      />
    </SearchContainer>
  );
};
```

Ej buscar amigos

Organismo. Creamos un componente que use esa molécula genérica y le dé el contexto de "Amigos".

```
// Un nuevo Organismo: FriendSearch.tsx
import { SearchInput } from '../../molecules/SearchInput/SearchInput';

export const FriendSearch = ({ query, setQuery }) => {
  return (
    <section>
      <h2>Mis Contactos</h2>
      <SearchInput 
        value={query}
        onChange={setQuery}
        placeholder="Buscar amigos por nombre..." 
      />
    </section>
  );
};
```

No se ha cambiado el componente:

La Prop placeholder: Es la voz del componente
El componente simplemente "repite" lo que le pides.

Nombre (Semántica): Al llamarse SearchInput, ya no estás mintiendo al código
Es un "Input de búsqueda" y punto.

##### Función de Callback: En el caso de tareas, el onChange enviaba el texto a un taskReducer
En el caso de amigos, lo enviaría a un friendReducer o a una API de contactos

Concepto clave: La molécula es el contenedor de la interacción
(el dibujo de la lupa, el efecto de cristal, el foco del teclado)

El contexto (qué estás buscando) lo inyectas tú desde un nivel superior.


Es como tener un buen motor (el componente): hoy lo montas en un coche (Tareas)
y mañana en un barco (Amigos), pero el motor sigue haciendo exactamente lo mismo
procesar combustible (texto) para generar movimiento (búsqueda).


## Refactor

Importar Input (Átomo):
En Atomic Design, una molécula como SearchInput es básicamente un "ensamblado" de átomos.

Si mañana decides que todos los campos de texto en tu app tengan un borde color "vidrio esmerilado", solo lo cambias en Input.styles.ts
mágicamente tu buscador también se actualiza.

DRY (Don't Repeat Yourself): Evitas tener dos archivos de estilos (Input.styles.ts y SearchTask.styles.ts) definiendo lo mismo (colores, sombras, tipografía).

Jerarquía: Una molécula (SearchInput) no suele importar otra molécula (InputGroup).


```
// src/components/molecules/SearchInput/SearchInput.tsx
import { Input } from '../../atoms/Input/Input'; // 👈 Reutilizamos el ADN
import { SearchContainer, SearchIcon } from './SearchInput.styles';

export const SearchInput = ({ value, onChange, placeholder = "buscar..." }) => {
  return (
    <SearchContainer>
      <SearchIcon>🔍</SearchIcon>
      
      {/* Usamos el átomo genérico. 
        Nota: El Input espera un evento (e), 
        así que lo manejamos aquí mismo. 
      */}
      <Input
        value={value}
        onChange={onChange} // El Input ya sabe manejar el evento
        placeholder={placeholder}
      />
    </SearchContainer>
  );
};
```

Input (Átomo): Es el material (cristal).

SearchInput (Molécula): Es el objeto (una lupa de cristal).

InputGroup (Molécula): Es otro objeto distinto (un frasco con etiqueta).

TaskSearch (Organismo): Es la estantería donde pones la lupa.



## Input vs InputGroup

Input:
Ideal para lugares donde el contexto ya es obvio. Por ejemplo, en tu buscador o en una celda de una tabla.
No necesita etiquetas porque su ubicación ya explica lo que hace.

Solo se encarga de la interacción técnica (teclado, eventos, estados de foco).
Ventaja: Es ultra-ligero y fácil de colocar en cualquier hueco pequeño de la UI.


InputGroup: campo de formulario)
terreno de la experiencia de usuario (UX) y la accesibilidad.

Uso: Formularios, creación de tareas, edición de perfiles.
Se usa siempre que necesites guiar al usuario explícitamente ("Escribe el título aquí") y darle feedback (el contador de caracteres).

Es un conjunto. Incluye un Label (crítico para lectores de pantalla)
un Badge (lógica de negocio sobre la longitud del texto).

Actualmente, InputGroup está usando un StyledInput propio en lugar de importar el átomo Input
Esto significa que si mañana decides que todos los inputs tengan un borde azul neón, tendrás que cambiarlo en dos archivos diferentes


##### Nota de arquitectura: El hecho de que InputGroup no importe a Input es una "fuga" de diseño atómico. La molécula debería estar construida con átomos



# Bugs

## 1. Más allá de los Tests

### 1. TypeScript Check:
A veces el editor se salta errores si hay muchos archivos abiertos.

`npx tsc --noEmit`


## 2. Pruebas de "Stress" en el LocalStorage:
Como usas un storageService, un bug común es la corrupción de datos.

1. Cierra la app, ve a la consola del navegador:
escribe: `localStorage.setItem('tasks', 'esto no es un json')`.

2. Recarga la app: Se rompe o maneja el error con gracia?
Tu servicio debería tener un try/catch para estos casos.


### 3. Monkey Testing (Pruebas de Estrés Humano): Intenta romper la lógica de negocio

##### Añade una tarea vacía o solo con espacios.
##### Busca un término, borra una tarea de los resultados y luego limpia el buscador.
##### Crea 100 tareas rápido. ¿El scroll del sidebar y la lista se mantienen independientes?


### 4. Auditoría de Re-renders (React DevTools): Si la eficiencia es rey

Si al escribir en el buscador se re-renderiza toda la página (incluyendo el Header), tenemos una oportunidad de optimización con React.memo.



## 2. Archivos

Auditar tus archivos uno a uno
Seguir el flujo de Clean Architecture

Revisa cada capa con estas preguntas:

### 1. Dominio: Core/

1. Pureza:

Algún import que no debería.
El dominio debe ser TypeScript puro.

2. Lógica de Negocio: 
Revisarla:

##### ¿Maneja casos donde el contenido sea un string gigante?
¿El ID se genera siempre de forma única?


### 2. Capa de Aplicación: hooks/ & store/

1. Fugas de Memoria:
En useTasks.ts, ¿hay algún useEffect que no tenga función de limpieza si fuera necesario?

2. Consistencia del Reducer:
##### Revisa que cada acción devuelva un nuevo objeto de estado (inmutabilidad).
Nunca hagas state.tasks.push().


### 3. Capa de Presentación: components/

1. Atoms:
¿Son realmente atómicos?
¿Reciben sus estilos solo por props
o por el theme?v

2. Molecules & Organisms:
Revisa los propTypes o interfaces
Están todas las props marcadas como opcionales (?) si realmente lo son?

Accesibilidad (A11y):
Tienen los inputs sus label o aria-label?
Se puede navegar por las tareas usando solo el teclado (Tab y Enter)?

3. Styled Components
Todos los colores usan el theme.colors.X

Busca valores en "hardcode"
reemplázalos por los tokens de tu theme.ts.

Verifica que los efectos de blur no se solapen de forma que oscurezcan demasiado el texto.


#### Uso de grep para malas prácticas

```
# Buscar console.logs olvidados
grep -r "console.log" src/

# Buscar estilos inline que se te hayan pasado (style={{...}})
grep -r "style={{" src/
```


## 3. Herramientas

### 1. React DevTools

Components: Te permite ver el estado actual del useReducer en tiempo real
##### Puedes modificar el searchQuery manualmente desde ahí para ver cómo reacciona la UI sin escribir.

Profiler: rendimiento para el hardware
##### Profiler te dice qué componentes se están re-renderizando y por qué.
Profiler te dice qué componentes se están re-renderizando y por qué.
Si ves que al escribir una letra se renderiza toda la página, es hora de usar memo.


### 2. Application en DevTools: persistencia

Como tu app depende de la persistencia:

Ve a Application > Local Storage.
aquí puedes borrar manualmente entradas
##### editar el JSON de las tareas o ver si el storageService está guardando duplicados
Es mucho más rápido que limpiar todo el historial.


### 3. Sentencia debugger:

1. Coloca la palabra debugger; dentro de tu taskReducer o en el useMemo de filtrado
2. Abre la consola del navegador y realiza una acción
3. El navegador congelará la ejecución del código en esa línea exacta.
Podrás ver el valor de todas las variables en ese instante preciso antes de que ocurra el error


### 4. ESLint + Accesibilidad

Verificar archivo por archivo de forma automatizada, ESLint es el estándar

Añadir plugin de accesibilidad: 

`eslint-plugin-jsx-a11y`:
avisará si a tu buscador le falta un aria-label
o si un icono no es descriptivo para lectores de pantalla.

Comando para Auditar proyecto:

package.json

`"lint": "eslint src --ext .ts,.tsx"`


### 5. Lighthouse (Chrome/Chromium):

Corre un reporte de Lighthouse (pestaña en DevTools).

Fíjate en la métrica de Performance.
Si el puntaje es bajo, quizás el blur es demasiado alto para equipos modestos
Te dará consejos específicos sobre cómo optimizar el renderizado.


### 6. SonarLint (nvim, vs)

Te marca "Cognitive Complexity" (cuando una función es tan difícil de leer que es propensa a bugs).

Detecta "Code Smells" (patrones que funcionan pero son mala práctica).


### 7. Rubber Duck Debugging

explícale a alguien línea por línea qué crees que está haciendo tu código
El 90% de las veces, encontrarás el error antes de terminar la explicación.



## 4. Terminal

### 1. Biome

Linter y Formatter en una sola herramienta
Detecta errores de lógica, variables no usadas y formatea el código siguiendo estándares profesionales

`npx @biomejs/biome check --apply ./src`
flag --apply arregla los errores automáticamente


### 2. Knip

En Clean Architecture, solemos crear muchos archivos y a veces olvidamos borrar lo que ya no usamos
Encuentra archivos no utilizados, dependencias que sobran en tu package.json y exports que nadie está importando

`npx knip`

Ej: verificar si ese viejo FilterPanel o alguna función de task.logic.ts quedó huérfana.


### 3. Stylelint

ESLint no suele mirar dentro de las template literals de CSS. Stylelint sí lo hace.

Evita errores en tu CSS, como unidades mal escritas, selectores duplicados o propiedades que no existen

Con el plugin `stylelint-config-standard-styled-components`.

Ejecutar:

```
npx stylelint "**/*.styles.ts"
```


### 4. Depcheck

Si instalamos paquetes para probar algo
como una librería de iconos o un motor matemático
se quedan ahí ocupando espacio

Analiza tus importaciones y te dice exactamente qué librerías del package.json no se están usando en ningún archivo

`npx depcheck`


### 5. Cspell: Corrector ortográfico

Un searchQuerry (con doble 'r') puede romper tu lógica si no te das cuenta.

Revisa que no haya faltas de ortografía en tus variables, comentarios y strings

`npx cspell "src/**/*.ts"`



# ESLint

1. npx: ejecución directa

Auditar todo el proyecto:
`npx eslint src/`

Auditar y corregir automáticamente (Auto-fix):
arreglará por ti problemas de formato, comillas, punto y coma y algunas variables no usadas
`npx eslint src/ --fix`

Auditar extensiones específicas:
`npx eslint "src/**/*.{ts,tsx}"`
para enfocarte solo en tus componentes o lógica de dominio


2. Comandos de Inicialización y Gestión

Configurar ESLint desde cero:
Si clonas un proyecto nuevo o quieres resetear tu configuración actual
lanza un asistente interactivo:
`npm init @eslint/config`

Verificar la versión instalada:
`npx eslint -v`


3. package.json: scripts
Evitar rutas largas cada vez
```
"scripts": {
  "lint": "eslint src --ext .ts,.tsx",
  "lint:fix": "eslint src --ext .ts,.tsx --fix"
}
```

En tu terminal solo tendrías que ejecutar:
`npm run lint` (Para ver errores).
`npm run lint:fix` (Para limpiar el código).


4. Flags debugg

`--quiet`:
Muestra solo los errores y oculta las advertencias (warnings).
Ideal para cuando tienes demasiadas alertas de estilo y solo quieres ver lo que rompe la app.

```
npx eslint src/ --quiet
```


`--format`:
Cambia cómo se presentan los errores en la terminal
El formato table es muy limpio para leer en terminales pequeñas

```
npx eslint src/ --format table
```


`--max-warnings`:
Define un límite de advertencias permitidas
Si el código supera ese número, el comando falla
útil para procesos de integración continua

```
npx eslint src/ --max-warnings 10
```



# Prettier

Formateo de estilo visual (espacios, comillas, saltos de línea) sea idéntico en todos tus archivos
vital para que al abrir archivos de diferentes capas (core, hooks, components), la lectura sea fluida y consistente.

Intalación:

`npm install --save-dev prettier eslint-config-prettier`


Crear dos archivos para que el sistema sepa cómo quieres que se vea tu código


archivo .prettierrc (Las reglas):
define el "estilo" de tu código

```
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "bracketSpacing": true,
  "arrowParens": "always"
}
```


archivo .prettierignore: no tocar
No quieres que Prettier intente formatear archivos pesados o autogenerados
Crearlo:

```
node_modules
dist
build
coverage
.next
package-lock.json
public
```

Sincronización con ESLint
Para que ESLint no se queje de los espacios que Prettier va a poner
abre tu archivo de configuración de ESLint (.eslintrc.json o eslint.config.js) y añade "prettier"

al final de extends:

```
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier" 
  ]
}
```

Automatización: package.json scripts
limpiar todo tu proyecto con un solo comando de terminal

```
"scripts": {
  "format": "prettier --write \"src/**/*.{ts,tsx,css,md}\"",
  "format:check": "prettier --check \"src/**/*.{ts,tsx,css,md}\"",
  "lint": "eslint src --ext .ts,.tsx",
  "check-all": "npm run format && npm run lint"
}
```


1. Comandos de Verificación y Aplicación

Verificar si los archivos cumplen el formato:
solo te avisa qué archivos "están mal", pero no los toca
`npx prettier --check .`

Formatear archivos: el más usado
sobreescribe los archivos con el formato correcto.
`npx prettier --write .`

Formatear un archivo o carpeta específica
Para no procesar todo el proyecto si solo estás trabajando en la lógica de dominio
`npx prettier --write src/core/task.logic.ts`


2. package.json: scripts

```
"scripts": {
  "format": "prettier --write \"src/**/*.{ts,tsx,css,md}\"",
  "format:check": "prettier --check \"src/**/*.{ts,tsx,css,md}\""
}
```
npm run format


3. Flags

`--list-different` o `-l`:
Similar a --check
pero solo imprime los nombres de los archivos que necesitan un ajuste
`npx prettier -l`


`--no-config`:
formatear algo rápido sin que Prettier busque
.prettierrc.

```
npx prettier --write src/ --no-config --semi false
```


`--ignore-path`:
##### no toque archivos que ya están ignorados por git (como node_modules o dist)
```
npx prettier --write . --ignore-path .gitignore
```


4. ESLint vs Prettier
Es muy común que ambos choquen
si uno quiere comillas simples y el otro dobles


ESLint se encarga de las reglas de código
(variables no usadas, lógica errónea).

Prettier se encarga de la estética
(espacios, comas, indentación).


Archivo .prettierrc: config
archivo en la raíz de tu proyecto para que Prettier sepa exactamente cómo quieres tu estilo
```
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```


Enfoque
Errores de ejecución y malas prácticas.
Estética y consistencia visual.

Configuración
Muy compleja (cientos de reglas que pueden chocar).
Mínima (apenas 10-15 opciones).

Velocidad
Más lento (tiene que analizar el árbol lógico).
Mucho más rápido (solo le importa el texto).



# eslint-config-prettier

Desactiva todas las reglas de ESLint que son innecesarias o que pueden entrar en conflicto con Prettier

`npm install --save-dev eslint-config-prettier`


Editar tu archivo de configuración de ESLint
`.eslintrc.json`,  `.eslintrc.js` o `eslint.config.js` (para la versión moderna)

Solo añadir "prettier" al final del array de extends.
El orden es vital: lo último siempre tiene la prioridad.

En .eslintrc.json:
```
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier" // Siempre al final
  ]
}
```

En eslint.config.js:
```
const eslintConfigPrettier = require('eslint-config-prettier');

module.exports = [
  // ... tus otras configuraciones
  eslintConfigPrettier, // Se añade al final de la exportación
];
```


Verificación:
si hay alguna regla que todavía se está "peleando" con Prettier
`npx eslint-config-prettier src/core/task.logic.ts`

Si no imprime nada: Todo está perfecto, no hay conflictos.

Si imprime una lista de reglas: Significa que esas reglas de ESLint todavía están activas y chocan con Prettier

##### Gracias a eslint-config-prettier, ESLint solo te hablará cuando algo esté realmente mal en la lógica
ignorando por completo si pusiste una comilla simple o doble



# Styled Components

sintaxis de CSS: errores de escritura
lógica de TypeScript: que existan las props pasadas


1. Stylelint
ESLint y Prettier son ciegos a lo que pasa dentro de las comillas invertidas (backticks `)
Para ellos, eso es solo un string largo
Stylelint es el encargado de entrar ahí y validar el CSS.

chequea: Propiedades inexistentes, falta de puntos y coma dentro del template literal, o colores mal escritos.

`npm install --save-dev stylelint stylelint-config-standard-styled-components`

config: .stylelintrc.json

```
{
  "extends": ["stylelint-config-standard-styled-components"]
}
```


2. Props: TypeScript
Quien se asegura de que, si tu componente Button espera una prop variant
no le pases un color por error

valida que la interfaz que definiste para el styled component coincida con el uso.

```
interface StyledButtonProps {
  $isVisible: boolean; // El $ evita que la prop se mande al DOM
}

const StyledButton = styled.button<StyledButtonProps>`
  display: ${props => props.$isVisible ? 'block' : 'none'};
```


Formato: Prettier
Tiene soporte nativo para Styled Components
No necesita una librería extra para "leer" dentro de los backticks.

Si escribes el CSS todo en una sola línea o con indentación errática
Prettier lo re-ordenará para que se vea como CSS estándar y limpio
`npm run format`




# Reutilizar componentes en Styled

## !!! No aplica el estilo propio porque no estoy retornando/renderizando su styledinput, sino el componente Input

##### Problema: SearchInput.tsx importa Input pero no está aplicando su estilo, sino los del Input

Ej: 1rem porque eso es lo que el átomo Input tiene definido por defecto en su propio Input.styles.ts
Al renderizar <Input /> dentro de la molécula, el componente se queda con sus estilos base de átomo e ignora los de la molécula

### Extender Átomo: Para que la molécula pueda modificar el estilo del átomo

#### 1. Input.tsx debe ser capaz de recibir una clase de css externa

```
// src/components/atoms/Input/Input.tsx

interface InputProps {
  // ... tus otras props
  className?: string; // Agregamos esto
}

export const Input = ({
  className, // Lo recibimos
  // ... resto de props
}: InputProps) => {
  return (
    <StyledInput
      className={className} // Lo pasamos al componente de estilo
      // ... resto de props
    />
  );
};
```


#### 2. No crear input propio en styled de la molecula

Como `styled.input`
##### extender el componente Input
Ej: mantiene la lógica del átomo (como el aria-label) pero le aplica el padding necesario

```
// src/components/molecules/SearchInput/SearchInput.styles.ts
import styled from 'styled-components';
import { Input } from '../../atoms/Input/Input'; // Importamos el componente, no el estilo

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  pointer-events: none;
`;

// Extendemos el Átomo Input en lugar de crear un input nuevo
export const StyledSearchInput = styled(Input)`
  && { 
    padding-left: 36px; 
  }
`;
```

"Uso && para aumentar la especificidad de CSS y asegurarnos de que los 36px de la molécula ganen a los 1rem del átomo"

#### 3. Componente final

```
import { SearchContainer, SearchIcon, StyledSearchInput } from './SearchInput.styles';

export const SearchInput = ({ value, onChange, placeholder = 'buscar...' }) => {
  return (
    <SearchContainer>
      <SearchIcon>🔍</SearchIcon>
      <StyledSearchInput 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
      />
    </SearchContainer>
  );
};
```



# Rest props: aceptar cualquier prop





# Variantes en props y Variantes en estilo




# Semantica/accesibilidad vs Diseño visual




# Comunicación entre componentes

##### Para no incurrir en parches


## Flujo de comunicación entre componentes de UI

1. Átomo: Habla "DOM" (ChangeEvent).
2. Molécula: Debería ser bilingüe. Escucha "DOM" del átomo y habla "Datos" (string) al organismo.
3. Organismo: Habla "Datos" (string).



## Caso 2

Tanto Input como Checkbox usan React.ChangeEvent<HTMLInputElement>
porque, en el estándar de HTML, ambos son etiquetas <input>.
##### La diferencia es el atributo type.

En el Input: Nos interesa e.target.value (un string).
En el Checkbox: Nos interesa e.target.checked (un boolean).

El riesgo: Si un desarrollador se confunde y usa e.target.value en un checkbox, recibirá el string "on" (valor por defecto de HTML) en lugar de un booleano

### 1. Patrón "Value-Only" (Abstracción total)
##### Un átomo bien diseñado no debería exponer el evento del DOM a sus superiores. Debería exponer datos puros.

```
// ❌ Sucio: El padre debe conocer el evento
onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

// ✅ Limpio: El átomo traduce el evento antes de subirlo
onChange: (value: string) => void;   // Para el Input
onToggle: (checked: boolean) => void; // Para el Checkbox
```

### 2. Semántica en los Nombres de Props

##### No uses onChange para todo. El nombre de la prop debe describir la acción del usuario, no el evento del navegador

de búsqueda: onSearch o onQueryChange.
Checkbox: onToggle o onCheck.
Botón: onClick o onAction.


### 3. Principio de Menor Conocimiento (Law of Demeter)

Un componente Molecule u Organism no debería saber que existe un objeto llamado ChangeEvent.
Solo debería saber que "el nombre de la tarea cambió



# Naming

Componente | Prop Actual | "Prop ""Ultra-Limpia""" | Razón

`Input`
onChange
onChange
"Es un átomo, el estándar manda."

`SearchInput`
onChange
onQueryChange
"Especificas que lo que cambia es la ""consulta"" (query)."

`TaskSearch`
onChange
onFilterChange
Expresas que el cambio afecta al filtrado de la lista.

##### Si el componente es simple (como ahora): Mantén onChange. La simplicidad gana.

##### Si el componente crece: Cambia a nombres específicos (onQueryChange) para evitar confusiones al leer el código del padre.


## Estado vs. Intención

Característica | onChange | onSearch (u onEnter)

Naturaleza
"Sincronización: Es el ""ahora""."
"Acción: Es el ""ya está, haz algo""."

Frecuencia
Alta (con cada pulsación de tecla).
Baja (una sola vez al terminar).

Responsabilidad
Mantener el estado visual del input.
"Ejecutar lógica de negocio (filtrar, llamar a una API)."

Costo
Barato (solo actualiza un string).
"Potencialmente caro (re-renderiza listas, procesos de búsqueda)."



# Smart vs Dumb en styled components

Patrón "Custom Input".
responsabilidades totalmente opuestas: el cerebro (lógica) y la cara (estética).

1. HiddenCheckbox (El Cerebro)

Este es un elemento <input type="checkbox"> real. Aunque no se vea, es el que interactúa con el navegador y el sistema operativo.
Props Estándar (id, checked, onChange, disabled): Se pasan así porque el input las necesita para funcionar como un control de formulario legítimo.
Por qué el id: Para que el label sepa a quién "mandar" el click.
Por qué no tienen $: Porque son atributos HTML válidos. Queremos que el navegador los vea y los procese.

2. StyledCheckbox (La Cara)

Este es un simple <div> que hemos decorado para que parezca un checkbox (con tu efecto de cristal, bordes y el "tick").
$checked (Prop Transitoria): El símbolo $ es una convención de Styled Components. Significa: "Pasa este valor al CSS para cambiar el color, pero no lo escribas en el DOM".
Si pasaras checked={true} a un div, React se quejaría en la consola: "Warning: React does not recognize the 'checked' prop on a DOM element". El $ evita ese ruido.
aria-hidden="true": Es por pura Accesibilidad (A11y). Como el HiddenCheckbox ya le dice al lector de pantalla que hay un checkbox, no queremos que el lector encuentre este div y diga "Checkbox" otra vez. Es invisible para los ojos de la tecnología asistiva.
data-testid: Como este elemento es puramente visual, lo marcamos para que nuestros tests de Vitest puedan encontrarlo fácilmente y verificar si el color de fondo es el correcto

Porque si mañana decides cambiar el diseño (por ejemplo, pasar de un cuadrado a un interruptor tipo switch), no tienes que tocar la lógica. Solo cambias el CSS de StyledCheckbox.
El "cerebro" sigue siendo el mismo input de siempre, lo que garantiza que tu aplicación sea robusta y fácil de mantener.


# visibility css

```
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
```

visible y hidden: palabras clave nativas de CSS.
Específicamente, son los valores de la propiedad visibility

propiedad que controla si un elemento es visible o no, pero con una diferencia técnica fundamental respecto a display: none:

visible (Default): El elemento se ve y se puede interactuar con él.
hidden: El elemento es invisible (como un fantasma), pero sigue ocupando su espacio en el layout.

    

# Aria Role: valores



# Atributo as y sus valores: Styled Components. Flexibilidad



# createdAt: Date.now(): uso



# Crecimiento de los datos/entidad

En useTasks, el useEffect guarda en el storage cada vez que state.tasks cambia
Si tasks es muy grande; Todo List normal (menos de 1000 tareas)
en hard moderado; el delay de escritura en disco será imperceptible,
pero es algo a tener en cuenta si el JSON crece mucho

Si state.tasks pasa de 10 a 10,000 elementos,
el cuello de botella se desplaza de la CPU al I/O
(Entrada/Salida) y al hilo principal de ejecución.

1. Control de I/O: Debouncing (Escritura Diferida)
Actualmente, cada vez que marcas un checkbox, el useEffect dispara una escritura a disco
Si el usuario escribe rápido o hay procesos en ráfaga, saturas el bus de datos.

Concepto: En lugar de "Guardar siempre que cambie", aplicamos "Guardar cuando el usuario deje de hacer cambios por X milisegundos".
Beneficio: Agrupamos 20 operaciones de escritura en una sola, ahorrando ciclos de CPU y vida útil del SSD/Disco

2. Estructura de Datos: Normalización del Estado
usas un Array
Buscar un elemento específico o actualizarlo en un array de 10,000 elementos es una operación O(n) (tienes que recorrerlo).

Concepto: Cambiar el Array por un Mapa (Diccionario) indexado por ID.

Beneficio: Las actualizaciones pasan a ser O(1) (instantáneas), sin importar si tienes 10 o 1 millón de tareas

El filtrado sigue siendo necesario, pero la gestión interna del estado se vuelve trivial para el procesador.

3. Renderizado: Virtualización (Windowing)
El DOM es lo más lento de una web.
Renderizar 5,000 FilterItem mataría el rendimiento de tu navegador.

Concepto: Solo "dibujar" en el HTML lo que cabe en la pantalla (ej. las 10 tareas visibles).
A medida que el usuario hace scroll, se reciclan los elementos del DOM.

Beneficio: El navegador siempre gestiona una cantidad constante de nodos, manteniendo el uso de RAM bajo y estable

4. Procesamiento: Web Workers (Hilos Secundarios)
JavaScript es monohilo.
Si el filtrado de 10,000 tareas tarda 200ms, la interfaz se "congela" durante ese tiempo
adiós a la fluidez de las animaciones

Concepto: Mover la lógica pesada (el .filter()
y el .includes()) a un Web Worker.
Es como crear un proceso hijo

Beneficio: El hilo principal (UI) queda libre para las animaciones y la interacción,
mientras el "cerebro" procesa los datos en segundo plano

5. Almacenamiento: De LocalStorage a IndexedDB
LocalStorage es síncrono y bloqueante.
Si guardas un JSON de 5MB, el navegador se detiene por completo hasta que termina de escribir

Concepto: Usar IndexedDB, que es una base de datos transaccional y asíncrona dentro del navegador.

Beneficio: Las lecturas y escrituras no bloquean la interfaz y permiten manejar volúmenes de datos que harían colapsar al LocalStorage

6. Cambios en la arquitectura

En el Reducer: Cambiar la estructura de tasks de [] a {}.
En el Hook: Implementar un temporizador (Debounce) en el useEffect.
En la UI: Implementar una lista virtualizada para el TodoList.
En el Servicio: Migrar la lógica de storageService a métodos asíncronos (async/await).



# Number vs Date

Característica | number (Epoch/Timestamp) | Date (Objeto Nativo)

Serialización: Excelente. Se mantiene como número en JSON sin cambios.,Problema. Al convertir a JSON se vuelve un string.

Rendimiento: Muy ligero. Es un valor primitivo.,Más pesado. Es un objeto con métodos internos.

Ordenación: Ultra simple: a.createdAt−b.createdAt.,Requiere convertir a valor: a.getTime()−b.getTime().

Legibilidad: Mala para humanos (1714262460000).,Buena en consola o depuración.

Inmutabilidad: Inmutable por naturaleza.,Mutable (peligroso si se usa .setFullYear()).


## Ventajas/desventajas number

number (Timestamp).
Las razones de peso:

El problema del "Hydration" (JSON):
Cuando recibas tus tareas de una API o las guardes en localStorage, el objeto Date se convertirá automáticamente en un string (ISO 8601).

Si tu interfaz dice que createdAt es Date, pero recibes un string de la base de datos, TypeScript te dirá que todo está bien, pero tu código fallará al intentar llamar a .getFullYear().

Usar number evita este "engaño", ya que el número sobrevive intacto al ciclo de JSON.stringify y JSON.parse.

Facilidad en el Estado (Redux/Zustand):
Si decides usar un gestor de estado global, se recomienda que el estado sea serializable. Los objetos Date no lo son, lo que complica herramientas como el "Time Travel Debugging".

Lógica de Negocio:
Calcular si una tarea es de "hoy" o de "ayer" es más rápido matemáticamente con milisegundos que instanciando objetos.
    


# Mapeo, optimización para el render

Una pequeña optimización para el render

En TodoList.tsx, estás haciendo el mapeo así:
{todos.map((todo) => (

Si tu lista llegara a tener cientos de elementos (poco probable en una lista de tareas, pero posible), podrías notar un pequeño "lag" al escribir en el buscador. Esto es porque cada tecla en el input causa un re-render de toda la lista.

Como ya usamos Delegación y las funciones son estables, podrías envolver el componente TodoItem en un React.memo. De esa forma, al filtrar, React solo tocará los items que realmente cambian de posición o estado



# Test de Integración UI

La comunicación en TodoPage es el corazón de la aplicación
Aquí, el componente actúa como un Orquestador (Smart Component)
mientras que TaskSidebar y los demás son Presentacionales (Dumb Components).

hook useTasks centraliza el estado
permitiendo que la página solo se encargue de "repartir" las funciones y los datos


## 1. TodoPage & TaskSidebar

verificar que la comunicación
necesitamos un test de integración que compruebe:
que los cambios en el Sidebar afectan realmente al estado global

##### mockearemos el hook useTasks para tener control total sobre qué datos entran y qué funciones se disparan

```
import { render, screen, fireEvent } from '../../../test/utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TodoPage } from './TodoPage';
import * as useTasksHook from '../../../hooks/useTasks';

// Mockeamos el hook para simular diferentes estados
vi.mock('../../../hooks/useTasks');

describe('Page: TodoPage - Sidebar Communication', () => {
  const mockSetFilter = vi.fn();
  const mockSetSearchQuery = vi.fn();
  const mockClearCompleted = vi.fn();

  const mockStats = {
    total: 5,
    pending: 3,
    completed: 2,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    
    // Configuración por defecto del mock
    (useTasksHook.useTasks as any).mockReturnValue({
      tasks: [],
      add: vi.fn(),
      toggle: vi.fn(),
      remove: vi.fn(),
      filter: 'all',
      setFilter: mockSetFilter,
      searchQuery: '',
      setSearchQuery: mockSetSearchQuery,
      stats: mockStats,
      clearCompleted: mockClearCompleted,
    });
  });

  it('should update search query when typing in Sidebar search input', () => {
    render(<TodoPage />);
    
    const searchInput = screen.getByPlaceholderText(/buscar tareas/i);
    fireEvent.change(searchInput, { target: { value: 'Aprender React' } });

    expect(mockSetSearchQuery).toHaveBeenCalledWith('Aprender React');
  });

  it('should change filter when clicking on category in Sidebar', () => {
    render(<TodoPage />);
    
    // Buscamos el botón de la categoría "Pendientes"
    // Nota: Como usamos Typography como label, el texto es accesible
    const pendingCategory = screen.getByText(/pendientes/i);
    fireEvent.click(pendingCategory);

    expect(mockSetFilter).toHaveBeenCalledWith('pending');
  });

  it('should show the correct task counts in Sidebar categories', () => {
    render(<TodoPage />);
    
    // Verificamos que los counts de los stats se pasen correctamente
    expect(screen.getByText(mockStats.total.toString())).toBeInTheDocument();
    expect(screen.getByText(mockStats.pending.toString())).toBeInTheDocument();
    expect(screen.getByText(mockStats.completed.toString())).toBeInTheDocument();
  });

  it('should call clearCompleted when clicking the action button in Sidebar', () => {
    render(<TodoPage />);
    
    const clearButton = screen.getByText(/borrar completadas/i);
    fireEvent.click(clearButton);

    expect(mockClearCompleted).toHaveBeenCalledTimes(1);
  });
});
```

1. Estabilidad con useMemo
En TodoPage, has envuelto categories en un useMemo que depende de stats

clave: Cada vez que el componente se re-renderiza, si stats no ha cambiado
(por ejemplo, si estás escribiendo en el input de tareas),
la referencia del array categories sigue siendo la misma.
Esto evita que TaskSidebar y su hijo CategoryFilter se re-rendericen innecesariamente

2. patrón "Lifting State Up"
La búsqueda y el filtrado viven en el hook useTasks
pero se controlan desde el Sidebar

Al pasarle setSearchQuery y setFilter como callbacks
estás aplicando una comunicación unidireccional limpia:

Hacia abajo: Props (searchQuery, filter, categories).
Hacia arriba: Eventos (onSearchChange, onFilterChange).

3. botón "Borrar completadas"
TaskSidebar se mantiene puro
solo se encarga de buscar y filtrar
La lógica de acciones globales se queda en la Página
que es donde reside la autoridad del dominio.



## 2. TodoPage -> TodoList

Al pasarle a TodoList las tareas ya filtradas y un booleano isSearching
"máquina de estados" visual
que no necesita entender por qué la lista está vacía
solo necesita saber cómo reaccionar.

1. "Casting" de lógica en el Page
línea isSearching={searchQuery.trim().length > 0}
resolviendo una ambigüedad semántica antes de que llegue al componente

Sin esto: TodoList tendría que recibir el string searchQuery y hacer el .trim().length él mismo

Si mañana decides que la búsqueda solo se activa después de 3 caracteres
lo cambias en la Page y el Organismo ni se entera
él solo sigue obedeciendo a su booleano.

2. Propagación Limpia (Delegación)
onToggleTodo={toggle} y onDeleteTodo={remove}
pasan directamente del hook al hijo
No hay envolturas innecesarias

Esto mantiene la estabilidad referencial: si el hook usa useCallback
TodoList no se re-renderiza a menos que las tareas cambien.

3. UX del Empty State
Separar el estado vacío en "Normal" vs "Búsqueda"
es un detalle de calidad profesional
Ayuda al usuario a entender si el sistema falló
o si simplemente no hay datos que coincidan con su criterio.

Integración: TodoPage -> TodoList
test en TodoPage verifica que la comunicación de los estados vacíos sea correcta:

```
import { render, screen } from '../../../test/utils';
import { describe, it, expect, vi } from 'vitest';
import { TodoPage } from './TodoPage';
import * as useTasksHook from '../../../hooks/useTasks';

vi.mock('../../../hooks/useTasks');

describe('TodoPage <-> TodoList Integration', () => {
  it('should pass isSearching=true to TodoList when there is a search query', () => {
    // Simulamos que el hook devuelve una búsqueda activa pero sin resultados
    (useTasksHook.useTasks as any).mockReturnValue({
      tasks: [], // Lista vacía
      searchQuery: 'Tarea inexistente', // Hay búsqueda
      stats: { total: 0, pending: 0, completed: 0 },
      filter: 'all',
      // ... otros mocks de funciones
    });

    render(<TodoPage />);

    // Si la comunicación es correcta, TodoList debe mostrar el estado de búsqueda
    expect(screen.getByText(/no hay coincidencias/i)).toBeInTheDocument();
    expect(screen.getByText(/🔍/)).toBeInTheDocument();
  });

  it('should pass isSearching=false to TodoList when search query is empty', () => {
    (useTasksHook.useTasks as any).mockReturnValue({
      tasks: [],
      searchQuery: '', // Sin búsqueda
      stats: { total: 0, pending: 0, completed: 0 },
      filter: 'all',
    });

    render(<TodoPage />);

    // Debe mostrar el estado de bienvenida normal
    expect(screen.getByText(/no hay tareas pendientes/i)).toBeInTheDocument();
    expect(screen.getByText(/📝/)).toBeInTheDocument();
  });
});
```

Test con Main:

```
import { render, screen, within } from '../../../test/utils'; // 👈 Importamos within
import { describe, it, expect, vi } from 'vitest';
import { TodoPage } from './TodoPage';
import * as useTasksHook from '../../../hooks/useTasks';

vi.mock('../../../hooks/useTasks');

describe('TodoPage <-> TodoList Integration', () => {
  // Aplicamos lo aprendido: Eliminamos el 'any'
  const useTasksMock = vi.mocked(useTasksHook.useTasks);

  it('should pass isSearching=true to TodoList when there is a search query', () => {
    useTasksMock.mockReturnValue({
      tasks: [],
      searchQuery: 'Tarea inexistente',
      stats: { total: 0, pending: 0, completed: 0 },
      filter: 'all',
      setSearchQuery: vi.fn(),
      setFilter: vi.fn(),
      add: vi.fn(),
      toggle: vi.fn(),
      remove: vi.fn(),
      clearCompleted: vi.fn(),
    });

    render(<TodoPage />);

    // 1. Identificamos la región de la lista (nuestro organismo TodoList)
    // Usamos el rol 'list' o buscamos por un texto que sepamos que está ahí.
    // Una forma elegante es buscar por el contenedor que envuelve la lista.
    const mainContent = screen.getByRole('main'); 

    // 2. Buscamos el icono y el texto SOLO dentro del contenido principal
    expect(within(mainContent).getByText(/no hay coincidencias/i)).toBeInTheDocument();
    expect(within(mainContent).getByText('🔍')).toBeInTheDocument();
  });

  it('should pass isSearching=false to TodoList when search query is empty', () => {
    useTasksMock.mockReturnValue({
      tasks: [],
      searchQuery: '',
      stats: { total: 0, pending: 0, completed: 0 },
      filter: 'all',
      // ... (restantes mocks igual que arriba)
    });

    render(<TodoPage />);

    const mainContent = screen.getByRole('main');

    // Para el texto "No hay tareas pendientes", usamos regex de coincidencia exacta
    // para que no choque con "¡Estás al día! No hay tareas pendientes" del Header.
    expect(within(mainContent).getByText(/^no hay tareas pendientes$/i)).toBeInTheDocument();
    expect(within(mainContent).getByText('📝')).toBeInTheDocument();
  });
});
```


Test con within y un div adicional

```
import { render, screen, within } from '../../../../test/utils';
import { describe, it, expect, vi } from 'vitest';
import { TodoPage } from '../TodoPage';
import * as useTasksHook from '../../../../hooks/useTasks';

vi.mock('../../../../hooks/useTasks');

describe('TodoPage <-> TodoList Integration', () => {
  const useTasksMock = vi.mocked(useTasksHook.useTasks);

  it('should pass isSearching=true to TodoList when there is a search query', () => {
    // Simulamos que el hook devuelve una búsqueda activa pero sin resultados
    useTasksMock.mockReturnValue({
      tasks: [],
      searchQuery: 'Tarea inexistente',
      stats: { total: 0, pending: 0, completed: 0 },
      filter: 'all',
      setSearchQuery: vi.fn(),
      setFilter: vi.fn(),
      add: vi.fn(),
      toggle: vi.fn(),
      remove: vi.fn(),
      clearCompleted: vi.fn(),
    });
    render(<TodoPage />);

    // 1. Buscamos el contenedor específico por Test ID
    const listContainer = screen.getByTestId('todo-list-container');

    // 2. Verificamos que los elementos del EmptyState de búsqueda estén ahí
    expect(within(listContainer).getByText(/no hay coincidencias/i)).toBeInTheDocument();
    expect(within(listContainer).getByText('🔍')).toBeInTheDocument();
  });

  it('should pass isSearching=false to TodoList when search query is empty', () => {
    useTasksMock.mockReturnValue({
      tasks: [],
      searchQuery: '',
      stats: { total: 0, pending: 0, completed: 0 },
      filter: 'all',
      setSearchQuery: vi.fn(),
      setFilter: vi.fn(),
      add: vi.fn(),
      toggle: vi.fn(),
      remove: vi.fn(),
      clearCompleted: vi.fn(),
    });

    render(<TodoPage />);

    const listContainer = screen.getByTestId('todo-list-container');

    // Para el texto "No hay tareas pendientes", usamos regex de coincidencia exacta
    // para que no choque con "¡Estás al día! No hay tareas pendientes" del Header.
    expect(within(listContainer).getByText(/^no hay tareas pendientes$/i)).toBeInTheDocument();
    expect(within(listContainer).getByText('📝')).toBeInTheDocument();
  });
});
```

Adiós al error de múltiples "main":
Al no usar getByRole('main'), no importa si tu arquitectura tiene uno, dos o ningún elemento main.
El test va directo al grano.

Encapsulamiento:
Estás probando que la página le pasa la prop isSearching correctamente a la lista
Si la lista recibe esa prop, renderiza el EmptyState correspondiente dentro de todo-list-container


Cuando usas screen, buscas en el DOM global
Cuando usas within(elemento), estás creando una instancia de búsqueda limitada a los hijos de ese elemento específico

Flujo:
1. Renderiza TodoPage.
2. Localiza el div con data-testid="todo-list-container".
3. within toma ese div.
4. Busca "🔍" solo dentro de ese div.


 
## 3. TodoPage <-> TodoInput

cierra el ciclo de vida de los datos: la entrada
Mientras que el sidebar filtra y la lista representa
##### TodoInput es el encargado de "inyectar" nueva información al sistema.
##### Aquí la comunicación sigue el patrón de Flujo de Datos Inverso (Inverse Data Flow).

El padre entrega una "promesa" de acción (add) y el hijo la ejecuta cuando tiene los datos listos

1. Responsabilidades
Sin estados intermedios molestando al padre

TodoPage no sabe si el usuario está escribiendo
borrando o si dejó espacios en blanco

Solo se entera cuando hay un texto válido listo para ser procesado

Hijo: Gestiona el useState local del input y la validación (trim).

Padre: Recibe el string limpio y lo transforma en una entidad Task dentro del hook.

2. UX y Accesibilidad (A11y)
e.preventDefault(): Crucial para que tu aplicación no se recargue
Botón disabled: Evitas que el usuario dispare eventos innecesarios si no hay texto
aria-label: Permite que los lectores de pantalla identifiquen el propósito del formulario

Integración: TodoPage <-> TodoInput

```
import { render, screen, fireEvent } from '../../../test/utils';
import { describe, it, expect, vi } from 'vitest';
import { TodoPage } from './TodoPage';
import * as useTasksHook from '../../../hooks/useTasks';

vi.mock('../../../hooks/useTasks');

describe('TodoPage <-> TodoInput Communication', () => {
  const mockAdd = vi.fn();

  it('should call the add function from hook when form is submitted', () => {
    (useTasksHook.useTasks as any).mockReturnValue({
      tasks: [],
      add: mockAdd,
      searchQuery: '',
      stats: { total: 0, pending: 0, completed: 0 },
      filter: 'all',
      setSearchQuery: vi.fn(),
    });

    render(<TodoPage />);

    const input = screen.getByPlaceholderText(/¿qué hay que hacer hoy?/i);
    const button = screen.getByRole('button', { name: /añadir/i });

    // 1. Escribimos en el input
    fireEvent.change(input, { target: { value: 'Nueva tarea de prueba' } });
    
    // 2. Click en añadir
    fireEvent.click(button);

    // 3. Verificamos que la comunicación llegó al "cerebro" (hook)
    expect(mockAdd).toHaveBeenCalledWith('Nueva tarea de prueba');
    
    // 4. Verificamos que el input se limpió (UX interno del componente)
    expect(input).toHaveValue('');
  });
});
```

Arquitectura Limpia:
TodoPage pasas la función directamente: onAdd={add}.
posible porque las firmas coinciden perfectamente

add (en el hook) espera un string.
onAdd (en el componente) envía un string.

Si en el futuro add necesitara más parámetros (como una categoría o prioridad)
solo tendrías que ajustar la lógica interna de TodoInput
o de la página, sin romper el contrato de comunicación.




# Test Real vs Integración

Real:

estrategia, confianza y el coste de ejecución

```
import { render, screen, fireEvent } from '../../../test/utils';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TodoPage } from './TodoPage';

describe('Page: TodoPage', () => {
  // Limpiamos el localStorage antes de cada test para evitar contaminación
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('should allow a user to add a new todo', () => {
    render(<TodoPage />);
    
    const input = screen.getByPlaceholderText(/¿qué hay que hacer hoy\?/i);
    const addButton = screen.getByRole('button', { name: /añadir/i });

    // 1. Escribimos
    fireEvent.change(input, { target: { value: 'Comprar café' } });
    // 2. Click en añadir
    fireEvent.click(addButton);

    // 3. Verificamos que aparezca en la lista
    expect(screen.getByText('Comprar café')).toBeInTheDocument();
    // 4. Verificamos que el input se haya limpiado
    expect(input).toHaveValue('');
  });

  it('should toggle a todo status when clicked', () => {
    render(<TodoPage />);
    
    // Añadimos una tarea primero
    const input = screen.getByPlaceholderText(/¿qué hay que hacer hoy\?/i);
    fireEvent.change(input, { target: { value: 'Tarea para completar' } });
    fireEvent.click(screen.getByRole('button', { name: /añadir/i }));

    const checkbox = screen.getByRole('checkbox');
    const text = screen.getByText('Tarea para completar');

    // 1. Marcamos como completada
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    
    // Verificamos el estilo (que viene de la molécula TodoItem)
    expect(text.parentElement).toHaveStyle({ 'text-decoration': 'line-through' });

    // 2. Desmarcamos
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('should remove a todo from the list', () => {
    render(<TodoPage />);
    
    // Añadimos
    fireEvent.change(screen.getByPlaceholderText(/¿qué hay que hacer hoy\?/i), { 
      target: { value: 'Tarea efímera' } 
    });
    fireEvent.click(screen.getByRole('button', { name: /añadir/i }));

    // Borramos
    const deleteButton = screen.getByLabelText(/eliminar tarea/i);
    fireEvent.click(deleteButton);

    // Verificamos que ya no esté
    expect(screen.queryByText('Tarea efímera')).not.toBeInTheDocument();
  });

  it('should persist and load todos from localStorage', () => {
    // 1. Simulamos datos ya existentes en localStorage
    const savedTodos = [
      { id: '123', text: 'Tarea persistida', completed: false }
    ];
    localStorage.setItem('liquid-glass-todos', JSON.stringify(savedTodos));

    render(<TodoPage />);

    // 2. Verificamos que la página los haya cargado al montar
    expect(screen.getByText('Tarea persistida')).toBeInTheDocument();
  });
});
```

Test Funcional o de Caja Negra
vs
Tests de Integración por Contrato.

1. hook: Real vs. Mock

real:
Está probando la página Y la lógica real del hook Y el localStorage
Si el hook tiene un bug, el test de la página falla.

mocked:
Aislamos la página del hook
No nos importa si el hook sabe guardar en disco o no
solo nos importa si la página le pasa el string correcto a la función add.

2. verdad de datos

real:
hace el trabajo para probar que algo se muestra
primero tienes que añadirlo simulando clicks
Esto hace que los tests sean más largos y dependientes entre sí.

mock:
"Forzamos" estados
Si queremos ver cómo se comporta la página cuando hay 100 tareas completadas
simplemente le decimos al mock: tasks: arrayDe100.
No tenemos que simular 100 clicks.

3. Persistencia y Efectos Secundarios

real: 
Verifica que localStorage funcione
genial para asegurar que el usuario no pierda sus datos
pero es un test más "pesado".

nuevos: Se centran en la interfaz de comunicación
No les importa el localStorage, les importa que el Sidebar y la Lista estén bien "cableados".


# e2e test ligero:

Mientras que los tests de integración que hicimos antes prueban los "cables",
este test prueba que la "corriente" realmente fluye por todo el circuito.

Estrategia: "The Reliable Smoke Test"

Sincronización de Entidad: Cambiamos text por content y completed por isCompleted.
Manejo de Fechas: Aunque el componente no muestre la fecha aún, el localStorage debe tener el campo createdAt como number para no romper el hook real.
Prioridad a la Accesibilidad: Usaremos los aria-labels y roles que añadimos (label, checkbox, button) para que el test sea más robusto y cercano a la realidad del usuario
Flujo Completo: Añadiremos un caso para la Búsqueda, ya que es una pieza clave de la nueva TodoPage

```
import { render, screen, fireEvent } from '../../../test/utils';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TodoPage } from './TodoPage';

// NOTA: Aquí NO mockeamos useTasks. Usamos la implementación real.

describe('Page: TodoPage (Functional)', () => {
  const STORAGE_KEY = 'liquid-glass-todos'; // Asegúrate que coincida con tu hook

  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('should allow a user to add a new task and see it in the list', () => {
    render(<TodoPage />);
    
    const input = screen.getByPlaceholderText(/¿qué hay que hacer hoy\?/i);
    const addButton = screen.getByRole('button', { name: /añadir/i });

    fireEvent.change(input, { target: { value: 'Aprender Vitest' } });
    fireEvent.click(addButton);

    // Verificamos con la nueva propiedad 'content'
    expect(screen.getByText('Aprender Vitest')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  it('should toggle task status and reflect changes in UI', () => {
    render(<TodoPage />);
    
    // Añadir tarea
    const input = screen.getByPlaceholderText(/¿qué hay que hacer hoy\?/i);
    fireEvent.change(input, { target: { value: 'Tarea para completar' } });
    fireEvent.click(screen.getByRole('button', { name: /añadir/i }));

    const checkbox = screen.getByRole('checkbox');
    
    // 1. Completar
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    
    // Verificamos que el texto tenga el estilo de completado (ahora vía props de Typography)
    const taskText = screen.getByText('Tarea para completar');
    expect(taskText).toHaveStyle({ 'text-decoration': 'line-through' });
  });

  it('should filter tasks when using the search bar in the Sidebar', () => {
    render(<TodoPage />);
    
    // Añadimos dos tareas
    const input = screen.getByPlaceholderText(/¿qué hay que hacer hoy\?/i);
    const addButton = screen.getByRole('button', { name: /añadir/i });

    fireEvent.change(input, { target: { value: 'Comprar leche' } });
    fireEvent.click(addButton);
    fireEvent.change(input, { target: { value: 'Comprar pan' } });
    fireEvent.click(addButton);

    // Usamos el buscador del Sidebar
    const searchInput = screen.getByPlaceholderText(/buscar tareas/i);
    fireEvent.change(searchInput, { target: { value: 'leche' } });

    // Debería ver 'leche' pero no 'pan'
    expect(screen.getByText('Comprar leche')).toBeInTheDocument();
    expect(screen.queryByText('Comprar pan')).not.toBeInTheDocument();
  });

  it('should persist tasks in localStorage with the correct entity structure', () => {
    // 1. Simulamos datos con la nueva estructura Task
    const savedTasks = [
      { 
        id: '1', 
        content: 'Tarea desde el pasado', 
        isCompleted: false, 
        createdAt: Date.now() 
      }
    ];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedTasks));

    render(<TodoPage />);

    expect(screen.getByText('Tarea desde el pasado')).toBeInTheDocument();
  });

  it('should remove a task when the delete button is clicked', () => {
    render(<TodoPage />);
    
    // Añadir
    fireEvent.change(screen.getByPlaceholderText(/¿qué hay que hacer hoy\?/i), { 
      target: { value: 'Tarea a eliminar' } 
    });
    fireEvent.click(screen.getByRole('button', { name: /añadir/i }));

    // Borrar usando el nuevo aria-label que añadimos en TodoItem
    const deleteButton = screen.getByLabelText(/eliminar tarea/i);
    fireEvent.click(deleteButton);

    expect(screen.queryByText('Tarea a eliminar')).not.toBeInTheDocument();
  });
});
```




# Click areas: Activación y desactivación del click

1. Qué hace que funcione la activación
2. Qué hace que funcione la desactivación
3. Áreas del click 


## 1. Activación: Chain of Command

La activación de un click no es un evento aislado:
sino un viaje a través de la jerarquía de tu aplicación

tres pilares conceptuales:

1. Event Propagation (Propagación):
Cuando haces click en un texto dentro de un botón
el navegador no solo registra el click en el texto.

El evento "viaja" hacia arriba (Bubbling) avisando a cada padre
Si el padre tiene un "oído" (handler) puesto, se activa.

2. Event Targeting:
El navegador identifica exactamente quién recibió el impacto (el target)
y quién está procesando la orden (el currentTarget).
La activación exitosa ocurre cuando estos dos coinciden o cuando la comunicación entre ellos es fluida.

3. Interactive Roles: 
Los elementos tienen "personalidades".
Un button o un a nacen preparados para ser activados
Un div o un span son, por defecto, inertes.
La activación funciona cuando el elemento tiene la "conciencia" de ser interactivo.


## 2. Desactivación: Invisible Walls

A veces, el click simplemente "muere" antes de llegar a su destino
Los motivos suelen ser:

1. Pointer Events (CSS): Es el interruptor maestro
Si un elemento tiene pointer-events: none, se vuelve un fantasma
el click lo atraviesa como si no existiera y golpea lo que haya detrás.

2. Stoppage (Stop Propagation): Es cuando un hijo le dice al evento
De aquí no pasas".
Si haces click en el icono de "Eliminar" dentro de una fila
queremos que se borre la tarea, pero no que se abra el detalle de la tarea
Si no detenemos la propagación, ambos se activarían.

3. Overlays & Z-Index:
A menudo, un área transparente (un div vacío, un pseudo-elemento :before)
está físicamente encima de nuestro botón
Visualmente ves el botón, pero funcionalmente estás golpeando una pared de cristal invisible.

4. Disabled State:
A nivel lógico, el componente decide ignorar la orden
El evento llega, el handler se ejecuta, pero la primera línea dice: if (disabled) return;.
El usuario percibe una "desactivación", aunque técnicamente el click sí ocurrió.


## 3. Áreas del click: Hitbox

concepto más puramente visual y ergonómico
El área que el usuario cree que puede clickear frente al área que realmente responde

1. Padding vs. Margin:
Esta es la causa número uno de frustración
El Padding expande el área interactiva
(es parte del cuerpo del elemento).
El Margin empuja otros elementos pero es "tierra de nadie";
un click en el margen no activa nada.

2. Visual Deception (Engaño Visual):
Ocurre cuando un elemento tiene un borde
o una sombra muy grande pero su caja real (Box Model) es pequeña
El usuario intenta clickear la sombra y nada sucede

3. Fitts's Law (Ergonomía)
Es una ley de UX que dice que el tiempo para alcanzar un objetivo depende de su tamaño y distancia
En interfaces táctiles o de alta densidad (como una lista de tareas)
las áreas de click deben ser mayores que el gráfico que representan para compensar la falta de precisión del puntero o del dedo.

4. Content vs. Container
##### A veces el click solo funciona si le das exactamente a las letras (Content)
##### y falla si le das al espacio vacío al lado del texto (Container).
Esto ocurre cuando el "oído" está puesto en el lugar equivocado de la jerarquía


## Caso 1: Desactivar filtro con el mismo click/lugar

Diseño de interacción vs. lógica de estado
la activación funcione en toda el área pero la desactivación falle
da pistas muy claras sobre cómo están "conversando" tus componentes.

1. Selección Exclusiva: Comportamiento Radio
filtro no se desactiva al volver a hacer click
conceptualmente, está operando bajo la Lógica de Radio
aunque visualmente usemos un componente que llamamos "Checkbox".

`Estado Determinado`: En muchos sistemas de filtrado
la acción está programada como una asignación directa:
Estado = ValorClickado

`Trampa de la Identidad`:
Si el filtro activo es "Pendientes"
y haces click de nuevo en "Pendientes"
la lógica le dice al sistema: "Cambia el filtro a Pendientes".
Como el sistema ya está en ese estado, no detecta un "cambio", sino una reafirmación

`Falta de Toggle`:
##### Para que algo se desactive la lógica debe ser bidireccional (Si A, entonces No A).
Si la función solo sabe "Activar", el segundo click es redundante para el código
aunque para el usuario sea una intención de cancelación.

2. "Idempotencia" en la UI
En programación, una operación es idempotente:
si realizarla muchas veces tiene el mismo efecto que realizarla una sola vez

`Activación exitosa`:
Cuando pasas de "Todas" a "Pendientes",
hay un cambio de estado real
El área de click captura el evento y dispara la actualización.

`Desactivación fallida`:
Al hacer click en el elemento ya activo
estás ejecutando una operación idempotente
El sistema recibe la orden "Filtrar por Pendientes",
mira su estado actual, ve que ya es "Pendientes" y decide que no hay nada nuevo que hacer

`eslabón perdido`:
Falta una regla de negocio que diga:
"Si el filtro que llega es igual al que ya tengo
entonces mi nuevo estado debe ser 'Ninguno' (o 'Todas')".

3. Anatomía de las Áreas de Click:
Por qué el "dónde" sí funciona

click funciona en toda su área: física del componente bien construida

`Hitbox Expandida`:
Seguramente el FilterItem (contenedor)
quien tiene el "oído" (onClick).

##### Gracias a la Propagación de Eventos: No importa si tocas el texto, el número de tareas o el pequeño círculo del checkbox, el número de tareas o el pequeño círculo del checkbox
el evento "burbujea" hasta el contenedor principal.

`Visual vs. Funcional`:
Checkbox interno es probablemente un "pasajero" visual.
El verdadero conductor es el área del FilterItem
Esto es correcto para la usabilidad (Fitts's Law)

pero refuerza el problema: el contenedor envía la misma señal cada vez que lo tocas
sin importar el estado interno del checkbox

4. Conclusion: 
problema no es de área (el click llega al destino)
sino de intención lógica.

`Activación`: Funciona porque el sistema reconoce un cambio de A -> B.

`Desactivación`: Falla porque el sistema interpreta el click como B -> B
y no tiene instrucciones para convertirlo en B -> A
(o B -> Null).

`Componentes involucrados`:
El "contrato" de comunicación entre TodoPage
y CategoryFilter probablemente solo permite
"Setear" un valor, no "Alternarlo".

el TaskSidebar contiene el TaskSearch y los filtros
Si la función que baja desde TodoPage es un simple setFilter
el comportamiento será siempre de selección única y "pegajosa".



# Experiencia de Usuario

Ej: desactivar el filtrado al volver a hacer click en el mismo
Puede ser correcta pero con matices

El usuario valora la libertad y el control
Un click que no produce ningún efecto (un click "muerto")
suele percibirse como un error o una falta de respuesta del sistema

`Desactivar al volver a hacer click`:
Elimina la fricción
Si el usuario hace click en "Pendientes" para ver qué le falta
y luego quiere volver a ver todo
su instinto suele ser "desmarcar" lo que acaba de marcar

Obligarle a buscar el botón "Todas" en otra parte
añade una carga cognitiva pequeña, pero real

##### Para que sea correcto, el sistema debe saber a dónde volver

Nunca deberías dejar al usuario en un "limbo"
(una pantalla vacía sin filtros seleccionados).


## Aplicación 

1. Estado por Defecto: Reset to All

opción más común y segura.

Lógica: El sistema trata la "desactivación" como una vuelta al origen.

Comportamiento: Si haces click en el filtro activo (ej. "Pendientes"),
el sistema interpreta que ya no quieres filtrar por eso
y, automáticamente, activa el filtro "Todas".

El usuario nunca se queda viendo una lista vacía por error
siempre vuelve a la seguridad del estado global

2. Toggle Binario: On/Off
interruptor de luz.

logica: Cada categoría es independiente

Comportamiento: Al desactivar una categoría, el filtro queda "nulo".
##### Si el sistema está diseñado para que "sin filtros" signifique "mostrar todo"
funciona igual que la opción
Si "sin filtros" significa "no mostrar nada", puede ser frustrante.

Uso ideal: Cuando permites seleccionar varias categorías a la vez (Multiselección).

3. Selección Circular

avanzado y depende de la cantidad de filtros

Lógica: El click no solo activa/desactiva, sino que rota el estado de la vista

Comportamiento: Si solo hubiera dos estados (ej. "Pendientes" y "Completadas")
hacer click en el activo podría simplemente alternar al otro
(No es muy recomendable para 3 o más categorías porque es impredecible).

Rs opciones:

`Retorno al Origen`:
Rescate automático
"Si quito esto, vuelvo a ver todo".
Es la más intuitiva."

`Multiselección`:
Adición y sustracción
Estoy construyendo mi propia vista combinada.

`Radio Estricto`:
Selección única obligatoria
"Siempre tengo que tener algo elegido".
(Es lo que tienes ahora)."


Ej: al aplicar "Retorno al Origen"
suele ser la más elegante

Si el usuario clickea en "Pendientes"
y luego vuelve a clickear en "Pendientes",
el sistema debería "limpiar" el filtro de categoría
lo cual por defecto lo llevaría de vuelta a mostrar "Todas".



# Retorno al origen

Transforma una acción simple (marcar) en una conversación inteligente con la aplicación

Para aplicarlo, existen dos caminos principales:
dependiendo de dónde quieras situar la "inteligencia" del sistema.

1. Arquitectura (Enfoque "Top-Down")
En este modelo, los componentes son "tontos"
simplemente informan qué se clickeó

La lógica reside en el cerebro de la aplicación
(el Hook useTasks o el estado de TodoPage).

`Estado con Memoria de Identidad`:
La arquitectura no solo guarda "qué filtro está activo"
sino que conoce el "Estado por Defecto" (en este caso, 'Todas').

`Acción de Conmutación (Toggle Logic)`:
En lugar de tener una función que solo "asigna" un valor, la arquitectura implementa una función de comparación.
pregunta: ¿El valor que llega es el mismo que ya tengo guardado?

`Normalización hacia el Neutro`:
Si la respuesta a la pregunta anterior es "Sí",
la arquitectura decide ignorar el valor entrante
y forzar el estado hacia el valor neutro o inicial
Es un mecanismo de seguridad para asegurar que el sistema siempre vuelva a un estado estable.

`Filtro Nullable`:
La arquitectura permite que el estado de filtrado sea técnicamente "nulo" o "indefinido".
Sin embargo, en la capa de presentación (la UI), ese "nada"
se traduce automáticamente como "Mostrar Todo".


2. Componentes (Enfoque "Bottom-Up")
componentes son "más listos"
deciden qué mensaje enviar hacia arriba basándose en el contexto del usuario.

`Conciencia de Estado Externo`:
El componente FilterItem recibe por Props no solo si él es el activo
sino cuál es el valor global actual.
Esto le permite comparar su propia identidad con la realidad de la aplicación

`Intercepción Semántica`:
Antes de avisar a TodoPage de un click
el componente evalúa la intención
Si el usuario hace click en él y ya estaba activo, el componente cambia el mensaje de salida
en lugar de decir "Actívame", dice "Resetea el sistema".

`Abstracción del Valor de Reseteo`:
El componente no necesita saber que el origen es 'Todas'.
Simplemente envía una señal de "Desactivación" o un valor vacío
delegando en el padre la responsabilidad de saber a dónde volver.

`Feedback Visual Preventivo`:
El componente puede cambiar su estilo (o el del cursor)
cuando ya está seleccionado para indicar que el próximo click no reafirmará la selección
sino que la deshará


## Modificaciones en el componente en retorno al origen

Solo en un caso: La Semántica Visual
Si el componente tiene algún efecto interno
(como un estado de hover o una animación que dependa de creer que "siempre pasará algo")
podrías querer ajustarlo
Pero a nivel de código funcional (JS/TS), el componente sigue siendo un simple mensajero.



# Toggle Binario: On/Off vs Retorno al Origen

1. Toggle Binario (On/Off):
Se basa en la independencia del componente.
solo le importa su propia realidad

##### Lógica de Estado: El valor es un booleano (true/false).
Comportamiento: Si haces click en "Pendientes" y ya está activo, el sistema simplemente lo apaga.
Resultado en la UI: El sistema queda en un estado de "Filtro Nulo".
Riesgo UX: Si la aplicación no tiene una regla para el estado "Nulo", el usuario podría ver una pantalla vacía o un error
Para que funcione bien, la arquitectura debe interpretar que "Nada seleccionado = Mostrar Todo".

##### Uso Ideal: Selección múltiple (puedes tener "Pendientes" y "Urgentes" encendidos a la vez).


2. Retorno al Origen (Reset to Default)

Este concepto es relacional. El componente no solo se apaga, sino que "teletransporta" al usuario a una zona segura.

##### Lógica de Estado: El valor es una identidad dentro de un conjunto (ej. 'all' | 'pending' | 'completed').
Comportamiento: Si haces click en el filtro activo (ej. 'pending'), la arquitectura detecta la repetición y, en lugar de dejar el estado en "nada", lo fuerza a volver al valor definido como Origen (ej. 'all').
Resultado en la UI: El usuario nunca pasa por un estado intermedio de "nada seleccionado". La transición es directa de un filtro específico al panorama general.

##### Uso Ideal: Selección única (Radio buttons o Tabs de navegación) donde siempre debe haber una vista activa
    
Vs:

Característica | Toggle Binario | Retorno al Origen

Referencia:
Se mira a sí mismo.
"Mira al ""Punto de Inicio".

Estado Resultante:
null o undefined.
Un valor válido (ej. 'all').

Complejidad:
Baja (es un switch).
"Media (requiere conocer cuál es el "Origen").

Sensación UX:
"He quitado este filtro".
"He vuelto a ver todas las tareas".


Si aplicas Toggle Binario: Al desmarcar "Pendientes", el círculo azul desaparecería de todos los filtros
Tendrías que definir qué mostrar cuando no hay nada marcado
(probablemente todas las tareas por defecto).

Si aplicas Retorno al Origen: Al desmarcar "Pendientes", el sistema automáticamente "mueve" el círculo azul
(la marca de activo) de vuelta a "Todas".



# Flujo de datos: eventos

1. Camino que recorre el click
es una cadena de mando
va desde el átomo hasta el cerebro de la aplicación

Ruta del Click:

1. `Checkbox`: Detecta el cambio en el input y ejecuta `onChange`.
2. `FilterItem`: Recibe esa señal en `onToggle`
3. `CategoryFilter`: Al ser un mapa de categorías, dispara `onFilterChange(category.id)`.
4. `TaskSidebar`: Pasa la función `onFilterChange hacia arriba` sin modificarla.
5. `TodoPage`: Llama a `setFilter(id)` que proviene directamente del hook
6. `useTasks` (Hook): Ejecuta un `dispatch` de tipo `SET_FILTER` con el `nuevo ID`.
7. `taskReducer`: Simplemente `recibe el payload y sobreescribe el estado filter`.

2. Problema: El "Contrato de Sobreescritura":
Fragmento 3, vemos que CategoryFilter

`onToggle={() => onFilterChange(category.id)}.`

asignación absoluta:
No importa si el filtro ya es el activo
`la orden que llega al hook es siempre "Sé este ID"`
`Como el Reducer no tiene una lógica de comparación`
simplemente cumple la orden y el estado no cambia visualmente.

3. Puntos de Intervención (Estrategias Conceptuales)
##### Para que el sistema vuelva a 'all' (el Origen), cuando se clickea un filtro ya activo

tenemos tres lugares donde podríamos inyectar la "lógica de comparación":

1. cerebro: reducer
lugar más puro
El Reducer recibiría la acción SET_FILTER
y, antes de actualizar, compararía:

Lógica: ¿Es el nuevo ID igual al ID que ya tengo en el estado?

##### Si es igual: Cambio el estado a 'all'.
##### Si es diferente: Cambio el estado al nuevo ID.

##### Ventaja: Los componentes siguen siendo "tontos" y el hook no necesita funciones extra

2. Capa de servicio: hook useTasks
Podríamos modificar la función setFilter antes de que envíe el dispatch.

Lógica: La función intercepta el ID.
Si coincide con state.filter, envía un dispatch con el valor 'all'.

Ventaja: Centraliza la lógica de interacción en la API pública del hook
manteniendo el Reducer como un simple ejecutor de cambios de estado directos.

3. Organismo: CategoryFilter
componente de UI podría decidir qué ID enviar hacia arriba

Lógica: El componente ya conoce el activeFilterId.
Al detectar un click en un item,
él mismo decide si llamar a
`onFilterChange(id)` o a `onFilterChange('all')`.

##### Desventaja: Estás moviendo lógica de negocio
(saber que el origen es 'all')
a un componente de presentación
##### que lo hace menos reutilizable.

opción más robusta y escalable es la Opción A (Reducer)
o la Opción B (Hook)

permite que el componente FilterItem y Checkbox sigan funcionando de forma genérica

ellos solo dicen "me han pulsado",
y es la lógica superior la que decide si eso significa
"activar" o "volver al origen".



## Cambio en el reducer

Retorno al Origen:
el cambio se centra exclusivamente en la lógica de procesamiento de la acción SET_FILTER
Actualmente, esta acción realiza una asignación directa

pero para lograr el comportamiento deseado
debemos transformarla en una `operación condicional`.

1. Cambio en el Caso SET_FILTER
En lugar de simplemente sobrescribir el estado con el payload de la acción
`el Reducer debe actuar como un evaluador de identidad`:

Evaluación de Identidad:
El Reducer debe `comparar el valor actual de state.filter`
con el `nuevo valor propuesto en action.payload`.


2. Lógica de Conmutación

`Si son iguales`:
Significa que el usuario hizo click en el filtro que ya está activo.
En este caso, el Reducer decide ignorar el payload
y forzar el estado de filter hacia el valor de origen, que es 'all'.

`Si son diferentes`:
El usuario desea cambiar a una nueva categoría
El Reducer procede con la asignación normal del `action.payload` al estado


Lugar ideal para el cambio:
Modificar el Reducer para manejar esta lógica ofrece varias ventajas estructurales según tu arquitectura actual

Preservación de Componentes: Los componentes TodoPage, TaskSidebar, CategoryFilter, FilterItem y Checkbox
no requieren ninguna modificación
Ellos siguen reportando el ID clickeado de forma agnóstica.

Consistencia de Datos: Al estar en el Reducer
##### cualquier parte de la aplicación que use el dispatch para filtrar (ahora o en el futuro) heredará automáticamente este comportamiento de "activación/desactivación".

Uso del Estado Inicial:
La lógica se apoya en el initialState, donde filter ya está definido por defecto como 'all',

3. Impacto en el Flujo de Datos
Con este cambio, el ciclo de vida de la interacción se completa así:

1. El usuario hace click en "Pendientes" (que ya estaba seleccionado).
2. El evento viaja hasta el Reducer con el ID 'pending'.
3. El Reducer nota que state.filter ya era 'pending'.
4. El Reducer devuelve un nuevo estado con filter: 'all'.
5. La UI se re-renderiza y el usuario ve que el filtro de "Pendientes" se ha desactivado
y el de "Todas" se ha activado automáticamente.


Nuevo código

```
    case 'SET_FILTER':
      const nextFilter = state.filter === action.payload ? 'all' : action.payload;
      
      return {
        ...state,
        filter: nextFilter,
      };

```


### Cambios en el test del reducer

Escenario de Conmutación (Toggle):
¿Qué sucede si el estado ya tiene el filtro 'completed' y le enviamos de nuevo la acción 'completed'?
El test actual no lo comprueba, y es precisamente el comportamiento que acabamos de programar
El test debería verificar que el resultado vuelve a ser 'all'.

Escenario de Identidad de Origen:
¿Qué sucede si estamos en 'all' y volvemos a enviar 'all'?
El Reducer debería mantener 'all'.
que parece trivial, asegura que el "Origen" es estable.

Renombrar o expandir el test de SET_FILTER:
Ya no solo "actualiza", ahora "gestiona" o "conmuta" el filtro

Añadir un caso de "Arrastre de Estado" (Arrange):
Crear un escenario donde el filtro ya esté activado
(ej. 'pending') y enviar la misma acción
para confirmar que el Reducer lo "apaga" devolviendo 'all'.

No solo queremos que pase;
queremos que documente cómo funciona el "Retorno al Origen".

```
describe('SET_FILTER (Lógica de Retorno al Origen)', () => {
    it('debería cambiar el filtro cuando se selecciona uno diferente al actual', () => {
      // De 'all' pasamos a 'completed'
      const action = {
        type: 'SET_FILTER' as const,
        payload: 'completed' as const,
      };

      const newState = taskReducer(initialState, action);

      expect(newState.filter).toBe('completed');
    });

    it('debería volver al filtro "all" si se selecciona el filtro que ya está activo', () => {
      /**
       * Arrange: Partimos de un estado donde el filtro ya es 'pending'
       */
      const stateWithFilter: TaskState = {
        ...initialState,
        filter: 'pending',
      };
      
      const action = { 
        type: 'SET_FILTER' as const, 
        payload: 'pending' as const 
      };

      // Act
      const newState = taskReducer(stateWithFilter, action);

      /**
       * Assert: Al ser el mismo, el reducer debe "apagarlo" 
       * y devolvernos al origen ('all')
       */
      expect(newState.filter).toBe('all');
    });

    it('debería mantenerse en "all" si se selecciona "all" estando ya en "all"', () => {
      const action = { 
        type: 'SET_FILTER' as const, 
        payload: 'all' as const 
      };

      const newState = taskReducer(initialState, action);

      expect(newState.filter).toBe('all');
    });
  });
```

Transición Simple: Nos aseguramos de que el usuario aún puede navegar entre categorías.

Comportamiento de Toggle: Este es el "corazón" de nuestra mejora
Si un desarrollador en el futuro borra la línea de conmutación en el reducer por accidente, este test fallará inmediatamente en rojo
avisándole de que ha roto la experiencia de usuario.

Estabilidad del Origen: Validamos que el estado 'all' es nuestro "suelo firme";
i ya estamos ahí, volver a pulsarlo no rompe nada ni produce estados extraños.



# Caso 2: El contenido tiene el click y no toda el area, pero en este caso si tiene una desactivación al hacer click en él nuevamente; ni tampoco tengo hover

##### Cambia el esta de tachado, vuelve al estado normal

##### Pasarle la img

Si en los filtros resolvemos la lógica de intención
aquí debemos resolver la física del objeto.

El hecho de que el tachado funcione pero el área de click sea pequeña
y no tenga cursor nos indica un problema de jerarquía de interacción y afectancia (affordance).

1. El Click "Estrecho" (Contenido vs. Contenedor)

click solo funciona en las letras y no en todo el recuadro de la tarea

`Punto de Anclaje del Evento`:
En el desarrollo de UI,
el "oído" (el listener del click)
se coloca en un elemento específico
##### Si el evento toggle está puesto directamente sobre el Typography o el Checkbox
##### el resto del contenedor (el ItemContainer) es "sordo".

`Tierra de Nadie (Padding vs. Content)`:
probable que tu TodoItem tenga un margen interno (padding) para que el texto no toque los bordes
Si el evento de click está en el contenido
ese espacio de padding actúa como una zona muerta
Visualmente es parte de la tarea, pero funcionalmente es invisible para el mouse

`Falta de Envoltorio Semántico`:
##### Cuando usamos un label que envuelve a todo un componente
##### el navegador expande automáticamente el área de activación del input
(el checkbox) a todo lo que esté dentro de ese label.
Si aquí el texto y el checkbox están "sueltos" dentro de un div o li sin una relación de parentesco interactiva
el área se fragmenta

2. Cursor "Inerte" (Falta de Affordance)
La "manito" (cursor: pointer) es el lenguaje universal de la web para decir: "Soy interactivo".

Si no aparece, los motivos suelen ser:

`Semántica Pasiva`:
Por defecto, elementos como <div>, <li>, <span> o <p
son considerados elementos de lectura
El navegador muestra la flecha (o el selector de texto I)
porque asume que el usuario quiere leer o copiar, no clickear.

`Desconexión de Estilos`:
el estilo de cursor debe aplicarse al elemento que el usuario percibe como la "caja" del objeto.
Si el estilo de interacción está solo dentro del componente Checkbox
el usuario solo verá la manito si pone el puntero exactamente sobre el pequeño círculo
pero la perderá al moverse al texto o al fondo de la tarea.

`Falta de Feedback de Estado (Hover)`:
El hover no es solo cambiar el cursor
es una señal de que el sistema está escuchando.
Si el contenedor principal no tiene definida una reacción al ratón
el navegador se comporta de forma estática


En el Filtrado (que funcionaba bien): Usamos un contenedor que actuaba como una unidad total.
##### El "área de impacto" y el "área visual" eran la misma.

En los Items de Tarea:
El objeto es una "cáscara" (el contenedor)
que dentro tiene "botones" (el texto y el checkbox).

El usuario quiere interactuar con la cáscara,
pero la app solo le deja interactuar con los órganos internos


Solución: Unificación de la Caja Interactiva
lograr que el contenedor principal herede la responsabilidad de capturar el click
y proyecte la señal de "soy un botón" a través del cursor.



## Analisis del componente


Pasemos al análisis de los componentes involucrados  (solo motivos y conceptos -sin código de solución-):


Fragmentos de códigos:


1. En TodoPage:


```tsx
     <div data-testid="todo-list-container">
            <TodoList
              todos={tasks}
              onToggleTodo={toggle}
              onDeleteTodo={remove}
              isSearching={searchQuery.trim().length > 0}
            />
          </div>
```


2. TodoList:

```tsx
import type { Task } from '@/core/task.entity';

interface TodoListProps {
  todos: Task[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
  isSearching: boolean;
}

export const TodoList = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
  isSearching,
}: TodoListProps) => {
  const hasTodos = todos.length > 0;

  return (
    <ListWrapper>
      {!hasTodos ? (
        <EmptyState>
...
        </EmptyState>
      ) : (
        <StyledList>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.content}
              completed={todo.isCompleted}
              onToggle={onToggleTodo}
              onDelete={onDeleteTodo}
            />
          ))}
        </StyledList>
      )}
    </ListWrapper>
```


3. TodoItem:

```tsx
interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({
  id,
  text,
  completed,
  onToggle,
  onDelete,
}: TodoItemProps) => {
  const checkboxId = `todo-check-${id}`;

  const handleToggle = () => onToggle(id);

  const handleDelete = () => onDelete(id);
  
  return (
    <ItemContainer $isCompleted={completed}>
      <ContentWrapper>
        <Checkbox
          id={checkboxId}
          checked={completed}
          onChange={handleToggle}
          aria-label={
            completed ? 'Marcar como pendiente' : 'Marcar como completada'
          }
        />
        <TextContainer $isCompleted={completed}>
          <Typography variant="body" as="label" htmlFor={checkboxId}>{text}</Typography>
        </TextContainer>
      </ContentWrapper>

      <IconButton
        icon="🗑️" // Aquí luego pondremos un SVG real
        label="Eliminar tarea"
        onClick={handleDelete}
      />
    </ItemContainer>
  );
};
```


4. Checkbox

```tsx
interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export const Checkbox = ({
  id,
  checked,
  onChange,
  label,
  disabled = false,
}: CheckboxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange(e.target.checked);
  };
  return (
    <CheckboxContainer>
      <HiddenCheckbox
        id={id}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        type="checkbox"
      />
      <StyledCheckbox
        $checked={checked}
        aria-hidden="true"
        data-testid="checkbox-visual"
      />
      {label && (
        <LabelText as="label" htmlFor={id}>
          {label}
        </LabelText>
      )}
    </CheckboxContainer>
  );
};
```

5. Typography

```
interface TypographyProps {
  id?: string;
  variant?: TypographyVariant;
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'label';
  htmlFor?: string;
}

export const Typography = ({
  id,
  variant = 'body',
  children,
  as = 'p',
  htmlFor,
}: TypographyProps) => {
  return (
    <StyledTypography id={id} as={as} $variant={variant} htmlFor={htmlFor}>
      {children}
    </StyledTypography>
  );
};
```


Interfaz rigida:
problema no es la lógica de negocio (el estado cambia bien)
sino de la física del DOM y cómo los elementos reclaman su territorio

1. Punto de Contacto: Fragmentado
En tu `TodoItem`, la función `handleToggle`
solo está conectada a dos puntos específicos
dejando el resto del contenedor como "zona muerta":

`HTML Label`:
motivo por el cual las letras sí activan el click
el componente Typography con la prop as="label"
y htmlFor={checkboxId}.

##### Por naturaleza, el navegador vincula un <label> con su <input>.
##### Si haces click en el texto, el navegador "dispara" el checkbox por ti.

`Caja Sorda`:
`ItemContainer` (componente principal de la fila)
componente principal de la fila
No tiene un onClick propio
##### Por lo tanto, si el usuario hace click en el espacio vacío (el padding) entre el checkbox y el texto
o al final de la fila, el evento simplemente se detiene ahí porque nadie lo está escuchando

`Encapsulamiento del Checkbox`:
`onChange` está enterrado dentro del componente Checkbox
específicamente en el input oculto
A menos que toques ese input o su etiqueta asociada, la acción no se dispara.


2. Afectancia (Affordance) y el Cursor: 
La falta de cursor: pointer
señal visual de que el navegador no considera a la fila completa como un objeto interactivo

`Semántica de Lista vs. Botón`:
Un li (tu ItemContainer)
es semánticamente un elemento estructural
Los navegadores, por defecto
##### muestran el cursor de flecha porque asumen que es contenido para leer, no para accionar

`Localización del Estilo`:
Probablemente el estilo cursor: pointer está dentro del Checkbox
o se aplica automáticamente al label (el texto)
pero no se extiende al ItemContainer

Esto crea una experiencia inconsistente
el cursor cambia a "manito" solo cuando pasas por encima de las letras
pero vuelve a ser flecha si te mueves un centímetro hacia el borde de la tarea.

`Falta de Feedback de Hover`:
El efecto de iluminación que definiste en el CSS de ItemContainer se activa al pasar el mouse,
pero como el cursor no cambia, el cerebro del usuario recibe señales mixtas
"Se ilumina como un botón, pero mi cursor dice que no es un botón".


3. Conflicto de Interacción (The Delete Trap)

Dentro de tu TodoItem, tienes dos intenciones distintas:
Toggle: (Marcar/Desmarcar).
Delete: (Eliminar).

Si simplemente hiciéramos que toda la fila fuera un botón de "Toggle",
tendríamos un problema cuando el usuario intente hacer click en el botón de eliminar
Sin una gestión correcta, al intentar borrar la tarea, ¡también la estarías marcando o desmarcando!

##### Este es el motivo por el cual el área de click está limitada actualmente: para proteger la independencia del IconButton.

Rs:

Contenedor Visual no es el Contenedor de Interacción.
El Click: Está limitado a los "hijos"
(Checkbox y Label) en lugar de ser propiedad
del "padre" (ItemContainer).

El Cursor: Refleja la naturaleza pasiva del contenedor de lista en lugar de la naturaleza activa de la tarea



## Soluciones/opciones: conceptos

1. No se muestra en el texto de la tarea
(pero si funciona el clickeado y desclickeado correctamente)

2. La "manito" si se muestra en el cuadradito del checkbox
y también en el icono del botón basura/borrar tarea (funciona/está bien)


La funcionalidad está ahí (gracias a la semántica del HTML),
pero la comunicación visual está incompleta.

##### El usuario recibe un mensaje contradictorio: el cursor le dice "aquí no hay nada"
##### pero al hacer click, el sistema responde.

1. Promoción de Rango: Cursor en el Texto
El motivo por el cual el texto (label) funciona
pero no tiene hover, es porque, para el navegador,
una etiqueta es simplemente un puente funcional
no necesariamente un botón visual.

`Heredar la Intención`:
La solución conceptual no es ponerle el cursor solo al texto
sino decidir que toda la zona de contenido es interactiva.

`Affordance Visual`:
El cursor "pointer" debe aplicarse a cualquier elemento que
al ser clickeado, produzca una acción
Si el texto es un disparador (trigger) del checkbox
debe "vestirse" como tal.

2. Solución 1: Contenedor Etiqueta/Label Wrapper
conceptos más elegantes y simples de la arquitectura web para formularios y listas

`Idea`: 
En lugar de tener un ItemContainer (div) que dentro tiene un Checkbox y un Label
convertimos al propio ItemContainer en el Label.

`Física del DOM`:
Al ser todo el contenedor una etiqueta vinculada al ID del checkbox
el navegador interpreta que cualquier pixel dentro de esa caja
(el fondo, el espacio entre palabras, el padding)
es una extensión del checkbox

Resultado: Ganas automáticamente el área de click total
y puedes aplicar el cursor "pointer" a toda la fila de una sola vez.

3. Solución 2: Delegación de Eventos
Zonas de Exclusión

Si preferimos mantener la estructura actual por razones de diseño
el concepto cambia a una gestión jerárquica de clicks.

`Captura Superior`:
El ItemContainer deja de ser un espectador
y empieza a escuchar clicks (onClick).

`Desafío del "Fuego Amigo"`:
Si el usuario hace click en el botón de borrar (basura)
el evento "burbujea" hacia arriba, si no tenemos cuidado 
el sistema borrará la tarea y además la marcará como completada antes de que desaparezca.

`Propagación`:
La solución aquí es el Freno de Emergencia (Stop Propagation).
El botón de borrar debe tener la autoridad de decir
Este click es mío, que nadie más en la jerarquía lo escuche

Así, el resto de la fila queda libre para el "Toggle" sin interferencias.

4. Solución 3: Fantasma Interactivo (Overlay)
concepto más visual que estructural

`Capa Invisible`:
Se coloca un elemento transparente que cubre toda la superficie de la tarea
Este elemento es el que tiene la "manito" y el que recibe los clicks.

`Interacción Selectiva`:
Mediante capas (z-index)
nos aseguramos de que el botón de borrar esté por encima de este fantasma

`Efecto`:
El usuario siente que toda la fila es un gran botón
pero el botón de borrar permanece como una "isla" independiente y accesible.


# Combinación Solución A y B:

## Modificaciones que abarca:

1. Unificar el área:
Lograr que el contenedor principal sea el responsable de la interacción
ya sea siendo un label o teniendo el evento principal

2. Sincronía Visual: Aplicar el cursor "pointer" y los efectos de hover a la caja entera
para que no haya dudas de que es un objeto accionable.

3. Proteger el Borrado:
Asegurar que el botón de basura sea una excepción dentro de esa gran área de click.


Fila de Interacción Inteligente:
que la fila se comporte como un todo para la acción principal
(marcar tarea), pero respete la autonomía de las acciones secundarias (borrar).

1. Transformación del Contenedor
modificación principal ocurre en la naturaleza del `ItemContainer`.

`Cambio de Identidad Semántica`:
El contenedor deja de ser un simple divisor (div)
o elemento de lista (li) pasivo para convertirse en una Etiqueta Activa (label).

`Vinculación Total`:
Al transformar el contenedor en el label oficial del Checkbox
el navegador extiende automáticamente la "zona de influencia" del input a cada píxel de la fila.

`Simplificación de Hijos`:
El texto de la tarea ya no necesita ser un label individual ni tener un htmlFor propio
ya que ahora vive "dentro" de la gran zona de activación que es el padre

2. Zona de Exclusión
Como ahora toda la fila es un gran botón de "Toggle"
debemos proteger al botón de eliminar para evitar que un click realice dos acciones a la vez

`Captura y Freno del Evento`:
Interrupción de Propagación
Cuando el usuario interactúa con el botón de borrar
el sistema debe "detener el viaje" del click en ese punto exacto.

`Aislamiento de Responsabilidad`:
El botón de basura se convierte en una "isla" funcional.
El click entra al botón, ejecuta la eliminación y muere ahí
impidiendo que el ItemContainer (que es el label) se entere de que hubo un click y active el checkbox por error.

3. Unificación de la Experiencia Visual (Affordance):
usuario sienta que la solución es sólida
la parte visual debe seguir a la funcional:

`Sincronización del Cursor`:
##### El estilo cursor: pointer se mueve del checkbox y el texto hacia el contenedor principal
Esto garantiza que la "manito" aparezca en cuanto el mouse entre en cualquier parte de la fila

`Coherencia de Hover`:
El efecto visual (cambio de brillo o color de fondo)
el cursor ahora trabajan en equipo
Si la fila se ilumina, el cursor es un puntero;
el mensaje para el usuario es claro: "Toda esta caja es clickeable".

`Prioridad del Cursor en Exclusiones`:
Aunque toda la fila tenga "manito"
el botón de borrar mantiene su propio estado visual
(quizás cambiando a un color de advertencia)
reforzando que es una acción distinta.

Componente: Antes (Comportamiento) | Después (Concepto Nuevo)

ItemContainer:
"Caja pasiva, sin cursor."
Área de acción principal (Label) y dueño del cursor.

Typography:
Dueño único del click en el texto.
Texto descriptivo simple (hereda el click del padre).

IconButton:
Actúa de forma independiente.
Actúa de forma independiente y bloquea al padre.

Checkbox:
Activado solo por su círculo o el texto.
Activado por cualquier click en la fila.


Resultado:

El usuario podrá hacer click en el espacio vacío a la derecha del texto
en el padding superior o directamente en las palabras
y la tarea se marcará/desmarcará con total fluidez

Solo si apunta específicamente al ícono de la basura
la tarea se eliminará sin cambiar su estado de "completada".


## Código

original:

```
import { Checkbox } from '../../atoms/Checkbox/Checkbox';
import { Typography } from '../../atoms/Typography/Typography';
import { IconButton } from '../../atoms/IconButton/IconButton';
import {
  ItemContainer,
  ContentWrapper,
  TextContainer,
} from './TodoItem.styles';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({
  id,
  text,
  completed,
  onToggle,
  onDelete,
}: TodoItemProps) => {
  const checkboxId = `todo-check-${id}`;
  
  const handleToggle = () => onToggle(id);
  
  const handleDelete = () => onDelete(id);

  return (
    <ItemContainer $isCompleted={completed}>
      <ContentWrapper>
        <Checkbox
          id={checkboxId}
          checked={completed}
          onChange={handleToggle}
          aria-label={
            completed ? 'Marcar como pendiente' : 'Marcar como completada'
          }
        />
        <TextContainer $isCompleted={completed}>
          <Typography variant="body" as="label" htmlFor={checkboxId}>{text}</Typography>
        </TextContainer>
      </ContentWrapper>

      <IconButton
        icon="🗑️" // Aquí luego pondremos un SVG real
        label="Eliminar tarea"
        onClick={handleDelete}
      />
    </ItemContainer>
  );
};

```

Estilo:

```
import styled, { css } from 'styled-components';
import { mixins } from '../../../styles/mixins';

interface StyledItemProps {
  $isCompleted: boolean;
}

export const ItemContainer = styled.li<StyledItemProps>`
  ${mixins.glass}
  ${mixins.flexCenter}
  justify-content:空间-between;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  gap: ${({ theme }) => theme.spacing.md};
  transition: ${({ theme }) => theme.transitions.default};
  list-style: none;
  width: 100%;

  /* Efecto Hover: se ilumina sutilmente al pasar el mouse */
  &:hover {
    background: oklch(100% 0 0 / 10%);
    border-color: ${({ theme }) => theme.colors.primary}40;
    transform: translateX(4px); /* Pequeño desplazamiento orgánico */
  }

  /* Si está completada, suavizamos su presencia */
  ${({ $isCompleted }) =>
    $isCompleted &&
    css`
      opacity: 0.7;
      background: oklch(100% 0 0 / 2%);
    `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex: 1;
  min-width: 0; /* Evita que el texto rompa el layout */
`;

interface TextProps {
  $isCompleted: boolean;
}

export const TextContainer = styled.div<TextProps>`
  flex: 1;
  transition: all 0.3s ease;
  text-decoration: ${({ $isCompleted }) => ($isCompleted ? 'line-through' : 'none')};
  opacity: ${({ $isCompleted }) => ($isCompleted ? 0.5 : 1)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
```


### Cambios

1. Modificación en TodoItem.tsx
tres cambios clave:

`ContentWrapper` como label:
Lo convertimos en el disparador de toda la fila.

`Simplificación de Typography`:
Ya no necesita ser el label, ahora es solo texto descriptivo.

`Freno de Propagación`:
Evitamos que borrar la tarea también cambie su estado de completado.

```
export const TodoItem = ({
  id,
  text,
  completed,
  onToggle,
  onDelete,
}: TodoItemProps) => {
  const checkboxId = `todo-check-${id}`;
  
  const handleToggle = () => onToggle(id);

  // Manejador para el botón de eliminar con "Freno de Emergencia"
  const handleDelete = (e: React.MouseEvent) => {
    // Evita que el click "suba" al label/contenedor y active el checkbox
    e.stopPropagation(); 
    e.preventDefault();
    onDelete(id);
  };

  return (
    <ItemContainer $isCompleted={completed}>
      {/* 
         1. El ContentWrapper ahora es un 'label' vinculado al checkbox.
         Esto hace que todo el espacio interno sea clickeable.
      */}
      <ContentWrapper as="label" htmlFor={checkboxId}>
        <Checkbox
          id={checkboxId}
          checked={completed}
          onChange={handleToggle}
          aria-label={
            completed ? 'Marcar como pendiente' : 'Marcar como completada'
          }
        />
        
        <TextContainer $isCompleted={completed}>
          {/* El texto ya no necesita 'as="label"' porque su padre ya lo es */}
          <Typography variant="body">{text}</Typography>
        </TextContainer>
      </ContentWrapper>

      {/* 
         2. El botón de eliminar es una "isla". 
         Al hacer click, se ejecuta handleDelete y el evento muere ahí.
      */}
      <IconButton
        icon="🗑️"
        label="Eliminar tarea"
        onClick={handleDelete}
      />
    </ItemContainer>
  );
};
```

2. Ajustes en los Estilos
"manito" y el área de click funcionen en toda la fila
debemos asegurar que los estilos de los componentes
TodoItem.styles.ts

`ContentWrapper`:
Debe tener `display: flex`,
`flex: 1` para ocupar todo el ancho disponible
y, lo más importante, `cursor: pointer`.

`ItemContainer`:
Al ser el padre
debe asegurar que sus hijos se alineen correctamente
para que no queden "huecos" sin click

```
// Fragmento conceptual de lo que debería haber en tus Styled Components:

export const ContentWrapper = styled.label`
  display: flex;
  align-items: center;
  flex: 1;           /* Ocupa todo el espacio sobrante a la izquierda del botón borrar */
  cursor: pointer;   /* ¡Aquí activamos la manito para toda la fila! */
  padding: 12px;     /* El área de click ahora incluye este padding */
  gap: 12px;
`;

export const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  /* ... resto de tus estilos de Liquid Glass ... */
  
  &:hover {
    background: rgba(255, 255, 255, 0.05); /* Feedback visual de que toda la fila es activa */
  }
`;
```



# DashboardTemplate distribuye estos slots con CSS Grid/Flexbox



# Calidad de código

###### Ej: Si los tests de TodoPage o TodoList fallan después de modificar TodoItem, significa que la lógica de integración se rompió. 




# Debug CSS

1. Inspector de Elementos
clic derecho sobre el elem
selecciona "Inspeccionar".

Pestaña "Styles":
buscar el componente
ver las reglas y especificidad
si tachado con una línea horizontal, significa que otra regla de CSS tiene más peso (especificidad) y le está ganando.

búsqueda:
en la misma pestaña estilo, caja de búsqueda.
Escribe la propiedad y verás exactamente qué valores están activos.

2. Pestaña "Computed" (fuente de verdad)
Al lado de Styles, no hay código
sino el resultado final que el navegador está renderizando
##### Si aquí describe la propiedad es porque se está aplicando

3. Líneas del Grid
Buscar el elemento que tiene el Grid
Al lado de la palabra grid en el inspector
pequeño botón o checkbox. Al activarlo
el navegador dibujará líneas de colores sobre tu web mostrando las columnas y filas.


## Debug componentes

1. panel "Rendered by":
exactamente quién es el "padre" que puso ese elemento ahí.

Si dice Rendered by DashboardTemplate, ese styled.main es el contenedor genérico de tu estructura global
Si dice Rendered by TodoTemplate, el styled.main es el contenedor específico de la lista de tareas

Externo e interno:

styled.main más externo:
(el de DashboardTemplate)
es el "agujero" del Grid donde metes todo el contenido

mientras que el interno:
(el de TodoTemplate) es el que organiza las tareas propiamente dichas.


2. árbol de componentes: jerarquía

La lista de componentes:
se lee de arriba hacia abajo,
desde el padre más inmediato hasta el ancestro más lejano

##### Primero de la lista (Dueño Directo):
componente que aparece arriba del todo
##### es el que tiene la "propiedad" legal del elemento
##### Es el componente que en su archivo .tsx tiene escrito algo como return <StyledMain>...</StyledMain>.

##### Los siguientes (Padres/Contexto):
##### Los que vienen debajo (TodoPage, App) son los que invocaron al dueño

TodoPage renderizó a TodoTemplate, y App renderizó a TodoPage.
Ej:

```
TodoTemplate
TodoPage
App
```

3. Source: ADN
Debajo de la lista "Rendered by"
##### sección source: indica el nombre del archivo y la línea exacta: TodoTemplate.tsx:7.

confirma sin lugar a dudas que ese styled.main específico nació en la línea 7 de tu archivo TodoTemplate.

4. Anatomía Visual en el Árbol (Panel Izquierdo)

##### indentación:
styled.main que tienes seleccionado está un nivel por debajo
(hacia la derecha) de TodoTemplate
indica que es un hijo directo de la lógica de ese componente.

Si ves otro styled.main más arriba que está al mismo nivel que DashboardTemplate
ese pertenecería a la estructura global de la aplicación.



# Fix scroll

##### pasarle el código de los elementos

###### Que todos los elementos se queden quietos

## Solución: Position

### Position rompia inputs, efectos



# Desbordamiento

"desbordamiento" (overflow) es el sistema de alerta del navegador
##### avisándote de que algo no cabe donde debería

1. Significado
##### Significa que uno o varios elementos hijos tienen un tamaño físico mayor que el espacio que sus contenedores les han asignado

significa que la caja de la aplicación se está saliendo de los límites de la pantalla
(lo más común es que sea a lo ancho, generando un desplazamiento horizontal inesperado).
##### El contenido está "empujando" las paredes del layout hacia afuera.

2. Consecuencias

Scroll horizontal fantasma:
El usuario podrá arrastrar la pantalla hacia los lados
(especialmente notorio y molesto en dispositivos móviles)
viendo un espacio en blanco innecesario a la derecha.

Layout roto o recortado:
Si en algún punto de la jerarquía aplicas un overflow: hidden

el elemento desbordado no romperá la pantalla:
pero su contenido se cortará y el usuario no podrá ver fragmentos de texto o botones.

Inestabilidad con elementos fijos:
Los componentes que dependan de position: sticky o position: fixed
pueden empezar a calcular mal sus posiciones y comportarse de forma errática.

3. Depende del contexto

Cuándo es bueno: Cuando es intencional
Por ejemplo, una tabla con decenas de columnas que quieres que tenga un scroll horizontal,
o una lista de tarjetas tipo carrusel

Cuándo es malo: Cuando aparece en el HTML y en la estructura principal del Grid
Aquí no estás buscando que la estructura completa de la app se desplace
Es un error de cálculo

algún elemento interno tiene un ancho fijo
un padding excesivo
##### o un texto largo sin romper que está obligando al Grid a estirarse más allá del 100% de la pantalla.

4. Rastrear el elemento desbordado

1. Interactuar/click con el overflow directamente
el navegador suele sombrear o rodear con líneas discontinuas en la pantalla el motivo exacto del desborde
o te guiará visualmente hacia el componente hijo que está rompiendo la regla.

2. Outline
Ve a la pestaña de la consola de desarrollo (Console)
o añade temporalmente esta regla en tus estilos globales:

```
* {
  outline: 1px solid red !important;
}
```
Esto dibujará un borde rojo alrededor de absolutamente cada etiqueta de la página sin alterar su tamaño real
Si haces scroll hacia el lado desbordado
verás instantáneamente qué caja es la que sobresale del límite limpio de la aplicación.

3. Búsqueda binaria por eliminación (Modo rudo)

Abre el Inspector de elementos
Selecciona un bloque grande sospechoso
(por ejemplo, el <main> o el <aside>)
y presiona la tecla Supr (Delete) para borrarlo temporalmente del DOM del navegador.

Si desapareció desbordamiento:
El culpable estaba dentro de la sección que acabas de borrar
Refresca la página (F5) y repite el proceso borrando elementos más pequeños dentro de esa sección hasta dar con la etiqueta exacta

Si no desapareció:
Refresca y prueba borrando otra sección.

Ej:

Sospechosos:
componente de texto (Typography o inputs) que no tenga permitido envolver sus líneas (white-space: nowrap).

Algún elemento con un ancho fijo en píxeles (ej. width: 450px) que en pantallas medianas
o al sumarse con los paddings supere el espacio disponible en la columna del Grid.


# Fix outline/maquetacion

El global

```
* {
  outline: 1px solid red !important;
}
```

Aplicandolo junto a otras reglas

```
export const GlobalStyles = createGlobalStyle`
  /* 1. Reset e Higiene CSS */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 1px solid red !important;
  }
```


Dibujará un borde rojo alrededor de absolutamente cada etiqueta de la página sin alterar su tamaño real
##### Si haces scroll hacia el lado desbordado, verás instantáneamente qué caja es la que sobresale del límite limpio de la aplicación.

Ej: textTruncate está causando desbordamiento
Conflicto entre Flexbox y truncado de texto

display: flex en un contenedor (como tu ítem de lista)
y pones un elemento hijo (tu Typography)
que tiene white-space: nowrap (para truncar el texto

el navegador, por defecto, no permite que el texto se encoja por debajo de su tamaño intrínseco para evitar que se rompa.

Typography le está diciendo al contenedor flex:
"No me importa cuánto espacio me des, yo exijo el ancho completo de mi texto".

Como el texto es largo, "empuja" las paredes del contenedor,
ignorando el overflow: hidden que intentaste aplicar


Opciones para solucionarlo:

1. propiedad "min-width" en el hijo:
min-width: 0 al componente que tiene el textTruncate
le da permiso al navegador para ignorar el tamaño natural del texto y obligarlo a encogerse para ajustarse al contenedor padre.

2. propiedad "flex-basis" o "flex-shrink":
Puedes modificar la configuración del flex en el contenedor
Si le indicas explícitamente al hijo que su flex-shrink es mayor a 0
le estás autorizando a reducir su tamaño cuando el espacio escasea.

3. Ajustar el comportamiento Flex del contenedor:
En lugar de que el contenedor intente acomodar todo el tamaño del texto
puedes indicarle que el hijo no debe ser "inflexible".

En términos de diseño, esto asegura que el texto se corte
con los puntos suspensivos (...) exactamente en el límite del contenedor y no un píxel más allá.

aplicando la primera opción (min-width: 0) al elemento que envuelve al Typography
o directamente al StyledTypography.

La lista usa flex y ellipsis


## Lineas de grid vs lineas de outline

outline global
viendo la huella física real de cada etiqueta

Al cruzar la información de las líneas moradas
(las pistas ideales que tu Grid quiere tener)

con las líneas rojas
(el espacio que los elementos realmente están ocupando)

podemos extraer varias conclusiones conceptuales clave:

### Qué detecta Outline:

1. Discrepancia del "Espacio Fantasma":
El error visual más engañoso en CSS ocurre cuando
un elemento es transparente o no tiene fondo

pero su caja sigue midiendo cientos de píxeles
##### El outline revela que tu aplicación no sufre de un "margen rebelde",
sino de un problema de hipertrofia de cajas:
##### hay contenedores que se están estirando mucho más allá de su contenido visual

2. Grid vs. Realidad:
Las líneas moradas del inspector representan la estructura teórica de tu layout
Cuando una línea roja cruza o supera una línea morada
significa que el contenido ha "derrotado" a las restricciones del Grid
obligando a la cuadrícula a deformarse para no romper el flujo del DOM.


### Vista Móvil

Desbordamiento es masivo y crítico:

1. Estructura en Columna de una sola vía:
Tu Grid ha hecho bien su trabajo de adaptabilidad básica
ha apilado el header, el main, el sidebar y el footer uno debajo del otro en una sola columna.

2. fuga hacia la derecha:
enorme franja oscura del lado derecho del bloque central

Las líneas rojas de los contenedores superiores (el encabezado y el contenedor global)
se extienden de manera uniforme hacia el infinito derecho.

significa que el ancho del viewport de un móvil no está definido por el tamaño de la pantalla
sino por el elemento más ancho de toda la página

Al haber un solo elemento rígido
(probablemente el texto interno de una tarea larga que procesó el navegador antes de que recortaras la lista
empuja el ancho global de todo el documento


### Vista Escritorio

comportamiento cambia sutilmente

1. Falsa sensación de orden:
Visualmente, la disposición en dos columnas (sidebar a la izquierda, main a la derecha)
parece encajar dentro de los límites del diseño.

2. Rigidez estructural:
Si observas el límite lateral derecho de la columna de tareas (main),
notarás que las líneas rojas de los ítems individuales de la lista finalizan exactamente donde termina la pista del Grid.
##### Sin embargo, la línea roja del contenedor padre (el envoltorio de la app) sobresale de la pantalla.

3. Resistencia a la compresión:
Lo que ocurre aquí es que las tarjetas de las tareas
tienen un ancho mínimo intrínseco dictado por sus elementos internos

Al reducir la pantalla en escritorio, la columna derecha debería encogerse
pero como el texto dice "no me puedo encoger más" debido al flexbox rígido
el contenedor prefiere salirse de la pantalla antes que deformar el texto.

outline te ha confirmado que tu maquetación no está rota por culpa del Grid principal en sí
sí (las columnas y filas están bien distribuidas conceptualmente),
sino por la inflexibilidad de los componentes hijos más pequeños.

Tanto en móvil como en escritorio, el diseño se estira hacia la derecha
porque las cajas de texto de los ítems de la lista le prohíben al navegador calcular un ancho menor al tamaño nativo de las palabras
Al aplicar las soluciones de flexibilidad en los hijos (permitirles encogerse),
todas esas líneas rojas exteriores se replegarán instantáneamente hacia el borde limpio de la pantalla


### Quitando código truncate

```
textTruncate: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
```

 Antes:


```typescript
export const StyledTypography = styled.p<StyledProps>`
  /* Aplicamos el estilo según la variante */
  ${({ $variant }) => variantStyles[$variant]}
  /* Ejemplo: Si queremos que el texto nunca rompa el layout */
  ${mixins.textTruncate}
`;
```

Después:

```typescript
export const StyledTypography = styled.p<StyledProps>`
  /* Aplicamos el estilo según la variante */
  ${({ $variant }) => variantStyles[$variant]}
  min-width: 0
`;
```

#### Efecto en la Aquitectura:

##### Al quitar el mixin, eliminaste tres propiedades, entre ellas white-space: nowrap.

Haber eliminado ${mixins.textTruncate} del componente base Typography

1. 
##### Un componente genérico de tipografía no debería obligar a todos los textos de la aplicación
##### (como párrafos largos, descripciones o títulos)
a cortarse en una sola línea con puntos suspensivos (...).
Estabas limitando la reutilización de tu propio componente.


#### Efecto secundario: Interfaz
Al quitar el mixin, eliminaste tres propiedades, entre ellas white-space: nowrap.

desbordamiento horizontal va a desaparecer por completo

Ahora, los textos largos de tus tareas ya no se van a truncar con ...,
sino que van a romper en múltiples líneas hacia abajo, haciendo que las tarjetas de las tareas crezcan verticalmente si el texto es muy largo


#### Sugerencias y Ajustes Técnicos

1. Ubicación de min-width: 0
Aunque ponerlo en StyledTypography

##### la regla de oro de Flexbox dice que min-width: 0 debe ir en el hijo directo del contenedor Flex.

Si tu estructura es: ContenedorFlex (Tarjeta) -> StyledTypography
entonces está perfecto ahí.

##### Si tu estructura tiene un contenedor intermedio
##### como un div que agrupa el texto, ese div intermedio es el que necesita el min-width: 0.


### Mejora para el truncado

Si en el componente de tareas sigues queriendo que el texto se corte elegantemente con ... en una sola línea
tienes dos caminos limpios:

1. Prop Condicional
Pasar una prop TypeScript a tu tipografía (por ejemplo, $truncate)
para que solo aplique el mixin cuando tú lo decidas.

2. Especialización:
En el archivo de tu lista de tareas
crear un componente estilizado local que herede de tu tipografía
y le añada el mixin solo para ese caso:

```
const TaskTitle = styled(Typography)
```
ahí dentro le clavas el textTruncate.


# Romper palabras en Flexbox

Div intermedio:

```
export const TextContainer = styled.div<TextProps>`
  flex: 1;
  transition: all 0.3s ease;
  text-decoration: ${({ $isCompleted }) => ($isCompleted ? 'line-through' : 'none')};
  opacity: ${({ $isCompleted }) => ($isCompleted ? 0.5 : 1)};
  overflow-wrap: break-word;
  word-break: break-word;
  min-width: 0;

`;
```


# Elemento con overflow (panel flex vert) vs sin overflow (panel flex horiz)

## Elemento con overflow

1. etiqueta desbordamiento (Overflow Badge):
El inspector coloca este botón interactivo al lado del:
<li> y del <ul>.

## Código del elemento con desbordamiento

TodoItem: li

```
export const ItemContainer = styled.li<StyledItemProps>`
  ${mixins.glass}
  ${mixins.flexCenter}
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  gap: ${({ theme }) => theme.spacing.md};
  list-style: none;
  width: 100%;

  /* Efecto Hover: se ilumina sutilmente al pasar el mouse */
  &:hover {
    background: oklch(100% 0 0 / 10%);
    border-color: ${({ theme }) => theme.colors.primary}40;
    transform: translateX(4px); /* Pequeño desplazamiento orgánico */
  }

  /* Si está completada, suavizamos su presencia */
  ${({ $isCompleted }) =>
    $isCompleted &&
    css`
      opacity: 0.7;
      background: oklch(100% 0 0 / 2%);
    `}
`;
```

1. 
##### Te está alertando de que ese contenedor físico mide menos que el contenido que lleva dentro
forzando al navegador a crear un scroll horizontal invisible (o visible).

2. 
panel de "Flexibilidad" (Abajo a la derecha en debug-app53.jpg): Esta es la clave del problema
##### El inspector te muestra un aviso crítico: "Tamaño mínimo: El elemento fue limitado a su tamaño mínimo".

3. significado:
Por defecto, en Flexbox los elementos tienen min-width: auto.
El inspector te está avisando de que el <li> quiere encogerse para entrar en el Grid

pero no puede porque el texto de su hijo (white-space: nowrap en el <p>,
como se ve en la imagen 50) le impone un "suelo" rígido de anchura imposible de reducir.


## Elemento sin overflow

1. Desaparición de la alerta:
Al inspeccionar el <label> (ContentWrapper), notas que ya no hay etiqueta de desbordamiento en sus hijos.

Presencia de la regla salvadora:
En los estilos aplicados del panel central, vemos explícitamente la regla min-width: 0; activa en .depFxp.

El cambio en el panel derecho: El gráfico de Flexbox ahora muestra que la base y el tamaño final están liberados
el elemento ya tiene permiso para encogerse tanto como la pantalla lo requiera, eliminando la presión sobre el <li>.


## Regla que causa o regla que falta para el desborde

1. Regla causante:

Mirar `Badge` overflow:
Busca la `etiqueta desbordamiento` en el árbol DOM.
El inspector te marcará el contenedor que se está desparramando.

Inspecciona los hijos profundos:
Ve bajando en el árbol hasta llegar al texto textualmente rígido
En tu caso, al llegar al <p> (en debug-app50.jpg),
el inspector te muestra la propiedad white-space: nowrap;.
Esa es la causante física: le prohíbe al texto saltar de línea, creando una línea infinita hacia la derecha

2. Regla faltante: 

panel de Flexbox/Rejilla del inspector:
Si seleccionas un elemento hijo dentro de un Flexbox y el inspector te dice
"El elemento fue limitado a su tamaño mínimo",
te está dando el diagnóstico definitivo.

solución matemática de Flexbox:
Esa frase de la herramienta siempre significa
que falta romper el piso mínimo por defecto

##### Falta un min-width: 0; en el contenedor intermedio para permitirle encogerse

##### O bien, falta un overflow: hidden; combinado con técnicas de truncado para que el hijo no empuje las paredes del padre

##### Si haces clic directamente sobre la palabra desbordamiento en el árbol de etiquetas de Firefox
##### la herramienta dibujará una línea punteada o un sombreado en la pantalla real mostrándote exactamente qué píxeles se están saliendo del contenedor y quién los está empujando



# Maquetación movil

1. minmax(0, 1fr): como "min-width: 0 de grid"
Flexbox sufre de rigidez por culpa de los tamaños mínimos automáticos
CSS Grid sufre exactamente del mismo mal.

Cuando escribes `grid-template-columns: 1fr`;
el navegador interpreta el 1fr
de forma implícita como `minmax(auto, 1fr)`.

Si algún elemento interno del main o del header tiene un ancho mínimo rebelde
la pista del grid se estirará obligatoriamente superando el tamaño de la pantalla

Solución Defensiva:
Cambiar a `grid-template-columns: minmax(0, 1fr)`;.

Esto rompe el piso mínimo del "auto" y le dice al Grid:
"Puedes encogerte hasta cero si el viewport lo exige
la pantalla manda, no tus hijos".

2. Spacing Responsivo: No asfixies al móvil
StyledMain y StyledSidebar tienen un padding estático:
padding: ${({ theme }) => theme.spacing.xl};.

problema: Si tu spacing.xl equivale a 24px o 32px
en una pantalla móvil de 360px estás desperdiciando hasta 64px de espacio útil solo en los márgenes laterales del contenedor
Esto "estruja" tus tarjetas de tareas hacia el centro, forzando saltos de línea innecesarios y provocando colapsos visuales.

Solución: Enfoque Mobile-First:
Empieza con un padding cómodo pero compacto en móvil
(como spacing.md o spacing.sm)
dentro del Media Query (min-width: 800px)

3. Limpieza de Filas Explícitas

Tienes la regla grid-template-rows: auto; declarada en la base móvil
Al pasarle un solo valor (auto) a un grid que tiene 4 áreas apiladas verticalmente (header, main, sidebar, footer)
solo le estás dando instrucciones a la primera fila; las otras tres quedan a merced del algoritmo implícito.

Solución: Es mucho más limpio omitir esa propiedad en la vista móvil
y dejar que el Grid calcule el flujo de filas de manera orgánica con su comportamiento nativo
o bien definir las 4 filas de forma explícita si necesitas un control estricto de alturas.


## Código maquetación movil

```
import styled from 'styled-components';

export const TemplateWrapper = styled.div`
  display: grid;
  grid-template-areas: 
    "header"
    "main"
    "sidebar"
    "footer";
  /* 1. Aplicamos diseño defensivo para evitar desbordamientos de pista */
  grid-template-columns: minmax(0, 1fr);
  min-height: 100vh;
  width: 100%;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  
  /* Retiramos el overflow: hidden si queremos que el scroll nativo fluya bien, 
     o lo dejamos si controlamos el scroll internamente en las tarjetas */
  overflow: hidden; 
  
  @media (min-width: 800px) {
    grid-template-areas: 
      "header header"
      "sidebar main"
      "footer footer";
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto 1fr;
  }
`;

export const StyledHeader = styled.header`
  grid-area: header;
  position: sticky; /* Opcional: Excelente para dashboards */
  top: 0;
  z-index: 100;
  /* Reducimos el espaciado horizontal en móvil para ganar aire */
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.glass};
  border-bottom: 1px solid ${({ theme }) => theme.colors.glassBorder};

  @media (min-width: 800px) {
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  }
`;

export const StyledSidebar = styled.aside`
  grid-area: sidebar;
  /* Padding responsivo: más ajustado en móviles */
  padding: ${({ theme }) => theme.spacing.md};
  position: relative;
  border-top: 1px solid ${({ theme }) => theme.colors.glassBorder};
  align-self: start;
  justify-self: center;
  width: 100%; /* Asegura consistencia visual en la pila móvil */
  
  @media (min-width: 800px) {
    padding: ${({ theme }) => theme.spacing.xl};
    border-top: none;
    border-right: 1px solid ${({ theme }) => theme.colors.glassBorder};
    align-self: stretch;
    justify-self: stretch;
    width: auto;
  }
`;

export const StyledMain = styled.main`
  grid-area: main;
  /* Espacio inteligente: cuidamos los costados en pantallas chicas */
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 800px) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

export const StyledFooter = styled.footer`
  grid-area: footer;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.glass};
  border-top: 1px solid ${({ theme }) => theme.colors.glassBorder};
  text-align: center;
`;
```

##### Algunas se pueden evitar por diseño

Ej:

```
import styled from 'styled-components';

export const TemplateWrapper = styled.div`
  display: grid;
  grid-template-areas: 
    "header"
    "main"
    "sidebar"
    "footer";
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  min-height: 100vh;
  width: 100%;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  overflow: hidden;
  
  @media (min-width: 800px) {
    grid-template-areas: 
      "header header"
      "sidebar main"
      "footer footer";
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto 1fr;
  }
`;

export const StyledHeader = styled.header`
  grid-area: header;
  top: 0;
  z-index: 100;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.glass};
  border-bottom: 1px solid ${({ theme }) => theme.colors.glassBorder};

  @media (min-width: 800px) {
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  }
`;

export const StyledSidebar = styled.aside`
  grid-area: sidebar;
  padding: ${({ theme }) => theme.spacing.md};
  position: relative;
  border-top: 1px solid ${({ theme }) => theme.colors.glassBorder};
  align-self: start;
  justify-self: center;
  width: 100%;

  @media (min-width: 800px) {
    border-top: none;
    border-right: 1px solid ${({ theme }) => theme.colors.glassBorder};
    align-self: stretch;
    justify-self: stretch;
    padding: ${({ theme }) => theme.spacing.xl};
    width: auto;
  }
`;

export const StyledMain = styled.main`
  grid-area: main;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 800px) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

export const StyledFooter = styled.footer`
  grid-area: footer;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.glass};
  border-top: 1px solid ${({ theme }) => theme.colors.glassBorder};
  text-align: center;
`;
```



# Maquetación escritorio

nos enfrentamos a los dos grandes desafíos de las pantallas grandes

1. proteger el espacio de trabajo contra desbordamientos masivos
2. evitar que el diseño se deforme o se estire de más en monitores grandes o UltraWide

código actual:
estás a solo un par de detalles de tener un layout de nivel producción

1. Trampa del 1fr (Secuela en Escritorio)
En la vista móvil aplicamos con éxito minmax(0, 1fr)

Sin embargo, al entrar en la Media Query de escritorio (@media (min-width: 800px)),
reescribiste la propiedad como grid-template-columns: auto 1fr;.

peligro: Al volver a usar 1fr a secas, el navegador vuelve a interpretar esa columna del main como minmax(auto, 1fr).

Si en el futuro agregas un gráfico de estadísticas (Charts)
una tabla de datos pesada o un bloque de código dentro de tus tareas

la columna del main se estirará hacia la derecha rompiendo todo el Grid de escritorio.

Mantén el blindaje usando minmax(0, 1fr) para la columna principal:

```
grid-template-columns: auto minmax(0, 1fr);
```

2. Estabilidad del Sidebar: (Evitar el salto de Layout o CLS)
Tu columna para el sidebar está definida como auto.

Esto significa que el ancho de la barra lateral dependerá exclusivamente de lo que metas dentro de ella.

problema: Si el usuario inicia sesión y su nombre es largo, la barra se estirará
Si navega a una sección con iconos más chicos, la barra se encogerá

Este comportamiento causa Layout Shifts (cambios bruscos en la interfaz)
que empujan al panel main de izquierda a derecha de forma inestable.

##### solución: Define un ancho predecible, cómodo y elástico para la barra lateral usando un rango
por ejemplo, entre 240px y 280px (o el tamaño que mejor se adapte a tu diseño):

```
grid-template-columns: minmax(240px, 280px) minmax(0, 1fr);
```

3. Legibilidad en Pantallas Gigantes (El tope del main)

Tu componente StyledMain tiene un ancho del 100% y un flex centralizado.

La buena práctica:
En resoluciones de escritorio muy altas (como monitores 1080p o superiores)
que una lista de tareas o un formulario se estiren a lo ancho de toda la pantalla es una mala experiencia visual

(hace que el usuario tenga que mover mucho los ojos para ir de la tarea al botón de eliminar).

##### solución: Lo ideal es limitar el ancho del contenedor interno del main o ponerle un max-width estratégico a la sección de la app
para que el contenido respire en el centro del dashboard.


## Código para maquetación de escritorio

```
import styled from 'styled-components';

export const TemplateWrapper = styled.div`
  display: grid;
  grid-template-areas: 
    "header"
    "main"
    "sidebar"
    "footer";
  grid-template-columns: minmax(0, 1fr);
  min-height: 100vh;
  width: 100%;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  
  @media (min-width: 800px) {
    grid-template-areas: 
      "header header"
      "sidebar main"
      "footer footer";
    grid-template-rows: auto 1fr auto;
    
    /* MEJOR PRÁCTICA: Sidebar estable + Main indestructible */
    grid-template-columns: minmax(340px, 380px) minmax(0, 1fr);
  }
`;

export const StyledHeader = styled.header`
  grid-area: header;
  top: 0;
  z-index: 100;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.glass};
  border-bottom: 1px solid ${({ theme }) => theme.colors.glassBorder};

  @media (min-width: 800px) {
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  }
`;

export const StyledSidebar = styled.aside`
  grid-area: sidebar;
  padding: ${({ theme }) => theme.spacing.md};
  position: relative;
  border-top: 1px solid ${({ theme }) => theme.colors.glassBorder};
  align-self: start;
  justify-self: center;
  width: 100%;

  @media (min-width: 800px) {
    border-top: none;
    border-right: 1px solid ${({ theme }) => theme.colors.glassBorder};
    align-self: stretch;
    justify-self: stretch;
    padding: ${({ theme }) => theme.spacing.xl};
    width: auto; /* Cede el control del ancho al contenedor del Grid macro */
  }
`;

export const StyledMain = styled.main`
  grid-area: main;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 800px) {
    padding: ${({ theme }) => theme.spacing.xl};
    
    /* MEJOR PRÁCTICA OPCIONAL: Si quieres limitar el estiramiento en monitores enormes */
    & > * {
      width: 100%;
      max-width: 800px; /* Evita que la lista de todos se vuelva gigante */
    }
  }
`;

export const StyledFooter = styled.footer`
  grid-area: footer;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.glass};
  border-top: 1px solid ${({ theme }) => theme.colors.glassBorder};
  text-align: center;
`;
```


### Código anterior/respaldo: Dash/grid principal

```
import styled from 'styled-components';

export const TemplateWrapper = styled.div`
  display: grid;
  grid-template-areas: 
    "header"
    "main"
    "sidebar"
    "footer";
  grid-template-columns: minmax(0, 1fr);
  min-height: 100vh;
  width: 100%;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  
  @media (min-width: 800px) {
    grid-template-areas: 
      "header header"
      "sidebar main"
      "footer footer";
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto 1fr;
  }
`;

export const StyledHeader = styled.header`
  grid-area: header;
  top: 0;
  z-index: 100;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.glass};
  border-bottom: 1px solid ${({ theme }) => theme.colors.glassBorder};

  @media (min-width: 800px) {
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  }
`;

export const StyledSidebar = styled.aside`
  grid-area: sidebar;
  padding: ${({ theme }) => theme.spacing.md};
  position: relative;
  border-top: 1px solid ${({ theme }) => theme.colors.glassBorder};
  align-self: start;
  justify-self: center;
  width: 100%;

  @media (min-width: 800px) {
    border-top: none;
    border-right: 1px solid ${({ theme }) => theme.colors.glassBorder};
    align-self: stretch;
    justify-self: stretch;
    padding: ${({ theme }) => theme.spacing.xl};
    width: auto;
  }
`;

export const StyledMain = styled.main`
  grid-area: main;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 800px) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

export const StyledFooter = styled.footer`
  grid-area: footer;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.glass};
  border-top: 1px solid ${({ theme }) => theme.colors.glassBorder};
  text-align: center;
`;
```





# Maquetación del Main

TodoTemplate

Estilo:

```
import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  background: radial-gradient(
    circle at top center,
    oklch(25% 0.12 250) 0%,
    ${({ theme }) => theme.colors.background} 100%
  );
  display: flex;
  justify-content: center;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md};
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const HeaderSection = styled.header`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  
  h1 {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    /* Un pequeño brillo de texto para el título */
    text-shadow: 0 0 20px ${({ theme }) => theme.colors.primary}40;
  }
`;

export const InputSection = styled.section`
  top: ${({ theme }) => theme.spacing.md};
  z-index: 10;
  /* Añadimos un pequeño difuminado detrás cuando el input se queda pegado arriba */
  &::before {
    content: '';
    inset: -10px;
    background: ${({ theme }) => theme.colors.background}80;
    backdrop-filter: blur(8px);
    z-index: -1;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    opacity: 0;
    transition: opacity 0.3s;
  }
`;

export const ListSection = styled.section`
  flex: 1;
`;
```


## Movil

TodoTemplate

### Posibles cambios

TodoTemplate al estar este componente contenido dentro de StyledMain
de DashboardTemplate

Hace "Efecto Muñeca Rusa"
(demasiadas capas con bordes, fondos y paddings anidados).

1. Bordes Anidados
problema: DashboardTemplate ya tiene un borde, un fondo de cristal y un border-radius: 16px;.
Al meterle a PageWrapper otro borde, otro radio de curvatura de 16px y un degradado radial propio
en móviles se genera un ruido visual masivo que asfixia el contenido útil

solución: En móviles, la página interna debe "fusionarse" de manera invisible con el contenedor principal del Dashboard
Quitaremos los bordes, radios y degradados pesados en la vista base (móvil)
y los activaremos únicamente en escritorios como un refinamiento estético.

2. Densidad de Datos y Ajuste de Gaps
problema: ContentContainer tiene un gap: ${({ theme }) => theme.spacing.xl};.

Si tu spacing.xl es grande, la distancia vertical entre el título
el input y la lista alejará demasiado los elementos en un teléfono, obligando al usuario a hacer scroll antes de tiempo.

solución: Aplicar un enfoque responsivo escalonado: un gap más ajustado en móviles (spacing.md o lg)
y expandirlo a xl al cruzar la barrera de los 800px.


### Código de refactorización

```
import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
  /* Mobile-First: En pantallas chicas eliminamos doble borde y fondo pesado */
  background: transparent;
  border: none;
  border-radius: 0;
  padding: ${({ theme }) => theme.spacing.sm}; /* Un respiro sutil */

  @media (min-width: 800px) {
    /* En escritorio se comporta como una tarjeta elegante flotante */
    background: radial-gradient(
      circle at top center,
      oklch(25% 0.12 250) 0%,
      ${({ theme }) => theme.colors.background} 100%
    );
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.glassBorder};
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  /* Espaciado responsivo: comprimido en móvil, aireado en escritorio */
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: 800px) {
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const HeaderSection = styled.header`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  
  h1 {
    font-size: 1.8rem; /* Un poco más compacto en móviles */
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    text-shadow: 0 0 20px ${({ theme }) => theme.colors.primary}40;
  }

  @media (min-width: 800px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const InputSection = styled.section`
  /* SOLUCIÓN AL BUG: Activamos el comportamiento pegajoso real */
  position: sticky;
  top: 0; /* Se alinea al ras del contenedor al hacer scroll */
  z-index: 10;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  
  /* Fondo de respaldo sólido/semitransparente para ocultar el scroll inferior */
  background: ${({ theme }) => theme.colors.background}; 

  /* Tu excelente efecto de difuminado potenciado */
  &::before {
    content: '';
    inset: -10px;
    background: ${({ theme }) => theme.colors.background}80;
    backdrop-filter: blur(8px);
    z-index: -1;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    opacity: 1; /* Lo dejamos activo para suavizar los elementos que pasan por debajo */
  }
`;

export const ListSection = styled.section`
  flex: 1;
  width: 100%;
`;
```

Mejoras:

1. sin asfixia:
Al remover el doble borde del wrapper interno en móviles
tu lista de tareas ganará todo el ancho real de la pantalla
haciendo juego perfecto con las correcciones fluidas que le hicimos a TodoItem

2. Scroll impecable
Cuando tengas más de 10 tareas y deslices la pantalla hacia arriba
verás cómo el input se ancla mágicamente al tope del viewport
y las tareas se desvanecen por debajo gracias al backdrop-filter combinado con el nuevo position: sticky;.



## Escritorio

En móvil (donde buscamos eliminar capas y ganar densidad de datos),
en escritorio el espacio sobra, 
El objetivo principal aquí es generar jerarquía visual, legibilidad y acabados premium (efecto UI de escritorio),

aprovechando al máximo ese contenedor flotante de max-width: 700px.
de max-width: 700px.

1. Principio de "Elevación Visual" (Glow e Iluminación Sutil)
Ya que estás usando una estética oscura con tintes cibernéticos/cristal
(oklch, glassBorder, text-shadow)
la vista de escritorio es el escenario ideal para que el PageWrapper se sienta como una tarjeta flotante tridimensional sobre el fondo del dashboard

mejora:
Agregaremos una sombra proyectada profunda (box-shadow)
combinada con una línea de luz interna (inset border)
para simular un cristal pulido hiperrealista.

2. Escalado Tipográfico y Ritmo Vertical:

problema: En pantallas de escritorio, si mantienes los títulos y espaciados pequeños del móvil, el diseño se siente "tacaño"
" o vacío, perdiendo el impacto visual del encabezado.

mejora: Incrementamos el tamaño de fuente del h1 de manera responsiva
y aumentamos ligeramente los gap verticales para que la transición entre el título
el input y la lista de tareas se sienta espaciosa y ejecutiva.

3. Sincronización del Sticky Input con el Layout Macro

detalle técnico:
Al declarar position: sticky; top: 0; en el InputSection para móviles
el elemento se pega perfectamente al ras del navegador
Pero ¡cuidado! En escritorio, tu DashboardTemplate tiene un StyledHeader.

regla:
Si tu cabecera global de la aplicación se mantiene fija arriba al hacer scroll
el top: 0; del input colisionará o se esconderá detrás de ella
Necesitamos asegurarnos de que la propiedad top tenga el margen suficiente para convivir armónicamente con el header macro


### Código de refactorización

```
import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
  /* ── VISTA MÓVIL (Base) ──
     Eliminamos el doble borde y fondo para fusionarse limpiamente con el Dashboard */
  background: transparent;
  border: none;
  border-radius: 0;
  padding: ${({ theme }) => theme.spacing.sm};
  transition: all 0.3s ease;

  /* ── VISTA ESCRITORIO ── */
  @media (min-width: 800px) {
    background: radial-gradient(
      circle at top center,
      oklch(25% 0.12 250) 0%,
      ${({ theme }) => theme.colors.background} 100%
    );
    border-radius: 24px; /* Un radio un poco más imponente */
    border: 1px solid ${({ theme }) => theme.colors.glassBorder};
    padding: ${({ theme }) => theme.spacing.xl};
    
    /* MEJOR PRÁCTICA: Sombra multicapa premium para dar profundidad */
    box-shadow: 
      0 30px 60px oklch(0% 0 0 / 30%),
      inset 0 1px 0px oklch(100% 0 0 / 12%); /* Reflejo superior estilo cristal */
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 700px; /* La medida perfecta para que el ojo humano lea sin cansarse */
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: 800px) {
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const HeaderSection = styled.header`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  
  h1 {
    font-size: 1.8rem;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    text-shadow: 0 0 20px ${({ theme }) => theme.colors.primary}40;
    transition: font-size 0.3s ease;
  }

  @media (min-width: 800px) {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    
    h1 {
      font-size: 2.6rem; /* Título imponente en pantallas grandes */
    }
  }
`;

export const InputSection = styled.section`
  position: sticky;
  /* TIP PRO: Si el header de tu app es fijo, suma su altura aquí (ej: top: 70px;) */
  top: 0; 
  z-index: 10;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  background: ${({ theme }) => theme.colors.background};

  &::before {
    content: '';
    inset: -10px;
    background: ${({ theme }) => theme.colors.background}80;
    backdrop-filter: blur(8px);
    z-index: -1;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    opacity: 1;
  }

  @media (min-width: 800px) {
    padding: ${({ theme }) => theme.spacing.md} 0;
  }
`;

export const ListSection = styled.section`
  flex: 1;
  width: 100%;
`;
```



# Fix: Error lógico: clickear en completadas / vista muestra 'No hay tareas pendientes'



## Posibles código problematico:

1. TodoPage

```
      <TodoTemplate
        header={
          <div>
            <Typography variant="title">
              {filter === 'all'
                ? 'Mis Tareas'
                : filter === 'pending'
                  ? 'Pendientes'
                  : 'Completadas'}
            </Typography>
            <Typography variant="body">
              {stats.pending === 0
                ? '¡Estás al día! No hay tareas pendientes.'
                : `Tienes ${stats.pending} asuntos por resolver hoy.`}
            </Typography>
          </div>
        }

```


2. Todolist

```
export const TodoList = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
  isSearching,
}: TodoListProps) => {
  const hasTodos = todos.length > 0;

  return (
    <ListWrapper>
      {!hasTodos ? (
        <EmptyState>
          {/* Cambiamos el icono y el texto según si es búsqueda o lista vacía */}
          <span style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            {isSearching ? '🔍' : '📝'}
          </span>

          <Typography variant="body">
            {isSearching ? 'No hay coincidencias' : 'No hay tareas pendientes'}
          </Typography>

          <Typography variant="body" style={{ marginTop: '8px' }}>
            {isSearching
              ? 'Prueba con otros términos o limpia el buscador.'
              : '¡Añade algo para empezar el día!'}
          </Typography>
        </EmptyState>
      ) : (
        <StyledList>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.content}
              completed={todo.isCompleted}
              onToggle={onToggleTodo}
              onDelete={onDeleteTodo}
            />
          ))}
        </StyledList>
      )}
    </ListWrapper>
  );
};
```


3. TodoItem

```
import { Checkbox } from '../../atoms/Checkbox/Checkbox';
import { Typography } from '../../atoms/Typography/Typography';
import { IconButton } from '../../atoms/IconButton/IconButton';
import {
  ItemContainer,
  ContentWrapper,
  TextContainer,
} from './TodoItem.styles';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({
  id,
  text,
  completed,
  onToggle,
  onDelete,
}: TodoItemProps) => {
  const checkboxId = `todo-check-${id}`;

  const handleToggle = () => onToggle(id);

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onDelete(id);
  };

  return (
    <ItemContainer $isCompleted={completed}>
      <ContentWrapper as="label" htmlFor={checkboxId}>
        <Checkbox
          id={checkboxId}
          checked={completed}
          onChange={handleToggle}
          aria-label={
            completed ? 'Marcar como pendiente' : 'Marcar como completada'
          }
        />
        <TextContainer $isCompleted={completed}>
          <Typography variant="body">{text}</Typography>
        </TextContainer>
      </ContentWrapper>

      <IconButton
        icon="🗑️" // SVG
        label="Eliminar tarea"
        onClick={handleDelete}
      />
    </ItemContainer>
  );
};

```



4. Hook

```
import { useReducer, useEffect, useMemo } from 'react';
import { taskReducer, initialState } from '@/store/task.reducer';
import { storageService } from '@/services/storage.service';
import type { TaskFilter } from '@/core/task.entity';

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

  // 3. Estado derivado: Filtrado combinado
  const filteredTasks = useMemo(() => {
    // Pre-procesamos la búsqueda una sola vez por cada cambio de query
    const cleanQuery = (state.searchQuery || '').toString().toLowerCase();
    const activeFilter = state.filter;

    return state.tasks.filter((task) => {
      // 1. Filtro de estado (muy rápido, comparaciones simples)
      const matchesFilter =
        activeFilter === 'all' ||
        (activeFilter === 'pending' && !task.isCompleted) ||
        (activeFilter === 'completed' && task.isCompleted);

      // 2. Filtro de búsqueda (usamos cleanQuery ya procesada)
      const matchesSearch = (task.content || '')
        .toLowerCase()
        .includes(cleanQuery);

      return matchesFilter && matchesSearch;
    });
  }, [state.tasks, state.filter, state.searchQuery]);

  // Estadísticas memoizadas
  const stats = useMemo(
    () => ({
      total: state.tasks.length,
      pending: state.tasks.filter((t) => !t.isCompleted).length,
      completed: state.tasks.filter((t) => t.isCompleted).length,
    }),
    [state.tasks],
  );

  // 4. API pública del Hook (Acciones simplificadas)
  const add = (content: string) =>
    dispatch({ type: 'ADD_TASK', payload: content });
  const toggle = (id: string) => dispatch({ type: 'TOGGLE_TASK', payload: id });
  const remove = (id: string) => dispatch({ type: 'REMOVE_TASK', payload: id });
  const setFilter = (filter: TaskFilter) =>
    dispatch({ type: 'SET_FILTER', payload: filter });
  const setSearchQuery = (query: string) =>
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
  const clearCompleted = () => dispatch({ type: 'CLEAR_COMPLETED' });

  return {
    tasks: filteredTasks,
    filter: state.filter,
    searchQuery: state.searchQuery,
    stats,
    add,
    toggle,
    remove,
    setFilter,
    setSearchQuery,
    clearCompleted,
  };
};

```


5. reducer

```
import type { Task, TaskFilter } from '@/core/task.entity';
import * as TaskLogic from '@/core/task.logic';

// Definimos el estado global de esta característica
export interface TaskState {
  tasks: Task[];
  filter: TaskFilter;
  searchQuery: string;
}

// Discriminante de acciones: El compilador sabrá qué payload tiene cada una
export type TaskAction =
  | { type: 'ADD_TASK'; payload: string }
  | { type: 'TOGGLE_TASK'; payload: string }
  | { type: 'REMOVE_TASK'; payload: string }
  | { type: 'SET_FILTER'; payload: TaskFilter }
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'CLEAR_COMPLETED' };

export const initialState: TaskState = {
  tasks: [],
  filter: 'all',
  searchQuery: '',
};

export const taskReducer = (
  state: TaskState,
  action: TaskAction,
): TaskState => {
  switch (action.type) {
    case 'ADD_TASK':
      // Usamos lógica de dominio
      return {
        ...state,
        tasks: [...state.tasks, TaskLogic.createTask(action.payload)],
      };

    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload ? TaskLogic.toggleStatus(t) : t,
        ),
      };

    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };

    case 'SET_FILTER': {
      const nextFilter =
        state.filter === action.payload ? 'all' : action.payload;

      return {
        ...state,
        filter: nextFilter,
      };
    }
    
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };

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



# Fix: lupa del buscador se pisa con el cursor

## Reproducción a través de los valores de estado:

1. Cuando no hay tareas completadas y filtramos:
por 'todas'

el main devuelve a traves de `TodoList` dos textos:

No hay tareas pendientes
¡Añade algo para empezar el día! 


2. Interactuan:

filteritem
todolist
todopage

tienen lógica renderizado 


3. hook
cuando no hay completadas

Componentes:

Ej:


TodoList
##### usa estado searching: Segun el valor de busqueda reemplaza la lista

```
import { TodoItem } from '../../molecules/TodoItem/TodoItem';
import { Typography } from '../../atoms/Typography/Typography';
import { ListWrapper, StyledList, EmptyState } from './TodoList.styles';
import type { Task } from '@/core/task.entity';

interface TodoListProps {
  todos: Task[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
  isSearching: boolean;
}

export const TodoList = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
  isSearching,
}: TodoListProps) => {
  const hasTodos = todos.length > 0;

  return (
    <ListWrapper>
      {!hasTodos ? (
        <EmptyState>
          {/* Cambiamos el icono y el texto según si es búsqueda o lista vacía */}
          <span style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            {isSearching ? '🔍' : '📝'}
          </span>

          <Typography variant="body">
            {isSearching ? 'No hay coincidencias' : 'No hay tareas pendientes'}
          </Typography>

          <Typography variant="body" style={{ marginTop: '8px' }}>
            {isSearching
              ? 'Prueba con otros términos o limpia el buscador.'
              : '¡Añade algo para empezar el día!'}
          </Typography>
        </EmptyState>
      ) : (
        <StyledList>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.content}
              completed={todo.isCompleted}
              onToggle={onToggleTodo}
              onDelete={onDeleteTodo}
            />
          ))}
        </StyledList>
      )}
    </ListWrapper>
  );
};
```


TodoPage/todotemplate:
##### usa estados: filter, stats

```
      <TodoTemplate
        header={
          <div>
            <Typography variant="title">
              {filter === 'all'
                ? 'Mis Tareas'
                : filter === 'pending'
                  ? 'Pendientes'
                  : 'Completadas'}
            </Typography>
            <Typography variant="body">
              {stats.pending === 0
                ? '¡Estás al día! No hay tareas pendientes.'
                : `Tienes ${stats.pending} asuntos por resolver hoy.`}
            </Typography>
          </div>
        }
        inputSlot={<TodoInput onAdd={add} />}
        listSlot={
          /* 'tasks' filtrado por categoría 
             y por búsqueda gracias al useMemo del hook.
          */
          <div data-testid="todo-list-container">
            <TodoList
              todos={tasks}
              onToggleTodo={toggle}
              onDeleteTodo={remove}
              isSearching={searchQuery.trim().length > 0}
            />
          </div>
        }
      />

```



## Posible código conflictivo: reconstruir flujo/ruta component


1. SearchInput

Componente:

```
/*
import { Input } from '../../atoms/Input/Input';
import { SearchContainer, SearchIcon } from './SearchInput.styles';

export const SearchInput = ({ value, onChange, placeholder = 'buscar...' }) => {
  return (
    <SearchContainer>
      <SearchIcon>🔍</SearchIcon>
      <Input value={value} onChange={onChange} placeholder={placeholder} />
    </SearchContainer>
  );
};
*/

import { Input } from '../../atoms/Input/Input';
import { SearchContainer, SearchIcon } from './SearchInput.styles';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSearch?: () => void;
  placeholder?: string;
  className?: string;
}

export const SearchInput = ({
  value,
  onChange,
  onSearch,
  placeholder = 'Buscar tareas...',
}: SearchInputProps) => {
  return (
    <SearchContainer>
      <SearchIcon role="img" aria-label="Icono de búsqueda">
        🔍
      </SearchIcon>

      <Input
        value={value}
        onChange={onChange}
        onEnter={onSearch}
        placeholder={placeholder}
        type="text"
      />
    </SearchContainer>
  );
};

```


Estilo:

```
import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 8px;
  font-size: 0.9rem;
  opacity: 0.5;
  pointer-events: none; // Para que no interfiera al hacer click en el input
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 12px 10px 36px; // Espacio extra a la izquierda para el icono
  
  /* Estilo Liquid Glass */
  background: rgba(255, 255, 255, 0.05); 
  backdrop-filter: blur(4px); // Efecto de desenfoque detrás del cristal
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  
  color: #ffffff;
  font-size: 0.9rem;
  outline: none;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
  }
`;
```


2. Input

Componente

```
import { StyledInput } from './Input.styles';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onEnter?: () => void;
  disabled?: boolean;
  type?: 'text' | 'password' | 'email' | 'number';
}

export const Input = ({
  value,
  onChange,
  placeholder,
  onEnter,
  disabled = false,
  type = 'text',
}: InputProps) => {
  // Manejador interno para extraer el valor
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  // Manejador interno para la tecla Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onEnter) {
      onEnter();
    }
  };

  return (
    <StyledInput
      type={type}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      disabled={disabled}
      aria-label={placeholder}
    />
  );
};

```

Estilo

```
import styled from 'styled-components';
import { mixins } from '../../../styles/mixins';

export const StyledInput = styled.input`
  /* 1. Base del diseño: Efecto Cristal */
  ${mixins.glass}
  
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  
  /* 2. Tipografía */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.textPrimary};
  
  /* 3. Animación y Estados */
  transition: ${({ theme }) => theme.transitions.default};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.7;
  }

  /* 4. Foco: Aplicamos el brillo "Electric Blue" */
  &:focus {
    ${mixins.electricGlow}
    background: oklch(100% 0 0 / 12%); /* Aclaramos un poco el cristal al escribir */
    outline: none;
  }

  /* 5. Estado Deshabilitado */
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    filter: grayscale(1);
  }
`;
```



# Herencia de estilos de un elemento a otro


## Fix: box-shadow

div externo:

```
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  
  box-shadow: 
    0 30px 60px oklch(0% 0 0 / 30%),
    inset 0 1px 0px oklch(100% 0 0 / 12%); /* Reflejo superior estilo cristal */
  }

```

div interno

```
  border-radius: 16px 16px 0px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.glassBorder};

  box-shadow: 
    0 30px 60px oklch(0% 0 0 / 30%),
    inset 0 1px 0px oklch(100% 0 0 / 12%); /* Reflejo superior estilo cristal */
  }
```


# Fix logica condicional interna y renderizado

TodoList tiene:

```
`todos.length > 0'` interno de TodoList. 
```

al filtrar por completadas (cuando no tenemos ninguna tarea hecha)
nos muestra el renderizado condicional del componente 'TodoList'
y no las tareas que tenemos que completar.

TodoPage:
consciente del contexto global (sabe qué filtro está activo y cuántas tareas hay en cada categoría),

TodoList:
intentando ser inteligente
adivinando el estado vacío basándose únicamente en un booleano (isSearching).
Al tener textos estáticos hardcoded
rompe el Principio de Responsabilidad Única (SRP),
un componente de presentación no debería dictar la lógica de negocio de los mensajes


## Opciones

1. Inversión de Control (Pasar textos o configuración por Props)
En lugar de que la lista decida qué decir
le quitamos esa responsabilidad y hacemos que el padre (TodoPage) se lo dicte

Mecánica:
TodoPage evalúa si estamos en "pendientes", "completadas" o "buscando"
le pasa a TodoList propiedades exactas como emptyTitle, emptyDescription y emptyIcon.

Ventaja Arquitectónica:
TodoList vuelve a ser un componente "tonto" (puro de presentación).
Es altamente reutilizable y cumple con los principios SOLID a la perfección
Si mañana agregas una categoría "Urgentes", no tienes que modificar la lista en absoluto

2. Delegación Total (Renderizado Condicional en el Padre)
Si una lista está vacía, ¿realmente necesitamos renderizar el componente "Lista"?

Mecánica: Extraemos ese bloque de EmptyState que vive dentro de TodoList
y lo convertimos en su propio componente independiente (ej. EmptyFeedback).
Luego, en TodoPage, hacemos un renderizado condicional
si tasks.length es 0, mostramos <EmptyFeedback />;
si hay tareas, renderizamos <TodoList />.

Ventaja Arquitectónica: Máxima separación de preocupaciones
La lista se dedicará exclusivamente a iterar un array que sabe que siempre tiene elementos
El padre orquesta el flujo de la interfaz de usuario.

3. Pasar el Filtro Activo (El camino rápido)
Hacemos que TodoList sea más consciente de su entorno pasándole la variable de estado del filtro

Mecánica: Le enviamos a TodoList una nueva prop llamada currentFilter
(que puede ser 'all', 'pending', o 'completed').
Dentro de TodoList, usamos un condicional múltiple (o un diccionario/mapa)
para devolver el texto correcto según el filtro.

Ventaja Arquitectónica: solución que requiere menos movimientos de refactorización estructural
Sin embargo, acopla la lógica de negocio al componente de presentación
(si cambias los nombres de los filtros en tu lógica global, tendrás que acordarte de cambiarlos dentro de la lista).


## Opción 3: camino rapido

1. Actualización de TodoList.tsx
añadimos currentFilter a la interfaz y creamos una función helper
(o un objeto de mapeo) que determine qué contenido mostrar cuando el arreglo de tareas esté vacío
La búsqueda (isSearching) sigue teniendo prioridad absoluta:
si el usuario escribe en el buscador y no hay resultados
se muestra el estado de búsqueda sin importar el filtro en el que esté.

```
import { TodoItem } from '../../molecules/TodoItem/TodoItem';
import { Typography } from '../../atoms/Typography/Typography';
import { ListWrapper, StyledList, EmptyState } from './TodoList.styles';
import type { Task } from '@/core/task.entity';

// 1. Extendemos la interfaz para aceptar el tipo de filtro actual
interface TodoListProps {
  todos: Task[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
  isSearching: boolean;
  currentFilter: 'all' | 'pending' | 'completed'; 
}

export const TodoList = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
  isSearching,
  currentFilter,
}: TodoListProps) => {
  const hasTodos = todos.length > 0;

  // 2. Diccionario estático para resolver los mensajes según el contexto
  const getEmptyStateContent = () => {
    if (isSearching) {
      return {
        icon: '🔍',
        title: 'No hay coincidencias',
        description: 'Prueba con otros términos o limpia el buscador.',
      };
    }

    const configs = {
      all: {
        icon: '📝',
        title: 'No hay tareas',
        description: '¡Añade algo para empezar el día!',
      },
      pending: {
        icon: '⚡',
        title: 'No hay tareas pendientes',
        description: '¡Estás al día! No te queda ningún asunto por resolver.',
      },
      completed: {
        icon: '✅',
        title: 'No hay tareas completadas',
        description: 'Aún no has terminado ninguna tarea. ¡Paso a paso!',
      },
    };

    return configs[currentFilter];
  };

  const { icon, title, description } = getEmptyStateContent();

  return (
    <ListWrapper>
      {!hasTodos ? (
        <EmptyState>
          <span style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            {icon}
          </span>

          <Typography variant="body" style={{ fontWeight: 'bold' }}>
            {title}
          </Typography>

          <Typography variant="body" style={{ marginTop: '8px' }}>
            {description}
          </Typography>
        </EmptyState>
      ) : (
        <StyledList>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.content}
              completed={todo.isCompleted}
              onToggle={onToggleTodo}
              onDelete={onDeleteTodo}
            />
          ))}
        </StyledList>
      )}
    </ListWrapper>
  );
};
```


2. Actualización de TodoPage.tsx
En el componente de la página, el único cambio necesario es inyectar el estado filter
(que ya extraes del hook useTasks) directamente en la nueva prop currentFilter de <TodoList />.


```
<TodoTemplate
        header={
          <div>
            <Typography variant="title">
              {filter === 'all'
                ? 'Mis Tareas'
                : filter === 'pending'
                  ? 'Pendientes'
                  : 'Completadas'}
            </Typography>
            <Typography variant="body">
              {stats.pending === 0
                ? '¡Estás al día! No hay tareas pendientes.'
                : `Tienes ${stats.pending} asuntos por resolver hoy.`}
            </Typography>
          </div>
        }
        inputSlot={<TodoInput onAdd={add} />}
        listSlot={
          <div data-testid="todo-list-container">
            {/* ENLACE DE CONTEXTO: Pasamos la variable filter al hijo */}
            <TodoList
              todos={tasks}
              onToggleTodo={toggle}
              onDeleteTodo={remove}
              isSearching={searchQuery.trim().length > 0}
              currentFilter={filter} 
            />
          </div>
        }
      />
```


1. Eliminación de la lógica ciega:
TodoList ya no asume de manera genérica que cualquier lista vacía significa que "no hay tareas pendientes"
Ahora sabe con certeza matemática qué pestaña está mirando el usuario.

2. Priorización del buscador:
Al colocar la validación if (isSearching) al principio de la función getEmptyStateContent
garantizamos que si el usuario está filtrando por "Completadas" y escribe algo en el input de búsqueda que no da resultados
la app responderá correctamente con el icono de la lupa (🔍) y el texto de coincidencia no encontrada, en lugar del mensaje de categoría vacía.

3. Escalabilidad limpia: Centralizar los textos dentro del objeto configs
hace que modificar los copys o añadir nuevas vistas en el futuro sea sumamente sencillo
ace que modificar los copys o añadir nuevas vistas en el futuro sea sumamente sencillo


### Uso del tipo TaskFilter

1. "Todas" y "Pendientes" parecían funcionar
y no interferían con la búsqueda

ilusión lógica (un falso positivo) debido a los textos fijos que tenías escritos en el código.
##### hook de tu página (useTasks) ya hace el trabajo pesado de filtrar el arreglo de tareas antes de pasárselo a TodoList
Por lo tanto, cuando una categoría no tiene elementos,
el arreglo llega con una longitud de cero (todos.length > 0 es falso)
en cualquiera de los tres casos.

Al llegar ahí, si el usuario no está buscando nada (isSearching es falso),
el componente siempre mostraba el texto por defecto: "No hay tareas pendientes".

En el filtro 'Pendientes': El texto coincidía al 100% con lo que el usuario esperaba ver
Si la pestaña está vacía, es verdad que "no hay tareas pendientes".

En el filtro 'Todas': Si la aplicación está completamente vacía, decir "no hay tareas pendientes"
técnicamente se siente aceptable para el usuario, por lo que no se percibía como un error.

##### 'Completadas': Aquí se rompía la ilusión
Si tenías 3 tareas pendientes y 0 completadas, el arreglo llegaba vacío.
La aplicación te mostraba "No hay tareas pendientes", lo cual era contradictorio y confuso
porque el usuario justamente estaba parado en la pestaña de completadas.

La búsqueda (isSearching) nunca interfirió porque su lógica está blindada con un operador ternario
si el usuario escribe, el mensaje cambia por completo al de la lupa, ocultando cualquier otro texto.


### Código usando el tipo TaskFilter

```
import { TodoItem } from '../../molecules/TodoItem/TodoItem';
import { Typography } from '../../atoms/Typography/Typography';
import { ListWrapper, StyledList, EmptyState } from './TodoList.styles';
// 1. Importamos el tipo TaskFilter junto con Task
import type { Task, TaskFilter } from '@/core/task.entity';

interface TodoListProps {
  todos: Task[];
  currentFilter: TaskFilter; // 2. Acoplamos fuertemente el componente al contrato de filtros del Core
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
  isSearching: boolean;
}

// 3. Definimos la estructura de lo que necesita un Empty State para renderizarse
interface EmptyContent {
  icon: string;
  title: string;
  description: string;
}

export const TodoList = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
  isSearching,
  currentFilter,
}: TodoListProps) => {
  const hasTodos = todos.length > 0;

  // 4. MEJOR PRÁCTICA: Diccionario fuertemente tipado con Record<TaskFilter, EmptyContent>
  // TypeScript te obligará a rellenar 'all', 'pending' y 'completed'. Si mañana agregas otro, romperá en compilación si lo olvidas.
  const emptyStatesConfig: Record<TaskFilter, EmptyContent> = {
    all: {
      icon: '📝',
      title: 'No hay tareas',
      description: '¡Añade algo para empezar el día!',
    },
    pending: {
      icon: '⚡',
      title: 'No hay tareas pendientes',
      description: '¡Felicidades! Estás completamente al día.',
    },
    completed: {
      icon: '✅',
      title: 'No hay tareas completadas',
      description: 'Aún no has terminado ninguna tarea. ¡Paso a paso!',
    },
  };

  // 5. Lógica de resolución limpia (Cortocircuito si está buscando)
  const getEmptyContent = (): EmptyContent => {
    if (isSearching) {
      return {
        icon: '🔍',
        title: 'No hay coincidencias',
        description: 'Prueba con otros términos o limpia el buscador.',
      };
    }
    
    // Si no está buscando, extrae la configuración directa del tipo mapeado
    return emptyStatesConfig[currentFilter];
  };

  const { icon, title, description } = getEmptyContent();

  return (
    <ListWrapper>
      {!hasTodos ? (
        <EmptyState>
          <span style={{ fontSize: '3rem', marginBottom: '1rem' }} role="img" aria-label="status">
            {icon}
          </span>

          <Typography variant="body" style={{ fontWeight: 'bold' }}>
            {title}
          </Typography>

          <Typography variant="body" style={{ marginTop: '8px', opacity: 0.8 }}>
            {description}
          </Typography>
        </EmptyState>
      ) : (
        <StyledList>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.content}
              completed={todo.isCompleted}
              onToggle={onToggleTodo}
              onDelete={onDeleteTodo}
            />
          ))}
        </StyledList>
      )}
    </ListWrapper>
  );
};
```

##### Uso del utilitario Record<Keys, Type>
Al declarar Record<TaskFilter, EmptyContent>
blindas el código. Si en el futuro tu jefe o cliente te pide añadir la categoría "Archivadas" o "Urgentes" al core
en el momento en que modifiques core/task.entity.ts, este archivo TodoList.tsx se marcará en rojo inmediatamente
avisándote de que te falta configurar el texto para esa nueva pestaña. Eso es diseño defensivo

Separación de Intereses (Separation of Concerns): La función getEmptyContent encapsula la toma de decisiones algorítmicas
dejando al ciclo de vida de React únicamente la tarea de pintar las propiedades destructuradas
(icon, title, description).


### Actualización TodoPage

useTasks ya expone el estado filter
hereda el tipo estricto TaskFilter
debemos hacer es pasarle esa variable directamente a la nueva propiedad currentFilter de tu lista

```
import { useMemo } from 'react';
import { useTasks } from '../../../hooks/useTasks';
import { DashboardTemplate } from '../../templates/DashboardTemplate/DashboardTemplate';
import { TodoTemplate } from '../../templates/TodoTemplate/TodoTemplate';
import { TaskSidebar } from '../../organisms/TaskSidebar/TaskSidebar';
import { TodoList } from '../../organisms/TodoList/TodoList';
import { TodoInput } from '../../molecules/TodoInput/TodoInput';
import { Typography } from '../../atoms/Typography/Typography';
import { Button } from '../../atoms/Button/Button';

export const TodoPage = () => {
  // 1. Extraemos todo del hook, incluyendo 'filter' (vía TaskFilter)
  const {
    tasks,
    add,
    toggle,
    remove,
    filter, 
    setFilter,
    searchQuery,
    setSearchQuery,
    stats,
    clearCompleted,
  } = useTasks();

  // 2. Mapeamos las categorías para el CategoryFilter
  const categories = useMemo(
    () => [
      { id: 'all', label: 'Todas', count: stats.total },
      { id: 'pending', label: 'Pendientes', count: stats.pending },
      { id: 'completed', label: 'Completadas', count: stats.completed },
    ],
    [stats],
  );

  return (
    <DashboardTemplate
      header={<Typography variant="body">Liquid Task</Typography>}
      sidebar={
        <div>
          <TaskSidebar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            categories={categories}
            activeFilterId={filter}
            onFilterChange={(id) => setFilter(id)}
          />

          {/* Botón de acción global del sidebar */}
          {stats.completed > 0 && (
            <div style={{ padding: '0 1rem 1rem 1rem', marginTop: '1.5rem' }}>
              <Button
                variant="secondary"
                onClick={clearCompleted}
                style={{ width: '100%' }}
              >
                Borrar completadas ({stats.completed})
              </Button>
            </div>
          )}
        </div>
      }
    >
      <TodoTemplate
        header={
          <div>
            <Typography variant="title">
              {filter === 'all'
                ? 'Mis Tareas'
                : filter === 'pending'
                  ? 'Pendientes'
                  : 'Completadas'}
            </Typography>
            <Typography variant="body">
              {stats.pending === 0
                ? '¡Estás al día! No hay tareas pendientes.'
                : `Tienes ${stats.pending} asuntos por resolver hoy.`}
            </Typography>
          </div>
        }
        inputSlot={<TodoInput onAdd={add} />}
        listSlot={
          /* 'tasks' filtrado por categoría 
             y por búsqueda gracias al useMemo del hook.
          */
          <div data-testid="todo-list-container">
            <TodoList
              todos={tasks}
              onToggleTodo={toggle}
              onDeleteTodo={remove}
              isSearching={searchQuery.trim().length > 0}
              currentFilter={filter} // 👈 Sincronización exacta con el tipo TaskFilter
            />
          </div>
        }
      />
    </DashboardTemplate>
  );
};
```


## Opción 1: Arquitectura. Inversión de control

transforma un componente acoplado en una pieza de rompecabezas universal
cambiamos por completo la dirección de la información

en lugar de que el hijo "pregunte" o "deduzca" en qué pestaña está
el padre simplemente le "da las órdenes" de qué pintar.

1. TodoList: presentacional
se vuelve completamente "agnóstico" al negocio
No sabe qué es un filtro
no sabe qué es una base de datos
no sabe qué significa "Completadas" o "Pendientes".

`Contrato de Entrada (Props) Redefinido`:
El componente ya no recibe ni currentFilter ni isSearching
Su nueva interfaz de TypeScript simplemente exige la lista de tareas (todos)
y un nuevo paquete de datos opcional u obligatorio destinado al estado vacío
(por ejemplo: emptyIcon, emptyTitle, emptyDescription).

`Lógica de Renderizado Simplificada al Máximo`:
El condicional principal sigue siendo el mismo (todos.length > 0).

Si hay tareas, las itera.

Si no hay tareas, abre el contenedor del estado vacío e inyecta directamente las variables que llegaron por las props
sin hacer ninguna pregunta ni evaluar ninguna condición.

2. TodoPage: orquestador
Toda la "inteligencia" y el conocimiento del estado
que antes queríamos meter en la lista
ahora se quedan en su entorno natural: el componente de la página.

`Mapeo`:
Dentro de la página (idealmente envuelto en un useMemo para cuidar el rendimiento),
creas la lógica que evalúa el estado actual de la aplicación
Este motor revisa en tiempo real:
¿El buscador tiene texto?
¿Qué pestaña está activa en el sidebar?

`Paquete de Contenido`:
Basándose en esa evaluación, el motor de la página selecciona el juego exacto de textos e iconos
(el "traje" del estado vacío) y lo guarda en una constante.

`Distribución de Responsabilidades`:
Al momento de renderizar la etiqueta <TodoList/>,
la página le pasa las tareas ya filtradas y,
además, le "inyecta" desglosado ese paquete de contenido que calculó previamente.


Reutilización:
Si mañana creas una sección totalmente diferente en la app
(por ejemplo, una lista de "Proyectos" o "Categorías"),
podrías reutilizar exactamente el mismo componente TodoList
(renombrándolo a algo más genérico como DataList).
Solo tendrías que pasarle los nuevos elementos
y los nuevos textos de "No tienes proyectos creados".
La lista funciona para todo.

Mantenimiento Centralizado:
Si los textos cambian por requerimiento de diseño o traducción
ya sabes que no tienes que tocar ningún componente visual de la lista
todo se edita desde la lógica central de la página o el hook.


### Código

Opcione sobre 'Envio de Información':

1. Tres propiedades independientes:
(emptyIcon, emptyTitle, emptyDescription)

2. Agrupadas dentro de un único objeto de configuración:
(Ejemplo, emptyStateConfig)


La práctica más estándar y extendida:
Ej, usados por grandes librerías de componentes como Material UI o Ant Design
para este escenario es utilizar propiedades planas y explícitas
(emptyIcon, emptyTitle, emptyDescription).

##### Se prefiere por encima de un objeto agrupado porque evita lidiar con problemas de objetos undefined
hace que definir valores por defecto (default props)
sea sumamente sencillo y mantiene el tipado de TypeScript completamente limpio y directo en la firma del componente


### 1. TodoList:

```
import { TodoItem } from '../../molecules/TodoItem/TodoItem';
import { Typography } from '../../atoms/Typography/Typography';
import { ListWrapper, StyledList, EmptyState } from './TodoList.styles';
import type { Task } from '@/core/task.entity';

// 1. Contrato limpio: Eliminamos toda lógica de filtros y búsquedas del negocio
interface TodoListProps {
  todos: Task[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
  
  // Props de Inversión de Control (UI pura)
  emptyIcon: string;
  emptyTitle: string;
  emptyDescription: string;
}

export const TodoList = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
  emptyIcon,
  emptyTitle,
  emptyDescription,
}: TodoListProps) => {
  // 2. La única verdad del componente: ¿Hay o no hay elementos para renderizar?
  const hasTodos = todos.length > 0;

  return (
    <ListWrapper>
      {!hasTodos ? (
        <EmptyState>
          {/* 3. Renderizado ciego y directo de lo que ordene el padre */}
          <span style={{ fontSize: '3rem', marginBottom: '1rem' }} role="img" aria-label="estado-vacio">
            {emptyIcon}
          </span>

          <Typography variant="body" style={{ fontWeight: 'bold' }}>
            {emptyTitle}
          </Typography>

          <Typography variant="body" style={{ marginTop: '8px', opacity: 0.8 }}>
            {emptyDescription}
          </Typography>
        </EmptyState>
      ) : (
        <StyledList>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.content}
              completed={todo.isCompleted}
              onToggle={onToggleTodo}
              onDelete={onDeleteTodo}
            />
          ))}
        </StyledList>
      )}
    </ListWrapper>
  );
};
```

Cambios:

1. Sin diccionarios y condicionales internos: 
Desaparecieron los if (isSearching) y los objetos de configuración que mapeaban los filtros
El componente ya no tiene que "pensar".

2. Aislamiento:
Si el día de mañana decides cambiar las strings de los filtros de tu aplicación de inglés a español
o decides conectarla a una API internacional
TodoList no sufrirá ningún cambio.
Su única misión en la vida es pintar lo que le manden.

3. Declarativo, no imperativo:
El bloque del JSX quedó reducido a su mínima expresión de legibilidad
Si hasTodos es falso, inyecta directamente las variables.


### 2. TodoPage

Inversión de Control en el padre:
centralizar toda la lógica de negocio dentro de TodoPage

##### La página evaluará el estado global: global (si el usuario está buscando y qué filtro del sidebar tiene seleccionado) y
calculará el "traje" exacto que debe ponerse el estado vacío antes de renderizar la lista.

Para asegurar un excelente rendimiento y evitar recálculos innecesarios en cada render
envolveremos esta lógica de selección en un hook useMemo.

```
import { useMemo } from 'react';
import { useTasks } from '../../../hooks/useTasks';
import { DashboardTemplate } from '../../templates/DashboardTemplate/DashboardTemplate';
import { TodoTemplate } from '../../templates/TodoTemplate/TodoTemplate';
import { TaskSidebar } from '../../organisms/TaskSidebar/TaskSidebar';
import { TodoList } from '../../organisms/TodoList/TodoList';
import { TodoInput } from '../../molecules/TodoInput/TodoInput';
import { Typography } from '../../atoms/Typography/Typography';
import { Button } from '../../atoms/Button/Button';

export const TodoPage = () => {
  const {
    tasks,
    add,
    toggle,
    remove,
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    stats,
    clearCompleted,
  } = useTasks();

  // 1. Mapeamos las categorías para el CategoryFilter
  const categories = useMemo(
    () => [
      { id: 'all', label: 'Todas', count: stats.total },
      { id: 'pending', label: 'Pendientes', count: stats.pending },
      { id: 'completed', label: 'Completadas', count: stats.completed },
    ],
    [stats],
  );

  // 2. Derivamos el estado binario de búsqueda
  const isSearching = searchQuery.trim().length > 0;

  // 3. INTELIGENCIA CENTRALIZADA: Calculamos los textos del Empty State aquí
  const emptyStateProps = useMemo(() => {
    // Prioridad Absoluta: Si el usuario escribe en el buscador
    if (isSearching) {
      return {
        icon: '🔍',
        title: 'No hay coincidencias',
        description: 'Prueba con otros términos o limpia el buscador.',
      };
    }

    // Diccionario de configuración basado en las reglas de negocio del Core
    const configs = {
      all: {
        icon: '📝',
        title: 'No hay tareas',
        description: '¡Añade algo para empezar el día!',
      },
      pending: {
        icon: '⚡',
        title: 'No hay tareas pendientes',
        description: '¡Felicidades! Estás completamente al día.',
      },
      completed: {
        icon: '✅',
        title: 'No hay tareas completadas',
        description: 'Aún no has terminado ninguna tarea. ¡Paso a paso!',
      },
    };

    return configs[filter];
  }, [filter, isSearching]); // Solo se vuelve a calcular si cambia el filtro o el estado de búsqueda

  return (
    <DashboardTemplate
      header={<Typography variant="body">Liquid Task</Typography>}
      sidebar={
        <div>
          <TaskSidebar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            categories={categories}
            activeFilterId={filter}
            onFilterChange={(id) => setFilter(id)}
          />

          {/* Botón de acción global del sidebar */}
          {stats.completed > 0 && (
            <div style={{ padding: '0 1rem 1rem 1rem', marginTop: '1.5rem' }}>
              <Button
                variant="secondary"
                onClick={clearCompleted}
                style={{ width: '100%' }}
              >
                Borrar completadas ({stats.completed})
              </Button>
            </div>
          )}
        </div>
      }
    >
      <TodoTemplate
        header={
          <div>
            <Typography variant="title">
              {filter === 'all'
                ? 'Mis Tareas'
                : filter === 'pending'
                  ? 'Pendientes'
                  : 'Completadas'}
            </Typography>
            <Typography variant="body">
              {stats.pending === 0
                ? '¡Estás al día! No hay tareas pendientes.'
                : `Tienes ${stats.pending} asuntos por resolver hoy.`}
            </Typography>
          </div>
        }
        inputSlot={<TodoInput onAdd={add} />}
        listSlot={
          <div data-testid="todo-list-container">
            {/* 4. INVERSIÓN DE CONTROL: Pasamos las propiedades planas calculadas */}
            <TodoList
              todos={tasks}
              onToggleTodo={toggle}
              onDeleteTodo={remove}
              emptyIcon={emptyStateProps.icon}
              emptyTitle={emptyStateProps.title}
              emptyDescription={emptyStateProps.description}
            />
          </div>
        }
      />
    </DashboardTemplate>
  );
};
```

Cambios:

1. Uso de useMemo para la configuración
Guardar la configuración en un useMemo garantiza que React no gaste ciclos de procesamiento recreando el objeto
y reevaluando los condicionales en cada parpadeo de la aplicación (
(por ejemplo, cuando el usuario escribe una letra en el input o cuando se completa una tarea).
Solo mutará si detecta que la pestaña cambió o si se activa/desactiva la búsqueda.

2. Inyección directa y desacoplada
Al renderizar <TodoList/>, le entregamos el resultado del memo desglosado
`emptyIcon={emptyStateProps.icon}`, etc
La página actúa como el director de orquesta definitivo de la pantalla:
sabe qué información provee el hook de datos (useTasks)
y sabe exactamente cómo alimentar las necesidades visuales de la interfaz de la lista.

2. Escalabilidad:
##### Si el día de mañana los diseñadores de producto deciden cambiar el flujo de la aplicación
(por ejemplo, que cuando no haya tareas completadas se muestre un botón de sugerencias en lugar de un texto)
el cambio se realiza por completo dentro de la página
o en un componente especializado de feedback
dejando el archivo de la lista intacto y libre de efectos colaterales.


Antes:

```
import { useMemo } from 'react';
import { useTasks } from '../../../hooks/useTasks';
import { DashboardTemplate } from '../../templates/DashboardTemplate/DashboardTemplate';
import { TodoTemplate } from '../../templates/TodoTemplate/TodoTemplate';
import { TaskSidebar } from '../../organisms/TaskSidebar/TaskSidebar'; // 👈 Cambiado por el nuevo
import { TodoList } from '../../organisms/TodoList/TodoList';
import { TodoInput } from '../../molecules/TodoInput/TodoInput';
import { Typography } from '../../atoms/Typography/Typography';
import { Button } from '../../atoms/Button/Button';

export const TodoPage = () => {
  // 1. Extraemos todo del hook, con las funciones
  const {
    tasks,
    add,
    toggle,
    remove,
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    stats,
    clearCompleted,
  } = useTasks();

  // 2. Mapeamos las categorías para el CategoryFilter
  const categories = useMemo(
    () => [
      { id: 'all', label: 'Todas', count: stats.total },
      { id: 'pending', label: 'Pendientes', count: stats.pending },
      { id: 'completed', label: 'Completadas', count: stats.completed },
    ],
    [stats],
  );

  return (
    <DashboardTemplate
      header={<Typography variant="body">Liquid Task</Typography>}
      sidebar={
        <div>
          <TaskSidebar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            categories={categories}
            activeFilterId={filter}
            onFilterChange={(id) => setFilter(id)}
          />

          {/* Botón de acción global del sidebar */}
          {stats.completed > 0 && (
            <div style={{ padding: '0 1rem 1rem 1rem', marginTop: '1.5rem' }}>
              <Button
                variant="secondary"
                onClick={clearCompleted}
                style={{ width: '100%' }}
              >
                Borrar completadas ({stats.completed})
              </Button>
            </div>
          )}
        </div>
      }
    >
      <TodoTemplate
        header={
          <div>
            <Typography variant="title">
              {filter === 'all'
                ? 'Mis Tareas'
                : filter === 'pending'
                  ? 'Pendientes'
                  : 'Completadas'}
            </Typography>
            <Typography variant="body">
              {stats.pending === 0
                ? '¡Estás al día! No hay tareas pendientes.'
                : `Tienes ${stats.pending} asuntos por resolver hoy.`}
            </Typography>
          </div>
        }
        inputSlot={<TodoInput onAdd={add} />}
        listSlot={
          /* 'tasks' filtrado por categoría 
             y por búsqueda gracias al useMemo del hook.
          */
          <div data-testid="todo-list-container">
            <TodoList
              todos={tasks}
              onToggleTodo={toggle}
              onDeleteTodo={remove}
              isSearching={searchQuery.trim().length > 0}
            />
          </div>
        }
      />
    </DashboardTemplate>
  );
};
```


## Opción Puente/hack logica



# Errores CSS activando desde consola




# Fix animations, transitions, Interactividad

Ej:

TodoPage

```
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 0.6s ease-in-out;
`;
```

Ej:

global styles

```
  button {
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.default};
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

```

Ej: mixins

```
  interactive: css`
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    &:active {
      transform: scale(0.98);
    }

```


## 1. transform: rotate scale

`transform: rotate(...) scale(...)`

##### transform modifica la geometría del elemento en el espacio, (sin afectar la posición de los elementos que tiene alrededor)
##### rotate y scale en la misma línea, estás aplicando dos operaciones secuenciales:

1. 
rotate(<ángulo>): Gira el elemento alrededor de un punto fijo (por defecto, su centro).
Puedes usar grados (deg) o giros (turn).

Un rotate(45deg) inclina el elemento hacia la derecha.

2. 
scale(<factor>): Cambia el tamaño del elemento
Un valor de 1 es el tamaño original. scale(1.2)
lo agranda un 20%, y scale(0.8) lo encoge un 20%.

##### Practica para transform: orden de los factores sí altera el producto
##### CSS lee las transformaciones de izquierda a derecha.

1. 
Si escribes rotate(45deg) scale(1.5)
el navegador primero gira el elemento y luego lo agranda sobre sus nuevos ejes inclinados.

2. 
En la mayoría de los casos comunes
(como un efecto hover en una tarjeta de tu dashboard)
poner ambos hará que la tarjeta gire un poco y crezca suavemente hacia el frente
dando un efecto tridimensional muy sutil



## 2. transition: transform cubic-bezier

`transition: transform <duración> cubic-bezier(...)`

##### transition le dice al navegador:  Cuando la propiedad transform cambie (por ejemplo, al hacer hover), no hagas el cambio de golpe; hazlo de forma progresiva".

1. 
transform: Especifica que la transición solo se aplicará a los cambios geométricos
(rotación, escala, posición),
ignorando cambios en colores o fuentes.

2. 
<duración>: tiempo que tardará en completarse la animación
(por ejemplo, 0.3s o 300ms).

3. 
cubic-bezier(x1, y1, x2, y2): magia de la animación física
##### Define la curva de velocidad de la transición utilizando cuatro coordenadas
##### En lugar de usar transiciones lineales y aburridas donde la velocidad es siempre la misma
##### una curva Bézier te permite emular la física del mundo real (inercia, gravedad y aceleración).

##### Las cuatro coordenadas controlan dos puntos de anclaje que estiran la curva de aceleración

1. 
Aceleración/Desaceleración (Efecto Pop):
Puedes hacer que la animación empiece extremadamente rápido
y se frene suavemente al final (cubic-bezier(0.25, 1, 0.5, 1)).

2. 
Efecto Anticipación o Rebote:
Si juegas con valores negativos o mayores que 1 en el eje Y
puedes lograr que el elemento se "encoja" un poco antes de crecer (anticipación)
o que se pase de su tamaño final y luego regrese
(efecto rebote/elástico).


Ejemplo práctico en código:
para una tarjeta o un botón interactivo
la tarjeta no solo crecerá y se inclinará
sino que gracias al cubic-bezier(0.34, 1.56, ...),
sobrepasará ligeramente el tamaño 1.05 y se asentará con un rebote elástico muy premium
similar a las interfaces de iOS o interfaces de videojuegos modernas

```
`export const InteractiveCard = styled.div`
  /* Estado inicial */
  transform: rotate(0deg) scale(1);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); /* Curva con rebote */

  &:hover {
    /* Estado final al pasar el cursor */
    transform: rotate(2deg) scale(1.05);
  }
`;
```


## 3. transition: 0.2s cubic-bezier

##### atajos (shorthands) de la propiedad transition
##### Al no especificar una propiedad concreta (como transform o opacity),
##### ambas se aplican por defecto a all
(cualquier propiedad CSS animable que cambie en el elemento).

la diferencia en su duración
y en su curva de aceleración cambia por completo
la "sensación física" de la interfaz

Para que funcione en tu navegador, cubic-bezier
requiere obligatoriamente sus 4 coordenadas entre paréntesis, por ejemplo: cubic-bezier(0.4, 0, 0.2, 1).

1. 
Duración (0.2s / 200ms):
punto dulce (sweet spot) de las micro-interacciones en la web moderna
Es lo suficientemente rápido para que la interfaz se sienta responsiva e instantánea
pero le da al ojo humano el tiempo justo (un parpadeo rápido)
para captar el movimiento
##### Ideal para botones, interruptores (switches) y efectos hover en tarjetas.

2. 
Efecto (cubic-bezier):
##### Al usar una curva personalizada, estás buscando una firma de movimiento única para tu UI
Dependiendo de los números que uses
puedes hacer que el elemento tenga un "latigazo" al arrancar
que se frene en seco de forma dramática
o incluso que tenga un sutil efecto elástico
(rebotar un poco antes de parar).



## 4. transition: 0.1s ease-in-out

1. 
Duración (0.1s / 100ms):
##### Esto es velocidad pura, casi imperceptible
##### Se utiliza cuando quieres que un cambio sea prácticamente instantáneo
pero sin la brusquedad de no tener ninguna transición
##### Es el tiempo ideal para menús desplegables ultra-rápidos
cambios de color en inputs al hacer foco, o text-shadows.

2. 
Efecto (ease-in-out):
Esta es una curva matemática predefinida y perfectamente simétrica
Lo que hace es acelerar suavemente al principio
y desacelerar con la misma suavidad al final.


Interfaz:
A nivel de experiencia de usuario (UX),
el comportamiento de ambas se percibe de formas muy distintas debido a la relación entre su tiempo y su aceleración:

1. 
Con 0.1s ease-in-out:
Como el tiempo es tan ridículamente corto (100ms),
la aceleración y desaceleración del ease-in-out apenas se llega a notar
El usuario no va a ver la curva; simplemente va a sentir que el elemento cambió de estado de forma "blanda" y limpia
en lugar de un salto tosco de fotogramas.

2. 
Con 0.2s cubic-bezier:
Al duplicar el tiempo a 200ms, el cerebro ya tiene espacio para procesar la coreografía del movimiento
Si configuras la curva para que sea una transición con inercia o rebote
el usuario sí va a notar la personalidad del componente
Se va a sentir más orgánico y estilizado.



## 5. transition: all 0.2s cubic-bezier

gran diferencia aquí es la palabra clave all
En lugar de limitar la animación a una sola propiedad
(como transform o opacity), le estás diciendo al navegador:
##### "Cualquier propiedad CSS que cambie en este elemento se va a animar bajo las mismas reglas".

Efecto Coordinado:
Si tienes un botón en tu dashboard y al hacerle
:hover cambias tres cosas al mismo tiempo
(el color de fondo, el tamaño con un transform y la opacidad del texto)
las tres transiciones ocurrirán en perfecta sincronía.

Duración (0.2s): Todas las propiedades completarán su metamorfosis exactamente en 200 milisegundos

Curva (cubic-bezier): Todas las propiedades acelerarán y desacelerarán siguiendo la misma física personalizada
haciendo que el cambio de color de fondo "baile" al mismo ritmo elástico en que el botón se agranda

Nota de rendimiento: Aunque all es muy cómodo porque te ahorra escribir código
úsalo con moderación
Animar propiedades que alteran el diseño de la página
(como width, height, margin o top) usando all
##### obliga al navegador a recalcular la geometría de toda la web en cada fotograma
lo que puede causar caídas de FPS en dispositivos menos potentes
Para micro-interacciones de alto rendimiento
es mejor especificar solo las propiedades deseadas
(ej. transition: transform 0.2s, background-color 0.2s).


## 6. transform: scale

transform: scale(...)
La función scale (escala) es la herramienta nativa de CSS
para alterar el tamaño visual de un elemento
en un espacio de dos dimensiones (2D).

Efecto Geométrico: Sin romper el Layout
A diferencia de cambiar el width o el height de un componente
(lo cual empujaría a los elementos de al lado para hacerles espacio)
transform: scale cambia el tamaño como si fuera una capa de Photoshop por encima del lienzo
El elemento crece o se encoge
pero el espacio físico que ocupa en el documento sigue siendo exactamente el mismo que el original

Variantes de uso:

Escalado Uniforme (Un solo valor): scale(1.2)
Agranda el elemento un 20% manteniendo perfectamente sus proporciones originales
en los ejes X (horizontal) e Y (vertical).

Escalado Independiente (Dos valores): scale(1.5, 0.8)
El primer número estira el elemento horizontalmente (eje X al 150%)
y el segundo lo aplasta verticalmente (eje Y al 80%)
permitiéndote crear efectos de deformación elástica muy interesantes
para animaciones de estilo cartoon o interfaces lúdicas.

Escalados unidireccionales:
También puedes usar scaleX(value) o scaleY(value)
si solo necesitas modificar un eje específico de forma aislada

Punto de anclaje:
Por defecto, el escalado se realiza desde el centro exacto del elemento
(transform-origin: center)
Si el elemento crece, se expandirá uniformemente hacia arriba, abajo, izquierda y derecha.



### Transform y transition: micro-interacciones modernas en la web 

Permiten crear animaciones fluidas, orgánicas y con un rendimiento excelente
##### ya que las transformaciones se procesan directamente en la tarjeta gráfica o GPU,
##### sin obligar al navegador a recalcular el diseño de la página


## 7. Animations de FilterItem

FilterItem

```
const popIn = keyframes`
  from { 
    transform: scale(0); 
    opacity: 0; 
  }
  to { 
    transform: scale(1); 
    opacity: 1; 
  }
`;
``` 

1. export const FilterContainer = styled.div<{ $isSelected: boolean }>`

`transition: ${({ theme }) => theme.transitions.default};`

2. export const BadgeWrapper = styled.div<{ $isVisible: boolean }>`

```
  /* Visible state */
  ${({ $isVisible }) =>
    $isVisible
      ? css`
          animation: ${popIn} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        `
      : css`
          animation: none;
        `}

  /* Not visible */
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.2s ease;

```


### Keyframes

1. 
`const popIn = keyframes`

función keyframes (importada de styled-components)
equivalente a crear un guión gráfico o storyboard
no estás diciendo cuándo ni cómo de rápido se va a mover algo
solo estás definiendo la transformación pura del elemento
desde su nacimiento hasta su estado final

`from (o 0% del tiempo)`:
Define el estado inicial del componente cuando aparece en el DOM
scale(0)

significa que el tamaño del componente es cero
cero (invisible, un punto microscópico en el centro)
y opacity: 0 lo hace completamente transparente.

`to (o 100% del tiempo)`:
Define el estado de destino
scale(1) es su tamaño real y natural
y opacity: 1 lo vuelve completamente opaco y visible.

Al guardarlo en una variable const popIn
Styled Components toma este bloque y le genera un nombre único aleatorio
(ej. sc-keyframes-bXyZ)
Esto evita que si tienes otras animaciones llamadas igual en tu proyecto, colisionen entre sí.


2. rol de popIn dentro de la propiedad animation

inyectas ${popIn} dentro de BadgeWrapper
estás uniendo el guión gráfico con el reloj
y la física del mundo real.

La línea es un atajo (shorthand) de CSS
`animation: [nombre] [duración] [curva de aprendizaje/velocidad];`

Rol de ${popIn} (La Identidad):
Le dice al navegador: "Quiero que uses los pasos que definimos arriba
(pasar de escala 0 a 1 y de opacidad 0 a 1)"
sin esto, el navegador no sabría qué propiedades cambiar.

Rol de 0.3s (El Tiempo):
##### Establece que todo el viaje desde el from hasta el to debe durar exactamente 300 milisegundos
Es un tiempo ultra veloz, ideal para que la interfaz se sienta eléctrica y fluida

3. Rol del cubic-bezier(0.175, 0.885, 0.32, 1.275) (La Física)

Esta es la clave de todo tu componente
Esta curva específica se conoce en animación como "Back Out"
(Efecto de rebote por exceso).

Si miras el último número (1.275),
supera el límite del 1.0 (que representa el 100%).

efecto visual: Cuando tu Badge se está mostrando
viaja tan rápido que supera su tamaño original
(llega a medir aproximadamente scale(1.1) o scale(1.15)
y, en los últimos milisegundos de la animación
##### se encoge un poco hasta asentarse perfectamente en scale(1).

##### Cuando $isVisible pasa a ser true
Badge no solo "aparece".
##### Lo que hace es brotar desde el centro como una burbuja
se agranda un poco más de la cuenta debido a la inercia del cubic-bezier;
##### y rebota suavemente hasta clavarse en su tamaño final
todo en menos de un tercio de segundo

Si pasa a false, apaga la animación
y hace un fade-out suave de 0.2s gracias al transition: opacity



## 8. SearchInput

1. export const StyledInput = styled.input`

`transition: all 0.2s ease-in-out;`

##### es la encargada de que el campo de búsqueda no se sienta rígido o "tosco" cuando el usuario interactúa con él
##### Su objetivo principal es suavizar la transición entre el estado de reposo del input
##### y el estado de enfoque (&:focus) cuando alguien hace clic para escribir

`all` (El qué):
##### Le dice al navegador que anime absolutamente cualquier propiedad CSS que cambie en el input
En tu caso específico, cuando el usuario hace clic en el buscador para escribir
escribir (:focus), cambian tres propiedades a la vez:

1. El background se vuelve más opaco (pasa de opacidad 0.05 a 0.1).
2. El border-color se ilumina (pasa de opacidad 0.1 a 0.3).
3. Aparece un destello alrededor gracias al box-shadow.

Gracias a all, las tres propiedades mutarán al mismo tiempo de forma coordinada

`0.2s` (El cuánto):
Establece que la animación tardará exactamente 200 milisegundos tanto en encenderse
(cuando haces clic) como en apagarse (cuando haces clic fuera del input).

Es un tiempo excelente para elementos de formulario
el usuario percibe el cambio como algo inmediato y responsivo
pero el ojo llega a notar la suavidad del efecto.

`ease-in-out` (El cómo):
Define la aceleración del cambio
ease-in-out es una curva simétrica
que hace que la animación comience despacio
se acelere en el medio y se frene suavemente al llegar al final.

Efecto de ux:
Si no tuvieras esa línea de transition,
al hacer clic en el buscador el fondo
y el borde brillarían de golpe en un solo fotograma
lo cual puede dar una sensación de interfaz barata o rígida.

Con la transición activada:
Al hacer clic en el input para buscar una tarea, verás un efecto "blando"
y elegante donde la caja de texto se ilumina de forma orgánica,
el borde se aclara gradualmente y la sombra del box-shadow se despliega como un sutil destello de luz neon detrás del cristal
Al retirar el cursor, el buscador se "apaga" con la misma elegancia regresando a su estado translúcido original



## 9. TodoItem

1. export const ItemContainer = styled.li<StyledItemProps>`

`transform: translateX(4px);`

2. export const TextContainer = styled.div<TextProps>`

`transition: all 0.3s ease;`


##### uno responde a la interacción física del usuario con el puntero (:hover)

##### el otro responde al cambio de estado del negocio en tu aplicación ($isCompleted).


1. `transform: translateX(4px)`; en ItemContainer (El "Empujón" al pasar el mouse)
se activa exclusivamente cuando el usuario pasa el cursor sobre la fila de la tarea (:hover).

Efecto Visual: El elemento entero (<li>) se desplaza físicamente 4 píxeles hacia la derecha en el eje horizontal (X)
Al retirar el mouse, el elemento regresa a su posición original (0px).

Objetivo de UX: Rompe la rigidez de la lista
Le da al usuario un feedback visual inmediato de "esta es la tarea que estás apuntando"
levantando el elemento tridimensionalmente hacia la derecha.

Precausión
transform en el :hover, pero no una propiedad transition
declarada en la base del componente
(a menos que venga oculta dentro de ${mixins.glass}).
Si tu mixin no la incluye, el desplazamiento de 4px
ocurrirá de golpe (instantáneo) en un solo fotograma
lo que puede verse un poco tosco
Para que ese desplazamiento sea una seda
ItemContainer necesitaría una línea como
`transition: transform 0.2s ease;`.

2. `transition: all 0.3s ease`; en TextContainer (El desvanecimiento de tarea completada)
##### Esta instrucción no reacciona al mouse, sino a la mutación de la propiedad reactiva $isCompleted
##### Cuando marcas el checkbox de la tarea, los estilos cambian
la opacidad baja de 1 a 0.5 y aparece el line-through.

Efecto Visual: Gracias al transition, el texto de la tarea no se vuelve semitransparente de inmediato
El navegador calcula los fotogramas intermedios durante 300 milisegundos (0.3s).
Verás cómo el texto se va apagando y desvaneciendo suavemente (un fade-out parcial)
hasta quedar al 50% de intensidad.

La curva ease: Hace que este desvanecimiento comience con un sutil impulso rápido
rápido y se frene suavemente al llegar al final (opacidad 0.5),
haciendo que la transición se perciba muy natural para el ojo humano

Detalle:
La propiedad text-decoration: line-through (la línea que tacha el texto)
no es una propiedad animable por la mayoría de los navegadores
Por lo tanto, la línea aparecerá de golpe en el instante en que haces clic
pero la opacidad del texto sí se desvanecerá con la suavidad de los 0.3 segundos,
mitigando ese salto brusco.



## 10. DashboardPage

```
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;
```

1. export const PageContainer = styled.div`

`animation: ${fadeIn} 0.5s ease-out;`

2. export const LoadingWrapper = styled.div`

```
animation: pulse 1.5s infinite;


 @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }

    50% {
      opacity: 0.4;
    }
  }

```


##### pensadas para mejorar drásticamente lo que en UX llamamos rendimiento percibido
perceived performance

##### Su objetivo es que la aplicación se sienta viva
##### fluida y que el paso de la pantalla de carga a los datos reales no sea un golpe brusco para los ojos del usuario

1. 
1 y 2. El Efecto de Entrada de la Página (fadeIn + PageContainer)

##### coordinando el guión gráfico (keyframes)
##### con la ejecución en el contenedor principal de tu página (<div class="PageContainer">).

```
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;
```

from (Inicio):
El contenedor de la página arranca siendo totalmente invisible (opacity: 0)
y desplazado 10 píxeles hacia abajo (translateY(10px)) respecto a donde debería estar originalmente.

to (Destino): El contenedor alcanza su opacidad total (opacity: 1)
y regresa a su posición geométrica original (translateY(0)).

2. 
Ejecución (PageContainer)
`animation: ${fadeIn} 0.5s ease-out;`
configuras el reloj de la siguiente manera:

0.5s (Duración): Toda la transición dura exactamente medio segundo.
ease-out (Aceleración): La curva de velocidad arranca muy rápido y se frena suavemente al final.

Efecto Visual Real en el HTML
Cuando la página termina de cargar y este elemento se monta en el DOM
el Dashboard entero no aparece de golpe
emerge suavemente desde abajo

Debido al ease-out,
el contenido da la sensación de "aterrizar" de forma amortiguada en la pantalla
como si flotara hacia su posición final mientras se vuelve visible
Es el clásico efecto elegante de los sistemas operativos modernos de Apple o Windows al abrir una ventana.

3. Latido de Carga (LoadingWrapper + pulse)
Esta animación está contenida y auto-declarada dentro de los estilos de la pantalla de carga
afectando específicamente a la etiqueta <span> (que seguramente contiene el texto "Cargando...").

Ejecución y el Guión (pulse)

```
/* Ejecución en el span */
animation: pulse 1.5s infinite;

/* Guión de la animación */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
```

1.5s (Duración): Cada ciclo completo de la animación tarda segundo y medio.

infinite (Bucle): No se detiene nunca; se repetirá en bucle mientras el componente esté montado

ritmo de los porcentajes:

Al 0% (inicio del ciclo):
el texto es completamente opaco (opacity: 1).

Al 50% (justo a los 0.75 segundos):
el texto se desvanece de forma parcial hasta el 40% de visibilidad
(opacity: 0.4).

Al 100% (al llegar al segundo y medio)
regresa a ser totalmente opaco (opacity: 1).


Efecto Visual Real en el HTML:

El elemento <span> (el texto de carga) adquiere un efecto de "respiración" u opacidad palpitante
El texto brilla, se atenúa casi a la mitad y vuelve a brillar de manera continua y cíclica.

Este efecto es un estándar absoluto en la industria
industria (muy usado en las famosas barras grises de Skeleton Loading de YouTube o Facebook).
Sirve para comunicarle inconscientemente al usuario: "La aplicación no se ha colgado, estamos trabajando de fondo para traer tus datos".


Coreografía Global (UX):
Al juntar ambas piezas en el Dashboard, la experiencia del usuario es impecable:

1. Mientras la aplicación busca los datos
ve un texto elegante en mayúsculas que respira suavemente
en el centro de un fondo de cristal translúcido (LoadingWrapper).

2. En el instante en que los datos llegan
el estado cambia, el loader se desmonta y el contenido real (PageContainer)
flota hacia arriba suavemente durante medio segundo
coronando una transición de interfaz limpia y sumamente profesional.



## 11. TodoPage

```
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
```

1. export const StyledPage = styled.div`

`animation: ${fadeIn} 0.6s ease-in-out;`



En DashboardPage combinación de movimiento y opacidad
En TodoPage estás aplicando una animación puramente atmosférica y sutil

Es el clásico fundido a negro (o a blanco, según tu tema) del cine,
pero aplicado al software.

afecta visualmente al contenedor principal <div class="StyledPage">:

1. Guión Gráfico (const fadeIn)
define el cambio de estado más puro y limpio que existe en CSS: la visibilidad.

```
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
```

from (0% del tiempo):
El elemento arranca con opacidad cero
Es completamente invisible y transparente
permitiendo que se vea lo que sea que esté de fondo en la aplicación.

to (100% del tiempo):
El elemento llega a opacidad uno.
Se vuelve 100% sólido, opaco y muestra sus colores y subcomponentes en su totalidad

2. Ejecución en el HTML (StyledPage)
Al asignarle este guión al contenedor de la página
configuras el comportamiento a través de dos parámetros clave
el tiempo y la aceleración.

```
animation: ${fadeIn} 0.6s ease-in-out;
```

`0.6s` (La Duración)
Estableces que el fundido tarde 600 milisegundos en completarse

poco más lenta que la animación del Dashboard (que duraba 0.5s).
Al darle 100 milisegundos más
buscando una transición más deliberada, suave y cinematográfica
Evita que el cambio de pantalla se sienta abrupto para el usuario.

`ease-in-out` (La Curva de Aceleración)
curva matemática hace que el cambio de opacidad sea perfectamente simétrico y orgánico

1. Inicio suave: Durante los primeros milisegundos
la opacidad sube muy despacio (casi imperceptible).

2. Aceleración central: En la mitad del tiempo
el cambio de transparencia a opacidad se acelera drásticamente.

3. Frenado final: Al acercarse al final del transcurso
el ritmo se reduce para asentarse delicadamente en el 100% de opacidad


Efecto Visual Real:
usuario navega hacia la sección de tareas (TodoPage)
este componente se monta en el DOM
toda la página se disuelve suavemente desde el fondo para aparecer en la pantalla

No hay saltos, no hay tirones hacia arriba o hacia abajo
Es una transición flotante y etérea
donde los elementos visuales del listado de tareas van ganando nitidez
y presencia de manera sincronizada durante un poco más de medio segundo.


Aviso UX:
Esta animación es ideal para páginas de contenido denso
Al no tener la propiedad transform: translateY (como tenías en el Dashboard)
evitas que el cerebro del usuario tenga que procesar texto moviéndose verticalmente mientras intenta leerlo
reduciendo la fatiga visual y enfocando la atención puramente en la aparición de la interfaz.




# animations, transitions, Interactividad, transformaciones

## 1. Interactividad: El Disparador
puente de comunicación entre las intenciones del usuario
(mover el mouse, hacer clic, usar el teclado)
y los cambios visuales de la interfaz

##### propiedad/herramienta más básica: Las Pseudo-clases de estado
propiedad/herramienta más básica: Las Pseudo-clases de estado
y la propiedad cursor.

Funcionamiento: 
##### Antes de mover o animar algo
##### necesitas que el navegador detecte que el usuario está interactuando con el elemento
Las pseudo-clases actúan como interruptores condicionales de CSS.

##### 1. Estado en reposo

```
.boton {
  background: blue;
  cursor: pointer; //Indica que es interactivo
}
```

##### 2. El "interruptor" se activa cuando el mouse pasa por encima

```
.boton:hover {
  background: red; 
}
```

##### rendimiento: La interactividad por sí sola cambia los estados de golpe (instantáneamente).
##### Para que ese cambio de azul a rojo no sea un golpe seco para el ojo humano
necesitamos el siguiente concepto


## 2. Transiciones: Puente suave
##### toma un cambio de estado instantáneo (como el del :hover)
##### y calcula los estados intermedios a lo largo del tiempo para que el cambio sea progresivo y fluido.

propiedad más básica: `transition-duration`
aunque normalmente usamos el atajo transition

Funcionamiento:
Le dice al navegador:
Cuando una propiedad cambie
no saltes al resultado final de inmediato
llévatela con calma durante X cantidad de tiempo

```
.boton {
  background: blue;
  /* Propiedad básica: Controla la velocidad del cambio */
  transition: background 0.2s ease-in-out; 
}

.boton:hover {
  background: red; /* Ahora cambia suavemente en 200 milisegundos */
}
```


## 3. Transformaciones: Alterando el Espacio
permiten modificar la geometría de un elemento
moverlo, escalarlo, rotarlo o inclinarlo
sin alterar el flujo del diseño de la página
(no empuja a los elementos vecinos).

propiedad más básica: transform

Funcionamiento:
Modifica la matriz visual del elemento en una capa de renderizado independiente
##### Sus funciones principales son translate(), scale(), rotate() y skew().

```
.tarjeta {
  /* Propiedad básica: Modifica tamaño y posición en su propia capa */
  transform: scale(1) translateY(0);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.tarjeta:hover {
  transform: scale(1.05) translateY(-4px); /* Se agranda y sube eficientemente */
}
```

##### Secreto de optimización: Modificar width o height en una transición obliga al navegador a recalcular todo el diseño de la página (Reflow).
##### Modificar transform: scale() hace exactamente lo mismo visualmente, pero se procesa directamente en la tarjeta de video (GPU), corriendo a 60 FPS fijos.


## 4. Animaciones: Película Autónoma

A diferencia de las transiciones
##### (que necesitan un disparador como un :hover y solo van de un punto A a un punto B),

las animaciones son autónomas
##### Pueden ejecutarse solas al cargar la página
##### pasar por decenas de estados intermedios y repetirse infinitamente

##### La propiedad más básica: animation combinada con la regla @keyframes

Funcionamiento:
@keyframes define la línea de tiempo (el guion gráfico)
animation configura cómo se va a reproducir esa línea de tiempo
(duración, repeticiones, dirección).

```
/* 1. Definimos el guion gráfico con sus estaciones intermedias */
@keyframes flotar {
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
}

.alerta {
  /* 2. Propiedad básica: Aplica el guion de forma infinita */
  animation: flotar 2s infinite ease-in-out;
}
```


## Intro



## Practicas




## Animaciones más ligeras

animaciones y efectos "glass" vuelen
el secreto es entender cómo procesa el navegador los cambios visuales.

### Regla de Oro: El Pipeline de Renderizado

Cada vez que un elemento cambia en la pantalla
el navegador pasa por tres etapas principales:

1. Layout (Reflow):
El navegador calcula el tamaño y la posición de los elementos
Cambiar propiedades como width, height, margin, top o left
obliga al navegador a recalcular toda la geometría de la página
Es destructivo para el rendimiento.

2. Paint (Repintado):
El navegador dibuja los píxeles (colores, sombras, bordes).
Cambiar background-color, color o box-shadow obliga a repintar el elemento
Es costoso para la CPU/GPU.

3. Composite (Composición):
El navegador junta las "capas" ya dibujadas y las organiza en la pantalla
La GPU maneja esta etapa directamente y es ultra rápida

##### Truco: evitar por completo las etapas de Layout y Paint durante la animación
##### , y forzar al navegador a trabajar únicamente en la etapa de Composite


Tips:

1. Anima exclusivamente 'Propiedades de Oro'
Solo existen dos propiedades CSS que se ejecutan al 100%
en la etapa de Composición (GPU)
sin activar Layout ni Paint:

##### transform (scale, rotate, translate, skew)
##### opacity

Mal (Pesado): Animar width: 100px a width: 200px
para expandir un botón.

##### Bien (Ligero): Dejar el botón en su tamaño final y animarlo usando transform: scaleX().

2. Destierra el transition: all
usar all obliga al navegador a vigilar y evaluar cada propiedad del elemento en cada fotograma
Especifica siempre qué quieres mover:

```
/* Mal: Consume ciclos innecesarios */
transition: all 0.2s ease;

/* Bien: La GPU sabe exactamente qué procesar */
transition: transform 0.2s ease, opacity 0.2s ease;
```

3. pseudo-elemento para box-shadow
Las sombras complejas (como las de tu efecto Glass) son enemigas mortales de la GPU
porque calcular los algoritmos de desenfoque (blur) en cada fotograma genera un "Paint" masivo

Si quieres que una sombra aparezca suavemente al hacer :hover
##### no archives una transición directo en el box-shadow.
##### En su lugar, crea la sombra oculta en un pseudo-elemento y anima su opacidad

Ej:

```
// OPTIMIZACIÓN EXTREMA DE SOMBRAS
export const HeavyCard = styled.div`
  position: relative;
  
  /* La sombra ya está dibujada de fondo, pero invisible */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    border-radius: 16px;
    box-shadow: 0 30px 60px oklch(0% 0 0 / 30%);
    opacity: 0;
    transition: opacity 0.3s ease; /* Animar opacidad es ultra ligero */
    z-index: -1;
  }

  &:hover::before {
    opacity: 1; /* La sombra "aparece" sin recalcular el Paint de la sombra */
  }
`;
```

4. will-change con moderación
La propiedad will-change le avisa al navegador con anticipación qué propiedad va a cambiar
para que cree una capa de composición separada en la GPU antes de que ocurra el movimiento.

```
export const FastBadge = styled.div`
  will-change: transform, opacity;
`;
```

Peligro: No se lo pongas a todos los elementos de la lista.
Crear demasiadas capas en la GPU puede agotar la memoria de video del dispositivo y terminar ralentizando la web en celulares viejos
Úsalo solo en elementos que se animen constantemente.

5. filtros pesados (backdrop-filter)
efecto cristal usa backdrop-filter: blur().
Este filtro requiere que la GPU tome los píxeles que están detrás del elemento
los desenfoque y los vuelva a pintar en tiempo real

Si vas a mover o animar un contenedor con backdrop-filter
(por ejemplo, con el fadeIn de la página)
##### intenta que la duración sea corta (0.3s en vez de 1s)



## Animación ligera caso por caso

quitando la propiedad all y
sincronizar tu arquitectura de estilos utilizando las variables de tu tema.

##### A la GPU le da absolutamente igual cómo cambia la velocidad de la animación (la curva);
##### lo único que le cuesta esfuerzo es qué tiene que dibujar en cada fotograma debido a ese cambio

##### !!! Si tu animación da tirones

1. Estás animando propiedades pesadas:
Si tu animación altera el width, height, margin o top
la CPU tiene que recalcular la geometría de toda la página 60 veces por segundo.

2. Estás moviendo capas con filtros costosos:
Si el elemento que estás moviendo con `transform`
tiene un `backdrop-filter: blur()` (tu efecto glass) o un `box-shadow` gigante
la GPU tiene que redibujar el desenfoque de los píxeles de fondo en cada micro-desplazamiento

3. La duración es muy larga:
Una animación de `1s` obliga a la GPU a mantener el esfuerzo
el doble de tiempo que una de `0.5s`.


## Tips para optimizar backdrop-filter: blur(), box-shadow pesados, blur(), elementos con transform

1. backdrop-filter: blur():
desenfoque de fondo es, matemáticamente, una de las operaciones más pesadas para un navegador
Para pintar un backdrop-filter: blur(12px), la GPU tiene que:

Copiar los píxeles de la textura que está detrás del elemento.
Aplicar un algoritmo de desenfoque Gaussiano (un cálculo matemático por cada píxel).
Pintar el resultado y luego encima dibujar el texto o contenido del contenedor.

##### 1. Nunca animes el radio del blur: Evita pasar de blur(0px) a blur(12px)
en una transición
Esto obliga a la GPU a recalcular la matriz de desenfoque en cada fotograma
Si quieres que el cristal aparezca, deja el blur(12px) fijo
anima la opacidad (opacity) de todo el contenedor.

##### 2. Reduce el área de superficie: No apliques backdrop-filter a contenedores gigantescos que ocupen el 100% de la pantalla si no es estrictamente necesario
Mientras menos píxeles tenga que desenfocar la GPU, más rápido correrá.

##### 3. Usa valores de blur moderados: Visualmente, diferencia entre blur(8px) y blur(20px) es mínima pero el esfuerzo matemático del navegador crece exponencialmente con el radio del desenfoque.


2. Sombras pesadas (box-shadow) y filter: blur()
Las sombras grandes y difusas (box-shadow: 0 30px 60px rgba(0,0,0,0.3))
requieren calcular un desenfoque de vectores alrededor del elemento
Si el elemento cambia de tamaño o de posición, el repintado (Paint) es masivo

##### 4. Aísla la sombra en su propia capa de composición
Si un elemento con una sombra pesada se va a mover
(por ejemplo, con un transform),
asegúrate de que tenga su propia capa en la GPU usando will-change: transform;.
Esto evita que al moverse la sombra, el navegador tenga que repintar los elementos que están estáticos a su alrededor.

##### 5. Evita la combinación letal (box-shadow + border-radius + Animación):
Recortar esquinas redondeadas mientras se calcula el difuminado de una sombra en movimiento es un dolor de cabeza para los navegadores móviles
Si un elemento se va a mover mucho, simplifica la sombra o reduce el border-radius.


3. Elementos con transform (Manejo de Capas)
Mover elementos con transform: translate() o scale() es excelente porque corre en la etapa de Composición de la GPU
##### Sin embargo, abusar de esto puede causar lo que se conoce como "Explosión de Capas" (Layer Explosion),
saturando la memoria de video (VRAM) del dispositivo.

##### 6. propiedad contain: Esta es una joya oculta de CSS moderna
Si tienes elementos independientes (como las tarjetas de tu lista de tareas),
aplícales contain: paint; o contain: content;.
Esto le dice al navegador: "Lo que sea que pase visualmente dentro de este contenedor muere aquí
no inspecciones el resto de la página", ahorrando toneladas de ciclos de CPU.

##### 7. No abuses de will-change: Colocar will-change
en un CSS de forma global a decenas de elementos de una lista obligará al navegador a reservar memoria de la GPU
para cada uno de ellos por adelantado
lo que volverá la aplicación lenta y pesada en celulares antiguos
Úsalo solo en componentes únicos y pesados
(como un Modal, un Sidebar o el contenedor principal del Dashboard).

##### 8. aceleración 3D con cabeza
El truco clásico de forzar la aceleración por hardware usando
transform: translateZ(0); o transform: translate3d(0,0,0);
sigue siendo válido para navegadores viejos
pero los navegadores modernos ya promueven automáticamente los transforms 2D a la GPU
si detectan que es necesario. Confía primero en el estándar.



### 1. theme

```
  transitions: {
    default: '0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    fast: '0.1s ease-in-out',
  },
```


### 2. mixins

```
  interactive: css`
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    &:active {
      transform: scale(0.98);
    }
```

transition: all
##### este mixin solo altera el tamaño del elemento al hacer clic
(scale(0.98))
obligar al navegador a vigilar "todas" las propiedades es un desperdicio de recursos

Especifica que la transición sea única y
exclusivamente para `transform`

Además, aprovecharemos las variables globales que ya definiste en tu theme.ts
en lugar de duplicar el código del cubic-bezier.


```
// AHORA (Ultra-ligero y conectado al tema)
interactive: css`
  /* La GPU ahora solo vigila el cambio geométrico */
  transition: transform ${({ theme }) => theme.transitions.default};

  &:active {
    transform: scale(0.98);
  }
`
```


### 3. SearchInput: situación critica (transition: all y backdrop-filter)

combinando transition: all con backdrop-filter: blur(4px).
Cuando el navegador ve all
se ve obligado a monitorizar cada propiedad del elemento durante la transición

Si a esto le sumas que el input tiene que calcular un desenfoque de fondo (blur),
cualquier parpadeo innecesario puede causar micro-tirones al hacer clic en la barra de búsqueda

&:focus, las únicas tres propiedades que realmente cambian son: background, border-color y box-shadow.

En tu theme.ts definiste exactamente ese tiempo y curva como tu token rápido: fast: '0.1s ease-in-out'.


### 4. TodoItem

1. export const ItemContainer = styled.li<StyledItemProps>`

`transform: translateX(4px);`

2. export const TextContainer = styled.div<TextProps>`

`transition: all 0.1s ease;`


##### tenemos una "bomba de tiempo" para el rendimiento si la lista de tareas crece mucho
(por ejemplo, si el usuario tiene 50 o 100 tareas renderizadas).

1. caso de ItemContainer (El contenedor de la tarea)
problema original: No tenía una propiedad transition declarada en su base
El desplazamiento de 4px y los cambios de color al pasar el mouse ocurrían instantáneamente
(de golpe), o peor aún, si el mixin heredaba algún all,
vigilaba cosas pesadas del efecto glass en cada render.

solución: Al declarar explícitamente transition: transform...,
a GPU toma el control total del desplazamiento horizontal (translateX).
Al aislar background y border-color, el navegador ignora los cálculos complejos del filtro de desenfoque
(backdrop-filter) del cristal mientras la tarea se mueve.


2. caso de TextContainer (El texto de la tarea)
problema original: Usaba transition: all 0.1s ease.
Cuando marcabas la tarea como completada
el navegador intentaba buscar una forma de animar matemáticamente el tacho del texto (text-decoration: line-through).
Como los navegadores no pueden calcular "estados intermedios" para una línea que tacha un texto (o está o no está),
gastaba ciclos de reloj intentándolo en vano.

solución: Cambiamos a transition: opacity... apuntando a tu token rápido
theme.transitions.fast).
Ahora, la línea del tachado aparece de golpe (como debe ser),
pero el desvanecimiento del texto a opacidad 0.5 ocurre de forma sedosa, fluida y consumiendo cero recursos de CPU.


### 5. 




# Lista de animations, transitions, Interactividad en código


## 1. theme

```
  transitions: {
    default: '0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    fast: '0.1s ease-in-out',
  },
```


## 2. mixins

```
  interactive: css`
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    &:active {
      transform: scale(0.98);
    }
```


## GlobalStyles en button

```
  transitions: {
    default: '0.2s cubic-bezier(0.4, 0, 0.2, 1)',
```


## 3. Checkbox

`StyledCheckbox = styled.div<StyledCheckboxProps>`

1. 
transition: ${({ theme })
=> theme.transitions.default};

```
  transitions: {
    default: '0.2s cubic-bezier(0.4, 0, 0.2, 1)',
```

2. 
/* "Tick" */
  &::after {
	transform: rotate(45deg) scale(${({ $checked }) => ($checked ? 1 : 0)});
    transition: transform 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46);


## 4. IconButton

```
  /* Interactive States */
  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.glass};
    border-color: ${({ theme }) => theme.colors.glassBorder};
    ${mixins.electricGlow}
    transform: scale(1.1); /* Expansion */
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
    filter: brightness(0.8);
  }

```


## 5. Input

transition: ${({ theme }) => theme.transitions.default};

```
  transitions: {
    default: '0.2s cubic-bezier(0.4, 0, 0.2, 1)',
```


## 6. FilterItem

```
const popIn = keyframes`
  from { 
    transform: scale(0); 
    opacity: 0; 
  }
  to { 
    transform: scale(1); 
    opacity: 1; 
  }
`;
``` 

1. export const FilterContainer = styled.div<{ $isSelected: boolean }>`

`transition: ${({ theme }) => theme.transitions.default};`

2. export const BadgeWrapper = styled.div<{ $isVisible: boolean }>`

```
  /* Visible state */
  ${({ $isVisible }) =>
    $isVisible
      ? css`
          animation: ${popIn} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        `
      : css`
          animation: none;
        `}

  /* Not visible */
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.2s ease;

```


## 7. InputGroup

1. export const StyledInput = styled.input`

transition: ${({ theme }) => theme.transitions.default};

```
  transitions: {
    default: '0.2s cubic-bezier(0.4, 0, 0.2, 1)',

```


## 8. SearchInput

1. export const StyledInput = styled.input`

`transition: all 0.2s ease-in-out;`


## 9. TodoItem

1. export const ItemContainer = styled.li<StyledItemProps>`

`transform: translateX(4px);`

2. export const TextContainer = styled.div<TextProps>`

`transition: all 0.3s ease;`


## 10. FilterPanel

1. export const PanelContainer = styled.aside`

`transition: ${({ theme }) => theme.transitions.default};`


## 11. TaskSearch

1. export const SearchSectionContainer = styled.section`

`transition: ${({ theme }) => theme.transitions.default};` 


## 12. TaskSidebar

1. export const SidebarContainer = styled.aside`

`transition: ${({ theme }) => theme.transitions.default};`


## 13. DashboardPage

```
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;
```

1. export const PageContainer = styled.div`

`animation: ${fadeIn} 0.5s ease-out;`

2. export const LoadingWrapper = styled.div`

```
animation: pulse 1.5s infinite;


 @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }

    50% {
      opacity: 0.4;
    }
  }

```


## 14. TodoPage

```
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
```

1. export const StyledPage = styled.div`

`animation: ${fadeIn} 0.6s ease-in-out;`



## Evitar all oculto en animaciones

```
transition: [property] [duration] [timing-function] [delay];.
```

##### ocurre cuando omites deliberadamente el primer parámetro (property).
##### Si el navegador no ve un nombre de propiedad explícito
##### por especificación rellena ese hueco con la palabra clave all.

theme.ts,  tokens están guardados como strings que contienen solo el tiempo y la curva

```
default: '0.2s cubic-bezier(0.4, 0, 0.2, 1)'
```

Si en cualquier componente escribes:

```
transition: ${({ theme }) => theme.transitions.default};
```

Styled Components inyectará el string tal cual, resultando en este CSS nativo:

```
/* Lo que escribes */
transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);

/* Lo que el navegador interpreta por defecto */
transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
```

Peligro invisible:
##### navegador lee all, se ve obligado a escanear el elemento en cada ciclo de renderizado
##### Si ese elemento sufre un cambio en una propiedad pesada
##### (como un filtro de cristal, una sombra o un cambio de tamaño),

el navegador intentará interpolar matemáticamente ese cambio cuadro por cuadro
disparando las etapas de Layout y Paint repetidamente
en lugar de saltar directo a la Composición en la GPU.


### Analisis de theme y mixins: al usarlo solo tenes que agregar propiedad a animar

##### ventaja arquitectónica Al guardar tus tokens sin anteponerles una propiedad (es decir, guardar solo '0.2s ...')

```
/* Reutilización limpia y explícita */
transition: background ${({ theme }) => theme.transitions.default},
            color ${({ theme }) => theme.transitions.fast};
```

mixins:

```
interactive: css`
  transition: transform ${({ theme }) => theme.transitions.default};

  &:active {
    transform: scale(0.98);
  }
`
```

1. Punto Fuerte (Rendimiento Limpio):
A diferencia de tus componentes base, aquí SÍ fuiste explícito
`transition: transform`
perfecto para el rendimiento: el navegador sabe que solo debe vigilar la matriz de transformación
y delega el esfuerzo al hardware de video (GPU).

2. Conflicto de la Sobrescritura (Pisado de Estilos):
Ej: IconButton

```
${mixins.interactive}
transition: ${({ theme }) => theme.transitions.default}; /* ❌ ¡PUM! */
```

la última línea siempre gana
Al poner la transición del theme abajo del mixin
destruiste el transition: transform
`lo cambiaste por un all oculto`.

3. Físicas del :active:
mixin aplica un sutil encogimiento de scale(0.98) al hacer clic
Visualmente es muy elegante, pero al usar transitions.default (0.2s),
tarda 200 milisegundos en bajar a ese tamaño

En botones e interacciones táctiles directas
200ms se siente esponjoso (como si el botón tuviera un retraso).



## Transition 

##### Para que una transición aporte algo, el elemento debe sufrir cambios de estado constantes (como un :hover, un :active, o un cambio de clases por Javascript).

##### Ej: aside es un contenedor estático que simplemente organiza el espacio de la barra lateral, la transición se queda "escuchando" cambios que nunca van a ocurrir.

##### El único escenario donde esta transición aportaría valor es si tu aplicación tiene un selector de tema (Dark/Light mode).

Al cambiar el tema, el background-color y el border-color cambiarían, y la transición haría que el contenedor cambie de color suavemente en lugar de dar un parpadeo seco
Pero de nuevo, para eso jamás usaríamos all.



# Fix scrolls

1. Anatomía del Scroll: 

##### El Contenedor vs. El Contenido
##### Para que el navegador entienda que debe activar un scroll, maneja dos conceptos espaciales que compiten entre sí


`Scrollport` (La Ventana):
área visual física que vos decidís asignarle a un elemento en la pantalla
Tiene un ancho y un alto fijos
En tu componente, este espacio delimitado debería ser tu lista de categorías.

`Scrollable Overflow Area` (La cinta):
Es el tamaño total que sumarían todos tus elementos hijos
(las categorías) si los pusiéramos uno abajo del otro sin ningún límite

##### Cuando la Cinta es más grande que la Ventana
##### el navegador detecta un estado de Desborde (Overflow).
##### Al configurar el desborde como "automático"
##### el navegador traza una zona de interacción
##### la barra de scroll o el soporte para el gesto táctil
##### para permitirle al usuario desplazar la cinta detrás de la ventana


2. Motor bajo el Capó: Renderización del movimiento

Mover texto e imágenes en tiempo real a 60 o 120 fotogramas por segundo es costoso para la computadora
Los navegadores modernos dividen este trabajo en tareas para no trabar la pantalla

`Hilo Principal (Diseño y Pintura)`:
El navegador calcula cuánto mide cada texto de tus categorías y de qué color es
Esto lo hace una sola vez al cargar la lista.

`Hilo del Compositor` (gpu):
Una vez que todo está pintado,
el navegador toma esa lista larga (la cinta) y la convierte en una textura gigante que envía a la tarjeta de video
Cuando hacés scroll con el mouse o el dedo, el hilo principal se desentiende del asunto
es la tarjeta de video la que simplemente "desliza" esa textura hacia arriba o hacia abajo
Por eso el scroll se siente tan fluido y ligero.


### Efecto del activar scroll automatico en el componente:

```
export const CategoryList = styled.ul`
  /* Reset styles of the list */
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  /* smooth scroll */
  overflow-y: auto;

  /* li without extra margin */
  li {
    margin: 0;
    padding: 0;
  }
```

Para que esa instrucción de scroll funcione en el mundo real

##### scroll vertical automático en la lista
##### si las categorías superan el tamaño de la lista, les pondré una barra de scroll


#### Condición para que funcione el scroll automatico

##### Para que un elemento desborde, el contenedor necesita tener un techo físico (un límite de altura).

##### Si la lista no tiene una altura máxima definida
##### o si la sección principal que la contiene permite que sus hijos crezcan de forma ilimitada
##### la lista se estirará hacia abajo indefinidamente para albergar a todas las categorías que le mandes.

##### Al estirarse libremente, la Ventana crece al mismo tamaño que la Cinta
##### Por lo tanto, para el navegador nunca habrá desborde dentro de la lista, el scroll interno jamás se activará

##### !!! y el que terminará haciendo scroll para ver el contenido restante será el navegador entero (la página completa).

##### !!! Para que este mecanismo funcione exactamente como lo planeaste en tu interfaz

##### !!! ¿este filtro de categorías va a vivir dentro de un contenedor con altura fija
##### (como una barra lateral con el tamaño de la pantalla)
##### o tenés pensado limitar la altura de la lista directamente?



### Personalizar la barra de desplazamiento

```typescript
export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  /* Scrollbar */
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 8px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.glassBorder};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary}80;
  }
`;
```


#### Conceptos: delimitación dinámica, anatomía de la barra y ergonomía del espacio


1. Delimitación Dinámica del Espacio

`Techo Relativo a la Pantalla`:
A diferencia de usar un tamaño fijo en píxeles
limitar la altura máxima en base al alto de la ventana del navegador (unidades de Viewport Height)

permite que la lista sea elástica
Si la pantalla es gigante, la lista se estira
si es pequeña (como un celular), se encoge automáticamente para no empujar el resto de la interfaz fuera de la pantalla

`Desborde Inteligente`:
Al configurar el desborde como "automático", el navegador actúa de forma económica
Si tenés dos o tres tareas, la interfaz se mantiene limpia y sin barras visibles

La zona de desplazamiento e interacción solo se materializa cuando la cantidad de tareas supera el límite físico que definiste


2. Anatomía de la Barra de Desplazamiento Personalizada

Para rediseñar la barra
CSS divide este componente en tres piezas independientes
que funcionan como un rompecabezas visual

`Contenedor Global (Scrollbar)`:
Es el área total vertical donde va a vivir la barra
Al definir su ancho, determinás qué tan sutil o invasiva será
En tu caso, elegiste un ancho delgado para mantener el minimalismo.

`Carril de Desplazamiento (Track)`:
Es la pista o el "camino" por el que viaja la barra
Al dejarlo completamente transparente, lográs que la estética de tu fondo de cristal se luzca sin interrupciones
eliminando esa típica canaleta gris opaca de los navegadores antiguos.

`Barra de Arrastre (Thumb)`:
Es el "pulgar" o la pieza visual que el usuario ve y arrastra
Aquí aplicás la coherencia de tu sistema de diseño
usa el mismo color de los bordes transparentes y bordes completamente redondeados para que parezca una píldora flotante

`Reactividad Micro-interactiva (Hover)`:
Las barras de scroll también responden a las intenciones del usuario
Al pasar el mouse sobre la barra de arrastre, esta cambia de color (hacia tu color primario)
lo que le da un valioso feedback visual al usuario indicándole que esa pieza es un objeto interactivo que puede agarrar


3. Ergonomía Visual y el "Efecto Salto"

`Colchón de Seguridad (Padding)`:
Agregar un espacio extra en el lado derecho de la lista antes de la barra es una excelente práctica de diseño
Si el contenido de la tarea tocara directamente la barra de scroll
la interfaz se vería asfixiada
Ese espacio actúa como un amortiguador visual

`Prevención del Layout Shift`:
Al dejar ese espacio reservado, cuando la barra de desplazamiento aparece de golpe porque se agregó una nueva tarea
el texto del listado no sufre un "salto" brusco hacia la izquierda.
La barra simplemente ocupa el espacio que ya estaba previsto para ella.



### Practicas manejo scrollbar

uno de los puntos donde más chocan el diseño visual
la experiencia de usuario (UX) y el rendimiento técnico

Una barra mal implementada puede romper la armonía de una interfaz
causar saltos bruscos de contenido o frustrar a usuarios que navegan con teclados o pantallas táctiles


1. Estabilidad Visual: Evitar el "Efecto Salto" (Layout Shift

##### Uno de los problemas más comunes en aplicaciones dinámicas (como listas de tareas o chats)
ocurre cuando la pantalla pasa de no tener scroll a tenerlo
Al aparecer la barra, el navegador le resta entre 10 y 16 píxeles al ancho disponible,
haciendo que todo el contenido "salte" bruscamente hacia la izquierda

`solución moderna (scrollbar-gutter)`:
Existe una propiedad nativa diseñada exclusivamente para esto:
`scrollbar-gutter: stable`
Le ordena al navegador que reserve preventivamente el espacio de la barra (el carril)
incluso cuando el contenido es corto y la barra no es necesaria
Así, la interfaz nunca sufre saltos


`alternativa clásica (Espacio de reserva)`:
Si no se usa la propiedad anterior, se debe planificar un amortiguador visual
(como el padding-right que aplicaste en tu TodoList)
para que la barra se materialice sobre un espacio vacío precalculado y no empuje los textos


2. Compatibilidad entre Navegadores (Cross-Browser)

El mundo de la personalización de scrollbars ha estado históricamente dividido
##### mejor práctica actual es implementar una estrategia híbrida.

`Estándar Oficial de la W3C`:
Las propiedades modernas y oficiales son:
`scrollbar-width`: (para controlar el grosor: auto, thin o none)
`scrollbar-color`: (para definir los colores del thumb y del track en una sola línea).
Motores modernos las soportan nativamente.

`Legado de Webkit`: Los pseudoelementos ::-webkit-scrollbar
ofrecen un control milimétrico (radios de borde, sombras, estados :hover específicos).

`práctica ideal`: Declarar ambas soluciones en tu hoja de estilos o mixins globales
De esta forma, garantizas que los usuarios de Firefox/Safari tengan una experiencia limpia basada en el estándar
y los de Chrome/Edge disfruten de la personalización ultra detallada.


3. Usabilidad y Accesibilidad (UX / UI)

Una barra hermosa pero inutilizable destruye la experiencia

Hay reglas de oro ergonómicas que no se deben romper:

`Contraste Suficiente`:
El thumb (la barra de arrastre) debe contrastar claramente con el fondo de la aplicación
segun el estilo de la ui, asegúrate de que al pasar sobre un fondo claro u oscuro, la barra siga siendo visible.

`Grosor Mínimo Razonable`:
Reducir el ancho de la barra a 4px o menos la hace estéticamente minimalista
pero se vuelve una pesadilla para usuarios con mouse que intentan clickearla y arrastrarla
Un estándar seguro para barras delgadas es entre 6px y 8px

`Interactividad Reactiva (:hover)`:
Cambiar sutilmente la opacidad o el color del thumb cuando el usuario pasa el mouse por encima le confirma visualmente que el elemento es "agarrable"

`Nunca rompas el Scroll Táctil`:
En dispositivos móviles, las barras personalizadas suelen ignorarse
porque el usuario arrastra con el dedo directamente sobre la pantalla.
Asegúrate de usar siempre overflow-y: auto (y no scroll forzado)
para que los sistemas operativos móviles manejen las inercias nativas de forma suave


4. Rendimiento del Desplazamiento (Performance)

##### !!! Hacer scroll obliga al navegador a pintar contenido nuevo constantemente a altas velocidades

`Desplazamiento Suave con Criterio`:
La propiedad scroll-behavior: smooth es fantástica para saltos de página o navegación por enlaces internos
pero no se recomienda aplicarla de forma global a toda la aplicación (*)
ya que puede interferir con componentes que necesitan reaccionar de forma inmediata
(como paginaciones infinitas o layouts basados en Javascript).

`Evitar Efectos Pesados en el Contenedor`:
Si un contenedor tiene scroll activo
evita llenarlo de propiedades que exijan cálculos matemáticos complejos en cada fotograma mientras se desplaza
como sombras masivas (box-shadow), filtros de desenfoque dinámicos
o opacidades intermedias en los hijos directos
Deja que la GPU mueva la "textura" del scroll libremente

La barra de scroll ideal es aquella que acompaña la estética de la aplicación de manera silenciosa
no genera movimientos destructivos en el layout
y es lo suficientemente visible para cumplir su función cuando el usuario la necesita




# Fix position

position trabaja con las propiedades de coordenadas:
top, bottom, left, right y el eje de profundidad z-index

##### Si dejas un elemento en su estado base, estas coordenadas no le harán ni cosquillas


Valores: 

1. static: defecto
comportamiento natural de todo elemento
Sigue estrictamente el flujo del diseño.

##### Comportamiento: Ignora por completo las propiedades top, left, right, bottom y z-index

uso: No necesitas declararlo, a menos que quieras "resetear" una posición que heredaste de otra clase

2. relative: 
El elemento se mueve partiendo desde su posición original en el flujo, pero sin perder su lugar reservado

##### Comportamiento: Si le dices top: 20px; left: 10px;, se desplazará hacia abajo y a la derecha con respecto a donde debería estar originalmente
Para sus elementos vecinos, es como si nunca se hubiera movido
el espacio físico que ocupaba sigue vacío y nadie lo invade.

poder:
Se convierte en el punto de anclaje
marco de referencia
para cualquier elemento hijo que tenga una posición absoluta

3. absolute:
Se sale por completo del flujo del documento
Para el resto de la página, es como si este elemento hubiera dejado de existir

##### Comportamiento: Al perder su espacio físico, los elementos vecinos suben y ocupan su lugar
absolute se posiciona con respecto a su primer ancestro que tenga una posición diferente a static
(normalmente un padre con position: relative). Si no encuentra ninguno, se alinea directamente con los bordes de la página entera (<body>)

4. fixed: anclado a la pantalla
Al igual que el absoluto, se sale del flujo del documento, pero con un jefe diferente
la ventana del navegador (el viewport).

##### Comportamiento: Se queda clavado en las coordenadas exactas que le des en la pantalla
No importa si el usuario hace scroll infinito hacia abajo
el elemento se mantendrá flotando en el mismo lugar físico de la pantalla de la computadora o celular

Uso:
Barras de navegación superiores fijas
botones flotantes de "Volver arriba" o ventanas modales de alerta

5. sticky: híbrido
combinación brillante entre relative y fixed

##### Comportamiento: El elemento se comporta de forma totalmente normal (relative) mientras el usuario hace scroll, hasta que llega a una coordenada límite que tú definas
(por ejemplo, top: 0;).
En ese instante exacto, se "congela" (fixed) y se queda pegado arriba mientras sigues bajando

##### límite físico: Solo se queda pegado mientras se desliza dentro de su elemento padre
Si el contenedor padre termina y sale de la pantalla, el elemento sticky se irá con él.

Uso:
Las cabeceras de las tablas de datos
menús laterales de filtros en un e-commerce


##### Comparación: Valor | Destruye el flujo del documento | Punto de referencia para moverse | Afecta a sus vecinos


static:
No
Ninguno (sigue el flujo)
Sí, ocupa su lugar físico

relative:
No
Su propia posición original
Sí (mantiene su hueco vacío).

absolute:
Sí
El ancestro posicionado más cercano
No, los vecinos ocupan su lugar.

fixed:
Sí
La ventana del navegador (Viewport)
No, flota sobre todo lo demás.

sticky:
No (al inicio)
Su contenedor padre
Sí, hasta que se activa el anclaje.


#### Eje Z: z-index

Usar `relative, absolute, fixed o sticky`:
los elementos inevitablemente van a empezar a superponerse unos sobre otros
Para controlar el orden de ese "sándwich" visual, usas z-index.

Un z-index: 10 se dibujará por encima de un z-index: 1.

##### Regla: z-index solo funciona en elementos que tengan explícitamente una posición diferente a static



## Prácticas position z-index

El descontrol de estas propiedades suele ser la causa número uno de bugs visuales

1. Position

Usar con moderación:
##### El error más común es usar position: absolute para maquetar estructuras completas
(como alinear un texto al lado de un icono).

##### !!! Regla: Usa Flexbox o Grid para el 95% del flujo y la estructura de tu aplicación
##### !!! Usa position de forma quirúrgica solo para elementos que verdaderamente deban flotar o superponerse
##### !!! badges de notificaciones, modales, tooltips, menús desplegables o botones flotantes


`Anclaje explícito (Parent-Child)`:
##### !!! Nunca dejes un position: absolute huérfano
##### Si no declaras un contenedor padre con posición corregida, el elemento buscará hacia arriba en el DOM hasta llegar al <body>
el elemento buscará hacia arriba en el DOM hasta llegar al <body>,

Práctica:
Siempre que uses absolute,
asegúrate de que el contenedor contenedor directo tenga position: relative (o sticky/absolute).
Esto confina el espacio de coordenadas del hijo de forma segura


Animaciones de posición: Aliados de la GPU
Si necesitas mover un elemento posicionado
(por ejemplo, un menú lateral que entra desde la izquierda)
nunca animes las propiedades top, bottom, left o right.

nunca animes las propiedades top, bottom, left o right.

##### solución: Deja el elemento fijo en su posición final y muévelo eficientemente usando transform: translateX(-100%).


2. z-index

##### Contexto de Apilamiento (Stacking Context)
##### Mito: creer que un z-index: 9999 siempre va a ganar y mostrarse por encima de todo
##### El z-index no es global; es altamente local.

##### Cada vez que aplicas ciertas propiedades
##### (como position no estático con un z-index, opacity menor a 1, o un transform)
##### creas un Contexto de Apilamiento

Si el Componente A tiene un contexto con z-index: 1
y el Componente B tiene uno con z-index: 2
ningún hijo dentro de A podrá jamás superar a B
aunque al hijo le pongas z-index: 999999.
hijo está atrapado en la jerarquía de su padre.

Poder moderno: `isolation: isolate`
##### evitar que los z-index de un componente se "filtren" y peleen con el resto de la aplicación
##### puedes usar la propiedad isolation: isolate.

```
export const Card = styled.div`
  position: relative;
  isolation: isolate; /* 🚀 Crea un contexto de apilamiento limpio y cerrado */
`
```

Todo lo que pase con los z-index de los hijos dentro de este contenedor
se queda dentro de este contenedor

Evita tener que andar subiendo números para solucionar parches visuales

Escribir z-index: 999, luego z-index: 9999 y finalmente z-index: 99999
La solución limpia es centralizar las capas en tu objeto theme como tokens de diseño compartidos

```
export const theme = {
  // Las capas de la aplicación organizadas con semántica clara
  zIndices: {
    base: 0,
    dropdown: 100,
    sticky: 200,
    overlay: 300,
    modal: 400,
    tooltip: 500,
  }
};
```

Y en tus componentes lo consumes de forma limpia y predecible:

```
export const ModalOverlay = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndices.overlay};
`;
```


Rs:

##### 1. Flexbox/Grid para ordenar, position solo para superponer.
2. Padre relative ➔ Hijo absolute.
3. Mueve elementos posicionados con transform, no con top/left.
4. Controla los z-index desde tu theme en saltos de 100 en 100 para tener margen de maniobra, en lugar de usar números mágicos al azar



## Position en componentes


### 1. Checkbox

```
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  user-select: none;
  position: relative;
`;

/* hide input, maintain its accessibility */
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`;

```


1. CheckboxContainer (position: relative)

Este contenedor (un div) agrupa al input invisible
al cuadrado visual que vas a estilar y al texto de la etiqueta.

relative aquí: No altera el flujo normal de la página; el contenedor se dibuja exactamente donde le toca en el diseño
su verdadero propósito es abrir un Contexto de Apilamiento y un marco de coordenadas local

Al declararlo relative, le está diciendo a cualquier elemento hijo con posición absoluta
Tú no te vas a ir a flotar por toda la pantalla; tu límite físico son mis cuatro bordes


2. HiddenCheckbox (position: absolute)

Este es el elemento `<input type="checkbox">` real y nativo del navegador

efecto de absolute:
Saca al input nativo por completo del flujo normal del documento
Para el resto de los elementos (como el texto de la etiqueta)
el input ya no ocupa espacio físico (no mide ni molesta).

anclaje:
Gracias al relative del padre
el input absoluto se posiciona exactamente en la esquina superior izquierda
izquierda (top: 0; left: 0; por defecto) del contenedor del checkbox.


Si quisiéramos esconder el input nativo, la lógica inicial podría decirnos:
Usemos display: none; o visibility: hidden;
error grave en accesibilidad
el navegador destruye el elemento para el teclado y los lectores de pantalla
un usuario ciego o alguien que navega usando la tecla Tab jamás podría interactuar con tu checkbox

`position: absolute` combinado con ese truco de micro-tamaño
`(width: 1px, height: 1px, clip-path)`:

1. El input sigue vivo en el DOM: Está físicamente ahí
colapsado en un pixel invisible flotando en la esquina del contenedor

2. Soporta el foco del teclado:
Cuando el usuario presiona Tab, el foco cae en ese pixel invisible

3. Dispara los estilos del CSS:
La regla `${HiddenCheckbox}:focus-visible + & { outline: 2px solid ... }.`
Como el input absoluto está flotando justo al lado de tu checkbox personalizado (&),
cuando el input invisible gana el foco del teclado
puede "avisarle" a tu div visual que se encienda el brillo eléctrico

`relative` retiene al fantasma dentro de la caja,
y `absolute` convierte al input nativo en ese fantasma invisible
funcional que maneja los clics, el teclado y los estados por detrás.



### 2. Componente 'SearchInput'

```
import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 8px;
  font-size: 0.9rem;
  opacity: 0.5;
  pointer-events: none; /* Do not interfere when clicking on the input */
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 12px 10px 36px; /* Extra space on the left for the icon */

  /* Style */
  background: rgb(255 255 255 / 5%);
  backdrop-filter: blur(4px);
  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: 12px;
  color: #fff;
  font-size: 0.9rem;
  outline: none;
  transition: 
    background ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: rgb(255 255 255 / 30%);
  }

  &:focus {
    background: rgb(255 255 255 / 10%);
    border-color: rgb(255 255 255 / 30%);
    box-shadow: 0 0 15px rgb(255 255 255 / 5%);
  }
`;
```

patrones clásicos del diseño de interfaces
patrón del icono incrustado

el usuario ve un buscador
donde el icono de la lupa vive "dentro" de la caja de texto
pero a nivel arquitectónico de CSS
sincronización espacial perfecta de tres capas

1. SearchContainer (position: relative): El Anclaje Base
Este contenedor agrupa al icono (span) y a la caja de texto (input).

relative:
su función principal no es mover el contenedor
sino establecer las fronteras

Define que el área de juego para cualquier coordenada absoluta se limita estrictamente a su ancho (100%)
y a la altura que dicte el input en su interior.


2. SearchIcon (position: absolute): El Elemento Flotante

El icono es un elemento sutil que debe superponerse sin alterar el flujo de escritura.
El efecto de absolute: Saca al icono del flujo del documento
Al hacer esto, el input ignora que el icono existe y se expande para ocupar el 100% del contenedor

coordenada (left: 8px): Al estar libre del flujo, el navegador lee left: 8px
y clava al icono exactamente a 8 píxeles del borde izquierdo del SearchContainer

Gracias a display: center y align-items: center del padre
el icono se centra verticalmente de forma automática.


3. StyledInput (padding-left: 36px): La Sincronización Secreta
el icono es absoluto y "vuela" por encima del flujo, si el usuario empezara a escribir en un input normal
las letras se dibujarían por detrás del icono, creando un choque visual desastroso.

efecto
propiedad padding-left: 36px
texto del input: "Tu área para empezar a escribir no es el borde físico izquierdo; vas a empezar 36 píxeles más a la derecha

ilusión óptica: Esos 36px de colchón son más que suficientes para dejar intactos los 8px donde flota el icono mismo
y un aire extra de separación. Así se genera la perfecta ilusión de que el icono está empujando al texto hacia la derecha.


4. pointer-events: none

Aunque no es una propiedad de posición
está íntimamente ligada a cómo interactúa el usuario con un elemento absoluto superpuesto
Si el usuario hiciera clic exactamente encima de la lupa para intentar escribir, y no tuvieras esta propiedad
, el clic pegaría en el span del icono y no en el input
impidiendo que el cursor se active para escribir (o requiriendo un segundo clic).

Al poner pointer-events: none, conviertes al icono en un "fantasma holográfico".
". Los clics del mouse lo atraviesan por completo y golpean directamente al input que está justo detrás, garantizando una UX fluida y sin fricciones





# Renderización elegante

Cuando hacemos un renderizado condicional clásico

```
{showButton && <Button />}
```
el elemento aparece o desaparece del DOM de golpe
##### CSS no puede transicionar algo que ya no existe o que acaba de ser inyectado instantáneamente

Para lograr una aparición y desaparición verdaderamente elegante
un efecto Fade-in o Pop-in

##### tenemos que manejar propiedades específicas que no rompan el rendimiento
y elegir la estrategia de renderizado correcta


### Propiedades Ideales

##### modificamos únicamente propiedades que la tarjeta de video pueda procesar sin recalcular el layout

`opacity`: Controla el fundido (pasa de 0 a 1).

`transform (scale o translateY)`:
toque "premium".
##### En lugar de aparecer estático, el botón puede emerger desde abajo (translateY(10px))
##### o expandirse suavemente (scale(0.95)).

`visibility`: propiedad secreta de UX
##### Si solo usas opacity: 0, el botón es invisible pero sigue estando ahí
lo que significa que el usuario podría clickearlo por accidente
o un lector de pantalla lo seguiría leyendo.
`visibility: hidden` lo apaga por completo del mapa interactivo.


1. Enfoque Puro CSS (Control por Props):

### !!! Si el botón puede vivir permanentemente en el DOM
solo querés ocultarlo/mostrarlo visualmente
le pasamos una prop transitoria (con el prefijo $) a Styled Components.

```
import styled from 'styled-components';

interface AnimatedButtonProps {
  $isVisible: boolean;
}

export const AnimatedButton = styled.button<AnimatedButtonProps>`
  /* Estilos base del botón */
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;

  /* 🚀 LA MAGIA DE LA TRANSICIÓN:
     Pasamos opacity y transform de forma fluida.
     'visibility' cambia instantáneamente pero espera a que termine la opacidad. */
  transition: opacity ${({ theme }) => theme.transitions.default},
              transform ${({ theme }) => theme.transitions.default},
              visibility ${({ theme }) => theme.transitions.default};

  /* 🎭 ESTADOS */
  ${({ $isVisible }) =>
    $isVisible
      ? `
        opacity: 1;
        transform: translateY(0) scale(1);
        visibility: visible;
      `
      : `
        opacity: 0;
        transform: translateY(8px) scale(0.95);
        visibility: hidden;
      `}
`;
```


2. Renderizado Real (Montar/Desmontar del DOM)

### !!! Si por rendimiento o lógica de negocio el botón tiene que desaparecer por completo del HTML cuando no se usa ({show && <Button />}),
La entrada es fácil con CSS Keyframes, pero la salida requiere ayuda

1. Entrada (Mounting) con Keyframes

##### Cuando el componente se monta, podemos forzar una animación de entrada inmediata

```
import styled, { keyframes } from 'styled-components';

const fadeInIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const MountingButton = styled.button`
  /* Al montarse, ejecuta la animación una sola vez */
  animation: ${fadeInIn} ${({ theme }) => theme.transitions.default} forwards;
`;
```


2. Salida (Unmounting)

trampa: si el estado de React cambia a false
React borra el botón del DOM en el acto 
impidiendo que veas cualquier animación de salida

Para resolver esto de forma elegante en el desarrollo moderno, tenés dos opciones

1. Vía Javascript Nativo: Crear un hook personalizado
(useDelayUnmount) que mantenga el componente vivo durante 200ms adicionales
mientras cambia una clase de CSS para que se desvanezca antes de destruirse

2. Estándar de la Industria (Framer Motion): Si tu app va a tener muchas transiciones de entrada/salida de componentes que se renderizan condicionalmente
la librería de cabecera es Framer Motion usando su componente <AnimatePresence>.
Se encarga de congelar el desmontaje de React hasta que la animación de salida de CSS termine por completo.

Para este botón en específico que estás armando




# px y rem

## !!! El elemento debería estirarse si el usuario aumenta el tamaño de la letra de su navegador por comodidad o accesibilidad?

`px`:
Un píxel es un píxel.
Si defines algo en 20px, medirá 20px
en una pantalla de 8K,
en un celular viejo y sin importar si el usuario tiene problemas de vista y configuró su navegador para ver todo más grande

`rem` (Relativo al Root):
Toma como base el tamaño de fuente del elemento raíz (<html>).
Por defecto en todos los navegadores, 1rem = 16px

#### !!! Si el usuario cambia su configuración a "Texto Grande",
##### el navegador pasa el mínimo a 24px
por lo que automáticamente 1rem pasa a valer 24px. Tudo escala en proporción


1. Padding, Margin y Gap: `rem`

Si el texto de un botón o de una tarjeta crece porque el usuario aumentó la fuente,
el espacio alrededor de ese texto (padding) y la separación con otros elementos (margin/gap) deben crecer en proporción

peligro del px:
Si usas un texto gigante metido dentro de un botón con padding: 8px (fijo en píxeles)
el texto se va a desbordar del botón o va a quedar visualmente asfixiado
rompiendo la armonía estética


2. Width y Height: Depende del contexto

rem:
Se usa para contenedores cuyo tamaño dependa directamente del texto que llevan dentro
ancho máximo de una tarjeta de blog o el ancho de un input de texto
Si la letra crece, el input y la tarjeta necesitan ser más anchos para que el texto no se corte bruscamente

px:
para elementos rígidos u objetos multimedia que tienen un tamaño de archivo físico real
El contenedor de una foto de perfil (Avatar) de 40px x 40px
el tamaño de un icono SVG, o el grosor de una barra lateral decorativa
##### Una imagen de 40 píxeles nativos se va a ver borrosa si la fuerzas a estirarse mediante rem
solo porque el usuario agrandó la letra de la página.


3. Porcentajes (%) y Viewport (vw / vh)

Para estructuras grandes de layouts
ej, grilla ocupa el 100% del ancho o que una sección mide 100vh de alto
no usas ni px ni rem

##### Dejas que el tamaño responda directamente a la geometría física de la pantalla


4. Borders y Box-shadows: px
detalles visuales micro-métricos, siempre px

##### Un borde elegante de 1px debe seguir siendo una línea fina y nítida de un solo píxel
sin importar si el usuario lee la página con lupa o con letra gigante

Si defines un borde como 0.0625rem (1px equivalente)
y el usuario aumenta la fuente al doble, el borde pasará a medir 2px
volviéndose tosco y arruinando el minimalismo del diseño visual


## Referencia 

`Typography` (font-size):
rem (Siempre) 
Regla estricta de accesibilidad web (W3C).

`Padding / Margin / Gap`:
rem (Recomendado)
Mantiene las proporciones de "aire" visual cuando el texto escala.

`Borders (border-width)`:
px
Evita que las líneas finas se vuelvan gruesas y borrosas.

`Box Shadows`:
px
Mantiene la definición de la sombra idéntica.

`Componentes de texto (Cards, Inputs)`:
rem o %
Permite que las cajas crezcan si el texto de adentro crece

`Multimedia / Componentes fijos (Images, Icons)`:
Protege los assets estáticos de deformaciones de píxeles.



## html 100% vs 62.5%

React y TypeScript, la balanza se inclina fuertemente hacia html { font-size: 100%; },
Si tu theme.ts ya define los valores, el desarrollador no tiene que andar haciendo divisiones por 16 en su cabeza


## dividir o multiplicar valores del theme

```
export const CustomBox = styled.div`
  // Divide el espacio medio a la mitad (si md es 1rem, esto dará 0.5rem)
  padding: calc(${({ theme }) => theme.spacing.md} / 2);

  // También funciona para multiplicar si necesitas más espacio
  margin-bottom: calc(${({ theme }) => theme.spacing.xl} * 1.5);
`;
```




# Elementos sigan al ancho ventana

que los elementos internos sigan el ancho de ventana/contenedor
sobre todo cuando se hacen chicos

que se estiren, que no haya una dominancia de los
elementos, que ellos no dicten al ancho del contenedor
que el contenedor dicte el estiramiento de los elem internos


## Revisar elementos

### Atoms y molecules: width 100%

### molecules

#### TodoItem

```
  min-width: 0; /* avoid content breakage */

``` 

### Organisms: width 100%


#### TaskSidebar: excepción en mediaquerie:  width: 280px;

```
export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100%; 
  height: fit-content;
  min-height: auto;

  @media (width >= 800px) {
    width: 280px;
  }
  background-color: ${({ theme }) => theme.colors.glass};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  padding: ${({ theme }) => theme.spacing.lg} 0;
`;

```


#### TodoList: max-width 800px

```
import styled from 'styled-components';

export const ListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  gap: ${({ theme }) => theme.spacing.md};

  /* Empty State */
  opacity: 0.6;
  filter: grayscale(1);
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  /* Scrollbar */
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 8px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.glassBorder};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary}80;
  }
`;


```


### Templates

##### Dashtemaplate

```

import styled from 'styled-components';
import { mixins } from '../../../styles/mixins';

export const TemplateWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'sidebar'
    'footer';
  grid-template-columns: minmax(0, 1fr);
  min-height: 100vh;
  width: 100%;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};

  @media (width >= 800px) {
    grid-template:
      'header header' auto
      'sidebar main' 1fr
      'footer footer' auto / auto minmax(0, 1fr);
  }
`;

export const StyledHeader = styled.header`
  grid-area: header;
  top: 0;
  z-index: 100;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.glass};
  border-radius: 16px 16px 0 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.glassBorder};
  
  @media (width >= 800px) {
    padding: ${({ theme }) => theme.spacing.md}
      ${({ theme }) => theme.spacing.xl};
  }
`;

export const StyledSidebar = styled.aside`
  grid-area: sidebar;
  padding: ${({ theme }) => theme.spacing.md};
  position: relative;
  border-top: 1px solid ${({ theme }) => theme.colors.glassBorder};
  place-self: start center;
  width: 100%;

  @media (width >= 800px) {
    border-top: none;
    border-right: 1px solid ${({ theme }) => theme.colors.glassBorder};
    place-self: stretch stretch;
    padding: ${({ theme }) => theme.spacing.xl};
    width: auto;
  }
`;

export const StyledMain = styled.main`
  grid-area: main;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (width >= 800px) {
    padding: ${({ theme }) => theme.spacing.xl};

    & > * {
      width: 100%;
      max-width: 800px;
    }
  }
`;

export const StyledFooter = styled.footer`
  grid-area: footer;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.glass};
  border-top: 1px solid ${({ theme }) => theme.colors.glassBorder};
  text-align: center;
`;

```


##### TodoTemplate


```

import styled from 'styled-components';
import { mixins } from '../../../styles/mixins';

export const PageWrapper = styled.div`
  width: 100%;
  background: radial-gradient(
    circle at top center,
    oklch(25% 0.12 250deg) 0%,
    ${({ theme }) => theme.colors.background} 100%
  );
  display: flex;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md};
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const HeaderSection = styled.header`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  h1 {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    text-shadow: 0 0 20px ${({ theme }) => theme.colors.primary}40;
  }
`;

export const InputSection = styled.section`
  top: ${({ theme }) => theme.spacing.md};
`;

export const ListSection = styled.section`
  flex: 1;
  width: 100%;
`;

```



### Page

#### TodoPage

```
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  animation: ${fadeIn} ${({ theme }) => theme.transitions.default};
`;

```


## Conceptos

el panel de la derecha se "acobarda" y se achica
pero cuando metés una súper tarea larga
el panel se estira de golpe empujando toda la interfaz hacia los lados.

### !!! diseño de interfaces UI, a esto se lo conoce como la batalla entre "Hug Contents" (Abrazar el contenido) y "Fill Container" (Llenar el contenedor).
#### componentes están calculando su tamaño basándose en lo que llevan dentro, en lugar de obedecer la estructura de la grilla superior


1. Tamaño Intrínseco vs. Extrínseco

Tamaño Intrínseco (estado actual):
Ocurre cuando un elemento dice: "Yo mido lo que mida mi hijo más grande".

Si el texto es corto, la caja es chica
si el texto es kilométrico, la caja explota hacia los lados

##### CSS maneja esto internamente con valores automáticos o palabras clave como max-content o fit-content.


Tamaño Extrínseco (El objetivo a lograr):
Ocurre cuando el diseño se dicta desde afuera hacia adentro

El contenedor padre (la ventana o el layout principal) dice: "
tenés asignado este 100% de espacio disponible, no me importa si adentro tenés una sola palabra o cien".


2. Propiedades de Flexbox


1. trío flex-grow, flex-shrink y flex-basis
Cuando un elemento es hijo directo de un contenedor flex
su ancho ya no se rige tanto por la propiedad width, sino por este "acuerdo tripartito":

flex-grow: 1;: Le dice al elemento: "Si sobra espacio libre en la pantalla, estirate de forma obligatoria hasta rellenar el contenedor
Esto evitará que el panel derecho se quede corto como en la tercera imagen.

flex-shrink: 1;: Le dice al elemento: "Si la pantalla se achica, tenés permiso para encogerte en lugar de romper el layout y desbordarte".

flex-basis: 0; o auto;: Es el punto de partida del cálculo
Configurar un flex-basis correcto evita que el ancho inicial dependa del largo del texto de la tarea


2. align-items: stretch
Por defecto, los contenedores Flex tienen align-items: stretch.
Esto hace que los hijos se estiren automáticamente para cubrir todo el eje opuesto

Si en algún contenedor padre se cambió esto a flex-start o center,
los elementos pierden la orden de estirarse y colapsan alrededor de su contenido mínimo


3. Propiedades de Control de Límites

##### Para blindar los componentes y asegurar que el texto largo no "empuje" las paredes del contenedor (como pasa en tu cuarta imagen), usamos restricciones explícitas:

width: 100%; o inline-size: 100%;: Fuerza a un elemento de bloque (o un hijo flex) a ocupar la totalidad del ancho de su celda asignada, ignorando el tamaño del texto

min-width: 0; (El secreto ninja de Flexbox): Por defecto, los hijos de un contenedor Flex tienen un min-width implícito de auto (que equivale a min-content).
Esto significa que si el texto es larguísimo, Flexbox prefiere romper el diseño antes que cortar el texto

Poner min-width: 0; rompe esa regla nativa y le dice a Flexbox: "Podés achicar esta caja tanto como sea necesario, nosotros nos encargamos de que el texto adentro se adapte".


4. texto: Control de desbordamiento

Una vez que lográs que el contenedor sea rígido y dictado por la pantalla, el texto súper largo va a intentar salirse de los bordes
Ahí entran en juego las propiedades de flujo de texto:

word-break: break-word; o overflow-wrap: anywhere;:
Fuerzan al texto largo a saltar de línea automáticamente cuando llega al borde de la caja
haciendo que el componente crezca hacia abajo (vertical) y nunca hacia los costados (horizontal).




# Fix bloque de código y media

```
export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100%; 
  height: fit-content;
  min-height: auto;

  @media (width >= 800px) {
    width: 280px;
  }
  background-color: ${({ theme }) => theme.colors.glass};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  padding: ${({ theme }) => theme.spacing.lg} 0;
`;
```



# Fix archtc commts




# Tema claro y oscuro/dia-noche

## Bases





# CSS vars




# Guia Cierre dev

1. Testing Robusto (Vitest + React Testing Library)

Antes de mostrar la app visualmente
aseguramos que los cimientos de la lógica no se rompan

Pruebas Unitarias de Lógica Pura:
Testear los reducers, hooks personalizados o utilidades de filtrado usando Vitest
(Aprovechá test.each para combinaciones de filtros de tareas).

Pruebas de Componentes Atómicos:
Verificar que componentes clave (como tu Typography o los inputs de tareas) rendericen los estilos según sus props

Pruebas de Integración (User Flows):
Crear el flujo completo en un test:
"El usuario escribe una tarea -> Aprieta Enter -> La tarea aparece en la lista -> Cambia de categoría


2. Aislamiento y Catálogo de UI (Storybook)

Storybook demuestra que sabés trabajar a escala empresarial
aislando los componentes de la base de datos o estados globales pesados

`Configuración del Entorno`:
Asegurar que Storybook tenga acceso al ThemeProvider de tus Styled Components en su archivo .storybook/preview.tsx
para que los colores del theme.ts (como Inter o Pacifico) se vean bien

`Historias de Componentes Atómicos`:
Crear las .stories.tsx para tus variantes de Typography
Button, y los contenedores translúcidos (Glass).

`Historias de Componentes Complejos`:
Documentar los estados de la TaskSidebar o las tarjetas de tareas individuales
(Estado: Pendiente, Completada, En foco).


3. Optimización y Limpieza de Código

Un entorno de producción no puede llevar "residuos" de la etapa de desarrollo

`Auditoría de Logs y Comentarios`:
Eliminar todos los console.log de debug y secciones de código comentadas

`Performance`:
Asegurar que los efectos visuales complejos (como el backdrop-filter de tu diseño Glass) no causen caídas de frames en el renderizado al alternar tareas rápidamente

`Production Build Check`:
Ejecutar `npm run build` en tu entorno local para confirmar que TypeScript no tire ningún error estricto de tipado de último momento en los archivos de compilación


4. Despliegue Profesional (CI/CD)

La app tiene que estar viva en la web

`Deploy en Producción`:
Subir la app a plataformas veloces como Vercel o Netlify conectadas directo a tu rama main

`Pipeline Automatizado`:
Configurar una GitHub Action ultra-simple que corra los tests de Vitest automáticamente cada vez que hagas un push
bloqueando el despliegue si algún test falla
Eso demuestra disciplina de ingeniería real


5. README: Carta de Presentación

Reclutadores técnicos o Managers irán directo al README antes de clonar tu código

`Explicación de Decisiones Técnicas`:
Explicar detalladamente por qué elegiste separar las cosas con Clean Architecture / DDD
y cómo estructuraste los componentes con Atomic Design

`Showcase Visual`:
GIFs o capturas de pantalla de alta calidad




# Storybook

##### Storybook es un laboratorio de aislamiento para tus componentes
##### Permite sacar esa "ventana" (tu botón, tu checkbox, tu sidebar) de la aplicación
##### llevártela a un entorno flotante y probar cómo reacciona en un banco de pruebas sin necesidad de levantar el backend, iniciar sesión, ni navegar por toda la app.

Cuando una aplicación escala, probar los componentes dentro de la app se vuelve pesado
Storybook resuelve esto ofreciéndote tres superpoderes

1. `Desarrollo aislado`:
Podés crear un componente desde cero sin siquiera tener una página donde renderizarlo todavía

2. `Documentación viva`:
Actúa como un catálogo interactivo de tu interfaz
Cualquier desarrollador (o diseñador) puede entrar y ver qué componentes ya existen para no duplicar código

3. `Estados al alcance de un clic`:
Cómo se ve tu tarjeta de tareas si el texto es larguísimo?
Y si está en estado de carga? ¿Y si tira error?
En Storybook podés simular todos estos escenarios en segundos usando controles visuales


## 1. Story: una historia

##### Representa un estado específico de un componente.

##### Si tenés un componente Button, vas a crear un archivo al lado llamado Button.stories.tsx
Dentro de ese archivo, vas a escribir "historias" para cada una de sus facetas
una historia para el botón activo, otra para el botón deshabilitado
otra para el botón con un ícono, etc.

##### Así se ve la anatomía de una historia básica en código moderno (formato CSF):

```typescript

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// 1. Configuración general del componente
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button', // Cómo se va a organizar en la barra lateral de Storybook
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

// 2. Historia 1: El botón en su estado primario
export const Primary: Story = {
  args: {
    $variant: 'primary',
    children: 'Añadir tarea',
  },
};

// 3. Historia 2: El botón cuando está deshabilitado
export const Disabled: Story = {
  args: {
    $variant: 'primary',
    disabled: true,
    children: 'Cargando...',
  },
};
```


## 2. Interacción con la story

Al ejecutar el comando de Storybook
se abre una pestaña en tu navegador (normalmente en el puerto localhost:6006)
que es totalmente independiente de tu aplicación Vite

La pantalla se divide en tres grandes secciones:

1. barra lateral/sidebar:
Un árbol de carpetas con todos tus componentes organizados
(siguiendo tu estructura de Atomic Design: Atoms, Molecules, Organisms).

2. lienzo (Canvas):
El centro del escenario donde se renderiza tu componente aislado para que interactúes con él
(hacer clics, ver hovers, probar responsividad).

3. panel de controles (Addons):
Abajo o al costado tenés perillas y cajas de texto
Podés cambiar el texto del componente en tiempo real o activar un checkbox de tipo booleano
(como $checked: true/false)
para ver cómo cambia el diseño instantáneamente sin tocar el código


Storybook tiene un ecosistema propio con conceptos
hacen ver el desarrollo de interfaces de otra manera


## 3. Motor de datos: Args (Arguments)

En el mundo de React, hablas de props
##### En Storybook, esas props se mapean directamente a algo llamado Args

##### Los Args son simplemente un objeto JavaScript donde definís los datos que va a recibir tu componente
para una historia en particular
Storybook los lee dinámicamente y genera de forma automática el Panel de Controles en la interfaz web

Si tu componente Checkbox tiene un arg llamado $checked: true
##### vas a ver un switch interactivo en la pantalla de Storybook
Si lo desactivas con el mouse, el arg cambia a false en tiempo real y el componente se re-renderiza 


## 4. Envoltorio: Decorators (Decoradores)

Concepto más importante para tu proyecto actual
Un componente aislado

Si intentás renderizar tu StyledCheckbox completamente solo en Storybook
la app va a crasear instantáneamente
Porque tus estilos usan ${({ theme }) => theme.colors.primary}, y fuera de tu app no existe el ThemeProvider

##### Un Decorator es una función que envuelve a tu historia dentro de otro componente
ponerle el traje al componente antes de lanzarlo al lienzo.

Podés crear un decorador global que envuelva a todas tus historias dentro de tu <ThemeProvider theme="{theme}"> y tus <GlobalStyles/>.

Podés crear un decorador específico para que un componente se renderice centrado en la pantalla o con un fondo oscuro de prueba


## 5. Configuración y metadatos: Parameters (Parámetros)

##### Mientras que los Args controlan el comportamiento interno del componente
##### los Parameters controlan el comportamiento del propio Storybook alrededor de ese componente
Son metadatos estáticos.

`Backgrounds`:
Forzar a que un componente
renderice siempre sobre un fondo azul oscuro para que se note el contraste translúcido
ignorando el fondo blanco por defecto de Storybook

`Viewport`:
Simular que la historia se abra directamente con las dimensiones de un iPhone
o una tablet para testear la responsividad de tu TaskSidebar

`Layout`:
Decirle a Storybook si el componente debe ir pegado arriba a la izquierda
o perfectamente centrado en el lienzo (layout: 'centered').


## 6. Ecosistema Addons (Complementos)

Storybook por sí solo es una pizarra en blanco
Todo lo divertido ocurre gracias a los Addons
que son plugins preinstalados (o que podés agregar vos)
para expandir la consola de control inferior

Los más cruciales para tu día a día son:

`Actions`:
Permite "espiar" eventos
Si tu botón tiene un onClick, el addon de Actions va a capturar ese clic y te va a mostrar en una consola interna
"El usuario hizo clic y envió estos datos".
Sirve para probar interactividad sin tener una base de datos real detrás

`A11y (Accessibility)`:
Corre una auditoría de accesibilidad militar en tiempo real sobre tu componente
Te va a avisar si el contraste entre el texto y tu fondo Glass es muy bajo
o si a tu input oculto del Checkbox le falta una etiqueta adecuada para lectores de pantalla


## 7. Formato MDX (Código + Documentación)

Tradicionalmente, las historias se escriben en archivos .stories.tsx
Pero Storybook permite usar MDX (.stories.mdx)
que es una combinación espectacular de Markdown clásico con componentes de React vivos

Esto te permite escribir documentación en texto plano para tu portfolio
("Este componente maneja el estado visual de las tareas...")
y, en medio del texto, incrustar un botón real y funcional para que la persona que lee la documentación pueda hacerle clic ahí mismo
Esto te eleva el nivel del proyecto a un estándar de librería de diseño como Tailwind o Material UI



## Proceso

1. Instalación e Inicialización
punto de partida para Vite + TypeScript.

`Comando de inicialización`:
Ejecutamos el instalador oficial de Storybook.

`Inspección de archivos`:
Entender las dos cosas nuevas que van a aparecer en tu proyecto

carpeta .storybook: cerebro de la herramienta

scripts nuevos en tu package.json
storybook para levantar el servidor local
y build-storybook para compilarlo


2. Configuración del Entorno

Fase más crítica
Si saltamos esto, tus Styled Components van a fallar por falta de contexto

`Inyección del Theme y Estilos Globales`:
Modificar el archivo de configuración interna de Storybook
(.storybook/preview.tsx)
para envolver todas las historias de forma automática con tu ThemeProvider
(pasándole tu theme.ts) y tus GlobalStyles.ts.

`Carga de Fuentes en Storybook`:
Asegurarnos de que Storybook tenga acceso a las fuentes Inter y Pacifico
de Google Fonts, ya que el archivo index.html de tu app principal no se comparte con Storybook


3. Primer Componente Aislado (Nivel: Átomo)
Arrancamos con lo más simple para validar que la configuración de la Fase 2 funcione

`Elegir ej`:
Crear el archivo Typography.stories.tsx al lado de tu componente de tipografía

`Definir variantes estáticas`:
Crear historias para el texto base (body)
y tu título principal con la fuente cursiva (appTitle).

`Verificación`:
Levantar Storybook, entrar al navegador y comprobar que los estilos
y tipografías se vean idénticos a tu app real.


4. Componentes con Estado e Interactividad
(Nivel: Molécula)

Subimos la apuesta con componentes que reaccionan a las acciones del usuario

`Checkbox`: Crear Checkbox.stories.tsx
##### Configurar la prop $checked para que aparezca como un switch interactivo en la barra inferior de Storybook
permitiéndote prender y apagar el tick de la tarea con un clic

`Captura de Eventos (Actions)`:
Configurar la prop onChange para que, cuando hagas clic en el checkbox
Storybook te muestre un log en su consola diciendo
"El evento de cambio fue disparado con éxito".


5. Componentes Estructurales:
Nivel: Organismo

piezas más grandes de tu arquitectura


`Aislar la TaskSidebar`:
Crear la historia para tu barra lateral

`Simulación de Props Complejas`:
Pasar una lista de categorías fijas (falsas o mockeadas)
para ver cómo se renderiza la barra con las diferentes secciones
sin necesidad de que la base de datos
o el estado global de la aplicación estén activos


6. Compilación y Despliegue

`Compilación Estática`:
Correr el comando de build para transformar todo tu catálogo de Storybook en una carpeta con archivos HTML, CSS y JS puros

`Deploy Independiente`:
Subir este catálogo a una URL pública
Vercel, Netlify o GitHub Pages

Así, en tu portfolio de desarrollador vas a poder poner dos links
uno para usar la Today App y otro para auditar tu Librería de Componentes en Storybook



## 1. Instalación e iniciacion

En Vite + TypeScript
Storybook ya viene preparado para reconocerlo de forma automática
sin que tengamos que renegar con configuraciones pesadas de Webpack

Estar en la raíz de tu proyecto en la terminal

1. Comando de Inicialización

Ejecutá el inicializador oficial de Storybook
Este comando va a examinar tu package.json
va a detectar que usás React + Vite + TS y va a descargar exactamente lo que necesitás

`npx storybook@latest init`

Vas a ver que empieza a instalar dependencias y, a mitad del proceso
te va a preguntar si querés compilar el proyecto o correr un asistente
Dejá que termine por completo
Puede tardar un par de minutos dependiendo de tu conexión


2. Inspección
Una vez que el comando finalice con éxito, vas a notar que tu estructura de archivos se modificó ligeramente

carpeta .storybook/
Esta carpeta oculta (tiene un punto adelante) controla cómo funciona la herramienta

Adentro vas a encontrar dos archivos cruciales:

`main.ts`:
configuración principal
Acá se define dónde va a ir a buscar Storybook tus archivos de historias
(por defecto busca cualquier archivo .stories.tsx)
y qué tecnologías usa para compilar (Vite).

`preview.ts`:
Controla cómo se van a renderizar tus componentes dentro del lienzo
Acá es donde en el próximo paso vamos a meter el traje para styled components


carpeta src/stories/: los ej

Storybook te va a regalar un par de componentes de ejemplo (un botón
una cabecera, una página entera) con sus respectivas historias para que veas cómo se estructuran

Dejalos ahí para ver su código
más adelante borrarlos para no ensuciar el src


Actualización en tu package.json

archivo de configuración de Node
vas a ver que en la sección de "scripts" se agregaron dos líneas nuevas

```
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "storybook": "storybook dev -p 6006",
  "build-storybook": "storybook build"
}
```


3. Laboratorio

verificar que la instalación base
levantar el servidor local exclusivo de Storybook ejecutando el nuevo script

`npm run storybook`
Este comando va a compilar tus componentes en segundo plano y, cuando termine
va a abrir automáticamente una pestaña en tu navegador en la dirección
http://localhost:6006

Vas a ver el panel de control de Storybook con la barra lateral izquierda llena de los componentes de ejemplo que te mencioné antes
Jugá un poco con los controles inferiores de esos ejemplos para familiarizarte con la interfaz



### Compilar el proyecto o correr un asistente

Cuando ejecutás npx storybook@latest init
la consola analiza tu proyecto y frena

para pedirte confirmación sobre estos puntos:

1. Asistente de Onboarding: Onboarding Wizard

"Do you want to run the Storybook onboarding wizard?" (¿Querés correr el asistente de bienvenida?).

`SÍ (y)`: Storybook va a inyectar la carpeta src/stories
con los componentes de ejemplo que te mencioné antes (el botón, la cabecera, etc.).
Además, cuando prendas el servidor por primera vez, te va a guiar con un cartel
flotante tipo "tour guiado" por la interfaz web para enseñarte dónde están los controles

`NO (n)`: Te va a dejar el entorno completamente vacío
una pizarra en blanco lista para que vos crees tus propias historias desde cero

recomendación
sirve muchísimo tener un archivo de referencia para copiar y pegar la estructura inicial cuando armemos tus propias historias


2. Plugin de ESLint (Configuración de código)

A veces, si detecta que usás un linter en tu proyecto Vite, te va a preguntar:
"Do you want to install eslint-plugin-storybook?"

un plugin oficial que analiza tus archivos .stories.tsx mientras programás
Si escribís mal una historia o usás una sintaxis vieja, tu editor de código
te lo va a marcar con una línea roja y te va a sugerir cómo arreglarlo

SÍ. Te ayuda a mantener el código limpio y con buenas prácticas corporativas


3. Telemetría sin datos personales
datos de rendimiento anónimos a sus servidores
ejemplo, cuánto tardó en compilar tu proyecto


4. Ejecutar el servidor
arrancar el entorno en ese mismo instante

si-y: 
ejecuta el comando `npm run storybook` por vos.



### Compatibilidad en librerias y frameworks




## '.stories.tsx'  y '.stories.mdx':

1. .stories.tsx
archivo TypeScript
basado en un estándar llamado CSF (Component Story Format).

Acá no escribís texto narrativo
##### escribís código estructurado en forma de objetos de JavaScript
para declarar los estados de tus componentes.

uso principal:
Desarrollar, probar e interactuar
##### Es el lugar donde definís los Args (las props interactivas)
capturás los eventos con Actions y donde herramientas como Playwright o Vitest
van a entrar a correr los testeos automatizados.

usarlo: El 95% del tiempo mientras estás construyendo tu app
Cada vez que crees un átomo, molécula u organismo
##### su archivo de cabecera va a ser un .stories.tsx.


2. .mdx: Vidriera / Documentación
formato que combina Markdown clásico (para escribir texto con formato simple)
##### con la capacidad de renderizar componentes de React en vivo en el medio del texto

##### usarlo: Cuando querés documentar cosas globales de tu proyecto que no son un componente único
Ej: Una página de bienvenida para tu portfolio explicando la arquitectura de la app 
Una guía visual de tus Tokens de Diseño (una página que muestre la paleta de colores de tu theme.ts
el stack de fuentes de Linux/Windows/Mac que acabamos de pulir, o las reglas de tus efectos Glass).


3. archivo .mdx y .stories.tsx
Storybook moderno se separaron los roles

Declarás la lógica y el comportamiento puro de tu componente en tu archivo .stories.tsx.

##### Si querés armar una página de documentación hermosa para tu portfolio, creás un archivo .mdx al lado
##### escribís texto normal en Markdown e importás la historia desde el archivo .tsx usando etiquetas especiales de Storybook.

Ej:

```
{/* Ejemplo conceptual de un archivo .mdx moderno */}

# Mi Componente de Botón

Este botón maneja los clics principales de la Today App usando el diseño *Liquid Glass*.

Aquí puedes ver cómo luce en su estado principal:

<Canvas of={ButtonStories.Primary} />
```

toda tu interfaz la vas a programar en archivos .stories.tsx.
Dejaremos los archivos .mdx únicamente si al final queremos armar una sección de "Guía de Estilos"




## 2. Configuración del Entorno

Fase más crítica
Si saltamos esto, tus Styled Components van a fallar por falta de contexto

##### darles el entorno que necesitan para que no se rompan al buscar tu paleta de colores o tus fuentes
##### la clave está en usar un Decorator (Decorador) global

##### Esto va a envolver a absolutamente todas las historias que crees dentro de tu <ThemeProvider>
Esto va a envolver a absolutamente todas las historias que crees dentro de tu <ThemeProvider>


1. Verificar o renombrar preview.ts a preview.tsx
Paso crítico de TypeScript

Ir a carpeta .storybook/ en la raíz de tu proyecto
El instalador por defecto suele crear un archivo llamado preview.ts
Como adentro vamos a escribir etiquetas de React (JSX)
cambiale el nombre o la extensión a preview.tsx (agregándole la x al final).

Si no lo hacés, TypeScript va a tirar un error de sintaxis gigante.


2. Modificar el archivo preview.tsx
Inyectar el ThemeProvider

Abrí ese archivo preview.tsx y reemplazá todo su contenido por el siguiente código
Asegurate de ajustar las rutas de importación de tu theme y tus GlobalStyles
según dónde los tengas exactamente en tu carpeta src/styles:

```
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/theme"; 
import { GlobalStyles } from "../src/styles/GlobalStyles";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // El decorador envuelve cada historia en el entorno de Styled Components
  decorators: [
    (Story) => (       


      
    ),
  ],
};

export default preview;
```


3. Inyectar las Fuentes de Google Fonts
Crear preview-head.html

Storybook corre en un entorno HTML totalmente aislado del index.html de tu aplicación
Para que reconozca tus fuentes tipográficas (como Inter o las fuentes cursivas de tu título)

creá un archivo nuevo dentro de la carpeta .storybook/ llamado exactamente preview-head.html
(sin src/, directo adentro de .storybook/).

Pegale este bloque de código para traer las tipografías:

```
<!-- Carga de fuentes para el catálogo de Storybook -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Caveat:wght@400;700&family=Pacifico&display=swap" rel="stylesheet">
```

##### Storybook renderiza tus componentes dentro de un <iframe> aislado
(una página web adentro de otra)
Antes de cargar los componentes, estas etiquetas se meterán en el <head> de ese iframe"

te asegurás de que tanto Inter para los textos limpios, como Pacifico o Caveat si usás para los títulos cursivos de la app


4. Verificación:
Una vez guardados los cambios en esos dos archivos de la carpeta .storybook/,

`npm run storybook`




## 3. Primer componente aislado  (Nivel: Átomo)
Arrancamos con lo más simple para validar que la configuración de la Fase 2 funcione

##### nos permite testear el laboratorio con un componente que no tiene dependencias lógicas pesadas (como estados o llamadas a APIs).
Solo recibe texto y lo renderiza con estilo.

Crear la historia el componente de Tipografía (o el texto base de tu app).
Va a validar si Storybook está leyendo bien las Google Fonts que inyectamos en el preview-head.html y el ThemeProvider.


1. .stories.tsx

En la carpeta del componente 
creá uno nuevo llamado exactamente Typography.stories.tsx.

código estructurado bajo el estándar moderno de Storybook (CSF 3):

```
import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography'; // Ajustá la ruta si es necesario

// 1. Configuración general del componente en el catálogo
const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography', // Cómo se va a ver en el árbol de la barra lateral
  component: Typography,
  tags: ['autodocs'], // Esto genera una página de documentación automática espectacular
  argTypes: {
    // Esto le dice a Storybook cómo renderizar los controles inferiores
    variant: {
      control: 'select',
      options: ['title', 'subtitle', 'body', 'caption'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

// 2. Definición de las Historias (los diferentes estados)

// Variantes para el Título Principal (Usando Pacifico/Caveat)
export const AppTitle: Story = {
  args: {
    variant: 'title',
    children: 'Today App',
  },
};

// Variante para el Cuerpo del texto (Usando Inter)
export const BodyText: Story = {
  args: {
    variant: 'body',
    children: 'Escribí una nueva tarea para mantener el foco en tu día.',
  },
};

// Variante para textos de alerta o secundarios
export const CaptionText: Story = {
  args: {
    variant: 'caption',
    children: 'Completada a las 14:15',
  },
};
```


2. Anatomía del archivo

`meta (Export por defecto)`:
identidad del componente
"componente se llama Typography y quiero que lo guardes en el estante de Atoms"

`argTypes`: poder
decirle que variant es un select con esas opciones
Storybook te va a armar un menú desplegable en la barra inferior de la web para que cambies de estilo con un clic

`export const (Export nombrados)`:
Cada uno de ellos es una Historia individual
Storybook los va a listar debajo de Typography
en la barra lateral para que puedas saltar de uno a otro al instante


3. Verificar

`npm run storybook`
http://localhost:6006

mirá la barra lateral
##### ver que apareció una carpeta llamada Atoms
##### adentro vas a tener tu componente Typography con sus tres historias
##### AppTitle, BodyText, CaptionText


4. Auditar en este paso:

`Fuentes`:
Seleccioná AppTitle
Se ve con tu tipografía cursiva fluida?
Seleccioná BodyText.
Usa la fuente limpia Inter?

`Controles`:
clic en la pestaña "Controls" abajo en la pantalla
Intentá cambiar el texto en la caja de children
o alternar las opciones del selector de variant
Si el texto en pantalla cambia en tiempo real con los estilos de tu theme.ts
tu entorno de Storybook está oficialmente sincronizado al 100%.



## 4. Componentes con Estado e Interactividad
(Nivel: Molécula)

Subimos la apuesta con componentes que reaccionan a las acciones del usuario

Storybook: por defecto, es un entorno "tonto"
##### que solo refleja las props que le pasamos (stateless).

Si tenés un componente Checkbox y le hacés clic en la pantalla
el tick no se va a prender ni apagar solo
##### porque en Storybook no hay un estado global que esté manejando ese cambio

##### Para resolver esto y poder probar la interactividad real de tu diseño
##### Usamos dos poderes: Actions (para espiar los eventos) y una función Render personalizada (para simular el estado interno).


1. Código: Checkbox.stories.tsx

En la carpeta de Checkbox, crear la story
##### metamos este setup avanzado
##### usando el método moderno fn() de Storybook para espiar los clics:

```
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test'; // Captura eventos de forma nativa
import { Checkbox } from './Checkbox';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Molecules/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  // Le dice a Storybook: "Cualquier prop que empiece con 'on' (como onChange), espiala"
  args: { 
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// 1. Estado estático: Desmarcado
export const Unchecked: Story = {
  args: {
    $checked: false,
    label: 'Aprender arquitectura Clean de software',
  },
};

// 2. Estado estático: Marcado
export const Checked: Story = {
  args: {
    $checked: true,
    label: 'Configurar Storybook con Styled Components',
  },
};

// 3. LA MAGIA: Simulación de estado real e interactivo
export const InteractiveSimulation: Story = {
  args: {
    label: 'Haceme clic para testear el efecto Glass',
  },
  render: (args) => {
    // Creamos un estado local temporario dentro del laboratorio de Storybook
    const [isChecked, setIsChecked] = useState(false);
    
    return (
      <Checkbox
        {...args}
        $checked={isChecked}
        onChange={(e) => {
          setIsChecked(!isChecked); // Cambia el estado visual
          args.onChange(e); // Ejecuta la acción para que quede registrada en la consola inferior
        }}
      />
    );
  },
};
```


2. Flujo de verificación

comprobar que molécula reaccione como en la vida real
##### sigamos estos pasos en la interfaz web de Storybook

1. Inspeccionar los estados estáticos
Pestañas Unchecked y Checked

Hacé clic en las historias Unchecked y Checked en la barra lateral
Sirven para auditar que el diseño visual sea el correcto en ambos extremos estáticos sin necesidad de hacer clic

2. Probar el interruptor interactivo
Pestaña InteractiveSimulation

Entrá a InteractiveSimulation
Hacé clic arriba del checkbox
Gracias a la función render con el useState que le metimos
el componente debería prender y apagar el tick fluidamente
mostrando las transiciones CSS de tu diseño

3. Auditar la pestaña Actions
Consola inferior

Mientras hacés clics en la simulación interactiva
mirá el panel inferior de Storybook y seleccioná la pestaña "Actions".
Vas a ver que cada clic imprime un log interactivo en tiempo real
Si lo desplegaste
te muestra todo el evento nativo de React con el target y los datos del input


### !!! Play Function: automatizar test



## 5. Componentes Estructurales: Nivel: Organismo
Las piezas más grandes de tu arquitectura

##### !!! Organismos es donde realmente se ve el retorno de inversión de usar Storybook

Un organismo es una estructura grande de la interfaz
TaskSidebar o una grilla completa de tareas

##### !!! Estos componentes suelen estar acoplados a contextos globales gigantes
##### !!! llamadas a bases de datos o estados complejos

##### Si intentás renderizarlos de una, la pantalla explota

##### !!! En el laboratorio de Storybook, el truco consiste en aislar el diseño usando datos simulados (Mock Data).

#### !!! Estructurar la historia de un organismo simulando diferentes escenarios de la vida real
##### !!! cuando está cargando, cuando no tiene tareas y cuando está lleno


1. Código: TaskSidebar.stories.tsx
necesita una lista de categorías y saber cuál está seleccionada

##### En lugar de conectar tu base de datos real
##### creamos los mocks directamente en el archivo de la historia

```
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TaskSidebar } from './TaskSidebar';
import { useState } from 'react';

// 1. Datos simulados (Mock Data) que imitan lo que vendría del backend
const mockCategories = [
  { id: '1', name: 'Personal', taskCount: 5, icon: 'user' },
  { id: '2', name: 'Trabajo', taskCount: 12, icon: 'briefcase' },
  { id: '3', name: 'Estudio', taskCount: 3, icon: 'book' },
];

const meta: Meta<typeof TaskSidebar> = {
  title: 'Organisms/TaskSidebar',
  component: TaskSidebar,
  tags: ['autodocs'],
  parameters: {
    // Forzamos un layout que ocupe toda la pantalla para ver el sidebar en su entorno natural
    layout: 'fullscreen', 
  },
  args: {
    onSelectCategory: fn(),
    onAddCategory: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof TaskSidebar>;

// Estado 1: La vista por defecto con datos cargados
export const Default: Story = {
  args: {
    categories: mockCategories,
    activeCategoryId: '1',
  },
};

// Estado 2: ¿Qué pasa si el usuario es nuevo y no tiene categorías creadas?
export const EmptyState: Story = {
  args: {
    categories: [],
    activeCategoryId: '',
  },
};

// Estado 3: Simulación interactiva de navegación
export const InteractiveNavigation: Story = {
  render: (args) => {
    const [activeId, setActiveId] = useState('1');
    
    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <TaskSidebar
          {...args}
          categories={mockCategories}
          activeCategoryId={activeId}
          onSelectCategory={(id) => {
            setActiveId(id);
            args.onSelectCategory(id);
          }}
        />
        <main style={{ padding: '20px', color: 'white', background: '#1a1a1a', flex: 1 }}>
          <h2>Contenido de la categoría seleccionada: {activeId}</h2>
        </main>
      </div>
    );
  },
};
```


2. Aprendizajes

Control absoluto de los "Edge Cases" (Casos límite):

`Historia EmptyState`:
Poder ver cómo reacciona el diseño
cuando la lista está vacía sin tener que borrar tu base de datos real
es una ventaja competitiva
permite diseñar el cartel de "No hay categorías creadas aún" con total comodidad
asegurándote de que no se rompan las proporciones de la barra lateral

`layout fullscreen`:
Al agregar layout: 'fullscreen' en params
quitamos el margen acolchonado que Storybook le pone por defecto a los componentes
Así, el Sidebar se pega al borde izquierdo de la pantalla
##### comportándose exactamente igual a cómo se vería en el monitor del usuario final


### Testing automatizado con el Test Runner



## 6. Compilar y desplegar


### Compilación Estática

#### !!! Transformamos todo nuestro entorno de desarrollo en un producto terminado
##### ligero y listo para ser consumido por cualquiera en internet
##### !!! sin necesidad de que tengan Node.js o Vite corriendo en sus computadoras

1. Comando de Compilación

En terminal, en raíz (sin que este corriendo el servidor de desarrollo de storybook)
##### ejecutar el script de build que se agregó automáticamente a tu package.json`

`npm run build-storybook`
En las versiones más recientes de Storybook,
este script simplemente ejecuta `storybook build` por detrás


2. Build
Storybook despierta a su compilador
en este caso usa el motor ultraveloz de Vite

Vite empieza a escanear tu proyecto de la siguiente manera

1. Busca tu archivo .storybook/main.ts
para saber qué carpetas mirar.

2. Rastrea absolutamente todos tus archivos 
stories.tsx (y .stories.mdx si tuvieras

3. Sigue los hilos de las importaciones:
analiza tus átomos, moléculas, organismos, tu theme.ts y tus GlobalStyles.ts.

4. Empaquetado (Bundling):
Traduce todo ese código TypeScript
JSX y las funciones de simulación de React a JavaScript clásico (ES5/ES6)
CSS optimizado que cualquier navegador del planeta (Chrome, Safari, Firefox) pueda entender de forma nativa.


3. Resultado: en la carpeta `storybook-static/`

La terminal dice "Success"
notar que apareció una carpeta nueva en la raíz de tu proyecto llamada storybook-static/.

##### Vas a ver que es una página web común y corriente

`index.html`: La entrada principal
estructura de la interfaz de Storybook
la barra lateral, los paneles inferiores, el menú oscuro/claro

`iframe.html`: Laboratorio
lienzo aislado donde se renderizan tus componentes reales
sin que interfieran con la interfaz exterior.

`assets/`:
carpeta llena de archivos .js y .css minificados
(comprimidos al máximo para que pesen lo menos posible)
contienen la lógica de tus componentes y de la Today App.

`sb-common-assets/ y otros`:
Fuentes internas e íconos que usa Storybook para verse lindo


Poder para el portfolio:

1. Cero costo de servidor:
Al ser archivos estáticos puros (HTML, CSS, JS)
no necesitás pagar un servidor en la nube que corra Node.js las 24 horas
Lo podés alojar en servicios gratuitos que sirven archivos estáticos a la velocidad de la luz

2. Independencia absoluta:
Tu Storybook estático no necesita estar conectado a tu aplicación principal para funcionar
Podés mandar el link de esa carpeta a un reclutador
va a poder interactuar con tu Checkbox o tu TaskSidebar de forma ultraveloz sin clonar nada en su computadora

3. Documentación viva: 
Si mañana actualizás el diseño de un componente
y volvés a compilar, la documentación se actualiza sola.



### Deploy en url pública


#### Github Pages

##### automatizar esto usando la terminal con una herramienta clásica llamada gh-pages.

1. Instalar el paquete gh-pages
Instalación en modo desarrollo

En la raíz
comando para instalar la herramienta
se va a encargar de crear una rama oculta en tu repositorio
y subir los archivos compilados

`npm install gh-pages --save-dev`


2. scripts de automatización
Modificar package.json

Abrí tu archivo package.json y, dentro de la sección de "scripts"
agrega estas dos líneas nuevas al final

##### Esto conecta la fase de compilación que vimos recién con la fase de subida

```
"scripts": {
  "predeploy": "npm run build-storybook",
  "deploy": "gh-pages -d storybook-static"
}
```

Cuando ejecutes el comando de despliegue, "predeploy"
se va a ejecutar solo primero para borrar la carpeta vieja
y compilar el Storybook más fresco

Después, "deploy" va a agarrar la carpeta storybook-static
y la va a mandar a GitHub


3. Repo en GitHub
Subida inicial

##### Antes de lanzar el despliegue, asegurate de tener todos tus cambios actuales commiteados y subidos a tu repositorio principal de GitHub

verificarlo tirando un rápido

```
git push origin main
```


4. Comando de despliegue
Lanzamiento a la web

Ejecutá el comando

```
npm run deploy
```

La terminal va a compilar todo (vas a ver el proceso de Vite)
) y al final va a decir "Published".

Por detrás, el paquete creó una rama llamada gh-pages
en tu GitHub y subió solo los archivos estáticos ahí.


5. Activar GitHub Pages en tu repositorio
Configuración final en la web

Tu cuenta de GitHub en el navegador
entrá al repositorio de tu proyecto y seguí estos tres clics:

1. Hacé clic en la pestaña Settings (Configuración) arriba a la derecha.
2. En el menú lateral izquierdo, buscá la sección Pages.
3. En el apartado Build and deployment:
asegurate de que la fuente sea "Deploy from a branch"
y que la rama (Branch) seleccionada sea gh-pages
(en la carpeta /root)
Dale a Save.

GitHub va a tardar entre 1 y 2 minutos en procesar los archivos por primera vez
Arriba de todo en esa misma pantalla de Settings -> Pages
te va a aparecer un cartel verde con tu link público oficial

va a tener una estructura parecida:
`[https://tu-usuario-github.github.io/tu-nombre-de-repositorio/](https://tu-usuario-github.github.io/tu-nombre-de-repositorio/)`

##### Detalle técnico clave: GitHub Pages aloja tu proyecto en una subcarpeta
con el nombre de tu repositorio al final
las rutas relativas que genera Storybook por defecto en su versión moderna van a encajar a la perfección
sin que tengas que configurar ningún "base path" raro en tus archivos de configuración

#### A partir de ahora, cada vez que crees un componente nuevo o mejores el diseño
##### solo tenés que tirar npm run deploy
en tu terminal y tu catálogo público se va a actualizar solo en minutos



#### Vercel

##### En Vercel no necesitás compilar nada en tu computadora ni instalar paquetes extra como gh-pages.
##### Vercel se conecta directamente a tu repositorio de GitHub
##### cada vez que hacés un git push a tu rama principal
##### sus servidores detectan el cambio, compilan tu Storybook en la nube y lo actualizan en

Es el estándar de la industria actual para flujos de Integración Continua (CI/CD).

Despliegue Automatizado en Vercel:

1. Conectar tu cuenta de GitHub
Paso inicial en la nube

Cuenta gratuita de vercel.com
opción de registrarte usando tu cuenta de GitHub
##### Esto le da permisos a Vercel para leer tus repositorios.


2. Importar repo
Selección de proyecto

En el panel principal de Vercel
hacé clic en el botón "Add New..." y luego en "Project".
Vas a ver una lista con tus repositorios de GitHub
Buscá el de tu Today App y hacé clic en "Import".


3. Configurar comandos de Storybook
crucial

Antes de hacer clic en Deploy
##### desplegá la sección llamada "Build and Output Settings".
Vercel por defecto va a intentar compilar tu aplicación de React normal
Para decirle que mapee tu Storybook
##### tenés que cambiar la configuración para que quede exactamente así:

Framework Preset:
Elegí `Other` (o dejalo en `Vite`
si lo detecta, pero desactivando los comandos automáticos).

Build Command:
Activá el `interruptor (override)` y escribí:
`npm run build-storybook`

Output Directory:
Activá el `interruptor` y escribí:
`storybook-static`


4. Deploy

Con esos dos campos cambiados: click en deploy
##### Vercel va a clonar tu repositorio en sus servidores
##### va a instalar las dependencias de Node de forma oculta
##### y va a correr el proceso de compilación estática.


Lo siguiente:
la pantalla va a tirar papelitos digitales
te va a dar una URL pública gratuita

`tu-proyecto.vercel.app`

`Automatización total`:
Te olvidás de los comandos de la terminal
creás tus historias, hacés git commit -m "nuevo atomo" y git push
Vercel se encarga del resto en segundo plano

`Production Ready`:
##### Las URLs de Vercel suelen cargar un pelín más rápido que las de GitHub Pages
##### gracias a su red de distribución global (CDN) optimizada.


Portfolio:
##### Si en el mismo repositorio tenés tu aplicación de React y tu Storybook
##### podés crear dos proyectos separados en Vercel apuntando al mismo repositorio de GitHub

##### A uno lo configurás con los comandos normales de Vite para que despliegue la app
##### al otro le ponés estos comandos de Storybook
##### Así tenés dos links profesionales




#### Netlify

Como vercel, velocidad y simplicidad

##### Netlify se conecta a tu GitHub y automatiza todo el flujo:
##### detecta tu git push, compila en la nube y actualiza tu URL pública

El proceso es casi idéntico
solo cambian un par de nombres en los casilleros de configuración

1. Cuenta
registrate o iniciá sesión usando tu cuenta de GitHub
De esta forma, Netlify tendrá acceso seguro a tus repositorios públicos y privados

2. Importar un nuevo sitio desde Git
Selección del origen

En tu panel principal (Dashboard)
hacé clic en el botón "Add new site"
seleccioná la opción "Import an existing project".
En la lista de proveedores de Git, elegí GitHub
seleccioná el repositorio de tu app.

3. Comandos del System Build
Configuración crítica

Netlify va a escanear tu proyecto
Desplazá la pantalla hacia abajo hasta la sección llamada "Build settings"
(Configuración de compilación) y completá los casilleros exactamente con estos datos

`Build command`:
npm run build-storybook

`Publish directory`:
storybook-static

Asegurate de borrar cualquier comando automático que Netlify intente adivinar por defecto
como npm run build o la carpeta dist, para que se enfoque solo en Storybook)


4. Despliegue

Clic en botón ''Deploy projectX'
que está al final de la página
##### Netlify va a levantar un servidor en segundo plano
##### instalará tus dependencias y compilará la carpeta estática.


Netfily y portfolio:

`Cambiar el nombre de la URL`:
Netlify te va a asignar un subdominio aleatorio bastante feo
(algo como magnificent-unicorn-12345.netlify.app).

Podés cambiarlo:
Site configuration -> Site details -> Change site name
ponerle algo profesional como tu-nombre-storybook.netlify.app totalmente gratis

Deploys de previsualización (Deploy Previews):
Si en el futuro trabajás con ramas de Git (por ejemplo, creás una rama feature/nueva-tarea)
cada vez que subas esa rama o abras un Pull Request
Netlify te va a generar una URL temporal única para esa rama
Esto te permite testear cómo se ve un componente nuevo en la nube
antes de fusionarlo con tu rama principal.



# Ecosistema de hosting estático y JAMstack

Fuera de GitHub Pages, Vercel y Netlify

1. Cloudflare Pages:
maneja una de las redes de servidores más grandes del planeta
Su servicio de Pages es un rival directo de Vercel y Netlify con una ventaja brutal
su plan gratuito incluye ancho de banda e integraciones de Git ilimitadas

funciona: Te logueás con GitHub
seleccionás el repositorio
y en la configuración de build ponés los mismos datos de siempre
npm run build-storybook y storybook-static.

Ideal para: Rendimiento extremo
Al estar montado sobre la CDN de Cloudflare
tu Storybook va a cargar de forma instantánea desde cualquier rincón del mundo


2. Surge.sh: para terminal

saltearte por completo las interfaces web
las cuentas en plataformas pesadas y los clics

Surge es la definición de minimalismo
##### servicio de hosting estático que se maneja 100% desde la consola

funciona: Compilás tu Storybook localmente con npm run build-storybook
Después, instalás su CLI y lo subís con dos comandos:

```
npm install -g surge
surge storybook-static/
```

La primera vez te pide un mail y una contraseña ahí mismo en la terminal
te genera una URL aleatoria (que podés editar) y listo.
Tu proyecto ya está en vivo

Ideal para: Flujos de trabajo ligeros y minimalistas
directo desde tu entorno Linux sin intermediarios


3. Render.com: alternativa moderna a Heroku

Se volvió hiperpopular para desplegar aplicaciones Full Stack (Node, Python, Go, bases de datos),
pero tiene una sección excelente y gratuita para Static Sites.

Se conecta a tu GitHub igual que Vercel
Detecta los cambios automáticamente
compila en la nube usando tus scripts de Storybook.

Ideal para: Si a futuro pensás expandir tu portfolio con aplicaciones que requieran un backend real en Python o Node
tener todo centralizado en el mismo panel de Render es comodísimo


4. Firebase Hosting
plataforma de infraestructura para desarrolladores de Google

requiere un par de pasos extra de configuración en tu máquina
una de las opciones más sólidas y profesionales del mercado.

funciona: Instalás las firebase-tools
iniciás sesión desde la consola y ejecutás firebase init
Te va a armar un archivo de configuración en tu proyecto
donde le indicás que tu carpeta pública es storybook-static
Para subir cambios, tirás firebase deploy.

Ideal para: Sumar "Experiencia en herramientas de Google Cloud / Firebase"
algo que muchas empresas valoran positivamente.



# 3. Build: Production Build Check

Optimización y limpieza del código

Ejecutar `npm run build` en tu entorno local para confirmar que TypeScript
no tire ningún error estricto de tipado de último momento en los archivos de compilación

Toca empaquetar la Today App real para que los usuarios puedan usarla

##### Entender qué hacemos y qué diferencia hay entre el entorno de desarrollo y uno de producción

Como se comporta 'Production Build Check' por detrás

1. Modo Desarrollo: npm run dev: una mentira
Mientras construías tu app con Vite
todo cargaba a la velocidad de la luz
Si cometías un error menor de tipado, a veces la app seguía corriendo igual en el navegador

Por qué?

#### Vite en Desarrollo:
Prioriza la velocidad
##### Transpila tu código TypeScript a JavaScript quitando los tipos "a lo bruto"
##### sin verificar si son 100% correctos, para que veas los cambios al instante

#### Vite en Producción (build):
Se terminan las contemplaciones
Antes de armar los archivos finales
##### Vite despierta al compilador oficial de TypeScript (tsc)
##### le pide una auditoría estricta de todo tu proyecto
##### Si encuentra una sola inconsistencia, frena el proceso y no te deja compilar


2. Proceso de Auditoría

Cuando lancemos el proceso de compilación
##### el sistema va a ejecutar un flujo en cadena de tres pasos invisibles

```
[Tu Código Source] ──>
[TypeScript Check (tsc)] ──>
[Vite Bundler] ──>
[Carpeta dist/]
```

1. `Type-Checking (tsc --noEmit)`:
#### TypeScript va a leer cada archivo de tu carpeta src/.
##### Va a revisar que las props que definimos en los átomos coincidan con lo que mandamos en los organismos
##### que no haya variables muertas y que ninguna interfaz esté rota

2. `Minificación y Compresión`:
#### Si el chequeo pasa en limpio, Vite toma el control
##### Agarra tus Styled Components, tus componentes de React y tus lógica en TypeScript
##### remueve comentarios
##### acorta nombres de variables y comprime todo en archivos JS y CSS ultra ligeros

3. `Generación de la carpeta dist/`:
#### El resultado final caerá en una carpeta llamada dist/ (distribution)
que es el equivalente a la carpeta storybook-static que armamos antes
pero para tu aplicación real.


3. Puntos de Dolor a tener en cuenta

#### Cuando un proyecto pasa por su primer build estricto
##### es totalmente normal que salten errores

TypeScript cuida que tu app no se rompa en producción

#### Los errores más comunes que vamos a salir a cazar son:

#### 1. Imports huerfanos: Dejaste un import { useState } from 'react'
en un archivo donde al final no usaste ningún estado
##### En desarrollo no pasa nada, pero en producción salta como advertencia o error

#### 2. Props faltantes o mal tipadas: Cambiaste la interfaz de un componente
a mitad de camino y te olvidaste de actualizar el componente padre que lo llamaba

#### 3. any: Si tenés configurado TypeScript de forma estricta 
usar any en algún parámetro puede hacer que el build explote.


Poder garantizar que tu código pasa un npm run build
con las reglas estrictas de TypeScript activadas (strict: true en tu tsconfig.json)
demuestra que escribís código sólido


## Comandos Build y configs

1. Comandos

dos comandos que ya vienen preparados en tu package.json

`npm run build`:
comando principal
Despierta al compilador de TypeScript para auditar los archivos
luego a Vite para empaquetar todo
Si todo sale bien, te genera la carpeta dist/.

`npm run preview`
comando es clave
No sirve para compilar, sino para probar localmente el resultado del build
Levanta un servidor web local superligero que sirve los archivos reales de la carpeta dist/.


2. Configs a revisar

en `package.json`:

sección de "scripts
script de "build".

Debería decir algo como "build": "tsc && vite build"
(o tsc -b && vite build).

tsc al principio es el comando de TypeScript
significa que tu proyecto efectivamente va a exigir que no haya errores de tipado para poder compilar


`tsconfig.json` o `tsconfig.app.json`:
qué tan estricto se va a poner TypeScript durante el build
banderas dentro de `compilerOptions`:

`strict: true`:
modo Dios de TypeScript
Activa todas las verificaciones estrictas
Si está en true, va a tener un estándar de calidad altísimo.

`noUnusedLocals` y `noUnusedParameters`:
Si estas reglas están en true, el build va a fallar
si dejaste alguna variable o importación colgada que declaraste
pero nunca usaste en el código
clásico error que en desarrollo pasa de largo pero en producción traba todo


## npm run preview vs npm run build

Si intentás correr npm run preview sin build
la consola te va a tirar un error (o va a leer una versión vieja de tu código)
##### porque todavía no existe la carpeta con los archivos terminados.

npm run build es cocinar
npm run preview es probarlo

`npm run build`:
TypeScript para auditar tu código
Vite para comprimir todo
Si todo está en orden con tus tipos y componentes
va a crear una carpeta fresca llamada dist/ en tu proyecto
con el código de producción

`npm run preview`:
Lo ejecutamos recién cuando el paso 1 haya terminado con éxito
cuando la terminal te diga que el build fue exitoso
##### Abre un servidor web local que apunta directamente adentro de esa carpeta dist/ recién creada
resultado: Te da un link para que entres desde tu navegador a testear la Today App
tal cual como la vería un usuario en internet.


npm run build:

Pantalla Verde/Limpia:
Vite te muestra un desglose de cuánto pesan tus archivos .js y .css
te dice que terminó con éxito.

Pantalla Roja (Errores de TypeScript):
El compilador frena el build y te dice exactamente en qué línea
y archivo hay una incoherencia de tipos.



## Chequeo de errores del compilador

Comando:

```
npx tsc --noEmit
```

npx ejecuta herramientas de node
tsc: lanza el compilador
--noEmit: audita y muestra errores sin generar archivo/carpeta

package.json en scripts:

```
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview",
  "check": "tsc --noEmit" 
}
```




# Deploy en producción

En el desarrollo profesional con Git y plataformas modernas (como Vercel o Netlify)
el despliegue no es un proceso manual de subir archivos por FTP
es un flujo automatizado (CI/CD).


1. Rama de Producción: main
Antes de conectar cualquier servicio en la nube
tu arquitectura local tiene que estar ordenada.

`main`:
debe contener la versión exacta, testeada y estable que querés que vea el mundo

`desarrollo previo`:
de la rama de desarrollo ya debe estar fusionado ahí
La nube va a tomar a main como la verdad absoluta para los usuarios reales


2. Puente: repo remoto
Las plataformas miran la nube.

`Crear un repositorio vacío`:
en tu cuenta de GitHub (o GitLab).

`Repo como intermediario automatizado`:
Tu único trabajo a partir de ahí será enviar tu código local a ese servidor remoto


3. Vinculación y Permisos de la Plataforma
OAuth

elijas Vercel o Netlify
el proceso de inicio de sesión se realiza idealmente a través de tu cuenta de GitHub

`Otorgás un permiso seguro a la plataforma`:
para que pueda "escuchar" lo que pasa en tu repositorio

`Es el núcleo de la Integración Continua (CI)`:
la plataforma se queda esperando pacientemente a que haya novedades


4. Definición del "Contrato de Construcción":
Build Settings

Cuando importás tu proyecto en Vercel o Netlify
La plataforma detectará automáticamente que estás usando Vite y React

Hay que verificar tres parámetros clave en su interfaz web

`Command (Comando de compilación)`:
Le indicamos a la plataforma que ejecute exactamente el mismo comando que usás localmente para compilar
npm run build

`Output Directory (Carpeta de salida)`:
Le especificamos que el resultado final estará en la carpeta dist
El servidor web de producción solo servirá lo que esté dentro de esa carpeta

`Rama Raíz`:
Le indicamos que apunte explícitamente a tu rama main para el despliegue de producción


5. Disparador Automatizado (Despliegue Continuo - CD)
Una vez configurado, el flujo se vuelve completamente automático y ocurre la magia del CI/CD

Cada vez que realices cambios y los envíes a la rama main en GitHub,
la plataforma interceptará el evento

En sus propios servidores, de forma aislada
instalará las dependencias, ejecutará el build
y, si todo tiene éxito, actualizará tu URL pública en cuestión de segundos


El poder en las ramas en la nube:
En este flujo es que si en el futuro subís cambios a tu otra rama (developer)
Vercel o Netlify lo detectarán y crearán una `Preview Deployment`
URL de prueba temporal
Va a permitir ver cómo quedan tus nuevas funciones en internet
antes de aprobarlas y pasarlas a la rama main


## Repo remoto

1. Entrá a tu cuenta de GitHub
clic en el botón "New" (Nuevo repositorio)

Repository name:
nombre representativo
Ej: today-app

Public / Private:
Public: reclutadores y otros desarrolladores necesitan poder ver tu código fuente.

Donde dice "Initialize this repository with..."
no marques ninguna casilla
Dejá desmarcadas las opciones de Add a README file, Add .gitignore y Choose a license.

proyecto local ya tiene su propio historial, su .gitignore y sus archivos
Si creás un repositorio con un README en la nube
Git va a detectar que los historiales son completamente distintos y te va a bloquear el primer envío
##### Necesitamos que el repositorio remoto nazca 100% vacío


2. Vincular tu terminal local con el servidor remoto

Al crear el repositorio vacío
la plataforma te va a mostrar una pantalla con varias URLs
Buscá la que dice HTTPS (o SSH si tenés configuradas tus llaves) y copiala

Debería verse algo así:
`[https://github.com/tu-usuario/today-app.git](https://github.com/tu-usuario/today-app.git)`.

abrí tu terminal dentro de la carpeta del proyecto
`(~/todoapp`
Ejecutar los comandos

1. En la rama de producción:
`git switch main`

2. Crear el puente (Remote):
El comando le dice a tu Git local que a partir de ahora existe
un servidor remoto en internet llamado origin apuntando a esa URL

`git remote add origin https://github.com/tu-usuario/today-app.git`

3. Verificar puente
Que el enlace se hizo bien
`git remote -v`

dos líneas (una para fetch y otra para push)
mostrando la URL de tu repositorio


3. Subir código
##### Con el puente enviamos todo tu historial local a la nube

1. Subir rama principal (main)
`git push -u origin main`

##### -u: Establece una relación de seguimiento (upstream).
Le dice a tu computadora que, de ahora en más
cada vez que estés en la rama `main` y quieras subir o bajar cambios
te va a alcanzar con escribir simplemente `git push` o `git pull`
sin tener que especificar `origin main` todo el tiempo

2. Subir rama de desarrollo (developer)
flujo ordenado con una rama de desarrollo
##### excelente práctica subirla también para que tu portfolio refleje cómo trabajás en el día a día

```
git switch developer
git push -u origin developer
```

Si refrescás la página de GitHub en tu navegador, vas a ver toda la estructura de carpetas de tu aplicación desplegada con su historial de commits intacto
El código ya está seguro en la nube, y ambas ramas están sincronizadas
##### El puente para el despliegue automático quedó completamente listo



# Readme: conceptos/estructura

Carta de presentación de tu software
reclutador o un colega desarrollador
lo primero que va a leer

crearlo ahora de forma local en tu rama de desarrollo, commitearlo
pasarlo a la rama principal y subirlo te va a servir como una práctica espectacular para fijar el flujo de Git que acabamos de armar

Un buen README no necesita ser una enciclopedia
sino un documento directo, ordenado y estratégico.

1. Título e Introducción Impactante

Nombre: El título del proyecto en la cabecera

Elevador Pitch:
Una o dos oraciones cortas que expliquen qué es la aplicación
qué problema resuelve y a quién va dirigida

Evitá descripciones genéricas como "proyecto para practicar"; vendelo como un producto real

2. Acceso Directo (La Demo)

Enlace en Vivo:
Un botón o enlace destacado que lleve directamente a la aplicación web ya desplegada en internet
Los reclutadores suelen tener poco tiempo
si pueden hacer clic y probar la app de inmediato
ganás muchísimos puntos

3. Características Principales (Features)

Valor Agregado:
Una lista con viñetas de las funciones más importantes que programaste
por ejemplo: persistencia de datos, filtros avanzados
animaciones de interfaz, atajos de teclado, o soporte para modos visuales

4. Stack Tecnológico

Herramientas Utilizadas:
Una lista organizada de los lenguajes
librerías principales, empaquetadores y herramientas de estilos
que componen la arquitectura de la aplicación

Justificación Breve:
No solo listes los nombres
si hay alguna tecnología clave
##### se valora mucho que menciones por qué la elegiste

5. Arquitectura y Decisiones de Diseño

Separación de Concernimientos:
Explicá brevemente cómo organizaste la estructura de carpetas del proyecto
y qué patrones de diseño o principios arquitectónicos aplicaste
para que el código sea limpio, escalable y mantenible

Esto demuestra que no solo tirás código que funciona
sino que pensás la solución antes de escribirla.

6. Guía de Instalación y Configuración Local

Prerrequisitos:
Qué herramientas básicas necesita tener instaladas otra persona en su computadora
para correr tu proyecto
(como el entorno de ejecución o el gestor de paquetes)

Paso a Paso:
Los pasos lógicos explicados textualmente para clonar el repositorio
instalar las dependencias necesarias y levantar el servidor de desarrollo local

7. Suite de Pruebas (Testing)

Estrategia de Calidad:
Una breve mención sobre cómo implementaste las pruebas en el proyecto
(pruebas unitarias, de componentes, etc.)
la explicación de cómo cualquier otra persona puede ejecutar esas pruebas localmente
para verificar que todo funcione de forma correcta.



## Formateo de estructura

La industria del software adoptó ciertas convenciones de formato utilizando Markdown

##### La clave es combinar jerarquía visual, elementos gráficos discretos y estructuras que diferencien el texto narrativo de las instrucciones operativas

1. Título e Introducción

Jerarquía Superior (H1):
nombre del proyecto va en el tamaño de fuente más grande disponible en la parte superior

Badges Visuales (Escudos):
Justo debajo del título, se estila colocar una línea de "badges" dinámicos
(pequeñas etiquetas gráficas de colores)
que muestran el stack principal, el estado del build o la cobertura de tests
Esto da un impacto visual inmediato antes de leer la primera palabra

Párrafo Limpio:
La introducción va en texto plano
sin decoraciones, ocupando no más de tres líneas

2. Acceso Directo: Demo

Bloques de Cita (Blockquotes):
Para que el enlace no se pierda en el texto
se lo encierra en un bloque destacado (una línea vertical al costado).

Negrita y Emojis:
Se acompaña con un emoji de un enlace o una pantalla
texto en negrita para obligar al ojo del lector a frenar ahí.

3. Características Principales (Features)

Subencabezados (H2): Para abrir la sección de forma clara

Listas con Viñetas (Bullet Points): Cada funcionalidad debe ser un ítem independiente

Negrita de Impacto Inicial: El truco profesional aquí es poner en negrita las primeras dos o tres palabras de la viñeta
(el concepto técnico) y luego continuar con el texto normal
Esto permite una lectura escaneada súper veloz

4. Stack Tecnológico

Tablas de Markdown:
los proyectos profesionales suelen usar una tabla con columnas bien definidas
ejemplo: una columna para la Categoría (Fronend, Testing, Estilos)
y otra para las Tecnologías utilizadas
Esto demuestra orden y estructura mental.

5. Arquitectura y Estructura de Carpetas

Bloques de Código de Texto Plano:
Para mostrar cómo organizaste tu código
se suele dibujar un "árbol de directorios"
visual simplificado utilizando caracteres de texto dentro de un bloque gris monolítico
Esto separa tu explicación teórica de la representación visual de tu arquitectura
(así se nota a primera vista tu separación de componentes, hooks, contextos, etc.).

6. Instalación, Configuración y Testing

Listas Numeradas:
A diferencia de las características, los procesos de configuración son secuenciales
Se usan números estrictos para indicar el orden cronológico de los pasos

Bloques de Código de Consola:
Cada vez que el usuario tenga que ejecutar una acción en su terminal
esa instrucción debe ir aislada en un bloque de código oscuro de una sola línea
El texto explica el "qué" y el bloque de código contiene el "cómo" listo para ser copiado y pegado con un clic.


Regla:
uso de emojis moderados al inicio de cada encabezado secundario (H2
rompe la monotonía del fondo blanco o negro de GitHub
actúa como ancla visual para organizar la lectura de arriba hacia abajo


## 1. Título e introducción

```
# 🎯 Today App

[![React](https://img.shields.io/badge/React-19.0-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff?style=flat-square&logo=vite)](https://vite.dev/)

Una aplicación web de productividad minimalista diseñada para optimizar la gestión de tareas diarias mediante una interfaz fluida, un motor de rendimiento ligero y persistencia de datos local confiable. El proyecto fue desarrollado bajo un enfoque estricto en la separación de responsabilidades y principios de arquitectura limpia para garantizar un código altamente escalable y mantenible.
```

`Jerarquía Superior (H1)`: Usamos un único símbolo # acompañado de un emoji sutil
Esto crea un encabezado limpio y de máximo tamaño que define la identidad del repositorio al instante

`Badges Visuales (Escudos)`: En lugar de gastar líneas de texto listando tecnologías
usamos las imágenes dinámicas de img.shields.io con la opción ?style=flat-square
Esto le da un aspecto plano, moderno y corporativo
transmitiendo tu stack tecnológico principal en un milisegundo de forma ultra escaneable

`Párrafo Limpio`: Cambiamos el clásico enfoque de principiante
("Este es mi proyecto para practicar" o "Hice esta app para aprender")
por una descripción orientada a producto
Usar conceptos técnicos clave como separación de responsabilidades arquitectura limpia y escalabilidad
le demuestra a cualquier equipo de tecnología que entendés los estándares de la industria
y que programás con criterio profesional.



## 2. Acceso Directo: demo

Para esta sección la clave es la brevedad extrema
Un reclutador no quiere leer un párrafo largo
para encontrar el botón de probar la app
quiere ver el enlace parpadeando frente a sus ojos

Usando la estructura
Bloque de cita, negritas y emojis

```
## 💻 Demo en Vivo

> 🚀 **¡Probá la aplicación en tiempo real!** Podés interactuar con el producto final desplegado en producción haciendo clic en el siguiente enlace: **[today-app.vercel.app](https://tu-url-de-despliegue.vercel.app)**
```


Encabezado (H2):
Usamos ## para abrir una sección secundaria clara
El emoji de la computadora da la pauta de que entramos a la sección interactiva.

Bloque de Cita (>):
Al encerrar la línea con el símbolo >, GitHub le mete un fondo gris sutil
y una barra vertical azul o gris a la izquierda
Esto aísla el texto del resto del documento, convirtiéndolo en un imán para los ojos

Negrita y Emojis de Acción:
El cohete y la frase en negrita funcionan como un llamado a la acción (CTA) de nivel profesional.

Enlace Camuflado:
En lugar de pegar la URL cruda y fea (como [https://today-app-98723.vercel.app](https://today-app-98723.vercel.app)), usamos
formato de Markdown [texto](url) para que el enlace se vea limpio, estético y simule un dominio propio impecable



## 3. Características Principales (Features)

##### los reclutadores técnicos suelen buscar palabras específicas
palabras clave o keywords
##### para evaluar tu nivel técnico de un solo vistazo.

aplicando la estructura:
el bloque para tu aplicación queda redactado de una forma muy profesional

```
## 🌟 Características Principales

* **Arquitectura de Estado Predictible:** Implementación de un flujo de datos centralizado mediante `useReducer` y `Context API` para garantizar la consistencia del estado global sin comprometer el rendimiento.
* **Componentes Modulares y Estilizados:** Interfaz minimalista construida íntegramente con `Styled Components`, asegurando un aislamiento absoluto de estilos y un diseño altamente responsivo.
* **Búsqueda y Filtrado Dinámico:** Sistema de consultas ágil en tiempo real integrado en la interfaz para segmentar y localizar tareas de forma inmediata.
* **Persistencia de Datos Local:** Almacenamiento e integración nativa con el almacenamiento del navegador para salvaguardar la información del usuario de manera fluida entre sesiones.
* **Navegación Fluida:** Distribución ergonómica de paneles mediante una barra lateral dedicada (`TaskSidebar`) que optimiza el espacio de trabajo en pantalla.
```


Negrita de Impacto Inicial:
Si te fijás bien, un lector puede simplemente bajar los ojos verticalmente leyendo solo las negritas
("Arquitectura de Estado...", "Componentes Modulares...", "Búsqueda y Filtrado...")
e interpretar perfectamente la complejidad del proyecto en menos de 3 segundos

### !!! Vocabulario de Nivel Senior:
En lugar de escribir "Usa Context para que ande bien" u "Organicé los botones en un costado"
el formato utiliza términos formales de ingeniería de software como flujo de datos centralizado
aislamiento absoluto de estilos y distribución ergonómica
Eso demuestra un criterio de desarrollo maduro.



## 4. Stack Tecnológico: Tablas de Markdown

##### Cuadro comparativo que transmite madurez técnica, organización y claridad absoluta

Para presentar las herramientas principales de tu stack moderno
cuales incluyen React, Vite, TypeScript y soluciones CSS-in-JS como Styled Components
##### el formato estructurado de una tabla le permite a cualquier evaluador entender la arquitectura de tu aplicación en un segundo

```
## 🛠️ Stack Tecnológico

| Categoría | Tecnología | Propósito / Justificación |
| :--- | :--- | :--- |
| **Core Frontend** | React | Construcción de una interfaz de usuario declarativa, eficiente y basada en componentes modulares. |
| **Lenguaje** | TypeScript | Implementación de tipado estricto para garantizar la robustez del código y prevenir errores en desarrollo. |
| **Empaquetador** | Vite | Entorno de desarrollo ultra veloz, hot-reload inmediato y optimización avanzada del build de producción. |
| **Estilos** | Styled Components | Estilos encapsulados a nivel de componente (CSS-in-JS), facilitando el mantenimiento y evitando colisiones globales. |
| **Entorno de Pruebas** | Vitest | Suite de testing moderna y de alto rendimiento, totalmente integrada con la configuración nativa del empaquetador. |
```

Alineación Justificada (:---):
Al colocar los dos puntos a la izquierda en la segunda línea del código de la tabla
forzamos a que todo el texto de las celdas se alinee perfectamente hacia la izquierda
Esto facilita muchísimo la lectura vertical en pantallas de cualquier tamaño

Columna de "Propósito / Justificación":
Este es el toque clave para diferenciarte
Muchos desarrolladores principiantes solo listan los nombres de las tecnologías
Al añadir una columna que explica por qué se usó cada herramienta
(por ejemplo, destacar el tipado estricto de TypeScript o el encapsulamiento de Styled Components)
le demostrás al reclutador que elegís tus herramientas con criterio de ingeniería y no por moda



## 5. Arquitectura y Decisiones de Diseño

Separación de Concernimientos:
Explicá brevemente cómo organizaste la estructura de carpetas del proyecto
y qué patrones de diseño o principios arquitectónicos aplicaste
para que el código sea limpio, escalable y mantenible

Esto demuestra que no solo tirás código que funciona
sino que pensás la solución antes de escribirla.


Arquitectura y Estructura de Carpetas:

##### Imán para los líderes técnicos o arquitectos de software que revisen tu portfolio
Mostrar un árbol de directorios limpio y ordenado
planificación de la escalabilidad de una aplicación
evitando el antipatrón de tirar todos los componentes en una sola carpeta gigante

se utiliza un bloque de código de texto plano (```text)
dibuja las ramas del proyecto de forma geométrica y ultra entendible

```
## 🏗️ Arquitectura y Estructura de Carpetas

El proyecto implementa un enfoque modular basado en la separación absoluta de responsabilidades (Separation of Concerns). Los componentes visuales, la lógica de estado global y los esquemas de tipado se encuentran estrictamente desacoplados:

text
src/
├── assets/             # Recursos estáticos (esquemas SVG, iconos, favicon)
├── components/         # Componentes de la interfaz de usuario (UI)
│   ├── common/         # Componentes atómicos reutilizables (Botones, Inputs)
│   └── layout/         # Componentes estructurales de la aplicación
│       └── TaskSidebar/# Panel lateral de tareas encapsulado con sus estilos
├── context/            # Gestión de estado global (Context API + useReducer)
│   ├── TaskContext.tsx # Proveedor de contexto y estado unificado
│   └── taskReducer.ts  # Lógica de transiciones de estado predictible
├── hooks/              # Ganchos personalizados (Custom Hooks) para lógica extraída
├── types/              # Definiciones y contratos de tipos estrictos de TypeScript
├── App.tsx             # Componente raíz y Orquestador de la aplicación
└── main.tsx            # Punto de entrada de la aplicación y renderizado en el DOM
```

Bloque Monolítico en Texto Plano text:
especificarle a Markdown que el bloque es tipo `text`
evitamos que intente colorear las palabras al azar como si fuera JavaScript
Mantiene una fuente monoespaciada gris perfecta
donde cada espacio cuenta para dibujar las ramas (`├──`, `│`, `└──`).

Comentarios Alineados (`#`):
Colocar comentarios breves a la derecha de cada directorio clave
explica al evaluador el `rol` de cada carpeta

Demostración de Encapsulamiento:
Al mostrar explícitamente que TaskSidebar es una carpeta autónoma
donde pondrás su lógica y sus estilos es saber rechazar otras opciones atractivas para mantener el enfoque lineal.



## 6. Instalación, Configuración y Testing

Puramente operativa y sumamente importante
garantiza que cualquier otro desarrollador
##### o un líder técnico que quiera evaluar tu código en su máquina
##### pueda clonar tu proyecto y levantarlo en cuestión de segundos sin adivinar qué comandos usar

Para reflejar un proceso secuencial y ordenado, combinamos listas numeradas
para establecer la línea de tiempo del proceso
con bloques de código de consola aislados
para que las instrucciones de la terminal queden listas para copiar y pegar

```
## 🚀 Instalación y Ejecución Local

Para levantar el entorno de desarrollo local y ejecutar la aplicación en tu computadora, seguí estos pasos secuenciales:

1. **Clonar el repositorio:**
   Descargá una copia completa del proyecto a tu máquina local mediante la terminal.
   sh
   git clone [https://github.com/tu-usuario/today-app.git](https://github.com/tu-usuario/today-app.git)
```

1. Acceder al directorio:
Navegá hacia la carpeta raíz donde se encuentra la configuración del proyecto.

```
cd today-app
```

2. Instalar dependencias:
Descargá e instalá todos los paquetes y librerías necesarias especificadas en el archivo de configuración

```
npm install
```

3. Iniciar el servidor de desarrollo
Levantá el servidor local para visualizar y probar la aplicación en tiempo real en tu navegador

```
npm run dev
```


Suite de Pruebas (Testing):

El proyecto cuenta con una cobertura de pruebas automatizadas
para validar la consistencia de la lógica de negocio y las transiciones del estado global.

Ejecutar tests en modo interactivo (Watch Mode):
Ideal para el flujo de trabajo diario mientras modificás el código fuente

```
npm run test
```

Ejecutar tests en modo de producción (CI Run)
Realiza una pasada única y completa de toda la suite de pruebas, ideal para entornos de integración continua

```
npm run test:run
```


Contrato de Bloques:
Especificar `sh` o `bash` en la apertura del bloque de código, resaltado de sintaxis propio de la terminal
El comando se aísla por completo, 
facilitando que el usuario haga doble clic y lo copie

Separación del "Qué" y el "Cómo:
El texto de la lista numerada explica la acción teórica
de manera breve y profesional (el "qué"), 
mientras que la caja oscura representa la ejecución técnica exacta (el "cómo").
Esto evita confusiones o líneas de comando eternas difíciles de asimilar

Mención del Entorno de Pruebas:
Agregar una sección específica para los tests
(Vitest en tu caso) le da un peso tremendo a tu portfolio
Demuestra que considerás el control de calidad
como una parte fundamental del ciclo de vida del software
habilidad altamente valorada en ambientes corporativos



# Vinculación y Permisos de la Plataforma (OAuth)

Ya sea que elijas Vercel o Netlify, el proceso de inicio de sesión se realiza idealmente a través de tu cuenta de GitHub.
Al hacer esto, le otorgás un permiso seguro a la plataforma para que pueda "escuchar" lo que pasa en tu repositorio.

Esto es el núcleo de la Integración Continua (CI):
la plataforma se queda esperando pacientemente a que haya novedades en tu código
    

Crear un pacto digital seguro entre tu cuenta de GitHub y la plataforma de despliegue (Vercel o Netlify).
En lugar de crear un usuario y contraseña nuevos en Vercel, usás tu identidad de GitHub como pasaporte

Bajo el capó, este proceso se divide en tres conceptos clave que hacen que la magia de la automatización funcione de manera segura y profesional

1. OAuth (Autenticación Delegada)
OAuth es un estándar de seguridad de la industria
Cuando hacés clic en "Sign in with GitHub" en Vercel o Netlify, se abre una ventana emergente de GitHub que te pregunta si aceptás el enlace

Seguridad absoluta: Vercel nunca ve ni almacena tu contraseña de GitHub.

La Llave (Token): Al aceptar, GitHub le genera a Vercel un token (una llave digital única y encriptada)
que sirve exclusivamente para que la plataforma pueda entrar a tu cuenta a leer tu código
y que vos podés revocar en cualquier momento desde los ajustes de GitHub

2. Definición del Alcance (Scope)
Durante este apretón de manos, la plataforma te va a preguntar qué nivel de acceso querés otorgarle
La industria ofrece dos caminos

Acceso Total: Le das permiso para ver todos los repositorios de tu cuenta (actuales y futuros)
Es el camino más rápido si vas a subir muchos proyectos de portfolio.

Acceso Seleccionado (Recomendado por seguridad): Podés elegir explícitamente darle acceso únicamente al repositorio de tu aplicación
Si mañana creás otro proyecto, vas a tener que autorizarlo manualmente
Esta granularidad demuestra un excelente criterio de seguridad informática

3. El Sistema de Alertas (Webhooks)
donde nace la Integración Continua (CI).
Al finalizar la vinculación, Vercel instala un Webhook en tu repositorio de GitHub de forma invisible.

Webhook:
GitHub se compromete a llamar a Vercel de inmediato cada vez que ocurra un evento importante en tu repositorio

Práctica:
Una vez que este puente de permisos está construido
tu flujo de trabajo cambia para siempre porque la nube se encarga del trabajo pesado

1. Vos trabajás localmente, hacés tus commits y tirás un git push origin main
2. El código llega a GitHub.
3. GitHub se da cuenta del cambio y, gracias al permiso OAuth, activa el Webhook
4. Vercel se despierta, descarga ese código nuevo usando su llave digital
ejecuta el npm run build en sus propios servidores y actualiza la web de forma automática


## GitHub Pages

Desplegar una aplicación construida con Vite + React + TypeScript
en GitHub Pages requiere un par de pasos extra de configuración en comparación con Vercel o Netlify.

##### Esto se debe a que GitHub Pages está diseñado originalmente para sitios estáticos simples
##### y, por defecto, no sabe cómo compilar un proyecto de Vite ni cómo manejar las rutas de una SPA (Single Page Application).

Como estás trabajando de forma ordenada con Git
##### realiza todo este proceso parado en tu rama developer.

1. Modificar el `base` en vite.config.ts
##### Por defecto, Vite compila el proyecto asumiendo que se va a subir a la raíz de un dominio (ej. tuweb.com).

##### Pero en GitHub Pages, tu web vivirá en una subcarpeta con el nombre de tu repositorio

`https://tu-usuario.github.io/nombre-del-repo/.`

##### !!! Si no le avisás esto a Vite, la página va a quedar en blanco porque no va a encontrar los archivos CSS ni JavaScript

Abrí tu archivo vite.config.ts en la raíz y agregá la propiedad base:

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/nombre-de-tu-repositorio/', // ⚠️ Reemplazá esto por el nombre exacto de tu repo en GitHub
})
```

2. Instalar el paquete de automatización

Para no tener que subir los archivos compilados a mano
##### usamos una librería oficial de la comunidad de Node llamada gh-pages
se encargará de crear una rama oculta en tu GitHub y subir el código limpio ahí.

`npm install gh-pages --save-dev`

3. Configurar los scripts en package.json

archivo `package.json` y buscá la sección de `"scripts"`.
Al final de la lista de comandos, agregá estas dos nuevas líneas

```
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

`predeploy`: Se ejecuta automáticamente antes de subir la web
Se asegura de compilar el código TypeScript y generar la carpeta de producción (dist).

`deploy`: Toma la carpeta dist recién creada y la empuja directamente a GitHub

4. Guardar cambios y ejecutar el despliegue

Ahora que configuraste tu entorno local, es hora de hacer el primer envío

```
# 1. Guardar tus cambios en Git local
git add .
git commit -m "chore: add github pages deployment configuration"

# 2. Subir tus cambios a tu rama remota
git push origin developer

# 3. ¡Ejecutar el despliegue!
npm run deploy
```

##### Al ejecutar npm run deploy: la terminal te va a pedir tus credenciales de GitHub (si no las tenés guardadas) y tras unos segundos verás el mensaje "Published".

5. Activar la rama en GitHub

##### Cuando ejecutaste el comando anterior, la librería creó una nueva rama en tu repositorio remoto llamada gh-pages
##### donde guardó únicamente el código compilado para internet

##### Ahora hay que decirle a GitHub que muestre esa rama:

Entrá a tu repositorio en la web de GitHub.

Andá a la pestaña de ⚙️ Settings (Configuración) en el menú superior.

En la barra lateral izquierda, buscá la sección Pages.

Donde dice Build and deployment -> Source
asegurate de que esté seleccionado "Deploy from a branch".

Abajo, en Branch, cambiá main por gh-pages
(la carpeta dejala en /root) y dale al botón Save (Guardar).


Aplicación en vivo: 
En la parte superior de esa misma pantalla de Settings -> Pages
GitHub te va a mostrar un recuadro verde con la URL pública de tu aplicación
(puede tardar un minuto en procesar el primer despliegue).

#### !!! A partir de ahora, cada vez que hagas un cambio en tu código y quieras actualizar la web en vivo
solo tendrás que ejecutar el comando:

`npm run deploy`

tip profesional:
Ahora que ya tenés la URL real de tu aplicación provista por GitHub Pages
podés volver a tu archivo README.md local
##### reemplazar el marcador de posición que dejamos en la sección de "Demo en Vivo"
##### por este enlace real, hacer el commit y subirlo a tu rama main



# Automatización y GitHub Actions

##### !!!El método que configuramos en el paso anterior usando el paquete gh-pages es lo que en la industria llamamos un flujo semiautomático
La automatización está en el script (npm run deploy se encarga de compilar y subir todo solo)
##### pero el disparador sigue siendo manual: tenés que ejecutarlo vos en tu terminal local.

Si querés lograr la verdadera magia del Despliegue Continuo (CD) en GitHub Pages
#### !!! donde vos te olvidás de compilar y la nube lo hace sola cada vez que hacés un git push

##### el proceso cambia de herramientas y pasa a usar GitHub Actions


#### !!! Funcionamiento conceptual del circuito 100% automatizado

### CD Puro con GitHub Actions

#### !!! En lugar de usar tu computadora para compilar el proyecto y generar la carpeta dist
le delegamos ese trabajo pesado a los servidores de GitHub
El flujo se transforma en esto


1. Evento de Disparo (The Trigger)
##### !!! Vos terminás de programar una funcionalidad en tu rama developer
##### hacés el merge a main y ejecutás el clásico comando de Git:

`git push origin main`

Acá termina el trabajo humano
No tocás ningún comando de despliegue.


2. Activación del Flujo (Workflow)
GitHub recibe tus archivos de código fuente (los archivos .ts, .tsx, etc.).
Al llegar a la rama main, GitHub revisa una carpeta oculta dentro de tu proyecto llamada .github/workflows/.
##### Si encuentra ahí adentro un archivo de configuración (una "receta" en formato YAML)
#### !!! se activa la alarma de Integración Continua (CI).


3. La Máquina Virtual en la Nube (Runner)
##### GitHub te presta una computadora virtual en sus propios servidores (un contenedor Linux) de forma gratuita
De forma invisible para vos, esa máquina realiza las siguientes tareas secuenciales:

Clona el código que acabás de subir.

Instala Node.js y todas las dependencias de tu package.json.

Ejecuta tu suite de pruebas (npm run test:run) para asegurar que no rompiste nada.

Si los tests pasan con éxito, ejecuta el compilador (npm run build).


4. Publicación Nativa (The Deployment)

Una vez que la máquina virtual generó la carpeta dist
utiliza una acción interna de GitHub para tomar esos archivos estáticos
y "inyectarlos" directamente en el servidor web de GitHub Pages.


##### Las empresas grandes no usan flujos manuales usan pipelines de Actions, Jenkins o GitLab CI



## Github Pages y Github Actions vs Vercel o Netlify

dependiendo de si querés destacar tu capacidad de diseño de producto
o tus habilidades de infraestructura (DevOps).

GitHub Pages + Actions vs. Vercel / Netlify


1. Configuración Inicial:

gh:
Compleja (Requiere escribir tu propio archivo YAML de CI/CD).

vr,n:
Ultra simple (Tres clics mediante interfaz web).

2. Manejo de Rutas (SPA)

Con "trucos" (Da error 404 al recargar rutas internas).

Nativo y transparente (Redirecciona todo a index.html).

3. Despliegues de Prueba

No tiene (Solo ves la web final en main).

Preview Deployments automáticos para cada rama o PR.

4. Portfolio

Alto impacto técnico (conocimiento de automatización).

Alto impacto visual (flujo de producto)


### GitHub Pages + Actions: 'flex' devops

#### !!! Es como armar tu propio servidor: configurás la infraestructura vos mismo

Ventaja:
perfil de GitHub
Al ver la pestaña "Actions" con un historial de ejecuciones exitosas
demuestra conocimiento en configurar un pipeline (una tubería de procesos automatizados) real
habilidad fundamental en el desarrollo profesional

Problema: SPAs
GitHub Pages está pensado para archivos estáticos reales
Si usás navegación interna en tu app (como React Router)

y el usuario entra a [tuweb.com/dashboard](https://tuweb.com/dashboard)
y aprieta F5 (recargar), la página va a dar un error 404

##### GitHub va a buscar una carpeta física llamada dashboard que no existe
porque en React todo lo maneja JavaScript internamente desde un único archivo

##### Para solucionarlo, tenés que configurar un script tramposo
##### que duplique el index o usar rutas con hash (/#/dashboard), lo cual no queda muy estético.


### Vercel o Netlify

##### Estas plataformas fueron creadas específicamente para el ecosistema moderno de React, Vite y Next.js
Saben exactamente qué estás subiendo y cómo optimizarlo.

Ventaja: 

Previews de Ramas
##### Si hacés un cambio en tu rama developer y abrís un Pull Request hacia main
Vercel te genera una URL única y temporal de esa rama de forma automática

##### Podés mandarle ese enlace a cualquiera para que pruebe la nueva funcionalidad antes de que impacte en la web principal
imita al 100% el flujo de trabajo de las empresas de tecnología de primer nivel

Rutas Perfectas:
Manejan el enrutamiento del lado del cliente a la perfección
Con solo configurar un archivo de una línea, la plataforma entiende que si un usuario recarga
[tuweb.com/dashboard](https://tuweb.com/dashboard)
tiene que servirle el index.html principal
dejar que React se encargue del resto



# GitHubPages y GitHub Actions

Método nativo moderno de GitHub:

Gracias a las Actions actuales
ya no necesitamos crear una rama extra fea como gh-pages
ni instalar paquetes raros en Node

GitHub Actions puede compilar tu código en una máquina virtual, empaquetarlo y publicarlo directamente en los servidores de Pages


## Práctica GitHub Actions

Configurando cd pipeline


### Pipeline de CD

##### Proceso desde rama develop


1. archivo vite.config.ts
##### Vite necesita saber que va a correr en una subcarpeta

Asegurate de que tu archivo vite.config.ts en la raíz tenga la propiedad base
con el nombre exacto de tu repositorio de GitHub:

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/nombre-de-tu-repositorio/', // ⚠️ Reemplazalo por el nombre de tu repo entre barras
})
```


2. Receta Automatización: Workflow YAML

##### Los servidores de GitHub buscan las automatizaciones dentro de una estructura de carpetas muy específica

1. En la raíz de tu proyecto creá una carpeta llamada .github

2. Adentro de esa carpeta, creá otra llamada workflows

3. Adentro de workflows, creá un archivo llamado deploy.yml

La estructura en tu árbol de directorios debe quedar exactamente así:

```
tu-proyecto/
├── .github/
│   └── workflows/
│       └── deploy.yml  <--- ¡ACÁ VA EL ARCHIVO!
├── src/
├── package.json
└── vite.config.ts
```

#### !!! Abrí ese archivo deploy.yml, su código:

```
name: Despliegue Continuo (CI/CD) a GitHub Pages

on:
  push:
    branches: [ "main" ] # 🚀 El flujo se dispara únicamente cuando empujamos código a main

# Configura los permisos del GITHUB_TOKEN para permitir el despliegue nativo
permissions:
  contents: read
  pages: write
  id-token: write

# Evita ejecuciones simultáneas si hacés pushes muy seguidos
concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest # Corre sobre una máquina virtual Linux limpia
    steps:
      - name: 📥 Descargar código fuente
        uses: actions/checkout@v4

      - name: 🟢 Configurar entorno de Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm' # Cachea las dependencias para que los builds futuros sean ultra veloces

      - name: 📦 Instalar dependencias
        run: npm ci # Instalación limpia y estricta basada en el package-lock.json

      - name: 🏗️ Compilar aplicación (Build)
        run: npm run build

      - name: ⚙️ Configurar las Pages de GitHub
        uses: actions/configure-pages@v4

      - name: 📤 Subir el resultado de producción (Artifact)
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist' # Sube únicamente la carpeta compilada por Vite

      - name: 🚀 Desplegar en vivo
        id: deployment
        uses: actions/deploy-pages@v4
```


3. Switch en la web de GitHub

##### Para que GitHub acepte que una Action maneje la web en lugar de una rama
tenemos que avisarle en la configuración de la nube

Entrá a tu repositorio en la web de GitHub.

pestaña superior de ⚙️ Settings (Configuración).

menú izquierdo, hacé clic en Pages.

sección Build and deployment -> Source:
desplegá las opciones y cambiá "Deploy from a branch" por GitHub


## Flujo real con github pages y github actions

```
# 1. Guardá los archivos de configuración en tu rama developer
git add .
git commit -m "ci: setup github actions native deployment pipeline"
git push origin developer

# 2. Ahora, pasate a la rama main para simular un despliegue de producción
git checkout main
git merge developer  # Traés los cambios aprobados de developer a main

# 3. ¡Disparás el pipeline!
git push origin main
```

Al hacer ese último git push origin main
ir a la web de tu repositorio en GitHub
Si hacés clic en la pestaña "Actions" (en el menú superior),
##### vas a ver tu flujo parpadeando en amarillo con el mensaje "Despliegue Continuo (CI/CD) a GitHub Pages".

Podés hacer clic en él para ver en tiempo real cómo la máquina virtual de Linux se enciende
instala Node, compila tu proyecto de Vite y lo sube a internet
Cuando se ponga en verde, ¡tu app estará oficialmente en producción!




# Type-Aware Linting (strictTypeChecked), eslint-plugin-react-x y eslint-plugin-react-dom


```
React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:


export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:


// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

Configuración actual:
usa el nuevo formato Flat Config nativo
la utilidad defineConfig de ESLint

Necesitamos instalar las librerías y luego inyectar la configuración del parser
(el analizador que lee tu tsconfig.json)

1. Instalar los nuevos plugins
Antes de modificar el archivo
ejecutar: `npm install eslint-plugin-react-x eslint-plugin-react-dom --save-dev`

2. Actualizar eslint.config.js

```
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import reactX from 'eslint-plugin-react-x' // Nuevo
import reactDom from 'eslint-plugin-react-dom' // Nuevo
import { defineConfig, globalIgnores } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.strictTypeChecked, // Cambiado de 'recommended' a 'strictTypeChecked'
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      reactX.configs['recommended-typescript'], // Nuevas reglas de React
      reactDom.configs.recommended, // Nuevas reglas de React DOM
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: { // Bloque REQUISITO para Type-Aware Linting
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  eslintConfigPrettier,
])
```

`Activación de parserOptions`:
Al agregar project y tsconfigRootDir
Ahora puede leer la configuración real de tu compilador de TypeScript
permite que funcionen las reglas basadas en tipos (como detectar promesas olvidadas o awaits innecesarios).

`Evolución a strictTypeChecked`:
Reemplazamos la configuración recomendada básica de TypeScript
por la estricta con conocimiento de tipos
va a elevar la vara de calidad de tu código drásticamente

`Ecosistema moderno de React`:
Agregamos reactX y reactDom
##### Estas configuraciones analizan que uses de forma óptima los hooks
##### que manejes correctamente las propiedades de los elementos del DOM virtual
##### que respetes los estándares modernos de React 19.

#### Una vez que guardes el archivo, ejecutá npm run lint en tu terminal
##### Es completamente normal que la primera vez aparezcan varias líneas rojas de advertencias que antes pasaban desapercibidas






# Errores compilador






# Github workflow


regla:
La rama main es sagrada y solo tiene código 100% terminado y sin errores
Todo el trabajo sucio, las pruebas y las funciones nuevas se hacen en ramas secundarias

1. Sincronizar antes de empezar
Antes de tocar una sola línea de código
asegurate de tener en tu PC lo último que esté en la nube
útil si editaste algo desde la web de GitHub o desde otra máquina

```
git switch develop
git pull origin develop
```

2. Crear una rama para la tarea
Aislar el trabajo
Nunca programes directo en develop ni en main
Crear una rama específica saliendo desde develop

```
git switch -c feat/history

```
Escribí tu código, hacé tus pruebas locales en Vite y asegurate de que todo funcione.

3. Guardar cambios locales de forma limpia
Commits atómicos

No esperes a terminar toda la app para hacer un commit
Hacé guardados pequeños
##### Cuando termines una sub-tarea (ej. los estilos del historial)

```
git status
git add .
git commit -m "feat: add basic layout and styles for history component"
```

4. Fusionar el trabajo en desarrollo
Integración local

##### Cuando tu funcionalidad esté 100% terminada y probada en su rama
llegó el momento de llevarla a la rama de integración (develop).
##### Primero, volvés a develop y te asegurás de que esté actualizada:

```
git switch develop
```
Traés los cambios de tu rama terminada hacia develop:

```
git merge feat/history
```

5. Respaldar en la nube
Push seguro

##### Ahora que tu rama develop local tiene el código nuevo
##### subila a GitHub para que tu trabajo quede respaldado en internet:

```
git push origin develop
```

Una vez que verificás que todo subió bien
podés borrar tu rama temporal local con git branch -d feat/history
para mantener la terminal limpia

6. Lanzar a producción (main)
Solo cuando cerrás una versión

Terminaste una tanda grande de funciones y la app es totalmente estable?
hora de actualizar tu portfolio público (main).

```
git switch main
git merge develop
git push origin main
```

Si tenés configurado GitHub Pages en la rama main
este último push disparará el deploy automático a internet.


Mandamientos de Seguridad

1. Usá tu comando git tree antes de hacer un Push:
Te va a permitir ver visualmente si estás parado en la rama correcta
y si tus ramas locales van en línea recta con las de GitHub.

2. No uses git push -f (fuerza):
La bandera de forzar borra el historial del servidor para acomodarlo a tu máquina
Si algo no sube, es porque te falta hacer un pull antes
no porque debas romper el servidor.

3. Los archivos pesados o secretos no se suben:
Asegurate de que carpetas como node_modules/ o archivos de configuración local .env estén escritos dentro de tu archivo .gitignore antes de hacer el primer git add.



## Fetch y Rebase


### Fetch:

`git pull`
#### !!! El problema de git pull es que es un comando "gordo": hace un git fetch y un git merge todo junto y a ciegas

git fetch es la versión segura
conectarse a GitHub, bajarse toda la información de lo que cambiaron tus ramas en la nube
pero no toca nada de tu código local

Actualiza tus ramas de seguimiento remoto (las que en tu comando git tree
aparecen como origin/main o origin/develop).

Te permite "espiar" qué hay de nuevo en el servidor antes de decidir integrar esos cambios a tus ramas locales.



### Rebase: 

Cuando querés integrar los cambios de una rama a otra
(por ejemplo, actualizar tu rama feat/nueva con lo último que subiste a develop)
la opción obvia es git merge
Sin embargo, merge genera un commit extra automático que dice "Merge branch 'develop' into...".
##### Si hacés esto seguido, tu historial se vuelve un nudo de líneas cruzadas (efecto espagueti).

git rebase (re-basar) cambia la base de tu rama
En lugar de unir las ramas con un nudo
##### desarma temporalmente los commits que hiciste en tu rama
se trae lo último de la rama padre, y vuelve a clavar tus commits uno por uno arriba de todo
como si recién los hubieras programado hoy.


## Flujo con fetch y rebase

el flujo diario para actualizar tu rama de trabajo sin ensuciar el historial sigue esta secuencia exacta:

1. Traer metadatos de la nube
Estás parado en tu rama de desarrollo o de características y querés actualizarte

```
git fetch origin
```
Ahora tu Git local ya sabe exactamente qué hay de nuevo en GitHub sin haberte alterado tus archivos.

2. Actualizar la rama base en local
Te pasás un segundo a tu rama de integración local para ponerla al día con lo que acabás de descargar:

```
git switch develop
git merge origin/develop
```
Como no tocaste develop en local, este merge se hace de forma directa y limpia (Fast-forward).

3. Aplicar el Rebase en tu rama
Volvés a tu rama de trabajo (por ejemplo, chore/github)
y ejecutás el rebase contra develop:

```
git switch chore/github
git rebase develop
```

Git va a levantar tus commits
va a poner abajo lo nuevo de develop
y va a acomodar tus commits arriba de todo en una línea recta perfecta


##### Nunca apliques git rebase sobre una rama que ya subiste a GitHub y que otras personas están usando
##### Como el rebase reescribe la historia (cambia los hashes de los commits),
##### si modificás el pasado de una rama pública vas a desincronizar las computadoras de todo tu equipo


## Error git rebase: simulación

git rebase sobre algo que ya subiste a GitHub
el rebase destruye los commits viejos y crea unos nuevos (con hashes diferentes).
alterando el pasado

Si GitHub ya conoce el pasado viejo y vos le aparecés con un pasado nuevo
las dos realidades chocan.

1. Comienzo
Todo viene marchando bien
Estás trabajando en tu rama chore/github
Hacés un commit, todo funciona y lo subís a GitHub para tener un respaldo

En tu PC (Local): A ---> B (chore/github)
En GitHub (Remoto): A ---> B (chore/github)

##### Hasta acá, las dos computadoras están sincronizadas en el commit B. Es un espejo perfecto.

2. Error del rebase

##### Te das cuenta de que la rama develop avanzó con cambios nuevos de la estructura de la app.

#### !!! tirás un `git rebase develop` dentro de tu rama `chore/github`: 
##### !!! Nunca apliques git rebase sobre una rama que ya subiste a GitHub y que otras personas están usando


Git hace su magia: agarra tus commits A y B, los desclava
mete lo nuevo de develop abajo
y vuelve a clavar tus cambios arriba
Pero al hacer esto, sus documentos de identidad (hashes) cambian
Ahora se llaman A' y B'.

En tu PC (Local): [Cosas nuevas de develop] ---> A' ---> B' (chore/github)
En GitHub (Remoto): Se quedó en el pasado: A ---> B (chore/github)

3. Choque

Terminaste de trabajar y querés actualizar GitHub.
Escribís el comando clásico:

`git push origin chore/github`
GitHub recibe la petición, mira tu historial nuevo (A' -> B'), mira su propio historial (A -> B),
se da cuenta de que los hashes no coinciden y te rebota el push

```
! [rejected]        chore/github -> chore/github (non-fast-forward)
error: failed to push some refs to 'https://github.com/tu-usuario/today-app.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g. 'git pull ...')
```

Salidas:

#### !!! Ante este error, la terminal te da una "pista" (hint): te dice que tires un git pull. ¡Esa es la trampa!

##### El camino incorrecto (Hacer el git pull)
Si entrás en pánico y hacés caso a la pista tirando git pull
Git va a intentar resolver el problema haciendo un merge
entre tu rama rebasada (A'->B') y la rama vieja de GitHub (A->B).

resultado: Tu historial se va a duplicar
Vas a ver los mismos commits repetidos con nombres parecidos
se te van a mezclar los archivos y probablemente te estallen conflictos de código inexplicables por toda la pantalla

Tu git tree se convierte en un nudo de espagueti.


### Forzar el Push
Si sabés lo que estás haciendo y ejecutás:

`git push origin chore/github --force`
Le estás diciendo a GitHub: "No me importa tu opinión, borrá tu historial viejo de A->B
poné mi nuevo historial de A'->B'".
GitHub obedece y el espejo se vuelve a alinear.

#### !!! Se diseñó para equipos de trabajo.
Si compartieras este repositorio con otro programador y ese compañero ya se hubiera bajado a su PC tu rama vieja con el commit B
en el momento en que vos tirás un --force y le cambiás la historia en GitHub
le arruinás la vida a tu compañero. Su Git va a colapsar cuando intente sincronizar.


tu portfolio personal
vos sos el único desarrollador que toca este código
si hacés un rebase local y GitHub te lo rechaza
podés tirar un git push --force-with-lease
(una versión más segura de la fuerza) sin culpa alguna

Nadie más se va a ver afectado por tu cambio de historia
vas a lograr que tu GitHub mantenga esa línea recta perfecta
y ultra profesional que buscan los reclutadores.


### --force-with-lease 

1. Descargar el estado actual de GitHub
Trae los cambios que tus compañeros de equipo hayan subido al repositorio remoto

`git fetch origin`

2. Aplicar Rebase sobre la rama remota actualizada
En lugar de moverte a main, hacer pull y regresar, puedes rebasear directamente tu rama actual usando la referencia remota que acabas de descargar

`git rebase origin/main`

##### Si hay conflictos de código: Git detendrá el proceso en el commit conflictivo
Editas los archivos para resolverlos, los añades al área de preparación con git add ., y ejecutas git rebase --continue
#### !!! Nunca hagas un nuevo commit en medio de un rebase

3. Subir tus cambios limpiamente a GitHub
Como el rebase reescribe el historial (crea nuevos hashes SHA para tus commits)
GitHub rechazará un envío normal
Debes forzar el envío de manera segura

`git push origin feature-branch --force-with-lease`

El parámetro --force-with-lease es una buena práctica crucial
##### interrumpe el push si alguien más subió commits a tu rama remota mientras trabajabas
evitando que pises código ajeno



## Pull Request hacia main

```
# 1) Obtener el repo
git clone https://github.com/usuario/repo.git
cd repo

# 2) Crear una rama de trabajo
git checkout -b feature/mi-cambio

# 3) Trabajar y revisar cambios
git status
git diff

# 4) Preparar y guardar cambios
git add .
git commit -m "Describe el cambio"

# 5) Subir la rama a GitHub
git push -u origin feature/mi-cambio
```

Luego, en GitHub, normalmente haces un Pull Request
hacia main o master.

Para mantenerte al día con cambios remotos:

```
git fetch origin
git pull origin main
```

Un flujo más completo y común en equipo es:

```
git checkout main
git pull origin main
git checkout -b feature/mi-cambio
# trabajar...
git add .
git commit -m "Mensaje claro"
git push -u origin feature/mi-cambio
# PR en GitHub
```


### Con Rebase

#### git rebase entra sobre todo cuando quieres poner tu rama encima de la punta actual de otra rama
##### normalmente main, para mantener un historial más lineal.

```
git checkout feature/mi-cambio
git fetch origin
git rebase origin/main
```

`sirve cuando`:
trabajaste un tiempo en tu rama y main avanzó,
quieres actualizar tu rama sin crear un commit de merge,
prefieres un historial más limpio y lineal

Ej: si tu rama salió de main hace unos días y mientras tanto otros cambios entraron a main
con rebase “reaplicas” tus commits arriba de los commits nuevos de main.

`Cuándo usarlo más seguido`:
en una rama local o personal,
antes de abrir un Pull Request,
para traer cambios de main a tu feature branch

`Cuándo evitarlo`:
en ramas compartidas donde otras personas ya basaron trabajo encima, porque reescribe el historial y puede complicar al equipo

`La diferencia simple con merge es`:
merge: conserva la historia tal como ocurrió, pero puede crear commits de merge.

`rebase`:
reordena tus commits para que parezcan hechos sobre la versión más nueva de la rama base


#### Flujo práctico: fetch, rebase y --force-with-lease

```
git checkout feature/mi-cambio
git fetch origin
git rebase origin/main
git push --force-with-lease
```

##### --force-with-lease suele ser necesario porque rebase cambia los hashes de los commits.



## Flujo historial limpio: evitar pull, merge y usar fetch y rebase con --force si es necesario

Ej: rama feature

trabajando en feature/login.

```
# Actualizar referencias remotas
git fetch origin

# Ir a tu rama
git switch feature/login

# Reaplicar tu trabajo sobre la última versión de main
git rebase origin/main

# Resolver conflictos si aparecen
git add ...
git rebase --continue

# Subir la rama
git push --force-with-lease
```

Ese flujo produce un historial lineal y limpio.


#### Sobre git pull: casos

1. rama personal
En este caso sí es habitual evitar pull y hacer explícitamente:

```
git fetch
git rebase origin/main
```

Más claro porque separa dos operaciones:

```
fetch → descarga información
rebase → decide cómo integrarla
```

2. Configurar pull para que haga rebase
Muchos desarrolladores sí usan pull, pero configurado así:

`git config --global pull.rebase true`

Entonces

`git pull`

Equivalente a:

```
git fetch
git rebase
```

evita los commits de merge automáticos que produce un git pull tradicional

También es común:

```
git pull --rebase
```

3. Rama principal (main)
normalmente no haces rebase.

```
git switch main
git pull origin main
```

No suele ser necesario hacer push --force sobre main.



--force-with-lease:
Solo cuando un rebase cambia el historial después de que ya habías hecho un push

```
A---B---C  main
     \
      D---E   feature
```

Subes la rama:

`origin/feature -> D-E`

Haces:

```
git fetch
git rebase origin/main
```

tu historial es

```
A---B---C  main
         \
          D'---E'
```
Los commits D' y E' tienen hashes nuevos.

Git rechazará:
`git push`
porque el historial cambió.

Entonces haces
`git push --force-with-lease`


Flujo:

```
git switch main
git pull

git switch -c feature/nueva-funcionalidad

# trabajar...


git add .
git commit -m "Implementa X"

# antes de subir o abrir PR
git fetch origin
git rebase origin/main

git push --force-with-lease
```

Este flujo mantiene un historial lineal, evita commits de merge innecesarios y hace explícita la actualización de la rama con los cambios más recientes de main.

##### el historial limpio no depende solo de usar rebase en tu rama
##### sino también de cómo se fusionan los Pull Requests

#### !!! Muchos equipos configuran GitHub para usar "Rebase and merge" o "Squash and merge"
##### evitando los merge commits en main


### Ciclo de vida de una rama

No trabajar sobre main, cada vez que empieces algo nuevo:

1. Sincroniza: `git checkout main` y luego `git pull origin main`.
2. Crea la rama: `git checkout -b feat/mi-tarea`.
3. Trabaja: Haz tus commits atómicos.
4. Sube la rama: `git push origin feat/mi-tarea`.
5. `Pull Request`: En GitHub/GitLab, abre el PR.
Aquí es donde ocurre la magia: tests automáticos, revisión de compañeros y discusión.
6. Merge y Limpieza: Una vez aceptado,
`fusiona y borra la rama (tanto en local como en remoto)`
para no acumular "ramas fantasma".

Una rama nunca debería vivir más de 2 o 3 días.
Las ramas largas traen grandes conflictos
Si una tarea es muy grande, dividirla en ramas más pequeñas
ej. `feat/login-ui`, `feat/login-api`, `feat/login-validation`)




## Proyecto

1. Git Init
preparar el terreno localmente antes de subirlo a la nube
(GitHub, GitLab, Bitbucket).

```
git init
```

Si necesitas especificar el nombre de la rama principal
al inicializar, puedes usar

`git init -b <nombre-rama>`

`git status`

2. Crear archivo .gitignore:
No querrás subir carpetas pesadas como node_modules
archivos de configuración personal o ejecutables

Puedes usar `gitignore.io` para generar uno según tu lenguaje o framework

3. Initial Commit

```
git add .
git commit -m "chore: initial commit with readme and gitignore"
```


### Remote

Conexión al mundo:
Una vez tienes tu historial local, necesitas un lugar donde respaldarlo

1. Crear repo remoto

2. Vincula repo local con el remoto

```
git remote add origin https://github.com/usuario/tu-proyecto.git
```

3. Subir rama principal

```
git branch -M main  # Asegura que la rama se llame 'main'
git push -u origin main
```


### Feature Branch Workflow

Nunca se trabaja directamente sobre main

1. Sincronización
Antes de empezar algo nuevo
asegúrate de tener lo último de tus compañeros

```
git checkout main
git pull origin main
```

2. Creación de rama
Rama descriptiva para tu tarea

```
git checkout -b feature/login-integration
```

3. Trabajo y Commits
Hacer cambios pequeños y frecuentes siguiendo la nomenclatura
feat:, fix:, etc

```
git add .
git commit -m "feat: add login service with jwt"
```

Publicación y Pull Request (PR)
Sube tu rama y abre una solicitud de cambios en una plataforma
para que alguien revise tu código

```
git push origin feature/login-integration
```



## Local develop branch

1. Sincronizar antes de empezar
tener en tu PC lo último que esté en la nube

```
git checkout develop
git pull origin develop
```

2. Crear rama para la tarea
Nunca programes directo en develop ni en main


```
git checkout -b feat/historial-component
```

3. Guardar cambios locales de forma limpia
Commits atómicos

guardados pequeños
Cuando termines una sub-tarea (por ejemplo, los estilos del historial):

```
git status
git add .
git commit -m "feat: add basic layout and styles for history component"
```

4. Fusionar el trabajo en desarrollo
Integración local
funcionalidad esté 100% terminada y probada

```
git checkout develop
```

Traés los cambios de tu rama terminada hacia develop:

```
git merge feat/historial-component
```

5. Respaldar en la nube
Push seguro

rama develop local tiene el código nuevo
subila a GitHub para que tu trabajo quede respaldado en internet

```
git push origin develop
```

6. Lanzar a producción (main)
Solo cuando cerrás una versión
Terminaste una tanda grande de funciones y la app es totalmente estable?

hora de actualizar tu portfolio público (main).

```
git checkout main
git merge develop
git push origin main
```



## Flujo en equipo

1. Sincronizar el estado global
Antes de tocar el teclado

Repositorio remoto en GitHub es la única fuente de verdad
Al arrancar el día, vas a bajarte lo que tus compañeros terminaron el día anterior:

```
git checkout develop
git fetch origin
git pull origin develop
```

2. Crear tu rama de tarea
Aislamiento absoluto

Cada ticket de Jira o tarea del tablero de tu equipo se resuelve en su propia rama aislada
El nombre suele incluir el tipo de tarea y el número de ticket:

```
git checkout -b feat/TASK-104-login-validation
```
programás con total libertad. Si rompés algo, solo se rompe tu rama.

3. Commits limpios y descriptivos
Trabajo diario

A medida que avanzás, hacés commits atómicos
En equipos, los mensajes de commit suelen seguir un estándar
Ej: Conventional Commits

```
git add .
git commit -m "feat(auth): add regex validation for corporate emails"
```

4. Publicar la rama en GitHub
Subir propuesta

Cuando terminás la funcionalidad en tu máquina
subís tu rama para que tus compañeros puedan verla
No estás tocando el código del proyecto general todavía
solo estás subiendo tu rama de trabajo:

```
git push -u origin feat/TASK-104-login-validation
```

5. Abrir Pull Request (PR)
trabajo en equipo

Entrás a la web de GitHub
va a detectar tu push
"Compare & pull request".

escribís un resumen de qué hiciste, qué archivos tocaste y adjuntás capturas de pantalla si modificaste la interfaz visual
Estás pidiendo permiso formal para fusionar tu código

6. Code Review e Integración Continua
Control de calidad

Compañeros (Peers): Revisan tu código línea por línea en GitHub
te dejan comentarios, dudas o te piden correcciones.

Bots (CI/CD): GitHub Actions ejecuta automáticamente tus pruebas de código (Pytest, Jest, etc.)
y revisa que el formateo cumpla con las reglas del equipo.

Si te piden cambios, los programás
hacés un commit normal y tirás git push
El PR se actualiza solo en la web.

7. Merge y limpieza en la nube
Cierre de ciclo

Una vez que tu PR tiene las aprobaciones necesarias 
(los famosos Approve de tus compañeros) y las pruebas pasaron en verde
Un desarrollador Senior o vos mismo le dan al botón "Merge pull request" desde la web de GitHub.
El código se fusiona de forma segura en la nube
Finalmente, borrás la rama desde la misma web para no acumular basura


Practicas

PRs:
Dejá comentarios constructivos y explicá el "por qué" si sugerís un cambio

ramas cortas:
No abras un Pull Request con 50 archivos modificados y 2000 líneas de código
imposible de revisar para tus compañeros
##### preferible abrir tres PRs pequeños y modulares que uno gigante que bloquee al equipo

Actualizarse:
Si estás trabajando en una funcionalidad que te lleva 3 o 4 días
ejecutá git fetch y hacé un git rebase develop
o git merge develop si tu equipo prefiere mantener la cronología estricta
en tu rama local al menos una vez al día
Así evitás encontrarte con una montaña de conflictos el último día.




# Flyer de la app

## Composición/componentes

Su único y gran objetivo:
##### es generar una conversión digital (una descarga o un registro) a partir de un soporte físico o visual rápido

Por eso, su diseño y estructura no se dejan al azar
##### se basan en un conjunto de conceptos psicológicos, de marketing y de experiencia de usuario (UX) muy específicos


Conceptos clave en los que se fundamenta

1. Hero Shot: Mockup del Dispositivo
Concepto visual central
Nunca se muestra la interfaz de la app flotando en el aire
##### se muestra renderizada dentro de un smartphone de última generación
Esto ayuda a que el cerebro del usuario asimile instantáneamente el contexto:
"Esto es software para mi teléfono".
Además, la pantalla del mockup debe mostrar la función más atractiva o limpia de la interfaz

2. Propuesta Única de Valor (UVP)
##### Responde a la pregunta del usuario: ¿Qué gano yo con esto?
##### No explica qué hace la app, sino qué problema resuelve

#### Mal ejemplo (Basado en características): "App de base de datos relacional para tareas cotidianas".

#### !!! Buen ejemplo (Basado en valor): "Organizá tu día y ganá dos horas libres".

3. Fricción Cero: Puente QR
En un flyer físico, nadie se va a poner a tipear una URL larga ni a buscar un nombre genérico en la tienda de aplicaciones
#### !!! El concepto aquí es eliminar la fricción mediante un Código QR dinámico en un lugar altamente visible
El usuario apunta con la cámara y cae directo en la tienda de descargas.

4. Disparadores de Confianza (Social Proof)
#### Instalar una app requiere un voto de confianza (por el espacio en disco y los datos personales).
#### !!! El flyer se basa en la prueba social para romper esa barrera. Se usan micro-elementos visuales como: "4.8 ★ en App Store"
##### "+10k descargas" o el logo de algún medio tecnológico que haya hablado de la app

5. Beneficios sobre Características (Benefits vs. Features)
#### !!! El espacio es extremadamente limitado (la gente escanea un flyer en menos de 3 segundos).
Por eso se aplica el concepto de resumir la app en máximo 3 puntos clave
#### !!! enfocados siempre en el beneficio humano
##### (ej: "Ahorrá dinero", "Sincronizá con tu equipo") y
y no en el lenguaje técnico (ej: "Algoritmo optimizado en Node.js").

6. Minimalismo y Espacio Negativo
En diseño de interfaces y marketing de apps
#### "Menos es más": Un flyer saturado de texto da la sensación de que la aplicación va a ser difícil de usar
##### !!! El uso de mucho espacio vacío (espacio negativo)
##### guía el ojo del usuario directamente hacia el título, las pantallas de la app y el botón de descarga

Regla de Marketing de Apps:
#### El flyer no tiene que vender toda la aplicación
##### !!! solo tiene que convencer al usuario de que vale la pena escanear el código para ver más



## 1. Hero Shot

app renderizada en el dispositivo compatible
no se muestra flotando en el flyer

Es la imagen que va a captar la atención
##### Definir qué concepto visual vamos a mostrar


### Opciones/Ejemplo

1. Héroe del "Check" (Enfoque en la Satisfacción)

##### Este concepto se centra en el momento de mayor satisfacción para el usuario
##### cuando completa una tarea
Es un enfoque muy directo y aspiracional.

`Mockup`: Un smartphone moderno, oscuro, centrado en el flyer, quizás con un ligero ángulo.

`Contenido de Pantalla`: basado en el estado real actual de la app
Mostramos el cuadro de "Mis Tareas".
El campo de entrada ("¿Qué hay que hacer hoy?") debe estar vacío o con un texto muy simple
Debajo, mostramos solo 2 o 3 tareas de ejemplo muy claras y sencillas.

Detalle clave:
Una de las tareas de ejemplo debe tener el check azul marcado
y la tarea tachada de forma muy visible
justo como se ve en la captura.

##### Por qué funciona: Vende la sensación de control y logro
El check azul resalta mucho sobre el fondo oscuro
Es simple y comunica la función principal de la app en un microsegundo.


2. Mapa del Día (Enfoque en la Organización Total)

Este concepto muestra que la app no es solo para anotar
##### sino para tener un control estratégico de tu día entero
usando los filtros y categorías inferiores de la interfaz.

Mockup: Un smartphone centrado, en vista frontal.

Contenido de Pantalla:
Mostramos toda la pantalla móvil
El cuadro de "Mis Tareas" puede tener varias tareas (unas 5 o 6) para dar sensación de un día lleno.

Detalle:
Resaltamos visualmente (mediante iluminación o un ligero zoom en esa área)
la sección de "CATEGORÍAS" en la parte inferior
Aseguramos que los números de conteo (como el "2" en "Todas") sean muy legibles

##### Por qué funciona: Vende el concepto de organización y estructura
Atrae a personas que se sienten abrumadas y buscan una herramienta que les ayude a priorizar rápidamente usando los filtros
(Todas, Pendientes, Completadas).


3. Combo de Versatilidad: Enfoque en la Flexibilidad

##### Este concepto combina los elementos visuales
##### para mostrar que la aplicación se adapta a cualquier contexto, sea móvil o escritorio

El Mockup: Una composición de dos dispositivos: un smartphone oscuro en primer plano
y un portátil oscuro abierto justo detrás, ligeramente desplazado.

Contenido de Pantalla:
En el smartphone, mostramos la interfaz móvil
enfocada en el botón de "Añadir tarea".

pantalla del portátil
mostramos la versión de escritorio
mostrando la vista más amplia con las categorías a la izquierda

##### Por qué funciona: Vende profesionalismo y adaptabilidad
El usuario entiende que puede gestionar sus tareas tanto si está fuera con el teléfono como si está trabajando en la oficina frente al ordenador



## 2. Propuesta Única de Valor (UVP)

Pregunta del usuario: ¿Qué gano yo con esto?
No explica qué hace la app, sino qué problema resuelve

Mal ejemplo (Basado en características): "App de base de datos relacional para tareas cotidianas".
Buen ejemplo (Basado en valor): "Organizá tu día y ganá dos horas libres".


Ej app today:
##### La propia interfaz ya nos da la pista clave
El texto principal dice: "Tienes X asuntos por resolver hoy".
##### No dice "organiza tu vida", ni "proyectos a largo plazo". Habla del hoy.

##### La UVP para el flyer tiene que ser un título corto
##### potente y que prometa un beneficio inmediato

Opciones:

1. Enfoque en el Presente (Un día a la vez)

Este concepto se alinea directo con el nombre de la app
a personas que se sienten abrumadas por listas de tareas interminables
buscan simplificar su enfoque al día en curso.

`Título`: Un día a la vez, sin complicaciones

`Subtítulo` (bajada): Organizá tus tareas de hoy
eliminá el ruido visual y tomá el control de tu rutina con un solo toque

`Por qué funciona`: Transmite calma
El usuario siente que la app le va a quitar un peso de encima
al invitarlo a enfocarse solo en lo inmediato


2. Enfoque Minimalista (Cero Ruido Mental)

Este explota la estética de las capturas
Va dirigido a usuarios que odian las apps llenas de botones
publicidad o configuraciones complejas.

`Título`: Tu día, sin rodeos

`Subtítulo` (bajada): Una interfaz limpia y oscura diseñada para lo único que importa: anotar tus pendientes
filtrarlos al instante y tacharlos de la lista.

`Por qué funciona`: Conecta el diseño visual con la utilidad
Promete rapidez ("sin rodeos") y eficiencia extrema
algo muy valorado en el ecosistema dev y tech.


3. Enfoque en la Acción (Productividad Directa)

Enfoque más activo y motivacional
muy centrado en la satisfacción de completar objetivos
el "Check" azul que resalta en tu interfaz móvil

`Título`: Menos pendientes, más control

`Subtítulo` (bajada): Transformá tus ideas en tareas resueltas.
Buscá, categorizá y limpiá tu día con la velocidad que necesitás

`Por qué funciona`: Aspiracional.
##### Habla al deseo del usuario de ser más productivo y de terminar el día con la lista vacía
(o con el botón de "Borrar completadas" listo para presionar).


Tip de Copywriting:
En los flyers, el título de la UVP suele ir en la tipografía más grande arriba de todo
el subtítulo funciona como el puente que conecta ese beneficio con la imagen del teléfono que definimos antes



## 3. Cero: Puente QR

En un flyer físico, nadie se va a poner a tipear una URL larga ni a buscar un nombre genérico en la tienda de aplicaciones
Eliminar la fricción mediante un Código QR dinámico en un lugar altamente visible
El usuario apunta con la cámara y cae directo en la tienda de descargas.

1. Herramientas para generar el código QR

Para un flyer, no te sirve cualquier generador online que te baje una imagen pixelada
Necesitás alta resolución (preferentemente formatos vectoriales como SVG)
y la capacidad de personalizar los colores para que combinen con la estética dark mode de tu aplicación

`QR Code Monkey` (Gratuito y Profesional):
Te permite generar códigos QR estáticos de alta resolución sin registrarte
Lo mejor es que podés cambiarle el color exacto (usando el código HEX del azul o gris de tu app)
y te permite descargarlo en SVG o PDF
que son los formatos que los diseñadores o imprentas necesitan para que no se pixele.

`Canva / Adobe Express` (Integrados):
Si decidís armar el flyer usando estas plataformas, ambas tienen herramientas nativas de QR
Solo pegás el enlace de GitHub Pages y te genera el código directamente dentro del lienzo de diseño

`Short.io o Bitly` (Para QR Dinámico):
Si querés medir el éxito de tu flyer (saber cuánta gente real escaneó el código)
estas herramientas te permiten crear un enlace acortado que rastrea las métricas y te genera el QR automáticamente
Si el día de mañana la URL de tu app cambia
el código QR sigue sirviendo porque podés cambiar el destino desde la plataforma


2. Ubicación y Estrategia

##### El posicionamiento del QR responde a cómo lee el cerebro humano

#### !!! Cuando miramos un flyer, nuestros ojos suelen hacer un recorrido en forma de "Z":
##### empezamos arriba a la izquierda (título), nos movemos a la derecha
##### empezamos arriba a la izquierda (título), nos movemos a la derecha
##### (donde va a estar tu Hero Shot del teléfono) y terminamos en la esquina inferior derecha.

#### !!! Por eso, la esquina inferior derecha es el punto de cierre (o zona de acción).
Ahí es donde debe ir el QR


### Diseño para que el QR sea efectivo

`Tamaño importa`:
Si el flyer es impreso (tamaño folleto común A5 o similar)
el QR debe medir como mínimo 2x2 cm
Si es más chico, a las cámaras de los celulares de gama media les cuesta enfocarlo

`Contraste absoluto`:
Como tu app es oscura
el flyer probablemente herede esos tonos oscuros tan elegantes
El QR necesita un "área de respeto" o borde blanco/claro alrededor
Si pegás el código negro directamente sobre un fondo azul oscuro
las cámaras no van a poder leerlo porque no distinguen los cuadrados.

`Nunca lo dejes solo`: Llamado a la Acción
##### Un código QR flotando sin texto genera desconfianza
#### !!! Siempre, justo al lado o arriba del código, debe haber un micro-texto instructivo (CTA).


### Texto para acompañar al QR:

"Escaneá con tu cámara y empezá a organizar tu día ahora."
(O algo más directo como: "Escaneá para probar la app en vivo").



### Flyer repo

#### Consideraciones

1. Código QR se transforma en un enlace directo

```
([![...](...)])
```

En un README.md, poner un código QR es un error de experiencia de usuario (UX).
#### !!! El reclutador ya está navegando en su computadora o teléfono
##### !!!! obligarlo a sacar el celular para escanear la pantalla es sumarle fricción

`Solución`:
El flyer completo (o un botón diseñado dentro de él) debe ser clickeable
En Markdown podés envolver la imagen del flyer para que, al hacerle clic
abra directamente tu app en GitHub Pages


2. Formato horizontal (Banner) vs. Vertical (Folleto)

Los flyers tradicionales son verticales (proporción 4:3 o A5).
##### !!! En un README.md, un diseño excesivamente vertical obliga al usuario a hacer demasiado scroll para empezar a ver el código

`Solución`: El "flyer" para GitHub suele funcionar mejor con formato de Banner Horizontal
(tipo portada de LinkedIn o Twitter) o un cuadrado estilizado
Queremos que impacte visualmente apenas cargue el repositorio
pero sin tapar todo el contenido de texto


3. Adaptabilidad al Modo Oscuro y Claro de GitHub

##### GitHub permite a los usuarios elegir entre fondo blanco, gris o negro
Si diseñás un flyer con fondo transparente y usás texto oscuro
el usuario que tenga GitHub en modo oscuro no va a poder leer nada.

`solución`:
Para un flyer publicitario complejo, lo más seguro es usar un fondo sólido
(por ejemplo, el azul/gris oscuro de la propia identidad de tu Today app). Así
Así te asegurás de que el flyer se vea idéntico e impecable
sin importar cómo tenga configurado el navegador el visitante


4. Público objetivo cambia (Recrutadores y Devs)

A la gente en la calle no le importa qué tecnología usaste
pero en GitHub sí.
El flyer de tu README puede (y debe) lucir orgulloso los logos o etiquetas de tus herramientas

`solución`: En una esquina o al pie del banner, queda muy profesional incluir micro-badges estéticos que digan
React, TypeScript, Vite, Vitest. Es un flechazo directo al ojo del reclutador.


5. Optimización de peso

Un flyer pesado tarda en cargar
Si el README.md se queda en blanco por 3 segundos mientras descarga una imagen gigante
el visitante se va.

#### !!! solución: Exportar el diseño final en formatos modernos como .webp o un .png fuertemente comprimido
##### !!! No debería pesar más de 200-300 KB.




## 4. Disparadores de Confianza (Social Proof)
Instalar una app requiere un voto de confianza (por el espacio en disco y los datos personales).
##### El flyer se basa en la prueba social para romper esa barrera. Se usan micro-elementos visuales como: "4.8 ★ en App Store"
"+10k descargas" o el logo de algún medio tecnológico que haya hablado de la app

Cuando un usuario de a pie ve un flyer de una aplicación
la primera pregunta inconsciente que se hace no es qué hace la app, sino
##### Esto es seguro o me va a meter un virus / robar los datos / llenar el teléfono de publicidad?".

#### !!! Instalar una aplicación nueva requiere que el usuario sacrifique tres cosas valiosas
##### su almacenamiento, su tiempo y su privacidad

Los Disparadores de Confianza (o Social Proof) están ahí para decirle
Tranquilo, un montón de gente ya la probó y es segura".

En un flyer el espacio es oro, no podés meter un texto largo
Tenés que usar micro-elementos visuales


Disparadores de Confianza para el Flyer

1. Sistema de Estrellas: el más efectivo

Lenguaje universal de internet
El cerebro humano ya está programado para asociar las 5 estrellas con calidad

`Cómo se ve en el flyer`: Los logos minimalistas de la App Store y Google Play acompañados de una puntuación

Ejemplos:
“4.9 ★★★★★ en la App Store”
“La app de tareas mejor valorada (4.8★)”


2. Volumen de Comunidad (Validación por masa)

A la gente le gusta ir a donde va la gente
Si ven que miles de personas ya la descargaron
el miedo a ser el "conejillo de indias" desaparece.

`Cómo se ve en el flyer`: Números redondos y grandes, usualmente acompañados de un signo más (+).

Ej:
“+10,000 personas ya organizan su día con nosotros.”
“Más de 50k descargas en todo el mundo.”


3. Micro-Reseñas: Testimonios de 5 palabras

##### Un testimonio largo en un flyer no se lee
#### Necesitás un "gancho" ultra corto entre comillas que represente el alivio del usuario.

`Cómo se ve en el flyer`: Una frase muy cortita en cursiva, abajo de todo o cerca del teléfono.

Ej: 
“'Por fin una app que entiendo a la primera.' – Laura G.”
##### “'Simple, rápida y sin vueltas.' – Carlos M.”


4. Sellos: Garantía de Paz Mental

##### A veces la confianza no viene de cuánta gente la usa
#### !!! sino de lo que la app no hace

Para el público general, el miedo a la publicidad invasiva o a que les vendan los datos es enorme

`Cómo se ve en el flyer`:
Pequeños iconos o frases secundarias cerca del botón de descarga.

Ej:
##### “100% Libre de anuncios molestos.”
##### “Tus datos son tuyos: 100% Privada.”


### Sin saturar el flyer

En el diseño, estos elementos funcionan como "satélites
No son el título principal ni la imagen central
suelen ir en un tamaño de letra más chico, ubicados estratégicamente:

`Arriba del título principal`:
Como un pequeño cintillo
(ej: "Súmate a los más de 10k usuarios").

`Al pie, rodeando al código QR`: 
Justo al lado de las tiendas de descarga
para dar el empujón final antes de que la persona escanee el código



## 5. Beneficios sobre Características (Benefits vs. Features)

El espacio es extremadamente limitado (la gente escanea un flyer en menos de 3 segundos).
Por eso se aplica el concepto de resumir la app en máximo 3 puntos clave
enfocados siempre en el beneficio humano
(ej: "Ahorrá dinero", "Sincronizá con tu equipo") y
y no en el lenguaje técnico (ej: "Algoritmo optimizado en Node.js").

En el marketing de aplicaciones existe una realidad brutal: a la gente no le importa tu código
le importa su vida.

Cuando alguien mira un papel o un folleto digital por 3 segundos
su cerebro está buscando una razón para no tirarlo a la basura
Si ponés una lista de especificaciones técnicas (Características)
el cerebro se cansa y se desconecta

##### Si le mostrás cómo su vida va a ser mejor o más fácil (Beneficios), captás su atención


Característica vs. Beneficio

#### !!! La característica describe el cómo o el qué (la parte técnica)
#### !!! mientras que el beneficio describe el para qué (el impacto humano).

1. `Característica Técnica (Feature)`:

"Base de datos local indexada con motor de búsqueda rápido."
"Arquitectura ligera con consumo de menos de 15MB de RAM."
"Filtros dinámicos por categorías (Pendientes/Completadas)."

2. `Beneficio Humano (Benefit)`:

"Encontrá lo que buscás en un segundo." (Ahorro de tiempo).
"No ralentiza tu teléfono ni gasta tu batería." (Paz mental).
"Vaciá tu mente y organizá tu día sin esfuerzo." (Alivio del estrés).


### Regla de los 3 Puntos Clave

¿Por qué tres y no cinco o diez?

#### Porque el cerebro humano es un buscador de patrones ultra eficiente y ama los grupos de tres
(la famosa Regla del Tres).
Es el equilibrio perfecto: es suficiente información para ser convincente
pero no la suficiente como para abrumar.

##### Estos 3 puntos suelen estructurarse con un micro-icono estético
seguido de una sola línea de texto de alto impacto

### !!! Para asegurarte de que estás escribiendo beneficios puros en esos 3 puntos
#### !!! pasá cada frase por el filtro del "¿Y eso qué?".

##### Escribís: "Tiene modo oscuro nativo."
##### Te preguntás: ¿Y eso qué?
##### Respondés: "Evita que te canses la vista."
##### Te volvés a preguntar: ¿Y eso qué?
#### !!! Resultado final para el flyer: "Cuidá tus ojos: diseñado para usar de noche sin cansarte."


Visualmente, estos 3 puntos van ubicados en el cuerpo central del diseño, generalmente al lado o debajo del Hero Shot del teléfono
Se leen como una lista rápida:

##### Beneficio 1 - Tiempo: Tomá el control de tu rutina en menos de dos minutos.
##### Beneficio 2 - Rapidez: Anotá, filtrá y tachá tus pendientes sin rodeos ni menús lentos.
##### Beneficio 3 - Privacidad: Tus datos son tuyos. 100% privado y libre de anuncios molestos.

### !!! De un solo vistazo de 3 segundos, el usuario ya entendió que la app es rápida, fácil de usar y segura.



## 6. Minimalismo y Espacio Negativo

En diseño de interfaces y marketing de apps
"Menos es más": Un flyer saturado de texto da la sensación de que la aplicación va a ser difícil de usar
El uso de mucho espacio vacío (espacio negativo)
Guía el ojo del usuario directamente hacia el título, las pantallas de la app y el botón de descarga

##### El Espacio Negativo (o espacio en blanco) no es "espacio desperdiciado"
es un elemento de diseño activo

##### En el marketing de aplicaciones, es el recurso más potente para comunicar una idea clave antes de que el usuario instale nada
que tu software es intuitivo y fácil de usar

El desorden visual genera rechazo inmediato
Cuando una persona ve un folleto saturado
lleno de textos pegados, flechas y colores compitiendo entre sí
su cerebro asume instantáneamente que la aplicación va a ser igual de caótica, lenta y difícil de entender

##### Concepto psicológico y de diseño para guiar al público

1. El reflejo de la Experiencia de Usuario (UX)

##### Existe una correlación directa entre cómo luce la publicidad de un producto digital
##### !!! y cómo el usuario percibe su calidad técnica

#### Flyer saturado: Transmite ruido mental, complejidad y burocracia digital
El usuario piensa: "Paso, no tengo tiempo para aprender a usar esto".

#### Flyer minimalista: Transmite velocidad, ligereza y modernidad
Al ver aire y orden, el cerebro se relaja y asume que la aplicación se maneja sin esfuerzo
El diseño respira, por lo tanto, el usuario siente que va a respirar al usarla


2. Reducción de la Carga Cognitiva

#### !!! El cerebro humano tiene un límite de atención muy bajo cuando escanea publicidad rápida (esos famosos 3 segundos).
##### Si le das 10 elementos para mirar al mismo tiempo, no mira ninguno; se satura y descarta el flyer.

##### Al dejar amplias zonas vacías alrededor de los elementos importantes estás reduciendo la "carga cognitiva".
Le estás haciendo el trabajo fácil al cerebro del lector
permitiéndole absorber el mensaje sin esfuerzo.


3. Autopista Visual: Jerarquía de Enfoque

El espacio negativo funciona como las líneas de una autopista: no son el destino
##### guían al auto para que no se desvíe

```
[ Espacio Vacío ]  ➡️  1. PROPUESTA ÚNICA DE VALOR (Título grande)
                                │
                        [ Espacio Vacío ]
                                │
                                ▼
                        2. HERO SHOT (El teléfono con tu interfaz limpia)
                                │
                        [ Espacio Vacío ]
                                │
                                ▼
 [ Espacio Vacío ]  ➡️  3. BOTÓN DE ACCIÓN / QR (La descarga)
```

secreto:
El espacio vacío actúa como un reflector en un escenario oscuro
Si todo el escenario está iluminado (lleno de texto), nadie sabe a dónde mirar
##### Si apagas las luces y dejas un solo foco sobre el actor (el título o el QR), el 100% de las miradas van ahí


Rs:

Ej:

1. Un `Hero Shot` limpio enfocado en el "Check" y la satisfacción.

2. Una `UVP` potente centrada en resolver el día a día sin complicaciones.

3. `Fricción cero` mediante un acceso directo y claro.

4. `Disparadores de confianza` que eliminen los miedos del usuario.

5. `3 Beneficios humanos directos` en lugar de tecnicismos.

6. Un `diseño minimalista con mucho aire` para que todo lo anterior resalte


Regla de Marketing de Apps:
#### El flyer no tiene que vender toda la aplicación
##### !!! solo tiene que convencer al usuario de que vale la pena escanear el código para ver más



# Diseño gráfico del flyer app

## Conceptos

Encargado de traducir toda esa psicología de marketing en formas, fuentes, colores y espacios que entren por los ojos de inmediato
En el diseño gráfico de un flyer para una aplicación móvil
##### todo se basa en principios de composición visual que buscan un impacto estético limpio y moderno


1. Jerarquía Visual: orden de lectura

##### Es el arte de decidir qué va a ver el usuario primero, segundo y tercero mediante el uso del tamaño, el peso de las letras y la ubicación.

`se aplica`: El título (UVP) se lleva el tamaño de letra más grande y grueso
el Hero Shot (teléfono) se lleva el protagonismo del espacio central
y los textos secundarios o legales se diseñan en tamaños pequeños y sutiles


2. Contraste Cromático: Psicología del color

No se eligen colores "porque quedan lindos"
##### colores por cómo contrastan entre sí y qué transmiten.

`se aplica`:
Como las apps modernas suelen usar entornos oscuros
el flyer utiliza un fondo oscuro sólido
##### pero genera puntos de luz o acentos con colores de alta visibilidad
(como el azul eléctrico de los checks o botones)
##### para iluminar los elementos donde el usuario tiene que hacer clic o escanear


3. Maridaje Tipográfico: Fuentes Modernas

##### En tecnología, la tipografía define la personalidad del producto
usar máximo dos familias tipográficas que contrasten bien entre sí.

`se aplica`:
Se descartan por completo las fuentes clásicas con serifas (como Times New Roman)
se eligen fuentes Sans-Serif (como Inter, Roboto o SF Pro).
##### Son limpias, geométricas, ultra legibles en tamaños chicos y transmiten modernidad y fluidez técnica


4. Composición, Peso y Balance

##### Es la distribución de los elementos en el lienzo para que el diseño no se sienta "pesado" de un solo lado o se caiga visualmente

`se aplica`:
##### Se suele usar un balance asimétrico muy elegante
por ejemplo, los textos alineados a la izquierda en la mitad superior
el smartphone con el Hero Shot rompiendo el lienzo en la mitad derecha o inferior
##### equilibrando el peso del texto con la fuerza visual de la imagen


5. Profundidad y Capas (Efecto 3D)

##### Un flyer plano es aburrido
El diseño gráfico moderno busca que la interfaz de la app "cobre vida" en el papel o la pantalla mediante capas sutiles.

`se aplica`:
Se usan sombras paralelas muy suaves (drop shadows)
sutiles gradientes de luz de fondo o efectos de cristal de fondo
#####Esto hace que el dispositivo parezca flotar con tridimensionalidad sobre el flyer, despegándose del fondo


6. Grilla y Alineación: estructura invisible
 
Aunque el usuario no la vea
##### todo el diseño se monta sobre una cuadrícula matemática estricta

`se aplica`:
Nada flota al azar
El borde izquierdo del título se alinea perfectamente con el borde de los iconos de los beneficios
el QR se alinea con los márgenes del flyer
Esto crea una sensación inconsciente de orden, prolijidad y profesionalismo


Rs:
El diseño gráfico de apps se aleja de lo recargado
Su meta es la sofisticación geométrica
usar la menor cantidad de elementos posibles
pero estructurados con tanta precisión que el resultado se sienta premium, tecnológico y limpio



## Diseño real del flyer

### 1. Jerarquía Visual: orden de lectura

Opciones:

1. El Flujo Vertical Directo (Lectura en "I")
estructura es excelente para folletos clásicos (verticales) o publicaciones digitales de redes sociales
Guía el ojo de arriba hacia abajo en una sola línea limpia.

`1º Ojo (Foco Principal)`:
El título de la UVP grande y centrado arriba (ej: "Un día a la vez, sin complicaciones").

`2º Ojo (Evidencia Visual)`:
El celular con la pantalla/vista, flotando justo debajo del título
El ojo cae naturalmente de las palabras a la imagen de la app.

`3º Ojo (Argumentación)`:
Tres columnas cortas o tres filas bien espaciadas debajo del celular
detallando los 3 beneficios humanos (rapidez, limpieza, privacidad).

`4º Ojo (Cierre de Acción)`:
La base del flyer, donde se coloca el código QR centrado junto a los disparadores de confianza ("4.9 ★★★★★").


2. El Balance Cruzado (Lectura en "Z")
Esta opción es la más utilizada en el marketing de aterrizaje (landing pages) y flyers modernos
Juega con la tendencia natural de Occidente de leer de izquierda a derecha y de arriba a abajo

`1º Ojo (El Gancho)`:
Esquina superior izquierda
El logo estilizado de Today app seguido inmediatamente por el título principal (UVP) en tipografía pesada

`2º Ojo (El Peso Visual)`:
Mitad derecha completa del flyer
El smartphone con el Hero Shot de la app de forma masiva
rompiendo los márgenes para dar tridimensionalidad
El ojo viaja del título hacia la derecha para ver cómo es la app

`3º Ojo (El Detalle)`:
Mitad inferior izquierda (abajo del título).
Los 3 beneficios clave ordenados en una lista vertical muy limpia
con iconos azules a juego con los de la app

`4º Ojo (El Anclaje)`:
Esquina inferior derecha (debajo del celular).
El código QR con el llamado a la acción
El recorrido visual termina exactamente donde el usuario puede tomar acción para descargarla


3. Enfoque "Producto Primero" (Invertido)
Esta estructura rompe el molde tradicional y pone el peso absoluto en la interfaz estética de tu aplicación
Es ideal si queremos que el diseño oscuro y limpio de la app sea el que enamore a primera vist<

`1º Ojo (Impacto de Pantalla)`:
El smartphone se muestra gigante y ligeramente inclinado en el centro del lienzo, ocupando casi el 60% del flyer
El ojo va directo al cuadro azul de "Mis Tareas".

`2º Ojo (La Promesa)`:
El título (UVP) se ubica justo al lado o superpuesto elegantemente en el fondo con letras blancas
que contrasten con el fondo oscuro

`3º y 4º Ojo (Conversión Minimalista)`:
Los beneficios se reducen a palabras clave ultra cortas alrededor del teléfono
y la base se reserva por completo para un QR limpio aislado por mucho espacio vacío.


Rs contenido de Jerarquía:

Nivel 1: Título de la UVP (Mensaje emocional).
Nivel 2: Imagen del Teléfono (Interfaz real de la app).
Nivel 3: Los 3 Beneficios (El porqué la necesitan).
Nivel 4: QR + Estrellas de confianza (El cierre seguro).



### 2. Contraste Cromático: Psicología del color

colores para guiar el ojo y despertar emociones
aplicación ya tiene una identidad visual
modo oscuro impecable (grises y azules muy profundos) con un azul eléctrico brillante

1. Oscuro Premium: Inmersión Total

Consiste en replicar exactamente la atmósfera dark mode de la app en todo el lienzo del flyer

`Fondo del flyer`:
mismo tono azul/gris casi negro del fondo de tu app.

`Texto principal`:
Blanco puro para la Propuesta de Valor
garantizando una legibilidad del 100%.

`Color de Acento (El imán)`:
El azul eléctrico
Este color se reserva únicamente para tres cosas:
el marco del QR, los iconos de los 3 beneficios y la palabra clave del título.

`Psicología`:
El negro/azul oscuro transmite sofisticación, elegancia y profesionalismo
Al público general le da la sensación de ser una herramienta "premium" y moderna
Además, cansa mucho menos la vista al mirarlo en pantallas


2. Efecto Neón / Aura Lumínica: Contraste de Profundidad

Mantiene la base oscura
pero añade una fuente de luz artificial detrás del teléfono para despegarlo del fondo

`Fondo del flyer`: Gris oscuro mate

`truco gráfico`:
Justo detrás del Hero Shot (el smartphone),
colocamos un degradado radial suave (un resplandor o aura)
que vaya del azul eléctrico de tu app hacia la transparencia

`Psicología`:
El azul brillante genera calma, confianza y tecnología
Al ponerle ese "brillo" por detrás al teléfono, creás un efecto 3D inmediato
El ojo del usuario es atraído por la luz hacia el centro del flyer
haciendo imposible ignorar la pantalla de tu app.


3. Minimalismo Stark: Alto Contraste Dual

##### Enfoque más radical y directo, inspirado en marcas tecnológicas de vanguardia

Fondo del flyer: Negro absoluto (#000000).

Textos y Elementos: Blanco tiza para los textos y gris muy tenue para las líneas divisorias.

toque de color: azul eléctrico se usa con extrema escasez
Solo se pinta de azul el botón de acción final (el llamado a la descarga) o el código QR.

Psicología: Al eliminar distractores y usar el negro puro
el flyer grita "eficiencia extrema".
Es ideal para transmitir que Today app es una herramienta rápida, ligera y enfocada en eliminar el ruido mental del usuario


Ej: Opción 2 (Efecto Neón / Aura Lumínica)
la que mejor va a funcionar. Al tener una interfaz oscura
si usás un fondo completamente plano (como la Opción 1),
el teléfono podría mimetizarse demasiado y perder impacto
Ese sutil resplandor azul detrás del celular va a hacer que la pantalla de tus capturas se destaque de una manera increíble



### 3. Maridaje Tipográfico: Fuentes Modernas

el logo principal de Today app utiliza una fuente de estilo script (cursiva/manuscrita) muy amigable
mientras que todo el resto de la interfaz (los textos de "Mis Tareas", los botones y los filtros) usa una tipografía sans-serif limpia, geométrica y moderna

Para el flyer publicitario enfocado al público general
el logo se mantiene con su fuente original
pero para los textos de marketing (la Propuesta de Valor, los beneficios y los llamados a la acción)
necesitamos un maridaje tipográfico que mantenga esa estética tecnológica, limpia y legible.


1. Estilo Tech: Inter + Plus Jakarta Sans

combinación reina en el diseño de interfaces y marketing digital de vanguardia
Es ultra limpia y grita "profesionalismo".

`Título (UVP)`: Inter (en peso Bold o Extra Bold).
Es una fuente diseñada específicamente para pantallas; es robusta
muy seria y tiene una simetría perfecta que transmite orden inmediato

`Cuerpo (Beneficios y QR):`: Plus Jakarta Sans (en peso Regular o Medium).
Es una tipografía con una sutil personalidad moderna, muy abierta y aireada
lo que la hace sumamente fácil de leer en tamaños pequeños sobre fondos oscuros.


2. Geometría Amigable: Poppins + Inter

busca suavizar la estética tecnológica para hacerla más cercana
y atractiva para el usuario común que busca simplicidad

Título (UVP): Poppins. Semi Bold o Bold
Es una fuente puramente geométrica
Sus letras redondas (como la 'o' o la 'p') son círculos casi perfectos
Transmite dinamismo, juventud y es muy agradable a la vista

Cuerpo (Beneficios y QR): Inter (en peso Regular).
Al ser más neutra, equilibra la fuerte personalidad redondeada de Poppins
haciendo que los bloques de texto secundarios se vean ordenados y descansados


3. Fuerza y Contraste: Montserrat + Roboto

clásico del diseño que nunca falla
cuando se busca un impacto visual fuerte y directo en soportes publicitarios.

Título (UVP): Montserrat (en peso Black o Heavy).
Es una fuente inspirada en los carteles urbanos tradicionales
Es ancha, pesada y tiene muchísima fuerza visual
En mayúsculas o minúsculas, se adueña del primer lugar en la jerarquía de lectura

Cuerpo (Beneficios y QR): Roboto (en peso Regular).
Desarrollada por Google, es una fuente Neo-Grotesca muy estructurada
Su diseño ligeramente condensado permite meter información de forma muy prolija sin que se sienta apretada


Modo Oscuro en Tipografía:
Al diseñar un flyer con fondo oscuro, ocurre un fenómeno óptico: el texto blanco o brillante sobre fondo negro parece expandirse
y verse más grueso de lo que realmente es (efecto de irradiación).

Por eso, para los textos de los beneficios y datos del QR, la regla de oro es darle un poquito de "aire" horizontal
(aumentar el letter-spacing o tracking un 2% o 3%) y evitar usar pesos ultra-delgados (Thin o Light)
ya que el fondo oscuro se los puede "comer" y dificultar la lectura a la distancia.




### 4. Composición, Peso y Balance

##### se encargan de la física invisible del flyer
un diseño necesita distribuir sus elementos visuales para que el ojo no se sienta "pesado" o incómodo al mirarlo

El desafío es colocar los textos y el QR para contrarrestar ese peso y lograr un diseño perfectamente equilibrado

Opciones:


1. Balance Asimétrico (Split Moderno): Izquierda / Derecha

Disposición más corporativa y tecnológica
Divide el flyer mentalmente en dos mitades verticales

Lado Izquierdo (Carga textual):
Colocamos el título (UVP) arriba, los 3 beneficios en el medio y el código QR abajo a la izquierda

Lado Derecho (Carga visual):
Colocamos el smartphone con la captura, ocupando todo el alto de la mitad derecha.

#### Lograr balance
Aunque el texto parece "más ligero" que una imagen
al usar tipografía blanca y gruesa (Bold) sobre el fondo oscuro
el bloque de texto de la izquierda logra igualar el peso visual del teléfono de la derecha
El diseño se siente estable y súper prolijo.


2. Balance Simétrico (Eje Central): Efecto Póster

Esta opción es pura estabilidad y minimalismo
Ideal si querés transmitir que la app es un oasis de orden y calma

Distribución
Todos los elementos se alinean rigurosamente al centro del flyer

Arriba: Título principal centrado.

Centro: El smartphone en vista totalmente frontal, bien grande, dominando el corazón del flyer.

Abajo: Los 3 beneficios distribuidos en tres columnas sutiles una al lado de la otra, y debajo de ellos, el QR centrado con las estrellas de confianza.

Balance: Es un espejo matemático
El peso se distribuye equitativamente de izquierda a derecha
Para que no sea aburrido, el "teléfono" del centro debe ser el rey absoluto, usando el resplandor azul de fondo
para darle tridimensionalidad


3. Balance Dinámico: Perspectiva Flotante (Tensión Visual)

##### opción es más arriesgada y moderna
muy utilizada en la publicidad de aplicaciones de productividad de última generación

Distribución: Rompemos la grilla recta.

smartphone
se coloca en la esquina inferior derecha, pero rotado unos 15 grados en perspectiva 3D e inclinado

título principal (UVP) se coloca en la esquina superior izquierda

Balance:
Al inclinar el teléfono, generás una línea diagonal imaginaria que cruza el flyer.
El peso masivo del teléfono abajo a la derecha se compensa dinámicamente con el espacio vacío (espacio negativo)
arriba a la derecha y la fuerza del título arriba a la izquierda
Es un diseño que transmite movimiento, velocidad y modernidad


Rs: peso visual para fondos oscuros
Como el fondo de tu app es oscuro, si elegimos un fondo oscuro para el flyer, las zonas con texto blanco van a brillar mucho.

Si elegimos la Opción 1 (Split), el flyer se lee como un libro de izquierda a derecha de forma impecable.

Si elegimos la Opción 3 (Dinámica), el flyer se va a ver increíblemente moderno y estilizado, ideal para captar la atención de un público joven o del sector tecnológico.



### 5. Profundidad y Capas (Efecto 3D)

##### El secreto para que un flyer no parezca un diseño aburrido, plano o amateur
En el marketing de aplicaciones, este concepto sirve para simular que el teléfono y la interfaz son objetos reales, tangibles y modernos
que "flotan" sobre el lienzo, generando un impacto visual mucho más inmersivo.

donde los bloques de tareas ya están contenidos en tarjetas con sutiles bordes redondeados
tenemos la estructura perfecta para jugar con la tridimensionalidad.


1. Elementos "Pop-out": interfaz que escapa

Es una de las tendencias más fuertes y vistosas en el diseño de apps actual
Consiste en romper la barrera de la pantalla del teléfono

idea: 
smartphone
está de fondo, pero extraemos un elemento de la interfaz
(por ejemplo, la fila de la tarea realizada con su check azul brillante o el botón de "Añadir")
y lo hacemos flotar físicamente por fuera del teléfono, un nivel más arriba.

3D:
Se le aplica una sombra paralela (drop shadow) más fuerte y definida a ese elemento suelto que al propio teléfono
El ojo interpreta que esa tarea está suspendida en el aire, flotando hacia el usuario.


2. Elevación por Sombra Ambiental: Soft Shadows

enfoque más sutil, elegante y purista
Se basa en las reglas del diseño de interfaces moderno (Material Design / Apple Design Guidelines).

idea:
El teléfono se coloca completo en el flyer
pero simulamos que hay una fuente de luz blanca viniendo desde la esquina superior izquierda del lienzo

3D:
Detrás del smartphone se proyecta una sombra extremadamente suave
difusa y larga hacia la derecha y abajo
No es una sombra negra y dura, sino un degradado grisáceo transparente muy sutil
Esto hace que el teléfono parezca despegarse unos centímetros del fondo del flyer
cobrando un volumen espectacular


3. Superposición de Tarjetas en cristal
juega con la profundidad del fondo
creando capas texturizadas detrás del dispositivo.

idea:
El fondo del flyer es oscuro
pero justo detrás del teléfono colocamos una o dos tarjetas geométricas semi-transparentes que imitan el vidrio esmerilado

3D:
Estas tarjetas desenfocan suavemente lo que hay detrás y dejan traslucir un poco del resplandor azul de la app
Al colocar el teléfono arriba de esta capa de "cristal", creás tres niveles de profundidad claros
Fondo oscuro ➡ Tarjeta de cristal ➡ Smartphone.


Ej: Opción 1 (Elementos Pop-out) combinada con la Opción 2 (Sombra Ambiental)
Si hacés que el teléfono flote con una sombra suave
y además sacás el cuadro de "Mis Tareas" o el "Check azul" un poquito hacia afuera de la pantalla 
el flyer va a tener una fuerza visual tremenda que obligará a cualquiera a detener la mirada



### 6. Grilla y Alineación: estructura invisible

Estructura del flyer
Aunque el público general no note las líneas de la cuadrícula
su cerebro percibe inmediatamente el orden matemático

Si las cosas están desalineadas aunque sea por un par de píxeles
el flyer se siente "barato" o descuidado

En cambio, una alineación milimétrica transmite la sensación de que la aplicación detrás de ese flyer está bien programada
es robusta y es confiable

Ej: la aplicación ya tiene una estructura interna de bloques impecable, con contenedores de bordes redondeados y textos perfectamente alineados a la izquierda (como en la sección "Categorías" o las tareas).
El flyer debería heredar esa misma disciplina visual.


1. Grilla Suiza Estricta (Alineación a Ras)

enfoque clásico del diseño minimalista europeo
Se basa en un eje vertical implacable a la izquierda.

Funcionamiento:
Se traza una línea invisible (un margen generoso) en el lado izquierdo del flyer
El logotipo, el primer carácter de la UVP (título),
los iconos de los 3 beneficios y el borde del bloque de texto inferior se alinean exactamente sobre esa misma línea
Nada se desplaza ni un milímetro

Balance con el Hero Shot:
El smartphone se coloca a la derecha, y su borde superior se alinea perfectamente con la línea base del título
mientras que su borde inferior se alinea con la base del código QR

Funcionamiento:
Transmite una tremenda sensación de ingeniería, limpieza y seriedad técnica
Ideal para una app de productividad porque el orden del flyer refleja el orden que la app promete darle a tu día


2. Sistema de Bloques Modulares
Tendencia absoluta en el diseño de interfaces de marcas como Apple o Microsoft
se adapta de forma nativa a la identidad de tu app.

Funcionamiento: 
El flyer se divide en "tarjetas" o contenedores independientes con bordes redondeados
(copiando el estilo de los bloques oscuros que ves en tus capturas de pantalla).

Un bloque grande y vertical contiene el celular.
Un bloque horizontal arriba contiene la UVP.
Un bloque alargado contiene los 3 beneficios.
Un bloque cuadrado pequeño abajo contiene el QR.

Alineación:
Todos estos bloques se separan por una distancia idéntica
(por ejemplo, un espacio de 16px o 24px entre tarjeta y tarjeta).

Funcionamiento: ultra moderno
Visualmente le comunica al usuario cómo funciona la app antes de leerla
es modular, organizada y estructurada por categorías


3. Grilla Dinámica "Asimétrica": Regla de Tercios

Divide el lienzo en una matriz de 3x3 líneas invisibles y coloca los elementos clave en las intersecciones
(los puntos de mayor impacto visual para el ojo humano).

Funcionamiento:
El celular con tu interfaz no se centra
se desplaza ocupando exactamente los dos tercios de la derecha
El texto de la UVP ocupa el tercio superior izquierdo
y los beneficios caen en el tercio medio izquierdo

Alineación:
Los elementos se alinean buscando el "peso de compensación".
Si el teléfono abajo a la derecha es muy pesado,
se deja el tercio superior derecho completamente vacío (espacio negativo puro) para que el diseño respire

Funcionamiento:
Se siente menos rígido y más artístico
Atrae la mirada de forma muy fluida y orgánica
guiando el recorrido visual en la "Z"


#### Regla profesional: Independientemente de la opción, los márgenes externos del flyer
(el aire que queda entre los elementos y el borde físico del lienzo)
deben ser exactamente iguales arriba, abajo, a la izquierda y a la derecha
Eso encuadra el diseño y lo hace lucir.




# Config Técnica de Configuración (Para el Canvas)


#### Medidas sugeridas: 1080 x 1350 px (Formato vertical de alto impacto, ideal para pantallas y distribución digital).

#### Colores base:

Fondo del flyer:
Azul/gris oscuro profundo (tomado del fondo de la app).

Color de acento:
Azul eléctrico (tomado de los botones de check de la interfaz).

Textos:
Blanco puro (#FFFFFF) para títulos y Gris claro (#9CA3AF) para descripciones.


#### Tipografías:

Inter (para títulos pesados) y Plus Jakarta Sans (para los bloques de beneficios).


### Estructura de Capas y Composición

1. Capa 1 (Fondo): Fondo sólido oscuro
En la mitad derecha del lienzo, un degradado radial (brillo/aura)
muy suave en color azul eléctrico que se desvanece hacia los bordes.

2. Capa 2 (Textos y Datos): Toda la información alineada
estrictamente a la izquierda ocupando el 50% izquierdo del flyer

3. Capa 3 (Hero Shot - El Teléfono):
En la mitad derecha, centrado sobre el aura azul
un mockup de smartphone moderno en color negro o gris oscuro.

4. Capa 4 (Efecto 3D Pop-Out):
El bloque superior de la interfaz de la app
("Mis Tareas" junto con la fila de la tarea resuelta con el check azul) se duplica
se agranda un 5% y se extrae por fuera de la pantalla del teléfono hacia la izquierda
aplicando una sombra paralela difusa para que parezca flotar sobre el flyer.


Copywriting
texto exacto organizado por su jerarquía de lectura en el diseño:

1. `Bloque Superior Izquierdo - El Gancho`

Micro-texto de confianza
confianza (Tamaño 14pt, Gris claro, Mayúsculas, Tracking +3%):
+10,000 PERSONAS YA SIMPLIFICARON SU RUTINA


2. `Bloque Central Izquierdo - La Promesa`

Título Principal / UVP
(Tamaño 56pt, Inter Bold, Blanco, Alineado a la izquierda):
Tu día, sin rodeos

Subtítulo
(Tamaño 18pt, Plus Jakarta Sans Regular, Gris claro):
"Una interfaz limpia y oscura diseñada para lo único que importa: anotar tus pendientes, filtrarlos al instante y liberar espacio mental."


3. `Bloque Inferior Izquierdo - Los 3 Beneficios Humanos`

(Dispuestos verticalmente, cada uno precedido por un micro-icono de check azul eléctrico idéntico al de la app)

Productividad inmediata:
Tomá el control de tus asuntos en menos de dos minutos.

Enfoque absoluto:
Filtrá por categorías y eliminá el ruido visual de un solo toque.

Paz mental:
Sin anuncios molestos y con privacidad absoluta. Tus datos son tuyos.


`Bloque de Cierre - Pie del Flyer`

Texto de validación:
Tamaño 16pt, Inter SemiBold, Blanco, centrado debajo de los beneficios
4.9 ★★★★★ de valoración en tiendas de aplicaciones



## SVG exportable a png

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1350" width="1080" height="1350" style="background-color: #0b0f17; font-family: 'Inter', system-ui, -apple-system, sans-serif;">
  
  <!-- DEFINICIONES: Gradientes y efectos -->
  <defs>
    <!-- El aura azul eléctrico para el Hero Shot de la derecha -->
    <radialGradient id="blueAura" cx="70%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0052ff" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#0b0f17" stop-opacity="0"/>
    </radialGradient>
    
    <!-- Sombra suave para el efecto 3D del teléfono -->
    <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
      <drop-shadow dx="10" dy="20" stdDeviation="25" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- CAPA 1: Resplandor de fondo (Aura) -->
  <rect width="1080" height="1350" fill="url(#blueAura)" />

  <!-- CAPA 2: Textos (Mitad Izquierda) -->
  <!-- Margen izquierdo estricto a 100px -->
  <g transform="translate(100, 0)">
    
    <!-- Social Proof / Cintillo superior -->
    <text y="220" fill="#9CA3AF" font-size="14" font-weight="700" letter-spacing="3" font-family="monospace">
      +10,000 PERSONAS YA SIMPLIFICARON SU RUTINA
    </text>
    
    <!-- Propuesta Única de Valor (UVP) -->
    <text y="320" fill="#FFFFFF" font-size="64" font-weight="800" letter-spacing="-1">
      Tu día, sin rodeos.
    </text>
    
    <!-- Subtítulo / Bajada -->
    <text y="390" fill="#9CA3AF" font-size="20" font-weight="400" width="450">
      <tspan x="0" dy="0">Una interfaz limpia y oscura diseñada para lo</tspan>
      <tspan x="0" dy="28">único que importa: anotar tus pendientes, </tspan>
      <tspan x="0" dy="28">filtrarlos al instante y liberar espacio mental.</tspan>
    </text>
    
    <!-- Bloque de Beneficios (Con viñetas simulando el check azul) -->
    <g transform="translate(0, 560)">
      <!-- Beneficio 1 -->
      <circle cx="15" cy="5" r="12" fill="#0052ff" />
      <path d="M10 5 L14 9 L20 2" stroke="#FFFFFF" stroke-width="2" fill="none" />
      <text x="45" y="12" fill="#FFFFFF" font-size="20" font-weight="700">Productividad inmediata</text>
      <text x="45" y="38" fill="#9CA3AF" font-size="16">Tomá el control de tus asuntos en menos de dos minutos.</text>
      
      <!-- Beneficio 2 -->
      <g transform="translate(0, 90)">
        <circle cx="15" cy="5" r="12" fill="#0052ff" />
        <path d="M10 5 L14 9 L20 2" stroke="#FFFFFF" stroke-width="2" fill="none" />
        <text x="45" y="12" fill="#FFFFFF" font-size="20" font-weight="700">Enfoque absoluto</text>
        <text x="45" y="38" fill="#9CA3AF" font-size="16">Filtrá por categorías y eliminá el ruido visual de un toque.</text>
      </g>
      
      <!-- Beneficio 3 -->
      <g transform="translate(0, 180)">
        <circle cx="15" cy="5" r="12" fill="#0052ff" />
        <path d="M10 5 L14 9 L20 2" stroke="#FFFFFF" stroke-width="2" fill="none" />
        <text x="45" y="12" fill="#FFFFFF" font-size="20" font-weight="700">Paz mental</text>
        <text x="45" y="38" fill="#9CA3AF" font-size="16">Sin anuncios molestos y con privacidad absoluta. Tus datos son tuyos.</text>
      </g>
    </g>
    
    <!-- Disparador de Confianza Inferior -->
    <text y="1150" fill="#FFFFFF" font-size="18" font-weight="600">
      4.9 ★★★★★ <tspan fill="#9CA3AF" font-weight="400"> de valoración en tiendas de aplicaciones</tspan>
    </text>
  </g>

  <!-- CAPA 3: Placeholder para el Hero Shot (Mitad Derecha) -->
  <!-- Aquí es donde colocarías el recorte del smartphone con la captura de la app -->
  <g transform="translate(680, 675) rotate(-5)" filter="url(#dropShadow)">
    <!-- Cuerpo del teléfono simulado -->
    <rect x="-180" y="-350" width="360" height="700" rx="40" fill="#1e293b" stroke="#334155" stroke-width="4" />
    <!-- Pantalla interna -->
    <rect x="-165" y="-335" width="330" height="670" rx="25" fill="#0f172a" />
    
    <!-- Texto guía para el diseño visual -->
    <text x="0" y="0" fill="#475569" font-size="16" font-weight="700" text-anchor="middle">
      [ Inserta aquí la captura ]
    </text>
    <text x="0" y="25" fill="#334155" font-size="12" text-anchor="middle">
      Screenshot 2026-07-06
    </text>
  </g>
  
</svg>

```



# Flyer para github

## Estrategia

1. Target Técnico (Reclutadores y Tech Leads)

A diferencia del flyer masivo, aquí tu cliente ideal
##### busca competencia técnica, orden y modernidad.

estrategia:
El banner no debe vender "humo" ni verse como una publicidad invasiva de internet
##### Debe lucir como el encabezado de un producto de software serio, maduro y profesional
##### El tono pasa de ser puramente emocional a ser funcional y arquitectónico.


2. Contexto Inmediato: regla de los 2 segundos

Cuando alguien entra a tu repositorio
##### el banner debe responder tres preguntas críticas de un solo vistazo

#### Qué es este proyecto? (Nombre y categoría).

#### Qué problema resuelve? (Propuesta de valor técnica/funcional).

#### Está terminado y vivo? (Sensación de producto listo para producción).


3. Validación de Stack: palabras claves

Los reclutadores buscan tecnologías específicas (keywords) para filtrar candidatos
Si la descripción del puesto dice "React y TypeScript", eso es lo primero que sus ojos necesitan rastrear

estrategia
##### El banner debe integrar de manera orgánica los logos o nombres del stack principal
(por ejemplo: React, Vite, TypeScript).
Esto actúa como una certificación visual instantánea:
el visitante sabe que está en el lugar correcto sin tener que buscar el archivo package.json.


4. Banner como Portal (Call to Action Web)

GitHub no hay papel ni cámaras de celular escaneando
El banner es un elemento interactivo dentro de un navegador web

estrategia:
El banner debe diseñarse pensando en que será un enlace directo a la aplicación en vivo (Live Demo).
##### En el marketing de repositorios, reducir la fricción significa que el reclutador pueda hacer clic en tu banner y ver la aplicación funcionando en Vercel, Netlify o GitHub Pages de inmediato


5. El Concepto de "Readme Hero Shot"

En el flyer general usábamos el teléfono completo para simular realidad
En GitHub, el formato es horizontal y la pantalla del usuario suele ser una computadora

estrategia:
En lugar de mostrar un celular entero que obligaría a recortar la imagen o achicarla
se utiliza un "recorte de pantalla de escritorio" o una composición donde la interfaz de la app se asoma de forma horizontal
destacando componentes específicos (como tu sistema de filtros por categorías o la barra de búsqueda limpia).
Muestra la calidad del código a través de la fineza de la interfaz



## Diseño gráfico banner horizontal

En el README de un portafolio profesional de desarrollo
el banner no es solo un adorno; es una declaración de intenciones de ingeniería y diseño gráfico aplicado

1. Relación de Aspecto Horizontal y Flujo Lateral (Ratios 3:1 o 4:1)

En pantallas de escritorio, el lienzo se estira considerablemente (las medidas estándar para GitHub suelen ser 1280 x 420 px o 1200 x 400 px).

concepto:
Se abandona la lectura vertical y se adopta un flujo estrictamente lateral de izquierda a derecha
El diseño debe estructurarse para que el ojo realice un recorrido limpio:
el texto y la información técnica anclan la mirada en el extremo izquierdo
y el peso visual gráfico se desplaza hacia el extremo derecho.


2. Integración Dinámica de "Badges" e Isotipos: Stack Tecnológico

Para un perfil técnico que busca destacar en la industria, las tecnologías no son solo texto
son elementos de diseño gráfico

concepto:
Los logos de herramientas como React, Vite o TypeScript se tratan como micro-componentes visuales
Se deben alinear perfectamente usando una grilla horizontal
manteniendo una escala uniforme y un espacio idéntico entre ellos (gap constante).
No deben competir en tamaño con el título
sino actuar como una firma visual de arquitectura moderna en la base del texto.


3. Adaptabilidad al Entorno

GitHub es una plataforma viva que los usuarios configuran en modo claro o modo oscuro
El banner vivirá embebido en este entorno web.

concepto:
Para asegurar que el banner se vea impecable sin importar la configuración del visitante
se aplica un diseño con un fondo sólido y cerrado (como el azul/gris profundo de la aplicación)
delimitado por un sutil borde perimetral, o se trabaja con transparencias milimétricas
Al mantener un fondo propio y oscuro, la interfaz de la aplicación conserva su atmósfera premium nativa


4. Encuadre de Interfaz Estilizado: Browser Mockup vs. Celular

Colocar un smartphone completo y vertical en un banner horizontal obliga a reducir tanto su tamaño
que la interfaz de la app se vuelve ilegible, rompiendo la composición.

concepto:
Se utiliza el concepto de recorte de ventana (Browser Mockup) o un zoom enfocado
En lugar de mostrar todo el dispositivo, se toma la sección más limpia de la interfaz de escritorio o móvil y se expande de manera horizontal en el lado derec
Se puede encapsular en una estructura que simule una ventana de navegador web minimalista con tres micro-botones en la esquina superior
transmitiendo prolijidad en el desarrollo web


5. Equilibrio Asimétrico de Pesos

formato horizontal es muy propenso a verse "vacío" o "aburrido" si se centra todo de forma simétrica

concepto:
Se aplica un balance asimétrico donde el bloque de texto izquierdo
(Título + Subtítulo técnico) equilibra la masa visual del elemento gráfico de la derecha
(la captura de la app). Al usar un fondo oscuro común, el espacio negativo
(el vacío que queda en el centro del banner) actúa como el conector invisible
que permite que ambos bloques respiren sin saturar la pantalla del reclutador


6. Tipografía Escalada para Pantallas (Legibilidad a Corta Distancia)

El usuario que lee un README está frente a un monitor a pocos centímetros de distancia
buscando procesar información rápidamente.

concepto:
Se busca un contraste tipográfico marcado. El título del proyecto requiere una fuente sans-serif geométrica con un peso muy pesado
(Bold o Black) para fijar el nombre de inmediato
mientras que los textos de soporte técnico se diseñan con un tamaño considerablemente menor
y un espaciado horizontal (tracking) ligeramente amplio
reflejando la limpieza de un entorno de desarrollo minimalista.



## Ficha Técnica de Configuración para el Canvas horizontal

para que el lienzo horizontal tenga las proporciones exactas y los colores perfectamente calibrados con la identidad de la aplicación

A diferencia del flyer, acá configuramos el espacio pensando en monitores y en la densidad de píxeles ideal
para que los textos de arquitectura técnica y los componentes visuales se vean ultra nítidos.


1. Dimensiones y Lienzo (Canvas)

`Tamaño Recomendado`: 1280 x 420 px

`Relación de Aspecto`: ~3:1
(El estándar de oro para encabezados de repositorios en GitHub que no saturan la pantalla al cargar la página).

`Resolución`: 72 ppi (píxeles por pulgada) es suficiente para entornos web
pero si lo diseñás en un entorno vectorial como Figma, exportalo a @2x (2560 x 840 px) para que en pantallas Retina o 4K se vea perfectamente nítido


2. Paleta de Colores (Fidelidad de la App)

Para mantener una consistencia absoluta con los entornos oscuros y profesionales
extraemos los tonos directamente de tus capturas de pantalla:

`Fondo Principal`: #0b0f19
Fondo sólido del lienzo (Modo Oscuro)

`Acento Eléctrico`: #0052ff
Resplandor del Hero Shot y color de los Badges técnicos.

`Texto Primario`: #ffffff
Título principal del proyecto (Máximo contraste).

`Texto Secundario`: #9ca3af
Descripciones técnicas y etiquetas secundarias.

`Borde del Contenedor`: #1e293b
Línea perimetral sutil si decidís encuadrar la interfaz.


3. font-family 3. Sistema Tipográfico y Pesos

Combinación Tech-Premium que se adapta perfectamente a la estética limpia de un código bien estructurado

`Fuente Principal (Títulos)`: Inter

Peso para el Nombre de la App:
800 (Extra Bold) o 900 (Black).

Letter-spacing (Tracking): -0.02em
(Letras ligeramente juntas para dar sensación de robustez).


`Fuente Secundaria (Subtítulos y Badges)`:
Plus Jakarta Sans o Sytem Mono (para detalles del stack).

Peso para la descripción: 400 (Regular) o 500 (Medium).

Letter-spacing (Tracking): 0.05em
(Letras un poco más separadas para facilitar la lectura rápida en monitores).


4. Distribución de la Grilla (Layout Asimétrico)

El lienzo se estructura mediante una división asimétrica de espacios utilizando márgenes internos (padding)
estrictos para asegurar el minimalismo:

`Margen de Seguridad Perimetral`:
80 px (Ningún texto o elemento clave toca los bordes del banner).

`Zona Izquierda (55% del ancho)`:
Bloque de información y arquitectura técnica.

Alineación: Todo justificado estrictamente a la izquierda.

Elementos: Título de la app ➡ Subtítulo técnico ➡ Fila horizontal de Badges de tecnologías
(React, Vite, TypeScript).

`Zona Derecha (45% del ancho)`:
Zona de Impacto Visual (Hero Shot).

Elemento: Se presenta recortada limpiamente dentro de una ventana de navegador simulada
que parece asomarse o flotar desde el borde derecho



## SVG estructurado para convertirlo a png

Este diseño implementa de forma exacta los conceptos estratégicos y gráficos que fijamos
una relación de aspecto aproximada de 3:1 (1280 x 420 px), una disposición asimétrica que prioriza el perfil técnico
un fondo oscuro integrado que combina con el entorno de GitHub
una representación vectorizada impecable de la interfaz horizontal

guardalo en un archivo llamado banner.svg
estará listo para subir a tu repositorio o arrastrarlo a herramientas como Figma

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 420" width="1280" height="420" style="background-color: #0b0f17; font-family: 'Inter', system-ui, -apple-system, sans-serif;">
  
  <!-- DEFINICIONES: Efectos, sombras y luces -->
  <defs>
    <!-- Aura azul eléctrico de fondo para iluminar el mockup de la derecha -->
    <radialGradient id="techGlow" cx="80%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#0052ff" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#0b0f17" stop-opacity="0"/>
    </radialGradient>
    
    <!-- Sombra proyectada del navegador para simular elevación 3D -->
    <filter id="browserShadow" x="-10%" y="-10%" width="120%" height="120%">
      <drop-shadow dx="8" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- CAPA 1: Fondo Lumínico Asimétrico -->
  <rect width="1280" height="420" fill="url(#techGlow)" />

  <!-- CAPA 2: Bloque de Información Técnica (Extremo Izquierdo) -->
  <!-- Alineación milimétrica con un margen izquierdo de 80px -->
  <g transform="translate(80, 0)">
    
    <!-- Nombre de la aplicación (Logo tipográfico) -->
    <text y="130" fill="#FFFFFF" font-size="52" font-weight="900" letter-spacing="-1.5">
      Today app
    </text>
    
    <!-- Propuesta de valor técnica (Subtítulo en dos líneas equilibradas) -->
    <text y="185" fill="#9CA3AF" font-size="18" font-weight="400" line-height="1.5">
      <tspan x="0" dy="0">A minimalist, high-performance task manager built for</tspan>
      <tspan x="0" dy="26">clean architecture and structured daily productivity.</tspan>
    </text>
    
    <!-- CAPA 2B: Fila de Badges del Stack Tecnológico (Alineación horizontal con brecha constante) -->
    <g transform="translate(0, 260)">
      <!-- Badge: React -->
      <g transform="translate(0, 0)">
        <rect width="78" height="28" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
        <text x="39" y="18" fill="#0052ff" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="0.5">REACT</text>
      </g>
      <!-- Badge: TypeScript -->
      <g transform="translate(90, 0)">
        <rect width="114" height="28" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
        <text x="57" y="18" fill="#3178c6" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="0.5">TYPESCRIPT</text>
      </g>
      <!-- Badge: Vite -->
      <g transform="translate(216, 0)">
        <rect width="64" height="28" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
        <text x="32" y="18" fill="#ffc517" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="0.5">VITE</text>
      </g>
    </g>
  </g>

  <!-- CAPA 3: Browser Mockup Estilizado (Extremo Derecho) -->
  <!-- Inspirado en la composición de la captura horizontal Screenshot 2026-07-06 at 14-24-05 Today app_2.png -->
  <g transform="translate(680, 50)" filter="url(#browserShadow)">
    
    <!-- Estructura externa del navegador (Ventana contenedora) -->
    <rect width="560" height="320" rx="12" fill="#161d2a" stroke="#222f43" stroke-width="2" />
    
    <!-- Barra superior de control (Estilo ventanas macOS/Linux) -->
    <path d="M0,34 L560,34" stroke="#222f43" stroke-width="1.5" />
    <!-- Botones de cerrar, minimizar y maximizar -->
    <circle cx="20" cy="17" r="5" fill="#ef4444" opacity="0.8" />
    <circle cx="36" cy="17" r="5" fill="#eab308" opacity="0.8" />
    <circle cx="52" cy="17" r="5" fill="#22c55e" opacity="0.8" />
    <!-- Barra de direcciones URL simulada -->
    <rect x="90" y="7" width="380" height="20" rx="6" fill="#0b0f17" opacity="0.6" />
    <text x="280" y="21" fill="#4b5563" font-size="10" text-anchor="middle">localhost:3000</text>

    <!-- CUERPO INTERNO: Replicando la distribución horizontal de la interfaz real -->
    <g transform="translate(0, 34)">
      
      <!-- Panel Izquierdo: Barra lateral de Categorías de la app -->
      <g transform="translate(20, 20)">
        <!-- Título de sección "TAREAS" -->
        <rect width="50" height="8" rx="2" fill="#4b5563" opacity="0.4" />
        <!-- Input "Buscar..." -->
        <rect y="16" width="130" height="24" rx="6" fill="#0b0f17" stroke="#222f43" stroke-width="1" />
        <circle cx="12" cy="28" r="3" stroke="#4b5563" stroke-width="1" fill="none" />
        
        <!-- Sección CATEGORÍAS -->
        <rect y="54" width="70" height="8" rx="2" fill="#4b5563" opacity="0.4" />
        <!-- Fila: Todas (Seleccionada con el check azul) -->
        <g transform="translate(0, 72)">
          <rect width="130" height="24" rx="6" fill="#222f43" opacity="0.4" />
          <circle cx="12" cy="12" r="6" fill="#0052ff" />
          <path d="M9 12 L11 14 L15 10" stroke="#FFFFFF" stroke-width="1.5" fill="none" />
          <rect x="26" y="8" width="40" height="8" rx="2" fill="#FFFFFF" opacity="0.9" />
          <circle cx="118" cy="12" r="7" fill="#0052ff" />
        </g>
        <!-- Fila: Pendientes -->
        <g transform="translate(0, 104)">
          <circle cx="12" cy="12" r="6" stroke="#4b5563" stroke-width="1.5" fill="none" />
          <rect x="26" y="8" width="55" height="8" rx="2" fill="#9CA3AF" opacity="0.6" />
        </g>
        <!-- Fila: Completadas -->
        <g transform="translate(0, 136)">
          <circle cx="12" cy="12" r="6" stroke="#4b5563" stroke-width="1.5" fill="none" />
          <rect x="26" y="8" width="60" height="8" rx="2" fill="#9CA3AF" opacity="0.6" />
        </g>
        
        <!-- Botón inferior: Borrar completadas -->
        <rect y="180" width="130" height="24" rx="6" fill="#0b0f17" stroke="#222f43" stroke-width="1" />
        <rect x="20" y="188" width="90" height="8" rx="2" fill="#9CA3AF" opacity="0.5" />
      </g>

      <!-- Línea divisoria central nativa de la app -->
      <path d="M170,0 L170,286" stroke="#222f43" stroke-width="1" />

      <!-- Panel Derecho: Tablero Principal de Tareas ("Mis Tareas") -->
      <g transform="translate(190, 20)">
        <!-- Contenedor principal azul oscuro -->
        <rect width="350" height="246" rx="10" fill="#001a4d" fill-opacity="0.4" stroke="#002b80" stroke-width="1" />
        
        <!-- Títulos superiores -->
        <text x="175" y="30" fill="#FFFFFF" font-size="16" font-weight="700" text-anchor="middle">Mis Tareas</text>
        <text x="175" y="48" fill="#9CA3AF" font-size="11" text-anchor="middle">Tienes 1 asuntos por resolver hoy.</text>
        
        <!-- Input superior de agregar tarea -->
        <rect x="20" y="64" width="230" height="28" rx="6" fill="#0b0f17" stroke="#003399" stroke-width="1" />
        <rect x="32" y="74" width="110" height="8" rx="2" fill="#4b5563" opacity="0.6" />
        <!-- Botón Añadir -->
        <rect x="260" y="64" width="70" height="28" rx="6" fill="#222f43" />
        <rect x="277" y="74" width="36" height="8" rx="2" fill="#FFFFFF" opacity="0.8" />
        
        <!-- Lista de Tareas Internas -->
        <!-- Tarea 1: Realizada (fix task list) -->
        <g transform="translate(20, 106)">
          <rect width="310" height="34" rx="8" fill="#0b0f17" stroke="#222f43" stroke-width="1" opacity="0.6" />
          <circle cx="16" cy="17" r="7" fill="#0052ff" />
          <path d="M13 17 L15 19 L19 14" stroke="#FFFFFF" stroke-width="1.5" fill="none" />
          <rect x="36" y="13" width="70" height="8" rx="2" fill="#9CA3AF" opacity="0.4" /> <!-- Línea de texto tachada sim -->
          <!-- Icono papelera -->
          <rect x="282" y="11" width="12" height="12" rx="2" fill="#ef4444" opacity="0.3" />
        </g>
        
        <!-- Tarea 2: Pendiente (fix style) -->
        <g transform="translate(20, 150)">
          <rect width="310" height="34" rx="8" fill="#0b0f17" stroke="#002b80" stroke-width="1" />
          <circle cx="16" cy="17" r="7" stroke="#4b5563" stroke-width="1.5" fill="none" />
          <rect x="36" y="13" width="55" height="8" rx="2" fill="#FFFFFF" opacity="0.9" />
          <!-- Icono papelera -->
          <rect x="282" y="11" width="12" height="12" rx="2" fill="#ef4444" opacity="0.3" />
        </g>
      </g>
      
    </g>
  </g>
</svg>

```


#### Integración para GitHub

Para añadir este banner directamente a la parte superior de tu archivo README.md, tienes dos opciones

1. Vía assets del repositorio
Sube el archivo banner.svg a una carpeta de imágenes (ej. assets/)
dentro de tu repositorio y enlázalo al principio del README.md con la siguiente línea de Markdown

`![Today App Banner](assets/banner.svg)`


2. Centrado e Interactivo:
Si deseas que quede perfectamente centrado y actúe como un enlace directo hacia la demo en vivo de tu aplicación
puedes embeberlo usando etiquetas HTML estructuradas

```
<p align="center">
  <a href="https://tu-live-demo.vercel.app">
    <img src="assets/banner.svg" alt="Today App Banner" width="100%">
  </a>
</p>
```


### Ubicación del banner

```
<!-- LÍNEA 1: BANNER HORIZONTAL ANCLADO A LA DEMO EN VIVO -->
<p align="center">
  <a href="https://tu-live-demo.vercel.app">
    <img src="assets/banner.png" alt="Today App Banner" width="100%">
  </a>
</p>

<!-- Una sola línea descriptiva debajo del banner para SEO y contexto rápido -->
> A minimalist, high-performance task manager built for clean architecture and structured daily productivity.

## 🔗 App en vivo / probar app

Aquí puedes ver y probar la aplicación en producción:
* 🌐 **Live Demo:** [Visitar Today App](https://tu-live-demo.vercel.app)

```



### Versión corregida

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 420" width="1280" height="420" style="background-color: #0b0f17; font-family: 'Inter', system-ui, -apple-system, sans-serif;">
  
  <!-- DEFINICIONES: Efectos, sombras y luces -->
  <defs>
    <!-- Aura azul eléctrico de fondo para iluminar el mockup de la derecha -->
    <radialGradient id="techGlow" cx="80%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#0052ff" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#0b0f17" stop-opacity="0"/>
    </radialGradient>
    
    <!-- CORREGIDO: Sombra proyectada del navegador usando feDropShadow -->
    <filter id="browserShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="8" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- CAPA 1: Fondo Lumínico Asimétrico -->
  <rect width="1280" height="420" fill="url(#techGlow)" />

  <!-- CAPA 2: Bloque de Información Técnica (Extremo Izquierdo) -->
  <g transform="translate(80, 0)">
    
    <!-- Nombre de la aplicación (Logo tipográfico) -->
    <text y="130" fill="#FFFFFF" font-size="52" font-weight="900" letter-spacing="-1.5">
      Today app
    </text>
    
    <!-- Propuesta de valor técnica -->
    <text y="185" fill="#9CA3AF" font-size="18" font-weight="400" line-height="1.5">
      <tspan x="0" dy="0">A minimalist, high-performance task manager built for</tspan>
      <tspan x="0" dy="26">clean architecture and structured daily productivity.</tspan>
    </text>
    
    <!-- Fila de Badges del Stack Tecnológico -->
    <g transform="translate(0, 260)">
      <!-- Badge: React -->
      <g transform="translate(0, 0)">
        <rect width="78" height="28" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
        <text x="39" y="18" fill="#0052ff" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="0.5">REACT</text>
      </g>
      <!-- Badge: TypeScript -->
      <g transform="translate(90, 0)">
        <rect width="114" height="28" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
        <text x="57" y="18" fill="#3178c6" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="0.5">TYPESCRIPT</text>
      </g>
      <!-- Badge: Vite -->
      <g transform="translate(216, 0)">
        <rect width="64" height="28" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
        <text x="32" y="18" fill="#ffc517" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="0.5">VITE</text>
      </g>
    </g>
  </g>

  <!-- CAPA 3: Browser Mockup Estilizado (Extremo Derecho) -->
  <g transform="translate(680, 50)" filter="url(#browserShadow)">
    
    <!-- Estructura externa del navegador (Ventana contenedora) -->
    <rect width="560" height="320" rx="12" fill="#161d2a" stroke="#222f43" stroke-width="2" />
    
    <!-- Barra superior de control -->
    <path d="M0,34 L560,34" stroke="#222f43" stroke-width="1.5" />
    <!-- Botones de cerrar, minimizar y maximizar -->
    <circle cx="20" cy="17" r="5" fill="#ef4444" opacity="0.8" />
    <circle cx="36" cy="17" r="5" fill="#eab308" opacity="0.8" />
    <circle cx="52" cy="17" r="5" fill="#22c55e" opacity="0.8" />
    <!-- Barra de direcciones URL simulada -->
    <rect x="90" y="7" width="380" height="20" rx="6" fill="#0b0f17" opacity="0.6" />
    <text x="280" y="21" fill="#4b5563" font-size="10" text-anchor="middle">localhost:3000</text>

    <!-- CUERPO INTERNO: Interfaz de la app -->
    <g transform="translate(0, 34)">
      
      <!-- Panel Izquierdo: Barra lateral de Categorías -->
      <g transform="translate(20, 20)">
        <!-- Título de sección "TAREAS" -->
        <rect width="50" height="8" rx="2" fill="#4b5563" opacity="0.4" />
        <!-- Input "Buscar..." -->
        <rect y="16" width="130" height="24" rx="6" fill="#0b0f17" stroke="#222f43" stroke-width="1" />
        <circle cx="12" cy="28" r="3" stroke="#4b5563" stroke-width="1" fill="none" />
        
        <!-- Sección CATEGORÍAS -->
        <rect y="54" width="70" height="8" rx="2" fill="#4b5563" opacity="0.4" />
        <!-- Fila: Todas -->
        <g transform="translate(0, 72)">
          <rect width="130" height="24" rx="6" fill="#222f43" opacity="0.4" />
          <circle cx="12" cy="12" r="6" fill="#0052ff" />
          <path d="M9 12 L11 14 L15 10" stroke="#FFFFFF" stroke-width="1.5" fill="none" />
          <rect x="26" y="8" width="40" height="8" rx="2" fill="#FFFFFF" opacity="0.9" />
          <circle cx="118" cy="12" r="7" fill="#0052ff" />
        </g>
        <!-- Fila: Pendientes -->
        <g transform="translate(0, 104)">
          <circle cx="12" cy="12" r="6" stroke="#4b5563" stroke-width="1.5" fill="none" />
          <rect x="26" y="8" width="55" height="8" rx="2" fill="#9CA3AF" opacity="0.6" />
        </g>
        <!-- Fila: Completadas -->
        <g transform="translate(0, 136)">
          <circle cx="12" cy="12" r="6" stroke="#4b5563" stroke-width="1.5" fill="none" />
          <rect x="26" y="8" width="60" height="8" rx="2" fill="#9CA3AF" opacity="0.6" />
        </g>
        
        <!-- Botón inferior -->
        <rect y="180" width="130" height="24" rx="6" fill="#0b0f17" stroke="#222f43" stroke-width="1" />
        <rect x="20" y="188" width="90" height="8" rx="2" fill="#9CA3AF" opacity="0.5" />
      </g>

      <!-- Línea divisoria central -->
      <path d="M170,0 L170,286" stroke="#222f43" stroke-width="1" />

      <!-- Panel Derecho: Tablero Principal ("Mis Tareas") -->
      <g transform="translate(190, 20)">
        <rect width="350" height="246" rx="10" fill="#001a4d" fill-opacity="0.4" stroke="#002b80" stroke-width="1" />
        
        <text x="175" y="30" fill="#FFFFFF" font-size="16" font-weight="700" text-anchor="middle">Mis Tareas</text>
        <text x="175" y="48" fill="#9CA3AF" font-size="11" text-anchor="middle">Tienes 1 asuntos por resolver hoy.</text>
        
        <!-- Input superior -->
        <rect x="20" y="64" width="230" height="28" rx="6" fill="#0b0f17" stroke="#003399" stroke-width="1" />
        <rect x="32" y="74" width="110" height="8" rx="2" fill="#4b5563" opacity="0.6" />
        <!-- Botón Añadir -->
        <rect x="260" y="64" width="70" height="28" rx="6" fill="#222f43" />
        <rect x="277" y="74" width="36" height="8" rx="2" fill="#FFFFFF" opacity="0.8" />
        
        <!-- Lista de Tareas -->
        <!-- Tarea 1: Realizada -->
        <g transform="translate(20, 106)">
          <rect width="310" height="34" rx="8" fill="#0b0f17" stroke="#222f43" stroke-width="1" opacity="0.6" />
          <circle cx="16" cy="17" r="7" fill="#0052ff" />
          <path d="M13 17 L15 19 L19 14" stroke="#FFFFFF" stroke-width="1.5" fill="none" />
          <rect x="36" y="13" width="70" height="8" rx="2" fill="#9CA3AF" opacity="0.4" />
          <rect x="282" y="11" width="12" height="12" rx="2" fill="#ef4444" opacity="0.3" />
        </g>
        
        <!-- Tarea 2: Pendiente -->
        <g transform="translate(20, 150)">
          <rect width="310" height="34" rx="8" fill="#0b0f17" stroke="#002b80" stroke-width="1" />
          <circle cx="16" cy="17" r="7" stroke="#4b5563" stroke-width="1.5" fill="none" />
          <rect x="36" y="13" width="55" height="8" rx="2" fill="#FFFFFF" opacity="0.9" />
          <rect x="282" y="11" width="12" height="12" rx="2" fill="#ef4444" opacity="0.3" />
        </g>
      </g>
    </g>
  </g>
</svg>

```


### Tip build - github

si la imagen del banner (o capturas de pantalla) la vas a usar únicamente para el README.md de tu repositorio
##### y no se muestra dentro de tu aplicación de React, no la metas en src/assets/ ni en public/.

##### Ponerlo en la carpeta .github/assets/banner.svg

# SVG o png en readme github

Ambos formatos conviven, pero tienen objetivos y comportamientos muy diferentes dentro de GitHub
No hay un único estándar absoluto, sino un "estándar de seguridad" (PNG) y un "estándar premium moderno" (SVG).


1. Estándar seguro: PNG en Alta Resolución (@2x o @3x) 

Muchos de los grandes proyectos de código abierto (y la mayoría de los desarrolladores) eligen PNG
pero con un truco: lo exportan al doble o triple de su tamaño real
(por ejemplo, diseñar a 1280x420 pero exportar a 2560x840).

estándar: GitHub es una plataforma multiplataforma
Un usuario puede ver tu repositorio desde un iPhone, una PC con Windows, una Mac con pantalla Retina o una distribución de Linux
El PNG es un mapa de bits cerrado: se va a ver exactamente igual
con los mismos píxeles y el mismo espaciado, en cualquier pantalla del mundo

ventaja oculta: No depende de las tipografías del usuario
Si usas una fuente premium en tu diseño, el PNG ya la tiene "pintada

desventaja: Si no lo exportas en alta resolución (@2x)
en pantallas 4K o pantallas Retina de Apple se puede notar ligeramente borroso (pixelado) en los bordes de los textos


2. estándar moderno: SVG (Vectores Optimizados)

Grandes empresas de software con repositorios ultra estéticos
(como Vercel, Supabase, Tailwind o Raycast) suelen usar SVG para sus banners y logos en GitHub

elegido por los diseñadores/devs premium: Es escalable hasta el infinito.
No importa si el reclutador tiene un monitor de 8K, los textos y los bordes de la interfaz de tu app se verán tan nítidos como si fueran código real
Además, pesa apenas unos pocos kilobytes, lo que hace que el README cargue instantáneamente

gran "pero" de GitHub con los SVG: Por motivos de seguridad (evitar ataques de inyección de código)
GitHub sanitiza los archivos SVG
Esto significa que si tu SVG tiene animaciones complejas en JavaScript o estilos CSS muy avanzados
GitHub los va a bloquear y el banner podría romperse o no mostrarse.

problema de las fuentes: Si dejas el texto como código (<text>),
el navegador del usuario intentará renderizarlo con las fuentes que tenga instaladas
lo solucionamos usando familias del sistema (system-ui, -apple-system),
por lo que se adaptará de forma limpia y moderna al sistema operativo del usuario
pero no se verá exactamente igual en Windows que en Mac.


Recomendaciones:

1. control absoluto y cero sorpresas (Recomendado):
Código SVG arrastralo dentro de Figma (u otra herramienta de diseño)
asegúrate de que todo esté en su lugar, y exportalo como PNG a @2x (2560 x 840 px).
Sube ese PNG a tu GitHub
Se va a ver increíblemente nítido, no va a pesar nada y te garantizás que todos los reclutadores vean exactamente la misma tipografía y balance

2. Nitidez matemática
Usar el archivo .svg directamente
El código optimizado para la sanitización de GitHub (no usa recursos externos ni scripts)
las fuentes están protegidas con selectores nativos del sistema para que no se rompan





# Descripción del proj para ATS




# Escalar


agregar emociones

## Arq: app/feat dentro de la app

### Rutas, entidades, hooks, templates manejar todo eso

1. tuday list: como esta ahorá agregando filtros y busc en header


## 1. tuday list

## 2. diary

## 3. meets
calendar

## 4. emotions why




# Separation of Concerns y SRP



# Estilizar fuentes

## cursiv encab main 






