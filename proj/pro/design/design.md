# Design



# Backend

## Proceso de ingeniería

suele pasar por una cadena como:

```
Problema
→ requisitos
→ dominio
→ arquitectura
→ datos
→ API
→ implementación
→ seguridad
→ testing
→ observabilidad
→ despliegue
→ operación
→ evolución

```

#### !!! Se diseña lo suficiente para comenzar y se refina a medida que aparecen restricciones reales


1. Entender el problema antes de programar

se responde:
Qué problema resuelve este backend?

Ej: una API para gestionar tareas de usuarios.
eso todavía es demasiado superficial

#### Se intenta describrir:

##### quién usa el sistema; qué acciones puede realizar; qué reglas existen; qué datos deben conservarse; qué datos no pueden perderse; qué operaciones son críticas; qué volumen se espera

Ej:

Usuario
 ├── registrarse
 ├── iniciar sesión
 ├── crear tarea
 ├── editar tarea
 ├── completar tarea
 └── eliminar tarea

también aparecen reglas:

Una tarea pertenece a un usuario.
Un usuario no puede modificar tareas de otro usuario.
Una tarea completada no puede editarse.
El email debe ser único.

##### Estas reglas son mucho más importantes que decidir si vamos a usar controllers/ o services/.


2. Convertir requisitos en casos de uso

##### Después transformamos el problema en casos de uso.

Ej:

CreateTask
GetTask
ListTasks
UpdateTask
CompleteTask
DeleteTask

Y para usuarios:

RegisterUser
LoginUser
GetProfile
UpdateProfile

#### empieza a aparecer el lenguaje del dominio
##### es importante porque el backend debería hablar el lenguaje del negocio.

sin terminar con cosas como:

doThing()
processData()
handleRequest()


3. Identificar el dominio

#### Cuáles son las cosas importantes del sistema?

User
Task

posiblemente:

Project
Tag
Comment
Session

Determinamos sus relaciones:

User
 │
 └── Task
      │
      ├── Project
      └── Tags


##### Nos lleva al modelo de dominio

Task:
id
title
description
status
createdAt
updatedAt
userId

el modelo no consiste únicamente en propiedades

##### existen reglas:

Task.complete()
Task.rename()
Task.assignToProject()


#### !!! Ahí empezamos a separar: datos de comportamiento


4. Definir límites del sistema

pregunta fundamental:
#### ¿Qué responsabilidades pertenecen realmente al backend?

Un sistema puede contener:

Frontend
   ↓
Backend API
   ↓
Database

posiblemente también:

                 ┌── PostgreSQL
                 │
Frontend → API ──┼── Redis
                 │
                 ├── Stripe
                 │
                 └── Email provider

##### Tenemos que identificar las fronteras

Ej:

Authentication
Users
Tasks
Projects
Notifications
Payments


Esto suele convertirse en módulos o bounded contexts, dependiendo de la complejidad


5. Elegir arquitectura

#### empezamos a hablar de arquitectura

Para un backend profesional pequeño/mediano, una excelente opción inicial suele ser:

```
                    HTTP
                     │
                     ▼
                Controller
                     │
                     ▼
                 Use Case
                     │
                     ▼
                  Domain
                     │
                     ▼
              Repository Port
                     │
                     ▼
               Infrastructure
                     │
                     ▼
                  Database
```


Una implementación podría verse así:

```
src/

├── users/
│   ├── domain/
│   ├── application/
│   ├── infrastructure/
│   └── presentation/
│
├── tasks/
│   ├── domain/
│   ├── application/
│   ├── infrastructure/
│   └── presentation/
│
├── auth/
│
└── shared/
```

No significa que siempre haya que usar esta estructura.

La estructura correcta depende del tamaño y complejidad del sistema.


6. Separar responsabilidades

#### Cada parte del sistema debe tener una responsabilidad clara.


### 1. Controller: Se ocupa de HTTP.


@Post()
create(@Body() dto: CreateTaskDto) {
  return this.createTask.execute(dto);
}

##### !!! No debería contener reglas de negocio complejas.


### 2. Application / Use Case: Orquesta la operación.

class CreateTask {
  execute(command: CreateTaskCommand) {
    // coordina la operación
  }
}


### 3. Domain: Contiene las reglas del negocio.

task.complete();

No debería saber nada de:

HTTP
Express
NestJS
PostgreSQL
Redis


### 4. Infrastructure: Se ocupa de detalles técnicos: PostgreSQL, Redis, HTTP clients, filesystem, queues, external APIs

class PostgresTaskRepository


7. Diseñar los datos

#### Datos: Una vez entendido el dominio, diseñamos persistencia

```
users
----------------
id
email
password_hash
created_at


tasks
----------------
id
user_id
title
status
created_at
updated_at
```

Después aparecen preguntas importantes:

##### ¿qué claves usamos?, ¿qué índices necesitamos?, ¿qué relaciones existen?, ¿qué restricciones debe imponer la BD?, ¿qué datos son obligatorios?, ¿qué datos pueden ser NULL?, ¿qué operaciones necesitan transacción?

no delega toda la integridad al código.
Ej: 

UNIQUE(email)

es una protección de la base de datos, no únicamente del backend.


8. Diseñar la API

#### Api: Ahora podemos diseñar los endpoints

POST   /users
POST   /auth/login

GET    /tasks
POST   /tasks
GET    /tasks/:id
PATCH  /tasks/:id
DELETE /tasks/:id

Pero diseñar APIs no es simplemente escoger URLs.

#### debemos decidir: Request, Response, errores, código HTTP

Request

{
  "title": "Aprender NestJS"
}


Response

{
  "id": "123",
  "title": "Aprender NestJS",
  "status": "pending"
}


Errores

{
  "code": "TASK_NOT_FOUND",
  "message": "Task not found"
}


Códigos HTTP

200
201
204
400
401
403
404
409
422
500


9. Diseñar contratos

#### Contratos: trata la API como un contrato

Frontend
    │
    │ HTTP contract
    ▼
Backend

#### Definir: Inputs, Outputs, Errors, Authentication, Pagination, Filtering, Sorting, Versioning

Ej:
GET /tasks?page=2&limit=20&status=completed

#### Necesita reglas claras sobre: page, limit y status


10. Autenticación y autorización

#### Authentication: Quién eres. login, session, jwt, 0Auth

#### Authorization: Qué puedes hacer

Ej: user puede

User A
   ↓
Task A

user no puede:

User A
   ↓
Task B

aunque conozca el id.


#### Aparecen conceptos como: RBAC, ABAC, permissions, role, ownership, guards, policies


11. Seguridad desde el diseño

