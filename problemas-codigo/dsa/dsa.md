# DSA

Estructuras de Datos y Algoritmos enseña a pensar y resolver problemas complejos de forma sistemática.

El uso de la estructura de datos y el algoritmo adecuados hace que su programa se ejecute más rápido, especialmente cuando trabaja con muchos datos.


Ej: Cola (first in, first out)

Una función como enqueue() ingresa elementos por el final: 

El elemento se pondrá al final de la cola. 

Una función como dequeue() saca elementos por el inicio:

Saldrá el primer elemento que esté en la cola.  

```
<- out e1, e2, e3, e4 <-in

```


## Historia 

La palabra “algoritmo” proviene de “al-Khwarizmi”, nombre de un erudito persa que vivió alrededor del año 800.

El concepto de resolución algorítmica de problemas se remonta a tiempos antiguos, mucho antes de la invención de las computadoras.

El estudio de estructuras de datos y algoritmos realmente despegó con la invención de las computadoras en la década de 1940, para gestionar y procesar datos de manera eficiente


# 1. Intro

##### Las estructuras de datos tratan sobre cómo se pueden almacenar los datos en diferentes estructuras.

##### Los algoritmos tratan sobre cómo resolver diferentes problemas, a menudo mediante la búsqueda y manipulación de estructuras de datos.

##### La teoría sobre estructuras de datos y algoritmos (DSA) nos ayuda a utilizar grandes cantidades de datos para resolver problemas de manera eficiente.


## Data structures

Una estructura de datos es una forma de almacenar datos.

Estructuramos los datos de diferentes maneras dependiendo de qué datos tengamos y qué queramos hacer con ellos.

Ej, Si queremos almacenar datos sobre personas con las que tenemos parentesco, utilizamos un árbol genealógico como estructura de datos.

Provee información sobre las personas con las que tenemos parentesco y cómo lo tienen, y queremos una visión general para poder encontrar fácilmente a un familiar específico, varias generaciones atrás.

```
Emma Carl
	|
  Lili

```

Sin ella sería dificil de ver y determinar los parentescos. 


Las estructuras de datos nos brindan la posibilidad de gestionar grandes cantidades de datos de manera eficiente para usos como grandes bases de datos y servicios de indexación de Internet.

Son componentes esenciales para crear algoritmos rápidos y potentes.

Ayudan a gestionar y organizar datos, reducen la complejidad y aumentan la eficiencia.


En Ciencias de la Computación hay dos tipos diferentes de estructuras de datos.

1. Estructuras de datos primitivas:

Estructuras de datos básicas proporcionadas por los lenguajes de programación para representar valores individuales, como números enteros, números de punto flotante, caracteres y valores booleanos


2. Estructuras de datos abstractas:

Estructuras de datos de alto nivel que se construyen utilizando tipos de datos primitivos y permiten operaciones más complejas y especializadas.

Incluyen matrices, listas enlazadas, pilas, colas, árboles y grafos.


## Algorithms

##### Es un conjunto de instrucciones paso a paso para resolver un problema determinado o lograr un objetivo específico.

las instrucciones paso a paso están escritas en un lenguaje de programación.

Un algoritmo utiliza estructuras de datos.

Un algoritmo eficiente puede ayudarnos a encontrar la solución que buscamos y a transformar un programa lento en uno más rápido.

Al estudiar algoritmos, los desarrolladores pueden escribir mejores programas.

1. Encontrar la ruta más rápida en un sistema de navegación GPS

2. Navegar un avión o un automóvil (control de crucero)

3. Encontrar lo que buscan los usuarios (motor de búsqueda)

4. Ordenar, por ejemplo ordenar películas por calificación


Están diseñados para resolver problemas específicos y, a menudo, funcionan con estructuras de datos específicas.

Por ejemplo, el algoritmo "Bubble Sort" está diseñado para ordenar valores y funciona con matrices.


## Estructuras de datos junto con algoritmos (DSA)

Van de la mano, una estructura de datos no sirve de mucho si no se puede buscar en ella ni manipularla eficientemente mediante algoritmos

Los algoritmos de este tutorial no sirven de mucho sin una estructura de datos con la que trabajar.

DSA trata de encontrar formas eficientes de almacenar y recuperar datos, realizar operaciones con datos y resolver problemas específicos.

Entendiendo DSA puedes: 

1. Decidir qué estructura de datos o algoritmo es mejor para una situación determinada.

2. Cree programas que se ejecuten más rápido o utilicen menos memoria.

3. Comprender cómo abordar problemas complejos y resolverlos de forma sistemática.


## Aplicaciones de DSA 

Se utilizan en prácticamente todos los sistemas de software, desde sistemas operativos hasta aplicaciones web:

Ej: 

1. Para gestionar grandes cantidades de datos, como en una red social o un motor de búsqueda.

2. Para programar tareas, para decidir qué tarea debe realizar una computadora primero.

3. Para planificar rutas, como en un sistema GPS para encontrar el camino más corto de A a B.

4. Para optimizar procesos, como por ejemplo organizar las tareas para que puedan completarse lo más rápidamente posible.

5. Para resolver problemas complejos: desde encontrar la mejor forma de cargar un camión hasta hacer que una computadora “aprenda” a partir de datos.


DSA es fundamental en casi todos los ámbitos del mundo del software:

Sistemas operativos
Sistemas de bases de datos
Aplicaciones web
Aprendizaje automático
Juegos de vídeo
Sistemas criptográficos
Análisis de datos
Motores de búsqueda


## Teoría y terminología

Se necesitarán nuevos conceptos teóricos y terminología (nuevas palabras) para que podamos comprender mejor las estructuras de datos y los algoritmos en los que trabajaremos.

Ej: 

1. Algoritmo: Un conjunto de instrucciones paso a paso para resolver un problema específico.

2. Estructura de datos: Una forma de organizar los datos para que se puedan usar eficientemente. Las estructuras de datos comunes incluyen matrices, listas enlazadas y árboles binarios. 

3. Complejidad de tiempo: Una medida de la cantidad de tiempo que tarda un algoritmo en ejecutarse, dependiendo de la cantidad de datos en los que trabaja el algoritmo.

4. Complejidad espacial: Una medida de la cantidad de memoria que utiliza un algoritmo, dependiendo de la cantidad de datos en los que trabaja el algoritmo.

5. Notación Big O: Una notación matemática que describe el comportamiento límite de una función cuando el argumento tiende a un valor particular o al infinito. Se utiliza en este tutorial para describir la complejidad temporal de un algoritmo.

6. Recursión: Una técnica de programación donde una función se llama a sí misma.

7. Divide y vencerás: Un método para resolver problemas complejos que consiste en dividirlos en subproblemas más pequeños y manejables, resolverlos y combinar las soluciones. La recursión se utiliza a menudo al usar este método en un algoritmo.

8. Fuerza bruta: Una forma simple y directa en la que un algoritmo puede funcionar simplemente probando todas las soluciones posibles y luego eligiendo la mejor.



# 2. Algoritmo simple 

## Números de Fibonacci

Son muy útiles para introducir algoritmos.

Los números de Fibonacci reciben su nombre de un matemático italiano del siglo XIII conocido como Fibonacci

Los dos primeros números de Fibonacci son 0 y 1. 

El siguiente número de Fibonacci es siempre la suma de los dos números anteriores, por lo que obtenemos 0, 1, 1, 2, 3, 5, 8, 13, 21, ...


Con tres versiones diferentes del algoritmo de Fibonacci. 

Se podrá ver la diferencia entre programar con bucles y con recursión de forma sencilla.


## El algoritmo del número de Fibonacci

Todo lo que necesitamos hacer es sumar los dos números de Fibonacci anteriores (0 y 1).

##### Conocemos el principio de cómo encontrar el siguiente número (suma de los dos anteriores).

Ej: 

Algoritmo para crear los 20 primeros números de Fibonacci.

Funcionamiento: 

1. Comience con los dos primeros números de Fibonacci: 0 y 1.
Suma los dos números anteriores para crear un nuevo número de Fibonacci.
Actualiza el valor de los dos números anteriores.

2. Repite los puntos a y b anteriores 18 veces.


## Bucles vs. Recursión

Para mostrar la diferencia entre bucles y recursión, implementaremos soluciones para encontrar números de Fibonacci de tres maneras diferentes:

1. Utilizando un bucle for.

2. Utilizando recursión.

3. Encontrar la nth (sucesivos) el número de Fibonacci usando recursión


## Loop

##### Puede ser una buena idea enumerar lo que debe contener o hacer el código antes de programarlo:

1. Dos variables para contener los dos números de Fibonacci anteriores

2. Un bucle for que se ejecuta 18 veces

3. Crea nuevos números de Fibonacci sumando los dos anteriores

4. Imprima el nuevo número de Fibonacci

5. Actualizar las variables que contienen los dos números de Fibonacci anteriores

Usando la lista anterior, es más fácil escribir el programa.

```
prev2 = 0
prev1 = 1

print(prev2)
print(prev1)
for fibo in range(18):
    newFibo = prev1 + prev2
    print(newFibo)
    prev2 = prev1
    prev1 = newFibo

```

0
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
987
1597
2584
4181 


## Recursion 

Cuando una función se llama a sí misma.

Necesitamos la mayoría de las mismas cosas que en el ejemplo de código anterior, pero necesitamos reemplazar el bucle for con recursión.

##### Para reemplazar el bucle for con recursión, necesitamos encapsular gran parte del código en una función. 

##### Necesitamos que la función se llame a sí misma para crear un nuevo número de Fibonacci siempre que el número de números de Fibonacci producido sea menor o igual a 19.

Nuestro código se ve así

