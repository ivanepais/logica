# Intro CS - J.V.Guttag

Introducción a la computación y programación con Python, con aplicación al modelado computacional y la comprensión de datos.


El libro está dirigido a 1) lectores con poca o ninguna experiencia previa en programación que deseen comprender los enfoques computacionales para la resolución de problemas, y 2) programadores con más experiencia que quieran aprender a usar la computación para modelar cosas o explorar datos.

Priorizamos la amplitud sobre la profundidad. 

El objetivo es proporcionar a los lectores una breve introducción a diversos temas, para que tengan una idea de lo que es posible cuando llegue el momento de pensar en cómo usar la computación para lograr un objetivo. 

Dicho esto, este no es un libro de "apreciación de la computación". 

Es desafiante y riguroso.


Deben aprender a usar los modos de pensamiento computacional para plantear problemas, construir modelos computacionales y guiar el proceso de extracción de información de los datos. 

##### El principal conocimiento que obtendrán de este libro es el arte de la resolución de problemas computacionales.

Insertamos ejercicios prácticos en los momentos oportunos dentro de los capítulos.

Algunos son bastante breves y su objetivo es permitir a los lectores confirmar que han comprendido el material que acaban de leer.


Algunos son más desafiantes y adecuados para exámenes. 

Otros son lo suficientemente desafiantes como para ser útiles como tareas.


##### El libro aborda tres temas principales: la resolución sistemática de problemas, el poder de la abstracción y la computación como forma de pensar el mundo.

Al terminar este libro, deberías haber:
aprendido Python, un lenguaje para expresar cálculos;
aprendido un enfoque sistemático para organizar, escribir y
depurar programas de tamaño mediano;
desarrollado una comprensión informal de la complejidad computacional;
desarrollado una comprensión del proceso de pasar de un enunciado ambiguo de un problema a una formulación computacional de un método para resolverlo;
aprendido un conjunto útil de técnicas algorítmicas y de reducción de problemas;
aprendido a usar la aleatoriedad y las simulaciones para arrojar luz sobre problemas que no se resuelven fácilmente con soluciones cerradas; y
aprendido a usar herramientas computacionales (incluyendo herramientas estadísticas, de visualización y de aprendizaje automático) para modelar y comprender datos.


Programar es una actividad intrínsecamente difícil. 

Así como no hay un camino fácil para la geometría, no hay un camino fácil para la programación.

Esta fue la supuesta respuesta de Euclides, alrededor del año 300 a. C., a la petición del rey Ptolomeo de encontrar una forma más sencilla de aprender matemáticas.


# 1. Comienzo

##### Una computadora hace dos cosas, y solo dos: realiza cálculos y recuerda los resultados.

Una computadora típica que se coloca sobre un escritorio o en una mochila realiza aproximadamente 100 mil millones de cálculos por segundo.

En cuanto a la memoria,  Si un byte (la cantidad de bits, generalmente ocho, necesarios para representar un carácter) pesara un gramo (lo cual no es así), 100 gigabytes pesarían 100.000 toneladas métricas.


Durante la mayor parte de la historia de la humanidad, la computación estuvo limitada por la velocidad con la que el cerebro humano podía calcular y la capacidad de la mano para registrar resultados computacionales. Esto significaba que solo los problemas más pequeños podían abordarse computacionalmente

Incluso con la velocidad de las computadoras modernas, algunos problemas aún escapan a los modelos computacionales modernos (por ejemplo, comprender plenamente el cambio climático), pero cada vez hay más problemas que se pueden resolver computacionalmente. 


### Pensamiento computacional 

##### Todo conocimiento puede considerarse declarativo o imperativo.

El conocimiento declarativo se compone de afirmaciones de hecho. 

Por ejemplo, «la raíz cuadrada de x es un número y tal que y*y = x» y «es posible viajar en tren de París a Roma». 

Estas afirmaciones son de hecho. 


##### El conocimiento imperativo es el conocimiento práctico, o recetas para deducir información. 

Herón de Alejandría fue el primero en documentar una forma de calcular la raíz cuadrada de un número

Su método para hallar la raíz cuadrada de un número, llamémosla x, se puede resumir así:

1. Empezar con una aproximación, g.
2. Si g*g se acerca lo suficiente a x, detenerse y decir que g es la respuesta.
3. De lo contrario, crear una nueva aproximación promediando g y x/g, es decir, (g + x/g)/2.
4. Con esta nueva aproximación, que llamamos g, repetir el proceso hasta que g*g se acerque lo suficiente a x.

Consideremos hallar la raíz cuadrada de 25.

1. Asigne a g un valor arbitrario, p. ej., 3.
2. Decidimos que 3*3 = 9 no se acerca lo suficiente a 25.
3. Asigne a g (3 + 25/3)/2 = 5,67.
4. Decidimos que 5,67*5,67 = 32,15 todavía no se acerca lo suficiente a 25.
5. Asigne a g (5,67 + 25/5,67)/2 = 5,04.
6. Decidimos que 5,04*5,04 = 25,4 se acerca lo suficiente, por lo que nos detenemos y declaramos que 5,04 es una aproximación adecuada a la raíz cuadrada de 25.

La receta incluye algunas pruebas para determinar cuándo el proceso está completo, así como instrucciones sobre el orden de ejecución de las instrucciones, a veces saltando a una instrucción específica según una prueba.