#### Desde el principio hay que pensar en: password hashing, input validation, SQL injection, CSS, CSRF, authentication, authorization, rate limiting, secrets, CORS, headers, logging, encryption

##### Especialmente importante: Nunca confiar en los datos enviados por el cliente.

Ej: 

{
  "userId": 123
}

no significa que el usuario tenga permiso para operar sobre 123.


12. Validación

#### Validación: El backend valida las entradas

Ej: title: string

##### También puede significar: required, minLength, maxLength, trim, format, business rules

Ej:

title != ""
title.length <= 200

#### La validación suele tener dos niveles: Structural validation -> Business validation


13. Manejo de errores

#### Errores estandar y personalizados

ValidationError
AuthenticationError
AuthorizationError
NotFoundError
ConflictError
InfrastructureError

Y se transforma en respuestas HTTP consistentes.

{
  "statusCode": 404,
  "code": "TASK_NOT_FOUND",
  "message": "Task not found"
}

Evitaríamos que cada endpoint invente su propio formato.



14. Transacciones y consistencia

Ej: CreateOrder, debe hacer: crear order, crear order items, descontar stock, registrar payment intent

Qué sucede si falla el tercer paso?

Tenemos que preguntarnos:


#### Transacciones y consistencia: ¿Qué debe revertirse?, ¿Qué puede permanecer?, ¿Qué debe ser eventual?

Aparecen:

transactions
idempotency
locking
consistency
retries
outbox pattern
eventual consistency

##### Estas decisiones aparecen cuando el dominio lo necesita.


15. Testing

no se prueba únicamente mediante Postman.

capas:

#### Unit tests: Prueban comportamiento aislado
Task.complete()

#### Integration tests: Prueban partes reales juntas
Use Case
   ↓
Repository
   ↓
Database

#### End-to-end: Prueban el sistema desde HTTP:

##### normalmente habrá muchas pruebas unitarias, menos integración y aún menos E2E.


16. Observabilidad

Se usa en un sistema profesional

#### Cuando algo falla en producción necesitas saber: ¿Qué ocurrió?, ¿Dónde?, ¿Para qué usuario?, ¿Con qué request?, ¿Desde qué servicio?, ¿Cuánto tardó?, ¿Es un error nuevo?, ¿Cuántas veces ocurrió?

Aparecen:

logs
metrics
traces
health checks
alerts

Ej:

Request
   ↓
Trace ID: abc123
   ↓
API
   ↓
Database
   ↓
External API


17. Configuración

No hacer:

const password = "super-secret";

#### La configuración debe estar externalizada: DATABASE_URL, JWT_SECRET, REDIS_URL, API_KEY

además: development, test, staging, production


18. CI/CD

Cuando el código está listo:

git push
   ↓
CI
   ↓
lint
   ↓
typecheck
   ↓
tests
   ↓
build
   ↓
security checks
   ↓
deploy


GitHub
   ↓
GitHub Actions
   ↓
Docker
   ↓
Cloud

El objetivo es que desplegar sea un proceso repetible, no una serie de comandos manuales que alguien recuerda de memoria.


19. Deployment

#### El sistema necesita ejecutarse en algún lugar.

VM
Docker
Kubernetes
Serverless
PaaS
Cloud


#### Infra necesaria

Ej: backend pequeño

api, postgresql, redis opcional

sin kubernetes, kafka, microservices, service mesh



20. Operación

#### Gestionar: backups, migrations, logs, monitoring, alerts, rollbacks, scaling, incident response, security updates

Desplegar el backend no significa terminarlo.

Develop
   ↓
Deploy
   ↓
Observe
   ↓
Learn
   ↓
Improve
   ↓
Deploy
   ↓
...


21. Evolución de la arquitectura

Frontend
   ↓
NestJS
   ↓
PostgreSQL


10.000 usuarios


500.000 usuarios

problemas:

database load
slow queries
CPU
memory
background jobs
caching


introducimos:

Redis
queues
workers
read replicas
caching


eventualmente:

Service A
Service B
Service C

##### La arquitectura evoluciona a partir de problemas reales




## Rs back


1. dominio y reglas (props y acc)
2. api (request, response, errores, codigos)
3. Contratos


                    ┌────────────────────┐
                    │      PROBLEMA      │
                    └─────────┬──────────┘
                              ↓
                    ┌────────────────────┐
                    │    REQUISITOS      │
                    └─────────┬──────────┘
                              ↓
                    ┌────────────────────┐
                    │     CASOS DE USO   │
                    └─────────┬──────────┘
                              ↓
                    ┌────────────────────┐
                    │      DOMINIO       │
                    └─────────┬──────────┘
                              ↓
                    ┌────────────────────┐
                    │    ARQUITECTURA    │
                    └─────────┬──────────┘
                              ↓
              ┌───────────────┴───────────────┐
              ↓                               ↓
        ┌──────────────┐               ┌──────────────┐
        │    DATOS     │               │     API      │
        └──────┬───────┘               └──────┬───────┘
               └──────────────┬────────────────┘
                              ↓
                    ┌────────────────────┐
                    │   IMPLEMENTACIÓN   │
                    └─────────┬──────────┘
                              ↓
             ┌────────────────┼────────────────┐
             ↓                ↓                ↓
        SECURITY          TESTING        OBSERVABILITY
             └────────────────┼────────────────┘
                              ↓
                    ┌────────────────────┐
                    │       CI/CD        │
                    └─────────┬──────────┘
                              ↓
                    ┌────────────────────┐
                    │    DEPLOYMENT      │
                    └─────────┬──────────┘
                              ↓
                    ┌────────────────────┐
                    │    PRODUCTION      │
                    └─────────┬──────────┘
                              ↓
                    ┌────────────────────┐
                    │    MONITORING      │
                    └─────────┬──────────┘
                              ↓
                         EVOLUCIÓN
                              │
                              └──────────→ nueva iteración

                              
¿Por qué necesitamos esta pieza?

¿Qué responsabilidad tiene?

¿Dónde debe vivir?

¿Qué dependencia debería conocer?

¿Qué pasa si falla?

¿Cómo garantizamos consistencia?

¿Cómo lo probamos?

¿Cómo lo observamos?

¿Cómo lo desplegamos?

¿Cómo lo modificamos sin romper el sistema?



### Aprendizaje

1. HTTP + REST
        ↓
2. Backend fundamentals
        ↓
3. NestJS fundamentals
        ↓
4. Modular architecture
        ↓
5. Domain + Use Cases
        ↓
6. PostgreSQL + data modeling
        ↓
7. Authentication / Authorization
        ↓
8. Validation + Error handling
        ↓
9. Testing
        ↓
10. Transactions
        ↓
