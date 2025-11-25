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




# SOLID 


## S (Single Responsibility Principle o SRP/ Principio de Responsabilidad Única)

##### Una clase debe tener una, y solo una, razón para cambiar.

##### Cada clase, módulo o componente debería ser responsable de una única tarea o funcionalidad dentro del sistema.

##### La "razón para cambiar" es sinónimo de responsabilidad.

Si una clase tiene más de una responsabilidad, significa que podría ser modificada por más de un motivo.

Si la clase maneja, por ejemplo, la lógica de cálculo de un pedido y también la lógica de guardado en la base de datos, tiene dos responsabilidades.

El SRP te dice que debes separar estas responsabilidades en diferentes clases (o módulos).

##### Menor Acoplamiento: Los cambios en una parte del sistema tienen menos probabilidades de afectar a otras partes, ya que las responsabilidades están separadas.


### Ej SRP con 3 responsabilidad: crear usuario, persistir datos y enviar mail

##### Separamos estas tres responsabilidades en tres clases distintas, cada una con un único propósito.


### 1. Definición de la Entidad y Servicios

```
// Entidad simple
interface User {
    name: string;
    email: string;
}

// 1. Responsabilidad: Gestión y validación del Usuario.
class UserCreator {
    create(name: string, email: string): User {
        if (!name || !email) {
            throw new Error("Name and email are required.");
        }
        console.log(`User object for ${name} created successfully.`);
        return { name, email };
    }
}

// 2. Responsabilidad: Persistencia de datos.
class UserRepository {
    save(user: User): void {
        // Lógica real de conexión e inserción a la BD...
        console.log(`Saving user ${user.email} to the database.`);
    }
}

// 3. Responsabilidad: Notificación.
class EmailService {
    sendWelcomeEmail(user: User): void {
        // Lógica real de envío de email (SMTP, API de terceros, etc.)...
        console.log(`Sending welcome email to ${user.email}.`);
    }
}
```


### 2. Clase Coordinadora (Facade)

##### Usar una clase "Facade" o "Service" que coordine el uso de las otras clases, pero sin implementar la lógica interna de sus responsabilidades.

```
// Clase que coordina, no que implementa las responsabilidades.
class RegistrationService {
    private userCreator: UserCreator;
    private userRepository: UserRepository;
    private emailService: EmailService;

    constructor() {
        this.userCreator = new UserCreator();
        this.userRepository = new UserRepository();
        this.emailService = new EmailService();
    }

    registerUser(name: string, email: string): User {
        // 1. Crea y valida.
        const newUser = this.userCreator.create(name, email);

        // 2. Guarda.
        this.userRepository.save(newUser);

        // 3. Notifica.
        this.emailService.sendWelcomeEmail(newUser);

        console.log(`\n User ${name} fully registered!`);
        return newUser;
    }
}

// Uso:
const registration = new RegistrationService();
registration.registerUser("Juan", "juan@example.com");
```

Si cambian las reglas de validación, solo modificas UserCreator.

Si cambia la base de datos, solo modificas UserRepository.

Si cambia el proveedor de emails, solo modificas EmailService.



## O: (Open/Closed Principle o OCP; Principio Abierto/Cerrado)

##### Establece cómo debe evolucionar el diseño de tu código para ser flexible y robusto.  
  
##### Las entidades de software (clases, módulos, funciones, etc.) deben estar:
  
#### 1. Abiertas para la Extensión: Debes poder añadir nuevas funcionalidades al sistema.

#### 2. Cerradas para la Modificación: Una vez que una entidad está probada y funcionando, no deberías modificar su código fuente original para cambiar su comportamiento.
  

##### Se logra principalmente a través del uso de la abstracción, como las interfaces o las clases abstractas, y la herencia/polimorfismo.

##### En lugar de codificar la lógica directamente en una clase concreta, se define un contrato (una interfaz) y luego se crean múltiples implementaciones de ese contrato.


### Mecanismo Clave: Polimorfismo

##### Cuando tienes una clase que depende de una interfaz, puedes cambiar el comportamiento en tiempo de ejecución inyectando una nueva clase que implemente esa interfaz, sin tocar el código de la clase dependiente.

Para extender el sistema, simplemente creas una nueva clase que implemente la interfaz. (Abierto para Extensión)

No necesitas cambiar ninguna de las clases existentes que usan esa interfaz. (Cerrado para Modificación)


### Extender la interfaz rompe con OCP y ISP: crear nueva interfaz y nueva responsabilidad

##### Cada principio SOLID debe cumplir con el anterior

##### Por eso, extender agrega nuevas responsabilidades 


#### Opciones: 

##### 1. Define una nueva interfaz que extienda la interfaz original

##### 2. Interfaz completamente nueva

##### Ej: Si tienes IForma, y necesitas un nuevo método de dibujo 3D, crea IForma3D que extienda IForma.

##### 3. Nueva Implementación: Implementa el nuevo comportamiento en una nueva clase concreta.


### Ej OCP: usando una interfaz (abstracción) y el polimorfismo. 

#### 1. Interfaz (Cerrado a la Modificación)

##### Definimos un contrato para todas las formas.

```
// La interfaz es el contrato que todas las formas deben cumplir.
interface Shape {
    calculateArea(): number;
}
```


#### 2. Clases Concretas (Abierto a la Extensión)

##### Cada forma se convierte en una clase que implementa la interfaz, conteniendo solo su propia lógica de cálculo. 

```
// La clase Circle implementa el contrato Shape
class Circle implements Shape {
    constructor(public radius: number) {}

    calculateArea(): number {
        return Math.PI * (this.radius ** 2);
    }
}

// La clase Rectangle implementa el contrato Shape
class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}

    calculateArea(): number {
        return this.width * this.height;
    }
}

// EXTENSIÓN: Añadimos una nueva forma (Triangle)
// sin modificar el código de Circle o Rectangle.
class Triangle implements Shape {
    constructor(public base: number, public height: number) {}

    calculateArea(): number {
        return 0.5 * this.base * this.height;
    }
}
```


#### 3. Clase de Alto Nivel (Cerrado a la Modificación)

##### !!! La clase que calcula el área ahora depende de la abstracción (Shape), no de las implementaciones concretas.

```
class AreaCalculatorOCP {
    // Este método está CERRADO a la modificación.
    // No necesita saber cuántos tipos de formas existen o cómo calculan su área.
    calculateArea(shapes: Shape[]): number {
        let totalArea = 0;

        for (const shape of shapes) {
            // Usa el polimorfismo: llama al método calculateArea()
            // y la forma concreta sabe cómo hacerlo.
            totalArea += shape.calculateArea();
        }

        return totalArea;
    }
}
```


#### Uso 

```
const shapes: Shape[] = [
    new Circle(10),
    new Rectangle(4, 5),
    new Triangle(6, 8) // ¡Añadida sin tocar AreaCalculatorOCP!
];

const calculator = new AreaCalculatorOCP();
const area = calculator.calculateArea(shapes);

console.log(`El área total es: ${area.toFixed(2)}`);
```

##### Si quieres añadir una forma Square, simplemente extiendes creando una nueva clase Square implements Shape.

##### La clase AreaCalculatorOCP permanece cerrada a la modificación, cumpliendo con el OCP.



## Interfaces y SOLID

Los principios OCP, LSP e ISP (las letras 'O', 'L' e 'I') se centran fuertemente en cómo se deben usar y diseñar las interfaces.


### 1. O: OCP dicta que las entidades deben estar abiertas a la extensión pero cerradas a la modificación.

##### Lograr el OCP es a través de la dependencia de abstracciones (interfaces).

##### Una clase que depende de una interfaz puede ser extendida en funcionalidad simplemente creando una nueva clase que implemente esa interfaz, sin modificar el código de la clase dependiente.


### 2. L: Principio de Sustitución de Liskov (LSP)

##### Los objetos de un programa deben ser sustituibles por instancias de sus subtipos sin alterar la corrección de ese programa.

##### Al usar una interfaz, cualquier clase que la implemente debe poder ser utilizada donde se espera la interfaz sin causar problemas.

Significa que las implementaciones de la interfaz no deben hacer cosas que el código cliente no espera (ej. lanzar excepciones no documentadas o cambiar el contrato del método). 


### 3. I: Principio de Segregación de Interfaces (ISP) 

##### "Los clientes no deben ser forzados a depender de interfaces que no usan".

##### Significa que es mejor tener muchas interfaces pequeñas y específicas (de "rol") que una sola interfaz grande y "gorda".

##### Si una clase solo necesita tres métodos, no debería ser forzada a implementar una interfaz que tiene diez.


### 4. Aplicación Indirecta

#### S (Responsabilidad Única): apoya la creación de interfaces pequeñas y enfocadas, ya que cada interfaz puede representar una única responsabilidad o capacidad que una clase puede tener (ej. IRepositorio, ILogger).

#### D (Inversión de Dependencias): los módulos de alto nivel no deben depender de módulos de bajo nivel, sino que ambos deben depender de abstracciones (interfaces)

##### Objetivo: promover el uso de interfaces para "invertir" la dirección de las dependencias.



## Modulos de Alto nivel y Bajo nivel


### 1. Módulos de alto nivel (High-Level Modules o HLM)

#### Contienen la lógica de negocio central y las políticas importantes de la aplicación.

##### Responsabilidad: Definen qué hace la aplicación.

##### Ejemplos: Un módulo de GestiónDePedidos, un ServicioDeFacturación, o un módulo de ControlDeInventario. Estos módulos orquestan las acciones.

##### Dependencia (Ideal): Deberían ser independientes de cómo se realizan las operaciones técnicas. Solo deberían depender de abstracciones (interfaces).


### 2. Módulos de bajo nivel (Low-Level Modules o LLM)

#### Se ocupan de los detalles técnicos y las implementaciones concretas de tareas específicas.

##### Responsabilidad: Definen cómo se realizan las acciones.

##### Ejemplos: Un RepositorioMySQL para guardar datos, un ServicioDeArchivosJSON para lectura/escritura, o un ServicioDeEnvioDeEmail que usa una librería específica.

##### Dependencia (Natural): Tienden a depender de bibliotecas externas, bases de datos o sistemas operativos.


### 3. Inversión de Dependencias (DIP)

La relación de dependencia "natural" va del alto al bajo nivel (el módulo de Pedidos usa directamente el repositorio de MySQL). El DIP invierte esto.


#### Sin DIP (Acoplamiento)

En un diseño pobre, el módulo de alto nivel depende directamente del módulo de bajo nivel.

##### Módulo de Alto Nivel (GestiónDePedidos) -> Módulo de Bajo Nivel (RepositorioMySQL)
    
Problema: Si decides cambiar de MySQL a MongoDB, tienes que modificar el módulo de alto nivel (GestiónDePedidos), que es el núcleo de tu negocio. Esto viola el OCP y hace que el sistema sea frágil.


#### Con DIP (Desacoplamiento)   

##### 1. Los módulos de alto nivel no deben depender de módulos de bajo nivel.

##### 2. Ambos deben depender de abstracciones (interfaces).

```
						Abstracción

Módulo de Alto Nivel 				Módulo de Bajo Nivel
(GestiónDePedidos)					(RepositorioMySQL)
```

##### La interfaz (IRepositorio) se convierte en el contrato.

Tanto:

#### !!! Lógica de negocio (alto nivel)

#### !!! Implementación técnica (bajo nivel)

##### Dependen de este contrato, invirtiendo la dependencia y logrando un sistema más flexible y mantenible.


#### Lógica de Negocio (Alto Nivel)

##### Rol	Contiene la lógica de negocio (las políticas). Define QUÉ se hace.

##### Tipo de Clase Clases concretas (servicios) que orquestan acciones.

##### !!! Abstracción	Depende de las interfaces

##### Ejemplo	ServicioDeGestiónDeUsuarios


#### Detalles Técnicos/implementación (Bajo Nivel)

Rol: Contiene los detalles técnicos (la implementación). Define CÓMO se hace. 

Tipo de Clase: Clases concretas que interactúan con sistemas externos (BD, red, disco).

##### !!! Abstracción: Implementa las interfaces.

Ejemplo RepositorioUsuariosMySQL


#### Abstracciones (Interfaces)

##### !!! Permiten el Principio de Inversión de Dependencias (DIP).

##### 1. Módulo de Alto Nivel (HLM): Es una clase concreta (ServicioDeFacturación) que depende de la abstracción (IRepositorio).

##### 2. Módulo de Bajo Nivel (LLM): Es una clase concreta (RepositorioMongoDB) que implementa la abstracción (IRepositorio).

##### 3. Abstracción: Es la interfaz (IRepositorio).


##### La interfaz es un contrato común del cual dependen ambos módulos, invirtiendo la dependencia.

ServicioDePedidos	Alto Nivel (Lógica de Negocio)	Clase Concreta
IRepositorio	Contrato (Abstracción)	Interfaz
RepositorioSQL	Bajo Nivel (Detalle Técnico)	Clase Concreta



## Diseño DIP: alto y bajo nivel, dependencias e implementaciones

##### Un diseño típico, a menudo llamado Arquitectura Hexagonal o Arquitectura de Capas Limpias (Clean Architecture), se vería así:


### 1. Capa 1: Presentación / Entrada

Controladores (Controllers): Reciben la petición (ej. /api/users/123).

Vistas/UI: Muestran los datos al usuario.


### 2. Capa 2: Dominio / Alto Nivel

Módulos de Alto Nivel (Servicios/Use Cases): Contienen la lógica de negocio.

    Dependen de interfaces.

Entidades/Modelos de Dominio: Objetos que representan el negocio (ej. Clase Usuario, Clase Pedido).

Interfaces/Clases Abstractas: Los contratos que definen las capacidades requeridas.


### 3. Capa 3: Infraestructura / Bajo Nivel

Módulos de Bajo Nivel (Implementaciones Concretas): Contienen los detalles técnicos.

	Implementan las interfaces.

Repositorios Concretos: Implementan la lógica para interactuar con la base de datos (MySQL, MongoDB, etc.).

Adaptadores/Clientes Externos: Implementaciones para servicios de email, APIs de pago, etc.


### 4. Componente de Ensamblaje (Cross-Cutting Concern)

Contenedor IoC / Composer: El "pegamento" que inicializa y conecta las dependencias.


##### Este enfoque asegura que la lógica de negocio (Alto Nivel) esté totalmente aislada de los detalles técnicos (Bajo Nivel), adhiriéndose rigurosamente al DIP y haciendo el sistema muy fácil de probar y mantener.


### Diagrama Arquitectura de Capas

El diagrama muestra la Inversión de Dependencias (DIP):

##### Las flechas de dependencia siempre apuntan hacia adentro, hacia la capa de Abstracciones/Dominio, lo que significa que las capas externas dependen de las internas, pero no al revés.


#### -> Flujo de la Aplicación

1. Entrada: El Controlador (Capa de Presentación) recibe una petición (ej. HTTP).

2. Lógica: El Controlador llama al Módulo de Alto Nivel (Servicio de Dominio).

3. Contrato: El Módulo de Alto Nivel llama a la Interfaz (Repositorio/Abstracción).

4. Ejecución: En tiempo de ejecución (gracias al IoC Container), la llamada es resuelta por el Módulo de Bajo Nivel (Implementación Concreta) que interactúa con la BD.

5. Salida: El resultado viaja de regreso al Controlador para ser presentado.


#### Componentes Clave y SOLID

```
Componente,Nivel,Rol en el Diseño,Principios SOLID
"Controladores (API, UI)",Presentación/Externo,"Reciben la entrada, mapean datos y delegan al Alto Nivel.",SRP (Responsabilidad Única)
Módulos de Alto Nivel,Dominio/Negocio (Interno),Contienen la lógica de negocio central. Dependen de interfaces.,"S, O, L"
Interfaces (Contratos),Abstracción/Dominio,Definen las capacidades. Son la clave para la Inversión de Dependencias.,"I, D"
Módulos de Bajo Nivel,Infraestructura/Externo,"Implementan los detalles técnicos (BD, Email, Sistema de Archivos). Implementan interfaces.","O, D"
IoC Container / Composer,Configuración (Pegamento),Ensambla la aplicación: inyecta las clases de Bajo Nivel en las clases de Alto Nivel.,D
```

Capas de Arquitectura: Presentación, Dominio (Alto Nivel/Abstracciones) e Infraestructura (Bajo Nivel).

Elementos Esenciales: Controladores, Módulos de Alto Nivel, Interfaces, Módulos de Bajo Nivel y el IoC Container.

Principio Clave: Se ilustró la Inversión de Dependencias (DIP).


Podría ampliarse (Opcional)

Si bien la estructura es completa, el diseño de software es vasto. Los detalles que podrían añadirse, si fuera necesario profundizar, serían:

Manejo de Errores: Una capa o módulo específico para gestión centralizada de excepciones.

Seguridad/Autenticación: Middlewares o servicios que se cruzan entre las capas (Cross-Cutting Concerns).

Logging y Monitoreo: Un servicio dedicado para registrar eventos y métricas.
    



## Dependencias y Modulos 

### Modulos

#### Unidad de software autocontenida que encapsula una funcionalidad específica. Como una caja de herramientas

##### Sirve para organizar el código, prevenir conflictos de nombres (colisiones de variables o funciones globales) y facilitar la reutilización.

##### Encapsulamiento: Un módulo decide qué partes de su código son públicas (accesibles desde fuera) y cuáles son privadas (detalles internos).

##### Un archivo .py en Python o un archivo .ts/.js que usa export en TypeScript/JavaScript

##### Un módulo de CálculoDeImpuestos que solo expone la función calcularIVA().


### Dependencias

#### Cuando un módulo de software (el módulo A) necesita o utiliza el código o la funcionalidad proporcionada por otro módulo (el módulo B) para poder funcionar.

##### Naturaleza: Es una relación de uso. Si B cambia de una manera que A no espera, el módulo A podría romperse.

##### Tipos de Dependencias:

Bibliotecas/Paquetes Externos: Depender de herramientas de terceros (ej. usar lodash para manipular arrays).
    
Módulos Locales: Depender de otros módulos dentro del mismo proyecto (ej. el módulo Ventas depende del módulo Inventario para verificar el stock).

Gestión: En proyectos grandes, la lista de dependencias se gestiona con herramientas (como npm en Node.js o pip en Python) para asegurar que el proyecto siempre use las versiones correctas.


### Acoplamiento y Desacoplamiento

La gestión de dependencias es crucial para la calidad del software:

#### Acoplamiento: Es el grado en que dos módulos están interconectados. Un alto acoplamiento (dependencias rígidas y directas) hace que el código sea difícil de cambiar y probar.

#### Desacoplamiento: Es el objetivo. Se logra mediante técnicas como la Inversión de Dependencias (DIP) (la 'D' de SOLID), donde un módulo de alto nivel no depende directamente de un módulo de bajo nivel, sino que ambos dependen de una abstracción (una interfaz).

Esto reduce el riesgo de que los cambios en un módulo afecten a otros.


Los módulos son las piezas de construcción, y las dependencias son las conexiones entre esas piezas. Un buen diseño maximiza la funcionalidad de cada módulo (alta cohesión) y minimiza las dependencias directas entre ellos (bajo acoplamiento).


### Modulos y Dependencias en SOLID

##### Buscan gestionar las relaciones entre los componentes de un sistema para hacerlo más robusto y flexible.


#### La Estructura (Módulos)

#### Las Reglas (Dependencias)

##### SOLID establece las reglas para cómo los módulos deben interactuar y cómo deben manejarse sus dependencias. 


S (Responsabilidad Única):

Módulos enfocado. Una clase/módulo debe tener una única razón para cambiar. Esto asegura que el módulo sea pequeño y cohesivo.

Alta Cohesión


O (Abierto/Cerrado):

Extensión de Módulos. Los módulos deben estar cerrados a la modificación, pero abiertos a la extensión. Esto se logra permitiendo que nuevos módulos hereden o implementen contratos sin tocar el código existente.

Estabilidad y Flexibilidad


L (Sustitución de Liskov):

Confiabilidad de Módulos. Los módulos dependientes deben poder usar cualquier subtipo de un módulo sin encontrar errores inesperados. Garantiza que las dependencias cumplen sus contratos.

Fiabilidad del Sistema


I (Segregación de Interfaces):

Dependencias mínimas. Los módulos no deben depender de contratos (interfaces) que contengan métodos que no utilizan. Fomenta interfaces pequeñas y de rol específico.

Bajo Acoplamiento


D (Inversión de Dependencias)

Dirección de la Dependencia. Invierte la dependencia natural. Los módulos de Alto Nivel (lógica de negocio) y los módulos de Bajo Nivel (detalles técnicos) deben depender de abstracciones (interfaces), no el uno del otro.

Desacoplamiento Total


#### Abstracciones

##### El puente entre los módulos de Alto y Bajo Nivel para lograr el desacoplamiento es la Abstracción (Interfaces o Clases Abstractas).

##### El DIP exige que el Módulo de Alto Nivel no dependa directamente del Módulo de Bajo Nivel. En su lugar, ambos deben depender de la misma Interfaz (la abstracción).


### !!! El Principio de Responsabilidad Única (SRP) no limita el número de métodos; limita el número de razones para cambiar la clase.

##### Por ejemplo, una clase llamada UserRepository tiene la única responsabilidad de gestionar la persistencia de los datos del usuario. Para cumplir esa responsabilidad, podría necesitar muchos métodos:

getById(id: string)

save(user: User)

update(user: User)

delete(id: string)

getAll()

mapToDatabaseRecord(user: User) (método interno/privado)


##### Todos estos métodos están enfocados en la única responsabilidad de la persistencia de usuarios.

##### Si cambia la base de datos (por ejemplo, de SQL a NoSQL), todos estos métodos tendrían que cambiar, y esa es la única razón por la que la clase cambiaría.



## Inversion e Inyección de dependencias


### Abstracciones

##### Contrato que define una funcionalidad o un conjunto de comportamientos sin preocuparse por los detalles de su implementación

Las abstracciones se implementan típicamente como Interfaces o Clases Abstractas en la mayoría de los lenguajes orientados a objetos.

Su propósito central es mediar la relación entre módulos, asegurando que la lógica de negocio (Alto Nivel) dependa solo de los contratos, y no de las implementaciones concretas (Bajo Nivel).

#### Las mejores interfaces son pequeñas y enfocadas en un único rol (ej. IUserRepository, IEnviable). (Principio ISP).


#### 1. Se define la interfaz con los métodos que el módulo de Alto Nivel necesita para realizar su trabajo.

```
// Abstracción: Define el CONTRATO
interface ILogger {
    log(message: string): void;
    error(message: string): void;
}
```


#### 2. Implementación

##### Los módulos de Bajo Nivel crean la implementación concreta que cumple con el contrato.

```
// Módulo de Bajo Nivel: Implementa los DETALLES TÉCNICOS
class FileLogger implements ILogger {
    log(message: string): void {
        // Detalles: Lógica para escribir en un archivo.
        console.log(`[FILE LOG]: ${message}`);
    }
    error(message: string): void {
        // Detalles: Lógica para escribir error en el archivo.
        console.error(`[FILE ERROR]: ${message}`);
    }
}
```


#### 3. Inyección (Dependencia del Contrato)

##### El módulo de Alto Nivel requiere la abstracción en su constructor o método, no la implementación concreta.

```
// Módulo de Alto Nivel: Depende de la ABSTRACCIÓN
class PaymentProcessor {
    // Dependencia inyectada a través del constructor
    constructor(private logger: ILogger) {} 

    process(amount: number): void {
        // La lógica de negocio USA el contrato, sin saber si es FileLogger o ConsoleLogger
        this.logger.log(`Processing payment of ${amount}.`); 
        // ... (lógica de pago)
    }
}
```

##### De esta forma, puedes cambiar FileLogger por un DatabaseLogger o un CloudLogger sin modificar el PaymentProcessor, logrando el deseado desacoplamiento y cumplimiento de OCP/DIP.


#### 4. Ensamblaje

```
// Componente de Ensamblaje (fuera de la lógica de negocio)

// 1. Crear la dependencia CONCRETA (Bajo Nivel)
const databaseImplementation = new MySQLUserRepository(); 
// Podría ser: const databaseImplementation = new MongoDBUserRepository(); 
// Y el UserService seguiría funcionando.

// 2. Inyectar la dependencia en el módulo de Alto Nivel
const userService = new UserService(databaseImplementation); 

// Ahora, el userService está listo y desacoplado.
userService.registerUser(user);
```




### Modulo Alto (depende -ideal- de abstracciones/interfaces)

Independientes, logica de negocio y politicas importantes

Definen qué hace la aplicación.

Ej: módulo de GestiónDePedidos, un ServicioDeFacturación, o un módulo de ControlDeInventario.

Estos módulos orquestan las acciones.


### Modulo Bajo (depende -natural- de bibliotecas externas, db y os)

Se ocupan de los detalles técnicos y las implementaciones concretas de tareas específicas.
 
Definen cómo se realizan las acciones


 
### DIP: 

##### La relación de dependencia "natural" va del alto al bajo nivel (el módulo de Pedidos usa directamente el repositorio de MySQL).

#### El DIP invierte esto: porque sería un diseño pobre

módulos de alto nivel no deben depender de módulos de bajo nivel.

Ambos deben depender de abstracciones (interfaces).

```
Módulo de Alto Nivel (GestiónDePedidos) -> Abstracción (IRepositorio) <- Módulo de Bajo Nivel (RepositorioMySQL)
```

##### La interfaz (IRepositorio) se convierte en el contrato. 

##### Tanto la lógica de negocio (alto nivel) como la implementación técnica (bajo nivel)

##### Dependen de este contrato, invirtiendo la dependencia y logrando un sistema más flexible y mantenible.


#### Ej: 

##### Módulo de Alto Nivel (HLM): Es una clase concreta (ServicioDeFacturación) que depende de la abstracción (IRepositorio).

##### Módulo de Bajo Nivel (LLM): Es una clase concreta (RepositorioMongoDB) que implementa la abstracción (IRepositorio). 

##### Abstracción: Es la interfaz (IRepositorio).


## !!! Ej de código: Alto nivel y dependencia de interfaz/abstracción

1. Abstracción

```
// 1. La Abstracción (Interfaz)
interface IUserRepository {
    save(user: User): void;
    findById(id: string): User | null;
}
```


##### Esta interfaz reside idealmente en la misma capa que el módulo de alto nivel o en una capa de dominio central. El HLM ahora declara que necesita un IUserRepository.


2. Implementar la Abstracción (Bajo Nivel)

##### El módulo de bajo nivel se encarga de implementar los detalles técnicos requeridos por el contrato.

```
// 2. El Módulo de Bajo Nivel (Implementación Concreta)
class MySQLUserRepository implements IUserRepository {
    save(user: User): void {
        // Lógica de conexión a MySQL e inserción
        console.log(`User ${user.id} saved in MySQL.`);
    }

    findById(id: string): User | null {
        // Lógica de consulta en MySQL
        return { id, name: 'John Doe', email: 'john@example.com' };
    }
}
```


3. Usar la Inyección de Dependencias (DI)

##### Aquí es donde se invierte la dependencia. 

##### El módulo de alto nivel es diseñado para no crear su dependencia, sino para recibirla (inyectarla) a través de su constructor.

```
// 3. El Módulo de Alto Nivel (Depende de la Interfaz)
class UserService {
    // El constructor exige una Abstracción (IUserRepository)
    constructor(private userRepository: IUserRepository) {}

    registerUser(user: User): void {
        // La lógica de negocio NO sabe si es MySQL o MongoDB,
        // solo sabe que el objeto inyectado CUMPLE con IUserRepository.
        this.userRepository.save(user);
        console.log(`User registration completed.`);
    }
}
```


4. El Ensamblaje (IoC Container)

##### Finalmente, un módulo de configuración (el IoC Container o Composer) crea y "une" las piezas, decidiendo qué implementación concreta (bajo nivel) se pasa al módulo de alto nivel.

```
// 4. Ensamblaje: Inyección de Dependencias
const dbRepository = new MySQLUserRepository(); // Módulo de Bajo Nivel CONCRETO
const userService = new UserService(dbRepository); // Inyección en Alto Nivel

// Uso
userService.registerUser({ id: '1', name: 'Test', email: 't@e.com' });
```

##### De esta manera, el UserService (Alto Nivel) queda completamente desacoplado y solo depende de la interfaz IUserRepository, cumpliendo con el DIP.



### Forma más recomendada DIP (inversión)


### Forma más recomendada DI (inyección)




## Nest.js: Abstracción, módulo de bajo nivel, módulo de alto nivel y ensamblaje

##### Utiliza el patrón Inversión de Control (IoC) de forma nativa

##### El Ensamblaje y la Inyección de Dependencias (DI) se manejan principalmente a través de los Módulos y los Proveedores inyectables.


### 1. La Abstracción (Interfaz)

##### Este es el contrato que define lo que necesita el módulo de alto nivel.

```
// src/user/interfaces/user-repository.interface.ts

import { User } from '../entities/user.entity';

// La Interfaz es la Abstracción (el contrato)
export interface IUserRepository {
  save(user: User): Promise<User>;
  findById(id: number): Promise<User | null>;
}

// Token de Inyección (para referenciar la interfaz en Nest)
export const USER_REPOSITORY = 'USER_REPOSITORY';
```


### 2. Módulo de Bajo Nivel (Implementación Concreta)

##### Esta es la implementación específica que maneja los detalles técnicos (ej. la base de datos real).

```
// src/user/infrastructure/mysql-user.repository.ts

import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../interfaces/user-repository.interface';
import { User } from '../entities/user.entity';

@Injectable()
// Clase de Bajo Nivel: Implementa la Abstracción
export class MySQLUserRepository implements IUserRepository {
  // Simulación de una base de datos o TypeORM
  private db: User[] = [];

  async save(user: User): Promise<User> {
    const newUser = { ...user, id: this.db.length + 1 };
    this.db.push(newUser);
    console.log(`[Bajo Nivel] Usuario guardado en MySQL con ID: ${newUser.id}`);
    return newUser;
  }

  async findById(id: number): Promise<User | null> {
    return this.db.find(u => u.id === id) || null;
  }
}
```


### 3. Módulo de Alto Nivel (Lógica de Negocio)

##### Este es el servicio de negocio que solo depende de la Abstracción. No sabe que está usando MySQL.

```
// src/user/application/user.service.ts

import { Injectable, Inject } from '@nestjs/common';
import { IUserRepository, USER_REPOSITORY } from '../interfaces/user-repository.interface';
import { User } from '../entities/user.entity';

@Injectable()
// Clase de Alto Nivel: Sigue la lógica de negocio
export class UserService {
  
  // Dependencia de Abstracción: Solo requiere un IUserRepository
  constructor(
    // Inyecta el token de la interfaz, NO la clase MySQLUserRepository
    @Inject(USER_REPOSITORY) private userRepository: IUserRepository,
  ) {}

  async register(name: string, email: string): Promise<User> {
    const newUser: User = { id: 0, name, email };
    
    // Lógica de Negocio: Usa el contrato (IUserRepository)
    const savedUser = await this.userRepository.save(newUser);
    
    console.log(`[Alto Nivel] Lógica de registro para ${name} ejecutada.`);
    
    return savedUser;
  }
}
```


### 4. Ensamblaje (NestJS Module)

##### El Módulo de NestJS es el Ensamblador (IoC Container) que conecta la Abstracción (el token) con la implementación concreta (el Bajo Nivel).

```
// src/user/user.module.ts

import { Module } from '@nestjs/common';
import { UserService } from './application/user.service';
import { MySQLUserRepository } from './infrastructure/mysql-user.repository';
import { USER_REPOSITORY } from './interfaces/user-repository.interface';
import { UserController } from './presentation/user.controller';

@Module({
  controllers: [UserController],
  providers: [
    // La clave del Ensamblaje (DIP):
    {
      // 1. El token que pide el Alto Nivel
      provide: USER_REPOSITORY, 
      // 2. La implementación CONCRETA (Bajo Nivel) que se le inyecta
      useClass: MySQLUserRepository, 
    },
    // El módulo de Alto Nivel
    UserService,
  ],
  exports: [UserService],
})
export class UserModule {}
```

#### !!! Si en el futuro deseas cambiar la base de datos a MongoDB, solo necesitas crear una nueva clase MongoDBUserRepository implements IUserRepository y cambiar una sola línea en el UserModule:

```
// En user.module.ts
{
    provide: USER_REPOSITORY,
    useClass: MongoDBUserRepository, // ¡Cambiado aquí!
}
```

##### El UserService (Módulo de Alto Nivel) permanece intacto, demostrando la aplicación perfecta del DIP y el OCP.




## L: (Principio de Sustitución de Liskov/Liskov Sustitution Principle (LSP)

#### Los objetos de un programa deben poder ser reemplazados por instancias de sus subtipos (clases derivadas) sin alterar el correcto funcionamiento de ese programa.

##### Formalmente: si S es un subtipo de T

##### Entonces los objetos de tipo T pueden ser reemplazados por objetos de tipo S

##### Ej: una función que espera un tipo T debería funcionar perfectamente si se le pasa un tipo S


### Está estrechamente ligado a los conceptos de herencia y polimorfismo

#### 1. Garantiza la Coherencia: Asegura que la herencia se utilice de forma correcta, donde la clase hija (subtipo) no solo herede la implementación, sino que también mantenga el comportamiento de la clase padre (tipo base).

#### 2. Evita Sorpresas: Al sustituir la clase base por una derivada, no debería haber efectos secundarios inesperados

Si una subclase cambia de manera drástica el comportamiento esperado de un método heredado (por ejemplo, arrojando una excepción inesperada o devolviendo un valor sin sentido en el contexto del padre), se está violando el LSP.

#### 3. Fomenta el Diseño Sólido: Contribuye a un diseño de software que es más robusto, reutilizable y fácil de mantener y extender.


Ej: Cuando se rompe LSP, problema del Rectángulo/Cuadrado:

1. Una clase base Rectangulo tiene métodos para establecer el ancho y el alto.

2. Una clase Cuadrado hereda de Rectangulo (porque un cuadrado es un rectángulo especial).

3. En la clase Cuadrado, al establecer el ancho, también se debe establecer el alto (y viceversa) para mantener la propiedad de que todos sus lados son iguales.

4. Si tienes una función que espera un Rectangulo y llama a establecerAncho(5) y luego a establecerAlto(10), espera un área de 50. Si se le pasa un objeto Cuadrado (el subtipo), la llamada a establecerAncho(5) podría cambiar el alto a 5, y la llamada a establecerAlto(10) podría cambiar el ancho a 10. Al final, el área será 100, no 50.

Rompe LSP porque el subtipo (Cuadrado) no pudo ser sustituido por el tipo base (Rectangulo) sin romper el comportamiento esperado del programa.


### Ej que Rompe LSP en TypeScrit

1. Definición de Clasees

```
class Rectangulo {
    constructor(protected ancho: number, protected alto: number) {}

    getAncho(): number {
        return this.ancho;
    }

    getAlto(): number {
        return this.alto;
    }

    setAncho(ancho: number): void {
        this.ancho = ancho;
    }

    setAlto(alto: number): void {
        this.alto = alto;
    }

    area(): number {
        return this.ancho * this.alto;
    }
}

// Violación: Cuadrado hereda de Rectangulo, pero cambia su comportamiento
class Cuadrado extends Rectangulo {
    constructor(lado: number) {
        super(lado, lado);
    }

    // Se fuerzan ambas dimensiones a ser iguales, cambiando el comportamiento del padre
    setAncho(lado: number): void {
        this.ancho = lado;
        this.alto = lado; // Esto es la violación
    }

    setAlto(lado: number): void {
        this.ancho = lado; // Esto es la violación
        this.alto = lado;
    }
}
```


2. Función de Prueba (Consumidora)

Esta función espera un Rectangulo y prueba un comportamiento básico:

```
function probarArea(forma: Rectangulo): void {
    forma.setAncho(5);
    forma.setAlto(10);
    const areaEsperada = 50;
    
    console.log(`--- Probando ${forma.constructor.name} ---`);
    console.log(`Ancho: ${forma.getAncho()}, Alto: ${forma.getAlto()}`);
    console.log(`Área calculada: ${forma.area()}`);

    if (forma.area() !== areaEsperada) {
        // ¡La falla! El comportamiento no se mantuvo.
        console.error(`¡Violación de LSP! Área esperada ${areaEsperada}, obtenida ${forma.area()}`);
    } else {
        console.log(`LSP cumplido para esta instancia.`);
    }
}

// Ejecución que muestra la violación
probarArea(new Rectangulo(1, 1)); // Funciona bien
probarArea(new Cuadrado(1));      // Falla porque el Cuadrado fuerza el Ancho a ser igual al Alto (10*10=100)
```


### Ej que Cumple LSP en TypeScript

#### Uso de un Tipo Base Coherente

##### Debemos asegurar que la clase base y sus subtipos mantengan el mismo contrato de comportamiento

##### La solución es usar una abstracción más general, como una Forma, y no forzar una relación de herencia incorrecta.


1. Definición de la Interfaz Base

Definimos una interfaz simple que solo requiere el cálculo del área.

```
interface Forma {
    area(): number;
}
```


2. Implementación de Clases

Ahora, ambas clases implementan la interfaz Forma, pero manejan sus propias propiedades sin interferir en el comportamiento del otro

```
// Implementación que cumple con el LSP
class RectanguloLSP implements Forma {
    constructor(private ancho: number, private alto: number) {}

    area(): number {
        return this.ancho * this.alto;
    }
}

// Implementación que cumple con el LSP
class CuadradoLSP implements Forma {
    constructor(private lado: number) {}

    area(): number {
        return this.lado * this.lado;
    }
}
```


3. 3. Función de Prueba (Consumidora)

La función ahora solo utiliza el contrato garantizado por la interfaz:

```
function imprimirArea(forma: Forma): void {
    console.log(`--- Probando ${forma.constructor.name} (LSP) ---`);
    console.log(`Área: ${forma.area()}`);
}

const rectangulo = new RectanguloLSP(5, 10);
const cuadrado = new CuadradoLSP(7);

// Sustitución exitosa:
imprimirArea(rectangulo); // Esperamos 50
imprimirArea(cuadrado);   // Esperamos 49
```

##### La función imprimirArea solo llama a area(), un método cuyo comportamiento no cambia de manera disruptiva en los subtipos.

Ambos subtipos (RectanguloLSP y CuadradoLSP) pueden ser sustituidos por el tipo Forma sin causar efectos secundarios, cumpliendo con el LSP.




# I: Principio de Segregación de Interfaces/Interface Segregation Principle (ISP)

#### Establece que: Ningún cliente debe ser forzado a depender de interfaces que no utiliza.

##### Es mejor tener muchas interfaces pequeñas y específicas (segregadas)

##### que una sola interfaz grande y "gorda" que fuerce a las clases implementadoras a definir métodos que no necesitan.


#### Cuando una clase implementa una interfaz, se compromete a implementar todos los métodos definidos en ella

##### Si la interfaz es muy grande y agrupa muchas responsabilidades:

### 1. Dependencia Innecesaria: El cliente (la clase que usa la interfaz) se vuelve dependiente de métodos que nunca va a llamar.

### 2. Mantenimiento Complicado: Si se modifica un método en la interfaz grande, todas las clases que la implementan deben ser modificadas, incluso si no usaban el método en cuestión.

Esto causa un acoplamiento innecesario y hace que el sistema sea frágil.

### 3. Violación de SRP: Las interfaces grandes a menudo también violan el Principio de Responsabilidad Única (SRP), ya que agrupan responsabilidades distintas.


#### ISP promueve interfaces cohesionadas (que solo se ocupan de una única responsabilidad) y acoplamiento débil.

### Ej que Rompe ISP: una única interfaz grande para una "Máquina Multifuncional":

```
interface MaquinaMultifuncional {
    imprimir(documento: string): void;
    escanear(documento: string): string;
    fax(documento: string): void;
}

// Clase que VIOLA el ISP
class ImpresoraBasica implements MaquinaMultifuncional {
    imprimir(documento: string): void {
        console.log(`Imprimiendo: ${documento}`);
    }
    // Obligada a implementar métodos que no usa
    escanear(documento: string): string {
        throw new Error("Error: Esta máquina no escanea.");
    }
    fax(documento: string): void {
        throw new Error("Error: Esta máquina no envía faxes.");
    }
}
```

La ImpresoraBasica es forzada a implementar escanear() y fax(), lo que la obliga a generar errores o implementaciones vacías, frustrando al cliente que use esta clase.


## Ej Cumple con ISP: En lugar de una sola interfaz, segregamos las responsabilidades en interfaces más pequeñas y específicas:

```
interface Impresora {
    imprimir(documento: string): void;
}

interface Escaner {
    escanear(documento: string): string;
}

interface Fax {
    fax(documento: string): void;
}

// Clase que CUMPLE el ISP
class ImpresoraBasicaISP implements Impresora {
    imprimir(documento: string): void {
        console.log(`Imprimiendo: ${documento}`);
    }
    // Solo implementa lo que realmente hace.
}

// Una máquina que sí puede hacer todo, implementa varias interfaces
class MaquinaTodoEnUno implements Impresora, Escaner, Fax {
    imprimir(documento: string): void { /* ... */ }
    escanear(documento: string): string { /* ... */ return "Escaneado"; }
    fax(documento: string): void { /* ... */ }
}
```

##### Ahora, una clase cliente que solo necesita imprimir solo dependerá de la interfaz Impresora

##### no estará al tanto de la existencia de los métodos de escaneo o fax.

##### La ImpresoraBasicaISP solo implementa el método que le es relevante, cumpliendo con el ISP.



## D: Principio de Inversión de Dependencias/Dependency Inversion Principle (DIP) 

Establece dos reglas principales: 

### 1. Módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones.

### 2. Las abstracciones no deben depender de los detalles. Los detalles deben depender de las abstracciones.


#### Objetivo: Desacoplamiento

##### Reducir el acoplamiento entre módulos de software, haciendo que el código sea más flexible, reutilizable y fácil de probar.

Tradicionalmente, en una aplicación, los módulos de alto nivel (que contienen la lógica de negocio importante)

Dependen directamente de los módulos de bajo nivel (que se encargan de la implementación de tareas específicas, como acceder a una base de datos o enviar un email).


#### El DIP invierte esta dependencia: en lugar de que la lógica de negocio dependa de la implementación concreta 

##### Ambos dependen de una abstracción (como una interfaz o una clase abstracta).


### Ej: módulo de Alto Nivel (ServicioPedidos) que necesita guardar datos.

#### 1. Sin DIP (Dependencia Directa): El ServicioPedidos crea directamente una instancia de la clase concreta BaseDeDatosMySQL.

Si mañana cambias a PostgreSQL o a un archivo JSON, tienes que modificar el código dentro de ServicioPedidos.


#### 2. Con DIP (Inversión de Dependencia):

Se define una Abstracción (InterfazAlmacenamiento).

El ServicioPedidos (Alto Nivel) depende de la InterfazAlmacenamiento.

La BaseDeDatosMySQL (Bajo Nivel) implementa la InterfazAlmacenamiento.


El ServicioPedidos ya no le importa cómo se guardan los datos, solo que el objeto que se le pase cumpla con el contrato de la interfaz

Esto hace que el código de alto nivel sea independiente de los detalles.


### Mecanismos Clave: La forma más común de implementar el DIP es a través de la Inyección de Dependencias (DI).

##### En lugar de que el módulo de alto nivel cree el módulo de bajo nivel, se le inyecta la dependencia a través del constructor

##### O un setter, o una propiedad, pero siempre haciendo referencia a la abstracción, no a la clase concreta.


El DIP es fundamental para el desarrollo impulsado por pruebas (TDD) porque te permite reemplazar las implementaciones concretas (ej. la base de datos real) con Mocks o Stubs durante las pruebas, asegurando que tu lógica de negocio funcione correctamente sin necesidad de una infraestructura real.


### Ej en TypeScript de DIP

#### GestorNotificaciones (módulo de alto nivel) que necesita enviar mensajes usando diferentes mecanismos, como email o SMS (módulos de bajo nivel).

#### 1. Sin DIP (Acoplamiento fuerte): el módulo de alto nivel depende directamente de los detalles de bajo nivel.

```
// Módulos de Bajo Nivel (Implementaciones concretas)
class ServicioEmail {
    enviarCorreo(destinatario: string, mensaje: string): void {
        console.log(`Enviando correo a ${destinatario}: "${mensaje}"`);
        // Lógica real para enviar email
    }
}

class ServicioSMS {
    enviarSMS(numero: string, mensaje: string): void {
        console.log(`Enviando SMS a ${numero}: "${mensaje}"`);
        // Lógica real para enviar SMS
    }
}

// Módulo de Alto Nivel (Lógica de negocio)
class GestorNotificacionesACoplado {
    private emailService: ServicioEmail; // Dependencia directa y concreta
    private smsService: ServicioSMS;     // Dependencia directa y concreta

    constructor() {
        // El módulo de alto nivel crea y depende directamente de las implementaciones concretas
        this.emailService = new ServicioEmail();
        this.smsService = new ServicioSMS();
    }

    enviarNotificacionPorEmail(destinatario: string, mensaje: string): void {
        this.emailService.enviarCorreo(destinatario, mensaje);
    }

    enviarNotificacionPorSMS(numero: string, mensaje: string): void {
        this.smsService.enviarSMS(numero, mensaje);
    }
}

// --- Uso sin DIP ---
console.log("--- SIN DIP ---");
const gestorAcoplado = new GestorNotificacionesACoplado();
gestorAcoplado.enviarNotificacionPorEmail("usuario@ejemplo.com", "¡Tu pedido ha sido enviado!");
gestorAcoplado.enviarNotificacionPorSMS("123456789", "¡Tu paquete llegará pronto!");

// Problemas:
// 1. Si cambiamos la implementación de ServicioEmail (ej. usamos una librería diferente),
//    GestorNotificacionesACoplado necesita ser modificado.
// 2. Es difícil de probar unitariamente GestorNotificacionesACoplado sin enviar emails/SMS reales.
```

##### Aquí, GestorNotificacionesACoplado está fuertemente acoplado a las clases ServicioEmail y ServicioSMS.

##### Si queremos añadir un nuevo servicio (por ejemplo, notificaciones push) o cambiar el proveedor de email, tendremos que modificar GestorNotificacionesACoplado.

##### Rompe el Principio Abierto/Cerrado y dificulta las pruebas.


#### 2. DIP (Inversión de Dependencias): desacoplar el GestorNotificaciones de las implementaciones concretas.

##### 1. Abstracciones (interfaces): para nuestros servicios de bajo nivel.

```
// Abstracciones (Módulos de Alto Nivel y Bajo Nivel dependerán de estas)
interface Notificador {
    enviar(destino: string, mensaje: string): void;
}
```


##### 2. Módulos de Bajo Nivel (Implementaciones Concretas)

Estas clases ahora implementan las abstracciones.

```
// Módulos de Bajo Nivel (Implementaciones concretas, dependiendo de la abstracción Notificador)
class ServicioEmailDIP implements Notificador {
    enviar(destinatario: string, mensaje: string): void {
        console.log(`[Email] Enviando correo a ${destinatario}: "${mensaje}"`);
        // Lógica real para enviar email
    }
}

class ServicioSMSDIP implements Notificador {
    enviar(numero: string, mensaje: string): void {
        console.log(`[SMS] Enviando SMS a ${numero}: "${mensaje}"`);
        // Lógica real para enviar SMS
    }
}

// Podemos añadir fácilmente un nuevo tipo de notificador sin modificar el GestorNotificaciones
class ServicioPushDIP implements Notificador {
    enviar(idUsuario: string, mensaje: string): void {
        console.log(`[Push] Enviando notificación push a usuario ${idUsuario}: "${mensaje}"`);
        // Lógica real para enviar notificación push
    }
}
```


##### 3. Módulo de Alto Nivel (Lógica de Negocio)

Ahora, el GestorNotificaciones depende de la abstracción Notificador, no de las implementaciones concretas. 

##### !!! Usamos la Inyección de Dependencias a través del constructor.

```
// Módulo de Alto Nivel (Lógica de negocio, dependiendo de la abstracción Notificador)
class GestorNotificacionesDIP {
    // El módulo de alto nivel depende de la abstracción Notificador
    // La dependencia es "inyectada" (Dependency Injection)
    constructor(private notificador: Notificador) {}

    notificar(destino: string, mensaje: string): void {
        this.notificador.enviar(destino, mensaje);
    }
}

// --- Uso con DIP ---
console.log("\n--- CON DIP ---");

// Inyectamos el servicio de email
const gestorConEmail = new GestorNotificacionesDIP(new ServicioEmailDIP());
gestorConEmail.notificar("usuario@ejemplo.com", "¡Tu cuenta ha sido creada!");

// Inyectamos el servicio de SMS
const gestorConSMS = new GestorNotificacionesDIP(new ServicioSMSDIP());
gestorConSMS.notificar("987654321", "¡Código de verificación: 12345!");

// Inyectamos el servicio de Push (¡sin cambiar GestorNotificacionesDIP!)
const gestorConPush = new GestorNotificacionesDIP(new ServicioPushDIP());
gestorConPush.notificar("userId-XYZ", "¡Oferta especial solo para ti!");
```

### Beneficios de DIP

#### 1. Desacoplamiento: GestorNotificacionesDIP no sabe ni le importa cómo se envía la notificación, solo sabe que tiene un objeto que cumple el contrato Notificador.

#### 2. Flexibilidad: Podemos cambiar el tipo de notificación (email, SMS, push) simplemente inyectando una implementación diferente, sin modificar el GestorNotificacionesDIP.

#### 3. Reusabilidad: Los servicios de bajo nivel (Email, SMS, Push) son más reutilizables y se pueden usar en otros contextos

#### 4. Testeabilidad: Es muy fácil probar GestorNotificacionesDIP con "mocks" o "stubs" del Notificador en lugar de servicios reales.


Con el DIP, hemos invertido la dirección de la dependencia. Antes, GestorNotificaciones dependía de ServicioEmail

Ahora, ServicioEmail (el detalle) depende de Notificador (la abstracción), y GestorNotificaciones (el alto nivel) también depende de Notificador. Ambos dependen de la abstracción.



# Diseño de interfaces/abstracciones

## 1. Fundamentos

### Herencia vs. Composición

Cuándo usar cada uno

La Composición sobre la Herencia es un principio clave en el diseño de interfaces.

Polimorfismo: Cómo las interfaces permiten que diferentes objetos sean tratados como un tipo común.


### Uso de SOLID

Principio de Responsabilidad Única (SRP): Cada interfaz debe tener una sola razón para cambiar.

Principio de Sustitución de Liskov (LSP): Clases que implementan una interfaz deben ser sustituibles sin romper el programa.

Principio de Segregación de Interfaces (ISP): Clientes no deben depender de métodos que no usan (interfaces pequeñas).

Principio de Inversión de Dependencias (DIP): Depender de abstracciones, no de concreciones (el concepto central de este estudio).


### Abstracciones Avandado

Interfaces (TypeScript/Java/C#): Cómo definen un contrato de comportamiento.

Clases Abstractas: Cuándo usarlas en lugar de interfaces (cuando se necesita una implementación parcial o estado base).

Acoplamiento y Cohesión: Comprender cómo las buenas abstracciones reducen el acoplamiento y aumentan la cohesión.


## 2. Diseño Aplicado

#### Utilizar las interfaces para implementar soluciones de diseño probadas.

### Patrones de Diseño Esenciales

Patrones de Creación: Implementar una fábrica (Factory Pattern) o fábrica abstracta (Abstract Factory) usando interfaces para crear objetos.

Patrones Estructurales: Estudiar el patrón Adaptador (Adapter), que usa una interfaz para que dos clases incompatibles trabajen juntas.

Patrones de Comportamiento: Implementar el patrón Estrategia (Strategy), donde las interfaces permiten intercambiar algoritmos sin cambiar la clase cliente.


### Inyección de Dependencias (DI)

DI como el mecanismo práctico para aplicar el DIP.

Inyección por Constructor (la forma más limpia de inyectar abstracciones).


### Mocking y Testabilidad

El objetivo principal de una buena abstracción es la testabilidad.

Crear "Mocks" o "Stubs" (implementaciones falsas de interfaces) para aislar la lógica de negocio de los detalles de infraestructura (bases de datos, APIs externas) durante las pruebas unitarias.


## 3. Avanzado

### Abstracción de Repositorios (Repository Pattern):

Crear una interfaz IRepositorio<T> para acceder a datos.

Implementar una versión concreta (RepositorioSQL) y una versión de prueba (RepositorioEnMemoria) que ambas satisfagan la misma interfaz.

Esto demuestra el poder de la sustitución y el DIP.


### Casos de Estudio

Cómo las interfaces se utilizan en frameworks de código abierto (ej. en la configuración de middleware o plugins).


### Recursos

Clean Code y Clean Architecture de Robert C. Martin (Uncle Bob).

Design Patterns: Elements of Reusable Object-Oriented Software (GoF).


## Herencia vs Composición

### Herencia

#### mecanismo donde una nueva clase (subclase o clase hija) toma las propiedades y métodos de una clase existente (superclase o clase padre).

##### Relación: Representa una relación "Es un/a" (Is-a).

Ejemplo: Un Gato es un Animal.

Implementación: Se logra mediante la palabra clave extends (en TypeScript/Java/etc.).

Reutilización: Se reutilizan la implementación (código) y la interfaz (los métodos públicos) del padre.    


### Desventaja de la Herencia

#### 1. Acoplamiento Fuerte: La subclase queda íntimamente ligada a la implementación de la superclase

##### Si la superclase cambia, la subclase puede romperse o cambiar su comportamiento (lo que potencialmente viola el LSP).


#### 2. Rigidez: La herencia se define estáticamente en el momento de la compilación

##### Una clase solo puede heredar de una clase (herencia simple en muchos lenguajes), lo que limita la reutilización.


#### 3. El Problema de Subclases Frágiles: La subclase hereda métodos y propiedades, incluso aquellos que no necesita o que no son apropiados para ella.


### Composición

#### Mecanismo donde una clase incluye instancias de otras clases para obtener la funcionalidad deseada

##### Relación: Representa una relación "Tiene un/a" (Has-a).

Ejemplo: Un Coche tiene un Motor.

##### Implementación: Se logra mediante la inclusión de referencias (propiedades) de otras clases

##### O, idealmente, de interfaces (abstracciones) como miembros de la clase principal.

Reutilización: Se reutiliza comportamiento delegando responsabilidades a objetos especializados.


### Beneficios de Composición

#### 1. Acoplamiento Débil: La clase solo se acopla a la interfaz del objeto que compone, no a su implementación concreta

Esto facilita el cambio o la sustitución de la funcionalidad.


#### 2. Flexibilidad: Permite la creación dinámica (en tiempo de ejecución) de objetos con diferentes comportamientos

Una clase puede "componerse" de múltiples objetos para obtener múltiples capacidades.


#### 3. !!! Cumplimiento de SOLID: Es la base para aplicar el DIP (dependencia de abstracciones) y el ISP (interfaces específicas).


### Ej TS de Composición: La composición utiliza interfaces para desacoplar el comportamiento:

```
// 1. Abstracción/Interfaz (Comportamiento)
interface Volador {
    volar(): void;
}

// 2. Clases de Comportamiento (Implementación)
class ComportamientoVueloAlas implements Volador {
    volar(): void {
        console.log("¡Vuela batiendo sus alas!");
    }
}

class ComportamientoVueloCohete implements Volador {
    volar(): void {
        console.log("¡Vuela propulsado por un cohete!");
    }
}

// 3. Clase Principal (Composición)
class Pato {
    // La clase Pato TIENE un objeto que implementa Volador
    constructor(private comportamientoVuelo: Volador) {}

    realizarVuelo(): void {
        this.comportamientoVuelo.volar();
    }
    
    // El comportamiento de vuelo se puede cambiar en tiempo de ejecución
    setComportamientoVuelo(nuevoComportamiento: Volador): void {
        this.comportamientoVuelo = nuevoComportamiento;
    }
}

// Uso:
let patoNormal = new Pato(new ComportamientoVueloAlas());
patoNormal.realizarVuelo(); // Vuela batiendo sus alas

// Cambiamos el comportamiento dinámicamente:
patoNormal.setComportamientoVuelo(new ComportamientoVueloCohete());
patoNormal.realizarVuelo(); // Vuela propulsado por un cohete
```

##### Si hubiéramos usado Herencia, el Pato estaría ligado a una sola forma de volar.

#### Con Composición, el comportamiento (Volador) se intercambia fácilmente, lo que es mucho más flexible y menos acoplado.


## Prácticas para Diseño de Abstracciones



# Diseño de Módulos

Se enfoca en las tres áreas principales del diseño modular

##### Principios de Cohesión y Acoplamiento, Patrones Estructurales y Gestión de Dependencias


## 1. El Corazón de la Modularidad (Cohesión y Acoplamiento)

##### Objetivo: Criterios para dividir un sistema en módulos (clases, paquetes o namespaces).

### 1. Cohesión (Cohesion): La medida en que los elementos dentro de un módulo están relacionados y trabajan juntos para lograr un único propósito.

Tipos de cohesión, enfocándose en la Cohesión Funcional (la mejor, donde el módulo realiza una única función bien definida) y evitando la Cohesión Temporal o Coincidental.

##### Principio de Responsabilidad Única (SRP): Asegurar que cada módulo (clase o paquete) tenga una sola razón para cambiar.


### 2. Acoplamiento (Coupling): La medida de la interdependencia entre diferentes módulos. El objetivo es mantener el acoplamiento bajo.

Estudiar tipos de acoplamiento, enfocándose en el Acoplamiento por Datos (el más aceptable) y evitando el Acoplamiento por Contenido (el peor, donde un módulo depende de detalles internos de otro).

El objetivo es que los módulos se comuniquen a través de interfaces públicas estables, no de detalles de implementación.


### 3. Principios de Diseño para la Modularidad (GRASP):

#### Experto en Información (Information Expert): Asignar la responsabilidad de la operación al módulo que tiene la información necesaria para realizarla

Esto promueve la alta cohesión.

#### Bajo Acoplamiento (Low Coupling): Asignar responsabilidades para mantener la interdependencia lo más baja posible.


## 2. Principios de Arquitectura Modular (Los 5 Principios de Diseño de Paquetes)

Establecidos por Robert C. Martin) se aplican a nivel de paquetes o módulos grandes, no solo a nivel de clases.

### Principios de Cohesión de Paquetes:

#### REP (Reuse/Release Equivalence Principle): La unidad de reutilización debe ser la unidad de publicación. Lo que se reutiliza en conjunto, debe empaquetarse junto.

#### CCP (Common Closure Principle): Las clases que cambian por las mismas razones deben estar en el mismo módulo. Esto está directamente relacionado con el SRP a nivel de paquete.

#### CRP (Common Reuse Principle): Las clases que se usan juntas deben agruparse. Evita que los clientes dependan de módulos que no necesitan (relacionado con el ISP a nivel de paquete).


### Principios de Acoplamiento de Paquetes:

ADP (Acyclic Dependencies Principle): Las dependencias entre módulos deben ser unidireccionales, evitando ciclos (dependencia circular), ya que estos dificultan la comprensión, el despliegue y la prueba.

SDP (Stable Dependencies Principle): Los módulos más fáciles de cambiar (menos estables) deben depender de los módulos más difíciles de cambiar (más estables). Los módulos estables deben ser abstractos para que puedan ser extendidos (relacionado con el OCP y DIP).


## 3. Patrones y Estructuras Modulares Avanzadas

### Abstracción y Encapsulamiento:

Regla de Encapsulamiento: Proteger los detalles internos del módulo, exponiendo solo la interfaz pública. Todo lo que el cliente no necesita saber debe ser privado.

Diseño por Contrato (Design by Contract): Definir claramente las precondiciones, postcondiciones e invariantes de la interfaz pública del módulo.


### Patrones de Diseño Estructurales:

Fachada (Facade): Proporcionar una interfaz única y simple a un subsistema complejo (un buen módulo a menudo actúa como una Fachada para sus componentes internos).

Módulo (Module/Package): Uso de namespaces o paquetes para agrupar clases relacionadas y controlar la visibilidad (pública/privada) entre módulos.


### Inversión de Dependencias (DIP) y Capas:

Diseñar el sistema en Capas (ej. Dominio, Aplicación, Infraestructura).

Asegurar que las capas superiores (más abstractas, como el Dominio) no dependan de las capas inferiores (más concretas, como la Infraestructura), aplicando el DIP para invertir la dependencia a través de interfaces. Esto es la base de la Arquitectura Limpia (Clean Architecture).




# Diseño de Módulo de Bajo Nivel

##### Se centra en la construcción de unidades de código pequeñas (como clases y funciones) que son robustas, fáciles de probar y reutilizables.

##### Donde los principios SOLID y la programación orientada a objetos se aplican con mayor detalle.


## 1. Fundamentos de la Unidad (Clase y Función)

##### Objetivo: dominar los criterios para diseñar la unidad de código más pequeña de manera óptima.

### Cohesión a Nivel de Clase:

Revisar el Principio de Responsabilidad Única (SRP) a fondo. Una clase debe tener solo una razón para cambiar.

Asegurar que los métodos de una clase siempre operen sobre los datos de esa clase (alta Cohesión Funcional). 


### Encapsulamiento y Contratos:

Definir la interfaz pública de la clase como su contrato.

Hacer que el estado interno sea privado (ocultación de información).

##### !!! Diseño por Contrato (DbC): Definir precondiciones (qué debe ser verdad antes de llamar al método), postcondiciones (qué será verdad después) e invariantes (qué debe ser verdad siempre). 


### Diseño de Funciones/Métodos:

Asegurar que las funciones hagan una sola cosa (Cohesión Funcional).

##### !!! Evitar listas largas de argumentos. Si se necesitan más de tres o cuatro, usar un objeto de configuración (config object).

Preferir las Funciones Puras cuando sea posible (sin efectos secundarios y deterministas).


## 2. Robustez y Flexibilidad (SOLID en Detalle)

##### Se utilizan los principios SOLID para garantizar que los módulos de bajo nivel sean flexibles y estables.

### Aplicación Práctica del LSP:

Asegurarse de que al sobrescribir (override) un método, la subclase no cambie el comportamiento esperado ni introduzca excepciones inesperadas que no estén documentadas en la clase base.

Práctica: Evaluar si una relación "Es un/a" (herencia) no se debe convertir en "Tiene un/a" (composición) para evitar violaciones del LSP (ej. el dilema del Rectángulo/Cuadrado).


### Uso de Interfaces para Flexibilidad (ISP y DIP):

Principio de Segregación de Interfaces (ISP): Dividir interfaces grandes en roles específicos para que las clases solo dependan de los métodos que realmente usan.

Principio de Inversión de Dependencias (DIP): Los módulos de bajo nivel (como las clases de servicio) deben depender de las abstracciones (interfaces) definidas en el módulo de alto nivel (como la lógica de negocio), y no al revés.


### Manejo de Errores y Excepciones:

Los módulos de bajo nivel deben manejar los errores de manera consistente.

Preferir el uso de excepciones personalizadas (o tipos Result/Either) en lugar de devolver códigos de error genéricos. Las excepciones deben ser descriptivas y estar documentadas en el contrato del método.


## 3. Testabilidad y Reutilización

##### El objetivo final de un buen módulo de bajo nivel es que sea trivial de probar y fácil de reutilizar.

### Inyección de Dependencias (DI)

#### !!! Asegurar que todas las dependencias externas (otras clases, APIs) se inyecten a través del constructor y se almacenen como propiedades privadas (Inyección por Constructor). Esto facilita el mocking.

Evitar el uso del operador new dentro de la clase para instanciar dependencias.


### Diseño Dirigido por Pruebas (TDD)

Adoptar la práctica de escribir la prueba unitaria antes de escribir el código de la función o clase. Esto garantiza que el módulo esté diseñado para ser probado.

#### !!! Enfocarse en la cobertura de rama y línea para asegurar que toda la lógica del módulo se haya ejecutado en las pruebas.


### Herramientas de Mocking y Stubs:

Aprender a usar librerías de mocking (como Jest Mocks, Sinon, o Mockito) para sustituir las dependencias inyectadas con dobles de prueba.

Practicar el aislamiento de la clase bajo prueba para que solo se pruebe su lógica, no la lógica de sus dependencias.



## Módulo de Bajo Nivel que cumple con todos los SOLID

##### Un buen ejemplo es un validador de datos que usa la Composición y el Principio de Inversión de Dependencias (DIP).


### Ej: clase ValidadorEmail que depende de una interfaz de estrategia para realizar las comprobaciones, haciendo que sea fácil de probar y extender.

#### 1. DIP y ISP: Abstracción (Interfaz)

Definimos una interfaz pequeña y específica para el comportamiento de validación. Esto cumple con el ISP (Segregación de Interfaces) y es la abstracción en la que confiaremos para el DIP.

```
// Notamos que la interfaz tiene un único propósito, cumpliendo con SRP a nivel de contrato.
interface EstrategiaValidacion {
    esValido(valor: string): boolean;
}
```


#### 2. SRP y OCP: Implementaciones Concretas

Creamos implementaciones concretas de la interfaz

Cada una tiene una única razón para cambiar (SRP) y podemos añadir nuevas reglas sin modificar las existentes (OCP).

```
// Módulo de Bajo Nivel 1: Implementa la abstracción
class ValidacionRegexEmail implements EstrategiaValidacion {
    // Implementación concreta basada en una expresión regular
    esValido(email: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        console.log(`- Usando Regex: ${regex.test(email) ? '✅' : '❌'}`);
        return regex.test(email);
    }
}

// Módulo de Bajo Nivel 2: Otra estrategia para otra regla (ej. no está en una lista negra)
class ValidacionListaNegra implements EstrategiaValidacion {
    private listaNegra = ['spam.com', 'phishing.net'];

    esValido(email: string): boolean {
        const dominio = email.split('@')[1];
        const esBloqueado = this.listaNegra.includes(dominio);
        console.log(`- Comprobando Lista Negra: ${!esBloqueado ? '✅' : '❌'}`);
        return !esBloqueado;
    }
}
```


#### 3. DIP y LSP: El Módulo de Alto Nivel

La clase ValidadorEmail es nuestro módulo de "alto nivel" en este contexto, ya que contiene la lógica de negocio (aplicar una o más estrategias de validación).

```
// Módulo de Alto Nivel: Depende de la abstracción, no de las concreciones.
class ValidadorEmail {
    // La dependencia es la interfaz (abstracción), cumpliendo el DIP.
    // Usamos composición: ValidadorEmail TIENE una lista de Estrategias.
    private estrategias: EstrategiaValidacion[];

    // Inyección de Dependencias a través del constructor
    constructor(estrategias: EstrategiaValidacion[]) {
        this.estrategias = estrategias;
    }

    // El método utiliza todas las estrategias, cumpliendo con LSP: 
    // cualquier objeto inyectado que implemente EstrategiaValidacion funcionará.
    validar(email: string): boolean {
        console.log(`\nValidando Email: ${email}`);
        
        for (const estrategia of this.estrategias) {
            if (!estrategia.esValido(email)) {
                return false; // Falla en la primera estrategia que no pasa
            }
        }
        return true; // Pasa todas las estrategias
    }
}
```


#### 4. Uso (Demostración de Flexibilidad)

El cliente final solo necesita configurar el ValidadorEmail inyectándole las estrategias deseadas:

```
// 1. Caso de uso A: Solo validación de formato (fácil de testear)
const soloFormato = new ValidadorEmail([
    new ValidacionRegexEmail()
]);
soloFormato.validar("test@ejemplo.com"); // Pasa
soloFormato.validar("invalido");        // Falla

// 2. Caso de uso B: Formato y Lista Negra
const completo = new ValidadorEmail([
    new ValidacionRegexEmail(),
    new ValidacionListaNegra()
]);
completo.validar("usuario@spam.com"); // Falla por Lista Negra
completo.validar("usuario@gmail.com"); // Pasa ambos
```

##### S (SRP): Cada clase de validación (ej. ValidacionRegexEmail) tiene una única responsabilidad (validar una regla específica).

##### O (OCP): El ValidadorEmail está abierto a la extensión (puedes añadir una nueva regla de validación, como ValidacionLongitudMinima) pero cerrado a la modificación (no tienes que cambiar la clase ValidadorEmail).

##### L (LSP): Cualquier objeto inyectado que implemente EstrategiaValidacion (ej. si sustituyes ValidacionRegexEmail por un ValidacionServicioExterno) funcionará sin problemas en el método validar().

##### I (ISP): La interfaz EstrategiaValidacion es muy específica, obligando a los implementadores a usar solo el método esValido().

##### D (DIP): La clase de alto nivel ValidadorEmail no depende de las clases concretas (ValidacionRegexEmail), sino de la abstracción (EstrategiaValidacion).
    



# Diseño de Módulo de Alto Nivel

#### Es donde se define la arquitectura de la aplicación, enfocándose en la lógica de negocio y la coordinación

##### El objetivo es crear módulos que sean estables, abstractos y completamente independientes de los detalles de la infraestructura.

Siguen la Arquitectura Limpia (Clean Architecture).

Se centra en la lógica de negocio y la inversión de dependencias para aislar el corazón del sistema.


## 1. El Corazón del Sistema (La Capa de Dominio)

##### El objetivo es definir la esencia del sistema sin preocuparse por la tecnología. Esta es la capa de más alto nivel.

##### Esta es la capa de más alto nivel.


### Diseño de Entidades (Entities):

#### !!! Definir las estructuras que contienen las reglas de negocio más críticas y transversales (ej. Usuario, Cuenta).

Asegurar que las Entidades sean agnósticas a la persistencia; no deben tener conocimiento de bases de datos, frameworks o interfaces de usuario.

#### !!! Implementar las reglas de negocio como métodos dentro de las Entidades (comportamiento), no solo como estructuras de datos anémicas


### Definición de Contratos (Interfaces)

#### Crear Interfaces de Repositorio (ej. IUsuarioRepositorio) que definan las operaciones de acceso a datos necesarias.

#### Crear Interfaces de Servicio (ej. IProveedorEmail) para cualquier interacción con sistemas externos.

#### !!! Inversión de Dependencias (DIP): Las interfaces de bajo nivel (Infraestructura) deben estar definidas en esta capa de alto nivel, forzando a los detalles a depender de ellas.


## 2. Lógica de Aplicación (Casos de Uso)

##### Se enfoca en cómo la aplicación realiza tareas específicas usando las Entidades.

### Creación de Casos de Uso (Use Cases/Interactors)

Cada Caso de Uso debe representar una funcionalidad específica de la aplicación (ej. CrearNuevoPedido, ActualizarPerfilDeUsuario).

Asegurar el SRP: Un Caso de Uso tiene una sola responsabilidad, que es coordinar el flujo de datos para lograr un objetivo de negocio.

Los Casos de Uso solo deben orquestar el flujo; deben utilizar las Entidades para ejecutar las reglas de negocio.


### Inyección de Dependencias (DI) en Casos de Uso

El Caso de Uso debe recibir todas las dependencias (Repositorios, Servicios, etc.) a través de su constructor, y deben ser abstracciones (interfaces).

Esto garantiza que el módulo de alto nivel sea completamente independiente de la infraestructura, haciendo que la capa de aplicación sea trivial de probar.


### Patrón Estrategia y Mediador

Aplicar el patrón Estrategia para hacer que los Casos de Uso sean flexibles al delegar algoritmos intercambiables (ej. calcular impuestos para diferentes países).

Considerar el patrón Mediador para coordinar la comunicación entre múltiples Entidades o Servicios sin acoplarlos directamente.


## 3. Separación y Estabilidad de Módulos (Principios de Paquetes)

##### Aplica los principios de modularidad a la estructura del proyecto.

### Aislamiento de Capas:

Implementar la regla: La Capa de Dominio solo puede depender de ella misma. La Capa de Aplicación puede depender de la Capa de Dominio. Ninguna de ellas puede depender de la Capa de Infraestructura (Web/DB/APIs).

Garantizar el ADP (Acyclic Dependencies Principle): No debe haber ciclos de dependencia entre módulos (ej. Dominio no puede depender indirectamente de la Interfaz de Usuario).


### Principio de Dependencias Estables (SDP):

Asegurar que los módulos de alto nivel (Dominio y Casos de Uso) sean los más estables (difíciles de cambiar, muy referenciados) y abstractos (llenos de interfaces).

Los módulos de bajo nivel (Implementaciones de Repositorios) deben ser inestables (fáciles de cambiar) y concretos.     


### Integración a través de Puertos y Adaptadores:

Entender la Capa de Aplicación como el Puerto (la API de la aplicación).

La Capa de Infraestructura son los Adaptadores (que convierten las llamadas de la API/Base de Datos a las interfaces de la aplicación).


## Módulo de Alto Nivel que cumple con todos los SOLID


Es el Caso de Uso central en una arquitectura limpia (como la Arquitectura Hexagonal o Limpia).

##### Este módulo contendrá la lógica de negocio y dependerá solo de abstracciones (interfaces) definidas dentro de sí mismo, invirtiendo la dependencia de la infraestructura.


## Ej: sistema de gestión de cuentas de usuario

Caso de Uso para registrar un nuevo usuario.


### 1. Módulo de Abstracciones (Cumplimiento de DIP, LSP, ISP)

##### Interfaces que nuestro Módulo de Alto Nivel necesita para operar. 

Estas interfaces son los "Puertos" de la aplicación.

```
// 1. Entidad de Dominio (Alta Cohesión, SRP)
class Usuario {
    constructor(
        public id: string,
        public email: string,
        public nombre: string,
        public estaActivo: boolean = false
    ) {}
    
    // Regla de Negocio: La entidad sabe cómo activarse.
    activar(): void {
        this.estaActivo = true;
    }
}

// 2. Puertos (Interfaces requeridas por el Caso de Uso)
// DIP: El módulo de alto nivel define la interfaz del módulo de bajo nivel.

// Puerto de Base de Datos (ISP: solo lo que necesitamos)
interface IRepositorioUsuarios {
    buscarPorEmail(email: string): Promise<Usuario | null>;
    guardar(usuario: Usuario): Promise<void>;
}

// Puerto de Comunicación Externa (ISP: solo lo que necesitamos)
interface IServicioNotificacion {
    enviarEmailActivacion(usuario: Usuario, token: string): Promise<void>;
}
```


### 2. Módulo de Alto Nivel (Caso de Uso)

Clase central. 

Contiene la lógica de negocio pura y coordina las operaciones.

```
// Datos de entrada y salida del Caso de Uso
interface EntradaRegistro {
    email: string;
    nombre: string;
}

// 3. Caso de Uso (SRP: Una sola responsabilidad: registrar un usuario)
class RegistrarUsuario {
    // Inyección de Dependencias: Depende SOLAMENTE de las interfaces (DIP)
    constructor(
        private readonly repositorio: IRepositorioUsuarios,
        private readonly notificador: IServicioNotificacion
    ) {}
    
    // OCP: La lógica está cerrada a la modificación, pero abierta a la extensión 
    // (ej. cambiando el repositorio o el notificador inyectado).
    async ejecutar(datos: EntradaRegistro): Promise<Usuario> {
        
        // 1. Lógica de Negocio: Verificar si el email ya existe.
        const usuarioExistente = await this.repositorio.buscarPorEmail(datos.email);
        if (usuarioExistente) {
            throw new Error("El email ya está registrado.");
        }
        
        // 2. Creación de la Entidad y aplicación de reglas de dominio.
        const nuevoUsuario = new Usuario(
            `user-${Date.now()}`, 
            datos.email, 
            datos.nombre
        );
        nuevoUsuario.activar(); // Regla de negocio simplificada
        
        // 3. Persistencia de la Entidad (LSP: El Repositorio real o un Mock funcionarán)
        await this.repositorio.guardar(nuevoUsuario);
        
        // 4. Notificación externa
        const token = "TOKEN_DE_EJEMPLO";
        await this.notificador.enviarEmailActivacion(nuevoUsuario, token);
        
        return nuevoUsuario;
    }
}
```


### 3. Los Módulos de Bajo Nivel (Infraestructura)

##### Estas clases son los "Adaptadores" que implementan las interfaces del módulo de alto nivel.

```
// Adaptador de Base de Datos (puedes sustituirlo por Postgres, Mongo, etc.)
class RepositorioUsuariosMemoria implements IRepositorioUsuarios {
    // Implementación concreta
    private usuarios: Usuario[] = [];

    async buscarPorEmail(email: string): Promise<Usuario | null> {
        return this.usuarios.find(u => u.email === email) || null;
    }

    async guardar(usuario: Usuario): Promise<void> {
        this.usuarios.push(usuario);
        console.log(`[INFRA] Usuario ${usuario.email} guardado en memoria.`);
    }
}

// Adaptador de Notificaciones (puedes sustituirlo por SendGrid, Twilio, etc.)
class ServicioNotificacionConsola implements IServicioNotificacion {
    // Implementación concreta
    async enviarEmailActivacion(usuario: Usuario, token: string): Promise<void> {
        console.log(`[INFRA] Email enviado a ${usuario.email} con token: ${token}`);
    }
}
```

S (SRP)	La clase RegistrarUsuario tiene una única responsabilidad: el flujo de registro. La gestión de datos está delegada al Repositorio.

O (OCP)	Para cambiar la base de datos o el proveedor de email, no modificas RegistrarUsuario. Simplemente creas una nueva clase que implemente la interfaz y la inyectas.

L (LSP)	El método ejecutar de RegistrarUsuario puede recibir cualquier implementación de IRepositorioUsuarios (el real o un mock para pruebas) y funcionará correctamente.

I (ISP)	Las interfaces (IRepositorioUsuarios, IServicioNotificacion) son pequeñas y específicas. El Caso de Uso no depende de un único interfaz "gordo".

D (DIP)	Sí	RegistrarUsuario (Alto Nivel) depende de las abstracciones (IRepositorioUsuarios y IServicioNotificacion). Los detalles de infraestructura (Bajo Nivel) como RepositorioUsuariosMemoria dependen de estas mismas abstracciones. La dependencia ha sido invertida.



# Estructura/orden de código con Módulo de Bajo Nivel y Módulo de Alto Nivel

Basada en la Arquitectura Limpia (Clean Architecture)

```
.
├── src/
│   ├── 1_aplicacion_y_dominio/  <- Módulo de Alto Nivel (El "Core")
│   │   ├── entidades/
│   │   │   └── Usuario.ts        // Reglas de negocio críticas (Entidades)
│   │   ├── puertos/              <- Abstracciones/Interfaces (DIP)
│   │   │   ├── IRepositorioUsuario.ts  // I/O de Dominio
│   │   │   └── IServicioNotificacion.ts // I/O de Sistemas Externos
│   │   └── casos_uso/
│   │       └── RegistrarUsuario.ts  // Lógica de Alto Nivel (Clase 'RegistrarUsuario')
│   │
│   └── 2_infraestructura/       <- Módulo de Bajo Nivel (Los "Detalles")
│       ├── persistencia/
│       │   └── RepositorioUsuarioSQL.ts // Implementa IRepositorioUsuario
│       └── servicios_externos/
│           └── ServicioNotificacionSendGrid.ts // Implementa IServicioNotificacion
│
└── index.ts                 // Punto de Entrada (Orquestación/Inyección de Dependencias)
```


## Código

##### El código en cada módulo y, lo más importante, cómo las flechas de dependencia se invierten.


### 1. Módulo de Alto Nivel (1_aplicacion_y_dominio)

#### Este módulo contiene el core y define las abstracciones.


#### A. Abstracciones/Puertos (puertos/IRepositorioUsuario.ts)

```
// Módulo de Alto Nivel: Define el contrato.
// NOTA: No hay NINGÚN 'import' de la capa de infraestructura aquí.
import { Usuario } from '../entidades/Usuario';

export interface IRepositorioUsuario {
    // El ALTO NIVEL decide qué métodos necesita el BAJO NIVEL.
    buscarPorEmail(email: string): Promise<Usuario | null>;
    guardar(usuario: Usuario): Promise<void>;
}
```


#### B. Lógica de Negocio (casos_uso/RegistrarUsuario.ts)

##### La clase de Alto Nivel solo importa la interfaz, no la implementación concreta.

```
// Módulo de Alto Nivel: Lógica pura.
import { Usuario } from '../entidades/Usuario';
import { IRepositorioUsuario } from '../puertos/IRepositorioUsuario';
import { IServicioNotificacion } from '../puertos/IServicioNotificacion';

// Depende de Abstracciones (Cumple DIP)
export class RegistrarUsuario {
    constructor(
        private readonly repositorio: IRepositorioUsuario, // Interfaz
        private readonly notificador: IServicioNotificacion // Interfaz
    ) {}

    async ejecutar(email: string, nombre: string): Promise<Usuario> {
        // ... (Lógica de negocio aquí)
        // Llama a this.repositorio.guardar(), sin saber dónde se guardan los datos.
        
        // Simulación:
        const nuevoUsuario = new Usuario('id-123', email, nombre);
        await this.repositorio.guardar(nuevoUsuario); 
        await this.notificador.enviarEmailActivacion(nuevoUsuario, 'token');
        return nuevoUsuario;
    }
}
```


### 2. Módulo de Bajo Nivel (2_infraestructura)

#### Contiene la implementación concreta y depende de la interfaz definida en el módulo de Alto Nivel.


##### Adaptador de Base de Datos (persistencia/RepositorioUsuarioSQL.ts)

```
// Módulo de Bajo Nivel: Implementación concreta (el detalle).
// NOTA: Debe IMPORTAR la interfaz del Módulo de Alto Nivel.
import { IRepositorioUsuario } from '../1_aplicacion_y_dominio/puertos/IRepositorioUsuario';
import { Usuario } from '../1_aplicacion_y_dominio/entidades/Usuario';

export class RepositorioUsuarioSQL implements IRepositorioUsuario {
    // Implementación del Adaptador.
    // Aquí es donde estaría el código SQL o la conexión a la base de datos.
    async buscarPorEmail(email: string): Promise<Usuario | null> {
        // Lógica de consulta SQL...
        return null; 
    }

    async guardar(usuario: Usuario): Promise<void> {
        // Lógica para INSERT INTO database...
        console.log(`[SQL]: Usuario ${usuario.email} persistido en la base de datos.`);
    }
}
```


### 3. Punto de Entrada (Ensamblaje)

##### Este es el único lugar donde se unen las partes, aplicando la Inyección de Dependencias.

```
// index.ts: Orquestación (Módulo de Configuración)
import { RegistrarUsuario } from './src/1_aplicacion_y_dominio/casos_uso/RegistrarUsuario';
import { RepositorioUsuarioSQL } from './src/2_infraestructura/persistencia/RepositorioUsuarioSQL';
import { ServicioNotificacionSendGrid } from './src/2_infraestructura/servicios_externos/ServicioNotificacionSendGrid';
// ... (otras implementaciones)

// 1. Instanciar los Módulos de Bajo Nivel (Concreciones)
const repositorioConcreto = new RepositorioUsuarioSQL();
const notificadorConcreto = new ServicioNotificacionSendGrid();

// 2. Instanciar el Módulo de Alto Nivel, INYECTANDO las implementaciones concretas
//    como si fueran sus interfaces (polimorfismo).
const registrarUsuario = new RegistrarUsuario(
    repositorioConcreto, // IRepositorioUsuario
    notificadorConcreto  // IServicioNotificacion
);

// 3. Ejecutar la lógica de Alto Nivel
registrarUsuario.ejecutar('ejemplo@correo.com', 'Carlos');
```


## Abstracciones en el Módulo de Alto Nivel

Cuando la interfaz se define junto a la Lógica de Negocio (Módulo de Alto Nivel):

### Bajo Nivel depende de Alto Nivel (Inversión): El Módulo de Bajo Nivel (RepositorioSQL) es el que debe importar la interfaz del Módulo de Alto Nivel e implementarla.

### Desacoplamiento Total: El Módulo de Alto Nivel es completamente independiente. Puede existir, ser probado y funcionar sin que el módulo de bajo nivel exista siquiera. Solo sabe que recibirá "algo" que cumple con su contrato.

### Cumplimiento de DIP: Se invierte la dirección de la dependencia. Las flechas de dependencia ahora apuntan hacia adentro, hacia la lógica de negocio estable (las abstracciones), protegiéndola de los cambios en los detalles.

#### : La abstracción es la necesidad del módulo de alto nivel. Por lo tanto, el módulo de alto nivel debe ser quien defina esa necesidad (el contrato) para que los módulos de bajo nivel sean quienes la satisfagan.




# Patrones Creacionales (Creational Patterns)

##### Gestionan la instanciación de objetos: haciendo que el sistema sea independiente de cómo se crean, componen y representan sus objetos.

##### Proporcionar soluciones a los problemas relacionados con la creación de objetos de una manera flexible y controlada.

##### Su objetivo principal es desacoplar el sistema de las clases concretas que se instancian, lo que facilita los cambios, incrementa la flexibilidad y promueve la reutilización del código

Buscan abstraer el proceso de instanciación.


## Beneficios

#### 1. Flexibilidad: Puedes cambiar la forma en que se crean los objetos sin modificar el código que los utiliza (el cliente).

#### 2. Abstracción: El código cliente no necesita saber los detalles de implementación de las clases concretas que está usando

#### 3. Reutilización: Se pueden reutilizar las lógicas de creación en diferentes partes del sistema.



## Singleton: Garantiza que una clase tenga una sola instancia y proporciona un punto de acceso global a ella.

##### Garantiza que una clase tenga una única instancia

##### Proporciona un punto de acceso global a ella.

##### Se utiliza para recursos compartidos y controlados.

Ejemplo: Una clase de Configuración, un Administrador de Conexiones a base de datos, o un Sistema de Registro de Logs (Logger). 


### Código

##### Usa el modificador de acceso private y static para controlarlo

##### Clase ConfiguracionGlobal que solo debe existir una vez en toda la aplicación para manejar ajustes de configuración compartidos.

```
class ConfiguracionGlobal {
    // 1. Instancia estática y privada (la única instancia del Singleton)
    private static instance: ConfiguracionGlobal;

    // Propiedades de la configuración
    public tema: string = "claro";
    public idioma: string = "es";

    // 2. Constructor privado: Evita la instanciación directa (con 'new')
    private constructor() {
        // Inicialización que solo se ejecuta una vez
        console.log("Configuración Global inicializada.");
    }

    // 3. Método estático público de acceso: El único punto para obtener la instancia
    public static getInstance(): ConfiguracionGlobal {
        // Si la instancia no existe, la crea
        if (!ConfiguracionGlobal.instance) {
            ConfiguracionGlobal.instance = new ConfiguracionGlobal();
        }
        // Devuelve la instancia existente
        return ConfiguracionGlobal.instance;
    }

    // Método de ejemplo para manipular la configuración
    public mostrarEstado(): void {
        console.log(`Estado actual: Tema=${this.tema}, Idioma=${this.idioma}`);
    }
}

// --- Uso del Singleton ---

// No podemos hacer esto: new ConfiguracionGlobal(); // Error de TS: El constructor es privado

// 1. Obtenemos la única instancia
const config1 = ConfiguracionGlobal.getInstance();
console.log("config1 obtenida.");

// 2. Modificamos el estado a través de esta instancia
config1.tema = "oscuro";
config1.idioma = "en";
config1.mostrarEstado();

console.log("---");

// 3. Intentamos obtener otra instancia (obtenemos la misma)
const config2 = ConfiguracionGlobal.getInstance();
console.log("config2 obtenida.");

// 4. Observa que config2 tiene los cambios hechos por config1
config2.mostrarEstado();

// Comprobación de que ambas referencias apuntan al mismo objeto
console.log("¿Son la misma instancia?", config1 === config2);
```

#### Características

##### 1. private static instance: ConfiguracionGlobal;	Instancia Única	Al ser static, pertenece a la clase y no a una instancia específica. Al ser private, solo es accesible desde dentro de la clase.

##### 2. private constructor()	Control de Creación	El modificador private prohíbe el uso directo de new ConfiguracionGlobal(), forzando a usar el método de acceso getInstance().

##### 3. public static getInstance()	Punto de Acceso Global	Este es el único camino para obtener el objeto. Contiene la lógica para crear la instancia una sola vez (if (!instance)) y luego devolver siempre esa misma instancia



## Factory Method: Define una interfaz para crear un objeto, pero deja que las subclases decidan qué clase instanciar.

##### Proporciona una interfaz para crear objetos en una superclase, pero permite a las subclases decidir qué clase instanciar.

Ejemplo: Un sistema de notificaciones que crea objetos de Email, SMS o Push Notification según la configuración del usuario.

##### Se utiliza para desacoplar el código que usa el objeto de la lógica que lo crea.


### Código

##### Sistema de gestión de pedidos donde necesitamos crear diferentes tipos de Transporte (ej. Camión o Barco) para entregar un producto.

1. Interfaz Común del Producto

Definimos una interfaz para el "Producto" que todas las clases concretas deben implementar.

```
// Producto: Define la interfaz de los objetos que el Factory Method crea.
interface Transporte {
    entregar(): string;
}
``` 


2. Productos Concretos

Creamos las clases concretas que implementan la interfaz Transporte.

```
// Producto Concreto A
class Camion implements Transporte {
    public entregar(): string {
        return "🚚 Entrega por carretera en caja.";
    }
}

// Producto Concreto B
class Barco implements Transporte {
    public entregar(): string {
        return "🚢 Entrega por mar en contenedor.";
    }
}
```


3. Creador Abstracto (Factory)

Esta es la clase principal que declara el Método de Fábrica (crearTransporte), el cual devuelve un objeto Transporte

##### La lógica de negocio utiliza el resultado de este método, sin importarle qué transporte concreto se haya creado.

```
// Creador: Declara el método de fábrica que DEBE ser implementado por las subclases.
abstract class Logistica {
    // El Factory Method que las subclases implementarán.
    protected abstract crearTransporte(): Transporte;

    // Lógica de negocio principal (que es independiente del producto concreto).
    public planificarEntrega(): string {
        // Llama al método de fábrica para obtener un objeto Producto.
        const transporte = this.crearTransporte();
        
        // Utiliza el producto.
        return `Logística: Preparando la entrega. El transporte dice: ${transporte.entregar()}`;
    }
}
```


4. Creadores Concretos

Estas subclases extienden el Logistica y sobrescriben el método de fábrica para devolver un tipo específico de Transporte.

```
// Creador Concreto A: Crea Camiones
class LogisticaCarretera extends Logistica {
    protected crearTransporte(): Transporte {
        return new Camion();
    }
}

// Creador Concreto B: Crea Barcos
class LogisticaMaritima extends Logistica {
    protected crearTransporte(): Transporte {
        return new Barco();
    }
}
```


5. Uso del Cliente

El código cliente trabaja únicamente con la interfaz del Logistica (el Creador) y la interfaz Transporte (el Producto), sin saber si está usando un Camion o un Barco.

```
function clientCode(logistica: Logistica) {
    console.log(logistica.planificarEntrega());
}

console.log('--- Uso de Logística Terrestre ---');
let carretera = new LogisticaCarretera();
clientCode(carretera);
// Salida: Logística: Preparando la entrega. El transporte dice: Entrega por carretera en caja.

console.log('\n--- Uso de Logística Marítima ---');
let maritima = new LogisticaMaritima();
clientCode(maritima);
// Salida: Logística: Preparando la entrega. El transporte dice: Entrega por mar en contenedor.
```


#### Beneficios

##### Desacoplamiento: El cliente (clientCode) solo necesita saber que obtendrá algo que implementa Transporte, pero no cómo se crea.

##### Extensibilidad: Si necesitas añadir un Avion o una Bicicleta, solo tienes que crear la clase Avion (Producto Concreto) y una nueva LogisticaAerea (Creador Concreto). No tienes que modificar el código existente en Logistica o el clientCode.



## Abstract Factory: Proporciona una interfaz para crear familias de objetos relacionados sin especificar sus clases concretas.

##### Permite producir familias de objetos relacionados o dependientes sin especificar sus clases concretas

##### Útil cuando los componentes deben funcionar juntos y ser fácilmente intercambiables (por ejemplo, cambiar el "tema" de una aplicación).

Ejemplo: Una fábrica que produce elementos de interfaz de usuario (Botón, Ventana, Campo de Texto) que coinciden con un tema específico (Claro u Oscuro).


#### Es como tener una fábrica maestra que produce sub-fábricas para diferentes estilos o sistemas.

### Ej: Aplicación que debe soportar dos temas (Claro y Oscuro) para sus elementos de interfaz de usuario (Botones y Campos de Texto).

1. Interfaces de Productos

Definimos las interfaces para los dos tipos de productos que nuestra fábrica creará: Boton y CampoTexto.

```
// Producto A (Botón)
interface Boton {
    pintar(): string;
}

// Producto B (Campo de Texto)
interface CampoTexto {
    escribir(): string;
    // Un método que usa un Producto A (relacionado)
    interactuar(b: Boton): string; 
}
```


2. Interfaces de Fábrica Abstracta

Definimos la interfaz para la Fábrica Abstracta que declara los métodos para crear todos los productos de la familia (el tema).

```
// Abstract Factory
interface TemaFactory {
    crearBoton(): Boton;
    crearCampoTexto(): CampoTexto;
}
```


3. Productos Concretos (Familia "Claro")

Implementamos los productos específicos para el tema "Claro".

```
// Productos Concretos del Tema Claro
class BotonClaro implements Boton {
    public pintar(): string {
        return "🖌️ Renderizando Botón Blanco.";
    }
}

class CampoTextoClaro implements CampoTexto {
    public escribir(): string {
        return "📝 Campo de Texto con fondo claro.";
    }
    public interactuar(b: Boton): string {
        return `Campo Claro interactúa con ${b.pintar()}`;
    }
}
```


4. Productos Concretos (Familia "Oscuro")

Implementamos los productos específicos para el tema "Oscuro".

```
// Productos Concretos del Tema Oscuro
class BotonOscuro implements Boton {
    public pintar(): string {
        return "🖌️ Renderizando Botón Negro.";
    }
}

class CampoTextoOscuro implements CampoTexto {
    public escribir(): string {
        return "📝 Campo de Texto con fondo oscuro.";
    }
    public interactuar(b: Boton): string {
        // Observa la interacción entre productos de la misma familia
        return `Campo Oscuro interactúa con ${b.pintar()}`; 
    }
}
```


5. Fábricas Concretas

Implementamos las Fábricas Concretas para cada familia de productos, asegurando que solo creen productos del mismo tema.

```
// Fábrica Concreta A: Tema Claro
class TemaClaroFactory implements TemaFactory {
    public crearBoton(): Boton {
        return new BotonClaro();
    }
    public crearCampoTexto(): CampoTexto {
        return new CampoTextoClaro();
    }
}

// Fábrica Concreta B: Tema Oscuro
class TemaOscuroFactory implements TemaFactory {
    public crearBoton(): Boton {
        return new BotonOscuro();
    }
    public crearCampoTexto(): CampoTexto {
        return new CampoTextoOscuro();
    }
}
```


6. Código Cliente

El código cliente trabaja únicamente con las interfaces TemaFactory, Boton y CampoTexto, sin depender de las clases concretas.

```
function clientCode(factory: TemaFactory) {
    // La fábrica crea una familia de productos
    const boton = factory.crearBoton();
    const campo = factory.crearCampoTexto();
    
    console.log("--- Componentes Creados ---");
    console.log(boton.pintar());
    console.log(campo.escribir());
    
    console.log("\n--- Interacción ---");
    // Se asegura la compatibilidad al usar productos de la misma fábrica
    console.log(campo.interactuar(boton)); 
}

console.log('Cliente: Probando la configuración con Tema CLARO...');
clientCode(new TemaClaroFactory());
/* Salida:
Cliente: Probando la configuración con Tema CLARO...
--- Componentes Creados ---
🖌️ Renderizando Botón Blanco.
📝 Campo de Texto con fondo claro.

--- Interacción ---
Campo Claro interactúa con 🖌️ Renderizando Botón Blanco.
*/

console.log('\n======================================\n');

console.log('Cliente: Probando la configuración con Tema OSCURO...');
clientCode(new TemaOscuroFactory());
/* Salida:
Cliente: Probando la configuración con Tema OSCURO...
--- Componentes Creados ---
🖌️ Renderizando Botón Negro.
📝 Campo de Texto con fondo oscuro.

--- Interacción ---
Campo Oscuro interactúa con 🖌️ Renderizando Botón Negro.
*/
```

### Beneficio

#### Cambiar toda la apariencia de la aplicación (de Claro a Oscuro) simplemente cambiando la fábrica concreta que pasas a la función clientCode sin tener, que modificar la lógica de la interfaz de usuario en sí

Las familias de productos (los temas) se mantienen consistentes y son fácilmente intercambiables.



## Builder: Separa la construcción de un objeto complejo de su representación, permitiendo que el mismo proceso de construcción cree diferentes representaciones.

##### Permite construir objetos complejos paso a paso.

##### Separa el proceso de construcción de la representación final

##### De modo que el mismo proceso de construcción puede crear diferentes tipos y representaciones del objeto.

Ej: Construir documentos con diferentes formatos de salida (PDF, HTML, Texto Plano) usando la misma secuencia de pasos de construcción.


### Código

##### Ej: construir un objeto complejo, como una Pizza, con varios ingredientes opcionales.

#### La clase PizzaBuilder se encarga de añadir los ingredientes

#### la clase Director se encarga de ejecutar una receta estándar, desacoplando la lógica de construcción de la representación final (Pizza).


1. Producto

La clase Pizza es el objeto complejo que estamos construyendo.

```
// El Producto complejo que se está construyendo
class Pizza {
    private partes: string[] = [];

    public agregarParte(parte: string): void {
        this.partes.push(parte);
    }

    public mostrar(): string {
        return `Pizza construida: ${this.partes.join(', ')}.`;
    }
}
```


2. Builder Abstracto

Define la interfaz con todos los métodos de construcción que los builders concretos deben implementar

```
// La interfaz Builder
interface PizzaBuilder {
    reset(): void;
    agregarMasa(): void;
    agregarSalsa(): void;
    agregarTopping(topping: string): void;
    obtenerPizza(): Pizza;
}
```


3. Builder Concreto

La clase Builder concreto implementa la interfaz y mantiene una referencia al objeto Pizza que está construyendo.

```
// Builder Concreto
class PizzaBuilderConcreta implements PizzaBuilder {
    private pizza: Pizza;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.pizza = new Pizza();
    }

    // Métodos de construcción paso a paso
    public agregarMasa(): void {
        this.pizza.agregarParte("Masa Fina");
    }

    public agregarSalsa(): void {
        this.pizza.agregarParte("Salsa de Tomate");
    }

    public agregarTopping(topping: string): void {
        this.pizza.agregarParte(topping);
    }

    // Método para devolver el producto final
    public obtenerPizza(): Pizza {
        const resultado = this.pizza;
        this.reset(); // Reinicia el builder para futuras construcciones
        return resultado;
    }
}
```


4. Director

El Director es opcional, pero es útil para definir recetas u órdenes de construcción comunes, aislando aún más al cliente de los pasos de construcción

```
// El Director: Opcional, pero útil para recetas comunes.
class Director {
    private builder: PizzaBuilder | null = null;

    public setBuilder(builder: PizzaBuilder): void {
        this.builder = builder;
    }

    // Receta estándar: Construye una Pizza Margherita
    public construirMargherita(): void {
        if (!this.builder) return;
        this.builder.reset();
        this.builder.agregarMasa();
        this.builder.agregarSalsa();
        this.builder.agregarTopping("Mozzarella");
    }

    // Receta compleja: Construye una Pizza Hawaiana (sí, con piña)
    public construirHawaiana(): void {
        if (!this.builder) return;
        this.builder.reset();
        this.builder.agregarMasa();
        this.builder.agregarSalsa();
        this.builder.agregarTopping("Jamón");
        this.builder.agregarTopping("Piña"); // ¡Piña!
    }
}
```


 


5. Uso por el Cliente

El cliente puede usar el Director para recetas predefinidas o usar el Builder directamente para personalizar la construcción.

```
const builder = new PizzaBuilderConcreta();
const director = new Director();
director.setBuilder(builder);

console.log('--- 1. Usando el Director para una receta estándar (Margherita) ---');
director.construirMargherita();
const pizza1 = builder.obtenerPizza();
console.log(pizza1.mostrar());
// Salida: Pizza construida: Masa Fina, Salsa de Tomate, Mozzarella.

console.log('\n--- 2. Usando el Director para una receta compleja (Hawaiana) ---');
director.construirHawaiana();
const pizza2 = builder.obtenerPizza();
console.log(pizza2.mostrar());
// Salida: Pizza construida: Masa Fina, Salsa de Tomate, Jamón, Piña.

console.log('\n--- 3. Construcción personalizada por el Cliente ---');
builder.agregarMasa();
builder.agregarSalsa();
builder.agregarTopping("Pepperoni");
builder.agregarTopping("Champiñones");
const pizza3 = builder.obtenerPizza();
console.log(pizza3.mostrar());
// Salida: Pizza construida: Masa Fina, Salsa de Tomate, Pepperoni, Champiñones.
```


#### Beneficios

Construcción Controlada: Permite construir objetos en pasos controlados, verificando la validez de cada paso si es necesario.

Diferentes Representaciones: El mismo proceso de construcción (los métodos agregar...) puede crear diferentes productos (Pizza, Calzone, etc.) si se implementan builders concretos distintos.

Código Limpio: Evita tener constructores con una gran cantidad de parámetros opcionales, haciendo que el código de creación sea más legible y mantenible.



## Prototype: Especifica los tipos de objetos a crear mediante la clonación de una instancia prototipo.

##### Permite copiar objetos existentes sin que el código dependa de sus clases concretas

##### El objeto a copiar actúa como un "prototipo" y el clonado se realiza a través de una interfaz de clonación.



# Patrones Estructurales (Structural Patterns)

##### Se enfocan en la composición de clases y objetos para formar estructuras más grandes y flexibles: 

##### Su objetivo principal es simplificar la estructura del sistema, asegurando que si una parte de este cambia, la estructura global no se vea comprometida

##### Ayudan a organizar clases y objetos de manera que puedan trabajar juntos eficazmente, mejorando la flexibilidad y la reutilización.


## Adapter (o Wrapper): Permite que clases con interfaces incompatibles trabajen juntas, envolviendo una interfaz existente.

##### Permite que las interfaces de clases incompatibles trabajen juntas. Funciona como un traductor.

##### Ej: adaptador de corriente que permite enchufar un dispositivo con un enchufe de un país a un toma de corriente de otro país

##### El adaptador "envuelve" el objeto incompatible para que coincida con la interfaz que el cliente espera.


#### Permite que la interfaz de una clase existente (el Adaptee) sea utilizada por otra clase (el Client) que espera una interfaz diferente (el Target).

### Código

Adaptamos un sistema de procesamiento de pagos antiguo (PasarelaPagoAntigua) para que funcione con el código de nuestra aplicación moderna que espera una interfaz estándar (ProcesadorPago).

1. Target (La Interfaz Esperada)

Esta es la interfaz que nuestro código cliente espera usar.

```
// Target: La interfaz que el cliente espera.
interface ProcesadorPago {
    procesar(monto: number): string;
}
``` 


2. Adaptee (La Clase Incompatible)

Esta es la clase antigua o externa que queremos usar, pero cuya interfaz es diferente.

```
// Adaptee: La clase incompatible que necesitamos adaptar.
class PasarelaPagoAntigua {
    public ejecutarTransaccion(cantidad: number, moneda: string): string {
        if (moneda !== "USD") {
            return `ERROR: Solo se admite USD. Recibido: ${moneda}`;
        }
        return `✅ Transacción antigua de $${cantidad} USD ejecutada.`;
    }
}
``` 


3. Adapter (El Adaptador)

El Adaptador toma la interfaz Target (ProcesadorPago) y la implementa, mientras que internamente utiliza la funcionalidad de la clase Adaptee (PasarelaPagoAntigua), traduciendo las llamadas.

```
// Adapter: Implementa la interfaz Target y "envuelve" al Adaptee.
class PagoAntiguoAdapter implements ProcesadorPago {
    private pasarelaAntigua: PasarelaPagoAntigua;

    constructor(pasarela: PasarelaPagoAntigua) {
        this.pasarelaAntigua = pasarela;
    }

    // El método 'procesar' de la interfaz Target
    public procesar(monto: number): string {
        console.log("Adaptador: Adaptando la llamada para PasarelaPagoAntigua...");
        
        // Aquí se traduce la llamada:
        // 1. El cliente solo pasa 'monto'.
        // 2. El adaptador añade el parámetro 'moneda' (USD) que la PasarelaAntigua espera.
        return this.pasarelaAntigua.ejecutarTransaccion(monto, "USD");
    }
}
```


4. Código Cliente

El código cliente trabaja únicamente con la interfaz ProcesadorPago, sin preocuparse de si está usando una pasarela moderna o la antigua adaptada

```
// El código cliente solo sabe trabajar con la interfaz ProcesadorPago.
function clienteEjecutarPago(procesador: ProcesadorPago, cantidad: number) {
    console.log(`\nCliente: Iniciando pago de ${cantidad}...\n`);
    const resultado = procesador.procesar(cantidad);
    console.log(`Cliente: Resultado del pago: ${resultado}`);
}

// 1. Instanciamos la clase incompatible (Adaptee)
const pasarelaAntigua = new PasarelaPagoAntigua();

// 2. Creamos el Adaptador, pasándole el Adaptee.
const adaptador = new PagoAntiguoAdapter(pasarelaAntigua);

// 3. El cliente usa el Adaptador como si fuera un ProcesadorPago normal (Target).
clienteEjecutarPago(adaptador, 50);

/*
Salida:
Cliente: Iniciando pago de 50...

Adaptador: Adaptando la llamada para PasarelaPagoAntigua...
✅ Transacción antigua de $50 USD ejecutada.
Cliente: Resultado del pago: ✅ Transacción antigua de $50 USD ejecutada.
*/
```

El patrón Adapter logra su objetivo: el cliente pudo usar la funcionalidad de PasarelaPagoAntigua sin que la firma de su método (ejecutarTransaccion) fuera modificada.



## Decorator: Añade responsabilidades dinámicamente a un objeto (decorándolo) sin modificar su clase.

##### Esto se logra envolviendo el objeto original con wrappers que añaden el nuevo comportamiento.

Capas de ingredientes que añades a un café. El café base (objeto original) se envuelve con leche, luego con azúcar, luego con sirope, y cada capa añade una nueva función o sabor sin modificar la esencia del café.


### Código

Aplicación de bebidas donde queremos añadir ingredientes (como leche, azúcar o caramelo) que modifican el costo y la descripción de una bebida base.

1. Componente Base

Definimos la interfaz para el componente principal (Bebida) y la clase concreta base (CafeSimple).

```
// Componente: Interfaz para el objeto que queremos decorar.
interface Bebida {
    costo(): number;
    obtenerDescripcion(): string;
}

// Componente Concreto (La Bebida Base)
class CafeSimple implements Bebida {
    public costo(): number {
        return 5;
    }

    public obtenerDescripcion(): string {
        return "Café Simple";
    }
}
```


2. Decorador Abstracto

##### !!! Creamos la clase base para todos los decoradores. 

Esta clase implementa la interfaz Bebida y tiene una referencia a un objeto Bebida.

```
// Decorador Base: Implementa la interfaz Bebida y contiene una referencia al componente.
abstract class IngredienteDecorator implements Bebida {
    protected bebida: Bebida;

    constructor(bebida: Bebida) {
        this.bebida = bebida;
    }
    
    // Estos métodos deben ser implementados por los decoradores concretos
    public abstract costo(): number;
    public abstract obtenerDescripcion(): string;
}
```


3. Decoradores Concretos

##### !!! Creamos las clases que añaden funcionalidad (costo extra y descripción). Cada una extiende el IngredienteDecorator

```
// Decorador Concreto A: Añade Leche
class LecheDecorator extends IngredienteDecorator {
    public costo(): number {
        // Añade el costo de la leche al costo base
        return this.bebida.costo() + 2; 
    }

    public obtenerDescripcion(): string {
        // Añade la descripción de la leche a la descripción base
        return `${this.bebida.obtenerDescripcion()}, Leche`;
    }
}

// Decorador Concreto B: Añade Caramelo
class CarameloDecorator extends IngredienteDecorator {
    public costo(): number {
        // Añade el costo del caramelo al costo base
        return this.bebida.costo() + 3;
    }

    public obtenerDescripcion(): string {
        // Añade la descripción del caramelo a la descripción base
        return `${this.bebida.obtenerDescripcion()}, Caramelo`;
    }
}
```


4. Uso del Cliente

El cliente crea una bebida base y la envuelve dinámicamente con los decoradores que desee.

```
// 1. Iniciamos con el objeto base
let miCafe: Bebida = new CafeSimple();
console.log(`Bebida base: ${miCafe.obtenerDescripcion()} | Costo: $${miCafe.costo()}`);
// Salida: Bebida base: Café Simple | Costo: $5

console.log("\n--- Añadiendo Ingredientes ---");

// 2. Decoramos con Leche
miCafe = new LecheDecorator(miCafe); 
console.log(`Con leche: ${miCafe.obtenerDescripcion()} | Costo: $${miCafe.costo()}`);
// Salida: Con leche: Café Simple, Leche | Costo: $7

// 3. Decoramos con Caramelo (aplicado sobre el objeto con Leche)
miCafe = new CarameloDecorator(miCafe);
console.log(`Con caramelo: ${miCafe.obtenerDescripcion()} | Costo: $${miCafe.costo()}`);
// Salida: Con caramelo: Café Simple, Leche, Caramelo | Costo: $10
```



## Facade: Proporciona una interfaz unificada y simplificada a un subsistema complejo.

##### Ej: El panel de control de un coche. En lugar de interactuar con el motor, la transmisión, el sistema eléctrico y el combustible por separado

##### Tienes una fachada (el volante, los pedales, el encendido) que simplifica el uso del complejo sistema mecánico.


### Código

Simplificamos un subsistema complejo de gestión de audio (inicialización, carga de buffers, reproducción) a través de una sola clase AudioFacade.

1. El Subsistema Complejo

Estas son las clases complejas y fuertemente acopladas que el cliente no debería manejar directamente.

```
// Clase 1: Gestiona la inicialización de hardware
class AudioMixer {
    public inicializarSistema(): string {
        return "Mixer: Inicializando hardware de audio.";
    }

    public ajustarGanancia(): string {
        return "Mixer: Ajustando niveles de ganancia a 0dB.";
    }

    public detenerTodo(): string {
        return "Mixer: Silenciando todos los canales.";
    }
}

// Clase 2: Gestiona la memoria y los datos de sonido
class BufferLoader {
    public cargarBuffer(ruta: string): string {
        return `BufferLoader: Cargando archivo desde '${ruta}'.`;
    }

    public liberarMemoria(): string {
        return "BufferLoader: Liberando buffers de memoria.";
    }
}

// Clase 3: Gestiona la lógica de reproducción
class SoundPlayer {
    public reproducir(bufferInfo: string): string {
        return `SoundPlayer: Iniciando reproducción con ${bufferInfo}.`;
    }

    public pausar(): string {
        return "SoundPlayer: Reproducción en pausa.";
    }
}
```


2. La Fachada (Facade)

La clase AudioFacade encapsula toda la complejidad del subsistema, proporcionando un par de métodos simples y de alto nivel.

```
// Facade: Proporciona una interfaz simple y unificada.
class AudioFacade {
    private mixer: AudioMixer;
    private bufferLoader: BufferLoader;
    private soundPlayer: SoundPlayer;

    constructor() {
        // La fachada inicializa y mantiene referencias a los componentes del subsistema
        this.mixer = new AudioMixer();
        this.bufferLoader = new BufferLoader();
        this.soundPlayer = new SoundPlayer();
    }

    /**
     * Método simple para el cliente: Inicializa el sistema y carga el audio.
     */
    public inicializarAudio(ruta: string): string {
        let resultado = "";
        resultado += this.mixer.inicializarSistema() + "\n";
        resultado += this.mixer.ajustarGanancia() + "\n";
        resultado += this.bufferLoader.cargarBuffer(ruta) + "\n";
        
        return resultado;
    }

    /**
     * Método simple para el cliente: Reproduce el audio.
     */
    public reproducirAudio(): string {
        // Asumimos que el buffer ya fue cargado
        return this.soundPlayer.reproducir("datos del buffer cargado");
    }

    /**
     * Método simple para el cliente: Apaga el sistema.
     */
    public apagarSistema(): string {
        let resultado = "";
        resultado += this.soundPlayer.pausar() + "\n";
        resultado += this.mixer.detenerTodo() + "\n";
        resultado += this.bufferLoader.liberarMemoria() + "\n";
        
        return resultado;
    }
}
```


3. Cliente

El cliente interactúa únicamente con la AudioFacade, sin preocuparse por los detalles de AudioMixer, BufferLoader o SoundPlayer.

```
const audioSystem = new AudioFacade();

console.log('--- Cliente: Quiero inicializar el audio ---');
const inicializacion = audioSystem.inicializarAudio("assets/musica_fondo.mp3");
console.log(inicializacion);
/*
Mixer: Inicializando hardware de audio.
Mixer: Ajustando niveles de ganancia a 0dB.
BufferLoader: Cargando archivo desde 'assets/musica_fondo.mp3'.
*/

console.log('--- Cliente: Quiero reproducir ---');
const reproduccion = audioSystem.reproducirAudio();
console.log(reproduccion);
// Salida: SoundPlayer: Iniciando reproducción con datos del buffer cargado.

console.log('--- Cliente: Quiero apagar todo ---');
const apagado = audioSystem.apagarSistema();
console.log(apagado);
/*
SoundPlayer: Reproducción en pausa.
Mixer: Silenciando todos los canales.
BufferLoader: Liberando buffers de memoria.
*/
```


#### Beneficios 

AudioFacade simplifica la vida del cliente

En lugar de que el cliente tenga que saber qué orden llamar a qué clases (mixer.inicializarSistema(), bufferLoader.cargarBuffer(), etc.), solo necesita llamar a un método simple como audioSystem.inicializarAudio().

Esto desacopla el cliente del subsistema y reduce la complejidad percibida.





## Composite: Compone objetos en estructuras de árbol para representar jerarquías de parte-todo. Permite que los clientes traten objetos individuales y compuestos de manera uniforme.

##### Ej: El sistema de archivos de una computadora. Puedes interactuar con un solo Archivo (objeto individual o "hoja") o una Carpeta (composición de objetos) usando los mismos comandos (abrir, mover, eliminar).




## Bridge: Desacopla una abstracción de su implementación, permitiendo que ambas varíen independientemente.

##### Separa una abstracción de su implementación, permitiendo que ambas puedan variar o evolucionar de forma independiente.

##### Ej: Imagina que tienes formas (abstracción: Círculo, Cuadrado) y colores (implementación: Rojo, Azul).

Te permite tener Círculo Rojo o Cuadrado Azul sin crear una clase para cada combinación.

Las formas y los colores son dos jerarquías separadas que se "conectan" con un puente.



## Flyweight: Utiliza la compartición para admitir un gran número de objetos de grano fino de forma eficiente.

##### Minimiza el uso de memoria compartiendo tanta información como sea posible entre objetos similares

Ej: Las letras que aparecen en un documento de texto. En lugar de almacenar todos los datos de formato (fuente, color) para cada ocurrencia de la letra 'A' en un documento de 100 páginas, el patrón almacena una sola instancia de 'A' (el Flyweight) y reutiliza esa instancia en todas partes.



## Proxy: Proporciona un sustituto o marcador de posición para otro objeto para controlar el acceso a él.

##### Apoderado: En lugar de interactuar directamente con una persona (el objeto real), interactúas con su apoderado (el Proxy)

##### Quien controlará, registrará o limitará las operaciones que puedes realizar con la persona real.


## 4. Patrones de Comportamiento (Behavioral Patterns)

##### Se ocupan de la comunicación y la asignación de responsabilidades entre objetos.

##### Se enfocan en cómo los objetos interactúan y distribuyen sus responsabilidades.


Se ocupan de los algoritmos y la asignación de responsabilidades entre los objetos, facilitando la comunicación y el flujo de control entre ellos

El objetivo principal es lograr un sistema con acoplamiento débil (bajo coupling) y alta cohesión (alta cohesion), lo que hace que el software sea más flexible y fácil de mantener.



## Strategy: Define una familia de algoritmos, los encapsula y los hace intercambiables, permitiendo seleccionar el algoritmo en tiempo de ejecución.

Ej: Diferentes rutas de navegación en un GPS.

Puedes elegir la Estrategia "Ruta más Rápida", "Ruta más Corta" o "Ruta sin Peajes".

El GPS (el Contexto) usa el mismo código, pero le delega el cálculo real a la Estrategia seleccionada.


### Código

##### Usamos diferentes estrategias para calcular el costo de envío de un paquete, dependiendo del método de transporte seleccionado.

1. Interfaz de la Estrategia

Definimos la interfaz que todas las estrategias de envío deben implementar.

```
// Strategy: Interfaz para el algoritmo intercambiable.
interface EstrategiaEnvio {
    calcularCosto(pesoKg: number, distanciaKm: number): number;
}
```


2. Estrategias Concretas

Implementamos los diferentes algoritmos de cálculo.

```
// Estrategia Concreta A: Envío Terrestre (costo fijo + costo por distancia)
class EnvioTerrestreStrategy implements EstrategiaEnvio {
    public calcularCosto(pesoKg: number, distanciaKm: number): number {
        // Costo base por transporte terrestre
        const costoBase = 10; 
        // Cargo por distancia recorrida
        const cargoDistancia = 0.5 * distanciaKm; 
        
        return costoBase + cargoDistancia;
    }
}

// Estrategia Concreta B: Envío Aéreo (costo por peso elevado)
class EnvioAereoStrategy implements EstrategiaEnvio {
    public calcularCosto(pesoKg: number, distanciaKm: number): number {
        // Alto costo base por rapidez
        const costoBase = 50; 
        // Alto cargo por peso
        const cargoPeso = 5 * pesoKg; 
        
        // La distancia no es tan relevante en el aéreo para este ejemplo
        return costoBase + cargoPeso;
    }
}
``` 


3. Contexto

La clase Contexto (en este caso, CalculadoraEnvio) mantiene una referencia a la estrategia y delega la ejecución del algoritmo a ella.

```
// Contexto: Mantiene la referencia a la Estrategia y delega la ejecución.
class CalculadoraEnvio {
    private estrategia: EstrategiaEnvio;

    constructor(estrategiaInicial: EstrategiaEnvio) {
        this.estrategia = estrategiaInicial;
    }

    // Permite al cliente cambiar la estrategia en tiempo de ejecución
    public setEstrategia(nuevaEstrategia: EstrategiaEnvio): void {
        this.estrategia = nuevaEstrategia;
    }

    // Ejecuta el algoritmo delegado. El contexto no conoce los detalles del cálculo.
    public calcularCostoFinal(pesoKg: number, distanciaKm: number): number {
        return this.estrategia.calcularCosto(pesoKg, distanciaKm);
    }
}
```


4. Cliente

El cliente crea el Contexto y luego le inyecta la estrategia que desea usar, pudiendo cambiarla en cualquier momento.

```
const pesoPaquete = 15; // kg
const distanciaEnvio = 200; // km

// 1. Iniciamos con la estrategia terrestre
let calculadora = new CalculadoraEnvio(new EnvioTerrestreStrategy());

console.log('--- Estrategia: Envío Terrestre ---');
let costoTerrestre = calculadora.calcularCostoFinal(pesoPaquete, distanciaEnvio);
console.log(`Costo ($${costoTerrestre}): 10 (Base) + 0.5 * 200 (Distancia)`); 
// Salida: Costo ($110): 10 (Base) + 0.5 * 200 (Distancia)

// 2. Cambiamos la estrategia en tiempo de ejecución
calculadora.setEstrategia(new EnvioAereoStrategy());

console.log('\n--- Estrategia: Envío Aéreo (Mismo paquete) ---');
let costoAereo = calculadora.calcularCostoFinal(pesoPaquete, distanciaEnvio);
console.log(`Costo ($${costoAereo}): 50 (Base) + 5 * 15 (Peso)`);
// Salida: Costo ($125): 50 (Base) + 5 * 15 (Peso)
```


#### Beneficios

##### Intercambiabilidad: El cliente (CalculadoraEnvio) puede cambiar fácilmente de algoritmo (de terrestre a aéreo) en tiempo de ejecución sin modificar su propia estructura.

##### Aislamiento de Lógica: La lógica de negocio del envío está aislada en clases separadas (EnvioTerrestreStrategy, EnvioAereoStrategy).

##### Extensibilidad: Si necesitas añadir una nueva estrategia (EnvioMaritimoStrategy), solo tienes que crear una nueva clase que implemente la interfaz EstrategiaEnvio. El Contexto y el código cliente existente no necesitan ser modificados.


## Observer: Define una dependencia uno-a-muchos entre objetos, de modo que cuando un objeto cambia de estado, todos sus dependientes son notificados y actualizados automáticamente.

Ej: Un servicio de suscripción a un newsletter o un canal de YouTube.

El canal (Sujeto) notifica automáticamente a todos sus suscriptores (Observadores) cada vez que publica un nuevo video (cambio de estado).


### Código

Usando un sistema de Notificaciones de Precios donde varios usuarios observan el precio de una acción.

1. Interfaz del Sujeto (Observable) y Observador

Definimos las interfaces que establecen el contrato para la comunicación

```
// Sujeto: Interfaz que implementará la clase que emite los eventos.
interface Sujeto {
    // Métodos para gestionar suscriptores
    adjuntar(observador: Observador): void;
    desadjuntar(observador: Observador): void;
    notificar(): void;
}

// Observador: Interfaz que implementarán las clases que reciben las actualizaciones.
interface Observador {
    // El Sujeto pasa la referencia a sí mismo para que el Observador pueda obtener el estado.
    actualizar(sujeto: Sujeto): void;
}
```


2. Sujeto Concreto (El Publicador)

La clase PrecioAccion es el sujeto. Mantiene una lista de observadores y notifica a todos cuando su precio cambia.

```
class PrecioAccion implements Sujeto {
    private observadores: Observador[] = [];
    private precio: number;
    private nombre: string;

    constructor(nombre: string, precioInicial: number) {
        this.nombre = nombre;
        this.precio = precioInicial;
        console.log(`SUJETO: ${this.nombre} inicializado a $${this.precio}.`);
    }

    public adjuntar(observador: Observador): void {
        const estaYa = this.observadores.includes(observador);
        if (estaYa) {
            console.log("Sujeto: Observador ya adjunto.");
            return;
        }
        this.observadores.push(observador);
        console.log("Sujeto: Observador adjunto.");
    }

    public desadjuntar(observador: Observador): void {
        const indice = this.observadores.indexOf(observador);
        if (indice === -1) return;

        this.observadores.splice(indice, 1);
        console.log("Sujeto: Observador desadjunto.");
    }

    public notificar(): void {
        console.log(`\nSUJETO: Notificando a observadores sobre el nuevo precio ($${this.precio})...`);
        for (const observador of this.observadores) {
            observador.actualizar(this);
        }
    }

    // El método clave que cambia el estado y notifica
    public cambiarPrecio(nuevoPrecio: number): void {
        this.precio = nuevoPrecio;
        this.notificar();
    }
    
    // Método para que los observadores puedan obtener el estado
    public obtenerPrecio(): number {
        return this.precio;
    }
    
    public obtenerNombre(): string {
        return this.nombre;
    }
}
```


3. 3. Observadores Concretos (Los Suscriptores)

Las clases Usuario son los observadores. Implementan el método actualizar para reaccionar al cambio de estado.

```
class Usuario implements Observador {
    private nombreUsuario: string;

    constructor(nombre: string) {
        this.nombreUsuario = nombre;
    }

    public actualizar(sujeto: Sujeto): void {
        // Verificamos que el sujeto sea del tipo esperado para obtener datos
        if (sujeto instanceof PrecioAccion) {
            const precioActual = sujeto.obtenerPrecio();
            const nombreAccion = sujeto.obtenerNombre();
            
            console.log(`  [${this.nombreUsuario}]: ¡Alerta! El precio de ${nombreAccion} es ahora $${precioActual}.`);
            
            // Lógica reactiva opcional
            if (precioActual > 105) {
                console.log(`  [${this.nombreUsuario}]: VENDIENDO ${nombreAccion}.`);
            }
        }
    }
}
```


4. 4. Uso del Cliente

El cliente crea el Sujeto, adjunta los Observadores y provoca cambios de estado.

```
// Creación del Sujeto
const teslaStock = new PrecioAccion("Tesla", 100);

// Creación de los Observadores
const juan = new Usuario("Juan");
const maria = new Usuario("María");
const pedro = new Usuario("Pedro");

// 1. Juan y María se suscriben (se adjuntan)
teslaStock.adjuntar(juan);
teslaStock.adjuntar(maria);

console.log("\n====================================");

// 2. Primer cambio de estado (Solo Juan y María son notificados)
teslaStock.cambiarPrecio(103);

console.log("\n====================================");

// 3. Pedro se suscribe, María se desuscribe
teslaStock.adjuntar(pedro);
teslaStock.desadjuntar(maria);

console.log("\n====================================");

// 4. Segundo cambio de estado (Solo Juan y Pedro son notificados, y se activa la lógica reactiva)
teslaStock.cambiarPrecio(110);
```


#### Flujo del Patrón

1. Suscripción: Los objetos Usuario (Observadores) se registran en el objeto PrecioAccion (Sujeto) llamando a adjuntar().

2. Cambio de Estado: Cuando teslaStock.cambiarPrecio() es llamado, el Sujeto ejecuta notificar().

3. Notificación: notificar() recorre su lista de Observadores y llama al método actualizar() de cada uno.

4. Reacción: El método actualizar() del Usuario ejecuta la lógica específica para reaccionar al nuevo estado, en este caso, mostrando una alerta y simulando una venta.



## State: Permite que un objeto altere su comportamiento cuando su estado interno cambia. El objeto parecerá cambiar de clase.

Un semáforo. La lógica del semáforo se divide en estados (Rojo, Amarillo, Verde).

Cuando el semáforo cambia de Rojo a Verde, el objeto que lo representa cambia su comportamiento al delegar a una nueva clase de estado.


## Chain of Responsibility: Evita acoplar el remitente de una solicitud a su receptor al dar a más de un objeto la oportunidad de manejar la solicitud.

##### Permite pasar una solicitud a lo largo de una cadena de manejadores

##### Al recibir la solicitud, cada manejador decide si la procesa o si la pasa al siguiente manejador de la cadena.

##### Ej: Un sistema de aprobación de gastos en una empresa. Una solicitud de gasto se pasa al Gerente

##### Si este no tiene la autoridad, la pasa al Director, y así sucesivamente, hasta que alguien la procesa o la cadena termina.



## Command: Encapsula una solicitud como un objeto, permitiendo parametrizar clientes con diferentes solicitudes, poner las operaciones en cola o registrar.

Convierte una solicitud en un objeto autónomo, encapsulando la acción como un objeto.

##### Esto permite parametrizar a los clientes con diferentes solicitudes, poner las operaciones en cola o registrarlas, y soportar la capacidad de deshacer (undo).

Ej: El control remoto de la televisión. Cada botón (el objeto Comando) encapsula la acción que se realizará (encender, subir volumen) sin que el botón sepa los detalles internos de cómo la televisión ejecuta esa acción.



## Iterator: Proporciona una forma de acceder secuencialmente a los elementos de un objeto agregado sin exponer su representación subyacente.

Ej: Un catálogo de biblioteca. El catálogo (el Iterador) permite recorrer los libros uno por uno (acceso secuencial) sin tener que saber si los libros están almacenados en estanterías, en el depósito o en un sistema digital (representación interna).



## Template Method: Define el esqueleto de un algoritmo en una operación, delegando algunos pasos a las subclases.

Ej: Una receta de cocina. La receta base (la Plantilla: calentar, mezclar, hornear) tiene pasos definidos, pero los pasos concretos (el ingrediente a mezclar, la temperatura de horneado) se dejan a la libre implementación de las variaciones de la receta


## Mediator: Define un objeto que encapsula cómo un conjunto de objetos interactúa. Promueve el acoplamiento débil.

Reduce el acoplamiento desordenado entre varios objetos al forzarlos a comunicarse únicamente a través de un objeto Mediador central. Los objetos ya no se comunican directamente entre sí.

Un controlador de tráfico aéreo. Los aviones (objetos) no se comunican directamente entre sí; en cambio, informan y reciben instrucciones únicamente del controlador de tráfico (el Mediador), simplificando las interacciones.



## Memento: Captura y externaliza el estado interno de un objeto sin violar el encapsulamiento, de modo que el objeto pueda restaurarse a este estado más tarde.

Permite guardar y restaurar el estado interno anterior de un objeto (Originator) sin violar su encapsulación

##### Es fundamental para implementar las funcionalidades de "deshacer".

Ej: punto de guardado en un videojuego. El juego (el Caretaker) le pide al personaje (el Originator) que cree un Memento (el punto de guardado), que almacena el estado completo del personaje en ese momento, para poder restaurarlo más tarde.



## Visitor: Representa una operación a realizar sobre los elementos de una estructura de objetos. Permite definir una nueva operación sin cambiar las clases de los elementos.

Permite añadir nuevas operaciones a un conjunto de objetos sin modificar las clases de esos objetos

Las nuevas operaciones se colocan en una clase Visitor separada.

Ej: Un inspector de mantenimiento que visita diferentes tipos de equipos (motores, tuberías, válvulas).

La clase de equipo no tiene que cambiar cuando se necesita una nueva inspección; simplemente creas un nuevo Visitor ("Inspector de Ruido" o "Inspector de Desgaste") que sabe cómo operar con cada equipo existente.




# MVC

## SoC: (Separation of Concerns

Establece que un sistema de software debe dividirse en componentes de tal manera que cada componente se preocupe por una única y distinta preocupación (interés o responsabilidad).

### 1. El Interés de los Datos y la Lógica de Negocio (Modelo)

#### Modelo (Model): Su única "preocupación" es cómo son los datos, cómo se manipulan, y cuáles son las reglas de negocio (ej. validar un usuario, calcular un precio).

Separación: No le importa cómo se mostrarán los datos (esa es la preocupación de la Vista) ni cómo el usuario solicitó la acción (esa es la preocupación del Controlador).
    

### 2. El Interés de la Presentación y la Interfaz (Vista)

Vista (View): Su única "preocupación" es la interfaz de usuario (UI), es decir, el diseño, los estilos y la visualización de la información.

Separación: No contiene lógica de negocio, ni sabe cómo se almacenan o actualizan los datos (esas son las preocupaciones del Modelo). 

Solo renderiza lo que el Controlador le indica con los datos que le proporciona el Modelo.


### 3. El Interés del Flujo y la Coordinación (Controlador)

Controlador (Controller): Su única "preocupación" es recibir las entradas del usuario (eventos o solicitudes), decidir qué lógica de negocio se necesita (Modelo) y determinar qué resultado mostrar (Vista).

Separación: No gestiona directamente los datos (eso es del Modelo) ni genera la interfaz de usuario (eso es de la Vista). Simplemente actúa como un coordinador.


#### Beneficios

Modularidad y Mantenimiento: Al estar las responsabilidades separadas, puedes modificar una parte del código sin afectar a las otras

Por ejemplo, puedes cambiar la base de datos (Modelo) sin tocar la interfaz (Vista) o viceversa.


Reutilización: Puedes reutilizar el mismo Modelo (datos y lógica de negocio) con múltiples Vistas

(ej. una interfaz web, una aplicación móvil, o un reporte en PDF), ya que el Modelo es independiente de la presentación.


Testeo: Cada componente se puede probar de forma aislada (pruebas unitarias).

##### Puedes probar la lógica del Modelo sin necesidad de un navegador o una interfaz gráfica, lo cual simplifica enormemente el proceso de aseguramiento de calidad.


Desarrollo Colaborativo: Permite que diferentes equipos o desarrolladores trabajen en paralelo

##### Por ejemplo, los diseñadores web pueden centrarse en la Vista mientras los desarrolladores de backend trabajan en el Modelo y el Controlador.


## Modelo y Datos

El Modelo tiene una única preocupación: saber qué son los datos y cómo operan.

Datos (Data):

Representa las estructuras de datos que maneja la aplicación (ej. un objeto Usuario, Producto, Pedido).

Se encarga de la persistencia: acceder y manipular la base de datos (consultar, guardar, actualizar, eliminar información).

Importante: En muchas implementaciones, el Modelo no es solo el objeto que representa la tabla de la base de datos, sino la capa completa que interactúa con ella.


Lógica de Negocio (Business Logic):

Implementa las reglas de cómo los datos pueden ser cambiados o cómo deben interactuar entre sí (ej. "Un usuario menor de 18 años no puede realizar un pedido", "Calcular el impuesto total de la compra").

El Modelo asegura que los datos sean consistentes y válidos antes de ser almacenados.


Mecanismos de Notificación:

En un MVC clásico (especialmente en aplicaciones de escritorio), el Modelo tiene la capacidad de notificar a las Vistas cuando sus datos han cambiado. Esto permite que la interfaz de usuario se actualice automáticamente sin que el Controlador tenga que intervenir constantemente


#### La Interacción del Usuario (Controlador): El Modelo no procesa clics de ratón ni solicitudes HTTP; simplemente recibe instrucciones (ej. "Dame el producto con ID 5") y devuelve los datos o un resultado.

##### El Modelo es la capa que define qué hace la aplicación en el mundo real, independientemente de cómo se le pregunte (Controlador) o cómo se muestre el resultado (Vista).



## MVC en TypeScript

```
/src
├── /models
│   └── TodoModel.ts       // Gestión de los datos de las tareas
├── /views
│   └── TodoView.ts        // Renderizado de la lista y manejo de la UI
├── /controllers
│   └── TodoController.ts  // Maneja la lógica de la aplicación
└── index.ts               // Inicialización
```


1. El Modelo (TodoModel.ts)

El Modelo se encarga de los datos (la lista de tareas) y la lógica para manipularlos. Usaremos una interfaz para tipificar los objetos de las tareas.

```
// Define la estructura de un objeto Tarea
export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

// Clase que maneja la lógica de negocio y los datos
export class TodoModel {
    private todos: Todo[] = [];
    private nextId: number = 1;

    // Lógica de Negocio: Añadir una nueva tarea
    public addTodo(text: string): Todo {
        const newTodo: Todo = {
            id: this.nextId++,
            text: text,
            completed: false
        };
        this.todos.push(newTodo);
        return newTodo;
    }

    // Lógica de Negocio: Marcar una tarea como completada
    public toggleTodo(id: number): void {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }

    // Acceso a los datos
    public getTodos(): Todo[] {
        // Devuelve una copia para evitar modificación externa directa
        return [...this.todos]; 
    }
}
```


2. La Vista (TodoView.ts)

La Vista se encarga de mostrar la interfaz y de capturar las interacciones del usuario. No tiene lógica de negocio.

```
import { Todo } from '../models/TodoModel';

// Clase que gestiona la interfaz (ej. el DOM en una aplicación web)
export class TodoView {
    // Referencias a los elementos del DOM (ej. un formulario y una lista)
    private todoListElement: HTMLElement;
    private addButton: HTMLButtonElement;
    private inputElement: HTMLInputElement;

    constructor() {
        // Asume que estos elementos existen en el HTML
        this.todoListElement = document.getElementById('todo-list')!; 
        this.addButton = document.getElementById('add-button') as HTMLButtonElement;
        this.inputElement = document.getElementById('todo-input') as HTMLInputElement;
    }

    // Renderiza la lista de tareas recibida del Controlador
    public render(todos: Todo[]): void {
        this.todoListElement.innerHTML = ''; // Limpiar la lista
        
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo.text;
            li.className = todo.completed ? 'completed' : '';
            li.dataset.id = todo.id.toString(); // Usado para identificar en el evento
            this.todoListElement.appendChild(li);
        });
    }

    // Método para capturar el texto de la nueva tarea
    public getNewTodoText(): string {
        const text = this.inputElement.value.trim();
        this.inputElement.value = ''; // Limpiar el campo
        return text;
    }

    // Bindea el evento de añadir (Controlador se suscribe a este evento)
    public bindAddTodo(handler: (text: string) => void): void {
        this.addButton.addEventListener('click', () => {
            const text = this.getNewTodoText();
            if (text) {
                handler(text); // Llama al método del Controlador
            }
        });
    }
}
```


3. El Controlador (TodoController.ts)

El Controlador actúa como intermediario. 

Recibe la entrada de la Vista, pide al Modelo que cambie el estado, y luego pide a la Vista que se actualice.

```
import { TodoModel } from '../models/TodoModel';
import { TodoView } from '../views/TodoView';

// Clase que coordina el flujo de la aplicación
export class TodoController {
    private model: TodoModel;
    private view: TodoView;

    constructor(model: TodoModel, view: TodoView) {
        this.model = model;
        this.view = view;

        // Inicializa la Vista con el estado actual del Modelo
        this.onTodoListChanged(this.model.getTodos());

        // Bindea los manejadores de eventos de la Vista a los métodos del Controlador
        this.view.bindAddTodo(this.handleAddTodo);
    }

    // Metodo que actualiza la vista, llamado cuando el modelo cambia
    private onTodoListChanged = (todos: Todo[]): void => {
        this.view.render(todos);
    }

    // Manejador de eventos para añadir una tarea (recibido de la Vista)
    private handleAddTodo = (text: string): void => {
        this.model.addTodo(text);
        
        // El Controlador pide al Modelo el estado actualizado y se lo da a la Vista
        this.onTodoListChanged(this.model.getTodos()); 
    }
    
    // (Aquí irían otros manejadores, ej: handleToggleTodo)
}
```


4. Inicialización (index.ts)

Aquí instanciamos los tres componentes y los conectamos.

```
import { TodoModel } from './models/TodoModel';
import { TodoView } from './views/TodoView';
import { TodoController } from './controllers/TodoController';

const app = new TodoController(new TodoModel(), new TodoView());
// La aplicación comienza a funcionar, el Controlador ahora coordina.
```

El Modelo (TodoModel) solo sabe sobre listas y manipulación de datos.

La Vista (TodoView) solo sabe cómo mostrar los datos en el HTML y qué eventos escuchar.

El Controlador (TodoController) maneja el flujo de la solicitud: "Añadir tarea" -> Modelo.getTodos() -> Vista.render().



### Estructura/orden de código 

```
├── src/
│   ├── application/     <-- Lógica de Aplicación (Casos de Uso, Coordinación)
│   │   ├── services/
│   │   │   └── ServicioDePedidos.ts    // Coordina Agregados, gestiona transacciones
│   │   └── handlers/
│   │       └── PedidoCreadoHandler.ts  // Reacciones a eventos de Dominio
│   │
│   ├── domain/          <-- Modelo (Núcleo de Negocio - DDD)
│   │   ├── aggregates/
│   │   │   └── Pedido.ts             // Raíz del Agregado
│   │   ├── entities/
│   │   │   └── Cliente.ts            // Entidad sin ser Raíz (o Agregado simple)
│   │   ├── value-objects/
│   │   │   └── Direccion.ts          // Objeto Inmutable
│   │   ├── repositories/
│   │   │   └── IPedidoRepository.ts  // Contrato de Repositorio (Interfaz)
│   │   └── events/
│   │       └── PedidoPagadoEvent.ts  // Evento de Dominio
│   │
│   ├── infrastructure/  <-- Lógica Externa (Persistencia, APIs externas)
│   │   ├── database/
│   │   │   └── SqlPedidoRepository.ts  // Implementación de IPedidoRepository
│   │   ├── api/
│   │   │   └── ClienteAPI.ts         // Adaptador de un servicio externo
│   │   └── utils/
│   │       └── EmailService.ts       // Envío de correos
│   │
│   ├── interfaces/      <-- Lógica de Entrada (MVC Controllers) y Salida (Views)
│   │   ├── http/
│   │   │   └── PedidoController.ts   // Recibe la solicitud y llama al Servicio
│   │   └── views/
│   │       └── catalogo.html/jsx     // Presentación de datos
│   │
│   └── index.ts         // Punto de entrada de la aplicación (inicia el servidor, inyecta dependencias)
│
├── tests/               // Pruebas unitarias e de integración
├── package.json         // Dependencias del proyecto
└── tsconfig.json        // Configuración de TypeScript
```


#### domain: Reglas de Negocio Puras; Agregados, Entidades, Objetos de Valor, Interfaces de Repositorio.

#### application: Casos de Uso y Coordinación; Servicios de Aplicación (manejo de transacciones, orquestación del dominio).

#### infrastructure: Detalles Técnicos; Implementaciones concretas de Repositorios (DB), clientes API, utilidades.

#### interfaces: Puntos de Entrada/Salida; Controladores HTTP/CLI, Vistas y lógica de presentación.


### Carpetas principales

##### Model, View, Controller dentro del directorio de código fuente (/src o /app)

##### Más una carpeta de Infraestructura o Servicios para las dependencias externas.


#### 1. Controladores (/controllers)

Clases que manejan la entrada del usuario y la orquestación.

UsuarioController.js/ts: Maneja las solicitudes relacionadas con los usuarios (ej., registrar, iniciar sesión).

ProductoController.js/ts: Maneja las solicitudes de e-commerce (ej., ver catálogo, añadir al carrito).

HomeController.js/ts: Maneja las rutas principales o la página de inicio


#### 2. Modelos (/models o /domain)

Contiene la lógica de negocio y las estructuras de datos. 

En frameworks modernos, estos suelen ser las clases que interactúan con la base de datos (ORMs o clases de Dominio/DDD).

Usuario.js/ts: Define la estructura de un usuario y la lógica para su validación o autenticación.

Producto.js/ts: Define un producto, sus reglas de stock y precio.

Pedido.js/ts: Define la estructura de una orden de compra y su lógica de estado.


#### 3. Vistas (/views)

Contiene los archivos de la interfaz de usuario que se renderizan al cliente. 

El contenido de estas carpetas depende de la tecnología (ej., archivos .ejs, .html, .jsx):

/views/productos/

    catalogo.html: Muestra la lista de productos.

    detalle.html: Muestra la información de un producto específico.

/views/usuario/

    login.html: Formulario para iniciar sesión.

    perfil.html: Página de perfil del usuario.

/views/shared/: Contiene layouts o plantillas comunes (ej., header.html, footer.html).


#### 4. Capa de Aplicación y Otros (/services, /config, /infrastructure)

Contiene la lógica que coordina el flujo (Capa de Servicio) y las configuraciones técnicas.

/services/:

    ServicioDeAutenticacion.js/ts: Lógica que coordina el Modelo de Usuario y otros sistemas (ej., enviar email de verificación).

    ServicioDeTransaccion.js/ts: Lógica que usa los Modelos Pedido y Producto para realizar una compra completa (simulando una Capa de Servicio/UoW).

/config/: Archivos de configuración de la base de datos o variables de entorno.

/public/: Recursos estáticos como CSS, imágenes y JavaScript del lado del cliente.



## Service Layer en MVC

No es un componente estándar y obligatorio del patrón MVC original

##### Capa adicional introducida comúnmente en arquitecturas más complejas para mejorar la separación de intereses (SoC)

##### Gestionar la lógica de negocio que abarca múltiples Modelos.


### Capa de Servicio

Se ubica entre el Controlador y el Modelo.

Sin Capa de Servicio: El Controlador llama directamente a los métodos del Modelo (Entidades, Repositorios, etc.).

##### Con Capa de Servicio: El Controlador llama a los métodos del Servicio, y el Servicio coordina las llamadas a uno o más Modelos (capa de Dominio/Persistencia).

```
Vista ⟷ Controlador ⟷ Servicio ⟷ Modelo
```


##### Responsabilidades

Se enfoca en la Lógica de Aplicación y la Coordinación Transaccional.

1. Lógica de Aplicación (Casos de Uso)

El Servicio define y ejecuta las operaciones de alto nivel o los "casos de uso" de la aplicación.

Ejemplo: En lugar de tener un Controlador que llama a ModeloPedido.guardar() y luego a ModeloInventario.actualizarStock(), el Controlador llama a un único método: ServicioDePedidos.crearPedidoYActualizarStock(datos).


2. Coordinación Transaccional

Es el lugar ideal para gestionar la Unidad de Trabajo (Unit of Work). 

Si una operación de negocio requiere modificar varios Modelos o Agregados (en terminología DDD), el Servicio se asegura de que esto se haga dentro de una única transacción atómica.

Ejemplo: El servicio crearPedidoYActualizarStock se asegura de que, si falla la actualización del stock, la creación del pedido también se revierta (rollback).


3. Traducción y Autorización

Autorización: A menudo, el Servicio maneja las verificaciones de seguridad de alto nivel (ej. "¿Tiene este usuario permisos para crear un pedido?").

Traducción: Puede convertir datos de entrada (recibidos del Controlador) a objetos de dominio (pasados al Modelo) y viceversa.

 
##### Beneficios

1. Controladores más Limpios (Thin Controllers): El Controlador solo se preocupa por la interfaz de usuario, la validación de la solicitud y llamar al método de servicio adecuado.

Ya no contiene lógica de negocio o de coordinación compleja.


2. Reutilización de la Lógica: La lógica de negocio compleja (crearPedidoYActualizarStock) puede ser reutilizada por diferentes Controladores 

(ej., un Controlador API y un Controlador de interfaz gráfica).


3. Aislamiento del Modelo (Dominio): La Capa de Servicio protege el Modelo, asegurando que solo se le pida hacer cosas que tienen sentido en el contexto de una operación de aplicación.


4. Mejor Testeabilidad: Puedes probar la lógica de negocio completa del caso de uso probando solo la Capa de Servicio, sin necesitar la Vista o el Controlador.


La Capa de Servicio toma la responsabilidad de la Lógica de Aplicación y la Coordinación del Controlador

Permitiendo que el Controlador se enfoque solo en las interacciones de E/S y que el Modelo se enfoque solo en las reglas de datos y el dominio.




## Unit of Work en MVC

##### Patrón de diseño que se utiliza para agrupar una o más operaciones de base de datos en una única transacción atómica.

##### Su propósito es asegurar que todos los cambios realizados durante un proceso de negocio sean exitosos y se guarden juntos, o que ninguno de ellos se guarde si algo falla.

#### UoW actúa como un rastreador que mantiene un registro de todos los cambios realizados en el modelo de negocio (Entidades, Agregados, etc.) durante una determinada operación de la aplicación.

1. Seguimiento de Cambios: Cuando una operación comienza, la UoW inicia y comienza a rastrear cualquier Entidad que sea agregada, modificada o marcada para eliminación.

2. Transacción Única: Cuando la operación de negocio finaliza con éxito, la UoW le pide a los Repositorios que persistan todos los cambios rastreados en la base de datos como una única transacción.

3. Compromiso (Commit): Si todas las operaciones de persistencia son exitosas, la UoW ejecuta el commit de la transacción.

4. Reversión (Rollback): Si cualquier operación de persistencia falla (por un error del sistema, una violación de integridad, etc.), la UoW ejecuta un rollback, asegurando que la base de datos se mantenga en el estado inicial y consistente


### Relación con Repos

UoW se utiliza casi siempre junto con el patrón Repositorio (especialmente en DDD o arquitecturas basadas en capas) para desacoplar el código:

#### Repositorio: Se enfoca en el acceso a los datos de una única Raíz de Agregado (cómo obtener y cómo guardar).

#### Unidad de Trabajo: Se enfoca en la coordinación transaccional entre múltiples Repositorios

##### !!! En lugar de que cada Repositorio abra y cierre su propia conexión y transacción de base de datos, todos comparten la misma UoW para una operación de negocio.


### Beneficios

1. Atomicidad: Garantiza que las operaciones complejas sean atómicas (todo o nada), lo que es fundamental para la integridad de los datos.

2. Eficiencia: Reduce la cantidad de interacciones con la base de datos al agrupar múltiples comandos (INSERTs, UPDATEs, DELETEs) en un solo viaje.

3. Simplificación del Dominio: Mantiene la lógica transaccional fuera de los Agregados y los Servicios de Dominio, delegándola a la capa de Aplicación/Infraestructura.


### Ejemplo de Flujo: Transferencia de Dinero

La Capa de Aplicación inicia la UoW: uow.iniciar().

1. El Servicio de Dominio solicita a los Repositorios:

	cuentaOrigen = repoCuenta.obtener(idOrigen)

	cuentaDestino = repoCuenta.obtener(idDestino)

2. La lógica de negocio se ejecuta (dentro del Dominio):

	cuentaOrigen.retirar(monto)

	cuentaDestino.depositar(monto)

3. La Capa de Aplicación informa a la UoW que se debe guardar el estado de las dos cuentas: uow.guardarCambios().

4. La UoW garantiza que tanto la operación de retiro como la de depósito se ejecuten y confirmen simultáneamente en la base de datos.
 
 


## Ej: Modelo MVC

Gestiona los datos y la lógica de negocio de la aplicación.


## Ej Modelo simple app notas (NoteModel), que se encarga de almacenar, añadir y obtener las notas

Modelo (Model): NoteModel

Este modelo encapsula el estado (la lista de notas) y la lógica para manipular ese estado.

```
// /src/models/Note.ts (Define la estructura del dato)
export interface Note {
    id: number;
    title: string;
    content: string;
}

// /src/models/NoteModel.ts (El Modelo MVC)
export class NoteModel {
    // El estado interno que representa los datos de la aplicación
    private notes: Note[] = [];
    private nextId: number = 1;

    // --- Lógica de Negocio y Manipulación de Datos ---

    /**
     * Añade una nueva nota a la colección, encapsulando la asignación de ID.
     */
    public addNote(title: string, content: string): Note {
        // Lógica de negocio: asegurarse de que no haya títulos vacíos
        if (!title.trim()) {
            throw new Error("El título de la nota no puede estar vacío.");
        }
        
        const newNote: Note = {
            id: this.nextId++,
            title: title,
            content: content
        };
        
        this.notes.push(newNote);
        console.log(`Modelo: Nota ${newNote.id} añadida.`);
        return newNote;
    }

    /**
     * Devuelve una nota específica por su ID.
     */
    public getNoteById(id: number): Note | undefined {
        // Lógica de acceso a datos: buscar en la colección interna
        return this.notes.find(note => note.id === id);
    }
    
    /**
     * Devuelve la lista completa de notas.
     * Se devuelve una copia para evitar la modificación directa e incontrolada del array.
     */
    public getAllNotes(): Note[] {
        // Retorna los datos que el Controlador pasará a la Vista
        return [...this.notes]; 
    }
}
```

1. Datos Centralizados: La variable privada notes es el almacén de datos.

2. Lógica Encapsulada: El método addNote() no solo agrega la nota, sino que también maneja la lógica de negocio (asignar el id) y la validación (título no vacío).

3. Independencia: Este código no tiene ninguna referencia a elementos de la interfaz de usuario (HTML, DOM) ni al flujo de solicitudes (Controlador). Solo se preocupa por qué son los datos y cómo se manipulan



## View MVC

Es la capa responsable de la presentación de los datos al usuario y de capturar las interacciones del usuario (como clics de botones o entradas de texto).

Es crucial que la Vista no contenga lógica de negocio. Solo sabe cómo mostrar la información que recibe del Controlador y cómo notificar al Controlador sobre las acciones del usuario.


### Ej: Vista simple para una lista de notas, diseñada para interactuar con un Controlador

La vista define la interfaz para conectarse a él

Vista (View): NoteView

Esta clase simula la interacción con el DOM de una aplicación web, mostrando notas y notificando la acción "Añadir Nota".

```
// /src/views/NoteView.ts

import { Note } from '../models/Note'; // Asumimos la interfaz Note del Modelo

export class NoteView {
    // Referencias a elementos del DOM (Asume que existen en el HTML)
    private appElement: HTMLElement;
    private noteListElement: HTMLElement;
    private addButton: HTMLButtonElement;
    private inputTitleElement: HTMLInputElement;
    private inputContentElement: HTMLTextAreaElement;

    constructor() {
        // Inicialización y obtención de referencias del DOM
        this.appElement = document.getElementById('app')!;
        this.noteListElement = document.getElementById('note-list')!;
        this.addButton = document.getElementById('add-button') as HTMLButtonElement;
        this.inputTitleElement = document.getElementById('note-title') as HTMLInputElement;
        this.inputContentElement = document.getElementById('note-content') as HTMLTextAreaElement;
    }

    // --- 1. Presentación de Datos (Método de Renderizado) ---
    
    /**
     * Muestra la lista de notas, recibiendo los datos directamente del Controlador.
     */
    public render(notes: Note[]): void {
        this.noteListElement.innerHTML = ''; // Limpiar la lista
        
        if (notes.length === 0) {
            this.noteListElement.innerHTML = '<p>No hay notas. ¡Añade una!</p>';
            return;
        }

        notes.forEach(note => {
            const li = document.createElement('li');
            li.className = 'note-item';
            li.innerHTML = `
                <div class="note-title">${note.title}</div>
                <p class="note-content">${note.content}</p>
            `;
            this.noteListElement.appendChild(li);
        });
    }

    // --- 2. Captura de Interacciones y Notificación ---

    /**
     * Captura los datos de la nueva nota para enviarlos al Controlador.
     */
    public getNewNoteData(): { title: string, content: string } {
        const title = this.inputTitleElement.value;
        const content = this.inputContentElement.value;
        
        // Limpiar los campos después de la captura
        this.inputTitleElement.value = '';
        this.inputContentElement.value = '';
        
        return { title, content };
    }

    /**
     * Conecta el evento del botón con una función del Controlador.
     * Esto usa el patrón "observador" para notificar al Controlador de una acción.
     * * @param handler La función del Controlador que se ejecutará al hacer clic.
     */
    public bindAddNote(handler: (title: string, content: string) => void): void {
        this.addButton.addEventListener('click', () => {
            const data = this.getNewNoteData();
            
            // La Vista NO valida ni guarda. Solo llama al método del Controlador.
            if (data.title && data.content) {
                handler(data.title, data.content); 
            }
        });
    }
}
```


1. Solo Presentación: El método render() solo se preocupa por la estructura HTML y cómo mostrar los datos `(Note[])` que le da el Controlador. No sabe de dónde vienen esos datos (Base de Datos, Archivos, etc.).

2. Notificación de Eventos: El método bindAddNote() es el mecanismo clave. En lugar de procesar la lógica, la Vista llama a una función (handler) que le pasa el Controlador, desacoplando la interacción de la lógica.

3. Aislamiento del Dominio: La Vista no contiene llamadas al Modelo. El flujo es siempre: Vista → Controlador → Modelo → Controlador → Vista.



## Controller MVC

Intermediario o "cerebro" que gestiona el flujo de la aplicación

##### Recibe las interacciones de la Vista, decide qué lógica de negocio se necesita ejecutar en el Modelo, y luego le dice a la Vista qué mostrar.


### Ej: app notas que conecta el NoteView y el NoteModel


#### Controlador (Controller): NoteController

Esta clase orquesta la aplicación. 

Recibe instancias del Modelo y la Vista en su constructor y establece la conexión entre ellas.

```
// /src/controllers/NoteController.ts

import { NoteModel, Note } from '../models/NoteModel';
import { NoteView } from '../views/NoteView';

export class NoteController {
    private model: NoteModel;
    private view: NoteView;

    constructor(model: NoteModel, view: NoteView) {
        this.model = model;
        this.view = view;

        // 1. Inicialización: El Controlador le pide los datos al Modelo
        // y le dice a la Vista que los renderice.
        this.onNoteListChanged(this.model.getAllNotes());

        // 2. Conexión de Eventos: El Controlador se suscribe a los eventos de la Vista
        // y les asigna su propio manejador.
        this.view.bindAddNote(this.handleAddNote); 
    }

    // --- Métodos de Orquestación y Flujo ---

    /**
     * Método llamado por el Controlador cada vez que el Modelo cambia.
     * Obtiene el estado actual del Modelo y se lo pasa a la Vista para su actualización.
     */
    private onNoteListChanged(notes: Note[]): void {
        console.log("Controlador: Actualizando la Vista con nuevos datos.");
        this.view.render(notes);
    }

    /**
     * Manejador de Evento: Esta función se llama cuando el usuario hace clic en 'Añadir Nota'
     * (gracias al 'bindAddNote' definido en el constructor).
     */
    private handleAddNote = (title: string, content: string): void => {
        console.log(`Controlador: Recibida solicitud para añadir nota: "${title}".`);
        
        try {
            // 1. El Controlador llama al Modelo para ejecutar la lógica de negocio (guardar)
            this.model.addNote(title, content); 

            // 2. El Controlador solicita los datos actualizados y le dice a la Vista que se actualice
            this.onNoteListChanged(this.model.getAllNotes());
            
        } catch (error) {
            // Manejo de errores de negocio (ej. título vacío)
            console.error("Error al añadir nota:", (error as Error).message);
            // Opcional: El controlador podría decirle a la Vista que muestre un mensaje de error
            // this.view.displayError((error as Error).message); 
        }
    }
}
```


#### Conexión de la Aplicación (index.ts)

Finalmente, se inicializa la aplicación conectando los tres componentes:

```
// /src/index.ts

import { NoteModel } from './models/NoteModel';
import { NoteView } from './views/NoteView';
import { NoteController } from './controllers/NoteController';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Instanciar el Modelo y la Vista
    const model = new NoteModel();
    const view = new NoteView();

    // 2. Instanciar el Controlador, conectando el Modelo y la Vista
    new NoteController(model, view);

    console.log("Aplicación MVC inicializada.");
});
```

1. Intermediario: El Controlador es la única clase que tiene referencias directas tanto al Modelo como a la Vista.

2. Manejo de Solicitudes: Recibe la acción del usuario (handleAddNote), interpreta la intención y traduce eso en una acción del Modelo (model.addNote()).

3. Control de Flujo: Determina el siguiente paso de la aplicación: después de modificar el Modelo, siempre llama a la Vista para asegurar que la interfaz esté sincronizada (onNoteListChanged).

4. No Contiene Lógica de Negocio: El Controlador no sabe cómo se guarda la nota ni si el título es válido; esa lógica reside en el Modelo. Su única tarea es orquestar.




# DDD

##### Domain-Driven Design (Diseño Dirigido por el Dominio) pone el dominio del negocio en el centro de la aplicación.

Serie de principios y patrones arquitectónicos cuyo objetivo es alinear estrechamente el código con la lógica y las reglas del negocio, especialmente en sistemas complejos.


## Principios

DDD se basa en tres pilares conceptuales clave para lograr esta alineación:

### 1. El Dominio como Foco

##### El Dominio es el problema específico del mundo real que la aplicación busca resolver (por ejemplo, "gestión de inventario de una tienda de comercio electrónico" o "sistema de reservaciones hoteleras").

##### DDD exige que los desarrolladores adquieran un conocimiento profundo del negocio, colaborando estrechamente con los expertos del dominio.

##### El diseño del software debe reflejar directamente los conceptos, reglas y procesos de este dominio.


### 2. Lenguaje Ubicuo (Ubiquitous Language)

##### Este es quizás el concepto más importante a nivel de comunicación.

Consiste en una colección de términos y definiciones que son utilizados de la misma forma por todos los miembros del equipo: expertos del negocio, usuarios y desarrolladores.

##### Este lenguaje se plasma directamente en el código (nombres de clases, métodos, variables). Por ejemplo, si el experto del negocio dice ProductoAgregado, el código debe tener una clase llamada ProductoAgregado.

Esto reduce la fricción, elimina malentendidos y garantiza que el código hable el mismo idioma que el negocio


### 3. Contextos Delimitados (Bounded Contexts)

##### En sistemas complejos, un mismo término puede tener diferentes significados. DDD soluciona esto dividiendo el sistema en contextos claros:

##### Un Contexto Delimitado es un límite lógico dentro del cual un modelo de dominio específico está definido y es consistente.

##### Ejemplo: La entidad "Producto" en el contexto de Inventario puede tener atributos como stock y ubicacion, mientras que la entidad "Producto" en el contexto de Ventas solo tiene precio y descripcion.

##### Los Contextos Delimitados permiten manejar la complejidad al asegurar que cada parte del sistema se preocupe por una porción manejable y coherente del dominio. 


#### Patrones Arquitectónicos Centrales

##### Dentro de cada Contexto Delimitado, DDD propone patrones específicos para construir un Modelo de Dominio sólido y protegido:


### 1. Entidad (Entity): Objetos que tienen una identidad única y persisten a través del tiempo. Importa su identidad, no sus atributos (ej. un Cliente con un ID).

### 2. Objeto de Valor (Value Object)	Objetos que no tienen identidad y se definen únicamente por sus atributos. Son inmutables (ej. una Dirección o un RangoDeFechas).

### 3. Una colección de Entidades y Objetos de Valor que deben tratarse como una unidad transaccional. Hay una Entidad raíz que garantiza la consistencia del grupo (ej. un Pedido que incluye varios ArtículosDeLínea).

### 4. Repositorio (Repository)	Proporciona la interfaz para acceder y almacenar los Agregados, aislando el Modelo de Dominio de los detalles técnicos de la base de datos (la infraestructura).


##### El objetivo de estos patrones es que la lógica de negocio (Domain Layer) resida en el centro, aislada de la infraestructura (bases de datos, UI, frameworks, etc.), lo que mejora la mantenibilidad, testeo y adaptabilidad del software.


## Lenguaje Ubicuo

Vocabulario compartido y estrictamente coherente que es utilizado por todos los participantes de un proyecto de software complejo. Esto incluye:

#### 1. Expertos del Dominio (los que entienden el negocio).

#### 2. Desarrolladores (los que escriben el código).

#### 3. Documentación (los requisitos y especificaciones).


### Coherencia entre Negocio y Código

El UL no es solo una lista de términos

##### Es el modelo de dominio expresado a través del lenguaje.

#### En el Negocio: Los expertos usan el UL para describir los procesos, reglas y conceptos del negocio.

#### En el Código: Los desarrolladores toman esos términos y los usan directamente para nombrar clases, métodos, variables y módulos


#### Ej. 

Concepto	si el negocio dice..	El código debe tener...

Regla de Negocio "El cliente debe ActivarCuenta." Un método llamado cuenta.activarCuenta()

Entidad "La entidad central es el Pedido." Una clase o módulo llamado Pedido


### Relación con los Contextos Delimitados

##### El UL debe ser coherente, pero solo dentro de su propio Contexto Delimitado (Bounded Context).

#### En sistemas grandes, un mismo término puede tener significados diferentes. 

El UL ayuda a manejar esto al delimitar dónde es válido cada significado:


Término | Contexto Delimitado | Significado en el UL

Producto | Inventario | Ítem físico con stock y ubicacion.

Producto | Ventas | Ítem vendible con precio y descripcionPromocional.


##### Dentro del contexto de "Inventario," la palabra "Producto" siempre significa la entidad con stock, y el código lo reflejará.

##### Si un desarrollador usa la palabra "Producto" en el contexto de "Ventas," el código debe reflejar el significado de ese contexto.


Lenguaje Ubicuo es la herramienta de comunicación que asegura que el diseño del software (el código) sea un espejo fiel del entendimiento del negocio (el dominio).



## Bounded Contexts

Patrones arquitectónicos más importantes en Domain-Driven Design (DDD) para manejar la complejidad en sistemas grandes.

Un Contexto Delimitado es, esencialmente, un límite lógico dentro del cual un modelo de dominio específico está definido y es coherente


Su propósito es:

1. Aislar Modelos: Asegurar que el modelo de dominio interno (las clases, entidades y lógica) permanezca consistente y no se vea contaminado por la lógica de otras partes del sistema.

2. Clarificar el Lenguaje Ubicuo (UL): Definir el espacio exacto donde un término del negocio tiene un significado particular.

3. El Contexto Delimitado es el límite físico donde el Lenguaje Ubicuo es válido y único.


### Delimitar

En la vida real, un mismo concepto tiene diferentes significados según el contexto. 

Los sistemas de software deben reflejar esta realidad.


Ejemplo Clásico: El Cliente

#### Imagina una empresa con diferentes departamentos (contextos):


Contexto Delimitado	Nombre del Modelo Interno	Atributos y Lógica

Ventas (Sales)	Prospecto	ScoreDeInteres, FechaPrimerContacto.

Soporte (Support)	CuentaDeSoporte	NivelDeServicio, HistorialDeTickets

Facturación (Billing)	TitularDeFactura	DireccionFiscal, TerminosDePago.


##### Si se intenta crear una única clase monolítica llamada Cliente con todos estos atributos, la clase se vuelve enorme, confusa e inconsistente.

Al usar Contextos Delimitados, cada uno tiene su propio modelo pequeño, bien definido y enfocado en su preocupación particular.


## Características

#### Autónomos: Cada Contexto Delimitado debe ser tan independiente como sea posible, teniendo su propia base de datos (o esquema), código y equipo de desarrollo dedicado.

#### Límites Clares: La frontera del contexto debe ser explícita, a menudo mapeándose a módulos de código, servicios o incluso microservicios independientes.

#### Comunicación Explícita: Cuando dos Contextos Delimitados necesitan interactuar (ej. el contexto de "Ventas" necesita saber si el cliente en el contexto de "Facturación" está al día)

##### La comunicación entre ellos debe ser explícita y controlada, generalmente a través de interfaces bien definidas, APIs o mensajes (Eventos de Dominio).


La correcta delimitación de los contextos es el paso más crítico en un proyecto DDD, ya que establece las bases para una arquitectura software desacoplada y escalable.



## Modelado Táctico

##### Se refiere a la aplicación de patrones de diseño específicos para construir, de manera detallada y robusta, el Modelo de Dominio dentro de un Contexto Delimitado (Bounded Context).

El Modelado Estratégico se enfoca en dividir el sistema en grandes contextos

#### El Modelado Táctico se enfoca en cómo se ve el código internamente.

Estos patrones se utilizan para asegurar que el código refleje fielmente la lógica de negocio y mantenga la coherencia del modelo:


1. Entidades (Entities)

Concepto: Son objetos de dominio que tienen una identidad única y persistente a lo largo del tiempo.

Característica: Su identidad (un ID) es más importante que sus atributos. Dos entidades son iguales si tienen el mismo ID, incluso si todos sus atributos cambian.

Propósito: Representan elementos que necesitan ser rastreados de forma individual (ej., un Cliente, un Pedido).


2. Objetos de Valor (Value Objects)

Concepto: Son objetos que no tienen identidad propia. Son definidos únicamente por sus atributos.

Características: Son inmutables (una vez creados, no cambian) y si dos Objetos de Valor tienen los mismos atributos, se consideran iguales.

Propósito: Modelar conceptos que describen o miden el dominio (ej., una Dirección, un RangoDeFechas, una Moneda).


3. Agregados (Aggregates)

Concepto: Una colección de Entidades y Objetos de Valor que deben tratarse como una única unidad transaccional.

Raíz del Agregado: Cada Agregado tiene una Entidad Raíz (o Raíz del Agregado) que es la única que debe manipularse directamente desde fuera.

Propósito: Garantizar la consistencia de los objetos que lo componen, asegurando que cualquier cambio dentro del límite del Agregado cumpla con todas las reglas de negocio. Por ejemplo, el Agregado Pedido se asegura de que sus LíneasDePedido y el EstadoDelPedido sean siempre coherentes.


### Otros Patrones Tácticos Importantes

Servicios de Dominio (Domain Services): Se usan para modelar operaciones que son importantes para el dominio, pero que no encajan naturalmente como responsabilidad de una Entidad o un Objeto de Valor (ej., una operación que involucra varias entidades, como TransferirDinero(cuentaOrigen, cuentaDestino, monto)).

Eventos de Dominio (Domain Events): Son objetos que representan algo significativo que ocurrió en el dominio y que otros componentes o contextos podrían necesitar reaccionar (ej., ProductoAgotado, PedidoEnviado).

Repositorios (Repositories): Proporcionan la interfaz para acceder y almacenar los Agregados. Su rol es aislar el Modelo de Dominio de los detalles técnicos de la base de datos (la infraestructura).

Fábricas (Factories): Se utilizan para encapsular la lógica compleja necesaria para crear Agregados o Entidades que requieren un proceso de inicialización complicado.


##### El Modelado Táctico toma las grandes decisiones del Modelado Estratégico (los Contextos Delimitados) y proporciona las herramientas de diseño específicas para construir el corazón funcional y detallado de la aplicación: el Modelo de Dominio.


## Entidades (Entities)

Representan los objetos de dominio que tienen una identidad única.

Una Entidad es un objeto de dominio definido por su identidad y continuidad a través del tiempo, más que por sus atributos.


1. Identidad Única

Tiene un identificador único (como un ID) que la distingue de todas las demás.

Persistencia: La identidad persiste a lo largo de la vida de la Entidad, incluso si todos sus atributos cambian. Por ejemplo, un Cliente mantiene su mismo ID de cliente, aunque cambie su nombre, dirección o número de teléfono.

Comparación: Para determinar si dos Entidades son iguales, solo se necesita comparar su identificador.


2. Mutabilidad

A diferencia de los Objetos de Valor, las Entidades suelen ser mutables. 

Sus atributos internos pueden cambiar (ej. el Estado de un pedido puede pasar de "pendiente" a "enviado"), y aun así, sigue siendo la misma Entidad (el mismo Pedido).


3. 3. Encapsulación de Comportamiento

Las Entidades no son solo estructuras de datos; encapsulan la lógica de negocio asociada con ellas.

Los métodos de una Entidad son las acciones que puede realizar ese objeto en el dominio.


#### Ejemplo: En lugar de tener una función externa cambiarEstadoPedido(pedido, nuevoEstado)

##### El comportamiento debe residir en la propia Entidad: pedido.enviar().

##### Esto asegura que las reglas de negocio (ej. "un pedido solo puede ser enviado si está pagado") se apliquen dentro de la propia Entidad.



## Value Objects

Representa un concepto descriptivo dentro del dominio, el cual no tiene identidad única y es definido únicamente por sus atributos.

1. Definición Clave

Sin Identidad: No tienen un ID o clave persistente.

Igualdad Basada en Atributos: Dos Objetos de Valor son considerados iguales si y solo si todos sus atributos son idénticos.

Inmutabilidad: Una vez creados, sus atributos no cambian. Si necesitas modificar el "valor", creas una nueva instancia del objeto


Ejemplos:

Una Dirección (calle, número, ciudad).

Un RangoDeFechas (fechaInicio, fechaFin).

Una Cantidad con Moneda (valor: 50, moneda: USD).



## Domain Services

##### Ayudan a encapsular la lógica de negocio que no encaja naturalmente en una Entidad o un Objeto de Valor.

##### Es una clase que representa una operación importante del negocio o una coordinación que:

1. No tiene un estado intrínseco: El servicio en sí no representa un objeto persistente del negocio (como un Cliente o un Producto).

2. No es responsabilidad de una Entidad: La lógica involucra la coordinación de múltiples Entidades, Agregados, o componentes, y no tiene sentido ubicarla en un único objeto


### El objetivo principal es mantener la pureza de las Entidades y los Objetos de Valor. 

Si una operación es de dominio, pero no pertenece a un objeto específico, se crea un Servicio de Dominio para manejarla.


1. Operaciones que Involucran Múltiples Agregados

La razón más común para usar un Servicio de Dominio es cuando una única acción de negocio requiere manipular o acceder a múltiples Agregados (que, por definición, deben ser aislados).

Ejemplo Clásico: Transferencia de Dinero

La lógica no pertenece a la entidad CuentaOrigen ni a la entidad CuentaDestino, sino que involucra a ambas.

Un Servicio de Dominio llamado ServicioDeTransferencia podría coordinar la acción:

	cuentaOrigen.retirar(monto)

	cuentaDestino.depositar(monto)

	Manejar la lógica de transacción y las reglas de negocio (ej., verificar fondos).
	

2. Operaciones que No Tienen Estado

El Servicio de Dominio es un objeto de dominio sin estado propio.

Sus métodos suelen recibir parámetros del dominio (Entidades, Objetos de Valor) y devolver un resultado o modificar un estado.


3. Evitar Anemia

Es crucial no confundir los Servicios de Dominio con los Servicios de Aplicación o usarlos para toda la lógica. 

Si una lógica pertenece claramente a una Entidad (ej., pedido.marcarComoEnviado()), debe residir allí. 

El uso excesivo de Servicios de Dominio conduce a un "Modelo Anémico" donde las Entidades son solo contenedores de datos sin comportamiento.


Ubicación en la Arquitectura de DDD

En una arquitectura DDD en capas, los Servicios de Dominio se ubican en la capa de Dominio, junto a las Entidades y Objetos de Valor, y por debajo de la capa de Aplicación.

Capa de Aplicación	Recibe la solicitud del usuario (Controlador), busca los Agregados necesarios y llama al método del Servicio de Dominio

Capa de Dominio	Ejecuta la lógica de negocio coordinada que manipula los diferentes Agregados.


los Servicios de Dominio son un patrón de diseño que le da un hogar formal y explícito a la lógica de negocio compleja y de coordinación que no tiene un lugar claro en ninguna Entidad individual.



## Aggregate

Uno de los patrones más críticos y complejos del Modelado Táctico en DDD

##### Diseñado para garantizar la integridad transaccional y la consistencia del Modelo de Dominio.

Es un clúster de Entidades y Objetos de Valor que están vinculados conceptualmente y que deben ser tratados como una única unidad transaccional.


El propósito central de un Agregado es aplicar una regla fundamental:

##### Todo cambio dentro del Agregado debe ser atómico y mantener la coherencia interna del grupo.


### La Raíz del Agregado (Aggregate Root)

#### Cada Agregado tiene una única Entidad Raíz.

##### Esta Entidad Raíz es el único punto de acceso al Agregado desde fuera.


#### Acceso Exclusivo: Solo se puede obtener o manipular el Agregado usando la Raíz.

##### Si un cliente quiere modificar una Entidad interna (no la Raíz), debe hacerlo a través de un método de la Raíz.


#### Garante de Reglas: La Raíz es responsable de asegurar que se cumplan todas las reglas de negocio (invariants) del Agregado antes y después de cualquier operación.


### Límites y Reglas de Consistencia

La clave de los Agregados radica en la rigidez de sus límites:

1. Consistencia Transaccional: Todas las Entidades y Objetos de Valor dentro de un Agregado deben ser cargadas y guardadas juntas en una única operación de base de datos. Esto garantiza que el estado interno del Agregado siempre sea válido.

2. Referencia por ID: Un Agregado nunca debe contener referencias directas a objetos de otros Agregados. Si un Agregado necesita referenciar a otro, solo debe hacerlo usando el ID de su Raíz. Esto promueve el bajo acoplamiento y la autonomía.

3. Lógica Localizada: La lógica que aplica a varias Entidades internas del Agregado debe ser codificada en la Raíz para asegurar que la integridad se mantenga centralizada.


### Ej: Pedido (Order)

Componente	| Tipo de Patrón DDD | Rol en el Agregado

Pedido | Entidad Raíz / Agregado	| El punto de acceso. Gestiona el estado general (ej. enviando()) y verifica que los ítems cumplan las reglas.

LíneaDePedido |	Entidad | Es una Entidad interna que existe solo en el contexto del Pedido. No puede existir sola.

Monto | Objeto de Valor | Representa el total del pedido; no tiene identidad, solo valor.

ID del Cliente | Referencia Externa	 | El Pedido referencia al Cliente (que es otro Agregado) solo por su ID, no por el objeto completo.


Los Agregados son una herramienta de modelado para reducir la complejidad, agrupando objetos relacionados y forzando la consistencia a través de la Entidad Raíz, lo que es esencial para el diseño de sistemas transaccionales y robustos.


## Aggregate Root

##### Entidad principal de un Agregado y el único punto de acceso para interactuar con ese grupo de objetos.

Agregado es una Entidad que está en la cima jerárquica de su Agregado. Se diferencia de las demás Entidades por su rol:

Punto de Acceso Único: Todas las interacciones, modificaciones o consultas al Agregado deben pasar obligatoriamente a través de la Raíz. Nunca se debe acceder a las Entidades internas directamente.

Garante de Consistencia: La Raíz del Agregado es responsable de hacer cumplir todas las reglas de negocio (invariantes) que afectan al conjunto de objetos dentro de su límite transaccional.


#### objetivo: es garantizar la integridad transaccional del Agregado

Al forzar todas las operaciones a pasar por la Raíz, se asegura que el estado interno del Agregado sea siempre válido antes y después de cualquier cambio.


### Reglas: deben seguir estas reglas estrictas:

#### 1. Manipulación a través de Métodos: Para cambiar el estado de cualquier objeto dentro del Agregado (incluidas las Entidades internas), se debe llamar a un método público en la Raíz. 

La Raíz del Agregado se encarga de delegar la acción internamente.


#### 2. Persistencia Transaccional: El Agregado completo (la Raíz y todos sus miembros) debe ser guardado o actualizado en una única transacción atómica en la base de datos

Esto previene estados inconsistentes.


#### 3. Referencia Externa por ID: Otros Agregados solo pueden referenciar a este Agregado usando el ID de su Raíz, nunca deben mantener referencias directas a objetos internos.

Esto evita que la Raíz pierda el control de sus invariantes.


#### 4. Ciclo de Vida: La Entidad Raíz controla el ciclo de vida de los objetos internos.

Si la Raíz se elimina, todos los objetos que pertenecen a su Agregado también deben ser eliminados.


### Ej: Pedido

En un Agregado Pedido:

Raíz del Agregado: La Entidad Pedido (con su ID único).

Objetos Internos: Las Entidades LíneaDePedido y los Objetos de Valor como DirecciónDeEnvío.

Comportamiento: Si quieres agregar un producto al pedido, llamas a pedido.agregarProducto(productoId, cantidad). La Raíz (Pedido) se asegura de que el estado del pedido lo permita antes de crear la LíneaDePedido interna.

   
##### La Raíz del Agregado actúa como un guardián que protege las reglas y la coherencia de su Agregado.

     
     
## Regla de Consistencia (o Invariante)

##### Conjunto de reglas de negocio que siempre deben ser verdad para ese Agregado en cualquier momento.

Regla de negocio que garantiza que el estado interno del Agregado sea siempre válido y coherente

Estas reglas deben ser satisfechas al inicio y al final de cualquier operación o método de la Raíz del Agregado.


#### La Regla de Consistencia se aplica a todo el conjunto de Entidades y Objetos de Valor que componen el Agregado

No solo a un único campo.

Propósito: Proteger los datos y la lógica de negocio fundamental de cambios inconsistentes o corruptos.


### La Raíz del Agregado es el único responsable de hacer cumplir esta regla. Lo logra mediante:

1. Encapsulación: La Raíz del Agregado encapsula todas las entidades internas. Dado que solo se puede interactuar con el Agregado a través de los métodos de la Raíz, ella puede interceptar y validar cualquier intento de cambio.

2. Validación: Antes de completar una transacción (y antes de guardar el Agregado en el repositorio), la Raíz ejecuta la lógica necesaria para confirmar que la Regla de Consistencia se mantiene. Si la regla se rompe, la operación es rechazada.

3. Transacción Única: DDD establece que el Agregado completo (la Raíz y sus miembros) debe ser guardado en una única transacción atómica. Esto garantiza que no haya un estado intermedio en la base de datos donde la Regla de Consistencia esté rota.


### Ej: Agregado llamado Pedido.

Regla de Consistencia (Invariante) | Mecanismo de Control de la Raíz

"Un Pedido en estado 'ENVIADO' no puede tener ítems con cantidad cero." | El método pedido.enviar() verifica que todas las LíneasDePedido internas tengan cantidad > 0 antes de cambiar el estado del Pedido.

"El Total del Pedido debe ser igual a la suma de los subtotales de todas las LíneasDePedido." | El método pedido.agregarLinea(...) recalcula automáticamente el Total de la Raíz para asegurar que la regla se mantenga actualizada y coherente después del cambio interno.


#### Si el código intenta modificar la cantidad de una LíneaDePedido a cero y luego intenta enviarlo

##### La Raíz del Agregado bloqueará la operación, protegiendo así la coherencia de la aplicación.



## Repository

##### Simula ser una colección de objetos en memoria para el acceso a las Raíces de Agregado (Aggregate Roots).

#### Propósito Principal: Aislar el Modelo de Dominio de los detalles técnicos de la base de datos (SQL, NoSQL, ORM, etc.).

El Dominio no debe saber cómo se guardan los datos, solo que puede obtener y guardar Agregados.


#### Contrato: El Repositorio expone métodos que parecen operaciones de colección simples

(ej., obtenerPorId(), guardar(), buscarTodos()), tratando los datos persistentes como si fueran objetos de una lista en memoria.


### Reglas

1. Trabajan Solo con Raíces de Agregado

Un Repositorio siempre trabaja con Agregados completos. 

Nunca se debe crear un Repositorio para una Entidad o un Objeto de Valor que no sea la Raíz de un Agregado.

Regla: Solo existe un Repositorio por cada Raíz de Agregado.

Ejemplo: Tienes un RepositorioDePedidos para la Raíz Pedido, pero no un RepositorioDeLineasDePedido (porque LíneaDePedido es una entidad interna del Agregado Pedido).


2. Contrato Definido en la Capa de Dominio

Para mantener el aislamiento, la interfaz (o el contrato) del Repositorio se define en la capa de Dominio. 

La implementación concreta (el código que se conecta a la base de datos) se coloca en la capa de Infraestructura.

Capa | Responsabilidad

Dominio	| Define la interfaz (IRepositorioDePedidos).

Infraestructura	| Implementa la interfaz (SqlRepositorioDePedidos).


3. Recuperan y Persisten Agregados

Cuando se llama a un método obtenerPorId(id), el Repositorio es responsable de reconstruir el Agregado completo (la Raíz y todas sus entidades y objetos de valor internos) a partir de los datos de la base de datos. 

Cuando se llama a guardar(pedido), el Repositorio debe persistir el Agregado completo en una única transacción.


### Flujo de Interacción

1. La Capa de Aplicación (o un Controlador) necesita actualizar un Pedido.

2. Llama al Repositorio: pedido = RepositorioDePedidos.obtenerPorId(123).

3. La implementación del Repositorio va a la base de datos, carga todos los datos relacionados y reconstruye el Agregado Pedido.

4. La Capa de Aplicación llama a un método de la Raíz: pedido.agregarProducto(nuevoProducto). (Esto es lógica de dominio).

5. La Capa de Aplicación guarda el cambio: RepositorioDePedidos.guardar(pedido).

6. La implementación del Repositorio traduce los cambios del objeto Pedido de vuelta a comandos de base de datos (INSERT/UPDATE) y los ejecuta atómicamente.


## Domain Events

##### Se utiliza para modelar y comunicar cambios significativos que han ocurrido en el sistema.

#### objeto que representa algo que ocurrió en el dominio

Es importante para que otros componentes del negocio (dentro o fuera del mismo Contexto Delimitado) lo sepan y potencialmente reaccionen a él.


### Características

1. Inmutable y en Tiempo Pasado: Un evento de dominio siempre describe algo que ya sucedió (ej., PedidoCreado, PagoProcesado, ProductoAgotado). Una vez creado, el objeto del evento no cambia.

2. Transparencia de Intención: El nombre del evento debe reflejar la intención de negocio, no solo una acción técnica.

3. Contiene Datos Relevantes: El evento debe contener los datos necesarios para que los suscriptores reaccionen, generalmente el ID de la Raíz del Agregado que lo originó y cualquier información clave del estado.


### Proposito 

Fomenta el desacoplamiento y ayuda a mantener la consistencia del Agregado

Separando las acciones que deben ocurrir inmediatamente (dentro del Agregado) de las reacciones que pueden ocurrir después.

1. Desacoplamiento: Permite que un Agregado notifique a otros sobre un cambio sin saber quiénes son esos otros. Esto significa que la lógica de reacción se separa de la lógica de origen.

Ejemplo: El Agregado Pedido emite PedidoCreado. El Agregado Inventario y el Agregado Notificaciones pueden reaccionar sin que Pedido sepa que existen.


2. Ejecución de Lógica Transcontextual: Facilitan la coordinación de reglas de negocio que abarcan varios Contextos Delimitados.


3. Registro de Auditoría: Son excelentes para registrar el historial de acciones importantes en el dominio.


### Flujo de Operación

El ciclo de un Evento de Dominio es el siguiente:

1. Origen: Una Entidad Raíz ejecuta un método (ej., pedido.pagar()). La lógica de negocio se ejecuta y, si es exitosa, se crea el Evento de Dominio (PagoProcesado).

2. Emisión: La Raíz del Agregado recolecta el evento internamente.

3. Publicación: Una vez que la transacción del Agregado se completa exitosamente (garantizando la consistencia del Agregado), el framework o la infraestructura de DDD publica el evento.

4. Suscripción/Reacción: Los Manejadores de Eventos (Event Handlers) o Escuchadores, que residen en la Capa de Aplicación o en otros Contextos Delimitados, reciben el evento y ejecutan la lógica de reacción correspondiente (ej., enviar un email de confirmación, actualizar el stock de inventario).


Usar Eventos de Dominio es fundamental para mover la lógica secundaria o de reacción fuera del Agregado

Simplificando la Raíz y permitiendo que la lógica que no es crítica para la consistencia inmediata se ejecute de forma asíncrona o separada.


## Mapa de Contextos

Es un diagrama de alto nivel que documenta las dependencias, las interacciones y los patrones de integración que existen entre los Contextos Delimitados de un sistema grande.


### Objetivo:

1. Visibilidad: Mostrar al equipo qué partes del sistema existen y dónde residen las fronteras de cada modelo de dominio.

2. Comunicación: Facilitar el diálogo entre equipos al definir explícitamente las relaciones y los acuerdos de integración.

3. Gestión de Dependencias: Identificar qué equipos tienen el control sobre las interfaces de comunicación y qué equipos son dependientes.


### Patrones de Relación

La clave del Mapa de Contextos es que no solo identifica los contextos

#### Etiqueta la naturaleza de su relación


#### 1. Cliente-Proveedor (Customer-Supplier)

Definición: Un contexto (el Proveedor) suministra a otro contexto (el Cliente) el modelo que necesita. 

Típicamente, el equipo Proveedor tiene la autonomía para hacer cambios, pero el equipo Cliente puede negociar o influir en las necesidades.

Ejemplo: El contexto de Inventario (Proveedor) suministra información de stock al contexto de Ventas (Cliente).


#### 2. Conformista (Conformist)

Definición: El contexto Cliente elige adoptar y conformarse al modelo de datos del contexto Proveedor, incluso si no es ideal. 

Esto se hace para evitar la complejidad de la traducción constante, aceptando el control que tiene el equipo Proveedor sobre el modelo.

Ejemplo: El contexto de Reportes (Cliente) simplemente consume el modelo de Usuario tal como lo define el contexto de Autenticación (Proveedor)
    
    
### 3. Anticorrupción (Anticorruption Layer - ACL)

Definición: Se utiliza una capa de traducción (el ACL) para aislar el modelo del Contexto Cliente de las complejidades o cambios no deseados del Contexto Proveedor. 

El ACL se encarga de convertir los objetos del modelo externo al formato interno del Cliente.
    
Ejemplo: Un sistema heredado (Proveedor) tiene un modelo de Producto confuso. 

El nuevo Contexto de Búsqueda (Cliente) utiliza un ACL para traducirlo a su modelo de ÍtemBuscable limpio.


#### 4. Socios (Partnership)

Definición: Dos contextos y sus equipos trabajan en una relación de dependencia mutua, con un fuerte nivel de colaboración. El éxito de uno depende del éxito del otro. Se requiere un esfuerzo coordinado para planificar y negociar los cambios de interfaz.

Ejemplo: Los contextos de Precios y Promociones deben trabajar juntos estrechamente para definir cómo se calcula el precio final de forma conjunta.


### Estrategia

El Mapa de Contextos es la primera herramienta de diseño estratégico. Ayuda a:

Identificar riesgos: Muestra dónde hay acoplamiento fuerte (como en las relaciones de Socios o Conformistas).

Definir la arquitectura: Ayuda a decidir qué contextos deberían ser Microservicios independientes (Autónomos) y dónde se necesita una capa de traducción (ACL).


#### El Mapa de Contextos es el plano de la ciudad del software

##### Mostrando dónde están las fronteras de los barrios (Bounded Contexts) y cómo se comunican entre sí.



## Relaciones de Integración

##### Patrones que se utilizan para definir y gestionar cómo se comunican e interactúan los diferentes Contextos Delimitados (Bounded Contexts) de un sistema.

Son la parte central del Mapa de Contextos y son cruciales para el Modelado Estratégico, ya que gestionan la complejidad de la integración y el acoplamiento.


### Patrones de Relación (Integración)

##### Describen los términos del acuerdo de comunicación entre dos equipos o Contextos Delimitados:


#### 1. Cliente-Proveedor (Customer-Supplier)

##### Este es un patrón jerárquico donde un Contexto depende del modelo de otro.

Proveedor (Supplier): El Contexto que define el modelo que se utilizará y tiene la autonomía para cambiarlo.

Cliente (Customer): El Contexto que consume el modelo del Proveedor.

Acoplamiento: El Cliente depende del Proveedor. 

El Cliente puede negociar o solicitar cambios, pero el Proveedor mantiene el control. 

Esta relación debe definirse con un Acuerdo de Servicio explícito (Service Level Agreement o SLA).


#### 2. Conformista (Conformist)

Esta relación ocurre cuando el Contexto Cliente opta por conformarse totalmente al Lenguaje Ubicuo (UL) y al modelo de datos del Contexto Proveedor.

Ventaja: Reduce la complejidad de la traducción constante y el mantenimiento de una Capa Anticorrupción.

Desventaja: El Cliente se vuelve completamente vulnerable a los cambios introducidos por el Proveedor y pierde autonomía sobre ese segmento del modelo. 

Se usa a menudo cuando el Contexto Proveedor es un modelo maduro y dominante, o cuando el Cliente tiene poco capital para invertir en traducción.


#### 3. Capa Anticorrupción (Anticorruption Layer - ACL)

Este patrón es un mecanismo defensivo.

Definición: Es un código de traducción que reside en el Contexto Cliente. 

Su propósito es aislar completamente el modelo interno del Cliente de las particularidades, inconsistencias o cambios constantes del modelo del Proveedor.

Función: Convierte los objetos del modelo del Proveedor (el sistema externo o heredado) a la interfaz y el modelo interno del Cliente, protegiendo al modelo principal de la "corrupción" externa.


#### 4. Publicación Abierta de Host (Open Host Service - OHS)

Este patrón ocurre en el lado del Proveedor.

Definición: El Contexto Proveedor define una interfaz de servicio pública y bien documentada (ej., una API REST o un sistema de mensajería).

Propósito: Permite que cualquier sistema o Contexto Delimitado utilice su funcionalidad y modelo. Es la forma en que un proveedor dice: "Aquí está nuestro modelo de datos, úsenlo bajo su propia responsabilidad".

    
#### 5. Idioma Compartido (Shared Kernel)

Definición: Dos o más equipos acuerdan compartir y codificar una pequeña parte de su modelo de dominio y/o código.

Restricción: Requiere una coordinación constante y obligatoria entre los equipos, ya que cualquier cambio en ese núcleo compartido afecta a ambos contextos. Se usa con mucha moderación, solo cuando el costo de duplicar la lógica es mayor que el costo de la coordinación


#### 6. Socios (Partnership)

Definición: Dos Contextos y sus equipos trabajan en una dependencia mutua, donde el éxito de uno está ligado al éxito del otro. 

La relación es bilateral y requiere un esfuerzo conjunto de coordinación para cambios de interfaz o planificación de funcionalidad.
    


## Anti-Corruption Layer

Patrón de diseño fundamental en el Modelado Estratégico de Domain-Driven Design

Su principal función es aislar un Contexto Delimitado (Bounded Context) del modelo de otro Contexto Delimitado (generalmente un sistema externo o heredado) que posee un diseño o una calidad deficiente.


### Propósito

##### Actúa como una capa de traducción defensiva entre su sistema (el Cliente) y un sistema externo (el Proveedor).

#### Aislamiento: El objetivo es evitar que los conceptos, la estructura de datos o las inconsistencias del modelo externo "corrompan" el modelo limpio y bien definido de su propio Contexto Delimitado.

#### Traducción: La ACL se encarga de convertir los objetos y las estructuras de datos del Proveedor al Lenguaje Ubicuo (UL) y a las entidades internas del Cliente, y viceversa.


#### Partes

Cliente (Su Sistema)	Su Contexto Delimitado, que tiene un modelo de dominio bien definido y busca protegerlo. Solo interactúa con el ACL.

Proveedor (Sistema Externo)	El sistema con el que debe integrarse, que a menudo tiene un modelo distinto, confuso o heredado.

Capa Anticorrupción (ACL)	La capa intermedia que contiene la lógica de traducción y mapeo. La implementación a menudo utiliza patrones como Adaptadores y Mappers.


### Funcionamiento: opera mediante la inversión de dependencias y la traducción de conceptos:

#### 1. Definición de Interfaz: Su modelo (el Cliente) define una interfaz de Puerto de Salida (por ejemplo, IRepositorioDeClientesExternos).

Esta interfaz usa los términos y objetos del UL del Cliente.


#### 2. Implementación del ACL: El ACL implementa esta interfaz. 

Cuando el núcleo del sistema pide un objeto (ej., clienteExternoRepo.obtenerCliente(id)), el ACL:

Llama al API del sistema Proveedor.

Recibe los datos en el formato del Proveedor (ej., un objeto LegacyCustomer).

Traduce y mapea el LegacyCustomer a un objeto o Entidad del Contexto Cliente (ej., DatosClienteMapeados).

Devuelve el objeto mapeado.


#### 3. Aislamiento Total: Si el modelo del Proveedor cambia (ej., cambian nombres de campos o la estructura), solo el ACL necesita modificarse.

El código del núcleo de su Contexto Delimitado permanece intacto.


### Uso

##### !!! Es indispensable en las siguientes situaciones

#### Integración con Sistemas Heredados (Legacy Systems): Cuando se necesita interactuar con código antiguo cuyo modelo no se alinea con el nuevo diseño DDD.

#### Integración con Paquetes de Software Comercial (COTS): Cuando se utiliza software de terceros que tiene una API rígida o no alineada con su dominio.

#### Relación de Integración Unidireccional: Se utiliza a menudo en la relación Cliente-Proveedor cuando el Cliente no tiene el poder de influir en el diseño del Proveedor y debe protegerse de sus decisiones.



# Arquitectura Hexagonal

También conocida como la Arquitectura de Puertos y Adaptadores (Ports and Adapters)

Es un patrón de diseño de software cuyo objetivo principal es crear sistemas desacoplados, testeables e independientes de la tecnología.


"Hexagonal" es puramente una convención gráfica

Deja espacio para ilustrar las distintas interfaces de entrada y salida

No implica que deba haber exactamente seis puertos.


## Principio: Nucleo de la app

Es la Lógica de Negocio (o Dominio), la cual se aísla de todos los componentes externos, como la interfaz de usuario, las bases de datos o los servicios web.


### 1. El Hexágono (El Núcleo)

Capa central y más protegida
 
##### Lógica de Dominio: Las Entidades, Objetos de Valor, Agregados y todas las reglas de negocio de la aplicación (los conceptos centrales de DDD).

##### Casos de Uso (Application Layer): La lógica de la aplicación que orquesta el flujo de trabajo (ejecuta un caso de uso como "Crear Nuevo Pedido"), pero que aún no sabe nada sobre tecnología externa.


### 2. La Frontera y la Inversión de Dependencia

El Hexágono define la frontera con el mundo exterior.

Para comunicarse, se utiliza el Principio de Inversión de Dependencia, que asegura que las dependencias siempre apunten hacia adentro, hacia el núcleo.


## Puertos y Adaptadores

Permiten al núcleo interactuar con el mundo exterior sin estar acoplado a él:


### 1. Puertos (Ports)

#### Un Puerto es simplemente una interfaz o un API (Application Programming Interface) que define un contrato de comunicación. 

##### Los Puertos viven dentro del Hexágono.


### 2. Adaptadores (Adapters)

#### Un Adaptador es la implementación concreta de un Puerto.

##### Los Adaptadores viven fuera del Hexágono (en la capa de Infraestructura) y tienen un conocimiento técnico específico.

Tipo de Adaptador |	Rol | Tecnología

Adaptador Primario (Driver)	| Llama al Puerto de Entrada | Un controlador web (HTTP) o una interfaz gráfica de usuario (GUI).

Adaptador Secundario (Driven) |	Implementa el Puerto de Salida. | Un repositorio (SQL, NoSQL) o un cliente de servicio externo (API REST).




# CQRS (Command Query Responsibility Segregation)

##### Patrón que separa radicalmente las operaciones de lectura de datos (Queries) de las operaciones de escritura/modificación de datos (Commands).


## Principio Separar Lectura y Escritura

##### Arquitectura tradicional (como la que se ve comúnmente en el CRUD), la misma capa de código y el mismo modelo de datos se utilizan para leer y escribir

#### CQRS rompe con esto y establece dos modelos de datos y dos pilas de código completamente independientes:


### 1. El Lado de los Comandos (Commands)

Propósito: Manejar las solicitudes de cambio (escritura).

Función: Los comandos son órdenes inmutables que representan la intención del usuario de cambiar el sistema (ej., CrearPedidoCommand, ActualizarStockCommand).

Modelo de Datos: Utiliza un modelo de dominio orientado a la escritura (a menudo siguiendo los principios de DDD, con Agregados y Entidades) que garantiza la consistencia y las reglas de negocio

Esta es la única parte del sistema que modifica la base de datos maestra.


### 2. 2. El Lado de las Consultas (Queries)

Propósito: Manejar las solicitudes de lectura.

Función: Las consultas son solicitudes simples que buscan datos y no modifican el estado del sistema. 

Devuelven Objetos de Transferencia de Datos (DTOs).

Modelo de Datos: Utiliza un modelo de datos orientado a la lectura y a la vista (a menudo desnormalizado o altamente optimizado) que prioriza la velocidad y la simplicidad.
    

### Bases de Datos Separadas

CQRS separa físicamente las bases de datos para cada lado:

#### Base de Datos de Escritura (Modelo de Dominio): Es la fuente de la verdad.

Está optimizada para transacciones y consistencia (a menudo SQL o NoSQL transaccional).

Aquí es donde reside el Modelo de Dominio (los Agregados).


#### Base de Datos de Lectura (Modelo de Lectura): Es una o varias réplicas optimizadas para consultas complejas o específicas de la interfaz de usuario.

Puede ser cualquier cosa que proporcione rendimiento: vistas materializadas, caches, almacenes NoSQL, etc.


## Flujo Típico con CQRS

##### Cuando las bases de datos están separadas, se necesita un mecanismo para sincronizarlas:

1. Comando: El usuario envía un CrearPedidoCommand.

2. Manejador: El Manejador de Comandos ejecuta la lógica de negocio usando el Modelo de Dominio (Agregados).

3. Persistencia: Se guarda el nuevo estado en la Base de Datos de Escritura.

4. Evento: La Base de Datos de Escritura (o el Agregado) emite un Evento de Dominio (ej., PedidoCreadoEvent).

5. Sincronización: Un Manejador de Eventos consume este evento y actualiza la Base de Datos de Lectura, transformando el formato transaccional en el formato optimizado para la lectura.

6. Consulta: Cuando otro usuario pide ver el pedido, la Consulta se ejecuta directamente contra la Base de Datos de Lectura, obteniendo los datos rápidamente.


## Beneficios y Complejidades

Escalabilidad	Se puede escalar cada lado de forma independiente. Las lecturas (que suelen ser más frecuentes) pueden usar recursos dedicados.	Mayor complejidad de infraestructura y deploy.

Rendimiento	El modelo de lectura puede ser altamente optimizado para consultas rápidas, ya que no tiene que preocuparse por la consistencia transaccional.	Introduce Consistencia Eventual (los datos de lectura pueden tardar un breve tiempo en reflejar la última escritura).

Simplicidad del Modelo	Cada modelo es mucho más simple y enfocado: el de escritura se centra en la lógica, el de lectura en la presentación.	Requiere un sistema de mensajería o eventos robusto para la sincronización


##### CQRS se aplica mejor en sistemas complejos (como los que usan DDD) donde la lógica de escritura es intrincada, o donde hay requisitos extremos de escalabilidad y rendimiento de lectura.


## DDD en TypeScript

La lógica y las reglas (validación de nombre, método desactivar()) residen en el Dominio (CursoNombre, Curso).

La interfaz de acceso a datos (CursoRepository) está en el Dominio, pero la implementación está en la Infraestructura.

El flujo de trabajo (DesactivarCursoService) reside en la capa de Aplicación.


### Agregado: Curso

1. Objeto de Valor (Value Object): CursoNombre

Un nombre tiene que ser validado para asegurar que cumple con una regla de negocio.

```
// /src/domain/value-objects/CursoNombre.ts

export class CursoNombre {
    readonly valor: string;

    constructor(nombre: string) {
        if (nombre.length < 5 || nombre.length > 100) {
            throw new Error("El nombre del curso debe tener entre 5 y 100 caracteres.");
        }
        this.valor = nombre;
    }

    // Método para la igualdad basada en valor
    equals(otro: CursoNombre): boolean {
        return this.valor === otro.valor;
    }
}
```


2. Entidad Raíz (Aggregate Root): Curso

La Entidad Curso es la Raíz del Agregado. 

Centraliza toda la lógica de negocio y protege sus invariantes.

```
// /src/domain/entities/Curso.ts

import { CursoNombre } from '../value-objects/CursoNombre';
import { CursoID } from '../value-objects/CursoID'; // Asume que existe

export class Curso {
    private id: CursoID;
    private nombre: CursoNombre;
    private activo: boolean;
    private fechaCreacion: Date;
    // Podría tener Entidades internas, como una colección de Lecciones.

    constructor(id: CursoID, nombre: CursoNombre, fechaCreacion: Date, activo: boolean = true) {
        this.id = id;
        this.nombre = nombre;
        this.activo = activo;
        this.fechaCreacion = fechaCreacion;
    }

    // Lógica de Dominio: Invariante protegido por la Raíz
    public desactivar(): void {
        if (!this.activo) {
            throw new Error("El curso ya está inactivo.");
        }
        // *Regla de Consistencia:* Desactivar el curso si no tiene estudiantes activos, por ejemplo.
        // this.verificarEstudiantesActivos(); 
        
        this.activo = false;
        // Opcional: Podría generar un Evento de Dominio: new CursoDesactivadoDomainEvent(...)
    }

    public getID(): CursoID {
        return this.id;
    }

    public getNombre(): CursoNombre {
        return this.nombre;
    }
    
    // Método estático para reconstruir el objeto desde la persistencia
    public static fromPrimitives(primitives: { id: string, nombre: string, activo: boolean, fechaCreacion: Date }): Curso {
        return new Curso(
            new CursoID(primitives.id),
            new CursoNombre(primitives.nombre),
            primitives.fechaCreacion,
            primitives.activo
        );
    }
}
```


3. Repositorio (Repository)

La interfaz del Repositorio se define en el Dominio para aislarlo de la infraestructura.

```
// /src/domain/repositories/CursoRepository.ts

import { Curso } from '../entities/Curso';
import { CursoID } from '../value-objects/CursoID';

// La interfaz (el Contrato)
export interface CursoRepository {
    // El repositorio solo trabaja con la Raíz del Agregado
    guardar(curso: Curso): Promise<void>;
    obtenerPorId(id: CursoID): Promise<Curso | null>;
}

// Nota: La implementación real (ej. MySqlCursoRepository) iría en la capa de Infraestructura.
```


4. Servicio de Aplicación (Application Service)

Este orquesta el flujo de trabajo (el caso de uso) y utiliza el Repositorio.

```
// /src/application/services/DesactivarCursoService.ts

import { CursoRepository } from '../../domain/repositories/CursoRepository';
import { CursoID } from '../../domain/value-objects/CursoID';

export class DesactivarCursoService {
    private cursoRepository: CursoRepository;

    constructor(repo: CursoRepository) {
        this.cursoRepository = repo;
    }

    // Este es el Caso de Uso (el punto de entrada de la aplicación)
    public async ejecutar(cursoId: string): Promise<void> {
        const id = new CursoID(cursoId);
        
        // 1. Obtener el Agregado (usando el Repositorio)
        const curso = await this.cursoRepository.obtenerPorId(id);

        if (!curso) {
            throw new Error(`Curso con ID ${cursoId} no encontrado.`);
        }

        // 2. Ejecutar la Lógica de Dominio (llamando a un método en la Raíz)
        curso.desactivar(); 

        // 3. Persistir el Agregado (usando el Repositorio, a menudo dentro de un Unit of Work)
        await this.cursoRepository.guardar(curso);
    }
}
```


## Entity

##### Objeto que tiene una identidad única y que encapsula la lógica de negocio relacionada con ese objeto.


### Ej: Producto

Es identificada por su id.

Su atributo stock puede cambiar, pero seguirá siendo el mismo producto

Además, encapsula la lógica para disminuirStock(), asegurando que el negocio no permita stock negativo.

```
// Asumimos que ProductoID y CategoriaID son Value Objects (Objetos de Valor)
// para encapsular la validación y evitar usar strings primitivos.

interface ProductoProps {
    nombre: string;
    stock: number;
    precio: number;
    categoriaId: string; 
}

export class Producto {
    // La identidad es privada para que solo se pueda modificar a través de métodos
    private id: string;
    
    // Atributos de la Entidad
    private props: ProductoProps;

    // --- Constructor: Usado para crear una nueva instancia ---
    private constructor(id: string, props: ProductoProps) {
        this.id = id;
        this.props = props;
    }

    // Método estático para la creación o reconstrucción de la Entidad
    public static crear(id: string, props: ProductoProps): Producto {
        // Aquí podría ir alguna validación inicial del estado
        if (props.stock < 0) {
            throw new Error("El stock inicial no puede ser negativo.");
        }
        return new Producto(id, props);
    }

    // --- Lógica de Dominio: Mutación de la Entidad (Comportamiento) ---

    public disminuirStock(cantidad: number): void {
        if (cantidad <= 0) {
            throw new Error("La cantidad a disminuir debe ser positiva.");
        }
        
        // *Regla de Consistencia (Invariante):* No permitir stock negativo
        if (this.props.stock - cantidad < 0) {
            throw new Error(`Stock insuficiente para el producto ${this.props.nombre}.`);
        }

        this.props.stock -= cantidad;
        
        // Opcional: Si el stock llega a un límite crítico, podría emitir un Domain Event
        // if (this.props.stock <= 5) {
        //     this.addDomainEvent(new StockCriticoEvent(this.id));
        // }
    }

    // --- Acceso a la Identidad y Atributos (Getters) ---

    public getID(): string {
        return this.id;
    }

    public getStock(): number {
        return this.props.stock;
    }

    public getNombre(): string {
        return this.props.nombre;
    }

    // Dos entidades son iguales si sus IDs son iguales.
    public equals(otro: Producto): boolean {
        return otro.id === this.id;
    }
}
```

1. Identidad Fija (id): La Entidad Producto siempre se identifica por su id. Incluso si cambiamos el nombre o el precio, sigue siendo el mismo producto.

2. Mutabilidad Controlada: El estado (stock) es privado y solo se puede cambiar a través del método público disminuirStock().

3. Encapsulación de Lógica: El método disminuirStock() encapsula la regla de negocio fundamental: nunca permitir stock negativo. Esta es la principal diferencia con una simple estructura de datos (Data Transfer Object o DTO).


## Value Object en TypeScript

##### Modela un concepto descriptivo del dominio y se define por sus atributos, no por una identidad única.

1. No tienen ID: La clase Direccion no tiene un campo id. Su identidad depende de sus valores.

2. Inmutabilidad: Las propiedades son de solo lectura (readonly). El método conNuevoCodigoPostal demuestra cómo "modificar" un VO: se crea una nueva instancia en lugar de cambiar la existente.

3. Igualdad Basada en Valor: El método equals() es la prueba de fuego de un VO. Dos direcciones son iguales si todos sus componentes coinciden, no si son el mismo objeto en memoria.

4. Encapsulación de Reglas: La lógica de validación (ej. el largo del código postal) está centralizada en el constructor, asegurando que una Direccion siempre sea válida en el Modelo de Dominio.


### Ej: Dirección

El propósito de este VO es encapsular la lógica y las reglas de validación relacionadas con una dirección postal, asegurando que siempre sea un objeto válido y coherente.

```
// /src/domain/value-objects/Direccion.ts

interface DireccionProps {
    calle: string;
    ciudad: string;
    codigoPostal: string;
    pais: string;
}

export class Direccion {
    // Los atributos deben ser inmutables (solo lectura)
    readonly calle: string;
    readonly ciudad: string;
    readonly codigoPostal: string;
    readonly pais: string;

    constructor(props: DireccionProps) {
        // 1. Encapsulación de la Lógica de Dominio: Validación
        this.validar(props); 
        
        // 2. Inicialización de Propiedades
        this.calle = props.calle.trim();
        this.ciudad = props.ciudad.trim();
        this.codigoPostal = props.codigoPostal.trim();
        this.pais = props.pais.trim();
    }

    private validar(props: DireccionProps): void {
        if (!props.calle || !props.ciudad || !props.codigoPostal || !props.pais) {
            throw new Error("Todos los campos de la dirección son obligatorios.");
        }
        if (props.codigoPostal.length < 4) {
            throw new Error("El código postal debe tener al menos 4 caracteres.");
        }
        // ... otras reglas como formatos específicos por país.
    }

    // 3. Método para la Igualdad Basada en Valor (Invariante Clave)
    /**
     * Dos direcciones son iguales si todos sus atributos son idénticos.
     */
    public equals(otro: Direccion): boolean {
        return (
            otro.calle === this.calle &&
            otro.ciudad === this.ciudad &&
            otro.codigoPostal === this.codigoPostal &&
            otro.pais === this.pais
        );
    }

    // 4. Inmutabilidad (Opcional, pero muy recomendado)
    /**
     * Método para obtener una nueva Dirección con un cambio, sin modificar la actual.
     */
    public conNuevoCodigoPostal(nuevoCP: string): Direccion {
        return new Direccion({
            ...this,
            codigoPostal: nuevoCP
        });
    }
}
```


## Domain Service

##### Encapsular la lógica de negocio que es importante para el dominio pero que no pertenece inherentemente a una Entidad o un Objeto de Valor

##### Porque involucra la coordinación de múltiples Agregados.


### Ej: ServicioDeTransferenciaDeFondos

##### Coordina la lógica entre dos Entidades Cuenta (que asumimos son Raíces de Agregado diferentes).

Asumimos Entidad Cuenta (que encapsula retirar() y depositar()) y su CuentaRepository.

El servicio implementa la regla de negocio: "transferir dinero de la cuenta A a la cuenta B".


#### 1. Interfaces y Entidades Requeridas (Asunciones)

##### !!! Para el dominio del servicio, necesitamos dos interfaces que representen las dependencias que el servicio usará:

```
// /src/domain/entities/Cuenta.ts (Simplificado)
export interface Cuenta {
    getID(): string;
    retirar(monto: number): void;
    depositar(monto: number): void;
}

// /src/domain/repositories/CuentaRepository.ts (Interfaz del Repositorio)
export interface CuentaRepository {
    obtenerPorId(id: string): Promise<Cuenta | null>;
    guardar(cuenta: Cuenta): Promise<void>;
}
```


#### 2. El Servicio de Dominio (ServicioDeTransferenciaDeFondos.ts)

Este servicio reside en la capa de Dominio porque encapsula una regla de negocio clave. 

Recibe las dependencias (los Repositorios) a través del constructor.

```
// /src/domain/services/ServicioDeTransferenciaDeFondos.ts

import { Cuenta } from '../entities/Cuenta';
import { CuentaRepository } from '../repositories/CuentaRepository';

// El Servicio de Dominio
export class ServicioDeTransferenciaDeFondos {
    private cuentaRepository: CuentaRepository;

    // Inyección de dependencias a través del constructor (Dependencia de Repositorios)
    constructor(repo: CuentaRepository) {
        this.cuentaRepository = repo;
    }

    /**
     * Coordina la lógica de negocio para transferir fondos entre dos cuentas.
     * @param origenId ID de la cuenta que envía el dinero.
     * @param destinoId ID de la cuenta que recibe el dinero.
     * @param monto Cantidad a transferir.
     */
    public async ejecutar(origenId: string, destinoId: string, monto: number): Promise<void> {
        if (monto <= 0) {
            throw new Error("El monto de la transferencia debe ser positivo.");
        }

        // 1. Obtener los Agregados (Cuentas)
        const cuentaOrigen = await this.cuentaRepository.obtenerPorId(origenId);
        const cuentaDestino = await this.cuentaRepository.obtenerPorId(destinoId);

        if (!cuentaOrigen) {
            throw new Error(`Cuenta origen ${origenId} no encontrada.`);
        }
        if (!cuentaDestino) {
            throw new Error(`Cuenta destino ${destinoId} no encontrada.`);
        }

        // 2. Ejecutar la Lógica en las Entidades (Agregados)
        try {
            // La Entidad Cuenta asegura que no haya saldo negativo, por ejemplo.
            cuentaOrigen.retirar(monto);
            cuentaDestino.depositar(monto);
        } catch (error) {
            // Si falla la lógica interna (ej. saldo insuficiente), se propaga.
            throw error;
        }

        // 3. Persistir los Cambios (Coordinación)
        // Nota: En la implementación real, esta lógica se envuelve en un Unit of Work
        // en la capa de Aplicación para garantizar que ambos 'guardar' sean atómicos.
        await this.cuentaRepository.guardar(cuentaOrigen);
        await this.cuentaRepository.guardar(cuentaDestino);

        // Opcional: Podría emitir un Domain Event: new FondosTransferidosEvent(...)
    }
}
```

Coordinación de Agregados: La operación ejecutar manipula dos Agregados (cuentaOrigen y cuentaDestino) que no deben referenciarse directamente, haciendo que la lógica sea una responsabilidad del servicio, no de una sola Entidad.

Sin Estado Propio: El ServicioDeTransferenciaDeFondos no tiene atributos que representen datos persistentes (no es una Entidad). Su única función es la ejecución de una acción de negocio.

Dependencia del Repositorio: Necesita los Repositorios para obtener los Agregados necesarios, pero se enfoca en el qué (la lógica de transferencia), no en el cómo de la persistencia (que es trabajo de la Capa de Aplicación/Infraestructura).


## Aggregate

##### Clúster de entidades y objetos de valor que se tratan como una única unidad transaccional para mantener la consistencia.

##### El Agregado tiene una Raíz del Agregado (Aggregate Root) que es el único punto de acceso externo.


### Ej Agregado CarritoDeCompras

con su Raíz (CarritoDeCompras) y una Entidad interna (ItemDeCarrito).

El Agregado CarritoDeCompras garantiza que todas las operaciones sobre los ítems dentro del carrito (ItemDeCarrito) mantengan la consistencia del carrito en su conjunto.


1. Entidad Interna: ItemDeCarrito

Esta entidad no tiene un Repositorio propio y solo puede existir dentro del CarritoDeCompras.

```
// /src/domain/entities/ItemDeCarrito.ts

export class ItemDeCarrito {
    // ID local para rastreo interno, no necesariamente global
    private id: string; 
    private productoId: string; // Referencia por ID a otro Agregado (Producto)
    private cantidad: number;

    constructor(id: string, productoId: string, cantidad: number) {
        if (cantidad <= 0) {
            throw new Error("La cantidad debe ser mayor a cero.");
        }
        this.id = id;
        this.productoId = productoId;
        this.cantidad = cantidad;
    }
    
    // Lógica interna
    public aumentarCantidad(monto: number): void {
        this.cantidad += monto;
    }

    // Getters para exponer datos (sin exponer la posibilidad de mutación directa)
    public getID(): string { return this.id; }
    public getCantidad(): number { return this.cantidad; }
    public getProductoId(): string { return this.productoId; }
}
```


2. Raíz del Agregado: CarritoDeCompras

La Raíz del Agregado encapsula la colección de ítems y protege la consistencia de todo el Agregado.

Una Sola Raíz: El CarritoDeCompras es la única entidad que tiene un Repositorio asociado. Otros Agregados (o la Capa de Aplicación) solo interactúan con un carrito llamando a sus métodos (ej., carrito.agregarItem(...)).

Integridad Transaccional: Cuando la Capa de Aplicación llama a carritoRepository.guardar(carrito), la base de datos guarda la Raíz y todos sus ítems internos (ItemDeCarrito) en una única transacción.

Lógica Encapsulada: El método agregarItem gestiona la lógica de buscar un ítem existente o crear uno nuevo. Esta es la forma en que la Raíz protege las reglas del conjunto.

```
// /src/domain/aggregates/CarritoDeCompras.ts

import { ItemDeCarrito } from '../entities/ItemDeCarrito';

export class CarritoDeCompras {
    private id: string; // ID de la Raíz (único y persistente)
    private clienteId: string; // Referencia por ID a otro Agregado (Cliente)
    private items: ItemDeCarrito[] = [];
    private ultimaActualizacion: Date;

    // --- Constructor ---
    private constructor(id: string, clienteId: string, items: ItemDeCarrito[] = []) {
        this.id = id;
        this.clienteId = clienteId;
        this.items = items;
        this.ultimaActualizacion = new Date();
    }

    // Método de creación (Factory)
    public static crearNuevo(id: string, clienteId: string): CarritoDeCompras {
        return new CarritoDeCompras(id, clienteId);
    }

    // --- Lógica de Dominio Centralizada en la Raíz ---
    
    /**
     * Añade un nuevo ítem o incrementa la cantidad si ya existe.
     * La lógica está en la Raíz para mantener la consistencia de la colección.
     */
    public agregarItem(productoId: string, cantidad: number): void {
        const itemExistente = this.items.find(item => item.getProductoId() === productoId);
        
        if (itemExistente) {
            // Si existe, usamos la lógica interna de la Entidad ItemDeCarrito
            itemExistente.aumentarCantidad(cantidad); 
        } else {
            // Si no existe, creamos una nueva Entidad interna
            const nuevoId = Math.random().toString(36).substring(2, 9); // ID simple para el ejemplo
            this.items.push(new ItemDeCarrito(nuevoId, productoId, cantidad));
        }

        // Se actualiza el estado transaccional
        this.ultimaActualizacion = new Date();
    }

    /**
     * Vacía el carrito, asegurando la limpieza de todo el Agregado.
     */
    public vaciar(): void {
        this.items = [];
        this.ultimaActualizacion = new Date();
        // Opcional: Emitir un Evento de Dominio: new CarritoVaciadoEvent(...)
    }

    // --- Acceso Controlado (Getters) ---
    public getID(): string { return this.id; }
    public getClienteId(): string { return this.clienteId; }
    public getItems(): readonly ItemDeCarrito[] { 
        // Devolvemos una copia para evitar la mutación externa directa de la colección
        return this.items; 
    }
}
```


## Aggregate Root

Entidad principal de un Agregado que sirve como el único punto de acceso

Su propósito es garantizar la consistencia de todos los objetos que contiene.


### Ej: Entidad Pedido actuando como la Raíz del Agregado

Asumimos que ItemDePedido es una Entidad interna y Monto es un Objeto de Valor.

##### !!! El Pedido es la Raíz. Cualquier cambio en sus ítems internos o su estado debe realizarse a través de sus métodos.

1. Identidad y Acceso: La propiedad id es la clave. El Repositorio solo tendría el método obtenerPedidoPorId(id) y devolvería el objeto Pedido completo.

2. Encapsulación de Lógica: Las reglas de negocio (como no modificar un pedido pagado) están codificadas en los métodos de la Raíz (agregarItem, marcarComoPagado). Si la lógica no pasa la validación, la Raíz lanza una excepción y el estado del Agregado se mantiene consistente.

3. Protección de Objetos Internos: No se proporcionan métodos para acceder o modificar directamente las Entidades ItemDePedido desde fuera. La manipulación se realiza exclusivamente a través de la Raíz, garantizando que el Pedido siempre mantenga su integridad.

```
// Asumimos que estas clases ya existen en el dominio
// import { ItemDePedido } from './ItemDePedido';
// import { Monto } from '../value-objects/Monto'; 

// Simplificamos las dependencias para el ejemplo
interface ItemDePedido {
    productoId: string;
    cantidad: number;
    precioUnitario: number;
    calcularSubtotal(): number;
}

enum EstadoPedido {
    PENDIENTE = 'PENDIENTE',
    PAGADO = 'PAGADO',
    ENVIADO = 'ENVIADO'
}

export class Pedido {
    private id: string; // La identidad de la Raíz
    private clienteId: string; // Referencia por ID a otro Agregado (Cliente)
    private estado: EstadoPedido;
    private items: ItemDePedido[] = []; // Entidades internas

    // --- Constructor: Solo la Raíz puede ser creada o reconstruida directamente ---
    constructor(id: string, clienteId: string, estado: EstadoPedido = EstadoPedido.PENDIENTE) {
        this.id = id;
        this.clienteId = clienteId;
        this.estado = estado;
    }

    // --- Métodos de Consistencia (Invariantes Protegidos) ---

    public agregarItem(item: ItemDePedido): void {
        // Regla de Consistencia 1: No se puede modificar el pedido si ya ha sido pagado.
        if (this.estado !== EstadoPedido.PENDIENTE) {
            throw new Error(`No se pueden añadir ítems a un pedido en estado ${this.estado}.`);
        }
        
        // Lógica de adición de ítem (la Raíz decide cómo manejar la colección interna)
        this.items.push(item);
    }

    public marcarComoPagado(montoPagado: number): void {
        // Regla de Consistencia 2: Solo se puede marcar como pagado si está pendiente
        if (this.estado !== EstadoPedido.PENDIENTE) {
            throw new Error(`El pedido ya está en estado ${this.estado}.`);
        }
        
        // Regla de Consistencia 3: El monto debe coincidir con el total
        if (montoPagado < this.calcularTotal()) {
            throw new Error("El monto pagado es insuficiente.");
        }

        this.estado = EstadoPedido.PAGADO;
        // Opcional: Podría emitir un Domain Event aquí: new PedidoPagadoEvent(...)
    }

    // --- Getters y Cálculos ---
    
    public calcularTotal(): number {
        return this.items.reduce((total, item) => total + item.calcularSubtotal(), 0);
    }

    public getID(): string {
        return this.id;
    }

    public getEstado(): EstadoPedido {
        return this.estado;
    }

    // No se expone la colección de ítems directamente para evitar manipulación externa
    public getItems(): readonly ItemDePedido[] {
        return this.items;
    }
}
```


## Repository

Actúa como una colección en memoria para acceder a las Raíces de Agregado y aislarlas de los detalles de la base de datos.

##### El Repositorio se define primero como una interfaz en la capa de Dominio (el contrato)

##### Luego se implementa en la capa de Infraestructura (la implementación técnica).


1. El Contrato (Capa de Dominio)

La interfaz define qué puede hacer el Dominio. 

Solo trabaja con la Raíz del Agregado (Pedido en este caso).

```
// /src/domain/repositories/PedidoRepository.ts

import { Pedido } from '../aggregates/Pedido'; // Asumimos que Pedido es la Raíz del Agregado

/**
 * Define la interfaz que el Dominio requiere para acceder y persistir Pedidos.
 * No contiene detalles de la base de datos (SQL, MongoDB, etc.).
 */
export interface PedidoRepository {
    // Busca un Agregado completo por su ID
    obtenerPorId(id: string): Promise<Pedido | null>;
    
    // Persiste el Agregado completo (INSERT o UPDATE)
    guardar(pedido: Pedido): Promise<void>;

    // Opcional: Buscar pedidos que cumplan un criterio de negocio
    buscarPedidosPendientes(clienteId: string): Promise<Pedido[]>;
}
```


2. Implementación (Capa de Infraestructura)

Esta clase implementa la interfaz anterior y contiene el código específico para interactuar con la tecnología de persistencia (ej., una base de datos SQL o una colección de MongoDB).

```
// /src/infrastructure/database/SqlPedidoRepository.ts

import { PedidoRepository } from '../../domain/repositories/PedidoRepository';
import { Pedido } from '../../domain/aggregates/Pedido';
// Asumimos un cliente para la base de datos SQL
// import { SqlClient } from 'sql-library'; 

/**
 * Implementación concreta del Repositorio para una base de datos SQL.
 */
export class SqlPedidoRepository implements PedidoRepository {
    private dbClient: any; // Simulación del cliente de base de datos

    constructor(dbClient: any) {
        this.dbClient = dbClient;
    }

    // --- Implementación del Contrato ---

    public async obtenerPorId(id: string): Promise<Pedido | null> {
        // Lógica para obtener los datos del Pedido (Raíz) y sus Items (Entidades internas)
        const pedidoData = await this.dbClient.query('SELECT * FROM pedidos WHERE id = ?', [id]);
        const itemsData = await this.dbClient.query('SELECT * FROM item_pedido WHERE pedido_id = ?', [id]);

        if (!pedidoData) return null;

        // El Repositorio es responsable de reconstruir el Agregado completo
        // Se llama a un método estático o constructor de la Raíz para reconstruirlo.
        // const items = itemsData.map(data => ItemDePedido.fromPrimitives(data));
        // return Pedido.fromPrimitives(pedidoData, items); 
        
        // Retornamos un Pedido simulado para el ejemplo:
        return {
            getID: () => id,
            guardar: async () => {},
            // ... otros métodos del Agregado
        } as Pedido;
    }

    public async guardar(pedido: Pedido): Promise<void> {
        // El Repositorio maneja la lógica de persistencia del Agregado completo
        // 1. Iniciar una transacción de base de datos (clave para el Unit of Work)
        await this.dbClient.beginTransaction();
        
        try {
            // 2. Actualizar la Raíz (Pedido)
            await this.dbClient.query('UPDATE pedidos SET estado = ? WHERE id = ?', [pedido.getEstado(), pedido.getID()]);
            
            // 3. Persistir o actualizar las Entidades internas (ej. ItemsDePedido)
            // Lógica para manejar INSERTS, UPDATES y DELETES de los ítems.

            // 4. Si todo es exitoso, confirmar la transacción
            await this.dbClient.commit();
        } catch (error) {
            // Si algo falla, revertir la transacción para mantener la consistencia
            await this.dbClient.rollback();
            throw error;
        }
    }
    
    // ... implementación de buscarPedidosPendientes
}
```


## Domain Event

##### Objeto inmutable que representa algo significativo que acaba de ocurrir en el dominio


### Ej: basándose en el Agregado Pedido.

1. Definición del Evento de Dominio

El evento es una clase simple que solo contiene los datos necesarios para que otros componentes reaccionen al cambio.

##### !!! Su nombre debe estar en tiempo pasado.

```
// /src/domain/events/PedidoPagadoEvent.ts

export class PedidoPagadoEvent {
    // 1. Identificador del evento (buena práctica para auditoría)
    public readonly occurredOn: Date = new Date();
    
    // 2. Datos relevantes (solo IDs o valores, no objetos del Dominio)
    public readonly pedidoId: string;
    public readonly clienteId: string;
    public readonly montoTotal: number;

    constructor(pedidoId: string, clienteId: string, montoTotal: number) {
        this.pedidoId = pedidoId;
        this.clienteId = clienteId;
        this.montoTotal = montoTotal;
    }
}
```


2. Emisión del Evento en la Raíz del Agregado

La Raíz del Agregado (Pedido) es la única responsable de generar el evento, asegurando que la lógica de negocio se ejecute correctamente antes de anunciarlo.

```
// /src/domain/aggregates/Pedido.ts (Extracto de la Raíz del Agregado)

import { PedidoPagadoEvent } from '../events/PedidoPagadoEvent';

export class Pedido {
    private id: string;
    private clienteId: string;
    private estado: string = 'PENDIENTE';
    private items: any[] = []; // Objetos internos
    private domainEvents: PedidoPagadoEvent[] = []; // Lista para recolectar eventos

    // ... (constructor y otros métodos)

    public marcarComoPagado(montoPagado: number): void {
        if (this.estado !== 'PENDIENTE') {
            throw new Error("El pedido ya está pagado.");
        }
        if (montoPagado < this.calcularTotal()) {
            throw new Error("Monto insuficiente.");
        }

        // 1. Ejecutar la lógica de negocio y asegurar la consistencia del Agregado
        this.estado = 'PAGADO'; 

        // 2. Recolectar (Emitir) el Evento de Dominio
        const evento = new PedidoPagadoEvent(
            this.id,
            this.clienteId,
            montoPagado
        );
        this.domainEvents.push(evento);
    }
    
    // Método para que la Capa de Aplicación acceda a los eventos
    public releaseEvents(): PedidoPagadoEvent[] {
        const events = this.domainEvents;
        this.domainEvents = []; // Limpiar la lista después de la publicación
        return events;
    }
    
    public calcularTotal(): number { /* ... */ return 100; } 
}
```

3. Manejador de Eventos (Event Handler)

El Manejador de Eventos reside en la Capa de Aplicación (o a veces en la Capa de Infraestructura) y define la reacción a lo que ocurrió, desacoplando la lógica

```
// /src/application/handlers/EnviarEmailDeConfirmacionHandler.ts

import { PedidoPagadoEvent } from '../../domain/events/PedidoPagadoEvent';
// import { ServicioDeEmail } from '../../infrastructure/services/ServicioDeEmail'; // Dependencia externa

export class EnviarEmailDeConfirmacionHandler {
    private emailService: any; // Simulación del servicio de infraestructura

    constructor(emailService: any) {
        this.emailService = emailService;
    }

    // Este método reacciona al evento
    public async handle(event: PedidoPagadoEvent): Promise<void> {
        console.log(`[HANDLER] Recibido evento: Pedido Pagado ID ${event.pedidoId}`);
        
        // La lógica de reacción:
        const asunto = `Confirmación de Pago #${event.pedidoId}`;
        const cuerpo = `Gracias por su pago de $${event.montoTotal}. Su pedido está siendo procesado.`;
        
        // Uso del servicio de infraestructura para realizar la acción
        // await this.emailService.enviar(event.clienteId, asunto, cuerpo);
        
        console.log(`[HANDLER] Email de confirmación enviado al cliente ${event.clienteId}.`);
    }
}
```


4. Flujo de Aplicación (Coordinación)

La Capa de Aplicación coordina el flujo de la UoW y la publicación de eventos:

1. Capa de Aplicación: Llama al Repositorio para obtener el Pedido.

2. Capa de Aplicación: Llama a la Raíz: pedido.marcarComoPagado(100).

3. Capa de Aplicación: Llama al Repositorio para guardar el Pedido (dentro de una UoW, garantizando que el commit de la base de datos se haga).

4. Capa de Aplicación (o UoW): Después del commit, llama a pedido.releaseEvents() para obtener los eventos recolectados.

5. Capa de Aplicación: Publica el evento, disparando el EnviarEmailDeConfirmacionHandler y cualquier otro manejador que esté escuchando, de forma desacoplada. 



# Diseño de DB

## 1. Fundamentos

DB, Sistemas de Gestión de Bases de Datos (SGBD), Ventajas


Tipos de Modelos de Datos:

Jerárquico, de Red, Relacional (énfasis).

NoSQL (breve introducción: clave-valor, documental, grafo).


Terminología Relacional:

Tabla, fila (tupla/registro), columna (atributo/campo).

Dominio, grado y cardinalidad.
    

## 2. Modelado de Datos (E-R)

##### Representar los requisitos del mundo real de forma abstracta.


### Modelo Entidad-Relación

Entidades: Fuertes y débiles.

Atributos: Simples, compuestos, multivaluados, derivados.

Claves: Superclave, Clave Candidata, Clave Primaria (PK), Clave Foránea (FK).


### Relaciones:

Definición y conjuntos de roles.

Cardinalidad: Uno a Uno (1:1), Uno a Muchos (1:N), Muchos a Muchos (M:N).

Participación: Total y Parcial.
    

### Diagramas E-R:

Convenciones de notación (Chen o Crow's Foot).

Práctica: Convertir escenarios de negocio en diagramas E-R.


## 3. Modelado de Datos Lógico (Relacional)

##### Transición del modelo conceptual a un esquema relacional


### Conversión del Modelo E-R a Relacional:

Reglas para mapear entidades y relaciones (1:1, 1:N, M:N) a tablas y claves.

Manejo de herencia (generalización/especialización).


### Álgebra Relacional:

Conceptos básicos: Operadores de conjunto (unión, diferencia, intersección, producto cartesiano).

Operadores relacionales: Selección (σ), Proyección (π), Join (⋈) (natural, theta, outer).


### Cálculo Relacional:

Cálculo de tuplas y de dominio (solo como fundamento teórico para SQL).


## 4. Diseño Relacional y Normalización

##### Calidad del diseño para evitar redundancia e inconsistencias. 


### Anomalías de Actualización: Inserción, borrado y modificación


### Dependencias Funcionales (DF):

Definición, inferencia y cierre de atributos.
    

### Formas Normales (FN):

Primera Forma Normal (1NF): Atributos atómicos.

Segunda Forma Normal (2NF): Dependencia total de la clave primaria.

Tercera Forma Normal (3NF): Eliminación de dependencias transitivas.

Forma Normal de Boyce-Codd (BCNF): Una forma más estricta de 3NF.

Otras (4NF, 5NF - solo conocimiento conceptual).


### Descomposición: Descomposición con conservación de dependencias y sin pérdida de información (Join).


## 5. SQL (Structured Query Language

##### Herramienta fundamental para interactuar con bases de datos relacionales.

### Lenguaje de Definición de Datos (DDL):

CREATE (TABLE, INDEX, VIEW).

ALTER (TABLE).

DROP (TABLE, INDEX, VIEW).


### Lenguaje de Manipulación de Datos (DML):

SELECT (cláusulas FROM, WHERE, GROUP BY, HAVING, ORDER BY).

INSERT, UPDATE, DELETE.


### Consultas Avanzadas:

`**JOIN**s` (Inner, Left, Right, Full Outer).

Subconsultas (escalares, de columna, de tabla).

Funciones de agregación (COUNT, SUM, AVG, MIN, MAX).

Funciones de ventana (Window Functions).


### Lenguaje de Control de Datos (DCL) y de Transacciones (TCL):

GRANT y REVOKE (Permisos).

COMMIT, ROLLBACK, SAVEPOINT.


## 6. Implementación y Optimización Avanzada

##### Rendimiento y la integridad.


### Transacciones y Propiedades ACID:

Atomicidad, Consistencia, Islamiento, Durabilidad.


### Control de Concurrencia:

Bloqueos (Locking), Deadlocks.

Niveles de aislamiento de transacciones (ej: Read Committed, Serializable).


### Optimización de Consultas (Performance Tuning):

Índices: Tipos (B-tree, Hash, Clustered/Non-Clustered). Uso correcto de índices.

Análisis de planes de ejecución (EXPLAIN).

Desnormalización estratégica      
    

### Autenticación y Autorización.

Vistas (VIEW) para restringir acceso.

Inyección SQL (concepto y prevención


## 7. Temas Complementarios y Actuales

##### Expansión de conocimientos en tecnologías modernas.
    

### Almacenamiento de Datos (Data Warehousing):

Modelos dimensionales: Esquema Estrella y Esquema Copo de Nieve.

Conceptos ETL (Extract, Transform, Load).


### Bases de Datos NoSQL:

Introducción a los diferentes tipos (Documentales, Columnares, Grafo).

Modelo de consistencia BASE (Básicamente Disponible, Estado Suave, Consistencia Eventual) como alternativa a ACID.


### Programación en la BD

Procedimientos Almacenados (Stored Procedures) y Funciones.

Disparadores (Triggers).


## Herramientas

### SGBD Relacionales

MySQL/PostgreSQL: Excelentes opciones open-source para práctica.

SQL Server/Oracle: Usados comúnmente en entornos empresariales


### Herramientas de Modelado E-R:

Lucidchart, draw.io, o Dia.



# ORM: Mapeo Objeto-Relacional


## 1. Fundamentos

Convierte datos entre sistemas de tipos incompatibles (lenguaje orientado a objetos y bases de datos relacionales).

Ventajas: Reducción de código SQL repetitivo, seguridad (prevención de Inyección SQL), portabilidad.


### El Desajuste de Impedancia Objeto-Relacional:

Problemas de granularidad (muchas clases a pocas tablas).

Problemas de subtipos (herencia en código vs. estructura plana en tablas).

Problemas de identidad (objetos en memoria vs. claves primarias en DB).

Problemas de navegación (relaciones objeto vs. JOINs de tablas).
    

### Conceptos claves

Entidad/Modelo: Una clase que representa una tabla de la base de datos.

Repositorio/DAO: Patrón para manejar la lógica de acceso a datos.


## 2. Configuración y Mapeo Básico

##### Configurar el ORM y mapear las estructuras fundamentales.


### Configuración Inicial:

Conexión a la base de datos (string de conexión, dialecto).

Selección de un ORM específico (ej. SQLAlchemy en Python, Hibernate en Java, Entity Framework en .NET).


### Mapeo de Clases y Tablas:

Definición de clases como entidades ORM.

Mapeo de atributos de clase a columnas de tabla.

Declaración de la Clave Primaria (PK).  


### Operaciones CRUD Básicas (Data Manipulation):

Crear (Insertar): Instanciar un objeto y guardarlo.

Leer (Seleccionar): Recuperar objetos por PK, o con filtros simples.

Actualizar (Modificar): Cambiar atributos de un objeto persistido.

Eliminar (Borrar): Eliminar el objeto de la base de datos. 


### Mapeo de Tipos de Datos: Manejo de la conversión entre tipos de lenguaje (ej. datetime de Python a TIMESTAMP de SQL).


## 3. Mapeo de Relaciones (Asociaciones)

##### Manejar las relaciones entre entidades


### Tipos de Relaciones:

Uno a Uno (1:1): Mapeo de una relación que utiliza una Clave Foránea única.

Uno a Muchos (1:N): Mapeo común (ej. un Usuario tiene muchos Pedidos). Uso de listas o colecciones en el lado "Uno".

Muchos a Muchos (M:N): Uso de una Tabla de Asociación/Intermedia implícita o explícita.


### Configuración de Claves Foráneas (FK):

Definir la columna FK en la clase correspondiente.
    

### Carga de Datos Relacionados:

Carga Perezosa (Lazy Loading): Los datos relacionados se cargan solo cuando se accede a ellos (predeterminado).

Carga Ansiosa (Eager Loading): Los datos relacionados se cargan inmediatamente junto con la entidad principal (generalmente con JOIN).

Carga Selectiva: Uso de consultas separadas.    


## 4. Consultas Avanzadas y Optimización

##### Capacidades avanzadas del ORM para consultas eficientes


### Lenguajes de Consulta del ORM

Uso de Builders o métodos para construir consultas dinámicas.


### Filtros Complejos:

Cláusulas WHERE con operadores lógicos (AND, OR, NOT).

Uso de funciones de agregación y agrupamiento (Group By).

Paginación y Ordenación (LIMIT/OFFSET, ORDER BY).


### Optimización de Rendimiento:

Manejo de la carga (Lazy vs. Eager) para evitar el problema N+1 Queries (la principal fuente de lentitud en ORMs).

Consultas Nativa (SQL): Saber cuándo recurrir a SQL puro para consultas muy complejas o optimizadas.

Caching (Caché de primer y segundo nivel).


## 5. Transacciones y Persistencia

##### Integridad de los datos en la base de datos.

### Unidad de Trabajo (Unit of Work):

El concepto de que todas las operaciones dentro de una sesión se manejan como una única transacción.

El ORM rastrea los cambios a los objetos y genera el SQL apropiado.


### Transacciones ACID:

Uso de bloques transaccionales (BEGIN, COMMIT, ROLLBACK).

Manejo de la sesión/contexto de persistencia del ORM.


### Manejo de Errores y Excepciones:

Captura de errores de la base de datos (ej. violación de restricciones de unicidad o FK).


### Versionado y Concurrencia Optimista:

Uso de un campo de versión o timestamp para detectar y prevenir conflictos de actualización concurrentes.



# Diseño de Relaciones

##### !!! Cómo se definen, diseñan y optimizan las relaciones entre las tablas


## 1. Fundamentos de las Relaciones y Claves Primarias/Foráneas

##### Punto de partida para establecer cualquier vínculo entre tablas.


### Esquema Relacional:

Definición de una tabla y el concepto de un Esquema (estructura).

La relación como un vínculo semántico entre dos o más tablas


### Claves Primarias (PK):

Definición y propósito (identificación única de registros).

Propiedades: No nula y única.

Claves compuestas (PK formada por múltiples atributos).


### Claves Foráneas (FK):

Definición y propósito (establecer el vínculo entre tablas).

La FK en la tabla dependiente apunta a la PK en la tabla principal.    


### Integridad Referencial:

##### Regla esencial: Todo valor de FK debe coincidir con un valor de PK en la tabla referenciada o ser nulo.


## 2. Modelado de Relaciones (Cardinalidad y Participación)

##### Uso del Modelo Entidad-Relación (E-R) para definir el tipo de relación.


### Cardinalidad: Determina cuántas instancias de una entidad se relacionan con cuántas instancias de la otra.

#### Uno a Uno (1:1): (Ej. Un Empleado tiene un Detalle de Contacto).

	Implementación: La FK se coloca en cualquiera de las dos tablas, y se hace única.

#### Uno a Muchos (1:N): (Ej. Un Departamento tiene muchos Empleados).

	Implementación: La FK se coloca en el lado "Muchos" (Empleado).

#### Muchos a Muchos (M:N): (Ej. Un Estudiante toma muchos Cursos).

	Implementación: Se requiere una tabla intermedia (o de enlace) cuya PK es una clave compuesta formada por las FKs de ambas tablas


### Participación: Define si la participación en la relación es obligatoria u opcional.

Participación Total (Obligatoria): Indicado por una FK No Nula.

Participación Parcial (Opcional): Indicado por una FK Nula o por no existir un registro.	


## 3. Opciones de Integridad Referencial (Acciones de Borrado/Actualización)
 
##### Cómo la base de datos reacciona cuando se modifica la tabla principal.


### Restricciones de Acción (ON DELETE, ON UPDATE):

CASCADE: Propaga la acción (borra o actualiza los registros relacionados en la tabla dependiente).

RESTRICT / NO ACTION: Impide la acción si existen registros relacionados (el comportamiento más seguro).

SET NULL: Establece el valor de la FK en la tabla dependiente a NULL. (Solo si la FK acepta valores nulos).

SET DEFAULT: Establece el valor de la FK en el valor predeterminado.


### Consideraciones de Diseño:

Elegir la acción adecuada para garantizar la integridad lógica de la aplicación (ej. una orden de compra no debe borrarse si se borra un cliente).


## 4. Diseño Relacional Avanzado y Normalización

##### Asegurar que el diseño de relaciones sea eficiente y evite la redundancia


#### Dependencias Funcionales (DF): El concepto de que el valor de un atributo determina el valor de otro. 

Esto es clave para determinar dónde deben ir las columnas.


### Redundancia e Anomalías: Cómo un diseño de relaciones pobre lleva a problemas de inserción, actualización y borrado.


### Normalización y Relaciones:

Segunda Forma Normal (2NF): Se asegura que todos los atributos de una tabla dependan de la PK completa (elimina dependencias parciales). A menudo resulta en la creación de una nueva tabla y una relación 1:N.

Tercera Forma Normal (3NF): Se asegura que todos los atributos dependan directamente de la PK, no de otros atributos que no son PK (elimina dependencias transitivas). Esto crea otra nueva tabla y una relación 1:N.


## 5. Modelado de Relaciones Complejas y Flexibles

Manejo de estructuras de datos más complejas que las relaciones binarias simples.


### Relaciones Reflexivas/Recursivas:

Una tabla se relaciona consigo misma (Ej. Un Empleado es supervisado por otro Empleado).

Implementación: Una FK en la tabla apunta a la PK de la misma tabla.


### Relaciones Ternarias (Relaciones de 3 o más entidades):

Cuando una relación involucra a tres o más entidades de forma simultánea (Ej. Proveedor, Pieza, y Proyecto en una transacción).

Implementación: Usualmente se modela con una tabla intermedia que contiene tres o más FKs.


### Generalización/Especialización (Herencia):

Modelar tipos de relaciones de "es-un" (Ej. Cuenta es padre de Cuenta de Ahorros y Cuenta Corriente).

Patrones de implementación: Una tabla por jerarquía, una tabla por clase concreta, o una tabla por subclase


## Práctica

Modelado E-R: Diseñar los diagramas E-R para varios escenarios de negocio, prestando especial atención a la cardinalidad y participación.

Ejercicios de Mapeo: Convertir los diagramas E-R resultantes a código DDL (SQL), implementando correctamente las CREATE TABLE, PRIMARY KEY, FOREIGN KEY, y las acciones ON DELETE/UPDATE.



# CRUD

CRUD (Create, Read, Update, Delete) es el acrónimo fundamental en la gestión de bases de datos y el desarrollo de aplicaciones

Operaciones de persistencia


## 1. Fundamentos y Concepto de Persistencia

Contexto de las operaciones

### CRUD

Definición de las cuatro operaciones básicas: Crear (C), Leer (R), Actualizar (U), Borrar (D).

Su función como el ciclo de vida de un dato/registro en un sistema


### Persistencia de Datos:

El concepto de almacenar datos de manera duradera (no solo en memoria).

Diferencia entre persistencia y sesión


### El Rol del CRUD en la Arquitectura:

Mapeo del CRUD a los métodos HTTP en APIs RESTful (POST, GET, PUT/PATCH, DELETE).

La capa de acceso a datos (DAO/Repositorio) en el desarrollo de software.


## 2. Operación Crear (Create) y Persistencia   
    
##### Introducir nuevos datos al sistema.


### Concepto SQL: INSERT INTO.

Sintaxis básica: Especificar tabla, columnas y valores.

Inserción de múltiples registros.


### Validación de Datos:

Restricciones de base de datos (claves únicas, no nulos, check constraints).

Validación a nivel de aplicación (antes de intentar la inserción).


### Generación de Claves Primarias:

Autoincremento (AUTO_INCREMENT/IDENTITY).

UUIDs (Universally Unique Identifiers).


## 3. Operación Leer (Read) y Consulta

##### La recuperación de datos es crucial.


### Concepto SQL: SELECT.

Lectura Simple: Seleccionar todas (*) o columnas específicas.

Filtrado (WHERE): Operadores de comparación y lógicos (AND, OR).

Búsqueda (Patrones): Uso de LIKE y comodines `(%, _)`.


### Lectura Avanzada (Consultas):

Ordenación (ORDER BY): Ascendente (ASC) y Descendente (DESC).

Agregación: GROUP BY y funciones (COUNT, SUM, AVG, MIN, MAX).

Unión de Tablas (JOIN): INNER JOIN, LEFT JOIN, RIGHT JOIN para leer datos relacionales.

Paginación: Uso de LIMIT y OFFSET.


## 4. Operación Actualizar (Update)

##### Modificar datos existentes de forma segura.


### Concepto SQL: UPDATE.

Sintaxis básica: Especificar tabla, la cláusula SET (columnas a cambiar) y la cláusula WHERE.

Advertencia de Seguridad: La importancia crítica de la cláusula WHERE para evitar actualizar toda la tabla


### Actualizaciones Condicionales:

##### Uso de subconsultas o funciones en la cláusula SET.


### Transacciones:

La necesidad de encerrar las operaciones de actualización en una transacción para asegurar la atomicidad (ACID), especialmente en operaciones complejas o en múltiples tablas.


## 5. Operación Borrar (Delete)

##### Eliminar registros del sistema.


### Concepto SQL: DELETE FROM.

Sintaxis básica: Especificar tabla y la cláusula WHERE.

Advertencia de Seguridad: Al igual que UPDATE, la cláusula WHERE es fundamental. 

Un DELETE sin WHERE borra todos los registros.
    

### Integridad Referencial:

Cómo el SGBD maneja el borrado de registros que son referenciados por una Clave Foránea (FK).

Opciones de ON DELETE (CASCADE, RESTRICT, SET NULL).


### Borrado Lógico (Soft Delete):

En lugar de borrar el registro, se actualiza un campo indicador (ej. esta_activo = FALSE o fecha_eliminacion con un timestamp).

Ventajas: Auditoría y recuperación de datos.


## Práctica

Base de Datos	Almacenamiento y SQL nativo	MySQL, PostgreSQL, SQLite

Lenguaje/Framework	Lógica de la aplicación	Python (Flask/Django), Java (Spring Boot), Node.js (Express)

Capa de Abstracción	ORM o Conector de DB	SQLAlchemy, Hibernate, Mongoose


1. Crear un modelo simple (ej. Producto o Usuario).

2. Implementar una función/método para cada una de las cuatro operaciones (C, R, U, D) usando el ORM o SQL directo.

3. Desarrollar una interfaz básica (consola o web) para interactuar con estas funciones.




# APIs RESTful

## 1. Fundamentos web y Protocolo HTTP

##### Base sobre la que se construyen las APIs REST.


### Arquitectura Cliente-Servidor: Rol del cliente (navegador/aplicación) y del servidor.


### Protocolo HTTP:

Conceptos básicos: Solicitud (Request) y Respuesta (Response).

Métodos HTTP (Verbos): GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS. (Su mapeo a operaciones CRUD).

Códigos de Estado: Familiaridad con las categorías (2xx, 4xx, 5xx) y los códigos clave (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Internal Server Error).

Headers: Content-Type, Accept, Authorization, Cache-Control, etc.


### Formatos de Intercambio de Datos:

JSON (JavaScript Object Notation): Su estructura, tipos de datos y uso dominante en APIs.

XML (Mención breve). 


## 2. Fundamentos de REST

##### Filosofía de diseño detrás de las APIs RESTful.


### REST (Representational State Transfer):

Definición y su creador (Roy Fielding).

Diferencia entre REST y RESTful. 


### Principios de REST:

Uniform Interface: La API debe ser accesible de forma estándar.

Client-Server: Separación de preocupaciones.

Stateless (Sin Estado): El servidor no almacena el estado de la sesión del cliente; cada solicitud contiene toda la información necesaria.

Cacheable: Las respuestas pueden ser almacenadas en caché para mejorar el rendimiento.

Layered System (Sistema en Capas): El cliente no necesita saber si se está comunicando directamente con el servidor final o un intermediario (como un load balancer).

Code on Demand (Opcional): Posibilidad de transferir lógica ejecutable.


### Recursos (Resources): La abstracción clave de REST. 

##### !!! Todo se trata como un recurso (ej. /usuarios, /productos/123).


## Diseño Práctico de Endpoints

##### Convertir requisitos de negocio en URLs y operaciones.


### Nomenclatura de Recursos:

Usar sustantivos en plural para los recursos (ej. /libros, no /libro).

Identificación de recursos individuales con su ID (ej. /libros/10).

Recursos anidados/sub-recursos (ej. /libros/10/autores).


### Mapeo de Verbos HTTP a CRUD:

GET /recursos: Leer la colección.

GET /recursos/{id}: Leer un recurso específico.

POST /recursos: Crear un nuevo recurso.

PUT /recursos/{id}: Reemplazar completamente un recurso existente.

PATCH /recursos/{id}: Aplicar cambios parciales a un recurso existente.

DELETE /recursos/{id}: Eliminar un recurso


### Manejo de Respuestas:

Devolver el código de estado HTTP apropiado (201 para creación, 200/204 para éxito, 4xx para errores).

Incluir el recurso creado en la respuesta POST junto con el Header Location.


## 4. Seguridad y Prácticas Avanzadas

##### Temas esenciales para construir APIs robustas y seguras.


### Seguridad:

HTTPS: La necesidad de usar el protocolo seguro (TLS/SSL).

Autenticación:

	Básica: Evitarla para producción.

	Basada en Tokens (JWT): Generación, uso y validación.

	OAuth 2.0: Roles y flujos (solo conceptualmente).

Autorización: Controlar a qué recursos puede acceder un usuario autenticado.


### Versionamiento:

Estrategias de versionamiento (en la URL: /v1/recursos, o en los Headers).
    
    
### Filtrado, Ordenación y Paginación:

Uso de Query Parameters (parámetros de consulta) para funcionalidad avanzada (ej. /productos?categoria=electronica&ordenar_por=precio&limite=10).


### Idempotencia: Entender qué métodos son idempotentes (GET, PUT, DELETE) y por qué (POST no lo es).


## Práctica

1. Elegir un Framework: Seleccionar un lenguaje y framework (ej. Node.js/Express, Python/Flask/Django, Java/Spring Boot) y un SGBD (ej. PostgreSQL, MongoDB).

2. Diseño del Esquema: Diseñar un modelo de datos simple (ej. blog, tienda, lista de tareas).

3. Implementación CRUD: Construir la infraestructura de la API implementando todos los endpoints CRUD para al menos dos recursos, asegurando el correcto uso de métodos y códigos de estado.

4. Implementación de Seguridad: Añadir un sistema de autenticación básica (ej. JWT) a la API para proteger al menos un endpoint.

5. Documentación: Documentar la API usando OpenAPI (Swagger), detallando los endpoints, parámetros, modelos de datos y respuestas.




# Diseño de APIs RESTful

## 1. Cimiento Técnico de toda API REST

### Arquitectura Cliente-Servidor: Entender la comunicación y separación de responsabilidades.

### Protocolo HTTP:

Métodos (Verbos): GET, POST, PUT, DELETE, PATCH. Su propósito y uso correcto.

Códigos de Estado: Conocer las categorías (2xx, 4xx, 5xx) y los códigos esenciales (200, 201, 204, 400, 401, 403, 404, 500).

Cabeceras (Headers): Uso de Content-Type, Accept, Authorization, y Cache-Control.

### Formatos de Datos: Dominio total de JSON (estructura, tipos, payloads) y su papel como estándar de facto.


## 2. Principios y Estándares REST

Filosofía que dicta el diseño de una API RESTful.

### Concepto REST: Definición, su creador (Roy Fielding) y el objetivo de la arquitectura.


### Principios de Diseño REST:

Interfaz Uniforme: La clave para la simplicidad y visibilidad.

Sin Estado (Stateless): Cada solicitud debe ser independiente; el servidor no debe depender del estado de la sesión.

Sistema en Capas: Permite el uso de proxies, balanceadores de carga y cachés.

Cachable: Capacidad de las respuestas para ser almacenadas y reutilizadas.


### Recursos: La abstracción fundamental; todo se modela como un recurso (un sustantivo).


## 3. Diseño de Endpoints y Convenciones Prácticas

##### Pasar de un requisito de negocio a un URL concreto y una operación HTTP.

### Nomenclatura de Recursos (URL):

Uso estricto de sustantivos en plural (ej. /clientes, /productos).

Identificación de recursos individuales (ej. /clientes/{id}).

Manejo de Sub-recursos (ej. /clientes/{id}/pedidos).

Evitar verbos en las URLs (la acción está en el método HTTP).


### Mapeo CRUD a HTTP:

Creación: POST /recursos

Lectura: GET /recursos o GET /recursos/{id}

Actualización Completa: PUT /recursos/{id} (Idempotente).

Actualización Parcial: PATCH /recursos/{id} (No necesariamente Idempotente).

Borrado: DELETE /recursos/{id} (Idempotente).


### Manejo de Errores Estándar: Usar payloads de error consistentes (ej. incluyendo el código de estado, un mensaje descriptivo y, opcionalmente, una URL de documentación).


## 4. Funcionalidades Avanzadas de Consulta y Paginación

##### Proporcionar flexibilidad y eficiencia en la recuperación de datos


### Filtrado: Uso de Parámetros de Consulta (Query Parameters) para filtrar colecciones (ej. /productos?categoria=electronica).


### Ordenación: Parámetros para definir el criterio de ordenación (ej. ?ordenar_por=precio_asc).


### Paginación:

Paginación basada en Offset/Limit (ej. ?limite=20&desplazamiento=40).

Paginación basada en Cursor/Keyset para colecciones grandes (más eficiente).

Incluir metadatos de paginación en la respuesta.


### Selección de Campos (Field Selection): Permitir al cliente especificar qué campos necesita para reducir el tamaño del payload (ej. ?campos=nombre,precio).


### Relaciones e Inclusión (Deep Inclusion): Permitir al cliente incluir recursos relacionados en una sola solicitud (similar a Eager Loading en ORMs) (ej. ?incluir=autor). 


## 5. Seguridad y Gobierno de API (API Governance)

##### Asegurar la API y prepararla para la evolución a largo plazo.

### Seguridad del Transporte: Uso obligatorio de HTTPS/TLS.


### Autenticación y Autorización:

Tokens Web JSON (JWT): Implementación, claims y manejo de la expiración.

OAuth 2.0: Entender los flujos comunes (Client Credentials, Authorization Code).

Autorización: Uso de roles y permisos para controlar el acceso a endpoints y datos.


### Versionamiento:

Estrategias: En la URL (ej. /v1/clientes), o mediante Headers personalizados (Accept o X-API-Version).

Estrategia de deprecación y soporte a versiones antiguas.


### Rate Limiting (Limitación de Tasa): Restringir el número de solicitudes por cliente para prevenir abusos.


### 6. Documentación y Herramientas

##### La documentación es el contrato de la API.


### OpenAPI Specification (OAS / Swagger):

Aprender a definir la estructura de la API, los endpoints, los schemas (modelos) de solicitud y respuesta, y los mecanismos de seguridad.

Uso de herramientas de generación de documentación interactiva (Swagger UI).
    

### Herramientas de Testing:

Postman/Insomnia: Para testeo manual, colecciones y automatización básica.

Herramientas de testing unitario e integración para verificar el comportamiento del servidor.


### HATEOAS (Hypermedia As The Engine Of Application State):

Concepto: Incluir enlaces (hipermedia) en las respuestas para guiar al cliente a las acciones posibles (Ej. un recurso /pedido/123 incluye un enlace a /pedido/123/cancelar).

Implementación y por qué es el nivel más alto de madurez REST (Nivel 3 de Richardson).



# Diseño de Endpoints

##### Se centra en la uniformidad, el uso correcto de los verbos HTTP, y la estructura URL basada en recursos.


## 1. Principio Fundamental: Centrado en Recursos (Sustantivos)

##### Los endpoints deben representar recursos (entidades), no acciones. 

##### Utiliza sustantivos en plural para nombrar las colecciones.


Verbos incorrectos 	|  Correctos
/getAllUsers 		 	/usuarios
/deleteProduct/123 		/productos/123
/crearPedido			/pedidos


## 2. Mapeo Correcto de Verbos HTTP (CRUD)

##### !!! El método HTTP (verbo) define la acción, mientras que la URL define el recurso.


Propósito	Método HTTP	 URL del Endpoint	Código de Respuesta Típico

Crear (C) un nuevo recurso.	POST	/recursos	201 Created

Leer (R) una colección.	GET	/recursos	200 OK

Leer (R) un recurso específico.	GET	/recursos/123	200 OK

Actualizar (U) un recurso completo.	PUT	/recursos/123	200 OK / 204 No Content

Actualizar (U) una parte del recurso.	PATCH	/recursos/123	200 OK / 204 No Content

Borrar (D) un recurso.	DELETE	/recursos/123	204 No Content


### PUT vs. PATCH:

PUT es idempotente; reemplaza el recurso completamente. Si envías la misma solicitud dos veces, el resultado es el mismo.

PATCH es para actualizaciones parciales; solo envía los campos a modificar
    
    
## 3. Diseño de Recursos Anidados y Relaciones

Utiliza nested resources (recursos anidados) cuando un recurso existe únicamente dentro del contexto de otro recurso principal
     
Ejemplo: Los comentarios existen solo dentro de un post.

GET /posts/456/comentarios: Obtiene todos los comentarios del post 456.

POST /posts/456/comentarios: Crea un nuevo comentario para el post 456.


## 4. Uso de Parámetros de Consulta (Query Parameters) para Filtrado y Orden        

Para la funcionalidad avanzada de GET que no identifica un recurso específico, utiliza parámetros de consulta (?key=value).

Filtrado: GET /productos?categoria=electronica

Paginación: GET /productos?limite=20&desplazamiento=40

Ordenación: GET /productos?ordenar_por=precio_desc


## 5. Versionamiento (Versioning)

##### Es crucial para asegurar la compatibilidad con clientes existentes al realizar cambios. El método más común es incluir la versión en la URL:

URL Versioning: /v1/usuarios, /v2/usuarios


## 6. Manejo de Acciones No CRUD (Custom Actions)

##### Cuando una acción es puramente un procedimiento o no encaja limpiamente en CRUD (ej. "enviar correo" o "cerrar sesión"), hay dos enfoques:

1. Recurso Anidado POST: Tratar la acción como un sub-recurso que se crea.

POST /pedidos/123/cancelacion

2. Verbo + Recurso (Menos RESTful, más claro):

POST /acciones/enviar_correo (Generalmente desaconsejado para diseños estrictamente RESTful).


## 7. Codificación de Respuestas y Errores

##### !!! Devuelve JSON para los datos y usa los códigos de estado HTTP para comunicar el resultado de la operación.

Escenario	Código de Estado	Cuerpo de la Respuesta (Ej.)

Éxito (Lectura)	200 OK	{ "id": 123, "nombre": "Widget" }

Éxito (Creación)	201 Created	{ "id": 456, "nombre": "Nuevo Producto" }

Éxito (Borrado)	204 No Content	Cuerpo vacío

Error del Cliente (Datos)	400 Bad Request	{ "codigo": "INVALID_INPUT", "mensaje": "Falta el campo nombre." }

Error del Cliente (Auth)	401 Unauthorized	{ "mensaje": "Token inválido o ausente." }

Recurso No Encontrado	404 Not Found	{ "mensaje": "El recurso solicitado no existe." }




# Base de Datos


## Diseño de Entidades

Es el primer paso en el Modelado Entidad-Relación (E-R)

##### Una entidad representa un "objeto" o "concepto" del mundo real sobre el que se desea almacenar información.


### 1. Identificación de Entidades (Sustantivos Clave)

##### El primer paso es analizar el problema o los requisitos de negocio e identificar los sustantivos importantes.


#### Definición de Entidad: Una persona, lugar, cosa, evento o concepto que necesita ser rastreado.


#### Criterio de Relevancia: Pregúntate: "¿Necesito almacenar información y realizar seguimiento de instancias individuales de este concepto?" Si la respuesta es sí, es una entidad.

Ejemplo de Requisito: "Una biblioteca necesita rastrear Libros, Autores y Socios que toman prestados esos libros."

Entidades Clave: Libro, Autor, Socio.


#### Evitar Ambigüedad: Asegúrate de que la entidad sea lo suficientemente granular. Por ejemplo, en lugar de una entidad "Datos", usa "Cliente", "Producto" o "Pedido".


### 2. Definición de Atributos (Propiedades)

##### Una vez identificada la entidad, define sus características, llamadas atributos.


#### Identificación: Piensa en las propiedades que describen cada instancia de la entidad.

Entidad Libro: Título, ISBN, Año de Publicación, Número de Páginas.

Entidad Socio: Nombre, Dirección, Teléfono, Fecha de Nacimiento


#### Atributos

##### Atómico (Simple): No se puede dividir significativamente (ej. ISBN). Es la forma preferida para la mayoría de los atributos.

##### Compuesto: Se puede subdividir (ej. Dirección se compone de Calle, Ciudad, Código Postal).

##### Multivaluado: Puede tener múltiples valores para un solo registro (ej. Múltiples números de teléfono para un Socio). Nota: Los atributos multivaluados suelen indicar la necesidad de crear una nueva entidad o tabla en el modelo relacional.

##### Derivado: Su valor se puede calcular a partir de otros atributos (ej. Edad se deriva de la Fecha de Nacimiento).


### 3. Asignación de Claves (Identificadores)

##### Cada entidad debe tener una manera única de identificar cada instancia.


#### Clave Candidata: Cualquier atributo o conjunto de atributos que puede identificar de forma única un registro.

Ejemplo Entidad Libro: ISBN es una clave candidata. (Título, Autor) podría ser otra.


#### Clave Primaria (PK): La clave candidata elegida para ser el identificador principal y único de la entidad.

Criterios de Selección: Debe ser única, no nula, estable (su valor no cambia) y mínima (contener el menor número de atributos posible).


#### Clave Subrogada (Artificial): Si no existe una clave natural estable, se suele crear un identificador artificial, a menudo un número entero autoincremental (ej. Socio_ID). Esto mejora la estabilidad y el rendimiento, especialmente para las Claves Foráneas.


#### 4. Aplicación de Restricciones (Validación)

##### Establecer reglas para garantizar la calidad y la integridad de los datos.


#### Restricción de Dominio: Limita el conjunto de valores que puede tomar un atributo (ej. el atributo Estado de un pedido solo puede ser 'Pendiente', 'Enviado' o 'Entregado').

#### Restricción de Unicidad: Garantiza que un atributo o conjunto de atributos tenga valores únicos (ej. el correo electrónico de un Socio debe ser único).

#### Restricción No Nula: Fuerza a que el atributo siempre deba tener un valor (ej. el Título de un Libro no puede ser nulo).


### 5. Diagramación Conceptual (E-R)

##### Representar la entidad y sus atributos gráficamente.

```
Customer
--------
customer_id
--------
name
street
city
zip
state
country
```

En el diagrama E-R, las convenciones comunes son:

##### Entidades: Se representan con un rectángulo.

##### Atributos: Se representan con un óvalo conectado a la entidad.

##### Clave Primaria: Se subraya el nombre del atributo.


Entidad (Rectángulo)	Atributos (Óvalos)

Socio	Socio_ID (PK, Subrayado), Nombre, Dirección, Email (Único), Fecha_Nacimiento.



## Definición y diseño de las relaciones entre las entidades

Después de identificar las entidades y sus atributos en el Modelado Entidad-Relación (E-R)


### 1. Cómo se conectan las entidades 

#### Identificar Relaciones: Determinar las asociaciones significativas que existen entre dos o más entidades (ej. un Profesor imparte un Curso).

#### Asignar Nombres: Dar nombres claros a las relaciones, a menudo usando verbos.


#### Definir la Cardinalidad: Establecer el número de instancias de una entidad que pueden estar relacionadas con instancias de otra.

##### Uno a Uno (1:1): Ej. Un Jefe dirige un solo Departamento.

##### Uno a Muchos (1:N): Ej. Un Departamento tiene muchos Empleados.

##### Muchos a Muchos (M:N): Ej. Un Estudiante se inscribe en muchos Cursos.


#### Definir la Participación: Indicar si la participación de una entidad en la relación es obligatoria (Total) u opcional (Parcial).


### 2. Incorporación de Atributos a las Relaciones

##### En ciertos casos, la relación en sí misma necesita atributos para describirla. 

Ejemplo: En la relación M:N entre Estudiante y Curso (un estudiante se inscribe en un curso), la relación podría tener un atributo llamado Fecha de Inscripción o Calificación


### 3. Revisión y Refinamiento del Diagrama

##### Una vez que las entidades, atributos y relaciones están definidas, se revisa y se refina el diagrama.


#### Comprobación de Claves: Asegurar que cada entidad tenga una Clave Primaria bien definida.

#### Manejo de la Herencia: Si aplica, modelar la generalización y especialización.

#### Resolución de M:N: En la siguiente fase, el Modelado Lógico, las relaciones M:N siempre deben resolverse creando una nueva Entidad Asociativa (o Tabla de Enlace) para facilitar la implementación en bases de datos relacionales.


## Diseño de Relaciones

##### Definir cómo interactúan las entidades en tu modelo de datos.


### 1. Identificación y Nomenclatura de la Relación

#### Identificar el Vínculo: Determina qué entidades tienen una interacción significativa que deba ser rastreada (ej. un Profesor se asocia con un Curso).

#### Nomenclatura: Asigna un nombre a la relación, generalmente un verbo o una frase verbal que describa la acción o asociación (ej. IMPARTE, INSCRIBE, PERTENECE_A).

#### Roles: Opcionalmente, define el rol que desempeña cada entidad en la relación, especialmente útil en relaciones reflexivas (ej. en la relación SUPERVISA, un Empleado tiene el rol de Supervisor y otro Empleado tiene el rol de Subordinado).

 
### 2. Definición de la Cardinalidad (Máxima)

La cardinalidad especifica el número máximo de instancias de una entidad que pueden estar asociadas con una instancia de la otra entidad. 

Es el aspecto más crítico del diseño.


#### Uno a Uno (1:1):

Ejemplo: Un Jefe de Departamento dirige un Departamento, y un Departamento solo tiene un Jefe

##### Implementación: La clave foránea (FK) va en cualquiera de las dos tablas y se le añade una restricción de unicidad (UNIQUE).


#### Uno a Muchos (1:N):

Ejemplo: Un Autor escribe muchos Libros, pero un Libro es escrito por un solo Autor.
 
##### Implementación: La clave foránea (FK) se coloca en el lado "Muchos" (la entidad Libro), apuntando a la clave primaria del lado "Uno" (Autor).


#### Muchos a Muchos (M:N):

Ejemplo: Un Estudiante se inscribe en muchos Cursos, y un Curso tiene muchos Estudiantes.

##### Implementación (En el Modelo Lógico): Se resuelve creando una tercera entidad (tabla de enlace) cuyas claves primarias son las claves foráneas de las dos entidades originales.


### 3. Definición de la Participación (Mínima)

La participación especifica si la existencia de una instancia de una entidad depende de su participación en la relación.


#### Participación Total (Obligatoria):

La instancia de la entidad debe participar en la relación.

Ejemplo: Un Pedido debe estar asociado a un Cliente.

##### Implementación: La Clave Foránea (FK) se define como NO NULA (NOT NULL).


#### Participación Parcial (Opcional):

La instancia de la entidad puede existir sin participar en la relación.

Ejemplo: Un Empleado puede tener un Vehículo de la empresa (pero no es obligatorio).

##### Implementación: La Clave Foránea (FK) puede ser NULA (NULL).


### 4. Asignación de Atributos a la Relación (M:N)

Si la relación tiene propiedades que solo existen cuando las entidades están vinculadas (típicamente en M:N), estos atributos pertenecen a la relación (o a la tabla de enlace que se creará).

Ejemplo: En la relación M:N entre Estudiante y Curso, el atributo Calificación no pertenece al Estudiante ni al Curso por separado, sino a la inscripción del estudiante en ese curso específico.

Solución: Este atributo se coloca en la entidad de enlace (ej. INSCRIPCION) que resuelve el M:N.


### 5. Revisión de la Integridad Referencial

##### En el paso de implementación (Modelo Lógico)

##### Definir cómo la base de datos mantendrá la coherencia en las relaciones

##### Utilizando las acciones ON DELETE y ON UPDATE de la FK:

RESTRICT / NO ACTION: (El más seguro) Impide que se borre o actualice la clave primaria si hay registros dependientes.

CASCADE: Propaga la acción (si borras el Cliente, se borran todos sus Pedidos).

SET NULL: Permite el borrado o actualización, pero establece la FK dependiente a nulo (solo si la participación es parcial).


## Modelado Lógico

##### El paso donde se transforma el diseño conceptual de Entidad-Relación (E-R) en un esquema relacional concreto

Listo para ser implementado en un Sistema de Gestión de Bases de Datos Relacionales (SGBDR) como MySQL o PostgreSQL.

Este proceso se centra en mapear entidades y relaciones a tablas y claves.


### 1. Mapeo de Entidades a Tablas (Creación Base)

##### Cada Entidad fuerte en el modelo E-R se convierte en una Tabla en el modelo relacional.


#### 1. Entidad → Tabla: El nombre de la entidad se convierte en el nombre de la tabla (usualmente en plural, por convención).

#### 2. Atributos → Columnas: Cada atributo de la entidad se convierte en una columna de la tabla.

#### 3. Clave Primaria (PK): El atributo identificado como PK en la entidad se designa como la clave primaria de la tabla.


##### Modelo E-R -> Modelo Relacional

Entidad LIBRO	Tabla LIBROS

Atributo ISBN	Columna ISBN

PK ISBN	PRIMARY KEY (ISBN)


### 2. Mapeo de Relaciones y Cardinalidad a Claves Foráneas (FK)

##### Aquí es donde se resuelven los vínculos entre tablas utilizando Claves Foráneas (FK).


#### A. Relaciones Uno a Muchos (1:N) 

##### Regla: La Clave Foránea (FK) se coloca en el lado "Muchos".

##### Implementación: Se añade la PK de la tabla "Uno" como una nueva columna (FK) en la tabla "Muchos".

Ejemplo: DEPARTAMENTO (1) tiene EMPLEADOS (N). 

Resultado: La tabla EMPLEADOS tendrá la columna Departamento_ID (FK) que referencia a la PK de la tabla DEPARTAMENTOS.


#### B Relaciones Uno a Uno (1:1)

##### Regla: La FK se puede colocar en cualquiera de las dos tablas. A la columna FK se le debe añadir una restricción de unicidad (UNIQUE).

##### Criterio de Elección: Generalmente, se coloca la FK en la tabla con participación parcial (opcional)

O en la entidad que se consulta con menor frecuencia.


#### C Relaciones Muchos a Muchos (M:N) (Resolución Crítica)

##### Regla: Se elimina la relación M:N y se crea una tercera tabla de enlace (o asociativa).

##### Implementación:

1. Crea una nueva tabla (ej. INSCRIPCIONES para ESTUDIANTE y CURSO).

2. Esta nueva tabla contendrá las PKs de las dos entidades originales como Claves Foráneas (FK1, FK2).

3. La Clave Primaria (PK) de la nueva tabla será una clave compuesta formada por la unión de FK1 y FK2.

4. Cualquier atributo propio de la relación M:N (ej. Calificación) se convierte en una columna de esta nueva tabla


### 3. Mapeo de Atributos Especiales

#### Atributos Compuestos: Se descomponen en sus partes atómicas.

Ejemplo: El atributo Dirección se convierte en las columnas Calle, Ciudad, Codigo_Postal.


#### Atributos Multivaluados: Se resuelven creando una nueva tabla.

Ejemplo: Un EMPLEADO tiene varios Telefonos.

Resultado: Se crea la tabla TELEFONOS con dos columnas: Empleado_ID (FK) y Numero_Telefono. La PK es la clave compuesta de ambas.


#### Atributos Derivados: Usualmente no se incluyen en el modelo lógico, ya que pueden calcularse en tiempo de ejecución (ej. Edad se calcula a partir de Fecha_Nacimiento).


## 4. Normalización (Refinamiento del Diseño)

Este es el paso final para asegurar la calidad y eficiencia del modelo lógico

Se aplican las Formas Normales para eliminar redundancia e inconsistencias.


##### Aplicar 1NF, 2NF, 3NF: Revisar el diseño para asegurarse de que todas las tablas cumplen al menos con la Tercera Forma Normal (3NF).

La normalización a menudo implica descomponer una tabla grande en dos o más tablas y establecer una nueva relación 1:N entre ellas.
    
    
Una vez completados estos pasos, el Esquema Relacional está listo para ser traducido a sentencias DDL (Data Definition Language) como CREATE TABLE en SQL.


## Modelo Físico

El Modelo Lógico define qué datos existen y cómo se relacionan (tablas, columnas, claves), independientemente del software

##### El Modelo Físico define cómo y dónde se almacenarán esos datos en un sistema de base de datos específico.


### 1. Modelo Físico (Diseño Físico)

Este paso convierte el esquema relacional lógico en código de definición de datos (DDL) e incluye consideraciones específicas de rendimiento y almacenamiento:


#### Selección del SGBD: Se elige el Sistema de Gestión de Bases de Datos (ej. PostgreSQL, Oracle, SQL Server).


#### Definición de Tipos de Datos: Se seleccionan los tipos de datos exactos (ej. VARCHAR(255), INT, DATE, NUMERIC(10, 2)) y el juego de caracteres apropiado para cada columna, según las limitaciones y características del SGBD elegido.


#### Creación de Sentencias DDL: Se escriben las sentencias SQL CREATE TABLE, CREATE INDEX, CREATE VIEW, etc., para construir la base de datos.


#### Optimización de Rendimiento:

##### Índices: Se diseñan y crean índices secundarios estratégicos (además de los índices de la Clave Primaria y Foránea) para optimizar la velocidad de consulta (SELECT).

##### Particionamiento: Si la base de datos es muy grande, se puede definir cómo se dividirán las tablas grandes para mejorar la gestión y el rendimiento.

##### Clustering: Se determina cómo se almacenarán físicamente los datos en el disco (ej. tablas clustered o heap).


### 2. Implementación y Prueba

Una vez que el Modelo Físico está definido, se procede a la ejecución:

#### Implementación: Se ejecuta el script DDL en el SGBD para crear la estructura de la base de datos vacía.

#### Carga de Datos: Se importan o insertan los datos iniciales.

#### Pruebas: Se realizan pruebas de integridad de datos, rendimiento y funcionalidad para validar que el diseño cumple con los requisitos iniciales.


## Implementación y Administración Operacional

##### Una vez que has definido el "cómo" se almacenarán los datos (Modelo Físico)

El proceso se mueve de la fase de diseño a la fase de producción y mantenimiento.


### 1. Implementación de la Base de Datos 

En esta fase, el diseño físico se lleva a la práctica en el servidor de base de datos.


#### Creación del Esquema: Se ejecutan los scripts de DDL (Data Definition Language) generados en la fase física. Esto incluye la creación de:

Tablas y la asignación de tipos de datos.

Índices (PK, FK y secundarios).

Restricciones (UNIQUE, NOT NULL, CHECK).

Vistas, Stored Procedures y Triggers.


### 2. Pruebas y Optimización de Rendimiento

Antes de que la base de datos sea utilizada por la aplicación final, debe ser rigurosamente probada.

Pruebas de Integridad: Verificar que las reglas de negocio (ej. relaciones, restricciones CHECK, unicidad) se cumplen al insertar y modificar datos.

Pruebas de Rendimiento y Carga: Ejecutar consultas complejas y simular la carga de trabajo esperada para identificar cuellos de botella.

Ajuste Fino (Tuning): Basado en las pruebas, se realizan ajustes al modelo físico (ej. modificar o añadir índices adicionales, reescribir consultas complejas) para asegurar tiempos de respuesta óptimos.


### 3. Desarrollo de la Aplicación y Conectividad

##### Los desarrolladores de la aplicación conectan la lógica de negocio con la base de datos.

Capa de Acceso a Datos: Se implementa el código de la aplicación (DAO o usando un ORM) que interactúa con el esquema físico.

Integración de CRUD: Se aseguran las operaciones CRUD básicas y las consultas de negocio complejas definidas por los requisitos de la aplicación.


### 4. Operación y Mantenimiento (Administración de BD)

Una vez que la base de datos está en producción, la fase de diseño termina y comienza la fase operativa, que es continua.


#### Copia de Seguridad y Recuperación (Backup & Recovery): Establecer políticas y procedimientos regulares de backup.

#### Monitoreo y Mantenimiento: Vigilar el rendimiento, el uso de espacio, y ejecutar tareas periódicas de mantenimiento.

#### Seguridad: Administrar permisos de usuario, roles y proteger la base de datos de amenazas externas.

#### Evolución del Esquema: Gestionar los cambios futuros en el diseño (nuevas entidades, nuevos atributos) a través de un proceso controlado de migraciones de esquema.



## Nomenclatura tablas, entidades y atributos

### 1. Entidades y Tablas (Conceptual y Lógico/Físico)

Las entidades (Modelo Conceptual) se convierten en tablas (Modelos Lógico y Físico).

Se recomienda usar la misma convención para ambos.


Regla |	Entidad/Tabla |	Ejemplos |	Razón

Singular o Plural	Plural (Recomendado para Tablas)	CLIENTES, PRODUCTOS	Refleja que la tabla es una colección de registros

Notación	MAYÚSCULAS o Snake Case	PRODUCTO_FINANCIERO	La mayúscula es común en SQL; el snake case (_) mejora la legibilidad.

Evitar Prefijos	Evita prefijos de tipo	CLIENTES (No TBL_CLIENTES)	El SGBD ya sabe que es una tabla.


### 2. Nomenclatura para Atributos y Columnas

Los atributos (Modelo Conceptual) se convierten en columnas (Modelo Lógico/Físico).


Regla |	Atributo/Columna |	Ejemplos |	Razón

Forma	Singular	nombre, precio, direccion	La columna representa el valor de un solo atributo para un registro

Notación	Snake Case (Recomendado)	fecha_nacimiento, codigo_postal	Altamente legible, preferido en SQL. También se acepta Camel Case (fechaNacimiento) en entornos específicos.

Evitar Espacios	Usa guiones bajos (_)	costo_total (No costo total)	Los espacios son difíciles de manejar en SQL.


### Convenciones Específicas para Claves


##### Clave Primaria (PK): Usa el formato ID o nombre_entidad_ID.

ID, CLIENTE_ID, LIBRO_ID.


#### Clave Foránea (FK): Usa el formato nombre_tabla_singular_ID para indicar la tabla a la que hace referencia.

DEPARTAMENTO_ID (en la tabla EMPLEADOS).

CLIENTE_ID (en la tabla PEDIDOS). 


### 3. Nomenclatura para Endpoints RESTful (APIs)

##### Aunque no es parte directa del diseño de la base de datos, es crucial para la capa de API

Elemento	Regla de Nomenclatura	Ejemplos

Recursos (URLs)	Sustantivos en Plural y Minúsculas.	/clientes, /productos, /pedidos

Identificadores	Usar la clave como parte de la ruta.	/clientes/123

Parámetros	Camel Case o Snake Case en query parameters.	/clientes?fecha_creacion=2025


### 4. Resumen de Reglas Clave (Consistencia)

Consistencia es Ley: Elige un estándar (Snake Case vs. Camel Case, Singular vs. Plural para tablas) y aplícalo siempre.

Claridad antes que Brevedad: Aunque la concisión es buena, no uses abreviaturas oscuras. fecha_nacimiento es mejor que f_nac.

#### Utiliza Minúsculas: En muchos SGBD (especialmente PostgreSQL), el uso de mayúsculas puede forzar el uso de comillas dobles, lo que complica las consultas. Las minúsculas o mayúsculas consistentes son preferibles.



# Ej Entidad: desde modelo conceptual, lógico y físico

Entidad Cliente


## 1. Modelo Conceptual (Entidad)

Definimos el concepto del mundo real, sus propiedades y su identificador principal, independientemente de la tecnología.

Entidad: CLIENTE

Propósito: Representa a una persona o empresa que realiza pedidos en el sistema.

Atributos:

ID_Cliente​ (Clave Primaria, Subrayado)

Nombre

Apellido

Email (Debe ser único)

Dirección (Atributo compuesto)

Teléfonos (Atributo multivaluado)


## 2. Modelo Lógico (Tabla y Esquema Relacional) 

##### Transformamos la entidad en una tabla y sus atributos en columnas.

##### Resolvemos los atributos compuestos y multivaluados, y definimos la normalización (3NF).

##### Los atributos compuestos y multivaluados se resuelven en tablas separadas para alcanzar la 3NF.


#### Tabla Principal: CLIENTES

Columna	Tipo de Dato (Conceptual)	Restricciones	Razón

cliente_id	Entero	PK	Identificador único.

nombre	Texto	NOT NULL	Descompuesto del Nombre Completo.

apellido	Texto	NOT NULL	Descompuesto del Nombre Completo.

email	Texto	UNIQUE, NOT NULL	Se convierte en una columna atómica


#### Tablas Secundarias (Resolución)

Tabla	Columna (FK)	Razón

DIRECCIONES	cliente_id (FK)	Resuelve el atributo compuesto Dirección (1:N, un cliente tiene muchas direcciones).

TELEFONOS	cliente_id (FK)	Resuelve el atributo multivaluado Teléfonos (M:N resuelto con la tabla de enlace).


## 3. Modelo Físico (Implementación SQL)

Definimos los tipos de datos exactos según un SGBD específico (ej. PostgreSQL o MySQL) y se genera el código DDL.

```
-- Asumiendo PostgreSQL o MySQL
CREATE TABLE CLIENTES (
    cliente_id INT GENERATED ALWAYS AS IDENTITY, -- Clave artificial auto-generada
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    
    -- Definición de la Clave Primaria
    PRIMARY KEY (cliente_id)
);

-- Implementación de la tabla de direcciones (relación 1:N)
CREATE TABLE DIRECCIONES (
    direccion_id INT GENERATED ALWAYS AS IDENTITY,
    cliente_id INT NOT NULL, 
    calle VARCHAR(200) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    codigo_postal VARCHAR(10),

    PRIMARY KEY (direccion_id),
    
    -- Definición de la Clave Foránea con acciones de integridad
    FOREIGN KEY (cliente_id) REFERENCES CLIENTES(cliente_id)
        ON DELETE CASCADE -- Si se borra el cliente, se borran sus direcciones
);
```



# Ej Atributos

## 1. Conceptual:

Atributo como una característica de la entidad Cliente

Notarás que la Dirección es un atributo complejo.


Entidad: Cliente

Atributo Conceptual: Dirección

#### Tipo: Compuesto. Esto significa que puede descomponerse en partes más pequeñas (Calle, Ciudad, etc.).

Propósito: Almacenar la ubicación geográfica del cliente.


## 2. Modelo Lógico (Columnas Atómicas y Normalización)

Los atributos compuestos deben descomponerse en partes atómicas (que no pueden dividirse más).

##### Si la entidad tiene múltiples direcciones (atributo multivaluado), se aplica la normalización creando una nueva tabla.


#### A. Si un cliente solo tiene 1 Dirección (1:1)

La Dirección se descompone directamente en la tabla CLIENTES:


Columna	Tipo de Dato (Conceptual)	Restricciones	Razón

calle	Texto	NOT NULL (Si es obligatoria)	Parte atómica de la dirección.

ciudad	Texto	NOT NULL	Parte atómica de la dirección

codigo_postal	Texto	NOT NULL	Parte atómica de la dirección.


### B. Si un cliente puede tener múltiples Direcciones (1:N) 

Se crea una Tabla de Enlace (DIRECCIONES) para resolver el atributo multivaluado/compuesto, logrando la 3NF.


Tabla	Columna	Rol

DIRECCIONES	cliente_id	Clave Foránea (FK).

DIRECCIONES	calle	Columna atómica.

DIRECCIONES	ciudad	Columna atómica.


## 3. Modelo Físico (Tipos de Datos y DDL)

Asumiendo que se sigue el escenario B (múltiples direcciones) y se utiliza un SGBD como PostgreSQL o MySQL, definimos los tipos de datos exactos.

```
-- Definición de la tabla DIRECCIONES para almacenar el atributo "Dirección"
CREATE TABLE DIRECCIONES (
    direccion_id INT GENERATED ALWAYS AS IDENTITY,
    cliente_id INT NOT NULL, 
    
    -- Definición de los tipos de datos específicos para cada parte atómica
    calle VARCHAR(200) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    codigo_postal VARCHAR(10) NOT NULL,
    
    -- PK de la tabla de direcciones
    PRIMARY KEY (direccion_id),
    
    -- FK que vincula la dirección al cliente
    FOREIGN KEY (cliente_id) REFERENCES CLIENTES(cliente_id)
        ON DELETE CASCADE 
);
```


## Atributo Derivado

Conceptual

##### Definimos los atributos que se almacenarán (fecha_nacimiento) y el atributo que se derivará (edad).

Entidad: Empleado

Atributo Almacenado: Fecha_Nacimiento (La fuente de datos que se guarda en la base de datos).

Atributo Derivado: Edad

Tipo: Derivado.

Notación E-R: En muchos diagramas E-R, un atributo derivado se representa con un óvalo discontinuo.

##### Propósito: Almacenar la edad exacta de un empleado en un momento dado es imposible porque cambia constantemente. 

Por ello, se calcula en función de la fecha de nacimiento y la fecha actual.


Lógico (Columna y Regla de Negocio)

Incluye la columna que almacena el dato.

#### El atributo derivado se convierte en una regla de negocio que se ejecuta mediante una consulta o lógica de aplicación.

##### Regla: El atributo derivado (Edad) NO se incluye como columna en la tabla lógica para evitar inconsistencias y redundancia de datos.

Tabla Lógica: EMPLEADOS


Columna	Tipo de Dato (Conceptual)	Restricciones	Razón

empleado_id	Entero	PK	Identificador único

nombre	Texto	NOT NULL	Atributo base.

fecha_nacimiento	Fecha	NOT NULL	Único atributo almacenado necesario para el cálculo.

edad	N/A	N/A	Se elimina del esquema, se calcula al solicitarlo.


Físico: Implementación SQL: Cálculo

En la fase física, se implementa la tabla solo con el atributo almacenado (fecha_nacimiento)

La "Edad" se genera utilizando una función de cálculo específica del SGBD.


#### A. Definición de la Tabla (DDL)

```
-- DDL para la tabla, solo incluye la fecha de nacimiento
CREATE TABLE EMPLEADOS (
    empleado_id INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE NOT NULL
);
```


#### B. Cálculo en Consulta (SELECT)

El atributo derivado (Edad) se calcula al consultar los datos, asegurando que siempre esté actualizado.

```
SELECT
    empleado_id,
    nombre,
    fecha_nacimiento,
    -- La lógica para derivar la edad a partir de la fecha almacenada
    EXTRACT(YEAR FROM age(CURRENT_DATE, fecha_nacimiento)) AS edad_actual
FROM 
    EMPLEADOS;
```



# Ej Relación: de conceptual, lógico y físico

## Muchos a Muchos (M:N)" entre ESTUDIANTE y CURSO


### 1. Modelo Conceptual: La Relación M:N

Identificamos el vínculo, la cardinalidad y si la relación tiene atributos propios

Entidades Involucradas: ESTUDIANTE y CURSO.

Relación: SE INSCRIBE EN

#### Cardinalidad: Muchos a Muchos (M:N). Un estudiante puede tomar muchos cursos, y un curso tiene muchos estudiantes.

#### Atributo de la Relación: La relación SE INSCRIBE EN tiene un atributo propio: Calificación (la nota que el estudiante obtiene en ese curso específico).


### 2. Modelo Lógico: La Resolución de M:N

##### Las relaciones M:N deben resolverse creando una tercera tabla de enlace (o asociativa).

#### La cardinalidad de la relación se transforma en dos relaciones 1:N.

##### Nueva Entidad (Tabla de Enlace): INSCRIPCION.

#### Clave Compuesta: La PK de la nueva tabla se forma por las FKs de las dos tablas originales.


Esquema Relacional Lógico

Tabla	Clave Primaria (PK)	Clave(s) Foránea(s) (FK)	Otros Atributos	Razón

ESTUDIANTES	estudiante_id	N/A	nombre, apellido	Entidad base.

CURSOS	curso_id	N/A	nombre_curso, creditos	Entidad base.

INSCRIPCIONES  (estudiante_id, curso_id)  estudiante_id (FK a ESTUDIANTES) y curso_id (FK a CURSOS) calificacion, fecha_inscripcion   Resuelve M:N. La PK asegura que un estudiante solo pueda inscribirse una vez en un curso.


### 3. Modelo Físico: Implementación SQL

##### Definimos los tipos de datos específicos (asumiendo PostgreSQL o MySQL) y las sentencias DDL, incluyendo las restricciones de integridad referencial.

```
-- 1. Creación de la tabla ESTUDIANTES
CREATE TABLE ESTUDIANTES (
    estudiante_id INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL
);

-- 2. Creación de la tabla CURSOS
CREATE TABLE CURSOS (
    curso_id INT PRIMARY KEY,
    nombre_curso VARCHAR(100) NOT NULL,
    creditos INT
);

-- 3. Creación de la tabla de ENLACE (INSCRIPCIONES)
CREATE TABLE INSCRIPCIONES (
    -- Claves Foráneas de las tablas originales
    estudiante_id INT NOT NULL, 
    curso_id INT NOT NULL, 
    
    -- Atributo propio de la relación
    calificacion NUMERIC(3, 1),
    fecha_inscripcion DATE NOT NULL,

    -- Definición de la CLAVE COMPUESTA (La unión de las dos FKs)
    PRIMARY KEY (estudiante_id, curso_id),
    
    -- Definición de las FKs y las acciones de integridad
    FOREIGN KEY (estudiante_id) REFERENCES ESTUDIANTES(estudiante_id)
        ON DELETE CASCADE, -- Si se borra el estudiante, se borran sus inscripciones

    FOREIGN KEY (curso_id) REFERENCES CURSOS(curso_id)
        ON DELETE RESTRICT -- No permite borrar un curso si tiene inscripciones
);
```

1. Conceptual: Relación M:N (SE INSCRIBE EN) con un atributo.

2. Lógico: Transformada en una tabla de enlace (INSCRIPCIONES) con dos relaciones 1:N.

3. Físico: Implementada con la tabla INSCRIPCIONES, utilizando una Clave Compuesta para su PK y Claves Foráneas con acciones ON DELETE definidas



# Ej Módelo Conceptual

Representación más abstracta de los requisitos de una base de datos.

Su objetivo es identificar las entidades principales, sus atributos y las relaciones entre ellas, sin considerar el software ni la estructura física de las tablas.

El modelo más utilizado a nivel conceptual es el Diagrama Entidad-Relación (E-R).


## Modelar Sistema de Biblioteca

Modelar una base de datos para una pequeña biblioteca.


1. Entidades (Rectángulos)

#### Identificamos los sustantivos clave sobre los que necesitamos almacenar información:

Entidad	Propósito

LIBRO	La pieza central del inventario.

AUTOR	La persona que escribió los libros

SOCIO	La persona que toma prestados los libros.

PRÉSTAMO	La transacción que registra el préstamo de un libro


2. Atributos (Óvalos)

##### Definimos las propiedades para cada entidad

#### Incluyendo la Clave Primaria (PK), que se subraya.

LIBRO: ISBN​, Título, Año de Publicación, Número de Páginas.

AUTOR: ID_Autor​, Nombre, Apellido, Nacionalidad.

SOCIO: ID_Socio​, Nombre, Email (Uˊnico), Teléfono (Multivaluado).

PRÉSTAMO: ID_Preˊstamo​, Fecha de Préstamo, Fecha de Devolución


3. Relaciones (Rombos) y Cardinalidad

#### Definimos cómo se conectan las entidades y qué tipo de vínculo existe (cardinalidad).

Relación	Entidades	Cardinalidad	Razón

ESCRIBE	AUTOR y LIBRO	M:N	Un Autor puede escribir muchos libros, y un Libro puede tener varios autores.

REALIZA	SOCIO y PRÉSTAMO	1:N	Un Socio puede realizar muchos préstamos, pero un Préstamo pertenece a un solo socio.

INVOLUCRA	LIBRO y PRÉSTAMO	1:1	Un Préstamo registra un solo libro, y ese libro está involucrado en ese préstamo en ese momento



# Ej Módelo Lógico

Traduce el diseño conceptual (E-R) en un esquema relacional formal

#### Definiendo las tablas, columnas y las claves necesarias para la implementación.

##### Relaciones complejas (como M:N) y se establecen las Claves Foráneas (FK).

##### Se definen las tablas, sus atributos atómicos y las restricciones de claves primarias y foráneas.


1. Tablas Base (Entidades Fuertes)

#### Las entidades SOCIO, AUTOR y LIBRO se convierten en tablas


Tabla	Columnas (Atributos Atómicos)	Restricciones Clave

SOCIOS	socio_id (PK), nombre, email (UNIQUE), telefono (Separado en tabla TELEFONOS)	PRIMARY KEY (socio_id)

AUTORES	autor_id (PK), nombre, apellido, nacionalidad	PRIMARY KEY (autor_id)

LIBROS	isbn (PK), titulo, año_publicacion	PRIMARY KEY (isbn)


2. Resolución de Relaciones M:N (Tabla de Enlace)

La relación M:N entre AUTOR y LIBRO (un libro puede tener varios autores) 

#### Se resuelve mediante una tabla de enlace, AUTOR_LIBRO.


Tabla	Columnas (Atributos Atómicos)	Restricciones Clave

AUTOR_LIBRO,"autor_id (FK), isbn (FK)","PRIMARY KEY (autor_id, isbn)  FOREIGN KEY (autor_id) REFERENCES AUTORES(autor_id)  FOREIGN KEY (isbn) REFERENCES LIBROS(isbn)"


3. Relaciones 1:N y Entidades Transaccionales

#### La entidad PRÉSTAMO y la tabla de enlace (AUTOR_LIBRO) establecen las relaciones 1:N y M:N.


Tabla	Columnas (Atributos Atómicos)	Restricciones Clave

PRESTAMOS,"prestamo_id (PK), socio_id (FK), isbn (FK), fecha_prestamo, fecha_devolucion",PRIMARY KEY (prestamo_id)  FOREIGN KEY (socio_id) REFERENCES SOCIOS(socio_id)  FOREIGN KEY (isbn) REFERENCES LIBROS(isbn)

TELEFONOS,"socio_id (FK), numero (PK compuesto)","PRIMARY KEY (socio_id, numero)  FOREIGN KEY (socio_id) REFERENCES SOCIOS(socio_id)"


El modelo lógico se puede resumir mostrando las tablas y sus dependencias:

1. SOCIOS (socio_id​, nombre, email)

2. AUTORES (autor_id​, nombre, apellido)

3. LIBROS (isbn​, titulo, año_publicacion)

4. TELEFONOS (socio_id, numero​, FK a SOCIOS)

5. AUTOR_LIBRO (autor_id, isbn​, FK a AUTORES, FK a LIBROS)

6. PRESTAMOS (prestamo_id​, socio_id (FK), isbn (FK), fecha_prestamo)




# Ej Módelo Fisico

Implementación SQL

Se toma el esquema relacional lógico

Detalles específicos necesarios para el SGBD

Tipos de datos, índices en sintaxis SGBD


El Modelo Físico se centra en tres aspectos principales:

### 1. Tipos de Datos: Elegir el tipo de dato exacto para cada columna (VARCHAR, INT, DATE, etc.).

### 2. Restricciones Específicas: Definir NOT NULL, UNIQUE, la Clave Primaria (PK) y las Claves Foráneas (FK).

### 3. Rendimiento: Implementar índices adicionales para acelerar las consultas.


Tabla SOCIOS

Aquí se implementan las convenciones de almacenamiento (ej. VARCHAR con longitudes específicas).

```
CREATE TABLE SOCIOS (
    socio_id INT GENERATED ALWAYS AS IDENTITY, -- Tipo serial/autoincremental para PK
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,      -- Restricción de unicidad para el email
    fecha_registro DATE NOT NULL DEFAULT CURRENT_DATE,
    
    -- Definición de la Clave Primaria
    PRIMARY KEY (socio_id)
);

-- DISEÑO DE RENDIMIENTO: Índice para búsquedas frecuentes por apellido
CREATE INDEX idx_socios_apellido ON SOCIOS (apellido);
```


Definición de la Tabla PRESTAMOS

Esta tabla implementa una Clave Foránea (FK) para SOCIOS y define las reglas de integridad referencial.

```
CREATE TABLE PRESTAMOS (
    prestamo_id INT GENERATED ALWAYS AS IDENTITY,
    socio_id INT NOT NULL,      -- Columna FK a la tabla SOCIOS
    isbn VARCHAR(13) NOT NULL,   -- Columna FK a la tabla LIBROS (asumida)
    fecha_prestamo DATE NOT NULL,
    fecha_devolucion_prevista DATE NOT NULL,
    fecha_devolucion_real DATE,   -- Permite NULL si el libro aún no se ha devuelto
    
    -- Definición de la Clave Primaria
    PRIMARY KEY (prestamo_id),
    
    -- Restricción 1: Un socio no puede tener el mismo libro prestado dos veces al mismo tiempo
    UNIQUE (socio_id, isbn) WHERE (fecha_devolucion_real IS NULL),

    -- Clave Foránea a SOCIOS: ON DELETE CASCADE (Si se borra el socio, se borran sus préstamos)
    FOREIGN KEY (socio_id) REFERENCES SOCIOS(socio_id)
        ON DELETE CASCADE,

    -- Clave Foránea a LIBROS (Asumiendo que existe una tabla LIBROS)
    FOREIGN KEY (isbn) REFERENCES LIBROS(isbn)
        ON DELETE RESTRICT -- Impide borrar un libro si tiene préstamos activos
);

-- DISEÑO DE RENDIMIENTO: Índice para consultas que buscan préstamos por la fecha de devolución prevista
CREATE INDEX idx_prestamos_fecha_prevista ON PRESTAMOS (fecha_devolucion_prevista);
```



# Relación uno a uno

Tipo de vínculo más restrictivo

#### Una instancia de la Entidad A se relaciona con, como máximo, una instancia de la Entidad B, y viceversa

Ej: Un Empleado tiene un Pasaporte, y ese Pasaporte pertenece solo a ese Empleado.

##### Restricción de Unicidad: Para asegurar la cardinalidad 1:1, se debe aplicar una restricción UNIQUE a la columna de la FK

##### Garantizando que una instancia de la segunda tabla solo pueda ser referenciada una vez.


Si decidimos colocar la FK en la tabla PASAPORTES:

##### Tabla EMPLEADOS: Contiene la Clave Primaria (empleado_id).

Tabla PASAPORTES:

Contiene la Clave Primaria (numero_pasaporte).

##### Contiene la Clave Foránea (empleado_id) que referencia a EMPLEADOS.

A la columna empleado_id se le añade la restricción UNIQUE.

```
CREATE TABLE PASAPORTES (
    numero_pasaporte VARCHAR(50) PRIMARY KEY,
    empleado_id INT UNIQUE NOT NULL, -- Clave Foránea con la restricción UNIQUE
    fecha_emision DATE,
    
    FOREIGN KEY (empleado_id) REFERENCES EMPLEADOS(empleado_id)
);
```


### Usos del diseño 1:1

Aunque a menudo se pueden combinar en una sola tabla, la relación 1:1 se utiliza por razones de diseño y rendimiento:


#### Separación de Datos Voluminosos: Se utiliza para separar atributos que son consultados con poca frecuencia (ej. una biografía larga) de los atributos que se consultan a menudo (ej. el nombre).

Esto optimiza el rendimiento al mantener la tabla principal más pequeña.


#### Seguridad: Permite segregar la información sensible (ej. detalles de nómina o historial médico) en una tabla separada con permisos de acceso más estrictos.


#### Datos Opcionales (Participación Parcial): Si muchos registros de la Entidad A no tienen datos para la Entidad B, separarlos evita tener muchas columnas con valores NULL en la tabla principal.




# Relación uno a Muchos (1:n)

Tipo de vínculo más común y fundamental

#### Una instancia de la Entidad A puede relacionarse con cero, una o varias instancias de la Entidad B

##### Pero cada instancia de la Entidad B se relaciona con una única instancia de la Entidad A. 


#### Establece una jerarquía donde la entidad del lado "Uno" es la principal

##### La entidad del lado "Muchos" es la dependiente.

Lado "Uno" (Entidad Principal): Puede tener muchos registros relacionados.

Ejemplo: Un Departamento puede tener muchos empleados


Lado "Muchos" (Entidad Dependiente): Solo puede estar asociado con uno de los registros de la entidad principal.

Ejemplo: Un Empleado solo puede pertenecer a un departamento.
    
    
### Modelo Lógico (Clave Foránea)

Implementación directa y siempre sigue la misma regla

##### Regla: La Clave Foránea (FK) se coloca en la tabla del lado "Muchos".

##### Mecanismo: La FK en la tabla del lado "Muchos" hace referencia a la Clave Primaria (PK) de la tabla del lado "Uno".


Ej: DEPARTAMENTOS y EMPLEADOS

Tabla	Columna de la Clave	Rol de la Columna

DEPARTAMENTOS (Lado Uno),departamento_id,Clave Primaria (PK)
EMPLEADOS (Lado Muchos),empleado_id,Clave Primaria (PK)
EMPLEADOS (Lado Muchos),departamento_id,Clave Foránea (FK) que apunta a la PK de DEPARTAMENTOS.

```
CREATE TABLE EMPLEADOS (
    empleado_id INT PRIMARY KEY,
    nombre VARCHAR(100),
    departamento_id INT,  -- Columna que actúa como FK

    -- Restricción de la Clave Foránea
    FOREIGN KEY (departamento_id) REFERENCES DEPARTAMENTOS(departamento_id)
);

```


### Usos Comunes

##### La relación 1:N es crucial para:

#### Eliminar Redundancia: Almacenar la información del departamento una sola vez en la tabla DEPARTAMENTOS

##### Simplemente referenciarla desde múltiples empleados, lo cual es la base de la normalización (3NF).


#### Mantener la Integridad Referencial: La FK asegura que no se pueda asignar un empleado a un departamento_id que no existe en la tabla DEPARTAMENTOS.




# Relación muchos a muchos (M:N)

#### Una instancia de la Entidad A puede relacionarse con múltiples instancias de la Entidad B, y viceversa.

##### No puede ser implementada directamente en un esquema relacional sin un paso intermedio.

##### La relación M:N es vital para representar vínculos donde la interacción es recíproca y múltiple.


Relación entre Estudiantes y Cursos.

##### Un Estudiante se puede inscribir en muchos cursos.

##### Un Curso tiene matriculados a muchos estudiantes.


##### Si intentáramos implementar la relación M:N directamente, nos encontraríamos con problemas de redundancia masiva:

Opción A (FK en ESTUDIANTES): Necesitarías múltiples columnas de curso_id en la tabla ESTUDIANTES (ej. curso_id_1, curso_id_2, etc.), lo cual es un mal diseño (violando 1NF) e inflexible.    

Opción B (FK en CURSOS): El mismo problema, pero con múltiples estudiante_id en la tabla CURSOS.


### Resolución en el Modelo Lógico (Tabla de Enlace)

La relación M:N, se utiliza la técnica de descomposición creando una tercera tabla

Conocida como Tabla de Enlace, Tabla Asociativa o Tabla Pivote. Esta tabla transforma la relación M:N en dos relaciones 1:N.

#### Esta tabla transforma la relación M:N en dos relaciones 1:N.

#### Solución

1. Crea una nueva tabla (ej. INSCRIPCIONES).

2. Esta nueva tabla contendrá las Claves Primarias (PK) de las dos entidades originales como Claves Foráneas (FK).

3. La Clave Primaria de la tabla de enlace es una clave compuesta formada por ambas FKs (asegurando que cada par estudiante-curso sea único).

Tabla Clave Primaria (PK) Clave(s) Foránea(s) (FK)

ESTUDIANTES,estudiante_id,N/A
CURSOS,curso_id,N/A
INSCRIPCIONES,"(estudiante_id, curso_id)",FK a ESTUDIANTES y FK a CURSOS


### Atributos de la Relación (Payload)

#### Cualquier atributo que describa la relación en sí mismo

##### en lugar de a las entidades individuales, debe colocarse en la Tabla de Enlace.

Ejemplo: La Calificación que un estudiante obtiene en un curso específico, o la Fecha de Inscripción.

Estos atributos se almacenan directamente en la tabla INSCRIPCIONES.


## Ej: Estudiantes y Cursos.

Entidad A (Estudiante): Un estudiante individual.

Entidad B (Curso): Un curso académico específico.


La relación es M:N porque:

Un solo Estudiante puede inscribirse en Múltiples Cursos.

Un solo Curso puede tener matriculados a Múltiples Estudiantes.


Si intentaras resolver esto simplemente añadiendo una clave foránea (curso_id) a la tabla Estudiantes

La columna tendría que almacenar múltiples valores por fila, lo cual viola la Primera Forma Normal (1NF) y es imposible de implementar en un modelo relacional.


### Solución

Mediante la creación de una tercera tabla, conocida como Tabla de Enlace

Descompone la relación M:N en dos relaciones Uno a Muchos (1:N).


INSCRIPCIONES

Tabla (Entidad) | Rol,Claves Primarias y Foráneas

ESTUDIANTES,"Principal (Lado ""Uno"")",estudiante_id (PK)
CURSOS,"Principal (Lado ""Uno"")",curso_id (PK)
INSCRIPCIONES,"Enlace (Lado ""Muchos"")","estudiante_id (FK), curso_id (FK)"

#### El lado "Muchos" de la relación ahora apunta a la tabla de enlace:

ESTUDIANTES (1) se relaciona con INSCRIPCIONES (N).

CURSOS (1) se relaciona con INSCRIPCIONES (N).


### Atributos de la Relación

INSCRIPCIONES

También almacena atributos que solo tienen sentido en el contexto de la relación.

calificacion

fecha_inscripcion


#### La tabla de enlace utiliza las claves de las tablas principales para formar su propia Clave Primaria Compuesta (PK).

```
CREATE TABLE INSCRIPCIONES (
    -- Claves Foráneas
    estudiante_id INT NOT NULL, 
    curso_id INT NOT NULL, 
    
    -- Atributos de la relación
    calificacion NUMERIC(3, 1),
    fecha_inscripcion DATE NOT NULL,

    -- Clave Compuesta: Asegura que un estudiante solo puede inscribirse una vez en un curso.
    PRIMARY KEY (estudiante_id, curso_id),
    
    -- Definición de las referencias (relaciones 1:N)
    FOREIGN KEY (estudiante_id) REFERENCES ESTUDIANTES(estudiante_id),
    FOREIGN KEY (curso_id) REFERENCES CURSOS(curso_id)
);
```


# PK

#### Primary Key es atributo (o un conjunto de atributos)

##### Se utiliza para identificar de forma única cada registro (fila o tupla) dentro de una tabla.


#### La PK actúa como la identidad principal de un registro
 
crucial para mantener la integridad de los datos.


### Identificación Única: El valor de la PK nunca puede repetirse dentro de la misma tabla.

##### Si conoces el valor de la PK, puedes recuperar un registro específico sin ambigüedad.


### Integridad de Entidad: La PK garantiza que cada entidad (registro) sea única y válida.


### No Nulidad: El valor de la PK nunca puede ser nulo (NULL). 

##### Un registro debe tener siempre un identificador.


### Estabilidad: Idealmente, el valor de la PK nunca debe cambiar a lo largo del tiempo

##### Ya que otras tablas (a través de las Claves Foráneas) pueden hacer referencia a ella.


### Tipos de Claves Primarias

Tipo de Clave	Definición	Ejemplo


#### Clave Natural

##### Utiliza un atributo que ya existe en el mundo real y es intrínsecamente único.

El ISBN de un libro o el Número de Seguridad Social de un empleado.


#### Clave Subrogada (Artificial)

Un identificador artificial, a menudo un número entero generado automáticamente por el sistema.

Un campo ID o empleado_id autoincremental.


#### Clave Compuesta

Una PK formada por la combinación de dos o más atributos.

En una tabla de enlace (INSCRIPCIONES), la PK es (estudiante\_id, curso\_id).


#### En el diseño moderno, las claves subrogadas (ej. IDs autoincrementales) son generalmente preferidas porque son más pequeñas, estables y no contienen lógica de negocio que pueda cambiar.


### Relación con la Clave Foránea (FK)

#### La PK es el objetivo o el punto de referencia de todas las Claves Foráneas (FK) en el esquema.

##### Cuando defines una relación, la PK de la tabla principal se inserta como una FK en la tabla dependiente para establecer el vínculo 1:N o 1:1.

##### La FK asegura que solo se puedan referenciar valores de la PK que realmente existen, manteniendo la integridad referencial.



# FK

Foreign Key es un atributo o conjunto de atributos

#### Se utiliza para establecer y hacer cumplir un vínculo entre los datos de dos tablas.

Actúa como un puntero que garantiza la integridad referencial dentro del modelo relacional.


### Proposito

Vínculo Relacional: La FK es el mecanismo físico que implementa las relaciones (1:N, 1:1) definidas en el modelo conceptual y lógico

Referencia: Una FK en la tabla hija (dependiente) hace referencia a la Clave Primaria (PK) de la tabla padre (principal).

#### Integridad Referencial: Es la regla de oro de la FK. Asegura que no se puedan crear registros huérfanos.

##### Todo valor en la columna FK debe existir como valor en la PK de la tabla padre, o ser NULL (si la participación es opcional).


### Ej: DEPARTAMENTOS y EMPLEADOS.

Tabla Padre (Principal): DEPARTAMENTOS (Contiene la PK: departamento_id).

Tabla Hija (Dependiente): EMPLEADOS (Contiene la FK: departamento_id).

EMPLEADOS,empleado_id (PK),nombre,departamento_id (FK)
101,Juan Pérez,Ventas,3
102,Ana García,Marketing,1
103,Pedro López,NULL,5 (Error: No existe)


Si el departamento_id 5 no existe en la tabla DEPARTAMENTOS

La base de datos rechazará la inserción del registro 103 para mantener la integridad referencial.


### Implementación

#### Se define mediante la restricción FOREIGN KEY en SQL

##### Un aspecto crucial del diseño físico es definir cómo debe reaccionar el sistema cuando se intenta modificar o eliminar un registro en la tabla padre.


Acción DDL	Tabla Padre (PK)	Tabla Hija (FK)

ON DELETE CASCADE	Se borra la fila.	Se borran automáticamente todas las filas relacionadas en la tabla hija.

ON DELETE RESTRICT	Se intenta borrar la fila.	Se rechaza la eliminación si existen filas dependientes en la tabla hija. (El comportamiento más seguro).

ON DELETE SET NULL	Se borra la fila.	El valor de la FK en la tabla hija se establece en NULL. (Solo si la FK puede ser nula).




# Indices

#### Estructuras de datos especiales asociadas a las tablas de una base de datos

##### Diseñadas para acelerar la recuperación de datos.

Funcionan de manera muy similar al índice alfabético de un libro.


### 1. Funcionamiento

#### Copia de una o más columnas de una tabla, junto con la dirección física (puntero) de dónde se almacena el registro completo en el disco.

Sin Índice (Escaneo de Tabla): Para encontrar un registro, la base de datos tendría que leer y examinar cada fila de la tabla, de principio a fin (similar a leer cada página de un libro para encontrar un tema).

Esto se conoce como escaneo secuencial o Table Scan.


Con Índice: La base de datos primero busca el valor deseado en la estructura del índice (que está optimizada para la búsqueda rápida, generalmente un árbol B o B+).

La base de datos primero busca el valor deseado en la estructura del índice (que está optimizada para la búsqueda rápida, generalmente un árbol B o B+).

Una vez encontrado el valor, el índice proporciona la dirección exacta en el disco para acceder a la fila completa de la tabla de forma inmediata.


### 2. Tipos Principales de Índices

Los dos tipos principales de índices son:


Índice Clustered (Agrupado)

Determina el orden físico en el que se almacenan las filas de datos en el disco.

Es decir, las filas de la tabla se almacenan físicamente en el orden de las claves del índice.


Restricción: Solo puede haber un índice clustered por tabla, ya que los datos solo pueden ordenarse de una manera física.


##### Uso Común: La Clave Primaria (PK) de una tabla a menudo se implementa automáticamente como un índice clustered (especialmente en SQL Server y MySQL/InnoDB).


B. Índice Non-Clustered (No Agrupado)

Es una estructura de índice separada de la tabla de datos

El orden de los datos en el disco no se ve afectado.

Una tabla puede tener múltiples índices non-clustered.

Funcionamiento: Contiene el valor de la columna indexada y un puntero a la fila de datos real.


### Ventajas y desventajas

Búsqueda (SELECT)

Ventaja: Acelera drásticamente las consultas SELECT con cláusulas WHERE, ORDER BY, y JOIN que utilizan la columna indexada.

No desventaja.


Almacenamiento

Desventaja: Los índices son estructuras de datos que requieren espacio adicional en el disco para almacenarse.

No ventaja.


Modificación (CRUD)

Ralentizan las operaciones INSERT, UPDATE y DELETE, ya que cada vez que se modifica la tabla, el SGBD también debe actualizar todas las estructuras de índice asociadas.

No ventaja


### Cuando indexar

#### Indexa de forma estratégica, no excesiva


Candidatos Clave

Claves Primarias (PK): Siempre deben estar indexadas (generalmente clustered).

Claves Foráneas (FK): Indexar las FKs es crucial para acelerar las operaciones JOIN.

Columnas usadas frecuentemente en la cláusula WHERE (filtros).

Columnas usadas frecuentemente en la cláusula ORDER BY (ordenación).


Evitar Indexar Columnas:

Columnas con muy pocos valores únicos (baja cardinalidad), como un campo booleano (es_activo).

Tablas que tienen muy pocas filas.

Columnas que se actualizan muy a menudo.



## Ej Índice Non-Clustered (No Agrupado)

Gran tabla de CLIENTES que contiene millones de filas.


Sin indice

Si ejecutas esta consulta sin un índice en la columna email:

```
SELECT nombre, telefono FROM CLIENTES WHERE email = 'ana.garcia@ejemplo.com';
```

El SGBD (Sistema de Gestión de Bases de Datos) tendría que realizar un escaneo secuencial o Table Scan.

Esto significa que lee fila por fila, desde el inicio hasta el final de la tabla, hasta que encuentra la dirección de correo electrónico, lo cual es muy lento en una tabla grande.


Escenario: Búsqueda con Índice

#### Para acelerar la búsqueda, creamos un índice en la columna email.

```
CREATE UNIQUE INDEX idx_clientes_email ON CLIENTES (email);
```


### Importancia de la Unicidad

#### En este ejemplo, definimos el índice como UNIQUE (CREATE UNIQUE INDEX...). Esto tiene dos funciones:

Acelera la Búsqueda: Sigue siendo un índice que acelera la consulta SELECT.

Garantiza la Integridad: El SGBD ahora forzará que no existan dos clientes con el mismo correo electrónico, asegurando la unicidad del dato (similar a una PK, pero sin ser el identificador principal de la tabla).




# Transacciones ACID

##### Conjunto de reglas fundamentales que garantizan que las transacciones de bases de datos se procesen de manera confiable

##### Una transacción es una secuencia lógica de una o más operaciones que se ejecutan como una sola unidad atómica.

El cumplimiento de ACID es crucial para la integridad de los datos en sistemas críticos (como la banca o el comercio electrónico).


## Las 4 propiedades 

### 1. Atomicidad: Todo o Nada

#### Garantiza que una transacción se complete por completo (COMMIT) o que falle por completo (ROLLBACK).

##### Transferencia de dinero: Si la deducción falla, el depósito no se realiza.


### 2. Consistencia: Mantenimiento de Reglas

#### Asegura que la base de datos solo pasa de un estado válido a otro estado válido

Esto se mantiene a través de reglas predefinidas (restricciones NOT NULL, FKs, etc.).

##### Un balance de cuenta nunca puede ser negativo (si hay una regla de BD que lo impide).


### 3. Islamiento: Independencia

Garantiza que la ejecución concurrente de múltiples transacciones dé como resultado un estado de la base de datos que sería el mismo que si las transacciones se hubieran ejecutado una tras otra (serialmente).

##### Dos usuarios accediendo al mismo stock de productos; cada uno ve el stock correcto sin interferencia del otro.


### 4. Durabilidad: Permanencia

#### Una vez que una transacción ha sido confirmada (COMMIT), sus cambios son permanentes y persistirán incluso en caso de fallos del sistema (como un corte de energía o un crash del servidor).

##### Confirmar una compra. Aunque el servidor se apague, el pedido permanece registrado.


Ejemplo de Transacción

Imagina una transferencia bancaria de 100 de la Cuenta A a la Cuenta B.

Operación 1: Restar 100 de la Cuenta A.

Operación 2: Sumar 100 a la Cuenta B.


Si la Operación 1 se ejecuta con éxito, pero la Operación 2 falla (ej. por un error de disco)

La propiedad de Atomicidad asegura que la Operación 1 se deshaga (ROLLBACK),

La Cuenta A vuelva a su estado original, manteniendo la Consistencia general del sistema bancario.


## Ej: Transacción - Operación Updates

Transferencia de dinero entre dos cuentas bancarias.
    
Se ejecutarán las dos operaciones (update/s) o ninguna


Tabla llamada CUENTAS con las columnas cuenta_id (PK) y saldo.

Queremos transferir 100.00 de la Cuenta 1001 a la Cuenta 2002.


1. Comenzamos la transacción para marcar el punto donde comienza la unidad atómica de trabajo.

```
START TRANSACTION; 
-- O BEGIN TRANSACTION; (Dependiendo del SGBD, ej. SQL Server)
-- O BEGIN; (Común en PostgreSQL)
```


2. Operaciones Atómicas (ACID)

Se ejecutan las operaciones

Si una de ellas falla (por ejemplo, por falta de fondos o un error de conexión), todo el bloque se revertirá.


Restar el Saldo (Cuenta Origen)

```
-- 1. Restar 100.00 de la cuenta de origen (1001)
UPDATE CUENTAS
SET saldo = saldo - 100.00
WHERE cuenta_id = 1001;
```


Sumar el Saldo (Cuenta Destino)

```
-- 2. Sumar 100.00 a la cuenta de destino (2002)
UPDATE CUENTAS
SET saldo = saldo + 100.00
WHERE cuenta_id = 2002;
```


3. Finalización de la Transacción

Aquí decidimos si los cambios deben ser permanentes o descartados.


Escenario	Sentencia SQL	Resultado	Propiedad ACID

Éxito: Ambas operaciones se ejecutaron correctamente.	COMMIT;	Los cambios son permanentes en la base de datos (Durabilidad).

Fallo: La cuenta 1001 no tenía fondos o hubo un error en la segunda operación.	ROLLBACK;	Todos los cambios realizados desde START TRANSACTION se deshacen (Atomicidad).


```
START TRANSACTION;

-- Declarar una variable o realizar una consulta para chequear el saldo.
-- Supongamos que aquí se verifica que la cuenta 1001 tiene al menos 100.00.

-- Simulación de las operaciones:
UPDATE CUENTAS SET saldo = saldo - 100.00 WHERE cuenta_id = 1001;
UPDATE CUENTAS SET saldo = saldo + 100.00 WHERE cuenta_id = 2002;

-- Lógica de COMMIT/ROLLBACK:
-- Si el chequeo de saldo original falla o el SGBD reporta un error:
-- ROLLBACK;

-- Si todo está bien:
COMMIT;
```


## Buenas prácticas

Las transacciones son cruciales para garantizar la integridad de los datos y el rendimiento


### 1. Atomicidad y Control de Flujo (El Enfoque "Todo o Nada")

#### Usar COMMIT y ROLLBACK explícitamente: Siempre envuelve las operaciones relacionadas dentro de bloques transaccionales (START TRANSACTION/BEGIN). 

Usa COMMIT solo si todas las operaciones tuvieron éxito y ROLLBACK inmediatamente si ocurre algún error.

##### Ejemplo: Al transferir dinero, si la segunda actualización falla, el código debe ejecutar ROLLBACK para deshacer la primera.    
    

#### Manejar Errores: Implementa bloques de captura de excepciones (try-catch) en tu código de aplicación y base de datos 

Para asegurar que cualquier fallo inesperado dispare un ROLLBACK


### 2. Consistencia (Integridad del Dato)

#### Confiar en las Restricciones de BD: Haz que la base de datos fuerce la consistencia siempre que sea posible. 

Utiliza FOREIGN KEYs, restricciones UNIQUE, NOT NULL, y CHECK en el DDL.

##### Razón: Si la lógica de la aplicación falla, la BD es la última línea de defensa para prevenir datos inválidos.


#### Pre-validación: Antes de iniciar una transacción costosa

valida las reglas de negocio críticas (ej. saldo disponible, existencia de usuario) en la capa de aplicación.


### 3. Aislamiento y Concurrencia (Rendimiento)

#### Mantener las Transacciones Cortas: Las transacciones largas mantienen recursos bloqueados, lo que reduce la concurrencia y puede causar deadlocks. 

Ejecuta solo las operaciones esenciales (INSERT, UPDATE, DELETE) dentro del bloque transaccional.

Ejemplo: No inicies la transacción al inicio del formulario web, sino justo antes de realizar la operación de escritura en la BD.


#### Evitar Bloqueos Innecesarios: No realices operaciones de entrada/salida (I/O) externas

(ej. llamadas a APIs externas, envío de emails)

Dentro de una transacción, ya que demoran la finalización y mantienen los bloqueos.


#### Usar Niveles de Aislamiento Adecuados: Entiende y configura el nivel de aislamiento de tu SGBD

(ej. READ COMMITTED es común, SERIALIZABLE es más seguro pero más lento).

No uses un nivel más estricto del necesario para optimizar el rendimiento.



### 4. Durabilidad (Persistencia)

#### Verificación de COMMIT: Asegúrate de que tu aplicación reciba la confirmación (COMMIT) del SGBD

antes de considerar que la transacción ha tenido éxito

Si la aplicación cae después de enviar el COMMIT pero antes de la confirmación, la BD aún debe asegurar la persistencia.


#### Configuración del SGBD: Asegúrate de que la configuración de tu SGBD priorice la durabilidad

(ej. configurando correctamente el write-ahead logging o journaling).

Esto suele ser la configuración predeterminada en entornos de producción.


### Regla de Oro: "Read outside, Write inside." (Lee fuera, Escribe dentro.)
    
#### Las operaciones de lectura (SELECT) que no necesiten datos perfectamente consistentes o que no interfieran con la escritura

##### Deben realizarse fuera del bloque BEGIN/COMMIT para evitar mantener bloqueos innecesarios.


#### Solo las operaciones de escritura (INSERT, UPDATE, DELETE)

##### que deben ser atómicas deben realizarse dentro del bloque transaccional.


## Casos de uso

### 1. Sistemas Financieros y Contabilidad

##### Donde la Atomicidad y la Durabilidad son no negociables.


#### Transferencia de Fondos: Mover dinero de la Cuenta A a la Cuenta B requiere dos operaciones: la deducción y la adición

Ambas deben ocurrir o ninguna. 

Si solo ocurre la deducción, el sistema queda inconsistente.


#### Actualización de Inventario por Venta: Cuando un cliente compra un producto:

Se reduce la cantidad disponible en la tabla INVENTARIO.

Se registra el nuevo pedido en la tabla PEDIDOS. Si el registro del pedido falla, la reducción del inventario debe revertirse (ROLLBACK).


### 2. Comercio Electrónico y Gestión de Pedidos

Las transacciones garantizan que el cliente no pague por algo que no está disponible o que un pedido pagado se pierda.


#### Procesamiento de Pedidos: Una transacción agrupa:

1. Bloquear o reducir el stock de los productos.

2. Crear el registro en la tabla ORDENES.

3. Registrar el pago en la tabla TRANSACCIONES_PAGO


#### Reservas de Asientos/Boletos: Al reservar un asiento en un cine o avión, la transacción asegura que:

1. Se actualice el estado del asiento a "Reservado".

2. Se asigne el asiento al USUARIO. 

Esto previene que dos usuarios simultáneos (gracias al Aislamiento) reserven el mismo asiento.
    

### 3. Sistemas de Gestión de Contenido y Colaboración (CMS)

##### Las transacciones son vitales para manejar cambios complejos que afectan a múltiples estructuras.


#### Publicación de Contenido: Cuando un usuario publica un nuevo artículo:

1. Se inserta la entrada principal en la tabla ARTICULOS.

2. Se actualiza el contador de la tabla AUTORES.

3. Se insertan las etiquetas en la tabla ETIQUETAS_DE_ARTICULO (tabla de enlace M:N). Si alguna inserción falla (ej. una restricción de clave foránea en las etiquetas), el artículo completo no se publica


#### Actualización de Perfiles de Usuario: Cambiar la información de un usuario que está distribuida en varias tablas

(ej. USUARIO, DIRECCIONES, PERMISOS)

Todos los cambios se aplican simultáneamente.


### 4. Sistemas de Recursos Humanos (RRHH)

Asegurar que los cambios de personal que afectan a múltiples áreas se apliquen sin dejar datos incompletos.

#### Cambio de Departamento de Empleado:

1. Actualizar el departamento_id en la tabla EMPLEADOS.

2. Registrar la fecha de cambio en la tabla HISTORIAL_DE_DEPARTAMENTOS. Ambas acciones deben ocurrir para mantener un registro de auditoría coherente.
    

### Principio general: Si la falla de una operación deja el sistema en un estado ilógico o incoherente, se necesita una transacción.

#### Ej aplicando buenas prácticas

```
DO $$
DECLARE
    cantidad_a_transferir DECIMAL := 250.00;
    cuenta_origen INT := 101;
    cuenta_destino INT := 202;
    saldo_actual DECIMAL;
BEGIN
    -- 1. Iniciar la Transacción
    -- En muchos SGBD y bloques DO/BEGIN, la transacción comienza implícitamente aquí.

    -- 2. VERIFICACIÓN DE CONSISTENCIA (Buena Práctica: Leer fuera/Revisar dentro)
    -- Obtener el saldo actual de la cuenta de origen (101)
    SELECT saldo INTO saldo_actual
    FROM Cuentas
    WHERE cuenta_id = cuenta_origen
    FOR UPDATE; -- Buena Práctica: Bloquea la fila temporalmente para garantizar Aislamiento

    IF saldo_actual >= cantidad_a_transferir THEN
        -- 3. OPERACIONES DE ESCRITURA (Si la condición es válida)
        
        -- Restar de la cuenta de origen
        UPDATE Cuentas
        SET saldo = saldo - cantidad_a_transferir
        WHERE cuenta_id = cuenta_origen;

        -- Sumar a la cuenta de destino
        UPDATE Cuentas
        SET saldo = saldo + cantidad_a_transferir
        WHERE cuenta_id = cuenta_destino;
        
        -- 4. ÉXITO: Confirmar la Transacción (Durabilidad)
        COMMIT;
        RAISE NOTICE 'Transferencia Exitosa: % de % a %', cantidad_a_transferir, cuenta_origen, cuenta_destino;

    ELSE
        -- 4. FALLO LÓGICO: Revertir la Transacción (Atomicidad)
        -- Si no hay fondos suficientes, aseguramos que ningún cambio (incluyendo el FOR UPDATE) sea permanente.
        ROLLBACK;
        RAISE NOTICE 'Transferencia Fallida: Saldo insuficiente en cuenta %', cuenta_origen;

    END IF;
    
EXCEPTION
    -- 5. FALLO TÉCNICO: Manejo de Errores
    WHEN others THEN
        -- Si ocurre cualquier error de BD (ej. violación de FK, deadlock), revertimos.
        ROLLBACK;
        RAISE NOTICE 'Error inesperado durante la transacción. Revertiendo cambios.';
END $$;
```

1. Atomicidad (COMMIT vs. ROLLBACK): La lógica IF/ELSE asegura que las dos operaciones de UPDATE se ejecutan juntas (en el bloque COMMIT) o se anulan ambas (ROLLBACK).

2. Consistencia: El chequeo IF saldo_actual >= cantidad_a_transferir evita que el saldo de la cuenta sea negativo (manteniendo la regla de negocio).

3. Aislamiento: La cláusula FOR UPDATE en la consulta SELECT es una práctica avanzada que bloquea la fila de la cuenta_origen hasta que la transacción finalice. Esto previene que un segundo proceso lea un saldo incorrecto o intente actualizar la cuenta al mismo tiempo (evitando race conditions).

4. Manejo de Excepciones: El bloque EXCEPTION captura fallos no planeados del sistema (como un error de disco o deadlock), asegurando que un ROLLBACK se ejecute incluso en caso de fallos técnicos.




# CRUD

En el contexto de bases de datos y APIs (Interfaces de Programación de Aplicaciones)

##### Representa las cuatro funciones básicas que se consideran necesarias para trabajar con datos persistentes

##### Datos que se almacenan y se pueden recuperar.


Operación	Significado	 Descripción  Equivalente SQL (típico)	Equivalente HTTP (típico)

C	Create (Crear)	Generar un nuevo registro o recurso en la base de datos o sistema.	INSERT	POST

R	Read (Leer/Recuperar)	Obtener y mostrar los datos existentes, ya sea un registro específico o una lista de ellos.	SELECT	GET

U	Update (Actualizar)	Modificar los datos de un registro ya existente.	UPDATE	PUT o PATCH

D	Delete (Borrar/Eliminar)	Eliminar un registro o recurso del sistema.	DELETE	DELETE


### Representan acciones

Como al gestionar una lista de contactos en tu teléfono o en una hoja de cálculo.

Create (Crear): Añades un nuevo contacto con su nombre y número.

Read (Leer): Buscas un contacto específico para ver su número, o ves la lista completa de tus contactos.

Update (Actualizar): Un amigo cambia de número y edita su información en su contacto existente.

Delete (Borrar): Eliminas un contacto que ya no necesitas


#### CRUD define el ciclo de vida básico de los datos dentro de una aplicación



## Ciclo de vida 

1. Creación (C - Create)

Función: Iniciar la existencia del dato.
    
Operación que toma nueva información (por ejemplo, los campos de un formulario)

La inserta como un nuevo registro en el almacenamiento persistente (la base de datos).

El registro pasa de no existir a ser una entidad guardada.


2. Lectura (R - Read)

Función: Acceder y utilizar el dato
    
Una vez que el dato existe, esta operación es esencial para recuperarlo y mostrarlo al usuario o a otra parte del sistema

Permite la consulta del registro para la visualización, el procesamiento o la toma de decisiones.

Es la operación más frecuente.


3. Actualización (U - Update)

##### Función: Mantener la relevancia y la precisión del dato.

##### Los datos raramente son estáticos

Esta operación permite modificar uno o varios campos del registro existente sin eliminarlo ni crear uno nuevo

Es crucial para reflejar cambios en la vida real (por ejemplo, un cambio de dirección o de estado).


4. Eliminación (D - Delete)

Función: Finalizar la existencia del dato.

Esta operación elimina el registro permanentemente (o lo marca como eliminado, lo que se conoce como "soft delete") del sistema de almacenamiento

Marca el final del ciclo de vida del dato.



## Persistencia

##### La persistencia de datos es el objetivo, y CRUD es el lenguaje universal o el conjunto de comandos que se utilizan para interactuar con cualquier sistema de almacenamiento persistente

#### Bases de datos relacionales: Usando INSERT, SELECT, UPDATE, DELETE (el equivalente SQL de CRUD).

#### Bases de datos NoSQL: Usando métodos como save, find, updateOne, remove.

#### Sistemas de archivos: Usando funciones de escritura, lectura, modificación y borrado de archivos.


#### Sin estas cuatro operaciones (CRUD), un sistema no podría garantizar que los datos creados se conserven, modifiquen o consulten a largo plazo, lo cual es la definición misma de almacenamiento duradero.



## Persistencia y Sesión

### Persistencia

Se refiere a que los datos sobrevivan al proceso o aplicación que los creó.

Duradero (Largo plazo). El dato existe hasta que se elimina explícitamente (operación D de CRUD).

Almacenamiento no volátil (Bases de datos, discos duros, archivos permanentes, la nube).

Las 4 operaciones (C, R, U, D) están orientadas a gestionar estos datos.


#### La persistencia es el objetivo de las operaciones CRUD.

##### Garantizar que las acciones del usuario se mantengan.

Cuando un usuario realiza una operación C (Crear), U (Actualizar) o D (Eliminar) en una aplicación

El objetivo es que ese cambio se refleje en el almacenamiento persistente (la base de datos),

De modo que si el usuario regresa al día siguiente o reinicia el sistema, el dato siga ahí.


### Sesión

Se refiere al estado temporal de la interacción de un usuario con una aplicación durante un período de tiempo definido.

Temporal (Corto plazo). El dato se pierde cuando el usuario cierra sesión, el servidor se reinicia, o expira por inactividad

Almacenamiento volátil (Memoria del servidor, cookies, almacenamiento local del navegador, caché).

Generalmente solo involucra operaciones de Read (lectura) y Update (actualización) del estado temporal, y a veces Create/guardado inicial.


#### La sesión es un mecanismo para mejorar la experiencia del usuario y evitar acceder constantemente a la persistencia.

##### Mantener el estado de la interacción del usuario (por ejemplo, el usuario logueado, los artículos en un carrito de compras, o los filtros aplicados) entre diferentes solicitudes o páginas web.

##### En el contexto de CRUD, los datos de persistencia a menudo se cargan en la memoria de la sesión (operación R)

Para que la aplicación pueda acceder a ellos rápidamente mientras el usuario está activo.

Si el usuario realiza cambios (operación U o C) en los datos cargados en la sesión, esos cambios deben sincronizarse con la capa de persistencia (la base de datos) antes de que la sesión finalice

Si no se graban en la persistencia, se perderán.



## CRUD, los Métodos HTTP y SQL/Bases de Datos

Actúa como un modelo conceptual universal

##### Se implementa de manera específica en estas dos tecnologías diferentes para lograr la persistencia de datos en aplicaciones web.


### 1. Mapeo de operaciones

##### Cada acción CRUD se mapea directamente a una acción de base de datos (SQL) y a un método de comunicación web (HTTP)

Estableciendo un lenguaje coherente a través de las diferentes capas de una aplicación:


Operación CRUD (Concepto)	Propósito (Ciclo de Vida del Dato)	Equivalente SQL (Base de Datos)	Equivalente HTTP (API Web)

Create (Crear)	Insertar un nuevo registro de datos.	INSERT INTO	POST

Read (Leer)	Recuperar datos para su visualización.	SELECT FROM	GET

Update (Actualizar)	Modificar los datos de un registro existente.	UPDATE ... SET	PUT o PATCH

Delete (Eliminar)	Remover permanentemente un registro.	DELETE FROM	DELETE


#### 1. CRUD como Modelo Conceptual: Marco de trabajo abstracto que define las funcionalidades mínimas necesarias para gestionar un recurso o registro de


#### 2. SQL / Bases de Datos (La Capa de Persistencia): Bases de datos (SQL o NoSQL) son el destino final donde residen los datos de forma duradera.

#### SQL proporciona el lenguaje técnico (INSERT, SELECT, UPDATE, DELETE)

##### Para ejecutar las operaciones CRUD directamente en el motor de la base de datos.

Cuando una aplicación necesita persistir un dato, traduce la intención CRUD a comandos SQL.


#### 3. Métodos HTTP (La Capa de Interfaz/Comunicación)

##### Los Métodos HTTP (especialmente en arquitecturas RESTful) son el protocolo de comunicación que se utiliza para que un cliente

navegador o una aplicación móvil

##### Solicite que se ejecuten las operaciones CRUD en un servidor.


##### Implementación: El servidor expone endpoints (URLs) que mapean un Método HTTP recibido a la operación CRUD correspondiente.

Un cliente envía un GET (Read) al endpoint /usuarios/10

Para solicitar que el servidor ejecute un SELECT (Read) en la base de datos

Y le devuelva la información del usuario con ID 10.


CRUD es la idea, los Métodos HTTP son la forma de solicitar esa idea a través de internet, y SQL es la forma de ejecutar esa idea en la capa de almacenamiento de datos.



## Flujo de trabajo entre CRUD, Métodos HTTP y SQL/Base de Datos

Describe cómo se gestiona un dato

Desde que el cliente interactúa con una aplicación

Gasta que el cambio se persiste en el almacenamiento, y viceversa

##### Este flujo generalmente sigue una arquitectura de tres capas: Cliente, Servidor (API) y Base de Datos.


### 1. Create (Crear)

Etapa	1. Operación (Cliente)	 2. Protocolo (HTTP)	3. Lógica (Servidor/API)	4. Persistencia (SQL/BD)

Flujo:

1. Un usuario completa un formulario (ej. registro de nuevo usuario) y pulsa "Enviar".

2. El cliente envía una solicitud POST al endpoint del servidor (ej. /api/usuarios).

3. El servidor valida los datos recibidos y construye la consulta de base de datos.

4. El servidor ejecuta la sentencia INSERT INTO, creando el nuevo registro de forma persistente.



### 2. Read

1. Un usuario navega a una página o hace clic en un enlace para ver un recurso (ej. un perfil).

2. El cliente envía una solicitud GET al endpoint del servidor (ej. /api/usuarios/123).

3. El servidor recibe la solicitud y construye la consulta de base de datos basándose en los parámetros.

4. El servidor ejecuta la sentencia SELECT FROM y recupera el registro solicitado. El dato se envía de vuelta al cliente.


### 3. Update (Actualizar)

1. Un usuario edita un campo existente en un formulario y pulsa "Guardar".

2. El cliente envía una solicitud PUT o PATCH al endpoint del servidor (ej. /api/usuarios/123).

3. El servidor verifica la identidad y permisos del usuario, y construye la consulta con los datos modificados.

4. El servidor ejecuta la sentencia UPDATE ... SET, modificando el registro existente.


### 4. Delete (Eliminar)

1. Un usuario hace clic en el botón "Eliminar" en un recurso.

2. El cliente envía una solicitud DELETE al endpoint del servidor (ej. /api/usuarios/123).

3. El servidor verifica que la eliminación sea segura y construye la consulta de base de datos.

4. El servidor ejecuta la sentencia DELETE FROM, eliminando el registro de la persistencia.


### Flujo Cliente-Servidor: Front (Solicitud) - API - SQL - Servidor (respuesta) 

1. El Cliente (Frontend) usa la operación CRUD como una intención (ej. "Quiero Crear un usuario").

2. Traduce esa intención al Método HTTP (ej. POST) y lo envía al Servidor (API).

3. El Servidor (Backend) recibe la solicitud HTTP y mapea el método a la función CRUD que debe ejecutar.

4. El Servidor ejecuta el comando SQL (ej. INSERT) en la Base de Datos para persistir el cambio.

5. La Base de Datos procesa el SQL y devuelve un resultado al Servidor.

6. El Servidor genera una respuesta HTTP (ej. código 201 Created) y la envía de vuelta al Cliente.



## Ej CRUD

### Create

CRUD	Create	Intención de ingresar un producto nuevo.

Método HTTP	POST	El navegador envía datos (nombre, precio, stock) a la API: POST /api/productos.

SQL/BD	INSERT	La API ejecuta este comando en la BD: INSERT INTO Productos (Nombre, Precio, Stock) VALUES ('Portátil X', 1200.00, 5);.

Resultado	El producto ahora existe persistentemente en la tabla Productos.


### READ (Ver la Lista de Productos)

CRUD	Read	Intención de obtener la lista de productos

Método HTTP	GET	El navegador solicita la lista: GET /api/productos.

SQL/BD	SELECT	La API ejecuta el comando para recuperar datos: SELECT ID, Nombre, Precio, Stock FROM Productos;.

Resultado	La BD devuelve la lista de productos al Servidor, que la envía como JSON al navegador para mostrarla


## UPDATE (Actualizar el Precio de un Producto)

CRUD	Update	Intención de cambiar el precio del "Portátil X" (ID=1).

Método HTTP	PUT o PATCH	El navegador envía la solicitud: PUT /api/productos/1 con el nuevo precio (1150.00).

SQL/BD	UPDATE	La API ejecuta este comando: UPDATE Productos SET Precio = 1150.00 WHERE ID = 1;.

Resultado	El precio del producto con ID=1 se modifica permanentemente en la BD.


### DELETE (Eliminar un Producto)

CRUD	Delete	Intención de eliminar el producto obsoleto

Método HTTP	DELETE	El navegador envía la solicitud de eliminación: DELETE /api/productos/1.

SQL/BD	DELETE	La API ejecuta este comando: DELETE FROM Productos WHERE ID = 1;.

Resultado	El registro del producto se elimina permanentemente de la tabla Productos.



## Código CRUD 

Conexión a la db

```
// SIMULACIÓN DE LA CONEXIÓN A LA BASE DE DATOS
const db = {
    query: (sql, params) => {
        // En una aplicación real, esto ejecutaría el SQL en la DB.
        console.log(`\nEJECUTANDO SQL: ${sql}`);
        console.log(`Parámetros: ${params ? JSON.stringify(params) : 'Ninguno'}`);
        // Simulación de resultados para las operaciones
        if (sql.startsWith('SELECT')) return [{ id: 1, titulo: 'Cien Años', autor: 'G. García' }];
        if (sql.startsWith('INSERT')) return { insertId: 2 };
        return { affectedRows: 1 };
    }
};

const app = require('express')(); // Asumimos que 'app' es una instancia de Express
app.use(require('express').json());
```


Create/POST

```
// CRUD: CREATE
app.post('/api/libros', (req, res) => {
    // 1. Obtener datos del cuerpo de la solicitud (p.ej., { "titulo": "El Aleph", "autor": "Borges" })
    const { titulo, autor } = req.body;

    // 2. Construir la sentencia SQL (INSERT)
    const sql = "INSERT INTO Libros (titulo, autor) VALUES (?, ?)";
    const params = [titulo, autor];

    // 3. Ejecutar SQL en la Base de Datos
    db.query(sql, params)
        .then(result => {
            // 4. Enviar respuesta HTTP
            res.status(201).json({ 
                message: "Libro creado con éxito", 
                id: result.insertId 
            });
        })
        .catch(err => res.status(500).send(err));
});
```


Read/GET

```
// CRUD: READ
app.get('/api/libros/:id', (req, res) => {
    // 1. Obtener ID de los parámetros de la URL
    const libroId = req.params.id;

    // 2. Construir la sentencia SQL (SELECT)
    const sql = "SELECT * FROM Libros WHERE id = ?";
    const params = [libroId];

    // 3. Ejecutar SQL en la Base de Datos
    db.query(sql, params)
        .then(results => {
            if (results.length === 0) {
                // 4. Enviar respuesta HTTP 404 si no se encuentra
                return res.status(404).send("Libro no encontrado");
            }
            // 4. Enviar respuesta HTTP 200 con el dato
            res.status(200).json(results[0]);
        })
        .catch(err => res.status(500).send(err));
});
```


Update/Put

```
// CRUD: READ
app.get('/api/libros/:id', (req, res) => {
    // 1. Obtener ID de los parámetros de la URL
    const libroId = req.params.id;

    // 2. Construir la sentencia SQL (SELECT)
    const sql = "SELECT * FROM Libros WHERE id = ?";
    const params = [libroId];

    // 3. Ejecutar SQL en la Base de Datos
    db.query(sql, params)
        .then(results => {
            if (results.length === 0) {
                // 4. Enviar respuesta HTTP 404 si no se encuentra
                return res.status(404).send("Libro no encontrado");
            }
            // 4. Enviar respuesta HTTP 200 con el dato
            res.status(200).json(results[0]);
        })
        .catch(err => res.status(500).send(err));
});
```


DELETE

```
// CRUD: UPDATE
app.put('/api/libros/:id', (req, res) => {
    // 1. Obtener ID y nuevos datos
    const libroId = req.params.id;
    const { titulo, autor } = req.body;

    // 2. Construir la sentencia SQL (UPDATE)
    const sql = "UPDATE Libros SET titulo = ?, autor = ? WHERE id = ?";
    const params = [titulo, autor, libroId];

    // 3. Ejecutar SQL en la Base de Datos
    db.query(sql, params)
        .then(result => {
            if (result.affectedRows === 0) {
                return res.status(404).send("Libro no encontrado para actualizar");
            }
            // 4. Enviar respuesta HTTP 200/204
            res.status(204).send(); // 204 No Content: Éxito, pero sin cuerpo de respuesta
        })
        .catch(err => res.status(500).send(err));
});
```


## Características de CREATE/POST/INSERT INTO

#### 1. Recibir datos nuevos y válidos de la capa de aplicación (por ejemplo, a través de un formulario web o una solicitud API).

#### 2. Asignar un identificador único (ID) a este nuevo registro, que servirá como su dirección permanente en el sistema.

#### 3. Almacenar el nuevo registro de forma duradera para que pueda ser recuperado más tarde.


Método HTTP: Se mapea a la solicitud POST.

Sentencia SQL: Se traduce a INSERT INTO.


### Cuerpo de la solicitud: Incluir los datos a crear en el cuerpo de la solicitud, generalmente en formato JSON o XML.

### Validación de datos: Realizar validaciones en el servidor para asegurarse de que los datos proporcionados sean correctos y consistentes

### Código de estado HTTP: Devolver un código de estado HTTP adecuado, como 201 Created, para indicar que el recurso ha sido creado con éxito.

### Código de estado HTTP: Devolver un código de estado HTTP adecuado, como 201 Created, para indicar que el recurso ha sido creado con éxito.


### Ejemplos

#### Gestión de Usuarios y Perfiles

Registro de usuario: Cuando un nuevo usuario se registra, se ejecuta una operación Create para insertar su nombre, correo electrónico y contraseña (hash) en la tabla de usuarios.

Creación de perfil: Crear un perfil de negocio, una cuenta de cliente, o un perfil de juego.


#### En sistemas CMS (Sistemas de Gestión de Contenidos) y plataformas sociales.

Publicar contenido: Crear una nueva publicación de blog, un tweet, un estado de Facebook, o una respuesta en un foro.

Subida de archivos: Crear un registro en la base de datos que referencia la ubicación de un archivo recién subido (imagen, video, documento).


#### Transacciones y Documentos

En sistemas de comercio electrónico, banca o contabilidad.

Realizar un pedido: Cuando un cliente finaliza la compra, se crea un nuevo registro de Pedido que detalla los artículos y el total.

Crear una factura o recibo: Generar un documento financiero con un ID único.


####  Configuraciones y Relaciones

En el lado del backend para definir la estructura de la aplicación.

Añadir un producto: En un sistema de inventario, se utiliza 'Create' para dar de alta un nuevo producto con su descripción y precio.

##### Crear una relación: Insertar un registro en una tabla intermedia (de muchos a muchos), como cuando un usuario "sigue" a otro o se asigna una etiqueta a una tarea.



## Características de READ/GET/SELECT FROM

Obtener los datos que previamente fueron insertados (usando Create)

1. Consulta: Recibir parámetros de búsqueda o filtrado de la capa de aplicación.

2. Recuperación: Buscar y extraer el conjunto de datos que coincida con la consulta en la base de datos.

3. Visualización: Devolver los datos recuperados a la aplicación para que puedan ser mostrados, analizados o utilizados.


Método HTTP: Se mapea a la solicitud GET.

Sentencia SQL: Se traduce a SELECT FROM.


### Parámetros de consulta: Utilizar parámetros de consulta en la URL para especificar los datos que se desean obtener, como filtros, ordenación y paginación.

### Retorno de información: Devolver la información solicitada en un formato adecuado, como JSON o XML.

### Código de estado HTTP: Devolver un código de estado HTTP adecuado, como 200 OK, para indicar que la solicitud ha sido procesada con éxito

### Manejo de errores: Manejar errores y excepciones adecuadamente, devolviendo información útil sobre el error y un código de estado HTTP correspondiente (por ejemplo, 404 Not Found o 500 Internal Server Error).

### Cacheabilidad: Permitir que la respuesta sea cacheada por el navegador o un proxy inverso para mejorar el rendimiento y reducir la carga en el servidor.

### Seguridad: Asegurarse de que la información sensible no sea expuesta a través de la operación GET

##### Ya que los datos se envían en la URL y pueden ser visibles en el historial del navegador y en los registros del servidor.


### Ejemplos

#### Visualización de Recursos Individuales (Detail View)

Este es el caso de uso para recuperar un único registro específico utilizando su identificador único (ID).

Ver un perfil de usuario: Cargar la información de un usuario específico al hacer clic en su nombre.

Ver los detalles de un producto: Mostrar la página de detalles completa de un solo artículo en una tienda en línea.

Leer un artículo: Recuperar el contenido completo de una publicación de blog.


#### Visualización de Colecciones o Listas (List View)

Este caso de uso recupera múltiples registros, a menudo con la aplicación de filtros, ordenación o paginación.

Página de inicio/feed: Mostrar una lista de publicaciones recientes o relevantes (como un timeline de redes sociales).

Resultados de búsqueda: Recuperar y mostrar una lista de productos o documentos que coinciden con un término de búsqueda.

Listado de inventario: Mostrar una tabla con todos los productos, posiblemente ordenados por precio o stock.
    

#### Generación de Reportes y Análisis

Aquí, la operación 'Read' se utiliza para realizar cálculos y agregaciones sobre grandes conjuntos de datos.

Reportes financieros: Calcular la suma total de ventas del mes, usando la cláusula SUM en SQL.

Métricas del sistema: Contar el número total de usuarios registrados (usando COUNT).

Gráficos de datos: Recuperar datos agrupados por categoría para generar un gráfico de barras o circular.



## UPDATE/PUT(todo)/PATCH(parcial)/UPDATE SET

Modificar o cambiar los valores de uno o más campos en un registro de datos ya existente

1. Identificación: Localizar el registro específico que necesita ser modificado, generalmente usando su identificador único (ID).

2. Modificación: Aplicar los nuevos valores a los campos seleccionados.

3. Persistencia del cambio: Asegurar que los datos actualizados se guarden de forma duradera, sobrescribiendo el estado anterior.


Método HTTP: Se mapea a PUT (para reemplazar todo el recurso) o PATCH (para aplicar una modificación parcial).

Sentencia SQL: Se traduce a UPDATE ... SET.


### PATCH y PUT

#### Método HTTP: Utilizar el método HTTP PATCH para actualizar parcialmente un recurso existente.

#### Cuerpo de la solicitud: Incluir solo los campos que se desean actualizar en el cuerpo de la solicitud, generalmente en formato JSON o XML.

#### Método HTTP: Utilizar el método HTTP PUT para actualizar completamente un recurso existente.

#### Cuerpo de la solicitud: Incluir todos los campos del recurso en el cuerpo de la solicitud, generalmente en formato JSON o XML.

#### Identificador del recurso: Incluir el identificador único (ID) del recurso a actualizar en la URL o como parámetro de consulta.

#### Validación de datos: Realizar validaciones en el servidor para asegurarse de que los datos proporcionados sean correctos y consistentes

#### Retorno de información: Devolver información relevante sobre el recurso actualizado, como su estado actual.

#### Código de estado HTTP: Devolver un código de estado HTTP adecuado, como 200 OK o 204 No Content, para indicar que la actualización ha sido procesada con éxito.

#### Manejo de errores: Manejar errores y excepciones adecuadamente, devolviendo información útil sobre el error y un código de estado HTTP correspondiente (por ejemplo, 400 Bad Request o 404 Not Found).

#### Idempotencia: Asegurarse de que la operación sea idempotente, es decir, que realizar la misma solicitud varias veces tenga el mismo efecto que realizarla una sola vez.


##### PUT requiere que se proporcionen todos los campos del recurso

##### Puede ser menos eficiente si solo se necesita actualizar un campo específico.


### Ejemplos

#### Edición de Información y Perfiles

Es el uso más directo, donde los usuarios o administradores cambian datos personales o de configuración.

Cambio de información personal: Un usuario edita su nombre, dirección, número de teléfono o contraseña en su perfil.

Edición de contenido: Un autor revisa y guarda una versión corregida de una publicación de blog o un documento.

Modificación de configuraciones: Cambiar las preferencias de notificación de una aplicación o la configuración de privacidad


#### Gestión de Estados y Cantidades

Fundamental en sistemas transaccionales y de inventario, donde los valores cambian constantemente.

Actualización de inventario (Stock): Cuando se vende un producto, la cantidad en stock de ese producto debe reducirse (por ejemplo, SET Stock = Stock - 1).

Cambio de estado de un pedido: Un pedido pasa de estar "Pendiente" a "Procesando", "Enviado" o "Entregado".

Contadores: Incrementar o decrementar el número de "me gusta" o vistas de una publicación.


#### Tareas Administrativas y de Mantenimiento

Utilizado por la lógica del sistema o por los administradores para mantener la integridad de los datos.

Corrección de errores: Un administrador corrige un precio mal ingresado o una descripción incorrecta de un producto.

Asignación de roles: Cambiar el rol de un usuario de "Miembro" a "Administrador".

Timestamps: Actualizar automáticamente el campo fecha_modificacion o ultima_conexion en un registro cada vez que se produce un cambio


## Características de DELETE/DELETE FROM

Remover permanentemente uno o más registros de datos

##### Esta operación es definitiva y debe manejarse con cuidado, ya que su objetivo es liberar recursos y eliminar datos obsoletos o incorrectos.

1. Identificación: Localizar el registro específico que se debe eliminar, generalmente mediante su identificador único (ID).

2. Remoción: Eliminar el registro y sus posibles referencias en tablas relacionadas (dependiendo de las reglas de la base de datos).

3. Finalización: Marcar el dato como no recuperable, a menos que existan copias de seguridad.


Método HTTP: Se mapea a la solicitud DELETE.

Sentencia SQL: Se traduce a DELETE FROM.


### Método HTTP: Utilizar el método HTTP DELETE para eliminar un recurso existente.

### Identificador del recurso: Incluir el identificador único (ID) del recurso a eliminar en la URL o como parámetro de consulta.

### Validación de permisos: Verificar que el usuario tenga los permisos necesarios para eliminar el recurso.

### Retorno de información: Devolver información relevante sobre el resultado de la eliminación, como un mensaje de confirmación o un código de estado HTTP adecuado.

### Código de estado HTTP: Devolver un código de estado HTTP adecuado, como 204 No Content o 200 OK, para indicar que la eliminación ha sido procesada con éxito.

### Manejo de errores: Manejar errores y excepciones adecuadamente, devolviendo información útil sobre el error y un código de estado HTTP correspondiente (por ejemplo, 404 Not Found si el recurso no existe).

### Idempotencia: Asegurarse de que la operación sea idempotente, es decir, que realizar la misma solicitud varias veces tenga el mismo efecto que realizarla una sola vez (en este caso, el recurso ya está eliminado después de la primera solicitud).

### Confirmación: Considerar implementar una confirmación adicional antes de eliminar el recurso, especialmente si la eliminación es irreversible.


### Ejemplos

Los casos de uso de 'Delete' se centran en la limpieza, la privacidad y la gestión de la obsolescencia de los datos.


#### Eliminación Definitiva de Datos (Hard Delete)

Este es el 'Delete' tradicional que elimina físicamente el registro de la tabla.

Cierre de cuenta: Cuando un usuario solicita el borrado de su cuenta, sus datos y perfil se eliminan de la base de datos (por razones de privacidad y cumplimiento).

Eliminar contenido propio: Un usuario borra un post, una foto o un comentario que ya no quiere que esté visible.

Limpieza de inventario/registros: Eliminar un producto que ha sido descontinuado o borrar facturas y registros de log muy antiguos que ya no son necesarios (siguiendo políticas de retención).
    

#### Eliminación Suave o Lógica (Soft Delete)

En lugar de eliminar físicamente el registro, se utiliza la operación Update para simular la eliminación.

Marcar como inactivo: El registro no se elimina de la base de datos, sino que se actualiza un campo booleano, como is_deleted = TRUE o status = 'Inactivo'.

Ventajas: Esto permite que el sistema:

Recupere el dato si fue eliminado por error.

Mantenga la integridad referencial para auditorías o historial, ya que las claves foráneas siguen apuntando a un registro que existe, aunque esté inactivo.

Caso de Uso: Desactivar un usuario en lugar de borrarlo, para mantener su historial de transacciones intacto.         


#### Eliminación por Cascading

Se refiere a la eliminación automática de registros relacionados cuando se elimina el registro primario.

Eliminar un pedido completo: Si se borra un registro de Pedido, los registros relacionados en la tabla Ítems_del_Pedido (que contienen los productos específicos de ese pedido) deben eliminarse automáticamente para evitar datos huérfanos.



## INSERT INTO 

Dos formatos principales

Dependiendo de si especificas los nombres de las columnas

O si asumes el orden de la tabla:


1. Especificando Columnas (Recomendado)

Este formato es el más seguro porque no depende del orden de las columnas en la tabla

##### Te permite omitir columnas que aceptan valores por defecto (DEFAULT) o nulos (NULL).

```
INSERT INTO nombre_tabla (columna1, columna2, columna3, ...)
VALUES (valor1, valor2, valor3, ...);
```


2. Asumiendo el Orden de las Columnas

Este formato solo funciona si proporcionas valores para todas las columnas de la tabla y en el orden exacto en que fueron definidas.

```
INSERT INTO nombre_tabla
VALUES (valor1, valor2, valor3, ...);
```


### Ej: tabla llamada Empleados con las siguientes columnas: ID, Nombre, Departamento y Salario.

1. Inserción Específica

Para añadir un nuevo empleado, especificando solo el nombre y el departamento (y asumiendo que ID es autoincremental y Salario tiene un valor por defecto de 0):

```
INSERT INTO Empleados (Nombre, Departamento)
VALUES ('Ana Gómez', 'Ventas');
```


2. Inserción Completa

Para añadir un empleado proporcionando valores para todas las columnas excepto ID:

```
INSERT INTO Empleados (Nombre, Departamento, Salario)
VALUES ('Luis Pérez', 'Marketing', 55000.00);
```


### Inserción multiples filas

Insertar varios registros con una sola sentencia

Separando cada conjunto de valores con una coma:

```
INSERT INTO Empleados (Nombre, Departamento)
VALUES 
('Carlos Ruiz', 'IT'),
('Elena Sanz', 'RRHH');
```


### Inserción desde una Consulta (INSERT INTO SELECT)

##### Forma poderosa de copiar datos de una tabla a otra, o de archivar datos

La sentencia toma el resultado de una consulta SELECT y lo inserta en la nueva tabla.

```
INSERT INTO Empleados_Archivados (Nombre, Departamento)
SELECT Nombre, Departamento
FROM Empleados
WHERE Salario < 30000;
```

##### Esta sentencia insertaría en la tabla Empleados_Archivados todos los empleados con un salario inferior a $30,000.

#### INSERT INTO es la puerta de entrada para que los datos pasen de ser volátiles (en la memoria de una aplicación) a ser persistentes



## CREATE e INSERT INTO

Creando una base de datos para una pequeña librería y queremos una tabla para registrar a los autores.


1. CREATE TABLE (Definir la Estructura)

##### Esta sentencia Crea la tabla Autores y define sus columnas y tipos de datos

```
CREATE TABLE Autores (
    AutorID INT PRIMARY KEY AUTO_INCREMENT, -- Clave primaria autoincremental
    Nombre VARCHAR(100) NOT NULL,          -- Nombre completo del autor
    Nacionalidad VARCHAR(50),              -- País de origen
    FechaNacimiento DATE                   -- Fecha de nacimiento
);
```

##### Hemos definido el recurso (el Autor) y las reglas de los datos que puede contener. 

La tabla existe, pero está vacía.


 2. INSERT INTO (Crear los Registros)

Ahora, usamos INSERT INTO para ejecutar la operación Create (CRUD), añadiendo registros a la tabla que acabamos de definir.

Un Registro: 

```
INSERT INTO Autores (Nombre, Nacionalidad, FechaNacimiento)
VALUES ('Gabriel García Márquez', 'Colombia', '1927-03-06');
```

Multiples registros:

```
INSERT INTO Autores (Nombre, Nacionalidad, FechaNacimiento)
VALUES 
('Isabel Allende', 'Chile', '1942-08-02'),
('Haruki Murakami', 'Japón', '1949-01-12');
```

Después de ejecutar estas sentencias, la tabla Autores ahora contiene los siguientes datos persistentes:

AutorID	Nombre	Nacionalidad	FechaNacimiento

1	Gabriel García Márquez	Colombia	1927-03-06

2	Isabel Allende	Chile	1942-08-02

3	Haruki Murakami	Japón	1949-01-12


#### CREATE TABLE es un comando de Definición de Datos (DDL) que sienta las bases

#### INTO es un comando de Manipulación de Datos (DML)

##### Ejecuta la operación 'Create' de CRUD, poblando la tabla con información.



## Select

Es la instrucción más importante y más utilizada en SQL (Structured Query Language).

#### Su función principal es implementar la operación Read (Leer) del modelo CRUD,


#### SELECT permite especificar qué información quieres y de dónde la quieres obtener.

```
SELECT columnas
FROM tabla;
```

SELECT columnas: Indica qué columnas quieres ver.

Puedes listar los nombres de las columnas que te interesan (ej: Nombre, Salario).

##### Puedes usar el asterisco (*) para seleccionar todas las columnas de la tabla (ej: SELECT *).


FROM tabla: Indica de dónde vas a recuperar esos datos (el nombre de la tabla).


#### El verdadero poder de SELECT reside en las cláusulas que puedes añadir para filtrar, ordenar y agrupar los datos

### 1. Cláusula WHERE (Filtrado)

Aplicar filtros a los datos, de modo que solo se recuperen las filas que cumplen una determinada condición.

Caso de Uso: Recuperar solo los productos con un precio superior a 50.

```
SELECT Nombre, Precio 
FROM Productos 
WHERE Precio > 50.00;
```


### 2. Cláusula ORDER BY (Ordenación)

Se utiliza para ordenar el conjunto de resultados por una o más columnas

De forma ascendente (ASC, por defecto) o descendente (DESC).

Caso de Uso: Listar los empleados ordenados por apellido, de la A a la Z.

```
SELECT Nombre, Apellido 
FROM Empleados 
ORDER BY Apellido ASC;
```


### 3. Cláusula GROUP BY (Agrupación)

#### Se utiliza en combinación con funciones de agregación (como COUNT, SUM, AVG, MAX, MIN) para agrupar las filas que tienen el mismo valor en una columna.

Caso de Uso: Contar cuántos empleados hay en cada departamento.

```
SELECT Departamento, COUNT(EmpleadoID) AS TotalEmpleados 
FROM Empleados 
GROUP BY Departamento;
```


### Cláusula JOIN (Combinación de Tablas)

Permite combinar filas de dos o más tablas en función de una columna relacionada entre ellas (claves foráneas).

Caso de Uso: Listar el título de cada libro junto con el nombre de su autor.

```
SELECT L.Titulo, A.Nombre 
FROM Libros AS L
JOIN Autores AS A ON L.AutorID = A.AutorID;
```



## WHERE

#### La función principal de WHERE es aplicar una condición lógica a cada fila de una tabla (o el resultado de un join).

##### Solo las filas para las cuales la condición se evalúa como verdadera (TRUE) se incluyen en el resultado de la operación.

WHERE siempre sigue a las cláusulas FROM o JOIN:

```
SELECT columna1, columna2 
FROM nombre_tabla 
WHERE condicion_de_filtrado;
```


### Operadores en WHERE

##### La condición dentro de la cláusula WHERE se construye utilizando operadores de comparación y operadores lógicos.


#### Comparación

```
=	Igual a	WHERE Ciudad = 'Madrid'

>	Mayor que	WHERE Edad > 30

<	Menor que	WHERE Salario < 50000

>=	Mayor o igual que	WHERE Stock >= 10

<=	Menor o igual que	WHERE Puntuacion <= 5

<> o !=	Diferente de	WHERE Estado != 'Inactivo'
```


#### Lógicos (Combinación de Condiciones)

##### Combinar múltiples condiciones de filtrado

```
AND	Ambas condiciones son verdaderas.	WHERE Edad > 18 AND Pais = 'España'

OR	Al menos una condición es verdadera.	WHERE Departamento = 'Ventas' OR Departamento = 'Marketing'

NOT	Niega la condición (la invierte).	WHERE NOT Pais = 'Francia'
```


#### Operadores Especiales

```
BETWEEN	Valor dentro de un rango inclusivo.	WHERE Precio BETWEEN 10 AND 20

LIKE	Coincidencia de patrones (con % y _).	WHERE Nombre LIKE 'A%' (Nombres que empiezan con A)

IN	Valor coincide con cualquiera de los valores de una lista.	WHERE ID IN (101, 105, 110)

IS NULL	El valor de la columna es nulo.	WHERE Email IS NULL
```


### WHERE en CRUD

1. READ (Lectura - SELECT): Para recuperar el subconjunto exacto de datos que el usuario necesita ver.

Ejemplo: SELECT * FROM Usuarios WHERE UltimaConexion < '2025-01-01';


2. UPDATE (Actualización - UPDATE): Para especificar qué filas deben ser modificadas. 

#### Si olvidas el WHERE, ¡modificarías todos los registros de la tabla!

Ejemplo: UPDATE Productos SET Precio = Precio * 1.10 WHERE Categoria = 'Electrónica';


3. DELETE (Eliminación - DELETE): Para especificar qué filas deben ser eliminadas. 

#### Si olvidas el WHERE, ¡eliminarías toda la tabla!

Ejemplo: DELETE FROM Logs WHERE Fecha < '2024-01-01';


##### WHERE es el control de acceso a nivel de fila en SQL



## OR y AND

operadores lógicos (o booleanos)

#### Combinar múltiples condiciones de filtrado

##### Permite refinar y especificar con precisión los registros que deseas seleccionar, actualizar o eliminar.


1. Objetivo: Obtener a todos los empleados que trabajan en el departamento de 'Ventas' Y ganan un salario mayor a $60,000.

```
SELECT Nombre, Salario, Departamento
FROM Empleados
WHERE Departamento = 'Ventas' AND Salario > 60000;
```

#### AND: Solo los registros que cumplen ambas condiciones serán devueltos.


2. Objetivo: Obtener a todos los productos cuya categoría sea 'Electrónica' O cuyo precio sea menor a $20.

```
SELECT Nombre, Categoria, Precio
FROM Productos
WHERE Categoria = 'Electrónica' OR Precio < 20;
``` 

#### OR: Los registros que cumplen la condición de categoría, la condición de precio, o ambas, serán devueltos.


Objetivo: Obtener clientes que vivan en 'Madrid' Y que tengan el estado de cuenta 'Activo', O simplemente obtener cualquier cliente que viva en 'Barcelona'.

Con paréntesis (correcto y claro):

```
SELECT * FROM Clientes
WHERE (Ciudad = 'Madrid' AND Estado = 'Activo') OR Ciudad = 'Barcelona';
-- SQL evalúa el grupo entre paréntesis primero.
```

Los paréntesis son esenciales para asegurar que el motor de la base de datos interprete las condiciones exactamente como lo deseas.

##### AND tiene mayor precedencia que OR. Esto significa que SQL evaluará las condiciones conectadas por AND primero.


## LIKE

#### Operador de comparación utilizado en la cláusula WHERE

##### Para buscar patrones específicos en datos de texto (cadenas de caracteres).

A diferencia del operador de igualdad (=), que requiere una coincidencia exacta

##### LIKE permite realizar búsquedas parciales o difusas.


#### Es indispensable para realizar búsquedas flexibles donde no se conoce la cadena completa

##### o se quiere encontrar un valor basado en su estructura.

```
SELECT columna1, columna2
FROM tabla
WHERE columna_texto LIKE 'patron_de_busqueda';
```


### Caracteres Comodín (Wildcards): Para construir el patrón de búsqueda

LIKE utiliza dos caracteres comodín principales que representan caracteres desconocidos:


1. Porcentaje (%)
Representa cero, uno o múltiples caracteres de cualquier tipo. Es el comodín más usado.

Ejemplo:

'A%': Busca cualquier valor que empiece con la letra 'A'.

'%man%': Busca cualquier valor que contenga la secuencia 'man' en cualquier posición.

'%s' : Busca cualquier valor que termine con la letra 's'.


2. Guion bajo (_)
Representa exactamente un solo carácter de cualquier tipo.

Ejemplo:

'_a_a' : Busca cadenas de cuatro letras que tengan una 'a' en la segunda y cuarta posición (ej., 'data', 'casa').


### Usos

Nombres que empiezan con "Jo"	WHERE Nombre LIKE 'Jo%'	Encontraría: José, John, Joaquina.

Nombres que terminan en "ez"	WHERE Nombre LIKE '%ez'	Encontraría: Pérez, Rodríguez, González.

Nombres que tienen "an" en el medio	WHERE Nombre LIKE '%an%'	Encontraría: Juan, Manuel, Santiago.

##### Nombres de exactamente 5 letras que terminan en "o"	WHERE Nombre LIKE '____o'	Encontraría: Carlos (si fuera 5 letras), Ricardo.

Nombres que tienen una "a" en la segunda posición	WHERE Nombre LIKE '_a%'	Encontraría: Laura, Pablo, Camilo.


### LIKE vs. Igualdad

WHERE Columna = 'Madrid' requiere que el valor sea exactamente "Madrid".

WHERE Columna LIKE 'Madrid' es equivalente a la anterior (sin comodines).

WHERE Columna LIKE 'Madri%' permite que la cadena contenga "Madrid" al principio y cualquier cosa después (ej., Madrid Central).


#### El rendimiento de las consultas con LIKE puede ser más lento que el de las consultas con =

##### Especialmente cuando el comodín % se usa al principio del patrón, ya que impide que la base de datos utilice índices de manera eficiente.
    

### Uso de %

Representa cero, uno o múltiples caracteres de cualquier tipo.

Caso de Uso: Se usa para buscar coincidencias de cualquier longitud antes, después o en medio de una parte conocida de la cadena.

'A%'	Empieza con 'A'.	Ana, Abraham, A
'%ta'	Termina con 'ta'.	Venta, Carta, Testa
'%an%'	Contiene 'an' en cualquier lugar.	Espana, Januario, plano
'L%s'	Empieza con 'L' y termina con 's'.	Luis, Lápices, Lámparas


### Uso de _

Representa una coincidencia posicional.

Significado: Representa exactamente un único carácter de cualquier tipo.

Caso de Uso: Se usa para forzar una longitud específica o para buscar patrones donde solo una posición es variable.

```
'C_sa'	Empieza con 'C', un carácter cualquiera, y termina con 'sa'.	Casa, Cosa, C_sa
'____'	Exactamente cuatro caracteres.	mesa, azul, cama
'___@%.com'	Dominio con exactamente tres letras antes del '@'.	abc@mail.com, xyz@web.com
```

Uso con LIKE: Los comodines solo son funcionales cuando se utilizan con el operador LIKE (o NOT LIKE para buscar lo que no coincide con el patrón).

Mayúsculas/Minúsculas: La coincidencia de patrones puede ser sensible o no a mayúsculas y minúsculas, dependiendo de la configuración de la base de datos 

Por ejemplo, MySQL suele ser insensible a mayúsculas/minúsculas por defecto

Mientras que PostgreSQL puede ser sensible.



## ORDER BY

Fundamental para la operación Read (Leer) de CRUD

Para especificar el orden en el que se deben presentar los registros de un conjunto de resultados de una consulta SELECT.


Cuando ejecutas una consulta SELECT simple, la base de datos devuelve las filas en el orden en que las encuentra

A menudo es el orden físico en que fueron insertadas, o un orden indefinido.


#### ORDER BY te permite forzar un orden lógico que sea significativo para el usuario.

```
SELECT columna1, columna2, ...
FROM nombre_tabla
WHERE condicion_filtrado
ORDER BY columna_ordenacion [ASC | DESC];
```

##### ORDER BY: Se coloca al final de la sentencia SELECT (después de FROM y WHERE).

columna_ordenacion: Es el nombre de la columna por la cual deseas ordenar los resultados.

##### [ASC | DESC]: Indica la dirección de la ordenación:

ASC (Ascendente): Es el valor por defecto. Ordena de menor a mayor (A a Z, 1 a 10, fechas más antiguas a más recientes).

DESC (Descendente): Ordena de mayor a menor (Z a A, 10 a 1, fechas más recientes a más antiguas).


### Ordenación Multi-Nivel

Una de las características más útiles de ORDER BY

La base de datos aplica el orden de la primera columna

y si dos o más filas tienen el mismo valor en esa columna (un "empate")

utiliza la segunda columna para desempatar, y así sucesivamente.


#### Ej: Objetivo: Listar a los empleados, primero ordenados por Departamento (alfabéticamente) y, dentro de cada departamento, ordenados por Salario de forma descendente (el más alto primero).

```
SELECT Nombre, Departamento, Salario
FROM Empleados
ORDER BY Departamento ASC, Salario DESC;
```

1. Agrupa y ordena todos los empleados por su Departamento (A-Z).

2. Dentro del grupo de 'Marketing', ordena a esos empleados por Salario, de mayor a menor.

3. Luego, dentro del grupo de 'Ventas', ordena a esos empleados por Salario, de mayor a menor, y así sucesivamente.



### Casos de uso

Aplicaciones Web: Mostrar resultados de búsqueda por relevancia, publicaciones por fecha de creación
(más recientes primero, usando DESC), o listas de precios (más baratos primero, usando ASC).

Informes: Organizar datos por categorías, zonas geográficas, o totales para facilitar la lectura y el análisis

##### Limitación: A menudo se combina con la cláusula LIMIT para obtener, por ejemplo, los 10 productos más caros (ORDER BY Precio DESC LIMIT 10).



## GROUP BY

Implementa la operación Read (Leer) de CRUD

#### Enfocada en el análisis y resumen de datos

##### Su función principal es agrupar filas que tienen el mismo valor en una o más columnas

Permitiendo aplicar funciones de agregación a cada uno de esos grupos.


#### El propósito de GROUP BY es transformar un conjunto de filas detalladas en un conjunto de filas resumidas.

```
SELECT columna_agrupacion, funcion_agregacion(columna_calculo)
FROM nombre_tabla
WHERE condicion_filtrado
GROUP BY columna_agrupacion
HAVING condicion_grupo
ORDER BY columna_ordenacion;
```

1. Agrupación: La cláusula GROUP BY toma todas las filas de la tabla y las organiza en grupos
Todas las filas que tienen el mismo valor en la columna_agrupacion se colocan en el mismo grupo.

2. Agregación: La sentencia SELECT luego aplica una función de agregación (como COUNT, SUM, AVG, MAX, MIN) a cada uno de esos grupos.


### Ej: tabla Pedidos con miles de ventas.

##### Objetivo: ¿Cuál fue el total de ventas por cada Cliente?

```
SELECT 
    ClienteID,                      -- Columna de Agrupación
    SUM(Monto) AS TotalVendido      -- Función de Agregación
FROM Pedidos
GROUP BY ClienteID;
```

Sin GROUP BY: Obtendrías el SUM(Monto) de todos los pedidos juntos.

Con GROUP BY: El sistema crea un grupo para el ClienteID 1, calcula la suma de sus montos; luego crea un grupo para el ClienteID 2, calcula la suma de sus montos, y así sucesivamente.


### Funciones de Agregación

##### Solo tienen sentido cuando se usan con o sin GROUP BY, ya que operan sobre conjuntos de datos:

COUNT(): Cuenta el número de filas en el grupo.

SUM(): Calcula la suma total de valores numéricos en el grupo.

AVG(): Calcula el promedio (media aritmética) de los valores en el grupo.

MAX(): Encuentra el valor máximo en el grupo.

MIN(): Encuentra el valor mínimo en el grupo.


### HAVING: se utiliza exclusivamente con GROUP BY.

```
SELECT ClienteID, SUM(Monto) AS TotalVendido
FROM Pedidos
GROUP BY ClienteID
HAVING SUM(Monto) > 1000;
```

##### WHERE no funcionaría aquí, ya que el filtro se aplica sobre el resultado de la función SUM(), no sobre los datos individuales.


#### GROUP BY es la columna vertebral de la inteligencia de negocios y el análisis de datos en SQL, permitiendo la consolidación y el resumen de grandes volúmenes de información.



## JOIN: una de las herramientas más cruciales

#### Su función es combinar filas de dos o más tablas

##### Basándose en una columna relacionada: un campo que existe en ambas tablas, como una clave primaria y una clave foránea

##### Sin JOIN, solo podrías recuperar datos de una tabla a la vez

##### Limitaría la capacidad de obtener una visión completa de la información relacionada.


### Claves Relacionadas

##### En una base de datos relacional, la información se divide en tablas separadas

Para evitar redundancia

JOIN se encarga de "reunir" esa información.

Tabla A (e.g., Autores) tiene una Clave Primaria (AutorID).

#### Tabla B (e.g., Libros) tiene una Clave Foránea (AutorID) que apunta a la Tabla A.

##### JOIN utiliza estas dos columnas (AutorID) para emparejar cada libro con su autor correcto.


### Tipos de JOIN

##### Cada uno con una regla diferente sobre cómo manejar las filas que no tienen una coincidencia en la otra tabla.

1. INNER JOIN (La Intersección)

Función: Devuelve solo las filas que tienen coincidencias en ambas tablas.

Caso de Uso: Es el más común. Por ejemplo, si quieres listar solo los autores que tienen libros registrados y solo los libros que tienen un autor asignado.

```
SELECT L.Titulo, A.Nombre 
FROM Libros AS L
INNER JOIN Autores AS A ON L.AutorID = A.AutorID;
```

Muestra solo los libros que tienen un autor y solo los autores que tienen al menos un libro. Las filas sin coincidencias en ambos lados se excluyen.


2. LEFT JOIN (Preservar la Izquierda)

Función: Devuelve todas las filas de la tabla izquierda (la primera tabla nombrada en la cláusula FROM) y las filas coincidentes de la tabla derecha.

Si no hay coincidencia en la tabla derecha, las columnas de la derecha mostrarán el valor NULL.

Caso de Uso: Por ejemplo, si quieres ver todos los autores, incluso aquellos que aún no tienen ningún libro registrado. 

```
SELECT A.Nombre, L.Titulo
FROM Autores AS A -- Tabla Izquierda (preservada)
LEFT JOIN Libros AS L ON A.AutorID = L.AutorID;
```

Resultado: Muestra todos los autores. Si un autor no tiene libros, su Titulo de libro aparecerá como NULL.


3. RIGHT JOIN (Preservar la Derecha)

Función: Devuelve todas las filas de la tabla derecha y las filas coincidentes de la tabla izquierda.

Si no hay coincidencia en la tabla izquierda, las columnas de la izquierda mostrarán NULL.

Caso de Uso: Es similar al LEFT JOIN, pero invertido. Por ejemplo, ver todos los libros, incluso si (por error de datos) no tienen un autor asignado

```
SELECT A.Nombre, L.Titulo
FROM Autores AS A
RIGHT JOIN Libros AS L ON A.AutorID = L.AutorID; -- Tabla Derecha (preservada)
```

Resultado: Muestra todos los libros. Si un libro no tiene autor, el Nombre del autor aparecerá como NULL.


4. FULL OUTER JOIN (Unión Completa)

Función: Devuelve las filas cuando hay una coincidencia en una de las tablas. Es la combinación del LEFT JOIN y el RIGHT JOIN.

Caso de Uso: Se utiliza para encontrar registros que tienen coincidencias y para identificar registros que no tienen ninguna coincidencia en la tabla relacionada (es decir, autores sin libros Y libros sin autor).

```
SELECT A.Nombre, L.Titulo
FROM Autores AS A
FULL OUTER JOIN Libros AS L ON A.AutorID = L.AutorID;
```

Resultado: Incluye todos los autores, todos los libros, y coloca NULL en los lados donde no hay coincidencia. 

##### (No todas las bases de datos SQL soportan FULL OUTER JOIN).



## Paginación

##### Técnica esencial utilizada para limitar la cantidad de filas que se devuelven en una consulta SELECT

##### Su objetivo es dividir un conjunto grande de resultados en páginas más pequeñas y manejables

Fundamental para el rendimiento y la experiencia del usuario en aplicaciones web.


#### La paginación te permite pedir, por ejemplo, los registros del 1 al 20 (Página 1),

Luego los registros del 21 al 40 (Página 2), y así sucesivamente.

Se logra en SQL usando dos cláusulas clave, aunque la sintaxis específica varía según el sistema de gestión de bases de datos (DBMS):


1. LIMIT (Limite): Especifica el número máximo de filas que deben devolverse.

2. OFFSET (Desplazamiento): Especifica cuántas filas deben saltarse desde el inicio del conjunto de resultados antes de comenzar a contarlas con LIMIT.

```
SELECT columna1, columna2
FROM nombre_tabla
ORDER BY columna_ordenacion -- ¡Crucial para la paginación!
LIMIT numero_filas
OFFSET desplazamiento_filas;
```


### Ej: mostrar 25 resultados por página (el límite) y el usuario quiere ver la tercera página:

1. Página 1: Filas 1-25. Se salta 0 filas.

```
... LIMIT 25 OFFSET 0;
```

2. Página 2: Filas 26-50. Se salta 25 filas.

```
... LIMIT 25 OFFSET 25;
```

3. Página 3: Filas 51-75. Se salta 50 filas.

```
... LIMIT 25 OFFSET 50;
```


#### Fórmula de Paginación

Para obtener la página N con un tamaño de página P:

```
OFFSET=(N−1)×P
```


### La Importancia de ORDER BY

#### La cláusula ORDER BY es obligatoria para una paginación correcta.

##### Si no especificas un orden, el orden en que la base de datos devuelve las filas es indefinido.

Podría causar que:

Una fila aparezca en la Página 1 una vez y luego en la Página 2 otra vez (duplicados).

Una fila sea omitida por completo

ORDER BY garantiza que la lista de resultados sea estable y consistente, de modo que el OFFSET siempre salte las mismas filas.



## LIMIT

Utilizada en la sentencia SELECT para restringir el número de filas que se devuelven en el conjunto de resultados.

La función principal de LIMIT es controlar el tamaño de la respuesta de la base de datos


La cláusula LIMIT se coloca al final de la consulta SELECT, después de las cláusulas FROM, WHERE, GROUP BY y ORDER BY.

```
SELECT columna1, columna2 
FROM nombre_tabla
-- ... otras cláusulas (WHERE, GROUP BY, etc.)
ORDER BY columna_ordenacion 
LIMIT numero_maximo_filas;
```


### Ej: Si tienes una tabla con miles de productos y solo quieres ver los primeros 10:

```
SELECT Nombre, Precio
FROM Productos
LIMIT 10;
```

##### El sistema deja de procesar y devolver resultados tan pronto como alcanza las 10 filas.


### Casos de uso 

1. Obtener los Registros Principales (Top N)

Para que LIMIT sea significativo, casi siempre debe usarse en conjunto con ORDER BY.

Esto garantiza que obtengas los registros más relevantes (los "mejores", los "más caros", los "más recientes", etc.).

Ejemplo: Encontrar el producto más caro.

```
SELECT Nombre, Precio
FROM Productos
ORDER BY Precio DESC  -- Ordenar del más caro al más barato
LIMIT 1;              -- Tomar solo el primero
```


2. Paginación

Junto con la cláusula OFFSET (Desplazamiento), LIMIT permite implementar la paginación, dividiendo grandes resultados en páginas más pequeñas

Ejemplo: Mostrar la segunda página con 20 resultados por página.

LIMIT 20: Indica que quieres 20 resultados.

OFFSET 20: Indica que quieres saltar los primeros 20 resultados (la primera página).

```
SELECT Nombre
FROM Clientes
ORDER BY ClienteID
LIMIT 20 OFFSET 20;
```


3. Pruebas y Desarrollo

Durante el desarrollo, usar LIMIT te permite probar consultas complejas o potencialmente lentas sin sobrecargar la base de datos ni tu red, al limitar la cantidad de datos que se transfieren. 

Aunque LIMIT y OFFSET son la forma estándar en MySQL, PostgreSQL y SQLite, otros sistemas como SQL Server u Oracle usan cláusulas específicas como TOP o FETCH NEXT ... ROWS ONLY para lograr el mismo efecto.



## OFFSET

Instrucción que se utiliza en conjunto con LIMIT para implementar la paginación.

#### Especificar cuántas filas se deben omitir o saltar desde el inicio del conjunto de resultados

##### Antes de que la base de datos comience a seleccionar las filas que serán devueltas.


#### Se coloca al final de la consulta SELECT y requiere que los datos estén ordenados para ser funcional.

```
SELECT columna1, columna2
FROM nombre_tabla
ORDER BY columna_ordenacion -- ¡Crucial!
LIMIT numero_filas 
OFFSET desplazamiento_filas;
```

OFFSET desplazamiento_filas: El número entero que indica cuántas filas al principio del conjunto ordenado deben ser ignoradas.


Imagina que estás mostrando 15 resultados por página y quieres obtener los registros de la cuarta página.

Página	4

Límite (LIMIT)	15 	Indica cuántas filas traer (las 15 de esa página).

Desplazamiento (OFFSET)	45 	(4 - 1) x 15  Indica cuántas filas ignorar (las 15 de la Pág 1, las 15 de la Pág 2 y las 15 de la Pág 3).


La consulta para obtener la cuarta página sería:

```
SELECT Nombre, FechaPublicacion
FROM Articulos
ORDER BY FechaPublicacion DESC
LIMIT 15 OFFSET 45
```

##### Esto recupera 15 artículos, empezando por el artículo número 46 de la lista ordenada.


#### Importancia de la Ordenación

LIMIT, OFFSET depende absolutamente de que haya una cláusula ORDER BY bien definida

Si no ordenas los resultados, la base de datos decidirá arbitrariamente el orden

El offset saltará filas diferentes en cada ejecución, lo que resultaría en:


Duplicación de registros entre páginas.

Omisión de registros


ORDER BY garantiza que el conjunto de resultados es siempre el mismo, permitiendo que OFFSET siempre salte el número correcto de filas anteriores



## UPDATE

##### Utilizada para implementar la operación Update (Actualizar) del modelo CRUD

##### Su función es modificar los valores existentes en una o más columnas dentro de las filas de una tabla.


#### Tiene dos componentes cruciales: SET para especificar los cambios y la cláusula WHERE para especificar qué filas se deben modificar.

```
UPDATE nombre_tabla
SET columna1 = nuevo_valor1, columna2 = nuevo_valor2, ...
WHERE condicion_filtrado;
```

UPDATE nombre_tabla: Indica la tabla en la que deseas realizar las modificaciones.

SET columna1 = nuevo_valor1: Indica qué columnas deben ser modificadas y qué nuevos valores deben recibir. Puedes actualizar una o varias columnas a la vez.

WHERE condicion_filtrado: Esta es la cláusula más importante. Define qué filas específicas serán afectadas por la actualización.


### Regla Crítica: Usar la Cláusula WHERE

##### Si omites la cláusula WHERE en una sentencia UPDATE, el motor de la base de datos aplicará los cambios a TODOS los registros de la tabla

##### Lo cual casi siempre resulta en una pérdida de datos catastrófica.


Sin WHERE: Se actualizarían todas las filas.

#### Con WHERE: Solo se actualizan las filas que cumplen la condición.


### Ej

1. Actualizar un Registro Específico

Objetivo: Cambiar el precio de un producto específico (con ID 10) que estaba mal catalogado.

```
UPDATE Productos
SET Precio = 25.99
WHERE ProductoID = 10;
```

Solo se modifica la fila cuyo ProductoID es igual a 10.


2. Actualizar Múltiples Registros (Actualización Masiva)

Objetivo: Aplicar un aumento salarial del 5% a todos los empleados del departamento de 'Ventas'.

```
UPDATE Empleados
SET Salario = Salario * 1.05
WHERE Departamento = 'Ventas';
```

Se utiliza el valor existente de la columna (Salario) para calcular el nuevo valor

Se aplica el cambio a todas las filas que cumplen la condición del WHERE.


3. Actualizar Múltiples Columnas

Objetivo: Cambiar el estado y la fecha de última modificación de una tarea que acaba de ser completada.

```
UPDATE Tareas
SET Estado = 'Completada', FechaUltimaModificacion = CURRENT_DATE()
WHERE TareaID = 5;
```

#### Ambas columnas se modifican simultáneamente en la misma fila.



## SET 

Componente fundamental de la sentencia UPDATE

#### Su única función es especificar los cambios que se deben realizar en las columnas de los registros seleccionados.

##### SET indica al motor de la base de datos qué columna va a ser modificada y cuál será su nuevo valor.

La sintaxis siempre sigue el formato de asignación: columna = valor.

```
UPDATE nombre_tabla
SET columna1 = nuevo_valor1, columna2 = nuevo_valor2, ...
WHERE condicion;
```

UPDATE nombre_tabla: Indica la tabla que se va a modificar.

SET: Introduce la lista de asignaciones de valor.

columna = nuevo_valor: Define la nueva información que se grabará. Puedes asignar valores fijos, resultados de expresiones o el valor de otra columna.


### Casos de uso

1. Asignar un Valor Fijo

El uso más directo es establecer un valor literal para una o más columnas.

Objetivo: Cambiar la Categoría de un producto a 'Oferta Especial'.

```
UPDATE Productos
SET Categoria = 'Oferta Especial'
WHERE ID = 5;
```


2. Usar una Expresión o Cálculo

Puedes usar el valor actual de una columna para calcular el nuevo valor, lo cual es muy común para incrementos o decrementos.

Objetivo: Aumentar el Precio de todos los productos en un 10%.

```
UPDATE Productos
SET Precio = Precio * 1.10
WHERE Categoria = 'Electrónica';
```


3. Asignar Múltiples Columnas a la Vez

Puedes modificar varias columnas en la misma operación UPDATE, separándolas por comas.

Objetivo: Marcar una tarea como completada y registrar la fecha de finalización

```
UPDATE Tareas
SET Estado = 'Completada', FechaFinalizacion = CURRENT_DATE()
WHERE TareaID = 10;
```


4. Asignar un Valor Nulo

Puedes usar SET para establecer el valor de una columna como NULL (siempre y cuando la columna no esté definida como NOT NULL).

Objetivo: Eliminar el Email del cliente ID 15.

```
UPDATE Clientes
SET Email = NULL
WHERE ClienteID = 15;
```


### UPDATE Condicional

Sentencia UPDATE junto con la cláusula WHERE

Y construcciones lógicas para modificar solo un subconjunto específico de filas que cumplen ciertas condiciones.


La Cláusula WHERE (La Condición)

Define el criterio de filtrado que debe cumplir una fila para ser seleccionada. La fila solo se actualiza si la condición se evalúa como verdadera (TRUE).


La Cláusula SET (El Cambio)

Define los nuevos valores que se aplicarán a las columnas de las filas que pasaron el filtro WHERE.

```
UPDATE Productos
SET Descuento = 0.15          -- Cambio: Aplicar 15% de descuento
WHERE Categoria = 'Verano';   -- Condición: Solo a productos de 'Verano'
```

Solo las filas donde Categoria es igual a 'Verano' serán modificadas.


#### Las actualizaciones condicionales pueden ser mucho más complejas, utilizando operadores lógicos (AND, OR), operadores de comparación (>, <, LIKE), y funciones de agregación.

1. Basado en Múltiples Criterios (AND/OR)

Permite aplicar el cambio solo si se cumplen dos o más condiciones simultáneamente.

Objetivo: Aumentar el salario solo a los empleados del departamento 'Marketing' Y que ganen menos de $50,000.

```
UPDATE Empleados
SET Salario = Salario * 1.10
WHERE Departamento = 'Marketing' AND Salario < 50000;
```


2. Actualización Basada en el Valor Actual

La condición se basa en el valor que el registro ya contiene.

Objetivo: Reducir el stock de los productos que tienen más de 100 unidades, para moverlos a almacén. 

```
UPDATE Productos
SET Stock = Stock - 10
WHERE Stock > 100;
```

3. Actualización Condicional con Valores Diferentes (CASE)

A veces, no solo quieres seleccionar las filas con condiciones

##### sino que quieres aplicar diferentes cambios a diferentes grupos dentro de la misma sentencia UPDATE.

Objetivo: Dar una bonificación diferente según el cargo del empleado.

Si es 'Gerente', dar $500 de bono.

Si es 'Supervisor', dar $200 de bono.
    
```
UPDATE Empleados
SET Salario = Salario +
    CASE 
        WHEN Cargo = 'Gerente' THEN 500
        WHEN Cargo = 'Supervisor' THEN 200
        ELSE 0 -- Si no cumple ninguna, no se le da bono (Salario + 0)
    END
WHERE Departamento IN ('Ventas', 'Marketing'); -- Condición de filtro inicial
```


## Funciones 

##### Son bloques de código predefinidos o definidos por el usuario que toman una entrada (argumentos o valores)

Realizan una acción o cálculo, y devuelven un resultado.

Son esenciales para procesar y manipular datos de manera eficiente.


### 1. Funciones de Agregación (Aggregate Functions)

##### Operan sobre un conjunto de filas (a menudo un grupo definido por GROUP BY)

Devuelven un único valor de resumen para ese grupo o conjunto. 

Son cruciales para el análisis de datos.

```
COUNT()	Cuenta el número de filas o valores no nulos.	SELECT COUNT(PedidoID) FROM Pedidos;

SUM()	Calcula la suma total de un conjunto de valores numéricos.	SELECT SUM(Salario) FROM Empleados;

AVG()	Calcula el promedio (media) de un conjunto de valores numéricos.	SELECT AVG(Precio) FROM Productos;

MAX()	Devuelve el valor más grande en el conjunto.	SELECT MAX(FechaNacimiento) FROM Clientes;

MIN()	Devuelve el valor más pequeño en el conjunto.	SELECT MIN(Stock) FROM Inventario;
```


### 2. Funciones Escalares (Scalar Functions)

Operan sobre un valor de entrada y devuelven un único valor de salida por cada fila procesada.

Se utilizan para manipular, formatear o calcular valores dentro de una columna.


#### A. Funciones de Cadenas (Strings)

Manipulan datos de texto:

LENGTH()	Devuelve la longitud de una cadena.	SELECT LENGTH(Nombre) FROM Usuarios;

UPPER()/LOWER()	Convierte el texto a mayúsculas/minúsculas.	SELECT UPPER(Apellido) FROM Empleados;

SUBSTRING()	Extrae una subcadena de una cadena.	SELECT SUBSTRING(Email, 1, 5) FROM Clientes;

CONCAT()	Concatena (une) dos o más cadenas.	SELECT CONCAT(Nombre, ' ', Apellido) FROM Empleados;


#### Funciones Numéricas

Realizan cálculos matemáticos:

ROUND()	Redondea un número a un número específico de decimales.	SELECT ROUND(Precio, 2) FROM Productos;

CEIL()/FLOOR()	Redondea al entero inmediatamente superior/inferior.	SELECT CEIL(3.14);

ABS()	Devuelve el valor absoluto de un número.	SELECT ABS(-100);



#### C. Funciones de Fecha y Hora

Manipulan valores de fecha y hora:

NOW()	Devuelve la fecha y hora actual del sistema.	INSERT INTO Logs (Fecha) VALUES (NOW());

DATE_ADD()	Añade un intervalo de tiempo a una fecha.	SELECT DATE_ADD(FechaEnvio, INTERVAL 7 DAY);

DATEDIFF()	Calcula la diferencia entre dos fechas.	SELECT DATEDIFF(FechaFin, FechaInicio);


### Alias: AS

Es una práctica común usar AS (Alias) con funciones para darle un nombre descriptivo a la columna de resultado

El nombre de la columna original sería el nombre de la función:

```
SELECT AVG(Salario) AS SalarioPromedio
FROM Empleados;
```

#### Las funciones son esenciales para realizar cualquier tipo de transformación de datos 

##### o análisis resumido directamente dentro de la base de datos, lo cual reduce la carga de procesamiento en la capa de aplicación.



## DELETE

##### DELETE es simple, pero su uso requiere la máxima precaución, ya que la acción de eliminación es, por defecto, permanente y puede ser irreversible sin copias de seguridad. 

```
DELETE FROM nombre_tabla
WHERE condicion_filtrado;
```

DELETE FROM nombre_tabla: Indica la tabla de la cual deseas eliminar registros.

WHERE condicion_filtrado: Esta es la cláusula más importante. Define qué filas específicas serán eliminadas.


### Regla Crítica: Usar la Cláusula WHERE

Al igual que con UPDATE, si omites la cláusula WHERE en una sentencia DELETE, la base de datos asumirá que deseas eliminar TODAS las filas de la tabla, vaciándola por completo.

Con WHERE: Solo se eliminan las filas que cumplen la condición.

##### Sin WHERE: Se eliminan todos los datos de la tabla (similar a un TRUNCATE TABLE, aunque TRUNCATE es más rápido y no genera logs de transacción en algunos sistemas).


### Ej

1. Eliminar un Registro Específico

Objetivo: Eliminar el registro de un cliente específico utilizando su identificador único (ID 105).

```
DELETE FROM Clientes
WHERE ClienteID = 105;
```

Solo se elimina la fila cuya ClienteID es igual a 105.


2. Eliminación Masiva Condicional

Objetivo: Eliminar todos los registros de logs (historial) que sean anteriores al 1 de enero de 2024.

```
DELETE FROM Logs
WHERE FechaRegistro < '2024-01-01';
```

Se eliminan todas las filas que cumplen la condición de fecha.


3. Eliminar Todos los Registros

Objetivo: Vaciar completamente la tabla ProductosTemporales.

```
DELETE FROM ProductosTemporales;
```

##### Advertencia: Esta sentencia eliminará todas las filas de la tabla.


### Soft Delete vs. Hard Delete

#### En el desarrollo profesional, rara vez se usa el DELETE físico directo (llamado Hard Delete).

En su lugar, a menudo se usa un Soft Delete

##### Soft Delete: En lugar de usar la sentencia DELETE, se usa UPDATE para establecer un campo booleano, como EstaEliminado a TRUE.

```
UPDATE Productos SET EstaEliminado = TRUE WHERE ProductoID = 20;
```

##### Ventaja: Los datos permanecen en la base de datos para auditorías o recuperación, pero son ignorados por la lógica de la aplicación (que filtra con WHERE EstaEliminado = FALSE).


## Integridad Referencial

##### Garantiza que las relaciones entre las tablas permanezcan válidas y consistentes.

Se basa en el uso de claves foráneas (Foreign Keys) para mantener vínculos precisos entre los datos

```
Un valor en una columna de una tabla (la clave foránea o FK)

que hace referencia a la clave primaria (PK) de otra tabla

debe existir en esa clave primaria o ser nulo.
```

No puedes hacer referencia a algo que no existe.


### Ej: dos tablas: Autores (tabla principal) y Libros (tabla dependiente).

1. La tabla Autores tiene la Clave Primaria (PK): AutorID.

2. La tabla Libros tiene la Clave Foránea (FK): AutorID.

#### La Integridad Referencial asegura que cada AutorID listado en la tabla Libros

##### debe corresponder a un AutorID real y existente en la tabla Autores.


### Restricciones que Aplica

#### La Integridad Referencial impide tres tipos de operaciones que podrían romper la consistencia de los datos:

1. Insertar Datos Huérfanos: No permite insertar un libro en la tabla Libros con un AutorID que no existe en la tabla Autores
Esto evitaría que un libro sea asignado a un autor inexistente.

2. Eliminar Registros Referenciados: No permite eliminar un autor de la tabla Autores si todavía hay libros que hacen referencia a ese AutorID.

3. Actualizar Claves Referenciadas: No permite cambiar el AutorID de un autor si existen libros que dependen de ese ID antiguo.


### Acciones Referenciales (ON DELETE / ON UPDATE)

#### Para manejar los casos 2 y 3 sin rechazar la operación por completo

##### Los SGDB ofrecen Acciones Referenciales que se definen en la clave foránea:


1. ON DELETE CASCADE

Si se elimina el registro principal (el autor), se eliminan automáticamente todos los registros dependientes (sus libros).

Relaciones fuertes (ej. una línea de pedido con su cabecera).


2. ON DELETE SET NULL

Si se elimina el registro principal, la clave foránea en los registros dependientes se establece como NULL.

Relaciones donde el dependiente puede existir sin el principal (ej. un empleado sin supervisor asignado).


3. ON DELETE RESTRICT

(Valor por defecto) La operación de eliminación en la tabla principal falla si hay registros dependientes.

Para proteger datos sensibles.



## Manejo de registros que son referenciados por una clave foránea (FK)

#### Las operaciones CRUD afectan a la tabla principal (la que contiene la Clave Primaria, PK)

##### Cuando es referenciada por otra tabla (la que contiene la Clave Foránea, FK).


1. Inserción (CRUD: Create)

La clave foránea actúa como un filtro de existencia durante la inserción.

Regla: El valor que se intenta insertar en la columna FK de la tabla dependiente debe existir como PK en la tabla principal.

Ejemplo: Si intentas insertar un Libro con un AutorID = 99, pero no hay un Autor con AutorID = 99 en la tabla Autores, la base de datos rechazará la inserción.

Manejo: Asegúrate de que los datos de la tabla principal se inserten antes que los datos de las tablas dependientes.

    
2. Actualización (CRUD: Update)

La clave foránea puede imponer restricciones en la tabla principal y en la tabla dependiente.

A. Actualización en la Tabla Dependiente (FK)

Regla: Se permite actualizar la FK en un registro dependiente, siempre que el nuevo valor exista en la PK de la tabla principal.

Ejemplo: Puedes cambiar el AutorID de un Libro de 1 a 2, siempre y cuando el AutorID = 2 exista en la tabla Autores.


B. Actualización en la Tabla Principal (PK)

Regla: El SGDB verifica las Acciones Referenciales definidas en la clave foránea (ON UPDATE).

Manejo de ON UPDATE:

CASCADE: Si actualizas el AutorID de 1 a 10 en la tabla Autores, el sistema actualizará automáticamente todos los Libros que referencian al AutorID = 1 a AutorID = 10.

RESTRICT / NO ACTION: El sistema rechazará la actualización en la tabla Autores si existen registros dependientes en la tabla Libros.

SET NULL: Si actualizas el AutorID en Autores, el sistema establecerá a NULL el AutorID en los Libros relacionados (solo si la columna FK acepta nulos)    


3. Eliminación (CRUD: Delete)

La eliminación es la operación más crítica y se gestiona mediante las Acciones Referenciales (ON DELETE) definidas en la FK.

Regla: El SGDB verifica si existen registros dependientes antes de permitir la eliminación en la tabla principal.

Manejo de ON DELETE:

CASCADE: Si eliminas un Autor de la tabla Autores, el sistema eliminará automáticamente todos los Libros escritos por ese autor. Esto es muy útil, pero peligroso si no se hace con precaución.

RESTRICT / NO ACTION (Por defecto): El sistema rechazará la eliminación del Autor si existen Libros que lo referencian. La aplicación debe primero eliminar los Libros y luego eliminar el Autor.

SET NULL: Si eliminas el Autor, el sistema establecerá el campo AutorID a NULL en los Libros relacionados (asumiendo que la columna AutorID en Libros permite valores nulos).


### Buenas Prácticas

#### 1. Prioriza RESTRICT o NO ACTION (Por defecto): Esto te da el mayor control. 

Obliga a tu código de aplicación a decidir qué eliminar o modificar primero, evitando eliminaciones o cambios accidentales en cascada.


#### 2. Usa CASCADE con Cuidado: Solo úsalo para relaciones donde la entidad dependiente no tiene sentido sin la entidad principal

(e.g., líneas de pedido que no sirven sin la cabecera del pedido).


#### 3. Encapsula en Transacciones: Cuando uses eliminaciones o actualizaciones masivas en tu código de aplicación

(especialmente cuando tienes que eliminar registros en la tabla dependiente antes de eliminar en la principal)

##### usa transacciones (BEGIN TRANSACTION, COMMIT, ROLLBACK) para asegurar la atomicidad de la operación.


## ON DELETE 

Cuando hay FK

##### Su propósito es especificar la Acción Referencial que la base de datos debe tomar en los registros de la tabla dependiente cuando se intenta eliminar el registro referenciado en la tabla principal.


Hay cuatro acciones principales que puedes definir con ON DELETE:

1. RESTRICT (o NO ACTION)

Comportamiento: Impide la eliminación del registro en la tabla principal si existe al menos una fila en la tabla dependiente que lo referencia.

Uso Típico: Es el comportamiento por defecto en muchos SGDB y el más seguro. Obliga a la aplicación a eliminar primero los registros dependientes.

Ejemplo: No puedes eliminar un Autor si todavía tiene Libros asociados
    
    
2. CASCADE

Comportamiento: Si se elimina el registro en la tabla principal, el SGDB automáticamente elimina todos los registros dependientes que lo referencian.

Uso Típico: Se usa para relaciones donde la entidad dependiente no tiene sentido sin la entidad principal (ej., eliminar una cabecera de pedido elimina todas sus líneas de detalle).

Ejemplo: Si eliminas un Autor, todos sus Libros se eliminan automáticamente de la tabla Libros. (Usar con extrema precaución).


3. SET NULL

Comportamiento: Si se elimina el registro en la tabla principal, la clave foránea en todos los registros dependientes se establece en NULL.

Requisito: La columna de la clave foránea en la tabla dependiente debe estar definida para aceptar valores nulos (NULL).

Uso Típico: Se usa para relaciones opcionales donde el registro dependiente puede existir sin la referencia.

Ejemplo: Si eliminas un Supervisor, el campo SupervisorID de todos los Empleados que supervisaba se establece en NULL.


4. SET DEFAULT

Comportamiento: Si se elimina el registro principal, la clave foránea en los registros dependientes se establece a su valor por defecto predefinido.

Requisito: La columna de la clave foránea debe tener un valor por defecto definido.

Uso Típico: Menos común, se usa para reasignar automáticamente los registros a una categoría genérica.

    
##### La cláusula ON DELETE se define cuando se crea la clave foránea:

```
CREATE TABLE Libros (
    LibroID INT PRIMARY KEY,
    Titulo VARCHAR(255),
    AutorID INT,
    -- Definición de la clave foránea y la acción ON DELETE
    FOREIGN KEY (AutorID) 
        REFERENCES Autores(AutorID) 
        ON DELETE CASCADE -- Se define la acción aquí
);
```


### CASCADE

##### Se utiliza en dos contextos principales dentro de la definición de una clave foránea

#### ON DELETE CASCADE y ON UPDATE CASCADE


En ambos casos, el comportamiento es:

##### La acción realizada en la tabla principal (la que contiene la Clave Primaria, PK)

##### Se replica automáticamente en las filas dependientes de la tabla que contiene la Clave Foránea (FK).


1. ON DELETE CASCADE (El más común)

Significado: Si eliminas un registro en la tabla principal, el sistema automáticamente eliminará todos los registros dependientes que lo referencien.
    
Ejemplo: Tienes una tabla Clientes (PK: ClienteID) y una tabla Pedidos (FK: ClienteID).

Si eliminas un cliente de la tabla Clientes, todos los pedidos asociados a ese cliente en la tabla Pedidos serán eliminados inmediatamente.    


2. ON UPDATE CASCADE

Significado: Si actualizas el valor de la clave primaria en la tabla principal, el sistema automáticamente actualizará ese valor en todas las filas dependientes.

Ejemplo: Si cambias el AutorID de '1' a '100' en la tabla Autores, el campo AutorID de todos los Libros escritos por ese autor será actualizado automáticamente de '1' a '100' en la tabla Libros.


La acción CASCADE se especifica al momento de crear la clave foránea:

```
CREATE TABLE Pedidos (
    PedidoID INT PRIMARY KEY,
    ClienteID INT,
    FOREIGN KEY (ClienteID) 
        REFERENCES Clientes(ClienteID)
        ON DELETE CASCADE   -- Si el cliente se va, sus pedidos se borran.
        ON UPDATE CASCADE   -- Si el ClienteID cambia, los pedidos lo reflejan.
);
```

CASCADE debe usarse con mucha cautela debido a su naturaleza destructiva.

Ventaja: Garantiza una integridad de datos perfecta y reduce el trabajo de codificación en la aplicación, ya que no tienes que escribir código extra para gestionar las eliminaciones y actualizaciones de la tabla dependiente.

Desventaja (Peligro): Si eliminas accidentalmente un registro en la tabla principal, puedes provocar una eliminación masiva de datos en múltiples tablas sin posibilidad de recuperación fácil, ya que el efecto es inmediato y sin confirmación adicional.

##### ON DELETE CASCADE se reserva para relaciones donde el registro dependiente no tiene sentido sin el registro principal (por ejemplo, los detalles de una factura no pueden existir sin la cabecera de la factura).  


#### Para datos sensibles (como cuentas de usuario), a menudo se prefiere ON DELETE RESTRICT

#### o la técnica de Soft Delete (eliminación suave) mediante la actualización de un indicador de estado.



## Soft Delete

En lugar de usar la sentencia SQL DELETE FROM (que realiza un Hard Delete o Eliminación Dura), el Soft Delete se implementa usando la sentencia UPDATE para modificar el estado de un registro.


### Componentes Clave

#### Para implementar el Soft Delete, la tabla debe contener al menos una columna de indicador de estado:


1. Columna Indicadora: Un campo booleano o de fecha que marca el estado de eliminación. Los nombres comunes son:

```
EstaEliminado (o IsDeleted): Tipo booleano (TRUE o 1).

FechaEliminacion (o DeletedAt): Tipo DATETIME o DATE.
```

2. Operación: La operación Delete (CRUD) se convierte en una operación Update (CRUD).


### Ej

#### A. Definición de la Columna

Añadir la columna a la tabla Productos:

```
ALTER TABLE Productos 
ADD COLUMN EstaEliminado BOOLEAN DEFAULT FALSE;
```

#### B. Ejecución del "Delete" Lógico (UPDATE)

Para "eliminar" el producto con ID 10:

```
UPDATE Productos
SET EstaEliminado = TRUE
WHERE ProductoID = 10;
```


#### C. Lógica de Lectura (Filtro READ)

##### Para que el sistema funcione correctamente, todas las consultas SELECT (Read) deben ser modificadas para excluir los registros marcados como eliminados:

```
SELECT Nombre, Precio 
FROM Productos 
WHERE EstaEliminado = FALSE; -- ¡Siempre hay que filtrar!
```


### Casos de Uso

##### El Soft Delete es la práctica preferida en sistemas transaccionales o legales por sus múltiples ventajas:

Recuperación	Permite restaurar un registro instantáneamente (cambiando EstaEliminado a FALSE) sin necesidad de copias de seguridad.

Auditoría/Legal	Los datos históricos y transaccionales se conservan, lo cual es vital para el cumplimiento normativo (GDPR, Sarbanes-Oxley, etc.).

Integridad Referencial	Evita problemas de ON DELETE RESTRICT o CASCADE. Las claves foráneas no se rompen porque el registro PK sigue existiendo, aunque esté marcado como inactivo.

Historial	Permite mantener el historial de pedidos o transacciones vinculadas al registro "eliminado"


#### Ej: Caso de Uso: Un cliente cierra su cuenta (Soft Delete), pero sus pedidos (que son referencias de FK) deben permanecer en la base de datos para fines contables y de auditoría.




# APIs RESTfull

##### Es una interfaz de programación de aplicaciones que adhiere a los principios de diseño arquitectónico REST (Representational State Transfer)

Definida por Roy Fielding en el año 2000.

El objetivo principal de REST es permitir que los sistemas distribuidos se comuniquen de manera simple, escalable y sin estado a través del protocolo HTTP estándar.


## Componentes

1. Recursos (Resources)

##### REST gira en torno a los recursos, que son cualquier entidad o información a la que se puede acceder.

Ejemplo: En una API de una tienda, los recursos podrían ser /productos, /usuarios, o /pedidos.

Cada recurso tiene un identificador único (URI/URL): /api/v1/productos/105.


2. Uso de HTTP (Métodos)

##### REST utiliza los métodos HTTP estándar (CRUD/Post, Get, Put/Patch, Delete) 

Para realizar acciones sobre esos recursos. 

##### La acción se define por el método HTTP, no por la URL.

Create	POST	Crea un nuevo recurso.	POST /productos

Read	GET	Recupera la representación del recurso.	GET /productos/105

Update	PUT/PATCH	Modifica el recurso existente.	PUT /productos/105

Delete	DELETE	Elimina el recurso.	DELETE /productos/105



3. Comunicación sin Estado (Stateless)

##### Cada solicitud del cliente al servidor debe contener toda la información necesaria para que el servidor la entienda y la procese

El servidor no almacena información de la sesión del cliente entre peticiones.

##### Si un cliente necesita estar autenticado, debe enviar un token de autenticación en cada solicitud.

Esto simplifica la escalabilidad, ya que cualquier servidor puede manejar cualquier solicitud.


4. Representaciones

Cuando un cliente solicita un recurso (GET /productos/105)

#### El servidor envía una representación del estado de ese recurso.

##### Esta representación es típicamente un archivo JSON (JavaScript Object Notation), aunque también puede ser XML.


## Ventajas

Simplicidad: Utiliza el protocolo HTTP estándar, que es fácil de entender e implementar.

Escalabilidad: Al ser stateless, es fácil distribuir las solicitudes entre múltiples servidores.

Flexibilidad: Permite que clientes y servidores evolucionen de forma independiente (desacoplamiento).

Un cliente móvil, una aplicación web y un sistema de terceros pueden usar la misma API.


## Fundamentos Web


### 1. Pilares/Front-end

##### Esta capa se enfoca en todo lo que el usuario final ve e interactúa en el navegador.


#### HTML (HyperText Markup Language): Es el esqueleto o la estructura de cualquier página web.

Define el contenido (texto, imágenes, enlaces, videos) y organiza su jerarquía (títulos, párrafos, listas).

Es la base innegociable de la web.


#### CSS (Cascading Style Sheets): Es la apariencia o la presentación

Controla el diseño, la tipografía, los colores, la separación, y la adaptabilidad de los elementos HTML a diferentes tamaños de pantalla (diseño responsive).


#### JavaScript (JS): Es el comportamiento o la interactividad

Permite que la página web responda a las acciones del usuario, manipule el contenido dinámicamente (DOM manipulation), valide formularios, y comunique con servidores sin recargar la página (AJAX).


### 2. Protocolos y Redes (Comunicación)

##### Definen cómo se solicitan, se encuentran y se transfieren los datos.


#### 1. HTTP/HTTPS (HyperText Transfer Protocol): Es el idioma o el protocolo que utilizan los navegadores y los servidores para comunicarse

##### Define el formato de los mensajes (requests y responses).

HTTPS es la versión segura que utiliza cifrado SSL/TLS para proteger la transferencia de datos.


#### 2. DNS (Domain Name System): Es el directorio telefónico de Internet.

##### Traduce los nombres de dominio legibles por humanos (ej., google.com) a direcciones IP numéricas (ej., 142.250.72.78) que las computadoras necesitan para localizar los servidores.


#### 3. URLs (Uniform Resource Locators): Es la dirección o la ubicación de un recurso específico en la web (ej., una página, un archivo).


### 3. Arquitectura y Almacenamiento (El Servidor)

##### Esta capa maneja la lógica de negocio, la persistencia de datos y la entrega de contenido.


#### 1. Servidores Web (Backend): Software que escucha las solicitudes HTTP entrantes y responde con los recursos solicitados

Utiliza lenguajes como Python, Node.js, PHP, o Java para ejecutar la lógica de la aplicación.


#### 2. Bases de Datos (DB): Se encargan de la persistencia de los datos.

Gestionan el almacenamiento, recuperación, actualización y eliminación de información de manera estructurada (SQL, NoSQL), implementando el modelo CRUD.


#### 3. APIs (Application Programming Interfaces) y REST: Son la puerta de entrada estandarizada al servidor

##### Una API RESTful permite que el cliente (Front-end) solicite y manipule los recursos del servidor utilizando los métodos HTTP estándar (GET, POST, PUT, DELETE).


#### Estos tres grupos de fundamentos forman un ciclo completo

##### el Cliente (Front-end) solicita recursos al Servidor (Backend) a través de los Protocolos (HTTP), y el Servidor usa la Base de Datos para gestionar la información y responder al Cliente.



## Protocolos de Red

##### Conjunto de reglas, convenciones y procedimientos formalmente definidos que rigen cómo los dispositivos (computadoras, servidores, routers, smartphones) se comunican e intercambian datos a través de una red.

Garantizando que los datos enviados por un dispositivo puedan ser interpretados correctamente por el dispositivo receptor.


### Componentes y Funciones

1. Formato de Datos: Cómo se empaquetan los datos (tamaño del paquete, campos de encabezado).

2. Detección de Errores: Métodos para verificar si los datos se corrompieron durante la transmisión.

3. Encaminamiento (Routing): Cómo los paquetes encuentran su camino de la fuente al destino a través de múltiples redes.

4. Establecimiento de Conexión: Los pasos para iniciar, mantener y finalizar una sesión de comunicación.


### Protocolos Fundamentales de Internet (TCP/IP)

##### El modelo de Internet se basa principalmente en la pila de protocolos TCP/IP, que es la base de toda la comunicación web moderna.

1. IP (Internet Protocol)

##### El protocolo IP es el responsable de la identificación y el direccionamiento.

Función: Proporciona un sistema de direccionamiento único a cada dispositivo conectado a la red, conocido como Dirección IP (ej., 192.168.1.1).

##### Encaminamiento: Se encarga de tomar los paquetes de datos (llamados datagramas IP)

y asegurarse de que sean entregados al destino correcto, posiblemente a través de varias redes.


2. TCP (Transmission Control Protocol)

##### Es responsable de la entrega confiable y ordenada de los datos.

##### Función: Establece una conexión entre dos dispositivos (un handshake o "apretón de manos")

##### Divide los datos en segmentos, garantiza que todos los segmentos lleguen y se reordenen correctamente en el destino, y solicita la retransmisión de segmentos perdidos.

Naturaleza: Es un protocolo orientado a la conexión; es lento, pero fiable.


### Protocolos de Aplicación/Web

##### Estos protocolos se ejecutan sobre TCP/IP y son los que utilizamos a diario para interactuar con servicios específicos:

1. HTTP(S): HyperText Transfer Protocol (Secure)

Es el protocolo base para la Web.

##### Define cómo se formatean y transmiten los mensajes entre navegadores y servidores. 

##### HTTPS añade la capa de cifrado SSL/TLS.


2. FTP	File Transfer Protocol:

Utilizado para la transferencia de archivos entre un cliente y un servidor


3. SMTP	Simple Mail Transfer Protocol

El protocolo estándar para enviar correo electrónico entre servidores.


4. DNS	Domain Name System

Traduce nombres de dominio legibles por humanos (ej., google.com) a direcciones IP.


5. SSH	Secure Shell

##### Utilizado para establecer conexiones remotas seguras y cifradas a servidores 
 


## Protocolo HTTP

HyperText Transfer Protocol permite la comunicación de datos en la World Wide Web

Es el lenguaje que utilizan los navegadores web (clientes) y los servidores web para intercambiar información


1. Modelo Cliente-Servidor

HTTP opera bajo un modelo de solicitud-respuesta (request-response):

Cliente (Navegador): Envía una solicitud HTTP (request) al servidor.

Servidor Web: Procesa la solicitud y devuelve una respuesta HTTP (response) al cliente.


2. Protocolo sin Estado (Stateless)

HTTP es inherentemente sin estado. Esto significa que:

##### El servidor no guarda información sobre la sesión anterior de un cliente entre solicitudes.

##### Cada solicitud es independiente y contiene toda la información necesaria (autenticación, headers, datos) para que el servidor la procese.

##### Manejo del estado: Para mantener una sesión (como un inicio de sesión o un carrito de compras), se utilizan mecanismos externos, principalmente cookies o tokens enviados en los headers.


3. Mensajes

##### La comunicación HTTP se realiza mediante mensajes de texto simples estructurados en tres partes:

#### Línea de Inicio: Indica el método HTTP (GET, POST, etc.) en la solicitud o el código de estado en la respuesta.

#### Cabeceras (Headers): Contienen metadatos sobre la solicitud o respuesta (ej., tipo de contenido, longitud del cuerpo, información de autenticación, cookies).

#### Cuerpo (Body): Contiene los datos reales que se envían (ej., datos de un formulario POST) o los datos que se reciben (ej., el contenido HTML de una página o un objeto JSON).


### Métodos HTTP (Verbos)

##### Definen la acción que el cliente quiere realizar sobre un recurso identificado por la URL:

Método -> CRUD

GET	Solicita datos de un recurso. No debe tener efectos secundarios.	Read (Leer)

POST	Envía datos para crear un nuevo recurso o realizar una acción compleja.	Create (Crear)

PUT	Reemplaza completamente un recurso con los nuevos datos.	Update (Actualizar)

PATCH	Aplica modificaciones parciales a un recurso existente.	Update (Actualizar)

DELETE	Elimina el recurso especificado.	Delete (Eliminar)


### Códigos de Estado (Status Codes)

##### El servidor incluye un código de estado en su respuesta para indicarle al cliente el resultado de la solicitud:

#### 1xx (Informativo): La solicitud fue recibida y se continúa el proceso.

#### 2xx (Éxito): La solicitud fue recibida, entendida y aceptada. Ej.: 200 OK, 201 Created.

#### 3xx (Redirección): Se requiere acción adicional para completar la solicitud. Ej.: 301 Moved Permanently.

#### 4xx (Error del Cliente): La solicitud contiene sintaxis incorrecta o no puede ser cumplida. Ej.: 404 Not Found, 403 Forbidden.

#### 5xx (Error del Servidor): El servidor falló al completar la solicitud. Ej.: 500 Internal Server Error.


### HTTPS (HTTP Seguro)

##### HTTPS es simplemente la capa de aplicación HTTP funcionando sobre una capa de seguridad SSL/TLS

##### Cifra la comunicación completa, protegiendo los datos (contraseñas, números de tarjeta) de ser interceptados o manipulados. 

Es el estándar actual para toda la navegación web


## Arquitectura Cliente-Servidor 

Modelo fundamental de networking distribuido

En el que las responsabilidades y tareas de una aplicación se dividen entre dos tipos de componentes

los Clientes y los Servidores


Este modelo se basa en la idea de que los dispositivos o programas solicitan servicios (los Clientes)

y otros dispositivos o programas proporcionan esos servicios (los Servidores).


1. El Cliente (Solicitante)

El Cliente es generalmente el dispositivo o programa que inicia la solicitud de un servicio y es el punto de interacción con el usuario.

Función: Solicitar datos, enviar comandos, y presentar la información al usuario.

Ejemplos: Un navegador web (solicitando una página), una aplicación móvil, o un cliente de correo electrónico.

Recursos: Utiliza los recursos del usuario (pantalla, teclado, CPU local).


2. El Servidor (Proveedor)

El Servidor es la entidad que espera pasivamente las solicitudes, almacena los recursos y proporciona las funcionalidades o datos solicitados.

Función: Almacenar datos centralmente, gestionar la lógica de negocio, procesar solicitudes (como consultas SQL) y enviar las respuestas.

Ejemplos: Un servidor web (sirviendo páginas HTML), un servidor de base de datos (gestionando datos), o un servidor de archivos.

Recursos: Gestiona los recursos centrales (base de datos, archivos, etc).


### Proceso de Solicitud-Respuesta

La comunicación entre el Cliente y el Servidor ocurre a través de una red (como Internet) y sigue un ciclo simple:

1. Solicitud (Request): El Cliente envía un mensaje al Servidor utilizando un protocolo de red (como HTTP, FTP o TCP/IP), pidiendo una acción específica o un recurso.

2. Procesamiento: El Servidor recibe la solicitud, la procesa (ejecuta código, accede a la base de datos) y prepara el resultado.

3. Respuesta (Response): El Servidor envía la respuesta de vuelta al Cliente, que puede ser la página web solicitada, un objeto JSON con datos, o un código de estado (ej., 200 OK).


La arquitectura Cliente-Servidor es el modelo dominante en la web debido a sus beneficios:

Centralización: Los datos se almacenan en un único lugar (el servidor), lo que facilita la administración, la seguridad y las copias de seguridad.

Escalabilidad: Se puede mejorar el rendimiento simplemente actualizando o añadiendo más servidores, sin necesidad de modificar el hardware de cada cliente.

Fácil Mantenimiento: La lógica del negocio se aloja en el servidor. Las actualizaciones solo necesitan instalarse en el servidor.

Seguridad: El servidor puede implementar controles de acceso y autenticación estrictos para proteger los recursos.

    
### Tipos de Arquitecturas Cliente-Servidor

1. 2 Capas:	Se comparte entre el Cliente y el Servidor.	

Aplicaciones de escritorio con bases de datos internas.


2. 3 Capas (o N-Capas): La lógica de negocio está en una capa intermedia separada (Servidor de Aplicaciones).

Aplicaciones web modernas y APIs RESTful, donde la capa de datos, la lógica de negocio y la presentación están separadas.





## Request/Response: Solicitud y Respuesta

Describen el ciclo de comunicación en la mayoría de las arquitecturas de red, especialmente en la web, que se basa en el Protocolo HTTP.

En la arquitectura Cliente-Servidor, este ciclo define la interacción básica


### 1. Request (Solicitud)

Es un mensaje enviado por el Cliente (típicamente un navegador o una aplicación) al Servidor para pedir un servicio o una acción sobre un recurso.


Componentes:

#### 1. Método HTTP (Verbo): Indica la acción deseada (ej., GET, POST, PUT, DELETE).

#### 2. URI/URL: La dirección del recurso sobre el que se quiere actuar (ej., /api/v1/productos/10).

#### 3. Encabezados (Headers): Proporcionan metadatos sobre la solicitud. Incluyen información como el tipo de contenido que el cliente espera (Accept: application/json), credenciales de autenticación (tokens), o cookies.

#### 4. Cuerpo (Body): Contiene los datos que el cliente desea enviar al servidor. Se utiliza principalmente con los métodos POST y PUT (ej., el contenido de un formulario o el objeto JSON de un nuevo registro).

Ejemplo: Cuando haces clic en un enlace, tu navegador envía una solicitud GET a la URL de esa página.


2. Response (Respuesta)

##### Mensaje que el Servidor devuelve al Cliente después de haber procesado la solicitud.


Componentes: 

#### 1. Código de Estado (Status Code): Un código numérico que indica el resultado de la solicitud 

(ej., 200 OK, 404 Not Found, 500 Internal Server Error).


#### 2. Encabezados (Headers): Proporcionan metadatos sobre la respuesta

##### (ej., tipo de contenido del cuerpo, fecha, cookies a almacenar).


#### 3. Cuerpo (Body): Contiene los datos reales solicitados o el resultado de la operación.

##### Puede ser HTML, un objeto JSON, una imagen, o un mensaje de error.


##### Ejemplo: Si el servidor procesa tu solicitud con éxito, devuelve una respuesta con el código 200 OK

##### y, en el cuerpo, el contenido de la página web que pediste.


## GET

Solicitar y recuperar una representación de un recurso específico identificado por una URI (Uniform Resource Identifier).


1. Propósito: El cliente (normalmente un navegador web o una aplicación) lo utiliza para pedir datos a un servidor.


2. Seguridad e Idempotencia:

Seguro: Una solicitud GET nunca debe tener efectos secundarios en el servidor

No debe modificar el estado del servidor

Usar GET para cambiar datos es una mala práctica de diseño API.


##### Idempotente: Ejecutar la misma solicitud GET varias veces seguidas tendrá el mismo resultado.


3. Caché: Las respuestas a las solicitudes GET son cacheables

Permite que el navegador o los proxies almacenen la respuesta para servirla más rápido en futuras solicitudes.


### Componentes de GET

#### 1. Envío de Parámetros

Los datos o parámetros necesarios para filtrar o especificar la solicitud se envían a través de la URL

en la cadena de consulta (query string).

Ejemplo: Para buscar productos con una categoría específica, los parámetros van después del signo de interrogación (?):

```
GET /api/v1/productos?categoria=electronica&limite=10
```

Limitación: Dado que los datos se envían en la URL, las solicitudes GET tienen un límite de longitud

aunque es grande, varía según el navegador/servidor)

y no deben usarse para enviar información sensible (como contraseñas)

ya que la URL se registra en el historial.


#### 2. Ausencia de Cuerpo (Body)

Una solicitud GET no debe contener un cuerpo (body).

##### Toda la información de la solicitud se debe incluir en la URL o en los headers.


### Casos de uso: GET se utiliza para cualquier operación de lectura:

Recuperar toda la colección: GET /usuarios (Recuperar la lista completa de usuarios).

Recuperar un recurso específico: GET /usuarios/42 (Recuperar los datos del usuario con ID 42).

Filtrado y Búsqueda: GET /pedidos?estado=pendiente (Recuperar los pedidos que están en estado pendiente).



## POST

Se utiliza para implementar la operación Create (Crear) del modelo CRUD en la arquitectura web.

##### Enviar datos al servidor para crear un nuevo recurso en el recurso de destino.


1. Propósito: El cliente (navegador o aplicación) lo usa para enviar información que el servidor procesará y almacenará

##### Se utiliza típicamente para crear nuevos registros en una base de datos.


2. No Idempotencia: Las solicitudes POST no son idempotentes

Esto significa que si envías la misma solicitud varias veces, el servidor creará múltiples nuevos recursos

(ej., si haces clic dos veces en "Enviar" un formulario, se pueden crear dos registros idénticos).

##### Por esta razón, los navegadores suelen advertir antes de reenviar datos POST.


3. No Cacheable: 

#### Las respuestas a las solicitudes POST no se almacenan en caché, ya que la acción resulta en un cambio en el servidor.


### Componentes de un POST

#### 1. Envío de Datos en el Cuerpo (Body)

##### A diferencia de GET, la información (la carga útil o payload) se envía en el cuerpo de la solicitud HTTP.

Ventaja: Esto permite enviar grandes cantidades de datos (ej., archivos subidos o largos formularios) y es el lugar adecuado para enviar información sensible (contraseñas, datos de tarjetas de crédito),

ya que no se expone en la URL ni en los logs de red.

##### Formato: Los datos se suelen enviar en formato JSON (en APIs RESTful), XML, o como datos de formularios (application/x-www-form-urlencoded o multipart/form-data).


#### 2. La URI como Colección

##### La URI de destino generalmente apunta a una colección o al punto final (endpoint) que gestiona la creación de ese tipo de recurso.

El servidor se encarga de asignar el nuevo ID al recurso creado.

Ejemplo: Para crear un nuevo producto, el URI es el punto final de la colección:

```
POST /api/v1/productos
```

##### El cuerpo contendría los datos del nuevo producto (nombre, precio, etc.).


### Código de respuesta

#### Cuando un servidor recibe y procesa con éxito una solicitud POST para crear un nuevo recurso, suele responder con el código de estado 201 Created.

##### La respuesta a menudo incluye un header Location que apunta a la URI completa del recurso recién creado (ej., /api/v1/productos/55), o incluye el objeto del nuevo recurso en el cuerpo de la respuesta.



## PUT

Operación Update (Actualizar) del modelo CRUD

La función principal de PUT es reemplazar completamente la representación del recurso de destino con la nueva representación enviada en el cuerpo de la solicitud.


1. Propósito: El cliente lo usa para modificar un recurso existente

o, si el recurso no existe, para crear uno nuevo con esa URI. 


2. Idempotencia: Las solicitudes PUT son idempotentes

##### Esto significa que si envías la misma solicitud PUT varias veces, el resultado final en el servidor será el mismo (solo una versión del recurso).

Esto es una diferencia clave con POST.


3. Uso Típico: Se usa para actualizar todos los campos de un recurso conocido.


### Componentes de PUT

#### 1. Envío de Datos en el Cuerpo (Body)

##### Al igual que POST, los datos que reemplazan al recurso se envían en el cuerpo de la solicitud, típicamente en formato JSON.

Importante: Con PUT, el cliente debe enviar la representación completa del recurso

incluyendo los campos que no desea modificar

Si omite un campo, el servidor lo establecerá a su valor por defecto o a NULL (dependiendo de la lógica del servidor).


#### 2. URI como Recurso Específico

##### La URI de destino debe apuntar al recurso específico que se quiere reemplazar.

Ejemplo: Para actualizar el producto con ID 55:

```
PUT /api/v1/productos/55
```


### PUT vs. PATCH vs. POST

Característica	PUT	PATCH	POST

CRUD	Update (Reemplazo Total)	Update (Modificación Parcial)	Create (Creación)

Idempotencia	Sí	No (Generalmente)	No

Cuerpo (Body)	Representación Completa del recurso	Solo los campos a modificar	Datos del nuevo recurso a crear

URI	Apunta al Recurso específico (/productos/55)	Apunta al Recurso específico (/productos/55)	Apunta a la Colección (/productos)



## DELETE

Implementar la operación Delete (Eliminar) del modelo CRUD en una API RESTful.


1. Propósito: El cliente (una aplicación o navegador) envía una solicitud DELETE para pedir al servidor que elimine el recurso específico identificado por la URI.


2. Idempotencia: Las solicitudes DELETE son idempotentes

Esto significa que si envías la misma solicitud DELETE varias veces, el resultado final en el servidor será el mismo

el recurso estará eliminado (o no existirá).


3. Seguridad: Al igual que POST y PUT, DELETE no es un método seguro, ya que modifica el estado del servidor (elimina datos).


### Componentes de Delete

#### 1. URI Específica

La URI de destino debe apuntar al recurso específico que se quiere eliminar.

Ejemplo: Para eliminar al usuario con ID 42:

```
DELETE /api/v1/usuarios/42
```

##### Advertencia: Si un endpoint acepta DELETE sin un ID específico (ej., DELETE /api/v1/usuarios), esto podría interpretarse como una solicitud para eliminar toda la colección de usuarios, lo cual es extremadamente peligroso y raramente implementado.


### 2. Cuerpo Vacío (Body)

Una solicitud DELETE no debe incluir un cuerpo (body). 

##### La información necesaria para identificar el recurso a eliminar ya se encuentra en la URI.


### Código de respuesta del servidor

Cuando un servidor procesa una solicitud DELETE, puede responder con varios códigos de estado:

200 OK (Éxito): El recurso ha sido eliminado y la respuesta incluye información de estado (o quizás el recurso eliminado).
    

204 No Content (Éxito): El recurso ha sido eliminado con éxito, pero la respuesta no contiene cuerpo.

Este es un código de estado muy común para DELETE.


202 Accepted: La solicitud de eliminación ha sido aceptada para procesamiento

pero la acción aún no se ha completado (común para operaciones de eliminación que tardan mucho tiempo o se ejecutan en segundo plano).


404 Not Found: El recurso que se intentó eliminar no existe.



## PATCH

### No idempotencia (Generalmente): Las solicitudes PATCH no son consideradas idempotentes por defecto.

##### Si envías la misma solicitud varias veces, el resultado final puede variar si la operación se basa en el estado actual del servidor

(ej., sumar 5 al campo contador).

Por lo tanto, se requiere un manejo cuidadoso.

Seguridad: Modifica el estado del servidor, por lo que no es un método seguro.


Envío de Datos Parciales

##### Los datos se envían en el cuerpo (body) de la solicitud, conteniendo únicamente el subconjunto de campos que deben ser modificados.

Ejemplo: Si un recurso Usuario tiene nombre, email y direccion, y solo quieres cambiar el email:

Cuerpo de PATCH (JSON):

```
{
  "email": "nuevo.email@ejemplo.com"
}
```

El servidor aplicará este cambio y dejará nombre y direccion intactos.


URI como Recurso Específico

La URI de destino debe apuntar al recurso específico que se quiere modificar.

Ejemplo: Para aplicar el parche al usuario con ID 42:

PATCH /api/v1/usuarios/42


### PATCH vs PUT

Cuerpo de la Solicitud	Solo los campos a modificar.	Representación COMPLETA del recurso.

##### Acción del Servidor	Aplica los cambios enviados.	Borra el estado anterior y usa los datos del body.

Idempotencia	No (A menos que se diseñe con cuidado).	 Sí.

Uso Ideal	Cambiar un estado (ej., es_activo: true), actualizar un email.	Actualizar un documento completo donde todos los campos son necesarios.


PATCH cuando el cliente quiere hacer una edición ligera sin tener que gestionar o enviar todos los datos del recurso completo.


## HEAD 


## OPTIONS

### Uso Crucial: CORS (Cross-Origin Resource Sharing)

Cuando una aplicación web (por ejemplo, JavaScript que se ejecuta en un navegador) intenta hacer una solicitud HTTP a un dominio diferente al que sirvió la página (una solicitud cross-origin), el navegador utiliza OPTIONS como un mecanismo de pre-verificación.

Este proceso se llama Preflight Request (Solicitud Previa) y funciona así:

1. Cliente Envía OPTIONS: Antes de enviar la solicitud real (ej., un POST o PUT), el navegador envía una solicitud OPTIONS a la URL de destino.

2. El Request Incluye Cabeceras: La solicitud OPTIONS incluye cabeceras especiales (como Access-Control-Request-Method y Access-Control-Request-Headers) para preguntar si el servidor está dispuesto a aceptar la solicitud real.

3. Servidor Responde con Permisos: El servidor responde a la solicitud OPTIONS con cabeceras Access-Control-Allow-* si acepta el origen:

	Access-Control-Allow-Methods: Lista los métodos HTTP permitidos (ej., GET, POST, OPTIONS).

	Access-Control-Allow-Headers: Lista las cabeceras personalizadas permitidas.

4. Ejecución de la Solicitud Real: Si la respuesta OPTIONS del servidor es satisfactoria, el navegador procede a enviar la solicitud original (POST, PUT, etc.). Si no, el navegador bloquea la solicitud por seguridad


 
## Headers

Son metadatos esenciales en la comunicación HTTP

Son líneas de texto que se incluyen al inicio de un mensaje de Solicitud (Request) o Respuesta (Response)

##### Contienen información clave sobre el mensaje, su cuerpo, o la conexión en sí.

Los headers permiten que el cliente y el servidor se comuniquen más allá de la simple acción (el método HTTP) y el cuerpo del mensaje (los datos).


### Estructura y función

Un header siempre tiene el formato Nombre-de-la-Cabecera: Valor.


#### 1. Headers de Solicitud (Request Headers)

##### Son enviados por el cliente para informar al servidor sobre la solicitud, el cliente, o las preferencias del cliente.

Host	Indica el nombre de dominio del servidor al que se dirige la solicitud.	Host: www.ejemplo.com

User-Agent	Identifica el software que hace la solicitud (navegador, bot, etc.).	User-Agent: Mozilla/5.0...

Accept	Indica los tipos de contenido que el cliente puede procesar (ej., JSON, HTML).	Accept: application/json

Cookie	Contiene datos de estado (como una ID de sesión) almacenados previamente por el servidor.	Cookie: sessionID=abc123

Authorization	Contiene credenciales para autenticar al cliente (ej., un token JWT).	Authorization: Bearer <token


#### 2. Headers de Respuesta (Response Headers)

##### Son enviados por el servidor para proporcionar información sobre la respuesta y el servidor.

Content-Type	Indica el formato de datos del cuerpo de la respuesta.	Content-Type: application/json

Content-Length	Indica el tamaño del cuerpo del mensaje en bytes.	Content-Length: 512

Date	La fecha y hora en que se originó la respuesta.	Date: Tue, 18 Nov 2025...

Set-Cookie	Indica al cliente que almacene una cookie para futuras solicitudes.	Set-Cookie: userID=99

Access-Control-Allow-Origin	Clave en CORS; indica qué dominios externos pueden acceder al recurso.	Access-Control-Allow-Origin: `*`


#### 3. Headers de Entidad (Entity Headers)

##### Estos headers describen las propiedades del contenido del cuerpo del mensaje. Aunque se utilizan tanto en solicitudes como en respuestas, son más comunes en respuestas.

Content-Type: Ya mencionado, vital para que el receptor sepa cómo interpretar el body.

Content-Encoding: Indica si el contenido ha sido comprimido (ej., gzip).


### Importancia en la Práctica

Los headers son esenciales para la seguridad, la autenticación, el rendimiento y la correcta interpretación de los datos en la web moderna

##### Por ejemplo, sin el header Content-Type, el navegador no sabría si el cuerpo de la respuesta es un texto simple, una página HTML o un objeto JSON.
    


## Tipos de datos de JSON

### 1. Objetos ({}) - Estructura de Entidades

Uso: Representan una entidad única o una estructura de datos compleja.

##### Regla: El cuerpo de una respuesta GET para un solo recurso o el cuerpo de una solicitud POST o PUT debe ser un objeto JSON.

Convención de Claves:

Utiliza camelCase (ej., nombreUsuario, fechaCreacion) para nombrar las claves, ya que es la convención dominante en JavaScript, que es el lenguaje principal que consume JSON en el navegador


Creación	POST /productos	El Request Body es un objeto que contiene los datos del producto.

Respuesta	GET /productos/105	El Response Body es un objeto que representa al producto 105.

Error	400 Bad Request	El Response Body es un objeto que contiene detalles del error (ej., {"codigo": "400", "mensaje": "Datos faltantes"}).


2. Arreglos - Colecciones y Listas

Uso: Representan una lista ordenada de entidades del mismo tipo.

##### Regla: El cuerpo de una respuesta GET para una colección de recursos (ej., todos los productos) debe ser un arreglo que contenga objetos.

Paginación: Si la colección es grande, el response puede ser un Objeto que contenga el arreglo de datos y los metadatos de paginación:

```
{
  "totalRegistros": 500,
  "pagina": 1,
  "data": [
    { /* Objeto Producto 1 */ },
    { /* Objeto Producto 2 */ }
  ]
}
```


### 3. Strings (Cadenas) - Identificadores, Fechas y Textos

Uso: Textos, URLs, correos electrónicos y, críticamente, Fechas y Horas.

Regla para Fechas: Aunque podrías usar números para timestamps (sellos de tiempo), la convención RESTful moderna y recomendada es utilizar Strings que sigan el formato ISO 8601 (ej., 2025-11-18T19:16:55Z). Esto mantiene la legibilidad y garantiza la precisión horaria.

Uso de UUIDs: Los identificadores universales únicos (UUIDs) deben ser devueltos como Strings (ej., "a1b2c3d4-e5f6-..."), no como números.
    

### 4. Numbers (Números) - Cantidades y Moneda

Uso: Cantidades exactas que requieren cálculos matemáticos (edad, stock, latitud/longitud).

Regla para Moneda: Ten cuidado al manejar valores monetarios o financieros. Debido a que JSON utiliza números de punto flotante de doble precisión (IEEE 754), puede haber problemas de precisión con números decimales grandes.

##### Mejor Práctica: Para datos financieros críticos, usa enteros que representen la cantidad en la unidad más pequeña (ej., centavos). $45.99 se representaría como 4599. Si se requiere la precisión decimal, algunos equipos optan por enviarlo como String y realizar la conversión y cálculo en el lado del cliente/servidor    


### 5. 5. Boolean (Booleanos) - Banderas de Estado

Uso: Representar estados binarios.

Regla: Utiliza los literales true o false de JSON sin comillas.

##### Convención: Nombra las claves usando prefijos como is, has, o es (ej., isActive, hasPermission).

    
### 6. Null (Nulo) - Ausencia de Valor

Uso: Indica que un campo opcional está presente en el esquema, pero actualmente no tiene un valor aplicable.

##### Regla: Utiliza el literal null sin comillas.

Dato Faltante:	Enviar null si el campo es opcional.

Dato Requerido:	No envíes null. Si el campo es obligatorio y falta, el servidor debe responder con un error 400 Bad Request.



## Fundamentos filosóficos de REST (Representational State Transfer) 

Provienen directamente de la arquitectura y la evolución de la World Wide Web

REST no es un protocolo, sino un estilo arquitectónico basado en un conjunto de principios de diseño que buscan replicar la manera en que el navegador y el servidor interactúan para lograr escalabilidad, eficiencia y simplicidad.

El principal arquitecto de REST fue Roy Fielding en su tesis doctoral del año 2000, donde definió las restricciones clave.


### Fundamentos

Se basa en tratar el sistema como una colección de recursos accesibles a través de una interfaz uniforme, tal y como lo hace la web

### 1. Modelo de Recursos (Resource-Oriented)

#### Concepto: Todo lo que necesita ser expuesto o compartido en el sistema se modela como un Recurso

##### Un recurso es una entidad conceptual con la que se interactúa

no una tabla de base de datos o un método de programación


#### Filosofía: El enfoque se pone en el qué (el recurso, identificado por su URI) 

en lugar de el cómo (la acción o método).

Esto promueve el desacoplamiento entre el cliente y el servidor.


#### Ejemplo: En lugar de llamar a una función crearPedido()

##### interactúas con el recurso /pedidos usando el método POST.


### 2. Interfaz Uniforme (Uniform Interface)

Este es el principio más importante de REST y asegura que la aplicación sea simple, visible y desacoplada

Se logra a través de cuatro restricciones:


#### Identificación de Recursos: Cada recurso se identifica por un URI único (como una URL).

Manipulación de Recursos a través de Representaciones: Cuando un cliente tiene una representación de un recurso (ej., un objeto JSON)

tiene suficiente información para modificar o eliminar el recurso en el servidor.


#### Mensajes Autodescriptivos: Cada mensaje HTTP (solicitud o respuesta) debe contener suficiente información para ser interpretado completamente

incluyendo el Método HTTP (la intención, ej., GET, POST) y el Código de Estado (el resultado).


#### HATEOAS (Hypermedia As The Engine Of Application State): Este es el principio más estricto y a menudo menos implementado.

##### Postula que el cliente debe navegar la aplicación usando enlaces proporcionados por el servidor dentro de las representaciones de los recursos

Sin necesidad de URLs codificadas (hard-coded).

Filosofía: El cliente se comporta como un humano navegando la web; solo hace clic en los enlaces que el servidor le presenta.


### 3. Comunicación sin Estado (Statelessness)

Concepto: El servidor no debe almacenar información sobre el estado de la sesión o la conversación del cliente entre solicitudes

Filosofía: Cada solicitud HTTP debe ser completamente independiente y debe contener toda la información necesaria para que el servidor la procese.

Ventaja: Esto facilita la escalabilidad horizontal. Cualquier solicitud puede ser manejada por cualquier servidor en un cluster, ya que no hay dependencias de sesión. 

Si un servidor falla, no afecta las sesiones de los usuarios.


### 4. Capas (Layered System)

Concepto: La arquitectura puede estar compuesta por múltiples capas intermedias (servidores proxy, load balancers, cachés) entre el cliente y el servidor final.

##### Filosofía: Ni el cliente ni el servidor final necesitan saber si se están comunicando directamente o a través de intermediarios. 

Esto mejora el rendimiento a través del caching y aumenta la seguridad.



## REST vs RESTful

##### REST es el estilo arquitectónico o el conjunto de reglas

##### RESTful es el servicio o la API que implementa y sigue esas reglas.


REST

1. Modelo Cliente-Servidor: Separación de preocupaciones.

2. Sin Estado (Stateless): Cada solicitud debe ser independiente; el servidor no almacena información de sesión entre solicitudes.

3. Almacenable en Caché (Cacheable): Las respuestas deben declarar si son almacenables en caché y por cuánto tiempo.

4. Sistema de Capas (Layered System): El cliente no necesita saber si se conecta al servidor final o a un intermediario (proxy o load balancer).

5. Código bajo Demanda (Opcional): Permite al servidor extender la funcionalidad del cliente a través de código ejecutable.

6. Interfaz Uniforme: El principio más importante, basado en la identificación de recursos (URI) y el uso de métodos HTTP estándar (GET, POST, etc.).


RESTful (Representational State Transfer-ful)

Es el adjetivo que describe una API o un servicio web que ha sido diseñado implementando y adhiriéndose a las restricciones del estilo arquitectónico REST.

1. Utiliza URI: Identifica los recursos de manera clara (ej., /api/v1/usuarios/10).

2. Utiliza Métodos HTTP: Usa los verbos estándar (GET, POST, PUT, DELETE) para las operaciones CRUD.

3. Utiliza Códigos de Estado: Responde con los códigos HTTP estándar (200 OK, 404 Not Found, 500 Internal Server Error).

4. Utiliza Representaciones: Intercambia datos en formatos estandarizados como JSON o XML.
    
    

## Recursos/URIs

##### Un recurso es la abstracción conceptual de cualquier información que pueda ser nombrada

#### No son Tablas de Base de Datos: Un recurso no es necesariamente una tabla SQL

#### Es la entidad de negocio con la que el cliente interactúa.

##### Por ejemplo, un "Pedido" es un recurso

##### aunque en la base de datos se almacene en tres tablas diferentes (Pedidos, LineasDePedido, HistorialDePago).


#### Identificación Única: Cada recurso debe tener un identificador único

#### En la web, esta identificación se logra a través del URI (Uniform Resource Identifier)

##### Es la dirección que usa el cliente para interactuar con él


#### Representación: Un recurso puede tener múltiples representaciones (formatos de datos).

##### Cuando un cliente solicita un recurso, el servidor le envía una representación de su estado actual (típicamente en JSON o XML).


### Impementación en APIs RESTful

Nomenclatura Basada en Recursos (URIs)

Las APIs RESTful se caracterizan por el uso de URIs

#### Identifican a los recursos de manera jerárquica y con sustantivos en plural.

Tipo de Recurso	URI Ejemplo	Descripción
Colección	/api/v1/productos	Una lista de recursos (el conjunto de todos los productos).
Elemento	/api/v1/productos/42	Un recurso individual específico (el producto con ID 42).
Relación	/api/v1/productos/42/reviews	Una colección de recursos relacionados con otro recurso (las reviews del producto 42).


### Interacción Uniforme (Métodos HTTP)

#### La clave RESTful es que la acción a realizar sobre el recurso está determinada por el Método HTTP (el verbo), no por el nombre del recurso.

Esto se conoce como Interfaz Uniforme.

GET	Recuperar el recurso o la colección.	GET /productos/42 (Leer el recurso 42).
POST	Crear un nuevo recurso dentro de la colección.	POST /productos (Crear un nuevo producto).
PUT	Reemplazar completamente el recurso existente.	PUT /productos/42 (Actualizar completamente el recurso 42).
DELETE	Eliminar el recurso.	DELETE /productos/42 (Eliminar el recurso 42).


El Recurso es el sujeto, la entidad sobre la que opera el sistema

Al centralizar el diseño alrededor de sustantivos (Recursos) en lugar de verbos (acciones)

las APIs se vuelven predecibles, escalables y fáciles de consumir.



## Endpoint

#### Punto de acceso específico en un servidor donde los clientes pueden acceder a los recursos o ejecutar una función particular de la API.

Es la combinación de dos elementos clave:

1. La URI (Uniform Resource Identifier): La ruta única del recurso.

2. El Método HTTP: El verbo que define la acción a realizar (GET, POST, DELETE, etc.).

#### Un endpoint es la dirección exacta (la URI)

##### La instrucción de qué hacer allí (el método HTTP). 


### Estructura de un Endpoint

URI del Recurso	Método HTTP	Acción y Endpoint
/api/v1/usuarios	GET	Endpoint para obtener la lista de todos los usuarios.
/api/v1/usuarios	POST	Endpoint para crear un nuevo usuario.
/api/v1/usuarios/{id}	GET	Endpoint para obtener los detalles del usuario {id}.
/api/v1/usuarios/{id}	DELETE	Endpoint para eliminar el usuario {id}.


### URI vs. Endpoint

URI (Uniform Resource Identifier): Es solo la dirección o la ruta (ej., /api/v1/productos).

Endpoint: Es la interacción completa con esa dirección. La URI /api/v1/productos puede ser parte de dos endpoints diferentes (uno para GET y otro para POST).

"Llamar a un endpoint", se refiere a realizar una solicitud HTTP a una URI específica con un método HTTP determinado para obtener o modificar un recurso.



## Diseño de Endpoints

### 1. Principios de Nomenclatura (URIs)

El diseño de la URI (endpoint sin el método HTTP) debe ser predecible y centrado en los recursos.


#### A. Utiliza Sustantivos en Plural

##### Los endpoints deben representar colecciones de recursos, no acciones específicas. 

##### Esto mantiene la consistencia con el concepto REST de recursos. 

Recomendado	Evitar	Razón
/productos	/obtenerTodosLosProductos	El método HTTP (GET) ya implica la acción "obtener".
/usuarios/105	/usuario105	La URL debe ser uniforme y usar plurales para colecciones.


#### B. Manten la Consistencia y Jerarquía

##### Utiliza la estructura de directorios para mostrar las relaciones entre recursos.

Colección: /recursos

Recurso Específico: /recursos/{id}

Recursos Relacionados (anidados): /recursos/{id}/subrecursos


Ejemplo: Para obtener los comentarios de un producto específico:

```
GET /productos/45/comentarios
```


#### C. Utiliza Minúsculas y Guiones

##### Mantente en minúsculas para los nombres de los recursos. 

##### Usa guiones bajos (_) o medios (-) para separar palabras en la URI. 

##### El guion medio (-) es preferido por legibilidad.

Recomendado		Evitar
/usuarios-activos	/UsuariosActivos
/productos/10/fecha-entrega	/productos/10/FechaEntrega


### 2. Uso Correcto de Métodos HTTP (Interfaz Uniforme)

#### La acción del endpoint la define el método HTTP, no la URI.

CRUD	Método HTTP	URI Ejemplo	Propósito
Create	POST	/productos	Crea un nuevo producto en la colección.
Read	GET	/productos	Obtiene la lista de productos.
Read	GET	/productos/45	Obtiene los detalles del producto 45.
Update	PUT	/productos/45	Reemplaza completamente el producto 45.
Update	PATCH	/productos/45	Modifica parcialmente el producto 45.
Delete	DELETE	/productos/45	Elimina el producto 45.


### 3. Manejo de Funcionalidades Especiales

##### A veces, se necesitan endpoints para acciones que no encajan en el CRUD puro (ej., cerrar una sesión, publicar un artículo).


#### A. Acciones CRUD Inusuales (Preferido)

##### Intenta, siempre que sea posible, modelar la acción como una manipulación de un recurso.

En lugar de: POST /productos/45/publicar

Mejor: PATCH /productos/45 con un body {"estado": "publicado"}. 

(Estás actualizando el estado, no realizando una acción nueva).


#### B. Funciones que no son CRUD (Excepción)

##### Cuando la acción no modifica un recurso específico, sino que ejecuta una función o un proceso, se puede usar un sustantivo para la función.

Ejemplo: POST /sesion/cerrar o POST /acciones/iniciar-proceso

#### Regla: Utiliza POST para estas acciones de "función", ya que son destructivas o modifican el estado.

    
### 4. Filtrado, Ordenamiento y Paginación

#### Para las solicitudes GET a colecciones grandes, utiliza parámetros de consulta (query parameters) en lugar de incluir la información en la URI.

Filtrado: GET /productos?categoria=electronica&stockMin=10

Búsqueda: GET /productos?q=laptop

Paginación: GET /productos?page=2&limit=50

Ordenamiento: GET /productos?sort=-precio (el - indica descendente).


### 5. Versionamiento (Versioning)

##### Es crucial para evitar romper las aplicaciones existentes cuando se realizan cambios mayores en la API.

#### Práctica Estándar: Incluir la versión en el primer segmento de la URI.

Ejemplo: /api/v1/usuarios, /api/v2/usuarios.

Esto permite que los clientes antiguos sigan usando la versión v1 mientras introduces cambios que rompen la compatibilidad en la v2.



## Convertir requisitos de negocio en Recursos

1. Identificar los Recursos (Los Sustantivos)

El primer paso es analizar el requisito de negocio e identificar las entidades de negocio principales que serán manipuladas. Estos serán tus recursos.

Requisito de Negocio: El usuario debe poder consultar los detalles de las Facturas y añadir nuevos Productos al sistema.

Recursos Identificados:

Facturas

Productos

Estos recursos se convierten en las bases de tus URLs, utilizando sustantivos en plural:

/facturas

/productos


2. Definir las Operaciones (Los Verbos)

Una vez que tienes los recursos, identifica las acciones que deben realizarse sobre ellos

Estas acciones se mapean directamente a los métodos HTTP estándar (la Interfaz Uniforme de REST).

Requisito de Negocio: El sistema debe Crear, Leer, Actualizar y Eliminar (CRUD) productos, y solo Leer facturas.

Acción Requerida	Método HTTP	Recurso de la Colección	Recurso Específico
Crear	POST	/productos	N/A
Leer (Lista)	GET	/facturas, /productos	N/A
Leer (Detalle)	GET	N/A	/productos/{id}
Actualizar	PUT/PATCH	N/A	/productos/{id}
Eliminar	DELETE	N/A	/productos/{id}


### 3. Manejar Relaciones y Funciones Complejas

#### Los requisitos a menudo implican la interacción entre varios recursos o acciones que van más allá del CRUD básico.


#### A. Relaciones Anidadas

##### Si un requisito implica un recurso que pertenece a otro, se usa una URL anidada para mostrar la jerarquía.

Requisito: Obtener todos los comentarios de un Producto específico.

Conversión: La URL anida la colección de comentarios bajo el producto:

```
GET /productos/{id}/comentarios     
```        


#### B. Funciones que no son CRUD Pura

Para funciones que desencadenan un proceso o una acción específica que no es simplemente modificar el estado de un recurso, se recomienda usar POST con una URL que se parezca más a una función

Sin embargo, siempre se debe intentar modelar la acción como una actualización de estado (PATCH).

Requisito	Opción RESTful (PATCH)	Opción de Función (POST)
Publicar un artículo.	PATCH /articulos/{id} con {"estado": "publicado"}	POST /articulos/{id}/publicar
Pagar una factura.	PATCH /facturas/{id} con {"estado_pago": "pagada"}	POST /facturas/{id}/pagar

#### La opción PATCH es generalmente preferida porque mantiene la interfaz uniforme.


### Objetivo

El objetivo final es crear un conjunto de endpoints que sean:

1. Intuitivos: La estructura de la URL tiene sentido para el consumidor.

2. Consistentes: Se sigue la convención de sustantivos en plural.

3. Predictibles: El consumidor sabe qué método usar (GET para leer, POST para crear, etc.) antes de mirar la documentación.



## Manejo de Solicitud

Proceso completo que ocurre en el servidor desde el momento en que se recibe una solicitud HTTP del cliente hasta que la API genera la respuesta


### 1. Ciclo de Vida de la Solicitud

##### La solicitud pasa por una serie de capas o "filtros" en el servidor antes de llegar a la lógica de negocio final.


#### A. Capa de Red y Firewall

TLS/SSL (HTTPS): La solicitud debe ser recibida a través de HTTPS para garantizar que el contenido esté cifrado.

Firewall/WAF (Web Application Firewall): Bloquea inmediatamente el tráfico malicioso conocido (ej., inyecciones SQL obvias).

    
#### B. Gateway / Load Balancer

Rate Limiting: Se verifica si el cliente ha excedido el límite de solicitudes. Si es así, se rechaza con 429 Too Many Requests.

Versionamiento: Se dirige la solicitud a la versión correcta de la API (ej., a la lógica que maneja /v1/ o /v2/).


### 2. Validación de Seguridad y Cabeceras

##### Una vez que la solicitud entra al backend de la API, se aplican las restricciones de seguridad y el cumplimiento de protocolos.


#### A. Autenticación (Authentication)

Verificación de Identidad: Se extrae el token JWT (Bearer) del header Authorization.

Validación: Se verifica la firma, el tiempo de expiración (exp) y la validez del token.

Fallo: Si el token es inválido o falta, se devuelve 401 Unauthorized.


#### B. Autorización (Authorization)

Verificación de Permisos: Se comprueba si el usuario autenticado (identificado por el token) tiene los roles o permisos para realizar la acción solicitada (GET, POST, etc.) en ese recurso específico.

Fallo: Si el usuario no tiene permiso, se devuelve 403 Forbidden.


#### C. Cabeceras Obligatorias

##### Content-Type: Para solicitudes POST, PUT o PATCH, se verifica que la cabecera sea application/json para asegurar que el cuerpo del mensaje sea interpretable.


### 3. Procesamiento y Lógica de Negocio

##### Esta es la fase donde los datos se manipulan.


#### A. Validación de Datos (Input Validation)

Formato y Tipos de Datos: Se verifica que los datos del Request Body (o Query Parameters) cumplan con las reglas de formato (ej., el email es un formato válido, la edad es un número).

Campos Requeridos: Se asegura que todos los campos obligatorios para el POST o PUT estén presentes.

Fallo: Si la validación falla, se responde con 400 Bad Request y un cuerpo de error estructurado que detalla los campos inválidos.

    
#### B. Ejecución de la Lógica

Mapeo a CRUD: Se mapea el Método HTTP a la operación de base de datos o lógica de negocio (CRUD).

Transacciones: Si la operación involucra múltiples pasos o el cambio de varios recursos, se debe manejar dentro de una transacción para garantizar que o se completa todo, o no se hace nada (atomicidad).    


### 4. Generación de la Respuesta

Finalmente, se construye y se envía la respuesta al cliente (Manejo de Respuestas).

Códigos de Éxito: Se selecciona el código 2xx apropiado (200 OK, 201 Created, 204 No Content).

Cuerpo JSON: Se serializa el objeto o arreglo de recursos en JSON.

Cabeceras de Respuesta: Se añaden las cabeceras esenciales (Content-Type: application/json, Cache-Control, Location si es un 201).

Logging: Se registra la solicitud, el tiempo de procesamiento y el resultado para la monitorización.



## Manejo de Respuesta 

Proceso que el servidor utiliza para estructurar, formatear y devolver el resultado de la solicitud de un cliente

Es crucial para garantizar que el cliente (aplicación móvil o navegador) pueda entender y utilizar la información de manera eficiente y predecible.

#### Una respuesta bien manejada se centra en tres componentes clave de la respuesta HTTP: Códigos de Estado, Cabeceras (Headers) y el Cuerpo (Body).


Códigos de Estado (Status Codes): La Intención

El servidor debe elegir el código de estado más preciso para comunicar el resultado de la solicitud, incluso si ocurrió un error. Esto permite al cliente saber inmediatamente la naturaleza de la respuesta.

Código	Clase	Propósito y Uso Típico
200 OK	Éxito	Solicitud exitosa. Común para GET, PUT, PATCH. El cuerpo contiene el recurso o la confirmación.
201 Created	Éxito	Recurso creado. Se utiliza con POST. La respuesta debe contener el nuevo recurso y el header Location.
204 No Content	Éxito	Solicitud exitosa sin cuerpo de respuesta. Ideal para DELETE o PUT/PATCH cuando el cliente no necesita el recurso actualizado.
400 Bad Request	Error Cliente	Datos inválidos o sintaxis incorrecta. El cliente debe corregir los datos enviados en el Request Body.
401 Unauthorized	Error Cliente	Autenticación fallida. El cliente debe proveer credenciales (token).
403 Forbidden	Error Cliente	Acceso denegado. El cliente está autenticado, pero carece de permisos para el recurso.
404 Not Found	Error Cliente	Recurso no existe. La URI es válida, pero el ID del recurso no se encuentra.
500 Internal Server Error	Error Servidor	Fallo genérico del servidor. Un error no manejado en el backend.


Cabeceras (Headers) de Respuesta: Los Metadatos

El servidor utiliza las cabeceras para proporcionar metadatos esenciales sobre la respuesta y el recurso.

Content-Type: Obligatorio. Debe ser application/json para las APIs RESTful que usan JSON, asegurando que el cliente interprete el cuerpo correctamente.

Cache-Control: Instruye al cliente y a los proxies sobre la política de caché (ej., max-age=3600 o no-store). Crucial para el rendimiento.

Location: Debe incluirse en la respuesta 201 Created para proporcionar la URI completa del nuevo recurso creado, permitiendo al cliente acceder a él de inmediato.

ETag: Un identificador único de la versión del recurso. Utilizado para la revalidación de caché (junto con If-None-Match en el lado del cliente).

    
Cuerpo (Body) de la Respuesta: El Contenido

El cuerpo contiene los datos reales solicitados o información estructurada sobre el error. Debe estar formateado de manera consistente (generalmente JSON).


A. Estructura de Éxito (2xx)

#### Para GET (recurso único o colección): El cuerpo debe contener el objeto JSON o el arreglo de objetos JSON.

#### Para POST (201 Created): El cuerpo debe devolver el objeto completo del nuevo recurso (incluyendo el ID y cualquier campo de fecha/hora generado por el servidor).

#### Para DELETE/PUT (204 No Content): El cuerpo debe estar vacío


B. Estructura de Errores (4xx y 5xx)

#### Para cualquier código de error (excepto 204), el cuerpo de la respuesta debe contener un objeto de error estructurado en JSON, que sea útil para el programador del cliente.

Convención para el Objeto de Error:

status (o code): El código de estado HTTP (ej., 400).

message: Una descripción del error legible por el usuario final (ej., "Email ya registrado.").

details (u errors): Una lista (arreglo) de objetos que especifica qué campos de la solicitud fallaron y por qué (común para 400 Bad Request)

```
{
  "status": 400,
  "message": "La solicitud falló la validación.",
  "details": [
    {
      "campo": "nombre",
      "error": "El nombre es obligatorio."
    },
    {
      "campo": "email",
      "error": "El formato del email es inválido."
    }
  ]
}
```



## Query Parameters

##### Un mecanismo fundamental en las APIs RESTful para que el cliente personalice las solicitudes, especialmente las de lectura (GET).

#### Los parámetros de consulta son pares de clave-valor que el cliente adjunta a la URL para pasar datos opcionales al servidor.


### 1. Ubicación y Sintaxis

Los parámetros de consulta se encuentran después del signo de interrogación (?) en la URI. Si hay múltiples parámetros, se separan con el signo ampersand (&).

```
$$\text{[http://servidor.com/recursos?clave1=valor1&clave2=valor2](http://servidor.com/recursos?clave1=valor1&clave2=valor2)}$$
```

Ejemplo:

```
GET /productos?categoria=electronica&limit=10&sort=-precio
```

Componente	Valor	Propósito
URI Base	/productos	Identifica el recurso (la colección de productos).
?	Separador	Indica el inicio de los parámetros de consulta.
Parámetros	categoria=electronica	Filtra los resultados.
Parámetros	limit=10	Controla la paginación.
Parámetros	sort=-precio	Define la ordenación.  


### 2. Principio REST

##### Los Query Parameters se utilizan para modificar la consulta sobre el recurso identificado por la URI (ej., /productos), no para cambiar la identidad del recurso en sí. Son una parte crucial del concepto de Negociación de Contenido y Control de la Colección.


### Usos Típicos
 
Los parámetros de consulta son la herramienta estándar para implementar funcionalidades que controlan cómo se obtienen las colecciones grandes de datos:


A. Filtrado (Filtering)

Permite al cliente obtener solo los recursos que cumplen criterios específicos.

Uso	Ejemplo de URI	Descripción
Valor Exacto	GET /pedidos?estado=pendiente	Pedidos con estado 'pendiente'.
Rango	GET /productos?precio_min=100	Productos con precio de 100 o más.
Búsqueda	GET /usuarios?q=juan	Búsqueda de texto libre.


B. Paginación (Pagination)

Controla el tamaño y el desplazamiento de las páginas de datos.

Uso	Ejemplo de URI	Descripción
Offset/Limit	GET /articulos?page=3&limit=25	La página 3, con un máximo de 25 artículos.


C. Ordenación (Sorting)

Especifica el orden de los resultados.

Uso	Ejemplo de URI	Descripción
Campo Único	GET /productos?sort=nombre	Ordenado por nombre (ascendente por defecto).
Descendente	GET /productos?sort=-fecha	Ordenado por fecha (descendente).


D. Inclusión de Recursos Relacionados

Permite al cliente solicitar que el servidor incluya datos anidados o relacionados en la respuesta.

Ejemplo: GET /pedidos/123?include=cliente,items (Devuelve el pedido 123 e incluye los objetos cliente y la lista de items relacionados).
    
    
    
### Mejores Prácticas

#### 1. Solo para GET (y HEAD): Los parámetros de consulta no deben usarse para modificar el estado del servidor (eso es trabajo de POST, PUT, DELETE). Se utilizan para modificar la consulta de lectura.

#### 2. Idempotencia y Caching: Las solicitudes GET con Query Parameters son cacheables. Si el servidor recibe la misma URI (incluyendo los parámetros), puede servir la respuesta desde la caché.

#### 3. Seguridad: Evita poner información sensible (como tokens o contraseñas) en los parámetros de consulta, ya que quedan registrados en los logs del servidor y del navegador. Los tokens deben ir en el header Authorization.

#### 4. Codificación de URL: El cliente debe asegurarse de que los valores de los parámetros de consulta estén correctamente codificados con URL encoding (ej., los espacios se convierten en %20) para evitar errores.



## Rate limit


1. Diseñando la Estrategia de Conteo

El primer paso es definir qué métricas se usarán para rastrear y limitar las solicitudes.


A. Identificador del Cliente

Debes decidir qué entidad vas a limitar. Lo más común es:

Usuario Autenticado: Utiliza el ID de Usuario extraído del token JWT. (Este es el mejor método, ya que es preciso y difícil de falsear).

Clave de API: Utiliza el valor de la API Key enviada en el header.

Dirección IP: Utiliza la dirección IP de origen de la solicitud (generalmente extraída de los headers X-Forwarded-For o X-Real-IP si estás detrás de un proxy o load balancer).


B. Ventana de Tiempo

Define el período durante el cual se aplicará el límite. Las ventanas comunes son:

Tipo de Ventana	Ejemplo	Uso Recomendado
Por Minuto	100 solicitudes / 60 segundos	Tráfico normal y protección contra bursts.
Por Hora	1000 solicitudes / 1 hora	Para clientes que hacen un uso intensivo pero esporádico.


C. Umbrales (Límites)

Establece los límites en función del costo del endpoint:

Endpoints Ligeros (Lectura/GET): Límites altos (ej., 500/min).

Endpoints Pesados (Creación/POST, Búsquedas Complejas): Límites estrictos (ej., 50/min).

Endpoints Críticos (Login): Límites muy bajos para evitar ataques de fuerza bruta (ej., 5/min por IP).
    
 
    
Mecanismo de Implementación (Algoritmos)

Aunque hay varios algoritmos, los más comunes son:


A. Ventana Fija (Fixed Window)

Lógica: Se resetea el contador exactamente al inicio de cada ventana de tiempo (ej., cada minuto exacto).

Riesgo: Permite un "doble burst" si un cliente agota el límite justo antes de que se reinicie la ventana y lo vuelve a agotar inmediatamente después.    


B. Cubeta de Fichas (Token Bucket)

Lógica: El cliente tiene una "cubeta" de capacidad fija (el límite). Se añaden fichas a la cubeta a una tasa constante.

Beneficio: Permite bursts (ráfagas cortas) de tráfico si la cubeta está llena, pero asegura que el tráfico promedio se mantenga bajo. Es más flexible que la ventana fija.


Manejo de la Respuesta (Obligatorio)

Cuando se excede el límite, la API debe responder de manera estándar para que el cliente pueda reaccionar.


A. Código de Estado

Utiliza el código de estado estándar HTTP:

429 Too Many Requests


B. Cabeceras de Respuesta

Incluye las siguientes cabeceras HTTP en cada respuesta (incluso si la solicitud fue exitosa) para que el cliente pueda rastrear su estado:

Cabecera	Propósito	Ejemplo
X-RateLimit-Limit	Límite de solicitudes permitido en la ventana.	100
X-RateLimit-Remaining	Número de solicitudes restantes en la ventana actual.	45
Retry-After	Obligatorio en 429. Tiempo (en segundos) hasta que se reinicie el contador.	30


C. Cuerpo de Error

Asegúrate de que el cuerpo del error 429 contenga un mensaje estructurado consistente con tu manejo de errores, indicando la razón del rechazo.

Ejemplo de Respuesta 429:

```
HTTP/1.1 429 Too Many Requests
Content-Type: application/json
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 0
Retry-After: 60

{
  "status": 429,
  "message": "Ha excedido el límite de tasa permitido. Intente de nuevo en 60 segundos."
}
```


Consideraciones Operacionales

Almacenamiento Rápido: El contador de solicitudes debe almacenarse en una memoria rápida y distribuida, como Redis, no en la base de datos principal, para evitar cuellos de botella.

#### Estrategia de Vencimiento: Utiliza la función de vencimiento (TTL - Time To Live) de Redis para que las claves del contador expiren exactamente al final de la ventana de tiempo.

Ubicación: Implementa el Rate Limiting lo antes posible en la ruta de la solicitud (idealmente en un API Gateway o Load Balancer) antes de que la solicitud llegue a la lógica de la aplicación.

Clientes Prioritarios: Considera la posibilidad de establecer límites más altos o exenciones para clientes internos o partners con acuerdos de nivel de servicio (SLA).



## Autentication





# Catching

Fundamental para el rendimiento y la escalabilidad

#### Reduce la latencia, el costo de la base de datos y la carga del servidor.


## 1. Teoría


### Vocabulario y los principios detrás del cache

A. Métricas Esenciales	Cache Hit (acierto), Cache Miss (fallo), Hit Ratio (relación de aciertos).	Saber medir la efectividad de una caché.

B. Ciclo de Vida	TTL (Time-To-Live): El tiempo que un dato es válido en la caché.	Definir cuándo y por cuánto tiempo un dato puede estar "viejo".

C. Políticas de Desalojo	LRU (Least Recently Used), LFU (Least Frequently Used).	Entender qué datos se eliminan cuando la caché está llena.

D. Invalidez de Caché	Principios de Invalidez Distribuida y el problema de "Two Hard Things" (nombrar cosas y invalidar cachés).	Minimizar la entrega de datos obsoletos.



## 2. Capas de Caching (Dónde Cachear)

#### Un backend moderno utiliza múltiples capas de caché, cada una con un propósito específico.

#### A. Caché del Navegador	El cliente (Frontend).	Encabezados HTTP: Cache-Control, Expires, ETag.

#### B. CDN (Content Delivery Network)	Servidores geográficamente distribuidos.	Almacenar activos estáticos (imágenes, CSS, JS) y contenido dinámico en el "borde".

#### C. Proxy Inverso / Gateway	Frente a los servidores de aplicación.	Varnish o Nginx (usando proxy_cache). Caching de respuestas HTTP completas.

#### D. Caché en Memoria (In-Memory)	Dentro del proceso del servidor de aplicación.	Uso de estructuras de datos nativas del lenguaje para caché local (rápido pero no compartido).

#### E. Caché Distribuida	Servidor dedicado y centralizado.	Redis o Memcached. La capa clave para la escalabilidad horizontal.

#### F. Caché de Base de Datos	Motor de DB (SQL/NoSQL).	Pools de conexiones, query caches (a menudo desaconsejado o automatizado).


## 3. Herramientas Esenciales (Distributed Caching)

El principal desafío en un Backend moderno (escalado horizontal) es la capa distribuida 

Redis es el estándar de facto.

#### Redis	Estructuras de datos (Strings, Hashes, Lists, Sets).	Uso como caché: Comandos SET, GET, EX (TTL).

#### Redis Sentinel o Redis Cluster.	Configurar alta disponibilidad y partición de datos (sharding).

#### Redis Cluster.	Configurar alta disponibilidad y partición de datos (sharding).

#### Pub/Sub (Publish/Subscribe).	Usar Pub/Sub para invalidar cachés en múltiples instancias de aplicación de forma reactiva.

#### Integración con el Framework	Librerías de cliente.	Implementar la conexión de la aplicación con el servidor Redis (ej. redis-py, node-redis).

#### Docker y Contenedores	Despliegue.	Configurar Redis en un contenedor Docker y vincularlo al Backend.


## 4. Patrones y Estrategias de Caching

La forma en que el código interactúa con la caché define su estrategia de lectura y escritura.


#### A. Estrategias de Lectura

### Cache-Aside (Lazy Loading)

La aplicación es responsable de leer/escribir

Si hay un miss, la aplicación lee de la DB y luego escribe en la caché.

Ventajas y desventajas: 

Más simple de implementar

Puede causar latencia en el primer miss.


### Read-Through

La aplicación solo lee de la caché.

Si hay un miss, la caché (o un componente intermedio) es responsable de leer la DB y rellenarse.

Ventajas y desventajas: 

La aplicación no tiene lógica de miss de caché.

Más complejo de configurar


#### B. Estrategias de Escritura y Actualización

### Write-Through

La aplicación escribe datos primero a la caché y luego a la DB (simultáneamente o en secuencia).

Invalidez:

Ideal para consistencia inmediata; el dato está fresco en ambas fuentes.


### Write-Back

La aplicación escribe solo a la caché.

La caché escribe a la DB más tarde (asincrónicamente).

Invalidez:

Muy alta velocidad de escritura. Riesgo de pérdida de datos si la caché falla antes de escribir en la DB.


### Refresh Ahead

La caché actualiza los datos caducados antes de que el cliente los solicite, basándose en patrones de uso.

Mantiene el rendimiento óptimo, pero es difícil de predecir.


#### C. Desafios y Soluciones

### Cache Stampede

Múltiples solicitudes golpean la caché simultáneamente después de que caduca un valor popular, lo que sobrecarga la DB.

Solución:

Locking Distribuido (solo un proceso regenera el valor) o Jittering (agregar una pequeña aleatoriedad al TTL).

 
### Datos Obsoletos

Los datos de la caché no coinciden con la DB.

Solución: 

Usar el patrón Write-Through junto con TTL muy cortos o invalidación forzada vía Pub/Sub.


## 5. DevOps Caching

##### El caching debe ser probado y monitoreado rigurosamente.

A. Implementación de Pruebas

Pruebas Unitarias: Probar la capa de Repositorio/Servicio para verificar que la lógica de Cache-Aside se ejecute correctamente (llamando a la caché antes de la DB).

Pruebas de Carga: Usar herramientas (como JMeter o Locust) para simular tráfico pesado y medir la reducción de latencia con y sin caché.

 
B. Monitorización Esencial

Hit Ratio: Es la métrica más importante. Debe ser lo más alta posible (idealmente > 85-90%). Una caída indica un problema de TTL o desalojo.

Uso de Memoria: Monitorear el consumo de memoria en el servidor de caché (Redis/Memcached) para evitar el desalojo prematuro o la saturación.

Latencia de Redis: Medir el tiempo de respuesta de Redis. Una alta latencia de la caché significa que la capa rápida ya no es rápida.




