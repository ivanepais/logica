# DSA Made Easy - Karumanchi

He seguido un patrón de mejora de las soluciones de los problemas con diferentes complejidades (para cada problema, encontrará múltiples soluciones con complejidades diferentes y reducidas). Básicamente, se trata de una enumeración de posibles soluciones. Con este enfoque,

incluso si le plantean una nueva pregunta, le mostrará cómo pensar en las posibles soluciones.

Este libro le resultará útil para la preparación de entrevistas, exámenes competitivos y entrevistas universitarias.

Como solicitante de empleo, si lee el libro completo, estoy seguro de que podrá desafiar a los entrevistadores. 

Si lees el libro como estudiante que se prepara para los exámenes competitivos de Ciencias de la Computación / Tecnologías de la Información, el contenido cubre todos los temas requeridos con todo detalle.

En cada capítulo, primero verá la teoría básica requerida, seguida de varios problemas. Para muchos problemas, se ofrecen múltiples soluciones con diferentes niveles de complejidad. Comenzamos con la solución de fuerza bruta y avanzamos lentamente hacia la mejor solución posible para ese problema.

Para cada problema, nos esforzamos por comprender cuánto tiempo toma el algoritmo y cuánta memoria utiliza.


# 1. Intro

El objetivo de este capítulo es explicar la importancia del análisis de algoritmos, sus notaciones, relaciones y la resolución del mayor número posible de problemas. 

Primero, nos centraremos en comprender los elementos básicos de los algoritmos y la importancia del análisis de algoritmos, para luego avanzar gradualmente hacia los demás temas mencionados anteriormente.

##### Al completar este capítulo, podrá determinar la complejidad de cualquier algoritmo (especialmente las funciones recursivas).


## 1.1 Variables

Antes de pasar a la definición de variables, relacionémoslas con ecuaciones matemáticas antiguas. 

Ej: 

```
x^2 + 2y - 2 = 1

```

Lo importante es entender que la ecuación tiene nombres (x e y), que contienen valores (datos). 

Esto significa que los nombres (x e y) son marcadores para representar datos.

##### De forma similar, en programación informática necesitamos algo para almacenar datos, y las variables son la forma de hacerlo.


## 1.2 Tipos de datos

En la ecuación mencionada, las variables x e y pueden tomar cualquier valor, como números enteros (10, 20), números reales (0,23, 5,5) o simplemente 0 y 1.

Para resolver la ecuación, necesitamos relacionarlas con los tipos de valores que pueden tomar, y el término "tipo de dato" se utiliza en programación informática para este propósito. 

##### Un tipo de dato en un lenguaje de programación es un conjunto de datos con valores predefinidos. 
 
##### Ejemplos de tipos de datos son: entero, punto flotante, unidad numérica, carácter, cadena, etc.


La memoria de la computadora está llena de ceros y unos. 

Si tenemos un problema y queremos codificarlo, es muy difícil proporcionar la solución en términos de ceros y unos. 

Para ayudar a los usuarios, los lenguajes de programación y los compiladores nos proporcionan tipos de datos.

##### Por ejemplo, un entero ocupa 2 bytes (el valor real depende del compilador), un flotante ocupa 4 bytes, etc. 
 
Esto significa que en la memoria estamos combinando 2 bytes (16 bits) y lo llamamos entero.

De forma similar, al combinar 4 bytes (32 bits) y llamarlo flotante, un tipo de dato reduce el esfuerzo de codificación. 


Para el alto nivel existen dos tipos de datos: 

1. Tipos de datos definidos por el sistema (también llamados tipos de datos primitivos)

2. Tipos de datos definidos por el usuario
 
 
### Tipos de datos definidos por el sistema (tipos de datos primitivos)

Los tipos de datos primitivos que ofrecen muchos lenguajes de programación son: int, float, char, double, bool, etc. 

##### El número de bits asignados a cada tipo de dato primitivo depende de los lenguajes de programación, el compilador y el sistema operativo.

Para el mismo tipo de dato primitivo, diferentes lenguajes pueden usar tamaños diferentes. Dependiendo del tamaño de los tipos de datos, el total de valores disponibles (dominio) también variará.