```
print(0)
print(1)
count = 2

def fibonacci(prev1, prev2):
    global count
    if count <= 19:
        newFibo = prev1 + prev2
        print(newFibo)
        prev2 = prev1
        prev1 = newFibo
        count += 1
        fibonacci(prev1, prev2)
    else:
        return

fibonacci(1,0)

```


3. nth con recursion 

Para encontrar el n-ésimo número de Fibonacci podemos escribir un código basado en la fórmula matemática para el número de Fibonacci n:

##### F(n) = F(n-1) + F(n-2)

Esto simplemente significa que, por ejemplo, el décimo número de Fibonacci es la suma del noveno y octavo número de Fibonacci.

Nota: Esta fórmula utiliza un índice basado en 0. 

##### Esto significa que para generar el vigésimo número de Fibonacci, debemos escribir F(19)


Al usar este concepto con recursión, podemos dejar que la función se llame a sí misma siempre que n sea menor o igual a 1. 

Si n≤1 significa que la ejecución del código ha alcanzado uno de los dos primeros números de Fibonacci, 1 o 0.

El código se ve así

```
def F(n):
    if n <= 1:
        return n
    else:
        return F(n - 1) + F(n - 2)

print(F(19))

```

Tenga en cuenta que este método recursivo se llama a sí mismo dos veces, no solo una. 

Esto marca una gran diferencia en la ejecución del programa en nuestro ordenador. 

##### El número de cálculos se disparará al aumentar el número de Fibonacci deseado. 

##### Para ser más precisos, el número de llamadas a funciones se duplicará cada vez que incrementemos el número de Fibonacci deseado en uno.

Basta con echar un vistazo al número de llamadas de función para F(5):

```
						F(5)
	
				F(4)			F(3)

			F(3)	F(2)	F(2)	F(1)

	F(2)	F(1)	F(1)	F(0)	F(1)	F(0)

F(1)	F(0)

```

Se muestra cómo la función recursiva invoca valores de retorno para que F(5) devuelva el valor correcto al final:


##### Hay dos cosas importantes a tener en cuenta aquí: la cantidad de llamadas a funciones y la cantidad de veces que se llama a la función con los mismos argumentos.

##### Si bien el código es fascinante y muestra cómo funciona la recursión, la ejecución real del código es demasiado lenta e ineficaz para crear números de Fibonacci grandes.


## Rs

Antes de continuar, veamos lo que hemos visto hasta ahora:

1. Un algoritmo se puede implementar de diferentes maneras y en diferentes lenguajes de programación.

2. La recursión y los bucles son dos técnicas de programación diferentes que se pueden utilizar para implementar algoritmos.



# Array/Matriz/Lista

Estructura de datos que se utiliza para almacenar múltiples elementos.

Muchos algoritmos utilizan matrices.

Por ejemplo, se puede utilizar un algoritmo para buscar en una matriz el valor más bajo.

Matriz en python: 

```
my_array = [7, 12, 9, 4, 11]

```

Genera un tipo de dato "lista" de Python, este tipo de dato se puede usar como un array.

##### Los arrays están indexados, lo que significa que cada elemento del array tiene un índice, un número que indica su ubicación dentro del array, empieza en 0.

```
my_array = [7, 12, 9, 4, 11]
print( my_array[0] )

```


## Algoritmo: Valor más bajo en una matriz

### Funcionamiento: 

1. Revisa los valores de la matriz uno por uno.

2. Comprueba si el valor actual es el más bajo hasta el momento y, si lo es, almacénalo.

3. Después de ver todos los valores, el valor almacenado será el más bajo de todos los valores de la matriz.

Ej: 

Lowest value: 3

`[ 7, 12, 9, 11, 3 ]` 

Toma el primer número como minimo. 

Recorre el arr para compararlos con los demás y elegir otro minimo si es menor a este. 

Al llegar al 3, se queda con él. 


## Implementación

Antes de implementar el algoritmo utilizando un lenguaje de programación real. 

##### 1.  Generalmente es inteligente escribir primero el algoritmo como un procedimiento paso a paso.

Si puedes escribir el algoritmo en algo entre lenguaje humano y lenguaje de programación, el algoritmo será más fácil de implementar más adelante porque evitamos ahogarnos en todos los detalles de la sintaxis del lenguaje de programación.

##### (clave) 1. Crea una variable 'minVal' y configúrala igual al primer valor de la matriz.

2. Recorrer cada elemento de la matriz.

##### (clave) 3. Si el elemento actual tiene un valor menor que 'minVal', actualice 'minVal' a este valor.

4. Después de ver todos los elementos de la matriz, la variable 'minVal' ahora contiene el valor más bajo.

#### (Toma un valor del arr y comparamos con otro del arr)


##### 2.También puedes escribir el algoritmo de una manera que se parezca más a un lenguaje de programación si lo deseas, como esto:

```
Variable 'minVal' = array[0]
For each element in the array
    If current element < minVal
        minVal = current element 
```

El pseudocódigo es una descripción de lo que hace un programa, utilizando un lenguaje intermedio entre el lenguaje humano y un lenguaje de programación

Una vez que hayamos escrito el algoritmo, es mucho más fácil implementarlo en un lenguaje de programación específico:

```
my_array = [7, 12, 9, 4, 11]
minVal = my_array[0]    # Step 1

for i in my_array:      # Step 2
    if i < minVal:      # Step 3
        minVal = i
        
print('Lowest value: ',minVal) # Step 4

```
out: Lowest value: 4


## Complejidad temporal del algoritmo

Al explorar algoritmos, a menudo observamos cuánto tiempo tarda un algoritmo en ejecutarse en relación con el tamaño del conjunto de datos.

##### En el ejemplo anterior, el tiempo que el algoritmo necesita para ejecutarse es proporcional, o lineal, al tamaño del conjunto de datos. 

##### Esto se debe a que el algoritmo debe visitar cada elemento del array una vez para encontrar el valor más bajo. 

##### El bucle debe ejecutarse 5 veces, ya que hay 5 valores en el array. 

Y si el array tuviera 1000 valores, el bucle tendría que ejecutarse 1000 veces.

Es una relación entre la cantidad de operaciones de comparación necesarias para encontrar el valor más bajo y el tamaño de la matriz.

Relación proporcional: num aument oper, aument num val


## Código clave

```
Valor inicial: 
minVal = my_array[0]

Comparación y asignación: 
if i < minVal:
	minVal = i
	
```



# Bubble Sort 

##### Algoritmo que ordena una matriz desde el valor más bajo hasta el valor más alto.

La palabra “burbuja” proviene de cómo funciona este algoritmo: hace que los valores más altos “burbujeen”.


## Funcionamiento: 

1. Recorra la matriz, un valor a la vez.

2. Para cada valor, compare el valor con el siguiente valor.

##### (clave) 3. Si el valor es mayor que el siguiente, intercambie los valores para que el valor más alto quede último (Clave).

4. Recorra la matriz tantas veces como valores haya en ella.

##### (Toma dos valores del arr y los comparamos y movemos, cambiamos)


## Ejecución manual

Antes de implementar el algoritmo Bubble Sort en un lenguaje de programación, ejecutemos manualmente una matriz corta solo una vez, solo para tener la idea.

1. Comenzamos con una matriz sin ordenar.

`[7, 12, 9, 11, 3]`

2. Observamos los dos primeros valores. 

##### (clave) ¿El valor más bajo va primero? Sí, así que no necesitamos intercambiarlos.
  .  . 	
`[7, 12, 9, 11, 3]`

3. Da un paso adelante y observa los valores 12 y 9. 

##### ¿El valor más bajo aparece primero? No.
     .   .
`[7, 12, 9, 11, 3]` 

4. Entonces necesitamos intercambiarlos para que el 9 venga primero

`[7, 9, 12, 11, 3]` 

5. Dando un paso adelante, mirando el 12 y el 11.

`[7, 9, 12, 11, 3]`

6. Debemos intercambiar de manera que 11 venga antes que 12.

`[7, 9, 11, 12, 3]`

7. Mirando el 12 y el 3, ¿necesitamos intercambiarlos? Sí.

`[7, 9, 11, 12, 3]`

8. Intercambiando 12 y 3 para que 3 venga primero.

 `[7, 9, 11, 3, 12]` 

¡Primer recorrido terminado!


## En el recorrido

##### Debemos entender lo que sucedió en esta primera ejecución para comprender completamente el algoritmo, de modo que podamos implementarlo en un lenguaje de programación.

##### ¿Puedes ver qué pasó con el valor más alto, 12? Ha subido hasta el final de la matriz, donde debería estar. Pero el resto de la matriz permanece sin ordenar.

##### Por lo tanto, el algoritmo de Ordenamiento de Burbuja debe recorrer la matriz una y otra vez, cada vez que el siguiente valor más alto suba a su posición correcta.

El ordenamiento continúa hasta que el valor más bajo, 3, quede al principio de la matriz.

##### Esto significa que necesitamos recorrer la matriz 4 veces para ordenar la matriz de 5 valores

Y cada vez que el algoritmo recorre la matriz, la parte restante sin ordenar de la matriz se vuelve más corta.

##### (5 Valores: 1 recorrido ordena 12; 2: ordena 11; 3: ordena 9; 4: ordena 3 y 7)

##### (clave) (Ver, conocer el comportamiento; sus claves,
qué efectos tiene en sus elementos)



## Implementación de Bubble Sort

Lista de pasos y pseudocódigo. 

1. Una matriz con valores para ordenar.

##### 2. Un bucle interno que recorre la matriz e intercambia valores si el primer valor es mayor que el siguiente. Este bucle debe recorrer un valor menos en cada ejecución.

##### 3. Un bucle externo que controla cuántas veces debe ejecutarse el bucle interno. Para una matriz con n valores, este bucle externo debe ejecutarse n-1 veces.

