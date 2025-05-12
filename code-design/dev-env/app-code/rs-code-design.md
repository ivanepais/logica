# Plan

1. Expresiones en lenguaje natural: 
describen los pasos que debería seguir el programa.
	
	1.1. Elementos del lenguaje que los representan

2. pseudocódigo -> 2.2. Estructuras para representarlos

3. Diagrama  
	
	3.3. Código abstracto expresivo
		
		Crear/descubrir códgo

4. Documentación
	Comentarios significativos, expresivos y explicativos. 

5. Paradigmas: imperativo, funcional y oop  
	
	Para envolver las instrucciones que resuelven un problema.

6. Diseño código

7. Algoritmos

8. Patrones de diseño



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


# "Pensar como un programador"

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


3. Errores comunes al resolver problemas

    No planificar antes de escribir código.
        Muchas personas comienzan a codificar sin un plan claro, lo que lleva a errores y soluciones incompletas.

    Fijarse demasiado en una solución específica.
        Si una estrategia no funciona, no tengas miedo de probar otro enfoque.

    No manejar casos borde o excepcionales.
        Asegúrate de considerar escenarios poco comunes pero posibles.


4. Estrategias para encontrar soluciones

El autor sugiere técnicas prácticas para desbloquear problemas:

    Divide y vencerás.
        Concéntrate en resolver una parte del problema a la vez, en lugar de intentar solucionarlo todo de una vez.

    Resuelve problemas similares.
        Si un problema parece complicado, busca soluciones a problemas similares y adáptalas.

    Usa diagramas y dibujos.
        Representar visualmente el problema puede ayudarte a comprenderlo mejor.

    Haz preguntas y busca ayuda.
        Si te quedas atascado, consulta con compañeros, foros o comunidades de programadores como Stack Overflow.


5. La importancia de la práctica

El autor enfatiza que la resolución de problemas es una habilidad que mejora con la práctica. Algunas formas de practicar incluyen:

    Resolver problemas en plataformas online.
        Usa sitios como LeetCode, HackerRank o Codewars para practicar problemas de algoritmos y estructuras de datos.

    Resolver problemas del mundo real.
        Identifica tareas que puedas automatizar en tu día a día, como organizar archivos o analizar datos.

    Participar en proyectos colaborativos.
        Trabajar en equipo te ayuda a aprender cómo otros resuelven problemas y a mejorar tus propias habilidades.


6. Pensamiento crítico y adaptativo

    Sé crítico con tu código.
        Pregúntate si tu solución es la más clara, eficiente y fácil de entender.

    Sé flexible.
        Los problemas pueden cambiar o ser más complejos de lo que parecen. Adapta tus soluciones según sea necesario.




# Think like

1. Listar restricciones

2. Listar acciones/opciones

3. Dividir el problema/resolver una parte o por partes

4. Empezar por lo más restrictivo, facil

5. Seguir por lo segundo más retrictivo, facil

6. Pequeñas cosas funcionales que dan pistas. 


# How to solve it 

1. Comprender el problema
Asegúrate de entender completamente el problema antes de intentar resolverlo.

Preguntas clave para guiar este paso:
	
	¿Cuál es el problema?
	¿Qué se te da? (datos de entrada).
	¿Qué se busca? (solución deseada).
	¿Puedes expresar el problema en tus propias palabras?
	¿Qué información o condiciones son relevantes?

Este paso implica visualizar, organizar y clarificar las condiciones del problema.

2. Idear un plan

Piensa en estrategias para resolver el problema.

Preguntas clave:
	
	¿Has resuelto un problema similar antes?
	¿Puedes reducir el problema a uno más simple?
	¿Existen patrones o conexiones con problemas conocidos?

Estrategias comunes sugeridas por Pólya:
	
	Resolver un caso más simple o particular.
	Trabajar hacia atrás (de la solución al problema).
	Identificar patrones.
	Dividir el problema en partes más manejables.

3. Ejecutar el plan

Lleva a cabo el plan que diseñaste en el paso anterior.
Asegúrate de seguir los pasos de forma lógica y ordenada.
Verifica cada paso mientras avanzas para evitar errores.

Pregunta clave:
	¿El plan funciona como esperabas?

4. Revisar

Una vez que encuentres la solución, revisa tu proceso.
Preguntas clave:
	
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


# How to Design Programs

1. Entender el problema.
	Analiza cuidadosamente los requisitos y las especificaciones del problema.

2. Especificar entradas y salidas.
	Define qué datos espera el programa como entrada y qué producirá como salida.

3. Escribir ejemplos de casos.
	Proporciona ejemplos concretos de entradas y salidas esperadas para verificar el comportamiento del programa.

4. Diseñar la estructura de datos.
	Selecciona las estructuras de datos adecuadas para representar la información.

5. Definir la función.
	Escribe una plantilla o esquema inicial para la función.

6. Escribir pruebas.
	Diseña pruebas para validar el programa antes y después de implementarlo


Tipos de datos y diseño basado en datos:

El libro enfatiza que el diseño de un programa debe estar guiado por los datos que manipula.

1. Definir datos estructurados.
	Por ejemplo, números, cadenas, listas, árboles, etc.

2. Diseñar plantillas específicas para cada tipo de dato.
	Cada estructura de datos tiene un patrón de uso predecible.


El proceso de diseño por pasos:

El enfoque principal del libro se basa en seguir un esquema llamado el "proceso de diseño por pasos":

1. Análisis del problema.
	Define claramente el propósito de la función.

2. Diseño de la representación de datos.
	Define cómo se representará la información.

3. Especificación de contratos.
	Describe qué hace la función, incluyendo su firma (tipo de entrada y salida).

4. Plantilla del programa.
	Crea una estructura general basada en los datos.

5. Desarrollo de ejemplos.
	Proporciona ejemplos concretos para guiar la implementación.

6. Escritura de pruebas.
	Define pruebas automáticas para asegurar que el programa funcione correctamente.

7. Implementación.
	Escribe el código final basándote en los pasos anteriores.

8. Pruebas y depuración.
	Ejecuta las pruebas para validar el programa.



1. Recursión: 
	Para resolver problemas complejos.

2. Pruebas sistemáticas:
	Antes de escribir el programa completo, diseña pruebas que verifiquen su correcto funcionamiento.

3. Contratos:
	Define claramente el propósito, entradas y salidas de cada función.

4. Abstracciones funcionales
    HTDP introduce el concepto de abstraer patrones comunes para evitar la repetición de código.
    Usa funciones de orden superior como map, filter y fold para trabajar con listas y otros datos estructurados.
    
5. Programas modulares
	Divide los programas en componentes pequeños y reutilizables.
	Usa módulos para organizar el código y minimizar la dependencia entre partes del programa.

6. Iteración
    Diseña una solución inicial.
    Refina y mejora el diseño.
    Aprende de los errores y ajusta el programa según sea necesario.


# Structure and Interpretation of Computer Programs

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

3. Datos compuestos y estructuras de datos

    Introduce formas de combinar datos simples en estructuras más complejas. 
        Ejemplo: Pares, listas, árboles binarios.
    
    Enseña cómo diseñar y operar sobre estas estructuras para resolver problemas más grandes.

Listas como estructuras fundamentales
    Las listas se utilizan como la principal estructura de datos en el libro, y se exploran operaciones como map, filter, y reduce.

4. Paradigmas de programación

Programación funcional
    Destaca la importancia de las funciones puras (sin efectos secundarios) y cómo estos enfoques conducen a programas más simples y predecibles.

Evaluación diferida
    Introduce conceptos como la evaluación perezosa (lazy evaluation), donde las expresiones no se evalúan hasta que se necesitan.

Programación orientada a objetos
    Explica cómo encapsular datos y procedimientos en objetos, explorando cómo se construyen sistemas orientados a objetos.

Metaprogramación
    Explora cómo los programas pueden manipular otros programas, abriendo la puerta a conceptos como macros y lenguajes específicos del dominio.

