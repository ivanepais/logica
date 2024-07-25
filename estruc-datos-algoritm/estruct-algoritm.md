Estructuras de Datos y Algoritmos


|| Estructuras de Datos

 Permiten representar de forma eficiente información compleja en un programa de ordenador.
 
 Son las distintas estructuras que utilizamos para representar la información en el ordenador. 

 Ej: Si tenemos una app que necesita representar datos de libros que hay en una libreria o biblioteca. 
   
 Utilizamos estructuras de datos para representar los datos de un libro y la colección de ellos en el sistema.   


 Array: 
  
  Son un tipo de estructura de datos que nos permiten representar una secuencia de elementos de un mismo tipo de forma ordenada por medio de un indice. 
  
 
 Existen más estructuras para almacenar elementos más complejos. 

 Ej: Representar información sobre clientes de una empresa multinacional (decenas de miles de clientes). 
 
 Como está lista no va a ser pequeña, cómo podemos almacenar tantos datos de forma eficiente?
 
  Opciones: 
   
   Usar un array de 70.000 posiciones. 
    
    Consecuencias: 
     
     Después guardar más de 70.000, de forma dinámica. 

     Mantener en memoria 70.000 elementos. 
 
 

 Existen estructuras eficientes para almacenar información compleja. 
 
 Lo más importante es determinar cuándo conviene usar una u otra. 
 
 Saber distinguir cuándo es el momento apropiado para cada una. 
 
 

