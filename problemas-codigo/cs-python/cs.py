# Diseño: Actualizar valor provisional

"""
Escriba un programa que examine tres variables (x, y, z) e imprima el mayor número impar. 
Si ninguna es impar, debería imprimir el menor de los tres.

"""

""" Diseño ineficiente:"""

"""
if x%2 != 0 and y%2 != 0 and z%2 != 0:
	print(max(x, y, z))
if x%2 != 0 and y%2 != 0 and z%2 == 0:
	print(max(x, y))
if x%2 != 0 and y%2 == 0 and z%2 != 0:
	print(max(x, z))
if x%2 == 0 and y%2 != 0 and z%2 != 0:
	print(max(y, z))
...

"""

""" Diseño eficiente: """

"""
answer = min(x, y, z)
if x%2 != 0:
	answer = x
if y%2 != 0 and y > answer:
	answer = y
if z%2 != 0 and z > answer:
	answer = z
print(answer)

"""


# Diseño: bucle while 

"""Imprimir n input la letra x """

"""
num_x = int(input('How many times should I print the letter
X? '))
to_print = ''
#concatenate X to to_print num_x times
print(to_print)

"""

"""
num_x = int(input('How many times should I print the letterX? '))
to_print = ''
i = 0 
while (i < num_x): 
    to_print = to_print + "x"
    i = i + 1

print(to_print)

"""

"""
x = 3
ans = 0
num_iterations = 0 
while (num_iterations < x):
    ans = ans + x
    num_iterations = num_iterations + 1
print(f'{x}*{x} = {ans}')

"""

"""
Estado inicial -> i = 0

x = 3
ans = 0
num_iterations = 0
mientras 0 < 3
    0 + 3

i = 1
1 < 3 //True
    3 + 3 //6

i = 2 //True
2 < 3
    6 + 3 //9

i = 3
3 < 3 //False

print(3*3 = 9) //True

"""

# Break
"""
para no testear condición
ejecuta el código que está después del bucle

"""
#Find a positive integer that is divisible by both 11 and 12

"""
x = 1
while True:
    if x%11 == 0 and x%12 == 0:
        #print(x)
        break
    x = x + 1
    #print(x)
print(x, 'is divisible by 11 and 12')
"""

"""
Va a contar hasta que sea divisible
imprimimos el valor que verifica break
imprimimos contador
print final 
"""



# For in sequence
"""
tupla: secuencia valores
"""

"""
total = 0
for num in (77, 11, 3):
    print(f'num es: {num}')
    total = total + num
    print(f'total es: {total}')
print(total)
"""

"""
num es
77
11
3

num es: 77
total es: 77
num es: 11
total es: 88
num es: 3
total es: 91

Lo asocia a tres valores, con tres repeticiones

"""


# For in Range

"""
La secuencia de valores está asociada a range
argumentos: inicio, fin, paso

progresión inicio, inicio + paso, inicio + 2*paso, etc.

Si paso es positivo, el último elemento es el entero mayor tal que (inicio + i*paso) sea estrictamente menor que fin. 
Si paso es negativo, el último elemento es el entero menor tal que (inicio + i*paso) sea mayor que fin.

"""

"""
print(range(5, 40, 10))
print(range(40, 5, -10))
"""


"""
5 (inicio) = 5
5+(1*10) = 15
5+(2*10) = 20+5 = 25
5+(3*10) = 30+5 = 35

Hasta 40 (fin) -paso positivo: menor al fin-

print(range(5, 40, 10))= 5, 15, 25, 35

"""

"""
range(40, 5, -10)

40 (inicio) = 40 
40+(1*-10) = 30 
40+(2*-10) = 20
40+(3*-10) = 10

"""


"""
Si se omite el primer argumento de range, el valor predeterminado es 0.
si se omite el último argumento (el tamaño del paso), el valor predeterminado es 1.

"""

"""
range(0, 3)
range(3)
"""

"""
inicio = 0
fin = 3
paso = 1

inicio = 0
fin = 3
paso = 1

Resultado: 0, 1, 2

"""

"""
Los números de la progresión se generan según sea necesario,
por lo que incluso expresiones como range(1000000) consumen poca memoria.

inicio = 0
fin = 1000000
paso = 1

imprime 1mll
"""

x = 4
for i in range(x):
    print(i)


"""
x=4
i = 0 (atada a valor secuancia, fin = 4)

inicio = 0
fin = x
paso = 1

Resultado:
0
1
2
3

"""

"""
x = 3
print(f'x es: {x}')
xans = 0
print(f'xans es: {xans}')
for num_iterations in range(abs(x)):
    print(f'abs es: {abs(x)}')
    print(f'num_iter es: {num_iterations}')
    xans = xans + abs(x)
    print(f'xans es: {xans}')
print(f'{x}*{x} = {xans}')

"""



"""
Estado
x = 3
xans = 0

1-paso:
num_iterations = 0
range:
inicio = 0
paso = 1
fin = abs(x)

xans = 0 + 3

etc

"""


"""
No cambia el valor de num_iterations dentro del cuerpo del bucle for. 
Esto es típico, pero no necesario, lo que plantea la pregunta de qué sucede si la variable de índice se modifica dentro del bucle for. 

Considere

for i in range(2):
    print(i)
    i = 0
    print(i)

##### ¿Crees que imprimirá 0, 0, 1, 0 y luego se detendrá? 

"""

"""
for i in range(2):
    print(i)
    i = 0
    print(i)
"""