11. Caching + queues
        ↓
12. Observability
        ↓
13. Docker + CI/CD
        ↓
14. Deployment
        ↓
15. Scaling
        ↓
16. Microservices




## Backend simple

#### Simple, modular y por capas: incorporando desde el principio una separación clara entre HTTP, aplicación, dominio y persistencia


1. Arquitectura base

```
                    CLIENTE
                       │
                       │ HTTP
                       ▼
              ┌─────────────────┐
              │   Controllers    │
              │   / Presentation │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │    Use Cases     │
              │   / Application  │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │     Domain      │
              │ Entities/Rules  │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │   Repositories  │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │    Database     │
              └─────────────────┘

```

alrededor de eso:

Authentication
Validation
Error handling
Logging
Configuration
Testing


2. Estructura

src/
│
├── main.ts
├── app.module.ts
│
├── config/
│
├── common/
│   ├── errors/
│   ├── guards/
│   ├── interceptors/
│   └── pipes/
│
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   └── ...
│
├── users/
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── users.repository.ts
│   ├── user.entity.ts
│   └── dto/
│
└── tasks/
    ├── tasks.controller.ts
    ├── tasks.service.ts
    ├── tasks.repository.ts
    ├── task.entity.ts
    └── dto/


suficiente para construir una API bastante seria


#### mejora: separar por módulo funcional, no crear una estructura global como:    

users/
tasks/
auth/
orders/

##### cada módulo contiene lo relacionado con una misma capacidad del sistema.


3. Flujo de una petición

Ej:

POST /tasks

con:

{
  "title": "Aprender NestJS"
}


```
HTTP Request
      │
      ▼
Controller
      │
      │ valida DTO
      ▼
Use Case / Service
      │
      │ aplica reglas
      ▼
Domain
      │
      │ persiste
      ▼
Repository
      │
      ▼
PostgreSQL
      │
      ▼
Repository
      │
      ▼
Use Case
      │
      ▼
Controller
      │
      ▼
HTTP Response
```


4. Controller:

#### debería ser bastante delgado

@Post()
create(@Body() dto: CreateTaskDto) {
  return this.tasksService.create(dto);
}

responsabilidad:

HTTP
↓
input
↓
invocar aplicación
↓
response

No debería contener: sql, logica negcoio, cálculos, transacciones gigantes


5. Service / Use Case

#### coordinación de la operación.

```
@Injectable()
export class TasksService {
  constructor(
    private readonly repository: TasksRepository,
  ) {}

  async create(dto: CreateTaskDto) {
    const task = Task.create(dto.title);

    await this.repository.save(task);

    return task;
  }
}
```

Aquí empieza a aparecer una distinción útil:

Controller
    ↓
Application
    ↓
Domain


6. Domain

#### dominio representa las reglas importantes.

```
export class Task {
  private constructor(
    public readonly id: string,
    private title: string,
    private status: TaskStatus,
  ) {}

  static create(title: string) {
    if (!title.trim()) {
      throw new Error('Title cannot be empty');
    }

    return new Task(
      crypto.randomUUID(),
      title,
      'pending',
    );
  }

  complete() {
    if (this.status === 'completed') {
      throw new Error('Task already completed');
    }

    this.status = 'completed';
  }
}
```

mucho mejor que permitir que cualquier parte del sistema haga:

task.status = 'completed';

sin pasar por las reglas.


7. Repository

#### La aplicación no debería saber cómo se guarda realmente una tarea.

Puede tener algo como:

```
export interface TasksRepository {
  save(task: Task): Promise<void>;
  findById(id: string): Promise<Task | null>;
  delete(id: string): Promise<void>;
}
```

la implementación:

```
PostgresTasksRepository
```

hace el trabajo real.

```
Use Case
    ↓
TasksRepository
    ↓
PostgresTasksRepository
    ↓
PostgreSQL
```

##### introduce una idea de Ports & Adapters sin tener que convertir el proyecto entero en una implementación académica de Hexagonal Architecture


8. DTO

#### describen la entrada/salida de la API

```
export class CreateTaskDto {
  @IsString()
  @MinLength(1)
  @MaxLength(200)
  title: string;
}
```

##### responsabilidad es validar: ¿el request tiene una forma válida? Mientras que el dominio pregunta: ¿esta operación está permitida? Son problemas diferentes.


9. Base de datos

Comenzar con

```
users
-----------------------
id
email
password_hash
created_at


tasks
-----------------------
id
user_id
title
status
created_at
updated_at
```

y

```
users 1 ─────── * tasks
```

No introduciría Redis, Kafka, CQRS, microservicios, etc., hasta que exista una razón.


10. Authentication

POST /auth/login
        │
        ▼
AuthController
        │
        ▼
AuthService
        │
        ├── buscar User
        ├── comprobar password
        └── generar token

Después

GET /tasks
       │
       ▼
Auth Guard
       │
       ▼
Controller        


Y el usuario autenticado se utiliza para garantizar ownership:

currentUser.id === task.userId


11. Manejo de errores

Mantendría una estrategia centralizada

400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Unprocessable Entity
500 Internal Server Error

respuestas consistentes:

{
  "statusCode": 404,
  "code": "TASK_NOT_FOUND",
  "message": "Task not found"
}


12. Configuración

Separaría configuración del código:

.env

ej:

DATABASE_URL
JWT_SECRET
PORT

y tener:

development
test
production


13. Testing

tasks/
├── tasks.controller.ts
├── tasks.service.ts
├── tasks.repository.ts
├── task.entity.ts
│
└── __tests__/
    ├── tasks.service.spec.ts
    ├── task.spec.ts
    └── tasks.e2e-spec.ts


Los tres niveles:

Domain / Unit
      ↓
Application / Integration
      ↓
HTTP / E2E    


14. Arquitectura

backend pequeño y profesional

```
                        CLIENT
                           │
                           ▼
                    ┌────────────┐
                    │    HTTP    │
                    └─────┬──────┘
                          │
                          ▼
                    Controllers
                          │
                  validation/auth
                          │
                          ▼
                    Use Cases
                          │
                          ▼
                    Domain
                   /       \
                  /         \
                 ▼           ▼
          Repository       Services
              Port            Port
                │               │
                ▼               ▼
          PostgreSQL       External API
```


Alrededor

```
┌─────────────────────────────────────────────┐
│                                             │
│ Authentication                              │
│ Validation                                  │
│ Error Handling                              │
│ Logging                                     │
│ Configuration                               │
│ Testing                                     │
│ Observability                               │
│                                             │
└─────────────────────────────────────────────┘
```


no empezaría con:

Microservices
CQRS
Event Sourcing
Kafka
Kubernetes
Service Mesh
Distributed Transactions

