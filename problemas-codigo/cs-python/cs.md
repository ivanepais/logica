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


### Codificación de caracteres

Durante muchos años, la mayoría de los lenguajes de programación utilizaron un estándar llamado ASCII para la representación interna de caracteres

Este estándar incluía 128 caracteres, suficientes para representar el conjunto habitual de caracteres que aparecen en el texto en inglés, pero no los suficientes para cubrir los caracteres y acentos presentes en todos los idiomas del mundo.

##### El estándar Unicode es un sistema de codificación de caracteres diseñado para facilitar el procesamiento digital y la visualización de textos escritos en todos los idiomas.

Contiene más de 120 000 caracteres, que abarcan 129 escrituras modernas e históricas y múltiples conjuntos de símbolos.

##### El estándar Unicode se puede implementar utilizando diferentes codificaciones internas de caracteres. Puedes indicarle a Python qué codificación usar insertando un comentario con la forma

##### Puedes indicarle a Python qué codificación usar insertando un comentario con la forma

```
# -*- coding: encoding name -*-

```

Como la primera o segunda línea de su programa. 

Por ejemplo,

```
# -*- coding: utf-8 -*-

```

Indica a Python que use UTF-8, la codificación de caracteres más utilizada en páginas web.18 Si no tiene dicho comentario en su programa, la mayoría de las implementaciones de Python usarán UTF-8 por defecto.

Al usar UTF-8, puede, si el editor de texto lo permite, introducir directamente código como

```
print('Mluvíš anglicky?')
print(' ा आप अं ेज़ी बोलते ह?')

```

Imprimirá

```
Mluvíš anglicky?
ा आप अं ेज़ी बोलते ह?

```

Como la mayor parte de la web usa UTF-8, pude cortar la cadena de una página web y pegarla directamente en mi programa. 


### While loop

##### Mencionamos que la mayoría de las tareas computacionales no se pueden realizar mediante programas de ramificación. 

Considere, por ejemplo, escribir un programa que pregunte el número de X. 

Podría pensar en escribir algo como

```
num_x = int(input('How many times should I print the letter
X? '))

to_print = ''
if num_x == 1:
	to_print = 'X'
elif num_x == 2:
	to_print = 'XX'
elif num_x == 3:
	to_print = 'XXX'
#…
print(to_print)

```

##### No nos serviría un programa lineal con ramificación

Pero rápidamente se haría evidente que se necesitarían tantos condicionales como enteros positivos, y hay un número infinito de ellos. 

Lo que se busca es escribir un programa similar a (lo siguiente es pseudocódigo, no Python).

```
num_x = int(input('How many times should I print the letter
X? '))
to_print = ''
# concatenate X to to_print num_x times
print(to_print)

```

Cuando queremos que un programa repita la misma operación varias veces, podemos usar la iteración. 

Un mecanismo genérico de iteración (también llamado bucle)

Al igual que una sentencia condicional, comienza con una prueba.

Si la prueba se evalúa como Verdadera, el programa ejecuta el cuerpo del bucle una vez y luego vuelve a evaluar la prueba.

Este proceso se repite hasta que la prueba se evalúa como Falsa, tras lo cual el control pasa al código que sigue a la sentencia de iteración.

```
	Code
	  |	
Loop
 __	Test (loop body repeat test, if True)
 |	  | \
 |	True False
 |	  |	   |	
 |	Loop  Out loop
 -- Body   |
	(activ)|
Loop       |  
       ____
       |
     Code

```

Ej:

```
x = 3
ans = 0
num_iterations = 0 
while (num_iterations < x):
	ans = ans + x
	num_iterations = num_iterations + 1
print(f'{x}*{x} = {ans}')

```

Elevar un entero al cuadrado harcodeado. 


El código comienza vinculando la variable x al entero 3. 

Luego, procede a elevar x al cuadrado mediante la suma repetitiva. 


##### Valor asociado a cada variable cada vez que se alcanza la prueba al inicio del bucle.  

```
test	x 	ans 	num_iterations 
1 		3 	0			0
2 		3 	3			1
3 		3   6			2
4 		3 	9			3

```

Simulación manual del programa 


La cuarta vez que se alcanza la prueba, esta se evalúa como Falso y el flujo de control procede a la sentencia print posterior al bucle. 

Para qué valores de x terminará este programa?

Hay tres casos a considerar: x == 0, x > 0 y x < 0.

Supongamos que x == 0. 

El valor inicial de num_iterations también será 0 y el cuerpo del bucle nunca se ejecutará.

Cada vez que se ejecuta el cuerpo del bucle, el valor de num_iterations se incrementa en exactamente 1

Esto significa que, dado que num_iterations comenzó siendo menor que x, después de un número finito de iteraciones del bucle, num_iterations será igual a x.

