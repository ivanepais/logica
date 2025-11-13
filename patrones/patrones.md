Patrones de Diseño


## 1. Fundamentos y Conceptos Iniciales

Definición y propósito de los patrones de diseño (soluciones probadas a problemas comunes).

Beneficios de su uso (reutilización, vocabulario común, estandarización de buenas prácticas).


Principios de Diseño: POO (Encapsulamiento, Herencia, Polimorfismo)

SOLID (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion).

Los patrones de diseño son una aplicación práctica de estos principios.

Notación: UML (Unified Modeling Language), especialmente diagramas de clases, para visualizar la estructura del patrón.


## 2. Patrones Creacionales (Creational Patterns)

##### Gestionan la instanciación de objetos: haciendo que el sistema sea independiente de cómo se crean, componen y representan sus objetos.

Singleton: Garantiza que una clase tenga una sola instancia y proporciona un punto de acceso global a ella.

Factory Method: Define una interfaz para crear un objeto, pero deja que las subclases decidan qué clase instanciar.

Abstract Factory: Proporciona una interfaz para crear familias de objetos relacionados sin especificar sus clases concretas.

Builder: Separa la construcción de un objeto complejo de su representación, permitiendo que el mismo proceso de construcción cree diferentes representaciones.

Prototype: Especifica los tipos de objetos a crear mediante la clonación de una instancia prototipo.


## 3. Patrones Estructurales (Structural Patterns)

##### Se enfocan en la composición de clases y objetos para formar estructuras más grandes y flexibles: 

Adapter (o Wrapper): Permite que clases con interfaces incompatibles trabajen juntas, envolviendo una interfaz existente.

Decorator: Añade responsabilidades dinámicamente a un objeto (decorándolo) sin modificar su clase.

Facade: Proporciona una interfaz unificada y simplificada a un subsistema complejo.

Composite: Compone objetos en estructuras de árbol para representar jerarquías de parte-todo. Permite que los clientes traten objetos individuales y compuestos de manera uniforme.

Bridge: Desacopla una abstracción de su implementación, permitiendo que ambas varíen independientemente.

Flyweight: Utiliza la compartición para admitir un gran número de objetos de grano fino de forma eficiente.

Proxy: Proporciona un sustituto o marcador de posición para otro objeto para controlar el acceso a él.


## 4. Patrones de Comportamiento (Behavioral Patterns)

##### Se ocupan de la comunicación y la asignación de responsabilidades entre objetos.

Strategy: Define una familia de algoritmos, los encapsula y los hace intercambiables, permitiendo seleccionar el algoritmo en tiempo de ejecución.

Observer: Define una dependencia uno-a-muchos entre objetos, de modo que cuando un objeto cambia de estado, todos sus dependientes son notificados y actualizados automáticamente.

Command: Encapsula una solicitud como un objeto, permitiendo parametrizar clientes con diferentes solicitudes, poner las operaciones en cola o registrar.

Iterator: Proporciona una forma de acceder secuencialmente a los elementos de un objeto agregado sin exponer su representación subyacente.

Template Method: Define el esqueleto de un algoritmo en una operación, delegando algunos pasos a las subclases.

Chain of Responsibility: Evita acoplar el remitente de una solicitud a su receptor al dar a más de un objeto la oportunidad de manejar la solicitud.

Mediator: Define un objeto que encapsula cómo un conjunto de objetos interactúa. Promueve el acoplamiento débil.

State: Permite que un objeto altere su comportamiento cuando su estado interno cambia. El objeto parecerá cambiar de clase.

Memento: Captura y externaliza el estado interno de un objeto sin violar el encapsulamiento, de modo que el objeto pueda restaurarse a este estado más tarde.

Visitor: Representa una operación a realizar sobre los elementos de una estructura de objetos. Permite definir una nueva operación sin cambiar las clases de los elementos.


## 5. Práctica y Aplicación Avanzada

### MVC (Modelo-Vista-Controlador)

### Inyección de Dependencias (DI/IoC)

### Repository


### Refactorización: identificación de "code smells", seguido de aplicación de patrones de diseño para refactorizar y mejorar el código existente.



# MCV 

## 1. Fundamentos y Conceptos Clave 

### MVC: un patrón arquitectónico que separa las preocupaciones de una aplicación en tres componentes principales

### Separación de Responsabilidades (SoC - Separation of Concerns)

### Patrones Relacionados: como Observer (la Vista observa al Modelo).


Tipos de MVC: 

MVC "pasivo" (típico en aplicaciones de escritorio)

### MVC "activo" o MVC basado en web (donde el Controlador maneja la petición y la Vista es regenerada).


## 2. Componentes Principales de MVC

##### Responsabilidades específicas de cada componente


### El Modelo (Model)

##### Responsabilidad: Contiene la lógica de negocio, los datos y las reglas para gestionarlos.

### Acceso a Datos: Interactúa con bases de datos (SQL, NoSQL), APIs, o archivos.

### Estado: Mantiene el estado de la aplicación.

### Independencia: No tiene conocimiento directo de la Vista ni del Controlador.

### Notificación: Si es un modelo "activo", debe notificar a la Vista cuando sus datos cambian (usando el patrón Observer).


### La Vista (View)

##### Responsabilidad: Es la capa de presentación; muestra los datos al usuario y captura la entrada del usuario.

### Interfaz de Usuario (UI): Renderiza el HTML, XML, JSON, o elementos gráficos.

### Mínima Lógica: Contiene solo la lógica necesaria para mostrar los datos que recibe del Modelo. No debe contener lógica de negocio.

### Independencia: No manipula el Modelo directamente.


### Controlador (Controller)

##### Responsabilidad: Actúa como el intermediario entre el Modelo y la Vista. Maneja los eventos o peticiones del usuario.

### Manejo de Peticiones: Recibe la entrada del usuario (ej. clics, envío de formularios, peticiones HTTP).

### Llamada al Modelo: Determina qué datos necesita y le pide al Modelo que realice las operaciones necesarias.

### Selección de Vista: Decide qué Vista debe mostrarse en función del resultado de la operación del Modelo.


## 3. Flujo de Interacción (Request Life Cycle)

##### Interacción entre los tres componentes, especialmente en el contexto de una aplicación web:

### 1. El Usuario interactúa con la Vista.

### 2. La Vista genera una petición (ej. HTTP GET/POST) al Controlador.

### 3. El Controlador recibe la petición y llama al Modelo para actualizar o recuperar datos.

### 4. El Modelo realiza la operación y devuelve los datos al Controlador.

### 5. El Controlador selecciona la Vista apropiada y le pasa los datos del Modelo.

### 6. La Vista utiliza los datos para generar una respuesta que se muestra al Usuario.


### CRUD: operaciones de Crear, Referenciar (leer), Update (actualizar) y Delete (eliminar).

### Ruteo (Routing): Aprende cómo el framework mapea las peticiones (URLs) a los métodos específicos dentro de los Controladores.

### Vistas Dinámicas: Domina los motores de plantillas (Templating Engines) (como Jinja2, Blade, o Razor) que se usan para combinar los datos del Modelo con la estructura de la Vista (HTML).


## 4. Patrones Derivados y Alternativos

### MVP (Model-View-Presenter)

##### El Presentador reemplaza al Controlador y actúa como intermediario.

##### La Vista y el Presentador se comunican directamente. Es común en Xamarin o Android.


### MVVM (Model-View-ViewModel)

##### El ViewModel se encarga de exponer los datos del Modelo de forma que sean fácilmente consumibles por la Vista a través del Data Binding.

##### Es clave en frameworks como Angular, React (parcialmente) o WPF.


### MVT (Model-View-Template)

##### La variante específica de Django, que es muy similar a MVC pero con diferentes nombres.



# MVC Web

## 1. Entorno Web

### Protocolo HTTP

#### Métodos GET, POST, PUT, DELETE

#### Códigos de estado (200, 301, 404, 500, etc.)

#### Petición (Request) y Respuesta (Response)


### Sesión y Estado

#### HTTP es un protocolo sin estado (stateless).

#### El estado se mantiene usando Cookies y Sesiones en el lado del servidor.


### Arquitectura Cliente-Servidor: El navegador (cliente) solicita recursos al servidor.


## 2. Ciclo de Solicitud-Respuesta

##### El flujo de datos y control que diferencia la implementación web del MVC tradicional.

### Enrutador (Router): componente que intercepta la petición HTTP entrante.

#### Mapeo de URL: el Router traduce una URL a un método específico dentro de un Controlador

```
/productos/123 -> ProductsController.show(123)
```

#### Manejo de Métodos: asignan los métodos HTTP (GET, POST, etc.) a diferentes acciones del Controlador.


### Controlador (Controller)

#### Rol Principal: Orquestador de la Petición

##### Recibe la petición, valida la entrada, llama a la lógica de negocio y selecciona la vista.

#### 1. Recibir Datos de la Petición: Acceder a parámetros de URL, datos de formularios (POST) y encabezados.

#### 2. Validación: Asegurar que los datos de entrada son válidos.

#### 3. Llamada al Modelo: Invocar los métodos del Modelo para obtener o modificar datos.

#### 4. Seleccionar la Respuesta: Decidir si renderizar una Vista, redirigir, o devolver un JSON/XML.


### Modelo (Model)

#### Rol: Acceso a datos y Lógica de Negocio.

#### Patrones Relacionados:

##### Active Record o Data Mapper: los frameworks manejan la interacción con la base de datos (ORMs - Object-Relational Mappers).

##### Transacciones: Asegurar la integridad de los datos.


### Vista (View)

#### Función: Generar la Interfaz de Usuario (HTML).

#### Motores de Plantillas (Templating Engines): lógica mínima permitida en las Vistas (bucles y condicionales para la presentación).

#### Parciales (Partials): Uso de pequeños bloques de Vista reutilizables (como headers o footers).


### CRUD: Gestión (Create, Read, Update, Delete)

### Autenticación y Autorización: login, logout y restricciones de acceso (usando Middlewares o filtros en el Controlador).


## 4. Avanzado

### API y RESTful MVC: el Controlador puede devolver datos puros (JSON) en lugar de HTML, siguiendo los principios REST.

### Inyección de Dependencias (DI/IoC): frameworks usan contenedores de DI para instanciar Controladores y otros servicios, reduciendo el acoplamiento.
 
### Patrones Complementarios:

#### Repository Pattern: Para desacoplar el Modelo de la capa de persistencia (base de datos).

#### Service Layer: Para extraer lógica de negocio compleja fuera del Controlador, manteniendo al Controlador ligero.



# Inyección de Dependencias (DI/IoC)

## 1. Fundamentos

### Inversión de Control (IoC - Inversion of Control)

#### El flujo de control de la aplicación se invierte

##### En lugar de que tus clases instancien y controlen a sus dependencias

##### Un Contenedor IoC (o framework) se encarga de esto

#### IoC vs. DI: IoC es el principio, y DI es una de las formas más comunes de implementarlo.

#### SOLID: D de SOLID (Dependency Inversion Principle).

##### Este principio dicta que los módulos de alto nivel no deben depender de módulos de bajo nivel

##### Ambos deben depender de abstracciones (interfaces).


### Problema del Acoplamiento Fuerte

#### Acoplamiento: una clase crea directamente a sus dependencias (acoplamiento fuerte).

##### Ejemplo: ClaseA tiene la línea ClaseB b = new ClaseB();.


## 2. Inyección de Dependencias (DI - Dependency Injection)

##### DI es la implementación práctica de IoC, donde una clase recibe sus dependencias desde fuera, en lugar de crearlas internamente.

### Tipos de Inyección:

#### 1. Inyección por Constructor (Constructor Injection):

##### Mecanismo Preferido. Las dependencias se pasan como argumentos del constructor.

##### Ventaja: Garantiza que el objeto esté siempre en un estado válido con todas sus dependencias.


#### 2. Inyección por Propiedad/Setter (Setter Injection):

##### Las dependencias se pasan a través de métodos setter o propiedades públicas después de la instanciación.

##### Uso: Para dependencias opcionales o para romper ciclos de dependencia.


#### 3. Inyección por Interfaz (Interface Injection):

##### Una clase implementa una interfaz que tiene un método para inyectar la dependencia. Menos común.


### Implementación Manual vs. Automática

#### DI Manual (Poor Man's DI): inyección de dependencias sin usar un framework o contenedor

#### DI Automática: usar un Contenedor IoC que gestione el ciclo de vida de los objetos automáticamente.


## 3. Contenedores IoC y Scopes (Ámbitos)

##### Los Contenedores IoC son frameworks que automatizan la gestión de las dependencias, instanciando y proporcionando objetos cuando se necesitan 

### Configuración y Registro

#### Registrar (mapear) las abstracciones con sus implementaciones concretas en el Contenedor:

##### Registro Básico: Mapear IInterface a ClaseConcreta.

##### Convenciones: Uso de scaneo de ensamblados o carpetas para registro automático.


### Ciclo de Vida (Scopes)

##### Hay diferentes ámbitos de vida (scopes) de los objetos gestionados por el Contenedor:

#### 1. Transient/Per-Dependency: Se crea una nueva instancia cada vez que se solicita.

#### 2. Singleton/Application-wide: Se crea una única instancia para toda la vida de la aplicación.

#### 3. Scoped/Per-Request: Se crea una única instancia por cada ámbito definido (comúnmente una petición HTTP). 

##### Vital en desarrollo web.


## 4. Avanzado

### Unit Testing y Mocking

#### El mayor beneficio: la DI permite inyectar mocks (objetos simulados) y stubs en tu código para probar una clase de forma aislada.


### Patrones Complementarios:

#### Service Locator (Anti-Patrón): Entender la diferencia con DI y por qué a menudo se le considera un anti-patrón.

#### AOP (Aspect-Oriented Programming): Ver cómo los contenedores IoC facilitan la implementación de AOP (ej. logging o seguridad).


### Refactorización: Identifica código con acoplamiento fuerte y refactorízalo para usar Inyección por Constructor e interfaces, haciéndolo extensible y testeable.



# Repository

##### Se utiliza para aislar la capa de acceso a datos de la lógica de negocio.


## 1. Fundamentos y Problema a Resolver

### Contexto Arquitectónico

#### Capas de la Aplicación: Entender el modelo de capas tradicional (Presentación, Negocio/Dominio, Acceso a Datos/Persistencia).

#### Lógica de Persistencia: Identificar el problema de que la lógica de negocio esté acoplada a detalles de base de datos (SQL, ORM, APIs externas, etc.).

#### Dominio vs. Infraestructura:

##### El Patrón Repository es parte de la capa de Infraestructura (persistencia)

##### Pero sirve a la capa de Dominio (negocio). 


### Patrón Repository

#### Actúa como una colección en memoria de objetos de dominio.

#### Los clientes (la capa de negocio) le piden objetos y le especifican qué objetos almacenar, sin preocuparse por los detalles de cómo se hace la persistencia.

##### Objetivo: Aislar la aplicación de la tecnología de acceso a datos.


## 2. Componentes y Estructura

##### Se implementa típicamente con dos componentes principales: la Interfaz y la Implementación.


### Interfaz del Repositorio (Abstracción):

#### Uso de Abstracciones: El repositorio debe definirse como una Interfaz (o clase abstracta).


#### Métodos Centrados en el Dominio: Los métodos deben hablar en el lenguaje del dominio y manipular Entidades de dominio

##### Evita términos específicos de la base de datos (ej. en lugar de ejecutar_sql_para_encontrar_usuario, usa obtener_por_nombre_usuario).


#### Métodos CRUD Estándar:

##### ObtenerPorId(id)

##### ObtenerTodos()

##### Agregar(entidad)

##### Actualizar(entidad)

##### Eliminar(entidad)


#### Métodos Específicos

##### Implementar consultas complejas del dominio (ej. obtener_clientes_activos_en_region(region)).


### Implementación del Repositorio (Concreción):

#### Dependencia de Datos: Esta es la única clase que depende de tecnologías externas.

#### Mapeo ORM: Si se usa un ORM (Entity Framework, Hibernate, Django ORM), esta clase traduce las peticiones de la interfaz a las llamadas ORM correspondientes.

#### Múltiples Implementaciones: diferentes implementaciones para la misma interfaz

##### SqlUserRepository : IUserRepository; InMemoryUserRepository : IUserRepository (ideal para pruebas).


## 3. Integración con Inyección de Dependencias (DI)

##### Repository es inútil sin DI, ya que el objetivo es precisamente inyectar la dependencia de datos.

### Principio DIP de SOLID: La capa de Servicio/Negocio debe depender de la Interfaz del Repositorio, no de su implementación concreta (Inversión de Dependencia).

### Registro en Contenedor IoC: Configurar el Contenedor de DI para que, cuando se solicite la Interfaz (IUserRepository), devuelva la implementación concreta elegida (SqlUserRepository).

### Inyección en Servicios: Demostrar cómo una Clase de Servicio recibe el repositorio a través de su constructor:

```
public class UserService 
{
    private readonly IUserRepository _userRepository;

    // Inyección por constructor
    public UserService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public User GetUserDetails(int id) 
    {
        // Lógica de negocio usa el repositorio, sin saber cómo obtiene los datos.
        return _userRepository.ObtenerPorId(id); 
    }
}
```


## 4. Avanzado 

### Mocking: probar UserService, puedes inyectar un Mock o un InMemoryUserRepository para aislar la prueba y asegurar que la lógica de negocio funcione sin requerir una base de datos real

##### Es el principal beneficio práctico.


### Patrones Complementarios:

#### Unidad de Trabajo (Unit of Work - UoW): patrón que a menudo se usa con Repositories

##### El UoW gestiona las transacciones y asegura que todas las operaciones de diferentes repositorios se completen como un solo conjunto atómico (transacción).


#### CQRS (Command Query Responsibility Segregation): se puede usar un repositorio solo para comandos (escritura) y una capa separada para consultas (lectura), mejorando el rendimiento. 


### Refactorización: tomar algo existente con acceso a datos "sucio" y refactorízalo para implementar el Patrón Repository.


# Service Layer

 El patrón capa de servicio está orientado al software empresarial. 

 Tiene como premisa evitar que a largo plazo, las futuras modificaciones, implementaciones o funcionalidades afecten al software/programa
 
 También aprovecha funcionalidades de inyección de dependencias que determina contenedores y clases para organizar el software. 


 Service Layer -> DI
 
 Contenedor DI -> Clases
 

 Servicio: 

  En el software empresarial, un servicio va a ser el resultado de aislar cada una de las funcionalidades que ofrece una app, en un clase o módulo independiente.  

  Ej: endpoint que ejecuta una lógica de negocio, la capa de servicio es el resultado de mover a una clase separada a esa lógica.  

  El endpoint puede contener la funcionalidad de un carro de compra y confirmarlo con la base de datos de inventario para comprobar que el carro de la compra realizarce dado que hay stock de productos en la tienda. 


  Aislar cada:     
  Funcionalidad 1
  Funcionalidad 2  ---> en Clase/Módulo independiente
  Funcionalidad 3
  ...
  

  No creamos la lógica de negocio en un controlador común que ejecutá una petición de compra. 

  Creamos la lógica de negocio en una clase de servicio separada que va a ser quien la contenga de manera única. 

  
  Del Controlador al Servicio: 

  controlador {        servicio {
    //...        --->   //solo funcionalidad única
  }                    }
 

  En angular, podemos tener un crud que ofrece distintas formas de visualizar información: con una tabla, cuadrícula, filtros o lista de detalle para un elemento, etc 
 
  En vez de tener el código que da las peticiones de red en los botones event listener de la app, movemos el código que permite descargar esos datos de la tabla de modo que nos quede un servicio en una clase separada

  Incluso podemos crear un servicio para las peticiones HTTP y otro servicio de tabla que utilize el servicio de peticiones HTTP como si fuese un cliente intermedio para poder efectuar esas peticiones. 


  controlador {     servicio {
    //funciones      //función única
    //eventos       }   
    //botones 
  }

     
  Un servicio no es más que una clase en la cual separamos toda la lógica de negocio que sirve para hacer una operación concreta. 

  Cuando creamos un servicio, estamos creando clases o módulos independientes que el detalle más importante no dependa de la capa presentacional/vista o cualquier otra particularidad que pueda tener el código de esa lógica de negocio. 
  
  
  servicioHTTP{//...}
        
        ^
  servicioTabla{//...}

  
  Ej: en los controladores vamos a tener un montón de accesos especializados para obtener información que nos venga de las peticiones HTTP como por ejemplo sacar los parámetros de una petición, consultar cookie. 

  Pero es posible estar usando otros medios como una integración REST, SOAP o gRCP dónde la forma de acceder a los parámetros es diferente. 

  Tener que implementar multiples veces un servicio haciendo que cada vez saque los parametros de un lugar a otro puede provocar que el código este duplicado o simplemente porque cada vez tenemos que sacarlo de un sitio distint. 

  
  Cuando nos llevamos a un servicio separado toda esa lógica de negocio, lo que estamos haciendo es unificar el acceso a los datos que necesita la función para operar y lo que estamos haciendo es descartar inmediatamente cualquier acceso especifico y tener una interfaz más generica. 

  Por ej, si tenemos que fabricar un servicio que nos consiga la información si un producto o no está agotado dentro de la tienda, ese servicio lo único que tendra es un único parametro que es el identificador del producto que es su dato de entrada. 

 
  Controlador {  
    //...
  }


  REST/SOAP/gRPC

 
  servicioID id->(//....)-> true/false o int++


  Y como respuesta lo único que devolverá será true/según si el producto está en stock o no o también un contador que diga cuantas unidades hay disponibles.  

  Y será cosa del controlador o la integración REST/SOAP/gRPC interpregar la salida que proporciona el servicio y convertirlo en una respuesta especifica para la capa de presentación. 

  Con esto conseguimos aislar la complejidad que supone hacer una operación como sacar la información sobre si hay un producto en stock o no. 

  El servicio no tiene en cuenta si forma parte de una petición HTTP o gRPC, dado que lo único que sabe el servicio es que le entra un dato string como parametro y tiene que devolver un booleano o un entero. 

 
  Si más adelante aparece la necesidad de incorporar en la tienda un servicio que le permita a los usuarios introducir el su número de telefono y reciban un mensaje sobre un producto agotado está en stock. 

  En ningún momento le tenemos que enseñar al servicio que ahora tiene que ser compatible con sms, el sms va a ser una capa presentacional más; lo que hará el controlador del sistema sms será hacer uso del servicio id para consultar el stock de un producto, interpretar la respuesta y enviarlo como si fuese un sms.   


  servicioSMS(//...) -> servicioID


  Los servicios no se tiene que conocer entre si, lo cual favorece la reutilización de código dado que no hace falta duplicarlo cada vez que hay que incorporar una nueva funcionalidad para un nuevo requisito. 

  
  Al hacer uso de la capa de servicio tenemos la ventaja de que lo separamos y es más facil del mantener. 

  También la clase presentacional como el controlador o la integración REST/SOAP/gRPC pueden tratar al servicio como si fuese una caja negra, no le importa si el servicio para dar una respuesta tiene que consultar una base de datos o 20 o hacer una petición a otro servidor web; todo lo que tiene que hacer es mandar un parametro y devolverá una respuesta; no tiene encuenta como lo hace. 

  Tambien podemos la ventaja separar en capa de servicios el código fuente de la lógica de negocio de la app, podemos hacer pruebas automatizadas se una manera simple. 


  Supongamos la la integración de sms la queremos validar mediante un sistema de pruebas automaticas. 

  Si toda la lógica que comprueba que si hay inventario o no, estuviese dentro del sistema de sms. 

  Tendríamos que probar todo el stack de sms, hace más complicado de realizar pruebas. 

  Si aislamos en una clase de tipo servicio la lógica que se ocupa de consultar una base de datos (servicioID), ahora es una clase mucho más barata de instanciar y probarla, dado que solo tenemos que probar las entradas y salidas sin tener que falsificar todo un stack de sms.  

  Tendríamos que probar todo el stack de sms pero luego el numero de pruebas va a ser menor. 

 
  Pruebas automatizadas: 
  
   Controlador {  
    //...
  }


  REST/SOAP/gRPC


  servicioHTTP{//...}        
        ^
  servicioTabla{//...}
 
  servicioId (//...)
        ^ 
  servicioSMS(//...)



 Uso de la capa de servicio: Cuándo hace falta aplicarla

  Son útiles cuando tenemos que crear a malla de componentes. 
 

  Capas de la APP: 
   
   Disponemos en nuestra app, una capa servicios; justo debajo de la capa controlador y por encima de la capa de datos, que permite disponer de una serie de clases que se ocupan de incorporar los distintos servicios que puede ofrecer la app.    
 
   Los servicios se pueden comunicar entre si, algunos pueden depender de otros; facilitan la reutilización y el mantenimiento. 

   Cuando querramos incorporar un nuevo controlador, si ya tenemos implementada la lógica de negocio (servicios), todo lo que tenemos que hacer es acudir a esos servicios.  
  
   Layers: 
   
    controllers

    ------

    servicios

     servicioHTTP{//...} 
        ^
     servicioTabla{//...}
        ^
     servicioId (//...)
        ^ 
     servicioSMS(//...)

    ------

    datos 


  También supone un coste en el diseño y en la organización de código y que de por si es una capa de indirección. 

  Tienen que llamarse entre si, desde el controlador a la capa se servicios. 


  Es necesario saber cuando no deberíamos usarlo: 

   Si la lógica de negocio de la aplicación no va a ser reutilizada por varios endpoints o en general no va a haber necesidad de utilizarla desde distintos puntos de la app. 

   Es posible que crear una capa de indirección más haga el código más complejo. 

 
  Resumen: 

   Aplicando una capa de servicios podemos dividir mejor las responsabilidades de nuestro código en clases individuales que dirijan la parte especifica de la lógica de negocio de la app.  



# Inversión de Control e Inyección de Dependencias

 No son lo mismo aunque la inyección de dependencias es un tipo de inversión de control y hay más tipos de inversión de control que no se corresponden con la inyección de dependencias, la inversión de control es un concepto más generico. 

 
 Inversión de control: 
  
  Ej: Al aprender a programar, uno de los primeros programas que se enseñan es 'Hola Mundo!' que consiste en imprimir una cadena. 

  El 'Hola Mundo' esta contenido en una función o archivo principal que cuando se ejecuta lanza o muestra las instrucciones. 

  En este caso estamos controlando el 100% del código, describimos todas las cosas que van a pasar.  
 
  
  main(){
   println('Hola Mundo!')
   
   if (){
     print()
   }else{
    print()
   }
  }
 
 
  

  Cuando ponemos código en una función principal, estamos dirigiendo el 100% de nuestro programa, estamos controlando lo que hace el programa. 
  
  Si hacemos un tipico problema de alumnos, profesores, asignaturas: 
   
   
   Elige una opción:
    1. Alta de alumnos
    2. Alta de profesores
    3. Alta de asignaturas
    
   Introduce una opción: ...

 

  Esta pensado para aplicar estructuras de control, usando if, condicionales, etc. 

  Cuando el usuario tiene que introducir datos, debemos captar la entrada con la función que tiene para ello el lenguaje y de acuerdo con el valor introducido, sucede una u otra cosa. 

  Como programadores nos ocupamos de usar todas las herramientas necesarias para crear el programa, nos ocupamos de las funciones, parametros, las variables, los datos, manejo de errores, etc. 

  Todo este procedimiento es lo contrario a IoC. 

 
  Casos de IoC: 

   Cuando hacemos una app de escritorio usando windowsForm o javaSwing o estamos haciendo una app web moderna con un framework como ExpressJS. 

   No trabajamos teniendo el control de las funciones, parametros, errores, etc. 

   Al crear una interfaz gráfica con javaSwing, creamos los botones y luego le asignamos eventos. 

   Los eventos tiene acciones o funciones para cuando se utilize un botón, produzca una acción. 
   
   
   addEventListener(()-> {
    //...
   })
  
    
 
   En express podemos crear una acción cuando se visita determinada ruta: 

    
    app = express()
    
    app.get("/", () -> {
     //res.
     //req. 
    }
    
   

   Con res y req obtenemos información sobre las peticiones; solamente estamos proporcionando funciones.  

   Si usamos un método como .listen() llamamos al servidor. 

   
    app.listen()

   

   Pero en ningún momento lo programamos. 
  
  
   Cuando usamos algunos de estos frameworks funcionan bajo el patron IoC que abstrae el control del programa. 

   Solo usamos funciones para determinar lo que ocurre en algún momento del ciclo de vida de la app. 

   Estamos delegando eventos importanes para la app y dejar que la app se dirija por si sola mediante algún tipo de estructura que no controlamos como funciona.  


 Inyección de dependencia: 

  Es un tipo de inversión de control porque estamos dejando que el lenguaje de programación o framework instancie los objetos por nosotros. 

  No así toda la inversión de control es inyección de dependencia. 


 
  app = express()
    
  app.get("/", () -> {
   //res.
   //req. 
  }
    
 

  Esta inversión de control no tiene nada que ver con objetos instanciados, solo pasamos una función anonima y callbacks para obtener información. 

   

# Patrón Iterador

 Es una estructura de datos que nos va a permitir recorrer cada uno de los elementos que nos va a permitir recorrer cada uno de los elementos que formen parte de una colección. 

 
 Una colección es una estructura de dato que no representa una única variable si no varias. 

  Array
  
  Lista (lista enlazada o array list) 

  Mapa o diccionarios o hash: (asociamos una clave con un valor), 
  
  Conjunto (lista no duplicada con indice accesible) 

  Árbol (esstructura dinamica para almacenar información de forma eficiente)


 Los iteradores van a tener dos operaciones: 

  1. next(): 
   
   Va a devolver un elemento de la colección, se supone uno no devuelto. 

   Toma un elemento diferente en cada llamada.

   Este efecto se aplica con un cursor o puntero que almacena el último elemento devuelto recorra de forma lineal (array) o mediante algún indice si hace falta. 


  2. hasNext(): 

   Para saber cuando ya no tenemos más elemento. 

   Es un booleano que tiene que indicarnos cuando hemos terminado de recorrer nuestra colección 


 El iterador va a ser una estructura para recorrer estructuras, con una función dependiente (next) de la otra (hasNext).  
 
 Es una estructura de datos con estado que cada vez que llamemos a next() suponiendo qeu hasNext() devuelva true, nos va a dar el siguiente elemento. 

 Una vez que next haya sido llamado tantas veces como elementos formen parte de la colección, hasNext() deberia devolver false, que ya no quedan elementos vistos en la llamada a next.  
   
 Si lo hacemos mal y llamamos a next() cuando no hay elementos, falla o devuelve null. 

  
 Ej: array con elementos

  `[1, 4, 3, 7, 4, 2, 6, 5]`

 Vemos que su longitud es 8 (n=8) y que tenemos una operación indice que nos permite acceder al elemento en la posición 0 hasta n-1 (8-1). 
 
 Podemos crear un iterador para recorrer el array. 

```
 iterador {
  arr: int[]
  
 }
```

 La estructura iterador contiene el array de elementos que estamos iterando. 

 Es de tipo entero, pero podría ser generico 

```
 iterador <t> { 
  arr: <t>[]
  
 }
 //array de tipo t para un iterador de tipo t
```

 Para implementar next() necesitamos recordar cuál es el último elemento que el iterador ha devuelto o el siguiente elemento que va a dar. 
 
 Le agregamos un elemento cursor de tipo entero que va a representar la posición del siguiente elemento que devolvería cuando llamemos a next(). 

```
  iterador {
  arr: int[]
  cursor: int = 0 
 }
```

 Inicialmente va a valer 0, next va a tener como código; el valor de la posición cursor del array y después incrementamos cursor. 

```
 next(){
  val <- arr[cursor]
  cursor++
  return val
 }
 
 ```
 
 Al final va a devolver el valor que leyo.  


 Podemos imaginar al cursor como una flecha que apunta al siguiente elemento devuelto. 

 Cuando llamemos a next(), miramos lo que hay en la posición apuntada por el cursor; lo anotamos y mueve el cursor (contador++) y devuelve lo que acabamos de leer. 

```
  Al comienzo: 
   [1, 4, 3, 7, 4, 2, 6, 5]
    *
  Cuando llamaos a next(): 
    [1, 4, 3, 7, 4, 2, 6, 5]
        *
    apunta al 4 y devuelve 1. 
```
 
 hasNext() va a consultar si cursor es menor que la longitud del array 

```
 hasnext() {
  cursor < len(arr)
 }
  
```

## Implementación en Python: 

  iterador.py

```
  class Iterador: 

   def __init__(self, array): 
    self.array = array
    self.cursor = 0 

   def next(self): 
    item = self.array[self.cursor]
    self.cursor += 1
    return item

   def has_next(self)
    return self.cursor < len(self.array)

  array = ['lunes, 'martes', 'miércoles', 'jueves', 'viernes']
  it = Iterador(array)
  
  while it.has_next(): 
   print("Todavía queda un elemento: " + it.next())
  it.next()
  print("ya he terminado")
```

 La operación hasNext() hay que implementarla para saber cuando detenerse. 

 Cuando no queden elementos y llamamos a it.next() se pasa el limite del elemento. 

 Podemos detectar el caso de que no haya siguiente y devolver una excepción o devolver un error especial. 


  
# React 


## Patrones 

### 1. Patrones de Composición y Estructura

##### Estos patrones dictan cómo se construyen y organizan los componentes:


#### A. Componentes Contenedor (Container) y Componentes de Presentación (Presentational)

##### El patrón de diseño más fundamental en el diseño de React


#### Componentes de Presentación (Dumb/Tontos):

##### Función: Se encargan únicamente del cómo se ve. Reciben datos y callbacks (funciones) a través de sus props.

##### Características: No tienen estado propio (state), no acceden a la tienda (store) de datos ni a la lógica de negocio.

##### Implementación: Usualmente son Componentes Funcionales simples


#### Componentes Contenedor (Smart/Inteligentes):

##### Función: Se encargan únicamente del cómo funciona. Contienen la lógica, el estado y el acceso a los datos.

##### Características: No tienen marcado HTML propio (a menudo solo renderizan el componente de presentación).

##### Implementación: Componentes que usan Hooks para conectar con la lógica (ej., useState, useEffect, useSelector de Redux).


#### B. Composición vs. Herencia

##### React recomienda firmemente la Composición para la reutilización de código y la especialización de componentes

##### Composición con props.children: 

Permite que un componente se comporte como un layout o envoltura

haciendo que el contenido se inyecte a través de la prop especial children (ej., un componente Modal o Card).


##### Composición con Specialization:

Pasar otros componentes como props para cambiar una parte de la interfaz

(ej., un componente List que acepta un ItemRenderer como prop).


### 2. Patrones de Abstracción de Lógica (Hooks)

##### React Hooks redefinió la forma en que se abstrae la lógica reutilizable, reemplazando muchos patrones basados en componentes de clase.


#### A. Custom Hooks (Hooks Personalizados)

##### Función: Reutilizar la lógica con estado entre múltiples componentes funcionales.

##### Mecanismo: Son funciones de JavaScript cuyo nombre comienza con use (ej., useFetch, useFormValidation).

Estas funciones pueden llamar a otros Hooks de React (como useState o useEffect) y devuelven valores o callbacks.

Beneficio: Permite aislar la lógica del ciclo de vida y la interfaz de usuario.


#### B. Higher-Order Components (HOC)

##### Función: Compartir funcionalidad entre componentes (antes de los Hooks).

Un HOC es una función que toma un componente y devuelve un nuevo componente mejorado.

Un HOC es una función que toma un componente y devuelve un nuevo componente mejorado

Ej: Un withAuthentication(Component) que añade comprobación de usuario autenticado.

Aunque todavía se usan, los Custom Hooks son la forma moderna y preferida de compartir lógica en componentes funcionales.


### 3. Patrones de Flujo de Datos y Propiedades

##### gestionan cómo los datos fluyen a través de la aplicación.


#### A. Render Props (Propiedades de Renderizado)

##### Función: Permite que un componente comparta comportamiento o datos con otro componente.

El componente padre le pasa al hijo una función como propiedad, y el hijo invoca esa función para determinar qué renderizar

##### Ej: Un componente MouseTracker que, en lugar de renderizar el ratón

pasa las coordenadas (x, y) a través de una prop de función (render o children), dejando que el componente consumidor decida la IU.


#### B. Prop Drilling (Perforación de Propiedades) y Context

##### Prop Drilling: El anti-patrón de pasar una prop a través de varios niveles de componentes que no la necesitan, solo para llegar a un componente profundamente anidado.

##### Patrón Context API: La solución oficial de React al prop drilling

##### El Context permite que los datos (como temas de interfaz, configuraciones de usuario o datos globales) sean accesibles por cualquier componente en el árbol sin pasar props manualmente en cada nivel.

Implementación: Se usa el Hook useContext.


### 4. Patrones Adicionales (Frameworks)

##### Cuando React se usa en un contexto de framework (como Next.js), se adoptan patrones arquitectónicos más amplios:

Páginas (Routing)	Mapear URLs a componentes específicos.	Archivos dentro de un directorio /pages (Next.js) o rutas definidas (React Router).

Componentes de Layout	Definir la estructura visual común (header, footer, sidebar) que envuelve a las páginas.	Un componente Layout que usa la composición (props.children) para envolver el contenido de la página.

State Management	Centralizar el estado complejo de la aplicación (Redux, Zustand, Recoil).	Uso de Reducers (patrón de flujo de datos inmutable) para manejar las transiciones de estado.



## Estructura del código en React

Es crucial para la escalabilidad, la mantenibilidad y la coherencia del equipo.

##### La práctica recomendada más extendida es la Agrupación por Característica o Módulo.

### 1. Raíz

Mantén una estructura de alto nivel simple y fácil de navegar:

public/: Contiene el archivo index.html y otros recursos estáticos (imágenes, fuentes) que se copian directamente a la carpeta de build final.

src/: El directorio de código fuente, donde reside toda la lógica de la aplicación.

package.json: Define las dependencias, scripts y metadatos del proyecto.

tsconfig.json (si usas TypeScript): Archivo de configuración.


### 2. Organización del Directorio src/ (Agrupación por Característica)

Esta es la clave de una estructura escalable

##### En lugar de agrupar por tipo de archivo (components/, hooks/, utils/)

##### Se agrupa por Módulo o Característica de Negocio.

Ej: 

```
src/
├── features/               # Agrupación por Característica (El Core de la app)
│   ├── UserProfile/        # Módulo: Perfil de Usuario
│   │   ├── components/     # Componentes de presentación específicos del módulo
│   │   │   ├── UserCard.tsx
│   │   │   └── EditForm.tsx
│   │   ├── hooks/          # Custom Hooks específicos del módulo
│   │   │   └── useUserProfile.ts 
│   │   ├── UserProfile.tsx # Componente Contenedor principal
│   │   └── index.ts        # Archivo para exportaciones (Barrel File)
│   ├── Products/           # Módulo: Productos
│   └── Orders/             # Módulo: Órdenes
│
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

Principales Subdirectorios:

#### features/ (o modules/): Contiene los componentes Contenedor que encapsulan la lógica de una parte específica de la aplicación. Dentro de cada característica, agrupa los componentes y hooks que solo se usan allí.

#### shared/ (o common/): Contiene componentes, hooks o utilidades que se usan en múltiples características o módulos. Son los elementos verdaderamente reutilizables de la aplicación.

#### api/ (o services/): Contiene la implementación del Patrón Repository, aislando la lógica de acceso a datos (peticiones HTTP) de los componentes


### 3. Orden del Código Dentro de un Componente (Convención)

##### Para mantener la coherencia dentro de un único archivo de componente (.tsx), se recomienda el siguiente orden estandarizado:

1. Importaciones (Librerías, componentes, archivos locales).

2. Definición de Tipos/Interfaces (si se usa TypeScript).

3. Definición del Componente Funcional (const Componente = (props) => { ... }).

4. Custom Hooks (Llamadas a useEstado, useEfecto, Custom Hooks).

5. Manejadores de Eventos (const handleClic = () => { ... }).

6. Efectos (useEffect).

7. Lógica de Renderizado (Variables condicionales, formateo de datos).

8. Instrucción return (JSX).

9. Prop Types/Default Props (si se usan).

10. Exportación (export default Componente;).



## Herramientas

### 1. Build

Babel: Se utiliza para transpilar el código moderno de JavaScript (como JSX y TypeScript) a código que sea compatible con la mayoría de los navegadores.

Webpack / Rollup: Son empaquetadores (bundlers) que se encargan de juntar, optimizar y minificar todo el código (JavaScript, CSS, imágenes) en archivos de producción.


### 2. Bibliotecas Esenciales

Enrutamiento	React Router: La biblioteca estándar para gestionar la navegación (rutas, URLs) entre diferentes componentes de la aplicación.	Mapeo de URLs a Componentes.

Gestión de Estado	Redux / Redux Toolkit, Zustand, Jotai, Recoil: Gestionan el estado global complejo de la aplicación de manera predecible y centralizada. Redux Toolkit es el enfoque recomendado para Redux.	Flujo de Datos Unidireccional y Estado Global.

Acceso a Datos	React Query (TanStack Query), SWR: Bibliotecas para la gestión de datos asíncronos. Simplifican el caching, la sincronización y la gestión de estados de carga/error de las peticiones a la API.	Caching y Sincronización de Datos.

Peticiones HTTP	Axios, Fetch API (nativa): Se utilizan para realizar las llamadas HTTP (GET, POST, etc.) a las APIs de backend.	Conectividad con el Backend.

Tipado	TypeScript: Es el superconjunto de JavaScript más utilizado para agregar tipos estáticos, lo que reduce errores y mejora el mantenimiento del código a escala.	Seguridad y Mantenibilidad del Código.


### 3. Bibliotecas de Estilizado y UI

#### Estilos en Módulos y Convencional:

CSS Modules: Permite encapsular los estilos localmente dentro de cada componente para evitar conflictos.

Sass/Less: Preprocesadores de CSS para añadir variables, anidamiento y otras funcionalidades


#### Frameworks de Componentes:

Material UI (MUI): El framework de componentes más popular, basado en los principios de Material Design de Google.

Chakra UI / Ant Design: Otros kits de UI populares que ofrecen componentes pre-diseñados y accesibles


### 4. Plataformas de Despliegue (Deployment)

##### Se despliegan en plataformas que manejan el hosting, la CDN y, si se usa SSR, el entorno serverless.

Vercel: Altamente recomendado, ya que es la plataforma creada por el equipo de Next.js. Ofrece despliegue sin configuración para Next.js, SSG, SSR y funciones serverless.

Netlify: Excelente para aplicaciones React estáticas (Client-Side Rendering o SSG) y para funcionalidades serverless.

AWS Amplify / Firebase Hosting: Plataformas robustas de la nube para hosting y servicios backend asociados.


#### Pruebas de Integración y E2E (End-to-End):

##### Cypress / Playwright: Herramientas que simulan la interacción de un usuario real con la aplicación en un navegador para probar flujos de trabajo completos (ej., login, añadir producto al carrito).




# Angular

## Patrones

##### Promueve una arquitectura fuertemente basada en el patrón MVVM (Model-View-ViewModel) y el concepto de Inyección de Dependencias (DI).

### 1. Patrones Arquitectónicos Nativos (MVVM)

##### Angular utiliza una variación del MVVM, donde los componentes actúan como la combinación de la Vista y el ViewModel. 


#### El Modelo (Model): Representa la lógica de negocio y los datos (clases de TypeScript o Interfaces). Esta lógica reside en los Servicios.


#### La Vista (View): Es la plantilla (Template) HTML del componente. Se encarga únicamente de la presentación.


#### El ViewModel/Controlador (Component): Es la clase TypeScript del Componente. Actúa como el puente entre la Vista y el Modelo.

##### Maneja la lógica de la interfaz de usuario (manejo de eventos, estado local).

##### Se comunica con los Servicios para obtener o modificar datos.


### 2. Patrones de Diseño Basados en Clases y Servicios

##### Angular estandariza la forma en que se manejan los datos y la lógica reutilizable a través de la Inyección de Dependencias.


#### A. Inyección de Dependencias (DI)

Es el pilar de Angular. 

##### Permite que una clase reciba sus dependencias (servicios) a través de su constructor, garantizando código desacoplado y testeable.

##### Angular utiliza decoradores como @Injectable() para marcar las clases que pueden ser inyectadas

##### los Providers definen cómo se crean (generalmente como Singleton a nivel de aplicación).


#### A. Patrón Service (Servicio)

##### Función: Abstraer y encapsular la lógica de negocio, la comunicación con APIs externas, y el manejo de datos complejos.

##### Regla de Oro: Los componentes deben ser "delgados" y delegar el trabajo pesado a los Servicios.

Ejemplo: Un UserService contendría los métodos para hacer peticiones HTTP (HttpClient) y manejar la caché de usuarios.


### 3. Patrones de Componentes y Plantillas

##### Estos patrones se enfocan en cómo se estructuran las interfaces de usuario.


#### A. Componentes Contenedor (Smart) y de Presentación (Dumb)

##### Componentes Contenedor: Tienen lógica, DI, y manejan el estado. Obtienen datos de los Servicios y los pasan a los componentes hijos.

##### Componentes de Presentación: Reciben datos a través de decoradores @Input() y emiten eventos al padre a través de @Output(). No tienen lógica de negocio propia.


#### B. Patrón de Adaptador

##### Función: Adaptar los datos brutos recibidos de una API externa (que a menudo no están en el formato ideal) a una estructura que sea conveniente para el frontend.

##### Uso: Se suele implementar dentro de los Servicios para que los componentes siempre trabajen con un Modelo limpio y consistente.


### 4. Patrones de Flujo de Datos (Reactividad)

#### A. Patrón Observer (RxJS)

Función: Angular integra la librería RxJS, que implementa el Patrón Observer a través de Observables.

Esto maneja la asincronía y el flujo de datos (como llamadas HTTP o eventos de la interfaz) de manera limpia.

Mecanismo: El Servicio devuelve un Observable, y el Componente se suscribe a él para recibir los datos cuando estén disponibles

O usa el Pipe async en la plantilla para manejar la suscripción automáticamente.


#### B. Patrón Reducer (Manejo de Estado)

Aunque no es nativo de Angular, librerías como NgRx (la implementación de Redux para Angular) utilizan el patrón Reducer para manejar el estado complejo y global.

Función: El Reducer es una función pura que toma el estado actual y una acción, y devuelve un nuevo estado inmutable. Esto garantiza un flujo de datos unidireccional (similar al utilizado en el MVVM).


## Estructura del código en Angular

Es la Agrupación por Característica (Feature)

### 1. Raíz

Mantén el diseño generado por la CLI de Angular, enfocándote en el directorio principal:

src/: El directorio raíz de la aplicación.

##### app/: Contiene todo el código de la aplicación (Módulos, Componentes, Servicios). Aquí se concentra la arquitectura.

assets/: Recursos estáticos (imágenes, fuentes).

environments/: Archivos para configuraciones específicas de entorno.


### 2. Organización del Directorio app/ (Agrupación por Característica)

##### El núcleo de la estructura de código en Angular es dividir la aplicación en Módulos de Características (Feature Modules).

```
src/app/
├── core/                # Módulo Core: Servicios Singleton (se cargan una vez)
│   ├── auth/            # Servicios de Autenticación
│   ├── services/        # Servicios compartidos (ej. logger, API base)
│   ├── core.module.ts   # Módulo que expone y asegura la unicidad
│   └── interceptors/    # Interceptores HTTP
│
├── features/            # Módulos de Características (Lazy-Loaded)
│   ├── dashboard/       # Módulo: Dashboard
│   │   ├── components/  # Componentes internos del dashboard
│   │   ├── services/    # Servicios específicos del dashboard
│   │   ├── dashboard-routing.module.ts
│   │   └── dashboard.module.ts
│   ├── products/
│   └── users/
│
├── shared/              # Módulo Shared: Componentes, Pipes, Directivas reutilizables
│   ├── components/      # Componentes de presentación 'Dumb' (Botón, Modal)
│   ├── pipes/           # Pipes reutilizables (ej. formatDate)
│   ├── directives/
│   └── shared.module.ts # Módulo que exporta todo para uso externo
│
├── app-routing.module.ts # Rutas principales
└── app.module.ts        # Módulo raíz de la aplicación
```

Principales Módulos de la Arquitectura:

#### CoreModule:

##### Propósito: Contiene servicios que deben ser Singleton (solo una instancia para toda la aplicación).

Ejemplos: Servicios de autenticación (AuthService), loggers, servicios de API base, interceptors.

Regla: Solo debe importarse una vez en el AppModule (Módulo Raíz).


#### SharedModule:

##### Propósito: Contiene componentes, pipes y directivas que son Dumb (de presentación pura) y se utilizan en múltiples módulos de características.

Ejemplos: Componente Button, Modal, Spinner, pipe de formato.

Regla: Debe importarse en cualquier Módulo de Característica que necesite usar sus componentes.


#### Módulos de Características (features/):

##### Propósito: Implementar una funcionalidad específica del negocio (ej. products, users, orders).

Regla: Deben cargarse de forma Lazy-Loaded (carga perezosa) para mejorar el tiempo de inicio de la aplicación. Dentro de ellos, se agrupan los componentes y servicios específicos de esa característica.


### 3. Orden del Código Dentro de un Archivo (.ts y .html)

Para mantener la limpieza y la coherencia en las clases de componentes y servicios (archivos .ts):

1. Importaciones: En orden alfabético y separadas por grupos (de Angular, de librerías, locales).

2. Decorador: El decorador de la clase (ej., @Component o @Injectable).

3. Definición de Clases:

Propiedades Estáticas y Públicas.

Propiedades Decoradas (@Input, @Output, @ViewChild).

Propiedades Privadas.

4. Constructor: Para la Inyección de Dependencias (DI).

5. Métodos de Ciclo de Vida: En orden de ejecución (ngOnInit, ngOnChanges, ngOnDestroy, etc.).

6. Métodos Públicos: La lógica principal.

7. Métodos Privados/Auxiliares.


En el archivo HTML (plantilla), la convención es:

Selectores/Tags del componente (ej., app-user-card).

Directivas estructurales `(ej., *ngIf, *ngFor)`.

Bindings de propiedades `([propiedad]="valor")`.

Bindings de eventos `((evento)="manejador()")`.



## Herramientas


### 1. Fundamentales

RxJS (Reactive Extensions for JavaScript): Esta biblioteca es esencial para el manejo de la programación reactiva y asíncrona en Angular (peticiones HTTP, eventos, etc.). Angular la integra profundamente, especialmente en los servicios y para gestionar el estado.

Webpack / Vite (Opcional): El Angular CLI abstrae las herramientas de empaquetamiento (bundling) y compilación, utilizando Webpack por defecto. Versiones recientes permiten la integración con Vite para acelerar los tiempos de build y desarrollo.


### 2. Bibliotecas Esenciales del Framework

Vienen integradas o se añaden como módulos oficiales de Angular

Enrutamiento	@angular/router	Gestiona la navegación entre vistas, carga perezosa (lazy loading) de módulos y parámetros de URL.

HTTP Cliente	@angular/common/http	El módulo oficial para realizar peticiones HTTP (GET, POST, etc.) a APIs de backend, integrado con Observables de RxJS.

Formularios	@angular/forms	Proporciona el sistema para construir formularios reactivos y basados en plantillas, manejando validación y bindings de datos de forma eficiente.

Animaciones	@angular/platform-browser/animations	Módulo para implementar animaciones y transiciones complejas en la interfaz de usuario.


### 3. Bibliotecas de Estilizado y UI

CSS y Sass/Less Modular: Angular promueve el encapsulamiento de estilos a nivel de componente, donde los estilos definidos en el archivo .css o .scss de un componente solo afectan a ese componente.

Angular Material: El framework de componentes de interfaz de usuario más popular para Angular. Implementa las directrices de Material Design de Google, ofreciendo componentes pre-construidos y accesibles (botones, modals, sidebars, etc.).

Bootstrap / Tailwind CSS: Estos frameworks de utilidad se pueden integrar fácilmente, aunque se utilizan dentro de los estilos encapsulados de los componentes.


### 4. Gestión de Estado Avanzada

Para el manejo del estado global complejo (a menudo en grandes aplicaciones):

NgRx: La implementación más utilizada de los patrones Redux y RxJS para la gestión de estado. Utiliza un flujo de datos unidireccional (Actions, Reducers, Selectors, Effects) para asegurar la predictibilidad.

NgXs: Una alternativa a NgRx que utiliza clases de TypeScript con decoradores para simplificar la gestión de estado.


### 5. Testing

Angular viene configurado para pruebas desde el inicio:

Jasmine y Karma: El framework estándar utilizado para las pruebas unitarias de componentes, servicios y lógica de TypeScript.

Protractor / Cypress / Playwright: Herramientas para pruebas end-to-end (E2E), que simulan la interacción completa del usuario en un navegador. Cypress y Playwright son las herramientas modernas preferidas sobre Protractor.


### 6. Plataformas de Despliegue (Deployment)

##### Las aplicaciones de Angular compiladas (usando ng build --prod) generan activos estáticos que se pueden alojar en casi cualquier lugar.

Firebase Hosting: Una solución popular y sencilla de Google.

Netlify / Vercel: Plataformas excelentes para alojar el código estático de Angular y añadir servicios serverless si es necesario.

AWS Amplify / S3: Soluciones de la nube robustas para el alojamiento estático.

Servidores Tradicionales (Nginx, Apache): Simplemente se sirven los archivos estáticos generados.
    

# Nest.js

## Patrones

##### Promueve patrones de diseño arquitectónicos bien establecidos, especialmente la Inversión de Control (IoC) y el patrón Service Layer, además de otros patrones específicos de backend


### 1. Patrones Arquitectónicos Basados en Angular

Utiliza una arquitectura de componentes muy similar a la de Angular, lo que impulsa el uso de patrones de diseño específicos para la modularidad y el desacoplamiento

#### Inyección de Dependencias (DI) e Inversión de Control (IoC): Este es el corazón de NestJS.

##### Mecanismo: El framework utiliza un contenedor IoC (similar al de Angular o Spring) para instanciar y proporcionar las dependencias (Servicios, Repositorios) a través del constructor de las clases.

Beneficio: Promueve el desacoplamiento, lo que facilita la prueba unitaria de cualquier componente.


#### Patrón Service Layer (Capa de Servicio):

##### Implementación: Las clases decoradas con @Injectable() se consideran Servicios (Providers).

Responsabilidad: Contienen la lógica de negocio central de la aplicación y coordinan las interacciones con otras capas (como el Repositorio o APIs externas).


#### Patrón Módulo (Module):

Función: Encapsula un grupo de funcionalidades relacionadas (Controladores, Servicios, Módulos externos).

Patrón Asociado: Aplica el principio de Single Responsibility Principle (SRP) a nivel arquitectónico, asegurando que cada módulo tenga una única preocupación bien definida.


### 2. Patrones de Abstracción de Datos

##### Aunque no son obligatorios, estos patrones son la práctica recomendada para interactuar con bases de datos y APIs externas:

#### Patrón Repository (Repositorio):

Función: Aislar la lógica de acceso a datos de la lógica de negocio.

Implementación: Los Servicios dependen de una interfaz (IRepository) o de una clase concreta (que utiliza el ORM, como TypeORM o Prisma) para realizar las operaciones CRUD.

Beneficio: Permite cambiar la base de datos subyacente (ej., de PostgreSQL a MongoDB) sin modificar la capa de Servicios.


#### Patrón Data Mapper (Mapeador de Datos):

Uso: Se utiliza para mapear los objetos de dominio (Entities) a los objetos de la base de datos (y viceversa). Esto mantiene los objetos de negocio limpios y libres de detalles de persistencia.


### 3. Patrones de Infraestructura y Comunicación

NestJS proporciona estructuras para implementar patrones que manejan la interacción y el flujo de la aplicación.

#### Patrón Decorator:

Uso: NestJS hace un uso extensivo de decoradores de TypeScript (@Controller, @Get, @Injectable, @Module) para añadir metadatos a clases y métodos, permitiendo que el framework sepa cómo gestionarlos.


#### Patrón Middleware / Interceptor:

Middleware: Lógica que se ejecuta antes de que la petición llegue al Controlador (ej., autenticación, logging). Es el patrón Chain of Responsibility.

Interceptor: Lógica que se ejecuta antes y después de la ejecución del método del Controlador, permitiendo transformar la petición o la respuesta (ej., formateo de JSON de salida, caching).


#### Patrón CQRS (Command Query Responsibility Segregation):

Uso Avanzado: NestJS tiene paquetes que facilitan la implementación de CQRS, donde se separan los modelos y operaciones para la escritura (Comandos) de los modelos y operaciones para la lectura (Consultas).

 
#### Flujo de Petición en NestJS

El flujo de NestJS encapsula varios patrones:

##### 1. La petición llega al Controlador (que aplica el patrón Front Controller).

##### 2. El Controlador utiliza la DI para obtener un Servicio (Service Layer).

##### 3. El Servicio usa el Repositorio (Repository Pattern) para acceder a los datos.

##### 4. La respuesta pasa a través de un Interceptor (Decorator Pattern) antes de volver al cliente.



## Estructura del código en Nest.js

El objetivo principal es la Agrupación por Módulo de Negocio (Feature Module) para lograr una aplicación escalable, cohesiva y desacoplada


### 1. Raíz

src/: Directorio principal de código fuente.

dist/: Código compilado (generalmente ignorado del control de versiones).

node_modules/: Dependencias.

package.json: Dependencias y scripts.

tsconfig.json: Configuración de TypeScript.


### 2. Organización del Directorio src/ (Agrupación por Módulo)

##### El código se organiza en módulos autocontenidos que representan una característica o un dominio de negocio específico (ej., Usuarios, Productos, Autenticación).

```
src/
├── app.module.ts       # Módulo raíz que importa todos los módulos principales.
├── main.ts             # Punto de entrada de la aplicación (función bootstrap).
├── config/             # Configuración de entorno y servicios de configuración.
├── database/           # Módulos y configuraciones del ORM/Base de Datos.
│
├── modules/            # Directorio para todos los módulos de negocio/features
│   ├── auth/           # Módulo: Autenticación
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   └── strategies/ # Patrón Strategy para JWT, Local, etc.
│   │
│   ├── users/          # Módulo: Usuarios
│   │   ├── users.controller.ts  # Controladores (manejo de peticiones HTTP)
│   │   ├── users.service.ts     # Servicios (lógica de negocio)
│   │   ├── users.module.ts
│   │   ├── entities/            # Clases/Interfaces de Entidades
│   │   └── repository/          # Implementación del Patrón Repository (si se usa)
│   │
│   └── products/
│
└── common/             # Elementos transversales (compartidos)
    ├── dto/            # Data Transfer Objects (DTOs) para validación de entrada
    ├── filters/        # Filtros de Excepciones
    ├── guards/         # Guards (Autorización)
    ├── interceptors/   # Interceptores (Transformación de respuesta, log)
    └── pipes/          # Pipes (Validación y Transformación)
```


#### Componentes Clave de un Módulo (Patrones Integrados):

##### Un módulo típico en NestJS (users/) utiliza los siguientes patrones y convenciones:

1. users.controller.ts (Patrón Front Controller):

Maneja las peticiones HTTP (rutas con @Get, @Post, etc.).

Delegación: Delega inmediatamente la lógica de negocio al servicio.

Inyección de Dependencias (DI): Recibe el UsersService en el constructor.


2. users.service.ts (Patrón Service Layer):

Contiene la lógica de negocio.

Utiliza el Patrón Repository (o el ORM) para interactuar con la base de datos.


3. users.module.ts (Patrón Module):

Define el alcance del módulo: qué controladores, servicios y módulos externos son usados y exportados.


### 3. Orden del Código Dentro de una Clase

##### Para archivos de Controlador o Servicio (.ts), se recomienda el siguiente orden para una consistencia interna:

1. Importaciones: Agrupadas y ordenadas (de NestJS, de librerías, locales).

2. Decorador de Clase: (ej., @Controller('users'), @Injectable()).

3. Clase de Componente/Servicio:

4. Constructor: Utilizado exclusivamente para la Inyección de Dependencias (DI).

5. Métodos de Ciclo de Vida: (ej., onModuleInit, onApplicationBootstrap).

6. Métodos Públicos: Primero los métodos de ruteo/API (en Controladores) o los métodos de lógica de negocio principales (en Servicios).

7. Métodos Privados/Auxiliares: Funciones internas de la clase.



## Herramientas

### 1. Fundamentales

NestJS CLI: La herramienta de línea de comandos oficial, utilizada para generar la estructura del proyecto, módulos, controladores, servicios y builds.

Express.js (Por Defecto) / Fastify: NestJS utiliza Express como framework HTTP subyacente por defecto, lo que permite aprovechar su ecosistema. También soporta Fastify para un mayor rendimiento en escenarios de alta concurrencia.

Jest: El framework de pruebas estándar y recomendado por NestJS para ejecutar pruebas unitarias y de integración.


### 2. Bibliotecas de Base de Datos y ORM 

NestJS abstrae la conexión a la base de datos, permitiendo usar casi cualquier ORM (Mapeador Objeto-Relacional):

TypeORM: El ORM históricamente más utilizado en NestJS. Es Type-safe y permite trabajar con bases de datos relacionales (PostgreSQL, MySQL, SQL Server, etc.).

Prisma: Un ORM moderno, muy popular por su excelente DX (Developer Experience), tipado fuerte y migración sencilla. Es la opción preferida en muchos proyectos nuevos.

Mongoose: La librería estándar para la interacción con bases de datos NoSQL como MongoDB.


### 3. Seguridad y Validación

La seguridad y la integridad de los datos son gestionadas por bibliotecas específicas:

Passport.js: La librería estándar de autenticación para Node.js, integrada con NestJS para implementar estrategias como JWT (JSON Web Tokens), OAuth, y autenticación local.

class-validator: Se utiliza con los DTOs (Data Transfer Objects) para validar los datos entrantes de las peticiones HTTP de manera declarativa.

class-transformer: Complementa a class-validator, permitiendo transformar y serializar los datos entre las petencias y los objetos de la aplicación.

Bcrypt: Librería para el hashing seguro de contraseñas


### 4. Patrones de Comunicación y API

NestJS ofrece herramientas robustas para definir la API y la comunicación entre servicios:

Swagger/OpenAPI: Se utiliza el módulo @nestjs/swagger para generar automáticamente la documentación interactiva de la API (generalmente accesible a través de una ruta /api).

GraphQL: NestJS ofrece un módulo robusto para construir servidores GraphQL (utilizando Apollo o Mercurius) como alternativa a REST.

Microservicios y Mensajería: Soporte nativo para construir arquitecturas de microservicios utilizando diferentes transportes como RabbitMQ, Kafka, Redis (Pub/Sub) o gRPC.


### 5. Plataformas de Despliegue (Deployment)

Como NestJS se ejecuta en Node.js, puede ser desplegado en casi cualquier plataforma de nube o container:

Docker y Kubernetes (K8s): El estándar para el containerization. Docker empaqueta la aplicación con sus dependencias. Kubernetes se usa para orquestar y escalar los containers en producción.
    

Plataformas PaaS (Platform as a Service):

AWS ECS/EKS: Servicios de contenedores de Amazon.

Google Cloud Run / Compute Engine: Soluciones de Google Cloud.

Azure App Service / AKS: Soluciones de Microsoft Azure.

Heroku / DigitalOcean: Opciones más sencillas para un despliegue rápido.
    

AWS Lambda / Serverless Framework: Para despliegues Serverless, transformando el backend de NestJS en funciones Lambda (aunque esto requiere configuraciones especiales para asegurar el arranque rápido).        




# C

## Patrones

##### Debido a que C es un lenguaje procedural, no soporta nativamente conceptos como clases, herencia o polimorfismo

##### Los patrones de diseño se enfocan en la organización de módulos, la gestión de la memoria y la simulación de estructuras de datos y comportamientos orientados a objetos a través de la programación procedural.

### 1. Arquitectura y Estructura del Código

##### La mejor arquitectura para C se centra en la modularidad y la abstracción mediante el uso de módulos (archivos .c y .h).

#### Módulos y Abstracción (El Patrón de Módulo) 

Este es el patrón arquitectónico principal en C:

##### Interfaz Pública (.h): El archivo de cabecera (.h) define la interfaz pública del módulo, incluyendo structs (estructuras de datos), prototipos de funciones y constantes. Esto es todo lo que otros módulos pueden "ver" y usar.

##### Implementación Privada (.c): El archivo de código fuente (.c) contiene la implementación de las funciones declaradas en el .h y define cualquier dato o función auxiliar (usando la palabra clave static) que debe ser privada al módulo.

##### Separación de Preocupaciones: Cada par .h/.c encapsula una única responsabilidad, haciendo que el código sea más legible y más fácil de compilar/probar de forma aislada


#### Capas (Layers)

En sistemas grandes, se recomienda estructurar el código en capas:

##### Capa de Aplicación: Contiene la lógica principal (main loop) y el flujo de control.

##### Capa de Lógica de Negocio/Módulos: Módulos que implementan las reglas de la aplicación.

##### Capa de Abstracción de Hardware/SO (HAL/OSAL): Módulos para interactuar con hardware o servicios del sistema operativo (ideal para portabilidad).
    

### 2. Patrones de Diseño Clásicos Adaptados a C

#### A. Patrones de Simulación OO

##### Estos patrones se utilizan para simular la Programación Orientada a Objetos (POO):

Encapsulamiento	Se logra haciendo que todos los miembros de un struct sean privados a la implementación y proporcionando solo funciones públicas (en el .h) para manipular ese struct (llamado Tipo Opaco).	Ocultar la implementación interna del módulo o estructura de datos.

Polimorfismo / Strategy	Uso de Punteros a Función. Un struct contiene un puntero a una función que puede ser implementada de diferentes maneras por diferentes "clases" o implementaciones.	Simular métodos virtuales y permitir que el comportamiento cambie en tiempo de ejecución

Factory Method	Una función central que recibe un parámetro y devuelve un puntero a un struct recién asignado e inicializado (generalmente con un puntero a función específico para su tipo).	Crear objetos sin exponer la lógica de instanciación al cliente.


#### B. Patrones Creacionales

Singleton:

Una función pública que devuelve un puntero a un único struct estático y global definido e inicializado dentro del archivo .c (oculto). La función debe asegurar que la inicialización solo ocurra una vez.

Uso: Gestión de recursos únicos (ej. Logger o configuración).


#### C. Patrones de Comportamiento

Observer (Publicador/Suscriptor):

Un módulo central mantiene una lista de punteros a función (los "observadores").

Cuando ocurre un evento, el módulo central itera sobre esa lista e invoca a todas las funciones registradas.

Uso: Manejo de eventos en tiempo de ejecución (ej. interfaz de usuario, cambios de estado).


### 3. Patrones Específicos de Sistemas Embebidos y C

#### Patrón de Máquina de Estados (State Machine)

Implementación: Se utiliza un struct para almacenar el estado actual (un enum) y un switch-case en un bucle que llama a la función correspondiente al estado actual (a menudo usando punteros a función para hacer la transición más clara).

Uso: Controlar el flujo complejo de una aplicación, especialmente en sistemas reactivos o con restricciones (ej. protocolos de comunicación, interfaces de usuario limitadas).


#### Patrón de Buffer Cíclico (Circular Buffer)

Función: Una estructura de datos que utiliza una matriz de tamaño fijo con punteros (o índices) de cabeza y cola para gestionar datos FIFO (First-In, First-Out), como mensajes o datos de sensores. Cuando la cola llega al final de la matriz, vuelve al inicio.

Uso: Manejo eficiente de streams de datos en sistemas con memoria limitada.


## Estructura del código en C

##### Se basa en la modularidad, la separación de la interfaz de la implementación y el uso de patrones de bajo nivel para simular el encapsulamiento.

Crucial para manejar la complejidad de proyectos grandes en un lenguaje procedural.

### 1. Estructura Arquitectónica (Módulos)

##### Agrupación por Módulo, donde cada módulo maneja una única responsabilidad.

#### Interfaz Pública (.h - Archivo de Cabecera):

##### Propósito: Define lo que otros módulos pueden utilizar. Debe contener solo las declaraciones necesarias.

Contenido:

1. Guardas de Inclusión: Uso de #ifndef, #define y #endif para evitar inclusiones múltiples.

2. Includes Necesarios: Solo los archivos .h requeridos para las declaraciones del módulo.

3. Constantes y Macros Públicas: (Usualmente con nombres en mayúsculas).

4. Tipos de Datos Públicos: Definición de structs (datos) y enums (enumeraciones).

5. Prototipos de Funciones Públicas: La firma de todas las funciones que otros módulos deben llamar.


#### Implementación Privada (.c - Archivo Fuente):

Propósito: Contiene la lógica y la implementación de la interfaz pública, ocultando los detalles internos.

Contenido:

1. Include del Propio .h: Debe ser la primera inclusión.

2. Includes Adicionales: Otros archivos .h necesarios para la implementación (ej. para funciones de stdlib.h).

3. Variables Globales y Funciones Privadas: Declaradas con la palabra clave static para limitar su alcance solo a este archivo.

4. Definición de Funciones Públicas: El cuerpo de las funciones declaradas en el archivo .h.
        
  
### 2. Orden Interno en el Archivo Fuente (.c)      

Se busca la coherencia y facilitar la lectura dentro del archivo .c

1. Inclusiones:

El archivo de cabecera del propio módulo (ej., #include "modulo.h").

Inclusiones de bibliotecas estándar (ej., <stdlib.h>).

Inclusiones de otros módulos locales.


2. Definiciones Privadas Estáticas:

Variables estáticas y globales limitadas al archivo (static int contador_privado;).


3. Prototipos de Funciones Privadas:

Declaraciones de las funciones auxiliares internas (static int helper_funcion(int a);).


4. Definición de Funciones Públicas (Interfaz):

Las implementaciones de las funciones declaradas en el archivo .h. Es mejor ordenarlas por el flujo de uso o alfabéticamente.


5. Definición de Funciones Privadas (Auxiliares):

La implementación de las funciones estáticas privadas.


### 3. Técnicas para el Encapsulamiento (Simulación OO)

Debido a la naturaleza de C, es necesario aplicar técnicas manuales para lograr la Abstracción y el Encapsulamiento:


#### Tipo Opaco (Opaque Type):

Definición: En el archivo .h, se declara un puntero a un struct sin definir completamente el struct (ej. typedef struct TDatos* TDatos_t;).

Implementación: El struct completo (struct TDatos) se define solo en el archivo .c.

Resultado: El usuario del módulo solo puede manipular el tipo opaco a través de las funciones públicas proporcionadas, ya que no conoce su estructura interna.


#### Convención de Nombres:

Utilizar prefijos en todas las funciones y tipos de datos públicos para evitar colisiones de nombres (ej., user_create(), user_delete()).

Usar static para todo lo que deba ser privado.


## Herramientas

### 1. Fundamentales

#### Compilador:

GCC (GNU Compiler Collection): El estándar de facto en plataformas tipo Unix (Linux, macOS) y ampliamente usado en desarrollo cross-platform (para otros sistemas embebidos, por ejemplo).

Clang/LLVM: Un compilador más moderno, conocido por su velocidad y diagnósticos de errores superiores. Popular en macOS y muchos proyectos de código abierto.

Microsoft Visual C++ (MSVC): El compilador estándar en sistemas Windows, integrado en Visual Studio.
    

#### Sistema de Construcción (Build System):

Make/CMake: Make es la herramienta tradicional, que utiliza archivos Makefile para automatizar la compilación. CMake es el estándar moderno; es un generador de build systems que produce archivos Makefile o proyectos de IDE (como Visual Studio) a partir de un único archivo de configuración (CMakeLists.txt), mejorando la portabilidad.

Autotools: Un sistema de construcción histórico pero complejo, aún utilizado en muchos proyectos GNU.


#### Depuradores (Debuggers):

GDB (GNU Debugger): El depurador más potente para código C en entornos Unix/Linux.

Valgrind: Herramienta crucial para la detección de errores de gestión de memoria (fugas, accesos inválidos, etc.), algo vital en C.


### 2. Bibliotecas Estándar y Base

Además de la Biblioteca Estándar de C (libc) (que incluye stdio.h, stdlib.h, string.h), se utilizan bibliotecas para funcionalidades específicas:

#### Manejo de Cadenas y Datos:

Glib: Una biblioteca de utilidades de bajo nivel de Gnome, que proporciona estructuras de datos (listas enlazadas, mapas hash), manejo de hilos y abstracciones.


#### Estructuras de Datos: A menudo, en C, las estructuras de datos complejas se implementan directamente en el proyecto para optimizar el rendimiento y evitar dependencias de bibliotecas grandes.


#### Entrada/Salida y Red:

POSIX Sockets (API BSD Sockets): El conjunto de funciones estándar para la programación de red.

libcurl: Una biblioteca de cliente poderosa para realizar transferencias de datos utilizando protocolos como HTTP, FTP, etc.


### 3. Desarrollo de Aplicaciones con Interfaz de Usuario (GUI)

Para aplicaciones de escritorio, C necesita bibliotecas de terceros para crear la interfaz:

#### GTK (GIMP Toolkit): Una biblioteca popular y cross-platform para crear interfaces gráficas. Es la base del entorno de escritorio GNOME.

#### Qt (Usando C++): Aunque la base es C++, Qt tiene una excelente integración y es el estándar industrial para aplicaciones cross-platform robustas (aunque no es puramente C).

#### ncurses: Para aplicaciones de interfaz de usuario basadas en texto (TUI) en terminales.


### 4. Plataformas de Aplicación Especializadas

##### C se destaca en áreas donde el control de bajo nivel es crucial:

#### Sistemas Embebidos (IoT): C es el lenguaje dominante.

Plataformas: Microcontroladores como Arduino (usando Wiring, un dialecto de C/C++), ESP32, ARM Cortex-M.

Herramientas: Compiladores cross-compilers específicos del chip (ej., Arm-GCC), RTOS (Sistemas Operativos en Tiempo Real) como FreeRTOS.


#### Sistemas Operativos (OS Dev): C es fundamental para escribir kernels y drivers.



## Código Procedural

##### Se centra en la ejecución de una lista de instrucciones paso a paso, organizadas en torno a procedimientos o funciones (subrutinas).

### 1. Fundamentos

#### Procedimientos/Funciones: 

El código se divide en bloques de código reutilizables llamados funciones. 

Una función es una secuencia de pasos que se ejecutan para realizar una tarea específica (ej., calcular_interes(), leer_archivo()).


#### Control de Flujo: 

El programa principal es una secuencia de llamadas a estas funciones, y el flujo del programa se basa en estructuras de control (condicionales if/else, bucles for/while).


#### Separación de Código y Datos: 

En el paradigma procedural, el código (las funciones) y los datos (las estructuras o variables) están conceptualmente separados. 

Las funciones operan sobre los datos, pero los datos no están intrínsecamente ligados a las funciones que los manipulan.


### 2. Procedural vs OOP

#### Procedural:

Enfoque Principal	Procedimientos/Funciones

Organización	Datos globales/estructuras manipuladas por funciones.

Conceptos Clave	Funciones, Estructuras (structs).

Ejemplo (C)	La función `depositar(CuentaBancaria *c)` manipula la estructura de datos `c`.


#### OOP:

Enfoque Principal	Objetos (que combinan datos y código)

Organización 	Clases que encapsulan datos y métodos.

Conceptos Clave	 	Encapsulamiento, Herencia, Polimorfismo

Ejemplo (C)		El objeto CuentaBancaria tiene el método depositar().




# Programación Funcional

Paradigma que trata la computación como la evaluación de funciones matemáticas y evita el estado mutable y los datos mutables.


## 1. Fundamentos

##### Se desaprende la mentalidad imperativa (paso a paso, modificando estado).

PF (énfasis en el qué en lugar del cómo).


#### Funciones Puras:

Siempre devuelve el mismo resultado dada la misma entrada (determinística).

No produce efectos secundarios (side effects): no modifica variables externas, no realiza I/O, no muta sus argumentos.


#### Inmutabilidad: 

Entender por qué los datos nunca deben cambiar después de su creación. 

Aprender a trabajar con estructuras de datos que devuelven nuevas copias en lugar de modificar las originales.


#### Transparencia Referencial: 

El principio de que se puede reemplazar una expresión con su valor sin cambiar el comportamiento del programa, gracias al uso de funciones puras.


## 2. Abstracciones Funcionales Básicas

Los pilares de la programación funcional práctica:

#### Funciones de Primera Clase (First-Class Functions):

Entender que las funciones son tratadas como cualquier otra variable: pueden ser asignadas a variables, pasadas como argumentos, y devueltas por otras funciones.


#### Funciones de Orden Superior (Higher-Order Functions - HOF):

##### Map: Aplica una función a cada elemento de una colección y devuelve una nueva colección con los resultados.

##### Filter: Aplica una función de prueba a cada elemento y devuelve una nueva colección con solo los elementos que pasaron la prueba.

##### Reduce (Fold): Aplica una función a un acumulador y a cada elemento de una colección para reducirla a un único valor.


#### Clausuras (Closures): 

Entender cómo las funciones recuerdan y acceden a las variables de su ámbito léxico incluso cuando se ejecutan fuera de ese ámbito.


## 3. Técnicas Avanzadas y Diseño Funcional

##### Introduce patrones que simplifican el flujo de datos y la composición de funciones.

#### Composición de Funciones (Composition):

Crear una nueva función combinando dos o más funciones. El resultado de la función interna alimenta a la siguiente función externa (ej., f(g(x))).

Piping: Una forma de composición donde la salida de una función se pasa como entrada de la siguiente, facilitando la legibilidad del flujo de datos (ej., data |> f |> g |> h).


#### Currificación (Currying): 

Transformar una función que toma múltiples argumentos en una secuencia de funciones, cada una tomando un solo argumento.


#### Aplicación Parcial (Partial Application):

Crear una nueva función fijando algunos de los argumentos de la función original.


#### Recursividad: 

Usar funciones que se llaman a sí mismas para resolver problemas (en lugar de bucles for/while), especialmente en el manejo de colecciones y estructuras de datos anidadas.


## 4. Manejo de Efectos Secundarios (problema real)

##### Dado que las aplicaciones reales deben interactuar con el mundo (I/O, bases de datos, APIs), es necesario gestionar los efectos secundarios de forma segura sin contaminar la lógica pura.

#### Separación de Código: 

Aislar el código impuro (que maneja I/O) del código puro.


#### Contenedores de Contexto (Functors y Monads):

Introducción a los contenedores que envuelven un valor.

El Tipo Maybe / Optional: Un contenedor (o "monad") que gestiona la ausencia de valor (null o undefined), evitando null pointer exceptions de forma funcional.

El Tipo Either / Result: Un contenedor que gestiona los errores o el éxito de una operación sin usar excepciones de try/catch o efectos secundarios.




# Diseño de código


## 1. SOLID

el corazón del diseño de código orientado a objetos y son esenciales para construir software flexible.

S - Single Responsibility Principle (SRP): Una clase debe tener una sola razón para cambiar.

O - Open/Closed Principle (OCP): Las entidades de software (clases, módulos) deben estar abiertas a la extensión pero cerradas a la modificación.

L - Liskov Substitution Principle (LSP): Los objetos de un programa deben poder ser reemplazados por instancias de sus subtipos sin alterar la corrección de ese programa.

I - Interface Segregation Principle (ISP): Un cliente no debería ser forzado a depender de interfaces que no utiliza. Las interfaces deben ser pequeñas y específicas.

D - Dependency Inversion Principle (DIP): Los módulos de alto nivel no deben depender de módulos de bajo nivel; ambos deben depender de abstracciones (interfaces).


## 2. GoF

Soluciones probadas a problemas de diseño recurrentes y son una aplicación directa de los principios SOLID.

Creacionales: Estudiar cómo y cuándo usar patrones como Factory Method, Singleton y Builder para abstraer la instanciación de objetos.

Estructurales: Entender cómo usar patrones como Adapter, Decorator y Facade para componer clases y objetos en estructuras más grandes y flexibles.

Comportamentales: Aplicar patrones como Strategy, Observer y Command para gestionar la comunicación y la asignación de responsabilidades entre objetos.


## 3. Code Smells

Son indicadores de problemas subyacentes en el diseño que dificultan la evolución del código.

Bloaters (Hinchazones): Clases y métodos demasiado grandes (ej. Large Class, Long Method).

Couplers (Acopladores): Problemas de dependencia excesiva (ej. Feature Envy, Inappropriate Intimacy).

Change Preventers (Preventores de Cambio): Diseños que dificultan la modificación (ej. Divergent Change, Shotgun Surgery).

Dispensables (Prescindibles): Código inútil o redundante (ej. Dead Code, Duplicate Code).
    


## 4. Refactoring

##### Reestructurar el código existente sin cambiar su comportamiento externo.

### Aplicar técnicas de refactorización (ej., Extract Method, Rename Variable, Move Method) para eliminar Code Smells y mejorar el diseño.

### Pruebas (Testing): Entender que las pruebas unitarias son el salvavidas de la refactorización. No se debe refactorizar sin pruebas de cobertura que aseguren que el comportamiento de la aplicación no cambie.

TDD (Test-Driven Development): Practicar la técnica de escribir las pruebas antes de escribir el código funcional.


## 5. Diseño a Nivel de Función/Método

Para mantener las funciones concisas y efectivas:

### Funciones Pequeñas: La regla general es que las funciones no deberían tener más de 10-20 líneas.


### Un Nivel de Abstracción por Función: Cada función debe trabajar en un solo nivel de detalle. 

##### Si mezcla tareas de alto nivel (orquestación) con detalles de bajo nivel (manipulación de strings), debe ser dividida.


### Argumentos y Estado: Reducir el número de argumentos de las funciones (máximo 3). Evitar modificar el estado global o pasar variables de salida (preferir valores de retorno).
    

## 6. Avanzado

### Patrones de Concurrencia y Paralelismo:

Entender los problemas de concurrencia (race conditions, deadlocks).

Estudiar patrones como Immutable Object (objetos inmutables) y Thread Confinement para simplificar la gestión de estados compartidos.

Conocer patrones como Producer-Consumer (Productor-Consumidor) y Worker Thread (Hilos de Trabajo).


### Patrones de Integración:

Dependency Injection (DI) / Inversión de Control (IoC): Profundizar en cómo los contenedores de DI gestionan las dependencias, aplicando el Principio de Inversión de Dependencia (DIP).

Service Locator (Localizador de Servicios): Entender cuándo es útil y por qué a menudo se considera un anti-patrón frente a la DI.


### Manejo de Errores Funcional:

Estudiar patrones funcionales como Maybe (o Optional) y Either (o Result) para manejar los valores nulos y los errores sin recurrir a excepciones (try/catch), mejorando la transparencia referencial del código.


## 7. Patrones Arquitectónicos y Estructurales

### Patrones de Capas (Layered Architecture):

#### Diseño en tres o más capas (Presentación, Lógica de Negocio/Dominio, Persistencia/Acceso a Datos).

##### Entender la regla de dependencia: Las capas siempre deben depender solo de la capa inferior.


### Arquitectura Hexagonal (Ports and Adapters):

#### Comprender cómo aislar la lógica de negocio central (el dominio) de las tecnologías externas (base de datos, UI, APIs).

#### Estudio de Puertos (Interfaces de la lógica de negocio) y Adaptadores (Implementaciones para tecnologías específicas).


### Patrones de Acceso a Datos:

#### Repository (Repositorio): Aísla la lógica de acceso a datos del dominio.

#### Unit of Work (Unidad de Trabajo): Gestiona las transacciones y asegura que múltiples operaciones de repositorio se realicen de forma atómica.
    
    
### Patrones de Interfaz:

#### Model-View-Controller (MVC): El patrón clásico para la separación de preocupaciones en aplicaciones con interfaz.

#### Model-View-ViewModel (MVVM) y Model-View-Presenter (MVP): Variantes de MVC usadas en frontends modernos (Angular, React, etc.) para mejorar la testabilidad.
    

### Calidad y Revisión del código

#### Revisión de Código (Code Review):

Aprender a revisar código de manera constructiva, enfocándose en el diseño y los principios, no solo en el estilo.

Practicar la identificación de Code Smells en el trabajo de otros.


#### Refactorización Continua (Evolutionary Design):

Adoptar la mentalidad de que el diseño no es un paso inicial, sino un proceso continuo de mejora.

Priorizar la refactorización como una tarea de desarrollo estándar, no solo como una solución de emergencia.


### Testing:

#### Pruebas de Componente: Probar clases de forma aislada (pruebas unitarias).

#### Pruebas de Integración: Probar cómo las diferentes capas (Servicio, Repositorio) interactúan entre sí. El diseño modular y la DI hacen que la integración sea más fácil de probar.



# Manejo de errores

## 1. Fundamentos y Taxonomía del Error

Error vs. Excepción vs. Fallo 

Errores Anticipados (Recuperables): Fallos de validación, timeouts de red, archivos no encontrados, permisos denegados. El programa debe saber cómo continuar.

Errores No Anticipados (Fatales): Fallos del sistema, errores de memoria, bugs lógicos. El programa puede necesitar terminar.

Tipos de Usuario: Errores de usuario (entrada inválida) vs. Errores del sistema (del programador).


Objetivo del Buen Manejo de Errores:

Estado Consistente: Asegurar que un error no deje el sistema en un estado inestable o corrupto (ej. transacciones a medio hacer).

Información Útil: Registrar el contexto completo del error (pila, datos de entrada) para el desarrollador.

Feedback Amigable: Presentar el error al usuario de manera clara y sin exponer detalles técnicos sensibles.


## 2. Paradigma Imperativo: Excepciones (try/catch)

##### Método dominante en la mayoría de los lenguajes

### Try-Catch-Finally: Dominar el flujo de control. El bloque finally para la limpieza de recursos.


### Tipos de Excepción:

##### Excepciones Checked: (Java) Excepciones que deben ser declaradas o capturadas.

Excepciones Unchecked / Runtime: (C#, Python, JS) Errores que el sistema puede lanzar en cualquier momento.


### Creación de Errores Personalizados: Extender clases base de error (ej., MyCustomError extends Error) para crear tipos semánticos de error (ej., UsuarioNoEncontradoError).


### Principios de Diseño con Excepciones:

#### Throw Early, Catch Late:

##### El error debe ser lanzado lo antes posible (en la capa más baja donde se detecta)

##### Pero capturado lo más tarde posible (en la capa superior que sabe qué hacer al respecto).


#### Evitar "Tragarse" Errores: 

##### Nunca usar un catch vacío o que simplemente imprima en consola sin re-lanzar o registrar el error.


#### Encapsulamiento de Errores:

##### En la capa de servicio, traducir los errores de bajo nivel (ej., error SQL de conexión) en errores de alto nivel del dominio (ej., ErrorServicioIndisponible).


## 3. Paradigma Funcional: Tipos de Resultado (Result Pattern)

##### Este método busca la transparencia referencial al evitar el efecto secundario de las excepciones.

### Abstracción de Contenedores:

#### El Tipo Optional / Maybe:

##### Un contenedor que puede tener un valor o estar vacío.

##### Se usa para manejar la ausencia de valor (null/undefined) sin lanzar un error, obligando al programador a gestionar ambos casos.


#### El Tipo Either / Result (o Union Type en TypeScript):

##### Un tipo que solo puede ser un Success (valor) o un Failure (error).

##### Convención: El Left (Izquierda) contiene el error, el Right (Derecha) contiene el valor exitoso.


Manejo de Errores con Composición

map y flatMap (o bind): Usar funciones de orden superior para aplicar lógica solo si el resultado es Success. Si es Failure, el contenedor pasa el error sin ejecutar más código, manteniendo el flujo funcional.

Patrón de Propagación: El Result se propaga de forma natural a través de la cadena de llamadas hasta que una función de capa superior lo maneja explícitamente (ej., convirtiéndolo en una respuesta HTTP).


## 4. Manejo de Errores Arquitectónico (Web)

##### En sistemas basados en APIs (como NestJS o cualquier backend), el manejo de errores se centraliza.

Estándares HTTP (Backend)

Clasificación de Códigos: Dominar cuándo usar los códigos 4xx (errores del cliente: validación, autenticación) y 5xx (errores del servidor: bug, fallo de base de datos).

Filtros de Excepción (NestJS): Implementar global exception filters que interceptan cualquier error lanzado y lo formatean automáticamente como una respuesta JSON válida con el código HTTP apropiado.

Seguridad: Nunca incluir stack traces (pilas de llamadas) en las respuestas de producción al cliente, ya que pueden exponer la estructura interna del servidor.


#### Presentación en la UI (Frontend)

React Error Boundaries: Componentes especializados que capturan errores de JavaScript dentro de su subárbol de React y renderizan una interfaz de reserva (fallback UI), evitando que un error local rompa toda la aplicación.

Estado de Error Local: Manejar el estado de error de forma local en formularios y componentes de interacción (ej., mostrar el mensaje de validación junto al campo).

Notificaciones Globales: Usar un sistema de toasts o snackbars (notificaciones flotantes) para informar al usuario de errores de red o del sistema no fatales.


## 5. Observabilidad y Monitoreo

Esta fase es crítica para manejar los errores no anticipados que ocurren en producción.


Logging: Implementar un sistema de logging estructurado (JSON, no solo texto plano) usando herramientas como Winston (Node.js) o Log4j (Java).

Niveles: Uso correcto de DEBUG, INFO, WARN, y ERROR.

Contexto: Registrar el ID de la petición (correlation ID), el usuario, y las variables que puedan haber causado el error.


APM (Application Performance Monitoring): Integrar servicios como Sentry, Datadog o New Relic para:

Capturar errores y stack traces en tiempo real.

Agrupar errores por ocurrencia y frecuencia.

Alertar al equipo de desarrollo cuando se excede un umbral de errores (ej., más de 10 errores 500 por minuto).


Métricas y Dashboards: Monitorear el número de peticiones fallidas (tasa de error) en dashboards de Grafana o Prometheus.




# Validación

##### Proceso que garantiza la integridad de los datos y la robustez del sistema a lo largo de todas las capas de una aplicación.


## 1. Fundamentos y Tipos de Validación

##### La validación es la verificación de que los datos cumplen con las restricciones de integridad, formato y lógica de negocio.

Taxonomía de la Validación:

Validación de Sintaxis/Formato: Verifica si el dato tiene el formato correcto (ej., un email tiene @, una fecha es válida).

Validación Semántica/Lógica: Verifica si el dato tiene sentido en el contexto del negocio (ej., la fecha de fin es posterior a la fecha de inicio, la edad es mayor de 18).

Validación de Integridad: Verifica la existencia o relación del dato con otros datos (ej., el ID de usuario existe en la base de datos).


Principios de Seguridad: Comprender que la validación es la primera línea de defensa contra ataques como Inyección SQL o Cross-Site Scripting (XSS).


## 2. Validación en Capas (Defense in Depth)

##### La validación debe repetirse en diferentes capas del sistema.

#### Validación del Cliente (Frontend):

Propósito: Proporcionar retroalimentación inmediata al usuario y mejorar la UX.

Mecanismos: Uso de HTML5 attributes (required, pattern), lógica en JavaScript/TypeScript, y frameworks de UI (ej., formularios reactivos de Angular, librerías de React como Formik/React Hook Form).

Regla: Nunca confiar en la validación del lado del cliente para la seguridad


#### Validación del Servidor (Backend):

Propósito: La única fuente confiable de la integridad de los datos.

Mecanismos: Uso de bibliotecas de validación (ej., class-validator en NestJS, serializers en Django, Spring Validation) en la capa de Controlador/DTO.


#### Validación del Almacenamiento (Base de Datos):

Propósito: Garantizar la integridad transaccional final.

Mecanismos: Uso de restricciones de base de datos (UNIQUE, NOT NULL, CHECK, foreign keys).


## 3. Implementación Práctica: DTOs y Esquemas

##### Forma moderna y orientada a patrones de diseño para manejar la validación en el backend.

DTOs (Data Transfer Objects):

Definir clases o interfaces específicas para la estructura de los datos que se esperan en una petición (ej., CrearUsuarioDto).

Uso de decoradores o anotaciones para adjuntar las reglas de validación directamente al DTO (ej., @IsEmail(), @IsStrongPassword()).
    
    
#### Esquemas de Validación (Schema Validation):

Uso de bibliotecas externas para definir esquemas de validación potentes (ej., Zod, Joi, Yup en JavaScript/Node.js). 

Esto permite definir un objeto de reglas que se aplica a los datos de entrada antes de que pasen al Controlador/Servicio.   


#### Serialización y Transformación:

Transformar los datos de entrada (string de JSON) a un objeto tipado (ej., convertir una cadena a un número o un objeto Date).


## 4. Estrategias Avanzadas y Seguridad    
    
Validación Asíncrona:

Validar datos que requieren una llamada a la base de datos o a un servicio externo (ej., verificar si el nombre de usuario ya existe).

Manejar los estados de carga y errores de estas validaciones en el frontend y backend.


Normalización y Sanitización:

Normalización: Estandarizar la entrada (ej., convertir a minúsculas, eliminar espacios en blanco al inicio/final).

Sanitización: Limpiar la entrada para neutralizar contenido potencialmente peligroso (ej., eliminar etiquetas <script> de un campo de texto con bibliotecas como DOMPurify). 


Localización de Errores:

Manejar mensajes de error que deben ser mostrados en diferentes idiomas (i18n).

Mapear errores técnicos de validación (ej., ConstraintViolation) a mensajes amigables y localizados.


## Avanzado

#### Estrategias en Arquitecturas Distribuidas (Microservicios) 🌐

En arquitecturas SOA o de Microservicios, la validación debe ser consciente de las fronteras de servicio.

Validación de Puerta de Enlace (Gateway Validation):

El API Gateway debe realizar la validación básica de formato (esquema JSON, headers) y la autenticación antes de enrutar la petición, protegiendo a los servicios internos de la carga de peticiones malformadas.


Validación Inter-Servicio:

Cuando un Servicio A llama a un Servicio B, el Servicio B debe re-validar siempre la entrada, incluso si asume que Servicio A ya lo hizo. Esto previene fallos internos en caso de un error o bug en el servicio llamante.


Patrón Event Sourcing y Consistencia:

En sistemas basados en eventos, la validación debe asegurar que los eventos publicados sean válidos y que solo se generen si el estado actual lo permite.

Implementar validación de esquema en los mensajes (ej., con Avro o Protocol Buffers) para garantizar que todos los servicios que consumen el mensaje entienden su estructura



# Sanitización

##### Limpieza, filtrado y normalización de los datos de entrada para garantizar la seguridad y la integridad del sistema

##### La sanitización es la segunda línea de defensa crítica después de la validación.


## 1. Fundamentos

### Validación: Pregunta si el dato es correcto (¿es un email válido?). Si es incorrecto, lo rechaza.

### Sanitización: Pregunta si el dato es seguro/limpio (¿contiene código malicioso?). Si está "sucio", lo limpia o elimina el contenido dañino.

### Problemas a Resolver: Enfocarse en los principales riesgos de seguridad: XSS (Cross-Site Scripting), Inyección SQL, y manipulación de datos.


## 2. Técnicas Básicas y Normalización

### Normalización de Datos:

#### Recorte (Trimming): Eliminar espacios en blanco innecesarios al inicio y al final de una cadena.

#### Cambio de Caso: Convertir todo a mayúsculas o minúsculas para comparaciones consistentes.

#### Conversión de Tipo: Asegurar que los datos numéricos o booleanos se conviertan al tipo nativo del lenguaje ("123" a 123).
    

### Sanitización para el Almacenamiento (Base de Datos):

#### Escapado (Escaping): El proceso de añadir caracteres de escape a los datos de entrada. En bases de datos, esto asegura que comillas simples (') u otros caracteres especiales se interpreten como parte del dato, y no como comandos SQL.

#### Uso de Sentencias Preparadas (Prepared Statements): La defensa más fuerte contra la Inyección SQL. El driver de la base de datos se encarga de separar el comando SQL de los datos, haciendo imposible que un atacante inyecte código malicioso
    
    
## 3. Prevención de XSS y Contenido Inseguro

##### Neutralizar cualquier contenido que pueda ejecutar código JavaScript en el navegador de otro usuario (XSS).

### Sanitización de Salida (Output Encoding):

Regla: Los datos deben ser sanitizados inmediatamente antes de ser renderizados en el navegador.

Mecanismo: Convertir caracteres especiales HTML a sus entidades HTML correspondientes (ej., < se convierte en &lt;, > en &gt;). Esto hace que el navegador muestre el código como texto y no lo ejecute.

Frameworks: Entender cómo frameworks modernos (React, Angular) ya manejan el output encoding por defecto para prevenir XSS


### Sanitización de Contenido Rico (HTML):

Uso: Cuando se permite a los usuarios introducir HTML (ej., un editor WYSIWYG).

Mecanismo: Usar bibliotecas específicas (DOMPurify en JavaScript, HTML Purifier en PHP) que eliminan selectivamente etiquetas peligrosas (<script>, onerror, style) y solo permiten un subconjunto de HTML seguro.
    
    
## Avanzado 

Lista Blanca (Whitelisting) vs. Lista Negra (Blacklisting):

Lista Negra (EVITAR): Intentar bloquear solo los datos "malos" (ej., bloquear la palabra <script>). Es inseguro porque siempre se pueden encontrar nuevas formas de atacar.

Lista Blanca (PREFERIDO): Permitir solo los caracteres, formatos o etiquetas que son explícitamente necesarios. Si algo no está en la lista blanca, es rechazado o eliminado.


Sanitización en la Capa de Acceso a Datos (Repository/ORM):

ORM (Object-Relational Mappers): Entender cómo los ORMs modernos (TypeORM, Prisma) implementan automáticamente sentencias preparadas, haciendo el escaping manual innecesario y peligroso.

Asegurar que cualquier consulta SQL cruda que se utilice dentro del repositorio también utilice parámetros ligados (bind parameters) para la sanitización.


Tratamiento de Archivos Subidos:

Sanitización de nombres de archivo (eliminar caracteres especiales, ../ para prevenir Directory Traversal).

Validación de tipo MIME y tamaño.


## 5. Herramientas

Backend (Node.js/JavaScript):

DOMPurify: El estándar para la sanitización de HTML.

Validator.js: Útil para la validación/sanitización de formato simple (emails, URLs).


Backend (Otros):

OWASP ESAPI: Conjunto de herramientas de seguridad para múltiples lenguajes (Java, PHP, etc.) que incluyen funciones robustas de encoding y escaping.


Frontend (React/Angular):

Reconocer y confiar en la sanitización automática que el framework aplica al binding de datos. Solo usar funciones como dangerouslySetInnerHTML de React cuando se usa una librería de sanitización previa (ej., DOMPurify).



# DDD

##### Diseño Dirigido por el Dominio es una metodología y un conjunto de principios que buscan modelar el software para que refleje fielmente la realidad y complejidad del Dominio de Negocio.


## 1. Fundamentos 

##### Esta fase define el contexto y los límites del problema.

### El Dominio y el Lenguaje

#### Dominio de Negocio: Comprender el área de conocimiento específica a la que se aplica el software (ej., logística, seguros, e-commerce).

#### Lenguaje Ubicuo (Ubiquitous Language): Aprender la regla clave de DDD: usar los términos exactos del experto de negocio en todo el código, la documentación y las conversaciones.

Modelos y Realidad: Entender que el código es una representación del modelo del dominio.


### Delimitación de Contextos

#### Contextos Delimitados (Bounded Contexts - BC): El concepto más importante de DDD.

##### Un gran sistema se divide en subsistemas autónomos, donde cada subsistema tiene su propio modelo y su propio Lenguaje Ubicuo.

Ejemplo: La palabra "Producto" significa algo diferente en el Contexto de "Inventario" (con stock, ubicación) que en el Contexto de "Ventas" (con precio, promoción).


#### Modelo Canónico (Anti-Patrón): Comprender por qué intentar crear un modelo único y global que lo abarque todo es un error en DDD.


### Mapeo y Relación de Contextos

#### Mapas de Contextos: Herramienta para visualizar cómo se relacionan y comunican los diferentes BCs.

#### Relaciones de Integración: Estudiar los patrones de relación entre BCs (ej., Customer/Supplier, Conformist, Anti-Corruption Layer).

##### Anti-Corruption Layer (ACL): Patrón clave para aislar un BC interno de la complejidad o el modelo de un sistema externo.


## 2. Modelado Táctico (Bloques de Construcción)

##### Patrones de código que forman el núcleo del Dominio dentro de un Contexto Delimitado específico.

### Objetos del Dominio

#### Entidades (Entities): Objetos que tienen una identidad única y un ciclo de vida, y cuya identidad es lo más importante (ej., Usuario, Orden).

#### Objetos de Valor (Value Objects): Objetos inmutables que no tienen identidad única, sino que se definen por sus atributos. Son la piedra angular de la inmutabilidad y la validación (ej., Direccion, Dinero, RangoFechas).

#### Servicios de Dominio (Domain Services): Clases que contienen lógica de negocio importante que no pertenece naturalmente a una sola Entidad u Objeto de Valor (ej., transferencia de dinero entre cuentas).


### Agregados

Agregado (Aggregate): Un patrón que agrupa Entidades y Objetos de Valor relacionados que deben ser tratados como una única unidad transaccional.

Raíz del Agregado (Aggregate Root): La única Entidad pública a través de la cual se accede a cualquier otro miembro del Agregado.

Regla de Consistencia: El Agregado debe ser siempre consistente después de cualquier operación


### Acceso a Datos y Eventos

Repositorios (Repositories): Patrón clave para encapsular la lógica de persistencia. Permite que el Dominio trate a los Agregados como si fueran una colección en memoria (ya cubierto en un plan anterior, pero esencial en DDD).

Eventos de Dominio (Domain Events): Un patrón para notificar a otros Agregados o Contextos que algo significativo ha ocurrido dentro del Dominio (ej., OrdenCreada, StockAjustado).


## 3. Arquitectura y Patrones de Aplicación 

##### DDD promueve arquitecturas que protegen el Dominio de las preocupaciones de la infraestructura (BD, UI).

### Arquitectura Hexagonal (Ports and Adapters): La arquitectura más recomendada para DDD.

Dominio en el Centro: La lógica de negocio está aislada.

Puertos (Interfaces): Definen las capacidades que el Dominio requiere o expone.

Adaptadores: Implementan los puertos para tecnologías específicas (ej., Adaptador MySQL, Adaptador REST).


### Patrón de Unidad de Trabajo (Unit of Work - UoW): Gestionar las transacciones de los Repositorios para asegurar la atomicidad de las operaciones del Dominio.


### CQRS (Command Query Responsibility Segregation):

Función: Separar los modelos y flujos de datos para la Escritura (Comandos) y la Lectura (Consultas).

Beneficio DDD: Permite que la parte de Comandos mantenga un diseño complejo de Agregados (para la consistencia), mientras que la parte de Consultas puede usar modelos simples y optimizados para la lectura (velocidad).


## 4. Práctica 

Modelado con Expertos: Practicar sesiones de Event Storming o Domain Storytelling para extraer el lenguaje ubicuo y los límites del Contexto.

#### Aplicación en Lenguajes OO: Implementar Agregados, Entidades y Objetos de Valor en el lenguaje de tu elección (C#, Java, TypeScript) para internalizar el concepto de inmutabilidad.

Lecturas Clave: Leer el libro seminal de Eric Evans, Domain-Driven Design: Tackling Complexity in the Heart of Software.




# Testing

##### Se estructura comúnmente en la famosa Pirámide de Pruebas.


## 1. Fundamentos

#### Las pruebas son la verificación de que el software funciona como se espera y la validación de que cumple las necesidades del usuario.

Taxonomía de Pruebas:

### Pruebas Funcionales: ¿El software hace lo que se supone que debe hacer?

### Pruebas No Funcionales: ¿Qué tan bien lo hace? (Rendimiento, Usabilidad, Seguridad, etc.).
    

### Ciclo de Vida del Testing (STLC): Entender cuándo y cómo se integra el testing en el desarrollo (Planificación, Diseño de Casos, Ejecución, Cierre)

Tipos de Diseño de Casos de Prueba (Cajas):

Caja Blanca (White Box): Se prueba la estructura interna del código.

#### Caja Negra (Black Box): Se prueba la funcionalidad basándose solo en los requisitos (sin ver el código).

Caja Gris (Grey Box): Combina ambas.


### Pruebas Estáticas vs. Dinámicas: (Estáticas: Revisiones de código; Dinámicas: Ejecución del código).


## 2. La Pirámide de Pruebas (Técnicas)

Modelo arquitectónico para equilibrar los tipos de prueba. 

##### Se recomienda que la base sea la más grande (pruebas rápidas y económicas).


### Base: Pruebas Unitarias (Unit Testing)

##### Probar la unidad más pequeña y aislada del código (una función, un método, una clase). Son las más rápidas y económicas.

#### Conceptos Clave: Aislamiento y Mocks/Stubs/Spies (simulación de dependencias externas).

Herramientas (Ejemplos): Jest (JavaScript), JUnit/TestNG (Java), xUnit (.NET), Pytest (Python).


### Medio: Pruebas de Integración (Integration Testing)

#### Propósito: Verificar que dos o más unidades (ej., un servicio y el repositorio de la base de datos, o dos microservicios) interactúen correctamente.

### Conceptos Clave: Probar la interfaz y el contrato de comunicación. A menudo se utiliza una base de datos real o mocks de red.

Patrón: Contrato Driven Testing (Pruebas Dirigidas por Contrato), especialmente en microservicios.


### Cúspide: Pruebas End-to-End (E2E)

##### Propósito: Simular el flujo completo del usuario final a través de la aplicación (UI, API, BD) para asegurar que el sistema funciona de punta a punta.

### Conceptos Clave: Son las más lentas, frágiles y costosas. Deben ser pocas y centradas en los flujos críticos.

Herramientas (Ejemplos): Cypress, Playwright, Selenium.


## 3. Pruebas de Calidad (Non-Functional Testing)

##### Estas pruebas aseguran que el software sea robusto, eficiente y seguro.


### Pruebas de Rendimiento (Performance):

Pruebas de Carga (Load): Verificar cómo se comporta el sistema bajo la carga esperada de usuarios.

Pruebas de Estrés (Stress): Empujar el sistema más allá de su capacidad normal para encontrar el punto de ruptura.

Herramientas: JMeter, Gatling, LoadRunner.


### Pruebas de Seguridad:

Pruebas de Penetración (Penetration Testing): Simular ataques externos para encontrar vulnerabilidades.

Análisis Estático de Seguridad de Aplicaciones (SAST): Uso de herramientas para escanear el código fuente en busca de vulnerabilidades comunes (ej., SQL Injection).


### Pruebas de Usabilidad (UX): Verificar la facilidad de uso y la experiencia del usuario.


### Pruebas de Accesibilidad (A11y): Asegurar que la aplicación sea usable para personas con discapacidades (uso de screen readers, teclados, etc.).



# CI/CD


## 1. Fundamentos

### CI (Integración Continua): La práctica de fusionar (merge) el código de los desarrolladores a un repositorio compartido varias veces al día y ejecutar builds y pruebas automáticas.

### CD (Entrega/Despliegue Continuo): La automatización que lleva el código verificado a un entorno de staging (Entrega) o directamente a producción (Despliegue).
    

### Automatización como Principio: Entender por qué la automatización de la integración y el testing reduce los riesgos y aumenta la velocidad.


### Conceptos clave:

#### Pipeline: La secuencia de pasos automatizados que transforma el código fuente en un software listo para producción.

#### Artefacto (Artifact): El resultado final de un build (ej., un archivo .jar, una imagen de Docker, archivos .zip compilados).


## 2. Integración Continua (CI)

##### Automatizar la validación del código tan pronto como se fusiona

Versionamiento de Código: Dominar Git y las estrategias de branching (ej., GitFlow o Trunk-Based Development) que facilitan la CI.


#### Build Automation (Automatización de Construcción):

Uso de herramientas específicas del lenguaje para compilar el código y gestionar dependencias (ej., npm/Yarn, Maven/Gradle, pip).


#### Testing Automatizado: Integrar la Pirámide de Pruebas en el pipeline:

Ejecución de Pruebas Unitarias y Pruebas de Integración después de cada commit.

Herramientas de Análisis Estático de Código (Linters, SonarQube) para verificar la calidad y la seguridad sin ejecutar el código.


#### Generación de Artefactos: Configurar el pipeline para producir un artefacto inmutable y etiquetado (ej., con el commit hash).


## 3. Despliegue Continuo (CD)

### Entornos de Despliegue: Entender y configurar los diferentes entornos (ej., Development, Staging/QA, Production).


### Contenedores (Docker):

Dominar Docker: Creación de Dockerfiles para empaquetar la aplicación con todas sus dependencias.

Registro de Contenedores: Almacenar las imágenes finales en un registro (ej., Docker Hub, AWS ECR, Google Artifact Registry).


### Orquestación (Kubernetes - K8s):

Entender los conceptos básicos de Pods, Deployments y Services para gestionar y escalar aplicaciones en contenedores en producción.


### Patrones de Despliegue:

Despliegue Azul/Verde (Blue/Green): Desplegar la nueva versión junto a la antigua y cambiar el tráfico de forma instantánea.

Despliegue Canary: Desplegar la nueva versión solo a un pequeño subconjunto de usuarios para monitorear el impacto antes de un despliegue completo.

Rollback: Automatizar el proceso de volver rápidamente a una versión estable anterior en caso de fallo.


## 4. Herramientas CI/CD

Jenkins	Servidor de Automatización (Autohospedado)	Histórico y flexible; altamente configurable a través de plugins.

GitHub Actions	Nube (Integrado en Git)	Moderno y popular; el pipeline se define directamente en el repositorio.

GitLab CI	Nube (Integrado en Git)	Fuerte integración con todo el ciclo de vida del DevOps de GitLab.

AWS CodePipeline/CodeBuild	Nube (Ecosistema AWS)	Herramientas específicas de AWS para un stack totalmente en la nube.


## 5. Seguridad y Observabilidad en el Pipeline

Integrar el testing no funcional y el monitoreo en el flujo automatizado.

DevSecOps: Integrar la seguridad en cada etapa del pipeline (Shift Left).

Escaneo de Vulnerabilidades: Uso de herramientas para escanear dependencias y artefactos de Docker en busca de vulnerabilidades conocidas (ej., CVEs).


Observabilidad:

Logging: Asegurar que el pipeline registre todos los pasos y errores de manera estructurada.

Monitoreo: Integrar el pipeline con herramientas de monitoreo (ej., Prometheus) para rastrear métricas como el Tiempo de Despliegue y la Tasa de Fallos.




# Rich Domain Model

Se basa fundamentalmente en los principios del Diseño Dirigido por el Dominio (DDD)

Enfocándose en la lógica de negocio activa y la encapsulación

##### Se trata de mover la lógica de las clases de servicio a los propios objetos del dominio.


## 1. Del Modelo Anémico al Rico

### Modelo Anémico (Anemic Domain Model - Anti-Patrón): Caracterizado por clases de dominio (Entidades) que solo contienen datos (getters y setters) y ninguna lógica

##### Toda la lógica de negocio reside en clases de servicio separadas (UserService, OrderService).


### Modelo de Dominio Rico (Rich Domain Model): Las clases de dominio (Entidades y Agregados) contienen datos y comportamiento (lógica de negocio).

#### Los métodos se definen en el objeto al que pertenecen, garantizando que el objeto siempre esté en un estado válido.


### Principio de Responsabilidad: La lógica debe estar tan cerca de los datos que manipula como sea posible.


## 2. Bloques Tácticos del Dominio Rico

##### Patrones de código de DDD que permiten implementar un modelo rico.


### Entidades con Comportamiento (Entities with Behavior):

#### Los métodos deben estar definidos en la Entidad. Por ejemplo, en lugar de servicioCuenta.depositar(cuenta, monto), se usa cuenta.depositar(monto).

##### El método depositar(monto) dentro de la entidad Cuenta debe contener la lógica de validación (ej., el monto no es negativo) y actualizar el estado interno (balance).


### Objetos de Valor (Value Objects):

#### Dominar la creación de objetos inmutables que encapsulan la validación y el formato de los datos desde el momento de su construcción (ej., una clase EmailAddress que garantiza que siempre es un email válido).

##### Los Value Objects son la base del modelo rico, ya que hacen imposible la creación de datos inválidos.
    

### Agregados (Aggregates):

#### Usar Agregados para agrupar Entidades y Objetos de Valor que deben ser tratados como una unidad transaccional.

##### El Raíz del Agregado debe ser el único punto de entrada para modificar el estado interno. Todos los métodos de mutación deben estar en la Raíz.
    

## 3. Implementación: Lógica de Negocio y Consistencia

##### Aplicar los principios para asegurar la integridad transaccional y la pureza del dominio.


### Constructores y Fábricas:

#### Usar el constructor de las Entidades y Agregados para aplicar la validación inicial. Si la validación falla, se lanza una excepción.

#### Implementar el Patrón Factory o Builder para crear Agregados complejos, separando la lógica de creación de la lógica de negocio
    
    
### Consistencia y Transacciones:

#### Asegurar que todos los métodos públicos del Agregado dejen al Agregado en un estado válido y consistente al finalizar la operación.

#### Minimizar el número de mutadores públicos; exponer solo los métodos que representan acciones del negocio (ej., procesarPedido(), asignarAConductor()).


### Servicios de Dominio Limitados:

Reducir los Servicios de Dominio a la lógica que necesariamente involucra a múltiples Agregados (ej., transferencia de fondos entre dos cuentas). 

Si la lógica pertenece a un solo objeto, debe estar en ese objeto.
    
    
## 4. Patrones de Infraestructura y Anti-Corrupción

##### Cómo el modelo rico interactúa con el mundo exterior (base de datos, APIs externas) sin contaminarse.

### Repositorios (Repositories):

El Dominio (la Entidad) no debe saber cómo se almacena o recupera.

El Repositorio se encarga de: 1) Recuperar el Agregado completo (incluyendo todas sus partes internas) de la BD, y 2) Persistir el Agregado después de que sus métodos de negocio han sido ejecutados.


### Anti-Corruption Layer (ACL):

Si tu modelo rico necesita interactuar con un sistema legado o externo con un modelo "anémico" o diferente, usa una ACL para traducir los datos externos a tu propio modelo de dominio rico


### Manejo de I/O:

Las Entidades ricas y Agregados deben permanecer puros (sin realizar I/O, sin llamadas a BD o red). El Repositorio o un Servicio de Aplicación debe ser responsable de orquestar estas acciones.


## Avanzado

### Modelado de Datos y DDD:    

#### Asegurar que la base de datos no dicte el diseño del modelo, sino que sirva de apoyo.


#### Patrón de Mapeo Relacional de Objetos (ORM):

Aprender a configurar el ORM (ej., TypeORM, Hibernate) para que respete los límites del Agregado y la encapsulación.

Uso de campos privados y constructores privados para que el ORM pueda mapear los datos sin exponer la estructura interna del Agregado al mundo exterior.


#### Separación del Modelo de Persistencia:

En sistemas complejos, usar Modelos de Persistencia (DTOs de base de datos) que son específicos del esquema de la BD y un Mapper para traducir entre el Agregado (rico) y el Modelo de Persistencia (plano). El Repositorio es responsable de esta traducción.



# Estado 

## Estado y estructuras de control y flujo

El estado es también crucial para determinar el flujo de control del algoritmo.

### Bifurcaciones: Las estructuras condicionales (if/else, switch) deciden qué camino seguir basándose en el estado actual de las variables.

### Iteración: Los bucles (for, while) deciden si continuar o detenerse basándose en si se ha alcanzado una condición de estado final (ej., i es mayor que el límite, la lista está vacía).

### Máquinas de Estados Finitos (FSM): En muchos algoritmos, la lógica se modela explícitamente como una FSM, donde el programa solo puede existir en un número finito de estados predefinidos, y las acciones válidas dependen del estado actual.
    

## Estado en Sistemas Distribuidos y Web

En las arquitecturas modernas (microservicios, web apps), el estado se gestiona a través de múltiples máquinas y capas, lo que introduce nuevos desafíos.

### Estado de Sesión (Session State): En aplicaciones web, el estado se refiere a los datos específicos de un usuario durante su interacción (ej., carrito de compras, usuario logueado).

Estado Persistente: Se almacena en el servidor (base de datos o caché distribuida) y se asocia a un token de sesión.

Estado del Cliente: Se almacena en el navegador (ej., cookies, localStorage) para recordar preferencias o la información de la sesión.


### Estado Distribuido: Cuando la aplicación se ejecuta en múltiples servidores, es crucial que todos los servidores tengan acceso al mismo estado o que el estado se sincronice. Esto requiere bases de datos distribuidas y cachés como Redis.


### Servicios Stateless (Sin Estado): El patrón arquitectónico preferido, donde el servidor de la API no almacena ningún estado de sesión del cliente. En su lugar, el cliente envía toda la información necesaria (ej., un token JWT con la identidad) en cada solicitud. Esto facilita la escalabilidad horizontal.

    
## Estado Transaccional y Consistencia

El concepto de estado es central en la gestión de transacciones para asegurar la integridad de los datos.


Propiedades ACID (Transacciones de Base de Datos): Las transacciones se utilizan para modificar el estado de forma segura. El estado se considera modificado solo si se cumplen las propiedades ACID:

Atomicidad: Toda la transacción ocurre, o ninguna ocurre. El estado nunca debe quedar a mitad de camino.

Consistencia: La transacción lleva el estado de la base de datos de un estado válido a otro estado válido.

Aislamiento: Múltiples transacciones concurrentes no interfieren entre sí.

Durabilidad: Una vez que la transacción está confirmada (committed), el nuevo estado persiste incluso si el sistema falla.


Modelos de Consistencia (Sistemas Distribuidos): En sistemas a gran escala, se relajan las reglas ACID, introduciendo el concepto de Consistencia Final (Eventual Consistency). Esto significa que el estado puede ser inconsistente por un breve período de tiempo, pero eventualmente todos los nodos de la red convergerán en el mismo estado final.


# Tratar el 'Estdo'

## 1. Inmutabilidad

### Principio: El estado (los datos) nunca debe cambiarse directamente. Cualquier operación que "modifique" un dato debe devolver una copia nueva con los cambios aplicados.

Beneficios: 

Seguridad en Concurrencia: Elimina las race conditions (condiciones de carrera) porque múltiples hilos no pueden intentar modificar la misma variable simultáneamente.

Trazabilidad: Es fácil implementar deshacer/rehacer y auditorías, ya que tienes la historia completa de los datos.


##### Las estructuras de datos dentro de librerías como Redux o Zustand en JavaScript, donde el reducer siempre devuelve un nuevo estado. 


## 2. Centralización y Flujo Unidireccional (Frontend)

##### Se centra en la gestión predecible del estado de la aplicación.

### Patrón de Flujo Unidireccional: El estado fluye en un solo sentido, haciendo el sistema más fácil de depurar.

1. Vista emite una Acción/Evento.

2. El evento llega a la Tienda (Store) central.

3. La Tienda/store (utilizando lógica pura) calcula el nuevo estado.

4. La Vista se actualiza automáticamente (observable) para reflejar el nuevo estado.


### Centralización (El "Store"): El estado de la aplicación reside en un único lugar global accesible, lo que evita que los componentes dependan del estado de otros componentes lejanos ("prop drilling").


### Herramientas Clave:

Redux/NgRx/Vuex: Los patrones más conocidos para grandes aplicaciones.

Zustand/Jotai: Soluciones modernas y más ligeras que aplican los mismos principios de inmutabilidad y centralización de manera más simple.


## 3 Aislamiento y Persistencia (Backend)

##### El estado se aísla para garantizar la consistencia de negocio.


### Encapsulamiento del Dominio (DDD): El consenso en el diseño de backend es usar el Modelo de Dominio Rico

##### El estado de una entidad (ej., una Orden) está encapsulado dentro de la entidad y solo puede ser modificado a través de métodos que representan acciones de negocio (ej., orden.enviar(), no orden.estado = 'enviada'). Esto asegura que el estado siempre sea consistente.


### Estado Transaccional: Se maneja a través de transacciones ACID (en bases de datos relacionales) o patrones de SAGA (en microservicios) para asegurar que la mutación de estado sea atómica (o todo cambia, o nada cambia), previniendo estados inconsistentes.


### Servicios Stateless: Los servidores de la API no almacenan el estado del usuario; se apoyan en bases de datos o tokens de sesión para que el estado de la aplicación sea externo al servidor, lo que permite la escalabilidad horizontal.


## Antipatrones

### Prop Drilling: En el frontend, es el anti-patrón de pasar el mismo dato de estado a través de múltiples componentes intermedios que no lo necesitan, solo para que llegue a un componente anidado. Esto indica que el estado debería estar en un contexto o tienda (store) centralizada.


## Estado Global vs. Estado Local (Contexto)

##### Saber cuándo centralizar y cuándo mantener el estado localmente.


### Estado Global:

#### Uso: Debe reservarse para datos a los que se accede en múltiples Contextos Delimitados o en muchas partes de la aplicación sin necesidad de pasarlo explícitamente (ej., información de autenticación del usuario, ajustes de tema, notificaciones).

#### Gestión: Se maneja mejor con librerías de flujo unidireccional (Redux, Zustand, NgRx).
    
    
### Estado Local (de Componente/Función):

#### Uso: Debe usarse para datos relevantes solo dentro del componente o su subárbol inmediato (ej., si un modal está abierto o cerrado, el valor temporal de un campo de formulario antes de ser enviado).

##### Ventaja: Mantiene el aislamiento y la previsibilidad. Si el estado es local, su impacto es limitado, lo que facilita las pruebas
    

### El consenso final es que el estado debe ser gestionado en el nivel de abstracción más bajo posible que cumpla con los requisitos. 

#### Si no necesita ser global, debe ser local. 

#### Si debe ser compartido, debe ser inmutable y gestionado centralmente.




# Estado y nivel de abstracción

## 1. Nivel de Abstracción más Bajo

### Alcance más limitado o local dentro de la estructura de un programa.


#### En OOP: Significa que el estado debe ser una variable local dentro de una función o un atributo privado dentro de una clase (el nivel más bajo y encapsulado), en lugar de una variable global o una propiedad pública.

##### Ejemplo: El saldo de una cuenta bancaria (saldo) debe ser una propiedad privada de la clase Cuenta, no una variable global accesible para cualquier parte del programa.


#### Frontend (Componentes): Significa que el estado debe ser local al componente que lo utiliza (ej., el estado de si un modal está abierto o cerrado en ese componente), en lugar de ser colocado en la "tienda" (store) de estado global.


## 2. Beneficios de la Localización del Estado

Limitar el estado al nivel más bajo posible ofrece ventajas significativas:


### Aislamiento y Encapsulamiento: Cuando el estado es local, el código circundante no puede modificarlo accidentalmente. 

##### Esto reduce los efectos secundarios (side effects) inesperados y evita que un fallo en un área afecte a otra.
    

### Facilidad de Pruebas: Los componentes o funciones que tienen su estado local son mucho más fáciles de probar

##### Solo necesitas simular las entradas directas de ese componente, sin preocuparte por el estado global.


### Legibilidad y Mantenimiento: Al leer una parte del código, sabes inmediatamente dónde buscar la fuente de los cambios de estado

Si el estado es global, cualquier línea de código en cualquier archivo podría ser la causa de una mutación.


### Reutilización: Un componente con estado local es una unidad autónoma que puede ser reutilizada fácilmente en otras partes de la aplicación sin introducir nuevas dependencias.


## Máquinas de Estados Finitos (FSM):

#### Modelar el estado de un objeto explícitamente, definiendo las fases válidas y las transiciones válidas entre ellas

##### (ej., un objeto Pedido solo puede pasar de 'Pendiente' a 'Enviado').


## Estructuras de Datos Inmutables: Conocer técnicas y librerías que facilitan la inmutabilidad 

#### (ej., Object.assign(), el operador spread ... en JS, o librerías como Immer o Immutable.js).


## Programación Reactiva (RxJS): Entender los Observables como flujos de datos que gestionan el estado a lo largo del tiempo, permitiendo que múltiples partes del código reaccionen a un cambio de estado sin mutarlo directamente.


## Práctica: Refactorizar un código imperativo con mutación (loops y reasignaciones) 

### A un estilo funcional inmutable (usando map, filter, y reduce).


## Gestión de Estado Centralizado (Frontend)

##### Aplicar principios de inmutabilidad y predictibilidad a la arquitectura de la interfaz de usuario.


### Flujo de Datos Unidireccional (One-Way Data Flow): Entender el patrón Flux/Redux

#### (Action -> Dispatch -> Reducer -> Store -> View) como el estándar para gestionar el estado de aplicaciones grandes.


### El Store Central: Entender el papel del almacén (store) como la única fuente de verdad (

#### (Single Source of Truth - SSOT) para el estado global de la aplicación.


### Contexto vs. Store Global: Saber distinguir entre el Estado Local del componente (el nivel de abstracción más bajo) y el Estado Global (datos compartidos) que debe ir al store.


### Herramientas Clave: Estudiar y practicar la implementación de una librería de gestión de estado (ej., Redux/NgRx, Zustand, Pinia).


## Patrones Arquitectónicos y Persistencia (Backend)

##### Aplicar el manejo del estado a la integridad de los datos y la escalabilidad del backend.

### 1. Inversión de Control (IoC) / DI: Usar la Inyección de Dependencias (DI) para inyectar servicios que gestionan el estado de las dependencias (ej., Repositorios que gestionan la conexión a la base de datos).

### 2. DDD: Modelo de Dominio Rico: Aplicar el encapsulamiento a nivel arquitectónico. Asegurar que la lógica de negocio está dentro de las entidades (Agregados), garantizando la consistencia transaccional del estado.

### 3. Servicios Stateless (Sin Estado): Diseñar las APIs para que no almacenen el estado del usuario en el servidor. La sesión y la autenticación deben ser manejadas por tokens (ej., JWT) o cachés externas.

### 4. Transacciones ACID: Entender cómo las transacciones garantizan que el estado de la base de datos se mantenga consistente y atómico (o todo el cambio se aplica, o nada).

#### Práctica: Diseñar una capa de servicio y repositorio donde el Repositorio utiliza una base de datos simulada o un ORM para probar que el Agregado mantiene la consistencia de su estado.


# Variables de entorno


## 1. Fundamentos

### Una variable de entorno es un valor con nombre que afecta la forma en que los procesos en ejecución se comportan en una computadora.

#### Su función principal es externalizar la configuración de una aplicación.

##### Permite que el mismo código se ejecute en diferentes entornos (Desarrollo, QA, Producción) sin ser modificado.


### Concepto Clave: "Configuration must be external to the code" (La configuración debe ser externa al código).


### Variables de Shell: Cómo se usan y se exportan en terminales comunes (Bash, Zsh).


### Variables de Sistema Operativo: Entender las variables predeterminadas (ej., $PATH, $HOME) y su función.


## 2. En en Aplicaciones y Lenguajes

##### Acceder y utilizar estas variables en el código de la aplicación.


### Acceso en el Código: Implementar la lectura de variables de entorno en el lenguaje de tu elección:

Node.js/JavaScript: Usando `process.env.NOMBRE_VARIABLE`.

Python: Usando el módulo `os.environ['NOMBRE_VARIABLE']`.

Java/C#: Usando métodos de sistema específicos `(System.getenv())`.


### Archivos .env:

Dominar el uso del archivo .env para gestionar variables locales de desarrollo.

Uso de librerías como dotenv (Node.js/Python) para cargar estas variables en el entorno del proceso.


### Manejo de Valores por Defecto: Implementar lógica para asignar un valor por defecto si la variable de entorno necesaria no está definida (ej., const PORT = process.env.PORT || 3000;).
   
   
## 3. Seguridad y Anti-Patrones

##### La gestión de variables de entorno está íntimamente ligada a la seguridad de la aplicación.
  

### Regla de Seguridad Clave: Nunca hacer commit (subir) archivos .env o archivos de configuración con secretos a repositorios Git públicos o privados.


### Archivos .gitignore: Asegurar la inclusión de la entrada .env en el archivo .gitignore para prevenir fugas de secretos.


### Secretos (Secrets): Entender que las variables de entorno son la forma preferida para pasar información sensible como:

Claves de API (API_KEY).

Cadenas de Conexión a Bases de Datos (DATABASE_URL).

Claves de Cifrado (JWT_SECRET).


## 4. Gestión en Producción y Arquitectura

##### Las variables de entorno se gestionan en entornos de alto rendimiento y automatizados.


### Contenedores (Docker):

Cómo pasar variables de entorno a contenedores usando los argumentos e o --env-file de docker run.

#### Anti-Patrón: Evitar la inclusión de variables de entorno sensibles directamente en el Dockerfile.
    

### Orquestación (Kubernetes/ECS):

Uso de ConfigMaps para variables no sensibles y de Secrets para variables sensibles (la forma estándar de gestionar variables en K8s).
    
    
### CI/CD (Integración/Despliegue Continuo):

#### Utilizar las funcionalidades de Variables de Pipeline (ej., GitHub Actions Secrets, GitLab CI Variables) para inyectar secretos de forma segura al pipeline de despliegue.


### Herramientas de Gestión de Secretos

##### Para entornos grandes y de alta seguridad, se requieren herramientas dedicadas a la gestión centralizada de secretos.

HashiCorp Vault: Estudiar cómo Vault centraliza, cifra y controla el acceso a secretos en sistemas distribuidos.

Servicios en la Nube: Conocer los servicios de gestión de secretos de los principales proveedores:

AWS Secrets Manager / Parameter Store.

Azure Key Vault.

Google Secret Manager


##### Permitirá construir aplicaciones seguras, portables y conformes a los principios de la metodología Twelve-Factor App, donde la configuración se externaliza por completo.




# Diagrama C4 

##### Modelado de arquitectura de software que utiliza cuatro niveles de abstracción (Contexto, Contenedores, Componentes y Código) para describir una solución de manera jerárquica y comprensible para diferentes audiencias.


## 1. Fundamentos

### El Diagrama C4 es una técnica de modelado código-céntrico (basado en el código) que se enfoca en crear mapas de la arquitectura en lugar de planos.

Audiencia: Entender que cada nivel de C4 está diseñado para diferentes audiencias: desde ejecutivos (alto nivel) hasta desarrolladores (bajo nivel).

Metáfora: La arquitectura como un mapa geográfico: un mapa mundial, un mapa de país, un mapa de ciudad y finalmente un edificio.

Simbología: A diferencia de UML, el C4 utiliza una simbología simple y limitada (cajas, personas, flechas) para centrar la atención en la jerarquía y los nombres.


## 2. Los Cuatro Niveles de Abstracción (C4)

##### Dominar cada uno de los cuatro diagramas, que se enfocan en responder diferentes preguntas.


### C1: Diagrama de Contexto del Sistema (System Context)

#### Propósito: Responder a la pregunta: "¿Qué hace este sistema y quién lo usa?"

Elementos: El sistema de interés, los usuarios (Personas) y otros sistemas externos con los que interactúa.

Enfoque: Mostrar las fronteras y la interacción de alto nivel, sin revelar detalles tecnológicos internos.


### C2: Diagrama de Contenedores (Containers)

#### Propósito: Responder a la pregunta: "¿Cómo se descompone la aplicación y cómo interactúan las partes?"

Elementos: Los principales contenedores del sistema (aplicaciones web, aplicaciones de escritorio, bases de datos, APIs de microservicios, mobile apps).

Enfoque: Mostrar las tecnologías usadas para cada contenedor (ej., Node.js, PostgreSQL, NGINX) y la naturaleza de la comunicación (ej., HTTPS/REST, JMS/Queue).
    
    
### C3: Diagrama de Componentes (Components)

#### Propósito: Responder a la pregunta: "¿Qué hay dentro de este contenedor?"

Elementos: Los componentes lógicos del software dentro de un solo contenedor (ej., un Controlador de Usuario, un Módulo de Pago, una Fachada de API).

Enfoque: Mostrar cómo los componentes se coordinan para ofrecer la funcionalidad del contenedor. Se identifican los principales puntos de extensión o interfaces (métodos).


### C4: Diagrama de Código (Code)

#### Propósito: Responder a la pregunta: "¿Cómo se implementa este componente?"

Elementos: Clases, interfaces, métodos y estructuras de datos dentro de un único componente.

Enfoque: Aunque se puede generar con herramientas (UML, diagramas de clases), el objetivo en C4 es usarlo solo si es necesario para entender un algoritmo o patrón complejo (como un diagrama de clases UML o un diagrama de secuencia). 


## 3. Integración y Prácticas

Jerarquía de Abstracción: Entender que la clave de C4 es la navegación. Un elemento en C2 debe ser la expansión de un elemento en C1, y así sucesivamente.

Elementos Personales (Custom Elements): Cómo extender la simbología básica de C4 para incluir conceptos específicos de tu arquitectura (ej., Message Bus, Serverless Function).

#### Uso en Code Review: Utilizar diagramas C3 o C4 (parciales) para explicar a los compañeros el diseño de una nueva característica.

##### Mantenimiento: Entender que los diagramas deben reflejar el código real y, por lo tanto, deben ser fáciles de actualizar (Diagrama C4 como Código).


## 4. Herramientas y Automatización

Diagramas como Código (Diagrams as Code): Adoptar el enfoque de definir los diagramas en un lenguaje simple, permitiendo que sean versionados con Git junto al código fuente de la aplicación.

Herramientas Clave:

Structurizr: La herramienta principal diseñada por Simon Brown (el creador de C4). Permite definir el modelo en código y genera los diagramas.

Mermaid / PlantUML / Draw.io: Alternativas populares que pueden usarse para dibujar la notación C4 de forma simple y rápida.

    
##### Dominar el C4 te permitirá crear documentación de arquitectura que sea precisa, útil y fácil de mantener, cerrando la brecha entre el diseño de alto nivel y el código fuente.    

