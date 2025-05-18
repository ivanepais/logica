# Codewars 

# Fundam - Py

## 1. Reversed Strings 

Cadenas Invertidas

Completa la solución de modo que invierta la cadena que se le ha pasado.

Ej: 

world -> dlrow
word -> drow 


### Problema

1. Comprensión: 

Invertir cadena/string pasada

Entrada: string

Salida: string inverso 


2. Plan: 

Caso más simple: ab -> ba 

De solución a problema: ba -> ab -> string inverso a string

Crear fórmula general 


3. Ejecución plan: seguir todos los pasos lógicos 


4. Revisión: 

verificar resultados(entrada/salida)

metodo eficiente, alternativas, aprendizaje


5. Diagrama: 

Visualización para comprenderlo 


6. Elija una estrategia: 

Según el problema, considere enfoques como fuerza bruta, divide y vencerás, algoritmos voraces, programación dinámica, etc.

Evalúa las características del problema:
¿Es necesario explorar todas las soluciones? → Fuerza bruta.
¿Se puede dividir en partes más pequeñas? → Divide y conquista.
¿Hay subproblemas repetidos? → Programación dinámica.
¿Es suficiente una solución parcial óptima? → Algoritmos voraces.
¿Hay decisiones con retroceso? → Backtracking.


7. Pseudocódigo

Pasos imperativos en lenguaje natural 

Flujo lógico de la solución sin preocuparse por la sintaxis.


8. Estructuras de datos eficiente

Matrices y Listas: Excelentes para datos secuenciales, pero ineficientes para operaciones de búsqueda (a menos que estén ordenados).
Tablas hash (Diccionarios/Mapas): Eficientes para búsquedas, inserciones y eliminaciones.
Pilas y colas: Útiles para problemas que requieren operaciones LIFO (último en entrar, primero en salir) o FIFO (primero en entrar, primero en salir).
Árboles: En particular, árboles de búsqueda binaria para una búsqueda, inserción y eliminación eficientes.
Gráficos: Para representar datos interconectados (como redes sociales u hojas de ruta).


9. Complejidad temporal 


10. Testing 


11. Recursion 

Caso base claro. 


12. Paradigma 

Imperativo: ordenes tras otras 

funcional: varias func minimas 

OOP: objeto con prop y metodos propios


13. Patrones de diseño 


14. Código 

Vars, Types

Casting: int(), float(), str()

Func: oper param

Funciones incluidas

Estructuras 

Control 

Bibliotecas


Ej: Los strings son arrays 

indice/posición, loop/for, length, check


Métodos strings: 

slicing, modify, concatenate, format, escape

join, lower, upper, replace, split, strip, starts, ends

count, capitalize


Format string: f"...{}..."

Sintax ejec: {a + (b*c)}

{'bob' if a>b 'foo'}

{fruit.upper()}


Estructuras datos: 

list, tuples, sets, dictonaries


Control flujo: 

if, else; While, for, 


Clases/obj: 


#### Strings 

index -> char (1 elem); for c in string (todos los elem)

len (value numb), stringX in string; if in string; not in 

slice : ; upper, lower

strip(): elim whitespace princ y fin

replace("a", "b"): a por b

split(","): la coma es el separador; split(): separa todos elem 

concatenation: "a"+"b", agregar whitespace si lo necesita

String format: no se puede combinar strings y numbers

f-string: f"...{var}..." y operaciones entre llaves

backslash \" \": "...\"Vikings \"... ": imprime "Vikings"

\n new line; \r: carriage return; \t tab; \b: backspace 

capitaliza(), count(), startswith/endswith(), find()

format(), index(), join()


#### Array: 

index, len, multiple types, duplicate, 

+-index; range: index:index; exist: for in 

change value: arr index:index=...

insert, append, extend, remove, pop index,  del arr-index 

clear, for ab in list, for i in range (len(list))

while i < len(list)

comprehension: corch print(x) for x in thislist corch 

sort alfabet and caseSensitv, sort(reverse = true) list no caract

copy: 

no está permitido: list2 = list1 

copy() and list() methd

slice : 


Juntar arr: extend() o con un for y un append l1 and l2


#### while 

Siempre que sea verd, ejecutamos instrucciones, requiere var/i

i = 1
while i < 6:
  print(i)
  i += 1
  

#### for
 
Itera secuencia, ejecuta instrucc una vez para cada elem

```
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x) 

```

```
for x in "banana":
  print(x) 

```

range: recorre cantidad especifica, desde 0 y de uno a uno.  

```
for x in range(6):
  print(x) 

```

```
 for x in range(2, 6):
  print(x) 

```

```
 for x in range(6):
  print(x)
else:
  print("Finally finished!") 
  
```  

#### Nested loop: 

Para cada elemento, se recorrerá otra secuencia 

```
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
  for y in fruits:
    print(x, y)

```


## 2. Sentence Smash

Smash de Oraciones:

Escribe una función que tome un array de palabras y las combine en una oración, la cual devuelve. 
Puedes ignorar la necesidad de corregir palabras o añadir puntuación, pero debes añadir espacios entre cada palabra. 
¡Cuidado, no debe haber espacios al principio ni al final de la oración!

Ejemplo

['hello', 'world', 'this', 'is', 'great'] => 'hello world this is great'

words = ['hello', 'world', 'this', 'is', 'great']
smash(words) # devuelve "hello world this is great"

Suposiciones:

Puedes asumir que solo se te dan palabras.
No puedes asumir el tamaño del array.
Puedes asumir que sí se obtiene un array.

Qué estamos probando:
Estamos probando bucles básicos y manipulación de cadenas. 
Esto es para principiantes que están aprendiendo bucles y manipulación de cadenas.

Aviso:
Esto es para principiantes, por lo que queremos probar bucles básicos y manipulación de cadenas. 
Los usuarios avanzados deberían poder hacerlo fácilmente en una sola línea.


## Planteo

Descomposición: 

1. "función que tome un array de palabras"

2. combine en una oración, la retorna