5. Sistemas complejos y jerarquías de abstracción
    Explora cómo construir sistemas grandes y complejos mediante la combinación de múltiples niveles de abstracción.
    
    Ejemplo: Un sistema de simulación de circuitos eléctricos:  
        Nivel 1: Definir componentes básicos como resistencias y condensadores.
        Nivel 2: Combinar componentes para formar circuitos.    
        Nivel 3: Simular el comportamiento del circuito completo.

6. Estructuras de control avanzadas

Continuaciones
    Introduce las continuaciones, que permiten capturar el estado de ejecución de un programa para controlarlo de maneras no convencionales.
    Esto permite implementar funcionalidades como:
        Backtracking.
        Concurrencia.
        Excepciones.

Estado mutable
    Explora cómo manejar variables mutables y cómo esto afecta la lógica de un programa.
    Introduce el concepto de entornos (scopes) y cómo las variables se resuelven en ellos.

7. Simulación y sistemas
    Examina cómo usar la programación para modelar y simular sistemas dinámicos.    
    Ejemplo: Simular un sistema de colas para una red de servidores.

8. Reflexión y metacircularidad
    Introduce el concepto de "metacircularidad", donde un lenguaje de programación se define e implementa en sí mismo.
    Ejemplo: Construir un intérprete de Scheme en Scheme para comprender cómo funciona el lenguaje.


# Programming Pearls

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


# Mythical Man-Mount

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


# The Pragmatic Programmer

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

C. Abstracción y encapsulación
Mantén la complejidad oculta mediante abstracciones efectivas. Los detalles internos de una clase o módulo no deben ser visibles para otras partes del sistema.

Ejemplo:
    Usar interfaces para ocultar la implementación de una base de datos.
    Diseñar API claras y fáciles de usar.

D. Trabajar con cambios
El software evoluciona constantemente. El libro ofrece consejos para gestionar el cambio de manera efectiva:
    Diseña sistemas flexibles y modulares.
    Escribe pruebas para garantizar que los cambios no rompan el sistema.
    Sé receptivo a los comentarios y ajusta el diseño según sea necesario.

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


# Code Complete

1. Importancia de la construcción de software

    Construcción como fase central del desarrollo.
        Aunque el diseño y la planificación son importantes, la construcción (escribir código) es donde realmente se crea el software.
    
    Calidad desde el principio.
        Es más barato y efectivo prevenir errores durante la construcción que corregirlos después.

2. Diseño antes de codificar

    Antes de escribir código, asegúrate de:
        
        Entender completamente los requisitos.
        Tener un diseño claro (arquitectura, estructuras de datos y algoritmos).
        Definir interfaces y contratos.

3. Buenas prácticas para escribir código

Nombres significativos

    Usa nombres claros y descriptivos para variables, funciones y clases.
    Ejemplo:

    // Malo
    int d; // duración en días

    // Bueno
    int durationInDays;

Comentarios útiles

    Comenta por qué se hace algo, no qué hace el código (eso debe ser obvio).
    Evita comentarios redundantes:

    // Malo
    int age = 25; // asigna la edad

    // Bueno
    // Limita la edad a mayores de 18 años por requisitos legales.
    int age = 25;

Control de complejidad

    Mantén las funciones cortas y enfocadas en una sola tarea.
    Sigue la regla de oro: menos de 50 líneas por función.

Estructura de código limpia

    Usa sangrías, espacios y líneas en blanco para mejorar la legibilidad.
    Mantén el código consistente con los estándares del equipo.

4. Principios del diseño modular

    Separación de responsabilidades.
        Cada módulo (clase o función) debe tener un propósito claro y único.
    
    Alta cohesión, bajo acoplamiento.
        Los módulos deben ser internamente fuertes (cohesión) pero mínimamente dependientes entre sí (bajo acoplamiento).
    
    Evita la duplicación de código.
        Refactoriza para reutilizar funciones o clases comunes.

5. Estructuras de control

    Usa estructuras claras y modernas (como bucles for y while) en lugar de construcciones obsoletas (como goto).
    
    Aplica principios como:
        Early exit. Sal del método o bucle tan pronto como sea posible si hay una condición obvia.
        Estructura clara. Cada función debe tener un punto de entrada y salida claramente definidos.

6. Manejo de datos

    Estructuras de datos.
        Elige estructuras de datos adecuadas para el problema que estás resolviendo (listas, mapas, árboles, etc.).
    
    Variables.
        Usa variables locales siempre que sea posible.
        Evita las variables globales por su impacto en la legibilidad y el mantenimiento.

7. Pruebas y depuración

    Pruebas unitarias.
        Escribe pruebas para cada unidad funcional de tu código.
    
    Pruebas automatizadas.
        Automatiza las pruebas para garantizar que los cambios no introduzcan errores.
    
    Depuración.
        Usa técnicas sistemáticas para encontrar errores, como revisar logs, dividir y conquistar o simplificar casos de prueba.

8. Refactorización

    Mejora continua del código.
        Refactoriza regularmente para mejorar la claridad, reducir la duplicación y optimizar el rendimiento.
    
    El código perfecto no se escribe a la primera.
        Es un proceso iterativo.

9. Optimización

    Primero hazlo funcionar, luego hazlo rápido.
        La legibilidad y la corrección son más importantes que la velocidad en la mayoría de los casos.
    
    Optimiza solo cuando sea necesario.
        Usa perfiles de rendimiento para identificar cuellos de botella antes de optimizar.

10. Colaboración y estilos de codificación

    Código como comunicación.
        El código no es solo para máquinas; también es para que otros desarrolladores lo entiendan.
    
    Estilo consistente.
        Adopta y sigue un estándar de estilo acordado por el equipo.

11. Errores comunes y cómo evitarlos

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

12. Principios de diseño orientados a objetos

    Encapsulación.
        Oculta detalles de implementación dentro de las clases.
    
    Herencia y polimorfismo.
        Usa herencia solo cuando sea necesario y favorece la composición.


13. Mentoría y aprendizaje continuo
    Aprende de otros programadores revisando su código.
    Participa en revisiones de código para identificar mejoras y mantener la calidad.


# Code craft

1. Escribir código excelente

¿Qué significa "excelente"?
    Código que es claro, legible y fácil de mantener.
    Se enfoca en cumplir con los requisitos de manera efectiva sin complicar el diseño ni agregar elementos innecesarios.

Los principios básicos:
    KISS (Keep It Simple, Stupid): Mantén el código lo más simple posible.
    DRY (Don’t Repeat Yourself): Evita duplicar lógica; abstrae elementos comunes.
    YAGNI (You Aren’t Gonna Need It): No desarrolles funcionalidades innecesarias.


2. Diseño del código

Encapsulación y modularidad
    Divide el código en módulos independientes que puedan evolucionar sin afectar a otras partes del sistema.
    Usa encapsulación para ocultar detalles internos y exponer solo lo necesario.

Cohesión y acoplamiento
    Alta cohesión: Asegúrate de que cada módulo tenga un propósito claro y específico.
    Bajo acoplamiento: Minimiza las dependencias entre módulos para facilitar el cambio.

Diseño basado en principios SOLID
    Aplica los principios SOLID para escribir código más robusto y flexible.


3. Escribir código legible

Nombres descriptivos
    Los nombres de variables, funciones y clases deben describir claramente su propósito.
        Ejemplo: En lugar de x, usa totalPrice para representar el precio total.

Comentarios útiles
    Solo comenta lo que no puede ser entendido fácilmente leyendo el código.
    Usa comentarios para explicar "por qué" en lugar de "qué".

Formato consistente
    Usa estilos de codificación consistentes (indentación, espaciado, etc.) para mejorar la legibilidad.

4. Abstracción y reutilización

Creación de abstracciones útiles
    Abstrae patrones comunes para evitar duplicación.
    Diseña las abstracciones pensando en la evolución del código.

Reutilización de código
    Reutiliza bibliotecas, frameworks y utilidades existentes en lugar de reinventar la rueda.
    Asegúrate de que el código reutilizable sea fácil de integrar y entender.

5. Gestión de errores y excepciones

    Manejo proactivo de errores: Diseña tu código para prever y manejar situaciones excepcionales.
    Usa excepciones para eventos excepcionales, no para flujo de control normal.
    Proporciona mensajes de error claros que ayuden a diagnosticar problemas.

