#arr3

#methods
#“called on” a value.
#if a list value were stored in spam
spam.index('hello')
#methods for finding, adding, removing, and otherwise
#manipulating values in a list


#index() find value in list
spam = ['hello', 'hi', 'howdy', 'heyas']
spam.index('hello')
0

spam.index('heyas')
3

spam.index('howdy howdy howdy')
Traceback (most recent call last):
ValueError: 'howdy howdy howdy' is not in list


#duplicates of the value in the list
#the index of its first appearance is returned.
#index() returns 1, not 3
spam = ['Zophie', 'Pooka', 'Fat-tail', 'Pooka']
spam.index('Pooka')
1



#Adding Values in list
#append() final

spam = ['cat', 'dog', 'bat']
spam.append('moose')
spam
['cat', 'dog', 'bat', 'moose']

#insert() every place with args(index, value)
spam = ['cat', 'dog', 'bat']
spam.insert(1, 'chicken')
spam
['cat', 'chicken', 'dog', 'bat']

"""
code is spam.append('moose') and spam.insert(1, 'chicken'),
not spam = spam.append('moose') and spam = spam.insert(1, 'chicken').

Neither append() nor insert() gives the new value of spam as
its return value.

(In fact, the return value of append() and insert() is None

Modifying a list in place “Mutable and Immutable Data Types”
"""

#append(), insert() are list methods, only on list values

eggs = 'hello'
eggs.append('world')
Traceback (most recent call last):
AttributeError: 'str' object has no attribute 'append'

bacon = 42
bacon.insert(1, 'world')
Traceback (most recent call last):
AttributeError: 'int' object has no attribute 'insert'


#remove() arg is elem to remove
spam = ['cat', 'bat', 'rat', 'elephant']
spam.remove('bat')
spam
['cat', 'rat', 'elephant']


#value that does not exist, ValueError
spam = ['cat', 'bat', 'rat', 'elephant']
spam.remove('chicken')
Traceback (most recent call last):
ValueError: list.remove(x): x not in list


#if multiple value, only remove first
spam = ['cat', 'bat', 'rat', 'cat', 'hat', 'cat']
spam.remove('cat')
spam
['bat', 'rat', 'cat', 'hat', 'cat']

"""
del statement is good to use when you know the index of the
value you want to remove from the list.

The remove() method is useful when you know the value you
want to remove from the list
"""


#sorting sort()

#number values or lists of strings
spam = [2, 5, 3.14, 1, -7]
spam.sort()
spam
[-7, 1, 2, 3.14, 5]
#- to +

>>> spam = ['ants', 'cats', 'dogs', 'badgers', 'elephants']
>>> spam.sort()
>>> spam
['ants', 'badgers', 'cats', 'dogs', 'elephants']
#abc


#True key arg, reverse
spam.sort(reverse=True)
spam
['elephants', 'dogs', 'cats', 'badgers', 'ants']
#cba

spam = [2, 5, 3.14, 1, -7]
spam.sort(reverse=True)
spam
[5, 3.14, 2, 1, -7]
#+ to -

"""
the sort() method sorts the list in place;
don’t try to capture the return value by writing code
like spam = spam.sort().
"""


#cannot sort lists that have both number values and string
#Python doesn’t know how to compare these values.
spam = [1, 3, 2, 4, 'Alice', 'Bob']
spam.sort()
TypeError: '<' not supported between instances of 'str' and 'int'


#sort() uses “ASCIIbetical order” rather than actual alphabetical order for sorting strings.
#This means uppercase letters come before lowercase letters

spam = ['Alice', 'ants', 'Bob', 'badgers', 'Carol', 'cats']
spam.sort()
spam
['Alice', 'Bob', 'Carol', 'ants', 'badgers', 'cats']


#regular alphabetical order
#str.lower for the key keyword in sort()
# treat all the items in the list as if they were lowercase
#without actually changing the values in the lis
spam = ['a', 'z', 'A', 'Z']
spam.sort(key=str.lower)
spam
['a', 'A', 'z', 'Z']



