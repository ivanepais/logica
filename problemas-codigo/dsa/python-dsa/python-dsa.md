# DSA 

Tratan sobre cómo se pueden almacenar los datos en diferentes estructuras.

Los algoritmos tratan sobre cómo resolver diferentes problemas, a menudo mediante la búsqueda y manipulación de estructuras de datos.

DSA te ayuda a encontrar la mejor combinación de estructuras de datos y algoritmos para crear un código más eficiente.


## Data Structure 

Son una forma de almacenar y organizar datos en una computadora.

Python tiene soporte integrado para varias estructuras de datos, como listas, diccionarios y conjuntos

Se pueden implementar otras estructuras de datos utilizando clases y objetos de Python, como listas enlazadas, pilas, colas, árboles y gráficos.

Ej: 

Lists and Arrays
Stacks
Queues
Linked Lists
Hash Tables
Trees:
 Binary Trees
 Binary Search Trees
AVL Trees
Graphs


## Algorithms

Son una forma de trabajar con datos en una computadora y resolver problemas como ordenar, buscar, etc.

Ej: 

Algoritmos de búsqueda y ordenación:

Linear Search
Binary Search
Bubble Sort
Selection Sort
Insertion Sort
Quick Sort
Counting Sort
Radix Sort
Merge Sort

DSA te permite mejorar las habilidades de resolución de problemas

Python te ayudan a escribir código más eficiente

DSA le brinda una mejor comprensión del almacenamiento de memoria

Ayuda a gestionar desafíos de programación complejos

Python se usa ampliamente en ciencia de datos y aprendizaje automático.


# Lists and Array

En Python, las listas son la estructura de datos incorporada que sirve como una matriz dinámica.

Las listas están ordenadas, son mutables y pueden contener múltiples elementos de diferentes tipos.

Ej: 

```
# List with mixed types
z = [1, "hello", 3.14, True] 

```

Python vienen con varios algoritmos integrados (llamados métodos) para realizar operaciones comunes como agregar, ordenar y más.


Ej: 

Añade un elemento a la lista y ordena la lista en orden ascendente:

```
x = [9, 12, 7, 4, 11]

# Add element:
x.append(8)

# Sort list ascending:
x.sort() 

```


## Crear algoritmos

A veces queremos realizar acciones que no están integradas en Python.

Se puede utilizar un algoritmo para encontrar el valor más bajo en una lista, como en el siguiente ejemplo:

### pscod con métodos integrados: 

```
min(arr)

```


### Sin integrados: 

Ej: 

Valor más bajo en una lista

#### Toma el primer elemento, recorre el array, lo compara y si es más bajo, lo asigna. 

```
my_array = [7, 12, 9, 4, 11, 8]
minVal = my_array[0]

for i in my_array:
  if i < minVal:
    minVal = i

print('Lowest value:', minVal) 

```

Out: Lowest value: 4

Muy simple y lo suficientemente rápido para conjuntos de datos pequeños.

##### Si los datos son lo suficientemente grandes, cualquier algoritmo tardará tiempo en ejecutarse.

##### Es donde entra en juego la optimización: una parte importante del desarrollo de algoritmos y, por supuesto, una parte importante de la programación DSA.


## Time Complexity

##### Complejidad temporal, a menudo observamos cuánto tiempo tarda un algoritmo en ejecutarse en relación con el tamaño del conjunto de datos.

##### En el ejemplo anterior, el tiempo que el algoritmo necesita para ejecutarse es proporcional, o lineal, al tamaño del conjunto de datos.

Se debe a que el algoritmo debe visitar cada elemento del array una vez para encontrar el valor más bajo. 

##### El bucle debe ejecutarse 5 veces, ya que hay 5 valores en el array. 

Y si el array tuviera 1000 valores, el bucle tendría que ejecutarse 1000 veces.

##### Relación entre la cantidad de operaciones de comparación necesarias para encontrar el valor más bajo y el tamaño de la matriz.