|| Listas enlazadas

 Permiten presentar un grupo de elemetnos presentados como una secuencia. 
 
 Podemos guardar un grupo de elementos que sean del mismo tipo 

 Ej: enteros, caracteres, structure de c, clase de java

 
 Debemos poner nuestro objeto dentro de una estructura llamada nodo. 
 
 Ej: (32)-> nodo: tipo entero; (24) otro nodo de tipo entero, (16), etc. 

 
 Los nodos tiene punteros que permiten apuntar a otro nodo. 
 
 Ej: (32)-->(24)-->(16). 

 Se describe como nodo 32 apuntando al nodo 24 que apunta al nodo 16. 

 
 En una secuencia más compleja de nodos apuntados entre si como: 
 
 (32)-->(21)-->(19)-->(72)-->(24)

 Es una lista: conjunto de nodos apuntados entre si. 

 (32) es el nodo principal llamado cabeza. 

 Es el único que debemos que conocer para poder trabajar con una lista. 

 
 Para acceder al resto de los nodos, accedemos a los punteros siguiente de cada uno de los nodos. 

 Puntero Siguiente: si estamos en el nodo cabeza (32), si accedemos al siguiente va a acceder al nodo 21. 

 Lo que no es cabeza se denomina cola. 
 
 (32)-->(21)-->(19)-->(72)-->(24)
 
 cabeza: 32
 
 cola: 21, 19, 72, 24. 


 La cola es una lista, el 21 es la cabeza que tiene en su cola 19, 72, 24. 

 Así sucesivamente hasta llegar al último elemento. 

 El último elemento apunta a una lista vacía de elemento, null. 


 Ventajas sobre un array: 
 
  Los nodos no tienen por qué guardarse todos juntos en memoria, como ocurre con los arrays. 

  Pueden tener longitud variable. 

  Podemos agregar y quitar elementos en tiempo de ejecución. 
 
 
  No tienen que estar de forma secuencial y consecutiva en memoria, pueden estar en cualquier posición de memoria. 
  
  Lo único que importa es que cada nodo esté apuntando al siguiente por medio de un puntero. 

  Su longitud es variable, nada nos impide agregar o quitar elementos.


 Desventajas sobre un array: 
 
  Las listas no tienen noción de índice, por lo que no podemos hacer accesos aleatorios. 

  Necesitan más espacio en memoria ya que tienes que almacenar los punteros. 

  
  Sin un índice no podemos acceder de forma aleatoria a los elementos. 

  No podemos tomar un elemento con un índice dado que no tiene. 
 
  Solo conocemos la cabeza para acceder a cualquier elemento. 

  Accedemos a la cabeza y recorremos los elementos uno a otro. 
 
  Ocupan más espacio en memoria dado que tenemos guardar valores o datos (nodo) y su puntero que consume espacio adicional por nodo. 


 Ejemplo y Operaciones: 

  ESTRUCTURA libro
       
   nombre : CADENA [50]
   autor : CADENA [50]
   isbn : CADENA [13]
 
  FIN ESTRUCTURA  
  
  La estructura libro contiene datos que le corresponde a un objeto libro. 
  
  
  ESTRUCTURA lista
   
   cabeza : libro
   cola : PUNTERO A lista 
  
  FIN ESTRUCTURA
  
  La estructura lista es una lista de libros que tiene una cabeza que es el libro y tiene una cola que es el resto de la lista.  

  Como vimos, la cola es una lista que puede tener una cabeza y otra lista, o puede tener una lista vacía si es el último elemento, va a valer nulo. 

  Siempre que utilizemos cola como nulo nos estamos refiriendo a que es el último elemento de la lista. 

  Estás dos estructuras corresponden a lenguajes funcionales como lisp o haskell. 


  Para guardar elementos en una lista con un lenguaje imperativo podemos utilizar dos estructuras. 

  Estructura llamada nodo: contiene el elemento objeto y un elemento siguiente/puntero. 

  ESTRUCTURA nodo 
  
    elemento : libro
    siguiente: PUNTERO A nodo

  FIN ESTRUCTURA


  Estructura llamada lista: solo contiene un elemento cabeza que es un puntero al primer nodo. 

  ESTRUCTURA lista
 
   cabeza: PUNTERO A nodo

  FIN ESTRUCTURA

  La Estructura lista puede tener muchos elementos, como una longitud o cualquier otro metadato que necesitemos. 

  
 Crear nodo: 

  FUNCION CrearNodo (l: Libro): Nodo
   VARIABLE nuevoNodo: nodo
   
   nuevoNodo.elemento = l
   nuevoNodo.siguiente = NULO
   Devolver nuevoNodo
  
  FIN FUNCION

  Es una función que a partir de un libro nos devuelva a un nodo. 
  
  Tendra que tomar un nuevo nodo. 
 
  Ponerle como elemento el cual queremos poner en el nodo. 

  Y hacer que su siguiente valga nulo, porque no sabemos a lo qué apunta.  
  
  Devolvemos el nodo. 
  
    
 Recorrer una Lista: 
  
  Tenemos qeu acceder a cada uno de los elementos de una lista. 
  
  Comenzamos por el primero y terminamos por el último. 

  Ej: representar biblioteca de libros como una lista

  {- mi lista -}
  biblioteca: lista


  Puedo acceder al primer libro guardado en la lista, accediendo a biblioteca.primero

  {- acceso al primer nodo -}
  biblioteca.primero
  

  Con esto podemos acceder al nodo. 
  
  {- acceso al primer libro -}
  biblioteca.primero.elemento
  
  Si podemos acceder al elemento podemos acceder directamente al libro. 


  Podemos acceder a sucesivos elementos yendo al siguiente del primero. 
 
  {- acceso al segundo nodo nodo -}
  biblioteca.primero.siguiente

  
  O al tercer elemento, yendo del siguiente al siguiente. 

  {- acceso al tercer -}
  biblioteca.primero.siguiente.siguiente

  
  Estos métodos no es muy eficiente. 


  Podemos usar un bucle para recorrer los elementos del primero al último. 

  Como el último elemento va a ser el que apunto a la lista vacia NULL. 
 
  Vamos a crear un bucle para recorrer cada uno de los elementos hasta que se encuentre un elemento cuyo siguiente es nulo. 

  Ej: función para recorrer una lista 'l'

  FUNCION RecorrerLista (l: lista)
   VARIABLE puntero: Nodo

   puntero = l.cabeza
   MIENTRAS (puntero != NULO) {
    ProcesarElemento(puntero.elemento)
    puntero = puntero.siguiente
   }

  FIN FUNCION

  Necesitamos un puntero para poder ir guardando la referencia de en qué posición de la lista estamos. 
  
  Inicialmente va a estar en cabeza. 

  Mientras ese puntero no apunte a una lista vacia 
  
  Podemos procesar el elemento apuntado por ese puntero y pasar al siguiente elemento con esa línea de actualización. 

  Puntero va a ser ahora el siguiente del puntero. 
  
  
  Funcionamiento: va a ir pasando cada uno de los elementos de la lista y podemos procesar uno tras otro hasta llegar al último. 
  
  Cuando procesemos el último el puntero se actualizará por el valor nulo. 

  Dado que el último no tiene nada más después. 

  Saldrá del bucle. 

 
 Insertar elementos en una lista: 
  
  Depende de: 
   
   Si está vacía la lista

   Agregar al principio (prepend)
   
   Agregar al final (append)

   Agregar entre media. 

 
  Insertar elementos en una lista vacía: 

   //Si está vacia, su primer elemento va a ser un nulo: 
   lista.primero = NULO

   //Creamos un nuevo nodo y hacer que el putnero al primer nodo apunte a él. 
   VARIABLE nuevoNodo: Nodo
   nuevoNodo.elemento = l
   nuevonodo.siguiente = NULO
   lista.primero = nuevoNodo

   Simplemento instanciar un nuevo nodo y lo asociarlo dentro del primer elemento de la lista. 


 Insertar elementos al prinipio: 
   
  (32)-->(21)-->(19)

  El primer elemento de esta lista es 32 y lo que queremos hacer es agregar un elemento antes que este. 

  (72)-->(32)-->(21)-->(19)
   
  Instanciamos un nuevo nodo. 
   
  Hacemos (72) que su siguiente apuente al primer elemento (32)
  
  Luego actualizamos el puntero (32) al primero (72) para que apunte al nuevo primero. 

  Código: 
   

   PROC InsertarPrincipio(l: lista, b: libro
    VARIABLE nuevoNodo: Nodo

    nuevoNodo.elemento = b
    nuevoNodo.siguiente = l.primero
    l.primero = nuevoNodo
   FIN PROC
   
  
  Tomamos el nuevo nodo, le ponemos su valor. 
  
  Hacemos que apunte al actual cabeza de la lista. 
 
  Luego actualizamos la cabeza de la lista. 
  

 Insertar elementos al final: 
  
  Tenemos que recorrer la lista (bucle) hasta llegar a un elemento que no tenga siguientes (último elemento). 
  
  Cuando hayamos llegado, instanciamos nuestro nuevo nodo.
 
  Hacemos que el último elemento de la lista apunte al nuevo nodo recien creado. 

  
 Insertar después de un nodo: 

  Un nodo que está en cualquier parte de una lista. 

  Ej: insertar un elemento después de la qunta posición. 
 
  Ej: insertar un elemento después del libro 'El arte de la guerra'.  
 
  
  Tenemos que correr la lista con un puntero llamado anterior. 
  
  Va a apuntar al elemento anterior al del nuevo elemento que vamos a introducir. 

  Instanciamos un nuevo elemento, lo introducimos en un nodo y hacemos que ese nodo apunte al elemento que sigue a anterior. 

  Después actualizamos el puntero siguiente de anterior para que apunte al nuevo nodo. 

 
 Eliminar elementos: 

  Eliminar elementos requiere jugar con punteros también. 

  Cuando vayamos a eliminar un elemento de una lista, tenemos que acordarnos de liberar memoria ocupada por dicho nodo (solo en los que no tienen recolector de basura). 

  
  No podemos simplemente cambiar un puntero de valor, tenemos que mantener siempre una referencia al elemento que queremos eliminar. 

  Dado que tenemos que liberar la memeria ocupada por dicho nodo. 

  Sobre todo cuando usamos memoria dinamica en el lenguaje de programación que no permite liberar memoria automaticamente. 

  
  Eliminar primer elemento: 

   Sea la lista l: 
    
     l.primero = l.primero.siguiente
   
     Al hacer esto no liberamos la memoria que usaba el anterior primer nodo. 

  
    PROC EliminarPrimero(l: Lista)
     VARIABLE temporal: Nodo

     temporal = l.primero
     l.primero = l.primero.siguiente
     ELIMINAR temporal
    FIN PROC

   Primero usamos una variable temporal para guardar el primer elemento.
   
   Después actualizamos el puntero para que ahora el primer elemento sea el segundo elemento.  
  
   Al final eliminamos de memoria la variable temporal. 


  Eliminar último elemento: 
   
   Accedemos a la punúltima posición

   Eliminamos de forma parecida

   PROC EliminarUltimo(l: Lista)
    VARIABLE temp: Nodo
    VARIABLE nodo: Nodo

    nodo = l.primero
    MIENTRAS (nodo.siguiente.siguiente != NULO)
     nodo=nodo.siguiente
    FIN MIENTRAS

    temp = nodo.siguiente
    nodo.siguiente = NULL
    ELIMINAR temp
   FIN PROC


   Necesitamos una variable temporal para guardar el nodo/elemento que vamos a eliminar  de la lista. 

   Usamos un puntero llamado nodo para ir accediendo a cada uno de los elementos de la lista hasta llegar al penúltimo. 
  
   Nos ponemos en el primer elemento. 

   Comenzamos a recorrer la lista desde allí, llegamos al penúltimo cuando el siguiente del siguiente sea de nulo, mientras no sea nulo (!=) continua avanzando. 

   Una vez que llega al valor nulo, lo que tenemos que hacer es extraer el siguiente en la variable temporal. 

   Eliminamos el siguiente que tenga el penúltimo. 
 
   De este modo, ahora el penúltimo es el último. 

   Eliminamos la variable temporal. 



  Eliminar elemento medio
   
   Accedemos a la posición anterior al elemento que quiero eliminar
   
   Hago que el puntero de la posición anterior al elemento que quiero eliminar apunte al elemento siguiente al del elemento que quiero eliminar. 


   (32)--(21)-->(19)
   
   Todo lo que tenemos que hacer es que 32 apunte como siguiente al 19.
   
   Debemos mantener una referencia al 21 para poder hacerlo cuando vayamos a eliminarlo de memoria. 


  Resumen: 
  
   Por medio de lista podemos hacer cosas como: 
   
   Identificar el primer elemento (head). 

   Identificar el último elemento (recorrer hasta null). 

   Recorrer una lista. 

   Insertar un elemento (tanto al inicio, medio y final). 

   Eliminar un elemento (inicio, por medio y al final de la lista).
 





|| Colas 

 Como en la vida real, cuando hay una cola; nos incorporamos al final de la fila. 

 Cuando va avanzando siempre se considera al primer elemento.

 El primer elemento tiene que abordar, es la cabeza de la cola. 

 
 Ej: Dato que queremos poner en una cola como un pedido, compra, etc. 
 
 Ponemos al objeto dentro de una estructura de dato llamada nodo. 
 
 (32)-->(24)-->(16)

 
 Una cola se puede componer a partir de una lista enlazada. 

 Unimos nodos desde el principio hasta el final por medio de punteros. 

 Sólo que las operaciones son esencialmente distintas. 

 
 Podemos adaptar el funcionamiento de la lista enlazada para construir colas. 
 
 Lo único que tenemos que hacer en una cola, al igual que en una lista es ir uniendo los nodos desde el principio al final por medio de punteros. 

 Las operaciones son distintas, no tenemos que ocuparnos de agregar al principio, medio o final. 

 Las operaciones son tres: 


 1. Encolar: 

  Introducir algo en la cola. 

  Los elementos se introducen en la cola por el final. 

  Podemos encolar elementos agregándolos al final de nuestra lista. 

  Reutilizamos la función insertarFinal.   
 
 
  Ej, si tenemos que introducir un pedido o compra en nuestra cola lo tenemos que poner al final. 

   
 2. Procesar o Consultar: 
  
  Obtener el siguiente elemento de la cola. 

  Como es una cola, el siguiente elemento estará al principio de la cola. 
 
  Podemos obtener la cabeza de la cola accediendo al primer elemento de la cola. 
   

  Ej, si tenemos una cola de pagos, procesamos el que tenemos a la cabeza de la cola que sería el siguiente. 
  
  Como siguiente es el primer elemento va a estar en la cabeza de la cola. 

  Entonces, para consultar un elemento lo que tenemos que hacer es ver que tenemos como cabeza de la cola/lista. 

  
 3. Eliminar  
  
  Echar el siguiente elemento de la cola una vez que ha sido eliminado. 

  Como los elementos avanzan hacia adelante, hay que quitar la cabeza. 

  Podemos hacerlo aprovechando la función eliminarPrincipio. 

  
  Una vez procesada la cola/lista/fila, sus elementos; los echamos de la cola y como es la cabeza, la quitamos porque es lo que esta al principio. 

  Como es parecido a una lista, simplemente eliminamos el principio de la lista. 
  

 Optimizaciones:   

  Como las colas las podemos implementar como una lista. 

  ESTRUCTURA cola
   cabeza : PUNTERO A nodo
  FIN ESTRUCTURA

  Creamos una estructura cola que tenga una cabeza como puntero. 
  
  Para poder saber cual es la cabeza, si tenemos que agregar elementos, lo recorremos hasta llegar al final. 

  
  Optimización 2: 

   ESTRUCTURA cola
    cabeza : PUNTERO A nodo
    final : PUNTERO a nodo
   FIN ESTRUCTURA

   Agregamos un puntero al último elemento de la cola. 

   Si tenemos que incorporar un nuevo elemento, como encolar algo. 

   Tenemos que obtener el elemento final y agregarlo a continuación, como es al final, simplemente meterlo al final. 

   Así no tenemos que estar recorriendo la lista/cola todo el tiempo. 

   Como guardamos el puntero lo único que tenemos que hacer es actualizarlo. 

   Es una lista doblemente enlazada. 

   Al agregar un puntero a la cabeza y otro al final de la cola.

   Podemos ver que elemento hay al principio para procesarlo y eliminarlo, lo tenemos a cabeza. 

   Para insertar elementos, vemos que hay al final. 


 Discrepancias: 
  
  Resumen: 
   
   Encolar: insertar al final. 
    
   Consultar: obtener la cabeza. 

   Eliminar: eliminar cabeza. 

  
  Despachar: operación dual 
  
   En el proceso, hace dos cosas: 

   Extraer el primer elemento de la cola, eliminarlo y devolverlo para que se procese. 

   FUNCION Despachar (Cola cola): Nodo
    VARIABLE n: Nodo
    n = ObtenerPrimero(cola)
    EliminarPrimero(cola)
    DEVOLVER Nodo
   Fin FUNCION

   La función primero obtendra la cabeza, despues lo elimina y al final devolver el nodo que habia antes como cabeza de la cola. 
  
   También se puede hacer por separado. 

   También hay más tipos de colas como las colas prioritarias. 



|| Pilas

 Es una estructura de tipo LIFO

 Last In. First Out

 El último elemento que entra en un pila es el primer elemento que sale

 
 Ej, si somos un camarero de restaurante y nuestro labor es limpiar las vajillas para apilarlos y usarlos. 

 Cuando lavamos el primero, queda debajo de la pila; así los demás. 

 Ahora cuando tenemos que usar un plato de la pila, vamos a elegir el primero de la pila. 

 Entonces, el último plato lavado es el primero en ser usado (Last In. First Out.)


 En una pila como estructura de datos, colocamos los elementos de modo que cuando pedimos un elemento nuevo, nos va a dar el último que colocamos. 

 
 Una pila también se puede implementar como una lista enlazada. 

 Al igual que con colas, las operaciones serán distintas. 

 
 Operaciones: 

  Apilar/Push: 
  
   Introducir algo en la pila. 
   
   Los elementos ses introducen en la pila por un extremo. 
  
   Podemos reutilizar la función insertarPrincipio. 


   Al introducir elementos por un extremo (cualquiera) siempre debe ser el mismo. 

   Dado que las listas funcionan cabeza-cola, por comodidad, se insertan al principio.  


   (24)-->(79)-->(41)-->(25)--> vacio   

   Empezamos por la pila vacia, despues apilamos (25) que se insertará por la cabeza. 
   
   Si apilamos (41) será la nueva cabeza o cima, así sucesivamente. 


  Cima/Peek
  
   Obtener el elemento en la cima de la pila. 

   Sería el último elemento que hemos introducido. 

   O sería el elemento que quitaríamos a continuación al ejecutar un pop. 
  
   Es la función obtenerPrimero en nuestra lista. 
 
  
   La función es basicamente tomar la cabeza de la lista. 
  
   (25)--> vacío

   Ej, con una pila que tiene a un elemento como (25), al obtener nuestra cima tendría que devolver 25.  

   (41)-->(25)--> vacío

   Tendría que devolver 41 como cima o peek. 

  
  Desapilar/Pop: 

   Elimina el último elemento introducido en la pila. 

   Si introducimos los elementos por un extremo, tendremos que eliminarlos por ese mismo extremo. 

   Esto es como eliminarPrimero. 

   
   (24)-->(79)-->(41)-->(25)--> vacío

   Ej, en está pila; si queremos desapilar; tenemos que quitar el elemento (24)
  
   
  Otras operaciones: 
  
   ¿Está vacía?: Comprobar si una pila tiene elementos

   Tamaño: obtener el número de elementos de la pila. 

 
  Otras formas: 

   Existen otras formas de implementar una pila como pueder ser con un array. 

   No tiene que ser siempre mediante una parte de una lista. 

   
   Podríamos implementar nuestra pila como un array. 
   
   Tenemos un array de tamño N para guardar hasta N elementos en la pila
   
   Un puntero de pila (stack pointer) apunta a la posición en la que introduciríamos el siguiente elemento. 

  
   0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |    
   * |   |   |   |   |   |   |   |   |   |
    
   Ej: está pila/stack tiene un tamaño de 10, o sea, guarda hasta 10 elementos
   
   El puntero va a empezar en la posición libre, cuando queremos introducir un elemento nuevo, lo introducimos en la posición indicada por el puntero. 
   
   15 | 31 | * |  |

   Introducimos el 15 (posición 0) y movemos el puntero (a la posición 1) para introducir un nuevo elemento.  
   
   Si queremos eliminar un elemento debemos decrementar el puntero para que apunte al ultimo elemento insertado dado que siempre está apuntado a una dirección vacía.  
   
   15 | 31 | 56 | 17 | 39 | 26 | 14 | 26 | 15 | * |
    
   Caso especial, cuando el array esta lleno; podemos tener un caso de desbordamento de pila en un array. 

   15 | 31 | 56 | 17 | 39 | 26 | 14 | 26 | 15 | 10 | *

   Dado que un array no es una lista que tiene infinita memoria, puede desbordarse. 
 
   Insertamos 10 y aumentamos el puntero; cuando lo hacemos, el puntero se salió de la estructura. 

   Nuestro puntero ya no está apuntando a nuestro array, se considera un Stack Overflow. 

   Si el puntero está apuntando a algo que no es nuestra estructura, debemos considerarlo como un error. 


  Resumen:   

   Apilar: insertar un elemento

   Desapilar: obtener el último elemento apilado. 

   Cima: obtener el último elemento metido. 



|| Árboles
 
 Son estructuras no lineales
  
 Una estructura de datos lineal se basa en un nodo apuntando a otro. 

 En un árbol los nodos pueden apuntar a un número indefinido de elementos. 

  
 Los árboles introducen cambios nuevos, distintos a las anteriores estructuras. 
 
 Primero es que no son líneales como las anteriores que teniamos nodos/objetos aputando a otro con un puntero. 

 Los nodos apuntaban a uno solamente, en las listas, colas y pilas siempre tenemos un siguiente, siguiente, etc. 

 Como todos los nodos apuntaban a uno, podemos recorrerlo de forma lineal. 


 En los árboles que tambien tienen nodos (objetos) pueden apuntar a un numero indefinido de nodos/obj/elementos. 

 Aunque no es tan indefinido, puede tener limite, pero si pueden apuntar a uno, a dos o a tres elementos o nodos. 

 
 Ej: empezamos con un tipo de dato número entero 32; también pueden almacenar cualquier tipo de objeto
 
 32 
 
 Los árboles se usan normalmente para almacenar o representar información ordenada.

 Podemos desde introducir valores en un db a organizar archivos en disco o cualquier otra cosa. 

 Introducimos nuestro dato/objeto en un nodo: (32).

 Para que el árbol organize los distintos nodos. 

 Dentro del árbol, los nodos se van a agrupar unos apuntando a otros. 
  
   (32)
   /  \
 (24) (36)

 Nuestro nodo 32 puede apuntar a otros como 24 y 36 y a su vez puede ser apuntado por otros. 
         
     (43)
     /
   (32)
   /  \
 (24) (36)

 En concreto solo puede ser apuntado por un solo nodo, llamado padre. 

 Y va a apuntar a otros ndos llamados hijos. 

 
 Nodo padre: nodo que apunta a nuestro nodo
 
 Nodo hijo: nodos a los que apunta nuestro nodo. 


 Nodo raíz: 
 
  Es el único nodo que no tiene padre. 

  El nodo raíz puede tener (o no) hijos. 

  Todos los demás nodos del árbol tendrán que tener un nodo padre. 

 
 Nodo hoja: 
  
  Nodo que no tiene hijos. 

  Ya no se puede descender más que por la jerarquía del árbol.    
 
  
 Ej: árbol de elementos númericos

       (16)
      /    \
   (8)     (24)
   /  \    /
 (3) (13) (19)
   \         \
   (7)       (21)

 16, es el nodo raíz que apunta a los nodos 8 y 24 que son sus hijos. 

 A su vez 8 y 24 tiene hijos. 

 Están los nodos hojas como 13, 7 y 21. 


 Un árbol para considerarse uno: 
   
  1. No puede tener ciclos, apuntarse a si mismo. 
  
  2. El nodo raíz no puede ser apuntado por otro nodo. 

  3. Los nodos solo pueden tener un padre. 

 
 Estructuras que no son árboles: 
          
           (C)      
          /   \
  (A)--(B)    (E)
          \   /  \
           (D)   (F)
 
  B, C, D y E forman un ciclo


  ((A)←)
 
  A se apunta a si mismo, su puntero apunta al mismo nodo del que sale. 
 
    (1)      
    /  \
  (2)  (3)
    \  /  
     (4)   
 
  1, 2, 3 y 4 también. 


 Un árbol tiene que ser un grafo sin ciclo.  


 Definir Árbol: 
  
  Necesitamos un nodo que apunte a otros nodos. 

   STRUCT Nodo {
    Valor: INT
    Hijos: LIST OF Nodo
   }
 
   Almacenamos dentro de nuestro nodo el valor y como puede haber varios hijos almacenamos una lista de los distintos nodos a los que apunta. 
   
   
 Otra forma de definir árboles: 

  Los hijos del nodo raíz tambien forman árboles, son subárboles. 

       (16)
        
   (8)     (24)
   /  \    /
 (3) (13) (19)
   \         \
   (7)       (21)
    
  Entonces, podemos representar un árbol como valor y como una lista de hijos que a su vez son subárboles apuntados por uno (raíz). 

  Podemos definirlo de forma recursiva
  
   Struct Arbol {
    Valor: INT
    Hijos: LIST OF Arbol
   }

  Expresamos un árbol como un lista de subárboles 


 Propiedades de un Árbol: 
  
  Nivel: 

   A qué distancia está un nodo del nodo raíz medida en nodos. 

   Cuántas aristas debe atravesar para llegar al nodo raíz?


       (16)
      /    \
   (8)     (24)
   /  \    /
 (3) (13) (19)
   \         \
   (7)       (21)

   Son los saltos que tiene que dar de un nodo al siguiente avanzando por las ramas y los punteros hasta llegar al nodo raíz. 
   
   (16) tiene un nivel 0, dado que ya es la raíz. 

   A partir de la raíz o nivel 0, tenemos que hacer que cada nivel o nodo que es apuntado por otro nodo, tiene que ir aumentado su nivel.   
 
   Los nodos (8) y (24) tienen nivel 1. 

   Si queremos llegar del nodo (3) al (16) tenemos que dar 2 saltos. 

   Los nodos (7) y (21) tiene nivel 3. 

   
  Esto también son rutas: 
   
   La ruta de un árbol es el recorrido que se puede hacer para avanzar de un nodo a otro. 
 
   En el ejemplo, una ruta podría hacer (16), (24), (19) y (21). 

    
  Altura/Profundidad: 
  
   Es el máximo nivel que nos vamos a encontrar en un árbol. 
   
   En el ejemplo el máximo nivel que tiene el árbol es 3. 

       (16)--------- 0
      /    \
   (8)     (24)----- 1
   /  \    /
 (3) (13) (19)------ 2
   \         \
   (7)       (21)--- 3
  
   Dado que tenemos nodo cuyo valor es 3, es el más profundo porque después no hay nada más. 

 
  Orden: 
   
   Indica cuantos nodos puede tener un nodo como hijos. 

   Lo ideal sería tener un limite de hijos por nodo. 

   Los árboles crecen en vertical (Profundidad), frente a los árboles que crecen horizontal (tiene más hijos). 

   
   Nos intereza que los árboles crezcan en vertical no en horizontal. 
 
   No es conveniente que los nodos tengan indefinidamente hijos. 

   Debe tener un numero controlado de hijos crecer en vertical. 
   
   Así las estructuras son más comodas y mantenibles. 
   
   
   El concepto de orden gira en torno a cuántos hijos puede tener un árbol o puede haber en un nodo de un árbol como mucho. 
   
   Orden 2: un nodo puede tener 0, 1 o 2 hijos. 

   Orden 3: un nodo puede tener 0, 1, 2 o 3 hijos. 

   Orden 4: un nodo puede tener 0, 1, 2, 3 o 4 hijos. 

  
   Ej, un árbol de orden 2 indica que cada nodo puede tener hasta 2 hijos
 
   Así sucesivamente. Inicialmente no sabemos cuantos, pero puede ser entre 0 (considerendo los nodos hojas) hasta el número máximo que indica que no se puede tener más. 


  Tipos de árboles: 

   Árbol binario: árbol de orden 2. 
    
    Indica que cualquier nodo puede tener o 0, o 1 o 2 hijos.  
    
   Árbol ternario: árbol de orden 3. 

   así sucesivamente. 

  
  Árbol completo: 

   Todos los nodos tiene: 
   
    O 0 hijos. 

    O el número máximo de hijos. 

   Ej, en un árbol binario completo todos los nodos tiene 2 hijos o son hojas. 
 
   Es uno u otra posibilidad, para que sea árbol completo. 
 
   No hay ningún nodo que tengo solo un elemento. 
  
        
  Operaciones de acceso: 

   Insertar elemetnos. 
   
   Eliminar elementos. 

   Localizar elementos. 

   Recorrer un árbol.   

   
   Uno de los principales usos de un árbol binario es organizar jerarquías dónde tendremos que localizar elementos. 
   
   Las operaciones de busqueda en árboles binario, si la ejecutamos bien, pueden ser muy eficientes. 
  
   Se usan para las bases de datos y en muchas ocaciones que se necesite localizar elementos rapidamente.   
    


|| Árboles Binarios: 

 Son árboles de orden 2. 
 
 Cada nodo puede tener como mucho dos hijos. 

       (16)--------- 0
      /    \
   (8)     (24)----- 1
   /  \    /
 (3) (13) (19)------ 2
   \         \
   (7)       (21)--- 3


 El ejemplo que seguimos es un árbol binario, orden 2: o tiene 0, 1 o 2 nodos como hijo. 
  
 Los árboles binarios son uno de los más utilizados, tanto que hay varios tipos de árboles binarios. 

 
 Tipos de arboles binarios: 
  
  Full Complete: 
   
   Full Binary Tree: 
   
    Todos los nodos del árbol binario tienen,  o 
     
     ningún hijo (hojas); o 

     sus dos hijos. 

        (2)
        /  \
      (0)  (2)
           /  \  
         (0)  (2)
              /  \
            (0)  (0)
     
     
   Complete Binary Tree
    
    El último nivel de un full binary tree puede permitirse el prescindir de algunos de sus hijos. (el padre del nodo hoja sólo tiene un hijo).

    A condición de que el nodo hoja sea el hijo de la izquierda. 
    
        (2)
        /  \
      (0)  (2)
           /  \  
         (0)  (1)
              / 
            (0)  


   Conjunto de Binary Trees: 

   (neiter full nor complete)
     (full binary tree 
      (full and complete) 
     complete binary tree)
         

  Árboles degenerados: 

   Cada nodo sólo tiene un hijo. 

   Se comportan como listas.  

          (2)
            \
            (4)
              \  
              (6)
                \
                (8)

   Perdemos toda la eficiencia de los arboles binarios para buscar elementos. 

   
  Árboles balanceados: 

   Un árbol binario balanceado intenta mantener la profundidad de sus dos subárboles a la menor posible
    
   El balanceo o equilibrio de un árbol hace que algunas operaciones sean más eficientes. 

   Algunos árboles especiales se aprovechan del balanceo. Dependiendo de qué tipo de balanceo intentemos usar se usa una regla u otra distinta. 


   Permite operaciones de busqueda muy eficientes. 

   Por ejemplo para recorrer: 

       (16)
      /    \
   (8)     (24)
   /  \    /
 (3) (13) (19)
   \         \
   (7)       (21)

   Desde el nodo 16, pasamos al 8 y después al 24 
    
   Comenzamos desde la raíz y pasamos por los siguientes niveles. 
 
   En el tercer nivel, recorremos el 3, 13, 19; así sucesivamente

   La recorrida de un árbol se hace con colas, dado que tenemos que mantener una referencia de los nodos que tenemos que procesar. 
  
   En la IA como tiene árboles infinitos se hace procesa los elementos con colas. 


  Recorrido en profundida: 
   
   Es mejor considerar los nodos izquierdo y derecho como subárboles. 

   Se procesan: 
    
    La raíz
    
    El subárbol izquierdo. 

    El subárbol derecho. 
 
   Dependiendo de cuánto se procese la raíz. Tenemos varias configuraciones. 

   Ej: 

           (32)    
          /    \
  (subárbol    (subárbol
  izquierdo)   derecho)

  
   Preorden: 
   
    Procesamos la raíz. 

    Procesamos el árbol izquierdo. 

    Procesamos el árbol derecho. 


   Inorden: 
   
    Procesamos el árbol izquierdo
    
    Procesamos la raíz. 

    Procesamos el árbol derecho. 
  
  
   Postorden: 

    Procesamos el árbol izquierdo

    Procesamos el árbol derecho. 
    
    Procesamos la raíz. 


  Terminar de recorrer el árbol en profundidad: 
 
   Consideramos dejar de recorrer el árbol cuando hayamos llegado a las hojas. 

   Dado que las hojas tienen valores nulos a la izquierda y derecha, la forma más sencilla de hacer un algoritmo de recorrido en profundidad.
  
   Es hacer que evitar que se recorra o procese el nodo de un árbol cuando valga nulo. 


  Algoritmo recorrido: 

   Preorden: 

    void preorden(arbol* a) {
     if (a.raiz != nul) {
      procesar(a.raiz);
      preorden(a.izquierdo);
      preorden(a.derecho);
     }
    }
   
    Siempre que la raiz no sea nulo podemos procesar. 


   Inorden: 

    void inorden(arbol* a) {
     if (a.raiz != nul) {
      inorden(a.izquierdo);
      preorden(a.raiz);
      inorden(a.derecho);
     }
    }
   

   Preorden: 

    void postorden(arbol* a) {
     if (a.raiz != nul) {
      postorden(a.izquierdo);
      postorden(a.derecho);
      procesar(a.raiz);
     }
    }


  Operaciones elementales: 
   
   Inserción. 
   
   Eliminación. 

   Localización. 



|| Árboles binarios de búsqueda

 Es un árbol binario muy extendido

 Se define como: 

 Un árbol binario de búsqueda con raíz R es de búsqueda cuando no es vacío y: 
  
  Si tiene un subárbol izquierdo, la raíz del suárbol izquierdo es menor a R, y la vez el subárbol izquierdo también es de búsqueda. 
 
  Si tiene un subárbol derecho, la raíz del subárbol derecho es mayor a R y a la vez el subárbol derecho también es de búsqueda. 


       (16)
      /    \
   (8)     (24)
   /  \    /
 (3) (13) (19)
   \         \
   (7)       (21)

 En este árbol de busqueda binario (16) > (8) y < (24)

 A la vez (3) < (8) y (13) > (8), siguen el mismo patrón, desde la raíz: menor a la izq y mayor a la derecha

 
 Elementos comparables

  Un árbol de búsqueda puede almacenar elementos que cumplan una relación de orden. Debe haber una forma de ordenar los elementos. 

  Ejemplo: 

   Almacenar enteros de menor a mayor: 5<12
   
   Almacenar cadenas de caracteres por orden lexicográfico: 'Alicia' < 'Benito'

   Almacenar objetos siempre que se identifiquen por alguna clave que sí sea ordenable: libros usando como clave el ISBN; personas usando como clave el código de empleado. 


  Para poder usar los elementos que insertemos tienen que ser comparables 

  Tienen que cumplir una relación de orden. 

  Con que la clave sea ordenable ya podemos almacenar en el árbol el objeto completo. 

  Podemos usar la clave para identificar al objeto, es lo que se hace en db. 

 
 Estructura: 

  Doble estructura: 

  Estructura Nodo {
   valor: K
   izquierda, derecha: Nodo
  }  
  Estructura Arbol { 
   raiz: Nodo
   ...
  }

  Un nodo y una estructura arbol


  Estructura recursiva: 

  ESTRUCTURA Nodo {
   valor: K
   izquierdo, derecho: Nodo
  }

  TIPO Nodo Arbol

  Usamos siempre nodos, árboles, subárboles.
  
  El árbol es una forma de llamar al nodo, un nodo a la vez va a ser árbol en función a lo que sea izquierdo y derecho va a tener subárboles o no. 

  Siempre con la particularidad de que un árbol vacío va a ser NULL 
 

 Operaciones: 

  Búsqueda: 
   
   Localizar elementos a partir de su clave. 

   Usos: 

    Operación ¿existe?: comprobar si una clave está presente en un árbol o no. 

    Operación obtener: obtener el objeto cuyo identificador sea el que pedimos. 

   Luego la podemos utilizar para insertar elementos.   


   Ej: Buscar el elemento que tenga la clave X. 

   
             (32)      
            /    \
   (subárbol     (subárbol
    izquierdo)    derecho)
      
 

   1. Primero tenemos que ver si la raíz es lo que estamos buscando: 
    X==R?
     
    Si X == R ya los hemos encontrado y el la propia raíz. 

   2. En caso de que no sea la raíz, tenemos que determinar si X es menor a la raíz para buscar el elemento al subárbol izquierdo. 
    X<R
     
   3. Si X>R? Tenemos que buscar en el subárbol derecho. 

 
   Pseudocódigo: 

    Localizar(a: Arbol, elem: K) {
     IF (a == NULL) return NULL
     IF (elem == a.valor) return a.valor
     IF (elem < a.valor)
      return Localizar (a.izquierdo, elem)
     IF (elem > a.valor)
      return Localizar(a.derecho, elem)
    }

    Localizar en un árbol un elementos

    Si el árbol es NULL, devolver NULL porque no hay elemento. 

    Si el árbol tiene como raíz lo que estoy buscando, devolver la raíz. 

    Si no, si el elemento buscado es menor que la raíz devolver; entonces, de forma recursiva buscamos en el subárbol izquierdo.  
    
    Y si el elemento buscado es menor que la raíz devolver, de forma recursiva buscamos en el subárbol derecho. 


  Operación Existe: 

   Podemos cambiar el código anterior: 

    Localizar(a: Arbol, elem: K) {
     IF (a == NULL) return FALSE
     IF (elem == a.valor) return TRUE
     IF (elem < a.valor)
      return Localizar (a.izquierdo, elem)
     IF (elem > a.valor)
      return Localizar(a.derecho, elem)
    }

   Si en algún momento tenemos un árbol vacío devolvemos falso. 
   
   Pero si el elemento que encontramos en la raíz es lo que estamos buscando, devolvemos TRUE.  

   La recursividad no se cambia porque es la forma más comoda de trabajar con árboles.    

 
  Insertar: 
 
   Es algo que se hace a partir de la busqueda (operación localizar) dado que el algoritmo es parecido. 

   Cuando insertamos es necesario insertar el elemento de forma ordenada para no romper el orden. 

   Además, hay que distinguir entre si el árbol permite duplicados o no. 

   Depende si es necesario o nos interesa guardar valores de algún tipo, duplicados. 

   
   Un valor tipo número puede estar duplicado pero si guardamos empleados, no debería permitirse. 

   
   Reglas: 

    1. Si el árbol es un árbol vacio: insertamos en la raíz

    2. Si la raíz de un árbol es igual al elemento a insertar: 
      si no toleramos duplicados, no insertamos o emitimos un error. 

    3. Si la raíz de un árbol es mayor al elemento a insertar: insertamos en el subárbol izquierdo. 
    
    4. Si la raíz del árbol es menor al elemento a insertar: insertamos en el subárbol derecho. 

   
   Pseudocódigo: 

    Insertamos en un arbol un elemento

    Ej: Insertar(arbol, elem)

    Enseñamos el elemento: (8)

    Enseñamos el arbol: NULL

    Como está vacío, insertamos (8) en la raíz   

    Modificar la variable arbol: dado que valía NULL y ahora vale 8. 

    Podemos solucionarlo de dos formas: 

     1. Trabajar con punteros: 
       
       void insertar(Arbol** a, k valor); 
      
      Le padamos un puntero a un árbol, no un árbol. 

       Arbol* a = NULL;
       insertar(&a, 10);
       // a = [objeto de tipo arbol]   

      Nos permite que, cuando llamemos a insertar y le pasemos un árbol vacío; 
      
      Lo que devolvera la llamada insertar será un objeto. 

      Como estamos pasando un puntero podemos cambiar lo que vale la variable a. 

      De valer NULL podemos hacer que valga otro valor. 
   
       void insertar(Arbol** a, k valor); 
       
       Arbol* a = NULL;
       insertar(&a, 10);
       // a = [objeto de tipo arbol]   


     2. Si tenemos memoria o estamos utilizando un lenguaje funcional, usar variables inmutables. 
         
       Hacemos la función insertar pero en vez de modificar el arbol que le pasamos en llamada, devuelve otro distinto. 

       Cuando le pasamos el árbol a insertar como arbol a, devuelve arbol b que no coinciden

        Arbol* insertar(Arbol* a, k valor); 

        Arbol* a = NULL;
        Arbol* b = insertar(&a, 10);
        // a != b


   Insertar: 
   
    Insertar(a : Arbol*, elem: K) {
     Si *a == NULL {
      *a = CrearNodo(elem); 
     } Si NO, SI elem < (*a).valor {
      Insertar(&((*a).izquierdo)), elem)
     } SI NO, SI elem > (*a).valor {
      Insertar(&((*a).derecho)), elem)
     }

    Pasamos un puntero, no un arbol para poder modificarlo

    Si pedimos insertar algo en un arbol vacio, devolverá que ese elemento sea el nodo/la raíz. 
   
    En cado de que no, tenemos que ver en caso de que el elemento sea menor a la raíz, tendremos que recursivamente intentar insertarlo en su árbol izquierdo.   
   
    En caso de que sea mayor, insertarlo por la derecha. 


    Ejemplo: tenemos un árbol vacío e intentan insertar el elemento 8
      
     NULL    <--(8)

      (8)    //se inserta, puntero a árbol para poder modificarlo y ahora el puntero vale nodo 8. 

      (8)    <--(10)   //miramos la raíz del árbol, no está vacía, como es mayor, lo metemos en la derecha 
         \
         (10)
       
 
     Ahora tenemos que insertar un nodo (4), comparamos con la raíz (8) y como es menor va a ir a la izquierda. 

     (8)
     /  \
   (4)  (10)


    Ahora para insertar un (6), chequeamos en la raíz, no está vacia, es 8. 
   
      (8)     <--(6) //chequea y compara con 8
     /  \            //después con 4
   (4)  (10)         //dado que ningún lugar/raíz está vacía. 
     \
     (6)
    
    Como es menor que 8 (raíz), pasa al subárbol de la izquierda.

    en el subárbol de la izquierda, no hay raíz vacía, debemos comparar. 

    Como (4) < (6) lo metemos a la derecha. 

  
  Precausiones: 

    Cuidado con cómo conectamos los punteros. 

    Esto para lenguajes tipo c, con punteros. 

    Para lenguajes orientados a objetos, usamos clases, que valga NULL y luega hacer operaciones. 


    Siempre es necesario comprobar que los punteros funcionen y que no van a dar problemas. 

    
    Insersión: 

     No es la única forma de escribir esta función

     Lo importante es el concepto. 

     Puede haber diferencias según la bibliográfia. 