##### Entonces, ¿cómo se plasma la idea de una receta en un proceso mecánico?

##### Una forma es diseñar una máquina específicamente diseñada para calcular raíces cuadradas. 

Aunque parezca extraño, las primeras máquinas de computación eran, de hecho, computadoras de programa fijo, lo que significa que fueron diseñadas para resolver un problema matemático específico, por ejemplo, para calcular la trayectoria de un proyectil de artillería.

##### Una de las primeras computadoras (construida en 1941 por Atanasoff y Berry) resolvía sistemas de ecuaciones lineales, pero no podía hacer nada más.

La máquina de bombas de Alan Turing, desarrollada durante la Segunda Guerra Mundial, fue diseñada para descifrar los códigos Enigma alemanes. 

Algunas computadoras simples todavía utilizan este enfoque. 

Por ejemplo, una calculadora de cuatro funciones es una computadora de programa fijo

Puede realizar operaciones aritméticas básicas, pero no puede usarse como procesador de texto ni para ejecutar videojuegos.

##### Para cambiar el programa de una máquina así, hay que reemplazar los circuitos.


##### La primera computadora verdaderamente moderna fue la Manchester Mark 1. 

##### Este tipo de computadora almacena (y manipula) una secuencia de instrucciones y tiene componentes que ejecutan cualquier instrucción de esa secuencia.

##### El núcleo de esta computadora es un intérprete que puede ejecutar cualquier conjunto legal de instrucciones y, por lo tanto, puede utilizarse para calcular cualquier cosa que pueda describirse utilizando dichas instrucciones.

##### El resultado del cálculo puede incluso ser una nueva secuencia de instrucciones, que luego puede ser ejecutada por la computadora que las generó. 

##### En otras palabras, una computadora puede programarse a sí misma.

##### Tanto el programa como los datos que manipula residen en la memoria.


##### Normalmente, un contador de programa apunta a una ubicación específica en la memoria, y el cálculo comienza ejecutando la instrucción en ese punto.

Con frecuencia, el intérprete simplemente pasa a la siguiente instrucción de la secuencia, pero no siempre. 

En algunos casos, realiza una prueba y, basándose en ella, la ejecución puede saltar a otro punto de la secuencia de instrucciones. 

##### Esto se denomina flujo de control y es esencial para escribir programas que realizan tareas complejas.

A veces se utilizan diagramas de flujo para representar el flujo de control

##### Por convención, se utilizan rectángulos para representar un paso de procesamiento, un diamante para representar una prueba y flechas para indicar el orden en que se realizan las tareas.


Dado un pequeño conjunto fijo de características primitivas, un buen programador puede producir una cantidad ilimitada de programas útiles.

Para crear recetas, o secuencias de instrucciones, necesitamos un lenguaje de programación para describirlas, una forma de dar instrucciones a la computadora.


##### En 1936, el matemático británico Alan Turing describió un dispositivo informático hipotético que se conoce como la Máquina Universal de Turing.

La máquina tenía memoria ilimitada en forma de "cinta" en la que se podían escribir ceros y unos, y unas pocas instrucciones primitivas sencillas para mover, leer y escribir en la cinta. 

##### La tesis de Church-Turing afirma que si una función es computable, se puede programar una Máquina de Turing para calcularla.

El "si" en la tesis de Church-Turing es importante.

##### No todos los problemas tienen soluciones computacionales

Turing demostró, por ejemplo, que es imposible escribir un programa que tome un programa arbitrario como entrada y que imprima verdadero si, y solo si, el programa de entrada se ejecuta indefinidamente.

##### Esto se conoce como el problema de la detención.


##### La tesis de Church-Turing conduce directamente al concepto de completitud de Turing.

##### Se dice que un lenguaje de programación es Turing completo si puede utilizarse para simular una Máquina de Turing universal. 

##### Todos los lenguajes de programación modernos son Turing completos. 

##### En consecuencia, cualquier cosa que pueda programarse en un lenguaje de programación (por ejemplo, Python) puede programarse en cualquier otro (por ejemplo, Java). 

Por supuesto, algunas cosas pueden ser más fáciles de programar en un lenguaje en particular, pero todos los lenguajes son fundamentalmente iguales en cuanto a potencia computacional.

Los lenguajes de programación modernos ofrecen un conjunto de primitivas más amplio y práctico. 

Sin embargo, la idea fundamental de la programación como el proceso de ensamblar una secuencia de operaciones sigue siendo fundamental.


##### Independientemente del conjunto de primitivas que tengas y de los métodos que uses para ensamblarlas, lo mejor y lo peor de la programación son lo mismo: la computadora hará exactamente lo que le digas, ni más ni menos.

Diferentes lenguajes son mejores o peores para distintos tipos de aplicaciones. 

MATLAB, por ejemplo, es un buen lenguaje para manipular vectores y matrices. 

C es un buen lenguaje para escribir programas que controlan redes de datos. 
 
PHP es un buen lenguaje para crear sitios web. 

Y Python es un excelente lenguaje de propósito general. 
 
 
##### Cada lenguaje de programación tiene un conjunto de construcciones primitivas, una sintaxis, una semántica estática y una semántica.

Las construcciones primitivas en Python incluyen literales (p. ej., el número 3.2 y la cadena 'abc') y operadores infijos (p. ej., + y /).

