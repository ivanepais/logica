#arrays 2

#add or create dinamic elem, non repetitive code
#data or info in struct easy manag
#change, delete values

catNames = []
while True:
    print('Enter the name of cat ' + str(len(catNames) + 1) ' (Or enter nothing to stop.):')
    name = input()
    if name == '':
        break
    catNames = catNames + [name]  # list concatenation
print('The cat names are:')
for name in catNames:
    print('  ' + name)


important
catNames = [] #empy arr
catNames = catNames + [name] #name(imput) index, update arr

print('Enter the name of cat ' + str(len(catNames) + 1) ' (Or enter nothing to stop.):')
#repeat string
str(len(catNames) + 1)

for name in catNames: #print name (input)index




steps: 

1. arr empy catNames[]
2. bucle inf
3. print string + 1, arr len
4. input string 
5. update arr with input, + operator return new list
6. repeat 1-5

stop while with whitespace
print elem list with for in name(input) index


#loops
#repeat code for all elem

for i in range(4):
    print(i)

0
1
2
3

#return value of range is like secuence [0, 1, 2, 3]

for i in [0, 1, 2, 3]:
    print(i)

0
1
2
3

#i take range 0-4 and codeblock


#for i in range(len(obj))
#can access to index i
#and value of index i with obj[i]

supplies = ['pens', 'staplers', 'flamethrowers', 'binders']
for i in range(len(supplies)):
    print('Index ' + str(i) + ' in supplies is: ' + supplies[i])

Index 0 in supplies is: pens
Index 1 in supplies is: staplers
Index 2 in supplies is: flamethrowers
Index 3 in supplies is: binders


print('Index ' + str(i) + ' in supplies is: ' + supplies[i])
all is string, no errors
supplies[i] -> str


#in, not in operators
#need value and list
#return/evaluate boolean

'howdy' in ['hello', 'hi', 'howdy', 'heyas']
True

spam = ['hello', 'hi', 'howdy', 'heyas']
'cat' in spam
False

'howdy' not in spam
False

'cat' not in spam
True


#user input with list

myPets = ['Zophie', 'Pooka', 'Fat-tail']
print('Enter a pet name:')
name = input()
if name not in myPets:
    print('I do not have a pet named ' + name)
else:
    print(name + ' is my pet.')




#multiple vars on a list in one line
cat = ['fat', 'gray', 'loud']
print(cat)
size = cat[0]
color = cat[1]
disposition = cat[2]
print(cat)

cat = ['fat', 'gray', 'loud']
print(cat)
size, color, disposition = cat
print(cat)

#The number of variables and the length of the list must be exactly equal, or Python will give you a ValueError

cat = ['fat', 'gray', 'loud']
>>> size, color, disposition, name = cat
#ValueError


#enumerate() return i and obj[i]
#instead of using the range(len(someList)) for i in...
#if need index and the elem
supplies = ['pens', 'staplers', 'flamethrowers', 'binders']
for index, item in enumerate(supplies):
    print('Index ' + str(index) + ' in supplies is: ' + item)

Index 0 in supplies is: pens
Index 1 in supplies is: staplers
Index 2 in supplies is: flamethrowers
Index 3 in supplies is: binders


#random.choice(), random.shuffle()
#accept list in param

#random.choice() return random element
import random
pets = ['Dog', 'Cat', 'Moose']
random.choice(pets)
'Dog'

random.choice(pets)
'Cat'

random.choice(pets)
'Cat'

#consider random.choice(someList) to be a shorter
#form of someList[random.randint(0, len(someList) – 1].


#random.shuffle() reorder the items in a list. 
#mod list, no return new list
import random
people = ['Alice', 'Bob', 'Carol', 'David']
random.shuffle(people)
people
['Carol', 'David', 'Alice', 'Bob']

random.shuffle(people)
people
['Alice', 'David', 'Bob', 'Carol']



#Augmented Assignment Operators

spam = 42
spam = spam + 1
spam
43

#or short
spam = 42
spam += 1
spam
43


#more oper

spam += 1
spam = spam + 1

spam -= 1
spam = spam - 1

spam *= 1
spam = spam * 1

spam /= 1
spam = spam + 1

spam %= 1
spam = spam + 1


#operator += can concatenate strings and list
#operator *= mulitply elem/itsef-var strings and list
spam = 'Hello,'
spam += ' world!'
spam
'Hello world!'

bacon = ['Zophie']
bacon *= 3
bacon
['Zophie', 'Zophie', 'Zophie']




