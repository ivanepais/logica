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

"""
Convert a Number to a String!

We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?
Examples (input --> output):

123  --> "123"
999  --> "999"
-100 --> "-100"

"""

"""
1. pseudocod:

1. def func que toma el input/param (number)
2. usar func para convertir param
3. le pasamos el param
4. guardarlo en var
5. retornar var

2. estr dat

func/param, methd

3. diagram

input: 
number

calc: 
func-convers str(number)

output: 
rtn number

"""

def numToStr(numInt):
    return str(numInt)

def number_to_string(num):
    # Return a string of the number here!
    # return "%s" % num          # %-formatting
    # return str(num)            # int to string
    # return "{n}".format(n=num) # str.format()
    return f"{num}"              # f-strings

number_to_string = lambda n: str(n)

def number_to_string(num): return str(num)

def number_to_string(num: int) -> str:
    return str(num)


# kata 7

"""
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"

The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

"""

def dnaToRNA(adn): return adn.replace('T', 'U')


# kata 8

"""
Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:

    If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
    If he doesn't get 10 hoops, return the string "Keep at it until you get it".

"""

def hulaHoop(nhoop): 
    if nhoop >= 10: 
        return "Great"
    else: 
        return "keep"

def hoop_count(n): return "Great, now move on to tricks" if n >= 10 else "Keep at it until you get it"

def hoop_count(n): return "Great, now move on to tricks" \
    if n >= 10 else "Keep at it until you get it"

def hoopCount(n):
    success = "Great, now move on to tricks"
    fail = "Keep at it until you get it"
    return success if n >= 10 else fail

def hoopCount(n):
    return ("Great, now move on to tricks", \
            "Keep at it until you get it")[n < 10]

hoopCount = lambda n: 'GKreeeapt ,a tn oiwt  muonvtei lo ny otuo gterti cikts'\
            [1-(n>9)::2]

def hoopCount(n):
    return ['Great, now move on to tricks' , 'Keep at it until you get it'][n<10]

def hoop_count(n):
    return {False: "Keep at it until you get it", True: "Great, now move on to tricks"}[n>=10]