```
my_array = [64, 34, 25, 12, 22, 11, 90, 5]

n = len(my_array)
for i in range(n-1):
    for j in range(n-i-1):
        if my_array[j] > my_array[j+1]:
            my_array[j], my_array[j+1] = my_array[j+1], my_array[j]

print("Sorted array:", my_array)

```

Sorted array: `[5, 11, 12, 22, 25, 34, 64, 90]`
 

## Mejora en bubble sort 

##### Si la matriz ya está casi ordenada, con los números más bajos al principio, así por ejemplo:

```
my_array = [7, 3, 9, 12, 11]

```

##### (Solo hace falta ordenar 7 y 3) En este caso, la matriz se ordenará después de la primera ejecución, pero el algoritmo Bubble Sort continuará ejecutándose, sin intercambiar elementos, y eso no es necesario.

Si el algoritmo recorre la matriz una vez sin intercambiar ningún valor, la matriz debe terminar de ordenarse y podemos detener el algoritmo, de esta manera:

```
my_array = [7, 3, 9, 12, 11]

n = len(my_array)
for i in range(n-1):
    swapped = False
    for j in range(n-i-1):
        if my_array[j] > my_array[j+1]:
            my_array[j], my_array[j+1] = my_array[j+1], my_array[j]
            swapped = True
    if not swapped:
        break

print("Sorted array:", my_array)
 
```


## Complejidad temporal de bubble sort 

##### Recorre cada valor del array, comparándolo con el valor contiguo. 

##### Por lo tanto, para un array de n valores, debe haber n tales comparaciones en un bucle.

Y después de un bucle, la matriz se repite una y otra vez n veces.

##### Esto significa que hay n⋅n Las comparaciones se realizan en total, por lo que la complejidad temporal del Bubble Sort es:

##### O(n^2)

Como puedes ver, el tiempo de ejecución aumenta muy rápido cuando se aumenta el tamaño de la matriz.

Existen algoritmos de clasificación que son más rápidos que éste, como Quicksort, que veremos más adelante.


## Código clave

```
valor:
n = len(my_array)

bucle interno: recorrido e intercambio si v1>v1+1
recorrido  un valor menos en cada ejec
for j in range(n-i-1):

Cambio: 
my_array[j], my_array[j+1] = my_array[j+1], my_array[j]

Array semi completo:
swapped = True

bucle externo: num de ejecuciones de bucle interno
recorr(ejecucion n-1)
for i in range(n-1):

swapped = False

```

##### (n -i(index/elem/pos)-1 ), swapped e intercambio i, j (asignación)



# Selection Sort 

##### Encuentra el valor más bajo en una matriz y lo mueve al frente de la matriz.

##### El algoritmo recorre la matriz una y otra vez, moviendo los valores más bajos siguientes al frente, hasta que la matriz esté ordenada.


## Funcionamiento

1. Recorra la matriz para encontrar el valor más bajo.

2. Mueva el valor más bajo al frente de la parte sin ordenar de la matriz.

3. Recorra la matriz nuevamente tantas veces como valores haya en ella.


## Ejecución manual

Antes de implementar el algoritmo de ordenamiento por selección en un lenguaje de programación, ejecutemos manualmente una matriz corta solo una vez, solo para tener la idea.

1. Comenzamos con una matriz sin ordenar.

 `[ 7, 12, 9, 11, 3]`
 
2. Recorre la matriz, valor por valor. ¿Cuál es el valor más bajo? 3, ¿verdad?
				 .	
`[ 7, 12, 9, 11, 3]`

3. Mueva el valor más bajo 3 al frente de la matriz. 
   .
`[ 3, 7, 12, 9, 11]`

4. Mire el resto de los valores, comenzando con 7. 7 es el valor más bajo y ya está al frente de la matriz, por lo que no necesitamos moverlo.
      .
`[ 3, 7, 12, 9, 11]`

5. Mire el resto de la matriz: 12, 9 y 11. 9 es el valor más bajo.
			  .
 `[ 3, 7, 12, 9, 11]` 
 
6. Mueva el 9 al frente.
		
`[ 3, 7, 9, 12, 11]`

7. Mirando el 12 y el 11, 11 es el más bajo
				 .
`[ 3, 7, 9, 12, 11]` 

8. Moverlo 

`[ 3, 7, 9, 11, 12]`

Finalmente se ordena la matriz.


## Comportamiento del algoritmo

##### ¿Puedes ver qué pasó con el valor más bajo, 3? En el paso 3, se movió al principio de la matriz, donde corresponde pero en ese paso el resto de la matriz permanece sin ordenar.

Por lo tanto, el algoritmo de Ordenamiento por Selección debe recorrer la matriz una y otra vez, cada vez que el siguiente valor más bajo se mueve delante de la parte sin ordenar, a su posición correcta.

El ordenamiento continúa hasta que el valor más alto, 12, queda al final de la matriz. 

##### Esto significa que necesitamos recorrer la matriz 4 veces para ordenar la matriz de 5 valores.

Y cada vez que el algoritmo recorre la matriz, la parte restante sin ordenar de la matriz se vuelve más corta.


## Implementación

1. Una matriz con valores para ordenar.

2. Un bucle interno que recorre la matriz, encuentra el valor más bajo y lo mueve al principio. 
Este bucle debe recorrer un valor menos en cada ejecución.

3. Un bucle externo que controla cuántas veces debe ejecutarse el bucle interno. 
Para una matriz con n valores, este bucle externo debe ejecutarse n−1 veces.

```
my_array = [64, 34, 25, 5, 22, 11, 90, 12]

n = len(my_array)
for i in range(n-1):
    min_index = i
    for j in range(i+1, n):
        if my_array[j] < my_array[min_index]:
            min_index = j
    min_value = my_array.pop(min_index)
    my_array.insert(i, min_value)

print("Sorted array:", my_array)

```


## Problema de cambio de ordenamiento por selección

##### El algoritmo de ordenamiento por selección se puede mejorar un poco más.

##### En el código anterior, se elimina el elemento con el valor más bajo y luego se inserta delante de la matriz.

##### Cada vez que se elimina el siguiente elemento de la matriz con el valor más bajo, todos los elementos siguientes deben desplazarse un lugar hacia abajo para compensar la eliminación.

			 rmv
`[64, 34, 25, 5, 22, 11, 90, 12]`
			shift <- . . . .  			

Estas operaciones de desplazamiento toman mucho tiempo, ¡y aún no hemos terminado! 

Tras encontrar y eliminar el valor más bajo (5), este se inserta al principio del array, lo que provoca que todos los valores siguientes se desplacen una posición hacia arriba para dejar espacio al nuevo valor, como se muestra en la imagen a continuación.

  ins	
`[ 5, 64, 34, 25 22, 11, 90, 12]`
	  . . . . -> shift 

En un lenguaje de programación avanzado como Python o Java, no verá estas operaciones de desplazamiento en el código, pero se ejecutan en segundo plano. 

Estas operaciones requieren tiempo adicional para que la computadora las ejecute, lo cual puede ser un problema.


## Solución: ¡Intercambiar valores!

##### En lugar de realizar todos los cambios, intercambie el valor más bajo (5) con el primer valor (64) como se muestra a continuación.

   .   swap   .
`[64, 34, 25, 5, 22, 11, 90, 12]`


##### El valor más bajo termina en la posición correcta y no importa dónde coloquemos el otro valor con el que estamos intercambiando, porque aún no está ordenado.

```
n = len(my_array)
for i in range(n):
    min_index = i
    for j in range(i+1, n):
        if my_array[j] < my_array[min_index]:
            min_index = j   
    my_array[i], my_array[min_index] = my_array[min_index], my_array[i]

print("Sorted array:", my_array)
 
```


## Complejidad temporal de selection sort 

La ordenación por selección ordena una matriz de n valores.

En promedio, alrededor de n/2 elementos se comparan los elementos para encontrar el valor más bajo en cada bucle.

Y Selection Sort debe ejecutar el bucle para encontrar el valor más bajo aproximadamente n veces.

Obtenemos la complejidad temporal:

O(n/2*n)=O(n^2)

El tiempo de ejecución es el mismo que para Bubble Sort: el tiempo de ejecución aumenta muy rápido cuando se aumenta el tamaño de la matriz.

La diferencia más significativa con respecto al ordenamiento de burbuja

El mejor y el peor caso son en realidad casi iguales para el ordenamiento por selección (O(n2)), pero para el ordenamiento de burbuja el tiempo de ejecución del mejor caso es solo O(n)

##### La diferencia entre el mejor y el peor caso para el ordenamiento por selección radica principalmente en el número de intercambios

En el mejor de los casos, el ordenamiento por selección no necesita intercambiar ningún valor porque la matriz ya está ordenada

En el peor de los casos, si la matriz ya está ordenada, pero en un orden incorrecto, el ordenamiento por selección debe realizar tantos intercambios como valores tenga la matriz.


## Código clave

```
n = len(my_array)

bucle externo:
for i in range(n):
min_index = i //asig i 

bucle interno: 
for j in range(i+1, n): //activa otra func de range
if my_array[j] < my_array[min_index]: //comparacion
min_index = j //asig j  
my_array[i], my_array[min_index] = my_array[min_index], my_array[i]
//swap

```

##### asig i y j (camb index?), swap asig i y j, otra func range 



# Insertion Sort 

##### Utiliza una parte de la matriz para contener los valores ordenados y la otra parte de la matriz para contener los valores que aún no están ordenados.

##### Toma un valor a la vez de la parte no ordenada de la matriz y lo coloca en el lugar correcto en la parte ordenada de la matriz, hasta que la matriz esté ordenada.


## Funcionamiento

1. Tome el primer valor de la parte no ordenada de la matriz.

2. Mueva el valor al lugar correcto en la parte ordenada de la matriz.

3. Recorra nuevamente la parte no ordenada de la matriz tantas veces como valores haya


## Ejecución manual

1. Comenzamos con una matriz sin ordenar.

