#Local Variables Cannot Be Used in the Global Scope

def spam():
    eggs = 31337
    
spam()

print(eggs)




#Local Scopes Cannot Use Variables in Other Local Scopes
def spam():
    eggs = 99
    bacon()
    print(eggs)

def bacon():
    ham = 101
    eggs = 0

spam()



#Global Variables Can Be Read from a Local Scope
def spam():
    print(eggs) 
eggs = 42
spam()
print(eggs)



#Local and Global Variables with the Same Name
def spam():
    eggs = 'spam local'
    print(eggs)    # prints 'spam local'

def bacon():
    eggs = 'bacon local'
    print(eggs)    # prints 'bacon local'
    spam()
    print(eggs)    # prints 'bacon local'

eggs = 'global'
bacon()
print(eggs)        # prints 'global'



#Mod global var from function
def spam():
    global eggs
    eggs = 'spam'
  
eggs = 'global'
spam()
print(eggs)


#rules global var
def spam():
    global eggs
    eggs = 'spam' # this is the global

def bacon():
    eggs = 'bacon' # this is a local

def ham():
    print(eggs) # this is the global

eggs = 42 # this is the global
spam()
print(eggs)


#use error
def spam():
    print(eggs) # ERROR!
    eggs = 'spam local'

eggs = 'global'
spam()



