# Softw

Todos los elementos de softw tienen un estado. 

Primero se hace la parte estática y luego la parte dinámica.

La parte estática consiste en setear el estado inicial/predeterminado de los elementos. 

Se configuran los datos, las rutas. 

La parte dinámica consiste en agregar eventos a los estados de los elementos. 

Se configuran las interacciones. 



#### 1. Plan General: 

1. Expresiones en lenguaje natural: describen los pasos que debería seguir el programa, elementos que los representan. 

2. pseudocódigo: Estructuras para representarlos

3. Diagramas

4. Documentacion: Comentarios significativos, expresivos y explicativos

5. Paradigmas: imperativo, funcional y oop

6. Algoritmos

7. Patrones de diseño


#### 2. Planteo: 

1. Entender el problema: entender qué se te está pidiendo resolver

Restricciones (tamaño del input, límite de tiempo, etc.).

Comprende el formato de entrada y salida esperado.


2. Analizar ejemplos concretos

Crea manualmente ejemplos de entrada y salida para entender mejor el problema.

Observa si hay repetición de pasos, relaciones entre elementos o propiedades específicas.

Intenta derivar una lógica que explique cómo se obtiene el resultado a partir de los ejemplos.


3. Descomponer el problema

Divide el problema en partes más pequeñas:
Identifica tareas simples que puedan combinarse para resolver el problema.

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


#### 3. Técnicas para Algoritmos:

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


#### 4. Comprensión profunda - mejoras: 

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


Dividir el problema en partes más pequeñas:

En lugar de abordar el problema completo, descomponlo en tareas más simples.
Por ejemplo, si tienes que ordenar una lista y luego eliminar duplicados:
Paso 1: Escribe un algoritmo para ordenar la lista.
Paso 2: Escribe otro para eliminar duplicados.

#### Escribir pseudocódigo:
Antes de escribir código real, describe la solución en lenguaje natural o en un formato de pseudocódigo.
Ejemplo para invertir una cadena:

##### Toma la cadena de entrada.
##### Crea una nueva cadena vacía.
##### Itera por la cadena de entrada desde el final hasta el principio.
##### Agrega cada carácter a la nueva cadena.
##### Devuelve la nueva cadena.

Implementar y probar por partes
Escribe y prueba cada componente de tu solución de forma incremental.
Evita escribir todo el código de una sola vez sin probarlo.

Refactorizar
Una vez que la solución

2. Plan 

¿Has resuelto un problema similar antes?
¿Puedes reducir el problema a uno más simple?
¿Existen patrones o conexiones con problemas conocidos?

Resolver un caso más simple o particular.
Trabajar hacia atrás (de la solución al problema).
Identificar patrones.
Dividir el problema en partes más manejables.


Planificación:

La planificación de un software evita problemas posteriores que pueden surgir al combinar código, funciones, interfaces, etc. 
Tendríamos que factorizar todo el código de golpe buscando que código sea más general. 

Conceptos: 

1. Interfaz: 
Funciones que interactúan entre si. 

2. Función: 
Hace una acción determinada o fija pero podemos cambiar esto para que varie y se adapte a cualquier cosa.

3. Generalización: 
Agregar parametros que generalizen y describan una acción no determinada, 
Se adaptará a cualquier valor le asignemos al parámetro.  

4. Encapsulamiento: 
Envolver código en una función que describan acciones y poder reutilizarlas. 


Diseño de interfaz: 

1. Cómo se utilizará la función: 

2. Cuáles son sus parámetros. 

3. Qué hace la función.  

4. Valor de retorno. 

##### Una función es "limpia" si permite a la llamada ejecutar la acción sin tener que conocer detalles innecesarios. 


Proceso para escribir programas: 

Encapsulamiento y generalización: 

1. Escribir el programa sin defiinir funciones. 

2. Cuando funciona, identificar la parte coherente; encapsularla en una función y darle un nombre. 

3. Generalizarla agregando parámetros. 

4. Repetir paso 1 y 3 hasta tener un conjunto de funciones eficacez. 

5. Refactorización: 

Si tenemos código similar en muchos lugares, refactorizarlo dentro de una función general apropiada. 

Existen procesos alternativos más eficaces, pero ayuda a dividir un programa en funciones, diseñarlo y progresar. 


Análisis de problemas: 

1. Conceptos claves -> Conceptos relacionados 
Pueden ser objetos, entidades, operaciones o relaciones relevantes.
Pueden agruparse en una misma entidad o clase, deben tener características y comportamientos similares.

2. Usar clases (POO) o estructuras de datos para representar los conceptos identificados. 
Define atributos y métodos que describan las características y comportamientos de cada clase.

3. Definir interfaces: 	
Que especifiquen cómo interactuar con ellas, claramente. 

Oculta los detalles internos y expón solo los métodos y atributos necesarios para el uso externo.

Interfaces: 
Define un conjunto de métodos y/o atributos que especifican cómo interactuar con un objeto o una clase.
Establece un contrato que debe cumplirse por cualquier clase que la implemente. 
Define qué métodos deben estar disponibles y cómo deben utilizarse, pero no proporciona su implementación concreta.
Promueven la abstracción, el encapsulamiento y proporcionan una forma de comunicarse con los objetos sin preocuparse por su implementación interna. 
Se puede usar clases abstractas o interfaces en sí mismas y luego implementarlas en diferentes clases. 
Facilita la sustitución de una implementación con otra y promueve la modularidad y la reutilización de código.

4. Herencia o composición: 
Cuando sea apropiado, para establecer relaciones entre las clases y reutilizar código. 

Herencia: 
Permite crear nuevas clases basadas en una clase existente

##### Composición: 
Combina múltiples clases para formar una nueva clase.

5. Abstracción lógica en común: 
Identificar la lógica común entre diferentes clases o métodos y encapsúlala en funciones o clases separadas.
Promueve la reutilización de código y evita la duplicación.

6. Revisa y mejora la abstracción: 	
Las clases y estructuras de datos deben representar de manera precisa y eficiente los conceptos y relaciones del problema.

7. Pruebas: 
Verificar que tu abstracción funcione correctamente y resuelva el problema de manera esperada.
Realiza ajustes y mejoras según sea necesario.

8. Modularidad: 
Componentes pequeños y bien definidos puedan ser entendidos y modificados de forma independiente, facilitando el mantenimiento. 

Código modular: 

Dividir un programa en módulos más pequeños y bien definidos que realizan tareas específicas. 
Cada módulo tiene una responsabilidad clara y se puede desarrollar, probar y mantener de forma independiente.
Los módulos se pueden componer para construir el programa completo.
Cada módulo se centra en una tarea o funcionalidad específica, lo que facilita la lectura, el mantenimiento y la depuración del código.
Se pueden reutilizar en diferentes proyectos o contextos, lo que ahorra tiempo y esfuerzo
Se pueden implementar utilizando clases, funciones, paquetes o cualquier otro mecanismo proporcionado por el lenguaje de programación.
Es importante definir interfaces claras entre los módulos para establecer cómo interactúan y se comunican entre sí. Esto permite que los módulos sean independientes unos de otros y se puedan modificar o reemplazar sin afectar a otros módulos.

9. Revisa y refactoriza: 
Cuando las necesidades cambian, Asegúrate que la abstracción siga siendo eficaz y cumpla con los requisitos actuales.


Funciones

Es un bloque de código que realiza una tarea específica y se puede invocar desde cualquier parte del programa.
Se definen utilizando la palabra clave def, seguida del nombre de la función y paréntesis que pueden contener argumentos.
Los argumentos son valores que se pasan a la función para realizar operaciones específicas que se escriben dentro del cuerpo de la función. 
Las operaciones deben tener el nombre del argumento para que se efectúen. 
Las funciones pueden devolver un valor utilizando la palabra clave return.
Una vez definida una función, se puede llamar (o invocar) utilizando su nombre y pasando los argumentos necesarios.
Recursión: Las funciones pueden llamarse a sí mismas, lo que permite la implementación de algoritmos recursivos para problemas que se resuelven de manera iterativa.

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


##### Matemática: 

1. Problema: 
Qué se quiere resolver, investigar. 

2. Formulación: 
Lenguaje matemático. 

3. Definición de variables: 
Identificación de las relevantes. 

4. Condiciones y restricciones. 

5. Observación: 
Cualitativas/Descriptivas, Cuantitativas/Medibles. 

6. Hipótesis: 
Explica, responde las preguntas. 

6. Experimentación: 
Prueba hipótesis.

7. Recopilación y análisis de Datos: 
Datos objetivos que apoyan o refutan la hipótesis. 

8. Conclusiones: 
Basadas en los datos extraídos. 

9. Publicación y Revisión: 
Los pares validan o refutan la investigación. 

10. Teoría Científica: 
Hipótesis repetida y validada entre pares por multiples líneas de evidencia. 

.....

1. Texto: 
Ideas, unión, lógica. 

2. Lenguaje Matemático: 

Variables: 	
Simbolos. 

Asignación: 
Expresiones matemáticas. 

3. R3: 
Solo cuando variables tienen relación directa (+, +) o inversa (-, -).

Compuesta: 
Multiples incognitas. 

Directa: fracción directa. 
Inversa: fracción inversa. 

Despejamos incognitas y aplicamos proporcionalidad. 

4. Proporcionalidad: 

Razón:
Cociente entre dos cantidades comparables 

Proporción: 
Igualdad entre dos razones. 

a/b = c/d
a*d = b*c 

5. Formula: 

Caso particular y general: 
Descubrir la lógica implícita, extrear las ideas de su escencia. 

Elementos, operaciones, combinaciones.

6. Pseudo código. 

7. Código. 

8. Verificación/ Testing. 


Código: 

##### Algoritmo: Finito, definido, efectivo. 

entrada -> operaciones, cálculos -> salida

Data, contro, return, func, obj, design patt, abs e interfac, excepciones, concurrencia, lect y escrit, close. 


Debug: 

Print. 
Incremental. 
Guardián. 
Tipos de errores. 
Contaminación Scope. 
Iniciar en el error. 
Breackpoints. 
Logging. 
Stack Trace. 
Test. 
Qué debería hacer, Qué programar .

Proceso: 

	1. Reproducción del error. 

	2. Diagnóstico. 

	3. Corrección

	4. Pruebas. 

	Breackpoints. 

	Steps: 

		Flujo del programa. 

	Watch Vars. 

	Stack Traces: 

		Pila de llamadas. 
 

3. Ejecutar el plan

Lleva a cabo el plan que diseñaste en el paso anterior.
Asegúrate de seguir los pasos de forma lógica y ordenada.
Verifica cada paso mientras avanzas para evitar errores.

Pregunta clave:
¿El plan funciona como esperabas?

4. Revisión

¿Es correcta la solución?
¿Puedes verificar los resultados?
¿El método utilizado es el más eficiente?
¿Podrías resolver el problema de otra manera?
¿Qué aprendiste de este problema que podría ayudarte en otros?


Ejemplo práctico del enfoque:
Supongamos que el problema es determinar la suma de los primeros nn números naturales.

1. Comprender el problema:
	Entrada: Un número natural nn.
	Salida: La suma 1+2+⋯+n1+2+⋯+n.

2. Idear un plan:
	Explora ejemplos pequeños (n=3n=3, n=4n=4).
	Busca patrones en los resultados.
	Considera una fórmula general.

3. Ejecutar el plan:
	Usa la fórmula derivada: suma=n(n+1)2suma=2n(n+1)​.

4. Revisar:
	Verifica con ejemplos (n=5n=5: 1+2+3+4+5=151+2+3+4+5=15, y 5(5+1)2=1525(5+1)​=15).


Heurísticas para resolver problemas:

Son estrategias generales o "reglas empíricas" para abordar problemas cuando no se tiene una solución directa. 

1. Dibuja un diagrama.
	Visualizar el problema puede ayudarte a comprenderlo mejor.

2. Introduce notación.
	Usa símbolos y ecuaciones para simplificar y organizar la información.

3. Explora casos específicos.
	Resuelve versiones más simples del problema para identificar patrones o estrategias.

4. Divide y vencerás.
	Divide el problema en partes más pequeñas y resuélvelas individualmente.

5. Trabaja hacia atrás.
	Parte del resultado deseado y retrocede hasta los datos iniciales.

6. Supón que ya lo has resuelto.
	Imagina cómo se vería la solución y trabaja desde ahí.


Estrategias generales de solución:

Pólya describe algunas estrategias universales que pueden ser útiles en cualquier contexto:

1. Simplificar.
	Si el problema parece abrumador, simplifícalo para enfocarte en sus partes esenciales.

2. Generalizar.
	Busca resolver una versión más amplia del problema para abarcar más casos.

3. Invertir el problema.
	Cambia tu perspectiva; por ejemplo, en geometría, prueba a girar o reflejar la figura.

 
#### 5. CS50

1. Comprender el problema con claridad
Desglosar el problema: El primer paso siempre es comprenderlo completamente antes de empezar a escribir código. Lea atentamente el enunciado del problema y piense en las entradas que tiene y las salidas esperadas.
Simplificar el problema: Intente identificar las partes clave del problema. ¿Puede dividirlo en subproblemas más pequeños? ¿Existe una versión más sencilla del problema que pueda resolverse primero?
Aclarar los casos límite: Considere cualquier caso especial, como entradas vacías, entradas extremadamente grandes u otras condiciones límite que podrían romper el algoritmo.

2. Pseudocódigo y Diseño de Algoritmos
Planificar antes de codificar: En CS50, se recomienda pensar en pseudocódigo antes de empezar a codificar. Anote los pasos del algoritmo en lenguaje sencillo para aclarar su razonamiento.
Pasos para la resolución de problemas:
Defina el objetivo: ¿Qué intenta lograr exactamente?
##### Elija una estrategia: Según el problema, considere enfoques como fuerza bruta, divide y vencerás, algoritmos voraces, programación dinámica, etc.
Escriba pseudocódigo: Esto le permite centrarse en el flujo lógico de la solución sin preocuparse por la sintaxis.

3. Elija las Estructuras de Datos Adecuadas
##### Estructuras de datos eficientes: CS50 enfatiza la importancia de elegir la estructura de datos adecuada para el problema en cuestión, ya que esto puede afectar drásticamente el rendimiento de su algoritmo. Por ejemplo:
Matrices y Listas: Excelentes para datos secuenciales, pero ineficientes para operaciones de búsqueda (a menos que estén ordenados).
Tablas hash (Diccionarios/Mapas): Eficientes para búsquedas, inserciones y eliminaciones.
Pilas y colas: Útiles para problemas que requieren operaciones LIFO (último en entrar, primero en salir) o FIFO (primero en entrar, primero en salir).
Árboles: En particular, árboles de búsqueda binaria para una búsqueda, inserción y eliminación eficientes.
Gráficos: Para representar datos interconectados (como redes sociales u hojas de ruta).

