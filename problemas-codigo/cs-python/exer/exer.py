# Planteo

"""
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


# Implementación

## 1. Enunciado

1. Lee con atención: identifica datos de entrada, salida y qué pide el problema.
2. Asegura los casos borde: entradas mínimas, máximas, valores nulos, tipos de datos especiales.
3. Reformula con tus propias palabras: ¿qué transformaciones o cálculos tienes que hacer?  


## 2. Ejemplo a mano

1. Elige casos sencillos (pequeños, obvios) y resuélvelos manualmente.
2. Prueba casos límite (valores máximos, cero, negativos si aplica).
3. Analiza patrones en esos ejemplos: ¿qué repites? ¿qué dependencias ves?


## 3. Solución inicial (brute‑force)

Método directo, aunque no sea óptimo: recorre todas las opciones, compara, suma…
Esto te asegura corrección y te sirve de base para optimizar.


## 4. Analizar complejidad

1. Estima el tiempo (¿n? ¿n²? ¿2ⁿ?) y el espacio (memoria) de tu propuesta.
2. Contrástalo con los límites del problema (por ejemplo, n ≤ 10⁵ no admite O(n²)).


## 5. Optimizar

Estrategias comunes:

1. Divide y vencerás
2. Programación dinámica / memoización
3. Algoritmos voraces (greedy)
4. Búsqueda binaria, dos punteros
5. Estructuras de datos adecuadas (heaps, hash maps, fenwick, segment trees)
6. Preprocesado (prefijos, sufijos, criba de Eratóstenes…)

Replantea tu brute‑force usando alguna de estas para bajar el orden de magnitud


## 6. Estructuras de datos

Según las necesidades del problema

1. Listas/arrays para accesos secuenciales
2. Hash table para búsquedas O(1)
3. Heaps para acceder al máximo/mínimo rápidamente
4. Colas/deques para ventanas deslizantes
5. Grafos (listas de adyacencia) si hay nodos y aristas
6. Árboles, segment trees, tries, etc.


## 7. Pseudocódigo/comentarios

Antes de código, bosqueja paso a paso en lenguaje natural o pseudocódigo.
Esto evita errores de sintaxis y te ayuda a clarificar la lógica.


## 8. Implementación

Traduce el pseudocódigo a tu lenguaje (Python, C++, Java…).
Nombra bien variables y funciones para que el código sea legible.


## 9. robar y depurar

1. Usa los ejemplos iniciales y añade:

Casos aleatorios pequeños.
Límites (entradas vacías, muy grandes, uniformes).

2. Comprueba:
Correctitud de la salida.
Tiempo de ejecución y uso de memoria.


## 10. Revisar y pulir
1. Si falta eficiencia, busca cuellos de botella (loops anidados, conversiones costosas).
2. Refactoriza: extrae funciones, evita duplicar código, añade comentarios donde la lógica no sea obvia.
    

# Implementación

## Enunciado 
Dado dos enteros positivos a y b, calcular su Máximo Común Divisor (MCD) y su Mínimo Común Múltiplo (MCM).


## Entrada y salida 

1. Entrada: dos enteros a,b>0a,b>0.
2. Salida: dos valores:
gcd(a,b)
lcm(a,b)


# Ej a mano

1. Ej 1: a=12, b=18
Divisores de 12: 1,2,3,4,6,12
Divisores de 18: 1,2,3,6,9,18
gcd = 6
lcm = 12⋅18 / 6 ​ = 36

2. Ej 2: a=7, b=5
Divisores comunes: 1 ⇒ gcd⁡=1gcd=1
lcm = 7⋅5/1 = 35 


## Brute-force inicial

1. MCD: recorrer d desde 1 hasta min⁡(a,b) y quedarte con el mayor que divida a ambos.
Complejidad O(min⁡(a,b))

2. MCM: generar múltiplos de max⁡(a,b)max(a,b) hasta encontrar uno que sea divisible por min⁡(a,b)min(a,b).
Muy ineficiente (O(lcm/a)


## Optimización con teoría de números

Algoritmo de Euclides para gcd⁡ en O(log min(a,b)):

```
gcd(a,b) = {a si b = 0; gcd(b, a mod b) si b > 0}
```

Fórmula para el MCM usando el MCD:

```
lcm(a,b) = |a*b| / gcd(a,b)
```

## Estructuras y planteamiento final
No necesitamos estructuras complejas, solo variables enteras

Pasos: 
1. Leer a, b
2. Calcular d = gcd(a,b) con Euclides
3. Calcular m = |a * b| // d
4. Imprimir d y m 


## En Python

```
def gcd(a, b):
    #Algoritmo de Euclides clásico.
    while b:
        a, b = b, a % b
    return a

def lcm(a, b):
    #Calcula el mínimo común múltiplo usando gcd.
    return abs(a * b) // gcd(a, b)

def main():
    # Ejemplo de uso; en competición leerías desde input().
    a = int(input("a = "))
    b = int(input("b = "))
    d = gcd(a, b)
    m = lcm(a, b)
    print(f"MCD({a}, {b}) = {d}")
    print(f"MCM({a}, {b}) = {m}")

if __name__ == "__main__":
    main()
```

## Pruebas rápidas
Caso 12,18 → MCD=6, MCM=36
Caso 7,5 → MCD=1, MCM=35
Caso 100, 25 → MCD=25, MCM=100
Caso 13,17 → MCD=1, MCM=221


Roles:
Al encarar un problema, identifica qué roles necesitas:

1. Variables de Control de Bucle
Contador (counter): Lleva la cuenta de cuántas veces ha ocurrido algo (iteraciones, ocurrencias).
Indice (i, j, k): Marca la posición actual al recorrer arrays/listas.
Paso (step): Define el incremento fijo de un bucle (for i in range(0, n, step)).

2. Variables Agregadoras / Acumuladores
Acumulador (sum, total): Suma (o acumula) valores a lo largo de una iteración.
Producto acumulado (prod): Multiplica sucesivamente valores.
Máximo / Mínimo (best, max_so_far, min_val): Guarda el mayor o menor valor visto hasta el momento.

3. Banderas y Sentinelas
Bandera (flag, found): Variable booleana que indica si se ha cumplido cierta condición (p.ej. “¿encontré el elemento?”).
Sentinela (sentinel): Valor especial colocado al final (o inicio) de una estructura para evitar comprobaciones adicionales de fin de lista.
Guard (guard): Condición o valor extra al inicio de un bucle/función para simplificar casos fronteras (p.ej. añadir un nodo “dummy” a una lista enlazada).

4. Punteros e Índices Múltiples
Puntero izquierdo/derecho (left, right): Dos índices que se mueven hacia dentro (two‑pointers) o definen un rango.
Cursor (cur): Puntero que avanza sobre una cadena o lista, a menudo en operaciones de parsing.
Cabeza / Cola (head, tail): En colas o listas enlazadas, marca el inicio y el final de la estructura.

5. Ventanas Deslizantes y Two‑Pointers
Inicio/fin de ventana (start, end): Delimitan un subarray o subcadena cuya condición estamos manteniendo.
Longitud de ventana (window_size): Tamaño actual de la ventana.
Suma en ventana (window_sum): Acumulador específico para sumas en sliding‑window.

6. Almacenamiento Temporal y Swap
Variable temporal (temp): Almacena provisionalmente un valor durante intercambios (swap) u operaciones intermedias.
Buffer (buf): Espacio donde se acumulan datos antes de procesarlos (lectura de líneas, chunks de archivos).

7. Recursión y Memoización
Parámetro recursivo (n, idx): Estado que va cambiando en cada llamada recursiva.
Tabla de memoización (memo, dp): Diccionario o arreglo donde guardamos resultados ya calculados para evitar recomputar.
Estado de DP (dp[i], dp[i][j]): Variable o estructura que almacena soluciones parciales.

8. Búsqueda y Hashing
Clave / Valor (key, value): En un hash‑map, marcan qué estamos indexando y qué guardamos.
Conjunto de visitados (seen, visited): Para no procesar dos veces un nodo o valor en BFS/DFS.

9. Matemáticos y Modularidad
Módulo (mod): Valor fijo para reducir residuos en aritmética modular.
Exponente (exp): En exponentiación rápida, marca el poder al que elevamos la base.
Máquina de estados (state): Variable que indica en qué “paso” o modo estamos (útil en parsers o autómatas).

10. Técnicas de Optimización
Poda / Corte (best_so_far, limit): Valor de referencia para descartar ramas en backtracking o búsqueda.
Preprocesado (prefix_sum, suffix_max): Arrays auxiliares que almacenan resultados parciales para consultas O(1).

uso: 

1. ¿Vas a iterar? → Contadores, índices, banderas de terminación.
2. ¿Acumulas o comparas? → Acumuladores, max/min.
3. ¿Control de condición? → Banderas, guardias, sentinelas.
4. ¿Trabajo en rango? → Punteros izquierdo/derecho o ventanas deslizantes.
5. ¿Estructura dinámica? → Head/tail, buffer, visited set.
6. ¿Recursión / DP? → Parámetros recursivos, tabla memo/DP.
7. ¿Operaciones matemáticas? → Mod, exp, prefix/suffix arrays.


Estrategia

Evalúa las características del problema:
¿Es necesario explorar todas las soluciones? → Fuerza bruta.
¿Se puede dividir en partes más pequeñas? → Divide y conquista.
¿Hay subproblemas repetidos? → Programación dinámica.
¿Es suficiente una solución parcial óptima? → Algoritmos voraces.
¿Hay decisiones con retroceso? → Backtracking.

Estructuras de datos eficientes: 
Importancia de elegir la estructura de datos adecuada para el problema en cuestión, ya que esto puede afectar drásticamente el rendimiento de su algoritmo. 

Matrices y Listas: Excelentes para datos secuenciales, pero ineficientes para operaciones de búsqueda (a menos que estén ordenados).
Tablas hash (Diccionarios/Mapas): Eficientes para búsquedas, inserciones y eliminaciones.
Pilas y colas: Útiles para problemas que requieren operaciones LIFO (último en entrar, primero en salir) o FIFO (primero en entrar, primero en salir).
Árboles: En particular, árboles de búsqueda binaria para una búsqueda, inserción y eliminación eficientes.
Gráficos: Para representar datos interconectados (como redes sociales u hojas de ruta).


Etapas: 

1. Inicial: partes necesarias
contador, estado, bandera, estruct, copia, inputs

2. Cálculo/procesos: mecanismo que pone a trabajar las partes necesarias 
loops, cond, oper, calc, actual valor provisional (único)
break, continue, methds, obj estruc, retornos, cambio estado

3. Unión: une los mecanismos conseguidos, partes completadas, engranajas
retorno, calc y uso estruc final, vars finales

"""


