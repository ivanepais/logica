# Algoritmos

## N1: Fundamentos

Desarrollar intuición con operaciones numéricas, control de flujo, conteo, marcado


### 1. Primalidad

1. Verificar si un número es primo

2. Sumar primos hasta n

Entrena: bucles, divisores, optimización (√n)


### 2. Mínimos y máximos

1. Encontrar el mínimo/máximo en una lista

2. Posición del mayor valor

Entrena: condiciones, acumuladores


### 3. Conteo y frecuencia

1. Contar cuántas veces aparece cada letra en una cadena

2. Contar cuántos pares hay en una lista de enteros

Entrena: uso de diccionarios, estructuras eficientes


## N2. Patrones de iteración y filtrado

Objetivo: dominar iteraciones inteligentes, lógica de filtrado y acumulación.

### 1. Suma de múltiplos

1. Sumar todos los múltiplos de 3 o 5 menores que n

Entrena: condiciones, filtros


### 2. FizzBuzz clásico

1. Imprimir de 1 a n, pero:

múltiplos de 3 → "Fizz"

múltiplos de 5 → "Buzz"

ambos → "FizzBuzz"

Entrena: lógica condicional, orden de condiciones


### 3. Números felices / cuadrados digitales

Entrena: simulación, bucles, marcado para detectar ciclos
    
    
## N3. Estructuras y simulación

Objetivo: usar estructuras de datos simples para controlar estados
    
### 1. Criba de Eratóstenes

Entrena: marcado, arrays booleanos, eficiencia O(n log log n)


### 2. Búsqueda binaria

Entrena: lógica de búsqueda eficiente, límites y medios


### 3. Sumas acumuladas y ventanas deslizantes

Suma de elementos en ventanas de tamaño k

Entrena: eficiencia O(n), uso de variables móviles


### 4. Cadenas y tokens

Separar palabras, invertir texto, contar tokens

Entrena: slicing, .split(), .join()


## N4. Construcción y combinación de patrones

Objetivo: aplicar técnicas compuestas en problemas más complejos

### 1. Anagramas y palíndromos

Detectar si dos cadenas son anagramas

Comprobar si una cadena es palíndromo

Entrena: conteo, reversa, comparación


### 2. Subconjuntos / combinaciones simples

Generar todos los subconjuntos de una lista pequeña

Entrena: recursión, combinatoria 


### 3. Detección de duplicados

Usar sets para detectar repetidos eficientemente

Entrena: estructura + verificación rápida


## N5 Optimización, estrategia y claridad

Objetivo: resolver problemas no solo funcionalmente, sino claramente y eficientemente

### 1. Simulación por pasos

Un robot que se mueve en una cuadrícula

Entrena: bucles, condiciones, estados


### 2. Validación estructural

Verificar si una expresión tiene paréntesis balanceados

Entrena: stacks, flujo condicional estructurado
    

### 3. Juego piedra, papel o tijera

Entrena: lógica condicional, diccionarios de reglas
    

## Reforzadores cruzados

Algoritmos que podés revisar periódicamente para evaluar tu evolución en claridad, eficiencia y estructura:

Suma de dígitos
Suma de primos
Detectar si una cadena es palíndromo
Criba de Eratóstenes
Búsqueda binaria
Suma de ventanas (sliding window)


# N1. Algoritmos fundamentales

Dominar estructuras de control, operaciones con números y cadenas, conteo, condiciones y bucles simples.

## 1. Números y aritmética

1. Verificar si un número es par o impar

2. Calcular la suma de los primeros n números

3. Contar los múltiplos de 3 o 5 hasta n

4. Sumar todos los dígitos de un número

5. Contar cuántos divisores tiene un número

6. Verificar si un número es primo (versión básica)

7. Obtener el MCD (máximo común divisor) usando el método de restas o Euclides simple

8. Obtener el MCM (mínimo común múltiplo) entre dos números

9. Calcular el factorial de n

10. Convertir un número decimal a binario (versión manual)


## 2. Bucles y condiciones

1. Imprimir los primeros n múltiplos de un número dado

2. Imprimir los números del 1 al 100, pero saltando los que sean múltiplos de 4

3. Detectar si un número es divisible por otro (sin usar if x % y == 0) con lógica invertida

4. Imprimir todos los números del 1 al n en orden inverso

5. Contar cuántos números del 1 al n tienen suma de dígitos mayor a 10


## 3. Cadenas de texto

1. Contar cuántas veces aparece una letra en una cadena

2. Contar vocales y consonantes en una palabra

3. Revertir una cadena sin usar slicing `[::-1]`

4. Detectar si una cadena es palíndromo (sin usar .reverse() ni slicing)

5. Eliminar los espacios en blanco de una cadena

6. Contar cuántas palabras tiene una frase

7. Reemplazar todas las vocales de una cadena por `*`

8. Capitalizar la primera letra de cada palabra manualmente

9. Contar cuántas veces aparece cada letra (frecuencia) usando diccionario


## 4. Listas y lógica elemental

1. Encontrar el mayor número en una lista

2. Encontrar el menor número en una lista

3. Calcular la media (promedio) de una lista de números

4. Contar cuántos números hay mayores a la media

5. Sumar solo los números pares en una lista

6. Crear una nueva lista con los cuadrados de los elementos

7. Invertir una lista sin usar .reverse()

8. Eliminar elementos duplicados de una lista (sin set)

9. Verificar si dos listas tienen elementos en común


## 5. Diccionarios y conteo simple

1. Contar letras en una palabra (crear histograma)

2. Detectar si dos palabras son anagramas simples

3. Crear un diccionario con claves del 1 al n y valores al cuadrado


## 6. Misceláneo

1. FIZZBUZZ clásico (múltiplos de 3 y 5)

2. Determinar si un año es bisiesto

3. Sumar todos los números entre a y b sin usar sum(range(a, b+1))

4. Construir un número al revés (123 → 321)

5. Detectar si un número es capicúa

6. Generar una lista de primos menores a n (versión lenta)


## Evaluación

##### Testealo con al menos 3-5 casos (caso simple, caso borde, caso negativo si aplica).

##### Luego intentá refactorizar: ¿puede hacerse en una línea? ¿es más legible



# Uso de estructuras

Cuándo y por qué usarlas. 

## Array

colección ordenada de elementos, accesibles por índice.

En Python: se usan las listas (list) como arrays.

##### Son contiguos en memoria (en lenguajes como C/C++), lo que permite acceso rápido por posición.


1. Almacenamiento secuencial de datos homogéneos

Ej: Notas de estudiantes, temperaturas diarias, posiciones de píxeles, etc.

Ventaja: acceso directo por índice: `A[i]` → O(1)


2. Implementar una tabla fija

Ej: tabla de multiplicar, puntuaciones de un juego, niveles de usuario

Los arrays permiten usar el índice como clave para representar valores asociados.
    
    
3. Simulación de memoria o registros

Ej: simular RAM, registros de CPU, cintas de máquina de Turing

Se accede a las "celdas" de forma directa y rápida.


4. Criba de Eratóstenes (marcado de primos)

Usás un array booleano donde cada índice representa un número, y el valor indica si es primo (True/False).
    
        
5. Contar frecuencias (Histogramas)

Ej: contar cuántas veces aparece cada letra (conversión de letra a índice)

```
frecuencia = [0] * 26
for letra in palabra:
    frecuencia[ord(letra) - ord('a')] += 1

```

En lugar de diccionarios, un array es más rápido y compacto si el rango es conocido


6. Programación dinámica (DP)

Se usa un array para memorizar subproblemas:
    
```
fib = [0, 1]
for i in range(2, n+1):
    fib.append(fib[i-1] + fib[i-2])

```

El índice representa un estado, y el valor representa una solución parcial.


7. Búsqueda y ordenamiento

Arrays se usan como estructura base en:

Búsqueda lineal, binaria

Ordenamientos (bubble, selection, quicksort, mergesort, etc.)

Permiten modificar elementos en su lugar.
    

8. Ventanas deslizantes (sliding window)

Ej: encontrar suma máxima de k elementos contiguos

Se aprovecha el acceso por posición para mantener ventanas móviles de datos    


9. Simulación de estructuras más complejas

Arrays pueden modelar:

Pilas (con append() y pop())

Colas (con pop(0) o collections.deque)

Grafos (matrices de adyacencia, listas de adyacencia)
        
        
10. Matrices y vectores (2D/ND)

Arrays pueden extenderse a múltiples dimensiones (listas anidadas)
    
```
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

```

Se usan en álgebra lineal, imágenes, simulaciones físicas, etc.


| Característica         | Beneficio                          |
| ---------------------- | ---------------------------------- |
| Acceso por índice      | Muy rápido `O(1)`                  |
| Orden garantizado      | Ideal para algoritmos secuenciales |
| Memoria contigua       | Mejora cache y velocidad (C, C++)  |
| Compatible con slicing | Útil para particionar              |


No usar:

Si necesitás búsqueda por clave → usá dict

Si necesitás inserciones y borrados frecuentes al principio o en medio → usá deque o linked list

Si el tamaño es dinámico y desconocido en tiempo de compilación (en C/C++), preferís estructuras más flexibles


## Linked List

Colección lineal y dinámica de nodos, donde cada nodo contiene:

Un valor (dato)

Un puntero al siguiente nodo (y al anterior, si es doblemente enlazada)


Tipos: 

Simplemente enlazada: cada nodo apunta al siguiente

Doblemente enlazada: cada nodo apunta al siguiente y al anterior

Circular: el último nodo apunta al primero  
   

Motivos: 

A diferencia de arrays:

El tamaño no está fijo.

Insertar/eliminar elementos en el medio es rápido (O(1) si tenés el nodo).

El acceso por posición es lento (O(n)), ya que hay que recorrer nodo a nodo.  


1. Implementar estructuras dinámicas básicas

Stacks y Queues con inserciones/eliminaciones eficientes

No requieren mover elementos como en los arrays

Ej: historial de navegador, deshacer/rehacer en un editor
    
    
2. Sistemas con memoria limitada y fragmentada

Permiten usar bloques no contiguos de memoria

Común en sistemas embebidos, kernels, lenguajes de bajo nivel
    

3. Insertar/eliminar elementos frecuentemente en el medio

Arrays requieren mover elementos (costo O(n)); las linked lists solo cambian punteros (O(1) si tenés el nodo anterior)

Ej: editores de texto, listas de reproducción, buffers
    

4. Representar polinomios o expresiones

Cada término (ej: 3x^2) puede ser un nodo

Permite agregar términos de forma dinámica

    
5. Implementar tablas hash (hash chaining)

