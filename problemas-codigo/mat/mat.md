# Mat

##### Definición, propiedades y utilidad

# N1 

Fundamentales y muy comunes


## 1. Números naturales, enteros, racionales


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

    

### Números enteros 

Se denotan con Z (del alemán Zahlen, que significa “números”).

Z = {…,−3,−2,−1,0,1,2,3,…}

El conjunto incluye: 

Números negativos: −1,−2,−3,…−1,−2,−3,…

El cero: 00

Números positivos: 1,2,3,…1,2,3,…


Relación de los enteros con otros conjuntos:

1. N c Z: Los naturales están dentro de los enteros

2. Z c Q: Todo entero es también un número racional


Propiedades: 

1. Cerradura

a+b ∈ Z
a-b ∈ Z
axb ∈ Z

No están cerrados bajo división:

Ej: 3/2 = 1.5 ∈/ Z


2. Existencia de neutros y opuestos

Neutro aditivo: 0, porque a+0=a

Opuesto de a: el número −a, porque a+(−a) = 0


3. Simetría

Por cada a ∈ Z, existe −a ∈ Z


4. Orden total

Podés comparar dos enteros con <, >, <=, >=


5. Distancia (valor absoluto):

El valor absoluto de un entero mide su distancia al 0:

|x| = x si x >= 0; -x si < 0 


Utilidad: 

Matemáticas: 

1. Permiten restar cualquier par de naturales.

2. Se usan en álgebra, ecuaciones, series, etc.

3. Son base para estructuras más complejas como los números racionales, congruencias y enteros módulo n.


Programación:

1. Índices negativos:

Python, por ejemplo, permite acceder desde el final de una lista:
 
 ```
arr = [10, 20, 30]
print(arr[-1])  # → 30

```


2. Desplazamientos, coordenadas y movimientos:

```
x = 0
x -= 1  # Mover hacia la izquierda

```


3. Contadores hacia atrás (bucle decreciente):

```
for i in range(5, -1, -1):
    print(i)

```


4. Diferencias y deltas:

Calcular cuánto subió o bajó algo

```
delta = actual - anterior

```


5. Manejo de errores o estados con enteros negativos:

```
def buscar_elemento(lista, x):
    if x in lista:
        return lista.index(x)
    return -1  # señal de "no encontrado"

```


5. Matemática modular, divisores, congruencias:

```
if (a - b) % n == 0:
    print("a ≡ b (mod n)")

```


Visualización en la recta numérica:

```
… -3  -2  -1   0   1   2   3   …
  ←  — — — — — — — — — — —   →

```

Permite representar cambios hacia la izquierda (negativos) o derecha (positivos), esencial en física, algoritmos y lógica de estados.


Rs: 

| Propiedad       | Descripción                                                     |
| --------------- | --------------------------------------------------------------- |
| Conjunto        | Z = {...,-2, -1, 0, 1, 2,...}$                					|
| Incluye         | Naturales + 0 + negativos                                       |
| Operaciones     | Cerrado para suma, resta, multiplicación                        |
| Aplicaciones    | Índices, diferenciales, estados, control de flujo, congruencias |
| Características | Tienen opuestos, orden, valor absoluto                          |


#### Enteros en código 


1. Funciones integradas

| Función          | Uso                            | Ejemplo        | Resultado                   |
| ---------------- | ------------------------------ | -------------- | --------------------------- |
| `abs(x)`         | Valor absoluto                 | `abs(-7)`      | `7`                         |
| `pow(a, b)`      | Potencia a^b                   | `pow(2, 3)`    | `8`                         |
| `pow(a, b, mod)` | Potencia módulo                | `pow(2, 3, 5)` | `3` (porque  8 \mod 5 = 3 ) |
| `divmod(a, b)`   | Retorna `(a // b, a % b)`      | `divmod(7, 3)` | `(2, 1)`                    |
| `int(x)`         | Convierte a entero             | `int("42")`    | `42`                        |
| `round(x)`       | Redondea al entero más cercano | `round(4.6)`   | `5`                         |


2. Operadores matemáticos

| Operador | Significado     | Ejemplo  | Resultado |
| -------- | --------------- | -------- | --------- |
| `+`      | Suma            | `3 + 5`  | `8`       |
| `-`      | Resta           | `7 - 2`  | `5`       |
| `*`      | Multiplicación  | `4 * 3`  | `12`      |
| `**`     | Potencia        | `2 ** 4` | `16`      |
| `//`     | División entera | `7 // 3` | `2`       |
| `%`      | Módulo (resto)  | `7 % 3`  | `1`       |

##### Módulo -> Resto ()%)
##### // y % siempre devuelven enteros si ambos operandos lo son.


3. Operaciones con signo y divisibilidad

Módulo con signo:

```
print(7 % 3)   # 1
print(-7 % 3)  # 2  ← el resultado es siempre ≥ 0 si el divisor es positivo

```

útil en:

Posiciones circulares

Congruencias

Manejo de ciclos


4. Funciones matemáticas del módulo math

Con `import math`

```
| Función             | Descripción                     | Ejemplo             | Resultado |
| ------------------- | ------------------------------- | ------------------- | --------- |
| `math.gcd(a, b)`    | Máximo común divisor            | `math.gcd(12, 8)`   | `4`       |
| `math.lcm(a, b)`    | Mínimo común múltiplo (Py 3.9+) | `math.lcm(4, 6)`    | `12`      |
| `math.isqrt(n)`     | Raíz entera                     | `math.isqrt(10)`    | `3`       |
| `math.factorial(n)` | n!   factorial                  | `math.factorial(5)` | `120`     |

```


5. Conversión entre bases

```
bin(10)     # '0b1010' → binario
oct(10)     # '0o12'   → octal
hex(10)     # '0xa'    → hexadecimal
int('1010', 2)  # → 10 (binario a decimal)

```

útil para:

Manipulación de bits

Criptografía

Algoritmos de compresión
    

6. Funciones útiles de control

		| Expresión      | Propósito                                    |
		| -------------- | -------------------------------------------- |
##### 	| `x % 2 == 0`   | ¿Es par?                                     |
##### 	| `x % n == 0`   | ¿Es múltiplo de `n`?                         |
##### 	| `x // n`       | ¿Cuántos bloques de tamaño `n` caben en `x`? |
##### 	| `divmod(x, n)` | Obtener a la vez cociente y resto            |


7. Ejemplos

1. Verificar paridad:

```
def es_par(n):
    return n % 2 == 0

```


2. Redondeo personalizado:

```
def redondear_a_mas_cercano(x, base):
    return base * round(x / base)

print(redondear_a_mas_cercano(23, 5))  # → 25

```


3. Separar cociente y resto:

```
horas, minutos = divmod(130, 60)
print(horas, "horas", minutos, "minutos")  # → 2 horas 10 minutos

```


Rs:  

| Categoría              | Funciones clave                            |
| ---------------------- | ------------------------------------------ |
| **Valor absoluto**     | `abs(x)`                                   |
| **División & módulo**  | `//`, `%`, `divmod()`                      |
| **Potencias**          | `**`, `pow()`                              |
| **Redondeos**          | `round()`, `int()`                         |
| **Conversión de base** | `bin()`, `int(..., base)`                  |
| **Factores y raíz**    | `math.gcd()`, `math.lcm()`, `math.isqrt()` |
| **Factorial**          | `math.factorial()`                         |


### Números racionales 

Son aquellos que pueden expresarse como el cociente de dos enteros


#### División: 

Operación aritmética donde se descompone una cifra.

Busca el valor denominado cociente, que representa la cantidad de veces que aparece un número (llamado dividendo) en otro (conocido como divisor),

```
dividendo | divisor
resto		cociente

```

Verificación:

```
85 | 9
4	9 

9 x 9 (cociente)
r: 81
+	4
r: 85

```


#### Cociente

Resultado tras dividir un número por otro. 

##### Cantidad de veces que el divisor está contenido en el dividendo. 


#### Resto

Número que se le resta al dividendo para que sea igual a un determinado número de veces el divisor.

```
Resto = Dividendo - (Divisor x Cociente)

```


#### Tipos de división 

1. Exacta: resto 0

2. Inexacta: !0

El divisor no aparece contenido una cantidad de veces exacta en el dividendo, sino que queda un resto.


#### División entera y resto en python

```
a // b
```

Resulta el cociente.

```
a % b
```

Resulta el resto 


#### Racionales

Cociente de dos enteros

```
a/b donde a ∈ >, b ∈ Z ∖ {0}

```

Cualquier número que puede escribirse como fracción, con numerador y denominador enteros (y el denominador distinto de cero).

##### Restricción denominador (b) distinto de 0.


Ej: 

| Expresión                     | Tipo                    |
| ----------------------------- | ----------------------- |
| `1/2`, `-3/4`, `7`, `0`       | Racionales              |
| `5` → se puede ver como `5/1` | También racional        |
| `0.333... = 1/3`              | Racional periódico      |
| `0.25 = 1/4`                  | Racional decimal finito |


Propieadades:

1. Clausura: 

Si sumás, restás, multiplicás o dividís (≠0) dos racionales, el resultado es racional


2. Densidad:

Entre dos racionales siempre hay otro racional. 

Por ejemplo: entre 1/3 y 1/2, está 2/5.


3. Identidad aditiva y multiplicativa:

0 es el neutro aditivo, 1 es el neutro multiplicativo.


4. No incluye raíces irracionales

√2, π, e no son racionales.


5. Equivalencia de fracciones

1/2, 2/4, 3/6 representan el mismo número racional


Útilidad:

1. Cálculo preciso:

Evitan errores de redondeo en representaciones decimales.


2. Geometría y proporciones:

Muchas razones, pendientes y escalas se expresan como racionales.


3. Finanzas:

Cálculos exactos con tasas, proporciones, porcentajes


4. Algoritmos:

En programación simbólica, álgebra computacional, y cuando se requiere precisión exacta


En python: 

1. Decimales o floats:

```
x = 0.75

```

##### Precisión limitada

```
print(0.1 + 0.2)  # 0.30000000000000004

```


2. Módulo fractions (precisión exacta)

```
from fractions import Fraction

a = Fraction(1, 3)
b = Fraction(2, 5)
c = a + b
print(c)  # 11/15

```

##### Fraction reduce automáticamente y mantiene precisión exacta

```
Fraction(2, 4) == Fraction(1, 2)  # True

```


Racionales en Python

| Operación         | Código                                   | Resultado  |
| ----------------- | ---------------------------------------- | ---------- |
| Suma              | `Fraction(1, 3) + Fraction(1, 6)`        | `1/2`      |
| Resta             | `Fraction(2, 3) - Fraction(1, 2)`        | `1/6`      |
| Multiplicación    | `Fraction(3, 4) * Fraction(2, 3)`        | `1/2`      |
| División          | `Fraction(1, 2) / Fraction(1, 4)`        | `2`        |
| Convertir decimal | `Fraction('0.25')`                       | `1/4`      |
| Aproximar float   | `Fraction(0.333).limit_denominator(100)` | `333/1000` |


Casos prácticos: 

1. Comparar precisión

```
print(1/3 + 1/3 + 1/3)  # 0.999999...
print(Fraction(1,3) * 3)  # 1

```


2. Cálculo exacto de razones

```
def ratio(a, b):
    return Fraction(a, b)

print(ratio(3, 7))  # 3/7

```


Rs:

| Categoría             | Detalles                                          |
| --------------------- | ------------------------------------------------- |
| Representación        | `Fraction(a, b)`                                  |
| Precisión             | Exacta                                            |
| Comparación con float | `Fraction('0.1') == 1/10`                         |
| Aplicaciones clave    | Finanzas, álgebra, geometría, algoritmos precisos |

 
#### Tipos de racionales 

Los números racionales tienen una representación decimal que termina o se repite cíclicamente


1. Decimales finitos (terminantes)

Tiene decimal finito si su expansión decimal termina después de un número finito de cifras

1/4 = 0.25 

##### Una fracción a/b​ tiene decimal finito si y solo si el denominador reducido (luego de simplificar) tiene como factores solo 2 y/o 5.

| Fracción | Decimal | ¿Termina? |
| -------- | ------- | --------- |
| 1/2      | 0.5     | ✅ Sí     |
| 3/4      | 0.75    | ✅ Sí     |
| 1/5      | 0.2     | ✅ Sí     |
| 7/8      | 0.875   | ✅ Sí     |


1/3, 2/7, 1/6 no terminan


2. Decimales infinitos periódicos

Si su parte decimal se repite infinitamente en un patrón cíclico.
	    -  
1/3 = 0.3, 
        ------   
2/7 = 0.285714


1. La parte que se repite como patrón indefinido está marcada

2. Algunos tienen una parte inicial no periódica → llamados mixtos
         -
1/6 = 0.16

Ocurre cuando el denominador tiene otros factores además de 2 y 5.

| Fracción | Decimal           | ¿Periódico?                       |
| -------- | ----------------- | --------------------------------- |
| 1/3      | 0.333...          | ✅ Sí                              |
| 2/7      | 0.285714285714... | ✅ Sí                              |
| 1/11     | 0.090909...       | ✅ Sí                              |
| 1/6      | 0.1666...         | ✅ Mixto (1 no se repite, luego 6) |


Comparación:

| Propiedad             | Decimal Finito                        | Decimal Periódico                               |
| --------------------- | ------------------------------------- | ----------------------------------------------- |
| Termina               | ✅ Sí                                  | ❌ No                                            |
| Se repite             | ❌ No                                  | ✅ Sí (exactamente)                              |
| Fracciones implicadas | Denominadores con solo factores 2 o 5 | Denominadores con otros primos (3, 7, 11, etc.) |
| Conversión a fracción | Siempre posible                       | Siempre posible                                 |
| Cantidad total        | Infinita                              | Infinita                                        |


#### Decimales finitos, periodico y periodico mixtos en python

```
from fractions import Fraction

print(float(Fraction(1, 4)))  # 0.25 → finito
print(float(Fraction(1, 3)))  # 0.3333333333333333 → periódico

```

##### Python no muestra periódicos exactos, solo una aproximación de punto flotante

Para precisión simbólica:

```
f = Fraction(1, 3)
print(f)  # 1/3

```


Detección práctica (factores del denominador):

```
from fractions import Fraction

def es_decimal_finito(f):
    denom = Fraction(f).denominator
    while denom % 2 == 0:
        denom //= 2
    while denom % 5 == 0:
        denom //= 5
    return denom == 1

print(es_decimal_finito(Fraction(3, 4)))  # True
print(es_decimal_finito(Fraction(2, 7)))  # False

```


Útilidad:

| Aplicación               | Importancia                                                                     |
| ------------------------ | ------------------------------------------------------------------------------- |
| Finanzas                 | Evita errores al representar montos (ej. dividir una cuenta en partes iguales). |
| Algoritmos               | Saber si un número racional se puede representar exactamente en base 10.        |
| Matemática escolar       | Base para fracciones equivalentes, simplificación y conversiones.               |
| Aritmética computacional | Influye en representación, redondeo y precisión.                                |


Rs: 

| Tipo de racional  | Patrón decimal | Denominadores típicos     | Representación           |
| ----------------- | -------------- | ------------------------- | ------------------------ |
| Decimal finito    | Termina        | Solo factores 2 y 5       | Ej: 0.125 = 1/8          |
| Decimal periódico | Se repite      | Otros primos involucrados | Ej: 0.\overline{3} = 1/3 |


### Números Irracionales

Es un número real que no puede escribirse como una fracción exacta de dos enteros.

Su expansión decimal es infinita y no periódica.

```
No existen a, b ∈ Z, b =/= 0 tales que x = a/b
``` 

1. π: 3.14159…

Relación circunferencia/diámetro


2. e: 2.71828…

Base del logaritmo natural


3. √2: 1.41421…

Diagonal de un cuadrado de lado 1


4. √3: 1.73205…

Altura de un triángulo equilátero de lado 2


5. ϕ (phi): 1.61803…

Número áureo


Propiedades: 

1. No se puede escribir como fracción exacta

Ninguna combinación de enteros lo logra


2. Decimal no termina ni se repite

A diferencia de los racionales


3. Resultado de ciertas raíces

Como √2, √5, √7


4. Hay infinitos irracionales entre cualquier par de racionales

Como entre 1.1 y 1.2


##### 5. No se puede representar exactamente en computadoras

Siempre se redondean (punto flotante) 


Relación con otras clases numéricas:

```
N c Z c Q c R = Q u I 

```

Los irracionales II son la parte de los números reales que no está en los racionales


Obtener número irracional:

1. Si su decimal nunca termina y nunca se repite (visual o por análisis).

2. Si al calcular raíces cuadradas o logaritmos, el resultado no se puede expresar como fracción.

3. Si es una constante matemática conocida como irracional.

```
import math

print(math.sqrt(2))      # 1.4142135623730951
print(math.pi)           # 3.141592653589793
print(math.e)            # 2.718281828459045

```


Útilidad:

| Aplicación                    | Utilidad                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------- |
| Geometría Euclídea        	| Raíces cuadradas: longitudes, diagonales, distancias                                  |
| Física e ingeniería       	| Constantes como $\pi, e, \sqrt{2}$ están en casi todo: ondas, probabilidades, energía |
| Cálculo numérico          	| Optimización, integrales, exponenciales                                               |
| Estética y diseño         	| El número áureo $\phi$                                                                |
| Criptografía y algoritmos 	| Algunas irracionalidades permiten secuencias impredecibles                            |


Diferencias:

| Comparación                     | Racional          | Irracional                   |
| ------------------------------- | ----------------- | ---------------------------- |
| Forma fraccionaria              | Sí: a/b 		  | No                           |
| Decimal termina o se repite     | Sí                | No                           |
| Representación exacta en código | Posible           | No (solo aproximación)       |
| Cardinalidad                    | Contable          | Incontable (más "numerosos") |


Ej: 

```
import math

x = math.sqrt(2)
print(f"√2 ≈ {x:.20f}")

```

Out: √2 ≈ 1.41421356237309514547

Se sigue extendiendo sin repetir.


El descubrimiento de que 2 no era racional conmocionó a los pitagóricos.

##### Se considera uno de los primeros choques entre intuición geométrica y formalismo algebraico.

Según leyendas, Hipaso fue castigado por revelar esto.

 
Rs:

| Atributo              | Números Irracionales                       |
| --------------------- | ------------------------------------------ |
| Fracción posible      | No                                         |
| Decimal               | Infinito no periódico                      |
| Ejemplos típicos      | $\pi, e, \sqrt{2}$                         |
| Uso                   | Matemática avanzada, ciencias, computación |
| Representación exacta | No (solo aproximación en computadoras)     |


#### Limitación fundamental de las computadoras

Cuando trabajan con números reales (especialmente irracionales).

##### Un irracional como √2, π o e tiene infinitos decimales no periódicos.

##### Una computadora solo puede almacenar una cantidad finita de bits para representar números

Por eso no puede guardar todos los decimales, solo una aproximación.


Representación en computadoras: 

Usan un estándar llamado IEEE 754 (para punto flotante).

Los números en punto flotante se representan como:

```
número = signo x mantisa x 2^exponente
```

1. 32 bits: float → ~7 dígitos decimales de precisión

2. 64 bits: double → ~15-17 dígitos de precisión

Pero más allá de eso, el número se redondea (se trunca o aproxima).

```
import math
print(math.sqrt(2))  # Resultado

```

1.4142135623730951


```

x = math.sqrt(2)
print(f"√2 ≈ {x:.20f}")

```

1.41421356237309514547


En realidad:

√2 = 1.414213562373095048801688724209...

El valor mostrado está truncado a 17 cifras.

Lo mismo sucede con π, e, φ, etc.


Precisión: 

##### Para representar infinita información decimal necesitarías memoria infinita — y eso es imposible

incluso algunos números racionales simples como 1/3 no pueden representarse exactamente en binario:

```
print(1/3)  # Muestra 0.3333333333333333

```

En binario:

##### 1/3 = 0.01010101010101… (infinito periódico) → también debe ser truncado.


Consecuencias prácticas:

1. Errores de redondeo:

```
print(0.1 + 0.2 == 0.3)  # FALSO

```

Porque:

```
print(0.1 + 0.2)  # 0.30000000000000004

```


2. Comparaciones inexactas: nunca compares números flotantes con ==.

Mejor:

```
abs(x - y) < 1e-9

```


3. Acumulación de error: 

En algoritmos que hacen miles de cálculos, los pequeños errores se suman.


4. Limita precisión matemática: 

No puedes usar Python (ni ninguna computadora estándar) para demostrar propiedades que requieran precisión infinita


Cuando se requiera más precisión:

| Requisito                          | Solución en Python                       |
| ---------------------------------- | ---------------------------------------- |
| Más dígitos (precisión arbitraria) | `decimal.Decimal` o `fractions.Fraction` |
| Raíces exactas / símbolos          | Librerías simbólicas como `sympy`        |


Con decimal:

```
from decimal import Decimal, getcontext

getcontext().prec = 50  # Hasta 50 cifras decimales
x = Decimal(2).sqrt()
print(x)

```

1.41421356237309504880168872420969807856967187537694


#### Valor limite 32 y 64 bits

No depende de la RAM, sino de: 

1. Cantidad de bits asignados a representar el número

2. Formato estándar IEEE 754, que define:

Signo (1 bit)

Exponente (8 bits para 32-bit, 11 bits para 64-bit)

Mantisa o significando (23 bits para 32-bit, 52 bits para 64-bit)


Límites en IEEE 754 (estándar de punto flotante):

| Tipo    | Nombre técnico    | Rango aproximado | Precisión decimal |
| ------- | ----------------- | ---------------- | ----------------- |
| 32 bits | `float` (C/Java)  | ±3.4 × 10³⁸      | \~7 dígitos       |
| 64 bits | `double` (Python) | ±1.8 × 10³⁰⁸     | \~16-17 dígitos   |

Si vas más allá de esos valores, ocurre overflow: se representa como inf.


Python: 

Usa internamente 64 bits (IEEE 754 double) para sus float.

```
print(1.79e308)  # OK, aún dentro del rango
print(1.8e308)   # Overflow → inf

```

Out: 
1.79e+308
inf


Limite de RAM 

Si usás una librería como decimal (que permite más precisión decimal), el límite ya no es el hardware, sino:

1. Tu memoria RAM

2. Tiempo de cómputo


```
from decimal import Decimal, getcontext
getcontext().prec = 1000000  # 1 millón de cifras decimales

x = Decimal(2).sqrt()  # √2 con 1 millón de cifras

```

Puede ralentizar o bloquear el sistema si no tenés suficiente RAM o CPU disponible, pero no explota en el sentido de overflow.


Rs:

| Formato           | Bits       | Rango numérico       | Precisión            | Comentarios                   |
| ----------------- | ---------- | -------------------- | -------------------- | ----------------------------- |
| `float`           | 32         | ±3.4 × 10³⁸          | \~7 decimales        | Muy limitado                  |
| `double`          | 64         | ±1.8 × 10³⁰⁸         | \~16-17 decimales    | Lo que usa Python por defecto |
| `decimal.Decimal` | Arbitrario | Depende de RAM y CPU | Precisión controlada | Ideal para ciencia o finanzas |


#### Consumo de memoria 

##### Uso de memoria (x) vs Precisión decimal con decimal.Decimal (x)

en bytes vs cifras decimales de precisión

5000 vs 10000 -> / O(n), O(n^2)...

50000 vs 50000

(0.005) mb
(0.05)


Comportamiento: 

A bajas precisiones (10, 100), el uso de memoria es bajo.

A medida que exigís más precisión (como 50,000 cifras decimales), el uso crece rápidamente.

La relación es aproximadamente lineal, pero cada cifra adicional también implica más costo de cómputo.


Python puede manejar altas precisiones arbitrarias, pero el costo en RAM y tiempo se vuelve significativo.

Si hacés cálculos científicos con muchos dígitos (cripto, finanzas, física de alta precisión), este tipo de información es clave para balancear exactitud y eficiencia.


#### Precisión infinita en Matemáticas

##### Se refiere a trabajar con valores exactos, sin redondeos, truncamientos ni errores de representación

Sino que los números se representan y manipulan de manera simbólica o exacta, sin perder exactitud.

Ej: 

1. El número 1/3​ se mantiene como fracción, no como 0.3333...

2. √2 se deja expresado como raíz cuadrada, no como 1.4142...

3. π, e, ln(2) se tratan como símbolos exactos, no como aproximaciones


Lograr precisión infinita

1. Representaciones simbólicas (no numéricas)

Los objetos matemáticos se mantienen en forma abstracta o algebraica:

| Número         | Representación precisa | Comentario             |
| -------------- | ---------------------- | ---------------------- |
| 22/7 			 | fracción               | exacta, no decimal     |
| √5   			 | símbolo radical        | exacto, no racional    |
| π   	         | constante              | tratada simbólicamente |
| ln(3)          | logaritmo              | exacto, no evaluado    |


2. Usan estructuras como:

Fracciones racionales: a/b​

Números algebraicos: raíces de polinomios

Sistemas de álgebra computacional: como Mathematica, SymPy, Maple


Necesidad de precisión matemática:

Para una exactitud completa

1. Demostraciones formales:

No podés depender de redondeos para demostrar un teorema


2. Álgebra simbólica / simplificación:

Como resolver x^2 - 2 = 0 => x = +-√2


3. Cálculos con fracciones:

1/3 + 1/6 = 1/2, sin Convertir a decimal


4. Geometría exacta:

Medidas que involucran raíces, como diagonales en polígonos regulares


5. Teoría de números, criptografía, álgebra abstracta:

Donde cada bit de precisión puede afectar la validez


Programación:

La mayoría de los lenguajes usan precisión finita (floats). 

Pero hay alternativas:

Python tiene:

1. fractions.Fraction → trabaja con racionales exactos

2. decimal.Decimal → alta precisión decimal controlada

3. sympy → algebra simbólica como un matemático

```
from fractions import Fraction

a = Fraction(1, 3)
b = Fraction(1, 6)
print(a + b)  # Resultado exacto: 1/2

```
 
La precisión infinita no implica infinitos recursos, sino trabajar con representaciones exactas y no aproximadas.

Es esencial en la matemática pura, y muy útil en campos como simbología computacional, criptografía o teoría de números.

En la práctica computacional, la precisión infinita se emula con librerías que operan con fracciones, radicales, expresiones simbólicas o enteros arbitrarios


#### No precisión infinita 

1. En Matemáticas:

Cuando trabajamos con modelos aproximados del mundo real, la precisión infinita no es útil ni necesaria porque:

Los datos del mundo real ya son imprecisos (mediciones, sensores, estadísticas).

El objetivo es una respuesta útil y razonable, no exacta.


Ej: 

Ingeniería (longitudes, cargas)

Física numérica (simulaciones)

Estadística (medias, varianzas)

Economía (modelos predictivos)


2. Programación Numérica

La mayoría del software no necesita representar números simbólicamente. 

En cambio, se usa precisión finita (floats o doubles) por estas razones:

| Ventaja            | Por qué es suficiente                             |
| ------------------ | ------------------------------------------------- |
| Rapidez            | Operaciones en hardware son rápidas y optimizadas |
| Eficiencia         | Consume menos memoria y tiempo                    |
| Error controlado   | En muchos algoritmos, se puede tolerar error ≤ ε  |
| Redondeo aceptable | En gráficos, ML, estadísticas: 1.00001 ≈ 1        |

```
x = 1.0
y = 3.0
print(x / y)  # → 0.3333333333333333 (suficientemente preciso)

```


Dónde la precisión infinita es innecesaria o contraproducente

| Situación                  | Por qué evitarla                                  |
| -------------------------- | ------------------------------------------------- |
| Gráficos o visualizaciones | Un pixel no necesita 50 cifras de π               |
| Machine Learning           | Modelos toleran e incluso requieren ruido         |
| Juegos / Simulaciones      | Se privilegia fluidez y aproximación visual       |
| Big Data                   | Costo de cómputo se dispara con exactitud extrema |
| Sistemas embebidos         | Tienen memoria y CPU limitados                    |


Usos: 

Usás precisión finita cuando:

1. Hay tolerancia aceptable al error (por ejemplo, 0.001)

2. Estás optimizando velocidad o memoria

3. Estás en una etapa exploratoria (prototipo, análisis)


Y elegís precisión infinita cuando:

1. Se requiere exactitud matemática

2. Los resultados alimentan otra prueba simbólica

3. Hay riesgo de acumulación de error en pasos sucesivos


Estrategia:

Define el dominio del problema: ¿es físico, abstracto, lógico?

Mide la tolerancia al error: ¿cuánto importa una diferencia de 0.00001?

Evalúa el costo: ¿vale la pena gastar 100x más tiempo por 5 cifras más?


#### Intuición vs Formalismo

Intuición:

Capacidad humana de razonar, visualizar o anticipar propiedades matemáticas sin necesariamente formalizarlas de inmediato.


Es geometría visual, sentido numérico, lógica natural.

Los griegos antiguos confiaban mucho en la intuición (por ejemplo, el teorema de Pitágoras era visible).

"La intuición guía, pero no prueba."


Formalismo: 

Marco moderno y riguroso de las matemáticas: sistemas axiomáticos, pruebas lógicas, definiciones exactas.


Aparece con Dedekind, Cantor, Hilbert y el desarrollo de los números reales, teoría de conjuntos, etc.

Toda noción informal es reemplazada por una construcción lógica.

La precisión formal prueba, pero no siempre guía.


intuición vs. precisión infinita

| Ejemplo                                          | Choque                                                                                             |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| √2 no racional                           		   | Los pitagóricos colapsan al descubrirlo (rompe su intuición)                                       |
| Infinitésimos                                    | Útiles intuitivamente en cálculo, pero no tenían base rigurosa (hasta que surgió el análisis real) |
| Paradojas del infinito (Cantor)                  | Chocan con la intuición finita humana                                                              |
| Geometría no euclidiana                          | Contra la "única geometría posible" que intuía Euclides                                            |
| Funciones discontinuas                           | Existían pero eran “patológicas” para la intuición del siglo XIX                                   |
| Inteligencia artificial simbólica vs estadística | Un reflejo moderno del mismo dilema                                                                |


Actualidad: 

| Intuición matemática                      | Precisión infinita               |
| ----------------------------------------- | -------------------------------- |
| Genera conjeturas, ideas, visualizaciones | Las valida o refuta              |
| Inspira descubrimientos                   | Estructura conocimiento riguroso |
| Ayuda a enseñar y comunicar               | Fundamenta la verdad matemática  |


Matemáticos como Terence Tao, Cédric Villani o Maryam Mirzakhani combinan ambos enfoques.

En investigación: se intuye, se formaliza, se demuestra.

En enseñanza: primero la intuición, luego el rigor.


#### Descubrimientos impulsados por intuición matemática

Fueron guiados por imaginación, visualización o experimentación informal antes de existir una teoría formal detrás

| Descubrimiento                              | Intuición detrás                                                          |
| ------------------------------------------- | ------------------------------------------------------------------------- |
| Geometría de Euclides (≈ 300 a.C.)      	  | Espacio como lo percibimos: rectas, puntos, triángulos                    |
| Teorema de Pitágoras                 		  | Relación visual entre lados de triángulos rectángulos                     |
| Cálculo infinitesimal (Newton, Leibniz) 	  | Movimiento y cambio continuo: áreas, velocidades                          |
| Números complejos                           | Raíz de -1 parecía absurda, pero 'funcionaba' en soluciones de ecuaciones |
| Cintas de Möbius y superficies          	  | Intuiciones topológicas que desafiaban la geometría ordinaria             |
| Fractales y geometría caótica          	  | Visualización antes que definición formal (Mandelbrot)                    |
| Teoría de grafos (Euler)                	  | Caminos en puentes de Königsberg: problema visual-resolutivo              |
| Conjetura de Goldbach                   	  | Simple observación empírica sobre suma de primos                          |
| Números primos gemelos                 	  | Basada en patrones observados, aún sin demostración formal                |

En muchos casos, la intuición encontró algo valioso antes de que pudiera probarse.


#### Descubrimientos impulsados

Estos avances solo fueron posibles gracias a una estructura lógica precisa, muchas veces en contra de la intuición.

| Descubrimiento                                        | Por qué fue formalismo puro                                             |
| ----------------------------------------------------- | ----------------------------------------------------------------------- |
|   Teoría de conjuntos (Cantor)                        | Infinito tratado con precisión y jerarquías                             |
|   Números reales (Dedekind, Weierstrass)              | Se definieron con cortes, sucesiones, sin depender de intuición         |
|   Teorema de Gödel (incompletitud)                    | Límite de la lógica misma; prueba puramente formal                      |
|   Construcción axiomática de los números              | Desde 0 → naturales → enteros → racionales → reales → complejos         |
|   Axiomas de Zermelo-Fraenkel (ZF, ZFC)               | Base para toda matemática moderna, evitando paradojas                   |
|   Topología general                                   | Espacios sin necesidad de coordenadas ni medida                         |
|   Teoremas de existencia (como el de Banach-Tarski)   | Contraintuitivos, pero formalmente válidos                              |
|   Teoremas de la computabilidad (Turing, Church)      | Qué puede o no puede hacer una máquina matemática                       |
|   Demostraciones asistidas por computadoras         	| Cierre formal de conjeturas largamente intuidas (ej. 4 colores, Kepler) |

Sin precisión formal, muchos de estos no solo serían imposibles de probar: ni siquiera serían comprensibles


| Intuición matemática         | Formalismo matemático           |
| ---------------------------- | ------------------------------- |
| Descubre, explora, visualiza | Define, prueba, garantiza       |
| Puede errar, pero inspira    | Puede ser árido, pero es sólido |
| Ideal para hipótesis         | Ideal para teoremas             |


Ej: 

Conjetura de Fermat:

Intuición: Fermat la escribe en 1637 como una observación "intuitiva".

Formalismo: Tarda más de 350 años en probarse, finalmente con herramientas de aritmética algebraica, curvas elípticas y teoría de Galois (Wiles, 1994).


### Números Reales

Son todos aquellos que pueden ubicarse en una línea continua llamada recta numérica.