3. no debe haber espacios al principio ni al final de la oración

4. Suposiciones: 

Puedes asumir que solo se te dan palabras.
No puedes asumir el tamaño del array.
Puedes asumir que sí se obtiene un array.


Pseudocódigo: 

1. func (arrStr)

2. for; arrStr...; sentence = ""; 

3. strip()


Methd: 

#### str: 

Las cadenas en Python son matrices de bytes que representan caracteres Unicode.
Sin embargo, Python no tiene un tipo de datos de carácter, un solo carácter es simplemente una cadena con una longitud de 1.
Se pueden utilizar corchetes para acceder a los elementos de la cadena.

Ej: 

1. Obtener el caracter en la posición 1 (recuerde que el primer caracter tiene la posición 0):

```
a = "Hello, World!"
print(a[1]) 

```

2. Recorriendo una cadena

Dado que las cadenas son matrices, podemos recorrer los caracteres de una cadena, con un bucle for.

Recorre las letras de la palabra "banana":

```
for x in "banana":
  print(x) 

```

3. longitud de una cadena, utilice la función len().

```
a = "Hello, World!"
print(len(a)) 

```

4. slice: Devolver un rango de caracteres 

Obtener los caracteres de la posición 2 a la posición 5 (no incluidos):

```
b = "Hello, World!"
print(b[2:5]) 

```

5. Eliminar espacios en blanco

El espacio en blanco es el espacio antes y/o después del texto real y, muy a menudo, es conveniente eliminarlo.

El método strip() elimina cualquier espacio en blanco del principio o del final:

```
a = " Hello, World! "
print(a.strip()) # returns "Hello, World!" 

```
 
6. Cuerda dividida

El método split() devuelve una lista donde el texto entre el separador especificado se convierte en los elementos de la lista.

El método split() divide la cadena en subcadenas si encuentra instancias del separador

```
a = "Hello, World!"
print(a.split(",")) # returns ['Hello', ' World!'] 

```
 
7. .join(): Une los elementos de un iterable al final de la cadena.

Ej: 

Unir todos los elementos de una tupla en una cadena, utilizando un carácter hash como separador:

```
myTuple = ("John", "Peter", "Vicky")

x = "#".join(myTuple)

print(x) 

```

John#Peter#Vicky


El método join() toma todos los elementos de un iterable y los une en una cadena.

Se debe especificar una cadena como separador

Iterable (obligatorio): 
Cualquier objeto iterable donde todos los valores devueltos/retornados sean cadenas.


Ej2: 

Unir todos los elementos de un diccionario en una cadena, utilizando la palabra "TEST" como separador:

```
myDict = {"name": "John", "country": "Norway"}
mySeparator = "TEST"

x = mySeparator.join(myDict)

print(x)

```

nameTESTcountry

Nota: Cuando se utiliza un diccionario como iterable, los valores devueltos son las claves, no los valores.



#### loops/bucles arr: 


1. Imprima todos los elementos de la lista, uno por uno:

```
thislist = ["apple", "banana", "cherry"]
for x in thislist:
print(x)
 
```
apple
banana
cherry


2. Imprima todos los artículos consultando su número de índice:

```
thislist = ["apple", "banana", "cherry"]
for i in range(len(thislist)):
  print(thislist[i])

```

3. Un bucle abreviado que imprimirá todos los elementos de una lista:

```
thislist = ["apple", "banana", "cherry"]
[print(x) for x in thislist] 

```

4. Comprensión de listas

La comprensión de listas ofrece una sintaxis más corta cuando desea crear una nueva lista basada en los valores de una lista existente

Ej: lista de frutas, desea una nueva lista, que contenga solo las frutas con la letra "a" en el nombre.

1. Sin List Comprehension

```
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = []

for x in fruits:
  if "a" in x:
    newlist.append(x)

print(newlist) 

```

2. Con la comprensión de listas puedes hacer todo eso con solo una línea de código: 

```
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]

newlist = [x for x in fruits if "a" in x]

print(newlist) 

```

Syntax: 

```
newlist = [expression for item in iterable if condition == True] 

```

El valor de retorno es una nueva lista, dejando la lista anterior sin cambios.


Condición:
La condición es como un filtro que sólo acepta los elementos que evalúan como Verdadero.



## 3. Los opuestos se atraen

Timmy y Sarah creen estar enamorados, pero en la zona donde viven, solo lo sabrán cuando cada uno recoja una flor. 

Si una flor tiene un número par de pétalos y la otra un número impar, significa que están enamorados.

Escribe una función que tome el número de pétalos de cada flor y devuelva verdadero si están enamorados y falso si no lo están.


### Planteo: 

Descomposición: 

1. amor -> flor 

2. si flor1 == par & flor2 impar -> amor


Pseudocódigo: 

1. func (florUno, florDos)

2. if florUno == par & florDos == impar; return love, sino, noLove


# Matemáticas

Hay tres tipos numéricos en Python

int
float
complex

```
x = 1    # int
y = 2.8  # float
z = 1j   # complex

```

Número aleatorio:

Python no tiene una función random() para crear un número aleatorio, pero Python tiene un módulo incorporado llamado random que se puede usar para crear números aleatorios.

Ej: 

Importa el módulo aleatorio y muestra un número aleatorio del 1 al 9:

```
import random

print(random.randrange(1, 10)) 

```

Conversión: 

int(); float() y str()

```
x = int(1)   # x will be 1
y = int(2.8) # y will be 2
z = int("3") # z will be 3

x = float(1)     # x will be 1.0
y = float(2.8)   # y will be 2.8
z = float("3")   # z will be 3.0
w = float("4.2") # w will be 4.2

x = str("s1") # x will be 's1'
y = str(2)    # y will be '2'
z = str(3.0)  # z will be '3.0'

```

Operadores: 

aritméticos, asignación, comparación, lógicos, identidad, membresía, bit a bit. 

Precedencia: 

Si dos operadores tienen la misma precedencia, la expresión se evalúa de izquierda a derecha.