`[ 7, 12, 9, 11, 3]` 


2. Podemos considerar el primer valor como la parte inicial ordenada del array. Si es solo un valor, debe estar ordenado, ¿verdad? 
   .	
`[ 7, 12, 9, 11, 3]`

3. El siguiente valor, 12, debería ahora estar en la posición correcta en la parte ordenada del array. Sin embargo, 12 es mayor que 7, por lo que ya está en la posición correcta.
       .
`[ 7, 12, 9, 11, 3]`

4. Consideremos el siguiente valor 9.
          .
`[ 7, 12, 9, 11, 3]`

5. El valor 9 ahora debe moverse a la posición correcta dentro de la parte ordenada de la matriz, por lo que movemos 9 entre 7 y 12.
   .  .  
`[ 7, 9, 12, 11, 3]`  

6. El siguiente valor es 11.
               .
`[ 7, 9, 12, > 11, 3]`

7. Lo movemos entre 9 y 12 en la parte ordenada del array.
   .  .  .
`[ 7, 9, 11, 12, 3]`

8. El último valor a insertar en la posición correcta es 3.
                 .
`[ 7, 9, 11, 12, 3]`

9. Insertamos 3 delante de todos los demás valores porque es el valor más bajo.

`[ 3,7, 9, 11, 12]`


## Comportamiento 

##### El primer valor se considera la parte ordenada inicial de la matriz.

##### Cada valor después del primer valor debe compararse con los valores de la parte ordenada del algoritmo para poder insertarse en la posición correcta.

El algoritmo de ordenamiento por inserción debe ejecutarse a través de la matriz 4 veces para ordenar la matriz de 5 valores porque no tenemos que ordenar el primer valor.

Y cada vez que el algoritmo recorre la matriz, la parte restante sin ordenar de la matriz se vuelve más corta.


## Implementación

1. Una matriz con valores para ordenar.

2. Un bucle externo que selecciona un valor para ordenar. 
Para una matriz con n valores.
Su bucle externo omite el primer valor y debe ejecutarse n-1 

3. Un bucle interno que recorre la parte ordenada del array para encontrar dónde insertar el valor. 
Si el valor a ordenar está en el índice i, La parte ordenada de la matriz comienza en el índice 0 y termina en el índice i - 1

```
my_array = [64, 34, 25, 12, 22, 11, 90, 5]

n = len(my_array)
for i in range(1,n):
    insert_index = i
    current_value = my_array.pop(i)
    for j in range(i-1, -1, -1):
        if my_array[j] > current_value:
            insert_index = j
    my_array.insert(insert_index, current_value)

print("Sorted array:", my_array)

```


## Mejora

El código anterior elimina primero un valor y luego lo inserta en otro lugar es intuitiva.

Es como se haría físicamente la ordenación por inserción con una mano de cartas, por ejemplo. 

Si las cartas de bajo valor se ordenan a la izquierda, se toma una nueva carta sin ordenar y se inserta en el lugar correcto entre las demás cartas ya ordenadas.

El problema con esta forma de programación es que al eliminar un valor de la matriz, todos los elementos superiores deben desplazarse un lugar de índice hacia abajo:

				  rmv 	
`[3, 4, 6, 11, 12, 7, 13, 19, 2, 5, 15]`
                    <- shift . . . . .     

Y al insertar nuevamente en la matriz el valor eliminado, también hay muchas operaciones de desplazamiento que deben realizarse: todos los elementos siguientes deben desplazarse una posición hacia arriba para dejar lugar al valor insertado:

          ins
`[3, 4, 6, 7, 11, 12, 13, 19, 2, 5, 15]`
			 . . . . . shift ->   

Estas operaciones de desplazamiento pueden llevar mucho tiempo, especialmente para una matriz con muchos elementos.


### Desplazamientos de memoria ocultos

Si utiliza un lenguaje de programación de alto nivel como Python o JavaScript, no verá estas operaciones de desplazamiento en el código, pero se siguen realizando en segundo plano. 

Estas operaciones requieren tiempo adicional para que la computadora las realice, lo que puede ser un problema.

##### Los ejemplos de código de C y Java anteriores y posteriores son iguales: el problema de los desplazamientos de memoria que ocurren en segundo plano solo es relevante para lenguajes de programación de alto nivel como Python o JavaScript, donde los arrays son dinámicos, lo que significa que se pueden eliminar e insertar elementos fácilmente.

##### En lenguajes de programación de bajo nivel como C y Java, donde los arrays tienen una longitud fija, no se pueden eliminar ni insertar elementos.

Como resultado, no se producen tales desplazamientos de memoria y, por lo tanto, los códigos de ejemplo anteriores y posteriores para C y Java siguen siendo los mismos.


Solución:

Podemos evitar la mayoría de estas operaciones de desplazamiento desplazando únicamente los valores necesarios:

         paste    copy
`[3, 4, 6, 11, 12, 7, 13, 19, 2, 5, 15]`
           .   . shift

Primero se copia el valor 7, luego los valores 11 y 12 se desplazan un lugar hacia arriba en la matriz, y por último el valor 7 se coloca donde estaba antes el valor 11.

##### El número de operaciones de cambio se reduce en este caso de 12 a 2.

```
my_array = [64, 34, 25, 12, 22, 11, 90, 5]

n = len(my_array)
for i in range(1,n):
    insert_index = i
    current_value = my_array[i]
    for j in range(i-1, -1, -1):
        if my_array[j] > current_value:
            my_array[j+1] = my_array[j]
            insert_index = j
        else:
            break
    my_array[insert_index] = current_value

print("Sorted array:", my_array)

```

Lo que también se hace en el código anterior es salir del bucle interno. 

Esto se debe a que no es necesario seguir comparando valores cuando ya hemos encontrado la ubicación correcta para el valor actual.


## Complejidad temporal 

Insertion sort ordena una matriz de n valores.

En promedio, cada valor debe compararse con aproximadamente otros n/2 valores para encontrar el lugar correcto donde insertarlo.

Debe ejecutar el bucle para insertar un valor en su lugar correcto aproximadamente n times/veces.

Obtenemos complejidad temporal d: O(n/2*n) = O(n^2)

##### La curva va bajando en cantidad operaciones con respecto a otros: 

##### Ej: 200 valores -> 20362 operaciones (random); 39926 (worst case); 597 (best case) 

##### 200 valores -> 20300 operaciones en Selection sort (mejor caso); Bubble sort (mejor caso) 200 -> 200 operaciones; en worst case (39816)

Existe una gran diferencia entre el mejor, el promedio y el peor de los casos



# Quicksort

Es uno de los más rapidos para ordenar. 

##### Toma una matriz de valores, elige uno de los valores como elemento "pivote" y mueve los otros valores de modo que los valores más bajos estén a la izquierda del elemento pivote y los valores más altos a la derecha del mismo.


##### Por ejemplo se elige el último elemento de la matriz para que sea el elemento pivote, pero también podríamos haber elegido el primer elemento de la matriz, o realmente cualquier elemento de la matriz.

##### Luego realiza la misma operación recursivamente en los subconjuntos a la izquierda y a la derecha del elemento pivote

Esto continúa hasta que el conjunto esté ordenado.

Recusión: cuando una función se llama a sí misma.

##### Quicksort coloca el elemento pivote entre un subconjunto con valores más bajos en el lado izquierdo y uno con valores más altos en el lado derecho, el algoritmo se autoinvoca dos veces

Quicksort se ejecuta de nuevo para el subconjunto del lado izquierdo y para el del lado derecho

##### Continúa invocándose hasta que los subconjuntos son demasiado pequeños para ser ordenados.


## Funcionamiento: 

1. Elija un valor en la matriz para que sea el elemento pivote.

2. Ordene el resto de la matriz de modo que los valores inferiores al elemento pivote estén a la izquierda y los valores superiores a la derecha.

3. Intercambie el elemento pivote con el primer elemento de valor más alto, de modo que el elemento pivote quede entre el valor más bajo y el más alto.

4. Realice las mismas operaciones (recursivamente) para las submatrices en el lado izquierdo y derecho del elemento pivote


## Ejecución manual

1. Comenzamos con una matriz sin ordenar.

`[11, 9, 12, 7, 3]`

2. Elegimos el último valor 3 como elemento pivote.
                 .
`[ 11, 9, 12, 7, 3]` 

3. El resto de los valores de la matriz son todos mayores que 3 y deben estar en el lado derecho de 3. 
Intercambia 3 con 11. 
   .            .
`[ 3, 9, 12, 7, 11]`

4. El valor 3 ya está en la posición correcta. 
Necesitamos ordenar los valores a la derecha del 3. 
Elegimos el último valor, 11, como el nuevo elemento pivote.
                 . 
`[ 3, 9, 12, 7, 11]`

5. El valor 7 debe estar a la izquierda del valor pivote 11, y el 12 a su derecha. 
Mueva 7 y 12.
         .  .
`[ 3, 9, 7, 12, 11]`

6. Intercambia 11 con 12 de modo que los valores inferiores 9 y 7 estén en el lado izquierdo de 11 y 12 en el lado derecho.
            .   .
`[ 3, 9, 7, 11, 12]`

7. 11 y 12 están en las posiciones correctas. 
Elegimos 7 como elemento pivote en el subconjunto `[9, 7]`, a la izquierda de 11.
         . 
`[ 3, 9, 7, 11, 12]`

8. Debemos intercambiar el 9 por el 7.
      .  .
`[ 3, 7, 9, 12, 11]`


## Comportamiento

El último valor de la matriz se elige como elemento pivote y el resto de los valores se organizan de manera que los valores inferiores al valor pivote estén a la izquierda y los valores superiores a la derecha.

Después, el elemento pivote se intercambia con el primero de los valores más altos

Esto divide la matriz original en dos, con el elemento pivote entre los valores más bajos y más altos.

