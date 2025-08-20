"""
obj: Conj de datos y metodos
Elem fundamentales que manipulan los programas
Cada obj tiene un tipo que definene las acciones/func que se pueden hacer con él
Ej: predeterminados como float y str con sus métodos asociados a ellos

Un lenguaje tiene tipos y func utiles limitados
Podemos agregar tipos útiles, como lo haciamos con funciones

ADT y Classes
adt: conjunto de objts y operaciones
Se bindean sus datos y operaciones para que el obj se pueda usar en todo el programa
Definen una interfaz entre el adt y el resto del programa
La interfaz define el comportamiento de las operaciones
Qué hace, pero no como lo hace.
interfaz proporciona una barrera de abstracción
aísla el resto del programa de las estructuras

Programación: gestionar la complejidad para facilitar el cambio
Dos mecanismo para lograrlo:
1. Descomposición: crea estructura en un programa
2. Abstracción: suprime los detalles
Clave: suprimir detalles apropiados.

Con ADT Podemos crear tipos específicos de dominio
Para proporcionar abstracción (solo func) necesaria para resolver un problema

Los ADT agrupan conceptos/obj releventes en la vida útil del programa
Implementamos abstracciones de datos mediante clases
"""

"""
class Toy(object): #toy subclass de object
    def __init__(self):
        self._elems = []
    def add(self, new_elems):
        #new_elems is a list
        self._elems += new_elems
    def size(self):
        return len(self._elems)

print(type(Toy))
print(type(Toy.__init__), type(Toy.add), type(Toy.size))

"""

"""
<class ‘type'>
<class 'function'> <class 'function'> <class 'function'>
"""

"""
La definición 'class Toy(object)'
crea un 'objeto de tipo type'
'asocia' con ese objeto de clase
un 'conjunto de objetos llamados atributos'.

Atributos asociados:
__init__, add y size son de tipo 'función'
Toy es de tipo 'type'

Nombres especiales como __init__
Al instanciar a 'Toy' se llama a init
"""

#s = Toy()

"""
intérprete creará una nueva instancia de tipo Toy
Luego llamará a Toy.__init__ 
con el objeto recién creado como 'parámetro real' (s)
bindeado al al parámetro formal self.

invocar a Toy.__init__ crea el obj list '_elems'
pasa a formar parte de la instancia recién creada de tipo Toy.

La lista `_elems` es atributo de dato
de la instancia de Toy (es es s)
"""

#t1 = Toy()
#print(type(t1))
#print(type(t1.add))
#t2 = Toy()
#print(t1 is t2) #test for object identity

"""
<class '__main__.Toy'>
<class 'method'>
False
"""

"""
t1.add es de tipo método; Toy.add era func
Como es un método podemos invocarlo con un punto .

Una clase =/= a una instancia
Un obj de tipo list =/= a el tipo list

Los atributos pueden asociarse con una clase en sí
o con sus instancias:

1. Los atributos de clase se definen en una definición de clase.
Toy.size es un 'atributo de la clase' Toy

La instanciar Toy como t = Toy():
se crean los 'atributos de instancia' como t.size

2. t.size está bindeado a la func Toy.size
Hace que pueda modificarse mediante un cálculo
(Pero no debería) hacer t.size = 3.

1. atributos de datos asociados/ligados/bindeados
a una clase son llamados 'variables de clase'

2. atributos de datos asociados a una instancia:
son 'variables de instancia'

_elems es una 'variable de instancia' porque
para cada instancia de la clase Toy
_elems está 'ligado a una lista diferente'
Hasta ahora, no hemos visto una variable de clase
"""

#t1 = Toy()
#t2 = Toy()
#t1.add([3, 4])
#t2.add([4])
#print(t1.size() + t2.size())

"""
cada instancia de Toy es un objeto diferente (t1, t2)
cada instancia de tipo Toy tendrá un atributo
_elems diferente.
el código imprime 3.
Por primera vez ejecutamos .add() y .size()

parece haber alguna inconsistencia:
cada método se llama con un argumento menos
add tiene dos parámetros formales
pero parece que lo llamamos con un solo parámetro real.
"""

"""
Params:

Definición
def __init__(self):
    self._elems = []
    
def add(self, new_elems):
    new_elems is a list
    self._elems += new_elems

Uso:
t1.add([3, 4])
t2.add([4])

t1 y t2 es self y new_elems los valores

se debe al uso de la notación de punto
invocar un método asociado a una instancia
de una clase

t1. t2.

El objeto asociado a la expresión que precede al punto
se pasa implícitamente como primer parámetro del método. 
"""

"""
convención común: _ al nombre de los atributos de datos
indicar que el atributo es privado para la clase
no se debe acceder directamente fuera de ella.
"""

"""
Implementación pedagógica de ADT de 'Int_set'
"""