|| Otras Operaciones en Árboles Binarios de Búsqueda

 Operaciones: 

  Eliminar: 
   
   Eliminina el nodo con la clave X. 
 
   Buscamos el nodo. 

   Depende: 
    
    1. Si el nodo a eliminar es hoja. 

    2. O Si tiene 1 hijo. 

    3. O si tiene 2 hijos. 


   Para eliminar un elemento lo primero que tenemos que hacer buscar el nodo. 

   Luego depende de si el elemento es hoja o tiene un hijo o dos hijos, la operación cambia de forma. 

   
   Eliminar un nodo hoja: 

    Eliminamos el nodo y hacemos que el puntero a este nodo hoja que tenía su padre apunte a NULL. 

    
       (8)
      /   \
    (4)   (12)
      \     \ 
      (7)   (16)
  
   Ej: Para eliminar el nod 16, como es un hoja lo que tendríamos que hacer es simplemente destruir a ese nodo. 
   
   Entonces, destruimos el nodo 16 y eliminamos la referencia que tenía su padre (12), ahora 12 sería un nuevo nodo hoja.  
    
       (8)
      /   \
    (4)   (12)
      \    
      (7)   

   
   Eliminar un nodo con un 1 hijo: 
   
    No podemos perder la información del hijo. 

    Reemplazamos la raíz por la raíz del nodo hijo. 

     1. Hacemos que el padre del nodo a eliminar apunte al hijo del nodo a eliminar. 

     2. Sustituimos el valor del nodo raíz por el valor del nodo hijo y sustituimos el derecho de la raíz por el derecho del nodo hijo.  


    Si el nodo que vamos a eliminar tiene un hijo, no podemos perder la info de ese hijo, queremos eliminar un nodo no toda una rama. 

    Entonces, reemplazamos la raíz por la raíz del nodo hijo. 

    Esto es recursivo, tendremos que reemplazar la raíz vieja por la raíz del hijo. 

       (8)
      /   \
   (4)    (12)
   /  \     \
 (2) (7)    (16)
              \
              (21)

    Si queremos eliminar el nodo (12), en primer lugar lo tendremos que apartar para poder mantener las referencias a sus hijos. 

    Hacer que el hijo que tiene sea la nueva raíz. 

       (8)
      /   \         \
   (4)    (16)      (12)
   /  \     \
 (2) (7)    (21)
              
    Que 8 pase de apuntar a 12, al hijo de 12. 

    Después podemos eliminar a 12. 

    Entonces, si queremos eliminar un nodo con un hijo; hacemos que su posición la tome el hijo. 

    
    En código lo podemos hacer con estos pasos o bien, hacer una actualización y hacer que el valor del nodo a eliminar sea el valor del nodo hijo.  

    Y el árbol derecho del nodo hijo, sea el árbol derecho del padre. 


   Eliminar un nodo con 2 hijos: 

    No podemos perder la información de los hijos. 

    Pero a la vez debemos reestructurar el árbol. 

    Hay que promover alguno de los nodos como nueva raíz. 


       (36)
      /    \        
   (16)    (51)      
   /       /  \
 (8)     (41) (84)
                  
    Si queremos eliminar el nodo 36 (raíz), este nodo tiene dos hijos. 

    Tenemos que determinar que ponemos en la raíz, en el subárbol izq y derecho. 

    
    Reglas: 

     1. Buscamos el nodo más a la derecha en el subárbol izquierdo. 

     2. O bien buscamos el nodo más a la izquierda en el subárbol derecho. 

    
    Lo que quiere decir es que Busquemos: 

     1. Nodo más a la derecha del subárbol izquierdo = Nodo con el valor máximo dentro del subárbol izquierdo. 

     2. Nodo más a la izquierda del subárbol derecho = Nodo con el valor mínimo dentro del subárbol derecho. 


     El nodo más grande que haya en el subárbol izquierdo o el nodo más grande que haya en el subárbol derecho. 


     Suponiendo que tenemos un subárbol izquierdo como este: 
    
         /
       (16)
      /   \         
   (8)    (26)      
   /      /  \
 (4)    (21) (36)
              
    
    Nos tenemos que qudar con el máximo que es el 36

    A la vez, vemos que es el que está más a la derecha. 


    Encontrar el máximo: 

     Tenemos la raíz de nuestro subárbol izquierdo 16. 
 
     Puede ocurrir que este sea el máximo. 
     
     A su vez tiene su aŕbol derecho 26, entonces, el 16 ya no es máximo. 

     Entonces, tenemos que buscar el máximo recursivamente hasta que llegue al 36. 

     Llegar a uno que no tenga subárbol derecho. 

     Recorremos la rama derecha hasta llegar a una hoja. 

   
    Con el subárbol derecho tenemos que ir recorriendo la rama izquierda hasta llegar a un nodo hoja. 

    
    Una vez localizado el máximo: 

     Quiero eliminar la raíz R del árbol T. 

     He buscado el más a la izquierda de T.derecho y me sale M

       1. Sustituyo. pongo M en la raíz de T. 

       2. Elimino recursivamente M en el subárbol.   
          

       (36)
      /   \       
   (16)    (51)      
   /       /  \
 (8)    (41)  (84)
              
     Ejemplo: eliminar 36 (ráiz). 

     Suponemos que queremos usar el minimo más a la izquierda del subárbol derecho 41. 

     Ponemos este 41 en la raíz, vamos al subárbol derecho; eliminamos el 41. 

     Que estaba duplicado, como el 41 es una hoja, el lo más facil. 
 
       (41)                    
           \            
          (51)      
           /  \
        (41)  (84)

      
     Si lo queremos hacer con el subárbol izquierdo
 
     Nos quedamos con el subárbol izquierdo. 

     Buscamos el máximo o el más a la derecha. 
      
        /         
     (16)          
      /      
    (8)    

     Que es el 16, lo ponemos como nueva raíz. 

     Eliminamos 16, y como tiene un hijo, lo apartamos, lo ponemos como nueva raíz y lo eliminamos. 

       (16)
      /   \       
   (16)    (51)      
   /       /  \
 (8)    (41)  (84)
 

   /      (16)
