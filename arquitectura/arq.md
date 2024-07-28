Arquitectura de Computadoras


|| Decimal a Binario

 Sistema Decimal: 

  Simbolos entre 0 y 9 (base 10)


 Sistema Binario: 
  
  Simbolos 1 y 2 (base 2)


 Se usa para trabajar a bajo nivel como en sistemas enbebidos. 


 Conversión: 

  Hay algoritmos para conseguir la representación binaria (0s y 1s) de cualquier número expresado en decimal. 
  
  
 Convertir un natural a binario sin algoritmo: 
  
  Ej: 23

  Nos apoyamos en el algoritmos de la división euclidiana estandar, sacar el cociente y el resto. 

  Tomamos el número que queremos pasar a binario, 23; lo dividimos por 2 para obtener su cociente y resto. 

  23/2: cociente 11 y resto 1.    
 
  11*2+1 = 23. 

  Tomamos el resto 1 para usarlo posteriormente. 

  Antes de eso, tomamos el cociente 11 y dividirlo consecutivamente por 2. 

  11/2 = 5, r = 1. Nos guardamos el resto 1 y seguimos usando el cociente. 

  5/2 = 2, r = 1

  Vamos a terminar cuando tengamos como cociente el 0. 

  Al dividir 0 entre 2 va a dar 0, no tendría sentido continuar. 

  2/2 = 1, r = 0 

  1/2 = 0, r = 1  (ponemos 0 en cociente y bajamos 1)
 
  Como tenemos cociente 0, terminamos. Vemos que los restos son 0 y 1s como en el sistema binario. 

  Tomamos los restos desde el último calculado (resto del dividendo más pequeños).

  Lo escribimos en este orden. 

  1 0 1 1 1 -> 23 en binario. 

  
  Ej: 67, caso potencia de 2. 

  67/2 = 33, r=1
  
  33/2 = 16, r=1

  16/2 = 8, r=0 

  Nos encontramos con que 16 es resultado de la potencia 2^4. 
  
  A partir de acá, el numero va a ser perfectamente divisible (r=0) por 2, no va a haber más 1s. 

  No tendremos más 1s (resto) hasta la división 1/2. 

  8/2 = 4, r=0
  
  4/2 = 2, r=0
  
  2/2 = 1, r=0
  
  1/2 = 0, r=1 

  1 0 0 0 0 1 1 -> 67 en binario.   
 
  
  Otra regla es que siempre empezamos por 1. 

  Dado que tenemos vamos a tener que hacer 2/2 o 3/2 que va a dar cociente 1. 

  Al final vamos a tener que hacer 1/2 = 0, r=1. 

  
  
|| Binario a Decimal

 De 0 y 1s a 0-9. 

 Aplicamos el algoritmo de Horner uno de sus usos es convertir entre bases de númeración. 

 En este caso tenemos que pasar de la base 2 a la base 10.  
 
 Lo primero que hacemos es asignar un peso o un valor especifico a cada uno de los digitos de entrada. 

 Ej: 1 1 0 1 0 1 0 1 1 0 

 Podemos apuntar el peso/valor a cada número o hacerlo mentalmente. 
 
                   0
 1 1 0 1 0 1 0 1 1 0 
 
 Le pusimos un valor 0 al número más a la derecha, el menos significativo. 
 
 Empezamos a contar en 0. 

 Para cada número que este a la izquierda le damos un peso/valor más que el que está a su derecha. 

 9 8 7 6 5 4 3 2 1 0
 1 1 0 1 0 1 0 1 1 0  

 Lo siguiente es hacer un polinomio suma de productos, productos entre 1 digito y una potencia. 

 Para cada digito en la posición 9, 8, 7, 6, etc; tendremos que fabricar una suma consistente en multiplicar. 

 Multiplicar para cada uno de los números. 

 Para el caso de 1 multiplicado por 2^n dónde n va a ser la posición del digito dentro de todo el número binario. 
 
 Ej: 1*2^n + ... + ...

 1*2^9 + 1*2^8 + 0*2^7 + 1*2^6 + 0*2^5 + 1*2^4 + 0*2^3 + 1*2^2 + 1*2^1 + 0*2^0

 Simplificar: 
 
 Cuando haya multiplicación por 0, eliminar termino. 

 1*2^9 + 1*2^8 + 1*2^6 + 1*2^4 + 1*2^2 + 1*2^1
 
 Y multiplicación por 1. 

 2^9 + 2^8 + 2^6 + 2^4 + 2^2 + 2^1
 
  
 Para pasar un binario a decimal hacemos una suma de potencias dónde las potencias serán 2^peso del digito 1. 

 2^n de 1.

 2^9 + 2^8 + 2^6 + 2^4 + 2^2 + 2^1 

 = 512 + 256 + 64 + 16 + 4 + 2
  
 = 854



|| Operadores lógicos de Bit

 Se trata de realizar operaciones lógicas usando los 0 y 1s

 Nos permiten hacer manipulaciones con bits o con número si los pasamos a binario. 

 Es la base de la computación, permite hacer circuitos, diseñar programas ensambladores y en lenguajes de programamcion. 
 