Tampoco intentaría aplicar Clean Architecture al 100 % desde el primer archivo.

Empezar con:

```
Modular Monolith
        +
Layered Architecture
        +
Use Cases
        +
Domain rules
        +
Repository abstraction
```

deja una arquitectura pequeña pero con capacidad de evolucionar:


                    SIMPLE

                  Controller
                       │
                       ▼
                    Service
                       │
                       ▼
                   Repository
                       │
                       ▼
                   Database



convertirse gradualmente en:

                  MÁS COMPLEJA

              Presentation
                    │
                    ▼
              Application
                    │
                    ▼
                 Domain
                    │
             ┌──────┴──────┐
             ▼             ▼
           Ports         Events
             │
        ┌────┴────┐
        ▼         ▼
      SQL       External
      



                    Backend
                       │
               ┌───────┴────────┐
               │                │
             Modules          Common
               │
       ┌───────┼────────┐
       │       │        │
      Auth   Users    Tasks
                       │
                ┌──────┴──────┐
                │             │
             HTTP/API      Domain
                │             │
             DTOs        Business Rules
                │             │
                └──────┬──────┘
                       │
                  Application
                       │
                  Repository
                       │
                   Database






# Front

#### Problema -> Modelo -> Arq -> Componentes
implementación, pruebas y operación

#### Se empieza diseñando el sistema de interacción, no se empieza diseñando componentes


1. Entender el problema
        ↓
2. Definir requisitos
        ↓
3. Modelar usuarios y casos de uso
        ↓
4. Diseñar la experiencia (UX)
        ↓
5. Diseñar la interfaz (UI)
        ↓
6. Diseñar el sistema visual
        ↓
7. Diseñar la arquitectura frontend
        ↓
8. Diseñar el modelo de datos y estado
        ↓
9. Diseñar componentes
        ↓
10. Diseñar navegación y routing
        ↓
11. Diseñar comunicación con Backend
        ↓
12. Implementar
        ↓
13. Testing
        ↓
14. Accesibilidad + performance + seguridad
        ↓
15. Build + deployment
        ↓
16. Observabilidad + mantenimiento


1. Problema: 

Ej:
El usuario necesita registrar y gestionar tareas
rápidamente y conocer cuáles están pendientes

Después:

Usuarios:
- usuario normal
- administrador

Siguido de:

Objetivos:
- crear tarea
- completar tarea
- eliminar tarea
- filtrar tareas
- persistir tareas


2. Requisitos

#### Requisitos funcionales

El usuario puede:
- crear tareas
- editar tareas
- eliminar tareas
- completar tareas
- filtrar tareas


#### Requisitos no funcionales

- responsive
- accesible
- rápido
- mantenible
- seguro
- usable con teclado


#### Restricciones

Browser:
Chrome / Firefox / Safari

Devices:
mobile / tablet / desktop

Backend:
REST API

Authentication:
JWT


empieza a condicionar la arquitectura


3. Modelar usuarios y casos de uso

Qué hace realmente el usuario?

Usuario
 │
 ├── Login
 │
 └── Dashboard
       │
       ├── Ver tareas
       ├── Crear tarea
       ├── Editar tarea
       ├── Completar tarea
       └── Filtrar tareas


#### Podemos expresarlo como casos de uso:

CreateTask
UpdateTask
DeleteTask
CompleteTask
ListTasks
FilterTasks


##### Resulta en: Use Case -> Application Logic -> UI


4. UX

Diseñamos cómo funciona la experiencia.

Usuario escribe tarea
        ↓
click "Crear"
        ↓
validación
        ↓
loading
        ↓
request API
        ↓
success
        ↓
nueva tarea aparece


#### También debemos pensar los caminos alternativos

request falla
      ↓
mostrar error
      ↓
permitir retry

o

formulario inválido
      ↓
mostrar error
      ↓
usuario corrige


#### Estados especiales

Loading
Empty
Success
Error
Offline
Unauthorized
Not Found


5. UI

Comenzamos con la interfaz

pages
layouts
sections
components
elements

```
Dashboard
│
├── Header
│
├── Sidebar
│
└── Main
    │
    ├── TaskToolbar
    │
    └── TaskList
          │
          ├── TaskCard
          ├── TaskCard
          └── TaskCard
          
```



6. Design System

#### evitan que cada componente invente su propio diseño.

Design Tokens

colors
spacing
typography
radius
shadows
breakpoints
transitions
z-index

```
spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
}
```


```
colors = {
  primary,
  secondary,
  background,
  surface,
  text,
  error,
  success
}
```

##### Permite que compartan el mismo lenguaje visual.

Button
Card
Modal
Input
Badge

Entran conceptos como tokens y theme


7. Arquitectura frontend

#### Arquitectura: una de las decisiones importantes: se decide cómo se separan las responsabilidades

Ej:

src/
│
├── app/
│
├── pages/
│
├── features/
│
├── components/
│
├── entities/
│
├── services/
│
├── hooks/
│
├── lib/
│
├── styles/
│
└── types/


Pero esta estructura no es universal.

##### Lo importante es definir responsabilidades.

UI
 ↓
Application
 ↓
Domain
 ↓
Infrastructure



Una app pequeña puede:

pages
components
services
utils

Una grande:

presentation
application
domain
infrastructure


#### Conecta directamente con backend

frontend también

```
Layered Architecture
Clean Architecture
Hexagonal ideas
Feature-based architecture
Domain-oriented architecture
```

aunque diferente


8. Modelar el dominio

#### Antes de crear componentes, es conveniente identificar las entidades.

Task
User
Project
Tag


```
type Task = {
  id: string
  title: string
  completed: boolean
  createdAt: Date
}
```


#### Distinción: Domain Model =/= API Response =/= UI Model

#### backend:

```
{
  "task_id": "123",
  "task_title": "Learn React",
  "is_completed": false
}
```


#### El front puede convertirlo:

```
{
  id: "123",
  title: "Learn React",
  completed: false
}
```


####  Necesidad de la UI:

```
{
  id: "123",
  title: "Learn React",
  completed: false,
  formattedDate: "Today"
}
```


#### conviene ser consciente de estas fronteras



9. Estado

No todo es "state".

Local UI state
Server state
Global state
URL state
Form state
Derived state
Persistent state


Local:

isModalOpen
isDropdownOpen


Server:

tasks
users
projects


URL:

?page=2
&filter=completed


Form

title
description
errors
submitting


Derived

completedTasks
pendingTasks
filteredTasks


#### Regla: No guardes como estado algo que puedes derivar.

Ej:

`const [completedCount, setCompletedCount] = useState(0)`

Se obtiene con:

```
const completedCount =
  tasks.filter(task => task.completed).length
```


10. Data fetching

#### Fetch: Se diseña cómo entra y sale información

Component
    ↓
Hook
    ↓
Query / Application service
    ↓
API client
    ↓
HTTP
    ↓
Backend


#### separar: API Client de Business/Application Logic

Ej:

#### taskService.getTasks()

##### No: fetch("/api/tasks") disperso por 30 componentes.


11. Routing

navegación como parte del sistema

/login

/dashboard

/tasks

/tasks/:id

/settings


Y además:

Protected routes
Public routes
Nested routes
404
Redirects
Authorization


También se decide:

¿Qué vive en URL?

¿Qué vive en state?

¿Qué vive en storage?


Ej: 

/task/123

mejor que: selectedTask = 123

##### cuando esa selección forma parte conceptual de la navegación.


12. Componentes

#### Diseño: Qué responsabilidades necesitan encapsulación

##### Ej: TaskList debería encargarse principalmente de representar una lista.

##### Mientras que TaskService se ocupa de la comunicación con backend.

##### TaskForm: interacción del formulario


Una separación saludable podría ser:

TaskPage
   ↓
TaskList
   ↓
TaskCard


Mientras:

TaskPage
   ↓
useTasks()
   ↓
taskService
   ↓
API



13. Componentes reutilizables

#### Componentes de infraestructura visual

Button
Input
Modal
Checkbox
Badge
Typography

#### Componentes de negocio

TaskCard
TaskForm
TaskList
UserProfile
ShoppingCart


Los primeros deberían ser altamente reutilizables.
Los segundos generalmente están ligados al dominio.

No conviene intentar convertir absolutamente todo en componentes genéricos.


14. Comunicación entre componentes

#### Props
#### Events
#### Context
#### State management
#### Composition

Ej:

```
<TaskCard
  task={task}
  onComplete={handleComplete}
/>
```

En vez de que TaskCard conozca directamente toda la aplicación.

reduce acoplamiento


15. Manejo de errores

Desde el inicio

400 → validation
401 → unauthenticated
403 → forbidden
404 → resource not found
409 → conflict
422 → semantic validation
429 → rate limit
500 → server error
503 → unavailable

##### Y cada uno puede tener una estrategia diferente.

Además:

```
Network error
Timeout
Offline
Malformed response
Unexpected error
```


16. Seguridad

Aunque gran parte de la seguridad pertenece al backend, frontend también tiene responsabilidades.

XSS
CSRF
token handling
content sanitization
secure cookies
permissions
dependency vulnerabilities
secrets exposure

Nunca confiar en el frontend para imponer seguridad.

Puede ocultar: Delete button

el backend debe comprobar: User has permission to delete 
 

17. Accesibilidad

```
semantic HTML
keyboard navigation
focus management
ARIA
contrast
screen readers
reduced motion
form labels
error announcements
```


18. Performance

Hay varias capas:

Network
   ↓
Bundle
   ↓
JavaScript execution
   ↓
Rendering
   ↓
Images
   ↓
Data fetching


Estrategias posibles:

code splitting
lazy loading
memoization
virtualization
image optimization
caching
prefetching
pagination
debouncing
throttling


##### Optimizar problemas reales, no añadir complejidad preventiva.


19. Testing

                E2E
                 ↑
          Integration
                 ↑
              Unit

Unit:
task.logic.test.ts
Comprueba reglas aisladas.

Component / Integration
TaskForm.test.tsx
Comprueba comportamiento entre UI y lógica.

E2E: Comprueba el sistema desde la perspectiva del usuario.

login
→ dashboard
→ create task
→ task appears


20. Observabilidad

Saber:

¿Qué está fallando?
¿Dónde?
¿Con qué usuarios?
¿Desde qué navegador?
¿Desde qué versión?

aparecen:

logging
error tracking
performance monitoring
analytics
telemetry

Ej: 

Frontend
   ↓
Error Tracking
   ↓
Stack trace
   ↓
release/version
   ↓
debugging


21. Build

Source
  ↓
TypeScript
  ↓
Bundler
  ↓
Minification
  ↓
Asset optimization
  ↓
Build


herramientas:

Vite
Webpack
Rollup
esbuild

dependen del ecosistema


22. CI/CD

Developer
   ↓
Git
   ↓
Pull Request
   ↓
CI
   ├── lint
   ├── typecheck
   ├── unit tests
   ├── integration tests
   ├── build
   └── security checks
   ↓
Deploy
   ↓
Production


posteriormente:

monitoring
     ↓
errors / metrics
     ↓
feedback
     ↓
new iteration


El frontend es un ciclo:

Analyze
  ↓
Design
  ↓
Implement
  ↓
Test
  ↓
Deploy
  ↓
Observe
  ↓
Improve
  ↺


                    PRODUCT
                       │
                       ▼
                Requirements
                       │
                       ▼
                   UX Design
                       │
                       ▼
                   UI Design
                       │
                       ▼
                Design System
                       │
                       ▼
               Domain Modeling
                       │
                       ▼
                 Architecture
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       Routing       State        Data/API
          │            │            │
          └────────────┼────────────┘
                       ▼
                  Components
                       │
                       ▼
                  Application
                       │
                       ▼
                    Testing
                       │
                       ▼
             Accessibility
                       │
                       ▼
                  Performance
                       │
                       ▼
                    Build
                       │
                       ▼
                   Deploy
                       │
                       ▼
                Observability
                       │
                       ▼
                 Maintenance

                 

FASE 1 — Discovery
├── Problem
├── Users
├── Requirements
└── Constraints

FASE 2 — Product/UX
├── User flows
├── Information architecture
├── Navigation
└── States

FASE 3 — UI
├── Wireframes
├── Visual design
├── Design tokens
└── Design system

FASE 4 — Architecture
├── Domain
├── Features
├── Layers
├── State
├── Routing
└── API boundaries

FASE 5 — Implementation
├── Foundation
├── Components
├── Features
├── Pages
└── Integration

FASE 6 — Quality
├── Unit
├── Integration
├── E2E
├── Accessibility
├── Performance
└── Security

FASE 7 — Delivery
├── Build
├── CI/CD
├── Deployment
└── Monitoring

FASE 8 — Evolution
├── Refactoring
├── Optimization
├── New features
└── Technical debt


#### !!! Jerarquía más importante:

Product
   ↓
UX
   ↓
UI
   ↓
Architecture
   ↓
Domain
   ↓
Application Logic
   ↓
Components
   ↓
Code


#### Relación entre capas

¿Por qué existe esta pantalla?
        ↓
¿Por qué existe este flujo?
        ↓
