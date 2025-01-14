# Recursion
# Pseudocódigo

"""
def look_for_key(main_box):
    pile = main_box.make_a_pile_to_look_through()
    while pile is not empty:
        box = pile.grab_a_box()
        for item in box:
            if item.is_a_box():
                pile.append(item)
        elif item.is_a_key():
            print “found the key!”
"""

"""
def look_for_key(box):
    for item in box:
        if item.is_a_box():
            look_for_key(item)
        elif item.is_a_key():
            print “found the key!”
"""

# Base case and recursive case

# print 3...2...1
"""
def countdown(i):
    print i
    countdown(i-1)
"""

# infinit loop
"""
print i <-> call countdown with i-1 
3...2...1...0...-1...-2...
ctrl-c 
"""

"""
def countdown(i):
    print i
    if i <= 0:	#Base case
        return
    else:	#Recursive case
        countdown(i-1)
"""

# Factorial

def fact(x):
    if x == 1:
        return 1
    else:
        return x * fact(x-1)

print (fact(3))