```
() // Mayor precedenc

** 

+x  -x  ~x //Algunos tiene igual precedenc: izq a der

*  /  //  %

+  -

<<  >>

& 

^ 

|

==  !=  >

>=  <  <=

is,  is not

not

and

or

```


Operadores de asignación: 

```
= += -= *= /=

%= //= **= &=

|= ^= >>= <<=

:=

```


Par: 

Dividir entre 2 sin dejar resto

usando operador de módulo (%) devuelve el resto de la división

Si numero x: x%2==0

Si el resultado de esta operación es True, entonces el número es par. Si es False, entonces el número es impar.

```
def es_par(x):
    return x % 2 == 0

```
print(es_par(10))  # True
print(es_par(11))  # False


Impar: 

No se puede dividir entre 2 sin dejar resto

utilizando el operador de módulo (%), que devuelve el resto de la división.

x%2!=0

Si el resultado de esta operación es True, entonces el número es impar. Si es False, entonces el número es par.

```
def es_impar(x):
    return x % 2 != 0
```

print(es_impar(10))  # False
print(es_impar(11))  # True


Reutilizar la función es_par para determinar si un número es impar.

```
def es_impar(x):
    return not es_par(x)

```


## 4. Suma de números positivos

Se obtiene un array de números y se devuelve la suma de todos los positivos.
Ejemplo

[1, -4, 7, 12] => 1+7+12=20 1 + 7 + 12 = 20 1+7+12=20

Nota

Si no hay nada que sumar, la suma es 0 por defecto.


Descomposición: 

1. array numbers -> sumar cada elem. 

más descomposición: 

sum, elem, total en var

2. array empty -> 0 


Psedocódigo: 

1. func (arrNum) rtn arr[postion/elem]

Estruct: 

sum =;  elem =; total=;  

2. if arrNum.len == 1 or arrNum.len() == 1 rtn 0 


## 5. Siglo a Año

El primer siglo abarca desde el año 1 hasta el año 100 inclusive; el segundo, desde el año 101 hasta el año 200 inclusive; etc.

Dado un año, devuelve el siglo en el que se encuentra.

Ejemplos

1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28

Nota: Esta kata utiliza una construcción estricta, como se muestra en la descripción y los ejemplos. 

Puedes leer más sobre ella aquí.


Descomposición: 

siglo -> 100y
s1 -> 0-100
s2 -> 101-200

entrada y -> salida s

Más descomposición: 

estructuras para siglos, años 


Pseudocódigo: 

1. def century(year)

2. estructuras year, century: 

arr, set, if, obj, arr obj, obj plano 

3. operadores

4. técnicas 

5. tomar year y devolver cent

entrará un solo valor que corresponderá un conjunto determ

inf years, inf cent


Plant mat: 
s->100y

xYears= ?, s = 100

100/x -> 
100/0 -> string


calculo: 

recursividad: 

casos base

century(years)

if y <=100 -> 100 return s1

century(years+100)


zonas de calculo: 

entrdad, salida, años, siglos...

contador para siglos +1
contador para years cada 100 

en rango de a 100

Formula:
month = 30d
years = 12m or 3650d 
century = 100y

f(years) = 100(y) -> century

caso parti mas facil:
100 years = 1 century

years = century/100

caso general: 

xYears = century/x(100)

loop:

Python date:


6. Definiciones: 

1. siglo: 
1 a 100 -> s1
101 a 200 -> s2

2. operación matemática para agrupar: división

3. tipo división; entera o exacta

4. funcion para redondear (modulo math)


1. Siglo: 
grupo de 100y, empieza en 1. 

s1: 1-100
s2: 101-200
s3: 201-300

num siglo: bloque 100

2. operación mat agrupar bloque 100

div año entre 100 forma un siglo completo
pero si no termina exactamente en 00, falta 1. 

ej: 1700/100; 1701/100 
17; 17.01

3. año divisible entre 100 -> termina siglo (1700 o 2000)
año no divisible entre 100 -> empieza otro siglo -> redondear +1 

4. redondear 

1/100 → siglo 1
100/100 → siglo 1
101/100 → siglo 2
1999/100 → siglo 20
2000/100 → siglo 20
2001/100 → siglo 21


## Análisis de algoritmo

Solución método

1. 

```
def year_to_century(year):
    return (year + 99) // 100

```

Eficiencia 4: 
Muy eficiente: usa solo una suma y una división entera.
No requiere condiciones ni funciones externas

legibilidad 2: 
Puede parecer menos intuitivo al principio, porque hay una "suma mágica" de 99.
Una vez entiendes el truco, es muy clara

Flexibilidad 2: 
Solo sirve si siempre son bloques de 100 años.
Difícil de adaptar a "siglos de otro tamaño


2. 

```
import math

def year_to_century(year):
    return math.ceil(year / 100)

```

Eficiencia 2: 
Ligeramente menos eficiente, porque implica una llamada a una función externa (math.ceil) y una división flotante.

legibilidad 4: 
Muy legible para quien conoce ceil.
La intención está explícita: redondear hacia arriba

Flexibilidad 3: 
Más fácil de adaptar a otras reglas, como "siglos de 50 años", cambiando / 100.


3. 

```
def year_to_century(year):
    century = year // 100
    if year % 100 != 0:
        century += 1
    return century

```

Eficiencia 4: 
Similar a la anterior, pero incluye una condición.
Sigue siendo muy rápido

legibilidad 4: 
Muy clara para principiantes.
Describe exactamente lo que se espera

Flexibilidad 4: 
Muy flexible: puedes modificar el 100 fácilmente y adaptar la condición si cambian las reglas


4. 

```
century = lambda year: (year + 99) // 100

```

Eficiencia 4: 
Igual que el caso 1.

legibilidad 1: 
Menor legibilidad si no estás familiarizado con lambda.
Bien para funciones pequeñas o uso puntual

Flexibilidad 1: 
Poco flexible, difícil de extender o comentar



#### Len

Devuelve el número de elementos de un objeto.

