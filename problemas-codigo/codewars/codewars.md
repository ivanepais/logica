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

Conjunto de funciones matemáticas integradas, incluido un extenso módulo de matemáticas


## Built-in Math

Las funciones min() y max() se pueden usar para encontrar el valor más bajo o más alto en un iterable:

```
x = min(5, 10, 25)
y = max(5, 10, 25)

print(x)
print(y) 

```

La función abs() devuelve el valor absoluto (positivo) del número especificado

```
x = abs(-7.25)
print(x)

```

La función pow(x, y) devuelve el valor de x elevado a y (x^y).

```
x = pow(4, 3)
print(x) 

```


## Math Mod

Módulo incorporado que amplía la lista de funciones matemáticas integrado.

Se importa el módulo math

```
import math

```

Podrá comenzar a utilizar los métodos y constantes del módulo


math.sqrt(): 

Devuelve la raíz cuadrada de un número.

```
import math
x = math.sqrt(64)
print(x)

```

El método math.ceil() redondea un número hacia arriba hasta su entero más cercano

el método math.floor() redondea un número hacia abajo hasta su entero más cercano y devuelve el resultado:

```
import math

x = math.ceil(1.4)
y = math.floor(1.4)

print(x) # returns 2
print(y) # returns 1

```

La constante math.pi devuelve el valor de PI (3,14...):

```
import math
x = math.pi
print(x)

```

Ref

```
math.factorial()

math.fmod() //Returns the remainder of x/y
math.fsum() //Returns the sum of all items in any iterable (tuples, arrays, lists, etc.)
math.isfinite() 	//Checks whether a number is finite or not
math.isinf() 	//Checks whether a number is infinite or not
math.isnan() 	//Checks whether a value is NaN (not a number) or not
math.isqrt() 	//Rounds a square root number downwards to the nearest integer
math.trunc() 	//Returns the truncated integer parts of a number

```

## Math constantes

```
math.e 	//Returns Euler's number (2.7182...)
math.inf 	//Returns a floating-point positive infinity
math.nan 	//Returns a floating-point NaN (Not a Number) value
math.pi 	//Returns PI (3.1415...)
math.tau 	//Returns tau (6.2831...)

```

## cmath Mod

Módulo incorporado que puedes usar para tareas matemáticas con números complejos.

Los métodos de este módulo aceptan números enteros, de punto flotante y complejos. 

Incluso acepta objetos de Python con un método

```
 __complex__()
 
 __float__()

```

Los métodos de este módulo casi siempre devuelven un número complejo. 

Si el valor de retorno puede expresarse como un número real, su parte imaginaria es 0

El módulo cmath tiene un conjunto de métodos y constantes

```
cmath.acos(x) 	//Returns the arc cosine value of x
cmath.acosh(x) 	//Returns the hyperbolic arc cosine of x
cmath.asin(x) 	//Returns the arc sine of x
cmath.asinh(x) 	//Returns the hyperbolic arc sine of x
cmath.atan(x) 	//Returns the arc tangent value of x
cmath.atanh(x) 	//Returns the hyperbolic arctangent value of x
cmath.cos(x) 	//Returns the cosine of x

```

cMath Constants

```
cmath.e 	Returns Euler's number (2.7182...)
cmath.inf 	Returns a floating-point positive infinity value
cmath.infj 	Returns a complex infinity value
cmath.nan 	Returns floating-point NaN (Not a Number) value
cmath.nanj 	Returns coplext NaN (Not a Number) value
cmath.pi 	Returns PI (3.1415...)
cmath.tau 	Returns tau (6.2831...)

```


# How to 

#### Duplicados en lista 

1. 

```
mylist = ["a", "b", "a", "c", "c"]
mylist = list(dict.fromkeys(mylist))
print(mylist)

```

1. Lista que contiene duplicados
2. Crea un diccionario usando los elementos de la lista como claves. Esto eliminará automáticamente los duplicados, ya que los diccionarios no pueden tener claves duplicadas.
3. Convertir el diccionario nuevamente en una lista: 

Tenemos una Lista sin duplicados y tiene el mismo orden que la Lista original.

Imprima la lista para demostrar el resultado.


2. 

Enviar sus listas y recuperarlas sin duplicados

```
def my_function(x):
  return list(dict.fromkeys(x))

mylist = my_function(["a", "b", "a", "c", "c"])

print(mylist) 

```

1. Crea una función que tome una lista como argumento.

2. Crea un diccionario, utilizando los elementos de esta lista como claves.

3. Convierte el diccionario en una lista. 

4. Return the list

5. Call the function, with a list as a parameter

6. print result


#### Invertir una cadena

No hay ninguna función incorporada para revertir una cadena en Python.

1. 

La forma más rápida (¿y fácil?) es utilizar un corte que avance hacia atrás, -1.

```
txt = "Hello World"[::-1]
print(txt)

```

1. Crea un segmento que comience en el final de la cadena y se mueva hacia atrás.

2. En este ejemplo particular, la declaración de corte [::-1] significa comenzar al final de la cadena y terminar en la posición 0, moverse con el paso -1, menos uno, lo que significa un paso hacia atrás.


2. 

```
def my_function(x):
  return x[::-1]

mytxt = my_function("I wonder how this text looks like backwards")

print(mytxt)

```

1. Cortar la cadena empezando por el extremo para moverse hacia atrás.

2. Llamar a la función, con una cadena como parámetro


#### Divisiones

1.  Div
 
```
x = 12
y = 3

print(x / y)

```

4


2. Mod
 
```
x = 5
y = 2

print(x % y)

```



#### Lambda

1. 

```
x = lambda a: a + 10
print(x(5))

```
15


2. 

```
x = lambda a, b: a * b
print(x(5, 6))

```
30 


3. 

```
x = lambda a, b, c: a + b + c
print(x(5, 6, 2))

```



# Manejo de archivos

Python tiene varias funciones para crear, leer, actualizar y eliminar archivos.


La función clave para trabajar con archivos en Python es la función open().

La función open() toma dos parámetros: nombre de archivo y modo.

Hay cuatro métodos (modos) diferentes para abrir un archivo

1. "r" - Lectura
Valor predeterminado. 
Abre un archivo para lectura.
 Se produce un error si el archivo no existe.

2. "a" - Anexar  
Abre un archivo para anexarlo, crea el archivo si no existe

3. "w" - Escribir
Abre un archivo para escribir, crea el archivo si no existe

4. "x" - Crear 
Crea el archivo especificado, devuelve un error si el archivo existe


Además, puede especificar si el archivo debe manejarse en modo binario o de texto.

1. "t" - Texto
Valor predeterminado. 
Modo texto

2. "b" - Binario
Modo binario (p. ej., imágenes)


Ej: 

Para abrir un archivo para su lectura es suficiente especificar el nombre del archivo:

```
f = open("demofile.txt")

```


El código anterior es el mismo que:

```
f = open("demofile.txt", "rt")

```

Dado que "r" para leer y "t" para texto son los valores predeterminados, no es necesario especificarlos.

Nota: asegúrese de que el archivo exista o recibirá un error.


#### Abrir archivo en el server 

##### Ruta del archivo

Ej: con el siguiente archivo, ubicado en la misma carpeta que Python

demofile.txt

```
Hello! Welcome to demofile.txt
This file is for testing purposes.
Good Luck!

```

Para abrir el archivo, utilice la función incorporada open().

La función open() devuelve un objeto de archivo, que tiene un método read() para leer el contenido del archivo.

```
f = open("demofile.txt")
print(f.read())

```

Si el archivo se encuentra en una ubicación diferente, deberá especificar la ruta del archivo, de la siguiente manera:

```
f = open("D:\\myfiles\welcome.txt")
print(f.read()) 

```


##### Declaración with

También puedes utilizar la instrucción with al abrir un archivo

```
with open("demofile.txt") as f:
  print(f.read()) 

```

Entonces no tendrá que preocuparse por cerrar sus archivos, la declaración with se encarga de eso.


Cerrar archivos:

Es una buena práctica cerrar siempre el archivo cuando hayas terminado de usarlo.

Si no está utilizando la declaración with, debe escribir una declaración close para cerrar el archivo

```
f = open("demofile.txt")
print(f.readline())
f.close()

```

Nota: Siempre debe cerrar sus archivos. 
En algunos casos, debido al almacenamiento en búfer, es posible que los cambios realizados en un archivo no se muestren hasta que lo cierre.


##### Leer partes

De forma predeterminada, el método read() devuelve el texto completo, pero también puedes especificar cuántos caracteres quieres devolver:

Ej:
Devuelve los 5 primeros caracteres del archivo:

```
with open("demofile.txt") as f:
  print(f.read(5)) 

```

Leer líneas

Puede devolver una línea utilizando el método readline():

Ej:
Leer una línea del archivo:

```
with open("demofile.txt") as f:
  print(f.readline()) 

```


Al llamar a readline() dos veces, puedes leer las dos primeras líneas:

Ej:
Leer dos líneas del archivo:

```
with open("demofile.txt") as f:
  print(f.readline())
  print(f.readline())

```

Al recorrer las líneas del archivo, puede leer el archivo completo, línea por línea:

Recorrer el archivo línea por línea:

```
 with open("demofile.txt") as f:
  for x in f:
    print(x) 

```


##### Escribir existente 

Agregar un parámetro a la función open():

1. "a" - Anexar 
se agregará al final del archivo

2. "w" - Escribir
sobrescribirá cualquier contenido existente


Ej: 

Abra el archivo "demofile.txt" y agregue contenido al archivo:

```
with open("demofile.txt", "a") as f:
  f.write("Now the file has more content!")

#abre y lee el archivo después de agregarlo:
with open("demofile.txt") as f:
  print(f.read())

```

Sobrescribir contenido existente

Para sobrescribir el contenido existente en el archivo, utilice el parámetro w:

Ej
Abra el archivo "demofile.txt" y sobrescriba el contenido:

```
with open("demofile.txt", "w") as f:
  f.write("Woops! I have deleted the content!")

#Abrir y leer el archivo después de sobrescribirlo
with open("demofile.txt") as f:
  print(f.read())
  
```

Nota: el método "w" sobrescribirá todo el archivo.


##### Crear archivo

El método open(), con uno de los siguientes parámetros:

1. "x" - Crear
creará un archivo, devuelve un error si el archivo existe

2. "a" - Anexar
creará un archivo si el archivo especificado no existe

3. "w" - Escribir
creará un archivo si el archivo especificado no existe

Ej

Crea un nuevo archivo llamado "myfile.txt":

```
f = open("myfile.txt", "x") 

```

Resultado: se crea un nuevo archivo vacío.

Nota: Si el archivo ya existe, se generará un error.


##### Delete file

Importar el módulo OS y ejecutar su función os.remove():

```
import os
os.remove("demofile.txt") 

```

Comprobar si el archivo existe:

Para evitar recibir un error, es posible que desees verificar si el archivo existe antes de intentar eliminarlo:

Ej
Comprueba si el archivo existe y luego elimínalo

```
import os
if os.path.exists("demofile.txt"):
  os.remove("demofile.txt")
else:
  print("The file does not exist") 

```


Eliminar carpeta

Para eliminar una carpeta entera, utilice el método os.rmdir():

Ej
Eliminar la carpeta "micarpeta":

```
import os
os.rmdir("myfolder") 

```

Sólo puedes eliminar carpetas vacías.



# 6. ¡Convierte un número en una cadena!

Necesitamos una función que pueda transformar un número (entero) en una cadena.

¿Qué formas de lograr esto conoces?
Ejemplos (entrada --> salida):

123 --> "123"
999 --> "999"
-100 --> "-100"



## Planteo simple: 

1. Descomposición 


2. Descomposición profunda: 


3. Pseudocódigo: 

1. def:

2. estructuras: 

3. operadores:

4. técnicas:

5. entradas y salidas internas, ultimas: 



## Planteo general: 

1. Diseñar una solución paso a paso:

Escribe un plan en pseudocódigo:
Define los pasos de tu solución de manera clara y comprensible.
Ejemplo: "Recorrer el array, sumar elementos, actualizar la máxima suma si es mayor".

Piensa en estructuras de datos adecuadas:
¿Necesitas pilas, colas, diccionarios, o conjuntos para facilitar el trabajo?

Esquematiza el flujo del algoritmo:
Usa diagramas de flujo o pasos secuenciales para visualizar cómo se resolverá el problema.

1. pseudocod

2. estr dat 

3. diagram


2. Documentar y escribir el código:

1. Escribe el código basado en tu plan:
Sigue el pseudocódigo y comenta cada paso.

2. Hazlo modular:
Divide tu solución en funciones pequeñas y reutilizables.

3. Incluye validaciones y manejo de errores:
Por ejemplo, si el input es nulo o no tiene el formato esperado.


3. Comparar con otros enfoques:

1. Explora soluciones alternativas:
Tal vez haya una técnica más directa o eficiente.

2. Aprende de problemas similares:
Busca patrones en soluciones


4. Técnicas para plantear soluciones:

Descomposición del problema.
Uso de ejemplos concretos.
Identificación de patrones repetitivos.
Seleccionar estructuras de datos adecuadas.
Definir un pseudocódigo claro.
Probar con casos límites.
Optimización progreso.


5. Comprensión profunda: 

1. Comprender el problema

¿Cuál es el problema?
¿Qué se te da? (datos de entrada).
¿Qué se busca? (solución deseada).
¿Puedes expresar el problema en tus propias palabras?
¿Qué información o condiciones son relevantes?


Haz preguntas como:

¿Cuáles son los datos de entrada y salida?
¿Qué restricciones existen?
¿Qué casos especiales deben considerarse?


2. Dividir el problema en partes más pequeñas:

En lugar de abordar el problema completo, descomponlo en tareas más simples.
Por ejemplo, si tienes que ordenar una lista y luego eliminar duplicados:
Paso 1: Escribe un algoritmo para ordenar la lista.
Paso 2: Escribe otro para eliminar duplicados.


3. Implementar y probar por partes:

Escribe y prueba cada componente de tu solución de forma incremental.
Evita escribir todo el código de una sola vez sin probarlo.

Refactorizar 


4. Plan: 

¿Has resuelto un problema similar antes?
¿Puedes reducir el problema a uno más simple?
¿Existen patrones o conexiones con problemas conocidos?

Resolver un caso más simple o particular.
Trabajar hacia atrás (de la solución al problema).
Identificar patrones.
Dividir el problema en partes más manejables.


5. Código modular: 

Dividir un programa en módulos más pequeños y bien definidos que realizan tareas específicas. 
Cada módulo tiene una responsabilidad clara y se puede desarrollar, probar y mantener de forma independiente.
Los módulos se pueden componer para construir el programa completo.
Cada módulo se centra en una tarea o funcionalidad específica, lo que facilita la lectura, el mantenimiento y la depuración del código.
Se pueden reutilizar en diferentes proyectos o contextos, lo que ahorra tiempo y esfuerzo
Se pueden implementar utilizando clases, funciones, paquetes o cualquier otro mecanismo proporcionado por el lenguaje de programación.
Es importante definir interfaces claras entre los módulos para establecer cómo interactúan y se comunican entre sí. Esto permite que los módulos sean independientes unos de otros y se puedan modificar o reemplazar sin afectar a otros módulos.


Funciones: 

Necesitan una serie de cuidados: 

1. Encapsular: 
Meter el código que crea los objetos en las definiciones de función.

2. Generalizar:
Crear variables genericas en el cuerpo de la función, sin valores determinados para pasarles valores en la llamada.
Así los objetos son diferentes en dimensiones, formas, aspecto, etc.

3. Diseño de interfaz:
Explica como se utiliza la función: 

¿cuáles son los parámetros? 
¿Qué hace la función? 
¿Y cuál es el valor de retorno? 
Una interfaz es “limpia” si permite a la sentencia llamadora hacer lo que quiere sin lidiar con detalles innecesarios.		

4. Refactorización:
Reorganizar un programa para mejorar las interfaces y facilitar la reutilización de código.


6. CS50:

1. Comprender el problema con claridad
Desglosar el problema: El primer paso siempre es comprenderlo completamente antes de empezar a escribir código. Lea atentamente el enunciado del problema y piense en las entradas que tiene y las salidas esperadas.
Simplificar el problema: Intente identificar las partes clave del problema. ¿Puede dividirlo en subproblemas más pequeños? ¿Existe una versión más sencilla del problema que pueda resolverse primero?
Aclarar los casos límite: Considere cualquier caso especial, como entradas vacías, entradas extremadamente grandes u otras condiciones límite que podrían romper el algoritmo.

2. Pseudocódigo y Diseño de Algoritmos
Planificar antes de codificar: En CS50, se recomienda pensar en pseudocódigo antes de empezar a codificar. Anote los pasos del algoritmo en lenguaje sencillo para aclarar su razonamiento.
Pasos para la resolución de problemas:
Defina el objetivo: ¿Qué intenta lograr exactamente?
Elija una estrategia: Según el problema, considere enfoques como fuerza bruta, divide y vencerás, algoritmos voraces, programación dinámica, etc.
Escriba pseudocódigo: Esto le permite centrarse en el flujo lógico de la solución sin preocuparse por la sintaxis.

3. Elija las Estructuras de Datos Adecuadas
##### Estructuras de datos eficientes: CS50 enfatiza la importancia de elegir la estructura de datos adecuada para el problema en cuestión, ya que esto puede afectar drásticamente el rendimiento de su algoritmo. Por ejemplo:
Matrices y Listas: Excelentes para datos secuenciales, pero ineficientes para operaciones de búsqueda (a menos que estén ordenados).
Tablas hash (Diccionarios/Mapas): Eficientes para búsquedas, inserciones y eliminaciones.
Pilas y colas: Útiles para problemas que requieren operaciones LIFO (último en entrar, primero en salir) o FIFO (primero en entrar, primero en salir).
Árboles: En particular, árboles de búsqueda binaria para una búsqueda, inserción y eliminación eficientes.
Gráficos: Para representar datos interconectados (como redes sociales u hojas de ruta).

4. Análisis de complejidad temporal y espacial
Notación Big O: Aprenda a evaluar la complejidad temporal y espacial de sus algoritmos. Esta es una parte fundamental de CS50 y es esencial para la resolución eficiente de problemas. El objetivo es reducir la complejidad computacional innecesaria (O(n²), O(2^n), etc.) y optimizar para tiempos de ejecución más rápidos.
Optimizar algoritmos: CS50 enseña que, a menudo, hay más de una manera de resolver un problema y que se debe buscar el enfoque más eficiente. Por ejemplo:
Algoritmos de ordenamiento: Ordenamiento de burbuja vs. Ordenamiento por fusión (O(n²) vs. O(n log n)).
Algoritmos de búsqueda: Búsqueda lineal vs. Búsqueda binaria (O(n) vs. O(log n)).

5. Divide y vencerás
Divide los problemas grandes en problemas más pequeños: Divide y vencerás es un paradigma clave utilizado en muchos algoritmos eficientes (como el ordenamiento por fusión o el ordenamiento rápido). Al dividir los problemas en subproblemas más pequeños, a menudo se pueden resolver recursivamente y combinar los resultados de forma eficiente.

6. Iterar y probar
Empieza por lo simple: No intentes crear una solución compleja de inmediato. Empieza resolviendo el problema de la forma más sencilla posible (aunque sea ineficiente) y luego mejóralo gradualmente. Esto se conoce como "enfoque iterativo".
Prueba exhaustivamente: Escribe casos de prueba, especialmente casos extremos, para asegurarte de que tu solución funciona en todas las condiciones. CS50 enfatiza esto en sus conjuntos de problemas.
Depuración: Utilice herramientas de depuración, sentencias de impresión o un depurador para rastrear su código y asegurarse de que funcione correctamente.

7. Aproveche las bibliotecas y las funciones integradas
No reinvente la rueda: CS50 le anima a utilizar bibliotecas y funciones integradas siempre que sea posible. Por ejemplo, utilice qsort() para ordenar en C o sort() en Python. Las bibliotecas suelen implementar las soluciones más optimizadas y eficientes.

8. Piense recursivamente (si cabe)
Soluciones recursivas: Muchos problemas se pueden resolver de forma elegante mediante la recursión, y CS50 profundiza en el pensamiento recursivo. La recursión puede simplificar el proceso de resolución de problemas, especialmente para problemas que involucran árboles, grafos o problemas que se descomponen naturalmente en subproblemas más pequeños.
Caso base: Asegúrese de definir un caso base claro para las funciones recursivas para evitar la recursión infinita y los desbordamientos de pila.

9. Trabaje a la inversa
Pensamiento inverso: En algunos casos, resolver el problema a la inversa puede ser útil. Por ejemplo, si intentas encontrar una ruta en un gráfico, podrías trabajar en sentido inverso desde el objetivo hasta el inicio.
Piensa en la condición final: ¿Cómo se ve la solución una vez resuelto el problema? Esto puede ayudarte a retroceder y a trazar los pasos para llegar a ella.
 

#### kISS, DRY, YAGNI, SOLID 

##### 1. KISS: 
El código debe ser: Fácil de entender, mantener, probar y difícil de romper

Ventajas: 
1. Menos bugs: El código simple tiene menos lugares donde esconder errores.
2. Más fácil de mantener: Otros (¡y tú mismo en el futuro!) entenderán lo que hiciste.
3. Facilita la colaboración: Es más fácil revisar y compartir código sencillo.
4. Agiliza los cambios: Si algo necesita cambiar, un diseño simple es más flexible.

Usos: 
1. Cuando diseñes funciones, clases, módulos o arquitectura.
2. Al elegir una solución: ¿necesitas realmente un framework, o basta con unas líneas de código?
3. Cuando tu primera idea suena “ingeniosa” pero poco clara: replantéala más simple

Ej: 

No KISS: Aplicar demasiada lógica
KISS: expresión clara y Pythonic
 
No KISS: Usar if else para errores
KISS: Usar try except
 
No KISS: Demasiadas variables para un cálculo/proceso
KISS: Usar métodos, expresiones cortas

```
def sumar(a, b):
  return a + b;

def es_par(n):
    return n % 2 == 0
    
def contar_pares(lista):
    return sum(1 for n in lista if n % 2 == 0)

def dividir(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Error: división por cero"

def leer_archivo(nombre_archivo):
    with open(nombre_archivo, 'r') as f:
        return f.readlines()

```


##### 2. DRY: 
Evitar la duplicación de lógica o datos dentro de un sistema, para mejorar su mantenimiento, legibilidad y reducir la probabilidad de errores
Cada pieza de conocimiento (código, una consulta SQL, una definición de dato) debe existir en un único lugar dentro de la base de código.

Ventajas: 
1. Mantenibilidad: Si algo cambia, solo se actualiza en un sitio, no en todos los duplicados.
2. Legibilidad: Evita confusión sobre qué fragmento es “el verdadero”.
3. Menos errores: Al corregir un bug, se hace en un solo lugar 

