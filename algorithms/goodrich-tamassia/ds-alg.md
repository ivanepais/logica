# Estructuras de Datos y Algoritmos

Para promover el desarrollo de software robusto y reutilizable, hemos tratado de adoptar un punto de vista orientado a objetos coherente a lo largo de este texto. Una de las ideas principales del enfoque orientado a objetos es que los datos deben presentarse encapsulados con los métodos que acceden a ellos y los modifican. Es decir, en lugar de
ver simplemente los datos como una colección de bytes y direcciones, pensamos en los objetos de datos como instancias de un tipo de datos abstracto (ADT), que incluye un repertorio de
métodos para realizar operaciones en objetos de datos de este tipo.

Luego enfatizamos que puede haber varias estrategias de implementación diferentes para un ADT en particular, y exploramos los pros y contras relativos de estas opciones. Proporcionamos implementaciones completas de Python para casi todas las estructuras de datos y algoritmos analizados,
y presentamos patrones de diseño orientados a objetos importantes como medios para organizar esas implementaciones en componentes reutilizables.

Los resultados deseados para los lectores de nuestro libro incluyen que:
• Tienen conocimiento de las abstracciones más comunes para recopilaciones de datos
(por ejemplo, pilas, colas, listas, árboles, mapas).
• Entienden las estrategias algorítmicas para producir realizaciones eficientes de
estructuras de datos comunes.
• Pueden analizar el rendimiento algorítmico, tanto teórica como experimentalmente, y reconocer las compensaciones comunes entre estrategias en competencia.
• ​​Pueden usar sabiamente las estructuras de datos y los algoritmos existentes que se encuentran en las bibliotecas de lenguajes de programación modernos.
• Tienen experiencia trabajando con implementaciones concretas para la mayoría de las estructuras de datos y algoritmos fundamentales.
• Pueden aplicar estructuras de datos y algoritmos para resolver problemas complejos.


# Cap1: Python Overview

## Tntérprete de Python

Python es formalmente un lenguaje interpretado. Los comandos se ejecutan a través de un
programa conocido como intérprete de Python. El intérprete recibe un comando, lo evalúa y reporta el resultado del comando. Si bien el intérprete puede usarse de manera interactiva (especialmente al depurar), un programador
normalmente define una serie de comandos por adelantado y los guarda en un archivo de texto sin formato conocido como código fuente o secuencia de comandos. En Python, el código fuente se almacena convencionalmente en un archivo cuyo nombre tiene el sufijo .py (por ejemplo, demo.py).

Python se puede iniciar escribiendo
python desde la línea de comandos. De manera predeterminada, el intérprete se inicia en modo interactivo con un espacio de trabajo limpio. Los comandos de un script predefinido guardado en un
archivo (por ejemplo, demo.py) se ejecutan invocando al intérprete con el nombre del archivo como
argumento (por ejemplo, python demo.py), o utilizando un indicador -i adicional para
ejecutar un script y luego ingresar al modo interactivo (por ejemplo, python -i demo.py).

Muchos entornos de desarrollo integrados (IDE) brindan plataformas de desarrollo de software más ricas para Python, incluido uno llamado IDLE que se incluye
con la distribución estándar de Python. IDLE proporciona un editor de texto integrado con soporte para mostrar y editar código Python, y un depurador básico, lo que permite la ejecución paso a paso de un programa mientras se examinan los valores de las variables clave.


## Objetos en Python

Python es un lenguaje orientado a objetos y las clases forman la base de todos los tipos de datos.
En esta sección, describimos aspectos clave del modelo de objetos de Python y presentamos las clases integradas de Python, como la clase int para números enteros, la clase float
para valores de punto flotante y la clase str para cadenas de caracteres. El capítulo 2 se centra en una presentación más completa de la orientación a objetos.


### Identificadores, objetos y la declaración de asignación

El comando más importante de todos los comandos de Python es una declaración de asignación, como por ejemplo

temperature = 98.6

Este comando establece la temperatura como un identificador (también conocido como nombre)
y luego lo asocia con el objeto expresado en el lado derecho del signo igual, en este caso un objeto de punto flotante con valor 98.6. Representamos el resultado
de esta asignación en la Figura 1.1.

Para los lectores familiarizados con otros lenguajes de programación, la semántica de un identificador de Python es más similar a una variable de referencia en Java o una variable de puntero en C++. Cada identificador está asociado implícitamente con la dirección de memoria del objeto al que hace referencia. Un identificador de Python puede asignarse a un objeto especial llamado None, que cumple una función similar a una referencia nula en Java o C++. A diferencia de Java y C++, Python es un lenguaje de tipado dinámico, ya que no hay una declaración previa que asocie un identificador con un tipo de datos en particular. Un identificador puede asociarse con cualquier tipo de objeto y luego puede reasignarse a otro objeto del mismo tipo (o de uno diferente). Aunque un identificador no tiene un tipo declarado, el objeto al que hace referencia tiene un tipo definido. En nuestro primer ejemplo,
los caracteres 98.6 se reconocen como un literal de punto flotante y, por lo tanto, el identificador
temperatura se asocia con una instancia de la clase flotante que tiene ese valor.
Un programador puede establecer un alias asignando un segundo identificador a un
objeto existente. Continuando con nuestro ejemplo anterior, la Figura 1.2 muestra el resultado
de una asignación posterior, original = temperatura.


### Instancia


El proceso de crear una nueva instancia de una clase se conoce como instanciación. En
general, la sintaxis para instanciar un objeto es invocar el constructor de una clase.
Por ejemplo, si hubiera una clase llamada Widget, podríamos crear una instancia de
esa clase usando una sintaxis como w = Widget(), asumiendo que el constructor no
requiere ningún parámetro. Si el constructor requiere parámetros, podríamos
usar una sintaxis como Widget(a, b, c) para construir una nueva instancia.

Muchas de las clases integradas de Python (discutidas en la Sección 1.2.3) admiten lo que se
conoce como una forma literal para designar nuevas instancias. Por ejemplo, el comando
temperature = 98.6 da como resultado la creación de una nueva instancia de la clase float; el
término 98.6 en esa expresión es una forma literal. 

Desde la perspectiva de un programador, otra forma de crear indirectamente una nueva
instancia de una clase es llamar a una función que crea y devuelve dicha instancia. Por
ejemplo, Python tiene una función incorporada llamada sorted (ver Sección 1.5.2) que toma
una secuencia de elementos comparables como parámetro y devuelve una nueva instancia de
la clase de lista que contiene esos elementos en orden ordenado.


### Métodos de llamada


Python admite funciones tradicionales (consulte la Sección 1.5) que se invocan con una sintaxis como sorted(data), en cuyo caso data es un parámetro enviado a la función.
Las clases de Python también pueden definir uno o más métodos (también conocidos como funciones
miembro), que se invocan en una instancia específica de una clase utilizando el operador punto («.»).
una clase utilizando el operador punto («.»).

Por ejemplo, la clase list de Python tiene un método llamado sort que se puede
invocar con una sintaxis como data.sort(). Este método en particular reorganiza el
contenido de la lista para que esté ordenado.

La expresión a la izquierda del punto identifica el objeto sobre el que se invoca el método. A menudo, será un identificador (por ejemplo, data), pero podemos utilizar el operador punto para invocar un método sobre el resultado inmediato de alguna otra operación. Por
ejemplo, si response identifica una instancia de cadena (hablaremos de cadenas más adelante en esta
sección), la sintaxis response.lower()).startswith( y ) primero evalúa la llamada al método, response.lower(), que a su vez devuelve una nueva instancia de cadena, y luego se llama al método
startswith( y ) en esa cadena intermedia.

Algunos métodos devuelven información sobre el estado de un objeto, pero no lo cambian. Estos se conocen como métodos de acceso. Otros métodos, como el método sort
de la clase list, sí cambian el estado de un objeto. Estos métodos se conocen como métodos de
actualización o mutadores.


## Python’s Built-In Classes

Una clase
es inmutable si cada objeto de esa clase tiene un valor fijo al momento de la instanciación que
no puede modificarse posteriormente. Por ejemplo, la clase float es inmutable. Una vez que se ha creado una instancia, su valor no puede modificarse (aunque un identificador
que hace referencia a ese objeto puede reasignarse a un valor diferente).

Class
bool		inmutable
int 		inmutable
float 		inmutable
list 
tuple		inmutable
str			inmutable
set 
frosenset	inmutable
dict	


### La clase bool 

Se utiliza para manipular valores lógicos (booleanos), y las únicas dos
instancias de esa clase se expresan como los literales True y False. El constructor predeterminado,
bool(), devuelve False, pero no hay razón para utilizar esa sintaxis en lugar de la forma literal más directa. Python permite la creación de un valor booleano
a partir de un tipo no booleano utilizando la sintaxis bool(foo) para el valor foo. La interpretación
depende del tipo del parámetro. Los números se evalúan como False si son cero y como True si no son cero. Las secuencias y otros tipos de contenedores, como cadenas y listas,
se evalúan como False si están vacíos y como True si no están vacíos. Una aplicación importante de esta
interpretación es el uso de un valor no booleano como condición en una estructura de control.


### La clase float

La clase float es el único tipo de punto flotante en Python, que utiliza una representación de precisión
fija. Su precisión es más parecida a la de un doble en Java o C++, en lugar de
al tipo float de esos lenguajes. Ya hemos analizado una forma literal típica, 98.6.
Observamos que el equivalente de punto flotante de un número entero se puede expresar
directamente como 2.0. Técnicamente, el cero final es opcional, por lo que algunos programadores
pueden utilizar la expresión 2. para designar este literal de punto flotante. Otra forma
de literal para valores de punto flotante utiliza notación científica. Por ejemplo, el literal
6.022e23 representa el valor matemático 6.022 × 1023 .
La forma constructora de float() devuelve 0.0. Cuando se le da un parámetro, el constructor intenta devolver el valor de punto flotante equivalente. Por ejemplo, la llamada float(2) devuelve el valor de punto flotante 2.0. Si el parámetro del constructor es una cadena, como en float( 3.14 ), intenta analizar esa cadena como un valor de punto flotante, lo que genera un ValueError como excepción.


### Tipos de secuencia: las clases list, tuple y str
Las clases list, tuple y str son tipos de secuencia en Python, que representan una colección de valores en los que el orden es significativo. La clase list es la más general, y representa una secuencia de objetos arbitrarios (similar a una “matriz” en otros lenguajes).
La ​​clase tuple es una versión inmutable de la clase list, que se beneficia de una representación interna simplificada. La clase str está especialmente diseñada para representar una secuencia inmutable de caracteres de texto. Observamos que Python no tiene una clase
separada para caracteres; son solo cadenas con una longitud de uno.


### Expresiones, operadores y precedencia

En la sección anterior, demostramos cómo se pueden usar los nombres para identificar objetos existentes y cómo se pueden usar literales y constructores para crear instancias de clases integradas. Los valores existentes se pueden combinar en expresiones sintácticas más grandes
usando una variedad de símbolos especiales y palabras clave conocidas como operadores. La semántica de un operador depende del tipo de sus operandos. Por ejemplo, cuando a
y b son números, la sintaxis a + b indica adición, mientras que si a y b son cadenas,
el operador indica concatenación. En esta sección, describimos los operadores de Python en varios contextos de los tipos integrados.
Continuamos, en la Sección 1.3.1, analizando expresiones compuestas, como
a + b c, que se basan en la evaluación de dos o más operaciones. El orden
en el que se evalúan las operaciones de una expresión compuesta puede afectar el valor general de la expresión. Por esta razón, Python define un orden específico de precedencia para evaluar operadores, y permite a un programador anular este orden utilizando paréntesis explícitos para agrupar subexpresiones.

Logica: 

not unary negation
and conditional and
or conditional or

Igualdad: 

is
same identity
is not different identity
==
equivalent
!=
not equivalent


Comparación:

< less than
<= less than or equal to
> greater than
>= greater than or equal to


Arítmetica:

+ addition
− subtraction
multiplication
/ true division
// integer division
% the modulo operator


Bitwise:

∼ bitwise complement (preﬁx unary operator)
& bitwise and
|
bitwise or
ˆ
bitwise exclusive-or
<< shift bits left, ﬁlling in with zeros
>> shift bits right, ﬁlling in with sign bit


