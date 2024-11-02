# Interprete

"""
En Unix se instala en /usr/local/bin/python3.6

O en /usr/local/python/...

En Windows se instala en C:\python3.6

Para salir usamos ctrl+d para Unix o ctrl+z para Windows (o ingresando : quit())


"""

# ejecutando python3.7 entrará en el interprete 


"""
Las características para editar líneas del intérprete incluyen edición interactiva, sustitución usando el historial y completado
de código en sistemas que soportan readline.

cuando se la llama con la entrada estándar
conectada a una terminal lee y ejecuta comandos en forma interactiva;

Control+P en el primer prompt de Python que aparezca. Si se escucha un beep, las características
están presentes;

Si
no pasa nada, o si aparece ^P, estas características no están disponibles; solo vas a poder usar backspace para borrar los
caracteres de la línea actual.

cuando es llamada con un nombre de archivo como
argumento o con un archivo como entrada estándar, lee y ejecuta un script del archivo.

"""

# Otra forma de llamar al interprete:
# python -c comando [arg]

"""
ejecuta las sentencias en comando,
similar a la opción -c de la línea de comandos. Ya que las sentencias de Python suelen tener espacios en blanco u otros
caracteres que son especiales en la línea de comandos, es normalmente recomendado citar comando entre comillas dobles.

Algunos módulos de Python son también útiles como scripts.

"""

# Invocar modulos como scripts
# python -m module [arg]

"""
ejecuta el código de module como si se hubiese ingresado su nombre completo en la línea de comandos.

"""

# Script y Modo Interactivo
# pasándole la opción -i antes del nombre del script.



# Argumentos

"""
Cuando son conocidos por el intérprete, el nombre del script y los argumentos adicionales son entonces convertidos a una
lista de cadenas de texto asignada a la variable argv del módulo sys.

"""

# import sys

"""
El
largo de esta lista es al menos uno; cuando ningún script o argumentos son pasados, sys.argv[0] es una cadena vacía.
Cuando se pasa el nombre del script con '-' (lo que significa la entrada estándar), sys.argv[0] vale '-'. Cuando se usa
-c command, sys.argv[0] vale '-c'. Cuando se usa -m module, sys.argv[0] toma el valor del nombre completo del
módulo. Las opciones encontradas luego de -c command o -m module no son consumidas por el procesador de opciones de
Python pero de todas formas almacenadas en sys.argv para ser manejadas por el comando o módulo.

"""



# Modo Interactivo

"""
Se dice que estamos usando el intérprete en modo interactivo, cuando los comandos son leídos desde una terminal.
En este modo espera el siguiente comando con el prompt primario, usualmente tres signos mayor-que (>>>);
para las líneas de continuación espera con el prompt secundario, por defecto tres puntos (...).
son necesarias cuando queremos ingresar un constructor multilínea.

"""
el_mundo_es_plano = True
if el_mundo_es_plano:
    print("¡Tené cuidado de no caerte!")

#¡Tené cuidado de no caerte!



# Intérprete y su entorno
    
# Codificación del Código fuente

"""
Por default, los archivos fuente de Python son tratados como codificados en UTF-8.
los caracteres de la mayoría de los lenguajes del mundo pueden ser usados simultáneamente en literales, identificadores y comentarios, a pesar
de que la biblioteca estándar usa solamente caracteres ASCII para los identificadores, una convención que debería seguir
cualquier código que sea portable.

Para mostrar estos caracteres correctamente, tu editor debe reconocer que el archivo
está en UTF-8 y usar una tipografía que soporte todos los careacteres del archivo.

Para especificar una codificación distinta de la por defecto, un línea de comentario especial debe ser agregada como la
primera línea del archivo.

"""
# -*- coding: encoding -*-

"""
encoding es uno de los codecs válidos soportados por Python.

para indicar que el encoding Windows-1252 es el usado, la primera línea de tu código fuente debe ser:
"""
# -*- coding: cp-1252 -*-

"""
Una excepción a la regla de la primera línea es cuando el código fuente comienza con UNIX "shebang" line. En este caso, la
declaración del encoding debe ser agregada como la segunda línea del archivo. Por ejempo:

"""
#!/usr/bin/env python3
# -*- coding: cp-1252 -*-


