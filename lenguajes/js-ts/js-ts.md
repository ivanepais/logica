TypeScript: 

	Se dice que TypeScript es un superconjunto de JavaScript. 

	Dado que agrega muchas funcionalidades que el anterior carece, además de los tipos. 

	La nuevas funcionalidades estan apuntadas a aumentar la eficiencia del programador. 

	Ofrece mejor depuración, menor tendencia a errores y más seguridad. 

	Los tipos agregan robustez al desarrollo en TypeScript. 

	Al declarar de que tipo son las cosas, se evitan errores a la hora de manipular las funcionalidades internas de la app. 

	Cuando no se usan cosas del tipo que espera una funcionalidad, el compilador dará aviso de que se está usando un tipo, valor, objeto que no es el correcto. 

	Otra de sus grandes funcionalidades es su transpilador que convierte el código TypeScript en JavaScript y lo hace compatible con las diferentes versiones de JavaScript. 



# Tipos de datos

# Tipos de datos exclusivos de TypeScript



# Callbacks

 
# Promesas

 O futuros en otros lenguajes. 
  
 Es una estructura de datos para la programación concurrente. 
  
 O también llamada multihilo o multi thead. 

 
 En la programación imperativa se programa y ejecuta de arriba hacia abajo. 

 ```
 SentenciaUno(); 
 SentenciaDos(); 
 const Result = SentenciaTres(); 
 SentenciaCuatro(Result); 

 ```
 
 Hasta que la función SentenciaDos no termina de ejecutarse no se llama a la función SentenciaTres. 

 La función SentenciaTres nos devuelve un resultado dado que tiene un return para que se pueda almacenar en la variable. 
  
 Al hacer esto se lo pasamos como parámetro a la función SentenciaCuatro. 

 
 En esta situación no se puede llamar primero a la SentenciaCuatro y luego llamar a la SentenciUno.  
 
 Dado el orden imperativo que sigue el lenguaje. 

 
 La programación concurrente plantea que si una de las funciones tarda en ejecutarse va a repercutir en el resto de las instrucciones. 

 Hoy en día los procesadores son multinúcleo, eso se transforma un mucha potencia de cálculo que se puede aprovechar para ejecutar multiples programas a la vez. 

 Es lo que hace un sistema operativo, pero ahora llevado a la web. 

 
 Con la programación concurrente podemos hacer que nuestro programa se divida en varios para hacer multiples cosas en paralelo de forma simultanea. 

 Podríamos ejecutar varias funciones paralelamente en vez de una después de la otra como vimos en el ejemplo. 

 Al tener varios núcleos el sistema reparte las tareas entre ellos. 


 Los hilos en programación forman parte del mismo programa, comparten memoria. 

 Esto presenta inconvenientes cuando un hilo modifica una variable que el otro ya ha leido o no lo registro. 
  

 Para simplificar estos problemas se proporciona una estructura o abstración. 

 En la que solo se pasan unos parámetros a la función que queremos que se ejecute en otro procesador. 

 La estructura se encargará de lo demás. 

 Cuando la función se termine de ejecutar, la estructura proporciona un aviso de vuelta. 

 Tendra el return de la función que le hemos pasado. 

 
 Como teníamos la función SentenciaTres que tardará tiempo en ejecutarse. 

 ```
 SentenciaUno(); 
 SentenciaDos(); 
 const Result = SentenciaTres(); 
 SentenciaCuatro(Result); 

 ```

 Si queremos ejecutar una función que devuelva un resultado. 

 Podemos mandar la función de la que esperamos un valor, para que se ejecute en otro núcleo. 

    
 Este tipo de programación o abstracción se incorpora en APIs de navegador, nodejs y en los paquetes de npm.   
 
 Anteriormente los callback eran los que representaban a estos tipos de abstracciones. 

 Las promesas hacen más fácil aún la implementación multinúcleo. 
 

 Ejemplo: 

  La función del navegador 'Notification.requestPermission()' aplica una promesa. 
  
  Se usa para pedirle al usuario para mostrar una notificación en su navegador. 
 
  Las interfaces de usuario del que disponen las personas en los dispositivos son asincronas en el sentido de que tienen el poder de aceptar o no un pedido. 

  La devolución del usuario no ocurre al instante, puede tardar en hacer click. 

  Una devolución que puede ocurrir en tiempo indefinido o que no depende el programa o depende del usuario. 

  Es correcto que la desplazemos a otro hilo y se siga ejecutando paralelamente otras funciones del programa. 
  
  Si la programamos de forma asincrona o secuencialmente se bloquea el programa hasta que el usuario decida. 

  Un ejemplo más facil es imprimir un mensaje con alert, bloquea el programa hasta aceptes la respuesta. 


  Entonces, la solicitud de notificación estará en pantalla hasta que el usuario eliga si o no. 

  Cuando el usuario de la respuesta, el retorno de la función de la función se proporciona en forma de una promesa. 

  Debemos capturar el retorno en forma de promesa para verificar la respuesta y devolver algo o no hacer nada en caso de un false. 
 
  Además para evitar confusiones, debemos mostrale al usuario qué estamos haciendo. 

 
 Código: 
 
  
  const prom = Notification.requestPermission(); 
  
  
  
  La función requestPermission(); devolverá una promesa  
   
  En esencia, la promesa es una especie de caja vacia (hasta la respuesta). 

  Cuando llegue la respuesta, tendra el return de la función que se ha delegado, en este caso, requestPermission(). 

 
  Ahora que la función está en una promesa, como está ejecutandose paralelamente, la función requestPermission(), devolverá inmediatamente, que nos demos cuenta. 
  
  Si debajo llamamos a otra función, 
  
  
  const prom = Notification.requestPermission(); 
  continuarCargandoPagina();   
  SeguirHaciendoOperaciones(); 
  
  
  Inmediatamente después, se cargarán las demás funciones o instrucciones. 

 
  Otra cosa importante, es que no podemos sacar el valor de la promesa; porque no sabemos cuando tendremos respuesta. 

  
  const prom = Notification.requestPermission(); 
  continuarCargandoPagina();   
  SeguirHaciendoOperaciones();
  prom.value 

  

  No podemos tomar decisiones o depender del valor de las promesas para nuestro código. 

 
  Para ver o comprobar el valor que hay adentro de la promesa, se nos provee de dos métodos. 

  then y catch recibirán callbacks. 

  Le debemos pasar en sus parámetros otra función con parámetros. 

  
  Callback: 

   Pasar una función como parámetro en la llamada a otra función. 

   
   int sumar (int a, int b, void (*callback)(int)) {
    int suma = a + b; 
    (*callback)(suma); 
    return suma; 
   }
 
  

  A then y catch le pasamos como parámetro una función. 

  Se ejecutará cuando la promesa se resuelva. 

  
  const prom = Notification.requestPermission();   
  prom.then(function(){
   console.log('Hola'); 
  }); 

  
   
  Así conocemos cuándo la promesa termina de ejecutarse. 
  
  'Hola' se ejecutará cuando requestPermission se cierre/de respuesta true o false. 
  
  Sea una respuesta buena o mala. 

  
  Las promesas rompen el flujo secuencial de instrucciones. 

  Primero se ejecuta la promesa inmediatamente, aunque este en otro hilo. 
  
  Después se ejecuta declaración then que asigna una función.  

  El código se ejecutará solo cuando tenga respuesta. 
   
  Puede ejecutarse la función siguente() antes o después del la función en then. 

  
  const prom = Notification.requestPermission();   
  prom.then(function(){
   console.log('Hola'); 
  }); 

  siguiente() 

  

 
 Parámetro en then y catch: 

  Va a tener un parámetro, va a ser el return de la función que metimos en otro hilo. 
   
  
  const prom = Notification.requestPermission();   
  prom.then(function(param){
   if(param === "granted"){
    console.log("Nos ha dicho que si")
   }else{
    console.log("Nos ha dicho que no") 
   }
 
  }); 

  siguiente() 

  
  
  Si dentro de la función tenemos el parámetro, podemos manipularlo y tener acceso a lo que nos haya devuelto. 

  requestPermission() es un función que devuelve o resuelve una promesa. 

  Sus valores son default, denied, granted; en función si el usuario acepta o no las notifiaciones. 

  Aplicamos código según el valor que nos devolvió. 

  
 Erroes en promesas, catch: 

  Aparte de devolver cosas, las promesas pueden fallar. 

  En la programación asincrona pondríamos try and catch. 

  En la programación sincrona, si la función que se delega a una promesas falla.  

  Usamos catch para podemor capturar el error lanzado. 

  También va a aceptar como parámetro otro callback. 

 
  const prom = Notification.requestPermission();   
  prom.then(function(param){
   if(param === "granted"){
    console.log("Nos ha dicho que si")
   }else{
    console.log("Nos ha dicho que no") 
   }

  }); 
  prom.catch(function(error){
   console.error(err); 
  }); 
  
  siguiente(); 

  
  
  Solo se va a llamar cuando la promesa lance en error, promesa rechaza/da. 

  Podemos ponerle un console.error(err); o mandarlo nuestro sistema de registro o tratamiento de errores. 

  
 Método finally: 

  Se va a ejecutar siempre, independientemente de si sale bien o mal la promesa. 

  Lo podemos usar para limpiar cosas, mensajes, elementos, etc. 
 
  Si antes habiamos puesto un mensaje como cargando. 

  Cuando se haya resuelto, bien o mal, lo limpiamos. 

  
  const prom = Notification.requestPermission();   
  prom.then(function(param){
   if(param === "granted"){
    console.log("Nos ha dicho que si")
   }else{
    console.log("Nos ha dicho que no") 
   }

  }); 
  prom.catch(function(error){
   console.error(err); 
  }); 
  prom.finally(){
   console.log("Finalizado");
  };
   
  siguiente(); 
  
 
  
 
  También aceptará un callback como parametro que es lo que se va a ejecutar. 
 
  
  const prom = Notification.requestPermission();   
  prom.then(function(param){
   if(param === "granted"){
    console.log("Nos ha dicho que si")
   }else{
    console.log("Nos ha dicho que no") 
   }

  }); 
  prom.catch(function(error){
   console.error(err); 
  }); 
    prom.finally(){
   console.log("Finalizado");
  };
 
  siguiente();  
  
    








    	
