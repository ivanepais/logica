"""
p7:

Get the value of a key from a map using a keyword as a function

value of a key 
using key as function


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

"""
def key(keyStr):

    return keyStr
"""


def key(key, value):

    myMap = {
        key: value
    }

    return print(myMap)


"""

def myMap(key, value):

    myMap = {
        "key": value
    }

    return myMap

"""

"""
def myMap(value):

    myMap = {
        "key": value
    }

    myMapValue = myMap.setdefault("key")

    return myMapValue
    
"""



def main():

    key("clave", 123456)

    """
    myMap = {
        key("clave"): 1234
    }

    print(myMap)
    
    """
    
    """
    print(myMap("clave1", 1234))
    
    """


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