# Comentarios
"""
comienzan con el carácter numeral, #, y se extienden hasta el final físico de la línea.
no dentro de una cadena de caracteres.
Un carácter numeral dentro de una cadena de caracteres es sólo un carácter numeral.

son para aclarar código y no son interpretados por Python
"""

spam = 1
text = "# Este no es un comentario"
print(text)



# Operaciones en el interprete

# Números

"""
podés ingresar una expresión y este escribirá los valores.
los operadores +, -, * y /
los paréntesis (()) pueden ser usados para agrupar.

"""

2 + 2
50 - 5*6
(50 - 5*6) / 4
8 / 5
# la división simpre retorna un número de punto flotante

"""
Los números enteros (por ejemplo 2, 4, 20) son de tipo int,
aquellos con una parte fraccional (por ejemplo 5.0, 1.6) son
de tipo float.

La división (/) siempre retorna un punto flotante.
Para hacer floor division (entera) y obtener un resultado entero
descartando cualquier resultado fraccional podés usar el operador //
para calcular el resto podés usar %:

"""
17 / 3 # la división clásica retorna un punto flotante
#5.666666666666667

17 // 3 # la división entera descarta la parte fraccional
#5

17 % 3 # el operado % retorna el resto de la división
#2

5 * 3 + 2 # resultado * divisor + resto = dividendo
#17

"""
operador ** para calcular potencias

"""
5 ** 2 # 5 al cuadrado
#25
2 ** 7 # 2 a la potencia de 7
#128


"""
El signo igual (=) es usado para asignar un valor a una variable.

"""
ancho = 20
largo = 5 * 9
ancho * largo
#900


"""
Hay soporte completo de punto flotante;
operadores con operando mezclados convertirán los enteros a punto flotante:

"""
4 * 3.75 - 1
#14.0


"""
En el modo interactivo, la última expresión impresa es asignada a la variable _.
es más fácil seguir calculando,

"""
impuesto = 12.5 / 100
precio = 100.50
precio * impuesto
#12.5625

precio + _
#113.0625

round(_, 2)
#113.06


"""
Esta variable debería ser tratada como de sólo lectura por el usuario. No le asignes explícitamente un valor; crearás una
variable local independiente con el mismo nombre enmascarando la variable con el comportamiento mágico.

"""
3+2
#5

a  = _

2+a
#7.0



#Cadenas de caracteres

"""
pueden ser expresadas de distintas formas.
comillas simples ('...') o dobles ("...")
\ puede ser usado para escapar comillas

"""
'huevos y pan' # comillas simples
#'huevos y pan'

'doesn\'t' # usa \' para escapar comillas simples...
#"doesn't"

"doesn't" # ...o de lo contrario usa comillas doblas
#"doesn't"
'"Si," le dijo.'
#'"Si," le dijo.'
"\"Si,\" le dijo."
#'"Si," le dijo.'
'"Isn\'t," she said.'
#'"Isn\'t," she said.'

"""
La función print() produce una salida más legible, omitiendo las
comillas que la encierran e imprimiendo caracteres especiales y escapados:

En el interprete se ven las comillas que rodean la cadena

"""

'"Isn\'t," she said.'
#'"Isn\'t," she said.'

print('"Isn\'t," she said.')
#"Isn't," she said.

s = 'Primerea línea.\nSegunda línea.' # \n significa nueva línea
s # sin print(), \n es incluído en la salida
#'Primera línea.\nSegunda línea.'

print(s) # con print(), \n produce una nueva línea
#Primera línea.
#Segunda línea.


# Cadenas Crudas

"""
Si no querés que los caracteres antepuestos por \ sean interpretados como caracteres especiales,
agregando una r antes de la primera comilla:
"""
print('C:\algun\nombre') # aquí \n significa nueva línea!
#C:\algun
ombre

print(r'C:\algun\nombre') # nota la r antes de la comilla
#C:\algun\nombre


# Literales, Multiples Lineas

"""
triple comillas: """...""" o
'''...'''.

Los fin de línea son incluídos automáticamente,

pero es posible prevenir esto agregando una \ al final de la
línea.

"""
print("""\
Uso: algo [OPTIONS]
    -h                      Muestra el mensaje de uso
    -H nombrehost           Nombre del host al cual conectarse
""")