Prácticas:
1. Funciones reutilizables: Extraer lógica común en helpers o utilidades.
2. Clases y herencia / composición: Factorizar comportamiento compartido.
3. Plantillas / componentes: En front-end, unificar vistas repetidas.
4. Módulos y paquetes: Centralizar constantes y configuraciones

Ej: 
No DRY: Repetir parte lógica/instrucciones en diferentes clases, func, etc. 
DRY: Abstraer ese código repetido en una func, métodos de clases, etc. 

No DRY: Repetir bucles, estructuras, acumuladores
DRY: Extraemos la parte común en una func, método de clase para usarlo en otras funciones, clases. 

No DRY: Duplicar datos/valores en entidades de bases de datos/código 
DRY: Abstraer esos datos en una estructura. 

```
def producto(a, b): return a * b;
def calcularAreaRectangulo(a, b): return producto(a, b); 
def calcularAreaTriangulo(base, altura): return producto(base, altura) / 2;
def calcularAreaParalelogramo(a, b): return producto(a, b);

def mostrar_error(mensaje):
    print(f"ERROR: {mensaje}")

def validar_usuario(usuario):
    if not usuario:
        mostrar_error("usuario inválido")
        return False
    # …

def validar_contrasena(contrasena):
    if len(contrasena) < 8:
        mostrar_error("contraseña inválida")
        return False
    # …

def sumar_por_condicion(lista, condicion):
    total = 0
    for x in lista:
        if condicion(x):
            total += x
    return total

# Ahora reutilizamos:
sumar_pares   = lambda lista: sumar_por_condicion(lista, lambda x: x % 2 == 0)
sumar_impares = lambda lista: sumar_por_condicion(lista, lambda x: x % 2 != 0)

# config.py
DB_HOST       = "db.ejemplo.com"
DB_PUERTO     = 5432
DB_USUARIO    = "admin"
DB_CONTRASEÑA = "secreto"

# main.py
import config

def conectar_bd():
    # usa config.DB_HOST, config.DB_PUERTO, etc.
    pass

def crear_backup():
    # usa config.DB_HOST, config.DB_PUERTO, etc.
    pass

```


##### 3. YAGNI:
No se debería escribir código por adelantado para funcionalidades que todavía no necesitas.

El código no necesario: 
1. Suele ser una perdida de tiempo. 
2. Es muy probable que esos casos nunca ocurran.
3. El código extra complica el sistema innecesariamente.
4. Retrasa lo que realmente importa: resolver el problema actual

Ventajas: 
1. Evita complejidad innecesaria: Menos cosas que mantener, entender y probar.
2. Más velocidad: Te enfocas solo en lo que agrega valor ahora.
3. Más flexibilidad: Es más fácil adaptarse a cambios reales que a predicciones.
4. Menos bugs: El código no utilizado tiende a contener errores invisibles

Aplicación: 
1. Al escribir funciones: evita parámetros opcionales innecesarios.
2. Al diseñar arquitecturas: no prepares módulos que no usarás ahora.
3. Al comentar: evita anotar futuros escenarios hipotéticos como si fueran urgentes.
4. Al añadir dependencias: solo instala librerías si las estás usando ya

Ej: 
No YAGNI: Añadir una función, operación a una función, objeto, clase que no la necesita en el momento. 
YAGNI: Agregar la función cuando se la necesite. 

No YAGNI: Añadir parámetros que no son usados o no son necesarios para las funciones que se usan en el momento. 
YAGNI: Añadir funcionalidades, métodos de clase cuando las necesites. 

No YAGNI: Crear configuraciones que no se usan. 
YAGNI: Agregarlas cuando se puedan usar. 

No YAGNI: Diseñar interfaces para métodos que no se van a utilizar. 
YAGNI: Añadir esos métodos cuando se os necesites. 

```
# Función que calcula la suma, pero prepara también una opción para multiplicar (aunque no se usa)
def operar(a, b, modo='suma'):
    if modo == 'suma':
        return a + b
    elif modo == 'multiplicacion':
        return a * b
    else:
        raise ValueError("Modo no soportado")

def sumar(a, b):
    return a + b


def procesar_pedido(pedido, enviar_email=False, generar_factura=False, registrar_log=False):
    """
    Procesa un pedido y opcionalmente envía email, genera factura y registra en log.
    """
    # Lógica principal de procesamiento
    resultado = _procesar(pedido)

    if enviar_email:
        _enviar_email(pedido, resultado)
	...


def procesar_pedido(pedido):
    """
    Procesa un pedido (hoy solo procesar).
    """
    return _procesar(pedido)


class GestorUsuarios:
	# solo lo necesario
    def crear_usuario(self, datos):
        # lógica de creación
        pass

    def actualizar_usuario(self, datos):
        # lógica de actualización
        pass

# config.py
# solo la config necesaria
DB_HOST = "localhost"
DB_PORT = 5432

```

###### Diseño de interfaces: 

No YAGNI: que no las usaremos 

```
from abc import ABC, abstractmethod

class Almacenamiento(ABC):
    @abstractmethod
    def guardar(self, dato):
        pass

    @abstractmethod
    def leer(self, clave):
        pass
	...
	
```

YAGNI: 

```
class AlmacenamientoSimple:
    def guardar(self, dato):
        # solo guardar, hoy no necesitamos leer o eliminar
        pass

```


##### 4. SRP:
Una clase, módulo, función o componente debe tener una sola razón para cambiar.
Debe encargarse de una única cosa. 
Si hace más de una cosa, se vuelve difícil de mantener, probar o extender.

Ventajas: 
1. Mantenibilidad: Si un cambio en una parte del sistema afecta muchas funciones dentro de un archivo/clase, SRP no se está cumpliendo.
2. Legibilidad: Cada parte del código tiene un propósito claro.
3. Reutilización: Las piezas especializadas son más fáciles de usar en otros contextos.
4. Pruebas más simples: Puedes probar responsabilidades individuales sin interferencias

Usos: 
1. Al diseñar clases u objetos en POO.
2. Al dividir módulos o archivos grandes.
3. Al crear componentes en frameworks como React o Vue.
4. Al estructurar microservicios

Ej: 
No SRP: Una clase con varias responsabilidades/cálculos
SRP: Crear clase/dividirlas con la responsabilidad correspondiente. 

No SRP: Clase que hace varias cosas distintas con varios métodos
Genera multiples razones de cambio. 
SRP: Dividir, funciones, clases para que tengan una sola responsabiliddad. 
Para que cada función haga lo que le corresponde. 

```
class Reporte:
    def __init__(self, datos):
        self.datos = datos

    def calcular_promedio(self):
        return sum(self.datos) / len(self.datos)

    def guardar_como_pdf(self, nombre_archivo):
        # Lógica para exportar como PDF
        pass

```

```
class AnalizadorDeDatos:
    def __init__(self, datos):
        self.datos = datos

    def calcular_promedio(self):
        return sum(self.datos) / len(self.datos)

class ExportadorPDF:
    def guardar(self, datos, nombre_archivo):
        # Lógica para exportar como PDF
        pass

```

###### init y métodos en clases: 
init solo cuando la clase tiene propiedades, así las puede usar. 
métodos: puede que no necesite propiedades de clase. 

Ahora cada clase tiene una sola razón para cambiar


##### 5. Open-closed: 
“Las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para su extensión, pero cerradas para su modificación.”

1. Abierto para extensión
Añadir nuevo comportamiento o funcionalidades a una pieza de código sin alterar su código fuente original

2. Cerrado para modificación
No debes tocar el código existente —que ya funciona y está probado— cada vez que necesites cambiar o ampliar su comportamiento

Ventajas:
1. Estabilidad de la base de código
Al no modificar clases ya probadas, reduces el riesgo de introducir regresiones.

2. Facilidad de mantenimiento
El código se convierte en un conjunto de “bloques” extensibles que interactúan por interfaces conocidas.

3. Escalabilidad
Al crecer el sistema, puedes incorporar nuevos requisitos sin reescribir lo que ya funciona.

Aplicación: 
1. Herencia y polimorfismo (en POO)
Define una interfaz o clase base, y “extiende” su comportamiento con subclases nuevas.

2. Composición y delegación
Envuelve o inyecta dependencias que cumplan una interfaz común, permitiendo sustituir implementaciones.

3. Patrones de diseño
Muchos patrones (Strategy, Decorator, Factory Method) facilitan agregar funcionalidades sin tocar el código existente

Prácticas: 
1. Programar contra interfaces (o clases abstractas), no contra implementaciones concretas.
2. Inyección de dependencias: permite “inyectar” la implementación que quieras sin modificar al consumidor.
3. Favorecer la composición: en muchos casos, es más flexible que la herencia.


Ej: 
No O-C: Crear métodos directos para agregar funcionalidad
Hace que tengamos que modificar el archivo de código fuente de esta funcionalidad. 

O-C: Crear una clase superior abstracta, abstracciones 
Pasar abstracciones a las subclases. 
No se necesita modificar el archivo de la clase base. 
Se crear clases abstractas. 


1. Usar extensiones, abstracciones, contratos, etc
2. No modificar código interno. 

Básico: Herencia y polimorfismo; clase base o interfaz para que subclases las apliquen.
Avanzado: composición, delegación o patrones de diseño; strategy, decorador o factory.

Sin Open–Closed: 

```
class Reporte:
    def __init__(self, datos):
        self.datos = datos

    def imprimir(self, tipo):
        if tipo == 'PDF':
            # lógica de impresión PDF
            pass
        elif tipo == 'HTML':
            # lógica de impresión HTML
            pass
        # cada vez que queramos un nuevo formato, modificamos esta clase...

```

Cada vez que añades un nuevo formato (CSV, Markdown…), tienes que abrir y editar Reporte.imprimir(): riesgo de romper lo existente


Con Open-Closed: 

```
from abc import ABC, abstractmethod

class Reporte(ABC):
    def __init__(self, datos):
        self.datos = datos

    @abstractmethod
    def imprimir(self):
        pass

class ReportePDF(Reporte):
    def imprimir(self):
        # lógica de impresión PDF
        pass

class ReporteHTML(Reporte):
    def imprimir(self):
        # lógica de impresión HTML
        pass

# Cuando necesites un nuevo formato, creas una nueva subclase:
class ReporteCSV(Reporte):
    def imprimir(self):
        # lógica de CSV
        pass

# Uso:
def generar_reporte(reporte: Reporte):
    reporte.imprimir()

# No cambias nada en las clases existentes, solo añades ReporteCSV.

```

pen-closed con estrategia

```
from abc import ABC, abstractmethod

class Descuento(ABC):
    @abstractmethod
    def aplicar(self, precio):
        pass

class DescuentoFijo(Descuento):
    def __init__(self, monto):
        self.monto = monto

    def aplicar(self, precio):
        return precio - self.monto

class DescuentoPorcentaje(Descuento):
    def __init__(self, porcentaje):
        self.porcentaje = porcentaje

    def aplicar(self, precio):
        return precio * (1 - self.porcentaje)

# Para agregar otro tipo de descuento, creas otra clase que implemente Descuento.

def calcular_precio_final(precio, descuento: Descuento):
    return descuento.aplicar(precio)

# Uso:
precio = 100
d1 = DescuentoFijo(10)
d2 = DescuentoPorcentaje(0.2)

print(calcular_precio_final(precio, d1))  # 90
print(calcular_precio_final(precio, d2))  # 80

```

Con estos patrones, tu código queda cerrado a modificaciones (no tocas las clases ya probadas) y abierto a nuevas extensiones (añades nuevas subclases que implementen la interfaz/abstracta).


##### 6. Liskov substitution:
“Si S es un subtipo de T, entonces los objetos de tipo T en un programa pueden ser sustituidos por objetos de tipo S sin alterar las propiedades deseables del programa (corrección, tareas realizadas, etc.).”

1. Subtipo sustituible: 
Cualquier clase derivada (subclase) debe comportarse de modo que, cuando usemos un objeto de la subclase donde se espera uno de la superclase, el programa siga funcionando correctamente.

2. Contrato intacto: 
La subclase no debe violar las expectativas (precondiciones, postcondiciones o invariantes) definidas por la clase base.

Ventajas: 
1. Seguridad de tipo: 
Permite que el polimorfismo sea fiable sin tener que hacer “chequeos extra” en tiempo de ejecución.

2. Extensibilidad: 
Nuevas subclases pueden añadirse sin cambiar código cliente que trabaja con la clase base.

3. Mantenibilidad: 
Reduce casos especiales y excepciones, haciendo el diseño más consistente.


Prácticas: 
1. No reforzar precondiciones en la subclase: 
No exigir más (por ejemplo, parámetros adicionales) que la clase base.

2. No debilitar postcondiciones: 
La subclase debe cumplir, al menos, con lo prometido por la base.

3. Mantener invariantes: 
Cualquier propiedad que la clase base garantice debe seguir siendo válida tras usar la subclase.

4. Programar contra abstracciones (interfaces o clases abstractas), no contra implementaciones concretas

Ej: 
No Liskov: Usar herencia
Liskov: Usar interfaces

No Liskov: No crear contratos, solo métodos
Liskov: Crear contratos, respetar los contratos. 


Con LSP: diseño basado en interfaces

En lugar de heredar “Cuadrado” de “Rectángulo”, definimos una jerarquía más adecuada

```
from abc import ABC, abstractmethod

class Figura2D(ABC):
    @abstractmethod
    def area(self):
        pass

class Rectangulo(Figura2D):
    def __init__(self, ancho, alto):
        self.ancho = ancho
        self.alto = alto

    def area(self):
        return self.ancho * self.alto

class Cuadrado(Figura2D):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado * self.lado

def imprimir_area(fig: Figura2D):
    print(f"Área: {fig.area()}")

# Ahora funciona correctamente con ambos:
imprimir_area(Rectangulo(5, 10))  # 50  
imprimir_area(Cuadrado(7))       # 49

```

Cada subclase implementa el método area() sin alterar el contrato, y el código cliente no necesita saber el tipo concreto


LSP con precondiciones y poscondiciones

La subclase no refuerza precondiciones ni debilita postcondiciones:

```
class Base:
    def procesar(self, valor: int) -> int:
        if valor < 0:
            raise ValueError("Valor negativo no permitido")
        return valor * 2

class Derivada(Base):
    def procesar(self, valor: int) -> int:
        # cumple exactamente las mismas condiciones de entrada
        resultado = super().procesar(valor)
        # añade comportamiento extra que no cambia el contrato:
        print(f"Valor procesado correctamente: {valor}")
        return resultado

```

Aquí Derivada extiende procesar sin restringir casos válidos ni alterar el resultado esperado



##### 7. Interface segregation

“Los clientes no deberían verse forzados a depender de interfaces que no utilizan.”

Es mejor tener muchas interfaces específicas y pequeñas que una sola grande y genérica


Conceptos: 
1. Segregar interfaces: 
Divide una interfaz amplia en varias interfaces más pequeñas y enfocadas
 
2. Clientes ligeros:
Cada cliente implementa solo la interfaz (o interfaces) que realmente necesita

Ventajas: 
1. Menos dependencias innecesarias:
Si tu clase implementa métodos que no usa, se vuelve más frágil y difícil de mantener.

2. Mayor cohesión:
Las interfaces pequeñas agrupan comportamientos muy relacionados, facilitando la comprensión.

3. Flexibilidad y extensibilidad:
Nuevos clientes o implementaciones pueden elegir únicamente las interfaces relevantes, sin arrastrar métodos ajenos

Claves de la implementación en los ejemplos: 
1. Cada interfaz agrupa solo las operaciones necesarias.
2. Las clases clientes implementan únicamente las interfaces que usan, evitando métodos “vacíos” o excepciones innecesarias.
3. Así logramos cohesión alta y bajo acoplamiento, facilitando mantenimiento y evolución

Ejs:

No ISP: Tener una gran interfaz con muchos métodos
ISP: Tener muchas interfaces con los métodos necesarios. 

No ISP: Una gran clase abstracta/interfaz con muchos métodos
Otra gran clase que aplique todos esos metódos uno tras otro. 
ISP: Varias clases abstractas con un método especifico
Varias clases que aplican un método correspondiente. 


1. Interfaces pequeñas, en lugar de una gran interfaz con muchos métodos
2. Se implementan solo los métodos necesarios para cada cliente/subclase
3. Interfaces por rol o uso: Cada interfaz agrupa métodos muy relacionados.
4. Composición: Un objeto puede implementar varias interfaces según sus capacidades.
5. Revisa y refactoriza cuando una interfaz crece demasiado:  Sepárala en partes más manejables


Separamos la gran interfaz en varias, cada una con responsabilidad única

```
class Impresora(ABC):
    @abstractmethod
    def imprimir(self, documento):
        pass

class Escaner(ABC):
    @abstractmethod
    def escanear(self, documento):
        pass

class Fax(ABC):
    @abstractmethod
    def enviar_fax(self, documento, numero):
        pass

# Ahora las implementaciones solo toman lo que usan:
class ImpresoraBasica(Impresora):
    def imprimir(self, documento):
        print(f"Imprimiendo {documento}")

class EquipoOficina(Impresora, Escaner, Fax):
    def imprimir(self, documento):
        print(f"Imprimiendo {documento}")
    def escanear(self, documento):
        print(f"Escaneando {documento}")
    def enviar_fax(self, documento, numero):
        print(f"Enviando fax de {documento} al {numero}")

```

ImpresoraBasica: solo implementa Impresora.

EquipoOficina: implementa las tres interfaces porque las necesita


Con ISP: 

```
from abc import ABC, abstractmethod

class NotificadorEmail(ABC):
    @abstractmethod
    def enviar_email(self, destino, mensaje):
        pass

class NotificadorSMS(ABC):
    @abstractmethod
    def enviar_sms(self, destino, mensaje):
        pass

class NotificadorPush(ABC):
    @abstractmethod
    def enviar_push(self, destino, mensaje):
        pass

# Implementaciones centradas:

class ServicioEmail(NotificadorEmail):
    def enviar_email(self, destino, mensaje):
        # lógica real…
        pass

class ServicioSMS(NotificadorSMS):
    def enviar_sms(self, destino, mensaje):
        # lógica real…
        pass

class ServicioPush(NotificadorPush):
    def enviar_push(self, destino, mensaje):
        # lógica real…
        pass

```

Claves de la implementación en los ejemplos: 
1. Cada interfaz agrupa solo las operaciones necesarias.
2. Las clases clientes implementan únicamente las interfaces que usan, evitando métodos “vacíos” o excepciones innecesarias.
3. Así logramos cohesión alta y bajo acoplamiento, facilitando mantenimiento y evolución


##### 8. Dependency inversion: 

“Los módulos de alto nivel no deben depender de módulos de bajo nivel. 
Ambos deben depender de abstracciones.
Las abstracciones no deben depender de detalles. 
Los detalles deben depender de abstracciones.”

1. Módulos de alto nivel (la lógica de negocio, “qué hace” tu aplicación)
2. Módulos de bajo nivel (implementaciones concretas: acceso a BD, envío de correo, llamadas a API…)

DIP dice que ninguno de esos niveles debe acoplarse directamente al otro, sino que ambos se relacionan a través de interfaces o clases abstractas. 
Así:
1. El código de negocio programa contra una interfaz (p. ej. Notifier), no contra la clase concreta (EmailSender, SMSSender, etc.).
2. Las implementaciones concretas (“detalles”) implementan esa interfaz.

Importancia: 
1. Desacoplamiento: Cambiar la forma en que envías notificaciones (de Email a SMS, o añadir Push) no obliga a tocar la lógica de negocio.
2. Testabilidad: En pruebas unitarias puedes inyectar un “doble” (mock o stub) de la interfaz que simule la dependencia, sin tocar código real.
3. Extensibilidad: Añadir nuevas implementaciones (por ejemplo, SlackNotifier) se reduce a crear una clase que implemente la interfaz, sin modificar nada más

Patrones para aplicarlo:
1. Inyección de dependencias (Dependency Injection)
Pasar la implementación concreta al constructor, a un setter o a un método factory, en lugar de instanciarla dentro de la clase de negocio.

2. Inversión de control (IoC Container)
En frameworks grandes, delegar al contenedor la responsabilidad de construir y ensamblar objetos según configuraciones.

3. Programar contra abstracciones
Definir interfaces o clases abstractas que describan únicamente el comportamiento necesario, manteniendo a raya los detalles

Ejs: 
No DIP: No crear modulos de negocio (Alto nivel: Clases abstractas/clases con métodos abstractos/abstracciones) 
y modulo de implementaciones (bajo nivel: usan las abstracciones de alto nivel)
A su vez inyectan métodos de otras clases. 
DIP: En sus constructores las clases inyectan tipos de clases de alto nivel
Las instancias se contruyen con las clases que inyectaron tipos de alto nivel en sus constructores. 

Rs:
1. Modulos de alto nivel: la lógica de negocio, “qué hace” tu aplicación 
2. Modulos de bajo nivel: implementaciones concretas: acceso a BD, envío de correo, llamadas a API 
3. Ambos dependen de abstracciones, no acoplamiento. 
4. Los detalles deben depender de abstracciones, no al reves.
5. Los modulos se relacionan con interfaces o clases abstractas

Código DI: 
1. El código de negocio programa contra una interfaz (p. ej. Notifier), no contra la clase concreta (EmailSender, SMSSender, etc.).
2. Las implementaciones concretas (“detalles”) implementan esa interfaz.

Ventajas: 
1. Desacoplamiento: Cambiar la forma en que envías notificaciones (de Email a SMS, o añadir Push) no obliga a tocar la lógica de negocio.
2. Testabilidad: En pruebas unitarias puedes inyectar un “doble” (mock o stub) de la interfaz que simule la dependencia, sin tocar código real.
3. Extensibilidad: Añadir nuevas implementaciones (por ejemplo, SlackNotifier) se reduce a crear una clase que implemente la interfaz, sin modificar nada más

Aplicación
1. Inyección de dependencias (Dependency Injection)
Pasar la implementación concreta al constructor, a un setter o a un método factory, en lugar de instanciarla dentro de la clase de negocio.

2. Inversión de control (IoC Container)
En frameworks grandes, delegar al contenedor la responsabilidad de construir y ensamblar objetos según configuraciones.

3. Programar contra abstracciones
Definir interfaces o clases abstractas que describan únicamente el comportamiento necesario, manteniendo a raya los detalles

Ej: 
Repositorio de datos:

Sin DIP: 
El servicio de negocio instancia directamente un repositorio concreto de base de datos

```
class UserRepositorySQL:
    def get_user(self, user_id):
        # Lógica para consultar SQL
        pass

class UserService:
    def __init__(self):
        self.repo = UserRepositorySQL()  # dependencia directa

    def find_user(self, user_id):
        return self.repo.get_user(user_id)

```


