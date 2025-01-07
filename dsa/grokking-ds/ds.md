# Grokking: Estructuras de Datos 

Hay estructuras de datos en todas partes. 

Se puede crear una pila en un cualquier lugar que montone cosas. 

Una cola en otro lugar, para ordenar cosas. 

Las estructuras se usan para almacenar los objetos de cualquier app. 


# Qué es una estructura de datos

En la era de la información y datos, necesitamos organizar una enorme cantidad de ellos.

Una estructura de datos es una forma de organizar y almacenar información en una computadora o un
programa.

Ayudan a administrar y manipular datos de manera eficiente.


Una estructura de datos puede organizar a los usuarios de una manera que hace que sea fácil y rápido buscar entre mil millones de usuarios

Un algoritmo es una secuencia de instrucciones ordenadas para manipular los datos almacenados en una estructura.

```
#unsorted array
arr = [4, 2, 3, 1]

#algorithm
quicksort(arr)

#sorted array
1, 2, 3, 4

```

Las estructuras de datos proporcionan la organización y representación de la información (los datos).

Los algoritmos sirven como instrucciones para transformar esos datos.

Cada estructura de datos implícitamente define algoritmos para operaciones, como agregar, recuperar y eliminar sus elementos.

Describir una estructura de datos requiere explicar con precisión los algoritmos detrás de sus métodos.

Ayudan a organizar los datos, resolver problemas difíciles, mejorar la eficiencia, optimizar el uso de la memoria y evitar riesgos de seguridad.

Pero si solo sabe usar una estructura de datos, querra aplicarla en todos los casos; incluso cuando no sea oportuno.


## Uso de una estructura de datos

Necesitas estructuras de datos cuando debes organizar tus datos de una manera que facilite y haga eficiente su almacenamiento y recuperación de acuerdo con algunas reglas especiales. 

Si necesitamos buscar un objeto en una colección de millones, este puede tener un atributo único de identificación.

Necesitamos una mejor manera de almacenar y buscar artículos, y aprender sobre las compensaciones que se requieren para equilibrar diferentes necesidades


## Problemas con las estructuras:

Se necesita realizar un seguimiento de los usuarios conectados y sus direcciones IP.

Funciona bien, pero la estructura de datos que ha utilizado es demasiado lenta para soportar la cantidad de tráfico en su aplicación web, por lo que bloquea el servidor de aplicaciones.

Se aplica otra estructura que soluciona la lentitud y el bloqueo, es decir es más rapida y eficiente.

Pero ahora es insegura, un hacker ha descubierto que, con la secuencia correcta de llamadas, puede sobrecargar la estructura de datos que utilizó la empresa externa y bloquear la aplicación

Las tablas hash, si se usan correctamente, podrían resolver la mayoría de estos problemas. 

Si compra un software de terceros necesita saber qué preguntas hacer, para asegurarse de que hicieron todo bien.


En una red social, un seguimiento de la relación entre los usuarios. 

Se ha intentado iterar uno a uno los amigos, pero es demasiado lenta y bloquea la app.

Ha intentado hacer esto en la memoria: ¿Qué pasa si necesita añadir persistencia a estos datos

Si más tarde necesita encontrar relaciones aún más distantes como “amigo de un amigo de un amigo”

Una base de datos SQL no parece soportar todo lo que necesita

Los grafos ayudarian a controlar datos altamente relacionales y que podría usar los algoritmos de búsqueda en amplitud (breadth-first search) para explorar relaciones indirectas de amigos.

Permite ejecutar consultas rápidamente basadas en las relaciones entre diferentes piezas de datos.



## Escribir y aplicar una estructura de datos

A excepción de los puestos que implican algo de investigación, la mayoría de los puestos de ingeniería de software no requerirán que escriba sus propios algoritmos o estructuras de datos a diario o semanalmente. La mayor parte del tiempo, solo usará el código de otra persona. 

Estudiar las estructuras de datos lo ayudará a tomar las decisiones correctas o a conocer las mejores soluciones.

Todavía hay ciertas situaciones en las que puede necesitar arremangarse y escribir su propia implementación; por ejemplo, si está usando un lenguaje de programación completamente nuevo para el que no hay muchas bibliotecas disponibles o necesita personalizar una estructura de datos para resolver un caso especial.

El conocimiento de primera mano de las estructuras de datos le permitirá comprender mejor las compensaciones que está haciendo en su código y cómo hacer que su código sea más eficiente.


## Elegir una estructura de datos

Elegir las estructuras de datos de forma inteligente es importante.

No se trata de elegir la estructura de datos perfecta.

No siempre tienes que elegir la mejor posible; la mayoría de las veces, puedes salirte con la tuya con una alternativa casi óptima.

Lo fundamental es evitar la elección incorrecta, que sería una estructura de datos que bloquearía tu aplicación o causaría un problema de seguridad.

Con conocimiento e intuición mostrándote los peligros a los que podrías enfrentarte, cómo identificarlos sistemáticamente evaluando la complejidad de los algoritmos, qué aspectos equilibrar y qué compensaciones considerar.


## Aplicar estructuras al código

Se trata de desarrollar un proceso que te permitirá tomar decisiones conscientes e informadas sobre las estructuras de datos que utilizas y expandir tu conocimiento de las estructuras de datos para que cuando te enfrentes a un problema, recuerdes las posibles alternativas.

A un alto nivel, el proceso de pasar de un problema a una solución utilizando algoritmos y estructuras de datos se puede describir en unos pocos pasos:


1. Comprender el problema.

2. Identificar una solución.