#Podriamos eliminar \ de print


#Cadenas concatenadas (+) y repetidas (*)

'''3 veces 'un', seguido de 'ium'''
3 * 'un' + 'ium'
#'unununium'


"""
Dos o más cadenas literales (aquellas encerradas entre comillas) una al lado de la otra son automáticamente concatenadas:

Esto solo funciona con dos literales, no con variables ni expresiones:
"""
'Py' 'thon'
#'Python'

>>> prefix = 'Py'
>>> prefix 'thon' # no se puede concatenar una variable y una cadena literal
...
SyntaxError: invalid syntax
>>> ('un' * 3) 'ium'
...
SyntaxError: invalid syntax
    

"""
concatenar variables o una variable con un literal, usá +:
"""
>>> prefix + 'thon'
'Python'


"""
separar cadenadas largas:

"""
>>> texto = ('Poné muchas cadenas dentro de paréntesis '
...
'para que ellas sean unidas juntas.')

>>> texto
'Poné muchas cadenas dentro de paréntesis para que ellas sean unidas juntas.'


"""
Las cadenas de texto se pueden indexar (subíndices),
el primer carácter de la cadena tiene el índice 0
No hay un tipo de dato para los caracteres
un carácter es simplemente una cadena de longitud uno:

"""
>>> palabra = 'Python'
>>> palabra[0] # caracter en la posición 0
'P'
>>> palabra[5] # caracter en la posición 5
'n'

"""
Indices negativos, para empezar a contar desde la derecha:

"""
>>> palabra[-1] # último caracter
'n'
>>> palabra[-2] # ante último caracter 
'o'
>>> palabra[-6]
'P'

"""
-0 es lo mismo que 0, los índice negativos comienzan desde -1.

"""


# Slices
"""
Mientras que los índices son usados para obtener caracteres individuales,
las rebanadas te permiten obtener sub-cadenas:
"""
>>> palabra[0:2] 
'Py'
# caracteres desde la posición 0 (incluída) hasta la 2 (excluída)

>>> palabra[2:5]
'tho'
# caracteres desde la posición 2 (incluída) hasta la 5 (excluída)


"""
Nota como el primero es siempre incluído, y que el último es siempre excluído. Esto asegura que s[:i] + s[i:] siempre
sea igual a s:
"""
>>> palabra[:2] + palabra[2:]
'Python'
>>> palabra[:4] + palabra[4:]
'Python'


"""
Los índices de las rebanadas tienen valores por defecto útiles; el valor por defecto para el primer índice es cero, el valor por
defecto para el segundo índice es la longitud de la cadena a rebanar.
"""
>>> palabra[:2] # caracteres desde el principio hasta la posición 2 (excluída)
'Py'
>>> palabra[4:] # caracterrs desde la posición 4 (incluída) hasta el final
'on'
>>> palabra[-2:] # caracteres desde la ante-última (incluída) hasta el final
'on'


"""
pensar en los índices como puntos entre caracteres, con el punto a
la izquierda del primer carácter numerado en 0.
Luego, el punto a la derecha del último carácter de una cadena de n
caracteres tienen índice n,

"""
+---+---+---+---+---+---+
| P | y | t | h | o | n |
+---+---+---+---+---+---+
0   1   2   3   4   5   6

-6 -5 -4 -3 -2 -1

"""
Intentar usar un índice que es muy grande resultará en un error:

"""
>>> palabra[42] # la palabra solo tiene 6 caracteres
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
IndexError: string index out of range


"""
Las cadenas de Python no pueden ser modificadas -- son immutable. Por eso, asignar a una posición indexada de la cadena
resulta en un error:
"""
>>> palabra[0] = 'J'
...
TypeError: 'str' object does not support item assignment
>>> palabra[2:] = 'py'
...
TypeError: 'str' object does not support item assignment


"""
Si necesitás una cadena diferente, deberías crear una nueva:
"""
>>> 'J' + palabra[1:]
'Jython'
>>> palabra[:2] + 'py'
'Pypy'


"""
La función incorporada len() devuelve la longitud de una cadena de texto:
"""
>>> s = 'supercalifrastilisticoespialidoso'
>>> len(s)
33


