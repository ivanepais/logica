
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





# 3. Capa de Datos (DTOs, Validaciones y Base de Datos)

Creación de `DTOs` (Data Transfer Objects).
`Validación de datos` con class-validator y class-transformer mediante el ValidationPipe global.
Integración de un `ORM` (TypeORM o Prisma) para persistencia con PostgreSQL/SQLite.



# 4. Arquitectura Modular Avanzada

Creación de Feature Modules independientes.
Módulos compartidos (Shared Modules) y globales (@Global()).
Variables de entorno con @nestjs/config.




# 5. Middleware, Interceptores y Filtros de Excepción

Captura y formateo de errores globales con Exception Filters.
Transformación de respuestas con Interceptors.
Protección de rutas básicas mediante Guards