```
len(object)

```
object: Obligatorio. Un objeto.
Debe ser una secuencia o una colección.


Devuelve el número de elementos en una iterable/lista:

```
mylist = ["apple", "banana", "cherry"]
x = len(mylist)

```


## Pruebas

1. Verificar que todas las funciones devuelven el siglo correcto.

2. Probar con casos límite.

3. Asegurar que se comportan igual entre sí.

test_century.py

```
import math
import pytest

# Funciones a probar
def century_math_ceil(year):
    return math.ceil(year / 100)

def century_conditional(year):
    century = year // 100
    if year % 100 != 0:
        century += 1
    return century

def century_formula(year):
    return (year + 99) // 100

# Casos de prueba esperados
@pytest.mark.parametrize("year,expected", [
    (1, 1),
    (100, 1),
    (101, 2),
    (1999, 20),
    (2000, 20),
    (2001, 21),
    (2100, 21),
    (2101, 22),
])
def test_all_implementations(year, expected):
    assert century_math_ceil(year) == expected
    assert century_conditional(year) == expected
    assert century_formula(year) == expected

```

Ejecutar pruebas: 

```
pytest test_century.py

```


#### Range

Devuelve una secuencia de números, comenzando desde 0 de manera predeterminada, y se incrementa de 1 (de manera predeterminada), y se detiene antes de un número especificado.

```
range(start, stop, step)

```

start: Opcional. 
Un número entero que especifica la posición inicial.
El valor predeterminado es 0.

stop: Obligatorio. 
Un número entero que especifica en qué posición detenerse (no incluido).

step: Opcional. 
Un número entero que especifica el incremento. 
El valor predeterminado es 1.


Ej: 

Crea una secuencia de números del 0 al 5 e imprime cada elemento de la secuencia:

```
x = range(6)
for n in x:
  print(n)

```

Crea una secuencia de números del 3 al 19, pero incrementa de 2 en 2 en lugar de 1:

```
x = range(3, 20, 2)
for n in x:
  print(n)
  
```


#### Range(len())

Recorrer los números índice

También puedes recorrer los elementos de la tupla haciendo referencia a su número de índice.

Utilice las funciones range() y len() para crear un iterable adecuado


Ej: 

Imprima todos los artículos consultando su número de índice:

```
thistuple = ("apple", "banana", "cherry")
for i in range(len(thistuple)):
  print(thistuple[i]) 

```

Range toma valor: 
1. len(listElem) -> stop
2. start predet -> 0
3. step pred -> 1



#### Diferencias loops

1. Imprima todos los elementos de la lista, uno por uno:

```
thislist = ["apple", "banana", "cherry"]
for x in thislist:
print(x)
 
```
apple
banana
cherry


2. Imprima todos los artículos consultando su número de índice:

```
thislist = ["apple", "banana", "cherry"]
for i in range(len(thislist)):
  print(thislist[i])

```

3. 



# Estructuras

1. La lista es una colección ordenada y modificable.
Permite miembros duplicados.

2. Una tupla es una colección ordenada e inmutable. 
Permite miembros duplicados.

3. Un conjunto es una colección desordenada, inmutable* y sin indexar. 
No contiene miembros duplicados.
Los items no se pueden cambiar, pero puedes eliminarlos y/o agregarlos cuando quieras.

4. El diccionario es una colección ordenada** y modificable. 
No hay miembros duplicados.
Antes de 3.7 eran no ordenados. 


# Tuple

Colección ordenada e inmutable

```
thistuple = ("apple", "banana", "cherry")
print(thistuple) 

```

Los elementos de tupla están ordenados, no se pueden modificar y permiten valores duplicados.

1. orden definido y ese orden no cambiará

2. inmutables, no podemos cambiar, agregar ni eliminar elementos una vez creada


len(): 

```
thistuple = ("apple", "banana", "cherry")
print(len(thistuple)) 

```

One Element: 

Para crear una tupla con un solo elemento, debes agregar una coma después del elemento, de lo contrario Python no lo reconocerá como una tupla

```
tuple1 = ("abc", 34, True, 40, "male") 

```

Acceso/index/order

```
print(thistuple[1]) 

```

Negativo: 

-1 ultimo item, -2 ante ultimo, etc. 


Range index: 

Especificando dónde comenzar y dónde finalizar el rango.

Al especificar un rango, el valor de retorno será una nueva tupla con los elementos especificados

```
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[2:5]) 

```

('cherry', 'orange', 'kiwi')

return the items from position 2 to 5
index 2 (included), 5 is not included


Comenzar primer elemento: 

```
print(thistuple[:4]) 

```

Ir hasta valor final: 

```
print(thistuple[:4]) 

```

Las tuplas son inmutables, lo que significa que no se pueden cambiar, agregar ni eliminar elementos una vez creada la tupla.

Pero hay algunas soluciones alternativas.


Cambiar los valores de las tuplas:

Una vez creada una tupla, no se pueden modificar sus valores. 

Las tuplas son inmutables.

Pero hay una solución alternativa. 

##### Puedes convertir la tupla en una lista, modificar la lista y volver a convertirla en una tupla.

```
x = ("apple", "banana", "cherry")
y = list(x)
y[1] = "kiwi"
x = tuple(y)

print(x)

```


Unpack:

Extraer los valores de vuelta a las variables


Asterisk*: 

Si el número de variables es menor que el número de valores, puede agregar un * al nombre de la variable y los valores se asignarán a la variable como una lista:

Asigna el resto de valores como una lista llamada "rojo":

```
 fruits = ("apple", "banana", "cherry", "strawberry", "raspberry")

(green, yellow, *red) = fruits

print(green)
print(yellow)
print(red) 

```


#### Loop items

Recorrer una tupla

Puedes recorrer los elementos de la tupla utilizando un bucle for

```

```

#### Loop index: range y len 

Recorrer los números índice

También puedes recorrer los elementos de la tupla haciendo referencia a su número de índice.

Utilice las funciones range() y len() para crear un iterable adecuado