"int" puede ocupar 2 o 4 bytes.

Si ocupa 2 bytes (16 bits), el total de valores posibles es de -32.768 a +32.767 (de -2^15 a 2^15-1). 

Si ocupa 4 bytes (32 bits), los valores posibles están entre -2.147.483.648 y +2.147.483.647 (-2^31 a 2^31-1). 

Lo mismo ocurre con otros tipos de datos.


### Tipos de datos definidos por el usuario

##### Permiten a los usuarios definir sus propios tipos de datos 

Buenos ejemplos de tipos de datos definidos por el usuario son las estructuras (struct) en C/C++ y las clases (class) en Java.


Por ejemplo, en el fragmento a continuación, combinamos varios tipos de datos definidos por el sistema y llamamos al tipo de datos definido por el usuario "newType". 

##### Esto proporciona mayor flexibilidad y comodidad al gestionar la memoria del ordenador.

```
struct newType {
	int data1;
	float data2;
	...
	char data;
};

```


### 1.3 Estructuras de Datos

##### Una vez que tenemos datos en variables, necesitamos algún mecanismo para manipularlos y resolver problemas.

Una estructura de datos es una forma particular de almacenar y organizar datos en una computadora para que puedan usarse eficientemente. 

##### Una estructura de datos es un formato especial para organizar y almacenar datos.

Los tipos generales de estructuras de datos incluyen matrices, archivos, listas enlazadas, pilas, colas, árboles, grafos, etc.

Según la organización de los elementos, las estructuras de datos se clasifican en dos tipos:


1. Estructuras de datos lineales:

##### Se accede a los elementos en orden secuencial, pero no es obligatorio almacenarlos secuencialmente.

Ejemplos: listas enlazadas, pilas y colas.


2. Estructuras de datos no lineales: 

Los elementos de esta estructura de datos se almacenan y se accede a ellos en un orden no lineal. 

Ejemplos: árboles y grafos.


### 1.4 Tipos de Datos Abstractos (TAD)

Antes de definir los tipos de datos abstractos, consideremos las diferentes perspectivas de los tipos de datos definidos por el sistema. 

##### Sabemos que, por defecto, todos los tipos de datos primitivos (int, float, etc.) admiten operaciones básicas como la suma y la resta.

El sistema proporciona las implementaciones para los tipos de datos primitivos. 

##### Para los tipos de datos definidos por el usuario, también necesitamos definir operaciones.

La implementación de estas operaciones puede realizarse cuando realmente queramos utilizarlas. 

##### Esto significa que, en general, los tipos de datos definidos por el usuario se definen junto con sus operaciones.

Para simplificar la resolución de problemas, combinamos las estructuras de datos con sus operaciones y lo llamamos Tipos de Datos Abstractos (TAD). 

Un TAD consta de dos partes:

1. Declaración de datos

2. Declaración de operaciones


##### Los TDA más utilizados incluyen: listas enlazadas, pilas, colas, colas de prioridad, árboles binarios, diccionarios, conjuntos disjuntos (unión y búsqueda), tablas hash, grafos y muchos otros. 

Por ejemplo, la pila utiliza el mecanismo LIFO (último en entrar, primero en salir) al almacenar los datos en estructuras de datos.

El último elemento insertado en la pila es el primero en eliminarse. 

Sus operaciones más comunes son: crear la pila, insertar un elemento en ella, extraer un elemento de la pila, encontrar la parte superior actual de la pila, encontrar el número de elementos en la pila, etc.

##### Los diferentes tipos de TDA se adaptan a diferentes tipos de aplicaciones, y algunos están altamente especializados para tareas específicas. 


### 1.5 Algoritmo

##### Para un problema dado proporcionamos un procedimiento paso a paso para su solución.

La definición formal de un algoritmo puede resumirse así:

Un algoritmo consiste en instrucciones paso a paso inequívocas para resolver un problema dado.


##### En el estudio tradicional de algoritmos, existen dos criterios principales para evaluar su eficacia: 

1. corrección/correctness:

##### (¿resuelve el algoritmo el problema en un número finito de pasos?)


