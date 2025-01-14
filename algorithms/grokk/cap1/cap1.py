# Binary Search
"""
def binary_search(list, item):
    low = 0		# low y high realizan un seguimiento de en qué parte de la lista buscará.
    high = len(list) - 1	
	
    while low <= high:	# Si bien no lo ha reducido a un solo elemento...
        mid = (low + high)  # … revisa el elemento del medio.
        guess = list[mid]
        if guess == item:	# Encontré el artículo.
            return mid
        if guess > item:	# La suposición era demasiado alta
            high = mid - 1	
        else:		# La suposición era demasiado baja.
            low = mid + 1
    return None		# El item no existe.

my_list = [1, 3, 5, 7, 9] # testeando

print (binary_search(my_list, 3)) # => 1    # Recuerde, las listas comienzan en 0. 
print (binary_search(my_list, -1)) # => None  # "None" significa null en Python. Él indica que el artículo no fue encontrado.

"""

"""
Le pasamos nuestro array y el elemento que queremos encontrar en él. 
Si existe devolverá el indice, sino dirá None. 

"""

# Ejercicios

"""
1.1 Suponga que tiene una lista ordenada de 128 nombres y está buscando
a través de él mediante búsqueda binaria. ¿Cuál es el número máximo de
pasos que daría?

Como: Para una lista de 8 elementos, log 8 == 3, porque 2^3 == 8. 
128 elementos, log 128 == x, porque 2^x == 128 -> 2^7 == 128.
log 128 = 7. Siete pasos para 128 elementos. 


1.2 Suponga que duplica el tamaño de la lista. cual es el maximo
¿Número de pasos ahora?

log 256 == 8
2^8 == 256 

"""


# Selection Sort

def findSmallest(arr):
    smallest = arr[0]	#Almacena el valor más pequeño
    smallest_index = 0	#Almacena el índice del valor más pequeño
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    return smallest_index

    
def selectionSort(arr):	#Ordena una matriz
    newArr = []
    for i in range(len(arr)):
        smallest = findSmallest(arr) #Encuentra el elemento más pequeño de la matriz y lo agrega a la nueva matriz
        newArr.append(arr.pop(smallest))
    return newArr

print (selectionSort([5, 3, 6, 2, 10]))