Con DIP:
Definimos una interfaz de repositorio y pasamos la implementación por inyección:

```
from abc import ABC, abstractmethod

class UserRepository(ABC):
    @abstractmethod
    def get_user(self, user_id):
        pass

class UserRepositorySQL(UserRepository):
    def get_user(self, user_id):
        # Lógica SQL…
        return {"id": user_id, "nombre": "Alice"}

class UserRepositoryMongo(UserRepository):
    def get_user(self, user_id):
        # Lógica Mongo…
        return {"_id": user_id, "nombre": "Alice"}

class UserService:
    def __init__(self, repo: UserRepository):
        self.repo = repo  # sólo conoce la abstracción

    def find_user(self, user_id):
        return self.repo.get_user(user_id)

# Al instanciar:
sql_repo   = UserRepositorySQL()
mongo_repo = UserRepositoryMongo()

service_sql   = UserService(sql_repo)
service_mongo = UserService(mongo_repo)

```

1. UserService (módulo de alto nivel) queda independiente de la tecnología de persistencia.
2. Para agregar nuevas formas de almacenar usuarios, solo creas nuevas implementaciones de UserRepository sin tocar UserService

Claves:
1. Desacoplamiento: los componentes de alto nivel no se rompen cuando cambian los de bajo nivel.
2. Testabilidad: podemos pasar mocks o stubs de la interfaz en tests sin tocar el código real.
3. Extensibilidad: añadir nuevas implementaciones no requiere modificar la lógica de negocio existente.

Con los patrones se logra un diseño más modular, flexible y robusto ante cambios futuros



# Built in functions

```
map()	Returns the specified iterator with the specified function applied to each item
next()	Returns the next item in an iterable
min()	Returns the smallest item in an iterable
object()	Returns a new object
reversed()	Returns a reversed iterator
round()	Rounds a numbers
sum()	Sums the items of an iterator
ascii() Returns a readable version of an object. Replaces none-ascii characters with escape character
classmethod()	Converts a method into a class method
filter()	Use a filter function to exclude items in an iterable object
getattr()	Returns the value of the specified attribute (property or method)
isinstance()	Returns True if a specified object is an instance of a specified object
issubclass()	Returns True if a specified class is a subclass of a specified object

```


# Keywords

```
return	To exit a function and return a value
as	To create an alias
assert	For debugging
from	To import specific parts of a module
To check if a value is present in a list, tuple, etc.
is	To test if two variables are equal
with	Used to simplify exception handling
yield	To return a list of values from a generator

```


# Exceptions

1. El bloque try le permite probar un bloque de código para detectar errores.
2. El bloque except le permite manejar el error.
3. El bloque else le permite ejecutar código cuando no hay ningún error.
4. El bloque finally le permite ejecutar código, independientemente del resultado de los bloques try y except

### Manejo de excepciones:

Cuando ocurre un error, o excepción como lo llamamos, Python normalmente se detendrá y generará un mensaje de error.

Estas excepciones se pueden manejar mediante la declaración try

Ej: 

El bloque try generará una excepción, porque x no está definido:

```
try:
  print(x)
except:
  print("An exception occurred") 

```

Dado que el bloque try genera un error, se ejecutará el bloque except.


Sin el bloque try, el programa se bloqueará y generará un error:

Ejemplo:

Esta declaración generará un error, porque x no está definido:

```
print(x) 

```


Muchas excepciones:

Puede definir tantos bloques exceptión como desee, por ejemplo, si desea ejecutar un bloque de código especial para un tipo especial de error:

Ejemplo:

Imprima un mensaje si el bloque try genera (raise) un NameError y otro para otros errores

```
 try:
  print(x)
except NameError:
  print("Variable x is not defined")
except:
  print("Something else went wrong") 
  
```


### Else: 

Define un bloque de código que se ejecutará si no se produjeron errores:

En este ejemplo, el bloque try no genera ningún error:

```
try:
  print("Hello")
except:
  print("Something went wrong")
else:
  print("Nothing went wrong")

```
Hello
Nothing went wrong


### Finally:

si se especifica, se ejecutará independientemente de si el bloque try genera un error o no.

```
 try:
  print(x)
except:
  print("Something went wrong")
finally:
  print("The 'try except' is finished") 

```

Something went wrong
The 'try except' is finished

#### Esto puede ser útil para cerrar objetos y limpiar recursos:

Ej: 

Intente abrir y escribir en un archivo que no se puede escribir:

```
try:
  f = open("demofile.txt")
  try:
    f.write("Lorum Ipsum")
  except:
    print("Something went wrong when writing to the file")
  finally:
    f.close()
except:
  print("Something went wrong when opening the file") 

```
Something went wrong when writing to the file

El programa puede continuar sin dejar abierto el objeto de archivo.


### Raise/Generar una excepción

Puedes elegir lanzar una excepción si ocurre una condición.

Para lanzar (o generar) una excepción, utilice la palabra clave raise.

Ejemplo:

Genera un error y detiene el programa si x es menor que 0:

```
x = -1

if x < 0:
  raise Exception("Sorry, no numbers below zero") 
  
```
Traceback (most recent call last):
  File "demo_ref_keyword_raise.py", line 4, in <module>
    raise Exception("Sorry, no numbers below zero")
Exception: Sorry, no numbers below zero 


La palabra clave raise se utiliza para generar una excepción.

Puede definir qué tipo de error generar y el texto que se imprimirá para el usuario.

Genera un TypeError si x no es un entero:

```
 x = "hello"

if not type(x) is int:
  raise TypeError("Only integers are allowed") 

```
Traceback (most recent call last):
  File "demo_ref_keyword_raise2.py", line 4, in <module>
    raise TypeError("Only integers are allowed")
TypeError: Only integers are allowed


Excepciones integradas que suelen generarse en Python:

```
ImportError 	Raised when an imported module does not exist
ArithmeticError 	Raised when an error occurs in numeric calculations
AssertionError 	Raised when an assert statement fails
AttributeError 	Raised when attribute reference or assignment fails
IndexError 	Raised when an index of a sequence does not exist
KeyError 	Raised when a key does not exist in a dictionary 
TypeError 	Raised when two different types are combined
ValueError 	Raised when there is a wrong value in a specified data type
ZeroDivisionError 	Raised when the second operator in a division is zero
...

```


# Prácticas de Clases: 

### 1. Diseño general de clases

Sigue el principio de una sola responsabilidad (SRP):
Cada clase debe tener una única responsabilidad o razón para cambiar.

2. Prefiere la composición sobre la herencia, salvo que haya una clara relación jerárquica ("es-un").

3. Haz uso de __str__ y __repr__:

	__str__: Para una representación legible por humanos.

	__repr__: Para una representación útil para depuración y desarrollo (idealmente que pueda usarse con eval para recrear el objeto).

4. Evita clases "Dios" (God objects):
No hagas clases que controlen todo; divide en componentes más pequeños


### 2. Constructores y atributos

1. Usa el constructor init correctamente:
Inicializa solo lo necesario y evita lógica compleja allí.

2. Haz que los atributos privados lo sean usando (__)o (_):

```
self._atributo_interno  # convención: protegido
self.__atributo_privado  # nombre mangling: más "privado"

```

### 3. Usa propiedades (@property) en lugar de exponer atributos directamente:

```
@property
def saldo(self):
    return self._saldo

```


### 4. Métodos

1. Distingue entre métodos de instancia, clase y estáticos 

```
def metodo_instancia(self): pass
@classmethod
def metodo_de_clase(cls): pass
@staticmethod
def metodo_estatico(): pass

```

1. Haz que los métodos sean cohesivos:
Cada método debe hacer una cosa específica.

2. Evita side-effects inesperados:
Si un método cambia el estado, que quede claro en su nombre (agregar_item, resetear...).


### 5. Herencia y abstracción

1. Si usas herencia, aplica el principio Liskov:
Las subclases deben poder reemplazar a las superclases sin romper el código.

2. Usa clases abstractas si necesitas una interfaz común

```
from abc import ABC, abstractmethod
class Vehiculo(ABC):
    @abstractmethod
    def arrancar(self): pass

```

### 6. Estilo y convenciones

1. Sigue las convenciones de nombres de PEP 8:

Clases: CamelCase

Métodos/atributos: snake_case

Constantes: ALL_CAPS

2. Evita atributos públicos innecesarios:
Usa propiedades o métodos para acceder a datos internos si podrían cambiar 

```
class CuentaBancaria:
    def __init__(self, titular, saldo=0):
        self.titular = titular
        self._saldo = saldo

    @property
    def saldo(self):
        return self._saldo

    def depositar(self, cantidad):
        if cantidad > 0:
            self._saldo += cantidad

    def retirar(self, cantidad):
        if 0 < cantidad <= self._saldo:
            self._saldo -= cantidad
            return True
        return False

    def __str__(self):
        return f"Cuenta de {self.titular}, saldo: {self._saldo}"

```


# Diseño de Clases 


## 1. init y métodos en clases: 

init solo cuando la clase tiene propiedades, así las puede usar. 

métodos: puede que no necesite propiedades de clase. 


## 2. Interfaces:

Al principio del archivo importamos ABC y abstractmethod

La clase normal toma ABC y definimos un decorador @abstract method. 


```
from abc import ABC, abstractmethod

class Almacenamiento(ABC):
    @abstractmethod
    def guardar(self, dato):
        pass

    @abstractmethod
    def leer(self, clave):
        pass
	...
	
```

Clase base toma ABC como param

Las subclases toman a la clase base. 


```
from abc import ABC, abstractmethod

class Reporte(ABC):
    def __init__(self, datos):
        self.datos = datos

    @abstractmethod
    def imprimir(self):
        pass

class ReportePDF(Reporte):
    def imprimir(self):
        # lógica de impresión PDF
        pass

class ReporteHTML(Reporte):
    def imprimir(self):
        # lógica de impresión HTML
        pass

# Cuando necesites un nuevo formato, creas una nueva subclase:
class ReporteCSV(Reporte):
    def imprimir(self):
        # lógica de CSV
        pass

# Uso:
def generar_reporte(reporte: Reporte):
    reporte.imprimir()

# No cambias nada en las clases existentes, solo añades ReporteCSV.

```


## Clase base y subclases

Figura2D pasará a las subclases 

```
from abc import ABC, abstractmethod

class Figura2D(ABC):
    @abstractmethod
    def area(self):
        pass

class Rectangulo(Figura2D):
    def __init__(self, ancho, alto):
        self.ancho = ancho
        self.alto = alto

    def area(self):
        return self.ancho * self.alto

class Cuadrado(Figura2D):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado * self.lado

def imprimir_area(fig: Figura2D):
    print(f"Área: {fig.area()}")

# Ahora funciona correctamente con ambos:
imprimir_area(Rectangulo(5, 10))  # 50  
imprimir_area(Cuadrado(7))       # 49

```

Cada subclase implementa el método area() sin alterar el contrato, y el código cliente no necesita saber el tipo concreto


LSP con precondiciones y poscondiciones

La subclase no refuerza precondiciones ni debilita postcondiciones:

```
class Base:
    def procesar(self, valor: int) -> int:
        if valor < 0:
            raise ValueError("Valor negativo no permitido")
        return valor * 2

class Derivada(Base):
    def procesar(self, valor: int) -> int:
        # cumple exactamente las mismas condiciones de entrada
        resultado = super().procesar(valor)
        # añade comportamiento extra que no cambia el contrato:
        print(f"Valor procesado correctamente: {valor}")
        return resultado

```

Aquí Derivada extiende procesar sin restringir casos válidos ni alterar el resultado esperado


Con ISP: 

```
from abc import ABC, abstractmethod

class NotificadorEmail(ABC):
    @abstractmethod
    def enviar_email(self, destino, mensaje):
        pass

class NotificadorSMS(ABC):
    @abstractmethod
    def enviar_sms(self, destino, mensaje):
        pass

class NotificadorPush(ABC):
    @abstractmethod
    def enviar_push(self, destino, mensaje):
        pass

# Implementaciones centradas:

class ServicioEmail(NotificadorEmail):
    def enviar_email(self, destino, mensaje):
        # lógica real…
        pass

class ServicioSMS(NotificadorSMS):
    def enviar_sms(self, destino, mensaje):
        # lógica real…
        pass

class ServicioPush(NotificadorPush):
    def enviar_push(self, destino, mensaje):
        # lógica real…
        pass

```

Claves de la implementación en los ejemplos: 

1. Cada interfaz agrupa solo las operaciones necesarias.
2. Las clases clientes implementan únicamente las interfaces que usan, evitando métodos “vacíos” o excepciones innecesarias.
3. Así logramos cohesión alta y bajo acoplamiento, facilitando mantenimiento y evolución


Con DIP:
Definimos una interfaz de repositorio y pasamos la implementación por inyección:

```
from abc import ABC, abstractmethod

class UserRepository(ABC):
    @abstractmethod
    def get_user(self, user_id):
        pass

class UserRepositorySQL(UserRepository):
    def get_user(self, user_id):
        # Lógica SQL…
        return {"id": user_id, "nombre": "Alice"}

class UserRepositoryMongo(UserRepository):
    def get_user(self, user_id):
        # Lógica Mongo…
        return {"_id": user_id, "nombre": "Alice"}

class UserService:
    def __init__(self, repo: UserRepository):
        self.repo = repo  # sólo conoce la abstracción

    def find_user(self, user_id):
        return self.repo.get_user(user_id)

# Al instanciar:
sql_repo   = UserRepositorySQL()
mongo_repo = UserRepositoryMongo()

service_sql   = UserService(sql_repo)
service_mongo = UserService(mongo_repo)

```

1. UserService (módulo de alto nivel) queda independiente de la tecnología de persistencia.
2. Para agregar nuevas formas de almacenar usuarios, solo creas nuevas implementaciones de UserRepository sin tocar UserService

Claves:
1. Desacoplamiento: los componentes de alto nivel no se rompen cuando cambian los de bajo nivel.
2. Testabilidad: podemos pasar mocks o stubs de la interfaz en tests sin tocar el código real.
3. Extensibilidad: añadir nuevas implementaciones no requiere modificar la lógica de negocio existente.

Con los patrones se logra un diseño más modular, flexible y robusto ante cambios futuros



# Composición 

Es una forma de construir objetos complejos “ensamblándolos” a partir de otros más sencillos. 

En lugar de heredar de una clase padre, un objeto contiene (o “tiene un”) otro objeto como parte de su estado interno.


Ventajas: 

1. Flexibilidad: Permite cambiar dinámicamente el comportamiento al reemplazar subcomponentes.

2. Reutilización: Puedes combinar clases reutilizables sin crear jerarquías profundas de herencia.

3. Aislamiento: Cada clase se encarga sólo de su propia lógica, facilitando pruebas unitarias y mantenimiento


Implementación: 

1. Definir clases independientes: cada una con su responsabilidad.

2. Inyectar instancias de esas clases dentro de la clase compuesta, normalmente vía constructor o un setter


##### Ej: Básico

```
class Motor:
    def __init__(self, potencia):
        self.potencia = potencia  # en caballos de fuerza

    def arrancar(self):
        print(f"Motor de {self.potencia} CV arrancado.")

class Rueda:
    def __init__(self, diametro):
        self.diametro = diametro  # en pulgadas

    def girar(self):
        print(f"Rueda de {self.diametro} pulgadas girando.")

class Coche:
    def __init__(self, motor: Motor, ruedas: list[Rueda]):
        self.motor = motor            # composición: el coche tiene un motor
        self.ruedas = ruedas          # composición: el coche tiene 4 ruedas

    def arrancar(self):
        self.motor.arrancar()
        for rueda in self.ruedas:
            rueda.girar()

# Uso:
motor_v8 = Motor(potencia=450)
ruedas = [Rueda(diametro=18) for _ in range(4)]
mi_coche = Coche(motor_v8, ruedas)
mi_coche.arrancar()

```

Coche no hereda de Motor ni de Rueda.

En cambio, contiene objetos Motor y una lista de Rueda.

Si mañana quisiéramos usar un motor eléctrico, solo necesitamos otra clase MotorElectrico que tenga el mismo “contrato” (método arrancar) y pasarla al constructor de Coche


Composición vs. Herencia:

Aspecto: 

1. Relación “tiene un”: 
Composición (si) - Herencia (no). 

2. Relación “es un”:
 no - si. 
 
3. Grado de acoplamiento: 
Bajo: cada clase tiene su rol - Alto: la subclase depende de la superclase .

4. Cambio de comportamiento
Fácil: solo hay que inyectar otro objeto. 
Dificil: suele requerir reescritura o mix-ins


Prácticas de composición: 

1. Programar contra interfaces (o clases abstractas):

Define un conjunto de métodos esperados (por ejemplo, usando ABC) para que las implementaciones sean intercambiables


2. Inyección de dependencias:

Pasa instancias al constructor o mediante setters en lugar de crearlas internamente; así facilitas las pruebas y la reutilización


3. Delegación clara:

Documenta qué métodos de los subcomponentes expone la clase compuesta y considera usar __getattr__ con cuidado para “delegar” llamadas automáticamente

```
getattr()	Returns the value of the specified attribute (property or method)

```


4. Evita la sobre‑composición:

No fragmentes en exceso; si un objeto está compuesto por demasiados subobjetos diminutos, la lógica puede dispersarse y volverse difícil de seguir


##### Ej avanzado: interfaz abstracta para motores

```
from abc import ABC, abstractmethod

class IMotor(ABC):
    @abstractmethod
    def arrancar(self): pass

class MotorGasolina(IMotor):
    def arrancar(self): print("Arrancando motor de gasolina…")

class MotorElectrico(IMotor):
    def arrancar(self): print("Arrancando motor eléctrico…")

class Coche:
    def __init__(self, motor: IMotor):
        self.motor = motor

    def arrancar(self):
        self.motor.arrancar()

# Puedo elegir en tiempo de ejecución:
mi_coche_gas = Coche(MotorGasolina())
mi_coche_elec = Coche(MotorElectrico())

mi_coche_gas.arrancar()   # “Arrancando motor de gasolina…”
mi_coche_elec.arrancar()  # “Arrancando motor eléctrico…”

```

La abstracción IMotor garantiza que cualquier implementación de motor puede usarse con Coche, sin acoplar la clase a detalles concretos.


## Plan OOP


### Prácticas OOP 



### 1. Diseño simple: Funciones

Diseño basado en multiples funciones pequeñas con una sola responsabilidad. 

Estas se rehusarán en otras funciones. 


Uso de KISS, DRY y YAGNI

KISS: 

No KISS: Aplicar demasiada lógica
KISS: expresión clara y Pythonic
 
No KISS: Usar if else para errores
KISS: Usar try except
 
No KISS: Demasiadas variables para un cálculo/proceso
KISS: Usar métodos, expresiones cortas


DRY: 

No DRY: Repetir parte lógica/instrucciones en diferentes clases, func, etc. 
DRY: Abstraer ese código repetido en una func, métodos de clases, etc. 

No DRY: Repetir bucles, estructuras, acumuladores
DRY: Extraemos la parte común en una func, método de clase para usarlo en otras funciones, clases. 

No DRY: Duplicar datos/valores en entidades de bases de datos/código 
DRY: Abstraer esos datos en una estructura. 


YAGNI:

No YAGNI: Añadir una función, operación a una función, objeto, clase que no la necesita en el momento. 
YAGNI: Agregar la función cuando se la necesite. 

No YAGNI: Añadir parámetros que no son usados o no son necesarios para las funciones que se usan en el momento. 
YAGNI: Añadir funcionalidades, métodos de clase cuando las necesites. 

No YAGNI: Crear configuraciones que no se usan. 
YAGNI: Agregarlas cuando se puedan usar. 

No YAGNI: Diseñar interfaces para métodos que no se van a utilizar. 
YAGNI: Añadir esos métodos cuando se os necesites. 


KISS: 

```
def sumar(a, b):
  return a + b;

def es_par(n):
    return n % 2 == 0
    
def contar_pares(lista):
    return sum(1 for n in lista if n % 2 == 0)

def dividir(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Error: división por cero"

def leer_archivo(nombre_archivo):
    with open(nombre_archivo, 'r') as f:
        return f.readlines()

```


DRY:

```
def producto(a, b): return a * b;
def calcularAreaRectangulo(a, b): return producto(a, b); 
def calcularAreaTriangulo(base, altura): return producto(base, altura) / 2;
def calcularAreaParalelogramo(a, b): return producto(a, b);

def mostrar_error(mensaje):
    print(f"ERROR: {mensaje}")

def validar_usuario(usuario):
    if not usuario:
        mostrar_error("usuario inválido")
        return False
    # …

def validar_contrasena(contrasena):
    if len(contrasena) < 8:
        mostrar_error("contraseña inválida")
        return False
    # …

def sumar_por_condicion(lista, condicion):
    total = 0
    for x in lista:
        if condicion(x):
            total += x
    return total

# Ahora reutilizamos:
sumar_pares   = lambda lista: sumar_por_condicion(lista, lambda x: x % 2 == 0)
sumar_impares = lambda lista: sumar_por_condicion(lista, lambda x: x % 2 != 0)

# config.py
DB_HOST       = "db.ejemplo.com"
DB_PUERTO     = 5432
DB_USUARIO    = "admin"
DB_CONTRASEÑA = "secreto"

# main.py
import config

def conectar_bd():
    # usa config.DB_HOST, config.DB_PUERTO, etc.
    pass

def crear_backup():
    # usa config.DB_HOST, config.DB_PUERTO, etc.
    pass

```


YAGNI: 

```
def sumar(a, b):
    return a + b
    
def procesar_pedido(pedido):
    """
    Procesa un pedido (hoy solo procesar).
    """
    return _procesar(pedido)

class GestorUsuarios:
    def crear_usuario(self, datos):
        # lógica de creación
        pass

    def actualizar_usuario(self, datos):
        # lógica de actualización
        pass

# config.py
DB_HOST = "localhost"
DB_PORT = 5432

class AlmacenamientoSimple:
    def guardar(self, dato):
        # solo guardar, hoy no necesitamos leer o eliminar
        pass

```


### 2. Diseño OOP: Interfaces 

Multiples interfaces pequeñas y multiples clases que las aplican 

Las multiples clases no usan herencia, super, init clase superior 

Solo clase base y subclases que toman a la clase base. 

Uso SRP, O-C y LSP.


SRP: 

No SRP: Una clase con varias responsabilidades/cálculos
SRP: Crear clase/dividirlas con la responsabilidad correspondiente. 

No SRP: Clase que hace varias cosas distintas con varios métodos
Genera multiples razones de cambio. 
SRP: Dividir, funciones, clases para que tengan una sola responsabiliddad. 
Para que cada función haga lo que le corresponde. 