Por ejemplo, en inglés, la cadena "Cat dog boy" no es una oración sintácticamente válida, porque la sintaxis inglesa no acepta oraciones de la forma <nombre> <nombre> <nombre>.

En Python, la secuencia de primitivas 3.2 + 3.2 está sintácticamente bien formada, pero la secuencia 3.2 + 3.2 no lo está. 
 
 
##### Aunque los errores de sintaxis son el tipo de error más común (especialmente para quienes aprenden un nuevo lenguaje de programación), son el menos peligroso. 

1. Todo lenguaje de programación serio detecta todos los errores sintácticos y no permite a los usuarios ejecutar un programa con un solo error sintáctico

2. Además, en la mayoría de los casos, el sistema del lenguaje proporciona una indicación suficientemente clara de la ubicación del error como para que el programador pueda corregirlo sin pensarlo demasiado.


Identificar y resolver errores semánticos estáticos es más complejo.

Algunos lenguajes de programación, como Java, realizan una gran cantidad de comprobaciones semánticas estáticas antes de permitir la ejecución de un programa. 

##### Otros, como C y Python (por desgracia), realizan una comprobación semántica estática relativamente menor antes de ejecutar un programa.

##### Si un programa no tiene errores sintácticos ni errores semánticos estáticos, tiene un significado, es decir, tiene semántica.


Cuando un programa significa algo distinto a lo que su creador cree que significa, pueden ocurrir cosas malas.

¿Qué podría pasar si el programa tiene un error y se comporta de forma no deseada?


1. Podría bloquearse, es decir, dejar de ejecutarse y dar una indicación obvia de ello. 

En un sistema informático bien diseñado, cuando un programa falla, no daña el sistema en su conjunto. 

Lamentablemente, algunos sistemas informáticos muy populares no cuentan con esta característica. 

Casi todos los que usan un ordenador personal han ejecutado un programa que ha obligado a reiniciar todo el sistema.


2. Podría seguir ejecutándose una y otra vez, y nunca detenerse.

Si no se tiene idea de cuánto tiempo se supone que tarda el programa en realizar su trabajo, esta situación puede ser difícil de reconocer.


3. Podría ejecutarse hasta el final y dar una respuesta que podría ser correcta o no.


Cada uno de estos resultados es malo, pero el último es sin duda el peor. 

##### Cuando un programa parece funcionar correctamente pero no es así, pueden surgir consecuencias negativas: se pueden perder fortunas, los pacientes pueden recibir dosis fatales de radioterapia, los aviones pueden estrellarse.

##### Siempre que sea posible, los programas deben escribirse de forma que, cuando no funcionen correctamente, sea evidente. 

A lo largo del libro, explicaremos cómo hacerlo.


### Ejercicio

Las computadoras pueden ser irritantemente literales

Si no les dices exactamente qué quieres que hagan, es probable que hagan lo incorrecto. 

Intenta escribir un algoritmo para conducir entre dos destinos. 

Escríbelo como lo harías para una persona y luego imagina qué pasaría si esa persona fuera tan estúpida como una computadora y ejecutara el algoritmo exactamente como está escrito.


Planteo: 

conducir entre dos destinos

Escríbelo como lo harías para una persona

 car
|   |
d1, d2

inp:
calc:
out:

primitivos:

vars: car, d1, d2 (str)
control: if
buc: for, while


Vid: 

1. Tomar las llaves del auto

2. Salir de la casa 

3. ir al garage

4. desactivar la alarma del auto

5. abrir la puerta del auto

6. poner la llave y encender el auto

7. poner la primera marcha y andar

8. ir hace el destino

9. Volver a casa



# 2. Python

## Características de los lenguajes

1. Bajo nivel versus alto nivel: 

Se refiere a si programamos usando instrucciones y objetos de datos a nivel de máquina (por ejemplo, mover 64 bits de datos de una ubicación a otra) o si programamos usando operaciones más abstractas (por ejemplo, desplegar un menú en pantalla) proporcionadas por el diseñador del lenguaje.


2. General versus orientado a un dominio de aplicación:

Se refiere a si las operaciones primitivas del lenguaje de programación son de amplia aplicación o están optimizadas para un dominio.

Por ejemplo, SQL está diseñado para extraer información de bases de datos relacionales, pero no se usaría para construir un sistema operativo.
 

3. Interpretado versus compilado:

Se refiere a si la secuencia de instrucciones escrita por el programador, llamada código fuente, se ejecuta directamente (por un intérprete) o si se convierte primero (por un compilador) en una secuencia de operaciones primitivas a nivel de máquina.
  
(En los inicios de las computadoras, era necesario escribir el código fuente en un lenguaje similar al código máquina que el hardware pudiera interpretar directamente)


Ambos enfoques tienen ventajas. 

A menudo es más fácil depurar programas escritos en lenguajes diseñados para ser interpretados, ya que el intérprete puede generar mensajes de error que son fáciles de relacionar con el código fuente.

Los lenguajes compilados generalmente producen programas que se ejecutan más rápidamente y utilizan menos espacio.


##### Lo más importante es que aprenderás a escribir programas que resuelvan problemas.

Puedes transferir esta habilidad a cualquier lenguaje de programación.