2. eficiencia/efficiency:

##### (cuántos recursos (en términos de memoria y tiempo) se requieren para su ejecución).


### 1.6 ¿Por qué el análisis de algoritmos?

Para ir de la ciudad “A” a la ciudad “B”, existen muchas maneras de hacerlo: en avión, autobús, tren e incluso en bicicleta. 

##### Dependiendo de la disponibilidad y la conveniencia, elegimos la opción que mejor nos convenga.

##### De igual manera, en informática, existen múltiples algoritmos para resolver el mismo problema (por ejemplo, un problema de ordenación tiene muchos algoritmos, como la ordenación por inserción, la ordenación por selección, la ordenación rápida y muchos más).

##### El análisis de algoritmos nos ayuda a determinar cuál es el más eficiente en términos de tiempo y espacio consumido.


### 1.7 Objetivo del análisis de algoritmos

##### El objetivo del análisis de algoritmos es comparar algoritmos (o soluciones) principalmente en términos de tiempo de ejecución, pero también en términos de otros factores (p. ej., memoria, esfuerzo del desarrollador, etc.).


### 1.8 ¿Qué es el análisis del tiempo de ejecución?

##### Es el proceso de determinar cómo aumenta el tiempo de procesamiento a medida que aumenta el tamaño del problema (tamaño de entrada). 

##### El tamaño de entrada es el número de elementos que contiene y, según el tipo de problema, la entrada puede ser de diferentes tipos.

##### Los siguientes son los tipos comunes de entrada:

Tamaño de un array
Grado polinomial
Número de elementos en una matriz
Número de bits en la representación binaria de la entrada
Vértices y aristas en un grafo


### 1.9 Cómo comparar algoritmos

##### Para comparar algoritmos, definamos algunas medidas objetivas:

¿Tiempos de ejecución? No es una buena medida, ya que los tiempos de ejecución son específicos de cada computadora.

¿Número de sentencias ejecutadas? No es una buena medida, ya que el número de sentencias varía según el lenguaje de programación y el estilo de cada programador.

##### ¿Solución ideal? Supongamos que expresamos el tiempo de ejecución de un algoritmo dado en función del tamaño de entrada n (es decir, f(n)) y comparamos estas diferentes funciones correspondientes a los tiempos de ejecución.

##### Este tipo de comparación es independiente del tiempo de la máquina, el estilo de programación, etc.

```
Misma entrada n; diferents soluciones F, G, U, etc

```


### 1.10 ¿Qué es la tasa de crecimiento?

##### La tasa a la que aumenta el tiempo de funcionamiento en función de la entrada se denomina tasa de crecimiento

Supongamos que vas a una tienda a comprar un coche y una bicicleta. 

Si un amigo te ve allí y te pregunta qué vas a comprar, generalmente respondes que compras un coche. 

Esto se debe a que el coste del coche es alto en comparación con el de la bicicleta (aproximando el coste de la bicicleta al del coche).

```

total cost = cost_of_car + cost_of_bicycle

total cost = cost_of_car (approx)

```

Para el ejemplo mencionado, podemos representar el coste del coche y el de la bicicleta en términos de función, y para una función dada, ignorar los términos de orden inferior que son relativamente insignificantes (para un valor grande de tamaño de entrada, n).

Por ejemplo, en el caso siguiente, n^4, 2n^2, 100n y 500 son los costes individuales de alguna función y se aproximan a n^4, ya que n^4 es la tasa de crecimiento más alta.

```
n^4, 2n^2  100n + 500 =~ n^4

```

##### (Big O: limite superior)


### 1.11 Tasas de crecimiento comúnmente utilizadas

El siguiente diagrama muestra la relación entre diferentes tasas de crecimiento.

```
Tasas de crecimiento decrecientes:

2^2^n -> n! -> 4^n -> 2^n 

n^2 -> n log n -> log(n!) -> n

2^log n -> log^2 n

/(logn) -> log log n -> 1

```

A continuación se muestra la lista de tasas de crecimiento que encontrará en los siguientes capítulos.

Complejidad temporal | Nombre | Ej

#### 1: Constante, Añadir un elemento al principio de una lista enlazada