O-C: 

No O-C: Crear métodos directos para agregar funcionalidad
Hace que tengamos que modificar el archivo de código fuente de esta funcionalidad. 

O-C: Crear una clase superior abstracta, abstracciones 
Pasar abstracciones a las subclases. 
No se necesita modificar el archivo de la clase base. 
Se crear clases abstractas. 


LSP:

No Liskov: Usar herencia
Liskov: Usar interfaces

No Liskov: No crear contratos, solo métodos
Liskov: Crear contratos, respetar los contratos. 


SRP: 

1. Simple: 

Funciones con una responsabilidad aplicando KISS, DRY y YAGNI. 

```
def filtrar_activos(usuarios):
    return [u for u in usuarios if u['activo']]

def guardar_csv(registros, nombre_archivo):
    with open(nombre_archivo, 'w') as f:
        for r in registros:
            f.write(f"{r['nombre']},{r['email']}\n")

# Uso compuesto
usuarios_activos = filtrar_activos(usuarios)
cantidad = len(usuarios_activos)
guardar_csv(usuarios_activos, 'activos.csv')

```


2. Clases con una sola responsabilidad

Los métodos usan KISS, DRY y YAGNI

```
class AnalizadorDeDatos:
    def __init__(self, datos):
        self.datos = datos

    def calcular_promedio(self):
        return sum(self.datos) / len(self.datos)

class ExportadorPDF:
    def guardar(self, datos, nombre_archivo):
        # Lógica para exportar como PDF
        pass
```


3. Complejo: 

###### Inyecta dependencias y composición: clase base en constructor de otra clase independiente para ejecutar sus métodos. 

Son clases simples, no aplican interfaces. 

Estas clases independientes o sus instancias/objetos van a usar los métodos de la clase inyectada. 

```
class AnalizadorDeDatos:
    def __init__(self, datos):
        self.datos = datos

    def calcular_promedio(self):
        return sum(self.datos) / len(self.datos)


class GeneradorDeReporteTXT:
    def __init__(self, analizador: AnalizadorDeDatos):
        self.analizador = analizador

    def generar(self, nombre_archivo):
        promedio = self.analizador.calcular_promedio()
        with open(nombre_archivo, 'w') as f:
            f.write(f"Promedio: {promedio}\n")


class EnviadorDeEmail:
    def enviar(self, destinatario, ruta_archivo):
        # Lógica ficticia de envío de email con adjunto
        print(f"Enviando {ruta_archivo} a {destinatario}")

```


O-C:

##### Uso intensivo de Interfaces/abstracciones e inyección de dependencia y composición. 

Clase base y clases independientes que toman a la clase base. 

Uso: inyección de dependencia en clase que llama a los métodos de la clase que inyecto. 

1. 

```
from abc import ABC, abstractmethod

class Reporte(ABC):
    def __init__(self, datos):
        self.datos = datos

    @abstractmethod
    def imprimir(self):
        pass

class ReportePDF(Reporte):
    def imprimir(self):
        # lógica de impresión PDF
        pass

class ReporteHTML(Reporte):
    def imprimir(self):
        # lógica de impresión HTML
        pass

# Cuando necesites un nuevo formato, creas una nueva subclase:
class ReporteCSV(Reporte):
    def imprimir(self):
        # lógica de CSV
        pass

# Uso:
def generar_reporte(reporte: Reporte):
    reporte.imprimir()

# No cambias nada en las clases existentes, solo añades ReporteCSV.

```


2. Clase base y clases independientes que toman esa clase base. 

Uso inyección de dependencias en clase que llama a los métodos de la clase que inyecto. 

```
from abc import ABC, abstractmethod

class ExportadorBase(ABC):
    def __init__(self, datos):
        self.datos = datos

    @abstractmethod
    def exportar(self):
        pass

class ExportadorJSON(ExportadorBase):
    def exportar(self):
        import json
        return json.dumps(self.datos)

class ExportadorXML(ExportadorBase):
    def exportar(self):
        elementos = ''.join(f"<{k}>{v}</{k}>" for k, v in self.datos.items())
        return f"<root>{elementos}</root>"

# Para un nuevo formato solo añades una subclase:
class ExportadorCSV(ExportadorBase):
    def exportar(self):
        lineas = [','.join(str(v) for v in self.datos.values())]
        return '\n'.join(lineas)

# Uso:
def generar_exportacion(exportador: ExportadorBase):
    resultado = exportador.exportar()
    print(resultado)

datos = {'a': 1, 'b': 2}
generar_exportacion(ExportadorJSON(datos))
generar_exportacion(ExportadorCSV(datos))
# No tocamos las clases existentes, solo creamos nuevas.

```


###### 3. Clase base y clases independientes: Uso inyección de dependencias 

```
from abc import ABC, abstractmethod

class Descuento(ABC):
    @abstractmethod
    def aplicar(self, precio):
        pass

class DescuentoFijo(Descuento):
    def __init__(self, monto):
        self.monto = monto

    def aplicar(self, precio):
        return precio - self.monto

class DescuentoPorcentaje(Descuento):
    def __init__(self, porcentaje):
        self.porcentaje = porcentaje

    def aplicar(self, precio):
        return precio * (1 - self.porcentaje)

# Para agregar otro tipo de descuento, creas otra clase que implemente Descuento.

def calcular_precio_final(precio, descuento: Descuento):
    return descuento.aplicar(precio)

# Uso:
precio = 100
d1 = DescuentoFijo(10)
d2 = DescuentoPorcentaje(0.2)

print(calcular_precio_final(precio, d1))  # 90
print(calcular_precio_final(precio, d2))  # 80

```

###### Uso de métodos inyectados: en funciones simples, en instancias y en métodos de clase. 



LSP: 

1. Abstracciones simples: Clase base y clases independientes

```
from abc import ABC, abstractmethod

class Figura2D(ABC):
    @abstractmethod
    def area(self):
        pass

class Rectangulo(Figura2D):
    def __init__(self, ancho, alto):
        self.ancho = ancho
        self.alto = alto

    def area(self):
        return self.ancho * self.alto

class Cuadrado(Figura2D):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado * self.lado

def imprimir_area(fig: Figura2D):
    print(f"Área: {fig.area()}")

# Ahora funciona correctamente con ambos:
imprimir_area(Rectangulo(5, 10))  # 50  
imprimir_area(Cuadrado(7))       # 49

```

2. Precondiciones, postcondiciones 

```
class Base:
    def procesar(self, valor: int) -> int:
        if valor < 0:
            raise ValueError("Valor negativo no permitido")
        return valor * 2

class Derivada(Base):
    def procesar(self, valor: int) -> int:
        # cumple exactamente las mismas condiciones de entrada
        resultado = super().procesar(valor)
        # añade comportamiento extra que no cambia el contrato:
        print(f"Valor procesado correctamente: {valor}")
        return resultado

```

###### Uso de objetos inyectados: las funciones y métodos que usan clases inyectadas toman como parámetro una clase que tenga incorporada/inyectada/compuesta la clase base; el param de tipo clase base llamará al método 

ej: 

```
class Figura2D(ABC): #clase base
	def area		  #mét abstrac/contrato

class Cuadrado(Figura2D): #subclase
	def area			   #aplic abstracc/cumplir contrato

class Rectangulo(Figura2D): #subclase
	def area 				 #aplic met abstract/contrato

def imprimir_area(fig: Figura2D): #función simple que inyecc clase base
    print(f"Área: {fig.area()}")	#param tipo clase base, llamará al met

```


### 3. Diseño OOP avanzado: Módulos de interfaces de negocio (lógica) e implementación. 

Ambos dependen de interfaces, no se acoplan. 

Uso de IS, DI


IS: 

1. Multiples Clases bases abstractas y multiples subclases que las alican. 

```
class Impresora(ABC):
    @abstractmethod
    def imprimir(self, documento):
        pass

class Escaner(ABC):
    @abstractmethod
    def escanear(self, documento):
        pass

class Fax(ABC):
    @abstractmethod
    def enviar_fax(self, documento, numero):
        pass

# Ahora las implementaciones solo toman lo que usan:
class ImpresoraBasica(Impresora):
    def imprimir(self, documento):
        print(f"Imprimiendo {documento}")

class EquipoOficina(Impresora, Escaner, Fax):
    def imprimir(self, documento):
        print(f"Imprimiendo {documento}")
    def escanear(self, documento):
        print(f"Escaneando {documento}")
    def enviar_fax(self, documento, numero):
        print(f"Enviando fax de {documento} al {numero}")

```

2. 

```
from abc import ABC, abstractmethod

class NotificadorEmail(ABC):
    @abstractmethod
    def enviar_email(self, destino, mensaje):
        pass

class NotificadorSMS(ABC):
    @abstractmethod
    def enviar_sms(self, destino, mensaje):
        pass

class NotificadorPush(ABC):
    @abstractmethod
    def enviar_push(self, destino, mensaje):
        pass

# Implementaciones centradas:

class ServicioEmail(NotificadorEmail):
    def enviar_email(self, destino, mensaje):
        # lógica real…
        pass

class ServicioSMS(NotificadorSMS):
    def enviar_sms(self, destino, mensaje):
        # lógica real…
        pass

class ServicioPush(NotificadorPush):
    def enviar_push(self, destino, mensaje):
        # lógica real…
        pass

```


DI: 

###### DI simple: una clase abstracta con una sola responsabilidad, las subclases las toman como param para aplicar el método abstracto. La última clase inyecta la clase base en su contructor; esta define una prop y un método que toma su prop para usar y llamar al método abstracto. 

```
from abc import ABC, abstractmethod

class UserRepository(ABC):
    @abstractmethod
    def get_user(self, user_id):
        pass

class UserRepositorySQL(UserRepository):
    def get_user(self, user_id):
        # Lógica SQL…
        return {"id": user_id, "nombre": "Alice"}

class UserRepositoryMongo(UserRepository):
    def get_user(self, user_id):
        # Lógica Mongo…
        return {"_id": user_id, "nombre": "Alice"}

class UserService:
    def __init__(self, repo: UserRepository):
        self.repo = repo  # sólo conoce la abstracción

    def find_user(self, user_id):
        return self.repo.get_user(user_id)

# Al instanciar:
sql_repo   = UserRepositorySQL()
mongo_repo = UserRepositoryMongo()

service_sql   = UserService(sql_repo)
service_mongo = UserService(mongo_repo)

```



### 4. Composición 

1. Simple:  Clases simples, sin abstracciones.
 
Clases independientes (Motor y Rueda) que se unen a una clase compuesta (Coche)
### Las clases independientes tiene su contructor, prop y un métodos que usa esa prop (para cuando a instancien y le den valor) esto es SRP. 
### La clase compuesta toma en su contructor a las clases independientes como param. 
### Estos param son tipo class que tomaran valor cuando instancien la clase compuesta. 
### La clase compuesta define un método en común. 
### La clase compuesta usa la prop que a su vez es una clase independiente para llamar/usar estos métodos. 
### Instancia las clases independientes (Motor y Rueda) toman valor. 
### Instancia la clase compuesta y le pasa estas instancias/objeto como valor 
### ya que era lo que esperaba el constructor. 
### LLama a su método arrancar. 

```
class Motor:
    def __init__(self, potencia):
        self.potencia = potencia  # en caballos de fuerza

    def arrancar(self):
        print(f"Motor de {self.potencia} CV arrancado.")

class Rueda:
    def __init__(self, diametro):
        self.diametro = diametro  # en pulgadas

    def girar(self):
        print(f"Rueda de {self.diametro} pulgadas girando.")

class Coche:
    def __init__(self, motor: Motor, ruedas: list[Rueda]):
        self.motor = motor            # composición: el coche tiene un motor
        self.ruedas = ruedas          # composición: el coche tiene 4 ruedas

    def arrancar(self):
        self.motor.arrancar()
        for rueda in self.ruedas:
            rueda.girar()

# Uso:
motor_v8 = Motor(potencia=450)
ruedas = [Rueda(diametro=18) for _ in range(4)]
mi_coche = Coche(motor_v8, ruedas)
mi_coche.arrancar()

```

2. Avanzado: interfaz abstracta para motores

## Clase base de interfaz IMotor define un método abstracto/contrato
## Subclases toman la interfaz (en su definición) y implementa el método/contrato
## Clase compuesta toma la interfaz IMotor en su contructor. 
## Define un método para usar el método arrancar de motor. 
## Instanciamos dos tipos de coches
## Usará el método arrancar.

```
from abc import ABC, abstractmethod

class IMotor(ABC):
    @abstractmethod
    def arrancar(self): pass

class MotorGasolina(IMotor):
    def arrancar(self): print("Arrancando motor de gasolina…")

class MotorElectrico(IMotor):
    def arrancar(self): print("Arrancando motor eléctrico…")

class Coche:
    def __init__(self, motor: IMotor):
        self.motor = motor

    def arrancar(self):
        self.motor.arrancar()

# Puedo elegir en tiempo de ejecución:
mi_coche_gas = Coche(MotorGasolina())
mi_coche_elec = Coche(MotorElectrico())

mi_coche_gas.arrancar()   # “Arrancando motor de gasolina…”
mi_coche_elec.arrancar()  # “Arrancando motor eléctrico…”

```



# Rs Uso inyección dependencia/composición: 

## 1.SRP: Inyecta dependencias y composición

Clase base en constructor de otra clase independiente para ejecutar sus métodos. 
Son clases simples, no aplican interfaces. 
Estas clases independientes o sus instancias/objetos van a usar los métodos de la clase inyectada. 

```
class AnalizadorDeDatos:
    def __init__(self, datos):
        self.datos = datos

    def calcular_promedio(self):
        return sum(self.datos) / len(self.datos)


class GeneradorDeReporteTXT:
    def __init__(self, analizador: AnalizadorDeDatos):
        self.analizador = analizador

    def generar(self, nombre_archivo):
        promedio = self.analizador.calcular_promedio()
        with open(nombre_archivo, 'w') as f:
            f.write(f"Promedio: {promedio}\n")


class EnviadorDeEmail:
    def enviar(self, destinatario, ruta_archivo):
        # Lógica ficticia de envío de email con adjunto
        print(f"Enviando {ruta_archivo} a {destinatario}")

```


## 2. O-C: Uso intensivo de Interfaces/abstracciones e inyección de dependencia y composición. 
Clase base y clases independientes que toman a la clase base. 
Uso: inyección de dependencia en clase que llama a los métodos de la clase que inyecto. 

```
from abc import ABC, abstractmethod

class Reporte(ABC):
    def __init__(self, datos):
        self.datos = datos

    @abstractmethod
    def imprimir(self):
        pass

class ReportePDF(Reporte):
    def imprimir(self):
        # lógica de impresión PDF
        pass

class ReporteHTML(Reporte):
    def imprimir(self):
        # lógica de impresión HTML
        pass

# Cuando necesites un nuevo formato, creas una nueva subclase:
class ReporteCSV(Reporte):
    def imprimir(self):
        # lógica de CSV
        pass

# Uso:
def generar_reporte(reporte: Reporte):
    reporte.imprimir()

# No cambias nada en las clases existentes, solo añades ReporteCSV.

```


## 3. O-C: Clase base y clases independientes: 

Uso inyección de dependencias. 

Uso de métodos inyectados: en funciones simples, en instancias y en métodos de clase. 


```
from abc import ABC, abstractmethod

class Descuento(ABC):
    @abstractmethod
    def aplicar(self, precio):
        pass

class DescuentoFijo(Descuento):
    def __init__(self, monto):
        self.monto = monto

    def aplicar(self, precio):
        return precio - self.monto

class DescuentoPorcentaje(Descuento):
    def __init__(self, porcentaje):
        self.porcentaje = porcentaje

    def aplicar(self, precio):
        return precio * (1 - self.porcentaje)

# Para agregar otro tipo de descuento, creas otra clase que implemente Descuento.

def calcular_precio_final(precio, descuento: Descuento):
    return descuento.aplicar(precio)

# Uso:
precio = 100
d1 = DescuentoFijo(10)
d2 = DescuentoPorcentaje(0.2)

print(calcular_precio_final(precio, d1))  # 90
print(calcular_precio_final(precio, d2))  # 80

```


## 4. LSP: Uso de objetos inyectados: 
Las funciones y métodos que usan clases inyectadas toman como parámetro una clase que tenga incorporada/inyectada/compuesta la clase base; el param de tipo clase base llamará al método 

```
class Figura2D(ABC): #clase base
	def area		  #mét abstrac/contrato

class Cuadrado(Figura2D): #subclase
	def area			   #aplic abstracc/cumplir contrato

class Rectangulo(Figura2D): #subclase
	def area 				 #aplic met abstract/contrato

def imprimir_area(fig: Figura2D): #función simple que inyecc clase base
    print(f"Área: {fig.area()}")	#param tipo clase base, llamará al met

```


## 5. IS: 

1. Multiples Clases bases abstractas y multiples subclases que las alican. 

```
class Impresora(ABC):
    @abstractmethod
    def imprimir(self, documento):
        pass

class Escaner(ABC):
    @abstractmethod
    def escanear(self, documento):
        pass

class Fax(ABC):
    @abstractmethod
    def enviar_fax(self, documento, numero):
        pass

# Ahora las implementaciones solo toman lo que usan:
class ImpresoraBasica(Impresora):
    def imprimir(self, documento):
        print(f"Imprimiendo {documento}")

class EquipoOficina(Impresora, Escaner, Fax):
    def imprimir(self, documento):
        print(f"Imprimiendo {documento}")
    def escanear(self, documento):
        print(f"Escaneando {documento}")
    def enviar_fax(self, documento, numero):
        print(f"Enviando fax de {documento} al {numero}")

```

2. 

```
from abc import ABC, abstractmethod

class NotificadorEmail(ABC):
    @abstractmethod
    def enviar_email(self, destino, mensaje):
        pass

class NotificadorSMS(ABC):
    @abstractmethod
    def enviar_sms(self, destino, mensaje):
        pass

class NotificadorPush(ABC):
    @abstractmethod
    def enviar_push(self, destino, mensaje):
        pass

# Implementaciones centradas:

class ServicioEmail(NotificadorEmail):
    def enviar_email(self, destino, mensaje):
        # lógica real…
        pass

class ServicioSMS(NotificadorSMS):
    def enviar_sms(self, destino, mensaje):
        # lógica real…
        pass

class ServicioPush(NotificadorPush):
    def enviar_push(self, destino, mensaje):
        # lógica real…
        pass

```


## 6. DI: Módulo negocio (lógica) y módulo interfaz.
Una clase abstracta con una sola responsabilidad
Las subclases las toman como param para aplicar el método abstracto. 
La última clase inyecta la clase base en su contructor; esta define una prop y un método que toma su prop para usar y llamar al método abstracto. 

```
class UserRepository(ABC):
    @abstractmethod
	def get_user
	
class UserRepositorySQL(UserRepository):
    def get_user
    
class UserService:
    def __init__(self, repo: UserRepository):
        self.repo = repo
    def find_user(self, user_id):
        return self.repo.get_user(user_id)

sql_repo   = UserRepositorySQL()

service_sql   = UserService(sql_repo)


```

# Rs: Prácticas 

## 1. Tomar clase base en definición de subclase
(subclase)

## 2. Tomar clase base/interfaz abs en constructor (solo en ABS?) 
(usar prop/cambiar prop, métodos)

## 3. Todo para lograr cambios en el estado interno sin modificar el código

## 4. Estructura Composición-Inyección de dependencias: 


1. Clases simples:

Clases base y subclases

Syntaxis: 

```
1. Clase base

2. Subclases toman clase base

3. Funciones independientes que inyectan clase base y subclases para usar métodos 

4. Instancias que usan constructor y métodos

```


2. Interfaces: 

Clases abstractas y clases que implementan metodos abstractos

```
1. Clase base abstracta: 

2. Subclases toman clase base: 

3. Funciones independientes que inyectan en su param clase base y subclases para usar métodos 

4. Clases que inyectan en su constructor clases para usar métodoss

5. Instancias que usan constructor y métodos

```


### Ejs: 

1. Función que inyecta clase base abstracta

#### Subclases (toman param a clase base en su def): usarán método clase base

Ej 1: 

```
from abc import ABC, abstractmethod

class Descuento(ABC):
    @abstractmethod
    def aplicar(self, precio):
        pass

class DescuentoFijo(Descuento):
    def __init__(self, monto):
        self.monto = monto

    def aplicar(self, precio):
        return precio - self.monto

class DescuentoPorcentaje(Descuento):
    def __init__(self, porcentaje):
        self.porcentaje = porcentaje

    def aplicar(self, precio):
        return precio * (1 - self.porcentaje)

# Para agregar otro tipo de descuento, creas otra clase que implemente Descuento.

def calcular_precio_final(precio, descuento: Descuento):
    return descuento.aplicar(precio)

# Uso:
precio = 100
d1 = DescuentoFijo(10)
d2 = DescuentoPorcentaje(0.2)

print(calcular_precio_final(precio, d1))  # 90
print(calcular_precio_final(precio, d2))  # 80

```

Ej 2:

```
from abc import ABC, abstractmethod

class Reporte(ABC):
    def __init__(self, datos):
        self.datos = datos

    @abstractmethod
    def imprimir(self):
        pass

class ReportePDF(Reporte):
    def imprimir(self):
        # lógica de impresión PDF
        pass

class ReporteHTML(Reporte):
    def imprimir(self):
        # lógica de impresión HTML
        pass

# Cuando necesites un nuevo formato, creas una nueva subclase:
class ReporteCSV(Reporte):
    def imprimir(self):
        # lógica de CSV
        pass

# Uso:
def generar_reporte(reporte: Reporte):
    reporte.imprimir()

# No cambias nada en las clases existentes, solo añades ReporteCSV.

```


Ej 3: 

```
from abc import ABC, abstractmethod

class Figura2D(ABC):
    @abstractmethod
    def area(self):
        pass

class Rectangulo(Figura2D):
    def __init__(self, ancho, alto):
        self.ancho = ancho
        self.alto = alto

    def area(self):
        return self.ancho * self.alto

class Cuadrado(Figura2D):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado * self.lado

def imprimir_area(fig: Figura2D):
    print(f"Área: {fig.area()}")

# Ahora funciona correctamente con ambos:
imprimir_area(Rectangulo(5, 10))  # 50  
imprimir_area(Cuadrado(7))       # 49

```


#### Multiple métodos abstractos

ISP:

Separamos la gran interfaz en varias, cada una con responsabilidad única

Ej 1: 