1. Números racionales: pueden escribirse como fracción de enteros.
Ej: ½, −4, 0.75, 8

2. Números irracionales: no pueden escribirse como fracción exacta.
Ej: √2, π, e


Conjunto: 

```
R = Q u i
```


Propiedades algebraicas:

1. Cerradura

Suma, resta, multiplicación y división (≠0) de reales da reales

Ej: √2 + π ∈ ℝ
 
 
2. Asociativa

(a + b) + c = a + (b + c)

Ej: (1.2 + 3.4) + 5.6 = 1.2 + (3.4 + 5.6)


3. Conmutativa

a + b = b + a

Ej: 2 + √2 = √2 + 2


4. Distributiva

a(b + c) = ab + ac

Ej: 2(3 + π) = 6 + 2π


5. Identidad

0 y 1 son los elementos neutros

Ej: a + 0 = a, a · 1 = a


6. Inverso aditivo

a + (−a) = 0

Ej: −√5 + √5 = 0


7. Inverso multiplicativo

a · 1/a = 1 (a ≠ 0)

Ej: 2 · ½ = 1


Propiedades de orden:

1. Totalmente ordenados

Siempre se puede comparar dos reales: a < b, a = b, o a > b


2. Densidad

Entre dos reales distintos siempre hay otro real


3. Continuidad

No hay "saltos" en ℝ: llena completamente la recta numérica


Propiedad de completitud (única de R):

##### Todo conjunto no vacío de reales acotado superiormente tiene un supremo (mínimo de los mayores).

Esto no ocurre en los racionales.

Ej: El conjunto de reales x tales que x^2 < 2 tiene supremo √2, que no es racional


Utilidad:

Matemáticas:

Geometría: Coordenadas, longitudes reales, ángulos

Cálculo: Límites, derivadas, integrales trabajan sobre ℝ

Álgebra: Polinomios con coeficientes reales

Análisis: Continuidad, convergencia de sucesiones

Probabilidad: Distribuciones continuas, densidades


Programación:

Aunque las computadoras no pueden representar todos los reales, los números flotantes (float, double) simulan ℝ con precisión limitada.

Gráficos: Posición, escala, rotación en 2D/3D

Física / Simulación: Movimiento, velocidad, fuerzas

Finanzas: Cálculo de intereses, porcentajes

Machine Learning: Ponderaciones, gradientes, probabilidades

Juegos: Coordenadas, animaciones, colisiones


Comparación con otros conjuntos:

| Conjunto       | ¿Incluye negativos? | ¿Decimales infinitos? | ¿Raíces? | ¿π? |
| -------------- | ------------------- | --------------------- | -------- | --- |
| ℕ (naturales)  | ❌                   | ❌                     | ❌        | ❌   |
| ℤ (enteros)    | ✅                   | ❌                     | ❌        | ❌   |
| ℚ (racionales) | ✅                   | Finito o periódico    | Algunas  | ❌   |
| **ℝ (reales)** | ✅                   | ✅                     | ✅        | ✅   |


Los números reales son la base de casi toda la matemática aplicada y están profundamente conectados con la intuición de magnitud, continuidad y medida

En programación, usamos una versión aproximada de ℝ, pero los conceptos teóricos siguen siendo fundamentales


### Números Complejos

Es una expresión de la forma:

```
z = a + bi
```

1. a es la parte real (∈ ℝ)

2. b es la parte imaginaria (∈ ℝ)

3. i es la unidad imaginaria, definida como i^2 = −1


Notación estandar: 

```
ℝ = reales

ℂ = complejos

ℝ ⊂ ℂ
```

Ej: 

1. 2 + 3i (complejo general)

2. 0 + 5i (puro imaginario)

3. 7 + 0i =7 (número real dentro de ℂ)


Propiedades: 

Los complejos extienden las propiedades de los reales, con algunas nuevas.


Propiedades algebraicas:

1. Cerradura

Suma, resta, multiplicación de complejos → complejos

Ej: (1+i) + (2−i) = 3 


2. Asociativa

(z1​ + z2​) +z3​ = z1 ​+ (z2​ + z3​)


3. Conmutativa

z1 ​+ z2 ​= z2 ​+ z1​


4. Distributiva	

a(b+c) = ab + ac


5. Inversos

Existe −z tal que z+(−z) = 0


6. Identidad

0 y 1 como neutros


Forma conjugada:

Si z = a + bi, entonces el conjugado es

```
-
z = a − bi
```

Propiedad:

```
z ⋅ z‾ = a^2 + b^2 = ∣z∣^2
```


Módulo (norma) de un complejo:

```
∣z∣ = √a^2+b^2
```

Representa su "longitud" desde el origen en el plano complejo.


Forma polar (trigonométrica):

```
z = r(cosθ + i sinθ) o z = re^iθ
```

1. r=∣z∣ (módulo)

2. θ = argumento (ángulo)

Esta forma es muy útil para multiplicar y dividir complejos y trabajar con potencias y raíces.


Utilidad:

Matemáticas:

Álgebra: Resolver ecuaciones que no tienen solución real (ej x^2 + 1 = 0)

Análisis complejo: Estudio de funciones complejas (base del cálculo complejo)

Geometría: Representación de puntos y rotaciones en el plano

Polinomios: Teorema fundamental del álgebra: `todo polinomio de grado n tiene n raíces en ℂ`

Fractales: Conjuntos como Mandelbrot, Julia, etc.

Números cuaterniónicos: Generalización en dimensión superior


Programación, Ingeniería y Física:

Electricidad: Impedancia en circuitos (R + jX)

Mecánica cuántica: Amplitudes de probabilidad (números complejos)

Señales: Análisis de señales en frecuencia con FFT

Gráficos: Transformaciones y fractales complejos

Audio: Procesamiento de ondas

Simulaciones: Oscilaciones, dinámica armónica


En python:

```
z = complex(3, 4)
print(z)          # (3+4j)
print(abs(z))     # 5.0 → módulo
print(z.conjugate())  # (3-4j)
```

Los números complejos son una extensión natural de los reales, que permiten resolver ecuaciones, modelar oscilaciones, analizar señales, y mucho más

##### Son esenciales en campos como la ingeniería eléctrica, la mecánica cuántica, el procesamiento de imágenes y la teoría matemática más avanzada.


### Fractales

Un fractál es una figura geométrica

1. Exhibe autosemejanza: partes del todo se parecen a la figura completa.

2. Tiene detalle infinito: al hacer zoom, sigue mostrando estructura compleja.

3. Tiene una dimensión fractal (no entera), que mide su grado de complejidad. 

##### Formalmente, es un objeto cuya dimensión de Hausdorff es mayor que su dimensión topológica.


Ejemplos: 

1. Conjuntos matemáticos:

Conjunto de Mandelbrot

Conjunto de Julia

Triángulo de Sierpiński

Copo de Koch

Curva de Hilbert

Árbol de Pitágoras


2. Fractales naturales:

Brócoli romanesco

Costas geográficas

Sistemas circulatorios

Rayos

Nubes


Propiedades:

1. Autosemejanza

Las partes reproducen la forma global, exacta o aproximadamente


2. Dimensión fractal

Puede ser no entera (ej: entre 1D y 2D)


3. Generación recursiva

Se crean mediante reglas que se aplican repetidamente


4. Estructura infinita

Pueden tener detalles a cualquier escala


5. Escalabilidad

Se ven igual sin importar la escala de observación


Utilidad:

Matemáticas y Ciencia:

Geometría fractal: estudia objetos con estructura repetitiva a diferentes escalas.

Teoría del caos: fractales surgen en sistemas dinámicos caóticos.

Modelado de lo irregular: permiten representar fenómenos no lineales ni suaves


Tecnología y Programación:

Compresión de imágenes: Usan autosemejanza para ahorrar espacio

Gráficos por computadora: Creación de paisajes, nubes, fuego, árboles

Simulaciones físicas: Rayos, turbulencia, difusión

Antenas fractales: Compactas y de alto rendimiento por sus propiedades geométricas

Análisis financiero: Modelado de series temporales con comportamiento caótico

Redes neuronales: Algunas estructuras de aprendizaje tienen patrones fractales


Naturaleza y Biología:

Modelado de crecimiento de plantas y ramificaciones

Descripción de estructuras pulmonares, vasos sanguíneos

Formación de copos de nieve, corales, cristales


#### Código: Triángulo de Sierpiński (recursivo)

```
import turtle

def sierpinski(length, depth):
    if depth == 0:
        for _ in range(3):
            turtle.forward(length)
            turtle.left(120)
    else:
        for _ in range(3):
            sierpinski(length/2, depth-1)
            turtle.forward(length)
            turtle.left(120)

turtle.speed(0)
sierpinski(200, 4)
turtle.done()

```


Dimensión fractal (ejemplo):

El Copo de Koch tiene dimensión:

```
D = log(4)/log(3) ≈ 1.2619
```

Más complejo que una línea, menos que una superficie plana.


Los fractales son una poderosa forma de modelar lo irregular, complejo y natural, tanto en matemáticas como en tecnología.

Son infinitamente ricos en estructura, y su aparición en la naturaleza sugiere que la complejidad puede emerger de reglas simples.


### Teoría del Caos

La teoría del caos estudia sistemas dinámicos deterministas que, sin embargo, presentan un comportamiento altamente impredecible debido a su sensibilidad extrema a las condiciones iniciales.

Determinista significa que no hay azar: las reglas están fijas. Pero un pequeño cambio en el punto de partida puede producir resultados completamente diferentes.

Esto se conoce como el efecto mariposa.


Características de los sistemas caóticos:

1. Determinismo:

No hay azar, todo está gobernado por reglas matemáticas


2. Sensibilidad a condiciones iniciales:

Cambios ínfimos → resultados muy diferentes


3. No linealidad:

Las ecuaciones que lo rigen no tienen soluciones proporcionales


4. Atractores extraños: 

Estructuras a las que el sistema tiende, que son fractales


5. A largo plazo, impredecible: 

No se puede predecir el comportamiento exacto tras cierto tiempo


Impacto en Matemáticas:

##### 1. La teoría del caos rompió con la idea clásica de que sistemas simples tienen soluciones simples.

2. Generó nuevos campos como:

Dinámica no lineal

Sistemas dinámicos

Fractales

Geometría caótica


3. Usó herramientas como:

Ecuaciones diferenciales

Mapas discretos

Espacios de fases

Análisis de estabilidad


Impacto en Computación:

1. Simulación de sistemas físicos: 

Clima, fluidos, poblaciones


2. Criptografía: 

Uso de caos determinista para generar claves impredecibles


3. Generación de fractales:

Algoritmos caóticos generan imágenes y estructuras fractales


4. Machine learning:

Estudio de sistemas dinámicos en redes neuronales


5. Arte generativo:

Imágenes caóticas, evolución visual impredecible


Caos, Fractales y Computación:

1. Caos y Fractales

Muchos sistemas caóticos tienen atractores extraños, que son fractales.
Ej: el atractor de Lorenz, el conjunto de Julia y el conjunto de Mandelbrot.

El caos genera estructuras de autosemejanza: patrones que se repiten a diferentes escalas → esto define la geometría fractal.

Los fractales permiten visualizar el comportamiento del caos: lo complejo emerge de lo simple


2. Caos y Computación

Simular sistemas caóticos requiere:

Precisión numérica elevada

Métodos iterativos (mapas, bucles)

Control de errores de redondeo


Pero… también se usa caos como herramienta:

Para compresión de datos (fractal + predictivo)

Para crear sistemas robustos, como en algoritmos genéticos, donde pequeñas mutaciones pueden alterar significativamente el resultado (caos funcional)

        
Fractales en Computación:

Computar fractales requiere algoritmos recursivos o iterativos que aplican reglas simples.

Su naturaleza auto-replicante los hace ideales para:

Gráficos por computadora

Compresión

Simulación de estructuras naturales

Estructuras de datos no lineales


Conjunto de Mandelbrot:

Es un fractal.

Es generado por un sistema dinámico complejo (la iteración de z = z² + c).

Tiene propiedades caóticas: puntos muy cercanos generan trayectorias muy distintas

Visualmente tiene:

Autosemejanza

Infinito detalle

Comportamiento impredecible al variar c

##### Es uno de los ejemplos más emblemáticos donde fractal, caos y computación convergen.


La teoría del caos revela que incluso los sistemas deterministas simples pueden generar comportamientos impredecibles y ricos.

Los fractales son las “huellas” visibles del caos.

La computación permite explorar estas estructuras que la mente no podría visualizar ni manejar manualmente.

Esta triada (caos, fractales, computación) forma una de las áreas más fascinantes y profundas de la matemática contemporánea, con múltiples aplicaciones prácticas.

    
### Sistemas deterministas simples

Un sistema determinista es aquel en el que el estado futuro está completamente determinado por el estado presente y unas reglas fijas.

Un sistema determinista simple es uno con pocas variables y reglas matemáticas claras y concisas, muchas veces lineales o con iteraciones simples.

##### No hay azar: si partís del mismo estado inicial y aplicás las mismas reglas, el resultado será siempre el mismo.

Ej:

| Sistema                                    | Regla                |
| ------------------------------------------ | -------------------- |
| Movimiento de un péndulo ideal             | F = -kx              |
| Crecimiento poblacional (modelo logístico) | xₙ₊₁ = r·xₙ·(1 - xₙ) |
| Suma acumulativa                           | xₙ = xₙ₋₁ + 1        |
| Iteración de funciones                     | zₙ₊₁ = zₙ² + c       |


| Propiedad                        | Descripción                                                                          |
| -------------------------------- | ------------------------------------------------------------------------------------ |
##### | Determinismo		               | No hay incertidumbre. Si conocés el presente, podés predecir el futuro.              |
| Reglas fijas      	           | Las ecuaciones o algoritmos que rigen el sistema no cambian con el tiempo.           |
| Simples en forma      	       | Las reglas son matemáticamente sencillas (pocas operaciones, funciones elementales). |
| Reproducibilidad          	   | Siempre que repitas las mismas condiciones, obtenés el mismo resultado.              |
| No necesariamente predecible 	   | Algunos pueden mostrar **caos** a pesar de ser simples (ej. el mapa logístico).      |


En Matemática:

Permiten estudiar patrones emergentes desde reglas básicas.

Fundamento para:

Teoría de sistemas dinámicos

Análisis de estabilidad

Fractales

Teoría del caos


Computación:

Son la base de simulaciones: como sus reglas son claras, son fáciles de implementar.

Ejemplos:

Simulación de sistemas físicos simples

Algoritmos recursivos o iterativos

Generación de estructuras fractales

Desarrollo de criptografía determinista


En Ciencia:

Se usan como modelos ideales:

En física (péndulos, órbitas)

En biología (modelos poblacionales)

En economía (sistemas de oferta-demanda con pocas variables)


Lo impactante es que sistemas deterministas muy simples pueden generar comportamientos caóticos, difíciles de prever a largo plazo.

##### Esto desafió el paradigma clásico de que “simple significa predecible”.


#### Código

```
def logistica(x0, r, pasos):
    x = x0
    for i in range(pasos):
        x = r * x * (1 - x)
        print(f"Paso {i+1}: {x:.5f}")

```

Con solo la regla x = r·x·(1 - x)

Al cambiar levemente x0 o r, se producen trayectorias completamente distintas → ¡caos!


Rs:

Un sistema determinista simple es como una caja negra con pocas instrucciones claras, pero de la que pueden surgir:

Comportamientos complejos

Patrones inesperados

Fractales

Caos

Son fundamentales para comprender cómo la complejidad puede emerger de lo simple, y por qué la matemática y la computación pueden modelar —aunque no siempre predecir— la realidad.


#### Redondeo 

##### Su uso indebido puede llevar a errores acumulativos, resultados engañosos o pérdidas de precisión críticas.

1. Recomendado: 

Al presentar resultados al usuario:

En informes, gráficos o visualizaciones.

Para mejorar la legibilidad o comunicación

```
round(3.1415926535, 2)  # → 3.14

```

Solo importa una precisión visual.


En cálculos financieros con unidades monetarias:

Representar valores en centavos o una moneda fija.

```
round(total_amount, 2)

```

Una operación como 23.555 + 10.005 en dólares no puede exceder 2 decimales.


Comparar valores con tolerancia

Cuando dos números no necesitan coincidencia exacta, sino una aproximación aceptable.
    
```
abs(a - b) < 1e-9  # tolerancia de error

``` 
    

Para evitar ruido numérico:

En datos experimentales o sensores con mucha fluctuación.

Redondear puede limpiar el dato sin afectar su significado práctico.



En límites de almacenamiento o impresión

Como en dispositivos con poca memoria o interfaces de usuario limitadas.


2. No redondear

Durante cálculos intermedios

Nunca redondees en medio de una operación larga

```
result = round(a + b, 2) * c  # error acumulado

```

Redondear solo al final del cálculo para mantener la precisión.


En algoritmos numéricos sensibles:

Como en integración numérica, simulaciones físicas, machine learning, etc.

Pequeños errores acumulados pueden llevar a resultados muy alejados del correcto.


Al almacenar datos científicos o de sensores:

El redondeo puede hacer que pierdas información significativa para análisis futuros
    

