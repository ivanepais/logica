# Mat

##### Definición, propiedades y utilidad

# N1 

Fundamentales y muy comunes

## Números naturales, enteros, racionales


### Números naturales

Son los números que usamos para contar objetos.

Dos formas de definirlos:

1. Sin el 0: Tradicional en matemáticas puras

N = {1. 2, 3, 4, 5...}


2. Con el 0: más común en informática y teoría de conjuntos

N_0 = {0, 1, 2, 3, 4...}


Propiedades:

| Propiedad                         | Descripción                                                |
| --------------------------------- | -----------------------------------------------------------|
| **Cerrados bajo suma y producto** | Si a, b ∈ N, entonces a + b ∈ N, axb ∈ N					 |
| **No cerrados bajo resta**        | 3 - 5  no ∈/ N                                 			 |
| **Bien ordenados**                | Todo subconjunto no vacío de N tiene un mínimo  			 |
| **Inducción**                     | Soportan la técnica de **inducción matemática**            |
| **Discretos**                     | No hay infinitos números entre dos naturales consecutivos  |
| **Infinitos**                     | No tienen límite superior                                  |


### Subconjuntos importantes

| Subconjunto      | Ejemplo                          | Descripción                               |
| ---------------- | -------------------------------- | ----------------------------------------- |
| Pares            | {0, 2, 4,...}             		  | Múltiplos de 2                            |
| Impares          | {1, 3, 5,...}             		  | No divisibles por 2                       |
| Múltiplos de $n$ | {0, n, 2n,...}            		  | Muy usados en divisibilidad               |
| Números primos   | {2, 3, 5, 7, 11,...}       	  | Solo divisibles por 1 y ellos mismos      |
| Cuadrados        | {0, 1, 4, 9, 16,...}      	      | Potencias n^2                             |
| Fibonacci        | {0, 1, 1, 2, 3, 5, 8,...} 		  | Cada número es suma de los dos anteriores |


#### Útilidad de los Naturales en programación

| Aplicación común                       | Uso                                          |
| -------------------------------------- | -------------------------------------------- |
| **Conteo**                             | `range(n)` → genera naturales del 0 al n-1   |
| **Índices**                            | Acceso a arrays/lists: `array[i]`            |
| **Iteración**                          | `for i in range(...)`                        |
| **División entera**                    | `a // b` o `a % b` para residuos y múltiplos |
| **Problemas de teoría de números**     | Criba de Eratóstenes, primos, factorización  |
| **Algoritmos recursivos / inductivos** | Naturales son la base de la recursión        |


#### Ejemplos de código

1. 

```
# Sumar los primeros 100 números naturales
n = 100
suma = sum(range(1, n + 1))  # → 5050
```

##### range(1, n + 1): Inicia en 1 y tiene tope en 100


2. 

```
# Verificar si un número es natural (con 0 incluido)
def es_natural(x):
    return isinstance(x, int) and x >= 0
```


### Fórmulas útiles

1. Suma de los primeros n naturales:

```
n
∑ k = n(n+1)/2
k=1
``` 

2. Suma de los primeros n cuadrados

```
n
∑ k^2 = n(n+1)(2n+1)/6
k=1
```


### Inducción

Es una técnica para probar que una afirmación es verdadera para todos los números naturales (o a partir de cierto número)

Es un método de demostración que se basa en el hecho de que los números naturales están bien ordenados y forman una secuencia infinita discreta: 0,1,2,3,…0,1,2,3,…

Se usa para probar proposiciones del tipo:

```
“Para todo n ∈ N, se cumple que P(n)”.
```


Etapas del método inductivo:

Consta de dos pasos:

1. Paso base:

Verificás que la afirmación sea cierta para el primer número (por lo general n=0n=0 o n=1n=1).

```
Ejemplo: Probar que P(1) es verdadera.
```


2. Paso inductivo

Asumís que la afirmación es cierta para un número arbitrario n=kn=k (esto se llama la hipótesis inductiva) y demostrás que también debe ser cierta para n=k+1n=k+1.

```
En símbolos:
Si P(k)P(k) es cierta ⇒ entonces P(k+1) también lo es.
```

Si ambos pasos se cumplen, entonces por el principio de inducción, la afirmación es verdadera para todos los números naturales.


### Aplicación/Funcionamiento

Funciona porque los naturales están bien ordenados y encadenados: si es verdad para uno, y eso implica que es verdad para el siguiente, entonces se va encadenando infinitamente hacia adelante


### Ejemplo de inducción

Probar que:

```
n
∑ i = n(n+1)/2
i=1
```

1. Paso base (n=1):

```
1
∑ i = 1 = 1(1+1)/2
i=1
```

2. Paso inductivo:

Supongamos qeu se cumple para n = k:

```
k
∑ i = k(k+1)/2
i=1
```

(Hipótesis inductiva)

Queremos probar que: 

```
k+1
∑ i = (k+1)(k+2)/2
i=1
```

Desarrollamos el lado izquierdo

```
k+1       k
∑ i =  (  ∑ i ) + (k+1) = k(k+1)/2 + (k+1) = k(k+1)+2(k+1)/2 = (k+1)(k+2)/2
i=1      i=1
```

##### Conclusión: Por inducción, la fórmula es cierta para todo n ∈ N.


Inducción en programación: 

Es la base teórica de la recursión

Se usa para probar correctitud de algoritmos recursivos

Aparece en muchos problemas de división y conquista, matemática discreta, combinatoria, DP

Permite construir soluciones paso a paso basadas en casos previos


#### Ejemplo de inducción en python

Probar que la suma de los primeros n naturales es:

```
suma(n) = n(n+1)/2
```

1. Versión con recursión (imitando la inducción):

```
def suma_recursiva(n):
    if n == 1:  # Paso base
        return 1
    return n + suma_recursiva(n - 1)  # Paso inductivo

```

Refleja exactamente la estructura de la inducción:

1. Paso base: suma(1)=1

2. Paso inductivo: suma(k+1)=(k+1)+suma(k)
    

2. Validación contra la fórmula:

```
def suma_formula(n):
    return n * (n + 1) // 2

```

3. Comprobación automática (para n = 1 hasta 20):

```
for n in range(1, 21):
    assert suma_recursiva(n) == suma_formula(n), f"Falla en n={n}"
print("✅ Ambas funciones coinciden en todos los casos.")

```

En este ejemplo, suma_recursiva(n) usa inducción de forma estructural, como lo harías en una demostración matemática.

La función se llama a sí misma con n - 1, y usa un caso base para detenerse.

La fórmula es una solución cerrada, más eficiente, pero ambas coinciden


Demostrar con programación que una propiedad se cumple

¿Una propiedad se cumple para todos los naturales hasta cierto límite?

```
def propiedad(n):
    return sum(range(1, n + 1)) == n * (n + 1) // 2

for n in range(1, 1000):
    assert propiedad(n), f"Error en n={n}"
print("✅ La propiedad se cumple para todos los n de 1 a 999.")

```

Esto es inducción experimental. Aunque no es una prueba formal, sirve para verificar regularidades.


### Subconjunto de multiplos {0, 2n, 3n...}: Generación de los terminos del subconjunto

##### kx0, kxn -> 0: k toma un natural -> 2xn

##### Representa el doble, el triple, el cuadruple de un número n, etc. 

Representa todos los múltiplos naturales de un número fijo n ∈ N.


Se define: 

```
Múltiplos de n = {k⋅n ∣ k∈N}
```

Es decir:

0 = 0xn
n = 1xn
2n = 2xn
3n = 3xn


#### Comienzo en 0:

Porque 0xn = 0, y en matemáticas se considera que 0 es multiplo de cualquier número.

Ej: 0 es divisible por 3, por 7, por 100...

Tiene sentido en la definición

```
a es múltiplo de b ⟺ ∃k ∈ Z tal que a=k⋅b
```

Para a=0, siempre podés tomar k=0 y se cumple.


#### Qué representa {0, n, 2n, 3n,...}: obtención de multiplos, n es la variable

Es un subconjunto aritmético de los números naturales, con paso fijo nn:

Si n=1 → obtenés todos los naturales: {0,1,2,3,… }

Si n=2 → obtenés los pares: {0,2,4,6,… }

Si n=3 → múltiplos de 3: {0,3,6,9,… }

etc.

##### Cada término se construye multiplicando n por un natural.

```
n = 5
multiplos = [k * n for k in range(10)]
print(multiplos)
# → [0, 5, 10, 15, 20, 25, 30, 35, 40, 45]
```

1. Iterar en pasos fijos

```
for i in range(0, 101, 5):  # múltiplos de 5
    print(i)

```


2. Filtrar múltiplos

```
def es_multiplo(a, b):
    return a % b == 0

```


#### Divisibilidad, periodicidad, y segmentación:

Sirve para agrupar en bloques (por ejemplo: segmentos de tamaño fijo).

Para saber si un número pertenece al conjunto de múltiplos: x % n == 0.


Rs:

| Elemento                  | Significado                                                       |
| ------------------------- | ----------------------------------------------------------------- |
| {0, n, 2n, 3n,...}$       | Múltiplos de n en los naturales                                   |
| Empieza en 0              | Porque 0 es múltiplo de cualquier número                          |
| Paso n                    | Porque cada término se genera con kxn, keN                       |
| Muy usado                 | Para divisibilidad, iteraciones por paso fijo, filtros, etc.      |

    


## 2. Par / Impar



## 3. Positivo / Negativo



## 4. Múltiplo / Divisor



## 5. Número primo / compuesto



## 6. Consecutivo (e.g. [1, 2, 3] son consecutivos)

## 7. Orden ascendente / descendente

## 8. Valor absoluto (e.g. abs(x))

## 9. Residuo / Resto / Módulo (%)

## 10. Redondeo (floor, ceil, round)

## 11. Raíz cuadrada

## 12. Potencia / exponente (x^n)

## 13. Máximo Común Divisor (MCD o GCD)

## 14. Mínimo Común Múltiplo (MCM o LCM)

## 15. Factorial (n!)

## 16. Contar dígitos, suma de dígitos

## 17. Número palíndromo

## 18. Número capicúa (se lee igual al revés)

## 19. Media (promedio)

## 20. Moda (valor que más se repite)

## 21. Mediana



# N2 

Más estructurados o usados en lógica compleja

Raíz n-ésima

Notación científica

Sistema binario / decimal / hexadecimal

Conversión entre bases

Divisibilidad (reglas de divisibilidad)

Números perfectos / abundantes / deficientes

Números armónicos

Primos gemelos, primos de Mersenne, etc.

Prueba de primalidad eficiente (e.g. hasta √n)

Conteo de divisores de un número

Suma de divisores

Números amigables

Aritmética modular (mod m)

Propiedades del módulo (e.g. (a + b) % m = ((a % m) + (b % m)) % m)

Congruencias

Números triangulares / cuadrados / pentagonales

Sucesiones (e.g. Fibonacci)

Teorema de Fermat pequeño

Criba de Eratóstenes (para generar primos)

Número de bits (bit count)

Potencias de 2, 3, 5 (común en DP o greedy)

Paridad de un número binario

Logaritmo (log₂, log₁₀, logₑ)



## N3

Teoría de números, combinatoria avanzada, álgebra modular

Teorema de Euler (φ(n))

Función phi de Euler

Función Möbius

Teorema chino del resto (CRT)

Teorema de Wilson

Exponenciación rápida (binaria)

Inverso modular

Inverso multiplicativo

Suma de potencias, progresiones aritméticas y geométricas

Conteo combinatorio (nCr, nPr)

Coeficientes binomiales (triángulo de Pascal)

Teorema del binomio

Principio de inclusión-exclusión

Permutaciones con repetición

Combinatoria con restricciones

Series telescópicas

Identidades notables

Teorema de Bézout

Algoritmo extendido de Euclides

Función piso y techo dentro de sumatorias

Numeración de Gray

Formas cerradas de secuencias

