"""

Debe realizar las siguientes tareas.

secuencia Collatz: 

Escribe una función llamada collatz() que tenga un parámetro llamado número.
Si el número es par, entonces collatz() debe imprimir número // 2 y devolver este valor.
Si el número es impar, entonces collatz() debe imprimir y devolver 3 * número + 1.

Luego escribe un programa que permita al usuario escribir un entero y que siga llamando a collatz() en ese número hasta que la función devuelva el valor 1.
(Sorprendentemente, esta secuencia funciona para cualquier entero; tarde o temprano, usando esta secuencia, ¡llegarás a 1! Incluso los matemáticos no están seguros de por qué.
Tu programa está explorando lo que se llama la secuencia de Collatz, a veces llamada "el problema matemático imposible más simple").

Recuerda convertir el valor de retorno de input() a un entero con la función int(); de lo contrario, será un valor de cadena.

Sugerencia: Un número entero es par si el número % 2 == 0, y es impar si el número % 2 == 1

La salida de este programa podría verse así:

Ingrese el número:
3
10
5
16
8
4
2
1



Validación de entrada: 

Agregue las instrucciones try y except al proyecto anterior para detectar si el usuario ingresa una cadena que no sea un número entero.
Normalmente, la función int() generará un error ValueError si se le pasa una cadena que no sea un número entero, como en int('puppy').
En la cláusula except, imprima un mensaje al usuario indicando que debe ingresar un número entero.

"""


#fun collatz() 
def collatz(number):
    #ifs
    if number % 2 == 0:
        return number // 2
    elif number % 2 == 1:
        return 3 * number + 1


print("Introduce un número")
number = int(input())

while True:
    if number != 1:
        number = collatz(number)
        print (number)
    else:                
        break


"""
#main()
print("Introduce un número")
number = int(input())
print("Haz introducido: " + str(number))

while True:
    print(collatz(number))

    if number == 1:
        break
"""

"""
permita al usuario escribir un entero y que siga llamando
a collatz()en ese número hasta que la función devuelva
el valor 1.

"""



"""
def collatz(number):
    return number // 2 if (number % 2) == 0 else number * 3 + 1

if __name__ == '__main__':
    print ('Enter a number greater than one: ')
    try:
        number = int(input())
        while True:
            if number != 1:
                number = collatz(number)
                print (number)
            else:                
                break
    except:
        print ('Error: Invalid Value. You did not enter an integer.')

"""


  
"""
#main()

print("Introduce un número")
number = collatz(int(input()))
print(number)
"""

"""
print("Introduce un número")
number() #esto ya es un entero, no una func
"""

"""
print("Introduce un número")
print(collatz(3))
"""

"""
while number != 1:
    collatz()
    if number == 1:
        print("Ha finalizado el programa")
        break
"""



#inputs
"""
Siempre será una cadena, si no lo convertimos con int(), float()

myName = input()
print('It is good to meet you, ' + myName)
print(type(myName)) //str

print('What is your age?')    # ask for their age
myAge = input()
print(type(myAge)) //str

Para imprimir un input, convertir var a str o usar f"strings"
print('You will be ' + str(int(myAge) + 1) + ' in a year.')

asi podemos operar ese input int con +1 y despues con str()
se convierte en cadena. 

"""

#while
"""
spam = 0
while spam < 5:
    print('Hello, world.')
    spam = spam + 1


name = ''
while name != 'your name':
    print('Please type your name.') #solo imprime 
    name = input()                  #solo pide input
print('Thank you!')


while True:
    print('Please type your name.')
    name = input()
    if name == 'your name':
        break                     #break, continue
print('Thank you!')               #only on while, for, if?


while True:
    print('Who are you?')
    name = input()
    
    if name != 'Joe':
        continue
    
    print('Hello, Joe. What is the password? (It is a fish.)')
    password = input()
    
    if password == 'swordfish':
        break
    
print('Access granted.') 


#values like True and False
name = ''
while not name:
    print('Enter your name:')
    name = input()
print('How many guests will you have?')
numOfGuests = int(input())
if numOfGuests:
    print('Be sure to have enough room for all your guests.')
print('Done')


"""


#for
"""
print('My name is') #solo imprime 
for i in range(5):  #imprime 5 veces la cadena y la var i. 
    print('Jimmy Five Times (' + str(i) + ')')


#gaus sum
total = 0
for num in range(101):
    total = total + num
print(total)


#while like for

print('My name is')
i = 0
while i < 5:
    print('Jimmy Five Times (' + str(i) + ')')
    i = i + 1


#for in range(len(obj)) #like while, dinam


#range args
#inicio/start, detencion/stop, paso/step

for i in range(12, 16):
    print(i)

for i in range(0, 10, 2):
    print(i)

"""