Ej: 

Imprima todos los artículos consultando su número de índice:

```
thistuple = ("apple", "banana", "cherry")
for i in range(len(thistuple)):
  print(thistuple[i]) 

```


# Set

Los conjuntos se utilizan para almacenar varios elementos en una sola variable.

Se utilizan para almacenar colecciones de datos; los otros tres son Lista, Tupla y Diccionario, todos con diferentes cualidades y usos.

Un conjunto es una colección desordenada, inmutable* y no indexada.

Inmutabilidad: Los elementos del conjunto no se pueden modificar, pero puedes eliminar elementos y agregar elementos nuevos.

Los conjuntos no están ordenados, por lo que no puedes estar seguro en qué orden aparecerán los elementos.

```
myset = {"apple", "banana", "cherry"} 

```

Los valores duplicados serán ignorados:

```
thisset = {"apple", "banana", "cherry", "apple"}
print(thisset) 

```

Nota: Los valores Verdadero y 1 se consideran el mismo valor en los conjuntos y se tratan como duplicados:

```
thisset = {"apple", "banana", "cherry", True, 1, 2}
print(thisset) 

```

Nota: Los valores Falso y 0 se consideran el mismo valor en los conjuntos y se tratan como duplicados:

Falso y 0 se consideran el mismo valor:

```
thisset = {"apple", "banana", "cherry", False, True, 0}
print(thisset) 

```

len: 

```
thisset = {"apple", "banana", "cherry"}
print(len(thisset)) 

```

items: 

Los elementos del conjunto pueden ser de cualquier tipo de datos:

```
set1 = {"abc", 34, True, 40, "male"} 

```

acceso: 

No se puede acceder a los elementos de un conjunto haciendo referencia a un índice o una clave.

#### Pero puedes recorrer los elementos del conjunto usando un bucle for, o preguntar si un valor especificado está presente en un conjunto, usando la palabra clave in.

```
thisset = {"apple", "banana", "cherry"}

for x in thisset:
  print(x)

```

items: 

No puedes cambiar items, pero puedes agregar

add()

```
thisset = {"apple", "banana", "cherry"}
thisset.add("orange")
print(thisset)

```

update()

```
thisset = {"apple", "banana", "cherry"}
tropical = {"pineapple", "mango", "papaya"}

thisset.update(tropical)
print(thisset)

```

#### Agregar elementos a listas y a conjuntos

```
thisset = {"apple", "banana", "cherry"}
mylist = ["kiwi", "orange"]

thisset.update(mylist)

print(thisset)

```


#### Unir conjuntos

Unir dos o más conjuntos en Python.

Los métodos union() y update() unen todos los elementos de ambos conjuntos.

El método crossing() conserva SÓLO los duplicados.

El método difference() conserva los elementos del primer conjunto que no están en los otros conjuntos.

El método symmetric_difference() conserva todos los elementos EXCEPTO los duplicados


1. El método union()

Devuelve un nuevo conjunto con todos los elementos de ambos conjuntos. 

```
set1 = {"a", "b", "c"}
set2 = {1, 2, 3}

set3 = set1.union(set2)
print(set3)

```

Usando operador 

```
set1 = {"a", "b", "c"}
set2 = {1, 2, 3}

set3 = set1 | set2
print(set3)

```

Unir varios conjuntos

```
set1 = {"a", "b", "c"}
set2 = {1, 2, 3}
set3 = {"John", "Elena"}
set4 = {"apple", "bananas", "cherry"}

myset = set1.union(set2, set3, set4)
print(myset)

```

set y tuple: 

```
x = {"a", "b", "c"}
y = (1, 2, 3)

z = x.union(y)
print(z) 

```


2. intersection

Unir set1 y set2, pero conservar sólo los duplicados:

```
set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}

set3 = set1.intersection(set2)
print(set3) 

```

Con el operador &: 

```
set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}

set3 = set1 & set2
print(set3)

```

# Dicc/Map

Los diccionarios se utilizan para almacenar valores de datos en pares clave:valor.

Un diccionario es una colección ordenada*, modificable y que no permite duplicados.

A partir de la versión 3.7 de Python, los diccionarios están ordenados. 

En Python 3.6 y versiones anteriores, no están ordenados.

Los diccionarios se escriben entre llaves y tienen claves y valores:

```
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
} 

```

items: 

Los elementos del diccionario están ordenados, se pueden modificar y no se permiten duplicados.

Los elementos del diccionario se presentan en pares clave:valor y se puede hacer referencia a ellos utilizando el nombre de la clave.


Imprima el valor de "brand" del diccionario

```
print(thisdict["brand"])

```


Orden:

Están ordenados, significa que los elementos tienen un orden definido, y ese orden no cambiará.

Desordenado significa que los elementos no tienen un orden definido, no se puede hacer referencia a un elemento mediante un índice.


Tipos: 

```
thisdict =	{
  "brand": "Ford",
  "electric": False,
  "year": 1964,
  "colors": ["red", "white", "blue"]
} 

```

Obtener item: 

```
thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
x = thisdict["model"]

```

#### get()

```
x = thisdict.get("model")
 
```

#### keys(): reflejará cambios

Devolverá una lista de todas las claves del diccionario.

```
x = thisdict.keys() 

```

```
 car = {
"brand": "Ford",
"model": "Mustang",
"year": 1964
}

x = car.keys()

print(x) #before the change

car["color"] = "white"

print(x) #after the change

```


#### Values(): reflejará cambios

Devolverá una lista de todos los valores del diccionario.

```
x = thisdict.values() 

```

```
 car = {
"brand": "Ford",
"model": "Mustang",
"year": 1964
}

x = car.values()

print(x) #before the change

car["year"] = 2020

print(x) #after the change

```

```

car = {
"brand": "Ford",
"model": "Mustang",
"year": 1964
}

x = car.values()

print(x) #before the change

car["color"] = "red"

print(x) #after the change 

```

#### Items list: key and value

Retorna una tupla con cada elemento: key and value