### Operadores de secuencia

Cada uno de los tipos de secuencia integrados de Python (str, tuple y list) admite las siguientes

sintaxis de operadores:
s[j]
elemento en el índice j

s[start:stop]
segmento que incluye los índices [start,stop)

s[start:stop:step] segmento que incluye los índices start, start + step,
start + 2 step, . . . , hasta pero sin igualar ni detener

s+t
concatenación de secuencias

k*s 
abreviatura de s + s + s + ... (k veces)

val in s
verificación de contención

val not in s
verificación de no contención

Python se basa en la indexación cero de secuencias, por lo que una secuencia de longitud n tiene elementos indexados de 0 a n − 1 inclusive. Python también admite el uso de índices negativos, que denotan una distancia desde el final de la secuencia; El índice −1 indica
el último elemento, el índice −2 el penúltimo, y así sucesivamente. Python utiliza un método de segmentación


### Operadores de asignación extendida

Python admite un operador de asignación extendida para la mayoría de los operadores binarios, por
ejemplo, permitiendo una sintaxis como count += 5. De manera predeterminada, esta es una abreviatura de la más detallada count = count + 5. Para un tipo inmutable, como un número o una cadena, no se debe suponer que esta sintaxis cambia el valor del objeto
existente, sino que reasignará el identificador a un valor recién construido.
(Véase la discusión de la Figura 1.3). Sin embargo, es posible que un tipo redefina dicha semántica para mutar el objeto, como lo hace la clase de lista para el operador +=.

```
alpha = [1, 2, 3]
beta = alpha
beta += [4, 5]
beta = beta + [6, 7]
print(alpha)
# un alias para alpha
# extiende la lista original con dos elementos más
# reasigna beta a una nueva lista [1, 2, 3, 4, 5, 6, 7]
# será [1, 2, 3, 4, 5]
Este ejemplo demuestra la sutil diferencia entre la semántica de la lista para la
sintaxis beta += foo versus beta = beta + foo.

````


## Control Flow/Control de flujo 

En esta sección, revisamos las estructuras de control más fundamentales de Python: declaraciones condicionales y bucles. Todas las estructuras de control tienen en común la sintaxis utilizada
en Python para definir bloques de código. El carácter de dos puntos se utiliza para delimitar el
comienzo de un bloque de código que actúa como cuerpo de una estructura de control. Si el cuerpo
se puede expresar como una sola declaración ejecutable, técnicamente se puede colocar en la misma
línea, a la derecha de los dos puntos. Sin embargo, un cuerpo se escribe más típicamente como un
bloque sangrado que comienza en la línea siguiente a los dos puntos. Python se basa en el nivel de sangría para designar la extensión de ese bloque de código, o cualquier bloque de código
anidado dentro de él. Se aplicarán los mismos principios al designar el cuerpo de una función (ver Sección 1.5) y el cuerpo de una clase (ver Sección 2.3).


## Loops/Bucles

Python ofrece dos tipos distintos de bucles. Un bucle while permite la repetición general basada en la comprobación repetida de una condición booleana. Un bucle for proporciona una iteración conveniente de valores de una serie definida (como caracteres de una cadena, elementos de una lista o números dentro de un rango determinado). Analizamos ambas formas en esta sección.


## Functions

En esta sección, exploramos la creación y el uso de funciones en Python. Como hicimos en la Sección 1.2.2, hacemos una distinción entre funciones y métodos. Usamos el término general función para describir una función tradicional sin estado que se invoca sin el contexto de una clase particular o una instancia de esa clase, como sorted(data). Usamos el término más específico método para describir una función miembro que se invoca sobre un objeto específico utilizando una sintaxis de paso de mensajes orientada a objetos, como data.sort(). En esta sección, solo consideramos funciones puras; los métodos se explorarán con principios orientados a objetos más generales en el Capítulo 2.
Comenzamos con un ejemplo para demostrar la sintaxis para definir funciones en Python. La siguiente función cuenta la cantidad de ocurrencias de un valor objetivo dado dentro de cualquier forma de conjunto de datos iterable.

```
def count(data, target):
	n=0
	for item in data:
		if item == target:  #found a match
		n += 1
	return n

```

La primera línea, que comienza con la palabra clave def, sirve como firma de la función.
Esto establece un nuevo identificador como el nombre de la función (count, en este ejemplo), y establece la cantidad de parámetros que espera, así como los nombres que identifican esos parámetros (data y target, en este ejemplo). A diferencia de Java y C++, Python es un lenguaje de tipado dinámico y, por lo tanto, una firma de Python
no designa los tipos de esos parámetros ni el tipo (si lo hay) de un valor de retorno. Esas expectativas deben indicarse en la documentación de la función (consulte la
Sección 2.2.3) y pueden aplicarse dentro del cuerpo de la función, pero el uso indebido de una función solo se detectará en tiempo de ejecución.

El resto de la definición de la función se conoce como el cuerpo de la función. Como es el caso con las estructuras de control en Python, el cuerpo de una función se expresa
normalmente como un bloque de código sangrado. Cada vez que se llama a una función,
Python crea un registro de activación dedicado que almacena información relevante para la
llamada actual. Este registro de activación incluye lo que se conoce como un espacio de nombres (consulte la Sección 1.10) para administrar todos los identificadores que tienen un alcance local dentro de la llamada actual.
El espacio de nombres incluye los parámetros de la función y cualquier otro identificador que esté
definida localmente dentro del cuerpo de la función. Un identificador en el ámbito local
del llamador de la función no tiene relación con ningún identificador con el mismo nombre en el ámbito del llamador (aunque los identificadores en diferentes ámbitos pueden ser alias del mismo objeto). En nuestro primer ejemplo, el identificador n tiene un alcance local a la llamada de función, al igual que el elemento identificador, que se establece como la variable de bucle.


### Sentencia return

return se utiliza dentro del cuerpo de una función para indicar que la función debe cesar inmediatamente su ejecución y que se debe devolver un valor expresado al invocador.
Si se ejecuta una sentencia de retorno sin un argumento explícito, se devuelve automáticamente el valor None. Del mismo modo, se devolverá None si el flujo de control llega alguna vez al final del cuerpo de una función sin haber ejecutado una sentencia de retorno. A menudo, una sentencia de retorno será el comando final dentro del cuerpo de la función, como fue el caso en nuestro ejemplo anterior de una función de conteo.
Sin embargo, puede haber varias sentencias de retorno en la misma función, con lógica condicional que controla cuál de esos comandos se ejecuta, si es que se ejecuta alguno. Como otro ejemplo, considere la siguiente función que prueba si existe un valor en una secuencia.

```
def contains(data, target):
	for item in target:
		if item == target:  # found a match
			return True
	return False

```

Si alguna vez se cumple la condición dentro del cuerpo del bucle, se ejecuta la instrucción return True y la función finaliza inmediatamente, donde True indica que se encontró el valor objetivo. Por el contrario, si el bucle for llega a su conclusión sin encontrar nunca la coincidencia, se ejecutará la instrucción return False final.


### Paso de información

Para ser un programador exitoso, uno debe tener una comprensión clara del mecanismo en el que un lenguaje de programación pasa información hacia y desde una función. En el contexto de una firma de función, los identificadores utilizados para describir los
parámetros esperados se conocen como parámetros formales, y los objetos enviados por el invocador
al invocar la función son los parámetros reales. El paso de parámetros
en Python sigue la semántica de la declaración de asignación estándar. Cuando se invoca una
función, cada identificador que sirve como parámetro formal se asigna, en el ámbito local de la función, al parámetro real respectivo que proporciona el invocador de la función.

Por ejemplo, considere la siguiente llamada a nuestra función count de la página 23:

```
prizes = count(grades, 'A')

```

Justo antes de que se ejecute el cuerpo de la función, los parámetros reales, grades y A ,
se asignan implícitamente a los parámetros formales, data y target, de la siguiente manera:

```
data = grades
target = A

```

Estas declaraciones de asignación establecen datos de identificación como un alias para las calificaciones y un objetivo como un nombre para la cadena literal A. (Ver Figura 1.7.)

De manera similar, se implementa como una asignación. Por lo tanto, con nuestra invocación de ejemplo de
prizes = count(grades, A ), el identificador prizes en el ámbito del invocador se asigna
al objeto que se identifica como n en la declaración de retorno dentro del cuerpo de nuestra función.
Una ventaja del mecanismo de Python para pasar información hacia y desde una
función es que los objetos no se copian. Esto garantiza que la invocación de una función
sea eficiente, incluso en un caso en el que un parámetro o valor de retorno sea un objeto complejo.


### Parámetros mutables

El modelo de paso de parámetros de Python tiene implicaciones adicionales cuando un parámetro es
un objeto mutable. Debido a que el parámetro formal es un alias del parámetro real,
el cuerpo de la función puede interactuar con el objeto de maneras que cambien su estado.
Considerando nuevamente nuestra invocación de muestra de la función count, si el cuerpo de la
función ejecuta el comando data.append( F ), la nueva entrada se agrega al
final de la lista identificada como data dentro de la función, que es la misma que
la lista conocida por el llamador como grades. Como acotación al margen, notamos que reasignar un nuevo
valor a un parámetro formal con un cuerpo de función, como por ejemplo estableciendo data = [ ],
no altera el parámetro real; tal reasignación simplemente rompe el alias.
Nuestro ejemplo hipotético de un método count que agrega un nuevo elemento a una
lista carece de sentido común. No hay razón para esperar tal comportamiento, y sería
un diseño bastante pobre tener un efecto tan inesperado en el parámetro. Sin embargo, existen muchos casos legítimos en los que se puede diseñar una función (y documentarla claramente) para modificar el estado de un parámetro. Como ejemplo concreto, presentamos la siguiente implementación de un método llamado scale cuyo propósito principal es multiplicar todas las entradas de un conjunto de datos numéricos por un factor determinado.

```
def scale(data, factor):
	for j in range(len(data)):
		data[j] *= factor

```


## Simple Input and Output

En esta sección, abordamos los conceptos básicos de entrada y salida en Python, describiendo la entrada y salida estándar a través de la consola de usuario y el soporte de Python para leer y escribir archivos de texto.


## Console Input and Output

### print function

La función incorporada, print, se utiliza para generar una salida estándar para la consola.

En su forma más simple, imprime una secuencia arbitraria de argumentos, separados por
espacios y seguidos por un carácter de nueva línea final. Por ejemplo, el comando
print( maroon , 5) genera la cadena maroon 5\n . Tenga en cuenta que los argumentos no necesitan ser
instancias de cadena. Un argumento x que no sea una cadena se mostrará como str(x). Sin ningún argumento, el comando print( ) genera un solo carácter de nueva línea.
La función print se puede personalizar mediante el uso de los siguientes parámetros de palabras clave (consulte la Sección 1.5 para obtener una discusión sobre los parámetros de palabras clave):
 
1. De manera predeterminada, la función print inserta un espacio de separación en la salida entre cada par de argumentos. El separador se puede personalizar proporcionando
una cadena de separación deseada como parámetro de palabra clave, sep. Por ejemplo, la salida separada por dos puntos se puede generar como print(a, b, c, sep= : ). La cadena de separación no necesita ser un solo carácter; puede ser una cadena más larga, y puede ser la cadena vacía, sep= , lo que hace que los argumentos sucesivos se concatenen directamente.

2. De manera predeterminada, se genera una nueva línea final después del argumento final. Se puede designar una cadena final alternativa utilizando un parámetro de palabra clave, end. Designar la cadena vacía end= suprime todos los caracteres finales.

3. De manera predeterminada, la función print envía su salida a la consola estándar. Sin embargo, la salida se puede dirigir a un archivo indicando un flujo de archivo de salida (consulte la Sección 1.6.2) utilizando file como parámetro de palabra clave.

### input function

El principal medio para obtener información de la consola de usuario es una función integrada
denominada entrada. Esta función muestra un mensaje, si se proporciona como parámetro opcional, y luego espera hasta que el usuario ingrese una secuencia de caracteres seguida
por la tecla de retorno. El valor de retorno formal de la función es la cadena de caracteres
que se ingresaron estrictamente antes de la tecla de retorno (es decir, no existe ningún carácter de nueva línea en la cadena devuelta).

Al leer un valor numérico del usuario, un programador debe utilizar la función
de entrada para obtener la cadena de caracteres y luego utilizar la sintaxis int o float para
construir el valor numérico que representa esa cadena de caracteres. Es decir, si una llamada a
response = input() informa que el usuario ingresó los caracteres 2013, se podría utilizar la sintaxis
int(response) para producir el valor entero 2013. Es bastante común
combinar estas operaciones con una sintaxis como

```
year = int(input( ¿En qué año nació? ))

