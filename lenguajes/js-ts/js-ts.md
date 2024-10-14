TypeScript: 

	Se dice que TypeScript es un superconjunto de JavaScript. 

	Dado que agrega muchas funcionalidades que el anterior carece, además de los tipos. 

	La nuevas funcionalidades estan apuntadas a aumentar la eficiencia del programador. 

	Ofrece mejor depuración, menor tendencia a errores y más seguridad. 

	Los tipos agregan robustez al desarrollo en TypeScript. 

	Al declarar de que tipo son las cosas, se evitan errores a la hora de manipular las funcionalidades internas de la app. 

	Cuando no se usan cosas del tipo que espera una funcionalidad, el compilador dará aviso de que se está usando un tipo, valor, objeto que no es el correcto. 

	Otra de sus grandes funcionalidades es su transpilador que convierte el código TypeScript en JavaScript y lo hace compatible con las diferentes versiones de JavaScript. 



|| Instalación

	node: 

		node --version

	npm: 

		npm --version

	typescript: 

		global install: 

			npm i -g typescript

			Asume que la persona que use el proyecto, lo tenga instalado. 

			Le estamos dando permiso de super usuario a npm 

		local/proyec: 

			TypeScrip puede funcionar desde la carpeta del proyecto. 

			Se instala como dependencia y fijarla en el packaje.json. 

			npm init 

			Creará un proyecto. 

			instalarlo como dependencia. 

			npm i --save-dev typescript 


			Tendremos un packaje.json 

			Que tiene en sus dependencias a typescript

			En node .bin tendremos tcs que es el compilador de TypeScript. 

			Podemos ejecutarlo

			Con esto comprobamos que podemos correr de forma local typescript. 


		Comandos: 

			tsc 

			Abre el compilador, comprueba que typescript funcionará.  



|| Código JS y TS

	Podemos pasar todo el código js a un archivo .ts y funcionará. 


	Compilar: 

		tsc archivo.ts


	desde npm: 

		En package.json 

			"build": "tsc archivo.ts" 

			"scripts": {
    			"build": "tsc 1.ts"
    		}

    		npm run build


    Desde la web: 

    	TypeScript Playground




JS/TS


|| TS


|| Proyecto en TS


|| Código


|| Tipado


|| Tipos de Datos Primitivos


|| Tipos de Datos Especiales


|| Arrays y Tuplas


|| Tipo Object


|| Funciones


|| Genéricos 

 Es una manera de meter parámetros en definiciones de tipos. 

 Desde afuera vamos a introducir el tipo como si fuera un parámetro. 

 En la implementación o llamada al genérico, reemplazamos <T> que habiamos definido en la declaración. 

 Por el tipo de dato a utilizar, se pone en la llamada o cabezera. 

 Y en en el campo o propiedad escribimos lo que representará el tipo de dato elegido. 


 

|| Genéricos Avanzado y Prácticas



|| Genéricos en Funciones


 
|| Tipos de Utilidad
 
 Genéricos listos para usar que proporciona el lenguaje TS. 

 Lista de Genéricos Integrados: 

  Partial<Type>
  Readonly<Type>
  Record<Keys, Type>
  Pick<Type, Key>
  Omit<Type, Key>
  Exclude<Type, ExcludeUnion>
  etc...
  

 Partial: 
  
  Crea interfaces parciales (subsets). 
  
  El parámetro <Type> hace referencia al tipo de dato que debemos llamar y después escribir el contenido de ese tipo. 

  En otros lenguajes sería <T>. 


  Cuando le pasemos un tipo, nos va a devolver una versión minimalista de ese tipo. 
 
  En la cual todos los campos son opcionales. 

  Como una interrogación, el tipo que toque o undefined, NULL. 

  
  ```ts
  interface Todo {
   Title: string; 
   descrition: string; 
  }
  
  ```
   
  Es una interfaz llamada Todo que representa una tarea. 
  
  La tarea tiene un titulo y descripción en string. 

  
  ```
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
   return { ... todo, ...fieldsToUpdate }; 
  }

  ``` 
 
  Tenemos un parámetro todo (tipo Todo) 

  Un parámetro llamado fieldsToUpdate (tipo Partial<Todo>). 


  ``` 
  const todo1 = {
   title: "organize desk", 
   description: "clear clutter", 
  }; 

  ```

  ``` 
  const todo2 = updateTodo(todo1, { 
   description: "throw out trash", 
  });

  ```


  La consecuencia del tipo Partial: 

  
   ``` 
   let t: Partial<Todo> = {
    title: 'Hola', 
    

   };

   ```

   Hacemos una implementación de la estructura. 

   Si declaramos una propiedad/var lladamda t de tipo Todo. 

   Si omitimos la propiedad descripción, no nos da error en compilador. 

  
   Si no implementamos partial, nos daría error en el compilador. 

   ``` 
   let t: Todo = {
    title: 'Hola', 
    

   };

   ```
   Hacemos una implementación de la estructura. 

   Declaramos una propiedad/var lladamda t de tipo Todo. 


 Readonly: 
   
  Crea una copia de solo lectura. 
   

 NonNullable: 

  Retira el NULL. 

  Se puede usar cuando queremos forzar a que que no pasemos o devuelva un NULL. 
  
  Forzar a pasar un valor, no puede ser NULL. 

 