Recurrencias lineales

Matrices y álgebra lineal en programación (matriz de adyacencia, matriz de transformación, etc.)

Polinomios (interpolación, convoluciones, FFT)


# Adicionales

Simetría

Conteo de pares o tripletas bajo cierta condición

Conteo de caminos, combinatoria en grafos

Suma de subarrays / subsecuencias

Subconjuntos / subconjuntos contiguos

Propiedades de suma / producto acumulativo

Digit DP (programación dinámica sobre dígitos)



# Ejemplos

## 1. Aritmética 

| Concepto                | Descripción                            | Ejemplo en Python               |
| ----------------------- | -------------------------------------- | ------------------------------- |
| Par / Impar             | Si el número es divisible por 2        | `x % 2 == 0`                    |
| Múltiplo / Divisor      | `a` es múltiplo de `b` si `a % b == 0` | `if a % b == 0:`                |
| Valor absoluto          | Distancia a cero                       | `abs(x)`                        |
| Potencia                | Exponente                              | `x ** n`                        |
| Raíz cuadrada / n-ésima | Inversa de una potencia                | `x ** 0.5` o `math.sqrt(x)`     |
| Redondeo (floor/ceil)   | Aproximar hacia abajo / arriba         | `math.floor(x)`, `math.ceil(x)` |
| Residuo (módulo)        | Resto de una división                  | `a % b`                         |


## 2. Teoría de Números

| Concepto                   | Descripción                                | Ejemplo en Python                  |
| -------------------------- | ------------------------------------------ | ---------------------------------- |
| Primo                      | Divisible solo por 1 y él mismo            | `is_prime(n)` (con bucle hasta √n) |
| Criba de Eratóstenes       | Generar todos los primos ≤ n               | `sieve(n)`                         |
| MCD / Mínimo común divisor | Mayor común divisor de dos números         | `math.gcd(a, b)`                   |
| MCM                        | Mínimo común múltiplo                      | `(a * b) // gcd(a, b)`             |
| Inverso modular            | `a⁻¹ ≡ x mod m` tal que `(a * x) % m == 1` | `pow(a, -1, m)` (desde Python 3.8) |
| Congruencia                | `a ≡ b mod m`                              | `a % m == b % m`                   |


## 3. Combinatoria

| Concepto                         | Descripción                             | Ejemplo en Python                                  |
| -------------------------------- | --------------------------------------- | -------------------------------------------------- |
| Factorial (`n!`)                 | Producto de todos los enteros hasta `n` | `math.factorial(n)`                                |
| Permutaciones                    | Formas de ordenar elementos             | `itertools.permutations([1, 2, 3])`                |
| Combinaciones (`nCr`)            | Elegir sin importar orden               | `math.comb(n, r)` (Python 3.8+)                    |
| Triángulo de Pascal              | Valores de coeficientes binomiales      | `pascal[n][k] = pascal[n-1][k] + pascal[n-1][k-1]` |
| Principio de inclusión-exclusión | Contar sin doble inclusión              | `A + B - intersección`                             |


## 4. Álgebra modular

| Concepto               | Descripción                   | Ejemplo en Python                    |
| ---------------------- | ----------------------------- | ------------------------------------ |
| Aritmética modular     | Operar con residuos mod `m`   | `(a + b) % m`                        |
| Propiedades del módulo | Distributividad sobre +, ×, − | `(a*b) % m == ((a % m)*(b % m)) % m` |
| Exponenciación modular | Potencias grandes mod `m`     | `pow(a, b, m)`                       |


## 5. Propiedades Numéricas y Sucesiones

| Concepto              | Descripción                         | Ejemplo                            |
| --------------------- | ----------------------------------- | ---------------------------------- |
| Números capicúa       | Se leen igual al derecho y al revés | `str(n) == str(n)[::-1]`           |
| Suma de dígitos       | `sum(int(d) for d in str(n))`       |                                    |
| Sucesión de Fibonacci | `fib(n) = fib(n-1) + fib(n-2)`      | Con DP o iterativo                 |
| Números triangulares  | `T_n = n*(n+1)/2`                   | Para contar combinaciones de pares |
| Números cuadrados     | `n^2`                               | `1, 4, 9, 16, 25...`               |


##  6. Geometría y Espacio (a veces útil)

| Concepto                     | Descripción                       | Ejemplo                              |
| ---------------------------- | --------------------------------- | ------------------------------------ |
| Distancia euclidiana         | `sqrt((x2 - x1)^2 + (y2 - y1)^2)` | En problemas de puntos o coordenadas |
| Área de triángulo            | Fórmulas como de Herón            | Geometría computacional              |
| Producto escalar / vectorial | Vectores                          | En físicas o simulaciones            |



# Funciones de python

## 1. Aritmética Básica

| Función             | Descripción                       | Ejemplo                     |
| ------------------- | --------------------------------- | --------------------------- |
| `is_even(n)`        | Retorna si `n` es par             | `is_even(4) → True`         |
| `is_odd(n)`         | Retorna si `n` es impar           | `is_odd(5) → True`          |
| `is_multiple(a, b)` | Retorna si `a` es múltiplo de `b` | `is_multiple(10, 2) → True` |
| `gcd(a, b)`         | Máximo común divisor              | `gcd(12, 18) → 6`           |
| `lcm(a, b)`         | Mínimo común múltiplo             | `lcm(12, 18) → 36`          |
| `abs_val(x)`        | Valor absoluto                    | `abs_val(-3) → 3`           |
| `sum_digits(n)`     | Suma de los dígitos de `n`        | `sum_digits(123) → 6`       |
| `count_digits(n)`   | Número de dígitos                 | `count_digits(1234) → 4`    |


## 2. Primalidad y Números Especiales