3. Identificar las estructuras de datos necesarias.

4. Preguntarse: ¿Funciona la solución?

Si funciona, nos puntamos: ¿Es la solución eficiente?

Si no funciona, volvemos a identificar o buscar una solución.

5. Si la solución es eficiente, resolvimos el problema.


Las partes clave para nosotros son los pasos 3 y 6:

Pensamos en las estructuras de datos que podemos usar en nuestra solución (paso 3).

Evaluamos si nuestra solución (que funciona) es demasiado lenta, utiliza demasiada memoria

o rompe nuestros requisitos de alguna otra manera (paso 6).

El paso de implementación también es relevante si estamos implementando las estructuras de datos desde cero.

En ese caso, también debemos probar exhaustivamente el código de la estructura de datos para comprobar su corrección y rendimiento. 

Para simplificar, asumiremos que hay una biblioteca de terceros que podemos usar.


Ahora es momento de pensar en lo que necesita para crear esa solución. Aquí es donde pasa de una idea de alto nivel de lo que necesita para resolver un problema a un plan más concreto que incluye lo que usará para resolverlo

Solución de alto nivel: ideas o plan para resolver el problema

Solución concreta: identificar las herramientas que puede usar


Comprueba si tu solución es lo suficientemente buena, identificar una forma posible de resolver tu problema puede no ser suficiente.

También debes ser capaz de resolverlo en un tiempo razonable con los recursos que tienes disponibles.

Por otra parte, no quieres sobrediseñar o sobreconstruir tu aplicación.

Al igual que no necesitas una estructura de datos demasiado complicada para algo que se puede resolver de manera eficiente con una matriz.


Para evitar una optimización prematura, normalmente querrás empezar de a poco y probar estructuras de datos más complicadas solo si ya sabes, o descubres en este paso, que tienes un cuello de botella.

Probar su código, limpiarlo y asegurarse de que, por ejemplo, los nombres de las variables y los métodos no sean confusos son todas fases importantes del desarrollo de software.


## Estructura de datos adecuada

Ej, sala de emergencias para mascotas, esperando su turno en el vestíbulo hasta que los admiten.

Clasificar a los pacientes, decidir quién ingresa y cuándo, e intentar que todo funcione sin problemas.


Entender el problema y esbozar una solución.

Lo más importante en cualquier proyecto es comprender los requisitos de su cliente; cuanto antes los aclare, menos doloroso será el proyecto. 

Aquí, la definición del problema es lo suficientemente vaga como para permitir múltiples interpretaciones


¿Debemos preocuparnos por quién está en la sala? ¿Pueden estar gatos, perros, caimanes y conejos en la misma habitación? ¿Hay un límite de capacidad (para el vestíbulo o en términos de visitas por día)?

Estas (y muchas más) son todas preguntas que debería hacerse cuando se enfrenta a una tarea similar.


Hagámoslo simple: solo queremos gestionar el registro y la admisión de los pacientes, y suponemos que el vestíbulo tiene capacidad infinita y no hay otras restricciones.

Necesitamos es un dispositivo, un software, que registre a los pacientes y luego los admita en un orden determinado.

Debemos iterar los requisitos hasta encontrar una buena solución. 



## 1. orden agnóstico

Entradas y salidas.

Entender cómo vamos a hacer el soft o dispositivo.

Una solución significa escribir tu propio algoritmo para transformar una entrada y llegar a tu objetivo.

Es el momento de empezar a pensar en los detalles.

Necesitamos un contenedor, una estructura de datos que pueda contener los registros de pacientes y devolver el siguiente paciente que será admitido cada vez que lo solicitemos.

Primer intento, colocamos los formularios en un buzón de sugerencias en el momento del registro y, cuando un médico queda libre, simplemente sacamos a ciegas uno de estos formularios de papel

El contenedor que usamos es una bolsa, que es perfecto si no te importa el orden en el que lees los elementos almacenados.

Asumimos que la fase de implementación produjo código sin errores.

Pasamos directamente a las preguntas: ¿Funciona esta solución y funciona bien?

Alguien que llegó después de ellos se cuela en la fila, especialmente cuando hay pocos pacientes. Comienzan las peleas


Resultado:

Positivo/beneficio/ventaja: Facil de implementar

Desventaja: No hay control sobre el orden.


## 2. orden inverso

Iteramos/cambiamos soluciones, estructuras.

Esta vez, los formularios se almacenan en orden, en una pila con el más antiguo en la parte inferior y el más nuevo en la parte superior. 

Los operadores de triage toman el siguiente formulario de la parte superior de la pila: están implementando una pila, por lo que el último
paciente registrado es el primero en ser admitido.

Una pila es buena cuando necesitamos procesar primero las entradas más recientes, pero es terrible gestionar una fila de espera.

(lifo, last in, first out)


Resultado:

Ventaja: Es bueno para procesar las entradas a medida que son recibidas. 

Desventaja: no son buenas para filas de espera. 



## 3. primero en llegar, primero en ser antendido

Esta vez, la corrección es conceptualmente más simple: tomamos los siguientes formularios de la parte inferior de la pila, de modo que el primer paciente en llegar sea el primero en ser atendido por un médico

Utilizamos una cola, una estructura de datos que nos permite iterar a través de los elementos en el mismo orden en que fueron agregados.

Los médicos se dieron cuenta de que en algunos casos, algunas complicaciones podrían haberse evitado si los pacientes hubieran sido vistos inmediatamente en lugar de esperar su turno.

Significa que se puede hacer mejor.

Es hora de iterar.


Resultado: 