"""
Tipos integrados:
Las cadenas de texto son ejemplos de tipos secuencias, y soportan las operaciones comunes para esos tipos.

Tipos integrados:
Las cadenas de texto soportan una gran cantidad de métodos para transformaciones básicas y búsqueda.

f-strings:
Literales de cadena que tienen expresiones embebidas.

formatstrings:
Aquí se da información sobre formateo de cadenas de texto con str.format().

Tipos integrados:
Aquí se describe con más detalle las operaciones viejas para formateo usadas cuando una cadena de texto están a
la izquierda del operador %.

"""


# Listas

"""
tipos de datos compuestos,
para agrupar otros valores.
pueden contener ítems de
diferentes tipos, pero usualmente los ítems son del mismo tipo:

"""
>>> cuadrados = [1, 4, 9, 16, 25]
>>> cuadrados
[1, 4, 9, 16, 25]


"""
las listas pueden ser indexadas y rebanadas:

"""
cuadrados[0] # índices retornan un ítem
1

cuadrados[-1]
25

cuadrados[-3:] # rebanadas retornan una nueva lista
[9, 16, 25]


"""
Todas las operaciones de rebanado devuelven una nueva lista conteniendo los elementos pedidos.

"""
cuadrados[:]
[1, 4, 9, 16, 25]


"""
Las listas también soportan operaciones como concatenación:

"""
cuadrados + [36, 49, 64, 81, 100]
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


"""
A diferencia de las cadenas de texto, que son immutable,
las listas son un tipo mutable, es posible cambiar un su contenido:

"""
>>> cubos = [1, 8, 27, 65, 125] # hay algo mal aquí
>>> 4 ** 3 # el cubo de 4 es 64, no 65!
64

>>> cubos[3] = 64 # reemplazar el valor incorrecto
>>> cubos
[1, 8, 27, 64, 125]


"""
podés agregar nuevos ítems al final de la lista
usando el método append()

"""
cubos.append(216) # agregar el cubo de 6
cubos.append(7 ** 3) # y el cubo de 7
cubos
[1, 8, 27, 64, 125, 216, 343]


"""
Es posible asignar a una rebanada, y esto incluso puede
cambiar la longitud de la lista o vaciarla totalmente:

"""
>>> letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
>>> letras
['a', 'b', 'c', 'd', 'e', 'f', 'g']
>>> # reemplazar algunos valores
>>> letras[2:5] = ['C', 'D', 'E']
>>> letras
['a', 'b', 'C', 'D', 'E', 'f', 'g']
>>> # ahora borrarlas
>>> letras[2:5] = []
>>> letras
['a', 'b', 'f', 'g']
>>> # borrar la lista reemplzando todos los elementos por una lista vacía
>>> letras[:] = []
>>> letras
[]


"""
La función predefinida len()

"""
>>> letras = ['a', 'b', 'c', 'd']
>>> len(letras)
4


"""
anidar listas (crear listas que contengan otras listas),
"""
>>> a = ['a', 'b', 'c']
>>> n = [1, 2, 3]
>>> x = [a, n]
>>> x
[['a', 'b', 'c'], [1, 2, 3]]
>>> x[0]
['a', 'b', 'c']
>>> x[0][1]
'b'



# Programación

# Series de Fibonacci:
# la suma de dos elementos define el siguiente
a, b = 0, 1    #b=1, a=0
while b < 10:  #b1 entra
    print(b)   
    a, b = b, a+b #a=b (a se rescribe localmente), b=b+b 

"""
La primer línea contiene una asignación múltiple:

las variables a y b toman en forma simultanea los nuevos valores 0 y
1.

las expresiones a la derecha son evaluadas antes de que
suceda cualquier asignación.
Las expresiones a la derecha son evaluadas de izquierda a derecha.

"""

"""
bucle while se ejecuta mientras la condición (aquí: b < 10) sea verdadera.
En Python, como en C, cualquier
entero distinto de cero es verdadero; cero es falso.

La condición también puede ser una cadena de texto o una lista,
cualquier secuencia; cualquier cosa con longitud distinta de cero es verdadero,
las secuencias vacías son falsas

Los operadores estándar de comparación
C: < (menor qué), > (mayor qué), == (igual a), <= (menor o igual qué), >= (mayor o igual qué) y
!= (distinto a).

la sangría es la forma que usa Python para agrupar declaraciones

"""