##### Python es un lenguaje de programación de propósito general que puedes usar eficazmente para crear casi cualquier tipo de programa que no necesite acceso directo al hardware del ordenador.

Python no es óptimo para programas con altas restricciones de fiabilidad (debido a su deficiente comprobación semántica estática) o que son creados y mantenidos por muchas personas o durante un largo periodo de tiempo (de nuevo, debido a la deficiente comprobación semántica estática).

Tiene varias ventajas sobre muchos otros lenguajes.

Es un lenguaje relativamente simple y fácil de aprender. 

##### Dado que Python está diseñado para ser interpretado, puede proporcionar el tipo de retroalimentación en tiempo de ejecución que resulta especialmente útil para programadores principiantes. 

Un gran número de bibliotecas gratuitas, cada vez más numerosas, interactúan con Python y proporcionan una útil funcionalidad extendida.

Este libro no es solo una introducción a Python. 

##### Utiliza Python como vehículo para presentar conceptos relacionados con la resolución de problemas computacionales y el razonamiento.

No se ocupará de los detalles.


Todos los IDE de Python ofrecen un editor de texto con resaltado de sintaxis, autocompletado y sangría inteligente, un shell con resaltado de sintaxis y un depurador integrado, que puedes ignorar por ahora.


### Elementos de pyton

##### Un programa Python, a veces llamado script, es una secuencia de definiciones y comandos. 

##### El intérprete de Python en la shell evalúa las definiciones y ejecuta los comandos.

Recomendamos iniciar una shell de Python (por ejemplo, iniciando Spyder) ahora y usarla para probar los ejemplos que se incluyen en el resto de este capítulo y, de hecho, en el resto del libro.


##### Un comando, a menudo llamado sentencia, indica al intérprete que haga algo. 

Por ejemplo, la sentencia print('¡Los Yankees mandan!') indica al intérprete que llame a la función 12 print, que muestra la cadena ¡Los Yankees mandan! en la ventana asociada a la shell.


##### La función print toma un número variable de argumentos separados por comas y los imprime, separados por un espacio, en el orden en que aparecen. 
 


### Objetos, expresiones y tipos numéricos

##### Los objetos son los elementos fundamentales que manipulan los programas Python. 

##### Cada objeto tiene un tipo que define lo que los programas pueden hacer con él.

##### Los tipos pueden ser escalares o no escalares.

Los objetos escalares son indivisibles. 

Considérelos como los átomos del lenguaje

##### Los objetos no escalares, por ejemplo, las cadenas, tienen una estructura interna.

##### Muchos tipos de objetos pueden representarse mediante literales en el texto de un programa.

Por ejemplo, el texto "2" es un literal que representa un número y el texto "abc" es un literal que representa una cadena.


Python tiene cuatro tipos de objetos escalares:

1. int 

El tipo int se usa para representar números enteros. Los literales de tipo int se escriben de la misma forma que solemos denotar los enteros (p. ej., -3, 5 o 10002).


2. float

El tipo float se usa para representar números reales. Los literales de tipo float siempre incluyen un punto decimal (p. ej., 3.0, 3.17 o -28.72). 

##### (También es posible escribir literales de tipo float utilizando notación científica. Por ejemplo, el literal 1.6E3 representa 1.6*103, es decir, es igual a 1600.0)

##### Quizás te preguntes por qué este tipo no se llama real. En el ordenador, los valores de tipo float se almacenan como números de punto flotante.

##### Esta representación, utilizada por todos los lenguajes de programación modernos, tiene muchas ventajas. 

Sin embargo, en algunas situaciones, provoca que la aritmética de punto flotante se comporte de forma ligeramente diferente a la aritmética con números reales. 


3. bool

bool se utiliza para representar los valores booleanos Verdadero y Falso.

True, False


4. None

None es un tipo con un solo valor.


##### Los objetos y operadores se pueden combinar para formar expresiones, cada una de las cuales evalúa un objeto de algún tipo. 

##### Esto se denomina valor de la expresión. 

Por ejemplo, la expresión 3 + 2 denota el objeto 5 de tipo int, y la expresión 3.0 + 2.0 denota el objeto 5.0 de tipo float.


En una consola de Spyder, algo como In `[1]`: es un mensaje de shell que indica que el intérprete espera que el usuario escriba código Python en el shell. 

La línea debajo del mensaje se produce cuando el intérprete evalúa el código Python ingresado en el mensaje, como se ilustra en la siguiente interacción con el intérprete:

```
3
Out[1]: 3

3+2
Out[2]: 5

3.0+2.0
Out[3]: 5.0

3!=2
Out[4]: True

```

La función integrada de Python -type()- se puede usar para determinar el tipo de un objeto:

```
type(3)
Out[5]: int

type(3.0)
Out[6]: float

```


##### Los operadores aritméticos tienen la precedencia habitual. 

Por ejemplo, * se vincula con mayor fuerza que +, por lo que la expresión x+y*2 se evalúa multiplicando primero y por 2 y luego sumando el resultado a x. 

##### El orden de evaluación se puede cambiar usando paréntesis para agrupar subexpresiones; por ejemplo, (x+y)*2 primero suma x e y, y luego multiplica el resultado por 2.


##### Los operadores primitivos del tipo bool son and, or y not:

1. a and b son verdaderos si tanto a como b son verdaderos, y falsos en caso contrario.