"""
Estado:

1.
i = 0
range(inicio 0, paso 1, fin 2)
print(i) -> (i = 0)
i = 0
print(i) -> (i = 0) 

entonces: i=0, i=0 
"""

"""
2.
i = 1
print(i) -> (i = 1)
i = 0
pirnt(i) -> (i = 0)

entonces: 1, 0

final : 0, 0, 1, 0 
"""

"""
Antes de la primera iteración del bucle for, se evalúa la función de rango y el primer valor de la secuencia que genera se asigna a la variable de índice, i. 
Al comienzo de cada iteración subsiguiente del bucle, a i se le asigna el siguiente valor de la secuencia. 
Cuando la secuencia se agota, el bucle termina

Equivalente a:

index = 0
last_index = 1
while index <= last_index:
    i = index
    print(i)
    i = 0
    print(i)
    index = index + 1

"""

"""
Ahora bien, ¿qué opinas? ¿Imprime?

x = 1
for i in range(x):
    print(i)
    x = 4

"""

"""
Paso: 0/1.
x = 1
i = 0
range(inicio 0, fin x, paso 1)
print(i) -> (0)
x = 4


"""
# i ancla a inicio
# range(x) ancla a paso

"""
va a dar 0

Solo 0, porque los argumentos de la función de rango en la línea con for se evalúan justo antes de la primera iteración del bucle y no se reevalúan para iteraciones posteriores.
Ahora, veamos con qué frecuencia se evalúan los elementos al anidar bucles.

Considere

x = 4
for j in range(x):
	for i in range(x):
		x = 2

"""

"""
x = 4
for j in range(x):
    for i in range(x):
        x = 2
"""

"""
1.
x = 4 -> Upaso
j = 0 -> inicio
range (0, 4, 1)
 i = 0
 range(0, 4, 1)
  x = 2 

j*4
i*4
x=2 (*4)

"""


"""
¿Cuántas veces se ejecuta cada uno de los dos bucles? 
Ya vimos que el rango (x) que controla el bucle externo se evalúa la primera vez que se alcanza y no se reevalúa en cada iteración, por lo que hay cuatro iteraciones del bucle externo. 
Esto implica que el bucle interno se alcanza cuatro veces. 

La primera vez que se alcanza, la variable x = 4, por lo que habrá cuatro iteraciones.
Sin embargo, las siguientes tres veces que se alcanza, x = 2, por lo que habrá dos iteraciones cada vez.

En consecuencia, si se ejecuta

x = 3
for j in range(x):
	print('Iteration of outer loop')
	for i in range(x):
		print('Iteration of inner loop')
		x = 2
		
"""

"""
x = 3
for j in range(x):
    print('Iteration of outer loop')
    for i in range(x):
        print('Iteration of inner loop')
        x = 2
"""

# Primera ejecución: imprime outer y tres inner
# Segunda: vuelve a evaluar el valor de x
# ahora es 2, imprime outer y el interno evalua x que es 2
# Ejecuta 2 veces las instrucciones de i. 

"""
x = 3
j*3
print*3

Iteration of outer loop
	Iteration of inner loop
	Iteration of inner loop
	Iteration of inner loop
Iteration of outer loop
	Iteration of inner loop
	Iteration of inner loop
Iteration of outer loop
	Iteration of inner loop
	Iteration of inner loop

"""


"""
for x in range(1, 10, 2):
    print(x)

for x in range(5, 40, 10):
    print(x)
"""


"""
k = 1
for i in range(k):
    print(i)
    k = 4
print(f'k es: {k}')

"""

"""
tot = 0
for c in '12345678':
    tot = tot + int(c)
print(tot)

"""


"""
h = 3
for j in range(h):
    print('Iteration of outer loop')
    for i in range(h):
        print('Iteration of inner loop')
        h = 4
"""


"""
en j se define range 3 [0, 1, 2]
al final de i range se define [0, 1]

"""


# sum primos 2-100

"""
def sum_prime_two_hundred(): 
    for n in range(2, 100):
        if n%1 == 0 and n%n == 0:
            print(n)

sum_prime_two_hundred()
"""


def sieve_primes_verbose(N):
    is_prime = [True] * (N + 1)
    is_prime[0:2] = [False, False]  # 0 y 1 no son primos
    print(f"Inicial: {is_prime}")

    for i in range(2, int(N ** 0.5) + 1):
        if is_prime[i]:
            print(f"\n➡️ {i} es primo. Tachamos múltiplos de {i}:")
            for j in range(i * i, N + 1, i):
                if is_prime[j]:
                    print(f"   - Marcamos {j} como no primo.")
                is_prime[j] = False
            print(f"Estado actual: {is_prime}")

    # Mostrar los números primos encontrados
    primes = [i for i, prime in enumerate(is_prime) if prime]
    print(f"\n✅ Primos hasta {N}: {primes}")
    return primes


"""
sieve_primes_verbose(20)

Inicial: [False, False, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True]

➡️ 2 es primo. Tachamos múltiplos de 2:
   - Marcamos 4 como no primo.
   - Marcamos 6 como no primo.
   - Marcamos 8 como no primo.
   ...
Estado actual: [False, False, True, True, False, True, False, True, False, True, False, True, False, True, False, True, False, True, False, True, False]

➡️ 3 es primo. Tachamos múltiplos de 3:
   - Marcamos 9 como no primo.
   - Marcamos 12 como no primo.
   ...
Estado actual: [...]

✅ Primos hasta 20: [2, 3, 5, 7, 11, 13, 17, 19]


"""