Ventaja: Primero que llega tiene prioridad. 

Desventaja: Las entradas urgentes deberían esperar


## 4. Primero las urgencias

Necesitamos es una estructura de datos que nos permita tener en cuenta algo más que la hora de llegada

Los operadores de triage tienen los formularios, pueden estimar la urgencia de un caso y reordenar los formularios según la emergencia de cada caso. 

Si añadimos todos nuestros casos a una cola de prioridad, podemos pedirle que nos devuelva el caso más urgente, seguido del siguiente más urgente, y así sucesivamente.


Resultado:

Ventaja: Las urgencias tiene prioridad

Desventaja: Lento y más complicado de implementrar.


RS:

Como entendemos cómo elegir la estructura de datos correcta.

Podemos encontramos una solución que funciona perfectamente para nuestras necesidades


Una estructura de datos es una forma de organizar y almacenar datos en una computadora o un lenguaje de programación al definir la relación entre los datos, las operaciones
que se pueden realizar y las reglas o restricciones para acceder a los datos y modificarlos.

Las estructuras de datos son fundamentales para organizar y almacenar datos de manera eficiente.

Un algoritmo es un conjunto de instrucciones bien definidas, un procedimiento paso a paso
diseñado para resolver un problema específico o realizar una tarea en particular.

Los algoritmos y las estructuras de datos se complementan entre sí de la misma manera que los sustantivos y los verbos se complementan entre sí en una oración.

Elegir la estructura de datos incorrecta puede tener consecuencias nefastas, como bloquear su sitio web o causar riesgos de seguridad.

Existe un proceso paso a paso que puede ayudarlo a decidir qué estructuras de datos usar en un proyecto.

El proceso es iterativo y requiere verificar la calidad de su solución hasta que cumpla con todos sus requisitos.


## Arrays Estáticos

Primer estructura de datos. 

Estructura de datos fundamental: matrices

Matrices estáticas y dinámicas. 

Operaciones típicas que se pueden realizar en matrices.

Usar matrices para resolver un problema


Cómo funcionan las estructuras de datos y cómo para implementarlos

Proceso que vamos a seguir a lo largo del libro.


Arrays estáticas:

Las matrices organizan los datos manteniendo una colección de elementos y haciéndolos accesibles por índices.


¿Por qué? matrices?


Memoria y cajones:

Cómo se organiza la memoria. 

Pensar en la memoria como un estante modular que contiene cajones extraíbles.

Si la estructura del estante es memoria, entonces los cajones son variables.

Piensa en la memoria como potencial: si quieres utilizarla
algo de memoria, puede crear variables, los cajones que pueden contener sus datos desde los cuales
puedes recuperarlo.

El tamaño del estante determina el número máximo de cajones.

Puedes crear variables (cajones) de diferentes tamaños, siempre que encajen en el espacio del estante.

También llene esos cajones con datos, y los cajones más grandes pueden contener tipos de datos más grandes

Por ejemplo, necesitará un cajón más grande para un valor de punto flotante que para caracteres o
números enteros (cortos).


¿Cuándo necesito una matriz?

El calendario tiene forma de
casita de jengibre, con cajoncitos marcados con
números del 1 al 24.

El cajón es como una variable, un contenedor de datos. En
En este caso, una variable entera llamada cajón sería
contiene el valor 5

Recibirás un dulce todos los días entre el 1 y el 24 de diciembre. 

Cada cajón de un calendario de Adviento contiene una galleta, algunas
chocolates u otros dulces, y los niños pueden abrir cada cajón solo el día correspondiente.
respondiendo al número de cajón.

supongamos que reutiliza parte del estante de almacenamiento grande para el
Calendario de Adviento. Los 24 cajones se pueden colocar en cualquier lugar de la estantería: ni siquiera
tienen que estar uno al lado del otro y no tienen que estar en ningún orden en particular

Pero si nosotros tuviéramos que crear estos cajones numerados, querríamos ponerlos en orden ascendente
y uno al lado del otro. De lo contrario, sería difícil encontrarlos.

De manera similar, si quisiéramos modelar un calendario de adviento en software, podríamos crear 24
pequeñas variables y llámelas advent_drawer_1, advent_drawer_2, etc.

Sería un desastre de práctica para producción.  


Ya sería doloroso crear 24 variables diferentes a mano, pero lo que es peor,
cada vez que necesitáramos acceder a uno de los cajones del código, tendríamos que usar el correcto
nombre de la variable, por lo que normalmente, en la mayoría de los lenguajes de programación, tendríamos que saber cuál
variable que necesitamos en el momento de la compilación (es decir, cuando escribimos código).

A veces, sin embargo, sólo obtenemos esta información en tiempo de ejecución, cuando se ejecuta el código.

Por ejemplo, si tenemos un programa que pregunta al usuario qué cajón necesitamos revisar,
No sabríamos de antemano qué variable necesitamos porque solo obtenemos la información.
a través de E/S mientras nuestro programa se ejecuta

¿Te imaginas el lío que sería pasar por todos los
cajones sin bucle for?


Tamaño estático vs dinámico:


¿Qué es entonces una matriz? Así es como se vería nuestro calendario de Adviento como una matriz.

|4| |1| |2| |7|... |3| |5| |6|
(elementos)

1 2 3 4... 23 24 25 (índice de los elementos)

Esto es una matriz de números enteros para el Adviento
calendario

Las matrices no se limitan a almacenar números enteros o en general.
Pueden almacenar numbers (int, float), string y otros objetos. 

Si un un array almacenamos muchos caramelos, sería un array de caramelos. 