2. a or b son verdaderos si al menos uno de a o b es verdadero, y falsos en caso contrario.

3. not a es verdadero si a es falso, y falso si a es verdadero.


Variables y Asignación

##### Las variables permiten asociar nombres con objetos.

```
pi = 3
radio = 11
area = pi * (radio**2)
radio = 14

```

El código primero vincula los nombres pi y radio a diferentes objetos de tipo int. 

Luego, vincula el nombre área a un tercer objeto de tipo int.

##### El código primero vincula los nombres pi y radio a diferentes objetos de tipo int.

Luego vincula el nombre área a un tercer objeto de tipo int.

Vinculación de variables a objetos.

##### Si el programa ejecuta radio = 14, el nombre radio se vincula a un objeto diferente de tipo int; deja de ser 11. 

##### Tenga en cuenta que esta asignación no afecta al valor al que se vincula área. Sigue vinculada al objeto denotado por la expresión 3*(11**2).

##### En Python, una variable es solo un nombre, nada más. Recuerde esto: es importante

Una sentencia de asignación asocia el nombre a la izquierda del símbolo = con el objeto denotado por la expresión a la derecha del símbolo =

```
name = obj (x type)

```

Recuerde también que un objeto puede tener uno, más de uno o ningún nombre asociado.
 
Los lenguajes de programación nos permiten describir los cálculos para que las computadoras puedan ejecutarlos.


Por lo tanto, es fundamental escribir programas fáciles de leer.

La elección adecuada de los nombres de las variables juega un papel importante en la mejora de la legibilidad.

1. 

```
a = 3.14159
b = 11.2
c = a*(b**2)

```

2. 

```
pi = 3.14159
diameter = 11.2
area = pi*(diameter**2)

```

##### En Python, los nombres de las variables pueden contener letras mayúsculas y minúsculas, dígitos (aunque no pueden empezar por un dígito) y el carácter especial _ (guión bajo). 

Los nombres de las variables de Python distinguen entre mayúsculas y minúsculas, por ejemplo, Romeo y romeo son nombres diferentes. 

##### Finalmente, existen algunas palabras reservadas (a veces llamadas palabras clave) en Python que tienen significados predefinidos y no pueden usarse como nombres de variables

##### Otra buena manera de mejorar la legibilidad del código es añadir comentarios. El texto que sigue al símbolo # no es interpretado por Python.

```
side = 1 #length of sides of a unit square
radius = 1 #radius of a unit circle
#subtract area of unit circle from area of unit square
area_circle = pi*radius**2
area_square = side*side
difference = area_square – area_circle

```

##### Python permite la asignación múltiple

```
x, y = 2, 3

```

enlaza x a 2 e y a 3. 

Todas las expresiones en el lado derecho de la asignación se evalúan antes de cambiar cualquier enlace.

##### Esto es conveniente, ya que permite usar asignaciones múltiples para intercambiar las vinculaciones de dos variables.

Por ejemplo, el código

```
x, y = 2, 3
x, y = y, x
print('x =', x)
print('y =', y)

```

out:
x = 3
y = 2


### Programas ramificados 

Los tipos de cálculos que hemos visto hasta ahora se denominan programas de línea recta.

Ejecutan una sentencia tras otra en el orden en que aparecen y se detienen cuando se agotan las sentencias.

Los tipos de cálculos que podemos describir con programas de línea recta no son muy interesantes.


Los programas ramificados son más interasantes

La sentencia de ramificación más simple es una condicional. 

Consta de tres partes:

1. Una prueba, es decir, una expresión que evalúa como Verdadero o Falso.

2. Un bloque de código que se ejecuta si la prueba evalúa como Verdadero.

3. Un bloque de código opcional que se ejecuta si la prueba evalúa como Falso.

Después de ejecutar una sentencia condicional, la ejecución se reanuda en el código que sigue a la sentencia.

```
	|Code|
	  |	
  /test/cond\
	/	\
|True | |False|
|block| |block|
	\	/
	|Code|

```

La ramificación que se ejecutó se unirá con el resto del código.

```
if Boolean expression:
	block of code
else:
	block of code

```

```
if Boolean expression:
	block of code

```

Por ejemplo, una expresión booleana indica que cualquier expresión que evalúe como Verdadero o Falso 

Considere el siguiente programa que imprime "Par" si el valor de la variable `x` es par y "Impar" en caso contrario:

```
if x%2 == 0:
	print('Even')
else:
	print('Odd')
print('Done with conditional')

```

La expresión x%2 == 0 se evalúa como Verdadero cuando el resto de x dividido entre 2 es 0, y como Falso en caso contrario.

##### Si la última sentencia del código anterior estuviera sangrada, formaría parte del bloque de código asociado con el else, en lugar del bloque de código que sigue a la sentencia condicional.

La mayoría de los demás lenguajes de programación utilizan símbolos de corchetes para delimitar bloques de código; por ejemplo, C encierra los bloques entre llaves, { }. 

##### Garantiza que la estructura visual de un programa sea una representación precisa de su estructura semántica.

Dado que la sangría es semánticamente importante, el concepto de línea también lo es. 

##### Una línea de código demasiado larga para leerse fácilmente se puede dividir en varias líneas en la pantalla terminando cada línea, excepto la última, con una barra invertida (\)

```
x = 1111111111111111111111111111111 +
222222222222333222222222 +\
3333333333333333333333333333333

```

