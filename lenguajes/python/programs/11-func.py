"""
def hello():
    print('Howdy!')
    print('Howdy!!!')
    print('Hello there.')

hello()
hello()
hello()

"""

"""
def hello(name):
    print('Hello, ' + name)

hello('Alice')
hello('Bob')
"""

import random

def getAnswer(answerNumber):
    if answerNumber == 1:
        return 'It is certain'
    elif answerNumber == 2:
        return 'It is decidedly so'
    elif answerNumber == 3:
        return 'Yes'
    elif answerNumber == 4:
        return 'Reply hazy try again'
    elif answerNumber == 5:
        return 'Ask again later'
    elif answerNumber == 6:
        return 'Concentrate and ask again'
    elif answerNumber == 7:
        return 'My reply is no'
    elif answerNumber == 8:
        return 'Outlook not so good'
    elif answerNumber == 9:
        return 'Very doubtful'

r = random.randint(1, 9)
print(r)
fortune = getAnswer(r)
print(fortune)


"""
r = random.randint(1, 9)
fortune = getAnswer(r)
print(fortune)

to this single equivalent line:

print(getAnswer(random.randint(1, 9)))

"""

#return None
"""
spam = print('Hello!')
Hello!
  
None == spam
True

"""

#keyword params
"""
print('Hello')
print('World')

print('Hello', end='')
print('World')

print('cats', 'dogs', 'mice') #return: cats dogs mice

print('cats', 'dogs', 'mice', sep=',') #return: cats,dogs,mice

"""


