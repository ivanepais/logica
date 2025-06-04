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

"""
Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive.
The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

""" 

def xo(string):
    lows = string.lower()
    x = lows.count("x")
    o = lows.count("o")
    if x == o: 
        return True
    else:
        return False

""

"""
var equal = True if x == 0 else False

"""


"""
x == 0 (igualdad de valores)
también chequea la no existencia
0 == 0 -> true
"""
print(xo("ooxx"))
print(xo("xooxx"))
print(xo("ooxXm"))
print(xo("zpzpzpp"))
print(xo("zzoo"))


"""
expression var

Evitar lógica innecesaria:
    if x == y 
        return True
    
    return True

 if x == y 
     return True
 elif (lows != "x" and lows != "y")
     return True
 else:
     return false

"""

def Xo(s):
    return s.lower().count('x') == s.lower().count('o')


def xO(s):
        
    letters = s.casefold()    
    o = letters.count("o")
    x = letters.count("x")
    
    if o == x :
        type = True
    else:
        type = False
    
    return type



# kata 18

"""
String ends with?

Complete the solution so that it returns true:
if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') # returns true
solution('abc', 'd') # returns false

"""

"""
en rtn calculamos como true la primera express:

"""

def strEnds(stringOne, stringTwo):
    return stringOne.endswith(stringTwo) 

#print(strEnds("abc", "bc"))
#print(strEnds("abc", "d"))

"""
solution = str.endswith

"""



# kata 19 
"""
check square

Given an integral number, determine if it's a square number:

    In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.
Examples

-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false

"""

"""
import math
import cmath
print("el cuadrado es:", math.isqrt(26))
#5, redondea aunque no sea cuadrado perf
print("el cuadrado es:", math.isqrt(25))
#5

s =  True if math.isqrt(26) else False
r =  True if cmath.sqrt(25) else False
print(s, r)


print("el cuadrado es:", math.sqrt(25))
print("el cuadrado es:", math.sqrt(26))

#True if type(s) is float else False
"""

import math
def isSquare(num):
    if num >= 0: 
        s = math.sqrt(num)
        return s == int(s)
    
    return False


print("Tipos:")
"""
print(True if type(4) == int else False)
print(True if type(4.5) == int else False)
"""

"""
print(4.5 is int)
print(4 is int)
"""

"""
print(math.isqrt(26))
print(math.sqrt(26))
print(math.sqrt(25))
print(cmath.sqrt(25))
print(cmath.sqrt(25))
print(cmath.sqrt(25))

"""

"""
print(isSquare(-1))
print(isSquare(0))
print(isSquare(3))
print(isSquare(4))
print(isSquare(25))
print(isSquare(26))
"""

#import math

def es_cuadrado_perfecto(n):
    raiz = math.sqrt(n)
    return raiz == int(raiz)

# Ejemplos de uso:
print(es_cuadrado_perfecto(16))  # True
print(es_cuadrado_perfecto(20))  # False
print(es_cuadrado_perfecto(25))  # True
print(es_cuadrado_perfecto(1.5))


def is_square(n):
    return n > -1 and math.sqrt(n) % 1 == 0;



# kata 20

"""
Friend or Foe

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Input = ["Ryan", "Kieran", "Jason", "Yous"]
Output = ["Ryan", "Yous"]

Input = ["Peter", "Stephen", "Joe"]
Output = []

Input strings will only contain letters.
Note: keep the original order of the names in the output

"""


def Friends(arrStr):
    return [f for f in arrStr if len(f) == 4] 

def friendS(arrStr):
    return list(filter(lambda f : len(f) == 4, arrStr))

"""
print(Friends(["Ryan", "Kieran", "Jason", "Yous"])) 
print(friendS(["Ryan", "Kieran", "Jason", "Yous"]))
"""


# kata 21

"""
Regex

Validate PIN code

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
Examples (Input --> Output)

"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

"""

def pin(string):
    from re import findall
    l = list(string)
    filt = list(findall("[0-9]", string))

    if l == filt: 
        return True if len(l) == 4 or len(l) == 6 else False
    else:
        return False 

"""
print(pin("1234"))
print(pin("12345"))
print(pin("a234"))
"""

def validate_pin(pin):
    return len(pin) in (4, 6) and pin.isdigit()

def valid_pin(pin):
    return len(pin) in [4, 6] and pin.isdigit()

def val_pin(pin):
    return bool(re.fullmatch("\d{4}|\d{6}", pin))

v_pin = lambda pin: len(pin) in (4, 6) and pin.isdigit()



# Get the Middle Character

"""
You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

    If the string's length is odd, return the middle character.
    If the string's length is even, return the middle 2 characters.

Examples:

"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"

"""
def midchars(string):
    long = len(string)
    mid = long // 2
    return string[mid-1:mid+1] if long %2 == 0 else string[mid]

    """
    mid = len(string)/2
    print(mid)
    
    for x in string:
        mid = len(string)/2
        print(mid)
    """ 

"""
print(midchars("test"))
print(midchars("testing"))
print(midchars("middle"))
print(midchars("A"))
"""             



# Kata 22

"""
Disemvowel Trolls

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel
"""