```

si asumimos que el usuario ingresará una respuesta apropiada. (En la Sección 1.7
analizamos el manejo de errores en una situación como esta).
Dado que la entrada devuelve una cadena como resultado, el uso de esa función se puede combinar
con la funcionalidad existente de la clase string, como se describe en el Apéndice A. Por
ejemplo, si el usuario ingresa múltiples datos en la misma línea, es común llamar al método split en el resultado, como en

```
reply = input( Enter x and y, separate by spaces: )
pieces = reply.split( )
# devuelve una lista de cadenas, separadas por espacios
x = ﬂoat(pieces[0])
y = ﬂoat(pieces[1])

```

Aquí hay un programa simple, pero completo, que demuestra el uso de las funciones de entrada
e impresión. Las herramientas para formatear el resultado final se analizan en el Apéndice A.

```
age = int(input( Ingrese su edad en años: ))
max heart rate = 206.9 − (0.67 age) # as per Med Sci Sports Exerc.
target = 0.65 max heart rate
print( Su frecuencia cardíaca objetivo para quemar grasa es , target)

```


### Files

En Python, el acceso a los archivos suele comenzar con una llamada a una función incorporada,
denominada open, que devuelve un proxy para las interacciones con el archivo subyacente. Por
ejemplo, el comando fp = open( sample.txt ) intenta abrir un archivo llamado
sample.txt, y devuelve un proxy que permite el acceso de solo lectura al archivo de texto.
La función open acepta un segundo parámetro opcional que determina el
modo de acceso. El modo predeterminado es r para lectura. Otros modos comunes son w
para escribir en el archivo (haciendo que cualquier archivo existente con ese nombre se sobrescriba),
o a para agregar al final de un archivo existente. Aunque nos centramos en el uso de archivos de texto, es posible trabajar con archivos binarios, utilizando modos de acceso como rb
o wb .

Al procesar un archivo, el proxy mantiene una posición actual dentro del archivo como
un desplazamiento desde el principio, medido en número de bytes. Al abrir un archivo
con el modo r o w , la posición es inicialmente 0; si se abre en modo de anexión, a ,
la posición está inicialmente al final del archivo. La sintaxis fp.close() cierra el archivo
asociado con el proxy fp, asegurando que se guarde cualquier contenido escrito. En la Tabla 1.5 se proporciona un resumen
de los métodos para leer y escribir un archivo.


fp.read( )
Devuelve el contenido (restante) de un archivo legible como una cadena

fp.read(k)
Devuelve los siguientes k bytes de un archivo legible como una cadena.

fp.readline( )
Devuelve (el resto de) la línea actual de un archivo legible como una cadena.

fp.readlines( )
Devuelve todas las líneas (restantes) de un archivo legible como una lista de cadenas.

for line in fp:
Itera todas las líneas (restantes) de un archivo legible.

fp.seek(k)
Cambia la posición actual para que esté en el byte k del archivo.

fp.tell( )
Devuelve la posición actual, medida como desplazamiento de bytes desde el inicio.

fp.write(string)
Escribe la cadena dada en la posición actual del archivo escribible.

fp.writelines(seq)
Escribe cada una de las cadenas de la secuencia dada en la posición actual del archivo escribible. Este comando no inserta ninguna nueva línea, más allá de las que están incrustadas en las cadenas.

print(..., ﬁle=fp)
Redirecciona la salida de la función de impresión al archivo.


### Lectura de un archivo

El comando más básico para leer a través de un proxy es el método read. Cuando se invoca
en el proxy de archivo fp, como fp.read(k), el comando devuelve una cadena que representa los siguientes k
bytes del archivo, comenzando en la posición actual. Sin un parámetro, la sintaxis
fp.read() devuelve el contenido restante del archivo en su totalidad. Para mayor comodidad,
los archivos se pueden leer una línea a la vez, utilizando el método readline para leer una línea, o
el método readlines para devolver una lista de todas las líneas restantes. Los archivos también admiten la sintaxis de bucle for, con iteración línea por línea (p. ej., for line en fp:).


### Escritura en un archivo

Cuando un proxy de archivo es escribible, por ejemplo, si se crea con el modo de acceso w o
a , se puede escribir texto utilizando los métodos write o writelines. Por ejemplo, si definimos fp = open( results.txt , w ), la sintaxis fp.write( Hello World.\n )
escribe una sola línea en el archivo con la cadena dada. Tenga en cuenta que write no agrega explícitamente una nueva línea final, por lo que los caracteres de nueva línea deseados deben estar incrustados directamente en el parámetro de cadena. Recuerde que la salida del método print puede ser
redirigida a un archivo usando un parámetro de palabra clave, como se describe en la Sección 1.6.


## Manejo de Excepciones

Las excepciones son eventos inesperados que ocurren durante la ejecución de un programa.
Una excepción puede ser el resultado de un error lógico o una situación imprevista. En
Python, las excepciones (también conocidas como errores) son objetos que se generan (o lanzan) por
el código que encuentra una circunstancia inesperada. El intérprete de Python también puede
generar una excepción si encuentra una condición inesperada, como quedarse sin memoria. Un error generado puede ser detectado por un contexto circundante que “gestione” la
excepción de una manera apropiada. Si no se detecta, una excepción hace que el intérprete
deje de ejecutar el programa y envíe un mensaje apropiado a la consola.
En esta sección, examinamos los tipos de error más comunes en Python, el mecanismo
para capturar y gestionar los errores que se han generado y la sintaxis para generar errores desde bloques de código definidos por el usuario.


### Tipos de excepciones comunes

Python incluye una rica jerarquía de clases de excepción que designan varias categorías de errores; la Tabla 1.6 muestra muchas de esas clases. La clase Exception sirve
como clase base para la mayoría de los otros tipos de error. Una instancia de las diversas subclases
codifica detalles sobre un problema que ha ocurrido. Varios de estos errores pueden generarse en casos excepcionales por los comportamientos presentados en este capítulo. Por ejemplo,
el uso de un identificador indefinido en una expresión provoca un NameError, y el uso erróneo
de la notación de punto, como en foo.bar(), generará un AttributeError si el objeto foo
no admite un miembro llamado bar.

Class:

Exception
Una clase base para la mayoría de los tipos de error

AttributeError
Se genera mediante la sintaxis obj.foo, si obj no tiene ningún miembro llamado foo

EOFError
Se genera si se alcanza el “fin del archivo” para la consola o la entrada de archivo

IOError
Se genera en caso de falla de la operación de E/S (p. ej., al abrir un archivo)

IndexError
Se genera si el índice de la secuencia está fuera de los límites

KeyError
Se genera si se solicita una clave inexistente para el conjunto o el diccionario

KeyboardInterrupt
Se genera si el usuario presiona Ctrl-C mientras se ejecuta el programa

NameError
Se genera si se utiliza un identificador inexistente

StopIteration
Se genera mediante next(iterator) si no hay ningún elemento; consulte la Sección 1.8

TypeError
Se genera cuando se envía un tipo de parámetro incorrecto a una función

ValueError
Se genera cuando el parámetro tiene un valor no válido (p. ej., sqrt(−5))

ZeroDivisionError
Se genera cuando se utiliza cualquier operador de división con 0 como divisor


## Raising an Exception

Se genera una excepción al ejecutar la sentencia raise, con una instancia apropiada de una clase de excepción como argumento que designa el problema. Por ejemplo, si a una función para calcular una raíz cuadrada se le envía un valor negativo como parámetro,
puede generar una excepción con el comando:

```
raise ValueError( x cannot be negative )

```

Esta sintaxis genera una instancia recién creada de la clase ValueError, con el mensaje de error sirviendo como parámetro para el constructor. Si esta excepción no se captura
dentro del cuerpo de la función, la ejecución de la función cesa inmediatamente
y la excepción se propaga al contexto de llamada (y posiblemente más allá).
Al verificar la validez de los parámetros enviados a una función, es habitual
verificar primero que un parámetro sea de un tipo apropiado y luego verificar que
tenga un valor apropiado. Por ejemplo, la función sqrt de la biblioteca matemática de Python
realiza una comprobación de errores que se puede implementar de la siguiente manera:

```
def sqrt(x):
	if not isinstance(x, (int, ﬂoat)):
		raise TypeError( x must be numeric )
	elif x < 0:
		raise ValueError( x cannot be negative )
	# do the real work here...

```

La comprobación del tipo de un objeto se puede realizar en tiempo de ejecución utilizando la función
integrada, isinstance. En su forma más simple, isinstance(obj, cls) devuelve True si object,
obj, es una instancia de class, cls, o cualquier subclase de ese tipo. En el ejemplo anterior, se utiliza una forma
más general con una tupla de tipos permitidos indicados con el segundo
parámetro. Después de confirmar que el parámetro es numérico, la función impone
una expectativa de que el número no sea negativo, lo que genera un ValueError en caso contrario.

La cantidad de comprobación de errores que se debe realizar dentro de una función es un tema de debate.
La comprobación del tipo y el valor de cada parámetro requiere tiempo de ejecución adicional
y, si se lleva al extremo, parece contraria a la naturaleza de Python. Considere la
función de suma incorporada, que calcula la suma de una colección de números. Una implementación con una comprobación de errores rigurosa podría escribirse de la siguiente manera:

```
def sum(values):
	if not isinstance(values, collections.Iterable):
		raise TypeError( parameter must be an iterable type )
	total = 0
	for v in values:
		if not isinstance(v, (int, ﬂoat)):
			raise TypeError( elements must be numeric )
		total = total+ v
	return total

```

La clase base abstracta, collections.Iterable, incluye todos los tipos de contenedores iterables de Python que garantizan la compatibilidad con la sintaxis del bucle for (p. ej., lista, tupla, conjunto);
tratamos los iterables en la Sección 1.8, y el uso de módulos, como las colecciones, en la
Sección 1.11. Dentro del cuerpo del bucle for, cada elemento se verifica como numérico
antes de agregarlo al total. Una implementación mucho más directa y clara de esta
función se puede escribir de la siguiente manera:

```
def sum(values):
	total = 0
	for v in values:
		total = total + v
	return total

```

Interestingly, this simple implementation performs exactly like Python’s built-in
version of the function. Even without the explicit checks, appropriate exceptions
are raised naturally by the code. In particular, if values is not an iterable type, the
attempt to use the for-loop syntax raises a TypeError reporting that the object is not
iterable. In the case when a user sends an iterable type that includes a nonnumer-
ical element, such as sum([3.14, oops ]), a TypeError is naturally raised by the
evaluation of expression total + v. The error message
unsupported operand type(s) for +: ’float’ and ’str’
should be sufﬁciently informative to the caller. Perhaps slightly less obvious is the
error that results from sum([ alpha , beta ]). It will technically report a failed
attempt to add an int and str, due to the initial evaluation of total + alpha ,
when total has been initialized to 0.
In the remainder of this book, we tend to favor the simpler implementations
in the interest of clean presentation, performing minimal error-checking in most
situations


### Capturando Excepciones

Existen varias filosofías sobre cómo manejar posibles casos excepcionales
al escribir código. Por ejemplo, si se debe calcular una división x/y, existe un riesgo claro de que se genere un ZeroDivisionError cuando la variable y tenga un valor 0. En
una situación ideal, la lógica del programa puede dictar que y tiene un valor distinto de cero,
eliminando así la preocupación por el error. Sin embargo, para un código más complejo, o en
un caso en el que el valor de y depende de alguna entrada externa al programa, sigue habiendo
alguna posibilidad de error.
Una filosofía para gestionar casos excepcionales es “mirar antes de saltar”.
El objetivo es evitar por completo la posibilidad de que se genere una excepción mediante el uso de una prueba condicional proactiva. Volviendo a nuestro ejemplo de división, podríamos
evitar la situación ofensiva escribiendo:

```
if y != 0:
	ratio = x / y
