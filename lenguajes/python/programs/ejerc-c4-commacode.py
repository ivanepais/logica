#comma code

"""
returns a string with all the items separated
by a comma and a space, with and inserted before the
last item.
"""

#func

"""
def listToString (list):
    for i in range(len(list)): 
        print(i)

#return
0
1
2
3

"""

"""
def listToString (list):
    for i in range(len(list)): 
        print(list[i])

#return
manzanas
bananas
tofu
gatos

"""


"""
def listToString (list):
    for index, item in enumerate(list): 
        print(index, item)

#return
0 manzanas
1 bananas
2 tofu
3 gatos

"""


"""
def printList(list):

    if not list:
        print('List is empy')

    else:
        print(list)


def converList(list):
    
    for i in range(len(list)):
        #convert arr to string
        #take elem and concatenate
        #string empy, inmuta, operats, met like arr
        print(list[i] + ", ")

"""


"""
def listToString (list):
    print(list[0], list[1], list[2])

"""
        


"""
#return
manzanas, 
bananas, 
tofu, 
gatos,

"""

"""
#main 
spam = ['manzanas', 'bananas', 'tofu', 'gatos']
spam2 = []
printList(spam)
printList(spam2)

converList(spam)
converList(spam2)
"""

"""
return:
passing the previous spam list to the function would
return 'apples, bananas, tofu, and cats'.

your function should be able to work with any list value
passed to it. Be sure to test the case where an empty
list [] is passed to your function.

"""


"""
catNames = []
while True:
    print('Enter the name of cat ' + str(len(catNames) + 1) + ' (Or enter nothing to stop.):')
    name = input()
    if name == '':
        break
    catNames = catNames + [name]  # list concatenation
print('The cat names are:')
for name in catNames:
    print('  ' + name)
"""



"""
for i in range(len(obj))
#can access to index i
#and value of index i with obj[i]

supplies = ['pens', 'staplers', 'flamethrowers', 'binders']
for i in range(len(supplies)):
    print('Index ' + str(i) + ' in supplies is: ' + supplies[i])

Index 0 in supplies is: pens
Index 1 in supplies is: staplers
Index 2 in supplies is: flamethrowers
Index 3 in supplies is: binders

"""


"""
#enumerate() return i and obj[i]
#instead of using the range(len(someList)) for i in...
#if need index and the elem
supplies = ['pens', 'staplers', 'flamethrowers', 'binders']
for index, item in enumerate(supplies):
    print('Index ' + str(index) + ' in supplies is: ' + item)

"""


"""
#split single instruction across multiple lines with \
print('Four score and seven ' + \
      'years ago...')
Four score and seven years ago...

"""


"""
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


#coinflip
"""
averiguar con qué frecuencia aparece una racha de seis caras
o una racha de seis cruces en una lista generada aleatoriamente
de caras y cruces. Tu programa divide el experimento en dos
partes: la primera genera una lista de valores de "cara"
y "cruz" seleccionados aleatoriamente, y la segunda parte
verifica si hay una racha en ella. Pon todo este código
en un bucle que repita el experimento 10.000 veces
para que podamos averiguar qué porcentaje de lanzamientos
de moneda contiene una racha de seis caras o cruces seguidas.

Como pista, la llamada a la función random.randint(0, 1)
devolverá un valor 0 el 50% de las veces y un valor 1 el
otro 50% de las veces.


"""


"""
import random
numberOfStreaks = 0
for experimentNumber in range(10000):
# Código que crea una lista de 100 valores de "cara" o "cruz".


#all in while 1000 

#first part
often = 0 
heads = 0
tails = 0
SixHeads = 0
SixTails = 0

listHeadsTails = []

#second part
while 

if numberOfStreaks

print(heads)
print(tails)
print(SixHeads)
print(SixTails)


#main
flips = ' ' 
# Código que verifica si hay una racha de 6 caras o cruces seguidas.
print('Chance of streak: %s%%' % (numberOfStreaks / 100))

"""


"""
esto es solo una estimación, pero 10 000 es un tamaño
de muestra decente. Algunos conocimientos de matemáticas
podrían brindarle la respuesta exacta y ahorrarle
el problema de escribir un programa, pero los programadores
son notoriamente malos en matemáticas.
"""


"""
random.randint(0, 1)

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


"""

"""
#magic8ball2
#Instead of several lines of nearly identical elif statements
# can create a single list that the code works with.
messages = ['It is certain',
    'It is decidedly so',
    'Yes definitely',
    'Reply hazy try again',
    'Ask again later',
    'Concentrate and ask again',
    'My reply is no',
    'Outlook not so good',
    'Very doubtful']

print(messages[random.randint(0, len(messages) - 1)])


print(len(messages)) #9 num elem
print(len(messages)-1)#8 like index 0-8 -> 9 elem


#use as the index for messages
random.randint (0, len(messages) - 1)

random number to use for the index
regardless of the size of messages.
between 0 and the value of len(messages) - 1. 

#benefit can easily add and remove strings to the messages
#without changing other lines of code.

"""

"""
import random
numberOfStreaks = 0
for experimentNumber in range(10000):
    # Code that creates a list of 100 'heads' or 'tails' values.
    ListHeadsTails = []
    ListHeadsTails.append('heads')  
    ListHeadsTails.append('tails')
    random.randint(0,1)

    # Code that checks if there is a streak of 6 heads or tails in a row.

print('Chance of streak: %s%%' % (numberOfStreaks / 100))

"""



#comma code

"""
def my_function(my_list):
    for i in range(len(my_list) - 1):
        print(my_list[i] + ', ', end='')
    print('and ' + my_list[i + 1])

spam = []

while True:
    item = input('Please enter an item for your list or press enter to stop.\n')
    if item is not '':
        spam.append(item)
    else:
        break