```
class Impresora(ABC):
    @abstractmethod
    def imprimir(self, documento):
        pass

class Escaner(ABC):
    @abstractmethod
    def escanear(self, documento):
        pass

class Fax(ABC):
    @abstractmethod
    def enviar_fax(self, documento, numero):
        pass

# Ahora las implementaciones solo toman lo que usan:
class ImpresoraBasica(Impresora):
    def imprimir(self, documento):
        print(f"Imprimiendo {documento}")

class EquipoOficina(Impresora, Escaner, Fax):
    def imprimir(self, documento):
        print(f"Imprimiendo {documento}")
    def escanear(self, documento):
        print(f"Escaneando {documento}")
    def enviar_fax(self, documento, numero):
        print(f"Enviando fax de {documento} al {numero}")

```


Ej 2: 

```
from abc import ABC, abstractmethod

class NotificadorEmail(ABC):
    @abstractmethod
    def enviar_email(self, destino, mensaje):
        pass

class NotificadorSMS(ABC):
    @abstractmethod
    def enviar_sms(self, destino, mensaje):
        pass

class NotificadorPush(ABC):
    @abstractmethod
    def enviar_push(self, destino, mensaje):
        pass

# Implementaciones centradas:

class ServicioEmail(NotificadorEmail):
    def enviar_email(self, destino, mensaje):
        # lógica real…
        pass

class ServicioSMS(NotificadorSMS):
    def enviar_sms(self, destino, mensaje):
        # lógica real…
        pass

class ServicioPush(NotificadorPush):
    def enviar_push(self, destino, mensaje):
        # lógica real…
        pass

```

2. Clase que inyecta clase base en su constructor:

Clases independientes, no subclases 

### Clase que inyecta clase base en su constructor: su prop usa método de la clase que inyecto. 

Ej1: 

SRP:

```
class AnalizadorDeDatos:
    def __init__(self, datos):
        self.datos = datos

    def calcular_promedio(self):
        return sum(self.datos) / len(self.datos)


class GeneradorDeReporteTXT:
    def __init__(self, analizador: AnalizadorDeDatos):
        self.analizador = analizador

    def generar(self, nombre_archivo):
        promedio = self.analizador.calcular_promedio()
        with open(nombre_archivo, 'w') as f:
            f.write(f"Promedio: {promedio}\n")


class EnviadorDeEmail:
    def enviar(self, destinatario, ruta_archivo):
        # Lógica ficticia de envío de email con adjunto
        print(f"Enviando {ruta_archivo} a {destinatario}")

```


Ej 2: 

Con DIP:

Modulo neg (log) e interf (implement)

Definimos una interfaz de repositorio y pasamos la implementación por inyección:

```
from abc import ABC, abstractmethod

class UserRepository(ABC):
    @abstractmethod
    def get_user(self, user_id):
        pass

class UserRepositorySQL(UserRepository):
    def get_user(self, user_id):
        # Lógica SQL…
        return {"id": user_id, "nombre": "Alice"}

class UserRepositoryMongo(UserRepository):
    def get_user(self, user_id):
        # Lógica Mongo…
        return {"_id": user_id, "nombre": "Alice"}

class UserService:
    def __init__(self, repo: UserRepository):
        self.repo = repo  # sólo conoce la abstracción

    def find_user(self, user_id):
        return self.repo.get_user(user_id)

# Al instanciar:
sql_repo   = UserRepositorySQL()
mongo_repo = UserRepositoryMongo()

service_sql   = UserService(sql_repo)
service_mongo = UserService(mongo_repo)

```


# kata 7

El ácido desoxirribonucleico (ADN) es la principal molécula de almacenamiento de información en los sistemas biológicos. 
Está compuesto por cuatro bases de ácidos nucleicos: guanina («G»), citosina («C»), adenina («A») y timina («T»).

El ácido ribonucleico (ARN) es la principal molécula mensajera de las células. 
El ARN difiere ligeramente del ADN en su estructura química y no contiene timina. 
En el ARN, la timina es reemplazada por otro ácido nucleico, el uracilo («U»).

Crea una función que traduzca una cadena de ADN dada en ARN.

Por ejemplo:

"GCAT" => "GCAU"

La cadena de entrada puede tener una longitud arbitraria; en particular, puede estar vacía. 
Se garantiza la validez de toda la entrada; es decir, cada cadena de entrada solo contendrá 'G', 'C', 'A' y/o 'T'.


Planteo: 

1. Descomposición 
ADN: molec almac info sist biolog
acidos: 
guanina («G»), citosina («C»), adenina («A») y timina («T»).

ARN: 
molécula mensajera de las células
No contiene timina(T).
Es reemplazada por uracilo («U»).

func conviert cadena adn en arn 

2. Descomposición profunda: 

adn: G, C, A, T
arn: G, C, A, U 

arn = adn-T+U

```
func adnToARN(adn): 
	rtn adn.replace('T', 'U')
	
```

3. Pseudocódigo: 

1. def:

2. estructuras: 

3. operadores:

4. técnicas:

5. entradas y salidas internas, ultimas: 

6. KISS, DRY, YAGNI, SOLID 


# kata 8

Alex acaba de conseguir un nuevo hula hoop, le encanta pero se siente desanimado porque su hermano pequeño es mejor que él.

Escriba un programa donde Alex pueda ingresar (n) cuántas veces gira el aro y le devolverá un mensaje de aliento:

Si Alex consigue 10 o más aros, devuelve la cadena "Genial, ahora pasemos a los trucos".
Si no consigue 10 aros, devuelve la cadena "Sigue intentándolo hasta que lo consigas".


Planteo: 

hulaHoop(nhoop): 
if nhoop >= 10: 
"Great"
else: 
"keep"

ternario:

Ej:
n = 5
res = "Even" if n % 2 == 0 else "Odd"
print(res)

hoop(numHula):
alex = "Great" if n >= 10 else "Keep"
rnt alex


expresivo:
great >= 10 
keep < 10 

msjGreat = "Great"
msjKeep = "Keep"

if great rtn msjGreat
if keep rtn msjKeep 

tabla verdad 
condicion del problema 

variables | total 
valores 

Ej: 
condicion del problema si t y s... 
tabla verdad
t s
i p V
p i V
i i F
p p F 

condicion problema -> n>=10 -> V
variables -> n
valores -> 


cortar expresion:
def hoop_count(n): return "Great, now move on to tricks" \
    if n >= 10 else "Keep at it until you get it"
 
 expresividad:
 def hoopCount(n):
    success = "Great, now move on to tricks"
    fail = "Keep at it until you get it"
    return success if n >= 10 else fail
 

# 9. Qué tan bueno eres

Hubo un examen en tu clase y lo aprobaste. ¡Felicidades!

Pero eres ambicioso. Quieres saber si eres mejor que el promedio de tu clase.

Recibirás una matriz con las puntuaciones de tus compañeros. 

¡Ahora calcula el promedio y compara tu puntuación!

¡Devuelve verdadero si eres mejor, de lo contrario falso!

Nota:

Tus puntos no se incluyen en la matriz de puntos de tu clase. 

¡No los olvides al calcular la puntuación media!


Planteo: 

class_points: arr

your_points: numb

average: (sum(arr))/len(arr)

best: true if yPoint > average: else "false"

```
def bett_th_average(cPoints, yPoints): 
	average = (sum(arr))/len(arr)
	best: True if yPoint > average: else False
	return best 
	
```



# kata 10 

MakeUpperCase

Escriba una función que convierta la cadena de entrada a mayúsculas.


Planteo: 

def upper(string): rtn string.upper()



# Detrás de cada nombre/variable hay un objeto.

Si puedes hacer esto

```
a = 3
b = a
print(b + 2)

```

y espera que puedas hacer la misma operación (+) en ambos porque a y b son la misma cosa (a es b) entonces de la misma manera si puedes hacer

```
str.upper('abc')

```

(donde la operación es () es decir puedes "llamar" al objeto) y

```
make_upper_case = str.upper

```

luego una llamada

```
make_upper_case('abc')

```

Es básicamente el mismo que el primero.

¿Por qué puedes llamar a str.upper de ambas formas como se muestra a continuación con el mismo efecto?

```
'abc'.upper()
str.upper('abc')

```

Porque cada método es solo una función con algo de "magia" relacionada con pasar self. 

La segunda llamada no usa "magia" y puedes entender fácilmente cómo se le pasó self (es solo un primer argumento).



# kata 11 

Cantidad total de puntos 

Nuestro equipo de fútbol ha terminado el campeonato.

Los resultados de los partidos de nuestro equipo se registran en una colección de cadenas. 

Cada partido se representa mediante una cadena con el formato "x:y", donde x es la puntuación de nuestro equipo e y es la de nuestro oponente.

Por ejemplo: ["3:1", "2:2", "0:1", ...]

Los puntos se otorgan por cada partido de la siguiente manera:

    si x > y: 3 puntos (victoria)
    si x < y: 0 puntos (pérdida)
    si x = y: 1 punto (empate)

Necesitamos escribir una función que tome esta colección y devuelva la cantidad de puntos que nuestro equipo (x) obtuvo en el campeonato según las reglas dadas anteriormente.

Notas:

1. Nuestro equipo siempre juega 10 partidos en el campeonato.
2. 0 <= x <= 4
3. 0 <= y <= 4


Planteo: 

1. Descomposición: 

campeonato terminado 

arr string: resultados 

partidos totales: 10 
0 <= x <= 4
0 <= y <= 4

index(9) arr 

x: equipo 
y: oponent

puntos: 
x > y: 3 p (victoria)
x < y: 0 p (pérdida)
x = y: 1 p (empate)

func (arrStr) rtn total p of x 


2. psCódigo: 

input: 

arrStr -> results

calc:

tomar resultX y resultY -> rX = arrStr[0], rY = arrStr[-1]

vict, derr, emp -> rX > rY, rX < rY, rX==rY

puntos -> vict = 3, derr = 0, emp = 1

totalPuntos = sum(totalVic, totalEmp)


Rs: 
loop/fuerz brt:
p=0
guardar x, guardar y
if comparar x con y -> guardar vic, derr -> rtn p+=3, p+=1
rtn p

out: 


condicional: ubicacion... 


alternativas: nuevo arr, 

Si alguno de los equipos anota 10 o más
desearás haber usado la división.
Aunque es poco común, su simple posibilidad justifica su programación.

```
def points(games):
    count = 0
    for score in games:
        res = score.split(':')
        if res[0]>res[1]:
            count += 3
        elif res[0] == res[1]:
            count += 1
    return count

```




```
for x, y in (s.split(":") for s in a) 

```

esto itera sobre la matriz de puntajes tomando el número de goles de cada equipo como x e y:

```
["1:1", "1:2", "2:1"] =>
  x = "1", y = "1"
  x = "1", y = "2"
  x = "2", y = "1"

```

```
(x >= y) + 2 * (x > y) 

```

esto compara puntajes (alfabéticamente, pero eso está bien con las restricciones actuales):

1. Si x es menor que y, esto se convierte en 0 + 2 * 0 => 0
2. si x es mayor o igual que y, esto se convierte en 1 + 2 * 0 => 1
3. y si x es estrictamente mayor que y, esto se convierte en 1 + 2 * 1 => 3

Esto también se puede reescribir como 0 si x < y, de lo contrario 1 si x == y, de lo contrario 3 si x > y, pero es mucho más largo, ¿no?

Al final todos los valores se suman


```
points = lambda g: sum((x>y)*3 or x==y for x,_,y in g)

```



# kata 12 

Square(n)

Complete la función suma al cuadrado de modo que eleve al cuadrado cada número que se le pase y luego sume los resultados.

Por ejemplo, para [1, 2, 2] debería devolver 9 porque 1^2 + 2^2 + 2^2 = 9 


Planteo: 

n^2 + ...

sum(iter)
pow(x, y)


sumPow(arrNum):
sum = 0 
for n in arrNum: 
p = pow (n, 2) 
sum += p


altern: 

sumPow(arrNum): rtn sum(arrNum) for pow in arrNum ...

sum = 0 
for e in arrNum
pow = n[e]*n[e] 
sum += pow

```
def sumPow(arrNum)
sumP = []

def pow(arrNum)
for e in arrNum
p = e*e
sum += append[p]

sum

```


# list comprehension

Sin corchetes: 

La línea (x ** 2 for x in numbers) me da un objeto generador. 
La respuesta es equivalente a suma((x ** 2 for x in numbers))
Se omite el segundo par de paréntesis por comodidad.

sum() toma un iterable como parámetro, y el objeto generador (x ** 2 for x in numbers) 
Es un iterable, por lo que uno puede escribir sum(x ** 2 for x in numbers) 
y hará lo mismo que 

corchetes: 

```
sum([x ** 2 for x in números])

```
porque una lista también es un iterable.

Syntax: sum(list comprehension/generator) 

```
def square_sum(numbers):
    return sum(x ** 2 for x in numbers)

```


# Map 

La función map() ejecuta una función específica para cada elemento de un iterable. 

El elemento se envía a la función como parámetro.

Ej: 

Calcula la longitud de cada palabra en la tupla:

```
def myfunc(n):
  return len(n)

x = map(myfunc, ('apple', 'banana', 'cherry'))

convert the map into a list, for readability:
print(list(x))

```
<map object at 0x056D44F0>
([5, 6, 6])


Syntax: 

map(function, iterables)

Función obligatoria: La función que se ejecutará para cada elemento.

Iterable obligatorio: Una secuencia, una colección o un objeto iterador. 
Puedes enviar tantos iterables como quieras, solo asegúrate de que la función tenga un parámetro para cada iterable.


Ej: 

Crea nuevas frutas enviando dos objetos iterables a la función:

```
def myfunc(a, b):
  return a + b

x = map(myfunc, ('apple', 'banana', 'cherry'), ('orange', 'lemon', 'pineapple'))

print(x)

#convert the map into a list, for readability:
print(list(x))

```

<map object at 0x034244F0>
(['appleorange', 'bananalemon', 'cherrypineapple'])



# kata 13 

Eliminar los signos de exclamación

Escriba la función RemoveExclamationMarks que elimina todos los signos de exclamación de una cadena determinada.


Planteo: 

match ¡!

opciones: 

replace, strip, split, combinación entre ellos, etc. 

sin método: 

tomar cadena, procesarla, comparar signos
crear una nueva cadena con las letras que no son exclamacion 


 
# kata 14 

Survive 

Un héroe se dirige al castillo para completar su misión. 

Sin embargo, le han dicho que el castillo está rodeado por un par de poderosos dragones. 

Cada dragón necesita dos balas para ser derrotado, y nuestro héroe no tiene ni idea de cuántas debería llevar. 

Suponiendo que consiga un número específico de balas y avance para luchar contra otro número específico de dragones, ¿sobrevivirá?

Devuelve verdadero si es así, falso en caso contrario :)



Planteo: 


Descomposición: 

heroe misión castillo par de dragones 

Cada dragón necesita dos balas para ser derrotado

héroe no tiene ni idea de cuántas debería llevar

Suponiendo que consiga un número específico de balas 

y avance para luchar contra otro número específico de drag

sobrevivirá, devuelve verdadero si es así, falso en caso contrario


heroe

dragones 

balas

n balas

n dragones 

surv t o f 


Mat: 

caso espec: 

form:

h = 1 
d = x
b = y

surv = -dx
mdra = 2y

S = (h 2b * d; )
M = (h 0b * d; )

2b = -2d


caso general 

form: 


Diagram:

inp: 

balas 


calc: 

if balas > 2 -> dragón -1 

out: 

if dragón -2 -> Surv: T; else -> Surv: F



PsCod:

if hero 2 balas por dragón = sobrevivir 

2b * drg = 

ndrg = 



Log: 

control, pregunta 

2b * ndrg -> s = T



Expresivo: 



Kiss, dry, yagni: 



Solid: 



# Precondiciones y postcondiciones 

```
def hero(bullets, dragons):
    '''
    Ascertains if hero can survive
    Parameters:
        bullets: (int) - number of bullets hero has
        dragons: (int) - number of dragons
    Returns:
        True (Survive) or False (Hero gets killed)
    '''
    if bullets >= 2*dragons:
        return True
    elif bullets < 2*dragons:
        return False

```

Una solución sobredimensionada, pero por lo demás muy limpia. 
Suele ser recomendable anotar las precondiciones y poscondiciones de una función, así como lo que representan los parámetros; sin embargo, en este caso es innecesariamente excesivo.

```
si (cond):
  devuelve Verdadero

```

es lógicamente equivalente a

```
retorno (cond)

```

y por tanto también erróneo en esta situación.

```
si (cond):
  devolver X
demás:
  devolver Y

```

es equivalente a

```
si (cond):
  devolver X
devolver Y

```

en algunos casos, dado que las declaraciones de retorno tienden a actuar como un cortocircuito en la mayor parte de la lógica del programa



# kata 15 - quarter of the year

Trimestre del año: 

Dado un mes como un número entero del 1 al 12, devuelva a qué trimestre del año pertenece como un número entero.

Por ejemplo: el mes 2 (febrero), es parte del primer trimestre; 

el mes 6 (junio), es parte del segundo trimestre; 

y el mes 11 (noviembre), es parte del cuarto trimestre.


Restricción:

1 <= mes <= 12


## Planteo: 

descomposición, mat, diagram, pscod, log, expres, k/d/y, solid 
inp, out, calc; restricc, casos espec; condiciones
dat/estr, contrl (for/while); try/exc/err
pilas, colas, diccionarios, o conjuntos
estrateg, patrones repetit, de soluc/fin a prob/inic
1 func 1srp; limites, subproblemas
func: transf params, actualizar param
estado inicial, methds afectar estado 

Descomposición:

Trimestre, mes entero(int) de 1 a 12 
retornar trimestre a que pertenece el entero 

month (int, 1-12) -> quarter (1-4)
ej: m2 (feb) -> 1q; m6 (jun) -> 2q; m11 (nov) -> q4

Restricción:
1 <= mes <= 12


Mat: 


Diagram: 

inp: month
out: quart

calc: 
1quart = 3month (3/3) (3*1) 
12m = 4quart (12/3) (4*3)

dat: 
months = (e: 1, f: 2, m: 3, a: 4, m: 5, jun: 6, jul: 7
ag: 8, sep: 9, oct: 10, nov: 11, dec: 12)
quar = (1q: e, f, m; 2q: a, m, jun; 3q: jul, ag, set; 4q: oct, nov, dic)

err: 
err = "solo hay 12mo"
if month > 12: rtn err


pscod: 

func(mes)

ifs: mes <= 4 

altern: 
dictM: (1q: Xmes)
dictQ: (.. Xmes)

```
dictQ =	{
  "q1": [1, 2, 3],
  "q2": [4, 5, 6],
  "q3": [7, 8, 9],
  "q4": [10, 11, 12]
} 

```

claves, una a una:
 
for x in dictQ:
  print(x) 


values, una a una: 

```
 for x in thisdict:
  print(thisdict[x])

```

claves: (q1, q2, etc)

 for x in thisdict.keys():
  print(x) 


valores: 
 for x in thisdict.values():
  print(x)


for month in thisdict.keys(): 
	check month in thisdict.keys

altern: 
for dict 
dict1 (m1 = iq)
dict2 (m1 = 1)


altern: 

 quarthers = {
  "q1": {
    "name" : "Emil",
    "year" : 2004
  },
  "q2": {
    "name" : "Tobias",
    "year" : 2007
  },
  "q3": {
    "name" : "Linus",
    "year" : 2011
  },
  "q4": {
    "name" : "Linus",
    "year" : 2011
  }
} 

```
 print(myfamily["child2"]["name"]) 

```

```
for x, obj in myfamily.items():
  print(x)

  for y in obj:
    print(y + ':', obj[y]) 

```

entrada: month
retorno: q1 (string, number?)

methds:
keys()	Returns a list containing the dictionary's keys
values()  Returns a list of all the values in the dictionary

Loop through both keys and values, by using the items() method:
for x, y in thisdict.items():
  print(x, y) 


altern 
set1->q1={1, 2, 3}
set2->q2={4, 5, 6}
set3->q3={7, 8, 9}
set4->q4={10, 11, 12}

operations: 
access, check, not in 

if month check in q1 

m = 0
month in q1 or q2...
return m+= 


alter simple - vars: 

q1 = if 


alter simple for: 


alter simple if:


express: 



# kata 16 

Reverse words

Completa la función que acepta un parámetro de cadena e invierte cada palabra de la cadena. 

Se deben conservar todos los espacios en la cadena.

Ej: 

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"


planteo: 

inp: str

out: rev str, conserv espac

calc:
fun(string):
 func1(), func2()
 callf1(), callf2()


list(string): devuelve arr con espacios

iter.reverse(): revierte el orden 

reversed(secuend): devuelve un obj iter invert


```
Reverse the sequence of a list, and print each item:
alph = ["a", "b", "c", "d"]
ralph = reversed(alph)
for x in ralph:
  print(x) 

```
d
c
b
a


```
fruits = ['apple', 'banana', 'cherry']

fruits.reverse() 

```
retorna

```
['cherry', 'banana', 'apple']

```



```
def reverse_words(s):
    palabras = s.split(' ')
    palabras_invertidas = [palabra[::-1] for palabra in palabras]
    return ' '.join(palabras_invertidas)

print(reverse_words("This is an example!"))  # "sihT si na !elpmaxe"
print(reverse_words("double  spaces"))  # "elbuod  secaps"

```

En este código, se utiliza la función split para dividir la cadena en una lista de palabras, luego se utiliza una lista por comprensión para invertir cada palabra utilizando slicing ([::-1]), y finalmente se utiliza la función join para unir las palabras invertidas en una sola cadena con espacios en medio.

También se pueden conservar los espacios dobles o triples en la cadena original, ya que el código solo divide la cadena en palabras cuando encuentra un espacio, y luego vuelve a unir las palabras con un espacio en medio. Si hay varios espacios consecutivos en la cadena original, el código los conservará.

Por ejemplo:

```
print(reverse_words("double   spaces"))  # "elbuod   secaps

```

Sin ls: 

```
def reverse_words(s):
    palabras = s.split(' ')
    palabras_invertidas = []
    for palabra in palabras:
        palabras_invertidas.append(palabra[::-1])
    return ' '.join(palabras_invertidas)

print(reverse_words("This is an example!"))  # "sihT si na !elpmaxe"
print(reverse_words("double  spaces"))  # "elbuod  secaps"

```

En este código, se utiliza un bucle for para iterar sobre cada palabra en la lista de palabras, y se invierte cada palabra utilizando slicing ([::-1]) antes de agregarla a la lista de palabras invertidas.

También se puede hacer de una manera más sencilla utilizando la función map:

```
def reverse_words(s):
    return ' '.join(map(lambda x: x[::-1], s.split(' ')))

print(reverse_words("This is an example!"))  # "sihT si na !elpmaxe"
print(reverse_words("double  spaces"))  # "elbuod  secaps"

```
En este caso, la función map aplica la función lambda (que invierte cada palabra) a cada elemento de la lista de palabras, y luego se une el resultado con la función join.