¿Por qué existe este estado?
        ↓
¿Por qué existe este componente?
        ↓
¿Por qué esta lógica está aquí?
        ↓
¿Por qué esta dependencia existe?




## Front + Back

#### Deberían comunicarse a través de un contrato bien definido

┌──────────────────────────────────────────────────────────┐
│                       FRONTEND                           │
│                                                          │
│  UI → Feature/Application → Domain → API Client         │
│                                      │                   │
└──────────────────────────────────────┼───────────────────┘
                                       │
                               HTTP / HTTPS
                                       │
                               API Contract
                                       │
┌──────────────────────────────────────┼───────────────────┐
│                       BACKEND                            │
│                                      │                   │
│ Controller → Application → Domain → Infrastructure       │
│                                      │                   │
│                                Database / External APIs   │
└──────────────────────────────────────────────────────────┘


#### La clave está en que el contrato API se convierte en la frontera del sistema.


1. Arquitectura completa

```
                         INTERNET
                            │
                         HTTPS
                            │
                 ┌──────────▼──────────┐
                 │       FRONTEND       │
                 │                      │
                 │ Pages                │
                 │ Features             │
                 │ Components           │
                 │ Application Logic    │
                 │ Domain               │
                 │ API Client           │
                 └──────────┬───────────┘
                            │
                            │ HTTP
                            ▼
                 ┌──────────────────────┐
                 │      API CONTRACT    │
                 │                      │
                 │ REST / GraphQL       │
                 │ JSON                 │
                 │ Auth                 │
                 │ Errors               │
                 │ Pagination           │
                 │ Validation           │
                 └──────────┬───────────┘
                            │
                            │
                 ┌──────────▼───────────┐
                 │       BACKEND        │
                 │                      │
                 │ Controllers          │
                 │ Application          │
                 │ Domain               │
                 │ Infrastructure      │
                 └──────────┬───────────┘
                            │
                  ┌─────────┼─────────┐
                  ▼         ▼         ▼
               Database   Cache   External APIs
```

#### Frontend y Backend son dos sistemas relativamente independientes

#### La API es el límite entre ambos.


2. No acoplar el frontend al backend internamente

Un error bastante común es hacer esto:

```
function UserPage() {
  fetch("/api/users")
}
```

Después:

```
20 componentes
    ↓
fetch(...)
    ↓
API
```

Ahora la API está mezclada con la UI.


#### Diseño limpio: UserPage -> useUsers() -> UserService -> ApiClient -> HTTP


Ej:

```
async function getUsers() {
  return apiClient.get<User[]>("/users");
}
```

La UI no necesita saber:

URL
headers
authentication
retry
serialization
HTTP status


3. Frontera principal: API Contract

#### La API como un contrato

Ej:

GET /api/tasks

Request:

GET /api/tasks?page=1&limit=20
Authorization: Bearer ...

Response:

```
{
  "data": [
    {
      "id": "123",
      "title": "Learn React",
      "completed": false
    }
  ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 37
  }
}
```


Ese contrato define:

endpoint
method
request
response
errors
authentication
pagination
sorting
filtering


ambos lados pueden desarrollarse alrededor de él.


4. Separar API Models de Domain Models

#### extremadamente recomendable

Backend devuelve:

{
  "task_id": "123",
  "task_title": "Learn React",
  "is_completed": false
}


Frontend transforma:

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

```
Backend DTO
     ↓
API Client
     ↓
Mapper
     ↓
Domain Model
     ↓
Application/UI
```

Ej:

```
function toTask(dto: TaskDto): Task {
  return {
    id: dto.task_id,
    title: dto.task_title,
    completed: dto.is_completed
  };
}
```

##### evita que las peculiaridades del backend se propaguen por toda la aplicación.


5. DTO ≠ Entity ≠ UI Model

distinción útil en app grandes

```
Backend
    ↓
TaskResponseDto

Frontend API
    ↓
TaskDto

Frontend Domain
    ↓
Task

UI
    ↓
TaskViewModel
```

Ej:

TaskDto
   ↓
Task
   ↓
TaskViewModel

No siempre necesitas las tres capas, pero es bueno conocerlo


6. Diseñar la API desde los casos de uso

#### No conviene diseñar endpoints pensando únicamente en tablas de la base de datos

Ej:

GET /tasks
POST /tasks
PUT /tasks/:id
DELETE /tasks/:id

puede ser correcto

#### Pero una aplicación puede tener operaciones de negocio:

POST /tasks/:id/complete
POST /orders/:id/checkout
POST /users/:id/change-password

Qué acciones necesita realizar el cliente?

lleva al concepto de API orientada al dominio/caso de uso
especialmente en sistemas complejos


7. Request lifecycle

Cuando el usuario hace:

"Crear tarea"

Flujo:

```

User
 ↓
TaskForm
 ↓
CreateTask use case
 ↓
TaskRepository
 ↓
ApiClient
 ↓
POST /tasks
 ↓
Backend Controller
 ↓
Validation
 ↓
Application Service
 ↓
Domain
 ↓
Repository
 ↓
Database
 ↓
Response
 ↓
Mapper
 ↓
Frontend State
 ↓
UI update
```


                    CREATE TASK

┌─────────── FRONTEND ─────────────┐
│                                  │
│ User                             │
│  ↓                               │
│ TaskForm                         │
│  ↓                               │
│ CreateTask                       │
│  ↓                               │
│ TaskRepository                   │
│  ↓                               │
│ HttpClient                       │
└──────────────┬───────────────────┘
               │
             HTTPS
               │
┌──────────────▼───────────────────┐
│             BACKEND              │
│                                  │
│ Controller                       │
│  ↓                               │
│ Validation                       │
│  ↓                               │
│ Use Case                         │
│  ↓                               │
│ Domain                           │
│  ↓                               │
│ Repository                       │
│  ↓                               │
│ Database                         │
└──────────────────────────────────┘



8. Autenticación

otra frontera crítica.

Un modelo:

Login
 ↓
Backend
 ↓
Authentication
 ↓
Session / Token
 ↓
Frontend


#### En una aplicación web tradicional, una opción frecuente es usar cookies seguras gestionadas por el navegador.

Entonces:

Frontend
   ↓
POST /login
   ↓
Backend
   ↓
Set-Cookie
   ↓
Browser

Estrategias:

Session Cookies
JWT
OAuth 2.0 / OpenID Connect


Después:

GET /profile
Cookie: session=...


#### La autenticación y la autorización deben estar principalmente bajo control del backend


9. Authentication ≠ Authorization

¿Quién eres?
¿Qué puedes hacer?

User authenticated
        ↓
Role = editor
        ↓
Can edit task
        ↓