# 1. 

"""
Escriba un programa que solicite al usuario que introduzca un entero e imprima dos enteros, root y pwr, de modo que 1 < pwr < 6 y root**pwr sea igual al entero introducido por el usuario. 

Si no existe dicho par de enteros, debería imprimir un mensaje indicando tal efecto.

"""

"""
Planteo:

input entero e imprima dos enteros, root y pwr
de modo que 1 < pwr < 6 y root**pwr sea igual
al entero introducido

Si no existe dicho par de enteros,
debería imprimir un mensaje indicando tal efecto.


Descomp:

input entero:
a = int(input())

dos enteros, root y pwr:
r = int(a**(1/a))
p = int(a**a)

1 < pwr < 6 y root**pwr == input:
if ((1 < p < 6) and (r**p)) != a:
  return "No existen potencia y raíz del entero introducido"
else:
  return f"La raíz y la potencia son: {r}, {p}"


Err:

cálculos no ayudan a encontrar todos los pares posibles (root, pwr)
Evaluación con un solo par (r, p)

intentar todos los valores posibles de pwr
entre 2 y 5, y para cada uno probar si existe
un root entero tal que root ** pwr == a.
"""  

"""
Objetivo:

Dado un número entero a, queremos encontrar un par de números enteros (root, pwr) tal que:
1. 1 < pwr < 6
2. root ** pwr == a
Si no se encuentra tal par, imprimir un mensaje.

bucle que pruebe valores de pwr desde 2 hasta 5 (inclusive)
para cada pwr, probar si hay un root tal que
root ** pwr == a.

"""