## ls

```
def reverse_words(str):
    return ' '.join(s[::-1] for s in str.split(' '))
```
retornar join (string) que introduce slice en un for par s que esta en la cadena split...

## espacio doble 

Al dividir la cadena, cualquier espacio doble "separa" 
una cadena vacía incluida en la lista, por lo que 
el espacio doble se restaura porque, al unir la lista, 
se coloca un espacio entre la palabra y la cadena vacía, 
y de nuevo entre la cadena vacía y la siguiente palabra

Rs: Solo tomamos un espacio para dividir, si hay un segundo, queda como caracter


# Análisis de algoritmo 

## For: 

### Actualizar var

```
def arrToSentence(arrStr):
    sentence = ""
    for w in arrStr:
        sentence += f"{w} "
    return sentence 

print(arrToSentence(listOne))

```

El for recorrerá uno a uno los elementos, se guardarán temporalmente en cada pasada. 

Usarémos otra estructura/var local no temporal (fuera del for) para guardar esos elementos modifacados


### Actualizar estructura - uso de método 

```
def rvStr(string):
    rs = string.split(" ")  
    ns = []
    for w in rs:
        ns.append(w[::-1])
    return " ".join(ns)

print(rvStr("This is an example!"))

```

Guardamos el param recibido en una nueva var local, para manipularlo. 

Usamos un método en esta nueva variable para cambiar el parámetro recibido. 

Creamos una estructura vacía. 

Recorremos la variable modificada cada elem suyo lo guardamos en una nueva var local. 

Modificamos/manipulamos la var local que tiene el elemento. 

Lo guardamos en la estructura vacía.

Retornamos la nueva estructura. 


### Nested loop

Bucle dentro de un bucle.

El "bucle interno" se ejecutará una vez por cada iteración del "bucle externo":

Ej:

Imprime cada adjetivo para cada fruta:

```
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
  for y in fruits:
    print(x, y) 
    
```

Recorremos las dos estructuras con dos bucles. 

El bucle externo guardará en x cada elem de adj.

En su primera iteración creará otro bucle con una var para guardar cada elem de la segunda estructura. 

Posicionados en el segundo bucle/estructura, imprimimos los elementos guardados hasta el momento. 


Otra opcion es crear una nueva estruc uniendo las dos existentes.


### Map - Lambda


#### Lambda

Agregar 10 al argumento a y devolver el resultado

```
x = lambda a : a + 10
print(x(5)) 

```

Pueden tomar cualquier número de argumentos:

```
x = lambda a, b : a * b
print(x(5, 6)) 

```


Se utiliza principalmente como una función anónima dentro de otra función.

Ej: 

1. Función que toma un argumento y ese argumento se multiplicará por un número desconocido:

```
def myfunc(n):
  return lambda a : a * n

```

2. Utilizar esa definición de función para crear una función que siempre duplique el número que envíe

```
mydoubler = myfunc(2)

print(mydoubler(11)) 

```

22


3. Utilizar la misma definición de función para crear una función que siempre triplique el número que envíe

```
def myfunc(n):
  return lambda a : a * n

mytripler = myfunc(3)

print(mytripler(11)) 

```


4. Utilizar la misma definición de función para realizar ambas funciones, en el mismo programa

```
def myfunc(n):
  return lambda a : a * n

mydoubler = myfunc(2)
mytripler = myfunc(3)

print(mydoubler(11))
print(mytripler(11)) 

```

Utilice funciones lambda cuando se requiera una función anónima por un período corto de tiempo.


#### Usos de Lambda

Como las funciones anónimas se utilizan para crear funciones pequeñas y rápidas de una sola expresión.

Útiles cuando necesitas una función simple y no quieres definirla con def.


1. Sorted: 

Ej: Ordenar una lista de tuplas por el segundo valor

```
pares = [(1, 3), (2, 2), (4, 1)]
ordenados = sorted(pares, key=lambda x: x[1])
print(ordenados)  # [(4, 1), (2, 2), (1, 3)]

```


2. Filter

Ej: Filtrar una lista para obtener solo los números pares:

```
numeros = [1, 2, 3, 4, 5, 6]
pares = list(filter(lambda x: x % 2 == 0, numeros))
print(pares)  # [2, 4, 6]

```


3. Map

Elevar al cuadrado cada elemento de una lista:

```
numeros = [1, 2, 3, 4]
cuadrados = list(map(lambda x: x ** 2, numeros))
print(cuadrados)  # [1, 4, 9, 16]

```


4. Reducir

Con functools.reduce(), ej: sumar todos los elementos de una lista:

```
from functools import reduce
numeros = [1, 2, 3, 4]
suma = reduce(lambda x, y: x + y, numeros)
print(suma)  # 10

```


5. Callbacks o funciones pequeñas "en línea"

Ej: botón de una interfaz gráfica con Tkinter

```
import tkinter as tk

root = tk.Tk()
boton = tk.Button(root, text="Click", command=lambda: print("¡Hola!"))
boton.pack()
root.mainloop()

```


6. Estructuras de datos

Para hacer operaciones simples directas: 

```
operaciones = {
    'suma': lambda x, y: x + y,
    'resta': lambda x, y: x - y
}

print(operaciones['suma'](10, 5))  # 15

```


Las lambda deben ser simples, ya que:

1. No tienen nombre (a menos que las asignes).

2. No permiten múltiples líneas.

3. No son ideales para lógica compleja.



#### Map

Calcula la longitud de cada palabra en la tupla:

```
 def myfunc(n):
  return len(n)

x = map(myfunc, ('apple', 'banana', 'cherry')) 

```


Syntax: 

map(function, iterables)

La función map() ejecuta una función específica para cada elemento de un iterable. 

El elemento se envía a la función como parámetro.


Función requerida:
La función que se ejecutará para cada elemento.

Iterable (obligatorio): 
Una secuencia, una colección o un objeto iterador. 
Puedes enviar tantos iterables como quieras, solo asegúrate de que la función tenga un parámetro para cada iterable.

Ej: 

Crea nuevas frutas enviando dos objetos iterables a la función:

```
 def myfunc(a, b):
  return a + b

x = map(myfunc, ('apple', 'banana', 'cherry'), ('orange', 'lemon', 'pineapple')) 

print(x)

```
 <map object at 0x034244F0>
 
 
##### Convierte map en una lista, para facilitar su lectura:

```
print(list(x))

```

```
 ['appleorange', 'bananalemon', 'cherrypineapple'] 

```


#### Usos de map

Aplica una función a cada elemento de un iterable (como una lista) y devuelve un iterador con los resultados

1. Cuadrado de una lista de num

```
numeros = [1, 2, 3, 4, 5]
cuadrados = list(map(lambda x: x ** 2, numeros))
print(cuadrados)  # [1, 4, 9, 16, 25]

```


2. Convertir una lista de cadenas a enteros

```
cadenas = ["1", "2", "3"]
enteros = list(map(int, cadenas))
print(enteros)  # [1, 2, 3]

```


3. Convertir a mayúsculas

```
palabras = ["hola", "mundo"]
mayusculas = list(map(str.upper, palabras))
print(mayusculas)  # ['HOLA', 'MUNDO']

```


4. Sumar dos listas elemento a elemento

```
a = [1, 2, 3]
b = [4, 5, 6]
suma = list(map(lambda x, y: x + y, a, b))
print(suma)  # [5, 7, 9]

``` 


5. Formatear valores

```
precios = [10.5, 20.0, 30.75]
formateados = list(map(lambda x: f"${x:.2f}", precios))
print(formateados)  # ['$10.50', '$20.00', '$30.75']

```

6. Extraer campos de una lista de diccionarios

```
personas = [
    {"nombre": "Ana", "edad": 30},
    {"nombre": "Luis", "edad": 25},
    {"nombre": "Marta", "edad": 40}
]

nombres = list(map(lambda p: p["nombre"], personas))
print(nombres)  # ['Ana', 'Luis', 'Marta']

```

Rs: 

map() es muy útil cuando se quiere aplicar una transformación simple y rápida sin necesidad de usar un bucle for




# List Comprehension

Sintaxis más corta cuando desea crear una nueva lista basada en los valores de una lista existente.

Ej:

A partir de una lista de frutas (existente), desea una nueva lista, que contenga solo las frutas con la letra "a" en el nombre.

Sin comprensión de listas, tendrá que escribir una declaración for con una prueba condicional dentro.

```
 fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = []

for x in fruits:
  if "a" in x:
    newlist.append(x)

print(newlist) 

```

Con la comprensión de listas puedes hacer todo eso con solo una línea de código:

```
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]

newlist = [x for x in fruits if "a" in x]

print(newlist)

```

El código se ejecutará dentro de los corchetes de la nueva lista. 

El array, x y true genera la modificación (newlist.append(x) ?)

```
['apple', 'banana', 'mango']

```

Syntax: 

```
newlist = [expression for item in iterable if condition == True] 

```

El valor de retorno es una nueva lista, dejando la lista anterior sin cambios.


Condición: 

Es como un filtro que sólo acepta los elementos que evalúan como Verdadero.

Ej: 

Acepta únicamente artículos que no sean "manzana":

```
newlist = [x for x in fruits if x != "apple"] 
 
```

#### La condición si x != "manzana" devolverá Verdadero para todos los elementos excepto "manzana", lo que hará que la nueva lista contenga todas las frutas excepto "manzana".


La condición es opcional y se puede omitir:

Ej: 

Sin declaración if:

```
 newlist = [x for x in fruits] 

```

Retorna un nuevo arr: 

```
['apple', 'banana', 'cherry', 'kiwi', 'mango']

```


Iterable: 

Puede ser cualquier objeto iterable, como una lista, una tupla, un conjunto, etc.

Ej: 

Puede utilizar la función range() para crear un iterable:

```
newlist = [x for x in range(10)] 

```

```

[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

```


Mismo ejemplo, pero con una condición:

Ej: 

Acepte sólo números menores a 5:

```
newlist = [x for x in range(10) if x < 5] 

```

newList tendrá: 

```
[0, 1, 2, 3, 4]

```


Expresión:

Es el elemento actual en la iteración, pero también es el resultado, que puedes manipular antes de que termine como un elemento de lista en la nueva lista:

Ej:

Establezca los valores en la nueva lista en mayúsculas

```
newlist = [x.upper() for x in fruits] 

```

```

['APPLE', 'BANANA', 'CHERRY', 'KIWI', 'MANGO']

```

Puedes configurar el resultado como desees:

Manipulando la expresión 

Ej: 

Establezca todos los valores en la nueva lista en 'hola':

```
newlist = ['hello' for x in fruits] 

```

```

['hello', 'hello', 'hello', 'hello', 'hello']

```


La expresión también puede contener condiciones, no como un filtro, sino como una forma de manipular el resultado:

Ej: 

Devuelve "naranja" en lugar de "plátano":

```
newlist = [x if x != "banana" else "orange" for x in fruits] 

```

```

['apple', 'orange', 'cherry', 'kiwi', 'mango']

```

Se puede leer como: 

"Devuelve el artículo si no es plátano, si es plátano devuelve naranja".


## Usos de LS 

Crear listas a partir de iterables, aplicando una transformación y/o un filtro en una sola línea.

```
[expresión for elemento in iterable if condición]

```


1. Lista de cuadrados

```
cuadrados = [x**2 for x in range(10)]
print(cuadrados)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

```


2. Filtrar solo números pares

```
pares = [x for x in range(20) if x % 2 == 0]
print(pares)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

```


3. Texto a mayús 

```
nombres = ["ana", "luis", "marta"]
mayusculas = [nombre.upper() for nombre in nombres]
print(mayusculas)  # ['ANA', 'LUIS', 'MARTA']

```


4. Primera letra de cada palabra

```
palabras = ["Perro", "Gato", "Elefante"]
iniciales = [p[0] for p in palabras]
print(iniciales)  # ['P', 'G', 'E']


```


5. Multiplicar elementos de dos listas

```
a = [1, 2, 3]
b = [10, 20, 30]
producto = [x * y for x, y in zip(a, b)]
print(producto)  # [10, 40, 90]

```


6. Aplanar una lista de listas (matriz)

```
matriz = [[1, 2], [3, 4], [5, 6]]
aplanada = [num for fila in matriz for num in fila]
print(aplanada)  # [1, 2, 3, 4, 5, 6]

```


7. Crear una lista de pares (x, y) combinando dos listas

```
colores = ["rojo", "azul"]
tamaños = ["S", "M"]
combinaciones = [(c, t) for c in colores for t in tamaños]
print(combinaciones)  # [('rojo', 'S'), ('rojo', 'M'), ('azul', 'S'), ('azul', 'M')]

```


Rs: 

1. Cuando necesitas crear una nueva lista a partir de otra colección de datos.

2. Cuando quieres que tu código sea compacto y legible (sin sacrificar claridad).

4. Cuando la lógica dentro del for no es demasiado compleja




#### Iterador (bucle) vs Iterable (objeto secuencia items)

Son fundamentales para bucles for, map(), filter(), y otras construcciones relacionadas.


1. Iterable: 

Cualquier objeto de Python del que puedes obtener un iterador. 

En otras palabras, es algo que puede ser recorrido (iterado).

Listas ```[1, 2, 3]```

Tuplas ((4, 5, 6))

Cadenas ("hola")

Diccionarios ({'a': 1, 'b': 2})

Conjuntos ({1, 2, 3})

Archivos abiertos

Objetos personalizados que implementan ```__iter__()```

```
numeros = [1, 2, 3]  # Esto es un iterable

```

Los iterables tienen el método especial __iter__().


2. Iterador:

Objeto que hace la iteración. 

Mantiene el estado de la posición actual en la secuencia y sabe cómo obtener el siguiente valor usando el método ```__next__()```.

Se obtiene a partir de un iterable

```
numeros = [1, 2, 3]
it = iter(numeros)  # Esto es un iterador
print(next(it))     # 1
print(next(it))     # 2
print(next(it))     # 3

```


Los iteradores tienen los métodos especiales ```__iter__()``` y ```__next__()```.


Rs: 

Iterable: 

Contenedor de elementos que se puede recorrer

Método: ```__iter__()```

Ej: ```[]1, 2, 3], "hola"```


Iterador: 

Objeto que produce valores de un iterable

```__next__(), __iter__()````

Ej: ```iter([1, 2, 3])```



3. Relación: 

Al usar for, el lenguaje sigue estas instrucciones internamente (están abstraidas):

```
iterable = [10, 20, 30]
iterador = iter(iterable)

while True:
    try:
        elemento = next(iterador)
        print(elemento)
    except StopIteration:
        break

```




#### Rs lambda, map, ls 

Lambda: 

1. Función anónima dentro de otra función.

2. Cuando se requiera una función anónima por un período corto de tiempo.

3. Crear funciones pequeñas y rápidas de una sola expresión.

4. Útiles cuando necesitas una función simple y no quieres definirla con def.


Deben ser simples, ya que:

1. No tienen nombre (a menos que las asignes).

2. No permiten múltiples líneas.

3. No son ideales para lógica compleja.


Map: 

1. Aplica una función a cada elemento de un iterable (como una lista) y devuelve un iterador con los resultados

2. Es muy útil cuando se quiere aplicar una transformación simple y rápida sin necesidad de usar un bucle for


LS:

1. Cuando necesitas crear una nueva lista a partir de otra colección de datos.

2. Cuando quieres que tu código sea compacto y legible (sin sacrificar claridad).

4. Cuando la lógica dentro del for no es demasiado compleja
 


# Combinar estructuras de datos:  

## Comprende las estructuras básicas

Tipo; Mutabilidad; Orden; Uso típico

1. list; Sí; Sí; Secuencia ordenada, general

2. tuple; No; Sí; Secuencia inmutable

3. set; Sí; No;	Elementos únicos, sin orden

4. dict; Sí; Sí; Asociación clave-valor

5. str;	No;	Sí;	Texto


## Combinar estructuras: patrones comunes

1. Lista de tuplas

Para representar pares ordenados

```
pares = [(1, 'uno'), (2, 'dos'), (3, 'tres')]

```


2. Diccionario con listas como valores

Ideal para agrupar elementos bajo una clave:

```
grupos = {
    'manzanas': [1, 2, 3],
    'naranjas': [4, 5]
}

```


3. Diccionario con tuplas como claves

Cuando necesitas claves compuestas:

```
coordenadas = {
    (0, 0): 'origen',
    (1, 2): 'punto A'
}

```


4. Lista de diccionarios

Muy común en bases de datos, JSON, etc.:

```
personas = [
    {'nombre': 'Ana', 'edad': 30},
    {'nombre': 'Luis', 'edad': 25}
]

```


5. Diccionario de diccionarios

Útil para representar tablas o registros complejos:

```
usuarios = {
    'ana': {'edad': 30, 'pais': 'ES'},
    'luis': {'edad': 25, 'pais': 'MX'}
}

```


6. Set de tuplas

Para mantener pares únicos sin repetir

```
relaciones = {('a', 'b'), ('b', 'c')}

```


## Prácticas: 

1. Usa tuples como claves de diccionarios o elementos de sets (ya que son inmutables).

2. Usa namedtuple o dataclass si tu tupla empieza a tener demasiados campos sin nombres.

3. Para acceder fácilmente a datos anidados, evalúa usar collections.defaultdict o estructuras tipo JSON.

4. Usa comprensión de listas/diccionarios para transformar datos complejos

```
# Transformar una lista de diccionarios en otra lista
edades = [persona['edad'] for persona in personas]

```


## Estructura adecuada

1. ¿Importa el orden? → Usa list o tuple.

2. ¿Necesitas clave-valor? → Usa dict.

3. ¿Solo valores únicos? → Usa set.

4. ¿Datos que no deben cambiar? → Usa tuple.

5. ¿Consultas frecuentes por clave? → Usa dict


Ej: 

Modelar una estructura de datos para algún problema específico

(por ejemplo: inventario, usuarios, relaciones, horarios, etc.).


```
datos = [
    {'nombre': 'Ana', 'notas': [7, 9, 8]},
    {'nombre': 'Luis', 'notas': [6, 7, 5]}
]

```

Calcular el promedio por persona:

```
promedios = [
    {'nombre': d['nombre'], 'promedio': sum(d['notas']) / len(d['notas'])}
    for d in datos
]

```


### Moldear estructura de datos 

1. Carácteristicas necesarias en la estruc

2. Obj = estructura(contenido...)



# Combinar control de flujo:  

## Condicionales (if (elif, else), in, range, len), bucles (for, while, ls) y manejo de errores (try, except, finally, err).

## 1. Control de flujo

Estructura; Uso principal 

1. if / elif / else -> Toma de decisiones

2. for -> Iteración sobre elementos

3. while -> Bucle basado en condición

4. break / continue -> Control interno de bucles

5. try / except / finally -> Manejo de errores

6. match / case (Python 3.10+) -> Patrón estructural

7. with -> Manejo de recursos (archivos, etc.)

8. Funciones (def, return) -> Reutilización de código


### 2. Combinar estructuras 

1. IF dentro de FOR

Muy común para procesar datos con condiciones:

```
for x in range(10):
    if x % 2 == 0:
        print(f"{x} es par")

```


2. FOR anidados con IF

Por ejemplo, recorrer matrices y aplicar lógica:

```
matriz = [[1, 2], [3, 4]]
for fila in matriz:
    for num in fila:
        if num > 2:
            print(num)

``` 


3. TRY dentro de FOR

Ideal para continuar procesamiento si hay errores:

```
valores = ["10", "abc", "30"]
for v in valores:
    try:
        numero = int(v)
        print(numero)
    except ValueError:
        print(f"'{v}' no es un número")

```


4. WHILE + IF 

Cuando el final no está claramente definido:

```
n = 10
while n > 0:
    if n % 2 == 0:
        print(f"{n} es par")
    n -= 1

```


5. WITH + TRY

Patrón muy usado para trabajar con archivos de forma segura

```
try:
    with open("archivo.txt") as f:
        for linea in f:
            print(linea.strip())
except FileNotFoundError:
    print("Archivo no encontrado.")

```


## Prácticas

1. Evitar anidar demasiadas estructuras (máximo 2–3 niveles anidados): 

Usa funciones para dividir.


2. Usar guard clauses (condiciones que devuelven temprano) para evitar else innecesarios.

```
def procesar(x):
    if x < 0:
        return "negativo"
    return "positivo"

```


3. Usa match/case para lógica compleja de múltiples condiciones (Python 3.10+):

```
def clasificar(valor):
    match valor:
        case 0:
            return "cero"
        case 1 | 2:
            return "uno o dos"
        case _:
            return "otro"

```


4. Evita while True infinitos si puedes usar for o establecer una condición clara.


5. Usa try/except para errores previsibles, no para control general de lógica.


## Caso práctico 

```
usuarios = ["Ana", "Luis", 42, "Marta", None]

for u in usuarios:
    try:
        if isinstance(u, str):
            print(u.upper())
        else:
            raise TypeError("Dato inválido")
    except TypeError as e:
        print(f"Error: {e}")

```


## Estándar lógico (regla general de combinación)

Piensa siempre en:

1. ¿Qué pasa si...? -> (usa if)

2. ¿Qué hago para cada...? -> (usa for)

3. ¿Hasta cuándo sigo...? -> (usa while)

4. ¿Qué pasa si algo falla...? -> (usa try)

5. ¿Cómo manejo estructuras externas...? -> (usa with)

6. ¿Cómo encapsulo esta lógica...? -> (usa funciones)



# Planteo 

Preguntas: Por qué usaría tal o cual cosa, dar los motivos y resultados esperados. 

Uso de sintaxis o funciones avanzadas (lambda, map, ls):
lambda (f linea) 
map(transf, f y iter obj)
ls nueva lista a partir de otra (expre/cambio expres/cond/accion; for expres cond) -> true

Combinación de control (Condicionales (if (elif, else), in, range, len), bucles (for, while, ls) y manejo de errores (try, except, finally, err).)

Combinación de esstructuras (list, dict, tuple, set)

Características del control y estructuras necesarias. 

Express, cond, func en var


## Reducir las posibilidades 

Enfocar el problema, encontrar los elem claves

Retorno de los objetos 

Del final al inicio



# Kata 17

Exes and Ohs

Comprueba si una cadena tiene la misma cantidad de "x" y "o". 

El método debe devolver un valor booleano y no distinguir entre mayúsculas y minúsculas. 

La cadena puede contener cualquier carácter.

Ejemplos de entrada/salida:

```
XO("ooxx") => verdadero
XO("xooxx") => falso
XO("ooxXm") => verdadero
XO("zpzpzpp") => true // cuando no hay 'x' ni 'o' presentes, debe devolver verdadero
XO("zzoo") => falso