### Proporciones

Tiempo(y), cantidad de elementos(n)

1. O(1): 
una operación, cálculo, fórmula, una expresión; acceso directo.

2. O(n): 
n operaciones -> (para) n valores 
Encontrar el valor mínimo, dado que el algoritmo debe comparar cada valor una vez.

3. O(n^2):
Los grandes conjuntos de datos ralentizan significativamente estos algoritmos. Con solo un aumento en n
¡De 100 a 200 valores, el número de operaciones puede aumentar hasta 30.000!

Ej:  	
Bubble sort, Selection sort and Insertion sort

4. O(n log(n)):
Quicksort más rapido en promedio que los anteriores
Siendo O(nlogn) el tiempo promedio, no el peor caso.
El peor caso para Quicksort también es O(n²).
Es el tiempo promedio lo que lo hace tan interesante

##### Mejor tiempo: O(1) > O(n) > O(n log(n)) > O(n^2)



# Stacks

##### Una pila es una estructura de datos lineal que sigue el principio de último en entrar, primero en salir (LIFO).

En una pila solo puedes agregar o quitar de la parte superior.

Puede contener muchos elementos y el último elemento agregado es el primero en eliminarse.

Estos se añaden y se retiran desde arriba.

Al retirar, siempre será el último que se haya añadido.

Esta forma de organizar los elementos se llama LIFO (último en entrar, primero en salir).


Operaciones básicas en una pila son:

1. Push: Agrega un nuevo elemento en la pila

2. Pop: Elimina y devuelve el elemento superior de la pila.

3. Peek: Devuelve el último elemento superior de la pila.

4. isEmpty: Comprueba si la pila está vacía.

5. Size: Encuentra el número de elementos en la pila


##### Las pilas se pueden implementar mediante el uso de matrices o listas enlazadas.

##### Las pilas se pueden utilizar para implementar mecanismos de deshacer, volver a estados anteriores, crear algoritmos de búsqueda en profundidad en gráficos o retroceder.


## 1. Stacks con listas de python

Para las listas (y matrices) de Python, una pila puede verse y comportarse de la siguiente manera:

```
x = [5, 6, 2, 9, 3, 8, 4, 2]

```

Agregar: Push

```
x = [5, 6, 2, 9, 3, 8, 4, 2, 0]

```

Eliminar: Pop

```
x = [5, 6, 2, 9, 3, 8, 4]

```

##### Dado que las listas de Python tienen un buen soporte para la funcionalidad necesaria para implementar pilas, comenzamos creando una pila y realizamos operaciones de pila con solo unas pocas líneas como esta:

### Usando una lista de Python como una pila: push, peek, pop, isEmpty, size 

```
 stack = []

# Push
stack.append('A')
stack.append('B')
stack.append('C')
print("Stack: ", stack)

# Peek
topElement = stack[-1]
print("Peek: ", topElement)

# Pop
poppedElement = stack.pop()
print("Pop: ", poppedElement)

# Stack after Pop
print("Stack after Pop: ", stack)

# isEmpty
isEmpty = not bool(stack)
print("isEmpty: ", isEmpty)

# Size
print("Size: ",len(stack))

```


## 2. La creación de una clase Stack dedicada proporciona una mejor encapsulación y funcionalidad adicional:

##### Crea un arr, usa métodos de arr: append, pop, index/access

```
class Stack:
  def __init__(self):
    self.stack = []

  def push(self, element):
    self.stack.append(element)

  def pop(self):
    if self.isEmpty():
      return "Stack is empty"
    return self.stack.pop()

  def peek(self):
    if self.isEmpty():
      return "Stack is empty"
    return self.stack[-1]

  def isEmpty(self):
    return len(self.stack) == 0

  def size(self):
    return len(self.stack)

# Create a stack
myStack = Stack()

myStack.push('A')
myStack.push('B')
myStack.push('C')

print("Stack: ", myStack.stack)
print("Pop: ", myStack.pop())
print("Stack after Pop: ", myStack.stack)
print("Peek: ", myStack.peek())
print("isEmpty: ", myStack.isEmpty())
print("Size: ", myStack.size()) 

```