4. Análisis de complejidad temporal y espacial
##### Notación Big O: Aprenda a evaluar la complejidad temporal y espacial de sus algoritmos. Esta es una parte fundamental de CS50 y es esencial para la resolución eficiente de problemas. El objetivo es reducir la complejidad computacional innecesaria (O(n²), O(2^n), etc.) y optimizar para tiempos de ejecución más rápidos.
Optimizar algoritmos: CS50 enseña que, a menudo, hay más de una manera de resolver un problema y que se debe buscar el enfoque más eficiente. Por ejemplo:
Algoritmos de ordenamiento: Ordenamiento de burbuja vs. Ordenamiento por fusión (O(n²) vs. O(n log n)).
Algoritmos de búsqueda: Búsqueda lineal vs. Búsqueda binaria (O(n) vs. O(log n)).

5. Divide y vencerás
Divide los problemas grandes en problemas más pequeños: Divide y vencerás es un paradigma clave utilizado en muchos algoritmos eficientes (como el ordenamiento por fusión o el ordenamiento rápido). Al dividir los problemas en subproblemas más pequeños, a menudo se pueden resolver recursivamente y combinar los resultados de forma eficiente.

6. Iterar y probar
##### Empieza por lo simple: No intentes crear una solución compleja de inmediato. Empieza resolviendo el problema de la forma más sencilla posible (aunque sea ineficiente) y luego mejóralo gradualmente. Esto se conoce como "enfoque iterativo".
##### Prueba exhaustivamente: Escribe casos de prueba, especialmente casos extremos, para asegurarte de que tu solución funciona en todas las condiciones. CS50 enfatiza esto en sus conjuntos de problemas.
Depuración: Utilice herramientas de depuración, sentencias de impresión o un depurador para rastrear su código y asegurarse de que funcione correctamente.

7. Aproveche las bibliotecas y las funciones integradas
No reinvente la rueda: CS50 le anima a utilizar bibliotecas y funciones integradas siempre que sea posible. Por ejemplo, utilice qsort() para ordenar en C o sort() en Python. Las bibliotecas suelen implementar las soluciones más optimizadas y eficientes.

8. Piense recursivamente (si cabe)
Soluciones recursivas: Muchos problemas se pueden resolver de forma elegante mediante la recursión, y CS50 profundiza en el pensamiento recursivo. La recursión puede simplificar el proceso de resolución de problemas, especialmente para problemas que involucran árboles, grafos o problemas que se descomponen naturalmente en subproblemas más pequeños.
Caso base: Asegúrese de definir un caso base claro para las funciones recursivas para evitar la recursión infinita y los desbordamientos de pila.

9. Trabaje a la inversa
Pensamiento inverso: En algunos casos, resolver el problema a la inversa puede ser útil. Por ejemplo, si intentas encontrar una ruta en un gráfico, podrías trabajar en sentido inverso desde el objetivo hasta el inicio.
Piensa en la condición final: ¿Cómo se ve la solución una vez resuelto el problema? Esto puede ayudarte a retroceder y a trazar los pasos para llegar a ella.

10. Colabora y busca retroalimentación
Discute las soluciones: Una de las principales ventajas de cursos como CS50 son la comunidad y la retroalimentación entre compañeros. No dudes en compartir tu enfoque con otros para obtener nuevas perspectivas sobre la resolución de problemas.
Práctica: Cuantos más problemas resuelvas, mejor te volverás en el pensamiento algorítmico. Los conjuntos de problemas de CS50 están diseñados para aumentar su dificultad, lo que te ayudará a perfeccionar gradualmente tus habilidades de resolución de problemas.


Ejemplos de algoritmos principales tratados en CS50:

Algoritmos de ordenamiento:
Ordenamiento de burbuja, Ordenamiento por selección, Ordenamiento por fusión, Ordenamiento rápido.

Algoritmos de búsqueda:
Búsqueda lineal, Búsqueda binaria.

Algoritmos voraces:
Problemas como el cambio de monedas o la programación de intervalos.

Programación dinámica:
Secuencia de Fibonacci, problema de la mochila.


Enfoque general para la resolución eficiente de problemas en CS50:

Paso 1: Comprender el problema mediante una lectura atenta y su análisis.
Paso 2: Planifica y escribe pseudocódigo para delinear los pasos.
Paso 3: Selecciona las estructuras de datos y el enfoque adecuados según el problema.
Paso 4: Escribe y optimiza el código, considerando la complejidad temporal y espacial.
Paso 5: Realiza pruebas exhaustivas, incluyendo casos extremos, y perfecciona la solución.


#### 6. Algoritmos 

##### 1. Fuerza bruta 

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


##### 2. Recursion

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



##### 3. Divide y Conquista 

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



##### 3. Divide y Conquista

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


##### 4. Dynamic Programming

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


##### 5. Greedy Algorithms

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


###### 6. # Backtracking

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




Prueba de algoritm: primero fuerza bruta, 

### Macro: Composición sobre herencia, abstracción 


# Diseñ Front/App/UI

## Jerarquía de elementos 
 
## Estado inicial de cada componente

## 


# Diseño Back/Dats

## Objeto

## Objetos planos (Objetos anidados)

## Array de objetos

Dependiendo de lo que quieras hacer, del proposito, objetivo a lograr, resultado, representación





# Filosofias de Diseño

## How to Design Programs

Tipos de datos y diseño basado en datos:

El libro enfatiza que el diseño de un programa debe estar guiado por los datos que manipula.

1. Definir datos estructurados.
	Por ejemplo, números, cadenas, listas, árboles, etc.

2. Diseñar plantillas específicas para cada tipo de dato.
	Cada estructura de datos tiene un patrón de uso predecible.

Tecnicas: 

1. Recursión: 
	Para resolver problemas complejos.

2. Pruebas sistemáticas:
	Antes de escribir el programa completo, diseña pruebas que verifiquen su correcto funcionamiento.

3. Contratos:
	Define claramente el propósito, entradas y salidas de cada función.

4. Abstracciones funcionales
    HTDP introduce el concepto de abstraer patrones comunes para evitar la repetición de código.
    Usa funciones de orden superior como map, filter y fold para trabajar con listas y otros datos estructurados.


## Structure and Interpretation of Computer Programs

1. Construir abstracciones

Abstracción de procedimientos
    Introduce la idea de que los programas se pueden entender como colecciones de procedimientos que abstraen operaciones específicas.
    Ejemplo: Una función para calcular el área de un círculo puede encapsular el cálculo repetido:

    (define (area-of-circle r)
      (* 3.14159 (* r r)))

Abstracción de datos
    Los datos pueden abstraerse en estructuras más complejas, permitiendo que los programas se enfoquen en el "qué" y no en el "cómo".
    Ejemplo: Una abstracción de un punto en 2D podría representarse con pares ordenados.

2. Estructuras de control y modularidad

Recursión
    Explica cómo resolver problemas dividiéndolos en subproblemas más pequeños que pueden resolverse de forma recursiva.
    Ejemplo: Factorial de un número:

    (define (factorial n)
      (if (= n 0)
          1
          (* n (factorial (- n 1)))))

Estructuras iterativas
Muestra cómo implementar procesos iterativos utilizando acumuladores y estructuras de bucle, diferenciando entre procesos recursivos y procesos iterativos.

Composición modular
Programas complejos se construyen combinando módulos más simples, lo que fomenta la reutilización y la claridad.


Estado mutable
Explora cómo manejar variables mutables y cómo esto afecta la lógica de un programa.
Introduce el concepto de entornos (scopes) y cómo las variables se resuelven en ellos.


## Programming Pearls

Programación como proceso iterativo:

Prototipos rápidos
Crea prototipos simples para entender el problema y explorar posibles soluciones.
Mejora gradualmente el diseño inicial para optimizar rendimiento o claridad.

Pruebas y depuración
Prueba el código con ejemplos simples y casos límite.
Las pruebas exhaustivas ayudan a identificar errores en las primeras etapas.


Técnicas de optimización:

Optimización temprana vs. tardía.
	Optimiza solo cuando es necesario y después de que el código básico funcione correctamente.
	Usa herramientas de perfilado para identificar cuellos de botella reales.

Evita sobreingeniería
Mantén el código simple; evita añadir complejidad innecesaria.


Cada caso de estudio ilustra el uso de:

Análisis cuidadoso del problema.
Selección de algoritmos y estructuras de datos adecuados.
Optimización basada en el contexto del problema.


La programación como expresión de ideas.
El código debe comunicar de forma clara y directa tus soluciones.

El papel de las matemáticas.
Las matemáticas, especialmente combinatoria y álgebra, son útiles para encontrar soluciones elegantes.


## Mythical Man-Mount

La importancia del diseño:
Brooks enfatiza que un diseño claro y bien pensado es crucial para el éxito de un proyecto de software.

Consejos para un buen diseño:
Dedica tiempo suficiente a la planificación antes de comenzar la implementación.
Itera sobre el diseño para adaptarlo a los cambios en los requisitos.
Diseña sistemas modulares que sean fáciles de entender y modificar.


No hay una bala de plata
En un ensayo adicional incluido en ediciones posteriores, Brooks introduce la idea de que no existe una "bala de plata" que elimine todos los problemas en el desarrollo de software.
Factores inherentes a la dificultad del software:

Complejidad: Los sistemas de software son inherentemente complejos.
Conformidad: El software debe ajustarse a los sistemas y procesos existentes.
Cambio: Los requisitos y las tecnologías cambian constantemente.
Invisibilidad: El software es abstracto y no tangible.


Lecciones clave para la gestión de proyectos de software
Resumen de principios prácticos:

Planifica el diseño con suficiente tiempo y esfuerzo.
Minimiza el tamaño de los equipos para reducir la complejidad.
Acepta que los proyectos llevarán más tiempo del esperado.
Itera sobre prototipos en lugar de intentar construir todo a la vez.
Adopta un enfoque disciplinado hacia la gestión y la comunicación.


## The Pragmatic Programmer

#### Manejo, gestión de un proyecto, comportamiento humano

1. Gestión de proyectos

A. Prioriza las tareas
No todo el trabajo tiene la misma importancia. Identifica las tareas que ofrecen el mayor valor al proyecto.

B. Documentación clara
Escribe documentación que sea breve pero efectiva, dirigida a las personas que la necesitan (desarrolladores, usuarios finales, etc.).

C. Entregas incrementales
Divide el trabajo en entregas pequeñas y manejables. Esto reduce el riesgo de grandes fallos y facilita la retroalimentación temprana.

2. Métodos para escribir código sólido

A. Pruebas desde el inicio
Escribe pruebas para validar que el código funciona como se espera.

Tipos de pruebas:
    Unitarias.
    De integración.
    De aceptación.

B. Seguridad y confiabilidad
Diseña sistemas que manejen errores inesperados sin fallar catastróficamente. Valida siempre las entradas de los usuarios.

C. Usa métricas
Mide el rendimiento y la calidad del software para identificar áreas de mejora.

3. Técnicas prácticas

A. Manejo de errores
Los errores son inevitables, pero deben manejarse de manera proactiva.
Estrategias:

    Manejar excepciones en lugar de ignorarlas.
    Proporcionar mensajes de error claros y útiles.
    Crear sistemas tolerantes a fallos.

B. Automatización
Automatiza tareas repetitivas para ahorrar tiempo y minimizar errores.

Ejemplos:
    Pruebas automáticas.
    Scripts para despliegue.
    Generación de documentación.

4. Conceptos clave

A. No repitas el trabajo (DRY - Don’t Repeat Yourself)
Evita duplicar información en tu código, documentación o procesos. Cada pieza de conocimiento debe tener una única representación en el sistema.

Ejemplo:
Si el mismo cálculo o lógica aparece en múltiples partes del código, extrae esa funcionalidad en una función reutilizable.

B. Código ortogonal
Los componentes de un sistema deben ser independientes entre sí, es decir, un cambio en uno no debería afectar a los demás.

Beneficios:
    Sistemas más fáciles de mantener.
    Menor riesgo de errores en cadena.
    Mayor facilidad para añadir nuevas características.

C. Prototipos
Usa prototipos para experimentar y validar ideas antes de comprometerte con una implementación completa.

Ventajas:
    Explorar alternativas rápidamente.
    Minimizar el desperdicio de tiempo y recursos.
    Obtener retroalimentación temprana.

D. Hacer preguntas
Un programador pragmático nunca asume nada. Es esencial hacer preguntas para aclarar los requisitos y los objetivos del proyecto.

Ejemplo:
    ¿Cuál es el propósito de esta funcionalidad?
    ¿Qué problema estamos resolviendo?
    ¿Quiénes son los usuarios finales?

E. Refactorización continua
Revisar y mejorar el código existente es una práctica esencial para mantener su calidad a largo plazo.
 
Principios:
    Mejora incremental: Pequeños ajustes regulares.
    Reduce la deuda técnica: Elimina el código innecesario o complicado.


## # Code Complete

1. Importancia de la construcción de software

Construcción como fase central del desarrollo.
Aunque el diseño y la planificación son importantes, la construcción (escribir código) es donde realmente se crea el software.

Calidad desde el principio.
Es más barato y efectivo prevenir errores durante la construcción que corregirlos después.

2. Diseño antes de codificar

Antes de escribir código, asegúrate de:

Entender completamente los requisitos.
Tener un diseño claro (arquitectura, estructuras de datos y algoritmos).
Definir interfaces y contratos


Errores comunes y cómo evitarlos

Evita complejidad innecesaria.
	Sigue el principio KISS (Keep It Simple, Stupid).

Manejo adecuado de excepciones.
	Maneja errores de manera explícita y clara.
	Ejemplo en Java:

	try {
		int result = divide(a, b);
	} catch (ArithmeticException e) {
		logError(e);
	}


## Code craft

1. Escribir código excelente

¿Qué significa "excelente"?
Código que es claro, legible y fácil de mantener.
Se enfoca en cumplir con los requisitos de manera efectiva sin complicar el diseño ni agregar elementos innecesarios.

Los principios básicos:
#### KISS (Keep It Simple, Stupid): Mantén el código lo más simple posible.
#### DRY (Don’t Repeat Yourself): Evita duplicar lógica; abstrae elementos comunes.
#### YAGNI (You Aren’t Gonna Need It): No desarrolles funcionalidades innecesarias.


2. Diseño del código

#### Encapsulación y modularidad
Divide el código en módulos independientes que puedan evolucionar sin afectar a otras partes del sistema.
Usa encapsulación para ocultar detalles internos y exponer solo lo necesario.

#### Cohesión y acoplamiento
Alta cohesión: Asegúrate de que cada módulo tenga un propósito claro y específico.
Bajo acoplamiento: Minimiza las dependencias entre módulos para facilitar el cambio.

#### Diseño basado en principios SOLID
Aplica los principios SOLID para escribir código más robusto y flexible.


Pruebas y calidad del código

Importancia de las pruebas
Las pruebas son una herramienta clave para garantizar que el código funcione como se espera y sea mantenible.

Tipos de pruebas:
	Pruebas unitarias.
	Pruebas de integración.
	Pruebas de sistema.