(16)      /   \       
        (8)   (51)      
              /  \
            (41) (84)


     Resumen: 

      1. Si el nodo a eliminar es hoja, destruyo el nodo y la referencia que puede tener su padre. 

      2. Si el nodo a eliminar tiene un hijo, promuevo el hijo a la posición que queiro eliminar. 

      3. Si el nodo a eliminar tiene dos hijos, lo apartamos, movemos los hijos a su posición y lo eliminamos. 
      








|| BST




|| Árbol desde Preorden e Inorden



|| Árbol desde Inorden a Postorde 
 
 


|| Árbol k-arios 



|| Árboles B





|| Algoritmos de Ordenación de matrices (Array Sorting): 

 Sirven para reorganizar el orden de los elementos de una estructura, como un vector. 

 Ej: 4 2 6 1 3 6 -> 1 2 3 4 5 6, de desordenado a ordenado o podemos hacerlo de menor a mayor o mayor a menor

 
 Es mucho más eficiente trabajar con datos cuando la información está ordenada. 

 Cómo encontrar elementos que hay dentro de un array de 10.000.000 de objetos tardando poco tiempo. 

  
 Los algoritmos de ordenación muestran de forma estructurada cómo ordenar los elementos que haya dentro de una estructura, como un array. 

 Seguramente sea mucho más fiable seguir un algoritmo que funciona a ordenar a nuestro modo. 
 
 
 Podemos ordenar cualquier estructura con elementos que sean ordenable. 

  Ordenar números, porque unos son mayores que otros. 

  Ordenar meses, porque unos vienen antes que otros. 

 
 Hay muchas cosas que se pueden ordenar: 

  Cómo ordenar expedientes
   
  Cómo ordenar libros  

  Cómo ordenar facturas

 Si tiene un número que le identifica (como un código de árticulo, un número de identificación), lo podemos ordenar usando ese valor. 

 Tiene que tener algo por lo que nos permita ordenar. 


 Algoritmos de Ordenación: 

  Ordenamiento por inserción. 
  
  Ordenamiento por selección. 

  Ordenamiento por mezcla (merge sort). 

  Etc. 

 
 Eficiencia en los algoritmos: 

  Algunos son más eficientes que otros. 

  La eficiencia trata en ser mejor para realizar una tarea, en el menor tiempo posible. 


 Propiedad Orden: 

  Indica el número de operaciones que hay que hacer para ordenar una estructura de N elementos. 

  Ej: Entrada y Salida de datos. 

   N = número de elemetos: 


   1. Orden N = se hacen N operaciones (lineal) 
     
    Curva proporcional, orden proporcional entre la entrada y salida. 
    
    Facil implementar, lento de ejecutar (muchas comparaciones)

    Un vector que tenga 10 elementos, habrá que hacer 10 operaciones.  


   2. Orden N² = se hacen N² operaciones (exponencial) 
    
    Curva crece o baja rapidamente 
    
    Intermedio, no funciona con muchos elementos.     

    Hay que hacer el cuadrado de cada elemento.     

    
   3. Orden ln N = se hacen ln N operaciones (logaritmica)
    
    Curva extremo neg a extremo pos

    Dificil de implementar, rapido de ejecutar. 
 
  
  Comparaciones: 

   Hay que elegir elegir algoritmos con orden pequeño, como Orden N (lineal). 

    Orden N = Orden lineal: si hay 10 veces más elementos, hay que hacer 10 veces más operaciones. 
  
     Le tomará 10 pasos en ordenar el vector de 10 
 
    Orden N² = Orden exponencial: si hay 10 veces más elementos, hay que hacer 100 veces más de operaciones. 

     Le tomará 100 pasos ordenar el vector de 10. 

    Cuántos más elementos haya más operaciones se tiene que hacer. 


     