""" 
print() escribe el valor de el o los argumentos que se le pasan.

Difiere de simplemente escribir la
expresión que se quiere mostrar

en la forma en que maneja
múltiples argumentos, cantidades en punto flotante, y cadenas.

"""
>>> i = 256*256
>>> print('El valor de i es', i)
El valor de i es 65536


"""
El parámetro nombrado end puede usarse para evitar el salto de linea al final de la salida, o terminar la salida con una
cadena diferente:

"""
>>> a, b = 0, 1
>>> while b < 1000:
        print(b, end=',')
        a, b = b, a+b
...
1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,


"""
Debido a que ** tiene mayor precedencia que -, -3**2 será interpretado como -(3**2) y eso da como
resultado -9. Para evitar esto y obtener 9, podés usar (-3)**2.

"""



# Control de Flujo/Sentencias

# If

x = int(input("Ingresa un entero, por favor: "))
Ingresa un entero, por favor: 42

if x < 0:
    x = 0
    print('Negativo cambiado a cero')
elif x == 0:
    print('Cero')
elif x == 1:
    print('Simple')
else:
    print('Más')

'Mas'


"""
Puede haber cero o más bloques elif, y el bloque else es opcional.
'elif' es una abreviación de
'else if', y es útil para evitar un sangrado excesivo.

Una secuencia if ... elif ... elif ... sustituye las sentencias switch o
case encontradas en otros lenguajes

"""


# For

"""
En lugar de siempre iterar sobre una progresión aritmética de números (como en Pascal)
o darle al usuario la posibilidad de definir tanto el paso de la iteración como la condición de fin (como en C)
for de Python itera sobre los ítems de
cualquier secuencia (una lista o una cadena de texto), en el orden que aparecen en la secuencia.

"""
# Midiendo cadenas de texto
palabras = ['gato', 'ventana', 'defenestrado']

for p in palabras:
    print(p, len(p))

gato 4
ventana 7
defenestrado 12


"""
Si necesitás modificar la secuencia sobre la que estás iterando mientras estás adentro del ciclo
(por ejemplo para borrar algunos ítems)
se recomienda que hagas primero una copia.

Iterar sobre una secuencia no hace implícitamente una copia.
La notación de rebanada es especialmente conveniente para esto:

"""
for p in palabras[:]: # hace una copia por rebanada de toda la lista
    if len(p) > 6:
        palabras.insert(0, p)

palabras
['defenestrado', 'ventana', 'gato', 'ventana', 'defenestrado']



# range()
"""
Si se necesita iterar sobre una secuencia de números,
es apropiado utilizar la función integrada range(),
la cual genera progresiones aritméticas

"""
for i in range(5):
    print(i)
    
0
1
2
3
4


"""
El valor final dado nunca es parte de la secuencia; range(10) genera 10 valores,
los índices correspondientes para los
ítems de una secuencia de longitud 10.

Es posible hacer que el rango empiece con otro número,
o especificar un incremento diferente
(incluso negativo; algunas veces se lo llama 'paso'):

"""
range(5, 10)
5 through 9

range(0, 10, 3)
0, 3, 6, 9

range(-10, -100, -30)
-10, -40, -70


"""
Para iterar sobre los índices de una secuencia
podés combinar range() y len() así:

"""
a = ['Mary', 'tenia', 'un', 'corderito']

for i in range(len(a)):
    print(i, a[i])

0 Mary
1 tenia
2 un
3 corderito


"""
En la mayoría de los casos, sin embargo, conviene usar
conviene usar la función enumerate(), como técnica de iteración

"""


"""
Algo extraño sucede si mostrás un range:

"""
print(range(10))
#range(0, 10)

"""
el objeto devuelto por range() se comporta como si fuera una lista,
Es un objeto que devuelve los ítems sucesivos
de la secuencia deseada cuando iterás sobre él

pero realmente no construye la lista,
ahorrando entonces espacio.

Decimos que tal objeto es iterable;
que se lo puede usar en funciones y construcciones
que esperan algo de lo cual obtener ítems sucesivos hasta que se termine.

que esperan algo de lo cual
obtener ítems sucesivos hasta que se termine.

for es un iterador en ese sentido.
La función list() es otra; crea listas a partir de iterables:

"""