else:
... do something else ...

```

Una segunda filosofía, que a menudo adoptan los programadores de Python, es que “es más fácil pedir perdón que pedir permiso”. Esta cita se atribuye a Grace Hopper, una pionera en informática. El sentimiento es que no necesitamos gastar tiempo de ejecución adicional para protegernos contra cada posible caso excepcional, siempre que haya un mecanismo para lidiar con un problema después de que surja. En Python, esta filosofía se implementa utilizando una estructura de control try-except. Revisando nuestro primer ejemplo, la operación de división se puede proteger de la siguiente manera:

```
try:
	ratio = x / y
except ZeroDivisionError:
... do something else ...

```

En esta estructura, el bloque “try” es el código principal que se va a ejecutar. Aunque en este ejemplo se trata de un solo comando, puede ser más generalmente un bloque más grande de código
con sangría. Después del bloque try hay uno o más casos “except”, cada uno con un tipo de error identificado y un bloque de código con sangría que debe ejecutarse si el error designado se genera dentro del bloque try.
La ventaja relativa de utilizar una estructura try-except es que el caso no excepcional
se ejecuta de manera eficiente, sin verificaciones extrañas para la condición excepcional. Sin embargo, manejar el caso excepcional requiere un poco más de tiempo cuando se utiliza una estructura try-except que con una declaración condicional estándar. Por esta razón, la cláusula try-except se utiliza mejor cuando hay razones para creer que el caso excepcional es relativamente improbable, o cuando es prohibitivamente costoso evaluar de manera proactiva una condición para evitar la excepción.

El manejo de excepciones es particularmente útil cuando se trabaja con la entrada del usuario o
cuando se leen o escriben archivos, porque dichas interacciones son inherentemente menos
predecibles. En la Sección 1.6.2, sugerimos la sintaxis, fp = open( sample.txt ),
para abrir un archivo con acceso de lectura. Ese comando puede generar un error IOError por una variedad de razones, como un archivo inexistente o la falta de privilegios suficientes para abrir un archivo. Es significativamente más fácil intentar el comando y detectar el error resultante
que predecir con precisión si el comando tendrá éxito.
Continuamos demostrando algunas otras formas de la sintaxis try-except. Las excepciones son objetos que pueden examinarse cuando se detectan. Para hacerlo, se debe establecer un identificador con una sintaxis como la siguiente:

```
try:
	fp = open( sample.txt )
except IOError as e:
	print( Unable to open the file: , e)

```

En este caso, el nombre, e, denota la instancia de la excepción que se lanzó y
su impresión hace que se muestre un mensaje de error detallado (por ejemplo, “archivo no encontrado”).
Una sentencia try puede manejar más de un tipo de excepción. Por ejemplo,
considere el siguiente comando de la Sección 1.6.1:
age = int(input( Ingrese su edad en años:
))
Este comando podría fallar por una variedad de razones. La llamada a input generará un
EOFError si falla la entrada de la consola. Si la llamada a input se completa con éxito, el
constructor int genera un ValueError si el usuario no ha ingresado caracteres que representen un entero válido. Si queremos manejar dos o más tipos de errores de la misma
manera, podemos usar una sola sentencia except, como en el siguiente ejemplo:

```
age = −1
# an initially invalid choice
while age <= 0:
	try:
		age = int(input( Enter your age in years: ))
		if age <= 0:
			print( Your age must be positive )
	except (ValueError, EOFError):
		print( Invalid response )

```

Usamos la tupla (ValueError, EOFError) para designar los tipos de errores que
deseamos capturar con la cláusula except. En esta implementación, capturamos cualquier error,
imprimimos una respuesta y continuamos con otro paso del bucle while que lo encierra. Observamos que
cuando se genera un error dentro del bloque try, el resto de ese cuerpo
se omite inmediatamente. En este ejemplo, si la excepción surge dentro de la llamada a
input, o la llamada posterior al constructor int, la asignación a age nunca ocurre, ni el mensaje sobre la necesidad de un valor positivo. Debido a que el valor de age no se modificará, el bucle while continuará. Si preferimos que el bucle while
continúe sin imprimir el mensaje de respuesta no válida, podríamos haber
escrito la cláusula de excepción como

```
except (ValueError, EOFError):
pass

```


La palabra clave, pass, es una declaración que no hace nada, pero que puede servir sintácticamente
como cuerpo de una estructura de control. De esta manera, capturamos silenciosamente la excepción,
permitiendo así que el bucle while que la rodea continúe.
Para proporcionar diferentes respuestas a diferentes tipos de errores, podemos utilizar
dos o más cláusulas except como parte de una estructura try. En nuestro ejemplo anterior, un
EOFError sugiere un error más insuperable que simplemente un valor erróneo que se
ingresa. En ese caso, podríamos desear proporcionar un mensaje de error más específico, o
quizás permitir que la excepción interrumpa el bucle y se propague a un contexto superior. Podríamos implementar dicho comportamiento de la siguiente manera:

```
age = −1
# an initially invalid choice
while age <= 0:
	try:
		age = int(input( Enter your age in years: ))
		if age <= 0:
			print( Your age must be positive )
	except ValueError:
		print( That is an invalid age specification )
	except EOFError:
		print( There was an unexpected error reading input. )
		raise
		# let s re-raise this exception

```


En esta implementación, tenemos cláusulas except separadas para los casos ValueError y
EOFError. El cuerpo de la cláusula para manejar un EOFError se basa en otra
técnica en Python. Utiliza la declaración raise sin ningún argumento posterior,
para volver a generar la misma excepción que se está manejando actualmente. Esto nos permite
proporcionar nuestra propia respuesta a la excepción y luego interrumpir el bucle while y
propagar la excepción hacia arriba.
Para cerrar, observamos dos características adicionales de las estructuras try-except en Python.
Es permisible tener una cláusula except final sin ningún tipo de error identificado,
utilizando la sintaxis except:, para capturar cualquier otra excepción que haya ocurrido. Sin embargo, esta
técnica debe usarse con moderación, ya que es difícil sugerir cómo manejar un
error de un tipo desconocido. Una sentencia try puede tener una cláusula finally, con un cuerpo de
código que siempre se ejecutará en los casos estándar o excepcionales, incluso cuando
se produzca una excepción no detectada o que se vuelva a generar. Ese bloque se utiliza normalmente para tareas de limpieza críticas, como cerrar un archivo abierto.


## Iterators and Generators

En la Sección 1.4.2, presentamos la sintaxis del bucle for que comienza como:
for element in iterable:
y notamos que hay muchos tipos de objetos en Python que califican como iterables. Los tipos de contenedor básicos, como lista, tupla y conjunto, califican como tipos iterables.
Además, una cadena puede producir una iteración de sus caracteres, un diccionario puede
producir una iteración de sus claves y un archivo puede producir una iteración de sus líneas. Los tipos definidos por el usuario también pueden admitir la iteración. En Python, el mecanismo para la iteración se basa en las siguientes convenciones:

1. Un iterador es un objeto que administra una iteración a través de una serie de valores. Si
la variable, i, identifica un objeto iterador, entonces cada llamada a la función incorporada,
next(i), produce un elemento posterior de la serie subyacente, con una excepción StopIteration lanzada para indicar que no hay más elementos.

2. Un iterable es un objeto, obj, que produce un iterador a través de la sintaxis iter(obj).


Según estas definiciones, una instancia de una lista es un iterable, pero no un iterador en sí mismo.
Con data = [1, 2, 4, 8], no es legal llamar a next(data). Sin embargo, se puede generar un objeto iterador con la sintaxis i = iter(data), y luego cada llamada posterior
a next(i) devolverá un elemento de esa lista. La sintaxis de bucle for en Python simplemente
automatiza este proceso, creando un iterador para el iterable dado y luego llamando repetidamente al siguiente elemento hasta capturar la excepción StopIteration.

En términos más generales, es posible crear varios iteradores basados ​​en el mismo objeto iterable, y cada iterador mantiene su propio estado de progreso. Sin embargo,
los iteradores generalmente mantienen su estado con referencia indirecta a la colección original de elementos. Por ejemplo, llamar a iter(data) en una instancia de lista produce
una instancia de la clase iterador de lista. Ese iterador no almacena su propia copia de la
lista de elementos. En cambio, mantiene un índice actual en la lista original, que representa el siguiente elemento que se informará. Por lo tanto, si el contenido de la lista original
se modifica después de que se construye el iterador, pero antes de que se complete la iteración,
el iterador informará el contenido actualizado de la lista.

Python también admite funciones y clases que producen una serie iterable implícita de valores, es decir, sin construir una estructura de datos para almacenar todos sus valores
a la vez. Por ejemplo, la llamada range(1000000) no devuelve una lista de números;
devuelve un objeto de rango que es iterable. Este objeto genera el millón de valores uno a la vez, y solo cuando es necesario. Esta técnica de evaluación perezosa tiene una gran ventaja. En el caso de range, permite que se ejecute un bucle de la forma, for j in range(1000000):,
sin reservar memoria para almacenar un millón de valores. Además, si
dicho bucle se interrumpiera de alguna manera, no se habría perdido tiempo
en calcular valores no utilizados del rango.


### Generator 

En la Sección 2.3.4, explicaremos cómo definir una clase cuyas instancias sirven como iteradores. Sin embargo, la técnica más conveniente para crear iteradores en Python
es mediante el uso de generadores. Un generador se implementa con una sintaxis que es muy similar a una función, pero en lugar de devolver valores, se ejecuta una declaración yield para indicar cada elemento de la serie. Como ejemplo, considere el objetivo
de determinar todos los factores de un entero positivo. Por ejemplo, el número 100 tiene factores 1, 2, 4, 5, 10, 20, 25, 50, 100.

Una función tradicional podría producir y devolver una lista que contenga todos los factores, implementados

```
def factors(n):
	results = [ ]
	for k in range(1,n+1):
		if n % k == 0:
			results.append(k)
	return results
# traditional function that computes factors
# store factors in a new list
# divides evenly, thus k is a factor
# add k to the list of factors
# return the entire list

```

Por el contrario, una implementación de un generador para calcular esos factores podría implementarse de la siguiente manera:

```
def factors(n):
	for k in range(1,n+1):
		if n % k == 0:
			yield k
# generator that computes factors
# divides evenly, thus k is a factor
# yield this factor as next result

```

Observe el uso de la palabra clave yield en lugar de return para indicar un resultado. Esto indica a Python que estamos definiendo un generador, en lugar de una función tradicional. 
Es ilegal combinar declaraciones yield y return en la misma implementación, excepto una declaración return sin argumentos para hacer que un generador finalice su ejecución. Si un programador escribe un bucle como for factor in factors(100):, se crea una instancia de nuestro generador. 
Para cada iteración del bucle, Python ejecuta nuestro procedimiento hasta que una sentencia yield indique el siguiente valor. En ese punto, el procedimiento se interrumpe temporalmente, para reanudarse solo cuando se solicita otro valor. Cuando
el flujo de control alcanza naturalmente el final de nuestro procedimiento (o una sentencia de retorno de argumento cero), se genera automáticamente una excepción StopIteration. Aunque este
ejemplo en particular usa una sola sentencia yield en el código fuente, un generador puede
confiar en múltiples sentencias yield en diferentes construcciones, con la serie generada determinada por el flujo natural de control. Por ejemplo, podemos mejorar en gran medida
la eficiencia de nuestro generador para calcular factores de un número, n, probando solo valores hasta la raíz cuadrada de ese número, mientras informamos el factor n//k
que está asociado con cada k (a menos que n//k sea igual a k). Podríamos implementar un generador de este tipo de la siguiente manera:

```
def factors(n):
	k=1
	while k k < n:
		if n % k == 0:
			yield k
			yield n // k
		k += 1
	if k k == n:
		yield k
# generator that computes factors
# while k < sqrt(n)
# special case if n is perfect square

