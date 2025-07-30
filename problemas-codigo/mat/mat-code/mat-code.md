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

## 1. Par/impar 

`2k / 2k+1`

`x % 2 == 0` 


```
def es_par(n):
    return n % 2 == 0
```

1. Se espera que sea un entero. 

2. operador % es el módulo o residuo de la división

Cálculamos el resto de dividirlo 2. 

Si el resto es 0, es par. 

Si el resto es 1, es impar.

3. == 0 

Evalua si el resto (resultado de %) son iguales

4. Retorna Booleano: True o False

Rs: Divisible por 2 sin resto o residuo.
 

No hay posibilidad de que el residuo sea mayor que 1 (ni menor que 0), porque el operador módulo (%) siempre devuelve un resultado en el rango `[0, ∣2∣`) cuando aplicas x % 2 con x entero.

Cuando trabajas con enteros en Python (y en aritmética entera en general), al calcular n % 2 el residuo solo puede ser 0 o 1:

1. `0` si n es par.

2. `1` si n es impar.


```
for n in range(-3, 5):
    print(n, n % 2)

```

Out: 

-3 1
-2 0
-1 1
 0 0
 1 1
 2 0
 3 1
 4 0

Para pares (−2,0,2,4) el resto es 0.

Para impares (−3,−1,1,3) el resto es 1.


Para tipos no enteros:

Si aplicas % a números de punto flotante, el “resto” puede ser cualquier valor en `[0,2)`, por ejemplo:

``
3.7 % 2   # → 1.7
``

Pero en el contexto de decidir si un número es par o impar, siempre debes usar enteros.


### Alternativas eficientes

| Método                     | Código                        | Comentarios                                                                |
| -------------------------- | ----------------------------- | -------------------------------------------------------------------------- |
| **Módulo (%)**             | `return n % 2 == 0`           | Legible, pero el operador `%` es relativamente “pesado” en Python.         |
| **Bitwise AND**            | `return (n & 1) == 0`         | Muy rápido: comprueba el bit menos significativo.                          |
| **Desplazamiento (shift)** | `return ((n >> 1) << 1) == n` | Algo más críptico; equivalente a “quita el último bit y vuelve a ponerlo”. |
| **divmod**                 | `return divmod(n, 2)[1] == 0` | Usa la función integrada, aunque internamente también calcula resto.       |
| **Tabla de Lookup**        |                               |                                                                            |


Tabla de Lookup:

```
lookup = {0: True, 1: False}
return lookup[n & 1]

```
Sólo práctico si tu dominio de n es muy reducido.


Uso: 

Para la mayoría de los casos, n % 2 == 0

Si estás en un bucle crítico de rendimiento (millones de llamadas por segundo), el método con bitwise AND suele ganar por unos cuantos nanosegundos:

```
def es_par_bit(n):
    return (n & 1) == 0

```

Los métodos con shift o divmod son más curiosidades didácticas que soluciones habituales


Comparación: 

```
import timeit

setup = "from __main__ import es_par, es_par_bit"
t_mod  = timeit.timeit("es_par(123456789)", setup=setup, number=1_000_000)
t_bit  = timeit.timeit("es_par_bit(123456789)", setup=setup, number=1_000_000)

print(f"Módulo: {t_mod:.3f}s")
print(f"Bitwise: {t_bit:.3f}s")

```

bitwise es ligeramente más rápido (p. ej. ~0.22 s vs ~0.26 s por 1 M de llamadas), pero a menos que esto sea un cuello de botella real

la versión % 2 == 0 es clara. 



### Librerías

1. SymPy (álgebra simbólica)

SymPy ofrece métodos y funciones para trabajar con enteros de forma simbólica:

```
from sympy import Integer, is_even, is_odd

# como función:
is_even(42)   # → True
is_odd(42)    # → False

# o bien, como método de Integer:
Integer(17).is_even  # → False
Integer(17).is_odd   # → True

```


2. Pandas (manipulación de datos en tablas)

Si estás trabajando con series o DataFrames, puedes usar operaciones vectorizadas para “filtrar” pares e impares

```
import pandas as pd

s = pd.Series([1,2,3,4,5])
pares = s[s % 2 == 0]
impares = s[s % 2 != 0]

```


3. NumPy (cálculo numérico en arrays)

De forma análoga, en numpy se usa %: 

```
import numpy as np

a = np.array([10, 11, 12, 13])
even_mask = (a % 2 == 0)
odds      = a[~even_mask]

```


4. itertools.filterfalse (enfoque puramente funcional)

Usando la librería estándar:

```
from itertools import filterfalse

nums = [1,2,3,4,5,6]
even = list(filter(lambda x: x % 2 == 0, nums))
odd  = list(filterfalse(lambda x: x % 2 == 0, nums))

```


### Extender el interprete

Añadiendo funciones a tu módulo utilitario:

```
def even(n: int) -> bool:
    """True si n es par."""
    return (n & 1) == 0

def odd(n: int) -> bool:
    """True si n es impar."""
    return (n & 1) == 1
```

Luego las importas donde las necesites:

```
from mis_utils import even, odd

even(8)   # True
odd(13)   # True

```

De este modo, tienes nombres explícitos y semánticos sin depender de % cada vez


### Relación paridad 

1. Ternario 

```
def paridad(n):
	    return 'par' if n % 2 == 0 else 'impar'
```

n % 2: 0 para pares, 1 para impares.

Devuelve True si la expresión n % 2 == 0 


2. bit-ops

Operaciones a bajo nivel, el bit menos significativo de un entero indica su paridad:

```
def paridad(n):
    return 'par' if (n & 1) == 0 else 'impar'

```

(n & 1) extrae el último bit:

0 → el número es par

1 → el número es impar


3. Lookup ('truco' de un sólo paso)

```
def paridad(n):
    return {0: 'par', 1: 'impar'}[n & 1]

```

Diccionario para mapear directamente el bit de paridad al texto.


Ej: 

```
for x in range(6):
    print(x, paridad(x))

```

6 iteraciones: va de 0 hasta 5

Out:

0 par
1 impar
2 par
3 impar
4 par
5 impar


Rs:

Única función la lógica para identificar tanto pares como impares.



## 2. Multiplo y  Divisor

`x % n == 0` 

