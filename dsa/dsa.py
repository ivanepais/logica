# DSA
"""
It is about how to think and solve complex problems systematically. 

Using the right data structure and algorithm makes your program run faster. 

Especially when working with lots of data. 

"""

my_array = [7, 12, 9, 4, 11]
minVal = my_array[0]

for i in my_array:
    if i < minVal:
        minVal = i

print('Lowest value:',minVal)

"""
1. values
2. min is the index value 0  
3. i will be a value of arr
4. At each turn, compare i value with [0]
"""


#intro

"""
Data Structures is about how data can be stored in different structures.

Algorithms is about how to solve different problems, often by searching through and manipulating data structures.

DSA helps us to use large amounts of data to solve problems efficiently.

"""


"""
DS:

Is a way to store data.
Depending on what data we have, and what we want to do with it.
If we want to store data about people we are related to.
We use a family tree as the data structure.
Because we have a lot of information to store. 
And we need to link the data with each other.

Essential ingredients in creating fast and powerful algorithms.
They help in managing and organizing data, reduce complexity, and increase efficiency.

"""


"""
Two different data structures:

Primitive: int, float, char, boolean 

No primitive or reference type to an object: with methods
Abstract Data Structures are higher-level
Include arrays, linked lists, stacks, queues, trees, and graphs.
"""


"""
Algorithms:

Step-by-step instructions for executing tasks.
Solve a given problem or achieve a specific goal.
An efficient algorithm can help us to find the solution we are looking for.
Transform a slow program into a faster one.

Eg. Fastest route, Finding elem in a search, sorting by filter

Algorithmsto solve specific problems, and are often made to work on specific data structures.
'Bubble Sort' algorithm is designed to sort values, and is made to work on arrays
"""


"""
DSA:
Is about finding efficient ways to store and retrieve data, to perform operations on data, and to solve specific problems.
Decide which data structure or algorithm is best for a given situation.
Make programs that run faster or use less memory.
Understand how to approach complex problems and solve them in a systematic way

is fundamental in nearly every part of the software world:
Operating Systems
Database Systems
Web Applications
Machine Learning
Video Games
Cryptographic Systems
Data Analysis
Search Engines

Algorithm:
A set of step-by-step instructions to solve a specific problem.

Data Structure:
A way of organizing data so it can be used efficiently. 
Common data structures include arrays, linked lists, and binary trees.

Time Complexity:
A measure of the amount of time an algorithm takes to run, depending on the amount of data the algorithm is working on.

Space Complexity:
A measure of the amount of memory an algorithm uses, depending on the amount of data the algorithm is working on.

Big O Notation:
A mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. Used in this tutorial to describe the time complexity of an algorithm.

Recursion:
A programming technique where a function calls itself.

Divide and Conquer:
A method of solving complex problems by breaking them into smaller, more manageable sub-problems, solving the sub-problems, and combining the solutions. Recursion is often used when using this method in an algorithm.

Brute Force:
A simple and straight forward way an algorithm can work by simply trying all possible solutions and then choosing the best one


"""


#rs1
"""
Right data structure and algorithms
lots of data

Algorithms searching through and manipulating data structures
We need certain functionalities

Two ds: primitive and reference type object

Algorithms: step-by-step instructions for executing tasks.
solve specific problems, in specific ds

DSA:
Es about finding efficient ways to store and retrieve data, to perform operations on data, and to solve specific problems.

Time Complexity:
time an algorithm takes to run, depending of data 

Space Complexity:
memory an algorithm uses, depending data 

Big O Notation:
A mathematical notation that describes the limiting behavior of a function
when the argument tends towards a particular value or infinity.
Describe the time complexity of an algorithm.

Brute force:
trying all possible solutions and then choosing the best one

"""


#100 fibonacci, two ways; loop and recursion 

"""
Two first numbers are 0 and 1. 
And the next is always the sum of the two previous
0, 1, 1, 2, 3, 5, 8, 13, 21, ...

all we need to do is to add the two previous

We know the principle of how to find the next number, so we can write an algorithm to create as many Fibonacci numbers as possible.

"""


#20 first Fibonacci
"""
Start with the two first Fibonacci numbers 0 and 1.
Add the two previous numbers together to create a new Fibonacci number.
Update the value of the two previous numbers.
Do point a and b above 18 times.

"""

"""
using a for loop.
using recursion.
nth Fibonacci number using recursion.
"""

prev2 = 0
prev1 = 1

print(prev2)
print(prev1)
for fibo in range(18):
    newFibo = prev1 + prev2
    print(newFibo)
    prev2 = prev1
    prev1 = newFibo

print(0)
print(1)
count = 2


def fibonacci(prev1, prev2):
    global count
    if count <= 19:
        newFibo = prev1 + prev2
        print(newFibo)
        prev2 = prev1
        prev1 = newFibo
        count += 1
        fibonacci(prev1, prev2)
    else:
        return

fibonacci(1,0)


"""
F(n) = F(n-1)+F(n-2)
F(19) = F(19-1)+F(19-2)
...

uses a 0-based index. 
function call itself as long as n is less than, or equal to, 1.
If n≤1 it means that the code execution has reached one of the first two Fibonacci numbers 1 or 0.
"""

def F(n):
    if n <= 1:
        return n
    else:
        return F(n - 1) + F(n - 2)

print(F(19))


"""
  F(5)
F(4) F(3)
. .  . .

The number of calculations will explode when we increase the number of the Fibonacci number we want.
The number of function calls will double every time we increase the Fibonacci number we want by one.

The amount of function calls, and the amount of times the function is called with the same arguments.
So even though the code is fascinating and shows how recursion work, the actual code execution is too slow and ineffective to use for creating large Fibonacci numbers.

"""
