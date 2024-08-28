"""
p6:

Get the value of a key from a map using the map itself as a function


value of a key 
using map as function


"""


"""

tools:

for:
return keys
return values with methods
(x) obj
(obj[x]) elem
.keys
.values
x, y .items

obj.["", x]
construct obj(x, y)
construc obj(())
copy()

obj.values() retrun list all values
obj.keys() return list all keys
obj.items() return each item as tuple in a list

fromkeys() dict param, return keys and values
get(): key param, return value
setdefault(): key param, return value; if not exist, insert key and value
update(): insert key, value


"""


def myMap(key, value):

    myMap = {
        "key": value
    }

    return myMap 
    

"""
def myMap(value):

    myMap = {
        "key": value
    }

    myMapValue = myMap.setdefault("key")

    return myMapValue
    
"""

def main():

    print(myMap("clave1", 1234))

    """
    print(myMap(2))

    """
 
    """
    myMap = {
        "natural": 2
    }

    print(myMap)

    myMap["entero"] = -2
    
    print(myMap)
    
    for x in myMap:   
        print(x)

    myMap["suma"] = 2 - 2

    print(myMap)

    print(len(myMap))

    print(type(myMap["suma"] + 1))


    print(myMap["natural"])

    print(myMap.setdefault("suma") + myMap.setdefault("natural"))        

    """

if __name__ == "__main__":

    main()



