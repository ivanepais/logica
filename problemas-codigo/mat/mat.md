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



### Números Complejos



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
