# Reversed string

"""
Problem
revese caracter cadena 

"""

"""
Diseño código:

Operar param

imper: ordenes tras otras
func: func minimas (scope)
oop

Pens-Soluc:

string -> arr

Estado-Effecto
el efecto está en cada caracter
debemos cambiar cada uno 

entonces, entra string
tomamos char -> string[0]

Caso particular más fácil: 

Ej: ab -> ba 

entrada: 
string

cálculo: 
charA = string[0]
charB = string[1]

string = charB+charA

return print(string) 


Caso general - Fórmula: 

Puedo repetir paso/se prepite paso que toma char
uso de for/while; repetición/cuenta

Podemos usar index neg, nuevas matrices con meth
como slice, append, clear
y agregar ultimos 

O ir caso minimo: tomar último char, ante ultim 

[0], [len-1]

Puedo ir tomando lo ultimo y agregarlo a un nuevo
string

incluso eso puede ser recursivo

puedo tomar la mitad y cambiarla por la otra
ordenarlas y unirlas 

se trata de la posición, moverlos
el primero al ultimo o el ultimo al primero

cuando el string sea muy grande (caso extremo)
es costosa la operacion

entonces:

toma una parte izq, parte der
ordeno inver izq y der 
combino izq y der

Como ordenar izq y der/meth func:

Caso minimo: dos caracter (ab)
dividir y combinar direct; sin meth orden invers

split devuelve otro arr

for c in len(string) 
 char = string[c] 


last = string[len-1]
for c in len(string):
 if c == last:
   replace(
 

"""

"""
def reverseString (string):
    #last = string[len-1]
    #rightHalft = string.slice[:]
    #leftHalft = string.slice[:]
    
    #return string.sort(reverse = true)

    last = string[len-1]
    for c in range(0, last):
        
        
    
#print(reverseString("ab"))
"""

def chars(string):
    for c in string:
        print(c)

#chars("ab")
#separa letras por instrucciones:
#a
#b


def last(string):
    print(string[-1])

last("ab")


def changeLast(string):
    first = string[0]
    last = string[-1]

    string.replace(first, last)


def separar(string):
    print(string.split())
    
separar("ab")
#return arr ['a','b']

def joinLast(string):
    first = string[0]
    last = string[-1]
    print(string.join(first))
    print(string.join(last))

#joinLast("ab")

def sliceStr(string):
    print(string.slice[:])
#corta y toma ese elem
    

def revStr(string):
    return print(string[::-1])


"""
texto = "hola"
invertida = texto[::-1]
print(invertida)  # salida: "aloh"

texto[::-1]
inicio: → al estar vacío, empieza desde el principio.
:fin → al estar vacío, termina en el final.
:paso → con -1, recorre la cadena al revés.

Así, texto[::-1] es una forma compacta de decir "dame todos los caracteres, pero en orden inverso".

"""


#revStr("abc")

"""
def revStr2(string):
    for c in range(len(string) - 1, -1, -1):
        print(string[c])
        new = 
"""
 

"""
texto = "hola"
invertida = ""

for i in range(len(texto) - 1, -1, -1):
    invertida += texto[i]

print(invertida)  # salida: "aloh"


range(len(texto) - 1, -1, -1) genera los índices desde el último hasta el primero.
texto[i] accede a cada carácter desde el final.
invertida += texto[i] construye la cadena invertida carácter por carácter

"""

#revStr2("abcdef")


def revStr3(string):
    rev = ''.join(reversed(string))
    print (rev)

"""
texto = "hola"
invertida = ''.join(reversed(texto))
print(invertida)  # salida: "aloh"

"""

#revStr3("asdfghjkl")

#revStr("abclksdjfjdsklaflkdaslkfjldksajflkdsajfkjdskfadskfkdsafkdskjfkdsjfhfheqhfkhewfhkdhsak")
"""
revStr("world")
revStr("word")
revStr("")
revStr("h")
revStr("hello")
"""

# Solución codewars

def solution(string):
    rev = string[::-1]
    return rev
# 0.08s

def solution2(string):
    rev = print(string[::-1])
    return rev

solution("hello")
solution2("world")

def solution3(string):
    rev = string[::-1]; return rev
# 0.10s

solution4 = lambda s: s[::-1]


# Kata 2 