| Función              | Descripción                               | Ejemplo                              |
| -------------------- | ----------------------------------------- | ------------------------------------ |
| `is_prime(n)`        | ¿Es primo? (prueba simple hasta √n)       | `is_prime(7) → True`                 |
| `generate_primes(n)` | Genera todos los primos hasta `n` (criba) | `generate_primes(10) → [2, 3, 5, 7]` |
| `count_divisors(n)`  | Número de divisores                       | `count_divisors(6) → 4`              |
| `sum_divisors(n)`    | Suma de divisores                         | `sum_divisors(6) → 12`               |
| `is_palindrome(n)`   | Se lee igual al derecho y al revés        | `is_palindrome(121) → True`          |
| `is_armstrong(n)`    | Número de Armstrong                       | `is_armstrong(153) → True`           |
| `is_perfect(n)`      | Suma de divisores propios = n             | `is_perfect(28) → True`              |


## 3. Combinatoria

| Función                         | Descripción                              | Ejemplo                             |
| ------------------------------- | ---------------------------------------- | ----------------------------------- |
| `factorial(n)`                  | `n!`                                     | `factorial(5) → 120`                |
| `nCr(n, r)`                     | Combinaciones `n` sobre `r`              | `nCr(5, 2) → 10`                    |
| `nPr(n, r)`                     | Permutaciones                            | `nPr(5, 2) → 20`                    |
| `generate_combinations(arr, r)` | Todas las combinaciones de `r` elementos | `generate_combinations([1,2,3], 2)` |
| `generate_permutations(arr, r)` | Todas las permutaciones de `r` elementos | `generate_permutations([1,2,3], 2)` |



## 4. Aritmética Modular

| Función                  | Descripción                               | Ejemplo                          |
| ------------------------ | ----------------------------------------- | -------------------------------- |
| `mod_add(a, b, m)`       | `(a + b) % m`                             | `mod_add(7, 5, 3) → 0`           |
| `mod_mul(a, b, m)`       | `(a * b) % m`                             | `mod_mul(3, 4, 5) → 2`           |
| `mod_exp(a, b, m)`       | Exponenciación modular                    | `mod_exp(2, 10, 1000) → 24`      |
| `mod_inverse(a, m)`      | Inverso modular si `a` y `m` son coprimos | `mod_inverse(3, 11) → 4`         |
| `are_congruent(a, b, m)` | ¿a ≡ b mod m?                             | `are_congruent(14, 2, 4) → True` |


## 5. Sucesiones y Series

| Función                 | Descripción                         | Ejemplo                                   |
| ----------------------- | ----------------------------------- | ----------------------------------------- |
| `fibonacci(n)`          | n-ésimo número de Fibonacci         | `fibonacci(6) → 8`                        |
| `generate_fibonacci(n)` | Lista de los primeros `n` Fibonacci | `generate_fibonacci(5) → [0, 1, 1, 2, 3]` |
| `triangular_number(n)`  | n-ésimo número triangular           | `triangular_number(3) → 6`                |
| `is_triangular(n)`      | ¿Es triangular?                     | `is_triangular(6) → True`                 |



## 6. Base y Dígitos

| Función           | Descripción                            | Ejemplo                    |
| ----------------- | -------------------------------------- | -------------------------- |
| `to_binary(n)`    | Convierte a binario                    | `to_binary(5) → '101'`     |
| `to_base(n, b)`   | Convierte `n` a base `b`               | `to_base(10, 3) → '101'`   |
| `from_base(s, b)` | Convierte string de base `b` a decimal | `from_base('101', 3) → 10` |
| `bit_count(n)`    | Cuenta los bits en 1 de `n`            | `bit_count(7) → 3`         |



# Funciones str, arr, busq y rem

## 1. str 

| Función / Método  | Descripción                             | Ejemplo                                 |
| ----------------- | --------------------------------------- | --------------------------------------- |
| `len(s)`          | Longitud de la cadena                   | `len("hola") → 4`                       |
| `s.lower()`       | Convierte a minúsculas                  | `"HOla".lower() → "hola"`               |
| `s.upper()`       | Convierte a mayúsculas                  | `"hola".upper() → "HOLA"`               |
| `s.capitalize()`  | Capitaliza primera letra                | `"python".capitalize() → "Python"`      |
| `s.title()`       | Capitaliza cada palabra                 | `"hola mundo".title() → "Hola Mundo"`   |
| `s.strip()`       | Elimina espacios en ambos extremos      | `" hola ".strip() → "hola"`             |
| `s.replace(a, b)` | Reemplaza todas las ocurrencias         | `"aabb".replace("a", "x") → "xxbb"`     |
| `s.find(sub)`     | Devuelve índice de la primera aparición | `"abcde".find("c") → 2`                 |
| `s.count(sub)`    | Cuenta apariciones de un substring      | `"banana".count("a") → 3`               |
| `s.startswith(x)` | ¿Empieza con...?                        | `"hola".startswith("h") → True`         |
| `s.endswith(x)`   | ¿Termina con...?                        | `"archivo.txt".endswith(".txt") → True` |
| `s.split(sep)`    | Divide cadena en partes                 | `"a,b,c".split(",") → ['a', 'b', 'c']`  |
| `sep.join(lista)` | Une lista de strings con separador      | `",".join(['a', 'b']) → "a,b"`          |
| `s.isdigit()`     | ¿Solo contiene dígitos?                 | `"123".isdigit() → True`                |
| `s.isalpha()`     | ¿Solo letras?                           | `"abc".isalpha() → True`                |
| `s.isalnum()`     | ¿Solo letras o números?                 | `"abc123".isalnum() → True`             |


## 2. arr

