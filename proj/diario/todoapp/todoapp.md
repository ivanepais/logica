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


# DashboardTemplate distribuye estos slots con CSS Grid/Flexbox