Debemos hacer lo mismo que antes con los subconjuntos a la izquierda y a la derecha del elemento pivote anterior.

Si un subconjunto tiene longitud 0 o 1, lo consideramos completamente ordenado.

El algoritmo Quicksort hace que las submatrices se vuelvan cada vez más cortas hasta que la matriz esté ordenada.


## Implementación

Usamos recursividad. 

"QuickSort" debe llamarse a sí mismo con las nuevas submatrices a la izquierda y a la derecha del elemento pivote.

1. Una matriz con valores para ordenar.

2. Un método quickSort que se llama a sí mismo (recursión) si la submatriz tiene un tamaño mayor que 1.

3. Un método de partición que recibe una submatriz, mueve valores, intercambia el elemento pivote en la submatriz y devuelve el índice donde ocurre la siguiente división en las submatrices.

```
def partition(array, low, high):
    pivot = array[high]
    i = low - 1

    for j in range(low, high):
        if array[j] <= pivot:
            i += 1
            array[i], array[j] = array[j], array[i]

    array[i+1], array[high] = array[high], array[i+1]
    return i+1

def quicksort(array, low=0, high=None):
    if high is None:
        high = len(array) - 1

    if low < high:
        pivot_index = partition(array, low, high)
        quicksort(array, low, pivot_index-1)
        quicksort(array, pivot_index+1, high)

my_array = [64, 34, 25, 12, 22, 11, 90, 5]
quicksort(my_array)
print("Sorted array:", my_array)

```


### Complejidad temporal

##### El peor escenario posible para Quicksort es O(n^2).

##### Esto sucede cuando el elemento pivote es el valor más alto o más bajo en cada submatriz, lo que genera muchas llamadas recursivas.

Con nuestra implementación anterior, esto sucede cuando la matriz ya está ordenada.

##### Pero, en promedio, la complejidad temporal de Quicksort es en realidad solo O(n log n), lo cual es mucho mejor que los algoritmos de clasificación anteriores que hemos analizado.

Es por eso que Quicksort es tan popular.

##### A continuación puede ver la mejora significativa en la complejidad de tiempo para Quicksort en un escenario promedio

##### O(n log n) vs O(n^2)

##### La recursividad del algoritmo Quicksort es, de hecho, una de las razones por las que el ordenamiento promedio es tan rápido, ya que, para una selección correcta del elemento pivote, el array se divide en dos de forma casi uniforme cada vez que el algoritmo se invoca a sí mismo.

Por lo tanto, el número de llamadas recursivas no se duplica, incluso si el número de valores n se duplica.

##### Ej: random: 200 val -> 2353 op; Descending 18743; Ascending 39999; 10 random: 


## Claves: 

```
def partition(array, low, high):
    pivot = array[high] //asign
    i = low - 1 //asign

    for j in range(low, high):
        if array[j] <= pivot: //comp
            i += 1 //asign
            array[i], array[j] = array[j], array[i] //swap bucle

    array[i+1], array[high] = array[high], array[i+1] //swap part
    return i+1 // rtn func

def quicksort(array, low=0, high=None): //uso parms
    if high is None: //cond
        high = len(array) - 1 //asign high

    if low < high: //cond
        pivot_index = partition(array, low, high) // asign func parti
        quicksort(array, low, pivot_index-1) //call recurs params 1
        quicksort(array, pivot_index+1, high) //call recurs params 2

my_array = [64, 34, 25, 12, 22, 11, 90, 5] 
quicksort(my_array) //call algor + default params
print("Sorted array:", my_array)

```



# Counting Sort 

##### Ordena una matriz contando la cantidad de veces que aparece cada valor.

Ej: ordenar 17 valores enteros del 1 al 5

##### No compara valores como los algoritmos de ordenamiento anteriores que hemos visto y solo funciona con números enteros no negativos.

Counting Sort es rápido cuando el rango de valores posibles es k es menor que el número de valores n.


## Funcionamiento

1. Crea una nueva matriz para contar cuántos valores diferentes hay.

2. Recorra la matriz que necesita ser ordenada.

3. Para cada valor, cuéntelo incrementando la matriz de conteo en el índice correspondiente.

4. Después de contar los valores, recorra la matriz de conteo para crear la matriz ordenada.

5. Para cada recuento en la matriz de conteo, cree la cantidad correcta de elementos, con valores que correspondan al índice de la matriz de conteo


## Condiciones

Razones por las que Counting Sort funciona para un rango limitado de valores enteros no negativos:

1. Valores enteros:

Se basa en el recuento de ocurrencias de valores distintos, por lo que deben ser enteros.

Con los enteros, cada valor se ajusta a un índice (para valores no negativos) y existe un número limitado de valores diferentes, por lo que el número de posibles valores diferentes es k no es demasiado grande en comparación con el número de valores n.


2. Valores no negativos

Se implementa generalmente creando una matriz para el conteo.

Cuando el algoritmo recorre los valores a ordenar, el valor x se contabiliza incrementando el valor de la matriz de conteo en el índice x.

Si intentáramos ordenar valores negativos, tendríamos problemas con el valor de ordenación -3, ya que el índice -3 estaría fuera de la matriz de conteo.


3. Rango limitado de valores:

Si la cantidad de posibles valores diferentes a ordenar k es mayor que la cantidad de valores a ordenar n, la matriz de conteo que necesitamos para ordenar será mayor que la matriz original que tenemos que necesita ordenar, y el algoritmo se vuelve ineficaz.


## Ejecución manual

1. Comenzamos con una matriz sin ordenar.

`myArray = [ 2, 3, 0, 2, 3, 2]`

2. Creamos otra matriz para contar cuántos valores hay de cada tipo. 
La matriz tiene 4 elementos para almacenar los valores del 0 al 3.

```
myArray = [ 2, 3, 0, 2, 3, 2]
countArray = [ 0, 0, 0, 0] 

```

3. Ahora comencemos a contar. 
El primer elemento es 2, por lo que debemos incrementar el elemento de la matriz de conteo en el índice 2.

```
			 .
 myArray = [ 2, 3, 0, 2, 3, 2]
                     .
countArray = [ 0, 0, 1, 0] 

```

4. Después de contar un valor, podemos eliminarlo y contar el siguiente valor, que es 3.

```
			.
myArray = [ 3, 0, 2, 3, 2]
						.
countArray = [ 0, 0, 1, 1] 

``` 

5. El siguiente valor que contamos es 0, por lo que incrementamos el índice 0 en la matriz de conteo. 

```
	        .
myArray = [ 0, 2, 3, 2]
               .
countArray = [ 1, 0, 1, 1] 

```

6. Continuamos así hasta contar todos los valores.

```
smyArray = [ ]

countArray = [ 1, 0, 3, 2] 

```

7. Ahora recrearemos los elementos del array inicial, y lo haremos de manera que los elementos estén ordenados de menor a mayor.
El primer elemento de la matriz de conteo nos dice que tenemos 1 elemento con valor 0. 
Entonces insertamos 1 elemento con valor 0 en la matriz y disminuimos el elemento en el índice 0 en la matriz de conteo con 1.

```
			.
myArray = [ 0]
			   .	
countArray = [ 0, 0, 3, 2] 

```

8. De la matriz de conteo vemos que no necesitamos crear ningún elemento con valor 1.

```
myArray = [ 0]
				  .	
countArray = [ 0, 0, 3, 2] 

```

9. Insertamos 3 elementos con valor 2 al final del array. 
A medida que creamos estos elementos, también disminuimos el conteo del array en el índice 2.

```
			   .  .  .	
myArray = [ 0, 2, 2, 2]
                     .
countArray = [ 0, 0, 0, 2] 

```

10. Por último debemos agregar 2 elementos con valor 3 al final del array.

```
                       .  .
myArray = [0, 2, 2, 2, 3, 3]
                        .
countArray = [ 0, 0, 0, 0] 

```

La matriz está ordenada.


## Comportamiento

Funciona en dos pasos:

1. Cada valor se contabiliza incrementándolo en el índice correcto de la matriz de conteo. 

Una vez contabilizado, se elimina.


2. Los valores se recrean en el orden correcto utilizando el recuento y el índice del recuento de la matriz de recuento.


## Implementación

Una matriz con valores para ordenar.
Un método 'countingSort' que recibe una matriz de números enteros.
Una matriz dentro del método para mantener el recuento de los valores.
Un bucle dentro del método que cuenta y elimina valores, incrementando elementos en la matriz de conteo.
Un bucle dentro del método que recrea la matriz utilizando la matriz de conteo, de modo que los elementos aparezcan en el orden correcto.

Un punto más: Necesitamos determinar el valor más alto del array para que el array de conteo pueda crearse con el tamaño correcto.

Por ejemplo, si el valor más alto es 5, el array de conteo debe tener 6 elementos en total para poder contar todos los posibles enteros no negativos: 0, 1, 2, 3, 4 y 5.


Código

```
def countingSort(arr):
    max_val = max(arr)
    count = [0] * (max_val + 1)

    while len(arr) > 0:
        num = arr.pop(0)
        count[num] += 1

    for i in range(len(count)):
        while count[i] > 0:
            arr.append(i)
            count[i] -= 1

    return arr

unsortedArr = [4, 2, 2, 6, 3, 3, 1, 6, 5, 2, 3]
sortedArr = countingSort(unsortedArr)
print("Sorted array:", sortedArr)

```


## Complejidad temporal

Depende tanto del rango de valores posibles k como del número de valores n.

1. En general es O(n+k).

2. En el mejor de los casos, el rango de posibles valores diferentes k es muy pequeño comparado con el número de valores n y el conteo de ordenamiento tiene una complejidad temporal de O(n).

3. Pero en el peor de los casos, el rango de posibles valores diferentes k es muy grande comparado con el número de valores n y el conteo de ordenamiento puede tener una complejidad de tiempo O(n2) o incluso peor.