```
x = thisdict.items() 

```

change: 

```
thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict["year"] = 2018

```

update: 

```
 thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.update({"year": 2020}) 

```

add: 

```
thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict["color"] = "red"
print(thisdict)

```


#### Loop dict

Utilizando un bucle for.

El valor de retorno son las claves del diccionario, pero también hay métodos para devolver los valores.


todas las keys: 

```
for x in thisdict:
  print(x)

```

todos los valores: 

```
for x in thisdict:
  print(thisdict[x])

```

#### Objeto metodo: keys, values, items

Devolver valores, claves y par de un diccionario

```
for x in thisdict.values():
  print(x)

```

```
for x in thisdict.keys():
  print(x) 

```

```
for x, y in thisdict.items():
  print(x, y) 

```

Copias: copy() y dict() (constructor)

```
thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
mydict = thisdict.copy()
print(mydict) 

```

```
 thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
mydict = dict(thisdict)
print(mydict) 

```


#### Nested dict

```
 myfamily = {
  "child1" : {
    "name" : "Emil",
    "year" : 2004
  },
  "child2" : {
    "name" : "Tobias",
    "year" : 2007
  },
  "child3" : {
    "name" : "Linus",
    "year" : 2011
  }
}

```

```
 child1 = {
  "name" : "Emil",
  "year" : 2004
}
child2 = {
  "name" : "Tobias",
  "year" : 2007
}
child3 = {
  "name" : "Linus",
  "year" : 2011
}

myfamily = {
  "child1" : child1,
  "child2" : child2,
  "child3" : child3
}

```

acceso: 

```
print(myfamily["child2"]["name"]) 

```

loop: 

con items()

keys and values

```
for x, obj in myfamily.items():
  print(x)

  for y in obj:
    print(y + ':', obj[y]) 

```


# Class/Objs

Python es un lenguaje de programación orientado a objetos.

Casi todo en Python es un objeto, con sus propiedades y métodos.

Una clase es como un constructor de objetos, o un "modelo" para crear objetos.


Crear clase:

Con class

Ej: con nombre MyClass y una propiedad

```
class MyClass:
  x = 5

```


Crear objeto: 

Usando la clase creada para crear objetos

Ej: 

objeto propUno para usar la propiedad x que tenía el valor 5. 

```
p1 = MyClass()
print(p1.x)

```
Retorna 5. 


init: Constructor para dar valores 

Todas las clases tienen una función llamada

```
 __init__()
 
```

Siempre se ejecuta cuando se inicia la clase.

Para asignar valores a las propiedades del objeto u otras operaciones que sean necesarias realizar cuando se crea el objeto.

```
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("John", 36)

print(p1.name)
print(p1.age)

```

init se llama automáticamente cada vez que se crea una clase


str: 

Controla lo que debe devolverse cuando el objeto de clase se representa como una cadena

Si no está configurada, se devuelve la representación de cadena del objeto:


Ej: 

Cadena de un objeto SIN la función

```
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("John", 36)

print(p1)

```

Retorna: 
<__main__.Person object at 0x15039e602100>


Ej2: 

Representación de cadena de un objeto CON la función str

```
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def __str__(self):
    return f"{self.name}({self.age})"

p1 = Person("John", 36)

print(p1)

```
Retorna: 
John(36)


Métodos de objeto: 

Funciones pertenecientes al objeto


Crear método:

Función que imprima un saludo y sea ejecutada por un objeto creado a partir de una clase

```
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)

p1 = Person("John", 36)
p1.myfunc() 

```

#### Parametro self es una referencia a la instancia actual: objeto creado

De la clase y se utiliza para acceder a las variables que pertenecen a la clase.

self puede tener otro nombre

```
 class Person:
  def __init__(mysillyobject, name, age):
    mysillyobject.name = name
    mysillyobject.age = age

  def myfunc(abc):
    print("Hello my name is " + abc.name)

p1 = Person("John", 36)
p1.myfunc() 

```

#### Modificar props de objetos

```
p1.age = 40 

```


Borrar prop: 

```
del p1.age 

```

Borrar del: 

```
del p1 

```

#### pass: 

#### Las definiciones de clase no pueden estar vacías, pero si por alguna razón tiene una definición de clase sin contenido, coloque la declaración pass para evitar obtener un error.

```
class Student(Person):
  pass

```


# Herencia 

Una clase que hereda todos los métodos y propiedades de otra clase.

La clase padre es la clase de la que se hereda, también llamada clase base.

La clase hija es la clase que hereda de otra clase, también llamada clase derivada.


Parent Class: 

Todas las clases pueden ser una.

Clase persona con propiedades firstname y lastname con un método printname

```
 class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

#Use the Person class to create an object, and then execute the printname method:

x = Person("John", "Doe")
x.printname() 

```


Child class:

Hereda la funcionalidad de otra clase, envíe la clase principal como parámetro al crear la clase secundaria:


Ej: 

Student heredará las propiedades y métodos de la clase Persona

```
class Student(Person):
  pass

```

#### Usamos pass cuando no desee agregar ninguna otra propiedad o método a la clase.

Ahora Student puede ejecutar propiedades y métodos de Person 

```
x = Student("Mike", "Olsen")
x.printname()

```

init en child class:

En lugar de pass para tener propio constructor

Se llamará automáticamente

```
 class Student(Person):
  def __init__(self, fname, lname):
    #add properties etc. 

```

#### la clase secundaria ya no heredará la función __init__() de la clase principal

Anula la herencia de la función init del padre.


Para mantener la herencia de la función init del padre, agregue una llamada a la función init del padre

```
class Student(Person):
  def __init__(self, fname, lname):
    Person.__init__(self, fname, lname) 
    
```

Ahora odemos agregar funcionalidad a init de la clase hija. 


#### super().init: 

Hará que la clase hija herede todos los métodos y propiedades de su clase padre:

```
class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname) 

```

Al utilizar la función super(), no es necesario utilizar el nombre del elemento padre, ya que heredará automáticamente los métodos y propiedades de su padre