#### log n: Logarítmica, Encontrar un elemento en una matriz ordenada

#### n: Lineal, Encontrar un elemento en una matriz desordenada

#### nlogn: Logarítmica lineal, Ordenar n elementos mediante "divide y vencerás" - Ordenación por combinación

#### n^2: Cuadrática, Camino más corto entre dos nodos en un grafo

#### n^3: Cúbica, Multiplicación de matrices

#### 2^n: Exponencial, Problemas de las Torres de Hanói


### 1.12 Tipos de Análisis

##### Para analizar el algoritmo dado, necesitamos saber con qué entradas tarda menos (rendimiento bueno) y con cuáles tarda más

Ya hemos visto que un algoritmo se puede representar mediante una expresión.
 
##### Esto significa que representamos el algoritmo con múltiples expresiones: una para el caso en que tarda menos y otra para el caso en que tarda más.

Generalmente, el primer caso se denomina el mejor caso y el segundo, el peor caso del algoritmo

##### Para analizar un algoritmo necesitamos algún tipo de sintaxis, que constituye la base del análisis/notación asintótico. 

Existen tres tipos de análisis:

1. Peor caso:

Define la entrada para la que el algoritmo tarda mucho tiempo (tiempo más lento en completarse).

La entrada es aquella para la que el algoritmo se ejecuta más lentamente.


2. Mejor caso

Define la entrada para la que el algoritmo tarda menos tiempo (tiempo más rápido en completarse).

La entrada es aquella para la que el algoritmo se ejecuta más rapido.


3. Caso promedio

Proporciona una predicción sobre el tiempo de ejecución del algoritmo.

##### Ejecute el algoritmo muchas veces, utilizando diferentes entradas provenientes de alguna distribución que las genere, calcule el tiempo total de ejecución (sumando los tiempos individuales) y divida entre el número de ensayos.

Supone que la entrada es aleatoria.


##### (banda superior (big O), banda inferior(big omega), big theta (o + omega) ?

```
Límite inferior <= Tiempo promedio <= Límite superior

Lower Bound <= Average Time <= Upper Bound

```

##### Para un algoritmo dado, podemos representar el mejor, el peor y el promedio de los casos mediante expresiones. 

Por ejemplo, supongamos que f(n) es la función que representa el algoritmo dado.

```
f(n) = n^2 + 500, for worst case 

f(n) = n + 100n + 500, for best case 

```

Lo mismo ocurre en el caso promedio. 

La expresión define las entradas con las que el algoritmo calcula el tiempo de ejecución promedio (o memoria).


### 1.13 Notación Asintótica

##### Con las expresiones para el mejor, el promedio y el peor caso, para los tres casos necesitamos identificar los límites superior e inferior. 

Para representar estos límites, necesitamos algún tipo de sintaxis, y ese es el tema de la siguiente discusión. 

Supongamos que el algoritmo dado se representa como la función f(n).


### 1.14 Notación Big-O [Función de banda Superior]

##### Esta notación proporciona la cota superior estricta de la función dada. 

Generalmente, se representa como f(n) = O(g(n)). 

##### Esto significa que, para valores mayores de n, la cota superior de f(n) es g(n). 

Por ejemplo, si f(n) = n^4 + 100n^2 + 10n + 50 es el algoritmo dado, entonces n^4 es g(n). 

##### Esto significa que g(n) proporciona la tasa máxima de crecimiento de f(n) para valores mayores de n.


```
n^4 + 100n^2 + 10n + 50 
|		|			|
Big O  Big Theta   Big Omega 
|		|			|
Peor   Promedio		Mejor ?
 
```

Gráfico: 

Ejes: y(tasa crecim), x(tamaño de entrada, n)

```
|cg(n) f(n)
| /   /
|/-- /
|__|____
   n_0

```

La notación O se define como O(g(n)) = {f(n):
existen constantes positivas c y n_sub0 tales que 0 ≤ f(n) ≤ cg(n) para todo n > n_sub0}.

g(n) es una cota superior asintótica y ajustada para f(n). 

Nuestro objetivo es obtener la tasa de crecimiento más pequeña, g(n), que sea mayor o igual a la tasa de crecimiento de los algoritmos dados, /(n).


