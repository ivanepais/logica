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