```
if x % 5 == 0:
    print("Múltiplo de 5")

```

1. 

```
def es_multiplo(a, b):
    return a % b == 0

```

Entero `a` multiplo de otro, `b`

Dividiendo a entre b, sin dejar resto

a % b resto de la división entera 


Ej: 

10 % 5 == 0 → 10 es múltiplo de 5.

14 % 4 == 2 → 14 no es múltiplo de 4 (resto 2).


La comparación con 0 produce un booleano. 

True si el resto es 0 (es múltiplo).

False si el resto es distinto de 0 (no es múltiplo)

```
es_multiplo(12, 3)   # → True  (12 % 3 == 0)
es_multiplo(12, 5)   # → False (12 % 5 == 2)
es_multiplo(0, 7)    # → True  (0 % 7 == 0; 0 se considera múltiplo de cualquier entero no cero)
es_multiplo(7, -7)   # → True  (7 % -7 == 0; los signos alternos también funcionan)

```


### División por 0

Si llamas es_multiplo(10, 0), Python lanzará un ZeroDivisionError, porque no tiene sentido dividir entre cero. Si quieres manejarlo, podrías:

```
def es_multiplo(a, b):
    if b == 0:
        return False  # o lanzar tu propio error, según necesidad
    return a % b == 0

```

Rs: 

Forma concisa y directa de expresar “¿b divide exactamente a a?”.


2. 

```
n = 5
multiplos = [k * n for k in range(10)]
print(multiplos)
# → [0, 5, 10, 15, 20, 25, 30, 35, 40, 45]

```


3. 

```
for i in range(0, 101, 5):  # múltiplos de 5
    print(i)

```


```
def divisores(n):
    return [i for i in range(1, n+1) if n % i == 0]

```


Divisor: 

Un divisor `d` de un número `n` es aquel que “cabe” exactamente en él, es decir, satisface

```
n mod d=0.

```

Usos habituales: 

1. valor divisor de otro: 

La inversa del multiplo

##### Evitar lanzar ZeroDivisionError

```
def es_divisor(d, n):
    """
    Devuelve True si d es divisor de n,
    es decir, si n dividido por d deja resto 0.
    """
    """evita b == 0 para no lanzar ZeroDivisionError"""
    if d == 0:
        return False
    return n % d == 0

```


2. Lista de todos los divisores de un número

O(n)

```
def lista_divisores(n):
    """
    Devuelve una lista con todos los divisores positivos de n.
    """
    if n <= 0:
        return []  # Definimos sólo divisores de enteros positivos
    return [d for d in range(1, n+1) if n % d == 0]

```


Optimizarlo usando que los divisores vienen en pares (d,n//d) hasta √n , reduciendo la complejidad a O(√n)
​):

```
import math

def lista_divisores_opt(n):
    """
    Devuelve una lista con todos los divisores positivos de n,
    más eficiente: O(sqrt(n)).
    """
    if n <= 0:
        return []
    divisores = set()
    limite = int(math.isqrt(n))
    for d in range(1, limite + 1):
        if n % d == 0:
            divisores.add(d)
            divisores.add(n // d)
    return sorted(divisores)

```

```
>>> lista_divisores_opt(36)
[1, 2, 3, 4, 6, 9, 12, 18, 36]

```


Múltiplo y divisor se basan en la divisibilidad exacta (resto 0 de dividendo/divisor o b/a). 


1. No es múltiplo si la división de a entre b deja un resto distinto de cero.

```
a % b == 0

a mod (resto) b =/= 0

14 mod 4 = 2
```

14 no es multiplo de 4.

Si lanza ZeroDivisionError (no está cubierto este caso de error) la comprobación no puede hacerse.


2. No es divisor si:

```
n mod d =/= 0

12 mod 5 = 2 
```

5 no es diviosr de 12

```
es_divisor(5, 12)  # → False, porque 12 % 5 == 2

```

Rs:

No es múltiplo  ⟺ a mod b≠0 (o b = 0 da error).

No es divisor  ⟺ n mod d≠0 (o d = 0 lo descartamos).


### Alternativas

| Método                                     | Implementación                                                         | Comentarios                                                                                                                             |
| ------------------------------------------ | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Módulo clásico**                         | `a % b == 0`                                                           | Muy claro, y en C‑Python está implementado en C, así que es bastante rápido para la mayoría de casos.                                   |
| **Floor‑div + multiplicación**             | `b != 0 and (a // b) * b == a`                                         | Usa dos operaciones enteras en lugar de una; a veces ligeramente más veloz que `%` en benchmarks.                                       |
| **Máximo común divisor (gcd)**             | `import math`<br>`math.gcd(a, b) == abs(b)`                            | Basado en el algoritmo de Euclides: O(log n). Útil si ya estás calculando gcd por otros motivos.                                        |
| **Pre‑cálculo / lookup para muchos tests** | `python<br>divs = set(lista_divisores_opt(n))<br>return b in divs<br>` | Si vas a chequear **muchos** posibles divisores de un mismo `n`, conviene generar su lista de divisores (O(√n)) y luego búsquedas O(1). |
| **Bitwise (solo potencias de dos)**        | `return (a & (b - 1)) == 0`                                            | Sólo válido si sabes que `b` es potencia de 2: comprueba que los últimos bits de `a` sean cero.                                         |
| **Bibliotecas externas**                   | – `sympy.divides(b, a)` → True/False                                   | En SymPy, `divides(b, a)` comprueba simbólicamente si `b` divide a `a`.                                                                 |

Si tu aplicación hace miles de comprobaciones contra el mismo a, conviene generar su lista de divisores y luego usar un set para chequear en O(1).

Para casos muy especializados (p. ej. b potencia de 2), las operaciones bitwise ofrecen un pequeño impulso de velocidad.


#### Código alternativas

```
import math

def es_multiplo_mod(a, b):
    return b != 0 and a % b == 0

def es_multiplo_floor(a, b):
    return b != 0 and (a // b) * b == a

def es_multiplo_gcd(a, b):
    return b != 0 and math.gcd(a, b) == abs(b)

# Sólo si b es potencia de 2:
def es_multiplo_pot2(a, b):
    return b > 0 and (b & (b - 1)) == 0 and (a & (b - 1)) == 0

```


### Cociente y resto (divmod)

