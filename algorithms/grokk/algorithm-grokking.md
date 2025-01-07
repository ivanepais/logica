# Algoritmos 

1. Cap 1: 

Búsqueda binaria y analizar la velocidad de un algoritmo usando Big O.

Se utiliza para analizar cómo de lento o rápido es un algoritmo.


2. Cap 2: 

Dos estructuras de datos fundamentales: matrices y listas enlazadas.

Se utilizan para crear estructuras de datos más avanzadas como tablas hash.


3. Cap 3: 

Recursividad, una técnica útil utilizada por muchos algoritmos (como el Quicksort).

La notación Big O y la recursividad son temas desafiantes para principiantes. 


El resto del libro presenta algoritmos con amplias aplicaciones:


4. Técnicas de resolución de problemas: cubiertas en los capítulos 4, 8 y 9.

Si te encuentras con un problema y no estás seguro de cómo resolverlo de manera eficiente, intenta divide y vencerás (capítulo 4) o programación dinámica (capítulo 9).

O puede que te des cuenta de que no existe una solución eficiente y consigas una respuesta aproximada utilizando en su lugar un algoritmo codicioso (capítulo 8).


5. Tablas hash: tratadas en el capítulo 5.

Una tabla hash es una fuente de datos muy útil.

Contiene conjuntos de pares de clave y valor, como el nombre de una persona y su dirección de correo electrónico, o un nombre de usuario y la contraseña asociada.

Es difícil exagerar la utilidad de las tablas hash cuando quiero resolver problema.

Los dos planes de ataque con los que empiezo son "¿Puedo usar un hash table?" y "¿Puedo modelar esto como un gráfo?"


6.  Graph Algorithms: tratados en los capítulos 6 y 7.

Los gráfos son una forma de modelar una red: una red social, o una red de carreteras, o neuronas, o cualquier otro conjunto de conexiones.

Breadth-first search (Búsqueda en amplitud -cap6-) y Dijkstra’s algorithm (capítulo 7).

Son formas de encontrar la distancia más corta entre dos puntos de una red: puede utilizar este enfoque para calcular los grados de separación entre dos personas o el más corto ruta hacia un destino.


7. K-nearest neighbors (KNN): para "vecinos" más cercanos tratados en el capitulo 10. 

Este es un Algoritmo simple de aprendizaje automático.

Puedes usar KNN para construir un sistema de recomendaciones, un motor OCR, un sistema de predicción de stock valores: cualquier cosa que implique predecir un valor ("Creemos que Adit califica esta película con 4 estrellas") o clasificando un objeto ("Esa letra es una Q").


8. El Capítulo 11 analiza 10 algoritmos que harían buena lectura adicional.

 
El orden y el contenido de este libro han sido cuidadosamente diseñados.

Si estás interesado en un tema, no dudes en seguir adelante. De lo contrario, lea el capítulos en orden: se basan unos en otros.


# Cap 1

Primer algoritmo de búsqueda (binario).

Tiempo de ejecución de un algoritmo (notación Big O). 

Técnica común para Diseño de algoritmos (recursión).


## Intro

Un algoritmo es un conjunto de instrucciones para realizar una tarea.

Cada fragmento de código podría llamarse algoritmo, pero este libro lo cubre partes más interesantes.

Los algoritmos de este libro son rápidos, resuelven problemas interesantes o ambas cosas.


El Capítulo 1 habla sobre la búsqueda binaria y muestra cómo un algoritmo puede acelera tu código.

En un ejemplo, el número de pasos necesarios es ¡De 4 mil millones a 32!


Un dispositivo GPS utiliza algoritmos gráfos para calcular la ruta más corta a su destino.

Puede utilizar la programación dinámica (que se analiza en el capítulo 9) para escribir un algoritmo de IA que juega a las damas.


En cada caso, describiré el algoritmo y les daré un ejemplo. 

Entonces hablaré sobre el tiempo de ejecución del algoritmo en notación Big O.

Finalmente, exploraré qué otros tipos de problemas podrían resolverse mediante el mismo algoritmo.


### Performace/rendimiento

Existe una implementación de cada algoritmo en este libro probablemente disponible en tu lenguaje favorito.

Pero esas implementaciones son inútiles si no las entiendes.

Aprenderás a comparar trade-offs entre diferentes algoritmos.

¿Debería utilizar ordenación por combinación o clasificación rápida? ¿Deberías usar una matriz o una lista?

Solo usando datos diferentes la estructura puede marcar una gran diferencia.


### Resolver problemas

Aprenderá técnicas para resolver problemas.

Ej, si te gusta crear videojuegos, puedes escribir un sistema de IA que sigue al usuario utilizando algoritmos gráfo.

Aprenderás a hacer un sistema de recomendaciones usando k-nerest

¡Algunos problemas no se pueden resolver a tiempo! La parte de este libro que habla sobre problemas NP-completos le muestra cómo

identificar esos problemas y crear un algoritmo que proporcione usted una respuesta aproximada.


Necesitará saber álgebra básica antes de comenzar este libro. 

En partecular, toma esta función: f(x) = x × 2. ¿Qué es f(5)? Si respondiste 10, Estás listo.


## Binary search

Supongamos que estás buscando a una persona en la guía telefónica (¡qué viejo!).

Podrías comenzar en comienzo y sigue pasando páginas hasta llegar a las K.

Es más probable que comience en una página en el medio, porque conoce las K.

Estarán cerca del medio de la guía telefónica.

O supongamos que estás buscando una palabra en un diccionario y comienza con O. 

Nuevamente, comenzarás cerca del medio.

Ahora suponga que inicia sesión en Facebook. Cuando lo hagas, Facebook
Tiene que verificar que tiene una cuenta en el sitio. Entonces, es necesario
busque su nombre de usuario en su base de datos.

Supongamos que su nombre de usuario es
carlmagedón. Facebook podría empezar por las As y buscar tu
nombre, pero tiene más sentido que comience en algún lugar del
medio.


Este es un problema de búsqueda. Y todos estos casos utilizan el mismo algoritmo para resolver el problema: búsqueda binaria.

La búsqueda binaria es un algoritmo; su entrada es una lista ordenada de elementos
(Más adelante explicaré por qué es necesario ordenarlo). 

Si un elemento es
buscando está en esa lista, la búsqueda binaria devuelve la posición
donde está ubicado

De lo contrario, la búsqueda binaria devuelve ```null```


Ejemplo de su funcionamiento: un número entre 1 y 100.

|1|2|3|...|100|

Tienes que intentar adivinar mi número en el menor número de intentos posibles. Con
En cada suposición, le diré si su suposición es demasiado baja, demasiado alta o correcta.
Supongamos que empiezas a adivinar así: 1, 2, 3, 4…. Así es como sería
ir.

Esta es una búsqueda simple (tal vez una búsqueda estúpida sería un término mejor). Con
En cada suposición, estás eliminando solo un número. Si mi número fuera 99,
¡Podrías necesitar 99 conjeturas para llegar allí!


### La técnica en busqueda binaria

Una mejor manera de buscar
Aquí tienes una técnica mejor. Empieza con 50.

Ej: (50) -> to low; (70) -> to high

¡Demasiado alto, pero nuevamente redujiste la mitad de los números restantes! Con
búsqueda binaria, adivinas el número del medio y eliminas la mitad del
números restantes cada vez. El siguiente es el 63 (a medio camino entre 50 y 75).

### Siempre a medio camino entre las dos puntas