#reverse()
#quickly reverse the order of the items
spam = ['cat', 'dog', 'moose']
spam.reverse()
spam
['moose', 'dog', 'cat']


#EXCEPTIONS TO INDENTATION RULES

#indentation tells what block it is in

"""
lists can actually span several line
The indentation of these lines does not matter
Python knows that the list is not finished until it
sees the ending square bracket.
"""
spam = ['apples',
    'oranges',
                    'bananas',
'cats']
print(spam)


#split single instruction across multiple lines with \
print('Four score and seven ' + \
      'years ago...')
Four score and seven years ago...

"""
useful when you want to rearrange long lines of code
to be a bit more readable.
"""

"""
Like the sort() list method, reverse() doesn’t return a list
This is why you write spam.reverse()
instead of spam = spam.reverse().
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

"""
print(len(messages)) #9 num elem
print(len(messages)-1)#8 like index 0-8 -> 9 elem

"""
#use as the index for messages
random.randint (0, len(messages) - 1)
"""
random number to use for the index
regardless of the size of messages.
between 0 and the value of len(messages) - 1. 
"""
#benefit can easily add and remove strings to the messages
#without changing other lines of code.


#Sequence Data Type
#include lists, strings, range objects returned by range() and tuples 
#string to be a “list” of single text characters. 
"""
things you can do with lists can also be done with strings
and other values of sequence types:
indexing; slicing; and using them with for loops,
with len(), and with the in and not in operators. 
"""

name = 'Zophie'
name[0]
'Z'

name[-2]
'i'

name[0:4]
'Zoph'

'Zo' in name
True

'z' in name
False

'p' not in name
False

for i in name:
    print('* * * ' + i + ' * * *')

* * * Z * * *
* * * o * * *
* * * p * * *
* * * h * * *
* * * i * * *
* * * e * * *


#Mutable and Immutable Data Types

#List value is a mutable data type
#it can have values added, removed, or changed.

#string is immutable: it cannot be changed
name = 'Zophie a cat'
name[7] = 'the'
Traceback (most recent call last):
TypeError: 'str' object does not support item assignment


#way to “mutate” a string is to use slicing and concatenation
name = 'Zophie a cat'
newName = name[0:7] + 'the' + name[8:12]
name
'Zophie a cat'

newName
'Zophie the cat'

"""
used [0:7] and [8:12] to refer to the characters
that we don’t wish to replace.
Notice that the original 'Zophie a cat'
string is not modified, because strings are immutable.
"""


#this code does not modify the list eggs
>>> eggs = [1, 2, 3]
>>> eggs = [4, 5, 6]
>>> eggs
[4, 5, 6]
#change all content

"""
new and different list value ([4, 5, 6]) is overwriting
the old list value ([1, 2, 3])
"""

"""
the contents of eggs are replaced with a new list value.
list has been changed, not overwritten. 
"""

#modify the original list in eggs

#have to do something like this
eggs = [1, 2, 3]
del eggs[2]
del eggs[1]
del eggs[0]
eggs.append(4)
eggs.append(5)
eggs.append(6)
eggs
[4, 5, 6]
#change elem

"""
del statement and the append() method modify
the same list value in place.
changes the value in place since the variable’s value
is not replaced with a new list value.
"""


#tuple data type,

#immutable form of the list data type.

#typed with ()
eggs = ('hello', 42, 0.5)
eggs[0]
'hello'

eggs[1:3]
(42, 0.5)

len(eggs)
3


#cannot have their values modified, appended, or removed. 
eggs = ('hello', 42, 0.5)
eggs[1] = 99
TypeError: 'tuple' object does not support item assignment


#if have only one value indicate this whit comma at final
"""
Python will think you’ve just typed a value inside regular parentheses.
"""
type(('hello',))
<class 'tuple'>

type(('hello'))
<class 'str'>

#use tuples when want not changes. 
#If need an ordered sequence of values that never changes
#Python can implement some optimizations that make codeusing tuples slightly faster than code using lists


#converting with list() and tuple()
tuple(['cat', 'dog', 5])
('cat', 'dog', 5)

list(('cat', 'dog', 5))
['cat', 'dog', 5]

list('hello')
['h', 'e', 'l', 'l', 'o']
#use if you need a mutable version of a tuple value.


#References

#variables “store” strings and integer values. 
#Technically, variables are storing references to the computer memory locations where the values are stored.
spam = 42
cheese = spam
spam = 100
spam
100

cheese
42

#When you assign
"""
42 to the spam variable, you are actually creating the 42 value
in the computer’s memory and storing a reference to it
in the spam variable.
"""

#When you copy the value
"""
in spam and assign it to the variable cheese,
you are actually copying the reference.
Both the spam and cheese variables refer to the 42 value in the computer’s memory.
"""

#When you later change the value
"""
in spam to 100, you’re creating a new 100 value and storing
a reference to it in spam.
This doesn’t affect the value in cheese.
"""

#Integers are immutable
"""
values that don’t change; changing the spam variable
is actually making it refer to a completely different value in memory.