##### Es importante considerar el rango de valores en comparación con la cantidad de valores a ordenar antes de elegir el ordenamiento por conteo como algoritmo

##### Además tenga en cuenta que el ordenamiento por conteo solo funciona con valores enteros no negativos.


Si los números a ordenar varían mucho en valor (k grande) y hay pocos números a ordenar (n pequeño)), el algoritmo de ordenamiento por conteo no es efectivo.

Si mantenemos n Con k fijo, las alternativas "Aleatorio", "Descendente" y "Ascendente" de la simulación anterior resultan en el mismo número de operaciones.

Esto se debe a que ocurre lo mismo en los tres casos: se configura una matriz de conteo, se cuentan los números y se crea la nueva matriz ordenada.



# Radix Sort

##### Ordena una matriz por dígitos individuales, comenzando con el dígito menos significativo (el más a la derecha).

La base es el número de dígitos únicos en un sistema numérico.

En el sistema decimal que usamos habitualmente, hay 10 dígitos diferentes del 0 al 9.

Utiliza la base para que los valores decimales se coloquen en 10 contenedores diferentes correspondientes al dígito que está en foco y luego se vuelvan a colocar en la matriz antes de pasar al siguiente dígito.

##### Es un algoritmo no comparativo que solo funciona con números enteros no negativos.


## Funcionamiento

1. Comience con el dígito menos significativo (dígito más a la derecha).

2. Ordene los valores según el dígito en foco colocando primero los valores en el contenedor correcto según el dígito en foco y luego volviéndolos a colocar en la matriz en el orden correcto.

3. Pase al siguiente dígito y ordene nuevamente, como en el paso anterior, hasta que no queden dígitos.


## Clasificación estable

Radix Sort debe ordenar los elementos de forma estable para que el resultado se ordene correctamente.

##### Un algoritmo de ordenamiento estable es aquel que mantiene el orden de los elementos con el mismo valor antes y después de la ordenación. 

Supongamos que tenemos dos elementos "K" y "L", donde "K" precede a "L", y ambos tienen valor "3". 

##### Un algoritmo de ordenamiento se considera estable si el elemento "K" sigue precedendo a "L" después de ordenar el array.


No tiene mucho sentido hablar de algoritmos de ordenamiento estables para los algoritmos que hemos analizado individualmente, ya que el resultado sería el mismo independientemente de si son estables o no

##### Sin embargo, para Radix Sort es importante que el ordenamiento se realice de forma estable, ya que los elementos se ordenan por un solo dígito a la vez.

Sin embargo, para Radix Sort es importante que el ordenamiento se realice de forma estable, ya que los elementos se ordenan por un solo dígito a la vez.

##### Entonces, después de ordenar los elementos en el dígito menos significativo y pasar al siguiente dígito, es importante no destruir el trabajo de clasificación que ya se ha realizado en la posición del dígito anterior, y es por eso que debemos tener cuidado de que Radix Sort haga la clasificación en cada posición de dígito de manera estable.


Se muestra cómo se realiza la ordenación subyacente en contenedores. 

Para comprender mejor cómo funciona la ordenación estable, también se puede optar por ordenar de forma inestable, lo que generará un resultado incorrecto.

##### La ordenación se vuelve inestable simplemente colocando elementos en los contenedores desde el final del array en lugar de desde el principio.


## Ejecución manual

1. Comenzamos con una matriz sin ordenar y una matriz vacía para ajustar los valores con los radios correspondientes del 0 al 9.

```
myArray = [ 33, 45, 40, 25, 17, 24]
radixArray = [ [], [], [], [], [], [], [], [], [], [] ] 

```

2. Comenzamos a ordenar centrándonos en el dígito menos significativo.

```
             .   .   .   .   .   . 
myArray = [ 33, 45, 40, 25, 17, 24]

radixArray = [ [], [], [], [], [], [], [], [], [], [] ] 

```

3. Ahora movemos los elementos a las posiciones correctas en el array de bases según el dígito en foco. 
Los elementos se toman del inicio de myArray y se insertan en la posición correcta en el array de bases.

```
myArray = [ ]
                 .             .     .     .   .         .
radixArray = [ [40], [], [], [33], [24], [45, 25], [], [17], [], [] ] 

```

4. Volvemos a mover los elementos al array inicial y la ordenación se realiza por el dígito menos significativo. 
Los elementos se toman del final de radixArray y se colocan al principio de myArray.

```
             .   .   .   .   .   .
myArray = [ 40, 33, 24, 45, 25, 17 ]

radixArray = [ [], [], [], [], [], [], [], [], [], [] ] 

```

5. Pasamos al siguiente dígito. 
Observe que los valores 45 y 25 siguen en el mismo orden relativo que al principio, ya que la ordenación es estable. 

```
            .   .   .   .   .   . 
myArray = [ 40, 33, 24, 45, 25, 17 ]

radixArray = [ [], [], [], [], [], [], [], [], [], [] ] 

```

6. Movemos elementos a la matriz de base según el dígito enfocado.

```
myArray = [ ]
                    .     .   .     .     .   .
radixArray = [ [], [17], [24, 25], [33], [40, 45], [], [], [], [], [] ] 

```

7. Movemos elementos nuevamente al inicio de myArray, desde la parte posterior de radixArray.

```
            .   .   .   .   .   .
myArray = [ 17, 24, 25, 33, 40, 45 ]
radixArray = [ [], [], [], [], [], [], [], [], [], [] ] 

```

El array ha sido ordenado.


## Comportamiento

Vemos que los valores se mueven del array y se colocan en el array de base según la base actual en foco

Luego, los valores se devuelven al array que queremos ordenar.


Este movimiento de valores desde la matriz que queremos ordenar y viceversa debe realizarse tantas veces como el número máximo de dígitos de un valor.

Por ejemplo, si 437 es el número más alto de la matriz que necesita ordenarse, sabemos que debemos ordenar tres veces, una por cada dígito.

También vemos que la matriz de base debe ser bidimensional para que pueda haber más de un valor en una base o índice específico.

Como se mencionó anteriormente, debemos mover valores entre las dos matrices de una manera que mantenga el orden de los valores con el mismo radio en foco, de modo que la clasificación sea estable.


## Implementación

Una matriz con números enteros no negativos que deben ordenarse.
Una matriz bidimensional con índice de 0 a 9 para contener valores con el radio actual en foco.
Un bucle que toma valores de la matriz sin ordenar y los coloca en la posición correcta en la matriz de radio bidimensional.
Un bucle que devuelve los valores a la matriz inicial desde la matriz de base.
Un bucle externo que se ejecuta tantas veces como dígitos haya en el valor más alto.


Código:

```
myArray = [170, 45, 75, 90, 802, 24, 2, 66]
print("Original array:", myArray)
radixArray = [[], [], [], [], [], [], [], [], [], []]
maxVal = max(myArray)
exp = 1

while maxVal // exp > 0:

    while len(myArray) > 0:
        val = myArray.pop()
        radixIndex = (val // exp) % 10
        radixArray[radixIndex].append(val)

    for bucket in radixArray:
        while len(bucket) > 0:
            val = bucket.pop()
            myArray.append(val)

    exp *= 10

print("Sorted array:", myArray)

```

1. En la línea 7, usamos la división de piso ("//") para dividir el valor máximo 802 por 1 la primera vez que se ejecuta el bucle while, la próxima vez que se divide por 10 y la última vez que se divide por 100
Cuando se usa la división de piso "//", cualquier número más allá del punto decimal se ignora y se devuelve un entero.

2. En la línea 11, se decide dónde colocar un valor en radixArray según su base, o dígito en foco
Por ejemplo, la segunda vez que se ejecuta el bucle while externo, exp será 10.
El valor 170 dividido entre 10 será 17
La operación "%10" divide entre 10 y devuelve el resto.
En este caso, 17 se divide entre 10 una vez, y queda 7. 
Por lo tanto, el valor 170 se coloca en el índice 7 de radixArray.


## Crear radix sort usando otros algoritmos de oedenación

##### Radix puede implementarse junto con cualquier otro algoritmo de ordenamiento, siempre que sea estable

Esto significa que, al ordenar por un dígito específico, cualquier algoritmo de ordenamiento estable funcionará, como el ordenamiento por conteo o el ordenamiento de burbuja.

Radix Sort que utiliza Bubble Sort para ordenar los dígitos individuales:

```
def bubbleSort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                
def radixSortWithBubbleSort(arr):
    max_val = max(arr)
    exp = 1
    
    while max_val // exp > 0:
        radixArray = [[],[],[],[],[],[],[],[],[],[]]
        
        for num in arr:
            radixIndex = (num // exp) % 10
            radixArray[radixIndex].append(num)
        
        for bucket in radixArray:
            bubbleSort(bucket)
        
        i = 0
        for bucket in radixArray:
            for num in bucket:
                arr[i] = num
                i += 1
        
        exp *= 10

myArray = [170, 45, 75, 90, 802, 24, 2, 66]
print("Original array:", myArray)
radixSortWithBubbleSort(myArray)
print("Sorted array:", myArray)

```


## Complejidad temporal

Es O(n*k)

Esto significa que Radix Sort depende tanto de los valores que se deben ordenar n como del número de dígitos en el valor más alto k.

El mejor escenario para el ordenamiento por radix es cuando hay muchos valores para ordenar, pero estos tienen pocos dígitos. 

Por ejemplo, si hay más de un millón de valores para ordenar y el valor más alto es 999, con solo tres dígitos. 

En tal caso, la complejidad temporal es O(n⋅k) se puede simplificar a solo O(n)


El peor escenario para el ordenamiento por radix sería que el valor más alto tuviera tantos dígitos como valores a ordenar. Quizás no sea un escenario común, pero la complejidad temporal sería O(n²) en este caso.