"""
def rmv_vow(string):
    return ''.join(c for c in string if c not in ("a", "e", "i", "o", "u"))

print(rmv_vow("This website is for losers LOL!"))


def rmvVowel(string):
    return string.replace("a", "").replace("e", "").replace("i", "").replace("o", "").replace("u", "")

print(rmvVowel("This website is for losers LOL!"))


def removeVowel(s):
    return "".join([char for char in s if char not in ["a", "e", "i", "o", "u"]])

print(removeVowel("This website is for losers LOL!"))

"""

def disemvowel(string):
    return "".join(c for c in string if c.lower() not in "aeiou")
"""
toma c, conver lower; prueba subcadena de aeiou
>>> 'A' in 'aeiou'
False
>>> 'A'.lower() in 'aeiou'
True

"""

"""
def remove_exclamation_marks(string):
    new_str = ""
    for c in string:
        if c != "!" and c != "¡":
            new_str += c
    return new_str

#invierte logica, recorre subcadena aeiou
#actualiza directamente s 

"""

def disvowel(s):
    for i in "aeiouAEIOU":
        s = s.replace(i,'')
    return s

def disemVowel(string):
    import re
    return re.sub(r"[aeiouAEIOU]", "", string)

def disem_vowel(string_):
    vowels = ["a","e","i","o","u","A","E","I","O","U"]
    for letter in vowels:
        string_ = string_.replace(letter,"")
    return string_

def disvowel(string):
    a=['a','A','e','E','i','I','o','O','u','U']
    for x in string:
        if x in a:
           string=string.replace(x,'')
    return string



# kata 23

"""
Opposite number

Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:

1: -1
14: -14
-34: 34

"""

def opposite(num):
    return -num

"""
print(opposite(1))
print(opposite(14))
print(opposite(-34))

"""


# kata 24

"""
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

"""

def short_w(s):
    l = s.split(" ")
    lenl = [len(e) for e in l]
    return min(lenl) 
    
print(short_w("The words of the world"))

def find_short(s):
    return min(len(x) for x in s.split())

def find_short_w(s):
    return min(map(len, s.split(' ')))

def f_short(s):
    s = s.split()
    l = min(s, key = len) 
    return len(l)

def find_sh(s):
    l = map(len, s.split(" "))
    return min(l)


# Kata 25

"""
Will you make it?

You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not

"""

def fuel(kmStation, avgConsum, fuelStock):
    return kmStation <= avgConsum*fuelStock

print(fuel(200, 40, 7))

def zeroFuel(distance_to_pump, mpg, fuel_left):
    return mpg*fuel_left >= distance_to_pump



# kata 26

"""
Invert values

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []

You can assume that all values are integers.
Do not mutate the input array

"""

def inv(arrNum):
    return list(map(lambda e : -e, arrNum))

#print(inv([1, 2, 3, 4, 5]))

def invN(lst):
    return [-x for x in lst]

def ivrt(lst):
    return list(map(int.__neg__, lst))

invertN = lambda lst: [-e for e in lst]



# kata 27

"""

sum arrays

Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
Examples

Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398
Assumptions

    You can assume that you are only given numbers.
    You cannot assume the size of the array.
    You can assume that you do get an array and if the array is empty, return 0.

"""


sumLst = lambda lst : sum(lst)

print(sumLst([1, 5.2, 4, 0, -1]))
print(sumLst([]))
print(sumLst([-2.398]))

def sumList(lst):
    return sum(list)

"""      
def sLst(lst):
    return [+e for e in lst]

print(sLst([1, 5.2, 4, 0, -1]))
print(sLst([]))
print(sLst([-2.398]))

"""

def sList(lst):
    return (map(lambda e : +e, lst))
"""
print(sList([1, 5.2, 4, 0, -1]))
print(sList([]))
print(sList([-2.398]))

"""   

def sum_array(a):
    sum = 0
    for i in a:
        sum += i
    return sum

"""
since his sum is already declared 0
it will return 0 if list is empty.
"""

sumArray = sum
"""
función integrada para esto,llamada "sum()"
le asignamos un nuevo alias.
"""


# kata 28

"""
Sum of odd numbers

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

"""

def sumOdd():
    return n**3
"""
suma de los números en la fila n del triángulo
de números impares consecutivos utilizando
la fórmula n ** 3

Identificar el primer número de la fila n:
a_n​=n^2−n+1.

Determinar el número de elementos en la fila n:
número de elementos igual al número de la fila

Calcular la suma de los números en la fila n:
n^3

Para n = 1, la suma es 1^3=1.
Para n = 2, la suma es 2^3=8.
Para n = 3, la suma es 3^3=27, que es 7+9+11=27.

fórmula:
calcular la suma de los números en la fila
S_n​=n^3.


"""



# Kata 29 

"""
Remove First and Last Character

"""

def rmvfl(s):
    return s[1:-1]

removeFLC = lambda s : s[1:-1]

"""
def rmFL(s):
    return "".join(c for c in s if  c[0] and c[-1])
"""

"""
print(rmvfl("hello"))
print(removeFLC("hello"))
print(rmFLC("hello"))
"""