|| Operador Binario NOT

 Es un operador unario, operador que lleva un solo operando (valor). Es el único. 

 Un solo operando como: 

 NOT 0

 NOT 1

 0 y 1 operandos y no operador

 
 El operador NOT, niega invirtiendo el valor o cambiandolo. 

 NOT 0 -> 1

 NOT 1 -> 0

 Todo lo que va a ser es cambiar el valor bit haciendo un flip. 

 
 Tabla de verdad: 

  Cuando trabajamos con los operadores lógicos podemos hacer la tabla de la operación. 
 
  A la izquierda va a ir inputs y a la derecha los outputs de operar ese valor (operador + valor). 
 
  Ej: input x, pasamos valores x, que nos devuelve not x

  input | output
    x     NOT x
    0      1 
    1      0 


 Complejidad: número binario grande de varios digitos. 

 Ej: not de 01100110001101
 
 En el caso de la operación not, podemos ir negando uno a uno. 

 NOT 01100110001101

 = 10011001110010 
 

 Operador bitwise not (~) en lenguajes de programación: 

 Ej: ~varX

 Negado de varX

 El valor de varX pasado a binario se va a negar. 

 ~14 -> 1110 -> 0001
 
 Si los pasamos a decimal es = 1
 


|| Operador Binario AND

 Sus simbolos pueden ser: 
  
  ^ (lógica)
  
  x (electrónica)
  
  & (programación)
  
  AND

 Es un operador binario, tiene dos operandos: uno a la izq y a la der. 

 Como antes era unario, no porque trabaje con números

 Ej, x ^ y = z. 

 Si operamos bits solo hay dos simbolos: 

 0 ^ 1 = ...


 Tabla de Verdad: 
 
  Como tiene dos operandos es más grande que la tabla unaria. 

  x  |  y  | x^y
  0     1    0
  0     1    0
  1     0    0
  1     1    1

 Tiene cuatro resultados posibles. 

 Solo evalúa a uno cuando lo de la izquierda y lo de la derecha sea uno. 

 Y evalúa a 0 cuando hay un 0 en izq o derecha.  

 
 Operar binario grande: 

  Ej: Como es un operador binario necesitamos dos operandos. 
  
  1011101101 ^ 0100111011
 
  Alineamos a la derecha el bit menos significativo quede alineado uno con el otro. 

  1011101101
  0100111011

  Aplicamos la operación x^y digito por digito a nivel columna. 

  La operación va a ser resultado 0 si hay 0 en izq o der. 
  
  Y va a ser resultado 1 si hay 1 a la izq y der.

  
  ^ 1011101101
    0100111011             
  = 0000101001 


 En programamción se suele usar para limitarnos a un único valor. 

 Sobretodo cuando tenemos mascaras de bits de tal manera que el número grande, podemos diferenciar que valor hay en un bit concreto. 

 Si está encendido o apagado, aplicandole una mascara y la operación ^.    



|| Operador OR

 Sus simbolos son: 
  
  ∨ (lógica
 
  + (electrónica)
    
  | (programación)

  OR

 
 Es un operador binario, tiene que llevar un operando a la izq y otro la der. 
 
 Evalua a 1, si al menos uno de sus dos valores es un uno. 

 Evalua a 0, solo si a ambos lados hay un 0. 

 En el momento que hay un uno a la izq o der, da 1. 
 

 Tabla de verdad: 

  x | y | x ∨ y
  0   0     0 
  0   1     1
  1   0     1 
  1   1     1 
 
 
 Operar números binarios grandes: 

  ∨ 1001011100
      10101101

  Alineamos los valores de la forma que sus números menos significativos queden a la par. 

  Operamos los dos valores en cada columna siguiendo las reglas del operador OR. 

  Cuando nos encontramos con una columna vacia, es 0. 
 
  ∨ 1001011100
    0010101101
  = 1011111101



|| Operador XOR

 Significa OR Exclusive

 Podemos encontrarlo como: 
  
  XOR
  
  EOR
  
  ⊕
 
 Es un operador binario, tiene que llevar un operando a la izq y otro la der. 

 Su resultado es 1, solamente cuando haya un 1 a la izq o der. 
 
 Es exclusivo en un lugar, no puede estar en los dos.  

 Su resultado es 0, haya dos 1 y dos 0. 


 Tabla de verdad: 
  
  x | y | x⊕y
  0   0    0 
  0   1    1
  1   0    1
  1   1    0 

 Tiene que haber un 1; un número impar de 1s. 

 Si nos encontramos con a ⊕ b ⊕ c. 
 
 Si hacemos a ⊕ b 

 Y despues hacemos r ⊕ c

 Cuando tenemos varias variables, si siguimos haciendo tablas de verdad. 
 
 El operador XOR encadenado solamente va a dar XOR 1 cuando el número de 1s en la entrada sea impar. 

 En un escenario como este debemos prestar atención al número de unos en la entrada.   
 
 Por eso es mejor separar las variables en dos y operar. 

 Si operamos muchas juntas XOR es mas complicado
  
  a ⊕ b ⊕ c
  1   1   1 = 1  dado que  1 | 1 = 0 y 0 | 1 = 1 (xor están en un solo lado)


 Operar números binarios grandes: 
  
  Alineamos y de izquierda a derecha, no hay cantidades resto ni prestadas.  

  ⊕ 01100011 
    10110001 
  = 11010010

  Cuando vemos que si los dos son iguales, va a dar 0. 

  Si vemos un solo 1, va a dar 1. 

  O otra forma de verlo es que cuando son distintos da 1. 

  Si son iguales da 0. 