El caso más común o promedio es quizás si el número de dígitos es k

Es algo así como k(n)=logn. En tal caso, la ordenación por radix obtiene una complejidad temporal de O(n⋅logn). Un ejemplo de este caso sería si hay 1 000 000 valores para ordenar, y estos tienen 6 dígitos.


Las barras que representan los diferentes valores se escalan para ajustarse a la ventana, de modo que se vea bien. 

Esto significa que los valores de 7 dígitos parecen ser solo 5 veces más grandes que los de 2 dígitos, pero en realidad son 5000 veces más grandes que los de 2 dígitos.

Si mantenemos n Con k fijo, las alternativas "Aleatorio", "Descendente" y "Ascendente" de la simulación anterior resultan en el mismo número de operaciones. 

Esto se debe a que ocurre lo mismo en los tres casos.



# Merge Sort 

##### Es un algoritmo de divide y vencerás que ordena una matriz dividiéndola primero en matrices más pequeñas y luego reconstruyendo la matriz de la manera correcta para que quede ordenada.

1. Dividir: el algoritmo comienza dividiendo la matriz en partes cada vez más pequeñas hasta que una de esas submatriz solo consta de un elemento.

2. Conquistar: el algoritmo fusiona nuevamente las pequeñas partes de la matriz colocando primero los valores más bajos, lo que da como resultado una matriz ordenada.

##### La descomposición y construcción de la matriz para ordenarla se realiza de forma recursiva.

##### Se realiza una llamada recursiva que divide el array en fragmentos más pequeños y después se fusionan las dos submatrices. 


## Funcionamiento

Divida la matriz sin ordenar en dos submatrices, de la mitad del tamaño del original.
Continúe dividiendo las submatrices mientras la parte actual de la matriz tenga más de un elemento.
Fusiona dos submatrices colocando siempre primero el valor más bajo.
Sigue fusionando hasta que no queden submatrices

##### 1. Como puedes ver, la matriz se divide en fragmentos cada vez más pequeños hasta que se vuelve a fusionar.

##### 2. A medida que se fusiona, se comparan los valores de cada submatriz, priorizando el valor más bajo.

```
|12 8 9 3 11 5 4|

|12 8 9| 	|3 11 5 4|

|12|	|89|	|3 11| 	|5 4|

|12|    |8|	|9| |3| |11|  |5|  |4| 

|8 12|  |3 9|  |5 11|  |4|

|3 8 9 12| 	|4 5 11|

|3 4 5 8 9 11 12|

```


## Ejecución manual

1. Comenzamos con un array sin ordenar, y sabemos que se divide por la mitad hasta que los subarrays solo constan de un elemento 
La función Merge Sort se llama a sí misma dos veces, una por cada mitad del array.
Esto significa que el primer subarray se dividirá primero en las partes más pequeñas.

```
[ 12, 8, 9, 3, 11, 5, 4]
[ 12, 8, 9] [ 3, 11, 5, 4]
[ 12] [ 8, 9] [ 3, 11, 5, 4]
[ 12] [ 8] [ 9] [ 3, 11, 5, 4] 

```

2. La división de la primera submatriz ha finalizado y ahora es momento de fusionar.
8 y 9 son los dos primeros elementos que se fusionarán. 8 es el valor más bajo, por lo que viene antes de 9 en la primera submatriz fusionada.
		 .  .	
`[ 12] [ 8, 9] [ 3, 11, 5, 4]`

3. Las siguientes submatrices que se fusionarán son `[12]` y `[8, 9]`.
Los valores de ambas matrices se comparan desde el principio.
8 es menor que 12, por lo que 8 va primero, y 9 también es menor que 12.

   .  .  .
`[ 8, 9, 12] [ 3, 11, 5, 4]`

4. Ahora la segunda submatriz grande se divide recursivamente

```
[ 8, 9, 12] [ 3, 11, 5, 4]
[ 8, 9, 12] [ 3, 11] [ 5, 4]
[ 8, 9, 12] [ 3] [ 11] [ 5, 4]

```

5. 3 y 11 se fusionan nuevamente en el mismo orden en que se muestran porque 3 es menor que 11.
               .  .
`[ 8, 9, 12] [ 3, 11] [ 5, 4]`

6. La submatriz con valores 5 y 4 se divide y luego se fusiona de modo que 4 venga antes que 5.

```
                       .    .
[ 8, 9, 12] [ 3, 11] [ 5] [ 4]
                       .  .  
[ 8, 9, 12] [ 3, 11] [ 4, 5]

```

7. Se fusionan las dos submatrices de la derecha. 
Se realizan comparaciones para crear elementos en la nueva matriz fusionada:

3 es menor que 4
4 es menor que 11
5 es menor que 11
11 es el último valor restante
               .  .  .  .
`[ 8, 9, 12] [ 3, 4, 5, 11]`
 
8. Se fusionan las dos últimas submatrices restantes. 
Veamos con más detalle cómo se realizan las comparaciones para crear la nueva matriz fusionada y ordenada:

3 es menor que 8:
          .           .  
Antes: `[ 8, 9, 12] [ 3, 4, 5, 11]`
            .  .
Después: `[ 3, 8, 9, 12] [ 4, 5, 11]`

9. 4 es menor que 8: 
             .           .
Antes: `[ 3, 8, 9, 12] [ 4, 5, 11]`
               .  .
Después: `[ 3, 4, 8, 9, 12] [ 5, 11]`

10. 5 es menor que 8:
                .           .
Antes: `[ 3, 4, 8, 9, 12] [ 5, 11]` 
                  .  .
Después: `[ 3, 4, 5, 8, 9, 12] [ 11]`

11. 8 y 9 son menores que 11:
                   .  .        .
Antes: `[ 3, 4, 5, 8, 9, 12] [ 11]`
                     .  .        .
Después: `[ 3, 4, 5, 8, 9, 12] [ 11]`

12. 11 es menor que 12 
						  .    .	
Antes: `[ 3, 4, 5, 8, 9, 12] [ 11]`
                           .    .     
Después: `[ 3, 4, 5, 8, 9, 11, 12]`

Se ha ordenado. 


## Comportamiento

Tiene dos etapas: primero división, luego fusión.

Si bien es posible implementar el algoritmo Merge Sort sin recursión, utilizaremos recursión porque es el enfoque más común.

Para dividir un array en dos, su longitud se divide entre dos y luego se redondea hacia abajo para obtener un valor llamado "mid". 

Este valor "mid" se usa como índice para determinar dónde dividir el array.

Tras dividir el array, la función de ordenación se invoca a sí misma con cada mitad, de modo que el array pueda volver a dividirse recursivamente.

La división se detiene cuando un subarray solo consta de un elemento.


Al finalizar la función "Merge Sort", los submatrices se fusionan para que siempre se ordenen al reconstruir el array

Para fusionar dos submatrices y ordenar el resultado, se comparan los valores de cada submatrice y el valor más bajo se coloca en el array fusionado.

Después, se compara el siguiente valor de cada uno de los dos submatrices, colocando el más bajo en el array fusionado.


## Implementación

Una matriz con valores que deben ordenarse.
Una función que toma una matriz, la divide en dos y se llama a sí misma con cada mitad de esa matriz para que las matrices se dividan una y otra vez de forma recursiva, hasta que una submatriz solo consta de un valor.
Otra función que fusiona nuevamente las submatrices de manera ordenada


Código:

```
def mergeSort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    leftHalf = arr[:mid]
    rightHalf = arr[mid:]

    sortedLeft = mergeSort(leftHalf)
    sortedRight = mergeSort(rightHalf)

    return merge(sortedLeft, sortedRight)

def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])

    return result

unsortedArr = [3, 7, 6, -10, 15, 23.5, 55, -13]
sortedArr = mergeSort(unsortedArr)
print("Sorted array:", sortedArr)

```

En la línea 6, `arr[:mid]` toma todos los valores de la matriz hasta el valor en el índice "mid", pero sin incluirlo.

En la línea 7, `arr[mid:]` toma todos los valores de la matriz, comenzando por el valor en el índice "mid" y todos los valores siguientes.

En las líneas 26-27, se completa la primera parte de la fusión. 

En este punto, se comparan los valores de los dos subconjuntos, y el subconjunto izquierdo o el derecho están vacíos, por lo que el conjunto resultante puede llenarse con los valores restantes del subconjunto izquierdo o derecho. 

Estas líneas pueden intercambiarse y el resultado será el mismo.


## Ordenación por fusión sin recursión

Dado que Merge Sort es un algoritmo de divide y vencerás, la recursión es el código más intuitivo para su implementación. 

La implementación recursiva de Merge Sort también es quizás más fácil de entender y, en general, utiliza menos líneas de código.

Pero Merge Sort también se puede implementar sin el uso de recursión, de modo que no hay ninguna función que se llame a sí misma.

```
def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
            
    result.extend(left[i:])
    result.extend(right[j:])
    
    return result

def mergeSort(arr):
    step = 1  # Starting with sub-arrays of length 1
    length = len(arr)
    
    while step < length:
        for i in range(0, length, 2 * step):
            left = arr[i:i + step]
            right = arr[i + step:i + 2 * step]
            
            merged = merge(left, right)
            
            # Place the merged array back into the original array
            for j, val in enumerate(merged):
                arr[i + j] = val
                
        step *= 2  # Double the sub-array length for the next iteration
        
    return arr

unsortedArr = [3, 7, 6, -10, 15, 23.5, 55, -13]
sortedArr = mergeSort(unsortedArr)
print("Sorted array:", sortedArr)

```

Puede observar que las funciones de combinación son exactamente las mismas en las dos implementaciones de Merge Sort anteriores, pero en la implementación anterior, el l bucle while dentro de la función mergeSort se usa para reemplazar la recursión. 