| Función / Método   | Descripción                          | Ejemplo                             |
| ------------------ | ------------------------------------ | ----------------------------------- |
| `len(lst)`         | Longitud de la lista                 | `len([1,2,3]) → 3`                  |
| `lst.append(x)`    | Agrega al final                      | `[1,2].append(3) → [1,2,3]`         |
| `lst.insert(i, x)` | Inserta `x` en la posición `i`       | `[1,3].insert(1, 2) → [1,2,3]`      |
| `lst.pop()`        | Elimina y retorna el último elemento | `[1,2,3].pop() → 3`                 |
| `lst.remove(x)`    | Elimina la primera aparición de `x`  | `[1,2,2].remove(2) → [1,2]`         |
| `lst.sort()`       | Ordena in-place                      | `[3,1,2].sort() → [1,2,3]`          |
| `sorted(lst)`      | Retorna una nueva lista ordenada     | `sorted([3,1]) → [1,3]`             |
| `lst.reverse()`    | Invierte la lista in-place           | `[1,2,3].reverse() → [3,2,1]`       |
| `reversed(lst)`    | Retorna un iterador invertido        | `list(reversed([1,2,3])) → [3,2,1]` |
| `sum(lst)`         | Suma los elementos                   | `sum([1,2,3]) → 6`                  |
| `max(lst)`         | Elemento máximo                      | `max([1,2,3]) → 3`                  |
| `min(lst)`         | Elemento mínimo                      | `min([1,2,3]) → 1`                  |
| `lst.count(x)`     | Cuenta ocurrencias de `x`            | `[1,2,2].count(2) → 2`              |
| `lst.index(x)`     | Índice de la primera aparición       | `[1,2,3].index(2) → 1`              |


3. Matemáticas (math, random)

| Función                | Descripción                      | Ejemplo                    |
| ---------------------- | -------------------------------- | -------------------------- |
| `math.sqrt(x)`         | Raíz cuadrada                    | `math.sqrt(9) → 3.0`       |
| `math.floor(x)`        | Piso (redondeo hacia abajo)      | `math.floor(2.9) → 2`      |
| `math.ceil(x)`         | Techo (redondeo hacia arriba)    | `math.ceil(2.1) → 3`       |
| `round(x, n)`          | Redondea a `n` decimales         | `round(3.14159, 2) → 3.14` |
| `abs(x)`               | Valor absoluto                   | `abs(-5) → 5`              |
| `pow(x, y)`            | `x` elevado a `y`                | `pow(2, 3) → 8`            |
| `math.log(x, base)`    | Logaritmo en base `base`         | `math.log(8, 2) → 3.0`     |
| `math.factorial(n)`    | Factorial                        | `math.factorial(5) → 120`  |
| `random.randint(a, b)` | Entero aleatorio entre `a` y `b` | `random.randint(1, 6)`     |
| `random.shuffle(lst)`  | Mezcla aleatoria de una lista    | `random.shuffle([1,2,3])`  |


## 4. Búsqueda, Reemplazo, Conteo

| Función / Método         | Descripción                         | Ejemplo                                         |
| ------------------------ | ----------------------------------- | ----------------------------------------------- |
| `in`                     | ¿Elemento presente?                 | `3 in [1,2,3] → True`                           |
| `s.find(x)`              | Índice de la primera aparición      | `"abcde".find("c") → 2`                         |
| `s.count(x)`             | Número de apariciones               | `"banana".count("a") → 3`                       |
| `lst.index(x)`           | Índice de la primera aparición      | `[4,5,6].index(5) → 1`                          |
| `lst.count(x)`           | Cuántas veces aparece               | `[1,2,2].count(2) → 2`                          |
| `filter(func, iterable)` | Filtra elementos que cumplen `func` | `list(filter(lambda x: x%2==0, [1,2,3])) → [2]` |
| `map(func, iterable)`    | Aplica función a cada elemento      | `list(map(str, [1,2,3])) → ['1','2','3']`       |
| `any(iter)`              | ¿Algún valor verdadero?             | `any([False, True]) → True`                     |
| `all(iter)`              | ¿Todos verdaderos?                  | `all([1,2,3]) → True`                           |



## 5. útiles

| Función           | Descripción                               | Ejemplo                                           |
| ----------------- | ----------------------------------------- | ------------------------------------------------- |
| `enumerate(lst)`  | Itera con índice y valor                  | `for i, v in enumerate(['a','b'])`                |
| `zip(lst1, lst2)` | Empareja elementos en tuplas              | `list(zip([1,2], ['a','b'])) → [(1,'a'),(2,'b')]` |
| `reversed(seq)`   | Iterador al revés                         | `list(reversed([1,2,3])) → [3,2,1]`               |
| `sorted(iter)`    | Devuelve nueva lista ordenada             | `sorted([3,1,2]) → [1,2,3]`                       |
| `set(lst)`        | Convierte a conjunto (elimina duplicados) | `set([1,1,2]) → {1,2}`                            |
| `list(set(lst))`  | Lista única (orden no garantizada)        | `list(set([1,2,2])) → [1,2]`                      |



# Funcions dict, set, re, itertools, collections

## 1. dict 

| Método / Función         | Descripción                                   | Ejemplo                                |
| ------------------------ | --------------------------------------------- | -------------------------------------- |
| `d[key]`                 | Accede al valor asociado a `key`              | `d = {'a': 1}; d['a'] → 1`             |
| `d.get(key, default)`    | Devuelve valor o `default` si no existe clave | `d.get('x', 0) → 0`                    |
| `d.keys()`               | Devuelve todas las claves                     | `list(d.keys()) → ['a', 'b']`          |
| `d.values()`             | Devuelve todos los valores                    | `list(d.values()) → [1, 2]`            |
| `d.items()`              | Devuelve pares (clave, valor)                 | `list(d.items()) → [('a',1), ('b',2)]` |
| `d.update(otro_dict)`    | Fusiona otro diccionario                      | `d.update({'c':3})`                    |
| `d.pop(key)`             | Elimina y devuelve el valor de `key`          | `d.pop('a') → 1`                       |
| `d.setdefault(k, v)`     | Si no existe la clave, la crea con valor `v`  | `d.setdefault('z', 0)`                 |
| `dict.fromkeys(keys, v)` | Crea diccionario con claves y valor `v`       | `dict.fromkeys(['a','b'], 0)`          |
| `del d[key]`             | Elimina la clave                              | `del d['a']`                           |


## 2. set

