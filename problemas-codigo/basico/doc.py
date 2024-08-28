

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
arrays

empty vector: 
v = []

numb elem/long:
len(v)

print all:
for x in v
 print(x)

accs:
v[0]

add:
v[0] = 1
v.append("hello")

range:
obj[x:y]
to add
to rmv
etc

change:
obj[1] = "x"
obj[1:3] = ["y", "z"]

methds:
obj.append() //add end list
obj.pop() //rmv specif pos or last item
obj.insert() // add specif pos, params: index and newElem
obj.remove() // specified elem
obj.extend() // add iterable obj to other iterab...
keyword del obj // delete all elem o specif with params: index and elem
clear() // empy arr

exists:
elem in obj

loop:
save elem/print elem in index 
obj[i] or [x]

v[x]++

for x in obj
 x 
 
for x range(len(obj))
 obj[x]
 
i
while i < len(obj)
 ob[i]
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

for x in obj1
 for y in obj2
  print(x, y)


"""



"""
vars:

storing data values
is created the moment you first assign a value to it.
no declaring, no type
can change type 
x = 10
y = "hello"

casting:
specify the data type

get type:
type(x)
str(x)
int(x)
float(x)

quotes: 
x = 'hello'
y = "hello"

case-sensitive:
no overwrite 
a = 'hello'
A = 2

names:
short or descriptive and readable

camel:
myName 

pascal:
MyName

snake:
my_name

multiple variables:
one line
x, y, z = "a", "b", "c"
or
x = y = z = "a"

unpack collection:
listA = [1, 2, 3]
x, y, z = listA

print:
x=1
print(x)

x = "a"
y = "b"
z = "c"
print(x, y, z)

or

x = "a "
y = "b "
z = "c"
print(x + y + z)

or

x = 2
y = 3
print(x + y) //5

or

x = "a"
y = 2
print(x, y)

global var:
outside of a function
used inside and outside

local var:
only in func

global keyword
global var in func
and used to change a global variable inside a function.

"""


"""
data type:
store data of different types,
can do different things.

text:
str

numeric:
int, float, complex

sequence:
list, tuple, range

mapping:
dict

set:
set, frozenset

boolean:
bool

binary:
bytes, bytearray, memoryview

set type in assign
x = 10
type(x)

set type cast
x = "hello"
x = str("hello")

"""


"""
numbers:
int:
positive or negative, without decimals and unlimited length

float:
positive or negative, containing one or more decimals
scientific numbers with an "e" to indicate the power of 10.

complex:
ten with a "j" as the imaginary part:
cannot convert complex numbers into another number type.

x = 1    # int
y = 2.8  # float
z = 1j   # complex

conversion:
int to float:
a = float(x)

float to int:
b = int(y)

int to complex:
c = complex(x)

import random:
make random numbers
import the randomm display a random number between 1 and 9:

import random
print(random.randrange(1, 10))

"""


"""
casting:
python uses classes to define data types, including its primitive types.

the func constructors:
int(): remove decimals or quote
float(): add decimals 
str(): add quote 

x = int(1)   # x will be 1
y = int(2.8) # y will be 2
z = int("3") # z will be 3

x = float(1)     # x will be 1.0
y = float(2.8)   # y will be 2.8
z = float("3")   # z will be 3.0
w = float("4.2") # w will be 4.2

x = str("s1") # x will be 's1'
y = str(2)    # y will be '2'
z = str(3.0)  # z will be '3.0' 
"""


"""
strings:

quotes inside quotes:
print("It's alright")
print("He is called 'Johnny'")
print('He is called "Johnny"')

multiline strings
a = """ """
b = ''' '''
the line breaks are inserted at the same position as in the code

strings are arrays:
arrays of bytes representing unicode characters.
single character is simply a string with a length of 1.

a = 'hello'
a[1]

loop:
for x in 'hello'
 x

len: 
len(a)
len('hello')

check string:
in return bool
"e" in a //true

if "e" in a:
 //code

not present: 
not in
"a" not in a//true

if "a" not in a:
 //code

slice
a = 'hello'
a = [2:4] //get 2 to 4(not included)

from start:
[:4] //4(not included)

to the end:
[1:] //

negative:
get to the final
b = "Hello, World!"
print(b[-5:-2])

modify strings:
set of built-in methods
upper() //return upper
a = 'hello'
a.upper()

lower() //return lower
a.lower()

strip() //remove whitespaces in start and in the end
a = ' hello '
a.strip()

replace() //method replaces a string with another string
a.replace("h", "j") //h -> j

split() //return list
the text between the specified separator becomes the list items.

splits the string into substrings if it finds instances of the separator:

a = "Hello, World!"
b = a.split(",")
print(b) // ['Hello', ' World!']

concatenate:
combine strings
a = "a"
b = "b"
a+b
a + " " + b

format string:

cannot combine
a = "a"
b = 2
a + b

combine strings and numbers with format() o fstring
a = 2
b = f"a is {a}"

placeholders:
contain variables, operations, functions, and modifiers to format the value.