##### Las líneas largas también se pueden ajustar mediante la continuación de línea implícita de Python. 

Esto se hace con corchetes, es decir, paréntesis, corchetes y llaves. Por ejemplo,

```
x = 1111111111111111111111111111111 +
222222222222333222222222 +
3333333333333333333333333333333

```
Se interpreta como dos líneas (y por lo tanto produce un error de sintaxis de “sangría inesperada” mientras que


```
x = (1111111111111111111111111111111 +
222222222222333222222222 +
3333333333333333333333333333333)

```

##### Se interpreta como una sola línea debido a los paréntesis. 

Muchos programadores de Python prefieren usar continuaciones de línea implícitas en lugar de una barra invertida. 

Normalmente, los programadores dividen las líneas largas en comas u operadores.


##### Un bloque de una sentencia condicional contiene otra sentencia condicional; se dice que las sentencias condicionales están anidadas. 

El siguiente código contiene sentencias condicionales anidadas en ambas ramas de la sentencia if de nivel superior.

```
if x%2 == 0:
	if x%3 == 0:
		print('Divisible by 2 and 3')
	else:
		print('Divisible by 2 and not by 3')
elif x%3 == 0:
	print('Divisible by 3 and not by 2')

```

El elif en el código anterior significa "else if". 

Suele ser conveniente usar una expresión compuesta al probar un condicional, por ejemplo:

```
if x < y and x < z:
	print('x is least')
elif y < z:
	print('y is least')
else:
	print('z is least')

```

### Ejercicio

Escriba un programa que examine tres variables (x, y, z) e imprima el mayor número impar. 

Si ninguna es impar, debería imprimir el menor de los tres.


Puede abordar este ejercicio de varias maneras. 

Hay ocho casos distintos a considerar: todas son impares (un caso), exactamente dos son impares (tres casos), exactamente una es impar (tres casos) o ninguna es impar (un caso). 

Por lo tanto, una solución sencilla implicaría una secuencia de ocho sentencias if, cada una con una sentencia print:

```
if x%2 != 0 and y%2 != 0 and z%2 != 0:
	print(max(x, y, z))
if x%2 != 0 and y%2 != 0 and z%2 == 0:
	print(max(x, y))
if x%2 != 0 and y%2 == 0 and z%2 != 0:
	print(max(x, z))
if x%2 == 0 and y%2 != 0 and z%2 != 0:
	print(max(y, z))
if x%2 != 0 and y%2 == 0 and z%2 == 0:
	print(x)
if x%2 == 0 and y%2 != 0 and z%2 == 0:
	print(y)
if x%2 == 0 and y%2 == 0 and z%2 != 0:
	print(z)
if x%2 == 0 and y%2 == 0 and z%2 == 0:
	print(min(x, y, z))

```

Esto funciona, pero es bastante engorroso.

##### No solo son 16 líneas de código, sino que las variables se prueban repetidamente para detectar su imparidad.

El siguiente código es más elegante y eficiente:

```
answer = min(x, y, z)
if x%2 != 0:
	answer = x
if y%2 != 0 and y > answer:
	answer = y
if z%2 != 0 and z > answer:
	answer = z
print(answer)

```

##### El código se basa en un paradigma de programación común.

##### Comienza asignando un valor provisional a una variable (respuesta), actualizándolo cuando corresponde y luego imprimiendo el valor final de la variable. 

Observe que comprueba si cada variable es impar exactamente una vez y contiene una sola sentencia de impresión. 

##### Este código es prácticamente lo mejor que podemos hacer, ya que cualquier programa correcto debe comprobar si cada variable es impar y comparar los valores de las variables impares para encontrar el mayor.


##### Python admite tanto expresiones condicionales como sentencias condicionales. Las expresiones condicionales tienen la forma

```
expr1 if condition else expr2

```

##### Si la condición se evalúa como Verdadera, el valor de toda la expresión es expr1; de lo contrario, es expr2. Por ejemplo, la instrucción


```
x = y if y > z else z

```

Establece x al máximo de y y z. 

Una expresión condicional puede aparecer en cualquier lugar donde pueda aparecer una expresión ordinaria, incluso dentro de expresiones condicionales. 

Por ejemplo,

```
print((x if x > z else z) if x > y else (y if y > z else z))

```

Imprime el máximo de x, y y z.


##### Los condicionales nos permiten escribir programas más interesantes que los programas lineales, pero la clase de programas ramificados sigue siendo bastante limitada. 

##### Una forma de considerar la potencia de una clase de programas es en términos de su tiempo de ejecución. 

Supongamos que cada línea de código tarda una unidad de tiempo en ejecutarse

##### Si un programa lineal tiene n líneas de código, tardará n unidades de tiempo en ejecutarse.

¿Qué ocurre con un programa ramificado con n líneas de código?

Puede tardar menos de n unidades de tiempo en ejecutarse, pero no más, ya que cada línea de código se ejecuta como máximo una vez. 

##### Se dice que un programa cuyo tiempo máximo de ejecución está limitado por su longitud se ejecuta en tiempo constante. 

##### Esto no significa que cada vez que se ejecuta el programa, ejecute el mismo número de pasos. 

##### Significa que existe una constante, k, tal que se garantiza que el programa no tardará más de k pasos en ejecutarse

##### Esto implica que el tiempo de ejecución no aumenta con el tamaño de la entrada del programa. 

##### Los programas de tiempo constante tienen capacidades limitadas.


Considere escribir un programa para contar los votos en unas elecciones.

Sería realmente sorprendente que se pudiera escribir un programa que pudiera hacerlo en un tiempo independiente del número de votos emitidos.

De hecho, es imposible hacerlo. 

##### El estudio de la dificultad intrínseca de los problemas es el tema de la complejidad computacional

##### Por suerte, solo necesitamos una construcción más del lenguaje de programación, la iteración, para poder escribir programas de complejidad arbitraria. 


### Strings e inputs

Los objetos de tipo str se utilizan para representar caracteres

Los literales de tipo str se pueden escribir entre comillas simples o dobles, por ejemplo, 'abc' o "abc". 

##### Se dice que el operador + está sobrecargado porque tiene diferentes significados según el tipo de objeto al que se aplica. 

El operador + significa suma cuando se aplica a dos números y concatenación cuando se aplica a dos cadenas.

##### El operador * también está sobrecargado. 

Cuando se aplica a un int y a un str, es un operador de repetición: la expresión n*s, donde n es un int y s es un str, se evalúa como un str con n repeticiones de s.

Por ejemplo, la expresión 2*'Juan' tiene el valor 'JuanJuan'. 



El código 'a'*'a' genera el mensaje de error:

TypeError: no se puede multiplicar la secuencia por un valor no int del tipo 'str'.

##### Que exista la comprobación de tipos es positivo. 

Convierte errores descuidados (y a veces sutiles) en errores que detienen la ejecución, en lugar de errores que provocan que los programas se comporten de forma misteriosa.

##### La comprobación de tipos en Python no es tan robusta como en otros lenguajes de programación (por ejemplo, Java), pero es mejor en Python 3 que en Python 2

Por ejemplo, está claro qué debería significar < cuando se usa para comparar dos cadenas o dos números. 

Pero ¿cuál debería ser el valor de '4' < 3? 

De forma bastante arbitraria, los diseñadores de Python 2 decidieron que debería ser Falso, porque todos los valores numéricos deben ser menores que todos los valores de tipo str. 

##### Los diseñadores de Python 3, y de la mayoría de los demás lenguajes modernos, decidieron que, dado que estas expresiones no tienen un significado obvio, deberían generar un mensaje de error.


##### Las cadenas son uno de los varios tipos de secuencias en Python. 

Comparten las siguientes operaciones con todos los tipos de secuencias.

1. length

La longitud de una cadena se puede calcular mediante la función len. 

Por ejemplo, el valor de len('abc') es 3.


2. Indexing

La indexación permite extraer caracteres individuales de una cadena. 

En Python, la indexación se basa en cero. 

Por ejemplo, al escribir `'abc'[0]` en el intérprete, se mostrará la cadena 'a'.

Al escribir `'abc'[3]`, se mostrará el mensaje de error IndexError: string index out of range.

Los números negativos se utilizan para indexar desde el final de una cadena. 

Por ejemplo, el valor de `'abc'[‑1]` es 'c'.
 


3. Slicing

Se utiliza para extraer subcadenas de longitud arbitraria.

Si s es una cadena, la expresión `s[inicio:fin]` denota la subcadena de s que comienza en el índice start y termina en el índice end-1. 

Por ejemplo, `'abc'[1:3]` se evalúa como 'bc'. 

¿Por qué termina en el índice end-1 en lugar de end?

Para que expresiones como `'abc'[0:len('abc')]` tengan el valor esperado.

##### Si se omite el valor antes de los dos puntos, el valor predeterminado es 0.

##### Si se omite el valor después de los dos puntos, el valor predeterminado es la longitud de la cadena

##### Por lo tanto, la expresión 'abc'[:] es semánticamente equivalente a la más detallada expresión 'abc'[0:len('abc')].

##### También es posible proporcionar un tercer argumento para seleccionar una porción no contigua de una cadena. 

##### Por ejemplo, el valor de la expresión '123456789'[0:8:2] es la cadena '1357'.


##### Suele ser conveniente convertir objetos de otros tipos en cadenas utilizando la función str. Considere, por ejemplo, el código

```
num = 30000000
fraction = 1/2
print(num*fraction, 'is', fraction*100, '%', 'of', num)
print(num*fraction, 'is', str(fraction*100) + '%', 'of',
num)

```

Imprime

```
15000000.0 is 50.0 % of 30000000
15000000.0 is 50.0% of 30000000

```

La primera sentencia de impresión inserta un espacio entre 50 y % porque Python inserta automáticamente un espacio entre los argumentos de la función de impresión. 

La segunda sentencia de impresión produce una salida más apropiada al combinar 50 y % en un solo argumento de tipo str.


##### Las conversiones de tipos (o coerción de tipos)

Usamos el nombre de un tipo para convertir valores a ese tipo.

Por ejemplo, el valor de int('3')*4 es 12. 

Cuando un float se convierte en un int, el número se trunca (no se redondea); por ejemplo, el valor de int(3.9) es el int 3.

Quizás te preguntes por ese .0 al final del primer número impreso. 

Esto aparece porque 1/2 es un número de punto flotante, y el producto de un int y un float es un float.

Se puede evitar convirtiendo num*fraction en un entero.

```
print(int(num*fraction), 'is', str(fraction*100) + '%',
'of', num)

```

Out: 15000000 is 50.0% of 30000000 


Python 3.6 introdujo una forma alternativa, más compacta, de crear expresiones de cadena.

##### Una cadena f consiste en el carácter f (o F) seguido de un tipo especial de literal de cadena llamado literal de cadena formateada.
 
Los literales de cadena formateados contienen secuencias de caracteres (como otros literales de cadena) y expresiones entre llaves. 

##### Estas expresiones se evalúan en tiempo de ejecución y se convierten automáticamente en cadenas. 

```
print(f'{int(num*fraction)} is {fraction*100}% of {num}')

```

Entre las llaves va el código, entre las comillas va el texto.

Produce el mismo resultado que la sentencia print anterior, más detallada.

##### Si desea incluir una llave en la cadena denotada por una cadena f, utilice dos llaves. 

Por ejemplo:

```
print(f'{{{3*5}}}') 

```

imprime {15}.
 

##### La expresión dentro de una cadena f puede contener modificadores que controlan la apariencia de la cadena de salida.

Estos modificadores se separan de la expresión que denota el valor a modificar mediante dos puntos
 
```
f'{3.14159:.2f}' 

```

Se evalúa como la cadena '3.14' porque el modificador .2f indica a Python que trunque la representación de cadena de un número de punto flotante a dos dígitos después del punto decimal.

Esto:

```
print(f'{num*fraction:,.0f} is {fraction*100}% of {num:,}')

``` 

Imprime: 15,000,000 is 50.0% of 30,000,000

##### El modificador , indica a Python que use comas como separadores de miles.
 

Input:

Función, input, que permite obtener información directamente del usuario

##### Esta función toma una cadena como argumento y la muestra como un mensaje en la shell. 

##### La función espera a que el usuario escriba algo y presione la tecla Intro. 

La línea escrita por el usuario se trata como una cadena y se convierte en el valor devuelto por la función.

Al ejecutar el código `name = input('Introduce tu nombre: ')`, se mostrará la línea `Introduce tu nombre:` en la ventana de la consola. 
 
##### Si escribes `George Washington` y presionas Intro, la cadena `George Washington` se asignará a la variable `name`. 

Si ejecutas `print('¿De verdad eres tú?', `name, '?'), se mostrará la línea `¿De verdad eres tú George Washington?`.

