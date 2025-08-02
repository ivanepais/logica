class Toy(object):
    def __init__(self):
        self._elems = []
    def add(self, new_elems):
        """new_elems is a list"""
        self._elems += new_elems
    def size(self):
        return len(self._elems)


print(type(Toy))
print(type(Toy.__init__), type(Toy.add), type(Toy.size))

"""
<class ‘type'>
<class 'function'> <class 'function'> <class 'function'>
"""

s = Toy()

t1 = Toy()
print(type(t1))
print(type(t1.add))
t2 = Toy()
print(t1 is t2) #test for object identity

"""
<class '__main__.Toy'>
<class 'method'>
False
"""

t1 = Toy()
t2 = Toy()
t1.add([3, 4])
t2.add([4])
print(t1.size() + t2.size())


"""
Params

def add(self, new_elems):
    new_elems is a list
    self._elems += new_elems
"""