```

Debemos tener en cuenta que este generador difiere de nuestra primera versión en que los factores
no se generan en orden estrictamente creciente. Por ejemplo, factores(100) genera
la serie 1, 100, 2, 50, 4, 25, 5, 20, 10.
Para cerrar, deseamos enfatizar los beneficios de la evaluación diferida cuando se utiliza un
generador en lugar de una función tradicional. Los resultados solo se calculan si se solicitan, y no es necesario que toda la serie resida en la memoria al mismo tiempo. De hecho, un
generador puede producir efectivamente una serie infinita de valores. Como ejemplo, los
números de Fibonacci forman una secuencia matemática clásica, comenzando con el valor 0, luego el valor 1 y luego cada valor posterior es la suma de los dos valores
previos. Por lo tanto, la serie de Fibonacci comienza como: 0, 1, 1, 2, 3, 5, 8, 13, . . .. El siguiente generador produce esta serie infinita.

```
def ﬁbonacci( ):
	a=0
	b=1
	while True:
		yield a
		future = a + b
		a=b
		b = future
# keep going...
# report value, a, during this pass
# this will be next value reported
# and subsequently this

```


## Características adicionales convenientes 

En esta sección, presentamos varias características de Python que son particularmente convenientes para escribir código limpio y conciso. Cada una de estas sintaxis proporciona funcionalidad
que de otra manera podría lograrse utilizando la funcionalidad que hemos presentado
anteriormente en este capítulo. Sin embargo, a veces, la nueva sintaxis es una expresión más clara y directa
de la lógica.


### Conditional Expressions

Python admite una sintaxis de expresión condicional que puede reemplazar una estructura de control simple. La sintaxis general es una expresión de la forma:

expr1 if condition else expr2

Esta expresión compuesta evalúa a expr1 si la condición es verdadera y, en caso contrario,
evalúa a expr2. Para quienes estén familiarizados con Java o C++, esto es equivalente a la sintaxis, condition ? expr1 : expr2, en esos lenguajes.

Como ejemplo, considere el objetivo de enviar el valor absoluto de una variable, n,
a una función (y sin depender de la función abs incorporada, por ejemplo). Usando una estructura de control tradicional, podríamos lograr esto de la siguiente manera:

```
if n >= 0:
	param = n
else:
	param = −n
result = foo(param)
# call the function

```

Con la sintaxis de expresión condicional, podemos asignar directamente un valor a la variable,
param, de la siguiente manera:

param = n if n >= 0 else −n
result = foo(param)
# elegir el valor apropiado
# llamar a la función

De hecho, no hay necesidad de asignar la expresión compuesta a una variable. Una expresión condicional puede servir como parámetro de la función, escrita de la siguiente manera:

result = foo(n if n >= 0 else −n)

A veces, el simple acortamiento del código fuente es ventajoso porque
evita la distracción de una estructura de control más engorrosa. Sin embargo, recomendamos que se utilice una expresión condicional solo cuando mejore la legibilidad
del código fuente y cuando la primera de las dos opciones sea el caso más “natural”,
dada su prominencia en la sintaxis. (Preferimos ver el valor alternativo como más
excepcional).


### Comprehension Syntax

Una tarea de programación muy común es producir una serie de valores en base al procesamiento de otra serie. A menudo, esta tarea se puede realizar de manera bastante simple en Python utilizando lo que se conoce como sintaxis de comprensión. Comenzamos demostrando la comprensión de listas, ya que esta fue la primera forma admitida por Python. Su forma general es la siguiente:

```
[ expression for value in iterable if condition ]

```

Observamos que tanto la expresión como la condición pueden depender del valor y que la cláusula if es opcional.

La evaluación de la comprensión es lógicamente equivalente a la siguiente estructura de control tradicional para calcular una lista resultante:

```
result = [ ]
for value in iterable:
	if condition:
		result.append(expression)

```


### Packing and Unpacking of Sequences

Python proporciona dos ventajas adicionales relacionadas con el tratamiento de tuplas y otros tipos de secuencias. La primera es más bien cosmética. Si se proporciona una serie de expresiones separadas por comas en un contexto más amplio, se tratarán como una única tupla, incluso si no se proporcionan paréntesis que las encierren. Por ejemplo, la asignación

data = 2, 4, 6, 8

da como resultado que el identificador, data, se asigne a la tupla (2, 4, 6, 8). Este comportamiento
se denomina empaquetamiento automático de una tupla. Un uso común del empaquetamiento en Python es
cuando se devuelven múltiples valores de una función. Si el cuerpo de una función ejecuta
el comando,

return x, y

devolverá formalmente un único objeto que es la tupla (x, y).
Como dual del comportamiento de empaquetamiento, Python puede desempaquetar automáticamente una secuencia, lo que permite asignar una serie de identificadores individuales a los elementos
de la secuencia. Como ejemplo, podemos escribir

a, b, c, d = range(7, 11)

que tiene el efecto de asignar a=7, b=8, c=9 y d=10, ya que esos son los cuatro
valores en la secuencia devuelta por la llamada a range. Para esta sintaxis, la expresión del lado derecho
puede ser cualquier tipo iterable, siempre que la cantidad de variables del lado izquierdo sea la misma que la cantidad de elementos en la iteración.
Esta técnica se puede utilizar para descomprimir tuplas devueltas por una función. Por ejemplo, la función incorporada, divmod(a, b), devuelve el par de valores (a // b, a % b)
asociados con una división entera. Aunque el llamador puede considerar que el valor de retorno es una sola tupla, es posible escribir

quotient, remainder = divmod(a, b)

para identificar por separado las dos entradas de la tupla devuelta. Esta sintaxis también se puede
utilizar en el contexto de un bucle for, al iterar sobre una secuencia de iterables, como en

for x, y in [ (7, 2), (5, 8), (6, 4) ]:

En este ejemplo, habrá tres iteraciones del bucle. Durante la primera pasada, x=7
e y=2, y así sucesivamente. Este estilo de bucle se utiliza con bastante frecuencia para iterar a través de pares clave-valor que son devueltos por el método items() de la clase dict, como en:

for k, v in mapping.items():


### Asignaciones simultáneas

La combinación de empaquetado y desempaquetado automático forma una técnica conocida
como asignación simultánea, mediante la cual asignamos explícitamente una serie de valores a una
serie de identificadores, utilizando una sintaxis:

x, y, z = 6, 2, 5

En efecto, el lado derecho de esta asignación se empaqueta automáticamente en una tupla,
y luego se desempaqueta automáticamente con sus elementos asignados a los tres identificadores
en el lado izquierdo.
Cuando se utiliza una asignación simultánea, todas las expresiones se evalúan
en el lado derecho antes de que se realice cualquiera de las asignaciones a las variables
izquierdas. Esto es significativo, ya que proporciona un medio conveniente para intercambiar los valores asociados con dos variables:

j, k = k, j

Con este comando, j se asignará al valor anterior de k, y k se asignará
al valor anterior de j. Sin la asignación simultánea, un intercambio normalmente requiere
un uso más delicado de una variable temporal, como

temp = j
j=k
k = temp

Con la asignación simultánea, la tupla sin nombre
que representa los valores empaquetados en el lado derecho sirve implícitamente como variable temporal cuando se realiza dicho intercambio.
El uso de asignaciones simultáneas puede simplificar en gran medida la presentación del
código. Como ejemplo, reconsideramos el generador en la página 41 que produce la
serie de Fibonacci. El código original requiere la inicialización por separado de las variables a
y b para comenzar la serie. Dentro de cada paso del bucle, el objetivo era reasignar a
y b, respectivamente, a los valores de b y a+b. En ese momento, logramos esto
con un breve uso de una tercera variable. Con asignaciones simultáneas, ese generador
se puede implementar de manera más directa de la siguiente manera:

def fibonacci( ):
a, b = 0, 1
while True:
yield a
a, b = b, a+b


## Ámbitos y espacios de nombres

Al calcular una suma con la sintaxis x + y en Python, los nombres x e y deben
haberse asociado previamente con objetos que sirven como valores; se generará un NameError
si no se encuentran tales definiciones. El proceso de determinar el
valor asociado con un identificador se conoce como resolución de nombres.
Siempre que se asigna un identificador a un valor, esa definición se realiza con un
ámbito específico. Las asignaciones de nivel superior se realizan normalmente en lo que se conoce como ámbito global.
Las asignaciones realizadas dentro del cuerpo de una función normalmente tienen un ámbito que es local para esa llamada de función. Por lo tanto, una asignación, x = 5, dentro de una función no tiene
efecto sobre el identificador, x, en el ámbito más amplio.
Cada ámbito distinto en Python se representa mediante una abstracción conocida como espacio de nombres. Un espacio de nombres administra todos los identificadores que están actualmente definidos en un ámbito determinado. La Figura 1.8 muestra dos espacios de nombres, uno de los cuales es el de un llamador a nuestra
función count de la Sección 1.5, y el otro es el espacio de nombres local durante
la ejecución de esa función.

Figura 1.8: Representación de los dos espacios de nombres asociados con la llamada de un usuario
count(grades, A ), como se define en la Sección 1.5. El espacio de nombres de la izquierda es el del llamador
y el espacio de nombres de la derecha representa el alcance local de la función.
Python implementa un espacio de nombres con su propio diccionario que asigna cada cadena de identificación (por ejemplo, n ) a su valor asociado. Python proporciona varias formas de
examinar un espacio de nombres determinado. La función, dir, informa los nombres de los identificadores
en un espacio de nombres determinado (es decir, las claves del diccionario), mientras que la función, vars,
devuelve el diccionario completo. De manera predeterminada, las llamadas a dir() y vars() informan sobre el espacio de nombres más local en el que se ejecutan.

Cuando se indica un identificador en un comando, Python busca una serie de espacios de nombres en el proceso de resolución de nombres. Primero, se busca un nombre dado en el ámbito más local. Si no se encuentra allí, se busca el siguiente ámbito externo, y así sucesivamente. Continuaremos nuestro examen de los espacios de nombres en la Sección 2.5, cuando discutamos el tratamiento de Python de la orientación a objetos. Veremos
que cada objeto tiene su propio espacio de nombres para almacenar sus atributos, y que cada clase también tiene un espacio de nombres.

 
### First-Class Objects

En la terminología de los lenguajes de programación, los objetos de primera clase son instancias de
un tipo que se puede asignar a un identificador, pasar como parámetro o devolver por
una función. Todos los tipos de datos que presentamos en la Sección 1.2.3, como int y list, son claramente tipos de primera clase en Python. En Python, las funciones y las clases también se tratan como objetos de primera clase. Por ejemplo, podríamos escribir lo siguiente:
scream = print
scream( Hello )
# asignar el nombre 'scream' a la función denotada como 'print'
# llamar a esa función
En este caso, no hemos creado una nueva función, simplemente hemos definido scream
como un alias para la función print existente. Si bien hay poca motivación para este ejemplo precisamente, demuestra el mecanismo que utiliza Python para permitir que una función se pase como parámetro a otra. En la página 28, notamos
que la función incorporada, max, acepta un parámetro de palabra clave opcional para especificar
un orden no predeterminado al calcular un máximo. Por ejemplo, un llamador puede usar
la sintaxis, max(a, b, key=abs), para determinar qué valor tiene el valor absoluto
más grande. Dentro del cuerpo de esa función, el parámetro formal, key, es un identificador
que se asignará al parámetro real, abs.
En términos de espacios de nombres, una asignación como scream = print, introduce el
identificador, scream, en el espacio de nombres actual, con su valor siendo el objeto que
representa la función incorporada, print. El mismo mecanismo se aplica cuando se declara una función definida por el usuario. Por ejemplo, nuestra función count de la Sección 1.5
comienza con la siguiente sintaxis:
def count(data, target):
...
Esta declaración introduce el identificador, count, en el espacio de nombres actual,
siendo el valor una instancia de función que representa su implementación. De manera similar, el nombre de una clase recién definida se asocia con una representación de
esa clase como su valor. (Las definiciones de clase se presentarán en el próximo capítulo).


## Modules and the Import Statement

Ya hemos introducido muchas funciones (p. ej., max) y clases (p. ej., list)
que están definidas dentro del espacio de nombres integrado de Python. Según la versión de
Python, hay aproximadamente entre 130 y 150 definiciones que se consideraron lo suficientemente significativas
como para incluirse en ese espacio de nombres integrado.
Más allá de las definiciones integradas, la distribución estándar de Python incluye quizás decenas de miles de otros valores, funciones y clases que están organizados en bibliotecas adicionales, conocidas como módulos, que se pueden importar desde un programa. Como ejemplo, consideramos el módulo matemático. Si bien el espacio de nombres integrado
incluye algunas funciones matemáticas (p. ej., abs, min, max, round), muchas más
están relegadas al módulo matemático (p. ej., sin, cos, sqrt). Ese módulo también define
valores aproximados para las constantes matemáticas pi y e.
La declaración import de Python carga definiciones de un módulo en el espacio de nombres actual. Una forma de una declaración import utiliza una sintaxis como la siguiente:

```
from math import pi, sqrt