6. Pruebas y calidad del código

Importancia de las pruebas
    Las pruebas son una herramienta clave para garantizar que el código funcione como se espera y sea mantenible.
    
    Tipos de pruebas:
        Pruebas unitarias.
        Pruebas de integración.
        Pruebas de sistema.

TDD (Test-Driven Development)
    Escribe pruebas antes de escribir el código para garantizar que se cubran los requisitos.
    Mejora la confianza en los cambios y refactorizaciones.

Revisión de código
    Realiza revisiones de código regulares con tus compañeros para detectar errores y aprender de los demás.

7. Refactorización

¿Qué es refactorizar?
    Mejorar la estructura y claridad del código sin cambiar su funcionalidad.

¿Cuándo refactorizar?
    Cuando encuentres código duplicado o desorganizado.
    Antes de añadir nuevas funcionalidades para evitar construir sobre bases frágiles.

8. Rendimiento y optimización
    No optimices prematuramente. Primero escribe código claro y funcional.
    Usa herramientas de perfilado para identificar cuellos de botella reales.
    Considera el compromiso entre legibilidad y rendimiento.

9. Cultura del desarrollo de software

Trabajo en equipo
    Comunica tus decisiones de diseño y busca retroalimentación.
    Fomenta la colaboración mediante revisiones de código, estándares comunes y documentación clara.

Iteración y mejora continua
    Acepta que el software nunca estará "terminado"; siempre habrá espacio para mejorar.

Aprendizaje constante
    Mantente actualizado con las tendencias y prácticas de la industria.
    Aprende de tus errores y experiencias pasadas.

10. El contexto importa

    No existe una única "mejor manera" de escribir código. Todo depende del contexto:
        
        Requisitos del proyecto.
        Restricciones del lenguaje o plataforma.
        Plazos y recursos disponibles.

11. Errores comunes y cómo evitarlos

    Sobrecargar funciones. 
		Las funciones deben hacer solo una cosa y hacerlo bien.
   
    Ignorar errores. 
		Manejar los errores de manera adecuada es clave para la robustez.
   
    Escribir código "inteligente". 
		El código excesivamente complejo suele ser difícil de mantener.


# Imposter 

1. Patrones de diseño

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

3. Seguridad en software

A. Criptografía básica
    Encriptación simétrica y asimétrica.
    Hashing: SHA-256, MD5 (y por qué evitar este último).

B. Seguridad web
    Conceptos como inyección SQL, XSS y CSRF.
    Estrategias para proteger aplicaciones web.

4. Herramientas y prácticas

El autor recomienda herramientas y técnicas para mejorar la productividad y calidad del código:

A. Control de versiones
    Git: Uso práctico de ramas, fusiones y resolución de conflictos.

B. Pruebas de software
    Pruebas unitarias, de integración y de regresión.
    Marco de pruebas populares como Jest, PyTest o JUnit.

C. Automatización
    Scripts para tareas repetitivas.
    CI/CD para despliegues automáticos.

5. Programación funcional

El libro introduce la programación funcional como un paradigma clave en la informática moderna:

Conceptos principales:
    Funciones puras: No tienen efectos secundarios.
    Inmutabilidad: Evitar cambios en el estado.
    Composición de funciones: Construcción de funciones complejas a partir de funciones simples.

Lenguajes mencionados:
    Ejemplos prácticos en lenguajes como JavaScript, Python o Haskell.



# The Design Of Everyday Things

Explora cómo el diseño de los objetos y sistemas cotidianos puede influir en nuestra experiencia y comportamiento.


La importancia del diseño: Norman argumenta que el diseño no es solo una cuestión de estética, sino que también puede influir en la funcionalidad y la usabilidad de un objeto o sistema.

La teoría de la acción: Norman introduce la teoría de la acción, que sostiene que los usuarios de un objeto o sistema tienen una serie de objetivos y metas que intentan alcanzar. El diseño debe ser capaz de apoyar y facilitar estas acciones.

Los siete principios del diseño: Norman identifica siete principios que deben guiar el diseño de los objetos y sistemas:

1. Visibilidad: El diseño debe ser claro y visible, de manera que los usuarios puedan entender cómo funciona y qué se espera de ellos.

2. Retroalimentación: El diseño debe proporcionar retroalimentación clara y oportuna sobre las acciones del usuario.

3. Consistencia: El diseño debe ser consistente en su lógica y comportamiento.

4. Mapeo: El diseño debe proporcionar un mapeo claro entre las acciones del usuario y los resultados esperados.

5. Flexibilidad: El diseño debe ser flexible y adaptable a las necesidades y preferencias del usuario.

6. Error: El diseño debe ser capaz de manejar y recuperarse de los errores de manera efectiva.

7. Estándares: El diseño debe seguir estándares y convenciones establecidas para evitar la confusión y la frustración del usuario.

La diferencia entre conocimiento en la cabeza y conocimiento en el mundo: Norman distingue entre el conocimiento que se encuentra en la cabeza del usuario (conocimiento en la cabeza) y el conocimiento que se encuentra en el mundo (conocimiento en el mundo). El diseño debe aprovechar el conocimiento en el mundo para reducir la carga cognitiva del usuario.
    
La importancia de la usabilidad: Norman enfatiza la importancia de la usabilidad en el diseño, argumentando que un diseño que es fácil de usar y entender es más probable que sea utilizado de manera efectiva.



# Specification by Example

Explora la técnica de especificación por ejemplo como una forma de mejorar la comunicación y la colaboración entre los equipos de desarrollo de software y los stakeholders

Especificación por ejemplo: La especificación por ejemplo es una técnica que implica describir el comportamiento de un sistema o aplicación a través de ejemplos concretos y específicos. En lugar de describir el comportamiento de manera abstracta, se utilizan ejemplos para ilustrar cómo debe funcionar el sistema.
Ventajas de la especificación por ejemplo: Adzic identifica varias ventajas de la especificación por ejemplo, incluyendo:

Mejora la comunicación entre los equipos de desarrollo y los stakeholders.
Reduce la ambigüedad y la incertidumbre en la especificación del sistema.
Permite a los equipos de desarrollo entender mejor los requisitos del sistema.
Facilita la creación de pruebas automatizadas.

Técnicas de especificación por ejemplo: Adzic describe varias técnicas para implementar la especificación por ejemplo, incluyendo:

Ejemplos concretos: Utilizar ejemplos concretos y específicos para describir el comportamiento del sistema.
Escenarios: Utilizar escenarios para describir cómo se utilizará el sistema en diferentes situaciones.
Criterios de aceptación: Utilizar criterios de aceptación para describir los requisitos del sistema de manera clara y concisa.

La importancia de la colaboración: Adzic enfatiza la importancia de la colaboración entre los equipos de desarrollo y los stakeholders para crear una especificación por ejemplo efectiva.
La relación entre la especificación por ejemplo y las pruebas: Adzic explora la relación entre la especificación por ejemplo y las pruebas, y cómo la especificación por ejemplo puede ser utilizada para crear pruebas automatizadas efectivas.
La importancia de la revisión y la iteración: Adzic destaca la importancia de revisar y iterar la especificación por ejemplo para asegurarse de que se ajusta a los requisitos del sistema y de que es efectiva.


Algunos de los conceptos clave que se pueden aplicar en la práctica son:

Crear ejemplos concretos: En lugar de describir el comportamiento de manera abstracta, crear ejemplos concretos y específicos para ilustrar cómo debe funcionar el sistema.

Utilizar escenarios: Utilizar escenarios para describir cómo se utilizará el sistema en diferentes situaciones.

Establecer criterios de aceptación: Establecer criterios de aceptación claros y concisos para describir los requisitos del sistema.

Colaborar con los stakeholders: Colaborar con los stakeholders para crear una especificación por ejemplo efectiva.

Revisar y iterar: Revisar y iterar la especificación por ejemplo para asegurarse de que se ajusta a los requisitos del sistema y de que es efectiva



# Apprenticeship Patterns: Guidance for the Aspiring Software Craftsman