En su definición más simple, una matriz es una colección de datos indexados. 
Indexado significa que
una matriz almacena una secuencia de elementos (generalmente llamados elementos), y solo puedes acceder
por su posición (también conocida como índice).

Por ejemplo, en el calendario de Adviento,
podemos acceder al cajón indexado con 1 para conseguir el premio del 1 de diciembre, pero no podemos
acceder a los cajones por su contenido

debemos hacer una distinción
porque podemos mirar la definición de matriz desde diferentes ángulos

Si nos centramos en la funcionalidad de las matrices en un nivel alto y semiabstracto
los datos de la matriz
La estructura tiene algunas características clave:

Almacena una colección de datos.
Se puede acceder a sus elementos mediante índice.
No es necesario acceder a los elementos de forma secuencial; es decir, si necesito el décimo elemento
de una matriz, puedo acceder a ella directamente sin tener que leer los 9 elementos almacenados en
la matriz anterior.

Estos pocos puntos definen una matriz a nivel abstracto (fácil/simple).

Técnicamente, estos puntos definen una
matriz como un tipo de datos abstracto. 
Tenga este término en mente

Desde un punto de vista diferente, las matrices son una de las características principales de muchos lenguajes de programación.
Sin embargo, muchos lenguajes de programación se adhieren a algunas características comunes cuando
implementar matrices como característica central del lenguaje

Los arreglos se asignan en la memoria como un único bloque de memoria ininterrumpido con
ubicaciones secuenciales, lo que ahorra tiempo y memoria.

Las matrices están restringidas a almacenar datos del mismo tipo. Esta restricción también surge
de la necesidad de optimización porque permite que la misma memoria sea
asignado para cada elemento en la matriz y el compilador/intérprete para rápidamente
conocer la dirección de memoria de cada elemento.

El tamaño de las matrices, es decir, el número de elementos contenidos en una matriz, debe ser
decide cuándo se crea la matriz y ese tamaño no se puede cambiar.

Los últimos tres puntos representan una definición de nivel inferior para matrices de tamaño estático. 
una característica central de muchos lenguajes de programación como C, C ++, Java, etc.

En este capítulo, nos centramos en matrices estáticas. 

Matrices dinámicas (también conocidas como de tamaño dinámico),
cuyo tamaño puede cambiar en tiempo de ejecución, son otra variante de esta estructura de datos.

Tenga en cuenta que también es posible relajar el cuarto
punto de la lista y permite contenido heterogéneo para las matrices, lo que significa que puede
mezclar diferentes tipos de datos para los elementos de la matriz: Python, el lenguaje de programación que utilizamos
uso en este libro, proporciona de forma nativa listas, un tipo de matriz de tamaño dinámico que permite
tipo de datos para sus elementos.


Valores e índices:

Aprendimos que las matrices son una estructura de datos indexados.
Esto significa que un array asocia un índice a cada uno de los elementos que contiene, y sólo a través de un
index podemos acceder al elemento correspondiente.

Cuando hablamos de matrices estáticas, señalé que en muchos idiomas, las matrices obligan a todos
sus elementos sean del mismo tipo de datos. Este requisito es útil por varias razones.

En primer lugar, como ilustra la siguiente figura, le permite asignar la cantidad exacta de memoria
En segundo lugar, permite calcular rápidamente la memoria.
dirección para cada elemento porque todos los elementos tendrán el mismo tamaño y por lo tanto serán igualmente
espaciado, lo que facilita el cálculo de la ubicación de memoria de un elemento

Implementación de matrices y direcciones de memoria:

Memory word, Array’s index, Array’s boundaries (limite de matriz) y Memory address.

	   0 1 2 3 4
| | | |2|0|-1|4|5| |
0xf0 0xf1 0xf2 0xf3... 0xf8


Acostumbrados a índices que comienzan en 0, así que hablemos de ello

Si bien muchos lenguajes de programación comienzan los índices en 0, algunos tienen índices de matriz.
comenzando en 1. Algunos de los ejemplos más conocidos son Julia, MATLAB, R y Fortran.

Python es uno de esos lenguajes que utilizan indexación de base cero, por lo que seguimos el
convención a lo largo del libro de que los índices de las matrices comiencen en 0.

La indexación de base cero, como se puede imaginar (y quizás ya haya experimentado), obliga a los desarrolladores a tener cuidado al pensar en los índices
especialmente si necesitan implementar algoritmos que accedan a posiciones específicas o cuando deben tener cuidado de mantenerse dentro de los límites. de los índices válidos.

Por ejemplo, el último elemento de una matriz indexada de base cero de tamaño n estará en el índice n-1, y al intentar acceder al elemento en el índice n se producirá un error

elementos: |4|1|2|7
indices:    0 1 2 3


Inicialización:

el resto de este capítulo se centra en arreglos estáticos.

Lo que se menciona brevemente es que cuando crea una matriz estática, debe decidir su tamaño en
avance.

Por ejemplo, si necesita almacenar cinco elementos en una matriz, deberá asignar la memoria para todos esos elementos cuando cree la matriz.
Es decir, al declarar
una matriz, creamos la estructura que contendrá cinco valores de un cierto tipo, que deben
también se decidirá en ese momento.

Estamos preparando el espacio para albergar esos elementos, pero ¿qué sucede antes de actuar?
¿Asignarles valores aliados?


Para empezar, hay dos formas de crear una matriz: podemos simplemente declararla o (en la mayoría de los casos)
lenguajes de programación) podemos inicializar los elementos del array al mismo tiempo que lo declaramos.