El bucle while realiza la división y combinación del array en su lugar, lo que dificulta la comprensión del código.

El bucle while dentro de la función mergeSort utiliza pasos cortos para ordenar fragmentos pequeños (submatrices) de la matriz inicial mediante la función merge.

Posteriormente, el paso se incrementa para combinar y ordenar fragmentos más grandes de la matriz hasta que se ordena por completo.


## Complejidad temporal 

Es O(n*log n)

La complejidad temporal es prácticamente la misma para distintos tipos de matrices.

El algoritmo necesita dividir la matriz y volver a fusionarla, independientemente de si ya está ordenada o completamente desordenada.


Si mantenemos el número de valores n

corregido, el número de operaciones necesarias para "Aleatorio", "Descendente" y "Ascendente" es casi el mismo.

La ordenación por combinación funciona casi igual cada vez porque la matriz se divide y se fusiona mediante comparación, tanto si la matriz ya está ordenada como si no.



# Busqueda Lineal 

##### Busca en una matriz y devuelve el índice del valor que busca.

Este algoritmo es muy simple y fácil de entender e implementar.

Si la matriz ya está ordenada, es mejor utilizar el algoritmo de búsqueda binaria mucho más rápido que exploraremos en la página siguiente.

Una gran diferencia entre los algoritmos de ordenamiento y los algoritmos de búsqueda es que los algoritmos de ordenamiento modifican la matriz, pero los algoritmos de búsqueda la dejan sin cambios.

##### Retorna -1 si no encuentra 


## Funcionamiento

Recorra la matriz valor por valor desde el principio.
Compara cada valor para comprobar si es igual al valor que estamos buscando.
Si se encuentra el valor, devuelve el índice de ese valor.
Si se llega al final de la matriz y no se encuentra el valor, se devuelve -1 para indicar que no se encontró el valor.


## Ejecución manual

### Ej: Buscaremos el valor 11.

1. Comenzamos con una matriz de valores aleatorios.

`[ 12, 8, 9, 11, 5, 11]`

2. Miramos el primer valor de la matriz, ¿es igual a 11?
   .
`[ 12, 8, 9, 11, 5, 11]`

3. Pasamos al siguiente valor en el índice 1 y lo comparamos con 11 para ver si es igual.
       .
`[ 12, 8, 9, 11, 5, 11]`

4. Comprobamos el siguiente valor en el índice 2.
          . 
`[ 12, 8, 9, 11, 5, 11]`

5. Pasamos al siguiente valor en el índice 3. 
¿Es igual a 11?
             .
`[ 12, 8, 9, 11, 5, 11]` 


##### El valor 11 se encuentra en el índice 3; devuelve este indice.


## Comportamiento 

Se comprueba cada valor desde el inicio de la matriz para ver si el valor es igual a 11, el valor que estamos tratando de encontrar.

Cuando se encuentra el valor, se detiene la búsqueda y se devuelve el índice donde se encontró el valor.

Si se busca en la matriz sin encontrar el valor, se devuelve -1


## Implementación

Una matriz con valores para buscar.
Un valor objetivo a buscar.
Un bucle que recorre la matriz desde el principio hasta el final.
Una declaración if que compara el valor actual con el valor objetivo y devuelve el índice actual si se encuentra el valor objetivo.
Después del bucle, devuelve -1, porque en este punto sabemos que no se ha encontrado el valor objetivo.


Código:

```
def linearSearch(arr, targetVal):
    for i in range(len(arr)):
        if arr[i] == targetVal:
            return i
    return -1

arr = [3, 7, 2, 9, 5]
targetVal = 9

result = linearSearch(arr, targetVal)

if result != -1:
    print("Value",targetVal,"found at index",result)
else:
    print("Value",targetVal,"not found")
    
```


## Complejidad temporal

Si se ejecuta la búsqueda lineal y encuentra el valor de destino como el primer valor de la matriz en una matriz con n

valores, solo se necesita una comparación.

Pero si la búsqueda lineal recorre todo el conjunto de n
valores, sin encontrar el valor objetivo, n Se necesitan comparaciones.

Esto significa que la complejidad temporal para la búsqueda lineal es

O(n)



# Busqueda Binaria

##### Busca en una matriz y devuelve el índice del valor que busca.

##### Es mucho más rápida que la búsqueda lineal, pero requiere una matriz ordenada para funcionar.

El algoritmo de búsqueda binaria funciona comprobando el valor en el centro del array

Si el valor objetivo es menor, el siguiente valor a comprobar se encuentra en el centro de la mitad izquierda del array.

Este método de búsqueda implica que el área de búsqueda siempre es la mitad del área de búsqueda anterior, razón por la cual el algoritmo de búsqueda binaria es tan rápido.

Este proceso de reducir a la mitad el área de búsqueda ocurre hasta que se encuentra el valor objetivo o hasta que el área de búsqueda de la matriz esté vacía.


## Funcionamiento

Compruebe el valor en el centro de la matriz.
Si el valor objetivo es inferior, busque en la mitad izquierda de la matriz. Si el valor objetivo es superior, busque en la mitad derecha.
Continúe los pasos 1 y 2 para la nueva parte reducida de la matriz hasta que se encuentre el valor objetivo o hasta que el área de búsqueda esté vacía.
Si se encuentra el valor, se devuelve el índice del valor objetivo. Si no se encuentra, se devuelve -1.


## Ejecución manual 

Ej: Buscaremos el valor 11.

1. Comenzamos con una matriz.

`[ 2, 3, 7, 7, 11, 15, 25]`

2. El valor en el medio de la matriz en el índice 3, ¿es igual a 11? 
            .
`[ 2, 3, 7, 7, 11, 15, 25]`

3. 7 es menor que 11, por lo que debemos buscar 11 a la derecha del índice 3. 
Los valores a la derecha del índice 3 son `[11, 15, 25]`. 
El siguiente valor a verificar es el valor central, 15, en el índice 5.
                    .
`[ 2, 3, 7, 7, 11, 15, 25]`

4. 15 es mayor que 11, por lo que debemos buscar a la izquierda del índice 5. 
Ya hemos verificado el índice 0-3, por lo que el índice 4 es el único valor que queda por verificar.
                .
`[ 2, 3, 7, 7, 11, 15, 25]`

El valor 11 se encuentra en el índice 4.

Devolviendo la posición de índice 4.


## Comportamiento

Para empezar, el algoritmo tiene dos variables "izquierda" y "derecha".

"izquierda" es 0 y representa el índice del primer valor de la matriz, y "derecha" es 6 y representa el índice del último valor de la matriz.

(izq + der)/2 = (0+6)/2 = 3, 3 es el primer índice utilizado para comprobar si el valor medio (7) es igual al valor objetivo (11).

7 es menor que el valor objetivo 11, por lo que en el siguiente bucle el área de búsqueda debe limitarse al lado derecho del valor medio: `[11, 15, 25]`, en el índice 4-6.

Para limitar el área de búsqueda y encontrar un nuevo valor intermedio, "izquierda" se actualiza al índice 4, mientras que "derecha" sigue siendo 6. 4 y 6 son los índices del primer y último valor en la nueva área de búsqueda, el lado derecho del valor intermedio anterior.

El nuevo índice del valor intermedio es

(izq + der)/2 = (4+6)/2 = 10/2 = 5


Se comprueba el nuevo valor medio en el índice 5: 15 es mayor que 11, por lo que si el valor objetivo 11 existe en la matriz, debe estar a la izquierda del índice 5. La nueva área de búsqueda se crea actualizando "derecha" de 6 a 4. Ahora, tanto "izquierda" como "derecha" son 4, (izquierda+derecha)/2=(4+4)/2=4

por lo que solo queda verificar el índice 4. El valor objetivo 11 se encuentra en el índice 4, por lo que se devuelve el índice 4.

En general, esta es la forma en que el algoritmo de búsqueda binaria continúa dividiendo a la mitad el área de búsqueda de la matriz hasta que se encuentra el valor objetivo.

Cuando se encuentra el valor objetivo, se devuelve su índice. Si no se encuentra, se devuelve -1.


## Implementación

Una matriz con valores para buscar.
Un valor objetivo a buscar.
Un bucle que se ejecuta mientras el índice izquierdo sea menor o igual que el índice derecho.
Una declaración if que compara el valor medio con el valor objetivo y devuelve el índice si se encuentra el valor objetivo.
Una declaración if que verifica si el valor objetivo es menor o mayor que el valor medio y actualiza las variables "izquierda" o "derecha" para limitar el área de búsqueda.
Después del bucle, devuelve -1, porque en este punto sabemos que no se ha encontrado el valor objetivo.


Código: 

```
def binarySearch(arr, targetVal):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == targetVal:
            return mid
        
        if arr[mid] < targetVal:
            left = mid + 1
        else:
            right = mid - 1

    return -1

myArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
myTarget = 15

result = binarySearch(myArray, myTarget)

if result != -1:
    print("Value",myTarget,"found at index", result)
else:
    print("Target not found in array.")
    
```


## Complejidad temporal

Cada vez que Binary Search comprueba un nuevo valor para ver si es el valor objetivo, el área de búsqueda se reduce a la mitad.

Esto significa que incluso en el peor de los casos, donde la búsqueda binaria no puede encontrar el valor objetivo, todavía solo necesita log2n.
comparaciones para mirar a través de una matriz ordenada de n valores.

La complejidad temporal para la búsqueda binaria es 
O(log2 n)

##### Nota: Al escribir la complejidad de tiempo utilizando la notación Big O, también podríamos haber escrito simplemente O(logn), pero O(log2n) nos recuerda que el área de búsqueda de la matriz se reduce a la mitad para cada nueva comparación, que es el concepto básico de la búsqueda binaria, por lo que solo mantendremos la indicación de base 2 en este caso.



# Linked List