Observa que la sentencia `print` introduce un espacio antes del ?".

Esto se debe a que, al asignar varios argumentos a `print`, se coloca un espacio entre los valores asociados a ellos.

El espacio podría evitarse ejecutando `print('¿De verdad eres ' + nombre + '?')` o `print(f'¿De verdad eres {nombre}?')`, cada uno de los cuales produce una sola cadena y la pasa como único argumento para imprimir.

```
n = input('Enter an int: ')
print(type(n))

```

out: <class ‘str'>

##### Porque input siempre devuelve un objeto de tipo str, incluso si el usuario ha introducido algo que parece un entero. 

##### Por ejemplo, si el usuario hubiera introducido 3, n estaría ligado a la cadena '3', no al entero 3. 

##### El valor de la expresión n*4 sería '3333' en lugar de 12. 


### Ejercicio

Escribe un código que pida al usuario que ingrese su fecha de nacimiento en formato mm/dd/aaaa y luego imprima una cadena con el formato "Naciste en el año aaaa".


Planteo: 

inp(m, d, y):
inp(str)

calc:
print(y)

out: 
str+y 


#### Diseño de código 

#### Básico: Funciona siempre y cuando el usuario formatee correctamente la fecha. 

##### Falla diseño: confiar en que la entrada será correcta. 

