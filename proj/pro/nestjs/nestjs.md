
# Backend

Construcción de la lógica de negocio
Gestión de datos
Comunicación segura entre el servidor y las aplicaciones cliente


## 1. Arquitectura Backend

`Modelo Cliente-Servidor`:
Ciclo de vida de una petición (Request) y respuesta (Response)
sobre el protocolo HTTP/HTTPS.

`Protocolo HTTP y Códigos de Estado`:
Verbos HTTP (GET, POST, PUT, DELETE, PATCH) y familias de respuestas (2xx, 3xx, 4xx, 5xx).

`Diseño de APIs RESTful`:
Estructura de endpoints, parámetros de ruta/consulta (params, query),
encabezados (headers) y payloads en formato JSON.


## 2. Lógica de Servidor y Construcción de APIs

`Entorno de Ejecución`:
Configuración del entorno de desarrollo y servidor web básico.

`Estructura y Ruteo`:
Separación clara de responsabilidades entre rutas
controladores y servicios.

`Middleware y Manejo de Errores`:
Intercepción de peticiones, validación de datos de entrada
y gestión centralizada de excepciones


## 3. Persistencia de Datos y Bases de Datos

`Modelado de Datos`:
Diferencias entre bases de datos relacionales (SQL como PostgreSQL/SQLite)
y no relacionales (NoSQL como MongoDB).

`Operaciones CRUD`:
Creación, lectura, actualización y borrado de registros directamente
directamente o mediante un ORM/Query Builder.

`Relaciones y Esquemas`:
Manejo de claves primarias y foráneas, consultas con uniones (joins)
control de versión con migraciones.


## 4. Autenticación, Autorización y Seguridad

`Control de Acceso`:
Diferencia entre autenticar la identidad del usuario y autorizar sus permisos

`Manejo de Sesiones y Tokens`:
Implementación de JSON Web Tokens (JWT)
cifrado seguro de contraseñas (hashing con bcrypt).

`Seguridad Esencial`:
Configuración de CORS, prevención de inyecciones de datos, sanitización
manejo de variables de entorno (.env).


## 5. Testing, Buenas Prácticas y Despliegue

`Pruebas Automatizadas`:
Creación de tests unitarios y de integración para validar rutas y lógica interna

`Principios de Arquitectura`:
Organización limpia del código mediante separación de capas
principios de mantenibilidad.

`Publicación (Deployment)`:
Contenerización básica y despliegue del proyecto en plataformas cloud
(ej. Render, Railway o AWS).


## 6. Proj

API REST funcional completa:
Ej, plataforma de gestión de tareas o un e-commerce simplificado
incluya registro/login con JWT, almacenamiento relacional de datos
y despliegue en un entorno de producción accesible mediante una URL pública.




# Frontend

Llevar una idea desde la maquetación hasta el despliegue


## 1. Arquitectura Web y Semántica con HTML5

funcionamiento de la web y construir estructuras limpias
accesibles y optimizadas para motores de búsqueda (SEO).
Funcionamiento del modelo cliente-servidor, HTTP/HTTPS y DNS.
Estructura y anatomía de un documento HTML.
Etiquetas semánticas (<header>, <main>, <article>, <nav>, <footer>) frente a contenedores genéricos.
Formularios, validaciones nativas y tipos de datos.
Fundamentos de accesibilidad web (principios WCAG, etiquetas ARIA básicas, contraste y navegación por teclado).


## 2. Estilos, Layouts y Diseño Responsivo con CSS3

Diseño visual y la maquetación adaptable sin depender de frameworks externos.
El Modelo de Caja (Box Model), especificidad y regla de cascada.
Diseños unidimensionales con Flexbox y bidimensionales con CSS Grid.
Estrategia Mobile-First, Media Queries y unidades de medida relativas (rem, em, vh, vw).
Variables CSS nativas (Custom Properties) e introducción a transiciones y transformaciones.


## 3. Lógica, DOM e Interactividad con JavaScript (ES6+)

Interactividad dinámica y consumo de datos mediante JavaScript moderno
Sintaxis de ES6+: declaración de variables (const/let), funciones flecha, desestructuración y módulos (import/export).
Manipulación del DOM (Document Object Model) y manejo de eventos del usuario.
Programación asíncrona: Promesas, la API fetch y uso de async/await.
Persistencia de datos en el navegador (localStorage y sessionStorage).


## 4. Entorno de Desarrollo y Flujo de Trabajo Profesional

Uso de la terminal e interfaz de línea de comandos (CLI).
Control de versiones distribuido con Git (flujo de ramas, commits, fusión de código y resolución de conflictos).
Alojamiento de código e integración en GitHub.
Empaquetadores modernos (Vite) y gestión de dependencias con npm


## 5. Desarrollo Modular e Interfaces con React

Aplicaciones escalables mediante arquitectura basada en componentes reutilizables
Conceptos centrales de React, Virtual DOM y sintaxis JSX.
Arquitectura de componentes, composición y paso de datos mediante props.
Manejo de estado interactivo con useState y control de efectos secundarios con useEffect.
Renderizado condicional, manejo de listas y eventos sintéticos.


## 6. Proj

Refactorización, buenas prácticas de código y optimización de rendimiento (Lighthouse).
Despliegue continuo (CD) en plataformas en la nube como Vercel, Netlify o GitHub Pages.
Checklist de calidad: validación de sintaxis, pruebas de usabilidad y compatibilidad entre navegadores
 



# NestJS


## 1. Fundamentos de NestJS

Arquitectura sobre Express/Fastify
Instalación del CLI (@nestjs/cli) y creación del primer proyecto.
Estructura de archivos de una aplicación NestJS (main.ts, app.module.ts, etc.).

 
## 2. Arquitectura: Controladores y Servicios)

`Controladores (@Controller)`:
Manejo de rutas, parámetros de consulta (@Query)
parámetros de ruta (@Param) y cuerpo (@Body).

`Inyección de Dependencias y Proveedores`:
(@Injectable): Creación de servicios para la lógica de negocio.

`Principios SOLID y separación de responsabilidades en NestJS.`:


## 3. Capa de Datos (DTOs, Validaciones y Base de Datos)

Creación de `DTOs` (Data Transfer Objects).
`Validación de datos` con class-validator y class-transformer mediante el ValidationPipe global.
Integración de un `ORM` (TypeORM o Prisma) para persistencia con PostgreSQL/SQLite.


## 4. Arquitectura Modular Avanzada

Creación de Feature Modules independientes.

Módulos compartidos (Shared Modules) y globales (@Global()).

Variables de entorno con @nestjs/config.


## 5. Middleware, Interceptores y Filtros de Excepción

Captura y formateo de errores globales con Exception Filters.

Transformación de respuestas con Interceptors.

Protección de rutas básicas mediante Guards


## Módulos en NestJS

Un Módulo en NestJS es una clase TypeScript decorada con @Module()
##### sirve para agrupar e aislar componentes relacionados (controladores, servicios, entidades).
Toda aplicación de NestJS tiene al menos un módulo raíz (AppModule) que organiza el árbol de dependencias

```
					 ┌──────────────────┐
                     │    AppModule     │  (Módulo Raíz)
                     └────────┬─────────┘
                              │
               ┌──────────────┴──────────────┐
               ▼                             ▼
     ┌──────────────────┐          ┌──────────────────┐
     │   UsersModule    │          │  ProductsModule  │  (Feature Modules)
     └──────────────────┘          └──────────────────┘
```


### Estructura de la metadato @Module()

El decorador @Module() acepta un objeto con cuatro propiedades principales:

`controllers`:
Lista de controladores definidos en este módulo que deben ser instanciados para manejar peticiones HTTP

`providers`:
Lista de servicios, repositorios o factories instanciados por el inyector de dependencias de NestJS y compartidos dentro del módulo.

`imports`:
Lista de otros módulos cuyas exportaciones se necesitan dentro de este módulo.

`exports`:
Subconjunto de providers de este módulo que deben estar disponibles para otros módulos que lo importen.


## Ej código

Módulo Real (users.module.ts)
Muestra un ejemplo de un Feature Module completo de Usuarios

```
// users.module.ts
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [],               // Módulos externos que este módulo requiere
  controllers: [UsersController], // Controladores que manejan HTTP
  providers: [UsersService],      // Servicios de lógica de negocio e inyección de dependencias
  exports: [UsersService],        // Exportamos el servicio si otro módulo necesita usar UsersService
})
export class UsersModule {}
```

Vincula con su controlador y servicio:

```
// users.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll() {
    return [{ id: 1, name: 'Alice' }];
  }
}
```

Controlador:

```
// users.controller.ts
import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.findAll();
  }
}
```



### Tipos de Módulos según su Propósito

1. `Root Module` (AppModule):
Es el punto de entrada que ensambla toda la aplicación importando los módulos secundarios.

2. `Feature Modules`:
Encapsulan un dominio específico de la aplicación (ej. AuthModule, UsersModule, ProductsModule).

3. `Shared Modules`:
Módulos que exportan proveedores reutilizables en múltiples partes (ej. un DatabaseModule o MailerModule).

4. `Global Modules` (@Global()):
Módulos registrados una sola vez en el AppModule cuyos proveedores quedan disponibles automáticamente en toda la aplicación sin necesidad de importarlos explícitamente en cada submódulo.


### Generación Automática vía CLI

Para crear un módulo y sus componentes rápidamente desde la consola:

```
# Genera la estructura de carpetas y el archivo users.module.ts
nest generate module users

# Genera el controlador y el servicio dentro del módulo users
nest generate controller users
nest generate service users
```

O en su sintaxis corta: nest g mo users, nest g co users, nest g s users





# 1. Fundamentos de NestJS

Arquitectura sobre Express/Fastify
Instalación del CLI (@nestjs/cli) y creación del primer proyecto.
Estructura de archivos de una aplicación NestJS (main.ts, app.module.ts, etc.).


Framework progresivo de Node.js diseñado para construir aplicaciones backend escalables mantenibles y fuertemente estructuradas
Escrito nativamente en TypeScript y combina conceptos de Programación Orientada a Objetos (POO), Programación Funcional (FP) y Programación Reactiva Funcional (FRP).

`Estructura opinionada`:
Resuelve la falta de convenciones estándar en Node.js imponiendo una arquitectura clara inspirada en Angular (módulos, controladores, servicios).

`Adaptador HTTP abstracto`:
Por defecto corre sobre Express, pero permite alternar a Fastify de forma transparente si se requiere mayor rendimiento en peticiones por segundo.

`Tipado y decoradores`:
Aprovecha al máximo los decoradores de TypeScript para definir rutas
inyecciones de dependencias y validaciones con sintaxis limpia y declarativa


## Instalación NestJS

node -v
npm -v

npm install -g @nestjs/cli


Crear un nuevo proyecto:
comando de inicialización y selecciona tu gestor de paquetes preferido (npm, yarn o pnpm):

`nest new mi-primer-nest`

Servidor en modo desarrollo:

```
cd mi-primer-nest
npm run start:dev
```

http://localhost:3000 para comprobar que el servidor responde con "Hello World!".



## Estructura

Proyecto (src/)

```
src/
├── app.controller.spec.ts  # Pruebas unitarias del controlador básico
├── app.controller.ts       # Maneja la ruta de entrada (solicitud HTTP)
├── app.module.ts           # Módulo raíz que organiza las dependencias
├── app.service.ts          # Contiene la lógica de negocio básica
└── main.ts                 # Punto de entrada (arranca la aplicación)
```


1. Punto de entrada (main.ts)

##### El archivo main.ts utiliza la clase NestFactory para crear la instancia de la aplicación cargando el módulo raíz:

```
import { NestFactory } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  // Crea la instancia de NestJS usando el AppModule
  const app = await NestFactory.create(AppModule);
  
  // Escucha peticiones en el puerto 3000
  await app.listen(3000);
}
bootstrap();
```


2. app.module.ts: módulo raíz de la aplicación

##### En NestJS, la aplicación se organiza como un árbol de módulos
main.ts llama a NestFactory.create(AppModule)
##### convierte a este archivo en el punto central de orquestación desde donde NestJS construye el mapa de dependencias

app.module.ts
Este archivo define la clase AppModule decorada con @Module().

```
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

#### 1. @Module({...}): Decorador que transforma una clase TypeScript normal en un módulo reconocible por NestJS. Recibe un objeto de configuración con metadatos.

#### 2. imports: []: Un arreglo reservado para traer funcionalidades de otros módulos (por ejemplo, un AuthModule, UsersModule o módulos de terceros como TypeOrmModule o ConfigModule).

#### 3. controllers: [AppController]: Registra los controladores de este módulo
Le indica a NestJS qué clases se encargarán de escuchar y responder a las peticiones HTTP externas.

#### 4. providers: [AppService]: Registra los servicios o proveedores de dependencias
Aquí van las clases que contienen lógica de negocio o acceso a datos y que pueden ser inyectadas dentro de los controladores u otros servicios

#### export class AppModule {}: Una clase vacía No necesita lógica interna porque toda su responsabilidad reside en la configuración declarativa del decorador @Module.


3. app.controller.ts

#### Su función principal es recibir las solicitudes HTTP entrantes y devolver la respuesta al cliente

```
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```


#### 1. @Controller(): Decorador que registra la clase como un controlador.
Si se le pasa un parámetro de ruta (por ejemplo @Controller('v1'))
todas las rutas internas responderán con ese prefijo (ej. /v1).
Al estar vacío, responde directamente en la raíz /.

#### 2. Inyección en el constructor: La sintaxis constructor(private readonly appService: AppService)
Le pide a NestJS que inyecte una instancia de AppService
NestJS se encarga de instanciar la clase automáticamente sin requerir el operador new

#### 3. @Get(): Decorador de método HTTP
Indica que la función decorada responderá a peticiones GET
Si se especifica un parámetro como @Get('saludo'), la ruta completa pasaría a ser /saludo.

#### Delegación de responsabilidades
El controlador no contiene la lógica para construir la respuesta
simplemente delega el trabajo llamando a this.appService.getHello().


Decoradores HTTP Disponibles:
NestJS provee decoradores equivalentes para todos los verbos HTTP estándar que se usan dentro de los controladores

Decorador,Método HTTP,Uso habitual
@Get(),GET,Lectura / Obtención de datos
@Post(),POST,Creación de nuevos recursos
@Put(),PUT,Actualización completa de un recurso
@Patch(),PATCH,Actualización parcial de un recurso
@Delete(),DELETE,Eliminación de un recurso


4. app.service.ts

#### Reside la lógica de negocio de la aplicación.

```
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
```

#### 1. @Injectable(): Este decorador le indica al contenedor de Inversión de Control (IoC) de NestJS que esta clase es un proveedor (provider).
Permite que NestJS gestione su ciclo de vida y la inyecte de forma automática en cualquier controlador u otro servicio que la requiera en su constructor

#### 2. Separación de responsabilidades: La clase no sabe nada sobre peticiones HTTP, cabeceras, ni códigos de estado
Solo recibe entradas, procesa datos (o interactúa con repositorios/APIs externas) y devuelve el resultado


#### Flujo: recorrido de una solicitud GET

app.module.ts, app.controller.ts y app.service.ts

```
Cliente HTTP
       │
       ▼ (Petición GET /)
┌──────────────────────┐
│    AppController     │  1. Escucha la ruta y recibe la solicitud.
└──────────┬───────────┘
           │
           ▼ (this.appService.getHello())
┌──────────────────────┐
│      AppService      │  2. Ejecuta la lógica y retorna "Hello World!".
└──────────┬───────────┘
           │
           ▼
  Respuesta al cliente ("Hello World!")
```



### Testing del Controller: app.controller.spec.ts

NestJS promueve el desarrollo guiado por pruebas (TDD) e incluye la configuración de Jest por defecto
creando un archivo de prueba para cada componente generado.

permite realizar pruebas unitarias para verificar que el controlador responda correctamente sin necesidad de levantar un servidor HTTP real ni conectarse a dependencias externas

```
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    // Crea un módulo de prueba aislado en memoria
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // Verifica que el método del controlador devuelva el valor esperado
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
```


#### 1. Verificar el contrato de respuesta
Asegura que los métodos del controlador llamen a los servicios adecuados
y entreguen la estructura de datos que el cliente o la API espera.

#### 2. Permite usar Mocks (Simulación): En proyectos reales, en vez de usar el AppService real que podría conectarse a una base de datos o API externa la prueba inyecta una versión falsa (mock) del servicio
Esto permite probar el controlador de forma aislada y veloz.

#### 3. Aislamiento con TestingModule: La utilidad Test.createTestingModule() de @nestjs/testing
crea un contenedor de inyección de dependencias en memoria idéntico al de la aplicación real
pero exclusivo para la prueba

#### 4. Prevención de regresiones: Permite modificar la lógica del controlador o refactorizar el código
con la certeza de que las rutas principales no se romperán en producción.



 
# 2. Arquitectura: Controladores y Servicios

`Controladores (@Controller)`:
Manejo de rutas, parámetros de consulta (@Query)
parámetros de ruta (@Param) y cuerpo (@Body).

`Inyección de Dependencias y Proveedores`:
(@Injectable): Creación de servicios para la lógica de negocio.

`Principios SOLID y separación de responsabilidades en NestJS.`:


#### Recibir peticiones HTTP, cómo gestionar dependencias sin acoplar el código
mantener una arquitectura limpia y mantenible.


1. Controladores (@Controller)
#### Responsables de manejar las solicitudes HTTP entrantes y devolver respuestas al cliente

Función: Definen las rutas de la API (/users, /products, etc.) y los verbos HTTP (GET, POST, PUT, DELETE).

Manejo de datos: Extraen la información enviada por el cliente mediante decoradores de parámetros como @Body(), @Param(), @Query() y @Headers().

Regla principal: Son capas delgadas
No deben contener lógica de negocio ni interactuar con bases de datos
únicamente validan/reciben la entrada y delegan el trabajo


2. Inyección de Dependencias y Proveedores (@Injectable)
#### Gestiona el ciclo de vida de los objetos y sus relaciones

Proveedores (Providers): Clases marcadas con @Injectable() que realizan tareas específicas (lógica de negocio, consultas a bases de datos, consumo de APIs externas).

Inyección de Dependencias (DI): En lugar de crear instancias manualmente con new MiServicio(), el controlador declara en su constructor que necesita MiServicio y NestJS se encarga de instanciarlo y suministrarlo automáticamente.

Ventaja: Permite reemplazar componentes fácilmente y aislar clases para realizar pruebas unitarias con mocks


3. Principios SOLID y Separación de Responsabilidades
NestJS promueve por diseño buenas prácticas de ingeniería de software para mantener el código escalable:

#### Responsabilidad Única (SRP): Cada clase hace una sola cosa
##### El controlador atiende la red, el servicio ejecuta las reglas del negocio y la base de datos almacena

#### Inversión de Dependencias (DIP): Los componentes de alto nivel (controladores) no dependen directamente de la creación de clases de bajo nivel (servicios)
##### sino de abstracciones manejadas por el contenedor IoC (Inversion of Control) de NestJS.

Desacoplamiento y Testabilidad: Al separar las capas, puedes modificar la base de datos
o el motor de procesamiento sin tocar las rutas HTTP ni romper el comportamiento de la aplicación.



# 3. Capa de Datos (DTOs, Validaciones y Base de Datos)

Creación de `DTOs` (Data Transfer Objects).
`Validación de datos` con class-validator y class-transformer mediante el ValidationPipe global.
Integración de un `ORM` (TypeORM o Prisma) para persistencia con PostgreSQL/SQLite.


1. Creación de DTOs (Data Transfer Objects)

objeto que define la forma y la estructura de los datos que se transfieren entre el cliente y el servidor
(por ejemplo, en el cuerpo de una petición POST o PUT).

`Clases sobre Interfaces`: En NestJS los DTOs se definen mediante clases de TypeScript en lugar de interfaces
Las interfaces desaparecen al transpilar a JavaScript, mientras que las clases se conservan en tiempo de ejecución (runtime)
lo que permite inspeccionar metadatos para la validación.

Beneficio:
Establece un contrato claro para las peticiones HTTP
evita recibir propiedades no deseadas o mal estructuradas.


2. Validación de Datos en Tiempo de Ejecución

Dado que TypeScript solo valida tipos en tiempo de compilación
##### NestJS utiliza tres herramientas combinadas para validar las peticiones cuando la aplicación está corriendo:

`class-validator`:
Proporciona decoradores que se aplican a las propiedades del DTO
(@IsString(), @IsEmail(), @MinLength(), @IsPositive()).

`class-transformer`:
Convierte objetos planos JSON enviados por el cliente en instancias de la clase DTO especificada

`ValidationPipe global`:
Un tubo (pipe) de NestJS que intercepta la petición
ejecuta las reglas de class-validator y, si la información es inválida
responde automáticamente con un error 400 Bad Request detallando qué campos fallaron


3. Integración de un ORM (TypeORM / Prisma)

Para guardar y consultar datos sin escribir SQL manualmente
NestJS interactúa con motores de bases de datos (PostgreSQL, SQLite, MySQL) a través de un ORM (Object-Relational Mapping).

`Entidades`:
Clases que mapean directamente las tablas de la base de datos
(por ejemplo, una clase User se convierte en la tabla users).

`Inyección de Repositorios / Clientes`:
Los servicios de NestJS inyectan repositorios de TypeORM
o la instancia de Prisma Client para realizar operaciones CRUD
(find, create, update, delete) de forma asíncrona

`Separación clara`:
El DTO define cómo entran los datos desde la red
la Entidad define cómo se almacenan en la base de datos.



# 4. Arquitectura Modular Avanzada

Creación de Feature Modules independientes.
Módulos compartidos (Shared Modules) y globales (@Global()).
Variables de entorno con @nestjs/config.

Escalamos la aplicación desde una estructura básica hacia un sistema modular desacoplado
mantenible y listo para entornos de producción.

1. Feature Modules Independientes
##### Un Feature Module encapsula todo el código perteneciente a un mismo dominio de negocio
(como UsersModule, ProductsModule u OrdersModule).

Encapsulamiento: Agrupa sus propios controladores, servicios, DTOs y entidades dentro de una sola carpeta estructurada.

Mantenibilidad: Permite trabajar en funcionalidades específicas sin afectar otros dominios de la aplicación ni saturar el módulo raíz (AppModule).

Límite de visibilidad: Por defecto, los proveedores registrados en un módulo son privados y no son accesibles desde fuera a menos que el módulo los exporte explícitamente.


2. Módulos Compartidos (Shared Modules) y Globales (@Global())
A medida que la aplicación crece, ciertos servicios deben reutilizarse en múltiples partes del sistema

`Shared Modules`:
Módulos que exportan proveedores específicos
(exports: [DatabaseService])
para que otros módulos los utilicen agregándolos a su arreglo de imports.

`Módulos Globales (@Global())`:
Decorador que registra un módulo (como un LoggerModule o DatabaseModule) de forma única en el AppModule
Sus proveedores quedan disponibles en toda la aplicación sin necesidad de importar el módulo en cada Feature Module individual


3. Variables de Entorno con @nestjs/config
Para gestionar claves secretas, puertos y credenciales de base de datos de forma segura entre diferentes entornos (desarrollo, pruebas, producción), NestJS utiliza el paquete @nestjs/config.

`ConfigModule`:
Se importa generalmente en el AppModule de forma global
(ConfigModule.forRoot({ isGlobal: true })) para cargar archivos .env.

`ConfigService`:
Servicio inyectable que permite acceder a las variables de entorno de forma tipada y segura
(por ejemplo, this.configService.get<number>('PORT')).

`Validación de esquema`:
Permite integrar bibliotecas de validación (como Joi o Zod)
para asegurar que la aplicación no inicie si falta una variable de entorno crítica.




# 5. Middleware, Interceptores y Filtros de Excepción

Captura y formateo de errores globales con Exception Filters.
Transformación de respuestas con Interceptors.
Protección de rutas básicas mediante Guards

1. Captura y Formateo de Errores con Exception Filters
##### Los Exception Filters son la última línea de defensa para manejar errores en NestJS

`Estandarización de errores`:
Capturan cualquier excepción no controlada (HttpException, errores de sintaxis, fallos de base de datos)
y la transforman en una respuesta HTTP estructurada y uniforme.

`Control del formato de respuesta`:
Permiten personalizar la estructura devuelta al cliente (por ejemplo
devolviendo { statusCode: 404, message: 'Usuario no encontrado', timestamp: '...' }).

`Ámbito de aplicación`:
Pueden aplicarse a nivel de un método específico
un controlador entero o de forma global en main.ts (app.useGlobalFilters(...)).


2. Transformación de Respuestas y Aspectos con Interceptors
##### Interceptors están inspirados en la Programación Orientada a Aspectos (AOP) y utilizan RxJS Observables para envolver la ejecución de la petición

`Doble momento de acción`:
Permiten ejecutar lógica antes de que el método del controlador sea invocado y después de que este retorne su resultado

`Transformación de datos`:
Envolver todas las respuestas exitosas en un formato estándar
(ej. { data: result, totalCount: n }).

`Manejo de tiempos y logs`:
Medir cuánto tarda cada endpoint en ejecutarse

`Caché`:
Retornar una respuesta previamente guardada en memoria sin llegar a ejecutar el controlador


3. Protección de Rutas Mediante Guards

Los Guards son clases decoradas con @Injectable()
implementan la interfaz CanActivate
para determinar si una petición debe ser procesada o rechazada

`Lógica booleana de acceso`:
Evalúan el contexto de la petición (ExecutionContext)
devuelven true (permite el paso)
false (bloquea inmediatamente lanzando un error 403 Forbidden).

`Ubicación en el ciclo de vida`:
Se ejecutan después de los middlewares
pero antes de los pipes de validación y de la lógica del controlador.

Casos de uso clave:

Autenticación: Validar la presencia y validez de tokens de sesión o JWT en las cabeceras HTTP.

Autorización por Roles: Verificar si el usuario autenticado posee los permisos adecuados (ej. @Roles('admin')).




# Estudio




## 1. Arquitectura y Conceptos Básicos 

Su arquitectura se basa en tres componentes principales

### Módulos (@Module): Organizan el código en bloques funcionales delimitados
Toda aplicación tiene al menos un módulo raíz (AppModule).

### Controladores (@Controller): Reciben las peticiones HTTP y devuelven respuestas al cliente.

### Servicios/Proveedores (@Injectable): Contienen la lógica de negocio y se inyectan en los controladores mediante Inyección de Dependencias.



## 2. Instalación y Creación del Proyecto

```
# 1. Instalar el CLI de NestJS de forma global
npm install -g @nestjs/cli

# 2. Crear un nuevo proyecto
nest new mi-api-nest

# 3. Entrar a la carpeta e iniciar en modo desarrollo
cd mi-api-nest
npm run start:dev
```


## 3. CRUD Básico: Recurso "Tareas"

Comandos del CLI para generar la estructura del módulo tasks:

```
nest g module tasks
nest g controller tasks
nest g service tasks
```

1. Modelo y DTO
archivo src/tasks/task.model.ts para definir la estructura de la entidad:

```
export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}
```

#### Crea el archivo src/tasks/dto/create-task.dto.ts para transferir los datos recibidos en las peticiones HTTP:

```
export class CreateTaskDto {
  title: string;
  description: string;
}
```

2. Lógica de Negocio en el Servicio

Edita src/tasks/tasks.service.ts:

```
import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    const found = this.tasks.find((task) => task.id === id);
    if (!found) {
      throw new NotFoundException(`Tarea con ID "${id}" no encontrada`);
    }
    return found;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
    };
    this.tasks.push(task);
    return task;
  }

  deleteTask(id: string): void {
    const found = this.getTaskById(id);
    this.tasks = this.tasks.filter((task) => task.id !== found.id);
  }
}
```


3. Rutas en el Controlador

Edita src/tasks/tasks.controller.ts:

```
import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): void {
    this.tasksService.deleteTask(id);
  }
}
```


## 4. Bloques Avanzados del Ecosistema


1. Pipes & Validación: Permiten transformar o validar datos de entrada antes de llegar al controlador. Integrando class-validator y class-transformer con ValidationPipe
puedes rechazar peticiones mal formadas automáticamente


2. Guards: Determinan si una petición tiene permisos para acceder a una ruta
(por ejemplo, verificar un token JWT).

3. Interceptors: Permiten interceptar la respuesta o solicitud para modificar el formato del payload o medir tiempos de ejecución

4. Persistencia (Bases de Datos): Se integra habitualmente mediante TypeORM o Prisma ORM para conectar bases de datos relacionales (PostgreSQL, MySQL) o NoSQL (MongoDB).



## 5. Validación de Datos (Pipes & Class-Validator)

#### En producción no podemos confiar en los datos que envía el cliente
##### NestJS utiliza Pipes para interceptar, transformar y validar los datos antes de que lleguen al controlador

1. Instalar dependencias de validación

```
npm install class-validator class-transformer
```

Activar el ValidationPipe globalmente


2. Edita src/main.ts para que todas las peticiones pasen por el validador automáticamente

```
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Activa validación automática en todos los endpoints
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina propiedades que no estén en el DTO
      forbidNonWhitelisted: true, // Lanza error si envían propiedades no permitidas
    }),
  );

  await app.listen(3000);
}
bootstrap();
```


3. Aplicar decoradores al DTO

Edita src/tasks/dto/create-task.dto.ts:

```
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString({ message: 'El título debe ser un texto' })
  @IsNotEmpty({ message: 'El título no puede estar vacío' })
  @MinLength(3, { message: 'El título debe tener al menos 3 caracteres' })
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
```

Si un cliente intenta hacer un POST con un payload inválido (como { "title": "ab" }), NestJS responderá automáticamente con un código HTTP 400 Bad Request indicando el motivo exacto.



## 6. Persistencia de Datos con Base de Datos (Prisma ORM)

1. Reemplazar la memoria RAM por una base de datos real (PostgreSQL, MySQL o SQLite) es el paso estándar usando un ORM como Prisma.

```
npm install prisma --save-dev
npm install @prisma/client

npx prisma init
```

generará el archivo prisma/schema.prisma y un archivo .env con la cadena de conexión


2. Definir el modelo en schema.prisma

prueba rápida local, puedes usar SQLite cambiando el provider en prisma/schema.prisma

```
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

generator client {
  provider = "prisma-client-js"
}

model Task {
  id          String   @id @default(uuid())
  title       String
  description String
  completed   Boolean  @default(false)
  createdAt   DateTime @default(now())
}
```

Ejecuta la migración para crear la tabla:

```
npx prisma migrate dev --name init
```


3. Crear el módulo y servicio de Prisma

Crea un servicio reutilizable para la conexión con la base de datos

```
nest g module prisma
nest g service prisma
```

Edita src/prisma/prisma.service.ts:

```
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
```


Exporta PrismaService en src/prisma/prisma.module.ts:

```
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
```


4. Migrar el Servicio de Tareas a Prisma

Importa PrismaModule en src/tasks/tasks.module.ts y actualiza src/tasks/tasks.service.ts:

```
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async getAllTasks(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async getTaskById(id: string): Promise<Task> {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task) {
      throw new NotFoundException(`Tarea con ID "${id}" no encontrada`);
    }
    return task;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.prisma.task.create({
      data: createTaskDto,
    });
  }

  async deleteTask(id: string): Promise<Task> {
    await this.getTaskById(id);
    return this.prisma.task.delete({ where: { id } });
  }
}
```



## 7. Autenticación y Protección de Rutas (JWT y Guards)

#### Los Guards son clases anotadas con @Injectable() que implementan la interfaz CanActivate
##### Su función principal es determinar si una petición entrante tiene permiso para acceder a una ruta determinada
##### (por ejemplo, validando la presencia de un token JSON Web Token válido).

```
Petición HTTP
        │
        ▼
   ┌──────────┐      ¿Token Válido?
   │  Guard   │ ───► No ───► Responde 401 Unauthorized
   └────┬─────┘
        │ Sí
        ▼
   ┌──────────┐
   │Controlador│
   └──────────┘
```


1. Instalar dependencias para autenticación

```
npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt
npm install --save-dev @types/passport-jwt @types/bcrypt
```

2. módulo de autenticación

```
nest g module auth
nest g service auth
nest g controller auth
``` 

3. Configurar el AuthModule

Edita src/auth/auth.module.ts
registrar el cliente JWT con una clave secreta y tiempo de expiración:

```
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: 'SECRETO_SUPER_SEGURO_123', // En producción se obtiene vía Process.env
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
```

4. Implementar la estrategia JWT (JwtStrategy)

Crea el archivo src/auth/jwt.strategy.ts
Passport usará esta clase para verificar automáticamente la firma del token enviado en los headers HTTP
(Authorization: Bearer <token>):

```
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'SECRETO_SUPER_SEGURO_123',
    });
  }

  async validate(payload: { sub: string; email: string }) {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
    });

    if (!user) {
      throw new UnauthorizedException('Token no válido o usuario no existente');
    }

    // El objeto devuelto se adjunta automáticamente a req.user en los controladores
    return user;
  }
}
```

5. Proteger un Controlador con @UseGuards()
Para requerir autenticación en las rutas de tareas, aplica el guard en src/tasks/tasks.controller.ts:

```
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
@UseGuards(AuthGuard('jwt')) // Protege todas las rutas de este controlador
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }
}
```



## 8. Documentación Interactiva con Swagger (OpenAPI)

NestJS ofrece un módulo oficial para generar automáticamente la documentación interactiva OpenAPI/Swagger
sin necesidad de escribir archivos YAML externos.

1. dependencias

`npm install @nestjs/swagger`

2. Configurar Swagger en src/main.ts

```
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Configuración del documento Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Tareas')
    .setDescription('Documentación interactiva del curso NestJS')
    .setVersion('1.0')
    .addBearerAuth() // Añade soporte para probar endpoints con tokens JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}
bootstrap();
```


3. Documentar DTOs y Controladores

Usa los decoradores de @nestjs/swagger para añadir descripciones y ejemplos visibles en la UI:

En src/tasks/dto/create-task.dto.ts:

```
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ example: 'Comprar leche', description: 'Título de la tarea' })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @ApiProperty({ example: 'Ir al supermercado a las 5 PM', description: 'Detalle de la tarea' })
  @IsString()
  @IsNotEmpty()
  description: string;
}

```


En src/tasks/tasks.controller.ts:

```
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { TasksService } from './tasks.service';

@ApiTags('tasks')
@ApiBearerAuth()
@Controller('tasks')
@UseGuards(AuthGuard('jwt'))
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todas las tareas' })
  @ApiResponse({ status: 200, description: 'Lista de tareas recuperada exitosamente.' })
  @ApiResponse({ status: 401, description: 'No autorizado.' })
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }
}
```

Al acceder a http://localhost:3000/api/docs desde el navegador, verás la interfaz interactiva donde podrás explorar las rutas, consultar esquemas y ejecutar peticiones enviando tokens de prueba.



## 9. Variables de Entorno y Configuración (@nestjs/config)

En desarrollo real jamás se deben hardcodear credenciales, puertos o llaves secretas en el código
NestJS proporciona el módulo @nestjs/config (basado en dotenv) para gestionar variables de entorno de forma centralizada

1. 

`npm install @nestjs/config`

2. Crear el archivo .env

En la raíz de tu proyecto, crea un archivo .env

```
PORT=3000
DATABASE_URL="file:./dev.db"
JWT_SECRET=super_secreto_para_produccion_12345
```


3. Registrar ConfigModule globalmente

Edita src/app.module.ts e importa ConfigModule

```
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Disponible en toda la aplicación sin volver a importarlo
    }),
    TasksModule,
    AuthModule,
    PrismaModule,
  ],
})
export class AppModule {}
```


4. Inyectar ConfigService

Ahora puedes consumir variables de entorno de forma segura en cualquier servicio usando inyección de dependencias
Por ejemplo, en src/auth/jwt.strategy.ts:

```
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'), // Obtención dinámica
    });
  }

  // ... método validate
}
```


## 10. Interceptors y Exception Filters (Manejo Global de Errores y Respuestas)

Exception Filters: Capturan errores no manejados o excepciones HTTP para dar un formato estandarizado a la respuesta de error.

Interceptors: Interceptan la solicitud o respuesta para transformar los datos o agregar comportamiento (ej. medir latencia, envolver respuestas en una estructura unificada).


Ejemplo 1: Interceptor para Estandarizar Respuestas HTTP

Crea el archivo src/common/interceptors/transform.interceptor.ts:

```
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
  timestamp: string;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => ({
        data,
        timestamp: new Date().toISOString(),
      })),
    );
  }
}
```


Registrar Interceptores y Filtros en src/main.ts:

```
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Registro global de filtros e interceptores
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
```


## 11. Pruebas Unitarias con Jest

NestJS incluye Jest preconfigurado
Al crear componentes con el CLI, se generan archivos .spec.ts listos para probar lógica aislada.

Probar TasksService con Mocks
Edita src/tasks/tasks.service.spec.ts simulando (mocking) el servicio de la base de datos PrismaService para no realizar operaciones reales en BD durante el test

```
import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { PrismaService } from '../prisma/prisma.service';

// Mock de PrismaService
const mockPrismaService = {
  task: {
    findMany: jest.fn().mockResolvedValue([
      { id: '1', title: 'Tarea Test 1', description: 'Desc 1', completed: false },
      { id: '2', title: 'Tarea Test 2', description: 'Desc 2', completed: true },
    ]),
    create: jest.fn().mockImplementation((dto) =>
      Promise.resolve({ id: '3', ...dto.data, completed: false }),
    ),
  },
};

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: PrismaService, useValue: mockPrismaService }, // Inyecta el mock
      ],
    }).compile();

    service = module.get<TasksService>(service);
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('getAllTasks', () => {
    it('debe retornar un arreglo de tareas', async () => {
      const result = await service.getAllTasks();
      expect(result).toHaveLength(2);
      expect(result[0].title).toEqual('Tarea Test 1');
      expect(mockPrismaService.task.findMany).toHaveBeenCalled();
    });
  });

  describe('createTask', () => {
    it('debe crear y retornar una nueva tarea', async () => {
      const newTaskDto = { title: 'Nueva Tarea', description: 'Detalle' };
      const result = await service.createTask(newTaskDto);

      expect(result).toEqual({ id: '3', ...newTaskDto, completed: false });
      expect(mockPrismaService.task.create).toHaveBeenCalledWith({
        data: newTaskDto,
      });
    });
  });
});
```



## 12. Pruebas de Integración y E2E (End-to-End)

A diferencia de las pruebas unitarias que aislan cada clase, las pruebas E2E verifican el flujo completo de la aplicación evaluando cómo interactúan controladores, módulos, servicios, pipes y la base de datos simulando solicitudes HTTP reales.

NestJS incluye soporte nativo para Supertest en la carpeta test/.

Ejemplo de Prueba E2E

Edita el archivo test/app.e2e-spec.ts:

```
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('TasksController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    
    // Importante: Aplicar los mismos pipes del entorno real
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/tasks (GET) - Debe retornar 200 OK', () => {
    return request(app.getHttpServer())
      .get('/tasks')
      .expect(200);
  });

  it('/tasks (POST) - Debe fallar con 400 si el payload es inválido', () => {
    return request(app.getHttpServer())
      .post('/tasks')
      .send({ title: 'ab' }) // Inválido: requiere min 3 caracteres
      .expect(400);
  });
});
```

npm run test:e2e



## 13. Dockerización de la Aplicación (Docker & Docker Compose)

Para desplegar tu API en cualquier servidor cloud de forma consistente, se utiliza Docker creando una imagen liviana optimizada para producción.

1. Crear un Dockerfile (Multi-stage Build)
En la raíz del proyecto, crea el archivo Dockerfile:

```
# --- Stage 1: Build ---
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci

COPY . .

RUN npm run build

# --- Stage 2: Production ---
FROM node:20-alpine AS runner

WORKDIR /usr/src/app

COPY package*.json ./

# Instalar solo dependencias de producción
RUN npm ci --only=production

# Copiar artefactos compilados e imágenes de Prisma
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules/.prisma ./node_modules/.prisma

EXPOSE 3000

CMD ["node", "dist/main.js"]
```

2. Configurar docker-compose.yml

Crea el archivo docker-compose.yml para levantar la aplicación junto con una base de datos PostgreSQL:

```
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    container_name: nest_postgres
    environment:
      POSTGRES_USER: nest_user
      POSTGRES_PASSWORD: nest_password
      POSTGRES_DB: nest_db
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  api:
    build: .
    container_name: nest_api
    ports:
      - "3000:3000"
    environment:
      PORT: 3000
      DATABASE_URL: "postgresql://nest_user:nest_password@postgres:5432/nest_db?schema=public"
      JWT_SECRET: "clave_secreta_de_produccion"
    depends_on:
      - postgres

volumes:
  postgres_data:
```


Para levantar todo el entorno con un solo comando:

```
docker-compose up -d --build
```



## 14. Seguridad y Hardening para Producción

Antes de lanzar una API a producción, es imprescindible aplicar capas de seguridad básicas:

1. Cabeceras de Seguridad con Helmet
Instala Helmet para proteger la API contra vulnerabilidades web conocidas agregando cabeceras HTTP adecuadas:

`npm install helmet`


2. Limitación de Peticiones (Rate Limiting)
Protege la aplicación contra ataques de fuerza bruta o Denegación de Servicio (DoS) limitando la cantidad de peticiones por IP usando @nestjs/throttler:

`npm install @nestjs/throttler`


3. Aplicar Seguridad en src/main.ts y src/app.module.ts
En src/app.module.ts:

```
import { Module } from '@nestjs/common';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    // Máximo 10 peticiones por cada 60 segundos por IP
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10,
    }]),
    // ...demás módulos
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}

```


En src/main.ts:

```
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Activar Helmet para cabeceras HTTP seguras
  app.use(helmet());

  // 2. Configurar CORS restringido a dominios autorizados
  app.enableCors({
    origin: ['https://mi-frontend-dominio.com'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
```



# Proyecto



# Control gastos personales: Expense Tracker API

Enfoque: 
Agregación de datos y filtrado avanzado.

Aprendizaje:
Query params avanzados (?month=08&category=food)
gregaciones en ORM (totales, promedios)
y Guards por API Key.

Manipulación de datos numéricos, filtrado mediante Query Parameters, agregaciones en bases de datos y la orquestación de varios módulos interconectados


## Objetivo

Construir una API REST que permita registrar ingresos y egresos de dinero
clasificarlos por categorías, establecer presupuestos mensuales y consultar resúmenes financieros
(balance total, gastos por categoría y métricas por mes).


Arquitectura Modular:

Feature Modules y Common Module
 
```
src/
├── categories/             # Módulo de categorías (Comida, Servicios, Sueldo, etc.)
│   ├── dto/                # create-category.dto.ts
│   ├── entities/           # category.entity.ts
│   ├── categories.controller.ts
│   └── categories.service.ts
├── transactions/           # Módulo de transacciones (Ingresos y Egresos)
│   ├── dto/                # create-transaction.dto.ts, filter-transaction.dto.ts
│   ├── entities/           # transaction.entity.ts
│   ├── transactions.controller.ts
│   └── transactions.service.ts
├── analytics/              # Módulo de métricas, balances y reportes agregados
│   ├── analytics.controller.ts
│   └── analytics.service.ts
├── common/                 # Guards, Interceptors y Filters globales
├── app.module.ts
└── main.ts
```

1. Categorías (/categories)

Método,Ruta,Descripción,Payload / Query
POST,/categories,Crear una categoría,"{ name: ""Comida"", budgetLimit: 300 }"
GET,/categories,Listar todas las categorías,N/A

2. Transacciones (/transactions)

Método,Ruta,Descripción,Payload / Query
POST,/transactions,Registrar ingreso/gasto,CreateTransactionDto
GET,/transactions,Listar con filtros avanzados,?type=EXPENSE&categoryId=2&startDate=2026-08-01
DELETE,/transactions/:id,Anular transacción,N/A

3. Reportes y Métricas (/analytics)

Método,Ruta,Descripción,Respuesta Esperada
GET,/analytics/balance,Balance general,"{ totalIncome: 1500, totalExpense: 800, balance: 700 }"
GET,/analytics/by-category,Gastos agrupados,"[{ category: ""Comida"", total: 450, percentage: 56.25 }]"



## Módulos

1. Controladores, Servicios y Principios SOLID

Separación estricta: TransactionsService solo maneja el CRUD directo de transacciones
AnalyticsService inyecta a TransactionsService (o su repositorio) exclusivamente para procesar cálculos financieros sin duplicar lógica


2. DTOs, Validaciones y Base de Datos (ORM)

Validación estricta de DTOs:

```
// create-transaction.dto.ts
import { IsEnum, IsNumber, IsPositive, IsString, IsNotEmpty, IsDateString } from 'class-validator';

export enum TransactionType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

export class CreateTransactionDto {
  @IsNumber()
  @IsPositive({ message: 'El monto debe ser un número positivo' })
  amount: number;

  @IsEnum(TransactionType)
  type: TransactionType;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDateString()
  date: string;

  @IsNumber()
  categoryId: number;
}
```

Relación ORM: Una Category tiene muchas Transactions (relación 1:N).

Agregaciones SQL: Uso de SUM(), GROUP BY o funciones del QueryBuilder del ORM para calcular totales sin sobrecargar la memoria de Node.js


3. Arquitectura Modular Avanzada

Módulos dependientes: AnalyticsModule importa TransactionsModule para consumir su servicio
o repositorios expuestos en exports: [TransactionsService].

Variables de entorno: Configuración con @nestjs/config para gestionar la moneda por defecto (DEFAULT_CURRENCY=USD) o límites de tolerancia


4. Middleware, Interceptores, Guards y Filtros

Response Interceptor: Un interceptor que formatea todas las respuestas financieras agregando metadatos como la moneda configurada y la fecha de la consulta.

ApiKeyGuard: Protege endpoints críticos de escritura (POST, DELETE).

Exception Filter: Atrapa casos donde un gasto supere el presupuesto configurado en la categoría y lanza una excepción limpia 400 Bad Request






# Básico / Bases

Arquitectura modular, persistencia de datos y la seguridad


## 1. Arquitectura

Inyección de Dependencias e Inversión de Control (IoC): Principio central de NestJS para desacoplar componentes.

Módulos (@Module): Organización de la aplicación en bloques funcionales delimitados que encapsulan controladores y proveedores.  

Controladores (@Controller): Manejo de solicitudes HTTP entrantes, enrutamiento (@Get, @Post, @Put, @Delete) y lectura de parámetros (@Param, @Query, @Body).

Proveedores / Servicios (@Injectable): Encapsulación de la lógica de negocio consumida por controladores mediante el constructor.

Nest CLI: Comandos de generación de código (nest new, nest g module, nest g controller, nest g service).  

Práctica: Crear un CRUD en memoria para un recurso simple (ejemplo: tareas o productos) dividiendo responsabilidades entre controlador, módulo y servicio.



## 2. Flujo de Datos, DTOs y Validación

DTOs (Data Transfer Objects): Definición de contratos de entrada de datos utilizando clases de TypeScript.

Pipes de Validación (ValidationPipe): Transformación y saneamiento de payloads combinando class-validator y class-transformer.

Manejo de Excepciones: Uso de HttpException nativas (NotFoundException, BadRequestException) y filtros globales de excepciones.

Gestión de Configuración: Centralización de variables de entorno mediante @nestjs/config.

Práctica: Aplicar validaciones estrictas a las peticiones POST y PUT del CRUD, devolviendo errores HTTP estándar formateados adecuadamente.



## 3. Persistencia de Datos y Base de Datos

Integración de ORMs: Configuración de TypeORM o Prisma para interactuar con bases de datos relacionales (PostgreSQL / MySQL).

Entidades: Mapeo de objetos TypeScript a tablas mediante decoradores.

Patrón Repositorio / Consultas: Operaciones de lectura y escritura (find, save, update, delete).

Relaciones: Modelado de asociaciones entre tablas (Uno a Uno, Uno a Muchos, Muchos a Muchos).  

Práctica: Reemplazar el almacenamiento en memoria por una base de datos PostgreSQL conectada mediante Docker y TypeORM/Prisma.



## 4. Seguridad y Ciclo de Vida de la Solicitud 

Middlewares: Procesamiento de solicitudes HTTP previa llegada a la ruta target.  

Guards (Guardias): Control de acceso e instanciación de reglas de autorización (RBAC).

Autenticación (JWT + Passport): Implementación de hash de contraseñas (bcrypt), emisión de JSON Web Tokens e interceptores de rutas protegidas.

Interceptors: Transformación del flujo de respuesta y medición de métricas de tiempo de ejecución.

Documentación OpenAPI: Generación automática de especificación Swagger mediante @nestjs/swagger.

Práctica: Proteger los endpoints de escritura mediante autenticación JWT y documentar toda la API con la interfaz de Swagger.




# Intermedio

Construir APIs REST sencillas a desarrollar aplicaciones robustas, escalables y listas para producción


## 1. Arquitectura Avanzada y Extensibilidad

Módulos Dinámicos: Creación de módulos configurables en tiempo de ejecución utilizando los patrones forRoot, register y forRootAsync

Proveedores Personalizados (Custom Providers): Uso avanzado de tokens de inyección (useValue, useFactory, useClass, useExisting) para integrar librerías externas o patrones de diseño.

Decoradores Personalizados: Creación de decoradores de parámetros y de métodos (createParamDecorator) y composición de decoradores con applyDecorators.

Programación Reactiva con RxJS: Uso de operadores RxJS en interceptores para manipulación de flujos de datos (timeout, catchError, tap, map).

Práctica: Desarrollar un módulo dinámico reutilizable para integrarse con un proveedor de pagos o almacenamiento en la nube (S3/Cloudinary) que acepte configuración asíncrona desde variables de entorno.


## 2. Rendimiento, Caching y Tareas Asíncronas

Estrategias de Caching: Implementación de @nestjs/cache-manager con almacenamiento en Redis para acelerar lecturas frecuentes.

Procesamiento en Segundo Plano (Colas de Trabajo): Manejo de tareas asíncronas pesadas utilizando BullMQ (@nestjs/bullmq) respaldado por Redis.

Task Scheduling: Automatización de tareas repetitivas y tareas programadas (Cron Jobs) con @nestjs/schedule.

Eventos Internos (Event Emitters): Desacoplamiento de componentes mediante el patrón Pub/Sub interno con @nestjs/event-emitter.

Práctica: Construir un sistema de generación de reportes en PDF o envío masivo de correos que procese las solicitudes en cola de forma asíncrona sin bloquear el hilo principal de la API.


## 3. Persistencia Avanzada, Transacciones y CQRS

Transacciones ACID: Manejo manual y automático de transacciones complejas (QueryRunner en TypeORM o $transaction en Prisma) para asegurar integridad de datos.

Estrategias de Migración: Creación, ejecución y reversión de migraciones de base de datos para entornos de producción.

Optimización de Consultas: Prevención del problema $N+1$, paginación por cursor vs paginación por offset, e índices.

Patrón CQRS: Separación de comandos (escritura) y consultas (lectura) mediante la librería oficial @nestjs/cqrs.

Práctica: Implementar un flujo de checkout/compras donde se descuente stock, se genere una orden y se cobre al usuario dentro de una transacción atómica.



## 4. Tiempo Real y Microservicios

WebSockets y Gateways: Comunicación bidireccional en tiempo real utilizando @nestjs/websockets con Socket.io.

Arquitectura de Microservicios: Introducción al paquete @nestjs/microservices y patrones de mensajería (Request-Response vs Event-Driven).

Transportadores de Mensajes: Comunicación entre servicios independientes utilizando brokers como RabbitMQ, Redis Pub/Sub o NATS.

API Gateways: Creación de un punto de entrada centralizado que enrute peticiones y gestione autenticación hacia microservicios subyacentes.

Práctica: Desarrollar un sistema de notificaciones en tiempo real compuesto por un API Gateway y un microservicio de procesamiento conectado vía RabbitMQ.



## 5. Testing, Observabilidad y Calidad de Código

Pruebas Unitarias Avanzadas: Creación de suites con Jest utilizando Mocks, Spies y utilidades de simulación (Test.createTestingModule).

Pruebas Integrales y E2E: Automatización de tests End-to-End con Supertest utilizando bases de datos de prueba aisladas (ej. mediante contenedores de Docker).

Logging Estructurado: Sustitución del logger nativo por herramientas de producción como Pino o Winston.

Monitoreo y Métricas: Exposición de métricas clave con Prometheus y trazo distribuido con OpenTelemetry.

Práctica: Alcanzar una cobertura de código (code coverage) superior al 80% en pruebas unitarias e integrar tests E2E dentro de un pipeline automatizado.






# Diseño

Diseñar una API de Control de Gastos Personales
orden lógico
modelación conceptual hasta la integración de las capas transversales de seguridad y analítica

1. Planificación del Dominio y Modelo de Datos 

`Definición de Entidades`: Identificar los elementos fundamentales del sistema: Categoría (ej. Comida, Transporte, Sueldo) y Transacción (cada movimiento monetario).

`Mapeo de Relaciones`: Establecer la relación estructural de base de datos (Una Categoría posee muchas Transacciones, mientras que cada Transacción pertenece a una sola Categoría).

`Definición de Reglas de Negocio`: Determinar qué datos son obligatorios, qué tipos de movimiento existen (Ingreso vs. Egreso) y las restricciones numéricas (montos estrictamente mayores a cero).


2. Configuración de la Infraestructura Base

`Inicialización del Proyecto`: Crear el armazón del proyecto con el CLI de NestJS y limpiar los archivos de demostración no utilizados

`Gestión de Entorno`: Configurar la lectura de variables de entorno para gestionar credenciales, puerto del servidor y configuraciones globales (como la moneda por defecto).

`Conexión a Base de Datos`: Configurar la integración del ORM con la base de datos (SQLite para desarrollo local o PostgreSQL) y conectar la gestión de entidades


3. Construcción de Módulos Core (Categorías y Transacciones)

Módulo de Categorías:
Crear el módulo, controlador y servicio.
Implementar el registro de nuevas categorías y la consulta del catálogo existente.

Módulo de Transacciones:
Crear la estructura completa del módulo.
Diseñar la recepción de contratos de entrada (DTOs) para validar montos, tipos y fechas antes de procesarlos.
Implementar el almacenamiento de movimientos y la búsqueda con filtros opcionales (por rango de fechas, categoría o tipo de transacción).


4. Módulo de Métricas y Analítica (Analytics)

`Arquitectura de Interconexión`: Crear un módulo independiente dedicado a reportes que importe y consuma la información expuesta por el módulo de transacciones.

`Cálculo de Balance General`: Diseñar la lógica del servicio para calcular el total acumulado de ingresos, total de egresos y el saldo neto remanente.

`Agregaciones por Categoría`: Implementar la agrupación de gastos por categoría para obtener desgloses porcentuales y totales por rubro.


5. Capas Transversales (Validación, Seguridad y Formato)

`Validación Global`: Activar la tubería de validación para rechazar automáticamente cualquier petición que no cumpla con los tipos o rangos definidos en los DTOs.

`Manejo Estandarizado de Errores`: Configurar un filtro de excepciones para devolver respuestas claras y uniformes en caso de fallos (por ejemplo, al intentar asociar una transacción a una categoría que no existe).

`Protección de Rutas`: Implementar un Guard simple para restringir los endpoints de escritura (creación y eliminación) mediante una clave de acceso en las cabeceras.

`Formateador de Respuestas`: Crear un Interceptor para adjuntar metadatos estándar a todas las respuestas exitosas (marca de tiempo, moneda y estado de la operación).


6. Pruebas y Verificación del Sistema

`Flujo de Prueba Funcional`: Probar la secuencia lógica completa: crear categorías -> registrar ingresos y gastos -> consultar el listado filtrado -> verificar la actualización del balance general.

`Validación de Casos Límite`: Comprobar que el sistema rechace montos negativos, fechas inválidas o peticiones sin la clave de acceso configurada



## 1. Planificación del Dominio y Modelo de Datos

Diseñar el dominio y el modelo de datos
previene refactorizaciones complejas y garantiza la integridad de la información financiera

1. Identificación de Entidades y Campos Conceptuales

`Entidad Categoría`: Representa la clasificación del dinero.

    Identificador único: Clave primaria para diferenciar cada registro.
    Nombre: Etiqueta descriptiva (ej. "Alimentación", "Transporte", "Sueldo").
    Límite mensual (Opcional): Monto máximo planificado para gastar en esa categoría por mes.
    Estado: Indicador para saber si la categoría está activa o archivada.

`Entidad Transacción`: Representa cada movimiento monetario individual.

    Identificador único: Clave primaria del movimiento.
    Monto: Valor numérico de la operación.
    Tipo de movimiento: Clasificación del flujo (Ingreso o Gasto).
    Descripción: Detalle o concepto del movimiento (ej. "Compra de supermercado").
    Fecha del movimiento: Fecha real en la que ocurrió la transacción.
    Fecha de registro: Marca de tiempo generada automáticamente por el sistema al guardar


2. Definición de Relaciones e Integridad Referencial

`Cardinalidad 1:N (Uno a Muchos)`: Una Categoría puede estar asociada a múltiples Transacciones, pero cada Transacción debe pertenecer obligatoriamente a una sola Categoría.

`Estrategia ante eliminación (Regla de integridad)`: Si una categoría ya posee transacciones registradas, no se debe permitir su borrado físico en la base de datos para no dejar movimientos "huérfanos" ni alterar el historial financiero
En su lugar, se desactiva la categoría para impedir asignarle nuevas transacciones


3. Enumerados y Restricciones de Dominio

`Tipo de Transacción (Enum)`: Se restringe exclusivamente a dos valores posibles: INGRESO o GASTO.

`Regla del Monto`: El valor numérico debe ser estrictamente mayor a cero. Los gastos no se guardan como números negativos; su naturaleza de resta la define el tipo GASTO.

`Unicidad de Nombre`: El nombre de la categoría debe ser único en el sistema para evitar categorías duplicadas (ej. dos registros llamados "Servicios").


4. Reglas de Negocio e Invariantes

`Cálculo de Balance`: El saldo total nunca se guarda como un valor estático en la base de datos; se calcula dinámicamente restando el total acumulado de GASTO al total de INGRESO.

`Alertas de Presupuesto`: Al registrar un nuevo GASTO, la lógica del sistema debe evaluar si la suma de los gastos del mes en esa categoría supera el límite configurado para generar una advertencia.



## 2. Configuración de la Infraestructura Base

##### Base técnica sobre la cual se construirán los módulos de negocio
garantizando flexibilidad de configuración, conexión persistente a datos y una interfaz de prueba disponible desde el primer día

1. Estructuración Inicial y Limpieza del Proyecto

`Generación del proyecto`: Crear el proyecto base utilizando el CLI de NestJS

`Limpieza de archivos de ejemplo`: Eliminar el controlador y servicio por defecto (app.controller.ts y app.service.ts) para evitar código muerto y sustituirlos por la estructura de módulos de dominio (categories/, transactions/, analytics/).


2. Gestión y Validación de Variables de Entorno

`Centralización de variables (.env)`:
Definir valores dinámicos fuera del código fuente:

Puerto de ejecución de la API (ej. 3000).
Ruta o credenciales de la base de datos.
Clave secreta para la seguridad de la API (x-api-key).
Moneda por defecto de la aplicación (ej. USD o ARS).

`Esquema de validación en arranque`: Configurar una regla que verifique las variables al iniciar
Si falta alguna variable obligatoria o el puerto no es un número válido, la aplicación se detiene inmediatamente antes de aceptar conexiones


3. Configuración de la Capa de Persistencia (ORM)

`Elección del motor`: Utilizar SQLite para un entorno de desarrollo ligero (archivo local sin instalación extra)
o PostgreSQL para un entorno más cercano a producción.

`Integración del ORM`: Configurar la conexión de TypeORM o Prisma de forma global

`Estrategia de esquemas`: Activar la sincronización automática de entidades solo para desarrollo
permitiendo que la estructura de tablas se cree y actualice automáticamente a partir del diseño de la Fase 1.


4. Integración del Panel Interactivo (Swagger / OpenAPI)

`Habilitación de la documentación interactiva`: Configurar la extensión de Swagger en el arranque de la aplicación

`Ruta de acceso`: Asignar la ruta /api/docs como el punto de acceso donde se desplegará la interfaz visual.

`Definición de metadatos`: Registrar el título del proyecto ("API de Control de Gastos Personales")
versión actual, descripción de los endpoints y el esquema de seguridad por cabecera HTTP (x-api-key).



## 3. Construcción de Módulos Core (Categorías y Transacciones)

Construcción de la lógica principal del sistema
gestión de categorías y el registro de movimientos financieros con sus respectivas reglas de validación


1. Módulo de Categorías: Diseño Funcional y Operaciones

`Operación de Creación`:
Permite dar de alta una nueva categoría especificando su nombre y un límite mensual opcional
Debe rechazar la solicitud si el nombre ya existe en la base de datos (garantizando unicidad).

`Operación de Lectura`:
Expone la lista de categorías registradas, ofreciendo la opción de filtrar solo aquellas que estén activas.

`Operación de Desactivación (Baja Lógica)`:
Cambia el estado de una categoría de "Activa" a "Inactiva" en lugar de borrar el registro
Esto impide asignar nuevas transacciones a esa categoría sin romper el historial de gastos pasados.


2. Módulo de Transacciones (Diseño Funcional y Operaciones)

`Operación de Creación de Movimiento`:
Recibe los datos del gasto o ingreso (monto, tipo, fecha, descripción e identificador de categoría).

	`Verificación de Categoría`:
	Antes de guardar, consulta si la categoría especificada existe y está activa
	Si no existe o está desactivada, cancela la operación y notifica la inconsistencia.

	`Verificación de Reglas Numéricas`:
	Garantiza que el monto enviado sea un número positivo antes de enviarlo a la base de datos.


`Operaciones de Lectura y Filtrado Avanzado`:
Permite listar transacciones con parámetros opcionales de búsqueda: por tipo (INGRESO o GASTO)
por categoría específica o por rango de fechas (fechaInicio a fechaFin).

Incluye la fecha completa en cada registro para permitir ordenamiento cronológico.


`Operación de Anulación/Eliminación`:
Permite remover una transacción específica mediante su identificador único para corregir errores de carga


3. Comunicación e Integración entre Módulos

`Encapsulamiento del Módulo de Categorías`: Configura su servicio o repositorio para ser exportado expresamente a otros módulos.

`Dependencia Directa`: El Módulo de Transacciones importa el Módulo de Categorías de forma limpia para validar la existencia de los rubros antes de procesar cualquier movimiento.

`Aislamiento de Lógica`: Ningún módulo modifica directamente las tablas del otro;
la interacción se realiza a través de las interfaces expuestas por sus servicios


4. Contratos de Entrada y Salida (DTOs)

`Estructura de Contrato de Creación`:
Define el conjunto exacto de datos que debe enviar el cliente para registrar un movimiento
rechazando automáticamente campos no reconocidos o fuera de formato.

`Estructura de Contrato de Filtrado`:
Define los parámetros opcionales aceptados en la URL para las búsquedas
(parámetros de consulta o Query Parameters).



## 4. Módulo de Métricas y Analítica

##### Se enfoca en transformar las transacciones almacenadas en información útil para la toma de decisiones, procesando totales, porcentajes de consumo y comparativas frente a presupuestos

1. Arquitectura de Conexión y Consumo de Datos

`Desacoplamiento Operativo`:
El módulo AnalyticsModule se diseña de forma independiente a TransactionsModule
No almacena datos propios en la base de datos; opera exclusivamente sobre los registros existentes.

`Consumo de Servicios Expuéstos`:
Importa la interfaz del módulo de transacciones para ejecutar consultas de agregación y lectura sin duplicar lógica de negocio ni modificar registros.

`Separación de Responsabilidades`:
Mientras el módulo de transacciones responde por el registro y listado de movimientos individuales, el módulo de analítica responde por el cálculo estadístico y los resúmenes consolidados.


2. Cálculo de Balance General y Métricas Globales

`Consolidado de Flujo de Caja`:
Procesa de manera masiva todos los movimientos dentro de un marco temporal (por defecto el mes en curso) para determinar

Total Ingresado: Sumatoria exclusiva de registros clasificados como INGRESO.

Total Gastado: Sumatoria exclusiva de registros clasificados como GASTO.

Balance Neto: Resultado aritmético directo (Total Ingresado - Total Gastado).


`Indicadores de Salud Financiera`:
Cálculo de la tasa de ahorro (porcentaje del ingreso que no fue gastado) para ofrecer una lectura rápida del estado económico


3. Agregación de Gastos por Categoría y Control de Presupuesto

`Agrupamiento por Rubro`: Agrupa los movimientos de gasto según la categoría a la que pertenecen para determinar el volumen de dinero consumido en cada área
(ej. Alimentación vs. Entretenimiento).

`Distribución Porcentual`: Calcula la representación de cada categoría sobre el total general de gastos
(ej. "El 40% de tus gastos corresponden a Vivienda").

`Evaluación de Límites Presupuestarios`: Compara el gasto acumulado del mes en una categoría específica contra el límite mensual que se configuró en la entidad Categoría
Si el gasto supera el límite, la analítica genera un estado de alerta
(ej. "Presupuesto superado en un 15%").


4. Reportes Temporales y Filtrado

`Parametrización por Periodo`: Todos los cálculos de balance y agregaciones por categoría deben aceptar parámetros de consulta para especificar el mes y año deseados
(por ejemplo, año: 2026, mes: 8).

`Respuesta Consolidada`:
Expone un contrato de salida único que reúne el balance general, el desglose por categorías y las alertas de presupuesto en un solo resultado para simplificar la lectura



## 5. Capas Transversales (Validación, Seguridad y Formato)

Mecanismos que aseguran la consistencia de los datos, protegen la API contra accesos no autorizados
unifican la estructura de las respuestas y los errores en toda la aplicación.

1. Tubería Global de Validación y Saneamiento (ValidationPipe)

`Filtrado Estricto de Propiedades`:
Configura la tubería de validación global para descartar automáticamente cualquier propiedad enviada en el cuerpo de la petición que no esté explícitamente declarada en el DTO correspondiente.

`Rechazo de Parámetros No Deseados`:
Lanza una excepción inmediata si el cliente intenta inyectar campos maliciosos o no permitidos en la base de datos

`Transformación Automática de Tipos`:
Convierte de forma transparente las cadenas de texto enviadas en rutas o parámetros de consulta (Query Parameters) a sus tipos reales de JavaScript
(números, fechas o booleanos) antes de que lleguen al controlador.


2. Capa de Seguridad y Autorización (ApiKeyGuard)

`Evaluación de Peticiones`: Implementa un Guard que inspecciona las cabeceras HTTP de cada solicitud entrante buscando una clave de acceso configurada (x-api-key).

`Protección Selectiva o Global`:
Restringe las operaciones críticas de escritura (POST, PATCH, DELETE) para exigir la clave correcta
previniendo que usuarios no autorizados modifiquen categorías o registren transacciones.

`Bloqueo Temprano`:
Intercepta y detiene la petición antes de ejecutar la lógica de los servicios o realizar consultas a la base de datos
respondiendo con un estado de acceso prohibido en caso de falla.


3. Estandarización de Respuestas Exitosas (Response Interceptor)

`Envoltorio Unificado de Salida`:
Transforma la salida de todos los controladores para devolver un formato idéntico en toda la API.

`Inclusión de Metadatos`:
Adjunta automáticamente a cada respuesta exitosa información contextual útil

Fecha y hora exacta de la consulta (timestamp).
Moneda por defecto configurada en el sistema (extraída de las variables de entorno).
Mensaje de confirmación del estado de la operación.
La información devuelta por el servicio agrupada bajo un campo principal


4. Captura y Manejo Unificado de Errores (Global Exception Filter)

`Centralización de Fallos`:
Captura cualquier excepción lanzada en la aplicación
(errores de validación, categorías no encontradas, fallos de conexión a la base de datos).

`Ocultamiento de Detalles Sensibles`:
Evita exponer información interna de la base de datos o trazados de código (stack traces) al cliente.

`Estructura Única de Error`:
Formatea la respuesta de error para devolver siempre la misma estructura
código de estado HTTP, mensaje descriptivo claro, la ruta solicitada y la marca de tiempo del fallo.



## Diseño fase 6. Pruebas y Verificación del Sistema

##### Etapa final de validación, donde se comprueba la estabilidad de la API; el correcto funcionamiento de las reglas de negocio y la robustez de las capas de seguridad y prueba.

1. Verificación del Flujo Funcional E2E (End-to-End)
valida la secuencia operativa completa simulando el ciclo de vida real del uso de la aplicación:

`Creación de Entorno`:
Registrar categorías iniciales (ej. "Sueldo", "Alimentación", "Servicios") con sus respectivos límites mensuales.

`Carga de Movimientos`:
Registrar ingresos y egresos asociándolos a las categorías creadas

`Consolidación Financiera`:
Consultar el módulo de analítica para comprobar que el balance neto
(Total Ingresos - Total Gastos) sea numéricamente exacto.

`Alerta de Presupuesto`:
Registrar un gasto que supere el límite establecido en una categoría
verificar que el reporte refleje el estado de alerta correspondiente.

`Aislamiento de Historia`:
Desactivar una categoría activa y confirmar que no permite nuevas transacciones
pero mantiene intacto el historial de gastos pasados


2. Pruebas de Casos Límite y Reglas de Negocio

Se somete la API a solicitudes inválidas o malintencionadas para garantizar que los mecanismos de defensa funcionen correctamente

`Valores Inválidos`:
Intentar enviar montos negativos, fechas con formato incorrecto
o textos vacíos para verificar que la tubería de validación rechace la petición con un error 400 Bad Request.

`Inexistencia de Datos`:
Intentar registrar una transacción vinculada a un identificador de categoría inexistente
o intentar consultar un movimiento con un ID inexistente (404 Not Found).

`Intento de Duplicación`:
Intentar registrar dos categorías con el mismo nombre para validar que se aplique la restricción de unicidad.

`Falta de Credenciales`:
Intentar crear o eliminar registros sin incluir la cabecera x-api-key (o enviando una clave incorrecta)
para corroborar que el Guard bloquee el acceso con un error 401 Unauthorized o 403 Forbidden.


3. Estrategia de Pruebas Automatizadas

`Pruebas Unitarias (Unit Tests)`:
Aislar los servicios (TransactionsService, AnalyticsService) reemplazando los repositorios de la base de datos por objetos simulados (mocks).
Esto permite verificar la matemática de los balances y los filtros sin depender de una base de datos real.

`Pruebas de Integración (E2E Tests)`:
Ejecutar solicitudes HTTP contra una base de datos de pruebas (en memoria o SQLite temporal) para comprobar el ciclo completo
desde la entrada de la ruta hasta la respuesta final procesada por interceptores y filtros.


4. Verificación Visual e Interactiva en Swagger UI

`Validación de Contratos`:
Acceder a la ruta /api/docs en el navegador para comprobar que todos los endpoints, esquemas de DTOs
respuestas de ejemplo y parámetros de consulta estén documentados

`Prueba de Autenticación`:
Autorizar la sesión en la interfaz de Swagger utilizando la clave de acceso para certificar que las peticiones protegidas puedan probarse interactivamente



## 6. Comandos NestCLI

automatiza la creación de proyectos, la generación de elementos de código y la compilación de la aplicación.

1. Instalación y Creación de Proyectos

npm i -g @nestjs/cli
Instala la herramienta CLI de NestJS de forma global en tu sistema.

nest new nombre-proyecto
Crea la estructura base de un nuevo proyecto (también se puede usar nest n).


2. Generación de Código (nest generate / nest g)

generar los bloques fundamentales de NestJS
El comando actualiza automáticamente los módulos correspondientes para registrar los nuevos controladores o servicios.

```
# Sintaxis general:
nest generate <esquema> <nombre>
# o en versión corta:
nest g <esquema> <nombre>
```

Ej esquemas más utilizados

Módulo

```
nest g module users
# o: nest g mo users
```

(Crea users/users.module.ts y lo registra en AppModule)


Controlador:

```
nest g controller users
# o: nest g co users
```

(Crea users/users.controller.ts y lo registra en UsersModule)


Servicio:

```
nest g service users
# o: nest g s users
```

Crea users/users.service.ts y lo registra en UsersModule


Recurso Completo (CRUD Automático):

```
nest g resource tasks
# o: nest g res tasks
```

Genera de una sola vez la carpeta con módulo, controlador, servicio, DTOs y entidad para el recurso tasks


3. Banderas Útiles (Flags)

añadir estos modificadores al final de cualquier comando de generación

`--no-spec`: Evita la creación de archivos de pruebas unitarias (.spec.ts).

```
nest g service users --no-spec
```

`--dry-run (o -d)`:
Simula la ejecución sin crear ni modificar ningún archivo en el disco
Útil para verificar la ruta donde se generará el código.

```
nest g controller users --dry-run
```


4. Comandos de Ejecución y Compilación

npm run start:dev (Equivalente a nest start --watch):
Arranca el servidor de desarrollo con recarga en tiempo real (Hot Reload) ante cambios en el código

npm run build (Equivalente a nest build): Compila el código TypeScript a JavaScript en la carpeta /dist para producción





# Conceptos


# 1. 

## 1. Inversión de Control (IoC): El cambio de mentalidad

##### La Inversión de Control (IoC) es un principio de diseño de software
##### la Inyección de Dependencias (DI) es el patrón con el que NestJS implementa ese principio

1. Inversión de Control (IoC): El cambio de mentalidad

En la programación tradicional, tu código tiene el control absoluto
cuando una clase necesita un objeto, ella misma se encarga de instanciarlo con el operador new

Con IoC, inviertes esa responsabilidad. En lugar de que tus clases creen sus propias dependencias
##### le cedes el control a un Contenedor de IoC (un motor interno de NestJS).
Este contenedor se encarga de instanciar los objetos, gestionar su ciclo de vida y entregarlos a quien los necesite


2. Inyección de Dependencias (DI): El mecanismo

Es el patrón práctico para suministrar esas dependencias
En lugar de "ir a buscar" o "crear" una herramienta
declaras que la necesitas en el constructor de tu clase y NestJS te la "inyecta" automáticamente.

Ej:

Sin Inyección de Dependencias (Acoplamiento fuerte):

```
// ❌ La clase controla la creación de sus dependencias
export class UsersController {
  private userService: UsersService;

  constructor() {
    // Si UsersService cambia y exige parámetros en su constructor,
    // rompes el controlador y tendrás que modificarlo aquí.
    this.userService = new UsersService(); 
  }
}
```


Con Inyección de Dependencias en NestJS (Desacoplado):

```
// ✅ NestJS gestiona la instanciación e inyección
@Injectable()
export class UsersService {
  getUsers() { return ['Ana', 'Carlos']; }
}

@Controller('users')
export class UsersController {
  // Solo declaras la necesidad en el constructor
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll() {
    return this.userService.getUsers();
  }
}
```


3. Ciclo de tres pasos en NestJS

Para que la Inyección de Dependencias funcione, NestJS requiere tres elementos:

1. Decorador @Injectable(): Marca una clase como un Proveedor (Provider)
indicándole al contenedor de NestJS que esta clase puede ser gestionada e inyectada.

2. Registro en el Módulo: Declaras el proveedor dentro del arreglo providers de un @Module().
Esto registra la clase en el contenedor IoC.

3. Inyección en el Constructor: En la clase que necesita el servicio (como un controlador)
se define como parámetro del constructor con su tipo de TypeScript


Inyección de Dependencias en NestJS
Resolución automática de dependencias paso a paso por el Contenedor IoC

1. Registro
Registro de Proveedores en el Módulo
El programador declara `AppService` en la lista de `providers` del `@Module`.
NestJS registra este token en la matriz de resolución del contenedor IoC.

```
// app.module.ts
@Module({
  providers: [AppService] // Token registrado en el contenedor
})
```

```
AppModule 		1.reg	Contenedor
@Module({ ... }) ->  	Nest Container [Provider Map]
```


2. Inspección e Instanciación en el Contenedor IoC
El contenedor IoC analiza la clase `@Injectable()`
Si no existe aún una instancia singleton en memoria, invoca el constructor `new AppService()`.


```
Contenedor IoC 			 AppService
Nest Container  2.build  @Injectable
[Provider Map]
```

```
// app.service.ts
@Injectable() // Marca la clase para que el IoC la pueda instanciar
export class AppService {
  getHello(): string { return 'Hello World!'; }
}
```



3. Resolver
Resolución e Identificación del Singleton
La instancia singleton creada se guarda en el mapa interno del contenedor IoC
lista para ser reutilizada en cualquier componente que la requiera.

```
Contenedor IoC 			   AppService
Nest Container  2.instanc  @Injectable
[Provider Map]

```

```
// Mapa interno del IoC Container:
// Map<Token, Instance> -> Map(AppService => instanceOfAppService)
```


4. Inyección
Inyección Automática vía Constructor
Cuando NestJS crea el `AppController`, lee sus tipos de TypeScript mediante reflexión (`reflect-metadata`)
e inyecta la instancia de `AppService` en su constructor.

```
Contenedor IoC
Nest Container  
[Provider Map]
   |
4. Inject
   |
AppController   
@Controller()

```

```
// app.controller.ts
@Controller()
export class AppController {
  // Inyección de dependencia por constructor
  constructor(private readonly appService: AppService) {}
}
```


Rs:

```
									  2.Build				
AppModule	    ->		Contendor IoC  -> AppService
@Module({...}) 1. reg       |			  @Injectable())
						 4. Inject     3. Instanc
							|
						AppController
						@Controller()

1. Module: providers
2. Injectable: class, methods
3. Resolución: ioc container, token 
4. Controller: inyección class, methds
```



4. Es Fundamental por:

Facilidad en Pruebas Unitarias (Mocking):
Para probar UsersController, no necesitas conectarte a una base de datos real
Puedes inyectar un servicio "falso" (mock) en el constructor sin tocar una sola línea de código del controlador

Patrón Singleton por defecto:
NestJS crea una única instancia del servicio para toda la aplicación y la reutiliza en cada petición
optimizando drásticamente el consumo de memoria.

Mantenibilidad:
Si UsersService necesita ahora un servicio de logs o de base de datos en su propio constructor
NestJS resolverá automáticamente todo el árbol de dependencias por ti



## 2. Modulo: @Module()

clase anotada con el decorador @Module()
##### proporciona la metadata necesaria para organizarla en un árbol de módulos

##### Representa un límite de dominio (por ejemplo: usuarios, productos, autenticación)
##### y delimita qué partes de su código son privadas y cuáles están expuestas al resto de la aplicación.


1. 4 Propiedades Clave de @Module()

Decorador @Module():
recibe un objeto de configuración con cuatro propiedades principales

`controllers`:
Lista de controladores definidos en este módulo que deben instanciarse para gestionar rutas HTTP

`providers`:
Lista de servicios o proveedores instanciados por el contenedor IoC para usarse internamente en este módulo

`imports`:
Lista de otros módulos cuyos proveedores exportados son necesarios dentro de este módulo.

`exports`:
Subconjunto de providers de este módulo que se hacen públicos para que otros módulos los puedan utilizar.


2. Principio Clave: Encapsulación
Los proveedores en NestJS están encapsulados
Un servicio registrado en el arreglo providers de UsersModule no está disponible automáticamente en AuthModule

Para compartir un servicio entre diferentes áreas de la aplicación, es obligatorio seguir una regla de dos vías:

El módulo origen debe incluir el servicio en su lista de exports.

El módulo destino debe incluir el módulo origen en su lista de imports.


3. Ej: Comunicación entre Módulos

AuthModule necesita validar a un usuario
mediante el UsersService que pertenece a UsersModule

1. Módulo Origen (UsersModule):
Exporta el servicio.

```
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // 👈 Se expone UsersService al exterior
})
export class UsersModule {}
```

2. Módulo Destino (AuthModule):
Importa el módulo origen.

```
@Module({
  imports: [UsersModule], // 👈 Importa todo lo que UsersModule haya exportado
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
```

3. Uso en el Servicio (AuthService):
Ahora la inyección de dependencias funciona normalmente.

```
@Injectable()
export class AuthService {
  // NestJS ya sabe cómo resolver UsersService gracias al import del módulo
  constructor(private readonly usersService: UsersService) {}
}

```

4. Módulo Raíz (AppModule)
Toda aplicación NestJS tiene al menos un Módulo Raíz (por convención AppModule).
Es el punto de partida que utiliza NestJS al arrancar el servidor en main.ts

```
const app = await NestFactory.create(AppModule);
```

En lugar de registrar todos los controladores y servicios directamente en AppModule
este actúa como un orquestador que importa los módulos de cada dominio:

```
@Module({
  imports: [UsersModule, ProductsModule, AuthModule],
})
export class AppModule {}
```



## 3. Controller: @Controller()

##### son las clases encargadas de recibir las solicitudes HTTP del cliente, procesar la entrada de datos y devolver la respuesta.
##### Su única responsabilidad es actuar como puerta de entrada a la aplicación y delegar la lógica pesada a los Servicios.

1. Decorador Base @Controller()

Se aplica a nivel de clase para definir el prefijo de ruta (o endpoint) base
Todas las rutas definidas dentro de este controlador heredarán ese prefijo.

```
@Controller('products') // 👈 Todas las rutas comenzarán con /products
export class ProductsController { ... }
```

2. Métodos HTTP y Decoradores de Extracción

NestJS proporciona decoradores específicos para mapear los métodos HTTP estándar y extraer información directamente del objeto de solicitud (Request).

Principales decoradores de extracción de datos

Decorador,Equiv. Express,Propósito,Ejemplo de uso

`@Param('id')`,req.params.id
Extraer un parámetro de la URL (/products/42).,findOne(@Param('id') id: string)

`@Query('search')`,req.query.search
Extraer un parámetro de consulta (/products?search=lap).,findAll(@Query('search') search: string)

`@Body()`,req.body
Extraer el cuerpo/payload JSON de la petición.,create(@Body() dto: CreateProductDto)

`@Headers('token')`,req.headers.token
Leer una cabecera específica.,checkToken(@Headers('authorization') token: string)


3. Controlador CRUD

muestra un controlador completo para el recurso products que ilustra los métodos HTTP más comunes
##### la lectura de parámetros y la inyección del servicio:

```
import { Controller, Get, Post, Put, Delete, Param, Query, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  // Inyectamos el servicio mediante el constructor (Inyección de Dependencias)
  constructor(private readonly productsService: ProductsService) {}

  // GET /products?limit=10
  @Get()
  findAll(@Query('limit') limit: string) {
    return this.productsService.findAll(limit);
  }

  // GET /products/15
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  // POST /products
  @Post()
  @HttpCode(HttpStatus.CREATED) // 201 por defecto en POST
  create(@Body() newProduct: { name: string; price: number }) {
    return this.productsService.create(newProduct);
  }

  // PUT /products/15
  @Put(':id')
  update(
    @Param('id') id: string, 
    @Body() updateData: { name?: string; price?: number }
  ) {
    return this.productsService.update(id, updateData);
  }

  // DELETE /products/15
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // Devuelve 204
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
```


4. Manejo de Respuestas y Códigos de Estado

1. Retorno Automático (Idiomático):
NestJS maneja las respuestas de forma declarativa
Cuando un método devuelve un objeto o arreglo de JS, lo serializa automáticamente a JSON.

2. Códigos de Estado HTTP por defecto:
Peticiones @Get(), @Put(), @Delete() responden con 200 OK
Peticiones @Post() responden con 201 Created.

3. Modificación con @HttpCode():
Puedes cambiar el código HTTP devuelto importando el decorador y utilizando el enum HttpStatus.



## 4. Proveedores y Servicios (@Injectable): Encapsulación de la lógica de negocio.

##### regla de oro: controladores "delgados" (thin controllers) 
##### transferir toda la lógica de negocio a los Proveedores (Providers).

#### Un Servicio es la variante más común de un proveedor
Su función es concentrar las reglas de negocio, cálculos, consultas a bases de datos o integraciones con APIs externas

1. Decorador @Injectable()
adjunta metadatos a la clase para indicarle al contenedor IoC de NestJS
"Esta clase es un Proveedor y puede ser instanciada e inyectada en cualquier parte de la aplicación que la declare en su constructor"

Sin el decorador @Injectable(), NestJS no sabrá cómo gestionar la clase en su contenedor de dependencias y lanzará un error al intentar iniciar la aplicación

2. Separación de Responsabilidades

entender el rol de un servicio
observa la división de tareas

Controlador ("El Recepcionista"):
Escucha peticiones HTTP, extrae parámetros (@Param, @Body)
delega la tarea al servicio y decide qué respuesta o código de estado HTTP retornar.

Servicio ("El Especialista"):
Procesa los datos, valida reglas de negocio
negocio (ej. "¿el usuario tiene saldo suficiente?"), interactúa con la base de datos y retorna datos puros (objetos o arreglos) al controlador.


3. Ej: ProductsService
muestra cómo se implementa la lógica de negocio para el recurso de productos que consumía el controlador visto anteriormente

```
import { Injectable, NotFoundException } from '@nestjs/common';

export interface Product {
  id: string;
  name: string;
  price: number;
}

@Injectable() // 👈 Registra la clase en el contenedor IoC
export class ProductsService {
  // Simulamos una base de datos en memoria
  private products: Product[] = [];

  findAll(limit?: string): Product[] {
    if (limit) {
      return this.products.slice(0, Number(limit));
    }
    return this.products;
  }

  findOne(id: string): Product {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      // Lanzar excepciones HTTP nativas de NestJS
      throw new NotFoundException(`Producto con ID #${id} no encontrado`);
    }
    return product;
  }

  create(productData: { name: string; price: number }): Product {
    const newProduct: Product = {
      id: Date.now().toString(),
      ...productData,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: string, updateData: { name?: string; price?: number }): Product {
    const product = this.findOne(id); // Reutiliza la validación de findOne
    Object.assign(product, updateData);
    return product;
  }

  remove(id: string): void {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Producto con ID #${id} no encontrado`);
    }
    this.products.splice(index, 1);
  }
}
```

4. Ciclo de Vida y Alcance (Scope)
Por defecto, todos los proveedores en NestJS son Singletons

1. NestJS crea una sola instancia de ProductsService cuando arranca la aplicación.

2. Esa misma instancia en memoria se comparte en todas las peticiones entrantes.

3. Esto hace que NestJS sea extremadamente rápido y eficiente en consumo de memoria.


5. otros tipos de Proveedores
Aunque los servicios de negocio son los más comunes
otros componentes anotados con @Injectable() también son proveedores:

Repositorios: Capa de acceso directo a bases de datos (TypeORM, Prisma).

Helpers / Utils: Clases auxiliares para tareas comunes (ej. formatear fechas, encriptar texto).

Estrategias de Autenticación: Clases que gestionan la verificación de tokens o credenciales.




## 7. Práctica módulo 1: Crud Básico

Ej: CRUD en memoria para un recurso de Tareas (tasks)
dividiendo el código de forma limpia entre módulo, servicio y controlador

1. proyecto y el módulo de tareas
Node.js y Nest CLI instalados

```
# 1. Crear el proyecto NestJS (selecciona npm como gestor de paquetes)
nest new task-manager

# 2. Entrar a la carpeta del proyecto
cd task-manager

# 3. Generar el módulo 'tasks'
nest g module tasks
```

#### 0. Generar Módulo: creará la carpeta src/tasks/ y archivo tasks.module.ts y lo registrará automáticamente en AppModule


2. interfaz del modelo de datos
Crea manualmente el archivo src/tasks/task.model.ts
#### 1. define la estructura de una tarea dentro del sistema:

```
export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}
```


3. Implementar el Servicio con almacenamiento en memoria

#### 2. Genera el servicio usando el CLI: gestionar las operaciones del CRUD sobre un arreglo interno:

`nest g service tasks --no-spec`

src/tasks/tasks.service.ts y edítalo

```
import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: string): Task {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      throw new NotFoundException(`La tarea con ID "${id}" no existe.`);
    }
    return task;
  }

  create(title: string, description: string): Task {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  update(id: string, updateData: { title?: string; description?: string; completed?: boolean }): Task {
    const task = this.findOne(id);
    Object.assign(task, updateData);
    return task;
  }

  remove(id: string): void {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new NotFoundException(`La tarea con ID "${id}" no existe.`);
    }
    this.tasks.splice(index, 1);
  }
}
```


4. Crear el Controlador HTTP

#### 3. Genera el controlador para exponer las rutas HTTP e inyectar el servicio creado en el paso anterior

`nest g controller tasks --no-spec`

src/tasks/tasks.controller.ts
actualízalo con los endpoints del CRUD:

```
import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Task[] {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Task {
    return this.tasksService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: { title: string; description: string }): Task {
    return this.tasksService.create(body.title, body.description);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateData: { title?: string; description?: string; completed?: boolean },
  ): Task {
    return this.tasksService.update(id, updateData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string): void {
    this.tasksService.remove(id);
  }
}
```


5. Configuración del Módulo y ejecutar

#### 4. El CLI habrá registrado automáticamente el servicio y controlador en src/tasks/tasks.module.ts

```
import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
```

#### 6. Inicia el servidor de desarrollo:

`npm run start:dev`


#### 7. Endpoints Disponibles para Probar

Método,Ruta,Descripción,Payload de ejemplo (JSON)
GET,http://localhost:3000/tasks,Obtener todas las tareas,N/A
POST,http://localhost:3000/tasks,Crear una nueva tarea,"{""title"": ""Estudiar NestJS"", ""description"": ""Completar Módulo 1""}"
GET,http://localhost:3000/tasks/:id,Obtener tarea por ID,N/A
PUT,http://localhost:3000/tasks/:id,Actualizar una tarea,"{""completed"": true}"
DELETE,http://localhost:3000/tasks/:id,Eliminar tarea por ID,N/A


Rs:

0. Generar Módulo
1. crear archivo dominio y props
2. crear servicio: inyect, class serv, méthd crud; sobre array tasks
3. controlador para rutas e inyect serv, class controll y construct
4. Modulo registra controller, servicio en providers; inicio serv y end dispon


### Servidor Backend HTTP funcional

#### 1. Al momento podemos:

1. Probar la API completa con un cliente HTTP
##### abrir herramientas como Postman, Insomnia, Thunder Client (extensión de VS Code) o comandos curl
##### curl en la terminal, y hacer peticiones reales para guardar, consultar, modificar y eliminar tareas.

2. Conectarla a una aplicación Frontend
Si estás creando o tienes una interfaz en React, Vue, Angular, Svelte o una app móvil (Flutter/React Native)
##### ya puedes usar fetch() o axios apuntando a http://localhost:3000/tasks para mostrar y manipular datos reales desde la pantalla.


#### 2. Limitaciones al momento:

Aunque la API ya funciona, tiene tres puntos débiles propios de un prototipo básico

1. No hay persistencia permanente (Se resuelve en el Módulo 3):
##### Como las tareas se guardan en un arreglo de JavaScript (private tasks: Task[] = []), viven en la memoria RAM.
##### Si apagas el servidor o el CLI reinicia el proyecto tras guardar un cambio, todas las tareas creadas se borrarán

2. No hay validación de datos (Se resuelve en el Módulo 2):
##### Si alguien envía un POST con un objeto vacío {} o pasa un título con número en lugar de texto, tu servidor lo aceptará sin rechazarlo.

3. No hay seguridad ni roles (Se resuelve en el Módulo 4):
##### Cualquier cliente que conozca la URL http://localhost:3000/tasks/123 puede ejecutar un DELETE y borrar un registro sin identificarse ni iniciar sesión

Servidor ya "hace cosas" y funciona como un backend real



### Uso de cURL al momento

npm run start:dev
en http://localhost:3000

segunda terminal y ejecuta las siguientes peticiones en este orden:

1. Crear una tarea (POST)
##### probar la creación, enviamos un JSON con title y description.

```
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Aprender NestJS", "description": "Completar Módulo 1 y probar cURL"}'
```

Respuesta esperada (201 Created):

```
{
  "id": "1710000000000",
  "title": "Aprender NestJS",
  "description": "Completar Módulo 1 y probar cURL",
  "completed": false
}
```

##### Copia el valor de id que te devuelva la respuesta para usarlo en los siguientes pasos


2. Obtener todas las tareas (GET)

`curl -X GET http://localhost:3000/tasks`

Respuesta esperada (200 OK):

```
[
  {
    "id": "1710000000000",
    "title": "Aprender NestJS",
    "description": "Completar Módulo 1 y probar cURL",
    "completed": false
  }
]
```


3. Obtener una tarea por ID (GET /:id)

Reemplaza 1710000000000 por el ID que te generó tu servidor:

```
curl -X GET http://localhost:3000/tasks/1710000000000
```

Respuesta esperada (200 OK): Devuelve el objeto individual de la tarea.


4. Actualizar una tarea (PUT /:id)

Cambiamos el estado de la tarea a completada ("completed": true):

```
curl -X PUT http://localhost:3000/tasks/1710000000000 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'
```

Respuesta esperada (200 OK): Devuelve el objeto con el campo completed actualizado en true.


5. Eliminar una tarea (DELETE /:id)

`curl -X DELETE http://localhost:3000/tasks/1710000000000`

Respuesta esperada (204 No Content): Sin cuerpo de respuesta (respuesta vacía).


#### Probar el manejo de errores

##### Si intentas hacer un GET, PUT o DELETE con un ID que no existe (por ejemplo http://localhost:3000/tasks/abc),
##### verás cómo NestJS devuelve automáticamente un error formateado gracias al NotFoundException:

`curl -X GET http://localhost:3000/tasks/abc`

Respuesta (404 Not Found):

```
{
  "message": "La tarea con ID \"abc\" no existe.",
  "error": "Not Found",
  "statusCode": 404
}
```




# Módulo 2.

# 1. DTO

DTOs (Data Transfer Objects): Definición de contratos de entrada de datos utilizando clases de TypeScript
##### clase que define la forma y estructura exacta de los datos que una solicitud HTTP debe enviar al servidor

##### Actúa como un contrato formal entre el cliente (frontend/API consumer) y el controlador.

1. Uso de clases, no de interfaces

preguntas más comunes en NestJS
Aunque TypeScript permite definir contratos con interface o type

los DTOs en NestJS se definen obligatoriamente con clases (class):

Las Interfaces se borran en compilación
TypeScript elimina todas las interfaces al transpilar el código a JavaScript nativo
##### En tiempo de ejecución (runtime), la interfaz deja de existir.

##### Las Clases se conservan en tiempo de ejecución: Una class de ES6 permanece como una función constructora en JavaScript
##### NestJS necesita que el objeto exista en runtime para utilizar características avanzadas como la reflexión de metadatos, la validación automática y la generación de documentación con Swagger.


2. Ventajas Principales de usar DTOs

Contrato Claro:
Documenta exactamente qué campos son requeridos
cuáles opcionales y sus tipos de datos

Autocompletado y Tipado:
Otorga intellisense en tu IDE al escribir la lógica en el controlador o servicio

Soporte para Validación:
Sirve como la base donde se aplican los decoradores de validación
(como @IsString(), @IsEmail()).

Desacoplamiento:
Separa el modelo de la base de datos (Entidad) de los datos que recibes por la red (DTO).


3. Ej: Refactorizando la API de Tareas

##### Escribimos los tipos directamente en el controlador
(body: { title: string })


#### 1. Crear la clase `CreateTaskDto`:

Generalmente los DTOs se ubican en una carpeta dto/ dentro de la carpeta del módulo:

```
// src/tasks/dto/create-task.dto.ts

export class CreateTaskDto {
  readonly title: string;
  readonly description: string;
}
```

palabra clave readonly para garantizar la inmutabilidad de los datos de entrada


#### 2. Usar el DTO en el Controlador


Antes:

```
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: { title: string; description: string }): Task {
    return this.tasksService.create(body.title, body.description);
  }
```

A:

```
// src/tasks/tasks.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto'; // 👈 Importamos el DTO

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) { // 👈 Reemplaza la definición en línea
    return this.tasksService.create(createTaskDto);
  }
}
```


#### 3. DTO para Actualización (UpdateTaskDto)

Para actualizar (PUT o PATCH), los campos suelen ser opcionales
En NestJS podemos usar el paquete @nestjs/mapped-types
o simplemente declarar la clase:

```
// src/tasks/dto/update-task.dto.ts

export class UpdateTaskDto {
  readonly title?: string;
  readonly description?: string;
  readonly completed?: boolean;
}
```


Actualmente:

Hasta este punto, el DTO define el contrato a nivel de desarrollo y tipado estático
pero todavía no rechaza la petición si un usuario envía un tipo de dato incorrecto desde cURL o Postman

Para forzar al servidor a validar y rechazar payloads inválidos en tiempo de ejecución, se combina el DTO con los Pipes de Validación y class-validator



### Dominio y DTO

La interfaz Task no se elimina ni se reemplaza por el DTO
coexisten porque cumplen roles completamente distintos en la arquitectura

#### interfaz Task (Modelo / Entidad): Representa cómo luce una tarea dentro de tu aplicación y base de datos
Tiene todos los campos, incluyendo los que genera el backend (id y completed).

#### CreateTaskDto (Objeto de Transferencia): Representa únicamente los datos que el cliente debe enviar por la red para crear una tarea
El cliente no debe enviar el id (lo genera el servidor) ni el estado completed (nace en false por defecto).


#### DTO y Métodos

##### Los métodos GET y DELETE no necesitan un DTO para el cuerpo (@Body) porque no reciben un JSON de entrada en la petición HTTP

GET /tasks: No recibe DTO.
Retorna un arreglo del modelo: Task[].

GET /tasks/:id: Recibe @Param('id').
Retorna un objeto del modelo: Task.

DELETE /tasks/:id: Recibe @Param('id').
No retorna contenido (void).



#### DTO y Servicio TasksService

El servicio sigue utilizando la interfaz Task para manejar su arreglo en memoria
##### pero ahora sus métodos aceptan los DTOs como parámetros para recibir los datos de entrada limpios desde el controlador

service refactorizado:

```
// src/tasks/tasks.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.model'; // 👈 Modelo interno
import { CreateTaskDto } from './dto/create-task.dto'; // 👈 DTO para creación
import { UpdateTaskDto } from './dto/update-task.dto'; // 👈 DTO para actualización

@Injectable()
export class TasksService {
  private tasks: Task[] = []; // Sigue usando la interfaz Task

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: string): Task {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      throw new NotFoundException(`La tarea con ID "${id}" no existe.`);
    }
    return task;
  }

  // Recibe el DTO y construye la entidad Task completa
  create(createTaskDto: CreateTaskDto): Task {
    const newTask: Task = {
      id: Date.now().toString(),
      ...createTaskDto, // Copia title y description
      completed: false, // Regla de negocio: nace incompleta
    };
    this.tasks.push(newTask);
    return newTask;
  }

  // Recibe el DTO de actualización
  update(id: string, updateTaskDto: UpdateTaskDto): Task {
    const task = this.findOne(id);
    Object.assign(task, updateTaskDto); // Aplica solo los campos enviados
    return task;
  }

  remove(id: string): void {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new NotFoundException(`La tarea con ID "${id}" no existe.`);
    }
    this.tasks.splice(index, 1);
  }
}
```


#### Flujo de la arquitectura

```
Cliente (cURL / Frontend)
   │
   │  (Envía JSON: { "title": "Estudiar" })
   ▼
[Controller]  ────>  Valida entrada mediante [CreateTaskDto]
   │
   │  (Pasa CreateTaskDto)
   ▼
[Service]     ────>  Genera id, pone completed: false y guarda en memoria [Task]
   │
   │  (Retorna objeto Task completo)
   ▼
Cliente (Recibe JSON: { "id": "123", "title": "Estudiar", "completed": false })
```


### DTO y controlador

```
import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
// 1. Importamos los DTOs
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Task[] {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Task {
    return this.tasksService.findOne(id);
  }

  // 2. Reemplazamos el objeto anónimo por CreateTaskDto
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.create(createTaskDto);
  }

  // 3. Reemplazamos el objeto anónimo por UpdateTaskDto
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Task {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string): void {
    this.tasksService.remove(id);
  }
}
```


Imports: Se traen las clases CreateTaskDto y UpdateTaskDto desde la carpeta dto/.

##### Método @Post(): En lugar de destructurar body.title y body.description, le pasamos el objeto createTaskDto completo al servicio.

##### Método @Put(): Se elimina la definición de tipos en línea ({ title?: string... }) y se tipa con updateTaskDto



### Usos de DTO

##### indispensables siempre que necesites controlar, validar o transformar los datos que cruzan la frontera de tu aplicación (peticiones entrantes o respuestas salientes).

1. Prevención de Ataques de Asignación Masiva (Mass Assignment)
Si aceptas directamente el objeto de la petición sin un DTO
un atacante podría enviar campos maliciosos que tu entidad tenga en la base de datos.

Escenario: Registro público de un usuario.
Riesgo sin DTO: El cliente envía {"email": "x@x.com", "password": "123", "isAdmin": true}.

##### Solución DTO: Al no estar 'isAdmin' o 'role' en el DTO, la aplicación ignora o rechaza ese campo automáticamente.


```
export class RegisterUserDto {
  readonly email: string;
  readonly password: string;
  // Al no estar 'isAdmin' o 'role' en el DTO, la aplicación ignora o rechaza ese campo automáticamente.
}
```


2. Datos Temporales que no pertenecen a la Base de Datos

Muchas veces el cliente debe enviar datos necesarios para la lógica del proceso
pero que nunca se guardan en la base de datos.

Escenario: Formulario de registro con confirmación de contraseña.


#### Solución con DTO: confirmación de contraseña. Necesario para validar, pero no existe en la BD

```
export class RegisterDto {
  readonly email: string;
  readonly password: string;
  readonly confirmPassword: string; // 👈 Necesario para validar, pero no existe en la BD
}
```


3. Paginación, Filtros y Búsquedas Complejas (GET)

Los DTOs no solo se usan en POST o PUT (@Body())
##### son esenciales para tipar y validar los parámetros de consulta de la URL (@Query()).

Escenario: GET /products?page=1&limit=10&sortBy=price&order=ASC

Solución con DTO:

```
export class FilterProductsDto {
  readonly page?: number;
  readonly limit?: number;
  readonly sortBy?: string;
  readonly minPrice?: number;
}
```


4. Ocultamiento de Datos Sensibles (Response DTOs)

##### Un DTO no solo sirve para datos de entrada
##### !!! también para definir qué datos salen hacia el cliente (salida).

#### Escenario: Al consultar un perfil de usuario, la base de datos contiene passwordHash, resetToken y internalNotes. El cliente no debe ver esa información

##### Solucion DTO: Sin campos de contraseñas ni tokens internos

```
export class UserResponseDto {
  readonly id: string;
  readonly email: string;
  readonly fullName: string;
  // Sin campos de contraseñas ni tokens internos
}
```


5. Formularios por Pasos o Procesos de Negocio Complejos
#### Cuando una sola acción en la API impacta múltiples tablas o servicios internamente.

##### Escenario: Proceso de Checkout en un E-commerce.

#### Solución con DTO: heckoutDto

```
export class CheckoutDto {
  readonly items: { productId: string; quantity: number }[];
  readonly shippingAddressId: string;
  readonly paymentMethodId: string;
  readonly couponCode?: string;
}
```

#### !!! Regla: "Tu entidad de base de datos refleja la estructura del almacenamiento; tu DTO refleja la intención de la interacción HTTP."





# 2. Pipes de Validación (ValidationPipe): Transformación y saneamiento de payloads combinando class-validator y class-transformer.

Un Pipe en NestJS es una clase anotada con @Injectable()
#### opera sobre los argumentos de entrada de un controlador (serv, methods, dto necesar body) antes de que el método de la ruta sea ejecutado

dos funciones principales:

1. Transformación: Convertir datos de entrada al tipo deseado
(por ejemplo, convertir un parámetro de URL "42" de string a number).

2. Validación: Evaluar que los datos entrantes sean válidos.
Si son inválidos el Pipe interrumpe la petición y lanza una excepción HTTP automática
(usualmente 400 Bad Request).


#### 1. Trinidad de la Validación

NestJS no reinventa la rueda para validar datos
En su lugar, el ValidationPipe oficial combina tres herramientas que trabajan en equipo

```
Payload JSON (Cliente)
       │
       ▼
[class-transformer] ──> Convierte el objeto plano JS en una instancia de la clase DTO
       │
       ▼
[class-validator]   ──> Revisa las reglas (decoradores) definidas en la clase DTO
       │
       ▼
[ValidationPipe]    ──> Si hay errores, lanza 400 Bad Request. Si todo está OK, lo pasa al Controller.
```

1. class-validator: Librería que aporta decoradores (@IsString(), @IsEmail(), @Min(), etc.) para declarar las reglas de validación sobre las propiedades del DTO.

2. class-transformer: Librería que transforma objetos JSON nativos en instancias reales de clases de TypeScript (y viceversa).

3. ValidationPipe: El tubo/mecanismo de NestJS que orquesta las dos librerías anteriores en el flujo de la solicitud


#### 2. Instalación de Dependencias

Para habilitar esta funcionalidad en cualquier proyecto NestJS, se instalan estas dos librerías externas:

```
npm i --save class-validator class-transformer
```


#### 3. Aplicando Decoradores al DTO

#### !!! enriquecemos nuestra clase CreateTaskDto con los decoradores de class-validator

```
// src/tasks/dto/create-task.dto.ts
import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateTaskDto {
  @IsString({ message: 'El título debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El título no puede estar vacío' })
  @MinLength(3, { message: 'El título debe tener al menos 3 caracteres' })
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  readonly description: string;
}
```


actualización (UpdateTaskDto), usamos decoradores opcionales:

```
// src/tasks/dto/update-task.dto.ts
import { IsString, IsOptional, IsBoolean, MinLength } from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  readonly title?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsBoolean()
  readonly completed?: boolean;
}
```


#### 4. Habilitando el ValidationPipe Globalmente

#### !!! Para que las reglas se apliquen a toda la aplicación sin necesidad de configurar cada controlador individualmente
##### activamos el Pipe en el archivo de entrada src/main.ts:

```
// src/main.ts
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'; // 👈 Importamos ValidationPipe
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 👈 Activamos la validación global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            // 1. Elimina campos que no estén en el DTO (Saneamiento)
      forbidNonWhitelisted: true, // 2. Lanza un error si el cliente envía campos extra no definidos
      transform: true,            // 3. Transforma tipos automáticamente (ej. '1' a 1)
    }),
  );

  await app.listen(3000);
}
bootstrap();
```


5. Configuración de Saneamiento: ¿Qué hacen whitelist y transform?

Las opciones pasadas a ValidationPipe son esenciales para la seguridad de la API:

whitelist: true (Saneamiento / Cleanup):
##### Si un usuario envía un payload con datos basura o maliciosos:
{ "title": "Tarea", "description": "Desc", "admin": true }
##### NestJS automáticamente elimina admin antes de que el objeto llegue al controlador

forbidNonWhitelisted: true (Estricto):
##### En lugar de ignorar silenciosamente los campos no permitidos, rechaza la solicitud lanzando un error diciéndole al usuario: "property admin should not exist".

transform: true (Transformación de Tipos):
##### Si defines @Param('id') id: number en tu controlador, el Pipe convertirá automáticamente el valor recibido por URL
##### (que siempre llega como un string) a un number real de JavaScript


6. Cómo responde la API ante un Payload Inválido?

##### Hacer un POST /tasks enviando un objeto vacío {} o un número en el título
NestJS interrumpe el flujo y responde automáticamente con un código 400 Bad Request

```
{
  "statusCode": 400,
  "message": [
    "El título debe ser una cadena de texto",
    "El título no puede estar vacío",
    "El título debe tener al menos 3 caracteres",
    "description should not be empty",
    "description must be a string"
  ],
  "error": "Bad Request"
}
```



### Casos de uso

##### Transformación (convertir datos al tipo deseado)
##### Validación (asegurar que los datos cumplen las reglas antes de procesarlos)


1. Transformación de Tipos en la URL (ParseIntPipe, ParseBoolPipe)

##### Por naturaleza del protocolo HTTP, todos los parámetros de URL (@Param) y de consulta (@Query) llegan al servidor como cadenas de texto (string).

##### Los Pipes nativos los convierten automáticamente al tipo primitivo de JavaScript que requiere tu lógica.

Escenario: GET /products/15 (el ID llega como "15").

```
@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number) { // 👈 Convierte "15" a 15 (number)
  return this.productsService.findOne(id); // La BD o servicio espera un number
}
```

Si el cliente envía GET /products/abc, el ParseIntPipe cancela la petición de inmediato
responde con un error 400 Bad Request: Validation failed (numeric string is expected).


2. Validación Estricta de UUIDs (ParseUUIDPipe)

Evita consultas innecesarias a la base de datos si el cliente envía un identificador con formato inválido.

Escenario: Tu base de datos usa UUID v4 como clave primaria (c9bf9e57-1685-4c89-bafb-ff5af830be8a).

```
@Get(':id')
findOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
  return this.usersService.findOne(id);
}
```


3. Asignación de Valores por Defecto (DefaultValuePipe)

Útil para endpoints con paginación, filtros opcionales o búsquedas donde el usuario no envía todos los parámetros

Escenario: GET /tasks sin enviar parámetros de consulta.

```
@Get()
findAll(
  @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
) {
  // Si no se envían 'page' ni 'limit', page=1 y limit=10 de tipo number
  return this.tasksService.findAll({ page, limit });
}
```


4. Validación de Archivos Adjuntos (ParseFilePipe)

Permite validar peso, tipo MIME y extensiones de imágenes o documentos subidos en formularios multipart

Escenario: Subida de foto de perfil.

```
@Post('avatar')
@UseInterceptors(FileInterceptor('file'))
uploadAvatar(
  @UploadedFile(
    new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 2 }), // Máximo 2MB
        new FileTypeValidator({ fileType: 'image/(jpeg|png)' }), // Solo JPG o PNG
      ],
    }),
  )
  file: Express.Multer.File,
) {
  return this.usersService.saveAvatar(file);
}
```


5. Sanitización de Datos (Pipes Personalizados)

#### !!! Puedes crear tus propios Pipes con nest g pipe para transformar datos específicos antes de procesarlos.

Escenario: Asegurar que los correos siempre se guarden en minúsculas y sin espacios al inicio o final.

```
@Injectable()
export class LowercaseEmailPipe implements PipeTransform {
  transform(value: any) {
    if (value && typeof value.email === 'string') {
      value.email = value.email.trim().toLowerCase();
    }
    return value;
  }
}
```


Tipo de Pipe,Caso de uso típico

`ValidationPipe` ,Validar payloads JSON complejos enviados en @Body() con DTOs.

`ParseIntPipe / ParseArrayPipe`,Convertir tipos en @Param() y @Query().

`ParseUUIDPipe`,Garantizar claves primarias UUID válidas.

`DefaultValuePipe`,Paginación y valores por defecto en URLs.

`ParseFilePipe`,Subida de archivos (validar extensiones y pesos máximos).





# 3. Manejo de Excepciones: Uso de HttpException nativas (NotFoundException, BadRequestException) y filtros globales de excepciones.

#### sistema de Manejo de Excepciones de NestJS captura automáticamente todos los errores no controlados en la aplicación
##### para transformarlos en respuestas HTTP estructuradas y amigables para el cliente.

1. Excepciones HTTP Nativas (HttpException)
NestJS incluye una clase base llamada HttpException
y una lista de subclases listas para usar que representan los códigos de estado HTTP más comunes
Todas se importan desde @nestjs/common

Excepción,Código HTTP,Caso de uso típico

`BadRequestException`,400,Datos de entrada inválidos o faltantes.

`UnauthorizedException`,401,Usuario no autenticado o token JWT inválido/expirado.

`ForbiddenException`,403,Usuario autenticado pero sin permisos para esa acción (roles).

`NotFoundException`,404,El recurso solicitado no existe en la base de datos.

`ConflictException`,409,Regla de duplicidad violada (ej. intentar registrar un email existente).

`InternalServerErrorException`,500,Errores inesperados del servidor o caída de servicios externos.



2. en Código

Ej: servicio de tareas
utilizamos NotFoundException
Cuando lanzas (throw) una excepción, la ejecución del método se detiene inmediatamente y NestJS toma el control:

```
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';

@Injectable()
export class TasksService {
  findOne(id: string) {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      // Interrumpe la petición y responde con 404
      throw new NotFoundException(`La tarea con ID "${id}" no existe.`);
    }
    return task;
  }
}
```


Respuesta devuelta automáticamente por NestJS:

```
{
  "statusCode": 404,
  "message": "La tarea con ID \"123\" no existe.",
  "error": "Not Found"
}
```


3. Filtros de Excepciones Personalizados (ExceptionFilter)

Aunque el filtro global por defecto de NestJS es excelente

##### en aplicaciones reales suele ser necesario personalizar el formato JSON de los errores
##### registrar logs detallados en consola/archivo
##### o agregar metadatos como la hora o la ruta exacta donde ocurrió el fallo.

Para esto se utilizan los Filtros de Excepciones (ExceptionFilter).

Ej: Filtro Global Personalizado

Creamos un archivo src/common/filters/http-exception.filter.ts:

```
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException) // 👈 Indica qué tipo de excepciones va a capturar este filtro
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    // Formato personalizado de respuesta de error
    response.status(status).json({
      success: false,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      error: typeof exceptionResponse === 'object' ? exceptionResponse : { message: exceptionResponse },
    });
  }
}
```


4. Registro del Filtro Global en main.ts

Para aplicar este formato personalizado a toda la API, lo registramos en el archivo de entrada:

```
// src/main.ts
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { CustomExceptionFilter } from './common/filters/http-exception.filter'; // 👈 Importamos el filtro

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

  // Activamos el filtro de excepciones global
  app.useGlobalFilters(new CustomExceptionFilter());

  await app.listen(3000);
}
bootstrap();
```


con el Filtro Aplicado

##### Cualquier excepción lanzada en la aplicación (incluyendo los errores de ValidationPipe o NotFoundException) devolverá una estructura uniforme:

```
{
  "success": false,
  "statusCode": 404,
  "timestamp": "2026-09-07T21:54:00.000Z",
  "path": "/tasks/999",
  "method": "GET",
  "error": {
    "statusCode": 404,
    "message": "La tarea con ID \"999\" no existe.",
    "error": "Not Found"
  }
}
```



### Motivos

Implementar un Filtro de Excepciones Personalizado (ExceptionFilter)
práctica estándar en aplicaciones de producción


1. Estandarización de Contratos de Respuesta (Frontend & Apps)

#### Sin un filtro personalizado, las respuestas de error varían según el origen: un error de class-validator devuelve una estructura
un NotFoundException otra, y un error no controlado de la base de datos devuelve un formato genérico del framework.

##### Un filtro único garantiza que el 100% de las respuestas de error sigan exactamente el mismo contrato JSON
#### facilitando enormemente el manejo de errores en React, Angular, Flutter o clientes externos.


2. Observabilidad y Centralización de Logs

El filtro actúa como una aduana centralizada por donde pasan todos los fallos de la aplicación antes de responder al usuario
Es el lugar perfecto para:

Enviar el error a herramientas de monitoreo como Sentry, Datadog, New Relic o CloudWatch.

Registrar logs estructurados con detalles de rendimiento, el método HTTP, la URL exacta y la IP del cliente.


3. Seguridad y Enmascaramiento de Información Sensible

#### Si la base de datos se cae o una consulta falla inesperadamente
##### un error no controlado de Node.js podría exponer tablas
##### !!! nombres de columnas o secretos de infraestructura al cliente.

permite:

Exponer mensajes detallados cuando la excepción es controlada (HttpException).

Ocultar los detalles técnicos en errores inesperados (500),
enviando un mensaje neutro al usuario ("Error interno del servidor")
mientras guarda el stack trace completo únicamente en tus logs privados.


4. Trazabilidad de Peticiones (Correlation / Request ID)

En aplicaciones medianas o microservicios
el filtro permite inyectar un identificador único por petición (x-request-id).
##### Si un usuario reporta un error con un timestamp e ID
puedes buscar exactamente esa solicitud en los logs para diagnosticar el problema


5. Traducción de Errores de Terceros a Código HTTP

##### Permite capturar errores que no provienen directamente de NestJS
como excepciones de base de datos de Prisma, TypeORM
Mongoose o llamadas a APIs externas
y mapearlos a un código HTTP correcto en un solo lugar en vez de llenar tus servicios de bloques try/catch.

Ejemplo: Capturar el código de error 23505 de PostgreSQL (violación de clave única)
y transformarlo automáticamente en un 409 ConflictException.


Sin Filtro Personalizado,Con Filtro Personalizado
Estructuras JSON inconsistentes según el tipo de error.,JSON unificado para cualquier error de la API.
Inserción manual de logs en cada servicio o controlador.,Registro de logs automático e insalvable en un solo punto.
Riesgo de exponer fallos de BD o stack traces en producción.,Ocultamiento seguro de fallos internos para el cliente.
Difícil de rastrear en herramientas de monitoreo.,"Integración nativa con Sentry, Datadog o Winston."



### Usos generales filtro personalizado 

1. Mapeo Automático de Errores de Base de Datos (Prisma / TypeORM)

Cuando la base de datos falla (por ejemplo, una restricción de clave única o una clave foránea inexistente)
el ORM lanza una excepción propia de la base de datos, no un HttpException de NestJS
Sin un filtro, esto resultaría en un error 500 Internal Server Error o un fallo no controlado.

Escenario: Convertir códigos de error de la base de datos a códigos HTTP nativos sin usar try/catch en cada servicio.

```
import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { QueryFailedError } from 'typeorm'; // O PrismaClientKnownRequestError
import { Response } from 'express';

@Catch(QueryFailedError)
export class DatabaseExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // Código de error 23505 = Violación de restricción única en PostgreSQL
    if (exception.code === '23505') {
      return response.status(HttpStatus.CONFLICT).json({
        statusCode: HttpStatus.CONFLICT,
        message: 'El registro ya existe en el sistema (campo duplicado).',
        error: 'Conflict',
      });
    }

    // Código de error 23503 = Violación de clave foránea
    if (exception.code === '23503') {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'El recurso relacionado especificado no existe.',
        error: 'Bad Request',
      });
    }

    // Cualquier otro error de BD no mapeado
    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Error de base de datos no controlado.',
    });
  }
}
```


2. Mapeo de Excepciones de Dominio (Arquitectura Limpia / DDD)

En arquitecturas donde la lógica de negocio se mantiene desacoplada de la web (como Clean Architecture o DDD)
el servicio o la capa de dominio no debe importar @nestjs/common ni lanzar HttpException
En su lugar, lanza errores puros de TypeScript/JavaScript.

Escenario: Lanzar un error de negocio como InsufficientBalanceError y mapearlo a HTTP 400 en el filtro.

```
// Excepción pura de negocio (no conoce nada de NestJS ni de HTTP)
export class InsufficientBalanceError extends Error {
  constructor(public readonly available: number, public readonly required: number) {
    super(`Saldo insuficiente. Disponible: ${available}, Requerido: ${required}`);
  }
}

// Filtro en la capa web
@Catch(InsufficientBalanceError)
export class InsufficientBalanceFilter implements ExceptionFilter {
  catch(exception: InsufficientBalanceError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(HttpStatus.BAD_REQUEST).json({
      statusCode: HttpStatus.BAD_REQUEST,
      code: 'INSUFFICIENT_FUNDS',
      message: exception.message,
      details: {
        available: exception.available,
        required: exception.required,
      },
    });
  }
}
```


3. Reporte de Errores Críticos a Sistemas APM (Sentry, Datadog)

Cuando ocurre un error 500 inesperado (un null no manejado, fallo de conexión a red, etc.)
necesitas registrar inmediatamente el stack trace en un servicio de monitoreo externo
y al mismo tiempo limpiar la respuesta que ve el cliente para no exponer secretos

Escenario: Filtro "Catch-All" para capturar cualquier error no procesado de la aplicación.

```
import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus, Logger } from '@nestjs/common';
import * as Sentry from '@sentry/node';

@Catch() // Sin argumentos = captura ABSOLUTAMENTE TODO
export class GlobalCatchAllFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalCatchAllFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    // 1. Enviar el error no controlado a Sentry / Datadog
    Sentry.captureException(exception);

    // 2. Imprimir en consola interna
    this.logger.error(`Error no controlado en ${request.method} ${request.url}`, exception);

    // 3. Responder al cliente de forma segura (sin exponer información sensible)
    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Ocurrió un error interno en el servidor. El equipo técnico ha sido notificado.',
    });
  }
}
```


4. Internacionalización (i18n) de Errores de API

Si tu API atiende a clientes en distintos idiomas, el filtro puede leer la cabecera Accept-Language
e interceptar las respuestas de error para traducirlas antes de enviarlas.

Escenario: Traducir mensajes de error según la preferencia del usuario.

```
@Catch(HttpException)
export class I18nExceptionFilter implements ExceptionFilter {
  constructor(private readonly i18nService: I18nService) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const lang = request.headers['accept-language'] || 'es';

    const status = exception.getStatus();
    const res = exception.getResponse() as any;

    // Traduce la clave de mensaje
    const translatedMessage = this.i18nService.translate(res.messageKey || res.message, { lang });

    response.status(status).json({
      statusCode: status,
      message: translatedMessage,
    });
  }
}
```


##### Usa las excepciones nativas (NotFoundException, BadRequestException) directamente en tus controladores/servicios cuando la lógica sea simple y estándar

#### Crea un ExceptionFilter personalizado cuando necesites:

##### 1. No repetir bloques try/catch para errores repetitivos (ej. BD).

##### 2. Mantener la capa de dominio limpia de dependencias de NestJS.

##### 3. Integrar herramientas de métricas/telemetría (Sentry, Datadog).

##### 4. Garantizar un formato JSON corporativo o multilingüe rígido en toda la empresa.





# 4. Gestión de Configuración: Centralización de variables de entorno mediante @nestjs/config.

En Node.js tradicional es común acceder a las variables de entorno usando globalmente process.env.NOMBRE_VARIABLE

en NestJS este enfoque rompe principios clave de diseño como la Inversión de Control (IoC), la Inyección de Dependencias y la Facilidad de Testeo.

El módulo oficial @nestjs/config encapsula la librería dotenv para cargar y centralizar tus archivos .env dentro del sistema de dependencias de NestJS
a través de un servicio inyectable: ConfigService.

1. @nestjs/config

Inyec. Depend: Se inyecta formalmente en constructores mediante IoC.
Testing: Sencillo. Se pasa un mock de ConfigService en la suite de pruebas
Validación de Esquema: Permite validar al arrancar la app (Fail Fast). Si falta una variable requerida, no inicia.
Tipado Estático: Permite parsear automáticamente a number, boolean y obtener autocompletado 


2. Código

`npm i --save @nestjs/config`

Crear el archivo .env en la raíz del proyecto

archivo .env en la raíz de task-manager/ (al mismo nivel que package.json):

```
PORT=3000
ENVIRONMENT=development
API_PREFIX=api/v1
```

3. Registrar ConfigModule en AppModule

Importamos el módulo en src/app.module.ts
La opción { isGlobal: true } hace que ConfigService esté disponible en todos los módulos de la aplicación sin tener que importar ConfigModule de nuevo en cada submódulo (TasksModule, etc

```
// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Importamos ConfigModule
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Disponible globalmente en toda la app
      envFilePath: '.env', // Ruta por defecto (opcional)
    }),
    TasksModule,
  ],
})
export class AppModule {}
```


3. Formas de Consumir la Configuración

a. Uso dentro de un Servicio (TasksService)

Inyectamos ConfigService en el constructor para leer cualquier propiedad

```
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; // Importamos ConfigService

@Injectable()
export class TasksService {
  constructor(private readonly configService: ConfigService) {
    // Lectura de variables con tipos de datos
    const env = this.configService.get<string>('ENVIRONMENT');
    const port = this.configService.get<number>('PORT');
    
    console.log(`Ejecutando en modo ${env} en el puerto ${port}`);
  }

  // ... resto de la lógica de tareas
}
```


b. Uso en main.ts para arrancar el puerto dinámicamente

#### En main.ts, como no estamos dentro de una clase inyectable
##### pedimos la instancia de ConfigService al contenedor de NestJS mediante app.get():

```
// src/main.ts
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { CustomExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Obtenemos ConfigService del contenedor de dependencias
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.useGlobalFilters(new CustomExceptionFilter());

  await app.listen(port);
  console.log(`🚀 Aplicación corriendo en el puerto ${port}`);
}
bootstrap();
```


4. Buenas Prácticas: Validación con Joi (Fail Fast)

Una de las mejores características de @nestjs/config
es evitar que la aplicación arranque si faltan variables críticas
(como URL de base de datos o claves secretas).

Podemos instalar joi para definir un esquema obligatorio:

`npm i --save joi`

pasarlo a la configuración en app.module.ts:

```
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000),
        ENVIRONMENT: Joi.string().valid('development', 'production', 'test').default('development'),
        // Si no existe en el .env, la app NO arrancará y lanzará una excepción clara
      }),
    }),
  ],
})
export class AppModule {}
```



### Env vars

#### 1. Creación

Creas una variable de entorno en el momento en que identificas que un valor en tu código cumple al menos uno de estos 4 criterios fundamentales

1. Es un dato sensible o un secreto (Security)

Cualquier información que, si se expone en un repositorio de código
ponga en riesgo la seguridad de la infraestructura o de los usuarios.

##### Cuándo crearla: Al integrar un servicio externo, una base de datos o un sistema de autenticación.

JWT_SECRET=super_secreto_para_firmar_tokens
DATABASE_PASSWORD=mi_password_segura
STRIPE_API_KEY=sk_test_51Mz...


2. Cambia según el entorno donde se ejecute (Environment-specific)

##### Valores que deben apuntar a recursos distintos dependiendo de si estás trabajando localmente en tu computadora
en un servidor de pruebas (staging) o en el servidor final (producción).

Cuándo crearla: Cuando la aplicación deba comunicarse con servicios que tienen instancias separadas por entorno

DATABASE_HOST=localhost (en dev) vs. DATABASE_HOST=db.production.aws.com (en prod)
LOG_LEVEL=debug (en dev para ver todo) vs. LOG_LEVEL=error (en prod para no saturar los discos)
PAYMENT_GATEWAY_URL=[https://sandbox.payment.com](https://sandbox.payment.com) vs. [https://api.payment.com](https://api.payment.com)


3. Controla la infraestructura y el comportamiento del servidor (Infrastructure)

Parámetros que dependen de las capacidades físicas del servidor o del puerto asignado por la plataforma de la nube.

Cuándo crearla: Al definir límites, puertos o permisos de red para la API.

PORT=3000 (el puerto donde escucha la API)
CORS_ORIGIN=http://localhost:5173 (dominios permitidos para consumir la API)
MAX_FILE_SIZE_MB=5 (límite de subida de archivos)


4. Permite cambiar el comportamiento sin volver a compilar o re-desplegar (Feature Toggles & Business)

Si necesitas cambiar un parámetro de negocio o activar/desactivar una función rápidamente
cambiar una variable de entorno en el servidor y reiniciar la app toma segundos
en lugar de modificar el código, hacer un commit y ejecutar todo un flujo de integración continua (CI/CD).

crearla: Para parámetros operativos o pruebas de funciones nuevas.

ENABLE_SWAGGER_DOCS=true (mostrar la documentación interactiva solo en desarrollo)
MAINTENANCE_MODE=false (poner la API en mantenimiento ante una emergencia)
RATE_LIMIT_MAX=100 (máximo de peticiones permitidas por minuto)


Si al escribir un valor en el código te preguntas: "¿Qué pasa si mañana cambia este dato o si otra persona clona el repositorio?"
y la respuesta implica modificar archivos de código fuente, ese valor debe ser una variable de entorno.


#### 2. Acceso

1. Seguridad (Proteger secretos y credenciales)
El código fuente se sube a repositorios de código (GitHub, GitLab, Bitbucket) compartidos entre miembros del equipo o incluso públicos.
Si escribes contraseñas directamente en el código (hardcoding), cualquier persona con acceso al código tendrá tus accesos.

##### !!! Variables de entorno: Guardan claves privadas, tokens JWT, credenciales de base de datos o API Keys (Stripe, OpenAI, AWS) fuera del control de versiones (git).

2. Mismo Código, Múltiples Entornos

Tu código debe ser agnóstico al entorno donde se ejecuta
##### La misma aplicación corre en tu máquina (Local), en un entorno de pruebas (Staging) y en el servidor final (Producción).

En Local: Conectas a localhost:5432 con credenciales por defecto.

En Producción: Conectas a un cluster en AWS PostgreSQL con alta seguridad.

##### El código es exactamente el mismo; solo cambian las variables de entorno que el servidor lee al arrancar


3. Adaptación Dinámica a la Infraestructura

En plataformas de despliegue en la nube (AWS, Render, Heroku, DigitalOcean, Docker, Kubernetes)
el servidor o contenedor asigna parámetros dinámicos en tiempo de ejecución.

##### Ejemplo: El puerto HTTP no lo eliges tú manualmente; la plataforma te asigna un PORT aleatorio y tu aplicación debe leerlo de las variables de entorno para poder funcionar


4. Interruptores de Funcionalidades (Feature Toggles)

Permite activar o desactivar comportamientos de la aplicación de forma inmediata sin necesidad de modificar el código ni realizar un nuevo proceso de despliegue (deploy).

Ejemplo: ENABLE_MAILING=false para no enviar correos reales durante pruebas de estrés


5. Estándar de la Industria (12-Factor App)
La metodología The Twelve-Factor App
reglas para construir aplicaciones modernas en la nube
establece en su Tercer Factor que la configuración de una aplicación debe estar estrictamente separada del código y almacenarse en el entorno


### 3. Variables de entorno más comunes/estandar y su función

Ej:

PORT=3000
ENVIRONMENT=development
API_PREFIX=api/v1

Se organizan por la responsabilidad que cumplen dentro del sistema:

1. Servidor e Infraestructura
##### Definen cómo arranca y se expone la aplicación a la red.

NODE_ENV:
Estándar de Node.js que define el modo de ejecución
Optimiza librerías e inhabilita tareas de depuración en producción.
valor: development, production, test

PORT:
Puerto HTTP donde el servidor escucha las peticiones entrantes.
valor: 3000, 8080, 5000

API_PREFIX:
Prefijo global para las rutas de la API (versionado de la API).
valor: api/v1, v1

APP_URL / BASE_URL:
URL pública donde vive la aplicación
(útil para generar enlaces absolutos o redirigir).
valor: [https://api.midominio.com](https://api.midominio.com)

CORS_ORIGIN:
Dominios permitidos para consumir la API desde un navegador (Frontend).
valor: http://localhost:5173, [https://midominio.com](https://midominio.com)


2. Base de Datos

##### Parámetros necesarios para establecer la conexión con la base de datos de manera segura

DATABASE_URL / DB_URI:
Cadena de conexión única (formato URI) que reúne host, puerto, usuario, contraseña y nombre de la BD
valor: postgres://user:pass@localhost:5432/taskdb

DB_HOST:
Dirección del servidor de la base de datos (si se prefiere configurar por separado).
valor: localhost, db.production.aws.com

DB_PORT:
Puerto del servicio de la base de datos.
valor: 5432 (Postgres), 3306 (MySQL), 27017 (Mongo)

DB_USER:
Usuario de la base de datos.
valor: postgres, admin

DB_PASSWORD:
Contraseña de acceso a la base de datos.
valor: super_secret_password_123

DB_NAME:
Nombre del esquema o base de datos a utilizar.
valor: task_manager_db


3. Seguridad y Autenticación

Claves criptográficas y duraciones para proteger datos de los usuarios.

JWT_SECRET:
Cadena aleatoria usada para firmar y verificar tokens de autenticación JSON Web Token.
valor: g83f9s7d2h4k1l9p0a3m5n7b2v1c4x

JWT_EXPIRES_IN:
Tiempo de validez del token JWT antes de que el usuario deba autenticarse de nuevo.
1d, 3600s, 7d

SALT_ROUNDS / HASH_ROUNDS:
Nivel de complejidad para el algoritmo de encriptación de contraseñas (bcrypt).
valor: 10, 12

COOKIE_SECRET:
Clave secreta para firmar cookies en el navegador y evitar alteración del lado del cliente.
valor: secret_cookie_key


4. Integraciones y Servicios de Terceros

Credenciales de plataformas externas requeridas para operarlas desde el backend.

SMTP_HOST / MAIL_HOST:
Servidor para el envío de correos electrónicos transaccionales.
valor: smtp.gmail.com, smtp.sendgrid.net

SMTP_PORT:
Puerto del servicio de correo.
valor: 587 (TLS), 465 (SSL)

AWS_ACCESS_KEY_ID:
Clave de acceso pública para la infraestructura en Amazon Web Services (S3, SQS, etc.).
valor: AKIAIOSFODNN7EXAMPLE

AWS_SECRET_ACCESS_KEY:
Secreto privado correspondiente a las credenciales de AWS.
valor: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

AWS_S3_BUCKET:
Nombre del contenedor para almacenar archivos (imágenes, PDFs).
valor: task-manager-user-uploads

STRIPE_API_KEY / PAYPAL_KEY:
Clave privada para procesar pasarelas de pago.
valor: sk_test_51Mz...


5. Registros, Monitoreo y Caché
Ajustes para controlar la telemetría, detección de fallos y rendimiento.

LOG_LEVEL:
Controla el nivel de verbosidad de los logs del sistema.
valor: debug, info, warn, error

SENTRY_DSN:
URL para reportar excepciones no controladas automáticamente a Sentry.
valor: [https://xxxx@sentry.io/12345](https://xxxx@sentry.io/12345)

REDIS_URL:
URL de conexión al servidor de caché en memoria Redis.
redis://localhost:6379





### Motivos: ConfigService, ConfigModule y Validación con Joi 

#### Carga (ConfigModule) → Validación (Joi) → Consumo (ConfigService).


1. ConfigModule (Carga y Registro)
Su función es leer los archivos .env e integrarlos en el ciclo de vida de NestJS

Orquestación de Entornos: Permite cambiar fácilmente entre archivos según el entorno (.env.development, .env.test, .env.production).

Soporte para Módulos Globales: Con isGlobal: true, evita tener que importar la configuración repetitivamente en cada submódulo (TasksModule, AuthModule, etc.).

Estructura Modular (Namespaces): Permite agrupar configuraciones por tema (ej. database.config.ts, jwt.config.ts) en lugar de tener una lista plana y desordenada.


2. ConfigService (Consumo y Testabilidad)
Es la clase que se inyecta en los servicios y controladores para leer los valores

Resuelve el problema de usar process.env directamente.

Desacoplamiento e Inyección de Dependencias: Usar process.env.PORT directamente en el código vincula tu lógica a una variable global de Node.js
Inyectar ConfigService respeta el patrón IoC de NestJS.

Facilidad para Unit Tests (Mocking): Modificar process.env en pruebas unitarias contamina el proceso global de Node y puede causar fallos aleatorios entre tests
Con ConfigService, simplemente le pasas un objeto mock al servicio

ej:

```
// En tu test:
const mockConfigService = { get: (key: string) => 'test-value' };
```

Tipado de Salida: process.env siempre devuelve string | undefined. ConfigService permite especificar el tipo retornado

```
const port = configService.get<number>('PORT'); // Devuelve un number real
```


3. Validación con Joi (Principio Fail Fast y Seguridad)

Es el guardián que analiza las variables antes de que la aplicación termine de arrancar.

Principio Fail Fast (Fallar Rápido): Si falta una variable crítica (ej. DATABASE_URL o JWT_SECRET),
la aplicación se detiene en el segundo 0 lanzando un mensaje claro en consola.
##### Esto evita que la API arranque "a medias" y falle minutos o horas después cuando un usuario ejecute una acción

Prevención de Tipos Inválidos: Si alguien configura por error PORT=puerto3000 en el servidor de producción
Joi detecta que no es un número y detiene el despliegue de inmediato

Coerción Automática de Tipos: Los archivos .env solo entienden texto
Joi convierte automáticamente "true" a un boolean real o "3000" a un number real.

Valores por Defecto Fijos: Si no se define una variable opcional en el archivo .env
Joi asigna un valor por defecto seguro automáticamente.

##### Documentación como Contrato: El esquema de Joi sirve como la documentación oficial para cualquier desarrollador que intente levantar el proyecto
indicando qué variables son obligatorias

```
[.env] ──> [ConfigModule + Joi] ──> [ConfigService] ──> [Tu Lógica / Servicios]
  │               │                       │                      │
 Archivo       Valida tipos,           Inyecta la              Consume
 plano         requeridos y            dependencia             valores
 (strings)    "Fail Fast"             de forma limpia         seguros
```



### Usos de PORT, ENVIRONMENT y API_PREFIX

1. PORT y API_PREFIX (Configuración de arranque en main.ts)

Se consumen en el archivo de entrada para configurar cómo la red expone la API.

```
// main.ts
const configService = app.get(ConfigService);

// 1. API_PREFIX: Agrega automáticamente un prefijo global a TODAS las rutas del controlador
// Pasa de http://localhost:3000/tasks  ->  http://localhost:3000/api/v1/tasks
const apiPrefix = configService.get<string>('API_PREFIX') || 'api/v1';
app.setGlobalPrefix(apiPrefix);

// 2. PORT: Define el puerto de escucha (esencial para despliegues en la nube)
const port = configService.get<number>('PORT') || 3000;
await app.listen(port);

```


2. ENVIRONMENT (Lógica condicional según el entorno)

Permite que la API tome decisiones en tiempo de ejecución sobre qué funciones habilitar o qué nivel de detalle mostrar.

a. Habilitar documentación (Swagger) solo en Desarrollo

```
// main.ts
const environment = configService.get<string>('ENVIRONMENT');

if (environment === 'development') {
  // Solo genera y muestra la interfaz de Swagger en modo dev
  const config = new DocumentBuilder().setTitle('Task Manager API').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
}
```

b. Control de detalles de error en el ExceptionFilter 

```
// http-exception.filter.ts
const isDev = this.configService.get('ENVIRONMENT') === 'development';

response.status(status).json({
  statusCode: status,
  message: exception.message,
  // Muestra el Stack Trace técnico completo solo en desarrollo para debugging, lo oculta en producción
  stack: isDev ? exception.stack : undefined, 
});
```

c. Ajuste de CORS (Seguridad de origen)

```
app.enableCors({
  origin: environment === 'production' 
    ? 'https://mi-frontend-real.com' 
    : '*', // En dev permite peticiones desde cualquier origen
});
```


3. ConfigModule + Joi (En app.module.ts)

##### Actúa como el guardián de arranque de toda la aplicación.
##### Valida que los datos tengan el formato correcto antes de levantar el servidor.

```
// app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        // Fuerza a que PORT sea un número y asigna 3000 si no existe
        PORT: Joi.number().default(3000), 
        // Solo permite estos 3 valores exactos; si pones "dev", la app no arranca
        ENVIRONMENT: Joi.string().valid('development', 'production', 'test').default('development'), 
        // Exige que sea un texto no vacío
        API_PREFIX: Joi.string().default('api/v1'), 
      }),
    }),
    TasksModule,
  ],
})
export class AppModule {}
```


4. ConfigService (Inyección de dependencias en Servicios)

Se inyecta en cualquier clase (@Injectable()) que necesite consultar un parámetro de configuración para ejecutar su lógica.

```
// tasks.service.ts
@Injectable()
export class TasksService {
  constructor(private readonly configService: ConfigService) {
    // Ejemplo: consultar el prefijo o un valor configurado
    const prefix = this.configService.get<string>('API_PREFIX');
    console.log(`Servicio cargado bajo el prefijo: ${prefix}`);
  }
}
```

1. AppModule arranca → ConfigModule lee .env.

2. Joi intercepta → Si falta una variable requerida o PORT no es un número, detiene el proceso inmediatamente (Fail Fast).

3. main.ts lee los valores mediante app.get(ConfigService) → Aplica el prefijo global /api/v1, activa o desactiva funciones según ENVIRONMENT y abre el puerto PORT.

4. Los Servicios consumen ConfigService → Para obtener claves de API, URLs de bases de datos o secretos JWT de forma aislada e inyectable



### Formas de consumir la configuración de entorno



#### 1. Dentro de un Service

se utilizan ambas formas
separando estrictamente sus responsabilidades según el nivel de la arquitectura donde se consumen.

1. Consumo en main.ts (Nivel de Infraestructura y Arranque)

Fase: Ocurre durante el arranque (bootstrap) de la aplicación
antes de que el servidor empiece a escuchar peticiones HTTP

Responsabilidades:

Levantar el servidor web: Definir en qué puerto de red (PORT) escuchará la API.

Configurar el enrutamiento global: Establecer el prefijo base de las URLs (API_PREFIX $\rightarrow$ /api/v1).

Ajustar el entorno de ejecución: Activar o desactivar utilidades globales (CORS, Swagger, nivel de verbosidad de logs) según el ENVIRONMENT (development vs production


##### main.ts es el punto de entrada de la infraestructura
Los servicios y controladores aún no están procesando peticiones
Necesitamos leer las variables de entorno en este punto para configurar el contenedor HTTP antes de abrir la API al público

```
// main.ts
const configService = app.get(ConfigService);

const port = configService.get<number>('PORT');
const apiPrefix = configService.get<string>('API_PREFIX');

app.setGlobalPrefix(apiPrefix);
await app.listen(port);
```


2. Consumo en TasksService (Nivel de Lógica de Negocio / Dominio)

Fase: Ocurre en tiempo de ejecución (runtime), cuando los usuarios interactúan con los endpoints de la API.

Reglas de Negocio parametrizables: Consultar límites o comportamientos dinámicos del negocio (ejemplo: MAX_TASKS_PER_USER=50).

Integración con Servicios Externos: Leer credenciales para enviar correos de notificación cuando se crea una tarea (SMTP_HOST), o claves de APIS de terceros.

Persistencia (Módulo 3): Conectar con la base de datos inyectando credenciales dentro de los módulos correspondientes.


#### Los servicios albergan la lógica de la aplicación
Para mantener el código desacoplado y testable, el servicio inyecta ConfigService mediante Inversión de Control (IoC) en lugar de acceder a valores globales

```
// tasks.service.ts
@Injectable()
export class TasksService {
  private readonly maxTasks: number;

  constructor(private readonly configService: ConfigService) {
    // Lee un parámetro que afecta la regla de negocio
    this.maxTasks = this.configService.get<number>('MAX_TASKS_PER_USER') || 100;
  }

  create(createTaskDto: CreateTaskDto) {
    if (this.tasks.length >= this.maxTasks) {
      throw new BadRequestException(`Límite alcanzado: máximo ${this.maxTasks} tareas.`);
    }
    // ... crear tarea
  }
}
```

#### 2. En Main para arrancar el puerto dinamicamente




# 5. Práctica: Aplicar validaciones estrictas a las peticiones POST y PUT del CRUD, devolviendo errores HTTP estándar formateados adecuadamente.


1. Reglas de validación estricta en los DTOs

decoradores en CreateTaskDto y UpdateTaskDto


```
import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateTaskDto {
  @IsString({ message: 'El título debe ser una cadena de texto.' })
  @IsNotEmpty({ message: 'El título no puede estar vacío.' })
  @MinLength(3, { message: 'El título debe tener al menos 3 caracteres.' })
  @MaxLength(100, { message: 'El título no puede superar los 100 caracteres.' })
  readonly title: string;

  @IsString({ message: 'La descripción debe ser una cadena de texto.' })
  @IsNotEmpty({ message: 'La descripción no puede estar vacía.' })
  @MaxLength(500, { message: 'La descripción no puede superar los 500 caracteres.' })
  readonly description: string;
}
```

##### src/tasks/dto/update-task.dto.ts para permitir actualizaciones parciales
##### con @IsOptional() pero aplicando validación de tipo si la propiedad se envía:

```
import { IsString, IsOptional, IsBoolean, MinLength, MaxLength } from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsString({ message: 'El título debe ser una cadena de texto.' })
  @MinLength(3, { message: 'El título debe tener al menos 3 caracteres.' })
  @MaxLength(100, { message: 'El título no puede superar los 100 caracteres.' })
  readonly title?: string;

  @IsOptional()
  @IsString({ message: 'La descripción debe ser una cadena de texto.' })
  @MaxLength(500, { message: 'La descripción no puede superar los 500 caracteres.' })
  readonly description?: string;

  @IsOptional()
  @IsBoolean({ message: 'El estado completed debe ser un valor booleano.' })
  readonly completed?: boolean;
}
```


2. ValidationPipe estricto y CustomExceptionFilter

integración en src/main.ts

```
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { CustomExceptionFilter } from './common/filters/http-exception.filter'; // Importamos el filtro
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Obtenemos ConfigService del contenedor de dependencias
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;
  const apiPrefix = configService.get<string>('API_PREFIX') || 'api/v1'; //Leer prefijo

  // Aplicar el prefijo global a todas las rutas de la API
  app.setGlobalPrefix(apiPrefix);

  // Activamos la validación global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            // 1. Elimina campos que no estén en el DTO (Saneamiento)
      forbidNonWhitelisted: true, // 2. Lanza un error si el cliente envía campos extra no definidos
      transform: true,            // 3. Transforma tipos automáticamente (ej. '1' a 1)
    }),
  );

  // Activamos el filtro de excepciones global
  app.useGlobalFilters(new CustomExceptionFilter());

  await app.listen(port); // Usar la variable 'port' de ConfigService
  console.log(`🚀 Aplicación corriendo en el puerto ${port}`);

}
bootstrap();
```


2. Pruebas


POST - Creación Válida (HTTP 201)

```
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Diseñar capa de persistencia",
    "description": "Definir entidades de datos para el Módulo 3"
  }'
```

  
Resp exitosa

```
{
  "id": "1710000000000",
  "title": "Diseñar capa de persistencia",
  "description": "Definir entidades de datos para el Módulo 3",
  "completed": false
}
```


POST - Error de Validación Estricta por Tipos/Límites (HTTP 400)

Enviamos un título demasiado corto ("a") y una descripción vacía:

```
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "a",
    "description": ""
  }'
```

Respuesta formateada por CustomExceptionFilter:

```
{
  "success": false,
  "statusCode": 400,
  "timestamp": "2026-09-09T19:40:00.000Z",
  "path": "/tasks",
  "method": "POST",
  "error": {
    "message": [
      "El título debe tener al menos 3 caracteres.",
      "La descripción no puede estar vacía."
    ],
    "error": "Bad Request",
    "statusCode": 400
  }
}
```


POST - Error por Campo No Permitido / Inyección (HTTP 400)

Enviamos un campo priority que no existe en el CreateTaskDto:

```
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Probar saneamiento",
    "description": "Intento de enviar campo extra",
    "priority": "HIGH"
  }'

```

Respuesta formateada:

```

{
  "success": false,
  "statusCode": 400,
  "timestamp": "2026-09-09T19:41:00.000Z",
  "path": "/tasks",
  "method": "POST",
  "error": {
    "message": [
      "property priority should not exist"
    ],
    "error": "Bad Request",
    "statusCode": 400
  }
}
```


PUT - Actualización Válida (HTTP 200)

Actualizamos parcialmente la tarea creada en la Prueba 1 (reemplaza "1710000000000" por el ID real retornado):

```
curl -X PUT http://localhost:3000/tasks/1710000000000 \
  -H "Content-Type: application/json" \
  -d '{
    "completed": true
  }'
```

respuesta exitosa

```
{
  "id": "1710000000000",
  "title": "Diseñar capa de persistencia",
  "description": "Definir entidades de datos para el Módulo 3",
  "completed": true
}
```


PUT - Error de Tipo Invalido en Actualización (HTTP 400)

Intentamos enviar completed como texto ("SI") en lugar de boolean:

```
curl -X PUT http://localhost:3000/tasks/1710000000000 \
  -H "Content-Type: application/json" \
  -d '{
    "completed": "SI"
  }'
```

respuesta formateada


```
{
  "success": false,
  "statusCode": 400,
  "timestamp": "2026-09-09T19:42:00.000Z",
  "path": "/tasks/1710000000000",
  "method": "PUT",
  "error": {
    "message": [
      "El estado completed debe ser un valor booleano."
    ],
    "error": "Bad Request",
    "statusCode": 400
  }
}
```


GET / PUT / DELETE - Recurso No Encontrado (HTTP 404)

Solicitamos o actualizamos un ID inexistente:

```
curl -X GET http://localhost:3000/tasks/99999
```

respuesta formateada

```
{
  "success": false,
  "statusCode": 404,
  "timestamp": "2026-09-09T19:43:00.000Z",
  "path": "/tasks/99999",
  "method": "GET",
  "error": {
    "statusCode": 404,
    "message": "La tarea con ID \"99999\" no existe.",
    "error": "Not Found"
  }
}
```




# Módulo 3. Persistencia de Datos y Base de Datos


## Intro

#### !!!!! Hasta ahora, las tareas de la API han vivido exclusivamente en un arreglo en memoria (private tasks: Task[] = []).
##### fue útil para construir los controladores, validar payloads y estructurar el flujo de datos
cada vez que el proceso de Node.js se reinicia, la información se pierde

La Persistencia de Datos y Base de Datos
transforman la API en un sistema robusto, durable y preparado para producción


#### Cambio en la arquitectura

##### Pasamos de un esquema bidimensional a una arquitectura en capas completa (Layered Architecture):

```
[Cliente HTTP]
      │
      ▼
[TasksController]   ──> Valida la petición (DTOs & ValidationPipe)
      │
      ▼
[TasksService]      ──> Aplica reglas de negocio y orquesta el flujo
      │
      ▼
[Repository Layer]  ──> Abstrae las consultas SQL / Comandos de la BD
      │
      ▼
[Base de Datos]     ──> Almacenamiento persistente en disco (PostgreSQL / SQLite)
```

1. Abstracción mediante ORM (Object-Relational Mapping)
En lugar de escribir consultas SQL manuales (SELECT * FROM tasks),
#### utilizamos un ORM que nos permite mapear tablas de base de datos a clases de TypeScript

Un ORM nos brinda:

##### Tipado estático: Autocompletado y detección de errores de consulta en tiempo de compilación

##### Prevención de Inyección SQL: Sanitización automática de consultas.

##### Independencia del motor: Facilidad para cambiar de motor de BD con cambios mínimos de código.


2. Diferenciación Clave: DTOs vs Entidades

Uno de los errores más comunes en backend es confundir estos dos conceptos:

#### !!! DTO (Data Transfer Object): Define el contrato de la API (qué campos entran o salen por HTTP). Nivel de presentación.

#### !!! Entidad (Entity): Define el esquema de la base de datos (tablas, columnas, claves primarias, relaciones y tipos de datos en la BD). Nivel de persistencia.


3. El Patrón Repositorio (Repository Pattern)

#### Actúa como un mediador entre la capa de negocio (TasksService) y el ORM/BD.
##### El servicio no necesita saber cómo ejecutar un INSERT o un UPDATE
##### simplemente le pide al repositorio que persista o recupere una entidad
Esto facilita enormemente la creación de pruebas unitarias mediante mocks.


4. Gestión de Estado y Ciclo de Vida (Async/Await)

El acceso a disco o red para consultar una base de datos es asíncrono por naturaleza
#### Todo el flujo de servicios y controladores pasará a retornar Promise<T> y utilizar async/await


5. Migraciones de Base de Datos

#### !!!!! Migraciones: Son el "control de versiones" de la estructura de tu base de datos (git para esquemas SQL).
Permiten aplicar y revertir cambios en las tablas de forma segura a medida que la aplicación evoluciona en desarrollo y producción.


### Tecnologías

Fase 1
Elección de Herramientas
Comparativa de Motores (PostgreSQL vs SQLite) y ORMs (TypeORM vs Prisma).

Fase 2
Conexión & Módulo Global
Configuración de la conexión mediante @nestjs/config y variables de entorno.

Fase 3
Definición de Entidades
Creación de la entidad Task con decoradores de persistencia y enums.

Fase 4
Refactorización de CRUD
Migración de TasksService para consumir el Repositorio de forma asíncrona.

Fase 5
Relaciones & Migraciones
(Opcional) Introducción a relaciones (ej. User -> Tasks) y control de esquemas.



### Motores y ORMs

##### 1. La elección del motor define cómo se almacenan físicamente los datos
##### 2. cómo se maneja la concurrencia y la complejidad de infraestructura requerida


#### Motores DB

Arquitectura:

PostgreSQL:
Cliente-Servidor (servicio independiente o contenedor Docker).

SQLite:
Base de datos embebida (un único archivo .sqlite en el proyecto).


Concurrencia:

PostgreSQL:
Alta. Diseñado para cientos/miles de conexiones simultáneas con bloqueo a nivel de fila

SQLite:
Baja en escrituras. Bloquea el archivo completo durante una operación de escritura.


Tipos de Datos:

PostgreSQL:
Avanzados: JSONB, Arrays, UUID, Enums nativos, Geospatial (PostGIS).

SQLite:
Básicos: INTEGER, REAL, TEXT, BLOB, NULL.


Despliegue:

PostgreSQL:
Requiere orquestación (Docker, AWS RDS, Render, PostgreSQL local).

SQLite:
Cero configuración (zero-config), no requiere servidor.


PostgreSQL es el estándar de la industria para desarrollo backend moderno
manejar variables de entorno para hosts, puertos y contraseñas de PostgreSQL

SQLite, cero fricción inicial. no requiere levantar servicios en segundo plano o Docker



#### ORMs: TypeORM vs. Prisma

##### 3. La elección del ORM determina cómo interactúa TypeScript con la base de datos
##### 4. cómo se estructuran las capas de tu aplicación.


Paradigmas / Enfoque:

TypeORM:
Code-First (Clases TS): Las entidades se definen con clases e interfaces decoradas (@Entity(), @Column()).

Prisma:
Schema-First (DSL): El esquema se define en un archivo .prisma con un lenguaje propio y genera el cliente TypeScript


Patrón de Arquitectura:

TypeORM:
Implementa Data Mapper y Active Record
Encaja de forma nativa con el Patrón Repositorio

Prisma:
Funciona como un Query Builder tipado / Cliente autogenerado.

Integración con NestJS:

TypeORM:
Oficial e Integrada. Incluye el paquete @nestjs/typeorm y decoradores como @InjectRepository().

Prisma:
Agnóstica. Requiere envolver el cliente de Prisma en un PrismaService personalizado e inyectarlo.


Migraciones:

TypeORM:
Generadas automáticamente comparando tus clases de TypeScript con el estado actual de la BD.

Prisma:
Gestiones mediante comandos CLI (prisma migrate dev) basados en cambios en el archivo .prisma.


Aprendizaje:

TypeORM:
Requiere entender decoradores, entidades y ciclos de vida de TypeScript.

Prisma:
Su API fluida de consultas es intuitiva y tiene autocompletado nativo excepcional.




### TypeORM + PostgreSQL

Articulación de Decoradores, Entidades y el Ciclo de Vida de las clases dentro de TypeScript


1. Decoradores: Metadatos y Reflexión

#### !!! Función especial que se antepone a una clase, propiedad, método o parámetro usando el símbolo @.

Internamente:

En TypeScript y Node.js, las clases desaparecen durante la transpilación a JavaScript vanilla

Sin los decoradores, TypeORM no tendría forma de saber qué campos de una clase pertenecen a la base de datos
ni qué tipo de columna tienen en PostgreSQL.

##### Los decoradores utilizan la librería reflect-metadata para "anotar" metadatos invisibles en la clase durante el arranque de la aplicación
##### Cuando NestJS inicia, TypeORM lee estos metadatos y construye automáticamente el mapa SQL de PostgreSQL.


Decoradores principales de TypeORM:

#### @Entity()
Marca una clase como una tabla de PostgreSQL.
@Entity('tasks') (crea la tabla tasks)

#### @PrimaryGeneratedColumn()
Define la clave primaria (PRIMARY KEY) y su estrategia de generación.
@PrimaryGeneratedColumn('uuid') o ('increment')

#### @Column()
Mapea una propiedad de la clase a una columna de la tabla.
@Column({ type: 'varchar', length: 100 })

#### @CreateDateColumn()
Mapea un TIMESTAMP que PostgreSQL llena automáticamente al insertar.
@CreateDateColumn()

#### @UpdateDateColumn()
Mapea un TIMESTAMP que PostgreSQL actualiza automáticamente en cada modificación.
@UpdateDateColumn()


2. Entidades (Entities) vs. DTOs

Una Entidad es una clase de TypeScript mapeada directamente a una tabla de la base de datos relacional.

Diferencia conceptual crítica:

```
[ Petición HTTP ]
         │
         ▼
 ┌───────────────┐
 │   Task DTO    │  ──> Define qué datos RECIBE o DEVUELVE la API por HTTP.
 └───────────────┘      Usa 'class-validator' (@IsString, @MinLength).
         │
         ▼ (Servicio de NestJS)
 ┌───────────────┐
 │  Task Entity  │  ──> Define cómo se GUARDAN los datos en PostgreSQL.
 └───────────────┘      Usa decoradores de TypeORM (@Entity, @Column).
         │
         ▼
  [ Base de Datos ]
```


Capa:

DTO (Data Transfer Object
Presentación / Red (HTTP)

Entidad (Entity)
Persistencia / Datos (Base de Datos)


Decoradores:

DTO:
class-validator, class-transformer

Entidad:
@Entity(), @Column(), @PrimaryGeneratedColumn()


Propósito:

DTO:
Validar la estructura del payload entrante.

Entidad:
Representar la estructura física de la tabla SQL.


Ciclo de vida:

DTO:
Efímero (vive solo durante la petición).

Entidad:
Persistente (refleja datos almacenados en disco).


3. Ciclo de Vida de una Entidad (Entity Lifecycle Hooks)

#### !!! Cuando TypeORM interactúa con la base de datos, las entidades pasan por distintas fases
##### Instanciación, Lectura, Inserción, Actualización y Eliminación

TypeORM permite ejecutar lógica de negocio automática en momentos exactos de este ciclo
mediante escuchadores de eventos (Event Listeners):

Hooks de ciclo de vida más comunes:

#### @BeforeInsert(): Se ejecuta justo antes de enviar un INSERT a PostgreSQL.

#### @AfterInsert(): Se ejecuta inmediatamente después de guardar el registro en la BD.

#### @BeforeUpdate(): Se ejecuta justo antes de un UPDATE.

#### @AfterLoad(): Se ejecuta automáticamente cada vez que TypeORM lee un registro de la BD (SELECT) y lo transforma en una instancia de la clase de TypeScript.


#### Código integral

```
import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  BeforeInsert, 
  BeforeUpdate 
} from 'typeorm';

@Entity('tasks') // 1. DECORADOR DE ENTIDAD: Asigna la tabla 'tasks' en PostgreSQL
export class TaskEntity {

  @PrimaryGeneratedColumn('uuid') // Genera IDs únicos de tipo UUID (ej: "123e4567-e89b-12d3-a456-426614174000")
  id: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'boolean', default: false })
  completed: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  // 2. CICLO DE VIDA (HOOKS): Normalización automática antes de guardar
  @BeforeInsert()
  @BeforeUpdate()
  cleanData() {
    // Sanea espacios en blanco al inicio y final del título antes de guardar en la BD
    if (this.title) {
      this.title = this.title.trim();
    }
  }
}
```


#### Claves a recordar

1. La base de datos es la fuente de verdad de la entidad
TypeORM creará la tabla en PostgreSQL basándose estrictamente en las propiedades decoradas con @Column().

2. Las entidades no reemplazan a los DTOs: Aunque se parezcan, mantienen responsabilidades separadas en arquitecturas limpias.

3. Hidratación de objetos: Cuando TypeORM hace un SELECT, crea instancias reales de TaskEntity, permitiendo usar métodos de clase y ejecutar hooks como @AfterLoad().




### Componentes de una DB

Se organiza jerárquicamente
Cada componente cumple un rol específico en la estructuración, seguridad y rendimiento de la información

1. Servidor o Instancia (Database Server / Instance)

Es el proceso o servicio de software ejecutado en la máquina o contenedor
(Ej. proceso de PostgreSQL escuchando en el puerto 5432)
#### Gestiona la memoria, las conexiones de red y el acceso al disco.


2. Base de Datos (Database)

#### contenedor lógico principal de nivel superior
##### Un mismo servidor puede alojar varias bases de datos completamente independientes entre sí (ej. task_manager_dev, task_manager_test).


3. Esquema (Schema)

#### Un espacio de nombres o carpeta lógica dentro de una base de datos
Permite agrupar tablas por contextos
##### En PostgreSQL, el esquema por defecto donde se crean las tablas se llama public


4. Tabla (Table)

#### La unidad fundamental de almacenamiento relacional
##### Representa una entidad del dominio (ej. tasks, users).
Se organiza en una cuadrícula bidimensional de filas y columnas.


5. Columnas o Campos (Columns / Fields)

#### 1. Definen los atributos o propiedades que tendrá la entidad

#### !!! Cada columna requiere:

##### 2. Nombre: Identificador del campo (ej. title).

##### 3. Tipo de dato (Data Type): Define qué puede almacenar (VARCHAR, INT, BOOLEAN, TIMESTAMP, UUID).

##### 4. Reglas de Anulación (Nullability): Si admite valores vacíos (NULL) o es obligatorio (NOT NULL).

##### 5. Valor por defecto (Default): Valor asignado automáticamente si no se provee uno (ej. completed = false).


6. Filas, Registros o Tuplas (Rows / Records)

Cada entrada o elemento individual guardado dentro de una tabla
Corresponde a una instancia concreta de la entidad con sus valores reales


7. Claves o Llaves (Keys)

Mecanismos que garantizan la identidad y la relación entre datos:

#### Clave Primaria (Primary Key - PK):
Columna o conjunto de columnas que identifica de forma única e irrepetible a cada fila (ej. un ID o UUID).
No puede ser NULL.

#### Clave Foránea (Foreign Key - FK):
Columna que apunta a la Primary Key de otra tabla para establecer una relación entre ambas
(ej. user_id en la tabla tasks).


8. Restricciones (Constraints)

Reglas de integridad aplicadas a las columnas para evitar guardar datos inconsistentes o corruptos

#### UNIQUE: Garantiza que ningún valor se repita en esa columna
(ej. el email de un usuario).

#### CHECK: Valida una condición antes de insertar (ej. age >= 18).


9. Índices (Indexes)

#### Estructuras auxiliares de datos (frecuentemente árboles B-Tree)
##### que el motor crea en disco para acelerar las búsquedas y consultas (SELECT),
##### evitando tener que recorrer la tabla entera (Table Scan).

```
========================================================================================
SERVIDOR POSTGRESQL (localhost:5432)
========================================================================================
  │
  └── BASE DE DATOS: "task_manager_db"
        │
        └── ESQUEMA: "public"
              │
              ├── ÍNDICE: "idx_tasks_completed" (Optimiza búsquedas por estado)
              │
              └── TABLA: "tasks"
                    │
                    ├── ESTRUCTURA DE COLUMNAS (Metadatos)
                    │   ├── id          : UUID         [PK, NOT NULL, DEFAULT: gen_random_uuid()]
                    │   ├── title       : VARCHAR(100) [NOT NULL]
                    │   ├── description : TEXT         [NULLABLE]
                    │   ├── completed   : BOOLEAN      [NOT NULL, DEFAULT: false]
                    │   ├── created_at  : TIMESTAMP    [NOT NULL, DEFAULT: NOW()]
                    │   └── user_id     : UUID         [FK -> users.id]
                    │
                    └── REGISTROS DE DATOS (Filas reales)
                        ├─ Row 1: ['a1b2c3...', 'Aprender TypeORM', 'Ver decoradores', true,  '2026-09-10 00:00:00', 'u991...']
                        ├─ Row 2: ['d4e5f6...', 'Configurar Postgres', 'Usar Docker',   false, '2026-09-10 00:05:00', 'u991...']
                        └─ Row 3: ['g7h8i9...', 'Probar Migraciones', 'Ejecutar CLI',  false, '2026-09-10 00:10:00', 'u882...']

```

```
======================================================================================================================================
TABLA: "tasks"  (Esquema: public)
======================================================================================================================================
COLUMNAS (Atributos) ──►  id (UUID)                              title (VARCHAR)          description (TEXT)              completed   created_at
METADATOS            ──►  [PK, NOT NULL]                         [NOT NULL]               [NULLABLE]                      [BOOLEAN]   [TIMESTAMP]
======================================================================================================================================
FILA 1 (Registro)    ──►  123e4567-e89b-12d3-a456-426614174000     Instalar @nestjs/config  Configurar variables de entorno true        2026-09-10 00:00:00
FILA 2 (Registro)    ──►  987fc2a4-12da-45b1-89ce-123456789abc     Configurar TypeORM       Definir entidad TaskEntity      false       2026-09-10 00:05:00
FILA 3 (Registro)    ──►  a1b2c3d4-e5f6-7890-1234-56789abcdef0     Levantar PostgreSQL      Usar contenedor con Docker      false       2026-09-10 00:10:00
======================================================================================================================================
```

Estructura idéntica:

#### Cada fila horizontal representa una instancia única (una tarea concreta)
#### cada columna vertical representa una propiedad de esa tarea.


Encabezados:

La primera fila define los nombres de los atributos (title, description, etc.)


Caracteristicas:

En PostgreSQL, la columna completed es estricta (BOOLEAN).
Si intentas insertar el texto "quizás", el motor rechaza la operación y lanza un error de inmediato

En SQL, las Claves Foráneas (Foreign Keys) están garantizadas por el motor
Si intentas asignar una tarea a un user_id que no existe en la tabla de usuarios
PostgreSQL aborta la transacción

##### PostgreSQL maneja miles de peticiones simultáneas de lectura y escritura por segundo garantizando la propiedad ACID
PostgreSQL maneja miles de peticiones simultáneas de lectura y escritura por segundo garantizando la propiedad ACID



# 1. Integración de ORMs: Configuración de TypeORM o Prisma para interactuar con bases de datos relacionales (PostgreSQL / MySQL).

La aplicación sigue una tubería de configuración de 5 capas:

```
[.env]
──> [AppModule (forRootAsync)]
──> [TasksModule (forFeature)]
──> [TasksService (@InjectRepository)]
──> [PostgreSQL]
```


1. Dependencias

tres paquetes clave:

`npm install @nestjs/typeorm typeorm pg`

@nestjs/typeorm: Envoltorio (wrapper) oficial de NestJS para integrar TypeORM con la Inyección de Dependencias.

typeorm: El ORM subyacente.

pg: Controlador (driver) nativo de Node.js para comunicarse con el protocolo de PostgreSQL.


2. Variables de Entorno (.env)

#### Nunca se deben escribir credenciales de base de datos directamente en el código (hardcoding).
##### Se definen en un archivo .env local:

```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=taskmanager_db
```


3. Configuración Global en AppModule (TypeOrmModule.forRootAsync)

#### Para evitar bloqueos al arrancar la aplicación y asegurar que las variables de entorno se lean antes de intentar la conexión
se utiliza TypeOrmModule.forRootAsync() junto con el ConfigService de NestJS.

src/app.module.ts:

```
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    // 1. Carga variables de entorno globalmente
    ConfigModule.forRoot({ isGlobal: true }),

    // 2. Conexión asíncrona a la Base de Datos
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        
        // Carga automáticamente entidades registradas en módulos hijos
        autoLoadEntities: true,

        // Sincroniza automáticamente cambios de entidades con la BD en desarrollo.
        // WARNING: NUNCA usar synchronize: true en PRODUCCIÓN (usar migraciones).
        synchronize: true, 
      }),
    }),

    TasksModule,
  ],
})
export class AppModule {}
```


4. Registro del Dominio en TasksModule (TypeOrmModule.forFeature)

#### Cada módulo de dominio (como TasksModule) debe declarar explícitamente qué entidades maneja mediante TypeOrmModule.forFeature().
Esto registra el repositorio correspondiente en el contenedor de Inyección de Dependencias de NestJS.

src/tasks/tasks.module.ts:

```
import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';

@Module({
  providers: [TasksService],
  controllers: [TasksController]
})
export class TasksModule {}

```

A:

```
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TaskEntity } from './entities/task.entity';

@Module({
  imports: [
    // Inyecta el repositorio de TaskEntity en el ámbito de este módulo
    TypeOrmModule.forFeature([TaskEntity])
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
```


5. Inyección del Repositorio en TasksService (@InjectRepository)

#### En lugar de manipular datos con arreglos en memoria
##### se inyecta el repositorio de TypeORM Repository<TaskEntity> en el constructor del servicio usando el decorador @InjectRepository().

src/tasks/tasks.service.ts:

```
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  async findAll(): Promise<TaskEntity[]> {
    return await this.taskRepository.find();
  }

  async findOne(id: string): Promise<TaskEntity> {
    const task = await this.taskRepository.findOneBy({ id });
    if (!task) {
      throw new NotFoundException(`Tarea con ID "${id}" no encontrada`);
    }
    return task;
  }

  async create(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    // 1. Crea la instancia de la entidad respetando las reglas de clase
    const newTask = this.taskRepository.create(createTaskDto);
    // 2. Persiste la entidad en PostgreSQL (ejecuta INSERT)
    return await this.taskRepository.save(newTask);
  }

  async remove(id: string): Promise<void> {
    const result = await this.taskRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Tarea con ID "${id}" no encontrada`);
    }
  }
}
```


### Métodos Clave del Repositorio (Repository<T>)

#### Método | Operación Equivalente | Descripción

##### 1. create(dto): Ninguna (Operación en memoria)
Crea una instancia en memoria de la entidad lista para ser guardada o procesada por hooks.

##### 2. save(entity): INSERT / UPDATE
Si el objeto no tiene id, ejecuta un INSERT
Si ya existe id, ejecuta un UPDATE.

##### 3. find(): SELECT * FROM table
Devuelve un arreglo con todos los registros.

##### 4. findOneBy({ id }):  SELECT * FROM table WHERE id = x LIMIT 1
Busca el primer registro que coincida con el criterio.

##### 5. delete(id): DELETE FROM table WHERE id = x
Elimina el registro directamente por su clave primaria.



### Env vars de la DB

```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=taskmanager_db
```

1. DB_HOST
Define la dirección de red (IP o nombre de dominio) del servidor donde está corriendo el motor de PostgreSQL
TypeORM lo necesita para saber a qué máquina enviar la conexión

localhost: Indica que la base de datos se ejecuta en tu propia computadora local (loopback IP 127.0.0.1),
ya sea instalada directamente en tu sistema o expuesta a través de un contenedor de Docker en tu máquina.


2. DB_PORT
Especifica la "puerta de entrada" lógica en la red para comunicarse exclusivamente con el proceso de PostgreSQL dentro del servidor

5432: Es el puerto TCP estándar por defecto reservado mundialmente para PostgreSQL.
A menos que se cambie intencionalmente por colisión de puertos
la imagen oficial de PostgreSQL siempre escucha en el 5432.


3. DB_USERNAME
Identifica al usuario que solicita acceso a la base de datos para autenticación y control de permisos (RBAC).

postgres: Es el nombre del usuario superadministrador (superuser)
creado por defecto al instalar PostgreSQL o al inicializar su imagen oficial en Docker


4. DB_PASSWORD
#### credencial secreta que valida la identidad del usuario ante el motor de base de datos antes de permitir cualquier consulta SQL

##### postgres: Es un valor genérico ampliamente utilizado exclusivamente para entornos de desarrollo local
Emplear una clave sencilla evita fricciones al levantar el proyecto en tu máquina
##### (en producción esto se reemplaza por un secreto complejo almacenado en un gestor de credenciales).


5. DB_DATABASE
Especifica el nombre de la base de datos lógica concreta dentro del servidor a la que se conectará la API
##### Un mismo servidor Postgres puede alojar decenas de bases de datos independientes.

taskmanager_db: Es el nombre descriptivo que elegimos para aislar la información de este proyecto
Evita mezclar las tablas del task-manager con las de otros proyectos alojados en el mismo servidor.


## Genericos

```
const env = this.configService.get<string>('ENVIRONMENT');
const port = this.configService.get<number>('PORT');   
```

#### !!! Permite pasar tipos de datos como parámetros a funciones, clases o interfaces
#### !!! del mismo modo en que pasas variables como argumentos a una función.

#### !!! Ej: función o método que debe devolver datos de distintos tipos según cómo lo uses


Sin genéricos, tendrías dos problemas:

1. Usar any (Mala práctica): Pierdes la verificación de errores y el autocompletado de TypeScript.

```
// TypeScript no sabe qué tipo de dato devuelve, asume 'any'
const port = this.configService.get('PORT'); 
port.toUpperCase(); // TypeScript lo permite en compilación, pero FALLA en ejecución porque un número no tiene .toUpperCase()
```

2. Crear una función por cada tipo (Duplicación de código):

```
getStringConfig('ENVIRONMENT');
getNumberConfig('PORT');
getBooleanConfig('IS_ACTIVE');
```    

#### Los genéricos resuelven esto permitiendo que el método sea flexible pero manteniendo un tipado 100% estricto.

const port = this.configService.get<number>('PORT');

##### hay dos tipos de parámetros sucediendo al mismo tiempo:

Parámetro de TIPO (Genérico)
                       │
                       ▼
this.configService.get<number>('PORT');
                                ▲
                                │
                   Parámetro de VALOR (Ficción/JavaScript)

<number> (Parámetro de Tipo): Le dice a TypeScript: "Para esta llamada en concreto, asume que el valor retornado por get() es de tipo number".

('PORT') (Parámetro de Valor): Es el argumento normal de JavaScript que recibe la función para buscar la variable de entorno en el sistema.

Gracias al genérico <number>, si intentas escribir port.toUpperCase(),
TypeScript te mostrará un error antes de ejecutar el código, notificándote que el método .toUpperCase() no existe en un tipo number.


#### Definición de una función generica

Cuando los desarrolladores del framework de NestJS
crearon ConfigService, definieron el método get parecido a esto

```
class ConfigService {
  // 'T' representa un tipo genérico que tú definirás al llamar al método
  get<T>(variableName: string): T {
    const value = process.env[variableName];
    return value as T; // Convierte o asume que el valor devuelto es de tipo T
  }
}
```

La letra T es una convención estándar en TypeScript que significa Type. Al llamar al método:

Si escribes get<string>('ENVIRONMENT'), la T se reemplaza internamente por string.
Si escribes get<number>('PORT'), la T se reemplaza internamente por number.


usarás genéricos constantemente, especialmente con el patrón Repositorio de TypeORM:

```
// Le indicas al repositorio genérico que solo trabajará con la entidad 'TaskEntity'
constructor(
  @InjectRepository(TaskEntity)
  private readonly taskRepository: Repository<TaskEntity>,
) {}
```

Repository<TaskEntity> le indica a TypeORM:

taskRepository.find() devolverá una promesa de un arreglo de tareas: Promise<TaskEntity[]>.
taskRepository.findOneBy(...) devolverá una sola tarea: Promise<TaskEntity>.

Sin el genérico <TaskEntity>, el repositorio no sabría qué tabla ni qué columnas estás intentando consultar.



    
### Funcion con generico y sin generico


flexibilidad y la seguridad de tipos

una función normal opera sobre tipos de datos concretos fijados al momento de escribir el código

una función genérica opera sobre "variables de tipo" que se adaptan dinámicamente según quién la invoque.


1. Función Normal

atada a un tipo específico
Si quieres usarla con otro tipo, debes duplicar código o resignar la verificación.

```
// Solo acepta strings
function wrapInArray(value: string): string[] {
  return [value];
}

const res1 = wrapInArray("hola"); // Devuelve string[]

// ❌ Error de compilación: no acepta números
const res2 = wrapInArray(100);
```


2. Función Genérica: Flexible y Segura

Usa un parámetro de tipo <T> como si fuera una variable
Conserva el tipo exacto de lo que entra y sale.

```
function wrapInArray<T>(value: T): T[] {
  return [value];
}

// Invocación explícita o por inferencia automática
const res1 = wrapInArray<string>("hola"); // Devuelve string[]
const res2 = wrapInArray(100);            // Infiere automáticamente number[]

// ✅ Protegido: TypeScript conoce el tipo exacto en cada caso
res1[0].toUpperCase(); // VÁLIDO (es string)
res2[0].toFixed(2);    // VÁLIDO (es number)
```

#### Sin funciones genéricas, el patrón Repositorio de TypeORM tendría que forzarte a escribir métodos repetitivos para cada tabla (findTask(), findUser(), findProduct()).

Gracias a los genéricos, TypeORM provee un único Repository<T> genérico donde la T adopta la forma de cualquier entidad que le pases:

```
// En lugar de crear un repositorio desde cero para cada tabla:
const taskRepo: Repository<TaskEntity>; // T = TaskEntity -> find() devuelve TaskEntity[]
const userRepo: Repository<UserEntity>; // T = UserEntity -> find() devuelve UserEntity[]
```


### Configuración Global en AppModule (TypeOrmModule.forRootAsync).

Necesitamos TypeOrmModule.forRootAsync
1. centralizar el pool de conexiones a nivel global
2. resolver las credenciales de forma asíncrona mediante Inyección de Dependencias

en el AppModule: Infraestructura Global
#### !!! La base de datos es un recurso compartido e indivisible en toda la aplicación.

módulo raíz (Root Module) de NestJS

Configurar TypeORM aquí crea un pool de conexiones único (Singleton) que PostgreSQL usará para atender las peticiones de cualquier módulo hijo (TasksModule, UsersModule, AuthModule, etc.).
Los módulos de dominio no crean nuevas conexiones a PostgreSQL; solo "piden prestada" la conexión global configurada en el AppModule.


forRootAsync
diferencia crítica entre una configuración síncrona y una asíncrona.

El problema de la versión Síncrona (forRoot)
Si usas TypeOrmModule.forRoot({...}), la configuración se ejecuta en el instante exacto en que Node.js lee el archivo, antes de que NestJS termine de inicializar la aplicación.

Riesgos: No puedes inyectar servicios (ConfigService). Dependes de process.env global
lo que puede provocar que la aplicación intente conectarse a undefined:5432 y falle al arrancar.


Al usar forRootAsync, le ordenas a NestJS: "Espera a que el módulo de configuración esté listo
inyecta el ConfigService y recién ahí ejecuta la fábrica para conectarte a PostgreSQL


### Registro del Dominio en TasksModule (TypeOrmModule.forFeature)

TypeOrmModule.forFeature([TaskEntity]) en el TasksModule
es el puente que registra el Repositorio específico de esa entidad dentro del contenedor de Inyección de Dependencias (IoC) de NestJS

Mientras que forRootAsync establece la tubería global hacia PostgreSQL en el AppModule

forFeature le dice a NestJS: "Fabrica un repositorio para la tabla tasks y déjalo disponible para ser inyectado dentro de este módulo".


1. Habilita la Inyección con @InjectRepository()

NestJS no adivina qué repositorios necesita tu servicio. Si intentas inyectar @InjectRepository(TaskEntity) en TasksService
sin haber declarado forFeature([TaskEntity]) en TasksModule
el contenedor de NestJS fallará al arrancar con este conocido error:

2. Instancia automáticamente el Patrón Repositorio

Al pasar TaskEntity a forFeature
TypeORM lee los metadatos de la clase (decoradores @Entity, @Column, etc.)
construye dinámicamente una instancia de Repository<TaskEntity>
configurada para consultar exclusivamente la tabla tasks.

3. Preserva el Encapsulamiento y la Arquitectura Modular

Sigue el principio de responsabilidad única de NestJS:

AppModule maneja la infraestructura global (conexión, hosts, claves).
TasksModule maneja el dominio de tareas (sus tablas, servicios y controladores).

Si mañana creas un UsersModule, no contaminas el módulo de tareas
simplemente registras TypeOrmModule.forFeature([UserEntity]) dentro de UsersModule.

Flujo:

```
AppModule (forRootAsync)
──> Conecta la aplicación a la DB
		|
TasksModule (forFeature([TaskEntity]))		
──> prepara la conexión para TaskEntity
		|
TasksService (@InjectRepository(TaskEntity))		
──> Conecta el servicio para usarlo
```

Exportar repos entre Módulos:

##### Si en el futuro otro módulo (por ejemplo, ReportsModule)
##### necesitara consultar las tareas para generar estadísticas
no debe volver a conectarse a la BD por su cuenta
##### Basta con que TasksModule exporte su TypeOrmModule:

```
@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TypeOrmModule], // Hace accesible el repositorio de TaskEntity para otros módulos
})
export class TasksModule {}
```


### Inyección del Repositorio en TasksService (@InjectRepository)

Decorador @InjectRepository(TaskEntity) en el constructor de TasksService
Por la erradicación de tipos en tiempo de ejecución (Type Erasure) y la necesidad de tokens de inyección únicos.

Sin este decorador, el contenedor de Inyección de Dependencias (IoC) de NestJS no sabría qué repositorio concreto debe entregarle al servicio.

1. Resuelve el problema de la Erradicación de Tipos (Type Erasure)

los genéricos como <TaskEntity> solo existen durante la fase de desarrollo
Cuando el código se transpila a JavaScript vanilla para ejecutarse en Node.js, los tipos genéricos desaparecen por completo:

NestJS utiliza Reflection (reflect-metadata) para saber qué inyectar analizando el tipo del parámetro
Pero como Repository es una clase genérica compartida para todas las tablas
NestJS vería un simple Repository
y no sabría si debe entregar el de TaskEntity, UserEntity o ProductEntity

@InjectRepository(TaskEntity) genera internamente un token de identificación único
(ej. "TaskEntityRepository") que coincide exactamente con el token registrado previa y globalmente por TypeOrmModule.forFeature([TaskEntity]).

2. Implementa la Separación de Responsabilidades (Clean Architecture)

El TasksService no crea la conexión a la base de datos ni ejecuta sentencias SQL manuales
Al inyectar el repositorio, la capa de servicios delega la persistencia a TypeORM

Servicio (TasksService): Contiene la lógica de negocio (validar si una tarea puede marcarse como completada, procesar fechas, etc.).

Repositorio (Repository<TaskEntity>): Maneja el acceso a la base de datos (SELECT, INSERT, UPDATE, DELETE).

3. Facilita las Pruebas Unitarias (Mocking)
las pruebas unitarias de un servicio no deben tocar la base de datos real.

Como el repositorio se inyecta mediante el contenedor de NestJS con el token de @InjectRepository(TaskEntity)
en los archivos de test (tasks.service.spec.ts) puedes reemplazar fácilmente la base de datos real por un repositorio falso (Mock Repository):

```
// En tu prueba unitaria:
const module = await Test.createTestingModule({
  providers: [
    TasksService,
    {
      provide: getRepositoryToken(TaskEntity), // Mismo token que usa @InjectRepository
      useValue: {
        find: jest.fn().mockResolvedValue([{ id: '1', title: 'Tarea Falsa' }]),
        save: jest.fn(),
      },
    },
  ],
}).compile();
```

4. Otorga Métodos de Persistencia Listos para Usar

Al recibir la instancia inyectada de Repository<TaskEntity>
el servicio gana acceso directo y tipado a toda la API de consultas de TypeORM sin escribir código repetitivo:

this.taskRepository.find() ──> SELECT * FROM tasks

this.taskRepository.save(entity) ──> INSERT INTO tasks ... o UPDATE

this.taskRepository.findOneBy({ id }) ──> SELECT * FROM tasks WHERE id = $1

this.taskRepository.delete(id) ──> DELETE FROM tasks WHERE id = $1

Flujo:

```
1. AppModule (forRootAsync)        ──> Abre el canal global hacia PostgreSQL.
2. TasksModule (forFeature)        ──> Crea la fábrica 'TaskEntityRepository' en el contenedor IoC.
3. TasksService (@InjectRepository) ──> Solicita la instancia usando el token 'TaskEntityRepository'.
```



### Integración de TypeOrmModule.forRootAsync

manteniendo la validación de Joi y preservando los controladores y proveedores globales (AppController, AppService)

1. Expandir el esquema de Joi: Agregar las variables de entorno de PostgreSQL al objeto de validación
para que la aplicación no intente arrancar si falta alguna credencial (Fail-Fast).

2. Inyectar TypeOrmModule.forRootAsync
Añadir el módulo de TypeORM en el arreglo imports
justo después de la configuración del ConfigModule


#### Validación Fail-Fast con Joi
Al agregar .required() a DB_HOST, DB_USERNAME, DB_PASSWORD y DB_DATABASE
si olvidas definir alguna de estas claves en el archivo .env
Joi bloqueará la inicialización de NestJS inmediatamente lanzando un error claro en la consola

ValidationError: "DB_PASSWORD" is required

evita que TypeORM intente conectarse a la base de datos con valores undefined
ahorrando tiempo en depuración de errores de red.

#### Encadenamiento de Dependencias en imports

##### !!! El orden dentro del arreglo imports importa:

1. ConfigModule inicializa las variables y valida el .env
2. TypeOrmModule consume las variables ya validadas a través de ConfigService.
3. TasksModule podrá registrar sus entidades y repositorios sobre la conexión que TypeOrmModule estableció previamente.


#### Opcional: Extraer la fábrica de TypeORM a su propio archivo si app.module crece mucho
por tener muchas configuraciones inline, el estándar en proyectos medianos/grandes es mover el objeto de configuración de TypeORM a una carpeta src/config/.



### Integración de Inyección del Repositorio en TasksService (@InjectRepository)

#### En lugar de manipular datos con arreglos en memoria
##### se inyecta el repositorio de TypeORM Repository<TaskEntity> en el constructor del servicio usando el decorador @InjectRepository().

src/tasks/tasks.service.ts:

```
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  async findAll(): Promise<TaskEntity[]> {
    return await this.taskRepository.find();
  }

  async findOne(id: string): Promise<TaskEntity> {
    const task = await this.taskRepository.findOneBy({ id });
    if (!task) {
      throw new NotFoundException(`Tarea con ID "${id}" no encontrada`);
    }
    return task;
  }

  async create(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    // 1. Crea la instancia de la entidad respetando las reglas de clase
    const newTask = this.taskRepository.create(createTaskDto);
    // 2. Persiste la entidad en PostgreSQL (ejecuta INSERT)
    return await this.taskRepository.save(newTask);
  }

  async remove(id: string): Promise<void> {
    const result = await this.taskRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Tarea con ID "${id}" no encontrada`);
    }
  }
}
```

1. Reemplazar el arreglo en memoria por la inyección de Repository<TaskEntity>.

2. Transformar todos los métodos en asíncronos (async / Promise<T>), ya que el acceso a la base de datos involucra I/O de red/disco.

3. Manejar la actualización (update) con save(), combinando findOne y Object.assign.

4. Coexistencia en el constructor de @InjectRepository y ConfigService.

```
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';

import { TaskEntity } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    // 1. Inyección del repositorio de TypeORM para la tabla 'tasks'
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
    
    // 2. Mantenemos ConfigService si necesitas leer variables de entorno en el servicio
    private readonly configService: ConfigService,
  ) {
    const env = this.configService.get<string>('ENVIRONMENT');
    console.log(`TasksService inicializado en entorno: ${env}`);
  }

  // Obtenemos todas las tareas desde PostgreSQL
  async findAll(): Promise<TaskEntity[]> {
    return await this.taskRepository.find();
  }

  // Buscamos una tarea por ID (UUID en PostgreSQL)
  async findOne(id: string): Promise<TaskEntity> {
    const task = await this.taskRepository.findOneBy({ id });
    if (!task) {
      throw new NotFoundException(`La tarea con ID "${id}" no existe.`);
    }
    return task;
  }

  // Creamos la instancia en memoria y la persistimos con INSERT
  async create(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    const newTask = this.taskRepository.create(createTaskDto);
    return await this.taskRepository.save(newTask);
  }

  // Buscamos la tarea, aplicamos los cambios del DTO y ejecutamos UPDATE
  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<TaskEntity> {
    const task = await this.findOne(id); // Reutiliza findOne para lanzar 404 si no existe
    Object.assign(task, updateTaskDto);   // Aplica solo los campos enviados en el DTO
    return await this.taskRepository.save(task); // Si la entidad ya tiene 'id', save() realiza UPDATE
  }

  // Eliminamos directamente por ID y verificamos el número de filas afectadas
  async remove(id: string): Promise<void> {
    const result = await this.taskRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`La tarea con ID "${id}" no existe.`);
    }
  }
}
```

#### Cambios

##### 1. this.taskRepository.create(dto) vs this.taskRepository.save(entity):

create() no toca la base de datos; solo instancia el objeto ejecutando validaciones y hooks de la entidad
save() es el que ejecuta la consulta SQL (INSERT si no tiene ID, o UPDATE si el ID ya existe).


##### 2. delete() vs remove(): delete(id) ejecuta una consulta SQL DELETE FROM tasks WHERE id = $1 en un solo paso

remove(entity) requiere cargar primero la entidad completa en memoria antes de borrarla
Para operaciones simples por ID, delete() es más eficiente.


##### 3. Firma de Retorno: Todos los métodos ahora devuelven promesas (Promise<TaskEntity>, Promise<TaskEntity[]>, Promise<void>).


#### Siguiente cambio: Controller

Al cambiar la firma de TasksService a métodos asíncronos (Promise),
debes asegurarte de que TasksController consuma estas promesas utilizando async / await o retornando directamente la promesa para que NestJS la resuelva

##### actualizar la firma de cada método para que maneje Promesas (Promise<T>) mediante async / await
##### reemplace la antigua interfaz en memoria (Task) por la nueva TaskEntity.

```
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  ParseUUIDPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskEntity } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async findAll(): Promise<TaskEntity[]> {
    return await this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<TaskEntity> {
    return await this.tasksService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    return await this.tasksService.create(createTaskDto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<TaskEntity> {
    return await this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    await this.tasksService.remove(id);
  }
}
```


#### Cambios

##### 1. Retorno de Promesas (Promise<TaskEntity>): Dado que las operaciones con la base de datos son de entrada/salida (I/O) asíncronas 
el controlador debe marcarse como async y especificar que retornará una Promise con la entidad de respuesta

##### 2. Reemplazo de la Interfaz por TaskEntity: Se eliminó la importación type { Task } y en su lugar se utiliza TaskEntity 
que representa el modelo persistido con TypeORM

##### 3. Uso opcional de ParseUUIDPipe: Agregamos el pipe nativo de NestJS @Param('id', ParseUUIDPipe) en las rutas con id
###### !!! Si un cliente envía un ID que no es un UUID válido (ej: /tasks/123)
###### !!! NestJS responderá automáticamente un error 400 Bad Request sin siquiera intentar consultar a PostgreSQL.

##### 4. Resolución Automática de Promesas: NestJS se encarga de desempaquetar la promesa y enviar la respuesta JSON al cliente
de forma transparente una vez que await finaliza la consulta a la base de datos.




# 2. Entidades: Mapeo de objetos TypeScript a tablas mediante decoradores.

Mapeo Objeto-Relacional (ORM) es la técnica que permite representar tablas de PostgreSQL como clases de TypeScript
TypeORM utiliza decoradores para definir estas equivalencias
##### indicándole a la base de datos cómo construir la tabla y a TypeScript cómo tratar los datos devueltos por la base de datos.


1. La Transformación: De Clase a Tabla SQL

Cuando NestJS inicializa TypeORM
la librería escanea las clases marcadas con decoradores y genera las sentencias SQL para crear
o alterar las tablas en PostgreSQL:

```
CLASE TYPESCRIPT                              TABLA POSTGRESQL
┌──────────────────────────────┐              ┌──────────────────────────────┐
│ @Entity('tasks')             │  ── TypeORM ──► │ TABLE: tasks                 │
│ class TaskEntity {           │   Genera SQL │                              │
│   @PrimaryGeneratedColumn()  │ ───────────► │ id UUID PRIMARY KEY          │
│   id: string;                │              │                              │
│   @Column()                  │ ───────────► │ title VARCHAR(100) NOT NULL  │
│   title: string;             │              │                              │
│ }                            │              └──────────────────────────────┘
└──────────────────────────────┘
```


2. Anatomía de los Decoradores de Mapeo

A. Decorador de Tabla: @Entity(name?, options?)

Marca la clase de TypeScript como un modelo persistente

Si no le pasas un nombre (@Entity()), TypeORM usará el nombre de la clase en minúsculas (task_entity).
##### La mejor práctica en proyectos profesionales es especificar explícitamente el nombre de la tabla en plural y en minúsculas: @Entity('tasks').


B. Decoradores de Clave Primaria (Primary Keys)

Identifican de forma única a cada registro de la tabla:

@PrimaryGeneratedColumn('uuid') (Recomendado): Genera identificadores únicos universales
(ej. 123e4567-e89b-12d3-a456-426614174000)
##### Evita ataques de enumeración y facilita la distribución de bases de datos.

@PrimaryGeneratedColumn('increment'):
Utiliza un entero autoincremental clásico (1, 2, 3).

@PrimaryColumn(): Permite definir un campo como clave primaria sin generación automática
(útil si el ID viene de un sistema externo).


C. Decorador de Columna General: @Column(options)

Mapea una propiedad de la clase a una columna de PostgreSQL
##### Acepta un objeto de opciones para configurar el comportamiento exacto en el motor SQL:

```
@Column({
  type: 'varchar',     // Tipo de dato exacto en PostgreSQL
  length: 150,         // Límite de caracteres (para varchar)
  nullable: false,     // Define si acepta NULL (por defecto es false)
  unique: true,        // Aplica restricción UNIQUE en SQL
  default: 'Pendiente' // Valor por defecto si no se provee uno en la inserción
})
title: string;
```


D. Decoradores Temporales Automatizados

@CreateDateColumn(): Crea una columna timestamp que PostgreSQL llena automáticamente con la fecha/hora actual al ejecutar un INSERT.

@UpdateDateColumn(): Mapea un timestamp que PostgreSQL actualiza de forma transparente cada vez que se ejecuta un UPDATE sobre el registro


3. Equivalencia de Tipos: TypeScript vs. PostgreSQL

##### Como JavaScript y TypeScript tienen un sistema de tipos más simple que PostgreSQL
#### debemos ser explícitos en el mapeo para optimizar el almacenamiento


##### 1. string / varchar
Textos cortos con límite (nombres, títulos).
opción frecuente: { length: 100 }


##### 2. string / text
Textos largos sin límite previo (descripciones, posts).


##### 3. string / uuid
Identificadores únicos.
{ primary: true }


##### 4. number / integer/int
Números enteros de tamaño estándar.


##### 5. number / decimal/numeric
Dinero, porcentajes o precisión decimal exacta.
{ precision: 10, scale: 2 }


##### 6. boolean / boolean
Flags o estados binarios (true/false).
{ default: false }


##### 7. Date / timestamp/timestamptz
Fechas exactas con hora (y zona horaria).


##### 8. object/Array / jsonb 
Objetos JSON complejos e indexables.
{ nullable: true }



4. Implementación Final de TaskEntity

Integrando todos estos elementos, así se estructura la entidad en el archivo src/tasks/entities/task.entity.ts:

```
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tasks') // 1. Mapea la clase a la tabla 'tasks'
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid') // 2. Clave primaria UUID
  id: string;

  @Column({ type: 'varchar', length: 120, nullable: false }) // 3. Título obligatorio de máx 120 chars
  title: string;

  @Column({ type: 'text', nullable: true }) // 4. Descripción opcional sin límite de longitud
  description: string;

  @Column({ type: 'boolean', default: false }) // 5. Estado inicial por defecto en false
  completed: boolean;

  @CreateDateColumn({ type: 'timestamp' }) // 6. Fecha de creación automática
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' }) // 7. Fecha de modificación automática
  updatedAt: Date;
}
```


Claves:

@Entity('tasks'): La tabla en PostgreSQL se nombrará explícitamente tasks.

@PrimaryGeneratedColumn('uuid'): Genera claves primarias únicas no secuenciales (UUID v4).

@CreateDateColumn / @UpdateDateColumn: Gestión automática de marcas de tiempo (timestamps) gestionada a nivel de TypeORM y PostgreSQL.


### Modificaciones

1. task.model.ts: Se vuelve obsoleto y se elimina
La interfaz o clase en memoria
es reemplazada por completo por TaskEntity
##### pasa a ser la única fuente de verdad para la estructura del dominio

##### registra la entidad en el contenedor de NestJS mediante TypeOrmModule.forFeature([TaskEntity]).
Si no haces esto primero, el servicio fallará al intentar inyectar el repositorio.


2. tasks.service.ts: Se elimina el arreglo de almacenamiento local en memoria y se inyecta el repositorio a través del constructor
##### Todos los métodos pasan a ser asíncronos, delegando las operaciones de consulta, creación, actualización y borrado a los métodos del repositorio de TypeORM

Una vez disponible el repositorio en el módulo
actualizas el servicio para inyectarlo en el constructor
reemplazas el arreglo en memoria por las consultas SQL del repositorio
transformas los métodos en asíncronos


3. tasks.controller.ts: Se actualiza para el flujo asíncrono
Sus rutas se transforman en funciones asíncronas que retornan promesas de la entidad
##### Además, sus parámetros de ruta pueden incorporar tuberías de validación de UUID para rechazar identificadores mal formateados antes de consultar a la base de datos

##### Con el servicio ya funcionando con promesas, ajustas el controlador para consumir las respuestas asíncronas con async/await
y aplicas la validación de UUIDs en los parámetros de ruta.


4. tasks.module.ts: Se actualiza. Debe incorporar el registro de TypeOrmModule.forFeature([TaskEntity])
en su lista de importaciones, conecta la entidad con el contenedor de Inyección de Dependencias de NestJS
crea la instancia del repositorio para este módulo.


DTOs (create-task.dto.ts y update-task.dto.ts): Se conservan intactos y siguen siendo fundamentales
##### Existe una separación clara entre la capa de transporte (DTO) y la capa de persistencia (Entidad).
##### Los DTOs continúan validando los datos recibidos en las peticiones HTTP del cliente
##### luego esos datos validados son tomados por el servicio para instanciar o modificar la entidad.


Eliminar task.model.ts: Con todos los componentes apuntando a TaskEntity
eliminas el archivo del modelo antiguo para mantener la base de código limpia y libre de código muerto.


#### Configurar el Entorno y la Base de Datos (.env y docker-compose.yml):
##### Finalmente, defines las credenciales en el archivo de variables de entorno y levantas la instancia de PostgreSQL en Docker
##### para que NestJS pueda conectarse y crear la tabla automáticamente al arrancar.



### Cambios en tasks.service

```
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';

import { TaskEntity } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    // 1. Inyección del repositorio de TypeORM para la tabla 'tasks'
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,

    // 2. Conservamos ConfigService para lectura de entorno
    private readonly configService: ConfigService,
  ) {
    const env = this.configService.get<string>('ENVIRONMENT');
    const port = this.configService.get<number>('PORT');

    console.log(`Ejecutando en modo ${env} en el puerto ${port}`);
  }

  // Obtenemos todas las tareas directamente desde PostgreSQL
  async findAll(): Promise<TaskEntity[]> {
    return await this.taskRepository.find();
  }

  // Buscamos una tarea por su UUID
  async findOne(id: string): Promise<TaskEntity> {
    const task = await this.taskRepository.findOneBy({ id });
    if (!task) {
      throw new NotFoundException(`La tarea con ID "${id}" no existe.`);
    }
    return task;
  }

  // Instanciamos y guardamos la nueva tarea con INSERT
  async create(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    const newTask = this.taskRepository.create(createTaskDto); // Aplica defaults (ej: completed: false)
    return await this.taskRepository.save(newTask); // Ejecuta el INSERT en PostgreSQL
  }

  // Buscamos la tarea, aplicamos los cambios parciales y ejecutamos UPDATE
  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<TaskEntity> {
    const task = await this.findOne(id); // Reutiliza findOne para arrojar 404 si no existe
    Object.assign(task, updateTaskDto);   // Modifica solo los campos enviados
    return await this.taskRepository.save(task); // Al tener 'id', save() realiza un UPDATE
  }

  // Eliminamos directamente por ID y validamos filas afectadas
  async remove(id: string): Promise<void> {
    const result = await this.taskRepository.delete(id); // Ejecuta DELETE FROM tasks WHERE id = $1
    if (result.affected === 0) {
      throw new NotFoundException(`La tarea con ID "${id}" no existe.`);
    }
  }
}
```

1. Eliminación de private tasks: Task[] = []:
##### Ya no almacenamos los datos en la memoria RAM del servidor
#### !!! Toda la persistencia la gestiona PostgreSQL a través de this.taskRepository.

2. Tipado asíncrono (async / Promise<T>):
#### Todas las operaciones contra la base de datos realizan I/O de red asíncrono
##### Por ello, los métodos devuelven promesas (Promise<TaskEntity[]>, Promise<TaskEntity>, etc.).

3. create y save en TypeORM:

this.taskRepository.create() sólo instancia el objeto respetando los valores por defecto definidos en TaskEntity
(como completed: false o los timestamps).

this.taskRepository.save() persiste la instancia ejecutando una sentencia INSERT
(o UPDATE si el objeto ya posee clave primaria).

4. delete() con result.affected:
this.taskRepository.delete(id) envía una instrucción DELETE directa a PostgreSQL
Si affected === 0, significa que el ID no existía en la base de datos y lanzamos la NotFoundException.



### Cambios en tasks.controller

```
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  ParseUUIDPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskEntity } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async findAll(): Promise<TaskEntity[]> {
    return await this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<TaskEntity> {
    return await this.tasksService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    return await this.tasksService.create(createTaskDto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<TaskEntity> {
    return await this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    await this.tasksService.remove(id);
  }
}
```

1. Gestión de Respuestas Asíncronas: Todos los métodos usan async/await y devuelven tipos de tipo Promise<TaskEntity>.

2. Validación de Parámetros: Aplicas ParseUUIDPipe en todas las rutas con :id.
Esto previene consultas innecesarias a PostgreSQL si el cliente envía un ID con formato inválido
(lanzando automáticamente un error HTTP 400 Bad Request).

3. Manejo de Códigos HTTP: Utilizas correctamente @HttpCode(HttpStatus.NO_CONTENT) para el DELETE (retornando un 204 sin cuerpo)
y @HttpCode(HttpStatus.CREATED) para el POST (201).

4. Integración de Entidad: sustituiste todas las referencias al modelo antiguo por TaskEntity.



### Cambios en tasks.module

conectar TaskEntity con el inyector de dependencias de NestJS
para evitar el error Cannot resolve dependency al levantar la aplicación.

incluir TypeOrmModule.forFeature([TaskEntity]) dentro de imports:

1. NestJS crea automáticamente el repositorio genérico Repository<TaskEntity> vinculado a PostgreSQL

2. Expone dicho repositorio para que pueda ser inyectado mediante @InjectRepository(TaskEntity) en TasksService.

3. Encapsula la gestión de persistencia dentro del ámbito del módulo Tasks.



### Estado de la arquitectura

```
========================================================================================
                                 INFRAESTRUCTURA & CONFIGURACIÓN
========================================================================================

  [ .env ] ────────────────> [ ConfigModule + Joi ] (Validación de Variables)
                                     │
                                     ▼
  [ Docker Engine ] ────────> [ Contenedor PostgreSQL ] (Puerto: 5432, DB: tasks_db)

========================================================================================
                                   NESTJS APPLICATION
========================================================================================

  +----------------------------------------------------------------------------------+
  | AppModule                                                                        |
  |  ├─ ConfigModule.forRoot()                                                       |
  |  ├─ TypeOrmModule.forRootAsync()  ─────── (Conexión Global a PostgreSQL)         |
  |  └─ TasksModule                                                                  |
  +----------------------------------------------------------------------------------+
                                        │
                                        ▼
  +----------------------------------------------------------------------------------+
  | TasksModule                                                                      |
  |                                                                                  |
  |  [ Cliente HTTP ]                                                                |
  |         │                                                                        |
  |         │ (Request: GET / POST / PUT / DELETE)                                   |
  |         ▼                                                                        |
  |  ┌────────────────────────────────────────────────────────────────────────────┐  |
  |  │ TasksController                                                            │  |
  |  │  ├─ Valida parámetros con ParseUUIDPipe                                   │  |
  |  │  ├─ Transforma/Valida body con CreateTaskDto / UpdateTaskDto               │  |
  |  │  └─ Consume TasksService                                                   │  |
  |  └────────────────────────────────────────────────────────────────────────────┘  |
  |                                     │                                            |
  |                                     ▼                                            |
  |  ┌────────────────────────────────────────────────────────────────────────────┐  |
  |  │ TasksService                                                               │  |
  |  │  ├─ Inyecta ConfigService                                                │  |
  |  │  └─ Inyecta Repository<TaskEntity> (vía @InjectRepository)                 │  |
  |  └────────────────────────────────────────────────────────────────────────────┘  |
  |                                     │                                            |
  |                                     ▼                                            |
  |  ┌────────────────────────────────────────────────────────────────────────────┐  |
  |  │ TypeOrmModule.forFeature([TaskEntity])                                     │  |
  |  │  └─ Provee el repositorio 'Repository<TaskEntity>' para consultas SQL      │  |
  |  └────────────────────────────────────────────────────────────────────────────┘  |
  +----------------------------------------------------------------------------------+
                                        │
                                        │ (Sentencias SQL: SELECT, INSERT, UPDATE, DELETE)
                                        ▼
========================================================================================
                              BASE DE DATOS (POSTGRESQL)
========================================================================================

  Tabla: `tasks`  <─── Mapeada por `TaskEntity`
  ┌───────────────────┬───────────────────────────┬──────────────────────────────────┐
  │ Columna           │ Tipo SQL                  │ Mapeo en TaskEntity              │
  ├───────────────────┼───────────────────────────┼──────────────────────────────────┤
  │ id                │ uuid (Primary Key)        │ @PrimaryGeneratedColumn('uuid')  │
  │ title             │ varchar                   │ @Column()                        │
  │ description       │ varchar (nullable)        │ @Column({ nullable: true })      │
  │ completed         │ boolean                   │ @Column({ default: false })      │
  │ createdAt         │ timestamp with time zone  │ @CreateDateColumn()              │
  │ updatedAt         │ timestamp with time zone  │ @UpdateDateColumn()              │
  └───────────────────┴───────────────────────────┴──────────────────────────────────┘
```


Flujo de ejecución

1. Petición Entrante
El cliente envía una solicitud HTTP (por ejemplo POST /tasks).

2. Controlador: TasksController intercepta la solicitud
pasa la carga útil por la validación de DTOs y llama al método correspondiente del servicio.

3. Servicio: TasksService procesa la lógica de negocio
le delega el acceso a datos a Repository<TaskEntity>.

4. TypeORM / Driver: TypeORM traduce las operaciones en llamadas SQL asíncronas
hacia el puerto 5432 del contenedor de PostgreSQL.

5. Base de Datos: PostgreSQL ejecuta la consulta sobre la tabla tasks y devuelve el resultado a la aplicación NestJS
donde se mapea automáticamente a una instancia de TaskEntity.



1. Infraestructura y Configuración

.env + ConfigModule + Joi:
#### Carga y valida las variables de entorno al iniciar la aplicación.
##### Joi asegura que el entorno cumpla con el esquema esperado (por ejemplo, que existan el host, usuario, clave y puerto de la base de datos)
previniendo fallos en tiempo de ejecución por faltantes de configuración.

Docker Engine / Contenedor PostgreSQL:
#### Aísla el motor de base de datos (PostgreSQL) dentro de un contenedor,
##### garantizando un entorno uniforme, reproducible y portable para el almacenamiento de datos.
    

2. Módulos de NestJS (Estructura y Orquestación)

AppModule: Es el módulo raíz (Root Module) de la aplicación.
#### Se encarga de inicializar las configuraciones globales, establecer la conexión asíncrona a la base de datos vía TypeOrmModule.forRootAsync()
##### y registrar los módulos funcionales como TasksModule.

#### TasksModule: Módulo de dominio o característica (Feature Module).
##### Encapsula todo el contexto de tareas, registrando sus controladores, servicios y la entidad TaskEntity dentro del ámbito del ORM.


3. Capa de Entrada y Presentación (HTTP)

#### TasksController: Expone las rutas HTTP (GET, POST, PUT, DELETE).
##### Su responsabilidad es recibir la solicitud
##### delegar la ejecución a la capa de negocio
##### retornar la respuesta correspondiente al cliente.

Pipes (ParseUUIDPipe): Valida y convierte los parámetros de la URL (por ejemplo, asegurando que un ID recibido en los parámetros sea un UUID v4 válido)
antes de que la petición llegue al controlador.

#### DTOs (CreateTaskDto, UpdateTaskDto): Definen el contrato y las reglas de validación para el cuerpo (body) de las peticiones en operaciones de creación y actualización


4. Capa de Lógica de Negocio

#### TasksService: Contiene la lógica del dominio de la aplicación
##### No conoce detalles de transporte HTTP (no maneja directamente objetos req o res).
Recibe datos limpios del controlador, aplica las reglas de negocio necesarias e interactúa con la persistencia mediante la inyección del repositorio


5. Capa de Persistencia y Acceso a Datos (ORM)

#### TypeOrmModule.forFeature([TaskEntity]): Registra la entidad dentro del módulo local para habilitar la inyección de dependencias del repositorio correspondiente

#### Repository<TaskEntity>: Abstracción del patrón Repositorio provista por TypeORM
Ofrece métodos genéricos de acceso a datos (find, findOne, save, delete)
traduce estas operaciones a consultas SQL nativas (SELECT, INSERT, UPDATE, DELETE).

#### TaskEntity: Clase que define el modelo de datos en TypeScript
Mediante decoradores de TypeORM (@PrimaryGeneratedColumn, @Column, etc.)
mapea las propiedades de la clase con las columnas de la tabla SQL.


6. Base de Datos (Persistencia)

#### Tabla tasks (PostgreSQL): Almacén físico de datos. Garantiza la integridad, tipos de datos SQL
(uuid, varchar, boolean, timestamp with time zone) y persistencia a largo plazo de las tareas.




# 3. Patrón Repositorio / Consultas: Operaciones de lectura y escritura (find, save, update, delete).

#### Capa de abstracción que hace mediación entre el dominio de la aplicación (TasksService) y la capa de acceso a datos (PostgreSQL / TypeORM).
##### Su objetivo principal es encapsular la lógica de persistencia para que el servicio no necesite escribir sentencias SQL manuales
ni conocer los detalles internos del motor de base de datos.


1. Métodos de Lectura (SELECT)

### find(options?)
##### Recupera una lista de registros que coinciden con los criterios de búsqueda
Si no se le pasan argumentos, retorna la tabla completa.

```
// SELECT * FROM tasks WHERE completed = false ORDER BY createdAt DESC;
const pendingTasks = await this.taskRepository.find({
  where: { completed: false },
  order: { createdAt: 'DESC' },
});
```


### findOne(options) y findOneBy(whereCondition)

### findOneBy({ id })
##### Forma abreviada y rápida para buscar un registro por condiciones simples de igualdad.

### findOne({ where, relations })
##### Permite búsquedas más avanzadas, incluyendo relaciones con otras tablas (JOIN)
selecciones de campos específicos y ordenamiento

```
// SELECT * FROM tasks WHERE id = 'uuid-123' LIMIT 1;
const task = await this.taskRepository.findOneBy({ id });
```


2. Métodos de Escritura y Modificación (INSERT / UPDATE)

##### En TypeORM existe una distinción fundamental entre instanciar, guardar y actualizar directamente:

### create(dto) vs save(entity)

create(): No toca la base de datos
Es una función síncrona que solo crea la instancia del objeto en la memoria RAM respetando los tipos de la entidad y asignando valores por defecto.

save(): Es una función asíncrona que persiste la entidad en PostgreSQL
Posee comportamiento dinámico

##### Si la entidad no tiene ID (o no existe en la BD), ejecuta un INSERT.

##### Si la entidad ya tiene un ID existente, ejecuta un UPDATE.

```
// 1. Instanciación en memoria (sin I/O de red)
const newTaskInstance = this.taskRepository.create(createTaskDto);

// 2. Persistencia en la base de datos (INSERT INTO tasks ...)
const savedTask = await this.taskRepository.save(newTaskInstance);
```


### save(entity) vs update(id, partialEntity)

`Mecanismo`:

save:
Carga o valida la entidad y luego guarda.

update(id, partialEntity):
Ejecuta directamente la instrucción UPDATE.


`Retorno`:

save:
Devuelve la entidad completa actualizada.

update:
Devuelve un objeto UpdateResult (filas afectadas).


`Hooks / Disparadores`:

save:
Ejecuta eventos de entidad (@BeforeUpdate, etc.).

update:
No ejecuta eventos de entidad.


Uso:

save:
Cuando necesitas devolver el objeto modificado al cliente.

update:
Cuando buscas rendimiento puro y no necesitas el objeto actualizado de vuelta.


3. Métodos de Borrado (DELETE)

### delete() vs remove()

#### delete(id | criteria) (Recomendado para casos simples):
 
Ejecuta un comando SQL directo sin cargar primero el registro en memoria
Retorna un objeto DeleteResult que indica cuántas filas fueron afectadas (result.affected).

```
// DELETE FROM tasks WHERE id = 'uuid-123';
const result = await this.taskRepository.delete(id);
if (result.affected === 0) {
  throw new NotFoundException('Tarea no encontrada');
}
```


### remove(entity):

Requiere que la entidad haya sido buscada previamente (findOne).
Elimina la instancia cargada
Se utiliza principalmente cuando se requiere activar ganchos de ciclo de vida (@BeforeRemove)
o cuando se manejan eliminaciones en cascada de relaciones complejas.

```
┌─────────────────────────┬───────────────────────────────┬──────────────────────────────────────────┐
│ Necesidad               │ Método Recomendado            │ Resultado SQL Generado                   │
├─────────────────────────┼───────────────────────────────┼──────────────────────────────────────────┤
│ Obtener un listado      │ find()                        │ SELECT ... FROM tasks                    │
│ Obtener por ID          │ findOneBy({ id })             │ SELECT ... WHERE id = $1 LIMIT 1         │
│ Insertar un registro    │ create() + save()             │ INSERT INTO tasks ...                    │
│ Modificar un registro   │ findOne() + assign + save()   │ UPDATE tasks SET ... WHERE id = $1       │
│ Eliminar de forma rápida│ delete(id)                    │ DELETE FROM tasks WHERE id = $1          │
└─────────────────────────┴───────────────────────────────┴──────────────────────────────────────────┘
```





# 4. Relaciones: Modelado de asociaciones entre tablas (Uno a Uno, Uno a Muchos, Muchos a Muchos).  

Definen cómo se interconectan los datos dentro de un modelo relacional
##### Su objetivo principal es organizar la información sin duplicación y garantizar la integridad referencial mediante el uso de Claves Foráneas (Foreign Keys).

1. Tipos de Relaciones

### 1. Uno a Uno (One-to-One / 1:1)

#### Un registro de la Tabla A está asociado exclusivamente con un único registro de la Tabla B, y viceversa
##### La clave foránea se ubica en una de las dos tablas y requiere una restricción de unicidad (UNIQUE) para impedir que múltiples filas apunten al mismo registro.

Uso:
Separación de datos por seguridad, rendimiento o modularidad
(ej. Usuario ↔ PerfilDeUsuario, Tarea ↔ DetalleTecnicoDeTarea).


### 2. Uno a Muchos / Muchos a Uno (One-to-Many / 1:N)

#### Un registro de la Tabla A (padre) puede asociarse con múltiples registros de la Tabla B (hijos).
##### Sin embargo, cada registro de la Tabla B pertenece a un solo registro de la Tabla A.

##### La clave foránea siempre se almacena físicamente en el lado "Muchos" (la tabla hija)
##### haciendo referencia a la clave primaria de la tabla padre.

uso:
La relación estructural más habitual en sistemas relacionales
(ej. Usuario 1:N Tareas, Proyecto 1:N Tareas).


### 3. Muchos a Muchos (Many-to-Many / N:M)

#### Múltiples registros de la Tabla A pueden asociarse con múltiples registros de la Tabla B.

##### Los motores relacionales no pueden vincular directamente dos tablas en N:M.

#### !!! Se requiere obligatoriamente una Tabla Intermedia / Pivote (Junction Table)
##### almacena al menos dos claves foráneas: una que apunta a la Tabla A y otra a la Tabla B.

Uso:
Entidades que se comparten de forma no jerárquica
(ej. Tareas N:M Etiquetas/Tags, Estudiantes N:M Cursos).


2. Conceptos Clave de Operación y Modelado

### 1. Lado Propietario (Owner Side):
##### En el ORM, es la entidad encargada de gestionar la columna de la clave foránea en la base de datos (o la tabla pivote en relaciones N:M).
Solo las modificaciones hechas desde el lado propietario se reflejan físicamente en la base de datos.

### 2. Lado Inverso (Inverse Side):
##### Es la entidad reflejada en la relación que no posee la clave foránea
Permite navegar hacia el lado propietario, pero no controla la persistencia de la clave


### Estrategias de Carga (Fetch Strategies):

#### 3. Carga Ansiosa (Eager Loading):
Trae la entidad principal junto con sus relaciones en la misma consulta mediante sentencias JOIN.

#### 4. Carga Diferida (Lazy Loading):
Trae solo la entidad principal inicialmente y realiza consultas adicionales a la base de datos únicamente cuando el código accede a la propiedad de la relación


### 5. Acciones en Cascada (Cascades):
##### Permite que las operaciones realizadas sobre la entidad principal (crear, actualizar, eliminar) se propaguen automáticamente a sus entidades asociadas sin ejecutarlas manualmente una por una


### 6. Integridad en Eliminaciones (ON DELETE):

### CASCADE: Si se elimina la entidad padre, se borran automáticamente todas las entidades hijas asociadas.

### SET NULL: Si se elimina el padre, la clave foránea en los hijos se establece en NULL.

### RESTRICT: Bloquea la eliminación del padre mientras existan entidades hijas vinculadas a él.



## 1. Código relaciones

### 1. Uno a Muchos / Muchos a Uno (1:N / N:1)

##### Ej: Un Usuario puede tener muchas Tareas, pero cada Tarea pertenece a un solo Usuario.

##### El lado Muchos (TaskEntity) es el dueño de la relación (Owner Side) y almacena físicamente la clave foránea (userId).


#### Código: Lado "Muchos" (Propietario): src/tasks/entities/task.entity.ts

```
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from '../../users/entities/user.entity';

@Entity('tasks')
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 120 })
  title: string;

  // Decorador de relación N:1
  @ManyToOne(() => UserEntity, (user) => user.tasks, {
    onDelete: 'CASCADE', // Si se elimina el usuario, se borran sus tareas
    nullable: false,    // Una tarea debe pertenecer obligatoriamente a un usuario
  })
  @JoinColumn({ name: 'user_id' }) // Personaliza el nombre de la columna FK en la tabla SQL
  user: UserEntity;
}
```


### Código Lado "Uno" (Inverso): src/users/entities/user.entity.ts


```
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { TaskEntity } from '../../tasks/entities/task.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  // Decorador de relación 1:N (Relación inversa)
  @OneToMany(() => TaskEntity, (task) => task.user)
  tasks: TaskEntity[];
}
```


### 2. Uno a Uno (1:1)

#### Ej: Una Tarea tiene un único Expediente de Detalle Técnico, y cada Expediente pertenece a una sola Tarea

##### Requiere el decorador @JoinColumn() exclusivamente en el lado que mantendrá la clave foránea.


#### Código Lado Propietario: src/tasks/entities/task.entity.ts

```
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { TaskDetailsEntity } from './task-details.entity';

@Entity('tasks')
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 120 })
  title: string;

  // Relación 1:1 con Cascade para guardar automáticamente los detalles
  @OneToOne(() => TaskDetailsEntity, (details) => details.task, {
    cascade: true, // Si guardas/eliminas TaskEntity, afecta a TaskDetailsEntity
  })
  @JoinColumn({ name: 'details_id' }) // Crea la columna 'details_id' en la tabla 'tasks'
  details: TaskDetailsEntity;
}
```


#### Lado Inverso: src/tasks/entities/task-details.entity.ts

```
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { TaskEntity } from './task.entity';

@Entity('task_details')
export class TaskDetailsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  technicalNotes: string;

  @Column({ type: 'integer', default: 0 })
  estimatedHours: number;

  @OneToOne(() => TaskEntity, (task) => task.details)
  task: TaskEntity;
}
```


### 3. Muchos a Muchos (N:M)

#### Ej: Una Tarea puede tener múltiples Etiquetas (Tags), y una Etiqueta puede asignarse a múltiples Tareas.

##### Requiere el decorador @JoinTable() en el lado propietario para indicarle a TypeORM que debe crear automáticamente la tabla intermedia (pivote) en PostgreSQL

#### Lado Propietario: src/tasks/entities/task.entity.ts

```
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { TagEntity } from '../../tags/entities/tag.entity';

@Entity('tasks')
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 120 })
  title: string;

  @ManyToMany(() => TagEntity, (tag) => tag.tasks)
  @JoinTable({
    name: 'tasks_tags', // Nombre explicito para la tabla intermedia en PostgreSQL
    joinColumn: { name: 'task_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' },
  })
  tags: TagEntity[];
}
```


#### Lado Propietario: src/tasks/entities/task.entity.ts

```
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { TagEntity } from '../../tags/entities/tag.entity';

@Entity('tasks')
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 120 })
  title: string;

  @ManyToMany(() => TagEntity, (tag) => tag.tasks)
  @JoinTable({
    name: 'tasks_tags', // Nombre explicito para la tabla intermedia en PostgreSQL
    joinColumn: { name: 'task_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' },
  })
  tags: TagEntity[];
}
```


#### Lado Inverso: src/tags/entities/tag.entity.ts

```
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { TaskEntity } from '../../tasks/entities/task.entity';

@Entity('tags')
export class TagEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  name: string;

  @ManyToMany(() => TaskEntity, (task) => task.tags)
  tasks: TaskEntity[];
}
```


### Consultar entidades con sus relaciones en el Servicio

#### Para traer una entidad junto con sus tablas relacionadas mediante JOIN SQL
##### especificas la propiedad relations en las opciones de la consulta:

```
// En TasksService:
async findOneWithRelations(id: string): Promise<TaskEntity> {
  const task = await this.taskRepository.findOne({
    where: { id },
    relations: ['user', 'details', 'tags'], // Realiza los JOINs automáticamente
  });

  if (!task) {
    throw new NotFoundException(`Tarea con ID "${id}" no encontrada`);
  }

  return task;
}
```


## Motivos relaciones

### 1. Uno a Uno (1:1)

Aunque se podría poner toda la información en una sola tabla
dividir o multiplicar valores del theme

Rendimiento y Optimización de I/O: Permite separar columnas "pesadas" o de poco uso
(ej. textos largos, archivos binarios, configuraciones JSON) de la tabla principal.
Así, las consultas habituales (SELECT * FROM tasks) leen bloques de memoria mucho más pequeños y rápidos
cargando los detalles pesados solo cuando es estrictamente necesario.

Seguridad y Control de Acceso: Permite aislar datos sensibles en una tabla independiente con permisos restringidos a nivel de base de datos
(ej. separar la tabla users con datos públicos de la tabla user_credentials con hashes de contraseñas y claves MFX)

Modularidad de Dominio: Evita las "Tablas Monstruo" (God Tables) de 50 o 100 columnas
manteniendo el código limpio y respetando el Principio de Responsabilidad Única.


### 2. Uno a Muchos (1:N)

relación más común en cualquier sistema informático y existe por los siguientes motivos:

Eliminación de Redundancia (Normalización): Si un usuario tiene 500 tareas, no se repiten su nombre, email y contraseña 500 veces en la base de datos
Se almacena el usuario una sola vez en users y las tareas guardan únicamente una referencia ligera (user_id).

Consistencia y Mantenibilidad: Si el usuario cambia su correo electrónico, solo se ejecuta un UPDATE en la tabla users
Todas sus 500 tareas quedan vinculadas al dato actualizado automáticamente sin riesgo de inconsistencias.

Modelado de Propiedad y Jerarquía: Representa relaciones de subordinación o composición natural del mundo real
(ej. Factura → LíneasDeDetalle, Proyecto → Tareas, Categoría → Productos).


### 3. Muchos a Muchos (N:M)

Surge cuando las entidades se interrelacionan de forma cruzada y no jerárquica:

Clasificación Dinámica y Multidimensional: Permite etiquetas o categorías infinitas y flexibles
Una Tarea puede tener los tags "Backend", "Urgente" y "Bug"
mientras que el tag "Urgente" está asignado a cientos de tareas de distintos usuarios.

Estructura Limpia en SQL: Evita "anti-patrones" graves como guardar listas separadas por comas en una columna de texto (tags: "1,4,12")
lo cual destruye la capacidad de indexar, buscar o hacer validaciones de integridad referencial.

Enriquecimiento de la Asociación: Al requerir una tabla intermedia (Junction Table)
permite almacenar metadatos propios de la unión
(ej. en la relación Estudiantes N:M Cursos, la tabla intermedia puede guardar fecha_inscripcion, calificacion_final y estado_pago).


#### Relación Problema Principal que Resuelve Mecanismo en PostgreSQL Beneficio Clave

### Uno a Uno (1:1)
Tablas sobrecargadas o datos sensibles expuestos.
Clave Foránea + Restricción UNIQUE,
Eficiencia de lectura y aislamiento de seguridad.

### Uno a Muchos (1:N)
Duplicación masiva de datos en registros repetidos.
"Clave Foránea en el lado "Muchos""
Cero redundancia e integridad referencial.

### Muchos a Muchos (N:M)
Imposibilidad de vincular entidades de forma cruzada.
Tabla Intermedia / Pivote con 2 Claves Foráneas
Clasificación flexible y extensible.



## Extension sistema

Ej tres relaciones naturales

### User -> Task (Muchos a Uno / 1:N) — La más habitual
las tareas no flotan en el aire; pertenecen a una persona o asignado.
Muchas tareas pertenecen a un solo usuario (task.user_id).
Permite responder a consultas como: "Dame todas las tareas del usuario X".

### Task <-> Tag (Muchos a Muchos / N:M)
categorizar u organizar tareas dinámicamente con etiquetas como "Urgente", "Backend", "Personal".
Una tarea puede tener varias etiquetas, y una etiqueta puede estar presente en muchas tareas
Crea una tabla intermedia tasks_tags.

### Task -> Subtask: Relación Autorreferenciada / 1:N
dividir tareas complejas en tareas más pequeñas.
Una TaskEntity apunta a otra TaskEntity mediante una columna parent_id.


### Motivos para relacionar

#### Aparece el concepto de Autenticación / Usuarios:
Necesitas que un usuario registrado solo pueda ver sus propias tareas y no las de otros.

#### Necesidad de Filtrado Organizado:
El usuario necesita filtrar por categorías o proyectos creados dinámicamente.

#### Optimización de Rendimiento:
La tarea empieza a almacenar datos muy pesados (adjuntos, logs de auditoría largos)
que sobrecargan las consultas SELECT * FROM tasks habituales
justificando mover esos datos a una relación 1:1.
    


## Relaciones Autorreferenciadas

#### Una sola tabla física, pero dentro de ella existe una relación: cuando una tabla se relaciona consigo misma

### 1. Tareas y Subtareas (Jerarquía en tasks):
#### Una tarea compleja puede dividirse en subtareas.
Físicamente solo tienes la tabla tasks, pero la columna parent_id apunta al id de otra fila dentro de la misma tabla.

### 2. Organigrama de Empleados (employees):
#### En una tabla de empleados, un empleado tiene un jefe.
El jefe también es un registro en la tabla employees
por lo que la columna manager_id apunta al id de otro empleado.





## 2. Código consultas

#### funciones básicas del repositorio (find, findOneBy) funcionan bien para casos simples
#### las consultas especializadas o avanzadas son indispensables cuando la interfaz requiere búsquedas dinámicas, reportes o rendimiento optimizado

1. Paginación y Buscador Dinámico con Filtros Múltiples

Cuando una interfaz incluye una barra de búsqueda, filtros combinados (ej. estado + fecha) y paginación para no sobrecargar la memoria del cliente.
Si intentas traer miles de registros con .find() y filtrarlos en JavaScript con .filter(), colapsarás la memoria RAM del servidor NestJS.

El filtrado y el recorte (LIMIT/OFFSET) deben ocurrir dentro de PostgreSQL.

```
// En TasksService usando QueryBuilder
async findWithFilters(
  search?: string,
  completed?: boolean,
  page: number = 1,
  limit: number = 10,
): Promise<{ data: TaskEntity[]; total: number }> {
  const query = this.taskRepository.createQueryBuilder('task');

  // Filtro condicional por texto
  if (search) {
    query.andWhere(
      '(LOWER(task.title) LIKE :search OR LOWER(task.description) LIKE :search)',
      { search: `%${search.toLowerCase()}%` },
    );
  }

  // Filtro condicional por estado
  if (completed !== undefined) {
    query.andWhere('task.completed = :completed', { completed });
  }

  // Paginación y ordenamiento en SQL
  query
    .orderBy('task.createdAt', 'DESC')
    .skip((page - 1) * limit) // OFFSET
    .take(limit);             // LIMIT

  const [data, total] = await query.getManyAndCount();

  return { data, total };
}
```


2. Agregaciones y Métricas para Dashboards

Para pantallas de inicio, paneles administrativos o gráficos donde necesitas totales, promedios o conteos agrupados

Las operaciones matemáticas deben resolverse directamente con funciones nativas de PostgreSQL PostgreSQL (COUNT, SUM, AVG, GROUP BY) en microsegundos
en lugar de descargar miles de objetos a la aplicación para contarlos manualmente.

```
// Retorna las métricas de tareas por estado
async getTaskMetrics(): Promise<{ total: number; completed: number; pending: number }> {
  const result = await this.taskRepository
    .createQueryBuilder('task')
    .select('COUNT(task.id)', 'total')
    .addSelect('COUNT(CASE WHEN task.completed = true THEN 1 END)', 'completed')
    .addSelect('COUNT(CASE WHEN task.completed = false THEN 1 END)', 'pending')
    .getRawOne();

  return {
    total: parseInt(result.total, 10),
    completed: parseInt(result.completed, 10),
    pending: parseInt(result.pending, 10),
  };
}
```


3. Proyección de Datos y Optimización de Rendimiento (Selección Parcial)

Cuando una tabla tiene muchas columnas o campos pesados (como descripciones largas o JSONs)
y solo necesitas mostrar una lista rápida (ej. un menú desplegable con id y title).

Reduce drásticamente el consumo de red entre PostgreSQL y NestJS al seleccionar únicamente las columnas necesarias.

```
// Utilizando TypeORM FindOptionsSelect
async findTaskTitles(): Promise<Partial<TaskEntity>[]> {
  return await this.taskRepository.find({
    select: ['id', 'title', 'completed'], // Ignora description, createdAt, etc.
    where: { completed: false },
  });
}
```


4. Consultas por Rangos de Fechas / Filtros Temporales

Para reportes de actividad, tareas del día, de la semana o registros creados entre dos fechas específicas
Permite aprovechar los índices de fecha de PostgreSQL usando operadores relacionales
(Between, MoreThanOrEqual).

```
import { Between } from 'typeorm';

async findTasksByDateRange(startDate: Date, endDate: Date): Promise<TaskEntity[]> {
  return await this.taskRepository.find({
    where: {
      createdAt: Between(startDate, endDate), // SQL: WHERE createdAt BETWEEN $1 AND $2
    },
    order: { createdAt: 'ASC' },
  });
}
```


#### Caso de Uso | Método Recomendado | Razón Principal

##### Búsqueda por ID exacto
#### findOneBy({ id })
Sencillez y velocidad máxima.

##### Búsqueda con filtros opcionales + paginación
#### createQueryBuilder()
Permite encadenar condiciones dinámicamente (andWhere).

##### "Métricas, contadores y promedios"
#### createQueryBuilder() + getRawOne()
Agregación eficiente a nivel de motor SQL.

##### #Cargado optimizado de tablas pesadas
#### find({ select: [...] })
Evita la transferencia inútil de bytes por la red.

##### Filtros por rangos o estados múltiples
####find({ where: { date: Between() } })
Uso limpio de operadores nativos de TypeORM.




# 5. Práctica: Reemplazar el almacenamiento en memoria por una base de datos PostgreSQL conectada mediante Docker y TypeORM/Prisma.

## Implemantar Docker

software local del sistema, los archivos de infraestructura en el proyecto y los paquetes de Node.js.

1. Sistema

`Docker Engine`: El motor encargado de aislar y ejecutar el contenedor de PostgreSQL.

`Docker Compose` (Plugin docker compose o binario docker-compose): Herramienta para declarar y gestionar el servicio del contenedor mediante un archivo YAML simplificado

Permisos de usuario en Linux: Verificar que tu usuario pertenezca al grupo docker
(para ejecutar comandos sin necesidad de recurrir a sudo constantemente).


2. Configuración en el Proyecto

`docker-compose.yml`: Archivo declarativo en la raíz del proyecto que indica a Docker qué hacer.
Define:
La imagen oficial de PostgreSQL (ej. postgres:15-alpine).
Las credenciales iniciales de la base de datos (POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB).
El mapeo de puertos (5432:5432 para exponer la base de datos a tu máquina local).
Un volumen de datos (named volume o carpeta local) para garantizar que la información guardada no se borre al apagar o reiniciar el contenedor

`Archivo .env`: Centraliza las variables de entorno requeridas tanto por NestJS (ConfigModule) como por Docker.

`.gitignore`: Debe incluir .env y las carpetas de datos locales de Docker para evitar subir credenciales o archivos binarios al repositorio.


3. Dependencias de Node.js / NestJS

@nestjs/typeorm, typeorm y @nestjs/config

pg: El paquete de Node.js que TypeORM utiliza internamente para comunicarse mediante el protocolo nativo de PostgreSQL.

(Opcional) @types/pg: Tipos de TypeScript para el driver de PostgreSQL como dependencia de desarrollo



## Config

1. terminal del proyecto

```
npm install pg
npm install -D @types/pg
```

2. variables de entorno (.env)
Crear en la raíz del proyecto (junto a package.json)

```
ENVIRONMENT=development
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=tasks_db
```

3. Crear el archivo docker-compose.yml
Crear en la raíz del proyecto

archivo docker-compose.yml para definir el servicio de la base de datos y la persistencia en un volumen nombrado

```
services:
  postgres_db:
    image: postgres:15-alpine
    container_name: tasks_postgres_db
    restart: always
    environment:
      POSTGRES_USER: ${DB_USERNAME}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: ${DB_NAME}
    ports:
      - "${DB_PORT}:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```


4. Levantar el contenedor de PostgreSQL

Requiere que Docker Engine esté en ejecución

Ejecuta el siguiente comando para descargar la imagen y arrancar el contenedor en segundo plano:

```
docker compose up -d
```


5. Verificar el estado del contenedor
Comandos de diagnóstico

Comprueba que el contenedor esté corriendo correctamente en el puerto 5432:

```
# Ver estado del contenedor (debe decir Up)
docker compose ps

# Ver logs iniciales de PostgreSQL
docker compose logs -f postgres_db
```



## Instalación docker

1. Actualizar dependencias previas
índice de paquetes e instala las herramientas necesarias para descargar y verificar los repositorios oficiales

sudo apt update
sudo apt install -y ca-certificates curl gnupg


2. Agregar el repositorio oficial de Docker
Configuración de claves GPG y lista de fuentes

Añade la clave GPG oficial de Docker y registra el repositorio estable en tu gestor de paquetes:

```
# Crear directorio para la clave GPG
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Agregar el repositorio
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```


3. Instalar Docker Engine y Docker Compose
Instalación de paquetes principales

Sincroniza los repositorios e instala el motor de Docker junto con el plugin de Compose:

```
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```


4. Iniciar y habilitar el servicio:
Gestión del demonio de Docker.

Asegúrate de que el Demonio de Docker esté activo:

```
# En sistemas con systemd:
sudo systemctl enable --now docker

# En sistemas con SysVinit / runit:
sudo service docker start
```


5. Permisos de ejecución sin sudo
Añadir tu usuario al grupo docker

Para interactuar con el socket de Docker sin requerir sudo en cada comando:

```
sudo usermod -aG docker $USER
```

Importante: Ejecuta newgrp docker en la terminal (o reinicia la sesión de usuario) para recargar los grupos asignados antes de continuar.


6. Verificar la instalación:
Prueba de funcionamiento.

Confirma las versiones instaladas y ejecuta un contenedor de prueba:

```
docker --version
docker compose version
docker run hello-world
```



## Archivos config

docker-compose.yml
Ubicado en la raíz del proyecto (./docker-compose.yml)

##### Configura el contenedor de PostgreSQL para leer las variables del .env y persistir la información en un volumen nombrado:

```
services:
  postgres_db:
    image: postgres:15-alpine
    container_name: tasks_postgres_db
    restart: always
    environment:
      POSTGRES_USER: ${DB_USERNAME}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: ${DB_NAME}
    ports:
      - "${DB_PORT}:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```


Actualizar .gitignore:
Ubicado en la raíz del proyecto (./.gitignore).

Asegúrate de ignorar el archivo .env y los volúmenes o directorios temporales de datos para no subir credenciales
ni binarios de la base de datos al repositorio:

```
# Variables de entorno local
.env
.env.local
*.env

# Datos locales de Docker (en caso de usar bind mounts)
postgres_data/
```

### Intercalación de Variables: Docker Compose lee automáticamente el archivo .env ubicado en el mismo directorio e inyecta ${DB_USERNAME}, ${DB_PASSWORD}, ${DB_NAME} y ${DB_PORT} directamente en las variables de PostgreSQL.

### Mapeo de Puertos: Mapea el puerto 5432 interno del contenedor al puerto 5432 de tu máquina local, permitiendo que NestJS (que corre en el host) se conecte vía localhost:5432.

### Volumen Nombrado (postgres_data): Almacena los archivos del motor SQL en un volumen gestionado por Docker, preservando las tablas y datos entre reinicios del sistema o del contenedor.




## Docker

docker compose up -d


Software y DevOps:
Se utiliza para resolver problemas de aislamiento, consistencia y despliegue


### 1. Levantar infraestructura local en segundos (Sin ensuciar tu SO)

problema: Para trabajar con PostgreSQL, Redis, MongoDB o RabbitMQ normalmente tendrías que instalar binarios en tu sistema operativo, configurar servicios globales, gestionar usuarios y lidiar con archivos de configuración locales

Docker: Defines un servicio o ejecutas un comando y la base de datos queda corriendo aislada
#### Cuando terminas el proyecto, la borras y tu sistema operativo queda 100% limpio sin residuos ni procesos en segundo plano.


### 2. Eliminar el problema: en mi maquina funciona

problema: Un desarrollador usa macOS con Node.js v20, otro usa Windows con Node.js v18 y el servidor de producción corre Debian con Node.js v22
Esto causa errores impredecibles por diferencias de entorno.

Docker: Todo el equipo y el servidor de producción ejecutan exactamente el mismo contenedor
con las mismas versiones de sistema operativo base, lenguaje, librerías y dependencias


### 3. Empaquetar aplicaciones para Producción (Portabilidad)

Se construye una Imagen Docker que contiene tu código (ej. la API en NestJS)
junto con sus dependencias compiladas y el runtime de ejecucion

#### Esa imagen se puede mover a cualquier proveedor de la nube (AWS ECS, Google Cloud Run, DigitalOcean, un VPS propio o Kubernetes)
sin preocuparte por cómo está configurado el servidor subyacente.


### 4. Entornos aislados para Pruebas Automatizadas (CI/CD)

#### En herramientas de integración continua (como GitHub Actions o GitLab CI), se levanta un contenedor efímero con la base de datos y la app, se ejecutan las pruebas automáticas y el contenedor se destruye inmediatamente al finaliza


### 5. Orquestación de Arquitecturas Multiservicio (Docker Compose)

En aplicaciones modernas no trabajas con un solo servicio
#### Con Docker Compose defines en código (docker-compose.yml) todo el stack de la aplicación:

```
# Levanta la arquitectura completa con un solo comando
services:
  frontend:    # React / Next.js
  backend:     # NestJS API
  database:    # PostgreSQL
  cache:       # Redis
```

#### Un desarrollador nuevo solo clona el repositorio, ejecuta docker compose up -d y tiene todo el entorno del proyecto funcionando en minutos.




### Comandos esenciales


#### Gestión contenedores

1. docker run
Descarga (si no existe), crea e inicia un contenedor.
`docker run -d -p 5432:5432 postgres`

2. docker ps
Lista los contenedores activos (agrega -a para incluir detenidos).
`docker ps -a`

3. docker stop
Detiene de forma segura uno o varios contenedores en ejecución.
`docker stop tasks_postgres_db`

4. docker start
Vuelve a iniciar un contenedor previamente detenido.
`docker start tasks_postgres_db`

5. docker rm
Elimina un contenedor detenido (usa -f para forzar).
`docker rm tasks_postgres_db`

6. docker logs
Muestra la salida/logs generados por el contenedor (-f para tiempo real).
`docker logs -f tasks_postgres_db`

7. docker exec
Ejecuta un comando dentro de un contenedor en ejecución.
`docker exec -it tasks_postgres_db psql -U postgres`



#### Gestión de Imágenes

1. docker images
Muestra la lista de imágenes descargadas localmente.
`docker images`

2. docker pull
Descarga una imagen desde Docker Hub sin ejecutarla.
`docker pull postgres:15-alpine`

3. docker rmi
Elimina una imagen de la memoria local.
`docker rmi postgres:15-alpine`

4. docker build
Construye una imagen propia a partir de un archivo Dockerfile.
`docker build -t mi-api:v1 .`



#### Orquestación con Docker Compose

1. docker compose up
Construye, crea e inicia los servicios del docker-compose.yml.
`docker compose up -d`

2. docker compose down
Detiene y elimina contenedores y redes creados por Compose.
`docker compose down`

3. docker compose ps
Estado de los servicios declarados en la carpeta actual.
`docker compose ps`

4. docker compose logs
Muestra los logs de todos los servicios del proyecto (-f para seguimiento).
docker compose logs -f


#### Mantenimiento y Limpieza

`docker system prune`:
Elimina contenedores detenidos, redes no utilizadas e imágenes huérfanas liberando espacio en disco.

`docker volume ls`:
Lista los volúmenes de datos guardados en la máquina.




### docker run

herramienta multiusos
#### Permite desde ejecutar utilidades efímeras sin instalar nada en tu sistema operativo hasta desplegar bases de datos completas en segundo plano

1. Entornos de prueba e inspección interactiva (-it)

Puedes abrir una consola dentro de cualquier sistema operativo o entorno sin necesidad de configurar una máquina virtual.

```
# Entrar a una consola de Alpine Linux (una distro de solo 5 MB)
docker run -it --rm alpine sh

# Probar un comando en Ubuntu sin instalar nada en tu equipo
docker run -it --rm ubuntu bash
```

-i (Interactive): Mantiene abierta la entrada estándar (STDIN) para recibir tus comandos.

-t (TTY): Asigna una terminal virtual.

--rm: Borra automáticamente el contenedor al salir (mantiene tu disco limpio).


2. Servicios e infraestructura en segundo plano (-d y -p)
Levantar servidores web, bases de datos o motores de búsqueda en segundo plano mapeando puertos hacia tu máquina local

```
# Levantar un servidor Nginx accesible en http://localhost:8080
docker run -d -p 8080:80 --name mi_servidor_web nginx:alpine

# Levantar PostgreSQL en una sola línea de comando
docker run -d \
  --name mi_postgres \
  -p 5432:5432 \
  -e POSTGRES_PASSWORD=secret \
  -e POSTGRES_DB=mi_base \
  postgres:15-alpine
```

d (Detached): Ejecuta el contenedor en segundo plano y te devuelve el control de la consola.

-p host:contenedor: Conecta un puerto de tu máquina (localhost:8080) con el puerto interno del contenedor (80).

-e (Environment: Inyecta variables de entorno dentro del contenedor.


3. Herramientas efímeras de desarrollo (Montaje de volúmenes -v)

Ejecutar código usando cualquier lenguaje o versión sin tener el compilador o runtime instalado en tu sistema.

```
# Ejecutar un script de Python 3.11 usando los archivos de tu carpeta actual
docker run --rm -v $(pwd):/app -w /app python:3.11-alpine python mi_script.py

# Formatear o auditar un proyecto Node.js con una versión específica
docker run --rm -v $(pwd):/usr/src/app -w /usr/src/app node:20-alpine npm test
```

-v local:remoto: Monta una carpeta de tu sistema operativo dentro del contenedor ($(pwd) representa el directorio actual).

-w /ruta: Define el directorio de trabajo (working directory) dentro del contenedor.


4. Control de recursos de hardware

Puedes limitar cuántos recursos de tu procesador y memoria RAM puede consumir una aplicación

```
# Restringir un proceso para que no use más de 512 MB de RAM y 1 núcleo de CPU
docker run -d --memory="512m" --cpus="1.0" redis:alpine
```

Aunque docker run puede hacer todo esto con comandos largos, cuando necesitas conectar múltiples servicios (como NestJS + PostgreSQL)
##### resulta más cómodo declarar estas mismas banderas dentro de un archivo docker-compose.yml y ejecutar simplemente docker compose up -d.


-d,--detach
Ejecuta en segundo plano.

-it,--interactive --tty
Permite interactuar con la terminal del contenedor.

-p,--publish
Mapea puertos (puerto_host:puerto_contenedor).

-v,--volume
Comparte carpetas o persiste datos (ruta_host:ruta_contenedor).

-e,--env
Inyecta variables de entorno (CLAVE=VALOR).

--rm
Elimina el contenedor automáticamente al detenerse.

--name
Asigna un nombre personalizado al contenedor.






## Flujo desarrollo y docker

Se optimiza dividiendo las responsabilidades entre tu máquina local y Docker


Enfoque Estándar:

experiencia de desarrollo (DX) y velocidad de compilación

`Docker`: Las dependencias de infraestructura que no modificas seguido (PostgreSQL, Redis, RabbitMQ).
`Host (máquina local)`: La aplicación NestJS ejecutándose directamente con npm run start:dev (aprovechando el Hot Reload instantáneo de Node.js sin sobrecargar la capa de archivos de Docker).

1. Inicio

#### 1. Levantar PostgreSQL en segundo plano
docker compose up -d

#### 2. Iniciar NestJS en modo desarrollo en tu terminal local
npm run start:dev

##### Tu API se conecta inmediatamente a localhost:5432 porque Docker expone ese puerto hacia tu sistema


2. Inspección y depuración

##### escribes código, monitorear y consultar la base de datos de tres formas distintas:

Ver los logs del motor SQL

#### 1. Si una consulta de TypeORM falla o se comporta de forma inesperada:

`docker compose logs -f postgres_db`


#### 2. Acceder a la consola de PostgreSQL (psql)

verificar manualmen`te qué tablas o registros existen dentro del contenedor:

`docker exec -it tasks_postgres_db psql -U postgres -d tasks_db`

##### (Escribe \dt para listar tablas o SELECT * FROM tasks; para ver los datos).


#### 3. Usar clientes GUI locales (DBeaver, TablePlus, VS Code extension)

##### Como el puerto 5432 está mapeado en tu máquina
##### puedes conectar cualquier cliente gráfico usando localhost, puerto 5432, usuario postgres y la clave de tu .env.


3. Modificaciones en el Esquema o Entidades

Modificas tu entidad TypeScript en NestJS (task.entity.ts).

Al guardar, NestJS reinicia el servidor en milisegundos.

TypeORM (con synchronize: true en desarrollo) detecta el cambio e impacta la estructura de las tablas en el PostgreSQL de Docker automáticamente.


4. Fin

Cuando terminas de trabajar, liberas los recursos de tu procesador y memoria RAM:

Opción A: Detener los contenedores (Conserva los datos y la configuración lista)
`docker compose stop`

Opción B: Detener y eliminar los contenedores (Los datos persisten en el volumen `postgres_data`)
`docker compose down`

Ninguna de estas dos opciones borra tus datos
Al día siguiente, con ejecutar docker compose up -d, tus tablas y registros seguirán exactamente donde los dejaste.


Rs:

Inicio
`docker compose up -d`
Levanta la base de datos PostgreSQL.

Código continuo
`npm run start:dev`
Corre la API con recarga en vivo en NestJS.

Auditoría / Debug
`docker compose logs -f`
Revisa errores de la base de datos en tiempo real.

Fin
`docker compose stop`
Apaga los servicios y libera la memoria RAM.




## Practica db y docker


### 1. Validar la Persistencia del Volumen (Prueba de Fuego)

Demuestra que los datos no se pierden al destruir el contenedor.

Inserta una tarea enviando un POST desde NestJS o ejecutando una consulta en la base de datos.

Destruye el contenedor y su red:

docker compose down

Vuelve a levantar la infraestructura:

docker compose up -d

Consulta las tareas (SELECT * FROM task;). Como los datos residen en el volumen postgres_data de tu disco, la información estará intacta.



### 2. Configurar Healthcheck en docker-compose.yml

Un contenedor en estado Up solo significa que el proceso inició, no que PostgreSQL esté listo para aceptar conexiones. Un healthcheck le avisa al sistema el estado real de la base de datos.

Actualiza tu docker-compose.yml:

```
services:
  postgres_db:
    image: postgres:15-alpine
    container_name: tasks_postgres_db
    restart: always
    environment:
      POSTGRES_USER: ${DB_USERNAME}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: ${DB_NAME}
    ports:
      - "${DB_PORT}:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${DB_USERNAME} -d ${DB_NAME}"]
      interval: 5s
      timeout: 5s
      retries: 5
    volumes:
      postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

Prueba: Al ejecutar docker compose ps, verás el estado (healthy) una vez que PostgreSQL acepte conexiones.



### 3. Inspección Directa desde la Consola (psql)

Aprende a consultar la base de datos sin necesidad de instalar programas externos.

```
# 1. Entrar a la consola SQL del contenedor
docker exec -it tasks_postgres_db psql -U postgres -d tasks_db

# 2. Comandos útiles dentro de psql:
\dt                   -- Listar todas las tablas
\d task               -- Ver la estructura/columnas de la tabla 'task'
SELECT * FROM task;   -- Consultar todos los registros
\q                    -- Salir de la CLI de PostgreSQL
```



### 4. Activar el Logging de SQL en TypeORM

Para entender qué consultas está generando TypeORM por detrás y optimizar el rendimiento, activa el registrador de consultas en tu app.module.ts:

```
TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_NAME'),
    autoLoadEntities: true,
    synchronize: true,
    logging: ['query', 'error'], // <-- Muestra el SQL traducido en la terminal de NestJS
  }),
});
```

Cada vez que ejecutes un método del repositorio (this.taskRepository.find()), verás el SELECT ... FROM task traducido en tu consola.



### 5. Sembrado de Datos Iniciales (Init Scripts)

PostgreSQL en Docker permite ejecutar scripts .sql automáticamente la primera vez que se crea el volumen
Útil para poblar la base de datos con roles, categorías o datos de prueba

En tu docker-compose.yml, mapea un archivo o carpeta en /docker-entrypoint-initdb.d/:

```
volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql:ro
```

init.sql:

```
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

INSERT INTO categories (name) VALUES ('Backend'), ('Infraestructura');
```



## Práctica: 1. Validar la Persistencia del Volumen (Prueba de Fuego)

comprobar que la capa de almacenamiento de Docker (postgres_data) mantiene tus datos a salvo tras destruir el contenedor

1. Insertar datos de prueba en PostgreSQL
Crear tabla y registro iniciales

Ejecuta una sentencia SQL directamente dentro del contenedor sin necesidad de abrir una sesión interactiva:

`docker exec -it tasks_postgres_db psql -U postgres -d tasks_db -c "CREATE TABLE IF NOT EXISTS test_persistence (id SERIAL PRIMARY KEY, mensaje TEXT); INSERT INTO test_persistence (mensaje) VALUES ('Prueba de fuego exitosa');"`


2. Verificar la inserción de los datos
Confirmar la existencia de la fila

Consulta el contenido de la tabla recién creada:

`docker exec -it tasks_postgres_db psql -U postgres -d tasks_db -c "SELECT * FROM test_persistence;"`

Debe devolver la fila con id: 1 y el texto 'Prueba de fuego exitosa'.


3. Destruir la infraestructura con docker compose down
Elimina el contenedor y la red, pero NO los volúmenes

Detén y elimina el contenedor de PostgreSQL:

```
docker compose down
```

Comprueba que el contenedor ya no existe ejecutando docker ps -a
(la lista estará vacía o no mostrará a tasks_postgres_db).


4. Volver a levantar el servicio
Se creará un contenedor nuevo conectado al volumen existente

Recrea el contenedor de la base de datos:

`docker compose up -d`
 

5. Consultar la tabla en el nuevo contenedor
Validación final de la persistencia

Vuelve a lanzar la consulta SQL sobre el nuevo contenedor:

`docker exec -it tasks_postgres_db psql -U postgres -d tasks_db -c "SELECT * FROM test_persistence;"`

 
#### Al ejecutar docker compose down, Docker destruye la instancia del contenedor
#### pero conserva la carpeta física montada en /var/lib/postgresql/data dentro del volumen nombrado postgres_data
##### Cuando docker compose up -d arranca la nueva instancia, PostgreSQL detecta que la base de datos ya está inicializada en ese directorio y la monta inmediatamente con todos tus registros intactos

#### Si en algún momento deseas borrar también la base de datos y empezar desde cero
##### Si en algún momento deseas borrar también la base de datos y empezar desde cero



### Formas de consulta

#### 1. Código principal


1. NestJS + TypeORM

sin comandos sql directos

#### 1. defines la estructura de la tabla en una clase TypeScript (Entity),
#### 2. el controlador de NestJS expone un endpoint (POST /tasks),
#### 3. TypeORM traduce todo a consultas SQL por debajo

2. Enviar datos

Envías datos a través de la API:
Usas un cliente HTTP (como Postman, Insomnia, o curl)
para enviar un JSON a tu servidor NestJS.

```
POST http://localhost:3000/tasks
{ "title": "Aprender Docker" }
```

3. NestJS lo procesa:
##### 1. El controlador recibe la petición
##### 2. se la pasa al servicio, y usa el TaskRepository de TypeORM para hacer un .save().



#### 2. Consultas Directas (Consola o GUI)

Escribir SQL directamente dentro del contenedor (con docker exec... psql)
o usando un programa gráfico
##### es una tarea de auditoría y depuración, no de desarrollo principal.

#### Motivos/momento:

Verificar que TypeORM hizo su trabajo: Enviaste un POST a NestJS y quieres ver si la columna title se guardó correctamente.

Depurar errores: Tu aplicación falla al leer datos y quieres hacer un SELECT * FROM task manual para ver qué datos extraños hay guardados.

Configuración inicial: Modificar permisos de base de datos o revisar la estructura generada por el synchronize: true de TypeORM.



### Usando curl para la nueva arquitectura 

1. Crear una tarea (POST)
Inserta un nuevo registro a través de NestJS hacia PostgreSQL

```
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Validar integración de Docker", "description": "Prueba de la API NestJS con TypeORM y PostgreSQL"}'
```

2. Listar todas las tareas (GET)
Recupera el listado completo de registros guardados

```
curl -X GET http://localhost:3000/tasks
```

3. Obtener una tarea por ID (GET)
Consulta un registro específico usando su ID

```
curl -X GET http://localhost:3000/tasks/1
```

4. Actualizar una tarea (PATCH / PUT)
Actualiza propiedades específicas del objeto

```
curl -X PATCH http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Validar integración de Docker (Completada)"}'
```

5. Eliminar una tarea (DELETE)
Elimina el registro físicamente de la base de datos

```
curl -X DELETE http://localhost:3000/tasks/1
```


### Verificación comandos sql puros

Una vez enviado el POST con curl:

1. #### Revisa la consola de NestJS: Si activaste logging: ['query'] en TypeORM, verás la sentencia SQL emitida:

```
query: INSERT INTO "task"("title", "description") VALUES ($1, $2) RETURNING "id"
```


2. Audita directamente en PostgreSQL: Puedes confirmar la fila guardada abriendo la CLI del contenedor:

```
docker exec -it tasks_postgres_db psql -U postgres -d tasks_db -c "SELECT * FROM task;"
```



#### Herramientas gráficas

1. Verificación visual del esquema (Entidades y Relaciones)

#### Cuando creas o modificas entidades complejas en TypeORM (relaciones 1:N, N:M o llaves foráneas):

Abres DBeaver para confirmar que TypeORM creó correctamente las tablas, los nombres de columnas, las restricciones de unicidad (UNIQUE) y las llaves foráneas (FOREIGN KEY
Genera Diagramas Entidad-Relación (ERD) automáticos con un clic, permitiéndote ver de forma gráfica cómo están conectadas las tablas de tu sistema.


2. Creación y edición rápida de datos de prueba (Mocking)

probar un caso de borde en tu API (por ejemplo, qué pasa si una tarea tiene un título de 500 caracteres o un estado nulo):

En lugar de redactar un JSON gigante para un curl o Postman, entras al GUI, editas el valor directamente en la celda como si fuera una hoja de cálculo (Excel) y guardas el cambio (Ctrl + S).


3. Prototipado y optimización de consultas complejas

Cuando necesitas realizar un reporte, una agregación con GROUP BY, o una búsqueda con múltiples filtros y paginación

#### Es mucho más rápido escribir y pulir la consulta SQL cruda directamente en la consola SQL del GUI
##### Una vez que la consulta devuelve exactamente los datos que necesitas y responde rápido
##### la traduces al QueryBuilder o repositorio de TypeORM en NestJS.

#### Análisis de rendimiento: Permite ejecutar EXPLAIN ANALYZE sobre consultas lentas para diagnosticar si faltan índices en columnas frecuentemente consultadas


4. Control y auditoría de Migraciones

#### En proyectos reales donde synchronize: false está desactivado (obligatorio en entornos de staging/producción):

#### Revisas la tabla especial de migraciones (typeorm_migrations) para verificar qué scripts SQL ya se han ejecutado
cuáles están pendientes o si hubo un fallo al aplicar un cambio de estructura.


5. Diagnóstico en entornos Remotos (Staging / Producción)

Cuando la aplicación está desplegada en un servidor en la nube (AWS, DigitalOcean, Hetzner) y surge un error que no ocurre en tu máquina local:

#### Configuras un túnel SSH en DBeaver para conectarte de forma segura a la base de datos remota e inspeccionar los datos reales sin necesidad de exponer el puerto de PostgreSQL a todo internet


### No usar GUI:  No edites la estructura manualmente en desarrollo, No insertes datos de negocio en producción a mano

Si agregas una columna a mano en DBeaver pero no actualizas tu entidad en NestJS (o no creas la migración), tu código quedará desincronizado con la base de datos.

#### Cualquier inserción de datos debe pasar por la API o scripts de sembrado (seeds) para garantizar que se apliquen las validaciones de negocio.




## Acciones del usuario y Consultas

#### Cada interacción que un usuario realiza en una aplicación web o móvil —desde un clic hasta enviar un formulario— se traduce en el backend en un patrón de consulta específico hacia la base de datos


### 1. CRUD: Oper básicas

cuatro pilares fundamentales que responden a la gestión directa de datos:

#### A. Registro y Creación (CREATE)

##### Acción del usuario: Crear una cuenta, publicar una nueva tarea, subir un comentario o hacer una publicación

Operación en código: Se toman los datos validados del DTO y se inserta un nuevo registro

```
INSERT INTO task (title, description, user_id) VALUES ('Comprar pan', 'De masa madre', 1);

await this.taskRepository.save(createTaskDto);
```

##### INSERT INTO/save(createdto)



#### B. Visualización e Inspección (READ)

##### Acción del usuario: Abrir su perfil, ver el detalle de un producto o cargar el feed principal.

##### Se consulta la base de datos por un identificador único (ID, slug, UUID) o por un conjunto de registros pertenecientes al usuario activo.


```
SELECT * FROM task WHERE id = 1 AND user_id = 12;

await this.taskRepository.findOne({ where: { id, userId } });
```

##### SELECT * FROM / findOne()



#### C. Edición y Modificación (UPDATE)

##### Cambiar su foto de perfil, marcar una tarea como completada o modificar la dirección de envío

##### Se actualizan únicamente los campos que han cambiado (Partial Update).

```
UPDATE task SET is_completed = true WHERE id = 1;
```

```
await this.taskRepository.update(id, { isCompleted: true });
```


#### D. Eliminación Directa o Archivado (DELETE / SOFT DELETE)

##### Borrar una tarea o dar de baja una publicación.

Hard Delete: Elimina la fila físicamente de la base de datos.

Soft Delete (Práctica recomendada): Marca una columna deleted_at con la fecha actual para mantener histórico y permitir recuperación.

```
-- Soft Delete
UPDATE task SET deleted_at = NOW() WHERE id = 1;

await this.taskRepository.softDelete(id);

```

##### UPDATE task SET / softDelete(id)



### 2. Patrones Complejos e Imprescindibles
 
Las aplicaciones reales requieren lógica más avanzada para responder a comportamientos habituales de navegación y seguridad

#### A. Autenticación e Inicio de Sesión (Login)

##### Acción del usuario: Ingresar su correo y contraseña en el formulario de acceso.

##### No se busca por contraseña (ya que está encriptada con hash). Se busca al usuario por su email para obtener su hash guardado y compararlo en memoria.

```
SELECT id, email, password_hash FROM users WHERE email = 'usuario@email.com';
``` 

```
const user = await this.userRepository.findOne({ 
  where: { email }, 
  select: ['id', 'email', 'passwordHash'] 
});
```

##### SELECT id / findOne(where email, select [id, email, passwhash])




#### B. Búsqueda y Filtrado Dinámico

##### Acción del usuario: Escribir en la barra de búsqueda ("Docker") y filtrar resultados por categoría ("Backend") o estado ("Pendiente").

##### Se construye una consulta condicional (QueryBuilder) agregando cláusulas WHERE y coincidencias parciales con ILIKE (en PostgreSQL).

```
SELECT * FROM task 
WHERE title ILIKE '%Docker%' 
  AND status = 'pending' 
ORDER BY created_at DESC;
```

```
await this.taskRepository.createQueryBuilder('task')
  .where('task.title ILIKE :search', { search: `%${search}%` })
  .andWhere('task.status = :status', { status })
  .getMany();
```    



#### C. Paginación y Carga Progresiva (Scroll Infinito)

##### Acción del usuario: Ir a la "Página 2" de resultados o hacer scroll en una lista con miles de elementos.

##### Operación en código: Se limita el número de resultados devueltos para evitar saturar la memoria del servidor y la base de datos.

```
SELECT * FROM task LIMIT 10 OFFSET 10; -- Página 2 (10 elementos por página)
```

```
await this.taskRepository.find({
  take: 10, // LIMIT
  skip: 10, // OFFSET
});
```


#### D. Operaciones Transaccionales (ACID)

##### Acción del usuario: Realizar una compra (se descuenta el dinero del saldo, se resta 1 unidad del stock de la tienda y se genera un recibo).

##### Operación en código: Si cualquiera de los 3 pasos falla, la operación completa debe cancelarse (Rollback). Todo debe ocurrir dentro de una transacción.

```
BEGIN;
UPDATE user_wallet SET balance = balance - 100 WHERE id = 1;
UPDATE product SET stock = stock - 1 WHERE id = 5;
INSERT INTO orders (user_id, product_id, amount) VALUES (1, 5, 100);
COMMIT;
```


Rs:

Acción del Usuario,Operación SQL Traducida,Método TypeORM Habitual

### 1. Crear cuenta / Contenido: INSERT INTO / .save() / .insert()

### 2. Ver un detalle / Perfil: SELECT ... WHERE id = x / .findOne()

### 3. Buscar / Filtrar catálogo: SELECT ... WHERE x ILIKE  / .createQueryBuilder()

### 4. Navegar por páginas: SELECT ... LIMIT x OFFSET  / ".find({ take, skip })"

### 5. Editar información: UPDATE ... SET / .update() / .save()

### 6. Borrar elemento: UPDATE ... SET deleted_at = NOW() / .softDelete()

### 7. Pago / Procesamiento crítico: BEGIN ... COMMIT / .transaction()




## Arquitectura y consultas

Cada pieza de lógica y consulta tiene un lugar de responsabilidad única (Principio Single Responsibility de SOLID).

```
[ Cliente / Frontend ]
          │
          ▼
┌────────────────────────────────────────────────────────┐
│ 1. Controlador (Presentation / Interface Layer)        │
│    - Recibe HTTP (GET, POST, etc.)                     │
│    - Valida DTOs de entrada                            │
└─────────────────────────┬──────────────────────────────┘
                          │
                          ▼
┌────────────────────────────────────────────────────────┐
│ 2. Servicio / Caso de Uso (Application / Domain Layer) │
│    - Aplica Reglas de Negocio                          │
│    - Maneja Transacciones                              │
└─────────────────────────┬──────────────────────────────┘
                          │
                          ▼
┌────────────────────────────────────────────────────────┐
│ 3. Repositorio / Acceso a Datos (Infrastructure)       │
│    - Consultas SQL / TypeORM                           │
│    - Paginación, Filtros, QueryBuilder                 │
└─────────────────────────┬──────────────────────────────┘
                          │
                          ▼
                  [ PostgreSQL ]

```


Capa / Ubicación,¿Qué hace?,¿Qué consultas o lógica van aquí?

1. Controlador (.controller.ts):
"Interfaz HTTP. Recibe parámetros y devuelve respuestas en código de estado (200, 201, 400, 404)."
"Ninguna consulta SQL. Solo extrae los Query Params (?page=2&search=docker) o el @Body(), aplica validación con DTOs y se los pasa al Servicio."

2. Servicio (.service.ts):
Reglas de Negocio y Orquestación. Define qué debe pasar y en qué orden.
"Transacciones y Lógica de Negocio. Decide si un usuario tiene saldo suficiente, verifica contraseñas, calcula límites y coordina llamadas a múltiples repositorios."

3. Repositorio / Data Access (.repository.ts / TypeORM):
Abstracción de la Base de Datos. Es la única capa que sabe que PostgreSQL existe.
"Consultas SQL directas o QueryBuilder. Paginación (take, skip), filtros parciales (ILIKE), uniones (JOIN), ordenamiento y llamadas directas a la base de datos (.find(), .save(), .softDelete())."

4. Entidad (.entity.ts):
Modelo del Dominio. Representa la estructura de la tabla y sus restricciones.
"Estructura y relaciones. Mapea columnas, tipos de datos, claves primarias, claves foráneas (@ManyToOne) y marcas de borrado lógico (@DeleteDateColumn)."



Ej: Búsqueda con Paginación
viaja la petición cuando el usuario busca "Docker" en la página 2:

### 1. El Controlador extrae y valida los parámetros de la URL

```
// task.controller.ts
@Get()
findAll(@Query() filterDto: FilterTasksDto) {
  // Solo recibe los datos HTTP y delega la ejecución al servicio
  return this.taskService.getTasks(filterDto);
}
```

### 2. El Servicio aplica las reglas de negocio: Calcula la paginación (skip) y orquesta la llamada al repositorio:

```
// task.service.ts
async getTasks(filterDto: FilterTasksDto) {
  const { page = 1, limit = 10, search } = filterDto;
  const skip = (page - 1) * limit; // Regla de cálculo de paginación

  // Delega la ejecución de la consulta al repositorio
  return this.taskRepository.findWithFilters({ search, skip, limit });
}
```


### 3. Repositorio ejecuta la consulta en PostgreSQL: Construye la consulta traducida a SQL mediante TypeORM:

```
// task.repository.ts (o método dentro del servicio usando el Repository inyectado)
async findWithFilters({ search, skip, limit }) {
  const query = this.createQueryBuilder('task');

  if (search) {
    query.where('task.title ILIKE :search', { search: `%${search}%` });
  }

  query.skip(skip).take(limit).orderBy('task.createdAt', 'DESC');

  const [data, total] = await query.getManyAndCount();

  return {
    data,
    total,
    page: Math.floor(skip / limit) + 1,
    lastPage: Math.ceil(total / limit),
  };
}
```


Ej: Autenticación (Login)

Controlador: Recibe email/password.

Servicio de Auth: Busca al usuario, compara el hash con bcrypt y firma el token JWT.

Repositorio: Ejecuta el findOne({ where: { email } }).


Ej: Transacción Financiera / Proceso Crítico:

Servicio: Inicia dataSource.transaction() y coordina las operaciones. Si algo falla dentro del servicio, hace rollback.

Repositorio: Ejecuta las operaciones dentro de la transacción recibida.


Ej: Soft Delete (Borrado Lógico):

Entidad: Contiene la columna @DeleteDateColumn().

Servicio: Ejecuta this.taskRepository.softDelete(id). TypeORM automáticamente transforma un DELETE en un UPDATE task SET deletedAt = NOW().



## Consultas y Capa Repo/infra

#### Ninguna línea de SQL, QueryBuilder o consulta a la base de datos debe vivir fuera de la capa Repository (Capa de Acceso a Datos / Infraestructura).


Consultas en el Repository

1. Aislamiento de la Infraestructura (Desacoplamiento)
##### Al servicio (Service) no le importa si estás usando PostgreSQL, MongoDB, TypeORM o SQL puro
El servicio solo dice: "Necesito las tareas de este usuario"
El repositorio sabe cómo ir a buscar esas tareas a la base de datos y devolvérselas.

2. Testing
Cuando pruebas la lógica de negocio de tu TaskService, no necesitas levantar una base de datos real
Como las consultas están aisladas en el repositorio, puedes reemplazar (mockear) el repositorio en tus tests por datos falsos en memoria de forma inmediata.

3. Reutilización y Mantenimiento
Si una consulta compleja (por ejemplo, calcular el total de ventas mensuales con impuestos)
se utiliza en 3 servicios diferentes
la escribes una sola vez en el repositorio
Si la tabla cambia de estructura en el futuro, solo corriges esa consulta en el repositorio y el resto de tu aplicación sigue funcionando sin enterarse del cambio



## Arquitectura pequeña/media vs Grande


### pequeña/media: Repositorio Inyectado Directo en service.ts

#### Inyectas el Repository<Task> genérico de TypeORM en tu servicio
##### Las consultas estándar (find, findOne, save) o pequeños QueryBuilder viven en los métodos del servicio o en funciones helper del módulo.

```
// task.service.ts
@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>, // Inyección de la capa repositorio
  ) {}

  async getCompletedTasks(userId: number) {
    // La consulta exacta es responsabilidad del método del repositorio
    return this.taskRepository.find({
      where: { userId, isCompleted: true },
      order: { createdAt: 'DESC' },
    });
  }
}
```


### grande: Crear un Repositorio Personalizado en repository.ts

##### Creas una clase dedicada exclusivamente a contener la lógica de consultas complejas para no sobrecargar el archivo del servicio

```
// task.repository.ts
@Injectable()
export class TaskRepository extends Repository<Task> {
  constructor(private dataSource: DataSource) {
    super(Task, dataSource.createEntityManager());
  }

  // La consulta SQL / QueryBuilder compleja vive exclusivamente AQUÍ
  async findTasksWithFilters(search?: string, skip = 0, limit = 10) {
    const query = this.createQueryBuilder('task');

    if (search) {
      query.where('task.title ILIKE :search', { search: `%${search}%` });
    }

    return query.skip(skip).take(limit).getManyAndCount();
  }
}
```

Luego: task.service.ts queda enfocado solo en el negocio:

```
// task.service.ts
@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async getTasks(dto: FilterTasksDto) {
    // El servicio solo coordina, no sabe escribir la consulta
    const [data, total] = await this.taskRepository.findTasksWithFilters(
      dto.search,
      dto.skip,
      dto.limit,
    );

    return { data, total };
  }
}
```




## Transacciones y Service layer

#### Una transacción representa la frontera de un Caso de Uso o Regla de Negocio (Unit of Work),
no una simple operación de almacenamiento.

##### Mientras que el Repositorio solo sabe cómo manipular una entidad concreta (ej. Task, User, Order)
##### el Servicio es el orquestador que conoce el flujo completo de la aplicación.

1. Orquestación Multi-Entidad y Multi-Repositorio

#### Una transacción en el mundo real casi nunca involucra una sola tabla
Ej: Procesar una Compra

Descontar el saldo del usuario (UserRepository).
Reducir el stock del producto (ProductRepository).
Crear el registro de la orden (OrderRepository).
Generar la factura en el historial (InvoiceRepository).

##### Si la lógica de la transacción viviera dentro de OrderRepository, este tendría que importar e invocar a UserRepository, ProductRepository e InvoiceRepository
##### Esto destruiría el principio de responsabilidad única y acoplaría los repositorios entre sí.

#### El Servicio es el único punto de la arquitectura que tiene visibilidad sobre todos los repositorios involucrados.


2. Las Reglas de Negocio determinan cuándo se hace Rollback

#### Un ROLLBACK (cancelación de la transacción) no solo ocurre por un fallo técnico de la base de datos (como una restricción de clave duplicada).
##### !!! Muchas veces ocurre por una regla de negocio que solo el Servicio conoce:

```
// order.service.ts
await this.dataSource.transaction(async (manager) => {
  // 1. Operación de BD en Repositorio A
  const user = await manager.findOne(User, { where: { id: userId } });

  // 2. REGLA DE NEGOCIO (Evaluada por el Servicio)
  if (user.balance < totalAmount) {
    // Lanza una excepción de negocio -> Dispara el ROLLBACK automático
    throw new BadRequestException('Saldo insuficiente para completar la compra');
  }

  // 3. Operación externa (ej. Llamada a API de pagos)
  const paymentOk = await this.paymentGateway.charge(user, totalAmount);
  if (!paymentOk) {
    throw new ServiceUnavailableException('El proveedor de pagos no respondió');
  }

  // 4. Operación de BD en Repositorio B
  await manager.save(Order, newOrder);
});
```

##### El repositorio no sabe si el usuario tiene saldo o si la pasarela de pagos falló, solo sabe guardar o buscar

#### Solo la capa de Servicio tiene el contexto para decidir si todo debe confirmarse (COMMIT) o abortarse (ROLLBACK).


3. La Transacción es el "Contrato de Todo o Nada" del Caso de Uso

Clean Architecture / DDD (Domain-Driven Design)
#### el servicio de aplicación expone casos de uso atómicos
#### El caso de uso es la garantía de integridad: "O la operación se completa al 100%,
o el sistema queda exactamente como si nunca hubiera pasado nada



Controlador
Recibe la petición HTTP y devuelve la respuesta al usuario.

Servicio
"Define los límites de la transacción
Inicia la transacción, evalúa condiciones de negocio y decide si hay Commit o Rollback."

Repositorio
Ejecuta las consultas dentro de la transacción.
Recibe el contexto transaccional (EntityManager o QueryRunner)
y ejecuta el SQL correspondiente.


### Servicio y el Repositorio durante la transacción

El Servicio gobierna el ciclo de vida de la transacción
delega la ejecución del SQL al Repositorio pasándole el gestor transaccional

```
// task.service.ts
async completeTaskWorkflow(taskId: number, userId: number) {
  // El servicio abre el hilo transaccional
  return this.dataSource.transaction(async (transactionalEntityManager) => {

    // Le pasa el gestor de la transacción al trabajo con repositorios
    await this.taskRepository.markAsCompleted(taskId, transactionalEntityManager);
    await this.userLogRepository.addLog(userId, 'Tarea completada', transactionalEntityManager);

  }); // Si la función termina sin errores, se ejecuta el COMMIT automáticamente
}
```



## Transacciones esenciales

#### Una transacción no es solo una compra con tarjeta; es cualquier acción del usuario que requiere modificar múltiples tablas o recursos al mismo tiempo bajo la regla del "todo o nada" (Atomicidad).
#### Si algún paso intermedio falla, el sistema debe deshacer los cambios previos (rollback) para evitar dejar la base de datos en un estado inconsistente o corrupto

1. Compras y Checkout (E-Commerce)

Acción del usuario: Hacer clic en "Confirmar y pagar pedido".

Operaciones internas en la transacción:

Verificar y descontar el stock del producto (Product.stock - 1).
Procesar el cobro o descontar el saldo de la billetera del usuario.
Crear el registro de la orden (Order) con sus ítems (OrderItem).
Vaciar el carrito de compras del usuario (CartItem).

falla sin transacción:
cobras el dinero al usuario, pero la orden no se crea o el producto se queda sin stock disponible


2. Transferencias de Dinero y Puntos (Fintech / Gamificación)

Acción del usuario: "Enviar $50 a Juan" o "Canjear 500 puntos por una recompensa".

Operaciones internas en la transacción:

Restar el monto al emisor (UPDATE wallet SET balance = balance - 50 WHERE id = origen).
Sumar el monto al receptor (UPDATE wallet SET balance = balance + 50 WHERE id = destino).
Generar el registro inmutable en el historial de transacciones (AuditLog / TransactionHistory

falla sin transacción:
El dinero o los puntos desaparecen de la cuenta del emisor pero nunca llegan a la cuenta del receptor


3. Reserva de Entradas o Alojamientos (Ticketing / Booking)

Acción del usuario: "Seleccionar asiento 14B y reservar".

Operaciones internas en la transacción:

Verificar que el estado del asiento sea disponible.
Cambiar el estado a bloqueado_temporalmente fijando un temporizador de 10 minutos.
Asignar la reserva previa al user_id del comprador
    
falla sin transacción: Overbooking
Dos usuarios haciendo clic en la misma fracción de segundo terminan comprando la misma entrada o la misma habitación de hotel


4. Registro Completo de Usuario (Onboarding)

Acción del usuario: Enviar el formulario de "Crear Cuenta".

Operaciones internas en la transacción:
Insertar las credenciales básicas en la tabla principal (User).
Crear la fila de detalles en la tabla de perfil (UserProfile).
Asignar los permisos por defecto en la tabla pivote de roles (UserRole).
Insertar el token de verificación de email en la tabla de tokens (EmailVerification).
        
falla sin transacción:
Creas una fila en User, pero si falla la creación del perfil o los roles, la app arrojará errores de pantalla blanca (null pointer / undefined) cada vez que ese usuario intente iniciar sesión


5. Baja de Cuenta o Eliminación de Datos (GDPR / Privacy)

Acción del usuario: "Eliminar mi cuenta definitivamente".

Operaciones internas en la transacción:

Revocar y destruir todas las sesiones y tokens de acceso activos (UserSession).
Cancelar o pausar suscripciones recurrentes activas (Subscription).
Anonimizar o aplicar borrado lógico (softDelete) en la entidad User y sus datos personales relacionados

falla sin transacción:
El usuario queda marcado como "borrado" en la app
pero el sistema le sigue cobrando la suscripción mensual en la pasarela de pagos.


## Necesidad de una transacción

Pregunta durante el diseño de la función en la capa de Servicio:

### "Si el servidor o la base de datos se apagan a la mitad de la ejecución de esta función
##### ¿la base de datos queda corrupta o incompleta?"

### Si la respuesta es Sí $\rightarrow$ Debe encapsularse obligatoriamente dentro de dataSource.transaction() o un QueryRunner.

### Si la respuesta es No (ej. solo lees un perfil o actualizas un solo campo aislado) $\rightarrow$ Basta con una consulta directa del repositorio.




## Flujo comandos docker

en home:

sudo usermod -aG docker $USER

newgrp docker


en proj:

docker compose up -d

npm run start:dev




# Continuar Desarrollo


1. Módulo de Usuarios y Autenticación (Auth & Security)

Implementar las entidades User y AuthModule, encriptación de contraseñas con bcrypt
generación de Tokens JWT y resguardo de rutas mediante Guards (JwtAuthGuard).

Actualmente, cualquier usuario no identificado puede crear o listar tareas
#### En el mundo real, los recursos están protegidos y pertenecen a un sujeto
Agregar autenticación te permite asegurar la API, extraer el userId desde el token JWT y aplicar el principio de aislamiento de datos por usuario


2. Relaciones entre Entidades (User -> Task -> Category)

Modelar relaciones en TypeORM usando @ManyToOne y @ManyToMany
(ej. Un usuario tiene muchas tareas 1:N; una tarea pertenece a varias categorías N:M).

Dominio del diseño de bases de datos relacionales
restricciones de llaves foráneas (FOREIGN KEY), carga diferida/ansiosa (relations: ['user', 'categories'])
e integridad referencial en la capa de persistencia.


3. Paginación Global, Filtros Dinámicos y Soft Delete

Crear un DTO genérico de paginación (limit, page) y respuestas estructuradas ({ data, total, page, lastPage }).
Implementar borrado lógico (Soft Delete) en la entidad Task mediante @DeleteDateColumn

#### Retornar miles de registros en un GET /tasks colapsaría la memoria de Node.js y la base de datos
##### la paginación es obligatoria para la escalabilidad.

#### Integridad de Datos: En sistemas comerciales reales nunca se borran filas físicamente (DELETE)
##### se archivan para auditorías y recuperación ante errores.


4. Migraciones de Base de Datos (Sustituir synchronize: true)

#### Configurar el CLI de TypeORM para generar y ejecutar archivos de migración SQL (typeorm migration:generate / run) y desactivar synchronize: true.
La opción synchronize: true es ideal para arrancar, pero peligrosa en producción porque puede alterar o borrar columnas con datos reales
##### Las migraciones proporcionan control de versiones declarativo e inmutable del esquema de la base de datos


5. Documentación Interactiva con OpenAPI / Swagger

#### Integrar @nestjs/swagger y decorar los DTOs y Controladores para generar una interfaz UI en http://localhost:3000/api/v1/docs.
##### Permite a desarrolladores Frontend o clientes probar la API sin necesidad de importar colecciones manuales de Postman o redactar comandos curl
indispensable para cualquier backend.


6. Estrategia de Testing (Unitarias y E2E)

Pruebas Unitarias: Testear la lógica de negocio en TaskService aislando el repositorio con Mocks (Jest).
Pruebas End-to-End (E2E): Probar el flujo completo HTTP $\rightarrow$ DB con Supertest.

#### Garantiza que la API no sufra regresiones (fallos inesperados) al agregar nuevas funcionalidades
valida la arquitectura limpia al permitir probar capas de forma independiente.





# 1. Módulo de Usuarios y Autenticación (Auth & Security)

Implementar las entidades User y AuthModule, encriptación de contraseñas con bcrypt
generación de Tokens JWT y resguardo de rutas mediante Guards (JwtAuthGuard).

Actualmente, cualquier usuario no identificado puede crear o listar tareas
#### En el mundo real, los recursos están protegidos y pertenecen a un sujeto
Agregar autenticación te permite asegurar la API, extraer el userId desde el token JWT y aplicar el principio de aislamiento de datos por usuario


1. Instalación de dependencias de seguridad y JWT

2. Entidad User y DTOs de usuario.

3. Módulo y Servicio de Usuarios (UsersModule).

4. Módulo de Autenticación (AuthModule), hashing con bcrypt y generación de JWT.

5. Estrategia y Guard de JWT (JwtStrategy y JwtAuthGuard) para proteger rutas.



## 1. Instalación de dependencias de seguridad y JWT

librerías estándar para el manejo de tokens JWT
integración con Passport.js y encriptación de contraseñas

```
npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt
npm install -D @types/passport-jwt @types/bcrypt
```

bcrypt: Algoritmo seguro para encriptar (hash) y comparar contraseñas.

nestjs/jwt & passport-jwt: Módulo oficial de NestJS para firmar, verificar y decodificar tokens JWT.

@nestjs/passport & passport: Middleware estándar de autenticación en la comunidad de Node.js.

@types/...: Tipados TypeScript para autocompletado y validación en tiempo de compilación.


Variables de Entorno Adicionales

configurar la clave secreta y el tiempo de expiración de los tokens

```
# Configuración JWT
JWT_SECRET=tu_clave_secreta_super_segura_desarrollo_123!
JWT_EXPIRES_IN=1d
```

actualiza tu app.module.ts dentro del esquema de validación de Joi para exigir JWT_SECRET

```
JWT_SECRET: Joi.string().required(),
JWT_EXPIRES_IN: Joi.string().default('1d'),
```


#### JWT_SECRET es la clave criptográfica que tu servidor utiliza para firmar y validar los tokens
#### Si alguien descubre este valor en producción, podrá falsificar cualquier token JWT
#### suplantar la identidad de cualquier usuario (incluyendo administradores) sin conocer sus contraseñas

Desarrollo (development)
Archivo .env local
"Valor legible, compartido en .env.example para que el equipo clone y levante rápido."
dev_secret_key_123

Pruebas (test / Jest)
Definido en código de test o .env.test
Valor fijo y predecible para pruebas unitarias/E2E deterministas.
super_secret_test_key

Producción / Staging
Inyectado por el sistema de despliegue
"Cadena de alta entropía (mínimo 256 bits / 32 bytes) jamás guardada en Git."
8f9a2b... (64 caracteres aleatorios)



### Generar un JWT_SECRET Seguro para Producción

En producción nunca debes usar palabras del diccionario o frases inventadas a mano
##### Genera cadenas aleatorias criptográficamente seguras con la terminal:

```
# Opción 1: Usando OpenSSL
openssl rand -base64 64

# Opción 2: Usando Node.js directamente
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Cualquiera de los dos comandos te entregará un hash seguro de alta entropía.


### Reglas para la arquitectura

1. .env en .gitignore:
archivo .env local nunca se sube al repositorio
Sube únicamente un archivo .env.example con valores ficticios:

```
# .env.example
JWT_SECRET=cambiar_este_valor_en_produccion
JWT_EXPIRES_IN=1d
```

2. Validación en AppModule con Joi:

prevenir sorpresas en producción
#### configurar Joi para que no permita arrancar la aplicación si el secreto es demasiado corto o débil en entornos no locales

3. Inyección en Servidores / Contenedores (CI/CD):
En entornos reales (Docker Swarm, Kubernetes, AWS Secrets Manager, Render, Railway, etc.),
el valor de JWT_SECRET se inyecta dinámicamente como una variable de entorno del sistema durante el despliegue
sin pasar por archivos físicos.



## 2. Entidad User y DTOs de usuario.

Representación del usuario en la base de datos (User)
objetos de transferencia de datos (DTOs) para la validación del registro y el inicio de sesión.

1. Entidad User (src/users/entities/user.entity.ts)

Crea la carpeta src/users/entities/ y el archivo user.entity.ts:

```
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  // { select: false } evita que la contraseña se incluya automáticamente en las consultas SELECT
  @Column({ select: false })
  password: string;

  @Column({ name: 'full_name' })
  fullName: string;

  @Column({ default: true, name: 'is_active' })
  isActive: boolean;

  @Column('simple-array', { default: 'user' })
  roles: string[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  // Normaliza el email a minúsculas antes de guardar o actualizar
  @BeforeInsert()
  @BeforeUpdate()
  checkFieldsBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
  }
}
```

Detalle importante:
Definir { select: false } en la columna password
asegura que nunca expongas hashes de contraseñas por accidente en endpoints públicos o listados de usuarios.


2. DTO de Registro (src/users/dto/register-user.dto.ts)

Crea la carpeta src/users/dto/ y el archivo register-user.dto.ts:

```
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class RegisterUserDto {
  @IsEmail({}, { message: 'El correo electrónico no tiene un formato válido' })
  @IsNotEmpty({ message: 'El correo electrónico es obligatorio' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  @MaxLength(50, { message: 'La contraseña no puede superar los 50 caracteres' })
  @Matches(/(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))/, {
    message: 'La contraseña debe contener al menos una letra mayúscula, una minúscula y un número',
  })
  password: string;

  @IsString()
  @MinLength(2, { message: 'El nombre completo debe tener al menos 2 caracteres' })
  fullName: string;
}
```


3. DTO de Inicio de Sesión (src/users/dto/login-user.dto.ts)

Crea el archivo login-user.dto.ts en la misma carpeta:

```
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  @IsEmail({}, { message: 'El correo electrónico no tiene un formato válido' })
  @IsNotEmpty({ message: 'El correo electrónico es obligatorio' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  password: string;
}
```


4. Exportar los DTOs (src/users/dto/index.ts)

Crea un archivo barril (index.ts) para simplificar las importaciones posteriores:

```
export * from './register-user.dto';
export * from './login-user.dto';
```

Con esto, la capa de datos e interfaces de validación para los usuarios está lista
TypeORM creará automáticamente la tabla users al iniciar la aplicación gracias a synchronize: true.



## 3. Módulo y Servicio de Usuarios (UsersModule).

UsersService y el UsersModule
##### El servicio se encargará de gestionar la persistencia en PostgreSQL
##### hashear la contraseña con bcrypt
##### verificar correos duplicados y buscar usuarios para la autenticación.

1. Servicio de Usuarios (src/users/users.service.ts)
archivo users.service.ts dentro de src/users/:

```
import {
  Injectable,
  ConflictException,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from './entities/user.entity';
import { RegisterUserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Registra un nuevo usuario en la base de datos con contraseña encriptada.
   */
  async create(registerUserDto: RegisterUserDto): Promise<User> {
    const { email, password, fullName } = registerUserDto;

    // 1. Verificar si el usuario ya existe
    const existingUser = await this.userRepository.findOne({
      where: { email: email.toLowerCase().trim() },
    });

    if (existingUser) {
      throw new ConflictException('El correo electrónico ya está registrado');
    }

    try {
      // 2. Generar el hash de la contraseña (salt round = 10)
      const hashedPassword = await bcrypt.hash(password, 10);

      // 3. Crear la instancia de la entidad
      const user = this.userRepository.create({
        email,
        fullName,
        password: hashedPassword,
      });

      // 4. Guardar en PostgreSQL
      await this.userRepository.save(user);

      // 5. Eliminar el hash de la contraseña de la respuesta devuelta
      delete user.password;
      return user;
    } catch (error) {
      throw new InternalServerErrorException(
        'Ocurrió un error al registrar el usuario',
      );
    }
  }

  /**
   * Busca un usuario por email INCLUYENDO la contraseña (necesario para el Login).
   * Dado que en User entity definimos { select: false }, debemos solicitar el campo explícitamente.
   */
  async findByEmailWithPassword(email: string): Promise<User | null> {
    return this.userRepository
      .createQueryBuilder('user')
      .where('user.email = :email', { email: email.toLowerCase().trim() })
      .addSelect('user.password')
      .getOne();
  }

  /**
   * Busca un usuario activo por su ID (utilizado por el Guard de JWT para validar sesiones).
   */
  async findById(id: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id, isActive: true },
    });

    if (!user) {
      throw new NotFoundException(`Usuario no encontrado o inactivo`);
    }

    return user;
  }
}
```


2. Módulo de Usuarios (src/users/users.module.ts)

Crea el archivo users.module.ts dentro de src/users/:

```
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  exports: [UsersService, TypeOrmModule], // Exportamos UsersService para que AuthModule pueda usarlo
})
export class UsersModule {}
```

Clave: Exportar UsersService en la sección exports es fundamental
permitirá que el AuthModule inyecte UsersService sin tener que duplicar la lógica de consulta a la base de datos


3. Registrar UsersModule en app.module.ts

Asegúrate de agregar UsersModule en la lista de imports dentro de tu app.module.ts:

```
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // ... ConfigModule y TypeOrmModule
    TasksModule,
    UsersModule, // <--- Agregar aquí
  ],
})
export class AppModule {}
```

##### la gestión de la tabla users y sus operaciones contra PostgreSQL están desacopladas y listas para conectarse al servicio de autenticación




## 4. Módulo de Autenticación (AuthModule, AuthService con emisión de JWT y AuthController para login/register).

AuthModule, AuthService y AuthController

El servicio manejará la validación de credenciales con bcrypt
generación del token firmado con JwtService
controlador expondrá los endpoints públicos /auth/register y /auth/login.


1. Interfaz del Payload JWT
(src/auth/interfaces/jwt-payload.interface.ts)

Crea la carpeta src/auth/interfaces/ y el archivo jwt-payload.interface.ts
#### definir qué información viajará codificada dentro del token:

```
export interface JwtPayload {
  id: string;
  email: string;
}
```


2. Servicio de Autenticación (src/auth/auth.service.ts)

archivo auth.service.ts dentro de src/auth/:

```
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersService } from '../users/users.service';
import { RegisterUserDto, LoginUserDto } from '../users/dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * Registra un nuevo usuario y retorna sus datos junto con el Token JWT.
   */
  async register(registerUserDto: RegisterUserDto) {
    const user = await this.usersService.create(registerUserDto);

    return {
      user,
      token: this.getJwtToken({ id: user.id, email: user.email }),
    };
  }

  /**
   * Autentica credenciales (email y contraseña) y retorna el Token JWT.
   */
  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;

    // 1. Buscar usuario incluyendo el hash de la contraseña
    const user = await this.usersService.findByEmailWithPassword(email);

    if (!user) {
      throw new UnauthorizedException('Credenciales no válidas (email)');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('El usuario se encuentra inactivo');
    }

    // 2. Comparar la contraseña enviada con el hash guardado en PostgreSQL
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales no válidas (password)');
    }

    // 3. Eliminar la contraseña del objeto de retorno por seguridad
    delete user.password;

    // 4. Retornar el usuario junto con su token firmado
    return {
      user,
      token: this.getJwtToken({ id: user.id, email: user.email }),
    };
  }

  /**
   * Genera y firma un token JWT asíncronamente con el payload especificado.
   */
  private getJwtToken(payload: JwtPayload): string {
    return this.jwtService.sign(payload);
  }
}
```


3. Controlador de Autenticación (src/auth/auth.controller.ts)

Crea el archivo auth.controller.ts dentro de src/auth/:

```
import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';

import { AuthService } from './auth.service';
import { RegisterUserDto, LoginUserDto } from '../users/dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK) // Cambia el código por defecto de POST (201) a 200 OK para el login
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }
}
```


4. Módulo de Autenticación (src/auth/auth.module.ts)

Crea el archivo auth.module.ts dentro de src/auth/.
Aquí registraremos asíncronamente el JwtModule leyendo el secreto desde la configuración:

```
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    ConfigModule,
    UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRES_IN', '1d'),
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService, JwtModule, PassportModule],
})
export class AuthModule {}
```


5. Registrar AuthModule en app.module.ts

Actualiza tu app.module.ts para importar AuthModule:

```
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // ... ConfigModule, TypeOrmModule, TasksModule, UsersModule
    AuthModule, // <--- Agregar aquí
  ],
})
export class AppModule {}

```


### Probar los Endpoints Públicos de Autenticación

guardados los archivos, puedes probar el registro y el inicio de sesión con curl:

1. Registro de Usuario (POST /api/v1/auth/register)

```
curl -X POST http://localhost:3000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "desarrollador@ejemplo.com",
    "password": "Password123!",
    "fullName": "Juan Pérez"
  }'
```
  
2. Inicio de Sesión (POST /api/v1/auth/login)

```
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "desarrollador@ejemplo.com",
    "password": "Password123!"
  }'
```

(Ambos comandos te responderán con el objeto user y una cadena larga token JWT).



## 5. Crear la estrategia Passport (JwtStrategy) y el Guard (JwtAuthGuard) para resguardar endpoints privados

estrategia de autenticación Passport (JwtStrategy),
decorador personalizado (@GetUser())
para extraer los datos del usuario autenticado
aplicaremos el guard de protección en los controladores.

1. Estrategia JWT (src/auth/strategies/jwt.strategy.ts)

Crea la carpeta src/auth/strategies/ y el archivo jwt.strategy.ts

```
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { UsersService } from '../../users/users.service';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly usersService: UsersService,
    configService: ConfigService,
  ) {
    super({
      secretOrKey: configService.get<string>('JWT_SECRET'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  /**
   * Método que Passport ejecuta automáticamente tras verificar la firma y expiración del token.
   * Lo que retorne este método se adjuntará automáticamente a req.user en cada petición.
   */
  async validate(payload: JwtPayload): Promise<User> {
    const { id } = payload;
    const user = await this.usersService.findById(id);

    if (!user) {
      throw new UnauthorizedException('Token no válido: usuario no existe');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('Usuario inactivo, contacte al administrador');
    }

    return user;
  }
}
```


2. Registrar JwtStrategy en AuthModule (src/auth/auth.module.ts)

Agrega JwtStrategy a la lista de providers y exports dentro de tu auth.module.ts:

```
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './strategies/jwt.strategy'; // <--- Importar

@Module({
  imports: [
    ConfigModule,
    UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRES_IN', '1d'),
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], // <--- Agregar aquí
  exports: [AuthService, JwtStrategy, JwtModule, PassportModule], // <--- Exportar
})
export class AuthModule {}
```


3. Decorador Personalizado @GetUser() (src/auth/decorators/get-user.decorator.ts)

carpeta src/auth/decorators/ y el archivo get-user.decorator.ts
extraer de forma limpia el usuario o cualquiera de sus propiedades directamente en los parámetros de los métodos

```
import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const user = req.user;

    if (!user) {
      throw new InternalServerErrorException(
        'Usuario no encontrado en el request (asegúrate de resguardar la ruta con AuthGuard())',
      );
    }

    return data ? user[data] : user;
  },
);
```


4. Resguardar un Controlador (TasksController o prueba privada)

proteger todas las rutas de un controlador (o un endpoint individual)
utiliza el guard nativo de Passport @UseGuards(AuthGuard()).

Ejemplo protegiendo TasksController (src/tasks/tasks.controller.ts):

```
import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { User } from '../users/entities/user.entity';

@Controller('tasks')
@UseGuards(AuthGuard()) // <--- Protege TODOS los endpoints de este controlador
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(
    @Body() createTaskDto: CreateTaskDto,
    @GetUser() user: User, // <--- Obtiene el usuario autenticado desde el JWT
  ) {
    // Aquí puedes acceder a user.id, user.email, etc.
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll(@GetUser() user: User) {
    return this.tasksService.findAll();
  }
}
```


### Probar la Protección de Rutas con curl

1. Intento de acceso sin Token (Debe fallar con HTTP 401 Unauthorized)

```
curl -i -X GET http://localhost:3000/api/v1/tasks
```

Respuesta: HTTP/1.1 401 Unauthorized


2. Acceso con Token JWT válido en la cabecera Authorization

Sustituye <TU_TOKEN_JWT> por el token obtenido en el login:

```
curl -i -X GET http://localhost:3000/api/v1/tasks \
  -H "Authorization: Bearer <TU_TOKEN_JWT>"
```

Respuesta: HTTP/1.1 200 OK

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ4MWZiZTZkLWE3MGUtNGEyOC1hNWRjLTI5OTgyNzM2YTdmOSIsImVtYWlsIjoiZGVzYXJyb2xsYWRvckBlamVtcGxvLmNvbSIsImlhdCI6MTc4OTMzNjI2NSwiZXhwIjoxNzg5NDIyNjY1fQ.5--mqqqWd74E_-sTRbfoyEtffleHYR3EgiRBZtrubrk
```



### Respuesta: Flujo seguridad (JWT + Passport)


1. Envío de credenciales: El encabezado -H "Authorization: Bearer <TOKEN>" envió tu firma digital JWT.

2. Intercepción del Guard: @UseGuards(AuthGuard('jwt')) en el TasksController
detuvo la petición antes de ejecutar el método findAll().

3. Validación en JwtStrategy:
Extrajo el token del encabezado.
Verificó que la firma fuera válida con JWT_SECRET.
Ejecutó el método validate(payload), comprobando que el usuario d81fbe6d-a70e-4a2c-a5dc-29982736a7f9 existiera en la base de datos y estuviera activo.

4. Paso al Controlador: Al ser válido, NestJS inyectó la entidad User en la petición y ejecutó tasksService.findAll().




# Establecer relación Many-to-One / One-to-Many

Lógica de negocio en TasksService y pasar la instancia de User desde TasksController


## 1. Establecer la relación en las entidades
#### Define la clave foránea entre usuarios y tareas

#### Agrega la relación @ManyToOne en TaskEntity y la contraparte @OneToMany en User:

src/tasks/entities/task.entity.ts

```
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('tasks')
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  title: string;

  @Column('text')
  description: string;

  @Column('boolean', { default: false })
  completed: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.tasks, { eager: false })
  user: User;
}

```


src/users/entities/user.entity.ts

```
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { TaskEntity } from '../../tasks/entities/task.entity';

@Entity('users')
export class User {
  // ... tus columnas actuales de User ...

  @OneToMany(() => TaskEntity, (task) => task.user)
  tasks: TaskEntity[];
}
```



## 2. Actualizar TasksService para recibir y filtrar por el usuario

#### !!! Operaciones de consulta y modificación estén acotadas al ID del usuario

#### firma y comportamiento de los métodos en src/tasks/tasks.service.ts:

```
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TaskEntity } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  async findAll(user: User): Promise<TaskEntity[]> {
    return await this.taskRepository.find({
      where: { user: { id: user.id } },
    });
  }

  async findOne(id: string, user: User): Promise<TaskEntity> {
    const task = await this.taskRepository.findOne({
      where: { id, user: { id: user.id } },
    });

    if (!task) {
      throw new NotFoundException(`Tarea con ID "${id}" no encontrada`);
    }

    return task;
  }

  async create(createTaskDto: CreateTaskDto, user: User): Promise<TaskEntity> {
    const task = this.taskRepository.create({
      ...createTaskDto,
      user, // Asigna el objeto User completo a la tarea
    });
    await this.taskRepository.save(task);

    // Opcional: elimina la propiedad user del objeto de retorno para evitar exponer los datos del usuario en la respuesta HTTP
    delete (task as Partial<TaskEntity>).user;
    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto, user: User): Promise<TaskEntity> {
    const task = await this.findOne(id, user); // Valida que exista y pertenezca al usuario
    const updatedTask = this.taskRepository.merge(task, updateTaskDto);
    return await this.taskRepository.save(updatedTask);
  }

  async remove(id: string, user: User): Promise<void> {
    const task = await this.findOne(id, user); // Valida que exista y pertenezca al usuario
    await this.taskRepository.remove(task);
  }
}
```


### 3. Inyectar @GetUser() user: User en TasksController

#### Usuario extraído del JWT a cada llamada del servicio

Actualiza src/tasks/tasks.controller.ts para capturar el usuario autenticado en todas las rutas:

```
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { TasksService } from './tasks.service';
import { TaskEntity } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

import { GetUser } from '../auth/decorators/get-user.decorator';
import { User } from '../users/entities/user.entity';

@Controller('tasks')
@UseGuards(AuthGuard('jwt'))
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async findAll(@GetUser() user: User): Promise<TaskEntity[]> {
    return await this.tasksService.findAll(user);
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @GetUser() user: User,
  ): Promise<TaskEntity> {
    return await this.tasksService.findOne(id, user);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createTaskDto: CreateTaskDto,
    @GetUser() user: User,
  ): Promise<TaskEntity> {
    return await this.tasksService.create(createTaskDto, user);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateTaskDto: UpdateTaskDto,
    @GetUser() user: User,
  ): Promise<TaskEntity> {
    return await this.tasksService.update(id, updateTaskDto, user);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(
    @Param('id', ParseUUIDPipe) id: string,
    @GetUser() user: User,
  ): Promise<void> {
    await this.tasksService.remove(id, user);
  }
}
```

Al agregar la nueva relación @ManyToOne, TypeORM creará la columna userId en la tabla tasks.
Si synchronize: true está habilitado en tu entorno local de desarrollo, la tabla se actualizará automáticamente

Si tenías tareas creadas previamente sin usuario asignado
puede que necesites truncar o limpiar la tabla tasks si la clave foránea requiere ser no nula.



## Limpiar tablas

Vaciar la tabla tasks y solucionar el conflicto con las tareas huérfanas (sin userId)
ejecutar la sentencia TRUNCATE.


1. Docker
PostgreSQL en un contenedor Docker
ejecutar el comando TRUNCATE directamente sin entrar a una interfaz gráfica

```
docker exec -it <nombre_contenedor_db> psql -U <usuario_postgres> -d <nombre_base_datos> -c "TRUNCATE TABLE tasks CASCADE;"
```

Ej:

```
docker exec -it postgres_db psql -U postgres -d taskdb -c "TRUNCATE TABLE tasks CASCADE;"
```


2. cliente SQL (DBeaver, pgAdmin, TablePlus, VS Code)

consola SQL de tu cliente

```
TRUNCATE TABLE tasks CASCADE;
```

`TRUNCATE` elimina todas las filas al instante de forma más eficiente que un DELETE

`CASCADE` remueve automáticamente cualquier referencia dependiente si la hubiera.


3. Reiniciar todo el volumen de Docker

Base de datos limpia desde cero

Si estás en entorno local de desarrollo y prefieres borrar todas las tablas y empezar la base de datos totalmente limpia:

```
# 1. Detiene los contenedores y elimina los volúmenes de datos asociados (-v)
docker compose down -v

# 2. Vuelve a levantar PostgreSQL desde cero
docker compose up -d
```

Al reiniciar el servidor NestJS con synchronize: true en TypeORM, se recrearán las tablas users y tasks desde cero con la nueva clave foránea userId.



## Registro

1. Registrar el Usuario A 

```
curl -i -X POST http://localhost:3000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario1@ejemplo.com",
    "password": "Password123!"
  }'
```


2. Iniciar sesión con el Usuario A (Obtener JWT)

```
curl -i -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario1@ejemplo.com",
    "password": "Password123!"
  }'
```

Copia el valor del token devuelto en el JSON de respuesta para los siguientes pasos (TOKEN_A).


3. Crear una tarea para el Usuario A

```
curl -i -X POST http://localhost:3000/api/v1/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <TOKEN_A>" \
  -d '{
    "title": "Probar aislamiento de tareas",
    "description": "Verificar que esta tarea solo la vea usuario1"
  }'
```

Guarda el id de la tarea generada.


4. Consultar las tareas del Usuario A

```
curl -i -X GET http://localhost:3000/api/v1/tasks \
  -H "Authorization: Bearer <TOKEN_A>"
```

Resultado esperado: Un arreglo con la tarea recién creada.


5. Registrar e iniciar sesión con un Usuario B (Prueba de Aislamiento)

```
# Registro Usuario B
curl -i -X POST http://localhost:3000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario2@ejemplo.com",
    "password": "Password123!"
  }'

# Login Usuario B
curl -i -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario2@ejemplo.com",
    "password": "Password123!"
  }'
```


6. Verificar aislamiento al listar tareas con Usuario B

```
curl -i -X GET http://localhost:3000/api/v1/tasks \
  -H "Authorization: Bearer <TOKEN_B>"
```

Resultado esperado: HTTP/1.1 200 OK con un arreglo vacío [], confirmando que usuario2 no tiene acceso a las tareas de usuario1.


7. Intentar consultar o eliminar la tarea del Usuario A usando el token del Usuario B

```
curl -i -X GET http://localhost:3000/api/v1/tasks/<ID_TAREA_USUARIO_A> \
  -H "Authorization: Bearer <TOKEN_B>"
```

Resultado esperado: HTTP/1.1 404 Not Found (Tarea con ID "..." no encontrada)
protegiendo la información de accesos no autorizados.





# Progreso

1. Category y relación N:M (Task <-> Category)

Crear CategoryEntity (id, name, color, user).
Configurar la relación @ManyToMany entre TaskEntity y CategoryEntity.
Crear el CRUD básico de categorías acotado al usuario autenticado.


2. Soft Delete, Paginación y Filtros Dinámicos

Teniendo las entidades
implementar paginación y filtros que incluyan búsqueda por categoría o estado (completed).

Agregar @DeleteDateColumn() en TaskEntity para borrado lógico (softRemove() / restore()).
Crear DTO genérico de paginación (PaginationDto: page, limit)
Añadir filtros dinámicos en GET /tasks (completed, search, categoryId).


3. Migraciones de Base de Datos (Desactivar synchronize: true)

Una vez que el esquema de base de datos está congelado y probado en desarrollo
es el momento ideal para desactivar synchronize: true y generar la primera migración SQL inicial con TypeORM CLI.

Configurar el DataSource para TypeORM CLI.
Crear scripts en package.json (migration:generate, migration:run, migration:revert).
Probar el flujo de ejecución de migraciones en Docker.


4. Documentación Interactiva con Swagger / OpenAPI

documenta la API cuando los contratos de entrada/salida (DTOs, paginación, auth) están definidos.

Configurar @nestjs/swagger en main.ts.
Decorar DTOs (@ApiProperty), Controladores (@ApiTags, @BearerAuth) y respuestas HTTP.
Probar endpoints interactivamente desde http://localhost:3000/api/v1/docs


5. Estrategia de Testing (Unitarias y E2E)

Unitarias (Jest): Probar TasksService, AuthService y CategoriesService aislando repositorios con Mocks.E2E (Supertest): Validar flujos completos HTTP (Registro $\rightarrow$ Login $\rightarrow$ Crear Tarea $\rightarrow$ Filtrar $\rightarrow$ Eliminar).




# Entidad Category

definir la entidad CategoryEntity
Relación de muchos a muchos (N:M) con TaskEntity
e independizar las categorías por usuario (1:N entre User y Category).

1. entidad CategoryEntity

archivo src/categories/entities/category.entity.ts
Cada categoría tendrá un nombre, un color representativo (código hex)
pertenecerá a un User específico y podrá estar vinculada a múltiples Tasks

```
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { TaskEntity } from '../../tasks/entities/task.entity';

@Entity('categories')
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 7, default: '#4A90E2' })
  color: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Cada categoría pertenece a un usuario (Aislamiento por usuario)
  @ManyToOne(() => User, (user) => user.categories, { onDelete: 'CASCADE' })
  user: User;

  // Una categoría puede estar en muchas tareas
  @ManyToMany(() => TaskEntity, (task) => task.categories)
  tasks: TaskEntity[];
}
```


2. TaskEntity para la relación ManyToMany

src/tasks/entities/task.entity.ts
incorpora la relación @ManyToMany con su tabla intermedia @JoinTable

```
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { CategoryEntity } from '../../categories/entities/category.entity';

@Entity('tasks')
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 150 })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'boolean', default: false })
  completed: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.tasks, { onDelete: 'CASCADE' })
  user: User;

  // Relación Muchos a Muchos con Categorías
  @ManyToMany(() => CategoryEntity, (category) => category.tasks, {
    cascade: true,
  })
  @JoinTable({
    name: 'task_categories', // Nombre de la tabla pivote en PostgreSQL
    joinColumn: { name: 'task_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'category_id', referencedColumnName: 'id' },
  })
  categories: CategoryEntity[];
}
```


3. Actualizar UserEntity con la relación inversa
src/users/entities/user.entity.ts
permitir que el objeto User conozca sus categorías:

```
// Agregar el import correspondiente
import { CategoryEntity } from '../../categories/entities/category.entity';

// Dentro de la clase UserEntity:
@OneToMany(() => CategoryEntity, (category) => category.user)
categories: CategoryEntity[];
```


4. DTOs para Categorías

```
import { IsString, IsNotEmpty, MaxLength, IsOptional, Matches } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsString()
  @IsOptional()
  @Matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
    message: 'El color debe ser un código Hexadecimal válido (ej. #FF5733)',
  })
  color?: string;
}
```

src/categories/dto/update-category.dto.ts

```
import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
```



5. Registrar la entidad en CategoriesModule

registrar CategoryEntity en src/categories/categories.module.ts:

```
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
  exports: [CategoriesService, TypeOrmModule],
})
export class CategoriesModule {}
```

TypeORM creará automáticamente la tabla categories y la tabla intermedia task_categories en PostgreSQL al iniciar el servidor.



## CategoriesService y CategoriesController con su CRUD aislado por usuario autenticado.

1. src/categories/categories.service.ts

```
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CategoryEntity } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  // 1. Obtiene todas las categorías pertenecientes al usuario autenticado
  async findAll(user: User): Promise<CategoryEntity[]> {
    return await this.categoryRepository.find({
      where: { user: { id: user.id } },
      order: { name: 'ASC' },
    });
  }

  // 2. Busca una categoría por ID asegurando pertenencia al usuario
  async findOne(id: string, user: User): Promise<CategoryEntity> {
    const category = await this.categoryRepository.findOne({
      where: { id, user: { id: user.id } },
    });

    if (!category) {
      throw new NotFoundException(`La categoría con ID "${id}" no existe.`);
    }

    return category;
  }

  // 3. Registra una nueva categoría para el usuario
  async create(
    createCategoryDto: CreateCategoryDto,
    user: User,
  ): Promise<CategoryEntity> {
    const category = this.categoryRepository.create({
      ...createCategoryDto,
      user,
    });

    await this.categoryRepository.save(category);
    delete (category as Partial<CategoryEntity>).user;
    return category;
  }

  // 4. Actualiza los datos de una categoría previa validación de propiedad
  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
    user: User,
  ): Promise<CategoryEntity> {
    const category = await this.findOne(id, user);
    const updatedCategory = this.categoryRepository.merge(
      category,
      updateCategoryDto,
    );
    return await this.categoryRepository.save(updatedCategory);
  }

  // 5. Elimina la categoría del usuario
  async remove(id: string, user: User): Promise<void> {
    const category = await this.findOne(id, user);
    await this.categoryRepository.remove(category);
  }
}
```



2. src/categories/categories.controller.ts

```
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { CategoriesService } from './categories.service';
import { CategoryEntity } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

import { GetUser } from '../auth/decorators/get-user.decorator';
import { User } from '../users/entities/user.entity';

@Controller('categories')
@UseGuards(AuthGuard('jwt'))
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async findAll(@GetUser() user: User): Promise<CategoryEntity[]> {
    return await this.categoriesService.findAll(user);
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @GetUser() user: User,
  ): Promise<CategoryEntity> {
    return await this.categoriesService.findOne(id, user);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
    @GetUser() user: User,
  ): Promise<CategoryEntity> {
    return await this.categoriesService.create(createCategoryDto, user);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
    @GetUser() user: User,
  ): Promise<CategoryEntity> {
    return await this.categoriesService.update(id, updateCategoryDto, user);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(
    @Param('id', ParseUUIDPipe) id: string,
    @GetUser() user: User,
  ): Promise<void> {
    await this.categoriesService.remove(id, user);
  }
}
```

Garantía de Aislamiento: Todas las consultas SQL generadas por TypeORM en este módulo contienen el filtro WHERE "userId" = :userId.

Reutiliza findOne en los métodos de update y remove para lanzar automáticamente una excepción 404 Not Found en caso de que la categoría no exista o pertenezca a otro usuario.

Respuesta limpia: Al guardar con create, remueve la propiedad user de la entidad retribuida en el body JSON para evitar exponer metadatos innecesarios del usuario.


## Actualizar CreateTaskDto y TasksService: asociar categorías (categoryIds) al crear o actualizar tareas y cargarlas con relations en las consultas

1. Actualizar CreateTaskDto

src/tasks/dto/create-task.dto.ts para agregar la propiedad categoryIds como un arreglo opcional de UUIDs

```
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsArray,
  IsUUID,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  completed?: boolean;

  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  categoryIds?: string[];
}
```


2. Registrar CategoryEntity en TasksModule

src/tasks/tasks.module.ts e incluye CategoryEntity dentro de TypeOrmModule.forFeature para poder inyectar su repositorio en TasksService

```
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TaskEntity } from './entities/task.entity';
import { CategoryEntity } from '../categories/entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity, CategoryEntity])],
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}
```


3. Actualizar TasksService con mapeo de categorías y relaciones

src/tasks/tasks.service.ts para:

Cargar la relación categories en findAll y findOne.

Buscar y validar que las categorías enviadas en categoryIds pertenezcan al usuario antes de guardarlas.

```
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { ConfigService } from '@nestjs/config';

import { TaskEntity } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { User } from '../users/entities/user.entity';
import { CategoryEntity } from '../categories/entities/category.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
    private readonly configService: ConfigService,
  ) {}

  // 1. Obtiene las tareas del usuario incluyendo sus categorías vinculadas
  async findAll(user: User): Promise<TaskEntity[]> {
    return await this.taskRepository.find({
      where: { user: { id: user.id } },
      relations: ['categories'],
      order: { createdAt: 'DESC' },
    });
  }

  // 2. Obtiene una tarea por ID cargando la relación con categorías
  async findOne(id: string, user: User): Promise<TaskEntity> {
    const task = await this.taskRepository.findOne({
      where: { id, user: { id: user.id } },
      relations: ['categories'],
    });

    if (!task) {
      throw new NotFoundException(`La tarea con ID "${id}" no existe.`);
    }

    return task;
  }

  // 3. Crea la tarea y asocia las categorías que pertenecen al usuario
  async create(createTaskDto: CreateTaskDto, user: User): Promise<TaskEntity> {
    const { categoryIds, ...taskData } = createTaskDto;

    let categories: CategoryEntity[] = [];
    if (categoryIds && categoryIds.length > 0) {
      categories = await this.categoryRepository.find({
        where: { id: In(categoryIds), user: { id: user.id } },
      });
    }

    const newTask = this.taskRepository.create({
      ...taskData,
      user,
      categories,
    });

    await this.taskRepository.save(newTask);
    delete (newTask as Partial<TaskEntity>).user;
    return newTask;
  }

  // 4. Actualiza datos y sincroniza las categorías si se pasan categoryIds
  async update(
    id: string,
    updateTaskDto: UpdateTaskDto,
    user: User,
  ): Promise<TaskEntity> {
    const { categoryIds, ...taskData } = updateTaskDto;
    const task = await this.findOne(id, user);

    if (categoryIds !== undefined) {
      task.categories = categoryIds.length > 0
        ? await this.categoryRepository.find({
            where: { id: In(categoryIds), user: { id: user.id } },
          })
        : [];
    }

    this.taskRepository.merge(task, taskData);
    return await this.taskRepository.save(task);
  }

  // 5. Elimina la tarea asegurando pertenencia al usuario
  async remove(id: string, user: User): Promise<void> {
    const task = await this.findOne(id, user);
    await this.taskRepository.remove(task);
  }
}
```


#### Aislamiento de Categorías (In(categoryIds) + user.id): Al asociar categorías en create o update, se filtra obligatoriamente por el ID del usuario
##### !!! evita que un usuario intente vincular categorías pertenecientes a otro usuario pasando UUIDs ajenos en el payload.

#### Carga Ansiosa Controlada (relations: ['categories']): Las consultas findAll y findOne retornarán automáticamente la propiedad categories: [...] con las categorías vinculadas en el JSON.


1. Garantía de Seguridad y Aislamiento de Datos (Multi-Tenant)
El riesgo: Si el frontend enviara directamente objetos completos de categoría o si no se validaran en el backend, un usuario malintencionado podría enviar el ID de una categoría perteneciente a otro usuario y vincularla a su tarea.
La solución en el servicio: Al consultar el repositorio de categorías filtrando explícitamente por In(categoryIds) y user: { id: user.id }, se garantiza que solo se asocien categorías que realmente le pertenecen al usuario autenticado.

2. Validación de Entrada Estricta en la Capa DTO
Integridad de tipos: Al añadir @IsArray() y @IsUUID('4', { each: true }) en el DTO, NestJS descarta automáticamente peticiones con datos corruptos o mal formateados antes de que alcancen la lógica de negocio o la base de datos.
Opcionalidad flexible: Al ser @IsOptional(), se permite crear tareas rápidamente sin categorías obligatorias.

3. Evitar el problema de Consultas N+1 y Reducir Latencia (relations)
Sin relations: ['categories']: El cliente recibiría las tareas pero sin información de sus categorías. Si el frontend necesitara mostrar el nombre/color de las categorías de 20 tareas, tendría que hacer 20 peticiones HTTP adicionales.
Con relations: ['categories']: TypeORM ejecuta una consulta optimizada con LEFT JOIN a la tabla pivote task_categories. La API responde en una sola llamada con toda la estructura de datos lista para ser renderizada en la interfaz.

4. Simplificación del Ciclo de Vida de la Relación Mucho a Muchos (N:M)
Actualización atómica: En lugar de crear endpoints adicionales como POST /tasks/:id/categories/:categoryId y DELETE /tasks/:id/categories/:categoryId, la actualización mediante el DTO permite sincronizar el estado completo de la relación en un solo PUT o PATCH.

5. Preparación para Filtrado y Paginación
Tener la relación mapeada y cargada en la entidad habilita de forma natural el siguiente paso: implementar filtros dinámicos en la consulta principal (por ejemplo, obtener solo las tareas asignadas a una categoría en específico: GET /tasks?categoryId=UUID).



## Comandos curl


1. autenticarte y guardar el Token

```
# 1. Login y extracción del token
TOKEN=$(curl -s -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "ivan@example.com",
    "password": "Password123!"
  }' | jq -r '.token')

echo "Token obtenido: $TOKEN"
```

2. Crear Categorías
Generación de dos categorías con colores hexadecimales

```
# Categoría 1: Trabajo
curl -s -X POST http://localhost:3000/api/v1/categories \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Trabajo",
    "color": "#3498DB"
  }' | jq .

# Categoría 2: Urgente
curl -s -X POST http://localhost:3000/api/v1/categories \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Urgente",
    "color": "#E74C3C"
  }' | jq .
  
```


3. Tarea vinculando Múltiples Categorías

Pasa los UUIDs en el arreglo categoryIds

```
# Reemplaza UUID_CAT_1 y UUID_CAT_2 con los IDs generados en el paso anterior
curl -s -X POST http://localhost:3000/api/v1/tasks \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Configurar Modulo 3 del Backend",
    "description": "Implementar Soft Delete y Paginación",
    "completed": false,
    "categoryIds": [
      "UUID_CAT_1",
      "UUID_CAT_2"
    ]
  }' | jq .
```


4. Consultar Tareas (Verificar Carga Ansiosa de Categorías)
Confirmación de relación mediante LEFT JOIN

```
curl -s -X GET http://localhost:3000/api/v1/tasks \
  -H "Authorization: Bearer $TOKEN" | jq .
```

resp:

```
[
  {
    "id": "a3b8c2d1-...",
    "title": "Configurar Modulo 3 del Backend",
    "description": "Implementar Soft Delete y Paginación",
    "completed": false,
    "createdAt": "2026-09-14T19:40:00.000Z",
    "updatedAt": "2026-09-14T19:40:00.000Z",
    "categories": [
      {
        "id": "UUID_CAT_1",
        "name": "Trabajo",
        "color": "#3498DB"
      },
      {
        "id": "UUID_CAT_2",
        "name": "Urgente",
        "color": "#E74C3C"
      }
    ]
  }
]
``` 


5. Actualizar Tarea (Sincronizar Categorías)
Desvincular una categoría pasando solo la que debe permanecer

```
curl -s -X PUT http://localhost:3000/api/v1/tasks/UUID_TAREA \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "categoryIds": [
      "UUID_CAT_1"
    ]
  }' | jq .
```

## Fakes emails







# IU/UX



Ej:

100% Backend y usar Swagger/OpenAPI como interfaz interactiva

Sin UI propia (API REST + Swagger)
100% del tiempo a la arquitectura de NestJS, patrones SOLID, DTOs, TypeORM/Prisma, Guards e Interceptors.

UI Interactiva Incluida: Con el módulo @nestjs/swagger, NestJS genera automáticamente un panel web profesional (/api/docs) para ejecutar peticiones GET, POST, DELETE, probar validaciones y revisar esquemas en vivo sin tocar HTML/CSS

Para roles de backend, una API bien documentada con Swagger y buenas pruebas unitarias tiene mayor valor técnico que una interfaz visual.


Ej:

UI (Fullstack: NestJS + React/Vite)

Enfoque dividido: Requiere gestionar clientes HTTP (Axios/Fetch), estados globales, diseño de interfaz, formularios y resolver configuraciones de CORS

Riesgo: Desvía la atención de los conceptos avanzados de NestJS y triplica el tiempo de desarrollo.

Estrategia: Tratarlo únicamente como una Fase 2 opcional, cuando la API ya esté 100% terminada y desplegada.


"UI" nativa para el Backend: @nestjs/swagger
##### En el ecosistema NestJS, la documentación interactiva actúa como tu interfaz de usuario:

Navegador / Cliente  ──►

[ Panel Swagger UI (/api/docs) ]
• Probar endpoints en vivo
• Ver campos obligatorios
• Simular errores (400, 404)  ──►

[ NestJS API ]




# UI/UX de 100% backend hacia Frontend

una API REST en NestJS actúa como un backend headless (desacoplado) que se comunica exclusivamente mediante JSON.
                             
1. Habilitar CORS en NestJS:
Por seguridad, los navegadores bloquean solicitudes entre orígenes distintos (por ejemplo, un cliente React corriendo en localhost:5173 llamando a NestJS en localhost:3000).
Se resuelve agregando app.enableCors() en el archivo main.ts.

2. Aprovechar la Documentación de Swagger para Generar Tipos:
Al contar con TypeScript en ambos lados y la documentación de Swagger (@nestjs/swagger), puedes exportar las interfaces de los DTOs o utilizar herramientas como openapi-generator para crear automáticamente el cliente HTTP tipado en el frontend.

3. Consumir los Endpoints:
En la aplicación cliente (React, Vue, Svelte, etc.) se realizan peticiones HTTP mediante fetch, axios o librerías de gestión de estado asíncrono como TanStack Query para conectar las vistas con las rutas de NestJS.


Deploy:

Totalmente Desacoplado (Recomendado)
Desplegar la UI en un host estático (Vercel, Netlify) y la API de NestJS en un servidor backend (Render, Railway).
Escala cada capa de forma independiente y mantiene la separación de responsabilidades.

Servidor Unificado
Servir los archivos estáticos compilados de la UI directamente desde NestJS usando el paquete @nestjs/serve-static.
Todo el sistema se despliega y mantiene en una sola instancia/servidor.




# Config proyecto herramientas de desarrollo y prod


1. NestJS CLI

línea de comandos de NestJS de forma global (o utilízala vía npx) y genera la estructura base del proyecto:

`npm install -g @nestjs/cli`
`nest new expense-tracker`
`expense-tracker`


2. Producción

paquetes necesarios para la configuración de entorno, validación de DTOs, documentación con Swagger y persistencia de datos con TypeORM y SQLite

`npm install @nestjs/config class-validator class-transformer @nestjs/swagger @nestjs/typeorm typeorm sqlite3`


@nestjs/config: Carga y gestión de variables de entorno (.env).

class-validator y class-transformer: Validación estricta y transformación de tipos en tiempo de ejecución.

@nestjs/swagger: Generación automática de la interfaz interactiva OpenAPI en /api/docs.

@nestjs/typeorm, typeorm, sqlite3: Capa ORM y motor de base de datos SQL embebido y liviano.


3. Limpieza de Archivos por Defecto

Limpieza de demostración autogenerada para mantener un árbol de archivos limpio:

Elimina los archivos src/app.controller.ts, src/app.controller.spec.ts y src/app.service.ts.

Modifica src/app.module.ts removiendo las referencias a AppController y AppService.


4. Crear Árbol de Directorios del Dominio:

Estructura las carpetas principales dentro de src/ para alojar los módulos definidos en el diseño:

```
mkdir -p src/common/{filters,guards,interceptors}
mkdir -p src/categories/{dto,entities}
mkdir -p src/transactions/{dto,entities}
mkdir -p src/analytics
```

5. Variables de Entorno (.env)

Crea el archivo .env en la raíz del proyecto para definir las claves del sistema:

```
PORT=3000
DEFAULT_CURRENCY=USD
API_KEY=secret_key_123
DB_PATH=expense_tracker.sqlite
```

Crea también un archivo .env.example con la misma estructura (sin valores sensibles) para versionarlo en el repositorio.





# Comandos NestCLI

1. Gestión y Ejecución del Proyecto

Comando,Descripción
`nest new <nombre>`,Crea un nuevo proyecto con la estructura inicial de NestJS.
`nest start`,Inicia la aplicación en modo producción.
`nest start --watch`,Inicia en modo desarrollo con recarga automática (Hot Reload).
`nest build`,Compila la aplicación de TypeScript a JavaScript en la carpeta dist/.
`nest info`,"Muestra información del sistema, versión de Node.js, CLI y dependencias."

2. Generación de Archivos (nest generate / nest g)

Comando Corto,Comando Completo,Elemento Generado
`nest g mo` <nombre>,nest g module <nombre>,Módulo para organizar un contexto/dominio.
`nest g co` <nombre>,nest g controller <nombre>,Controlador para recibir peticiones HTTP.
`nest g s` <nombre>,nest g service <nombre>,Servicio con @Injectable() para lógica de negocio.
`nest g res` <nombre>,nest g resource <nombre>,"Recurso CRUD completo (Módulo, Controlador, Servicio, DTOs y Entidad)."
`nest g gu` <nombre>,nest g guard <nombre>,Guard para autorización y protección de rutas.
`nest g itc` <nombre>,nest g interceptor <nombre>,Interceptor para transformar respuestas/peticiones.
`nest g f` <nombre>,nest g filter <nombre>,Filtro de excepción para manejo personalizado de errores.
`nest g pi` <nombre>,nest g pipe <nombre>,Pipe para transformación o validación de parámetros.

3. Flags y Opciones Útiles

`--no-spec`: Evita la creación del archivo de pruebas unitarias (.spec.ts).
nest g s categories --no-spec

`--dry-run / -d`: Simula la generación de archivos en la terminal sin crear ni modificar ningún archivo real en el disco.
Ej: nest g res transactions -d

`--flat`: Genera los archivos directamente en la carpeta actual en lugar de crear una subcarpeta con el nombre del elemento.



# Código


# 1. Dominio y Modelo de Datos

1. Enumerados de Dominio

`TransactionType Enum (src/transactions/enums/transaction-type.enum.ts)`:
Definición que restringe los tipos de movimientos a dos valores posibles: INGRESO y GASTO.

     
2. Entidades de Persistencia (Modelado de Datos)

`Entidad Category (src/categories/entities/category.entity.ts)`:
Modelo de datos que mapea la tabla de categorías
Incluye el identificador autogenerado, nombre único, límite de presupuesto mensual (opcional)
bandera de estado activo/inactivo (por defecto true) y la relación de uno a muchos (OneToMany) hacia las transacciones

`Entidad Transaction (src/transactions/entities/transaction.entity.ts)`:
Modelo de datos que mapea la tabla de movimientos.
Incluye el identificador autogenerado, monto numérico, tipo de movimiento (TransactionType), descripción, fecha real del gasto/ingreso, marca de tiempo de registro automático (createdAt)
relación de muchos a uno (ManyToOne) vinculada a la entidad Category.


3. DTOs de Entrada y Validación (Contratos)

`CreateCategoryDto (src/categories/dto/create-category.dto.ts)`:
Objeto de transferencia para la creación de categorías
Contiene anotaciones de class-validator para exigir que el nombre sea un texto no vacío y que el límite de presupuesto (si se envía) sea un número positivo.

`CreateTransactionDto (src/transactions/dto/create-transaction.dto.ts)`:
Objeto de transferencia para registrar un movimiento
Valida que el monto sea un número estrictamente mayor a cero, el tipo pertenezca al enum de transacciones
la fecha cumpla con formato ISO, la descripción sea texto y el ID de categoría sea un número válido.

`FilterTransactionDto (src/transactions/dto/filter-transaction.dto.ts)`:
Objeto de transferencia para los parámetros de consulta (Query Parameters).
Permite filtrar listados mediante campos opcionales como tipo de movimiento, ID de categoría y rango de fechas (startDate y endDate).


## Código

## 1. src/transactions/enums/transaction-type.enum.ts

Enumerado de Tipo de Transacción (TransactionType).
##### Es la base del dominio, no depende de ninguna otra clase y será utilizado tanto por la entidad Transaction como por sus DTOs

src/transactions/enums/transaction-type.enum.ts

```
export enum TransactionType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}
```

##### string enum facilita la lectura de datos en la base de datos
(se guardará como 'INCOME' o 'EXPENSE' en lugar de 0 o 1).

Evita errores tipográficos en el código y nos servirá para validaciones estrictas con @IsEnum() en los DTOs más adelante.


## 2. Entidad Category

src/categories/entities/category.entity.ts:

```
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Transaction } from '@transactions/entities/transaction.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  monthlyBudgetLimit: number;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Transaction, (transaction) => transaction.category)
  transactions: Transaction[];
}
```

Claves del diseño:

@Column({ unique: true }): Evita categorías con nombres duplicados en la base de datos.

nullable: true: Permite que el límite de presupuesto sea opcional.

isActive: Habilita el borrado lógico para no perder el historial de gastos si la categoría deja de usarse.


#### Transaction: clase entidad de la tabla de transacciones
src/transactions/entities/transaction.entity.ts

En TypeORM, cuando existe una relación entre dos tablas (en este caso, 1 Categoría a N Transacciones),
ambas clases necesitan hacer referencia recíproca a sus tipos de TypeScript

@Entity('categories')
##### Indica a TypeORM que esta clase representa una tabla en la base de datos SQL y que la tabla se llamará físicamente categories.

@PrimaryGeneratedColumn()
##### Declara el campo id como la clave primaria (Primary Key) y le indica al motor SQL que genere su valor de forma autoincremental (1, 2, 3...).

@Column({ unique: true })
##### Crea una columna de texto para el campo name con una restricción de unicidad a nivel de base de datos (UNIQUE).
Si intentas guardar dos categorías llamadas "Comida", la base de datos rechazará la segunda operación automáticamente.

@Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
##### type: 'decimal' / precision: 10, scale: 2: Representa números con centavos exactos
(máximo 10 dígitos en total y 2 decimales, ej. 99999999.99) evitando errores de redondeo flotante típicos en sistemas financieros
`nullable: true`: Marca el campo como opcional.
Si el usuario no quiere establecer un límite de presupuesto mensual, la base de datos guardará un valor NULL.

@Column({ default: true })
##### Define la columna booleana isActive con un valor por defecto true.
Sirve para aplicar borrado lógico (soft delete): si el usuario ya no usa una categoría, se cambia a false en lugar de borrar el registro
preservando el historial de transacciones pasadas.

@OneToMany(() => Transaction, (transaction) => transaction.category)
##### Define la relación Uno a Muchos: una categoría puede tener muchas transacciones asociadas

primer argumento () => Transaction usa una función flecha para resolver la referencia de forma perezosa (lazy loading),
evitando problemas de dependencias circulares al arrancar Node.js.

segundo argumento (transaction) => transaction.category
indica a TypeORM cuál es la propiedad dentro de la entidad Transaction que apunta de vuelta a esta categoría


## 3. Entidad Transaction

Enlaza directamente con la entidad Category que acabamos de definir

src/transactions/entities/transaction.entity.ts

```
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from '@categories/entities/category.entity';
import { TransactionType } from '@transactions/enums/transaction-type.enum';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({
    type: 'varchar',
    enum: TransactionType,
  })
  type: TransactionType;

  @Column()
  description: string;

  @Column({ type: 'date' })
  date: Date;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Category, (category) => category.transactions, {
    nullable: false,
  })
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @Column()
  categoryId: number;
}
```


`@ManyToOne(() => Category, ...)`
Representa el lado "Muchos" de la relación
Muchas transacciones pertenecen a una sola categoría.

`nullable: false`
Exige a nivel de base de datos que ninguna transacción exista sin estar vinculada a una categoría.

`@JoinColumn({ name: 'categoryId' })`
Especifica la clave foránea (Foreign Key) explícita en la tabla

`categoryId: number`: Exponer la columna del ID de la categoría permite realizar consultas o asignaciones directas
sin necesidad de cargar todo el objeto de la entidad relacionadora.

`@CreateDateColumn()`: TypeORM asigna automáticamente la fecha y hora exacta
en la que se registra el movimiento en la base de datos.


decorador y campo:
rol clave en la integridad de los datos financieros del sistema

@Entity('transactions')
Define que esta clase se mapeará a una tabla llamada transactions en la base de datos SQL.

@PrimaryGeneratedColumn()
Declara el campo id como la clave primaria autoincremental de la tabla (1, 2, 3...).

@Column({ type: 'decimal', precision: 10, scale: 2 })
Almacena el monto monetario
La precisión decimal de 10 dígitos con 2 decimales asegura exactitud en los centavos (ejemplo: 1250.75)
evitando los errores de redondeo flotante nativos de JavaScript al operar con dinero.

@Column({ type: 'varchar', enum: TransactionType })
Restringe los valores permitidos en la base de datos exclusivamente a las opciones definidas en el enumerado: 'INCOME' o 'EXPENSE'.

@Column() en description
Crea un campo de texto estándar (VARCHAR) para detallar el concepto del movimiento
(ej. "Compra de supermercado").

@Column({ type: 'date' }) en date
Guarda la fecha real en la que se realizó la operación financiera (año, mes y día)
permitiendo filtrar reportes por periodos específicos sin depender de la hora del servidor.

@CreateDateColumn() en createdAt
Genera automáticamente una marca de tiempo (timestamp) con la fecha y hora exacta en la que el registro se insertó en la base de datos
Es útil para auditoría e historial.


@ManyToOne(() => Category, ..., { nullable: false })
Establece el lado "Muchos a Uno" de la relación:

() => Category: Apunta a la entidad de categorías usando una función perezosa para evitar dependencias circulares.
(category) => category.transactions: Indica cuál es el campo inverso en la entidad Category que mantiene la colección de movimientos
nullable: false: Exige integridad referencial estricta. Ninguna transacción puede ser creada huérfana, sin una categoría asociada.


@JoinColumn({ name: 'categoryId' }) y categoryId: number
Crea explícitamente la columna clave foránea (Foreign Key) en la tabla
Exponer categoryId como un campo numérico primario permite asignar o consultar directamente la categoría asociada enviando únicamente su ID
sin necesidad de instanciar o cargar todo el objeto Category.



## 4. DTO para la creación de categorías: CreateCategoryDto

#### !!! objeto valida y documenta los datos recibidos en las peticiones HTTP antes de que lleguen al servicio de negocio

src/categories/dto/create-category.dto.ts

```
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
} from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'Nombre único de la categoría',
    example: 'Alimentación',
  })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El nombre de la categoría es obligatorio' })
  name: string;

  @ApiPropertyOptional({
    description: 'Límite de presupuesto mensual opcional para la categoría',
    example: 500.0,
    minimum: 0,
  })
  @IsOptional()
  @IsNumber({}, { message: 'El límite de presupuesto debe ser un número' })
  @Min(0, { message: 'El límite de presupuesto debe ser un número mayor o igual a 0' })
  monthlyBudgetLimit?: number;
}
```

@ApiProperty() y @ApiPropertyOptional():
##### Documentan automáticamente la estructura del cuerpo de la petición (Request Body) en la interfaz visual de Swagger (/api/docs), incluyendo ejemplos y descripciones.

@IsString() y @IsNotEmpty():
Aseguran que el campo name esté presente y no sea una cadena vacía o un espacio en blanco.

@IsOptional():
Indica que el campo monthlyBudgetLimit no es obligatorio al crear la categoría
Si no se envía en el JSON, la validación se aprueba y se guarda como null o undefined.

@IsNumber() y @Min(0):
Si se proporciona un límite de presupuesto, garantiza que sea un valor numérico coherente y no un valor negativo.


## 5. CreateTransactionDto

definir la estructura de entrada y las reglas de validación al registrar un movimiento financiero:

```
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEnum,
  IsDateString,
  IsPositive,
  Min,
} from 'class-validator';
import { TransactionType } from '@transactions/enums/transaction-type.enum';

export class CreateTransactionDto {
  @ApiProperty({
    description: 'Monto de la transacción (debe ser mayor a 0)',
    example: 150.50,
    minimum: 0.01,
  })
  @IsNumber({}, { message: 'El monto debe ser un número' })
  @Min(0.01, { message: 'El monto debe ser estrictamente mayor a 0' })
  amount: number;

  @ApiProperty({
    description: 'Tipo de movimiento financiero',
    enum: TransactionType,
    example: TransactionType.EXPENSE,
  })
  @IsEnum(TransactionType, {
    message: 'El tipo debe ser INCOME o EXPENSE',
  })
  type: TransactionType;

  @ApiProperty({
    description: 'Descripción o concepto del movimiento',
    example: 'Compra de supermercado',
  })
  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La descripción es obligatoria' })
  description: string;

  @ApiProperty({
    description: 'Fecha de la operación en formato ISO (YYYY-MM-DD)',
    example: '2026-08-25',
  })
  @IsDateString(
    {},
    { message: 'La fecha debe tener un formato ISO válido (ej. YYYY-MM-DD)' },
  )
  date: string;

  @ApiProperty({
    description: 'Identificador de la categoría a la que pertenece',
    example: 1,
  })
  @IsNumber({}, { message: 'El ID de la categoría debe ser un número' })
  @IsPositive({ message: 'El ID de la categoría debe ser un número positivo' })
  categoryId: number;
}
```

@Min(0.01): Impide registrar transacciones con valores cero o negativos a nivel de la capa de entrada.

@IsEnum(TransactionType): Asegura que solo se acepten las cadenas 'INCOME' o 'EXPENSE'.

@IsDateString(): Valida que el parámetro enviado sea una representación en texto de una fecha válida en estándar ISO 8601 (por ejemplo, 2026-08-25).

@IsPositive(): Garantiza que la clave foránea categoryId sea un entero válido mayor que cero antes de consultar la base de datos.



## 6. FilterTransactionDto

src/transactions/dto/filter-transaction.dto.ts

gestionar el filtrado mediante parámetros de consulta (Query Parameters):

```
import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsOptional,
  IsNumber,
  IsDateString,
  IsPositive,
} from 'class-validator';
import { Type } from 'class-transformer';
import { TransactionType } from '@transactions/enums/transaction-type.enum';

export class FilterTransactionDto {
  @ApiPropertyOptional({
    description: 'Filtrar por tipo de transacción (INCOME o EXPENSE)',
    enum: TransactionType,
    example: TransactionType.EXPENSE,
  })
  @IsOptional()
  @IsEnum(TransactionType, {
    message: 'El tipo debe ser INCOME o EXPENSE',
  })
  type?: TransactionType;

  @ApiPropertyOptional({
    description: 'Filtrar por ID de la categoría',
    example: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'El ID de la categoría debe ser un número' })
  @IsPositive({ message: 'El ID de la categoría debe ser un número positivo' })
  categoryId?: number;

  @ApiPropertyOptional({
    description: 'Fecha de inicio para el rango de búsqueda (YYYY-MM-DD)',
    example: '2026-08-01',
  })
  @IsOptional()
  @IsDateString(
    {},
    { message: 'La fecha de inicio debe tener un formato ISO válido (YYYY-MM-DD)' },
  )
  startDate?: string;

  @ApiPropertyOptional({
    description: 'Fecha de fin para el rango de búsqueda (YYYY-MM-DD)',
    example: '2026-08-31',
  })
  @IsOptional()
  @IsDateString(
    {},
    { message: 'La fecha de fin debe tener un formato ISO válido (YYYY-MM-DD)' },
  )
  endDate?: string;
}
```

@Type(() => Number) de class-transformer
Dado que los parámetros de consulta URL (Query Parameters) siempre se reciben como cadenas de texto (string),
este decorador transforma automáticamente la cadena a un número antes de que class-validator ejecute las reglas @IsNumber() y @IsPositive().

@IsOptional() en todos los campos:
Permite realizar búsquedas flexibles
un cliente puede filtrar solo por rango de fechas, solo por categoría
por ambos o no enviar filtros (obteniendo el listado completo).

#### Compatibilidad con ValidationPipe:
Al usar @IsOptional() combinado con transformaciones de tipo
evitamos falsos positivos al parsear la URL.



# 2. DTOs de Entrada y Validación (Contratos)




# Testing