Las colisiones en un diccionario hash pueden resolverse con listas enlazadas (encadenamiento)

Cada bucket es una lista de elementos con la misma clave hash
    

6. Modelar secuencias que se recorren en ambas direcciones

Usás listas doblemente enlazadas

Ej: historial de navegación, playlist de música, back/forward
    
            
7. Estructuras de datos más complejas

Árboles binarios → cada nodo tiene 2 punteros

Grafos → nodos con múltiples enlaces

Pila de llamadas o listas libres en gestores de memoria
    

8. Buffers circulares

Implementar estructuras circulares sin usar arrays circulares

Ej: tareas en espera, reproductores multimedia
    

9. Problemas clásicos de algoritmos

Detectar ciclos en listas enlazadas (tortuga y liebre – Floyd)

Revertir una lista enlazada (reverse)

Merge de listas ordenadas (como en Merge Sort)

Eliminar el n-ésimo elemento desde el final    


Arr vs Link

| Acción                | Array (lista en Python) | Linked List                        |
| --------------------- | ----------------------- | ---------------------------------- |
| Acceso por índice     | ✅ Rápido `O(1)`         | ❌ Lento `O(n)`                     |
| Inserción al final    | ✅ `O(1)` (amortizado)   | ✅ `O(1)` si tenés el puntero       |
| Inserción en el medio | ❌ Costosa `O(n)`        | ✅ `O(1)` si tenés el nodo anterior |
| Memoria contigua      | ✅ Sí                    | ❌ No                               |
| Uso en bajo nivel     | ❌ Limitado              | ✅ Común (sistemas, C, C++)         |


No usar:

Si necesitás acceso rápido por posición

Si no necesitás insertar/borrar mucho (un array es más simple)

Si el orden o estructura no cambia frecuentemente


En Python no se usan tanto:

Python no tiene una implementación nativa explícita de LinkedList, pero:

Podés construir una vos mismo con clases.

Usás collections.deque como alternativa rápida a una lista doblemente enlazada.

Internamente, algunas estructuras como dict (desde 3.7) usan listas enlazadas para mantener el orden de inserción.


### Código linked list

1. Simple 

Simple, clara y útil para entender cómo funciona una lista enlazada.

Ideal para practicar nodos, punteros, y operaciones básicas.

```
class Nodo:
    def __init__(self, valor):
        self.valor = valor
        self.siguiente = None

class LinkedList:
    def __init__(self):
        self.cabeza = None  # primer nodo

    def agregar_al_final(self, valor):
        nuevo = Nodo(valor)
        if not self.cabeza:
            self.cabeza = nuevo
            return
        actual = self.cabeza
        while actual.siguiente:
            actual = actual.siguiente
        actual.siguiente = nuevo

    def imprimir(self):
        actual = self.cabeza
        while actual:
            print(actual.valor, end=" → ")
            actual = actual.siguiente
        print("None")

```

Ej: 

```
lista = LinkedList()
lista.agregar_al_final(10)
lista.agregar_al_final(20)
lista.agregar_al_final(30)
lista.imprimir()
# Salida: 10 → 20 → 30 → None

```



2. Optimizada

Evita recorrer toda la lista para agregar al final (O(1) en vez de O(n))

Incluye operaciones extra como eliminar, insertar al inicio, buscar

```
class Nodo:
    def __init__(self, valor):
        self.valor = valor
        self.siguiente = None

class LinkedList:
    def __init__(self):
        self.cabeza = None
        self.cola = None  # referencia al último nodo
        self.longitud = 0

    def agregar_al_final(self, valor):
        nuevo = Nodo(valor)
        if not self.cabeza:
            self.cabeza = self.cola = nuevo
        else:
            self.cola.siguiente = nuevo
            self.cola = nuevo
        self.longitud += 1

    def agregar_al_inicio(self, valor):
        nuevo = Nodo(valor)
        nuevo.siguiente = self.cabeza
        self.cabeza = nuevo
        if self.longitud == 0:
            self.cola = nuevo
        self.longitud += 1

    def eliminar_primero(self):
        if not self.cabeza:
            return None
        eliminado = self.cabeza
        self.cabeza = self.cabeza.siguiente
        self.longitud -= 1
        if self.longitud == 0:
            self.cola = None
        return eliminado.valor

    def buscar(self, valor):
        actual = self.cabeza
        while actual:
            if actual.valor == valor:
                return True
            actual = actual.siguiente
        return False

    def imprimir(self):
        actual = self.cabeza
        while actual:
            print(actual.valor, end=" → ")
            actual = actual.siguiente
        print("None")

```

Ej: 

```
ll = LinkedList()
ll.agregar_al_final(5)
ll.agregar_al_final(10)
ll.agregar_al_inicio(1)
ll.imprimir()
# 1 → 5 → 10 → None
print("Eliminado:", ll.eliminar_primero())
ll.imprimir()
# 5 → 10 → None
print("¿Existe 10?", ll.buscar(10))  # True

```

### Claves

1. Clase Nodo

```
class Nodo:
    def __init__(self, valor):
        self.valor = valor
        self.siguiente = None

```

Objetivo: Representa cada elemento de la lista.

valor: es el dato que guarda el nodo (por ejemplo, un número).

siguiente: apunta al próximo nodo en la lista (o a None si es el último).


2. Clase LinkedList

```
class LinkedList:
    def __init__(self):
        self.cabeza = None

```

self.cabeza es el primer nodo de la lista (o None si la lista está vacía).


3. Método agregar_al_final(self, valor)

```
nuevo = Nodo(valor)

```

Crea un nuevo nodo con el valor dado.

```
if not self.cabeza:
    self.cabeza = nuevo
    return

```

Si la lista está vacía (cabeza es None), simplemente el nuevo nodo se convierte en la cabeza.

Termina ahí la función (return).


```
actual = self.cabeza
while actual.siguiente:
    actual = actual.siguiente

```

Si la lista ya tiene elementos:

Comienza desde la cabeza.

Recorre los nodos uno a uno hasta encontrar el último (actual.siguiente == None).
    

```
actual.siguiente = nuevo

```

Una vez encontrado el último nodo, le conectamos el nuevo nodo.


4. Método imprimir

```
actual = self.cabeza
while actual:
    print(actual.valor, end=" → ")
    actual = actual.siguiente
print("None")

```

Empieza desde la cabeza.

Recorre todos los nodos:
Imprime su valor.
Se mueve al siguiente con actual = actual.siguiente.

Termina imprimiendo None (indicando que no hay más nodos).


Ej: 

```
lista = LinkedList()
lista.agregar_al_final(10)
lista.agregar_al_final(20)
lista.agregar_al_final(30)
lista.imprimir()

```

Out:

```
10 → 20 → 30 → None

```

Visual:

Supongamos que agregamos 10, 20, 30:

```
self.cabeza
   ↓
[Nodo(10)] → [Nodo(20)] → [Nodo(30)] → None

```

Cada nodo tiene:

un valor

un puntero a siguiente


### Producción

No implementás Linked List desde cero. Usás estructuras ya existentes como:

collections.deque (doblemente enlazada)

list (si no necesitás muchas inserciones internas)


## Stack 

Estructura de datos LIFO:

Last In, First Out → El último elemento en entrar es el primero en salir.


Operaciones básicas:

push(x) → Agrega un elemento al tope

pop() → Elimina y devuelve el elemento en el tope

peek() / top() → Muestra el tope sin quitarlo

is_empty() → Verifica si está vacía


1. Reversión de datos

Invertir una palabra, una lista, una secuencia de pasos

Empujás elementos con push, los sacás con pop → se invierte el orden
    

2. Evaluación de expresiones matemáticas

Notación posfija (postfix) / prefija (prefix)

Evaluar 3 4 + 5 * requiere un stack de operandos

También útil para convertir de infija a posfija


3. Validación de paréntesis balanceados

Para strings como `(({}[]))`

Apilás cada paréntesis abierto y los cerrás correctamente

Se usa mucho en compiladores, editores de código


4. Undo/Redo en editores

Cada acción se apila como una operación

Undo → pop() de la pila de acciones

Redo → se guarda en otra pila secundaria


5. Llamadas a funciones (call stack)

Cada vez que se llama una función, se agrega al stack de ejecución

Al retornar, se elimina

Es como el rastro de ejecución del programa
    

6. Recursión simulada

Lenguajes que no soportan recursión directa (o querés evitarla)

Simulás el call stack manualmente con una pila


7. Búsqueda en profundidad (DFS)

Algoritmo de búsqueda en grafos/arboles

DFS puede implementarse con recursión o con un stack explícito
    

8. Backtracking

Ej: resolver un laberinto, sudoku, generador de combinaciones

Vas probando opciones y deshaciendo cuando no funciona

Ideal para almacenar caminos parciales


9. Análisis de sintaxis en compiladores

Stack de tokens o símbolos

Reconocimiento de gramáticas (autómatas de pila)
    

10. Intercambio de variables sin variables temporales

Usando una pila, podés revertir o intercambiar elementos sin variables adicionales


Utilidad:

| Ventaja                              | Explicación                               |
| ------------------------------------ | ----------------------------------------- |
| Simula el flujo natural de ejecución | Último que entra, primero que se resuelve |
| Fácil de implementar                 | Con lista en Python (`append`, `pop`)     |
| Muy usado en algoritmos              | DFS, backtracking, parsing, recursión     |
| Control de estados                   | Ideal para algoritmos que vuelven atrás   |


No usar:

Si necesitás acceso aleatorio `A[i]` → mejor un array

Si el orden no es importante

Si necesitás recorrer ambos sentidos (mejor deque o lista)


En python: 

List: 

```
stack = []
stack.append(1)   # push
x = stack.pop()   # pop

```


collections.deque

Más rápido y seguro:

```
from collections import deque

stack = deque()
stack.append(1)
x = stack.pop()

```


Ejemplos típicos para practicar: 

Validar `()[]{}` correctamente balanceado

Evaluar una expresión postfija: `3 4 + 2 *`

Revertir una cadena usando stack

DFS no recursivo

Resolver una torre de Hanoi simulada


### Código

1. Simple

```
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)  # Agrega al final

    def pop(self):
        if not self.is_empty():
            return self.items.pop()  # Elimina el último
        return None

    def peek(self):
        if not self.is_empty():
            return self.items[-1]  # Muestra el último
        return None

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)

```

Ej: 

```
pila = Stack()
pila.push(10)
pila.push(20)
print(pila.peek())   # 20
print(pila.pop())    # 20
print(pila.pop())    # 10
print(pila.is_empty())  # True

```


2. Eficiente:

Python tiene una estructura optimizada en collections llamada deque que funciona como doble stack/cola, con rendimiento O(1) en ambos extremos.

```
from collections import deque

class Stack:
    def __init__(self):
        self.items = deque()

    def push(self, item):
        self.items.append(item)  # O(1)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()  # O(1)
        return None

    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        return None

    def is_empty(self):
        return not self.items

    def size(self):
        return len(self.items)

```

Ej: 

```
stack = Stack()
stack.push("a")
stack.push("b")
print(stack.pop())   # b
print(stack.peek())  # a

```


### Claves

1. Constructor init

```
def __init__(self):
    self.items = []

```

Se ejecuta cuando se crea una instancia de Stack.

Inicializa una lista vacía, donde se guardarán los elementos de la pila.


2. Método push(self, item)

```
def push(self, item):
    self.items.append(item)

```

Agrega un elemento al final de la lista.

Este elemento es el último en entrar → se convertirá en el primero en salir (LIFO).


Ej:

```
s = Stack()
s.push(10)
s.push(20)

```

Ahora items vale: `[10, 20]`


3. Método pop(self):

```
def pop(self):
    if not self.is_empty():
        return self.items.pop()
    return None

```

Elimina y devuelve el último elemento insertado.

Si la pila está vacía, devuelve None.

pop() de listas en Python elimina el último elemento, por eso es perfecto para Stack.

Con items = `[10, 20]`, hacer pop() devuelve 20 y deja `[10]`.


4. Método peek(self)

```
def peek(self):
    if not self.is_empty():
        return self.items[-1]
    return None

```

Devuelve el último elemento insertado sin eliminarlo.

`self.items[-1]` accede al último elemento de la lista.

Si está vacía, devuelve None

Con `items = [10, 20]`, peek() da 20, pero items no cambia.


5. Método is_empty(self):

```
def is_empty(self):
    return len(self.items) == 0

```

Retorna True si la pila está vacía, False si tiene elementos.

`[10, 20] → False, [] → True`.


6. Método size(self)

```
def size(self):
    return len(self.items)

```

Devuelve cuántos elementos hay actualmente en la pila.


Ej:

```
s = Stack()
s.push(5)
s.push(10)
print(s.peek())     # 10
print(s.pop())      # 10
print(s.size())     # 1
print(s.is_empty()) # False
print(s.pop())      # 5
print(s.is_empty()) # True

```


Visualización:

Después de push(5) y push(10):

```
Base     ← [5, 10] ← Tope

```

Después de pop():

```
Base     ← [5] ← Tope

```


### deque

Python tiene una estructura deque (double-ended queue) que permite:

Añadir y quitar elementos desde ambos extremos en tiempo constante O(1).

A diferencia de una lista (list), donde hacer .pop(0) o .insert(0, x) puede costar O(n).
    
```
from collections import deque

class Stack:
    def __init__(self):
        self.items = deque()

    def push(self, item):
        self.items.append(item)  # O(1)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()  # O(1)
        return None

    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        return None

    def is_empty(self):
        return not self.items

    def size(self):
        return len(self.items)

```


1. from collections import deque

Importamos deque (cola doblemente terminada), una estructura optimizada para inserciones y extracciones en ambos extremos.


2. init

```
def __init__(self):
    self.items = deque()

```    

Se crea un contenedor vacío deque llamado items.

Este deque actuará como nuestra pila.


3. push(self, item)

```
def push(self, item):
    self.items.append(item)

```

Agrega un elemento al final del deque.

Esta operación tiene tiempo constante O(1).


4. pop(self)

```
def pop(self):
    if not self.is_empty():
        return self.items.pop()
    return None

```

Elimina y retorna el último elemento (el tope de la pila).

Si la pila está vacía, devuelve None.

.pop() en deque es O(1), a diferencia de .pop(0) que es más costoso.


5. peek(self)

```
def peek(self):
    if not self.is_empty():
        return self.items[-1]
    return None

```

Retorna el último elemento sin removerlo.

`self.items[-1]` accede al tope de la pila.


6. is_empty(self)

```
def is_empty(self):
    return not self.items

```

Retorna True si la pila está vacía (deque vacío es falsy), False si hay elementos.


7. size(self)

```
def size(self):
    return len(self.items)

```

Devuelve cuántos elementos hay actualmente en la pila.


Ej: 

```
pila = Stack()
pila.push("a")
pila.push("b")
print(pila.peek())    # "b"
print(pila.pop())     # "b"
print(pila.pop())     # "a"
print(pila.is_empty()) # True

```

vs. List:

| Operación        | `list` | `deque`                 |
| ---------------- | ------ | ----------------------- |
| `.append(x)`     | O(1)   | O(1)                    |
| `.pop()`         | O(1)   | O(1)                    |
| `.pop(0)`        | ❌ O(n) | ✅ O(1) con `.popleft()` |
| Ideal para Stack | ✅      | ✅ (más eficiente)       |


## Queue

Estructura de datos FIFO:

First In, First Out → El primer elemento en entrar es el primero en salir.


Operaciones típicas:

enqueue(x) → agrega al final

dequeue() → elimina y devuelve el primer elemento

peek() → ve el primero sin quitarlo

is_empty() → verifica si está vacía

    
1. Sistemas de espera (colas reales)

Turnos en un banco, impresoras, pedidos en línea

El primero en llegar es el primero en ser atendido


2. Gestión de tareas (job scheduling)

Planificadores de procesos en sistemas operativos

Cada tarea espera su turno en la cola


3. Simulación de tráfico, eventos, procesos

Modelar la llegada de autos a una intersección

Procesamiento de eventos en simulaciones


4. Recorrido en amplitud (BFS)

Algoritmo de grafos para encontrar el camino más corto

Se visitan los nodos por niveles, en orden


```

from collections import deque

queue = deque([inicio])
while queue:
    nodo = queue.popleft()
    for vecino in grafo[nodo]:
        queue.append(vecino)

```


5. Buffers de datos (streaming o en red)

Transmisión de datos en paquetes que deben procesarse en orden

Reproductores de video/audio
    

6. Cola de mensajes (message queues)

Comunicación entre procesos o entre servicios

Ej: RabbitMQ, Kafka → cada mensaje espera su procesamiento


7. Intercalado o turnos (round-robin)

Reparto de CPU entre procesos en partes iguales

Cada uno se reubica al final de la cola después de su turno
    
    
8. Nivel por nivel en árboles binarios

Imprimir árbol binario por niveles (level-order traversal)

Usa una cola para recordar los nodos hijos por visitar


9. Procesamiento por lotes

Ej: una aplicación procesa 5 usuarios por vez

Los datos entran a una cola y se consumen por grupos
    

10. Modelado de problemas de propagación

Ej: propagación de una infección, difusión de información

Se simula como una ola de eventos que se expande desde un origen
    

Uso de queue:

| Ventaja                       | Explicación                         |
| ----------------------------- | ----------------------------------- |
| Orden natural y justo         | Primero en entrar, primero en salir |
| Modela procesos reales        | Espera, turnos, transmisiones       |
| Facilita búsquedas amplias    | BFS, propagación                    |
| Funciona bien en simulaciones | Control de flujo y temporización    |


En Python: 

collections.deque (la opción recomendada)    
        
```
from collections import deque

queue = deque()
queue.append('A')       # enqueue
x = queue.popleft()     # dequeue

```

Eficiente en ambos extremos (O(1)), sin copias


Listas (list) – menos eficiente:

```
queue = []
queue.append('A')
x = queue.pop(0)  # ❌ lento → O(n)

```

Usa .pop(0) pero es ineficiente porque desplaza todos los elementos.


Ejemplos clásicos para practicar

Simular una fila de espera con enqueue/dequeue

Recorrido en amplitud (BFS) de un grafo o árbol

Contador de turnos (números consecutivos)

Gestión de procesos en orden de llegada

Simulación: cola del supermercado o entrada de autos en peaje


No usar:

Si necesitás acceso aleatorio a los elementos

Si los elementos se deben ordenar por prioridad (usá priority queue)

Si necesitás recorrer en ambas direcciones (mejor deque)


Variaciones: 

| Tipo de cola     | Descripción                              |
| ---------------- | ---------------------------------------- |
| `deque`          | Doble cola (doble extremo, más flexible) |
| `priority queue` | Sale el elemento con **menor prioridad** |
| `circular queue` | Se reutiliza el espacio de la cola       |
| `bounded queue`  | Cola con capacidad fija                  |


### Código

1. Simple

```
class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.append(item)  # Agrega al final

    def dequeue(self):
        if not self.is_empty():
            return self.items.pop(0)  # Quita el primero (costo alto)
        return None

    def peek(self):
        if not self.is_empty():
            return self.items[0]  # Mira el primero
        return None

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)

```

```
cola = Queue()
cola.enqueue("A")
cola.enqueue("B")
print(cola.dequeue())  # A
print(cola.peek())     # B
print(cola.is_empty()) # False

```

pop(0) tiene complejidad O(n) porque los elementos se deben reacomodar.


2. Eficiente

deque de collections está optimizado para inserciones y eliminaciones eficientes en ambos extremos (O(1)).

```
from collections import deque

class Queue:
    def __init__(self):
        self.items = deque()

    def enqueue(self, item):
        self.items.append(item)  # Agrega al final

    def dequeue(self):
        if not self.is_empty():
            return self.items.popleft()  # Elimina el primero
        return None

    def peek(self):
        if not self.is_empty():
            return self.items[0]
        return None

    def is_empty(self):
        return not self.items

    def size(self):
        return len(self.items)

```

Ej: 

```
q = Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
print(q.dequeue())  # 1
print(q.peek())     # 2

```


## Dict / Hash table 

Estructura de datos de mapeo, que almacena pares clave → valor.

Funciona como una tabla hash: las claves son únicas, y el acceso es extremadamente rápido (O(1) promedio).

```
persona = {"nombre": "Bob", "edad": 30}

```

uso:

| Ventaja          | Explicación                                                |
| ---------------- | ---------------------------------------------------------- |
| Acceso por clave | Rápido, intuitivo y directo `dict[key]`                |
| Muy expresivo    | Podés mapear ideas reales (ID → datos, letra → frecuencia) |
| Flexible         | Soporta muchos tipos de valores, claves inmutables         |
| Escalable        | Se comporta bien incluso con millones de elementos         |


1. Mapeo clave → valor (ID → info)

Alumnos: {"123": "Ana", "124": "Pedro"}

Productos: {"SKU01": {"nombre": "pan", "precio": 3.5}}

Traductores: {"hello": "hola"}


2. Contar frecuencias (histogramas)