Cuando se requiere exactitud estructural:

Ejemplo: coordenadas de vértices, fechas, claves, identificadores únicos.

Redondear puede hacer que dos cosas distintas parezcan iguales, o viceversa.


En comparaciones lógicas o condiciones críticas

`if round(a, 2) == round(b, 2)`: puede fallar por redondeos distintos.

Mejor: `abs(a - b) < tolerancia`
    
    
En práctica:

| Situación                      | ¿Redondear? | Notas                          |
| ------------------------------ | ----------- | ------------------------------ |
| Visualizar al usuario          | ✅           | Usa `round()` o `format()`     |
| Guardar en base de datos       | ❌           | Guarda con precisión total     |
| Cálculos financieros           | ✅           | Fija a 2 decimales             |
| Comparaciones                  | ⚠️          | Usa tolerancia, no `==`        |
| Calcular físicas o científicas | ❌           | Mantén precisión máxima        |
| Mostrar porcentajes o tasas    | ✅           | 1 o 2 decimales según contexto |


Redondear es una herramienta para la presentación, no para el cálculo.

Aplica al final del proceso, no durante.


#### Precisión infinita en la práctica

Precisión arbitraria en programación

Capacidad de representar números sin límite fijo de dígitos, más allá del estándar de 32 o 64 bits


En matemáticas:

Se trabaja idealmente con infinitos decimales: π, e, √2, fracciones exactas, etc.

El número nunca se trunca


Programación:

Usás tipos como Decimal o Fraction en Python, o BigInteger en Java, para evitar pérdidas de precisión.

El número crece dinámicamente en memoria según lo necesites.


1. Recomendable:

álgebra simbólica o exacta:

Ej: resolver ecuaciones, derivar, simplificar fracciones, trabajar con números racionales exactos.

```
from fractions import Fraction
x = Fraction(1, 3) + Fraction(1, 6)  # resultado exacto: 1/2

```


Cálculos financieros o contables sensibles

Para evitar errores de redondeo acumulativo.

```
from decimal import Decimal
x = Decimal('0.10') + Decimal('0.20')  # 0.30 exacto

```


Pruebas matemáticas formales:

Cuando el objetivo es demostrar o verificar teoremas con software (ej: Lean, Coq).


criptografía o teoría de números:

Se usan enteros enormes (miles de bits), imposibles con enteros estándar.


En algoritmos donde los errores de redondeo destruyen la solución

Ej: cálculo de determinantes pequeños, interpolación polinómica, etc.


Simulaciones de alta precisión científica

Como física cuántica o modelos astronómicos a gran escala.


2. No recomendable:

En procesamiento numérico general o machine learning:

Requiere muchísima más memoria y tiempo.

Los errores son aceptables dentro de un margen (flotante es suficiente).


Videojuegos, simulaciones visuales o gráficos

Precisión flotante (32 o 64 bits) es más que suficiente.

Prioridad: rendimiento en GPU, no exactitud extrema.


Estadísticas y análisis de datos

Se trabaja con aproximaciones y tendencias.

La precisión infinita no cambia la conclusión estadística
    

Dispositivos con recursos limitados (IoT, móviles)

El uso de Decimal o BigInt es muy costoso computacionalmente
    

Cuando el número de cifras significativas ya excede la tolerancia del problema

Si medís la temperatura con 2 decimales, ¿de qué sirve calcular con 30?


En practica:

Usá precisión infinita cuando el resultado intermedio afecta el resultado final de forma crítica o exacta.

Evitala cuando el resultado final puede tolerar errores minúsculos o la velocidad sea prioridad.
    
    
| Escenario                      | ¿Precisión infinita? | Justificación                  |
| ------------------------------ | -------------------- | ------------------------------ |
| Álgebra simbólica              | ✅                    | Requiere exactitud             |
| Cálculo financiero delicado    | ✅                    | Evita errores acumulativos     |
| Entrenamiento de modelos ML    | ❌                    | El error numérico es tolerable |
| Juego 3D                       | ❌                    | Se prioriza rendimiento        |
| Verificación formal matemática | ✅                    | No se admite error             |
| Operaciones bancarias comunes  | ⚠️ Opcional          | Depende del lenguaje y el caso |
| Gráficos o UI de usuario       | ❌                    | No influye en experiencia      |

    

## 2. Par / Impar

1. Par: 

Si es divisible por 2.

Matemáticamente

```
Un número entero n es par ⇔ ∃ un entero k tal que n = 2k.
```


2. Impar: 

No divisible por 2. 

Matemáticamente:

```
Un número entero n es impar ⇔ ∃ un entero k tal que n = 2k + 1.
``` 
    
Todos los enteros son par o impar, nunca ambos, y no hay enteros fuera de esa clasificación.


Props: 

Suma de dos pares: Par
Suma de dos impares: Par - (Ej: 3 + 5 = 8)  
Suma de par + impar: Impar - (Ej: 2 + 3 = 5)
Producto de par × cualquier entero: Par - (Ej: 2 × 5 = 10)
Producto de dos impares: Impar (Ej: 3 × 5 = 15)
Diferencia entre dos pares o dos impares: Par
Diferencia entre par e impar: Impar 


División:

Un número impar nunca puede dividirse exactamente entre 2.

El resultado de n // 2 será truncado si n es impar.
    

Utilidad: 

Matemática:

1. Clasifica los enteros según su congruencia módulo 2.

2. En teoría de números: se usa para distinguir propiedades de divisibilidad.

3. En geometría discreta, se usa en análisis de simetría, conteo y paridad.

 
Álgebra:

1. Los números pares forman un subgrupo aditivo de los enteros.

2. Se usan en la definición de funciones par e impar.

   
Programación:

1. Común en estructuras de control:

Dividir tareas alternadas `if i % 2 == 0`

Alternar colores en filas/columnas

Detectar errores por paridad


2. Algoritmos: 

Detectar patrones (subidas/bajadas alternas)

Optimizar bucles o accesos (saltos pares, etc.)


### Código

```
n = 7
if n % 2 == 0:
    print("Es par")
else:
    print("Es impar")

```


La función de paridad es una de las más fundamentales en matemática discreta.

En electrónica digital, los bits se agrupan por paridad (bit de paridad) para detectar errores de transmisión.

Los números pares e impares generan ciclos alternantes en muchas secuencias matemáticas (como la conjetura de Collatz).


Rs: 

Par e impar no son solo etiquetas: son estructuras fundamentales dentro de los enteros.

Se usan para clasificar, detectar patrones, controlar flujo lógico y analizar propiedades algebraicas.

En programación, es una de las primeras pruebas de condición lógica que aprendemos, y sigue siendo clave en algoritmos, optimización y seguridad


 
## 3. Positivo / Negativo

En el conjunto de los números reales ℝ (o también ℤ y ℚ), los números se clasifican según su signo:

1. Positivos:

Números mayores que cero.

Se denotan como x > 0.


2. Negativos:

Números menores que cero.

Se denotan como x < 0.


3. Cero (0):

No es positivo ni negativo. 

Es neutro en esta clasificación


El conjunto de los números positivos y negativos, junto con el cero, forma los números enteros ℤ si estamos en números sin decimales

O los reales ℝ si consideramos todos los decimales.


Props:

| Propiedad              | Positivo                           | Negativo                              
| ---------------------- | ---------------------------------- | ------------------------------------- |	 
|  Orden            	 | `x > 0`                            | `x < 0`                               |
|  Inverso aditivo   	 | `−x < 0`                           | `−x > 0`                              |
|  Multiplicación    	 | `(+x)·(+y) = +` `(−x)·(−y) = +`    | `(−x)·(+y) = −`                       |
|  División            	 | Igual que multiplicación           | -                                     |
|  Valor absoluto     	 | \`                                 | x                                     |
|  Raíz cuadrada real    | √x existe para `x ≥ 0`             | No definida en ℝ si `x < 0` (sí en ℂ) |


Utilidad: 

Matemáticas:

Análisis y cálculo:

1. Los signos permiten comparar números.

2. Indican dirección en líneas numéricas (izquierda/derecha).

3. Se usan en intervalos (x > 0, x < 0).

4. En derivadas, el signo indica crecimiento (f' > 0) o decrecimiento (f' < 0).


Álgebra:

1. Reglas de signos son esenciales en suma, resta, factorización.

2. Uso en funciones definidas por partes (por ejemplo, valor absoluto, funciones escalón, etc.).
    

Teoría de números y estructuras:

Se utilizan en congruencias, divisibilidad, estructuras simétricas
    

Programación:

1. Condicionales y flujo:

```
if x > 0:
    print("Positivo")
elif x < 0:
    print("Negativo")
else:
    print("Cero")

```


2. Casos comunes:

| Uso                            | Ejemplo                                               |
| ------------------------------ | ----------------------------------------------------- |
| Control de bucles              | Terminar cuando `x < 0`                               |
| Validación de entrada          | Asegurar `x > 0` (por ejemplo, longitud o edad)       |
| Optimización de funciones      | Buscar extremos según `f'(x) > 0` o `< 0`             |
| Dirección en física o gráficos | Movimiento hacia arriba (positivo) o abajo (negativo) |
| Evaluación de diferencias      | `delta = b - a` → signo indica si `b > a` o no        |


### Código:

```
temperatura = -5
if temperatura < 0:
    print("Hace frío")

```


En economía, los valores negativos representan deuda o pérdida.

En física, los vectores tienen dirección: el signo indica sentido.

##### En inteligencia artificial, los signos afectan funciones de activación (como tanh, que oscila entre −1 y 1)


Rs:

Positivos y negativos son fundamentales para expresar dirección, diferencia, comparación y sentido.

En matemáticas, definen el orden en ℝ y propiedades clave del álgebra y análisis.

En programación, son vitales para condicionales, validaciones, movimientos, transformaciones y lógica de negocio



## 4. Múltiplo / Divisor

1. Múltiplo:

Un número a es múltiplo de otro número b si existe un número entero k tal que:

```
a = b⋅k

```

12 es múltiplo de 4, porque 12 = 4⋅3

0 es múltiplo de cualquier número (porque 0 = n⋅0)


Props:

1. Si a es múltiplo de b, entonces b∣a (léase: b divide a).

```
	12 	= 	4	⋅	3
multiplo   Divisor  k (entero que multiplicado b = multiplo) 
```

2. Todo número es múltiplo de sí mismo.

3. El mínimo múltiplo común (mcm) de dos números es el menor número positivo que es múltiplo de ambos.

4. Los múltiplos de un número forman una progresión aritmética:
{0,b,2b,3b,4b,… }


Utilidad:

Matemáticas:

1. Resolver ecuaciones diofánticas.

2. Calcular mcm y sincronizar ciclos (por ejemplo, semáforos).

3. Construcción de series numéricas y congruencias.


Programación:

1. Validar reglas: "si el número es múltiplo de 3…"

2. Problemas clásicos: FizzBuzz, divisibilidad, programación modular.

3. Optimizar tareas repetitivas o agrupadas por múltiplos.


### Código

```
if x % 5 == 0:
    print("Múltiplo de 5")

```


2. Divisor 

Un número b es divisor de otro número a si a es múltiplo de b, es decir, si:

```
a = b⋅k  o equivalentemente:  a mod b = 0
```

Se dice que b divide a, y se escribe:

```
b∣a

```

Ej: 

```
3 divide a 12 porque 12 = 3 ⋅ 4 
Divisor	   Múltiplo 		

Múltiplo |Divisor
12 |3
0	4

Par:
n = 2k
12 = 2⋅6

12 % 2 
0

Impar:
n = 2k + 1
13 = 2⋅6 + 1

13 % 2
1
```


Props: 

1. 1 es divisor de todos los enteros.

2. Todo número es divisor de sí mismo.

3. 0 no divide a ningún número.

4. Un número puede tener muchos divisores.

5. El número de divisores se relaciona con la descomposición en primos.


Utilidad: 

Matemáticas:

1. Teoría de números: factores primos, divisor común máximo (mcd).

2. Cálculo de divisores para optimización de recursos o cargas.

3. Criptografía (RSA se basa en la dificultad de factorizar).


Programación:

1. Verificar condiciones de divisibilidad.

2. Construcción de algoritmos para encontrar factores.

3. Lógica para problemas de juegos, aritmética modular, hashing.
    

### Código divisores

```
def divisores(n):
    return [i for i in range(1, n+1) if n % i == 0]

```


### Ej: Multiplos y divisores para un valor: 

Para a = 12: 

##### 1. Múltiplos: {0,12,24,36,… }: Empieza por si mismo. 

##### 2. Divisores: {1,2,3,4,6,12}: Termina en si mismo.


Relación: 

1. Si a es múltiplo de b:

Entonces b es divisor de a


2. Si b divide a a:

Entonces a es múltiplo de b


3. Dual: 

Uno implica al otro


Competencias y algoritmos

Encontrar el número con más divisores.

Resolver problemas tipo mínimo común múltiplo, máximo común divisor.

Resolver problemas tipo: “sumar todos los múltiplos de 3 o 5 menores a 1000”.



## 5. Número primo / compuesto

### Primo

Uno de los pilares de la teoría de números y tiene aplicaciones profundas tanto en matemáticas puras como en ciencias aplicadas como la criptografía, los algoritmos y la computación

Es un número natural mayor que 1 que solo tiene dos divisores positivos: el 1 y él mismo.

un número p es primo si:

```
Los unicos enteros positivos que dividen a p son 1 y p
```

Ej de primos: 

```
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, …
```

El 1 no se considera primo por definición moderna.


Props: 

1. El único número primo par es el 2. Todos los demás primos son impares.

2. Todo número natural mayor que 1 es:

Primo, o

Producto único de números primos (teorema fundamental de la aritmética).

3. No existe una fórmula cerrada para generar todos los primos.

4. Los primos son infinitos (demostrado por Euclides).

5. Su distribución es irregular, pero sigue patrones estadísticos (ej. Teorema de los números primos).

6. No existe un patrón fijo para saber si un número grande es primo sin probarlo.


Utilidad:

Matemáticas:

1. Descomposición en factores primos:
Todo número puede representarse como producto de primos de manera única.

2. MCD y MCM:
Se calcula usando las potencias comunes o máximas de factores primos.

3. Teoría de números:
Fundamento de muchas ramas como congruencias, funciones aritméticas, criptografía matemática.

4. Criba de Eratóstenes:
Algoritmo clásico para encontrar primos hasta un límite dado.


Programación:

1. Criptografía moderna (RSA, ECC):
Basada en la dificultad de factorizar números grandes en sus factores primos.

2. Algoritmos de hashing:
Usan números primos para minimizar colisiones.

3. Sistemas de conteo o relojes circulares:
Tienen menos interferencia cuando el módulo es primo.

4. Optimización:
Muchos algoritmos de compresión, criptografía y simulación numérica se apoyan en primos.


### Código

```
def es_primo(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            return False
    return True

```


En la práctica:

Se usan listas de primos precalculadas hasta cierto límite (por ejemplo, hasta 10⁶) para optimizar búsquedas.

Hay algoritmos probabilísticos para números enormes (ej. Miller-Rabin).

La búsqueda de primos gigantes es un área activa de investigación (Primos de Mersenne).


Relación con otros conceptos:

1. Compuesto: Número natural con más de 2 divisores

2. Factorización: Descomponer un número en sus factores primos

3. Criba: Método para generar primos (ej. Eratóstenes)

4. Números coprimos: Dos números son coprimos si no comparten primos

5. mcd / mcm: Se calculan a partir de la factorización prima

6. Números primos gemelos: Pares de primos que difieren en 2 (ej. 11 y 13)


### Compuestos

Número natural mayor que 1 que no es primo, es decir, tiene más de dos divisores positivos.

```
Un número n es compuesto si existen enteros positivos a y b 
tales que: 1 < a < n,1 < b  n y a×b=n

```

Ej:

```
4=2×2, 6=2×3, 8=2×4, 9=3×3, 10=2×5

```


Props:

1. Todos los números naturales mayores que 1 son primos o compuestos.

2. Todo número compuesto puede descomponerse como producto de primos (únicamente).

3. Un número compuesto tiene al menos tres divisores (incluyendo 1 y sí mismo).

4. El primer número compuesto es el 4.

5. El número 1 no se considera compuesto (ni primo).


Utilidad:

Matemáticas

1. Complemento de los números primos: ayudan a entender la estructura del conjunto de los naturales.

2. Factorización prima: todo compuesto se puede expresar como producto de primos.

3. Teoría de números: se estudian propiedades como cantidad de divisores, sumas de divisores, funciones multiplicativas, etc.

4. Estudio de patrones aritméticos: como las progresiones o funciones como el totiente de Euler.

    
Programación:

1. Se utilizan como parte del análisis de eficiencia algorítmica (divisibilidad, optimización de ciclos).

2. En criptografía, identificar compuestos es clave para romper o verificar claves (ej. en RSA, donde la seguridad depende de que un número compuesto sea difícil de factorizar).

3. En algoritmos de pruebas de primalidad, detectar compuestos es el objetivo principal.

4. En tareas de compresión y hashing, se evita el uso de compuestos como módulos.


### Código