Cannot delete project


#### El frontend puede adaptar la UI: mostrar / ocultar botón

#### pero la autorización real debe comprobarse en backend.


10. Estado de servidor

#### Los datos provenientes del backend son server state.

Ej:

tasks
users
orders
notifications

#### No necesariamente quieres copiarlos indiscriminadamente a un store global.

Una arquitectura puede ser:

Server
   ↓
Query / Cache
   ↓
Components

y manejar:

loading
error
success
stale
refetch
cache
pagination

#### con herramientas específicas de server-state cuando el proyecto lo necesita.


11. Error contract

No alcanza con:

{
  "error": "Something went wrong"
}


Se definen errores estructurados

{
  "error": {
    "code": "TASK_TITLE_REQUIRED",
    "message": "Task title is required",
    "details": {
      "field": "title"
    }
  }
}


Entonces frontend puede hacer:

TASK_TITLE_REQUIRED
        ↓
input error


mientras:

TASK_NOT_FOUND
        ↓
404 UI

y

UNAUTHORIZED
        ↓
redirect/login

Esto crea un contrato claro.


12. Status codes

El frontend y backend deben tener una semántica consistente

200 OK
201 Created
204 No Content

400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Unprocessable Content
429 Too Many Requests

500 Internal Server Error
503 Service Unavailable

No significa que debas usar absolutamente todos.

Pero sí definir una convención


13. Validación en ambos lados

Frontend
        ↓
UX validation
        ↓
Backend
        ↓
Security / business validation

Front:
Ej: "El título es obligatorio."

Backend:
title cannot be empty
user has permission
task belongs to project
business rule valid

#### Nunca confiar exclusivamente en la validación del cliente.


14. CORS

Si tienes:

Frontend:
https://app.example.com

y

Backend:
https://api.example.com

#### el navegador considera que son distintos origins.

#### debes diseñar correctamente: front -> Browser CORS rules -> Backend

#### El backend debe permitir explícitamente los origins necesarios.


#### En producción no es buena práctica abrir indiscriminadamente: `Allow-Origin: *`
##### especialmente cuando hay credenciales implicadas.



15. Environment configuration

#### Frontend y backend necesitan configuración separada

Development
Staging
Production

Front:
API_BASE_URL=https://api.example.com

Back:
DATABASE_URL=...
REDIS_URL=...
JWT_SECRET=...

#### regla crítica: Los secretos nunca deben enviarse al bundle frontend.


16. Versionado de API

#### ¿Qué sucede cuando backend cambia?

GET /api/v1/tasks

cambiar el contrato.

diferentes estrategias:
v1
v2

o evolución compatible
GET /tasks
manteniendo compatibilidad hacia atrás.

objetivo evitar:
Backend deploy
      ↓
Frontend breaks

Un contrato bien diseñado y una estrategia de compatibilidad reducen mucho ese riesgo.


17. OpenAPI

Para REST es muy útil describir formalmente la API mediante OpenAPI.

Ej:

openapi.yaml

puede definir:

GET /tasks
POST /tasks
GET /tasks/{id}
PUT /tasks/{id}
DELETE /tasks/{id}

Con:

request schemas
response schemas
errors
parameters
authentication

para generar:

TypeScript types
API clients
documentation
mocks

#### Esto reduce inconsistencias entre frontend y backend.



18. React + NestJS

project/
│
├── frontend/
│   │
│   └── src/
│       ├── app/
│       ├── pages/
│       ├── features/
│       ├── entities/
│       ├── shared/
│       ├── infrastructure/
│       │   └── api/
│       └── styles/
│
└── backend/
    │
    └── src/
        ├── modules/
        ├── application/
        ├── domain/
        └── infrastructure/

Ej:

#### frontend/features/tasks

Contener:

components/
hooks/
application/

y

#### frontend/infrastructure/api/

Contener:

http-client.ts
task-api.ts
user-api.ts

### Mientras NestJS: backend/modules/tasks

podría contener:

controllers/
application/
domain/
infrastructure/


19. Separación potente

Construir frontera clara:

```
             FRONTEND                         BACKEND

       Presentation                       Presentation
            │                                  │
            ▼                                  ▼
       Application                         Application
            │                                  │
            ▼                                  ▼
         Domain                              Domain
            │                                  │
            ▼                                  ▼
       Infrastructure                    Infrastructure
            │                                  │
            └────────── API CONTRACT ──────────┘
```        

Frontend Domain
      X
Backend Domain


#### No deberían depender directamente uno del otro.

#### Se comunican mediante: DTO, HTTP y API Contract


20. Monolito vs microservicios

Frontend
    ↓
Backend monolith
    ↓
PostgreSQL

puede ser excelente


O

Frontend
    ↓
API Gateway
    ↓
┌─────────┬─────────┬─────────┐
│ Auth    │ Orders  │ Billing │
└─────────┴─────────┴─────────┘

La arquitectura de integración frontend-backend sigue teniendo los mismos principios.


21. Ej

                         USER
                           │
                           ▼
                       FRONTEND
                           │
               ┌───────────┴───────────┐
               │                       │
               ▼                       ▼
            UI/UX                 Application
                                       │
                                       ▼
                                    Domain
                                       │
                                       ▼
                                API Repository
                                       │
                                       ▼
                                  HTTP Client
                                       │
══════════════════════ API CONTRACT ══════════════════════
                                       │
                                  HTTP/HTTPS
                                       │
                                   BACKEND
                                       │
                                       ▼
                                  Controller
                                       │
                                       ▼
                                  Use Case
                                       │
                                       ▼
                                    Domain
                                       │
                                       ▼
                                  Repository
                                       │
                                       ▼
                                Infrastructure
                                       │
                          ┌────────────┼────────────┐
                          ▼            ▼            ▼
                       Database      Cache     External API
                       

22. Reglas

1. Frontend y backend son sistemas separados.
2. La API es una frontera, no un detalle.
3. Diseña el contrato antes de acoplar implementaciones.
4. No mezcles UI con HTTP.
5. No propagues DTOs del backend por toda la UI.
6. Separa server state de UI state.
7. Los errores también forman parte del contrato.
8. Authentication y authorization son conceptos diferentes.
9. Frontend mejora UX; backend garantiza seguridad y reglas.
10. Diseña para evolucionar el contrato sin romper al otro lado.




## Arquitectura Simple