En este punto, la prueba del bucle se evalúa como Falso y el control procede al código posterior a la sentencia while.


##### Supongamos que x < 0. Ocurre algo muy grave. 

##### El control entrará en el bucle y cada iteración alejará num_iterations de x en lugar de acercarla. Por lo tanto, el programa continuará ejecutando el bucle indefinidamente (o hasta que ocurra algo más grave, por ejemplo, un error de desbordamiento). 


### Ejercicio

Reemplace el comentario en el siguiente código con un bucle while.

```
num_x = int(input('How many times should I print the letter
X? '))
to_print = ''
#concatenate X to to_print num_x times
print(to_print)

```

```
num_x = int(input('How many times should I print the letter
X? '))
to_print = ''
i = 0 
while (i < num_x): 
 to_print = to_print + "x"

print(to_print)

```


#### Características del bucle while: 

##### 1. cantidad de iteraciones que necesitamos para entrar/salir (True/False) del bloque (i/iterations)

##### 2. cantidad de iteraciones que necesitamos repetir en el bucle interno/código repetitivo

##### 3. actualizar vars en bucle interno

```
x = 3
ans = 0
num_iterations = 0 
while (num_iterations < x):
    ans = ans + x
    num_iterations = num_iterations + 1
print(f'{x}*{x} = {ans}')

```

Estado inicial -> i = 0

x = 3
ans = 0
num_iterations = 0
mientras 0 < 3
    0 + 3

i = 1
1 < 3 //True
    3 + 3 //6

i = 2 //True
2 < 3
    6 + 3 //9

i = 3
3 < 3 //False

print(3*3 = 9) //True


A veces es conveniente salir de un bucle sin probar su condición. 

##### Ejecutar una sentencia break termina el bucle que la contiene y transfiere el control al código que sigue inmediatamente al bucle. 

Entero positivo que sea divisible por 11 y 12:

```
#Find a positive integer that is divisible by both 11 and 12
x = 1
while True:
	if x%11 == 0 and x%12 == 0:
		break
	x = x + 1
print(x, 'is divisible by 11 and 12')

```

Out: 132 is divisible by 11 and 12

Si se ejecuta una instrucción break dentro de un bucle anidado (un bucle dentro de otro bucle), la instrucción break terminará el bucle interno.


### Ejercicio

Escriba un programa que solicite al usuario ingresar 10 enteros y luego imprima el número impar más grande ingresado. 

Si no se ingresó ningún número impar, debería imprimir un mensaje indicando que sí.


### For Loops and Range

##### Los bucles while que hemos usado hasta ahora son muy estilizados y a menudo iteran sobre una secuencia de enteros. 

##### Python proporciona un mecanismo de lenguaje, el bucle for, que puede usarse para simplificar programas que contienen este tipo de iteración. 

```
for variable in sequence:
	code block

```

##### La variable que sigue a for se vincula al primer valor de la secuencia y se ejecuta el bloque de código. 

A continuación, se le asigna el segundo valor de la secuencia y el bloque de código se vuelve a ejecutar.

El proceso continúa hasta que se agota la secuencia o se ejecuta una instrucción break dentro del bloque de código. 

```
total = 0
for num in (77, 11, 3):
	total = total + num
print(total)

```

Imprimirá 91. 

##### La expresión (77, 11, 3) es una tupla.

Por ahora, piense en una tupla como una secuencia de valores.


##### La secuencia de valores asociada a la variable se genera comúnmente mediante la función integrada range, que devuelve una serie de enteros

##### La función range toma tres argumentos enteros: inicio, fin y paso. 

Produce la progresión inicio, inicio + paso, inicio + 2*paso, etc.

##### Si paso es positivo, el último elemento es el entero mayor tal que (inicio + i*paso) sea estrictamente menor que fin. 

##### Si paso es negativo, el último elemento es el entero menor tal que (inicio + i*paso) sea mayor que fin.

Por ejemplo:

range(5, 40, 10) genera la secuencia 5, 15, 25, 35, y la expresión

range(40, 5, -10) genera la secuencia 40, 30, 20, 10.


##### Si se omite el primer argumento de range, el valor predeterminado es 0.

##### si se omite el último argumento (el tamaño del paso), el valor predeterminado es 1.

Por ejemplo:

range(0, 3) y range(3) generan la secuencia 0, 1, 2. 

##### Los números de la progresión se generan según sea necesario, por lo que incluso expresiones como range(1000000) consumen poca memoria.
 
```
x = 4
for i in range(x):
	print(i)

```

Out: 
0
1
2
3


Para elevar al cuadrado un entero (corregido para que funcione con números negativos). 
 
Observe que, a diferencia de la implementación del bucle while, el número de iteraciones no se controla mediante una prueba explícita, y la variable de índice num_iterations no se incrementa explícitamente.