```
def es_compuesto(n):
    if n <= 3:
        return False
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            return True
    return False

```

Compuesto vs primo

| Propiedad             | Números primos           | Números compuestos      |
| --------------------- | ------------------------ | ----------------------- |
| Divisores             | Solo 1 y él mismo        | Al menos tres divisores |
| Factorización prima   | Son los bloques básicos  | Se pueden descomponer   |
| Detección algorítmica | Más difícil (en general) | Más fácil               |
| Criptografía          | Base de la seguridad     | Objetivo de los ataques |


### Código: separar primos y compuestos de una lista

```
def separar_primos_compuestos(lista):
    primos = []
    compuestos = []
    for n in lista:
        if n > 1:
            if es_compuesto(n):
                compuestos.append(n)
            else:
                primos.append(n)
    return primos, compuestos

numeros = list(range(2, 21))
p, c = separar_primos_compuestos(numeros)
print("Primos:", p)
print("Compuestos:", c)


```


### Par/impar, múltiplo/divisor y primo/compuesto 


1. División: 

```
Busca cociente que es la cantidad de veces que el divisor aparece en el dividendo

dividendo | divisor
resto		cociente

85 | 9
4	9 

9 x 9 (cociente)
r: 81
+	4
r: 85

Resto:
Número que se le resta al dividendo para que sea igual a un determinado número de veces el divisor.
Resto = Dividendo - (Divisor x Cociente)

Tipos:
Exacta: resto 0

Inexacta: !0
Divisor no aparece contenido una cantidad de veces exacta en el dividendo, sino que queda un resto.

```


2. Múltiplos y Divisores:

```
	12 	= 	4	⋅	3
multiplo   Divisor  k (entero que multiplicado b = multiplo) 


3 divide a 12 porque 12 = 3 ⋅ 4 
Divisor	   Múltiplo 		

Múltiplo |Divisor
12 |3
0	4

Par:
n = 2k
12 = 2⋅6

12 % 2 
0

Impar:
n = 2k + 1
13 = 2⋅6 + 1

13 % 2
1
```


3. Par/impar

```
if x % 2 != 0: return 'Impar'
return 'Par'
```

4. Múltiplo/divisor

```
if x % y == 0: return 'x multiplo de y'

```

```
def divisores(n):
    return [i for i in range(1, n+1) if n % i == 0]

```


5. Primo/compuesto

Número de divisores

1. primo

```
def es_primo(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            return False
    return True
```


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



## 6. Consecutivo (e.g. [1, 2, 3] son consecutivos)

Dos o más números consecutivos son aquellos que siguen uno tras otro sin saltos en la secuencia de números naturales o enteros.

una secuencia de k números consecutivos es:

```
{n, n+1, n+2, ..., n+(k-1)}

```

donde n ∈ Z (enteros):

3,4,5

−1,0,1,2

10,11


##### También puede hablarse de consecutivos pares o impares:

Consecutivos pares: 2,4,6 (con salto 2)

Consecutivos impares: 1,3,5


Props:

1. La diferencia entre dos números consecutivos es siempre 1 (o constante en el caso de consecutivos pares/impares).

2. La suma de k números consecutivos tiene una fórmula:

```
sum = k(2n + k -1)/2
```

donde n es el primer número de la secuencia.

3. Si hay una cantidad impar de números consecutivos, su suma siempre es divisible por la cantidad de números.

4. La media aritmética de k consecutivos es igual al valor central (si k es impar) o promedio de los dos del medio (si k es par).


Utilidad:

Matemáticas:

Demostraciones por inducción.

Problemas de divisibilidad.

Resolución de ecuaciones lineales del tipo: “Encuentra tres números consecutivos cuya suma sea 99”.

Series y progresiones aritméticas.

Muy útil en teoría de números y álgebra.


Programación:

1. Verificar si elementos están en orden secuencial (como en cartas o juegos).

2. Detectar rondas o turnos.

3. Aplicar búsqueda o conteo dentro de rangos consecutivos.

4. Generar datos ordenados para simulaciones o pruebas.


### Código: Generar una lista de k números consecutivos a partir de n

```
def numeros_consecutivos(n, k):
    return list(range(n, n + k))

print(numeros_consecutivos(5, 4))  # [5, 6, 7, 8]

```

4 consecutivos (k) a partir de 5 (n). 


### Código: Comprobar si una lista contiene números consecutivos:

```
def son_consecutivos(lista):
    lista_ordenada = sorted(lista)
    return all(lista_ordenada[i+1] - lista_ordenada[i] == 1 for i in range(len(lista_ordenada)-1))

print(son_consecutivos([3, 2, 4]))  # True
print(son_consecutivos([3, 5, 4]))  # False

```

Rs:

| Aspecto         | Detalle                                                         |
| --------------- | --------------------------------------------------------------- |
| Definición      | Números que siguen sin interrupciones                           |
| Propiedad clave | Diferencia constante (usualmente 1)                             |
| En matemáticas  | Resolución de problemas, secuencias, inducción                  |
| En programación | Generación de rangos, validación de secuencia, lógica de juegos |



## 7. Orden ascendente / descendente

Nociones fundamentales tanto en matemáticas como en programación, especialmente en estructuras de datos, algoritmos y visualización

### ascendente

Una secuencia está en orden ascendente si cada elemento es mayor o igual que el anterior.

```
1 ≤ 2 ≤ 2 ≤ 3 ≤ 5
```

### descendente 

Una secuencia está en orden descendente si cada elemento es menor o igual que el anterior.

```
10 ≥ 7 ≥ 4 ≥ 4 ≥ 1
```


##### Se puede distinguir entre estricto y no estricto

1. Estricto: No se permiten repeticiones (ej. 1 < 2 < 3)

2. No estricto: Se permiten repeticiones (ej. 1 ≤ 2 ≤ 2  ≤ 3)


Props:

ascendente:

1. El mínimo está al inicio, el máximo al final.

2. Si los elementos son iguales o crecientes, es ascendente no estricto.

3. Una secuencia ascendente permite búsqueda binaria eficiente.

4. Si es estrictamente creciente, no hay elementos repetidos.


descendente:

1. El máximo está al inicio, el mínimo al final.

2. Se usa para ordenamientos inversos, colas de prioridad, visualización descendente.


Utilidad:

Matemáticas:

1. Comparar y ordenar listas de valores (notas, medidas, etc.).

2. Definir funciones monótonas (crecientes o decrecientes).

3. Trabajar con series numéricas.

4. Facilitar demostraciones sobre extremos, cotas y convergencia.


Programación:

Importante en algoritmos, estructuras de datos y lógica de control:

1. Ordenamiento (con sort, sorted, algoritmos como quicksort o mergesort).

2. Búsqueda binaria (requiere orden ascendente o descendente).

3. Optimización: Encontrar máximos/mínimos rápidamente.

4. Eliminación de duplicados: Secuencias ordenadas facilitan esta operación.


### Código en Python:

#### 1. Verificar si una lista está en orden ascendente o descendente:

```
def es_ascendente(lista):
    return all(lista[i] <= lista[i+1] for i in range(len(lista)-1))

def es_descendente(lista):
    return all(lista[i] >= lista[i+1] for i in range(len(lista)-1))

print(es_ascendente([1, 2, 3, 3, 5]))  # True
print(es_descendente([5, 4, 4, 1]))    # True
```


#### 2. Ordenar una lista:

```
numeros = [3, 1, 4, 2]
print(sorted(numeros))       # [1, 2, 3, 4] (ascendente)
print(sorted(numeros, reverse=True))  # [4, 3, 2, 1] (descendente)

```


#### En estructuras de datos

Arreglos ordenados permiten:

1. Búsqueda binaria (O(log n)).

2. Eliminación de duplicados en O(n).

3. Detección de picos/mesetas en series temporales.


Rs:

| Concepto        | Orden Ascendente                  | Orden Descendente                 |
| --------------- | --------------------------------- | --------------------------------- |
| Definición      | Cada valor ≥ anterior             | Cada valor ≤ anterior             |
| Mínimo/Máximo   | Mínimo al inicio, máximo al final | Máximo al inicio, mínimo al final |
| Aplicaciones    | Búsqueda binaria, estadísticas    | Inversión, colas de prioridad     |
| En programación | `sorted(lista)`, `reverse=True`   | `sorted(lista, reverse=True)`     |



## 8. Valor absoluto (e.g. abs(x))

Uno de los conceptos más fundamentales y transversales, especialmente útil para manejar distancias, errores y comparaciones sin importar el signo.

El valor absoluto de un número real x, denotado ∣x∣, es su distancia al cero en la recta numérica, sin importar el signo.

Formalmente:

```
|x| = x, si x >= 0; -x, si x < 0 
```

Ej:

∣5∣=5

∣−5∣=5

∣0∣=0


Props:

1. Siempre no negativo: `|x| >= 0`

2. Simetría: `∣x∣ = ∣−x∣`

3. Multiplicación: `|xy| = |x|⋅|y|`

4. División (si y≠0): `|x/y| = |x|/|y|`

5. Desigualdad triangular: `|x+y| <= |x| + |y|` 

6. Producto con sígnico (función signo): 

```
x = |x|⋅sgn(x), donde sgn(x) = {1  x > 0; 0  x = 0; -1  x < 0}

```

Utilidad:

Matemáticas:

1. Geometría: medida de distancia entre dos puntos en la recta:

```
distancia(a,b) = |a-b|
```

2. Inecuaciones: resolver expresiones como `∣x−3∣ < 2` (entornos, tolerancias).

3. Análisis real: límite, continuidad, definición de la métrica euclidiana.

4. Funciones a trozos: se usa para definir funciones como: `f(x) = |x-a|, f(x) = |x^2-4|`

5. Errores y aproximaciones: medir cuánto se aleja un valor de referencia:

```
error absoluto = |valor real - valor estimado|
```


Programación

1. Comparar magnitudes ignorando el signo (muy usado en IA, gráficos, audio).

2. Verificar tolerancias numéricas

```
if abs(a - b) < 1e-5:
    print("Son prácticamente iguales")

```

3. Determinar distancias entre valores.

4. Normalizar diferencias:

```
diferencia = abs(x - y)
```


### Código en python 

```
print(abs(7))     # 7
print(abs(-7))    # 7
print(abs(0))     # 0
```


Con números complejos:

```
z = 3 + 4j
print(abs(z))  # 5.0, porque abs(z) = sqrt(3² + 4²)

```


Estructuras y algoritmos:

1. Algoritmos de optimización (como descenso por gradiente).

2. Cálculo de distancias Manhattan / Euclidiana en grids y juegos.

3. Evaluación de errores en machine learning.

4. Análisis de señales: amplitudes, diferencias absolutas entre frames.



## 9. Residuo / Resto / Módulo (%)

El residuo de la división de un número entero a por otro entero positivo b es el número entero que sobra después de dividir a entre b, sin considerar la parte decimal.

Notación:

```
r = a mod b
```

Donde: 

```
a = bq + r con 0<= r <=b

```

a: dividendo
b: divisor: 
q: cociente entero 


Ej: 

10 mod 3 = 1 porque 10 = 3*3 + 1

14 mod 5 = 4 -> 14 = 5*2 + 4

8 mod 4 = 0 -> 8 divisible por 4 


Props

1. Rango del residuo: `0 <= a mod b < b`

2. si a mod b = 0, entonces `b|a (es divisor)`

3. Modularidad cíclica:

Los residuos forman ciclos al sumar múltiplos del divisor.

Ej:

```
mod 3 => {0, 1, 2}
```

4. Compatibilidad con operaciones:

1. (a + b) mod n = ((a mod n) + (b mod n)) mod n

2. (a*b) mod n = ((a mod n) * (b mod n))


5. No afecta a comparaciones modulares:

```
a ≡ b (mod n) ⟺ (a mod n) = (b mod n)
```


Utilidad:

Matemáticas:

1. Teoría de números: base de la congruencia, divisibilidad, criptografía.

2. Aritmética modular: relojes, calendarios, ciclos periódicos.

3. Congruencias: a ≡ b mod n se usa en problemas de divisibilidad.

4. Funciones periódicas: manejo de residuos como forma de ciclos.


Programación:

Ej: 

```
print(10 % 3)  # 1

```


1. Ciclos o rotaciones:

```
dias = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
print(dias[(7 + 3) % 7])  # "Mié"
```


2. Verificar divisibilidad:

```
if x % 2 == 0:
    print("Es par")

```

3. Hashing y algoritmos criptográficos (SHA, RSA, etc.).


4. Asignaciones cíclicas:

Turnos, colores, recursos que se reparten en "rondas".


5. Controlar índice circular en arrays:

```
next_index = (current + 1) % len(arr)

```

Rs: 

| Propiedad              | Valor del residuo $a \bmod b$           |
| ---------------------- | --------------------------------------- |
| Siempre >= 0		     | 0 <= r < b                       	   |
| Resta la parte exacta  | Sobra tras dividir a entre b 	       |
| Controla ciclos        | Ideal para repetir en secuencia         |
| Verifica divisibilidad | Si a mod b = 0, entonces b|a 		   |


### Código: ciclo de reloj

Si son las 10 y pasan 5 horas:

```
(10+5) mod 12 = 3 ⇒ Son las 3
```



## 10. Redondeo (floor, ceil, round)

Fundamental cuando trabajamos con números reales, resultados aproximados, o control de precisión.

Es el proceso de ajustar un número a otro más sencillo o más representable

Reduciendo su cantidad de cifras significativas, ya sea en su parte decimal o entera.

Ej:

1. Redondeo de 3.14159 a dos decimales:
→ 3.14

2. Redondeo de 1257 a la centena más cercana:
→ 1300

El objetivo es simplificar valores, controlar precisión y evitar errores acumulativos.


Props

1. Aproximación controlada:
Reduce la precisión manteniendo una estimación lo más cercana posible al valor original.

2. Puede implicar pérdida de información:
Es una operación no reversible (irreversible si no se guarda el valor original).

3. Distintas estrategias o modos:

| Estrategia                     | Ejemplo: redondear 2.5 |
| ------------------------------ | ---------------------- |
#####| Redondeo al entero más cercano | 3                      |
#####| Redondeo hacia cero            | 2                      |
#####| Redondeo hacia infinito (+∞)   | 3                      |
#####| Redondeo hacia –∞              | 2                      |
#####| Redondeo “banco” o par         | 2                      |
#####| Truncamiento                   | 2                      |

4. Evita acumulación de errores cuando se aplica correctamente (especialmente en cálculos largos o iterativos).

5. Puede introducir sesgo si se elige mal la estrategia.


Utilidad:

Matemáticas

1. Resultados aproximados: Se usa cuando no se puede obtener o expresar un valor exacto.

2. Medición experimental: Los datos reales casi siempre deben redondearse a una precisión fija.

3. Errores de redondeo: Se estudian en análisis numérico para controlar la precisión de algoritmos.

4. Notación científica y cifras significativas: Redondeo es clave para expresar grandes o pequeños números de forma manejable


Programación:

Ej:

```
round(3.14159, 2)     # 3.14
round(2.675, 2)       # 2.67 (!)
int(3.99)             # 3 (trunca hacia cero)
math.floor(3.99)      # 3 (hacia abajo)
math.ceil(3.01)       # 4 (hacia arriba)

```

1. Mostrar resultados al usuario (finanzas, estadísticas, UX).

2. Controlar errores numéricos en simulaciones físicas, científicos o económicos.

3. Truncar datos para ahorrar espacio o aumentar velocidad.

4. Control de precisión monetaria

```
total = round(precio_unitario * cantidad, 2)

```

5. Estandarización de datos antes de análisis o agrupamientos


Ej redondeo al más cercano:

| Número original | Redondeado                   |
| --------------- | ---------------------------- |
| 2.3             | 2                            |
| 2.7             | 3                            |
| 2.5             | 2 (según estrategia “banco”) |
| 3.5             | 4                            |


Redondear:

Para mostrar datos de forma legible o resumida.

Al trabajar con dinero, unidades físicas, coordenadas, etc.

Para reducir errores acumulados en cálculos repetitivos.


No redondear:

En cálculos intermedios importantes (mejor redondear al final).

En criptografía, algoritmos exactos, o lógica binaria.

En datos científicos donde se necesita máxima precisión.


### Estrategias de redondeo

1. Redondeo al entero más cercano (round half up)

Ejemplo:

2.5 → 3; 2.4 → 2


Cuándo usarlo:

Es la forma de redondeo más intuitiva y común.

Ideal cuando querés evitar sesgos negativos (tendencia a truncar hacia abajo).

Útil para visualización al usuario, reportes simples, precios, etc.

##### Problema: Si se aplica repetidamente, puede introducir un sesgo hacia arriba (en media).


2. Redondeo hacia cero (truncamiento)

Ejemplo:

2.9 → 2; -2.9 → -2


Cuándo usarlo:

1. Para descartar decimales sin alterar la magnitud entera.

2. En cómputo eficiente, conversiones rápidas, hashing.

3. Ideal para indexación en arrays o memoria.

##### Cuidado: Pierde precisión y puede introducir errores si se espera un redondeo convencional


3. Redondeo hacia +∞ (ceil / techo)

Ejemplo:

2.1 → 3; -2.1 → -2


Cuándo usarlo:

1. Cuando necesitás asegurar que el resultado no sea menor que el original.

2. En reservas mínimas, cortes de tiempo, asignaciones fijas (por ejemplo: ceil(2.1 horas) = 3 horas de uso).

3. En estructuras de divisiones, paginación, bloques o segmentos fijos

        
4. Redondeo hacia –∞ (floor / piso)

Ejemplo:

2.9 → 2; -2.1 → -3

Cuándo usarlo:

1. Para garantizar que el resultado no supere el original.

2. En distribuciones conservadoras, límites inferiores o mínimos garantizados.

3. Útil en matemáticas discretas y cálculos financieros conservadores
        

5. Redondeo al par (round half to even / redondeo bancario)

Ejemplo:

2.5 → 2; 3.5 → 4


Cuándo usarlo:

1. Para evitar el sesgo acumulativo en sumas o grandes series de datos.

2. Estándar en muchas bibliotecas científicas, financieras y lenguajes de programación (incluyendo round() en Python).

3. Muy usado en contabilidad, cálculos estadísticos y algoritmos iterativos.

##### Ventaja: Promueve que los errores se "compensen" en lugar de acumularse hacia arriba o abajo


6. Redondeo aleatorio (stochastic rounding)

Ejemplo:

2.5 → 2 o 3 al azar, con probabilidad proporcional.

Cuándo usarlo:

1. En redes neuronales, computación científica o entrenamiento de modelos de aprendizaje automático para evitar sesgos.

2. Cuando se necesita conservar el valor esperado estadístico.

3. Costo: Menos intuitivo y requiere generador de números aleatorios, pero útil para evitar acumulaciones sistemáticas de error


7. Redondeo a múltiplos fijos

Ejemplo:

Redondear a múltiplos de 0.05, 10, 100, etc.

143 → 140 (a la decena más cercana)


Cuándo usarlo:

1. En precios, tiempos estandarizados, unidades de medida, escalas.

2. Para hacer agregaciones, simplificaciones y clasificaciones


Rs:

| Estrategia                   | Cuándo usar                                     |
| ---------------------------- | ----------------------------------------------- |
| Redondeo al más cercano (up) | Casos generales, presentación de datos          |
| Redondeo al par (even)       | Cálculos repetitivos, financieros, estadísticos |
| Hacia cero (truncar)         | Conversión a enteros, indexación                |
| Hacia arriba (ceil)          | Asignación mínima, límites superiores           |
| Hacia abajo (floor)          | Límites inferiores, seguridad conservadora      |
| Aleatorio (stochastic)       | Machine learning, simulación de errores         |
| A múltiplos                  | Precios, escalas, unidades físicas              |



## 11. Raíz cuadrada

##### La raíz cuadrada de un número real no negativo x es otro número real no negativo y tal que:

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


##### Solo se considera la raíz cuadrada positiva como valor principal

##### La raíz cuadrada negativa se puede considerar en el conjunto de los números complejos


Props:

1. Dominio

x ≥ 0 en R

Si se permite x < 0, se entra en C (números complejos)


2. Raíz del producto

```
√a⋅b = √a⋅√b (si a,b≥0)
```


3. Raíz del cociente

```
√a/b = √a/√b (si a≥0,b>0)
```

4. Potencia fraccionaria

```
√x = x^1/2
```


5. Monotonía 

Es una función creciente: si a<b, entonces √a < √b


6. No linealidad

```
√a+b =/= √a + √b
```


Utilidad:

Matemáticas:

Geometría: Teorema de Pitágoras (distancias, hipotenusa)

Álgebra: Resolver ecuaciones cuadráticas

Análisis: Expresiones de límite, derivadas, integrales

Estadística: Desviación estándar (VarianzaVarianza


Programación:

Cálculo de distancias entre puntos (por ejemplo, en juegos o gráficos)

Normalización de vectores

Escalado proporcional (ej: raíz cuadrada de tamaño para ajustar una escala)

Optimización (algoritmos que requieren funciones no lineales)

Criptografía (algunas funciones modulares requieren raíces cuadradas)

Machine Learning: funciones de pérdida o métricas (como RMSE)

```
import math

print(math.sqrt(9))      # 3.0
print(16 ** 0.5)         # 4.0
print(math.isqrt(10))    # 3 → raíz cuadrada entera

```


#### Raíz cuadrada negativa y complejos

En matemáticas avanzadas (como álgebra compleja):

```
√-1 = i 
```

##### Esto amplía el dominio a los números complejos, útiles en física, ingeniería eléctrica, procesamiento de señales, etc.


### Código cálculos de raíces 

1. A mano: 

No usar funciones como math.sqrt() pueden ayudar: 

Optimizar código (por ejemplo, evitar librerías pesadas).

Comprender algoritmos numéricos (útil en gráficos, simulaciones, ML).

Implementar rutinas en entornos sin funciones matemáticas estándar.


3. Método de Newton-Raphson para Raíz Cuadrada:

Queremos encontrar la raíz cuadrada de un número S, es decir, resolver:

```
x^2 = S
```

Equivalente a encontrar la raíz de la función:

```
f(x) = x^2 - S
```

La fórmula de Newton-Raphson es:

```
x_n+1 = x_n - f(x_n)/f'(x_n)
```

Para f(x) = x^2 - S, tenemos:

```
f'(x) = 2x
```

Entonces: 

```
x_n+1 = x_n - x^2_n - S / 2x_n = 1/2(x_n + S/x_n)
```


3. Intuición

Este método promedia el valor actual con el cociente S/xnS/xn​. El resultado converge rápidamente.

```
def raiz_newton(S, tolerancia=1e-10, max_iter=1000):
    x = S if S >= 1 else 1  # Valor inicial razonable
    for _ in range(max_iter):
        x_next = 0.5 * (x + S / x)
        if abs(x - x_next) < tolerancia:
            return x_next
        x = x_next
    return x

```

```
print(raiz_newton(2))  # ≈ 1.4142

```


4. Método manual: “algoritmo de lápiz y papel” (estilo escuela)

Este método fue enseñado antes de las calculadoras. 

Funciona en base al siguiente patrón:

1. Agrupás el número en pares de dígitos desde la coma decimal.

2. Hallás el número más grande dd tal que d2≤d2≤ el primer grupo.

3. Hacés divisiones parciales sucesivas simulando una extracción.


5. Método babilónico (muy similar al de Newton)

```
x_n+1 = 1/2(x_n + S/x_n)
```


Usos:

| Situación                       | Método recomendado               |
| ------------------------------- | -------------------------------- |
| Microcontroladores o bajo nivel | Newton o babilónico              |
| Evitar librerías                | Newton o aproximaciones          |
| Precisión exacta                | Newton con control de tolerancia |
| Aprendizaje didáctico           | Método de lápiz y papel          |
| Lenguajes sin `sqrt()`          | Implementación propia            |


Precisión y rendimiento

Newton converge muy rápido (dobla la precisión en cada iteración).

Se puede adaptar para enteros (math.isqrt() en Python 3.8+) o Decimal si querés precisión arbitraria

    

## 12. Potencia / exponente (x^n)

Representa multiplicar un número por sí mismo varias veces.

```
a^n = a x a x ... x (n veces)
```

a es la base

n es el exponente o índice

a^n "a elevado a la n"


Ej: 

| 2^3     | 8         | 2 elevado a la 3  |
| 5^0     | 1         | 5 elevado a 0     |
| (-2)^4  | 16        | -2 elevado a la 4 |
| 10^-2}  | 0.01      | 10 elevado a -2   |


Props:

1. Potencia de 1:

```
a^1 = a
```

2. Exponente cero: 

```
a^0 = 1 (si a =/= 0)
```

3. Exponente negativo:

```
a^-n = 1/a^n
```

4. Producto de potencias con misma base: 

```
a^m * a^n = a^m+n
```

5. Cociente de potencias con misma base:

```
a^m/a^n  = a^m-n
```

6. Potencia de potencia:

```
(a^m)^n = a^m*n
```

7. Producto elevado a una potencia:

```
(a*b)^n = a^n*b^n
```

8. Cociente elevado a una potencia:

```
(a/b)^n = a^n/b^n
```

9. Base negativa

```
(-a)^n = a^n si n es par
(-a)^n = -a^n si n es impar
```


Tipos de exponentes:

| Tipo         | Ejemplo   | Significado                         |
| ------------ | --------- | ----------------------------------- |
| Natural      |  2^4      | Multiplicación repetida             |
| Cero         |  3^0 = 1  | Definición especial                 |
| Negativo     |  2^{-3}   | Inverso multiplicativo              |
| Fraccionario |  9^{1/2}  | Raíz cuadrada                       |
| Decimal/real |  2^{2.5}  | Requiere logaritmos y exponenciales |


### Código

```
2 ** 3       # 8 (potencia entera)
9 ** 0.5     # 3.0 (raíz cuadrada)
pow(2, 5)    # 32 (función incorporada)

```

pow() con 3 argumentos

```
pow(2, 5, 7)  # (2^5) % 7 = 32 % 7 = 4

```

##### Esto es muy útil en criptografía (por ejemplo, RSA).


Utilidad:

Matemáticas

Cálculo de áreas, volúmenes, crecimiento exponencial

Representación científica (potencias de 10)

Álgebra, análisis, cálculo

Raíces cuadradas y cúbicas (potencias inversas)


Programación: 

Algoritmos numéricos: Fast exponentiation, potencias binarias

Criptografía: RSA, Diffie-Hellman

Física o simulaciones: Fórmulas con x^2, t^3

Compresión de datos: Codificación logarítmica

Machine Learning: Funciones activación, normalización

Gráficos y animación: Escalado exponencial, interpolación


#### Exponenciación rápida (Fast Exponentiation)

##### Para calcular potencias grandes (como a^1000000) sin repetir multiplicaciones, se usa el algoritmo "exponentiation by squaring":

```
def fast_exp(base, exp):
    result = 1
    while exp > 0:
        if exp % 2 == 1:
            result *= base
        base *= base
        exp //= 2
    return result

```



## 13. Máximo Común Divisor (MCD o GCD)

De dos o más números enteros es el mayor número entero positivo que divide a todos ellos sin dejar residuo.

```
mcd(a,b) = max{d ∈ Z+ |d|a y d|b}
```

Ej:

```
mcd(12, 18) = 6
```

Los divisores comunes son {1, 2, 3, 6}, y el más grande es 6.


Props:

1. Simetría

```
mcd(a, b) = mcd(b, a)
```

2. Si un número divide al otro: 

```
mcd(, 0) = |a|
```

3. División de un múltiplo común:

Si d = mcd(a, b), entonces existen enteros x, y tales que:

```
d = ax + by (Identidad de Bézout)
```

4. Relación con el mínimo común múltiplo (MCM):

```
mcd(a, b)*mcm(a,b) = |a*b|
```

5. Asociatividad extendida

```
mcd(a, b, c) = mcd(mcd(a,b),c)
```


Cálculo: 

1. Por descomposición en factores primos:

60 = 2^2*3*5
48 = 2^4*3

##### mcd(60, 48) = producto de primos comunes con el menor exponente: 2^2*3 = 12


### Código

2. Algoritmo de Euclides (muy eficiente):

```
def mcd(a, b):
    while b:
        a, b = b, a % b
    return abs(a)

```

Out:

mcd(48, 18) = mcd(18, 12) = mcd(12, 6) = mcd(6, 0) = 6

(Sale en b 0 -> False; mientras a tenga resto)


Utilidad: 

Matemáticas:

Simplificación de fracciones

Álgebra modular: resolución de ecuaciones diofánticas

Aritmética: divisibilidad, coprimalidad

Teoría de números

Máquinas de estados y ciclos


Programación:

Reducción de fracciones: `a/b -> a/mcd / b/mcd`

Criptografía: Algoritmos como RSA usan MCD para claves

##### Algoritmos eficientes: Euclides es base en teoría de algoritmos

Módulos, relojes y ciclos: Calendarios, animaciones repetitivas, etc.


### Código: Variación para listas

```
from math import gcd
from functools import reduce

def mcd_lista(nums):
    return reduce(gcd, nums)

mcd_lista([24, 36, 60])  # Resultado: 12

```


### Algoritmos eficientes: Euclides es base en teoría de algoritmos”

El Algoritmo de Euclides para calcular el MCD (máximo común divisor) es uno de los algoritmos más antiguos, fundamentales y eficientes de la historia.

Ha influido profundamente en el diseño, análisis y comprensión de algoritmos en matemáticas y ciencias de la computación.


Consideraciones:

1. Eficiencia algorítmica

Es un algoritmo extremadamente rápido: su complejidad es logarítmica:

```
O(log min(a,b))
```

Incluso con números enormes (miles de dígitos), el algoritmo se mantiene eficiente


2. Simplitud estructural

Usa solo operaciones básicas: módulo y asignación.

Sin estructuras de datos complejas, solo necesita un bucle while.

Ideal para enseñar recursividad, eficiencia, invariantes de bucle

```
def euclides(a, b):
    while b:
        a, b = b, a % b
    return a

```


3. Modelo de algoritmos

Es un modelo clásico de algoritmo determinista y finito.

Se lo usa como ejemplo para:

Diseño de algoritmos eficientes.

Prueba de corrección.

Cómputo sobre enteros.

Comparación de complejidad temporal


4. Algoritmos derivados

##### El algoritmo de Euclides sirve de base para variantes más avanzadas:

1. Euclides extendido: encuentra coeficientes de la identidad de Bézout:

```
ax + by = mcd(a,b)
```

2. Criptografía: usado en el algoritmo RSA, Diffie-Hellman y curvas elípticas para encontrar inversos modulares


3. MCD de polinomios: la misma idea se aplica a polinomios con el operador % reemplazado por el residuo polinómico.


5. Historia:

Descrito por Euclides alrededor del año 300 a.C. en los Elementos.

Se considera uno de los primeros algoritmos formales documentados.

Aún hoy, se enseña en cursos modernos de teoría de algoritmos, números y programación competitiva.


El algoritmo de Euclides no solo resuelve un problema práctico (el MCD), sino que también:

##### Demuestra cómo construir algoritmos simples, correctos y rápidos.

Es un caso de estudio ideal para enseñar eficiencia, análisis y diseño algorítmico.

Forma la base de muchas aplicaciones modernas en seguridad informática, álgebra computacional y teoría de números


### Teoría de Algoritmos

Rama fundamental de la ciencia de la computación y de las matemáticas aplicadas que estudia:

##### Cómo diseñar, analizar y optimizar algoritmos — es decir, procedimientos precisos y finitos para resolver problemas computacionales.


Abarca:

1. Diseño de algoritmos

Estudia cómo crear algoritmos para resolver distintos tipos de problemas. Algunas estrategias comunes incluyen:

Divide y vencerás (Quicksort, Merge Sort)

Algoritmos codiciosos (Greedy)

Programación dinámica

Backtracking y Branch & Bound

Algoritmos probabilísticos (Monte Carlo)

Aproximación (cuando no hay solución exacta eficiente)


2. Análisis de algoritmos

Complejidad temporal: ¿Cuánto tarda el algoritmo?

Ejemplo: O(n), O(n log n), O(2^n)


Complejidad espacial: ¿Cuánta memoria usa?

Ejemplo: O(1), O(n)


El análisis puede ser:

Peor caso (lo más costoso)

Mejor caso (lo más rápido)

Caso promedio


Clasificación de problemas

¿Es el problema resoluble (decidible)?

¿Es computacionalmente difícil?

¿Se puede resolver en tiempo polinómico (clase P)?

¿Está en la clase NP o NP-completo?

Esto lleva a la teoría de la complejidad computacional.


4. Algoritmos clásicos

Ejemplos estudiados por su relevancia teórica y práctica:

| Tipo                 | Ejemplo                                    |
| -------------------- | ------------------------------------------ |
| Búsqueda             | Búsqueda binaria                           |
| Ordenamiento         | Quicksort, Heapsort                        |
| Recorrido de grafos  | DFS, BFS                                   |
| Caminos mínimos      | Dijkstra, Bellman-Ford                     |
| Estructuras de datos | Union-Find, Segment Tree                   |
| Criptografía         | Euclides extendido, exponenciación modular |


5. Problemas y estructuras

Se estudian tanto los problemas como las estructuras donde se aplican:

Cadenas (strings)

Árboles, listas, colas, pilas

Grafos (dirigidos, no dirigidos)

Números (teoría de números)

Matrices, tablas dinámicas


6. Aplicaciones 

Programación competitiva

Criptografía

IA y Machine Learning

Compiladores

Redes y enrutamiento

Videojuegos y simulación

Optimización logística


Importancia:

La teoría de algoritmos es esencial porque:

Permite crear software eficiente y confiable.

Ayuda a entender los límites de lo que puede computarse.

Ofrece herramientas para optimizar recursos (tiempo, memoria).

Es el corazón de la innovación en inteligencia artificial, bioinformática, criptografía


Relación con otras disciplinas:

Matemática: Pruebas, lógica, combinatoria, teoría de números

Física: Optimización, simulación

Economía: Algoritmos de subastas, teoría de juegos

Biología: Análisis de secuencias genéticas

