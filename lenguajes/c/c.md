C

Necesitamos un IDE (entorno de desarrollo integrado) para el lenguaje C. 

Un IDE se compone de un editor de código/texto y un compilador. 

El compilador traduce el código fuente en código maquina contenido en un archivo ejecutable que puede correr nuestra computadora. 

Por si solo la computadora no puede correr código fuente sin compilarlo. 

El compilador traduce las instrucciones del código fuente a código máquina que nuestro procesador y sistema operativo pueda entender 

 archivo.exe -> Windows
 
 archivo.dmg -> MacOS 

 archivo.bin -> Linux

 archivo.apk -> Android
 

Existe un compilador para cada plataforma que soporta los procesadores: 

 Arquitecturas: 

  x86, x86-64 (escritorio)

  ARM (móvil)


Cada sistema operativo trabaja de diferente manera: 

 Una app diseñada para Windows no conoce como crear una ventana para Linux. 

 Tipo de binario: 
  
  Windows: PE
  MacOS: Mach-O
  Linux: ELF

 Los binarios son incompatibles, por eso es necesario un compilador para cada plataforma. 

    
Para compilar una app necesitamos saber la arquitectura y el sistema operativo que va a ejecutarla. 

Existen compiladores cruzados para compilar código fuente en un sistema y que puede ejecutarlo en otro, siguiendo sus reglas. 


Podemos programar usando un bloq de notas y compilar la app llamando al compilador desde la terminal. 

 MinGW/MSVC -> Windows
 gcc -> Linux
 LLVM/Clang -> MacOs

Sobre un leguaje de programación podemos usar librerias para construir apps más potentes. 

Podemos usar una libreria para hacer las ventanas (gtk, qt, wxWidgets)

Librerias para construir juegos o apps multimedia (sfml, sdl)

Se recomienda librerias multiplataformas como las mencionadas. 

Tambien podemos crear un proyecto vacio para ejecutarlo facilmente y correrse en terminal. 

Despues de elegir librerias o no de un proyecto podemos seleccionar el compilador a usar. 

Creamos una carpeta contenedora para nuestros archivos. 

Creamos el archivo main.c que es el principal, dirige el programa, llama a las funciones, etc. 

Para compilar usamos build, creará el binario especial para el sistema operativo. 

Con run ejecutamos el binario. 


 
|| Funciones

 Funcionamiento de C: 

  Es un lenguaje que puede integrarse en varias categorias. 
  
  Es un lenguaje de programamción imperativo: 

   Solo contiene una serie de instrucciones o funciones y nada más 
  
   No puede hacer nada por nosotros, no tiene métodos especiales para tratar la información del programa. 

   Los programadores son los que tienen que describir paso a paso las instrucciones. 

 
 Tipos de instrucciones en C: 
   
  Cada instrucción tiene su grupo.    
   
  1. Instrucción de Asignación: 
 
   Guarda un valor en la memoria temporal. 

   Para poder utilizarlo en un cálculo. 

   Luego podemos devolverlo cuando hayamos terminado. 


  2. Instrucción Condicionales: 

   A partir de una condición se ejecuta unas instrucciones o no. 


  3. Bucles: 

   El programa repite una serie de instrucciones un número de veces o hasta que una condición se cumpla. 

  
  4. Llamadas: 

   Una función invoca a otra función. 

   El flujo de inestrucciones pasa a otra zona de código. 

   Es otro tipo de operaciones o categoria.  

   C es un lenguaje de programación procedimental. 
   
   Todo nuestro programa va a estar dividido en regiones de código llamadas funciones o procedimientos según el tipo que sean. 

   Es un bloque de código que realiza una sola tarea. 
  
   Tiene valores de entradas y salidas. 

   Una función acepta parámetros como entrada y va a devolver un resultado operando esos parámetros. 

   Entrada -> Función -> Salida


 En C no existe código fuera de una función, siempre va a estar dentro de una función. 
  
 Por eso es una de las primeras cosas que debemos aprender. 

 La función más importante es la primara que va a ejecutarse cada vez que iniciemos un programa compilado en C. 

 
 Función main(): 

  Cada vez que ejecutemos un programa compilado en C, va a buscar una función llamada main y la va a intentar ejecutar. 

  El código que haya en main, van a ejecutarse una tras otra desde la primera hasta la última. 
  
  Entre medio se puede encontrar con los tipos de instrucciones que vimos. 

  Como asignación, condicionales, bucles, llamadas. 

  Las funciones internas van a devolver tipos de datos. 

  
 Tipos de datos: 
  
  Son distintas formas de representar un valor. 

  Elementales: 
   
   1. Enteros (Integers/int): 

    Va a guardar un número positivo o negativo. 


   2. Decimal (Float): 

    Se guardan separados porque el procesador los trata de distinta forma. 

    El simbolo decimal será el punto. 
 

   3. Carácteres (Character/char): 

    Representa una letra o un carácter del estandar ASCII. 
  
    Lo escribimos en comillas simples. 


    3.1 Cadena de carácteres: 

     Es un subtipo de dato qeu representa un conjunto de carácteres formando una palabra. 

     Lo escribimos en comillas dobles. 


  4. Void (Nada/vacío): 
   
   Representa la nada, lo utilizamos cuando queremos construir funciones que no devuelven nada. 

   Funciones que ejecuten un bloque de código y nada más. 

   Pueden llamarse procedimientos, una región de código que ejecuta algo y vuelve a la función que la llamó. 


 1. Construir función main: 
  
  Necesitamos nombre, parámetros o no (y su tipo), tipo de dato del retorno

  Ej: main sin parámetro y que devuelva un entero. 
  
  El tipo de dato de retorno lo tenemos que escribir antes del nombre de la función. 

  ```
  int main() {
   return 0;

  } 
   
  ```

  Palabra return, es para devolver el resultado o dato al exterior. 
  
  Le indicamos que queremos que devuelva. 

  En este caso es 0. 

  Main es una función que va a devolver un entero 0. 

  
  Si compilamos el programa, crea un binario y cuando se ejecute llama a main. 
 
  Y la función main va a devolver 0. 

  Cuando el sistema operativo ejecute la función va a utilizar el tipo de main para chequear el valor retorno y buscar errores. 

  Al hacer devolver 0, va a comprobar que el programa funciona y lo va a ejecutar. 

  Si encuentra errores no puede compilarlo/ejectarlo. 

  
  Función para imprimir un mensaje en pantalla: 
   
  Cuando lo ejecutemos va a imprimir en la consola del sistema. 

  Vamos a introducir una llamada a otra función desde nuestra función principal. 

  'printf()' es una de las pocas funciones que ofrece C y no tenemos que programar. 

  Dentro de su parentesis recibe un parámetros y ejecuta la llamada. 

  Las llamadas como en mátematicas, ej, f(x) y la llamamos como f(2)

  Le indicamos lo que vale esa x. 

 
  ```
  int main() {
   printf("Hola, Mundo!");
   
   return 0;
    
  } 
   
  ```
 
  Al compilar y ejecutar está funcion, nos aparecen avisos del compilador. 
 
  Debemos eliminar/hacer que no nos de avisos. 

  En este caso no sabe que es printf. 

  
  Como C es un lenguaje imperativo que no reconoce las cosas si no se las decimos o definimos. 

  Necesitamos un archivo de cabecera. 
  
  Contiene definiciones de funciones, acá es dónde define a print para que se pueda usar. 
 
  Necesitamos cargar el archivo en el que se define printf

  Antes de llamar a main, definimos el archivo de cabecera. 

  Ponemos un #include <>, entre los simbolos <>, escribimos stdio.h. 

  stdio.h (standar input output )

  ```
  #include <stdio.h>
  
  int main() {
   printf("Hola, Mundo!");
   
   return 0;
    
  } 
   
  ```
  
  Al cargar el archivo, el compilador va a aprender una serie de funciones. 

  Ya no saldrá ningun error o aviso de compilador y el sistema lo puede ejecutar/correr. 

  Imprimirá 'Hola, Mundo!'
   

 2. Funciones normales: 
  
  Además de main podemos crear otras funciones que no conoce el lenguaje C. 

  Aceptan o no parámetros como entrada, los opera y devuelve un valor. 



|| Variables y Tipos de Datos

 Además de las funciones, estaban las asignaciones, los condicionales y los bucles. 

 
 Asignaciones: 

  Suceden cuando trabajamos con la memoria para manipular valores. 

  En la memoria ram se guardan los datos del programa, su uso es temporal, cuando se cierra un programa; la memoria se deja de usar. 

  Podemos usar la memoria para hacer cálculos complejos dentro de una función o para guardar la entrada de teclado del usuario, etc. 

  La memoria tiene celdas a las que podemos acceder para manipular su valor. 

  Se necesita una forma para poder localizar y acceder a esas celdas. 

  Y después nos toca decirle al programa cual de esas celdas utilizar para guardar y operar datos. 

  
  Para esto surgen las variables y los identificadores. 

  Cuando declaramos una variable, le decimos al lenguaje, c; que nos guarde parte de la memoria para utilizarla para guardar los tipos de datos. 

  Con los tipos de datos que conocemos: int, float, char, void. 

  Guardamos un tipo de información, definimos la variable con su identificador. 

  Podemos asignarle un valor y luego podemos recuperar ese valor. 

  Al recuperar ese valor podemos utilizarlo en una expresion. 

  Ej: var x, luego creamos una expresión 2*x. 

  El programa recupera su valor y hace los cálculos. 

  
  Entonces, las declaramos, las asignamos y las utilizamos. 

  Como en las funciones, primero escribimos el tipo de dato que la variable va a guardar. 
   

  ```
  #include <stdio.h>
  
  int main() {
   //Declarar un caracter y un numero. 
   char x; 
   int y; 
  } 
   
  ```  

  Comentarios:
  
   Se usan para explicar el código, se definen con //. 


  En memoria tendremos un espacio para guardar caracteres y para guardar un entero. 

  
  Tipos de enteros: 

   1. short (entero corto): 
   
   2. int (entero normal): 

   3. long (entero largo): 

   Tienen un tamaño concreto de bits que pueden guardar. 

   Aunque no hay un estandar que diga cuantos bits puede ocupar o se recomiende para un número. 
    
   La única norma es: Short < Int < Long. 

   Short es una variable de 16 bits. 
  
   Int es de 32 bits. 
 
   Long es de 64 bits.  

   Cuanto más bits, más grande puede ser el número que guardemos. 
  
   Short puede guardar números entre 32.000 +-
   
   Int 2.000.000.000.000 +-

   Long 2^63 como max y como minimo -2^63

   Long, int y short pueden guardar números negativos. 

   Si queremos guardar un número sin signo usamos Unsigned

   Es un palabra especial que va antes de las anteriores. 
  
   Unsigned hace que los tamaños cambien, usa el espacio negativo para almacenar un número positivo más grande. 

   Short pasa de 0 a 32+ a 0 hasta 65535   
  
   Int va de 0 a 4 mil millones

   Long va 0 a 2^64-1

   Para cada ocasión podemos elegir el tipo de entero que se adapte. 

   Si no lo sabemos, usamos int. 

  
  Después de declararlas podemos hacer asignaciones de valores. 

  Invocamos el nombre o identificador y usamos el simbolo =.

  Después podemos recuperar o usar su valor en otra expresión. 

  Debemos invocarla con su nombre. 
 
  ```
  #include <stdio.h>
  
  int main() {
   //Declarar un caracter y un numero. 
   char x; 
   int y; 

   x = 'c'; 
   y = 10;

   int z = 2*y;
  } 
   
  ``` 

  Multiplicamos y*2 -> 10*2.   
   
 
 Imprimir las variables por pantalla: 

  Podemos usar printf de <stdio.h>. 

  Para imprimir variables usamos un place holder. 

  Es una estructura para guardar el valor de una variable en printf. 

  Place holder: %d ,
  
  1. El porcentaje % marca que viene una variable. 

  2. la letra d marca que el tipo de dato que queremos escribir o mostrar en printf
   
   d va a imprimir un número en printf.   

   Viene de decimal. 

  3. Necesitamos la coma para terminar el place holder. 

  4. Para escribir el valor de varias variables aumentamos el número de simbolos de %. 

  
  Escribimos return 0 para compilar y ejecutar la función main. 

  ```
  #include <stdio.h>
  
  int main() {
   //Declarar un caracter y un numero. 
   char x; 
   int y; 

   x = 'c'; 
   y = 10;

   int z = 2*y;
   printf("El resultado es %d", z); 
   
   return 0; 
   
  } 
   
  ```

  Escape de caracter: 

   Se usan para escribir los caracteres especiales del lenguaje. 

   Usando %% escribimos el caracter porcentaje en printf. 


 Imprimir el caracter en printf: 

  Escribimos otro % y c más la coma: %c ,. 

  Al final agregamos la variable fuera de la comilla doble de la cadena. 

  ```
  #include <stdio.h>
  
  int main() {
   //Declarar un caracter y un numero. 
   char x; 
   int y; 

   x = 'c'; 
   y = 10;

   int z = 2*y;
   printf("El resultado es %d, x = %c", z, x ); 
   
   return 0; 
   
  } 
   
  ```

  La z irá en el primer place holder y la x en el segundo. 

  Es una asignación por orden. 


 Parametrizar funciones: 

  Si hacemos una función para imprimir nombre y edad de una persona, debemos permitir que se ingresen esos dos parámetros. 

  Debemos declarar el tipo de dato de los parametros y su nombre o identificador significativo para su contenido. 

  Lo hacemos dentro del parentesis, despues del nombre de la función. 

  Para pasar por parametro una cadena debemos escribir char*.
 
  Forma un grupo de carácteres pegados. 

  Para imprimir en printf una cadena de caracteres usamos %s.
  

  Después necesitamos llamar a la función desde main. 

  Escribimos su nombre y en el parentesis pasamos los valores para los parámetros. 

  Estos valores se llaman argumentos. 

  ```
  #include <stdio.h>

  void imprimir_datos(int edad, char* nombre){
   printf("Hola %s! Tienes %d.", nombre, edad);
  }
  
  int main() {
   imprimir_datos(32, "asdf");
   
  } 
   
  ```
  
  Para este caso usamos void porque vamos a imprimir en pantalla. 

  No necesita devolver ningún valor. 