```
texto = "banana"
conteo = {}
for letra in texto:
    conteo[letra] = conteo.get(letra, 0) + 1
# {'b': 1, 'a': 3, 'n': 2}

```

Se usa en:

Conteo de letras o palabras

Problemas de anagramas

Detección de duplicados

Análisis de datos (palabras más frecuentes, etc.)


3. Verificación rápida de existencia

```
if "clave" in diccionario:
    ...

```

Mucho más rápido que buscar en listas

Ideal para validaciones, filtros, restricciones


4. Agrupamiento por categoría

```
grupos = {}
for persona in personas:
    pais = persona["pais"]
    grupos.setdefault(pais, []).append(persona)

```

Agrupás por clave común (país, edad, letra inicial, etc.)

Muy útil para clasificar datos


5. Simulación de sets con conteo

```
apariciones = {}
for num in lista:
    apariciones[num] = apariciones.get(num, 0) + 1

```

Para saber cuántas veces viste algo

También se usa para encontrar elementos únicos, duplicados, etc.


6. Memorización (memoization) / cache

```
memo = {}
def fib(n):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib(n-1) + fib(n-2)
    return memo[n]

```

Guarda resultados parciales

Usado en programación dinámica, recursión optimizada


7. Codificación / decodificación (clave → valor y viceversa)

```
morse = { 'A': '.-', 'B': '-...', 'C': '-.-.' }

```

Codificadores, reemplazos de símbolos, etc.

Incluso podés crear un diccionario inverso para decodificar


8. Grafos: representación como listas de adyacencia

```
grafo = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A"],
    "D": ["B"]
}

```

Diccionario de listas

Base para algoritmos como BFS, DFS, Dijkstra, etc.


9. Tracking de estados de elementos

Visitados en grafos `visitados[nodo] = True`

Vistos en validaciones `visto[val] = True`

Estados en juegos estado `["jugador1"] = "en turno`


10. Datos tabulados con claves compuestas

```
matriz = {}
matriz[(fila, columna)] = valor

```

Simula una matriz dispersa (sparse matrix)

Útil en juegos de tablero, álgebra lineal, simulaciones


Tipos especiales relacionados:

defaultdict (de collections) → valores por defecto automáticos

OrderedDict → mantiene orden de inserción (hoy dict ya lo hace desde Python 3.7+)

Counter → conteo automático de elementos

ChainMap → combina varios diccionarios

dict comprehension → forma compacta de crear diccionarios


No usar:

Si necesitás mantener elementos ordenados por clave → usá SortedDict (via sortedcontainers)

Si necesitás recorrer por posición → mejor una lista o array

Si las claves son cambiantes o no hashables (como listas o dicts) → no son válidas como claves


Ejercicios clásicos:

Contar letras en un texto

Detectar si dos cadenas son anagramas

Agrupar palabras por su longitud

Crear un diccionario de cuadrado de números del 1 al 10

Simular un mapa de traducción (por ejemplo, números en distintos idiomas)

Usar memoización para calcular Fibonacci de forma eficiente 


### Claves

1. init

```
def __init__(self):
    self.items = []

```

Se ejecuta al crear una instancia de Queue.

Crea una lista vacía items, donde se guardarán los elementos de la cola.


2. enqueue: agregar un elemento al final

```
def enqueue(self, item):
    self.items.append(item)

```

Agrega item al final de la lista con .append().

Simula el ingreso a la cola (último en entrar, último en salir)


Ej: 

```
q.enqueue("A")
q.enqueue("B")

```

Se ve: 

`["A", "B"]`


3. dequeue: quitar el primer elemento (el que "esperó más")

```
def dequeue(self):
    if not self.is_empty():
        return self.items.pop(0)
    return None

```

Verifica si la cola no está vacía.

Si hay elementos, quita y devuelve el primero (self.items[0]) usando .pop(0).

Si está vacía, devuelve None.


Con `["A", "B", "C"] → dequeue()` devuelve "A" y la lista queda: `["B", "C"]`

Costo alto (O(n)): al quitar el primero, todos los elementos se deben mover una posición a la izquierda.


4. peek: mirar el primero sin quitarlo

```
def peek(self):
    if not self.is_empty():
        return self.items[0]
    return None

```

Retorna el primer elemento de la cola sin eliminarlo.

Si la cola está vacía, devuelve None.


5. is_empty: verificar si está vacía

```
def is_empty(self):
    return len(self.items) == 0

```
Devuelve True si la cola no tiene elementos.

Equivalente a `self.items == []`.


6. size: cantidad de elementos en la cola

```
def size(self):
    return len(self.items)

```

Devuelve cuántos elementos hay actualmente en la cola.


Ej:

```
q = Queue()
q.enqueue("A")
q.enqueue("B")
print(q.peek())      # A
print(q.dequeue())   # A
print(q.dequeue())   # B
print(q.is_empty())  # True

```

Limitaciones de esta implementación

.pop(0) tiene costo O(n) porque debe mover todos los elementos.

Para una cola con muchas operaciones, conviene usar deque (más eficiente).


## Tree

Fundamentales para resolver una enorme variedad de problemas donde los datos tienen jerarquía, dependencia o ramificación


Un árbol es una estructura de datos jerárquica donde:

Hay un nodo raíz (root).

Cada nodo puede tener hijos.

No hay ciclos: un nodo no puede ser su propio ancestro.


Los árboles son como versiones generalizadas de listas o grafos con reglas más estrictas.


Tipos: 

Árbol binario → cada nodo tiene como máximo 2 hijos.

Árbol binario de búsqueda (BST) → hijos izquierdos < nodo < hijos derechos.

Heap → árbol donde los padres son mayores (max-heap) o menores (min-heap) que los hijos.

Trie → árbol especializado para palabras/prefijos.

Árbol N-ario → cada nodo puede tener N hijos.

Árbol de sintaxis (AST) → para representar expresiones o código fuente.


1. Representar jerarquías o estructuras anidadas

Organigramas de empresas

Sistema de archivos (directorios y subdirectorios)

DOM en HTML (árbol de elementos)

Árboles de decisiones


Árboles son naturales para mostrar relaciones padre → hijo.


2. Búsquedas eficientes con árboles binarios (BST)

Insertar, buscar, eliminar elementos en O(log n) si está balanceado

Ideal cuando necesitás mantener orden y acceder rápido
    
    
3. Heaps → estructuras para prioridades

Se usan en:

Colas de prioridad

Algoritmo de Dijkstra

Heap Sort

El acceso al mínimo o máximo es O(1) y la inserción/eliminación es O(log n)


4. Autocompletado / búsqueda por prefijo → Trie

Usado en editores, motores de búsqueda, correctores ortográficos

Representa palabras como ramas de un árbol

Búsqueda y sugerencias rápidas en grandes diccionarios


5. Expresiones matemáticas → Árbol de sintaxis (AST)

Parsear expresiones como 3 + (4 * 5)

Cada operador es un nodo y sus operandos son hijos

Base para compiladores, intérpretes y evaluadores


6. Recorridos estructurados

Recorridos en:

preorden (visito nodo → luego hijos)

inorden (izquierda → nodo → derecha)

postorden (hijos → luego nodo)

nivel por nivel (BFS)


Sirve para aplicar acciones en orden específico: sumar nodos, imprimir, evaluar, etc



7. Juegos y backtracking

Árbol de decisiones para IA

Cada nodo representa un estado del juego


Ideal para:

Minimax (ajedrez, tic-tac-toe)

Búsquedas exhaustivas


8. Compresión de datos → Árbol de Huffman

Cada símbolo tiene un camino codificado en el árbol

Se usa en compresión como ZIP, JPEG, MP3


9. Base para índices en bases de datos → B-Trees, B+ Trees

Árboles balanceados especializados para almacenar y buscar en disco

Soportan millones de registros con gran eficiencia


10. Versionado y estructuras persistentes

Git usa árboles para representar snapshots del proyecto

Cada commit es un nodo que apunta a versiones anteriores (estructura DAG)


Ventajas: 

| Característica         | Beneficio                                              |
| ---------------------- | ------------------------------------------------------ |
| Representa jerarquías  | Intuitivo para modelar dependencia y estructura        |
| Eficiencia en búsqueda | BSTs, heaps, tries permiten búsquedas rápidas          |
| Flexibilidad           | Soporta múltiples tipos (ordenados, balanceados, etc.) |
| Escalable              | Bien adaptado a grandes volúmenes de datos organizados |



No usar:

Si no hay estructura jerárquica o no se necesita orden

Si el acceso por índice es clave (arrays o listas son mejores)

Si solo se requiere mapear clave-valor → usá dict o hashmap


En Python: 

Python no tiene árboles integrados, pero podés implementarlos con clases fácilmente:

```
class Nodo:
    def __init__(self, valor):
        self.valor = valor
        self.izq = None
        self.der = None

```

También podés usar anytree, binarytree, o librerías como networkx para árboles más complejos o gráficos


Ejercicios:

Crear un árbol binario manualmente y recorrerlo (pre, in, post)

Insertar valores en un BST y buscar

Contar nodos y hojas

Calcular la altura del árbol

Verificar si es balanceado

Construir un árbol a partir de una lista de palabras (Trie)

Expresión matemática → convertir a árbol y evaluarla

Árbol de Huffman para comprimir un texto


### Código

Estructura jerárquica donde cada nodo tiene hasta dos hijos:

uno izquierdo (izq) y uno derecho (der).


1. Simple

```
class Nodo:
    def __init__(self, valor):
        self.valor = valor
        self.izq = None
        self.der = None

def imprimir_preorden(nodo):
    if nodo:
        print(nodo.valor)
        imprimir_preorden(nodo.izq)
        imprimir_preorden(nodo.der)

```


Ej: 

```
# Creamos un árbol manualmente
raiz = Nodo(10)
raiz.izq = Nodo(5)
raiz.der = Nodo(15)
raiz.izq.izq = Nodo(2)

# Imprimimos en preorden (raíz → izq → der)
imprimir_preorden(raiz)
# Salida: 10, 5, 2, 15

```


2. Eficiente

Tiene una clase BinaryTree para encapsular operaciones

Permite insertar automáticamente siguiendo reglas de árbol binario de búsqueda (BST)

