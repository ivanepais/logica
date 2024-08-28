"""
p10:

Use the let structure inside a function f1 to define a local variable b with the value "funcy". Then use the str function to combine two bs into "funcyfuncy".

"""


"""
use structure inside a function
to define a local variable b with the value "funcy"

use the str function to combine two bs into "funcyfuncy".


func f1 () // func f(b)
  let struct return // define var b = funcy

func str()
 combine

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


"""
def f1():
    
    return "funcy"
         
  
        
def Str(): 

    return f1() + "funcy"
    
"""



def f1():

    b = "funcy"

    def Str():

        print(b + b)

    return Str()

   
def main():

    x = f1()
    

    """
    print (Str())
    
    """


if __name__ == "__main__":

    main()