```
x = 3
xans = 0 
for num_iterations in range(abs(x)):
	ans = ans + abs(x)
print(f'{x}*{x} = {ans}')

``` 
 
##### No cambia el valor de num_iterations dentro del cuerpo del bucle for. 

##### Esto es típico, pero no necesario, lo que plantea la pregunta de qué sucede si la variable de índice se modifica dentro del bucle for. 

Considere

```
for i in range(2):
	print(i)
	i = 0
	print(i)

```

##### ¿Crees que imprimirá 0, 0, 1, 0 y luego se detendrá? 

¿O crees que imprimirá 0 una y otra vez?

La respuesta es 0, 0, 1, 0. 

Antes de la primera iteración del bucle for, se evalúa la función de rango y el primer valor de la secuencia que genera se asigna a la variable de índice, i. 

Al comienzo de cada iteración subsiguiente del bucle, a i se le asigna el siguiente valor de la secuencia. 

Cuando la secuencia se agota, el bucle termina.

El bucle for anterior es equivalente al código

```
index = 0
last_index = 1
while index <= last_index:
	i = index
	print(i)
	i = 0
	print(i)
	index = index + 1

```

Por cierto, ten en cuenta que el código con el bucle while es considerablemente más complejo que el bucle for. 

El bucle for es un mecanismo lingüístico conveniente.

Ahora bien, ¿qué opinas? ¿Imprime?

```
x = 1
for i in range(x):
	print(i)
	x = 4

```

Solo 0, porque los argumentos de la función de rango en la línea con for se evalúan justo antes de la primera iteración del bucle y no se reevalúan para iteraciones posteriores.

Ahora, veamos con qué frecuencia se evalúan los elementos al anidar bucles.

Considere

```
x = 4
for j in range(x):
	for i in range(x):
		x = 2

```

¿Cuántas veces se ejecuta cada uno de los dos bucles? 

Ya vimos que el rango (x) que controla el bucle externo se evalúa la primera vez que se alcanza y no se reevalúa en cada iteración, por lo que hay cuatro iteraciones del bucle externo. 

Esto implica que el bucle interno se alcanza cuatro veces. 

La primera vez que se alcanza, la variable x = 4, por lo que habrá cuatro iteraciones.

Sin embargo, las siguientes tres veces que se alcanza, x = 2, por lo que habrá dos iteraciones cada vez.

En consecuencia, si se ejecuta

```
x = 3
for j in range(x):
	print('Iteration of outer loop')
	for i in range(x):
		print('Iteration of inner loop')
		x = 2

```

Out: 

Iteration of outer loop
	Iteration of inner loop
	Iteration of inner loop
	Iteration of inner loop
Iteration of outer loop
	Iteration of inner loop
	Iteration of inner loop
Iteration of outer loop
	Iteration of inner loop
	Iteration of inner loop


La instrucción for se puede usar junto con el operador in para iterar fácilmente sobre los caracteres de una cadena. 

Por ejemplo:

```
total = 0
for c in '12345678':
	total = total + int(c)
print(total)

```

Suma los dígitos de la cadena indicada por el literal '12345678' e imprime el total.


### i ancla a inicio
### range(x) ancla a fin
### Cuando termina de chequear el primer bucle, actualiza el valor del otro (+-?)


### Ejercicio

Escribe un programa que imprima la suma de los números primos mayores que 2 y menores que 1000. 

Consejo: probablemente quieras usar un bucle for que sea una prueba de primalidad anidada dentro de un bucle for que itere sobre los enteros impares entre 3 y 999


### Style Matters

##### Los buenos programadores siguen convenciones de codificación diseñadas para que los programas sean fáciles de entender, en lugar de amenos de leer.

Por ejemplo, prescribe el uso de cuatro espacios para las sangrías. 
 
¿Por qué cuatro espacios y no tres o cinco? 
 
No hay una razón particularmente buena. 
 
Pero si todos usan el mismo número de espacios, es más fácil leer (y quizás combinar) código escrito por diferentes personas. 

##### En términos más generales, si todos usan el mismo conjunto de convenciones al escribir Python, los lectores pueden concentrarse en comprender la semántica del código en lugar de perder tiempo asimilando decisiones estilísticas.
 
La convención en Python es usar un guion bajo (_) para separarlas. 
 
De nuevo, esta convención es arbitraria. 
 
Algunos programadores prefieren usar lo que se suele llamar camelCase, por ejemplo, numIterations, argumentando que es más rápido de escribir y ocupa menos espacio.

Hemos cubierto prácticamente todo lo necesario sobre Python para empezar a escribir programas interesantes que trabajen con números y cadenas. 



# Range

##### Internamente va sumando el paso anterior 