list(range(5))
[0, 1, 2, 3, 4]

"""
más funciones que devuelven iterables y que toman iterables como entrada.
"""



# Las sentencias , , y en lazos
"""
break, como en C, termina el lazo for o while más anidado.
Las sentencias de lazo pueden tener una cláusula else que es ejecutada cuando el lazo termina,
luego de agotar la lista (con for) o cuando la condición se hace falsa (con while),

pero no cuando el lazo es terminado con la sentencia break.

ejemplifica en el siguiente lazo, que busca números primos:

"""

for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            print(n, 'es igual a', x, '*', n/x)
            break
    else:
    # sigue el bucle sin encontrar un factor
        print(n, 'es un numero primo')

2 es un numero primo
3 es un numero primo
4 es igual a 2 * 2
5 es un numero primo
6 es igual a 2 * 3
7 es un numero primo
8 es igual a 2 * 4
9 es igual a 3 * 3

"""
el else pertenece al ciclo for, no al if.)
Cuando se usa con un ciclo, el else tiene más en común con el else de una declaración try que con el de un if:
el else de un try se ejecuta cuando no se genera ninguna excepción,
el else de un ciclo se ejecuta cuando no hay ningún break.

"""


"""
continue, también tomada de C, continua con la siguiente iteración del ciclo:

"""

for num in range(2, 10):
    if num % 2 == 0:
    print("Encontré un número par", num)
    continue

    print("Encontré un número", num)

Encontré un número par 2
Encontré un número 3
Encontré un número par 4
Encontré un número 5
Encontré un número par 6
Encontré un número 7
Encontré un número par 8
Encontré un número 9



# pass
"""
no hace nada.
Se puede usar cuando una sentencia es requerida por la sintáxis
pero el programa no requiere ninguna acción.

"""
while True:
    pass # Espera ocupada hasta una interrupción de teclado (Ctrl+C)


"""
Se usa normalmente para crear clases en su mínima expresión:

"""
class MyEmptyClass:
    pass


"""
Otro lugar donde se puede usar pass es como una marca de lugar para una función
función o un cuerpo condicional cuando estás
trabajando en código nuevo, lo cual te permite pensar a un nivel de abstracción mayor.
"""
def initlog(*args):
    pass # Acordate de implementar esto!



# Funciones

def fib(n): # escribe la serie de Fibonacci hasta n
    """Escribe la serie de Fibonacci hasta n."""
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a+b
    print()
    
# Ahora llamamos a la funcion que acabamos de definir:
fib(2000)

"""
def se usa para definir funciones.
Debe seguirle el nombre de la función y la lista de parámetros
formales entre paréntesis.
Las sentencias que forman el cuerpo de la función empiezan en la línea siguiente, y deben estar
con sangría.

docstring: opcionalmente
esta es la cadena de texto
de documentación de la función,

Hay herramientas que usan las docstrings para producir
automáticamente documentación en línea o imprimible, o para
permitirle al usuario que navegue el código en forma interactiva; es una buena práctica incluir docstrings en el código que
uno escribe, por lo que se debe hacer un hábito de esto.
"""

"""
La ejecución de una función introduce una nueva tabla de símbolos usada para las variables locales de la función.
precisamente, todas las asignaciones de variables en la función almacenan el valor en la tabla de símbolos local;
así mismo
la referencia a variables primero mira la tabla de símbolos local,
luego en la tabla de símbolos local de las funciones
externas,
luego la tabla de símbolos global, y finalmente la tabla de nombres predefinidos.

Así, no se les puede asignar
directamente un valor a las variables globales dentro de una función
(a menos se las nombre en la sentencia global),
aunque si pueden ser referenciadas.
"""

"""
Los parámetros reales (argumentos) de una función se introducen en la tabla de símbolos local de la función llamada cuando
esta es ejecutada;
así, los argumentos son pasados por valor (dónde el valor es siempre una referencia a un objeto, no el
valor del objeto).
Cuando una función llama a otra función, una nueva tabla de símbolos local es creada para esa llamada.
"""

"""
La definición de una función introduce el nombre de la función en la tabla de símbolos actual.
El valor del nombre de la
función tiene un tipo que es reconocido por el interprete como una función definida por el usuario.
Este valor puede ser asignado a otro nombre que luego puede ser usado como una función.
Esto sirve como un mecanismo general para
renombrar:
"""