Lingüística: Procesamiento de lenguaje natural


##### La teoría de algoritmos no solo estudia "cómo hacer algo paso a paso", sino que investiga:

##### Cómo hacerlo correctamente

##### Cómo hacerlo rápido y eficiente

##### Y si es posible hacerlo en absoluto


### Código Euclides extendido

##### No solo calcula el máximo común divisor (MCD) de dos números a y b, sino que también encuentra coeficientes enteros x y y que satisfacen la identidad de Bézout

```
a*x + b*y = mcd(a,b)
```

Utilidad:

1. Invertir un número módulo m (clave para criptografía RSA)

2. Resolver ecuaciones diofánticas lineales

3. Base para algoritmos como RSA, ElGamal, etc.


Props:

1. Siempre devuelve x, y tales que:

```
ax + by = gcd(a,b)
```

2. Si a y b son coprimos (mcd = 1), entonces x es el inverso modular de a módulo b.

3. Es una extensión del algoritmo de Euclides clásico (que solo halla el MCD).


### Código

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


### Código Inverso modular

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


Rs:

Es una herramienta esencial en álgebra computacional.

En programación, es usado para:

Criptografía

Resolver congruencias

Implementar aritmética modular segura


Es eficiente: complejidad O(log(min(a, b)))



### Teoría Complejidad computacional

Un pilar de las ciencias de la computación teórica y la base para entender qué tan “difícil” es resolver un problema con una computadora.

Rama de la informática teórica que clasifica los problemas computacionales según la cantidad de recursos necesarios para resolverlos, como:

1. Tiempo: cuántos pasos se necesitan (medido en función del tamaño de entrada n).

2. Espacio: cuánta memoria se usa.

A veces, también se considera el número de llamadas recursivas, profundidad, comunicación, etc.

Su objetivo no es resolver problemas, sino entender sus límites.


Conceptos: 

1. Tamaño de entrada

Casi todo se mide respecto al tamaño de entrada `n`.

Por ejemplo, un arreglo de 10 elementos tiene `n = 10`.


2. Clases de Complejidad

Estas agrupan problemas según lo que se necesita para resolverlos:

| Clase           | Significado                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------- |
| **P**           | Problemas que se pueden resolver en **tiempo polinomial** (rápidos).                                    |
| **NP**          | Problemas cuyas soluciones se pueden **verificar en tiempo polinomial**.                                |
| **NP-completo** | Problemas más difíciles dentro de NP. Si uno se resuelve en tiempo polinomial, todos los demás también. |
| **NP-hard**     | Problemas al menos tan difíciles como los NP-completos, pero que **no necesariamente están en NP**.     |
| **EXP**         | Requieren tiempo **exponencial**. Inviables para entradas grandes.                                      |


3. Complejidad temporal y espacial

Complejidad temporal → Cuántos pasos toma resolver un problema (ej. O(n), O(n log n), O(2ⁿ), etc.).

Complejidad espacial → Cuánta memoria adicional usa el algoritmo.


Ej: Algoritmo de Euclides

Es muy eficiente: tiempo logarítmico.

Se estudia dentro de P, porque se puede resolver en tiempo polinomial respecto al tamaño de la entrada (número de bits).


Da respuestas a: 

¿Cuánto tiempo y memoria hacen falta para resolver un problema?

¿Este problema es resoluble en un tiempo razonable?

¿Hay alguna manera más rápida de resolverlo?

¿Cuál es el límite de lo que una computadora puede resolver


Aportes:

Ayuda a diseñar mejores algoritmos.

Permite saber cuándo dejar de buscar una solución exacta y usar heurísticas o aproximaciones.

Fundamenta la seguridad en criptografía (ej. factorizar números grandes es difícil).

Influye en áreas como:

	Ciencia de datos

	Optimización

	Biología computacional

	Inteligencia Artificial


P vs NP: la gran pregunta

##### ¿Todo problema cuya solución se puede verificar rápido, también se puede resolver rápido? 

##### Nadie lo sabe aún. Resolver esto daría una de las respuestas más fundamentales de la informática


Rs: 

La teoría de la complejidad computacional:

Estudia qué tan difícil es resolver o verificar un problema.

Define límites teóricos y prácticos de lo que las computadoras pueden hacer.

Es esencial para el diseño de software, criptografía, y comprensión de la computación como ciencia.


### Problemas fundamentales de la informática 


#### Resueltos 

1. ¿Existen problemas indecidibles?

Ejemplo clave: El Problema de la parada (Halting Problem).

Demostrado por: Alan Turing en 1936.

Importancia: No todos los problemas pueden resolverse mediante un algoritmo


2. ¿Qué problemas se pueden computar algorítmicamente?

Respuesta: Aquellos que son decidibles por una máquina de Turing.

Esto dio lugar a: La teoría de la computabilidad y las clases como:

Decidibles

Semi-decidibles (recursivamente enumerables)

Indecidibles
    

3. ¿Podemos representar todos los algoritmos posibles con un modelo formal?

Respuesta: Sí, mediante las máquinas de Turing o equivalentes (lambda-cálculo, gramáticas de Chomsky, etc.)

Esto llevó al concepto de equivalencia de modelos de cómputo.
    

4. ¿Qué tan eficientes pueden ser los algoritmos para ciertos problemas?

Respuesta: Para muchos problemas concretos, conocemos el mejor algoritmo posible y su límite inferior
 


#### Abiertos 

1. ¿P = NP?

¿Todo problema cuya solución se puede verificar rápidamente, también se puede resolver rápidamente?

Estado: Abierto.

Impacto: Resolverlo alteraría toda la teoría de algoritmos, criptografía, IA, etc.

Premio: Uno de los 7 Problemas del Milenio (Clay Institute, $1M USD).


2. ¿Existen problemas NP-intermedios?

Si P ≠ NP, ¿hay problemas en NP que no son ni P ni NP-completos?

Ejemplo candidato: Problema del logaritmo discreto.


3. ¿Hay jerarquías infinitas dentro de P?

¿Podemos seguir separando subconjuntos de P según su eficiencia (por ejemplo, P ⊃ LOGSPACE ⊃ AC0...)?

Estado: Parcialmente resuelto, pero hay muchas separaciones aún desconocidas.


4. ¿Existen algoritmos deterministas en tiempo polinomial para problemas como factorización?

La factorización no es conocida como NP-completo, pero tampoco está en P (que se sepa).

Avance: El test de primalidad AKS (2002) demostró que la primalidad sí está en P, un gran logro.

Pero: La factorización sigue abierta (crucial para criptografía).


5. ¿Qué límites tiene el cómputo cuántico?

¿Puede resolver problemas fuera de NP?

¿Puede resolver problemas no computables por máquinas de Turing?

Relacionada: La clase BQP (problemas que puede resolver una computadora cuántica en tiempo polinomial con probabilidad alta).

Aún no sabemos si P = BQP o si BQP incluye NP-completo, por ejemplo.


6. ¿Podemos hacer una clasificación completa de todos los problemas en función de su complejidad?

Aún no.

Existen muchas clases como PSPACE, EXP, EXPSPACE, etc., y sus relaciones están parcialmente entendidas.


7. ¿Existe una noción matemática completa de eficiencia para la inteligencia artificial general (AGI)?

¿Cómo medimos formalmente la complejidad y capacidad de una IA en términos computacionales?

Aún no hay teoría completa.


### Importancia

##### Muchas áreas prácticas (seguridad, compresión, optimización, aprendizaje automático) dependen de cómo se resuelvan estas preguntas.

Por ejemplo:

##### Si P = NP, la criptografía moderna colapsaría.

##### Si logaritmo discreto se resuelve en P, se romperían protocolos como Diffie-Hellman.



## 14. Mínimo Común Múltiplo (MCM o LCM)

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


Cálculo: 

1. Por descomposición en factores primos:

Descomponer cada número en primos.

Tomar todos los factores que aparecen (en cualquiera de ellos) con su máximo exponente.

Multiplicarlos.

Ej: 

8 = 2³

12 = 2² × 3

mcm(8, 12) = 2³ × 3 = 24


2. Con la fórmula con el mcd:

```
mcm(a,b) = |a*b|/mcd(a,b)
```


Props:

1. Simetría: 

```
mcm(a,b) = mcm(b,a)
```

2. Relación con el mcd:

```
mcm(a,b) * mcd(a,b) = |a*b|
```

3. Multiplicidad:

```
si a | b (a divide b), entonces: 

mcm(a,b) = b
```

4. Distributiva sobre varios números (con cuidado):

```
mcm(a, mcm(b, c)) = mcm(mcm(a,b),c)
```

(asociativa para extender a más de dos elementos)

5. Positividad:

El mcm siempre es positivo, incluso si los números de entrada son negativos. 


Utilidad:

Matemáticas:

1. Resolver problemas con múltiplos comunes, por ejemplo:

Ciclos que se repiten (tareas periódicas)

Encuentros simultáneos (Ej.: ¿cuándo coinciden dos eventos periódicos?)


2. Ajuste de denominadores en fracciones (mínimo común denominador)


3. Problemas con relojes, calendarios, sincronización de eventos


4. Ecuaciones diofánticas

Saber si existen soluciones enteras con ciertos múltiplos


Programación:

1. Sincronización de procesos o tareas que se ejecutan cada cierto número de ciclos


2. Resolución de problemas de intervalos, tiempos y repetición de eventos

Ejemplo: “Cada 4 días y cada 6 días coinciden…”


3. Ajuste de dimensiones en gráficos, mallas o simulaciones

Alineación de grids


4. En problemas de programación competitiva:

Optimización de bucles

Problemas de teoría de números


5. En criptografía o algoritmos con teoría de números:

Junto al mcd, es base para el algoritmo de Euclides
        
      
### Código

```
from math import gcd

def lcm(a, b):
    return abs(a * b) // gcd(a, b)

print(lcm(4, 6))  # Output: 12

```



## RS Cociente, par, impar, multiplo, divisor, primo, mcd (max div) y mcm (min multiplo), consecutivo, raíz cuadrada, potencia/expon; tipos num o conjunt

1. mcd(60, 48) = producto de primos comunes con el menor exponente: 2^2*3 = 12, mayor que divide a todos, resto 0. 

2. mcm (4, 6) = 12 -> 2^2*3: menor número múltiplo de los dos

3. mcd y mcm aplican factorización por números primos (2, 3, 7, 11, 13...)

4. Primo: natural >1, dos divisores >0: el mismo y 1.

5. Divisor y Múltiplo: a (multiplo) = b (divisor) * k (entero)

6. Cociente: cuantas veces el divisor se encuentra en el dividendo.

7. Par e impar: divisible (resto 0) y no divisible por dos (o 2k o 2k+1)

8. Consecutivo: {n, n+1, n+2, ..., n+(k-1)}, donde n ∈ Z (enteros); consecutivos pares como 2,4,6 e impares como 1,3,5

9. Raíz cuadrada: número real no negativo x es otro número real no negativo y tal que: y^2 = x; denotado como: √x = y; √9 = 3 porque 3^2=9

10. Potencia/expon: multiplicar un número por sí mismo varias veces; a^n = a x a x ... x (n veces) donde a es la base, n es el exponente o índice; a^n "a elevado a la n". La parte positiva es la real, la negativa es la compleja.

11. Naturales: cualquier numero usado para contar (siguiente o sucesivo; conjunto ordenado e infinito) ; Enteros (+N): enteros con signo; pos, neg sin parte decimal (cuenta perdidas, negatividad, resta; recta numerica, valor abs); racional(Z+N): cociente de dos enteros (denominador =/= 0) o cociente de un entero y un natural positivo (a/b, b=/=0); irracional (I): valor que no puede ser expresado como una fracción m/n, donde m y n e Z, n=/=0 (num real no racional), su expresión decimal no es exacta ni periodica, es un decimal infinito aperiódico √7 = 2,64575... no puede representar un racional (cociente de un entero entre natural + "razón de dos enteros"); Reales (I+Q+Z+N): Recta realen la que todos y cada uno de sus puntos se corresponden biunívocamente con un número real, estableciéndose una Biyección, inyección y sobreyección; Complejos (C): par ordenado de números reales: z = (a, b) el primer es parte real (abscisa -x-) y el segundo parte imaginaria (ordenada -y-)



## 15. Factorial (n!)

De un número natural nn, denotado como n!, es el producto de todos los números naturales positivos menores o iguales a nn.

```
n! = n * (n-1) * (n-2) * ... * 1
```


Casos especiales:

1. 0!=1 (por definición)

2. Solo está definido para n ∈ N​_0 (naturales incluyendo el 0), aunque se puede extender con funciones especiales como la función gamma.


Ej: 

3! = 3×2×1 = 6

5!=  5×4×3×2×1 = 120


Props: 

1. Relación recurrente:

```
n!=n×(n−1)!
```

(esto lo hace ideal para definiciones recursivas)


2. Crecimiento rápido:

El factorial crece superexponencialmente.

Ej.: 10! = 3.6×10^6,

20! ≈ 2.4×10^18


3. Solo definido para enteros no negativos

(salvo extensión con la función gamma).


4. Aparece en muchos conteos combinatorios

Permutaciones, combinaciones.


Utilidad:

Matemáticas:

1. Conteo y combinatoria:

Número de formas de ordenar n elementos → n!

Combinaciones y permutaciones:

```
C(n,r) = n! / r!(n-r)!
```


2. Teoría de probabilidades:

Fórmulas con espacios muestrales


3. Series matemáticas:

Factorial aparece en la expansión en series de Taylor o de Maclaurin:

```		
	  inf
e^< =  ∑ x^n/n!
	  n=1
```


4. Aproximación de funciones:

Soluciones a ecuaciones diferenciales, integrales


5. Identidades algebraicas y combinatorias:

Ej: 

```
2(n)! = 2^n! * (1 * 3 * 5 ....(2n - 1))
```


Utilidad:

Programación:

1. Problemas de conteo:

Cuántas formas de hacer algo.

2. Backtracking y algoritmos recursivos:

Generación de permutaciones.

3. Problemas combinatorios en programación competitiva:

Cálculo rápido de combinaciones y permutaciones.

Con modularidad (mod 109+7109+7, etc.).

4. Algoritmos de probabilidad y simulaciones:

Algoritmos tipo Monte Carlo.

5. Generación de estructuras:

Árboles binarios (Catalan numbers), grafos, etc.


### Código 

1. Factorial recursivo

```
def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

```


2. Factorial iterativo

```
def factorial_iter(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

```


3. math.factorial (eficiente): 

```
import math
print(math.factorial(5))  # Output: 120

```


Consideraciones: 

##### Overflow: El factorial crece muy rápido. A partir de n>20n>20, puede superar fácilmente la capacidad de enteros en algunos lenguajes o sistemas de 32 bits.

En Python, los enteros son de precisión arbitraria, por lo que se puede calcular factoriales grandes sin overflow (aunque con pérdida de rendimiento).



## 16. Contar dígitos, suma de dígitos


### Contar dígitos

Consiste en determinar cuántos dígitos tiene un número en una base dada (por lo general base 10).

Ej: 

7 → 1 dígito

47 → 2 dígitos

1035 → 4 dígitos


Props:

1. Para un número n>0, el número de dígitos en base 10 es:

```
dígitos(n)=⌊log_10 ​(n)⌋+1

```

2. El número de dígitos de un número en cualquier base bb:

```
dígitos_b(n)=⌊log⁡_b(n)⌋+1
```

3. El número 0 se considera de 1 dígito.


Utilidad:

Programación

1. Validaciones: verificar la longitud de un número (por ejemplo, tarjetas de crédito, documentos).

2. Problemas de formato: aplicar ceros a la izquierda, alineación.

3. Problemas matemáticos: tipo “cuántos números de 3 dígitos existen”, “cuántos tienen cierta propiedad”.

4. Compresión o análisis de cifras: tamaño de datos, tamaño mínimo para codificación.

5. Complejidad de algoritmos: algunos dependen del número de dígitos del input (por ejemplo, multiplicación de enteros grandes).


### Código

1. math floor, math log

```
import math

def contar_digitos(n):
    if n == 0:
        return 1
    return math.floor(math.log10(abs(n))) + 1

```


2. len, str, abs

```
def contar_digitos(n):
    return len(str(abs(n)))

```


### Suma de dígitos

Resultado de sumar todos los dígitos individuales del número.

Ej: 

123⇒1+2+3 = 6

409⇒4+0+9 = 13


Props:

1. Se utiliza para calcular el valor digital de un número (repetir la suma hasta obtener un solo dígito).

```
Ej. 987⇒9+8+7 = 24⇒2+4 = 6
```


2. Relacionada con la divisibilidad:

Un número es divisible por 9 si la suma de sus dígitos es divisible por 9.

Lo mismo vale para 3.
    

3. Para números en base 10:

Si S(n) es la suma de los dígitos de n, entonces:

```
n ≡ S(n) mod 9

```


Utilidad:

Programación:

1. Divisibilidad rápida: sin dividir el número directamente.

2. Criptografía ligera: hash simple basado en dígitos.

3. Problemas clásicos:

Encontrar números con suma de dígitos igual a un valor.

Máxima/minima suma de dígitos en un rango.