```
fecha_str = input("Ingresá tu fecha de nacimiento (mm/dd/aaaa): ")

partes = fecha_str.split("/")  # → ['mm', 'dd', 'aaaa']
año = partes[2] # o partes[-1]

print("Naciste en el año", año)

```

Sin validación: si el usuario escribe mal, el código rompe


#### Validación minima: 

```
fecha = input("Ingresá tu fecha de nacimiento (mm/dd/aaaa): ")
partes = fecha.split("/")

if len(partes) == 3:
    año = partes[2]
    print("Naciste en el año", año)
else:
    print("Formato inválido. Usá mm/dd/aaaa.")

```

##### Falla diseño: No valida si los valores son reales (ej. mes 13 o día 99).



#### Librería datetime

##### Diseño correcto: Validación automática del formato y de la fecha real

```
from datetime import datetime

entrada = input("Ingresá tu fecha de nacimiento (mm/dd/aaaa): ")

try:
    fecha = datetime.strptime(entrada, "%m/%d/%Y")
    print("Naciste en el año", fecha.year)
except ValueError:
    print("Formato inválido. Usá mm/dd/aaaa.")

```


#### Función reutilizable 

##### Diseño para proyectos grandes

```
def obtener_año(fecha_str):
    try:
        fecha = datetime.strptime(fecha_str, "%m/%d/%Y")
        return fecha.year
    except ValueError:
        return None

entrada = input("Ingresá tu fecha de nacimiento (mm/dd/aaaa): ")
año = obtener_año(entrada)

if año is not None:
    print("Naciste en el año", año)
else:
    print("Formato inválido.")

```