fib
#<function fib at 10042ed0>
f = fib
f(100)
#0 1 1 2 3 5 8 13 21 34 55 89

"""
Viniendo de otros lenguajes, podés objetar que fib no es una función,
sino un procedimiento, porque no devuelve un valor.
De hecho, técnicamente hablando, los procedimientos sí retornan un valor, aunque uno aburrido.

Este valor se llama None
(es un nombre predefinido).
El intérprete por lo general no escribe el valor None si va a ser el único valor escrito.
Si
realmente se quiere, se puede verlo usando la función print():
"""
fib(0)
print(fib(0))
#None


"""
Es simple escribir una función que retorne una lista
con los números de la serie de Fibonacci en lugar de imprimirlos:
"""

def fib2(n): # devuelve la serie de Fibonacci hasta n
"""Devuelve una lista conteniendo la serie de Fibonacci hasta n."""
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)
        # ver abajo
        a, b = b, a+b
    return result

f100 = fib2(100)
# llamarla

f100
# escribir el resultado
#[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

"""
demuestra algunas características más de Python:
La sentencia return devuelve un valor en una función.
return sin una expresión como argumento retorna None.
Si
se alcanza el final de una función, también se retorna None.

La sentencia result.append(a) llama a un método del objeto lista result.
Un método es una función que 'pertenece' a un objeto
se nombra obj.methodname, dónde obj es algún objeto (puede ser una expresión),
y
methodname es el nombre del método que está definido por el tipo del objeto

Distintos tipos definen distintos métodos.
Métodos de diferentes tipos pueden tener el mismo nombre
sin causar ambigüedad.

(Es posible definir tipos
de objetos propios, y métodos, usando clases, mirá Clases).
El método append() mostrado en el ejemplo está
definido para objetos lista; añade un nuevo elemento al final de la lista

En este ejemplo es equivalente a
result = result + [a], pero más eficiente.
"""

# Definir funciones con un número variable de argumentos.

"""
Hay tres formas que pueden ser combinadas.
"""

#Argumentos con valores por omisión
"""
especificar un valor por omisión para uno o más argumentos.
Esto crea una función que puede ser
llamada con menos argumentos que los que permite.
"""
def pedir_confirmacion(prompt, reintentos=4, recordatorio='Por favor, intente nuevamente!'):
    while True:
    ok = input(prompt)
    if ok in ('s', 'S', 'si', 'Si', 'SI'):
        return True
    if ok in ('n', 'no', 'No', 'NO'):
        return False
    reintentos = reintentos - 1
    if reintentos < 0:
        raise ValueError('respuesta de usuario inválida')
    print(recordatorio)

"""
Esta función puede ser llamada de distintas maneras:
pasando sólo el argumento obligatorio:
pedir_confirmacion('¿Realmente queres salir?')

pasando uno de los argumentos opcionales:
pedir_confirmacion('¿Sobreescribir archivo?', 2)

o pasando todos los argumentos:
pedir_confirmacion('¿Sobreescribir archivo?', 2, "Vamos, solo si o no!)
"""

"""
introduce la palabra reservada in, la cual prueba si
una secuencia contiene o no un determinado valor.
"""

"""
Los valores por omisión son evaluados en el momento
de la definición de la función, en el ámbito de la definición,
entonces:
imprimirá 5
"""

i = 5
def f(arg=i):
    print(arg)
i = 6
f()
#5

"""
Advertencia importante: El valor por omisión
es evaluado solo una vez.
Existe una diferencia cuando el valor por omisión
es un objeto mutable como una lista, diccionario, o instancia de la mayoría de las clases.

la siguiente función
acumula los argumentos que se le pasan en subsiguientes llamadas
"""
def f(a, L=[]):
    L.append(a)
    return L
print(f(1))
print(f(2))
print(f(3))

"""
Imprimirá:
[1]
[1, 2]
[1, 2, 3]
"""

"""
Si no se quiere que el valor por omisión sea compartido entre
subsiguientes llamadas, se pueden escribir la función así:
"""
def f(a, L=None):
if L is None:
L = []
L.append(a)
return L


# Palabras claves como argumento