```

Este comando agrega tanto pi como sqrt, tal como se definen en el módulo math, en el espacio de nombres actual, lo que permite el uso directo del identificador, pi, o una llamada a la función, sqrt(2). Si hay muchas definiciones del mismo módulo para importar, se puede utilizar un
asterisco como comodín, como en from math import , pero esta forma
debe usarse con moderación. El peligro es que algunos de los nombres definidos en el módulo pueden entrar en conflicto con nombres que ya están en el espacio de nombres actual (o que se están importando
de otro módulo), y la importación hace que las nuevas definiciones reemplacen a las existentes.
Otro enfoque que se puede utilizar para acceder a muchas definiciones del mismo
módulo es importar el módulo mismo, utilizando una sintaxis como:

```
import math

```

Formalmente, esto agrega el identificador, math, al espacio de nombres actual, con el módulo
como su valor. (Los módulos también son objetos de primera clase en Python). Una vez importados, se puede acceder a las definiciones individuales del módulo utilizando un nombre completamente calificado,
como math.pi o math.sqrt(2).


### Creación de un nuevo módulo

Para crear un nuevo módulo, simplemente hay que poner las definiciones pertinentes en un archivo
con el sufijo .py. Esas definiciones se pueden importar desde cualquier otro archivo .py
dentro del mismo directorio del proyecto. Por ejemplo, si tuviéramos que poner la definición
de nuestra función count (ver Sección 1.5) en un archivo llamado utility.py, podríamos
importar esa función usando la sintaxis 

```
from utility import count.

```

Vale la pena señalar que los comandos de nivel superior con el código fuente del módulo se ejecutan
cuando el módulo se importa por primera vez, casi como si el módulo fuera su propio
script. Hay una construcción especial para incrustar comandos dentro del módulo
que se ejecutarán si el módulo se invoca directamente como un script, pero no cuando
el módulo se importa desde otro script. Dichos comandos deben colocarse en un
cuerpo de una declaración condicional de la siguiente forma,

```
if __name__ == ' __main__':

