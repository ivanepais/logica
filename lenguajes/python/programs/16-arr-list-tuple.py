#arrays/list, tuple/tupla

[1, 2, 3]  #values

[] #value empy

spam = ['cat', 'bat', 'rat', 'elephant'] #value list type

spam[0] (is cat or point to cat)

spam[1] (bat)

spam[2] (rat)

spam[3] (elephant)

'Hello, ' + spam[0] #'Hello, cat'

spam[10000] #IndexError: list index out of range

spam[1.0] #TypeError: list indices must be integers or slices, not float


spam = [['cat', 'bat'], [10, 20, 30, 40, 50]]

spam[0]
['cat', 'bat']

spam[0][1] # 1 i is list, 2 i is value
'bat'

spam[1][4]
50


#negative index -1 is last elem
spam = ['cat', 'bat', 'rat', 'elephant']
spam[-1]
'elephant'

spam[-3]
'bat'

'The ' + spam[-1] + ' is afraid of the ' + spam[-3] + '.'
'The elephant is afraid of the bat.'


#slice return new list more values
#dont take second int/i/value

spam = ['cat', 'bat', 'rat', 'elephant']
spam[0:4]
['cat', 'bat', 'rat', 'elephant']

spam[1:3]
['bat', 'rat']

spam[0:-1]
['cat', 'bat', 'rat']

#slice shor is like len list


#len in list return number of elem
spam = ['cat', 'dog', 'moose']
len(spam)
3


#changes values with index

spam = ['cat', 'bat', 'rat', 'elephant']
spam[1] = 'aardvark'
spam
['cat', 'aardvark', 'rat', 'elephant']

spam[2] = spam[1]
spam
['cat', 'aardvark', 'aardvark', 'elephant']

spam[-1] = 12345
spam
['cat', 'aardvark', 'aardvark', 12345]


#operators + (combine two list) and * (multiply values)

[1, 2, 3] + ['A', 'B', 'C']
[1, 2, 3, 'A', 'B', 'C']

['X', 'Y', 'Z'] * 3
['X', 'Y', 'Z', 'X', 'Y', 'Z', 'X', 'Y', 'Z']

spam = [1, 2, 3]
spam = spam + ['A', 'B', 'C']
spam
[1, 2, 3, 'A', 'B', 'C']


#removing with del

spam = ['cat', 'bat', 'rat', 'elephant']
del spam[2]
spam

['cat', 'bat', 'elephant']
del spam[2]
spam
['cat', 'bat']