Racionales: `fracción de enteros a/b, decimales finitos o periodicos`

Cociente: `a // b`

Resto: `a % b`

`Resto = Dividendo - (Divisor x Cociente)`

```
horas, minutos = divmod(130, 60)
print(horas, "horas", minutos, "minutos")  # → 2 horas 10 minutos

```


### Relación múltiplo y divisor

Misma operación vista al revés

#### 1. Usando diccionario relaciona cadena con resultado de una operación 

```
def relacion_multiplo_divisor(a, b):
    """
    Devuelve un diccionario con dos claves:
      - 'a_es_multiplo_de_b'
      - 'b_es_multiplo_de_a'  (equivalente a 'b_es_divisor_de_a')
    """
    # Evitamos división por cero
    if b == 0:
        es_mult = False
    else:
        es_mult = (a % b == 0)

    if a == 0:
        es_div = False
    else:
        es_div = (b % a == 0)

    return {
        'a_es_multiplo_de_b': es_mult,
        'b_es_multiplo_de_a': es_div
    }

```

Operación: `es_mult = (a % b == 0)`

De lo contrario: `es_mult = a % b == 0` es menos claro

Añadir (…) permite ver de un vistazo qué comparación se está devolviendo:

1. Se calcula primero a % b

2. Se compara con 0

3. El resultado (un True o False) se asigna a es_mult

Encierran la expresión booleana a % b == 0

Ej: 

```
>>> relacion_multiplo_divisor(12, 3)
{'a_es_multiplo_de_b': True,  'b_es_multiplo_de_a': False}

>>> relacion_multiplo_divisor(12, 36)
{'a_es_multiplo_de_b': False, 'b_es_multiplo_de_a': True}

>>> relacion_multiplo_divisor(7, 5)
{'a_es_multiplo_de_b': False, 'b_es_multiplo_de_a': False}

>>> relacion_multiplo_divisor(6, 6)
{'a_es_multiplo_de_b': True,  'b_es_multiplo_de_a': True}

```


2. Cadena de texto para describir la relación

```
def tipo_relacion(a, b):
    if b != 0 and a % b == 0:
        return 'a es múltiplo de b'
    if a != 0 and b % a == 0:
        return 'b es múltiplo de a (b es divisor de a)'
    return 'no hay relación de múltiplo/divisor'

```

Ej: 

```
>>> tipo_relacion(12, 3)
'a es múltiplo de b'

>>> tipo_relacion(12, 36)
'b es múltiplo de a (b es divisor de a)'

>>> tipo_relacion(7, 5)
'no hay relación de múltiplo/divisor'

```



## Irracionales 

`No pueden escribirse como una fracción exacta`
`
Decimales infinitos`

1. 

```
import math

x = math.sqrt(2)
print(f"√2 ≈ {x:.20f}")

```


## 3. Primo / compuesto

Primo: 

Natural mayor que 1 que solo tiene dos divisores positivos: el 1 y él mismo.


Divisores:

Un divisor `d` de un número `n` es aquel que “cabe” exactamente en él, es decir, satisface

`n mod(resto) d=0`

`n % d == 0`


Compuesto: 

Si tiene un divisor distinto de 1 y si mismo. 


1. Primo

```
def es_primo(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            return False
    return True

```

Si entero n tiene dos divisores (b%a == 0) positivos (1 y n mismo)

1. Caso base: números menores o iguales a 1

```
if n <= 1:
    return False
```

Por definición, los primos son enteros mayores que 1; devolvemos False


2. Limite superior de búsqueda: √n

`√n = y`
√n -> y^2 = n
√4 -> 2^2 = 4

```
for i in range(2, int(n**0.5) + 1):
    …

```

Si n tiene algún divisor aparte de 1 y n mismo. 

Busca factores hasta la raíz cuadrada de n. 

Si no hallamos divisor ≤ √n

no lo habrá > √n porque cualquier par de factores a×b=n cumple que uno de ellos es ≤ √n.

n**0.5 es la raíz cuadrada de n

al convertirla a entero y sumar 1, nos aseguramos de incluir ese límite.


3. Comprobación de divisibilidad

```
if n % i == 0:
    return False
```

En cada iteración probamos i desde 2 hasta √n:

##### n % i == 0, i divide exactamente a n; hay un divisor distinto de 1 y de n.

En ese caso, n no es primo, así que devolvemos False inmediatamente (salida anticipada).


4.  Conclusión: es primo

```
return True
```

Si el bucle termina sin encontrar ningún divisor en `[2,√n]`  (rango/intervalo cerrado incluye extremos) 


Ej: 

```
es_primo(-5)   # False  (menor que 2)
es_primo(0)    # False
es_primo(1)    # False
es_primo(2)    # True   (2 es el primer primo)
es_primo(3)    # True
es_primo(4)    # False  (4 % 2 == 0)
es_primo(17)   # True
es_primo(18)   # False  (18 % 2 == 0)
es_primo(37)   # True

```

##### Complejidad:recorre hasta √n como máximo, por lo que su complejidad es O(√n).

##### Mucho más eficiente que un bucle hasta nn, sobre todo para valores grandes de n.


### Alternativas eficientes

1. Trial Division mejorado (6k ± 1)

La versión básica prueba todos los i desde 2 hasta √n. 

Podemos reducirlo comprobando sólo los números de la forma 6k ± 1 (todos los primos > 3 cumplen esa forma):

```
def es_primo_6k1(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    # Sólo probamos i y i+2, avanzando de 6 en 6
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

```

Reduce los intentos a ~√n/3 divisiones, en lugar de √n


2. Criba de Eratóstenes (para muchos tests)

Si necesitas chequear primalidad en un rango (por ejemplo todos los números hasta N), compensa más usar una criba

```
def criba_eratostenes(N):
    es_primo = [True] * (N+1)
    es_primo[0:2] = [False, False]
    p = 2
    while p * p <= N:
        if es_primo[p]:
            for mult in range(p*p, N+1, p):
                es_primo[mult] = False
        p += 1
    return es_primo  # lista booleana: es_primo[x] indica si x es primo

# Uso:
primos_hasta_100 = criba_eratostenes(100)

```

Ventaja: una vez precalculada la criba en O(n log n), cada consulta es O(1).


3. Criba segmentada (para rangos muy grandes)

