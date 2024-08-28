"""
p15:

Use the for structure to go through this vector of maps and return a sequence of the :values, aka this [10.3 20.06 30.1]
[{:id 1 :value 10.3} {:id 2 :value 20.06} {:id 7 :value 30.1}]

Use the function update-in to change 3 into 4 in the value below:
{:shops [:shop-1] :customers [{:id "Bob":account {:balance 3}}]}

Create a function that combine a vector of maps like this:
(combine [{:a 1 :b 2} {:c 3} {:d 4 :e 5}])
==> {:a 1 :b 2 :c 3 :d 4 :e 5}


"""


"""
ps:

func vectToMap(vect)

func changeValueMap(key)

func combineVecToMap(vect, map)

"""



"""
dictM = {
    "uno": 10.3
    "dos": 20.06
    "tres": 30.1
}


dictE = {
    "bob": 3
    
}

arr = [1, 2, 3, 4, 5]

dictA {
    "l": "a"
    "l2": "b"
    "l3": "c"
    "l4": "d"
    "l5": "e"
}

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

    """
    i=0
    while i <= len(vect): 
        dictn.update({"key": i})
        print(dictn) #print key 0 to 4
        i += 1 
    """
        
    """
    for x in vect:
        dictn.update({"key": x})
    """

    """
    for x in range(len(vect)):
        print(vect[x]) #print elem one by one
    """

    print(dictn)
    

    

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


"""
ps func:

create empy map: 

add key:

add value:


take array: 
for x in
 obj.x 

methods: 
obj.met()
met2(obj)

"""



"""
#create map empy
dictn = {}

#take vect

#add key
dictx["key"] = 1
dictx.update({"key": value})


print(dictn)

y = str(2)
replace()

a = 2
b = f"a is {a}"

acces:
dictx["keyA"]
get("keyA")


len(dictx)

elem:
for x in obj
 x 

index:
for x range(len(obj))
 obj[x]

construc:
dict()

thisdict.get("model") //get value of key

in:
if "model" in thisdict:
"""



"""

extend()
Add the elements of a list (or any iterable), to the end of the current list

insert()
Adds an element at the specified position

"""


"""
def changeValueMap(key)

def combineVecAndMap(vect, mapx)
"""


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

    v = [4, 7, 9, 10]
    vectToMap(v)
    
    """
    incrementVect(v)
    evenVect(v)
    
    """
    
    """
    print(arr)
    """


if __name__ == "__main__":

    main()