```


Planteo: 

Descomposición: 

Comprueba cadena si misma cantidad de "x" y "o":
x, o len

devolver bool y no distinguir entre mayús, minús:
if lenX == lenY -> true; false

cualquier cadena es valida:

XO("ooxx") => verdadero
XO("xooxx") => falso
XO("ooxXm") => verdadero
XO("zpzpzpp") => true // cuando no hay 'x' ni 'o' presentes, debe devolver verdadero
XO("zzoo") => falso


psCode, diagrama: 

contar x, y; comparar, devolver

alter: 
check, calc, cond, split(make arr), join(make string) 
slice, range, count(valueInString), casefold(str in lowc)


inp:
string 

calc:
recorer string, contar x, y
check lenX, lenY
cambios a la var clave

out: 
tru or false


meths avanz: 
lambda (f linea), 
map(transf, f y iter obj)
ls nueva lista a partir de otra (expre/cambio expres/cond/accion; for expres cond) -> true

ls for -> aplicar calc a la express / aunque return list



# Expresiones en variables 

```
def xo(string):
    lows = string.lower()
    x = lows.count("x")
    o = lows.count("o")
    if x == o: 
        return True
    else:
        return False
```

var equal = True if x == 0 else False

```
def xo(string):
    lows = string.lower()
    x = lows.count("x")
    o = lows.count("o")
    equal = True if x == o else False

```


```
def reverse_words (string): 
    string = string[::-1] 
    word_r = string.split(' ')
    word_r.reverse()
    output = ' '.join(word_r)
    return output

```

# Combinación de condicionales: condicionales y comparaciones anidados 

1. Evita comparaciones redundantes con True o False

```
if activo == True:
    ...

```

Mejor: 

```
if activo:
    ...

```


2. Usar valores "truthy" y "falsy"

Valores se consideran falsy:

```
False, None, 0, "", [], {}, set()

```

Redundante:

```
if len(lista) > 0:
    ...

```

Simple: 

```
if lista:
    ...

```


3. Combina condiciones relacionadas

Lógica anidada innecesaria:

```
if a:
    if b:
        hacer_algo()

```

Mejor:

```
if a and b:
    hacer_algo()

```


4. Usa comparaciones encadenadas

```
if x >= 0 and x <= 10:

```

Mejor:

```
if 0 <= x <= 10:

```


5. Usa in para comprobar pertenencia a múltiples valores

Lento y repetitivo:

```
if fruta == "manzana" or fruta == "pera" or fruta == "plátano":

```

Mejor:

```
if fruta in ["manzana", "pera", "plátano"]:

```


6. Not y Distinto: 

Invierte cuando se más claro 

```
if not x == 0:

``` 

```
if x != 0:

```


7. Usa variables intermedias con nombres claros

```
if (edad > 18 and not banneado and region in permitidas and tiene_documento):

```

Legible:

```
es_mayor = edad > 18
acceso_region = region in permitidas
condicion_valida = es_mayor and not banneado and acceso_region and tiene_documento

if condicion_valida:
    ...

```


8. Operador ternario para expresiones simples

```
estado = "mayor" if edad >= 18 else "menor"

```

úsalo si la lógica es clara y corta.


9. Extrae condiciones repetidas en funciones

```
def es_valido(usuario):
    return usuario["activo"] and usuario["edad"] >= 18

if es_valido(u1) and es_valido(u2):
    ...

```


10. Leer las condiciones, elegir la mas fácil

Complicado de leer sin equivocarse

```
if not ((x == 0 or x == 1) and not y > 5):

```

Mejor: 

```
es_binario = x in (0, 1)
y_pequeño = y <= 5

if es_binario and y_pequeño:
    ...

```


Rs: 

Usa valores truthy/falsy:	
if lista en lugar de if len(lista)>0

Usa comparaciones encadenadas:	
if 0 <= x <= 10

Usa in y funciones:	
Reemplaza or/and repetitivos

Extrae lógica compleja:
Con variables o funciones intermedias



# Expresiones lógicas

Cualquier expresión que evalúa a True o False

```
x > 5
a and b
not (usuario_activo and tiene_permiso)

```


1. Guardar directamente el resultado lógico (booleans)

```
edad = 20
es_mayor = edad >= 18  # Guarda el resultado: True
print(es_mayor)        # → True

```


2. Guardar la expresión completa como función

Evaluar la lógica varias veces con distintos valores

```
def es_mayor_de_edad(edad):
    return edad >= 18

print(es_mayor_de_edad(16))  # → False
print(es_mayor_de_edad(22))  # → True

```

```
filtro = lambda edad: edad >= 18
print(filtro(21))  # → True

```


3. Combinar múltiples expresiones lógicas

```
activo = True
edad = 25
tiene_permiso = False

puede_ingresar = activo and edad >= 18 and tiene_permiso
print(puede_ingresar)  # → False

```


4. Guardar expresiones lógicas como objetos evaluables (avanzado)

Si quieres guardar la estructura lógica como texto para evaluarla dinámicamente:

```
condicion = "edad >= 18 and activo"
edad = 20
activo = True

resultado = eval(condicion)  # → True

```

Evita eval() con datos externos sin validación por motivos de seguridad


5. Funciones con múltiples condiciones agrupadas

```
def es_valido(usuario):
    return usuario["edad"] >= 18 and usuario["activo"]

u = {"edad": 25, "activo": True}
print(es_valido(u))  # → True

```

```
usuario = {
    "edad": 17,
    "activo": True,
    "rol": "admin"
}

es_mayor = usuario["edad"] >= 18
es_admin = usuario["rol"] == "admin"
activo = usuario["activo"]

puede_acceder = es_mayor and es_admin and activo

if puede_acceder:
    print("Acceso concedido")
else:
    print("Acceso denegado")

```

Rs:

es_mayor = edad >= 18L: mejor que	
if edad >= 18 and rol == "admin" and ...

if condicion: mejor que
if activo == True and not banneado == True

def cumple_reglas(x): return ...
Para repetir la condición en varios if


Ej: 

lógica condicional reusable con diccionarios

```
condiciones = {
    "mayor": lambda u: u["edad"] >= 18,
    "activo": lambda u: u["activo"],
    "admin": lambda u: u["rol"] == "admin"
}

usuario = {"edad": 19, "activo": True, "rol": "admin"}

if all(cond(usuario) for cond in condiciones.values()):
    print("✔ Usuario válido")

```



# Partial, compile, functions.tools...


# Plantilla condicional 

## Acceso de usuario: 

Condiciones: 

1. Debe tener al menos 18 años.

2. Debe tener una cuenta activa.

3. Debe aceptar los términos y condiciones.

4. Si es menor de edad, solo puede acceder si tiene permiso parental y es un usuario verificado.


Modelo de datos del usuario:

```
usuario = {
    "nombre": "Ana",
    "edad": 16,
    "activo": True,
    "acepta_terminos": True,
    "permiso_parental": True,
    "verificado": True
}

```


Reglas lógicas como variables:

```
es_mayor = usuario["edad"] >= 18
cuenta_activa = usuario["activo"]
acepta_terminos = usuario["acepta_terminos"]
acceso_completo = es_mayor and cuenta_activa and acepta_terminos

```


Reglas alternativas (si es menor de edad):

```
permiso_extra = usuario["permiso_parental"] and usuario["verificado"]
acceso_limitado = not es_mayor and cuenta_activa and acepta_terminos and permiso_extra

```


Lógica de acceso final:

```
puede_acceder = acceso_completo or acceso_limitado

if puede_acceder:
    print(f"✅ Acceso concedido a {usuario['nombre']}")
else:
    print(f"❌ Acceso denegado a {usuario['nombre']}")

```


2. Validación por nombre de regla

Organizar las reglas en un diccionario si quieres evaluar dinámicamente

```
reglas = {
    "mayor_de_edad": lambda u: u["edad"] >= 18,
    "activo": lambda u: u["activo"],
    "acepta_terminos": lambda u: u["acepta_terminos"],
    "permiso_extra": lambda u: u["permiso_parental"] and u["verificado"]
}

usuario = {...}

acceso_general = (
    reglas["mayor_de_edad"](usuario) and
    reglas["activo"](usuario) and
    reglas["acepta_terminos"](usuario)
)

acceso_excepcion = (
    not reglas["mayor_de_edad"](usuario) and
    reglas["activo"](usuario) and
    reglas["acepta_terminos"](usuario) and
    reglas["permiso_extra"](usuario)
)

puede_acceder = acceso_general or acceso_excepcion

```


## Validar datos/ aplicar reglas de negocio

Ej: 

Validar un formulario (registro, login, contacto)

Aplicar reglas de elegibilidad

Filtrar datos (productos, usuarios, registros


1. Criterios como funciones (si es posible)

Esto te permite hacer tu lógica más modular, legible y testeable 

```
def es_mayor_de_edad(edad):
    return edad >= 18

def es_correo_valido(correo):
    return "@" in correo and "." in correo

def es_usuario_activo(usuario):
    return usuario.get("activo", False)

```


2. Variables intermedias para legibilidad

```
usuario = {
    "nombre": "Ana",
    "edad": 25,
    "correo": "ana@mail.com",
    "activo": True,
    "pais": "ES"
}

mayor = es_mayor_de_edad(usuario["edad"])
correo_valido = es_correo_valido(usuario["correo"])
activo = es_usuario_activo(usuario)
pais_permitido = usuario["pais"] in ["ES", "MX", "AR"]

```


3. Evalúa todo en un bloque de decisión central

```
if mayor and correo_valido and activo and pais_permitido:
    print("✔ Usuario válido")
else:
    print("✖ Usuario inválido")

```


4. Devolver mensajes de error 

Mostrar fallo, acumulación de errores

```
errores = []

if not mayor:
    errores.append("Debe ser mayor de edad")
if not correo_valido:
    errores.append("Correo inválido")
if not activo:
    errores.append("Cuenta inactiva")
if not pais_permitido:
    errores.append("País no permitido")

if errores:
    print("Errores encontrados:")
    for e in errores:
        print("-", e)
else:
    print("✔ Usuario válido")

```


Rs cod: 

```
def validar_dato(x):
    return cond1 and cond2

def regla_negocio(obj):
    condicion1 = ...
    condicion2 = ...
    return condicion1 and condicion2

errores = []

if not condicion1:
    errores.append("Regla 1 no cumplida")
if not condicion2:
    errores.append("Regla 2 no cumplida")

if errores:
    return errores
else:
    return "Todo válido"

```


Usos:

Validaciones de entrada de formularios (edad, email, nombre, etc.)

Reglas de negocio (¿puede comprar? ¿puede registrarse?)

Filtros en APIs o motores de búsqueda

Lógica en pipelines de datos



# Kata 18

String ends with?

Complete la solución para que devuelva verdadero: 
si el primer argumento (cadena) pasado termina con el segundo argumento (también una cadena).

Ej:

solución('abc', 'bc') # devuelve verdadero
solución('abc', 'd') # devuelve falso


```
def solution(string, ending):
    return string.endswith(ending)

```


# Asertividad/eficiencia 

## Cuando no es...

## Truthy, Falsy: método de clase 

### Usar el parámetro "self" para recibir el argumento de cadena

Método de la clase string (al que se accede desde str mediante un punto).

La solución se asigna básicamente como un duplicado de esa función.

```
solution = str.endswith

```

Los métodos de clase toman un argumento propio que generalmente se completa implícitamente con la instancia de la clase desde la que estás llamando, pero si llamas desde la clase misma

```
class Breakfast:
  def __init__(self, items):
    self.items = items
  
  def get_nth_item(self, n):
    return self.items[n]

my_breakfast = Breakfast(['spam', 'egg', 'spam', 'spam', 'bacon', 'spam'])
print(my_breakfast.get_nth_item(2)) # spam

```

get_nth_item está definido para aceptar dos argumentos, pero se llama solo con uno. 

Esto se debe a que, al llamar a un método en un objeto, el primer argumento se completa implícitamente con el propio argumento. 

Puedes comprobarlo llamándolo con demasiados argumentos:

```
Breakfast.get_nth_item(my_breakfast, 2) # spam

```

Aquí solo llamamos a get_nth_item explícitamente desde la propia clase, por lo que no se pasa ningún argumento "self" implícito. 

Así que lo llamamos exactamente como debería llamarse: con dos argumentos, que se llaman "self" y "n".

En esta solución ocurre exactamente lo mismo. 

Al imaginar llamar a 'egg and spam'.endswith('spam'), se está llamando a un método de un objeto de la clase str. 

Pero también se puede llamar al método como una función, str.endswith('egg and spam', 'spam'). 

Y, casualmente, esa función es exactamente lo que pide la kata, incluyendo el orden de los argumentos. 

Solo tenemos que usar la asociación de nombres flexible de Python para que la solución de nombres apunte a esa función, ¡y listo!

Esto también aplica a ```__init__```, pero la razón específica es mucho más peculiar. 

Profundizar sobre las diferencias entre ```__init__``` y ```__new__``` es bastante interesante.


## Comportamiento de métodos y clases

```
variable = str.upper # variable becomes an alias to the method
string = "something"

# These behave the same:
a = "something".upper()
b = string.upper()
c = str.upper(string)
d = variable(string)

print(a == b == c == d) # True

```

str es una clase integrada en Python. 

Al usar str.method("something"), invocamos un método directamente desde la clase str y pasamos "something" como argumento al parámetro "self". 

En Python, tenemos un método integrado de magic/dunder, ```__init__```, que funciona como constructor. 

Este constructor toma la palabra clave "self" como parámetro, que apunta a la instancia actual de la clase.

Así es como se vería un ejemplo:

```
class Person:
    def __init__(self, name):
        self.name = name

    def display_name(self):
        print(f"Name: {self.name}")


bob = Person("Bob")
# These behave the same:
bob.display_name()
Person.display_name(bob)

```



# kata 19 

You're a square!

Un cuadrado de cuadrados

Te gustan los bloques de construcción. 

Te gustan especialmente los bloques cuadrados. 

¡Y lo que te gusta aún más es organizarlos formando un cuadrado de bloques cuadrados!

Sin embargo, a veces no puedes organizarlos en un cuadrado. 

¡En cambio, terminas con un rectángulo normal! 

¡Malditas cosas!

 Si tuvieras una forma de saber si estás trabajando en vano... 
 
 ¡Espera! ¡Eso es! Solo tienes que comprobar si tu número de bloques es un cuadrado perfecto.


Tarea

Dado un número entero, determine si es un número cuadrado:

    En matemáticas, un número cuadrado o cuadrado perfecto es un número entero que es el cuadrado de un número entero; en otras palabras, es el producto de algún número entero consigo mismo.

Las pruebas siempre utilizarán algún número entero, así que no te preocupes por eso en lenguajes tipados dinámicamente.

Ej

```
-1 => falso
 0 => verdadero
 3 => falso
 4 => verdadero
25 => verdadero
26 => falso

```

Planteo: 

Descomposición: 

1. Cuadrado:
figura geométrica plana con cuatro lados iguales,
cuatro ángulos rectos (90 grados).
o
rectángulo con todos los lados de igual longitud.

2. rectángulo: 
cuatro lados y cuatro ángulos rectos (90 grados).
tiene dos pares de lados opuestos de igual longitud
pero no necesariamente todos los lados tienen la misma longitud.

ej: 
un par de lados de 5 cm y otro par de lados de 10 cm. 
En este caso, los lados opuestos son iguales
pero no todos los lados tienen la misma longitud.

si un rectángulo tiene todos los lados de igual longitud,
entonces se convierte en un cuadrado.
ej: 
si un rectángulo tiene dos pares de lados de 5 cm cada uno
entonces es un cuadrado, todos sus lados tienen igual longitud.

Todos los cuadrados son rectángulos,
pero no todos los rectángulos son cuadrados
condición adicional que hace que un rectángulo
sea un cuadrado es que: todos los lados tengan la misma longitud


3. Cuadrado de cuadrados:
cuadrado grande dividido en filas y columnas, 
donde cada intersección de una fila y una columna 
contiene un cuadrado más pequeño

Si cada uno de estos cuadrados más pequeños 
es un cuadrado perfecto, forma un cuadrado de cuadrado

si tienes un cuadrado de 4x4, puedes dividirlo en 16 
cuadrados más pequeños, cada uno de ellos con una 
longitud de lado igual.


4. bloques de construcción

5. bloques de cuadrados

6. organización:
cuadrado de bloques cuadrados o rectángulo

7. Comprobar si tu número de bloques es un cuadrado perfecto:
número de bloques
cuadrado perfecto

8. Cuando no es cuadrado:
Un número no es un cuadrado perfecto cuando no puede ser
expresado como el resultado de multiplicar un número entero por sí mismo.

si no existe un número entero que, al ser elevado al cuadrado, 
dé como resultado ese número.

el número 16 es un cuadrado perfecto porque 
es el resultado de multiplicar 4 por sí mismo (4² = 16).

el número 20 no es un cuadrado perfecto porque no existe
un número entero que, al ser elevado al cuadrado, 
dé como resultado 20.

un número no es un cuadrado perfecto si su raíz cuadrada 
no es un número entero
la raíz cuadrada de 16 es 4
la raíz cuadrada de 20 es aproximadamente 4,47, 
que no es un número entero.

1 (1² = 1)
4 (2² = 4)
9 (3² = 9)
16 (4² = 16)
25 (5² = 25)

3
5
7
10
20
23


9. Cuando no es entero 
Cuando tiene una parte decimal o fraccionaria, no está completo
Cuando no puede ser +(0,1,2..) o -(-1, -2...)



Probl: 
int: número entero

Out: número cuadrado
n cuadrado = n*n
 
diagrama: 
cálc:
n = int(num)
s = math.sqrt(n)
i = n is s 

true if type(s) is float else flase



# kata 20 

Friend or Foe

Crea un programa que filtre una lista de cadenas y devuelva una lista que solo contenga los nombres de tus amigos.

Si un nombre tiene exactamente 4 letras, ¡seguro que es amigo tuyo! 

De lo contrario, seguro que no lo es...

```
Entrada = ["Ryan", "Kieran", "Jason", "Yous"]
Salida = ["Ryan", "Yous"]

Entrada = ["Peter", "Stephen", "Joe"]
Salida = []

```
Las cadenas de entrada solo contendrán letras.
Nota: mantenga el orden original de los nombres en la salida.


Planteo: 

filtre una lista de cadenas:

devuelva una lista string:

contenga los nombres de tus amigos, tienen cuatro letras 
len 4/0-3


methds: 

map(lambda, iter), for, ls(ex, for), lambda, len(iter)



# Regex

## Secuencia de caracteres que forma un patrón de búsqueda.

### RegEx se puede utilizar para comprobar si una cadena contiene el patrón de búsqueda especificado

re, que se puede utilizar para trabajar con expresiones regulares.

```
import re

```

Ej: 

Busca la cadena para ver si empieza con "The" y termina con "Spain":

```
import re

txt = "The rain in Spain"
x = re.search("^The.*Spain$", txt) 

```

```
función: re.search()

Empieza: ^

Termina: * 

```


## RegEx Functions

re ofrece un conjunto de funciones que nos permiten buscar una coincidencia en una cadena:

```
findal() Devuelve una lista que contiene todas las coincidencias
search() Devuelve un objeto Match si hay una coincidencia en cualquier parte de la cadena
split() Devuelve una lista donde la cadena se ha dividido en cada coincidencia
sub() Reemplaza una o varias coincidencias con una cadena

```


## Metacharacters

Son caracteres con un significado especial:

Char; Description; exmple; 

```
[] Un conjunto de chars "[a-m]"
\ Señala una secuencia especial (también se puede utilizar para escapar caracteres especiales) "\d"
. Cualquier carácter (excepto el carácter de nueva línea) "he..o"
^ Comienza con "^hello"
$ Termina con "planet$"
* Cero o más ocurrencias "he.*o" (retorna algo seguido de 0 o más, depende de otros metachar, func )
+ Una o más ocurrencias "he.+o" 
? Cero o una ocurrencia "he.?o"
{} Exactamente el número especificado de ocurrencias "he.{2}o"
| O bien o bien "falls|stays"
() Captura y agrupa

```


## Flags

Puedes agregar banderas al patrón cuando uses expresiones regulares.

Flag; Shorthand; Description:

```
re.ASCII re.A Devuelve solo coincidencias ASCII
re.DEBUG Devuelve información de depuración
re.DOTALL re.S Hace que el carácter . coincida con todos los caracteres (incluido el carácter de nueva línea)
re.IGNORECASE re.I Coincidencia sin distinción entre mayúsculas y minúsculas
re.MULTILINE re.M Devuelve sólo las coincidencias al principio de cada línea
re.NOFLAG Especifica que no hay ninguna bandera establecida para este patrón
re.UNICODE re.U Devuelve coincidencias Unicode. Esta opción es predeterminada en Python 3. En Python 2: use esta opción para devolver solo coincidencias Unicode.
re.VERBOSE re.X Permite espacios en blanco y comentarios dentro de los patrones. Facilita la lectura del patrón.

```


## Secuencias especiales

Una secuencia especial es un \ seguido de uno de los caracteres de la lista a continuación y tiene un significado especial: 

```
\A Devuelve una coincidencia si los caracteres especificados están al principio de la cadena "\AThe"
\b Devuelve una coincidencia donde los caracteres especificados están al principio o al final de una palabra r"\bain"
\B Devuelve una coincidencia donde los caracteres especificados están presentes, pero NO al principio (o al final) de una palabra (la "r" al principio garantiza que la cadena se trate como una "cadena sin formato") r"\Bain" r"ain\B" 
\d Devuelve una coincidencia donde la cadena contiene dígitos (números del 0 al 9) "\d"
\D Devuelve una coincidencia donde la cadena NO contiene dígitos "\D"
\s Devuelve una coincidencia donde la cadena contiene un carácter de espacio en blanco "\s" 
\S Devuelve una coincidencia donde la cadena NO contiene un carácter de espacio en blanco "\S"
\w Devuelve una coincidencia donde la cadena contiene cualquier carácter de palabra (caracteres de la a a la Z, dígitos del 0 al 9 y el carácter de guión bajo _) "\w"
\W Devuelve una coincidencia donde la cadena NO contiene ningún carácter de palabra "\W"
\Z Devuelve una coincidencia si los caracteres especificados están al final de la cadena "Spain\Z"