Esta es una búsqueda binaria. ¡Acabas de aprender tu primer algoritmo! Así es como
Hay muchos números que puedes eliminar cada vez.


Eliminar la mitad del números cada vez con búsqueda binaria:

100 items -> 50 -> 25 -> 13 -> 7 -> 4 -> 2 -> 1 (7 pasos)

Cualquiera que sea el número en el que esté pensando, puedes adivinarlo en un máximo de
siete conjeturas, porque eliminas muchos números con cada ¡intento!

Supongamos que estás buscando una palabra en el diccionario. El diccionario tiene
240.000 palabras. En el peor de los casos, ¿cuántos pasos crees que cada uno
¿La búsqueda tomará?

simple search: ... steps
binary search: ... steps

Una búsqueda simple podría requerir 240.000 pasos si la palabra que buscas es
el último del libro. 

Con cada paso de la búsqueda binaria, cortas
el número de palabras a la mitad hasta que te quede solo una palabra.

240k -> 120k -> 60k -> 30k -> 15k -> 7.5k -> 3750

1875 -> 938 -> 469 -> 235 -> 118 -> 59 -> 30 -> 15 -> 8 -> 4 -> 2 -> 1


Entonces, la búsqueda binaria requerirá 18 pasos.

En general, para cualquiera.
lista de n, la búsqueda binaria tomará ```log2 n``` pasos para ejecutarse en el peor de los casos,
mientras que la búsqueda simple tomará n pasos.


### Logaritmos 

Quizás no recuerdes qué son los logaritmos, pero probablemente sepas qué
los exponenciales son.

log10 100 es como preguntar: "¿Cuántos decenas multiplicamos?"
¿Juntos para conseguir 100?

La respuesta es 2: 10 × 10. Entonces log10 100 = 2.

### Los logaritmos son la inversa a los exponenciales. 

10^2 = 100 <-> log10 100 = 2

10^3 = 1000 <-> log10 1000 = 3

2^3 = 8 <-> log2 8 = 3

2^4 = 16 <-> log2 16 = 4

2^5 = 32 <-> log2 32 = 5


En este libro, cuando hablo del tiempo de ejecución en notación Big O (explicado
un poco más tarde), log siempre significa log2.

Cuando buscas un elemento usando
búsqueda simple, en el peor de los casos es posible que tengas que mirar cada uno de ellos
elemento.

Entonces, para obtener una lista de 8 números, tendrías que marcar 8 números como máximo.

Para la búsqueda binaria, debe verificar ```log n``` elementos en el peor de los casos.

Para una lista de 8 elementos, log 8 == 3, porque 2^3 == 8. 

Entonces, para una lista de 8 números,
Tendrías que marcar 3 números como máximo.

Para obtener una lista de 1.024 elementos,
log 1.024 = 10, porque 2^10 == 1.024.

Entonces, para obtener una lista de 1024 números,
Tienes que comprobar 10 números como máximo.

Nota:
Hablaré mucho sobre el tiempo de registro en este libro (log time).
debes comprender logaritmos.
(khanacademy.org) para repasar. 

Nota
La búsqueda binaria sólo funciona cuando la lista está ordenada.
Por ejemplo,
Los nombres en una guía telefónica están ordenados alfabéticamente, para que pueda
Utilice la búsqueda binaria para buscar un nombre. ¿Qué pasaría si los nombres
no fueron ordenados?


### Código 

list y array/arr como variables tienen el mismo significado. 

Escribir búsqueda binaria en Python.

El ejemplo de código aquí utiliza matrices.

Sólo necesitas saber que puedes almacenar una secuencia de elementos en una fila de depósitos consecutivos llamada matriz.