Cuando N es muy grande o el rango `[L…R]` no empieza en 1, se usa la criba segmentada, que trabaja en bloques de tamaño razonable y aprovecha una criba base hasta √R.


4. Test probabilístico (Miller–Rabin)

Para valores grandes (64 bits, 128 bits o más), los métodos deterministas se vuelven lentos. 

Un test probabilístico como Miller–Rabin ofrece un coste de O(k·log³ n), donde k es el número de “rounds” de test:

```
import random

def es_primo_miller_rabin(n, k=5):
    if n <= 1:
        return False
    # casohandles
    for p in (2, 3, 5, 7, 11, 13, 17, 19, 23):
        if n == p:
            return True
        if n % p == 0:
            return False

    # escribe n-1 = 2^s * d
    d, s = n - 1, 0
    while d % 2 == 0:
        d //= 2
        s += 1

    def witness(a):
        x = pow(a, d, n)
        if x in (1, n - 1):
            return False
        for _ in range(s - 1):
            x = pow(x, 2, n)
            if x == n - 1:
                return False
        return True

    for _ in range(k):
        a = random.randrange(2, n - 1)
        if witness(a):
            return False
    return True

```

Rapidísimo incluso para números de cientos de dígitos. 

Con k=5 ya el error es casi despreciable.


5. Bibliotecas especializadas

SymPy: sympy.isprime(n) (determinista para tamaños moderados, usa una combinación de cribas y tests).

PyPrimes u otras librerías: suelen incluir versiones optimizadas en C/C++.


Usos: 

Casos cotidianos (n ≤ 10⁸): Trial Division mejorado (6k ± 1) o criba si haces muchos tests.

Rangos amplios: Criba de Eratóstenes (o segmentada).

Enteros muy grandes (≥ 64 bits): Miller–Rabin probabilístico o biblioteca como SymPy.
    

Soluciones sencillas hasta tests profesionalmente usados en criptografía.



2. Compuesto

```
def es_compuesto(n):
    if n <= 3:
        return False
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            return True
    return False


```

Comprueba si un entero n es compuesto

Divisor propio (distinto de 1 y de sí mismo).


1. Filtro inicial: n≤3

```
if n <= 3:
    return False

```

Números menores o iguales a 3 (0, 1, 2 y 3) no se consideran compuestos

0 y 1: ni primos ni compuestos.

2 y 3: son primos.

Por tanto, ante cualquier n ≤ 3 devolvemos inmediatamente False.


2. Bucle de búsqueda de divisor hasta √n

```
for i in range(2, int(n**0.5) + 1):

```

Como en primalidad, no hace falta buscar más allá de la raíz cuadrada de n.

Cualquier divisor mayor que √n iría acompañado de otro menor que √n

Sí que bastan los candidatos en `[2, √n]`.


3. Detección de divisor

```
if n % i == 0:
    return True
```

Probamos si i divide exactamente a n.

Si n % i == 0, hemos encontrado un divisor propio

Dado que `2 ≤ i ≤  √n <n`

Implica que n no es primo, sino compuesto, así que devolvemos True de inmediato.


4. Conclusión: no se halló divisor

```
return False
```

Si el bucle termina sin desencadenar ningún return True, significa que no existe ningún divisor propio en el rango probado

En ese caso, n no es compuesto (es decir, es primo), por lo que devolvemos False.

Ej: 

```
es_compuesto(1)   # False (ni primo ni compuesto)
es_compuesto(2)   # False (primo)
es_compuesto(3)   # False (primo)
es_compuesto(4)   # True  (4 % 2 == 0)
es_compuesto(9)   # True  (9 % 3 == 0)
es_compuesto(17)  # False (primo)
es_compuesto(18)  # True  (18 % 2 == 0)

```


Complejidad: 

Recorre hasta n, con complejidad O(√n)

Eficiente para valores moderados de n


### Relación primo compuesto

Primo o compuesto (o ninguno de los dos, para valores ≤ 1)

1. 

```
def tipo_numero(n):
    """
    Clasifica n como:
      - 'primo'                 : si es número primo (>1, sin divisores propios)
      - 'compuesto'             : si es >1 y tiene al menos un divisor propio
      - 'ni primo ni compuesto' : para n ≤ 1
    """
    # 1) Filtrado rápido de los casos ≤ 1
    if n <= 1:
        return 'ni primo ni compuesto'

    # 2) Búsqueda de divisor propio hasta √n
    #    Si encontramos uno, es compuesto.
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return 'compuesto'

    # 3) Si no hallamos ningún divisor, es primo
    return 'primo'

```

2. Variante optimizada (“6k ± 1”)

Si quieres ahorrar alrededor de un ⅔ de las comprobaciones

```
def tipo_numero_6k1(n):
    if n <= 1:
        return 'ni primo ni compuesto'
    if n <= 3:
        return 'primo'
    if n % 2 == 0 or n % 3 == 0:
        return 'compuesto'
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return 'compuesto'
        i += 6
    return 'primo'

```


### Divisores y trial división 

Para divisores de un número n haciendo “trial division” (prueba de todos los posibles divisores), no hace falta llegar hasta n-1.

Basta con llegar hasta √n
 

Parejas de divisores: 

Si d divide exactamente a n

```
d|n ⟹ n = d × q
```

entonces q = n/d también es un divisor de n.

Por tanto, los divisores de nn se emparejan:

```
(d,q)
```

1. Si d < √n, entonces necesariamente q > √n

Porque el producto d⋅q=n debe “alcan­zar” a n.


2. Si d > √n, entonces su pareja q = n/d será √n


Significa que, para cada divisor mayor que √n 

ya habrás comprobado su contraparte menor que √n 

Una búsqueda más allá de la raíz no descubriría divisores nuevos.


Ej: 

n = 100

√100 = 10. 

Los divisores de 100 son:

| Divisor   d | Pareja q = 100/d   |
| ----------: | -----------------: |
|           1 |                100 |
|           2 |                 50 |
|           4 |                 25 |
|           5 |                 20 |
|          10 |                 10 |
|          20 |                  5 |
|          25 |                  4 |
|          50 |                  2 |
|         100 |                  1 |

Una vez pruebas d=2,4,5,10 (todos ≤ 10)