|| Algoritmo de Ordenación por Selección (Selection Sort)

 Recorremos el array buscando el elemento mínimo. 

 Intercambiamos ese elemetnos con el que esté en la primera posición. 

 Buscamos el siguiente mínimo que no hayamos ordeando. 

 Lo cambiamos por el segundo. 

 Así hasta terminar. 


 Ej: vector desordenado 6 4 2 1 3 5

 Buscamos el minimo, empieza a recorrer y preguntar por el 6

 Como es el primero y no tenemos otro para comparar, queda como minimo. 

 Después pasa a preguntar por el 4, comparamos con el primer elemento y efectivamente es el minimo. 

 Ahora le toca el 2 compararse con el 4, después al 2 compararse con el 1. 

 El 1 se compara con el 3 y el 5, llegamos al minimo. 


 Cuando tengamos el minimo de todos, buscamos la primera posición para poner este elemento. 

 En la segunda recorrida, el minimo ya está ordenado; ahora recorre los demás. 

 Vector: 1 4 2 6 3 5. 


 Toma el 4 y se compara con el 2 que pasa a ser el minimo, dado que 6 3 y 5 son mayores. 

 Ahora toca darle lugar al nuevo minimo, será el primer elemento que esté al lado del primer minimo/elemento ordenado.  
 
 Vector: 1 2 4 6 3 5. 


 Así sucesivamente, el vector quedará 1 2 3 4 5 6

 Al llegar al último elemento (n elementos-1) asumimos que es el minimo/ordenado. 


 Proceso al recorrer el array: 

  1. Cuestionar elementos. 

  2. Encontrar el minimo de todos. 
   
  3. Ubicar el minimo intercambiando de posición, lugar. 

  4. Ordenar elementos. 
 

 Código para ordenar elementos por selección: 

  Necesitamos: 

   1. Posición en la que va a ir el elemento ordenado: 1, 2, 3, ..., N. 

   2. Elemento a partir del cual vamos a buscar el mínimo. 

   3. El mínimo en cada repetición. 


  FOR i = 1 TO n - 1
   min = i
   FOR j = i + 1 TO n
    IF v[j] < v[min] THEM min = j
   END FOR
   
  END FOR


  Recorremos cada elemento desde el primero hasta el penúltimo. 

  El primer elemento será el minimo automaticamente. 
  
  Como tenemos que buscar el minimo dentro de toda la estructura, recorremos el resto de elementos que nos quedan  

  Nos preguntamos si cada elemento que vamos viendo si es el nuevo minimo. 

  Comprobamos si el elemento que se encuentra en esa misma posición es menor que el que asumimos a la primera 

  Cuando no sea, decidimos el nuevo minimo.  
  
  Si lo repetimos dentro de una estructura repetitiva; obtenemos el min, la posición que tiene el elemento minimo. 

  Nos queda intercambiar elementos. 


  Intercambiar dos variables: var min con i. 

  No podemos hacerlo en un único paso. 

  Ej: A B, dos variables
  
  Creamos una variable temporal C que después eliminaremos. 

   A B |C

  Creamos una copia de A en C.

   A B |A

  Sobreescribimos A original por B

   B B |A

  Llamar el valor de la variable temporal 

   B A <- |A

  Eliminamos la variable temporal. 

   B A


  Ahora lo hacemos usando i y min: 

  FOR i = 1 TO n - 1
   min = i
   FOR j = i + 1 TO n
    IF v[j] < v[min] THEM min = j
   END FOR
   temp = v[i]
   v[i] = v[min]
   v[min] = temp
  END FOR


  Primero guardamos uno de los valores. 

  Después nos llevamos uno de los valores a la posición que guardamos antes. 

  Cambiamos los valores

  