"""


#lists don’t work this way, values can change; mutable
spam = [0, 1, 2, 3, 4, 5]
cheese = spam # The reference is being copied, not the list.
cheese[1] = 'Hello!' # This changes the list value.
spam
[0, 'Hello!', 2, 3, 4, 5]

cheese # The cheese variable refers to the same list.
[0, 'Hello!', 2, 3, 4, 5]

"""
The code touched only the cheese list
but it seems that both the cheese and spam lists have changed.
"""

#When you create the list you assign a reference to it in the spam variable.
#next line,copies only the list reference in spam to cheese, not the list value itself

"""
This means the values stored in spam and cheese now both
refer to the same list. There is only one underlying
list because the list itself was never actually copied.
"""
#when you modify the first element of cheese, you are modifying the same list that spam refers to.
"""
variables are like boxes that contain values.
list variables don’t actually contain lists—they contain references to lists.
(These references will have ID numbers that Python uses internally
"""

"""
the reference in spam is copied to cheese.
Only a new reference was created and stored in cheese,
not a new list.
"""

"""
When you alter the list that cheese refers to,
the list that spam refers to is also changed,
because both cheese and spam refer to the same list.
"""

"""
Although Python variables technically contain references
to values, people often casually say that the variable
contains the value.
"""


#id() return number of location of the value in memory
"""
behavior with mutable lists doesn’t happen
with immutable values like integers or strings.
use Python’s id() to understand this
"""
#All values in Python have a unique identity 

id('Howdy') 
#return number like 3051875904, 3mm o 3billn

#creates the 'Howdy' string in the computer’s memory.
"""
The numeric memory address where the string is stored
is returned by the id() function

Python picks this address based on which memory bytes
happen to be free on your computer at the time

"""


#Like all strings, 'Howdy' is immutable and cannot be changed
"""
If you “change” the string in a variable
a new string object is being made at a different place in memory
and the variable refers to this new string.
"""
bacon = 'Hello'
id(bacon)
#return number like 44491136

bacon += ' world!' # A new string is made from 'Hello' and ' world!'.
id(bacon) # bacon now refers to a completely different string.
#return number like 44609712


#However, lists can be modified because they are mutable objects.
"""
he append() method doesn’t create a new list object;
it changes the existing list object.
We call this “modifying the object in-place.”
"""
eggs = ['cat', 'dog'] # This creates a new list.
id(eggs)
#35152584

eggs.append('moose') # append() modifies the list "in place".
id(eggs) # eggs still refers to the same list as before.
#35152584

eggs = ['bat', 'rat', 'cow'] # This creates a new list, which has a new identity.
id(eggs) # eggs now refers to a completely different list.
#44409800

"""
If two variables refer to the same list
(like spam and cheese in the previous section)
and the list value itself changes, both variables are affected
because they both refer to the same list.

The append(), extend(), remove(), sort(), reverse(),
and other list methods modify their lists in place.

garbage collector deletes any values not being referred
to by any variables to free up memory.

"""


#passing references

"""
important for understanding how arguments get passed
to functions.
in call, the values of the arguments are copied to the parameter variables.
"""

"""
For lists and dictionaries this means a copy
of the reference is used for the parameter.
"""

def eggs(someParameter): #take arr
    someParameter.append('Hello') #mod arr

spam = [1, 2, 3] #arr
eggs(spam) #call 
print(spam)

"""
that when eggs() is called, a return value is
not used to assign a new value to spam.
Instead, it modifies the list in place, directly.

When run, this program produces output
"""
[1, 2, 3, 'Hello']

#spam and someParameter contain separate references
#they both refer to the same list
"""
This is why the append('Hello') method call
inside the function affects the list
even after the function call has returned.
"""
# forgetting that Python handles list and dictionary variables
#this way can lead to confusing bugs


#copy module's

#copy() and deepcopy() Functions

"""
passing around references is often the handiest
way to deal with lists and dictionaries,
"""

"""
if the function modifies the list or dictionary that
is passed, you may not want these changes in the
original list or dictionary value. 
"""

#copy.copy()
"""
used to make a duplicate copy of a mutable value like
a list or dictionary, not just a copy of a reference. 
"""
import copy
spam = ['A', 'B', 'C', 'D']
id(spam)
#44684232

cheese = copy.copy(spam)
id(cheese) # cheese is a different list with different identity.
#44685832

cheese[1] = 42
spam
['A', 'B', 'C', 'D']

cheese
['A', 42, 'C', 'D']

#spam and cheese variables refer to separate lists
#only the list in cheese is modified when you assign 42 at index 1.


#deepcopy()
#If the list you need to copy contains lists
#copy these inner lists


#game conway.py

#Conway’s Game of Life is an example of cellular automata
"""
set of rules governing the behavior of a field made
up of discrete cells

You can draw out each step on graph paper,
using the squares as cells.

A filled-in square will be “alive” and an
empty square will be “dead.”

If a living square has two or three living neighbors,
it continues to live on the next step.

If a dead square has exactly three living neighbors,
it comes alive on the next step.

Every other square dies or remains dead on the next step. 
"""

"""
there are many surprising behaviors that emerge.
Patterns in Conway’s Game of Life can move, self-replicate,
or even mimic CPUs.

We can use a list of lists to represent the two-dimensional field.
The inner list represents each column of squares
and stores a '#' hash string for living squares
and a ' ' space string for dead squares. 
"""


# Conway's Game of Life
import random, time, copy
WIDTH = 60
HEIGHT = 20

"""
import modules that contain functions we’ll need,
namely the random.randint(), time.sleep(),
and copy.deepcopy() functions.
"""


# Create a list of list for the cells:
nextCells = []
for x in range(WIDTH):
    column = [] # Create a new column.
    for y in range(HEIGHT):
        if random.randint(0, 1) == 0:
            column.append('#') # Add a living cell.
        else:
            column.append(' ') # Add a dead cell.
    nextCells.append(column) # nextCells is a list of column lists.

"""
first step of our cellular automata will be completely
random.

We need to create a list of lists data structure to store
the '#' and ' ' strings that represent a living or
dead cell, and their place in the list of lists reflects
their position on the screen.

The inner lists each represent a column of cells.
The random.randint(0, 1) call gives an even 50/50 chance
between the cell starting off alive or dead.


We put this list of lists in a variable called nextCells,
because the first step in our main program loop
will be to copy nextCells into currentCells.

For our list of lists data structure, the x-coordinates
start at 0 on the left and increase going right,
while the y-coordinates start at 0 at the top and
increase going down.

So nextCells[0][0] will represent the cell at the top left
of the screen, while nextCells[1][0] represents the cell to
the right of that cell and nextCells[0][1] represents
the cell beneath it.

"""


while True: # Main program loop.
    print('\n\n\n\n\n') # Separate each step with newlines.
    currentCells = copy.deepcopy(nextCells)

"""
Each iteration of our main program loop will be a single
step of our cellular automata. On each step, we’ll copy
nextCells to currentCells, print currentCells on the screen,
and then use the cells in currentCells to calculate the cells
in nextCells.

"""


    # Print currentCells on the screen:
    for y in range(HEIGHT):
        for x in range(WIDTH):
            print(currentCells[x][y], end='') # Print the # or space.
        print() # Print a newline at the end of the row.

"""
These nested for loops ensure that we print a full row
of cells to the screen, followed by a newline character
at the end of the row. We repeat this for each row in
nextCells.
"""


    # Calculate the next step's cells based on current step's cells:
    for x in range(WIDTH):
        for y in range(HEIGHT):
            # Get neighboring coordinates:
            # `% WIDTH` ensures leftCoord is always between 0 and WIDTH - 1
            leftCoord  = (x - 1) % WIDTH
            rightCoord = (x + 1) % WIDTH
            aboveCoord = (y - 1) % HEIGHT
            belowCoord = (y + 1) % HEIGHT
"""
Next, we need to use two nested for loops to calculate
each cell for the next step.
The living or dead state of the cell depends on the
neighbors, so let’s first calculate the index of the
cells to the left, right, above, and below the current
x- and y-coordinates.

The % mod operator performs a “wraparound.”
The left neighbor of a cell in the leftmost column 0
would be 0 - 1 or -1. To wrap this around to the rightmost
column’s index, 59, we calculate (0 - 1) % WIDTH.
Since WIDTH is 60, this expression evaluates to 59.
This mod-wraparound technique works for the right, above,
and below neighbors as well.
"""


            # Count number of living neighbors:
            numNeighbors = 0
            if currentCells[leftCoord][aboveCoord] == '#':
                numNeighbors += 1 # Top-left neighbor is alive.
            if currentCells[x][aboveCoord] == '#':
                numNeighbors += 1 # Top neighbor is alive.
            if currentCells[rightCoord][aboveCoord] == '#':
                numNeighbors += 1 # Top-right neighbor is alive.
            if currentCells[leftCoord][y] == '#':
                numNeighbors += 1 # Left neighbor is alive.
            if currentCells[rightCoord][y] == '#':
                numNeighbors += 1 # Right neighbor is alive.
            if currentCells[leftCoord][belowCoord] == '#':
                numNeighbors += 1 # Bottom-left neighbor is alive.
            if currentCells[x][belowCoord] == '#':
                numNeighbors += 1 # Bottom neighbor is alive.
            if currentCells[rightCoord][belowCoord] == '#':
                numNeighbors += 1 # Bottom-right neighbor is alive.

"""
To decide if the cell at nextCells[x][y] should be living
or dead, we need to count the number of living neighbors
currentCells[x][y] has. This series of if statements checks
each of the eight neighbors of this cell, and adds
1 to numNeighbors for each living one.
"""


# Set cell based on Conway's Game of Life rules:
            if currentCells[x][y] == '#' and (numNeighbors == 2 or
numNeighbors == 3):
                # Living cells with 2 or 3 neighbors stay alive:
                nextCells[x][y] = '#'
            elif currentCells[x][y] == ' ' and numNeighbors == 3:
                # Dead cells with 3 neighbors become alive:
                nextCells[x][y] = '#'
            else:
                # Everything else dies or stays dead:
                nextCells[x][y] = ' '
    time.sleep(1) # Add a 1-second pause to reduce flickering.

"""
Now that we know the number of living neighbors for the
cell at currentCells[x][y], we can set nextCells[x][y]
to either '#' or ' '. After we loop over every possible
x- and y-coordinate, the program takes a 1-second pause
by calling time.sleep(1). Then the program execution goes
back to the start of the main program loop to continue with the next step.

Several patterns have been discovered with names such as
“glider,” “propeller,” or “heavyweight spaceship.”
The glider pattern, results in a pattern that “moves”
diagonally every four steps.
You can create a single glider by replacing this line
"""
#this
        if random.randint(0, 1) == 0:
            
#for this
        if (x, y) in ((1, 0), (2, 1), (0, 2), (1, 2), (2, 2)):



#RS

"""
A variable that contains a tuple or string value can be
overwritten with a new tuple or string value, but this
is not the same thing as modifying the existing value
in place—like, say, the append() or remove() methods
do on lists.

"""
            
"""
Variables do not store list values directly;
they store references to lists. This is an important
distinction when you are copying variables or passing lists
as arguments in function calls.

Because the value that is being copied is the list reference,
be aware that any changes you make to the list might impact
another variable in your program.

You can use copy() or deepcopy()
if you want to make changes to a list in one variable
without modifying the original list
"""


#questions

"""
1. What is []?

a list

2. How would you assign the value 'hello' as the third value in a list stored in a variable named spam? (Assume spam contains [2, 4, 6, 8, 10].)

spam[2] = 'hello'


For the following three questions, let’s say spam contains the list ['a', 'b', 'c', 'd'].

3. What does spam[int(int('3' * 2) // 11)] evaluate to?
spam[int(int('3' * 2) // 11)]
spam[int(int(6 // 11)]
spam[int(int(0)]
spam[int(0)]
spam[0]

spam[int(int('3' * 2) // 11)]
'd'

4. What does spam[-1] evaluate to?
'd'

5. What does spam[:2] evaluate to?
['a', 'b']

For the following three questions, let’s say bacon contains the list [3.14, 'cat', 11, 'cat', True].

6. What does bacon.index('cat') evaluate to?

1

7. What does bacon.append(99) make the list value in bacon look like?
[3.14, 'cat', 11, 'cat', True, 99]

8. What does bacon.remove('cat') make the list value in bacon look like?
[3.14, 11, 'cat', True, 99]
rmv first dupl

9. What are the operators for list concatenation and list replication?

+, *

10. What is the difference between the append() and insert() list methods?

append(), insert in last pos/ind
insert(), take index and value

11. What are two ways to remove values from a list?

remove()
del

12. Name a few ways that list values are similar to string values.

they are secuence
they have index


13. What is the difference between lists and tuples?
list, mutable
tuples, inmutable


14. How do you type the tuple value that has just the integer value 42 in it?


list((tuple))
tuple.append(42)


15. How can you get the tuple form of a list value? How can you get the list form of a tuple value?
list(())
tuple([])

16. Variables that “contain” list values don’t actually contain lists directly. What do they contain instead?
reference to value/list

17. What is the difference between copy.copy() and copy.deepcopy()?

no change origin
copy() for single list/tuple,  
deepcopy() for nested list/tuple, 

"""

#book

"""
1. The empty list value, which is a list value that contains no items. This is similar to how '' is the empty string value.

2. spam[2] = 'hello' (Notice that the third value in a list is at index 2 because the first index is 0.)

3. 'd' (Note that '3' * 2 is the string '33', which is passed to int() before being divided by 11. This eventually evaluates to 3. Expressions can be used wherever values are used.)

4. 'd' (Negative indexes count from the end.)

5. ['a', 'b']

6. 1

7. [3.14, 'cat', 11, 'cat', True, 99]

8. [3.14, 11, 'cat', True]

9. The operator for list concatenation is +, while the operator for replication is *. (This is the same as for strings.)

10. While append() will add values only to the end of a list, insert() can add them anywhere in the list.

11. The del statement and the remove() list method are two ways to remove values from a list.

12. Both lists and strings can be passed to len(), have indexes and slices, be used in for loops, be concatenated or replicated, and be used with the in and not in operators.

13. Lists are mutable; they can have values added, removed, or changed. Tuples are immutable; they cannot be changed at all. Also, tuples are written using parentheses, ( and ), while lists use the square brackets, [ and ].

14. (42,) (The trailing comma is mandatory.)

15. The tuple() and list() functions, respectively

16. They contain references to list values.

17. The copy.copy() function will do a shallow copy of a list, while the copy.deepcopy() function will do a deep copy of a list. That is, only copy.deepcopy() will duplicate any lists inside the list.

"""