```
class Nodo:
    def __init__(self, valor):
        self.valor = valor
        self.izq = None
        self.der = None

class BinaryTree:
    def __init__(self):
        self.raiz = None

    def insertar(self, valor):
        if not self.raiz:
            self.raiz = Nodo(valor)
        else:
            self._insertar_recursivo(self.raiz, valor)

    def _insertar_recursivo(self, nodo, valor):
        if valor < nodo.valor:
            if nodo.izq:
                self._insertar_recursivo(nodo.izq, valor)
            else:
                nodo.izq = Nodo(valor)
        else:
            if nodo.der:
                self._insertar_recursivo(nodo.der, valor)
            else:
                nodo.der = Nodo(valor)

    def buscar(self, valor):
        return self._buscar_recursivo(self.raiz, valor)

    def _buscar_recursivo(self, nodo, valor):
        if not nodo:
            return False
        if valor == nodo.valor:
            return True
        if valor < nodo.valor:
            return self._buscar_recursivo(nodo.izq, valor)
        return self._buscar_recursivo(nodo.der, valor)

    def preorden(self, nodo=None):
        if nodo is None:
            nodo = self.raiz
        if nodo:
            print(nodo.valor, end=" ")
            self.preorden(nodo.izq)
            self.preorden(nodo.der)

```

Ej: 

```
bt = BinaryTree()
bt.insertar(10)
bt.insertar(5)
bt.insertar(15)
bt.insertar(7)
bt.preorden()  # 10 5 7 15
print(bt.buscar(7))   # True
print(bt.buscar(3))   # False

```


Tipos de recorridos clásicos

| Tipo      | Orden                           |
| --------- | ------------------------------- |
| Preorden  | raíz → izq → der                |
| Inorden   | izq → raíz → der (BST ordenado) |
| Postorden | izq → der → raíz                |
| Nivel     | de arriba hacia abajo (BFS)     |


### Claves

1. Estructura general:

```
class Nodo:
    def __init__(self, valor):
        self.valor = valor
        self.izq = None
        self.der = None

```

Clase que representa cada nodo del árbol.

valor: el dato que contiene.

izq: hijo izquierdo (menor valor).

der: hijo derecho (mayor valor).


2. Clase BinaryTree

```
class BinaryTree:
    def __init__(self):
        self.raiz = None

```

Crea un árbol vacío.

self.raiz es el nodo raíz (el primero en insertarse).


3. Método insertar

```
def insertar(self, valor):
    if not self.raiz:
        self.raiz = Nodo(valor)
    else:
        self._insertar_recursivo(self.raiz, valor)

```

Si el árbol está vacío, el nuevo valor se convierte en la raíz.

Si ya hay una raíz, delega en `_insertar_recursivo`.


4. Método auxiliar `_insertar_recursivo`

```
def _insertar_recursivo(self, nodo, valor):
    if valor < nodo.valor:
        if nodo.izq:
            self._insertar_recursivo(nodo.izq, valor)
        else:
            nodo.izq = Nodo(valor)
    else:
        if nodo.der:
            self._insertar_recursivo(nodo.der, valor)
        else:
            nodo.der = Nodo(valor)

```

Decide si el valor va a la izquierda o derecha:
Si es menor que el nodo actual → va a la izquierda.
Si es mayor o igual → va a la derecha.

Si hay un hijo en esa dirección, sigue recursivamente.

Si no hay, crea un nuevo nodo y lo conecta.


Ej: 

Insertar: 10, 5, 15, 7

```
Primero 10:
- raiz = Nodo(10)

Luego 5:
- 5 < 10 → va a la izquierda

Luego 15:
- 15 > 10 → va a la derecha

Luego 7:
- 7 < 10 → izq
- 7 > 5 → der de 5

```

Resultado:

```
       10
      /  \
     5   15
      \
       7

```


5. Método buscar

```
def buscar(self, valor):
    return self._buscar_recursivo(self.raiz, valor)

```

Inicia la búsqueda desde la raíz.


6. Método auxiliar _buscar_recursivo

```
def _buscar_recursivo(self, nodo, valor):
    if not nodo:
        return False
    if valor == nodo.valor:
        return True
    if valor < nodo.valor:
        return self._buscar_recursivo(nodo.izq, valor)
    return self._buscar_recursivo(nodo.der, valor)

```

Si el nodo es None, el valor no está.

Si el valor es igual al nodo actual → lo encontró → True.

Si es menor → busca a la izquierda.

Si es mayor → busca a la derecha.


7. Método preorden

```

def preorden(self, nodo=None):
    if nodo is None:
        nodo = self.raiz
    if nodo:
        print(nodo.valor, end=" ")
        self.preorden(nodo.izq)
        self.preorden(nodo.der)

```

Recorre el árbol en preorden:
→ Raíz → Izquierda → Derecha


Resultado:

```
       10
      /  \
     5   15
      \
       7

```

El preorden será:

```
10 5 7 15

```


Ej: 

```

bt = BinaryTree()
bt.insertar(10)
bt.insertar(5)
bt.insertar(15)
bt.insertar(7)

bt.preorden()       # 10 5 7 15
print(bt.buscar(7)) # True
print(bt.buscar(3)) # False

```

Rs: 

Árbol binario de búsqueda → ordenado

Inserción y búsqueda en promedio: O(log n)

Recorrido en preorden útil para copiar árboles o evaluaciones




## Graph

Conjunto de nodos (vértices) conectados por aristas (edges).

Nodo (vértice): una entidad individual (ciudad, persona, estado, etc.)

Arista (edge): conexión entre nodos (camino, relación, transición, etc.)


Tipos: 

| Tipo                             | Descripción                                                      |
| -------------------------------- | ---------------------------------------------------------------- |
| **No dirigido**                  | Las conexiones no tienen dirección (A—B)                         |
| **Dirigido (digraph)**           | Las aristas tienen dirección (A → B)                             |
| **Ponderado**                    | Las aristas tienen pesos o costos (A→B: 5)                       |
| **Cíclico / Acíclico**           | Puede o no tener ciclos                                          |
| **Conectado / Disconexo**        | Todos los nodos están unidos (o no)                              |
| **DAG** (Directed Acyclic Graph) | Grafo dirigido y sin ciclos (muy común en tareas o dependencias) |


1. Redes (sociales, de transporte, de datos)

Facebook: personas como nodos, amistades como aristas

Google Maps: ciudades como nodos, rutas como aristas con pesos (distancias)

Internet: nodos = servidores, aristas = conexiones


2. Modelar relaciones y dependencias

Prerrequisitos académicos

Dependencias de paquetes (npm, pip, apt)

Proyectos con tareas que dependen de otras → DAG


3. Búsqueda de caminos

Encontrar el camino más corto (Dijkstra, BFS)

Todas las rutas posibles entre dos nodos

Camino mínimo con costos


4. Planificación de tareas (topological sort)

Ordenar tareas con dependencias

Ej: compilar módulos de un proyecto, resolver tareas con bloqueos


5. Flujo de redes (max-flow)

Problemas como:

Máximo tráfico entre nodos

Flujo de líquidos o datos en una red

Asignación de recursos


6. Rutas óptimas y algoritmos de navegación

GPS: encontrar la ruta más corta o más rápida

Itinerarios entre ciudades

NPC pathfinding en juegos
    
    
7. Detección de ciclos o componentes fuertemente conectados

Verificar si hay bucles (ciclos) en dependencias o rutas

Detectar subgrupos conectados entre sí
    
    
8. Modelar juegos o autómatas

Cada estado del juego es un nodo

Transiciones como aristas

Útil para IA, controladores de juego, autómatas finitos


9. Propagación y difusión

Epidemias, rumores, información viral

Simulás cómo algo se mueve a través de nodos conectados
    

10. Simulación de mapas, laberintos y circuitos

Cada celda o componente es un nodo

Las conexiones posibles son aristas

Útil en IA, algoritmos de maze solving
    

Ventajas:

| Característica       | Beneficio                                        |
| -------------------- | ------------------------------------------------ |
| Modela relaciones    | Entre entidades reales                           |
| Alta expresividad    | Permite representar muchas estructuras distintas |
| Algoritmos poderosos | BFS, DFS, Dijkstra, Kruskal, Prim, etc.          |


No usar:

Si los datos no tienen conexiones o relaciones

Si se puede usar una lista, array, dict, set más simple

Si no necesitás analizar caminos, relaciones, conectividad o ciclos
 

Representaciones de grafos

1. Lista de adyacencia (recomendada)

```
grafo = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A'],
    'D': ['B']
}

```
    
Eficiente en espacio

Muy usada para grafos esparcidos


Matriz de adyacencia

```
# A B C D
# A: 0 1 1 0
# B: 1 0 0 1

```

Útil cuando el grafo es denso

Acceso constante a `grafo[u][v]`


Lista de aristas

```
edges = [('A', 'B'), ('A', 'C'), ('B', 'D')]

```

Simple para grafos dirigidos o cuando se almacenan pesos


Algoritmos clásicos:

| Algoritmo             | Propósito                                        |
| --------------------- | ------------------------------------------------ |
| **DFS / BFS**         | Recorridos, búsqueda de nodos                    |
| **Dijkstra**          | Camino más corto desde un nodo (pesos positivos) |
| **Bellman-Ford**      | Camino más corto (permite pesos negativos)       |
| **Floyd-Warshall**    | Caminos mínimos entre todos los pares            |
| **Kruskal / Prim**    | Árbol de expansión mínima (MST)                  |
| **Topological sort**  | Orden con dependencias (DAG)                     |
| **Tarjan / Kosaraju** | Componentes fuertemente conectadas               |


Aplicar grafos:

Manual (con dict de listas):

```
grafo = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': [],
    'D': []
}

```


Librerias: 

networkx (muy poderosa para grafos reales):

```
import networkx as nx

G = nx.Graph()
G.add_edges_from([('A', 'B'), ('A', 'C'), ('B', 'D')])
nx.shortest_path(G, 'A', 'D')  # ['A', 'B', 'D']

```


Ejercicios

Crear y recorrer un grafo con DFS y BFS

Encontrar el camino más corto entre dos nodos

Detectar ciclos en un grafo dirigido

Aplicar topological sort en tareas con dependencias

Modelar un mapa de rutas o laberinto

Detectar componentes conectados

Implementar Dijkstra paso a paso

Resolver un problema con propagación (como infección o red eléctrica)


### Código

1. Simple

```
class Grafo:
    def __init__(self):
        self.adyacencia = {}

    def agregar_vertice(self, vertice):
        if vertice not in self.adyacencia:
            self.adyacencia[vertice] = []

    def agregar_arista(self, origen, destino):
        self.agregar_vertice(origen)
        self.agregar_vertice(destino)
        self.adyacencia[origen].append(destino)
        # Para grafo no dirigido:
        self.adyacencia[destino].append(origen)

    def mostrar(self):
        for vertice, vecinos in self.adyacencia.items():
            print(f"{vertice} → {vecinos}")

```


Ej: 