Agregar prop a clase hija: 

Podemos agregar una prop por defecto, sin pasarla al constructor

```
class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname)
    self.graduationyear = 2019 

```

También podemos pasarla al constructor para que pueda tomar valor desde allí. 

```
class Student(Person):
  def __init__(self, fname, lname, year):
    super().__init__(fname, lname)
    self.graduationyear = year

x = Student("Mike", "Olsen", 2019) 

```


Agregar método: 

```
class Student(Person):
  def __init__(self, fname, lname, year):
    super().__init__(fname, lname)
    self.graduationyear = year

  def welcome(self):
    print("Welcome", self.firstname, self.lastname, "to the class of", self.graduationyear) 

```

Si agregamos un método en la clase secundaria con el mismo nombre que una función en la clase principal se sobreescribirá. 


# Iterator 

Es un objeto que contiene un número contable de valores.

Es un objeto que se puede iterar, lo que significa que se pueden recorrer todos los valores.

Técnicamente, en Python, un iterador es un objeto que implementa el protocolo iterador, que consta de los métodos:

1. iter

```
__iter__() 

```

2. next

```
__next__()

```

Iterador vs. Iterable

Las listas, tuplas, diccionarios y conjuntos son objetos iterables. 

Son contenedores iterables de los que se puede obtener un iterador.

Todos estos objetos tienen un método iter() que se utiliza para obtener un iterador.


Ej: 

Devuelve un iterador de una tupla e imprime cada valor:

#### Uso de iter y next

```
mytuple = ("apple", "banana", "cherry")
myit = iter(mytuple)

print(next(myit))
print(next(myit))
print(next(myit))

```
apple
banana
cherry


Las cadenas son iterables ya que tienen una secuencia de carácteres

```
mystr = "banana"
myit = iter(mystr)

print(next(myit))
print(next(myit))
print(next(myit))
print(next(myit))
print(next(myit))
print(next(myit))

```


Recorriendo un iterador:

También podemos usar un bucle for para iterar a través de un objeto iterable:

Iterar los valores de una tupla:

```
mytuple = ("apple", "banana", "cherry")

for x in mytuple:
  print(x) 

```

```
mystr = "banana"

for x in mystr:
  print(x)

```


Crear iterator: 

Para crear un objeto/clase como iterador, debes implementar los métodos iter y next en tu objeto.

Todas las clases tienen una función llamada init, que te permite realizar cierta inicialización cuando se crea el objeto.

El método iter actúa de manera similar, puedes realizar operaciones (inicializar, etc.), pero siempre debes devolver el objeto iterador en sí.

El método next también permite realizar operaciones y debe devolver el siguiente elemento de la secuencia.


Ej: 

Cree un iterador que devuelva números, comenzando con 1, y cada secuencia aumentará en uno (devolviendo 1, 2, 3, 4, 5, etc.):

```
 class MyNumbers:
  def __iter__(self):
    self.a = 1
    return self

  def __next__(self):
    x = self.a
    self.a += 1
    return x

myclass = MyNumbers()
myiter = iter(myclass)

print(next(myiter))
print(next(myiter))
print(next(myiter))
print(next(myiter))
print(next(myiter)) 

```

1
2
3
4
5


#### iter define una prop y next define un modificador 


#### StopIteration y for: 

El ejemplo anterior continuaría indefinidamente si tuviera suficientes declaraciones next() o si se usara en un bucle for.

Para evitar que la iteración continúe indefinidamente, podemos utilizar la declaración StopIteration.

En el método next, podemos agregar una condición de terminación para generar un error si la iteración se realiza una cantidad específica de veces


Ej: 

Detenerse después de 20 iteraciones:

```
class MyNumbers:
  def __iter__(self):
    self.a = 1
    return self

  def __next__(self):
    if self.a <= 20:
      x = self.a
      self.a += 1
      return x
    else:
      raise StopIteration

myclass = MyNumbers()
myiter = iter(myclass)

for x in myiter:
  print(x)

```


# Polymorphism

Significa muchas formas. 

En clases, todos/funciones/operadores con el mismo nombre que pueden ejecutarse en muchos objetos o clases.


Ej: 

len(object) se puede utilizar en varios objetos que tienen cantidad.

```
x = "Hello World!"
print(len(x))

mytuple = ("apple", "banana", "cherry")
print(len(mytuple)) 

thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(len(thisdict)) 

```


En clases: 

Se utiliza en los métodos de clase, donde podemos tener varias clases con el mismo nombre de método.

#### Mismo nombre, diferentes definiciones/accion/aplicación


Ej: 

Tenemos tres clases: Auto, Barco y Avión, y todas tienen un método llamado move():

```
class Car:
  def __init__(self, brand, model):
    self.brand = brand
    self.model = model

  def move(self):
    print("Drive!")

class Boat:
  def __init__(self, brand, model):
    self.brand = brand
    self.model = model

  def move(self):
    print("Sail!")

class Plane:
  def __init__(self, brand, model):
    self.brand = brand
    self.model = model

  def move(self):
    print("Fly!")

car1 = Car("Ford", "Mustang")       #Create a Car object
boat1 = Boat("Ibiza", "Touring 20") #Create a Boat object
plane1 = Plane("Boeing", "747")     #Create a Plane object

for x in (car1, boat1, plane1):
  x.move()

```

#### Loop method

Podemos ejecutar el mismo método para las tres clases.


Clases hijas con el mismo nombre:

Las clases hijas heredan los métodos del Vehículo, pero pueden sobrescribirlos:


Ej: 

Clase llamada Vehículo y crea clases hijas de Vehículo: Automóvil, Barco y Avión.

```
 class Vehicle:
  def __init__(self, brand, model):
    self.brand = brand
    self.model = model

  def move(self):
    print("Move!")

class Car(Vehicle):
  pass

class Boat(Vehicle):
  def move(self):
    print("Sail!")

class Plane(Vehicle):
  def move(self):
    print("Fly!")

car1 = Car("Ford", "Mustang")       #Create a Car object
boat1 = Boat("Ibiza", "Touring 20") #Create a Boat object
plane1 = Plane("Boeing", "747")     #Create a Plane object

for x in (car1, boat1, plane1):
  print(x.brand)
  print(x.model)
  x.move()

```