|| Callbacks

 

|| Promesas

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
 
  ```
  const prom = Notification.requestPermission(); 
  
  ```
  
  La función requestPermission(); devolverá una promesa  
   
  En esencia, la promesa es una especie de caja vacia (hasta la respuesta). 

  Cuando llegue la respuesta, tendra el return de la función que se ha delegado, en este caso, requestPermission(). 

 
  Ahora que la función está en una promesa, como está ejecutandose paralelamente, la función requestPermission(), devolverá inmediatamente, que nos demos cuenta. 
  
  Si debajo llamamos a otra función, 
  
  ```
  const prom = Notification.requestPermission(); 
  continuarCargandoPagina();   
  SeguirHaciendoOperaciones(); 
  
  ``` 
  Inmediatamente después, se cargarán las demás funciones o instrucciones. 

 
  Otra cosa importante, es que no podemos sacar el valor de la promesa; porque no sabemos cuando tendremos respuesta. 

  ```
  const prom = Notification.requestPermission(); 
  continuarCargandoPagina();   
  SeguirHaciendoOperaciones();
  prom.value 

  ```

  No podemos tomar decisiones o depender del valor de las promesas para nuestro código. 

 
  Para ver o comprobar el valor que hay adentro de la promesa, se nos provee de dos métodos. 

  then y catch recibirán callbacks. 

  Le debemos pasar en sus parámetros otra función con parámetros. 

  
  Callback: 

   Pasar una función como parámetro en la llamada a otra función. 

   ```
   int sumar (int a, int b, void (*callback)(int)) {
    int suma = a + b; 
    (*callback)(suma); 
    return suma; 
   }
 
   ```

  A then y catch le pasamos como parámetro una función. 

  Se ejecutará cuando la promesa se resuelva. 

  ```
  const prom = Notification.requestPermission();   
  prom.then(function(){
   console.log('Hola'); 
  }); 

  ```
   
  Así conocemos cuándo la promesa termina de ejecutarse. 
  
  'Hola' se ejecutará cuando requestPermission se cierre/de respuesta true o false. 
  
  Sea una respuesta buena o mala. 

  
  Las promesas rompen el flujo secuencial de instrucciones. 

  Primero se ejecuta la promesa inmediatamente, aunque este en otro hilo. 
  
  Después se ejecuta declaración then que asigna una función.  

  El código se ejecutará solo cuando tenga respuesta. 
   
  Puede ejecutarse la función siguente() antes o después del la función en then. 

  ```
  const prom = Notification.requestPermission();   
  prom.then(function(){
   console.log('Hola'); 
  }); 

  siguiente() 

  ```

 
 Parámetro en then y catch: 

  Va a tener un parámetro, va a ser el return de la función que metimos en otro hilo. 
   
  ```
  const prom = Notification.requestPermission();   
  prom.then(function(param){
   if(param === "granted"){
    console.log("Nos ha dicho que si")
   }else{
    console.log("Nos ha dicho que no") 
   }
 
  }); 

  siguiente() 

  ```
  
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

  ```
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

  
  ```
  Solo se va a llamar cuando la promesa lance en error, promesa rechaza/da. 

  Podemos ponerle un console.error(err); o mandarlo nuestro sistema de registro o tratamiento de errores. 

  
 Método finally: 

  Se va a ejecutar siempre, independientemente de si sale bien o mal la promesa. 

  Lo podemos usar para limpiar cosas, mensajes, elementos, etc. 
 
  Si antes habiamos puesto un mensaje como cargando. 

  Cuando se haya resuelto, bien o mal, lo limpiamos. 

  ```
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

  ```
  
 
  También aceptará un callback como parametro que es lo que se va a ejecutar. 
 
  ```
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
  
  ```
 
  La promesas son funciones o callbacks encadenados. 

  Desde la función que devuelve una promesa que se ejecutará en otro hilo. 
 
  Hasta las que se pasan internamente en then, catch y finally. 

  

 Promesas Encadenadas: 

  Podemos encadenar then



 Promesas Propias: 

  new Promise  


  Se usa para crear nuestro propio código sincrono. 

  Para ejecutar cosas pesadas, que bloquearían el programa por mucho tiempo si lo hacemos con código asincrono. 
  


 Función reject en Promise: 
   
  Es la función de rechazo. 

  Utilizada para lanzar un error. 

  Cuando Promise no puede resolver satisfactoriamete, utilizamos el reject para dar un mensaje sobre lo que pasó con la promesa, accion. 

  
  Una promesa o sale bien o mal. 

  Llamamos a resolve o a reject. 

  No podemos llamar a uno y después a otro esperando a que se hagan los dos uno. 


 
 Funciones en Promise: 

  Como Promise.resolve() o Promise.reject()

  Al pasarle un valor, nos devuelve una promesa que la resuelve instantaneamente según lo que le pasamos. 

  Se usa para fabricar rapidamente promesas simples. 
  
    








    	