##### Progresión inicio, inicio + paso, inicio + 2*paso, etc.

```
for x in range(5, 40, 10): 
	print(x)

```
	
5 (inicio) = 5 || inicio
5+(1*10) = 15 || inicio + paso o inicio + 1*paso
5+(2*10) = 20+5 = 25 || inicio + 2*paso
5+(3*10) = 30+5 = 35 || inicio + 3*paso -limite- 


O

```
for x in range(1, 10, 2):
    print(x)

```

1 (inicio)
1+2 = 3
3+2 = 5
5+2 = 7
7+2 = 9
9+2 = 11 → se detiene porque ya pasó el límite (10)

##### Cuando el proximo valor supera el fin, se detiene

##### Si el paso es negativo, hace restas 


Tupla:
 
```
total = 0
for num in (77, 11, 3):
    print(f'num es: {num}')
    total = total + num
    print(f'total es: {total}')
print(total)

```

1. Estás iterando sobre los valores de la tupla (77, 11, 3).

En la primera vuelta: num = 77

En la segunda vuelta: num = 11

En la tercera vuelta: num = 3

Como la tupla tiene 3 elementos, el cuerpo del bucle se ejecuta 3 veces.


2. Cada vez que se entra al for, num cambia al siguiente valor de la tupla.



Ej: 

```
x = 4
for i in range(x):
    print(i)

```

range(inicio 0, fin x(4), paso 1)

i = 0   # start
i = 0 + 1 = 1
i = 1 + 1 = 2
i = 2 + 1 = 3
i = 3 + 1 = 4 → se detiene porque 4 no está incluido


##### step: Sigue la fórmula de una progresión aritmética:

##### sirve como diferencia fija que se suma en cada paso

```
x_n = start + n × step

```

donde n es el índice de la iteración (empezando en 0). Veamos:

start = 5

step = 10


### start, stop y step

```
x = 4
for i in range(x):
    print(i)

```

Inicio (start):
Como solo pasás un argumento a range(), Python asume que es el límite superior y fija el inicio en 0.
Equivale a start = 0.

Fin (stop):
Es el valor que pasás, en este caso x, así que stop = 4.
Python generará números desde 0 hasta justo antes de 4.

Paso (step):
Si no lo especificás, el valor por defecto es 1.
Equivale a step = 1.


### Evaluación de range

##### Antes de la primera iteración del bucle for, se evalúa la función de rango y el primer valor de la secuencia que genera se asigna a la variable de índice, i. 
Al comienzo de cada iteración subsiguiente del bucle, a i se le asigna el siguiente valor de la secuencia. 
Cuando la secuencia se agota, el bucle termina

##### Los argumentos de la función de rango en la línea con for se evalúan justo antes de la primera iteración del bucle y no se reevalúan para iteraciones posteriores.

```
for i in range(2):
    print(i)
    i = 0
    print(i)

```

El bucle interno obtiene el siguiente valor de la secuencia en cada iteración, independientemente de lo que hagas con i dentro del cuerpo

```
for i in range(2):      # range(2) produce la secuencia [0, 1]
    print(i)            # ① imprime el valor “oficial” de la iteración
    i = 0               # ② reasignás la variable local i a 0
    print(i)            # ③ imprime esa nueva i = 0

```

1. Primera iteración

El iterador de range(2) da i = 0.

print(i) → 0

Luego hacés i = 0 (ya era 0, pero podrías poner otro valor).

print(i) → 0


2. Segunda iteración

El bucle vuelve a pedir el siguiente valor al iterador de range.

Ese valor es 1, y Python lo asigna a i, sobreescribiendo lo que hubieras puesto antes.

print(i) → 1

Luego hacés i = 0 de nuevo.

print(i) → 0



Ej: 

```
x = 1
for i in range(x):
    print(i)
    x = 4

```

x = 1
range(0, 1, 1)
print(i) -> 0 (1 iter, etc) y unica también

x = 4 no tiene efecto, aunque reasignemos 4 a x 


1. Evaluación de range(x)
En el momento en que se inicia el bucle, Python evalúa range(x) con el valor actual de x, que es 1.
Por tanto, crea internamente un objeto equivalente a range(0, 1, 1), es decir, una secuencia de un solo elemento: `[0]`.

2. Inicio de la iteración
El bucle pide el primer (y único) elemento de ese range: le asigna i = 0.
Imprime 0.

3. Dentro del cuerpo del bucle
Ejecuta x = 4. Esto cambia la variable x en el entorno, pero no modifica el objeto range que ya se creó.
Hasta aquí, x ya vale 4, pero el bucle no vuelve a reevaluar range(x).

4. Fin de la iteración
Al terminar el cuerpo, el bucle intenta pedir el siguiente elemento de range.
Como ese range solo tenía un elemento, no hay más valores, y el bucle termina.