has manejado simultáneamente los divisores mayores (50,25,20,10)

No hace falta probar 20, 25, 50 ni 100.


Complejidad:

Probar todos los d desde 2 hasta n−1 es O(n).

Probar sólo hasta √n es O(√n) mucho más eficiente cuando nn crece.

Sólo iteramos hasta int(n**0.5) + 1.



## 4.  Suma recursiva 

1. Fórmula

```
def suma_formula(n):
    return n * (n + 1) // 2
```

2. Recursiva

```
def suma_recursiva(n):
    if n == 1:  # Paso base
        return 1
    return n + suma_recursiva(n - 1)  # Paso inductivo

```



## 5. Consecutivos 

1. 

Lista de k números consecutivos a partir de n

```
def numeros_consecutivos(n, k):
    return list(range(n, n + k))

print(numeros_consecutivos(5, 4))  # [5, 6, 7, 8]

```

4 consecutivos (k) a partir de 5 (n). 


2. Comprobar si una lista contiene números consecutivos:

```
def son_consecutivos(lista):
    lista_ordenada = sorted(lista)
    return all(lista_ordenada[i+1] - lista_ordenada[i] == 1 for i in range(len(lista_ordenada)-1))

print(son_consecutivos([3, 2, 4]))  # True
print(son_consecutivos([3, 5, 4]))  # False

```



## 6. Ascendente, descendente

1. Verificar si una lista está en orden ascendente o descendente:

```
def es_ascendente(lista):
    return all(lista[i] <= lista[i+1] for i in range(len(lista)-1))

def es_descendente(lista):
    return all(lista[i] >= lista[i+1] for i in range(len(lista)-1))

print(es_ascendente([1, 2, 3, 3, 5]))  # True
print(es_descendente([5, 4, 4, 1]))    # True
``` 


2. Ordenar una lista:

```
numeros = [3, 1, 4, 2]
print(sorted(numeros))       # [1, 2, 3, 4] (ascendente)
print(sorted(numeros, reverse=True))  # [4, 3, 2, 1] (descendente)

```



## 7. Valor absoluto (e.g. abs(x))



## 8. Residuo / Resto / Módulo (%)



## 9. Redondeo (floor, ceil, round)



## 10. Raíz cuadrada

La raíz cuadrada de un número real no negativo x es otro número real no negativo y tal que:

```
y^2 = x
```

Denotado como:

```
√x = y
```

Ej: 

√9 = 3 porque 3^2=9

√0 = 0

√2≈1.4142… (irracional)


Solo se considera la raíz cuadrada positiva como valor principal

La raíz cuadrada negativa se puede considerar en el conjunto de los números complejos



## 11. Potencia / exponente (x^n)

Representa multiplicar un número por sí mismo varias veces.

```
a^n = a x a x ... x (n veces)
```

a es la base

n es el exponente o índice

a^n "a elevado a la n"



## 12. Máximo Común Divisor (MCD o GCD)

De dos o más números enteros es el mayor número entero positivo que divide a todos ellos sin dejar residuo.

```
mcd(a,b) = max{d ∈ Z+ |d|a y d|b}
```

Ej:

```
mcd(12, 18) = 6
```

Los divisores comunes son {1, 2, 3, 6}, y el más grande es 6.


1. Algoritmo de Euclides (muy eficiente):

```
def mcd(a, b):
    while b:
        a, b = b, a % b
    return abs(a)

```

Out:

mcd(48, 18) = mcd(18, 12) = mcd(12, 6) = mcd(6, 0) = 6

(Sale en b 0 -> False; mientras a tenga resto)


Dado dos enteros a y b, encontrar el mayor número entero positivo que divide a ambos sin dejar resto

```
mcd(a,b)
```

Euclides: El MCD de dos números no cambia si el número mayor se reemplaza por el resto de la división entre ambos.

```
mcd(a,b) = mcd(b, a mod b)
```

Como siempre el módulo a mod bamodb va disminuyendo, eventualmente llegará a 0. 

En ese punto, el otro número es el MCD.


1. `while b`:

Se repite mientras b sea distinto de 0.

Si b == 0, entonces a es el MCD.


2. `a, b = b, a % b`, asignación múltiple:

el nuevo a se convierte en el valor actual de b,

el nuevo b se convierte en el resto de dividir a entre b.

La clave del altoritmo: reemplaza (a, b) por (b, a % b) en cada iteración.


3. `return abs(a)`:

##### Cuando b llega a 0, devolvemos a, que contiene el MCD.

Usamos abs(a) porque el MCD debe ser positivo, aunque los números originales fueran negativos.


Ej: mcd(48, 18)

| Iteración | `a` | `b` | `a % b` |
| --------- | --- | --- | ------- |
| inicial   | 48  | 18  | 12      |
| 1         | 18  | 12  | 6       |
| 2         | 12  | 6   | 0       |
| 3 (fin)   | 6   | 0   |         |


Complejidad:

Muy eficiente: complejidad logarítmica en el peor caso.

Notación: O(log min(a,b))


Alter: 

Sin retornar abs(a)

```
def mcd(a, b):
    while b:
        a, b = b, a % b
    return a

```

Podría devolver un MCD negativo si uno o ambos valores de entrada son negativos.

Ej: 

1. Ambos positivos

```
mcd(48, 18)  # devuelve 6
```

Con o sin abs(a) es 6.


2. Un valor negativo

```
mcd(-48, 18)  # devuelve -6 sin abs(), 6 con abs()
```

Sin abs: retorna -6

Con abs: retorna 6


3. Ambos negativos

```
mcd(-48, -18)  # sin abs() devuelve -6
```


##### El máximo común divisor (MCD) se define como un número entero positivo

```
MCD(a,b)≥0
```

Devolver -6 en lugar de 6 es técnicamente incorrecto, aunque el valor absoluto sea correcto.

Evitar sorpresas en otros cálculos (como fracciones irreducibles), es mejor devolver abs(a).


Extendido:

Implementa el algoritmo extendido de Euclides

Además del mcd, encuentra coeficientes enteros x e y:

```
mcd(a,b) = d = ax + by
```

Identidad de Bézout


```
def euclides_extendido(a, b):
    if b == 0:
        return a, 1, 0
    else:
        d, x1, y1 = euclides_extendido(b, a % b)
        x = y1
        y = x1 - (a // b) * y1
        return d, x, y

```

