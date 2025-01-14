print( "Welcome to the GPA calculator." )
print( "Please enter all your letter grades, one per line." )
print( "Enter a blank line to designate the end." )

# map from letter grade to point value
points = {
    "A+" :4.0, "A" :4.0, "A-" :3.67, "B+" :3.33, "B" :3.0, "B-" :2.67,
    "C+" :2.33, "C" :2.0, "C" :1.67, "D+" :1.33, "D" :1.0, "F" :0.0
}

num_courses = 0
total_points = 0

done = False

while not done:
    grade = input( )
# read line from user
# empty line was entered
    if grade == " ":
        done = True
    elif grade not in points:
# unrecognized grade entered
        print("Unknown grade '{0}' being ignored".format(grade))
    else:
        num_courses += 1
        total_points += points[grade]
# avoid division by zero
if num_courses > 0:
    print( "Your GPA is {0:.3}".format(total_points / num_courses))



# Funciones

def count(data, target):
    n=0
    for item in data:
        if item == target:  # found a match
            n += 1
    return n


# Return

def contains(data, target):
    for item in target:
        if item == target:  # found a match
            return True
    return False


# input and output

# print and input funcions 

age = int(input( "Ingrese su edad en años: " ))
max_heart_rate = 206.9 − (0.67 age) # as per Med Sci Sports Exerc.
target = 0.65 max_heart_rate
print( "Su frecuencia cardíaca objetivo para quemar grasa es" , target)


# Files


# Excepciones

