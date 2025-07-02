# Arrays

"""
Se puede utilizar para crear un algoritmo para
encontrar el valor minimo que almacena. 
"""

"""
Lista de pasos:

1. Crea una variable 'minVal' y configúrala igual al primer valor de la matriz.
2. Recorrer cada elemento de la matriz.
3. Si el elemento actual tiene un valor menor que 'minVal', actualice 'minVal' a este valor.
4. Después de ver todos los elementos de la matriz, la variable 'minVal' ahora contiene el valor más bajo.

"""

"""
Pseudocódigo:

Variable 'minVal' = array[0]
For each element in the array
    If current element < minVal
        minVal = current element 

"""

my_array = [7, 12, 9, 4, 11]
minVal = my_array[0]    # Step 1

for i in my_array:      # Step 2
    if i < minVal:      # Step 3
        minVal = i
        
print('Lowest value: ',minVal) # Step 4


"""
Claves:
inicio
minVal = my_array[0] 

comparacion y actualizacion:
if i < minVal: 
 minVal = i

"""


# Bubble Sort

"""
Antes de implementación:
Ver, conocer el comportamiento; sus claves,
qué efectos tiene en sus elementos
"""

"""
Lista de pasos

"""

"""
Pseudocódigo
""" 

"""
1. Una matriz con valores para ordenar.

2. Un bucle interno que recorre la matriz e intercambia valores si el primer valor es mayor que el siguiente.
Este bucle debe recorrer un valor menos en cada ejecución.

3. Un bucle externo que controla cuántas veces debe ejecutarse el bucle interno.
Para una matriz con n valores, este bucle externo debe ejecutarse n-1 veces.

"""

my_array = [64, 34, 25, 12, 22, 11, 90, 5]

n = len(my_array)
for i in range(n-1):
    for j in range(n-i-1):
        if my_array[j] > my_array[j+1]:
            my_array[j], my_array[j+1] = my_array[j+1], my_array[j]

print("Sorted array:", my_array)


"""
Mejora:
Cuando este semiordenado, que termine en ese momento y no siga ejecutandose el algoritmo completo.
Cuando no se intercambien valores, así lo terminamos de ejecutar

"""

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

"""
Claves:
(n -i(index/elem/pos)-1 ), swapped e intercambio i, j (asignación)

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

"""



# Selection Sort

n = len(my_array)
for i in range(n):
    min_index = i
    for j in range(i+1, n):
        if my_array[j] < my_array[min_index]:
            min_index = j   
    my_array[i], my_array[min_index] = my_array[min_index], my_array[i]

print("Sorted array:", my_array)

"""
Claves:
asig i y j (camb index?), swap asig i y j, otra func range 

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

"""


# Insertion Sort

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

"""
Claves:

bucle externo:
selecciona un valor para ordenar. 
Para una matriz con n valores.
Su bucle externo omite el primer valor y debe ejecutarse n-1 

n = len(my_array)
for i in range(1,n): de 1 a n

Un bucle interno:
recorre la parte ordenada del array para encontrar dónde insertar el valor. 
Si el valor a ordenar está en el índice i, La parte ordenada de la matriz comienza en el índice 0 y termina en el índice i - 1

"""



# Quicksort 

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

"""
Claves:

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

"""



# Counting Sort 