hoop_count = lambda n: ["Great, now move on to tricks", "Keep at it until you get it"][n // 10 < 1]



# kata 9 
"""
How good are you really?

There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!
Note:

Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

"""


def average(arr): return (sum(arr))/len(arr)

"""
arr1 = [7, 2, 4, 8, 9, 10]
print(average(arr1))
"""

def better_than_average(class_points, your_points):
    average = (sum(class_points))/len(class_points)
    better = True if your_points > average else False
    return better

#Separar calc, parent

def better_than_avg(class_points, your_points):
    average = ( sum(class_points) ) / ( len(class_point) ) 
    better = True if your_points > average else False
    return better


def better_than_average(class_points, your_points):
    return your_points > sum(class_points) / len(class_points)
#Toda la lógica en una express


# kata 10 

"""
MakeUpperCase
Write a function which converts the input string to uppercase.

"""

def make_upper_case(s): return s.upper()

make_upper = str.upper


# kata 11 

"""
Total amount of points

Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

    if x > y: 3 points (win)
    if x < y: 0 points (loss)
    if x = y: 1 point (tie)

We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

    our team always plays 10 matches in the championship
    0 <= x <= 4
    0 <= y <= 4


"""

def teamPoints(arrStrResults):
    points = 0
    
    if len(arrStrResults) <= 10:
        for matchResult in arrStrResults:
            rX = int(matchResult[0])
            rY = int(matchResult[-1])

            if rX > rY:
                points += 3
            if rX == rY:
                points += 1

    if len(arrStrResults) > 10: 
        return "The tournament only has 10 match"

    return points 

"""
Si alguno de los equipos anota 10 o más
desearás haber usado la división.
Aunque es poco común, su simple posibilidad justifica su programación.

"""

def points(games):
    count = 0
    for score in games:
        res = score.split(':')
        if res[0]>res[1]:
            count += 3
        elif res[0] == res[1]:
            count += 1
    return count


"""
arrResults = ["3:1", "2:2", "0:1"]   
print( teamPoints(arrResults) )

"""

def points(games):
    count = 0
    for score in games:
        res = score.split(':')
        if res[0]>res[1]:
            count += 3
        elif res[0] == res[1]:
            count += 1
    return count


points = lambda g: sum((x>y)*3 or x==y for x,_,y in g)


#kata 12

"""
Square(n) Sum

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9

"""

def sumPow(arrNum):
    sum = 0 
    for n in arrNum: 
        p = pow(n, 2) 
        sum += p
    return sum

arrP = [1, 2, 2]

#print(sumPow(arrP))

def powArr(arrNum):
    sum = 0 
    for e in arrNum:
        p = e*e 
        sum += p
    return sum

#print(powArr(arrP))


def square_sum(numbers):
    return sum(x ** 2 for x in numbers)

"""
map()

"""

def square_sum(numbers):
    return sum(map(lambda x: x**2,numbers))


# kata 13

"""
Remove exclamation marks

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

"""

def rmvExclam(string):
    newStr = " " 
    for c in string:
        if c == "!": 
            string.replace("!", "")
        elif c == "¡":
            string.replace("¡", "")
        else:
            pass        
        newStr += c 
    return newStr    


"""
errores:
1. No estás actualizando la variable string con los replace().
Estás llamando a string.replace("!", ""), pero no estás asignando el resultado a ninguna variable.
En Python, str.replace() devuelve una nueva cadena, no modifica la original.

2. Estás agregando cada carácter original a newStr, incluso si es un signo de exclamación.
Esto contradice tu intención de eliminarlos.

3. Lainicialización de newStr = " " agrega un espacio innecesario al principio

"""

# Correción lógica
"""
Operador distinto, sin llamar a funciones.
dos condiciones para nuestro char valido
"""
def remove_exclamation_marks(string):
    new_str = ""
    for c in string:
        if c != "!" and c != "¡":
            new_str += c
    return new_str


def rmv_exclam_marks_phytonic(string):
    return ''.join(c for c in string if c not in ('!', '¡'))


def RemoveExclamationMarks(string):
    return string.replace("¡", "").replace("!", "")


def remove_punctuation(s):
    return "".join([char for char in s if char not in ["!", "?"]])

#print(remove_punctuation("Hello! World?"))  # outputs "Hello World"

"""
import re

def remove_punctuation(s):
    return re.sub("[!?]", "", s)

print(remove_punctuation("Hello! World?"))  # outputs "Hello World"
"""

"""
exclam = "!ab¡!!¡ls"
print(exclam)
print(RemoveExclamationMarks(exclam))

"""

"""
def rmvExclam(string):
    newStr = "" 
    for c in string:
        if c == "!": 
            newStr = string.replace("!", "")
    return newStr    

print(rmvExclam(exclam))

"""



# kata 14

"""
survive

A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)

"""

"""
dragon = x
bullet = y
surv = z

proporcionalidad
+2b -1d

"""

def survive(numDragons, numBullets):
    #heroBullets = 0
    #fightsDragon = 0 

    """
    estado inicial 
    """
    #survive = False
    #doubleB = 2 * bullets
    #doubleD = 2 * dragon
    """
    escenarios: 
    """

    """
    if bullets >= doubleB and bullets >= doubleD:
        return survive = True
    else
        return survive = False 
    return survive
    """
    survive = True if numBullets >= 2 * numDragons else False

    return survive

    """
    survive = False if dragons >= 2 * bullets else True 
    """

    """
    bullets/dragons: dividendo | divisor | resto | cociente

    /(cociente) %(resto)  //(redondeo) 

    %2 == 0 (par/impar)

    propor:

    drag/bull
    
    survive = False if dragons // bullets == 0 else True 

    """
    
"""
Twodragons = 2
Onebullets = 1 
print(survive(Twodragons, Onebullets))

"""

def heroSurvive(bullets, dragons): return True if bullets >= 2 * dragons else False

def heroIf(bullets, dragons):
    return bullets >= dragons * 2

"""
La operación ">=" termina evaluando como Verdadero
o Falso, por lo que no es necesario tener 2 declaraciones
de retorno diferentes.

"""

def herokills(bullets, dragons):
    dead_dragons = bullets/2
    if dragons > dead_dragons:
        return False
    else:
        return True



# kata 15 

"""
Quarter of the year

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

    1 <= month <= 12

"""

def monthToQuarter(month):
    err = "There are only 12 months in a year"
    
    if month <= 12:   
        q1 = {1, 2, 3}
        q2 = {4, 5, 6}
        q3 = {7, 8, 9}
        q4 = {10, 11, 12}

        if month in q1:
            return "q1"
        elif month in q2:
            return "q2"
        elif month in q3:
            return "q3"
        elif month in q4: 
            return "q4"
    else:
        return err


def quarter_of(month):
    # your code here
    if month in range(1, 4):
        return 1
    elif month in range(4, 7):
        return 2
    elif month in range(7, 10):
        return 3
    elif month in range(10, 13):
        return 4
print(monthToQuarter(9))


"""
from math import ceil
def quarter_of(month):
    return ceil(month / 3)

"""


def quarter_of_y(n):
    return (n + 2) // 3

def quarter_of_Y(month):
    year ={1: [1, 2, 3], 2: [4, 5, 6], 3: [7, 8, 9], 4: [10, 11, 12]}   
    for k, v in year.items():
        if month in v:
            return k

def quarter_of_yr(month):
    season = {1: 1, 2: 1, 3: 1, 
              4: 2, 5: 2, 6: 2,
              7: 3, 8: 3, 9: 3,
              10: 4, 11: 4, 12: 4}
    return season[month]


def quarter_of_year(month):
    if month in (1,2,3):
        return 1
    elif month in (4,5,6):
        return 2
    elif month in (7,8,9):
        return 3
    elif month in (10,11,12):
        return 4

def quarter_of_a_years(month):
    if month<=3: return 1
    elif month<=6: return 2
    elif month<=9: return 3
    else: return 4 


def quarter_year(month):
    q_dict = {1:1, 2:1, 3:1, 4:2, 5:2, 6:2, 7:3, 8:3, 9:3, 10:4, 11:4, 12:4}
    return q_dict.get(month)



# kata 16

"""
Reverse words

Complete the function that accepts a string parameter, and reverses each word in the string.
All spaces in the string should be retained

Ej:

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

"""


"""
conver str en arr: separar por space
reversa para cada elem del arr (?
problm: espacios dobles, volver a crearlos 
list(string) devuelve los espacios
reversed(iter) devuelve orden inverso
"""

def reverse(string):
    rev = string[::-1]
    return rev

print(reverse("This is an example!"))

"""
!elpmaxe na si sihT

aplicar este revers,
convertirlo en list
y aplicar rever
"""


def strToArr(string):
    return list(string)

print(strToArr("This is an example!"))
"""
['T', 'h', 'i', 's', ' ', 'i', 's', ' ', 'a', 'n', ' ', 'e', 'x', 'a', 'm', 'p', 'l', 'e', '!']
"""

def revStr3(string):
    rev = ''.join(reversed(string))
    return rev

#print(revStr3("This is an example!"))
"""
!elpmaxe na si sihT
"""


def arrToSentence(arrStr):
    sentence = " ".join(arrStr)
    return sentence 

"""
listOne = ['hello', 'world', 'this', 'is', 'great'] 
print(arrToSentence(listOne))
"""

def arrToSentence2(arrStr):
    sentence = ""
    for w in arrStr:
        sentence += f"{w} "
    return sentence


def strToArrR(string):
    nlist = list(string)
    rlist = nlist.reverse()
    return rlist
 
#print(strToArrR("This is an example!"))
"""
['!', 'e', 'l', 'p', 'm', 'a', 'x', 'e', ' ', 'n', 'a', ' ', 's', 'i', ' ', 's', 'i', 'h', 'T']
"""


"""
el efecto esperado es el de reversed:

Reverse the sequence of a list, and print each item:
alph = ["a", "b", "c", "d"]
ralph = reversed(alph)
for x in ralph:
  print(x) 

d
c
b
a

"""

"""
def strRever(string):
    #nlist = list(string)
    rlist = reversed(string)
    return rlist
exstr = "This is an example!"
print(strRever(exstr))
"""


"""
ahora cambiar el orden
!elpmaxe na si sihT

(?

cuando revierto el arr
despues cambio el orden del arr
de paso guarda los espacios

"""

"""
sihT
represent soluc minima
"""

"""
methds string, arr

list(string): devuelve arr (espac elem)
list.reverse(): revierte el orden 
reversed(secuend): devuelve un obj iter invert
str()

str methds: 
slice: s[:] rango de chars, parte de string
vacios es desde inicio o final 

(a.split(",")) # returns ['Hello', ' World!']

join(iter/secuen): une elem de iter en string
x = "#".join(myTuple)

arr methds:
range: new list
thislist[2:5]

change elem range
thislist[1:2] = ["blackcurrant", "watermelon"]

add elm final: append(elm)
add elm pos espec: thislist.insert(1, "orange")

thislist.remove("banana")
thislist.pop(1)
thislist.pop() ultimo item
del thislist[0]
del thislist todos elm
thislist.clear() empty
"""

"""
plan:
list(string)
split
ordenar cada elem/string del arr en rever
introducir espacios con join

problm: introd dos espac
if c != " " and c != "  "
rev(string)
"""


"""
def rStr(string):
    rev = string[::-1]
    lrev = list(rev)
    #['!', 'e', 'l', 'p', 'm', 'a', 'x', 'e', ' ', 'n', 'a', ' ', 's', 'i', ' ', 's', 'i', 'h', 'T']
    srev = lrev.sort(reverse = False)
    return srev 

print(rStr("This is an example!"))
"""

"""
aplicar sort(reverse=true)
"""

def rvStr(string):
    rs = string.split(" ")  
    ns = []
    for w in rs:
        ns.append(w[::-1])
    return " ".join(ns)

print(rvStr("This is an example!"))


#expre
def reverse_words (string): 
    string = string[::-1] 
    word_r = string.split(' ')
    word_r.reverse()
    output = ' '.join(word_r)
    return output



# kata 17