TDD (Test-Driven Development)
#### Escribe pruebas antes de escribir el código para garantizar que se cubran los requisitos.
Mejora la confianza en los cambios y refactorizaciones.

Revisión de código
Realiza revisiones de código regulares con tus compañeros para detectar errores y aprender de los demás.


#### El contexto importa: Adm recursos

No existe una única "mejor manera" de escribir código. 

Todo depende del contexto:

##### Requisitos del proyecto.
##### Restricciones del lenguaje o plataforma.
##### Plazos y recursos disponibles.


## 1. Patrones de diseño

Son soluciones probadas para problemas de diseño recurrentes:

Ejemplos clave:
    Singleton: Garantiza una única instancia de una clase.
    Factory: Crea objetos sin especificar su clase exacta.
    Observer: Permite a los objetos suscribirse y reaccionar a eventos.

2. Principios de diseño de software

A. Principios SOLID

S: Responsabilidad única.
O: Abierto/cerrado (extensible sin modificar el código existente).
L: Sustitución de Liskov.
I: Segregación de interfaces.
D: Inversión de dependencias.

B. YAGNI y DRY

YAGNI (You Aren't Gonna Need It): No construir funcionalidades innecesarias.
DRY (Don’t Repeat Yourself): Evitar la duplicación de lógica y datos.


#### Programación funcional

El libro introduce la programación funcional como un paradigma clave en la informática moderna:

Conceptos principales:
#### Funciones puras: No tienen efectos secundarios.
Inmutabilidad: Evitar cambios en el estado.
Composición de funciones: Construcción de funciones complejas a partir de funciones simples.


## Grokking Simplicity

Explora cómo aplicar el pensamiento funcional para simplificar y mejorar la calidad del software


La importancia de la simplicidad: Normand enfatiza la importancia de la simplicidad en el software, ya que la complejidad puede llevar a errores, bugs y dificultades para mantener y escalar el sistema.
El pensamiento funcional: Normand introduce el concepto de pensamiento funcional, que se enfoca en la idea de que el software debe ser diseñado para realizar tareas específicas de manera eficiente y efectiva, sin considerar la implementación detallada.
La separación de preocupaciones: Normand destaca la importancia de separar las preocupaciones en el software, es decir, dividir el sistema en componentes independientes que se encargan de tareas específicas, lo que facilita la mantenibilidad y la escalabilidad.
#### La inmutabilidad: Normand enfatiza la importancia de la inmutabilidad en el software, es decir, que los datos y los objetos no deben ser modificados una vez creados, lo que ayuda a prevenir errores y a mejorar la seguridad.
La composición: Normand introduce el concepto de composición, que se refiere a la forma en que los componentes del software se combinan para crear un sistema más grande y complejo.
La recursividad: Normand explora el concepto de recursividad, que se refiere a la forma en que un componente del software puede ser utilizado para resolver problemas más pequeños y similares, lo que ayuda a reducir la complejidad y a mejorar la eficiencia.
La importancia de la abstracción: Normand destaca la importancia de la abstracción en el software, es decir, la capacidad de ignorar los detalles irrelevantes y enfocarse en los aspectos más importantes del sistema.

Algunos de los patrones y técnicas que se pueden aplicar en la práctica son:

Diseñar para la simplicidad: Enfocarse en la simplicidad y la eficiencia al diseñar el software, en lugar de la complejidad y la sofisticación.
Utilizar el pensamiento funcional: Aplicar el pensamiento funcional para diseñar y desarrollar el software, enfocándose en la idea de que el software debe ser diseñado para realizar tareas específicas de manera eficiente y efectiva.
Separar las preocupaciones: Dividir el sistema en componentes independientes que se encargan de tareas específicas, lo que facilita la mantenibilidad y la escalabilidad.
Utilizar la inmutabilidad: Diseñar el software para que los datos y los objetos no sean modificados una vez creados, lo que ayuda a prevenir errores y a mejorar la seguridad.
Componer componentes: Combinar componentes del software para crear un sistema más grande y complejo, lo que ayuda a reducir la complejidad y a mejorar la eficiencia


## "Pensar como un programador"

1. Resolución de problemas

El autor enfatiza que programar no es solo escribir código, sino resolver problemas. La programación es una herramienta para encontrar soluciones sistemáticas a desafíos técnicos.
Pasos para resolver un problema de programación:

    Entender el problema
        Dedica tiempo a analizar y comprender lo que se te pide antes de intentar resolverlo.
        Haz preguntas como:
            ¿Cuáles son los datos de entrada y salida?
            ¿Qué restricciones existen?
            ¿Qué casos especiales deben considerarse?

    Dividir el problema en partes más pequeñas
        En lugar de abordar el problema completo, descomponlo en tareas más simples.
        Por ejemplo, si tienes que ordenar una lista y luego eliminar duplicados:
            Paso 1: Escribe un algoritmo para ordenar la lista.
            Paso 2: Escribe otro para eliminar duplicados.

    Escribir pseudocódigo
        Antes de escribir código real, describe la solución en lenguaje natural o en un formato de pseudocódigo.
        Ejemplo para invertir una cadena:

        Toma la cadena de entrada.
        Crea una nueva cadena vacía.
        Itera por la cadena de entrada desde el final hasta el principio.
        Agrega cada carácter a la nueva cadena.
        Devuelve la nueva cadena.

    Implementar y probar por partes
        Escribe y prueba cada componente de tu solución de forma incremental.
        Evita escribir todo el código de una sola vez sin probarlo.

    Refactorizar
        Una vez que la solución funcione, revísala para simplificarla y mejorarla.


2. Pensar de manera estructurada

El autor introduce principios clave para estructurar tus pensamientos como programador:

    Piensa en términos de inputs y outputs.
        Para cada función o programa, identifica claramente lo que espera recibir (input) y lo que debe devolver (output).

    Crea un mapa mental del problema.
        Visualiza el problema y su solución como un flujo de pasos. Usa diagramas o listas si es necesario.

    Simplifica problemas complejos.
        Si el problema parece abrumador, busca subproblemas que puedas resolver primero.




# Diseño React 

## Thinking in React

React puede cambiar tu forma de pensar sobre los diseños que miras y las aplicaciones que creas. 
Cuando creas una interfaz de usuario con React, primero la divides en partes llamadas componentes.
Luego, describirás los diferentes estados visuales de cada uno de tus componentes. 
Finalmente, conectarás tus componentes para que los datos fluyan a través de ellos. 
Te guiaremos a través del proceso de pensamiento para crear una tabla de datos de productos que se pueda buscar con React
 
 
### Empezemos con la Maqueta/Mockup 

Imagínese que ya tiene una API JSON y una maqueta de un diseñador.
La API JSON devuelve algunos datos que se parecen a esto:

```
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

```

La maqueta se ve así:

```
|search...|
o Only show products in stoc, 

Name 		Price 
	
	fruits

Apple		  1
Dragonfruit   2
Passionfruit  3

	Vegetables 
	
Spinach 	  2
Pumpkin		  4
Peas 		  1
	
```

Para implementar una interfaz de usuario en React, normalmente seguirás los mismos cinco pasos.


### 1: Divida la interfaz de usuario en una jerarquía de componentes
Comience dibujando cuadros alrededor de cada componente y subcomponente en la maqueta y asígneles un nombre. 
Si trabaja con un diseñador, es posible que ya haya nombrado estos componentes en su herramienta de diseño. ¡
Pregúntele!

Dependiendo de su experiencia, puede pensar en dividir un diseño en componentes de diferentes maneras:

1. Programación: use las mismas técnicas para decidir si debe crear una nueva función u objeto. 
Una de esas técnicas es el principio de responsabilidad única, es decir, un componente idealmente solo debería hacer una cosa. 
Si termina creciendo, debe descomponerse en subcomponentes más pequeños.

2. CSS: considere para qué crearía selectores de clase. 
(Sin embargo, los componentes son un poco menos granulares).

3. Diseño: considere cómo organizaría las capas del diseño.
#### Si su JSON está bien estructurado, a menudo encontrará que se corresponde naturalmente con la estructura de componentes de su interfaz de usuario. 
Esto se debe a que la interfaz de usuario y los modelos de datos suelen tener la misma arquitectura de información, es decir, la misma forma.
Separe su interfaz de usuario en componentes, donde cada componente coincida con una parte de su modelo de datos.


Hay cinco componentes en esta pantalla:

```
1. FiltrableProductTable (toda la app)

|search...|			 
o Only show products in stock 	2. SearchBar (busqueda y filtro)

Name 		Price 	3. ProductTable ( nombre, precio, frutas y lista)
	
	fruits			4. ProductCategoryRow (frutas)

Apple		  1		5. ProductRow (lista)
Dragonfruit   2
Passionfruit  3

	Vegetables 
	
Spinach 	  2
Pumpkin		  4
Peas 		  1
	
```
 
1. FilterableProductTable (gris) contiene toda la aplicación.
2. SearchBar (azul) recibe la entrada del usuario.
3. ProductTable (lavanda) muestra y filtra la lista según la entrada del usuario.
4. ProductCategoryRow (verde) muestra un encabezado para cada categoría.
5. ProductRow (amarillo) muestra una fila para cada producto.

Si observas ProductTable (lavanda), verás que el encabezado de la tabla (que contiene las etiquetas “Nombre” y “Precio”) no es un componente propio. 

Esto es una cuestión de preferencia y puedes optar por cualquiera de las dos opciones. 
En este ejemplo, es parte de ProductTable porque aparece dentro de la lista de ProductTable. 
Sin embargo, si este encabezado se vuelve complejo (por ejemplo, si agregas ordenación), puedes moverlo a su propio componente ProductTableHeader.


Ahora que ha identificado los componentes en la maqueta, organícelos en una jerarquía.
Los componentes que aparecen dentro de otro componente en la maqueta deben aparecer como elementos secundarios en la jerarquía:

```
FilterableProductTable
	SearchBar
	ProductTable
		ProductCategoryRow
		ProductRow
```


### 2: Crea una versión estática en React

Ahora que tienes la jerarquía de componentes, es hora de implementar tu aplicación. 
El enfoque más sencillo es crear una versión que represente la interfaz de usuario de tu modelo de datos sin agregar ninguna interactividad... ¡todavía! 
A menudo es más fácil crear primero la versión estática y agregar la interactividad después. 
Crear una versión estática requiere mucho tipeo y nada de pensamiento, pero agregar interactividad requiere mucho pensamiento y no mucho tipeo.

#### Para crear una versión estática de tu aplicación que represente tu modelo de datos, deberás crear componentes que reutilicen otros componentes y pasen datos mediante props. 

Los props son una forma de pasar datos de padre a hijo. 
(Si está familiarizado con el concepto de estado, no lo utilice para crear esta versión estática. 
El estado está reservado únicamente para la interactividad, es decir, los datos que cambian con el tiempo. 
Dado que se trata de una versión estática de la aplicación, no lo necesita).
Puede crear de "arriba hacia abajo" comenzando por crear los componentes que se encuentran más arriba en la jerarquía (como FilterableProductTable) o de "abajo hacia arriba" trabajando desde los componentes que se encuentran más abajo (como ProductRow). 
En los ejemplos más simples, suele ser más fácil hacerlo de arriba hacia abajo. 
En proyectos más grandes, es más fácil hacerlo de abajo hacia arriba.

```
function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

```

Después de crear los componentes, tendrás una biblioteca de componentes reutilizables que representan tu modelo de datos. 
Como se trata de una aplicación estática, los componentes solo devolverán JSX. 
El componente en la parte superior de la jerarquía (FilterableProductTable) tomará tu modelo de datos como propiedad. 
Esto se denomina flujo de datos unidireccional porque los datos fluyen hacia abajo desde el componente de nivel superior hasta los que se encuentran en la parte inferior del árbol.


Problema:
En este punto, no deberías estar usando ningún valor de estado. 

¡Eso es para el siguiente paso!


### 3: Encuentra la representación mínima pero completa del estado de la interfaz de usuario

Para que la interfaz de usuario sea interactiva, debe permitir que los usuarios cambien el modelo de datos subyacente. 
Para ello, utilizará el estado.
Piense en el estado como el conjunto mínimo de datos cambiantes que su aplicación necesita recordar. 
El principio más importante para estructurar el estado es mantenerlo DRY (no repetirse). 
Determine la representación mínima absoluta del estado que necesita su aplicación y calcule todo lo demás a pedido. 
Por ejemplo, si está creando una lista de compras, puede almacenar los artículos como una matriz en el estado. 
Si también desea mostrar la cantidad de artículos en la lista, no almacene la cantidad de artículos como otro valor de estado; en su lugar, lea la longitud de su matriz.

Ahora piense en todos los datos de esta aplicación de ejemplo:

1. La lista original de productos
2. El texto de búsqueda que ingresó el usuario
3. El valor de la casilla de verificación
4. La lista filtrada de productos

 
¿Cuáles de estos son estados? Identifica los que no lo son:

1. ¿Permanece sin cambios con el tiempo? Si es así, no es estado.
2. ¿Se pasa desde un padre a través de propiedades? Si es así, no es estado.
3. ¿Puedes calcularlo en función del estado o las propiedades existentes en tu componente? Si es así, ¡definitivamente no es estado!

Lo que queda es probablemente estado.

Repasémoslos uno por uno nuevamente:

La lista original de productos se pasa como propiedades, por lo que no es estado.
El texto de búsqueda parece ser estado ya que cambia con el tiempo y no se puede calcular a partir de nada.
El valor de la casilla de verificación parece ser estado ya que cambia con el tiempo y no se puede calcular a partir de nada.
La lista filtrada de productos no es estado porque se puede calcular tomando la lista original de productos y filtrándola según el texto de búsqueda y el valor de la casilla de verificación.

¡Esto significa que solo el texto de búsqueda y el valor de la casilla de verificación son estado! ¡Bien hecho!


### 4: Identifica dónde debería estar tu estado

Después de identificar los datos de estado mínimos de tu aplicación, debes identificar qué componente es responsable de cambiar este estado o es el propietario del estado. 
Recuerda: React utiliza un flujo de datos unidireccional, que pasa los datos a lo largo de la jerarquía de componentes, desde el componente principal al secundario. 
Es posible que no esté claro de inmediato qué componente debería ser el propietario de qué estado. 
Esto puede ser un desafío si eres nuevo en este concepto, pero puedes averiguarlo siguiendo estos pasos.

Para cada parte del estado de tu aplicación:

1. Identifica cada componente que renderiza algo en función de ese estado.

2. Encuentra su componente principal común más cercano (un componente por encima de todos ellos en la jerarquía).

3. Decide dónde debería estar el estado:
	1. A menudo, puedes colocar el estado directamente en su componente principal común.
	2. También puedes colocar el estado en algún componente por encima de su componente principal común.
	3. Si no puede encontrar un componente donde tenga sentido poseer el estado, cree un nuevo componente únicamente para contener el estado y agréguelo en algún lugar de la jerarquía por encima del componente principal común.

En el paso anterior, encontró dos partes del estado en esta aplicación: el texto de entrada de búsqueda y el valor de la casilla de verificación. 
En este ejemplo, siempre aparecen juntos, por lo que tiene sentido colocarlos en el mismo lugar.
Ahora, analicemos nuestra estrategia para ellos:

1. Identifique los componentes que usan el estado:
	ProductTable debe filtrar la lista de productos en función de ese estado (texto de búsqueda y valor de la casilla de verificación).
	SearchBar debe mostrar ese estado (texto de búsqueda y valor de la casilla de verificación).

2. Encuentre su componente principal común: el primer componente principal que comparten ambos componentes es FilterableProductTable.

3. Decida dónde se encuentra el estado: mantendremos el texto de filtro y los valores del estado marcado en FilterableProductTable.


```
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

```

Luego, pase filterText y inStockOnly a ProductTable y SearchBar como propiedades:

```
<div>
  <SearchBar 
    filterText={filterText} 
    inStockOnly={inStockOnly} />
  <ProductTable 
    products={products}
    filterText={filterText}
    inStockOnly={inStockOnly} />
</div>

```

Puedes empezar a ver cómo se comportará tu aplicación. 
Edita el valor inicial de filterText de useState('') ​​a useState('fruit') en el código de sandbox que aparece a continuación. 
Verás tanto el texto de entrada de búsqueda como la actualización de la tabla:

```
import { useState } from 'react';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('fruit');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} />
      <ProductTable 
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({ filterText, inStockOnly }) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} 
        placeholder="Search..."/>
      <label>
        <input 
          type="checkbox" 
          checked={inStockOnly} />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

```

Tenga en cuenta que la edición del formulario aún no funciona. 
Hay un error de consola en el sandbox anterior que explica por qué:

```
Consola
Proporcionó una propiedad `value` a un campo de formulario sin un controlador `onChange`. Esto generará un campo de solo lectura.

```

En el sandbox anterior, ProductTable y SearchBar leen las propiedades filterText e inStockOnly para generar la tabla, la entrada y la casilla de verificación. 
Por ejemplo, así es como SearchBar completa el valor de entrada:

```
function SearchBar({ filterText, inStockOnly }) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} 
        placeholder="Search..."/>

```

Sin embargo, todavía no has añadido ningún código para responder a las acciones del usuario, como escribir. 
Este será el paso final.


### 5: Agrega un flujo de datos inverso

Actualmente, tu aplicación se renderiza correctamente con propiedades y estados que fluyen hacia abajo en la jerarquía. 
Pero para cambiar el estado de acuerdo con la entrada del usuario, necesitarás admitir que los datos fluyan en sentido contrario: los componentes del formulario en las profundidades de la jerarquía deben actualizar el estado en FilterableProductTable.
React hace que este flujo de datos sea explícito, pero requiere un poco más de escritura que el enlace de datos bidireccional. Si intentas escribir o marcar la casilla en el ejemplo anterior, verás que React ignora tu entrada. 

Esto es intencional. 
Al escribir <input value={filterText} />, has establecido la propiedad de valor de la entrada para que siempre sea igual al estado filterText que se pasa desde FilterableProductTable. 
Dado que el estado filterText nunca se establece, la entrada nunca cambia.
Quieres que cada vez que el usuario cambie las entradas del formulario, el estado se actualice para reflejar esos cambios. 
El estado es propiedad de FilterableProductTable, por lo que solo puede llamar a setFilterText y setInStockOnly. 
Para permitir que SearchBar actualice el estado de FilterableProductTable, debe pasar estas funciones a SearchBar:

```
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />

```

Dentro de SearchBar, agregará los controladores de eventos onChange y establecerá el estado principal a partir de ellos:

```
function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}

```


Ahora la aplicación funciona 

```
import { useState } from 'react';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText} 
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable 
        products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)} />
      <label>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

```


## Diseño del Estado en React

```
updateMyTodos(draft => {
  const artwork = draft.find(a => a.id === artworkId);
  artwork.seen = nextSeen;
});

```


Esto se debe a que no se está mutando el estado original, sino un objeto de borrador especial proporcionado por Immer. 

De igual forma, se pueden aplicar métodos de mutación como push() y pop() al contenido del borrador.


En segundo plano, Immer siempre construye el siguiente estado desde cero según los cambios realizados en el borrador. 

Esto mantiene la concisión de los controladores de eventos sin necesidad de mutar el estado.


## Rs arrays en estado 

Se pueden añadir arrays al estado, pero no se pueden modificar.

En lugar de mutar un array, se crea una nueva versión y se actualiza el estado.

Se puede usar la sintaxis de propagación de arrays ```[...arr, newItem]``` para crear arrays con nuevos elementos.

Se pueden usar filter() y map() para crear nuevos arrays con elementos filtrados o transformados.

Se puede usar Immer para mantener la concisión del código.


## Ejercicios 

1. Actualizar un artículo en el carrito de compras

Complete la lógica handleIncreaseClick para que al presionar "+" aumente el número correspondiente:

App.js 

```
import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {

  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}

```


Solución: 

Puede utilizar la función de mapa para crear una nueva matriz y luego utilizar la sintaxis de propagación de objetos ... para crear una copia del objeto modificado para la nueva matriz:

```
import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}

```


## Eliminar un artículo del carrito

Este carrito tiene un botón "+" funcional, pero el botón "–" no hace nada. 

Debe agregarle un controlador de eventos para que, al presionarlo, disminuya el recuento del producto correspondiente. 

Si presiona "–" cuando el recuento es 1, el producto se eliminará automáticamente del carrito. 

Asegúrese de que nunca muestre 0.

```
import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}

``` 

Solución: 

Primero puede usar el mapa para producir una nueva matriz y luego filtrar para eliminar productos con un recuento establecido en 0:

```
import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

  function handleDecreaseClick(productId) {
    let nextProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1
        };
      } else {
        return product;
      }
    });
    nextProducts = nextProducts.filter(p =>
      p.count > 0
    );
    setProducts(nextProducts)
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={() => {
            handleDecreaseClick(product.id);
          }}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}

```


3. Corrija las mutaciones usando métodos no mutativos.

En este ejemplo, todos los controladores de eventos de App.js usan mutación. 

Por lo tanto, editar y eliminar tareas pendientes no funciona. 

Reescriba handleAddTodo, handleChangeTodo y handleDeleteTodo para usar los métodos no mutativos:

TaskList.js

```
import { useState } from 'react';

export default function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo
}) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <Task
            todo={todo}
            onChange={onChangeTodo}
            onDelete={onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={e => {
            onChange({
              ...todo,
              title: e.target.value
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={e => {
          onChange({
            ...todo,
            done: e.target.checked
          });
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </label>
  );
}

```


AddTodo.js

```
import { useState } from 'react';

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={() => {
        setTitle('');
        onAddTodo(title);
      }}>Add</button>
    </>
  )
}

```


App.js

```
import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    todos.push({
      id: nextId++,
      title: title,
      done: false
    });
  }

  function handleChangeTodo(nextTodo) {
    const todo = todos.find(t =>
      t.id === nextTodo.id
    );
    todo.title = nextTodo.title;
    todo.done = nextTodo.done;
  }

  function handleDeleteTodo(todoId) {
    const index = todos.findIndex(t =>
      t.id === todoId
    );
    todos.splice(index, 1);
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

```


4. Corrige las mutaciones con Immer

Este es el mismo ejemplo del desafío anterior. 

Esta vez, corrige las mutaciones con Immer. 

Para tu comodidad, useImmer ya está importado, así que debes cambiar la variable de estado "todos" para usarlo.

```
import { useState } from 'react';
import { useImmer } from 'use-immer';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    todos.push({
      id: nextId++,
      title: title,
      done: false
    });
  }

  function handleChangeTodo(nextTodo) {
    const todo = todos.find(t =>
      t.id === nextTodo.id
    );
    todo.title = nextTodo.title;
    todo.done = nextTodo.done;
  }

  function handleDeleteTodo(todoId) {
    const index = todos.findIndex(t =>
      t.id === todoId
    );
    todos.splice(index, 1);
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

```

Con Immer, puedes escribir código mutativo, siempre y cuando solo mutes partes del draft que Immer te proporciona. 

Aquí, todas las mutaciones se realizan en el borrador para que el código funcione:

App.js

```
import { useState } from 'react';
import { useImmer } from 'use-immer';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, updateTodos] = useImmer(
    initialTodos
  );

  function handleAddTodo(title) {
    updateTodos(draft => {
      draft.push({
        id: nextId++,
        title: title,
        done: false
      });
    });
  }

  function handleChangeTodo(nextTodo) {
    updateTodos(draft => {
      const todo = draft.find(t =>
        t.id === nextTodo.id
      );
      todo.title = nextTodo.title;
      todo.done = nextTodo.done;
    });
  }

  function handleDeleteTodo(todoId) {
    updateTodos(draft => {
      const index = draft.findIndex(t =>
        t.id === todoId
      );
      draft.splice(index, 1);
    });
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

```

También puedes combinar los enfoques mutativos y no mutativos con Immer.

Por ejemplo, en esta versión, handleAddTodo se implementa mutando el borrador de Immer, mientras que handleChangeTodo y handleDeleteTodo utilizan los métodos no mutativos map y filter:

App.js

```
import { useState } from 'react';
import { useImmer } from 'use-immer';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, updateTodos] = useImmer(
    initialTodos
  );

  function handleAddTodo(title) {
    updateTodos(draft => {
      draft.push({
        id: nextId++,
        title: title,
        done: false
      });
    });
  }

  function handleChangeTodo(nextTodo) {
    updateTodos(todos.map(todo => {
      if (todo.id === nextTodo.id) {
        return nextTodo;
      } else {
        return todo;
      }
    }));
  }

  function handleDeleteTodo(todoId) {
    updateTodos(
      todos.filter(t => t.id !== todoId)
    );
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

```

Con Immer, puedes elegir el estilo que resulte más natural para cada caso.



# Administrar estado 

A medida que tu aplicación crece, conviene ser más meticuloso con la organización de tu estado y el flujo de datos entre tus componentes. 

Un estado redundante o duplicado es una fuente común de errores. 

En este capítulo, aprenderás a estructurar bien tu estado, a mantener la lógica de actualización de tu estado mantenible y a compartirlo entre componentes distantes.

Cómo considerar los cambios de la interfaz de usuario como cambios de estado
Cómo estructurar bien el estado
Cómo "elevar" el estado para compartirlo entre componentes
Cómo controlar si el estado se conserva o se restablece
Cómo consolidar la lógica de estado compleja en una función
Cómo pasar información sin "prop Drilling"
Cómo escalar la gestión del estado a medida que crece tu aplicación


## Reacción a la entrada con estado

### Con React, no modificarás la interfaz de usuario directamente desde el código. 

### Por ejemplo, no escribirás comandos como "deshabilitar el botón", "habilitar el botón", "mostrar el mensaje de éxito", etc. 

### En su lugar, describirás la interfaz de usuario que deseas ver para los diferentes estados visuales de tu componente ("estado inicial", "estado de escritura", "estado de éxito") y luego activarás los cambios de estado en respuesta a la entrada del usuario. 

Esto es similar a cómo los diseñadores conciben la interfaz de usuario.


Aquí tienes un formulario de cuestionario creado con React. 

### Observa cómo utiliza la variable de estado "status" para determinar si se habilita o deshabilita el botón de envío y si se muestra el mensaje de éxito en su lugar.


App.js 

```
import { useState } from 'react';

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}

```


## Elección de la estructura del estado

### Una buena estructura del estado puede marcar la diferencia entre un componente fácil de modificar y depurar y uno que sea una fuente constante de errores. 

### El principio más importante es que el estado no debe contener información redundante ni duplicada. 

Si hay un estado innecesario, es fácil olvidar actualizarlo y generar errores.


Por ejemplo, este formulario tiene una variable de estado fullName redundante.

App.js 

```
import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + ' ' + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    setFullName(firstName + ' ' + e.target.value);
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}

```

### Puedes eliminarlo y simplificar el código calculando fullName mientras se procesa el componente:

```
import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}

```

### Puede que esto parezca un cambio pequeño, pero muchos errores en las aplicaciones React se solucionan de esta manera.


## Compartir estado entre componentes

### A veces, se desea que el estado de dos componentes cambie siempre a la vez. 

Para ello, se elimina el estado de ambos, se mueve al componente principal común más cercano y se lo pasa mediante propiedades. 

Esto se conoce como "elevar el estado" y es una de las acciones más comunes al escribir código React.


### En este ejemplo, solo un panel debe estar activo a la vez. 

Para lograrlo, en lugar de mantener el estado activo dentro de cada panel, el componente principal contiene el estado y especifica las propiedades para sus componentes secundarios.

App.js 

```
import { useState } from 'react';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}

```


## Preservación y restablecimiento del estado

### Al volver a renderizar un componente, React debe decidir qué partes del árbol conservar (y actualizar) y cuáles descartar o recrear desde cero. 

En la mayoría de los casos, el comportamiento automático de React funciona correctamente. 

Por defecto, React conserva las partes del árbol que coinciden con el árbol de componentes previamente renderizado.


Sin embargo, a veces esto no es lo deseado. 

En esta aplicación de chat, escribir un mensaje y luego cambiar el destinatario no restablece la entrada. 

Esto puede provocar que el usuario envíe un mensaje accidentalmente a la persona equivocada.


Chat.js

```
import { useState } from 'react';

export default function Chat({ contact }) {
  const [text, setText] = useState('');
  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={'Chat to ' + contact.name}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}

```


ContactList.js

```
export default function ContactList({
  selectedContact,
  contacts,
  onSelect
}) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map(contact =>
          <li key={contact.email}>
            <button onClick={() => {
              onSelect(contact);
            }}>
              {contact.name}
            </button>
          </li>
        )}
      </ul>
    </section>
  );
}

```


App.js

```
import { useState } from 'react';
import Chat from './Chat.js';
import ContactList from './ContactList.js';

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat contact={to} />
    </div>
  )
}

const contacts = [
  { name: 'Taylor', email: 'taylor@mail.com' },
  { name: 'Alice', email: 'alice@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' }
];

```

### React permite anular el comportamiento predeterminado y forzar que un componente restablezca su estado pasándole una clave diferente, como <Chat key={email} />. 

### Esto indica a React que, si el destinatario es diferente, debe considerarse un componente de Chat diferente que debe recrearse desde cero con los nuevos datos (y entradas similares a la interfaz de usuario). 

Ahora, al cambiar de destinatario, se restablece el campo de entrada, incluso si se renderiza el mismo componente.


## Extracción de la lógica de estado en un reductor

### Los componentes con numerosas actualizaciones de estado distribuidas en varios controladores de eventos pueden resultar abrumadores. 

### En estos casos, puede consolidar toda la lógica de actualización de estado fuera del componente en una sola función llamada "reductor". 

Sus controladores de eventos se vuelven concisos porque solo especifican las "acciones" del usuario. 

Al final del archivo, la función "reductor" especifica cómo debe actualizarse el estado en respuesta a cada acción.

App.js 

```
import { useReducer } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask
        onAddTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
];

```


## Transferencia de datos en profundidad mediante contexto

### Normalmente, se transfiere información de un componente padre a un componente hijo mediante propiedades. 

### Sin embargo, transferir propiedades puede resultar inconveniente si se necesita transferir una propiedad a través de varios componentes, o si varios componentes necesitan la misma información. 

### El contexto permite que el componente padre ponga información a disposición de cualquier componente en el árbol inferior, independientemente de su profundidad, sin pasarla explícitamente mediante propiedades.


En este caso, el componente Encabezado determina su nivel de encabezado preguntando a la Sección más cercana por su nivel. 

Cada Sección rastrea su propio nivel preguntando a la Sección padre y añadiéndole uno. 

Cada Sección proporciona información a todos los componentes inferiores sin pasar propiedades; lo hace mediante contexto.

App.js 

```
import Heading from './Heading.js';
import Section from './Section.js';

export default function Page() {
  return (
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

```


## Escalado con reductor y contexto

### Los reductores permiten consolidar la lógica de actualización de estado de un componente. 

### El contexto permite transmitir información a otros componentes. 

### Se pueden combinar reductores y contexto para gestionar el estado de una pantalla compleja.


### Con este enfoque, un componente principal con un estado complejo lo gestiona con un reductor. 

### Otros componentes en cualquier punto del árbol pueden leer su estado mediante el contexto. 

### También pueden enviar acciones para actualizarlo.


App.js

```
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import { TasksProvider } from './TasksContext.js';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

```


# Reacción a la entrada con estado

### React ofrece una forma declarativa de manipular la interfaz de usuario (IU). 

### En lugar de manipular directamente partes individuales de la IU, se describen los diferentes estados en los que puede encontrarse el componente y se alterna entre ellos según la entrada del usuario. 

### Esto es similar a cómo los diseñadores conciben la IU.


Aprenderás:

En qué se diferencia la programación declarativa de IU de la programación imperativa de IU

Cómo enumerar los diferentes estados visuales en los que puede encontrarse el componente

Cómo activar los cambios entre los diferentes estados visuales desde el código


## Comparación entre la interfaz de usuario declarativa y la imperativa

### Al diseñar interacciones de interfaz de usuario, probablemente piense en cómo cambia esta en respuesta a las acciones del usuario. 

Imagine un formulario que permite al usuario enviar una respuesta:


1. Al escribir algo en el formulario, se habilita el botón "Enviar".

2. Al presionar "Enviar", tanto el formulario como el botón se deshabilitan y aparece un indicador.

3. Si la solicitud de red se realiza correctamente, el formulario se oculta y aparece el mensaje "Gracias".

4. Si la solicitud de red falla, aparece un mensaje de error y el formulario se vuelve a habilitar.


### En programación imperativa, lo anterior se corresponde directamente con la forma de implementar la interacción. 

### Debe escribir las instrucciones exactas para manipular la interfaz de usuario en función de lo que acaba de ocurrir. 

Otra forma de verlo: imagine que va junto a alguien en un coche y le indica paso a paso a dónde ir. 


No saben adónde quieres ir, simplemente siguen tus órdenes. 

(¡Y si te equivocas en las instrucciones, terminas en el lugar equivocado!) 

### Se llama imperativo porque tienes que "dar órdenes" a cada elemento, desde el spinner hasta el botón, indicándole al ordenador cómo actualizar la interfaz de usuario.


En este ejemplo de programación de interfaz de usuario imperativa, el formulario se crea sin React. 

Solo utiliza el DOM del navegador:

index.js

```
async function handleFormSubmit(e) {
  e.preventDefault();
  disable(textarea);
  disable(button);
  show(loadingMessage);
  hide(errorMessage);
  try {
    await submitForm(textarea.value);
    show(successMessage);
    hide(form);
  } catch (err) {
    show(errorMessage);
    errorMessage.textContent = err.message;
  } finally {
    hide(loadingMessage);
    enable(textarea);
    enable(button);
  }
}

function handleTextareaChange() {
  if (textarea.value.length === 0) {
    disable(button);
  } else {
    enable(button);
  }
}

function hide(el) {
  el.style.display = 'none';
}

function show(el) {
  el.style.display = '';
}

function enable(el) {
  el.disabled = false;
}

function disable(el) {
  el.disabled = true;
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === 'istanbul') {
        resolve();
      } else {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      }
    }, 1500);
  });
}

let form = document.getElementById('form');
let textarea = document.getElementById('textarea');
let button = document.getElementById('button');
let loadingMessage = document.getElementById('loading');
let errorMessage = document.getElementById('error');
let successMessage = document.getElementById('success');
form.onsubmit = handleFormSubmit;
textarea.oninput = handleTextareaChange;

```

index.html

```
<form id="form">
  <h2>City quiz</h2>
  <p>
    What city is located on two continents?
  </p>
  <textarea id="textarea"></textarea>
  <br />
  <button id="button" disabled>Submit</button>
  <p id="loading" style="display: none">Loading...</p>
  <p id="error" style="display: none; color: red;"></p>
</form>
<h1 id="success" style="display: none">That's right!</h1>

<style>
* { box-sizing: border-box; }
body { font-family: sans-serif; margin: 20px; padding: 0; }
</style>

```

Manipular la interfaz de usuario (IU) funciona de forma imperativa bastante bien en ejemplos aislados, pero se vuelve exponencialmente más difícil de gestionar en sistemas más complejos. 

Imagina actualizar una página llena de formularios diferentes como este. 

Añadir un nuevo elemento de la IU o una nueva interacción requeriría una revisión cuidadosa de todo el código existente para asegurarse de no haber introducido un error (por ejemplo, olvidar mostrar u ocultar algo).


React se creó para resolver este problema.


### En React, no se manipula directamente la IU; es decir, no se activan, desactivan, muestran u ocultan componentes directamente. 

### En su lugar, se declara lo que se quiere mostrar y React averigua cómo actualizar la IU. 

Imagina subir a un taxi y decirle al conductor adónde quieres ir en lugar de decirle exactamente dónde girar. 

El trabajo del conductor es llevarte hasta allí, e incluso podría conocer algunos atajos que no has considerado.


## Pensando en la interfaz de usuario declarativamente

Ya viste cómo implementar un formulario de forma imperativa. 

Para comprender mejor cómo pensar en React, a continuación te explicaremos cómo reimplementar esta interfaz de usuario en React:


1. Identifica los diferentes estados visuales de tu componente.

2. Determina qué desencadena esos cambios de estado.

3. Representa el estado en memoria con useState.

4. Elimina las variables de estado no esenciales.

5. Conecta los controladores de eventos para establecer el estado.


## 1. Identifica los diferentes estados visuales de tu componente.

### En informática, es posible que hayas oído hablar de una "máquina de estados" en uno de varios "estados". 

### Si trabajas con un diseñador, es posible que hayas visto maquetas para diferentes "estados visuales". 

React se encuentra en la intersección del diseño y la informática, por lo que ambas ideas son fuentes de inspiración.

### Primero, necesitas visualizar todos los diferentes "estados" de la interfaz de usuario que el usuario podría ver:


1. Vacío: El formulario tiene el botón "Enviar" deshabilitado.

2. Escribiendo: El formulario tiene el botón "Enviar" habilitado.

3. Enviando: El formulario está completamente deshabilitado. Se muestra el indicador giratorio.

4. Éxito: Se muestra un mensaje de "Gracias" en lugar de un formulario.

5. Error: Igual que el estado "Escribiendo", pero con un mensaje de error adicional.


### Al igual que un diseñador, querrás crear maquetas (mock) para los diferentes estados antes de agregar lógica. 

Por ejemplo, aquí hay una maqueta solo para la parte visual del formulario. 

### Esta simulación (mock) está controlada por una propiedad llamada estado con un valor predeterminado de 'vacío': (prop empy)


App.js 

Form toma un prop status con un valor empty que está predeterminado cuando no hay otro. 

### Va a retornar una serie de elementos distintos según el valor de la prop status 

```
export default function Form({
  status = 'empty'
}) {
  if (status === 'success') {
    return <h1>That's right!</h1>
  }
  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form>
        <textarea />
        <br />
        <button>
          Submit
        </button>
      </form>
    </>
  )
}

```


Puedes llamar a esa propiedad como quieras; el nombre no importa. 

### Prueba a modificar status = 'empty' a status = 'success' para ver el mensaje de éxito. 

### La simulación te permite iterar rápidamente en la interfaz de usuario antes de conectar la lógica. 

Aquí tienes un prototipo más completo del mismo componente, aún controlado por la propiedad status:


App.js 

### Se agregaron más estados para poder ver que retorna o resulta si sucede uno u otro. 

### Cada estado tiene su retorno

```

export default function Form({
  // Try 'submitting', 'error', 'success':
  status = 'empty'
}) {
  if (status === 'success') {
    return <h1>That's right!</h1>
  }
  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form>
        <textarea disabled={
          status === 'submitting'
        } />
        <br />
        <button disabled={
          status === 'empty' ||
          status === 'submitting'
        }>
          Submit
        </button>
        {status === 'error' &&
          <p className="Error">
            Good guess but a wrong answer. Try again!
          </p>
        }
      </form>
      </>
  );
}

```

### Algunos elementos contienen js referido al valor de prop status para activar/desactivar estos mismos. 


## En profundidad: Mostrar muchos estados visuales a la vez

### Si un componente tiene muchos estados visuales, puede ser conveniente mostrarlos todos en una página:


Form.js

Espera un valor para la prop status

Si es success retorna h1 

De lo contrario un form con diferentes elementos que dependen de la prop status. 

```
export default function Form({ status }) {
  if (status === 'success') {
    return <h1>That's right!</h1>
  }
  return (
    <form>
      <textarea disabled={
        status === 'submitting'
      } />
      <br />
      <button disabled={
        status === 'empty' ||
        status === 'submitting'
      }>
        Submit
      </button>
      {status === 'error' &&
        <p className="Error">
          Good guess but a wrong answer. Try again!
        </p>
      }
    </form>
  );
}

```


App.js

```
import Form from './Form.js';

let statuses = [
  'empty',
  'typing',
  'submitting',
  'success',
  'error',
];

export default function App() {
  return (
    <>
      {statuses.map(status => (
        <section key={status}>
          <h4>Form ({status}):</h4>
          <Form status={status} />
        </section>
      ))}
    </>
  );
}

```

### El componente App manipulará al componente Form que espera valores para su estado en la prop status. 

Mapea el array para darle un elemento section con h4 y form. 

la key, el titulo y el componente form el valor de la variable local status


### Las páginas como ésta suelen llamarse “guías de estilo", "living styleguides", "storybooks"


## 2. Determinar qué desencadena esos cambios de estado.

### Puede activar actualizaciones de estado en respuesta a dos tipos de entradas:


1. Entradas humanas (ui), como hacer clic en un botón, escribir en un campo o navegar por un enlace.

2. Entradas informáticas (hard/soft), como la llegada de una respuesta de red, el final de un tiempo de espera o la carga de una imagen. 


### En ambos casos, debe configurar variables de estado para actualizar la interfaz de usuario. 

Para el formulario que está desarrollando, deberá cambiar el estado en respuesta a diferentes entradas:


1. Al cambiar la entrada de texto (humano), esta pasará del estado Vacío al estado Escribiendo o viceversa, dependiendo de si el cuadro de texto está vacío o no.

2. Al hacer clic en el botón Enviar (humano), pasará al estado Enviando.

3. Una respuesta de red correcta (computadora) pasará al estado Correcto.

4. Una respuesta de red fallida (computadora) pasará al estado Error con el mensaje de error correspondiente.


Nota

### ¡Ten en cuenta que las entradas humanas suelen requerir controladores de eventos!


### Para visualizar mejor este flujo, intenta dibujar cada estado en papel como un círculo etiquetado y cada cambio entre dos estados como una flecha. 

### De esta manera, puedes esbozar muchos flujos y corregir errores mucho antes de la implementación.

changes (>)

```
                    
					Press submit> 
          (Typing)_ _ _ _ _ _ _ _ _ (Submitting)
         /							  / 	\
        / Start typing>              /       \
(Empty)/                            /         \
					  Network err> /	       \ Network succ>
                                  /             \
                                 /               \
                              (Error)          (Success) 

```


## 3. Representar el estado en memoria con useState

### A continuación, deberá representar los estados visuales de su componente en memoria con useState. 

### La simplicidad es clave: cada parte del estado es una "parte móvil", y se busca la menor cantidad posible de "partes móviles". 

¡Cuanta más complejidad, más errores!


### Comience con el estado que debe estar presente. (visible/inicial?) 

#### Por ejemplo, deberá almacenar la respuesta de la entrada y el error (si existe) para almacenar el último error: 


Antes (array statuses = 'empty', 'typing', 'submitting', 'success', 'error';)

```
const [answer, setAnswer] = useState('');
const [error, setError] = useState(null);

```

### Luego, necesitarás una variable de estado que represente cuál de los estados visuales quieres mostrar. 

Normalmente hay más de una forma de representarlo en memoria, así que tendrás que experimentar.


### Si te cuesta encontrar la mejor manera de inmediato, empieza añadiendo suficientes estados como para asegurarte de que todos los estados visuales posibles estén cubiertos:

```
const [isEmpty, setIsEmpty] = useState(true);
const [isTyping, setIsTyping] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);
const [isError, setIsError] = useState(false);

```

Es probable que tu primera idea no sea la mejor, pero no hay problema: ¡refactorizar el estado es parte del proceso!


## 4. Elimine las variables de estado no esenciales.

### Desea evitar la duplicación en el contenido del estado, de modo que solo registre lo esencial. 

### Dedicar tiempo a refactorizar la estructura de su estado facilitará la comprensión de sus componentes, reducirá la duplicación y evitará significados no deseados. 

### El objetivo es evitar que el estado en memoria no represente ninguna interfaz de usuario válida que desee que vea el usuario. 

#### (Por ejemplo, nunca debe mostrar un mensaje de error y deshabilitar la entrada al mismo tiempo, ya que el usuario no podrá corregir el error).


### Aquí hay algunas preguntas que puede plantearse sobre sus variables de estado:


1. ¿Este estado causa una paradoja? 

Por ejemplo, isTyping e isSubmitting no pueden ser ambos verdaderos. 

### Una paradoja suele significar que el estado no está lo suficientemente restringido. 

Hay cuatro combinaciones posibles de dos valores booleanos, pero solo tres corresponden a estados válidos. 

Para eliminar el estado "imposible", puedes combinarlos en un estado que debe tener uno de estos tres valores: 'escribiendo', 'enviando' o 'éxito'.


2. ¿Ya está disponible la misma información en otra variable de estado? 

Otra paradoja: isEmpty e isTyping no pueden ser verdaderas simultáneamente. 

### Al convertirlas en variables de estado independientes, corres el riesgo de que se desincronizaran y provoquen errores. 

#### Afortunadamente, puedes eliminar isEmpty y, en su lugar, comprobar answer.length === 0.


3. ¿Puedes obtener la misma información de la inversa de otra variable de estado? 

#### isError no es necesario porque puedes comprobar error !== null.


Después de esta limpieza, quedan 3 variables de estado esenciales (¡antes 7!):

```
const [answer, setAnswer] = useState('');
const [error, setError] = useState(null);
const [status, setStatus] = useState('typing'); // 'typing', 'submitting', or 'success'

```

### Sabes que son esenciales porque no puedes eliminar ninguno de ellos sin romper la funcionalidad.


## En profundidad: Eliminando estados “imposibles” con un reductor

Estas tres variables representan adecuadamente el estado de este formulario. 

### Sin embargo, aún existen estados intermedios que no tienen sentido. 

#### Por ejemplo, un error no nulo no tiene sentido cuando el estado es "éxito". 

Para modelar el estado con mayor precisión, se puede extraer en un reductor. 

### Los reductores permiten unificar múltiples variables de estado en un solo objeto y consolidar toda la lógica relacionada.


## 5. Conecte los controladores de eventos para establecer el estado.

### Por último, cree los controladores de eventos que actualicen el estado. 

A continuación se muestra el formulario final, con todos los controladores de eventos conectados: 


App.js 

#### Hay dos componentes: Form y submitForm 

#### Form maneja la ui y submitForm una promesa

#### La función async handleSubmit espera la promesa del componente submitForm


```
import { useState } from 'react';

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}

```

#### La vista por defecto tiene a los estados answer(""), error(null), status ("typing")

#### Los elementos o la ui de la vista predeterminada/inicial modificarán estos valores con eventos y lógica y se modificará la misma vista. 

#### La función async handleSubmit cambia el estado status("typing") a "submit" con setStatus.

#### Ejecutá código en try  y ejecuta los errores en catch.

#### Espera el valor de la función submitForm(answer) y cambia la variable de estado status.

#### La función handleTextareaChange cambia el estado de answer según e.target.value


### Aunque este código es más extenso que el ejemplo imperativo original, es mucho menos frágil. 

### Expresar todas las interacciones como cambios de estado permite introducir posteriormente nuevos estados visuales sin afectar los existentes. 

### También permite cambiar lo que debe mostrarse en cada estado sin cambiar la lógica de la interacción.


## Rs inputs

### La programación declarativa implica describir la interfaz de usuario (IU) para cada estado visual en lugar de microgestionarla (imperativo).

### Al desarrollar un componente:

1. Identificar todos sus estados visuales.

2. Determinar los desencadenantes humanos y computacionales de los cambios de estado.

3. Modelar el estado con useState.

4. Eliminar los estados no esenciales para evitar errores y paradojas.

5. Conectar los controladores de eventos para establecer el estado.


## Ejercicios

1. Añadir y eliminar una clase CSS

Configure la imagen para que al hacer clic en ella se elimine la clase CSS background--active del <div> externo, pero se añada la clase picture--active al <img>. 

Al hacer clic de nuevo en el fondo, se restaurarán las clases CSS originales.


Visualmente, al hacer clic en la imagen se eliminará el fondo morado y se resaltará el borde. 

Al hacer clic fuera de la imagen, se resaltará el fondo, pero se eliminará el resaltado del borde. 


App.js 

```
export default function Picture() {
  return (
    <div className="background background--active">
      <img
        className="picture"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}

```


Solución:

### Este componente tiene dos estados visuales: cuando la imagen está activa y cuando está inactiva:

1. Cuando la imagen está activa, las clases CSS son background e picture picture--active.

2. Cuando la imagen está inactiva, las clases CSS son background background--active e picture.


### Una sola variable de estado booleana es suficiente para recordar si la imagen está activa.

La tarea original consistía en eliminar o añadir clases CSS. 

### Sin embargo, en React es necesario describir lo que se desea ver en lugar de manipular los elementos de la interfaz de usuario. 

#### Por lo tanto, es necesario calcular ambas clases CSS en función del estado actual. 

#### También es necesario detener la propagación para que al hacer clic en la imagen no se registre como un clic en el fondo.


Verifique que esta versión funcione haciendo clic en la imagen y luego fuera de ella:

App.js 

```
import { useState } from 'react';

export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  let backgroundClassName = 'background';
  let pictureClassName = 'picture';
  if (isActive) {
    pictureClassName += ' picture--active';
  } else {
    backgroundClassName += ' background--active';
  }

  return (
    <div
      className={backgroundClassName}
      onClick={() => setIsActive(false)}
    >
      <img
        onClick={e => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={pictureClassName}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}

```


Alternativamente, puede devolver dos fragmentos separados de JSX:

App.js 

```
import { useState } from 'react';

export default function Picture() {
  const [isActive, setIsActive] = useState(false);
  if (isActive) {
    return (
      <div
        className="background"
        onClick={() => setIsActive(false)}
      >
        <img
          className="picture picture--active"
          alt="Rainbow houses in Kampung Pelangi, Indonesia"
          src="https://i.imgur.com/5qwVYb1.jpeg"
          onClick={e => e.stopPropagation()}
        />
      </div>
    );
  }
  return (
    <div className="background background--active">
      <img
        className="picture"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={() => setIsActive(true)}
      />
    </div>
  );
}

```

### Tenga en cuenta que si dos fragmentos JSX diferentes describen el mismo árbol, su anidación (primero <div> → primero <img>) debe coincidir. 

#### De lo contrario, al activar o desactivar isActive, se recrearía todo el árbol inferior y se restablecería su estado. 

Por eso, si se devuelve un árbol JSX similar en ambos casos, es mejor escribirlos como un solo fragmento JSX.


2. Editor de perfiles

Aquí tienes un pequeño formulario implementado con JavaScript y DOM. 

Experimenta con él para comprender su funcionamiento:


index.js 

```
function handleFormSubmit(e) {
  e.preventDefault();
  if (editButton.textContent === 'Edit Profile') {
    editButton.textContent = 'Save Profile';
    hide(firstNameText);
    hide(lastNameText);
    show(firstNameInput);
    show(lastNameInput);
  } else {
    editButton.textContent = 'Edit Profile';
    hide(firstNameInput);
    hide(lastNameInput);
    show(firstNameText);
    show(lastNameText);
  }
}

function handleFirstNameChange() {
  firstNameText.textContent = firstNameInput.value;
  helloText.textContent = (
    'Hello ' +
    firstNameInput.value + ' ' +
    lastNameInput.value + '!'
  );
}

function handleLastNameChange() {
  lastNameText.textContent = lastNameInput.value;
  helloText.textContent = (
    'Hello ' +
    firstNameInput.value + ' ' +
    lastNameInput.value + '!'
  );
}

function hide(el) {
  el.style.display = 'none';
}

function show(el) {
  el.style.display = '';
}

let form = document.getElementById('form');
let editButton = document.getElementById('editButton');
let firstNameInput = document.getElementById('firstNameInput');
let firstNameText = document.getElementById('firstNameText');
let lastNameInput = document.getElementById('lastNameInput');
let lastNameText = document.getElementById('lastNameText');
let helloText = document.getElementById('helloText');
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;

```


index.html

```
<form id="form">
  <label>
    First name:
    <b id="firstNameText">Jane</b>
    <input
      id="firstNameInput"
      value="Jane"
      style="display: none">
  </label>
  <label>
    Last name:
    <b id="lastNameText">Jacobs</b>
    <input
      id="lastNameInput"
      value="Jacobs"
      style="display: none">
  </label>
  <button type="submit" id="editButton">Edit Profile</button>
  <p><i id="helloText">Hello, Jane Jacobs!</i></p>
</form>

<style>
* { box-sizing: border-box; }
body { font-family: sans-serif; margin: 20px; padding: 0; }
label { display: block; margin-bottom: 20px; }
</style>

```


### Este formulario cambia entre dos modos: en el modo de edición, se ven las entradas, y en el modo de visualización, solo se ve el resultado. 

La etiqueta del botón cambia entre "Editar" y "Guardar" según el modo en el que se encuentre. 

Al cambiar las entradas, el mensaje de bienvenida en la parte inferior se actualiza en tiempo real.


Tu tarea es reimplementarlo en React en el entorno de pruebas que se muestra a continuación. 

Para tu comodidad, el marcado ya se convirtió a JSX, pero tendrás que configurarlo para que muestre y oculte las entradas como el original.


¡Asegúrate de que también se actualice el texto en la parte inferior!

App.js 

```
export default function EditProfile() {
  return (
    <form>
      <label>
        First name:{' '}
        <b>Jane</b>
        <input />
      </label>
      <label>
        Last name:{' '}
        <b>Jacobs</b>
        <input />
      </label>
      <button type="submit">
        Edit Profile
      </button>
      <p><i>Hello, Jane Jacobs!</i></p>
    </form>
  );
}

```

Solución:

#### Necesitará dos variables de estado para almacenar los valores de entrada: firstName y lastName. 

#### También necesitará una variable de estado isEditing que indique si se muestran o no las entradas. 

No debería necesitar una variable fullName, ya que el nombre completo siempre se puede calcular a partir de firstName y lastName.


Finalmente, debería usar la representación condicional para mostrar u ocultar las entradas según isEditing.


App.js 

```
import { useState } from 'react';

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');

  return (
    <form onSubmit={e => {
      e.preventDefault();
      setIsEditing(!isEditing);
    }}>
      <label>
        First name:{' '}
        {isEditing ? (
          <input
            value={firstName}
            onChange={e => {
              setFirstName(e.target.value)
            }}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label>
        Last name:{' '}
        {isEditing ? (
          <input
            value={lastName}
            onChange={e => {
              setLastName(e.target.value)
            }}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <button type="submit">
        {isEditing ? 'Save' : 'Edit'} Profile
      </button>
      <p><i>Hello, {firstName} {lastName}!</i></p>
    </form>
  );
}

```

Compare esta solución con el código imperativo original. ¿En qué se diferencian?


3. Refactorizar la solución imperativa sin React

Aquí está el entorno de pruebas original del desafío anterior, escrito imperativamente sin React: 


index.js 

```
function handleFormSubmit(e) {
  e.preventDefault();
  if (editButton.textContent === 'Edit Profile') {
    editButton.textContent = 'Save Profile';
    hide(firstNameText);
    hide(lastNameText);
    show(firstNameInput);
    show(lastNameInput);
  } else {
    editButton.textContent = 'Edit Profile';
    hide(firstNameInput);
    hide(lastNameInput);
    show(firstNameText);
    show(lastNameText);
  }
}

function handleFirstNameChange() {
  firstNameText.textContent = firstNameInput.value;
  helloText.textContent = (
    'Hello ' +
    firstNameInput.value + ' ' +
    lastNameInput.value + '!'
  );
}

function handleLastNameChange() {
  lastNameText.textContent = lastNameInput.value;
  helloText.textContent = (
    'Hello ' +
    firstNameInput.value + ' ' +
    lastNameInput.value + '!'
  );
}

function hide(el) {
  el.style.display = 'none';
}

function show(el) {
  el.style.display = '';
}

let form = document.getElementById('form');
let editButton = document.getElementById('editButton');
let firstNameInput = document.getElementById('firstNameInput');
let firstNameText = document.getElementById('firstNameText');
let lastNameInput = document.getElementById('lastNameInput');
let lastNameText = document.getElementById('lastNameText');
let helloText = document.getElementById('helloText');
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;

```

index.html 

```
<form id="form">
  <label>
    First name:
    <b id="firstNameText">Jane</b>
    <input
      id="firstNameInput"
      value="Jane"
      style="display: none">
  </label>
  <label>
    Last name:
    <b id="lastNameText">Jacobs</b>
    <input
      id="lastNameInput"
      value="Jacobs"
      style="display: none">
  </label>
  <button type="submit" id="editButton">Edit Profile</button>
  <p><i id="helloText">Hello, Jane Jacobs!</i></p>
</form>

<style>
* { box-sizing: border-box; }
body { font-family: sans-serif; margin: 20px; padding: 0; }
label { display: block; margin-bottom: 20px; }
</style>

```

Imagina que React no existiera. 

¿Podrías refactorizar este código para que la lógica sea menos frágil y más similar a la de la versión de React? 

¿Cómo se vería si el estado fuera explícito, como en React?


Si te cuesta saber por dónde empezar, el siguiente stub ya tiene la mayor parte de la estructura. 

Si empiezas aquí, completa la lógica que falta en la función updateDOM. 

(Consulta el código original si es necesario).


index.js 

```
let firstName = 'Jane';
let lastName = 'Jacobs';
let isEditing = false;

function handleFormSubmit(e) {
  e.preventDefault();
  setIsEditing(!isEditing);
}

function handleFirstNameChange(e) {
  setFirstName(e.target.value);
}

function handleLastNameChange(e) {
  setLastName(e.target.value);
}

function setFirstName(value) {
  firstName = value;
  updateDOM();
}

function setLastName(value) {
  lastName = value;
  updateDOM();
}

function setIsEditing(value) {
  isEditing = value;
  updateDOM();
}

function updateDOM() {
  if (isEditing) {
    editButton.textContent = 'Save Profile';
    // TODO: show inputs, hide content
  } else {
    editButton.textContent = 'Edit Profile';
    // TODO: hide inputs, show content
  }
  // TODO: update text labels
}

function hide(el) {
  el.style.display = 'none';
}

function show(el) {
  el.style.display = '';
}

let form = document.getElementById('form');
let editButton = document.getElementById('editButton');
let firstNameInput = document.getElementById('firstNameInput');
let firstNameText = document.getElementById('firstNameText');
let lastNameInput = document.getElementById('lastNameInput');
let lastNameText = document.getElementById('lastNameText');
let helloText = document.getElementById('helloText');
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;

```


index.html

```
<form id="form">
  <label>
    First name:
    <b id="firstNameText">Jane</b>
    <input
      id="firstNameInput"
      value="Jane"
      style="display: none">
  </label>
  <label>
    Last name:
    <b id="lastNameText">Jacobs</b>
    <input
      id="lastNameInput"
      value="Jacobs"
      style="display: none">
  </label>
  <button type="submit" id="editButton">Edit Profile</button>
  <p><i id="helloText">Hello, Jane Jacobs!</i></p>
</form>

<style>
* { box-sizing: border-box; }
body { font-family: sans-serif; margin: 20px; padding: 0; }
label { display: block; margin-bottom: 20px; }
</style>

```

Solución

La lógica que faltaba incluía alternar la visualización de entradas y contenido, y actualizar las etiquetas:

```
let firstName = 'Jane';
let lastName = 'Jacobs';
let isEditing = false;

function handleFormSubmit(e) {
  e.preventDefault();
  setIsEditing(!isEditing);
}

function handleFirstNameChange(e) {
  setFirstName(e.target.value);
}

function handleLastNameChange(e) {
  setLastName(e.target.value);
}

function setFirstName(value) {
  firstName = value;
  updateDOM();
}

function setLastName(value) {
  lastName = value;
  updateDOM();
}

function setIsEditing(value) {
  isEditing = value;
  updateDOM();
}

function updateDOM() {
  if (isEditing) {
    editButton.textContent = 'Save Profile';
    hide(firstNameText);
    hide(lastNameText);
    show(firstNameInput);
    show(lastNameInput);
  } else {
    editButton.textContent = 'Edit Profile';
    hide(firstNameInput);
    hide(lastNameInput);
    show(firstNameText);
    show(lastNameText);
  }
  firstNameText.textContent = firstName;
  lastNameText.textContent = lastName;
  helloText.textContent = (
    'Hello ' +
    firstName + ' ' +
    lastName + '!'
  );
}

function hide(el) {
  el.style.display = 'none';
}

function show(el) {
  el.style.display = '';
}

let form = document.getElementById('form');
let editButton = document.getElementById('editButton');
let firstNameInput = document.getElementById('firstNameInput');
let firstNameText = document.getElementById('firstNameText');
let lastNameInput = document.getElementById('lastNameInput');
let lastNameText = document.getElementById('lastNameText');
let helloText = document.getElementById('helloText');
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;

```


index.html

```
<form id="form">
  <label>
    First name:
    <b id="firstNameText">Jane</b>
    <input
      id="firstNameInput"
      value="Jane"
      style="display: none">
  </label>
  <label>
    Last name:
    <b id="lastNameText">Jacobs</b>
    <input
      id="lastNameInput"
      value="Jacobs"
      style="display: none">
  </label>
  <button type="submit" id="editButton">Edit Profile</button>
  <p><i id="helloText">Hello, Jane Jacobs!</i></p>
</form>

<style>
* { box-sizing: border-box; }
body { font-family: sans-serif; margin: 20px; padding: 0; }
label { display: block; margin-bottom: 20px; }
</style>

```

#### La función updateDOM que escribiste muestra lo que React hace internamente al configurar el estado. 

#### (Sin embargo, React también evita tocar el DOM en el caso de propiedades que no han cambiado desde la última vez que se configuraron).



# Elección de la estructura de estado

### Una buena estructura de estado puede marcar la diferencia entre un componente fácil de modificar y depurar y uno que sea una fuente constante de errores. 

Aquí tienes algunos consejos que debes tener en cuenta al estructurar el estado.


Aprenderás:

Cuándo usar una o varias variables de estado

Qué evitar al organizar el estado

Cómo solucionar problemas comunes con la estructura de estado


## Principios para la estructuración de estados

### Al escribir un componente que contiene un estado, deberá decidir cuántas variables de estado usar y cuál debe ser la forma de sus datos. 

Si bien es posible escribir programas correctos incluso con una estructura de estados deficiente, existen algunos principios que pueden guiarle para tomar mejores decisiones:


1. Agrupar estados relacionados. 

### Si siempre actualiza dos o más variables de estado simultáneamente, considere fusionarlas en una sola.


2. Evitar contradicciones en el estado. 

### Cuando el estado está estructurado de tal manera que varias partes del mismo pueden contradecirse y discrepar entre sí, se abre la posibilidad de errores. 

Intente evitar esto.


3. Evitar estados redundantes. 

### Si puede calcular información a partir de las propiedades del componente o de sus variables de estado existentes durante la renderización, no debe incluir esa información en el estado de ese componente.


4. Evitar la duplicación de estados. 

### Cuando los mismos datos se duplican entre múltiples variables de estado o dentro de objetos anidados, es difícil mantenerlos sincronizados. 

Reduzca la duplicación siempre que sea posible.


5. Evite los estados profundamente anidados. 

Los estados profundamente jerárquicos no son muy fáciles de actualizar. 

### Siempre que sea posible, opte por estructurar el estado de forma plana.


### El objetivo de estos principios es facilitar la actualización del estado sin introducir errores. 

### Eliminar datos redundantes y duplicados del estado ayuda a garantizar que todos sus componentes se mantengan sincronizados. 

Esto es similar a cómo un ingeniero de bases de datos querría "normalizar" la estructura de la base de datos para reducir la posibilidad de errores. 

Parafraseando a Albert Einstein: "Simplifique su estado al máximo, pero no más".


Veamos ahora cómo se aplican estos principios en la práctica. 


## Estado relacionado con el grupo

A veces, podrías tener dudas sobre si usar una o varias variables de estado.

¿Deberías hacerlo?

```
const [x, setX] = useState(0);
const [y, setY] = useState(0);

```

o 

```
const [position, setPosition] = useState({ x: 0, y: 0 });

```

Técnicamente, se puede usar cualquiera de estos enfoques. 

#### Pero si dos variables de estado cambian siempre juntas, sería buena idea unificarlas en una sola. 

Así, no olvidará mantenerlas siempre sincronizadas, como en este ejemplo donde al mover el cursor se actualizan ambas coordenadas del punto rojo:


App.js 

```
import { useState } from 'react';

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  )
}

```

### Otro caso en el que se agrupan datos en un objeto o una matriz es cuando no se sabe cuántos fragmentos de estado se necesitarán. 

Por ejemplo, es útil cuando se tiene un formulario donde el usuario puede agregar campos personalizados.


### Error

#### Si tu variable de estado es un objeto, recuerda que no puedes actualizar solo un campo sin copiar explícitamente los demás. 

Por ejemplo, no puedes usar setPosition({ x: 100 }) en el ejemplo anterior porque no tendría la propiedad y. 

En cambio, si quisieras establecer solo x, usarías setPosition({ ...position, x: 100 }) o las dividirías en dos variables de estado y usarías setX(100).


## Evite contradicciones de estado.

A continuación, se muestra un formulario de comentarios de un hotel con las variables de estado "isSending" e "isSent":


App.js 

```
import { useState } from 'react';

export default function FeedbackForm() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    await sendMessage(text);
    setIsSending(false);
    setIsSent(true);
  }

  if (isSent) {
    return <h1>Thanks for feedback!</h1>
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button
        disabled={isSending}
        type="submit"
      >
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}

// Pretend to send a message.
function sendMessage(text) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}

```

#### Si bien este código funciona, deja la puerta abierta a estados "imposibles". 

#### Por ejemplo, si olvida llamar a setIsSent y setIsSending simultáneamente, podría terminar en una situación en la que isSending e isSent sean verdaderos al mismo tiempo. 

Cuanto más complejo sea el componente, más difícil será comprender qué sucedió.


### Como isSending e isSent nunca deben ser verdaderos al mismo tiempo, es mejor reemplazarlos con una variable de estado que pueda tomar uno de tres estados válidos: 'typing' (inicial), 'sending' y 'sent'.

App.js

```
import { useState } from 'react';

export default function FeedbackForm() {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('typing');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    await sendMessage(text);
    setStatus('sent');
  }

  const isSending = status === 'sending';
  const isSent = status === 'sent';

  if (isSent) {
    return <h1>Thanks for feedback!</h1>
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button
        disabled={isSending}
        type="submit"
      >
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}

// Pretend to send a message.
function sendMessage(text) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}

```

#### Aún puedes declarar algunas constantes para facilitar la lectura:

```
const isSending = status === 'sending';
const isSent = status === 'sent';

```

#### Pero no son variables de estado, así que no tienes que preocuparte de que se desincronizan.


## Evitar estados redundantes

### Si se puede calcular información a partir de las propiedades del componente o de sus variables de estado existentes durante el renderizado, no se debe incluir dicha información en el estado del componente.


Por ejemplo, considere este formulario. 

Funciona, pero ¿puede encontrar algún estado redundante en él?

```
import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + ' ' + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    setFullName(firstName + ' ' + e.target.value);
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}

```

#### Este formulario tiene tres variables de estado: firstName, lastName y fullName. 

#### Sin embargo, fullName es redundante. 

#### Siempre puedes calcular fullName a partir de firstName y lastName durante la renderización, así que elimínalo del estado.


Así es como puedes hacerlo:


App.js 

```
import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}

```

Aquí, fullName no es una variable de estado. 

Se calcula durante el renderizado:

```
const fullName = firstName + ' ' + lastName;

```

#### Por lo tanto, los controladores de cambios no necesitan hacer nada especial para actualizarlo. 

#### Al llamar a setFirstName o setLastName, se activa un nuevo renderizado y, a continuación, se calcula el siguiente fullName a partir de los datos actualizados.


## En profundidad: no reflejes las props en el estado

### Un ejemplo común de estado redundante es código como este:

```
function Message({ messageColor }) {
const [color, setColor] = useState(messageColor);

```

#### Aquí, una variable de estado de color se inicializa con la propiedad messageColor. 

#### El problema radica en que si el componente padre pasa un valor diferente de messageColor posteriormente (por ejemplo, 'rojo' en lugar de 'azul'), la variable de estado de color no se actualizará. 

#### El estado solo se inicializa durante la primera renderización.


Por eso, reflejar alguna propiedad en una variable de estado puede generar confusión. 

#### En su lugar, use la propiedad messageColor directamente en su código. 

Si desea darle un nombre más corto, use una constante:

```
function Message({ messageColor }) {
  const color = messageColor;

```

#### De esta forma, no se desincronizará con la propiedad pasada desde el componente padre.

### Reflejar propiedades en el estado solo tiene sentido cuando se desean ignorar todas las actualizaciones de una propiedad específica. 

Por convención, el nombre de la propiedad debe comenzar con "initial" o "predeterminado" para aclarar que sus nuevos valores se ignoran:

```
function Message({ initialColor }) {
// La variable de estado `color` contiene el *primer* valor de `initialColor`.
// Los cambios posteriores a la propiedad `initialColor` se ignoran.
  const [color, setColor] = useState(initialColor);

```


## Evitar duplicación de estados

Este componente de lista de menú le permite elegir un único travel snack entre varios:


App.js

```
import { useState } from 'react';

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(
    items[0]
  );

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title}
            {' '}
            <button onClick={() => {
              setSelectedItem(item);
            }}>Choose</button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  );
}

```

Actualmente, almacena el elemento seleccionado como un objeto en la variable de estado selectedItem. 

Sin embargo, esto no es muy útil: el contenido de selectedItem es el mismo objeto que uno de los elementos de la lista de elementos. 

Esto significa que la información sobre el elemento se duplica en dos lugares.


¿Por qué es un problema? Hagamos que cada elemento sea editable:


App.js

```
import { useState } from 'react';

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(
    items[0]
  );

  function handleItemChange(id, e) {
    setItems(items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          title: e.target.value,
        };
      } else {
        return item;
      }
    }));
  }

  return (
    <>
      <h2>What's your travel snack?</h2> 
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={e => {
                handleItemChange(item.id, e)
              }}
            />
            {' '}
            <button onClick={() => {
              setSelectedItem(item);
            }}>Choose</button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  );
}

```

#### Observa cómo, si primero haces clic en "Seleccionar" en un elemento y luego lo editas, la entrada se actualiza, pero la etiqueta inferior no refleja las modificaciones. 

### Esto se debe a que tienes un estado duplicado y olvidaste actualizar selectedItem.


Aunque también podrías actualizar selectedItem, una solución más sencilla es eliminar la duplicación. 

#### En este ejemplo, en lugar de un objeto selectedItem (que crea una duplicación con objetos dentro de los elementos), mantienes el selectedId en el estado y luego obtienes el selectedItem buscando en la matriz de elementos un elemento con ese ID:

```
import { useState } from 'react';

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find(item =>
    item.id === selectedId
  );

  function handleItemChange(id, e) {
    setItems(items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          title: e.target.value,
        };
      } else {
        return item;
      }
    }));
  }

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={e => {
                handleItemChange(item.id, e)
              }}
            />
            {' '}
            <button onClick={() => {
              setSelectedId(item.id);
            }}>Choose</button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  );
}

```

El estado solía duplicarse así:

1. ```items = [{ id: 0, title: 'pretzels'}, ...]```

2. selectedItem = {id: 0, title: 'pretzels'}


Pero después del cambio, queda así:

1. ```items = [{ id: 0, title: 'pretzels'}, ...]```

2. selectedId = 0


¡La duplicación ha desaparecido y solo se conserva el estado esencial!


Ahora, si edita el elemento seleccionado, el mensaje a continuación se actualizará inmediatamente. 

### Esto se debe a que setItems activa un nuevo renderizado, y items.find(...) encuentra el elemento con el título actualizado. 

#### No era necesario mantener el estado del elemento seleccionado, ya que solo el ID seleccionado es esencial. 

#### El resto se puede calcular durante el renderizado.


## Evite estados muy anidados

Imagine un plan de viaje compuesto por planetas, continentes y países. 

Podría verse tentado a estructurar su estado mediante objetos anidados y matrices, como en este ejemplo:


Places.js

```
export const initialTravelPlan = {
  id: 0,
  title: '(Root)',
  childPlaces: [{
    id: 1,
    title: 'Earth',
    childPlaces: [{
      id: 2,
      title: 'Africa',
      childPlaces: [{
        id: 3,
        title: 'Botswana',
        childPlaces: []
      }, {
        id: 4,
        title: 'Egypt',
        childPlaces: []
      }, {
        id: 5,
        title: 'Kenya',
        childPlaces: []
      }, {
        id: 6,
        title: 'Madagascar',
        childPlaces: []
      }, {
        id: 7,
        title: 'Morocco',
        childPlaces: []
      }, {
        id: 8,
        title: 'Nigeria',
        childPlaces: []
      }, {
        id: 9,
        title: 'South Africa',
        childPlaces: []
      }]
    }, {
      id: 10,
      title: 'Americas',
      childPlaces: [{
        id: 11,
        title: 'Argentina',
        childPlaces: []
      }, {
        id: 12,
        title: 'Brazil',
        childPlaces: []
      }, {
        id: 13,
        title: 'Barbados',
        childPlaces: []
      }, {
        id: 14,
        title: 'Canada',
        childPlaces: []
      }, {
        id: 15,
        title: 'Jamaica',
        childPlaces: []
      }, {
        id: 16,
        title: 'Mexico',
        childPlaces: []
      }, {
        id: 17,
        title: 'Trinidad and Tobago',
        childPlaces: []
      }, {
        id: 18,
        title: 'Venezuela',
        childPlaces: []
      }]
    }, {
      id: 19,
      title: 'Asia',
      childPlaces: [{
        id: 20,
        title: 'China',
        childPlaces: []
      }, {
        id: 21,
        title: 'India',
        childPlaces: []
      }, {
        id: 22,
        title: 'Singapore',
        childPlaces: []
      }, {
        id: 23,
        title: 'South Korea',
        childPlaces: []
      }, {
        id: 24,
        title: 'Thailand',
        childPlaces: []
      }, {
        id: 25,
        title: 'Vietnam',
        childPlaces: []
      }]
    }, {
      id: 26,
      title: 'Europe',
      childPlaces: [{
        id: 27,
        title: 'Croatia',
        childPlaces: [],
      }, {
        id: 28,
        title: 'France',
        childPlaces: [],
      }, {
        id: 29,
        title: 'Germany',
        childPlaces: [],
      }, {
        id: 30,
        title: 'Italy',
        childPlaces: [],
      }, {
        id: 31,
        title: 'Portugal',
        childPlaces: [],
      }, {
        id: 32,
        title: 'Spain',
        childPlaces: [],
      }, {
        id: 33,
        title: 'Turkey',
        childPlaces: [],
      }]
    }, {
      id: 34,
      title: 'Oceania',
      childPlaces: [{
        id: 35,
        title: 'Australia',
        childPlaces: [],
      }, {
        id: 36,
        title: 'Bora Bora (French Polynesia)',
        childPlaces: [],
      }, {
        id: 37,
        title: 'Easter Island (Chile)',
        childPlaces: [],
      }, {
        id: 38,
        title: 'Fiji',
        childPlaces: [],
      }, {
        id: 39,
        title: 'Hawaii (the USA)',
        childPlaces: [],
      }, {
        id: 40,
        title: 'New Zealand',
        childPlaces: [],
      }, {
        id: 41,
        title: 'Vanuatu',
        childPlaces: [],
      }]
    }]
  }, {
    id: 42,
    title: 'Moon',
    childPlaces: [{
      id: 43,
      title: 'Rheita',
      childPlaces: []
    }, {
      id: 44,
      title: 'Piccolomini',
      childPlaces: []
    }, {
      id: 45,
      title: 'Tycho',
      childPlaces: []
    }]
  }, {
    id: 46,
    title: 'Mars',
    childPlaces: [{
      id: 47,
      title: 'Corn Town',
      childPlaces: []
    }, {
      id: 48,
      title: 'Green Hill',
      childPlaces: []      
    }]
  }]
};

```


App.js 

```
import { useState } from 'react';
import { initialTravelPlan } from './places.js';

function PlaceTree({ place }) {
  const childPlaces = place.childPlaces;
  return (
    <li>
      {place.title}
      {childPlaces.length > 0 && (
        <ol>
          {childPlaces.map(place => (
            <PlaceTree key={place.id} place={place} />
          ))}
        </ol>
      )}
    </li>
  );
}

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const planets = plan.childPlaces;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planets.map(place => (
          <PlaceTree key={place.id} place={place} />
        ))}
      </ol>
    </>
  );
}

```

#### Ahora, supongamos que quieres añadir un botón para eliminar un lugar que ya has visitado. 

#### ¿Cómo lo harías? Actualizar un estado anidado implica copiar todos los objetos desde la parte que cambió. 

### Eliminar un lugar profundamente anidado implica copiar toda su cadena de lugares padre. 

Este código puede ser muy extenso.


### Si el estado está demasiado anidado para actualizarse fácilmente, considera hacerlo plano. 

Aquí tienes una forma de reestructurar estos datos. 

### En lugar de una estructura de árbol donde cada lugar tiene un array de sus lugares secundarios, puedes hacer que cada lugar contenga un array de sus ID de lugar secundarios. 

### Luego, almacena una asignación de cada ID de lugar a su lugar correspondiente.


Esta reestructuración de datos podría recordarte a una tabla de base de datos:


places.js

```
export const initialTravelPlan = {
  0: {
    id: 0,
    title: '(Root)',
    childIds: [1, 42, 46],
  },
  1: {
    id: 1,
    title: 'Earth',
    childIds: [2, 10, 19, 26, 34]
  },
  2: {
    id: 2,
    title: 'Africa',
    childIds: [3, 4, 5, 6 , 7, 8, 9]
  }, 
  3: {
    id: 3,
    title: 'Botswana',
    childIds: []
  },
  4: {
    id: 4,
    title: 'Egypt',
    childIds: []
  },
  5: {
    id: 5,
    title: 'Kenya',
    childIds: []
  },
  6: {
    id: 6,
    title: 'Madagascar',
    childIds: []
  }, 
  7: {
    id: 7,
    title: 'Morocco',
    childIds: []
  },
  8: {
    id: 8,
    title: 'Nigeria',
    childIds: []
  },
  9: {
    id: 9,
    title: 'South Africa',
    childIds: []
  },
  10: {
    id: 10,
    title: 'Americas',
    childIds: [11, 12, 13, 14, 15, 16, 17, 18],   
  },
  11: {
    id: 11,
    title: 'Argentina',
    childIds: []
  },
  12: {
    id: 12,
    title: 'Brazil',
    childIds: []
  },
  13: {
    id: 13,
    title: 'Barbados',
    childIds: []
  }, 
  14: {
    id: 14,
    title: 'Canada',
    childIds: []
  },
  15: {
    id: 15,
    title: 'Jamaica',
    childIds: []
  },
  16: {
    id: 16,
    title: 'Mexico',
    childIds: []
  },
  17: {
    id: 17,
    title: 'Trinidad and Tobago',
    childIds: []
  },
  18: {
    id: 18,
    title: 'Venezuela',
    childIds: []
  },
  19: {
    id: 19,
    title: 'Asia',
    childIds: [20, 21, 22, 23, 24, 25],   
  },
  20: {
    id: 20,
    title: 'China',
    childIds: []
  },
  21: {
    id: 21,
    title: 'India',
    childIds: []
  },
  22: {
    id: 22,
    title: 'Singapore',
    childIds: []
  },
  23: {
    id: 23,
    title: 'South Korea',
    childIds: []
  },
  24: {
    id: 24,
    title: 'Thailand',
    childIds: []
  },
  25: {
    id: 25,
    title: 'Vietnam',
    childIds: []
  },
  26: {
    id: 26,
    title: 'Europe',
    childIds: [27, 28, 29, 30, 31, 32, 33],   
  },
  27: {
    id: 27,
    title: 'Croatia',
    childIds: []
  },
  28: {
    id: 28,
    title: 'France',
    childIds: []
  },
  29: {
    id: 29,
    title: 'Germany',
    childIds: []
  },
  30: {
    id: 30,
    title: 'Italy',
    childIds: []
  },
  31: {
    id: 31,
    title: 'Portugal',
    childIds: []
  },
  32: {
    id: 32,
    title: 'Spain',
    childIds: []
  },
  33: {
    id: 33,
    title: 'Turkey',
    childIds: []
  },
  34: {
    id: 34,
    title: 'Oceania',
    childIds: [35, 36, 37, 38, 39, 40, 41],   
  },
  35: {
    id: 35,
    title: 'Australia',
    childIds: []
  },
  36: {
    id: 36,
    title: 'Bora Bora (French Polynesia)',
    childIds: []
  },
  37: {
    id: 37,
    title: 'Easter Island (Chile)',
    childIds: []
  },
  38: {
    id: 38,
    title: 'Fiji',
    childIds: []
  },
  39: {
    id: 40,
    title: 'Hawaii (the USA)',
    childIds: []
  },
  40: {
    id: 40,
    title: 'New Zealand',
    childIds: []
  },
  41: {
    id: 41,
    title: 'Vanuatu',
    childIds: []
  },
  42: {
    id: 42,
    title: 'Moon',
    childIds: [43, 44, 45]
  },
  43: {
    id: 43,
    title: 'Rheita',
    childIds: []
  },
  44: {
    id: 44,
    title: 'Piccolomini',
    childIds: []
  },
  45: {
    id: 45,
    title: 'Tycho',
    childIds: []
  },
  46: {
    id: 46,
    title: 'Mars',
    childIds: [47, 48]
  },
  47: {
    id: 47,
    title: 'Corn Town',
    childIds: []
  },
  48: {
    id: 48,
    title: 'Green Hill',
    childIds: []
  }
};

```


App.js

```
import { useState } from 'react';
import { initialTravelPlan } from './places.js';

function PlaceTree({ id, placesById }) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}
      {childIds.length > 0 && (
        <ol>
          {childIds.map(childId => (
            <PlaceTree
              key={childId}
              id={childId}
              placesById={placesById}
            />
          ))}
        </ol>
      )}
    </li>
  );
}

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(id => (
          <PlaceTree
            key={id}
            id={id}
            placesById={plan}
          />
        ))}
      </ol>
    </>
  );
}

```

Ahora que el estado es "plano" (también conocido como "normalizado"), actualizar elementos anidados es más sencillo.


### Para eliminar un lugar, solo necesita actualizar dos niveles de estado:

1. La versión actualizada de su lugar padre debe excluir el ID eliminado de su matriz childIds.

2. La versión actualizada del objeto raíz "table" debe incluir la versión actualizada del lugar padre.


A continuación, se muestra un ejemplo de cómo podría hacerlo:


places.js

```
export const initialTravelPlan = {
  0: {
    id: 0,
    title: '(Root)',
    childIds: [1, 42, 46],
  },
  1: {
    id: 1,
    title: 'Earth',
    childIds: [2, 10, 19, 26, 34]
  },
  2: {
    id: 2,
    title: 'Africa',
    childIds: [3, 4, 5, 6 , 7, 8, 9]
  }, 
  3: {
    id: 3,
    title: 'Botswana',
    childIds: []
  },
  4: {
    id: 4,
    title: 'Egypt',
    childIds: []
  },
  5: {
    id: 5,
    title: 'Kenya',
    childIds: []
  },
  6: {
    id: 6,
    title: 'Madagascar',
    childIds: []
  }, 
  7: {
    id: 7,
    title: 'Morocco',
    childIds: []
  },
  8: {
    id: 8,
    title: 'Nigeria',
    childIds: []
  },
  9: {
    id: 9,
    title: 'South Africa',
    childIds: []
  },
  10: {
    id: 10,
    title: 'Americas',
    childIds: [11, 12, 13, 14, 15, 16, 17, 18],   
  },
  11: {
    id: 11,
    title: 'Argentina',
    childIds: []
  },
  12: {
    id: 12,
    title: 'Brazil',
    childIds: []
  },
  13: {
    id: 13,
    title: 'Barbados',
    childIds: []
  }, 
  14: {
    id: 14,
    title: 'Canada',
    childIds: []
  },
  15: {
    id: 15,
    title: 'Jamaica',
    childIds: []
  },
  16: {
    id: 16,
    title: 'Mexico',
    childIds: []
  },
  17: {
    id: 17,
    title: 'Trinidad and Tobago',
    childIds: []
  },
  18: {
    id: 18,
    title: 'Venezuela',
    childIds: []
  },
  19: {
    id: 19,
    title: 'Asia',
    childIds: [20, 21, 22, 23, 24, 25],   
  },
  20: {
    id: 20,
    title: 'China',
    childIds: []
  },
  21: {
    id: 21,
    title: 'India',
    childIds: []
  },
  22: {
    id: 22,
    title: 'Singapore',
    childIds: []
  },
  23: {
    id: 23,
    title: 'South Korea',
    childIds: []
  },
  24: {
    id: 24,
    title: 'Thailand',
    childIds: []
  },
  25: {
    id: 25,
    title: 'Vietnam',
    childIds: []
  },
  26: {
    id: 26,
    title: 'Europe',
    childIds: [27, 28, 29, 30, 31, 32, 33],   
  },
  27: {
    id: 27,
    title: 'Croatia',
    childIds: []
  },
  28: {
    id: 28,
    title: 'France',
    childIds: []
  },
  29: {
    id: 29,
    title: 'Germany',
    childIds: []
  },
  30: {
    id: 30,
    title: 'Italy',
    childIds: []
  },
  31: {
    id: 31,
    title: 'Portugal',
    childIds: []
  },
  32: {
    id: 32,
    title: 'Spain',
    childIds: []
  },
  33: {
    id: 33,
    title: 'Turkey',
    childIds: []
  },
  34: {
    id: 34,
    title: 'Oceania',
    childIds: [35, 36, 37, 38, 39, 40, 41],   
  },
  35: {
    id: 35,
    title: 'Australia',
    childIds: []
  },
  36: {
    id: 36,
    title: 'Bora Bora (French Polynesia)',
    childIds: []
  },
  37: {
    id: 37,
    title: 'Easter Island (Chile)',
    childIds: []
  },
  38: {
    id: 38,
    title: 'Fiji',
    childIds: []
  },
  39: {
    id: 39,
    title: 'Hawaii (the USA)',
    childIds: []
  },
  40: {
    id: 40,
    title: 'New Zealand',
    childIds: []
  },
  41: {
    id: 41,
    title: 'Vanuatu',
    childIds: []
  },
  42: {
    id: 42,
    title: 'Moon',
    childIds: [43, 44, 45]
  },
  43: {
    id: 43,
    title: 'Rheita',
    childIds: []
  },
  44: {
    id: 44,
    title: 'Piccolomini',
    childIds: []
  },
  45: {
    id: 45,
    title: 'Tycho',
    childIds: []
  },
  46: {
    id: 46,
    title: 'Mars',
    childIds: [47, 48]
  },
  47: {
    id: 47,
    title: 'Corn Town',
    childIds: []
  },
  48: {
    id: 48,
    title: 'Green Hill',
    childIds: []
  }
};

```


App.js

```
import { useState } from 'react';
import { initialTravelPlan } from './places.js';

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);

  function handleComplete(parentId, childId) {
    const parent = plan[parentId];
    // Create a new version of the parent place
    // that doesn't include this child ID.
    const nextParent = {
      ...parent,
      childIds: parent.childIds
        .filter(id => id !== childId)
    };
    // Update the root state object...
    setPlan({
      ...plan,
      // ...so that it has the updated parent.
      [parentId]: nextParent
    });
  }

  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(id => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
}

function PlaceTree({ id, parentId, placesById, onComplete }) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}
      <button onClick={() => {
        onComplete(parentId, id);
      }}>
        Complete
      </button>
      {childIds.length > 0 &&
        <ol>
          {childIds.map(childId => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      }
    </li>
  );
}

```

Puedes anidar estados tanto como quieras, pero hacerlos planos puede resolver numerosos problemas. 

Facilita la actualización de estados y ayuda a evitar duplicaciones en diferentes partes de un objeto anidado.


## En profundidad: Mejorar el uso de la memoria

Idealmente, también eliminaría los elementos eliminados (¡y sus elementos secundarios!) del objeto "tabla" para optimizar el uso de memoria.

Esta versión lo hace. 

Además, utiliza Immer para que la lógica de actualización sea más concisa.



# Programa imperativo 



# Programa imperativo-estado 



# Programa basado en estado 




# Backend 

## Estruct Algort

## Control 

## Db

## Rutas

## Validación


# Frontend

## Componentes

## Interpolación

## Estado 

## Eventos

## Rutas

## Forms 

## Validación

## Search


# Fullstack 

## Crud

## Apis 

## 


# Tools

## Git/GitHub

## Testing

## Comp

## Debugg

## Dependencias: Desarrol, Producc


# Diseño softw

## SPR 

## DRY

## Inyecc Depend

## Capas de diseño: 

### Alto niv: entrada (datos)/estruc -> Cálculo/Algor/Manip estruc -> salida/UI (mismo resultado para misma entrada simpre = solución)

### Micro: Métodos: primero: resolver el ej más facil, segundo: componer las soluciones