my_function(spam)
"""



"""
def list_joiner(list):
    #Take a list and print it as an Oxford comma having sentence.
    count = 0
    joined = ''
    while count < len(list) - 2:
        joined += list[count] + ', '
        count += 1
    joined += list[-2] + ' and '
    joined += list[-1] + '.'
    return joined

#main
spam = ['manzanas', 'bananas', 'tofu', 'gatos']
print(list_joiner(spam))

"""




# using ast.literal_eval change the input(string) to a list in order to process

import ast

def list2str(row_list):
    output = ''
    for i in range(len(row_list)):
        if i != len(row_list) - 1:
            output += row_list[i] + ', '
        else:
            output += 'and ' + row_list[i]
    return output

if __name__ == '__main__':
    
    try:
        print ('Enter a list:')
        row_list = ast.literal_eval(input())
        print (list2str(row_list))
    except:
        print ('Error: Invalid Value. You did not enter a list.')




#coin flip

"""

import random

N = 10_000
S = 6
HEAD = 'H'
TAIL = 'T'
T = [HEAD if random.randint(0, 1) else TAIL for _ in range(N)]
c = T[0]
s = 1
STREAKS = 0
for t in T[1:]:
    if t == c:
        s += 1
        if s == S:
            STREAKS += 1
            s = 0
    else:
        c = t
        s = 1
print(STREAKS)

"""



"""
#string over  list

import random

number_of_streaks = 0

for experiment_number in range(10000):
    
    # Code that creates a list of 100 'heads' or 'tails' values
    coin_list = ''
    for i in range(100):
        if random.randint(0, 1) == 0:
            coin_list = coin_list + 'H' # heads
        else:
            coin_list = coin_list + 'T' # tails
    
    # Code that checks if there is a streak of 6 heads or tails in a row
    if 'HHHHHH' in coin_list or 'TTTTTT' in coin_list:
        number_of_streaks +=1

print('Chance of streak: %s%%' % (number_of_streaks / 100))

"""


"""
#using list

# Code that creates a list of 100 'heads' or 'tails' values
coin_list = []
for i in range(100):
    if random.randint(0, 1) == 0:
        coin_list.append('H') # heads
    else:
        coin_list.append('T') # tails

# Code that checks if there is a streak of 6 heads or tails in a row
coin_string = ''.join(coin_list)
if 'HHHHHH' in coin_string or 'TTTTTT' in coin_string:
    number_of_streaks +=1
    
"""


"""
# Code that creates a list of 100 'heads' or 'tails' values
flips   = "".join(random.choice('HT') for _ in range(100))

# Code that checks if there is a streak of 6 heads or tails in a row
if 'HHHHHH' in flips or 'TTTTTT' in flips:
    number_of_streaks +=1

"""


"""
#Defining Inputs and importing modules
import random
numberOfStreaks = 0
mylist=[]
countH=0
countT=0
conuterTail=[]
conuterHead=[]

for experimentNumber in range(10000):
# Code that creates a list of 10000 'heads' or 'tails' values.
    rndnum=random.randint(0,1);
    if rndnum==0:
        countH=0 # if the random number is "0" then "HEAD" counts will be reset
        mylist.append(['T'])
        countT+=1
    else:
        countT=0 # if the random number is "1" then "TAIL" counts will be reset
        mylist.append(['H'])
        countH+=1
        
# Code that checks if there is a streak of 6 heads or tails in a row.
    if countT==6:
        conuterTail.append(countT)
    elif  countH==6:
        conuterHead.append(countH);


numberOfStreaks=len(conuterHead)+len(conuterTail)

print('Chance of streak: %s%%' % (numberOfStreaks / 100))

"""


"""
import random
numberOfStreaks = 0
countH = 0
countT = 0
iterations_of_experiment = 10000
for experimentNumber in range(iterations_of_experiment):
    #Code that creates a list of 100 'heads' or 'tails' values
    setOfHundred = [] #set list to empty each iteration
    
    for i in range(100):
        if random.randint(0, 1) == 0:
            countT = 0  #Set Tails count to zero on head flip
            setOfHundred.append('H')
            countH += 1
            if countH == 6:
                numberOfStreaks += 1
                countH = 0 #Reset counter to zero to capture -
        else:              #multiple streaks
            countH = 0
            setOfHundred.append('T')
            countT += 1
            if countT == 6: 
                numberOfStreaks += 1
                countT = 0

print('In ' + str(iterations_of_experiment) + \
    ' iterations of 100 coin tosses, there were ' + str(numberOfStreaks) + \
    ' streaks of 6 consecutive like coin flips.')
print('Chance of streak: ' + str(numberOfStreaks / iterations_of_experiment * 100) + '%')

"""



#grid

"""
grid = [['.', '.', '.', '.', '.', '.'],
        ['.', 'O', 'O', '.', '.', '.'],
        ['O', 'O', 'O', 'O', '.', '.'],
        ['O', 'O', 'O', 'O', 'O', '.'],
        ['.', 'O', 'O', 'O', 'O', 'O'],
        ['O', 'O', 'O', 'O', 'O', '.'],
        ['O', 'O', 'O', 'O', '.', '.'],
        ['.', 'O', 'O', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.']]


for i in range(6):
    for j in range(9):
        print(grid[j][i], end='')
    print('')


"""


"""

for i in range(len(grid[0])):
    for j in range(len(grid)):
        print(grid[j][i], end='')
    print()
    
"""


"""
def plot_grid(grid):
    num_rows = len(grid)
    num_cols = len(grid[0])

    for col in range(num_cols):        
        for row in range(num_rows):
            print (grid[row][col], end='')
        print()

if __name__ == '__main__':
    plot_grid(grid)

"""