Las clases secundarias heredan las propiedades y métodos de la clase principal.

En el ejemplo anterior puedes ver que la clase Car está vacía, pero hereda la marca, el modelo y move() del Vehicle.

Las clases Boat y Plane también heredan la marca, el modelo y move() de Vehicle, pero ambas anulan el método move().

Podemos ejecutar el mismo método para todas las clases


# Scope 

Alcance, región o zona.

Una variable solo está disponible dentro de la región en la que se crea.


Local: 

Variable creada dentro de una función pertenece al ámbito local de esa función y solo se puede utilizar dentro de esa función.

```
def myfunc():
  x = 300
  print(x)

myfunc()

```

Función dentro de función: 

La variable x no está disponible fuera de la función, pero está disponible para cualquier función dentro de la función:

Ejemplo:

Se puede acceder a la variable local desde una función dentro de la función

```
 def myfunc():
  x = 300
  def myinnerfunc():
    print(x)
  myinnerfunc()

myfunc()

```

Global: 

Una variable creada en el cuerpo principal del código Python es una variable global y pertenece al ámbito global.

Las variables globales están disponibles desde cualquier ámbito, global y local.

Ejemplo:

Una variable creada fuera de una función es global y puede ser utilizada por cualquier persona

```
 x = 300

def myfunc():
  print(x)

myfunc()

print(x) 

```

Nombre de las variables: 

Si opera con el mismo nombre de variable dentro y fuera de una función, Python las tratará como dos variables separadas, una disponible en el ámbito global (fuera de la función) y otra disponible en el ámbito local (dentro de la función):

Ej: 

La función imprimirá la x local y luego el código imprimirá la x global:

```
x = 300

def myfunc():
  x = 200
  print(x)

myfunc()

print(x) 

```

Palabra Global: 

Si necesita crear una variable global, pero está estancado en el ámbito local, puede utilizar la palabra clave global.

La palabra clave global hace que la variable sea global.

Ej:

Si utiliza la palabra clave global, la variable pertenece al ámbito global

```
def myfunc():
  global x
  x = 300

myfunc()

print(x)

```

Cambio en la variable con la palabra Global: 

Utilice la palabra clave global si desea realizar un cambio en una variable global dentro de una función.

Ej:

Para cambiar el valor de una variable global dentro de una función, haga referencia a la variable utilizando la palabra clave global:

La convertimos en global 

```
def myfunc():
  global x
  x = 300

myfunc()

print(x)

```

Palabra Nonlocal

Se utiliza para trabajar con variables dentro de funciones anidadas.

La palabra clave no local hace que la variable pertenezca a la función externa.

```
def myfunc1():
  x = "Jane"
  def myfunc2():
    nonlocal x
    x = "hello"
  myfunc2()
  return x

print(myfunc1())

```


# Python Dates

No es un tipo de dato en sí misma, pero podemos importar un módulo llamado datetime para trabajar con fechas como objetos de fecha

Ej: 

Importa el módulo datetime y muestra la fecha actual:

```
import datetime

x = datetime.datetime.now()
print(x) 

```

17/05/2025 16:58:26.225653


Output: 

La fecha contiene año, mes, día, hora, minuto, segundo y microsegundo.

El módulo datetime tiene muchos métodos para devolver información sobre el objeto de fecha


Devuelve el año y el nombre del día de la semana:

```
import datetime

x = datetime.datetime.now()

print(x.year)
print(x.strftime("%A"))

```
2025
Saturday


Crear Date Objects:

Utilizar la clase datetime() (constructor) del módulo datetime.

La clase datetime() requiere tres parámetros para crear una fecha: año, mes, día.

Ej:

Crear un objeto de fecha:

```
import datetime
x = datetime.datetime(2020, 5, 17)
print(x) 

```

2020-05-17 00:00:00

datetime() también toma parámetros para la hora y la zona horaria (hora, minuto, segundo, microsegundo, zona horaria), pero son opcionales y tienen un valor predeterminado de 0 (Ninguno para la zona horaria).


strftime():

El objeto datetime tiene un método para formatear objetos de fecha en cadenas legibles.

El método se llama strftime() y toma un parámetro, formato, para especificar el formato de la cadena devuelta:

Ej:

Mostrar el nombre del mes

```
import datetime

x = datetime.datetime(2018, 6, 1)

print(x.strftime("%B")) 

```

June



#### Siglo

Una referencia de todos los códigos de formato legal:

Ej: 

Directiva; Descripción; Respuesta
%C 	Century 	20

```
import datetime

x = datetime.datetime.now()

print(x.strftime("%C"))

```


# Format

str: 

f-string: 

formatear partes seleccionadas de una cadena.

```
txt = f"The price is 49 dollars"
print(txt) 

```

Marcadores de posición y modificadores:

Dar formato a los valores en una cadena f

Agregue marcadores de posición {}, un marcador de posición puede contener variables, operaciones, funciones y modificadores para dar formato al valor

Ej: 

placeholder para price

```
price = 59
txt = f"The price is {price} dollars"
print(txt) 

```

También puede incluir un modificador para formatear el valor.

Se incluye un modificador agregando dos puntos : seguido de un tipo de formato legal, como .2f que significa número de punto fijo con 2 decimales

Ej: 

Precio con dos decimales

```
price = 59
txt = f"The price is {price:.2f} dollars"
print(txt) 

```

También puedes formatear un valor directamente sin mantenerlo en una variable:

```
txt = f"The price is {95:.2f} dollars"
print(txt) 

```

Llamada a una función: 

```
def myconverter(x):
  return x * 0.3048

txt = f"The plane is flying at a {myconverter(30000)} meter altitude"
print(txt) 

```


# Módulo Matemático 