```

Usando nuestro hipotético módulo utility.py como ejemplo, dichos comandos se ejecutarán
si el intérprete se inicia con un comando python utility.py, pero
no cuando el módulo de utilidad se importa en otro contexto. Este enfoque se usa a menudo para incrustar lo que se conoce como pruebas unitarias dentro del módulo; analizaremos las pruebas unitarias con más detalle en la Sección 2.2.4.

array
Proporciona almacenamiento en matriz compacta para tipos primitivos.

collections
Define estructuras de datos adicionales y clases base abstractas que involucran colecciones de objetos.

copy
Define funciones generales para hacer copias de objetos.

heapq
Proporciona funciones de cola de prioridad basadas en montón (consulte la Sección 9.3.7).

math
Define constantes y funciones matemáticas comunes.

os
Proporciona soporte para interacciones con el sistema operativo.

random
Proporciona generación de números aleatorios.

re
Proporciona soporte para procesar expresiones regulares.

sys
Proporciona un nivel adicional de interacción con el intérprete de Python.

time
Proporciona soporte para medir el tiempo o retrasar un programa.


### Generación de números pseudoaleatorios

El módulo aleatorio de Python brinda la capacidad de generar números pseudoaleatorios,
es decir, números que son estadísticamente aleatorios (pero no necesariamente verdaderamente aleatorios).
Un generador de números pseudoaleatorios utiliza una fórmula determinista para generar los números.

siguiente número en una secuencia basada en uno o más números pasados ​​que ha generado. De hecho, un generador de números pseudoaleatorios simple pero popular elige su
siguiente número basándose únicamente en el número elegido más recientemente y algunos parámetros
adicionales utilizando la siguiente fórmula.

next = (a*current + b) % n;

donde a, b y n son números enteros elegidos apropiadamente. Python utiliza una técnica más
avanzada conocida como Mersenne Twister. Resulta que las secuencias generadas
por estas técnicas pueden demostrarse como estadísticamente uniformes, lo que suele ser
suficientemente bueno para la mayoría de las aplicaciones que requieren números aleatorios, como los juegos. Para
aplicaciones, como configuraciones de seguridad informática, donde se necesitan secuencias aleatorias
impredecibles, no se debe utilizar este tipo de fórmula. En cambio, lo ideal es tomar una muestra de una fuente que sea realmente aleatoria, como la estática de radio que viene
del espacio exterior. Dado que el siguiente número en un generador pseudoaleatorio está determinado por el número anterior, un generador de este tipo siempre necesita un lugar para comenzar, que se llama su
semilla. La secuencia de números generada para una semilla dada siempre será la misma.
Un truco común para obtener una secuencia diferente cada vez que se ejecuta un programa es usar una semilla que será diferente para cada ejecución. Por ejemplo, podríamos usar alguna entrada cronometrada de un usuario o la hora actual del sistema en milisegundos.
El módulo aleatorio de Python proporciona soporte para la generación de números pseudoaleatorios al definir una clase Random; las instancias de esa clase sirven como generadores con estado independiente. Esto permite que diferentes aspectos de un programa dependan de su propio
generador de números pseudoaleatorios, de modo que las llamadas a un generador no afecten la
secuencia de números producidos por otro. Para mayor comodidad, todos los métodos admitidos por la clase Random también se admiten como funciones independientes del módulo
random (esencialmente, utilizando una única instancia de generador para todas las llamadas de nivel superior).

seed(hashable)
Inicializa el generador de números pseudoaleatorios en función del valor hash del parámetro

random( )
Devuelve un valor de punto flotante pseudoaleatorio en el intervalo ([0,0, 1,0]).

randint(a,b)
Devuelve un entero pseudoaleatorio en el intervalo cerrado ([a, b]).

randrange(start, stop, step)
Devuelve un entero pseudoaleatorio en el rango estándar de Python indicado por los parámetros.

choice(seq)
Devuelve un elemento de la secuencia dada elegido de forma pseudoaleatoria.

shuffle(seq)
Reordena los elementos de la secuencia dada de forma pseudoaleatoria.



# Cap2: Object-Oriented Programming

Objetivos, principios y patrones

Como su nombre lo indica, los principales “actores” en el paradigma orientado a objetos se denominan
objetos. Cada objeto es una instancia de una clase. Cada clase presenta al mundo exterior
una visión concisa y consistente de los objetos que son instancias de esta clase,
sin entrar en demasiados detalles innecesarios ni dar a otros acceso al funcionamiento interno de los objetos. La definición de clase normalmente especifica las variables de instancia,
también conocidas como miembros de datos, que contiene el objeto, así como los métodos, también
conocidos como funciones miembro, que el objeto puede ejecutar. Esta visión de la informática
tiene como objetivo cumplir varios objetivos e incorporar varios principios de diseño, que
discutimos en este capítulo.


### Objetivos del diseño orientado a objetos

Las implementaciones de software deben lograr robustez, adaptabilidad y reutilización.


### Robustness

Todo buen programador quiere desarrollar software que sea correcto, lo que significa que
un programa produzca la salida correcta para todas las entradas previstas en la aplicación del programa. Además, queremos que el software sea robusto, es decir, capaz de manejar
entradas inesperadas que no están explícitamente definidas para su aplicación. Por ejemplo,
si un programa espera un número entero positivo (que tal vez represente el precio de un
artículo) y en su lugar recibe un número entero negativo, entonces el programa debería poder
recuperarse sin problemas de este error. Más importante aún, en aplicaciones críticas para la vida,
donde un error de software puede provocar lesiones o la muerte, un software que no sea robusto
podría ser mortal. Este punto quedó claro a fines de la década de 1980 en los accidentes que involucraron a Therac-25, una máquina de radioterapia, que provocó una sobredosis grave de seis pacientes
entre 1985 y 1987, algunos de los cuales murieron por complicaciones resultantes de su sobredosis de radiación. Los seis accidentes fueron atribuidos a errores de software.


### Adaptability

Las aplicaciones de software modernas, como los navegadores web y los motores de búsqueda de Internet,
normalmente implican programas grandes que se utilizan durante muchos años. Por lo tanto, el software debe poder evolucionar con el tiempo en respuesta a las condiciones cambiantes de su
entorno. Por lo tanto, otro objetivo importante del software de calidad es que logre
adaptabilidad (también llamada capacidad de evolución). Relacionado con este concepto está la portabilidad, que
es la capacidad del software de ejecutarse con cambios mínimos en diferentes plataformas de hardware y
sistemas operativos. Una ventaja de escribir software en Python es la portabilidad que proporciona el propio lenguaje.


### Reusability

Junto con la adaptabilidad está el deseo de que el software sea reutilizable, es decir, que el mismo código pueda utilizarse como componente de diferentes sistemas en varias
aplicaciones. Desarrollar software de calidad puede ser una tarea costosa, y su
costo puede compensarse en cierta medida si el software está diseñado de manera que sea fácilmente
reutilizable en futuras aplicaciones. Sin embargo, dicha reutilización debe realizarse con cuidado, ya que
una de las principales fuentes de errores de software en el Therac-25 provino de la reutilización inadecuada del software del Therac-20 (que no estaba orientado a objetos y no estaba diseñado
para la plataforma de hardware utilizada con el Therac-25).


###  Principios de diseño orientado a objetos

Entre los principios principales del enfoque orientado a objetos, que tienen como objetivo
facilitar los objetivos descritos anteriormente, se encuentran los siguientes:

Modularidad
Abstracción
Encapsulación


### Modularity
 
 Los sistemas de software modernos suelen constar de varios componentes diferentes que
deben interactuar correctamente para que todo el sistema funcione correctamente. Mantener
estas interacciones de forma ordenada requiere que estos diferentes componentes estén bien organizados. La modularidad se refiere a un principio de organización en el que los diferentes componentes
de un sistema de software se dividen en unidades funcionales independientes.
Como analogía del mundo real, una casa o un apartamento pueden considerarse compuestos por
varias unidades que interactúan: electricidad, calefacción y refrigeración, plomería y estructura.
En lugar de ver estos sistemas como un revoltijo gigante de cables, conductos de ventilación, tuberías y
tableros, el arquitecto organizado que diseña una casa o un apartamento los verá como
módulos separados que interactúan de maneras bien definidas. Al hacerlo, está utilizando la
modularidad para aportar claridad de pensamiento que proporciona una forma natural de organizar
funciones en unidades distintas y manejables.
De la misma manera, el uso de la modularidad en un sistema de software también puede proporcionar un poderoso marco de organización que aporta claridad a una implementación. En Python,
ya hemos visto que un módulo es una colección de funciones y
clases estrechamente relacionadas que se definen juntas en un único archivo de código fuente. Las bibliotecas estándar de Python incluyen, por ejemplo, el módulo math, que proporciona definiciones de constantes y funciones matemáticas clave, y el módulo os, que proporciona soporte
para interactuar con el sistema operativo.
El uso de la modularidad ayuda a respaldar los objetivos enumerados en la Sección 2.1.1. La robustez aumenta en gran medida porque es más fácil probar y depurar componentes separados
antes de que se integren en un sistema de software más grande. Además, los errores que persisten en un sistema completo pueden rastrearse hasta un componente en particular, que puede solucionarse en un aislamiento relativo. La estructura impuesta por la modularidad también ayuda a permitir la reutilización del software. Si los módulos de software se escriben de manera general, los módulos
se pueden reutilizar cuando surja una necesidad relacionada en otros contextos. Esto es particularmente relevante en un estudio de estructuras de datos, que normalmente pueden diseñarse con suficiente abstracción y generalidad para ser reutilizadas en muchas aplicaciones.
 
 
### Abstraction

El concepto de abstracción consiste en destilar un sistema complicado hasta sus partes más fundamentales. Normalmente, describir las partes de un sistema implica nombrarlas y explicar su funcionalidad. La aplicación del paradigma de abstracción al diseño de
estructuras de datos da lugar a los tipos de datos abstractos (TAD). Un TDA es un modelo
matemático de una estructura de datos que especifica el tipo de datos almacenados, las operaciones admitidas en ellos y los tipos de parámetros de las operaciones. Un TDA especifica
qué hace cada operación, pero no cómo lo hace. Normalmente nos referiremos al conjunto
colectivo de comportamientos admitidos por un TDA como su interfaz pública.
Como lenguaje de programación, Python ofrece una gran libertad en lo que respecta a la especificación de una interfaz. Python tiene una tradición de tratar las abstracciones
implícitamente utilizando un mecanismo conocido como tipado pato. Como lenguaje interpretado y tipado dinámicamente, no hay comprobación de tipos de datos en “tiempo de compilación” en Python, ni requisitos formales para declaraciones de clases base abstractas. En cambio, los programadores suponen que un objeto admite un conjunto de comportamientos conocidos, y el intérprete genera un error en tiempo de ejecución si esas suposiciones fallan. La descripción de esto como “tipado de pato” proviene de un adagio atribuido al poeta James Whitcomb
Riley, que afirma que “cuando veo un pájaro que camina como un pato y nada como un pato
y grazna como un pato, llamo a ese pájaro pato”.
Más formalmente, Python admite tipos de datos abstractos mediante un mecanismo conocido como clase base abstracta (ABC). Una clase base abstracta no se puede instanciar
(es decir, no se puede crear directamente una instancia de esa clase), pero define uno o más métodos comunes que todas las implementaciones de la abstracción deben tener. Un ABC
se realiza mediante una o más clases concretas que heredan de la clase base abstracta
y que proporcionan implementaciones para aquellos métodos declarados por el ABC. El módulo
abc de Python proporciona soporte formal para los ABC, aunque omitimos dichas declaraciones
para simplificar. Haremos uso de varias clases base abstractas existentes provenientes del módulo de colecciones de Python, que incluye definiciones para varios ADT de
estructuras de datos comunes e implementaciones concretas de algunas de esas abstracciones.


### Encapsulation

Otro principio importante del diseño orientado a objetos es la encapsulación. Los diferentes componentes de un sistema de software no deben revelar los detalles internos de sus respectivas implementaciones. Una de las principales ventajas de la encapsulación es que le da a un programador la libertad de implementar los detalles de un componente, sin preocuparse de que otros programadores escriban código que depende intrínsecamente de esas decisiones internas. La única restricción para el programador de un componente es mantener la interfaz pública para el componente, ya que otros programadores escribirán código que depende de esa interfaz. La encapsulación brinda robustez y adaptabilidad, ya que permite que los detalles de implementación de partes de un programa cambien sin afectar negativamente a otras partes, lo que facilita la corrección de errores o la adición de nuevas funciones con cambios relativamente locales en un componente. A lo largo de este libro, nos ceñiremos al principio de encapsulación, dejando en claro qué aspectos de una estructura de datos se supone que son públicos y cuáles se supone que son detalles internos. Dicho esto, Python solo proporciona un soporte flexible para la encapsulación. Por convención, se supone que los nombres de los miembros de una clase (tanto miembros de datos como funciones miembro) que comienzan con un solo carácter de guión bajo (por ejemplo, secreto)
no son públicos y no se debe confiar en ellos. Esas convenciones
se refuerzan con la omisión intencional de esos miembros de la documentación generada automáticamente.


### Design Patterns

El diseño orientado a objetos facilita un software reutilizable, robusto y adaptable. Sin embargo, diseñar un buen código requiere algo más que simplemente comprender las metodologías orientadas a objetos. Requiere el uso eficaz de las técnicas de diseño orientadas a objetos.
Los investigadores y profesionales de la informática han desarrollado una variedad de conceptos y metodologías organizativas para diseñar software orientado a objetos de calidad que sea conciso, correcto y reutilizable. De especial relevancia para este libro es el concepto de patrón de diseño, que describe una solución a un problema de diseño de software “típico”. Un patrón proporciona una plantilla general para una solución que se puede aplicar en
muchas situaciones diferentes. Describe los elementos principales de una solución de una manera abstracta que se puede especializar para un problema específico en cuestión. Consiste en un nombre,
que identifica el patrón; un contexto, que describe los escenarios para los que se puede aplicar este patrón; una plantilla, que describe cómo se aplica el patrón; y
un resultado, que describe y analiza lo que produce el patrón.
En este libro presentamos varios patrones de diseño y mostramos cómo se pueden aplicar de manera consistente a implementaciones de estructuras de datos y algoritmos. 

Estos patrones de diseño se dividen en dos grupos: patrones para resolver problemas de diseño de algoritmos y patrones para resolver problemas de ingeniería de software. 

1. Los patrones de diseño de algoritmos que analizamos incluyen los siguientes:

Recursion
Amortization 
Divide-and-conquer 
Prune-and-search, also known as decrease-and-conquer (Section 12.7.1)
Brute force 
Dynamic programming
The greedy method 


2. Los patrones de diseño de ingeniería de software que analizamos incluyen:

Iterator
Adapter
Position 
Composition 
Template method 
Locator 
Factory method


## Software Development

El desarrollo de software tradicional implica varias fases. Tres pasos principales son:

1. Diseño
2. Implementación
3. Prueba y depuración

En esta sección, analizamos brevemente el papel de estas fases y presentamos varias buenas prácticas para la programación en Python, incluido el estilo de codificación, las convenciones de nombres, la documentación formal y las pruebas unitarias.


### Design

Para la programación orientada a objetos, el paso de diseño es quizás la fase más importante
en el proceso de desarrollo de software. Porque es en el paso de diseño que
decidimos cómo dividir el funcionamiento de nuestro programa en clases, decidimos cómo
interactuarán estas clases, qué datos almacenará cada una y qué acciones realizará cada una. De hecho, uno de los principales desafíos que enfrentan los programadores principiantes es
decidir qué clases definir para realizar el trabajo de su programa. Si bien es difícil encontrar prescripciones generales, existen algunas reglas generales que podemos aplicar
al determinar cómo diseñar nuestras clases:

1. Responsibilities:

Divida el trabajo entre diferentes actores, cada uno con una
responsabilidad diferente. Intente describir las responsabilidades utilizando verbos de acción. Estos
actores formarán las clases del programa.

2. Independence:

Defina el trabajo de cada clase para que sea lo más independiente posible de las otras clases. Subdivida las responsabilidades entre las clases de modo que cada una tenga autonomía sobre algún aspecto del programa. Entregue datos (como variables de instancia) a la clase que tiene jurisdicción sobre las acciones que requieren acceso a estos datos.

3. Behaviors:

Defina los comportamientos de cada clase con cuidado y precisión, de modo que las consecuencias de cada acción realizada por una clase sean bien entendidas por otras clases que interactúan con ella. Estos comportamientos definirán los métodos que esta clase ejecuta, y el conjunto de comportamientos para una clase es la interfaz con la clase, ya que estos forman los medios para que otras piezas de código interactúen con los objetos de la clase.

La definición de las clases, junto con sus variables de instancia y métodos, es fundamental
para el diseño de un programa orientado a objetos. Un buen programador desarrollará naturalmente
una mayor habilidad para realizar estas tareas con el tiempo, a medida que la experiencia le enseñe
a detectar patrones en los requisitos de un programa que coinciden con patrones que ha visto antes.

Una herramienta común para desarrollar un diseño inicial de alto nivel para un proyecto es el
uso de tarjetas CRC. Las tarjetas Clase-Responsabilidad-Colaborador (CRC) son simples tarjetas de índice que subdividen el trabajo requerido de un programa. La idea principal detrás de esta
herramienta es que cada tarjeta represente un componente, que finalmente se convertirá en una
clase en el programa. Escribimos el nombre de cada componente en la parte superior de una tarjeta de índice. En el lado izquierdo de la tarjeta, comenzamos a escribir las responsabilidades para este componente. En el lado derecho, enumeramos los colaboradores para este componente, es decir, los otros componentes con los que este componente tendrá que interactuar para
realizar sus tareas.

El proceso de diseño itera a través de un ciclo de acción/actor, donde primero identificamos una acción (es decir, una responsabilidad) y luego determinamos un actor (es decir, un
componente) que es el más adecuado para realizar esa acción. El diseño está completo cuando hemos asignado todas las acciones a los actores. Al utilizar fichas para este proceso (en lugar de hojas de papel más grandes), nos basamos en el hecho de que cada componente debe tener un conjunto pequeño de
responsabilidades y colaboradores. Hacer cumplir esta regla ayuda a mantener manejables las clases individuales.

A medida que el diseño toma forma, un enfoque estándar para explicar y documentar el
diseño es el uso de diagramas UML (lenguaje de modelado unificado) para expresar la
organización de un programa. Los diagramas UML son una notación visual estándar para expresar diseños de
software orientados a objetos. Hay varias herramientas asistidas por computadora disponibles para
construir diagramas UML. Un tipo de figura UML se conoce como diagrama de clases. Un
ejemplo de un diagrama de este tipo se da en la Figura 2.3, para una clase que representa una
tarjeta de crédito de consumo. El diagrama tiene tres partes, la primera designa el
nombre de la clase, la segunda designa las variables de instancia recomendadas y la tercera designa los métodos recomendados de la clase. En la Sección 2.2.3,
analizamos nuestras convenciones de nomenclatura y, en la Sección 2.3.1, proporcionamos una implementación completa
de una clase CreditCard de Python basada en este diseño.

```
Class: CreditCard

Fields:
_customer
_bank
_account
_balance
limit


Behaviors:
get_customer( )
get_bank( )
get_account( )
make_payment(amount)
get_balance( )
get_limit( )
charge(price)

