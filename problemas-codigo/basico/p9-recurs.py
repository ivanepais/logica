"""
p9:

Implement a factorial function using recursion.

"""


"""
Cuando una función en lugar de llamar a otra se llama a si misma. 
Debemos poner un tope en su llamada, para que deje de llamarse a si misma. 

f(x) = n * f(x)

función "a" que llama a "a"

 a(x) {   //parametro x
   
   a(...) //parametro base/inicial
 }


 El tope sería un valor inicial. 
 Es una situación en la cual se detecta un parametro x con un valor concreto,
 Se hace un return antes de llamarse recursivamente. 

 Al llegar al valor inicial, se hace un return, se llama recursivamente y vuelve hacia arriba. 
 Entonces una función recursiva ejecuta sus instrucciones hasta llegar al caso inicial (bajando). 
 Al llamarse recursivamente sube y vuelve a ejecutar las instrucciones, así sucesivamente. 


fact:

f! = (f-1)! * f


         1 (caso base)  si n = 0 -> el factorial de 0 es 1.    
   n! = {
         n*(n-1)!       si n > 0 


Recursividad en Torres de Hanói: 
Es la forma más fácil de resolver el problema.
El truco está en dividir un problema grande (mover discos de una torre a otra)
Y transformarlo en un problema más sencillo:

Definimos un caso base que no dependa de la recursividad. 
En el caso de las torres, es cuando la torre de origen solo tiene un disco. 
No necesitaríamos operaciones intermedias, nos alcanza con moverlo de origen hasta destino. 

  
 
"""


"""

tools:

for:
return keys
return values with methods
(x) obj
(obj[x]) elem
.keys()
.values()
x, y .items

obj.["", x]
construct obj(x, y)
construc obj(())
copy()

"""
   


def factorial(num):
    
    if num == 1:
        return 1
         
    else:
         return num * factorial(num-1)
        


def main():
 
    x = factorial(5)
    print (x)
    
    


if __name__ == "__main__":

    main()