```


## Sets

Conjunto de caracteres dentro de un par de corchetes ```[]``` con un significado especial:

```
[arn] Devuelve una coincidencia donde uno de los caracteres especificados (a, r o n) está presente
[a-n] Devuelve una coincidencia para cualquier carácter en minúscula, alfabéticamente entre a y n
[^arn] Devuelve una coincidencia para cualquier carácter EXCEPTO a, r y n 
[0123] Devuelve una coincidencia donde cualquiera de los dígitos especificados (0, 1, 2 o 3) está presente
[0-9] Devuelve una coincidencia para cualquier dígito entre 0 y 9
[0-5][0-9] Devuelve una coincidencia para cualquier número de dos dígitos entre 00 y 59
[a-zA-Z] Devuelve una coincidencia para cualquier carácter alfabético entre a y z, en minúsculas o mayúsculas.
[+] En conjuntos, +, *, ., |, (), $,{} no tienen un significado especial, por lo que [+] significa: devolver una coincidencia para cualquier carácter + en la cadena

```


## Functions

1. findall()

Devuelve una lista que contiene todas las coincidencias.

Ej: 

Imprimir una lista de todas las coincidencias:

```
import re

txt = "The rain in Spain"
x = re.findall("ai", txt)
print(x)

```

```
['ai', 'ai']

```

La lista contiene las coincidencias en el orden en que se encuentran.

Si no se encuentran coincidencias, se devuelve una lista vacía


Ej:

Devuelve una lista vacía si no se encontró ninguna coincidencia:

```
import re

txt = "The rain in Spain"
x = re.findall("Portugal", txt)
print(x)

```

```
[]
 
```


2. search()

Busca una coincidencia en la cadena y devuelve un objeto Match si hay una coincidencia.

Si hay más de una coincidencia, solo se devolverá la primera aparición de la coincidencia:

Ej:

Busque el primer carácter de espacio en blanco en la cadena:

```
 import re

txt = "The rain in Spain"
x = re.search("\s", txt)

print("The first white-space character is 
located in position:", x.start()) 

```

```

The first white-space character is located in position: 3

```

Si no se encuentran coincidencias, se devuelve el valor None:

Ej:

Realizar una búsqueda que no devuelva ninguna coincidencia

```
import re

txt = "The rain in Spain"
x = re.search("Portugal", txt)
print(x)

```

```

None

```


3. split()

Devuelve una lista donde la cadena se ha dividido en cada coincidencia:

Ej

Dividir en cada carácter de espacio en blanco:

```
import re

txt = "The rain in Spain"
x = re.split("\s", txt)
print(x) 

```

```

['The', 'rain', 'in', 'Spain']

```


Puede controlar el número de ocurrencias especificando el parámetro maxsplit:

Ej:

Dividir la cadena solo en la primera aparición

```
import re

txt = "The rain in Spain"
x = re.split("\s", txt, 1)
print(x)

```

```
['The', 'rain in Spain']

```


4. sub()

Reemplaza las coincidencias con el texto de su elección:

Ej:

Reemplace cada carácter de espacio en blanco con el número 9:

```
import re

txt = "The rain in Spain"
x = re.sub("\s", "9", txt)
print(x)

```

```
The9rain9in9Spain

```

Puede controlar el número de reemplazos especificando el parámetro de conteo:

Ej:

Reemplace las primeras 2 ocurrencias

```

import re

txt = "The rain in Spain"
x = re.sub("\s", "9", txt, 2)
print(x) 

```

```

The9rain9in Spain

```


## Match Object 

Es un objeto que contiene información sobre la búsqueda y el resultado.

Nota: Si no hay coincidencia, se devolverá el valor None, en lugar del objeto de coincidencia.

Ej:

Realizar una búsqueda que devolverá un objeto coincidente

```
import re

txt = "The rain in Spain"
x = re.search("ai", txt)
print(x) #this will print an object

```

```
<_sre.SRE_Match object; span=(5, 7), match='ai'>

```

El objeto Match tiene propiedades y métodos que se utilizan para recuperar información sobre la búsqueda y el resultado:

.span() devuelve una tupla que contiene las posiciones de inicio y final de la coincidencia.
.string devuelve la cadena pasada a la función
.group() devuelve la parte de la cadena donde hubo una coincidencia

Ej:

Imprima la posición (posición inicial y final) de la primera coincidencia.

La expresión regular busca cualquier palabra que comience con una "S" mayúscula:

```
import re

txt = "The rain in Spain"
x = re.search(r"\bS\w+", txt)
print(x.span())

```

```

(12, 17)

```


Ej:

Imprima la cadena pasada a la función

```
import re

txt = "The rain in Spain"
x = re.search(r"\bS\w+", txt)
print(x.string)

```

```

The rain in Spain

```


Ej:

Imprima la parte de la cadena donde hubo una coincidencia.

La expresión regular busca cualquier palabra que comience con una "S" mayúscula:

```
import re

txt = "The rain in Spain"
x = re.search(r"\bS\w+", txt)
print(x.group()) 

```

```

Spain

```

Nota: Si no hay coincidencia, se devolverá el valor None, en lugar del objeto de coincidencia.



# Kata 21 - Regex

Validate PIN code

Los cajeros automáticos permiten códigos PIN de 4 o 6 dígitos, 
y los códigos PIN no pueden contener más que exactamente 4 o 6 dígitos.

Si se le pasa a la función una cadena PIN válida, devuelve verdadero; 
de lo contrario, devuelve falso.

Ejemplos (Entrada --> Salida)

"1234" --> verdadero
"12345" --> falso
"a234" --> falso

func(pin)
re
re.pin
rtn pin

Planteo: 

regEx: func a partir de cadena; metachars; flags; specSeq
sets

pin: 4-6 ("0-9, a-z")

cadena PIN válida: entrada
T/F: salida

methds
"\d" 0-9
"\w" 0-9 a-z guión bajo

```
x = re.search("^The.*Spain$", stringA)

```
search, findall, set ```[0-9]``` 

find rtn len == 4 or len == 6
search .string len 4 or 6 

search(...).string

return search("\d", string).string

hacerlo true:

p = search("\d", string).string

vp = True if len(p) == 4 or len(p) == 6 else False


```
def pin(string):
    from re import findall
    l = list(string)
    filt = list(findall("[0-9]", string))

    if l == filt: 
        return True if len(l) == 4 or len(l) == 6 else False
    else:
        return False

```



# Restricciones

Condiciones que deben cumplirse durante la ejecución de un algoritmo, como:

Ej: 

1. Límites de entrada (n < 1000)

2. Reglas de negocio (una persona no puede votar si no tiene 18 años)

3. Requisitos de estructura (una lista debe estar ordenada)

4. Restricciones de recursos (tiempo, espacio, memoria)


## Tipos comunes de restricciones:

1. De entrada: 0 <= n <= 1000

2. De formato: Cadena válida, números enteros, fechas correctas

3. De lógica: Solo se permite una acción si la anterior se completó

4. De contexto o negocio: Un usuario no puede comprar si no tiene saldo suficiente

5. De complejidad: El algoritmo debe correr en O(n log n) como máximo


## Tratar restricciones en un algoritmo

1. Validar antes de ejecutar el algoritmo

Evita cálculos innecesarios y errores

```
def procesar(n):
    if n < 0:
        raise ValueError("n debe ser no negativo")
    # ... lógica principal

```


2. Filtrar o ajustar datos de entrada

```
# Filtrar solo edades válidas (0–120)
edades_validas = [e for e in edades if 0 <= e <= 120]

```


3. Incluir restricciones dentro del flujo lógico

```
def puede_comprar(usuario):
    return usuario["activo"] and usuario["saldo"] > 0

```


4. Usar funciones auxiliares para reglas complejas

Esto mejora la claridad y la reutilización

```
def cumple_requisitos(usuario):
    return (
        usuario["edad"] >= 18 and
        usuario["rol"] in ["admin", "cliente"] and
        not usuario["baneado"]
    )

```


5. Controlar violaciones con excepciones o mensajes

```
if not cumple_requisitos(usuario):
    raise PermissionError("El usuario no cumple los requisitos.")

```


6. 

Ej: Backtracking

Las restricciones guían el espacio de búsqueda. 

```
def resolver_sudoku(tablero):
    for celda in vacías:
        for valor in posibles(celda):
            if cumple_restricciones(tablero, celda, valor):
                colocar_valor(celda, valor)
                if resolver_sudoku(tablero):
                    return True
                quitar_valor(celda)
    return False

```


## Patrones útiles para restricciones

1. assert condicion → para validaciones en desarrollo

2. raise Exception(...) → para restricciones estrictas

3. if not cond: return → para salidas tempranas

4. Diccionarios de reglas → para validar múltiples campos

5. Funciones puras → para validar sin efectos colaterales


Ej: 

```
def registrar_usuario(nombre, edad, email):
    if not nombre:
        raise ValueError("Nombre obligatorio")
    if edad < 13:
        raise ValueError("Edad mínima: 13 años")
    if "@" not in email:
        raise ValueError("Email no válido")

    print(f"Registrado: {nombre}, {edad}, {email}")

```


## Lógica

1. Expresión lógica de asignación directa: 

```
a = 5
b = 10

es_mayor = a > b         # False
es_igual = a == 5        # True
es_par = a % 2 == 0      # False

```


2. Asignación con operadores lógicos compuestos

```
valido = a > 0 and b > 0        # True si ambos > 0
es_raro = not (a == b)          # True si a ≠ b
rango_valido = 0 <= a <= 100    # Encadenamiento de comparaciones

```


3. Funciones lógicas

```
def es_valido(nombre, edad):
    return isinstance(nombre, str) and edad >= 18

resultado = es_valido("Ana", 20)  # True


```


4. Expresiones lógicas en lambdas 

```
es_mayor_de_edad = lambda edad: edad >= 18
print(es_mayor_de_edad(16))  # False

```


5. Expresiones lógicas en list comprehensions

```
numeros = [5, 12, 8, 3]
pares = [n for n in numeros if n % 2 == 0]

```


6.  Asignar una lógica basada en estructuras (listas, dicts, etc)

```
usuario = {"activo": True, "rol": "admin"}
es_admin_activo = usuario["activo"] and usuario["rol"] == "admin"

```


7. Asignar el resultado de evaluaciones dinámicas (eval)

```
expresion = "x > 10 and x < 20"
x = 15
resultado = eval(expresion)  # True, pero ⚠️ solo si tú controlas el contenido

```


8. Usar lógica simbólica con sympy (avanzado)

```
from sympy import symbols, And

x, y = symbols('x y')
expr_logica = And(x > 0, y < 5)

```


9. Postprocesamiento lógico en estructuras más grandes

```
usuarios = [{"edad": 20}, {"edad": 17}]
mayores = [u["edad"] >= 18 for u in usuarios]  # [True, False]

```


10. Guardar múltiples expresiones lógicas (funciones o condiciones)

```
condiciones = [
    lambda x: x > 0,
    lambda x: x < 100,
    lambda x: x != 42,
]

x = 50
cumple_todas = all(cond(x) for cond in condiciones)  # True

```


## Precondiciones y Postcondiciones

Principios del diseño por contrato (Design by Contract), que ayudan a formalizar lo que una función espera y lo que garantiza al terminar.

1. Precondición: Lo que debe cumplirse antes de ejecutar una función

2. Postcondición: Lo que se garantiza después de que la función se ejecuta exitosamente


## Implementar precondiciones en Python

Usamos validaciones explícitas, assert, raise, o anotaciones de tipo.

```
def dividir(a, b):
    # Precondición: b ≠ 0
    if b == 0:
        raise ValueError("El divisor no puede ser cero")
    return a / b

```


Usar assert (útil en desarrollo):

```
def dividir(a, b):
    assert b != 0, "Precondición fallida: b debe ser distinto de 0"
    return a / b

```

assert se desactiva en producción con el flag -O, así que úsalo principalmente para pruebas o entornos controlados.



## Implementar postcondiciones

Validamos que el resultado cumple una condición esperada

```
def cuadrado(x):
    resultado = x * x
    assert resultado >= 0, "Postcondición fallida: el resultado debe ser positivo"
    return resultado

```


Ej: Precondciones y postcondiciones 

```
def registrar_usuario(nombre, edad):
    # Precondiciones
    assert isinstance(nombre, str), "nombre debe ser str"
    assert edad >= 0, "edad debe ser no negativa"
    
    usuario = {"nombre": nombre, "edad": edad}

    # Postcondiciones
    assert "nombre" in usuario
    assert usuario["edad"] >= 0

    return usuario

```


Prácticas: 

1. Nombrar pre/postcondiciones claramente:	
Mejora la lectura y mantenimiento

2. Validar antes de ejecutar:
Evita ejecuciones innecesarias o inválidas

3. Documentar condiciones:
Aumenta la claridad de uso

4. Usar assert en pruebas, raise en producción:
Seguridad y flexibilidad

5. Escribir tests que validen contratos:
Te protege contra futuros cambios involuntarios


## Estilo con docstrings (documentación de contrato)

```

def transferir(saldo, monto):
    """
    Transfiere un monto del saldo.

    Precondiciones:
    - saldo ≥ 0
    - monto > 0
    - saldo ≥ monto

    Postcondición:
    - retorna saldo - monto

    """
    assert saldo >= 0
    assert monto > 0
    assert saldo >= monto

    resultado = saldo - monto

    assert resultado >= 0
    return resultado

```


## Funciones que devuelven múltiples valores también pueden tener postcondiciones

```
def dividir_y_residuo(a, b):
    assert b != 0
    cociente = a // b
    residuo = a % b

    assert a == cociente * b + residuo  # postcondición matemática
    return cociente, residuo

```


## Alternativa avanzada: librerías que ayudan con contratos

icontract: Decoradores para pre/postcondiciones.

typeguard: Valida tipos en tiempo de ejecución.

pydantic: Muy útil para contratos en modelos de datos

```
from icontract import require, ensure

@require(lambda b: b != 0)
@ensure(lambda result: result >= 0)
def dividir(a: int, b: int) -> float:
    return a / b

```

Ej: Patrón común 

```
def mi_funcion(x):
    # Precondiciones
    assert tipo(x)  # o raise si es producción
    assert regla(x)

    # Lógica principal
    resultado = ...

    # Postcondiciones
    assert resultado cumple algo
    return resultado

```


# Kata 21 - Get the Middle Character

Recibirá una cadena no vacía. 

Su tarea es devolver el/los carácter(es) central(es) de la cadena.

Si la longitud de la cadena es impar, devuelve el carácter del medio.
Si la longitud de la cadena es par, devuelve los 2 caracteres del medio.

Ejemplos:

"prueba" --> "es"
"prueba" --> "t"
"medio" --> "dd"
"A" --> "A"

 
Planteo: 

cadena no vacía: entrada 

devolver chars mid: out 

if len(str) impar (%2 != 0): rtn char mid
if len(str) par (%2 == 0): rtn chars mid 

chars of str: for x in str
chars mid: len(str)/2


slice, join, 

```
def midchars(string):
    long = len(string)
    mid = long // 2
    return string[mid-1:mid+1] if long %2 == 0 else string[mid]

```



# Kata 22 

Disemvowel Trolls

¡Los trolls están atacando tu sección de comentarios!

Una forma común de abordar esta situación es eliminar todas las vocales de los comentarios de los trolls, neutralizando la amenaza.

Su tarea es escribir una función que tome una cadena y devuelva una nueva cadena con todas las vocales eliminadas.

Por ejemplo, la cadena "This website is for losers LOL!" se convertiría en "Ths wbst s fr lsrs LL!".

Nota: para este kata la "y" no se considera una vocal.



# kata 23 

Opposite number

Muy simple, dado un número (entero / decimal / ambos dependiendo del idioma), encuentra su opuesto (inverso aditivo).

Examples:

1: -1
14: -14
-34: 34

```
def opposite(num):
    return -(num)

print(opposite(1))
print(opposite(14))
print(opposite(-34))

```



# Kata 24

Shortest Word

Simple, dada una cadena de palabras, devuelve la longitud de la(s) palabra(s) más corta(s).

La cadena nunca estará vacía y no es necesario tener en cuenta diferentes tipos de datos.


Planteo: 

diagram

inp: str

calc: 
```
str -> list -> order -> return list[0]

```

out: len str short

pscod: 

conver str en list
tomar len de cada elm de list, guardarlo en nuev arr
tomar menor num 

methds
order, sorted, revers, etc



# Kata 25 

Will you make it?

Estabas acampando con tus amigos lejos de casa, pero al llegar la hora de volver, te das cuenta de que se te está acabando la gasolina y que la gasolinera más cercana está a 80 kilómetros. 

Sabes que, de media, tu coche consume unos 40 kilómetros por litro. Quedan 8 litros.

Considerando estos factores, escribe una función que te diga si es posible llegar a la bomba o no.

La función debe devolver verdadero si es posible y falso si no.


Planteo: 

Descomp: 

gasolinera: 
g-- 80km --> g

gasolina: 
media consumo: 40km/l
resto: 8.0l

func: 

calc: 

Caso espec: 
unidad: consum 40km/l
total: resto 8.0l
mult: 40*8 = 320km 
gas: 80km -> 2.0l
rtn true
sobran: 6.0l gas

factores:
kmGasStation, gasStock, avgCon

caso general: 
gasStation = kmGasStation <= avgCons*gasStock

diagram

inp: 

calc: 

out: 
rtn kmGasStation <= avgCons*gasStock 

pscod: 

methds



# Kata 26 

Invert values

Dado un conjunto de números, devuelve el inverso aditivo de cada uno. 

Cada positivo se convierte en negativo, y los negativos en positivos.

```
[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []

```

Se puede asumir que todos los valores son enteros. 

No se debe modificar la matriz de entrada.

ls
copy()
list(map(lambda e : -e, arrNum))


# Yield vs return 

```
def invert(lst):
    return [-x for x in lst]

```

La lista completa se rellena antes de que se ejecute la instrucción return.

La solución descrita podría ser más precisa si se usara "yield" en lugar de "return", salvo que el tipo de retorno sería un generador y no una lista. 

Esto significa que, para que esto funcione, se necesita una sentencia que no interrumpa el bucle for.



# Kata 27 

Escribe una función que tome un array de números y devuelva la suma de estos. 
Los números pueden ser negativos o no enteros. 
Si el array no contiene ningún número, debes devolver 0.

Ej:

```
Entrada: [1, 5.2, 4, 0, -1]
Salida: 9.2

Aporte: []
Salida: 0

Entrada: [-2.398]
Salida: -2.398

```

Suposiciones

Puedes asumir que solo te dan números.
No se puede asumir el tamaño de la matriz.
Puedes asumir que obtienes una matriz y si la matriz está vacía, devuelves 0.

Lo que estamos probando

Estamos probando bucles y operaciones matemáticas básicas. 
Esto es para principiantes que están aprendiendo bucles y operaciones matemáticas.
Los usuarios avanzados pueden encontrar esto extremadamente fácil y pueden escribirlo fácilmente en una línea.

sum
ls
map

```
return sumLst = lambda lst : sum(lst)

return sum(list)

[e for e in list] -> cnv num

map(lambda e : e, list) -> cnv num

```



# Kata 28 

sum odd numbers

Dado el triángulo de números impares consecutivos:

             1
			3 5
		   7 9 11
		 13 15 17 19
		21 23 25 27 29
...

Calcula la suma de los números en la fila n de este triángulo 
(comenzando en el índice 1) por ejemplo: 
(Entrada --> Salida)

1 --> 1
2 --> 3 + 5 = 8


plant: 

alter: 
cnv arr space start and ends
sum arr

alter: 
python rmv spaces 
num -> list(num)



# Kata 29 

Remove First and Last Character

```
return replace.replace

return s[0], s[-1]

return s[1:-2]

s = lambda s : s[1:-2]

```


# Kata 30 

Escriba una función que acepte un entero no negativo "n" y una cadena s como parámetros, y
devuelva una cadena "s" repetida exactamente n veces.
Ejemplos (entrada -> salida)

6, "i" -> "IIIIII"
5, "Hola" -> "HolaHolaHolaHolaHola"


Planteo

int +, str
str * int



# Kata 31 

Simple Multi

Este kata trata de multiplicar un número dado por ocho si es un número par y por nueve en caso contrario.


```
return n*8 if n %2== 0 else n*9

```



# Kata 32

Implementa una función que suma dos números y devuelve su suma en binario. 
La conversión puede realizarse antes o después de la suma.

El número binario devuelto debe ser una cadena.

Ejemplos: (Entrada1, Entrada2 --> Salida (explicación)))

1, 1 --> "10" (1 + 1 = 2 en decimal o 10 en binario)
5, 9 --> "1110" (5 + 9 = 14 en decimal o 1110 en binario)



# Kata 33 

Transportation on vacation

Tras un trimestre duro en la oficina, decides tomarte unas vacaciones. 
Así que reservarás un vuelo para ti y tu novia e intentarás dejar atrás todo el lío.

Necesitarás un coche de alquiler para desplazarte durante tus vacaciones. 
El gerente de la empresa de alquiler de coches te ofrece buenas ofertas.

Cada día de alquiler de coche cuesta $40. 
Si lo alquilas por 7 días o más, tendrás un descuento de $50 en el total. 
Por otro lado, si lo alquilas por 3 días o más, tendrás un descuento de $20 en el total.

Escriba un código que proporcione el monto total para diferentes días (d).


Planteo: 

auto = 40 (dia)
descuento = 50 (7d+)
descuento = 20 (3d+)

x*0.5

total = 40(d)*off

inp:
d(num)

calc: 
d*40*0.
out:
total

if 1 <= n <= 2: rtn 40 elif: 3 <= n <= 6 rtn 40*0.2: else: 40*0.5


# Kata 34

L1: Set Alarm

Escriba una función llamada setAlarm/set_alarm/set-alarm/setalarm (según el lenguaje) que reciba dos parámetros. 
El primero, "empleado", es verdadero siempre que esté empleado, y el segundo, "vacaciones", es verdadero siempre que esté de vacaciones.

La función debe devolver verdadero si está empleado y no de vacaciones (ya que estas son las circunstancias en las que necesita configurar una alarma). 
De lo contrario, debe devolver falso. 

Ejemplos:

empleado | vacaciones 
verdadero | verdadero => falso
verdadero | falso => ​​verdadero
falso | verdadero => falso
falso | falso => ​​falso


inp
empl, vac
state 

calc: 
return true if empl is true and vac is false
return true if empl == true and vac == false else false

out



# Kata 35

Abbreviate a Two Word Name

Escribe una función para convertir un nombre en iniciales. 

Esta kata acepta estrictamente dos palabras con un espacio entre ellas.

El resultado debe ser dos letras mayúsculas separadas por un punto.

Debería verse así:

Sam Harris => SH

Patrick Feeney => PF


split -> arr -> str -> index0 



# Kata 36 

Escriba una función que elimine los espacios de la cadena y luego devuelva la cadena resultante.

Ejemplos (Entrada -> Salida):

"8 j 8 mBliB8g imjB8B8 jl B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B BB B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r " -> "8aaaaaddddr"


s.replace(" ", "")



 