```
g = Grafo()
g.agregar_arista("A", "B")
g.agregar_arista("A", "C")
g.agregar_arista("B", "D")
g.mostrar()
# A → ['B', 'C']
# B → ['A', 'D']
# C → ['A']
# D → ['B']

```


2. Eficiente/escalable:  

Con soporte para dirigido, ponderado, BFS, DFS

```
from collections import defaultdict, deque

class GrafoDirigido:
    def __init__(self):
        self.adyacencia = defaultdict(list)

    def agregar_arista(self, u, v, peso=1):
        self.adyacencia[u].append((v, peso))  # arista dirigida u → v

    def bfs(self, inicio):
        visitado = set()
        cola = deque([inicio])
        while cola:
            actual = cola.popleft()
            if actual not in visitado:
                print(actual, end=" ")
                visitado.add(actual)
                for vecino, _ in self.adyacencia[actual]:
                    if vecino not in visitado:
                        cola.append(vecino)

    def dfs(self, inicio, visitado=None):
        if visitado is None:
            visitado = set()
        print(inicio, end=" ")
        visitado.add(inicio)
        for vecino, _ in self.adyacencia[inicio]:
            if vecino not in visitado:
                self.dfs(vecino, visitado)

```

Ej: 

```
g = GrafoDirigido()
g.agregar_arista("A", "B")
g.agregar_arista("A", "C")
g.agregar_arista("B", "D")
g.agregar_arista("C", "D")
g.agregar_arista("D", "E")

print("BFS:")
g.bfs("A")  # A B C D E

print("\nDFS:")
g.dfs("A")  # A B D E C

```

Usos: 

| Tarea                          | Algoritmo sugerido    |
| ------------------------------ | --------------------- |
| Todos los caminos → recorrer   | DFS, BFS              |
| Camino más corto (sin pesos)   | BFS                   |
| Camino más corto (con pesos +) | Dijkstra              |
| Pesos negativos                | Bellman-Ford          |
| Todos los caminos mínimos      | Floyd-Warshall        |
| Tareas con dependencias (DAG)  | TopoSort (Kahn o DFS) |
| Detectar ciclos                | DFS con tracking      |


Extras útiles:

networkx: para grafos visuales, análisis, pesos, rutas

heapq: para Dijkstra (con prioridad mínima)

Union-Find (Disjoint Set): para detección de componentes o ciclos

PriorityQueue: para grafos ponderados


### Claves

1. Código general

```
from collections import defaultdict, deque

class GrafoDirigido:
    def __init__(self):
        self.adyacencia = defaultdict(list)

    def agregar_arista(self, u, v, peso=1):
        self.adyacencia[u].append((v, peso))  # arista dirigida u → v

    def bfs(self, inicio):
        visitado = set()
        cola = deque([inicio])
        while cola:
            actual = cola.popleft()
            if actual not in visitado:
                print(actual, end=" ")
                visitado.add(actual)
                for vecino, _ in self.adyacencia[actual]:
                    if vecino not in visitado:
                        cola.append(vecino)

    def dfs(self, inicio, visitado=None):
        if visitado is None:
            visitado = set()
        print(inicio, end=" ")
        visitado.add(inicio)
        for vecino, _ in self.adyacencia[inicio]:
            if vecino not in visitado:
                self.dfs(vecino, visitado)

```


2. init: estructura adyacente

```
self.adyacencia = defaultdict(list)

```

adyacencia representa el grafo como un diccionario.

Cada clave es un nodo, y su valor es una lista de tuplas (vecino, peso).

Se usa defaultdict(list) para evitar errores si un nodo aún no fue creado: se inicializa automáticamente con una lista vacía.


Ejemplo después de agregar A → B:

```
{
  'A': [('B', 1)],
  'B': []
}

```


3. agregar_arista(self, u, v, peso=1)

```
self.adyacencia[u].append((v, peso))

```

Agrega una arista dirigida desde u hacia v, con peso opcional (default 1).

No agrega la arista inversa (no es no-dirigido)


Ej: 

```
grafo.agregar_arista('A', 'B')

```

Se guarda como:

```
{'A': [('B', 1)]}

```

4. bfs(self, inicio): recorrido Breadth-First Search

```
visitado = set()
cola = deque([inicio])

```

visitado lleva un registro de nodos ya explorados.

cola es una estructura FIFO (cola) donde se encolan los nodos por visitar.

```
while cola:
    actual = cola.popleft()

```

Se extrae el primer nodo en la cola (actual).

Así se asegura que se visitan por niveles, de más cercano a más lejano

```

if actual not in visitado:
    print(actual, end=" ")
    visitado.add(actual)

```

Si aún no fue visitado, se imprime y se marca como visitado.

```
for vecino, _ in self.adyacencia[actual]:
    if vecino not in visitado:
        cola.append(vecino)

```

Se encolan los vecinos no visitados para recorrerlos luego.


Ej: 

```
grafo.agregar_arista("A", "B")
grafo.agregar_arista("A", "C")
grafo.agregar_arista("B", "D")
grafo.bfs("A")

```

Recorrido BFS:

```
Cola inicial: ['A']
→ Visita A → agrega B y C
→ Visita B → agrega D
→ Visita C → nada nuevo
→ Visita D → fin

Salida: A B C D

```


5. dfs(self, inicio, visitado=None): Depth-First Search

```
if visitado is None:
    visitado = set()
print(inicio, end=" ")
visitado.add(inicio)

```

Imprime y marca como visitado el nodo actual.

```
for vecino, _ in self.adyacencia[inicio]:
    if vecino not in visitado:
        self.dfs(vecino, visitado)

```

Explora profundamente primero antes de retroceder.


Ej: 

```
grafo.dfs("A")

```

Si el grafo tiene:

```
A → B
A → C
B → D

```


Recorrido DFS:

```
→ A
   → B
      → D
   → C

```

Out: A B D C


Ventajas:

Usa defaultdict → evita errores al crear nodos.

Usa deque → eficiente en BFS (O(1) para popleft()).

Fácil de extender con pesos, caminos, ciclos, topological sort, etc



# Collections

Ofrece tipos de datos alternativos a las estructuras básicas como listas, diccionarios, sets y tuplas.

Para resolver casos comunes más eficientemente y con más claridad.


Tipos: 

| Tipo          | Propósito principal                                |
| ------------- | -------------------------------------------------- |
| `namedtuple`  | Tuplas con nombres de campo                        |
| `deque`       | Lista doblemente terminada (cola/pila eficiente)   |
| `Counter`     | Contador de elementos (como un multiset)           |
| `defaultdict` | Diccionario con valores por defecto automáticos    |
| `OrderedDict` | Diccionario que recuerda el orden de inserción     |
| `ChainMap`    | Combina múltiples diccionarios como una vista sola |


1. namedtuple: tupla con nombres

```
from collections import namedtuple

Persona = namedtuple('Persona', ['nombre', 'edad'])
p = Persona('Ana', 30)
print(p.nombre)  # Ana
print(p[1])      # 30

```

Ideal para estructuras simples donde querés inmutabilidad + nombres de campos.


2. deque: pila o cola eficiente

```
from collections import deque

cola = deque()
cola.append('A')       # enqueue
cola.append('B')
cola.popleft()         # dequeue

```

.append() y .popleft() son O(1)

Mucho más eficiente que list.pop(0) o list.insert(0, x)


3. Counter: contar ocurrencias

```
from collections import Counter

c = Counter('banana')
print(c)         # Counter({'a': 3, 'n': 2, 'b': 1})
print(c['a'])    # 3

```

Muy útil para análisis de frecuencia.


4. defaultdict: diccionario con valores automáticos

```
from collections import defaultdict

d = defaultdict(list)
d['a'].append(1)
d['a'].append(2)
print(d['a'])  # [1, 2]
print(d['b'])  # [] (se crea solo con una lista vacía)

```

Excelente para grafos, agrupamiento, acumulación de listas, etc


5. OrderedDict: diccionario ordenado

```
from collections import OrderedDict

od = OrderedDict()
od['uno'] = 1
od['dos'] = 2
print(list(od.keys()))  # ['uno', 'dos']

```

Desde Python 3.7 los dicts normales ya preservan el orden, pero OrderedDict permite operaciones especiales (como mover al final).


6. ChainMap: unir varios diccionarios

```
from collections import ChainMap

a = {'x': 1}
b = {'y': 2, 'x': 10}
cm = ChainMap(a, b)
print(cm['x'])  # 1 (prioriza el primero)

```

Útil para manejar múltiples contextos (como scopes de configuración o variables locales/globales).


Usos: 

| Querés...                           | Usá...                   |
| ----------------------------------- | ------------------------ |
| Simular pila o cola eficiente       | `deque`                  |
| Agrupar datos o contar apariciones  | `Counter`, `defaultdict` |
| Usar estructuras ligeras con nombre | `namedtuple`             |
| Combinar múltiples diccionarios     | `ChainMap`               |
| Mantener orden con funciones extra  | `OrderedDict`            |



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



#Algoritmos 

##1. Fuerza bruta 

Prueban todas las posibles soluciones hasta encontrar la correcta (o todas las correctas, si el problema lo requiere).

1. Simplicidad: fácil de entender e implementar.
2. Generalidad: se puede aplicar a muchos tipos de problemas.
3. Costoso en tiempo: generalmente tiene un alto costo computacional, ya que explora todo el espacio de soluciones posibles.

Ejemplo 1: Búsqueda de un elemento en un arreglo

Supongamos que tienes un arreglo y quieres saber si contiene el número 5.

```
def buscar_fuerza_bruta(arr, objetivo):
    for elemento in arr:
        if elemento == objetivo:
            return True
    return False

```

Este algoritmo recorre todos los elementos hasta encontrar el objetivo (o hasta el final si no está).


Ejemplo 2: Problema de la contraseña

Si quieres descubrir una contraseña de 4 letras usando solo letras minúsculas (26 letras), un algoritmo de fuerza bruta probaría todas las combinaciones posibles

```
import itertools
import string

def adivinar_contraseña(contraseña_real):
    caracteres = string.ascii_lowercase  # 'abcdefghijklmnopqrstuvwxyz'
    for intento in itertools.product(caracteres, repeat=len(contraseña_real)):
        intento_str = ''.join(intento)
        if intento_str == contraseña_real:
            return intento_str

```

Ventajas

Siempre encuentra una solución (si existe).
No requiere técnicas complejas.

Desventajas

Muy ineficiente para entradas grandes.
Tiempo de ejecución puede crecer exponencialmente con el tamaño del problema

Uso: 

Cuando el espacio de búsqueda es pequeño.
Como solución inicial antes de optimizar.
Para validar otros algoritmos (como "fuerza bruta vs solución optimizada").


## 2. Recursion