Ej:

Hallar MCD de 240 y 46 y los coeficientes x, y:

```
d, x, y = euclides_extendido(240, 46)
print(f"mcd = {d}, x = {x}, y = {y}")

```

Out:

```
mcd = 2, x = -9, y = 47

```

Verificación de propiedad:

```
240 * (-9) + 46 * 47 = 2
```

Comprobado: se cumple la identidad de Bézout


Dado dos enteros a y b, encontrar una tupla de enteros (d,x,y)(d,x,y) tal que:

```
d = gcd(a,b) = ax + by
```

Muy útil para:

1. encontrar inversos modulares (clave en criptografía),

2. resolver ecuaciones diofánticas lineales,

3. trabajar con teoría de números modular.


##### La idea es usar recursión para llegar a un caso base, y luego reconstruir los coeficientes x y y hacia atrás

1. Caso base: 

```
def euclides_extendido(a, b):
    if b == 0:
        return a, 1, 0
```

Si b == 0, entonces gcd(a, b) = a, y la identidad de Bézout es:

```
a*1 + 0*0 = a
```

Así que devolvemos: 

```
a, 1, 0
```


2. Paso recursivo: 

```
    else:
        d, x1, y1 = euclides_extendido(b, a % b)
```

Llamamos recursivamente al mismo algoritmo con (b, a % b), lo que es el mismo paso que en el algoritmo de Euclides simple.

Nos devuelve:

1. d: el MCD de b y a % b

2. x1, y1: tales que

```
d = b_x1 + (a mod b)*y_1
```


3. Reescribimos la identidad: 

```
        x = y1
        y = x1 - (a // b) * y1

```

Queremos expresar `d = ax + by` usando la identidad anterior. 

Recordá que:

```
a mod b = a - [a/b] * b
```

Entonces: 

```
d = bx_1 + (a - [a/b] * b)*y_1 = ay_1 + b*(x_1 - [a/b]*y_1)
```

Así que: 

1. x = y1

2. y = x_1 - [a/b]*y_1


4. Devuelve la terna que satisface:

```
d = ax+by
```

```
        return d, x, y
```


Ej: euclides_extendido(30, 12)

Llamadas recursivas: 

1. euclides_extendido(30, 12)

2. euclides_extendido(12, 6)

3. euclides_extendido(6, 0) → devuelve (6, 1, 0)

Retroceso:

Paso 3:

 d = 6, x1 = 1, y1 = 0
    
    
Paso 2: 

1. x = y1 = 0

