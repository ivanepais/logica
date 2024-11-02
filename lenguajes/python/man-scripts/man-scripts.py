"""
for n in range(2, 10):
    print("n es:", n)
    
    for x in range(2, n):
        print("x es:", x)
        print("n es:", n)
        print("Se define que:")
        if n % x == 0:
            print(n, 'es igual a', x, '*', n/x)
            break
    else:
    # sigue el bucle sin encontrar un factor
        print(n, 'es un numero primo')
"""

"""
def fib(n): # escribe la serie de Fibonacci hasta n
    #Escribe la serie de Fibonacci hasta n.
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a+b
    print()
    
# Ahora llamamos a la funcion que acabamos de definir:
print('llamamos')
fib(2000)
print('guardamos')
varfib = fib(2000)
print('valor de fibonacci')
print(varfib) 
"""

"""
def fib2(n): # devuelve la serie de Fibonacci hasta n
    #Devuelve una lista conteniendo la serie de Fibonacci hasta n.
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)
        # ver abajo
        a, b = b, a+b
    return result

f100 = fib2(100)
# llamarla

f100
# escribir el resultado
#[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
print(f100) 
"""

def pedir_confirmacion(prompt, reintentos=4, recordatorio='Por favor, intente nuevamente!'):
    while True:
        ok = input(prompt)
        if ok in ('s', 'S', 'si', 'Si', 'SI'):
            return True
        if ok in ('n', 'no', 'No', 'NO'):
            return False
        reintentos = reintentos - 1
        if reintentos < 0:
            raise ValueError('respuesta de usuario inválida')
        print(recordatorio)

#obligatirio
pedir_confirmacion('¿Realmente queres salir?')
#opcional
pedir_confirmacion('¿Sobreescribir archivo?', 2)
#todos
pedir_confirmacion('¿Sobreescribir archivo?', 2, "Vamos, solo si o no!")

hola = "hola mundo"
print(hola)