#import
"""
#import modules
import random
for i in range(5):
    print(random.randint(1, 10))


#import sys exit
import sys

while True:
    print('Type exit to exit.')
    response = input()
    if response == 'exit':
        sys.exit()
    print('You typed ' + response + '.')

"""



#func, var-func, none, key params
"""
def hello(name):
    print('Hello, ' + name) #print string+param

hello('Alice') #call+arg
hello('Bob')


import random
def getAnswer(answerNumber): #retornara un valor segun param
    if answerNumber == 1:
        return 'It is certain'
    elif answerNumber == 2:
        return 'It is decidedly so'
    ...

r = random.randint(1, 9) #var random
print(r)
fortune = getAnswer(r)   #var llamada+arg-> var r
print(fortune)           #imprime func


#o evaluamos varios valores en una expresion 
#random, func(el param sera random) y print valor entero. 

print(getAnswer(random.randint(1, 9)))


#return None
spam = print('Hello!')
Hello!
  
None == spam
True


#keyword params

print('Hello')
print('World')

print('Hello', end='')
print('World')

print('cats', 'dogs', 'mice') #return: cats dogs mice

print('cats', 'dogs', 'mice', sep=',') #return: cats,dogs,mice


"""


#exceptions 
"""
def spam(divideBy):
    try:
        return 42 / divideBy
    except ZeroDivisionError:
        print('Error: argumento no válido.')

print(spam(2))   
print(spam(12))
print(spam(0))


import time, sys
indent = 0 # How many spaces to indent.
indentIncreasing = True # Whether the indentation is increasing or not.

try:
    while True: # The main program loop.
        print(' ' * indent, end='')
        print('********')
        time.sleep(0.1) # Pause for 1/10 of a second.

except KeyboardInterrupt:
    sys.exit()


"""


#ejer if, for-range, while
"""
#while
spam = 1
while spam < 4: 

    if spam == 1: 
        print('Hello')
        spam += 1
  
    elif spam == 2 : 
        print('Howdy')
        spam += 1
  
    else: 
        print('Greetings!')
        spam += 1

        
#for
for spam in range(1, 4): 
    if spam == 1: 
        print('Hello')
    elif spam == 2: 
        print('Howdy')
    else: 
        print('Greetings!')



#range
for spam in range(1, 4, 1): 
    if spam == 1: 
        print('Hello')
    elif spam == 2:
        print('Howdy')
    else:
        print('Greetings!')


#1-10 for

for i in range(1, 11): 
    print(i)


#1-10 while

i = 1
while i <= 10: 
    print(i)
    i += 1 


#1-10 range
for i in range(0, 12, 2): 
    print(i)


for i in range(11):
    print(i)
    
"""


#gues
"""
#secretNumber = random.randint(1, 20)
#for guessesTaken in range(1, 7): guesesTaken var    
 #guess = int(input())
 #if guess < secretNumber:

#if guess == secretNumber:
#print('Good job! You guessed my number in ' + str(guessesTaken) + ' guesses!')
#print('Nope. The number I was thinking of was ' + str(secretNumber))

    
# This is a guess the number game.
import random
secretNumber = random.randint(1, 20)
print('I am thinking of a number between 1 and 20.')

# Ask the player to guess 6 times.
for guessesTaken in range(1, 7):
    print('Take a guess.')
    guess = int(input())

    if guess < secretNumber:
        print('Your guess is too low.')
    elif guess > secretNumber:
        print('Your guess is too high.')
    else:
        break    # This condition is the correct guess!

if guess == secretNumber:
    print('Good job! You guessed my number in ' + str(guessesTaken) + ' guesses!')
else:
    print('Nope. The number I was thinking of was ' + str(secretNumber))


"""



#pi, pa ti
"""
#contadores
wins = 0
losses = 0
ties = 0

#bucle inf

#print('%s Wins, %s Losses, %s Ties' % (wins, losses, ties))

#playerMove = input()

#playerMove, computerMove (ramdom and string and if) compare strings
#active count and print

if playerMove == 'q':
    sys.exit() # Quit the program.
if playerMove == 'r' or playerMove == 'p' or playerMove == 's':
    break # Break out of the player input loop.

# Display what the player chose:
    if playerMove == 'r':
        print('ROCK versus...')

# Display what the computer chose:
    randomNumber = random.randint(1, 3)
    if randomNumber == 1:
        computerMove = 'r'
        print('ROCK')

 # Display and record the win/loss/tie:
    if playerMove == computerMove:
        print('It is a tie!')
        ties = ties + 1
    elif playerMove == 'r' and computerMove == 's':
        print('You win!')
        wins = wins + 1
        
"""