"""
Sentence Smash

Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
Example

['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

words = ['hello', 'world', 'this', 'is', 'great']
smash(words) # returns "hello world this is great"

Assumptions

    You can assume that you are only given words.
    You cannot assume the size of the array.
    You can assume that you do get an array.

What We're Testing

We're testing basic loops and string manipulation. This is for beginners who are just learning loops and string manipulation.
Disclaimer

This is for beginners so we want to test basic loops and string manipulation. Advanced users should easily be able to do this in one line

"""

def arrToSentence(arrStr):
    sentence = " ".join(arrStr)
    return sentence 
#podría subir return sentence=...

listOne = ['hello', 'world', 'this', 'is', 'great'] 
print(arrToSentence(listOne))


def arrToSentence2(arrStr):
    sentence = ""
    for w in arrStr:
        sentence += f"{w} "
    return sentence 

print(arrToSentence2(listOne))

"""
Agregar cosas al principio y al final:
crear var/string start= " " , end = " "
formatear con el loop final

llama, chatgpt

"""

def arrToSentence3(arrStr):
    quote = "\'"
    sentence = ""
    for w in arrStr:
        sentence += f"{w} "
    return sentence 

    # o return f"{quote}{sentence}{quote}"

#arrToSentence(listOne)




# Kata 3

"""
Opposites Attract

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't

"""

"""
def love(flowerTimmy, flowerSarah):
    even = {%2 == 0}
    odd != even

    love = True
    
    if flowerTimmy == even & flowerSarah == odd:
        return love
    else
        return !love

"""    


"""
#Caso especifico timmy evalua; sería con o
# o sería cambiando la sentencia evaluadora
# caso no amor 

def loveTS(flowerTimmy, flowerSarah):
    love = True
    
    if flowerTimmy %2 == 0 & flowerSarah %2 != 0: 
        return love
    else:
        return !love  

print(loveTS(2,3))

"""

def loveTS(flowerTimmy, flowerSarah):
    if (flowerTimmy %2 == 0 & flowerSarah %2 != 0) | (flowerTimmy %2 != 0 & flowerSarah %2 == 0):
        return True 
    else:
        return True
    

print("loveTs: ")
print(loveTS(2,3))

"""
tabla verdad
t s
i p V
p i V
i i F
p p F 
""" 


# kata 4

"""
Sum of positive
Task

You get an array of numbers, return the sum of all of the positives ones.
Example

    [1, -4, 7, 12] => 1+7+12=20 1 + 7 + 12 = 20 1+7+12=20

Note

If there is nothing to sum, the sum is default to 0.

"""

def sumArr (arrNum):
    #empty = 0
    #elemOne = arrNum[]
    total = 0 
    
    if len(arrNum) == 0:
        return arrNum
    if len(arrNum) == 1:
        return arrNum 

    for n in arrNum:
        total += n 
    return total 

arr = [1, 2, 3, 4]
arrEmpty = []
arrOneElem = [1]

print(sumArr(arr))
print(sumArr(arrEmpty))
print(sumArr(arrOneElem))

# Kata 5

"""
Century From Year
Introduction

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task

Given a year, return the century it is in.
Examples

1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28

Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here

"""

"""
def century(year):
    import datetime
    century = datetime.datetime(year)
    return century.strftime("%C")
    

print(century(1999))
print(century(2000))
print(century(2001))
"""


"""
def century2(years):
    import datetime
    century = datetime.datetime(year
    return century.strftime("%C") 

print(century2(2000))
print(century2(2001))

"""

"""
def century(years):
    century = 100
    ages = (years/century)
    return f"{ages:n}"

print(century(100))
print(century(2002))
print(century(2000))
print(century(2001))

"""

"""
def century(years):

    century = 100
    ages = years//century
    return f"{ages}"
    
print(century(100))
print(century(2002))
print(century(2000))
print(century(2001))
print(century(2100))
print(century(2742))

"""


def century(year):
    # Dividir entre 100 y sumar algo si hay residuo
    century = year // 100
    if year % 100 != 0:
        century += 1
    return century
    
    
print(century(100))
print(century(1705))
print(century(1900))
print(century(1601))
print(century(2000))
print(century(2742))
print(century(2001))

"""
100 --> 1
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28

"""


#import math

def year_to_century(year):
    return math.ceil(year / 100)


def year_to_century(year):
    return (year + 99) // 100


century = lambda year: (year + 99) // 100




#kata 6