5. Resultado final
Solo se imprimió 0.
Aunque x cambió a 4, eso no se refleja en la cantidad de iteraciones, porque el rango ya estaba “congelado” al inicio.
    
    
Ej:

```
x = 4
for j in range(x):
    for i in range(x):
        x = 2

``` 

j = 0 
range(0, 4, 1) genera objeto: `[0, 1, 2, 3]`
i = 0 
range(0, 4, 1) genera objeto: `[0, 1, 2, 3]`


##### El outer usa range(4) fijo: j toma 0, 1, 2 y 3.

##### El inner crea su propio range(x) en cada vuelta de j, con el valor actual de x en ese momento.

##### Cambiar x dentro del inner no altera el iterador que ya se creó; solo afectará a la próxima evaluación de range(x).


```
x = 4
for j in range(x):          # ⬅️ ① Se evalúa range(4) → [0,1,2,3]
    for i in range(x):      # ⬅️ ② Entra en el inner: evalúa range(x) con x tal como esté ahora
        x = 2               # ⬅️ ③ Asigna x = 2 en la primera pasada y después sigue, pero la secuencia ya está fijada

```

| Paso | `j` | Valor de `x` al entrar al inner | `range(x)` inner        | Iteraciones `i` en inner | `x` al salir del inner |
| ---- | --- | ------------------------------- | ----------------------- | ------------------------ | ---------------------- |
| 1    | 0   | 4                               | range(0,4) → \[0,1,2,3] | i=0 → x=2; i=1; i=2; i=3 | 2                      |
| 2    | 1   | 2                               | range(0,2) → \[0,1]     | i=0 → x=2; i=1           | 2                      |
| 3    | 2   | 2                               | range(0,2) → \[0,1]     | i=0 → x=2; i=1           | 2                      |
| 4    | 3   | 2                               | range(0,2) → \[0,1]     | i=0 → x=2; i=1           | 2                      |


Ej: 

```
x = 3
for j in range(x):
    print('Iteration of outer loop')
    for i in range(x):
        print('Iteration of inner loop')
        x = 2
```

| Paso | Valor de `j` | Estado de `x` al iniciar la iteración externa | `range(x)` del bucle interno       | Salida producida                                                       | Estado final de `x` |
| ---- | ------------ | --------------------------------------------- | ---------------------------------- | ---------------------------------------------------------------------- | ------------------- |
| 1    | 0            | 3                                             | Se evalúa `range(3)` → `[0, 1, 2]` | `Iteration of outer loop` <br> luego 3 veces `Iteration of inner loop` | 2                   |
| 2    | 1            | 2                                             | Se evalúa `range(2)` → `[0, 1]`    | `Iteration of outer loop` <br> luego 2 veces `Iteration of inner loop` | 2                   |
| 3    | 2            | 2                                             | Se evalúa `range(2)` → `[0, 1]`    | `Iteration of outer loop` <br> luego 2 veces `Iteration of inner loop` | 2                   |


##### Bucle externo ejecuta 3 veces sus instrucciones
##### Cada iteración tiene que ejecutar una cadena y un bucle interno. 
##### El bucle interno va a ejecutar sus instrucciones 3-1 0 3-j veces

Iteration of outer loop
	Iteration of inner loop
	Iteration of inner loop
	Iteration of inner loop
Iteration of outer loop
	Iteration of inner loop
	Iteration of inner loop
Iteration of outer loop
	Iteration of inner loop
	Iteration of inner loop

1. externo

```
x = 3
for j in range(x):  # aquí Python evalúa range(3) → [0,1,2] UNA sola vez
    …

```

Aunque dentro cambies x, el bucle externo ya tiene fijada la lista de valores `[0,1,2]`.

Por eso imprime siempre tres “Iteration of outer loop”, independientemente de lo que pase con x adentro.


2. interno 

```
for i in range(x):  # en cada iteración del outer, vuelve a evaluar range(x)
    x = 2

```

Al entrar al for i in … Python toma el valor actual de x y crea ahí mismo el nuevo objeto range.

Dentro del cuerpo haces x = 2, pero el range ya está creado y sigue su curso con la longitud que le tocó.

Sólo cuando vuelvas a entrar al for i in range(x) en la siguiente iteración de j, se usará ese x = 2 recién asignado para crear un nuevo range(2).


Un for evalúa su range(...) justo antes de empezar ese bucle y no lo vuelve a cambiar a mitad de iteraciones.

##### Cambiar la variable (x = 2) dentro solo afecta a las siguientes evaluaciones de range(x), no a la que ya está en marcha.

