# Planteo del problema

1. Entender el problema

Lee el enunciado cuidadosamente:
Asegúrate de entender qué se te está pidiendo resolver.
Identifica las restricciones (tamaño del input, límite de tiempo, etc.).
Comprende el formato de entrada y salida esperado.

Aclara dudas:
Si algo no está claro, intenta formular preguntas o hacer supuestos razonables.
Ejemplo: ¿El array está ordenado? ¿Puede haber duplicados?

Piensa en casos extremos:
Considera inputs mínimos, máximos, vacíos, o cualquier caso límite.


2. Analizar ejemplos concretos

Prueba con ejemplos simples:
Crea manualmente ejemplos de entrada y salida para entender mejor el problema.
Ejemplo: Si te piden encontrar el subarreglo con la suma máxima, prueba con entradas como [1, -2, 3, 4].

Busca patrones:
Observa si hay repetición de pasos, relaciones entre elementos o propiedades específicas.

Define reglas generales:
Intenta derivar una lógica que explique cómo se obtiene el resultado a partir de los ejemplos.


3. Descomponer el problema

Divide el problema en partes más pequeñas:
Identifica tareas simples que puedan combinarse para resolver el problema.
Ejemplo: En un problema de grafos, podrías dividir el trabajo en "representar el grafo", "explorar nodos", y "calcular la respuesta".

Piensa en subproblemas:
Si el problema tiene una estructura repetitiva, puede ser un candidato para programación dinámica o recursión.


4. Seleccionar una estrategia

Evalúa las características del problema:
¿Es necesario explorar todas las soluciones? → Fuerza bruta.
¿Se puede dividir en partes más pequeñas? → Divide y conquista.
¿Hay subproblemas repetidos? → Programación dinámica.
¿Es suficiente una solución parcial óptima? → Algoritmos voraces.
¿Hay decisiones con retroceso? → Backtracking.

Considera las restricciones de tiempo y espacio:
Selecciona una técnica que cumpla con los límites dados.

Opta por la solución más simple inicialmente:
Empieza con fuerza bruta si no estás seguro y optimiza más adelante.


5. Diseñar una solución paso a paso

Escribe un plan en pseudocódigo:
Define los pasos de tu solución de manera clara y comprensible.
Ejemplo: "Recorrer el array, sumar elementos, actualizar la máxima suma si es mayor".

Piensa en estructuras de datos adecuadas:
¿Necesitas pilas, colas, diccionarios, o conjuntos para facilitar el trabajo?

Esquematiza el flujo del algoritmo:
Usa diagramas de flujo o pasos secuenciales para visualizar cómo se resolverá el problema.


6. Validar y probar la solución

Ejecuta tu plan con ejemplos simples:
Asegúrate de que produce el resultado esperado.

Prueba casos límites y edge cases:
Inputs grandes, valores negativos, valores repetidos, etc.

Mide la eficiencia:
Analiza el tiempo y espacio utilizado, ajusta si es necesario.


7. Optimizar la solución

Identifica cuellos de botella:
Encuentra partes del algoritmo que consumen demasiado tiempo o memoria.

Reduce la complejidad:
Intenta reemplazar iteraciones anidadas con técnicas como búsqueda binaria, uso de hashmaps, o recursión optimizada.

Evita cálculos redundantes:
Memoriza resultados intermedios si se repiten (técnica común en DP).


8. Documentar y escribir el código

Escribe el código basado en tu plan:
Sigue el pseudocódigo y comenta cada paso.

Hazlo modular:
Divide tu solución en funciones pequeñas y reutilizables.

Incluye validaciones y manejo de errores:
Por ejemplo, si el input es nulo o no tiene el formato esperado.


9. Comparar con otros enfoques

Explora soluciones alternativas:
Tal vez haya una técnica más directa o eficiente.

Aprende de problemas similares:
Busca patrones en soluciones a problemas similares y aplica lo aprendido.

Ejemplo práctico: Problema clásico

Problema: Encontrar el subarreglo con la suma máxima en un array.
Pasos para resolverlo:

Entender el problema:
Input: Array de números, positivo y negativo.
Output: Máxima suma de cualquier subarreglo contiguo.

Ejemplo concreto:
Entrada: ([-2, 1, -3, 4, -1, 2, 1, -5, 4])
Salida: 6 (subarreglo [4, -1, 2, 1]).

Estrategia:
Se puede usar un enfoque iterativo para mantener una suma acumulativa.

Diseño del algoritmo (Kadane’s Algorithm):

```
def max_subarray_sum(nums):
    max_sum = float('-inf')
    current_sum = 0
    for num in nums:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    return max_sum

```

Optimización y prueba:
Este algoritmo tiene complejidad O(n) y usa O(1) espacio.


Lista de técnicas para plantear soluciones:

Descomposición del problema.
Uso de ejemplos concretos.
Identificación de patrones repetitivos.
Seleccionar estructuras de datos adecuadas.
Definir un pseudocódigo claro.
Probar con casos límites.
Optimización progreso.



# Técnicas para Algoritmos

1. Fuerza Bruta (Brute Force)

Descripción: Probar todas las posibles soluciones y seleccionar la correcta.
Cuándo usar: Problemas pequeños o para encontrar la solución más simple antes de optimizar.

Ejemplos:
Generar todas las permutaciones de una lista.
Resolver un Sudoku probando cada combinación posible.


2. Divide y Conquista

Descripción: Dividir el problema en subproblemas más pequeños, resolverlos y combinar las soluciones.
Cuándo usar: Problemas que pueden dividirse en partes independientes o similares.

Ejemplos:
Merge Sort (ordenar listas).
Búsqueda binaria.
Algoritmo de Karatsuba para multiplicación de números grandes.


3. Recursión

Descripción: Resolver un problema dividiéndolo en instancias más pequeñas del mismo problema.
Cuándo usar: Cuando el problema tiene una estructura repetitiva o dependencias hacia atrás.

Ejemplos:
Cálculo de Fibonacci.
Torres de Hanói.
Búsqueda en profundidad (DFS) en un grafo.


4. Programación Dinámica (Dynamic Programming, DP)

Descripción: Resolver problemas dividiéndolos en subproblemas, almacenando sus resultados para evitar cálculos repetidos.
Cuándo usar: Problemas con subproblemas superpuestos y subestructuras óptimas.