|| Condicionales y Operadores Lógicos

 Tenemos condicionales elementales como el if y el if else. 

 Después el if else if else y el switch
 
 
 If: 
  
  Es un tipo de bloque que permite en función de una determinada condición, podemos decidir si un grupo de instrucciones se ejecuta o no. 
  
  También podemos usar el else para ejecutar instrucciones cuando no se cumpla con la condición. 
 
  Se definen: 
  
   if (condición) {//instrucciones cuando se cumpla condición}
  
   if (condición {}else{//instrucciones cuando no se cumpla condición}. 

   Else puede ser opcional. 


  Necesitamos operadores lógicos para hacer funcionar a las condiciones. 

  == (igual)
  >= (mayor o igual)
  > (mayor)
  < (menor)
  <= (menor o igual)
  != (no igual)

  Tambien dentro de esta categoria están los booleanos: 

  && (and/y)
  || (or/o)
  
  Estos evaluan varias condiciones a la vez. 

  && devuelve true si todas las condiciones son verdaderas. 

  || devuelve true si una de las condiciones es verdadera. 

  Ej: x = 20; si x > 20 && x < 30, va a devolver false. 

  ```
  #include <stdio.h>
 
  int main() {

   int x = 20; 

   if (x == 20) {
    printf("x vale 20.");
   }else{
    printf("x no vale 20.");
   }

   printf("Esto se ejecuta siempre");

   return 0; 
  }
   
  ```

  Lo que está fuera del if se ejecuta siempre. 
  
  Cuando se compile y ejecute en consola vemos todas las cadenas en la misma línea. 


 Introducir salto de linea: 

  Debemos poner \n dentro de las comillas dobles de una cadena. 
  
  También va solo dentro del bloque en el que queremos separar las lineas de texto. 

  ```
  #include <stdio.h>
 
  int main() {

   int x = 20; 

   if (x == 20) {
    printf("x vale 20.\n");
   }else{
    printf("x no vale 20.\n");
   }

   printf("Esto se ejecuta siempre.\n");

   return 0; 
  }
   
  ```


 Estructurar correctamente varias estructuras condicionales: 

  Podemos usar if() else if() o switch. 

  ```
  #include <stdio.h>
 
  int main() {

   int x = 40; 

   if (x == 20) {
    printf("x vale 20.\n");
   }else if (x == 30) {
    printf("x vale 30.\n");
   }else if (x == 40){
    printf("x vale 40.\n");
   }else{
    printf("No se lo que vale x.\n");
   }

   printf("Esto se ejecuta siempre.\n");

   return 0; 
  
  }
   
  ```

  Si queremos construir una estructura condicional que trabaje con dias de la semana y nos devuelva cuál es según se el número de dia que le pasamos. 

  Si le pasamos 1, va a ser lunes, si es 2 va a ser martes, etc. 
    
  ```
  #include <stdio.h>

  void imprimir_dia(int numero_de_dia){
   if (numero_de_dia == 1) {
    printf("Lunes");
   }else if (numero_de_dia == 2) {
    printf("Martes");
   }else if (numero_de_dia == 3) {
    print("Miercoles"); 
   }
 
  int main() {

   imprimir_dia(2);

   printf("Esto se ejecuta siempre.\n");

   return 0; 
  
  }
   
  ``` 
 
  Para hacerlo más eficiente podemos usar un switch. 

  Nos ahorra escribir if else if con todas las variables y condiciones e instrucciones. 
  

  Se utiliza cuando tenemos un montón de posibles valores. 

  Hace que se ejecute un código distinto en función de lo que valga. 

  Con switch escribimos todo lo anterior con menos instrucciones, una vez. 

  Se define: 
   
   switch (variable a evaluar){
    case 1: 
     //instrucciones 
     break;
    case 2: 
     //instrucciones 
     break;
    case 3: 
     //instrucciones 
     break;  
    default
     //instrucciones
     break;
   } 

   Las palabras case, break, default son obligatorias.
   
   case toma el valor y ejecuta código si este valor tiene instrucciones. 
  
   break se usa para frenar la lectura de instrucciones que hace c, hacia adelante. 
   
   Va a ejecutar todas las opciones debeja si no usamos break. 

   default sirve para cuando no se cumple ningun caso desarrollado.  
  
  ```
  #include <stdio.h>

  void imprimir_dia(int numero_de_dia){
   switch (numero_de_dia){
    case 1: 
     printf("lunes"); 
     break;
    case 2: 
     printf("Martes"); 
     break;
    case 3: 
     printf("Miércoles");
     break;
    case 4: 
     printf("Jueves"); 
     break;
    case 5: 
     printf("Viernes"); 
     break;
    case 6: 
     printf("Sabado");
     break;
    case 7: 
     printf("Domingo");
     break;
    default
     printf("No es un día de la semana válido");
     break;   
   }
  }  

  int main() {

   imprimir_dia(2);

   printf("Esto se ejecuta siempre.\n");

   return 0; 
  
  }
   
  ```     

   

|| Bucles

 Región de código que se va a ejecutar varias veces mientras una determinada condición se cumpla. 

 Declaramos la instrucción que debe repetirse y determinar cuando se rompe ese buble. 

 Es importante que la condición de un bucle se deje de repetir en algún momento, de lo contrario entra en una repetición de código infinita. 

 Si no terina el bucle, nunca devolverá el control del programa a la función principal y nunca terminará de ejecutarse el resto de instrucciones y por lo tanto el programa. 


 Tipos de bucles: 
  
  1. While: 
   
   Se define: while (condición) {//codigo}. 

   Evaluará la condición y si se cumple ejecuta las instrucciones.

   Cuando termina de ejecutar las instrucciones, vuelve a evaluar la condición para ver si entra o no en el bucle. 

   Hasta que la condición de while deje de cumplirse. 

   ```
   #include <stdio.h>

   int main(){
    int k = 10; 

    while (k < 20) {
     printf("k vale %d\n", k); 
     k++;
    }
    printf("hemos salido del bucle\n");
   }

   ```

   Dentro del bucle creamos un contador para aumentar el valor de k y romper el bucle. 

   Imprimimos la variable con un salto de linea. 

   k vale 10
   k vale 11
   k vale 12
   ...
   hemos salido del bucle



  2. Do While: 

   Se define: do {//codigo}while(condición);
 
   Evalúa su condición al final. 

   Ejecutará las condiciones al principio, al llegar al final, evaluará la condición. 
   
   Después de ejecutar código intentará probar si puede volver a hacerlo. 

   Si la condición sigue siendo valida, volverá a ejecutar. 

   Hasta que sea falso. 

   ```
   #include <stdio.h>

   int main(){
    int k = 10; 
    
    do{
     printf("k vale %d\n", k); 
     k++;
    }while(k < 20);
   
    printf("hemos salido del bucle\n");
   }

   ```
  
   Diferencia entre while y do while: 

    While ejecutará el código 0 o más veces. 

    Dado que primero testea la condicion para entrar al bucle. 

    En do while ejecutará 1 o más veces. 

    Ejecutará código y después chequea si puede repetirlo. 


  3. For:  
 
   Lo usamos cuando queremos que una condición se ejecute un número de veces que vamos a fijar. 
   
   Se define: for(inicialización; condición; iteración){//código}    
  
   En inicialización establecemos el valor inicial de una variable. 

   En condición tenemos que hacer que se deje de cumplir para abandonar el bucle. 
   
   La condición trata el bucle for como un while, si la condición no se cumple no se ejecutará ni una sola vez. 
   
   El código se va a ejecutar en cada iteración. 

   Proceso: 

    1. Ejecutar inicialización. 

    2. Evaluar condición. Si no se cumple, fin. 

    3. Ejecutar el código del bucle. 

    4. ejecutar iteración. 

    5. Volver al paso 2. 

  
  Formas de declarar la variable de inicialización: 

   1. int i = 0: c99
    
    i se va a declarar para el bucle. 

    Cuando se abandona el bucle, i deja de existir. 

    Es util cuando solo queremos usar i dentro del bucle. 

    Al dejar de existir no podemos referirnos a ella. 

    ```
   #include <stdio.h>

   int main (){
    for (int i=0; condición; iteración  ){
    
    }
   }
   
   ```


  2. Ansi c89: linux por defecto. 

    int i; 

    for (i=0; condición; iteración){//codigo}

   ```
   #include <stdio.h>

   int main (){
    int i;
    for (i = 0; i < 5; i++){
     printf("Ahora estoy en la iteración %d.\n", i); 
    }
    printf("hemos salido del bucle.\n"); 
   }
   
   ```

   Después de cada iteración ejecutaremos un código

   Por eso queremos que se incremente la variable i. 

   Usamos i++ porque nos interesa llevar un regitro de cuantas veces se ejecuta el código. 
  
   Como nos interesa que el código se ejecute 5 veces. 

   Escribimos como condición que i sea menor que 5. 

  Compilar en modo C99: 

   En gcc, se usa gcc -std=c99. 

   El método int i = 0: aparecio en c99. 

   Si queremos compilar en c89 ansi. 

   Por defecto gcc trabaja con c89 (podemos cambiarlo), 

   clang/llvm compila c99. 
 


|| Punteros

 Un programa está compuesto por una entrada, cálculo de ella y una salida. 

 Teniendo en cuenta su tipo de entrada y salida. 

 
 Los punteros, arrays y estructuras hasta escribir archivos son otra forma de organizar datos. 

 Como tambien lo eran las funciones, asignaciones, condicionales y bucles.

 
 Punteros: 

  Al declarar una variable y asignarle un valor como int x = 10. 

  Luego podemos hacer que se imprima: printf("%d\n", x). 

  Al guardar un dato se guarda en memoria y para acceder a ello. 

  El sistema debe conocer que dirección o número de celda o memoria está guardado el valor o dato. 

  La encuentra en memoria fisica, si no es capaz de recordar en que número está no podrá encontrarla y leerla para imprimir. 

  
  Entonces, primero necesitamos saber la dirección de nuestro dato guardado. 

  Para después ir a esa dirección, encontrar el dato y leerlo o tomarlo. 

  Esto se llama referencia por dirección de memoria. 

  Así es como funciona al computadora cuando programamos y llamamos a diferentes variables para calcular o imprimir datos. 


  Con C podemos hacerlo nosotros mismos. 

  Con el tipo de dato puntero/pointer podemos guardar, captar o manipular estas direcciones guardadas en memoria. 

  Cuando tenemos un puntero con una dirección guardada podemos recuperar el valor que hay en esa dirección y escribir un valor en esa celda de memoria (aunque no sepamos a que variable pertenece). )

  
  Cuando trabajemos con punteros tenemos que asegurarnos trozo de memoria que existe este reservada para usar. 

  Cuando escribimos variables, el compilador le pide memoria al sistema operativo para guardar datos. 

  Cuando usamos con punteros celdas de memoria que no estan reservadas o no existen vamos a tener problemas. 
  
  Si no están declaradas la computadora no nos da permiso para usarla. 

  Si accedemos a posiciones de memoria invalidas, el sistema operativo va a cerrar nuestro programa. 
  
  
 Declarar puntero: 

  Podemos usarlos en dos casos. 

  
  Formas: declarar puntero usando tipo de dato del que queremos usar: 

   Ej: int x = 10;

   Para sacar su dirección de memoria usando & + nombre var. 

   Ej: &x; va a devoler su dirección. 

   Si hacemos printf("x = %d\n", x) imprimimos su valor. 

   Si hacemos printf("Dirección de x = %d\n", &x) imprimimos su dirección. 
  
   Imprimirá una dirección con signo dado el place d (decimal). 

   Para imprimir un valor sin signo usamos el place u (sin signo). 
  
   printf("Dirección de x = %u\n", &x). 

   Si nos vamos al número impreso vamos a encontrar la variable x. 

   
   Ahora si queremos guardar una dirección de memoria. 

   Por más que sea un número, no podemos guardarlo en int normal. 

   Necesitamos el tipo de dato puntero: int*;

   Le damos un nombre y la dirección: int* dirX = &x;

   dirX será un puntero. 

   ```
   #include <studio.h>
   
   int main () {
    int x = 10; 
    int* dirX = &x; 

    float y = 0.5; 
    float* dirY = &y; 
   }

   ```
  
   Siempre debe coindicir el tipo dado que cada variable tiene un numero de bits en memoria y el procesador tiene que saber de cuantos bits de memoria ocupa ese puntero. 

 
  Usos: 

   Principal: Referencia a datos en funciones. 

    ```
    #include <studio.h>

    void jugar(int n) {

    }
   
    int main () {
     int x = 10; 
     printf("%d\n", x);
     
     return 0; 
    }

    ``` 
    
    Por referencia se refiere: 

    Cuando declaramos x = 10 e imprimimos su valor. 
  
    Retornamos 0. Se compilará, ejecutará y mostrará el valor. 


    Si definimos una función y después la llamamos en main y le pasamos la variable. 

    ```
    #include <studio.h>

    void jugar(int n) {
     n = (n+3)*2-1
     printf("%d\n", n); 
    }
   
    int main () {
     int x = 10; 
     jugar(x);
     //printf("%d\n", x);
     
     return 0; 
    }

    ```
    
    Se va a imprimir el cálculo que hace la función. 

    Si descomentamos la linea que imprimia x: 

    Va a imprimir el cálculo de la función y después la variable x. 
 
    ```
    #include <studio.h>

    void jugar(int n) {
     n = (n+3)*2-1
     printf("%d\n", n); 
    }
   
    int main () {
     int x = 10; 
     jugar(x);
     //printf("%d\n", x);
     
     return 0; 
    }

    ```    
    
    Se debe a que al pasar una variable a una función se crea temporalmente otra variable en otra dirección de memoria, al terminarse la función se elimina.  

    Al pasar una variable como argumento de una función le estamos pasando una copia que se eliminará cuando termine la función. 

    n no afecta a la variable original. 

    
    Si trabajamos con punteros, accedemos a la dirección de memoria de una variable y podemos reemplazar su valor. 
   
    Ahora podemos hacer que el parametro de la función reciba un puntero.     
    
    Y en vez de la variable le pasamos su dirección con &.

    ```
    #include <studio.h>

    void jugar(int* n) {  //se lee
     int y = *n;          //en un entero y, guardá *n (valor puntero int* n)
  
     y = (y+3)*2-1
     printf("%d\n", y); 
    }
   
    int main () {
     int x = 10; 
     jugar(&x);
     //printf("%d\n", x);
     
     return 0; 
    }

    ```  
    
    Al ejecutar la función, la primer instruccion es mostrar o rescatar la dirección de x. 

    int y = *n; es lo contrario a &x. 

    *n, * está a la izquierda de la variable, distinto de n*   

    A la izquierda de un puntero(int*n), recupera el valor que hay en ese puntero. 

    Mostramos el cálculo de la función por referencia, no por parametro. 

    Comentamos print x. 

  
    Guardar el resultado del puntero en la dirección de memoria de int* n: 
    
    Definimos *n.   

    ```
    #include <studio.h>

    void jugar(int* n) {  //se lee
     int y = *n;          //en un entero y, guardá *n (valor puntero int* n)
     y = (y+3)*2-1
     *n = y;              //guarda el resultado anterior
     //printf("%d\n", y); 
    }
   
    int main () {
     int x = 10; 
     jugar(&x);
     //printf("%d\n", x);
     
     return 0; 
    }

    ``` 
    
    A *n le decimos que se guarde y en la celda n.  
    
    Comentamos resultado y de la funcion. 
    
    Se va a modificar la celda en la que está declarada x. 

    Se va a modificar &x, que le pasamos a jugar(&x).     
   
    Comentamos valor de x. 

    
    Entonces, le pasamos un dir de memoria a jugar
    
     jugar(&x)

    Sacamos el valor (10)

     int y = *n

    Modificamos ese valor (era 10, ahora es y = ...)

     y = (y+3)*2-1

    La volvemos a poner en la celda
     
     *n = y; 


   Al pasar parámetros por referencia podemos hacer que se devuelvan varios valores en una función y no uno solo.   

    (var por copia y por ref a la vez (?)

   Al usar copias, se consume mucha memoria y en estructuras pesadas no es lo eficiente. 

   Los punteros trabajan con un unico objeto lo que hace ahorra memoria. 

 
 RS Utilidades de punteros: 

  1. Acceder a posición de memoria sabiendo su dirección: 

   Dirección: int* n 

   Acceder a pos de memoria: *n


  2. Escribir cosas en posición de memoria: 

   *n = y
  
  ```
  (int* n); 
  int y = *n; 
  *n = y; 
  
  ```
 
 RS: 

  Punteros: 

   Necesitamos el tipo de dato puntero: int*;

   Le damos un nombre y la dirección: int* dirX = &x;
 

  Manipulación de punteros por referencia en funcion: 

  La primer instruccion es mostrar o rescatar la dirección de x. 

   int y = *n; es lo contrario a &x. 

   *n, * está a la izquierda de la variable, distinto de n*   

   A la izquierda de un puntero(int*n), recupera el valor que hay en ese puntero. 


  (int* n); def punt parm
  
  int y = *n; guarda valor punt
  
  *n = y; def valor punt con y



|| Arrays y VLAs 

 Una de las formas de estructurar datos. 

 Organizamos datos en memoria, declarando un número de datos en posiciones contiguas de memoria.

 En vez de declarar muchas variables, usamos sola una para todos los datos guardados. 

 Y en vez de guardase o reservarse espacio para un solo dato, se reserva memoria para el tamaño declarado del array. 

 Todas están bajo el mismo identificado/nombre pero con un indice podemos acceder a ellas individualmente según su posición/indice. 

 Con el indice marcamos el lugar para guardar un dato. 

 O también marcamos la posición para acceder a un dato ya guardado. 

 
 Ej: guardar un serie de datos para hacer cálculos. 

 Declarar array: 
  
  1. tipo de dato que guardará

  2. nombre del array

  3. tamaño del array: se denota [x tamaño]

 
 Guardar dato en una posición: 

  1. llamar al identificador

  2. marcar lugar/posición con []

  3. asignar valor con =

 
 ```
 #include <stdio.h>
 
 int main (){
  
  int edades [8]; 
 
  edades[2] = 15; 
 }

 ``` 
 edades[2] se comportará como una variable más. 

 Podemos cálcular o imprimirla. 

 

 Declarar arrays eficientemente: 

  Si queremos operar arrays, c no limpia la memoria del sistema. 
                                     0  1  2  3  4
  Si teníamos valores en posiciones |10|23|84|6|15|
   
  Loa valores que había en estas posiciones de memoria como resultado de algún programa ejecutado antes en la máquina. 

  C no va a limpiar la memoria antes de usarla, lo tendríamos que hacer nosotros. 

  ```
  #include <stdio.h>
 
  int main (){
  
   int edades [8]; 
 
   edades[2] = 15; 

   int resultado = edades[2] + edades[3]; 

  }

  ```

  
  Es importante que las variables tengan valores iniciales. 

  Podemos inicializar las variables en la misma linea. 

  Definimos el tipo de dato, el nombre y el tamaño del array. 

  Después le asignamos todos los valores juntos dentro de llaves. 

  ```
  #include <stdio.h>
 
  int main (){
  
   int edades [8] = {1, 2, 3, 4, 5, 6, 7, 8}
 
  }

  ```


 Definir un array con un bucle: 

  Declaramos el inicializador c89 (linux) para el for. 

  Declaramos el tamaño del array. Todo en un int de misma linea

  Declaramos un for hasta 8 para leer valores. 

  Es hasta 8 dado que los indices empiezan en 0. 

  Ponemos como condición < 8 o =< 8

  ```
  #include <stdio.h>
 
  int main (){
  
   int i, edades [8]; 

   for (i = 0; i <= 8; i++) {

   }
 
  }

  ```  


  Vamos a introducir valores al array por teclado e imprimir valores: 

  ```
  #include <stdio.h>
 
  int main (){
  
   int i, edades [8]; 

   for (i = 0; i <= 8; i++) {
    printf("Introduce la edad %d", i+1); 
    scanf("%d", &edades[i]);
   }

   for (i = 0; i < 8; i++) {
    printf("edades[%d] = %d\n", i, edades[i]); 
   }
   return 0; 
  }

  ```  
  i actúa como una variable. 
  
  i+1 suma valor indice/var+1
  
  "%d", &edades[i] escanea/toma dirección de memoria del valor/var
  
  "edades[%d] = %d\n", i, edades[i]
    
   cadena que imprime literalmente edades[var]
   = var salto linea
   pasa i y edades[i] como las dos var anteriores marcadas
   por los place holders (var)

  
  Del mismo modo que se pueden escribir, se pueden leer. 
  
  El primer for introduce elementos

  El segundo recorre los elementos uno a uno y los muestra. 

  Introduce la edad 1: -> 1
  
  Introduce la edad 2: -> 2

  Introduce la edad 3: 3

  ...

  edades[0] = 1
  edades[1] = 2
  edades[3] = 3 
 
  ...

  

 VLAs (Variable Length Arrays): 

  A los arrays de tamaño variable le indicamos con una variable cuanta longitud debe tener. 

  No podemos estar en modo c89, se puede usar en VScode o cambiar el modo del compilador a c99. 
  
  En linux, a diferencia de la inicialización y asignación de for, está soportado. 

  gcc tiene plugins adicionales que le dan soporte. 

  Declaramos el tamaño con una variable. 

  Definimos la variable y vamos a pasarla en la definición del array. 

  Tambien la pasamos en el condicional del for 

  
  ```
  #include <stdio.h>
 
  int main (){
  
   int tam = 8
   int i, edades [tam]; 

   for (i = 0; i <= tam; i++) {
    printf("Introduce la edad %d", i+1); 
    scanf("%d", &edades[i]);
   }

   for (i = 0; i < tam; i++) {
    printf("edades[%d] = %d\n", i, edades[i]); 
   }
   return 0; 
  }

  ``` 
 

  Podemos usar una entrada para que define el tamaño:  
  
  ```
  #include <stdio.h>
 
  int main (){
  
   printf("¿Cuántos elementos vas a introducir?"); 
   int tam; 
   scanf("%d", &tam); 
   int i, edades [tam]; 

   for (i = 0; i <= tam; i++) {
    printf("Introduce la edad %d", i+1); 
    scanf("%d", &edades[i]);
   }

   for (i = 0; i < tam; i++) {
    printf("edades[%d] = %d\n", i, edades[i]); 
   }
   return 0; 
  }

  ``` 

 Arrays como parámetros en funciones: 
  
  Los identificadores o nombre de un array no identifican a ellos concretamente. 

  Los identificadores son punteros. 
  
  Ej: edades[5] apunta a la dirección de memoria 
   
   0 1 2 3 4
  | | | | | | 

  Celdas de memoria lista para guardar valores

  edades apunta a la dirección de memoria dónde está nuestro array. 

  &edades[0]; &edades[1]; &edades[2], etc. 

  Apuntamos a los elemetnos 0, 1, 2; así obtener su ubicación. 

  
  Acceder a las posiciones con el identificador: 
  
   Aritmética de punteros: 
  
    Así podemos hacer cálculo con direcciones de memoria, como sumar, restar, multiplicar, etc. 

    Dado que la dirección de memoria tiene un valor o número. 

       x
    |     |      |      |      |      |
      &x   (&x)+1 (&x)+2 (&x)+3 (%x)+4   

    Podemos tener un puntero que apunte a la dirección de memoria x y que a ese puntero se le sume 2 o 3 y en ese caso apuntará dos o 3 posiciones más adelante. 

      
    Por dentro de C, cuando usamos los indices, c está sumando números a la dirección de memoria que apunta al array, en el caso anterior edades y está accediendo a una posición particular. 

    Ej: int x[4]: un int ocupa 4 bytes           
    |  - - -  |  - - -  |  - - -  |   - - -  |   
     x[0]       x[1]      x[2]      x[3]   
     (&x)+4*0   (&x)+4*1  (&x)+4*2  (&x)+4*3
    
  
  Array como parametro: 
  
   Si se pasasen como se pasa una variable se tendrían que copiar cada vez que los pasamos como parámetros. 
 
   Gastaría mucha memoria y sería lento si tendría que copiar muchos elementos de un array grande. 

 
   Entonces, c permite pasar un puntero a esta zona de memoria que va a estar existiendo porque la función dónde llamó sigue estando en ejecución. 
  
   No va a tardar tanto. 

  
   Si hacemos una función para calcular medias. 

   Va a devolver un flotante

   Ahora queda escribir/pasar el array como parametro. 

   Existen dos formas de hacerlo. 


   1. float media (int edades[])

    indicamos que le pasamos un parametro array llamado edades[]

    cuando declaramos un array nuevo no tenemos que poner nada, pero podemos hacerlo. 

    media (int edades[5]); queda para fines didacticos/recordatorio. 

    Si no tenemos ningún tamaño como sabe la función cuantos elementos tiene el array?

    No puede saberlo. 

    C cuando le pasamos un array como parametro lo trata como un puntero y pierde toda la información. 

    No se puede. 


   2. La única forma es pasarlo es pasandole manualmente cuantos elementos tiene nuestro array.  
     
    float media (int edades[], int tam){

    }

    no hay otra forma porque int edades[] es un puntero. 

    Podemos cambiar la forma del puntero: 

    float media (int* edades, int tam){

    }

    Podemos hacer 

    float media (int* edades, int tam){
      edades[2]; //va a convertirlo 
    }    

   ```
   
  float media (int* edades, int tam){
   int i; 
   float acum = 0; 
   for (i = 0; i < tam; i++){
    acum += edades [i]; 
   } 
   return acum/tam; 
  }    

  Es un bucle que va recorriendo cada posición del array pasado desde 0 hasta tam. 
  (for)
  
  Que en cada posición vaya sumando (acum=0)
  
  Luego devuelve la media (acum/tam)

  ```
  #include <stdio.h>
  
  float media (int* edades, int tam){
   int i; 
   float acum = 0; 
   for (i = 0; i < tam; i++){
    acum += edades [i]; 
   } 
   return acum/tam; 
  }    

  int main (){
   int tam; 
   printf("¿Cuántos elementos vas a introducir?");  
   scanf("%d", &tam); 
   int i, edades [tam]; 

   for (i = 0; i <= tam; i++) {
    printf("Introduce la edad %d", i+1); 
    scanf("%d", &edades[i]);
   }

   printf("La edad media es %f", media(edades, tam)); 
   return 0; 
  }

  ``` 

  Llamamos a la función y le pasamos cuantos elementos tiene.   

  Se va a introducir la cantidad total de elementos
  
  Se introduce las edades para cargar el array. 

  Cálculará la media. 


 RS: 

  corrección i+1 para imprimir que valor corresponda con posición "real" dado que empieza en 0

  &edades[i] direccion del puntero de un elemento del array

  tipico imprimir un valor del array edades[i] 

  .....
  
  i actúa como una variable. 
  
  i+1 suma valor indice/var+1
  
  "%d", &edades[i] escanea/toma dirección de memoria del valor/var
  
  "edades[%d] = %d\n", i, edades[i]
    
  cadena que imprime literalmente edades[var]
   
   = var salto linea
   pasa i y edades[i] como las dos var anteriores marcadas
   por los place holders (var)

  .....

  VLAs: 
  
   printf("¿Cuántos elementos vas a introducir?"); 
   int tam; 
   scanf("%d", &tam); 
   int i, edades [tam]; 

   definimos var y despues apuntamos a ella para que escriban. 

  .....

  Arrays como parametros en func: 
  
  float media (int* edades, int tam){
   int i; 
   float acum = 0; 
   for (i = 0; i < tam; i++){
    acum += edades [i]; 
   } 
   return acum/tam; 
  }       
 
  printf("La edad media es %f", media(edades, tam) 

  

|| Estructuras

 Es otra construcción para organizar datos. 

 Se usa para organizar datos que están relacionados entre si. 

 Agrupa variables en un bloque, ponerle un identificador. 

 Construir los bloques con instrucciones sencillas y a cada variable agregarle los datos. 
  

 1. Definir struct
   
  struct cuenta {
   //codigo que define las distintas variables de la estructura
  }; 

  Terminamos la estructura con un punto y como (;). 

  
 2. Definir campos: 
  
  ```
  struct cuenta {
   char nombre[30]; 
   char apellido[40]; 
   int identificador; 
   int saldo; 
  };  

  ```

  Construimos una estructura de 4 campos. 

  Cada variable se convierte en un campo y luego podemos usar una sintaxis especial para manipular cada campo de la estructura. 

  Podemos manipular campos individuales, pero la estructura se comporta como un bloque. 

  Como la struct es un bloque podemos pasar un único identificador o variable a distintas funciones o podemos ir manipulando con un único identificador que agrupe a toda la estructura. 
   

 3. Sintaxis de struct: instancia de un struct

  Podemos declarar una cuenta -en main-. 

  Llamamos a un struct con su nombre y después le definimos un identificador a la instancia. 

  Vamos a tener una variable x de tipo struct cuenta. 

  ```
  int main (){
   struct cuenta c1; 
   

   return0;   
 
  }


  ```

  en el ejemplo tenemos una variable c1 de tipo struct cuenta. 

  Una vez declarado el identificador lo podemos usar. 

  Podemos pasar c1 como parametro de una función. 

  ```
   int main (){
   struct cuenta c1; 
   funcion(c1); 

   return0;   
 
  }

  ```
  
  También podemos manipular los campos de c1. 

  Para eso tenemos que acordarnos de la sintaxis que tenemos que usar para modificar una strutct. 

  Modificar Struct: 
  
  1. Acceder a campos: 

   Escribimos el identificador de la instancia de struct, seguido de un punto y una variable de la estructura. 

   c1.saldo = 400; -en main-. 

  ```
  #include <stdio.h>  

  struct cuenta {
   char nombre[30]; 
   char apellido[40]; 
   int identificador; 
   int saldo; 
  };  


  int main (){
   struct cuenta c1; 
   c1.identificador = 1235; 

   c1.saldo = 400;
   return 0;   
 
  }

  ```

  2. Incluir archivo de cabecera <string.h> para modificar strings

   Como un string es un array de caracteres, podemos usar funciones para modificarlo. 
   
   Como una función para determinar la longitud de una cadena de caracteres. 

   O una función para copiar cadenas de una variable a otra. 

   Por ej, la más facil pero no recomendable en producción es 'strcpy'   
   
   'strcpy' tiene como parametros la ubicación dónde va a escribir cadena y la cadena cadena de origen para copiar. 

   #include <string.h>

   strcpy(c1.nombre, "Pepito"); 
   strcpy(c1.apellido, "Pérez");    
   
   ```
   int main (){
    struct cuenta c1; 
    c1.identificador = 1235; 
    strcpy(c1.nombre, "Pepito"); 
    strcpy(c1.apellido, "Pérez");    
    c1.saldo = 400;
    return 0;   
   }

   ```
   Así terminamos de definir nuestra cuenta. 
 
  
   La inseguridad viene de que a strcpy le falta recibir el tamaño de caracteres  que va a copiar, el tamaño de los campos. 

   Además no tiene limite, puede saltearse y usar memoria que no le corresponde al definir tamaño a usar; si lo sobrepasamos borra memoria anterior y escribe. 

   Dado que un cadena de caracteres es un array de char, en una cadena de caracteres al final (bajo el capó) hay un caracter adicional -aunque no lo veamos- es un booleano 0. 

   Es lo que se llama caracter null y en las cadenas de caracteres se utiliza para indicar su limite. 

   Ej: "pepito", tiene 7 caracteres: las letra ascii p, e, p, i, t, o. 

   Y bajo el capó hay una posición (7ma -indice 6-), cuyo valor es el 0 que le indica a c que termina la cadena. 

   'strcpy' va a copiar cosas hasta que se encuentre el número 0. 

   
 3. Pasar estructuras como parámetros: 

   El parámetro va a ser tipo struct, el nombre previamente definido y el nombre del parametro que querramos. 

   struct   cuenta     c
    tipo  nom.struct  nom.param

   ``` 
   void imprimir_datos (struct cuenta c) {
    printf("El cliente %s $s tiene $d euros en cuenta.\", c.nombre, c.apellido, c.saldo); 
   }

   ```

   en main llamamos a esta función y le pasamos como parametro el nombre/instancia de la cuenta  

   ```
   imprimir_datos (c1); 

   ```
   Salida: El cliente Pepito Pérez tiene 400 euros en cuenta. 
  
   
   ```
   #include <stdio.h>  
   #include <string.h>
   
   struct cuenta {
    char nombre[30]; 
    char apellido[40]; 
    int identificador; 
    int saldo; 
   };  

   void imprimir_datos (struct cuenta c) {
    printf("El cliente %s $s tiene $d euros en cuenta.\", c.nombre, c.apellido, c.saldo); 
   }

   int main (){
    struct cuenta c1; 
    c1.identificador = 1235; 
    strcpy(c1.nombre, "Pepito"); 
    strcpy(c1.apellido, "Pérez");
    c1.saldo = 400;
    
    imprimir_datos (c1);   
    return 0;
 
   }

   ```
  

 4. Uso eficiente de las funciones en C: 

  Tenemos que usar punteros en vez de hacer copias de variables. 

   ```
   void imprimir_datos (struct cuenta *c) {
    printf("El cliente %s $s tiene $d euros en cuenta.\", c.nombre, c.apellido, c.saldo); 
   }

   int main (){
    imprimir_datos (&c1);   
    return 0;
 
   }

   ```
   
   De modo que la estructura c1 no se tiene que copiar. 

   Solo se copia su dirección de memoria y la función puede entrar. 

   No compilará dado que pasamos variables por copia. 
 
   Si queremos acceder a los campos de una estructura que hemos pasado por puntero. 


   1. Desreferenciando el puntero: 
   
    conseguir un estructura normal: struct cuenta c

    después accedemos a los campos que nos interezan: c.nombre, c.apellido y c.saldo. 
       
     parentesis, asterisco parametro: 

      (*c).nombre, (*c).apellido, (*c).saldo


   2. Usar flecha para desreferenciar: 

    Evita que pongamos muchos parentesis de parentesis. 

    Cambiamos el punto por una flecha. 

    c->nombre, c->apellido, c->saldo

   
   Cuando nos pasen un puntero (*c)

   Con la fecla podemos desrefernciar el puntero y después ver el valor de un campo.


   ```
   #include <stdio.h>  
   #include <string.h>
   
   struct cuenta {
    char nombre[30]; 
    char apellido[40]; 
    int identificador; 
    int saldo; 
   };  

   void imprimir_datos (struct cuenta *c) {
    printf("El cliente %s $s tiene $d euros en cuenta.\", c->nombre, c->apellido, c->saldo); 
   }

   int main (){
    struct cuenta c1; 
    c1.identificador = 1235; 
    strcpy(c1.nombre, "Pepito"); 
    strcpy(c1.apellido, "Pérez");
    c1.saldo = 400;
    
    imprimir_datos (&c1);   
    return 0;
 
   }

   ```



|| Union, enum y typedef

 Son estructuras para organizar datos. 

 
 Union: 

  Son como las structs, organizan datos relacionados. 

  En este caso todos los campos que tengan una unión comparten la misma dirección de memoria. 

  1. Definición: 

   tipo union, su nombre y al final punto y coma. 

   union mi_union_t{
    //nombres de campos, lo mismo que estructura.  

    int entero; 
    float flotante;     
   
   };
  
   La diferencia que en la estructura cada uno de sus campos era una variable en su propia dirección de memoria. 

   en el caso de las uniones, todas las variables apunta a la misma dirección de memoria. 

   Ej: los bits que haya en la variable entero van a ser lo mismos que haya en la variable flotante. 

   Como los tipos no coinciden, podemos acceder al mismo contenido de memoria de varias formas distintas. 

   Ej: Instanciamos la union definida. 
   
   Le ponemos tipo union y el nombre de unión definida fuera de main. 

   Mas el nombre de la instancia. 

   
   ```
   union mi_union_t {
    int entero; 
    float flotante; 
   }; 

   
   int main(){
    union mi_union_t u {
     
    }
   }

   ```
  
  2. Después le asignamos valores: 
   
   lamamos a la instancia y le asignamos un valor a un campo de la union definida

   u.entero = 123456789; 

   ```
   union mi_union_t {
    int entero; 
    float flotante; 
   }; 

   
   int main(){
    union mi_union_t u; 
    u.entero = 123456789; 
    printf("entero = %d\n", u.entero); 

    return 0; 
   
   }

   ```   
   Todo esto como en struct. 
  
   u.entero = 123456789; 
   u.flotante = 2.54E6; //elevado a 6
   printf("entero = %d\n", u.entero); 

   Ahora si le damos un valor a otro campo. 

   Como comparten dirección de memoria, se va a modificar el anterior. 

   Ya no se va a imprimir el numero contenido en entero. 
   
   ```
   salida: Entero = 1243285376
   
   ```  
 
   Esto se termina pareciendo a un casteo. 

   Las uniones se usan en circunstancias precisas como pueden ser en sistemas embebidos para convertir variables de 32bits en 16. 

   O para simular orientación a objetos en C. 

   
 Enumeradores/Enum: 

  Sirven para construir un conjunto de identificadores. 

  Ej, si queremos construir una serie de identificadores para presentar los dias de la semana.   

  Para utilizar en variables. 

  Si guardamos una variable que represente a un mes: 

   int mes = 6; //junio 
    
   o

   int dia = 1; //lunes

  Nos encontramos con nombres pocos significativos en relación con su contenido. 


  Los enumeradores nos permiten asignar constantes a gran escala. 

  Definimos una serie de identificadores en un conjunto y todo ello sirve para identificar una serie de valores.

  ```    
  #include <stdio.h>

  enum diasemana {LUNES, MARTES, MIERCOLES, JUEVES, VIERNES, SABADO, DOMINGO}; 

  int main (){
   enum diasemana dia;
   dia = LUNES; 
   printf("%d\n", dia); 

   return 0; 
  }  

  ```
 
  Con esto tenemos una variable llamada dia que es de tipo enumerador. 
  
  Los enumeradores no son más que constantes declarades de una mejor forma. 

     
  No podemos imprimir lo que vale en forma de string, el compilador lo convierte a numero. 

  Ej: dia = Lunes -> 0

  C asigna un numero a cada una de las variables y después lo va incrementando. 

  Si queremos que los identificadores de enum tengan un numero concreto podemos asignarle un numero en la estructura y despues se irá incrementando. 

  
  Ej: 
  
     enum diasemana {LUNES = 1, MARTES, MIERCOLES, JUEVES, VIERNES, SABADO, DOMINGO};   

 
  El tipo numerado no puede convertirse en string a menos que se cree una funcion. 

  Que a partir del numero asignado nos devuelva una cadena de caracteres. 
  
    

 typedef:

  Es otra construccion. 

  Tiene la capacidad de renombrar tipos de datos. 

  Con struct, enum, etc para poder trabajar con ellos. 

  Siempre tenemos que llamarlos por su tipo y nombre. 

  Y después crear la var o estructura. 

  Con typedef podemos ahorrarnos todo esto, además de hacer otras cosas.  


  ```
  #include <stdio.h>
  #include <string.h>

  enum tipo_empleado { Analista, Programador }; 

  struct empleado_t {
   char nombre [20]; 
   char apellido[20]; 

   /*provervio: no guardes campos 
    *como teléfonos o números de DNI como int o long 
    *si no vas a usarlos para hacer operaciones matemáticas.*/
   char nif[10]; 
   char telefono[10]; 
   enum tipo_empeado tipo; 
  }; 

  void imprimir {struct empleado_t* empleado) {
   printf("%s %s\n", empledo->nombre, empleado->apellido);
   printf("DNI: %s\n", empleado->nif); 
   printf("Teléfono:%s\n", empleado->telefono); 
   if (empleado->tipo == Analista) {
    printf("Este empleado es un analista.\n"); 
   } else {
    printf("Este empleado es un programador.\n"); 
   }
  }

  int main() {
   struct empleado_t empl; 
   strcpy(empl.nombre, "Juan", strlen("Juan") + 1); 
   strcpy(empl.apellido, "Pérez", strlen("Pérez") + 1); 
   strcpy(empl.nif, "00000014Z", strlen("00000014Z") + 1); 
   strcpy(empl.telefono, "912345678", strlen("912345678") + 1); 
   imprimir(&empl); 

   return 0; 
  }

  ```
  
  Sintaxis de typedef: 

   Renombrar estructura: 

    Declaramos typedef para renombrar estructura empleado_t
    
     typedef    

    Después declaramos el tipo de dato que queremos renombrar

     typedef struct empleado_t

    Después escribimos como queremos llamar a la nueva estructura. 

     typedef struct empleado_t Empleado. 

    A partir de ahora podemos dejar de escribir struct empleado_t
   
     struct empleado_t Empleado -> Empleado
     

  ```
  #include <stdio.h>
  #include <string.h>

  enum tipo_empleado { Analista, Programador }; 

  typedef enum tipo_emmpleado Tipo; 

  struct empleado_t {
   char nombre [20]; 
   char apellido[20]; 

   /*provervio: no guardes campos 
    *como teléfonos o números de DNI como int o long 
    *si no vas a usarlos para hacer operaciones matemáticas.*/
   char nif[10]; 
   char telefono[10]; 
   enum Tipo tipo; 
  }; 

  typedef struct empleado_t Empleado

  void imprimir {Empleado* empleado) {
   printf("%s %s\n", empledo->nombre, empleado->apellido);
   printf("DNI: %s\n", empleado->nif); 
   printf("Teléfono:%s\n", empleado->telefono); 
   if (empleado->tipo == Analista) {
    printf("Este empleado es un analista.\n"); 
   } else {
    printf("Este empleado es un programador.\n"); 
   }
  }

  int main() {
   Empleado empl; 
   strcpy(empl.nombre, "Juan", strlen("Juan") + 1); 
   strcpy(empl.apellido, "Pérez", strlen("Pérez") + 1); 
   strcpy(empl.nif, "00000014Z", strlen("00000014Z") + 1); 
   strcpy(empl.telefono, "912345678", strlen("912345678") + 1); 
   imprimir(&empl); 

   return 0; 
  }

  ```

  También podemos renombrar otros tipo como int: 

   typedef int entero; 

   entero main(){}

  
  Precauciones con typedef: 
  
   Utilizandolo estamos pisando el espacio de nombres global. 
   
   Podemos tener una estructura y una union que se llamen igual

    struct empleado_t
  
    union empleado_t 
   
   Si usamos typedef no tendremos esa ventaja. 
 
   Las diferenciamos las palabras claves struct y union. 

   La palabra usada para typedef se convierte en una palabra reservada.    
     
 

|| Memoria Dinámica

 El objetivo es reservar memoria para los elementos que no conocemos su tamaño en tiempo de programación. 

 Ej: programa que cálcule estadisticas pero no conocemos cuantos elementos el usuario va a introducir. 

 Como los arrays de tamaño varible en c99. 

 Era pasarle una variable entero a un array vacío. 

 En vez de definir el tamaño de un array estaticamente. 

 ```
 int main(){
  float temperaturas[20]; 
 }

 ```
 Le pasamos una variable de tipo entero. 

 
 ```
 int main(){
  int i = 20; 
  float temperaturas[i]; 
 }

 ```

 Y de esta forma, pero usando una función podemos modificar i. 

 
 La memoria dinamica funcionará de una forma similar, es algo mejor. 

 Los VLAs solo están disponibles en c99, si programas en c89 no están disponibles. 

 En c89 se usa la memoria dinamica tradicional. 
 
 Otra desventaja de los VLAs frente a la memoria dinamica, es que estan almacenados en variables locales y quedan en la pila de la computadora (zona de memoria que se reserva para la pila). 

 Dado que son variables locales que ocupan memeria de la pila de la computadora, no pueden ser tan grandes dado que normalmente en un sistema operativo no se reserva tanto espacio para la pila como se reserva para otras partes. 

 Si son grandes pueden que fallen. 

 
 Todas las versiones de C incluyendo la versión ansi. 
 
 Pueden hacer uso de la memoria dinamica. 

 
 1. Incluir cabezera <stdlib.h>
  
  Tiene funciones para: 

  1. Construir una zona dinamica memoria. 

  2. Cambiar el tamaño de la zona de memoria dinamica. 

  3. Liberarla. 

  
  Un VLA muere cuando salimos de la funcion en la que lo hemos declarado, dado que no son más que variables locales.   
 
  La memoria dinámica la tenemos que gestionar manualmente. 

  Lo que incluye liberarla cuando no la necesitemos, para evitar colapsar la memoria en el programa. 
   

 2. Función malloc: 

  Para trabajar con la memoria dinámica. 

  Tiene un parámetro que es el que indica cuantos bytes queremos reservar para nuestro espacio de memoria y con ello nos devolverá un buffer que podemos guardar en una variable y poder acceder y guardar cosas a él 

  ```
  int main() {
   malloc() //void* malloc(size_t__size)
  }

  ```

  Ej: reservar memoria para un array de flotantes, como 4000 inicialmente, pero podría ser algo que le pidamos al usuario. 

  Resevar 4000: malloc(4000), variables flotantes. 

  Pero como son flotantes tenemos que tener en cuenta que ocupan más lugar. 

  No nos va a devolver 4000, nos va a devolver 1000 porque cada uno de sus flotantes ocupará 4 bytes. 

  Lo que tenemos que hacer siempres es multiplicar el número de elementos que queremos reservar por el tamaño del tipo de dato que queremos utilizar. 

  malloc(4000*sizeof(float)); 
  
  Lo hacemos incluso cuando no es necesario, por seguridad. 

  malloc() es una función que devuelve un puntero de tipo void

  Detras puede haber cualquier cosa y C no se hace responsable. 

  Entonces, para poder utilizarlo tenemos que convertirlo a un puntero que nosotros querramos manejar. 

  Como estammos trabajando con flotante, lo guardamos en una variable de tipo float puntero. 
  
  float* valores = malloc(4000 * sizeof(float)); 

  Hacemos un cast para que se pueda convertir de void a float y con esto estará listo para utilizar. 

  float* valores = (float*) malloc(4000 * sizeof(float)); 

  ```
  int main8) {    
   float* valores = (float*) malloc(4000 * sizeof(float)); 
  }
 
  ```

  Le podemos pedir al usuario cuanto quiere reservar. 

  ```
  int main8) { 
   printf("¿Cuántos elementos quieres almacenar? "); 
   int longitud; 
   scanf("%d", &longitud);
   
   float* valores = (float*) malloc(longitud * sizeof(float)); 
  }
 
  ```  
  El valor a reservar ya no será 4000, sino lo que el usuario introduzca. 
 

  Si hacemos un bucle que itera desde 0 hasta lo que introduzca el usuario, pasando por cada una de esas posiciones. 

  Y en cada una escribir los valores[i] = cifra. 

  ```
  int main8) { 
   printf("¿Cuántos elementos quieres almacenar? "); 
   int longitud; 
   scanf("%d", &longitud);

   float* valores = (float*) malloc(longitud * sizeof(float)); 
   int i;  
   for (i = 0; i < longitud; i++) {
    valores[i] = 5.55E5; 
   }   
   printf("Todo está correcto."); 
   
   return 0;   
  }
  
  ```
  Si introducimos en la consola como si fuesemos el usuario: 
  50000 //reservar 50 mil flotantes. 
  No es posible que falle a menos que tengamos muy poca memoria. 
  
  salida: todo está correcto. 

  Serán posiciones de memoria que podemos usar para lo que queramos. 

  
  Malloc puede fallar si le intentamos pedir más memoria de la que tiene el ordenardor. 

  No habrá sitio para tanto buffer. 

  Cuando falla, devuelve un NULL, por lo que lo recomendable es que nos haya devuelto no sea un NULL. 
  
  Si nos devuelve NULL, algo ha salido mal y es un error que tenemos que tratar. 
  
  Le damos una advertencia al usuario cuando quiera almacenar más memoria de la que tenga la computadora. 

  ```  
  int main8) { 
   printf("¿Cuántos elementos quieres almacenar? "); 
   int longitud; 
   scanf("%d", &longitud);

   float* valores = (float*) malloc(longitud * sizeof(float)); 
   if (valores == NULL) {
    printf("No tienes tanta memoria.\n") ; 
    return 1; 
   }
   int i;  
   for (i = 0; i < longitud; i++) {
    valores[i] = 5.55E5; 
   }   
   printf("Todo está correcto."); 
   
   return 0;   
  }

  ``` 

  Podriamos buscar alternativas o que el usuario reserve un array más pequeño. 
 
  
 3. Liberar memoria usada por malloc: 
  
  Cuando vayamos a dejar de utilizar una zona de memoria reservada con malloc. 
  
  Podemos usar la funcion free(). 

  Tiene como parametro un puntero al buffer que querramos eliminar. 

  free() //void free(void* __ptr)

  free(valores); 

 
  Cuando hayamos llamado a free, no podemos esperar que el array valores contenga valores utiles. 

  Después del free() no se puede utilizar la variable valores a no ser que vayamos a usar valores nuevos. 

  Si intentamos acceder después de un free() puede fallar el programa. 

  
  ```  
  #include <stdio.h>
  #include <stdlib.h>
  
  int main8) { 
   printf("¿Cuántos elementos quieres almacenar? "); 
   int longitud; 
   scanf("%d", &longitud);

   float* valores = (float*) malloc(longitud * sizeof(float)); 
   if (valores == NULL) {
    printf("No tienes tanta memoria.\n") ; 
    return 1; 
   }
   int i;  
   for (i = 0; i < longitud; i++) {
    valores[i] = 5.55E5; 
   }   
   printf("Todo está correcto."); 
   free(valores);    

   return 0;   
  }

  ```



|| Preprocesador

 Es una de las partes para que pueda funcionar un programa en C. 

 Hay acciones bajo el capo que hace el compilador gcc o c. 
  
 
 Al construir un binario (no la ejecución del programa). 

 Se invoca al compilador gcc, para compilar el programa. 

 Para construir un binario ocurren etapas por detras. 

 
 Una de las primeras es invocar un programa llamado preprocesador. 

 Recibe el contenido del archivo.c, lo procesa y hace algunas cosas para modificarlo. 

 Para hacerle el trabajo más facil al compilador gcc. 

 
 El programa gcc tiene varias etapas. 

 Una de ellas es procesar el archivo como se menciona anteriormente. 

 Le quita parte del lenguaje 'humano' como comentarios, espacios innecesarios para que sea menos probable un fallo en el compilador. 

 
 Una de las primeras acciones es procesar las sentencias del procesador. 

 Son las cabezeras que definen las funciones integradas en C. 

 Como #include <stdio.h>, <strlib.h> o <string.h>. 

 
 El preprocesador va leyendo linea a linea el contenido del archivo y a partir de lo que lea influirá como se comportará a partir de ese momento. 

 Lo que le digamos al preprocesador afectan lo que le digamos a partir de ese instante. 

 Por eso #include se llama desde la primera linea para poder usar todas las funciones nativas de C desde el primer momento. 


 #include es una sentencia para importar archivos y le damos como parámetro el archivo a importar. 

 Incluso podemos ir al archivo y ver que tiene, por ej: <stdio.h>. 

 Lo copia tal cual en nuestro proyecto, pero sin mostrar las definiciones y todo el código. 

 
 Los simbolos <> sirven para buscar el archivo en una dirección fija (será usr/include/stdio.h). 

 Es donde están las fuentes de la libreria estandar del compilador. 

 
 En windows estará en vs o dónde se encuentre el compilador. 
 
 
 Los simbolos " " sirven para cargar archivos de manera relativa. 

 Espera que el archivo se encuentre en la ruta pasada. 

 Ej: #include "stdio.h", espera que el archivo stdio.h se encuentre en la raíz. 

 
 La directiva #define es la segunda más importante. 

 Define constante en algunos casos pero relamente define sustituciones. 

 #define tiene dos parámetros: X Y. 

 X es un identificador que queramos crear, no tiene nada que ve a los identificadores de variables. 
 
 Solamente lo va a utilizar el preprocesador. 

 El parametro Y especifica el valor de X. 

 Ej: podríamos tener un #define LIMITE 100. 

 Fucionamiento: a partir del momento que el preprocesador lee a 'define', la va a sustituir por el valor dado, o sea; 100. 

 Si tenemos un programa como: 

 ```
 #include <stdio.h>

 #define LIMITE 100

 int main(int arc, char** argv) {
  printf("El limite es %d\n", LIMITE); 
  printf("Hola\n"); 
 
  return 0; 
 }
  
 ```
 salida: El limite es 100

 El efecto no se debe porque hayamos declarado una variable. 

 El preprocesador primero borra define al compilar. 

 Y luego cuando vea LIMITE va a cambiarlo por su valor 100. 


 Nada nos impide poner el define en cualquier parte del programa.  

 ```
 #include <stdio.h>

 int main(int arc, char** argv) {
  #define LIMITE 100
  printf("El limite es %d\n", LIMITE); 
  printf("Hola\n"); 
 
  return 0; 
 }
  
 ```
  
 Hasta que el preprocesador no llegue a la linea de define no lo va a procesar. 
 
 Tampoco va a ser nada con las instrucciones anteriores. 
 
 Pero es buena practica poner los #define al principio. 


 Las sustituciones de define no solo valen para variables, sino para cualquier cosa. 

 Puede ser peligroso. 

 Ej: Para que un programa compile tiene que haber una funcion main(). 

 Dado que es la primera que busca el programa para ejecutar. 

 Si hacemos int principal() en vez de main() no compilará. 

 Pero si hacemos #define principal main

 ```
 #include <stdio.h>
 #define LIMITE 100
 
 #define principal main

 int principal(int arc, char** argv) {
  printf("El limite es %d\n", LIMITE); 
  printf("Hola\n"); 
 
  return 0; 

 ```
 Va a compilar. Mostrar que el limite es 100.

 Se puede llegar al punto de reescribir c y hacer cosas que no se debería. 

 
 Directiva #undef, sirve para desdefinir. 

 Ej: si ponemos dos veces la misma linea de código. 

 ```
 #include <stdio.h>
 #define LIMITE 100
 
 int main(int arc, char** argv) {
  printf("El limite es %d\n", LIMITE);

  printf("El limite es %d\n", LIMITE);  
  printf("Hola\n"); 
 
  return 0; 

 ```
 
 Se imprime dos veces el limite 100. 
 
 Si ponemos #undef LIMITE entre medio de las dos. 

 ```
 #include <stdio.h>
 #define LIMITE 100

 int main(int arc, char** argv) {
  printf("El limite es %d\n", LIMITE); 
  #undef LIMITE
  printf("El limite es %d\n", LIMITE);  
  printf("Hola\n"); 
 
  return 0; 

 ```

 Va a quitar la segunda.  
 
 Se va a olvidar de la sentencia #define LIMITE 100 que habiamos puesto al principio. 


 Si creamos un #define sin especificar por que lo queremos sustituir

 #define HOLA

 No escribimos el segundo parametro de define. 
 
 ```
 #include <stdio.h>
 #define LIMITE 100
 #define HOLA
 #define principal main

 int principal(int arc, char** argv) {
  printf("El limite es %d\n", LIMITE); 
  #undef LIMITE
  printf("El limite es %d\n", LIMITE);  
  printf("Hola\n"); 
 
  return 0; 

 ```

 En la lista de cosas definidas por el preproceador, va a registrar HOLA. 
  
 Sirve para otras herramientas de preprocesador como ifdef. 

 Son condicionales de preprecesador. 

 Va a llevar a cabo una acción según una condición. 

 
 Macros en #define: 

  Ej: una funcion para definir el alto y el ancho para poder sacar el área. 
  
  ```
  #include <stdio.h>
  
  int area_rectangulo (int ancho, int alto) {
   return ancho*alto; 
  }

  int main () {
   int ancho = 5, alto = 4; 
   printf("El área de un rectángulo %d x %d = $d.\n", 
    ancho, algo, area_rectangulo(ancho, alto)); 
   
   return 0; 
  }

  ```

  Esto para un procesador pequeño poco potente puede resultarle pesado ejecutar la funcion. 

  Dado que esta moviendo en zonas de memoria, pasar parámetro de un lado hacia otro.  

  introduce una pequeña sobrecarga que obliga alojar o desalojar variables. 

  
  Entonces para cálculo muy pequeños que se van a repetir mucho. 

  Nos puede interesar en vez de crear una función. 

  Crear una macro con #define. 

  Es una especie de sustitución parametrizada utilizando #define. 

  En vez de darle un valor le pasamos parámetros. 

  Los paŕametros no tiene tipo. 
    
  En otro parentesis hacemos el cálculo con estos parámetros. 

  ```
  #include <stdio.h>
  
  #define AREA_RECTANGULO(x, y) (x*y)

  int main () {
   int ancho = 5, alto = 4; 
   printf("El área de un rectángulo %d x %d = $d.\n", 
    ancho, alto, AREA_RECTANGULO(ancho, alto)); 
   
   return 0; 
  }

  ```
  
  El preprocesador va a sustituir cada llamada a la macro AREA_RECTANGULO

  Por el cálculo entre parentesis, pero cambiando las variables por las mencionadas en main. 

  Al llamar a AREA_RECTANGULO en main, el preprocesador se da cuenta y cambia alto, ancho por x e y. 


  if, ifdef, elif, else y error: 

  #error: 

   Cuando el preprocesador se encuentra con esta sentencia lanza un error. 

   Ej: #error "No compiles esto"

   Da un error de compilación llamado "No compiles esto". 

   Forzamos al compilador a fallar en circunstancias que no interesen. 
   
   Razones para lanzar un #error. 

   Ej: condicional en preprocesador. 

   Los condicionales del preprocesador afecta al código que le entra al compilador 

   Si hay un condicional que no se cumple ni siquiera se compila, no es código que se resuelve en tiempo de ejecución.  
   
   Es código que se resuelve en tiempo de compilación. 

   ```
   #include <stdio.h>
   
   #define LIMITE 80
  
   int main() {
    
   #if LIMITE < 50
    printf("Limite por debajo de 50\n"); 

   #elif LIMITE < 100

   #else
    printf("limite de 50 o por encima de 50\n."); 
  
   #endif
 
    return 0; 
   }

   ```
  
   Podemos hacer que un código se compile de acuerdo al valor de #define. 
   
   En este caso es #define LIMITE 80  
  
   El compilador en función de lo que valga LIMITE nos va a seleccionando la instrucción que va a compilar. 

   Es para reducir el tamaño de la app, quitando características que no necesitamos. 


 
   Con elif tambien podemos comprobar si una variable se ha declarado 
   
   #if defined ()

   defined es una macro (func) que sustituye automaticamente el preprocesador. 

   
   
   ```
   #include <stdio.h>
  
   #define PREMIUM
   
   #define LIMITE 80
  
   int main() {
    
   #if defined (PREMIUM)
    printf("Estas usando la version premium\n"); 

   #else
    printf("Estas usando la version gratuita\n."); 
  
   #endif
 
    return 0; 
   }

   ```

   Si quitamos #define PREMIUM, nos va a decir que estamos usando la version gratuita. 

   Para hacer esto mas corto, podemos usar #ifdef PREMIUM
  
   Hace lo mismo con una sintaxis más corta


   Como tenemos un #ifdef, tambien tenemos un #ifndef. 

   #ifndef niega las definiciones. 
  
   Si definimos #define SUPER_PREMIUM no se compila el código de #ifndef. 
   
   Si quitamos #define SUPER_PREMIUM se compila #ifndef
   
   ```
   #include <stdio.h>
  
   #define PREMIUM
   #define SUPER_PREMIUM
   
   #define LIMITE 80
  
   int main() {
       
   #ifndef SUPER_PREMIUM  
    printf("No tienes la superpremium\n");  
  
   #indif

   #if defined (PREMIUM)
    printf("Estas usando la version premium\n"); 

   #else
    printf("Estas usando la version gratuita\n."); 
  
   #endif
 
    return 0; 
   }

   ``` 
  
   El código de preprocesador no se puede quitar en tiempo de ejecución. 

   Solo antes de compilar y crear el binario del programa.   
 


|| Prototipos

 Al lenguaje C le tiene que decir o definir las cosas antes de usarlas en la función main. 

 Si ponemos las funciones normales antes de usarlas en main, las va a leer y ejecutar. 

 Si ponemos main primero antes que las funciones normales, será más comodo de leer dado que pasa a estar arriba, pero no va a funcionar. 

 
 Los prototipos permiten decirle a C las funciones que vas a usar antes de que las lea. 

 C entiende que hay una declaración pero no está la implementación. 
 
 ```
 #include <stdio.h>

 int suma (int a, int b); 

 int main() {
  int a = 5, b = 4; 
  int resultado; 
  resultado = suma (a, b); 
  printf("%d + %d - %d\n", a, b, resultado); 

  return 0; 
 }

 int suma (int a, int b) {
  int x; 
  x = a + b; 
  return x; 
  
 }

 ```
 
 Cuando finalmente lee la función suma, el prototipo se completa con la implementación. 

 
 Enlazador en C: 
   
  Es una parte del compilador, su tarea es unir todas las funciones. 

  El proceso de llamar una función a otra no se cierra hasta que no se ejecuta el enlazador. 

  El compilador lo primero que hace es tomar el código de las funciones y convertirlo a código maquina. 

  En el compilador quedan las funciones con 0s y 1s, el enlazador va a tomar estas para unirlas. 

  Cuando llamamos a una función que no está declarada o definida, el enlazador no puede unir esa llamada con su definición, no podrá encontrarla y va a dar error en el compilador. 
  
  Los protipos hacen que el compilador reconozca funciones así el enlazador las puede cerrar. 

 
 Los prototipos toman importancia cuando se modulariza la aplicación. 

 

|| Recursividad

 Cuando una función en lugar de llamar a otra se llama a si misma. 
 
 Debemos poner un tope en su llamada, para que deje de llamarse a si misma. 

 Si no el programa caera en un bucle infinito, no volverá a su control. 

 Cuando llegue al limite de memoria de la computadora el programa se cerrará o dejará de responder. 


 Ej: función "a" que llama a "a". 

 ```
 a(x) {   //parametro x
   
   a(...) //parametro base/inicial
 }

 ```

 El topo sería un valor inicial. 

 Es una situación en la cual se detecta un parametro x con un valor concreto,

 Se hace un return antes de llamarse recursivamente. 

 
 Al llegar al valor inicial, se hace un return, se llama recursivamente y vuelve hacia arriba. 

 Entonces una función recursiva ejecuta sus instrucciones hasta llegar al caso inicial (bajando). 

 Al llamarse recursivamente sube y vuelve a ejecutar las instrucciones, así sucesivamente. 

 
 Acceder al valor inicial: 

  El valor del parametro x es distinto al valor del parametro inicial. 

  Ej: factorial de un numero. 

  x! = x-1! * x 
  
  5! = 1 * 2 * 3 * 4 * 5  
 
  o
   
  5! = 4! * 5
 
  Vemos que una función factorial está llamando a la función factorial dentro. 

  4! = 1 * 2 * 3 * 4

  4! = 3! * 4

  3! = 1 * 2 * 3 

  3! = 2! * 3

  2! = 1 * 2

  2! = 1! * 2

  1! = 0! * 1
    
   0! = 1 

  1! = 1 
 
 
 Entonces, recursivamente el valor inicial es 1 

 5! = 4!*5
 4! = 3!*4
 3! = 2!*3
 2! = 1!*2
 1! = 1

 El factorial de 5, necesita el de 4, etc. 

 baja: 5 4 3 2 1
 sube: 1 2 3 4 5 
      
 Al llegar al último podemos dar salida a la función recursiva. 

 ``` 
 #include <stdio.h>

 int factorial (int x)

 int main () {
  printf("Factorial: %d\n", factorial (5)); 

  return 0; 
 }

 int factorial (int x) {
  return x * factorial (x-1);   
 }

 ```
 
 5! = 4!*5
 ...
 x! = (x-1)!*x

 Pero nos falta el valor inicial 


 ``` 
 #include <stdio.h>

 int factorial (int x)

 int main () {
  printf("Factorial: %d\n", factorial (5)); 

  return 0; 
 }

 int factorial (int x) {
  if (x == 1) {
   return 1; 
  } else {
   return x * factorial (x-1);
  }
 
 }

 ```

|| Tipos de Datos Opacos


 
  



......

C89



|| Comenetarios

 Buenos comentarios documenta bien el código para explicar qué es lo que hace.   

 También demuestra el nivel de entendimiento del mismo. 

 Para un desarrollo se prefiere varias lineas y para algo especifico se usa el comentario de una linea. 

 Una linea: //

 Varias lineas: /* */ 



|| Función main 

 El la primerá que buscará el sistema operativo para ejecutar el programa. 

 Main puede tomar parámetros como int argc, char* argv[] para cuando ejecutemos el programa desde el sistema o la linea de comandos y pasarle valores para que haga cosas especificas. 
 
 Dado que las computadoras trabajan con bits, los tipos de datos indican que significa esos bits, entidad o clasifican esos bits; como int será un número, float será un decimal, char será un caracterer y void será nada.

 Int usa 32 bits en plataformas de 32 bits o x86. 

 Los tipos de datos tiene sus tamaño. 

 Las instrucciones son sentencias que pueden ser de varios tipos y terminan en punto y coma (;). 

 El punto y coma separa las instrucciones para que el compilador se de cuenta dónde termina una y otra. 

 La palabra return se usa para indicar que termina una función. 

 Cuando una función llegue a return, terminará la ejecución de la función actual y volver a la función anterior. 

 En cado de main, el return termina de ejecutar main y le devuelve el control al sistema operativo. 

 A la función main la llamó el sistema operativo, por eso, cuando termina, vuelve el control a él. 

 En funciones normales, return devolverá el controla a a función que haya llamada a la función actual. 

 Si una función es de tipo int, el retorno tendrá que ser un valor entero entre 0 y 2 mil millones en una plataforma de 32 bits. 

 
 Proceso: 

  Al compilar el programa con la función main, se creará un binario ejecutable. 

  Si lo ejecutamos, el sistema operativo buscará a main, lo ejecuta y al terminar, la función main le devuelve el control al sistema. 

 
 ```
 int main(){
  return 0; 
 }

 ```



|| Programación estructurada

 Un paradigma es al filosofía que se usa para desarrollar un programa. 

 Como la programación imperativa, declarativa, objetos, estructurada o funcional. 

 La programación imperativa se basa en hacer cambios de estado en el programa. 

 La declarativa no hace cambios de estado, se lo encarga al sistema. 

 En objetos se representarán todos los elementos de un programa, interactuarán entre si. 

 En estructurada se implementarán los programas usando bloques de código fijos que tendrán variables, datos, etc. 

 En funcional se divide los programas en modulos que se llaman unos a otros. 

  
 Dadas las características de C, se pueden aplicar los paradigmas imperativo, funcional y estructurado.

 
 Imperativo: 
 
  Se basa en cambios de estado. 
  
  Por medio de instrucciones secuenciales: 

   Cada instrucción modifica un dato. 

   El conjunto de los datos es el estado. 
  
  Se usan variables para guardar los datos:  
 
   Tendrán memoria reservada y una dirección para encontrarla. 

  
  Se puede ver como una receta que nos dice que hacer en cada paso.
  
  A medida que avanzamos vemos los diferentes estados, combinaciones, cambios. 

  
 Funcional: 
  
  Anidación de código en funciones. 

  Funciones: bloques que contienen código. 

  Una función llama a otra, y a otra, y a otra sucesivamente. 
 

 Estructurado: 

  Instrucciones que hacen cosas diferentes. 

  Tres tipos de instrucciones: 

   Sentencia (asignación): 

    Asignar datos a variables. 

   Condicional (decisión): 

    El sistema se encarga de elegir cual instrucciones de código ejecutar. 

    Ej: bifurcación, selección. 

   Iteración (repetición): 
   
    Momento en el que el programa repite una serie de instrucciones una y otra vez hasta que sucede una determinada condición. 

    Ej: desde, mientras, hasta
 


|| Funciones

 Podríamos aplicar cosas como estas, aunque no fueran estandar. 

 ```
 int main () {
  return 4; 

  x = main(); 
 }

 ```  
 
 main va a devolver 4 y x va a haceptar un número. 

  
 Funcion suma: 
 
  Va a tomar dos números y va a devolver su suma. 

  Usamos los parámetros y tipos de retorno. 

  Si es una suma, el tipo de dato debe ser igual que los operandos. 

  Podemos hacer una suma de enteros. 
  

  ```
  int suma (int a, int b) {
   int x; 
   x = x+b; 
   return x; 
  }

  ```  
  Crea variable x, guardará el cálculo y retorna x. 

  Dependiendo de cuan complejo es el cálculo de una función podemos desarrollarlas con distintas prácticas. 

  Si el cálculo es simple y se sobreentiende con el identificador, a los parámetros le damos un nombre simple. 

  También podemos hacer el cálculo en el return, sin variable local que lo guarde. 

  Si es más complicado, usamos parámeros y variables locales significativos. 

  Usamos una variable para guardar el resutaldo y se la pasamos a return. 

   
 Invocar funciones: 

  La invocamos ejecutandola en el main. 
 
  ```
  int suma (int a, int b) {
   int x; 
   x = x+b; 
   return x; 
  } 

  int main(){
   int a = 5, b = 4; 
   int resultado; 
   resultado = suma(a, b); 

   return 0; 
  }
 
  ```   
  
  Declaramos y asignamos variables en main para pasarlas como argumento. 

  Declaramos una variable para guardar un resultado. 

  Asignamos a esa variable el resultado de llamar a la función suma. 

  La lista de parametros tiene que ser la misma que en la definición de la función. 

   
  Así como las prácticas para definiciones pueden ser unas u otras, dependiendo de lo que tenemos que hacer. 

  Para invocarlas también pasa algo parecido. 

  Incluso se puede calcular directamente en un print como podemos calcular en un return. 

  Hacer esto tiene sus consecuencias. 

  
  Cuando en main llega a resultado, como es una asignación de función, se empieza a ejecutar la función. 

  Se pasa los operandos/parámetros definidos en main. 

  Se declaran o ejecutan las cosas definidas en la función. 
  
  Como x; x = x+b, return x. 

  a + b; es 5 + 4, etc. 

  Retorna x que vale 9. 

  El retorno de la función equivale a la función suma. 

  Se guardará 9 en la var resultado del main. 

  
  Si planteamos prints como forma de depuración, vemos que está sucediendo en cada paso. 

  ```
  int suma (int a, int b) {
   int x; 
   x = x+b; 
   return x; 
  } 

  int main(){
   int a = 5, b = 4; 
   int resultado; 
   resultado = suma(a, b); 

   printf("%d + %d = %d\n", a, b, resultado); 

   return 0; 
  }
 
  ```    
   


|| Arrays

 Son muchas variables bajo un mismo identificador. 
 
 Cada variable estará en una posición. 

 Se accede mediante la posición i: v[i]

 Se asigna: v[i] = x

 Si guardamos números, su tipo será int[]. 

 Si guardamos caracteres, será char[]. 
  
 Definir y dar tamaño: int v[8]

 
 ```
 #include <stdio.h>
  
 int main() {
  int i = 1; 
  int v[10]; 

  v[0] = 5; 

  return 0;   
 }

 ```

 En main declaramos e inicializamos un entero i = 1. 

 Declaramos un vector con 10 posiciones.  

 Podemos asignar un valor a una posición como v[0] = 5;  
 

 Crear un bucle for: 
  
  Para recorrer cada una de las posiciones (v[10]). 

  Creamos otra variable j = 1.
  
  Para seguir el estandar c89.  

  Guardamos en cada posición j y luego multiplicamos j*3. 

  ```
  #include <stdio.h>
  
  int main() {
   int i, j = 1; 
   int v[10]; 

   for(i = 0; i < 10; i++) {
    v[i] = j; 
    j *= 3; 
    
   }

   for(i = 0; i < 10 ; i++) {
    print("v[%d] = %d\n", i, v[i]); 
   }

   return 0;   
  }
 
  ```   
  
  Empezamos el for en 0, para acceder a la posición v[i].

  Recorremos hasta 10, aumentamos la posición cada vez que se llega al final de las instrucciones. 

  Para cada valor de i (v[i]) será j. 

  Luego operamos j. 

  Imprimimos sus valores, con otro for. 

  Emprimimos la posición i del vector v[%d] y el valor del vector. 

 
 Cadenas de carácteres: 
   
  Podemos guardar indidualmente un caracter. 

  char k = 'x'; 

  O podemos hacer un vector de carácteres para guardar cadenas. 

  char[20] = "a, b, c, d";

  Las cadenas son un conjunto de caracteres.      

  Podemos declaralos de forma dinámica usando otra variable o entrada de usuario. 

  O de forma estática dandole nosotros un tamaño.  

  Ej: vector de caracter (cadena) estática: 
  

  ```
  #include <stdio.h>

  int main() {
   char nombre[20] = "Bob"; 

   return 0; 
  }

  ```
 
  En este ejemplo de decimos cuantos caracteres va a tener o guardar la cadena nombre.  
  
  C va a guardar cada letra en una posición, desde 0 a v[i]-1 .
 
  en p0 = B, p1 = o y p2 = b; como no ocupamos todas las posiciones. 
 
  v[0] = B, v[1] = o, v[2] = b; en este caso sería nombre[0] -> B. 

  C, en la p3 o v[3] va a guardar un carácter/número especial que es el 0. 

  v[3] = 0; represeta el limite de la cadena. 

  
  Podemos acceder a los valores individualmente o usando un bucle. 

  nombre[0] -> B

  o usando nombre[i] con un for, el valor de i se lo dará el bucle. 

  ```
  #include <stdio.h>

  int main() {
   char nombre[20] = "Bob"; 

   int i; 
   for(i = 0; i < 3; i++) {
    printf("nombre [%d] = %c\n", i, nombre[i]); 
   }  

   return 0; 
  }

  ```  
  Cada vuelta del for imprimirá el valor que hay en la posición i. 

  Imprimirá posición y valor. 
 
  
  También podemos mostrar en pantalla la palabra completa. 

  Usando el for y quitando salto de linea para cada vuelta. 

  ```
  #include <stdio.h>

  int main() {
   char nombre[20] = "Bob"; 

   int i; 
   for(i = 0; i < 3; i++) {
    printf("%c\n", nombre[i]); 
   }  

   return 0; 
  }

  ```     


  Para mostrar de forma eficiente una cadena lo hacemos con print: 

  Además de print necesitamos un escape %s. 

  ```
  #include <stdio.h>

  int main() {
   char nombre[20] = "Bob"; 

   int i; 
   for(i = 0; i < 3; i++) {
    printf("%s", nombre; 
   }  

   return 0; 
  }

  ```


 
|| Punteros 

 Otra de las estructuras de C. 

 Es una variable. 


 En una variable normal como i; puede tener un valor como i = 6.  

 Si accedemos a la variable llamando a i; accedermos a 6. 
  

 Memoria de la computadora: 

  Cada celda de memoria tiene una posición o dirección como 0, 1, 2, 3 o 0x1, 0x2, etc. 

  Si llamamos a una variable normal, nos referimos a su valor. 

  Con un puntero nos referimos a una posición de memoria en la que está la variable. 

  Entonces, un puntero almacena la dirección de la variable. 

  
 Declaración de punteros: 

  Tambien se debe especificar su tipo de dato. 

  Una variable normal que guarda un entero sería: int i; 

  Un puntero que guarda una dirección de un entero sería: int* p; 


  Si definimos una variable normal:  int i; 
  
  Y un puntero: int* p; 

  Podemos almacenar en i:  i = 6; 

  Con el puntero p, podemos guardar la dirección de memoria en la que está el valor de i. 

  Mediante el simbolo & (dirección de memoria de...). 

  Apuntamos a la posición de memoria de i. 

  p = &i. 

  ```
  int i;
  i = 6; 
  
  int* p; 
  p = &i; 
    
  ```
 
  P = direccion de memoria
  p no será valor de i. 

   
  Ahora para acceder al contenido del puntero o la dirección de memoria. 

  Usamos otra vez, *; pero a la izquierda del puntero. 

  *p. 

  Devuelve lo que hay en la posición de memoria P.   

  ```
  int i;
  i = 6; 
  
  int* p; 
  p = &i; 
  
  *p;    
 
  ```

  Entonces: 

  ``` 
  int i; //variable i
  int *p; //variable puntero que apunta dir memo entero

  i // nos devuelve variable int
  &i // nos devuelve variable int puntero: int*

  p // nos devuelve int*
  *p // nos devuelve int
  ```

 Ejemplos: 
 
 ```
 #include <stdio.h>
 
 int main() {
  int i; 
  int *p; 

  return 0; 
 }

 ```
 
 Declaramos una variable i. 
 
 Declaramos variable de tipo puntero p. 


 Si le damos valor a i: 

 ```
 #include <stdio.h>
 
 int main() {
  int i = 5; 
  int *p; 

  return 0; 
 }

 ```
 
 Si en p queremos guardar la posición de memoria de i. 

 Le asignamos a p, &i. 

 p = &i; 

 ```
 #include <stdio.h>
 
 int main() {
  int i = 5; 
  int *p; 

  p = &i; 

  return 0; 
 }

 ```

 Podemos imprimir está dirección o posición como una variable normal. 
 
 Usamos el escape %p.  

 ```
 #include <stdio.h>
 
 int main() {
  int i = 5; 
  int *p; 

  p = &i; 
  printf("%p\n", p); 

  return 0; 
 }

 ``` 

 
 Acceder al valor del puntero: 

  Podemos desreferenciar el puntero. 
  
  Usamos *p. 

  Al imprimirlo tenemos que cambiar el escape. 

  Ya que no vuelve a ser un puntero, es un entero. 

  Usamos el escape %d. 

  ```
  #include <stdio.h>
 
  int main() {
   int i = 5; 
   int *p; 

   p = &i; 
   printf("%d\n", *p); 

   return 0; 
  }

  ``` 

  Imprime el valor entero que hay en la posición de memoria que apunta a p. 
  
  Va a imprimir el valor 5.   

  
  Alternativamente si queremos la dirección de memoria del valor. 

  Podemos usar &i un print: 

  Usamos el escape del puntero: %p 

  ```
  #include <stdio.h>
 
  int main() {
   int i = 5; 
   int *p; 

   p = &i; 
   printf("%p\n", &i); 

   return 0; 
  }

  ```   


 Acceder a posiciones de memoria no valida: 

  ```
  #include <stdio.h>
 
  int main() {
   int i = 5; 
   int *p; 

   p = &i; 
   printf("%d\n", *p); 

   return 0; 
  }

  ```  

  La variable puntero p guarda una posición de memoria. 

  Como es una variable y que además la posición de memoria es un número entero, podemos hacer operaciones. 

  Si modificamos su contendio, la posición de memoria, el programa fallará. 


  Como es una variable, podemos hacer operaciones como: 

  ```
  #include <stdio.h>
 
  int main() {
   int i = 5; 
   int *p; 

   p = &i; 
   printf("%d\n", *p); 

   return 0; 
  }

  ```  
  
  p apunta a dirección de i, i tiene 5. 

  Cuando imprimimos la desreferencia al puntero, nos da el valor de i, 5. 

  
  Si hacemos p++ (aumentando o cambiando la dirección del puntero)
  
  Y despues imprimimos la desreferencia nos muestra un valor que no va a ser el 5 de la variable i. 

   ```
  #include <stdio.h>
 
  int main() {
   int i = 5; 
   int *p; 

   p = &i; 
   p++;
   printf("%d\n", *p); 

   return 0; 
  }

  ```

  Como detalle, no podemos siquiera imprimir el entero, usando el escape %d.

  Tenemos que usar %p para poder imprimir un puntero. 

  Además tenemos que cambiar la desreferencia *p por el puntero p. 

  ```
  #include <stdio.h>
 
  int main() {
   int i = 5; 
   int *p; 

   p = &i; 
   p++;
   printf("%p\n", p); 

   return 0; 
  }

  ```
  
  Ahora al querer imprimir el valor de i con el escape y la desreferencia: 
  
  ```
  #include <stdio.h>
 
  int main() {
   int i = 5; 
   int *p; 

   p = &i; 
   p++;
   printf("%d\n", *p); 

   return 0; 
  }

  ```

  En la posición de memoria nueva está un valor de una dirección de memoria que no deja de ser un entero. 

  Intentará devolver el valor de la dirección de int *p. 


  Si hacemos una operación como: 

  ```
  #include <stdio.h>
 
  int main() {
   int i = 5; 
   int *p; 

   p = &i; 
   p = p + 150; 
   printf("%d\n", *p); 

   return 0; 
  }

  ```
  
  p intenta guardar su posición o valor de memoria + 150. 

  Accede a valores que no se sabe que contenido puede tener. 

 
  Cuando el sistema operativo detecte que queremos acceder a una posición no valida dado que no nos reservó, nos cerrá el programa que estamos cerrando. 

  Nos dará un fallo como 'Acceso a memoria o segmento no permitido o ilegal', dependiendo del sistema operativo. 

 

|| Parámetros argc y argv en Main 

 
 Si declaramos un vector de esta forma: int v[]. 

 No podemos darle valor de esta forma: v = 5. 
 
 Dado que v es un puntero a la posición de memoria dónde empieza el array. 

 Cuando accedemos a un valor del array: v[0]. 

 Estamos estamos desreferenciando al puntero/array + 0. 

 *(v+0). 

 Es v+0 dado que se forma con lo que apunte v + pos 0. 
 
 Si accedemos a v[1]. 

 Desreferenciamos v y la siguiente posición de memoria desde 0. 
 
 *(v+1). 


 Aunque el incremento se multiplica por el tamaño del tipo de datos. 

 Si v fuera de tipo int[] incrementamos 4 bytes, no 1. 


 Parámetros en main: 

  El sistema va a añadir dos parámtros: argc y argv, aunque no lo veamos. 
 
  argc es un entero y argv es un puntero a un array de caracteres. 

  argc es argumento cuenta/count

  argv es un argumento de vector de vectores, dado que es un vector de cadena de caracteres. 
   
  Una cadena de caracteres es un vector y un vector de cadenas de caracteres. 

  Es un vector de punteros a cadenas de caracters. 

  Se puede escribir: char* argv[]
                      |      |
            puntero a cad y otro puntero (= vector) cadenas de caracteres. 
 
  También se puede escribir char** argv. 


  Entonces,  main (int argc, char* argv[]) {}
  
  arg count y arg vector, son argumentos de de llamada. 

  ```
  int main (int argc, char* argv[]) {
   
   return 0; 
  }
  
  ```
  
  Se usan para pasar valores por la linea de comandos. 
 
  Desde una terminal podemos abrir un programa escribiendo su nombre.
  
  O usar ese programa desde la terminal y pasarle valores para que haga o devuelva ciertas acciones, valores, resultados. 


  Con las variables argc y argv podemos acceder a las variables que se pasan por la linea de comandos. 
 
  argc va a contar los parametros pasados por terminal. 

  argv va a ser el vector a cada cadena (vector que contiene los parametros). 

 
  Imprimir el número de parametros que se pasan por la terminal. 
  
  ```
  int main (int argc, char* argv[]) {
   printf("%d\n", argc);    

   return 0; 
  }

  ```
  Si ejecutamos el programa con su nombre, argc lo contará como 1. 

  Si le pasamos además de su nombre, varias cadenas; las contará. 

  El valor devuelto es lo que vale argc. 

  
  Imprimir el vector de vectores argv: 

  ```
  int main (int argc, char* argv[]) {
   printf("%d\n", argc);    

   int i: 
   for (i = 0; i < argc; i++) {
    printf("%s\n", argv[i]); 
   }

   return 0; 
  }

  ```
    
  En cada vuelta vamos a imprimir cadenas con el escape %s. 

  A print le pasamos argv[i], la posicion i de argv.  

  argv[1], [2], etc. 

  La posición i nos devolverá una cadena. 

 
    
|| Structs

 Los registros o estructuras son una especie de contenedor.

 Tiene un nombre y es de tipo struct. 

 Almacena variables, punteros, etc. 

 Nos permite crear una varible de tipo struct para acceder o usar las variables almacenadas. 
 
 
 Similar a los array pero guarda todo tipo de dato. 

 Ej: podriamos crear una estructura llamada fecha. 
  
 Almacenará variables o campos como dia, mes, año. 

 Podríamos acceder a los campos usando fecha.dia, fecha.mes, fecha.año, etc. 

  
 Los mismo si queremos crear una biblioteca. 

 Tendra campos como autor, nombre del libro, isbn, etc. 

 La biblioteca será de tipo struct y las variables de tipo int, float, char; lo que se necesite. 

 Todas las estructuras cierran con punto y coma después de la llave. 
 
 ```
 #include <stdio.h>

 struct fecha {
  char dia, mes; 
  int anio; 
 }; 

 int main(int argc, char* argv[]) {
  struct fecha f; 
  
  f.dia = 14; 
  f.ms = 6; 
  f.anio = 2030; 

  print("%d/%d/%d\n", f.dia, f.mes, f,anio); 

  return 0; 
 }

 ```

 Definimos la estructura y después la usamos y asignamos valores en main. 

 Para usar la estructura tenemos que crear una variable de tipo struct fecha. 

 struct fecha + nombre var. 
  
 Para asignar los campos llamamos a la variable struct. 
 
 f.dia, f.mes, f.anio. 
 

 Función que devuelve un struct: 

  Es mucho más eficiente que andar definiendo o implementado cosas en main. 

  Separamos el programa en muchas y pequeñas funciones. 
  
  Debemos crear la función llamando a la estructura.

  struct fecha + nombre func. + param + cálculo   
 
  Debemos llamar a la estructura dentro de la función para usarla. 
  
  La asignación ya no lo hacemos nosotros, sino, quién use la función. 
 
  Sus valores serán los argumentos pasados a los parametros. 

  ``` 
  struct fecha fecha_crear(char dia, char mes, int anio) {
   struct fecha f; 
   f.dia = dia; 
   f.mes = mes; 
   f.anio = anio; 
   
   return f; 
  }
 
  ```


 Usar la función struct en main: 
 
  En main creamos una variable struct fecha. 

  Y guardamos la función en la variable struct. 

  ```
  #include <stdio.h>

  struct fecha {
   char dia, mes; 
   int anio; 
  }; 

  struct fecha fecha_crear(char dia, char mes, int anio) {
   struct fecha f; 
   f.dia = dia; 
   f.mes = mes; 
   f.anio = anio; 
   
   return f; 
  }

  int main(int argc, char* argv[]) {
   
   struct fecha f; 
   f = fecha_crear(10, 12, 2030);
   print("%d/%d/%d\n", f.dia, f.mes, f,anio); 

   return 0; 
  }

  ```  

  Sintaxis alternativa: 
 
  El valido hacer uso de la declaración inline. 

  Solo cuando declaramos su tipo: struct fecha f...

  ```
  struct fecha fecha_crear(char dia, char mes, int anio) {
   struct fecha f = {dia, mes, anio}
   return f; 
  }

  ```   
 
 No es valido: 

 ```
 struct fecha f; 
 
 f = {dia, mes, anio}; 

 ```

 A f le falta struct fecha: 

 ```
 struct fecha f;

 struct fecha f = {//...}; 

 ```

 O podemos castear

 ```
 struct fecha f;

 fecha = (struct fecha) {//...}; 

 ```

 Usar return para simplificar aún más la sintaxis de struct: 
 
 ``` 
 return (struct fecha) = {dia, mes, anio};

 ```


|| Punteros a estructuras

 Formas de pasar parámetros: 

  1. Valor: 

   Las variables de la función y las variables main están en zonas distintas. 

   ```
   void a (int x) {
    x++            //cálculo
   }

   int main () {
    int i = 5    
    a (i);       //llamada a función
 
    return 0; 
   }

   ```

   las variables a y x están es direcciones o posiciones o zonas de memoria distintas

   El valor 5 se transferirá a x, pero no la dirección de memoria de i. 

   Se crea una copia de i sobre la cual la función va a hacer sus cálculos, lo hace en una dirección distinta. 

   La función podrá aumentar ese valor 5 en 6 (dado el contador). 

   Sin modificar i.   
  

  2. Referencia: 
  
   El parámetro de la función será un puntero. 

   Le pasamos la dirección de memoria de la variable que queremos modificar. 
   
   Cuando ejecutemos la función se va a crear una variable puntero para almacenar la dirección de memoria &i.
  
   Lo hacemos para apuntar a una variable y cambiarle el valor.

   Guardamos el cálculo de la función en esa misma variable. 
   
   Para esto tenemos que desreferenciar el puntero para que devuelva un valor. 
 
   ```
   void a (int* x) {
    *x++            //cálculo
   }

   int main () {
    int i = 5    
    a (&i);       //llamada a función
 
    return 0; 
   }

   ```
  
   i pasa a valer 6. 
  

   Pasamos la dirección de memoria &i a int* x. 
   
   Después tenemos que tomar el valor que hay en esa dirección y modificarlo

   Usamos la desreferencia y aplicamos el cálculo: *x++

   Aunque sea una copia apunta a la misma dirección. 

   

 Estructuras por referencia: 

  Prototipamos las funciones antes de main (solo defiendolas).

  Creamos una estructura. 

  Creamos una función struct 
  
  Creamos una funcion print con un puntero de parametro. 
 
  La variable puntero almacenará una dirección de memoria.  
 
  Y creamos función incrementar con un puntero. 
   
  Debemos pasarle una dirección de memoria con &varX. 

  Definimos las funciones después de main. 

  
  ```
  #include <stdio.h>
  
  struct fecha {
   char dia, mes; 
   int anio;   
  };

  struct fecha fecha_crear(char dia, char mes, int anio); 
  void fecha_print(struct fecha* f); 
  vodi fecha_incrementar(struct fecha* f);   

  int main (int argc, char* argv[]) {
   struct fecha f; 
   f = fecha_crear(10, 12, 2030); 
   fecha_print(&f); 
   fecha_incrementar(&f); 
   fecha_print(&f); 
   
   return 0; 
  }


  struct fecha fecha_crear(char dia, char mes, int anio) {
   return (struct fecha_crear) {dia, mes anio}; 
  }
 
  void fecha_print(struct fecha* f) {
   printf("%d/%d/%d\n", f->dia, f->mes, f->anio); 
  }

  void fecha_incrementar(struct fecha* f) {
   f->dia++
   if(f->dia > 30) {
    f->dia = 1; 
    f->mes++; 
    if(f->mes > 12) {
     f->mes = 1; 
     f->anio++; 
    }
   }
  }
  
  ``` 
  
  El operador de acceso para campos a traves de punteros es la flecha.
 
  Es para desreferenciar el valor o devolver el valor. 

  Una función void no devuelve ningún valor, no hace falta poner return. 
   
  Aunque podemos ponerlo al final como: return; 


  Podemos hacer lo mismo pero pasando los parámetros por valor. 

  Sería más ineficiente. 


  Tendríamos que cambiar las fechas de acceso al valor de los punteros. 
  
  Por puntos de acceso a campos de la estructura. 
  
  Y cambiar &, * de los parametros y variables. 

  ```
  #include <stdio.h>
  
  struct fecha {
   char dia, mes; 
   int anio;   
  };

  struct fecha fecha_crear(char dia, char mes, int anio); 
  void fecha_print(struct fecha f); 
  vodi fecha_incrementar(struct fecha f);   

  int main (int argc, char* argv[]) {
   struct fecha f; 
   f = fecha_crear(10, 12, 2030); 
   fecha_print(f); 
   fecha_incrementar(f); 
   fecha_print(f); 
   
   return 0; 
  }


  struct fecha fecha_crear(char dia, char mes, int anio) {
   return (struct fecha_crear) {dia, mes anio}; 
  }
 
  void fecha_print(struct fecha f) {
   printf("%d/%d/%d\n", f.dia, f.mes, f.anio); 
  }

  void fecha_incrementar(struct fecha f) {
   f.dia++
   if(f.dia > 30) {
    f.dia = 1; 
    f.mes++; 
    if(f.mes > 12) {
     f.mes = 1; 
     f.anio++; 
    }
   }
   fecha_print(f); 
  }
  
  ```

  Imprime 3 valores, uno repetido dado que no se ha modificado la variable. 

  Los otros valores son los parametros. 

  
  Rs: 

  ```
   Punteros: 
 
   int* i // guarda dirección
  
    Recibe &i //dirección 
    
    Toma el valor con *i //hacer cálculos o modificar var
     cuando operamos solo param
        
   -> // operador de acceso: desreferencia y accede al valor de los punteros
    cuando necesitamos acceder a valor en punteros.  

  ```



|| Punteros a funciones

 a(){//...}

 Una función se debe guardar en una posición de la pila de memoria. 

 Como está en una posición de memoria podemos pasar su dirección. 

 Usando &a. 

 Definimos una función y la llamamos en main.  

 Ej: 

 ```
 #include <stdio.h>

 void print() {
  printf("Hola mundo\n"); 
 }

 int main(int argc, char* argv[]) {
  print(); 

  return 0; 
 }

 ``` 
 

 Puntero a una función: 

  Para declarar punteros a una variable haciamos: int* x; 

  Declarar un puntero a una función es más complicado porque el tipo de dato de una función es más complejo que el de una variable. 

  El tipo de dato de una función como: 
  
  ```
  void print() {
   printf("Hola mundo\n"); 
  } 

  ```
  
  Se compone de dos partes:

  1. Tipo de dato de retorno de la función. 

  2. Lista de parámetros. 

 
 Declarar puntero a una función:     
  
  Escribimos su tipo de retorno. 

  Entre parentesis (*+nombre del puntero). 

  Será el nombre de la variable puntero que guardará una dirección de memoria. 

  Seguido de otro parentesis con los parámetros que tiene la función. 

  Si no tiene parámetros escribimos void: (void). 
 
  Ej: void (*funcion) (void)

  Este sería un puntero nulo con parámetros nulos, llamado funcion.  

  Después podemos darle valores que serán de tipo void. 

  funcion = &print; 

  Guarda la dirección de la función print. 

  La función print retorna void y no tiene parámetros. 
 
  Es compatible con el puntero que creamos. 

  
 Ejecutar puntero a función: 

  Hacemos: (*funcion)(). 

  Desreferenciamos el puntero función con su lista de parámetros vacio. 
  
  Esto es para devolver el valor de la función print. 

  ```
  #include <stdio.h>

  void print() {
   printf("Hola mundo\n"); 
  } 

  int main (int argc, char* argv[]) {
   void (*funcion)(void);
   funcion = &print; 
   (*funcion)(); 

   return 0; 
  }
   
  ```

  Se ejecuta la función. 
  
  Alternativamente podemos quitar el parentesis y el *. 

  ```
  void (*funcion)(void);
  funcion = &print; 
  funcion(); 

  ```  


 Puntero a función con parámetro: 

  ```
  void print2(int x) {
   printf("Has dicho %d", x); 
  }
 
  ```
 
  Imprime el valor pasado por parámetro


  Podemos crear su puntero, como lo hicimos con la función anterior. 

  Tenemos un tipo void y un parámetro. 

  ```
  int main() {
   void (*funcion2)(int);
   funcion2 = &print2; 
   (*funcion2)(5); 

   return 0; 
  }
 
  ```
 
  Ponemos otro nombre, escribimos el parámetro int (solo el tipo). 

  Al puntero de función le asignamos la dirección de la print2. 

  Ahora para ejecutarla debemos pasarle un valor al parámetro. 

  Se va a ejecutar: "Has dicho 5". 


 Puntero a función entero y con parámetro: 
  
 ```
 int print3 (int x) {
  print("2*%d=%d", x, 2*x)
 
  return 2*x; 
 }
 
 ```

 Ahora para crear el puntero tenemos que ajustar el tipo de retorno int. 

 Y creamos una variable para guardar la ejecución de la función. 

 ```
 int main(int argc, char* argv[]) {
   int (*funcion3)(int);
   funcion3 = &print3; 
   int val = (*funcion3)(5); 
   print("El resultado es %d\n", val); 
 
  return 0; 
 }
 ```

 O alternativamente usamos print2 para pasarle un entero. 

 Este entero será la variable que guarda la ejecución print3. 

 ```
 int main(int argc, char* argv[]) {
   int (*funcion3)(int);
   void (*funcion2)(int); 
   funcion3 = &print3;  
   función2 = &print2; 
   int val = (*funcion3)(5); 
   (*funcion2)(val); 
  return 0; 
 }
 
 ```
 Ahora imprime, "Has dicho 10". 

 El cálculo o valor es de funcion3. 

 
 Emular programación orientada a objetos en C: 

  Un uso avanzado de punteros sería emular con estructuras la POO. 

  Nos faltaría la extensión de propiedades pero se puede hacer algo parecido. 


  ```
  struct obj {
   int campo1, campo2; 
   obj* x;                        //puntero a otro objeto
   void (*func1)(int, char, int   //metodos
  };

  ```

  El puntero a objeto emula relación entre objetos


 Callback: 

  Pasar una función como parámetro en la llamada a otra función. 

  ```
  int sumar (int a, int b, void (*callback)(int)) {
   int suma = a + b; 
   (*callback)(suma); 
   return suma; 
  }
  ```



|| Memoria Dinámica

 No se crea en tiempo de compilación, cuando se crea al programa. 
 
 Se crea en tiempo de ejecución, cuando se está corriendo el programa. 

 
 Memoria en tiempo de compilación:
  
  Cuando creamos variables, es memoria estatica. 

  El compilador va a buscar las variables y darle lugar en la memoria. 

  Van a quedar para siempre en el programa, desde su inicial hasta el final del mismo. 

  ```
  int main() {
   int var1, var2, var3; 
   char var4; 

   return 0; 
  }

  ```
  

 Memoria dinámica en tiempo de ejecución: 
  
  Asigamos memoria en el momento del programa que la necesitemos. 

  Podemos pedir tanto como tenga disponible el sistema. 

  Cuando ya no la necesitemos podemos liberarla. 

  La memoria que va a usar un programa se compone de la memoria estática, dinámica y la pila de llamada o ejecución para los valores que se le pasan a los parámetros. 

  
  Podemos acceder a ella mediante punteros. 

  Almacenará una dirección de memoria vacía o reservada para uso. 
 
  Usamos la función malloc() gestionar la parte de memoria dinámica de los programas. 

  En esa zona se crean variables punteros que guardan direcciones de memoria dinámica. 

  Usamos la función free() para eliminar la memoria dinámica cuando ya no nos haga falta. 

  Para usar malloc y free necesitamos agregar la cabezera <stdlib.h>


 Usando memoria estática: 
  
  Declaramos las variables normalmente. 
   
  ```  
  #include <stdio.h>
  #include <stdlib.h>

  int main(int argc, char* argv[]) {
   int x = 5; 

   printf("%d\n", x); 

   return 0; 
  }
 
  ``` 
  
 
 Usando memoria dinámica: 

  Debemos usar un puntero por ej x. 
 
  Si creamos la var x es estático. 

  El puntero es una variable normal o estática que guarda una dirección de memoria. 

  Lo que guardará va a ser dinámico.  

  ```
  #include <stdio.h>
  #include <stdlib.h>

  int main(int argc, char* argv[]) {
   int *x; 

   printf("%d\n", *x); 

   return 0; 
  }
 
  ```
  Si queremos imprimir su dirección estará vacía. 

  No apunta a nada hasta el momento. 
    

  Tenemos que inicializarlo creando memoria dinámica. 
  
  Usamos malloc. 
  
  ```
  #include <stdio.h>
  #include <stdlib.h>

  int main(int argc, char* argv[]) {
   int *x; 
   x = malloc(); 

   printf("%d\n", *x); 

   return 0; 
  }

  ```

  malloc() crea un bloque de memoria y va a devolver una posición de memoria que guardamos en un puntero. 

  x = malloc(); 

  Tiene un parámetro (size_t) que es el número de bytes que podemos reservar. 

  Las necesidades de memoria se planifican según el tipo de dato y el tamaño del contenido a guardar. 

  Si guardamos un entero ocupará 4 bytes. 
    
  ```
  #include <stdio.h>
  #include <stdlib.h>

  int main(int argc, char* argv[]) {
   int *x; 
   x = malloc(4); 

   printf("%d\n", *x); 

   return 0; 
  }

  ```

  O podemos hacer una buena practica usando (sizeof(tipoDato)).

  ```
  #include <stdio.h>
  #include <stdlib.h>

  int main(int argc, char* argv[]) {
   int *x; 
   x = malloc(sizeof(int)); 

   printf("%d\n", *x); 

   return 0; 
  }

  ``` 
    
  Le asignamos valor al puntero desreferenciandolo. 

  Después liberamos la memoria dinámica con free(puntero)

  ```
  #include <stdio.h>
  #include <stdlib.h>

  int main(int argc, char* argv[]) {
   int *x;                   //crea un puntero
   x = malloc(sizeof(int));  //inicializa con memoria dinamica
   *x = 5;                   //asigna un valor

   printf("%d\n", *x);       //imprime al valor apuntado

   free(x);                  //libera memoria del puntero. 

   return 0; 
  }  

  ```


  Si intentamos imprimir el puntero después de liberar memoria, fallará o devolverá una dirección random. 

  ```
  free(x); 

  printf("%d\n", *x);
 
  ```



|| Strings y Vectores Dinámicos

 Memoria dinámica en un array dinámico: 
  
  Como podemos pedir con malloc() memoria en bytes para enteros. 

  Podemos pedir para vectores, aunque tiene que ser bytes más grande. 

  En vez de 4, pedimos 128 por ejemplo. 

 
  Como los vectores son punteros ya sea a un grupo de int o char. 

  Al crear un malloc de 128 nos devuelve su puntero. 

  Podemos acceder a cada una de las 128 posiciones. 

  Usando el puntero como si vuera un vector. 

  
  Nos permite crear un vector dinámico. 

  En vez de crear un vector: char v[20]; 
  
  Creamos un puntero, lo inicializamos y le asignamos un valor.   

  ``` 
  #include <stdio.h>
  #include <stdlib.h>
 
  int main(int argc, char* argv[]) {
   char* cadena = malloc(sizeof(char) * 128); 

   printf("Introduce una cadena: "); 
   scanf("%s", cadena);   

   printf("Has dicho %s.\n", cadena); 

   free(cadena); 
  
   return 0; 
  }

  ```
   
  Creamos un puntero cadena. 

  Le pasamos a malloc(128) directamente o una practica segura es usar sizeof(tipoDato). 

  Debemos multiplicar el tamaño de la estructura que queremos crear por el numero de veces que queremos crear esa estructura.  
  
  malloc(sizeof(char)*128); dado que un char mide 1 byte

  Después podemos escribir un valor en él, como lo hicimos anteriormente con el entero. 

  O podemos usar la función scanf para introducir un valor. 

  El valor que escaneamos se va a guardar en el puntero. 

  scanf acepta punteros o direcciones de memoria: var punt o *p y &p. 

  
  Al compilar solo retorna hola, scanf tiene problemas para imprimir cadenas, es inseguro imprimir cadenas. 

  scanf lee el teclado y asigna el valor. 

  No hace ninguna comparación. 

  Es seguro para leer números porque los corta si no cabe en la memoria. 

  Pero para leer cadenas es inseguro, dado que si hemos creado un espacio dinámico limitado e introducimos un valor muy grande. 

  Va a intentar escribir todo el valor en ese lugar y cuando pase el limite de memoria dinámica creado va a seguir escribiendo. 

  Puede borrar otras variables o acceder a memoria no reservada. 
  
  Otro motivo es que cuando detecta un espacio lo interpreta como un final de cadena. 

  Si le pasamos varias cadenas, va guardarlas en una posición; pero no hará ninguna comparación. 

  Es peligroso porque no podemos saber cuánto estamos introduciendo. 


  Para leer cadenas de tipo char*, usamos fgets es más complejo dado que lee multiples cosas como archivos. 

  El primer parámetro es el puntero en el que queremos que se guarde lo introducido. 

  El segundo va a ser un número máximo de carácterse al leer. 
  
  El tercero es el sitio del que queremos leer los datos. 

  Puede ser de cualquier lugar, archivo. 

  Con stdin le pedimos que lea el teclado. 

  ``` 
  #include <stdio.h>
  #include <stdlib.h>
 
  int main(int argc, char* argv[]) {
   char* cadena = malloc(sizeof(char) * 128); 

   printf("Introduce una cadena: "); 
   fgets(cadena, 128, stdin);   

   printf("Has dicho %s.\n", cadena); 

   free(cadena); 
  
   return 0; 
  }

  ```

  fgets lee hasta los saltos de line \n. 

  Si nos pasamos del limite de memoria, llega un momento en el que corta el valor introducido. 

  
  Acceder a las posiciones de la cadena dinámica: 

   Como si fuera un vector porque los punteros no dejan de ser un vector. 

   Podemos acceder a la posición individualmente

   ```
   printf("Caracter 1: %c\n", cadena[1]); 

   ```
   Imprime el segundo carácter: u. 



  Creamos un espacio de memoria grande para poder guardar muchas cosas. 
  
  ```
  #include <stdio.h>
  #include <stdlib.h>

  int main (int argc, char* argv[]) {
   int* numeros; 
   numeros = malloc(sizeof(int)* 2000)

   free(numeros); 
   return 0; 
  }

  ```
  
  Creamos un espacio para guardar 2000 enteros, en vez de uno solo; en ese caso usariamos solo int. 

  (sizeof(int)) -> 1 entero. 

  (sizeof(int) * 2000) -> 2000 enteros. 


  Asignamos un valor a una ubicación: 

  ```
  #include <stdio.h>
  #include <stdlib.h>

  int main (int argc, char* argv[]) {
   int* numeros; 
   numeros = malloc(sizeof(int)* 2000)

   numeros[1234] = 1234; 
   printf("%d", numeros[1234]); 

   free(numeros); 
   return 0; 
  }

  ``` 
   
  En resumen, los punteros son vectores. 

  Con malloc podemos trabajar con ellos. 

  
  
  
 
 