def remove_char(s):
    s = list(s)
    s.pop()
    s.pop(0)
    return ''.join(s)

def remv_char(s):
    a = list(s)
    del a[0]
    del a[-1]
    l = ''
    for i in a:
        l += i
    return l



# Kata 30

"""
Repeat string

Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

"""

repStr = lambda n, s : s * abs(n)
"""
print(repStr(5, "I"))
print(repStr(5, "Hello"))
"""
repStrs = lambda n, s : s * -(-n)

print(repStrs(5, "I"))
print(repStrs(5, "Hello"))

"""
repeStr = lambda n, s : s * (-1*-n)

print(repeStr(5, "I"))
print(repeStr(5, "Hello"))

-1*n err

"""

# kata 31

"""
Simple multiplication

This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

"""

eightNineMult = lambda n : n*8 if n%2 == 0 else n*9

print(eightNineMult(1))
print(eightNineMult(2))

"""
Si no tenía "== 0", la sentencia if siempre
devolverá FALSO lo cual es incorrecto.
Esta respuesta es correcta si el valor de retorno es

return  n * 9 si el número % 2 else n * 8

"""

def simple_multiplication(number) :
    return number * 9 if number % 2 else number * 8



# Kata 32

"""
Binary Addition

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

"""

binAdd = lambda a, b : str(bin((a+b))[2:])

print(binAdd(1, 2))
print(binAdd(1, 1))
print(binAdd(5, 9))

def add_binary(a,b):
    return bin(a+b)[2:]



# Kata 33

"""
After a hard quarter in the office you decide to get some rest on a vacation.
So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation.
The manager of the car rental makes you some good offers.

Every day you rent the car costs $40.
If you rent the car for 7 or more days, you get $50 off your total.
Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

"""

def rental_car_cost(d):
    if d >= 7:
        return (40*d)*50
    elif d >= 3:
        return (40*d)*20
    elif d <= 2:
        return 40*d
    elif d < 1: 
        return False

print(rental_car_cost(1))
print(rental_car_cost(4))
print(rental_car_cost(7))
print(rental_car_cost(8))

def rental_car(d):
    result = d * 40
    if d >= 7:
        result -= 50
    elif d >= 3:
        result -= 20
    return result

def rent_car_cost(d):
    if d >= 7: return d * 40 - 50
    elif d >= 3: return d * 40 - 20
    return d * 40

def rental_car_cost(d):
  return d * 40 - (d > 2) * 20 - (d > 6) * 30

"""
Por ejemplo, (d > 2) puede evaluarse como Verdadero o Falso, que es 1 o 0 en Python
para que pueda usar ese resultado en el cálculo.
Técnicamente, creo que es una mala idea mezclar
tipos como este (es decir, booleano y entero),
pero Python tiene esta característica donde
booleano es un subtipo de entero, por lo que
es perfectamente aceptable

La clave es que en Python (y algunos otros lenguajes)
True es equivalente a 1 (contiene el valor de 1 en un contexto de cálculo numérico)
y False a 0.

"""

def ren_car_cost(d):
    discount = 50 if d > 6 else 20 if d > 2 else 0 
    return d * 40 - discount

rencar_cost = lambda d: 40*d-[0,20,50][(d>=3)+(d>=7)]

rentalcar_cost = lambda d: d * 40 - (50 if d > 6 else 20 if d > 2 else 0)



# Kata 34

"""
L1:Set Alarm

Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false

"""

setAlarm = lambda e, v : True if e is True and v is False else False

print(setAlarm(True, False))
print(setAlarm(True, True))


def set_alarm(employed, vacation):
    return employed and not vacation

def set_Alarm(employed, vacation):
    return employed > vacation

setalarm=lambda *a:a==(1,0)



# Kata 35

"""
Abbreviate a Two Word Name

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

"""

def abbName(fname):
    l = fname.split(" ")
    print(l)
    f = l[0]
    l = l[1]
    print(f)
    print(l)
    fi = f[0]
    la = l[0]
    print(fi)
    print(la)

    ab = f"{fi}.{la}".upper()
    return ab
    
print(abbName("Sam Harris"))
print(abbName("patrick feeney"))

def abbN(fname):
    name = fname.split(" ")
    first = name[0]
    last = name[1]

    abbF = first[0]
    abbL = last[0]
    return f"{abbF}.{abbL}".upper()

print(abbN("Sam Harris"))
print(abbN("patrick feeney"))


def abbrevName(name):
    return '.'.join(w[0] for w in name.split()).upper()

def abbNam(name):
    first, last = name.upper().split(' ')
    return first[0] + '.' + last[0]

def abbvName(name):
    names = name.split()
    return f"{names[0][0]}.{names[1][0]}".upper()

abbrvNa = lambda name: ".".join(e[0].upper() for e in name.split())



# Kata 35

"""
Remove String Spaces

Write a function that removes the spaces from the string, then return the resultant string.

Examples (Input -> Output):

"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"

"""

rmvSpaces = lambda s : s.replace(" ", "")

print(rmvSpaces("8aaaaa dddd r     "))

def no_space(x):
    return "".join(x.split())