```

Como paso intermedio antes de la implementación de un diseño, a menudo se les pide a los programadores que describan algoritmos de una manera que esté pensada solo para ojos humanos.
Estas descripciones se denominan pseudocódigo. El pseudocódigo no es un programa de computadora,
pero es una prosa más estructurada que la habitual. Es una mezcla de lenguaje natural y construcciones de programación de
alto nivel que describen las ideas principales detrás de una implementación genérica de una estructura de datos o algoritmo. Debido a que el pseudocódigo está diseñado
para un lector humano, no para una computadora, podemos comunicar ideas de alto nivel, sin tener que cargar con detalles de implementación de bajo nivel. Al mismo tiempo, no debemos pasar por alto pasos importantes. Como muchas formas de comunicación humana, encontrar
el equilibrio adecuado es una habilidad importante que se perfecciona con la práctica.
En este libro, nos basamos en un estilo de pseudocódigo que esperamos que sea evidente para los programadores de Python, pero con una mezcla de notaciones matemáticas y prosa en inglés.
Por ejemplo, podríamos usar la frase “indicar un error” en lugar de una declaración formal de aumento. Siguiendo las convenciones de Python, nos basamos en la sangría para indicar
la extensión de las estructuras de control y en una notación de indexación en la que las entradas de una
secuencia A con longitud n se indexan de (A[0] a A[n − 1]). Sin embargo, elegimos
encerrar los comentarios entre llaves { como estas } en nuestro pseudocódigo, en lugar de usar el carácter # de Python.


Estilo de codificación y documentación

Los programas deben ser fáciles de leer y comprender. Por lo tanto, los buenos programadores deben tener en cuenta su estilo de codificación y desarrollar un estilo que comunique los aspectos importantes del diseño de un programa tanto para los humanos como para las computadoras. Las convenciones para el estilo de codificación tienden a variar entre las diferentes comunidades de programación.

Los principios principales que adoptamos son los siguientes:

1. Los bloques de código de Python suelen tener una sangría de 4 espacios. Sin embargo, para evitar que nuestros fragmentos de código sobrepasen los márgenes del libro, utilizamos 2 espacios para cada nivel de sangría. Se recomienda encarecidamente evitar las tabulaciones, ya que las tabulaciones se muestran con anchos diferentes en los distintos sistemas y el intérprete de Python no considera las tabulaciones y los espacios como idénticos. Muchos editores compatibles con Python reemplazarán automáticamente las tabulaciones con una cantidad apropiada de espacios.

2. Utilice nombres significativos para los identificadores. Intente elegir nombres que se puedan leer
en voz alta y que reflejen la acción, la responsabilidad o los datos que cada identificador
está nombrando.

a. Las clases (excepto las clases integradas de Python) deben tener un nombre que
sirva como sustantivo singular y debe escribirse con mayúscula (p. ej., Date en lugar de date o Dates). Cuando se concatenan varias palabras para formar un
nombre de clase, deben seguir la convención denominada “CamelCase”
en la que la primera letra de cada palabra se escribe con mayúscula (p. ej., CreditCard).

b. Las funciones, incluidas las funciones miembro de una clase, deben escribirse con minúscula.
Si se combinan varias palabras, deben separarse con guiones bajos (p. ej., make_payment). El nombre de una función normalmente
debe ser un verbo que describa su efecto. Sin embargo, si el único propósito de la
función es devolver un valor, el nombre de la función puede ser un sustantivo que
describe el valor (por ejemplo, sqrt en lugar de calculate_sqrt).

c. Los nombres que identifican un objeto individual (por ejemplo, un parámetro, una variable de instancia o una variable local) deben ser sustantivos en minúscula (por ejemplo, precio).
Ocasionalmente, nos desviamos de esta regla cuando usamos una sola letra mayúscula para designar el nombre de una estructura de datos (como el árbol T).

d. Los identificadores que representan un valor considerado como una constante se identifican tradicionalmente usando todas las letras mayúsculas y con guiones bajos para separar las palabras (por ejemplo, MAX_SIZE).

Recuerde de nuestra discusión sobre encapsulación que los identificadores en cualquier contexto
que comienzan con un solo guión bajo inicial (por ejemplo, secreto) tienen la intención de
sugerir que son solo para uso "interno" de una clase o módulo, y no parte
de una interfaz pública.

1. Use comentarios que agreguen significado a un programa y expliquen construcciones ambiguas o
confusas. Los comentarios en línea son buenos para explicaciones rápidas;
se indican en Python después del carácter #, como en

```
si n % 2 == 1:
# n es impar

```
Los comentarios de bloque de varias líneas son buenos para explicar secciones de código más complejas. En Python, técnicamente son literales de cadena de varias líneas, típicamente delimitados con comillas triples ("""), que no tienen efecto cuando se ejecutan. En la
siguiente sección, analizamos el uso de comentarios de bloque para la documentación.

```
def scale(data, factor):
”””Multiply all entries of numeric data list by the given factor.”””
	for j in range(len(data)):
		data[j] = factor

```

Python proporciona soporte integrado para incorporar documentación formal directamente
en el código fuente mediante un mecanismo conocido como docstring. Formalmente, cualquier literal de cadena
que aparezca como la primera declaración dentro del cuerpo de un módulo, clase o función
(incluida una función miembro de una clase) se considerará un docstring. Por
convención, esos literales de cadena deben estar delimitados entre comillas triples (“””). Como
ejemplo, nuestra versión de la función de escala de la página 25 podría documentarse
de la siguiente manera:

Es común usar el delimitador de cadena entre comillas triples para un docstring, incluso cuando
la cadena cabe en una sola línea, como en el ejemplo anterior. Los docstrings más detallados
deben comenzar con una sola línea que resuma el propósito, seguida de una línea en blanco y luego más detalles. Por ejemplo, podríamos documentar más claramente la
función de escala de la siguiente manera:

```
def scale(data, factor):
”””Multiply all entries of numeric data list by the given factor.

data an instance of any mutable sequence type (such as a list) containing numeric elements

factor a number that serves as the multiplicative factor for scaling
”””
	for j in range(len(data)):
		data[j] = factor

```

Un docstring se almacena como un campo del módulo, función o clase en el que se declara. Sirve como documentación y se puede recuperar de diversas maneras.
Por ejemplo, el comando help(x), dentro del intérprete de Python, produce la
documentación asociada con el objeto identificado x. Una herramienta externa llamada
pydoc se distribuye con Python y se puede utilizar para generar documentación formal
como texto o como una página web. Las pautas para la creación de cadenas de documentación útiles están disponibles
en:

```
http://www.python.org/dev/peps/pep-0257/

```

En este libro, intentaremos presentar cadenas de documentación cuando el espacio lo permita. Las cadenas de documentación omitidas se pueden encontrar en la versión en línea de nuestro código fuente.


### Testing and Debugging

### Pruebas

Un plan de pruebas cuidadoso es una parte esencial de la escritura de un programa. Si bien verificar la
corrección de un programa sobre todas las entradas posibles suele ser inviable, debemos
intentar ejecutar el programa en un subconjunto representativo de entradas. Como mínimo, debemos asegurarnos de que cada método de una clase se pruebe al menos una vez
(cobertura de métodos). Mejor aún, cada declaración de código en el programa debe
ejecutarse al menos una vez (cobertura de declaraciones).
Los programas suelen fallar en casos especiales de la entrada. Dichos casos deben identificarse y probarse
cuidadosamente. Por ejemplo, al probar un método que ordena (es decir, pone en orden) una secuencia de números enteros, debemos considerar las siguientes entradas:

1. La secuencia tiene longitud cero (sin elementos).
2. La secuencia tiene un elemento.
3. Todos los elementos de la secuencia son iguales.
4. La secuencia ya está ordenada.
5. La secuencia está ordenada de forma inversa.

Además de las entradas especiales al programa, también debemos considerar condiciones
especiales para las estructuras que utiliza el programa. Por ejemplo, si utilizamos una lista de Python para almacenar
datos, debemos asegurarnos de que los casos límite, como la inserción o eliminación al principio o al final de la lista, se gestionen adecuadamente.
Si bien es esencial utilizar conjuntos de pruebas hechos a mano, también es ventajoso
ejecutar el programa en una gran colección de entradas generadas aleatoriamente. El módulo aleatorio de Python proporciona varios medios para generar números aleatorios o para aleatorizar el orden de las colecciones.
Las dependencias entre las clases y funciones de un programa inducen una jerarquía. Es decir, un componente A está por encima de un componente B en la jerarquía si A
depende de B, como cuando la función A llama a la función B o la función A depende de un parámetro que es una instancia de la clase B. Hay dos estrategias de prueba principales, de arriba hacia abajo y de abajo hacia arriba, que difieren en el orden en el que se prueban los componentes.
Las pruebas descendentes se realizan desde la parte superior hasta la inferior de la jerarquía del programa.
Normalmente se utilizan junto con el stubbing, una técnica de arranque que
reemplaza un componente de nivel inferior con un stub, un reemplazo del componente
que simula la funcionalidad del original. Por ejemplo, si la función A llama a la función B para obtener la primera línea de un archivo, al probar A podemos reemplazar B con un stub
que devuelve una cadena fija.


### Pruebas

Un plan de pruebas cuidadoso es una parte esencial de la escritura de un programa. Si bien verificar la
corrección de un programa sobre todas las entradas posibles suele ser inviable, debemos
intentar ejecutar el programa en un subconjunto representativo de entradas. Como mínimo, debemos asegurarnos de que cada método de una clase se pruebe al menos una vez
(cobertura de métodos). Mejor aún, cada declaración de código en el programa debe
ejecutarse al menos una vez (cobertura de declaraciones).
Los programas suelen fallar en casos especiales de la entrada. Dichos casos deben identificarse y probarse
cuidadosamente. Por ejemplo, al probar un método que ordena (es decir, pone en orden) una secuencia de números enteros, debemos considerar las siguientes entradas:

1. La secuencia tiene longitud cero (sin elementos).
2. La secuencia tiene un elemento.
3. Todos los elementos de la secuencia son iguales.
4. La secuencia ya está ordenada.
5. La secuencia está ordenada de forma inversa.

Además de las entradas especiales al programa, también debemos considerar condiciones
especiales para las estructuras que utiliza el programa. Por ejemplo, si utilizamos una lista de Python para almacenar
datos, debemos asegurarnos de que los casos límite, como la inserción o eliminación al principio o al final de la lista, se gestionen adecuadamente.
Si bien es esencial utilizar conjuntos de pruebas hechos a mano, también es ventajoso
ejecutar el programa en una gran colección de entradas generadas aleatoriamente. El módulo aleatorio de Python proporciona varios medios para generar números aleatorios o para aleatorizar el orden de las colecciones.
Las dependencias entre las clases y funciones de un programa inducen una jerarquía. Es decir, un componente A está por encima de un componente B en la jerarquía si A
depende de B, como cuando la función A llama a la función B o la función A depende de un parámetro que es una instancia de la clase B. Hay dos estrategias de prueba principales, de arriba hacia abajo y de abajo hacia arriba, que difieren en el orden en el que se prueban los componentes.
Las pruebas descendentes se realizan desde la parte superior hasta la inferior de la jerarquía del programa.
Normalmente se utilizan junto con el stubbing, una técnica de arranque que
reemplaza un componente de nivel inferior con un stub, un reemplazo del componente
que simula la funcionalidad del original. Por ejemplo, si la función A llama a la función B para obtener la primera línea de un archivo, al probar A podemos reemplazar B con un stub
que devuelve una cadena fija.

Las pruebas ascendentes proceden de los componentes de nivel inferior a los de nivel superior. Por ejemplo, las funciones de nivel inferior, que no invocan otras funciones,
se prueban primero, seguidas de las funciones que solo invocan funciones de nivel inferior, y así sucesivamente. De manera similar, una clase que no depende de ninguna otra clase se puede probar
antes que otra clase que depende de la primera. Esta forma de prueba se describe generalmente como prueba unitaria, ya que la funcionalidad de un componente específico se prueba de forma aislada del proyecto de software más grande. Si se usa correctamente, esta estrategia aísla mejor
la causa de los errores del componente que se está probando, ya que los componentes de nivel inferior en los que se basa ya deberían haber sido probados exhaustivamente.
Python proporciona varias formas de soporte para pruebas automatizadas. Cuando se definen funciones o clases en un módulo, las pruebas para ese módulo se pueden incrustar
en el mismo archivo. El mecanismo para hacerlo se describió en la Sección 1.11. Código
que está protegido en una construcción condicional de la forma

```
if__name__ == '__main__':
# perform tests...

```

se ejecutará cuando se invoque Python directamente en ese módulo, pero no cuando el
módulo se importe para su uso en un proyecto de software más grande. Es común colocar pruebas
en una construcción de este tipo para probar la funcionalidad de las funciones y clases
específicamente definidas en ese módulo.
El módulo unittest de Python proporciona un soporte más sólido para la automatización de pruebas unitarias. Este marco permite agrupar casos de prueba individuales en
conjuntos de pruebas más grandes y brinda soporte para ejecutar esos conjuntos e informar o
analizar los resultados de esas pruebas. A medida que se realiza el mantenimiento del software, se utiliza el acto de pruebas de regresión, mediante el cual se vuelven a ejecutar todas las pruebas anteriores para garantizar que los cambios en el
software no introduzcan nuevos errores en los componentes probados anteriormente.


### Depuración

La técnica de depuración más simple consiste en utilizar instrucciones de impresión para rastrear los
valores de las variables durante la ejecución del programa. Un problema con este enfoque es que, eventualmente, las instrucciones de impresión deben eliminarse o comentarse, de modo que no se ejecuten cuando el software finalmente se lanza.
Un enfoque mejor es ejecutar el programa dentro de un depurador, que es un entorno especializado para controlar y monitorear la ejecución de un programa. La
funcionalidad básica proporcionada por un depurador es la inserción de puntos de interrupción dentro del
código. Cuando el programa se ejecuta dentro del depurador, se detiene en cada punto de interrupción. Mientras el programa está detenido, se puede inspeccionar el valor actual de las variables.
La distribución estándar de Python incluye un módulo llamado pdb, que proporciona soporte de depuración directamente dentro del intérprete. La mayoría de los IDE para Python, como IDLE, proporcionan entornos de depuración con interfaces gráficas de usuario.