##### 1. Primera ejecución: imprime outer y tres inner
##### 2. Segunda: vuelve a evaluar el valor de x
##### 3. ahora es 2, imprime outer y el interno evalua x que es 2
##### 4. Ejecuta 2 veces las instrucciones de i, etc. 
##### 5. por eso imprime dos veces el texto de inner las ultimas dos vueltas que quedan?

```
h = 3
for j in range(h):
    print('Iteration of outer loop')
    for i in range(h):
        print('Iteration of inner loop')
        h = 4
```

Out:

Iteration of outer loop:
  Iteration of inner loop
  Iteration of inner loop
  Iteration of inner loop
  Iteration of inner loop




Ej:

```
tot = 0
for c in '12345678':
    tot = tot + int(c)
print(tot)

```

| Paso | `c` (carácter)     | `int(c)` | `total` antes | `total = total + int(c)` → `total` después | Salida en consola |
| ---- | ------------------ | -------- | ------------- | ------------------------------------------ | ----------------- |
| 1    | `'1'`              | 1        | 0             | 0 + 1 = 1                                  | *(ninguna aún)*   |
| 2    | `'2'`              | 2        | 1             | 1 + 2 = 3                                  | *(ninguna aún)*   |
| 3    | `'3'`              | 3        | 3             | 3 + 3 = 6                                  | *(ninguna aún)*   |
| 4    | `'4'`              | 4        | 6             | 6 + 4 = 10                                 | *(ninguna aún)*   |
| 5    | `'5'`              | 5        | 10            | 10 + 5 = 15                                | *(ninguna aún)*   |
| 6    | `'6'`              | 6        | 15            | 15 + 6 = 21                                | *(ninguna aún)*   |
| 7    | `'7'`              | 7        | 21            | 21 + 7 = 28                                | *(ninguna aún)*   |
| 8    | `'8'`              | 8        | 28            | 28 + 8 = 36                                | *(ninguna aún)*   |
| —    | **Fin del bucle**  |          |               |                                            |                   |
| —    | **`print(total)`** |          | `total = 36`  |                                            | **36**            |



inicializa total = 0.
El bucle for c in '12345678': recorre cada carácter de la cadena.

En cada iteración:
Convertimos el carácter c a entero con int(c).
Sumamos ese valor a total.

Al salir del bucle, total vale 36.
Finalmente, print(total) muestra 36 en la consola


# Objetos, asignación e inmutabilidad

```
pi = 3
radio = 11
area = pi * (radio**2)
radio = 14

```

Las variables son nombres (etiquetas) que apuntan a objetos en memoria, y los objetos numéricos (como los int) son inmutables

Un objeto 3 (referenciado por pi).

Un objeto 363 (referenciado por area).

##### Un objeto 11 —ya sin nombres apuntándolo, listo para recogerse por el recolector si no hay más referencias—.

Un objeto 14 (referenciado por radio).


1. Asignar (radio = 11) crea o reutiliza un objeto y liga el nombre radio a ese objeto.

2. Reasignar (radio = 14) no “cambia” el objeto anterior, sino que desvincula el nombre y lo liga a un nuevo objeto.

3. Los objetos inmutables (enteros, tuplas, cadenas…) permanecen intactos: no hay “espacio reservado” que cambie su valor, sólo se re-ligan nombres



# Planteo 

precond: requisitos
postcond: resultado
validaciones:
tipo, rango, formato, longitud, estructura y dominio (lógica)

Primero, escribí en papel o en comentarios:
¿Qué hace el programa?
¿Qué entradas tiene?
¿Qué funciones necesitás?
¿Qué estructuras de datos convienen?

Piensa siempre en:
1. ¿Qué pasa si...? -> (usa if)
2. ¿Qué hago para cada...? -> (usa for)
3. ¿Hasta cuándo sigo...? -> (usa while)
4. ¿Qué pasa si algo falla...? -> (usa try)
5. ¿Cómo manejo estructuras externas...? -> (usa with)
6. ¿Cómo encapsulo esta lógica...? -> (usa funciones)

Preguntas: Por qué usaría tal o cual cosa, dar los motivos y resultados esperados. 

Uso de sintaxis o funciones avanzadas (lambda, map, ls):
lambda (f linea) 
map(transf, f y iter obj)
ls nueva lista a partir de otra (expre/cambio expres/cond/accion; for expres cond) -> true

Combinación de control (Condicionales (if (elif, else), in, range, len), bucles (for, while, ls) y manejo de errores (try, except, finally, err).)
Combinación de esstructuras (list, dict, tuple, set)
Características del control y estructuras necesarias. 
Express, cond, func en var

Reducir las posibilidades:
Enfocar el problema, encontrar los elem claves
Retorno de los objetos 
Del final al inicio


1. Entender el problema matemáticamente
    ¿Qué define un número primo?
    ¿Cuáles son sus propiedades?