Los cubos están numerados empezando por 0: el primer cubo está en la posición
(#0), el segundo es el (#1), el tercero es el (#2), y así sucesivamente.

La función binaryo_search toma una matriz ordenada y un elemento.

si el elemento está en la matriz, la función devuelve su posición.

Realizarás un seguimiento de qué parte de la matriz tiene que buscar.

Al principio, esta es la matriz completa:

```
low = 0
high = len(list) - 1

```

|.|.|.|.|

low    high

estos son todos los números que estamos buscando

Cada vez, verificas el elemento del medio:

```
mid = (low + high) / 2	# Python redondea hacia abajo automáticamente si (low + high) no es un número par.

guess = list[mid]

```

Si la suposición es demasiado baja (low var), actualice la cantidad baja (low) en consecuencia:

```
if guess < item:
	low = mid + 1
```

low	 
| | |X|X|
   new high

Y si la suposición es demasiado alta, actualiza alta. 

Aquí está el código completo:

```
def binary_search(list, item):
	low = 0		# low y high realizan un seguimiento de en qué parte de la lista buscará.
	high = len(list)—1	
	
	while low <= high:	# Si bien no lo ha reducido a un solo elemento...
		mid = (low + high)	# … revisa el elemento del medio.
		guess = list[mid]
	
	if guess == item:	# Encontré el artículo.
		return mid
	if guess > item:	# La suposición era demasiado alta
		high = mid - 1	
	else:				# La suposición era demasiado baja.
		low = mid + 1
return None				# El item no existe.

my_list = [1, 3, 5, 7, 9] # testeando

print binary_search(my_list, 3) # => 1	# Recuerde, las listas comienzan en 0. 
print binary_search(my_list, -1) # => None	# "None" significa null en Python. Él indica que el artículo no fue encontrado.

```
Le pasamos nuestro array y el elemento que queremos encontrar en él. 
Si existe devolverá el indice, sino dirá None. 


### Ejercicios

1.1 Suponga que tiene una lista ordenada de 128 nombres y está buscando
a través de él mediante búsqueda binaria. ¿Cuál es el número máximo de
pasos que daría?

1.2 Suponga que duplica el tamaño de la lista. cual es el maximo
¿Número de pasos ahora?


## Running Time

Cada vez que hablo de un algoritmo, hablaré de su tiempo de ejecución.

Generalmente desea elegir el algoritmo más eficiente:
ya sea que esté intentando optimizar el tiempo o el espacio.

Volver a la búsqueda binaria. ¿Cuánto tiempo ahorras usando
¿él? Bueno, el primer enfoque fue verificar cada número, uno por uno.
uno. Si se trata de una lista de 100 números, se necesitan hasta 100 conjeturas.

Si se trata de una lista de 4 mil millones de números, se necesitan hasta 4 mil millones de conjeturas. Entonces el
El número máximo de conjeturas es el mismo que el tamaño de la lista

Esto es llamado tiempo lineal.


La búsqueda binaria es diferente. Si la lista tiene 100 elementos, se necesita como máximo
7 conjeturas. Si la lista es de 4 mil millones de elementos, se necesitan como máximo 32 conjeturas.

Potente, ¿eh? La búsqueda binaria se ejecuta en tiempo logarítmico (o tiempo de registro, como
lo llaman los nativos). Aquí hay una tabla que resume nuestros hallazgos de hoy.

simple search: 
100 items, 100 intentos
4 mil millones de items, 4 mil millones de intentos. 
```O(n)```

binary search:
100 items, 7 intentos
4 mil millones de items, 32 intentos. 

```O(log n)```

Gran ahorro de tiempo. 


## Notación Big O

Es una notación especial que indica qué tan rápido es un algoritmo.

¿A quién le importa? Bueno, resulta que usarás algoritmos de otras personas.
a menudo, y cuando lo haces, es bueno comprender qué tan rápidos o lentos son
son.


### Los tiempos de ejecución del algoritmo crecen a diferentes ritmos

Bob está escribiendo un algoritmo de búsqueda para la NASA. Su algoritmo se activará
cuando un cohete está a punto de aterrizar en la Luna, y ayudará a calcular
dónde aterrizar.

Este es un ejemplo de cómo puede crecer el tiempo de ejecución de dos algoritmos.
a diferentes ritmos.

Bob está tratando de decidir entre una búsqueda simple y
búsqueda binaria.

El algoritmo debe ser rápido y correcto. en uno
Por otro lado, la búsqueda binaria es más rápida. Y Bob tiene sólo 10 segundos para resolverlo.
dónde aterrizar de lo contrario, el cohete se desviará de su rumbo.

Por otro lado, la búsqueda simple es más fácil de escribir y hay menos posibilidades de que se produzcan errores.
siendo introducido. Y Bob realmente no quiere que aparezcan errores en el código.

¡un cohete! Para tener mucho cuidado, Bob decide cronometrar ambos algoritmos.
una lista de 100 elementos.

Supongamos que se necesita 1 milisegundo para verificar un elemento. con sencillo
búsqueda, Bob tiene que comprobar 100 elementos, por lo que la búsqueda tarda 100 ms en completarse.
correr

Por otro lado, sólo tiene que comprobar 7 elementos con binario.
búsqueda (log2 100 es aproximadamente 7), por lo que la búsqueda tarda 7 ms en ejecutarse

Pero de manera realista, la lista tendrá más de mil millones de elementos. Si es así,
¿Cuánto tiempo llevará una búsqueda simple? ¿Cuánto tiempo llevará la búsqueda binaria?
Asegúrese de tener una respuesta para cada pregunta antes de seguir leyendo.

Bob ejecuta una búsqueda binaria con mil millones de elementos y tarda 30 ms
(log2 1.000.000.000 es aproximadamente 30). "¡32 ms!" él piensa. "Búsqueda binaria
es aproximadamente 15 veces más rápido que la búsqueda simple, porque la búsqueda simple tomó
100 ms con 100 elementos y la búsqueda binaria tardó 7 ms. tan simple
la búsqueda tomará 30 × 15 = 450 ms, ¿verdad? Muy por debajo de mi umbral de
10 segundos”. ¿Es correcta la elección por busqueda simple?

No. Resulta que Bob está equivocado. Totalmente equivocado.

El tiempo de ejecución para simple
La búsqueda con mil millones de elementos será de mil millones de ms, ¡lo que equivale a 11 días! El
El problema es que los tiempos de ejecución para la búsqueda binaria y la búsqueda simple no
crecer al mismo ritmo.

simple search: 
100 elementos -> 100ms
10.000 elementos -> 10 segundos
1.000.000.000 elementos -> 11 días

binary search: 
100 elementos -> 7ms
10.000 elementos -> 14 segundos
1.000.000.000 elementos -> 32 días

Es decir, a medida que aumenta el número de elementos, la búsqueda binaria tarda un poco más.
más tiempo para correr. Pero la búsqueda simple lleva mucho más tiempo.

Entonces a medida que la lista de números crece, la búsqueda binaria de repente se convierte en una
mucho más rápido que una simple búsqueda.

Bob pensó que la búsqueda binaria era 15 veces
más rápido que la búsqueda simple, pero eso no es correcto.

Si la lista tiene mil millones
elementos, es más como 33 millones de veces más rápido

Por eso no es suficiente
Para saber cuánto tiempo tarda en ejecutarse un algoritmo, es necesario saber cuánto tiempo tarda en ejecutarse.
el tiempo de ejecución aumenta a medida que aumenta el tamaño de la lista.

Ahí es donde Big O entra la notación.


La notación Big O indica qué tan rápido es un algoritmo. Por ejemplo, supongamos
tienes una lista de tamaño n.

La búsqueda simple necesita verificar cada elemento
por lo que se necesitarán n operaciones.

El tiempo de ejecución en notación Big O es ```O (n)```.
Dónde son los segundos? son los segundos? No hay ninguno: 
Big O no te dice la velocidad en segundos. 

Le permite comparar el número de operaciones. 
Él te dice qué tan rápido crece el algoritmo.

Aquí hay otro ejemplo. La búsqueda binaria necesita operaciones de registro n para verificar
una lista de tamaño n.

¿Cuál es el tiempo de ejecución en notación Big O? Es ```O(log n)```.
En general, la notación Big O se escribe de la siguiente manera.

Big O, número de operaciones
O(n)
   
Esto le indica la cantidad de operaciones que realizará un algoritmo
Se llama notación O grande porque se coloca una "O grande" delante del número.
de operaciones (parece una broma, ¡pero es verdad!).

Ahora veamos algunos ejemplos. A ver si puedes calcular el tiempo de ejecución.
para estos algoritmos.


### Visualizar diferentes tiempos de ejecución Big O

Aquí tienes un ejemplo práctico que puedes seguir en casa con unos trozos de papel y un lápiz.

Supongamos que tienes que dibujar una cuadrícula de 16 cuadros.

¿Cuál es un buen algoritmo para dibujar esta cuadrícula?

1  2  3  4
5  6  7  8
9  10 11 12
13 14 15 16

Algoritmo 1
Una forma de hacerlo es dibujar 16 casillas, una a la vez. Recuerde, la notación Big O cuenta
el número de operaciones. En este ejemplo, dibujar un cuadro es una operación. 
Tienes que dibujar 16 casillas. ¿Cuántas operaciones se necesitarán para dibujar un cuadro a la vez?

O(16) -> 16 operaciones

Se necesitan 16 pasos para dibujar 16 cajas. 
¿Cuál es el tiempo de ejecución?


Algoritmo 2:

Pruebe este algoritmo en su lugar. Dobla el papel.
En este ejemplo, doblar el papel una vez es una operación. 
¡Acabas de hacer dos cajas con esa operación!
Dobla el papel una y otra vez.
¡Desdóblalo después de cuatro pliegues y tendrás una hermosa cuadrícula! Cada pliegue duplica el número de cajas. ¡Hiciste 16 cajas con 4 operaciones!

Puedes "dibujar" el doble de cuadros con cada pliegue, por lo que puedes dibujar 16 cuadros en 4 pasos. 
¿Cuál es el tiempo de ejecución de este algoritmo? Piense en tiempos de ejecución para ambos algoritmos antes de continuar. 

Respuestas: El algoritmo 1 tarda O(n) tiempo y el algoritmo 2 tarda O(log n).


### Big O establece un tiempo de ejecución en el peor de los casos

Supongamos que estás usando una búsqueda simple para buscar a una persona en la guía
telefónica. Sabes que la búsqueda simple tarda O(n) tiempo en ejecutarse, lo que
significa que, en el peor de los casos, tendrás que revisar cada entrada
de tu guía telefónica. En este caso, estás buscando a Adit. Este tipo es
la primera entrada de tu guía telefónica. Por lo tanto, no tuviste que mirar cada entrada; la encontraste en el primer intento. ¿Este algoritmo tardó O(n) tiempo?
¿O tardó O(1) tiempo porque encontraste a la persona en el primer intento?

La búsqueda simple todavía tarda O(n) tiempo. En este caso, encontraste lo que buscabas instantáneamente. Ese es el mejor escenario. Pero la notación Big O
se refiere al peor escenario. Por lo tanto, puedes decir que, en el
peor de los casos, tendrás que mirar cada entrada de la guía telefónica una vez.
Eso es tiempo O(n). Es una garantía: sabes que una búsqueda simple
nunca será más lenta que el tiempo O(n).

Nota
Además del tiempo de ejecución en el peor de los casos, también es importante observar el tiempo de ejecución en el caso promedio. La comparación entre el peor de los casos y el caso promedio se analiza en el capítulo 4.


###Algunos tiempos de ejecución de Big O comunes

A continuación, se muestran cinco tiempos de ejecución de Big O que encontrará con frecuencia, ordenados del
más rápido al más lento:

1. O(log n), también conocido como tiempo logarítmico. Ejemplo: búsqueda binaria.

2. ​O(n), también conocido como tiempo lineal. Ejemplo: búsqueda simple.

3. O(n * log n). Ejemplo: un algoritmo de ordenamiento rápido, como quicksort
(próximamente en el capítulo 4).

4. O(n^2). Ejemplo: un algoritmo de ordenamiento lento, como el ordenamiento por selección
(próximamente en el capítulo 2).

5. O(n!). Ejemplo: un algoritmo realmente lento, como el vendedor ambulante (próximamente).


Supongamos que estás dibujando una cuadrícula de 16 casillas nuevamente y puedes elegir
entre 5 algoritmos diferentes para hacerlo. Si usas el primer algoritmo,
te llevará O(log n) tiempo dibujar la cuadrícula. Puedes hacer 10 operaciones por segundo.

Con un tiempo O(log n), te llevará 4 operaciones dibujar una
cuadrícula de 16 casillas (log 16 es 4). Por lo tanto, te llevará 0,4 segundos dibujar la
cuadrícula. ¿Qué pasa si tienes que dibujar 1024 casillas? Te llevará
log 1024 = 10 operaciones, o 1 segundo dibujar una cuadrícula de 1024 casillas.
Estos números están usando el primer algoritmo.

El segundo algoritmo es más lento: lleva O(n) tiempo. Se necesitarán 16
operaciones para dibujar 16 casillas y se necesitarán 1024 operaciones para dibujar
1024 casillas. ¿Cuánto tiempo es eso en segundos?

```
Numero de operaciones
Para obtener una lista de 1.024 elementos,
log 1.024 = 10, porque 2^10 == 1.024.

Tiempo: 
Dibujar 16 casillas, usando algoritmo O(log n) 
Hacemos 10 operaciones por seg(1/60 de min). 
log 16 es 4
llevará 0,4 segundos dibujar la cuadrícula
4/10 (opxseg?) = 0,4

Para 1024 elementos:
log 1.024 = 10 operaciones, porque 2^10 == 1.024.


```

Aquí se muestra cuánto tiempo tomaría dibujar una cuadrícula para el resto de los
algoritmos, del más rápido al más lento:

fast-slow
n of boxes 	O(log n) O(n)	O(nlogn) O(n^2)  O(n!)
16			0.4 seg  1.6 	6.4seg 	 25.6seg 66301years
256			0.8 seg  25.6   3.4min   1.8hrs  8.6x10^505years
1024		1.0 seg  1.7min 17min    1.2dias 5.4x10^2638years

También hay otros tiempos de ejecución, pero estos son los cinco más comunes.
Esto es una simplificación. En realidad, no se puede convertir un tiempo de ejecución Big O a una cantidad de operaciones de manera tan clara, pero esto es suficiente
por ahora. Volveremos a la notación Big O en el capítulo 4, después de que hayas
aprendido algunos algoritmos más. Por ahora, las principales conclusiones son las siguientes:

1. La velocidad de un algoritmo no se mide en segundos, sino en el crecimiento del
número de operaciones.

2. En cambio, hablamos de la rapidez con la que aumenta el tiempo de ejecución de un algoritmo
a medida que aumenta el tamaño de la entrada.

3.  El tiempo de ejecución de los algoritmos se expresa en notación Big O.

4.  O(log n) es más rápido que O(n), pero se vuelve mucho más rápido a medida que aumenta la lista de elementos
que estás buscando.


Ejercicios:

Da el tiempo de ejecución para cada uno de estos escenarios en términos de Big O.

1.3 Tienes un nombre y quieres encontrar el número de teléfono de la persona
en la guía telefónica.

O(n) O(log n)
O(1) O(log 1)
1	 2^0 = 1

O(nombre) O(log nombre)
nombre	 2^x = nombre 

punta a, punta b: arr y elem a buscar
nombre   num en guía

1.4 Tienes un número de teléfono y quieres encontrar el nombre de la persona
en la guía telefónica. (Pista: ¡tendrás que buscar en toda la guía telefónica!)

O(n) O(log n)
O(1) O(log 1)
1	 2^0 = 1

O(numero) O(log numero)
numero	 2^x = numero 

punta a, punta b: arr y elem a buscar
num		nomb en guía

1.5 Quieres leer los números de todas las personas en la guía telefónica.

O(numeros) 

punta a, punta b: arr y elem a buscar
todos num todos pers

1.6 Quieres leer solo los números de las A. (¡Este es un tema complicado!
Involucra conceptos que se cubren más en el capítulo 4. 
Lee la respuesta; ¡puede que te sorprendas!)

punta a, punta b: arr y elem a buscar
todos num a 


### El vendedor ambulante

Es posible que haya leído la última sección y haya pensado: “No hay manera de que
alguna vez me encuentre con un algoritmo que tarde O(n!) tiempo”. Bueno, déjeme intentar
demostrarle que está equivocado. Aquí hay un ejemplo de un algoritmo con un tiempo de ejecución
muy malo. Este es un problema famoso en informática, porque
su crecimiento es alarmante y algunas personas muy inteligentes piensan que no se puede mejorar. Se llama el problema del vendedor ambulante.

Tiene un vendedor.

El vendedor tiene que ir a cinco ciudades.

c1 c2
c3 c4
c5

Este vendedor, al que llamaré Opus, quiere visitar las cinco ciudades mientras
recorre la distancia mínima. Aquí hay una forma de hacerlo: observe
cada orden posible en el que podría viajar a las ciudades.

Recorrido en forma:
U, 2 o Z 

Suma la distancia total y luego elige el camino con la distancia
más baja. Hay 120 permutaciones con 5 ciudades, por lo que se necesitarán 120 operaciones para resolver el problema para 5 ciudades. Para 6 ciudades,
se necesitarán 720 operaciones (hay 720 permutaciones). Para 7 ciudades,
se necesitarán 5040 operaciones.

cities operations 
6		720
7		5040
8		40320
15		1.307.674.368...
80		2.652.528.598...

En general, para n elementos, se necesitarán n! (n factoriales) operaciones para
calcular el resultado. Por lo tanto, se trata de tiempo O(n!) o tiempo factorial. Se necesitan
muchas operaciones para todo, excepto para los números más pequeños. Una vez que
se trabaja con más de 100 ciudades, es imposible calcular la respuesta en
tiempo: el Sol colapsará primero.
¡Este es un algoritmo terrible! Opus debería usar uno diferente, ¿verdad? Pero
no puede. Este es uno de los problemas sin resolver en la ciencia informática.

No existe un algoritmo rápido conocido para ello, y las personas inteligentes piensan que es
imposible tener un algoritmo inteligente para este problema. Lo mejor que podemos hacer es llegar a una solución aproximada; consulte el capítulo 10 para obtener más información.

Una nota final: si es un lector avanzado, ¡consulte los árboles de búsqueda binaria! Hay una breve descripción de ellos en el último capítulo.


## Recap 1 

1. La búsqueda binaria es mucho más rápida que la búsqueda simple.
2. O(log n) es más rápido que O(n), pero se vuelve mucho más rápido a medida que la lista de elementos
que estás buscando crece.
3. La velocidad del algoritmo no se mide en segundos.
4. Los tiempos del algoritmo se miden en términos de crecimiento de un algoritmo.
5. Los tiempos del algoritmo se escriben en notación Big O.


### Teoría y código binary search
medio entre dos puntas, toma array y elem a buscar

### Notación Big O



# Selection Sort

1. Aprenderá sobre matrices y listas enlazadas, dos de las
estructuras de datos más básicas. Se utilizan absolutamente
en todas partes. Ya utilizó matrices en el capítulo 1,
y las utilizará en casi todos los capítulos de este
libro. Las matrices son un tema crucial, ¡así que preste atención!
Pero a veces es mejor utilizar una lista enlazada en lugar
de una matriz. Este capítulo explica los pros y los contras
de ambos para que pueda decidir cuál es el adecuado para su algoritmo.

2. Aprenderá su primer algoritmo de ordenación. Muchos algoritmos solo funcionan si sus datos están ordenados. ¿Recuerda la
búsqueda binaria? Puede ejecutar la búsqueda binaria solo
en una lista ordenada de elementos. Este capítulo le enseña
la ordenación por selección. La mayoría de los lenguajes tienen un algoritmo de ordenación incorporado, por lo que rara vez necesitará escribir
su propia versión desde cero. Pero la ordenación por selección es un trampolín hacia la ordenación rápida, que abordaré en el
próximo capítulo. Quicksort es un algoritmo importante
y será más fácil de entender si ya conoces un algoritmo de clasificación.

Lo que necesitas saber:

Para comprender los aspectos del análisis de rendimiento de este capítulo, debes
conocer la notación Big O y los logaritmos. Si no los conoces, te sugiero
que vuelvas a leer el capítulo 1. La notación Big O se utilizará en el resto
del libro.


## Funcionamiento de la memoria

Imagina que vas a ver un espectáculo y necesitas guardar tus cosas. Hay una cómoda
disponible.

Cada cajón puede albergar un elemento. Si quieres guardar dos cosas, pides
dos cajones.

¡Y ya estás listo para el espectáculo! 
Básicamente, así es como funciona la memoria de tu computadora. 
Tu computadora parece un conjunto gigante de cajones y cada cajón tiene una dirección.

fe0ffeeb es la dirección de una ranura en la memoria.
Cada vez que desea almacenar un elemento en la memoria, le pide a la computadora
algo de espacio y esta le da una dirección donde puede almacenar su
elemento. 

Si desea almacenar varios elementos, existen dos formas básicas de hacerlo: matrices y listas. Hablaré sobre matrices y listas a continuación, así como sobre los pros y contras de cada una. No existe una única forma correcta de almacenar elementos para cada
caso de uso, por lo que es importante conocer las diferencias.


## Arrays y linked list 

A veces necesitas almacenar una lista de elementos en la memoria. Supón que
estás escribiendo una aplicación para administrar tus tareas pendientes. Querrás almacenar las
tareas pendientes como una lista en la memoria.
¿Deberías usar una matriz o una lista enlazada? 

Primero, almacenemos las tareas pendientes en una matriz, porque es más fácil de entender. Usar una matriz significa que todas tus
tareas se almacenan de manera contigua (una al lado de la otra) en la memoria.

|brunc|bocce|tea|...

Ahora supongamos que quieres añadir una cuarta tarea, pero el siguiente cajón está
ocupado por cosas de otra persona.

Tienes que moverse a un nuevo lugar donde quepan todos. En este caso, debes pedirle a tu
computadora un bloque de memoria diferente que pueda albergar cuatro tareas. Luego,
debes mover todas tus tareas allí.

Si viene otro amigo, te quedas sin espacio nuevamente y todos tienen que
moverse una segunda vez. ¡Qué fastidio! De manera similar, agregar nuevos elementos a una matriz puede ser un gran fastidio. Si te quedas sin espacio y necesitas moverte a un
nuevo lugar en la memoria cada vez, agregar un nuevo elemento será muy lento.
Una solución fácil es "reservar asientos": incluso si solo tienes 3 elementos en tu lista de tareas, puedes
pedirle a la computadora 10 espacios, por si acaso. Luego puedes
agregar 10 elementos a tu lista de tareas sin tener que moverte. Esta es una buena
solución alternativa, pero debes tener en cuenta un par de desventajas:

1. Es posible que no necesites los espacios adicionales que solicitaste y, en ese caso,
esa memoria se desperdiciará. No la estás usando, pero nadie más puede usarla
tampoco.

2. Es posible que agregues más de 10 elementos a tu lista de tareas y tengas que
moverlos de todos modos.

Por lo tanto, es una buena solución alternativa, pero no es una solución perfecta. Las listas enlazadas
solucionan este problema de agregar elementos.


### linked list 

Con listas enlazadas, sus elementos pueden estar en cualquier lugar de la memoria.

| 	  |brunc|   |   |tea|
|bocce|     |   |   |

Cada elemento almacena la dirección del siguiente elemento de la lista. Un conjunto de
direcciones de memoria aleatorias están vinculadas entre sí.
	0	1				4
| 	  |brunc->|   |   |tea->|
|bocce->|     |   |   |
	5

Las direcciones de memoria están vinculadas

Es como una búsqueda del tesoro. Vas a la primera dirección y dice: “El próximo
elemento se puede encontrar en la dirección 123”. Entonces vas a la dirección 123 y dice:
“El próximo elemento se puede encontrar en la dirección 847”, y así sucesivamente. Agregar un elemento
a una lista enlazada es fácil: lo colocas en cualquier lugar de la memoria y almacenas la
dirección con el elemento anterior.

Con las listas enlazadas, nunca tienes que mover tus elementos. También evitas
otro problema. Digamos que vas a ver una película popular con cinco de tus
amigos. Los seis están tratando de encontrar un lugar para sentarse, pero el cine
está lleno. No hay seis asientos juntos. Bueno, a veces esto sucede
con las matrices. Digamos que estás tratando de encontrar 10 000 ranuras para una matriz. Tu
memoria tiene 10 000 ranuras, pero no tiene 10 000 ranuras juntas. ¡No puedes conseguir espacio para tu matriz! Una lista enlazada es como decir: “Dividámonos
y veamos la película”.

Si hay espacio en la memoria, tienes espacio para
tu lista enlazada.
Si las listas enlazadas son mucho mejores para insertar, ¿para qué sirven las matrices?


### Arrays

Los sitios web con listas de los 10 mejores utilizan una táctica sucia para obtener más visitas a la página.
En lugar de mostrarte la lista en una página, colocan un elemento en cada
página y te hacen hacer clic en Siguiente para llegar al siguiente elemento de la lista. Por
ejemplo, Top 10 Best TV Villains no te mostrará la lista completa en una
página. En su lugar, comienzas en el número 10 (Newman) y tienes que hacer clic en Siguiente en
cada página para llegar al número 1 (Gustavo Fring). Esta técnica le da a los sitios web
10 páginas completas en las que mostrarte anuncios, pero es aburrido hacer clic en Siguiente 9
veces para llegar al número 1. Sería mucho mejor si toda la lista estuviera en una
página y pudieras hacer clic en el nombre de cada persona para obtener más información.

Las listas enlazadas tienen un problema similar. Supongamos que quieres leer el último
elemento de una lista enlazada. No puedes simplemente leerlo, porque no sabes en qué
dirección se encuentra. En su lugar, tienes que ir al punto n.° 1 para obtener la dirección.

En cambio, tienes que ir al elemento n.° 1 para obtener la dirección del elemento n.° 2. Luego tienes que ir al elemento n.° 2 para obtener la dirección del elemento n.° 3.
Y así sucesivamente, hasta llegar al último elemento. Las listas enlazadas son geniales si vas a leer todos los elementos uno a la vez: puedes leer un elemento, seguir la dirección hasta el siguiente elemento, y así sucesivamente. Pero si vas a seguir saltando de un elemento a otro, las listas enlazadas son terribles.

Las matrices son diferentes. Conoces la dirección de cada elemento de tu matriz.
Por ejemplo, supón que tu matriz contiene cinco elementos y sabes que comienza en la dirección 00. ¿Cuál es la dirección del elemento n.° 5?

array de 5 elementos:

|  |  |  |  |  |
 00 01 02 03 04 

Un simple cálculo matemático te dice: es 04. Los arreglos son geniales si quieres leer
elementos aleatorios, porque puedes buscar cualquier elemento en tu arreglo
instantáneamente. Con una lista enlazada, los elementos no están uno al lado del otro,
por lo que no puedes calcular instantáneamente la posición del quinto elemento en la
memoria; tienes que ir al primer elemento para obtener la dirección del
segundo elemento, luego ir al segundo elemento para obtener la dirección del
tercer elemento, y así sucesivamente hasta llegar al quinto elemento.


### Terminología

Los elementos de una matriz están numerados. 
Esta numeración comienza desde 0, no desde 1. 
Por ejemplo, en esta matriz, 20 está en la posición 1.

|10|20|30|40|  
 0  1  2  3 

Y el 10 está en la posición 0. Esto suele desconcertar a los nuevos programadores. Comenzar en 0 hace que todo tipo de código basado en matrices sea más fácil de escribir,
por lo que los programadores se han quedado con él. Casi todos los lenguajes de programación que utilizas numerarán los elementos de la matriz comenzando en 0. Pronto te acostumbrarás.

La posición de un elemento se denomina índice. Por lo tanto, en lugar de decir “20 está
en la posición 1”, la terminología correcta es “20 está en el índice 1”. En este libro, utilizaré el término índice
para referirme a la posición.

Estos son los tiempos de ejecución de operaciones comunes en matrices y listas.
		
			Arrays 		List
Reading		O(1) 		O(n)
Insertion	O(n) 		O(1)

O(n): linear time
O(1): constant time

Pregunta: ¿Por qué se necesita O(n) tiempo para insertar un elemento en una matriz? 
(número de operaciones)
Supongamos que desea insertar un elemento al principio de una matriz. 
¿Cómo lo haría? ¿Cuánto tiempo le llevaría? ¡Encuentre las respuestas a estas preguntas en la siguiente sección!

### EJERCICIO

2.1 Supongamos que estás creando una aplicación para llevar un registro de tus finanzas.

1. groceries
2. movie
3. sbfc membership

Todos los días, anotas todo lo que gastas. Al
final del mes, revisas tus gastos y sumas cuánto gastaste. 
Por lo tanto, tienes muchas inserciones y algunas lecturas.
¿Deberías utilizar una matriz o una lista?

()


## Inserción en el medio de una lista

Supongamos que desea que su lista de tareas pendientes funcione más como un calendario. Antes,
agregaba cosas al final de la lista.
Ahora desea agregarlas en el orden en que deben realizarse.

unorder: 
brunc
bocce
drink tea
buy tea

order: 
brunc
bocce
buy tea
drink tea

¿Qué es mejor si quieres insertar elementos en el medio:
matrices o listas? Con las listas, es tan fácil como cambiar a qué apunta el elemento anterior.

Pero para las matrices, tienes que desplazar todos los demás elementos hacia abajo.

Y si no hay espacio, es posible que tengas que copiar todo a una nueva
ubicación. Las listas son mejores si quieres insertar elementos en el medio.


## Eliminaciones

¿Qué sucede si desea eliminar un elemento? Nuevamente, las listas son mejores, porque
solo necesita cambiar lo que apunta el elemento anterior. Con
arrays, todo debe moverse hacia arriba cuando elimina un elemento.
A diferencia de las inserciones, las eliminaciones siempre funcionarán. Las inserciones pueden fallar
a veces cuando no queda espacio en la memoria. Pero siempre puede
eliminar un elemento.

Estos son los tiempos de ejecución para operaciones comunes en arrays y
listas vinculadas:

			Arrays 		List
Reading		O(1) 		O(n)
Insertion	O(n) 		O(1)
Deletion    O(n)		O(1)
	
	
### EJERCICIOS

2.2 Supongamos que estás creando una aplicación para que los restaurantes tomen pedidos de los clientes. Tu aplicación necesita almacenar una lista de pedidos. Los camareros van añadiendo pedidos a esta lista y los chefs toman pedidos de la lista y los preparan.
Es una cola de pedidos: los camareros añaden pedidos al final de la cola y el chef toma el primer pedido de la cola y lo cocina.

¿Usarías una matriz o una lista enlazada para implementar esta cola?
(Sugerencia: las listas enlazadas son buenas para inserciones y eliminaciones, y las matrices son buenas
para el acceso aleatorio. ¿Cuál de las dos vas a utilizar aquí?)

(lista enlazada)

2.3 Hagamos un experimento mental. Supongamos que Facebook mantiene una lista de
nombres de usuario. Cuando alguien intenta iniciar sesión en Facebook, se realiza una búsqueda
de su nombre de usuario. Si su nombre está en la lista de nombres de usuario,
puede iniciar sesión. La gente inicia sesión en Facebook con bastante frecuencia, por lo que hay
muchas búsquedas en esta lista de nombres de usuario. Supongamos que Facebook
usa la búsqueda binaria para buscar en la lista. La búsqueda binaria necesita un acceso aleatorio: es necesario poder llegar al centro de la lista de
nombres de usuario al instante. Sabiendo esto, ¿implementaría la lista
como una matriz o una lista enlazada?


2.4 La gente también se registra en Facebook con bastante frecuencia. Supongamos que decides
utilizar una matriz para almacenar la lista de usuarios. ¿Cuáles son las desventajas
de una matriz para las inserciones? En particular, supongamos que estás utilizando la búsqueda
binaria para buscar inicios de sesión. ¿Qué sucede cuando agregas nuevos usuarios
a una matriz?

(lista)


2.5 En realidad, Facebook no utiliza ni una matriz ni una lista enlazada para almacenar
información de los usuarios. Consideremos una estructura de datos híbrida: una matriz
de listas enlazadas. Tienes una matriz con 26 espacios. Cada espacio apunta a una
lista enlazada. Por ejemplo, el primer espacio de la matriz apunta a una lista
enlazada que contiene todos los nombres de usuario que comienzan con a. El segundo espacio
apunta a una lista enlazada que contiene todos los nombres de usuario que comienzan con b,
y así sucesivamente.

Supongamos que Adit B se registra en Facebook y queremos añadirlo
a la lista. Vamos a la ranura 1 de la matriz, vamos a la lista enlazada de la ranura
1 y agregamos a Adit B al final. Ahora, supongamos que queremos buscar a
Zakhir H. Vamos a la ranura 26, que apunta a una lista enlazada de todos los
nombres Z. Luego buscamos en esa lista para encontrar a Zakhir H.
Comparamos esta estructura de datos híbrida con matrices y listas enlazadas. ¿Es
más lenta o más rápida que cada una para buscar e insertar? No tenemos
que dar los tiempos de ejecución de Big O, solo si la nueva estructura de datos sería más rápida o más lenta.

(rapida)


## Selection sort

Juntémoslo todo para aprender el segundo algoritmo:
la ordenación por selección. Para seguir esta sección, debes
comprender las matrices y las listas, así como la notación Big O.

Supón que tienes un montón de música en tu computadora.
Para cada artista, tienes un recuento de reproducciones.

Music     		Play count
radiohead 			156
the black keys		35
beck 				88
the strokes			61
...

Quieres ordenar esta lista de las canciones más escuchadas a las menos escuchadas, para poder clasificar
a tus artistas favoritos. ¿Cómo puedes hacerlo?

Una forma de hacerlo es recorrer la lista y buscar el artista más reproducido. Agregar
ese artista a una nueva lista.

Pongámonos nuestros sombreros de informáticos y veamos cuánto tiempo tardará esto en
ejecutarse. Recuerde que el tiempo O(n) significa que toca cada elemento de una lista
una vez. Por ejemplo, ejecutar una búsqueda simple en la lista de artistas significa
mirar a cada artista una vez.

Tenemos 11 items

Para encontrar al artista con el mayor número de reproducciones, tienes que comprobar cada
elemento de la lista. Esto lleva O(n) tiempo, como acabas de ver. Por lo tanto, tienes una
operación que lleva O(n) tiempo y tienes que hacerla n veces:

O(n) O(n) O(n) ... = n times

Esto lleva un tiempo O(n × n) o un tiempo O(n^2).
Los algoritmos de ordenamiento son muy útiles. Ahora puedes ordenar:

Nombres en una guía telefónica
Fechas de viaje
Correos electrónicos (del más reciente al más antiguo)

### Comprobando menos elementos cada vez

Quizás te estés preguntando: a medida que avanzas en las operaciones, la cantidad
de elementos que tienes que comprobar va disminuyendo. Al final, te encuentras
a punto de tener que comprobar solo un elemento. Entonces, ¿cómo puede el tiempo de ejecución seguir siendo
O(n^2)? Esa es una buena pregunta, y la respuesta tiene que ver con las constantes
en la notación Big O. Entraré en más detalles sobre esto en el capítulo 4, pero aquí está la esencia.

Tienes razón en que no tienes que comprobar una lista de n elementos cada vez.
Compruebas n elementos, luego n – 1, n - 2 … 2, 1. En promedio, compruebas una
lista que tiene 1/2 × n elementos. El tiempo de ejecución es O(n × 1/2 × n). Pero las constantes
como 1/2 se ignoran en la notación Big O (nuevamente, consulte el capítulo 4 para la discusión
completa), por lo que simplemente escribe O(n × n) o O(n^2).

Selection sort es un algoritmo muy bueno, pero no es muy rápido. El ordenamiento rápido es un
algoritmo Quicksort que solo requiere O(n log n) de tiempo. ¡Lo veremos
en el próximo capítulo!


## Código para ordenar una lista 

No le mostramos el código para ordenar la lista de música, pero a continuación se incluye
un código que hará algo muy similar: ordenar una matriz del
más pequeño al más grande. Escribamos una función para encontrar el elemento más pequeño
en una matriz:

```
def findSmallest(arr):
	smallest = arr[0]	#Almacena el valor más pequeño
	smallest_index = 0	#Almacena el índice del valor más pequeño
	for i in range(1, len(arr)):
		if arr[i] < smallest:
			smallest = arr[i]
			smallest_index = i
	return smallest_index

```

Now you can use this function to write selection sort:

```
def selectionSort(arr):	#Ordena una matriz
	newArr = []
	for i in range(len(arr)):
		smallest = findSmallest(arr) #Encuentra el elemento más pequeño de la matriz y lo agrega a la nueva matriz
		newArr.append(arr.pop(smallest))
	return newArr
	
print selectionSort([5, 3, 6, 2, 10])
	
```


## Recap 

1. La memoria de su computadora es como un conjunto gigante de cajones.
2. Cuando desee almacenar múltiples elementos, utilice una matriz o una lista.
3. Con una matriz, todos sus elementos se almacenan uno al lado del otro.
4. Con una lista, los elementos se encuentran dispersos por todas partes y un elemento almacena
la dirección del siguiente.
5. Las matrices permiten lecturas rápidas.
6. Las listas enlazadas permiten inserciones y eliminaciones rápidas.
7. Todos los elementos de la matriz deben ser del mismo tipo (todos enteros, todos dobles, etc.).



# Recursion 

1. Aprenderá sobre la recursión. La recursión es una técnica de
codificación que se utiliza en muchos algoritmos. Es un elemento
fundamental para comprender los capítulos posteriores de este libro.

2. Aprenderá a dividir un problema en un caso base y un caso recursivo. La estrategia de dividir y vencer (capítulo 4) utiliza este concepto simple para resolver problemas difíciles.


Estoy entusiasmado con este capítulo porque cubre la recursión, una
manera elegante de resolver problemas. La recursión es uno de mis temas favoritos,
pero genera división. A la gente le encanta o la odia, o la odia hasta
que aprende a amarla unos años después. Personalmente, yo estaba en ese tercer grupo.
Para facilitarte las cosas, tengo algunos consejos:

1. Este capítulo tiene muchos ejemplos de código. Ejecuta el código tú mismo
para ver cómo funciona.

2. Hablaré sobre funciones recursivas. Al menos una vez, recorre paso a paso una
función recursiva con lápiz y papel: algo como, “Veamos,
paso 5 a factorial, y luego regreso 5 veces pasando 4 a factorial, que es...”, y así sucesivamente. Recorrer una función
como esta te enseñará cómo funciona una función recursiva.

Este capítulo también incluye mucho pseudocódigo. El pseudocódigo es una
descripción de alto nivel del problema que intentas resolver, en código.
Está escrito como código, pero está pensado para que sea más parecido al habla humana.


## Recursion 

Imagina que estás hurgando en el ático de tu abuela y encuentras una
misteriosa maleta cerrada.

Imagina que estás buscando en el ático de tu abuela y encuentras una
misteriosa maleta cerrada.

La abuela te dice que la llave de la maleta probablemente esté en esta
otra caja.

Caja principal -> Cajas anidadas

Esta caja contiene más cajas, con más cajas dentro de esas cajas. La
clave está en una caja en algún lugar. ¿Cuál es su algoritmo para buscar la clave?
Piense en un algoritmo antes de seguir leyendo.

A continuación se muestra un enfoque.

1. Haz una pila de cajas para revisar.
2. Toma una caja y revísala.
3. Si encuentras una caja, agrégala a la pila para revisarla más tarde.
4. Si encuentras una llave, ¡ya está!
5. Repite el proceso.

A continuación, se muestra un enfoque alternativo.

1. Revisa la caja.
2. Si encuentras una caja, ve al paso 1.
3. Si encuentras una llave, ¡ya está!

¿Qué método te parece más sencillo? El primer método utiliza un bucle while. Mientras la pila no esté vacía, toma una caja y mírala:

```
def look_for_key(main_box):
	pile = main_box.make_a_pile_to_look_through()
	while pile is not empty:
		box = pile.grab_a_box()
		for item in box:
			if item.is_a_box():
				pile.append(item)
			elif item.is_a_key():
				print “found the key!”

```

La segunda forma utiliza la recursión. 
La recursión es cuando una función se llama a sí misma.
Esta es la segunda forma en pseudocódigo:

```
def look_for_key(box):
	for item in box:
		if item.is_a_box():
			look_for_key(item) #Recursion
		elif item.is_a_key():
			print “found the key!”

```

Ambos enfoques logran lo mismo, pero el segundo enfoque
es más claro para mí. La recursión se utiliza cuando hace que la solución sea más clara.
No hay ningún beneficio en el rendimiento al utilizar la recursión; de hecho, los bucles
a veces son mejores para el rendimiento. Me gusta esta cita de Leigh Caldwell
en Stack Overflow: “Los bucles pueden lograr una ganancia de rendimiento para
tu programa. La recursión puede lograr una ganancia de rendimiento para tu
programador. ¡Elige cuál es más importante en tu situación!”1
Muchos algoritmos importantes utilizan la recursión, por lo que es importante
entender el concepto.


Caso base y caso recursivo

Como una función recursiva se llama a sí misma, es fácil escribir una función
incorrectamente que termine en un bucle infinito. Por
ejemplo, supongamos que desea escribir una función que imprima una cuenta regresiva,
como esta:

3...2...1

Puede escribirla recursivamente, de la siguiente manera:

```
def countdown(i):
	print i
	countdown(i-1)

```

Escriba este código y ejecútelo. Notará un problema: ¡esta función
se ejecutará para siempre!

3...2...1...0...-1...-2...
(Presione Ctrl-C para cerrar su script).

Cuando escribes una función recursiva, tienes que indicarle cuándo dejar de
recursar. 

Por eso, cada función recursiva tiene dos partes: 
El caso base y el caso recursivo. 
El caso recursivo es cuando la función se llama a sí misma. El caso base es cuando la función no se llama a sí misma de nuevo... para
no entrar en un bucle infinito. 

Agreguemos un caso base a la función de cuenta regresiva:

```
def countdown(i):
	print i
	if i <= 0:	#Base case
		return
	else:	#Recursive case
		countdown(i-1)

```

Ahora la función funciona como se esperaba. Es algo como esto.

	 print
	/     \
if i<=1	  else call countdown(i-1)
done	  countdown(i-1)

base case	recursive case


## The stack

Esta sección cubre la pila de llamadas. Es un concepto importante
en programación. La pila de llamadas es un concepto importante en
la programación general, y también es importante entenderla
cuando se usa la recursión.
Supongamos que estás organizando una barbacoa. Mantienes una lista de tareas pendientes para la
barbacoa, en forma de una pila de notas adhesivas.

¿Recuerdas cuando hablamos de matrices y listas,
y tenías una lista de tareas pendientes? Podías agregar elementos de tareas pendientes
en cualquier lugar de la lista o eliminar elementos aleatorios. La pila de notas adhesivas es mucho más simple. Cuando insertas un elemento,
se agrega al principio de la lista. Cuando lees un elemento,
solo lees el elemento superior y se quita de la lista. Entonces tu lista de tareas pendientes solo tiene dos acciones: push (insertar) y pop (eliminar y leer).

push
(add a new item to the top)

pop
(remove the top most item and read it)


Veamos la lista de tareas pendientes en acción.

Saca una tarea pendiente de la pila 
-> dice "obtener comida"; necesitas comprar bollos, galletas y hornear un pastel 
-> insertemos estas tareas pendientes en la pila

Esta estructura de datos se llama pila. 
La pila es una estructura de datos simple.
¡Has estado usando una pila todo este tiempo sin darte cuenta!


### The call stack

Tu computadora usa una pila interna llamada pila de llamadas. Veámosla en
acción. Aquí hay una función simple:

```
def greet(name):
	print “hello, “ + name + “!”
	greet2(name)
	print “getting ready to say bye...”
	bye()

```

Esta función te saluda y luego llama a otras dos funciones. Aquí están
esas dos funciones:

```
def greet2(name):
print “how are you, “ + name + “?”
	
	def bye():
		print “ok bye!”

```

Veamos qué sucede cuando llamas a una función.

Nota
print es una función en Python, pero para facilitar las cosas en este ejemplo,
haremos como si no lo fuera. Simplemente sigue el juego.

Supón que llamas a greeting(“maggie”). Primero, tu computadora asigna una caja
de memoria para esa llamada de función.

| ... |

Ahora usemos la memoria. El nombre de la variable está establecido en “maggie”. Es necesario guardarla en la memoria.

|	Greet()	 |
..............
|name:|Maggie|

Cada vez que realizas una llamada a una función, tu computadora guarda los valores
de todas las variables para esa llamada en la memoria de esta manera. Luego, imprimes
¡hola, maggie! Luego llamas a saludo2(“maggie”). Nuevamente, tu
computadora asigna un espacio de memoria para esta llamada a la función.

curret function call: 

|	Greet2() |
..............
|name:|Maggie|
..............
|	Greet()	 |
..............
|name:|Maggie|

Tu computadora está usando una pila para estos cuadros. El segundo cuadro se agrega
encima del primero. Imprimes ¿cómo estás, Maggie? Luego
regresas de la llamada de función. Cuando esto sucede, el cuadro que está en la parte superior de la
pila se quita.

|	Greet()	 |
..............
|name:|Maggie|

Ahora, el cuadro superior de la pila es para la función de saludo, lo que
significa que regresaste a la función de saludo. Cuando llamaste a la función
greet2, la función de saludo se completó parcialmente. Esta es
la gran idea detrás de esta sección: cuando llamas a una función desde otra función, la función que llama se detiene en un estado parcialmente completado. Todos

(recursividad)

los valores de las variables para esa función aún están almacenados en la memoria.
Ahora que terminaste con la función de saludo2, regresas a la función
greet y continúas donde lo dejaste. Primero imprimes
preparándote para decir adiós…. Llamas a la función de adiós.

| bye()  | ->
^	 
| greet()|

Se agrega un cuadro para esa función en la parte superior de la pila. Luego imprimes
ok bye! y regresas de la llamada de función.

Y regresas a la función de saludo. No hay nada más que hacer,
así que regresas de la función de saludo también. Esta pila, que se usa para guardar las
variables para múltiples funciones, se llama pila de llamadas.


## Ejercicio

3.1 Supongamos que le muestro una pila de llamadas como ésta.

| greet2() |
............
| greet()  |

¿Qué información me puede dar, basándose únicamente en esta pila de llamadas?

Primero tiene que asignar/reservar una caja/memoria vacia para la funcion
La computadora guarda los valores de todas las variables para esa llamada asignando espacio en la memoria
Está usando una pila para guardar espacio para los valores de las funciones. 

La segunda función se agrega por encima de la primera. 
Se ejecuta la segunda función 
Luego regresas de la llamada a la primera función. 
Cuando esto sucede, la función que está en la parte superior de la pila se quita.

Cuando llamas a una función desde otra función, la función que llama se detiene en un estado parcialmente completado
Los valores de las variables para la primera función aún están almacenados en la memoria.

Ahora veamos la pila de llamadas en acción con una función recursiva.


### Call stack con recursion



