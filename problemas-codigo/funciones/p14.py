"""
p14:

Increment all the numbers in the vector [4 7 9 10] by one.

Do the same as in the previous exercise, but leave only the even results in the vector.


"""

"""
ps:

v = [4, 7, 9, 10]

func incrementVect
 for x in v.len
  v.(x+1)

even:
x%2 == 0

func evenVect
 if x%2 == 0
 print v(x) 

"""


"""
func:

pass data
return data

reusable, modular and maintainable

params of the func:
will become the arguments passed to it in the call.

return:
when should return a value
the value params or local var of a func:
if we do not save their value using return(func) and a var(main)

params:
the necessary ones

*args:
if you do not know how many args
tuple of args
def f(nameArgs) 
 print nameArgs[i]

keyw args:
key = value 
the order not matter
def f(c3, c2, c1)
 c1+c2
f(c1="abc", c2="bcd", etc)

**kwargs
do not know how many keyword arguments
dictionary of arguments
def f(**nameKey)
 nameKey["asd"]

default param:
if call without args, uses dafault
def f(name=value)

structure in call for args:
list, set, dict, etc
provide code to deal

pass: 
avoid error of empy func

positional only args:
, / 
get error to send a keyword args
def f(x, /)
f(x=3) //err
only f(3)

keyword only args:
*,
def f(*, x)
f(3)//err
only f(x=3)

common func: 
def f(x)
valid f(x=3) and f(3)

if combine /, and *: 
before /, positional only
after *,keyword only

Recursion:
func call itself
can loop data to reach a result.
each time we do a recursion, we can decrease the parameter.
to reach the base case

lambda:
small anonymous function
take any number of arguments, but can only have one expression
lambda arguments : expression 
expression is executed and the result is returned
use them as an anonymous function inside another function.
when an anonymous function is required for a short period of time.

"""



"""
empty vector: 
v = []

accs
v[0]

add:
v[0] = 1

long:
len

range:
obj[x:y]
to add
to rmv
etc

methds:
obj.append() //add end list
obj.pop() //rmv specif pos or last item
obj.insert() // add specif pos, params: index and newElem
obj.remove() // specified elem
obj.extend() // add iterable obj to other iterab...
keyword del obj // delete all elem o specif with params: index and elem
clear() // empy arr

exists:
in obj

loop:
save elem in index
obj[i] or [x]

v[x]++

for x in obj
 x 
 
range(len(obj))

i
while i < len
 i
 
if elif else
break
continue

 if // in inner
else // in outer block

pass // avoid empy for error


nested:
inner block executed 1 time outer block

v1[]
v2[]
new var x save elem v1
y save elem v2



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
range() return sequence numbers, inic 0; +1 (default)

match value //value is a var
 case 1
 case 2
 ...
obj.["", x]
construct obj(x, y)
construc obj(())
copy()

"""


v = [4, 7, 9, 10]

def incrementVect(vect): 
    for x in vect: 
        print(x+1)

def evenVect(vect):
    for x in vect:         
        if x%2 == 0:
            print(x)


"""
arr = []

i = 1 
while i <= 10:
    arr.append(i)
    i += 1
    
"""


"""
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = []

for x in fruits:
  if "a" in x:
    newlist.append(x)

print(newlist)

"""


"""
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
  for y in fruits:
    print(x, y)

"""

"""
def tri_recursion(k):
  if(k > 0):
    result = k + tri_recursion(k - 1)
    print(result)
  else:
    result = 0
  return result

print("\n\nRecursion Example Results")
tri_recursion(6)

"""

"""
x = lambda a : a + 10
print(x(5))

x = lambda a, b : a * b
print(x(5, 6)) 

def myfunc(n):
  return lambda a : a * n

mydoubler = myfunc(2)
print(mydoubler(11))

mytripler = myfunc(3)
print(mytripler(11)) 

"""

def main():
    
    """
    incrementVect(v)
    evenVect(v)
    
    """
    
    """
    print(arr)
    """


if __name__ == "__main__":

    main()