A modifier is included by adding a colon :
followed by a legal formatting type, like .2f
which means fixed point number with 2 decimals:
price = 59
txt = f"The price is {price:.2f} dollars"
print(txt)

can contain Python code, like math operations:
txt = f"The price is {20 * 59} dollars"
print(txt) 

escape: 
to insert characters that are illegal in a string

\charx \chary
txt = "We are the so-called \"Vikings\" from the north." 

\'
\\
\n (new line)
\r (split string)
\t (tab)
\b (backspace)
\f (form Feed)
\ooo (octal value)
\xhh (hex value)

methods:
capitalize() Converts the first character to upper case
count()	returns the number of times a specified value occurs in a string
center() Returns a centered string
find() Searches the string for a specified value and returns the position of where it was found
index() Searches the string for a specified value and returns the position of where it was found

"""


"""
bool
if need express is true or false
evaluate any expression
compare two values
condition in an if statement

print(10 > 9)
print(10 == 9)
print(10 < 9)

eval:
value or var
bool() // return t o f

print(bool("Hello"))
print(bool(15))

x = "Hello"
y = 15
print(bool(x))
print(bool(y))

Most Values are True:
if it has some content.
string is True, except empty strings.
number is True, except 0.
list, tuple, set, and dictionary are True, except empty ones.

Some Values are False:
empty values, such as (), [], {}, "", the number 0 and None

if you have an object that is made from a class with a __len__ function that returns 0 or False: 
 class myclass():
  def __len__(self):
    return 0

myobj = myclass()
print(bool(myobj))

Functions can Return a Boolean.

many built-in functions that return a boolean value, like the isinstance() function, which can be used to determine if an object is of a certain data type:
x = 200
print(isinstance(x, int)) 

"""



"""
operators:
operations on variables and values.

Arithmetic:
+, -, *, /, %(rest), **(exp), //(foor div)

Assignment:
=, +=, -=, *=, /=, %=, //=, **=, &=

Comparison:
==, !=, >, <, >=, <=

Logical:
and, or, not 

Identity:
is, is not

Membership operators:
in, not in

Bitwise operators:
&(and), |(or), ^(xor), ~(not), <<(Zero fill left shift), >>(Signed right shift)

Operator Precedence:
Parentheses has the highest precedence
express inside eval first

(), **, +x -x ~x (unary plus, minus, bitw not)
*  /  //  % (multiplication, division, floor division, and modulus)
+  -
<<  >> (bitw l y r)
&
^
|

Comparisons, identity, and membership operators

not (not)
and
or

same precedence, the expression is evaluated from left to right.

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


"""
dict:

print(dictx)

acces:
dictx["keyA"]
get("keyA")

num elem/long:
len(dictx) //return int value

methods:
obj.keys() // return list all keys
obj.values() // return list all the values
obj.items() // return elem tuple list 
formkeys()
setdefault()

add/changes:
dictx["key"] = 1
dictx.update({"key": value})

rmv:
dictx.pop("key")
dictx.popitem()
del dictx["key"]
dictx.clear()

loops:
for x in dictx
 print(x) //all keys

for x in dictx
 print(dictx[x]) //all values

for x in dictx.values():
 print(x)  //return values

for x in dictx.keys():
 print(x)  //return keys

for x, y in dictx.items():
 print(x, y)  //return keys and values

copy:
newDict = dictx.copy()
constructor copy: newDict = dict(dictx)

nested:
one dict with three dict:
oneDict = {
 "d1": {
   "key1": value,
   "key2": value
  },
  "d2": {
   "key1": value,
   "key2": value
  },
  ....
}

or

three dict in a new dict:
d1 = {
   "key1": value,
   "key2": value
}
  
d2 = {
   "key1": value,
   "key2": value
}
...

dictx = {
 "key1": value,
 "key2": value,
 ...
}

print(key["key2"]["value"]) 

for x, obj in dictx.items():
  print(x)

  for y in obj:
    print(y + ':', obj[y])

accss elem:
name dict, externalfirst
print(dict["key2"]["value"]) 

loop:
using .items()
for x, obj in dictx.items():
  print(x)

  for y in obj:
    print(y + ':', obj[y]) 

"""

"""
def vectToMap(vect):
    

    #create empy map
    dictn = {}

    #elem of vect
    for x in vect:
        i = 0
        while i < len(vect): 
            dictn.update({f"key{i}": x})
            i += 1 

    i=0
    while i <= len(vect): 
        dictn.update({"key": i})
        print(dictn) #print key 0 to 4
        i += 1 

    for x in vect:
        dictn.update({"key": x})

    for x in range(len(vect)):
        print(vect[x]) #print elem one by one

    print(dictn)
    
"""


"""
#add key and value
dictn[x]=y
dictn.update({"key": value})
dictn.setdefault("key", value) #return value if the key, if key no exist insert key with value

#vect
vect.
            
elem:
for x in obj
x 

index:
for x range(len(obj))
obj[x]

i = 0
while i <= len(vect):
i+=1

"""