| Método / Función | Descripción                                     | Ejemplo                 |         |                 |
| ---------------- | ----------------------------------------------- | ----------------------- | ------- | --------------- |
| `set(lst)`       | Convierte lista a conjunto (elimina duplicados) | `set([1,1,2]) → {1,2}`  |         |                 |
| `a & b`          | Intersección                                    | `{1,2} & {2,3} → {2}`   |         |                 |
| \`a              | b\`                                             | Unión                   | \`{1,2} | {3} → {1,2,3}\` |
| `a - b`          | Diferencia                                      | `{1,2,3} - {2} → {1,3}` |         |                 |
| `a ^ b`          | Diferencia simétrica                            | `{1,2} ^ {2,3} → {1,3}` |         |                 |
| `s.add(x)`       | Agrega un elemento                              | `s.add(4)`              |         |                 |
| `s.remove(x)`    | Elimina (error si no existe)                    | `s.remove(3)`           |         |                 |
| `s.discard(x)`   | Elimina si existe, sin error                    | `s.discard(99)`         |         |                 |
| `s.pop()`        | Elimina y devuelve un elemento arbitrario       | `s.pop()`               |         |                 |
| `s.clear()`      | Vacía el conjunto                               | `s.clear()`             |         |                 |


## 3. re

Importar con import re

| Función / Método         | Descripción                                | Ejemplo                                          |
| ------------------------ | ------------------------------------------ | ------------------------------------------------ |
| `re.search(pat, str)`    | Busca primera coincidencia (objeto o None) | `re.search(r'\d+', 'abc123')`                    |
| `re.match(pat, str)`     | Igual que `search`, pero al principio      | `re.match(r'abc', 'abcdef')`                     |
| `re.findall(pat, str)`   | Lista de todas las coincidencias           | `re.findall(r'\d+', 'a1b22c3') → ['1','22','3']` |
| `re.sub(pat, repl, str)` | Reemplaza coincidencias                    | `re.sub(r'\d', 'X', 'a1b2') → 'aXbX'`            |
| `re.split(pat, str)`     | Divide la cadena por patrón                | `re.split(r'[.,]', 'a,b.c') → ['a','b','c']`     |
| `re.compile(pat)`        | Compila patrón para reutilizar             | `pat = re.compile(r'\w+')`                       |


## 4. Librerías útiles (itertools, collections)

### itertools

| Función                 | Descripción                   | Ejemplo                                           |
| ----------------------- | ----------------------------- | ------------------------------------------------- |
| `permutations(iter, r)` | Permutaciones de longitud `r` | `list(permutations([1,2], 2)) → [(1,2), (2,1)]`   |
| `combinations(iter, r)` | Combinaciones sin repetición  | `list(combinations('abc', 2)) → [('a','b'),...]`  |
| `product(a, b)`         | Producto cartesiano           | `list(product([1,2], [3,4])) → [(1,3), (1,4)...]` |
| `accumulate(iter)`      | Suma acumulada (por defecto)  | `list(accumulate([1,2,3])) → [1,3,6]`             |
| `cycle(iter)`           | Iterador cíclico infinito     | `c = cycle([1,2])`                                |
| `count(start, step)`    | Cuenta infinita               | `count(0, 2)` genera 0, 2, 4...                   |


### collections

| Objeto                 | Descripción                                    | Ejemplo                               |
| ---------------------- | ---------------------------------------------- | ------------------------------------- |
| `Counter(iterable)`    | Cuenta frecuencia de elementos                 | `Counter('aabb') → {'a':2, 'b':2}`    |
| `defaultdict(default)` | Diccionario con valor por defecto              | `d = defaultdict(int); d['x'] += 1`   |
| `deque`                | Cola doble eficiente                           | `dq = deque([1,2]); dq.appendleft(0)` |
| `namedtuple()`         | Tupla con nombre de campos                     | `Point = namedtuple('Point', 'x y')`  |
| `OrderedDict()`        | Diccionario que recuerda el orden de inserción | `OrderedDict([('a', 1), ('b', 2)])`   |



# Funciones functools, heapq, bisect (busq bin ordn)

## 1. functools

| Función                  | Descripción                                       | Ejemplo                                |
| ------------------------ | ------------------------------------------------- | -------------------------------------- |
| `reduce(func, iterable)` | Aplica acumulativamente una función binaria       | `reduce(lambda x,y: x+y, [1,2,3]) → 6` |
| `lru_cache()`            | Memoriza resultados de función                    | `@lru_cache def fib(n): ...`           |
| `partial(func, *args)`   | Fija ciertos argumentos de una función            | `pow2 = partial(pow, 2)`               |
| `cmp_to_key(func)`       | Convierte función de comparación a clave de orden | `sorted(lst, key=cmp_to_key(cmp))`     |


## 2. heapq – Colas de prioridad (min-heap)

| Función / Objeto         | Descripción                           | Ejemplo                            |
| ------------------------ | ------------------------------------- | ---------------------------------- |
| `heapify(list)`          | Convierte lista en heap (en-place)    | `heapify([3,1,2])`                 |
| `heappush(heap, x)`      | Agrega `x` manteniendo orden del heap | `heappush(h, 4)`                   |
| `heappop(heap)`          | Extrae el menor elemento              | `heappop(h)`                       |
| `heappushpop(heap, x)`   | Inserta `x` y luego remueve el mínimo | `heappushpop(h, x)`                |
| `heapreplace(heap, x)`   | Remueve mínimo y luego inserta `x`    | `heapreplace(h, x)`                |
| `nlargest(n, iterable)`  | Retorna `n` mayores elementos         | `nlargest(3, [1,4,2,9]) → [9,4,2]` |
| `nsmallest(n, iterable)` | Retorna `n` menores elementos         | `nsmallest(2, [4,1,5]) → [1,4]`    |


## 3. bisect – Búsqueda binaria sobre listas ordenadas

| Función              | Descripción                                | Ejemplo                        |
| -------------------- | ------------------------------------------ | ------------------------------ |
| `bisect_left(a, x)`  | Inserta `x` en la posición correcta (izq.) | `bisect_left([1,3,5], 3) → 1`  |
| `bisect_right(a, x)` | Inserta `x` después de otros iguales       | `bisect_right([1,3,5], 3) → 2` |
| `insort_left(a, x)`  | Inserta `x` en posición correcta           | `insort_left([1,3,5], 2)`      |
| `insort_right(a, x)` | Igual que `insort_left` pero por derecha   | `insort_right([1,3,5], 3)`     |


## 4. math – Funciones matemáticas adicionales

| Función            | Descripción                  | Ejemplo                  |
| ------------------ | ---------------------------- | ------------------------ |
| `math.gcd(a, b)`   | Máximo común divisor         | `math.gcd(12, 18) → 6`   |
| `math.lcm(a, b)`   | Mínimo común múltiplo (3.9+) | `math.lcm(4,6) → 12`     |
| `math.isqrt(n)`    | Raíz cuadrada entera         | `math.isqrt(10) → 3`     |
| `math.prod(iter)`  | Producto de elementos        | `math.prod([1,2,3]) → 6` |
| `math.comb(n, k)`  | Combinaciones (nCk)          | `math.comb(5,2) → 10`    |
| `math.perm(n, k)`  | Permutaciones (nPk)          | `math.perm(5,2) → 20`    |
| `math.hypot(x, y)` | Distancia Euclídea           | `hypot(3, 4) → 5.0`      |
 

## 5. statistics – Estadísticas rápidas

| Función          | Descripción         | Ejemplo                   |
| ---------------- | ------------------- | ------------------------- |
| `mean(data)`     | Media aritmética    | `mean([1,2,3]) → 2.0`     |
| `median(data)`   | Mediana             | `median([1,2,3,4]) → 2.5` |
| `mode(data)`     | Valor más frecuente | `mode([1,2,2,3]) → 2`     |
| `stdev(data)`    | Desviación estándar | `stdev([1,2,3]) → 1.0`    |
| `variance(data)` | Varianza            | `variance([1,2,3]) → 1.0` |


## 6. pathlib – Manejo moderno de rutas

##### útil para proyectos, I/O, pruebas, scripts

| Objeto / Método             | Descripción                 | Ejemplo                 |
| --------------------------- | --------------------------- | ----------------------- |
| `Path('ruta')`              | Representa una ruta         | `Path("data/file.txt")` |
| `p.exists()`                | ¿Existe la ruta?            | `p.exists()`            |
| `p.is_file()`               | ¿Es archivo?                | `p.is_file()`           |
| `p.is_dir()`                | ¿Es directorio?             | `p.is_dir()`            |
| `p.name`                    | Nombre del archivo          | `p.name → "file.txt"`   |
| `p.stem`                    | Nombre sin extensión        | `p.stem → "file"`       |
| `p.suffix`                  | Extensión (".txt")          | `p.suffix → ".txt"`     |
| `p.read_text()`             | Lee ar chivo como texto      | `p.read_text()`         |
| `p.write_text("contenido")` | Escribe texto en el archivo | `p.write_text("Hola")`  |



# Funciones para estructuras

## 1. list: array dinámico

| Función / Método | Descripción                       | Ejemplo             |
| ---------------- | --------------------------------- | ------------------- |
| `append(x)`      | Agrega al final                   | `lst.append(10)`    |
| `extend(iter)`   | Agrega múltiples elementos        | `lst.extend([4,5])` |
| `insert(i, x)`   | Inserta en posición `i`           | `lst.insert(2, 99)` |
| `remove(x)`      | Elimina la **primera** ocurrencia | `lst.remove(3)`     |
| `pop([i])`       | Quita y retorna (último o índice) | `lst.pop()`         |
| `index(x)`       | Retorna índice de `x`             | `lst.index(5)`      |
| `count(x)`       | Cuenta ocurrencias de `x`         | `lst.count(1)`      |
| `sort()`         | Ordena en lugar                   | `lst.sort()`        |
| `reverse()`      | Invierte en lugar                 | `lst.reverse()`     |
| `copy()`         | Crea una copia superficial        | `lst.copy()`        |
| `clear()`        | Borra todos los elementos         | `lst.clear()`       |


## 2. tuple: Inmutables y hashables

| Función / Propiedad | Descripción        | Ejemplo            |
| ------------------- | ------------------ | ------------------ |
| `len(t)`            | Longitud           | `len((1, 2))`      |
| `count(x)`          | Cuenta ocurrencias | `(1,2,1).count(1)` |
| `index(x)`          | Primer índice      | `(3,4,5).index(5)` |


## 3. dict

| Método / Función    | Descripción                        | Ejemplo                |
| ------------------- | ---------------------------------- | ---------------------- |
| `get(k, default)`   | Valor por clave o default          | `d.get('x', 0)`        |
| `setdefault(k, v)`  | Valor si existe, si no, lo setea   | `d.setdefault('k', 1)` |
| `update(d2)`        | Fusiona con otro diccionario       | `d.update(d2)`         |
| `keys()`            | Lista de claves                    | `d.keys()`             |
| `values()`          | Lista de valores                   | `d.values()`           |
| `items()`           | Lista de (clave, valor)            | `for k,v in d.items()` |
| `pop(k[, default])` | Elimina y retorna valor            | `d.pop('k')`           |
| `popitem()`         | Elimina y retorna un par aleatorio | `d.popitem()`          |
| `clear()`           | Borra todo                         | `d.clear()`            |
| `copy()`            | Copia superficial                  | `d2 = d.copy()`        |


## 4. set, frozenset: No repetidos, sin orden

| Método / Operación         | Descripción                     | Ejemplo        |      |
| -------------------------- | ------------------------------- | -------------- | ---- |
| `add(x)`                   | Agrega elemento                 | `s.add(4)`     |      |
| `discard(x)`               | Elimina si existe               | `s.discard(3)` |      |
| `remove(x)`                | Elimina o lanza error si no hay | `s.remove(1)`  |      |
| `pop()`                    | Elimina un elemento arbitrario  | `s.pop()`      |      |
| `clear()`                  | Borra todo                      | `s.clear()`    |      |
| `union(s2)`                | Unión                           | \`s            | s2\` |
| `intersection(s2)`         | Intersección                    | `s & s2`       |      |
| `difference(s2)`           | Diferencia                      | `s - s2`       |      |
| `symmetric_difference(s2)` | Elementos no comunes            | `s ^ s2`       |      |
| `issubset(s2)`             | ¿Es subconjunto?                | `s <= s2`      |      |
| `issuperset(s2)`           | ¿Es superconjunto?              | `s >= s2`      |      |


## 5. collections: Contenedores avanzados

| Clase               | Descripción                         | Ejemplo                              |
| ------------------- | ----------------------------------- | ------------------------------------ |
| `Counter(iter)`     | Cuenta ocurrencias                  | `Counter('aabb') → {'a':2, 'b':2}`   |
| `defaultdict(type)` | Crea claves con valores por defecto | `d = defaultdict(int)`               |
| `OrderedDict()`     | Diccionario que recuerda el orden   | `OrderedDict({'a':1,'b':2})`         |
| `deque([iter])`     | Cola doble extrema eficiente        | `dq = deque([1,2,3])`                |
| `namedtuple()`      | Tupla con nombres de campos         | `Point = namedtuple('Point', 'x y')` |


## 6. Estructuras personalizadas

| Tipo                      | Descripción                           | Ejemplo                |
| ------------------------- | ------------------------------------- | ---------------------- |
| `class Stack:`            | Implementar pila con `list` o `deque` | push/pop               |
| `class Queue:`            | Implementar cola                      | `deque`, `queue.Queue` |
| `class LinkedList:`       | Lista enlazada manual                 | nodos                  |
| `heapq` / `PriorityQueue` | Heap/PQ eficiente                     | `heapq.heappush(h, x)` |
| `Graph = dict[node]`      | Grafos por diccionarios o listas      | `{a: [b, c]}`          |




# Funciones de transformaciones, búsqueda, ordenamiento

## 1. Transformaciones

##### Permiten transformar datos sin modificar los originales, ideales en programación declarativa / funcional

| Función                  | Descripción                                  | Ejemplo                                      |
| ------------------------ | -------------------------------------------- | -------------------------------------------- |
| `map(func, iterable)`    | Aplica una función a cada elemento           | `map(str.upper, ['a', 'b']) → ['A', 'B']`    |
| `filter(func, iterable)` | Filtra elementos que cumplen una condición   | `filter(lambda x: x%2==0, [1,2,3]) → [2]`    |
| `reduce(func, iterable)` | Acumula resultados con una operación binaria | `reduce(lambda x,y: x+y, [1,2,3]) → 6`       |
| `zip(*iterables)`        | Une elementos por posición                   | `zip([1,2], ['a','b']) → [(1,'a'), (2,'b')]` |
| `enumerate(iterable)`    | Agrega índice al iterar                      | `for i, v in enumerate(['a','b'])`           |
| `sorted(iterable)`       | Retorna una **nueva lista ordenada**         | `sorted([3,1,2]) → [1,2,3]`                  |
| `reversed(iterable)`     | Retorna iterador invertido                   | `list(reversed([1,2,3])) → [3,2,1]`          |


##### map, filter, zip, reversed retornan iteradores → conviene convertir a list() si querés ver el resultado.


## 2. Búsqueda y evaluación

| Función               | Descripción                          | Ejemplo                       |
| --------------------- | ------------------------------------ | ----------------------------- |
| `in`                  | ¿Existe elemento en la colección?    | `'a' in ['a','b'] → True`     |
| `index(x)`            | Índice del primer `x` en lista/tupla | `[1,2,3].index(2)`            |
| `count(x)`            | Cuántas veces aparece `x`            | `[1,1,2].count(1)`            |
| `any(iterable)`       | ¿Algún valor verdadero?              | `any([0, False, 1]) → True`   |
| `all(iterable)`       | ¿Todos son verdaderos?               | `all([1, True, 3]) → True`    |
| `next(iter, default)` | Siguiente valor o `default`          | `next(i for i in lst if i>0)` |


## 3. Evaluación y comparación personalizada

##### útiles con sorted, max, min, filter, etc.

| Uso                | Descripción                              | Ejemplo                          |
| ------------------ | ---------------------------------------- | -------------------------------- |
| `key` en `sorted`  | Ordenar por función                      | `sorted(words, key=len)`         |
| `key` en `max/min` | Máximo/mínimo por criterio               | `max(pairs, key=lambda x: x[1])` |
| `lambda`           | Función anónima para expresiones simples | `lambda x: x*x`                  |


## 4. Conversión y generación

| Función                   | Descripción               | Ejemplo                             |
| ------------------------- | ------------------------- | ----------------------------------- |
| `list(iter)`              | Convierte a lista         | `list(map(str, [1,2])) → ['1','2']` |
| `tuple(iter)`             | Convierte a tupla         | `tuple([1,2]) → (1,2)`              |
| `set(iter)`               | Convierte a conjunto      | `set([1,1,2]) → {1,2}`              |
| `dict(zip(k,v))`          | Empareja claves y valores | `dict(zip(['a','b'], [1,2]))`       |
| `range(start, end, step)` | Generador numérico        | `range(1, 10, 2)`                   |


## 5. Comprehensions (transformación + filtrado)

Más poderosas, legibles y rápidas

| Tipo                | Ejemplo                            |
| ------------------- | ---------------------------------- |
| Lista:              | `[x*2 for x in nums if x > 0]`     |
| Diccionario:        | `{k: v*2 for k,v in d.items()}`    |
| Conjunto:           | `{x for x in lst if x%2==0}`       |
| Anidado (matrices): | `[x for row in grid for x in row]` |


## 6. Ordenamiento personalizado (sorted, sort)

| Uso                             | Ejemplo                             |
| ------------------------------- | ----------------------------------- |
| Ordenar alfabéticamente         | `sorted(['z', 'a', 'm'])`           |
| Por longitud                    | `sorted(words, key=len)`            |
| Ordenar tuplas por segundo elto | `sorted(pares, key=lambda x: x[1])` |
| Descendente                     | `sorted(nums, reverse=True)`        |