src/
│
├── app/
│   ├── App.tsx
│   └── router.tsx
│
├── pages/
│   ├── HomePage.tsx
│   └── TasksPage.tsx
│
├── components/
│   ├── Button.tsx
│   ├── Input.tsx
│   └── Card.tsx
│
├── features/
│   └── tasks/
│       ├── TaskList.tsx
│       ├── TaskItem.tsx
│       ├── TaskForm.tsx
│       ├── task.service.ts
│       ├── task.types.ts
│       └── task.logic.ts
│
├── services/
│   └── api.ts
│
├── hooks/
│   └── useTasks.ts
│
├── styles/
│   ├── theme.ts
│   └── GlobalStyles.ts
│
└── main.tsx



1. app

Configuración principal de la app

app/
├── App.tsx
└── router.tsx

```
function App() {
  return <Router />;
}
```


pueden vivir:

```
routing
providers
global configuration
application bootstrap
```

No debería contener lógica específica de tareas, usuarios, etc.


2. pages/

Representan pantallas.

pages/
├── HomePage.tsx
└── TasksPage.tsx

```
function TasksPage() {
  return (
    <>
      <TaskForm />
      <TaskList />
    </>
  );
}
```

La página compone funcionalidades.

No debería convertirse en el lugar donde está toda la lógica de negocio.


3. components/

Componentes visuales reutilizables.

components/
├── Button.tsx
├── Input.tsx
├── Card.tsx
└── Badge.tsx

Ej:

```
<Button variant="primary">
  Crear tarea
</Button>
```

no deberían saber nada de:

API
Tasks
Users
Authentication
Database

Son infraestructura de UI.


4. features/

#### parte más importante de esta arquitectura: Agrupamos por funcionalidad.

features/
└── tasks/
    ├── TaskList.tsx
    ├── TaskItem.tsx
    ├── TaskForm.tsx
    ├── task.service.ts
    ├── task.types.ts
    └── task.logic.ts

    
Todo lo relacionado con Tasks

Más escalable que tener:

components/
hooks/
services/
types/
utils/


5. task.types.ts

Tipos relacionados con Task.

```
export type Task = {
  id: string;
  title: string;
  completed: boolean;
};
```

Se podría tener:

```
export type CreateTaskInput = {
  title: string;
};
```


6. task.logic.ts

Lógica que no necesita React.

```
export function completeTask(task: Task): Task {
  return {
    ...task,
    completed: true,
  };
}
```

o

```
export function filterTasks(
  tasks: Task[],
  filter: string
): Task[] {
  // ...
}
```

Podemos probarlo independientemente de la UI.

task.logic.ts
      ↓
pure logic
      ↓
unit tests


7. task.service.ts

Aislamos la comunicación relacionada con Tasks.

```
import { api } from "../../services/api";

export async function getTasks() {
  return api.get("/tasks");
}

export async function createTask(title: string) {
  return api.post("/tasks", { title });
}
```

La UI no necesita saber cómo funciona HTTP.


8. services/api.ts

Aquí centralizamos el cliente HTTP.

Ej:

```
export const api = {
  async get(url: string) {
    const response = await fetch(url);
    return response.json();
  },

  async post(url: string, body: unknown) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return response.json();
  },
};
```

podrían vivir:

base URL
headers
credentials
authentication
error handling
interceptors
timeouts


9. hooks/

hook puede conectar React con la lógica de aplicación

```
export function useTasks() {
  // fetch
  // state
  // loading
  // error
}
```

Y la página queda mucho más limpia:


```
function TasksPage() {
  const {
    tasks,
    loading,
    error,
  } = useTasks();

  // render...
}
```

El componente no necesita conocer todos los detalles de fetching


10. Flujo completo
 
Una petición sencilla podría recorrer:

```
User
 ↓
TaskForm
 ↓
useTasks()
 ↓
task.service.ts
 ↓
api.ts
 ↓
HTTP
 ↓
Backend
```


al volver:

```
Backend
 ↓
api.ts
 ↓
task.service.ts
 ↓
useTasks()
 ↓
React state
 ↓
TaskList
 ↓
TaskItem
```

Suficientemente limpio para muchísimas aplicaciones.


11. Dependencias

app
 ↓
pages
 ↓
features
 ↓
components


infraestructura:

features
 ↓
services


dependencias circulares:

A → B → C → A


buscamos algo más parecido a:

Page
 ↓
Feature
 ↓
Service
 ↓
API


12. Ej

```
src/
│
├── app/
│   ├── App.tsx
│   └── router.tsx
│
├── pages/
│   └── TasksPage.tsx
│
├── features/
│   └── tasks/
│       ├── TaskForm.tsx
│       ├── TaskList.tsx
│       ├── TaskItem.tsx
│       ├── task.logic.ts
│       ├── task.service.ts
│       └── task.types.ts
│
├── components/
│   ├── Button.tsx
│   ├── Input.tsx
│   └── Card.tsx
│
├── hooks/
│   └── useTasks.ts
│
├── services/
│   └── api.ts
│
├── styles/
│   ├── theme.ts
│   └── GlobalStyles.ts
│
└── main.tsx
```


                    App
                     │
                     ▼
                  Page
                     │
                     ▼
                 Feature
              ┌──────┼──────┐
              ▼      ▼      ▼
            Form    List   Logic
              │      │
              └──┬───┘
                 ▼
               Hook
                 │
                 ▼
              Service
                 │
                 ▼
                API
                 │
                 ▼
              Backend



14. Simple

No tenemos:

```
domain/
application/
infrastructure/
repositories/
use-cases/
adapters/
factories/
commands/
```

Podríamos introducir esas capas cuando la aplicación realmente las necesite

De:

TaskPage
 ↓
task.service
 ↓
API

A: si la complejidad aumenta

TaskPage
 ↓
useCreateTask()
 ↓
CreateTaskUseCase
 ↓
TaskRepository
 ↓
HttpTaskRepository
 ↓
ApiClient


La arquitectura puede evolucionar gradualmente.


15. Comienzo

app/
pages/
features/
components/
services/
hooks/
styles/

Nuevas capas solamente cuando aparezca una necesidad real.

Simple
  ↓
features
  ↓
domain
  ↓
application
  ↓
infrastructure


16. Más simple


src/
│
├── app/
├── pages/
├── components/
├── features/
│   └── tasks/
│       ├── TaskList.tsx
│       ├── TaskItem.tsx
│       ├── TaskForm.tsx
│       ├── task.logic.ts
│       └── task.service.ts
│
├── services/
│   └── api.ts
│
└── styles/


tiene varias propiedades buenas:

✓ separación de responsabilidades
✓ feature-oriented organization
✓ UI reutilizable
✓ lógica testeable
✓ API aislada
✓ fácil de entender
✓ fácil de evolucionar



#### Page compone → Feature representa una capacidad del producto → Logic contiene reglas → Service habla con el backend → Components representan UI reutilizable.









# FS







# C






# Varilog






# Arduino




# Rasp