### Razones para implementar pilas usando listas/matrices:

1. Uso eficiente de la memoria: los elementos de la matriz no retienen la dirección del siguiente elemento como lo hacen los nodos de la lista enlazada.

2. Más fácil de implementar y comprender: el uso de matrices para implementar pilas requiere menos código que el uso de listas enlazadas y, por este motivo, también suele ser más fácil de comprender.


### Una razón para no usar matrices para implementar pilas:

##### Tamaño fijo: 

Un array ocupa una parte fija de la memoria. 

Esto significa que podría ocupar más memoria de la necesaria o, si se llena, no podrá contener más elementos.
    

## 3. Implementación de pila mediante listas enlazadas

##### Una lista enlazada consta de nodos con algún tipo de datos y un puntero al siguiente nodo.

```
data	-> data    -> data
----	   ----	      ----
next ->    next ->    next -> null

```

##### Una gran ventaja de usar listas enlazadas es que los nodos se almacenan donde haya espacio libre en la memoria; no es necesario almacenarlos uno tras otro, como ocurre con los elementos en matrices. 

Otra ventaja de las listas enlazadas es que, al añadir o eliminar nodos, no es necesario desplazar el resto de los nodos de la lista.

Para comprender mejor los beneficios de usar matrices o listas enlazadas para implementar pilas, debe consultar esta página que explica cómo se almacenan las matrices y las listas enlazadas en la memoria.

Así es como se puede implementar una pila utilizando una lista enlazada.

```
class Node:
  def __init__(self, value):
    self.value = value
    self.next = None

class Stack:
  def __init__(self):
    self.head = None
    self.size = 0

  def push(self, value):
    new_node = Node(value)
    if self.head:
      new_node.next = self.head
    self.head = new_node
    self.size += 1

  def pop(self):
    if self.isEmpty():
      return "Stack is empty"
    popped_node = self.head
    self.head = self.head.next
    self.size -= 1
    return popped_node.value

  def peek(self):
    if self.isEmpty():
      return "Stack is empty"
    return self.head.value

  def isEmpty(self):
    return self.size == 0

  def stackSize(self):
    return self.size

  def traverseAndPrint(self):
    currentNode = self.head
    while currentNode:
      print(currentNode.value, end=" -> ")
      currentNode = currentNode.next
    print()

myStack = Stack()
myStack.push('A')
myStack.push('B')
myStack.push('C')

print("LinkedList: ", end="")
myStack.traverseAndPrint()
print("Peek: ", myStack.peek())
print("Pop: ", myStack.pop())
print("LinkedList after Pop: ", end="")
myStack.traverseAndPrint()
print("isEmpty: ", myStack.isEmpty())
print("Size: ", myStack.stackSize()) 

```
Out:
LinkedList: C -> B -> A ->
Peek: C
Pop: C
LinkedList after Pop: B -> A ->
isEmpty: False
Size: 2


### Una razón para usar listas enlazadas para implementar pilas:

Tamaño dinámico: 
La pila puede crecer y reducirse dinámicamente, a diferencia de las matrices.


### Razones para no utilizar listas enlazadas para implementar pilas:

1. Memoria adicional: 
Cada elemento de la pila debe contener la dirección del siguiente elemento (el siguiente nodo de la lista enlazada).

2. Legibilidad: 
El código puede resultar más difícil de leer y escribir para algunos porque es más largo y complejo.


### Aplicaciones comunes para una pila

Las pilas se utilizan en muchos escenarios del mundo real:

Operaciones de deshacer/rehacer en editores de texto
Historial del navegador (atrás/adelante)
Pila de llamadas de función en programación
Evaluación de expresiones