4. Funciones de hash o checksum básicos.


### Código

```
def suma_digitos(n):
    return sum(int(d) for d in str(abs(n)))

```

Recursiva:

```
def suma_digitos(n):
    if n < 10:
        return n
    return (n % 10) + suma_digitos(n // 10)

```


### Conteo y suma de dígitos 

Ej: Contar cuántos números de 3 dígitos tienen suma de dígitos igual a 15.

```
count = 0
for i in range(100, 1000):
    if suma_digitos(i) == 15:
        count += 1
print(count)

```


Rs:

##### Conteo de dígitos te dice cuán largo es un número

##### Suma de dígitos te dice algo sobre su estructura interna

##### Son herramientas esenciales en algoritmos de numeración, problemas combinatorios, teoría de números y programación competitiva.



## 17. Número palíndromo

Es un número que se lee igual de izquierda a derecha que de derecha a izquierda.

Ej: 

121

1331

77

12321


Props:

1. Simetría: su secuencia de dígitos es simétrica.


2. Cierre:

Si nn es palíndromo, entonces no necesariamente n+1n+1 lo es.

No hay una fórmula directa para el siguiente palíndromo


3. Paridad: 

Puede tener cantidad par o impar de dígitos.


4. Todos los números de un solo dígito (0 a 9) son palíndromos.

5. Existen infinitos palíndromos en cualquier base numérica.

6. En base 10, los palíndromos aparecen cada vez más espaciados a medida que crece el número


##### Propiedad destacada: Todo número palíndromo es igual a su reverso:

```
n=reverse(n)
```


Programación:

1. Problemas clásicos de búsqueda:

Buscar el mayor palíndromo producto de dos números (como en Project Euler).


2.  Validación de datos: códigos, claves o números que deben ser simétricos.


3. Criptografía y hashing (poca relevancia práctica, pero pueden aparecer).


4. Reconocimiento de patrones: juegos, desafíos matemáticos, secuencias.


5. Construcción de algoritmos con propiedades de simetría.


6. Números palíndromos binarios también se utilizan en algunos problemas de optimización o codificación.



Matemáticas:

Son estudiados como una clase de números figurados.

Forman secuencias en teoría de números (OEIS: A002113).

Se relacionan con problemas abiertos, como:

¿Es posible llegar a un palíndromo aplicando la operación "sumar el número con su reverso"? → (ver problema de Lychrel numbers


### Código palíndromo

```
def es_palindromo(n):
    s = str(n)
    return s == s[::-1]

```


Generación:

##### Crear una lista de todos los palíndromos de 3 cifras:

```
palindromos = []
for i in range(100, 1000):
    if es_palindromo(i):
        palindromos.append(i)

```


Variaciones:

Palíndromos binarios: se leen igual en base 2.

Ej: 9 = 1001_2​

```
def es_palindromo_bin(n):
    b = bin(n)[2:]
    return b == b[::-1]

```


Ejer:

1. ¿Cuál es el mayor palíndromo que resulta del producto de dos números de 3 dígitos?

2. ¿Cuántos palíndromos hay entre 1 y 10000?

3. ¿Qué números necesitan más pasos para volverse palíndromos con la operación: n+reverse(n)n+reverse(n)?


Ideal para entrenar manipulación de cadenas, números, recursión, y validaciones.

##### Muy presente en problemas de programación competitiva y entrevistas.



## 18. Número capicúa (se lee igual al revés)

Muy cercano al de número palíndromo, pero con algunas distinciones de contexto

Un número capicúa es un número que se lee igual de izquierda a derecha que de derecha a izquierda, es decir, es simétrico en sus dígitos.

En español, "capicúa" es el término tradicional y coloquial para lo que en matemáticas y computación se suele llamar número palíndromo.


Ej: 

44, 151, 12321, 909, 444444


Props:

1. Simetría: todos los capicúas son reflejos de sí mismos.

2. Dígitos extremos iguales: el primer y último dígito siempre coinciden.

3. Longitud:

Puede ser de longitud impar o par.

En longitud par, los dígitos se emparejan simétricamente

4. Cantidad infinita: existen infinitos números capicúas.

5. Subclases según base: se puede hablar de capicúas en base 10, base 2, etc.

6. Generación algorítmica posible: se pueden construir capicúas combinando mitad del número con su reverso


##### Capicúa y palíndromo se refieren a lo mismo cuando hablamos de números, aunque capicúa a veces se restringe a números enteros en base 10.

Utilidad: 

Programación:

1. Problemas algorítmicos (Project Euler, Leetcode):

Ej: "Encuentra el mayor capicúa que resulta del producto de dos números de 3 cifras".

2. Validación de datos: ciertos códigos o claves pueden usar capicúas como verificación.

3. Compresión o hashing de datos simétricos.

4. Generación de entradas o pruebas simétricas.

5. Juegos y acertijos


Matemáticas:

1. En teoría de números, los capicúas son usados para estudiar propiedades de simetría y reversibilidad.

2. También aparecen en el estudio de potencias, raíces y progresiones.

3. Algunas fórmulas y patrones se construyen con números capicúas para ilustrar propiedades de simetría algebraica


### Código

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


Propiedades numéricas adicionales:

##### Todos los números de una cifra son capicúas.

##### Si se invierte un número y se suma con el original, se puede obtener un capicúa (ej. problema de Lychrel).

##### Algunos números capicúas también son cuadrados perfectos (ej: 121 = 11²).


Ejercicios típicos:

¿Cuál es el capicúa más grande menor que 10000?

¿Cuántos capicúas hay entre 100 y 9999?

Generar un capicúa a partir de un número dado (iterando suma con su reverso).

Contar los capicúas binarios menores a 216216.

Verificar si un número en otra base es capicúa.


Curiosidades:

El nombre "capicúa" proviene del catalán cap i cua ("cabeza y cola"), refiriéndose a que el número empieza y termina igual.

En billetes, tickets y matrículas, un número capicúa a veces se considera "de la suerte".

##### El número 2002 fue un año capicúa — uno de los pocos del último milenio


Rs: 

Los números capicúas son una forma especial de palíndromos numéricos.

Se destacan por su simetría y aparecen tanto en matemática recreativa como en algoritmos.

Son útiles para desarrollar lógica con strings, recursión, inversión de valores y validaciones


### Capicúa entero base 10 

1. Capicúa = Simetría en los dígitos decimales

2. Solo se consideran números enteros escritos en notación decimal (base 10).

3. El número debe leerse igual de izquierda a derecha y de derecha a izquierda tal como aparece en sus dígitos decimales.


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


Capicúa tradicional: se define solo para números enteros positivos en base 10.

Pero se puede extender el concepto a otras bases o incluso a strings en general.

En programación, podemos comprobar capicúas en cualquier base si convertimos manualmente el número.



## 19. Media (promedio)

La media aritmética (habitualmente llamada “promedio”) es una medida de tendencia central que representa el valor central típico de un conjunto de datos.

Fórmula:

```
Media = suma de valores/cantidad de valores
```

Para una lista de números x_1,x_2,...,x_n:

```
Media = x_1,x_2,...,x_n / n
```

Props: 

1. Linealidad: 

Si a todos los elementos se les suma un número k, la media aumenta en k. 

Si se multiplican por k, la media también se multiplica por k.


2. Sensibilidad a valores extremos:

La media puede distorsionarse si hay valores atípicos (outliers) muy grandes o pequeños


3. Unicidad:

Para un conjunto de datos, existe una única media aritmética


4. No necesariamente representa un valor real del conjunto

Por ejemplo, la media de `[1, 2, 3]` es 2, que sí está en el conjunto; pero la de `[1, 2, 5]` es 2.67, que no está en el conjunto.


Utilidad:

Matemáticas

1. Estadística: Para resumir grandes cantidades de datos con un solo valor representativo

2. Álgebra y Análisis: Para estudiar promedios de funciones, secuencias, integrales

3. Probabilidad: La media de una variable aleatoria es su valor esperado.

4. Geometría: Se usa en promedios ponderados, centros de masa, centros geométricos.


Programación:

1. Análisis de datos / ciencia de datos:

Calcular el promedio de temperatura, ventas, rendimiento, etc


2. Juegos / simulación:

Promedio de puntajes, daño por turno, valores esperados.


3. Machine Learning:

Cálculo de pérdidas (mean squared error), evaluación de modelos.


4. Procesamiento de señales / imágenes:

Promediado de píxeles para filtros, reducción de ruido.


5. Compresión / estadísticas web:

Promedio de visitas, tiempos de carga, etc.


### Código

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


Precausión (no usar media): 

1. Cuando hay valores extremos (outliers) que pueden distorsionar la media.

2. Cuando el conjunto de datos tiene distribuciones muy asimétricas.

##### 3. En esos casos, es mejor usar otras medidas como la mediana o la moda.



## 20. Moda (valor que más se repite)

Valor o los valores que aparecen con mayor frecuencia en un conjunto de datos

A diferencia de la media y la mediana, la moda no implica cálculo matemático complejo, sino contar frecuencias.


Tipos de Moda:

1. Unimodal: una sola moda (ej: `[1, 2, 2, 3]` → moda = 2)

2. Bimodal: dos modas (ej: `[1, 1, 2, 3, 3]` → modas = 1 y 3)

3. Multimodal: más de dos modas

4. Amodal: no hay moda (todos los valores ocurren la misma cantidad de veces) 


Props: 

1. No requiere orden: Se puede calcular sin ordenar los datos.

2. Puede ser no única: Puede haber más de una moda o ninguna.

3. Invariante ante duplicación: Duplicar el conjunto de datos no cambia la moda.

4. Apta para datos categóricos: Es la única medida de tendencia central válida para datos nominales (como colores, nombres, etc.).




Utilidad:

Matemáticas:

1. Estadística descriptiva: Para describir el valor más común en un conjunto.

2. Sociología, economía, psicología: Para conocer comportamientos típicos de un grupo.

3. Educación: Para ver qué puntuación es más frecuente en un examen

4. Ciencias sociales: Para identificar la opción más popular en una encuesta


Programación:

1. Análisis de datos: Encontrar los productos más comprados, errores más frecuentes, etc

2. Recomendación / marketing: Ofrecer lo más elegido por los usuarios.

3. IA y ML: En clasificación para predecir la clase más común (votación por mayoría).

4. Sistemas de votación / encuestas: Determinar la opción más elegida.

5. Juegos / simulación: Ver qué acción o estado ocurre más frecuentemente.


### Código

1. Collections, Counter

```
from collections import Counter

def moda(valores):
    if not valores:
        return None
    conteo = Counter(valores)
    max_frecuencia = max(conteo.values())
    modas = [k for k, v in conteo.items() if v == max_frecuencia]
    return modas if len(modas) > 1 else modas[0]

# Ejemplo:
datos = [4, 1, 2, 2, 3, 4, 4]
print(moda(datos))  # 4

```


2. Statistics

```
import statistics

datos = [4, 1, 2, 2, 3, 4, 4]
print(statistics.mode(datos))  # 4

```

##### statistics.mode() lanza una excepción si hay más de una moda. Para múltiples modas, usa:

```
statistics.multimode(datos)  # [4]

```


Cuando no usar Moda:

1. Cuando el conjunto tiene muchos valores únicos (muy disperso), puede no haber moda.

2. Cuando se necesita una medida de tendencia central basada en cálculo, como la media.

3. No es útil para datos continuos sin repetición.



## 21. Mediana

Valor que se encuentra en el centro de un conjunto de datos ordenados

Divide el conjunto en dos partes iguales: 50% de los valores están por debajo y 50% por encima.

1. Si hay una cantidad impar de elementos, la mediana es el valor del medio.

2. Si hay una cantidad par, la mediana es el promedio de los dos valores centrales.


Ej: 

`[1, 3, 4]` → mediana = 3

`[1, 3, 4, 8]` → mediana = (3 + 4)/2 = 3.5


Props: 

1. Resistente a valores extremos (outliers):

A diferencia de la media, la mediana no se ve afectada por valores muy altos o bajos.


2. No necesita que los datos sean numéricos:

Funciona con cualquier dato que pueda ordenarse.


3. No siempre es un valor real del conjunto:

En caso de cantidad par, puede ser un número intermedio.


4. Requiere ordenación:

Siempre se calcula sobre los datos ordenados


Utilidad:

Matemáticas:

1. Estadística descriptiva: Medida de tendencia central robusta

2. Análisis económico: El ingreso mediano representa mejor la realidad que el promedio en poblaciones con desigualdad.

3. Educación: Evaluar la puntuación intermedia en exámenes o competencias 

4. Investigación científica: Resumen de datos no simétricos


Programación:

1. Análisis de rendimiento: Determinar el tiempo de respuesta típico de un servidor.

2. Análisis financiero: Calcular el valor mediano de transacciones para evitar distorsiones.

3. Machine Learning: En árboles de decisión, se usa para dividir nodos.

4. Detección de anomalías: Comparar cada valor contra la mediana para identificar outliers.


### Código

1. sorted() y len()

```
def mediana(datos):
    datos_ordenados = sorted(datos)
    n = len(datos_ordenados)
    mitad = n // 2
    if n % 2 == 1:
        return datos_ordenados[mitad]
    else:
        return (datos_ordenados[mitad - 1] + datos_ordenados[mitad]) / 2

# Ejemplo
valores = [7, 1, 3, 8, 2]
print(mediana(valores))  # 3

```


2. statistics y median()

```
import statistics

valores = [7, 1, 3, 8, 2]
print(statistics.median(valores))  # 3

```


3. Media ponderada

```
print(statistics.median_grouped([1, 2, 2, 2, 3, 4]))  # 2.5

```


No usar Mediana: 

1. Cuando el orden no es posible (datos categóricos sin jerarquía).

2. Cuando necesitas un resultado que tenga en cuenta todos los valores (como la media).

3. Si el conjunto es muy grande y la eficiencia es crítica (ordenar puede ser costoso).
 


### Media vs Mediana vs Moda

| Concepto    | Definición breve    | Sensible a outliers | Datos requeridos        | ¿Puede no existir?                | ¿Representa "lo típico"?          |
| ----------- | ------------------- | ------------------- | ----------------------- | --------------------------------- | --------------------------------- |
| **Media**   | Promedio aritmético | ✅ Sí                | Números                 | ❌ Siempre existe                  | ❌ No, si hay valores extremos     |
| **Mediana** | Valor central       | ❌ No                | Ordenables              | ❌ Siempre existe                  | ✅ Sí, especialmente con outliers  |
| **Moda**    | Valor más frecuente | ❌ No                | Categóricos o numéricos | ✅ Puede no ser única o no existir | ✅ Sí, en distribuciones agrupadas |


Ej: 

```
valores = [1, 2, 2, 2, 3, 100]

```

| Métrica     | Resultado                       |
| ----------- | ------------------------------- |
| **Media**   | (1+2+2+2+3+100) / 6 = **18.33** |
| **Mediana** | (2 + 2) / 2 = **2.0**           |
| **Moda**    | **2** (porque aparece 3 veces)  |


##### La media se ve fuertemente afectada por el valor extremo 100, mientras que la mediana y la moda representan mejor el valor "típico".


#### Usos

| Situación o Tipo de Datos              | Usar Media | Usar Mediana          | Usar Moda                       |
| -------------------------------------- | ---------- | --------------------- | ------------------------------- |
| Datos simétricos, sin valores extremos | ✅ Sí       | ✅ Opcional            | ✅ Opcional                      |
| Datos con valores extremos (outliers)  | ⚠️ No      | ✅ Sí                  | ✅ Sí                            |
| Datos ordinales o categóricos          | ❌ No       | ✅ (si hay orden)      | ✅ Sí                            |
| Distribuciones con múltiples picos     | ❌ No       | ❌ No                  | ✅ Sí (puede haber varias modas) |
| Tiempos de respuesta, sueldos, precios | ⚠️ Cuidado | ✅ Sí                  | ✅ Opcional                      |
| Datos agrupados por frecuencia         | ❌ No       | ✅ Con método especial | ✅ Sí                            |



# N2 

Más estructurados o usados en lógica compleja


## 22. Raíz n-ésima




## 23. Notación científica


## 24. Sistema binario / decimal / hexadecimal



## 25. Conversión entre bases



## 26. Divisibilidad (reglas de divisibilidad)


## 27. Números perfectos / abundantes / deficientes


## 28. Números armónicos


## 29. Primos gemelos, primos de Mersenne, etc.


## 30. Prueba de primalidad eficiente (e.g. hasta √n)


## 31. Conteo de divisores de un número


## 32. Suma de divisores


## 33. Números amigables


## 34. Aritmética modular (mod m)


## 35. Propiedades del módulo (e.g. (a + b) % m = ((a % m) + (b % m)) % m)


## 36. Congruencias


## 37. Números triangulares / cuadrados / pentagonales


## 38. Sucesiones (e.g. Fibonacci)


## 39. Teorema de Fermat pequeño


## 40. Criba de Eratóstenes (para generar primos)


## 41. Número de bits (bit count)


## 42. Potencias de 2, 3, 5 (común en DP o greedy)



## 43. Paridad de un número binario



## 44. Logaritmo (log₂, log₁₀, logₑ)





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