Una función se llama a sí misma para resolver subproblemas más pequeños de un problema más grande. 

Es útil cuando un problema puede dividirse en problemas más pequeños del mismo tipo.

1. Caso base:
Es la condición que detiene la recursión. 
Sin un caso base, la función seguirá llamándose a sí misma infinitamente, lo que causará un desbordamiento de pila (stack overflow).

2. Llamada recursiva:
Es cuando la función se llama a sí misma con una versión más simple o más pequeña del problema original.

3. Dividir y conquistar:
La recursión generalmente descompone el problema en subproblemas más pequeños, los resuelve recursivamente y luego combina los resultados.


Ejemplo 1: Factorial de un número

El factorial de un número n (n!) se define como:
n!=n×(n−1)!

Con el caso base:
0!=1

```
def factorial(n):
    if n == 0:  # Caso base
        return 1
    else:
        return n * factorial(n - 1)  # Llamada recursiva

```

Flujo de ejecución para factorial(4):

factorial(4) = 4×factorial(3)
factorial(3) = 3×factorial(2)
factorial(2) = 2×factorial(1)
factorial(1) = 1×factorial(0)
factorial(0) = 1(caso base)

Resultado: 4×3×2×1=24 


Ejemplo 2: Serie de Fibonacci

La serie de Fibonacci se define como:
F(n)=F(n−1)+F(n−2)

Con los casos base:
F(0)=0, F(1)=1



## 3. Divide y Conquista 

Paradigma de diseño de algoritmos que consiste en dividir un problema en subproblemas más pequeños y resolverlos de forma independiente. 

Los resultados de estos subproblemas se combinan para obtener la solución del problema original

1. Dividir:
Dividir el problema en subproblemas más pequeños del mismo tipo. 
La división se detiene cuando los subproblemas son lo suficientemente simples para resolverse directamente.

2. Conquistar:
Resolver cada subproblema de forma recursiva. 
Si los subproblemas son lo suficientemente simples, resolverlos directamente (caso base).

3. Combinar:
Combinar las soluciones de los subproblemas para formar la solución del problema original.


```
def fibonacci(n):
    if n == 0:  # Caso base
        return 0
    elif n == 1:  # Caso base
        return 1
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)  # Llamadas recursivas

```

Flujo de ejecución para fibonacci(4)fibonacci(4):

fibonacci(4)=fibonacci(3)+fibonacci(2)
fibonacci(3)=fibonacci(2)+fibonacci(1)
fibonacci(2)=fibonacci(1)+fibonacci(0)

Resultado: 3.


Ventajas de la recursión:

Código más simple y elegante: Muchas soluciones recursivas son más compactas que sus equivalentes iterativos.
Divide y conquista: Es ideal para problemas que se dividen naturalmente en subproblemas similares (ej., algoritmos de búsqueda y ordenación).

Desventajas de la recursión:

Costo en memoria: Cada llamada recursiva ocupa espacio en la pila (stack), lo que puede llevar a un desbordamiento si la recursión es muy profunda.
Inneficiencia sin optimización: Sin técnicas como la memoización, algunas soluciones recursivas (ej., Fibonacci) recalculan subproblemas repetidamente, lo que es ineficiente.


Ejemplo optimizado con memoización:

En el problema de Fibonacci, podemos evitar cálculos redundantes almacenando resultados intermedios.

```
def fibonacci_memo(n, memo={}):
    if n in memo:  # Consultar en memoria
        return memo[n]
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        memo[n] = fibonacci_memo(n - 1, memo) + fibonacci_memo(n - 2, memo)
        return memo[n]

```

Casos de uso típicos:

Problemas matemáticos: Factorial, Fibonacci, potencias.
Estructuras de datos: Recorridos de árboles (preorden, inorden, postorden).
Algoritmos de búsqueda: Búsqueda binaria, Backtracking (como resolver laberintos o el problema de las N-reinas).
Ordenación: Quick Sort, Merge Sort



## 3. Divide y Conquista

Paradigma de diseño de algoritmos que consiste en dividir un problema en subproblemas más pequeños y resolverlos de forma independiente. 
Los resultados de estos subproblemas se combinan para obtener la solución del problema original


1. Dividir:
Dividir el problema en subproblemas más pequeños del mismo tipo. 
La división se detiene cuando los subproblemas son lo suficientemente simples para resolverse directamente.

2. Conquistar:
Resolver cada subproblema de forma recursiva. 
Si los subproblemas son lo suficientemente simples, resolverlos directamente (caso base).

3. Combinar:
Combinar las soluciones de los subproblemas para formar la solución del problema original.


Ejemplo: Ordenación por Merge Sort

Merge Sort es un algoritmo que utiliza la técnica de Divide y Conquista para ordenar un array.

Pasos del algoritmo:

Dividir:
Dividir el array en dos mitades aproximadamente iguales hasta que cada subarray tenga un solo elemento (ya están ordenados).

Conquistar:
Ordenar recursivamente ambas mitades.

Combinar:
Combinar las dos mitades ordenadas en un solo array ordenado.

Implementación:

```
def merge_sort(arr):
    if len(arr) <= 1:  # Caso base: un solo elemento está ordenado
        return arr

    # Dividir el array en dos mitades
    mid = len(arr) // 2
    left_half = merge_sort(arr[:mid])
    right_half = merge_sort(arr[mid:])

    # Combinar las mitades ordenadas
    return merge(left_half, right_half)

def merge(left, right):
    result = []
    i = j = 0

    # Comparar elementos de ambas mitades y combinarlos en orden
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    # Agregar elementos restantes de ambas mitades
    result.extend(left[i:])
    result.extend(right[j:])
    return result

```

Ejemplo de ejecución: Para un array ([8,3,2,9,7,1,5,4]), Merge Sort:

Divide en ([8,3,2,9][8,3,2,9] y [7,1,5,4]).
Sigue dividiendo hasta llegar a arrays individuales: ([8],[3],[2],[9],[7],[1],[5],[4]).
Combina y ordena recursivamente: ([3,8],[2,9],[1,7],[4,5]), luego ([2,3,8,9]) y ([1,4,5,7]).
Combina las dos mitades finales para obtener ([1,2,3,4,5,7,8,9]).


Ejemplo: Búsqueda binaria

La búsqueda binaria utiliza Divide y Conquista para encontrar un elemento en un array ordenado.
Pasos del algoritmo:

Dividir:
1. Comparar el elemento buscado con el elemento central del array.

2. Conquistar:
Si el elemento buscado es menor que el elemento central, buscar en la mitad izquierda. 
Si es mayor, buscar en la mitad derecha.

3. Combinar:
No hay necesidad de combinar; el resultado es el índice del elemento buscado.

```
def binary_search(arr, target, low, high):
    if low > high:  # Caso base: el rango está vacío
        return -1

    mid = (low + high) // 2
    if arr[mid] == target:  # Elemento encontrado
        return mid
    elif arr[mid] > target:  # Buscar en la mitad izquierda
        return binary_search(arr, target, low, mid - 1)
    else:  # Buscar en la mitad derecha
        return binary_search(arr, target, mid + 1, high)

```

Ejemplo de ejecución: Para un array ([1,3,5,7,9,11]) y target=7.

Compara con el elemento central (5), busca en la mitad derecha.
Compara con el nuevo elemento central (9), busca en la mitad izquierda.
Encuentra 7 y retorna su índice.

Ventajas de Divide y Conquista:

Eficiencia:
Divide problemas grandes en problemas más pequeños, reduciendo la complejidad general.

Modularidad:
Cada subproblema se resuelve independientemente, facilitando la implementación y depuración.

Escalabilidad:
Se adapta bien a problemas de gran tamaño.

Desventajas de Divide y Conquista:

Sobrecarga por recursión:
El uso intensivo de llamadas recursivas puede incrementar el consumo de memoria.

No siempre aplicable:
Requiere que el problema sea divisible en subproblemas independientes.

Otros algoritmos que usan Divide y Conquista:

Quick Sort: Divide el array seleccionando un pivote y particiona los elementos menores y mayores.
Algoritmo de Strassen: Multiplicación de matrices.
Problema de las N-reinas: Resolver problemas de backtracking complejos


## 4. Dynamic Programming

Es una técnica de diseño de algoritmos que se utiliza para resolver problemas complejos dividiéndolos en subproblemas más pequeños, almacenando las soluciones intermedias para evitar cálculos repetidos. 
Es especialmente útil para problemas que tienen una estructura recurrente y cumplen con la propiedad de subproblemas superpuestos

Propiedades clave de DP:

1. Subproblemas superpuestos:
El problema puede descomponerse en subproblemas más pequeños, y los mismos subproblemas aparecen repetidamente.
Ejemplo: En la secuencia de Fibonacci, F(n)=F(n−1)+F(n−2), F(n−1)F y F(n−2) se reutilizan.

2. Optimalidad de subestructuras:
La solución óptima del problema completo puede construirse a partir de las soluciones óptimas de sus subproblemas.
Ejemplo: En el problema de la mochila (Knapsack), el valor óptimo total depende de las elecciones hechas en los subproblemas.

Técnicas de DP:

1. Memorización (Top-Down):
Resolver el problema de manera recursiva y almacenar los resultados en una tabla (cache) para reutilizarlos si se vuelven a calcular.
Se utiliza cuando la solución natural del problema es recursiva.

2. Tabulación (Bottom-Up):
Construir la solución iterativamente desde los subproblemas más pequeños hasta el problema completo.
Es más eficiente en memoria porque no depende de la pila de llamadas.


Ejemplo 1: Fibonacci con DP

Sin DP (recursión):

```
def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

```

Problema: Muchas llamadas redundantes. Complejidad O(2ⁿ).

Con Memorización (Top-Down):

```
def fibonacci_memo(n, memo={}):
    if n in memo:  # Revisar si el resultado ya está calculado
        return memo[n]
    if n == 0:
        return 0
    elif n == 1:
        return 1
    memo[n] = fibonacci_memo(n - 1, memo) + fibonacci_memo(n - 2, memo)
    return memo[n]

```

Complejidad: O(n) porque cada subproblema se resuelve una vez.

Con Tabulación (Bottom-Up):

```
def fibonacci_tab(n):
    if n == 0:
        return 0
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]

```

Complejidad: O(n) en tiempo y espacio.


Ejemplo 2: Problema de la mochila (Knapsack Problem)

Problema:
Dado un conjunto de n elementos, cada uno con un peso y un valor, y una capacidad máxima de mochila W, determina el valor máximo que puede llevarse sin exceder W.

Solución con DP (Tabulación):