Ejemplos:
Longest Common Subsequence (LCS).
Problema de la mochila (Knapsack).
Caminos mínimos en una cuadrícula.


5. Algoritmos Voraces (Greedy Algorithms)

Descripción: Tomar la mejor decisión local en cada paso, con la esperanza de alcanzar una solución global óptima.
Cuándo usar: Problemas que cumplen con las propiedades de subestructuras óptimas y "greedy-choice".

Ejemplos:
Codificación de Huffman.
Problema de la mochila fraccionaria.
Algoritmo de Prim o Kruskal para árboles de expansión mínima.


6. Backtracking

Descripción: Construir soluciones paso a paso y retroceder cuando una solución parcial no es válida.
Cuándo usar: Problemas que requieren exploración exhaustiva con criterios de poda.

Ejemplos:
Problema de las N-reinas.
Resolver Sudokus.
Problemas de combinación y permutación.


7. Búsqueda y Exploración:

a) Búsqueda Binaria

Descripción: Dividir un rango ordenado en dos partes para buscar un elemento.
Ejemplo: Encontrar un número en una lista ordenada.

b) Búsqueda en Grafos

Descripción: Explorar nodos y sus conexiones.

Técnicas comunes:
DFS (Depth-First Search).
BFS (Breadth-First Search).

Ejemplos:
Encontrar rutas en un laberinto.
Detectar ciclos en un grafo.


8. Algoritmos de Divide y Conquista Mejorados

a) Transformada Rápida de Fourier (FFT)

Descripción: Multiplicar polinomios o procesar señales rápidamente.
Ejemplo: Procesamiento de señales digitales.

b) Algoritmos probabilísticos:

Descripción: Usar aleatoriedad para encontrar soluciones aproximadas.
Ejemplo: Algoritmo de Monte Carlo.


9. Métodos Heurísticos

Descripción: Aproximar soluciones cuando el problema es NP-completo o demasiado costoso.
Cuándo usar: Para problemas grandes donde no es posible encontrar una solución exacta en un tiempo razonable.

Ejemplos:
Algoritmo de recocido simulado (Simulated Annealing).
Algoritmos genéticos.


10. Estrategias Basadas en Grafos

a) Dijkstra

Encontrar la ruta más corta desde un nodo fuente en un grafo ponderado.

b) Bellman-Ford

Similar a Dijkstra, pero funciona con pesos negativos.

c) Floyd-Warshall

Encontrar rutas más cortas entre todos los pares de nodos.

d) Kruskal y Prim

Encontrar árboles de expansión mínima


11. Two Pointers

Descripción: Usar dos punteros para recorrer un array o lista.
Cuándo usar: Problemas de subarreglos, suma de pares o intervalos.

Ejemplos:
	Suma de dos números en un array ordenado.
	Encontrar el área máxima entre dos líneas en un gráfico.


12. Sliding Window

Descripción: Mantener una ventana móvil para encontrar subarreglos o subsecuencias.
Cuándo usar: Problemas con secuencias o rangos.

Ejemplos:
	Subcadena más larga sin caracteres repetidos.
	Suma máxima de un subarreglo de tamaño fijo.


13. Union-Find (Disjoint Set Union, DSU)

Descripción: Estructura de datos para manejar conjuntos disjuntos y uniones eficientes.
Cuándo usar: Problemas de conectividad o grafos.

Ejemplos:
	Algoritmo de Kruskal.
	Detectar ciclos en un grafo.


14. Algoritmos de Ordenación

Descripción: Reorganizar elementos según un orden.

Técnicas comunes:
	Quick Sort.
	Merge Sort.
	Counting Sort (para elementos con rango limitado).

Ejemplo: Ordenar listas o encontrar el kk-ésimo elemento más grande.


15. Bitmasking

Descripción: Usar operaciones bit a bit para representar estados o combinaciones.
Cuándo usar: Problemas con restricciones booleanas o conjuntos pequeños.

Ejemplo:
	Resolver el problema del subconjunto máximo.
	Contar caminos en grafos con restricciones.

Consejos para elegir la técnica adecuada:

Entiende el problema:
	Identifica si tiene subestructuras repetitivas, restricciones o necesidad de optimización.

Estudia la complejidad:
	Evalúa si el enfoque es factible dado el tamaño del problema.

Comienza con un ejemplo simple:
	Usa fuerza bruta o simulación inicial para comprender mejor el problema.

Prueba y mejora:
	Una vez que tengas una solución, intenta optimizarla con técnicas como DP, Voraces o poda en Backtracking



# Big O

Es una forma de describir cómo escala el tiempo de ejecución (o el uso de recursos) de un algoritmo en función del tamaño de su entrada. Es una medida de eficiencia computacional que nos ayuda a comparar algoritmos en términos de su rendimiento y escalabilidad


Conceptos clave:

    Representa el peor caso: Big O describe el comportamiento del algoritmo en el peor escenario posible, proporcionando una cota superior del tiempo o espacio requerido.

    Se enfoca en el crecimiento asintótico: La notación ignora constantes y factores menos significativos para centrarse en cómo crece el tiempo de ejecución a medida que aumenta el tamaño de la entrada (nn).

    Describe la complejidad de tiempo o espacio:
        Complejidad de tiempo: Cuánto tiempo tarda un algoritmo en ejecutarse.
        Complejidad de espacio: Cuánta memoria utiliza un algoritmo


## Tabla Big O

Notación:

O(1): Constante. Ej: Acceder a un elemento de un array por índice 

O(⁡log n): Logarítmica. Ej: Búsqueda binaria en un array ordenado.

O(n): Lineal. Ej: Recorrer un array completo para buscar un elemento

O(n log n): Logarítmica lineal.	Ej: Algoritmos de ordenación eficientes, como Merge Sort.

