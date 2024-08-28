"""
p8:

define a function hello that works like this: (hello) ==> "hello!"

define a function double that works like this: (double 5) ==> 10

Add a docstring to the function double. Then show it using (doc double)

"""

"""
func hello
 rtn "hello"

func double(num)
 rtn param * 2

func doubleDoc(num)
 print("The Double Of Number Is")
 rtn num * 2
 
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

obj.["", x]
construct obj(x, y)
construc obj(())
copy()

"""

def hello(): 
    return print("Hello")

def double(num): 
    return print (num * 2)

def doubleDoc(num):
    return print ("The double of number is:", num * 2)


def main():

    hola = hello()
   
    doble = double(10)

    dobleDoc = doubleDoc(20)

    


if __name__ == "__main__":

    main()