Generalmente, descartamos valores inferiores de n. 

Esto significa que la tasa de crecimiento a valores inferiores de n no es importante. 
 
##### En la figura, n_0 es el punto a partir del cual debemos considerar la tasa de crecimiento para un algoritmo dado. 

Por debajo de n_0, la tasa de crecimiento podría ser diferente.

##### n_0 se denomina umbral para la función dada.



### Visualización Big-O

O(g(n)) es el conjunto de funciones con un orden de crecimiento menor o igual a g(n). 

Por ejemplo:

##### O(n²) incluye O(1), O(n), O(nlogn), etc.

Nota: Analice los algoritmos solo con valores mayores de n. 

##### Esto significa que, por debajo de n_0, no nos importa la tasa de crecimiento.

```
O(1): 100, 1000, 200, 1, 20, etc

O(n): 3n + 100, 100n, 2n-1, 3, etc

O(nlogn): 5nlogn, 3n-100, 2n-1, 100, 100n, etc

O(n^2): n^2, 5n-10, 100, n^2-2n+1, 5, etc.  

```


### Ejemplos de Big-O 

1. Hallar el límite superior para f(n) = 3n + 8



# RS


## 1. F(n)

1. Expresar el tiempo de ejecución como f(n)

Para cada algoritmo, medimos (o estimamos) cuántas operaciones básicas hace en función del tamaño de la entrada.

Llamamos n al tamaño de la entrada (por ejemplo, número de elementos en un array).

La función f(n) nos dice “aproxímate a este número de operaciones cuando la entrada sea de tamaño n”.


Ej: 

Un bucle simple que recorra un arreglo de tamaño n, haciendo una operación por cada elemento, tiene f(n) = n.

Un bucle anidado que recorra dos veces el arreglo (i desde 1 hasta n, j desde 1 hasta n) hace n·n operaciones, así que f(n) = n²


2. ¿Cómo comparamos dos algoritmos usando sus f(n)?

Escribimos para cada uno su f(n).

Vemos cómo crecen esas funciones conforme n aumenta.

##### El que crezca más despacio (para valores grandes de n) será el más “eficiente” a gran escala.

Algoritmo A: f₁(n) = n · log₂ n

Algoritmo B: f₂(n) = n²


|    n   |     n·log₂n (f₁)    |   n² (f₂)   |
| :----: | :-----------------: | :---------: |
|   10   |    ≈ 10·3.3 = 33    |     100     |
|   100  |    ≈100·6.6 = 660   |    10 000   |
|  1 000 |  ≈1000·10 = 10 000  |  1 000 000  |
| 10 000 | ≈10000·13.3=133 000 | 100 000 000 |


Aunque para n=10 la diferencia no es tan brutal (33 vs 100), al crecer n:

f₁(n) = n·log n sigue creciendo “moderadamente”.

f₂(n) = n² se dispara muchísimo más rápido.

##### Por eso decimos que n·log n crece asintóticamente más despacio que n². Para entradas grandes, A será claramente más rápido que B.


3. Idea clave

"Expresamos el tiempo de ejecución de un algoritmo dado en función del tamaño de entrada n (es decir, f(n)) y comparamos estas diferentes funciones correspondientes a los tiempos de ejecución"


Modelar cada algoritmo con su propia f(n).

##### Comparar esas f(n) para decidir cuál es “mejor” (crece más lento).

##### Esa comparación nos da la base de la notación Big O, Θ, Ω, etc., que formalizan “crecer más rápido” o “más lento”.


Analogía:

Imagina dos coches en una curva de aceleración:

Coche A (f₁): acelera suave, su velocidad sube poco a poco (n·log n).

Coche B (f₂): acelera ferozmente, su velocidad se dispara (n²).


Al principio, quizá A y B no estén muy lejos. 

Pero cuanto más larga sea la recta (entradas mayores), B adelanta por mucho. 

Para tareas muy grandes, prefieres el coche “más estable” (crecimiento más lento).

Comparar f(n) es la forma de decidir, en teoría, cuál algoritmo es “más eficiente” cuando n crece.