Explora los patrones y principios que pueden ayudar a los desarrolladores de software a mejorar sus habilidades y convertirse en artesanos de software.


La importancia de la formación: Los autores enfatizan la importancia de la formación y el aprendizaje continuo para los desarrolladores de software. La formación no solo se refiere a la adquisición de nuevas habilidades, sino también a la mejora de las habilidades existentes y la adaptación a las nuevas tecnologías y tendencias.
El concepto de "aprendizaje": Los autores definen el aprendizaje como un proceso de adquisición de habilidades y conocimientos a través de la práctica y la experiencia. El aprendizaje es un proceso continuo que requiere dedicación y esfuerzo.
Los patrones de aprendizaje: Los autores identifican varios patrones de aprendizaje que pueden ayudar a los desarrolladores de software a mejorar sus habilidades, incluyendo:

Aprender por hacer: Aprender a través de la práctica y la experiencia.
Aprender de los demás: Aprender de los colegas y mentores.
Aprender de los errores: Aprender de los errores y fracasos.
Aprender a través de la reflexión: Aprender a través de la reflexión y la autoevaluación.

La importancia de la comunidad: Los autores enfatizan la importancia de la comunidad y la colaboración en el proceso de aprendizaje. La comunidad puede proporcionar apoyo, orientación y retroalimentación valiosa.
El concepto de "maestro": Los autores definen el concepto de "maestro" como alguien que ha alcanzado un alto nivel de habilidad y experiencia en su campo. Un maestro puede servir como modelo y mentor para los desarrolladores de software que están en proceso de aprendizaje.
Los patrones de mentoría: Los autores identifican varios patrones de mentoría que pueden ayudar a los desarrolladores de software a encontrar y trabajar con un mentor, incluyendo:

Buscar un mentor: Buscar un mentor que pueda proporcionar orientación y apoyo.
Establecer una relación: Establecer una relación con el mentor y definir las expectativas y objetivos.
Aprender de la experiencia: Aprender de la experiencia y la sabiduría del mentor.

La importancia de la práctica: Los autores enfatizan la importancia de la práctica y la experimentación en el proceso de aprendizaje. La práctica puede ayudar a los desarrolladores de software a desarrollar habilidades y confianza.

Algunos de los patrones de aprendizaje que se pueden aplicar en la práctica son:

Unirse a una comunidad: Unirse a una comunidad de desarrolladores de software para conectarse con otros profesionales y aprender de sus experiencias.
Buscar un mentor: Buscar un mentor que pueda proporcionar orientación y apoyo en el proceso de aprendizaje.
Establecer un plan de aprendizaje: Establecer un plan de aprendizaje y definir los objetivos y metas.
Practicar y experimentar: Practicar y experimentar con nuevas tecnologías y habilidades.
Reflexionar y autoevaluarse: Reflexionar y autoevaluarse para identificar áreas de mejora y ajustar el plan de aprendizaje



# Pragmatic Thinking and Learning: Refactor Your Wetware

Explora cómo mejorar la forma en que pensamos y aprendemos, y cómo aplicar estos conceptos en el contexto de la programación y el desarrollo de software


La importancia de la reflexión: Hunt enfatiza la importancia de la reflexión y la autoevaluación en el proceso de aprendizaje y mejora. La reflexión nos permite identificar áreas de mejora y ajustar nuestro enfoque.
El concepto de "wetware": Hunt utiliza el término "wetware" para referirse al cerebro y la forma en que procesamos la información. El objetivo del libro es ayudar a los lectores a "refactorizar" su wetware, es decir, a mejorar la forma en que pensamos y aprendemos.
La teoría de la carga cognitiva: Hunt explica la teoría de la carga cognitiva, que sostiene que nuestro cerebro tiene una capacidad limitada para procesar información. Cuando la carga cognitiva es demasiado alta, podemos experimentar fatiga mental y disminución de la productividad.
La importancia de la práctica: Hunt enfatiza la importancia de la práctica y la experimentación en el proceso de aprendizaje. La práctica nos permite desarrollar habilidades y confianza.
El concepto de "Dreyfus modelo": Hunt presenta el modelo de Dreyfus, que describe las etapas del aprendizaje y la mejora. El modelo identifica cinco etapas: principiante, avanzado, competente, proficiente y experto.
La importancia de la retroalimentación: Hunt enfatiza la importancia de la retroalimentación en el proceso de aprendizaje y mejora. La retroalimentación nos permite identificar áreas de mejora y ajustar nuestro enfoque.
El concepto de "refactorización": Hunt utiliza el término "refactorización" para referirse al proceso de mejorar y simplificar nuestro código, pero también se aplica a la forma en que pensamos y aprendemos. La refactorización nos permite identificar patrones y simplificar nuestro enfoque.

Algunos de los patrones y técnicas que se pueden aplicar en la práctica son:

Practicar la reflexión: Establecer un hábito de reflexión y autoevaluación para identificar áreas de mejora y ajustar nuestro enfoque.
Reducir la carga cognitiva: Identificar formas de reducir la carga cognitiva y mejorar la productividad.
Practicar la experimentación: Establecer un hábito de experimentación y práctica para desarrollar habilidades y confianza.
Buscar retroalimentación: Buscar retroalimentación de otros para identificar áreas de mejora y ajustar nuestro enfoque.
Refactorizar nuestro enfoque: Identificar patrones y simplificar nuestro enfoque para mejorar la eficiencia y la productividad



# Grokking Simplicity

Explora cómo aplicar el pensamiento funcional para simplificar y mejorar la calidad del software


La importancia de la simplicidad: Normand enfatiza la importancia de la simplicidad en el software, ya que la complejidad puede llevar a errores, bugs y dificultades para mantener y escalar el sistema.
El pensamiento funcional: Normand introduce el concepto de pensamiento funcional, que se enfoca en la idea de que el software debe ser diseñado para realizar tareas específicas de manera eficiente y efectiva, sin considerar la implementación detallada.
La separación de preocupaciones: Normand destaca la importancia de separar las preocupaciones en el software, es decir, dividir el sistema en componentes independientes que se encargan de tareas específicas, lo que facilita la mantenibilidad y la escalabilidad.
La inmutabilidad: Normand enfatiza la importancia de la inmutabilidad en el software, es decir, que los datos y los objetos no deben ser modificados una vez creados, lo que ayuda a prevenir errores y a mejorar la seguridad.
La composición: Normand introduce el concepto de composición, que se refiere a la forma en que los componentes del software se combinan para crear un sistema más grande y complejo.
La recursividad: Normand explora el concepto de recursividad, que se refiere a la forma en que un componente del software puede ser utilizado para resolver problemas más pequeños y similares, lo que ayuda a reducir la complejidad y a mejorar la eficiencia.
La importancia de la abstracción: Normand destaca la importancia de la abstracción en el software, es decir, la capacidad de ignorar los detalles irrelevantes y enfocarse en los aspectos más importantes del sistema.

Algunos de los patrones y técnicas que se pueden aplicar en la práctica son:

Diseñar para la simplicidad: Enfocarse en la simplicidad y la eficiencia al diseñar el software, en lugar de la complejidad y la sofisticación.
Utilizar el pensamiento funcional: Aplicar el pensamiento funcional para diseñar y desarrollar el software, enfocándose en la idea de que el software debe ser diseñado para realizar tareas específicas de manera eficiente y efectiva.
Separar las preocupaciones: Dividir el sistema en componentes independientes que se encargan de tareas específicas, lo que facilita la mantenibilidad y la escalabilidad.
Utilizar la inmutabilidad: Diseñar el software para que los datos y los objetos no sean modificados una vez creados, lo que ayuda a prevenir errores y a mejorar la seguridad.
Componer componentes: Combinar componentes del software para crear un sistema más grande y complejo, lo que ayuda a reducir la complejidad y a mejorar la eficiencia



# The Little Schemer

Introducción a la programación funcional y a la lógica matemática utilizando el lenguaje de programación Scheme