2. Pensar en estructuras de datos eficientes
    ¿Necesito un arreglo, un diccionario, un conjunto?
    ¿Qué tipo de acceso necesito (índice, búsqueda, etc.)?

3. Aplicar patrones conocidos
    ¿Esto se parece a un filtrado?
    ¿Esto es un marcado de elementos?

4. Refinar con herramientas de Python
    ¿Puedo usar comprensión de listas?
    ¿Puedo usar enumerate, zip, slicing, etc.?
    
5. Probar, refactorizar y comparar
    ¿Puedo hacerlo más claro?
    ¿Es más rápido, más legible?



## Ejercicio

Programa que imprima la suma de los números primos mayores que 2 y menores que 100. 

Sugerencia: probablemente quieras usar un bucle for que sea una prueba de primalidad anidada dentro de un bucle for que itere sobre los enteros impares entre 3 y 999.


Planteo:

print suma num primos mayores 2 y menores que 100

Descomposición:

num prim:  
num entero mayor 1 solo con dos divisores positivos:
1 y si mismo 
No puede ser dividido de manera exacta por otro 
entero que no sea 1 y si mismo

verificar si solo tiene dos divisores: 1 y el propio número

Ej: 2 es primo porque solo es divisible por 1 y
 
mayores 2 y menores 100 


### Primes 2-100

##### Verificamos que no sea divisible por ningún número entre 2 y n - 1 (o incluso más eficientemente, hasta √n).

Usamos un bucle for divisor in range(2, sqrt(n) + 1) para verificar si n tiene divisores distintos de 1 y de sí mismo.

Si encontramos un divisor, marcamos is_prime = False y salimos del bucle.

Al final, si is_prime sigue siendo True, lo imprimimos.

```
def print_primes_between_2_and_100():
    for n in range(2, 100):
        is_prime = True
        for divisor in range(2, int(n ** 0.5) + 1):
            if n % divisor == 0:
                is_prime = False
                break
        if is_prime:
            print(n)

```

##### Verificamos: es primo si no tiene divisores (enteros positivos) excepto 1 y sí mismo. 


1. for n in range(2, 100):
genera los números 2, 3, 4, ..., 99

La variable n tomará esos valores uno por uno.


2. Bandera para saber si n es primo

```
is_prime = True

```

Se asume al comienzo que n es primo, y si se encuentra un divisor, se marcará como falso.


3. Bucle interno: intenta dividir n por números entre 2 y √n

Porque si n tiene un divisor mayor que √n, ya habrá tenido otro menor.

Así reducimos trabajo sin perder exactitud.

Por ejemplo:

Si n = 7, √7 ≈ 2.64, se convierte en int(2.64) + 1 = 3

Entonces range(2, 3) → solo prueba el divisor 2.


4. Verificamos si n es divisible

Si n es divisible por cualquier divisor, no es primo.

Marcamos is_prime = False y rompemos el bucle: no hace falta seguir probando.


5. Si es primo, lo imprimimos

```
if is_prime:
    print(n)

```

Si ningún divisor funcionó, is_prime sigue siendo True, así que el número se imprime.


6. Ej: n = 7

is_prime = True

divisor in range(2, 3) → solo se prueba divisor = 2

7 % 2 = 1 → no divisible → is_prime sigue True

Se imprime: 7


### Sum primes 2-100

```
def sum_prime_two_hundred():
    total = 0
    for n in range(2, 100):
        is_prime = True
        for divisor in range(2, int(n ** 0.5) + 1):
            if n % divisor == 0:
                is_prime = False
                break
        if is_prime:
            print(n)         # opcional: muestra cada número primo
            total += n
    return total

```


### Eficiencia 

```
for n in range(2, N):
    for divisor in range(2, int(n ** 0.5) + 1):
        if n % divisor == 0:
            # no es primo

```

El bucle externo recorre N - 2 números (de 2 a N-1).

Para cada número n, el bucle interno va desde 2 hasta √n.

En el peor caso (cuando n es primo y se revisan todos sus divisores), hacés O(√n) operaciones por número.

Complejidad aprox: 

```
n
∑	O(√n)≈O(N⋅√N)
n=2
```

N = 100

Esto implica aproximadamente ∑n=2, 100n≈666 operaciones.

Muy rápido en práctica. Ejecuta en milisegundos o menos.


N = 10^6 (1 millón)

El rendimiento ya no es trivial: se convierte en aproximadamente 10^6⋅10^3=10^9 operaciones.

Aún ejecutable en una computadora moderna, pero lento si lo hacés frecuentemente.
    
    

### Criba de Eratóstenes: eficiente

Mucho más eficiente si querés encontrar todos los primos hasta N:

Tiempo: O(N log log N)

Espacio: O(N)