No basta con contar operaciones a mano en un caso puntual; hay que mirar cómo crecen esas operaciones al escalar el problema.


## 2. Crecimiento: 

"Cuando n crece mucho, solo importa el término de mayor orden."

Supongamos que tenemos esta función que representa el tiempo de ejecución de algún algoritmo:

```
f(n)=n^4+2n^2+100n+500

```

¿Qué pasa cuando n = 1?

¿Qué pasa cuando n = 1000?


Elijamos solo dos términos, por ahora:

n⁴

100n


|   n   |                     $n^4$                    |           $100n$          |
| :---: | :------------------------------------------: | :-----------------------: |
|   10  |               $10^4 = 10\,000$               |   100*10 =      1\,000$   |
| 1 000 | $1000^4 = 1\,000\,000\,000\,000$ (un billón) |   100*1000 =    100\,000$ |

Para n=10, n^4 (10 000) es 10 veces mayor que 100 (1 000).

Para n=1000, n^4 (1 000 000 000 000) es ¡10 000 000 veces mayor! que 100n (100 000).


### Suguiere que para valores muy grandes

Cómo crece cada término cuando nn pasa de 10 a 1 000?

¿Por qué, a pesar de que para valores pequeños ambos son “razonables”, para valores grandes el término n4n4 domina totalmente el coste total?

Ej: n^4

##### Para valores de n muy grandes, cualquier término que crezca “solo” linealmente (100n), cuadráticamente (2n²), o constante (500) se vuelve insignificante al lado de n⁴. Por eso, al analizar la función

Al analizar la función: 

```
f(n)=n^4+2n^2+100n+500

```

##### podemos aproximar el coste dominante como:

```
f(n)≈n^4

```

##### Y en notación Big O decimos:

```
f(n)=O(n^4)

```

Porque n⁴ es el término de mayor orden, el que manda cuando n crece.


## 3. Ignorar los demás terminos

"Los terminos de orden inferior son insignificantes para un tamaño de entrada grande; los ignoramos".

##### Cuando n crece mucho, los términos de orden inferior aportan tan poco al total que, en la práctica, no cambian la tendencia de crecimiento

Por eso nos quedamos con el de mayor orden, que “manda” en el comportamiento asintótico.


### Claves:

1. Idea clave: Nos fijamos en cómo se comporta esa función para valores muy grandes de n.