def pwr_input():
    a = int(input("Introduce un número entero: "))
    encontrado = False

    for pwr in range(2, 6):  # pwr desde 2 hasta 5
        root = 0
        while root ** pwr < abs(a):  # usar abs en caso de negativos
            if root ** pwr == abs(a):
                if a < 0 and pwr % 2 == 0:
                    break  # no hay raíz par de número negativo en enteros reales
            if a < 0:
                root = -root  # corregimos el signo
            print(f"root = {root}, pwr = {pwr}")
            encontrado = True
            break
        root += 1

    if not encontrado:
        print("No existen potencia y raíz enteras que satisfagan la condición.")


"""
Usamos abs(a) porque las potencias pares no pueden producir negativos, pero impares sí.
Solo buscamos enteros, por eso hacemos una búsqueda por fuerza bruta.
El bucle interno termina cuando root ** pwr >= abs(a).
Una vez encontrado un par válido, lo mostramos y marcamos encontrado = True.
"""


def pwr_input_ef():
    a = int(input("Introduce un número entero: "))

    for pwr in range(2, 6):
        root = round(abs(a) ** (1 / pwr))
        if root ** pwr == abs(a):
            if a < 0 and pwr % 2 == 0:
                continue  # raíz par de número negativo no es válida
        root = -root if a < 0 else root
        print(f"root = {root}, pwr = {pwr}")
        break