```
def sieve_primes_up_to(N):
    is_prime = [True] * (N + 1)
    is_prime[0:2] = [False, False]

    for i in range(2, int(N ** 0.5) + 1):
        if is_prime[i]:
            for j in range(i * i, N + 1, i):
                is_prime[j] = False

    primes = [i for i, prime in enumerate(is_prime) if prime]
    return primes

```

##### Calcula y devuelve una lista de todos los números primos entre 2 y N, usando una tabla de booleanos.

1. Crear una lista de booleanos

```
is_prime = [True] * (N + 1)

```

Crea una lista de longitud N + 1, donde cada posición representa un número:

`is_prime[0]` representa el número 0

`is_prime[1]` representa el número 1

...

`is_prime[N]` representa el número N


Inicialmente todos los valores son True, asumiendo que todos son primos (ya veremos que no).


2. Marcar 0 y 1 como no primos

```
is_prime[0:2] = [False, False]

```

Sabemos que 0 y 1 no son primos, así que los marcamos como False.


3. Bucle principal: eliminar múltiplos

```
for i in range(2, int(N ** 0.5) + 1):

```
Iteramos desde 2 hasta √N.

¿Por qué hasta √N?

Porque si un número n tiene un divisor mayor que √n, también tiene uno menor.

Así ahorramos trabajo sin omitir ningún compuesto.


4. Si i es primo, tachar sus múltiplos

```
if is_prime[i]:
    for j in range(i * i, N + 1, i):
        is_prime[j] = False

```

Si i aún está marcado como primo (True), entonces tachamos sus múltiplos.

Empezamos desde i * i:
Porque los múltiplos menores ya fueron tachados por primos anteriores.

Vamos de i * i a N, avanzando de i en i

Ejemplo: si i = 3, tachamos 9, 12, 15, 18, ....


5. Construir la lista final de primos

```
primes = [i for i, prime in enumerate(is_prime) if prime]

```

Recorremos la lista is_prime, y por cada True, guardamos el índice i, que representa un número primo.


6. Devolver la lista de primos

```
return primes

``` 


7. Ej: sieve_primes_up_to(10)

is_prime final:

```
[F, F, T, T, F, T, F, T, F, F, F]
 0  1  2  3  4  5  6  7  8  9 10

```

Devuelve: `[2, 3, 5, 7]`

Complejidad
Tiempo: O(N log log N)
Espacio: O(N)

Muy eficiente para N grandes (hasta decenas o centenas de millones)


### Fuerza bruta 

```
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

```

O(n) por número

Muy lento: revisa todos los divisores posibles.

Práctico sólo hasta n ≈ 10^3.


### Fuerza bruta optimizada: hasta √n

```
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

```


### Usos en eficiencia

1. Eratóstenes: 

Imprimir todos los primos hasta 100, 1000, 1 millón


2. Verificar primo: Fuerza bruta optimizada


3. Criba segmentada o Miller-Rabin: Rendimiento extremo con muy grandes



# Diseñar algoritmos

## 1. Fundamentos de lógica y estructuras básicas

Comprender estructuras como listas, tuplas, diccionarios.

Dominar for, if, range, enumerate, etc.

Empezar a expresar ideas con claridad


Ej: 

Imprimir números pares/impares del 1 al 100.

Contar vocales en una cadena.

Crear un diccionario de frecuencia de caracteres.


## 2. Pensamiento algorítmico básico

##### Aprender sobre divisores, primalidad, sumas acumuladas.

Empezar a pensar en la complejidad (cuántas operaciones hago).

Usar bucles anidados y condiciones más precisas.


Ej: 

Verificar si un número es primo.

Calcular suma de primos hasta n.

Detectar números perfectos.

Generar lista de cuadrados sin bucles (comprensión de listas).


## 3. Algoritmos clásicos y eficiencia

Dominar patrones como marcado, conteo, búsqueda.

Implementar algoritmos clásicos como Criba, Fibonacci, conteo de dígitos.

Analizar eficiencia: O(n), O(n²), O(log n), etc.


Ej:

Criba de Eratóstenes

Búsqueda binaria

Conteo de ocurrencias con diccionarios

Simulación de procesos paso a paso (como una máquina de estados simple)


4. Abstracción, claridad y estilo profesional

Escribir funciones reutilizables y limpias.

Documentar con docstrings.

Usar nombres claros y estructuras declarativas.

Comprender refactorización


Ej: 

Refactorizar funciones duplicadas.

Documentar tus propias funciones con """docstrings""".

Transformar scripts en funciones puras.

Escribir tests simples (con assert o pytest).


## 5. Entrenamiento cruzado con desafíos

Aplicar todo lo anterior en problemas nuevos.

Resolver desafíos desde varios ángulos.

Medir progreso en claridad, tiempo y estilo.

Plataformas de ejercicios 