La programación funcional: El libro introduce la programación funcional, que se enfoca en la idea de que los programas deben ser diseñados como una serie de funciones que se componen para resolver problemas.
El lenguaje Scheme: El libro utiliza el lenguaje Scheme para ilustrar los conceptos de programación funcional. Scheme es un lenguaje de programación que se enfoca en la simplicidad y la elegancia.
La recursividad: El libro explora el concepto de recursividad, que se refiere a la forma en que una función puede llamarse a sí misma para resolver problemas más pequeños y similares.
La inducción: El libro introduce el concepto de inducción, que se refiere a la forma en que se puede demostrar que una propiedad es verdadera para todos los números naturales.
La lógica matemática: El libro introduce la lógica matemática, que se enfoca en la idea de que los enunciados matemáticos pueden ser demostrados utilizando reglas lógicas.
El razonamiento deductivo: El libro explora el concepto de razonamiento deductivo, que se refiere a la forma en que se puede demostrar que un enunciado es verdadero utilizando reglas lógicas y premisas verdaderas.

Algunos de los patrones y técnicas que se pueden aplicar en la práctica son:

Diseñar funciones: Diseñar funciones que se componen para resolver problemas.
Utilizar la recursividad: Utilizar la recursividad para resolver problemas más pequeños y similares.
Demostrar propiedades: Demostrar propiedades utilizando la inducción y la lógica matemática.
Razonar deductivamente: Razonar deductivamente para demostrar que un enunciado es verdadero.

El libro también introduce algunos conceptos avanzados, como:

La teoría de tipos: La teoría de tipos, que se enfoca en la idea de que los datos tienen tipos y que las funciones deben ser diseñadas para trabajar con esos tipos.
La semántica denotacional: La semántica denotacional, que se enfoca en la idea de que el significado de un programa puede ser definido en términos de su comportamiento



# Elegant Objects

Explora los principios y patrones de diseño de software para crear objetos y sistemas más elegantes, mantenibles y escalables


La importancia de la simplicidad: Bugayenko enfatiza la importancia de la simplicidad en el diseño de software, ya que la complejidad puede llevar a errores, bugs y dificultades para mantener y escalar el sistema.
El principio de la responsabilidad única: Bugayenko introduce el principio de la responsabilidad única, que establece que cada objeto o clase debe tener una sola responsabilidad y no debe ser responsable de múltiples tareas.
La separación de preocupaciones: Bugayenko destaca la importancia de separar las preocupaciones en el diseño de software, es decir, dividir el sistema en componentes independientes que se encargan de tareas específicas.
La inmutabilidad: Bugayenko enfatiza la importancia de la inmutabilidad en el diseño de software, es decir, que los objetos y datos no deben ser modificados una vez creados.
La composición: Bugayenko introduce el concepto de composición, que se refiere a la forma en que los objetos y componentes se combinan para crear un sistema más grande y complejo.
La recursividad: Bugayenko explora el concepto de recursividad, que se refiere a la forma en que un objeto o componente puede ser utilizado para resolver problemas más pequeños y similares.
La importancia de la abstracción: Bugayenko destaca la importancia de la abstracción en el diseño de software, es decir, la capacidad de ignorar los detalles irrelevantes y enfocarse en los aspectos más importantes del sistema.

Algunos de los patrones y técnicas que se pueden aplicar en la práctica son:

Diseñar objetos simples: Diseñar objetos que tengan una sola responsabilidad y no sean responsables de múltiples tareas.
Utilizar la composición: Utilizar la composición para combinar objetos y componentes y crear un sistema más grande y complejo.
Aplicar la inmutabilidad: Aplicar la inmutabilidad para evitar que los objetos y datos sean modificados una vez creados.
Utilizar la recursividad: Utilizar la recursividad para resolver problemas más pequeños y similares.
Abstraer detalles: Abstraer detalles irrelevantes y enfocarse en los aspectos más importantes del sistema.

El libro también introduce algunos conceptos avanzados, como:

La teoría de la complejidad: La teoría de la complejidad, que se enfoca en la idea de que la complejidad de un sistema puede ser medida y analizada.
La teoría de la información: La teoría de la información, que se enfoca en la idea de que la información puede ser medida y analizada



# DRY, KISS, YAGNI

1. Don't Repeat Yourself (DRY)

Evita duplicar lógica o datos. 
Si algo se repite, conviértelo en una única fuente de verdad.

Ejemplo:
Usa funciones reutilizables en lugar de duplicar bloques de código.


2. Keep It Simple, Stupid (KISS)

Mantén las cosas simples y evita complejidades innecesarias. 
El diseño más simple que cumple con los requisitos es el mejor.

Ejemplo:
Prefiere soluciones directas en lugar de implementar patrones complejos si no son necesarios.


3. You Aren't Gonna Need It (YAGNI)

No implementes funcionalidades que no son necesarias en el momento. 
Solo escribe código para resolver los problemas actuales.

Ventaja:
Evita el desperdicio de tiempo y reduce la complejidad.


## DRY

Propone evitar la duplicación de código y, en su lugar, reutilizarlo mediante funciones, clases, módulos o abstracciones.

Sin DRY:

Imagina que necesitas calcular el área de un rectángulo en varios lugares de tu código:

```
// Código repetido en diferentes partes del programa
let ancho1 = 10, alto1 = 5;
let area1 = ancho1 * alto1;
console.log(`Área 1: ${area1}`);

let ancho2 = 8, alto2 = 4;
let area2 = ancho2 * alto2;
console.log(`Área 2: ${area2}`);

```

Dificulta el mantenimiento: Si quieres cambiar la fórmula (por ejemplo, añadir validaciones), tienes que modificar varias partes del código.

Más propenso a errores: Si olvidas actualizar un lugar, puede causar inconsistencias


Aplicando DRY:

Podemos extraer la lógica repetida en una función reutilizable:

```
function calcularArea(ancho, alto) {
  return ancho * alto;
}

console.log(`Área 1: ${calcularArea(10, 5)}`);
console.log(`Área 2: ${calcularArea(8, 4)}`);

```
Código más limpio y legible

Fácil de mantener y modificar

Menos propenso a errores


Usando clases en lugar de código repetido:

```
class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  calcularArea() {
    return this.ancho * this.alto;
  }
}

const r1 = new Rectangulo(10, 5);
console.log(`Área 1: ${r1.calcularArea()}`);

const r2 = new Rectangulo(8, 4);
console.log(`Área 2: ${r2.calcularArea()}`);

```

Ahora, si queremos cambiar la fórmula, solo modificamos la clase una vez.


Ayuda a escribir código más eficiente, modular y fácil de mantener.

Siempre que notes duplicación de lógica, considera extraerla en una función, clase o módulo.


## KISS

El código debe ser lo más simple y claro posible, evitando complejidad innecesaria.

Un código más simple es más fácil de leer, entender, mantener y depurar.


Código sin KISS: 

```
function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(esPar(4)); // true
console.log(esPar(7)); // false

```

La función tiene lógica innecesaria


Aplicando KISS:

```
function esPar(numero) {
  return numero % 2 === 0;
}

console.log(esPar(4)); // true
console.log(esPar(7)); // false

```

Más claro

Menos líneas de código

Mismo resultado


Bucles: 

Sin KISS: 

```
const numeros = [1, 2, 3, 4, 5];
let cuadrados = [];

for (let i = 0; i < numeros.length; i++) {
  cuadrados.push(numeros[i] * numeros[i]);
}

console.log(cuadrados); // [1, 4, 9, 16, 25]

```


Aplicando KISS con .map()

```
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(n => n * n);

console.log(cuadrados); // [1, 4, 9, 16, 25]

```

Más legible y expresivo

Menos líneas de código


KISS ayuda a mantener el código simple, claro y fácil de entender.

Evita sobrecomplicar soluciones cuando una versión más simple es suficiente.

Regla de oro: Si algo puede hacerse de forma más simple, hazlo más simple


## YAGNI

No deberías agregar funcionalidad innecesaria hasta que realmente la necesites.

Idea clave: No escribas código "por si acaso". Solo implementa lo que es realmente necesario en este momento.


Sin YAGNI: 

Agregar la opción de restar "por si acaso se necesita en el futuro":