Inicializar una matriz significa asignar valores (válidos) a todos sus elementos.

En este caso,
el compilador, mientras traduce su código a un programa que pueda ejecutarse en su máquina,
simultáneamente asigna memoria para la matriz y la llena con los valores que decidimos en
tiempo de compilación, antes de pasar a la siguiente instrucción

¿Qué sucede cuando simplemente declaras la matriz sin inicializarla? ¿Se mantienen sus elementos “vacíos”?
No existe el concepto de vacío, lo que significa que cuando declaras una variable, el compilador debe asignarle un valor. En el caso de los arrays, a todos los elementos se les debe asignar un valor

El valor real depende del lenguaje de programación y del tipo de matriz; por ejemplo, en Java, una matriz de números enteros tendrá todos sus elementos establecidos en 0 si se crea sin inicialización. Alguno
los lenguajes de programación tienen un valor especial para representar el vacío;

Una matriz "vacía":
¿Qué valores encontraremos? ¡Simplemente no lo sabemos!

| | | | | | 
0 1 2 3 4

Por ejemplo, Python tiene el valor None y Java usa null.
Tenga en cuenta que estos son especiales
valores que se asignan explícitamente a los elementos de la matriz.

La esencia es que debes tener cuidado al crear una matriz si planeas acceder a su
elementos sin asignarlos primero
En caso de duda, consulte las especificaciones de idioma.
para entender lo que realmente sucederá.


Arrays en Python: 

aprendiendo
Python y quiere realizar un seguimiento de su calendario de Adviento, por lo que cada mañana-
tan pronto como abre su cajón del día, quiere actualizar su
Versión digital del calendario.

También planea actualizarlo cada vez que
come un trozo de chocolate para poder vigilar a su hermano pequeño Ian,
de quien se sospecha fuertemente que robó las golosinas de Mario en Halloween

¡Ayudemos a Mario a crear una aplicación sencilla utilizando matrices!


Python lists vs. the array.array class:

Ya mencioné que Python ofrece la clase de lista como su solución nativa similar a una matriz.
Las listas de Python están más cerca de las matrices dinámicas y tampoco tienen la limitación de mantener
ing datos del mismo tipo: puede crear una lista con números, cadenas u otras listas, todas
juntos

Las listas de Python son más poderosas que las matrices estáticas: por ejemplo, admiten dinámicas.
cambiar el tamaño
mientras que array.array, que viene con la biblioteca estándar de Python, no

el precio por admitir el cambio de tamaño dinámico es un rendimiento degradado y una velocidad más lenta
Para ser claros, en muchos casos,
estará bien usando listas y no notará la diferencia en su aplicación

Pero si lo eres
escribir secciones críticas de su código, posibles cuellos de botella donde el rendimiento es crítico
cal, entonces quizás quieras asegurarte de utilizar la opción de mayor rendimiento

consejo:

Solo recuerda que la optimización también tiene un costo (en términos de desarrollo
tiempo, mantenimiento y claridad), así que evite optimizar demasiado pronto o sin
beneficios

Antes de decidir optimizar algún código, asegúrese de ejecutarlo y
Identificar las secciones críticas donde la optimización sería más beneficiosa.
diferencia

Es importante que comprenda cómo funcionan los arreglos estáticos antes de abordar su
su contraparte dinámica en un capítulo posterior

Desafortunadamente, Python no ofrece una versión nativa.
alternativa de matriz estática.

Lo más cerca que estamos es el módulo de matriz de Python, que impone el tipo
consistencia pero sigue siendo una matriz dinámica

Se puede encontrar una verdadera matriz estática en NumPy
que es una biblioteca matemática optimizada para ser eficiente en el cálculo de vectores.
Con
numpy.array, puede crear matrices de dobles de tamaño fijo, aún algo diferentes de
matrices de Java

Para ayudarle a experimentar con estática
matrices, creamos una clase personalizada basada en array.array, que simula cómo una estática
la matriz funciona

