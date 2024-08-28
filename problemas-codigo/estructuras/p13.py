"""
p13:

Use the loop structure to add 1 to an empty vector until it has 10 elements.


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


arr = []

i = 1 
while i <= 10:
    arr.append(i)
    i += 1


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



def main():

    print(arr)


if __name__ == "__main__":

    main()