O(n^2): Cuadrática. Ej: Comparar todos los pares de elementos (doble bucle anidado

O(2^n): Exponencial. Ej: Resolver problemas como el de la "Mochila" con fuerza bruta

O(n!): Factorial. Ej: Generar todas las permutaciones posibles de nn elementos


Ejemplo práctico:
Sumar todos los elementos de un array:

```
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

```
    Tamaño de entrada (n): La longitud del array (arr.length).
    Complejidad: El bucle se ejecuta n veces. Por lo tanto, este algoritmo tiene una complejidad O(n).

Comparar dos elementos consecutivos en un array:

```
function comparePairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}

```
    Tamaño de entrada (n): La longitud del array (arr.length).
    Complejidad: Hay dos bucles anidados, cada uno recorre el array completo. Esto da como resultado una complejidad O(n²).

Cómo ignorar constantes y factores menos significativos:

Si tienes un algoritmo cuya complejidad es 5n+3, en Big O solo considerarás el término dominante (n) y lo simplificarás a O(n). Esto es porque, a medida que nn crece, los otros factores tienen un impacto insignificante en comparación con el término dominante



# Recursion

Técnica en la programación donde una función se llama a sí misma para resolver subproblemas más pequeños de un problema más grande. Es útil cuando un problema puede dividirse en problemas más pequeños del mismo tipo


Conceptos básicos de la recursión:

    Caso base:
        Es la condición que detiene la recursión. Sin un caso base, la función seguirá llamándose a sí misma infinitamente, lo que causará un desbordamiento de pila (stack overflow).

    Llamada recursiva:
        Es cuando la función se llama a sí misma con una versión más simple o más pequeña del problema original.

    Dividir y conquistar:
        La recursión generalmente descompone el problema en subproblemas más pequeños, los resuelve recursivamente y luego combina los resultados.


Ejemplo 1: Factorial de un número

El factorial de un número n (n!) se define como:
n!=n×(n−1)!

Con el caso base:
0!=1

Implementación recursiva:

```
def factorial(n):
    if n == 0:  # Caso base
        return 1
    else:
        return n * factorial(n - 1)  # Llamada recursiva

```

Flujo de ejecución para factorial(4)factorial(4):

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


Implementación recursiva:

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


# Divide y Conquista 

Es un paradigma de diseño de algoritmos que consiste en dividir un problema en subproblemas más pequeños y resolverlos de forma independiente. Los resultados de estos subproblemas se combinan para obtener la solución del problema original


Pasos principales de "Divide y Conquista":

    Dividir:
        Dividir el problema en subproblemas más pequeños del mismo tipo. La división se detiene cuando los subproblemas son lo suficientemente simples para resolverse directamente.

    Conquistar:
        Resolver cada subproblema de forma recursiva. Si los subproblemas son lo suficientemente simples, resolverlos directamente (caso base).

    Combinar:
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
        Comparar el elemento buscado con el elemento central del array.
    
    Conquistar:
        Si el elemento buscado es menor que el elemento central, buscar en la mitad izquierda. Si es mayor, buscar en la mitad derecha.
    
    Combinar:
        No hay necesidad de combinar; el resultado es el índice del elemento buscado.

Implementación:

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


# Big O Recursivo 

El análisis de Big O en algoritmos recursivos implica calcular la complejidad de tiempo (o espacio) considerando cómo las llamadas recursivas afectan el crecimiento del tiempo de ejecución en función del tamaño del problema

Pasos para analizar la notación Big O en recursión:

    Definir el tiempo de ejecución:
        
        Representar el tiempo de ejecución del algoritmo como una relación recursiva o una ecuación de recurrencia. Por ejemplo, si el algoritmo divide el problema en dos subproblemas y combina los resultados, la recurrencia puede ser:
        T(n)=a⋅T(n/b)+O(f(n))
        
        Donde:
            a: Número de subproblemas en los que se divide.
            b: Factor de reducción del tamaño de entrada en cada paso.
            f(n): Tiempo que toma combinar los resultados.

    Resolver la recurrencia:
        Usar métodos como el Teorema Maestro, la expansión recursiva o las relaciones de recurrencia para determinar el crecimiento asintótico de T(n).

Ejemplo básico: Búsqueda binaria

En la búsqueda binaria:

    Dividimos el problema a la mitad en cada paso.
    Solo resolvemos un subproblema (descartando la otra mitad).
    El tiempo para combinar o decidir es constante O(1).

La recurrencia es:
T(n)=T(n/2)+O(1)


Resolviendo la recurrencia:

    A cada paso, el tamaño del problema se reduce a la mitad.
    Esto ocurre O(log⁡n) veces hasta que el tamaño del problema sea 1.
    Entonces, la complejidad de tiempo es O(\log n).

Ejemplo avanzado: Merge Sort

En el caso de Merge Sort:

    Dividimos el array en dos mitades (a=2).
    El tamaño del problema se reduce a la mitad en cada paso (b=2).
    Combinar los resultados toma O(n) tiempo.

La recurrencia es:
T(n)=2⋅T(n/2)+O(n)

Resolviendo con el Teorema Maestro:

    a=2, b=2, y f(n)=O(n).
    Comparar f(n) ((O(n)) con n^log⁡b a = n^log⁡2 2 = O(n)

Como f(n) y n^log⁡b a  tienen el mismo orden (Θ(n)):
T(n)=O(n log ⁡n)


Análisis de espacio en algoritmos recursivos:

Además del tiempo, también se considera el espacio en la pila de recursión. En la mayoría de los casos, el espacio recursivo equivale a la profundidad máxima de la recursión:

    En búsqueda binaria: O(log⁡n).
    En Merge Sort: O(log⁡n).

Ejemplo general: Dividir y conquistar

Supongamos que tenemos un algoritmo con:
T(n)=a⋅T(n/b)+O(n^d)


Se utiliza el Teorema Maestro para resolverlo:

    Calcular p=log⁡b a.
    
    Comparar n^d con n^p:
        Si d<p:T(n)=O(n^p).
        Si d==p:T(n)=O(n^p⋅log ⁡n).
        Si d>p:T(n)=O(n^d).

Resumen:

    Escribir la relación de recurrencia que describe el algoritmo recursivo.
    Resolver la recurrencia usando métodos como el Teorema Maestro.
    Considerar el espacio requerido por la pila de llamadas



# Dynamic Programming

Es una técnica de diseño de algoritmos que se utiliza para resolver problemas complejos dividiéndolos en subproblemas más pequeños, almacenando las soluciones intermedias para evitar cálculos repetidos. Es especialmente útil para problemas que tienen una estructura recurrente y cumplen con la propiedad de subproblemas superpuestos

Propiedades clave de DP:

    Subproblemas superpuestos:
        El problema puede descomponerse en subproblemas más pequeños, y los mismos subproblemas aparecen repetidamente.
        Ejemplo: En la secuencia de Fibonacci, F(n)=F(n−1)+F(n−2), F(n−1)F y F(n−2) se reutilizan.

    Optimalidad de subestructuras:
        La solución óptima del problema completo puede construirse a partir de las soluciones óptimas de sus subproblemas.
        Ejemplo: En el problema de la mochila (Knapsack), el valor óptimo total depende de las elecciones hechas en los subproblemas.

Técnicas de DP:

    Memorización (Top-Down):
        Resolver el problema de manera recursiva y almacenar los resultados en una tabla (cache) para reutilizarlos si se vuelven a calcular.
        Se utiliza cuando la solución natural del problema es recursiva.
    
    Tabulación (Bottom-Up):
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



# Greedy Algorithms

Técnica de diseño de algoritmos que toman decisiones en base a la mejor opción disponible en cada paso, con la esperanza de que esta estrategia lleve a una solución óptima para el problema completo

Características principales de los algoritmos voraces:

    Decisión local óptima:
        En cada paso, el algoritmo elige la mejor opción disponible sin preocuparse por cómo afectará a decisiones futuras.

    Sin retroceso:
        Una vez tomada una decisión, no se revisa ni se corrige; el algoritmo avanza hasta completar el problema.

    Estructura óptima:
        Funciona bien si el problema tiene la propiedad de subestructuras óptimas, es decir, que la solución óptima global se puede construir a partir de soluciones óptimas locales.

    Greedy-choice property:
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

Nota: Este enfoque funciona si las denominaciones de monedas forman un conjunto canónico, como en este caso. Si las denominaciones no cumplen esta propiedad, un enfoque voraz puede fallar.

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

Dado un conjunto de elementos, cada uno con un peso y un valor, y una capacidad máxima W, encontrar el valor máximo que se puede llevar. Se permite tomar fracciones de un elemento.

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



# Backtracking

Es una técnica de diseño de algoritmos que consiste en explorar todas las posibles soluciones para un problema de manera sistemática. Si una solución parcial no puede llevar a una solución completa válida, se retrocede (se hace un backtrack) y se prueba otra opción

Conceptos básicos de Backtracking:

    Construcción incremental:
        Se construyen soluciones paso a paso, añadiendo una pieza a la vez.

    Retroceso (Backtracking):
        Si en algún punto la solución parcial no es válida o no puede llevar a una solución completa, se deshace el último paso y se prueban otras opciones.

    Espacios de búsqueda:
        Representa todas las posibles configuraciones del problema. El objetivo del backtracking es explorar este espacio de manera eficiente.

    Criterio de poda:
        Durante la exploración, se descartan ramas del espacio de búsqueda que no pueden llevar a una solución válida. Esto se llama poda.

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

    Completo:
        Encuentra todas las soluciones posibles si el problema lo permite.

    Exhaustivo:
        Explora todas las combinaciones posibles en el peor de los casos.

    Eficiente con poda:
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



# Fuerza Bruta

Tambien conocido como algoritmo exhaustivo, es un enfoque general para resolver problemas computacionales en el que se prueban todas las posibles soluciones hasta encontrar la correcta (o todas las correctas, si el problema lo requiere).


Características:

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



# Ordenacion


# Insertion Sort 

Algoritmo de ordenación sencillo pero eficiente para arreglos pequeños o parcialmente ordenados. Su funcionamiento se basa en construir progresivamente una porción del arreglo que está ordenada, insertando un elemento a la vez en la posición correcta

Cómo funciona Insertion Sort:

    Dividimos conceptualmente el arreglo en dos partes:
        Una sublista ordenada (al principio, solo contiene el primer elemento).
        El resto del arreglo, que está desordenado.

    Tomamos un elemento del arreglo desordenado y lo insertamos en la posición correcta dentro de la sublista ordenada.

    Repetimos este proceso para todos los elementos hasta que el arreglo completo esté ordenado.

Pasos del Algoritmo

    Comenzamos con el segundo elemento del arreglo, ya que el primero se considera ordenado.
    Comparamos este elemento con los elementos de la sublista ordenada.
    Desplazamos hacia la derecha todos los elementos mayores que el elemento actual, para hacer espacio.
    Insertamos el elemento en su posición correcta.
    Repetimos para el resto del arreglo.

Ejemplo

Ordenemos el arreglo ([5,3,4,1,2]) usando Insertion Sort:

    Inicio: Consideramos que el primer elemento, ([5]), ya está ordenado.

    Paso 1: Insertar 3:
        Comparar 3 con 5:3<5.
        Mover 5 hacia la derecha: ([5,5]).
        Insertar 3: ([3,5,4,1,2]).

    Paso 2: Insertar 4:
        Comparar 4 con 5: 4<5.
        Mover 5 hacia la derecha: ([3,5,5]).
        Comparar 4 con 3: 4>3.
        Insertar 4: ([3,4,5,1,2]).

    Paso 3: Insertar 11:
        Comparar 1 con 5: 1<5, mover 5: ([3,4,5,5,2]).
        Comparar 1 con 4: 1<4, mover 4: ([3,4,4,5,2]).
        Comparar 1 con 3: 1<3, mover 3: ([3,3,4,5,2]).
        Insertar 1: ([1,3,4,5,2]).

    Paso 4: Insertar 2:
        Comparar 2 con 5: 2<5, mover 5: ([1,3,4,5,5]).
        Comparar 2 con 4: 2<4, mover 4: ([1,3,4,4,5]).
        Comparar 2 con 3: 2<3, mover 3: ([1,3,3,4,5]).
        Insertar 2: ([1,2,3,4,5]).

Resultado Final: [1,2,3,4,5].

Pseudocódigo de Insertion Sort

```
for i = 1 to n-1:
    key = arr[i]
    j = i - 1
    while j >= 0 and arr[j] > key:
        arr[j + 1] = arr[j]
        j = j - 1
    arr[j + 1] = key

```

Implementación en Python

```
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        # Mueve los elementos mayores que "key" una posición a la derecha
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        # Inserta "key" en la posición correcta
        arr[j + 1] = key

# Ejemplo
arr = [5, 3, 4, 1, 2]
insertion_sort(arr)
print("Arreglo ordenado:", arr)

```
Complejidad

    Caso peor: O(n^2)(arreglo ordenado en orden inverso).
    Caso promedio: O(n^2).
    Caso mejor: O(n) (arreglo ya ordenado).
    Espacio: O(1) porque no se usan estructuras adicionales.

Ventajas y desventajas

Ventajas:

    Fácil de implementar.
    Eficiente para arreglos pequeños o parcialmente ordenados.
    Es estable (preserva el orden relativo de elementos iguales).

Desventajas:

    Ineficiente para arreglos grandes debido a su complejidad cuadrática    



# Selection Sort

Algoritmo básico de ordenación, que funciona seleccionando repetidamente el elemento más pequeño (o más grande, dependiendo del orden deseado) de la parte no ordenada del arreglo y colocándolo en su posición correcta en la parte ordenada

Cómo funciona Selection Sort

    Dividimos el arreglo en dos partes:
        Una sublista ordenada al principio (inicialmente vacía).
        Una sublista no ordenada que contiene el resto del arreglo.

    En cada iteración, encontramos el elemento más pequeño (o más grande) de la sublista no ordenada.

    Intercambiamos ese elemento con el primer elemento de la sublista no ordenada, extendiendo la sublista ordenada.

    Repetimos el proceso hasta que toda la lista esté ordenada.

Pasos del Algoritmo

Ordenemos el arreglo ([64,25,12,22,11]) de forma ascendente:

    Inicio: La lista completa está desordenada.

    Paso 1:
        Encuentra el elemento más pequeño en ([64,25,12,22,11]), que es 11.
        Intercambia 11 con el primer elemento (64).
        Resultado: ([11,25,12,22,64]).

    Paso 2:
        Encuentra el elemento más pequeño en la parte no ordenada [25,12,22,64], que es 12.
        Intercambia 12 con el segundo elemento (25).
        Resultado: ([11,12,25,22,64]).

    Paso 3:
        Encuentra el elemento más pequeño en la parte no ordenada ([25,22,64]), que es 22.
        Intercambia 22 con el tercer elemento (25).
        Resultado: ([11,12,22,25,64]).

    Paso 4:
        Encuentra el elemento más pequeño en la parte no ordenada ([25,64]), que es 25.
        No es necesario intercambiar.
        Resultado: ([11,12,22,25,64]).

    Paso 5:
        Solo queda 64, que ya está en su posición correcta.

Resultado Final: [11,12,22,25,64].

Pseudocódigo de Selection Sort

```
for i = 0 to n-2:
    min_index = i
    for j = i+1 to n-1:
        if arr[j] < arr[min_index]:
            min_index = j
    Intercambia arr[i] con arr[min_index]
```

Implementación en Python

```
def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        # Encuentra el índice del elemento más pequeño
        min_index = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        # Intercambia el elemento más pequeño con el primer elemento no ordenado
        arr[i], arr[min_index] = arr[min_index], arr[i]

# Ejemplo
arr = [64, 25, 12, 22, 11]
selection_sort(arr)
print("Arreglo ordenado:", arr)

```

Complejidad

    Caso peor: O(n^2) (siempre comparamos todos los elementos).
    Caso promedio: O(n^2).
    Caso mejor: O(n^2) (incluso si ya está ordenado).
    Espacio: O(1), porque no usa estructuras adicionales.

Ventajas y desventajas

Ventajas:

    Fácil de implementar.
    No depende del estado inicial del arreglo (el tiempo de ejecución es el mismo en todos los casos).
    Usa un número reducido de intercambios (O(n)), útil cuando los intercambios son costosos.

Desventajas:

    Es ineficiente para arreglos grandes debido a su complejidad cuadrática.
    No es estable (puede cambiar el orden relativo de elementos iguales).

Comparación con otros algoritmos

    Insertion Sort vs. Selection Sort:
        Insertion Sort es más eficiente en arreglos parcialmente ordenados (O(n)) en el mejor caso).
        Selection Sort tiene un número fijo de iteraciones y no se adapta a un arreglo ya ordenado.

    Bubble Sort vs. Selection Sort:
        Ambos tienen una complejidad de O(n^2), pero Selection Sort es más eficiente en términos de intercambios



# Bubble Sort

Algoritmos de ordenación más simples. Funciona comparando elementos adyacentes y permutándolos si están en el orden incorrecto, de manera que los valores más grandes (o más pequeños, dependiendo del orden deseado) "burbujen" hacia el final del arreglo en cada iteración.

Cómo funciona Bubble Sort

    Se recorre el arreglo múltiples veces.
    En cada pasada, se comparan elementos consecutivos:
        Si están en el orden incorrecto, se intercambian.
    Después de cada pasada, el elemento más grande de la porción no ordenada queda en su posición final al final del arreglo.
    Este proceso se repite hasta que el arreglo esté completamente ordenado.

Pasos del Algoritmo

Ordenemos el arreglo ([5,3,8,6,2]) de forma ascendente usando Bubble Sort:

    Inicio: Arreglo desordenado: ([5,3,8,6,2]).

    Primera pasada:
        Comparar 5 y 3: 5>3, los intercambiamos. → [3,5,8,6,2].
        Comparar 5 y 8: 5<8, no hacemos nada.
        Comparar 8 y 6: 8>6, los intercambiamos. → [3,5,6,8,2].
        Comparar 8 y 2: 8>2, los intercambiamos. → [3,5,6,2,8].
        Al final de esta pasada, el 8 está en su posición correcta.

    Segunda pasada:
        Comparar 3 y 5: 3<5, no hacemos nada.
        Comparar 5 y 6: 5<6, no hacemos nada.
        Comparar 6 y 2: 6>2, los intercambiamos. → [3,5,2,6,8].
        El 6 ahora está en su posición correcta.

    Tercera pasada:
        Comparar 3 y 5: 3<5, no hacemos nada.
        Comparar 5 y 2: 5>2, los intercambiamos. → ([3,2,5,6,8]).
        El 5 está en su posición correcta.

    Cuarta pasada:
        Comparar 3 y 2: 3>2, los intercambiamos. → ([2,3,5,6,8]).
        El 3 está en su posición correcta.

Resultado Final: [2,3,5,6,8].

Pseudocódigo de Bubble Sort

```
para i desde 0 hasta n-1:
    para j desde 0 hasta n-i-2:
        si arr[j] > arr[j+1]:
            intercambiar arr[j] con arr[j+1]

```

Implementación en Python

```
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        # Últimos i elementos ya están ordenados
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                # Intercambiar si están en el orden incorrecto
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

# Ejemplo
arr = [5, 3, 8, 6, 2]
bubble_sort(arr)
print("Arreglo ordenado:", arr)

```

Optimización de Bubble Sort

En su forma básica, Bubble Sort realiza n−1 pasadas, incluso si el arreglo ya está ordenado antes. Podemos optimizarlo añadiendo una bandera para detectar si hubo intercambios durante una pasada:

    Si no hubo intercambios, significa que el arreglo ya está ordenado y podemos detenernos.

Implementación optimizada:

```
def optimized_bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        # Si no hubo intercambios, el arreglo ya está ordenado
        if not swapped:
            break

# Ejemplo
arr = [5, 3, 8, 6, 2]
optimized_bubble_sort(arr)
print("Arreglo ordenado:", arr)

```
Complejidad

    Caso peor: O(n^2) (arreglo ordenado en orden inverso).
    Caso promedio: O(n^2).
    Caso mejor: O(n) (si el arreglo ya está ordenado, con la versión optimizada).
    Espacio: O(1), ya que es un algoritmo in-place.

Ventajas y Desventajas

Ventajas:

    Fácil de implementar y entender.
    Es un algoritmo estable (preserva el orden relativo de elementos iguales).

Desventajas:

    Muy ineficiente para arreglos grandes debido a su complejidad cuadrática.
    Generalmente no se usa en la práctica para problemas grandes.

Comparación con otros algoritmos

    Bubble Sort vs. Insertion Sort:
        Insertion Sort es más eficiente en la mayoría de los casos, especialmente para arreglos parcialmente ordenados.
    
    Bubble Sort vs. Selection Sort:
        Selection Sort hace menos intercambios, pero ambos tienen la misma complejidad temporal



# Merge Sort

Algoritmo de ordenación basado en la técnica de divide y conquista. Es eficiente, estable y particularmente útil para ordenar grandes conjuntos de datos

Cómo funciona Merge Sort

    División:
        Divide el arreglo en dos mitades de manera recursiva hasta que cada subarreglo tenga solo un elemento (un elemento está, por definición, ordenado).
    
    Conquista:
        Combina (merge) las dos mitades ordenadas en un solo arreglo, asegurando que el resultado esté ordenado.

Flujo general:

    Divide el arreglo principal en mitades hasta que tengas arreglos de tamaño 1.
    Fusiona (merge) las mitades en orden, asegurándote de mantener el ordenamiento.

Ejemplo

Supongamos que queremos ordenar el arreglo ([38,27,43,3,9,82,10]):

    División:
        [38,27,43,3,9,82,10]
        [38,27,43] y [3,9,82,10]
        [38], [27,43] y [3,9], [82,10]
        [38], [27], [43], [3], [9], [82], [10]

    Fusión:
        Combina [27] y [43] → [27,43]
        Combina [3] y [9] → [3,9]
        Combina [82] y [10] → [10,82]
        Combina [38] y [27,43] → [27,38,43]
        Combina [3,9]y [10,82] → [3,9,10,82]
        Combina [27,38,43] y [3,9,10,82] → [3,9,10,27,38,43,82]

Resultado Final: [3,9,10,27,38,43,82].

Pseudocódigo de Merge Sort

```
MergeSort(arr):
    si la longitud de arr es 1:
        devolver arr
    dividir arr en dos mitades: left y right
    sorted_left = MergeSort(left)
    sorted_right = MergeSort(right)
    devolver Merge(sorted_left, sorted_right)

Merge(left, right):
    crear un arreglo vacío merged
    mientras left y right no estén vacíos:
        si left[0] < right[0]:
            agregar left[0] a merged y eliminarlo de left
        de lo contrario:
            agregar right[0] a merged y eliminarlo de right
    agregar los elementos restantes de left y right a merged
    devolver merged

```

Implementación en Python

```
def merge_sort(arr):
    # Si el arreglo tiene un solo elemento, ya está ordenado
    if len(arr) <= 1:
        return arr
    
    # Divide el arreglo en dos mitades
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    # Combina (merge) las mitades ordenadas
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    # Combina los dos arreglos en orden
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    # Agrega los elementos restantes de cada mitad
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Ejemplo
arr = [38, 27, 43, 3, 9, 82, 10]
sorted_arr = merge_sort(arr)
print("Arreglo ordenado:", sorted_arr)

```

Complejidad

    Tiempo:
        División: Se divide el arreglo log⁡2(n) veces.
        Fusión: Cada paso combina n elementos.
        Complejidad total: O(n log ⁡n).

    Espacio:
        Requiere espacio adicional para los arreglos temporales durante la fusión.
        Espacio total: O(n).

Ventajas y Desventajas

Ventajas:

    Eficiente: O(n log⁡ n) incluso en el peor caso.
    Estable: Preserva el orden relativo de los elementos iguales.
    Se adapta bien a grandes conjuntos de datos.

Desventajas:

    Requiere espacio adicional (O(n)), lo que lo hace menos adecuado para sistemas con recursos limitados.
    Es más complejo de implementar que algoritmos simples como Insertion Sort o Bubble Sort.

Comparación con otros algoritmos

    Merge Sort vs. Quick Sort:
        Ambos tienen O(nlogn) de complejidad promedio.
        Merge Sort es estable y tiene un rendimiento consistente.
        Quick Sort es más rápido en la práctica, pero tiene un peor caso O(n2) si no se elige un buen pivote.

    Merge Sort vs. Heap Sort:
        Merge Sort es estable, pero requiere espacio adicional.
        Heap Sort no es estable, pero no requiere espacio adicional (O(1)O(1))



# Quick Sort

Algoritmo de ordenación eficiente basado en la técnica de divide y conquista. Es ampliamente utilizado debido a su excelente rendimiento en la práctica, a pesar de que su peor caso tiene una complejidad mayor que O(n log⁡ n).

Cómo funciona Quick Sort

    Elegir un pivote:
        Se selecciona un elemento del arreglo como el pivote. El pivote puede ser cualquier elemento, pero comúnmente se usa el primero, el último o un elemento aleatorio.

    Particionar el arreglo:
        Reorganiza los elementos del arreglo de manera que:
            Los elementos menores al pivote queden a su izquierda.
            Los elementos mayores o iguales al pivote queden a su derecha.

    Aplicar recursión:
        Se aplica Quick Sort recursivamente a las sublistas izquierda y derecha (sin incluir el pivote, que ya está en su posición final).

    Reunir el resultado:
        Después de ordenar ambas sublistas, el arreglo completo estará ordenado.

Ejemplo

Ordenemos el arreglo [10,80,30,90,40,50,70] usando Quick Sort de forma ascendente:

    Primer pivote: Elegimos 70.
        Partición: [10,30,40,50] | 70 | [80,90].

    Lado izquierdo ([10,30,40,50]):
        Pivote: 50.
        Partición: [10,30,40] | 50.

    Sublista [10,30,40]:
        Pivote: 40.
        Partición: [10,30] | 40.

    Sublista [10,30]:
        Pivote: 30.
        Partición: [10] | 30.

    Lado derecho ([80,90]):
        Pivote: 90.
        Partición: [80] | 90.

Resultado Final: [10,30,40,50,70,80,90].

Pseudocódigo de Quick Sort

```
QuickSort(arr, low, high):
    si low < high:
        pivot_index = Particionar(arr, low, high)
        QuickSort(arr, low, pivot_index - 1)  # Sublista izquierda
        QuickSort(arr, pivot_index + 1, high)  # Sublista derecha

Particionar(arr, low, high):
    pivote = arr[high]
    i = low - 1
    para j desde low hasta high - 1:
        si arr[j] <= pivote:
            i += 1
            intercambiar arr[i] con arr[j]
    intercambiar arr[i + 1] con arr[high]
    devolver i + 1

```

Implementación en Python

```
def quick_sort(arr, low, high):
    if low < high:
        # Encuentra el índice del pivote después de la partición
        pivot_index = partition(arr, low, high)
        # Ordena las sublistas izquierda y derecha
        quick_sort(arr, low, pivot_index - 1)
        quick_sort(arr, pivot_index + 1, high)

def partition(arr, low, high):
    pivot = arr[high]  # Usamos el último elemento como pivote
    i = low - 1  # Índice del menor elemento
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    # Coloca el pivote en su posición correcta
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

# Ejemplo
arr = [10, 80, 30, 90, 40, 50, 70]
quick_sort(arr, 0, len(arr) - 1)
print("Arreglo ordenado:", arr)

```

Complejidad

    Caso promedio:
        La lista se divide aproximadamente por la mitad en cada paso.
        Complejidad: O(nlog⁡n).

    Caso peor:
        Si el pivote siempre es el elemento más grande o más pequeño, el arreglo no se divide de forma equilibrada.
        Complejidad: O(n^2).

    Caso mejor:
        Cuando el pivote divide perfectamente el arreglo.
        Complejidad: O(nlog⁡n).

    Espacio:
        Espacio adicional: O(log⁡n) para la pila de recursión en el mejor caso, O(n) en el peor caso.

Ventajas y Desventajas

Ventajas:

    Muy rápido en la práctica, especialmente para datos grandes.
    Es in-place (no requiere espacio adicional significativo).
    Tiene un rendimiento promedio O(nlog⁡n), mejor que algoritmos como Bubble Sort y Selection Sort.

Desventajas:

    No es estable (no conserva el orden relativo de elementos iguales).
    En el peor caso, tiene complejidad O(n^2) (aunque esto puede mitigarse con optimizaciones como la elección de pivote aleatorio o "mediana de tres").

Optimización de Quick Sort

    Elección de pivote:
        Usar el elemento medio o una mediana de tres (primero, último, medio) para minimizar la probabilidad del peor caso.

    Evitar la recursión en arreglos pequeños:
        Usar Insertion Sort para subarreglos pequeños (<10).

Comparación con otros algoritmos

    Quick Sort vs. Merge Sort:
        Quick Sort es más rápido en promedio para la mayoría de los datos debido a menores costos de memoria.
        Merge Sort es estable y más adecuado cuando se necesita estabilidad o se trabaja con datos muy grandes en discos externos.

    Quick Sort vs. Heap Sort:
        Quick Sort es generalmente más rápido debido a mejores patrones de acceso a memoria.
        Heap Sort tiene complejidad O(nlog⁡n)O(nlogn) incluso en el peor caso


# Counting Sort

Algoritmo de ordenación que no se basa en comparaciones. En su lugar, clasifica los elementos contando cuántas veces aparece cada valor. Es particularmente eficiente cuando los valores a ordenar son enteros en un rango pequeño

Cómo funciona Counting Sort

Idea básica:

    Cuenta ocurrencias:
        Se cuenta cuántas veces aparece cada valor en el arreglo.
    
    Acumula conteos:
        Se calcula la posición final de cada valor en el arreglo ordenado usando los conteos acumulativos.
    
    Coloca en el arreglo ordenado:
        Los elementos se colocan en su posición correcta en el arreglo resultante.

Pasos detallados:

    Encuentra el rango de los valores en el arreglo (min y max).
    Crea un arreglo auxiliar countcount de tamaño igual al rango (max−min+1) y llena con ceros.
    Cuenta las apariciones de cada valor y actualiza count.
    Calcula los conteos acumulativos en count, lo que indica las posiciones finales.
    Construye el arreglo ordenado usando count para determinar la posición de cada elemento.

Ejemplo

Dado el arreglo [4,2,2,8,3,3,1]:

    Encuentra el rango:
        Mínimo: 1, Máximo: 8.

    Cuenta ocurrencias:
        count=[0,1,2,2,1,0,0,1] (índices representan valores de 1 a 8).

    Acumula conteos:
        count=[0,1,3,5,6,6,6,7].

    Coloca en el arreglo ordenado:
        Usamos los valores en count para colocar los elementos en su posición:
            Ordenado: [1,2,2,3,3,4,8].

Pseudocódigo

```
CountingSort(arr):
    encontrar el valor mínimo y máximo en arr
    rango = max - min + 1
    crear un arreglo count de tamaño rango y llenarlo con ceros
    
    para cada elemento en arr:
        incrementar count[elemento - min]
    
    acumular los conteos en count
    
    crear un arreglo result del mismo tamaño que arr
    para cada elemento en arr (de derecha a izquierda para estabilidad):
        posicion = count[elemento - min] - 1
        colocar elemento en result[posicion]
        decrementar count[elemento - min]
    
    devolver result

```

Implementación en Python

```
def counting_sort(arr):
    # Encuentra el valor mínimo y máximo
    min_val = min(arr)
    max_val = max(arr)
    range_val = max_val - min_val + 1

    # Inicializa el arreglo de conteo
    count = [0] * range_val

    # Cuenta las ocurrencias de cada elemento
    for num in arr:
        count[num - min_val] += 1

    # Acumula los conteos
    for i in range(1, len(count)):
        count[i] += count[i - 1]

    # Construye el arreglo ordenado
    sorted_arr = [0] * len(arr)
    for num in reversed(arr):  # Procesa de derecha a izquierda para estabilidad
        pos = count[num - min_val] - 1
        sorted_arr[pos] = num
        count[num - min_val] -= 1

    return sorted_arr

# Ejemplo
arr = [4, 2, 2, 8, 3, 3, 1]
sorted_arr = counting_sort(arr)
print("Arreglo ordenado:", sorted_arr)

```

Complejidad

    Tiempo:
        Contar elementos: O(n).
        Acumular conteos: O(k), donde k es el rango de los valores (max−min+1).
        Construir el arreglo ordenado: O(n).
        Complejidad total: O(n+k).

    Espacio:
        Se requiere espacio adicional para el arreglo de conteo y el arreglo ordenado.
        Complejidad espacial: O(n+k).

Ventajas y Desventajas

Ventajas:

    Muy eficiente para valores en un rango pequeño (k≪n).
    Estable (mantiene el orden relativo de elementos iguales).
    Tiene complejidad O(n+k), mejor que algoritmos basados en comparaciones como Merge Sort o Quick Sort en ciertos casos.

Desventajas:

    No es in-place (requiere espacio adicional).
    No es práctico si el rango de valores (k) es grande en comparación con el tamaño del arreglo (n).
    Solo funciona para datos discretos (como enteros).

Cuándo usar Counting Sort

    Si los valores son enteros y están en un rango pequeño.
    Cuando se necesita un algoritmo estable.
    En aplicaciones como ordenamiento de edades, calificaciones, colores, etc



# Radix Sort

Algoritmo de ordenación no basado en comparaciones que organiza los elementos procesando cada dígito de forma individual. Se suele usar junto con un algoritmo como Counting Sort para clasificar los dígitos en cada paso. Es particularmente útil para ordenar números enteros o cadenas cortas


Cómo funciona Radix Sort

Idea básica:

    Ordena los números de acuerdo a su dígito menos significativo (LSD, por sus siglas en inglés).
    Luego, ordena por el siguiente dígito más significativo.
    Repite el proceso hasta el dígito más significativo (MSD).
    Al final del proceso, el arreglo estará completamente ordenado.

Requisitos:

    Se asume que los elementos son números o pueden representarse como tales (e.g., cadenas tratadas como secuencias de caracteres).
    Usa un algoritmo estable (como Counting Sort) para ordenar los elementos en cada paso.

Ejemplo

Supongamos que queremos ordenar el arreglo [170,45,75,90,802,24,2,66] en orden ascendente:

    Ordena por el dígito de las unidades:
        Entrada: [170,45,75,90,802,24,2,66].
        Salida: [802,2,24,45,75,66,170,90].

    Ordena por el dígito de las decenas:
        Entrada: [802,2,24,45,75,66,170,90].
        Salida: [802,2,24,170,45,66,75,90][802,2,24,170,45,66,75,90].

    Ordena por el dígito de las centenas:
        Entrada: [802,2,24,170,45,66,75,90].
        Salida: [2,24,45,66,75,90,170,802].

Resultado Final: [2,24,45,66,75,90,170,802].

Pseudocódigo

```
RadixSort(arr):
    encontrar el valor máximo en arr para determinar el número de dígitos
    para cada posición de dígito (unidad, decena, centena, etc.):
        aplicar un algoritmo estable (e.g., Counting Sort) para ordenar arr según ese dígito

```

Implementación en Python

```
def counting_sort_for_radix(arr, exp):
    n = len(arr)
    output = [0] * n  # Arreglo para resultados
    count = [0] * 10  # Cuenta dígitos (0-9)

    # Cuenta ocurrencias de cada dígito
    for i in range(n):
        index = (arr[i] // exp) % 10
        count[index] += 1

    # Calcula los conteos acumulativos
    for i in range(1, 10):
        count[i] += count[i - 1]

    # Construye el arreglo ordenado basado en el dígito actual
    for i in range(n - 1, -1, -1):
        index = (arr[i] // exp) % 10
        output[count[index] - 1] = arr[i]
        count[index] -= 1

    # Copia el arreglo ordenado al original
    for i in range(n):
        arr[i] = output[i]

def radix_sort(arr):
    # Encuentra el número máximo para saber cuántos dígitos tiene
    max_val = max(arr)
    exp = 1  # Inicializa el exponente (unidad)

    # Ordena por cada dígito (unidad, decena, centena, etc.)
    while max_val // exp > 0:
        counting_sort_for_radix(arr, exp)
        exp *= 10

# Ejemplo
arr = [170, 45, 75, 90, 802, 24, 2, 66]
radix_sort(arr)
print("Arreglo ordenado:", arr)

```

Complejidad

    Tiempo:
        Si d es el número de dígitos del elemento más grande y nn es el tamaño del arreglo:
            Cada paso de Counting Sort toma O(n+k), donde k es el rango de los dígitos (k=10 para números decimales).
            Hay d pasos, uno por cada dígito.
            Complejidad total: O(d⋅(n+k)), que se simplifica a O(n⋅d) cuando k es constante.

    Espacio:
        Requiere espacio adicional para el arreglo count y el arreglo temporal output.
        Complejidad espacial: O(n+k).

Ventajas y Desventajas

Ventajas:

    Muy eficiente para arreglos con enteros largos o cadenas de tamaño similar.
    Tiene complejidad O(n⋅d), mejor que algoritmos basados en comparaciones (O(nlog⁡n)) en ciertos casos.
    Es estable, ya que mantiene el orden relativo de elementos iguales.

Desventajas:

    Solo funciona para datos que se pueden descomponer en dígitos, como enteros o cadenas.
    Puede requerir mucho espacio adicional para arreglos grandes.
    El rendimiento depende del número de dígitos (d), por lo que puede no ser ideal para datos con valores extremadamente grandes.

Cuándo usar Radix Sort

    Los datos son enteros con un rango limitado de dígitos.
    Se necesita estabilidad.
    Los datos ya están parcialmente ordenados (en este caso, Radix Sort es muy rápido)


 

