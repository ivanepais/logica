# Solución 

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
    """Algoritmo de Euclides clásico."""
    while b:
        a, b = b, a % b
    return a

def lcm(a, b):
    """Calcula el mínimo común múltiplo usando gcd."""
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



# N1 

## 1. 