else:
    print("No existen potencia y raíz enteras que satisfagan la condición.")


"""
Usa round(abs(a) ** (1 / pwr) para calcular un posible root directamente, en vez de probar todos desde 0.
Verifica que root ** pwr == abs(a) para asegurarse de que sea exacto (puede no serlo por redondeo).
Usa else en el for, lo cual solo se ejecuta si no se encontró ningún par válido (no se usó break).
Evita bucles anidados, usando cálculo directo con verificación
"""



# 2. 

"""
Escribe un programa que imprima la suma de los números primos mayores que 2 y menores que 1000.
 
Sugerencia: probablemente quieras tener un bucle que sea una prueba de primalidad anidada dentro de un bucle que itere sobre los enteros impares entre 3 y 999.

"""

"""
Planteo:
imprima la suma primos
mayores que 2 y menores que 1000

bucle que sea una prueba de primalidad
anidada dentro de un bucle que itere
sobre los enteros impares entre 3 y 999

precondiciones y postcondiciones:
precondición: mayores que 2 y menores que 1000
postcondición: suma primos entre 3 y 999

inp y out:
sum primes 3 y 999

calc:
sum_primes = 0
for i in range(3, 999):
    for j in range(i, int(i**0.5)+1):
      if i % j != 0:
        sum_primes += i
    return sum_primes

Err:
empezando el bucle de verificación con j = i
nunca dará i % j == 0 salvo con i mismo,
lo que no sirve para saber si i es primo.

sumando i en cada iteración del bucle
si no es divisible por j, incluso si más adelante
resulta que sí lo es por otro divisor.
hace que números no primos también se sumen varias veces.
"""

def sum_primes():
    sum_prime = 0
    for i in range(3, 1000, 2):  # impares desde 3 hasta 999
        es_primo = True
        for j in range(3, int(i**0.5) + 1, 2):  # divisores impares desde 3 hasta raíz de i
            if i % j == 0:
                es_primo = False
                break
        if es_primo:
            sum_prime += i

    return sum_primes
 

"""
1. range(3, 1000, 2)
iterar solo sobre los impares
2. si i tiene algún divisor impar entre 3 y √i.
3. Si no se encuentra divisor, i es primo y lo sumamos
4. No olvidamos que 2 es primo, pero como pide “mayores que 2”, no se incluye.

Out:
76127

"""