2. Término dominante: El monomio de mayor grado (por ejemplo, n^4 en n^4+2n^2+100n+500 es el que marca la pauta de crecimiento.

3. Constantes y términos menores: No cambian la tendencia cuando n→∞n→∞, así que los descartamos.

4. Notación Big O: Resume todo diciendo, por ejemplo, O(n4) en lugar de escribir n^4+2n^2+100n+500


## 4. Tasas de crecimiento

##### Comparar rápidamente cuán “rápido” crecen distintas funciones cuando aumentas mucho n. 

La idea concreta es:

1. Orden de factibilidad:

##### En la práctica, los algoritmos con tasas más “bajas” son los que aguantan mejor entradas grandes.

##### Por ejemplo, un O(n)tarda razonablemente si n pasa de 1 000 a 10 000, pero un O(n^2) ya se hace mucho más lento, y un O(2^n) se vuelve inabordable muy pronto.


2. Categorías comunes: 

Constante O(1): siempre igual (añadir al principio de una lista enlazada).

Logarítmica O(log⁡n): crece muy despacio (p.ej. búsqueda binaria).

Lineal O(n): proporcional a nn (búsqueda secuencial).

##### Lineal‑logarítmica O(nlog⁡n): donde entra la mayoría de los buenos algoritmos de ordenación “divide y vencerás”.

##### Polinómica O(n^2),O(n^3): típica de algoritmos de fuerza bruta sobre pares o tripletas.

Exponencial O(2^n),O(4^n),n!: solo útiles para entradas muy pequeñas.


### 5. Casos 

No hay una sola “f(n)” para un algoritmo, sino varias según el tipo de entrada:

1. f_worst(n): la función que mide el coste cuando la entrada es la “peor” posible (la que hace que el algoritmo tarde más).

2. f_best(n): la función que mide el coste cuando la entrada es la “mejor” posible (la que hace que tarde menos).

3. f_avg(n): la función que mide el coste medio, según una cierta forma de generar las entradas al azar.


Para cada uno escribes una expresión distinta, p. ej.

1. fworst​(n)=n^2+500

2. fbest​(n)=n+100n+500

3. Algo intermedio, calculado como el promedio sobre muchas ejecuciones.


##### Esas expresiones reflejan el comportamiento bajo esos conjuntos de entradas.


### 6. Limites

1. Límite superior e inferior para cada caso:

Al tener tres funciones para un algoritmo (mejor, medio y peor caso), queremos acotar cada una por arriba (cota superior) y por abajo (cota inferior).

##### Para ello necesitamos una notación que nos diga “a partir de cierto tamaño n_0​, la función siempre estará entre estas dos curvas”.

##### Esa notación es la “asintótica”: nos permite despreocuparnos de lo que pase cuando n<n0n<n0​ y centrarnos en el comportamiento para valores grandes de nn.


2. Big O (cota superior):

Decir “f(n)=O(g(n))f(n)=O(g(n))”

##### Significa que, más allá de cierto punto, f(n) nunca crece más rápido que un múltiplo constante de g(n).

En la práctica: si tienes

```
f(n) = n^4+100n^2+10n+50

```

eliges:

```
g(n) = n^4

```

##### Porque a partir de un nn suficientemente grande, n4n4 domina todos los demás términos.

##### Así te quedas con la tasa máxima de crecimiento, la que “manda” asintóticamente.


3. Definición formal con constantes cc y n_0​:

Decimos que f(n) = O(g(n))

Si existen dos constantes positivas c y n_0 tales que para todo n >= n_0

```
0≤f(n)≤cg(n).

```

Aquí:

##### n_0​ es el “umbral” a partir del cual la cota vale. 

Debajo de n_0 pueden pasar cosas raras, pero no nos importa.

##### c simplemente “escala” a g(n) para que cubra a f(n)


##### El objetivo es encontrar la menor g(n) posible (el término de crecimiento más bajo) que siga cumpliendo esa desigualdad.


### 7. Encontrar desigualdad Big O

Probar que `f(n)=3n+8`


1. Como es es O(n): 

Buscamos constantes positivas `c` y `n_0`​ tales que, `para todo n≥n_0​`,

`3n+8≤cn`.


2. Encontrar c y n_0:

Plantear la desigualdad:

3n+8≤cn -> 3+8/n​≤c.


3. Controlar el término 8/n​

Para que 8/n​ sea pequeña (≤ 1), basta pedir n≥8.

Si n≥8, entonces 8/n≤1.

Así: 

3+8/n ​≤ 3+1=4.


4. Elegir las constantes

Tomamos n_0=8n.

Con n≥n_0​, ya sabemos que 3+8/n≤4

Luego basta elegir c=4, porque para todo n≥8:

3n+8≤4n.

##### Hemos mostrado que existen c=4 y n_0=8 cumpliendo

```
0≤3n+8≤4n para todo n≥8,

```

##### es decir, 3n+8=O(n).


### 8. Desigualdad se cumpla solo para n≥n0n≥n0​ y no para todos los n≥1n≥1?

##### Queremos concentrarnos en el comportamiento cuando nn es grande, que es lo que importa al escalar el problema.

1. Para valores pequeños de n (por ejemplo, n<8 en nuestro ejemplo), las constantes y los términos de orden inferior pueden hacer que la desigualdad falle —pero es irrelevante porque estamos analizando escalas grandes.

2. A partir de cierto punto n_0, la tendencia asintótica domina, y ahí es donde tiene sentido comparar crecimiento.

3. Obligar la desigualdad para todos los n≥1 haría la definición muy estricta y poco práctica: nos encajona con el comportamiento en los inicios, que no refleja la “verdadera” velocidad de crecimiento

##### Por eso decimos “para todo n≥n:0​”: así ignoramos los efectos de tamaño pequeño y capturamos la esencia de cómo crece f(n) cuando n → ∞.