|| Ordenación por inserción (Insertion Sort)

 Para ordenar los elementos de una matriz cada elemento i tiene que ser menor o igual al elementos i+1. 


 Recorremos cada elemento del array. 

 Cada elemento del array se ordena: si a su izquierda tiene un elemento mayor que él, entonces, los intercambiamos de sitio. 
 
 Lo seguimos moviendo a la izquierda hasta que tenga un elemento menor que él o hasta qeu llegue el límite izquierdo. 


 Ej: 6 4 2 1 3 5, el vector desordenado empieza en la posición * que tiene valor 6
     * 
     -     

 Con *indice/puntero marcamos la posición en la que estamos ordenando actualmente. 

 Los intercambios u operaciones se hacen tomando el primer elemento y recorriendo, comparando con los restantes. 

 A medida que vayamos moviendo el elemento a la izquierda cuando se está ordenando y lo marcamos  

 
 Empezamos ordenando por la primera posición que tiene valor 6 o al elemento 6. 

 
 Formula: el elemento se moverá si: 

  Está en la primera posición, o si el elemento de su izquierda ya es menor que él, entonces, este elemento está ordenado y pasamos al siguiente. 

 
 Como 6 es el primer elemento y no hay nada a su izquierda, está ordenado y pasamos al siguiente. 

 En la siguiente posición se mueve * y marcamos el siguiente 4. 

 6 4 2 1 3 5
   *
   -

 Comprobamos la formula: 4 no está en la primera posición y lo que tiene a su izquierda es mayor (6). 

 Intercambiamos el 4 con el 6. 

 4 6 2 1 3 5
 - *
 
 Volvemos a comprobar, el 4 está en la primera posición y no hay nada a su izquierda; está ordenado. 

 Pasamos al siguiente:  
 
       4 6 2 1 3 5
 ordenados * no ordenados
           -

 A medida que vamos recorriendo los elemento se puede comprobar que cada vez que pasamos el puntero * se cumple que los elementos a su izquierda está ordenados y los que está a la derecha están desordenados. 

 6 > 2, el dos está mal ordenado; lo intercambiamos y preguntamos si 4>2, el dos sigue estando desordenado lo intercambiamos o lo movemos. 

 El 2 que tomamos con *, está los más a la izquierda posible, no se puede mover; ordenado. 

 2 4 6 1 3 5
       *
       -

 6 > 1, el uno está desordenado asi que lo movemos o intercambiamos y chequeamos contra los de su izquierda. 

 4 > 1, o movemos y 2 > 1, lo movemos; ya no se puede mover, ordenado. 

 1 2 4 6 3 5; pasamos el 6 y el 4 que son mayores 
         * 
         -

 1 2 3 4 6 5; 6 > 5, movemos 5 y está ordenado. 
           * 
           -
 
 1 2 3 4 5 6  vector ordenado. 
            *


 Necesitamos conocer: 

  1. La flecha que recorre cada posición. Se convierte en un bucle de tipo FOR. 
        *
  
  2. El elemento que se mueve a la izquierda. Necesitamos recordar en una variable cuál es la posición del elemento que está siendo ordenado según se mueve. 
        -

  Método no eficiente: n^2

  FOR i = 1 TO n
   pos = i
   WHILE pos > 1 AND m[pos] < m[pos - 1]
    temp = m[pos - 1]  
    m[pos - 1] = m[pos]
    m[pos] = temp
    pos = pos - 1
   END WHILE
  END FOR


  La flecha que se movia a la derecha. Empieza en el primer elemento y termina en el último (n elementos). 
     *
  Guardamos en una variable temporal llamada pos = i, al elemento que estamos ordenando actualmente. 
                                                         *
  Mover el elemento a la izquierda siempre que sea posible, como esto es algo que hacemos varias veces mientras se cumpla una condición, tenemos un while con varias condiciones: podiamos mover el elemento hacia la izquierda si para empezar no estaba ya en la primera posición. Si pos vale 1 significa que es el primer elemento y como pos de 0 no existe porque empezamos en 1; no podemos moverlo más a la izquierda.      
  
  La otra condición para que se pudiera mover a la izquierda, era que el elemento que estuviese a su izqueirda fuese mayor que el elemento que estamos intentando mover: la posición sea menor que la posición que tiene a su izquierda. 

  Si ambas condiciones se cumplen, movemos el elemento (-pos a la izq). 

  Hacemos un cambio de variable como vimos en el algoritmo de selección. 

  Guardamos un elemento (m[pos - 1]), lo reemplazamos (m[pos - 1] = m[pos]) y cambiamos el otro. 

  Al final del WHILE reducimos en uno el valor del pos al intentar mover el elemento anterior. 

  En resumen: nos desplazamos con el for y luego nos movemos o reducimos dada las condiciones while; cuando pos estuviese en una posición como la primera (pos > 1) o que este ordenada (m[pos] < m[pos-1]), dejaría de moverse. 


  Ineficiencia: 
   
   Estamos haciendo muchos intercambios
  
    temp = m[pos - 1]  
    m[pos - 1] = m[pos]
    m[pos] = temp

   
  Método eficiente: 

   FOR i = 1 TO n 
    pos = i 
    valor = m[i]
    WHILE pos > 1 && valor < m[pos-1]
     m[pos] = m[pos-1]
     pos = pos - 1
    END WHILE
    m[pos] = valor
   END FOR
             
  
   Antes de empezar a movernos, guardamos cuál es el valor que es la posición que intentamos ordenar valor = m[i]
   
   En vez de intercambiar, comprobamos si el valor es menor que la posición del elemento marcado. 
 
   Desplazamos (m[pos] = m[pos-1]), el elemento de la izquierda hacia la derecha. 

   Una vez en la posición, escribimos el valor (m[pos] = valor) en su nueva posición. 

   El valor se va a escribir una vez y no ir moviendolo por todo el recorrido. 

  