(Puede encontrar esta clase personalizada en el repositorio del libro: https://mng.bz/VxpG).
En este punto, no deberías preocuparte por los detalles de cómo implementamos una matriz estática.

El punto importante es que una vez que importas la clase
puedes crear una nueva matriz de tamaño n usando el siguiente código:

```
from arrays.core import Array
a = Array(n)

```

Luego puede acceder a todos los elementos de a, desde el índice 0 hasta n-1, y asignarlos como un array regular. 
Por otro lado, no puede expandir ni reducir esta matriz.

De forma predeterminada, se crea una matriz de números enteros.
Si desea crear una matriz (de cinco elementos) float, puede utilizar:

```
b = Array(5, 'f')

```

Entonces, por ejemplo, puedes ejecutar:

```
print(b)
print(b[2])
b[3] = 3.1415

```

Tenga en cuenta que todos los elementos de la matriz recién creada se inicializan en 0 (o 0,0 para flotantes).



Indexing:

Python usa indexación de base cero para matrices, lo que significa que
para una matriz con n elementos, el primer elemento de la matriz siempre está en el índice 0, y el
El último elemento está en el índice n-1

Encontraremos el día 1 en el índice 0, cuando hubiera sido más intuitivo encontrarlo en
Índice 1.

Incluso con
listas de Python, mientras que -1 es un índice válido (específicamente, el índice del último elemento en el
array), acceder a ([n]) bloqueará su aplicación.

Ahora usted podría estar preguntando: ¿Qué pasa con
([-n]? ¿Y un[n+1]?)

Para evitar tener que lidiar con este tipo de truco mental Jedi, hemos desactivado los indices negativos.
para nuestra clase de matrices estáticas.


Operaciones sobre arrays:

Ahora que sabes cómo crear una matriz, la siguiente pregunta es qué hacer con ella.
Inicialmente, nuestra matriz es un contenedor vacío, no en el sentido de que sus elementos sean activos.
sino que los valores asignados a las celdas de la matriz no tienen sentido

La clase auxiliar inicializa arbitrariamente cada elemento de la matriz a 0, como se hace en muchos lenguajes

La suposición que debe hacer es que, a menos o hasta que inicialice la matriz, sus datos son
sin sentido.

Puedes llenar la matriz como quieras. No tienes que seguir ningún orden cuando
asignando nuevos valores a sus elementos, pero aquí está la advertencia: 

es posible que desee realizar un seguimiento
de qué elementos son significativos para su aplicación

En la mayoría de los casos, no importará el orden en el que almacenemos los elementos. Si ese es el caso,
simplemente podemos agregar los nuevos elementos en el primer índice no utilizado en la matriz y mantener el
matriz justificada a la izquierda: esto significa que si agregamos k≤n elementos a nuestra matriz, estarán en
los índices de 0 a k-1

Con matrices justificadas a la izquierda, resulta muy conveniente realizar un seguimiento de qué elementos
son significativos y solo necesitamos almacenar el tamaño del fragmento lleno de la matriz.

NOTA Esta es una forma posible de hacerlo; de hecho, una entre muchas. si tu eliges
Para trabajar con una matriz justificada a la izquierda, es su responsabilidad realizar un seguimiento de cómo
Muchos elementos están actualmente almacenados en la matriz.


Ahora veamos cómo realizar algunas operaciones básicas en nuestra matriz (sin clasificar/ordenar).


Clase para unsorted arrays:

Podríamos escribir un conjunto de funciones globales que tomen un objeto core.Array como argumento.
y manipularlo.
Sin embargo, no voy a adoptar este enfoque.

Sé que podemos tener un
implementación más limpia escribiendo una clase UnsortedArray que envuelve y
aísla (encapsula) nuestra matriz.

¿Por qué? Hay muchas buenas razones para preferir la programación orientada a objetos a la
paradigma imperativo. 

Una cosa que quizás ya haya considerado es que debemos realizar un seguimiento del tamaño de
la parte llena de la matriz.
Con una matriz justificada a la izquierda, eso es suficiente para separar la parte
de la matriz que contiene datos de la parte vacía.

Si implementamos una clase para la matriz no ordenada, podemos almacenar su tamaño en un atributo y
actualícelo como parte de las operaciones en la matriz.

Sin envolver nuestra matriz sin clasificar en
una clase, tendríamos que almacenar el tamaño del array en una variable global y pasar ese valor
a cada una de las funciones que manipulan la matriz sin clasificar.


Encapsulación: un pilar de la programación moderna

El hecho de que cualquiera pueda cambiar la variable con el tamaño de la matriz es terriblemente propenso
a errores.
En cambio, debemos esforzarnos por lograr algo llamado encapsulación.

Cada instancia de un
La matriz debe tener este valor incluido e, idealmente, solo puede modificarse internamente mediante el
instancia misma.

(Python no nos ayuda mucho aquí ya que no tiene acceso privado real a la clase.
atributos.)


Implementaremos matrices sin clasificar como una clase:

```
class UnsortedArray:
	def __init__(self, max_size, typecode = 'l'):
		self._array = Array(max_size, typecode)
		self._max_size = max_size
		self._size = 0

```

En el constructor, mantenemos la misma firma que para nuestra clase auxiliar de matriz estática principal.
De hecho, incluso utilizamos una de esas matrices estáticas internamente para alojar los datos.

Tenga en cuenta que si bien podríamos heredar de core.Array, en su lugar creamos una instancia de
core.Array y asignarlo a un atributo del objeto: usamos composición con un
instancia de core.Array.

CONSEJO: 
Una regla general es favorecer la composición sobre la herencia:
le brinda más flexibilidad en el diseño.


Agregar una nueva entrada:

Para el contexto, creamos nuestra matriz arr = UnsortedArray(n), donde n es el número de
elementos que asignamos para la matriz (su capacidad máxima).

Digamos que ya tenemos
Agregó k elementos a la matriz. No podemos hacer ninguna suposición sobre el orden de los
elementos, y ni siquiera nos importa su orden.

Bajo estos supuestos, podemos agregar la siguiente entrada de la matriz en el índice k, justo después de la última entrada, es decir, ¡si hay espacio en la matriz! Lo primero que tenemos que hacer es comprobar que k es un índice válido.
Si es así, podemos continuar con la asignación, recordando incrementar k, el tamaño actual.
Si la matriz está llena, generamos una excepción para alertar a la persona que llama sobre el problema.


arr de 9 elem:

|0|7|-1|3|?|?|?|?|?|

add(-2):

|0|7|-1|3|-2|?|?|?|?|

La operación resulta en: 

Agregar la quinta entrada a una matriz
con tamaño n=9

Consejo:
No ocultes los errores. No necesariamente tienes que usar excepciones, pero es importante dejar que el
el cliente lo sepa, para que pueda descubrir y manejar el fracaso.
Una ventaja de las excepciones sobre, por ejemplo, devolver un valor especial en caso de error, es que
Las excepciones obligan a la persona que llama a preocuparse y comprobar si la operación se realizó correctamente, mientras que el retorno
Los valores pueden ser ignorados y serán ignorados.

Así es como se vería el código como método de nuestra clase:

```
def insert(self, new_entry):
	if self._size >= len(self._array):
		raise ValueError('The array is already full')
	else:
		self._array[self._size] = new_entry
		self._size += 1

```

Eliminar una entrada:

Agregar nuevos elementos a una matriz sin ordenar es bastante sencillo, ¿verdad? las cosas se ponen
Un poco más interesante cuando queremos eliminar una entrada existente.

En el escenario más común, querrás eliminar una entrada en algún momento a mitad de camino.
de la matriz. Desafortunadamente, simplemente “borrar” la entrada en el índice dado dejaría
un espacio en el medio del fragmento de la matriz donde almacenamos nuestras entradas válidas, rompiendo
nuestra suposición de que las entradas están justificadas a la izquierda.

|0|7|-1|3|-2|?|?|?|?|
		  (*)	
remove(-1) 
		  (*)	
|0|7|?|3|-2|?|?|?|?|

Para solucionar esta situación, en abstracto, tendríamos que desplazar todas las entradas a la derecha del espacio una posición hacia la izquierda. Esto solucionaría el problema, pero también supondría mucho trabajo.
Esto es desafortunado: ¡sería mucho más fácil si tuviéramos que eliminar la última entrada de la matriz! Podríamos simplemente actualizar el tamaño de la matriz para ignorar esa última entrada.
Existe un caso especial, una estructura de datos llamada pila, que solo permite eliminar su última entrada. Estudiaremos las pilas en el capítulo 8, pero mientras tanto, resulta que, después de todo, tenemos suerte: hay una manera de manipular matrices desordenadas y caer en el mismo escenario, donde solo eliminamos la última entrada.
Como la matriz no está ordenada y asumimos que el orden de las entradas no importa, podemos simplemente intercambiar la última entrada
Tenemos que ocuparnos de algunos casos extremos, especialmente verificar si la matriz está vacía, pero las cosas son mucho más fáciles de lo que pensábamos:

remove(-1):

|0|7|-1|3|-2|?|?|?|?|

swap (2,4):

|0|7|-2|3|1|?|?|?|?|

remove_at (4):

|0|7|-2|3|?|?|?|?|?|


```
def delete(self, index):
	if self._size == 0:
		raise ValueError('Delete from an empty array')
	elif index < 0 or index >= self._size:
		raise ValueError(f'Index {index} out of range.')
	else:
		self._array[index] = self._array[self._size-1]
		self._size -= 1

```

El último elemento estará fuera del fragmento poblado (una advertencia: la matriz merodea).
“Intercambio inteligente” al sobrescribir el elemento eliminado (no necesitamos almacenar el valor que vamos a eliminar).


## Busqueda de un valor

Búsqueda de un valor
Otra operación importante que queremos poder realizar es la búsqueda: dado un valor determinado, ¿está almacenado en la matriz y en qué índice? Si observamos más de cerca, debemos hacernos
algunas preguntas más. Por ejemplo:

1. ¿Qué sucede si hay varias ocurrencias del mismo valor? ¿Devolvemos
la primera ocurrencia, cualquier ocurrencia o todas?

2. Si el valor de destino no está en la matriz, ¿qué devolvemos? Una forma sería
devolver -1, lo que funciona en muchos lenguajes. Sin embargo, en Python, -1 es un índice válido
para listas, porque se pueden usar números negativos para indexar elementos de
derecha a izquierda. Por lo tanto, devolver -1 podría ser contraproducente y hacer que un error pase
desapercibido si el llamador no verifica la salida del método.

Supongamos lo siguiente: devolveremos el índice de la primera aparición de
la entrada de destino encontrada, o None (un índice no válido) si no se encuentra.
Entonces, ¿cómo hacemos una búsqueda? Desafortunadamente, debido a que las entradas se almacenan sin ningún orden, no tenemos una mejor manera que iterar a través de todos los elementos hasta que encontremos una coincidencia.
No es muy eficiente, pero no tenemos ninguna información que nos permita hacerlo
mejor:

```
def find(self, target):
	for index in range(0, self._size):
		if self._array[index] == target:
			return index
	return None  #Si llegara a este punto no podría encontrar el objetivo.

```
El método de búsqueda se puede utilizar junto con el método eliminar para eliminar elementos por valor. Primero, encontramos el índice del valor que queremos eliminar y luego podemos llamar al método de eliminación definido en la sección anterior.


## Traversal/recorrido

A veces, queremos aplicar la misma operación a todos los elementos de una estructura de datos, y
lo mismo ocurre con los arreglos. Podría ser imprimirlos o elevarlos al cuadrado. Lo que queremos es
recorrer nuestro arreglo, pasando por todos sus elementos (exactamente una vez, en un orden que
depende de la estructura de datos) y aplicar algún método que tomaremos como argumento.

Para estructuras de datos más avanzadas, como árboles y gráficos, esto se vuelve más complicado, como veremos. Pero para los arreglos, solo se requiere un bucle for:

```
def traverse(self, callback):
	for index in range(self._size):
		callback(self._array[index])

```

Supondremos que la operación que queremos realizar tiene algún tipo de efecto secundario y que
no necesitamos recopilar su salida (de lo contrario, estaríamos hablando de una operación de mapa).
Una vez definida en su forma más simple, podemos intentar llamarla con el método print para entender
la esencia de cómo funciona:

```
array.traverse(print)

```


## Arrays en acción

Ahora que hemos visto cómo funcionan las matrices, veamos cómo podemos utilizarlas.


Estadísticas

Mario y Tony juegan a este juego que inventaron, en el que Tony elige los tres números más bajos de un dado y Mario elige los tres más altos. Por lo tanto, si el resultado de una tirada de dados es 1, 2 o 3, Tony gana, y si es 4, 5 o 6, Mario gana.
Se turnan para tirar los dados, apostando sus cartas de béisbol en cada tirada. Quien tire los dados en un momento dado decide cuántas cartas apostar, y el otro puede doblar la apuesta.
Después de jugar un rato, Mario ha perdido la mitad de su mazo de cartas. Piensa que Tony está ganando demasiado y no entiende por qué. Cuando Mario le cuenta a su padre sobre este juego, el padre de Mario sugiere que Tony puede estar (sin saberlo) usando un dado injusto: un dado en el que ciertos números salen con más frecuencia que otros.

Con un dado justo, continúa, en una gran cantidad de lanzamientos, cada uno de los seis números
debería salir aproximadamente una sexta parte de las veces. Cuanto más lanzamientos intente, más cercanas serán las frecuencias reales
entre sí. Por lo tanto, una forma de demostrar que un dado no es justo es registrar las estadísticas de los resultados
de muchos lanzamientos y luego verificar cómo se distribuyen los resultados. Después de romper el hielo con
programación y matrices, Mario siente que está en una situación de trampa (juego de palabras intencionado) y quiere usar matrices
para demostrar que Tony está haciendo trampa. Entonces, su padre lo ayuda a escribir una aplicación móvil que
Mario usará para registrar los resultados de los lanzamientos de dados.

Cada vez que Mario registra un lanzamiento de dados en su teléfono, la aplicación registra el resultado
en una matriz de contadores con seis elementos. Todos los elementos de los contadores se inicializan a 0
cuando se ejecuta la aplicación por primera vez. Cuando el dado da, por ejemplo, un 4, la aplicación incrementa los (contadores[3]). Recuerde que los valores posibles van de 1
a 6, pero los índices de la matriz van de 0 a 5 (en Python y muchos otros lenguajes), por lo que si queremos actualizar la cantidad de veces que se extrajo k, necesitamos incrementar los contadores[k-1].
Para esta aplicación en particular, no necesitamos llenar la matriz de manera incremental ni llevar un registro de las entradas significativas: sabemos exactamente cuántas entradas asignar desde el principio, y todas pueden considerarse significativas una vez inicializadas a cero. En otras palabras, llenamos la matriz en la inicialización.
Pero, en el siguiente ejemplo, veremos cómo usar lo que hemos aprendido sobre el llenado incremental de matrices.
Una vez que Tony y Mario han jugado lo suficiente, y Mario ha registrado cientos, incluso miles de tiradas de dados, llega la parte interesante: ¿cómo comprueba que los valores son correctos?
 
 0 1 2 3 4 5
|0|0|0|0|0|0|

(4) -> |0|0|0|1|0|0|
(2) -> |0|1|0|0|0|0|
(5) -> |0|0|0|0|1|0|
(4) -> |0|0|0|2|0|0|
(3) -> |0|0|1|0|0|0|

Una matriz con seis contadores.
Cada vez que se lanza un dado, se incrementa el contador correspondiente.

¿Cómo comprueba que los valores son los de un dado justo? Hay algunas formas, pero la mayoría de ellas probablemente estén más allá de las matemáticas de un niño de primaria. Por lo tanto, el padre de Mario sugiere comenzar por encontrar el valor máximo en la matriz para el número que aparece con mayor frecuencia. Supongamos que
hay un solo valor máximo o que, en caso de empate, podemos devolver indistintamente el que tenga el índice más bajo.
Entonces, lo que Mario necesita codificar es una variación del recorrido de la matriz. Recorremos todos los elementos, uno por uno, y verificamos: ¿Es este el que tiene la frecuencia más alta?
Observe que en lugar de suponer que el valor máximo en la matriz no es negativo
(lo que sería cierto en nuestro caso), podemos escribir un método más seguro, un poco más general, inicializando la variable max_value en el primer elemento de la matriz y luego comenzando a iterar desde el segundo elemento.
Esta variante hace que el código sea más robusto (no tenemos que depender de que el llamador pase
una matriz con valores no negativos) y sea más aplicable.
Para cada elemento, lo comparamos con el valor almacenado actualmente para max_value y, si
el elemento actual es mayor, actualizamos tanto el valor como su índice. Al final, podemos
simplemente devolver el valor encontrado y el índice donde se encuentra. Pero en nuestro caso de uso, debemos
recordar sumar 1 al índice que obtenemos para tener el valor más frecuente que surgió
al tirar los dados de Tony:

```
def max_in_array(array):
	if len(array) == 0:
		raise Exception('Max of an empty array')
	max_index = 0
	for index in range(1, len(array)):
		if array[index] > array[max_index]:
			max_index = index
	return max_index, array[max_index]

```

La segunda tarea que le da el padre de Mario es escribir una función similar que devuelva qué cara del dado sale con menos frecuencia y con qué frecuencia sucedió eso.
“Una vez que tengamos estos cuatro valores”, dice el padre de Mario, “podemos verificar si el dado de Tony
es justo”.

```
max_in_array(counters)
> 1, 234
min_in_array(counters)
> 5, 107

```

Descubrieron que el resultado más común que aparece es 2 (recuerde que obtenemos el índice,
que es 1 menos el valor real de los dados), y el menos común es 6, con una gran
diferencia en su frecuencia.
“Eso es raro”, dice Mario. “¿Qué significa eso?”
“Significa que voy a llamar a los padres de Tony. Deberías recuperar tus cartas”.