Class Int_set(object):
    """An Int_set is a set of integers"""
    #Information about the implementation (not the abstraction):
        #Value of a set is represented by a list of ints, self._vals.
        #Each int in a set occurs in self.vals exactly once.

    def __init__(self):
        """Create an empty set of integers"""
        self._vals = []

    def insert(self, e):
        """Assumes e is an integer and inserts e into self"""
        if e not in self._vals:
            self._vals.append(e)

    def member(self, e):
        """Assumes e is an integer and remove e from self
        Returns True if e is in self, and False otherwise"""
        return e in self._vals

    def remove(self, e):
        """Assumes e is an integer and removes e from self
        Raices ValueError if e is not in self"""
        try:
            self._vals.remove(e)
        except:
            raise ValueError(str(e) + 'not found')

    def get_members(self):
        """Returns a list containing the elements of self._
        Nothing can be assumed about the order of the elements"""
        return  self._vals[:]

    def _str_(self):
        """Returns a string representation of self"""
        if self._vals == []:
            return '{}'
        self._vals.sort()
        result = ''
        for e in self._vals:
            result = result + str(e) + ','
        return f'{{{result[:1]}}}'


"""
Magic Methods and Hashable Types
"""

class Toy(object):
    def __init__(self):
        self._elems = []

    def add(self, new_elems):
        """new_elems is a list"""
        self._elems += new_elems
    #def size(self):
        #return len(self._elems)

    """size -> __len__"""
    def __len__(self):
        return len(self._elems)

    def __add__(self._elems):
        new_toy = Toy()
        new_toy._elems = self._elems + other._elems
        return new_toy

    def __eq__(self, other):
        return self._elems == other._elems

    def __str__(self):
        return str(self._elems)

    def __has__(self):
        return id(self)

t1 = Toy()
t2 = Toy()
t1.add([1, 2])
t2.add([3, 4])
t3 = t1 + t2
print('The value of t3 is', t3)
print('The length of te is', len(t3))
d = {t1: 'A', t2: '8'}
print('The value', d[t1], 'is associated with the key t1 in d.')

"""
Imprime:
The value of t3 is [1, 2, 3, 4]
The length of t3 is 4
The value A is associated with the key t1 in d.
"""

"""
Podemos usar instancias de Toy como claves de diccionario porque definimos una función `__hash__` para la clase. 
Si hubiéramos definido una función `__eq__` y no una función `__hash__`, el código habría generado el mensaje de error "unhashable type: ‘Toy'" al intentar crear un diccionario usando t1 y t2 como claves. 
Cuando se proporciona un `__hash__` definido por el usuario, se debe garantizar que el valor hash de un objeto sea constante durante su vida útil.
Todas las instancias de clases definidas por el usuario que no definen explícitamente `__eq__` usan la identidad del objeto para == y son hashables. 
Si no se proporciona ningún método `__hash__`, el valor hash del objeto se deriva de la identidad del objeto
"""


# Designing Programs Using Abstract Data Types

"""
Pensar en un programa más como una colección de tipos
que como una colección de funciones conduce
a un principio de organización profundamente diferente.

Esto, a su vez, nos lleva a pensar en la esencia
de la programación como un proceso no de escribir
líneas de código individuales, sino de componer
abstracciones.

La disponibilidad de abstracciones reutilizables
no solo reduce el tiempo de desarrollo, sino que
suele generar programas más fiables, ya que el
software maduro suele ser más fiable que el nuevo.
"""


# Using Classes to Keep Track of Students and Faculty

class Person(object):
    def __init__(self, name):
        """Assumes name a string. Create a person"""
        self._name = name
        try:
            last_blank = name.rindex('')
            self._last_name = name[last_blank+1:]
        except:
            self.birthday = None

    def get_name(self):
        """Returns self's full name"""
        return self._last_name

    def get_last_name(self):
        """Assumes birthdate is of type datetime.date
            Sets self's birthday to birthdate"""
        self._birthday = birthdate

    def get_age(self):
        """Returns self's current age in days"""
        if self._birthday == None:
            raise ValueError
        return (datetime.date.today() - self._birthday).days 

    def __lt__(self, other):
        """Assume other a Person
            Returns True if self precedes other in alphabetical
            order, and Dalse otherwise. Comparison is based on last 
            names, but if these are the same full names are compared."""
        if self._last_name == other._last_name:
            return self._name < other._name
        return self._last_name < other._last_name

    def __str__(self):
        """Returns self's name"""
        return self._name

    
me = Person('Michael Guttag')
him = Person('Barack Hussein Obama')
her = Person('Madonna')
print(him.get_last_name())
him.set_birthday(datetime.date(1961, 8, 4))
her.set_birthday(datetime.date(1958, 8, 16))
print(him.get_name(), 'is', him.get_age(), ‘days old')

"""
Por ejemplo, him.get_last_name() devuelve 'Obama'.
La expresión him._last_name también devolverá 'Obama';
##### sin embargo, por razones que se explican más adelante en este capítulo, escribir expresiones que accedan directamente a variables de instancia se considera inadecuado y debe evitarse. 

"""

pList = [me, him, her]
for p in pList:
	print(p)
pList.sort()
for p in pList:
	print(p)

"""
Out:
Michael Guttag
Barack Hussein Obama
Madonna
Michael Guttag
Madonna
Barack Hussein Obama
"""


