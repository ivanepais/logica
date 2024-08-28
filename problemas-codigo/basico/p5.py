"""
p5:

Define a variable my-map that refers to the map {:1 2}. Use the put function to add a new key and value to my-map.

    What does the put call return?
    What is the value of my-map after the call


def var map
put new key and value

return of the call funct put
value of map

"""

def main():

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
 

if __name__ == "__main__":

    main()