```
def knapsack(values, weights, W):
    n = len(values)
    dp = [[0] * (W + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for w in range(W + 1):
            if weights[i - 1] <= w:
                # Tomar el máximo entre incluir o excluir el elemento
                dp[i][w] = max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]])
            else:
                # No incluir el elemento
                dp[i][w] = dp[i - 1][w]

    return dp[n][W]

```

Complejidad: O(n⋅W) en tiempo y espacio.

Aplicaciones comunes de DP:

Secuencias:
Longest Common Subsequence (LCS)
Longest Increasing Subsequence (LIS)

Optimización:
Knapsack Problem
Cutting Rod Problem

Caminos mínimos:
Problema de caminos más cortos (Floyd-Warshall).
Caminos en una cuadrícula (únicos, mínimos).

Combinatoria:
Contar formas de hacer cambio de monedas.
Contar formas de cubrir escaleras.

Ventajas de DP:

Elimina redundancia: Evita cálculos repetidos al almacenar resultados intermedios.
Eficiencia: Resuelve problemas complejos que serían intratables con enfoques puramente recursivos o de fuerza bruta.

Desafíos de DP:

Identificar la recurrencia: Es necesario descomponer el problema en subproblemas relacionados.
Diseño de la tabla DP: Requiere decidir qué dimensiones y valores almacenar.
Consumo de memoria: Algunos problemas pueden requerir grandes tablas


## 5. Greedy Algorithms

Técnica de diseño de algoritmos que toman decisiones en base a la mejor opción disponible en cada paso, con la esperanza de que esta estrategia lleve a una solución óptima para el problema completo

Características principales de los algoritmos voraces:

1. Decisión local óptima:
En cada paso, el algoritmo elige la mejor opción disponible sin preocuparse por cómo afectará a decisiones futuras.

2. Sin retroceso:
Una vez tomada una decisión, no se revisa ni se corrige; el algoritmo avanza hasta completar el problema.

3. Estructura óptima:
Funciona bien si el problema tiene la propiedad de subestructuras óptimas, es decir, que la solución óptima global se puede construir a partir de soluciones óptimas locales.

4. Greedy-choice property:
La mejor decisión local en cada paso eventualmente lleva a la solución óptima global.

Ejemplo clásico: Problema de la Moneda

Problema:

Dado un conjunto de monedas de diferentes denominaciones, encontrar el número mínimo de monedas necesario para dar un cambio de n.

Solución voraz:

Elegir siempre la moneda de mayor denominación que no exceda el valor restante.
Repetir el proceso hasta que se complete el cambio.


Ejemplo:

Si las monedas disponibles son ([1,5,10,25]) y el cambio es 63:

Tomar 25 (quedan 38).
Tomar 25 (quedan 13).
Tomar 10 (quedan 3).
Tomar 1,1,1(quedan 0).

Total: 6 monedas.

Nota: Este enfoque funciona si las denominaciones de monedas forman un conjunto canónico, como en este caso. 
Si las denominaciones no cumplen esta propiedad, un enfoque voraz puede fallar.


Ejemplo: Actividad de selección

Problema:
Dado un conjunto de actividades con tiempos de inicio y finalización, seleccionar el máximo número de actividades que no se solapen.

Solución voraz:
Ordenar las actividades por sus tiempos de finalización.
Seleccionar la actividad más temprana que no se superponga con las ya seleccionadas.
Repetir el proceso para todas las actividades restantes.

Ejemplo:
Actividades: ([(1,4),(3,5),(0,6),(5,7),(8,9)]).

Pasos:

Ordenar por tiempos de finalización: ([(1,4),(3,5),(0,6),(5,7),(8,9)]).
Seleccionar (1,4), luego (5,7), y finalmente (8,9).

Resultado: ([(1,4),(5,7),(8,9)]).

Complejidad: O(n log n) debido a la ordenación inicial.


Ventajas de los algoritmos voraces:

Simplicidad:
Suelen ser más fáciles de implementar y entender que otros paradigmas como la programación dinámica.

Eficiencia:
En muchos casos, tienen complejidad lineal o O(nlog⁡n), haciéndolos rápidos.

Adecuado para problemas específicos:
Funcionan bien cuando el problema tiene la propiedad greedy-choice y subestructuras óptimas.


Desventajas de los algoritmos voraces:

No siempre son óptimos:
La decisión local óptima puede no llevar a la solución global óptima.
Ejemplo: El problema de cambio de monedas con denominaciones no canónicas.

Dificultad para identificar aplicabilidad:
No todos los problemas pueden resolverse con un enfoque voraz.


Problemas comunes resueltos con algoritmos voraces:

Cambio de monedas.

Problema del árbol de expansión mínima:
Algoritmos de Kruskal y Prim.

Codificación de Huffman (compresión de datos).

Problema de la mochila fraccionaria:
Seleccionar elementos que maximicen el valor total, permitiendo fracciones de los mismos.

Planificación de tareas:
Problema de la actividad de selección.

Ruta más corta en un grafo:
Algoritmo de Dijkstra (cuando no hay pesos negativos).


Ejemplo: Problema de la mochila fraccionaria

Problema:
Dado un conjunto de elementos, cada uno con un peso y un valor, y una capacidad máxima W, encontrar el valor máximo que se puede llevar. 
Se permite tomar fracciones de un elemento.

Solución voraz:
Calcular el valor por unidad de peso (vi/wi) para cada elemento.
Ordenar los elementos por esta relación en orden descendente.
Tomar los elementos más valiosos por unidad de peso hasta llenar la mochila.


Implementación:

```
def fractional_knapsack(values, weights, W):
    items = sorted(zip(values, weights), key=lambda x: x[0] / x[1], reverse=True)
    total_value = 0

    for value, weight in items:
        if W >= weight:
            W -= weight
            total_value += value
        else:
            total_value += value * (W / weight)
            break

    return total_value

```

Ejemplo: Valores: ([60,100,120]), Pesos: ([10,20,30]), Capacidad: W=50.

Ordenar: (120,30),(100,20),(60,10).
Seleccionar completamente (100,20) y (60,10), y 2/3 de (120,30).

Resultado: 240


## 6. Backtracking

Es una técnica de diseño de algoritmos que consiste en explorar todas las posibles soluciones para un problema de manera sistemática. 
Si una solución parcial no puede llevar a una solución completa válida, se retrocede (se hace un backtrack) y se prueba otra opción

Conceptos básicos de Backtracking:

1. Construcción incremental:
Se construyen soluciones paso a paso, añadiendo una pieza a la vez.

2. Retroceso (Backtracking):
Si en algún punto la solución parcial no es válida o no puede llevar a una solución completa, se deshace el último paso y se prueban otras opciones.

3. Espacios de búsqueda:
Representa todas las posibles configuraciones del problema. 
El objetivo del backtracking es explorar este espacio de manera eficiente.

4. Criterio de poda:
Durante la exploración, se descartan ramas del espacio de búsqueda que no pueden llevar a una solución válida. 
Esto se llama poda.


Ejemplo clásico: Problema de las N-reinas

Problema:
Colocar N reinas en un tablero de ajedrez N×N de forma que ninguna reina pueda atacar a otra (es decir, no pueden estar en la misma fila, columna ni diagonal).

Solución con backtracking:

Colocar una reina en una fila.
Verificar si la posición es válida.
Si es válida, proceder a la siguiente fila.
Si no es válida, retroceder y probar otra posición.


Implementación:

```
def n_queens(board, row, n):
    if row == n:
        # Si se colocan todas las reinas, imprimir solución
        print_solution(board)
        return True
    
    for col in range(n):
        if is_safe(board, row, col, n):
            # Colocar reina
            board[row][col] = 1
            
            # Intentar colocar en la siguiente fila
            if n_queens(board, row + 1, n):
                return True
            
            # Si no es posible, quitar la reina (backtrack)
            board[row][col] = 0
    
    return False


def is_safe(board, row, col, n):
    # Comprobar columna
    for i in range(row):
        if board[i][col] == 1:
            return False
    
    # Comprobar diagonal superior izquierda
    for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
        if board[i][j] == 1:
            return False
    
    # Comprobar diagonal superior derecha
    for i, j in zip(range(row, -1, -1), range(col, n)):
        if board[i][j] == 1:
            return False
    
    return True

def print_solution(board):
    for row in board:
        print(" ".join("Q" if x == 1 else "." for x in row))
    print("\n")

# Resolver para N=4
N = 4
board = [[0] * N for _ in range(N)]
n_queens(board, 0, N)

```

Salida para N=4:

. Q . .
. . . Q
Q . . .
. . Q .

Características de Backtracking:

1. Completo:
Encuentra todas las soluciones posibles si el problema lo permite.

2. Exhaustivo:
Explora todas las combinaciones posibles en el peor de los casos.

3. Eficiente con poda:
Mediante poda, se reducen las combinaciones exploradas, mejorando el tiempo de ejecución.


Aplicaciones de Backtracking:

Problemas de optimización:
Resolver sudokus.
Resolver rompecabezas como el cubo Soma.

Problemas de decisión:
Problema de las N-reinas.
Resolver el problema del laberinto.

Combinaciones y permutaciones:
Generar subconjuntos.
Resolver problemas de partición.

Problemas gráficos:
Problema del color del grafo.
Problema del viajero (Traveling Salesman Problem, en su versión no optimizada).


Ventajas de Backtracking:

Flexibilidad:
Puede resolver problemas de búsqueda y optimización.

Aplicable en problemas generales:
Funciona en una amplia variedad de problemas donde se debe explorar el espacio de soluciones.

Desventajas de Backtracking:

Ineficiente en problemas grandes:
Sin poda adecuada, el tiempo de ejecución puede ser exponencial en el peor de los casos.

Difícil de implementar correctamente:
Requiere identificar criterios de poda efectivos.


Ejemplo: Resolver un Sudoku

Un ejemplo práctico sería resolver un tablero de Sudoku con backtracking:

```
def solve_sudoku(board):
    empty = find_empty(board)
    if not empty:
        return True  # Solución completa
    row, col = empty

    for num in range(1, 10):
        if is_valid(board, num, row, col):
            board[row][col] = num  # Intentar número
            if solve_sudoku(board):  # Continuar
                return True
            board[row][col] = 0  # Retroceder

    return False

def is_valid(board, num, row, col):
    # Comprobar fila, columna y subcuadro
    for i in range(9):
        if board[row][i] == num or board[i][col] == num:
            return False
        if board[3 * (row // 3) + i // 3][3 * (col // 3) + i % 3] == num:
            return False
    return True

def find_empty(board):
    for i in range(9):
        for j in range(9):
            if board[i][j] == 0:
                return (i, j)
    return None

```