2. y = x1 - (12 // 6) * y1 = 1 - 2*0 = 1 → devuelve (6, 0, 1)


Paso 1:

1. x = y1 = 1

2. y = x1 - (30 // 12) * y1 = 0 - 2*1 = -2 → devuelve (6, 1, -2)


Verificación:

6 = 30(1)+12(−2)= 30−24 = 6


Rs: 

usa recursión para calcular el MCD de a y b,

reconstruye los coeficientes de Bézout hacia atrás,

devuelve una terna (d, x, y) tal que d=ax+by.


2. Variación para listas:

```
from math import gcd
from functools import reduce

def mcd_lista(nums):
    return reduce(gcd, nums)

mcd_lista([24, 36, 60])  # Resultado: 12

```


3. Inverso modular

Cuando gcd(a, m) = 1, el coeficiente x de la ecuación ax + my = 1 es el inverso de a módulo m:

```
def inverso_modular(a, m):
    g, x, y = euclides_extendido(a, m)
    if g != 1:
        return None  # No hay inverso
    else:
        return x % m

```

```
inverso_modular(3, 7)  # ➜ 5, porque (3 × 5) % 7 = 1

```



## 13. Mínimo Común Múltiplo (MCM o LCM)

Es el menor número positivo que es múltiplo común de todos ellos de dos o más números.

Notación:

```
mcm(a, b) → menor número divisible por a y b al mismo tiempo.
```

Ej:

```
mcm(4, 6) = 12 → porque 12 es el menor número que es múltiplo tanto de 4 como de 6.
```

4 = 2*2 -> 2^2

6 = 2*3 


```
from math import gcd

def lcm(a, b):
    return abs(a * b) // gcd(a, b)

print(lcm(4, 6))  # Output: 12

```

El mcm de dos números enteros a y b es el menor número positivo que es múltiplo de ambos.

Ej: mcm(4, 6)

1. Los múltiplos de 4: 4, 8, 12, 16...

2. Múltiplos de 6: 6, 12, 18, 24...

El menor común múltiplo es 12.


Fórmula clásica:

```
mcm(a,b) = |a*b| / mcm(a,b)
```

Dónde: 

1. abs(a * b) asegura que el resultado sea positivo,

2. gcd(a, b) es el máximo común divisor, ya sea calculado con el algoritmo de Euclides o con math.gcd.

```
def lcm(a, b):
    return abs(a * b) // gcd(a, b)

```

a * b: multiplica los dos números.

abs(...): asegura que el producto sea positivo, ya que el MCM siempre lo es.

// gcd(a, b): divide ese producto por el MCD, usando división entera (sin decimales).


Ej: lcm(4, 6)

1. a = 4, b = 6

2. a * b = 24

3. gcd(4, 6) = 2

5. lcm = 24 // 2 = 12


Fórmula: 

```
mcd(a,b) ⋅ mcm(a,b) = ∣a⋅b∣
```

Reordenando: 

```
mcm(a,b) = |a*b| / mcd(a,b)
```


Ej con negativos:

```
lcm(-8, 12)  # Resultado: 24
```

1. abs(-8 * 12) = 96

2. gcd(-8, 12) = 4 (porque gcd ignora el signo)

3. lcm = 96 // 4 = 24


Rs: 

La función lcm(a, b):

1. calcula el mínimo común múltiplo de a y b de forma eficiente

2. es robusta para valores negativos

3. se basa en una propiedad matemática fundamental: `mcd⋅mcm=∣a⋅b∣`



## 14. Contar dígitos, suma de dígitos

1. Contar digitos: 

Consiste en determinar cuántos dígitos tiene un número en una base dada (por lo general base 10).

Ej: 

7 → 1 dígito

47 → 2 dígitos

1035 → 4 dígitos


1. math floor, math log

```
import math

def contar_digitos(n):
    if n == 0:
        return 1
    return math.floor(math.log10(abs(n))) + 1

```

Devuelve cuántos dígitos tiene un número entero n, sin convertirlo a string.

contar_digitos(0) → 1

contar_digitos(7) → 1

contar_digitos(123) → 3

contar_digitos(-12345) → 5


La clave está en esta propiedad de los logaritmos decimales:

```
Cantidad de dıˊgitos de un nuˊmero positivo n:

⌊log10​(n)⌋+1

```

Ej: 

log10​(123)≈2.0899 → ⌊2.0899⌋=2⌊2.0899⌋=2 → 2+1= 3 dígitos

log10​(1000)=3 → 3+1= 4 dígitos

Esto no funciona para n = 0 ni para negativos directamente (por eso el abs() y el caso especial).


1. `import math`

Contiene funciones matemáticas como log10 y floor.


2. Caso especial:

```
def contar_digitos(n):
    if n == 0:
        return 1
```

log10(0) está indefinido (→ error de dominio), así que se retorna manualmente 1, porque 0 tiene 1 dígito.


3. Retorno:

```
    return math.floor(math.log10(abs(n))) + 1
```

abs(n): convierte a positivo si el número es negativo, ya que log10 solo acepta positivos.

math.log10(...): calcula el logaritmo base 10 del número.

math.floor(...): redondea hacia abajo (parte entera).

+1: ajusta para obtener la cantidad total de dígitos.


Ej: 

Para n = -4567:

abs(-4567) = 4567

log10(4567) ≈ 3.659

floor(3.659) = 3

3+1 = 4 → tiene 4 dígitos


Es eficiente, especialmente para números grandes.

Usa una propiedad matemática precisa.

Es segura gracias a abs(n) y el caso especial n == 0.


Alternativa clásica (pero menos eficiente):

También se puede contar dígitos con un bucle:

```
def contar_digitos(n):
    n = abs(n)
    if n == 0:
        return 1
    count = 0
    while n:
        n //= 10
        count += 1
    return count

```
Más lento para números muy grandes.




2. len, str, abs

```
def contar_digitos(n):
    return len(str(abs(n)))

```


### Alternativas

Dependen del contexto: precisión, rendimiento, legibilidad y restricciones del entorno.


1. Log decimal (log10)

```
import math

def contar_digitos_log(n):
    if n == 0:
        return 1
    return math.floor(math.log10(abs(n))) + 1

```

Muy rápido para números grandes.

No requiere convertir a string ni usar bucles

Usa math.log10: requiere librería matemática.

Puede tener errores de precisión flotante en casos extremos (e.g., potencias de 10 muy grandes)


Uso: 

En código de alto rendimiento o cuando trabajás con números muy grandes


2. Usar división entera (//) en bucle

```
def contar_digitos_div(n):
    n = abs(n)
    if n == 0:
        return 1
    count = 0
    while n:
        n //= 10
        count += 1
    return count
```

Preciso y no depende de operaciones de punto flotante.

No necesita librerías externas.

Funciona bien en cualquier base si se adapta.


Más lento para números grandes.

Menos elegante que otras opciones


Uso: 

Cuando querés precisión total sin depender de math o si trabajás en un entorno limitado


3. Convertir a string

```
def contar_digitos_str(n):
    return len(str(abs(n)))
```

Extremadamente simple y legible.

Precisa para cualquier tamaño de número.

No depende de math.


Convierte a cadena (menos eficiente para grandes volúmenes o rendimiento crítico).

Puede estar prohibido en entrevistas o en entornos de bajo nivel.


str() para claridad

log10 para rendimiento

división entera para evitar dependencias o posibles errores flotantes



2. Suma dígitos

Resultado de sumar todos los dígitos individuales del número.

Ej: 

123⇒1+2+3 = 6

409⇒4+0+9 = 13


1. sum(), int(), for, str() y abs()

```
def suma_digitos(n):
    return sum(int(d) for d in str(abs(n)))

```

Calcula la suma de los dígitos de un número entero n.

suma_digitos(1234)   → 1 + 2 + 3 + 4 = 10  
suma_digitos(-567)   → 5 + 6 + 7 = 18
suma_digitos(0)      → 0

1. `abs(n)`:

Convierte el número a positivo (porque no importa si es negativo, los dígitos son los mismos).


2. `str(abs(n))`:

Convierte el número en una cadena de caracteres.

Ej: 1234 → "1234"


3. `for d in str(abs(n))`:

Itera sobre cada carácter de esa cadena.

Ej: "1234" → '1', '2', '3', '4'


4. `int(d)`

Convierte cada carácter (que representa un dígito) de vuelta a número.

Ej: '1' → 1, '2' → 2, etc.


5. `sum(...)`

Suma todos esos dígitos.

Ej: sum([1, 2, 3, 4]) → 10


Simple, legible, eficaz.

Funciona correctamente para cualquier número entero, positivo o negativo.

No requiere librerías externas


Alternativa: División entera

Evitar convertir a string (por eficiencia o por restricciones), podés usar divisiones:

```
def suma_digitos(n):
    n = abs(n)
    suma = 0
    while n:
        suma += n % 10
        n //= 10
    return suma
```

1. `n % 10`: extrae el último dígito.

2. `n //= 10`: quita ese dígito.

3. Se repite hasta que n sea 0.

Eficiente para uso intensivo, pero menos legible.


Ej: -438

```
str(abs(-438)) → "438"
Itera sobre: '4', '3', '8'
Convierte a números: 4, 3, 8
Suma: 4 + 3 + 8 = **15**

```



2. Recursiva:

```
def suma_digitos(n):
    if n < 10:
        return n
    return (n % 10) + suma_digitos(n // 10)

```


3. Conteo y suma de dígitos 

Ej: Contar cuántos números de 3 dígitos tienen suma de dígitos igual a 15.

```
count = 0
for i in range(100, 1000):
    if suma_digitos(i) == 15:
        count += 1
print(count)

```



## 15. Palíndromo

Es un número que se lee igual de izquierda a derecha que de derecha a izquierda.

Ej: 

121

1331

77

12321


Propiedad destacada: Todo número palíndromo es igual a su reverso:

```
n=reverse(n)
```


1. 

```
def es_palindromo(n):
    s = str(n)
    return s == s[::-1]

```


2. Lista de todos los palíndromos de 3 cifras:

```
palindromos = []
for i in range(100, 1000):
    if es_palindromo(i):
        palindromos.append(i)
```


3. Palíndromos binarios: se leen igual en base 2.

Ej: 9 = 1001_2​

```
def es_palindromo_bin(n):
    b = bin(n)[2:]
    return b == b[::-1]

```
 
Palíndromo: número (o cadena) que se lee igual de izquierda a derecha que de derecha a izquierda.

palíndromos:

121

1331

12321

No palíndromos:

123

120


1. `str(n)`:

Convierte el número a una cadena de texto para poder compararlo como secuencia.

Ej: 121 → "121"


2. `s[::-1]`:

Esto es una técnica de slicing (rebanado) en Python que invierte la cadena.

"121" → "121"
"123" → "321"

`s[start:stop:step]`

`s[::-1]`: desde el final hasta el principio, de uno en uno (reverse


3. `return s == s[::-1]`:

##### Compara la cadena original con su versión invertida.

Si son iguales, el número es palíndromo → devuelve True.


Ej: 

```
es_palindromo(121)     # True → "121" == "121"
es_palindromo(12321)   # True → "12321" == "12321"
es_palindromo(123)     # False → "123" != "321"
es_palindromo(-121)    # False → "-121" != "121-"
```

Los números negativos nunca serán palíndromos en esta versión porque el - aparece al principio.


### Alternativas 

```
def es_palindromo(n):
    if n < 0:
        return False
    original = n
    invertido = 0
    while n > 0:
        invertido = invertido * 10 + n % 10
        n //= 10
    return original == invertido

```

##### Invierte el número “por cálculo” en lugar de usar cadenas


1. Descartar negativos

```
if n < 0:
    return False

```

Se considera que los números negativos no son palíndromos (por el signo “-”).


2. Guardar el valor original

```
original = n

```

Antes de modificar n, almacenamos su valor para poder compararlo al final.


3. Inicializar el inverso

```
invertido = 0

```

Aquí iremos construyendo el número invertido dígito a dígito.


4. Bucle de inversión

```
while n > 0:
    invertido = invertido * 10 + n % 10
    n //= 10

```

`n % 10` extrae el último dígito de n.

`invertido * 10 + (ese dígito)` desplaza” el inverso una posición hacia la izquierda y añade el nuevo dígito al final.

`n //= 10` elimina el último dígito de n, reduciéndolo en un orden de magnitud.


Así, si n arranca siendo 1234:

Iteración 1: 

```
dígito = 4 → invertido = 0*10 + 4 = 4, n = 123
```

Iteración 2: 

```
dígito = 3 → invertido = 4*10 + 3 = 43, n = 12
```

Iteración 3: 

```
dígito = 2 → invertido = 43*10 + 2 = 432,n = 1
```

Iteración 4: 

```
dígito = 1 → invertido = 432*10 + 1 = 4321,n = 0
```

Bucle termina porque n ya no es > 0.


5. Comparar original e invertido

```
return original == invertido
```

Si al invertirlo obtuvimos exactamente el mismo número, entonces es palíndromo.


Rs: 

Se descartan negativos.

Se construye el número invertido un dígito a la vez usando operaciones aritméticas.

Al comparar el original con el invertido, concluimos si es palíndromo sin usar str().

Complejidad: O(log⁡10 n) divisiones y multiplicaciones, muy eficiente


## 16. Capicúa

Capicúa a veces se restringe a números enteros en base 10


1. 

```
def es_capicua(n):
    return str(n) == str(n)[::-1]

```

2. Capicúas de 2 cifras:

```
for i in range(10, 100):
    if es_capicua(i):
        print(i, end=" ")

```


Capicúa entero base 10:

Ej: 

121, 3443, 7, 1331 → son capicúas enteros (+, -) en base 10

12.21, -121, 0.010 → no son capicúas (porque tienen punto decimal o signo)


Cambio de base:

Un número puede no ser capicúa en base 10, pero sí serlo en otra base.

Ej: 

El número 9 en base 10 es 1001 en base 2 → ¡eso es capicúa en binario!

El número 121 en base 10 no es capicúa en base 8:

121₁₀ = 171₈, que no es simétrico.


Por eso decimos que la definición tradicional de capicúa depende de la base, y generalmente se refiere solo a base 10.


#### Código: 

1. 

```
def es_capicua(n):
    """
    Verifica si un número entero n es capicúa en base 10.
    """
    s = str(n)
    return s == s[::-1]

# Ejemplos
print(es_capicua(121))   # True
print(es_capicua(1331))  # True
print(es_capicua(123))   # False
print(es_capicua(9))     # True

```


2. Detectar si un número es capicúa en cualquier base

Ej: verifica si un número es capicúa en cualquier base (por ejemplo, base 2):

```
def a_base(n, base):
    """
    Convierte un número n a una representación en base arbitraria.
    Devuelve la cadena con los dígitos.
    """
    if n == 0:
        return "0"
    digits = []
    while n > 0:
        digits.append(str(n % base))
        n //= base
    return ''.join(reversed(digits))

def es_capicua_base(n, base):
    """
    Verifica si el número n es capicúa en la base dada.
    """
    s = a_base(n, base)
    return s == s[::-1]

# Ejemplos
print(es_capicua_base(121, 10))  # True
print(es_capicua_base(9, 2))     # True (9 en binario = 1001)
print(es_capicua_base(10, 2))    # False (10 en binario = 1010)

```


## 17. Media/promedio

Es una medida de tendencia central que representa el valor central típico de un conjunto de datos.

Fórmula:

```
Media = suma de valores/cantidad de valores
```

Para una lista de números x_1,x_2,...,x_n:

```
Media = x_1,x_2,...,x_n / n
```


1. sum() y len()

```
def media(valores):
    if not valores:
        return 0  # o lanzar error si se prefiere
    return sum(valores) / len(valores)

# Ejemplo:
datos = [10, 20, 30, 40]
print(media(datos))  # 25.0

```


2. Librerías:

```
import statistics

datos = [10, 20, 30, 40]
prom = statistics.mean(datos)
print(prom)  # 25.0

```