|| Ordenación por Burbuja (Bubble Sort)

 Es muy ineficiente al lado de otros algoritmos de ordenación. 

 Se usa para aprender algoritmos de ordenación, pero no se debería aplicar para ordenar datos, incluso el algoritmo de inserción suele ser más eficiente. 


 Funcionamiento: 

  1. Recorremos el array y cada elemento del array, si nos encontramos dos elementos que no estén en orden (a[i]>a[i+1), por ej; los intercambiamos. 

  2. Repetimos el paso 1 N-1 veces, es lo que tardaría un elemento muy desordenado, de ser necesario, en recorrer toda la matriz de derecha a izquierda. 

  
 El objetivo de ordenar es terminar con el array que este ordenado en orden creciente, elemento i > i+1. 
 
 Los elementos que sean iguales, ej 7 y 7, cuentan como ordenados y da igual su posición; en todo caso lo que tenemos que hacer es buscar elementos que no sean menor o igual. 

 Si encontramos dos elementos, tal que, a[i] < a[i+1]; significa que están desordenados y debemos intercambiarlos. 

 Debemos repetir lo anterior N-1 veces, N como tamaño de array y -1 veces es lo que tardaria el elemento más desordenado. 

 N-1 veces es la causa de la ineficiencia del algoritmo, hace repeticiones de más que podría evitar. 


 Ej: 6 4 2 5 3 1, su tamaño es N=6 total elementos. 

 Repetimos N=6 en una serie de pasos 1 (a[i] < a[i+1); N=5 veces. 

 En el primer paso hacemos la comparación (a[i] < a[i+1). 

 6 4 2 5 3 1; 
 - -
 i  
 
 6 es el elemento i, comparamos 6<4 (comparamos los valores de las posiciones 0 < 0+1 en pos)

 Como es mayor o no es menor lo intercambiamos. 

 Comparamos:  4 6 2 5 3 1; como 6 es mayor lo intercambiamos. 
                - -
                i  

 Así sucesivamente: 4 2 6 5 3 1 -> 4 2 5 6 3 1 -> 4 2 5 3 6 1 -> 4 2 5 3 1 6

 Vemos que estamos haciendo muchas operaciones para solo ordenar 1 elemento. 

 El paso 2 recien va a ordenar el numero 4. 

 
 Incluso el algoritmo por inserción es más eficiente. 


 Código: 

  FOR i = 1 TO n-1
   FOR j = 1 To n-1
    IF m[j] > m[j+1]
     tmp = m[j]
     m[j] = m[j+1]
     m[j+1] = tmp
    END IF
   END FOR
  END FOR
    
  Lo repetimos n-1 veces
 
  Para cada paso, recorremos de izquierda a derecha, se forma una matriz, recorremos el elemento n-1 para la comparación con el siguiente tenemos que comparar el elemento n; si lo hiciesemos hasta n, la comparación sería n+1 que no existe dado que el tamaño es hasta N. 

  Para cada uno de los elementos teníamos que hacer la comparación, si el elemento j era mayor que el elemento j+1; que quiere decir desordenado. 

  Tenemos que intercambiarlos de posición, usando una variable temporal. 

  
  Si tenemos que hacerlo más eficiente: 

   1. Usar otro algoritmo. 

   2. Evitar dar pasos innecesarios: puede ser que el vector no esté tan desordenado y se ordene antes de dar todos los pasos. Si usamos una variable para saber si hemos hecho un intercambio; la ordenación ha terminado cuando ya no nos ha hecho falta. 
  
   DO
    desorden = False
     FOR j = 1 TO n-1
      IF m[j] > m[j+1]
       tmp = m[j]
       m[j] = m[j+1]
       m[j+1] = tmp
       desorden = TRUE
      END IF
     End FOR
   WHILE desorden


   Intercambiamos las repeticiones de paso (toda la estructura FOR externa)
  
   Por una variable desorden booleana, que va a marcar si hay o no desorden. 

   Habrá desorden cuando hacemos intercambios y repetimos los pasos mientras haya desorden. 

   En el momento que no tengamos que hacer intercambios, desorden valdrá 0/false; en el momento de terminar el bucle do while; por lo tanto será la ultima vez que se ejecute. 

   Cuando la matriz este muy desordenada no vale la pena hacer bubble sort eficiente porque se van a repetir los 5 pasos. 

   
   




|| Recursividad

 Para poder definir algo como puede ser una función o un proceso:

 f(x)

 Dentro del cuerpo de la función tiene que ir además la propia cosa definida: 

 f(x) = n * f(x)

 
 Ejemplos Basico: 

  Factoriales: 

   El factorial de un numero n equivale a multiplicar ese numero n por todos sus anteriores 
       n
   n!=sum k; o comprendido entre 1 y n
      k=1
  
   5! = 1*2*3*4*5

   
   También se puede definir de forma recursiva: 

    5! = 4!*5


 Caso Base: 

  Cuando uno construye funciones recursivas es importante establecer un caso base. 

  En el que no necesitemos recurrir de nuevo. 

  Es importante ya que si nuestra función se recurre infinitamente nunca tendrá solución. 

   3! = 3*2! (n! = n*n-1!)
   
   2! = 2*1!

   1! = 1*0!
 
   0! = 0*(-1)!

   (-1)! = -1*(-2)!

  
  Por ejemplo, si usamos recursividad para calcular un factorial, debemos establecer un caso base en el que retornar el factorial sin tener que 
         
         1 (caso base)  si n = 0 -> el factorial de 0 es 1.    
   n! = {
         n*(n-1)!       si n > 0 

    
 Torres de Hanói: 

  Nos encontramos con tres torres con discos apilados   

  En un momento inicial tenemos una torre con discos apilados en forma de piramide. 
 
  Dónde cada disco es más pequeño que el disco anterior. 

  
  El problema de lógica plantea que tenemos que pasar la piramide de la primera de las torres a la tercera, recordando un par de reglas. 
  
  Podemos usar todas las torres para ir moviendo e intercambiando discos. 

  Reglas: 

   1. La torre final tiene que quedar en forma de piramide (ordenada de la más pequeña a la más grande). 
   
   2. Solo podemos mover un disco a la vez. 

   3. Un disco no puede descansar sobre otro que sea más pequeño que él. 

   
 Recursividad en Torres de Hanói: 

  Es la forma más fácil de resolver el problema. 

  El truco está en dividir un problema grande (mover discos de una torre a otra)

  Y transformarlo en un problema más sencillo: 
  
   Si queremos mover una piramide de n discos de una torre a otra. 

   Lo mejor que podemos hacer: 

    1. Mover en uno o varios pasos, los primeros n-1 discos a la torre (tomar todos los elementos - 1) a la torre del medio que hace de auxiliar, temporal.
   
    2. Después movemos el disco que queda de la primera torre a la tercera. 

    3. Tomamos la torre intermedia y movemos todos sus elementos a la tercera en uno o varios pasos. 

  
  Solucionamos el problema recursivo: 

   Para mover unos discos de una torre a otra, el paso intermedio es que movemos todos los disco de una a la otra. 

   En todos los casos tenemos una torre origen, destino y una torre que usaremos como auxiliar para ayudarnos de mover los discos de una torre a otra. 

 
 Definición:    
   
  Definimos un caso base que no dependa de la recursividad. 

  En el caso de las torres, es cuando la torre de origen solo tiene un disco. 

  No necesitaríamos operaciones intermedias, nos alcanza con moverlo de origen hasta destino. 

  
 Código: 

  Lo más sencillo es representar cada disco con un número comprendido entre 1 y m, dónde los números más altos representan a los más grandes. 

  Lo apropiado es representar las torres como pilas donde introducimos enteros, ya que en una pila al igual que en una torres, solo podemos poner y sacar elementos que esten en al cima.  
   
   Pilas t1, t2, t3; 
   Disco d = t1.desapilar(); 
   t2. apilar(d); 

  
  HANOI(n: INT, o,d,a: STACK)
   IF n = 1 {
    Sacar disco de 0; Poner en A
    }ELSE{
     HANOI (n-1, o,a,d)
     Sacar disco de 0; Poner en A 
     Hanoi(n-1, a, d, o)
    }
   }
 
  Le pasamos o indicamos cuantos discos tiene la torre, ya que sino nuestra torre no sabrá cuando ha llegado al último disco. 

  Cuales son las torres de origen, auxiliar y destino. 

  El algoritmo tiene que determinar el caso base, cuando solo tiene que mover un disco; entonces lo va a mover directamente de la torre origen a la torre destino. 

  Si tenemos más de un disco, primero tiene que mover los primeros n-1 discos de la torre origen a la torre auxiliar. 
  
  (Se puede ver como en cada subproblema cambia el orden de los parámetros.)

  Después debemos mover el disco que queda en origen a la torre destino. 

  Finalmente debe mover los n-1 discos que hay en la torre auxiliar a la torre destino. 
  

  HANOI(n: INT, o,d,a: STACK) {
   IF n = 1 {
    a.apilar(o.desapilar())
   }ELSE{
    HANOI(n-1, o, a, d)
    a.apilar(o.desapilar())
    HANOI(n-1, a, d, o)
   }
  }

  Pasos necesarios para desplazar n discos: 

   Usamos un modelo inductivo: 

    Para mover un disco, usamos un paso. 

    Para mover dos discos, usamos un paso para mover el disco a la segunda torre y un paso para mover el disco a destino y un paso para mover los discos de la torre intermedia a la torre de destino. 

    Son tres pasos en total. 

    
    Sucesivamente Para mover 3 discos son 7 pasos en total. 

    Así podemos inducir que para mover n discos necesitamos 2^n-1
    
     P(n) = 2^n - 1 

     Ej: para mover 7 discos

      P(7) = 2^7-1 = 127. 





