Patrones de Diseño


|| Service Layer

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



|| Inversión de Control e Inyección de Dependencias

 No son lo mismo aunque la inyección de dependencias es un tipo de inversión de control y hay más tipos de inversión de control que no se corresponden con la inyección de dependencias, la inversión de control es un concepto más generico. 

 
 Inversión de control: 
  
  Ej: Al aprender a programar, uno de los primeros programas que se enseñan es 'Hola Mundo!' que consiste en imprimir una cadena. 

  El 'Hola Mundo' esta contenido en una función o archivo principal que cuando se ejecuta lanza o muestra las instrucciones. 

  En este caso estamos controlando el 100% del código, describimos todas las cosas que van a pasar.  
 
  ```
  main(){
   println('Hola Mundo!')
   
   if (){
     print()
   }else{
    print()
   }
  }
 
  ```
  

  Cuando ponemos código en una función principal, estamos dirigiendo el 100% de nuestro programa, estamos controlando lo que hace el programa. 
  
  Si hacemos un tipico problema de alumnos, profesores, asignaturas: 
   
   ```
   Elige una opción:
    1. Alta de alumnos
    2. Alta de profesores
    3. Alta de asignaturas
    
   Introduce una opción: ___

   ```

  Esta pensado para aplicar estructuras de control, usando if, condicionales, etc. 

  Cuando el usuario tiene que introducir datos, debemos captar la entrada con la función que tiene para ello el lenguaje y de acuerdo con el valor introducido, sucede una u otra cosa. 

  Como programadores nos ocupamos de usar todas las herramientas necesarias para crear el programa, nos ocupamos de las funciones, parametros, las variables, los datos, manejo de errores, etc. 

  Todo este procedimiento es lo contrario a IoC. 

 
  Casos de IoC: 

   Cuando hacemos una app de escritorio usando windowsForm o javaSwing o estamos haciendo una app web moderna con un framework como ExpressJS. 

   No trabajamos teniendo el control de las funciones, parametros, errores, etc. 

   Al crear una interfaz gráfica con javaSwing, creamos los botones y luego le asignamos eventos. 

   Los eventos tiene acciones o funciones para cuando se utilize un botón, produzca una acción. 
   
   ```
   addEventListener(()-> {
    //...
   })
  
   ```  
 
   En express podemos crear una acción cuando se visita determinada ruta: 

    ```
    app = express()
    
    app.get("/", () -> {
     //res.
     //req. 
    }
    
    ```

   Con res y req obtenemos información sobre las peticiones; solamente estamos proporcionando funciones.  

   Si usamos un método como .listen() llamamos al servidor. 

    ```
    app.listen()

    ```

   Pero en ningún momento lo programamos. 
  
  
   Cuando usamos algunos de estos frameworks funcionan bajo el patron IoC que abstrae el control del programa. 

   Solo usamos funciones para determinar lo que ocurre en algún momento del ciclo de vida de la app. 

   Estamos delegando eventos importanes para la app y dejar que la app se dirija por si sola mediante algún tipo de estructura que no controlamos como funciona.  


 Inyección de dependencia: 

  Es un tipo de inversión de control porque estamos dejando que el lenguaje de programación o framework instancie los objetos por nosotros. 

  No así toda la inversión de control es inyección de dependencia. 


  ```
  app = express()
    
  app.get("/", () -> {
   //res.
   //req. 
  }
    
  ```

  Esta inversión de control no tiene nada que ver con objetos instanciados, solo pasamos una función anonima y callbacks para obtener información. 

   

|| Patrón Iterador

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

  [1, 4, 3, 7, 4, 2, 6, 5]

 Vemos que su longitud es 8 (n=8) y que tenemos una operación indice que nos permite acceder al elemento en la posición 0 hasta n-1 (8-1). 
 
 Podemos crear un iterador para recorrer el array. 

 iterador {
  arr: int[]
  
 }

 La estructura iterador contiene el array de elementos que estamos iterando. 

 Es de tipo entero, pero podría ser generico 

 iterador <t> { 
  arr: <t>[]
  
 }
 //array de tipo t para un iterador de tipo t


 Para implementar next() necesitamos recordar cuál es el último elemento que el iterador ha devuelto o el siguiente elemento que va a dar. 
 
 Le agregamos un elemento cursor de tipo entero que va a representar la posición del siguiente elemento que devolvería cuando llamemos a next(). 

  iterador {
  arr: int[]
  cursor: int = 0 
 }

 Inicialmente va a valer 0, next va a tener como código; el valor de la posición cursor del array y después incrementamos cursor. 

 next(){
  val <- arr[cursor]
  cursor++
  return val
 }
 
 Al final va a devolver el valor que leyo.  


 Podemos imaginar al cursor como una flecha que apunta al siguiente elemento devuelto. 

 Cuando llamemos a next(), miramos lo que hay en la posición apuntada por el cursor; lo anotamos y mueve el cursor (contador++) y devuelve lo que acabamos de leer. 

  Al comiendo: 
   [1, 4, 3, 7, 4, 2, 6, 5]
    *
  Cuando llamaos a next(): 
    [1, 4, 3, 7, 4, 2, 6, 5]
        *
    apunta al 4 y devuelve 1. 
  
 
 hasNext() va a consultar si cursor es menor que la longitud del array 

 hasnext() {
  cursor < len(arr)
 }
  

 Implementación en Python: 

  iterador.py

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


 La operación hasNext() hay que implementarla para saber cuando detenerse. 

 Cuando no queden elementos y llamamos a it.next() se pasa el limite del elemento. 

 Podemos detectar el caso de que no haya siguiente y devolver una excepción o devolver un error especial. 


  









