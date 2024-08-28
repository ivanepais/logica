"""
p4: 

Define a vector that contains the keywords :key and :word

"""

def main():

    dictA = {
        "key": 123,
        "word": "Hello"
    }
    
    print(dictA)
    
    for x in dictA:   
        print(x)

  
    dictB = dict(key = 321, word = "Bye")

    print(dictB)
    
    for x in dictB:   
        print(x)



if __name__ == "__main__":

    main()