```
function calcular(numero1, numero2, operacion = "suma") {
  if (operacion === "suma") {
    return numero1 + numero2;
  } else if (operacion === "resta") {
    return numero1 - numero2;
  } else {
    return "Operación no soportada";
  }
}

console.log(calcular(5, 3)); // 8
console.log(calcular(5, 3, "resta")); // 2 (pero nadie lo usa)

```

Puede que nunca usemos la resta, por lo que se desperdicia tiempo y recursos


YAGNI: 
Solo lo que realmente necesitamos.

```
function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 3)); // 8

```

Menos código innecesario

Más fácil de entender y mantener


Si en el futuro realmente necesitamos restar, podemos agregarlo cuando sea necesario.



Clases innecesariamente complejas:

Sin YAGNI: 

```
class Usuario {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  mostrarNombre() {
    return this.nombre;
  }

  calcularAniosHastaJubilacion() {
    return 65 - this.edad; // ¿Es realmente necesario ahora?
  }
}

const usuario = new Usuario("Carlos", 30);
console.log(usuario.mostrarNombre()); // "Carlos"

```

YAGNI: 

```
class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }

  mostrarNombre() {
    return this.nombre;
  }
}

const usuario = new Usuario("Carlos");
console.log(usuario.mostrarNombre()); // "Carlos"

```

Solo incluimos lo que realmente necesitamos

YAGNI evita la sobrecarga de código innecesario.

Solo agrega funcionalidades cuando realmente se necesitan.

Ahorras tiempo, esfuerzo y recursos en el desarrollo.

Regla de oro: No construyas algo que nadie ha pedido.



# SOLID

1. Single Responsibility Principle (SRP)

Una clase o módulo debe tener una única razón para cambiar, es decir, debe ser responsable de una sola funcionalidad.

Beneficios:
Facilita la comprensión y mantenimiento.
Reduce la complejidad.


2. Open/Closed Principle (OCP)

Las entidades de software (clases, módulos, funciones) deben estar abiertas para extensión pero cerradas para modificación.

Cómo aplicarlo:
Usa herencia o composición para agregar nuevas funcionalidades sin cambiar el código existente.


3. Liskov Substitution Principle (LSP)

Una subclase debe ser intercambiable con su clase base sin alterar el comportamiento del programa.
Si una clase Animal tiene un método moverse(), todas sus subclases (como Perro o Pájaro) deben implementar ese método de forma consistente.

4. Interface Segregation Principle (ISP)

Una interfaz no debe obligar a sus implementaciones a depender de métodos que no usan.
Es mejor tener interfaces específicas como Volador o Nadador en lugar de una interfaz Animal genérica con métodos irrelevantes para ciertos animales.


5. Dependency Inversion Principle (DIP)

Los módulos de alto nivel no deben depender de los módulos de bajo nivel; ambos deben depender de abstracciones (interfaces).
Usa interfaces o clases abstractas para desacoplar módulos. 


## Single Responsibility Principle (SRP)

Una clase, función o módulo debe tener una única razón para cambiar, es decir, debe hacer solo una cosa.

Idea clave: Cada clase o función debe tener una única responsabilidad y no mezclar múltiples funcionalidades.


Sin SRP:

```
class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }

  guardarEnDB() {
    console.log(`Guardando usuario ${this.nombre} en la base de datos`);
    // Código para conectarse y guardar en la DB
  }
}

```

Esta clase mezcla responsabilidades:
	Gestiona datos del usuario (nombre, email).
	Guarda datos en la base de datos.

Si cambian las reglas de negocio del usuario o la forma en que guardamos datos, ambas cosas se verán afectadas


Aplicando SRP:

Podemos separar la lógica en dos clases:

```
class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

class UsuarioDB {
  guardar(usuario) {
    console.log(`Guardando usuario ${usuario.nombre} en la base de datos`);
    // Código para conectarse y guardar en la DB
  }
}

const usuario = new Usuario("Carlos", "carlos@email.com");
const db = new UsuarioDB();
db.guardar(usuario);

```

Separación de responsabilidades:
    Usuario solo almacena los datos del usuario.
    UsuarioDB se encarga de la persistencia.

Fácil de modificar: Si cambiamos la forma de guardar los datos, no afecta a la lógica del usuario.


Funciones sin SRP (Hace demasiadas cosas):

```
function procesarPedido(pedido) {
  console.log(`Procesando pedido ${pedido.id}`);
  console.log(`Enviando email de confirmación a ${pedido.email}`);
  console.log("Guardando pedido en la base de datos");
}

```

La función hace tres cosas: 

	Procesa el pedido
	Envía un email
	Guarda en la base de datos


Aplicando SRP (Dividiendo en funciones especializadas):

```
function procesarPedido(pedido) {
  console.log(`Procesando pedido ${pedido.id}`);
}

function enviarConfirmacionEmail(email) {
  console.log(`Enviando email de confirmación a ${email}`);
}

function guardarPedidoEnDB(pedido) {
  console.log("Guardando pedido en la base de datos");
}

const pedido = { id: 1, email: "cliente@email.com" };

procesarPedido(pedido);
enviarConfirmacionEmail(pedido.email);
guardarPedidoEnDB(pedido);

```

Ahora cada función tiene una única responsabilidad


SRP hace que el código sea más modular, fácil de mantener y extender.

Si una clase o función hace más de una cosa, considera separarla.

Regla clave: Si algo tiene más de una razón para cambiar, probablemente deba dividirse en partes más pequeñas


## Open/Closed Principle (OCP)

Las entidades de software (clases, módulos, funciones) deben estar abiertas para extensión, pero cerradas para modificación


Puedes extender el comportamiento de una clase sin modificar su código original.

Evita cambiar código existente para reducir errores y mantener compatibilidad


Sin OCP: 

Clase que calcula descuentos:

```
class CalculadoraDescuento {
  calcularDescuento(tipoCliente, precio) {
    if (tipoCliente === "regular") {
      return precio * 0.9; // 10% de descuento
    } else if (tipoCliente === "vip") {
      return precio * 0.8; // 20% de descuento
    } else {
      return precio; // Sin descuento
    }
  }
}

```

Cada vez que agregamos un nuevo tipo de cliente, tenemos que modificar la clase.

Rompe el principio OCP, porque el código original no está cerrado para modificaciones.

Con el tiempo, esta clase se llenará de if y será difícil de mantener.


Aplicando OCP (Extensión sin modificar la clase original)

En lugar de modificar la clase base, usamos polimorfismo para extender el comportamiento sin tocar el código original.

```
// Clase base
class ReglaDescuento {
  calcular(precio) {
    return precio; // Sin descuento por defecto
  }
}

// Subclases que extienden la funcionalidad
class DescuentoRegular extends ReglaDescuento {
  calcular(precio) {
    return precio * 0.9; // 10% de descuento
  }
}

class DescuentoVIP extends ReglaDescuento {
  calcular(precio) {
    return precio * 0.8; // 20% de descuento
  }
}

// Uso sin modificar la clase base
function calcularPrecioFinal(precio, reglaDescuento) {
  return reglaDescuento.calcular(precio);
}

const precioOriginal = 100;
console.log(calcularPrecioFinal(precioOriginal, new DescuentoRegular())); // 90
console.log(calcularPrecioFinal(precioOriginal, new DescuentoVIP())); // 80

```

La clase base nunca se modifica.
Si queremos agregar nuevos descuentos, solo creamos una nueva subclase, sin tocar el código existente.
Menos riesgo de errores y más fácil de mantener.


funciones sin OCP:

```
function procesarPago(metodo, monto) {
  if (metodo === "tarjeta") {
    console.log(`Procesando pago con tarjeta: $${monto}`);
  } else if (metodo === "paypal") {
    console.log(`Procesando pago con PayPal: $${monto}`);
  }
}

```

Si agregamos más métodos de pago (Bitcoin, Stripe, etc.), tenemos que modificar la función original.


Aplicando OCP con polimorfismo:

```
class MetodoPago {
  pagar(monto) {
    throw new Error("Método debe ser implementado");
  }
}

class PagoTarjeta extends MetodoPago {
  pagar(monto) {
    console.log(`Procesando pago con tarjeta: $${monto}`);
  }
}

class PagoPayPal extends MetodoPago {
  pagar(monto) {
    console.log(`Procesando pago con PayPal: $${monto}`);
  }
}

function procesarPago(monto, metodoPago) {
  metodoPago.pagar(monto);
}

procesarPago(100, new PagoTarjeta());
procesarPago(50, new PagoPayPal());

```

Ahora, para agregar más métodos de pago, solo creamos nuevas clases sin modificar el código existente.


OCP hace que el código sea más extensible sin modificar su estructura original.

Se logra mediante herencia, polimorfismo o inyección de dependencias.

Regla clave: Si tienes que modificar código viejo cada vez que agregas algo nuevo, probablemente no estés aplicando OCP


## Liskov Substitution Principle (LSP)

Las subclases deben poder sustituir a sus clases base sin alterar el comportamiento del programa


Si tienes una clase base y una subclase, deberías poder usar la subclase sin afectar el código que usa la clase base.

La subclase no debe romper las expectativas del comportamiento de la clase base.


Sin LSP (Subclase que rompe la lógica de la clase base):

Imagina que tienes una clase Ave con un método volar(), y decides crear una subclase Pinguino.

```
class Ave {
  volar() {
    console.log("Estoy volando!");
  }
}

class Pinguino extends Ave {
  volar() {
    throw new Error("Los pingüinos no pueden volar");
  }
}

function hacerVolar(ave) {
  ave.volar();
}

const pajaro = new Ave();
hacerVolar(pajaro); // "Estoy volando!"

const pinguino = new Pinguino();
hacerVolar(pinguino); // Error: "Los pingüinos no pueden volar"

```

La subclase Pinguino rompe la lógica de Ave porque volar() no tiene sentido para los pingüinos.

Si un código espera que todas las aves puedan volar, fallará con Pinguino.


Aplicando LSP (Reestructurando la jerarquía correctamente):

Para solucionar esto, cambiamos la jerarquía y evitamos que todas las aves tengan volar() por defecto

```
class Ave {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

class AveVoladora extends Ave {
  volar() {
    console.log(`${this.nombre} está volando!`);
  }
}

class Pinguino extends Ave {
  nadar() {
    console.log(`${this.nombre} está nadando!`);
  }
}

function hacerVolar(ave) {
  if (ave instanceof AveVoladora) {
    ave.volar();
  } else {
    console.log(`${ave.nombre} no puede volar.`);
  }
}

const pajaro = new AveVoladora("Gaviota");
hacerVolar(pajaro); // "Gaviota está volando!"

const pinguino = new Pinguino("Pingüino emperador");
hacerVolar(pinguino); // "Pingüino emperador no puede volar."

```

Ahora Pinguino no hereda un método volar() que no tiene sentido.

No se rompe el comportamiento esperado del código.


Formas geométricas:

Sin LSP (Subclase que rompe el comportamiento de la clase base)

```
class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  setAncho(ancho) {
    this.ancho = ancho;
  }

  setAlto(alto) {
    this.alto = alto;
  }

  area() {
    return this.ancho * this.alto;
  }
}

class Cuadrado extends Rectangulo {
  setAncho(lado) {
    this.ancho = this.alto = lado;
  }

  setAlto(lado) {
    this.ancho = this.alto = lado;
  }
}

// Código que espera trabajar con Rectángulos
function calcularArea(rectangulo) {
  rectangulo.setAncho(4);
  rectangulo.setAlto(5);
  return rectangulo.area();
}

console.log(calcularArea(new Rectangulo(2, 3))); // 20 ✅
console.log(calcularArea(new Cuadrado(2))); // 25 ❌ (No se comporta como un Rectángulo)

```

Cuadrado hereda de Rectangulo pero cambia su comportamiento.

Un cuadrado no es un rectángulo en términos de cómo funciona setAncho() y setAlto().

El código que espera trabajar con un Rectangulo se rompe cuando recibe un Cuadrado


Aplicando LSP correctamente

En lugar de hacer que Cuadrado herede de Rectangulo, creamos una jerarquía más clara:

```
class Forma {
  area() {
    throw new Error("Método no implementado");
  }
}

class Rectangulo extends Forma {
  constructor(ancho, alto) {
    super();
    this.ancho = ancho;
    this.alto = alto;
  }

  area() {
    return this.ancho * this.alto;
  }
}

class Cuadrado extends Forma {
  constructor(lado) {
    super();
    this.lado = lado;
  }

  area() {
    return this.lado * this.lado;
  }
}

function calcularArea(figura) {
  return figura.area();
}

console.log(calcularArea(new Rectangulo(4, 5))); // 20 
console.log(calcularArea(new Cuadrado(4))); // 16 

```

Ahora cada clase se comporta correctamente sin afectar el código original.

LSP asegura que las subclases sean sustitutas válidas de sus clases base.

Si una subclase cambia el comportamiento esperado, probablemente rompe LSP.


Regla clave: Si una subclase no puede reemplazar su clase base sin errores, necesitas reestructurar la jerarquía


## Interface Segregation Principle (ISP)

Ninguna clase debe ser forzada a implementar interfaces que no utiliza


Idea clave:

Es mejor tener interfaces pequeñas y específicas, en lugar de una interfaz grande con métodos innecesarios.

Si una clase tiene que implementar métodos que no usa, la interfaz está mal diseñada


Ejemplo sin ISP (Interfaz demasiado grande)

Imagina que tenemos una interfaz Trabajador con métodos para programadores y gerentes

```
interface Trabajador {
  programar(): void;
  gestionarProyecto(): void;
}

class Programador implements Trabajador {
  programar() {
    console.log("Escribiendo código...");
  }

  gestionarProyecto() {
    throw new Error("Un programador no gestiona proyectos.");
  }
}

class Gerente implements Trabajador {
  programar() {
    throw new Error("Un gerente no programa.");
  }

  gestionarProyecto() {
    console.log("Supervisando el proyecto...");
  }
}

```

Programador se ve obligado a implementar gestionarProyecto(), aunque no lo usa.

Gerente se ve obligado a implementar programar(), aunque no lo necesita.

Esto rompe ISP porque las clases están implementando métodos innecesarios.


Aplicando ISP (Dividiendo la interfaz en partes más pequeñas):

```
interface ProgramadorInterface {
  programar(): void;
}

interface GerenteInterface {
  gestionarProyecto(): void;
}

class Programador implements ProgramadorInterface {
  programar() {
    console.log("Escribiendo código...");
  }
}

class Gerente implements GerenteInterface {
  gestionarProyecto() {
    console.log("Supervisando el proyecto...");
  }
}

```

Cada clase solo implementa los métodos que necesita.

No hay métodos innecesarios ni excepciones forzadas.

El código es más modular y fácil de mantener


Sin ISP:

```
interface Animal {
  caminar(): void;
  volar(): void;
}

class Perro implements Animal {
  caminar() {
    console.log("El perro camina.");
  }

  volar() {
    throw new Error("¡Los perros no pueden volar!");
  }
}

class Pajaro implements Animal {
  caminar() {
    console.log("El pájaro camina.");
  }

  volar() {
    console.log("El pájaro vuela.");
  }
}

```

Perro se ve obligado a implementar volar(), aunque no tiene sentido para él.


Aplicando ISP:

```
interface Animal {
  caminar(): void;
}

interface Volador {
  volar(): void;
}

class Perro implements Animal {
  caminar() {
    console.log("El perro camina.");
  }
}

class Pajaro implements Animal, Volador {
  caminar() {
    console.log("El pájaro camina.");
  }

  volar() {
    console.log("El pájaro vuela.");
  }
}

```

Ahora cada clase solo implementa los métodos que realmente necesita


ISP evita que las clases implementen métodos que no usan.

Se logra creando interfaces más pequeñas y específicas.

Regla clave: Si una clase tiene que lanzar errores en métodos de una interfaz, probablemente esa interfaz deba dividirse.


## Dependency Inversion Principle (DIP)

Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones

Las abstracciones no deben depender de los detalles. Los detalles deben depender de las abstracciones
 

Idea clave:

En lugar de que una clase dependa directamente de otra, debe depender de una abstracción (interfaz o clase base).

Esto reduce el acoplamiento y hace el código más flexible y fácil de mantener


Sin DIP (Alto acoplamiento a clases concretas)

Imagina que tenemos una clase Motor y un Coche que la usa directamente:

```
class Motor {
  encender() {
    console.log("Motor encendido");
  }
}

class Coche {
  private motor: Motor;

  constructor() {
    this.motor = new Motor(); // Dependencia directa en una clase concreta
  }

  arrancar() {
    this.motor.encender();
  }
}

```

Coche depende directamente de Motor.

Si queremos cambiar el motor por un MotorElectrico, tendríamos que modificar la clase Coche.

Rompe DIP porque un módulo de alto nivel (Coche) depende de un módulo de bajo nivel (Motor).


Aplicando DIP (Usando una abstracción/interfaz para reducir acoplamiento)

Definimos una interfaz IMotor y hacemos que Coche dependa de ella en lugar de una implementación específica.

```
// Interfaz que define el comportamiento de un motor
interface IMotor {
  encender(): void;
}

// Implementación concreta de un motor de combustión
class MotorCombustion implements IMotor {
  encender() {
    console.log("Motor de combustión encendido");
  }
}

// Implementación concreta de un motor eléctrico
class MotorElectrico implements IMotor {
  encender() {
    console.log("Motor eléctrico encendido");
  }
}

// Coche depende de la abstracción (IMotor), no de una implementación específica
class Coche {
  private motor: IMotor;

  constructor(motor: IMotor) {
    this.motor = motor;
  }

  arrancar() {
    this.motor.encender();
  }
}

// Ahora podemos usar cualquier tipo de motor sin modificar la clase Coche
const coche1 = new Coche(new MotorCombustion());
coche1.arrancar(); // "Motor de combustión encendido"

const coche2 = new Coche(new MotorElectrico());
coche2.arrancar(); // "Motor eléctrico encendido"

```

Coche ya no depende de clases concretas, sino de una interfaz genérica (IMotor).

Podemos cambiar el motor sin modificar la clase Coche.

Facilita la extensibilidad y el uso de dependencias intercambiables


Ejemplo con una notificación de usuario

Sin DIP:

```
class EmailService {
  enviarMensaje(mensaje: string) {
    console.log(`Enviando email: ${mensaje}`);
  }
}

class Notificacion {
  private emailService: EmailService;

  constructor() {
    this.emailService = new EmailService(); // Dependencia directa
  }

  enviar(mensaje: string) {
    this.emailService.enviarMensaje(mensaje);
  }
}

const notificacion = new Notificacion();
notificacion.enviar("Hola!"); // "Enviando email: Hola!"

```

Notificacion depende de una clase concreta (EmailService).

Si queremos cambiar EmailService por SMSService, tendríamos que modificar Notificacion


Aplicando DIP (Usando una interfaz para desacoplar):

```
// Interfaz para cualquier servicio de notificación
interface INotificacionService {
  enviarMensaje(mensaje: string): void;
}

// Implementación concreta: Email
class EmailService implements INotificacionService {
  enviarMensaje(mensaje: string) {
    console.log(`Enviando email: ${mensaje}`);
  }
}

// Implementación concreta: SMS
class SMSService implements INotificacionService {
  enviarMensaje(mensaje: string) {
    console.log(`Enviando SMS: ${mensaje}`);
  }
}

// La clase Notificacion ahora depende de una abstracción (INotificacionService)
class Notificacion {
  private servicio: INotificacionService;

  constructor(servicio: INotificacionService) {
    this.servicio = servicio;
  }

  enviar(mensaje: string) {
    this.servicio.enviarMensaje(mensaje);
  }
}

// Podemos cambiar fácilmente el tipo de notificación sin modificar la clase Notificacion
const notificacion1 = new Notificacion(new EmailService());
notificacion1.enviar("Hola!"); // "Enviando email: Hola!"

const notificacion2 = new Notificacion(new SMSService());
notificacion2.enviar("Hola!"); // "Enviando SMS: Hola!"

```

Ahora Notificacion puede usar cualquier tipo de servicio sin cambiar su código


DIP hace que las clases dependan de abstracciones (interfaces), no de implementaciones concretas.

Se logra usando interfaces o clases base para que las dependencias sean intercambiables.

Regla clave: Si cambias una dependencia y tienes que modificar muchas clases, probablemente no estés aplicando DIP


# Composición sobre Herencia

Principio de diseño en programación orientada a objetos que recomienda usar composición en lugar de herencia siempre que sea posible

Herencia: 

Cuando una clase (subclase) extiende otra clase (superclase) y hereda su comportamiento y atributos

```
class Animal {
  hacerSonido() {
    console.log("Sonido genérico");
  }
}

class Perro extends Animal {
  hacerSonido() {
    console.log("Guau guau");
  }
}

```

La herencia crea una jerarquía rígida que puede ser difícil de modificar o extender sin afectar otras partes del código.

Puede llevar a acoplamiento fuerte entre clases, lo que reduce la flexibilidad.


Composición:

```
class SonidoPerro {
  hacerSonido() {
    console.log("Guau guau");
  }
}

class Perro {
  constructor() {
    this.sonido = new SonidoPerro();
  }

  hacerSonido() {
    this.sonido.hacerSonido();
  }
}

```

Más flexible: Puedes cambiar o intercambiar comportamientos sin modificar estructuras grandes.

Menos acoplamiento: Las clases no dependen directamente unas de otras.

Evita problemas de herencia múltiple (como en lenguajes donde no se permite herencia múltiple directa).


Usa composición para delegar funcionalidades en objetos internos y reserva la herencia solo cuando haya una relación real de "es un(a)".



# Interfaces

Define un contrato que las clases deben cumplir, sin importar cómo implementen sus métodos.

```
interface Volador {
  volar(): void;
}

class Avion implements Volador {
  volar() {
    console.log("El avión está despegando...");
  }
}

class Pajaro implements Volador {
  volar() {
    console.log("El pájaro está volando...");
  }
}

const miAvion = new Avion();
const miPajaro = new Pajaro();

miAvion.volar(); // El avión está despegando...
miPajaro.volar(); // El pájaro está volando...

```

La interfaz Volador define el método volar(), pero no lo implementa.

Avion y Pajaro deben implementar el método volar(), pero cada uno lo hace a su manera.

Esto permite que distintas clases sean intercambiables si implementan la misma interfaz.


Regla clave: Las interfaces definen contratos, asegurando que las clases que las implementen tengan ciertos métodos.


# Abstracción

Principio de diseño que se enfoca en ocultar los detalles internos de implementación y solo exponer lo necesario para que el usuario interactúe con un objeto

```
class Animal {
  constructor(nombre) {
    if (new.target === Animal) {
      throw new Error("No se puede instanciar una clase abstracta");
    }
    this.nombre = nombre;
  }

  hacerSonido() {
    throw new Error("Método abstracto debe ser implementado en la subclase");
  }
}

class Perro extends Animal {
  hacerSonido() {
    console.log("Guau guau");
  }
}

const miPerro = new Perro("Firulais");
miPerro.hacerSonido(); // Guau guau

```

Animal es una clase abstracta que no se puede instanciar directamente.

Perro hereda de Animal e implementa el método hacerSonido().

Se ocultan los detalles internos y solo se expone lo necesario


Regla clave: La abstracción permite definir qué hace una clase sin preocuparse por cómo lo hace.



# CS50: 

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

Estructuras de datos eficientes: CS50 enfatiza la importancia de elegir la estructura de datos adecuada para el problema en cuestión, ya que esto puede afectar drásticamente el rendimiento de su algoritmo. Por ejemplo:

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




# Rs code design

## Alto nivel: entrada, cálculo y salida

Entrada: datos

Cálculo: guardado/copia de datos, procesos, algoritmos

Salida: ui, resultados



## Solución software


### Técnicas o métodos sistematicos 


### DRY, etc. 



## Comportamiento del software 


### Estado 


### Estruración datos   


### Sincronización


### Dínamismo 


